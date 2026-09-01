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
      { t: "Homonym", d: "Words that are spelt and/or pronounced alike but differ in meaning.", x: "bank (river) / bank (money)" }
    ],
    tf: [
      { s: "WASSCE lexis items test candidates on dictionary definitions and explanations.", a: "False", why: "All items are phrased to test the use and understanding of the required lexis, not dictionary definitions." },
      { s: "The term 'general vocabulary' excludes specialized words of a field, such as 'berm' or 'camber'.", a: "True", why: "Educated people should know 'pedestrian bridge' and 'traffic signs', but not the specialized 'berm' or 'camber'." },
      { s: "In the test of figurative language, candidates recognize when an expression is used figuratively and not only when used literally.", a: "True", why: "Candidates are expected to recognize figurative as well as literal usage." }
    ],
    mcq: [
      { q: "Choose the word closest in meaning to 'benevolent':", o: ["cruel", "kind", "rich", "silent"], a: 1, why: "Benevolent means kind and generous." },
      { q: "Choose the word opposite in meaning to 'scarce':", o: ["rare", "plentiful", "fragile", "hidden"], a: 1, why: "The antonym of scarce is abundant/plentiful." },
      { q: "In the sentence 'The meeting ended in a fiasco', the word 'fiasco' means:", o: ["a great failure", "a celebration", "a small room", "a kind of food"], a: 0, why: "Fiasco = a complete failure." },
      { q: "'It costs an arm and a leg' is an example of:", o: ["a simile", "an idiom", "a proverb", "an aphorism"], a: 1, why: "The phrase is idiomatic — its meaning (very expensive) is not deducible from its words." },
      { q: "'The wind whispered through the trees' uses which figure of speech?", o: ["Simile", "Personification", "Hyperbole", "Metonymy"], a: 1, why: "The wind is given a human action (whispering) — personification." },
      { q: "Choose the word closest in meaning to 'reluctant':", o: ["willing", "unwilling", "proud", "eager"], a: 1, why: "Reluctant = unwilling, hesitant." },
      { q: "'He is the black sheep of the family' means he is the:", o: ["wealthiest member", "disgrace or odd one out", "oldest member", "favourite member"], a: 1, why: "Idiomatic use: the black sheep is the disreputable or different member of a group." },
      { q: "Which pair contains a homophone?", o: ["flower / flour", "hot / cold", "big / small", "car / bus"], a: 0, why: "'Flower' and 'flour' sound alike but differ in meaning and spelling." },
      { q: "The collocation '___ a decision' is correctly completed with:", o: ["do", "make", "take", "give"], a: 1, why: "The accepted collocation is 'make a decision'." },
      { q: "Vocabulary associated with 'stock exchange' falls under which field of the syllabus?", o: ["Health", "Government and administration", "Finance and commerce", "Sports"], a: 2, why: "Stock exchange, commerce, banking and insurance are financial/commercial fields of lexis." }
    ],
    essay: [
      { q: "In a passage of 350 words (provided at the examination), five words or phrases are underlined. Find appropriate equivalents for each from the passage itself, and use two of them in new sentences of your own.", marks: 10, outline: [
        "Locate the underlined words in context and find synonyms that fit that context",
        "Rewrite two of them in original sentences that show correct usage",
        "Marks are awarded for sense relations (synonyms) and accurate, natural usage"
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
      { t: "Antecedent", d: "The noun or pronoun to which a later pronoun refers.", x: "In 'Kofi did his work', 'Kofi' is the antecedent of 'his'." }
    ],
    tf: [
      { s: "Matching of pronouns with their antecedents is part of the WASSCE structure syllabus.", a: "True", why: "Structure includes the sequence of tenses, concord, and the matching of pronouns with their antecedents." },
      { s: "Structure questions may ask for the definition of a preposition.", a: "False", why: "Items test the use of structural words in context, not their definitions." }
    ],
    mcq: [
      { q: "Choose the grammatically correct sentence:", o: ["Neither of the boys were present.", "Neither of the boys was present.", "Neither of the boys have been present.", "Neither of the boys are present."], a: 1, why: "'Neither' is singular, so it takes the singular verb 'was'." },
      { q: "The passive voice of 'The committee will approve the plan' is:", o: ["The plan will approve by the committee.", "The plan will be approved by the committee.", "The plan is approved by the committee.", "The plan was approved by the committee."], a: 1, why: "Future simple passive: will + be + past participle." },
      { q: "Choose the correctly punctuated sentence:", o: ["Where are you going?", "Where are you going?", "Where, are you going?", "Where are, you going?"], a: 1, why: "A question mark closes a direct question; no comma after 'Where'." },
      { q: "The sentence 'She has been studying for three hours' is in the:", o: ["present simple", "present continuous", "present perfect continuous", "past continuous"], a: 2, why: "has/have + been + -ing = present perfect continuous." },
      { q: "'I am tired,' he said. In reported speech:", o: ["He said he is tired.", "He said he was tired.", "He says he was tired.", "He said he had been tired."], a: 1, why: "In reported speech the present simple backshifts to the past simple." },
      { q: "The plural of 'cactus' is:", o: ["cactuses", "cacti", "both (a) and (b)", "cactus's"], a: 2, why: "Both 'cactuses' and 'cacti' are accepted plurals." },
      { q: "Choose the correctly spelt word:", o: ["neccessary", "necessary", "necesary", "neccesary"], a: 1, why: "Necessary has one 'c' and two 's's." },
      { q: "'Let's go home' — the contraction 'Let's' stands for:", o: ["let him", "let us", "lets us", "let it"], a: 1, why: "'Let's' = 'let us' (suggestion form)." },
      { q: "In 'The book which I bought was expensive', the clause 'which I bought' is:", o: ["a main clause", "a relative (defining) clause", "an adverbial clause", "a noun clause"], a: 1, why: "'which I bought' is a defining relative clause modifying 'the book'." },
      { q: "If I ___ you, I would apologize. Choose the correct form:", o: ["am", "was", "were", "be"], a: 2, why: "The subjunctive 'were' is used in the second conditional (unreal present)." },
      { q: "The function of 'and' in 'He is brave and honest' is:", o: ["a preposition", "a coordinating conjunction", "a subordinating conjunction", "a determiner"], a: 1, why: "'And' joins two coordinate adjectives — a coordinating conjunction." },
      { q: "Choose the sentence with the correct apostrophe:", o: ["The students book", "The student's books", "The students' books", "The students books'"], a: 2, why: "Plural possessive of 'students': the apostrophe comes after the final s." }
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
      { t: "Formal features", d: "The conventions of each form: date, salutation and sign-off for letters; 'Ladies and gentlemen' for speeches; headings for reports and articles.", x: "A formal letter opens with the sender's address and date" }
    ],
    tf: [
      { s: "The minimum length for a WASSCE English essay is 450 words.", a: "True", why: "The minimum length will be 450 words." },
      { s: "Candidates must answer all five essay topics in Section A.", a: "False", why: "There are five questions in all and candidates answer only one." }
    ],
    mcq: [
      { q: "A formal letter to a company's managing director should open with:", o: ["'Dear Friend,'", "'Dear Sir / Madam,'", "'Hello there,'", "'Hi Boss,'"], a: 1, why: "Formal correspondence to an unknown or titled recipient uses 'Dear Sir/Madam' or the title." },
      { q: "Which of the following is a feature of a speech but not of an essay?", o: ["Paragraphing", "Direct address to the audience", "A thesis statement", "Quotations"], a: 1, why: "Speeches address the audience directly ('Ladies and gentlemen...')." },
      { q: "The best opening for a descriptive essay is usually:", o: ["a list of facts", "a vivid scene that draws the reader in", "the conclusion of the essay", "an apology to the reader"], a: 1, why: "Description works by concrete, sensory imagery from the first paragraph." },
      { q: "In an argumentative essay, the writer should:", o: ["present only one side", "present both sides and defend a position", "avoid giving a conclusion", "use only short sentences"], a: 1, why: "Argument weighs both sides and takes a defended position." },
      { q: "A report should normally be written in which tone?", o: ["emotive and personal", "formal and objective", "humorous", "poetic"], a: 1, why: "Reports are formal, objective and factual." },
      { q: "The 'exposition' form of writing is best described as:", o: ["telling a story", "explaining or setting out ideas clearly", "describing a place", "quoting a speech"], a: 1, why: "Exposition explains, interprets or informs — it sets out ideas." }
    ],
    essay: [
      { q: "Write an essay of 450–600 words on one of the following: (a) The day I won first prize in a debate. (b) My most unforgettable experience. (c) The importance of literacy in national development. (d) A speech you delivered at a school function. (e) The problems of youth unemployment and ways of solving them.", marks: 50, outline: [
        "PLAN (5 min): choose the form the topic demands; list 4–6 relevant ideas; decide the opening and the conclusion",
        "Content: develop ideas relevant to the topic with specific details and examples",
        "Organization: a clear introduction; one idea per paragraph in logical (chronological, spatial or logical) order; a strong concluding paragraph",
        "Expression: vary sentence patterns; precise, formal vocabulary; avoid repetition",
        "Mechanical accuracy: check grammar, punctuation and spelling before time expires; keep to the minimum 450 words"
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
      { k: "p", t: "The minimum length will be 450 words." }
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
      { t: "Literary term", d: "A named device of writing — metaphor, simile, irony, personification, allusion, etc. — to be identified and explained in context.", x: "'Time is a thief' is a metaphor" }
    ],
    tf: [
      { s: "The comprehension passage will be at least 350 words long.", a: "True", why: "The section consists of one passage of at least three hundred and fifty (350) words." },
      { s: "Candidates may answer only some of the questions in Section B.", a: "False", why: "Candidates are required to answer all the questions on the passage." },
      { s: "At least four comprehension questions are based on identifying and labelling grammatical structures and explaining their functions.", a: "True", why: "The test will include at least four questions based on identifying and labelling basic grammatical structures, words, phrases or clauses and explaining their functions." }
    ],
    mcq: [
      { q: "In a comprehension passage, 'The manager frowned and said nothing' most likely shows the manager was:", o: ["happy", "silent by choice but displeased", "asleep", "confused about the time"], a: 1, why: "'Frowned' signals displeasure; the inference, not a stated fact, is tested." },
      { q: "The word 'gregarious' in 'a gregarious host' is best equated with:", o: ["shy", "talkative and sociable", "wealthy", "strict"], a: 1, why: "Gregarious = fond of company; sociable." },
      { q: "Which of the following is a passive recasting of 'They will cancel the flight'?", o: ["The flight will be cancelled by them.", "They cancelled the flight.", "The flight cancels them.", "They are cancelling the flight."], a: 0, why: "Future simple passive: the flight will be cancelled (by them)." },
      { q: "'As the minutes ticked by, her heart sank' uses which device?", o: ["Simile", "Personification", "Irony", "Hyperbole"], a: 1, why: "A heart cannot literally sink — personification of emotion." },
      { q: "The clause 'who had just arrived' in 'The student who had just arrived sat down' is a:", o: ["noun clause", "defining relative clause", "purpose clause", "result clause"], a: 1, why: "'who had just arrived' is a relative clause defining which student." },
      { q: "A writer who calls a failed policy 'a triumph' is using:", o: ["euphemism", "irony", "metaphor", "onomatopoeia"], a: 1, why: "Saying the opposite of what is meant to mock or criticize — irony." }
    ],
    essay: [
      { q: "(Passage of 350+ words provided at the examination) Answer ALL questions on the passage: find equivalents for the underlined words, answer questions on factual content, make the inferences asked, identify the grammatical structures and literary terms required, and recast the given sentence.", marks: 20, outline: [
        "Read the passage twice before answering",
        "Equivalents: choose words that fit THIS context, not just dictionary synonyms",
        "Inferences: base the answer on evidence from the text and state the clue",
        "Grammar items: name the structure (e.g. 'participle clause') and state its function (e.g. 'modifying the subject')",
        "Recasting: keep the original sense exactly; change the required structure (active↔passive, direct↔indirect, etc.)"
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
      { t: "Word count", d: "The summary must fall within the stated range (usually a third of the passage length).", x: "About 160 words from a 500-word passage" }
    ],
    tf: [
      { s: "A WASSCE summary may quote the passage word for word for most of its length.", a: "False", why: "The summary must be in the candidate's own, concise words — repetition and redundancy are penalized." },
      { s: "The summary passage is about 500 words long.", a: "True", why: "The section consists of one prose passage of about five hundred (500) words." }
    ],
    mcq: [
      { q: "Which of the following is the best summary of: 'The old man, who had spent forty years fishing the same bay, finally sold his boat after the nets came up empty for the ninth morning running.'?", o: ["The old man fished for forty years.", "After nine empty mornings, the veteran fisherman sold his boat.", "The nets were empty.", "He had a boat."], a: 1, why: "It keeps the essential meaning (veteran fisherman, nine empty mornings, sold the boat) in one concise sentence." },
      { q: "The phrase 'in order to save time' may be condensed to:", o: ["for the purpose of time-saving", "to save time", "so that one could possibly save a bit of time", "with a view to the saving of time"], a: 1, why: "'To save time' is the shortest equivalent." },
      { q: "A summary should be written in the:", o: ["first person", "second person", "third person", "any person the writer prefers"], a: 2, why: "Summaries are conventionally in the third person ('the author states...')." },
      { q: "If a passage is 480 words, a typical WASSCE summary length is about:", o: ["40 words", "120–160 words", "300 words", "480 words"], a: 1, why: "Summaries are roughly a third of the passage length." }
    ],
    essay: [
      { q: "(Prose passage of about 500 words provided at the examination) Write a summary of the passage on the given theme, in about 160 words, using your own words and avoiding repetition and redundancy.", marks: 30, outline: [
        "Read the passage fully; underline only the points demanded by the theme",
        "Write the theme line first (examiners award marks for it)",
        "Summarize in the third person, in your own words, one sentence per point",
        "Condense: replace phrases with words, drop examples that are not required, keep proper nouns",
        "Check: word count in range, no direct copying of long phrases, no personal comments"
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
      { t: "Diphthongs", d: "Gliding two-vowel sounds, as in 'pair', 'caught', 'pool'.", x: "pair – purr – pair" },
      { t: "Triphthongs", d: "Three-vowel glides, as in 'height', 'caught', 'outer'.", x: "height – hate – hut" },
      { t: "Consonant cluster", d: "Two or more consonant sounds occurring together without a vowel between them, initially (play, sting, scheme) or finally (rains, felt, sent).", x: "'sting' – 'string'" },
      { t: "Word stress", d: "The emphasized syllable of a word; stress may shift between derivations, changing the vowel quality.", x: "'increase (noun) / in'crease (verb); 'record / re'cord" },
      { t: "Sentence stress", d: "In English, a stress-timed language, stress falls at regular intervals on content words: nouns, main verbs (not auxiliaries), adjectives and adverbs.", x: "He 'went to the town and 'bought some 'oranges." },
      { t: "Emphatic stress", d: "Stress placed on one word to show contrast, realized partly as a change in pitch.", x: "'He borrowed my newspaper. (i.e. not someone else's)" },
      { t: "Intonation", d: "The rise and fall of pitch; the two basic tunes are falling (statements, WH questions, commands) and rising (yes/no questions, incomplete utterances).", x: "They ar'rived to'day (falling); Did he 'see the 'principal? (rising)" }
    ],
    tf: [
      { s: "English is a stress-timed language.", a: "True", why: "Stress in English sentences tends to occur at regular intervals in time — English is called a stress-timed language." },
      { s: "Final pronouns are normally stressed in English sentences.", a: "False", why: "Final pronouns should not be stressed unless a contrast is intended; relative and possessive pronouns are not stressed." },
      { s: "The normal place for the changing pitch in intonation is the last stressed syllable of the utterance.", a: "True", why: "Placing the changing pitch elsewhere implies a contrast with the item on which it falls." }
    ],
    mcq: [
      { q: "Which pair contains a final voiced–voiceless consonant contrast?", o: ["boat – both", "breathe – breed", "wash – watch", "play – pray"], a: 2, why: "'Wash' ends in voiceless /ʃ/; 'watch' ends in voiced /tʃ/." },
      { q: "Which pair tests the initial consonant contrast /ʃ/ – /tʃ/?", o: ["ship – chip", "fan – van", "pit – fit", "tuck – duck"], a: 0, why: "ship /ʃ/ vs chip /tʃ/ — an initial consonant contrast." },
      { q: "In the cluster pair 'sting – string', the contrasting sound is:", o: ["vowel quality", "the final consonant cluster", "word stress", "intonation"], a: 1, why: "The final cluster /ŋ/ – /ŋɡ/ (or initial /st/ – /str/) is the tested feature." },
      { q: "Which pair shows the vowel contrast iː – ɪ – ɛ?", o: ["seat – sit – set", "load – lord", "pool – pull", "but – bat"], a: 0, why: "seat /iː/, sit /ɪ/, set /ɛ/ are the classic pure-vowel triple." },
      { q: "Which pair shows the contrast between a diphthong and a long pure vowel?", o: ["let – late", "cheer – chair", "hat – heart", "caught – cot"], a: 1, why: "'Cheer' (diphthong) vs 'chair' (different diphthong/vowel quality) — vowel contrast in isolation." },
      { q: "The noun–verb stress pair below is correctly shown as:", o: ["im'port (noun) / 'import (verb)", "'import (noun) / im'port (verb)", "'import / 'import", "im'port / im'port"], a: 1, why: "'Import' is stressed on the first syllable as a noun and the second as a verb." },
      { q: "Which sentence shows the correct pattern of sentence stress?", o: ["He 'went to the town and 'bought some 'oranges.", "He went TO the TOWN and BOUGHT some ORANGES.", "'He went to the 'town and 'bought some oranges.", "He went to 'the town and bought some 'oranges."], a: 0, why: "Content words (main verbs, nouns) are stressed: 'went, 'town, 'bought, 'oranges." },
      { q: "The falling intonation pattern is used for:", o: ["yes/no questions", "statements, WH-questions and commands", "incomplete utterances", "requests for confirmation"], a: 1, why: "Falling tune: statements ('They arrived today'), WH-questions, commands ('Come here!')." },
      { q: "In 'He borrowed 'my newspaper', the emphatic stress on 'my' signals:", o: ["it was a new newspaper", "it was my newspaper, not hers", "he borrowed a book", "the newspaper was old"], a: 1, why: "Emphatic stress marks contrast: 'my' newspaper, not hers." },
      { q: "In the rising pattern 'When the 'train arrived...', the rising tune indicates the utterance is:", o: ["a complete statement", "incomplete (a dependent clause standing alone)", "a command", "an exclamation"], a: 1, why: "The rising pattern is used for incomplete utterances and yes/no questions." },
      { q: "'Bird – bed – bared' tests which feature?", o: ["consonant clusters", "vowel quality (pure vowels/diphthongs)", "word stress", "rhyme"], a: 1, why: "The three words differ only in their vowel quality." }
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
      ] }
    ]
  }
  ]
};
window.WA_SUBJECTS.en = window.WA_en;
