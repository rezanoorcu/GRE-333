
export interface IdiomEntry {
  phrase: string;
  meaning: string;
  example: string;
  recallKey: string;
  category: 'General' | 'Professional' | 'Social' | 'Idiomatic';
}

export const IDIOMS_DATA: IdiomEntry[] = [
  {
    phrase: "Tipped off",
    meaning: "Secretly given prior information.",
    example: "The police were tipped off in advance about the robbery.",
    recallKey: "Secret Tip-off",
    category: "General"
  },
  {
    phrase: "Cold shoulder",
    meaning: "To deliberately ignore someone.",
    example: "I met him after a long time, but he gave me the cold shoulder.",
    recallKey: "Frozen Greeting",
    category: "Social"
  },
  {
    phrase: "Passed himself off as",
    meaning: "To pretend to be something one is not.",
    example: "He passed himself off as a noble man despite his humble origins.",
    recallKey: "Fake Identity",
    category: "Social"
  },
  {
    phrase: "Hanging fire",
    meaning: "Being delayed or remaining undecided for a long time.",
    example: "This matter has been hanging fire for the last many months.",
    recallKey: "Frozen Flame",
    category: "Idiomatic"
  },
  {
    phrase: "Die in harness",
    meaning: "To die while still working or in active service.",
    example: "In the armed forces, it is considered a great privilege to die in harness.",
    recallKey: "Working till Death",
    category: "Professional"
  },
  {
    phrase: "Big draw",
    meaning: "Something that attracts many people; a huge attraction.",
    example: "The cricket match proved to be a big draw for the local fans.",
    recallKey: "Crowd Puller",
    category: "General"
  },
  {
    phrase: "Lost heart",
    meaning: "To become discouraged or lose hope.",
    example: "When he was not selected for the team, he lost heart.",
    recallKey: "Empty Courage",
    category: "General"
  },
  {
    phrase: "Let the grass grow under his feet",
    meaning: "To waste time or remain inactive.",
    example: "He was undecided and let the grass grow under his feet.",
    recallKey: "Idle Lawn",
    category: "Idiomatic"
  },
  {
    phrase: "Backstairs influence",
    meaning: "Secret or unfair influence; using unofficial channels.",
    example: "He is using backstairs influence to get the job.",
    recallKey: "Shadow Power",
    category: "Professional"
  },
  {
    phrase: "Play to the gallery",
    meaning: "To do things to please popular opinion rather than principles.",
    example: "The politician's speech was just a way to play to the gallery.",
    recallKey: "Crowd Pleasing",
    category: "Social"
  },
  {
    phrase: "Stew in his own juice",
    meaning: "To suffer the consequences of one's own actions.",
    example: "Since he knew what would happen, he should be left to stew in his own juice.",
    recallKey: "Self-Sustained Suffering",
    category: "Idiomatic"
  },
  {
    phrase: "Hold out bright prospects",
    meaning: "To promise good possibilities or a successful future.",
    example: "The new industrial project holds out bright prospects for the town.",
    recallKey: "Golden Future",
    category: "General"
  },
  {
    phrase: "Burn the candle at both ends",
    meaning: "To overwork and exhaust oneself by doing too much.",
    example: "By working two jobs, he is burning the candle at both ends.",
    recallKey: "Double-End Burn",
    category: "Idiomatic"
  },
  {
    phrase: "Shelve the plans",
    meaning: "To postpone for later consideration; to put aside.",
    example: "The university decided to shelve its plans for expansion for now.",
    recallKey: "Put on Shelf",
    category: "Professional"
  },
  {
    phrase: "Blows his own trumpet",
    meaning: "To boast or praise oneself excessively.",
    example: "Do not trust a man who always blows his own trumpet.",
    recallKey: "Self-Praise Music",
    category: "Social"
  },
  {
    phrase: "Out and out",
    meaning: "Completely, thoroughly, or in every respect.",
    example: "His actions proved that he was an out and out reactionary.",
    recallKey: "Total Coverage",
    category: "Idiomatic"
  },
  {
    phrase: "Talking through his hat",
    meaning: "To talk foolish or senseless things; talking nonsense.",
    example: "He says he's a genius, but everyone knows he's talking through his hat.",
    recallKey: "Hat-Talk Nonsense",
    category: "Social"
  },
  {
    phrase: "Held over",
    meaning: "Postponed to a later time.",
    example: "The case was held over due to great opposition from the public.",
    recallKey: "Delayed Decision",
    category: "Professional"
  },
  {
    phrase: "Plough a lonely furrow",
    meaning: "To act independently without support; to work alone.",
    example: "In this society, no individual can plough a lonely furrow for long.",
    recallKey: "Solo Farmer",
    category: "Social"
  },
  {
    phrase: "Put a spoke in my wheel",
    meaning: "To obstruct or hinder progress intentionally.",
    example: "His constant criticism really put a spoke in my wheel.",
    recallKey: "Wheel Locker",
    category: "Idiomatic"
  },
  {
    phrase: "Strike gold",
    meaning: "To discover something valuable or important.",
    example: "After years of research, the team finally struck gold with the new formula.",
    recallKey: "Valuable Discovery",
    category: "General"
  },
  {
    phrase: "Look a gift horse in the mouth",
    meaning: "To be ungrateful or find fault in a gift.",
    example: "Why must you always look a gift horse in the mouth?",
    recallKey: "Ungrateful Check",
    category: "Social"
  },
  {
    phrase: "Burning question",
    meaning: "A highly important and widely debated issue.",
    example: "Poverty remains a burning question of the day.",
    recallKey: "Hot Debate",
    category: "General"
  },
  {
    phrase: "Bell the cat",
    meaning: "To take the lead in a dangerous task; to take the initiative.",
    example: "Everyone agreed something must be done, but who would bell the cat?",
    recallKey: "Risky Initiative",
    category: "Social"
  },
  {
    phrase: "On the wane",
    meaning: "Decidedly decreasing in power, popularity, or size.",
    example: "The popularity of the former superstar is clearly on the wane.",
    recallKey: "Declining Phase",
    category: "Idiomatic"
  },
  {
    phrase: "For good",
    meaning: "Permanently; for ever.",
    example: "He decided to leave the country for good.",
    recallKey: "Permanent Exit",
    category: "General"
  },
  {
    phrase: "Go off at a tangent",
    meaning: "To change the subject immediately or deviate from the main topic.",
    example: "He is a good speaker but tends to go off at a tangent.",
    recallKey: "Topic Deviation",
    category: "Social"
  },
  {
    phrase: "Sold for a song",
    meaning: "Sold very cheaply; at a very low price.",
    example: "Because of the urgent need for money, the house was sold for a song.",
    recallKey: "Song-Price Cheap",
    category: "General"
  },
  {
    phrase: "Snake in the grass",
    meaning: "A deceitful or treacherous person; a hidden enemy.",
    example: "Despite the trust between them, he turned out to be a snake in the grass.",
    recallKey: "Hidden Enemy",
    category: "Social"
  },
  {
    phrase: "What is sauce for the goose is sauce for the gander",
    meaning: "Fairness applies equally to all; same treatment for everyone.",
    example: "The principle of equal treatment must be implemented for all.",
    recallKey: "Equal Sauce",
    category: "Social"
  },
  {
    phrase: "Once for all",
    meaning: "Finally and decisively; for the last time.",
    example: "The matter must be settled once for all.",
    recallKey: "Ultimate Settle",
    category: "Idiomatic"
  },
  {
    phrase: "Bring to light",
    meaning: "To reveal secrets or uncover facts.",
    example: "The inquiry did not bring to light any startling facts.",
    recallKey: "Lantern Reveal",
    category: "General"
  },
  {
    phrase: "Bitten off more than he can chew",
    meaning: "Taking on more responsibility or work than one can handle.",
    example: "He is clearly bitten off more than he can chew with this job.",
    recallKey: "Too Big a Bite",
    category: "Idiomatic"
  },
  {
    phrase: "Leave no stone unturned",
    meaning: "To use all available means; to try every possible method.",
    example: "The detective left no stone unturned to trace the culprit.",
    recallKey: "Total Search",
    category: "General"
  },
  {
    phrase: "Took him to task",
    meaning: "To scold, criticise, or reprimand someone severely.",
    example: "The authorities took him to task for his negligence.",
    recallKey: "Task Scolding",
    category: "Professional"
  },
  {
    phrase: "On its last legs",
    meaning: "Near collapse; about to fail or perish.",
    example: "After the long journey, the engine was on its last legs.",
    recallKey: "Broken Support",
    category: "Idiomatic"
  },
  {
    phrase: "Hard and fast rule",
    meaning: "A strict and unchangeable rule.",
    example: "There is no hard and fast rule regarding this subject.",
    recallKey: "Iron Rule",
    category: "Professional"
  },
  {
    phrase: "Ivory tower",
    meaning: "A state of seclusion or separation from the real world.",
    example: "Professors are often criticized for living in their ivory towers.",
    recallKey: "Dream Fortress",
    category: "Social"
  },
  {
    phrase: "Lynch law",
    meaning: "Mob justice without legal authority or trial.",
    example: "In the absence of a strong government, lynch law becomes common.",
    recallKey: "Mob Rule",
    category: "Social"
  }
];
