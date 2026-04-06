import type { ToolDefinition } from './types';
import { COLONY_COUNTER_TOOL } from './tool/colony-counter/index';
import { ASTEROID_IMPACT_TOOL } from './tool/asteroid-impact/index';
import { MICROWAVE_DETECTOR_TOOL } from './tool/microwave-detector/index';
import { SIMULATION_PROBABILITY_TOOL } from './tool/simulation-probability/index';
import { CELLULAR_RENEWAL_TOOL } from './tool/cellular-renewal/index';

export const ALL_TOOLS: ToolDefinition[] = [
  COLONY_COUNTER_TOOL,
  ASTEROID_IMPACT_TOOL,
  MICROWAVE_DETECTOR_TOOL,
  SIMULATION_PROBABILITY_TOOL,
  CELLULAR_RENEWAL_TOOL,
];

