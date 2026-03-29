// =====================================================
// narrativeSelector.ts
// =====================================================
// Responsibility:
// Select the correct narrative template based on:
//
//   phase
//   pressurePosition
//
// This file:
// - Generates a deterministic template ID
// - Resolves the template from the registry
// - Provides a safe fallback if missing
//
// It does NOT:
// - Contain emotional logic
// - Modify content
// - Branch by risk level
// - Interpret behavior
// =====================================================



// -----------------------------------------------------
// IMPORTS
// -----------------------------------------------------

import type { Phase } from "./phaseModel";
import type { PressurePosition } from "./pressurePositionModel";
import {
  NARRATIVE_TEMPLATES,
  type NarrativeTemplate
} from "./narrativeTemplates";



// -----------------------------------------------------
// OUTPUT TYPE
// -----------------------------------------------------

export interface NarrativeSelectionResult {
  templateId: string;
  template: NarrativeTemplate;
}



// -----------------------------------------------------
// INTERNAL: FALLBACK TEMPLATE
// -----------------------------------------------------

// This is used ONLY if a template ID does not exist.
// It prevents runtime crashes.
// It should rarely ever trigger if the matrix is complete.

const FALLBACK_TEMPLATE: NarrativeTemplate = {
  id: "fallback",

  sections: {
    whatsHappening:
      "Your system state could not be mapped to a specific narrative pattern.",

    whyItFeelsTense:
      "There may be a configuration mismatch in the system.",

    howPressureMoves:
      "Pressure mapping is unavailable for this state.",

    whatThisMeansStructurally:
      "This fallback exists to prevent application failure."
  }
};



// -----------------------------------------------------
// TEMPLATE ID GENERATOR
// -----------------------------------------------------

/**
  * generateTemplateId
 \*
  * Pure string composition.
  * No branching.
 */
function generateTemplateId(
  phase: Phase,
  pressurePosition: PressurePosition
): string {
  return `${phase}__${pressurePosition}`;
}



// -----------------------------------------------------
// PUBLIC SELECTOR
// -----------------------------------------------------

/**
  * selectNarrativeTemplate
 \*
  * Takes structural outputs and returns:
  * - templateId
  * - resolved template object
 \*
  * Deterministic.
  * Safe.
  * Testable.
 */
export function selectNarrativeTemplate(
  phase: Phase,
  pressurePosition: PressurePosition
): NarrativeSelectionResult {

  // 1. Generate deterministic ID
  const templateId = generateTemplateId(phase, pressurePosition);

  // 2. Resolve from registry
  const template =
    NARRATIVE_TEMPLATES[templateId] ?? FALLBACK_TEMPLATE;

  // 3. Return resolved result
  return {
    templateId,
    template
  };
}