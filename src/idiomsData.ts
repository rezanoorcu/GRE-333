
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
  },
  {
    phrase: "High spirits",
    meaning: "A happy and energetic mood; very cheerful.",
    example: "He was in high spirits when I met him in the restaurant.",
    recallKey: "Energetic Soul",
    category: "Social"
  },
  {
    phrase: "Rolling in money",
    meaning: "To be very wealthy; having a lot of money.",
    example: "In his youth, he was practically rolling in money.",
    recallKey: "Cash Tsunami",
    category: "General"
  },
  {
    phrase: "Chequered career",
    meaning: "A career marked by varying fortunes; mixed and varied experiences.",
    example: "Jaya had a chequered career since she first started as an assistant.",
    recallKey: "Zigzag Journey",
    category: "Professional"
  },
  {
    phrase: "Flesh creep",
    meaning: "To cause a feeling of fear, horror, or disgust.",
    example: "The sight of the accident made my flesh creep.",
    recallKey: "Chills on Skin",
    category: "General"
  },
  {
    phrase: "Bird's eye view",
    meaning: "An overall or general view from a high position.",
    example: "The speaker gave a bird's eye view of the political situation.",
    recallKey: "Aerial Summary",
    category: "General"
  },
  {
    phrase: "Of his own accord",
    meaning: "Voluntarily; without being asked or forced.",
    example: "He resigned the post of his own accord.",
    recallKey: "Self-Driven",
    category: "General"
  },
  {
    phrase: "In the limelight",
    meaning: "The center of public attention or interest.",
    example: "He is used to being in the limelight all the time.",
    recallKey: "Under the Spotlight",
    category: "Social"
  },
  {
    phrase: "Ran out of",
    meaning: "To have no more of something; finished supply.",
    example: "I ran out of money during my European tour.",
    recallKey: "Empty Reserve",
    category: "General"
  },
  {
    phrase: "Scream blue murder",
    meaning: "To protest loudly and make a great deal of noise.",
    example: "The employees might scream blue murder if the salaries are delayed.",
    recallKey: "Loud Protest",
    category: "Social"
  },
  {
    phrase: "At large",
    meaning: "Free; not confined or having no serious occupation.",
    example: "He is now a gentleman at large after selling his factory.",
    recallKey: "Free Roamer",
    category: "General"
  },
  {
    phrase: "Built upon sand",
    meaning: "To have insecure foundations; unstable plans.",
    example: "His expansion plans were built upon sand and soon collapsed.",
    recallKey: "Liquid Foundation",
    category: "Professional"
  },
  {
    phrase: "Floored",
    meaning: "To be completely surprised, confused, or defeated.",
    example: "His complicated plan floored all the listeners.",
    recallKey: "Mental Knockout",
    category: "General"
  },
  {
    phrase: "Bad blood",
    meaning: "Enmity or ill feeling between people or groups.",
    example: "There has been bad blood between the two communities for years.",
    recallKey: "Toxic Pulse",
    category: "Social"
  },
  {
    phrase: "Storm in a teacup",
    meaning: "A great deal of fuss about a small or trivial matter.",
    example: "The argument over the meeting time was just a storm in a teacup.",
    recallKey: "Tiny Tempest",
    category: "Social"
  },
  {
    phrase: "Keeps himself to himself",
    meaning: "To be unsociable; avoiding others.",
    example: "Mohan always keeps himself to himself at the office.",
    recallKey: "Private Island",
    category: "Social"
  },
  {
    phrase: "Small talk",
    meaning: "Polite conversation about unimportant or casual topics.",
    example: "The ladies continued their small talk over coffee.",
    recallKey: "Surface Chat",
    category: "Social"
  },
  {
    phrase: "Broke down",
    meaning: "Failed to work; stopped functioning.",
    example: "My car broke down on the way to the interview.",
    recallKey: "Sudden Halt",
    category: "General"
  },
  {
    phrase: "Strain every nerve",
    meaning: "To make a great effort; to work very hard.",
    example: "My father strained every nerve to help me succeed.",
    recallKey: "Total Effort",
    category: "General"
  },
  {
    phrase: "Picking holes",
    meaning: "Criticizing unnecessarily; finding fault.",
    example: "He is always picking holes in every new project.",
    recallKey: "Flaw Finder",
    category: "Professional"
  },
  {
    phrase: "Die is cast",
    meaning: "A final decision has been taken; the step is taken.",
    example: "The resignation is signed; the die is cast.",
    recallKey: "Point of No Return",
    category: "Idiomatic"
  },
  {
    phrase: "Silver spoon in his mouth",
    meaning: "Born into a wealthy family; born rich.",
    example: "He was born with a silver spoon in his mouth.",
    recallKey: "Golden Birth",
    category: "Social"
  },
  {
    phrase: "Rift in the lute",
    meaning: "A small flaw that spoils something; break in harmony.",
    example: "The arrival of the mother-in-law proved a rift in the lute.",
    recallKey: "Broken Tune",
    category: "Social"
  },
  {
    phrase: "Take after",
    meaning: "To resemble a parent or relative in appearance or character.",
    example: "The prince did not take after the king.",
    recallKey: "Mirror Image",
    category: "General"
  },
  {
    phrase: "By and by",
    meaning: "Gradually; slowly over time.",
    example: "Things will improve by and by.",
    recallKey: "Slow Progress",
    category: "General"
  },
  {
    phrase: "Crocodile tears",
    meaning: "Pretended sorrow; fake emotion.",
    example: "She shed crocodile tears at her rival's misfortune.",
    recallKey: "Fake Grief",
    category: "Social"
  },
  {
    phrase: "Pulled up",
    meaning: "To reprimand or scold someone.",
    example: "The manager pulled up the employees for their late arrival.",
    recallKey: "Authority Check",
    category: "Professional"
  },
  {
    phrase: "Good turn",
    meaning: "An act of kindness; a helpful deed.",
    example: "He did me a good turn by recommending me for the job.",
    recallKey: "Kind favor",
    category: "Social"
  },
  {
    phrase: "Make hay while the sun shines",
    meaning: "To use a favorable opportunity wisely while it lasts.",
    example: "The market is booming; we should make hay while the sun shines.",
    recallKey: "Opportunity Grab",
    category: "Idiomatic"
  },
  {
    phrase: "Fair and square",
    meaning: "Honest and just in behavior; upright.",
    example: "He won the competition fair and square.",
    recallKey: "Honest Win",
    category: "Social"
  },
  {
    phrase: "High time",
    meaning: "Already overdue; the appropriate (but late) time.",
    example: "It is high time that we did something about the problem.",
    recallKey: "Past Due",
    category: "General"
  },
  {
    phrase: "Standing up for",
    meaning: "To support strongly; championing a cause.",
    example: "He is always standing up for the weak and oppressed.",
    recallKey: "Cause Defender",
    category: "Social"
  },
  {
    phrase: "Give a wide berth",
    meaning: "To stay away from; to avoid completely.",
    example: "We should give a wide berth to bad characters.",
    recallKey: "Safe Distance",
    category: "Social"
  },
  {
    phrase: "In vogue",
    meaning: "Popular or fashionable.",
    example: "Turban is in vogue in some communities.",
    recallKey: "Trend Wave",
    category: "General"
  },
  {
    phrase: "Cut to the quick",
    meaning: "To hurt someone's feelings deeply; deeply emotionally hurt.",
    example: "The old man was cut to the quick when his son refused to recognize him.",
    recallKey: "Soul Wound",
    category: "Social"
  },
  {
    phrase: "Put in a word",
    meaning: "To speak in favor of someone; to recommend.",
    example: "I requested him to put in a word for me with the director.",
    recallKey: "Name Drop Support",
    category: "Professional"
  },
  {
    phrase: "In cold blood",
    meaning: "Calmly and intentionally without emotion; ruthlessly.",
    example: "The victim was murdered in cold blood.",
    recallKey: "Frozen Hearted",
    category: "Idiomatic"
  },
  {
    phrase: "Sharp practices",
    meaning: "Unethical business methods; dishonest dealings.",
    example: "He built his business empire by his sharp practices.",
    recallKey: "Jagged Ethics",
    category: "Professional"
  },
  {
    phrase: "Hand in glove",
    meaning: "Closely working together, often secretly.",
    example: "The secretary and the treasurer are hand in glove with each other.",
    recallKey: "Two in a Mitten",
    category: "Professional"
  },
  {
    phrase: "Under his thumb",
    meaning: "Under strict control; unduly under someone's power.",
    example: "He never liked the idea of keeping his wife under his thumb.",
    recallKey: "Finger Press",
    category: "Social"
  },
  {
    phrase: "Cool customer",
    meaning: "An emotionally steady and patient person; calm and not excitable.",
    example: "You have to be a cool customer if you want to succeed in high-pressure situations.",
    recallKey: "Ice-vein Buyer",
    category: "Social"
  },
  {
    phrase: "Rank and file",
    meaning: "The ordinary members of an organisation (not the leaders).",
    example: "There was no opposition to the new policy by the rank and file.",
    recallKey: "Base Soldiers",
    category: "Professional"
  },
  {
    phrase: "Wiped the nose",
    meaning: "To deceive or trick someone.",
    example: "The clerk wiped the nose of his employer by submitting false bills.",
    recallKey: "Sinister Wipe",
    category: "Social"
  },
  {
    phrase: "A bone to pick",
    meaning: "To have a complaint to raise; to have a disagreement to settle.",
    example: "I have a bone to pick with you in this matter.",
    recallKey: "Skeleton Grudge",
    category: "Social"
  },
  {
    phrase: "Stuck his neck out",
    meaning: "To take a bold or risky decision.",
    example: "The minister stuck his neck out by promising free food for all.",
    recallKey: "Giraffe Risk",
    category: "Professional"
  },
  {
    phrase: "Put his foot down",
    meaning: "To refuse firmly; to be determined not to yield.",
    example: "He decided to put his foot down when they asked for more money.",
    recallKey: "Ground Anchor",
    category: "Social"
  },
  {
    phrase: "Keep a straight face",
    meaning: "To remain serious; to avoid laughing.",
    example: "The class could not keep a straight face on hearing the strange pronunciation.",
    recallKey: "Locked Grin",
    category: "Social"
  },
  {
    phrase: "Went back on his promise",
    meaning: "To fail to keep a promise; to withdraw support.",
    example: "He went back on his promise to vote for me.",
    recallKey: "Reverse Vow",
    category: "Social"
  },
  {
    phrase: "Ran amuck",
    meaning: "To behave uncontrollably; ran about wildly.",
    example: "The old beggar ran amuck and began to throw stones.",
    recallKey: "Wild Run",
    category: "General"
  },
  {
    phrase: "Conceive of",
    meaning: "To imagine, understand, or think of something.",
    example: "I cannot conceive of a time when I was without a mobile phone.",
    recallKey: "Mental Birth",
    category: "General"
  },
  {
    phrase: "Under a cloud",
    meaning: "Under suspicion or in disgrace.",
    example: "He has been under a cloud since the missing funds were discovered.",
    recallKey: "Suspicion Shade",
    category: "General"
  },
  {
    phrase: "Wait upon",
    meaning: "To serve or attend to someone.",
    example: "Several servants were there to wait upon the royal guests.",
    recallKey: "Serve Expectantly",
    category: "General"
  },
  {
    phrase: "Turn a deaf ear",
    meaning: "To refuse to listen or ignore a request.",
    example: "The authorities turned a deaf ear to the workers' demands.",
    recallKey: "Silent Reception",
    category: "General"
  },
  {
    phrase: "Take into account",
    meaning: "To consider or keep in mind.",
    example: "You must take into account the weather before planning the trip.",
    recallKey: "Fact Inclusion",
    category: "Professional"
  },
  {
    phrase: "Pros and cons",
    meaning: "The advantages and disadvantages of something.",
    example: "We discussed the pros and cons of moving to the city.",
    recallKey: "Balanced Scale",
    category: "General"
  },
  {
    phrase: "Up and doing",
    meaning: "Active and busy; productive.",
    example: "He is always up and doing since he launched his startup.",
    recallKey: "Rise and Grind",
    category: "General"
  },
  {
    phrase: "Turn over a new leaf",
    meaning: "To change one's behavior for the better; to start again.",
    example: "After the incident, he decided to turn over a new leaf.",
    recallKey: "Green Restart",
    category: "Social"
  },
  {
    phrase: "Under lock and key",
    meaning: "Securely locked away; safely stored.",
    example: "The secret documents are kept under lock and key.",
    recallKey: "Double Secure",
    category: "General"
  },
  {
    phrase: "Uphill task",
    meaning: "A very difficult task that requires great effort.",
    example: "Winning the championship is an uphill task for the team.",
    recallKey: "Mountain Climb",
    category: "General"
  },
  {
    phrase: "Ways and means",
    meaning: "Methods or resources needed to achieve something.",
    example: "We must find ways and means to reduce our expenses.",
    recallKey: "Path and Tool",
    category: "General"
  },
  {
    phrase: "Wear and tear",
    meaning: "The damage that happens naturally over time through use.",
    example: "The wear and tear of the machine made it inefficient.",
    recallKey: "Usage Decay",
    category: "General"
  },
  {
    phrase: "Well off",
    meaning: "Wealthy; in a good financial position.",
    example: "His family is quite well off.",
    recallKey: "Rich Status",
    category: "General"
  },
  {
    phrase: "Wild goose chase",
    meaning: "A foolish and hopeless search for something unobtainable.",
    example: "Searching for the treasure was just a wild goose chase.",
    recallKey: "Fruitless Hunt",
    category: "Idiomatic"
  },
  {
    phrase: "With open arms",
    meaning: "Warmly and enthusiastically.",
    example: "The guests were welcomed with open arms.",
    recallKey: "Friendly Hug",
    category: "Social"
  },
  {
    phrase: "Words of mouth",
    meaning: "Spoken communication; not written.",
    example: "The news spread by words of mouth.",
    recallKey: "Vocal Spread",
    category: "General"
  },
  {
    phrase: "To the backbone",
    meaning: "Thoroughly; in every part of one's character.",
    example: "He is an honest man to the backbone.",
    recallKey: "Core Integrity",
    category: "Social"
  },
  {
    phrase: "Through thick and thin",
    meaning: "In spite of all difficulties; through all experiences.",
    example: "He supported his friend through thick and thin.",
    recallKey: "Total Loyalty",
    category: "Social"
  },
  {
    phrase: "Tall talk",
    meaning: "Boastful or exaggerated talk.",
    example: "We are tired of his tall talk and no action.",
    recallKey: "Giant Claims",
    category: "Social"
  },
  {
    phrase: "Take to heart",
    meaning: "To be deeply affected or upset by something.",
    example: "He took the criticism to heart and became very sad.",
    recallKey: "Internal Pain",
    category: "Social"
  }
];
