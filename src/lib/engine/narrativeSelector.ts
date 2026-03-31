/*
=====================================================
            NarrativeSelector.ts
=====================================================

This file selectes the correct narrative template based on:

-Phase
-PressurePosition
-Generates a template ID
-Resolves the template from the registry
-Provides a safe fallback if missing

It does NOT:
-Contain emotional logic
-Modify content
-Branch by risk level
-Interpret behavior
============================================================
*/



/*
=============================================================
IMPORTS
=============================================================
*/

import type {Phase} from "./phaseModel";
import type {PressurePosition} from "./pressurePositionModel";
// this will import both mapping and the output const
import  {NARRATIVE_TEMPLATES, type NarrativeTemplate,} from "./narrativeTemplates";

/*
====================================================================
Output Type
====================================================================
When narrative is recieved it will display in this type of structure
*/

export interface NarrativeSelectionResult {
    templateId: string;
    template: NarrativeTemplate; 
}              // ^ ^  ^ Generic template data modeling

/*
======================================================================
Internal Fallback Template
======================================================================
what this does:

    -This is used only is a template ID does not exist
    -It prevents runtime crashes.
    -It should rarely ever trigger if the matrix is complete.
======================================================================
*/

const FALLBACK_TEMPLATE: NarrativeTemplate = {
    id: "fallback",

    sections: {
        whatsHappening :
        `Your system state could not be mapped to a specific narrative pattern.`,
        whyItFeelsBad :
        `There may be a configuration mismatch in the system.`,
        whatHappensNext :
        `Pressure mapping is unavailable for this state.`,
        whatItMeansForYou :
        `This fallback exists to prevent application failure.`,

    },
   
};

 /*
======================================================================
Template ID Generator
======================================================================
 */

/**
 * 
 * generates the ID Template
 * Combines phase + pressurePosition
 * deterministically structured
 * 
 */

function generateTemplateId (phase: Phase, 
    pressurePosition: PressurePosition
): string {
    /*
    GENERATES ID. THE ID IS PHASE_PRESSURE.
    //Must match the format used in NARRATIVE_TEMPLATES keys/mapping
    //This is a template literal
    //Used to look up
    //It combine two inputs into a single string that is seperated by an underscore
    */
    return `${phase}_${pressurePosition}`;
}

/*
==============================================================================
Public Selector
==============================================================================
*/

/**
 * selectNarrativeTemplate
 * Deterministic, safe, type-friendly resolver.
 *  /*template is type definition in narrativeSelectionResults
    that equals narrativeTemplate data structure in narrativeTemplate.ts
    -Here the template is assigned to mapping table 
    -[templateId] looks up variable name the ID from dictionary/mapping/table
    -?? this is a null fallback operator if something is missing than
    fallback to what ever else. 
    -returns data structure in narrativeSelectionResult
    
    selectNarrativeTemplate function does 3 things:
    1. Grabs input
    2. Generate template id
    3. Use Mapping by getting the id. If an id returns undefined then
    return fallback template
    4.Return the id and narrative template -> output narrative and sections
 */

export function selectNarrativeTemplate (
    phase: Phase,
    pressurePosition: PressurePosition
): NarrativeSelectionResult {
    const templateId = generateTemplateId (phase, pressurePosition); //Calls function to generate id
    const template = NARRATIVE_TEMPLATES[templateId] ??
        FALLBACK_TEMPLATE;

    return {
        templateId,
        template,
    };


    
}
