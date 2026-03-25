// =====================================================
// pressurePositionModel.ts
// =====================================================
// This file maps internal role types
// to structural pressure positions.
//
// It represents the topology layer of the engine.
// No phase logic.
// No risk logic.
// No narrative logic.
//
// Pure structural mapping.
// =====================================================



// -----------------------------------------------------
// TYPE DEFINITIONS
// -----------------------------------------------------

// These are the 6 structural pressure positions
// defined in your pressure flow model.
//
// They describe where pressure originates,
// moves through, and accumulates in a system.

export type PressurePosition =
  | "origin"        // Creates strategic constraints or shocks
  | "control"       // Routes and distributes pressure
  | "translation"   // Converts abstract goals into execution
  | "execution"     // Produces outputs directly
  | "buffer"        // Absorbs variability and protects system
  | "peripheral";   // Indirect / non-core system functions


// Import RoleType from roleTypeModel
// (We assume this file lives in the same engine folder)
import type { RoleType } from "./roleTypeModel";


// Input contract
export interface PressureInput {
  roleType: RoleType;
}


// Output contract
export interface PressureResult {
  pressurePosition: PressurePosition;
}



// -----------------------------------------------------
// ROLE TYPE → PRESSURE POSITION MAPPING
// -----------------------------------------------------

// Deterministic structural mapping.
//
// This expresses your pressure flow model explicitly.
//
// IMPORTANT:
// This mapping is theory.
// It should rarely change.
// If it changes, it means your system model changed.

const ROLE_TO_PRESSURE_MAP: Record<RoleType, PressurePosition> = {

  // Produces outputs directly
  builder: "execution",

  // Organizes and translates work
  coordinator: "translation",

  // Improves systems but does not produce core output
  optimizer: "control",

  // Protects system from variability
  support: "buffer",

  // Sets direction and constraints
  leader: "origin",
};



// -----------------------------------------------------
// PRESSURE POSITION CLASSIFIER
// -----------------------------------------------------

/**
  * mapRoleToPressurePosition
  * ---------------------------------
  * Accepts a structural role type.
  * Returns structural pressure position.
 \*
  * Deterministic.
  * No branching logic.
  * No inference.
 */
export function mapRoleToPressurePosition(
  input: PressureInput
): PressureResult {

  // Extract internal role classification
  const { roleType } = input;

  // Map role type → pressure topology position
  const pressurePosition = ROLE_TO_PRESSURE_MAP[roleType];

  // Return structural position only
  return { pressurePosition };
}