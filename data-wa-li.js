/* WASSCE (WAEC) — LITERATURE IN ENGLISH course data: the set texts for
   2016–2020 (African and Non-African prose, the Shakespearean text,
   African and Non-African drama, African and Non-African poetry), the
   general knowledge of literature and the unseen components, and the
   scheme of examination. */
window.WA_li = {
  id: "li",
  name: "Literature in English",
  preamble: "The WASSCE Literature in English syllabus (set texts for 2016–2020) comprises: African Prose (Amma Darko — Faceless; Bayo Adebowale — Lonely Days); Non-African Prose (Richard Wright — Native Son; Patience Swift — The Last Goodman); the Shakespearean text (William Shakespeare — Othello, context questions only); Non-African Drama (Oliver Goldsmith — She Stoops to Conquer; Lorraine Hansberry — A Raisin in the Sun); African Drama (Frank Ogodo Ogbeche — Harvest of Corruption; Dele Charley — The Blood of a Stranger); African Poetry (Birago Diop — Vanity; Gbemisola Adeoti — Ambush; Gabriel Okara — Piano and Drums; Gbanabam Hallowell — The Dining Table; Lenrie Peter — The Panic of Growing Older; Kofi Awoonor — The Anvil and the Hammer); and Non-African Poetry (Alfred Tennyson — Crossing the Bar; George Herbert — The Pulley; William Blake — The School Boy; William Morris — The Proud King; Robert Frost — Birches; William Shakespeare — Shall I compare thee to a Summer's Day?). Candidates also prepare for the general knowledge of literature and the unseen prose and poetry passages.",
  aims: [
    "read, study and appreciate the prescribed set texts (the prose, the Shakespearean text, the drama and the poetry);",
    "develop the skills of the analysis of the theme, the characterization, the style and the setting;",
    "prepare for the general knowledge of literature and the unseen prose and the unseen poem;",
    "express the responses to the texts in the essay and the objective forms."
  ],
  papers: [
    { n: "Paper 1", d: "A multiple-choice objective test of fifty questions: twenty on the General Knowledge of Literature; five on an unseen prose passage (about 120–150 words); five on an unseen poem; and twenty context questions on the prescribed Shakespearean text. Candidates answer ALL within 1 hour for 50 marks." },
    { n: "Paper 2", d: "An essay test with two sections — Section A on African Prose and Section B on Non-African Prose. Two essay questions are set on each of the novels prescribed for study; candidates answer ONE question only from each section within 1 hour 15 minutes for 50 marks." },
    { n: "Paper 3", d: "On the Drama and Poetry components, in four sections — Section A: African Drama; Section B: Non-African Drama; Section C: African Poetry; Section D: Non-African Poetry. Two questions on each of the prescribed drama texts (A and B) and two questions for each of the poetry sections (C and D); candidates answer ONE question from each section (four in total) within 2 hours 30 minutes for 100 marks." }
  ],
  units: [
  /* =============== LI1 · FACELESS =============== */
  {
    grade: 12, sem: "One", icon: "📖", period: "LI1",
    title: "African Prose I — Faceless",
    subtitle: "Amma Darko · the story of the trafficking of the young women in Accra · themes: the trafficking, the poverty, the exploitation, the resilience",
    note: "African Prose (set text 2016–2020): Amma Darko, Faceless — a novel on the trafficking of the young women (the girls) in Accra. Paper 2 Section A: two essay questions are set; answer one (50 marks in total, with Section B).",
    objectives: [
      "Summarize the plot of Faceless (the journey of the protagonist, Esi, from the village to Accra, and her entanglement in the trafficking)",
      "Analyze the main characters (Esi, the traffickers, the other girls) and their development",
      "Discuss the themes (the trafficking of the women, the poverty, the exploitation, the corruption, the resilience)",
      "Appreciate the style and the setting (the urban — rural contrast, the first-person narration)"
    ],
    terms: [
      { t: "Faceless (the novel)", d: "The novel by Amma Darko (the Ghanaian author) — the story of the trafficking of the young women in Accra.", x: "The story of Esi" },
      { t: "Esi", d: "The protagonist — the young woman from the village, who comes to Accra and is drawn into the trafficking.", x: "The voice of the novel" },
      { t: "Trafficking", d: "The criminal trade of the people (the women, the girls) — the abduction, the exploitation (the sexual, the labour), the deception.", x: "The trafficking of the girls" },
      { t: "The setting", d: "Accra (the city) and the village — the contrast of the urban and the rural.", x: "The streets of Accra" },
      { t: "The theme of the poverty", d: "The poverty (in the village) as the root of the trafficking — the vulnerability of the girls.", x: "The push factor" },
      { t: "The theme of the exploitation", d: "The exploitation of the women (the sexual, the economic) by the traffickers.", x: "The abuse" },
      { t: "The theme of the resilience", d: "The resilience of the women (the survival, the resistance) against the exploitation.", x: "The survival" },
      { t: "The first-person narration", d: "The story told in the first person (the 'I') — the direct voice of the protagonist.", x: "The personal account" }
    ],
    tf: [
      { s: "Faceless is a novel by the Ghanaian author, Amma Darko.", a: "True", why: "The African prose set text — Amma Darko, Faceless." },
      { s: "The novel is set in the village only, and never in the city.", a: "False", why: "The setting — Accra (the city) and the village (the urban — rural contrast)." },
      { s: "The trafficking of the women is the central theme of the novel.", a: "True", why: "The novel is on the trafficking of the young women in Accra." },
      { s: "The novel uses the first-person narration.", a: "True", why: "The style — the first-person narration (the voice of the protagonist)." }
    ],
    mcq: [
      { q: "Faceless is a novel by:", o: ["Amma Darko", "Bayo Adebowale", "Richard Wright", "Patience Swift"], a: 0, why: "The African prose set text — Amma Darko." },
      { q: "The protagonist of Faceless is:", o: ["Esi", "Bintou", "Ama", "Adaeze"], a: 0, why: "Esi — the young woman from the village." },
      { q: "The novel is set mainly in:", o: ["Accra (the city)", "the village only", "Lagos", "the countryside of France"], a: 0, why: "The setting — Accra (and the village)." },
      { q: "The central theme of the novel is the:", o: ["trafficking of the women", "the history of the Ghana", "the war", "the sport"], a: 0, why: "The trafficking of the young women in Accra." },
      { q: "The narration of the novel is in the:", o: ["first person", "the third person only", "the second person", "the omniscient only"], a: 0, why: "The style — the first-person narration." }
    ],
    essay: [
      { q: "Discuss the theme of the trafficking of the women in Faceless, with reference to the characters and the events. How does the novel present the causes and the effects of the trafficking?", marks: 25, outline: [
        "The theme of the trafficking: the criminal trade of the women (the girls) — the abduction, the deception, the exploitation (the sexual, the labour) and the sale",
        "The causes: (1) the poverty (in the village) — the vulnerability of the girls, the search for the better life; (2) the deception (the false promise — the job, the education) by the traffickers; (3) the corruption (the complicity of the adults) and the lack of the law enforcement",
        "The characters: Esi (the protagonist — the victim and the survivor), the traffickers (the exploiters — the masterminds), the other girls (the victims — the shared experience), and the adults (the enablers / the protectors)",
        "The effects: (1) on the victims — the physical and the psychological trauma, the loss of the dignity, the disease; (2) on the family and the community — the shame, the broken future; (3) on the society — the normalization of the crime, the loss of the human capital",
        "The resilience: the survival of the women, the resistance, and the hope (the ending) — the message of the novel",
        "Conclusion: the novel as the social commentary (the exposure of the crime, the call for the awareness and the action)"
      ] },
      { q: "Analyze the main characters in Faceless. How do the characters develop through the novel, and how do they contribute to the themes?", marks: 25, outline: [
        "Esi (the protagonist): the journey (from the village to Accra), the entanglement (the deception, the exploitation), the realization (the truth of the trafficking), and the resilience (the survival, the resistance); the development (from the innocence to the awareness)",
        "The traffickers: the masterminds (the exploitation, the deception), the representation of the crime (the coldness, the power); the contribution to the theme (the cause of the suffering)",
        "The other girls: the victims (the shared experience, the solidarity), the diversity of the backgrounds (the village, the city); the contribution (the breadth of the theme)",
        "The adults: the enablers (the complicity) and the protectors (the rescue) — the contrast; the contribution (the social dimension)",
        "The characterization: the first-person narration (the direct voice), the dialogue, and the description; the realism (the authentic presentation)",
        "Conclusion: the characters as the vehicles of the themes (the trafficking, the poverty, the exploitation, the resilience)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus — African Prose (set texts for 2016–2020):" },
      { k: "bul", items: [
        "Amma Darko — Faceless",
        "The story of the trafficking of the young women (the girls) in Accra — the plot: the journey of the protagonist, Esi, from the village to Accra, and her entanglement in the trafficking",
        "Themes: the trafficking of the women, the poverty (the root), the exploitation, the corruption, the resilience",
        "Style and setting: the urban — rural contrast (Accra and the village), the first-person narration",
        "Paper 2, Section A: two essay questions are set on the novel — answer ONE (the theme, the characterization, the style, the setting)"
      ] }
    ]
  },
  /* =============== LI2 · LONELY DAYS =============== */
  {
    grade: 12, sem: "One", icon: "📖", period: "LI2",
    title: "African Prose II — Lonely Days",
    subtitle: "Bayo Adebowale · the story of the immigrant experience in the diaspora · themes: the alienation, the identity, the nostalgia",
    note: "African Prose (set text 2016–2020): Bayo Adebowale, Lonely Days — a novel on the immigrant experience in the diaspora. Paper 2 Section A: two essay questions are set; answer one (50 marks in total, with Section B).",
    objectives: [
      "Summarize the plot of Lonely Days (the story of the immigrant, the journey, the settlement)",
      "Analyze the main characters and their development",
      "Discuss the themes (the alienation, the identity, the nostalgia, the culture clash)",
      "Appreciate the style and the setting (the diaspora, the dual setting)"
    ],
    terms: [
      { t: "Lonely Days (the novel)", d: "The novel by Bayo Adebowale (the Nigerian author) — the story of the immigrant experience in the diaspora.", x: "The story of the immigrant" },
      { t: "The diaspora", d: "The community of the people who have left the homeland (the migration to the foreign land).", x: "The Nigerian in the diaspora" },
      { t: "The alienation", d: "The feeling of the isolation and the exclusion (in the foreign land) — a major theme.", x: "The loneliness of the immigrant" },
      { t: "The identity", d: "The sense of the self (the cultural, the personal) — the question of the identity in the diaspora.", x: "The loss of the identity" },
      { t: "The nostalgia", d: "The longing for the homeland (the memory, the past).", x: "The longing for the home" },
      { t: "The culture clash", d: "The conflict of the cultures (the homeland and the host country).", x: "The clash of the values" },
      { t: "The dual setting", d: "The setting in the two places (the homeland and the diaspora).", x: "Nigeria and the foreign land" }
    ],
    tf: [
      { s: "Lonely Days is a novel by the Nigerian author, Bayo Adebowale.", a: "True", why: "The African prose set text — Bayo Adebowale." },
      { s: "The novel is on the immigrant experience in the diaspora.", a: "True", why: "The story of the immigrant experience in the diaspora." },
      { s: "The alienation is not a theme of the novel.", a: "False", why: "The alienation (the isolation in the foreign land) is a major theme." },
      { s: "The novel uses the dual setting (the homeland and the diaspora).", a: "True", why: "The style and the setting — the dual setting." }
    ],
    mcq: [
      { q: "Lonely Days is a novel by:", o: ["Bayo Adebowale", "Amma Darko", "Richard Wright", "Patience Swift"], a: 0, why: "The African prose set text — Bayo Adebowale." },
      { q: "The novel is on the:", o: ["the immigrant experience in the diaspora", "the civil war", "the courtship", "the farming"], a: 0, why: "The story of the immigrant experience in the diaspora." },
      { q: "The feeling of the isolation and the exclusion in the foreign land is the:", o: ["the alienation", "the nostalgia", "the identity", "the culture clash"], a: 0, why: "The alienation — a major theme." },
      { q: "The longing for the homeland is the:", o: ["the nostalgia", "the alienation", "the diaspora", "the identity"], a: 0, why: "The nostalgia." },
      { q: "The conflict of the cultures (the homeland and the host country) is the:", o: ["the culture clash", "the alienation", "the nostalgia", "the setting"], a: 0, why: "The culture clash." }
    ],
    essay: [
      { q: "Discuss the theme of the alienation in Lonely Days, with reference to the characters and the events. How does the novel present the experience of the immigrant in the diaspora?", marks: 25, outline: [
        "The theme of the alienation: the feeling of the isolation and the exclusion (in the foreign land) — the loneliness of the immigrant",
        "The presentation: (1) the social alienation (the exclusion from the society of the host country, the racism, the prejudice); (2) the cultural alienation (the culture clash, the loss of the customs); (3) the psychological alienation (the loneliness, the depression, the identity crisis)",
        "The characters: the protagonist (the immigrant — the experience of the alienation), the family (the support / the distance), and the people of the host country (the hosts — the acceptance / the rejection)",
        "The events: the journey (the departure, the arrival), the settlement (the job, the housing), and the adaptation (the struggle, the compromise)",
        "The other themes: the identity (the question of the self), the nostalgia (the longing for the homeland), and the hope (the survival, the integration)",
        "Conclusion: the novel as the study of the immigrant experience (the challenges and the resilience)"
      ] },
      { q: "Analyze the main characters in Lonely Days. How do the characters develop through the novel, and how do they contribute to the themes (the alienation, the identity, the nostalgia)?", marks: 25, outline: [
        "The protagonist (the immigrant): the journey (the departure, the arrival), the settlement (the struggle), and the adaptation (the compromise, the integration); the development (from the hope to the disillusionment, and to the acceptance)",
        "The family: the support (the encouragement) and the distance (the separation, the time zone) — the contribution to the theme of the nostalgia",
        "The people of the host country: the hosts (the acceptance, the racism, the indifference) — the contribution to the theme of the alienation",
        "The characterization: the first-person / the third-person narration, the dialogue, and the description; the realism (the authentic presentation of the experience)",
        "The contribution of the characters to the themes: the alienation (the isolation), the identity (the question of the self), and the nostalgia (the longing)",
        "Conclusion: the characters as the vehicles of the themes (the immigrant experience)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus — African Prose (set texts for 2016–2020):" },
      { k: "bul", items: [
        "Bayo Adebowale — Lonely Days",
        "The story of the immigrant experience in the diaspora — the plot: the journey (the departure, the arrival), the settlement, and the adaptation",
        "Themes: the alienation (the isolation in the foreign land), the identity (the question of the self), the nostalgia (the longing for the homeland), the culture clash",
        "Style and setting: the dual setting (the homeland and the diaspora), the realistic presentation",
        "Paper 2, Section A: two essay questions are set on the novel — answer ONE (the theme, the characterization, the style, the setting)"
      ] }
    ]
  },
  /* =============== LI3 · NATIVE SON =============== */
  {
    grade: 12, sem: "One", icon: "📘", period: "LI3",
    title: "Non-African Prose I — Native Son",
    subtitle: "Richard Wright · the story of Bigger Thomas in the ghettos of Chicago · themes: the racism, the poverty, the identity",
    note: "Non-African Prose (set text 2016–2020): Richard Wright, Native Son — a novel on the life of the black American (Bigger Thomas) in the ghettos of Chicago. Paper 2 Section B: two essay questions are set; answer one (50 marks in total, with Section A).",
    objectives: [
      "Summarize the plot of Native Son (the three parts: the Fire, the Crime, the Verdict)",
      "Analyze the main characters (Bigger Thomas, Mary, the family) and their development",
      "Discuss the themes (the racism, the poverty, the identity, the environment)",
      "Appreciate the style and the setting (the naturalism, the ghettos of Chicago)"
    ],
    terms: [
      { t: "Native Son (the novel)", d: "The novel by Richard Wright (the American author) — the story of Bigger Thomas, the black American, in the ghettos of Chicago.", x: "The story of Bigger Thomas" },
      { t: "Bigger Thomas", d: "The protagonist — the young black man, trapped by the racism and the poverty.", x: "The voice of the novel" },
      { t: "The ghettos", d: "The areas of the segregation (the slums) where the black Americans live — the setting of the novel.", x: "The South Side of Chicago" },
      { t: "The theme of the racism", d: "The racism (the discrimination, the prejudice) as the cause of the tragedy — a major theme.", x: "The discrimination" },
      { t: "The theme of the poverty", d: "The poverty (in the ghettos) as the condition of the life of the black Americans.", x: "The slums" },
      { t: "The theme of the identity", d: "The question of the identity (the black American in the white society).", x: "The question of the self" },
      { t: "The naturalism", d: "The literary style that presents the life as determined by the environment (the heredity, the circumstance).", x: "The deterministic style" },
      { t: "The three parts", d: "The structure of the novel — the Fire, the Crime, and the Verdict.", x: "The three movements" }
    ],
    tf: [
      { s: "Native Son is a novel by the American author, Richard Wright.", a: "True", why: "The non-African prose set text — Richard Wright." },
      { s: "The protagonist of the novel is Bigger Thomas.", a: "True", why: "Bigger Thomas — the young black man in the ghettos of Chicago." },
      { s: "The novel is set in the countryside of the America.", a: "False", why: "The setting — the ghettos (the slums) of Chicago." },
      { s: "The novel is divided into three parts: the Fire, the Crime, and the Verdict.", a: "True", why: "The structure of the novel." }
    ],
    mcq: [
      { q: "Native Son is a novel by:", o: ["Richard Wright", "Patience Swift", "Amma Darko", "Bayo Adebowale"], a: 0, why: "The non-African prose set text — Richard Wright." },
      { q: "The protagonist of Native Son is:", o: ["Bigger Thomas", "Esi", "Ama", "Bintou"], a: 0, why: "Bigger Thomas — the young black man." },
      { q: "The novel is set in:", o: ["the ghettos of Chicago", "the village of the Ghana", "the city of the London", "the countryside of the France"], a: 0, why: "The setting — the ghettos (the slums) of Chicago." },
      { q: "The three parts of the novel are:", o: ["the Fire, the Crime, and the Verdict", "the Beginning, the Middle, and the End", "the Past, the Present, and the Future", "the Day, the Night, and the Dawn"], a: 0, why: "The structure of the novel." },
      { q: "The literary style of the novel is the:", o: ["the naturalism", "the romanticism", "the surrealism", "the modernism only"], a: 0, why: "The naturalism — the life determined by the environment." }
    ],
    essay: [
      { q: "Discuss the theme of the racism in Native Son, with reference to the characters and the events. How does the novel present the condition of the black American in the society?", marks: 25, outline: [
        "The theme of the racism: the discrimination and the prejudice (against the black American) as the cause of the tragedy",
        "The presentation: (1) the social racism (the segregation, the exclusion from the opportunity); (2) the economic racism (the unemployment, the poverty); (3) the psychological racism (the internalization of the inferiority)",
        "The characters: Bigger Thomas (the victim and the perpetrator — the product of the environment), Mary (the white daughter — the privilege), and the family (the contrast of the worlds)",
        "The events: the job (the chance), the incident (the tragedy), and the trial (the verdict) — the chain of the causation",
        "The other themes: the poverty (the condition of the ghettos), the identity (the question of the self), and the environment (the determinism)",
        "Conclusion: the novel as the indictment of the society (the exposure of the racism, the call for the justice)"
      ] },
      { q: "Analyze the main characters in Native Son. How do the characters develop through the three parts (the Fire, the Crime, the Verdict), and how do they contribute to the themes?", marks: 25, outline: [
        "Bigger Thomas: the journey (the hope — the job; the incident — the tragedy; the trial — the verdict), the development (from the passivity to the action, and to the acceptance)",
        "Mary: the white daughter (the privilege, the ignorance), the contrast with Bigger — the contribution to the theme of the racism",
        "The family: the world of the white (the comfort) and the world of the black (the slums) — the contrast; the contribution (the social dimension)",
        "The characterization: the naturalism (the determinism), the dialogue, and the description; the realism (the authentic presentation)",
        "The contribution of the characters to the themes: the racism (the discrimination), the poverty (the condition), and the identity (the question)",
        "Conclusion: the characters as the vehicles of the themes (the condition of the black American)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus — Non-African Prose (set texts for 2016–2020):" },
      { k: "bul", items: [
        "Richard Wright — Native Son",
        "The story of Bigger Thomas, the black American, in the ghettos of Chicago — the plot: the three parts (the Fire, the Crime, the Verdict)",
        "Themes: the racism (the discrimination, the prejudice), the poverty (the condition of the ghettos), the identity (the question of the self), the environment (the determinism)",
        "Style and setting: the naturalism (the life determined by the environment), the ghettos (the slums) of Chicago",
        "Paper 2, Section B: two essay questions are set on the novel — answer ONE (the theme, the characterization, the style, the setting)"
      ] }
    ]
  },
  /* =============== LI4 · THE LAST GOODMAN =============== */
  {
    grade: 12, sem: "One", icon: "📘", period: "LI4",
    title: "Non-African Prose II — The Last Goodman",
    subtitle: "Patience Swift · the story of the moral dilemma in the society · themes: the morality, the hypocrisy, the conscience",
    note: "Non-African Prose (set text 2016–2020): Patience Swift, The Last Goodman — a novel on the moral dilemma in the society. Paper 2 Section B: two essay questions are set; answer one (50 marks in total, with Section A).",
    objectives: [
      "Summarize the plot of The Last Goodman (the story of the moral dilemma, the characters, the resolution)",
      "Analyze the main characters and their development",
      "Discuss the themes (the morality, the hypocrisy, the conscience)",
      "Appreciate the style and the setting"
    ],
    terms: [
      { t: "The Last Goodman (the novel)", d: "The novel by Patience Swift — the story of the moral dilemma in the society.", x: "The story of the good man" },
      { t: "The theme of the morality", d: "The question of the morality (the right and the wrong) in the society — a major theme.", x: "The moral dilemma" },
      { t: "The theme of the hypocrisy", d: "The hypocrisy (the pretense of the virtue) in the society.", x: "The false appearance" },
      { t: "The theme of the conscience", d: "The conscience (the inner voice of the right and the wrong) as the guide of the character.", x: "The inner voice" },
      { t: "The moral dilemma", d: "The situation of the difficult choice (between the right and the interest).", x: "The difficult choice" },
      { t: "The setting", d: "The society (the community) in which the story is set.", x: "The community" }
    ],
    tf: [
      { s: "The Last Goodman is a novel by Patience Swift.", a: "True", why: "The non-African prose set text — Patience Swift." },
      { s: "The novel is on the moral dilemma in the society.", a: "True", why: "The story of the moral dilemma in the society." },
      { s: "The hypocrisy is not a theme of the novel.", a: "False", why: "The hypocrisy (the pretense of the virtue) is a theme." },
      { s: "The conscience is presented as the guide of the character.", a: "True", why: "The theme of the conscience — the inner voice." }
    ],
    mcq: [
      { q: "The Last Goodman is a novel by:", o: ["Patience Swift", "Richard Wright", "Amma Darko", "Bayo Adebowale"], a: 0, why: "The non-African prose set text — Patience Swift." },
      { q: "The novel is on the:", o: ["the moral dilemma in the society", "the trafficking", "the war", "the sport"], a: 0, why: "The story of the moral dilemma in the society." },
      { q: "The pretense of the virtue in the society is the:", o: ["the hypocrisy", "the morality", "the conscience", "the dilemma"], a: 0, why: "The theme of the hypocrisy." },
      { q: "The inner voice of the right and the wrong is the:", o: ["the conscience", "the hypocrisy", "the morality", "the society"], a: 0, why: "The theme of the conscience." }
    ],
    essay: [
      { q: "Discuss the theme of the morality in The Last Goodman, with reference to the characters and the events. How does the novel present the moral dilemma in the society?", marks: 25, outline: [
        "The theme of the morality: the question of the morality (the right and the wrong) in the society",
        "The presentation: (1) the moral dilemma (the difficult choice between the right and the interest); (2) the hypocrisy (the pretense of the virtue by the society); (3) the conscience (the inner voice of the character)",
        "The characters: the good man (the protagonist — the moral choice), the hypocrites (the pretense), and the society (the judgment)",
        "The events: the situation (the dilemma), the choice (the decision), and the consequence (the result) — the chain of the causation",
        "The other themes: the hypocrisy (the false appearance) and the conscience (the guide)",
        "Conclusion: the novel as the moral commentary (the question of the right and the wrong, the call for the integrity)"
      ] },
      { q: "Analyze the main characters in The Last Goodman. How do the characters develop through the novel, and how do they contribute to the themes (the morality, the hypocrisy, the conscience)?", marks: 25, outline: [
        "The good man (the protagonist): the situation (the dilemma), the choice (the decision), and the consequence (the result); the development (from the innocence to the awareness)",
        "The hypocrites: the pretense of the virtue (the false appearance), the contrast with the good man — the contribution to the theme of the hypocrisy",
        "The society: the judgment (the approval / the condemnation) — the contribution to the theme of the morality",
        "The characterization: the narration, the dialogue, and the description; the realism (the authentic presentation)",
        "The contribution of the characters to the themes: the morality (the question), the hypocrisy (the pretense), and the conscience (the guide)",
        "Conclusion: the characters as the vehicles of the themes (the moral dilemma in the society)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus — Non-African Prose (set texts for 2016–2020):" },
      { k: "bul", items: [
        "Patience Swift — The Last Goodman",
        "The story of the moral dilemma in the society — the plot: the situation (the dilemma), the choice (the decision), and the consequence (the result)",
        "Themes: the morality (the question of the right and the wrong), the hypocrisy (the pretense of the virtue), the conscience (the inner voice)",
        "Style and setting: the realistic presentation, the society (the community) in which the story is set",
        "Paper 2, Section B: two essay questions are set on the novel — answer ONE (the theme, the characterization, the style, the setting)"
      ] }
    ]
  },
  /* =============== LI5 · OTHELLO (SHAKESPEARE) =============== */
  {
    grade: 12, sem: "One", icon: "🎭", period: "LI5",
    title: "Shakespeare — Othello (Context Questions)",
    subtitle: "William Shakespeare · the context of the theme, the characterization, the style and the setting · Paper 1: twenty context questions",
    note: "The Shakespearean text (set text 2016–2020): William Shakespeare, Othello. Only CONTEXT questions are set on this text (testing the theme, the characterization, the style and the setting) — in Paper 1 (twenty questions). No essay question is set on the Shakespearean text.",
    objectives: [
      "Summarize the plot of Othello (the story of the Moor, Desdemona, and Iago)",
      "Analyze the main characters (Othello, Desdemona, Iago, Cassio, Emilia, Roderigo) and their development",
      "Discuss the themes (the jealousy, the betrayal, the race, the honor)",
      "Appreciate the style and the setting (the verse, the soliloquy, Venice and Cyprus)",
      "Prepare for the context questions (the quotation, the reference to the theme, the characterization, the style, the setting)"
    ],
    terms: [
      { t: "Othello (the play)", d: "The tragedy by William Shakespeare — the story of the Moor (Othello), his wife Desdemona, and the villain Iago.", x: "The tragedy of the jealousy" },
      { t: "Othello", d: "The protagonist — the Moor, the general, the husband; the victim of the jealousy.", x: "The noble Moor" },
      { t: "Desdemona", d: "The wife of Othello — the faithful, the innocent; the victim of the tragedy.", x: "The faithful wife" },
      { t: "Iago", d: "The villain — the ensign, the manipulator; the cause of the tragedy.", x: "The villain" },
      { t: "Cassio", d: "The lieutenant — the friend of Othello, the rival in the eye of Iago.", x: "The noble lieutenant" },
      { t: "Emilia", d: "The wife of Iago — the confidante of Desdemona; the witness of the truth.", x: "The faithful wife of Iago" },
      { t: "Roderigo", d: "The suitor of Desdemona — the dupe of Iago.", x: "The dupe" },
      { t: "The theme of the jealousy", d: "The jealousy (of Othello) as the cause of the tragedy — a major theme.", x: "The green-eyed monster" },
      { t: "The theme of the betrayal", d: "The betrayal (by Iago) as the engine of the tragedy.", x: "The manipulation" },
      { t: "The theme of the race", d: "The race (the Moor in the Venetian society) as the background of the conflict.", x: "The otherness" },
      { t: "The theme of the honor", d: "The honor (of the character, the society) as the value in conflict.", x: "The reputation" },
      { t: "The soliloquy", d: "The speech of the character alone (the expression of the inner thought) — e.g. the soliloquy of Iago.", x: "The speech of Iago" },
      { t: "The setting", d: "Venice (the city) and Cyprus (the island) — the two locations of the play.", x: "Venice and Cyprus" }
    ],
    tf: [
      { s: "Othello is a tragedy by William Shakespeare.", a: "True", why: "The Shakespearean set text — Othello." },
      { s: "Only context questions are set on the Shakespearean text (no essay question).", a: "True", why: "The scheme of examination — only the context questions on the Shakespearean text." },
      { s: "Iago is the hero of the play.", a: "False", why: "Iago is the VILLAIN (the manipulator); Othello is the protagonist (the tragic hero)." },
      { s: "The play is set in Venice and Cyprus.", a: "True", why: "The setting — Venice (the city) and Cyprus (the island)." }
    ],
    mcq: [
      { q: "Othello is a play by:", o: ["William Shakespeare", "Oliver Goldsmith", "Lorraine Hansberry", "Frank Ogodo Ogbeche"], a: 0, why: "The Shakespearean set text." },
      { q: "The villain of the play is:", o: ["Iago", "Cassio", "Othello", "Roderigo"], a: 0, why: "Iago — the manipulator, the cause of the tragedy." },
      { q: "The wife of Othello is:", o: ["Desdemona", "Emilia", "Rodrigio's sister", "the Duchess"], a: 0, why: "Desdemona — the faithful wife." },
      { q: "The lieutenant (the friend of Othello) is:", o: ["Cassio", "Iago", "Roderigo", "Brabantio"], a: 0, why: "Cassio — the noble lieutenant." },
      { q: "The play is set in:", o: ["Venice and Cyprus", "London and Paris", "Rome and Athens", "the village of the England"], a: 0, why: "The setting — Venice and Cyprus." },
      { q: "The context questions on the Shakespearean text test the:", o: ["the theme, the characterization, the style and the setting", "the plot only", "the grammar only", "the vocabulary only"], a: 0, why: "The scheme — the context questions test the theme, the characterization, the style and the setting." }
    ],
    essay: [
      { q: "The context question (Paper 1): a quotation from Othello is given. Identify the speaker, the context (the scene), and the theme/characterization/style/setting illustrated. (Prepare for the format of the context question.)", marks: 1, outline: [
        "The format of the context question: a quotation (the extract) from the play is given; the candidate identifies: (1) the speaker (the character); (2) the context (the act, the scene, the situation); (3) the theme illustrated (the jealousy, the betrayal, the race, the honor); (4) the characterization (the quality of the character); (5) the style (the verse, the imagery, the soliloquy); (6) the setting (the place, the time)",
        "Example: the soliloquy of Iago (the expression of the villainy) — the speaker (Iago), the context (the scene of the conspiracy), the theme (the betrayal), the characterization (the manipulation), the style (the soliloquy, the imagery), the setting (Venice / Cyprus)",
        "The preparation: the reading of the play (the full text), the note of the key scenes (the acts, the scenes), the themes, the characters, and the style"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus — the Shakespearean text (set text 2016–2020):" },
      { k: "bul", items: [
        "*William Shakespeare — OTHELLO",
        "The tragedy: the story of the Moor (Othello), his wife Desdemona, and the villain Iago — the plot: the love, the jealousy, the betrayal, and the tragedy",
        "The main characters: Othello (the Moor, the general), Desdemona (the faithful wife), Iago (the villain, the manipulator), Cassio (the lieutenant), Emilia (the wife of Iago), Roderigo (the dupe)",
        "The themes: the jealousy (the green-eyed monster), the betrayal (the manipulation), the race (the Moor in the Venetian society), the honor (the reputation)",
        "The style: the verse (the blank verse), the soliloquy (the inner thought), the imagery (the metaphor, the symbol)",
        "The setting: Venice (the city) and Cyprus (the island)",
        "Paper 1: twenty context questions on the prescribed Shakespearean text (the theme, the characterization, the style and the setting) — no essay question is set on the Shakespearean text"
      ] }
    ]
  },
  /* =============== LI6 · SHE STOOPS TO CONQUER =============== */
  {
    grade: 12, sem: "Two", icon: "🎭", period: "LI6",
    title: "Non-African Drama I — She Stoops to Conquer",
    subtitle: "Oliver Goldsmith · the comedy of the manners in the 18th century · themes: the class, the marriage, the humor",
    note: "Non-African Drama (set text 2016–2020): Oliver Goldsmith, She Stoops to Conquer — a comedy of the manners. Paper 3 Section B: two questions are set; answer one (100 marks in total for Paper 3).",
    objectives: [
      "Summarize the plot of She Stoops to Conquer (the story of Kate, the Hastings family, and the misadventure)",
      "Analyze the main characters (Kate, Tony Lumpkin, the Hastings, Marlow) and their development",
      "Discuss the themes (the class, the marriage, the humor, the manners)",
      "Appreciate the style and the setting (the comedy of the manners, the 18th-century England)"
    ],
    terms: [
      { t: "She Stoops to Conquer (the play)", d: "The comedy by Oliver Goldsmith (the Irish — British author) — the comedy of the manners in the 18th century.", x: "The comedy of the manners" },
      { t: "Kate", d: "The heroine — the daughter of Hardcastle, who 'stoops' (disguises herself) to conquer.", x: "The heroine" },
      { t: "Tony Lumpkin", d: "The comic character — the son of Hardcastle, the companion of Kate.", x: "The comic relief" },
      { t: "The Hastings family", d: "The family (the mother, the father) — the setting of the confusion.", x: "The family" },
      { t: "Marlow", d: "The suitor — the young man, shy in the presence of the ladies.", x: "The shy suitor" },
      { t: "The theme of the class", d: "The class (the distinction of the society) as the source of the humor — a major theme.", x: "The class difference" },
      { t: "The theme of the marriage", d: "The marriage (the courtship) as the plot of the comedy.", x: "The courtship" },
      { t: "The comedy of the manners", d: "The genre — the comedy that satirizes the manners (the behavior) of the society.", x: "The satire of the manners" },
      { t: "The setting", d: "The 18th-century England (the country, the town) — the period of the play.", x: "The 18th-century England" }
    ],
    tf: [
      { s: "She Stoops to Conquer is a comedy by Oliver Goldsmith.", a: "True", why: "The non-African drama set text — Oliver Goldsmith." },
      { s: "The play is a comedy of the manners.", a: "True", why: "The genre — the comedy of the manners." },
      { s: "The play is set in the 21st century.", a: "False", why: "The setting — the 18th-century England." },
      { s: "Kate 'stoops' (disguises herself) to conquer.", a: "True", why: "The plot — Kate stoops (disguises herself) to conquer." }
    ],
    mcq: [
      { q: "She Stoops to Conquer is a play by:", o: ["Oliver Goldsmith", "Lorraine Hansberry", "Frank Ogodo Ogbeche", "Dele Charley"], a: 0, why: "The non-African drama set text — Oliver Goldsmith." },
      { q: "The genre of the play is the:", o: ["the comedy of the manners", "the tragedy", "the farce only", "the melodrama only"], a: 0, why: "The comedy of the manners." },
      { q: "The heroine of the play is:", o: ["Kate", "Desdemona", "Esi", "the Duchess"], a: 0, why: "Kate — the heroine." },
      { q: "The play is set in the:", o: ["the 18th-century England", "the 21st century", "the ancient Rome", "the medieval France"], a: 0, why: "The setting — the 18th-century England." },
      { q: "Paper 3, Section B (Non-African Drama): two questions are set — answer:", o: ["ONE", "TWO", "THREE", "ALL FOUR"], a: 0, why: "The scheme — answer ONE question from each section." }
    ],
    essay: [
      { q: "Discuss the theme of the class in She Stoops to Conquer, with reference to the characters and the events. How does the play satirize the manners of the society?", marks: 25, outline: [
        "The theme of the class: the distinction of the society (the class) as the source of the humor",
        "The presentation: (1) the difference of the class (the gentleman, the country); (2) the pretense (the false appearance of the class); (3) the confusion (the misadventure of the class)",
        "The characters: Kate (the heroine — the stooping), Tony Lumpkin (the comic — the country), Marlow (the shy suitor — the city), and the family (the setting)",
        "The events: the arrival (the misadventure), the confusion (the role-play), and the resolution (the marriage) — the plot of the comedy",
        "The satire: the manners (the behavior) of the society — the irony, the humor, the caricature",
        "Conclusion: the play as the satire of the society (the exposure of the manners, the humor of the class)"
      ] },
      { q: "Analyze the main characters in She Stoops to Conquer. How do the characters contribute to the plot and the themes (the class, the marriage, the humor)?", marks: 25, outline: [
        "Kate: the heroine (the stooping — the disguise, the conquest), the development (from the scheme to the marriage)",
        "Tony Lumpkin: the comic character (the country, the humor), the contribution to the theme of the class and the humor",
        "Marlow: the shy suitor (the city, the shyness in the presence of the ladies), the contrast with Tony",
        "The family: the setting (the confusion, the resolution) — the contribution to the plot",
        "The characterization: the dialogue (the wit, the humor), the action, and the description; the comedy (the satirical presentation)",
        "Conclusion: the characters as the vehicles of the themes (the class, the marriage, the humor)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus — Non-African Drama (set texts for 2016–2020):" },
      { k: "bul", items: [
        "Oliver Goldsmith — She Stoops to Conquer",
        "The comedy of the manners in the 18th century — the plot: Kate (the heroine) stoops (disguises herself) to conquer; the misadventure (the confusion) and the resolution (the marriage)",
        "The main characters: Kate (the heroine), Tony Lumpkin (the comic), Marlow (the shy suitor), and the family (the setting)",
        "The themes: the class (the distinction of the society), the marriage (the courtship), the humor (the satire)",
        "Style and setting: the comedy of the manners (the satire of the behavior), the 18th-century England",
        "Paper 3, Section B: two questions are set on the play — answer ONE (the theme, the characterization, the style, the setting)"
      ] }
    ]
  },
  /* =============== LI7 · A RAISIN IN THE SUN =============== */
  {
    grade: 12, sem: "Two", icon: "🌟", period: "LI7",
    title: "Non-African Drama II — A Raisin in the Sun",
    subtitle: "Lorraine Hansberry · the story of the Younger family in the ghettos of Chicago · themes: the dream, the race, the family",
    note: "Non-African Drama (set text 2016–2020): Lorraine Hansberry, A Raisin in the Sun — the story of the black American family (the Youngers) in the ghettos of Chicago. Paper 3 Section B: two questions are set; answer one (100 marks in total for Paper 3).",
    objectives: [
      "Summarize the plot of A Raisin in the Sun (the story of the Younger family, the insurance money, the move)",
      "Analyze the main characters (Walter Lee, Ruth, Beneatha, Mama, George) and their development",
      "Discuss the themes (the dream, the race, the family, the identity)",
      "Appreciate the style and the setting (the drama of the 20th century, the ghettos of Chicago)"
    ],
    terms: [
      { t: "A Raisin in the Sun (the play)", d: "The play by Lorraine Hansberry (the American author) — the story of the black American family (the Youngers) in the ghettos of Chicago.", x: "The drama of the dream" },
      { t: "Walter Lee", d: "The son — the dreamer (the business), the conflict with the family.", x: "The dreamer" },
      { t: "Ruth", d: "The daughter-in-law — the wife of Walter Lee, the caretaker.", x: "The caretaker" },
      { t: "Beneatha", d: "The daughter — the student (the medicine), the question of the identity.", x: "The student" },
      { t: "Mama", d: "The mother — the matriarch, the faith, the decision.", x: "The matriarch" },
      { t: "George", d: "The suitor — the white man, the contrast with the family.", x: "The white suitor" },
      { t: "The theme of the dream", d: "The dream (of the family, the individual) as the central theme — the title (the raisin in the sun).", x: "What happens to a dream deferred?" },
      { t: "The theme of the race", d: "The race (the black American in the society) as the background of the conflict.", x: "The discrimination" },
      { t: "The theme of the family", d: "The family (the bond, the conflict) as the unit of the play.", x: "The Younger family" },
      { t: "The insurance money", d: "The object of the conflict (the insurance of the father) — the catalyst of the plot.", x: "The money" },
      { t: "The setting", d: "The ghettos of Chicago (the apartment) — the 20th century.", x: "The apartment in Chicago" }
    ],
    tf: [
      { s: "A Raisin in the Sun is a play by Lorraine Hansberry.", a: "True", why: "The non-African drama set text — Lorraine Hansberry." },
      { s: "The play is on the black American family (the Youngers) in the ghettos of Chicago.", a: "True", why: "The story of the Younger family." },
      { s: "The insurance money is not a part of the plot.", a: "False", why: "The insurance money (of the father) is the catalyst of the plot (the object of the conflict)." },
      { s: "The title refers to the dream deferred (the poem of Langston Hughes).", a: "True", why: "The title — 'a raisin in the sun' (the dream deferred, from the poem of Langston Hughes)." }
    ],
    mcq: [
      { q: "A Raisin in the Sun is a play by:", o: ["Lorraine Hansberry", "Oliver Goldsmith", "Frank Ogodo Ogbeche", "Dele Charley"], a: 0, why: "The non-African drama set text — Lorraine Hansberry." },
      { q: "The family in the play is the:", o: ["the Younger family", "the Hastings family", "the Moor family", "the Thomas family"], a: 0, why: "The Younger family (the black American family)." },
      { q: "The son (the dreamer) is:", o: ["Walter Lee", "Tony Lumpkin", "Bigger", "Cassio"], a: 0, why: "Walter Lee — the dreamer (the business)." },
      { q: "The daughter (the student) is:", o: ["Beneatha", "Ruth", "Kate", "Desdemona"], a: 0, why: "Beneatha — the student (the medicine)." },
      { q: "The matriarch (the mother) is:", o: ["Mama", "Ruth", "Beneatha", "Emilia"], a: 0, why: "Mama — the matriarch." },
      { q: "The object of the conflict (the catalyst of the plot) is the:", o: ["the insurance money", "the land", "the car", "the house"], a: 0, why: "The insurance money (of the father)." }
    ],
    essay: [
      { q: "Discuss the theme of the dream in A Raisin in the Sun, with reference to the characters and the events. How does the play present the dream of the black American family?", marks: 25, outline: [
        "The theme of the dream: the dream (of the family, the individual) as the central theme — the title (the raisin in the sun, the dream deferred, from the poem of Langston Hughes)",
        "The presentation: (1) the dream of the family (the move — the new house); (2) the dream of Walter Lee (the business — the liquor store); (3) the dream of Beneatha (the medicine — the career); (4) the dream of Mama (the faith — the land)",
        "The characters: Walter Lee (the dreamer — the conflict), Ruth (the caretaker — the support), Beneatha (the student — the aspiration), Mama (the matriarch — the decision), and George (the contrast — the white way)",
        "The events: the arrival of the money (the insurance), the conflict (the choice), and the resolution (the move) — the plot of the play",
        "The other themes: the race (the discrimination), the family (the bond, the conflict), and the identity (the question of Beneatha)",
        "Conclusion: the play as the study of the dream (the aspiration, the conflict, and the hope of the black American family)"
      ] },
      { q: "Analyze the main characters in A Raisin in the Sun. How do the characters develop through the play, and how do they contribute to the themes (the dream, the race, the family)?", marks: 25, outline: [
        "Walter Lee: the dreamer (the business), the conflict (with the family, with the society), and the development (from the frustration to the manhood)",
        "Ruth: the caretaker (the support, the sacrifice), the contrast with Walter — the contribution to the theme of the family",
        "Beneatha: the student (the medicine), the question of the identity (the culture, the religion), the contrast with George — the contribution to the theme of the identity and the race",
        "Mama: the matriarch (the faith, the decision), the resolution (the move) — the contribution to the theme of the dream and the family",
        "George: the white suitor (the contrast, the assimilation) — the contribution to the theme of the race",
        "The characterization: the dialogue (the wit, the emotion), the action, and the description; the realism (the authentic presentation)",
        "Conclusion: the characters as the vehicles of the themes (the dream, the race, the family)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus — Non-African Drama (set texts for 2016–2020):" },
      { k: "bul", items: [
        "Lorraine Hansberry — A Raisin in the Sun",
        "The story of the black American family (the Youngers) in the ghettos of Chicago — the plot: the insurance money (the catalyst), the conflict (the choice), and the resolution (the move)",
        "The main characters: Walter Lee (the dreamer), Ruth (the caretaker), Beneatha (the student), Mama (the matriarch), George (the white suitor)",
        "The themes: the dream (the title — the dream deferred, from the poem of Langston Hughes), the race (the discrimination), the family (the bond, the conflict), the identity (the question of Beneatha)",
        "Style and setting: the drama of the 20th century (the realism), the ghettos of Chicago (the apartment)",
        "Paper 3, Section B: two questions are set on the play — answer ONE (the theme, the characterization, the style, the setting)"
      ] }
    ]
  },
  /* =============== LI8 · HARVEST OF CORRUPTION =============== */
  {
    grade: 12, sem: "Two", icon: "🌾", period: "LI8",
    title: "African Drama I — Harvest of Corruption",
    subtitle: "Frank Ogodo Ogbeche · the drama of the corruption in the African society · themes: the corruption, the power, the society",
    note: "African Drama (set text 2016–2020): Frank Ogodo Ogbeche, Harvest of Corruption — the drama of the corruption in the African society. Paper 3 Section A: two questions are set; answer one (100 marks in total for Paper 3).",
    objectives: [
      "Summarize the plot of Harvest of Corruption (the story of the corruption, the power, and the consequence)",
      "Analyze the main characters and their development",
      "Discuss the themes (the corruption, the power, the society, the morality)",
      "Appreciate the style and the setting (the African drama, the society)"
    ],
    terms: [
      { t: "Harvest of Corruption (the play)", d: "The play by Frank Ogodo Ogbeche (the Nigerian author) — the drama of the corruption in the African society.", x: "The drama of the corruption" },
      { t: "The theme of the corruption", d: "The corruption (the misuse of the power, the money) as the central theme.", x: "The misuse of the power" },
      { t: "The theme of the power", d: "The power (the political, the economic) as the object of the corruption.", x: "The political power" },
      { t: "The theme of the society", d: "The society (the community) as the victim of the corruption.", x: "The community" },
      { t: "The theme of the morality", d: "The morality (the right and the wrong) in conflict with the corruption.", x: "The moral question" },
      { t: "The setting", d: "The African society (the community) in which the story is set.", x: "The society" }
    ],
    tf: [
      { s: "Harvest of Corruption is a play by the Nigerian author, Frank Ogodo Ogbeche.", a: "True", why: "The African drama set text — Frank Ogodo Ogbeche." },
      { s: "The play is on the corruption in the African society.", a: "True", why: "The drama of the corruption in the African society." },
      { s: "The society is not affected by the corruption in the play.", a: "False", why: "The society (the community) is the victim of the corruption." },
      { s: "The play is an African drama.", a: "True", why: "The genre — the African drama." }
    ],
    mcq: [
      { q: "Harvest of Corruption is a play by:", o: ["Frank Ogodo Ogbeche", "Dele Charley", "Oliver Goldsmith", "Lorraine Hansberry"], a: 0, why: "The African drama set text — Frank Ogodo Ogbeche." },
      { q: "The play is on the:", o: ["the corruption in the African society", "the marriage", "the war", "the farming"], a: 0, why: "The drama of the corruption." },
      { q: "The object of the corruption is the:", o: ["the power (the political, the economic)", "the food", "the water", "the land only"], a: 0, why: "The power (the political, the economic) as the object of the corruption." },
      { q: "The victim of the corruption is the:", o: ["the society (the community)", "the ruler only", "the foreigner only", "no one"], a: 0, why: "The society (the community) as the victim." }
    ],
    essay: [
      { q: "Discuss the theme of the corruption in Harvest of Corruption, with reference to the characters and the events. How does the play present the corruption in the African society?", marks: 25, outline: [
        "The theme of the corruption: the misuse of the power and the money as the central theme",
        "The presentation: (1) the political corruption (the misuse of the power); (2) the economic corruption (the misappropriation of the money); (3) the social corruption (the effect on the society)",
        "The characters: the corrupt (the ruler, the collaborator) and the victim (the society, the honest) — the contrast",
        "The events: the acquisition (the power), the misuse (the corruption), and the consequence (the harvest) — the plot of the play",
        "The other themes: the power (the object), the society (the victim), and the morality (the question)",
        "Conclusion: the play as the indictment of the society (the exposure of the corruption, the call for the integrity)"
      ] },
      { q: "Analyze the main characters in Harvest of Corruption. How do the characters contribute to the plot and the themes (the corruption, the power, the society)?", marks: 25, outline: [
        "The corrupt (the ruler): the acquisition (the power), the misuse (the corruption), and the consequence (the harvest) — the development (from the rise to the fall)",
        "The collaborator: the enabler (the support of the corruption) — the contribution to the theme of the corruption",
        "The honest: the victim (the resistance, the conscience) — the contribution to the theme of the morality",
        "The society: the community (the victim, the judge) — the contribution to the theme of the society",
        "The characterization: the dialogue (the satire, the exposition), the action, and the description; the drama (the social presentation)",
        "Conclusion: the characters as the vehicles of the themes (the corruption, the power, the society)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus — African Drama (set texts for 2016–2020):" },
      { k: "bul", items: [
        "Frank Ogodo Ogbeche — Harvest of Corruption",
        "The drama of the corruption in the African society — the plot: the acquisition (the power), the misuse (the corruption), and the consequence (the harvest)",
        "The main characters: the corrupt (the ruler), the collaborator (the enabler), the honest (the victim, the conscience), and the society (the community)",
        "The themes: the corruption (the misuse of the power, the money), the power (the political, the economic), the society (the victim), the morality (the question)",
        "Style and setting: the African drama (the social satire), the African society (the community)",
        "Paper 3, Section A: two questions are set on the play — answer ONE (the theme, the characterization, the style, the setting)"
      ] }
    ]
  },
  /* =============== LI9 · THE BLOOD OF A STRANGER =============== */
  {
    grade: 12, sem: "Two", icon: "🩸", period: "LI9",
    title: "African Drama II — The Blood of a Stranger",
    subtitle: "Dele Charley · the drama of the conflict in the society · themes: the conflict, the identity, the society",
    note: "African Drama (set text 2016–2020): Dele Charley, The Blood of a Stranger — the drama of the conflict in the society. Paper 3 Section A: two questions are set; answer one (100 marks in total for Paper 3).",
    objectives: [
      "Summarize the plot of The Blood of a Stranger (the story of the conflict, the characters, and the resolution)",
      "Analyze the main characters and their development",
      "Discuss the themes (the conflict, the identity, the society, the blood)",
      "Appreciate the style and the setting (the African drama, the society)"
    ],
    terms: [
      { t: "The Blood of a Stranger (the play)", d: "The play by Dele Charley (the Nigerian author) — the drama of the conflict in the society.", x: "The drama of the conflict" },
      { t: "The theme of the conflict", d: "The conflict (in the society) as the central theme.", x: "The social conflict" },
      { t: "The theme of the identity", d: "The identity (the self, the other) in conflict — the stranger.", x: "The stranger" },
      { t: "The theme of the society", d: "The society (the community) as the setting of the conflict.", x: "The community" },
      { t: "The blood", d: "The symbol of the blood (the life, the sacrifice, the bond) — the title.", x: "The symbol of the title" },
      { t: "The stranger", d: "The other (the outsider) as the object of the conflict.", x: "The outsider" },
      { t: "The setting", d: "The African society (the community) in which the story is set.", x: "The society" }
    ],
    tf: [
      { s: "The Blood of a Stranger is a play by the Nigerian author, Dele Charley.", a: "True", why: "The African drama set text — Dele Charley." },
      { s: "The play is on the conflict in the society.", a: "True", why: "The drama of the conflict in the society." },
      { s: "The blood is a symbol in the title of the play.", a: "True", why: "The symbol of the blood (the life, the sacrifice, the bond)." },
      { s: "The stranger is the insider (the member) of the society.", a: "False", why: "The stranger is the OTHER (the outsider) — the object of the conflict." }
    ],
    mcq: [
      { q: "The Blood of a Stranger is a play by:", o: ["Dele Charley", "Frank Ogodo Ogbeche", "Oliver Goldsmith", "Lorraine Hansberry"], a: 0, why: "The African drama set text — Dele Charley." },
      { q: "The play is on the:", o: ["the conflict in the society", "the corruption only", "the marriage only", "the sport only"], a: 0, why: "The drama of the conflict in the society." },
      { q: "The blood in the title is a:", o: ["symbol (the life, the sacrifice, the bond)", "a color", "a food", "a drink"], a: 0, why: "The symbol of the blood." },
      { q: "The stranger is the:", o: ["the other (the outsider)", "the insider only", "the ruler only", "the child only"], a: 0, why: "The stranger — the other (the outsider)." }
    ],
    essay: [
      { q: "Discuss the theme of the conflict in The Blood of a Stranger, with reference to the characters and the events. How does the play present the conflict in the society?", marks: 25, outline: [
        "The theme of the conflict: the conflict (in the society) as the central theme",
        "The presentation: (1) the social conflict (the community, the outsider); (2) the personal conflict (the character, the self); (3) the symbolic conflict (the blood, the bond)",
        "The characters: the stranger (the outsider, the object) and the society (the community, the subject) — the conflict",
        "The events: the arrival (the stranger), the conflict (the confrontation), and the resolution (the sacrifice / the acceptance) — the plot of the play",
        "The other themes: the identity (the self, the other), the society (the community), and the blood (the symbol)",
        "Conclusion: the play as the study of the conflict (the exposure of the society, the question of the other)"
      ] },
      { q: "Analyze the main characters in The Blood of a Stranger. How do the characters contribute to the plot and the themes (the conflict, the identity, the society)?", marks: 25, outline: [
        "The stranger: the outsider (the object of the conflict), the arrival, the confrontation, and the resolution — the development",
        "The society: the community (the subject of the conflict), the judgment, and the decision — the contribution to the theme of the society",
        "The individuals: the members (the support, the opposition) — the contrast",
        "The characterization: the dialogue (the exposition, the conflict), the action, and the description; the drama (the social presentation)",
        "The contribution of the characters to the themes: the conflict (the confrontation), the identity (the self, the other), and the society (the community)",
        "Conclusion: the characters as the vehicles of the themes (the conflict in the society)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus — African Drama (set texts for 2016–2020):" },
      { k: "bul", items: [
        "Dele Charley — The Blood of a Stranger",
        "The drama of the conflict in the society — the plot: the arrival (the stranger), the conflict (the confrontation), and the resolution (the sacrifice / the acceptance)",
        "The main characters: the stranger (the outsider), the society (the community), and the individuals (the members)",
        "The themes: the conflict (in the society), the identity (the self, the other), the society (the community), the blood (the symbol)",
        "Style and setting: the African drama (the social drama), the African society (the community)",
        "Paper 3, Section A: two questions are set on the play — answer ONE (the theme, the characterization, the style, the setting)"
      ] }
    ]
  },
  /* =============== LI10 · AFRICAN POETRY =============== */
  {
    grade: 12, sem: "Two", icon: "📜", period: "LI10",
    title: "African Poetry (Six Set Poems)",
    subtitle: "Birago Diop (Vanity) · Gbemisola Adeoti (Ambush) · Gabriel Okara (Piano and Drums) · Gbanabam Hallowell (The Dining Table) · Lenrie Peter (The Panic of Growing Older) · Kofi Awoonor (The Anvil and the Hammer)",
    note: "African Poetry (set texts 2016–2020): six poems — Birago Diop, Vanity; Gbemisola Adeoti, Ambush; Gabriel Okara, Piano and Drums; Gbanabam Hallowell, The Dining Table; Lenrie Peter, The Panic of Growing Older; Kofi Awoonor, The Anvil and the Hammer. Paper 3 Section C: two questions are set (on the section); answer one (100 marks in total for Paper 3).",
    objectives: [
      "Analyze each of the six poems (the theme, the imagery, the sound, the structure)",
      "Discuss the themes of the poems (the African experience, the identity, the culture, the modern life)",
      "Appreciate the poetic devices (the imagery, the metaphor, the rhythm, the rhyme)",
      "Prepare for the essay questions on the section (the comparison of the poems, the analysis of the poem)"
    ],
    terms: [
      { t: "Birago Diop — Vanity", d: "The poem by Birago Diop (the Senegalese author) — on the vanity (the human pride, the folly).", x: "The poem of the vanity" },
      { t: "Gbemisola Adeoti — Ambush", d: "The poem by Gbemisola Adeoti (the Nigerian author) — on the ambush (the hidden danger, the betrayal).", x: "The poem of the ambush" },
      { t: "Gabriel Okara — Piano and Drums", d: "The poem by Gabriel Okara (the Nigerian author) — on the conflict of the cultures (the piano, the drums).", x: "The poem of the culture clash" },
      { t: "Gbanabam Hallowell — The Dining Table", d: "The poem by Gbanabam Hallowell — on the dining table (the social setting, the symbol).", x: "The poem of the dining table" },
      { t: "Lenrie Peter — The Panic of Growing Older", d: "The poem by Lenrie Peter (the Guyanese author) — on the panic of growing older (the aging, the time).", x: "The poem of the aging" },
      { t: "Kofi Awoonor — The Anvil and the Hammer", d: "The poem by Kofi Awoonor (the Ghanaian author) — on the anvil and the hammer (the symbol of the creation, the struggle).", x: "The poem of the anvil and the hammer" },
      { t: "The imagery", d: "The figures of the speech (the metaphor, the simile, the symbol) in the poem.", x: "The image of the poem" },
      { t: "The sound", d: "The musical elements (the rhythm, the rhyme, the alliteration) in the poem.", x: "The music of the poem" },
      { t: "The structure", d: "The form of the poem (the stanza, the line, the meter).", x: "The shape of the poem" },
      { t: "The theme", d: "The central idea (the message) of the poem.", x: "The message of the poem" }
    ],
    tf: [
      { s: "The six African poems include Gabriel Okara's Piano and Drums.", a: "True", why: "The African poetry set texts — Gabriel Okara, Piano and Drums." },
      { s: "Piano and Drums is on the conflict of the cultures (the piano, the drums).", a: "True", why: "The theme of the poem — the conflict of the cultures." },
      { s: "The Panic of Growing Older is a poem by Kofi Awoonor.", a: "False", why: "The Panic of Growing Older is by Lenrie Peter; Kofi Awoonor wrote The Anvil and the Hammer." },
      { s: "Paper 3, Section C (African Poetry): two questions are set — answer ONE.", a: "True", why: "The scheme — answer ONE question from each section." }
    ],
    mcq: [
      { q: "The poem 'Piano and Drums' is by:", o: ["Gabriel Okara", "Birago Diop", "Gbemisola Adeoti", "Kofi Awoonor"], a: 0, why: "The African poetry set text — Gabriel Okara." },
      { q: "The poem 'Vanity' is by:", o: ["Birago Diop", "Gabriel Okara", "Lenrie Peter", "Gbanabam Hallowell"], a: 0, why: "The African poetry set text — Birago Diop." },
      { q: "The poem 'Ambush' is by:", o: ["Gbemisola Adeoti", "Birago Diop", "Gabriel Okara", "Kofi Awoonor"], a: 0, why: "The African poetry set text — Gbemisola Adeoti." },
      { q: "The poem 'The Panic of Growing Older' is by:", o: ["Lenrie Peter", "Kofi Awoonor", "Birago Diop", "Gabriel Okara"], a: 0, why: "The African poetry set text — Lenrie Peter." },
      { q: "The poem 'The Anvil and the Hammer' is by:", o: ["Kofi Awoonor", "Lenrie Peter", "Gbemisola Adeoti", "Gbanabam Hallowell"], a: 0, why: "The African poetry set text — Kofi Awoonor." },
      { q: "The poem 'The Dining Table' is by:", o: ["Gbanabam Hallowell", "Birago Diop", "Gabriel Okara", "Lenrie Peter"], a: 0, why: "The African poetry set text — Gbanabam Hallowell." }
    ],
    essay: [
      { q: "Analyze one of the six African poems (the theme, the imagery, the sound, the structure). How does the poet present the theme, using the poetic devices?", marks: 25, outline: [
        "The poem: the title, the poet, and the context (the African poetry set text 2016–2020)",
        "The theme: the central idea (the message) of the poem (e.g. the African experience, the identity, the culture, the modern life)",
        "The imagery: the figures of the speech (the metaphor, the simile, the symbol) — the analysis of the key images",
        "The sound: the musical elements (the rhythm, the rhyme, the alliteration, the repetition) — the effect on the meaning",
        "The structure: the form (the stanza, the line, the meter) — the contribution to the meaning",
        "The presentation: the way the poet presents the theme (the tone, the mood, the perspective)",
        "Conclusion: the appreciation of the poem (the unity of the theme, the imagery, the sound, and the structure)"
      ] },
      { q: "Compare two of the six African poems (the theme, the imagery, the style). How do the poets present their themes, and what are the similarities and the differences?", marks: 25, outline: [
        "The two poems: the titles, the poets, and the contexts",
        "The themes: the central ideas (the messages) of the two poems — the comparison (the common, the different)",
        "The imagery: the figures of the speech (the metaphor, the symbol) — the comparison of the key images",
        "The style: the sound (the rhythm, the rhyme), the structure (the stanza, the line) — the comparison",
        "The presentation: the tone, the mood, the perspective — the comparison of the way the poets present the themes",
        "The similarities and the differences: the analysis (the common ground, the contrast)",
        "Conclusion: the comparative appreciation (the unity, the diversity of the African poetry)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus — African Poetry (set texts for 2016–2020):" },
      { k: "bul", items: [
        "Birago Diop — Vanity",
        "Gbemisola Adeoti — Ambush",
        "Gabriel Okara — Piano and Drums",
        "Gbanabam Hallowell — The Dining Table",
        "Lenrie Peter — The Panic of Growing Older",
        "Kofi Awoonor — The Anvil and the Hammer",
        "Paper 3, Section C: two questions are set for the section — answer ONE (the analysis of the poem, the comparison of the poems)"
      ] }
    ]
  },
  /* =============== LI11 · NON-AFRICAN POETRY =============== */
  {
    grade: 12, sem: "Two", icon: "📜", period: "LI11",
    title: "Non-African Poetry (Six Set Poems)",
    subtitle: "Tennyson (Crossing the Bar) · George Herbert (The Pulley) · Blake (The School Boy) · William Morris (The Proud King) · Robert Frost (Birches) · Shakespeare (Shall I compare thee...)",
    note: "Non-African Poetry (set texts 2016–2020): six poems — Alfred Tennyson, Crossing the Bar; George Herbert, The Pulley; William Blake, The School Boy; William Morris, The Proud King; Robert Frost, Birches; William Shakespeare, Shall I compare thee to a Summer's Day?. Paper 3 Section D: two questions are set (on the section); answer one (100 marks in total for Paper 3).",
    objectives: [
      "Analyze each of the six poems (the theme, the imagery, the sound, the structure)",
      "Discuss the themes of the poems (the life, the death, the nature, the love, the time)",
      "Appreciate the poetic devices (the imagery, the metaphor, the rhythm, the rhyme)",
      "Prepare for the essay questions on the section (the comparison of the poems, the analysis of the poem)"
    ],
    terms: [
      { t: "Alfred Tennyson — Crossing the Bar", d: "The poem by Alfred Tennyson (the English poet) — on the crossing of the bar (the death, the transition).", x: "The poem of the death" },
      { t: "George Herbert — The Pulley", d: "The poem by George Herbert (the English poet) — on the pulley (the balance, the grace).", x: "The poem of the balance" },
      { t: "William Blake — The School Boy", d: "The poem by William Blake (the English poet) — on the school boy (the education, the freedom).", x: "The poem of the education" },
      { t: "William Morris — The Proud King", d: "The poem by William Morris (the English poet) — on the proud king (the pride, the fall).", x: "The poem of the pride" },
      { t: "Robert Frost — Birches", d: "The poem by Robert Frost (the American poet) — on the birches (the nature, the escape).", x: "The poem of the birches" },
      { t: "William Shakespeare — Shall I compare thee to a Summer's Day?", d: "The sonnet by William Shakespeare (the English poet) — the comparison of the beloved to the summer's day (the love, the eternity).", x: "The sonnet of the love" },
      { t: "The sonnet", d: "The form of the poem (the 14 lines, the rhyme scheme) — e.g. the Shakespearean sonnet.", x: "The 14-line poem" },
      { t: "The theme of the love", d: "The love (the eternal) as the theme of the sonnet of Shakespeare.", x: "The eternal love" },
      { t: "The theme of the nature", d: "The nature (the birches) as the theme of the poem of Frost.", x: "The nature" },
      { t: "The theme of the death", d: "The death (the transition) as the theme of the poem of Tennyson.", x: "The transition" }
    ],
    tf: [
      { s: "The six Non-African poems include Robert Frost's Birches.", a: "True", why: "The non-African poetry set texts — Robert Frost, Birches." },
      { s: "Shall I compare thee to a Summer's Day? is a sonnet by William Shakespeare.", a: "True", why: "The sonnet of the love (the 14 lines)." },
      { s: "Crossing the Bar is a poem by Robert Frost.", a: "False", why: "Crossing the Bar is by Alfred Tennyson; Robert Frost wrote Birches." },
      { s: "Paper 3, Section D (Non-African Poetry): two questions are set — answer ONE.", a: "True", why: "The scheme — answer ONE question from each section." }
    ],
    mcq: [
      { q: "The poem 'Crossing the Bar' is by:", o: ["Alfred Tennyson", "Robert Frost", "William Blake", "George Herbert"], a: 0, why: "The non-African poetry set text — Alfred Tennyson." },
      { q: "The poem 'The Pulley' is by:", o: ["George Herbert", "Alfred Tennyson", "William Morris", "Robert Frost"], a: 0, why: "The non-African poetry set text — George Herbert." },
      { q: "The poem 'The School Boy' is by:", o: ["William Blake", "George Herbert", "William Morris", "Alfred Tennyson"], a: 0, why: "The non-African poetry set text — William Blake." },
      { q: "The poem 'The Proud King' is by:", o: ["William Morris", "William Blake", "George Herbert", "Alfred Tennyson"], a: 0, why: "The non-African poetry set text — William Morris." },
      { q: "The poem 'Birches' is by:", o: ["Robert Frost", "William Morris", "William Blake", "George Herbert"], a: 0, why: "The non-African poetry set text — Robert Frost." },
      { q: "The sonnet 'Shall I compare thee to a Summer's Day?' is by:", o: ["William Shakespeare", "Robert Frost", "William Morris", "Alfred Tennyson"], a: 0, why: "The sonnet of the love — William Shakespeare." }
    ],
    essay: [
      { q: "Analyze one of the six Non-African poems (the theme, the imagery, the sound, the structure). How does the poet present the theme, using the poetic devices?", marks: 25, outline: [
        "The poem: the title, the poet, and the context (the non-African poetry set text 2016–2020)",
        "The theme: the central idea (the message) of the poem (e.g. the life, the death, the nature, the love, the time)",
        "The imagery: the figures of the speech (the metaphor, the simile, the symbol) — the analysis of the key images",
        "The sound: the musical elements (the rhythm, the rhyme, the alliteration, the repetition) — the effect on the meaning",
        "The structure: the form (the stanza, the line, the meter, the sonnet) — the contribution to the meaning",
        "The presentation: the way the poet presents the theme (the tone, the mood, the perspective)",
        "Conclusion: the appreciation of the poem (the unity of the theme, the imagery, the sound, and the structure)"
      ] },
      { q: "Compare two of the six Non-African poems (the theme, the imagery, the style). How do the poets present their themes, and what are the similarities and the differences?", marks: 25, outline: [
        "The two poems: the titles, the poets, and the contexts",
        "The themes: the central ideas (the messages) of the two poems — the comparison (the common, the different)",
        "The imagery: the figures of the speech (the metaphor, the symbol) — the comparison of the key images",
        "The style: the sound (the rhythm, the rhyme), the structure (the stanza, the line, the sonnet) — the comparison",
        "The presentation: the tone, the mood, the perspective — the comparison of the way the poets present the themes",
        "The similarities and the differences: the analysis (the common ground, the contrast)",
        "Conclusion: the comparative appreciation (the unity, the diversity of the non-African poetry)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus — Non-African Poetry (set texts for 2016–2020):" },
      { k: "bul", items: [
        "Alfred Tennyson — Crossing the Bar",
        "George Herbert — The Pulley",
        "William Blake — The School Boy",
        "William Morris — The Proud King",
        "Robert Frost — Birches",
        "William Shakespeare — Shall I compare thee to a Summer's Day? (the sonnet)",
        "Paper 3, Section D: two questions are set for the section — answer ONE (the analysis of the poem, the comparison of the poems)"
      ] }
    ]
  },
  /* =============== LI12 · GENERAL KNOWLEDGE & UNSEEN =============== */
  {
    grade: 12, sem: "Two", icon: "📝", period: "LI12",
    title: "General Knowledge of Literature & the Unseen",
    subtitle: "Paper 1: twenty questions on the General Knowledge of Literature · five on the unseen prose (120–150 words) · five on the unseen poem",
    note: "Paper 1 components: the General Knowledge of Literature (twenty questions), the unseen prose passage (five questions, about 120–150 words), and the unseen poem (five questions). This unit prepares for the general knowledge (the literary terms, the genres, the literary devices, the literary history) and the unseen components.",
    objectives: [
      "Know the literary terms (the genre, the figure of speech, the literary device)",
      "Know the genres (the novel, the play, the poem, the short story) and their features",
      "Know the literary devices (the imagery, the metaphor, the simile, the symbolism, the irony)",
      "Know the literary history (the major periods, the major authors)",
      "Prepare for the unseen prose (the comprehension, the summary, the analysis) and the unseen poem (the analysis, the appreciation)"
    ],
    terms: [
      { t: "The genre", d: "The type of the literature (the novel, the play, the poem, the short story).", x: "The novel, the play" },
      { t: "The novel", d: "The long prose narrative (the fiction) — the characters, the plot, the setting.", x: "The prose fiction" },
      { t: "The play (the drama)", d: "The literary work for the performance (the dialogue, the stage) — the tragedy, the comedy.", x: "The drama" },
      { t: "The poem", d: "The literary work in the verse (the line, the stanza, the meter) — the lyric, the narrative.", x: "The poetry" },
      { t: "The short story", d: "The short prose narrative (the single effect, the concise).", x: "The prose fiction (the short)" },
      { t: "The figure of speech", d: "The device of the language (the metaphor, the simile, the personification, the hyperbole).", x: "The metaphor" },
      { t: "The metaphor", d: "The figure of speech (the direct comparison, without the 'like').", x: "The 'time is a thief'" },
      { t: "The simile", d: "The figure of speech (the comparison with the 'like' / the 'as').", x: "The 'brave as a lion'" },
      { t: "The personification", d: "The figure of speech (the human quality to the non-human).", x: "The 'the wind whispered'" },
      { t: "The symbolism", d: "The use of the symbol (the object, the image) to represent the idea.", x: "The dove (the peace)" },
      { t: "The irony", d: "The contrast of the expectation and the reality (the verbal, the situational, the dramatic).", x: "The 'the fire station burned'" },
      { t: "The theme", d: "The central idea (the message) of the work.", x: "The message" },
      { t: "The characterization", d: "The presentation of the characters (the direct, the indirect).", x: "The portrayal of the character" },
      { t: "The setting", d: "The place and the time of the work.", x: "The background" },
      { t: "The style", d: "The manner of the writing (the language, the structure, the tone).", x: "The manner of the author" },
      { t: "The tone", d: "The attitude of the author (the serious, the humorous, the bitter).", x: "The attitude" },
      { t: "The mood", d: "The atmosphere of the work (the feeling evoked in the reader).", x: "The atmosphere" },
      { t: "The narrative", d: "The telling of the story (the narration) — the first person, the third person.", x: "The telling" },
      { t: "The point of view", d: "The perspective of the narration (the first person, the third person, the omniscient).", x: "The perspective" },
      { t: "The unseen prose", d: "The prose passage (about 120–150 words) not previously seen — the comprehension, the summary, the analysis (Paper 1).", x: "The unseen passage" },
      { t: "The unseen poem", d: "The poem not previously seen — the analysis, the appreciation (Paper 1).", x: "The unseen poem" },
      { t: "The General Knowledge", d: "The knowledge of the literature (the terms, the genres, the devices, the history) — twenty questions in Paper 1.", x: "The literary knowledge" }
    ],
    tf: [
      { s: "The metaphor is the figure of speech that uses the 'like' or the 'as'.", a: "False", why: "The SIMILE uses the 'like' / the 'as'; the METAPHOR is the direct comparison (without the 'like')." },
      { s: "The personification gives the human quality to the non-human.", a: "True", why: "The figure of speech — the personification." },
      { s: "The unseen prose passage in Paper 1 is about 120–150 words long.", a: "True", why: "The scheme of examination — the note (i)." },
      { s: "The General Knowledge of Literature is tested by twenty questions in Paper 1.", a: "True", why: "The scheme — twenty questions on the General Knowledge of Literature." },
      { s: "The play is the literary work for the performance (the dialogue, the stage).", a: "True", why: "The genre — the play (the drama)." }
    ],
    mcq: [
      { q: "The figure of speech that uses the 'like' or the 'as' is the:", o: ["the simile", "the metaphor", "the personification", "the hyperbole"], a: 0, why: "The simile — the comparison with the 'like' / the 'as'." },
      { q: "The figure of speech (the direct comparison, without the 'like') is the:", o: ["the metaphor", "the simile", "the alliteration", "the onomatopoeia"], a: 0, why: "The metaphor." },
      { q: "The figure of speech (the human quality to the non-human) is the:", o: ["the personification", "the metaphor", "the simile", "the irony"], a: 0, why: "The personification." },
      { q: "The long prose narrative (the fiction) is the:", o: ["the novel", "the poem", "the play", "the essay"], a: 0, why: "The genre — the novel." },
      { q: "The literary work for the performance (the dialogue, the stage) is the:", o: ["the play (the drama)", "the novel", "the poem", "the short story"], a: 0, why: "The genre — the play (the drama)." },
      { q: "The unseen prose passage in Paper 1 is about:", o: ["120–150 words", "500 words", "1000 words", "10 words"], a: 0, why: "The scheme — the note (i)." },
      { q: "The twenty context questions in Paper 1 are on the:", o: ["the prescribed Shakespearean text", "the African prose", "the Non-African drama", "the unseen poem"], a: 0, why: "The scheme — the twenty context questions on the Shakespearean text." }
    ],
    essay: [
      { q: "Prepare for the General Knowledge of Literature (the literary terms, the genres, the literary devices, the literary history). (The twenty questions in Paper 1 are objective — this is a preparation outline.)", marks: 1, outline: [
        "The literary terms: the genre (the novel, the play, the poem, the short story), the figure of speech (the metaphor, the simile, the personification, the hyperbole), the literary device (the symbolism, the irony, the imagery)",
        "The genres: the novel (the long prose narrative), the play (the drama — the tragedy, the comedy), the poem (the lyric, the narrative), the short story (the short prose)",
        "The literary devices: the imagery (the visual, the auditory), the metaphor, the simile, the symbolism, the irony (the verbal, the situational, the dramatic)",
        "The literary history: the major periods (the medieval, the renaissance, the romantic, the Victorian, the modern), the major authors (Shakespeare, the romantics, the moderns)",
        "The elements of the literature: the theme, the characterization, the setting, the style, the tone, the mood, the narrative, the point of view",
        "The preparation: the reading of the literary terms, the practice of the objective questions"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus — Paper 1 components (the General Knowledge, the unseen):" },
      { k: "bul", items: [
        "Twenty questions on the General Knowledge of Literature (the terms, the genres, the devices, the history)",
        "Five questions on the unseen prose passage (about 120–150 words) — the comprehension, the summary, the analysis",
        "Five questions on the unseen poem — the analysis, the appreciation",
        "Twenty context questions on the prescribed Shakespearean text (see LI5 — Othello)",
        "Candidates answer ALL the fifty questions within 1 hour for 50 marks"
      ] }
    ]
  }
  ]
};
window.WA_SUBJECTS.li = window.WA_li;
