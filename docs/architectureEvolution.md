# Entry 001
# 
Date: 2026/28/02
# Architecture Evolution & Mental Model Shift

## Why We Changed the Directory Structure

Originally, the system logic was grouped loosely under `/lib`
with mixed responsibilities inside fewer files.

That approach works early, but as the engine matured,
we recognized a clearer separation of concerns was necessary.

The key shift was this:

The system is not a single classifier.
It is a layered interpretation engine.

Each layer should do exactly one job.

---

## The Old Mental Model

Initial thinking grouped logic like this:

- classification.js
- dataTables.json
- API route
- UI components

Everything fed into one classification file.

This works for small logic,
but becomes unstable when the system grows in dimensions:

- Phase
- Role
- Pressure Position
- Risk
- Narrative Templates

Mixing these increases coupling and complexity.

---

## The New Mental Model

We now treat the engine as a pipeline of deterministic layers:

1. Signal Interpretation Layer  
2. Functional Classification Layer  
3. Structural Topology Layer  
4. Risk Physics Layer  
5. Narrative Selection Layer  
6. System Composition Layer  

Each layer:
- Has one responsibility
- Is independently testable
- Does not embed knowledge from other layers
- Can evolve without breaking the rest

---

## Updated Engine Structure

/src/lib/engine
  phaseModel.ts
  roleTypeModel.ts
  pressurePositionModel.ts
  riskMatrix.ts
  narrativeSelector.ts
  narrativeTemplates.ts
  systemMapBuilder.ts
  index.ts
  /docs
    PHASE_MODEL.md
    ARCHITECTURE_EVOLUTION.md

---

## Why This Structure Is Better

### 1. Separation of Concerns

Each file answers exactly one question:

- What phase is this?
- What role type is this?
- Where does that role sit in pressure flow?
- What is the risk?
- What narrative pattern applies?

No file answers more than one.

---

### 2. Determinism

There is no probabilistic inference.
All decisions are:

Input → Mapping → Output

This ensures:

- Predictability
- Security
- Testability
- Integrity

---

### 3. Content/Logic Separation

Narratives are not embedded in logic.
Template selection is not embedded in physics.
Risk is not embedded in phase.

This prevents:
- Giant conditional blocks
- Copy duplication
- Future refactor pain

---

### 4. Portfolio-Level Engineering Discipline

This architecture demonstrates:

- Clear abstraction layers
- Controlled input domain
- Type-safe modeling
- Scalable structure
- Maintainable growth path

For a first commercial web app,
this is strong system thinking.

---

## Core Mental Model Going Forward

Every new feature must answer:

Which layer does this belong to?

If it crosses layers,
it must be refactored.

We do not merge layers for convenience.

Clarity over cleverness.
Structure over speed.
Determinism over magic.