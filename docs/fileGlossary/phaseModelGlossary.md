ENTRY: TYPE DEFINITION
FILE: PHASEMODEL.TS 
===================================
    HOW TYPE IS USED MENTAL MODEL:
    CODE: EXPORT TYPE PHASE = "GROWTH" | "DECLINE;
    EXPLANATION: PHASE WILL NOW BE TAKEN AS A TYPE OR THE TYPE DEFINITION AND THE STRING GROWTH AND DECLINE
    WILL BE LITERALLS LIKE A CONSTANT THAT WILL NEVER CHANGE
    ITS A LITERAL STRING
    THE PIPE SYMBOL "|" MEANS OR IN TYPESCRIPT
===========================================


ENTRY: INTERFACE/INPUT DEFINITION
FILE: PHASEMODEL.TS
===============================================
HOW INTERFACE IS USED MENTAL MODEL:
CODE: //*Input contract for the classifier
export interface PhaseInput {
    comapanyPhaseSignal: companyPhaseSignal;
}
EXPLANATION: INTERFACE IS A FORM TEMPLATE. IN THIS CASE OUR
FORM IS CALLED PHASEINPUT AND EVERYTIME THE FORM IS FILLED Out
THE FORM HAS ONE BOX TO FILL THE COMPANYPHASESIGNAL BOX AND WHAT YOU
WRITE IN THE BOX MUST BE A COMPANYPHASESIGNAL OPTION ONLY. ANYTHING ELSE
IS NOT ALLOWED. 
=================================================== 


ENTRY: RECORD DEFINITION
FILE: PHASEMODEL.TS
===================================================
MENTAL MODEL:
CODE:const SIGNAL_TO_PHASE_MAP: Record<CompanyPhaseSignal, Phase> = {
    GROWTH: "growth",
    FREEZE: "consolidation",
    REORG: "extraction",
    LAYOFFS: "decline" ,    
};
EXPLANATION: RECORD IS A UTILITY TYPE CREATES AN OBJECT WHERE THE KEYS ARE
KEYTYPE AND THE VALUES ASSIGNED TO THE KEYTYPE ARE VALUETYPE.
EXAMPLE: RECORD<KEYTYPE, VALUETYPE>
=========================================================


ENTRY: EXPORT DEFINITION
FILE: ALL [ENGINE CORE]
===========================================================
CODE: export function classifyPhase(input: PhaseInput): PhaseResult {
  const { companyPhaseSignal } = input
}
EXPLANATION: MAKES FUNCTION AVAILABLE FOR OTHER FILES
============================================================


ENTRY: COMMENTS SYNTAX IN TYPESCRIPT
FILE: ALL
============================================================
SYSTEM LEVEL SUMMARY:
| Syntax       | Name                  | Purpose                   |
| ------------ | --------------------- | ------------------------- |
| `//`         | Single-line comment   | Quick notes               |
| `/* ... */`  | Block comment         | Multi-line comments       |
| `/** ... */` | JSDoc / TSDoc comment | Documentation + IDE hints |
| `\*`         | Not valid TS          | Probably formatting error |
========================================================================

ENTRY:GIT COMMAND TO PUSH
FILE: ALL [CLI]
====================================================================
DESCRIPTION: 
To **push your local commits to a remote Git repository**, the basic command is:
```bash
git push origin <branch-name>
```
### Example
If you're working on the `main` branch:
```bash
git push origin main
```
### Typical full workflow
Most of the time you'll do:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```
### First time pushing a new branch
If the branch doesn’t exist on the remote yet:
```bash
git push -u origin <branch-name>
```
Example:
```bash
git push -u origin feature-login
```
The `-u` sets the **upstream**, so later you can just run:
```bash
git push
```
### Quick cheat sheet
* Push current branch (after upstream set):
```bash
git push
```
* Push specific branch:
```bash
git push origin branch-name
```
* Push all branches:
```bash
git push --all
```
======================================================


ENTRY: OUTER OBJECT AND INNER OBJECT [KEYTYPE/VALUETYPE]
FILE: RISKMATRIX.TS
====================================================
MENTAL MODEL: FOR EVERY POSSIBLE PHASE WE MUST CREATE THE MAPPING 
OF EVERY PRESSURE POSITION TO THE RISK LEVEL
CODE: Record<Phase, Record<PressurePosition, RiskLevel>>
EXPLAINATION: PHASE IS OUR FIRST KEY TYPE AND OUR FIRST VALUETYPE IS ANOTHER OBJECT THE PRESSUREPOSITION WHICH IS THE 2ND KEY VALUE THAT WILL MAP/ASSIGN THE RISKLEVEL.
============================================================================


ENTRY: INTERFACE (TYPE DEFINITION)
FILE: ALL FILES
==============================================================
MENTAL MODEL: WHAT THE STRUCTURE OF DATA WILL LOOK LIKE.
CODE: export interface NarrativeTemplate
EXPLAINATION: YOUR INTERFACE IS JUST STRUCTURE. IT SAYING ANY OBJECT OF THIS TYPE MUST LOOK LIKE THIS. ITS DATA MODELING NOT LOGIC. ITS NOT A REAL OBJECT JUST A TYPE. NOTHING HERE EXIST AT RUNTIME IT GETS ERASED AFTER COMPILATION.
===========================================================================        

ENTRY: ?? (FALLBACK)
FILE: NARRATIVEsELECTOR.ts
==================================================
Mental Model: Used for missing/null or undefined values, objects etc. 
- Not for " ", 0, false
CODE: const template =
    NARRATIVE_TEMPLATES[templateId] ?? FALLBACK_TEMPLATE;
DESCIPTION: IF THE TEMPLATE ID (PHASE,PRESSUREPOSITION) RETURNS MISSING OR UNDEFINED USE FALLBACK TEMPLATE
- IF SOMETHING RETURNS AS UNDEFINED THAN USE THIS. THIS HELPS KEEP YOUR FUCTION SAFE AND PREDICTABLE & NEVER RETURNS UNDEFINED.   



