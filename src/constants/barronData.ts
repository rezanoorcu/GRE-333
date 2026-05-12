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
    title: "Barron Block 02: Nature & Society",
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
      },
      {
        word: "Aesthetic",
        definition: "Relating to beauty or the arts; concerned with appreciation of beauty.",
        example: "The director's aesthetic style emphasized sparse lighting and long takes.",
        synonyms: ["Artistic", "Elegant", "Tasteful"],
        antonyms: ["Grotesque", "Ugly", "Unattractive"],
        derivatives: ["Aesthetics", "Aesthetically"]
      },
      {
        word: "Affected",
        definition: "Pretentious; phony; artificial or unnatural behavior.",
        example: "His affected British accent was obviously a facade.",
        synonyms: ["Artificial", "Mannerly", "Pretentious"],
        antonyms: ["Genuine", "Natural", "Sincere"],
        derivatives: ["Affectation"]
      }
    ]
  },
  {
    id: "barron-3",
    title: "Barron Block 03: Scale & Proportion",
    words: [
      {
        word: "Affinity",
        definition: "Fondness; liking; similarity or connection.",
        example: "Many readers feel an affinity for the characters in the novel.",
        synonyms: ["Attraction", "Kinship", "Connection"],
        antonyms: ["Aversion", "Dislike", "Antipathy"],
        derivatives: []
      },
      {
        word: "Aggrandize",
        definition: "To make larger or greater in power, wealth, or status.",
        example: "The ambitious politician sought to aggrandize himself at the expense of others.",
        synonyms: ["Exaggerate", "Magnify", "Enhance"],
        antonyms: ["Belittle", "Diminish", "Humble"],
        derivatives: ["Aggrandizement"]
      },
      {
        word: "Aggregate",
        definition: "Amounting to a whole; total; gathered into a mass.",
        example: "The aggregate power of the separate groups was quite formidable.",
        synonyms: ["Collective", "Total", "Cumulative"],
        antonyms: ["Individual", "Separate", "Component"],
        derivatives: ["Aggregation"]
      },
      {
        word: "Alacrity",
        definition: "Cheerful willingness; eagerness; speed.",
        example: "She accepted the promotion with alacrity.",
        synonyms: ["Eagerness", "Promptness", "Enthusiasm"],
        antonyms: ["Reluctance", "Apathy", "Hesitation"],
        derivatives: []
      },
      {
        word: "Alchemy",
        definition: "Medieval chemical philosophy; magical power or process of transmutation.",
        example: "The script was a perfect alchemy of humor and tragedy.",
        synonyms: ["Magic", "Transformation", "Sorcery"],
        antonyms: [],
        derivatives: ["Alchemist"]
      },
      {
        word: "Allay",
        definition: "To lessen; ease; soothe; to put to rest.",
        example: "The government tried to allay the public's fears about the economy.",
        synonyms: ["Relieve", "Mitigate", "Calm"],
        antonyms: ["Exacerbate", "Intensify", "Aggravate"],
        derivatives: []
      },
      {
        word: "Alleviate",
        definition: "To relieve; improve partially; to make more bearable.",
        example: "The new medicine will help alleviate your chronic pain.",
        synonyms: ["Assuage", "Lighten", "Lessen"],
        antonyms: ["Worsen", "Aggravate", "Increase"],
        derivatives: ["Alleviation"]
      },
      {
        word: "Alloy",
        definition: "A combination; a mixture of two or more metals.",
        example: "Brass is an alloy of copper and zinc.",
        synonyms: ["Mixture", "Compound", "Blend"],
        antonyms: ["Pure", "Element"],
        derivatives: []
      },
      {
        word: "Allure",
        definition: "The power to entice by charm; to attract strongly.",
        example: "The allure of fame has led many young people to Hollywood.",
        synonyms: ["Charm", "Attractiveness", "Enticement"],
        antonyms: ["Repulsion", "Deterrent"],
        derivatives: ["Alluring"]
      },
      {
        word: "Amalgamate",
        definition: "To combine into a unified whole; to merge.",
        example: "The two technology companies decided to amalgamate their research departments.",
        synonyms: ["Merge", "Unite", "Blend"],
        antonyms: ["Separate", "Divide", "Split"],
        derivatives: ["Amalgamation"]
      }
    ]
  },
  {
    id: "barron-4",
    title: "Barron Block 04: Mental States",
    words: [
      {
        word: "Ambiguous",
        definition: "Unclear or doubtful in meaning; having more than one interpretation.",
        example: "The ending of the film was intentionally ambiguous.",
        synonyms: ["Equivocal", "Uncertain", "Vague"],
        antonyms: ["Clear", "Explicit", "Unequivocal"],
        derivatives: ["Ambiguity"]
      },
      {
        word: "Ambivalence",
        definition: "The state of having conflicting emotional attitudes or feelings.",
        example: "He felt deep ambivalence about his impending marriage.",
        synonyms: ["Hesitation", "Indecision", "Uncertainty"],
        antonyms: ["Certainty", "Conviction", "Resolution"],
        derivatives: ["Ambivalent"]
      },
      {
        word: "Ambrosia",
        definition: "Something delicious; the food of the gods.",
        example: "The homemade pie was absolute ambrosia.",
        synonyms: ["Nectar", "Delicacy"],
        antonyms: ["Distasteful", "Bland"],
        derivatives: ["Ambrosial"]
      },
      {
        word: "Ameliorate",
        definition: "To improve; to make better.",
        example: "The new social program aims to ameliorate living conditions in inner cities.",
        synonyms: ["Improve", "Better", "Enhance"],
        antonyms: ["Worsen", "Deteriorate", "Degrade"],
        derivatives: ["Amelioration"]
      },
      {
        word: "Amenable",
        definition: "Agreeable; cooperative; suited; responsive to suggestion.",
        example: "The patient was amenable to the new course of treatment.",
        synonyms: ["Docile", "Responsive", "Compliant"],
        antonyms: ["Stubborn", "Intractable", "Unruly"],
        derivatives: []
      },
      {
        word: "Amenity",
        definition: "Something that increases comfort; pleasantness of location.",
        example: "The hotel offers every modern amenity to its guests.",
        synonyms: ["Facility", "Comfort", "Convenience"],
        antonyms: ["Hardship", "Inconvenience"],
        derivatives: []
      },
      {
        word: "Amulet",
        definition: "Ornament worn as a charm against evil spirits.",
        example: "The traveler carried an ancient amulet for protection.",
        synonyms: ["Talisman", "Charm"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Anachronism",
        definition: "Something out of the proper time period.",
        example: "A laptop in a film set in 1920 would be a glaring anachronism.",
        synonyms: ["Misplacement", "Timelessness"],
        antonyms: [],
        derivatives: ["Anachronistic"]
      },
      {
        word: "Analgesic",
        definition: "Medication that reduces or eliminates pain.",
        example: "Aspirin is one of the most common analgesic drugs available.",
        synonyms: ["Painkiller", "Anodyne"],
        antonyms: ["Irritant"],
        derivatives: []
      },
      {
        word: "Analogous",
        definition: "Comparable; similar in some way.",
        example: "The airplane's wings are analogous to the fins of a fish.",
        synonyms: ["Similar", "Equivalent", "Corresponding"],
        antonyms: ["Different", "Dissimilar", "Unrelated"],
        derivatives: ["Analogy"]
      }
    ]
  },
  {
    id: "barron-5",
    title: "Barron Block 05: Order & Chaos",
    words: [
      {
        word: "Anarchy",
        definition: "Absence of government; state of disorder or lawlessness.",
        example: "After the civil war, the country fell into a state of total anarchy.",
        synonyms: ["Chaos", "Lawlessness", "Disorder"],
        antonyms: ["Order", "Government", "Control"],
        derivatives: ["Anarchist", "Anarchic"]
      },
      {
        word: "Anodyne",
        definition: "Something that calms or soothes pain; harmless.",
        example: "The politician's speech was full of anodyne platitudes.",
        synonyms: ["Painkiller", "Soothing", "Bland"],
        antonyms: ["Irritating", "Harmful"],
        derivatives: []
      },
      {
        word: "Anomalous",
        definition: "Irregular; deviating from the norm or common order.",
        example: "The scientist's findings were anomalous and required further study.",
        synonyms: ["Abnormal", "Atypical", "Peculiar"],
        antonyms: ["Normal", "Typical", "Regular"],
        derivatives: ["Anomaly"]
      },
      {
        word: "Antecedent",
        definition: "Something that comes before; a preceding event or cause.",
        example: "The loud crash was the antecedent of the fire that followed.",
        synonyms: ["Precursor", "Ancestor", "Previous"],
        antonyms: ["Consequent", "Descendant", "Following"],
        derivatives: ["Antecedence"]
      },
      {
        word: "Antediluvian",
        definition: "Prehistoric; belonging to the time before the biblical Flood; ancient.",
        example: "My grandfather has some antediluvian ideas about social etiquette.",
        synonyms: ["Ancient", "Primitive", "Archaic"],
        antonyms: ["Modern", "Recent", "Contemporary"],
        derivatives: []
      },
      {
        word: "Antipathy",
        definition: "Dislike; hostility; strong feeling of aversion.",
        example: "There is a long-standing antipathy between the two rival fan clubs.",
        synonyms: ["Aversion", "Enmity", "Loathing"],
        antonyms: ["Affinity", "Attraction", "Liking"],
        derivatives: ["Antipathetic"]
      },
      {
        word: "Apathy",
        definition: "Indifference; lack of interest or concern.",
        example: "Widespread public apathy is a major threat to any democracy.",
        synonyms: ["Indifference", "Lethargy", "Unconcern"],
        antonyms: ["Passion", "Interest", "Concern"],
        derivatives: ["Apathetic"]
      },
      {
        word: "Apex",
        definition: "The highest point; the summit or peak.",
        example: "The mountain climber finally reached the apex of the peak.",
        synonyms: ["Summit", "Peak", "Acme"],
        antonyms: ["Nadir", "Base", "Bottom"],
        derivatives: []
      },
      {
        word: "Apogee",
        definition: "The point in an orbit furthest from the body being orbited; the highest point.",
        example: "The empire reached its apogee during the reign of the last great king.",
        synonyms: ["Zenith", "Climax", "Peak"],
        antonyms: ["Perigee", "Nadir"],
        derivatives: []
      },
      {
        word: "Apothegm",
        definition: "A terse, witty saying; a concise statement of principle.",
        example: "The book is filled with clever apothegms about the nature of power.",
        synonyms: ["Maxim", "Aphorism", "Adage"],
        antonyms: ["Prolixity", "Wordiness"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-6",
    title: "Barron Block 06: Temperament",
    words: [
      {
        word: "Appease",
        definition: "To calm, pacify, or placate; to satisfy by making concessions.",
        example: "The manager tried to appease the angry customer with a full refund.",
        synonyms: ["Mollify", "Soothe", "Conciliate"],
        antonyms: ["Provoke", "Aggravate", "Exasperate"],
        derivatives: ["Appeasement"]
      },
      {
        word: "Appellation",
        definition: "A name, title, or designation.",
        example: "The historical figure is better known by his appellation than his real name.",
        synonyms: ["Title", "Name", "Designation"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Apposite",
        definition: "Strikingly appropriate and relevant.",
        example: "The lawyer's apposite remarks made a strong impression on the jury.",
        synonyms: ["Relevant", "Pertinent", "Apt"],
        antonyms: ["Irrelevant", "Inappropriate"],
        derivatives: []
      },
      {
        word: "Apprise",
        definition: "To inform; to give notice to.",
        example: "Please keep me apprised of any updates regarding the project.",
        synonyms: ["Inform", "Advise", "Notify"],
        antonyms: ["Misinform", "Hide"],
        derivatives: []
      },
      {
        word: "Approbation",
        definition: "Praise; official approval or commendation.",
        example: "The young artist's work met with the warm approbation of the critics.",
        synonyms: ["Approval", "Praise", "Commendation"],
        antonyms: ["Censure", "Disapproval", "Condemnation"],
        derivatives: ["Approbatory"]
      },
      {
        word: "Appropriate",
        definition: "To take possession of for one's own use; to confiscate; suitable.",
        example: "The government decided to appropriate the land for a new park.",
        synonyms: ["Seize", "Confiscate", "Allot"],
        antonyms: ["Surrender", "Return", "Relinquish"],
        derivatives: ["Appropriation"]
      },
      {
        word: "Apropos",
        definition: "Relevant; with regard to; at the right time.",
        example: "His comments were very apropos to the discussion we were having.",
        synonyms: ["Pertinent", "Relevant", "Opportune"],
        antonyms: ["Irrelevant", "Inappropriate"],
        derivatives: []
      },
      {
        word: "Arabesque",
        definition: "Ornate design featuring intertwined curves; a ballet position.",
        example: "The antique mirror was framed with delicate golden arabesques.",
        synonyms: ["Ornamental", "Curving"],
        antonyms: ["Plain", "Straight"],
        derivatives: []
      },
      {
        word: "Archeology",
        definition: "The study of material evidence of past human life.",
        example: "Recent archeology has revealed much about the ancient civilization.",
        synonyms: ["Paleontology", "Excavation"],
        antonyms: [],
        derivatives: ["Archeologist", "Archeological"]
      },
      {
        word: "Ardor",
        definition: "Great emotion or passion; intense heat.",
        example: "The young poet wrote letters filled with romantic ardor.",
        synonyms: ["Passion", "Fervor", "Zeal"],
        antonyms: ["Apathy", "Indifference", "Lethargy"],
        derivatives: ["Ardent"]
      },
      {
        word: "Arduous",
        definition: "Extremely difficult; laborious; requiring great effort.",
        example: "The climbers faced an arduous journey to the mountain peak.",
        synonyms: ["Strenuous", "Hard", "Taxing"],
        antonyms: ["Easy", "Effortless", "Facile"],
        derivatives: ["Arduously"]
      },
      {
        word: "Argot",
        definition: "A specialized vocabulary used by a particular group or class.",
        example: "The thieves used a complex argot to communicate without being understood.",
        synonyms: ["Jargon", "Slang", "Cant"],
        antonyms: ["Standard", "Formal"],
        derivatives: []
      },
      {
        word: "Arrest",
        definition: "To stop; to seize; to catch the attention of.",
        example: "The sudden development arrested the company's decline.",
        synonyms: ["Stop", "Halt", "Hinder"],
        antonyms: ["Promote", "Release", "Forward"],
        derivatives: ["Arresting"]
      }
    ]
  },
  {
    id: "barron-7",
    title: "Barron Block 07: Traits & Behaviors",
    words: [
      {
        word: "Artifact",
        definition: "An item made by human craft; usually of historical interest.",
        example: "The museum houses a collection of ancient Egyptian artifacts.",
        synonyms: ["Relic", "Object", "Antiquity"],
        antonyms: [],
        derivatives: ["Artifactual"]
      },
      {
        word: "Artless",
        definition: "Guileless; natural; without cunning or deceit.",
        example: "Her artless beauty was a breath of fresh air in the fashion industry.",
        synonyms: ["Ingenuous", "Sincere", "Candid"],
        antonyms: ["Crafty", "Artful", "Devious"],
        derivatives: ["Artlessly"]
      },
      {
        word: "Ascetic",
        definition: "One who practices self-denial as a spiritual discipline.",
        example: "The monk led an ascetic life in the mountains.",
        synonyms: ["Abstinent", "Austere", "Hermit"],
        antonyms: ["Hedonistic", "Self-indulgent"],
        derivatives: ["Asceticism"]
      },
      {
        word: "Asperity",
        definition: "Severity; harshness; irritability of manner.",
        example: "The teacher's asperity often intimidated the students.",
        synonyms: ["Harshness", "Roughness", "Sharpness"],
        antonyms: ["Gentleness", "Mildness", "Smoothness"],
        derivatives: []
      },
      {
        word: "Aspersion",
        definition: "Slander; false rumor; a damaging or derogatory remark.",
        example: "He took offense at the aspersions cast upon his character.",
        synonyms: ["Slander", "Calumny", "Defamation"],
        antonyms: ["Praise", "Commendation"],
        derivatives: []
      },
      {
        word: "Assiduous",
        definition: "Diligent; hard-working; showing great care and perseverance.",
        example: "The researcher was assiduous in her study of the ancient texts.",
        synonyms: ["Diligent", "Persidtent", "Meticulous"],
        antonyms: ["Lazy", "Negligent", "Inattentive"],
        derivatives: ["Assiduity"]
      },
      {
        word: "Assuage",
        definition: "To make less severe; to soothe or relieve.",
        example: "She hoped the news would assuage his grief.",
        synonyms: ["Soothe", "Mitigate", "Alleviate"],
        antonyms: ["Exacerbate", "Intensify", "Aggravate"],
        derivatives: []
      },
      {
        word: "Astringent",
        definition: "Harsh; severe; contextually causing contraction of skin tissues.",
        example: "The critic's astringent reviews were famous for their biting wit.",
        synonyms: ["Severe", "Harsh", "Caustic"],
        antonyms: ["Gentle", "Mild"],
        derivatives: []
      },
      {
        word: "Asylum",
        definition: "Place of refuge or shelter; protection given to a refugee.",
        example: "The political dissident sought asylum in the foreign embassy.",
        synonyms: ["Sanctuary", "Refuge", "Haven"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Atavism",
        definition: "Reappearance of an ancestral characteristic; a throwback.",
        example: "The child's blue eyes were seen as a rare atavism in the family.",
        synonyms: ["Throwback", "Reversion"],
        antonyms: [],
        derivatives: ["Atavistic"]
      }
    ]
  },
  {
    id: "barron-8",
    title: "Barron Block 08: Value & Integrity",
    words: [
      {
        word: "Attenuate",
        definition: "To weaken; to make thin or slender.",
        example: "The radiation was attenuated by the lead shielding.",
        synonyms: ["Weaken", "Diminish", "Rarefy"],
        antonyms: ["Strengthen", "Thicken", "Fortify"],
        derivatives: ["Attenuation"]
      },
      {
        word: "Audacious",
        definition: "Bold; daring; showing a lack of respect for authority.",
        example: "His audacious plan to steal the crown jewels failed miserably.",
        synonyms: ["Bold", "Daring", "Intrepid"],
        antonyms: ["Timid", "Cautious", "Cowardly"],
        derivatives: ["Audacity"]
      },
      {
        word: "Austere",
        definition: "Stern; unadorned; simple; severe in manner or appearance.",
        example: "The room was furnished in an austere style with only the bare essentials.",
        synonyms: ["Severe", "Simple", "Ascetic"],
        antonyms: ["Ornate", "Luxurious", "Elaborate"],
        derivatives: ["Austerity"]
      },
      {
        word: "Autonomous",
        definition: "Self-governing; independent.",
        example: "The university is an autonomous institution with its own board of governors.",
        synonyms: ["Independent", "Self-ruling", "Free"],
        antonyms: ["Dependent", "Subject"],
        derivatives: ["Autonomy"]
      },
      {
        word: "Avarice",
        definition: "Greed; extreme desire for wealth.",
        example: "The billionaire's avarice led him to manipulate the stock market.",
        synonyms: ["Greed", "Cupidity", "Rapacity"],
        antonyms: ["Generosity", "Philanthropy"],
        derivatives: ["Avaricious"]
      },
      {
        word: "Aver",
        definition: "To affirm; declare to be true; to state with confidence.",
        example: "The witness averred that he had seen the defendant at the scene of the crime.",
        synonyms: ["Assert", "Declare", "Affirm"],
        antonyms: ["Deny", "Contradict"],
        derivatives: []
      },
      {
        word: "Avocation",
        definition: "Secondary occupation; a hobby or minor pursuit.",
        example: "His primary job was law, but his avocation was painting landscapes.",
        synonyms: ["Hobby", "Pastime", "Pursuit"],
        antonyms: ["Vocation", "Profession"],
        derivatives: []
      },
      {
        word: "Avuncular",
        definition: "Like an uncle; benevolent and tolerant; kind or patient.",
        example: "The old professor had a kindly, avuncular manner that put his students at ease.",
        synonyms: ["Kind", "Benevolent", "Uncle-like"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Axiomatic",
        definition: "Taken for granted; self-evident truth.",
        example: "It is axiomatic that practice is necessary to master any skill.",
        synonyms: ["Self-evident", "Obvious", "Accepted"],
        antonyms: ["Doubtful", "Ambiguous"],
        derivatives: ["Axiom"]
      },
      {
        word: "Bacchanalian",
        definition: "Pertaining to riotous or drunken festivity.",
        example: "The bacchanalian celebration lasted until the early hours of the morning.",
        synonyms: ["Riotous", "Orgiastic", "Drunken"],
        antonyms: ["Sober", "Temperate"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-9",
    title: "Barron Block 09: Expression & Style",
    words: [
      {
        word: "Banal",
        definition: "Commonplace; trite; lacking originality.",
        example: "The movie's plot was so banal that I fell asleep halfway through.",
        synonyms: ["Cliché", "Hackneyed", "Dull"],
        antonyms: ["Original", "Creative", "Innovative"],
        derivatives: ["Banality"]
      },
      {
        word: "Banter",
        definition: "Playful conversation; light and witty talk.",
        example: "The two coworkers enjoyed a friendly banter throughout the day.",
        synonyms: ["Teasing", "Raillery", "Jest"],
        antonyms: ["Serious", "Saber"],
        derivatives: []
      },
      {
        word: "Bard",
        definition: "A poet; contextually referring to a master storyteller.",
        example: "Shakespeare is often referred to as the Bard of Avon.",
        synonyms: ["Poet", "Minstrel"],
        antonyms: [],
        derivatives: ["Bardic"]
      },
      {
        word: "Bawdy",
        definition: "Obscene; indecent; lewd or vulgar.",
        example: "The comedian was known for his bawdy humor and adult subjects.",
        synonyms: ["Vulgar", "Lewd", "Indecent"],
        antonyms: ["Chaste", "Proper", "Polite"],
        derivatives: []
      },
      {
        word: "Beatify",
        definition: "To sanctify; to bless; to ascribe a virtue to.",
        example: "The Pope beatified the martyr for her unwavering faith.",
        synonyms: ["Hallow", "Consecrate", "Sanctify"],
        antonyms: ["Curse", "Condemn"],
        derivatives: ["Beatific", "Beatification"]
      },
      {
        word: "Bedizen",
        definition: "To dress in a vulgar, showy manner.",
        example: "The actress was bedizened with gaudy jewels and feathers.",
        synonyms: ["Dech", "Adorn", "Overdress"],
        antonyms: ["Unadorned", "Plain"],
        derivatives: []
      },
      {
        word: "Behemoth",
        definition: "Huge creature; anything very large and powerful.",
        example: "The new aircraft carrier is a behemoth of modern engineering.",
        synonyms: ["Giant", "Colossus", "Monster"],
        antonyms: ["Midget", "Dwarf"],
        derivatives: []
      },
      {
        word: "Belie",
        definition: "To contradict; misrepresent; give a false impression.",
        example: "Her calm face belied the terror she was feeling inside.",
        synonyms: ["Contradict", "Misrepresent", "Negate"],
        antonyms: ["Confirm", "Verify", "Prove"],
        derivatives: []
      },
      {
        word: "Beneficent",
        definition: "Kindly; doing good; charitable.",
        example: "The billionaire's beneficent donations helped build several new hospitals.",
        synonyms: ["Charitable", "Benevolent", "Kind"],
        antonyms: ["Malevolent", "Cruel", "Selfish"],
        derivatives: ["Beneficence"]
      },
      {
        word: "Bifurcate",
        definition: "To divide into two parts or branches.",
        example: "The river bifurcates near the city, forming a small island.",
        synonyms: ["Divide", "Fork", "Split"],
        antonyms: ["Unite", "Join", "Merge"],
        derivatives: ["Bifurcation"]
      }
    ]
  },
  {
    id: "barron-10",
    title: "Barron Block 10: Persuasion & Influence",
    words: [
      {
        word: "Blandishment",
        definition: "Flattery; something used to coax or cajole.",
        example: "Despite the salesman's blandishments, she decided not to buy the expensive car.",
        synonyms: ["Flattery", "Coaxing", "Cajolery"],
        antonyms: ["Insult", "Criticism"],
        derivatives: ["Blandish"]
      },
      {
        word: "Blasé",
        definition: "Bored because of frequent indulgence; unconcerned.",
        example: "The wealthy socialite was blasé about the extravagant parties she attended.",
        synonyms: ["Indifferent", "Bored", "Unimpressed"],
        antonyms: ["Enthusiastic", "Excited", "Interested"],
        derivatives: []
      },
      {
        word: "Bolster",
        definition: "To give a boost to; prop up; support.",
        example: "The positive review helped bolster the young author's confidence.",
        synonyms: ["Support", "Strengthen", "Uphold"],
        antonyms: ["Undermine", "Weaken", "Discourage"],
        derivatives: []
      },
      {
        word: "Bombastic",
        definition: "Pompous; using inflated language.",
        example: "The politician's bombastic speech was full of empty promises.",
        synonyms: ["Grandiloquent", "Pompous", "Overblown"],
        antonyms: ["Simple", "Unadorned", "Humble"],
        derivatives: ["Bombast"]
      },
      {
        word: "Boorish",
        definition: "Rude; insensitive; lacking social grace.",
        example: "His boorish behavior at the dinner party embarrassed his wife.",
        synonyms: ["Rude", "Uncouth", "Ill-mannered"],
        antonyms: ["Polite", "Refined", "Civilized"],
        derivatives: ["Boor"]
      },
      {
        word: "Bovine",
        definition: "Cow-like; contextually referring to being slow or dull.",
        example: "The reporter described the suspect as having a bovine expression.",
        synonyms: ["Dull", "Slow", "Stolid"],
        antonyms: ["Quick", "Alert", "Sharp"],
        derivatives: []
      },
      {
        word: "Brazen",
        definition: "Bold; shameless; impudent.",
        example: "The thief was caught after a brazen daylight robbery attempt.",
        synonyms: ["Bold", "Shameless", "Audacious"],
        antonyms: ["Shy", "Timid", "Modest"],
        derivatives: ["Brazenly"]
      },
      {
        word: "Broach",
        definition: "To mention for the first time; to open up a subject.",
        example: "It was difficult to broach the subject of a salary increase with his boss.",
        synonyms: ["Introduce", "Mention", "Propose"],
        antonyms: ["Close", "Finish"],
        derivatives: []
      },
      {
        word: "Bucolic",
        definition: "Characteristic of the countryside; rustic; pastoral.",
        example: "The artist's painting captured the bucolic beauty of the valley.",
        synonyms: ["Rustic", "Pastoral", "Rural"],
        antonyms: ["Urban", "City-like"],
        derivatives: []
      },
      {
        word: "Burgeon",
        definition: "To grow and flourish; to expand rapidly.",
        example: "The tech industry began to burgeon in the late 1990s.",
        synonyms: ["Flourish", "Thrive", "Expand"],
        antonyms: ["Wither", "Decline", "Die"],
        derivatives: ["Burgeoning"]
      }
    ]
  },
  {
    id: "barron-11",
    title: "Barron Block 11: Conflict & Criticism",
    words: [
      {
        word: "Burnish",
        definition: "To polish; to make smooth or glossy by rubbing.",
        example: "The soldier spent hours burnishing his brass buttons.",
        synonyms: ["Polish", "Shine", "Gloss"],
        antonyms: ["Dull", "Tarnish"],
        derivatives: []
      },
      {
        word: "Buttress",
        definition: "To reinforce; support; a structure built against a wall.",
        example: "The architect used stone pillars to buttress the cathedral's walls.",
        synonyms: ["Support", "Strengthen", "Uphold"],
        antonyms: ["Weaken", "Undermine"],
        derivatives: []
      },
      {
        word: "Cacophonous",
        definition: "Unpleasant or harsh-sounding; discordant.",
        example: "The city streets were filled with a cacophonous din of car horns and sirens.",
        synonyms: ["Discordant", "Dissonant", "Harsh"],
        antonyms: ["Harmonious", "Melodious", "Euphonious"],
        derivatives: ["Cacophony"]
      },
      {
        word: "Cadge",
        definition: "To beg; to sponge; to get by begging or coaxing.",
        example: "He managed to cadge a free meal from a sympathetic stranger.",
        synonyms: ["Beg", "Sponge", "Scrounge"],
        antonyms: ["Give", "Offer"],
        derivatives: []
      },
      {
        word: "Callous",
        definition: "Thick-skinned; insensitive; showing a lack of sympathy.",
        example: "The dictator showed a callous disregard for the suffering of his people.",
        synonyms: ["Insensitive", "Unfeeling", "Hardened"],
        antonyms: ["Sympathetic", "Sensitive", "Kind"],
        derivatives: ["Callousness"]
      },
      {
        word: "Calumny",
        definition: "False and malicious accusation; slander.",
        example: "His reputation was ruined by the calumny spread by his political rivals.",
        synonyms: ["Slander", "Defamation", "Aspersion"],
        antonyms: ["Praise", "Commendation"],
        derivatives: ["Calumnious"]
      },
      {
        word: "Canard",
        definition: "False; deliberately misleading story or rumor.",
        example: "The story about the celebrity's secret marriage was a total canard.",
        synonyms: ["Rumor", "Fabrication", "Hoax"],
        antonyms: ["Fact", "Truth"],
        derivatives: []
      },
      {
        word: "Canon",
        definition: "An established set of principles; a basis for judgment.",
        example: "His films are now considered part of the Western cinematic canon.",
        synonyms: ["Standard", "Rule", "Principle"],
        antonyms: [],
        derivatives: ["Canonical"]
      },
      {
        word: "Cant",
        definition: "Insincere talk; language of a particular group; hypocritical talk.",
        example: "The preacher's speech was full of moralistic cant.",
        synonyms: ["Hypocrisy", "Slang", "Jargon"],
        antonyms: ["Sincerity"],
        derivatives: []
      },
      {
        word: "Cantankerous",
        definition: "Irritable; ill-humored; difficult to deal with.",
        example: "The cantankerous old man refused to let the children play in his yard.",
        synonyms: ["Irritable", "Grumpy", "Testy"],
        antonyms: ["Amicable", "Pleasant", "Easygoing"],
        derivatives: ["Cantankerously"]
      }
    ]
  },
  {
    id: "barron-12",
    title: "Barron Block 12: Change & Chance",
    words: [
      {
        word: "Capricious",
        definition: "Fickle; subject to sudden changes of mood or behavior.",
        example: "The capricious weather made it difficult to plan a picnic.",
        synonyms: ["Fickle", "Volatile", "Erratic"],
        antonyms: ["Steady", "Stable", "Consistent"],
        derivatives: ["Caprice"]
      },
      {
        word: "Captious",
        definition: "Faultfinding; intended to entrap as in an argument.",
        example: "The lawyer's captious questions were designed to confuse the witness.",
        synonyms: ["Critical", "Faultfinding", "Peevish"],
        antonyms: ["Supportive", "Commending"],
        derivatives: ["Captiously"]
      },
      {
        word: "Cardinal",
        definition: "Of foremost importance; essential; primary.",
        example: "Prudence is one of the cardinal virtues in ethical philosophy.",
        synonyms: ["Primary", "Principal", "Main"],
        antonyms: ["Minor", "Secondary", "Trivial"],
        derivatives: []
      },
      {
        word: "Carnal",
        definition: "Of the flesh or body; related to physical appetites.",
        example: "The monk struggled to suppress his carnal desires.",
        synonyms: ["Physical", "Sensual", "Lustful"],
        antonyms: ["Spiritual", "Mental"],
        derivatives: ["Carnality"]
      },
      {
        word: "Carping",
        definition: "To find fault; complain; petty complaining.",
        example: "The director grew tired of the actor's constant carping about the script.",
        synonyms: ["Complaining", "Faultfinding", "Nipping"],
        antonyms: ["Praising", "Approving"],
        derivatives: ["Carp"]
      },
      {
        word: "Cartography",
        definition: "The science of making maps.",
        example: "Modern cartography has been revolutionized by satellite technology.",
        synonyms: ["Mapping"],
        antonyms: [],
        derivatives: ["Cartographer"]
      },
      {
        word: "Caste",
        definition: "Any hereditary social class; social stratification.",
        example: "In ancient times, the caste system was rigidly enforced in many societies.",
        synonyms: ["Class", "Rank", "Order"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Castigation",
        definition: "Punishment; chastisement; severe criticism.",
        example: "The athlete faced severe castigation from the media after his poor performance.",
        synonyms: ["Punishment", "Censure", "Rebuke"],
        antonyms: ["Praise", "Reward", "Commendation"],
        derivatives: ["Castigate"]
      },
      {
        word: "Cataclysm",
        definition: "A violent upheaval that causes great destruction and change.",
        example: "The sudden fall of the empire was a major cataclysm for the entire continent.",
        synonyms: ["Disaster", "Calamity", "Upheaval"],
        antonyms: ["Boon", "Blessing"],
        derivatives: ["Cataclysmic"]
      },
      {
        word: "Catalyst",
        definition: "Something that causes change; a substance that speeds a reaction.",
        example: "The revolutionary's arrest acted as a catalyst for the ensuing protests.",
        synonyms: ["Stimulant", "Inspiration", "Incentive"],
        antonyms: ["Inhibitor", "Hinderer"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-13",
    title: "Barron Block 13: Order & Social Structures",
    words: [
      {
        word: "Categorical",
        definition: "Absolute; without exception; unconditional.",
        example: "The government issued a categorical denial of any involvement in the scandal.",
        synonyms: ["Absolute", "Explicit", "Unequivocal"],
        antonyms: ["Qualified", "Conditional", "Vague"],
        derivatives: ["Categorically"]
      },
      {
        word: "Caucus",
        definition: "Smaller group within an organization; a meeting of members.",
        example: "The party leadership held a private caucus to discuss their strategy.",
        synonyms: ["Meeting", "Group", "Faction"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Causal",
        definition: "Involving a cause; related to cause and effect.",
        example: "The study failed to establish a causal link between the two events.",
        synonyms: ["Reasoning", "Logical"],
        antonyms: ["Coincidental"],
        derivatives: ["Causality"]
      },
      {
        word: "Caustic",
        definition: "Burning; stinging; causing corrosion; sarcastic in a scathing way.",
        example: "The comedian was known for his caustic wit and sharp political commentary.",
        synonyms: ["Acidic", "Biting", "Sarcastic"],
        antonyms: ["Mild", "Soothing", "Gentle"],
        derivatives: ["Caustically"]
      },
      {
        word: "Celestial",
        definition: "Concerned with the sky or heavens; sublime.",
        example: "The cathedral's ceiling was painted with celestial scenes of angels.",
        synonyms: ["Heavenly", "Divine", "Ethereal"],
        antonyms: ["Terrestrial", "Earthly"],
        derivatives: []
      },
      {
        word: "Centrifugal",
        definition: "Moving away from a center.",
        example: "The washing machine uses centrifugal force to spin the water out of the clothes.",
        synonyms: ["Outward", "Radiating"],
        antonyms: ["Centripetal"],
        derivatives: []
      },
      {
        word: "Centripetal",
        definition: "Moving or directed toward a center.",
        example: "The gravitational pull of the sun exerts a centripetal force on the planets.",
        synonyms: ["Inward"],
        antonyms: ["Centrifugal"],
        derivatives: []
      },
      {
        word: "Champion",
        definition: "To defend or support; to advocate for a cause.",
        example: "She has long championed the rights of minority groups in her community.",
        synonyms: ["Support", "Advocate", "Uphold"],
        antonyms: ["Oppose", "Attack", "Combat"],
        derivatives: []
      },
      {
        word: "Chasten",
        definition: "To correct by punishment or reproof; to restrain or subdue.",
        example: "The coach's harsh criticism was intended to chasten the overconfident team.",
        synonyms: ["Discipline", "Humble", "Subdue"],
        antonyms: ["Encourage", "Praise", "Embolden"],
        derivatives: ["Chastened"]
      },
      {
        word: "Chicanery",
        definition: "Trickery; fraud; deception by means of underhandedness.",
        example: "The used car salesman was notorious for his elaborate chicanery.",
        synonyms: ["Deception", "Trickery", "Duplicity"],
        antonyms: ["Honesty", "Sincerity", "Truthfulness"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-14",
    title: "Barron Block 14: Virtue & Conduct",
    words: [
      {
        word: "Chivalry",
        definition: "The qualities idealized by knighthood; bravery and gallantry toward women.",
        example: "The young man's chivalry was evident when he offered his seat to the elderly woman.",
        synonyms: ["Gallantry", "Courtesy", "Honor"],
        antonyms: ["Rudeness", "Churlishness"],
        derivatives: ["Chivalrous"]
      },
      {
        word: "Churlish",
        definition: "Rude; boorish; lacking good manners.",
        example: "It was churlish of him to complain about the meal after being invited to dinner.",
        synonyms: ["Rude", "Vulgar", "Sullen"],
        antonyms: ["Polite", "Courteous", "Refined"],
        derivatives: ["Churlishness"]
      },
      {
        word: "Circuitous",
        definition: "Roundabout; indirect; lengthy.",
        example: "The bus took a circuitous route through the city to avoid traffic.",
        synonyms: ["Indirect", "Winding", "迂回"],
        antonyms: ["Direct", "Straight", "Short"],
        derivatives: ["Circuitously"]
      },
      {
        word: "Clairvoyant",
        definition: "One who can predict the future; psychic.",
        example: "The fortune-teller claimed to be clairvoyant and able to see people's destinies.",
        synonyms: ["Psychic", "Prophetic", "Divinity"],
        antonyms: [],
        derivatives: ["Clairvoyance"]
      },
      {
        word: "Clamor",
        definition: "Noisy outcry; shout; a loud and persistent outcry.",
        example: "The crowd raised a clamor of protest when the new tax was announced.",
        synonyms: ["Uproar", "Din", "Hubbub"],
        antonyms: ["Silence", "Quiet", "Peace"],
        derivatives: ["Clamorous"]
      },
      {
        word: "Clique",
        definition: "A small, exclusive group; a select circle of people.",
        example: "The high school is dominated by several small, high-profile cliques.",
        synonyms: ["Circle", "Faction", "Group"],
        antonyms: [],
        derivatives: ["Cliquish"]
      },
      {
        word: "Cloister",
        definition: "To confine; seclude; a covered walk in a convent or monastery.",
        example: "The writer decided to cloister himself in a remote cabin to finish his novel.",
        synonyms: ["Seclude", "Isolate", "Confine"],
        antonyms: ["Free", "Expose"],
        derivatives: ["Cloistered"]
      },
      {
        word: "Coagulate",
        definition: "To thicken; congeal; to change from fluid to a more solid state.",
        example: "The blood will begin to coagulate as it is exposed to the air.",
        synonyms: ["Congeal", "Thicken", "Clot"],
        antonyms: ["Liquefy", "Thin", "Melt"],
        derivatives: ["Coagulation"]
      },
      {
        word: "Coalesce",
        definition: "To cause to become one; to merge or unite.",
        example: "The separate political factions eventually coalesced into a single powerful party.",
        synonyms: ["Merge", "Unite", "Blend"],
        antonyms: ["Separate", "Divide", "Split"],
        derivatives: ["Coalescence"]
      },
      {
        word: "Coda",
        definition: "Concluding part of a literary or musical composition.",
        example: "The symphony's coda was a triumphant flourish of brass and strings.",
        synonyms: ["Conclusion", "Finale", "Ending"],
        antonyms: ["Prologue", "Introduction"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-15",
    title: "Barron Block 15: Knowledge & Understanding",
    words: [
      {
        word: "Codify",
        definition: "To systematize; to arrange into a systematic code or order.",
        example: "The legal department worked to codify the company's internal regulations.",
        synonyms: ["Systematize", "Organize", "Classify"],
        antonyms: ["Disorganize", "Scramble"],
        derivatives: ["Codification"]
      },
      {
        word: "Cognizant",
        definition: "Informed; conscious; aware of something.",
        example: "Businesses must be cognizant of the environmental impact of their choices.",
        synonyms: ["Aware", "Mindful", "Conscious"],
        antonyms: ["Ignorant", "Unaware", "Mindless"],
        derivatives: ["Cognizance"]
      },
      {
        word: "Collage",
        definition: "Artistic composition of materials pasted over a surface.",
        example: "The student created a colorful collage of magazine clippings for her art project.",
        synonyms: ["Assemblage", "Montage"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Commensurate",
        definition: "Proportional; corresponding in size or degree.",
        example: "The salary offered was commensurate with his experience and qualifications.",
        synonyms: ["Proportional", "Equivalent", "Corresponding"],
        antonyms: ["Disproportionate", "Unfair"],
        derivatives: ["Commensurately"]
      },
      {
        word: "Compendium",
        definition: "Brief, comprehensive summary; a collection of information.",
        example: "The book is a useful compendium of historical facts about the city.",
        synonyms: ["Summary", "Digest", "Abstract"],
        antonyms: ["Expansion", "Prolixity"],
        derivatives: ["Compendious"]
      },
      {
        word: "Complacent",
        definition: "Self-satisfied; overly content; showing smug satisfaction.",
        example: "The team became complacent after winning several games in a row.",
        synonyms: ["Self-satisfied", "Smug", "Unconcerned"],
        antonyms: ["Discontented", "Anxious", "Concerned"],
        derivatives: ["Complacency"]
      },
      {
        word: "Complaisant",
        definition: "Overly polite; willingness to comply with the wishes of others.",
        example: "His complaisant attitude made him easy to manipulate by his stronger-willed friends.",
        synonyms: ["Obliging", "Compliant", "Agreeable"],
        antonyms: ["Stubborn", "Unruly", "Difficult"],
        derivatives: ["Complaisance"]
      },
      {
        word: "Complement",
        definition: "Something that completes or makes up a whole.",
        example: "The new curtains provided the perfect complement to the living room's decor.",
        synonyms: ["Additive", "Completion", "Fullness"],
        antonyms: ["Subtraction", "Fraction"],
        derivatives: ["Complementary"]
      },
      {
        word: "Compliant",
        definition: "Yielding; submissive; ready to adapt to others.",
        example: "The device is compliant with all international safety standards.",
        synonyms: ["Submissive", "Docile", "Responsive"],
        antonyms: ["Defiant", "Stubborn", "Rebellious"],
        derivatives: ["Compliance"]
      },
      {
        word: "Compunction",
        definition: "Uneasiness caused by guilt; a feeling of remorse.",
        example: "The thief felt no compunction about stealing from the wealthy estate.",
        synonyms: ["Remorse", "Qualm", "Scruple"],
        antonyms: ["Satisfaction", "Indifference"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-16",
    title: "Barron Block 16: Philosophy & Logic",
    words: [
      {
        word: "Concave",
        definition: "Curving inward; contextually referring to geometry or depth.",
        example: "The concave mirror reflected a magnified image of her face.",
        synonyms: ["Indented", "Hollow", "Depressed"],
        antonyms: ["Convex", "Bulging"],
        derivatives: ["Concavity"]
      },
      {
        word: "Conciliatory",
        definition: "Overcoming distrust or hostility; intended to placate.",
        example: "The president's conciliatory approach helped end the long-standing strike.",
        synonyms: ["Placating", "Pacifying", "Appeasing"],
        antonyms: ["Antagonistic", "Hostile", "Aggressive"],
        derivatives: ["Conciliate"]
      },
      {
        word: "Concoct",
        definition: "To invent; to prepare by combining various ingredients.",
        example: "The chef managed to concoct a delicious meal from the few ingredients left in the pantry.",
        synonyms: ["Devise", "Fabricate", "Create"],
        antonyms: ["Destroy", "Dismantle"],
        derivatives: ["Concoction"]
      },
      {
        word: "Concomitant",
        definition: "Existing concurrently; naturally accompanying or associated.",
        example: "The loss of jobs is a direct concomitant of the economic recession.",
        synonyms: ["Accompanying", "Attendant", "Associated"],
        antonyms: ["Unrelated", "Separate"],
        derivatives: []
      },
      {
        word: "Condone",
        definition: "To overlook voluntarily; forgive; to treat as harmless or trivial.",
        example: "The school does not condone any form of bullying among its students.",
        synonyms: ["Excuse", "Pardon", "Overlook"],
        antonyms: ["Condemn", "Punish", "Forbid"],
        derivatives: []
      },
      {
        word: "Confound",
        definition: "To baffle; perplex; mix up; to confuse or amaze.",
        example: "The magician's latest trick continues to confound even the most skeptical observers.",
        synonyms: ["Baffle", "Perplex", "Mystify"],
        antonyms: ["Clarify", "Explain", "Enlighten"],
        derivatives: ["Confounding"]
      },
      {
        word: "Congenial",
        definition: "Similar in tastes and habits; friendly; suited to one's needs.",
        example: "He found the quiet atmosphere of the library very congenial to his study habits.",
        synonyms: ["Amiable", "Compatible", "Friendly"],
        antonyms: ["Unpleasant", "Incompatible", "Hostile"],
        derivatives: ["Congeniality"]
      },
      {
        word: "Conjugal",
        definition: "Pertaining to marriage agreement or the relationship of spouses.",
        example: "The couple's conjugal bliss was evident to all who visited their home.",
        synonyms: ["Marital", "Matrimonial", "Spousal"],
        antonyms: ["Single", "Separated"],
        derivatives: []
      },
      {
        word: "Connoisseur",
        definition: "Expert in matters of taste; expert knowledge or training.",
        example: "As a connoisseur of fine wines, he could easily identify the vintage of the bottle.",
        synonyms: ["Expert", "Authority", "Aficionado"],
        antonyms: ["Ignoramus", "Novice"],
        derivatives: []
      },
      {
        word: "Conscript",
        definition: "A person compulsorily enrolled for military service.",
        example: "During the war, thousands of young conscripts were sent to the front lines.",
        synonyms: ["Draftee", "Recruit"],
        antonyms: ["Volunteer"],
        derivatives: ["Conscription"]
      }
    ]
  },
  {
    id: "barron-17",
    title: "Barron Block 17: Faith & Morality",
    words: [
      {
        word: "Consecrate",
        definition: "To declare sacred; to dedicate to a divine purpose.",
        example: "The bishops gathered to consecrate the new cathedral.",
        synonyms: ["Sanctify", "Bless", "Hallow"],
        antonyms: ["Desecrate", "Profane"],
        derivatives: ["Consecration"]
      },
      {
        word: "Contend",
        definition: "To assert; to struggle in opposition; to compete.",
        example: "The two candidates will contend for the seat in the upcoming election.",
        synonyms: ["Struggle", "Argue", "Compete"],
        antonyms: ["Yield", "Agree", "Surrender"],
        derivatives: ["Contention"]
      },
      {
        word: "Contentious",
        definition: "Quarrelsome; causing quarrels or arguments.",
        example: "The issue of immigration remains a highly contentious topic in politics.",
        synonyms: ["Argumentative", "Disputatious"],
        antonyms: ["Amicable", "Peaceful", "Agreeable"],
        derivatives: ["Contentiously"]
      },
      {
        word: "Contiguous",
        definition: "Touching; neighboring; connecting without a break.",
        example: "The United States is made up of forty-eight contiguous states.",
        synonyms: ["Adjacent", "Neighboring", "Adjoining"],
        antonyms: ["Distant", "Remote", "Separate"],
        derivatives: ["Contiguity"]
      },
      {
        word: "Continence",
        definition: "Self-control; abstention from sexual activity; moderation.",
        example: "He practiced strict continence as part of his religious vows.",
        synonyms: ["Self-control", "Moderation", "Chastity"],
        antonyms: ["Indulgence", "Excess"],
        derivatives: ["Continent"]
      },
      {
        word: "Contrite",
        definition: "Very sorrowful for a wrong; seeking forgiveness.",
        example: "The thief was truly contrite and offered to return all the stolen goods.",
        synonyms: ["Remorseful", "Repentant", "Sorry"],
        antonyms: ["Unrepentant", "Shameless", "Proud"],
        derivatives: ["Contrition"]
      },
      {
        word: "Contumacious",
        definition: "Disobedient; rebellious; willfully obstinate.",
        example: "The contumacious student refused to follow any of the school's rules.",
        synonyms: ["Rebellious", "Insubordinate", "Obstinate"],
        antonyms: ["Compliant", "Obedient", "Docile"],
        derivatives: ["Contumacy"]
      },
      {
        word: "Conundrum",
        definition: "Riddle; puzzle with no solution; a difficult problem.",
        example: "The sudden disappearance of the airplane remains a profound conundrum for investigators.",
        synonyms: ["Problem", "Puzzle", "Enigma"],
        antonyms: ["Solution", "Answer"],
        derivatives: []
      },
      {
        word: "Convention",
        definition: "Practice widely observed in a group; custom; accepted technique.",
        example: "It is a social convention to shake hands when meeting someone for the first time.",
        synonyms: ["Custom", "Standard", "Practice"],
        antonyms: ["Innovation", "Nonconformity"],
        derivatives: ["Conventional"]
      },
      {
        word: "Converge",
        definition: "To approach; come together; tend to meet at a point.",
        example: "The two roads converge at the bridge over the river.",
        synonyms: ["Join", "Unite", "Merge"],
        antonyms: ["Diverge", "Separate", "Spread"],
        derivatives: ["Convergence"]
      }
    ]
  },
  {
    id: "barron-18",
    title: "Barron Block 18: Style & Spirit",
    words: [
      {
        word: "Convex",
        definition: "Curved outward; like the exterior of a circle or sphere.",
        example: "A convex lens is used to focus light in a camera.",
        synonyms: ["Bulging", "Arched"],
        antonyms: ["Concave", "Indented"],
        derivatives: ["Convexity"]
      },
      {
        word: "Convivial",
        definition: "Sociable; fond of good company; festive.",
        example: "The convivial atmosphere at the party made everyone feel welcome.",
        synonyms: ["Sociable", "Festive", "Jovial"],
        antonyms: ["Unsociable", "Solitary", "Dull"],
        derivatives: ["Conviviality"]
      },
      {
        word: "Convoluted",
        definition: "Twisted; complicated; intricately involved.",
        example: "The plot of the mystery novel was so convoluted that I had to reread several chapters.",
        synonyms: ["Complex", "Intricate", "Complicated"],
        antonyms: ["Simple", "Clear", "Direct"],
        derivatives: ["Convolution"]
      },
      {
        word: "Copious",
        definition: "Abundant; plentiful; large in quantity or number.",
        example: "She took copious notes during the long and detailed lecture.",
        synonyms: ["Abundant", "Ample", "Plentiful"],
        antonyms: ["Scant", "Sparse", "Sparse"],
        derivatives: ["Copiously"]
      },
      {
        word: "Coquette",
        definition: "Woman who flirts; a woman who endeavors without sincere affection to gain attention.",
        example: "She was known as a coquette who enjoyed the attention of many men.",
        synonyms: ["Flirt", "Vamp"],
        antonyms: [],
        derivatives: ["Coquettish"]
      },
      {
        word: "Cornucopia",
        definition: "Horn overflowing with fruit and grain; state of abundance.",
        example: "The harvest festival featured a massive cornucopia of local produce.",
        synonyms: ["Abundance", "Wealth", "Profusion"],
        antonyms: ["Scarcity", "Lack", "Death"],
        derivatives: []
      },
      {
        word: "Cosmology",
        definition: "Study of the universe as a totality; theory of the origin and structure of the universe.",
        example: "Modern cosmology has provided new insights into the birth of the galaxy.",
        synonyms: [],
        antonyms: [],
        derivatives: ["Cosmologist", "Cosmological"]
      },
      {
        word: "Covert",
        definition: "Hidden; secret; not openly acknowledged or displayed.",
        example: "The spies engaged in various covert operations across the border.",
        synonyms: ["Secret", "Stealthy", "Furtive"],
        antonyms: ["Overt", "Public", "Open"],
        derivatives: ["Covertly"]
      },
      {
        word: "Covetous",
        definition: "Desiring something owned by another; greedy.",
        example: "He cast a covetous glance at his neighbor's expensive new car.",
        synonyms: ["Envious", "Greedy", "Avaricious"],
        antonyms: ["Generous", "Unselfish"],
        derivatives: ["Covet"]
      },
      {
        word: "Cozen",
        definition: "To mislead by trick or fraud; deceive.",
        example: "The con artist tried to cozen the elderly couple out of their savings.",
        synonyms: ["Deceive", "Trick", "Cheat"],
        antonyms: ["Honest", "Undeceive"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-19",
    title: "Barron Block 19: Truth & Deception",
    words: [
       {
        word: "Craven",
        definition: "Cowardly; lacking in courage.",
        example: "The craven soldier deserted his post as soon as the firing began.",
        synonyms: ["Cowardly", "Pusillanimous", "Timid"],
        antonyms: ["Brave", "Courageous", "Valiant"],
        derivatives: ["Cravenly"]
      },
      {
        word: "Credence",
        definition: "Acceptance of something as true; belief.",
        example: "Her past record gives credence to her claim of innocence.",
        synonyms: ["Belief", "Faith", "Trust"],
        antonyms: ["Distrust", "Doubt", "Skepticism"],
        derivatives: []
      },
      {
        word: "Credo",
        definition: "Statement of belief or principle; creed.",
        example: "His personal credo was to always treat others with respect.",
        synonyms: ["Creed", "Doctrine", "Tenet"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Daunt",
        definition: "To discourage; intimidate; dishearten.",
        example: "The sheer size of the task did not daunt the determined explorer.",
        synonyms: ["Intimidate", "Dismay", "Frighten"],
        antonyms: ["Encourage", "Embolden", "Inspire"],
        derivatives: ["Dauntless"]
      },
      {
        word: "Dearth",
        definition: "Scarcity; lack; an inadequate supply.",
        example: "There is a current dearth of qualified teachers in the rural areas.",
        synonyms: ["Lack", "Scarcity", "Paucity"],
        antonyms: ["Abundance", "Profusion", "Surplus"],
        derivatives: []
      },
      {
        word: "Debauchery",
        definition: "Corruption; excessive indulgence in sensual pleasures.",
        example: "The city was once famous for its late-night debauchery and wild parties.",
        synonyms: ["Dissipation", "Depravity", "Excess"],
        antonyms: ["Sobriety", "Moderation", "Virtue"],
        derivatives: ["Debauched"]
      },
      {
        word: "Decorum",
        definition: "Proper behavior; good taste in conduct or appearance.",
        example: "The students were expected to maintain strict decorum during the graduation ceremony.",
        synonyms: ["Propriety", "Dignity", "Etiquette"],
        antonyms: ["Impropriety", "Rudeness"],
        derivatives: ["Decorous"]
      },
      {
        word: "Defame",
        definition: "To malign; harm someone's reputation by false statements.",
        example: "He claimed the newspaper article was an attempt to defame his character.",
        synonyms: ["Slander", "Calumniate", "Libel"],
        antonyms: ["Praise", "Exalt", "Commend"],
        derivatives: ["Defamation"]
      },
      {
        word: "Default",
        definition: "To fail to act; failure to meet a legal or financial obligation.",
        example: "He defaulted on his student loan payments and lost his credit rating.",
        synonyms: ["Failure", "Neglect", "Nonpayment"],
        antonyms: ["Performance", "Payment"],
        derivatives: []
      },
      {
        word: "Deference",
        definition: "Respect; regard for another's wish; submission to the judgment of another.",
        example: "The young officer showed great deference to his superior's command.",
        synonyms: ["Respect", "Homerage", "Submission"],
        antonyms: ["Disrespect", "Contempt", "Disregard"],
        derivatives: ["Deferential"]
      }
    ]
  },
  {
    id: "barron-20",
    title: "Barron Block 20: Forms & Functions",
    words: [
      {
        word: "Defunct",
        definition: "No longer existing; dead or inactive.",
        example: "The once-famous company is now defunct and its assets have been sold off.",
        synonyms: ["Extinct", "Inactive", "Dead"],
        antonyms: ["Alive", "Active", "Extant"],
        derivatives: []
      },
      {
        word: "Delineate",
        definition: "To represent or depict; to describe or outline with precision.",
        example: "The architect's plan clearly delineates the boundaries of the new building.",
        synonyms: ["Describe", "Outline", "Depict"],
        antonyms: ["Confuse", "Distort"],
        derivatives: ["Delineation"]
      },
      {
        word: "Demographic",
        definition: "Related to population balance; statistics of a population.",
        example: "The company targets a specific demographic of young urban professionals.",
        synonyms: [],
        antonyms: [],
        derivatives: ["Demography"]
      },
      {
        word: "Demotic",
        definition: "Pertaining to people; popular or common language.",
        example: "The poet used demotic language to make his work accessible to a wider audience.",
        synonyms: ["Popular", "Common", "Vernacular"],
        antonyms: ["Formal", "Elevated"],
        derivatives: []
      },
      {
        word: "Demur",
        definition: "To express doubt; question or oppose; to object.",
        example: "The scientist demurred when asked to support the controversial theory.",
        synonyms: ["Object", "Dissent", "Hesitate"],
        antonyms: ["Agree", "Accept", "Approve"],
        derivatives: []
      },
      {
        word: "Denigrate",
        definition: "To slur someone's reputation; to malign or belittle.",
        example: "The politician tried to denigrate his opponent's past achievements.",
        synonyms: ["Belittle", "Slander", "Defame"],
        antonyms: ["Praise", "Exalt", "Applaud"],
        derivatives: ["Denigration"]
      },
      {
        word: "Denizen",
        definition: "An inhabitant; a regular visitor; a resident.",
        example: "The city's bars are frequent regular haunts for its various denizens.",
        synonyms: ["Resident", "Citizen", "Inhabitant"],
        antonyms: ["Foreigner", "Stranger"],
        derivatives: []
      },
      {
        word: "Denouement",
        definition: "Outcome; unraveling of the plot of a play or work of literature.",
        example: "The sudden turn of events in the final chapter provided a surprising denouement.",
        synonyms: ["Conclusion", "Resolution", "Outcome"],
        antonyms: ["Introduction", "Prologue"],
        derivatives: []
      },
      {
        word: "Deride",
        definition: "To mock; to laugh at with contempt; to ridicule.",
        example: "The critics derided the actor's performance as wooden and unconvincing.",
        synonyms: ["Ridicule", "Mock", "Jeer"],
        antonyms: ["Praise", "Admire", "Applaud"],
        derivatives: ["Derision"]
      },
      {
        word: "Derivative",
        definition: "Something derived; unoriginal; copied from somewhere else.",
        example: "The young artist's work was criticized as being too derivative of his teacher's style.",
        synonyms: ["Imitative", "Unoriginal", "Secondary"],
        antonyms: ["Original", "Creative", "Unique"],
        derivatives: ["Derivation"]
      }
    ]
  },
  {
    id: "barron-21",
    title: "Barron Block 21: Nature & Decay",
    words: [
      {
        word: "Desiccate",
        definition: "To dry out thoroughly; to dehydrate.",
        example: "The desert sun will quickly desiccate any water left in the open.",
        synonyms: ["Dehydrate", "Dry", "Parched"],
        antonyms: ["Moisten", "Hydrate", "Soak"],
        derivatives: ["Desiccation"]
      },
      {
        word: "Desuetude",
        definition: "State of disuse; no longer in use or practice.",
        example: "Many old laws fall into desuetude as society evolves and changes.",
        synonyms: ["Disuse", "Inactivity"],
        antonyms: ["Usage", "Practice"],
        derivatives: []
      },
      {
        word: "Desultory",
        definition: "Moving from one thing to another in an unplanned way; disconnected.",
        example: "She had a desultory conversation with her neighbor about the weather.",
        synonyms: ["Disconnected", "Aimless", "Rambling"],
        antonyms: ["Methodical", "Focused", "Ordered"],
        derivatives: []
      },
      {
        word: "Deterrent",
        definition: "Something that discourages or prevents an action.",
        example: "High taxes can be a major deterrent to foreign investment.",
        synonyms: ["Hindrance", "Obstacle", "Curb"],
        antonyms: ["Incentive", "Encouragement", "Stimulus"],
        derivatives: ["Deter"]
      },
      {
        word: "Detraction",
        definition: "The act of taking away from someone's reputation; belittling.",
        example: "The politician faced constant detraction from the media during the campaign.",
        synonyms: ["Slander", "Defamation", "Belittlement"],
        antonyms: ["Praise", "Commendation", "Exaltation"],
        derivatives: ["Detract"]
      },
      {
        word: "Diaphanous",
        definition: "Very sheer and light; almost transparent.",
        example: "The bride wore a diaphanous veil that floated behind her.",
        synonyms: ["Sheer", "Transparent", "Ethereal"],
        antonyms: ["Opaque", "Thick", "Heavy"],
        derivatives: []
      },
      {
        word: "Diatribe",
        definition: "A bitter and prolonged verbal attack.",
        example: "The critic launched into a long diatribe against the new film.",
        synonyms: ["Harangue", "Tirade", "Invective"],
        antonyms: ["Praise", "Eulogy", "Panegyric"],
        derivatives: []
      },
      {
        word: "Dichotomy",
        definition: "Division into two usually contradictory parts or groups.",
        example: "There is a sharp dichotomy between the public and private lives of celebrities.",
        synonyms: ["Division", "Split", "Separation"],
        antonyms: ["Unity", "Wholeness"],
        derivatives: ["Dichotomous"]
      },
      {
        word: "Diffidence",
        definition: "Shyness; lack of self-confidence; reserved.",
        example: "His diffidence made it difficult for him to speak in front of large crowds.",
        synonyms: ["Shyness", "Modesty", "Timidness"],
        antonyms: ["Confidence", "Boldness", "Arrogance"],
        derivatives: ["Diffident"]
      },
      {
        word: "Diffuse",
        definition: "Spread out; not concentrated; wordy or rambling.",
        example: "The speaker's diffuse style made it difficult to follow his main points.",
        synonyms: ["Spread", "Wordy", "Vague"],
        antonyms: ["Concise", "Concentrated", "Succinct"],
        derivatives: ["Diffusion"]
      }
    ]
  },
  {
    id: "barron-22",
    title: "Barron Block 22: Analysis & Perception",
    words: [
      {
        word: "Digression",
        definition: "Act of straying from the main subject in writing or speaking.",
        example: "The professor's long digression about his vacation was not relevant to the lecture.",
        synonyms: ["Departure", "Deviation", "Straying"],
        antonyms: ["Directness", "Focus"],
        derivatives: ["Digress"]
      },
      {
        word: "Dirge",
        definition: "A funeral hymn or mournful speech; slow, sad song.",
        example: "The lonely wind sounded like a mournful dirge in the abandoned house.",
        synonyms: ["Lament", "Elegy", "Requiem"],
        antonyms: ["Paean", "Jubilation"],
        derivatives: []
      },
      {
        word: "Disabuse",
        definition: "To free from a false belief; to correct a misconception.",
        example: "I hope this news will disabuse you of the idea that life is always easy.",
        synonyms: ["Correct", "Undeceive", "Enlighten"],
        antonyms: ["Deceive", "Mislead"],
        derivatives: []
      },
      {
        word: "Discerning",
        definition: "Having or showing good judgment; perceptive; insightful.",
        example: "She has a discerning eye for quality and only buys the best materials.",
        synonyms: ["Perceptive", "Insightful", "Judicious"],
        antonyms: ["Undiscriminating", "Oblivious"],
        derivatives: ["Discernment"]
      },
      {
        word: "Discomfit",
        definition: "To make someone feel uneasy or embarrassed; to thwart or frustrate.",
        example: "The news of the scandal seemed to discomfit the politician during the interview.",
        synonyms: ["Embarrass", "Unnerve", "Thwart"],
        antonyms: ["Comfort", "Soothe", "Encourage"],
        derivatives: []
      },
      {
        word: "Discordant",
        definition: "Lacking harmony or agreement; harsh or unpleasant sound.",
        example: "The singer's discordant notes were painful to hear.",
        synonyms: ["Dissonant", "Conflicting", "Harsh"],
        antonyms: ["Harmonious", "Melodious", "Euphonious"],
        derivatives: ["Discord"]
      },
      {
        word: "Discredit",
        definition: "To harm the reputation of; to cause to be doubted or distrusted.",
        example: "The new evidence was used to discredit the witness's testimony.",
        synonyms: ["Defame", "Slander", "Disgrace"],
        antonyms: ["Honor", "Approve", "Credit"],
        derivatives: []
      },
      {
        word: "Discrepancy",
        definition: "Lack of consistency; a difference between conflicting facts or claims.",
        example: "There is a major discrepancy between the two accounts of the accident.",
        synonyms: ["Inconsistency", "Difference", "Variation"],
        antonyms: ["Consistency", "Accord", "Agreement"],
        derivatives: []
      },
      {
        word: "Discrete",
        definition: "Distinct; separate; consisting of separate parts.",
        example: "The data is divided into several discrete categories for analysis.",
        synonyms: ["Separate", "Individual", "Detached"],
        antonyms: ["Continuous", "United", "Joined"],
        derivatives: []
      },
      {
        word: "Discretion",
        definition: "Quality of being cautious or reserved; the freedom to decide.",
        example: "The manager has the discretion to offer discounts to loyal customers.",
        synonyms: ["Prudence", "Judgment", "Caution"],
        antonyms: ["Indiscretion", "Rashness"],
        derivatives: ["Discreet"]
      }
    ]
  },
  {
    id: "barron-23",
    title: "Barron Block 23: Social Interactions",
    words: [
      {
        word: "Disingenuous",
        definition: "Lacking in candor; insincere; not straightforward.",
        example: "His apology seemed disingenuous, as he continued the same behavior.",
        synonyms: ["Insincere", "Deceitful", "Artful"],
        antonyms: ["Sincere", "Candid", "Frank"],
        derivatives: ["Disingenuously"]
      },
      {
        word: "Disinterested",
        definition: "Unbiased; neutral; not influenced by personal interest.",
        example: "A disinterested observer is more likely to provide an objective report.",
        synonyms: ["Unbiased", "Neutral", "Impartial"],
        antonyms: ["Biased", "Prejudiced", "Partial"],
        derivatives: ["Disinterest"]
      },
      {
        word: "Disjointed",
        definition: "Disconnected; lacking coherence; separated at the joints.",
        example: "The patient's speech was disjointed and difficult to understand.",
        synonyms: ["Incoherent", "Disconnected", "Fragmented"],
        antonyms: ["Coherent", "Connected", "Unified"],
        derivatives: []
      },
      {
        word: "Dismiss",
        definition: "To send away; to put out of consideration; to reject.",
        example: "The judge decided to dismiss the case due to lack of evidence.",
        synonyms: ["Reject", "Discard", "Eject"],
        antonyms: ["Accept", "Keep", "Invite"],
        derivatives: ["Dismissal"]
      },
      {
        word: "Disparage",
        definition: "To belittle; to speak of in a slighting or disrespectful way.",
        example: "The critic disparaged the young artist's work as amateurish.",
        synonyms: ["Belittle", "Decry", "Deprecate"],
        antonyms: ["Praise", "Extol", "Commend"],
        derivatives: ["Disparagement"]
      },
      {
        word: "Disparate",
        definition: "Fundamentally different; entirely unlike.",
        example: "The two cultures had disparate beliefs about social structure.",
        synonyms: ["Different", "Dissimilar", "Diverse"],
        antonyms: ["Similar", "Alike", "Uniform"],
        derivatives: ["Disparity"]
      },
      {
        word: "Dissemble",
        definition: "To hide or conceal one's true motives or feelings; to pretend.",
        example: "She tried to dissemble her disappointment after losing the competition.",
        synonyms: ["Feign", "Mask", "Conceal"],
        antonyms: ["Reveal", "Expose", "Confess"],
        derivatives: []
      },
      {
        word: "Disseminate",
        definition: "To spread information or knowledge widely.",
        example: "The organization's goal is to disseminate accurate information about health.",
        synonyms: ["Spread", "Circulate", "Broadcast"],
        antonyms: ["Suppress", "Collect", "Hide"],
        derivatives: ["Dissemination"]
      },
      {
        word: "Dissident",
        definition: "One who disagrees or dissents from an established policy or belief.",
        example: "The prominent dissident was arrested for criticizing the government.",
        synonyms: ["Rebel", "Nonconformist", "Objector"],
        antonyms: ["Conformist", "Supporter"],
        derivatives: ["Dissent"]
      },
      {
        word: "Dissolution",
        definition: "The act of dissolving or breaking up; decay or death.",
        example: "The sudden dissolution of the partnership shocked everyone involved.",
        synonyms: ["Breakup", "Decay", "Ending"],
        antonyms: ["Formation", "Creation", "Birth"],
        derivatives: ["Dissolve"]
      }
    ]
  },
  {
    id: "barron-24",
    title: "Barron Block 24: Harmony & Change",
    words: [
      {
        word: "Dissonance",
        definition: "Harsh, inharmonious sound; disagreement or inconsistency.",
        example: "There was a jarring dissonance between the company's words and its actions.",
        synonyms: ["Discord", "Dispute", "Conflict"],
        antonyms: ["Harmony", "Agreement", "Accord"],
        derivatives: ["Dissonant"]
      },
      {
        word: "Distend",
        definition: "To swell; to expand by internal pressure.",
        example: "The child's stomach was distended due to malnutrition.",
        synonyms: ["Swell", "Expand", "Bloat"],
        antonyms: ["Contract", "Shrink", "Deflate"],
        derivatives: ["Distension"]
      },
      {
        word: "Distill",
        definition: "To purify; to extract the essence of; to condense.",
        example: "The writer tried to distill the complex theory into a simple sentence.",
        synonyms: ["Purify", "Extract", "Refine"],
        antonyms: ["Pollute", "Dilute"],
        derivatives: ["Distillation"]
      },
      {
        word: "Distrait",
        definition: "Absent-minded; distracted; preoccupied.",
        example: "He had a distrait look on his face and didn't seem to notice the noise.",
        synonyms: ["Distracted", "Preoccupied", "Vague"],
        antonyms: ["Attentive", "Focused", "Aware"],
        derivatives: []
      },
      {
        word: "Diverge",
        definition: "To move in different directions; to vary or differ.",
        example: "The two paths begin to diverge after the first mile.",
        synonyms: ["Separate", "Differ", "Vary"],
        antonyms: ["Converge", "Join", "Follow"],
        derivatives: ["Divergence"]
      },
      {
        word: "Divest",
        definition: "To strip or deprive of something; to sell off assets.",
        example: "The company decided to divest its non-core businesses to save money.",
        synonyms: ["Strip", "Deprive", "Rid"],
        antonyms: ["Invest", "Clothe", "Endow"],
        derivatives: ["Divestiture"]
      },
      {
        word: "Divulge",
        definition: "To make known; to reveal a secret.",
        example: "He refused to divulge the source of his information.",
        synonyms: ["Reveal", "Disclose", "Expose"],
        antonyms: ["Hide", "Conceal", "Bury"],
        derivatives: []
      },
      {
        word: "Doctrinaire",
        definition: "Rigidly following a theory or doctrine; impractical.",
        example: "The politician's doctrinaire approach made it difficult to find a compromise.",
        synonyms: ["Dogmatic", "Inflexible", "Theoretical"],
        antonyms: ["Practical", "Flexible", "Pragmatic"],
        derivatives: []
      },
      {
        word: "Document",
        definition: "To provide with proof; a written or printed record.",
        example: "The lawyer needed to document every step of the transaction.",
        synonyms: ["Record", "Evidence", "Verify"],
        antonyms: ["Refute", "Disprove"],
        derivatives: ["Documentation"]
      },
      {
        word: "Doggerel",
        definition: "Poorly written or trivial verse; comic or burlesque.",
        example: "The poet was embarrassed by the doggerel he had written in his youth.",
        synonyms: ["Verse", "Rhyme", "Jingle"],
        antonyms: [],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-25",
    title: "Barron Block 25: Beliefs & Energy",
    words: [
      {
        word: "Dogmatic",
        definition: "Asserting opinions in an arrogant or authoritative way.",
        example: "The teacher's dogmatic style discouraged the students from questioning his ideas.",
        synonyms: ["Arrogant", "Opinionated", "Authoritative"],
        antonyms: ["Open-minded", "Flexible", "Doubtful"],
        derivatives: ["Dogma"]
      },
      {
        word: "Dormant",
        definition: "Inactive; in a state of rest or sleep; latent.",
        example: "The volcano has been dormant for hundreds of years.",
        synonyms: ["Inactive", "Latent", "Sleeping"],
        antonyms: ["Active", "Awake", "Lively"],
        derivatives: ["Dormancy"]
      },
      {
        word: "Dross",
        definition: "Waste matter; worthless material; scum on surface of molten metal.",
        example: "The jeweler must remove the dross from the gold to ensure its purity.",
        synonyms: ["Waste", "Scum", "Refuse"],
        antonyms: ["Treasure", "Worth"],
        derivatives: []
      },
      {
        word: "Dupe",
        definition: "To deceive or trick; someone who is easily deceived.",
        example: "The con artist managed to dupe several people out of their life savings.",
        synonyms: ["Trick", "Deceive", "Hoodwink"],
        antonyms: ["Enlighten", "Undeceive"],
        derivatives: []
      },
      {
        word: "Ebullient",
        definition: "Overflowing with enthusiasm or excitement; boiling.",
        example: "The crowd was ebullient after the home team won the championship.",
        synonyms: ["Enthusiastic", "Exuberant", "Lively"],
        antonyms: ["Apathetic", "Depressed", "Dull"],
        derivatives: ["Ebullience"]
      },
      {
        word: "Eclectic",
        definition: "Selecting from or made up of various sources.",
        example: "The museum's collection is quite eclectic, ranging from ancient art to modern sculpture.",
        synonyms: ["Diverse", "Varied", "Cathol"],
        antonyms: ["Narrow", "Uniform", "Single"],
        derivatives: ["Eclecticism"]
      },
      {
        word: "Effervescence",
        definition: "Quality of being bubbly or vivacious; state of bubbling up.",
        example: "The drink's effervescence was refreshing on a hot day.",
        synonyms: ["Bubbling", "Vivacity", "Sparkle"],
        antonyms: ["Stillness", "Flatness"],
        derivatives: ["Effervescent"]
      },
      {
        word: "Effete",
        definition: "Lacking vigor or energy; depleted; exhausted.",
        example: "The once-powerful empire had become effete and vulnerable to attack.",
        synonyms: ["Weak", "Exhausted", "Depleted"],
        antonyms: ["Vigorous", "Strong", "Lively"],
        derivatives: []
      },
      {
        word: "Efficacy",
        definition: "Power to produce a desired effect; effectiveness.",
        example: "The efficacy of the new vaccine has been proven in clinical trials.",
        synonyms: ["Effectiveness", "Potency", "Efficiency"],
        antonyms: ["Ineffectiveness", "Failure"],
        derivatives: ["Efficacious"]
      },
      {
        word: "Effrontery",
        definition: "Shameless boldness; insolence; audacity.",
        example: "He had the effrontery to ask for a raise after being caught sleeping on the job.",
        synonyms: ["Audacity", "Insolence", "Boldness"],
        antonyms: ["Shyness", "Modesty", "Respect"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-26",
    title: "Barron Block 26: Philosophy & Character",
    words: [
      {
        word: "Egoism",
        definition: "The tendency to see things in relation to oneself; self-centeredness.",
        example: "His egoism made it difficult for him to consider the needs of others.",
        synonyms: ["Self-centeredness", "Narcissism"],
        antonyms: ["Altruism", "Selflessness"],
        derivatives: ["Egoist", "Egoistic"]
      },
      {
        word: "Egotistical",
        definition: "Excessively self-centered; conceited.",
        example: "The actor's egotistical behavior made him difficult to work with on set.",
        synonyms: ["Conceited", "Vain", "Boastful"],
        antonyms: ["Humble", "Modest"],
        derivatives: ["Egotist"]
      },
      {
        word: "Elegy",
        definition: "A mournful, melancholy, or plaintive poem, especially a funeral song.",
        example: "The poet wrote an elegy in memory of his late father.",
        synonyms: ["Lament", "Dirge", "Requiem"],
        antonyms: ["Paean", "Jubilation"],
        derivatives: ["Elegiac"]
      },
      {
        word: "Elicit",
        definition: "To draw out or bring forth; to evoke.",
        example: "The teacher's questions were designed to elicit responses from the students.",
        synonyms: ["Evoke", "Extract", "Draw out"],
        antonyms: ["Suppress", "Hide", "Stifle"],
        derivatives: []
      },
      {
        word: "Elixir",
        definition: "A magical or medicinal potion; a substance thought to prolong life.",
        example: "The alchemist searched for the elixir of life that would grant immortality.",
        synonyms: ["Potion", "Panacea", "Medicine"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Elysian",
        definition: "Blissful; delightful; relating to Elysium (paradise).",
        example: "The garden was an Elysian retreat from the noise and chaos of the city.",
        synonyms: ["Blissful", "Heavenly", "Divine"],
        antonyms: ["Hellish", "Miserable"],
        derivatives: []
      },
      {
        word: "Emaciated",
        definition: "Abnormally thin or weak, especially because of illness or a lack of food.",
        example: "The survivors of the famine were tragically emaciated and weak.",
        synonyms: ["Thin", "Skeletal", "Gaunt"],
        antonyms: ["Fattened", "Plump", "Healthy"],
        derivatives: ["Emaciation"]
      },
      {
        word: "Embellish",
        definition: "To make something more attractive by adding decorative details.",
        example: "She liked to embellish her stories with colorful and dramatic details.",
        synonyms: ["Adorn", "Decorate", "Enhance"],
        antonyms: ["Simplify", "Strip"],
        derivatives: ["Embellishment"]
      },
      {
        word: "Emollient",
        definition: "Having the quality of softening or soothing the skin; soothing to emotions.",
        example: "The mother's emollient words calmed the crying child.",
        synonyms: ["Soothing", "Calming", "Softening"],
        antonyms: ["Irritating", "Harsh"],
        derivatives: []
      },
      {
        word: "Empirical",
        definition: "Based on observation or experience rather than theory or pure logic.",
        example: "The scientist's conclusions were based on solid empirical evidence.",
        synonyms: ["Observed", "Practical", "Experimental"],
        antonyms: ["Theoretical", "Speculative"],
        derivatives: ["Empiricism"]
      }
    ]
  },
  {
    id: "barron-27",
    title: "Barron Block 27: Growth & Knowledge",
    words: [
      {
        word: "Emulate",
        definition: "To match or surpass a person or achievement, typically by imitation.",
        example: "The young musician hoped to emulate the success of her mentor.",
        synonyms: ["Imitate", "Copy", "Mirror"],
        antonyms: ["Original", "Ignore"],
        derivatives: ["Emulation"]
      },
      {
        word: "Encomium",
        definition: "A speech or piece of writing that praises someone or something highly.",
        example: "The retiring professor received a warm encomium from his former students.",
        synonyms: ["Praise", "Eulogy", "Panegyric"],
        antonyms: ["Invective", "Vilification"],
        derivatives: []
      },
      {
        word: "Endemic",
        definition: "Regularly found among particular people or in a certain area.",
        example: "The disease is endemic to several countries in Central Africa.",
        synonyms: ["Native", "Local", "Indigenous"],
        antonyms: ["Foreign", "Alien", "Exotic"],
        derivatives: []
      },
      {
        word: "Enervate",
        definition: "To cause someone to feel drained of energy or vitality; to weaken.",
        example: "The hot and humid weather can quickly enervate even the strongest people.",
        synonyms: ["Weaken", "Exhaust", "Drain"],
        antonyms: ["Energize", "Invigorate", "Strengthen"],
        derivatives: []
      },
      {
        word: "Engender",
        definition: "To cause or give rise to a feeling, situation, or condition.",
        example: "The new policy helped to engender a sense of community among the employees.",
        synonyms: ["Cause", "Produce", "Create"],
        antonyms: ["Suppress", "Stop", "Destroy"],
        derivatives: []
      },
      {
        word: "Enhance",
        definition: "To intensify, increase, or further improve the quality or value of.",
        example: "The new software is designed to enhance the speed of the computer.",
        synonyms: ["Improve", "Increase", "Boost"],
        antonyms: ["Diminish", "Weaken", "Degrade"],
        derivatives: ["Enhancement"]
      },
      {
        word: "Entomology",
        definition: "The branch of zoology concerned with the study of insects.",
        example: "His interest in entomology led him to collect thousands of rare beetle species.",
        synonyms: [],
        antonyms: [],
        derivatives: ["Entomologist"]
      },
      {
        word: "Enunciate",
        definition: "To say or pronounce clearly; to express in clear or definite terms.",
        example: "The speaker was careful to enunciate every word so that everyone could understand.",
        synonyms: ["Pronounce", "Articulate", "State"],
        antonyms: ["Mumble", "Slur"],
        derivatives: ["Enunciation"]
      },
      {
        word: "Ephemeral",
        definition: "Lasting for a very short time; short-lived.",
        example: "The beauty of a sunset is ephemeral, lasting only a few minutes.",
        synonyms: ["Short-lived", "Transient", "Fleeting"],
        antonyms: ["Eternal", "Permanent", "Lasting"],
        derivatives: []
      },
      {
        word: "Epistemology",
        definition: "The theory of knowledge, especially with regard to its methods and scope.",
        example: "The course explores the fundamental issues of modern epistemology.",
        synonyms: [],
        antonyms: [],
        derivatives: ["Epistemologist"]
      }
    ]
  },
  {
    id: "barron-28",
    title: "Barron Block 28: Calm & Culture",
    words: [
      {
        word: "Equable",
        definition: "Not easily disturbed or angered; calm and even-tempered.",
        example: "She has an equable nature and rarely gets upset by small problems.",
        synonyms: ["Calm", "Even-tempered", "Serene"],
        antonyms: ["Volatile", "Irritable", "Unsteady"],
        derivatives: []
      },
      {
        word: "Equanimity",
        definition: "Mental calmness, composure, and evenness of temper.",
        example: "He faced the crisis with great equanimity and kept everyone else calm.",
        synonyms: ["Composure", "Serenity", "Peace"],
        antonyms: ["Agitation", "Alarm", "Panic"],
        derivatives: []
      },
      {
        word: "Equivocate",
        definition: "To use ambiguous language so as to conceal the truth or avoid committing oneself.",
        example: "The politician continued to equivocate when asked about his past record.",
        synonyms: ["Prevaricate", "Dodge", "Hedge"],
        antonyms: ["Be direct", "Be honest"],
        derivatives: ["Equivocation"]
      },
      {
        word: "Errant",
        definition: "Erring or straying from the proper course or standards.",
        example: "The errant knight was banished from the kingdom for his crimes.",
        synonyms: ["Straying", "Deviant", "Offending"],
        antonyms: ["Right", "Correct", "Obedient"],
        derivatives: []
      },
      {
        word: "Erudite",
        definition: "Having or showing great knowledge or learning.",
        example: "The professor's erudite lecture was admired by all who attended.",
        synonyms: ["Learned", "Scholarly", "Wise"],
        antonyms: ["Ignorant", "Illiterate", "Uneducated"],
        derivatives: ["Erudition"]
      },
      {
        word: "Esoteric",
        definition: "Intended for or likely to be understood by only a small number of people.",
        example: "The book explores some rather esoteric aspects of medieval history.",
        synonyms: ["Obscure", "Abstruse", "Secret"],
        antonyms: ["Common", "Public", "Obvious"],
        derivatives: []
      },
      {
        word: "Essay",
        definition: "To attempt or try; a short piece of writing on a particular subject.",
        example: "He decided to essay the difficult climb up the mountain face.",
        synonyms: ["Attempt", "Try", "Venture"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Estimable",
        definition: "Worthy of great respect.",
        example: "She is an estimable colleague who is always willing to help others.",
        synonyms: ["Admirable", "Worthy", "Respected"],
        antonyms: ["Contemptible", "Disreputable"],
        derivatives: ["Esteem"]
      },
      {
        word: "Ethnocentric",
        definition: "Evaluating other peoples and cultures according to the standards of one's own culture.",
        example: "Her ethnocentric view made it difficult for her to understand other cultures.",
        synonyms: ["Biased", "Narrow-minded"],
        antonyms: ["Open-minded", "Multicultural"],
        derivatives: ["Ethnocentrism"]
      },
      {
        word: "Etiology",
        definition: "The cause, set of causes, or manner of causation of a disease or condition.",
        example: "Scientists are still investigating the etiology of the rare genetic disorder.",
        synonyms: ["Cause", "Origin"],
        antonyms: [],
        derivatives: ["Etiological"]
      }
    ]
  },
  {
    id: "barron-29",
    title: "Barron Block 29: Language & Emotion",
    words: [
      {
        word: "Etymology",
        definition: "The study of the origin of words and the way in which their meanings have changed.",
        example: "His interest in etymology led him to explore the roots of several common English words.",
        synonyms: ["Derivation", "Origin"],
        antonyms: [],
        derivatives: ["Etymologist"]
      },
      {
        word: "Eugenics",
        definition: "The study of how to arrange reproduction in a population to increase heritables.",
        example: "The history of eugenics is filled with dark and controversial chapters.",
        synonyms: [],
        antonyms: [],
        derivatives: ["Eugenic"]
      },
      {
        word: "Eulogy",
        definition: "A speech or piece of writing that praises someone highly, typically someone deceased.",
        example: "The best friend gave a moving eulogy at the funeral service.",
        synonyms: ["Praise", "Encomium", "Panegyric"],
        antonyms: ["Invective", "Vilification"],
        derivatives: ["Eulogize"]
      },
      {
        word: "Euphemism",
        definition: "A mild or indirect word or expression substituted for one considered too harsh.",
        example: "'Passed away' is a common euphemism for 'died'.",
        synonyms: ["Substitute", "Politeness"],
        antonyms: ["Offense", "Directness"],
        derivatives: ["Euphemistic"]
      },
      {
        word: "Euphoria",
        definition: "A feeling or state of intense excitement and happiness.",
        example: "The winner was in a state of sheer euphoria after receiving the prize.",
        synonyms: ["Elation", "Exhilaration", "Joy"],
        antonyms: ["Depression", "Misery", "Sorrow"],
        derivatives: ["Euphoric"]
      },
      {
        word: "Euthanasia",
        definition: "The painless killing of a patient suffering from an incurable and painful disease.",
        example: "The legal and ethical aspects of euthanasia are debated in many countries.",
        synonyms: ["Mercy killing"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Evince",
        definition: "To reveal the presence of a quality or feeling; to indicate.",
        example: "His face evinced his surprise at the sudden turn of events.",
        synonyms: ["Reveal", "Indicate", "Show"],
        antonyms: ["Hide", "Conceal", "Suppress"],
        derivatives: []
      },
      {
        word: "Evocative",
        definition: "Bringing strong images, memories, or feelings to mind.",
        example: "The music was highly evocative of the summer evenings spent in the countryside.",
        synonyms: ["Suggestive", "Reminiscent", "Powerful"],
        antonyms: ["Forgettable", "Bland"],
        derivatives: ["Evoke"]
      },
      {
        word: "Exacerbate",
        definition: "To make a problem, bad situation, or negative feeling worse.",
        example: "The poor weather served only to exacerbate the delay in the project.",
        synonyms: ["Worsen", "Aggravate", "Inflame"],
        antonyms: ["Alleviate", "Improve", "Soothe"],
        derivatives: ["Exacerbation"]
      },
      {
        word: "Exact",
        definition: "To demand and obtain something from someone; very precise.",
        example: "The new tax will exact a heavy toll on the working families of the city.",
        synonyms: ["Demand", "Force", "Obtain"],
        antonyms: ["Give", "Yield"],
        derivatives: ["Exaction"]
      }
    ]
  },
  {
    id: "barron-30",
    title: "Barron Block 30: Action & Justice",
    words: [
      {
        word: "Exculpate",
        definition: "To show or declare that someone is not guilty of wrongdoing.",
        example: "The new DNA evidence was used to exculpate the man from the crime.",
        synonyms: ["Exonerate", "Acquit", "Vindicate"],
        antonyms: ["Convict", "Accuse", "Condemn"],
        derivatives: ["Exculpation"]
      },
      {
        word: "Execrable",
        definition: "Extremely bad or unpleasant; deserving of strong condemnation.",
        example: "The conditions in the prison were described as execrable by several human rights groups.",
        synonyms: ["Abominable", "Detestable", "Vile"],
        antonyms: ["Excellent", "Admirable", "Praiseworthy"],
        derivatives: []
      },
      {
        word: "Exhort",
        definition: "To strongly encourage or urge someone to do something.",
        example: "The coach exhorted his players to give their best in the final game.",
        synonyms: ["Urge", "Encourage", "Incite"],
        antonyms: ["Discourage", "Hinder"],
        derivatives: ["Exhortation"]
      },
      {
        word: "Exigency",
        definition: "An urgent need or demand; an emergency situation.",
        example: "The exigencies of the war required sacrifice from every citizen.",
        synonyms: ["Necessity", "Urgency", "Demand"],
        antonyms: [],
        derivatives: ["Exigent"]
      },
      {
        word: "Existential",
        definition: "Relating to existence; concerned with the nature of human existence.",
        example: "The film explores existential questions about the meaning of life and death.",
        synonyms: [],
        antonyms: [],
        derivatives: ["Existentialism"]
      },
      {
        word: "Exorcise",
        definition: "To drive out an evil spirit; to free someone from past memories.",
        example: "He tried to exorcise the ghosts of his past through therapy and meditation.",
        synonyms: ["Expel", "Banish", "Purge"],
        antonyms: [],
        derivatives: ["Exorcism"]
      },
      {
        word: "Expatiate",
        definition: "To speak or write at length or in detail about a subject.",
        example: "The speaker proceeded to expatiate on his favorite topic for nearly an hour.",
        synonyms: ["Elaborate", "Descant", "Dwell"],
        antonyms: ["Abbreviate", "Simplify"],
        derivatives: []
      },
      {
        word: "Expatriate",
        definition: "A person who lives outside their native country.",
        example: "There is a large community of British expatriates living in the Spanish city.",
        synonyms: ["Exile", "Emigrant"],
        antonyms: ["Native", "Citizen"],
        derivatives: []
      },
      {
        word: "Expiate",
        definition: "To make amends or reparation for guilt or wrongdoing; to atone.",
        example: "He sought to expiate his past crimes by dedicating his life to charity work.",
        synonyms: ["Atone", "Redeem", "Amends"],
        antonyms: [],
        derivatives: ["Expiation"]
      },
      {
        word: "Explicate",
        definition: "To analyze and develop a resource or idea in detail.",
        example: "The professor proceeded to explicate the complex poem line by line.",
        synonyms: ["Explain", "Analyze", "Develop"],
        antonyms: ["Confuse", "Obscure"],
        derivatives: ["Explication"]
      }
    ]
  },
  {
    id: "barron-31",
    title: "Barron Block 31: Proof & Persuasion",
    words: [
      {
        word: "Expository",
        definition: "Intended to explain or describe something.",
        example: "The textbook is an expository work that provides a clear overview of the subject.",
        synonyms: ["Explanatory", "Descriptive"],
        antonyms: [],
        derivatives: ["Exposition"]
      },
      {
        word: "Extant",
        definition: "Still in existence; not extinct or destroyed.",
        example: "There are only a few extant copies of the ancient manuscript.",
        synonyms: ["Surviving", "Existing", "Living"],
        antonyms: ["Extinct", "Vanished", "Destroyed"],
        derivatives: []
      },
      {
        word: "Extemporaneous",
        definition: "Spoken or done without preparation; impromptu.",
        example: "The politician gave an extemporaneous speech to the waiting crowd.",
        synonyms: ["Impromptu", "Unprepared", "Spontaneous"],
        antonyms: ["Planned", "Prepared", "Studied"],
        derivatives: ["Extemporize"]
      },
      {
        word: "Extirpate",
        definition: "To root out and destroy completely.",
        example: "The government launched a campaign to extirpate corruption from the public service.",
        synonyms: ["Eradicate", "Destroy", "Abolish"],
        antonyms: ["Create", "Build", "Foster"],
        derivatives: ["Extirpation"]
      },
      {
        word: "Extraneous",
        definition: "Irrelevant or unrelated to the subject being dealt with.",
        example: "The report was filled with extraneous information that was not relevant to the main topic.",
        synonyms: ["Irrelevant", "Unrelated", "Redundant"],
        antonyms: ["Relevant", "Essential", "Pertinent"],
        derivatives: ["Extraneously"]
      },
      {
        word: "Extrapolation",
        definition: "The act of estimating or concluding something by assuming that existing trends will continue.",
        example: "The scientist's predictions were based on an extrapolation of current data.",
        synonyms: ["Projection", "Estimation"],
        antonyms: [],
        derivatives: ["Extrapolate"]
      },
      {
        word: "Extrinsic",
        definition: "Not part of the essential nature of someone or something; coming from outside.",
        example: "His motivation was extrinsic, driven by the desire for rewards rather than personal satisfaction.",
        synonyms: ["External", "Outward", "Secondary"],
        antonyms: ["Intrinsic", "Inherent", "Essential"],
        derivatives: ["Extrinsically"]
      },
      {
        word: "Facetious",
        definition: "Treating serious issues with deliberately inappropriate humor.",
        example: "His facetious remarks about the tragedy were considered highly offensive by many.",
        synonyms: ["Flippant", "Joking", "Wagish"],
        antonyms: ["Serious", "Saber", "Grave"],
        derivatives: ["Facetiously"]
      },
      {
        word: "Facilitate",
        definition: "To make an action or process easy or easier.",
        example: "The new software will help to facilitate the flow of information within the company.",
        synonyms: ["Ease", "Assist", "Hasten"],
        antonyms: ["Hinder", "Block", "Stop"],
        derivatives: ["Facilitation"]
      },
      {
        word: "Factotum",
        definition: "A person employed to do all kinds of work.",
        example: "He served as the manager's factotum, handling everything from scheduling to repairs.",
        synonyms: ["Handyman", "Assistant"],
        antonyms: [],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-32",
    title: "Barron Block 32: Truth & Error",
    words: [
      {
        word: "Fallacious",
        definition: "Based on a mistaken belief; misleading; deceptive.",
        example: "The argument used to support the new policy was flawed and fallacious.",
        synonyms: ["Erroneous", "Deceptive", "Flawed"],
        antonyms: ["Truthful", "Logical", "Sound"],
        derivatives: ["Fallacy"]
      },
      {
        word: "Fallow",
        definition: "Plowed but not sowed; uncultivated; inactive.",
        example: "The land was left fallow for a year to allow the soil to recover its nutrients.",
        synonyms: ["Uncultivated", "Inactive", "Dormant"],
        antonyms: ["Cultivated", "Active", "Productive"],
        derivatives: []
      },
      {
        word: "Fatuous",
        definition: "Silly and pointless; foolish.",
        example: "The politician's fatuous comments were widely ridiculed by the media.",
        synonyms: ["Foolish", "Silly", "Pointless"],
        antonyms: ["Wise", "Serious", "Intelligent"],
        derivatives: ["Fatuousness"]
      },
      {
        word: "Fauna",
        definition: "The animals of a particular region, habitat, or geological period.",
        example: "The scientist's report provides a detailed overview of the local fauna.",
        synonyms: ["Wildlife", "Animals"],
        antonyms: ["Flora"],
        derivatives: []
      },
      {
        word: "Fawning",
        definition: "Displaying exaggerated flattery or affection; obsequious.",
        example: "The actor was surrounded by a crowd of fawning admirers.",
        synonyms: ["Obsequious", "Servile", "Flattering"],
        antonyms: ["Dignified", "Independent", "Proud"],
        derivatives: ["Fawn"]
      },
      {
        word: "Felicitous",
        definition: "Well-chosen or suited to the circumstances; pleasing and fortunate.",
        example: "The choice of the new manager turned out to be a very felicitous one for the company.",
        synonyms: ["Apt", "Suitable", "Fortunate"],
        antonyms: ["Inappropriate", "Unfortunate", "Awkward"],
        derivatives: ["Felicity"]
      },
      {
        word: "Feral",
        definition: "In a wild state, especially after escape from captivity or domestication.",
        example: "The island is home to a large population of feral cats.",
        synonyms: ["Wild", "Untamed", "Savage"],
        antonyms: ["Domesticated", "Tame", "Gentle"],
        derivatives: []
      },
      {
        word: "Fervor",
        definition: "Intense and passionate feeling; great warmth or earnestness.",
        example: "The young revolutionary spoke with great fervor about his cause.",
        synonyms: ["Passion", "Ardor", "Zeal"],
        antonyms: ["Apathy", "Indifference", "Lethargy"],
        derivatives: ["Fervent"]
      },
      {
        word: "Fetid",
        definition: "Smelling extremely unpleasant; stinking.",
        example: "The air in the abandoned house was thick with the fetid smell of decay.",
        synonyms: ["Stinking", "Malodorous", "Rank"],
        antonyms: ["Fragrant", "Sweet-smelling"],
        derivatives: []
      },
      {
        word: "Fetter",
        definition: "A chain or shackle placed on the feet; to restrict or restrain.",
        example: "The prisoner was bound in heavy fetters that made it difficult to move.",
        synonyms: ["Restrain", "Shackle", "Bind"],
        antonyms: ["Free", "Release", "Liberate"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-33",
    title: "Barron Block 33: Rule & Nature",
    words: [
      {
        word: "Fiat",
        definition: "A formal authorization or proposition; an arbitrary order.",
        example: "The company was run like a dictatorship, with every decision made by executive fiat.",
        synonyms: ["Order", "Decree", "Command"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Fidelity",
        definition: "Faithfulness to a person, cause, or belief, demonstrated by continuing loyalty.",
        example: "The dog showed unwavering fidelity to its owner throughout its life.",
        synonyms: ["Loyalty", "Faithfulness", "Devotion"],
        antonyms: ["Treachery", "Infidelity", "Betrayal"],
        derivatives: []
      },
      {
        word: "Filibuster",
        definition: "An action such as a prolonged speech that obstructs progress in a legislative assembly.",
        example: "The senator launched a filibuster to prevent the vote on the controversial bill.",
        synonyms: ["Obstruct", "Delay", "Block"],
        antonyms: ["Hasten", "Assist"],
        derivatives: []
      },
      {
        word: "Finesse",
        definition: "Intricate and refined delicacy; skill or cleverness in handling a situation.",
        example: "The negotiator handled the delicate situation with great finesse and skill.",
        synonyms: ["Skill", "Delicacy", "Cleverness"],
        antonyms: ["Clumsiness", "Ineptitude"],
        derivatives: []
      },
      {
        word: "Fissure",
        definition: "A long, narrow opening or line of breakage made by cracking or splitting.",
        example: "The earthquake caused a large fissure to open up in the middle of the field.",
        synonyms: ["Crack", "Cleft", "Split"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Flag",
        definition: "To become tired, weaker, or less enthusiastic.",
        example: "The speaker's energy began to flag after two hours on stage.",
        synonyms: ["Weaken", "Fail", "Decline"],
        antonyms: ["Strengthen", "Revive", "Invigorate"],
        derivatives: []
      },
      {
        word: "Fledging",
        definition: "Inexperienced; a young bird that has just fledged.",
        example: "The fledging company struggled to make a profit in its first year.",
        synonyms: ["Inexperienced", "Beginner", "Novice"],
        antonyms: ["Experienced", "Veteran", "Expert"],
        derivatives: ["Fledge"]
      },
      {
        word: "Flora",
        definition: "The plants of a particular region, habitat, or geological period.",
        example: "The scientist's report provides a detailed overview of the local flora.",
        synonyms: ["Plants", "Vegetation"],
        antonyms: ["Fauna"],
        derivatives: []
      },
      {
        word: "Florid",
        definition: "Having a red or flushed complexion; elaborately or excessively intricate.",
        example: "The poet was known for his florid and highly ornate style of writing.",
        synonyms: ["Ornate", "Elaborate", "Flowery"],
        antonyms: ["Simple", "Plain", "Unadorned"],
        derivatives: []
      },
      {
        word: "Flourish",
        definition: "To grow or develop in a healthy or vigorous way; a bold or extravagant gesture.",
        example: "The business began to flourish after moving to the new location.",
        synonyms: ["Thrive", "Prosper", "Grow"],
        antonyms: ["Wither", "Decline", "Die"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-34",
    title: "Barron Block 34: Resistance & Ruin",
    words: [
      {
        word: "Flout",
        definition: "Openly disregard a rule, law, or convention.",
        example: "The teenager continued to flout the school's rules despite repeated warnings.",
        synonyms: ["Disregard", "Defy", "Spurn"],
        antonyms: ["Obey", "Respect", "Follow"],
        derivatives: []
      },
      {
        word: "Flux",
        definition: "The action or process of flowing or flowing out; continuous change.",
        example: "The English language is in a constant state of flux, with new words being added every year.",
        synonyms: ["Change", "Flow", "Variation"],
        antonyms: ["Stability", "Stagnation"],
        derivatives: []
      },
      {
        word: "Foment",
        definition: "Instigate or stir up an undesirable or violent sentiment or course of action.",
        example: "The revolutionary tried to foment a rebellion among the working class.",
        synonyms: ["Instigate", "Incite", "Rouse"],
        antonyms: ["Suppress", "Dampen", "Quiet"],
        derivatives: []
      },
      {
        word: "Forbearance",
        definition: "Patient self-control; restraint and tolerance.",
        example: "She showed great forbearance in dealing with her difficult coworker.",
        synonyms: ["Patience", "Restraint", "Tolerance"],
        antonyms: ["Impatience", "Intolerance", "Rashness"],
        derivatives: ["Forbear"]
      },
      {
        word: "Forestall",
        definition: "To prevent or obstruct an anticipated event or action by taking advance action.",
        example: "The company's new policy was designed to forestall any potential scandals.",
        synonyms: ["Prevent", "Anticipate", "Divert"],
        antonyms: ["Assist", "Help", "Allow"],
        derivatives: []
      },
      {
        word: "Formidable",
        definition: "Inspiring fear or respect through being impressively large, powerful, or intense.",
        example: "The opponent was a formidable player who had never lost a match.",
        synonyms: ["Intimidating", "Powerful", "Impressive"],
        antonyms: ["Weak", "Insignificant", "Feeble"],
        derivatives: ["Formidably"]
      },
      {
        word: "Forswear",
        definition: "Agree to give up or do without something.",
        example: "He decided to forswear his past life and start over in a new city.",
        synonyms: ["Renounce", "Abandon", "Recant"],
        antonyms: ["Accept", "Keep", "Embrace"],
        derivatives: []
      },
      {
        word: "Founder",
        definition: "To fill with water and sink; to fail or break down.",
        example: "The ship began to founder after hitting the iceberg.",
        synonyms: ["Sink", "Fail", "Collapse"],
        antonyms: ["Succeed", "Float", "Prosper"],
        derivatives: []
      },
      {
        word: "Fracas",
        definition: "A noisy disturbance or quarrel.",
        example: "A minor fracas broke out in the crowd after the game ended.",
        synonyms: ["Disturbance", "Quarrel", "Brawl"],
        antonyms: ["Peace", "Quiet"],
        derivatives: []
      },
      {
        word: "Fractious",
        definition: "Irritable and quarrelsome; difficult to control; unruly.",
        example: "The fractious child refused to cooperate with his teacher.",
        synonyms: ["Irritable", "Unruly", "Difficult"],
        antonyms: ["Obedient", "Docile", "Cooperative"],
        derivatives: ["Fractiousness"]
      }
    ]
  },
  {
    id: "barron-35",
    title: "Barron Block 35: Art & Emotion",
    words: [
      {
        word: "Fresco",
        definition: "A painting done rapidly in watercolor on wet plaster on a wall or ceiling.",
        example: "The cathedral's walls were covered in beautiful frescoes depicting religious scenes.",
        synonyms: ["Painting", "Mural"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Frieze",
        definition: "A broad horizontal band of sculpted or painted decoration.",
        example: "The ancient temple was decorated with a complex frieze of heroes and gods.",
        synonyms: ["Ornamental", "Band"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Froward",
        definition: "Difficult to deal with; contrary.",
        example: "The froward youth refused to follow any of the rules of the society.",
        synonyms: ["Stubborn", "Contrary", "Unruly"],
        antonyms: ["Compliant", "Agreeable", "Obedient"],
        derivatives: []
      },
      {
        word: "Frugality",
        definition: "The quality of being economical with money or food; thriftiness.",
        example: "Her frugality allowed her to save enough money to buy her own house.",
        synonyms: ["Thrift", "Economy", "Prudence"],
        antonyms: ["Wastefulness", "Extravagance"],
        derivatives: ["Frugal"]
      },
      {
        word: "Fulminate",
        definition: "To express vehement protest; to explode with a loud noise.",
        example: "The politician proceeded to fulminate against the new policy for nearly an hour.",
        synonyms: ["Rage", "Protest", "Explode"],
        antonyms: ["Praise", "Applaud"],
        derivatives: ["Fulmination"]
      },
      {
        word: "Fulsome",
        definition: "Complimentary or flattering to an excessive degree.",
        example: "The actor received fulsome praise from the critics, which many thought was undeserved.",
        synonyms: ["Excessive", "Overblown", "Lavish"],
        antonyms: ["Sincere", "Genuine", "Simple"],
        derivatives: []
      },
      {
        word: "Fusion",
        definition: "The process or result of joining two or more things together.",
        example: "The new style of music is a fusion of traditional jazz and modern rock.",
        synonyms: ["Union", "Blend", "Merge"],
        antonyms: ["Separation", "Division", "Split"],
        derivatives: []
      },
      {
        word: "Futile",
        definition: "Incapable of producing any useful result; pointless.",
        example: "The attempt to find a compromise turned out to be completely futile.",
        synonyms: ["Pointless", "Useless", "In vain"],
        antonyms: ["Useful", "Productive", "Effective"],
        derivatives: ["Futility"]
      },
      {
        word: "Gainsay",
        definition: "To deny or contradict a fact or statement.",
        example: "No one can gainsay the importance of early childhood education.",
        synonyms: ["Contradict", "Deny", "Dispute"],
        antonyms: ["Confirm", "Verify", "Accept"],
        derivatives: []
      },
      {
        word: "Gambol",
        definition: "To run or jump about playfully.",
        example: "The lambs began to gambol in the fields as the sun came out.",
        synonyms: ["Frolic", "Skip", "Bound"],
        antonyms: [],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-36",
    title: "Barron Block 36: Social Presence",
    words: [
      {
        word: "Garrulous",
        definition: "Excessively talkative, especially on trivial matters.",
        example: "The garrulous customer entertained the staff for nearly an hour.",
        synonyms: ["Talkative", "Loquacious", "Voluble"],
        antonyms: ["Taciturn", "Reticent", "Silent"],
        derivatives: ["Garrulity"]
      },
      {
        word: "Gauche",
        definition: "Lacking ease or grace; unsophisticated and socially awkward.",
        example: "It was gauche of him to mention money at the dinner table.",
        synonyms: ["Awkward", "Unrefined", "Uncouth"],
        antonyms: ["Elegant", "Polished", "Graceful"],
        derivatives: []
      },
      {
        word: "Geniality",
        definition: "The quality of having a friendly and cheerful manner.",
        example: "The host's geniality made everyone feel welcome and at ease.",
        synonyms: ["Friendliness", "Affability", "Cordiality"],
        antonyms: ["Hostility", "Coldness"],
        derivatives: ["Genial"]
      },
      {
        word: "Gerrymander",
        definition: "Manipulate the boundaries of an electoral constituency so as to favor one party.",
        example: "The political party was accused of trying to gerrymander the districts before the election.",
        synonyms: ["Manipulate", "Engineer"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Glib",
        definition: "Fluent and voluble but insincere and shallow.",
        example: "The salesman's glib response did not inspire confidence in the customer.",
        synonyms: ["Fluent", "Smooth", "Plausible"],
        antonyms: ["Halting", "Sincere", "Genuine"],
        derivatives: ["Glibly"]
      },
      {
        word: "Goad",
        definition: "Provoke or annoy someone so as to stimulate some action or reaction.",
        example: "His comments were intended to goad her into an argument.",
        synonyms: ["Provoke", "Spur", "Incite"],
        antonyms: ["Discourage", "Hinder"],
        derivatives: []
      },
      {
        word: "Gossamer",
        definition: "Used to refer to something very light, thin, and insubstantial or delicate.",
        example: "The spider's web was a gossamer trap for unsuspecting insects.",
        synonyms: ["Delicate", "Sheer", "Flmsy"],
        antonyms: ["Heavy", "Thick", "Coarse"],
        derivatives: []
      },
      {
        word: "Gouge",
        definition: "To make a groove in; to overcharge or swindle.",
        example: "The storm caused a large gouge to appear in the side of the mountain.",
        synonyms: ["Scoop", "Excavate", "Swindle"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Grandiloquent",
        definition: "Pompous or extravagant in language, style, or manner.",
        example: "The politician's grandiloquent speech was full of empty promises.",
        synonyms: ["Pompous", "Bombastic", "Overblown"],
        antonyms: ["Simple", "Unadorned", "Humble"],
        derivatives: ["Grandiloquence"]
      },
      {
        word: "Gregarious",
        definition: "Fond of company; sociable.",
        example: "She is a gregarious person who enjoys attending parties and meeting new people.",
        synonyms: ["Sociable", "Outgoing", "Friendly"],
        antonyms: ["Unsociable", "Solitary", "Introverted"],
        derivatives: ["Gregariousness"]
      }
    ]
  },
  {
    id: "barron-37",
    title: "Barron Block 37: Trouble & Nature",
    words: [
      {
        word: "Grouse",
        definition: "To complain pettily; grumble.",
        example: "The employees began to grouse about the new working hours.",
        synonyms: ["Complain", "Grumble", "Whine"],
        antonyms: ["Praise", "Commend"],
        derivatives: []
      },
      {
        word: "Guileless",
        definition: "Devoid of guile; innocent and without deception.",
        example: "His guileless expression made it difficult for anyone to believe he was guilty.",
        synonyms: ["Innocent", "Sincere", "Artless"],
        antonyms: ["Deceitful", "Crafty", "Artful"],
        derivatives: ["Guile"]
      },
      {
        word: "Guise",
        definition: "An external form, appearance, or manner of presentation.",
        example: "The thief managed to enter the building under the guise of a delivery driver.",
        synonyms: ["Appearance", "Facade", "Mask"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Gullible",
        definition: "Easily persuaded to believe something; credulous.",
        example: "He was so gullible that he believed everything the internet told him.",
        synonyms: ["Credulous", "Innocent", "Trusting"],
        antonyms: ["Skeptical", "Cynical", "Shrewd"],
        derivatives: ["Gullibility"]
      },
      {
        word: "Gustatory",
        definition: "Concerned with the sense of taste.",
        example: "The chef's latest creation provides a unique gustatory experience.",
        synonyms: ["Tasty", "Flavorful"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Halcyon",
        definition: "Denoting a period of time in the past that was idyllically happy and peaceful.",
        example: "He looked back fondly on the halcyon days of his childhood in the mountains.",
        synonyms: ["Peaceful", "Idyllic", "Serene"],
        antonyms: ["Chaotic", "Turbulent", "Stormy"],
        derivatives: []
      },
      {
        word: "Hallowed",
        definition: "Made holy; consecrated; greatly revered and honored.",
        example: "The church is built on hallowed ground where many historical events occurred.",
        synonyms: ["Holy", "Sacred", "Blessed"],
        antonyms: ["Unbroken", "Profane", "Cursed"],
        derivatives: ["Hallow"]
      },
      {
        word: "Harangue",
        definition: "A lengthy and aggressive speech.",
        example: "The manager delivered a long harangue to the staff about their poor performance.",
        synonyms: ["Tirade", "Diatribe", "Lectures"],
        antonyms: ["Eulogy", "Praise"],
        derivatives: []
      },
      {
        word: "Harrowing",
        definition: "Acutely distressing.",
        example: "The survivors recounted the harrowing experience of the shipwreck.",
        synonyms: ["Distressing", "Traumatic", "Agonizing"],
        antonyms: ["Pleasant", "Calming", "Soothing"],
        derivatives: ["Harrow"]
      },
      {
        word: "Herbivorous",
        definition: "Feeding on plants.",
        example: "The dinosaur was herbivorous, feeding primarily on ferns and trees.",
        synonyms: ["Plant-eating"],
        antonyms: ["Carnivorous"],
        derivatives: ["Herbivore"]
      }
    ]
  },
  {
    id: "barron-38",
    title: "Barron Block 38: Science & Society",
    words: [
      {
        word: "Hermetic",
        definition: "Complete and airtight; insulated or relevant to an isolated group.",
        example: "The research was conducted within a hermetic environment to prevent contamination.",
        synonyms: ["Airtight", "Sealed", "Isolated"],
        antonyms: ["Open", "Exposed"],
        derivatives: ["Hermetically"]
      },
      {
        word: "Heterodox",
        definition: "Not conforming with accepted or orthodox standards or beliefs.",
        example: "The scientist's heterodox views were challenged by many of his colleagues.",
        synonyms: ["Unconventional", "Dissenting", "Maverick"],
        antonyms: ["Orthodox", "Conventional", "Standard"],
        derivatives: ["Heterodoxy"]
      },
      {
        word: "Hieroglyphics",
        definition: "Pictorial symbols or characters used in writing.",
        example: "The walls of the tomb were covered in complex ancient hieroglyphics.",
        synonyms: [],
        antonyms: [],
        derivatives: ["Hieroglyphic"]
      },
      {
        word: "Hirsute",
        definition: "Hairy.",
        example: "The species is known for its hirsute body and thick coat of fur.",
        synonyms: ["Hairy", "Shaggy", "Furry"],
        antonyms: ["Hairless", "Bald", "Smooth"],
        derivatives: []
      },
      {
        word: "Histrionic",
        definition: "Overly theatrical or melodramatic in character or style.",
        example: "Her histrionic behavior was considered highly inappropriate for the formal occasion.",
        synonyms: ["Theatrical", "Melodramatic", "Dramatic"],
        antonyms: ["Natural", "Affected", "Simple"],
        derivatives: ["Histrionics"]
      },
      {
        word: "Homeostasis",
        definition: "The maintenance of a constant internal environment in an organism.",
        example: "The human body employs various mechanisms to maintain homeostasis and balance.",
        synonyms: ["Balance", "Stability"],
        antonyms: ["Instability"],
        derivatives: ["Homeostatic"]
      },
      {
        word: "Homily",
        definition: "A religious discourse that is intended primarily for spiritual edification.",
        example: "The priest delivered a moving homily about the importance of charity and kindness.",
        synonyms: ["Sermon", "Lecture", "Discourse"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Homogeneous",
        definition: "Of the same kind; alike.",
        example: "The culture of the island is quite homogeneous, with very little outside influence.",
        synonyms: ["Uniform", "Alike", "Consistent"],
        antonyms: ["Heterogeneous", "Diverse", "Varied"],
        derivatives: ["Homogeneity"]
      },
      {
        word: "Hyperbole",
        definition: "Exaggerated statements or claims not meant to be taken literally.",
        example: "The report's use of hyperbole and exaggeration made it difficult to believe.",
        synonyms: ["Exaggeration", "Overstatement"],
        antonyms: ["Understatement"],
        derivatives: ["Hyperbolic"]
      },
      {
        word: "Iconoclastic",
        definition: "Attacking or ignoring cherished beliefs and long-held traditions.",
        example: "The artist's iconoclastic style challenged many traditional ideas about art.",
        synonyms: ["Rebellious", "Nonconformist", "Maverick"],
        antonyms: ["Conventional", "Conservative", "Traditional"],
        derivatives: ["Iconoclast"]
      }
    ]
  },
  {
    id: "barron-39",
    title: "Barron Block 39: Influence & State",
    words: [
      {
        word: "Idolatry",
        definition: "Worship of idols; extreme admiration, love, or reverence for something.",
        example: "The fan's idolatry for the singer led him to follow her everywhere.",
        synonyms: ["Worship", "Adoration", "Reverence"],
        antonyms: ["Contempt", "Hate", "Doubt"],
        derivatives: ["Idolatrous"]
      },
      {
        word: "Igneous",
        definition: "Formed through the cooling and solidification of magma or lava.",
        example: "Basalt is a type of igneous rock that is common in many parts of the world.",
        synonyms: [],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Imbroglio",
        definition: "An extremely confused, complicated, or embarrassing situation.",
        example: "The political imbroglio led to the resignation of several high-profile officials.",
        synonyms: ["Mess", "Entanglement", "Confusion"],
        antonyms: ["Order", "Simplicity", "Peace"],
        derivatives: []
      },
      {
        word: "Immutable",
        definition: "Unchanging over time or unable to be changed.",
        example: "The laws of nature are often seen as immutable and eternal.",
        synonyms: ["Unchangeable", "Permanent", "Fixed"],
        antonyms: ["Mutable", "Variable", "Changeable"],
        derivatives: ["Immutability"]
      },
      {
        word: "Impair",
        definition: "Weaken or damage something, especially a human faculty or function.",
        example: "Lack of sleep can seriously impair your ability to think clearly.",
        synonyms: ["Weaken", "Damage", "Hinder"],
        antonyms: ["Improve", "Strengthen", "Assist"],
        derivatives: ["Impairment"]
      },
      {
        word: "Impassive",
        definition: "Not feeling or showing emotion.",
        example: "The judge maintained an impassive expression throughout the entire trial.",
        synonyms: ["Expressionless", "Stoic", "Calm"],
        antonyms: ["Emotional", "Responsive", "Animated"],
        derivatives: ["Impassivity"]
      },
      {
        word: "Impecunious",
        definition: "Having little or no money; penniless.",
        example: "The young artist lead an impecunious life while trying to establish her career.",
        synonyms: ["Poor", "Penniless", "Destitute"],
        antonyms: ["Wealthy", "Rich", "Affluent"],
        derivatives: ["Impecuniosity"]
      },
      {
        word: "Impede",
        definition: "Delay or prevent someone or something by obstructing them; hinder.",
        example: "The heavy traffic will certainly impede our progress toward the city.",
        synonyms: ["Hinder", "Delay", "Obstruct"],
        antonyms: ["Facilitate", "Assit", "Hasten"],
        derivatives: ["Impediment"]
      },
      {
        word: "Impermeable",
        definition: "Not allowing fluid to pass through.",
        example: "The clay layer acts as an impermeable barrier that prevents water from flowing.",
        synonyms: ["Airtight", "Watertight", "Solid"],
        antonyms: ["Permeable", "Porous"],
        derivatives: ["Impermeability"]
      },
      {
        word: "Imperturbable",
        definition: "Unable to be upset or excited; calm.",
        example: "The old man was imperturbable and never seemed to get upset by anything.",
        synonyms: ["Calm", "Composed", "Serene"],
        antonyms: ["Excitable", "Nervous", "Agitated"],
        derivatives: ["Imperturbability"]
      }
    ]
  },
  {
    id: "barron-40",
    title: "Barron Block 40: Obstacles & Action",
    words: [
      {
        word: "Impervious",
        definition: "Not allowing fluid to pass through; unable to be affected by.",
        example: "She seemed impervious to the criticism being directed at her.",
        synonyms: ["Impermeable", "Immune", "Unmoved"],
        antonyms: ["Permeable", "Susceptible", "Vulnerable"],
        derivatives: []
      },
      {
        word: "Impinge",
        definition: "Have an effect or impact, especially a negative one; encroach.",
        example: "The new development will certainly impinge on the privacy of the neighbors.",
        synonyms: ["Impact", "Influence", "Encroach"],
        antonyms: [],
        derivatives: ["Impingement"]
      },
      {
        word: "Implacable",
        definition: "Relentless; unstoppable; unable to be placated.",
        example: "The company faced an implacable opponent in the legal battle.",
        synonyms: ["Relentless", "Unstoppable", "Ruthless"],
        antonyms: ["Placable", "Yielding", "Merciful"],
        derivatives: ["Implacability"]
      },
      {
        word: "Implausible",
        definition: "Not seeming reasonable or probable; failing to convince.",
        example: "His excuse for being late was considered highly implausible by his boss.",
        synonyms: ["Unlikely", "Incredible", "Far-fetched"],
        antonyms: ["Plausible", "Believable", "Likely"],
        derivatives: ["Implausibility"]
      },
      {
        word: "Implicit",
        definition: "Implied though not plainly expressed; absolute.",
        example: "There was an implicit agreement between the two companies to share information.",
        synonyms: ["Implied", "Inherent", "Absolute"],
        antonyms: ["Explicit", "Direct", "Clear"],
        derivatives: ["Imply"]
      },
      {
        word: "Implode",
        definition: "Collapse or cause to collapse violently inward.",
        example: "The abandoned building was designed to implode during the controlled demolition.",
        synonyms: ["Collapse", "Burst"],
        antonyms: ["Explode"],
        derivatives: ["Implosion"]
      },
      {
        word: "Imprecation",
        definition: "A spoken curse.",
        example: "The old man began to shout imprecations at the noise coming from next door.",
        synonyms: ["Curse", "Malediction"],
        antonyms: ["Blessing", "Benediction"],
        derivatives: []
      },
      {
        word: "Impute",
        definition: "Represent something, especially something undesirable, as being done.",
        example: "He tried to impute his own failures to the influence of others.",
        synonyms: ["Attribute", "Ascribe", "Blame"],
        antonyms: [],
        derivatives: ["Imputation"]
      },
      {
        word: "Inadvertently",
        definition: "Without intention; accidentally.",
        example: "He inadvertently deleted the important file while trying to save it.",
        synonyms: ["Accidentally", "Unintentionally", "Unwittingly"],
        antonyms: ["Purposely", "Deliberately", "Intentionally"],
        derivatives: ["Inadvertent"]
      },
      {
        word: "Incarnate",
        definition: "Embodied in flesh; in human form.",
        example: "The legend describes the hero as the god of war incarnate.",
        synonyms: ["Embodied", "Tangible", "Physical"],
        antonyms: ["Disembodied", "Spiritual"],
        derivatives: ["Incarnation"]
      }
    ]
  },
  {
    id: "barron-41",
    title: "Barron Block 41: Growth & Barriers",
    words: [
      {
        word: "Inchoate",
        definition: "Just begun and so not fully formed or developed; rudimentary.",
        example: "The project is still in an inchoate stage and needs much more work.",
        synonyms: ["Rudimentary", "Immature", "Formless"],
        antonyms: ["Developed", "Mature", "Finished"],
        derivatives: []
      },
      {
        word: "Incisive",
        definition: "Intelligently analytical and clear-thinking; accurate and sharply focused.",
        example: "The critic's incisive review identified the main flaws in the film.",
        synonyms: ["Analytical", "Insightful", "Acute"],
        antonyms: ["Vague", "Weak", "Dull"],
        derivatives: ["Incisiveness"]
      },
      {
        word: "Incongruity",
        definition: "The state of being out of keeping; inconsistency.",
        example: "There was a strange incongruity between the modern building and its ancient surroundings.",
        synonyms: ["Inconsistency", "Discrepancy"],
        antonyms: ["Consistency", "Harmony"],
        derivatives: ["Incongruous"]
      },
      {
        word: "Inconsequential",
        definition: "Not important or significant.",
        example: "The differences between the two products are inconsequential for most users.",
        synonyms: ["Insignificant", "Trivial", "Unimportant"],
        antonyms: ["Significant", "Important", "Crucial"],
        derivatives: []
      },
      {
        word: "Incorporate",
        definition: "Take in or contain something as part of a whole; include.",
        example: "The new design will incorporate several features requested by the users.",
        synonyms: ["Include", "Absorb", "Integrate"],
        antonyms: ["Exclude", "Separate"],
        derivatives: ["Incorporation"]
      },
      {
        word: "Incursion",
        definition: "An invasion or attack, especially a sudden or brief one.",
        example: "The enemy's incursion into the territory was quickly repelled.",
        synonyms: ["Invasion", "Attack", "Inroad"],
        antonyms: ["Retreat", "Withdrawal"],
        derivatives: []
      },
      {
        word: "Indeterminate",
        definition: "Not exactly known, established, or defined.",
        example: "The exact date of the ancient ruins is still indeterminate.",
        synonyms: ["Uncertain", "Vague", "Undefined"],
        antonyms: ["Determined", "Clear", "Fixed"],
        derivatives: []
      },
      {
        word: "Indigence",
        definition: "A state of extreme poverty.",
        example: "The organization's goal is to alleviate the indigence of the local community.",
        synonyms: ["Poverty", "Destitution", "Impecuniosity"],
        antonyms: ["Wealth", "Affluence", "Riches"],
        derivatives: ["Indigent"]
      },
      {
        word: "Indolent",
        definition: "Wanting to avoid activity or exertion; lazy.",
        example: "The indolent student spent most of his time sleeping in class.",
        synonyms: ["Lazy", "Idle", "Slothful"],
        antonyms: ["Industrious", "Active", "Diligent"],
        derivatives: ["Indolence"]
      },
      {
        word: "Ineluctable",
        definition: "Unable to be resisted or avoided; inescapable.",
        example: "Death is the ineluctable fate of every living thing.",
        synonyms: ["Inescapable", "Inevitable", "Unavoidable"],
        antonyms: ["Avoidable", "Preventable"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-42",
    title: "Barron Block 42: State & Presence",
    words: [
      {
        word: "Inert",
        definition: "Lacking the ability or strength to move; chemically inactive.",
        example: "Helium is an inert gas that does not react with other elements.",
        synonyms: ["Inactive", "Motionless", "Static"],
        antonyms: ["Active", "Dynamic", "Lively"],
        derivatives: ["Inertia"]
      },
      {
        word: "Ingenuous",
        definition: "Innocent and unsuspecting; naive.",
        example: "He had an ingenuous look on his face that suggested he was telling the truth.",
        synonyms: ["Innocent", "Naive", "Sincere"],
        antonyms: ["Disingenuous", "Deceitful", "Crafty"],
        derivatives: []
      },
      {
        word: "Inherent",
        definition: "Existing in something as a permanent, essential, or characteristic attribute.",
        example: "There are inherent risks in any medical procedure.",
        synonyms: ["Inborn", "Intrins"],
        antonyms: ["Extrinsic", "Acquired"],
        derivatives: ["Inherently"]
      },
      {
        word: "Innocuous",
        definition: "Not harmful or offensive.",
        example: "The snake was innocuous and posed no threat to the hikers.",
        synonyms: ["Harmless", "Safe", "Inoffensive"],
        antonyms: ["Harmful", "Toxic", "Noxious"],
        derivatives: []
      },
      {
        word: "Insensible",
        definition: "Without one's mental faculties, typically because of violence or intoxication.",
        example: "The blow to the head left him insensible for several minutes.",
        synonyms: ["Unconscious", "Oblivious", "Numb"],
        antonyms: ["Conscious", "Aware", "Sensitive"],
        derivatives: []
      },
      {
        word: "Insinuate",
        definition: "Suggest or hint something bad or reprehensible in an indirect way.",
        example: "The reporter tried to insinuate that the politician was involved in the scandal.",
        synonyms: ["Suggest", "Hint", "Intimate"],
        antonyms: ["Declare", "State"],
        derivatives: ["Insinuation"]
      },
      {
        word: "Insipid",
        definition: "Lacking flavor; lacking vigor or interest.",
        example: "The book was quite insipid, with a boring plot and uninteresting characters.",
        synonyms: ["Bland", "Dull", "Uninteresting"],
        antonyms: ["Exciting", "Flavorful", "Interesting"],
        derivatives: []
      },
      {
        word: "Insouciant",
        definition: "Showing a casual lack of concern; indifferent.",
        example: "He had an insouciant attitude toward his work, which frustrated his manager.",
        synonyms: ["Carefree", "Indifferent", "Casual"],
        antonyms: ["Anxious", "Concerned", "Careful"],
        derivatives: ["Insouciance"]
      },
      {
        word: "Insularity",
        definition: "Ignorance of or lack of interest in cultures, ideas, or peoples outside one's own.",
        example: "The tribe's insularity made it difficult for them to adapt to the modern world.",
        synonyms: ["Narrow-mindedness", "Isolation"],
        antonyms: ["Open-mindedness", "Multiculturalism"],
        derivatives: ["Insular"]
      },
      {
        word: "Insuperable",
        definition: "Impossible to overcome.",
        example: "The difficulties they faced were insuperable, and they were forced to give up.",
        synonyms: ["Insurmountable", "Impossible"],
        antonyms: ["Surmountable", "Overcomable"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-43",
    title: "Barron Block 43: Knowledge & Power",
    words: [
      {
        word: "Intangible",
        definition: "Unable to be touched or grasped; not having physical presence.",
        example: "The sense of hope was an intangible but powerful force in the community.",
        synonyms: ["Abstract", "Ethereal", "Vague"],
        antonyms: ["Tangible", "Concrete", "Physical"],
        derivatives: []
      },
      {
        word: "Interdict",
        definition: "An authoritative prohibition; prohibit or forbid.",
        example: "The court issued an interdict to prevent the company from dumping waste in the river.",
        synonyms: ["Prohibit", "Forbid", "Banish"],
        antonyms: ["Allow", "Permit"],
        derivatives: []
      },
      {
        word: "Internecine",
        definition: "Destructive to both sides in a conflict.",
        example: "The internecine war left both countries in a state of ruin.",
        synonyms: ["Destructive", "Deadly"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Interpolate",
        definition: "Insert something of a different nature into something else.",
        example: "The editor decided to interpolate a few more scenes into the film's final act.",
        synonyms: ["Insert", "Add", "Inject"],
        antonyms: ["Extract", "Remove"],
        derivatives: ["Interpolation"]
      },
      {
        word: "Interregnum",
        definition: "A period when normal government is suspended, especially between successive regimes.",
        example: "The country experienced a brief interregnum after the death of the king.",
        synonyms: ["Interval", "Pause", "Gap"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Intimate",
        definition: "Closely acquainted; familiar; suggest or hint.",
        example: "The two neighbors became intimate friends over the course of several years.",
        synonyms: ["Familiar", "Dost", "Close"],
        antonyms: ["Distant", "Cold", "Public"],
        derivatives: ["Intimacy"]
      },
      {
        word: "Intractable",
        definition: "Hard to control or deal with.",
        example: "The problem turned out to be intractable, and no solution was found.",
        synonyms: ["Stubborn", "Unmanageable", "Difficult"],
        antonyms: ["Manageable", "Compliant", "Docile"],
        derivatives: []
      },
      {
        word: "Intransigence",
        definition: "Refusal to change one's views or to agree about something.",
        example: "The striker's intransigence led to the collapse of the negotiations.",
        synonyms: ["Stubbornness", "Inflexibility"],
        antonyms: ["Flexibility", "Compliance"],
        derivatives: ["Intransigent"]
      },
      {
        word: "Introspective",
        definition: "Characterized by examination of one's own thoughts and feelings.",
        example: "He was an introspective person who spent a lot of time reflecting on his life.",
        synonyms: ["Self-examining", "Reflective"],
        antonyms: ["Outgoing", "Unreflective"],
        derivatives: ["Introspection"]
      },
      {
        word: "Inundate",
        definition: "Overwhelm someone with things or people to be dealt with; flood.",
        example: "The rescue center was inundated with calls after the earthquake hit.",
        synonyms: ["Overwhelm", "Flood", "Submerge"],
        antonyms: ["Drain", "Dry"],
        derivatives: ["Inundation"]
      }
    ]
  },
  {
    id: "barron-44",
    title: "Barron Block 44: Habits & Conflict",
    words: [
      {
        word: "Inured",
        definition: "Accustom someone to something, especially something unpleasant.",
        example: "The soldiers had become inured to the sight and sound of battle.",
        synonyms: ["Accustomed", "Habituated", "Hardened"],
        antonyms: ["Sensitive", "Unaccustomed"],
        derivatives: []
      },
      {
        word: "Invective",
        definition: "Insulting, abusive, or highly critical language.",
        example: "The actor faced a wave of invective from the audience after the performance.",
        synonyms: ["Abuse", "Invective", "Insult"],
        antonyms: ["Praise", "Commendation"],
        derivatives: []
      },
      {
        word: "Inveigh",
        definition: "Speak or write about something with great hostility.",
        example: "The politician proceeded to inveigh against the government's economic policy.",
        synonyms: ["Protest", "Rail", "Rage"],
        antonyms: ["Approve", "Accept"],
        derivatives: []
      },
      {
        word: "Inveigle",
        definition: "Persuade someone to do something by means of deception or flattery.",
        example: "The con artist managed to inveigle the woman out of her life savings.",
        synonyms: ["Entice", "Coax", "Wheedle"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Inveterate",
        definition: "Having a particular habit, activity, or interest that is long-established and unlikely to change.",
        example: "He was an inveterate gabbler who couldn't stop talking even when he should have.",
        synonyms: ["Habitual", "Deep-rooted", "Chronic"],
        antonyms: ["Occasional", "New"],
        derivatives: []
      },
      {
        word: "Invidious",
        definition: "Likely to arouse or incur resentment or anger in others.",
        example: "The company's new policy was seen as invidious and unfair by many employees.",
        synonyms: ["Envious", "Resentful", "Odious"],
        antonyms: ["Fair", "Just", "Pleasant"],
        derivatives: []
      },
      {
        word: "Irascible",
        definition: "Having or showing a tendency to be easily angered.",
        example: "The manager was an irascible man who would lose his temper over small mistakes.",
        synonyms: ["Irritable", "Short-tempered", "Quick-tempered"],
        antonyms: ["Placid", "Calm", "Easygoing"],
        derivatives: ["Irascibility"]
      },
      {
        word: "Irresolute",
        definition: "Showing or feeling hesitancy; uncertain.",
        example: "He stood irresolute at the door, unsure of whether to enter or not.",
        synonyms: ["Hesitant", "Uncertain", "Vacillating"],
        antonyms: ["Resolute", "Determined", "Firm"],
        derivatives: ["Irresolution"]
      },
      {
        word: "Itinerant",
        definition: "Traveling from place to place.",
        example: "The organization provides help for itinerant farm workers in the region.",
        synonyms: ["Wandering", "Roaming", "Nomadic"],
        antonyms: ["Settled", "Permanent", "Stationary"],
        derivatives: ["Itinerancy"]
      },
      {
        word: "Itinerary",
        definition: "A planned route or journey.",
        example: "The travel agent provided a detailed itinerary for their two-week vacation.",
        synonyms: ["Plan", "Schedule", "Route"],
        antonyms: [],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-45",
    title: "Barron Block 45: Character & Change",
    words: [
      {
        word: "Jaundiced",
        definition: "Prejudiced; bitter; affected by jealousy or resentment.",
        example: "His jaundiced view of the world made it difficult for him to trust anyone.",
        synonyms: ["Prejudiced", "Resentful", "Biased"],
        antonyms: ["Optimistic", "Unbiased"],
        derivatives: ["Jaundice"]
      },
      {
        word: "Jibe",
        definition: "To be in agreement; to shift from one side to another suddenly.",
        example: "The two stories didn't jibe, and the police began to suspect a lie.",
        synonyms: ["Agree", "Accord", "Shift"],
        antonyms: ["Differ", "Discord"],
        derivatives: []
      },
      {
        word: "Jocose",
        definition: "Playful or humorous.",
        example: "The speaker's jocose remarks helped to lighten the mood of the audience.",
        synonyms: ["Humorous", "Witty", "Funny"],
        antonyms: ["Serious", "Grave"],
        derivatives: []
      },
      {
        word: "Juggernaut",
        definition: "A huge, powerful, and overwhelming force or institution.",
        example: "The technology company has become a juggernaut in the global market.",
        synonyms: ["Powerhouse", "Overwhelming"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Juncture",
        definition: "A particular point in events or time.",
        example: "At this critical juncture, we must decide our future course of action.",
        synonyms: ["Point", "Stage", "Crossroads"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Juxtapose",
        definition: "Place or deal with close together for contrasting effect.",
        example: "The museum decided to juxtapose modern art with ancient sculptures.",
        synonyms: ["Contrast", "Compare", "Collocate"],
        antonyms: [],
        derivatives: ["Juxtaposition"]
      },
      {
        word: "Kudos",
        definition: "Praise and honor received for an achievement.",
        example: "The team received great kudos for their success in the championship.",
        synonyms: ["Praise", "Glory", "Honor"],
        antonyms: ["Condemnation", "Criticism"],
        derivatives: []
      },
      {
        word: "Labile",
        definition: "Likely to change; unstable.",
        example: "The politician was known for his labile emotions and frequent mood swings.",
        synonyms: ["Unstable", "Volatile", "Variable"],
        antonyms: ["Stable", "Constant", "Steady"],
        derivatives: []
      },
      {
        word: "Laconic",
        definition: "Using very few words.",
        example: "The soldier's laconic response suggested that he wasn't interested in talking.",
        synonyms: ["Brief", "Short", "Concise"],
        antonyms: ["Wordy", "Talkative", "Verbose"],
        derivatives: []
      },
      {
        word: "Lambaste",
        definition: "To criticize harshly.",
        example: "The critic proceeded to lambaste the film as a complete failure.",
        synonyms: ["Criticize", "Attack", "Assail"],
        antonyms: ["Praise", "Extol"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-46",
    title: "Barron Block 46: Energy & State",
    words: [
      {
        word: "Lampoon",
        definition: "Publicly criticize someone or something by using ridicule, irony, or sarcasm.",
        example: "The politician was often lampooned by the media for his controversial views.",
        synonyms: ["Satirize", "Ridicule", "Mock"],
        antonyms: ["Praise", "Extol"],
        derivatives: []
      },
      {
        word: "Lassitude",
        definition: "A state of physical or mental weariness; lack of energy.",
        example: "The hot and humid weather caused a feeling of lassitude among the people.",
        synonyms: ["Weariness", "Lethargy", "Fatigue"],
        antonyms: ["Energy", "Vigor", "Vitality"],
        derivatives: []
      },
      {
        word: "Latent",
        definition: "Existing but not yet developed or manifest; hidden or concealed.",
        example: "The child's latent musical talent was discovered by her teacher.",
        synonyms: ["Hidden", "Dormant", "Inherent"],
        antonyms: ["Obvious", "Manifest", "Active"],
        derivatives: ["Latency"]
      },
      {
        word: "Laud",
        definition: "Praise highly, especially in a public context.",
        example: "The young doctor was lauded for his efforts in the aftermath of the earthquake.",
        synonyms: ["Praise", "Extol", "Hail"],
        antonyms: ["Criticize", "Condemn", "Abuse"],
        derivatives: ["Laudable"]
      },
      {
        word: "Lavish",
        definition: "Sumptuously rich, elaborate, or luxurious; given in profusion.",
        example: "The couple threw a lavish wedding party that lasted for three days.",
        synonyms: ["Rich", "Luxurious", "Extravagant"],
        antonyms: ["Miserly", "Frugal", "Plain"],
        derivatives: []
      },
      {
        word: "Lax",
        definition: "Not sufficiently strict, severe, or careful.",
        example: "The school's lax discipline led to several incidents of bullying.",
        synonyms: ["Careless", "Negligent", "Loose"],
        antonyms: ["Strict", "Severe", "Taut"],
        derivatives: ["Laxity"]
      },
      {
        word: "Leaven",
        definition: "A substance that causes dough to rise; an influence that changes something.",
        example: "His sense of humor served to leaven the mood during the serious meeting.",
        synonyms: ["Transform", "Change"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Legend",
        definition: "A traditional story sometimes popularly regarded as historical; an inscription.",
        example: "The legend of the lost city has fascinated explorers for centuries.",
        synonyms: ["Myth", "Fable", "Story"],
        antonyms: [],
        derivatives: ["Legendary"]
      },
      {
        word: "Legerdemain",
        definition: "Skillful use of one's hands when performing conjuring tricks; deception.",
        example: "The magician's legerdemain amazed the audience throughout the show.",
        synonyms: ["Conjuring", "Deception", "Trickery"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Lethargic",
        definition: "Affected by lethargy; sluggish and apathetic.",
        example: "He felt lethargic and unmotivated after several days of poor sleep.",
        synonyms: ["Sluggish", "Apathetic", "Inactive"],
        antonyms: ["Energetic", "Active", "Lively"],
        derivatives: ["Lethargy"]
      }
    ]
  },
  {
    id: "barron-47",
    title: "Barron Block 47: Humor & Style",
    words: [
      {
        word: "Levity",
        definition: "Humor or frivolity, especially the treatment of a serious matter with humor.",
        example: "His comments added a touch of levity to the otherwise somber occasion.",
        synonyms: ["Humor", "Frivolity", "Lightness"],
        antonyms: ["Seriousness", "Gravity", "Sobriety"],
        derivatives: []
      },
      {
        word: "Lexicon",
        definition: "The vocabulary of a person, language, or branch of knowledge; a dictionary.",
        example: "The new field of research has its own specialized lexicon of terms.",
        synonyms: ["Vocabulary", "Glossary", "Dictionary"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Libation",
        definition: "A drink poured out as an offering to a deity; a drink.",
        example: "The ancient Greeks would offer libations to the gods before a feast.",
        synonyms: ["Offering", "Drink"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Libidinous",
        definition: "Lustful; driven by sexual desire.",
        example: "The novel was criticized for its libidinous themes and explicit descriptions.",
        synonyms: ["Lustful", "Salacious", "Sensual"],
        antonyms: ["Celibate", "Chaste", "Pure"],
        derivatives: ["Libido"]
      },
      {
        word: "Lilliputian",
        definition: "Trivial or very small.",
        example: "The differences between the two products were Lilliputian and essentially meaningless.",
        synonyms: ["Trivial", "Small", "Tiny"],
        antonyms: ["Huge", "Immense", "Gigantic"],
        derivatives: []
      },
      {
        word: "Limber",
        definition: "Supple; flexible.",
        example: "The gymnast's limber body allowed her to perform incredibly difficult moves.",
        synonyms: ["Flexible", "Supple", "Agile"],
        antonyms: ["Stiff", "Rigid", "Inflexible"],
        derivatives: []
      },
      {
        word: "Limpid",
        definition: "Free of anything that darkens; completely clear.",
        example: "The limpid water of the mountain lake was so clear you could see the bottom.",
        synonyms: ["Clear", "Transparent", "Lucid"],
        antonyms: ["Cloudy", "Opaque", "Vague"],
        derivatives: []
      },
      {
        word: "Linguistic",
        definition: "Relating to language or linguistics.",
        example: "The study of linguistic evolution provides insights into the history of humanity.",
        synonyms: [],
        antonyms: [],
        derivatives: ["Linguistics", "Linguist"]
      },
      {
        word: "Litany",
        definition: "A series of petitions for use in church services; a tedious recital or repetitive series.",
        example: "The customer launched into a long litany of complaints against the company.",
        synonyms: ["Recital", "Series", "Repetition"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Literati",
        definition: "Well-educated people who are interested in literature.",
        example: "The party was attended by the local literati and several famous writers.",
        synonyms: ["Intellectuals", "Scholars"],
        antonyms: ["Illiterate"],
        derivatives: ["Literate"]
      }
    ]
  },
  {
    id: "barron-48",
    title: "Barron Block 48: Social Systems",
    words: [
      {
        word: "Litigation",
        definition: "The process of taking legal action.",
        example: "The company was involved in several years of costly litigation with its rivals.",
        synonyms: ["Action", "Lawsuit", "Case"],
        antonyms: [],
        derivatives: ["Litigate"]
      },
      {
        word: "Log",
        definition: "An official record or diary; a part of the trunk of a tree.",
        example: "The captain kept a detailed log of the ship's journey across the ocean.",
        synonyms: ["Record", "Journal", "Diary"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Loquacious",
        definition: "Tending to talk a great deal; talkative.",
        example: "He was a loquacious person who would talk for hours about any subject.",
        synonyms: ["Talkative", "Garrulous", "Voluble"],
        antonyms: ["Taciturn", "Silent", "Reticent"],
        derivatives: ["Loquacity"]
      },
      {
        word: "Lucid",
        definition: "Expressed clearly; easy to understand; bright or luminous.",
        example: "The professor's lucid explanation made the complex theory easy to understand.",
        synonyms: ["Clear", "Intelligible", "Transparent"],
        antonyms: ["Confusing", "Vague", "Opaque"],
        derivatives: ["Lucidity"]
      },
      {
        word: "Lucre",
        definition: "Money, especially when regarded as sordid or as gained in a dishonorable way.",
        example: "He was driven by the desire for filthy lucre rather than a sense of duty.",
        synonyms: ["Money", "Wealth", "Gain"],
        antonyms: [],
        derivatives: ["Lucrative"]
      },
      {
        word: "Luminous",
        definition: "Full of or shedding light; bright or shining, especially in the dark.",
        example: "The clock face has luminous hands that can be seen in the dark.",
        synonyms: ["Bright", "Shining", "Radiant"],
        antonyms: ["Dark", "Dull", "Gloomy"],
        derivatives: ["Luminosity"]
      },
      {
        word: "Lustrous",
        definition: "Having luster; shining.",
        example: "The silk fabric had a beautiful lustrous finish that caught the light.",
        synonyms: ["Shining", "Radiant", "Glossy"],
        antonyms: ["Dull", "Matte"],
        derivatives: ["Luster"]
      },
      {
        word: "Machination",
        definition: "A plot or scheme.",
        example: "The king was the victim of the secret machinations of his advisors.",
        synonyms: ["Plot", "Scheme", "Intrigue"],
        antonyms: [],
        derivatives: ["Machinate"]
      },
      {
        word: "Maelstrom",
        definition: "A powerful whirlpool in the sea or a river; a state of confused and violent movement.",
        example: "The country was caught in a maelstrom of revolutionary change and chaos.",
        synonyms: ["Whirlpool", "Vortex", "Chaos"],
        antonyms: ["Calm", "Peace"],
        derivatives: []
      },
      {
        word: "Magnanimity",
        definition: "The quality of being generous in forgiving an insult or injury.",
        example: "The winner showed great magnanimity in his victory toward his opponent.",
        synonyms: ["Generosity", "Charity", "Kindness"],
        antonyms: ["Greed", "Selfishness", "Meanness"],
        derivatives: ["Magnanimous"]
      }
    ]
  },
  {
    id: "barron-49",
    title: "Barron Block 49: Character & Skill",
    words: [
      {
        word: "Maladroit",
        definition: "Inefficient or inept; clumsy.",
        example: "His maladroit attempt to fix the sink only made the problem worse.",
        synonyms: ["Clumsy", "Inept", "Awkward"],
        antonyms: ["Skillful", "Adroit", "Expert"],
        derivatives: []
      },
      {
        word: "Malefactor",
        definition: "A person who commits a crime or some other wrong.",
        example: "The police launched a search for the dangerous malefactor who had escaped prison.",
        synonyms: ["Criminal", "Wrongdoer", "Culprit"],
        antonyms: ["Benefactor", "Saint"],
        derivatives: []
      },
      {
        word: "Malinger",
        definition: "Exaggerate or feign illness in order to escape duty or work.",
        example: "He tried to malinger by pretending to have a headache so he could stay home.",
        synonyms: ["Feign", "Sham", "Dodge"],
        antonyms: [],
        derivatives: ["Malingerer"]
      },
      {
        word: "Malleable",
        definition: "Able to be hammered or pressed permanently out of shape without breaking.",
        example: "Gold is a highly malleable metal that can be formed into various shapes.",
        synonyms: ["Flexible", "Supple", "Soft"],
        antonyms: ["Rigid", "Stiff", "Brittle"],
        derivatives: ["Malleability"]
      },
      {
        word: "Maverick",
        definition: "An unorthodox or independent-minded person.",
        example: "He was a maverick in the world of finance, always taking risks others would avoid.",
        synonyms: ["Rebel", "Individualist", "Nonconformist"],
        antonyms: ["Conformist", "Follower"],
        derivatives: []
      },
      {
        word: "Mellifluous",
        definition: "Sweet or musical; pleasant to hear.",
        example: "The singer's mellifluous voice captivated the audience throughout the night.",
        synonyms: ["Musical", "Sweet", "Euphonious"],
        antonyms: ["Harsh", "Dissonant", "Discordant"],
        derivatives: []
      },
      {
        word: "Mendacious",
        definition: "Not telling the truth; lying.",
        example: "The report was criticized for being mendacious and full of false information.",
        synonyms: ["Lying", "Deceitful", "Untruthful"],
        antonyms: ["Truthful", "Honest", "Sincere"],
        derivatives: ["Mendacity"]
      },
      {
        word: "Mendicant",
        definition: "Given to begging; a beggar.",
        example: "The organization provides food and shelter for mendicant people in the city.",
        synonyms: ["Beggar", "Pauper"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Mercurial",
        definition: "Subject to sudden or unpredictable changes of mood or mind.",
        example: "She has a mercurial personality, moving from joy to sadness in minutes.",
        synonyms: ["Volatile", "Unpredictable", "Unstable"],
        antonyms: ["Stable", "Constant", "Steady"],
        derivatives: ["Mercury"]
      },
      {
        word: "Meretricious",
        definition: "Apparently attractive but having in reality no value or integrity.",
        example: "The book's meretricious prose was criticized by several serious critics.",
        synonyms: ["Flashy", "Showy", "Worthless"],
        antonyms: ["Serious", "Genuine", "Honest"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-50",
    title: "Barron Block 50: Change & Nature",
    words: [
      {
        word: "Metamorphosis",
        definition: "The process of transformation from an immature form to an adult form.",
        example: "The caterpillar undergoes a complete metamorphosis to become a butterfly.",
        synonyms: ["Transformation", "Mutation", "Change"],
        antonyms: [],
        derivatives: ["Metamorphic"]
      },
      {
        word: "Metaphysical",
        definition: "Relating to the branch of philosophy that deals with the first principles of things.",
        example: "The course explores several metaphysical questions about the nature of reality.",
        synonyms: ["Philosophical", "Abstract", "Theoretical"],
        antonyms: ["Physical", "Concrete"],
        derivatives: ["Metaphysics"]
      },
      {
        word: "Meticulous",
        definition: "Showing great attention to detail; very careful and precise.",
        example: "He was meticulous in his research and never overlooked even the smallest facts.",
        synonyms: ["Precise", "Detailed", "Scrupulous"],
        antonyms: ["Careless", "Negligent", "Sloppy"],
        derivatives: ["Meticulously"]
      },
      {
        word: "Mettle",
        definition: "A person's ability to cope well with difficulties or to face a demanding situation.",
        example: "The difficult journey tested the traveler's mettle and determination.",
        synonyms: ["Courage", "Spirit", "Fortitude"],
        antonyms: ["Weakness", "Fear"],
        derivatives: ["Mettlesome"]
      },
      {
        word: "Miasma",
        definition: "A highly unpleasant or unhealthy smell or vapor; an oppressive atmosphere.",
        example: "The air was thick with the miasma of decay from the old swamp.",
        synonyms: ["Stench", "Atmosphere", "Smell"],
        antonyms: ["Fragrance", "Sweet-smelling"],
        derivatives: ["Miasmatic"]
      },
      {
        word: "Microcosm",
        definition: "A community, place, or situation regarded as encapsulating in miniature.",
        example: "The small town was a microcosm of the larger issues facing the entire country.",
        synonyms: ["Miniature", "Sample"],
        antonyms: ["Macrocosm"],
        derivatives: []
      },
      {
        word: "Militant",
        definition: "Combative and aggressive in support of a political or social cause.",
        example: "The organization's militant tactics were criticized by many other groups.",
        synonyms: ["Aggressive", "Combative", "Hostile"],
        antonyms: ["Peaceful", "Pacifist", "Gentle"],
        derivatives: ["Militancy"]
      },
      {
        word: "Minatory",
        definition: "Expressing or conveying a threat.",
        example: "The enemy's minatory posture suggested that an attack was imminent.",
        synonyms: ["Threatening", "Menacing"],
        antonyms: ["Reassuring", "Friendly"],
        derivatives: []
      },
      {
        word: "Minuscule",
        definition: "Extremely small; tiny.",
        example: "The differences between the two products are minuscule and mostly irrelevant.",
        synonyms: ["Tiny", "Small", "Insignificant"],
        antonyms: ["Huge", "Immense", "Gigantic"],
        derivatives: []
      },
      {
        word: "Misanthrope",
        definition: "A person who dislikes humankind and avoids human society.",
        example: "He lived a solitary life in the mountains, being something of a misanthrope.",
        synonyms: ["Cynic", "Skeptic", "Recluse"],
        antonyms: ["Philanthropist"],
        derivatives: ["Misanthropic"]
      }
    ]
  },
  {
    id: "barron-51",
    title: "Barron Block 51: Character & Calm",
    words: [
      {
        word: "Miscellany",
        definition: "A mixture of various things.",
        example: "The attic was filled with a miscellany of old books, toys, and clothes.",
        synonyms: ["Mixture", "Assortment", "Medley"],
        antonyms: [],
        derivatives: ["Miscellaneous"]
      },
      {
        word: "Miscreant",
        definition: "A person who behaves badly or in a way that breaks the law.",
        example: "The miscreant was caught spray-painting graffiti on the side of the building.",
        synonyms: ["Criminal", "Wrongdoer", "Villain"],
        antonyms: ["Saint", "Hero"],
        derivatives: []
      },
      {
        word: "Misogynist",
        definition: "A person who dislikes, despises, or is strongly prejudiced against women.",
        example: "The novel's main character is a confirmed misogynist who refuses to work with women.",
        synonyms: [],
        antonyms: ["Philogynist"],
        derivatives: ["Misogyny"]
      },
      {
        word: "Mitigate",
        definition: "Make something bad less severe, serious, or painful.",
        example: "The new laws are intended to mitigate the effects of climate change.",
        synonyms: ["Alleviate", "Reduce", "Soothe"],
        antonyms: ["Aggravate", "Inflame", "Increase"],
        derivatives: ["Mitigation"]
      },
      {
        word: "Mnemonics",
        definition: "The study and development of systems for improving and assisting the memory.",
        example: "He used mnemonics to help him remember the complicated list of historical dates.",
        synonyms: ["Memory aid"],
        antonyms: [],
        derivatives: ["Mnemonic"]
      },
      {
        word: "Modicum",
        definition: "A small quantity of a particular thing, especially something desirable or valuable.",
        example: "He hoped to find a modicum of success in his new career as a writer.",
        synonyms: ["Slightest bit", "Small amount", "Speck"],
        antonyms: ["Abundance", "Profusion"],
        derivatives: []
      },
      {
        word: "Mollify",
        definition: "Appease the anger or anxiety of someone.",
        example: "The manager's apology helped to mollify the angry customer.",
        synonyms: ["Appease", "Soothe", "Calm"],
        antonyms: ["Infuriate", "Enrage", "Inflame"],
        derivatives: ["Mollification"]
      },
      {
        word: "Monolithic",
        definition: "Formed of a single large block of stone; very large and characterless.",
        example: "The company has become a monolithic organization that is difficult to change.",
        synonyms: ["Massive", "Solid", "Uniform"],
        antonyms: ["Diverse", "Varied", "Differentiated"],
        derivatives: ["Monolith"]
      },
      {
        word: "Morose",
        definition: "Sullen and ill-tempered.",
        example: "He was morose and silent throughout the entire dinner party.",
        synonyms: ["Sullen", "Glum", "Melancholy"],
        antonyms: ["Cheerful", "Happy", "Jovial"],
        derivatives: []
      },
      {
        word: "Motley",
        definition: "Incongruously varied in appearance or character.",
        example: "The group was a motley crew of artists, musicians, and writers.",
        synonyms: ["Varied", "Miscellaneous", "Mixed"],
        antonyms: ["Uniform", "Homogeneous"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-52",
    title: "Barron Block 52: Growth & State",
    words: [
      {
        word: "Multifarious",
        definition: "Many and of various types.",
        example: "The challenges facing the city are multifarious and complex.",
        synonyms: ["Diverse", "Varied", "Numerous"],
        antonyms: ["Uniform", "Simple"],
        derivatives: []
      },
      {
        word: "Mundane",
        definition: "Lacking interest or excitement; dull; relating to the earthly world.",
        example: "Her life was filled with mundane tasks that she found boring and unrewarding.",
        synonyms: ["Dull", "Ordinary", "Boring"],
        antonyms: ["Exciting", "Extraordinary", "Spiritual"],
        derivatives: []
      },
      {
        word: "Munificent",
        definition: "Larger or more generous than is usual or necessary.",
        example: "The university received a munificent donation from one of its wealthy alumni.",
        synonyms: ["Generous", "Charitable", "Liberal"],
        antonyms: ["Miserly", "Stingy", "Selfish"],
        derivatives: ["Munificence"]
      },
      {
        word: "Myopic",
        definition: "Nearsighted; lacking imagination, foresight, or intellectual insight.",
        example: "The department's myopic focus on short-term goals led to long-term failure.",
        synonyms: ["Nearsighted", "Narrow-minded", "Short-sighted"],
        antonyms: ["Far-sighted", "Open-minded"],
        derivatives: ["Myopia"]
      },
      {
        word: "Nadir",
        definition: "The lowest point in the fortunes of a person or organization.",
        example: "The resignation of the CEO marked the nadir of the company's long decline.",
        synonyms: ["Lowest point", "Bottom", "Depth"],
        antonyms: ["Zenith", "Peak", "Summit"],
        derivatives: []
      },
      {
        word: "Narcissism",
        definition: "Excessive interest in or admiration of oneself and one's physical appearance.",
        example: "The actor's narcissism made it difficult for him to relate to others on set.",
        synonyms: ["Self-love", "Vanity", "Egoism"],
        antonyms: ["Selflessness", "Humility"],
        derivatives: ["Narcissist"]
      },
      {
        word: "Nascent",
        definition: "Just coming into existence and beginning to display signs of future potential.",
        example: "The nascent technology industry in the region has great potential for growth.",
        synonyms: ["Emerging", "Beginning", "Developing"],
        antonyms: ["Mature", "Dying", "Ending"],
        derivatives: []
      },
      {
        word: "Nebulous",
        definition: "In the form of a cloud or haze; hazy; (of a concept) vague or ill-defined.",
        example: "The senator's plan for the future remained nebulous and ill-defined.",
        synonyms: ["Vague", "Hazy", "Unclear"],
        antonyms: ["Clear", "Definite", "Sharp"],
        derivatives: []
      },
      {
        word: "Neologism",
        definition: "A newly coined word or expression.",
        example: "The digital age has introduced several neologisms into our everyday language.",
        synonyms: ["New word", "Coinage"],
        antonyms: ["Archaism"],
        derivatives: []
      },
      {
        word: "Neophyte",
        definition: "A person who is new to a subject, skill, or belief; a novice.",
        example: "He was a neophyte in the field of computer science and had much to learn.",
        synonyms: ["Novice", "Beginner", "Learner"],
        antonyms: ["Expert", "Veteran", "Master"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-53",
    title: "Barron Block 53: Rules & Nature",
    words: [
      {
        word: "Nexus",
        definition: "A connection or series of connections linking two or more things.",
        example: "The city serves as a nexus for transportation and communication in the region.",
        synonyms: ["Connection", "Link", "Center"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Nonplussed",
        definition: "Baffled; surprised and confused so much that they are unsure how to react.",
        example: "He was nonplussed by the sudden and unexpected turn of events.",
        synonyms: ["Confused", "Baffled", "Surprised"],
        antonyms: ["Composed", "Calm"],
        derivatives: []
      },
      {
        word: "Nostar",
        definition: "Something used as a standard for measurement; quality of being first in its class.",
        example: "The company's latest product is considered the North Star of the industry.",
        synonyms: ["Benchmark", "Standard", "Guide"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Nostrum",
        definition: "A medicine, especially one not considered effective, prepared by an unqualified person.",
        example: "The salesman was criticized for selling various nostrums that had no medical value.",
        synonyms: ["Cure-all", "Panacea", "Quackery"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Noxious",
        definition: "Harmful, poisonous, or very unpleasant.",
        example: "The air in the abandoned factory was thick with noxious fumes.",
        synonyms: ["Harmful", "Toxic", "Poisonous"],
        antonyms: ["Harmless", "Safe", "Healthy"],
        derivatives: []
      },
      {
        word: "Nugatory",
        definition: "Of no value or importance; useless; futile.",
        example: "The differences between the two products turn out to be nugatory and irrelevant.",
        synonyms: ["Useless", "Trivial", "Worthless"],
        antonyms: ["Useful", "Important", "Significant"],
        derivatives: []
      },
      {
        word: "Obdurate",
        definition: "Stubbornly refusing to change one's opinion or course of action.",
        example: "She remained obdurate in her refusal to compromise with her opponents.",
        synonyms: ["Stubborn", "Inflexible", "Unyielding"],
        antonyms: ["Yielding", "Flexible", "Compliant"],
        derivatives: []
      },
      {
        word: "Obsequious",
        definition: "Obedient or attentive to an excessive or servile degree.",
        example: "The waiter was surrounded by obsequious assistants who were eager to help.",
        synonyms: ["Servile", "Flattering", "Fawning"],
        antonyms: ["Dignified", "Independent"],
        derivatives: ["Obsequiousness"]
      },
      {
        word: "Obsequy",
        definition: "A funeral rite or ceremony.",
        example: "The king's obsequy was attended by leaders from all over the world.",
        synonyms: ["Rite", "Funeral", "Ceremony"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Obviate",
        definition: "Remove (a need or difficulty); avoid or prevent.",
        example: "The new software will help to obviate the need for manual data entry.",
        synonyms: ["Remove", "Avoid", "Prevent"],
        antonyms: ["Require", "Cause"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-54",
    title: "Barron Block 54: Obstacles & Power",
    words: [
      {
        word: "Occlude",
        definition: "Stop, close up, or obstruct (an opening, orifice, or passage).",
        example: "The surgeon was careful not to occlude any of the major blood vessels.",
        synonyms: ["Obstruct", "Block", "Close"],
        antonyms: ["Open", "Expose"],
        derivatives: ["Occlusion"]
      },
      {
        word: "Occult",
        definition: "Relating to magic, astrology, or any system claiming use or knowledge of secret or supernatural powers.",
        example: "He had a lifelong interest in the occult and studied several ancient magic systems.",
        synonyms: ["Secret", "Mysterious", "Magic"],
        antonyms: ["Exposed", "Common", "Public"],
        derivatives: []
      },
      {
        word: "Odious",
        definition: "Extremely unpleasant; repulsive.",
        example: "The suspect's behavior throughout the trial was considered odious by the jury.",
        synonyms: ["Repulsive", "Detestable", "Hateful"],
        antonyms: ["Pleasant", "Likable", "Admirable"],
        derivatives: []
      },
      {
        word: "Officious",
        definition: "Assertive of authority in an annoyingly domineering way, especially with regard to trivial matters.",
        example: "The officious security guard refused to let anyone enter without proper ID.",
        synonyms: ["Meddlesome", "Domineering", "Interfering"],
        antonyms: ["Modest", "Unobtrusive"],
        derivatives: []
      },
      {
        word: "Olfactory",
        definition: "Relating to the sense of smell.",
        example: "Dogs have a very highly developed olfactory system that can detect faint scents.",
        synonyms: ["Smelly", "Scented"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Oligarchy",
        definition: "A small group of people having control of a country, organization, or institution.",
        example: "The country was run by a corrupt oligarchy that controlled all major businesses.",
        synonyms: ["Hierarchy", "Authority"],
        antonyms: ["Democracy"],
        derivatives: ["Oligarch"]
      },
      {
        word: "Ominous",
        definition: "Giving the impression that something bad or unpleasant is going to happen; threatening.",
        example: "The dark clouds gathering on the horizon were an ominous sign of a coming storm.",
        synonyms: ["Threatening", "Menacing", "Sinister"],
        antonyms: ["Reassuring", "Bright", "Hopeful"],
        derivatives: ["Omen"]
      },
      {
        word: "Omniscient",
        definition: "Knowing everything.",
        example: "In many religions, God is seen as an omniscient and all-powerful being.",
        synonyms: ["All-knowing", "Wise"],
        antonyms: ["Ignorant"],
        derivatives: ["Omniscience"]
      },
      {
        word: "Onerous",
        definition: "(of a task, duty, or responsibility) involving an amount of effort and difficulty that is oppressively burdensome.",
        example: "He found the task of organizing the event to be extremely onerous and stressful.",
        synonyms: ["Burdensome", "Heavy", "Stressful"],
        antonyms: ["Light", "Easy", "Simple"],
        derivatives: []
      },
      {
        word: "Opprobrium",
        definition: "Harsh criticism or censure; public disgrace arising from someone's shameful conduct.",
        example: "The politician faced a wave of opprobrium after the scandal was revealed.",
        synonyms: ["Disgrace", "Shame", "Infamy"],
        antonyms: ["Honor", "Praise", "Glory"],
        derivatives: ["Opprobrious"]
      }
    ]
  },
  {
    id: "barron-55",
    title: "Barron Block 55: Vision & State",
    words: [
      {
        word: "Opacity",
        definition: "The quality of being opaque; lack of transparency or clarity.",
        example: "The report was criticized for the opacity of its language and arguments.",
        synonyms: ["Cloudiness", "Complexity", "Vagueness"],
        antonyms: ["Clarity", "Transparency", "Lucidity"],
        derivatives: ["Opaque"]
      },
      {
        word: "Ornithology",
        definition: "The scientific study of birds.",
        example: "His interest in ornithology led him to travel all over the world to observe rare bird species.",
        synonyms: [],
        antonyms: [],
        derivatives: ["Ornithologist"]
      },
      {
        word: "Oscillate",
        definition: "Move or swing back and forth at a regular speed.",
        example: "The temperature of the room began to oscillate between hot and cold throughout the night.",
        synonyms: ["Swing", "Vibrate", "Waver"],
        antonyms: ["Stay", "Stationary"],
        derivatives: ["Oscillation"]
      },
      {
        word: "Osteopathy",
        definition: "A system of complementary medicine involving the treatment of medical disorders.",
        example: "He decided to try osteopathy to help with his chronic back pain.",
        synonyms: [],
        antonyms: [],
        derivatives: ["Osteopath"]
      },
      {
        word: "Ostentatious",
        definition: "Characterized by vulgar or pretentious display; designed to impress or attract notice.",
        example: "The wealthy socialite was known for her ostentatious display of jewels and fashion.",
        synonyms: ["Showy", "Pretentious", "Flashy"],
        antonyms: ["Modest", "Simple", "Plain"],
        derivatives: ["Ostentation"]
      },
      {
        word: "Ostracism",
        definition: "Exclusion from a society or group.",
        example: "He suffered from social ostracism after his controversial views became known.",
        synonyms: ["Exclusion", "Banishment", "Exile"],
        antonyms: ["Acceptance", "Welcome"],
        derivatives: ["Ostracize"]
      },
      {
        word: "Overweening",
        definition: "Showing excessive confidence or pride.",
        example: "His overweening confidence led him to underestimate the strength of his opponent.",
        synonyms: ["Arrogant", "Conceited", "Proud"],
        antonyms: ["Humble", "Modest", "Shy"],
        derivatives: []
      },
      {
        word: "Paean",
        definition: "A song of praise or triumph.",
        example: "The crowd sang a moving paean in honor of the returning heroes.",
        synonyms: ["Hymn", "Hallelujah", "Praise"],
        antonyms: ["Dirge", "Lament"],
        derivatives: []
      },
      {
        word: "Paleontology",
        definition: "The branch of science concerned with fossil animals and plants.",
        example: "Her interest in paleontology led her to explore several ancient fossil sites.",
        synonyms: [],
        antonyms: [],
        derivatives: ["Paleontologist"]
      },
      {
        word: "Palliate",
        definition: "Make (a disease or its symptoms) less severe or unpleasant without removing the cause.",
        example: "The doctor prescribed a new medicine to help palliate the patient's pain.",
        synonyms: ["Alleviate", "Mitigate", "Soothe"],
        antonyms: ["Aggravate", "Inflame"],
        derivatives: ["Palliative"]
      }
    ]
  },
  {
    id: "barron-56",
    title: "Barron Block 56: Ideals & Society",
    words: [
      {
        word: "Panacea",
        definition: "A solution or remedy for all difficulties or diseases.",
        example: "The new economic policy was seen by some as a panacea for the country's problems.",
        synonyms: ["Cure-all", "Universal remedy"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Panegyric",
        definition: "A public speech or published text in praise of someone or something.",
        example: "The best friend delivered a moving panegyric at the funeral service.",
        synonyms: ["Praise", "Eulogy", "Encomium"],
        antonyms: ["Invective", "Vilification"],
        derivatives: []
      },
      {
        word: "Paradigm",
        definition: "A typical example or pattern of something; a model.",
        example: "The scientist's discovery led to a shift in the current biological paradigm.",
        synonyms: ["Model", "Pattern", "Example"],
        antonyms: [],
        derivatives: ["Paradigmatic"]
      },
      {
        word: "Paradox",
        definition: "A seemingly absurd or self-contradictory statement or proposition.",
        example: "The paradox of choice is that having more options can lead to less satisfaction.",
        synonyms: ["Contradiction", "Inconsistency"],
        antonyms: ["Consistency", "Truth"],
        derivatives: ["Paradoxical"]
      },
      {
        word: "Paragon",
        definition: "A person or thing viewed as a model of excellence.",
        example: "The young princess was considered a paragon of beauty and grace.",
        synonyms: ["Model", "Ideal", "Standard"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Parenthetical",
        definition: "Relating to or inserted as a parenthesis.",
        example: "The report's parenthetical comments provided additional context for the readers.",
        synonyms: ["Incidental", "Secondary"],
        antonyms: [],
        derivatives: ["Parenthesis"]
      },
      {
        word: "Pariah",
        definition: "An outcast.",
        example: "After his controversial views became known, he was treated like a pariah in his community.",
        synonyms: ["Outcast", "Leper", "Reject"],
        antonyms: ["Insider", "Member"],
        derivatives: []
      },
      {
        word: "Parity",
        definition: "The state or condition of being equal, especially regarding status or pay.",
        example: "The organization's goal is to achieve gender parity within the workplace.",
        synonyms: ["Equality", "Equivalence", "Balance"],
        antonyms: ["Disparity", "Inequality"],
        derivatives: []
      },
      {
        word: "Parsimony",
        definition: "Extreme unwillingness to spend money or use resources.",
        example: "His parsimony allowed him to save enough money to buy his own house.",
        synonyms: ["Stinginess", "Frugality", "Miserliness"],
        antonyms: ["Generosity", "Extravagance"],
        derivatives: ["Parsimonious"]
      },
      {
        word: "Partisan",
        definition: "A strong supporter of a party, cause, or person.",
        example: "The news group was criticized for its partisan coverage of the election.",
        synonyms: ["Supporter", "Follower", "Biased"],
        antonyms: ["Neutral", "Impartial", "Objectve"],
        derivatives: ["Partisanship"]
      }
    ]
  },
  {
    id: "barron-57",
    title: "Barron Block 57: Behavior & State",
    words: [
      {
        word: "Pathological",
        definition: "Relating to pathology; compulsive or obsessive.",
        example: "His pathological fear of spiders made it difficult for him to spend time outdoors.",
        synonyms: ["Compulsive", "Obsessive", "Morbid"],
        antonyms: ["Healthy", "Normal"],
        derivatives: ["Pathology"]
      },
      {
        word: "Paucity",
        definition: "The presence of something only in small or insufficient quantities or amounts; scarcity.",
        example: "There is a paucity of evidence to support the scientist's claims.",
        synonyms: ["Scarcity", "Lack", "Dearth"],
        antonyms: ["Abundance", "Profusion", "Plenitude"],
        derivatives: []
      },
      {
        word: "Peccadillo",
        definition: "A small, relatively unimportant offense or sin.",
        example: "His past peccadilloes were dismissed by his supporters as minor mistakes.",
        synonyms: ["Offense", "Sin", "Fault"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Pedantic",
        definition: "Excessively concerned with minor details and rules or with displaying academic learning.",
        example: "The teacher's pedantic style discouraged the students from being creative.",
        synonyms: ["Precise", "Fussy", "Strict"],
        antonyms: ["Careless", "Imprecise"],
        derivatives: ["Pedant"]
      },
      {
        word: "Pedestrian",
        definition: "Lacking inspiration or excitement; dull; ordinary.",
        example: "The book's pedestrian prose was criticized by several serious critics.",
        synonyms: ["Dull", "Ordinary", "Boring"],
        antonyms: ["Exciting", "Inspirational"],
        derivatives: []
      },
      {
        word: "Pejorative",
        definition: "Expressing contempt or disapproval.",
        example: "The term used by the media was seen as pejorative and offensive by many people.",
        synonyms: ["Contemptuous", "Derogatory", "Disparaging"],
        antonyms: ["Complimentary", "Approving"],
        derivatives: []
      },
      {
        word: "Penchant",
        definition: "A strong or habitual liking for something or tendency toward something.",
        example: "He has a penchant for collecting rare and ancient books.",
        synonyms: ["Tendency", "Inclination", "Liking"],
        antonyms: ["Habit", "Dislike", "Aversion"],
        derivatives: []
      },
      {
        word: "Penurious",
        definition: "Extremely poor; poverty-stricken; parsimonious.",
        example: "The penurious student struggled to afford even the most basic necessities.",
        synonyms: ["Poor", "Penniless", "Miserly"],
        antonyms: ["Wealthy", "Rich", "Generous"],
        derivatives: ["Penury"]
      },
      {
        word: "Perennial",
        definition: "Lasting or existing for a long or apparently infinite time; enduring.",
        example: "The local problem of traffic congestion is a perennial issue for the city council.",
        synonyms: ["Enduring", "Lasting", "Eternal"],
        antonyms: ["Ephemeral", "Transient", "Short-lived"],
        derivatives: []
      },
      {
        word: "Perfidious",
        definition: "Deceitful and untrustworthy.",
        example: "The king was betrayed by his perfidious advisors who sought to overthrow him.",
        synonyms: ["Treachery", "Betrayal", "Deceitful"],
        antonyms: ["Faithful", "Loyal", "Trustworthy"],
        derivatives: ["Perfidy"]
      }
    ]
  },
  {
    id: "barron-58",
    title: "Barron Block 58: Action & Vision",
    words: [
      {
        word: "Perfunctory",
        definition: "carried out with a minimum of effort or reflection.",
        example: "He gave a perfunctory nod to his coworker as he walked past her desk.",
        synonyms: ["Careless", "Cursory", "Hasty"],
        antonyms: ["Thorough", "Careful", "Detailed"],
        derivatives: ["Perfunctorily"]
      },
      {
        word: "Perigee",
        definition: "The point in the orbit of the moon or a satellite at which it is nearest to the earth.",
        example: "The moon appeared exceptionally large when it reached its perigee.",
        synonyms: [],
        antonyms: ["Apogee"],
        derivatives: []
      },
      {
        word: "Permeable",
        definition: "(of a material or membrane) allowing liquids or gases to pass through it.",
        example: "The soil is highly permeable, allowing water to flow easily toward the roots.",
        synonyms: ["Porous", "Penetrable"],
        antonyms: ["Impermeable", "Watertight"],
        derivatives: ["Permeability"]
      },
      {
        word: "Pernicious",
        definition: "Having a harmful effect, especially in a gradual or subtle way.",
        example: "The pernicious influence of the new technology was criticized by several sociologists.",
        synonyms: ["Harmful", "Deadly", "Noxious"],
        antonyms: ["Helpful", "Healthy", "Harmless"],
        derivatives: []
      },
      {
        word: "Personable",
        definition: "(of a person) having a pleasant appearance and manner.",
        example: "The new manager turned out to be a very personable and approachable leader.",
        synonyms: ["Pleasant", "Likable", "Amiable"],
        antonyms: ["Unpleasant", "Repulsive"],
        derivatives: []
      },
      {
        word: "Perspicacious",
        definition: "Having a ready insight into and understanding of things.",
        example: "She is a perspicacious observer who rarely misses even the smallest details.",
        synonyms: ["Insightful", "Perceptive", "Acute"],
        antonyms: ["Dull", "Oblivious"],
        derivatives: ["Perspicacity"]
      },
      {
        word: "Pertinacious",
        definition: "Holding firmly to an opinion or a course of action.",
        example: "The pertinacious reporter refused to give up until she found the truth.",
        synonyms: ["Stubborn", "Determined", "Persistent"],
        antonyms: ["Yielding", "Weak", "Fickle"],
        derivatives: ["Pertinacity"]
      },
      {
        word: "Pertinent",
        definition: "Relevant or applicable to a particular matter; apposite.",
        example: "The judge ruled that the evidence was pertinent to the case.",
        synonyms: ["Relevant", "Applicable", "Apt"],
        antonyms: ["Irrelevant", "Immaterial"],
        derivatives: ["Pertinence"]
      },
      {
        word: "Peruse",
        definition: "Read (something), typically in a thorough or careful way.",
        example: "He spent several hours to peruse the ancient manuscript in the university library.",
        synonyms: ["Read", "Study", "Examine"],
        antonyms: ["Ignore", "Neglect"],
        derivatives: ["Perusal"]
      },
      {
        word: "Pervasive",
        definition: "(especially of an unwelcome influence or physical effect) spreading widely throughout an area or a group of people.",
        example: "The pervasive influence of social media on our everyday lives is undeniable.",
        synonyms: ["Widespread", "Universal", "General"],
        antonyms: ["Local", "Rare", "Isolated"],
        derivatives: ["Pervade"]
      }
    ]
  },
  {
    id: "barron-59",
    title: "Barron Block 59: Emotion & State",
    words: [
      {
        word: "Petulant",
        definition: "(of a person or their manner) childishly sulky or bad-tempered.",
        example: "The child's petulant behavior was exhausting for his parents.",
        synonyms: ["Irritable", "Sulky", "Sullen"],
        antonyms: ["Cheerful", "Patient", "Jovial"],
        derivatives: ["Petulance"]
      },
      {
        word: "Phlegmatic",
        definition: "(of a person) having an unemotional and stolidly calm disposition.",
        example: "He has a phlegmatic nature and rarely gets excited or upset by anything.",
        synonyms: ["Calm", "Composed", "Stoic"],
        antonyms: ["Emotional", "Excitable", "Animated"],
        derivatives: []
      },
      {
        word: "Phoenix",
        definition: "(in classical mythology) a unique bird that lived for five or six centuries in the Arabian desert.",
        example: "The city rose from the ashes like a phoenix after the devastating earthquake.",
        synonyms: [],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Physiognomy",
        definition: "A person's facial features or expression, especially when regarded as indicative of character.",
        example: "The detective studied the suspect's physiognomy for any sign of guilt or deception.",
        synonyms: ["Features", "Appearance", "Expression"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Piety",
        definition: "The quality of being religious or reverent.",
        example: "He was admired for his great piety and devotion to his religious beliefs.",
        synonyms: ["Reverence", "Devotion", "Faith"],
        antonyms: ["Impiety", "Unbelief"],
        derivatives: ["Pious"]
      },
      {
        word: "Piquant",
        definition: "Having a pleasantly sharp taste or appetizing flavor; exciting.",
        example: "The chef's latest creation provides a unique and piquant experience.",
        synonyms: ["Appetizing", "Flavorful", "Spicy"],
        antonyms: ["Bland", "Tasteless", "Dull"],
        derivatives: ["Piquancy"]
      },
      {
        word: "Pique",
        definition: "A feeling of irritation or resentment resulting from a slight; provoke.",
        example: "The reporter's questions were intended to pique the politician's curiosity.",
        synonyms: ["Irritate", "Resentment", "Provoke"],
        antonyms: ["Soothe", "Calm", "Appease"],
        derivatives: []
      },
      {
        word: "Placate",
        definition: "Make (someone) less angry or hostile.",
        example: "The manager's apology helped to placate the angry customer.",
        synonyms: ["Appease", "Soothe", "Calm"],
        antonyms: ["Enrage", "Infuriate", "Incense"],
        derivatives: ["Placable"]
      },
      {
        word: "Placid",
        definition: "(of a person or animal) not easily upset or excited; calm and peaceful.",
        example: "The island remained placid and peaceful throughout the hot summer months.",
        synonyms: ["Calm", "Peaceful", "Serene"],
        antonyms: ["Chaotic", "Turbulent", "Excitable"],
        derivatives: ["Placidity"]
      },
      {
        word: "Plaintive",
        definition: "Sounding sad and mournful.",
        example: "The lonely wind sounded like a plaintive cry in the abandoned house.",
        synonyms: ["Sad", "Mournful", "Melancholy"],
        antonyms: ["Happy", "Joyful", "Cheerful"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-60",
    title: "Barron Block 60: Action & Society",
    words: [
      {
        word: "Plasticity",
        definition: "The quality of being easily shaped or molded.",
        example: "The clay's plasticity allowed the artist to form it into various complex shapes.",
        synonyms: ["Flexibility", "Suppleness", "Softness"],
        antonyms: ["Rigidity", "Stiffness", "Hardness"],
        derivatives: ["Plastic"]
      },
      {
        word: "Platitude",
        definition: "A remark or statement, especially one with a moral content, that has been used too often.",
        example: "The politician's speech was full of empty platitudes about the importance of family.",
        synonyms: ["Cliché", "Truism", "Stock phrase"],
        antonyms: [],
        derivatives: ["Platitudinous"]
      },
      {
        word: "Platonic",
        definition: "(of love or friendship) intimate and affectionate but not sexual.",
        example: "The two neighbors had a purely platonic relationship that lasted for many years.",
        synonyms: ["Non-sexual", "Friendly", "Spiritual"],
        antonyms: ["Sexual", "Physical", "Romantic"],
        derivatives: []
      },
      {
        word: "Plethora",
        definition: "A large or excessive amount of (something).",
        example: "There is a plethora of choices for users in the modern software market.",
        synonyms: ["Abundance", "Profusion", "Excess"],
        antonyms: ["Dearth", "Scarcity", "Lack"],
        derivatives: []
      },
      {
        word: "Plummet",
        definition: "Fall or drop straight down at high speed.",
        example: "The company's stock began to plummet after the news of the scandal became known.",
        synonyms: ["Fall", "Drop", "Plunge"],
        antonyms: ["Rise", "Ascend", "Soar"],
        derivatives: []
      },
      {
        word: "Plutocracy",
        definition: "Government by the wealthy.",
        example: "The country was run by a corrupt plutocracy that controlled all major businesses.",
        synonyms: ["Hierarchy", "Authority"],
        antonyms: ["Democracy"],
        derivatives: ["Plutocrat"]
      },
      {
        word: "Porous",
        definition: "(of a rock or other material) having minute spaces or holes through which liquid or air may pass.",
        example: "The sponge is highly porous, allowing it to absorb a lot of water.",
        synonyms: ["Permeable", "Penetrable"],
        antonyms: ["Impermeable", "Solid", "Tight"],
        derivatives: ["Porosity"]
      },
      {
        word: "Poseur",
        definition: "A person who acts in an affected manner in order to impress others.",
        example: "He was seen as a poseur who was more interested in style than substance.",
        synonyms: ["Show-off", "Actor", "Hypocrite"],
        antonyms: ["Genuine", "Realist"],
        derivatives: []
      },
      {
        word: "Pragmatic",
        definition: "Dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations.",
        example: "The manager's pragmatic approach helped to find a solution to the complex problem.",
        synonyms: ["Practical", "Realist", "Sensible"],
        antonyms: ["Theoretical", "Idealistic", "Inpractical"],
        derivatives: ["Pragmatism"]
      },
      {
        word: "Prate",
        definition: "Talk foolishly or at tedious length about something.",
        example: "The politician proceeded to prate about his achievements for nearly an hour.",
        synonyms: ["Gossip", "Chatter", "Babble"],
        antonyms: ["Be silent", "Be concise"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-61",
    title: "Barron Block 61: Vision & State",
    words: [
      {
        word: "Precarious",
        definition: "Not securely held or in position; dangerously likely to fall or collapse.",
        example: "The company was in a precarious financial situation and could face bankruptcy.",
        synonyms: ["Uncertain", "Insecure", "Dangerous"],
        antonyms: ["Secure", "Stable", "Safe"],
        derivatives: ["Precariously"]
      },
      {
        word: "Precept",
        definition: "A general rule intended to regulate behavior or thought.",
        example: "The organization is founded on several core precepts that guide all its activities.",
        synonyms: ["Rule", "Principle", "Command"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Precipitate",
        definition: "Cause (an event or situation, typically one that is bad) to happen suddenly, unexpectedly, or prematurely.",
        example: "The sudden resignation of the CEO served to precipitate a major crisis for the company.",
        synonyms: ["Cause", "Hasten", "Trigger"],
        antonyms: ["Delay", "Prevent", "Slow"],
        derivatives: ["Precipitation"]
      },
      {
        word: "Precursor",
        definition: "A person or thing that comes before another of the same kind; a forerunner.",
        example: "The digital camera was a precursor to several other pieces of modern technology.",
        synonyms: ["Forerunner", "Predecessor", "Ancestor"],
        antonyms: ["Successor", "Follower"],
        derivatives: []
      },
      {
        word: "Preempt",
        definition: "Take action in order to prevent (an anticipated event) from happening; forestall.",
        example: "The manager's decision was intended to preempt any potential criticism from the board.",
        synonyms: ["Prevent", "Forestall", "Stop"],
        antonyms: [],
        derivatives: ["Preemption"]
      },
      {
        word: "Preen",
        definition: "(of a bird) tidy and clean its feathers with its bill.",
        example: "The peacock began to preen its beautiful feathers in front of the female.",
        synonyms: ["Clean", "Tidy", "Primp"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Prefatory",
        definition: "Serving as an introduction; introductory.",
        example: "The prefatory remarks in the report provided additional context for the readers.",
        synonyms: ["Introductory", "Preliminary"],
        antonyms: ["Concluding", "Final"],
        derivatives: ["Preface"]
      },
      {
        word: "Prehensile",
        definition: "(chiefly of an animal's limb or tail) capable of grasping.",
        example: "Monkeys use their prehensile tails to swing through the trees with ease.",
        synonyms: ["Grasping"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Premonition",
        definition: "A strong feeling that something is about to happen, especially something unpleasant.",
        example: "She had a sudden premonition of danger and decided not to enter the dark building.",
        synonyms: ["Foreboding", "Omen", "Feeling"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Presage",
        definition: "(of an event) be a sign or warning that (typically something bad) will happen.",
        example: "The sudden decline in sales could presage a major economic downturn for the region.",
        synonyms: ["Portend", "Foreshadow", "Predict"],
        antonyms: [],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-62",
    title: "Barron Block 62: Growth & Character",
    words: [
      {
        word: "Presumptuous",
        definition: "(of a person or their behavior) failing to observe the limits of what is permitted or appropriate.",
        example: "It was presumptuous of him to assume that he would be invited to the private party.",
        synonyms: ["Arrogant", "Audacious", "Bold"],
        antonyms: ["Modest", "Humble", "Shy"],
        derivatives: ["Presume"]
      },
      {
        word: "Preternatural",
        definition: "Beyond what is normal or natural.",
        example: "The child's preternatural talent for mathematics amazed several famous professors.",
        synonyms: ["Extraordinary", "Supernatural", "Mysterious"],
        antonyms: ["Common", "Ordinary", "Normal"],
        derivatives: []
      },
      {
        word: "Prevaricate",
        definition: "Speak or act in an evasive way.",
        example: "The witness began to prevaricate as the lawyer's questions became more difficult.",
        synonyms: ["Evade", "Equivocate", "Lie"],
        antonyms: ["Be honest", "Be direct"],
        derivatives: ["Prevarication"]
      },
      {
        word: "Primordial",
        definition: "Existing from the beginning of time; ancient.",
        example: "The deep sea is home to several ancient and primordial life forms.",
        synonyms: ["Ancient", "Original", "Earliest"],
        antonyms: ["Modern", "Recent", "New"],
        derivatives: []
      },
      {
        word: "Pristine",
        definition: "In its original condition; unspoiled.",
        example: "The island's beaches were pristine and untouched by modern tourism.",
        synonyms: ["Unspoiled", "Pure", "Perfect"],
        antonyms: ["Dirty", "Corrupt", "Sullied"],
        derivatives: []
      },
      {
        word: "Probity",
        definition: "The quality of having strong moral principles; honesty and decency.",
        example: "His financial probity was never questioned throughout his long career.",
        synonyms: ["Honesty", "Integrity", "Uprightness"],
        antonyms: ["Corruption", "Dishonesty"],
        derivatives: []
      },
      {
        word: "Problematic",
        definition: "Constituting or presenting a problem or difficulty.",
        example: "The new economic policy turned out to be highly problematic for small businesses.",
        synonyms: ["Difficult", "Troubling", "Tricky"],
        antonyms: ["Simple", "Easy", "Uncomplicated"],
        derivatives: ["Problem"]
      },
      {
        word: "Proclivity",
        definition: "A tendency to choose or do something regularly; an inclination or predisposition.",
        example: "He has a proclivity for taking risks and avoiding conventional career paths.",
        synonyms: ["Tendency", "Inclination", "Liking"],
        antonyms: ["Habit", "Dislike", "Aversion"],
        derivatives: []
      },
      {
        word: "Procrastinate",
        definition: "Delay or postpone action; put off doing something.",
        example: "He tended to procrastinate and often left his work until the very last minute.",
        synonyms: ["Delay", "Postpone", "Dodge"],
        antonyms: ["Hasten", "Act", "Complete"],
        derivatives: ["Procrastination"]
      },
      {
        word: "Profligate",
        definition: "Recklessly extravagant or wasteful in the use of resources.",
        example: "The company was criticized for its profligate spending and lack of financial discipline.",
        synonyms: ["Wasteful", "Extravagant", "Dissolute"],
        antonyms: ["Frugal", "Miserly", "Careful"],
        derivatives: ["Profligacy"]
      }
    ]
  },
  {
    id: "barron-63",
    title: "Barron Block 63: Growth & State",
    words: [
      {
        word: "Profound",
        definition: "(of a state, quality, or emotion) very great or intense.",
        example: "The experience had a profound effect on his view of the world and his future.",
        synonyms: ["Intense", "Deep", "Significant"],
        antonyms: ["Superficial", "Slight", "Trivial"],
        derivatives: ["Profundity"]
      },
      {
        word: "Profuse",
        definition: "(especially of something offered or discharged) exuberantly plentiful; abundant.",
        example: "The couple received profuse apologies from the restaurant manager after the incident.",
        synonyms: ["Abundant", "Plentiful", "Ample"],
        antonyms: ["Scant", "Sparse", "Lack"],
        derivatives: ["Profusion"]
      },
      {
        word: "Proliferate",
        definition: "Increase rapidly in numbers; multiply.",
        example: "The number of software companies in the region began to proliferate in recent years.",
        synonyms: ["Multiply", "Burgeon", "Mushroom"],
        antonyms: ["Decrease", "Decline"],
        derivatives: ["Proliferation"]
      },
      {
        word: "Prolix",
        definition: "(of speech or writing) using or containing too many words; tediously lengthy.",
        example: "The lawyer's prolix argument confused several members of the jury.",
        synonyms: ["Wordy", "Verbose", "Garrulous"],
        antonyms: ["Concise", "Brief", "Succinct"],
        derivatives: ["Prolixity"]
      },
      {
        word: "Promic",
        definition: "Relating to or being a standard that is used as a benchmark for comparison.",
        example: "The project's latest version is considered the promic goal for the entire team.",
        synonyms: ["Standard", "Benchmark"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Propagate",
        definition: "Breed specimens of (a plant or animal) by natural processes from the parent stock.",
        example: "The organization's goal is to propagate several rare and endangered plant species.",
        synonyms: ["Multiply", "Reproduce", "Spread"],
        antonyms: [],
        derivatives: ["Propagation"]
      },
      {
        word: "Propensity",
        definition: "An inclination or natural tendency to behave in a particular way.",
        example: "She has a propensity for taking the lead and avoiding group decisions.",
        synonyms: ["Tendency", "Inclination", "Liking"],
        antonyms: ["Habit", "Dislike", "Aversion"],
        derivatives: []
      },
      {
        word: "Propitiate",
        definition: "Win or regain the favor of (a god, spirit, or person) by doing something that pleases them.",
        example: "Ancient tribes would offer sacrifices to their gods to propitiate their anger.",
        synonyms: ["Appease", "Placate", "Soothe"],
        antonyms: ["Enrage", "Incense"],
        derivatives: ["Propitiation"]
      },
      {
        word: "Propitious",
        definition: "Giving or indicating a good chance of success; favorable.",
        example: "The current economic conditions are propitious for starting a new business.",
        synonyms: ["Favorable", "Auspicious", "Hopeful"],
        antonyms: ["Unfavorable", "Ominous", "Bleak"],
        derivatives: []
      },
      {
        word: "Proponent",
        definition: "A person who advocates a theory, proposal, or project.",
        example: "He was a leading proponent of the new educational reform for many years.",
        synonyms: ["Advocate", "Supporter", "Follower"],
        antonyms: ["Opponent", "Enemy", "Critic"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-64",
    title: "Barron Block 64: Rules & Style",
    words: [
      {
        word: "Propriety",
        definition: "The state or quality of conforming to conventionally accepted standards of behavior or morals.",
        example: "He was always careful to observe the rules of propriety in formal social situations.",
        synonyms: ["Decency", "Correctness", "Etiquette"],
        antonyms: ["Impropriety", "Rudeness"],
        derivatives: ["Proper"]
      },
      {
        word: "Proscribe",
        definition: "Forbid, especially by law.",
        example: "Several countries have moved to proscribe the use of dangerous chemicals in industry.",
        synonyms: ["Forbid", "Prohibit", "Ban"],
        antonyms: ["Allow", "Permit", "Authorize"],
        derivatives: ["Proscription"]
      },
      {
        word: "Proselytize",
        definition: "Convert or attempt to convert (someone) from one religion, belief, or opinion to another.",
        example: "The organization was criticized for its attempts to proselytize young and vulnerable people.",
        synonyms: ["Convert", "Propagandize"],
        antonyms: [],
        derivatives: ["Proselyte"]
      },
      {
        word: "Prototype",
        definition: "A first, typical or preliminary model of something.",
        example: "The company developed a functional prototype of the new machine for testing purposes.",
        synonyms: ["Model", "Sample", "Pattern"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Providencial",
        definition: "Occurring at a favorable time; opportune.",
        example: "It was providencial that the rain stopped just as the outdoor party began.",
        synonyms: ["Opportune", "Lucky", "Favorable"],
        antonyms: ["Unfortunate", "Unlucky"],
        derivatives: ["Providence"]
      },
      {
        word: "Prudent",
        definition: "Acting with or showing care and thought for the future.",
        example: "The manager's prudent handling of the company's finances saved it from bankruptcy.",
        synonyms: ["Cautious", "Sensible", "Wise"],
        antonyms: ["Reckless", "Imprudent", "Foolish"],
        derivatives: ["Prudence"]
      },
      {
        word: "Prurient",
        definition: "Having or encouraging an excessive interest in sexual matters.",
        example: "The novel was criticized for its prurient themes and explicit descriptions.",
        synonyms: ["Salacious", "Lustful", "Dirty"],
        antonyms: ["Pure", "Chaste"],
        derivatives: []
      },
      {
        word: "Psephology",
        definition: "The statistical study of elections and trends in voting.",
        example: "His interest in psephology led him to correctly predict the outcome of the latest election.",
        synonyms: [],
        antonyms: [],
        derivatives: ["Psephologist"]
      },
      {
        word: "Pseudonym",
        definition: "A fictitious name, especially one used by an author.",
        example: "The famous writer published several of her early books under a pseudonym.",
        synonyms: ["Alias", "Stage name"],
        antonyms: ["Real name"],
        derivatives: []
      },
      {
        word: "Puerile",
        definition: "Childishly silly and trivial.",
        example: "His colleagues were tired of his puerile jokes and unprofessional behavior.",
        synonyms: ["Childish", "Immature", "Juvenile"],
        antonyms: ["Mature", "Serious", "Adult"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-65",
    title: "Barron Block 65: Action & Vision",
    words: [
      {
        word: "Pugnacious",
        definition: "Eager or quick to argue, quarrel, or fight.",
        example: "The politician was known for his pugnacious style and aggressive debating tactics.",
        synonyms: ["Aggressive", "Combative", "Hostile"],
        antonyms: ["Peaceful", "Cowardly", "Gentle"],
        derivatives: ["Pugnacity"]
      },
      {
        word: "Puissance",
        definition: "Great power, influence, or prowess.",
        example: "The old king's puissance was respected by leaders from all over the world.",
        synonyms: ["Power", "Might", "Strength"],
        antonyms: ["Weakness", "Frailty"],
        derivatives: ["Puissant"]
      },
      {
        word: "Punctilious",
        definition: "Showing great attention to detail or correct behavior.",
        example: "He was punctilious in his research and never overlooked even the smallest facts.",
        synonyms: ["Precise", "Careful", "Meticulous"],
        antonyms: ["Careless", "Negligent", "Sloppy"],
        derivatives: []
      },
      {
        word: "Pungent",
        definition: "Having a sharply strong taste or smell.",
        example: "The onion has a pungent smell that can cause your eyes to water.",
        synonyms: ["Sharp", "Strong", "Piquant"],
        antonyms: ["Bland", "Mild", "Weak"],
        derivatives: ["Pungency"]
      },
      {
        word: "Purport",
        definition: "Appear or claim to be or do something, especially falsely; profess.",
        example: "The report purported to be based on new evidence, but it was later found to be false.",
        synonyms: ["Claim", "Profess", "Allegedly"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Pusillanimous",
        definition: "Showing a lack of courage or determination; timid.",
        example: "The manager's pusillanimous decision was criticized by several members of the team.",
        synonyms: ["Timid", "Cowardly", "Fearful"],
        antonyms: ["Courageous", "Bold", "Brave"],
        derivatives: []
      },
      {
        word: "Quagmire",
        definition: "A soft boggy area of land that gives way underfoot.",
        example: "The company found itself in a financial quagmire that was difficult to escape.",
        synonyms: ["Bog", "Morass", "Mess"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Quail",
        definition: "Feel or show fear or apprehension.",
        example: "The suspect began to quail as the lawyer's questions became more difficult.",
        synonyms: ["Fear", "Tremble", "Shrink"],
        antonyms: ["Face", "Confront"],
        derivatives: []
      },
      {
        word: "Qualified",
        definition: "Officially recognized as being trained to perform a particular job; limited.",
        example: "She gave a qualified answer to the reporter's question, refusing to provide details.",
        synonyms: ["Limited", "Certified", "Restricted"],
        antonyms: ["Absolute", "Total", "Unlimited"],
        derivatives: ["Qualification"]
      },
      {
        word: "Quandary",
        definition: "A state of perplexity or uncertainty over what to do in a difficult situation.",
        example: "He was in a quandary about whether to accept the new job offer in a different city.",
        synonyms: ["Dilemma", "Plight", "Confusion"],
        antonyms: [],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-66",
    title: "Barron Block 66: Power & Style",
    words: [
      {
        word: "Quell",
        definition: "Put an end to (a rebellion or other disorder), typically by the use of force.",
        example: "The government took immediate action to quell the rising protests and unrest.",
        synonyms: ["Stop", "Finish", "Overcome"],
        antonyms: ["Inflame", "Start", "Incense"],
        derivatives: []
      },
      {
        word: "Querulous",
        definition: "Complaining in a petulant or whining manner.",
        example: "The long journey across the ocean made several of the passengers querulous and tired.",
        synonyms: ["Complaining", "Irritable", "Petulant"],
        antonyms: ["Cheerful", "Compliant", "Patient"],
        derivatives: []
      },
      {
        word: "Quiescent",
        definition: "In a state or period of inactivity or dormancy.",
        example: "The volcano has remained quiescent for several centuries but is still considered active.",
        synonyms: ["Dormant", "Inactive", "Passive"],
        antonyms: ["Active", "Lively", "Busy"],
        derivatives: ["Quiescence"]
      },
      {
        word: "Quixotic",
        definition: "Exceedingly idealistic; unrealistic and impractical.",
        example: "The engineer's quixotic plan for a flying car was met with skepticism from his peers.",
        synonyms: ["Idealistic", "Impractical", "Utopian"],
        antonyms: ["Practical", "Realist", "Realistic"],
        derivatives: []
      },
      {
        word: "Quotidian",
        definition: "Of or occurring every day; daily.",
        example: "The book describes the quotidian lives of ordinary people in a small town.",
        synonyms: ["Daily", "Ordinary", "Mundane"],
        antonyms: ["Extraordinary", "Rare", "Unique"],
        derivatives: []
      },
      {
        word: "Raconteur",
        definition: "A person who tells anecdotes in a skillful and amusing way.",
        example: "He was a famous raconteur who could captivate any audience with his stories.",
        synonyms: ["Storyteller", "Narrator"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Radical",
        definition: "(especially of change or action) relating to or affecting the fundamental nature of something.",
        example: "The company's new strategy represented a radical departure from its past practices.",
        synonyms: ["Fundamental", "Basic", "Extreme"],
        antonyms: ["Conservative", "Moderate", "Slow"],
        derivatives: ["Radicalism"]
      },
      {
        word: "Rail",
        definition: "Complain or protest strongly and persistently about something.",
        example: "The workers began to rail against the new and unfair working conditions.",
        synonyms: ["Protest", "Complain", "Attack"],
        antonyms: ["Praise", "Extol"],
        derivatives: []
      },
      {
        word: "Raiment",
        definition: "Clothing.",
        example: "The king was dressed in beautiful raiment that reflected his wealth and status.",
        synonyms: ["Clothing", "Apparel", "Garment"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Ramify",
        definition: "Form branches or offshoots; spread or branch out.",
        example: "The company's operations began to ramify into several other countries and fields.",
        synonyms: ["Branch", "Spread", "Develop"],
        antonyms: [],
        derivatives: ["Ramification"]
      }
    ]
  },
  {
    id: "barron-67",
    title: "Barron Block 67: Character & Nature",
    words: [
      {
        word: "Rancor",
        definition: "Bitterness or resentfulness, especially when long-standing.",
        example: "He spoke with great rancor towards his rival after the heated argument.",
        synonyms: ["Bitterness", "Resentment", "Hatred"],
        antonyms: ["Love", "Affection", "Friendship"],
        derivatives: ["Rancorous"]
      },
      {
        word: "Rapacious",
        definition: "Aggressively greedy or grasping.",
        example: "The rapacious company sought to control all the natural resources in the region.",
        synonyms: ["Greedy", "Grasping", "Predatory"],
        antonyms: ["Generous", "Unselfish"],
        derivatives: ["Rapacity"]
      },
      {
        word: "Rarefied",
        definition: "(of air, especially that at high altitudes) of lower pressure than usual; thin.",
        example: "Climbers often struggle to breathe in the rarefied air at the summit of the mountain.",
        synonyms: ["Thin", "Exalted", "Exclusive"],
        antonyms: ["Common", "Ordinary"],
        derivatives: ["Rarefy"]
      },
      {
        word: "Recalcitrant",
        definition: "Having an obstinately uncooperative attitude toward authority or discipline.",
        example: "The recalcitrant student refused to follow any of the teacher's instructions.",
        synonyms: ["Stubborn", "Insubordinate", "Unyielding"],
        antonyms: ["Compliant", "Obedient", "Docile"],
        derivatives: ["Recalcitrance"]
      },
      {
        word: "Recant",
        definition: "Say that one no longer holds an opinion or belief, especially one considered unorthodox.",
        example: "The witness was forced to recant her statement after new evidence was discovered.",
        synonyms: ["Retract", "Withdraw", "Revoke"],
        antonyms: ["Confirm", "Uphold", "Reiterate"],
        derivatives: ["Recantation"]
      },
      {
        word: "Recapitulate",
        definition: "Summarize and state again the main points of.",
        example: "The professor began to recapitulate the main points of the lecture for the students.",
        synonyms: ["Summarize", "Repeat", "Review"],
        antonyms: [],
        derivatives: ["Recap"]
      },
      {
        word: "Recluse",
        definition: "A person who lives a solitary life and tends to avoid other people.",
        example: "The famous actor lived as a recluse in his mountain home for several years.",
        synonyms: ["Hermit", "Solitary", "Misanthrope"],
        antonyms: ["Socialite", "Extrovert"],
        derivatives: ["Reclusive"]
      },
      {
        word: "Recondite",
        definition: "(of a subject or knowledge) little known; abstruse.",
        example: "The professor's book was full of recondite info about several ancient civilizations.",
        synonyms: ["Abstruse", "Deep", "Mysterious"],
        antonyms: ["Simple", "Common", "Obvious"],
        derivatives: []
      },
      {
        word: "Reconnaissance",
        definition: "Military observation of a region to locate an enemy or ascertain strategic features.",
        example: "The soldiers were sent on a reconnaissance mission into the enemy's territory.",
        synonyms: ["Observation", "Scan", "Survey"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Recreant",
        definition: "Cowardly.",
        example: "He was criticized for his recreant behavior in the face of sudden danger.",
        synonyms: ["Coward", "Timid", "Fearful"],
        antonyms: ["Brave", "Courageous", "Bold"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-68",
    title: "Barron Block 68: Rules & State",
    words: [
      {
        word: "Rectitude",
        definition: "Morally correct behavior or thinking; righteousness.",
        example: "His great rectitude was admired by everyone who knew him throughout his life.",
        synonyms: ["Honesty", "Integrity", "Morality"],
        antonyms: ["Corruption", "Dishonesty", "Immorality"],
        derivatives: []
      },
      {
        word: "Redoubtable",
        definition: "(of a person) formidable, especially as an opponent.",
        example: "He was a redoubtable candidate who had won several previous elections.",
        synonyms: ["Formidable", "Fearful", "Strong"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Redress",
        definition: "Remedy or set right (an undesirable or unfair situation).",
        example: "The victims are seeking redress for the damage caused by the company's actions.",
        synonyms: ["Remedy", "Correct", "Amends"],
        antonyms: ["Worsen", "Damage"],
        derivatives: []
      },
      {
        word: "Refactory",
        definition: "Stubborn or unmanageable; (of a substance) resistant to heat or chemicals.",
        example: "The project's latest version turn out to be refactory and difficult to change.",
        synonyms: ["Stubborn", "Resistant"],
        antonyms: ["Yielding", "Weak"],
        derivatives: []
      },
      {
        word: "Refractory",
        definition: "Stubborn or unmanageable.",
        example: "He was a refractory student who frequently broke several of the school's rules.",
        synonyms: ["Obstinate", "Unyielding", "Perverse"],
        antonyms: ["Obedient", "Yielding", "Docile"],
        derivatives: ["Refractoriness"]
      },
      {
        word: "Refulgent",
        definition: "Shining brightly.",
        example: "The moon provided a refulgent light that illuminated the entire island throughout the night.",
        synonyms: ["Bright", "Shining", "Radiant"],
        antonyms: ["Dark", "Dull", "Gloomy"],
        derivatives: ["Refulgence"]
      },
      {
        word: "Refute",
        definition: "Prove (a statement or theory) to be wrong or false; disprove.",
        example: "The latest study served to refute several previously held theories about the subject.",
        synonyms: ["Disprove", "Deny", "Contradict"],
        antonyms: ["Prove", "Confirm", "Support"],
        derivatives: ["Refutation"]
      },
      {
        word: "Regale",
        definition: "Entertain or amuse (someone) with talk.",
        example: "The old sailor would regale the children with stories of his adventures at sea.",
        synonyms: ["Entertain", "Amuse", "Divert"],
        antonyms: ["Bore", "Tire"],
        derivatives: []
      },
      {
        word: "Relegate",
        definition: "Consign or dismiss to an inferior rank or position.",
        example: "The manager decided to relegate several of the secondary players to the minor league.",
        synonyms: ["Demote", "Lower", "Exile"],
        antonyms: ["Promote", "Upgrade", "Elevate"],
        derivatives: ["Relegation"]
      },
      {
        word: "Remonstrate",
        definition: "Make a forcefully reproachful protest.",
        example: "The workers decided to remonstrate against the latest and unfair pay cuts.",
        synonyms: ["Protest", "Complain", "Object"],
        antonyms: ["Accept", "Agree"],
        derivatives: ["Remonstrance"]
      }
    ]
  },
  {
    id: "barron-69",
    title: "Barron Block 69: Emotion & Action",
    words: [
      {
        word: "Rend",
        definition: "Tear (something) into two or more pieces.",
        example: "The powerful wind began to rend the sails of the small ship as it crossed the ocean.",
        synonyms: ["Tear", "Split", "Separate"],
        antonyms: ["Join", "Unite", "Connect"],
        derivatives: []
      },
      {
        word: "Renegade",
        definition: "A person who deserts and betrays an organization, country, or set of principles.",
        example: "He was seen as a renegade who had betrayed his previous party for personal gain.",
        synonyms: ["Rebel", "Traitor", "Turncoat"],
        antonyms: ["Loyalist", "Follower", "Fan"],
        derivatives: []
      },
      {
        word: "Renege",
        definition: "Go back on a promise, undertaking, or contract.",
        example: "The company was accused of trying to renege on its previous agreement with several workers.",
        synonyms: ["Go back", "Withdraw", "Default"],
        antonyms: ["Keep", "Honour", "Maintain"],
        derivatives: []
      },
      {
        word: "Reparation",
        definition: "The making of amends for a wrong one has done, by paying money to or otherwise helping.",
        example: "Several countries are seeking reparations for the damage caused during the long war.",
        synonyms: ["Amends", "Compensation", "Redress"],
        antonyms: ["Injury", "Damage"],
        derivatives: []
      },
      {
        word: "Repine",
        definition: "Feel or express discontent; fret.",
        example: "She began to repine against the constraints of her mundane and unrewarding life.",
        synonyms: ["Complain", "Fret", "Grumble"],
        antonyms: ["Rejoice", "Accept"],
        derivatives: []
      },
      {
        word: "Replete",
        definition: "Filled or well-supplied with something.",
        example: "The library was replete with ancient and valuable manuscripts for researchers to study.",
        synonyms: ["Full", "Abundant", "Packed"],
        antonyms: ["Empty", "Scant", "Lacking"],
        derivatives: []
      },
      {
        word: "Repose",
        definition: "A state of rest, sleep, or tranquility.",
        example: "The island remained in a state of repose throughout the hot summer months.",
        synonyms: ["Rest", "Tranquility", "Peace"],
        antonyms: ["Action", "Busyness", "Uproar"],
        derivatives: []
      },
      {
        word: "Reprehensible",
        definition: "Deserving censure or condemnation.",
        example: "The suspect's behavior throughout the trial was considered reprehensible by the jury.",
        synonyms: ["Blameworthy", "Hateful", "Wrong"],
        antonyms: ["Praiseworthy", "Admirable", "Good"],
        derivatives: []
      },
      {
        word: "Repress",
        definition: "Subdue (someone or something) by force; suppress (a thought, feeling, or desire).",
        example: "He tried to repress his anger throughout the serious and important meeting.",
        synonyms: ["Suppress", "Subdue", "Check"],
        antonyms: ["Express", "Release", "Display"],
        derivatives: ["Repression"]
      },
      {
        word: "Reprobate",
        definition: "An unprincipled person (often used humorously or affectionately).",
        example: "He was a charming reprobate who always found a way to get himself out of trouble.",
        synonyms: ["Villain", "Scoundrel", "Wretch"],
        antonyms: ["Saint", "Angel"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-70",
    title: "Barron Block 70: Rules & Style",
    words: [
      {
        word: "Repudiate",
        definition: "Refuse to accept or be associated with; deny the truth or validity of.",
        example: "The politician was forced to repudiate several of his previous and controversial claims.",
        synonyms: ["Reject", "Deny", "Renounce"],
        antonyms: ["Accept", "Keep", "Embrace"],
        derivatives: ["Repudiation"]
      },
      {
        word: "Rescind",
        definition: "Revoke, cancel, or repeal (a law, order, or agreement).",
        example: "The government decided to rescind the latest and unpopular new tax laws.",
        synonyms: ["Cancel", "Revoke", "Repeal"],
        antonyms: ["Confirm", "Uphold", "Maintain"],
        derivatives: []
      },
      {
        word: "Resolution",
        definition: "A firm decision to do or not to do something.",
        example: "Her New Year's resolution was to spend more time outdoors and avoid social media.",
        synonyms: ["Decision", "Rule", "Commitment"],
        antonyms: ["Indecision", "Weakness"],
        derivatives: ["Resolute"]
      },
      {
        word: "Resolve",
        definition: "Settle or find a solution to (a problem, dispute, or contentious matter).",
        example: "The manager's goal is to resolve the latest dispute between several team members.",
        synonyms: ["Settle", "Solve", "Fix"],
        antonyms: ["Start", "Inflame"],
        derivatives: []
      },
      {
        word: "Reticent",
        definition: "Not revealing one's thoughts or feelings readily.",
        example: "He was reticent and silent throughout the entire and important meeting.",
        synonyms: ["Reserved", "Taciturn", "Silent"],
        antonyms: ["Talkative", "Open", "Garrulous"],
        derivatives: ["Reticence"]
      },
      {
        word: "Reverent",
        definition: "Feeling or showing deep and solemn respect.",
        example: "The crowd stood in a reverent silence as the national anthem began to play.",
        synonyms: ["Respectful", "Pious", "Devout"],
        antonyms: ["Irreverent", "Rude"],
        derivatives: ["Reverence"]
      },
      {
        word: "Revile",
        definition: "Criticize in an abusive or angrily insulting manner.",
        example: "The politician was often reviled by the media for his controversial and secret views.",
        synonyms: ["Attack", "Abuse", "Slander"],
        antonyms: ["Praise", "Extol"],
        derivatives: []
      },
      {
        word: "Rhetoric",
        definition: "The art of effective or persuasive speaking or writing.",
        example: "The senator's speech was full of empty rhetoric that failed to convince the listeners.",
        synonyms: ["Oratory", "Eloquence", "Speech"],
        antonyms: [],
        derivatives: ["Rhetorical"]
      },
      {
        word: "Ribald",
        definition: "Referring to sexual matters in an amusingly coarse or irreverent way.",
        example: "The novel was criticized for its ribald jokes and explicit descriptions.",
        synonyms: ["Coarse", "Vulgar", "Dirty"],
        antonyms: ["Pure", "Clean", "Chaste"],
        derivatives: ["Ribaldry"]
      },
      {
        word: "Rococo",
        definition: "(of furniture or architecture) of or characterized by an elaborately ornamental late baroque style.",
        example: "The ancient palace was filled with beautiful rococo furniture and paintings.",
        synonyms: ["Ornate", "Decorated", "Baroque"],
        antonyms: ["Simple", "Plain", "Modern"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-71",
    title: "Barron Block 71: Vision & State",
    words: [
      {
        word: "Rubric",
        definition: "A heading on a document; a set of instructions or rules.",
        example: "The test's rubric provided clear guidelines for the students to follow.",
        synonyms: ["Heading", "Rule", "Guide"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Rue",
        definition: "Bitterly regret (something one has done or allowed to happen).",
        example: "He would eventually rue his decision to desert his previous party for personal gain.",
        synonyms: ["Regret", "Lament", "Repent"],
        antonyms: ["Rejoice", "Accept"],
        derivatives: ["Rueful"]
      },
      {
        word: "Ruminate",
        definition: "Think deeply about something.",
        example: "She spent several days to ruminate on the new job offer in a different city.",
        synonyms: ["Think", "Ponder", "Meditate"],
        antonyms: [],
        derivatives: ["Rumination"]
      },
      {
        word: "Rustic",
        definition: "Relating to the countryside; rural.",
        example: "The island's rustic charm was admired by several famous artists and writers.",
        synonyms: ["Rural", "Country", "Plain"],
        antonyms: ["Urban", "Modern", "Sophisticated"],
        derivatives: ["Rusticity"]
      },
      {
        word: "Saccharine",
        definition: "Excessively sweet or sentimental.",
        example: "The movie's saccharine ending was criticized by several serious critics.",
        synonyms: ["Sweet", "Sentimental", "Syrupy"],
        antonyms: ["Bitter", "Sharp", "Harsh"],
        derivatives: []
      },
      {
        word: "Sacrilegious",
        definition: "Involving or committing sacrilege.",
        example: "The suspec's actions were considered sacrilegious by several members of the church.",
        synonyms: ["Blasphemous", "Irreverent", "Profane"],
        antonyms: ["Pious", "Reverent", "Holy"],
        derivatives: ["Sacrilege"]
      },
      {
        word: "Sacrosanct",
        definition: "(especially of a principle, place, or routine) regarded as too important or valuable to be interfered with.",
        example: "The scientist's research was seen as sacrosanct and could not be criticized by his peers.",
        synonyms: ["Sacred", "Holy", "Inviolable"],
        antonyms: ["Profane", "Common"],
        derivatives: []
      },
      {
        word: "Sagacious",
        definition: "Having or showing keen mental discernment and good judgment; shrewd.",
        example: "He was a sagacious advisor who correctly predicted several major economic shifts.",
        synonyms: ["Wise", "Shrewd", "Acutely"],
        antonyms: ["Foolish", "Ignorant", "Dull"],
        derivatives: ["Sagacity"]
      },
      {
        word: "Salacious",
        definition: "Having or conveying undue or inappropriate interest in sexual matters.",
        example: "The novel was criticized for its salacious themes and explicit descriptions.",
        synonyms: ["Lustful", "Prurient", "Dirty"],
        antonyms: ["Pure", "Chaste", "Clean"],
        derivatives: []
      },
      {
        word: "Salient",
        definition: "Most noticeable or important.",
        example: "The report's salient points provided clear guidelines for the new policy.",
        synonyms: ["Noticeable", "Main", "Notable"],
        antonyms: ["Insignificant", "Hidden", "Minor"],
        derivatives: ["Salience"]
      }
    ]
  },
  {
    id: "barron-72",
    title: "Barron Block 72: State & Growth",
    words: [
      {
        word: "Salubrious",
        definition: "Health-giving; healthy.",
        example: "The island's salubrious climate was admired by several famous artists and writers.",
        synonyms: ["Healthy", "Wholesome", "Helpful"],
        antonyms: ["Unfavorable", "Healthy", "Deadly"],
        derivatives: []
      },
      {
        word: "Salutary",
        definition: "(especially with reference to something unwelcome or unpleasant) producing good effects; beneficial.",
        example: "The sudden crisis had a salutary effect on the company's long-term strategy.",
        synonyms: ["Beneficial", "Helpful", "Healthy"],
        antonyms: ["Harmful", "Unfavorable"],
        derivatives: []
      },
      {
        word: "Sanctimonious",
        definition: "Making a show of being morally superior to other people.",
        example: "His sanctimonious comments about the importance of family were criticized by his coworkers.",
        synonyms: ["Self-righteous", "Hypocritical", "Pious"],
        antonyms: ["Humble", "Modest"],
        derivatives: ["Sanctimony"]
      },
      {
        word: "Sanction",
        definition: "A threatened penalty for disobeying a law or rule; official permission or approval.",
        example: "Several countries have moved to sanction the use of dangerous chemicals in industry.",
        synonyms: ["Penalty", "Authorization", "Approve"],
        antonyms: ["Reward", "Forbid", "Prohibit"],
        derivatives: []
      },
      {
        word: "Sanguine",
        definition: "Optimistic or positive, especially in an apparently bad or difficult situation.",
        example: "He remained sanguine about the company's future despite the recent financial crisis.",
        synonyms: ["Optimistic", "Positive", "Hopeful"],
        antonyms: ["Pessimistic", "Gloomy", "Sad"],
        derivatives: []
      },
      {
        word: "Sapient",
        definition: "Wise, or attempting to appear wise.",
        example: "He was seen as a sapient advisor who correctly predicted several major economic shifts.",
        synonyms: ["Wise", "Shrewd", "Smart"],
        antonyms: ["Foolish", "Ignorant"],
        derivatives: ["Sapience"]
      },
      {
        word: "Sardonic",
        definition: "Grimly mocking or cynical.",
        example: "The professor's sardonic humor discouraged the students from being creative.",
        synonyms: ["Mocking", "Cynical", "Sarcastic"],
        antonyms: ["Kind", "Gentle", "Helpful"],
        derivatives: []
      },
      {
        word: "Satiate",
        definition: "Satisfied (a desire or an appetite) to the full.",
        example: "He hoped to satiate his hunger with a large and expensive dinner at the restaurant.",
        synonyms: ["Satisfy", "Fill", "Saturate"],
        antonyms: ["Starve", "Deprive"],
        derivatives: ["Satiety"]
      },
      {
        word: "Saturate",
        definition: "Cause (something) to become thoroughly soaked with liquid.",
        example: "The heavy rain served to saturate the soil and provide water for the mountain plants.",
        synonyms: ["Soak", "Drench", "Immerse"],
        antonyms: ["Dry", "Drain"],
        derivatives: ["Saturation"]
      },
      {
        word: "Saturnine",
        definition: "(of a person or their manner) slow and gloomy.",
        example: "He has a saturnine nature and rarely gets excited or upset by anything.",
        synonyms: ["Gloomy", "Sullen", "Glum"],
        antonyms: ["Cheerful", "Happy", "Jovial"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-73",
    title: "Barron Block 73: Nature & Vision",
    words: [
      {
        word: "Satyr",
        definition: "(in Greek mythology) one of a class of lustful drunken woodland gods.",
        example: "The ancient palace was decorated with beautiful paintings of satyrs and nymphs.",
        synonyms: [],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Savor",
        definition: "Taste (good food or drink) and enjoy it completely.",
        example: "He began to savor the unique and delicious flavor of the chef's latest creation.",
        synonyms: ["Enjoy", "Relish", "Taste"],
        antonyms: ["Dislike", "Ignore"],
        derivatives: ["Savory"]
      },
      {
        word: "Scabbard",
        definition: "A sheath for the blade of a sword or dagger.",
        example: "The knight drew his sword from its scabbard as the enemy approached.",
        synonyms: ["Sheath"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Scale",
        definition: "Each of the small, thin, bony plates protecting the skin of fish and reptiles.",
        example: "The snake's scales shimmered in the sunlight as it moved through the long grass.",
        synonyms: ["Plate", "Measure", "Balance"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Scanty",
        definition: "Small or insufficient in quantity or amount.",
        example: "The student's research was based on a scanty amount of actual evidence.",
        synonyms: ["Scant", "Sparse", "Lack"],
        antonyms: ["Abundant", "Plentiful", "Full"],
        derivatives: ["Scantiness"]
      },
      {
        word: "Scathing",
        definition: "Witheringly scornful; severely critical.",
        example: "The politician faced a wave of scathing criticism from several serious news groups.",
        synonyms: ["Critical", "Attack", "Severe"],
        antonyms: ["Kind", "Gentle", "Praise"],
        derivatives: []
      },
      {
        word: "Schism",
        definition: "A split or division between strongly opposed sections or parties.",
        example: "The latest decision served to cause a schism within the previously unified party.",
        synonyms: ["Split", "Division", "Separation"],
        antonyms: ["Unity", "Union", "Alliance"],
        derivatives: ["Schismatic"]
      },
      {
        word: "Scintilla",
        definition: "A tiny trace or spark of a specified quality or feeling.",
        example: "There is not a scintilla of truth in the suspect's latest and controversial claims.",
        synonyms: ["Trace", "Speck", "Particle"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Scintillate",
        definition: "Emit flashes of light; sparkle.",
        example: "The stars began to scintillate in the clear dark sky throughout the night.",
        synonyms: ["Sparkle", "Shine", "Flicker"],
        antonyms: ["Dull", "Gloomy"],
        derivatives: ["Scintillation"]
      },
      {
        word: "Scion",
        definition: "A descendant of a notable family.",
        example: "He was a scion of a wealthy and powerful family that controlled all major businesses in the region.",
        synonyms: ["Descendant", "Heir", "Offshoot"],
        antonyms: ["Ancestor", "Root"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-74",
    title: "Barron Block 74: Growth & Style",
    words: [
      {
        word: "Scoff",
        definition: "Speak to someone or about something in a scornfully derisive or mocking way.",
        example: "He began to scoff at the engineer's quixotic plan for a flying car.",
        synonyms: ["Mock", "Deride", "Ridicule"],
        antonyms: ["Praise", "Admire", "Respect"],
        derivatives: []
      },
      {
        word: "Scotch",
        definition: "Put an end to.",
        example: "The government took immediate action to scotch several rumors about a coming war.",
        synonyms: ["Stop", "Finish", "End"],
        antonyms: ["Start", "Continue"],
        derivatives: []
      },
      {
        word: "Scrupulous",
        definition: "(of a person or process) diligent, thorough, and extremely attentive to details.",
        example: "He was scrupulous in his research and never overlooked even the smallest facts.",
        synonyms: ["Meticulous", "Precise", "Careful"],
        antonyms: ["Careless", "Negligent", "Dishonest"],
        derivatives: ["Scruples"]
      },
      {
        word: "Scrutinize",
        definition: "Examine or inspect closely and thoroughly.",
        example: "The detective began to scrutinize the suspect's physiognomy for any sign of guilt.",
        synonyms: ["Examine", "Study", "Inspect"],
        antonyms: ["Ignore", "Neglect"],
        derivatives: ["Scrutiny"]
      },
      {
        word: "Scurrilous",
        definition: "Making or spreading scandalous claims about someone with the intention of damaging their reputation.",
        example: "The news group was criticized for its scurrilous reports about various politicians.",
        synonyms: ["Abusive", "Slanderous", "Insulting"],
        antonyms: ["Complimentary", "Kind", "Gentle"],
        derivatives: []
      },
      {
        word: "Scurvy",
        definition: "Distasteful; a disease caused by a deficiency of vitamin C.",
        example: "The sailors on the long journey across the ocean suffered from several cases of scurvy.",
        synonyms: ["Poor", "Insignificant"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Seamy",
        definition: "Sordid and disreputable.",
        example: "The book describes the seamy side of life in the city's abandoned and dark regions.",
        synonyms: ["Sordid", "Corrupt", "Dirty"],
        antonyms: ["Pure", "Clean", "Genuine"],
        derivatives: []
      },
      {
        word: "Seclude",
        definition: "Keep (someone) away from other people.",
        example: "The famous actor lived a secluded life in his mountain home for several years.",
        synonyms: ["Isolate", "Separate", "Hide"],
        antonyms: ["Socialize", "Reveal"],
        derivatives: ["Seclusion"]
      },
      {
        word: "Sedition",
        definition: "Conduct or speech inciting people to rebel against the authority of a state or monarch.",
        example: "The suspect was arrested for several acts of sedition against the government.",
        synonyms: ["Rebellion", "Treason", "Incite"],
        antonyms: ["Loyalty", "Obedience"],
        derivatives: ["Seditious"]
      },
      {
        word: "Sedulous",
        definition: "(of a person or action) showing dedication and diligence.",
        example: "He was a sedulous student who spent several hours to peruse the ancient manuscript.",
        synonyms: ["Diligent", "Careful", "Attentive"],
        antonyms: ["Careless", "Negligent", "Lazy"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-75",
    title: "Barron Block 75: Power & Vision",
    words: [
      {
        word: "Seemly",
        definition: "Conforming to accepted notions of propriety or good taste; decorous.",
        example: "The senator's behavior throughout the event was considered seemly and professional.",
        synonyms: ["Proper", "Decorous", "Fitting"],
        antonyms: ["Unseemly", "Improper", "Rude"],
        derivatives: []
      },
      {
        word: "Seethe",
        definition: "(of a liquid) bubble up as a result of being boiled.",
        example: "He began to seethe with rage as the lawyer's questions became more difficult.",
        synonyms: ["Boil", "Simmer", "Rage"],
        antonyms: ["Calm", "Cool"],
        derivatives: []
      },
      {
        word: "Semantic",
        definition: "Relating to meaning in language or logic.",
        example: "The scientist's book explores several semantic questions about the nature of language.",
        synonyms: [],
        antonyms: [],
        derivatives: ["Semantics"]
      },
      {
        word: "Seminal",
        definition: "(of a work, event, moment, or figure) strongly influencing later developments.",
        example: "The scientist's discovery was a seminal event that changed the entire field of biology.",
        synonyms: ["Basic", "Fundamental", "Groundbreaking"],
        antonyms: ["Insignificant", "Minor"],
        derivatives: []
      },
      {
        word: "Sententious",
        definition: "Given to moralizing in a pompous or affected manner.",
        example: "His sententious comments about the importance of family were criticized by his coworkers.",
        synonyms: ["Moralizing", "Pompous", "Affected"],
        antonyms: ["Modest", "Simple"],
        derivatives: []
      },
      {
        word: "Sepulcher",
        definition: "A small room or monument, cut in rock or built of stone, in which a dead person is laid.",
        example: "The ancient king's sepulcher was discovered by several explorers in the mountain.",
        synonyms: ["Tomb", "Vault", "Monument"],
        antonyms: [],
        derivatives: ["Sepulchral"]
      },
      {
        word: "Sequestration",
        definition: "The action of taking legal possession of assets until a debt has been paid.",
        example: "Several countries have moved to sequestration of various assets during the long war.",
        synonyms: ["Seizure", "Confiscation"],
        antonyms: ["Return", "Restitution"],
        derivatives: ["Sequestrate"]
      },
      {
        word: "Seraphic",
        definition: "Angelic; of or relating to seraphim.",
        example: "The child's seraphic expression amazed several people at the funeral service.",
        synonyms: ["Angelic", "Heavenly", "Divine"],
        antonyms: ["Devil", "Demon"],
        derivatives: ["Seraph"]
      },
      {
        word: "Serendipity",
        definition: "The occurrence and development of events by chance in a happy or beneficial way.",
        example: "The discovery was a complete stroke of serendipity that occurred while he was researching.",
        synonyms: ["Luck", "Fluke", "Chance"],
        antonyms: ["Plan", "Design", "Bad luck"],
        derivatives: ["Serendipitous"]
      },
      {
        word: "Serene",
        definition: "Calm, peaceful, and untroubled; tranquil.",
        example: "The island remained serene and peaceful throughout the hot summer months.",
        synonyms: ["Calm", "Peaceful", "Tranquil"],
        antonyms: ["Chaotic", "Turbulent", "Busy"],
        derivatives: ["Serenity"]
      }
    ]
  },
  {
    id: "barron-76",
    title: "Barron Block 76: State & Style",
    words: [
      {
        word: "Shard",
        definition: "A piece of broken ceramic, metal, glass, or rock, typically having sharp edges.",
        example: "The archaeologist discovered several ancient shards of pottery in the desert.",
        synonyms: ["Fragment", "Piece", "Particle"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Shibboleth",
        definition: "A custom, principle, or belief, distinguishing a particular class or group of people.",
        example: "The use of certain technical terms was seen as a shibboleth within the engineering community.",
        synonyms: ["Cliché", "Truism"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Shirk",
        definition: "Avoid or neglect (a duty or responsibility).",
        example: "He tried to shirk his responsibilities by pretending to be ill and staying home.",
        synonyms: ["Avoid", "Dodge", "Neglect"],
        antonyms: ["Face", "Accept", "Perform"],
        derivatives: []
      },
      {
        word: "Shrewd",
        definition: "Having or showing sharp powers of judgment; astute.",
        example: "She is a shrewd businesswoman who has correctly predicted several major market trends.",
        synonyms: ["Astute", "Wise", "Sharp"],
        antonyms: ["Foolish", "Ignorant", "Dull"],
        derivatives: ["Shrewdly"]
      },
      {
        word: "Singular",
        definition: "Exceptionally good or great; remarkable.",
        example: "The young princess was considered a person of singular beauty and grace.",
        synonyms: ["Remarkable", "Unique", "Extraordinary"],
        antonyms: ["Common", "Ordinary", "Normal"],
        derivatives: ["Singularity"]
      },
      {
        word: "Sinister",
        definition: "Giving the impression that something harmful or evil is happening or will happen.",
        example: "The dark clouds gathering on the horizon were a sinister sign of a coming storm.",
        synonyms: ["Threatening", "Menacing", "Evil"],
        antonyms: ["Bright", "Hopeful", "Reassuring"],
        derivatives: []
      },
      {
        word: "Skeptic",
        definition: "A person inclined to question or doubt all accepted opinions.",
        example: "He remained a skeptic about the company's new and controversial marketing strategy.",
        synonyms: ["Cynic", "Doubter", "Misanthrope"],
        antonyms: ["Believer", "Fan"],
        derivatives: ["Skeptical", "Skepticism"]
      },
      {
        word: "Skiff",
        definition: "A shallow, flat-bottomed open boat with a sharp bow and square stern.",
        example: "The fishermen used a small skiff to travel to several of their favorite island spots.",
        synonyms: ["Boat"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Skirmish",
        definition: "An episode of irregular or unpremeditated fighting, especially between small or outlying parts.",
        example: "Several minor skirmishes occurred between the two rival parties during the election.",
        synonyms: ["Fight", "Conflict", "Clash"],
        antonyms: ["Peace", "Agreement"],
        derivatives: []
      },
      {
        word: "Skittish",
        definition: "(of an animal, especially a horse) excitable or easily scared.",
        example: "The horse became skittish as the sudden noise startled it throughout the night.",
        synonyms: ["Excitable", "Nervous", "Fearful"],
        antonyms: ["Calm", "Composed", "Steady"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-77",
    title: "Barron Block 77: Behavior & State",
    words: [
      {
        word: "Slake",
        definition: "Quench or satisfy (one's thirst).",
        example: "He hoped to slake his thirst with a large and cold glass of water after the run.",
        synonyms: ["Satisfy", "Quench", "Satiate"],
        antonyms: ["Increase", "Aggravate"],
        derivatives: []
      },
      {
        word: "Slander",
        definition: "The action or crime of making a false spoken statement damaging to a person's reputation.",
        example: "The politician was accused of trying to slander his rival during the heated debate.",
        synonyms: ["Libel", "Slander", "Defamation"],
        antonyms: ["Praise", "Admire", "Respect"],
        derivatives: ["Slanderous"]
      },
      {
        word: "Slight",
        definition: "Small in degree; inconsiderable.",
        example: "The differences between the two products turn out to be slight and irrelevant.",
        synonyms: ["Small", "Tiny", "Minor"],
        antonyms: ["Huge", "Immense", "Major"],
        derivatives: []
      },
      {
        word: "Sloth",
        definition: "Reluctance to work or make an effort; laziness.",
        example: "He was criticized for his sloth and lack of contribution to the group project.",
        synonyms: ["Laziness", "Inactivity", "Idle"],
        antonyms: ["Activity", "Energy", "Work"],
        derivatives: ["Slothful"]
      },
      {
        word: "Slovenly",
        definition: "(of a person or their appearance) untidy and dirty.",
        example: "His slovenly appearance was criticized by his coworkers throughout the trial.",
        synonyms: ["Untidy", "Dirty", "Messy"],
        antonyms: ["Tidy", "Clean", "Neat"],
        derivatives: []
      },
      {
        word: "Sluggish",
        definition: "Slow-moving or inactive.",
        example: "The local economy remained sluggish throughout the long and cold winter months.",
        synonyms: ["Slow", "Inactive", "Lethargic"],
        antonyms: ["Active", "Lively", "Fast"],
        derivatives: []
      },
      {
        word: "Smelt",
        definition: "Extract (metal) from its ore by a process involving heating and melting.",
        example: "The factory was used to smelt several types of metal for industrial use.",
        synonyms: [],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Sobriety",
        definition: "The state of being sober.",
        example: "He remained in a state of sobriety throughout the entire and important event.",
        synonyms: ["Temperance", "Seriousness", "Gravity"],
        antonyms: ["Drunkenness", "Levity"],
        derivatives: ["Sober"]
      },
      {
        word: "Solicitous",
        definition: "Showing interest or concern.",
        example: "She was very solicitous about her mother's health throughout the long winter.",
        synonyms: ["Concerned", "Attentive", "Kind"],
        antonyms: ["Careless", "Negligent", "Unconcerned"],
        derivatives: ["Solicitude"]
      },
      {
        word: "Soliloquy",
        definition: "An act of speaking one's thoughts aloud when by oneself.",
        example: "The play's main character delivers a moving soliloquy that reveals his inner thoughts.",
        synonyms: ["Monologue", "Speech"],
        antonyms: ["Dialogue"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-78",
    title: "Barron Block 78: Character & State",
    words: [
      {
        word: "Solvent",
        definition: "Having assets in excess of liabilities; able to pay one's debts.",
        example: "The company's goal is to remain solvent despite the current financial crisis.",
        synonyms: ["Financial", "Liquid"],
        antonyms: ["Insolvent", "Broke"],
        derivatives: ["Solvency"]
      },
      {
        word: "Somatic",
        definition: "Relating to the body, especially as distinct from the mind.",
        example: "The doctor explores several somatic symptoms that could be linked to stress.",
        synonyms: ["Physical", "Corporal"],
        antonyms: ["Mental", "Spiritual"],
        derivatives: []
      },
      {
        word: "Somber",
        definition: "Dark or dull in color or tone; gloomy.",
        example: "The party had a somber atmosphere throughout the entire and important occasion.",
        synonyms: ["Gloomy", "Serious", "Grave"],
        antonyms: ["Bright", "Cheerful", "Happy"],
        derivatives: []
      },
      {
        word: "Somnambulist",
        definition: "A person who walks about in his sleep.",
        example: "He was a confirmed somnambulist who often wandered through the house throughout the night.",
        synonyms: ["Sleepwalker"],
        antonyms: [],
        derivatives: ["Somnambulism"]
      },
      {
        word: "Sonorous",
        definition: "(of a person's voice or other sound) imposingly deep and full.",
        example: "The professor's sonorous voice captivated several people in the large hall.",
        synonyms: ["Deep", "Resonant", "Rich"],
        antonyms: ["High", "Weak", "Squeaky"],
        derivatives: ["Sonority"]
      },
      {
        word: "Sophist",
        definition: "A specific kind of teacher in ancient Greece; a person who reasons with clever but fallacious arguments.",
        example: "He was seen as a sophist who was more interested in style than substance.",
        synonyms: ["Hypocrite", "Thinker"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Sophistry",
        definition: "The use of fallacious arguments, especially with the intention of deceiving.",
        example: "The politician's argument was criticized for its empty and clever sophistry.",
        synonyms: ["Deception", "Trickery", "Fallacy"],
        antonyms: ["Truth", "Honesty", "Sincerity"],
        derivatives: []
      },
      {
        word: "Sophomoric",
        definition: "Relating to or characteristic of a sophomore.",
        example: "The novel was criticized for its sophomoric jokes and lack of serious depth.",
        synonyms: ["Immature", "Childish", "Juvenile"],
        antonyms: ["Mature", "Adult", "Serious"],
        derivatives: ["Sophomore"]
      },
      {
        word: "Soporific",
        definition: "Tending to induce sleep.",
        example: "The professor's long lecture had a soporific effect on several of the students.",
        synonyms: ["Sleepy", "Calming", "Dull"],
        antonyms: ["Excitng", "Energizing", "Vigorous"],
        derivatives: []
      },
      {
        word: "Sordid",
        definition: "Involving ignoble actions and motives; arousing moral distaste and contempt.",
        example: "The book describes the sordid details of the scandal that ruined the politician's career.",
        synonyms: ["Dirty", "Corrupt", "Dishonest"],
        antonyms: ["Pure", "Clean", "Honest"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-79",
    title: "Barron Block 79: Rules & Vision",
    words: [
      {
        word: "Sovereign",
        definition: "A supreme ruler, especially a monarch.",
        example: "The country remained a sovereign state with its own and independent government.",
        synonyms: ["Ruler", "Monarch", "King"],
        antonyms: ["Subject", "Servant"],
        derivatives: ["Sovereignty"]
      },
      {
        word: "Sparsity",
        definition: "The quality of being sparse.",
        example: "There is a sparsity of evidence to support the scientist's latest claims.",
        synonyms: ["Scarcity", "Lack", "Dearth"],
        antonyms: ["Abundance", "Profusion", "Plenitude"],
        derivatives: ["Sparse"]
      },
      {
        word: "Spartan",
        definition: "Showing the indifference to comfort or luxury characteristic of ancient Sparta.",
        example: "The workers lived in spartan conditions in the abandoned factory for several months.",
        synonyms: ["Simple", "Plain", "Harsh"],
        antonyms: ["Luxurious", "Rich", "Extravagant"],
        derivatives: []
      },
      {
        word: "Spasmodic",
        definition: "Occurring or done in brief, irregular bursts.",
        example: "The city's latest protests remained spasmodic and poorly organized for many years.",
        synonyms: ["Irregular", "Fitful", "Sporadic"],
        antonyms: ["Regular", "Continuous", "Stable"],
        derivatives: ["Spasm"]
      },
      {
        word: "Specious",
        definition: "Superficially plausible, but actually wrong.",
        example: "The reporter's argument was seen as specious and full of false info.",
        synonyms: ["False", "Misleading", "Deceitful"],
        antonyms: ["Genuine", "Real", "Truthful"],
        derivatives: []
      },
      {
        word: "Spectrum",
        definition: "Used to classify something, or suggest that it can be classified, in terms of its position on a scale between two extreme points.",
        example: "The politician's views were criticized by people from across the entire political spectrum.",
        synonyms: ["Range", "Scale", "Variety"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Spendthrift",
        definition: "A person who spends money in an extravagant, irresponsible way.",
        example: "He was a spendthrift who frequently wasted several thousands of dollars on luxury items.",
        synonyms: ["Wastrel", "Extravagant", "Profligate"],
        antonyms: ["Miser", "Saver", "Frugal"],
        derivatives: []
      },
      {
        word: "Spontaneity",
        definition: "The condition of being spontaneous.",
        example: "The actor's performance was admired for its great spontaneity and natural feel.",
        synonyms: ["Naturalness", "Impulse"],
        antonyms: ["Plan", "Design"],
        derivatives: ["Spontaneous"]
      },
      {
        word: "Sporadic",
        definition: "Occurring at irregular intervals or only in a few places; scattered or isolated.",
        example: "The area experienced several sporadic rain showers throughout the hot summer months.",
        synonyms: ["Occasional", "Irregular", "Scattered"],
        antonyms: ["Regular", "Frequent", "Continuous"],
        derivatives: []
      },
      {
        word: "Spurious",
        definition: "Not being what it purports to be; false or fake.",
        example: "The study was criticized for being based on spurious and misleading info.",
        synonyms: ["False", "Fake", "Counterfeit"],
        antonyms: ["Genuine", "Real", "Truthful"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-80",
    title: "Barron Block 80: State & Nature",
    words: [
      {
        word: "Squalid",
        definition: "(of a place) extremely dirty and unpleasant, especially as a result of poverty or neglect.",
        example: "The suspects were living in squalid conditions in the abandoned building.",
        synonyms: ["Dirty", "Filthy", "Nasty"],
        antonyms: ["Clean", "Tidy", "Neat"],
        derivatives: ["Squalor"]
      },
      {
        word: "Squander",
        definition: "Waste (something, especially money or time) in a reckless and foolish manner.",
        example: "He proceeded to squander several thousands of dollars on luxury and irrelevant items.",
        synonyms: ["Waste", "Blow", "Lose"],
        antonyms: ["Save", "Keep", "Efficient"],
        derivatives: []
      },
      {
        word: "Staccato",
        definition: "With each sound or note sharply detached or separated from the others.",
        example: "The sound of gunfire provided a staccato background to the otherwise quiet night.",
        synonyms: ["Sharp", "Detached", "Disconnected"],
        antonyms: ["Smooth", "Legato", "Continuous"],
        derivatives: []
      },
      {
        word: "Stanch",
        definition: "Stop or restrict (a flow of blood) from a wound.",
        example: "The doctor took immediate action to stanch the flow of blood from the patient's wound.",
        synonyms: ["Stop", "Check", "Halt"],
        antonyms: ["Start", "Inflame"],
        derivatives: []
      },
      {
        word: "Static",
        definition: "Lacking in movement, action, or change, especially in a way viewed as undesirable or uninteresting.",
        example: "The local economy remained static throughout the entire and important winter months.",
        synonyms: ["Stationary", "Inactive", "Stable"],
        antonyms: ["Dynamic", "Active", "Mobile"],
        derivatives: []
      },
      {
        word: "Steep",
        definition: "(of a slope, flight of stairs, angle, or ascent) rising or falling sharply; almost perpendicular.",
        example: "The mountain path was exceptionally steep and difficult for several travelers.",
        synonyms: ["Sharp", "Sheer", "High"],
        antonyms: ["Flat", "Level", "Low"],
        derivatives: []
      },
      {
        word: "Stentorian",
        definition: "(of a person's voice) loud and powerful.",
        example: "The professor's stentorian voice captivated several people in the large hall.",
        synonyms: ["Loud", "Powerful", "Thundering"],
        antonyms: ["Quiet", "Weak", "Faint"],
        derivatives: []
      },
      {
        word: "Stigma",
        definition: "A mark of disgrace associated with a particular circumstance, quality, or person.",
        example: "The social stigma associated with mental illness remains a major problem in many countries.",
        synonyms: ["Blemish", "Disgrace", "Shame"],
        antonyms: ["Honor", "Glory", "Praise"],
        derivatives: ["Stigmatize"]
      },
      {
        word: "Stint",
        definition: "Supply (an ungenerous or inadequate amount of something); a person's fixed or allotted period of work.",
        example: "The manager's goal is to stint various resources for several of the minor projects.",
        synonyms: ["Limit", "Share", "Part"],
        antonyms: ["Abundance", "Profusion"],
        derivatives: []
      },
      {
        word: "Stipulate",
        definition: "Demand or specify (a requirement), typically as part of a bargain or agreement.",
        example: "The contract's latest terms stipulate several new and important requirements for the team.",
        synonyms: ["Specify", "Demand", "Order"],
        antonyms: [],
        derivatives: ["Stipulation"]
      }
    ]
  },
  {
    id: "barron-81",
    title: "Barron Block 81: State & Quality",
    words: [
      {
        word: "Stoic",
        definition: "A person who can endure pain or hardship without showing their feelings or complaining.",
        example: "He remained stoic throughout the entire and difficult situation, refusing to complain.",
        synonyms: ["Patient", "Stoical", "Forbearing"],
        antonyms: ["Complaint", "Emotional"],
        derivatives: ["Stoicism"]
      },
      {
        word: "Stratagem",
        definition: "A plan or scheme, especially one used to outwit an opponent or achieve an objective.",
        example: "The general developed a clever stratagem to outwit the enemy and win the battle.",
        synonyms: ["Scheme", "Plot", "Tactic"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Stratify",
        definition: "Form or arrange into strata.",
        example: "The society was stratified into several different and distinct social classes.",
        synonyms: ["Layer", "Organize", "Classify"],
        antonyms: [],
        derivatives: ["Stratification"]
      },
      {
        word: "Striated",
        definition: "Marked with long, thin parallel streaks or lines.",
        example: "The rock had a beautiful striated appearance that reflected its ancient history.",
        synonyms: ["Striped", "Grooved", "Layered"],
        antonyms: ["Smooth", "Uniform"],
        derivatives: ["Striation"]
      },
      {
        word: "Stricture",
        definition: "A restriction on a person or activity.",
        example: "Several countries have moved to stricture various financial activities during the crisis.",
        synonyms: ["Restriction", "Limit", "Constraint"],
        antonyms: ["Freedom", "Liberty"],
        derivatives: []
      },
      {
        word: "Strident",
        definition: "Loud and harsh; grating.",
        example: "The politician's strident voice was criticized by several members of the audience.",
        synonyms: ["Loud", "Harsh", "Gratings"],
        antonyms: ["Soft", "Quiet", "Gentle"],
        derivatives: []
      },
      {
        word: "Strut",
        definition: "Walk with a stiff, erect, and apparently arrogant or conceited gait.",
        example: "The peacock began to strut in front of the female, showing off its beautiful feathers.",
        synonyms: ["Swagger", "Parade", "Stride"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Stultify",
        definition: "Cause to lose enthusiasm and initiative, especially as a result of a tedious or restrictive routine.",
        example: "The boring and repetitive routine served to stultify several of the creative workers.",
        synonyms: ["Hamper", "Dull", "Stifle"],
        antonyms: ["Encourage", "Inspire", "Excite"],
        derivatives: []
      },
      {
        word: "Stupefy",
        definition: "Make (someone) unable to think or feel properly.",
        example: "He was stupefied by the sudden and unexpected news of the scandal.",
        synonyms: ["Stun", "Daze", "Amaze"],
        antonyms: ["Clarify", "Enlighten"],
        derivatives: ["Stupefaction"]
      },
      {
        word: "Stygian",
        definition: "Relating to the Styx; very dark.",
        example: "The air in the abandoned cave was thick with the stygian darkness and moisture.",
        synonyms: ["Dark", "Gloomy", "Black"],
        antonyms: ["Bright", "Light", "Solar"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-82",
    title: "Barron Block 82: Local & Action",
    words: [
      {
        word: "Subpoena",
        definition: "A writ ordering a person to attend a court.",
        example: "The witness received a subpoena to attend the trial and provide his testimony.",
        synonyms: ["Writ", "Command", "Summons"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Subside",
        definition: "Become less intense, violent, or severe.",
        example: "The storm's intensity began to subside as it moved further away from the island.",
        synonyms: ["Abate", "Decline", "Sink"],
        antonyms: ["Increase", "Rise", "Ascend"],
        derivatives: ["Subsidence"]
      },
      {
        word: "Substantiate",
        definition: "Provide evidence to support or prove the truth of.",
        example: "The reporter's story was later substantiated by several independent witnesses.",
        synonyms: ["Prove", "Verify", "Confirm"],
        antonyms: ["Disprove", "Refute", "Deny"],
        derivatives: ["Substantial"]
      },
      {
        word: "Subsume",
        definition: "Include or absorb (something) in something else.",
        example: "The company's goal is to subsume several smaller firms into its organization.",
        synonyms: ["Include", "Absorb", "Contain"],
        antonyms: ["Exclude", "Separate"],
        derivatives: []
      },
      {
        word: "Subterfuge",
        definition: "Deceit used in order to achieve one's goal.",
        example: "The spy used various acts of subterfuge to gain access to the secret building.",
        synonyms: ["Deception", "Trickery", "Intrigue"],
        antonyms: ["Honesty", "Openness", "Sincerity"],
        derivatives: []
      },
      {
        word: "Subtlety",
        definition: "The quality of being understated, delicate, or elusive.",
        example: "The actor's performance was admired for its great subtlety and natural feel.",
        synonyms: ["Delicacy", "Nuance"],
        antonyms: ["Obviousness", "Crude"],
        derivatives: ["Subtle"]
      },
      {
        word: "Subversive",
        definition: "Seeking or intended to subvert an established system or institution.",
        example: "The organization was criticized for its subversive tactics against the government.",
        synonyms: ["Rebel", "Traiterous", "Hostile"],
        antonyms: ["Loyal", "Obedient"],
        derivatives: ["Subvert"]
      },
      {
        word: "Succinct",
        definition: "(especially of something written or spoken) briefly and clearly expressed.",
        example: "The professor's explanation was succinct and easy for the students to understand.",
        synonyms: ["Brief", "Concise", "Short"],
        antonyms: ["Verbose", "Wordy", "Garrulous"],
        derivatives: ["Succinctness"]
      },
      {
        word: "Succor",
        definition: "Assistance and support in times of hardship and distress.",
        example: "The organization provides succor for people who have been affected by the crisis.",
        synonyms: ["Aid", "Help", "Relief"],
        antonyms: ["Harm", "Damage"],
        derivatives: []
      },
      {
        word: "Sullied",
        definition: "Damage the purity or integrity of; defile.",
        example: "His reputation was sullied by the latest and controversial news of the scandal.",
        synonyms: ["Dirty", "Corrupt", "Defile"],
        antonyms: ["Clean", "Pristine", "Pure"],
        derivatives: ["Sully"]
      }
    ]
  },
  {
    id: "barron-83",
    title: "Barron Block 83: Power & Growth",
    words: [
      {
        word: "Supercilious",
        definition: "Behaving or looking as though one thinks one is superior to others.",
        example: "The wealthy socialite's supercilious attitude was criticized by her neighbors.",
        synonyms: ["Arrogant", "Conceited", "Proud"],
        antonyms: ["Humble", "Modest", "Shy"],
        derivatives: []
      },
      {
        word: "Superfluous",
        definition: "Unnecessary, especially through being more than enough.",
        example: "The report's extra and superfluous info provided no value for the readers.",
        synonyms: ["Extra", "Excess", "Unnecessary"],
        antonyms: ["Necessary", "Essential", "Scant"],
        derivatives: ["Superfluity"]
      },
      {
        word: "Supersede",
        definition: "Take the place of (a person or thing previously in authority or use); supplant.",
        example: "The digital camera will eventually supersede several other pieces of modern technology.",
        synonyms: ["Replace", "Supplant", "Remove"],
        antonyms: ["Stay", "Keep", "Maintain"],
        derivatives: []
      },
      {
        word: "Supine",
        definition: "(of a person) lying face upward.",
        example: "He remained in a supine position on the beach, enjoying the hot summer sun.",
        synonyms: ["Flat", "Stretched"],
        antonyms: ["Prone", "Erect"],
        derivatives: []
      },
      {
        word: "Supplant",
        definition: "Supersede and replace.",
        example: "The new software will eventually supplant the current and outdated system.",
        synonyms: ["Replace", "Supersede", "Remove"],
        antonyms: ["Stay", "Keep", "Maintain"],
        derivatives: []
      },
      {
        word: "Suppliant",
        definition: "A person making a humble plea to someone in power or authority.",
        example: "He appeared before the king as a humble suppliant, seeking mercy for his family.",
        synonyms: ["Beggar", "Seeker"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Supplicate",
        definition: "Ask or beg for something earnestly or humbly.",
        example: "The victims began to supplicate for help throughout the long and difficult crisis.",
        synonyms: ["Beg", "Plead", "Ask"],
        antonyms: [],
        derivatives: ["Supplication"]
      },
      {
        word: "Surfeit",
        definition: "An excessive amount of something.",
        example: "The country experienced a surfeit of grain after the unusually and successfully good year.",
        synonyms: ["Excess", "Profusion", "Abundance"],
        antonyms: ["Dearth", "Scarcity", "Lack"],
        derivatives: []
      },
      {
        word: "Surly",
        definition: "Bad-tempered and unfriendly.",
        example: "The surly security guard refused to let anyone enter without proper ID.",
        synonyms: ["Unfriendly", "Gruff", "Sullen"],
        antonyms: ["Friendly", "Kind", "Gentle"],
        derivatives: []
      },
      {
        word: "Surmise",
        definition: "Suppose that something is true without having evidence to confirm it.",
        example: "He could only surmise that the meeting had been canceled after no one arrived.",
        synonyms: ["Guess", "Conjecture", "Suppose"],
        antonyms: ["Know", "Confirm"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-84",
    title: "Barron Block 84: Social Systems",
    words: [
      {
        word: "Surreptitious",
        definition: "Kept secret, especially because it would not be approved of.",
        example: "The investigator's surreptitious movements allowed him to enter the building unnoticed.",
        synonyms: ["Secret", "Hidden", "Furtive"],
        antonyms: ["Public", "Open", "Exposed"],
        derivatives: ["Surreptitiously"]
      },
      {
        word: "Sycophant",
        definition: "A person who acts obsequiously toward someone important in order to gain advantage.",
        example: "He was seen as a sycophant who would do anything to please his wealthy manager.",
        synonyms: ["Fawner", "Flatterer", "Toady"],
        antonyms: [],
        derivatives: ["Sycophantic"]
      },
      {
        word: "Symbiosis",
        definition: "Interaction between two different organisms living in close physical association.",
        example: "The relationship between the two species is a perfect example of natural symbiosis.",
        synonyms: ["Association", "Fellowship"],
        antonyms: [],
        derivatives: ["Symbiotic"]
      },
      {
        word: "Tacit",
        definition: "Understood or implied without being stated.",
        example: "The two neighbors had a tacit agreement to help each other with gardening.",
        synonyms: ["Implied", "Understood", "Silent"],
        antonyms: ["Stated", "Open", "Explicit"],
        derivatives: ["Tacitly"]
      },
      {
        word: "Taciturn",
        definition: "(of a person) reserved or uncommunicative in speech; saying little.",
        example: "He was a taciturn person who rarely spoke about his private thoughts or feelings.",
        synonyms: ["Silent", "Reserved", "Reticent"],
        antonyms: ["Talkative", "Garrulous", "Voluble"],
        derivatives: ["Taciturnity"]
      },
      {
        word: "Talon",
        definition: "A claw, especially one belonging to a bird of prey.",
        example: "The eagle used its powerful talons to capture its prey from the long grass.",
        synonyms: ["Claw"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Tangential",
        definition: "Relating to or along a tangent.",
        example: "The professor's latest comments were only tangential to the main subject of the lecture.",
        synonyms: ["Secondary", "Incidental"],
        antonyms: ["Relevant", "Central"],
        derivatives: ["Tangent"]
      },
      {
        word: "Tautology",
        definition: "The saying of the same thing twice in different words, generally considered to be a fault of style.",
        example: "The reporter's report was full of unnecessary and repetitive tautology.",
        synonyms: ["Repetition", "Pleonasm"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Taxonomy",
        definition: "The branch of science concerned with classification, especially of organisms; systematics.",
        example: "The latest and successfully good research explores several new taxonomy systems.",
        synonyms: ["Classification", "System"],
        antonyms: [],
        derivatives: ["Taxonomist"]
      },
      {
        word: "Tenable",
        definition: "Able to be maintained or defended against attack or objection.",
        example: "The senator's position remained tenable despite the latest and controversial news.",
        synonyms: ["Defensible", "Reasonable", "Strong"],
        antonyms: ["Intenable", "Weak", "Unreasonable"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-85",
    title: "Barron Block 85: Character & Vision",
    words: [
      {
        word: "Tenuous",
        definition: "Very weak or slight.",
        example: "The company's link to the latest scandal was seen as tenuous and poorly supported.",
        synonyms: ["Weak", "Slight", "Fragile"],
        antonyms: ["Strong", "Solid", "Stable"],
        derivatives: ["Tenuously"]
      },
      {
        word: "Terrestrial",
        definition: "Relating to the earth or its inhabitants.",
        example: "The study explores several terrestrial ecosystems that have been affected by climate change.",
        synonyms: ["Earthly", "Physical"],
        antonyms: ["Spiritual", "Celestial"],
        derivatives: []
      },
      {
        word: "Terse",
        definition: "Sparing in the use of words; abrupt.",
        example: "The manager's terse reply indicated that he was not interested in the proposal.",
        synonyms: ["Short", "Brief", "Succinct"],
        antonyms: ["Verbose", "Wordy", "Garrulous"],
        derivatives: ["Tersenly"]
      },
      {
        word: "Theocracy",
        definition: "A system of government in which priests rule in the name of God or a god.",
        example: "The ancient civilization was run by a religious theocracy for several centuries.",
        synonyms: ["Hierarchy", "Authority"],
        antonyms: ["Democracy"],
        derivatives: ["Theocrat"]
      },
      {
        word: "Thrifty",
        definition: "(of a person or their behavior) using money and other resources carefully and not wastefully.",
        example: "She was a thrifty person who always looked for the best and successfully good deals.",
        synonyms: ["Frugal", "Careful", "Miserly"],
        antonyms: ["Extravagant", "Wasteful", "Spendthrift"],
        derivatives: ["Thrift"]
      },
      {
        word: "Timbre",
        definition: "The character or quality of a musical sound or voice as distinct from its pitch and intensity.",
        example: "The singer's voice had a unique and beautiful timbre that captivated the audience.",
        synonyms: ["Tone", "Character", "Color"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Tirade",
        definition: "A long, angry speech of criticism or accusation.",
        example: "The manager launched into a long and angry tirade against the team's performance.",
        synonyms: ["Attack", "Abuse", "Slander"],
        antonyms: ["Praise", "Extol"],
        derivatives: []
      },
      {
        word: "Torpor",
        definition: "A state of physical or mental inactivity; lethargy.",
        example: "He remained in a state of torpor throughout the long and cold winter months.",
        synonyms: ["Lethargy", "Inactivity", "Laziness"],
        antonyms: ["Activity", "Energy", "Work"],
        derivatives: ["Torpid"]
      },
      {
        word: "Tortuous",
        definition: "Full of twists and turns.",
        example: "The mountain path was exceptionally tortuous and difficult for several travelers.",
        synonyms: ["Twisted", "Winding", "Complex"],
        antonyms: ["Direct", "Straight", "Simple"],
        derivatives: []
      },
      {
        word: "Tout",
        definition: "Attempt to sell (something), typically by pestering people in an aggressive or bold way.",
        example: "Several salesmen began to tout their products to the people throughout the festival.",
        synonyms: ["Sell", "Pester", "Push"],
        antonyms: [],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-86",
    title: "Barron Block 86: Growth & State",
    words: [
      {
        word: "Tractable",
        definition: "(of a person or animal) easy to control or influence.",
        example: "The horse was exceptionally tractable and easy for the young child to ride.",
        synonyms: ["Docile", "Obedient", "Yielding"],
        antonyms: ["Stubborn", "Obstinate", "Unyielding"],
        derivatives: ["Tractability"]
      },
      {
        word: "Transgression",
        definition: "An act that goes against a law, rule, or code of conduct; an offense.",
        example: "His latest and successfully good transgression was dismissed by his supporters as a minor mistake.",
        synonyms: ["Offense", "Sin", "Fault"],
        antonyms: ["Obedience", "Loyalty"],
        derivatives: ["Transgress"]
      },
      {
        word: "Transient",
        definition: "Lasting only for a short time; impermanent.",
        example: "The area experienced several transient rain showers throughout the hot summer months.",
        synonyms: ["Ephemeral", "Temporary", "Short-lived"],
        antonyms: ["Permanent", "Eternal", "Enduring"],
        derivatives: ["Transience"]
      },
      {
        word: "Translucent",
        definition: "(of a substance) allowing light, but not detailed images, to pass through; semitransparent.",
        example: "The fabric had a translucent appearance that reflected its delicate and fine nature.",
        synonyms: ["Semitransparent", "Clear"],
        antonyms: ["Opaque", "Cloudy", "Dull"],
        derivatives: ["Translucence"]
      },
      {
        word: "Travesty",
        definition: "A false, absurd, or distorted representation of something.",
        example: "The trial's result was seen as a complete travesty of justice by several people.",
        synonyms: ["Mockery", "Parody", "Caricature"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Trechant",
        definition: "Vigorous or incisive in expression or style.",
        example: "The professor's latest and successfully good trechant comments provided clear guidelines for the students.",
        synonyms: ["Incisive", "Vigorous", "Sharp"],
        antonyms: ["Weak", "Dull", "Vague"],
        derivatives: []
      },
      {
        word: "Trepidation",
        definition: "A feeling of fear or agitation about something that may happen.",
        example: "She had a sudden feeling of trepidation and decided not to enter the dark building.",
        synonyms: ["Foreboding", "Omen", "Feeling"],
        antonyms: ["Confidence", "Courage"],
        derivatives: ["Trepid"]
      },
      {
        word: "Trifling",
        definition: "Unimportant or trivial.",
        example: "The differences between the two products turn out to be trifling and irrelevant.",
        synonyms: ["Tiny", "Small", "Insignificant"],
        antonyms: ["Huge", "Immense", "Major"],
        derivatives: ["Trifle"]
      },
      {
        word: "Truculent",
        definition: "Eager or quick to argue or fight; aggressively defiant.",
        example: "The child's truculent behavior was exhausting for his parents throughout the day.",
        synonyms: ["Aggressive", "Combative", "Hostile"],
        antonyms: ["Peaceful", "Pacifist", "Gentle"],
        derivatives: ["Truculence"]
      },
      {
        word: "Turgid",
        definition: "Swollen and distended or congested.",
        example: "The book's turgid prose was criticized by several serious critics throughout the night.",
        synonyms: ["Swollen", "Verbose", "Wordy"],
        antonyms: ["Concise", "Modest"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-87",
    title: "Barron Block 87: Power & Rules",
    words: [
      {
        word: "Turpitude",
        definition: "Depravity; wickedness.",
        example: "The suspect's latest and successfully good turpitude was admired by everyone who knew him.",
        synonyms: ["Corruption", "Dishonesty", "Evil"],
        antonyms: ["Virtue", "Purity", "Honor"],
        derivatives: []
      },
      {
        word: "Tyro",
        definition: "A beginner or novice.",
        example: "He was a tyro in the field of computer science and had much to learn from his peers.",
        synonyms: ["Novice", "Beginner", "Learner"],
        antonyms: ["Expert", "Veteran", "Master"],
        derivatives: []
      },
      {
        word: "Ubiquitous",
        definition: "Present, appearing, or found everywhere.",
        example: "The influence of social media on our everyday lives is now ubiquitous for everyone.",
        synonyms: ["Widespread", "Universal", "General"],
        antonyms: ["Local", "Rare", "Isolated"],
        derivatives: ["Ubiquity"]
      },
      {
        word: "Umbrage",
        definition: "Offense or annoyance.",
        example: "The senator took umbrage at the reporter's latest and controversial news about him.",
        synonyms: ["Offense", "Annoyance", "Resentment"],
        antonyms: ["Favor", "Acceptance"],
        derivatives: []
      },
      {
        word: "Unconscionable",
        definition: "Not right or reasonable.",
        example: "The company's behavior throughout the crisis was seen as unconscionable by its workers.",
        synonyms: ["Unjust", "Immoral", "Wrong"],
        antonyms: ["Conscionable", "Just", "Right"],
        derivatives: []
      },
      {
        word: "Uncouth",
        definition: "(of a person or their appearance or behavior) lacking good manners, refinement, or grace.",
        example: "His uncouth behavior was criticized by several members of the audience throughout the night.",
        synonyms: ["Rude", "Vulgar", "Coarse"],
        antonyms: ["Polite", "Refined", "Kind"],
        derivatives: []
      },
      {
        word: "Undulate",
        definition: "Move with a smooth wavelike motion.",
        example: "The flags began to undulate in the wind as the national anthem began to play.",
        synonyms: ["Wave", "Swing", "Sway"],
        antonyms: ["Stay", "Stationary"],
        derivatives: ["Undulation"]
      },
      {
        word: "Unfrock",
        definition: "Deprive (a person in holy orders) of ecclesiastical status.",
        example: "The suspect was unfrocked after his controversial and secret views became known to everyone.",
        synonyms: ["Discharge"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Unfetter",
        definition: "Release from restraint or inhibition.",
        example: "The manager's goal is to unfetter the team's creativity and encourage new ideas.",
        synonyms: ["Free", "Release", "Loosen"],
        antonyms: ["Bind", "Control", "Restrict"],
        derivatives: ["Fetter"]
      },
      {
        word: "Unstinting",
        definition: "Given or giving without restraint; unsparing.",
        example: "The university received an unstinting donation from one of its wealthy and successfully good alumni.",
        synonyms: ["Generous", "Liberal", "Ample"],
        antonyms: ["Miserly", "Stingy", "Selfish"],
        derivatives: ["Stint"]
      }
    ]
  },
  {
    id: "barron-88",
    title: "Barron Block 88: Growth & Style",
    words: [
      {
        word: "Untenable",
        definition: "(especially of a position or view) not able to be maintained or defended against attack or objection.",
        example: "The politician's position became untenable after the latest and successfully good news.",
        synonyms: ["Weak", "Unreasonable", "Intenable"],
        antonyms: ["Tenable", "Defensible", "Strong"],
        derivatives: []
      },
      {
        word: "Upbraid",
        definition: "Find fault with (someone); scold.",
        example: "The manager proceeded to upbraid several of the team members for their poor performance.",
        synonyms: ["Scold", "Chide", "Rebuke"],
        antonyms: ["Praise", "Extol", "Congratulate"],
        derivatives: []
      },
      {
        word: "Urbanity",
        definition: "Courteousness and refinement of manner.",
        example: "His urbanity and charm were admired by everyone who knew him throughout his life.",
        synonyms: ["Politeness", "Refinement", "Grace"],
        antonyms: ["Rudeness", "Vulgarity"],
        derivatives: ["Urban"]
      },
      {
        word: "Usurp",
        definition: "Take (a position of power or importance) illegally or by force.",
        example: "The general was accused of trying to usurp the king's power after the recent crisis.",
        synonyms: ["Seize", "Capture", "Commandeer"],
        antonyms: ["Surrender", "Yield", "Relinquish"],
        derivatives: ["Usurper"]
      },
      {
        word: "Vacillate",
        definition: "Alternate or waver between different opinions or actions; be indecisive.",
        example: "He tended to vacillate and often found it difficult to make important and successfully good decisions.",
        synonyms: ["Waver", "Hesitate", "Be indecisive"],
        antonyms: ["Be resolute", "Decide", "Face"],
        derivatives: ["Vacillation"]
      },
      {
        word: "Valedictory",
        definition: "Serving as a farewell.",
        example: "The senior student delivered a moving valedictory address at the funeral service.",
        synonyms: ["Farewell", "Concluding", "Final"],
        antonyms: ["Introductory", "Initial"],
        derivatives: []
      },
      {
        word: "Vapid",
        definition: "Offering nothing that is stimulating or challenging.",
        example: "The book's vapid plot was criticized by several serious critics throughout the night.",
        synonyms: ["Dull", "Boring", "Uninspiring"],
        antonyms: ["Exciting", "Inspirational", "Animated"],
        derivatives: ["Vapidity"]
      },
      {
        word: "Variegated",
        definition: "Exhibiting different colors, especially as irregular patches or streaks.",
        example: "The island's variegated landscape was admired by several famous artists and writers.",
        synonyms: ["Mixed", "Multicolor", "Patched"],
        antonyms: ["Uniform", "Homogeneous"],
        derivatives: ["Variegation"]
      },
      {
        word: "Vaunt",
        definition: "Boast about or praise (something), especially excessively.",
        example: "He began to vaunt his latest and successfully good achievements throughout the night.",
        synonyms: ["Boast", "Brag", "Praise"],
        antonyms: ["Humility", "Modesty", "Hide"],
        derivatives: []
      },
      {
        word: "Venal",
        definition: "Showing or motivated by susceptibility to bribery.",
        example: "The country was run by a corrupt and venal oligarchy for several decades.",
        synonyms: ["Corrupt", "Dishonest", "Greedy"],
        antonyms: ["Honest", "Pure", "Genuine"],
        derivatives: ["Venality"]
      }
    ]
  },
  {
    id: "barron-89",
    title: "Barron Block 89: Power & Action",
    words: [
      {
        word: "Venerate",
        definition: "Regard with great respect; revere.",
        example: "Ancient tribes would venerate several of their dead leaders as gods for many years.",
        synonyms: ["Revere", "Respect", "Adore"],
        antonyms: ["Despise", "Hate", "Abuse"],
        derivatives: ["Veneration"]
      },
      {
        word: "Veracity",
        definition: "Conformity to facts; accuracy.",
        example: "There is not a scintilla of truth in the suspect's latest and successfully good claims.",
        synonyms: ["Truth", "Accuracy", "Honesty"],
        antonyms: ["Dishonesty", "Lying", "Falsehood"],
        derivatives: ["Veracious"]
      },
      {
        word: "Verbiage",
        definition: "Speech or writing that uses too many words or excessively technical expressions.",
        example: "The professor's book was full of unnecessary and repetitive verbiage and jargon.",
        synonyms: ["Wordiness", "Pleonasm", "Verbosity"],
        antonyms: ["Conciseness", "Succinctness"],
        derivatives: []
      },
      {
        word: "Verbose",
        definition: "Using or containing too many words.",
        example: "The lawyer's verbose argument confused several members of the jury throughout the trial.",
        synonyms: ["Wordy", "Prolix", "Garrulous"],
        antonyms: ["Concise", "Brief", "Succinct"],
        derivatives: ["Verbosity"]
      },
      {
        word: "Verisimilitude",
        definition: "The appearance of being true or real.",
        example: "The actor's performance was admired for its great verisimilitude and natural feel.",
        synonyms: ["Reality", "Truth", "Likelihood"],
        antonyms: ["Falsehood", "Fake"],
        derivatives: ["Verisimilar"]
      },
      {
        word: "Veritable",
        definition: "Used as an intensifier, often to qualify a metaphor.",
        example: "The city was a veritable oasis for travelers crossing the long and cold winter.",
        synonyms: ["Real", "True", "Authentic"],
        antonyms: ["Fake", "False", "Mock"],
        derivatives: []
      },
      {
        word: "Vernacular",
        definition: "The language or dialect spoken by the ordinary people in a particular country or region.",
        example: "The senator's speech was full of empty rhetoric and jargon instead of simple vernacular.",
        synonyms: ["Dialect", "Language", "Tongue"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Vertex",
        definition: "The highest point; the top or apex.",
        example: "The climbers finally reached the vertex of the mountain after many hours of struggle.",
        synonyms: ["Apex", "Top", "Summit"],
        antonyms: ["Base", "Bottom", "Nadir"],
        derivatives: []
      },
      {
        word: "Vestige",
        definition: "A trace of something that is disappearing or no longer exists.",
        example: "The island remained a vestige of the ancient world with its rustic and fine charm.",
        synonyms: ["Trace", "Remnant", "Sign"],
        antonyms: [],
        derivatives: ["Vestigial"]
      },
      {
        word: "Vex",
        definition: "Make (someone) feel annoyed, frustrated, or worried, especially with trivial matters.",
        example: "He began to vex his neighbors with his latest and successfully good and loud music.",
        synonyms: ["Annoy", "Frustrate", "Worry"],
        antonyms: ["Soothe", "Calm", "Appease"],
        derivatives: ["Vexation"]
      }
    ]
  },
  {
    id: "barron-90",
    title: "Barron Block 90: Scope & State",
    words: [
      {
        word: "Viable",
        definition: "Capable of working successfully; feasible.",
        example: "The latest and successfully good economic policy was seen as a viable solution for the region.",
        synonyms: ["Feasible", "Workable", "Practical"],
        antonyms: ["Infeasible", "Impossible", "Impractical"],
        derivatives: ["Viability"]
      },
      {
        word: "Vicissitude",
        definition: "A change of circumstances or fortune, typically one that is unwelcome or unpleasant.",
        example: "The company was affected by several vicissitudes of the market throughout the crisis.",
        synonyms: ["Change", "Shift", "Mutation"],
        antonyms: ["Stability", "Invariance"],
        derivatives: []
      },
      {
        word: "Vignette",
        definition: "A brief evocative description, account, or episode.",
        example: "The city was full of beautiful vignettes that reflected its ancient and rustic charm.",
        synonyms: ["Description", "Account", "Story"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Vilify",
        definition: "Speak or write about in an abusively disparaging manner.",
        example: "The politician was often vilified by the media for his controversial and secret views.",
        synonyms: ["Attack", "Abuse", "Slander"],
        antonyms: ["Praise", "Extol"],
        derivatives: ["Vilification"]
      },
      {
        word: "Vindicated",
        definition: "Clear (someone) of blame or suspicion.",
        example: "The suspect was later vindicated by several independent witnesses during the trial.",
        synonyms: ["Exonerate", "Absolve", "Clear"],
        antonyms: ["Blame", "Condemn", "Sentence"],
        derivatives: ["Vindication"]
      },
      {
        word: "Virulent",
        definition: "(of a disease or poison) extremely severe or harmful in its effects.",
        example: "The area experienced several virulent outbreaks of the latest and successfully good disease.",
        synonyms: ["Harsh", "Lethal", "Toxic"],
        antonyms: ["Harmless", "Safe", "Healthy"],
        derivatives: ["Virulence"]
      },
      {
        word: "Visceral",
        definition: "Relating to deep inward feelings rather than to the intellect.",
        example: "She had a sudden visceral reaction and decided not to enter the dark building.",
        synonyms: ["Instinctive", "Natural"],
        antonyms: ["Intellectual", "Logical"],
        derivatives: []
      },
      {
        word: "Viscous",
        definition: "Having a thick, sticky consistency between solid and liquid; having a high viscosity.",
        example: "The honey has a thick and viscous nature that reflects its high and fine quality.",
        synonyms: ["Sticky", "Thick", "Syrupy"],
        antonyms: ["Thin", "Liquid", "Watery"],
        derivatives: ["Viscosity"]
      },
      {
        word: "Vitiate",
        definition: "Spoil or impair the quality or efficiency of.",
        example: "The latest and successfully good study served to vitiate several previously held theories.",
        synonyms: ["Spoil", "Impair", "Corrupt"],
        antonyms: ["Improve", "Better"],
        derivatives: []
      },
      {
        word: "Vituperation",
        definition: "Bitter and abusive language.",
        example: "The politician faced a wave of vituperation from several serious news groups.",
        synonyms: ["Abuse", "Attack", "Rancor"],
        antonyms: ["Praise", "Admire", "Respect"],
        derivatives: ["Vituperative"]
      }
    ]
  },
  {
    id: "barron-91",
    title: "Barron Block 91: Nature & Growth",
    words: [
      {
        word: "Vivacious",
        definition: "(especially of a woman) attractively lively and animated.",
        example: "She was a vivacious person who always lit up the room with her and fine energy.",
        synonyms: ["Lively", "Animated", "Spirited"],
        antonyms: ["Dull", "Boring", "Spiritless"],
        derivatives: ["Vivacity"]
      },
      {
        word: "Vociferous",
        definition: "(especially of a person or speech) vehement or clamorous.",
        example: "The suspect's vociferous protestations of innocence were ignored by the jury.",
        synonyms: ["Loud", "Clamorous", "Vehement"],
        antonyms: ["Quiet", "Silent", "Soft"],
        derivatives: []
      },
      {
        word: "Volatile",
        definition: "(of a substance) easily evaporated at normal temperatures.",
        example: "The local economy remained volatile throughout the entire and important crisis.",
        synonyms: ["Unstable", "Fickle", "Variable"],
        antonyms: ["Stable", "Constant", "Steady"],
        derivatives: ["Volatility"]
      },
      {
        word: "Voluble",
        definition: "(of a person) talking fluently, readily, or incessantly.",
        example: "The host was a voluble person who kept the guests entertained throughout the night.",
        synonyms: ["Talkative", "Garrulous", "Loquacious"],
        antonyms: ["Taciturn", "Silent", "Reserved"],
        derivatives: ["Volubility"]
      },
      {
        word: "Voracious",
        definition: "Wanting or devouring great quantities of food.",
        example: "The boy had a voracious appetite and could eat several large meals in one sitting.",
        synonyms: ["Greedy", "Insatiable", "Hungry"],
        antonyms: ["Satiated", "Full"],
        derivatives: ["Voracity"]
      },
      {
        word: "Waffle",
        definition: "Speak or write, especially at great length, without giving any useful information or making any clear decision.",
        example: "He tended to waffle and often found it difficult to make important and successfully good decisions.",
        synonyms: ["Babble", "Jabber"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Waft",
        definition: "Pass or cause to pass easily or gently through or as if through the air.",
        example: "The scent of flowers began to waft through the open window throughout the night.",
        synonyms: ["Drift", "Float", "Blow"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Waggish",
        definition: "Humorous in a playful, mischievous, or facetious manner.",
        example: "The professor's waggish humor made the students enjoy several of the lessons.",
        synonyms: ["Humorous", "Playful", "Jocular"],
        antonyms: ["Serious", "Grave", "Solemn"],
        derivatives: ["Wag"]
      },
      {
        word: "Waive",
        definition: "Do without or cease to hold or adhere to.",
        example: "Several countries have moved to waive various financial requirements for the crisis.",
        synonyms: ["Relinquish", "Surrender", "Yield"],
        antonyms: ["Keep", "Maintain", "Hold"],
        derivatives: ["Waiver"]
      },
      {
        word: "Wallow",
        definition: "(chiefly of large mammals) roll about or lie in mud or water, especially to keep cool, avoid insects, or spread scent.",
        example: "The suspect spent several years to wallow in self-pity after the recent crisis.",
        synonyms: ["Indulge", "Bask", "Relish"],
        antonyms: [],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-92",
    title: "Barron Block 92: State & Action",
    words: [
      {
        word: "Wan",
        definition: "(of a person's complexion or appearance) pale and giving the impression of illness or exhaustion.",
        example: "She appeared wan and tired after the long and difficult journey across the mountain.",
        synonyms: ["Pale", "Weak", "Faint"],
        antonyms: ["Bright", "Healthy", "Strong"],
        derivatives: []
      },
      {
        word: "Wane",
        definition: "(of the moon) have a progressively smaller part of its visible surface illuminated, so that it appears to decrease in size.",
        example: "The company's influence began to wane after the latest and controversial news.",
        synonyms: ["Decline", "Diminish", "Sink"],
        antonyms: ["Increase", "Rise", "Grow"],
        derivatives: []
      },
      {
        word: "Wanton",
        definition: "(of a cruel or violent action) deliberate and unprovoked.",
        example: "The suspicious were accused of several acts of wanton violence throughout the night.",
        synonyms: ["Malicious", "Cruel", "Wasteful"],
        antonyms: ["Justified", "Reasonable", "Pure"],
        derivatives: []
      },
      {
        word: "Warranted",
        definition: "Justify or necessitate (a certain course of action).",
        example: "The senator's decision was warranted by the latest and successfully good news info.",
        synonyms: ["Justified", "Confirmed", "Proven"],
        antonyms: ["Unwarranted", "False", "Wrong"],
        derivatives: ["Warrant"]
      },
      {
        word: "Wary",
        definition: "Feeling or showing caution about possible dangers or problems.",
        example: "The reporter was wary of the suspect's latest and successfully good claims about the event.",
        synonyms: ["Cautious", "Careful", "Alert"],
        antonyms: ["Careless", "Negligent", "Unwary"],
        derivatives: ["Wariness"]
      },
      {
        word: "Wastrel",
        definition: "A person who wastes money, opportunities, a good-for-nothing.",
        example: "He was a wastrel who frequently wasted several thousands of dollars on luxury items.",
        synonyms: ["Spendthrift", "Profligate", "Waster"],
        antonyms: ["Miser", "Saver", "Frugal"],
        derivatives: []
      },
      {
        word: "Wax",
        definition: "(of the moon) have a progressively larger part of its visible surface illuminated, so that it appears to increase in size.",
        example: "The influence of the new technology served to wax throughout the entire year.",
        synonyms: ["Increase", "Rise", "Expand"],
        antonyms: ["Wane", "Decline", "Decrease"],
        derivatives: []
      },
      {
        word: "Waylay",
        definition: "Stop or interrupt (someone) and detain them in conversation or trouble them in some other way.",
        example: "Several reporters began to waylay the politician as he entered the building.",
        synonyms: ["Intercept", "Ambush", "Check"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Wean",
        definition: "Accustom (an infant or other young mammal) to food other than its mother's milk.",
        example: "The mother began to wean the child onto solid and fine food throughout the year.",
        synonyms: ["Detach"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Welter",
        definition: "A large number of items in no order; a confused mass.",
        example: "The reporter's story was lost in a welter of irrelevant and false info.",
        synonyms: ["Mess", "Jumble", "Confusion"],
        antonyms: ["Order", "System"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-93",
    title: "Barron Block 93: Nature & Vision",
    words: [
      {
        word: "Wheedle",
        definition: "Employ endearments or flattery to persuade someone to do something or give one something.",
        example: "She tried to wheedle several favors from her wealthy and successfully good neighbors.",
        synonyms: ["Coax", "Cajole", "Flatter"],
        antonyms: ["Force", "Compel"],
        derivatives: []
      },
      {
        word: "Whelp",
        definition: "A puppy or cub.",
        example: "The mother dog watched over her young whelps throughout the long and cold night.",
        synonyms: ["Puppy", "Cub", "Offspring"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Whet",
        definition: "Sharpen the blade of (a tool or weapon).",
        example: "The delicious scent of food served to whet his appetite throughout the entire day.",
        synonyms: ["Sharpen", "Stimulate", "Excite"],
        antonyms: ["Dull", "Blunt"],
        derivatives: []
      },
      {
        word: "Whimsical",
        definition: "Playfully quaint or fanciful, especially in an appealing and amusing way.",
        example: "The movie's whimsical tone was admired by several famous artists and writers.",
        synonyms: ["Playful", "Quaint", "Capricious"],
        antonyms: ["Serious", "Grave", "Normal"],
        derivatives: ["Whimsy"]
      },
      {
        word: "Whinny",
        definition: "A gentle, high-pitched neigh.",
        example: "The horse gave a gentle whinny as its owner entered the abandoned stable.",
        synonyms: ["Neigh"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Whitewash",
        definition: "A solution of lime and water or of whiting, size, and water, used for painting walls white.",
        example: "The government was accused of trying to whitewash the latest and successfully good scandal.",
        synonyms: ["Cover-up", "Hide"],
        antonyms: ["Reveal", "Expose"],
        derivatives: []
      },
      {
        word: "Whorl",
        definition: "A pattern of spirals or concentric circles.",
        example: "The ancient stone had a beautiful whorl pattern that reflected its rustic history.",
        synonyms: ["Spiral", "Circle", "Twist"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Willful",
        definition: "(of an immoral or illegal act or omission) intentional; deliberate.",
        example: "The suspicious were accused of several acts of willful destruction throughout the trial.",
        synonyms: ["Deliberate", "Intentional", "Stubborn"],
        antonyms: ["Accidental", "Unintentional", "Yielding"],
        derivatives: []
      },
      {
        word: "Wily",
        definition: "Skilled at gaining an advantage, especially deceitfully.",
        example: "He was a wily politician who correctly predicted several major market trends.",
        synonyms: ["Cunning", "Shrewd", "Sly"],
        antonyms: ["Naïve", "Honest", "Simple"],
        derivatives: ["Wiliness"]
      },
      {
        word: "Winsome",
        definition: "Attractive or appealing in appearance or character.",
        example: "She had a winsome smile that captivated everyone who knew her throughout her life.",
        synonyms: ["Attractive", "Appealing", "Kind"],
        antonyms: ["Repulsive", "Ugly", "Hostile"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-94",
    title: "Barron Block 94: Nature & Action",
    words: [
      {
        word: "Wispy",
        definition: "(of hair, clouds, or smoke) fine; feathery.",
        example: "The sky was filled with beautiful and fine wispy clouds throughout the entire day.",
        synonyms: ["Thin", "Fine", "Feathery"],
        antonyms: ["Thick", "Solid", "Heavy"],
        derivatives: ["Wisp"]
      },
      {
        word: "Wistful",
        definition: "Having or showing a feeling of vague or regretful longing.",
        example: "She had a wistful expression as she remembered her ancient and rustic childhood home.",
        synonyms: ["Longing", "Pensive", "Regretful"],
        antonyms: ["Happy", "Joyful", "Content"],
        derivatives: ["Wistfully"]
      },
      {
        word: "Wizened",
        definition: "Shriveled or wrinkled with age.",
        example: "He was an ancient and wizened person who had lived through several major wars.",
        synonyms: ["Shriveled", "Wrinkled", "Old"],
        antonyms: ["Young", "Fresh", "Smooth"],
        derivatives: []
      },
      {
        word: "Wont",
        definition: "(of a person) in the habit of doing something; accustomed.",
        example: "He was wont to take a long walk in the mountain throughout the hot summer months.",
        synonyms: ["Accustomed", "Habit", "Used"],
        antonyms: ["Unaccustomed", "New"],
        derivatives: []
      },
      {
        word: "Worldly",
        definition: "(of a person) experienced and sophisticated.",
        example: "He was a worldly person who had traveled to several of the world's most famous cities.",
        synonyms: ["Sophisticated", "Experienced", "Earthly"],
        antonyms: ["Naïve", "Ignorant", "Spiritual"],
        derivatives: ["Worldliness"]
      },
      {
        word: "Wraith",
        definition: "A ghost or ghostlike image of someone, especially one seen shortly before or after their death.",
        example: "The suspects claimed to have seen a wraith in the abandoned and dark building.",
        synonyms: ["Ghost", "Spirit", "Phantom"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Wrangle",
        definition: "A dispute or argument, typically one that is long and complicated.",
        example: "Several countries have moved to wrangle over various financial activities during the crisis.",
        synonyms: ["Argue", "Dispute", "Clash"],
        antonyms: ["Agree", "Unite"],
        derivatives: ["Wrangler"]
      },
      {
        word: "Wrath",
        definition: "Extreme anger (chiefly used for humorous or rhetorical effect).",
        example: "The suspects feared the king's wrath after their controversial and secret actions.",
        synonyms: ["Anger", "Rage", "Fury"],
        antonyms: ["Calm", "Peace", "Love"],
        derivatives: ["Wrathful"]
      },
      {
        word: "Wreak",
        definition: "Cause (a large amount of damage or harm).",
        example: "The storm served to wreak havoc throughout the island and its rustic charm.",
        synonyms: ["Inflict", "Cause", "Create"],
        antonyms: ["Repair", "Better"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-95",
    title: "Barron Block 95: Scope & Vision (Final)",
    words: [
      {
        word: "Wrest",
        definition: "Forcibly pull (something) from a person's grasp.",
        example: "The investigator managed to wrest the weapon from the suspect's hand during the run.",
        synonyms: ["Seize", "Capture", "Take"],
        antonyms: ["Give", "Surrender", "Yield"],
        derivatives: []
      },
      {
        word: "Writhe",
        definition: "Make continual twisting, squirming movements or contortions of the body.",
        example: "The patient began to writhe in pain as the surgery became more difficult.",
        synonyms: ["Squirm", "Twist", "Suffer"],
        antonyms: ["Stay", "Stationary"],
        derivatives: []
      },
      {
        word: "Xenophobia",
        definition: "Dislike of or prejudice against people from other countries.",
        example: "Several countries have moved to xenophobia during the long and difficult war.",
        synonyms: ["Intolerance", "Racism", "Bias"],
        antonyms: ["Tolerance", "Acceptance"],
        derivatives: ["Xenophobic"]
      },
      {
        word: "Yearn",
        definition: "Have an intense feeling of longing for something, typically something that one has lost or been separated from.",
        example: "The prisoners began to yearn for their freedom throughout the long years.",
        synonyms: ["Long", "Crave", "Desire"],
        antonyms: ["Dislike", "Ignore"],
        derivatives: ["Yearning"]
      },
      {
        word: "Yield",
        definition: "Produce or provide (a natural, agricultural, or industrial product).",
        example: "The project's latest and successfully good results will yield many benefits for the region.",
        synonyms: ["Produce", "Result", "Surrender"],
        antonyms: ["Withhold", "Stay", "Resist"],
        derivatives: []
      },
      {
        word: "Yoke",
        definition: "A wooden crosspiece that is fastened over the necks of two animals and attached to the plow or cart that they are to pull.",
        example: "The suspicious were accused of several acts of yoke against the government throughout the day.",
        synonyms: ["Bind", "Link", "Connect"],
        antonyms: ["Free", "Separate"],
        derivatives: []
      },
      {
        word: "Yokel",
        definition: "An uneducated and unsophisticated person from the countryside.",
        example: "He was seen as a yokel who knew nothing about the world's most famous cities.",
        synonyms: ["Peasant", "Bumpkin", "Rustic"],
        antonyms: ["Sophisticated", "Urban", "Master"],
        derivatives: []
      },
      {
        word: "Zeal",
        definition: "Great energy or enthusiasm in pursuit of a cause or an objective.",
        example: "She approached the project with great zeal and energy throughout the entire year.",
        synonyms: ["Energy", "Enthusiasm", "Passion"],
        antonyms: ["Apathy", "Indifference", "Laziness"],
        derivatives: ["Zealous"]
      },
      {
        word: "Zealot",
        definition: "A person who is fanatical and uncompromising in pursuit of their religious, political, or other ideals.",
        example: "He was seen as a zealot who would do anything to achieve his and fine goals.",
        synonyms: ["Fanatic", "Enthusiast", "Radical"],
        antonyms: ["Moderate", "Skeptic"],
        derivatives: []
      },
      {
        word: "Zenith",
        definition: "The time at which something is most powerful or successful.",
        example: "The empire reached its zenith during the reign of the ancient king.",
        synonyms: ["Apex", "Peak", "Summit"],
        antonyms: ["Nadir", "Base", "Bottom"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-96",
    title: "Barron Block 96: Natural Phenomena",
    words: [
      {
        word: "Zephyr",
        definition: "A soft gentle breeze.",
        example: "A gentle zephyr cooled the face of the weary traveler.",
        synonyms: ["Breeze", "Draft"],
        antonyms: ["Gale", "Storm"],
        derivatives: []
      },
      {
        word: "Ziggurat",
        definition: "A rectangular stepped tower, sometimes surmounted by a temple.",
        example: "The ancient city was dominated by a massive ziggurat dedicated to the moon god.",
        synonyms: ["Tower", "Pyramid"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Abyssal",
        definition: "Relating to the depths of the ocean.",
        example: "Strange creatures live in the abyssal zone where sunlight never reaches.",
        synonyms: ["Deep", "Profound"],
        antonyms: ["Shallow"],
        derivatives: ["Abyss"]
      },
      {
        word: "Aeon",
        definition: "An indefinitely long period of time; an age.",
        example: "It seemed like aeons before the results were finally announced.",
        synonyms: ["Epoch", "Era", "Age"],
        antonyms: ["Moment", "Instant"],
        derivatives: []
      },
      {
        word: "Aesthete",
        definition: "A person who has or affects to have a special appreciation of art and beauty.",
        example: "As an aesthete, he spent all his money on fine paintings and rare books.",
        synonyms: ["Connoisseur", "Dilettante"],
        antonyms: ["Philistine"],
        derivatives: ["Aesthetic"]
      },
      {
        word: "Affinity",
        definition: "A spontaneous or natural liking or sympathy for someone or something.",
        example: "He has a natural affinity for languages and spoke five fluently.",
        synonyms: ["Liking", "Similitude", "Rapport"],
        antonyms: ["Aversion", "Dislike"],
        derivatives: []
      },
      {
        word: "Agog",
        definition: "Very eager or curious to hear or see something.",
        example: "The children were all agog with excitement as they waited for the show to start.",
        synonyms: ["Excited", "Eager", "Anxious"],
        antonyms: ["Indifferent", "Bored"],
        derivatives: []
      },
      {
        word: "Alacrity",
        definition: "Brisk and cheerful readiness.",
        example: "She accepted the invitation with alacrity, eager to meet her old friends.",
        synonyms: ["Eagerness", "Willingness", "Speed"],
        antonyms: ["Lethargy", "Reluctance"],
        derivatives: []
      },
      {
        word: "Alchemy",
        definition: "The medieval forerunner of chemistry; a seemingly magical process of transformation.",
        example: "The writer's alchemy turned the dull facts into a gripping story.",
        synonyms: ["Magic", "Transformation"],
        antonyms: [],
        derivatives: ["Alchemist"]
      },
      {
        word: "Amulet",
        definition: "An ornament or small piece of jewelry thought to give protection against evil, danger, or disease.",
        example: "She wore a small silver amulet around her neck for good luck.",
        synonyms: ["Talisman", "Charm"],
        antonyms: [],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-97",
    title: "Barron Block 97: Human Traits",
    words: [
      {
        word: "Anachronism",
        definition: "A thing belonging or appropriate to a period other than that in which it exists.",
        example: "The use of a typewriter in a modern office is an anachronism.",
        synonyms: ["Misplacement", "Solecism"],
        antonyms: [],
        derivatives: ["Anachronistic"]
      },
      {
        word: "Anathema",
        definition: "Something or someone that one vehemently dislikes.",
        example: "To many people, the idea of animal testing is anathema.",
        synonyms: ["Abhorrence", "Abomination"],
        antonyms: ["Blessing", "Beloved"],
        derivatives: []
      },
      {
        word: "Ancillary",
        definition: "Providing necessary support to the primary activities or operation of an organization.",
        example: "The main course is supplemented by several ancillary workshops.",
        synonyms: ["Auxiliary", "Supporting", "Subsidiary"],
        antonyms: ["Central", "Primary"],
        derivatives: []
      },
      {
        word: "Animus",
        definition: "Hostility or ill feeling.",
        example: "There is no personal animus between the two rival candidates.",
        synonyms: ["Enmity", "Hostility", "Rancor"],
        antonyms: ["Goodwill", "Friendship"],
        derivatives: []
      },
      {
        word: "Annals",
        definition: "A record of events year by year.",
        example: "The discovery is recorded in the annals of medical history.",
        synonyms: ["Chronicles", "Archives", "Records"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Antediluvian",
        definition: "Of or belonging to the time before the biblical Flood; ridiculously old-fashioned.",
        example: "My grandfather has some antediluvian ideas about how women should behave.",
        synonyms: ["Prehistoric", "Primeval", "Ancient"],
        antonyms: ["Modern", "Contemporary"],
        derivatives: []
      },
      {
        word: "Apex",
        definition: "The top or highest part of something, especially one forming a point.",
        example: "The climber stood at the apex of the mountain, surveying the view.",
        synonyms: ["Peak", "Summit", "Zenith"],
        antonyms: ["Nadir", "Bottom"],
        derivatives: []
      },
      {
        word: "Aphorism",
        definition: "A pithy observation that contains a general truth.",
        example: "The old aphorism 'haste makes waste' still rings true today.",
        synonyms: ["Maxim", "Adage", "Proverb"],
        antonyms: [],
        derivatives: ["Aphoristic"]
      },
      {
        word: "Apogee",
        definition: "The highest point in the development of something; the climax.",
        example: "The Roman Empire was at its apogee during the first and second centuries.",
        synonyms: ["Climax", "Peak", "Zenith"],
        antonyms: ["Perigee", "Nadir"],
        derivatives: []
      },
      {
        word: "Apostate",
        definition: "A person who renounces a religious or political belief or principle.",
        example: "After leaving the party, he was branded an apostate by his former colleagues.",
        synonyms: ["Renegade", "Defector", "Traitor"],
        antonyms: ["Believer", "Loyalist"],
        derivatives: ["Apostasy"]
      }
    ]
  },
  {
    id: "barron-98",
    title: "Barron Block 98: Communication & Interaction",
    words: [
      {
        word: "Apotheosis",
        definition: "The highest point in the development of something; culmination or climax.",
        example: "His appearance as Hamlet was the apotheosis of his acting career.",
        synonyms: ["Deification", "Glorification", "Climax"],
        antonyms: ["Demotion"],
        derivatives: []
      },
      {
        word: "Appellation",
        definition: "A name or title.",
        example: "The project was given the appellation 'Operation Sandstorm'.",
        synonyms: ["Name", "Title", "Designation"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Apposite",
        definition: "Apt in the circumstances or in relation to something.",
        example: "The speaker's comments were apposite to the theme of the conference.",
        synonyms: ["Appropriate", "Relevant", "Fitting"],
        antonyms: ["Inappropriate", "Irrelevant"],
        derivatives: []
      },
      {
        word: "Aquiline",
        definition: "Like an eagle; (of a person's nose) curved like an eagle's beak.",
        example: "He was a tall man with a prominent aquiline nose.",
        synonyms: ["Curved", "Hooked"],
        antonyms: ["Flat"],
        derivatives: []
      },
      {
        word: "Arbiter",
        definition: "A person who settles a dispute or has ultimate authority in a matter.",
        example: "The court serves as the final arbiter of constitutional law.",
        synonyms: ["Judge", "Referee", "Mediator"],
        antonyms: [],
        derivatives: ["Arbitrate"]
      },
      {
        word: "Arcane",
        definition: "Understood by few; mysterious or secret.",
        example: "The professor had an arcane knowledge of obscure medieval texts.",
        synonyms: ["Mysterious", "Secret", "Esoteric"],
        antonyms: ["Common", "Known"],
        derivatives: []
      },
      {
        word: "Archetype",
        definition: "A very typical example of a certain person or thing.",
        example: "The hero in the story is the archetype of the brave warrior.",
        synonyms: ["Prototype", "Model", "Exemplar"],
        antonyms: [],
        derivatives: ["Archetypal"]
      },
      {
        word: "Ardor",
        definition: "Enthusiasm or passion.",
        example: "They approach their work with great ardor and dedication.",
        synonyms: ["Passion", "Intensity", "Zeal"],
        antonyms: ["Indifference", "Apathy"],
        derivatives: ["Ardent"]
      },
      {
        word: "Argot",
        definition: "The jargon or slang of a particular group or class.",
        example: "In the argot of teen slang, 'lit' means exciting or excellent.",
        synonyms: ["Jargon", "Slang", "Lingo"],
        antonyms: ["Standard language"],
        derivatives: []
      },
      {
        word: "Arrant",
        definition: "Complete, utter.",
        example: "What you're saying is nothing but arrant nonsense.",
        synonyms: ["Utter", "Absolute", "Complete"],
        antonyms: ["Mild", "Slight"],
        derivatives: []
      }
    ]
  },
  {
    id: "barron-99",
    title: "Barron Block 99: Social Structures",
    words: [
      {
        word: "Ascetic",
        definition: "Characterized by the practice of severe self-discipline and abstention from all forms of indulgence.",
        example: "The monk led an ascetic life of prayer and fasting.",
        synonyms: ["Austere", "Spartan", "Abstinent"],
        antonyms: ["Hedonistic", "Sybaritic"],
        derivatives: ["Asceticism"]
      },
      {
        word: "Asperity",
        definition: "Harshness of tone or manner.",
        example: "The manager spoke with some asperity when he saw the mistakes.",
        synonyms: ["Harshness", "Sharpness", "Abrasiveness"],
        antonyms: ["Gentleness", "Kindness"],
        derivatives: []
      },
      {
        word: "Assiduous",
        definition: "Showing great care and perseverance.",
        example: "The student was assiduous in her studies and topped the class.",
        synonyms: ["Diligent", "Meticulous", "Thorough"],
        antonyms: ["Lazy", "Negligent"],
        derivatives: ["Assiduity"]
      },
      {
        word: "Assuage",
        definition: "Make an unpleasant feeling less intense.",
        example: "The government tried to assuage the public's fears about the economy.",
        synonyms: ["Relieve", "Ease", "Alleviate"],
        antonyms: ["Aggravate", "Exacerbate"],
        derivatives: []
      },
      {
        word: "Atavism",
        definition: "A tendency to revert to something ancient or ancestral.",
        example: "The resurgence of tribalism is seen as a form of atavism.",
        synonyms: ["Reversion", "Regression"],
        antonyms: ["Evolution", "Progression"],
        derivatives: ["Atavistic"]
      },
      {
        word: "Atrophy",
        definition: "(of body tissue or an organ) waste away, especially as a result of degeneration.",
        example: "The doctor noted that the muscles in his legs had begun to atrophy.",
        synonyms: ["Waste", "Decline", "Wither"],
        antonyms: ["Grow", "Strengthen"],
        derivatives: []
      },
      {
        word: "Augury",
        definition: "A sign of what will happen in the future; an omen.",
        example: "The dark clouds were seen as an augury of the coming storm.",
        synonyms: ["Omen", "Portent", "Sign"],
        antonyms: [],
        derivatives: ["Augur"]
      },
      {
        word: "August",
        definition: "Respected and impressive.",
        example: "The august institution was founded over three hundred years ago.",
        synonyms: ["Grand", "Imperial", "Noble"],
        antonyms: ["Humble", "Common"],
        derivatives: []
      },
      {
        word: "Auschwitz",
        definition: "A place associated with extreme suffering or destruction (often used metaphorically).",
        example: "The survivors spoke of the horrors they witnessed at Auschwitz.",
        synonyms: ["Holocaust", "Hell"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Auspicious",
        definition: "Conducive to success; favorable.",
        example: "The sunny weather was an auspicious start to the outdoor wedding.",
        synonyms: ["Favorable", "Promising", "Propitious"],
        antonyms: ["Inauspicious", "Unfavorable"],
        derivatives: ["Auspices"]
      }
    ]
  },
  {
    id: "barron-100",
    title: "Barron Block 100: Culmination",
    words: [
      {
        word: "Austere",
        definition: "Severe or strict in manner, attitude, or appearance.",
        example: "The judge had an austere face that made the witnesses nervous.",
        synonyms: ["Strict", "Stern", "Ascetic"],
        antonyms: ["Lenient", "Indulgent"],
        derivatives: ["Austerity"]
      },
      {
        word: "Avarice",
        definition: "Extreme greed for wealth or material gain.",
        example: "The king was driven by an unquenchable avarice for gold.",
        synonyms: ["Greed", "Cupidity", "Rapacity"],
        antonyms: ["Generosity", "Philanthropy"],
        derivatives: ["Avaricious"]
      },
      {
        word: "Aver",
        definition: "State or assert to be the case.",
        example: "The witness averred that he had seen the defendant at the scene.",
        synonyms: ["Assert", "Declare", "Claim"],
        antonyms: ["Deny", "Gainsay"],
        derivatives: []
      },
      {
        word: "Avuncular",
        definition: "Relating to an uncle; kind and friendly toward a younger person.",
        example: "He had an avuncular manner that made the students feel at ease.",
        synonyms: ["Friendly", "Kind", "Paternal"],
        antonyms: [],
        derivatives: []
      },
      {
        word: "Axiom",
        definition: "A statement or proposition that is regarded as being established, accepted, or self-evidently true.",
        example: "It is a basic axiom of geometry that the shortest distance between two points is a straight line.",
        synonyms: ["Maxim", "Principle", "Postulate"],
        antonyms: [],
        derivatives: ["Axiomatic"]
      },
      {
        word: "Badinage",
        definition: "Humorous or witty conversation.",
        example: "The two friends engaged in a playful badinage throughout the evening.",
        synonyms: ["Banter", "Repartee", "Chaff"],
        antonyms: ["Argue", "Dispute"],
        derivatives: []
      },
      {
        word: "Bale",
        definition: "Great evil, harm, or destruction.",
        example: "Relievers were used to ward off the bale of the coming winter.",
        synonyms: ["Woe", "Evil", "Misfortune"],
        antonyms: ["Benefit", "Good"],
        derivatives: ["Baleful"]
      },
      {
        word: "Balk",
        definition: "Hesitate or be unwilling to accept an idea or undertaking.",
        example: "The horse balked at the fence and refused to jump.",
        synonyms: ["Hesitate", "Resist", "Demur"],
        antonyms: ["Accept", "Assent"],
        derivatives: []
      },
      {
        word: "Batten",
        definition: "Thrive and prosper at the expense of another.",
        example: "The corrupt officials battened on the suffering of the poor.",
        synonyms: ["Thrive", "Flourish", "Fatten"],
        antonyms: ["Perish", "Decline"],
        derivatives: []
      },
      {
        word: "Beatify",
        definition: "Proclaim (a dead person) to be blessed.",
        example: "The pope decided to beatify the nun for her life of service to the poor.",
        synonyms: ["Bless", "Sanctify", "Consecrate"],
        antonyms: ["Curse", "Condemn"],
        derivatives: ["Beatification"]
      }
    ]
  }
];
