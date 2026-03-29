// =====================================================
// narrativeSelector.ts
// =====================================================
// Responsibility:
// Select the correct narrative template based on:
//   phase
//   pressurePosition
//
// This file:
// - Generates a deterministic template ID
// - Resolves the template from the registry
// - Provides a safe fallback if missing
// =====================================================

// -----------------------------------------------------
// IMPORTS
// -----------------------------------------------------

import type { Phase } from "./phaseModel";
import type { PressurePosition } from "./pressurePositionModel";
import {
  NARRATIVE_TEMPLATES,
  type NarrativeTemplate,
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

const FALLBACK_TEMPLATE: NarrativeTemplate = {
  id: "fallback",
  sections: {
    whatsHappening:
      "Your system state could not be mapped to a specific narrative pattern.",
    whyItFeelsBad:
      "There may be a configuration mismatch in the system.",
    whatHappensNext:
      "Pressure mapping is unavailable for this state.",
    whatItMeansForYou:
      "This fallback exists to prevent application failure.",
  },
};

// -----------------------------------------------------
// TEMPLATE ID GENERATOR
// -----------------------------------------------------

/**
 * generateTemplateId
 * Combines phase + pressurePosition deterministically
 */
function generateTemplateId(
  phase: Phase,
  pressurePosition: PressurePosition
): string {
  // Must match the format used in NARRATIVE_TEMPLATES keys
  return `${phase}_${pressurePosition}`;
}

// -----------------------------------------------------
// PUBLIC SELECTOR
// -----------------------------------------------------

/**
 * selectNarrativeTemplate
 *
 * Deterministic, safe, type-friendly resolver.
 */
export function selectNarrativeTemplate(
  phase: Phase,
  pressurePosition: PressurePosition
): NarrativeSelectionResult {
  const templateId = generateTemplateId(phase, pressurePosition);

  const template =
    NARRATIVE_TEMPLATES[templateId] ?? FALLBACK_TEMPLATE;

  return {
    templateId,
    template,
  };
}