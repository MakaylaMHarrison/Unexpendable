// =====================================================
// riskMatrix.ts
// =====================================================
// Phase × Pressure Position →
//   1. Risk Level
//   2. System Behavior
//
// This represents structural survivability physics
// plus observable system behavior.
//
// No narrative logic.
// No UI language.
// Pure structural model.
// =====================================================



// -----------------------------------------------------
// IMPORT TYPES
// -----------------------------------------------------

import type { Phase } from "./phaseModel";
import type { PressurePosition } from "./pressurePositionModel";



// -----------------------------------------------------
// RISK LEVEL TYPE
// -----------------------------------------------------

export type RiskLevel =
  | "low"
  | "moderate"
  | "high"
  | "extreme";



// -----------------------------------------------------
// OUTPUT CONTRACT
// -----------------------------------------------------

export interface RiskResult {
  riskLevel: RiskLevel;
  behavior: {
    positionBehavior: string[];
    phaseBehavior: string[];
  };
}



// -----------------------------------------------------
// CORE POSITION BEHAVIOR (PHASE-INDEPENDENT)
// -----------------------------------------------------

// These behaviors describe how each pressure position
// functions in a system regardless of phase.

const POSITION_BEHAVIOR: Record<PressurePosition, string[]> = {

  origin: [
    "Rarely cut early",
    "Externalizes pressure downward",
    "Framed as direction rather than stress"
  ],

  control: [
    "Protected until late",
    "Routes constraints to other layers",
    "Gains authority during compression"
  ],

  translation: [
    "Pressure concentrates here first",
    "Absorbs ambiguity between strategy and execution",
    "Blamed for systemic contradictions"
  ],

  execution: [
    "Carries pressure through labor and time",
    "Subject to output expectation changes",
    "Protected during expansion"
  ],

  buffer: [
    "Absorbs variability to protect core functions",
    "First to be overloaded",
    "Work increases before removal"
  ],

  peripheral: [
    "Indirect to immediate value creation",
    "Cut early during contraction",
    "Low political defense"
  ],
};



// -----------------------------------------------------
// PHASE BEHAVIOR MODIFIERS
// -----------------------------------------------------

// These describe how pressure behaves globally in each phase.

const PHASE_BEHAVIOR: Record<Phase, string[]> = {

  growth: [
    "Pressure spreads outward",
    "Buffers expand",
    "Translation roles are rewarded"
  ],

  consolidation: [
    "Pressure compresses downward",
    "Translation layers overloaded",
    "Buffers destabilize"
  ],

  extraction: [
    "Pressure moves directly to execution",
    "Output expectations increase",
    "Interchangeability logic appears"
  ],

  decline: [
    "Pressure becomes blame-focused",
    "Peripheral functions removed rapidly",
    "Core shrinks defensively"
  ],
};



// -----------------------------------------------------
// RISK MATRIX (PHASE × PRESSURE)
// -----------------------------------------------------

const RISK_MATRIX: Record<Phase, Record<PressurePosition, RiskLevel>> = {

  growth: {
    origin: "low",
    control: "low",
    translation: "moderate",
    execution: "low",
    buffer: "moderate",
    peripheral: "moderate",
  },

  consolidation: {
    origin: "low",
    control: "low",
    translation: "high",
    execution: "moderate",
    buffer: "high",
    peripheral: "high",
  },

  extraction: {
    origin: "low",
    control: "moderate",
    translation: "high",
    execution: "high",
    buffer: "extreme",
    peripheral: "extreme",
  },

  decline: {
    origin: "moderate",
    control: "moderate",
    translation: "high",
    execution: "high",
    buffer: "extreme",
    peripheral: "extreme",
  },
};



// -----------------------------------------------------
// RISK EVALUATION FUNCTION
// -----------------------------------------------------

export function evaluateRisk(
  phase: Phase,
  pressurePosition: PressurePosition
): RiskResult {

  const riskLevel = RISK_MATRIX[phase][pressurePosition];

  return {
    riskLevel,
    behavior: {
      positionBehavior: POSITION_BEHAVIOR[pressurePosition],
      phaseBehavior: PHASE_BEHAVIOR[phase],
    }
  };
}