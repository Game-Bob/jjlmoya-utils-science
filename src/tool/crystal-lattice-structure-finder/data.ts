export type LatticeId = 'simple-cubic' | 'face-centered-cubic' | 'hexagonal-close-packed';

export interface AtomSite {
  id: string;
  x: number;
  y: number;
  z: number;
  role: 'corner' | 'face' | 'interior';
}

export interface LatticeStructure {
  id: LatticeId;
  shortName: string;
  coordinationNumber: number;
  atomsPerCell: number;
  packingFactor: number;
  radiusToA: number;
  cToA?: number;
  sites: AtomSite[];
  edges: [number, number][];
  vertices: [number, number, number][];
}

export interface MaterialPreset {
  id: string;
  formula: string;
  latticeId: LatticeId;
  atomicMass: number;
  latticeA: number;
  cToA?: number;
  atomsPerFormulaUnit?: number;
}

export interface DensityResult {
  density: number;
  cellVolumeCm3: number;
  cellMassG: number;
  atomsPerCell: number;
  packingFactor: number;
}

const cubeVertices: [number, number, number][] = [
  [0, 0, 0],
  [1, 0, 0],
  [1, 1, 0],
  [0, 1, 0],
  [0, 0, 1],
  [1, 0, 1],
  [1, 1, 1],
  [0, 1, 1],
];

const cubeEdges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 0],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 4],
  [0, 4],
  [1, 5],
  [2, 6],
  [3, 7],
];

const hexVertices: [number, number, number][] = [
  [1, 0, 0],
  [0.5, 0.866, 0],
  [-0.5, 0.866, 0],
  [-1, 0, 0],
  [-0.5, -0.866, 0],
  [0.5, -0.866, 0],
  [1, 0, 1],
  [0.5, 0.866, 1],
  [-0.5, 0.866, 1],
  [-1, 0, 1],
  [-0.5, -0.866, 1],
  [0.5, -0.866, 1],
];

const hexEdges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 0],
  [6, 7],
  [7, 8],
  [8, 9],
  [9, 10],
  [10, 11],
  [11, 6],
  [0, 6],
  [1, 7],
  [2, 8],
  [3, 9],
  [4, 10],
  [5, 11],
];

export const LATTICE_STRUCTURES: LatticeStructure[] = [
  {
    id: 'simple-cubic',
    shortName: 'SC',
    coordinationNumber: 6,
    atomsPerCell: 1,
    packingFactor: Math.PI / 6,
    radiusToA: 0.5,
    vertices: cubeVertices,
    edges: cubeEdges,
    sites: cubeVertices.map(([x, y, z], index) => ({
      id: `sc-corner-${index}`,
      x,
      y,
      z,
      role: 'corner' as const,
    })),
  },
  {
    id: 'face-centered-cubic',
    shortName: 'FCC',
    coordinationNumber: 12,
    atomsPerCell: 4,
    packingFactor: Math.PI / (3 * Math.sqrt(2)),
    radiusToA: Math.sqrt(2) / 4,
    vertices: cubeVertices,
    edges: cubeEdges,
    sites: [
      ...cubeVertices.map(([x, y, z], index) => ({
        id: `fcc-corner-${index}`,
        x,
        y,
        z,
        role: 'corner' as const,
      })),
      { id: 'fcc-face-bottom', x: 0.5, y: 0.5, z: 0, role: 'face' as const },
      { id: 'fcc-face-top', x: 0.5, y: 0.5, z: 1, role: 'face' as const },
      { id: 'fcc-face-front', x: 0.5, y: 0, z: 0.5, role: 'face' as const },
      { id: 'fcc-face-back', x: 0.5, y: 1, z: 0.5, role: 'face' as const },
      { id: 'fcc-face-left', x: 0, y: 0.5, z: 0.5, role: 'face' as const },
      { id: 'fcc-face-right', x: 1, y: 0.5, z: 0.5, role: 'face' as const },
    ],
  },
  {
    id: 'hexagonal-close-packed',
    shortName: 'HCP',
    coordinationNumber: 12,
    atomsPerCell: 6,
    packingFactor: 0.74048,
    radiusToA: 0.5,
    cToA: 1.633,
    vertices: hexVertices,
    edges: hexEdges,
    sites: [
      ...hexVertices.map(([x, y, z], index) => ({
        id: `hcp-boundary-${index}`,
        x: (x + 1) / 2,
        y: (y + 0.866) / 1.732,
        z,
        role: 'corner' as const,
      })),
      { id: 'hcp-center-bottom', x: 0.5, y: 0.5, z: 0, role: 'face' as const },
      { id: 'hcp-center-top', x: 0.5, y: 0.5, z: 1, role: 'face' as const },
      { id: 'hcp-interior-a', x: 0.33, y: 0.42, z: 0.5, role: 'interior' as const },
      { id: 'hcp-interior-b', x: 0.67, y: 0.58, z: 0.5, role: 'interior' as const },
      { id: 'hcp-interior-c', x: 0.5, y: 0.28, z: 0.5, role: 'interior' as const },
    ],
  },
];

export const MATERIAL_PRESETS: MaterialPreset[] = [
  {
    id: 'copper',
    formula: 'Cu',
    latticeId: 'face-centered-cubic',
    atomicMass: 63.546,
    latticeA: 3.615,
  },
  {
    id: 'aluminum',
    formula: 'Al',
    latticeId: 'face-centered-cubic',
    atomicMass: 26.9815,
    latticeA: 4.0495,
  },
  {
    id: 'polonium',
    formula: 'Po',
    latticeId: 'simple-cubic',
    atomicMass: 208.9824,
    latticeA: 3.359,
  },
  {
    id: 'magnesium',
    formula: 'Mg',
    latticeId: 'hexagonal-close-packed',
    atomicMass: 24.305,
    latticeA: 3.209,
    cToA: 1.624,
  },
  {
    id: 'titanium',
    formula: 'Ti',
    latticeId: 'hexagonal-close-packed',
    atomicMass: 47.867,
    latticeA: 2.951,
    cToA: 1.587,
  },
  {
    id: 'halite',
    formula: 'NaCl',
    latticeId: 'face-centered-cubic',
    atomicMass: 58.4428,
    latticeA: 5.640,
    atomsPerFormulaUnit: 4,
  },
];
