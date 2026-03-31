/*
=========================================================
            systemMapBuilder.ts
=========================================================
This file orchestrates the entire engine pipeline

WHAT THIS DOES:
    1.Classifies structural phase
    2.Classifies structural role
    3.Maps role type to pressure position
    4.Evulates risk + system bahavior
    5.Generate template ID

It only composes outputs from other layers.
=========================================================
*/

/*
======================================================
Import Engine Layers
======================================================
*/

import {classifyPhase, type Phase,} from "./phaseModel";
import {classifyRoleType, type RoleType} from "./roleTypeModel";
import {mapRoleToPressurePosition, type PressurePosition} from "./pressurePositionModel";
import {evaluateRisk, type RiskLevel} from "./riskMatrix";
import {selectNarrativeTemplate} from "./narrativeSelector";

/*
=============================================================
Input Contract (from front-end API)
=============================================================
-This is inmporting the export type (definition) of phase input-> companySignal
and input for roleType -> RoleSignal
-Create the data shaping by type interface called SystemInput.
-Recieves companySignal and roleSignal
*/

import type {CompanyPhaseSignal} from "./phaseModel";
import type {RoleSignal} from "./roleTypeModel";

export interface SystemMapInput {
    companyPhaseSignal: CompanyPhaseSignal;
    roleSignal: RoleSignal;
}



/*
===============================================================
Output System Map Builder
============================================================
output data structure
-Returns every layer of engine

*/
export interface SystemMapResult {
    phase: Phase;
    roleType: RoleType;
    pressurePosition: PressurePosition;
    riskLevel: RiskLevel;
    behavior:{
        phaseBehavior: string[];
        positionBehavior: string[];
    };
    narrativeTemplateId: string;
}

/*
=============================================================
Main System Map Builder
=============================================================
function that recieves input
-Calls the classifyPhase function. pass it the input. Recieve the
phase value from what it returns
-Does the same for role type
-Similar with pressurePosition but the input is role type

*/

export function buildSystemMap(
    input: SystemMapInput
): SystemMapResult{
    /*
    =========================================================
    Determine phase
    ==========================================================
    */
    const { phase } = classifyPhase ({ //return an object input
        companyPhaseSignal: input.companyPhaseSignal //  You pass an object [input]
    });

    /*
    ======================================================
    Receive role type
    =======================================================
    */

     const { roleType } = classifyRoleType({
        roleSignal: input.roleSignal
    
    });

    /*
    ===========================================================
    Determine Pressure topology position
    ===========================================================
    */
   const { pressurePosition } =
   mapRoleToPressurePosition({
    roleType
   });

   /*
    ===========================================================
    Evaluate structural risk + behavior
    ===========================================================
   */

    const {riskLevel, behavior} =
    evaluateRisk(
        phase,
        pressurePosition //Positional object passes 2 inputs
    );

    /*
    =============================================================
    Generate narrative template ID
    =============================================================
    1. Two different styles of function input:
        -object Input: EX [mapRoleToPressurePosition({
        roleType 
    });]
        -positional Input: EX evaluateRisk(phase, pressurePosition);
        -function expects seprate parameters.

    2. Destructing is the same on both of these styles.
        -It means the function returns an object:
        EX: This part
            const { riskLevel, behavior } = ...
        ->Means the function returns an object like
            {
                riskLevel: "High",
                behavior: {
                    positionBehavior: [...],
                    phaseBehavior: [...]
            }
        }

    */ 

    const { templateId } = selectNarrativeTemplate (
        phase,
        pressurePosition
    );

    /*
    ======================================================================
    6. Return fully assembled system state
    ======================================================================
    Return the correct key/value
    -selectNarrativeTemplate-> action
    -narrativeTemplateId-> data
    */

    return {
        phase,
        roleType,
        pressurePosition,
        riskLevel,
        behavior,
        narrativeTemplateId: templateId

    };
}