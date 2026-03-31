/*
========================================================
            riskMatrix.ts
======================================================
This file uses Phase x Pressure Position to:\
1. Determine risk Level
2. System Bahavior
This represents structural survivability physics
Also oberservable system behavior
*/

/*
=======================================================
Import Types
=======================================================
*/

import type { Phase } from "./phaseModel";
import type {PressurePosition} from "./pressurePositionModel";


/*
============================================================
Risk level Type
==========================================================
The structural risk level range from low to extreme
This will be the risk level of all Phases in every roletype in that 
company phase
*/

export type RiskLevel =
| "low"
| "moderate"
| "high"
| "extreme";

//Output contract
//output of form
//This will return risklevel in every pressurePosition in each phase
export interface RiskResult {
    riskLevel: RiskLevel;
    behavior: {
        positionBehavior: string[];
        phaseBehavior: string[];
    };  
}

/*
============================================================
Core "PressurePosition" Behavior (Phase-Independent)
======================================================
These behaviors describe how each pressure position function
in a system reguardless of phase.
Assign pressurePosition to the position behavior
*/
const POSITION_BEHAVIOR: Record<PressurePosition, string[]> = {
    
    origin: [
        "Rarely cut early",
        "Externalizes pressure downward",
        "Framed as direction rather than stress"

    ],

    control:[
        "Protect until late",
        "Routes constraints to other layers",
        "Gains authority during compression"
    ],

    translation: [
        "Pressure concentrates here first",
        "Absord ambiguity between strategy and exection",
        "Blamed for systemic contradictions"
    ],

    execution: [
        "Carries pressure through labor and time",
        "Subjected to output expectation changes",
        "Protected during expansion"
    ],

    buffer: [
        "Absorbs variability to protect core functions",
        "First to be overloaded",
        "Work increases before removal",
    ],

    peripheral: [
        "Indirect to immediate value creation",
        "Cut early during contraction",
        "Low political defense"
    ],
};

/*
=======================================================
Phase Behavior 
=======================================================
This describes how pressure behaves in each phase
*/

const PHASE_BEHAVIOR : Record<Phase, string[]> = {

    growth: [
        "Pressure spreads outward",
        "Buffers expand",
        "Translation roles are rewarded"
    ],

    consolidation: [
        "Pressure compressed downward",
        "Translation layers overloaded",
        "Buffers destabilize"
    ],

    extraction: [
        "Pressure moves directly to executioned",
        "Output expectations increase",
        "Interchangeability logic appears"
    ],

    decline: [
        "Pressure becomes blame-focused",
        "Peripheral functions removed rapidly",
        "Core shrinks definsively"
    ],

};

/*
=======================================================
Risk Matrix (Phase x Pressure Position)
=======================================================
Assign risk level to each phase with all pressure position 
in each phase.
*/

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

    extraction:{
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

/*
=======================================================
Risk Evaluation Function
======================================================
This function is stateless it doesnt store anything
The entire system depends on input types

-------------------------------------
SYSTEM LEVEL VIEW
-------------------------------------
1. INPUT LAYERE
    -RECIEVES SYSTEM STATE
2. DECISION LAYER
USES: [PHASE_BEHAVIOR,POSITION_BEHAVIOR, RISK_MATRIX]
    -THIS ACT AS SYSTEM CONFIGURE DRIVEN RULES
3.OUTPUT LAYER
    -PRODUCES RISK LEVEL
    - RECOMMENDED BEHAVIORS

*/
                                //INPUT                                         //OUTPUT
export function evaluateRisk (phase: Phase, pressurePosition: PressurePosition): RiskResult {

    const riskLevel = RISK_MATRIX[phase][pressurePosition]; //LOOKUP MAPPING

    return { //OUTPUT PAYLOAD
        riskLevel, //OUTPUT
        behavior: {  //BEHAVIOR OBJECT      
            positionBehavior: POSITION_BEHAVIOR  //PRESSUREPOSITION BEHAVIOR
            [pressurePosition],  
            phaseBehavior: PHASE_BEHAVIOR [phase], //PHASE BEHAVIOR
        } //CLOSING OBJECT
    }; //FUNCTION END
}
