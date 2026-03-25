/*
==================================================
pressurePosition.ts
==================================================
This file maps internal role types to structural pressure positions.
It represents the topology layer of the engine.
No phase logic
No risk logic
No narrative logic
Pure structural mapping.
====================================================
*/

/*
===========================================================
            TYPE DEFINITIONS
===========================================================
These are the 5 structural pressure positions
They describe where pressure originates, moves through, and
accumlates in a system.
All backend logic
*/

export type PressurePosition =
| "origin" //(PRESSURE SOURCE) Decision constraints and shock are introduced
          //Pressure is created here, not absorbed 
          //Examples:Executive leadership, Investors/Board, 

| "control" //(PRESSURE ROUTER) Decides where pressure is sent
            //Makes strategy for bugets, priorities
            //Examples:Senior Management, Finance

| "translation" //(PRESSURE CONVERTER) Converts abstract goals into excutable work
                //Absorbs ambigity and contradiction
                //Example: Team lead, Project Manager, Program Manger

| "execution" //(PRESSURE CARRIER) Produces outputs
              // Carries pressure through labor and time
              //Examples:Engineers,Designers,Operators

| "buffer" //(PRESSURE ABSORBER) Exist to smooth variability and protect the core system
          // Takes impact so others dont have to

| "peripheral"; //(PRESSURE SINK) Non-core, indirect, optional value creation
                //Examples: DEI, Learning Teams

//First we need to import RoleType from roleTypeModel
import type {RoleType} from "./roleTypeModel";

//Input contract
//The role type will be the input to determine the output pressureResults [pressureposition]
export interface PressureInput {
    roleType: RoleType;
}


//Output contract
//Results from role type
export interface PressureResult {
    pressurePosition: PressurePosition;
}
 
/*
==================================================================
 ROLE TYPE -> PRESSURE POSITION MAPPING
==================================================================
Deterministic structural mapping.
This expresses the pressure flow model explicitly.
IMPORTANT:
This links the role type to pressure position
This mapping is theory.
It should rarely change.
If it changes, it means your system model changed.
*/

const ROLE_TO_PRESSURE_MAP: Record<RoleType, PressurePosition> = {

    //Produces outputs directly
    builder: "execution", 

    //Organizes and converts abstract to excutable work
    coordinator: "translation",

    //Improves systems but does not produce core output
    optimizer: "control",

    //Protects system from variability
    support: "buffer",

    //Sets direction and constraits
    leader: "origin",

}; 

/*
===============================================================
PRESSURE POSITION CLASSIFIER
===============================================================' 
*/

/**
 * mapRoleToPressurePosition
 * ===========================
 * Recieve the role type 
 * Returns structual pressure position
 * Deterministic
 */

export function mapRoleToPressurePosition (input: PressureInput): PressureResult {
    //Get the role classification
    //The input is not roleSignal in this phase its the roleType->PressureResult
    const {roleType} = input;

    //Extract the map role type-> pressure postition
    //Assign pressure position to role to pressure map
    const pressurePosition = ROLE_TO_PRESSURE_MAP[roleType];

    //Return pressure position
    return {pressurePosition};

}


