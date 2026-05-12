export interface WordEntry {
  word: string;
  definition: string;
  example: string;
  synonyms: string[];
  antonyms: string[];
  derivatives: string[];
}

export interface VocabularyBlock {
  id: string;
  title: string;
  words: WordEntry[];
}

export const BARRON_800_DATA: VocabularyBlock[] = [
  {
    id: "barron-1",
    title: "Barron Block 01: Foundations",
    words: [
      {
        word: "Abate",
        definition: "To decrease; reduce in amount or intensity.",
        example: "The storm began to abate after several hours of heavy rain.",
        synonyms: ["Subside", "Moderate", "Decrease", "Wane"],
        antonyms: ["Intensify", "Increase", "Escalate"],
        derivatives: ["Abatement", "Abated"]
      },
      {
        word: "Abdicate",
        definition: "To give up a position, right, or power formally.",
        example: "The king was forced to abdicate the throne following the revolution.",
        synonyms: ["Resign", "Relinquish", "Renounce"],
        antonyms: ["Claim", "Assume", "Seize"],
        derivatives: ["Abdication"]
      },
      {
        word: "Aberrant",
        definition: "Deviating from what is normal or expected.",
        example: "The scientist studied the aberrant behavior of the cells under heat.",
        synonyms: ["Abnormal", "Anomalous", "Deviant"],
        antonyms: ["Normal", "Typical", "Standard"],
        derivatives: ["Aberration"]
      },
      {
        word: "Abeyance",
        definition: "Temporary suppression or suspension of activity.",
        example: "The project was held in abeyance until additional funding was secured.",
        synonyms: ["Dormancy", "Suspension", "Latence"],
        antonyms: ["Activity", "Continuance", "Operation"],
        derivatives: ["Abeyant"]
      },
      {
        word: "Abject",
        definition: "Miserable; pitiful; experienced contextually in extreme lowliness.",
        example: "They lived in abject poverty in the slums.",
        synonyms: ["Wretched", "Degraded", "Humble"],
        antonyms: ["Exalted", "Proud", "Noble"],
        derivatives: ["Abjectly"]
      },
      {
        word: "Abjure",
        definition: "To reject; abandon formally; to recant.",
        example: "He was forced to abjure his former beliefs to save his life.",
        synonyms: ["Forswear", "Renounce", "Retract"],
        antonyms: ["Adhere", "Affirm", "Claim"],
        derivatives: ["Abjuration"]
      },
      {
        word: "Abscission",
        definition: "The act of cutting; natural separation of a leaf or part of a plant.",
        example: "The abscission of leaves occurs annually during the autumn season.",
        synonyms: ["Severance", "Cutting", "Division"],
        antonyms: ["Attachment", "Adherence", "Joining"],
        derivatives: ["Abscise"]
      },
      {
        word: "Abscond",
        definition: "To depart secretly and hide oneself.",
        example: "The treasurer absconded with the company's funds.",
        synonyms: ["Escape", "Flee", "Decamp"],
        antonyms: ["Remain", "Appear", "Surface"],
        derivatives: ["Absconder"]
      },
      {
        word: "Abstemious",
        definition: "Moderate in appetite; sparing in consumption of food or drink.",
        example: "He led an abstemious life, rarely indulging in luxuries.",
        synonyms: ["Temperate", "Abstinent", "Moderate"],
        antonyms: ["Gluttonous", "Indulgent", "Greedy"],
        derivatives: ["Abstemiously"]
      }
    ]
  },
  {
    id: "barron-2",
    title: "Barron Block 02: Advancement",
    words: [
      {
        word: "Abstinence",
        definition: "The giving up of certain pleasures.",
        example: "Her doctor recommended total abstinence from caffeine.",
        synonyms: ["Refrainment", "Sobriety", "Moderation"],
        antonyms: ["Indulgence", "Excess", "Greed"],
        derivatives: ["Abstinently"]
      },
      {
        word: "Abysmal",
        definition: "Very bad; contextually resembling an abyss in depth.",
        example: "The quality of the student's work was abysmal throughout the semester.",
        synonyms: ["Dreadful", "Appalling", "Profound"],
        antonyms: ["Excellent", "Superb", "Shallow"],
        derivatives: ["Abysmally"]
      },
      {
        word: "Accretion",
        definition: "Growth in size or increase in amount over time.",
        example: "The accretion of wealth allowed the family to expand their empire.",
        synonyms: ["Accumulation", "Growth", "Augmentation"],
        antonyms: ["Erosion", "Decrease", "Dissipation"],
        derivatives: ["Accrete"]
      },
      {
        word: "Accrue",
        definition: "To accumulate; grow by additions over time.",
        example: "Interest will accrue on your savings account monthly.",
        synonyms: ["Amass", "Collect", "Result"],
        antonyms: ["Lose", "Spend", "Diminish"],
        derivatives: ["Accrual"]
      },
      {
        word: "Adamant",
        definition: "Uncompromising; unyielding; firm in opinion.",
        example: "She was adamant that we should leave the party immediately.",
        synonyms: ["Inflexible", "Determined", "Steadfast"],
        antonyms: ["Pliable", "Yielding", "Weak"],
        derivatives: ["Adamantly"]
      },
      {
        word: "Adjunct",
        definition: "Something added, attached, or joined; a subordinate assistant.",
        example: "The small library was an adjunct to the main university research center.",
        synonyms: ["Addition", "Appendage", "Auxiliary"],
        antonyms: ["Detachment", "Main", "Primary"],
        derivatives: ["Adjunctive"]
      },
      {
        word: "Admonish",
        definition: "To caution or reprimand; to warn against something.",
        example: "The teacher had to admonish the students for their loud behavior.",
        synonyms: ["Warn", "Chide", "Rebuke"],
        antonyms: ["Praise", "Commend", "Applaud"],
        derivatives: ["Admonishment"]
      },
      {
        word: "Adulterate",
        definition: "To corrupt or make impure by adding inferior substances.",
        example: "The medicine was adulterated with cheap filler by the illegal manufacturer.",
        synonyms: ["Contaminate", "Debase", "Pollute"],
        antonyms: ["Purify", "Refine", "Cleanse"],
        derivatives: ["Adulteration"]
      }
    ]
  }
];
