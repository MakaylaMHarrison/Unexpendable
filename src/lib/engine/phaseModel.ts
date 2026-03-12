//* This file creates the frontend dropdown signals into backend structural phases
//* This is deterministic logic for the engine that is fully controlled
//*
//* ======================================================

//*========================================================
//*                     TYPE DEFINITIONS//
//*========================================================
//* WHAT IS TYPE DEFINITION : COSTOM RULE DESCRIBING THE STRUCTURE OF DATA



//* These are the structural company phases 
//* Once selected they determine the system behavior for pressurePosition & riskMatrix
//*This is the backend structure

export type Phase = 
|"growth" //*Expands sales, customers and operations rapidly
|"consolidation" //*Focus on stability and improves effiency after growth [starbuck example]
|"extraction" //*Focus maximizing cash flow and profits instead of expanding
|"decline"; //* Falling sales, profits, market value

//*This will be the frontend interface dropdown
//* User can only select on of them. No free text CONTROLLED SYSTEM

export type CompanyPhaseSignal = 
"GROWTH" //*Company is actively expanding
|"FREEZE" //* Hiring or spending freezes
|"REORG" //* Reorganizing of teams or processes
|"LAYOFFS"; //* Active layoffs ongoing

//*====================================================================
//*                         INPUT CONTRACTOR
//*======================================================================
//* DEF: Input for the classifier
    //*Calling it an input contract helps teams understand:
    //*what data a system expects
    //*what format it must be in
    //*what other developers must send
//*What the user picks [front-end]

export interface PhaseInput {
    companyPhaseSignal: CompanyPhaseSignal;
}

//*Output of the phase classifier
//*The results of what the user picks
export interface PhaseResults {
    phase: Phase;
}

//*====================================================================
//*        MAPPING TABLE: Logic that determines company phase
//*====================================================================
//* This object is the core deterministic mapping
//* Each frontend signal mapps to structural phase

const SIGNAL_TO_PHASE_MAP: Record<CompanyPhaseSignal, Phase> = {
    GROWTH: "growth",
    FREEZE: "consolidation",
    REORG: "extraction",
    LAYOFFS: "decline"    
};  