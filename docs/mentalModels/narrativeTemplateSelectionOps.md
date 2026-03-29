ENTRY LOG: 3.29
FILE: NARRATIVESELECTOR & Template.ts
===========================================
Mental Model:
# How Narrative Selector file works:

###### OVERVIEW: #######
            
1. First thing is import all files needed which include:
    -Phase import {phase} from "./phaseModel";
    -PressurePosition import {PressurePosition} from "./pressurePosition";

2. Create the output that will show the results
    - We need other files have access to the right      narrativeTemplate
    - export interface -> (output) for NarrativeSelectionResults
    - To select the correct template we HAVE TO MATCH (ID, NarrativeTemplate) -> from the narrativeTemplate file.
    - # IMPORTANT: In narrativeTemplate.ts NarrativeTemplate shapes the data to have an id string which is our phase_pressurePosition and sections which are the exact strings/Narrative that go with the id. This is NARRATIVETEMPLATE

 # 1 of 1. file: narrativeTemplate.ts
 Create the mapping/table for the structured data template
    - NARRATIVE_TEMPLAES with an s is the name for registry of templates
    - 4 phases and 5 pressure positions
    - Every phase goes through all 5 pressure positions 
    - every pressure and phase have 4 sections:
        whatsHappening
        whyItFeelbad
        whatHappensNext
        whatItMeansForYou

3. Create fallback template.
# file: narrativeSelector.ts
    -This template is returned if there is a template id that doesnt exist.
    -Prevents runtime crashes.
    -It should rarely ever trigger if the runtime is complete.

4. Make template id generator
    -Create a function called generatorTemplateId
    -This function recieves the input phase and pressure position as a string which is really the id (phase_pressurePosition)
    -Return the phase_pressurePosition. In the structure of the id
    -Overview: Generates id from input.

5. Create function to select our template
    -SelectNarrativeTemplate is the function that will recieve the input.
    -Call the function to generate the id.
    -Resolve/Lookup from registry template from id.
    -If id doesnt exist use fallback template.
    -Return template id and the narrativeTemplate.
