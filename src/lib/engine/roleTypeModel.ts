/* 
===========================================================================
                            ROLETYPEMODEL.TS
===========================================================================
This file maps the human-centered dropdown selections to internal role types
User decide what they mostly do or have done.
The system translates that into structural role categories.

This file does NOT:
-Determine pressure position
-Determine risk matrix
-Contain narrative logic

It is purely a translation layer
===============================================================================



=====================================================================
TYPE DEFINITIONS
=====================================================================
These are structural classifications not user-facing.
Internal role categories used by the engine.
*/

export type RoleType =
| "builder" //Produces or delivers pure output
| "coordinator" //Orginaizes people and projects
| "optimizer" //Improves or monitors systems
| "support" // Enable others to function
| "leader" // Sets direction or priorites

/*
frontend dropdown values (human-centered language).
These are the strings from the UI dropdown options
No free text allowed.
*/

export type RoleSignal = 
| "I make or deliver things"
| "I keep people or projects organized"
| "I improve, check, or fine-tune how things work"
| "I help others do their jobs"
| "I decide direction or priorities";

//Input contract for classification
export interface RoleInput {
    roleSignal: RoleSignal;
}

//Output contract for classification
export interface RoleResult {
    roleType: RoleType;
}

/*
====================================================
ROLE SIGNAL -> INTERNAL ROLE TYPE MAPPING
====================================================
Deterministic translation table.
Human description -> structural role type.
This helps keep UX language separate from the engine taxonomy. 
*/

const SIGNAL_TO_ROLETYPE_MAP: Record<RoleSignal, RoleType> = {
    //Produces output directly
    "I make or deliver things": "builder",

    //Translate and organizes work
    "I keep people or projects organized": "coordinator" ,

    //Improves, audits, measures, or tunes systems
    "I improve, check, or fine-tune how things work": "optimizer",

    //Absorbs variability and enables others
    "I help others do their jobs": "support",

    //Sets priorities and direction
    "I decide direction or priorities": "leader"

};

/* 
===========================================================================
ROLE TYPE CLASSIFIER
===========================================================================
*/

/**
 * classifyRoleType
 * -----------------------
 * Accepts human-readable dropdown selection.
 * Returns an internal structural role type.
 * 
 * Deterministic.
 * No inference.
 * No ambiguity.        
 */

export function classifyRoleType (input: RoleInput): RoleResult {
    //Extract user-selected dropdown string
    const {roleSignal} = input;

    //Translate human language -> structural category
    const roleType = SIGNAL_TO_ROLETYPE_MAP[roleSignal];

    //Return internal role type classification
    return {roleType};
}

