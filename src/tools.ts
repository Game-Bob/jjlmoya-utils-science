export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { COLONY_COUNTER_TOOL } from './tool/colony-counter/index';
import { ASTEROID_IMPACT_TOOL } from './tool/asteroid-impact/index';
import { MICROWAVE_DETECTOR_TOOL } from './tool/microwave-detector/index';
import { SIMULATION_PROBABILITY_TOOL } from './tool/simulation-probability/index';
import { CELLULAR_RENEWAL_TOOL } from './tool/cellular-renewal/index';
import { COSMIC_INFLATION_TOOL } from './tool/cosmic-inflation/index';
import { TEMPERATURE_TIMELINE_TOOL } from './tool/temperature-timeline/index';
import { LORENZ_ATTRACTOR_TOOL } from './tool/lorenz-attractor/index';
import { STELLAR_HABITABILITY_ZONE_TOOL } from './tool/stellar-habitability-zone/index';
import { RADIOACTIVE_DECAY_TOOL } from './tool/radioactive-decay/index';
import { NATURAL_SELECTION_DRIFT_TOOL } from './tool/natural-selection-drift/index';
import { ENTROPY_SECOND_LAW_TOOL } from './tool/entropy-second-law/index';
import { PHASE_DIAGRAM_CRITICAL_POINTS_TOOL } from './tool/phase-diagram-critical-points/index';

export const ALL_TOOLS: ToolDefinition[] = [
  COLONY_COUNTER_TOOL,
  ASTEROID_IMPACT_TOOL,
  MICROWAVE_DETECTOR_TOOL,
  SIMULATION_PROBABILITY_TOOL,
  CELLULAR_RENEWAL_TOOL,
  COSMIC_INFLATION_TOOL,
  TEMPERATURE_TIMELINE_TOOL,
  LORENZ_ATTRACTOR_TOOL,
  STELLAR_HABITABILITY_ZONE_TOOL,
  RADIOACTIVE_DECAY_TOOL,
  NATURAL_SELECTION_DRIFT_TOOL,
  ENTROPY_SECOND_LAW_TOOL,
  PHASE_DIAGRAM_CRITICAL_POINTS_TOOL,
];
