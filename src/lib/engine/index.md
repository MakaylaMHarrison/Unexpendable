// index.ts
import {CompanyPhaseSignal} from "./phaseModel";
import {RoleSignal} from "./roleTypeModel";
import { BuildSystemMap } from "./systemMapBuilder";
import type { SystemMapResult } from "./systemMapBuilder";
/*
=======================
System Boundry Input
========================
*/
export interface EngineInput {
  companyPhaseSignal: CompanyPhaseSignal
  roleSignal: RoleSignal
}
/*
=========================================
Public Entry Point
=====================================
Only way to run engine
*/
export function runEngine(input: EngineInput): SystemMapResult {
  return BuildSystemMap({
    companyPhaseSignal: input.companyPhaseSignal,
    roleSignal: input.roleSignal
  });
}
/*
===========================================
Expose Output
===========================================
*/
export type { SystemMapResult };