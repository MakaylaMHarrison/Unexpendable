// =====================================================
// narrativeTemplates.ts
// =====================================================

export interface NarrativeTemplate {
  id: string;
  sections: {
    whatsHappening: string;
    whyItFeelsBad: string;
    whatHappensNext: string;
    whatItMeansForYou: string;
  };
}

export const NARRATIVE_TEMPLATES: Record<string, NarrativeTemplate> = {

  // =====================================================
  // GROWTH PHASE
  // =====================================================

  "growth__origin": {
    id: "growth__origin",
    sections: {
      whatsHappening:
        "You’re in a growth system. These systems move quickly, create direction in real time, and prioritize momentum over perfect clarity.",
      whyItFeelsBad:
        "Even when this phase looks exciting, it can feel messy up close. Decisions stack up, and you may be carrying more than people realize.",
      whatHappensNext:
        "In systems like this, new teams and layers form, and complexity increases before things fully settle.",
      whatItMeansForYou:
        "Roles close to direction-setting are usually needed here. The pressure you’re feeling is about responsibility increasing, not about being pushed out."
    }
  },

  "growth__control": {
    id: "growth__control",
    sections: {
      whatsHappening:
        "You’re in a growth system. These systems scale by adding people, work, and coordination all at once.",
      whyItFeelsBad:
        "When everything is expanding together, priorities can blur. You may feel like you’re constantly trying to create clarity in something that keeps shifting.",
      whatHappensNext:
        "Structure and process begin to form over time as the system tries to manage the scale.",
      whatItMeansForYou:
        "These roles tend to become more important as growth continues. The difficulty here comes from volume and complexity, not from structural risk."
    }
  },

  "growth__translation": {
    id: "growth__translation",
    sections: {
      whatsHappening:
        "You’re in a growth system. These systems generate new ideas and shifting priorities faster than they can fully organize them.",
      whyItFeelsBad:
        "You may feel pulled between evolving direction and real-world execution. That gap can be exhausting to hold.",
      whatHappensNext:
        "Over time, some ambiguity settles, but usually only after structure catches up to what’s already in motion.",
      whatItMeansForYou:
        "This role is valuable in growth, but often overloaded. If it feels like a lot, that’s because the system is leaning on you to absorb uncertainty."
    }
  },

  "growth__execution": {
    id: "growth__execution",
    sections: {
      whatsHappening:
        "You’re in a growth system. These systems push for more output, faster delivery, and visible progress.",
      whyItFeelsBad:
        "The pace can increase quietly. Expectations rise, and it may feel like you’re always trying to keep up.",
      whatHappensNext:
        "As long as growth holds, output expectations continue to increase and hiring often expands alongside it.",
      whatItMeansForYou:
        "Execution roles are generally needed here. The challenge is sustainability, not immediate risk."
    }
  },

  "growth__buffer": {
    id: "growth__buffer",
    sections: {
      whatsHappening:
        "You’re in a growth system. These systems create more activity than they can smoothly support, increasing the need for stabilization.",
      whyItFeelsBad:
        "You may feel like you’re constantly reacting — putting out issues without much time to step back.",
      whatHappensNext:
        "Support layers tend to expand as the system tries to keep things running smoothly.",
      whatItMeansForYou:
        "These roles grow with expansion, but their stability depends on growth continuing."
    }
  },

  "growth__peripheral": {
    id: "growth__peripheral",
    sections: {
      whatsHappening:
        "You’re in a growth system. These systems allow space for exploration and future-facing work.",
      whyItFeelsBad:
        "Your work may feel harder to measure against immediate output, which can make it feel less visible.",
      whatHappensNext:
        "Exploration continues while resources are available, often without strict prioritization.",
      whatItMeansForYou:
        "These roles benefit from growth, but depend on the system staying in expansion mode."
    }
  },

  // =====================================================
  // CONSOLIDATION PHASE
  // =====================================================

  "consolidation__origin": {
    id: "consolidation__origin",
    sections: {
      whatsHappening:
        "You’re in a consolidation system. These systems reduce expansion, narrow focus, and prioritize control.",
      whyItFeelsBad:
        "The tone shifts here. What once felt open can start to feel constrained, and decisions may feel heavier.",
      whatHappensNext:
        "Spending slows, focus narrows, and constraints begin to move downward through the system.",
      whatItMeansForYou:
        "Roles shaping direction are usually protected. What you’re feeling is a system tightening, not something you caused."
    }
  },

  "consolidation__control": {
    id: "consolidation__control",
    sections: {
      whatsHappening:
        "You’re in a consolidation system. These systems prioritize efficiency, alignment, and reducing complexity.",
      whyItFeelsBad:
        "You may feel pressure to justify decisions more than before. That added scrutiny can wear on you.",
      whatHappensNext:
        "Budgets tighten, duplication is reduced, and layers begin to compress.",
      whatItMeansForYou:
        "These roles often become more central as the system looks for control and discipline."
    }
  },

  "consolidation__translation": {
    id: "consolidation__translation",
    sections: {
      whatsHappening:
        "You’re in a consolidation system. These systems reduce parallel work, compress layers, and push work out of the middle.",
      whyItFeelsBad:
        "You may feel caught between reduced resources and unchanged expectations. That mismatch can feel frustrating and unfair.",
      whatHappensNext:
        "Pressure tends to build here first before moving further into execution layers.",
      whatItMeansForYou:
        "Your risk is structural, not personal. Roles like yours are often where compression shows up first."
    }
  },

  "consolidation__execution": {
    id: "consolidation__execution",
    sections: {
      whatsHappening:
        "You’re in a consolidation system. These systems continue producing, but with tighter control over how work gets done.",
      whyItFeelsBad:
        "It may feel like there’s less room for error and more visibility into performance.",
      whatHappensNext:
        "Efficiency becomes more important than exploration, and work becomes more standardized.",
      whatItMeansForYou:
        "These roles remain necessary, but expectations become stricter."
    }
  },

  "consolidation__buffer": {
    id: "consolidation__buffer",
    sections: {
      whatsHappening:
        "You’re in a consolidation system. These systems closely examine support layers to determine what is essential.",
      whyItFeelsBad:
        "Workloads often rise before changes happen, which can feel confusing and draining.",
      whatHappensNext:
        "Non-core layers are often reduced, and responsibilities get redistributed.",
      whatItMeansForYou:
        "This is a structurally exposed position in this phase, regardless of individual performance."
    }
  },

  "consolidation__peripheral": {
    id: "consolidation__peripheral",
    sections: {
      whatsHappening:
        "You’re in a consolidation system. These systems narrow toward core work and move away from optional efforts.",
      whyItFeelsBad:
        "Work that once felt meaningful may now feel harder to justify in practical terms.",
      whatHappensNext:
        "Optional initiatives are usually reduced first as focus tightens.",
      whatItMeansForYou:
        "These roles are often reduced early — not because they lack value, but because of how the system reprioritizes."
    }
  },

  // =====================================================
  // EXTRACTION PHASE
  // =====================================================

  "extraction__origin": {
    id: "extraction__origin",
    sections: {
      whatsHappening:
        "You’re in an extraction system. These systems focus on maximizing output, efficiency, and return.",
      whyItFeelsBad:
        "Decisions can feel more numbers-driven, which can make the environment feel less human.",
      whatHappensNext:
        "Pressure increases on output-producing layers as efficiency becomes the priority.",
      whatItMeansForYou:
        "Roles directing this phase are usually protected. The shift is structural, not personal."
    }
  },

// =====================================================
// EXTRACTION PHASE
// =====================================================

"extraction__control": {
  id: "extraction__control",
  sections: {
    whatsHappening: `
You’re in an extraction system. These systems tighten financial discipline and track performance closely.
`,
    whyItFeelsBad: `
Everything may feel more measured, with less room for flexibility or interpretation.
`,
    whatHappensNext: `
Thresholds tend to tighten over time. Reporting increases, and the system gradually reduces variance in how work is done.
`,
    whatItMeansForYou: `
These roles tend to remain stable, as the system depends on control to maintain efficiency.
`
  }
},

"extraction__translation": {
  id: "extraction__translation",
  sections: {
    whatsHappening: `
You’re in an extraction system. These systems reduce ambiguity and favor direct, output-linked work.
`,
    whyItFeelsBad: `
There’s less space for nuance, which can make your role feel constrained or undervalued.
`,
    whatHappensNext: `
Coordination layers often shrink, and work becomes more direct. Over time, middle functions are narrowed as the system simplifies itself.
`,
    whatItMeansForYou: `
Scope may reduce in this phase. That shift is driven by structure, not by your capability.
`
  }
},

"extraction__execution": {
  id: "extraction__execution",
  sections: {
    whatsHappening: `
You’re in an extraction system. These systems push for higher output and measurable results.
`,
    whyItFeelsBad: `
You may feel more evaluated or compared, with clearer pressure to perform.
`,
    whatHappensNext: `
Throughput expectations increase, and performance is tracked more closely. Over time, output is compared more directly across roles.
`,
    whatItMeansForYou: `
These roles are necessary, but are often assessed for efficiency and replaceability.
`
  }
},

"extraction__buffer": {
  id: "extraction__buffer",
  sections: {
    whatsHappening: `
You’re in an extraction system. These systems evaluate support work based on direct contribution to output.
`,
    whyItFeelsBad: `
Indirect work can feel harder to defend, even if it’s still needed.
`,
    whatHappensNext: `
Overhead is gradually reduced, and support functions are streamlined. The system moves toward keeping only what is clearly necessary.
`,
    whatItMeansForYou: `
These roles face increased exposure in this phase due to how value is measured.
`
  }
},

"extraction__peripheral": {
  id: "extraction__peripheral",
  sections: {
    whatsHappening: `
You’re in an extraction system. These systems remove work not directly tied to immediate return.
`,
    whyItFeelsBad: `
Longer-term or exploratory work can lose protection, even if it once mattered.
`,
    whatHappensNext: `
Optional work is often reduced quickly, and focus narrows toward core outputs. Investment gradually shifts away from future-facing efforts.
`,
    whatItMeansForYou: `
These roles are commonly eliminated early in this phase.
`
  }
},

// =====================================================
// DECLINE PHASE
// =====================================================

"decline__origin": {
  id: "decline__origin",
  sections: {
    whatsHappening: `
You’re in a decline system. These systems are focused on survival and reducing loss.
`,
    whyItFeelsBad: `
Decisions can feel urgent and heavy, with less time for consideration.
`,
    whatHappensNext: `
Reductions tend to happen quickly. Scope contracts, and the system shifts its focus toward stability above all else.
`,
    whatItMeansForYou: `
Roles directing contraction are usually protected. The urgency you’re feeling is systemic.
`
  }
},

"decline__control": {
  id: "decline__control",
  sections: {
    whatsHappening: `
You’re in a decline system. These systems tighten spending sharply and limit flexibility.
`,
    whyItFeelsBad: `
Austerity can become the default, which changes how decisions are made.
`,
    whatHappensNext: `
Further reductions often follow, and controls increase as the system tries to stabilize what remains.
`,
    whatItMeansForYou: `
These roles often persist longer because control is critical in this phase.
`
  }
},

"decline__translation": {
  id: "decline__translation",
  sections: {
    whatsHappening: `
You’re in a decline system. These systems shrink teams and reduce scope across the board.
`,
    whyItFeelsBad: `
You may feel blamed for problems you didn’t create, or caught between expectations and reality.
`,
    whatHappensNext: `
Pressure tends to concentrate here first, before cascading further downward as reductions continue and work is redistributed under strain.
`,
    whatItMeansForYou: `
These roles are highly exposed in this phase. That exposure is structural, not a reflection of your ability.
`
  }
},

"decline__execution": {
  id: "decline__execution",
  sections: {
    whatsHappening: `
You’re in a decline system. These systems narrow down to only essential output.
`,
    whyItFeelsBad: `
Demand may be shrinking, which can make workloads feel unstable or uncertain.
`,
    whatHappensNext: `
Production capacity decreases over time, and headcount reductions often follow as the system continues to contract.
`,
    whatItMeansForYou: `
These roles are reduced after other layers, but are still affected as contraction continues.
`
  }
},

"decline__buffer": {
  id: "decline__buffer",
  sections: {
    whatsHappening: `
You’re in a decline system. These systems rapidly reduce stabilizing and support layers.
`,
    whyItFeelsBad: `
Work can spike right before changes happen, which can feel disorienting.
`,
    whatHappensNext: `
Support functions are reduced quickly, and remaining work is redistributed as the system focuses on preserving only what is essential.
`,
    whatItMeansForYou: `
These roles face very high structural exposure in this phase.
`
  }
},

"decline__peripheral": {
  id: "decline__peripheral",
  sections: {
    whatsHappening: `
You’re in a decline system. These systems focus almost entirely on immediate survival.
`,
    whyItFeelsBad: `
Work not tied to immediate outcomes can become very hard to defend.
`,
    whatHappensNext: `
Optional work is removed first, and focus narrows toward only what is critical for survival.
`,
    whatItMeansForYou: `
These roles are typically eliminated early in decline phases.
`
  }
},  

};