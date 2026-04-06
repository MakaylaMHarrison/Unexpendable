/*
==================================================================================
                Index.ts
===================================================================================
This file runs the entire engine by:
    runEngine function
This engine has a system that runs 7 layers:
    -phaseModel
    -roleTypeModel
    -pressurePosition
    -riskMatrix
    -narrativeTemplates
    -narrativeSelector
    -systemMapBuilder
This is the system boundary. It only runs the engine as 
a file and thats it nothing else. So the engine is hidden and safe.
Where only the ouside UI [landing page] and api interact with this file.
everything else back in the kitch [the engine layers] are hidden.

With this file system becomes:
    -encapsulated
    -replaceable
    -testable
    -understandable
*/
import {CompanyPhaseSignal} from "./phaseModel";
import {RoleSignal} from "./roleTypeModel";
import {BuildSystemMap, type SystemMapResult} from "./systemMapBuilder";

/*
==================================================================================
System Boundry Input
===================================================================================
 Receives input from company phase + role signal
 Type definition input is called EngineInput
*/

export interface EngineInput {
    companyPhaseSignal: CompanyPhaseSignal
    roleSignal: RoleSignal
};

/*
======================================================
Public Entry Point
======================================================
 -function that passes the Engineinput 
 -Then returns value shaped like SystemMapResult [output/return Type]
 -The function returms the result if calling another function buildSystemMap
 -This runEngine function is acting like a wrapper or adapter
 -A property/value gets passed through buildSystemMap
 -It takes the companySignal from the input object and forwards it.
 takes roleSignal from input and passes it into BuildSystemMap
 -🔍 Why structure it this way?
This pattern is common for a few reasons:
    -Encapsulation
        You hide BuildSystemMap behind a simpler interface.
    -Control
        You can later add validation, logging, or preprocessing inside runEngine without changing other code.
    -Stability
        If BuildSystemMap changes, you only update this wrapper instead of every caller.
*/

export function runEngine (input: EngineInput) : SystemMapResult {
    return BuildSystemMap({
        companyPhaseSignal: input.companyPhaseSignal,
        roleSignal: input.roleSignal
    });


    /*
    ============================================================================================
    Expose Output
    ===========================================================================================
    Output the results that will be shaped like definition type  SystemMapResults
    */
   
}
