// =====================================================
// systemMapBuilder.ts
// =====================================================
// This file orchestrates the entire engine pipeline.
//
// It:
//  1. Classifies structural phase
//  2. Classifies role type
//  3. Maps role type → pressure position
//  4. Evaluates risk + system behavior
//  5. Generates narrative template ID
//
// It does NOT define business rules.
// It only composes outputs from other layers.
// =====================================================



// -----------------------------------------------------
// IMPORT ENGINE LAYERS
// -----------------------------------------------------

import { classifyPhase } from "./phaseModel";
import { classifyRoleType } from "./roleTypeModel";
import { mapRoleToPressurePosition } from "./pressurePositionModel";
import { evaluateRisk } from "./riskMatrix";
import { selectNarrativeTemplate } from "./narrativeSelector"; 
//function select narrative or generateNarrativeId 



// -----------------------------------------------------
// INPUT CONTRACT (from frontend API)
// -----------------------------------------------------

import type { CompanyPhaseSignal } from "./phaseModel";
import type { RoleSignal } from "./roleTypeModel";

export interface SystemMapInput {
  companyPhaseSignal: CompanyPhaseSignal;
  roleSignal: RoleSignal;
}



// -----------------------------------------------------
// OUTPUT CONTRACT (final engine result)
// -----------------------------------------------------

export interface SystemMapResult {
  phase: Phase;
  roleType: RoleType;
  pressurePosition: PressurePosition;
  riskLevel: RiskLevel;
  behavior: {
    positionBehavior: string[];
    phaseBehavior: string[];
  };
  narrativeTemplateId: string;
}



// -----------------------------------------------------
// MAIN SYSTEM MAP BUILDER
// -----------------------------------------------------

export function buildSystemMap(
  input: SystemMapInput
): SystemMapResult {

  // -------------------------------------------
  // 1. Determine structural phase
  
  // Calls the classifyPhase function. pass it the input. Recieve the
  phase value from what it returns
  //-------------------------------------------
  const { phase } = classifyPhase({
    companyPhaseSignal: input.companyPhaseSignal
  });


  // -------------------------------------------
  // 2. Determine internal role type
  // -------------------------------------------
  const { roleType } = classifyRoleType({
    roleSignal: input.roleSignal
  });


  // -------------------------------------------
  // 3. Determine pressure topology position
  // -------------------------------------------
  const { pressurePosition } = mapRoleToPressurePosition({
    roleType
  });


  // -------------------------------------------
  // 4. Evaluate structural risk + behavior
  // -------------------------------------------
  const { riskLevel, behavior } = evaluateRisk(
    phase,
    pressurePosition
  );


  // -------------------------------------------
  // 5. Generate narrative template ID
  // -------------------------------------------
  const { templateId } = getNarrativeTemplateId(
    phase,
    pressurePosition
  );


  // -------------------------------------------
  // 6. Return fully assembled system state
  // -------------------------------------------
  return {
    phase,
    roleType,
    pressurePosition,
    riskLevel,
    behavior,
    narrativeTemplateId: templateId
  };
}