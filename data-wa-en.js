/* WASSCE (WAEC) — ENGLISH LANGUAGE.
   Transcribed from the official WAEC WASSCE syllabus PDF "ENGLISH_LANGUAGE.pdf".
   Liberia candidates take the TEST OF ORALS (with Nigeria) for Paper 3; the
   Ghana-only Paper 1 Part B literature questions are not set for Liberia. */
window.WA_en = {
  id: "wen",
  name: "ENGLISH LANGUAGE",
  preamble: "The examination tests the different basic skills of communicating in English using the mediums of speech and writing — the receptive and productive abilities of candidates: reading, comprehension, summary, vocabulary, lexis and structure, listening comprehension and recognition of different aspects of spoken English.",
  aims: [
    "Use correct English",
    "Write about incidents in English appropriate to specified audiences and situations",
    "Organize material in paragraphs that are chronologically, spatially and logically coherent",
    "Control sentence structures accurately and exhibit variety in sentence patterns",
    "Comply with the rules of grammar; spell and punctuate correctly",
    "Comprehend written and spoken English; recognize implied meaning, tones and attitudes",
    "Use an acceptable pronunciation that can be comprehended by others; recognize the physical characteristics of English sounds and the letters that represent them",
    "Pick out and summarize relevant information from set passages"
  ],
  papers: [
    { n: "Paper 1", d: "Eighty multiple-choice questions (forty lexis, forty structure), all to be answered within 1 hour for 40 marks. Each question has four options lettered A to D." },
    { n: "Paper 2", d: "A composite paper of 2 hours and 100 marks: Section A — Essay writing (50 marks, answer 1 of 5, minimum 450 words, 50 minutes); Section B — Comprehension (20 marks, a passage of at least 350 words, 30 minutes); Section C — Summary (30 marks, a passage of about 500 words, 40 minutes)." },
    { n: "Paper 3", d: "Test of Orals for candidates in Nigeria and Liberia (sixty multiple-choice questions on Orals, 45 minutes, 30 marks). Candidates in Ghana, The Gambia and Sierra Leone take a Listening Comprehension Test instead." }
  ],
  units: [
  /* =============== A · LEXIS =============== */
  {
    grade: 12, sem: "One", icon: "📖", period: "A",
    title: "Lexis (Vocabulary)",
    subtitle: "Everyday vocabulary · fields of human activity · idioms and collocations · figurative usage · sense relations",
    note: "Paper 1 sets forty lexis questions. Items test the use and understanding of vocabulary — synonyms, antonyms, homonyms, idioms and figurative usage — never bare dictionary definitions.",
    objectives: [
      "Use the general vocabulary of the fields of human activity listed in the syllabus",
      "Understand idioms and collocations whose meaning cannot be deduced from the dictionary meanings of their parts",
      "Recognize when an expression is used figuratively rather than literally",
      "Respond to sense relations: synonyms, antonyms and homonyms"
    ],
    terms: [
      { t: "Lexis", d: "The vocabulary of a language; in WASSCE it covers everyday usage plus the general vocabulary of sixteen fields of human activity.", x: "Terms of trade, surgery, navigation" },
      { t: "Idiom", d: "An idiomatic expression or collocation whose total meaning cannot be arrived at from the dictionary meanings of its words.", x: "'hook, line and sinker'; 'every Tom, Dick and Harry'" },
      { t: "Collocation", d: "A habitual pairing of words that native speakers accept as natural.", x: "make a decision (not *do a decision)" },
      { t: "Figurative usage", d: "Using language in a non-literal way — metaphor, simile, personification — as distinct from literal usage.", x: "'He has a heart of stone'" },
      { t: "Synonym", d: "A word having the same or nearly the same meaning as another in a given context.", x: "benevolent ≈ kind" },
      { t: "Antonym", d: "A word of opposite meaning.", x: "scarce — abundant" },
      { t: "Sense relation", d: "The way the meanings of words relate — synonyms, antonyms, homonyms — tested through use in context, not definitions.", x: "warm ≈ cosy; warm — cold" },
      { t: "Field of human activity", d: "The sixteen fields whose general vocabulary is examined (building, agriculture, fishing, stock exchange, health, and so on).", x: "Health: surgery, patient, stethoscope" },
      { t: "Register", d: "A variety of language suited to a particular setting — formal, informal or technical.", x: "Dear Sir (formal) vs Hiya (informal)" },
      { t: "Homonym", d: "Words that are spelt and/or pronounced alike but differ in meaning.", x: "bank (river) / bank (money)" }
    ],
    tf: [
      { s: "WASSCE lexis items test candidates on dictionary definitions and explanations.", a: "False", why: "All items are phrased to test the use and understanding of the required lexis, not dictionary definitions." },
      { s: "The term 'general vocabulary' excludes specialized words of a field, such as 'berm' or 'camber'.", a: "True", why: "Educated people should know 'pedestrian bridge' and 'traffic signs', but not the specialized 'berm' or 'camber'." },
      { s: "An idiom is best understood by adding up the dictionary meanings of its words.", a: "False", why: "The total meaning of an idiom cannot be arrived at from the dictionary meanings of the words in the structure in which they appear." },
      { s: "Homophones such as 'flower' and 'flour' fall under the sense relations tested in Paper 1.", a: "True", why: "The test covers synonyms, antonyms and homonyms — words spelt and/or pronounced alike but different in meaning." },
      { s: "In the test of figurative language, candidates recognize when an expression is used figuratively and not only when used literally.", a: "True", why: "Candidates are expected to recognize figurative as well as literal usage." }
    ],
    mcq: [
      { q: "Choose the word closest in meaning to 'benevolent':", o: ["cruel", "kind", "rich", "silent"], a: 1, why: "Benevolent means kind and generous — the other options (cruel, rich, silent) are unrelated or opposite in meaning." },
      { q: "Choose the word opposite in meaning to 'scarce':", o: ["rare", "plentiful", "fragile", "hidden"], a: 1, why: "Scarce = in short supply, so its opposite is abundant/plentiful; 'rare' is a synonym of scarce, not an antonym." },
      { q: "In the sentence 'The meeting ended in a fiasco', the word 'fiasco' means:", o: ["a great failure", "a celebration", "a small room", "a kind of food"], a: 0, why: "Fiasco = a complete, ludicrous failure: 'the meeting ended in a fiasco' tells us it collapsed badly." },
      { q: "'It costs an arm and a leg' is an example of:", o: ["a simile", "an idiom", "a proverb", "an aphorism"], a: 1, why: "The phrase is idiomatic — its meaning (very expensive) is not deducible from its words." },
      { q: "'The wind whispered through the trees' uses which figure of speech?", o: ["Simile", "Personification", "Hyperbole", "Metonymy"], a: 1, why: "The wind is given a human action (whispering) — personification." },
      { q: "Choose the word closest in meaning to 'reluctant':", o: ["willing", "unwilling", "proud", "eager"], a: 1, why: "Reluctant = unwilling, holding back; 'willing' and 'eager' are antonyms, 'proud' is unrelated." },
      { q: "'He is the black sheep of the family' means he is the:", o: ["wealthiest member", "disgrace or odd one out", "oldest member", "favourite member"], a: 1, why: "Idiomatic use: the black sheep is the disreputable or different member of a group." },
      { q: "Which pair contains a homophone?", o: ["flower / flour", "hot / cold", "big / small", "car / bus"], a: 0, why: "'Flower' and 'flour' sound alike but differ in meaning and spelling." },
      { q: "The collocation '___ a decision' is correctly completed with:", o: ["do", "make", "take", "give"], a: 1, why: "The accepted collocation is 'make a decision' — native usage pairs 'make' with 'decision', never 'do', 'take' or 'give'." },
      { q: "Choose the word closest in meaning to 'abundant':", o: ["scarce", "plentiful", "hidden", "meagre"], a: 1, why: "Abundant = existing in large quantities, so 'plentiful' is the closest synonym; 'scarce' is in fact its antonym." },
      { q: "Choose the word opposite in meaning to 'cruel':", o: ["harsh", "kind", "strict", "loud"], a: 1, why: "The antonym of cruel is kind (merciful); harsh and strict are close in meaning to cruel." },
      { q: "'To bury the hatchet' means to:", o: ["hide a weapon", "make peace after a quarrel", "dig the ground", "end a friendship"], a: 1, why: "The idiom means to stop quarrelling and become friendly again — the meaning is not deducible from 'bury' + 'hatchet'." },
      { q: "'He sowed seeds of hatred among us' is an example of:", o: ["literal usage", "figurative usage", "a homonym", "a collocation"], a: 1, why: "Hatred has no real seeds — the expression is used figuratively (metaphor), not literally." },
      { q: "'Pedestrian bridge' and 'traffic signs' belong to the general vocabulary of:", o: ["road transport", "health", "law and order", "sports"], a: 0, why: "These are everyday road-transport words known to most educated readers — unlike the specialized 'berm' or 'camber'." },
      { q: "Which pair contains homophones?", o: ["night / knight", "light / lamp", "right / wrong", "day / night"], a: 0, why: "'Night' and 'knight' are pronounced alike (/naɪt/) but differ in spelling and meaning." },
      { q: "The collocation '___ attention' is correctly completed with:", o: ["do", "pay", "make", "give"], a: 1, why: "The accepted collocation is 'pay attention', not *give attention." },
      { q: "'The minister gave a terse reply.' 'Terse' here means:", o: ["long and detailed", "brief and to the point", "rude and noisy", "friendly"], a: 1, why: "Terse = brief and to the point, often abruptly so — the quick ministerial reply in the sentence confirms it." },
      { q: "'Every Tom, Dick and Harry was admitted.' The phrase means:", o: ["three brothers were admitted", "everyone was admitted, without discrimination", "nobody was admitted", "only important people were admitted"], a: 1, why: "The idiom 'every Tom, Dick and Harry' means everybody — all sorts of people indiscriminately." },
      { q: "'The classroom was a zoo' is:", o: ["a simile", "a metaphor", "personification", "an allusion"], a: 1, why: "Metaphor — the classroom is said to BE a zoo, with no 'like' or 'as' (that would make it a simile)." },
      { q: "Choose the word closest in meaning to 'meticulous':", o: ["careless", "thorough and careful", "quick", "noisy"], a: 1, why: "Meticulous = showing great attention to detail; very careful and precise." },
      { q: "Vocabulary associated with 'stock exchange' falls under which field of the syllabus?", o: ["Health", "Government and administration", "Finance and commerce", "Sports"], a: 2, why: "Stock exchange, commerce, banking and insurance are financial/commercial fields of lexis." }
    ],
    essay: [
      { q: "In a passage of 350 words (provided at the examination), five words or phrases are underlined. Find appropriate equivalents for each from the passage itself, and use two of them in new sentences of your own.", marks: 10, outline: [
        "Locate the underlined words in context and find synonyms that fit that context",
        "Rewrite two of them in original sentences that show correct usage",
        "Marks are awarded for sense relations (synonyms) and accurate, natural usage"
      ] },
      { q: "Explain the meaning of each of the following idiomatic expressions and use each in a sentence of your own: (a) 'hook, line and sinker' (b) 'every Tom, Dick and Harry' (c) 'to turn over a new leaf'.", marks: 10, outline: [
        "(a) 'hook, line and sinker' — completely, without reservation: 'He swallowed the story hook, line and sinker.'",
        "(b) 'every Tom, Dick and Harry' — everybody, indiscriminately: 'The gate was thrown open to every Tom, Dick and Harry.'",
        "(c) 'to turn over a new leaf' — to begin a better way of behaving: 'After the suspension he turned over a new leaf.'",
        "Marks: 1 for each correct meaning + 1 for each correct sentence usage (3 + 3), balance for variety and accuracy"
      ] },
      { q: "Give (i) a synonym and (ii) an antonym for each of the words 'scarce', 'benevolent' and 'reluctant'. Then use one synonym and one antonym in new sentences.", marks: 10, outline: [
        "scarce: synonym 'rare/in short supply'; antonym 'abundant/plentiful'",
        "benevolent: synonym 'kind/generous'; antonym 'cruel/malevolent'",
        "reluctant: synonym 'unwilling/hesitant'; antonym 'willing/eager'",
        "Sample sentences: 'Water is rare in the dry season.' / 'The eager crowd surged forward.'",
        "Marks: ½ each for the six sense relations, 2 each for the two sentences showing correct usage"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Paper 1 (Liberia candidates): lexis. In addition to items testing knowledge of the vocabulary of everyday usage (home, social relationships, and common core school subjects), questions test the general vocabulary associated with the following fields of human activity:" },
      { k: "bul", items: [
        "(a) Building and building construction",
        "(b) Agriculture",
        "(c) Fishing",
        "(d) Stock exchange",
        "(e) Health",
        "(f) Environment",
        "(g) Culture, institutions and ceremonies",
        "(h) Law and order",
        "(i) Motor vehicles and travelling",
        "(j) Government and administration",
        "(k) Sports",
        "(l) Religion",
        "(m) Science and technology",
        "(n) Animal husbandry",
        "(o) Advertising",
        "(p) Human internal body system and function"
      ] },
      { k: "num", items: [
        "Idioms — idiomatic expressions and collocations (e.g. 'hook, line and sinker', 'every Tom, Dick and Harry'), the total meaning of which cannot be arrived at simply by considering the dictionary meanings of the words in the structures in which they appear",
        "Structural elements of English — sequence of tenses, matching of pronouns with their antecedents, correct use of prepositions, etc.",
        "Figurative usage — recognizing when an expression is used figuratively, not only when it is used literally"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "The 'general' vocabulary refers to words and usage normally associated with the listed fields, which are generally known, used and understood by most educated people who may have occasion to read, speak or write about the field.",
        "Example: in road transport, one expects knowledge of 'pedestrian bridge' and 'traffic signs', but not the specialized 'berm' or 'camber'.",
        "All items are phrased to test the use and understanding of the required lexis, rather than dictionary definitions and explanations.",
        "The test explores not merely the extent of the candidate's vocabulary but, more importantly, the ability to respond to sense relations in the use of lexical items — synonyms, antonyms and homonyms."
      ] },
      { k: "h3", t: "Worked examples — step-by-step solutions" },
      { k: "bul", items: [
        "Synonym in context: 'The verdict was unanimous' — find a word from the passage meaning 'agreed on by everyone': read the sentence about the verdict first, then pick the equivalent that fits.",
        "Antonym pairs built correctly: 'generous — stingy', 'victory — defeat', 'expand — contract' — the two words must be the same part of speech.",
        "Idiom decoded whole: 'to let the cat out of the bag' = to reveal a secret — add the meanings of the parts and you get nonsense; learn the total meaning.",
        "Figurative vs literal: 'He was glued to the screen' is figurative (motionless, absorbed); 'He glued the poster to the screen' is literal — always read the context first.",
        "Collocations accepted by usage: 'make progress', 'do homework', 'pay a visit', 'make/take a decision' — never *do progress or *make homework.",
        "Field vocabulary in a sentence: 'The surgeon ligated the artery' uses health-field lexis; if the question asks for the everyday equivalent, answer 'tied up the blood vessel'."
      ] }
    ]
  },
  /* =============== B · STRUCTURE =============== */
  {
    grade: 12, sem: "One", icon: "✍️", period: "B",
    title: "Structure (Grammar)",
    subtitle: "Word-form changes · word-class combinations and sentence patterns · structural words",
    note: "Paper 1 sets forty structure questions on the patterns of English: inflection, the way word groups combine into sentences, and structural words (conjunctions, determiners, prepositions).",
    objectives: [
      "Apply the patterns of change in word-forms indicating number, tense, degree, etc.",
      "Recognize how categories of words combine into groups and sentences",
      "Use structural words correctly: conjunctions, determiners, prepositions",
      "Control tense sequence, concord, and pronoun–antecedent agreement"
    ],
    terms: [
      { t: "Word-form change (inflection)", d: "The patterns of change in word-forms that indicate number, tense, degree, etc. — cats, ran, more.", x: "go → goes → going → gone" },
      { t: "Word-class combination", d: "The patterns in which different categories of words regularly combine to form groups, which in turn combine to form sentences.", x: "Subject–Verb–Object: 'The boy read a book.'" },
      { t: "Structural words", d: "Conjunctions, determiners, prepositions and the like, which hold the sentence together.", x: "'and', 'the', 'under'" },
      { t: "Sequence of tenses", d: "The rules that keep verb tenses consistent through a sentence, especially in reported speech.", x: "'He said he had left.'" },
      { t: "Concord (agreement)", d: "The agreement of the verb with its subject, and of pronouns with their antecedents.", x: "'Neither of the boys was present.'" },
      { t: "Tense", d: "The verb form that shows time and aspect: simple, continuous, perfect and perfect continuous across past, present and future.", x: "She has been working (present perfect continuous)" },
      { t: "Clause", d: "A group of words containing a subject and a finite verb: main (independent) or subordinate (dependent).", x: "'which I bought' is a subordinate clause" },
      { t: "Direct and indirect (reported) speech", d: "Reporting speech without quotation marks, with backshift of tenses and changes of pronoun and time reference.", x: "'I am tired' → He said he was tired." },
      { t: "Antecedent", d: "The noun or pronoun to which a later pronoun refers.", x: "In 'Kofi did his work', 'Kofi' is the antecedent of 'his'." }
    ],
    tf: [
      { s: "Matching of pronouns with their antecedents is part of the WASSCE structure syllabus.", a: "True", why: "Structure includes the sequence of tenses, concord, and the matching of pronouns with their antecedents." },
      { s: "'Neither of the boys were present' is standard written English.", a: "False", why: "'Neither' is singular and takes a singular verb: 'Neither of the boys WAS present.' Concord is tested in Paper 1." },
      { s: "In the passive voice the object of the active sentence becomes the subject.", a: "True", why: "'The committee will approve the plan' → 'The plan will be approved by the committee' — the active object 'the plan' becomes the subject." },
      { s: "Structure questions may ask for the definition of a preposition.", a: "False", why: "Items test the use of structural words in context, not their definitions." }
    ],
    mcq: [
      { q: "Choose the grammatically correct sentence:", o: ["Neither of the boys were present.", "Neither of the boys was present.", "Neither of the boys have been present.", "Neither of the boys are present."], a: 1, why: "'Neither' is singular, so it takes the singular verb 'was'." },
      { q: "The passive voice of 'The committee will approve the plan' is:", o: ["The plan will approve by the committee.", "The plan will be approved by the committee.", "The plan is approved by the committee.", "The plan was approved by the committee."], a: 1, why: "Future simple passive: will + be + past participle." },
      { q: "Choose the correctly punctuated sentence:", o: ["Where are you going?", "Where are you going?", "Where, are you going?", "Where are, you going?"], a: 1, why: "A question mark closes a direct question; no comma after 'Where'." },
      { q: "The sentence 'She has been studying for three hours' is in the:", o: ["present simple", "present continuous", "present perfect continuous", "past continuous"], a: 2, why: "has/have + been + -ing = present perfect continuous." },
      { q: "'I am tired,' he said. In reported speech:", o: ["He said he is tired.", "He said he was tired.", "He says he was tired.", "He said he had been tired."], a: 1, why: "In reported speech the present simple backshifts to the past simple." },
      { q: "The plural of 'cactus' is:", o: ["cactuses", "cacti", "both (a) and (b)", "cactus's"], a: 2, why: "Both 'cactuses' and 'cacti' are accepted plurals." },
      { q: "Choose the correctly spelt word:", o: ["neccessary", "necessary", "necesary", "neccesary"], a: 1, why: "'Necessary' has one 'c' and double 's': ne-ces-sa-ry — the common error is writing *neccessary with double 'c'." },
      { q: "'Let's go home' — the contraction 'Let's' stands for:", o: ["let him", "let us", "lets us", "let it"], a: 1, why: "'Let's' is the contraction of 'let us' (first-person suggestion: 'Let's go'); 'lets' without an apostrophe is the verb: 'He lets go.'." },
      { q: "In 'The book which I bought was expensive', the clause 'which I bought' is:", o: ["a main clause", "a relative (defining) clause", "an adverbial clause", "a noun clause"], a: 1, why: "'which I bought' is a defining relative clause modifying 'the book'." },
      { q: "If I ___ you, I would apologize. Choose the correct form:", o: ["am", "was", "were", "be"], a: 2, why: "The subjunctive 'were' is used in the second conditional (unreal present)." },
      { q: "The function of 'and' in 'He is brave and honest' is:", o: ["a preposition", "a coordinating conjunction", "a subordinating conjunction", "a determiner"], a: 1, why: "'And' joins two coordinate adjectives — a coordinating conjunction." },
      { q: "Choose the sentence with the correct apostrophe:", o: ["The students book", "The student's books", "The students' books", "The students books'"], a: 2, why: "Plural possessive of 'students': the apostrophe comes after the final s." },
      { q: "By next June, she ___ the course.", o: ["will finish", "will have finished", "has finished", "had finished"], a: 1, why: "Future perfect (will have + past participle) for an action completed before a future time ('by next June')." },
      { q: "Each of the students ___ a textbook.", o: ["have", "has", "are having", "were having"], a: 1, why: "'Each' is singular, so it takes the singular verb 'has' — not the plural 'have' attracted by 'students'." },
      { q: "She is good ___ mathematics.", o: ["in", "at", "on", "for"], a: 1, why: "The correct preposition with 'good' for a skill or subject is 'at': good at mathematics." },
      { q: "Neither Kofi nor his brothers ___ finished.", o: ["has", "have", "is", "was"], a: 1, why: "With 'neither ... nor', the verb agrees with the nearer subject — 'brothers' (plural) → 'have'." },
      { q: "The children behaved ___. Choose the correct form:", o: ["good", "well", "goodly", "best"], a: 1, why: "An adverb modifies the verb 'behaved': 'behaved well'; 'good' is an adjective and cannot modify a verb." },
      { q: "'Where do you live?' she asked. The reported form is:", o: ["She asked where did I live.", "She asked where I lived.", "She asked where do I live.", "She asked where I am living."], a: 1, why: "A reported WH-question uses statement word order and backshift: 'where I lived'." },
      { q: "___ advice you gave me was useful.", o: ["A", "An", "The", "One"], a: 2, why: "'Advice' is uncountable (no 'a/an'); 'The' marks the specific advice she gave." },
      { q: "He has been living here ___ 2019.", o: ["for", "since", "from", "by"], a: 1, why: "'Since' + a point in time (2019); 'for' is used with a duration (for three years)." },
      { q: "Choose the correctly spelt word:", o: ["accomodate", "accommodate", "acommadate", "acommodate"], a: 1, why: "'Accommodate' has double 'c' and double 'm'." },
      { q: "'She gave the boy a book.' The sentence pattern is:", o: ["SVO", "SVOO", "SVOC", "SVA"], a: 1, why: "Subject + verb + indirect object ('the boy') + direct object ('a book') = SVOO, the ditransitive pattern." },
      { q: "Choose the correctly punctuated sentence:", o: ["Its raining.", "It's raining.", "Its' raining.", "Its raining'."], a: 1, why: "'It's' is the contraction of 'it is'; 'its' (no apostrophe) is the possessive form." }
    ],
    essay: [
      { q: "Rewrite the following passage in reported speech, making any necessary changes: 'I am leaving tomorrow,' said Ama. 'We will travel by bus, and I shall wait for you at the station.'", marks: 10, outline: [
        "Ama said (that) she was leaving the next day",
        "they would travel by bus, and she would wait for 'me/us' at the station",
        "Note the backshift (am → was, will → would, shall → would), time reference (tomorrow → the next day) and pronoun changes"
      ] },
      { q: "The following passage contains ten grammatical errors. Correct them: (passage provided at the examination).", marks: 10, outline: [
        "Scan for: subject–verb agreement, tense sequence, articles, prepositions, pronoun–antecedent matching, word form (noun/verb/adjective), punctuation and spelling",
        "Rewrite each corrected sentence and state the error type (e.g. 'wrong tense sequence')",
        "Marks are for correct correction plus identification of the error"
      ] },
      { q: "Rewrite as directed: (a) Change into the passive: 'The headmaster praised the boy.' (b) Combine using 'who': 'The girl is my sister. The girl won the prize.' (c) Change to the comparative degree: 'This is the best road in the town.' (d) Report: 'Don't touch the exhibits,' the guard said.", marks: 12, outline: [
        "(a) 'The boy was praised by the headmaster.' (simple past passive: was/were + past participle)",
        "(b) 'The girl who won the prize is my sister.' (defining relative clause attached to the repeated noun)",
        "(c) 'This is better than any other road in the town.' (superlative → comparative + 'than any other' + singular noun)",
        "(d) 'The guard told/ordered them not to touch the exhibits.' (imperative → infinitive; negative 'don't' → 'not to')"
      ] },
      { q: "Rewrite each sentence correctly and state the error corrected: (a) 'One of the boys are outside.' (b) 'He said that he is sick.' (c) 'The team have won its match and they celebrated.' (d) 'She is good in dancing.'", marks: 12, outline: [
        "(a) 'One of the boys is outside.' — concord: the subject is 'one', not 'boys'",
        "(b) 'He said that he was sick.' — sequence of tenses: present backshifts after a past reporting verb",
        "(c) 'The team has won its match and celebrated.' / 'The players celebrated.' — concord and pronoun–antecedent matching",
        "(d) 'She is good at dancing.' — correct preposition: good at"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Paper 1 (Liberia candidates): structure. 'Structure' here includes:" },
      { k: "num", items: [
        "The patterns of changes in word-forms which indicate number, tense, degree, etc.",
        "The patterns in which different categories of words regularly combine to form groups and these groups in turn combine to form sentences",
        "The use of structural words, e.g. conjunctions, determiners, prepositions, etc."
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "For candidates in Ghana only, Part B of Paper 1 carries thirty objective questions on Literature (10 Drama, 10 Prose, 10 Poetry; one prescribed prose and one prescribed drama text). This part is NOT set for Liberia candidates.",
        "Items test use and control: sequence of tenses, concord, the use of correct prepositions, and matching of pronouns with their antecedents."
      ] },
      { k: "h3", t: "Worked examples — step-by-step solutions" },
      { k: "bul", items: [
        "Concord worked: 'The list of items (was/were) long.' — the head noun is 'list' (singular) → 'was long'; ignore the distractor 'items'.",
        "Reported speech with every shift: 'I am leaving tomorrow,' she said. → She said (that) she was leaving the next day. (am → was; I → she; tomorrow → the next day)",
        "Active to passive in three tenses: 'They clean the hall' → 'The hall is cleaned'; 'They cleaned it' → 'It was cleaned'; 'They will clean it' → 'It will be cleaned.'",
        "Pronoun–antecedent matching: 'Every student must bring his or her book' (formal) — the pronoun must agree in number with 'every student', not with the plural idea.",
        "Word forms in a chain: 'decide (verb) → decision (noun) → decisive (adjective) → decisively (adverb)'. Example: 'She decided decisively; her decision was decisive.'",
        "Apostrophes: 'the boy's book' (singular possessive), 'the boys' books' (plural possessive), 'it's = it is' but 'its = of it' — three marks, three rules."
      ] }
    ]
  },
  /* =============== C · ESSAY WRITING =============== */
  {
    grade: 12, sem: "One", icon: "📝", period: "C",
    title: "Essay Writing (Paper 2, Section A)",
    subtitle: "Letter · speech · narration · description · argument/debate · report · article · exposition · creative writing",
    note: "Section A of Paper 2 (50 marks, 50 minutes): answer one of five topics. Marks are awarded for content, organization, expression and mechanical accuracy. Minimum length: 450 words.",
    objectives: [
      "Write letters, speeches, narratives, descriptions, arguments/debates, reports, articles, expositions and creative pieces appropriate to the specified audience and situation",
      "Organize material in paragraphs that are chronologically, spatially and logically coherent, with appropriate emphasis and arrangement of ideas",
      "Show effective control of vocabulary and sentence structure, with variety of sentence patterns",
      "Demonstrate mechanical accuracy: correct grammar, punctuation and spelling"
    ],
    terms: [
      { t: "Content", d: "Relevance of ideas to the topic — the first mark heading in Section A.", x: "Ideas that answer the question set" },
      { t: "Organization", d: "Formal features (where applicable), good paragraphing, appropriate emphasis and arrangement of ideas.", x: "Introduction → developed body → conclusion" },
      { t: "Expression", d: "Effective control of vocabulary and sentence structure, with variety of sentence patterns.", x: "Varied openings; precise word choice" },
      { t: "Mechanical accuracy", d: "Correct grammar, punctuation and spelling.", x: "Tense consistency; paragraph indentation" },
      { t: "Narrative", d: "Story-telling writing organized in chronological order, with plot, characters and setting.", x: "The day I lost my bag — events in time order" },
      { t: "Argumentative writing", d: "Writing that weighs both sides of a question and defends a position with evidence and rebuttal.", x: "For and against, then a defended stand" },
      { t: "Topic sentence", d: "The sentence that states the one main idea of a paragraph, usually placed first and developed with support.", x: "Road accidents have three main causes." },
      { t: "Formal features", d: "The conventions of each form: date, salutation and sign-off for letters; 'Ladies and gentlemen' for speeches; headings for reports and articles.", x: "A formal letter opens with the sender's address and date" }
    ],
    tf: [
      { s: "The minimum length for a WASSCE English essay is 450 words.", a: "True", why: "The minimum length will be 450 words." },
      { s: "Speeches and letters have formal features that essays lack.", a: "True", why: "Organization awards marks for formal features where applicable — address, date, salutation and sign-off for letters; salutation and close for speeches." },
      { s: "A narrative should be arranged in the order in which events happened.", a: "True", why: "Organization demands chronological, spatial or logical coherence — narration follows the time order of events." },
      { s: "Candidates must answer all five essay topics in Section A.", a: "False", why: "There are five questions in all and candidates answer only one." }
    ],
    mcq: [
      { q: "A formal letter to a company's managing director should open with:", o: ["'Dear Friend,'", "'Dear Sir / Madam,'", "'Hello there,'", "'Hi Boss,'"], a: 1, why: "Formal correspondence to an unknown or titled recipient uses 'Dear Sir/Madam' or the title." },
      { q: "Which of the following is a feature of a speech but not of an essay?", o: ["Paragraphing", "Direct address to the audience", "A thesis statement", "Quotations"], a: 1, why: "Speeches address the audience directly ('Ladies and gentlemen...')." },
      { q: "The best opening for a descriptive essay is usually:", o: ["a list of facts", "a vivid scene that draws the reader in", "the conclusion of the essay", "an apology to the reader"], a: 1, why: "Description works by concrete, sensory imagery from the first paragraph." },
      { q: "In an argumentative essay, the writer should:", o: ["present only one side", "present both sides and defend a position", "avoid giving a conclusion", "use only short sentences"], a: 1, why: "Argument weighs both sides and takes a defended position." },
      { q: "A report should normally be written in which tone?", o: ["emotive and personal", "formal and objective", "humorous", "poetic"], a: 1, why: "Reports are formal, objective and factual — no emotion, no personal comment; the tone suits an official record of events." },
      { q: "The 'exposition' form of writing is best described as:", o: ["telling a story", "explaining or setting out ideas clearly", "describing a place", "quoting a speech"], a: 1, why: "Exposition explains, interprets or informs — it sets out ideas." },
      { q: "The correct complimentary close for a letter opening 'Dear Sir / Madam' is:", o: ["Yours faithfully,", "Love,", "Your buddy,", "See you soon,"], a: 0, why: "'Yours faithfully' pairs with 'Dear Sir/Madam'; 'Yours sincerely' is used when the recipient is named." },
      { q: "A narrative essay is best organized:", o: ["in chronological order", "by listing definitions", "alphabetically", "in reverse order only"], a: 0, why: "Narration follows the time order of events — chronological arrangement." },
      { q: "The minimum length of a WASSCE English essay is:", o: ["250 words", "350 words", "450 words", "600 words"], a: 2, why: "The syllabus fixes the minimum at 450 words (Section A: 50 marks in 50 minutes)." },
      { q: "An article in the school magazine is written for:", o: ["the head teacher only", "the general school readership", "the writer alone", "the examination council"], a: 1, why: "An article addresses the readership of the publication — tone and register must suit that audience." },
      { q: "A well-built paragraph should:", o: ["develop one main idea", "contain as many ideas as possible", "have no topic sentence", "repeat the introduction"], a: 0, why: "One main idea per paragraph: a topic sentence first, then supporting details." },
      { q: "In a debate speech, the opening 'Honourable Chair, fellow debaters' is:", o: ["a formal feature of a speech", "an error of grammar", "a figure of speech", "a summary"], a: 0, why: "Debate speeches follow formal conventions — the chair, opponents and audience are saluted first." },
      { q: "A report should normally include:", o: ["a heading and, where useful, recommendations", "dialogue between characters", "a moral lesson", "rhyming couplets"], a: 0, why: "Reports carry headings (and often subheadings), findings and sometimes recommendations, in formal style." },
      { q: "'Explain the importance of saving money' demands:", o: ["a story", "a clear explanation with reasons and examples", "a formal letter", "a description of a person"], a: 1, why: "The instruction word 'explain' demands exposition — points developed with reasons and examples." }
    ],
    essay: [
      { q: "Write an essay of 450–600 words on one of the following: (a) The day I won first prize in a debate. (b) My most unforgettable experience. (c) The importance of literacy in national development. (d) A speech you delivered at a school function. (e) The problems of youth unemployment and ways of solving them.", marks: 50, outline: [
        "PLAN (5 min): choose the form the topic demands; list 4–6 relevant ideas; decide the opening and the conclusion",
        "Content: develop ideas relevant to the topic with specific details and examples",
        "Organization: a clear introduction; one idea per paragraph in logical (chronological, spatial or logical) order; a strong concluding paragraph",
        "Expression: vary sentence patterns; precise, formal vocabulary; avoid repetition",
        "Mechanical accuracy: check grammar, punctuation and spelling before time expires; keep to the minimum 450 words"
      ] },
      { q: "Write a formal letter of about 450 words to your District Education Officer requesting a science laboratory for your school. Give at least three reasons for the request.", marks: 50, outline: [
        "FORMAL FEATURES (10): your school's address and the date; 'Dear Sir / Madam' or the officer's title; 'Yours faithfully' + your name and class",
        "CONTENT (20): purpose of the letter in the first paragraph; three developed reasons (e.g. no practical work possible, exam performance in science, safety of pupils using makeshift equipment); a clear, specific request",
        "ORGANISATION (10): one paragraph per reason; logical order from strongest to weakest; a final paragraph that states what you want the officer to do",
        "EXPRESSION + MECHANICAL ACCURACY (10): formal, polite register ('I write to request...', not 'Please give us'); varied sentences; check spelling and punctuation in the last five minutes"
      ] },
      { q: "Write an argumentative essay of about 450 words for or against the motion: 'Private cars should be banned from city centres.'", marks: 50, outline: [
        "PLAN: choose your side; list 4–6 points (congestion, pollution, parking, business access, public transport alternatives) and 2 points of the opposing side to rebut",
        "Introduction: state the motion and your position clearly",
        "Body: one developed point per paragraph with evidence/examples; concede one valid point of the other side and refute it ('Although shop owners fear lost trade...')",
        "Conclusion: restate the defended position and recommend a course of action",
        "Expression/mechanics: connectives of argument (however, furthermore, consequently); no slang; minimum 450 words"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Paper 2, Section A: Essay Writing (50 marks; 50 minutes). There will be five questions in all and candidates will be required to answer only one question. The questions test the ability to communicate in writing; the topics demand the following kinds of writing:" },
      { k: "bul", items: ["letter", "speech", "narration", "description", "argument/debate", "report", "article", "exposition", "creative writing"] },
      { k: "h3", t: "Marks are awarded for" },
      { k: "bul", items: [
        "Content — relevance of ideas to the topic",
        "Organization — formal features (where applicable), good paragraphing, appropriate emphasis and arrangement of ideas",
        "Expression — effective control of vocabulary and sentence structure",
        "Mechanical Accuracy — correct grammar, punctuation, spelling, etc."
      ] },
      { k: "p", t: "The minimum length will be 450 words." },
      { k: "h3", t: "Worked examples — step-by-step solutions" },
      { k: "bul", items: [
        "Formal letter skeleton: your address + date / 'Dear Sir / Madam' / paragraph 1: purpose / paragraphs 2–4: one reason each / final paragraph: the request / 'Yours faithfully,' + name and class.",
        "Paragraph architecture of a narrative: opening scene (where, when, who) → rising events in time order → the climax → what followed → short reflection. One event-block per paragraph.",
        "Opening that earns content marks: for 'The day I won first prize', begin in the hall ('The hall was packed...'), not with 'My name is...' or dictionary definitions.",
        "Argument with rebuttal: state the point, give evidence, concede the counter ('Some argue that...'), refute it ('...yet the figures show...'). One cycle per paragraph.",
        "The four mark headings applied to one paragraph: Content = the ideas are on topic; Organisation = topic sentence + supports + link; Expression = varied sentences and precise words; Mechanical accuracy = spelling, tense, punctuation.",
        "Five-minute end check: verbs consistent in tense; every paragraph indented; full stops and capitals correct; word count past 450 — these last marks are the cheapest to win."
      ] }
    ]
  },
  /* =============== D · COMPREHENSION =============== */
  {
    grade: 12, sem: "One", icon: "🔎", period: "D",
    title: "Comprehension (Paper 2, Section B)",
    subtitle: "A passage of at least 350 words · vocabulary in context · fact and inference · sentiment · grammatical and literary identification · recasting",
    note: "Section B of Paper 2 (20 marks, 30 minutes): answer all questions on one passage of at least 350 words, written in modern English within the experience of candidates.",
    objectives: [
      "Find appropriate equivalents for selected words or phrases from the passage",
      "Understand the factual content of the passage",
      "Make inferences from the content of the passage",
      "Understand the use of expressions that reveal or reflect sentiments, emotions and attitudes",
      "Identify and label basic grammatical structures, words, phrases and clauses and explain their functions in context",
      "Identify and explain basic literary terms and expressions",
      "Recast phrases or sentences into grammatical alternatives"
    ],
    terms: [
      { t: "Inference", d: "A conclusion reached from evidence in the passage plus the reader's reasoning, rather than a fact stated outright.", x: "'He had missed the bus' is inferred from 'He ran to the stop and waved at the receding wheels.'" },
      { t: "Sentiment/attitude", d: "The feeling or position the writer conveys, revealed by word choice and expression.", x: "Words like 'grudgingly' or 'delighted' mark attitude" },
      { t: "Recasting", d: "Rewriting a phrase or sentence into a grammatical alternative with the same sense — e.g. active to passive.", x: "'The storm damaged the roof' → 'The roof was damaged by the storm.'" },
      { t: "Factual question", d: "A question whose answer is stated outright in the passage — copy the fact, do not interpret it.", x: "'How long did he fish?' — forty years (stated)" },
      { t: "Participial phrase", d: "A phrase built on an -ing or -ed verb form acting as an adjective modifier.", x: "'standing at the gate', 'damaged by the storm'" },
      { t: "Euphemism", d: "A mild or indirect expression used in place of a harsh or blunt one.", x: "'passed away' for 'died'" },
      { t: "Literary term", d: "A named device of writing — metaphor, simile, irony, personification, allusion, etc. — to be identified and explained in context.", x: "'Time is a thief' is a metaphor" }
    ],
    tf: [
      { s: "The comprehension passage will be at least 350 words long.", a: "True", why: "The section consists of one passage of at least three hundred and fifty (350) words." },
      { s: "Candidates may answer only some of the questions in Section B.", a: "False", why: "Candidates are required to answer all the questions on the passage." },
      { s: "An inference in comprehension must be supported by evidence from the passage.", a: "True", why: "Inferences are conclusions drawn from the content — the answer must point to the clue in the text, not to outside knowledge." },
      { s: "Recasting a sentence may change its meaning as long as the grammar improves.", a: "False", why: "Recasting into a grammatical alternative must keep the original sense exactly — only the structure changes." },
      { s: "At least four comprehension questions are based on identifying and labelling grammatical structures and explaining their functions.", a: "True", why: "The test will include at least four questions based on identifying and labelling basic grammatical structures, words, phrases or clauses and explaining their functions." }
    ],
    mcq: [
      { q: "In a comprehension passage, 'The manager frowned and said nothing' most likely shows the manager was:", o: ["happy", "silent by choice but displeased", "asleep", "confused about the time"], a: 1, why: "'Frowned' signals displeasure; the inference, not a stated fact, is tested." },
      { q: "The word 'gregarious' in 'a gregarious host' is best equated with:", o: ["shy", "talkative and sociable", "wealthy", "strict"], a: 1, why: "Gregarious = fond of company, sociable — 'a gregarious host' mixes freely with guests; 'shy' is the opposite." },
      { q: "Which of the following is a passive recasting of 'They will cancel the flight'?", o: ["The flight will be cancelled by them.", "They cancelled the flight.", "The flight cancels them.", "They are cancelling the flight."], a: 0, why: "Future simple passive: the flight will be cancelled (by them)." },
      { q: "'As the minutes ticked by, her heart sank' uses which device?", o: ["Simile", "Personification", "Irony", "Hyperbole"], a: 1, why: "A heart cannot literally sink — personification of emotion." },
      { q: "The clause 'who had just arrived' in 'The student who had just arrived sat down' is a:", o: ["noun clause", "defining relative clause", "purpose clause", "result clause"], a: 1, why: "'who had just arrived' is a relative clause defining which student." },
      { q: "A writer who calls a failed policy 'a triumph' is using:", o: ["euphemism", "irony", "metaphor", "onomatopoeia"], a: 1, why: "Saying the opposite of what is meant to mock or criticize — irony." },
      { q: "'He was elated at the news.' 'Elated' means:", o: ["depressed", "very happy", "annoyed", "frightened"], a: 1, why: "Elated = filled with great happiness; 'at the news' shows a strong positive reaction — pick the equivalent that fits the context." },
      { q: "From 'Ama packed her torch and rope before setting out', we may infer that:", o: ["Ama owns a torch", "Ama expects a dark place or climbing", "It is daytime", "Ama dislikes the dark"], a: 1, why: "Packing a torch and rope suggests preparation for darkness or climbing — a conclusion from the evidence, not a stated fact." },
      { q: "'Unfortunately, the so-called reform achieved nothing.' The writer's attitude is:", o: ["admiring", "neutral", "critical and disappointed", "joyful"], a: 2, why: "'Unfortunately' and the sneering 'so-called' mark disappointment and criticism." },
      { q: "'The Sahara is the furnace of Africa' is:", o: ["a simile", "a metaphor", "personification", "an allusion"], a: 1, why: "Metaphor — the desert is said to BE a furnace, with no 'like' or 'as'." },
      { q: "In 'The boy standing at the gate is my brother', the phrase 'standing at the gate' is:", o: ["a finite clause", "a participial phrase modifying 'the boy'", "an adverbial clause of time", "the object of 'gate'"], a: 1, why: "It is a present-participle phrase post-modifying the subject 'the boy' — label it AND state its function for full marks." },
      { q: "Which is a passive recasting of 'Close the door'?", o: ["The door should be closed.", "You door close.", "Closing the door.", "The door closes."], a: 0, why: "'The door should be closed' keeps the sense (with the softening of 'should') while changing to the passive structure." },
      { q: "In 'Kofi met Abu and greeted him', the pronoun 'him' refers to:", o: ["Kofi", "Abu", "both of them", "neither"], a: 1, why: "The pronoun takes the nearest male antecedent, 'Abu' — pronoun–antecedent matching." },
      { q: "In 'The council abolished the levy', 'abolished' is best replaced by:", o: ["increased", "did away with", "copied", "collected"], a: 1, why: "Abolished = formally ended/did away with; the replacement must fit the context of 'the levy'." }
    ],
    essay: [
      { q: "(Passage of 350+ words provided at the examination) Answer ALL questions on the passage: find equivalents for the underlined words, answer questions on factual content, make the inferences asked, identify the grammatical structures and literary terms required, and recast the given sentence.", marks: 20, outline: [
        "Read the passage twice before answering",
        "Equivalents: choose words that fit THIS context, not just dictionary synonyms",
        "Inferences: base the answer on evidence from the text and state the clue",
        "Grammar items: name the structure (e.g. 'participle clause') and state its function (e.g. 'modifying the subject')",
        "Recasting: keep the original sense exactly; change the required structure (active↔passive, direct↔indirect, etc.)"
      ] },
      { q: "From the sentence 'Having finished his work, the tired clerk who had stayed late went home quietly', identify and label the underlined parts and state the function of each: (a) 'Having finished his work' (b) 'who had stayed late' (c) 'quietly'.", marks: 10, outline: [
        "(a) 'Having finished his work' — a perfect participial phrase (participle clause); function: an adverbial modifier of time/reason, referring to the subject 'the tired clerk'",
        "(b) 'who had stayed late' — a defining (restrictive) relative clause in the past perfect; function: post-modifying 'the tired clerk', identifying which clerk",
        "(c) 'quietly' — an adverb of manner; function: modifying the verb 'went'",
        "Full marks require BOTH the label and the function in context — labelling alone earns half"
      ] },
      { q: "(Extract provided at the examination.) (a) What attitude does the writer show towards the city? Quote two expressions that reveal it. (b) Identify two literary devices used and explain their effects. (c) Recast 'The noise disturbed the residents' into the passive and into a question.", marks: 10, outline: [
        "(a) State the attitude (e.g. 'disillusioned'); quote the exact words — 'a concrete jungle', 'the merciless sun' — and link each to the attitude",
        "(b) Name each device (e.g. metaphor, irony) + quote + explain the effect on the reader",
        "(c) Passive: 'The residents were disturbed by the noise.' Question: 'Did the noise disturb the residents?' / 'The noise disturbed the residents?'",
        "Marks: 1 (attitude) + 2 (quotes) + 2 (devices) + 2 (effects) + 3 (recasting and accuracy)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Paper 2, Section B: Comprehension (20 marks; 30 minutes). The section consists of one passage of at least three hundred and fifty (350) words. Candidates are required to answer all the questions on the passage. The questions test candidates' ability to:" },
      { k: "num", items: [
        "Find appropriate equivalents for selected words or phrases",
        "Understand the factual content",
        "Make inferences from the content of the passage",
        "Understand the use of English expressions that reveal/reflect sentiments/emotions/attitudes",
        "Identify and label basic grammatical structures, words, phrases or clauses and explain their functions as they appear in the context",
        "Identify and explain basic literary terms and expressions",
        "Recast phrases or sentences into grammatical alternatives"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "The passage is chosen from a wide variety of sources, all suitable for this level in terms of theme and interest.",
        "The passage is written in modern English within the experience of candidates.",
        "The comprehension test will include at least four questions based on identifying and labelling grammatical structures and explaining their functions."
      ] },
      { k: "h3", t: "Worked examples — step-by-step solutions" },
      { k: "bul", items: [
        "Equivalent in context: 'The expedition was arduous' — candidate answer 'difficult' fits an expedition; 'tiring' is too weak, 'impossible' too strong. Test your word in the original sentence.",
        "Fact and inference separated: 'He ran to the stop and waved at the receding wheels' → FACT: he ran and waved; INFERENCE: he had missed the bus (clue: 'receding wheels'). Quote the clue with the inference.",
        "Sentiment spotted by word choice: 'the so-called hero slunk away' — 'so-called' and 'slunk' carry contempt. List the exact words before naming the attitude.",
        "Grammar label + function done properly: 'the man wearing the hat' → label: participial phrase; function: post-modifies 'the man'. Both halves earn marks — the label alone earns half.",
        "Literary device + effect: 'Time is a thief' → metaphor (time compared to a thief without 'like/as'); effect: it makes the loss of time feel active and malicious. Name, quote, explain.",
        "Recasting without drift: 'The storm damaged the roof' → 'The roof was damaged by the storm' (passive); → 'Did the storm damage the roof?' (question). Check: who did what to whom must stay identical."
      ] }
    ]
  },
  /* =============== E · SUMMARY =============== */
  {
    grade: 12, sem: "Two", icon: "🗂️", period: "E",
    title: "Summary (Paper 2, Section C)",
    subtitle: "Extracting relevant information · clear, concise English · summaries of specific aspects or portions of the passage",
    note: "Section C of Paper 2 (30 marks, 40 minutes): one prose passage of about 500 words; summarize the demanded points in clear, concise English, avoiding repetition and redundancy.",
    objectives: [
      "Extract relevant information from a passage of about 500 words",
      "Summarize the points demanded in clear, concise English, avoiding repetition and redundancy",
      "Present a summary of specific aspects or portions of the passage in the required word count"
    ],
    terms: [
      { t: "Relevant information", d: "Only the points the question asks for — nothing extra, nothing left out.", x: "If asked for 'causes', list only causes" },
      { t: "Concise English", d: "Expressing the same meaning in fewer words — replace phrases with single words, cut repetition.", x: "'In the event that' → 'if'; 'has the ability to' → 'can'" },
      { t: "Third person", d: "Summaries are written in the third person ('the author', 'he/she'), not first or second person.", x: "'The writer argues that...'" },
      { t: "Redundancy", d: "Unnecessary repetition of ideas or words — penalized in summaries.", x: "'each and every one' → 'each'" },
      { t: "Theme (question focus)", d: "The specific aspect demanded — causes, effects, ways, reasons — which decides what to include.", x: "Question asks 'effects' → include effects only" },
      { t: "Continuous prose", d: "A summary written as flowing sentences, not notes or bullet lists.", x: "Not: point-form bullets" },
      { t: "Word count", d: "The summary must fall within the stated range (usually a third of the passage length).", x: "About 160 words from a 500-word passage" }
    ],
    tf: [
      { s: "A WASSCE summary may quote the passage word for word for most of its length.", a: "False", why: "The summary must be in the candidate's own, concise words — repetition and redundancy are penalized." },
      { s: "Note-form (bullet points) is acceptable in the WASSCE summary.", a: "False", why: "The summary must be in clear, concise English prose — continuous sentences, not notes or lists." },
      { s: "Proper names and exact figures are usually kept as they stand in a summary.", a: "True", why: "Names, places and figures carry information; the connective wording around them is what gets condensed." },
      { s: "The summary passage is about 500 words long.", a: "True", why: "The section consists of one prose passage of about five hundred (500) words." }
    ],
    mcq: [
      { q: "Which of the following is the best summary of: 'The old man, who had spent forty years fishing the same bay, finally sold his boat after the nets came up empty for the ninth morning running.'?", o: ["The old man fished for forty years.", "After nine empty mornings, the veteran fisherman sold his boat.", "The nets were empty.", "He had a boat."], a: 1, why: "It keeps the essential meaning (veteran fisherman, nine empty mornings, sold the boat) in one concise sentence." },
      { q: "The phrase 'in order to save time' may be condensed to:", o: ["for the purpose of time-saving", "to save time", "so that one could possibly save a bit of time", "with a view to the saving of time"], a: 1, why: "'To save time' is the shortest equivalent — 'in order to save time' adds four words that add no meaning." },
      { q: "A summary should be written in the:", o: ["first person", "second person", "third person", "any person the writer prefers"], a: 2, why: "Summaries are conventionally in the third person ('the author states...')." },
      { q: "If a passage is 480 words, a typical WASSCE summary length is about:", o: ["40 words", "120–160 words", "300 words", "480 words"], a: 1, why: "Summaries are roughly a third of the passage length." },
      { q: "'Owing to the fact that' may be condensed to:", o: ["because", "due to being that", "for the fact", "so that"], a: 0, why: "'Owing to the fact that' → 'because' — one word replaces the whole phrase without loss of meaning." },
      { q: "Which is NOT acceptable in a WASSCE summary?", o: ["personal comments and opinions", "third-person reporting", "condensed sentences", "relevant points only"], a: 0, why: "A summary reports only the passage's content; personal comments and opinions are excluded." },
      { q: "If the question asks for 'the causes of road accidents', the summary should include:", o: ["causes only", "causes and solutions", "the full story of the passage", "the writer's biography"], a: 0, why: "Only the demanded points (relevant information) are credited — solutions would be ignored or penalized." },
      { q: "In a summary of a passage by Chinua Achebe, he should be referred to as:", o: ["'you'", "'I'", "'the author'", "'we'"], a: 2, why: "The third-person convention: 'the author argues that...' — never 'I' or 'you'." },
      { q: "Which is the best one-sentence summary of 'Although it rained heavily all morning, the match continued after lunch and the home team won by three goals.'?", o: ["It rained.", "The match continued.", "Despite heavy rain, the match resumed after lunch and the home team won 3–0.", "The home team is a good team."], a: 2, why: "It keeps every essential point (rain, resumed after lunch, home team won by three goals) in one concise sentence." },
      { q: "Writing far above the stated word count costs marks mainly because:", o: ["the handwriting suffers", "repetition and redundancy creep in", "the ink runs out", "third person is lost"], a: 1, why: "Overlong summaries repeat and add non-essential details — both penalized under 'avoiding repetition and redundancy'." },
      { q: "Which sentence is the most concise?", o: ["In spite of the fact that he was tired, he continued.", "Although tired, he continued.", "He was tired but he continued on and on.", "Tiredness was present but continuation happened."], a: 1, why: "'Although tired, he continued' carries the same meaning in the fewest words." },
      { q: "Examples and illustrations in the passage should be:", o: ["kept with full details", "dropped unless the theme demands them", "copied verbatim", "listed with their dates"], a: 1, why: "Illustrations are cut unless they are themselves the demanded information." }
    ],
    essay: [
      { q: "(Prose passage of about 500 words provided at the examination) Write a summary of the passage on the given theme, in about 160 words, using your own words and avoiding repetition and redundancy.", marks: 30, outline: [
        "Read the passage fully; underline only the points demanded by the theme",
        "Write the theme line first (examiners award marks for it)",
        "Summarize in the third person, in your own words, one sentence per point",
        "Condense: replace phrases with words, drop examples that are not required, keep proper nouns",
        "Check: word count in range, no direct copying of long phrases, no personal comments"
      ] },
      { q: "Condense each expression to the shortest equivalent without loss of meaning: (a) 'in the event that' (b) 'he has the ability to' (c) 'due to the fact that' (d) 'make a contribution towards' (e) 'on a daily basis'.", marks: 10, outline: [
        "(a) 'if'; (b) 'he can'; (c) 'because'; (d) 'contribute to'; (e) 'daily'",
        "Rule applied: replace a phrase with a single word, and a verb-noun pair with the verb ('make a contribution' → 'contribute')",
        "Marks: 2 per correct condensation — the meaning must survive exactly"
      ] },
      { q: "The following passage (printed at the examination) gives a trader's reasons for leaving the city. Write a summary in not more than 60 words of the reasons he gives.", marks: 10, outline: [
        "Underline ONLY the reasons demanded (e.g. high rent, unpaid customers, insecurity, poor health) — ignore the story of his journey and descriptions",
        "Write one sentence per reason in the third person, present/past tense consistent with the passage",
        "Model shape: 'The trader left because rents were beyond him, customers failed to pay, robbery was frequent, and his health was breaking down.' (about 25 words for 4 points)",
        "Marks: 2 per relevant point (up to 8) + 2 for concise, continuous English within the word limit"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Paper 2, Section C: Summary (30 marks; 40 minutes). The section consists of one prose passage of about five hundred (500) words and will test candidates' ability to:" },
      { k: "num", items: [
        "Extract relevant information",
        "Summarize the points demanded in clear concise English, avoiding repetition and redundancy",
        "Present a summary of specific aspects or portions of the passage"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "The passage is selected from a wide variety of suitable sources, including excerpts from narratives, dialogues and expositions of social, cultural, economic and political issues in any part of the world."
      ] },
      { k: "h3", t: "Worked examples — step-by-step solutions" },
      { k: "bul", items: [
        "Condensing a sentence: 'In spite of the fact that the road was bad, he arrived on time.' (13 words) → 'Although the road was bad, he arrived on time.' (9 words) — same sense, fewer words.",
        "Phrase-to-word table: 'in the vicinity of' → 'near'; 'a large number of' → 'many'; 'is in a position to' → 'can'; 'at this point in time' → 'now'.",
        "Relevance filtering: for the theme 'causes of the strike', cut the description of the march and the biographical details; keep only wage delays, broken promises and unsafe conditions.",
        "Whole worked summary: 5 sentences (about 85 words) on a farmer's problems condensed to 30 words: 'The farmer lacked credit, his yields fell, the roads were poor, and buyers paid late.'",
        "Keeping figures and names: 'In 2019 Dr. Kpadeh treated 2 000 patients in Bong County' stays as it stands — condense only the wording around the facts.",
        "Checking the final draft: count the words; confirm third person; delete any comment of your own ('I think...'); confirm every demanded point appears once."
      ] }
    ]
  },
  /* =============== F · ORAL ENGLISH (TEST OF ORALS — LIBERIA) =============== */
  {
    grade: 12, sem: "Two", icon: "🗣️", period: "F",
    title: "Oral English — Test of Orals (Paper 3)",
    subtitle: "Vowels · consonants and clusters · rhymes · word stress · emphatic stress and intonation · phonetic symbols",
    note: "Paper 3 for candidates in Nigeria and LIBERIA: sixty multiple-choice objective questions on Orals, answered in 45 minutes for 30 marks. (Ghana, Gambia and Sierra Leone take a Listening Comprehension Test instead.)",
    objectives: [
      "Recognize and produce all significant sound contrasts in the consonantal system of English (initial, medial, final)",
      "Produce and recognize consonant clusters in the right order, initially and finally",
      "Recognize and produce all significant sound contrasts in the vowel system: pure vowels, diphthongs and triphthongs",
      "Contrast stressed and unstressed syllables, and note stress shifts in word families",
      "Apply the rules of sentence stress, emphatic stress and the two basic intonation patterns (falling and rising)"
    ],
    terms: [
      { t: "Pure vowels (monophthongs)", d: "Single-vowel sounds, as in 'seat', 'sit', 'set' — contrasts like iː / ɪ / ɛ.", x: "seat – sit – set" },
      { t: "Diphthongs", d: "Gliding vowel sounds produced by moving from one vowel quality to another, as in 'pair', 'late', 'coin', 'now'.", x: "let – late; cheer – chair; pair – purr" },
      { t: "Triphthongs", d: "Glides through three vowel qualities within one syllable, as in 'hour', 'fire', 'royal'.", x: "hour /aʊə/; fire /aɪə/; royal /ɔɪə/" },
      { t: "Consonant cluster", d: "Two or more consonant sounds occurring together without a vowel between them, initially (play, sting, scheme) or finally (rains, felt, sent).", x: "'sting' – 'string'" },
      { t: "Word stress", d: "The emphasized syllable of a word; stress may shift between derivations, changing the vowel quality.", x: "'increase (noun) / in'crease (verb); 'record / re'cord" },
      { t: "Sentence stress", d: "In English, a stress-timed language, stress falls at regular intervals on content words: nouns, main verbs (not auxiliaries), adjectives and adverbs.", x: "He 'went to the town and 'bought some 'oranges." },
      { t: "Emphatic stress", d: "Stress placed on one word to show contrast, realized partly as a change in pitch.", x: "'He borrowed my newspaper. (i.e. not someone else's)" },
      { t: "Rhyme", d: "Words agreeing in sound from the vowel to the end of the word.", x: "cake – take – make" },
      { t: "Voiced and voiceless consonants", d: "Voiced consonants use the vocal cords (/b/, /z/, /ð/); voiceless ones do not (/p/, /s/, /θ/).", x: "boat – both: final /t/ vs /θ/" },
      { t: "Phonetic symbols", d: "Written signs for sounds, e.g. /θ/ (thin), /ð/ (this), /ʃ/ (ship), /tʃ/ (chip).", x: "ship /ʃɪp/, chip /tʃɪp/" },
      { t: "Intonation", d: "The rise and fall of pitch; the two basic tunes are falling (statements, WH questions, commands) and rising (yes/no questions, incomplete utterances).", x: "They ar'rived to'day (falling); Did he 'see the 'principal? (rising)" }
    ],
    tf: [
      { s: "English is a stress-timed language.", a: "True", why: "Stress in English sentences tends to occur at regular intervals in time — English is called a stress-timed language." },
      { s: "Final pronouns are normally stressed in English sentences.", a: "False", why: "Final pronouns should not be stressed unless a contrast is intended; relative and possessive pronouns are not stressed." },
      { s: "A triphthong is a glide through three vowel qualities, as in 'hour' or 'fire'.", a: "True", why: "Triphthongs move through three vowel qualities in one syllable — e.g. /aʊə/ in 'hour', /aɪə/ in 'fire'." },
      { s: "Auxiliary verbs are normally stressed in English sentences.", a: "False", why: "Only nouns, main verbs (NOT auxiliaries), adjectives and adverbs are normally stressed in the stress-timed pattern." },
      { s: "The normal place for the changing pitch in intonation is the last stressed syllable of the utterance.", a: "True", why: "Placing the changing pitch elsewhere implies a contrast with the item on which it falls." }
    ],
    mcq: [
      { q: "In the pair 'boat – both', the final consonants contrast as:", o: ["/t/ and /θ/", "/t/ and /d/", "/b/ and /p/", "/t/ and /s/"], a: 0, why: "'boat' ends in the plosive /t/; 'both' ends in the dental fricative /θ/ — a final single-consonant contrast of the kind set in Paper 3." },
      { q: "Which pair tests the initial consonant contrast /ʃ/ – /tʃ/?", o: ["ship – chip", "fan – van", "pit – fit", "tuck – duck"], a: 0, why: "ship /ʃ/ vs chip /tʃ/ — an initial consonant contrast." },
      { q: "In the cluster pair 'sting – string', the contrast is in the:", o: ["vowel quality", "initial consonant cluster", "word stress", "intonation"], a: 1, why: "The initial clusters differ: /st/ in 'sting' against /str/ in 'string' — the added /r/ is the contrasted sound." },
      { q: "Which pair shows the vowel contrast iː – ɪ – ɛ?", o: ["seat – sit – set", "load – lord", "pool – pull", "but – bat"], a: 0, why: "seat /iː/, sit /ɪ/, set /ɛ/ are the classic pure-vowel triple." },
      { q: "In the pair 'let – late', the contrast is between:", o: ["a pure vowel and a diphthong", "two pure vowels", "voiced and voiceless consonants", "stressed and unstressed syllables"], a: 0, why: "'let' has the pure vowel /ɛ/; 'late' has the diphthong /eɪ/ — a pure-vowel/diphthong contrast." },
      { q: "The noun–verb stress pair below is correctly shown as:", o: ["im'port (noun) / 'import (verb)", "'import (noun) / im'port (verb)", "'import / 'import", "im'port / im'port"], a: 1, why: "'Import' is stressed on the first syllable as a noun and the second as a verb." },
      { q: "Which sentence shows the correct pattern of sentence stress?", o: ["He 'went to the town and 'bought some 'oranges.", "He went TO the TOWN and BOUGHT some ORANGES.", "'He went to the 'town and 'bought some oranges.", "He went to 'the town and bought some 'oranges."], a: 0, why: "Content words (main verbs, nouns) are stressed: 'went, 'town, 'bought, 'oranges." },
      { q: "The falling intonation pattern is used for:", o: ["yes/no questions", "statements, WH-questions and commands", "incomplete utterances", "requests for confirmation"], a: 1, why: "Falling tune: statements ('They arrived today'), WH-questions, commands ('Come here!')." },
      { q: "In 'He borrowed 'my newspaper', the emphatic stress on 'my' signals:", o: ["it was a new newspaper", "it was my newspaper, not hers", "he borrowed a book", "the newspaper was old"], a: 1, why: "Emphatic stress marks contrast: 'my' newspaper, not hers." },
      { q: "In the rising pattern 'When the 'train arrived...', the rising tune indicates the utterance is:", o: ["a complete statement", "incomplete (a dependent clause standing alone)", "a command", "an exclamation"], a: 1, why: "The rising pattern is used for incomplete utterances and yes/no questions." },
      { q: "'Bird – bed – bared' tests which feature?", o: ["consonant clusters", "vowel quality (pure vowels/diphthongs)", "word stress", "rhyme"], a: 1, why: "The three words differ only in their vowel quality." },
      { q: "In 'buzzes – buses', the contrasted consonants occur in the ___ position:", o: ["initial", "medial", "final", "stressed"], a: 1, why: "buzzes /ˈbʌzɪz/, buses /ˈbʌsɪz/ — the medial consonant is /z/ in one and /s/ in the other." },
      { q: "Which word rhymes with 'cake'?", o: ["kick", "keek", "take", "cat"], a: 2, why: "Rhyme shares the sound from the vowel to the end: cake /keɪk/ and take /teɪk/." },
      { q: "The pair 'pool – pull' contrasts:", o: ["the long vowel /uː/ and the short /ʊ/", "the final consonants", "word stress", "intonation"], a: 0, why: "pool /uːl/ against pull /pʊl/ — a pure-vowel quality/length contrast." },
      { q: "Which word contains a triphthong?", o: ["cat", "hour", "bed", "stop"], a: 1, why: "'Hour' /aʊə/ glides through three vowel qualities in one syllable." },
      { q: "The verb 'record' is stressed on which syllable?", o: ["the first ('record)", "the second (re'cord)", "both equally", "its last letter"], a: 1, why: "Noun 'record (first syllable), verb re'cord (second) — stress shifts in the word family." },
      { q: "Which word is NOT normally stressed in a sentence?", o: ["nouns", "final pronouns", "main verbs", "adjectives"], a: 1, why: "Final, relative and possessive pronouns are unstressed unless a contrast is intended." },
      { q: "In 'HE borrowed my newspaper', the emphatic stress on 'HE' signals:", o: ["nobody borrowed it", "someone else borrowed it, not he", "it was a book", "he returned it"], a: 1, why: "Emphatic stress marks contrast: it was he, not someone else." },
      { q: "Which utterance normally takes the rising tune?", o: ["Come here!", "Where did he go?", "Did he see the principal?", "They arrived today."], a: 2, why: "Yes/no questions rise; statements, WH-questions and commands fall." },
      { q: "The initial sound of 'thin' is represented by:", o: ["/θ/", "/ð/", "/ʃ/", "/t/"], a: 0, why: "'thin' begins with the voiceless dental fricative /θ/; 'this' begins with the voiced /ð/." },
      { q: "Which pair contrasts final consonant clusters?", o: ["rains – range", "ship – chip", "pit – bit", "fan – van"], a: 0, why: "rains /nz/ vs range /ndʒ/ — the final clusters differ (also felt – felled)." }
    ],
    essay: [
      { q: "Explain, with examples, the difference between word stress and sentence stress in English, and state how stress may shift within a word family.", marks: 10, outline: [
        "Word stress: one syllable of a word is emphasized (e.g. 'photograph vs photo'graph); shifting stress changes the vowel quality",
        "Word families: 'increase (n.) / in'crease (v.)', 'record (n.) / re'cord (v.)', 'subject (n.) / sub'ject (v.)'",
        "Sentence stress: stress falls at regular intervals on content words — nouns, main verbs (not auxiliaries), adjectives, adverbs",
        "Example: He 'went to the town and 'bought some 'oranges — final and relative pronouns are unstressed"
      ] },
      { q: "Describe the two basic intonation patterns of English and the sentence types that use each, with at least three examples for each pattern.", marks: 10, outline: [
        "Falling pattern: statements ('They arrived today'), WH-questions ('Where did he go?'), commands ('Come here!')",
        "Rising pattern: yes/no questions ('Did he see the principal?'), incomplete utterances ('When the train arrived...'), questions made from statements ('They arrived today?')",
        "The pitch change normally falls on the last stressed syllable; placing it elsewhere marks a contrast",
        "The two patterns may combine in longer sentences: When the 'train ar'rived, the passengers were on the platform"
      ] },
      { q: "Explain, with examples, the contrast between (a) the initial consonants /ʃ/ and /tʃ/, and (b) the final consonants /t/ and /θ/. Give two further example pairs of each.", marks: 10, outline: [
        "(a) /ʃ/ is the voiceless palato-alveolar fricative, /tʃ/ the corresponding affricate: 'ship – chip' is the syllabus pair; further: 'sheep – cheap', 'shin – chin'",
        "(b) /t/ is a plosive, /θ/ a dental fricative: 'boat – both' is the syllabus pair; further: 'wreath – wreathe' (voiceless /θ/ vs voiced /ð/), 'hit – hiss' (/t/ vs /s/) — state the place and manner of each sound",
        "Marks: 2 for each named/defined contrast + 2 for each correct pair set + accuracy of the phonetic symbols"
      ] },
      { q: "Mark the stressed syllables in 'The teacher praised the diligent student' and justify the stresses; then state the tune used in (i) 'Come here!' (ii) 'Did he pass?' and say why.", marks: 10, outline: [
        "The 'teacher praised the 'diligent 'student — content words carry the stress: nouns ('teacher, 'student), the main verb 'praised, the adjective 'diligent; the article 'the' is unstressed",
        "(i) 'Come here!' — falling tune: it is a command",
        "(ii) 'Did he pass?' — rising tune: it is a yes/no question",
        "The pitch change falls on the last stressed syllable of each tune ('here, 'pass)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Paper 3, Test of Orals (for candidates in Nigeria and Liberia). Sixty multiple-choice objective questions on a wide range of areas or aspects of Orals as contained in the syllabus. The test covers:" },
      { k: "bul", items: ["Vowels — pure vowels and diphthongs", "Consonants and clusters", "Rhymes", "Word stress / syllable structure", "Emphatic stress / intonation patterns", "Phonetic symbols"] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "CONSONANTS — single consonants: recognize and produce all significant sound contrasts (initial, medial, final). Examples: they–day, buzzes–buses, boat–both, ship–chip, fan–van, pit–fit, pit–bit, tuck–duck, card–guard, gear–jeer.",
        "Consonant clusters: initially and finally, in the right order. Examples: play–pray, rains–range, sting–string, felt–felled, scheme–scream, crime–climb, flee–free, three–tree, true–drew, drift–thrift, glade–grade, marks–masks.",
        "VOWELS — pure vowels, diphthongs and triphthongs. Examples: seat–sit, sit–set, peck–pack, pack–park, cart–cat, load–lord, pair–purr, park–port, hard–heard, word–ward, let–late, cheer–chair, pet–pat–part–pate, hat–heart–height–hate–hut, caught–cot–cut–curt, pool–pull–pole, bird–bed–bared, but–bat.",
        "STRESS — word stress: contrast stressed and unstressed syllables; stress shifts in derivations: 'increase/in'crease, 'import/im'port, 'rebel/re'bel, 'convict/con'vict, 'extract/ex'tract, 'record/re'cord, 'subject/sub'ject. Sentence stress: stress-timed; only nouns, main verbs (not auxiliaries), adjectives and adverbs are stressed; final, relative and possessive pronouns unstressed unless contrasted. Emphatic stress: used to indicate contrast, realized partly as a change in pitch (He borrowed 'my newspaper; He' borrowed my newspaper; He borrowed my 'newspaper; 'He borrowed my newspaper).",
        "INTONATION — two basic tunes: falling (statements, WH-questions, commands) and rising (yes/no questions, incomplete utterances, question intonation on statements). The pitch change normally falls on the last stressed syllable; unstressed syllables after it take a low level pitch (falling) or continue the rise (rising). The same rule applies to tags following quoted speech."
      ] },
      { k: "h3", t: "Worked examples — step-by-step solutions" },
      { k: "bul", items: [
        "Initial contrast worked: 'ship /ʃɪp/ – chip /tʃɪp/' — same vowel and final consonant; only the initial sound contrasts. Build the same way: 'fan – van' (/f/ vs /v/), 'tuck – duck' (/t/ vs /d/).",
        "Final clusters ordered correctly: 'felt – felled' — /lt/ against /ld/; say each word aloud and isolate the last two sounds before comparing.",
        "Vowel triple identified: 'seat – sit – set' = /iː/ – /ɪ/ – /ɛ/. When asked 'which feature?', answer vowel quality — the opening and closing consonants are identical.",
        "Stress shift in a family: 'record → re'cord: mark the stressed syllable with a tick (' or ˈ) before the stressed syllable, and note the vowel reduction in the unstressed one.",
        "Sentence stress marked: He 'went to the 'town and 'bought some 'oranges — four content words stressed; 'to the' and 'some' light; the pronoun 'he' is light too unless contrasted.",
        "Tune chosen and marked: 'They ar'rived to'day (falling — statement); Did he 'see the 'principal? (rising — yes/no question). The mark goes before the last stressed syllable."
      ] }
    ]
  }
  ]
};
window.WA_SUBJECTS.en = window.WA_en;
