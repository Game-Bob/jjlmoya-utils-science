import L from "leaflet";
import { ImpactPhysics, type Composition, type ImpactResults } from "./logic/impactPhysics";
import { getCompositionColor } from "./helpers";
import { getConfig, updateUI } from "./ui";

let map: L.Map;

interface Impact {
	id: string;
	circles: L.LayerGroup;
	marker: L.Marker;
	data: ImpactResults;
	config: typeof config;
}

const impacts: Impact[] = [];
const config = getConfig();

interface VerdictConfig {
	text: string;
	label: string;
	iconId: string;
	class: string;
}

const VERDICT_CONFIGS: Record<string, VerdictConfig> = {
	safe: {
		text: "ZONA SEGURA",
		label: "Sin amenazas",
		iconId: "icon-safe",
		class: "asteroid-verdict-safe",
	},
	shook: {
		text: "ONDA DE CHOQUE",
		label: "Daños estructurales",
		iconId: "icon-shock",
		class: "asteroid-verdict-shock",
	},
	burned: {
		text: "RADIACIÓN TÉRMICA",
		label: "Peligro extremo",
		iconId: "icon-burn",
		class: "asteroid-verdict-burned",
	},
	vaporized: {
		text: "ZONA CERO",
		label: "Impacto directo",
		iconId: "icon-death",
		class: "asteroid-verdict-vaporized",
	},
};

function setupControls() {
	const sizeInput = document.getElementById("input-size") as HTMLInputElement;
	const velInput = document.getElementById("input-velocity") as HTMLInputElement;
	const matBtns = document.querySelectorAll(".asteroid-material-btn");
	const presetBtns = document.querySelectorAll(".asteroid-preset-btn");
	const clearBtn = document.getElementById("clear-btn");

	sizeInput?.addEventListener("input", (e) => {
		config.diameter = parseInt((e.target as HTMLInputElement).value);
		updateUI();
	});

	velInput?.addEventListener("input", (e) => {
		config.velocity = parseInt((e.target as HTMLInputElement).value);
		updateUI();
	});

	matBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			config.composition = btn.getAttribute("data-type") as Composition;
			updateUI();
		});
	});

	presetBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			config.diameter = parseInt(btn.getAttribute("data-dia")!);
			config.velocity = parseInt(btn.getAttribute("data-vel")!);
			config.composition = btn.getAttribute("data-comp") as Composition;
			updateUI();
		});
	});

	clearBtn?.addEventListener("click", clearAll);
}

function setupGhostDrag() {
	const source = document.getElementById("drag-source-desktop");
	if (!source) return;

	const start = (e: MouseEvent | TouchEvent) => {
		e.preventDefault();
		const targetOverlay = document.getElementById("asteroid-map-target-overlay");
		if (targetOverlay) targetOverlay.classList.add("active");

		const onEnd = (endEvent: MouseEvent | TouchEvent) => {
			if (targetOverlay) targetOverlay.classList.remove("active");

			const clientX = (endEvent as MouseEvent).clientX || (endEvent as TouchEvent).changedTouches[0].clientX;
			const clientY = (endEvent as MouseEvent).clientY || (endEvent as TouchEvent).changedTouches[0].clientY;

			const point = map.mouseEventToContainerPoint({ clientX, clientY } as MouseEvent);
			const latlng = map.containerPointToLatLng(point);
			spawnImpact(latlng);

			window.removeEventListener("mousemove", onEnd);
			window.removeEventListener("mouseup", onEnd);
			window.removeEventListener("touchmove", onEnd);
			window.removeEventListener("touchend", onEnd);
		};

		window.addEventListener("mousemove", onEnd);
		window.addEventListener("mouseup", onEnd);
		window.addEventListener("touchmove", onEnd, { passive: false });
		window.addEventListener("touchend", onEnd);
	};

	source.addEventListener("mousedown", start);
	source.addEventListener("touchstart", start);
}

function renderCircles(latlng: L.LatLng, physics: ImpactResults, group: L.LayerGroup) {
	L.circle(latlng, {
		radius: physics.craterDiameter / 2,
		color: "#ef4444",
		fillColor: "#ef4444",
		fillOpacity: 0.6,
		weight: 0,
	}).addTo(group);

	L.circle(latlng, {
		radius: physics.thermalRadius,
		color: "#f97316",
		fillColor: "#f97316",
		fillOpacity: 0.15,
		weight: 1,
		dashArray: "5 5",
	}).addTo(group);

	L.circle(latlng, {
		radius: physics.shockwave1psi,
		color: "#3b82f6",
		fillColor: "#3b82f6",
		fillOpacity: 0.05,
		weight: 1,
	}).addTo(group);
}

function setupMarkerEvents(marker: L.Marker, group: L.LayerGroup, physics: ImpactResults) {
	marker.on("dragstart", () => {
		map.dragging.disable();
	});

	marker.on("drag", (e: L.LeafletEvent) => {
		const newPos = (e.target as L.Marker).getLatLng();
		group.clearLayers();
		renderCircles(newPos, physics, group);
		updateVerdict();
	});

	marker.on("dragend", (e: L.LeafletEvent) => {
		map.dragging.enable();
		const newPos = (e.target as L.Marker).getLatLng();
		group.clearLayers();
		renderCircles(newPos, physics, group);
		updateVerdict();
	});
}

function spawnImpact(latlng: L.LatLng) {
	const physics = ImpactPhysics.calculate({
		diameter: config.diameter,
		velocity: config.velocity * 1000,
		composition: config.composition,
		distance: 0,
	});

	const group = L.layerGroup();
	renderCircles(latlng, physics, group);
	group.addTo(map);

	const color = getCompositionColor(config.composition);
	const marker = L.marker(latlng, {
		draggable: true,
		icon: L.divIcon({
			className: "asteroid-marker",
			iconSize: [32, 32],
			iconAnchor: [16, 16],
			html: `<div style="width: 2rem; height: 2rem; border-radius: 50%; background-color: ${color}; border: 2px solid white; box-shadow: 0 4px 8px rgba(0,0,0,0.2);"></div>`,
		}),
	}).addTo(map);

	impacts.push({ id: Date.now().toString(), circles: group, marker, data: physics, config });
	setupMarkerEvents(marker, group, physics);
	updateVerdict();
}

function setupGPS() {
	const btn = document.getElementById("asteroid-gps-btn");
	btn?.addEventListener("click", () => {
		const gpsText = document.getElementById("asteroid-gps-text");
		if (gpsText) gpsText.textContent = "Buscando...";

		navigator.geolocation.getCurrentPosition(
			(pos) => {
				const ll = new L.LatLng(pos.coords.latitude, pos.coords.longitude);
				if (gpsText) gpsText.textContent = "GPS Activo";
				map.flyTo(ll, 9);
			},
			() => {
				if (gpsText) gpsText.textContent = "Error GPS";
			}
		);
	});
}

function updateVerdictUI(verdictConfig: VerdictConfig) {
	const label = document.getElementById("asteroid-verdict-label");
	const value = document.getElementById("asteroid-verdict-value");
	const icon = document.getElementById("asteroid-verdict-icon");
	const container = document.getElementById("asteroid-verdict-container");

	if (value) value.textContent = verdictConfig.text;
	if (label) label.textContent = verdictConfig.label;
	if (container) container.className = `asteroid-verdict-container ${verdictConfig.class}`;

	const iconSource = document.getElementById(verdictConfig.iconId);
	if (icon && iconSource) icon.innerHTML = iconSource.innerHTML;
}

function updateVerdict() {
	const pill = document.getElementById("asteroid-verdict-pill");
	if (impacts.length === 0) {
		pill?.classList.remove("active");
	} else {
		pill?.classList.add("active");
		updateVerdictUI(VERDICT_CONFIGS.safe);
	}
}

function clearAll() {
	impacts.forEach((i) => {
		map.removeLayer(i.circles);
		map.removeLayer(i.marker);
	});
	impacts.length = 0;
	updateVerdict();
}

function init() {
	map = L.map("asteroid-game-map", {
		zoomControl: false,
		attributionControl: false,
		dragging: true,
	}).setView([40.4168, -3.7038], 6);

	L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.webp", {
		subdomains: "abcd",
		maxZoom: 20,
		attribution: "&copy; OpenStreetMap &copy; CARTO",
	}).addTo(map);

	setupControls();
	setupGhostDrag();
	setupGPS();

	map.on("click", () => {
		map.dragging.enable();
	});
}

export interface Labels {
	searching: string;
	gpsActive: string;
	gpsError: string;
	verdictSafe: string;
	verdictSafeSub: string;
	verdictShock: string;
	verdictShockSub: string;
	verdictBurned: string;
	verdictBurnedSub: string;
	verdictVaporized: string;
	verdictVaporizedSub: string;
	rock: string;
	iron: string;
	ice: string;
}

export let labels: Labels = {
	searching: "Searching...",
	gpsActive: "GPS Active",
	gpsError: "GPS Error",
	verdictSafe: "SAFE",
	verdictSafeSub: "No threat",
	verdictShock: "SHOCK",
	verdictShockSub: "Damage",
	verdictBurned: "BURNED",
	verdictBurnedSub: "Extreme",
	verdictVaporized: "ZERO",
	verdictVaporizedSub: "Vaporized",
	rock: "Rock",
	iron: "Iron",
	ice: "Ice",
};

export function setLabels(newLabels: Partial<Labels>) {
	labels = { ...labels, ...newLabels };
}

export function initAsteroid(customLabels?: Partial<Labels>) {
	if (customLabels) {
		setLabels(customLabels);
	}
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", init);
	} else {
		init();
	}
}
