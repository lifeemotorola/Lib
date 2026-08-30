/* Curriculum data — Republic of Liberia, SENIOR HIGH ENGLISH GRAMMAR, Grades 10–12.
   Derived from the "English Grammar 10-12" senior high curriculum guide (37 pp.),
   6 periods per grade, 18 units.

   Uses the EN_CURRICULUM unit shape so GEN_EN renders it unchanged:
     grade · period · sem · icon · title · subtitle · outcomes[] · objectives[]
     · note · focus[]
     · words[]{w,s,d,x}          vocabulary: word, "say" hint, definition, example
     · grammar[]{q,a,why}        grammar practice with the reason for each answer
     · pairs[]{kind,a,b}         synonyms / antonyms / homophones
     · phonics[]{label,p,words}  word building: prefixes, suffixes, roots
     · passage{title,text,qs[]{q,a}}   reading comprehension
     · sight[]                   words to know on sight
     · activities[] · materials[] · assessment[]

   Per the project rule the digital research links listed in the source guide
   (eslbuzz.com, englishhints.com, grammarly.com, dictionary.com,
   khanacademy.org, myenglishpages.com, languagelearningbase.com, quora.com)
   are omitted: the pack must stay fully offline. Textbooks named in the guide
   are retained as text references.
*/

var EG_CURRICULUM = [

/* ================================ GRADE 10 ================================ */
{
  grade:10, period:"I", sem:"One", icon:"📝",
  title:"Nouns and Pronouns",
  subtitle:"Kinds of nouns, pronouns and their antecedents, and autobiographical narration",
  outcomes:[
    "Learners are able to use correct nouns and pronouns in writing different types of compositions"
  ],
  objectives:[
    "Construct sentences using nouns and pronouns correctly",
    "Distinguish nouns from pronouns in different types of compositions",
    "Identify and use the kinds of nouns and pronouns correctly in spoken and written English",
    "Recognise the antecedent of a pronoun",
    "Write an autobiographical narrative and a short story"
  ],
  note:"A <b>noun</b> names a person, place, thing or idea. A <b>pronoun</b> stands in place of a noun, and the noun it replaces is its <b>antecedent</b>: in <i>Musu lost her book</i>, <b>Musu</b> is the antecedent of <b>her</b>. A pronoun must agree with its antecedent in <b>number, gender and person</b>.",
  focus:[
    "Common and proper nouns",
    "Concrete and abstract nouns",
    "Singular and plural nouns",
    "Compound and collective nouns",
    "Countable and uncountable nouns",
    "Personal, possessive, indefinite, demonstrative and interrogative pronouns",
    "Antecedents of pronouns",
    "Narration: autobiographical writing and the short story"
  ],
  words:[
    {w:"noun", s:"nown", d:"a word naming a person, place, thing or idea", x:"The word 'market' is a noun."},
    {w:"pronoun", s:"PRO-nown", d:"a word used in place of a noun", x:"She, it and they are pronouns."},
    {w:"antecedent", s:"an-teh-SEE-dent", d:"the noun that a pronoun refers back to", x:"In 'Kollie lost his pen', Kollie is the antecedent."},
    {w:"proper noun", s:"PROP-er nown", d:"the particular name of a person or place, written with a capital", x:"Monrovia is a proper noun."},
    {w:"common noun", s:"COM-on nown", d:"a general name for any member of a class", x:"City is a common noun."},
    {w:"abstract noun", s:"AB-strakt nown", d:"a noun naming something that cannot be touched", x:"Honesty is an abstract noun."},
    {w:"concrete noun", s:"CON-kreet nown", d:"a noun naming something perceived by the senses", x:"Stone is a concrete noun."},
    {w:"collective noun", s:"co-LEK-tiv nown", d:"a noun naming a group as one unit", x:"A team is a collective noun."},
    {w:"compound noun", s:"COM-pownd nown", d:"a noun made of two or more words", x:"Classroom is a compound noun."},
    {w:"countable", s:"COWNT-a-bul", d:"able to be counted and made plural", x:"Book is countable: one book, two books."},
    {w:"uncountable", s:"un-COWNT-a-bul", d:"not counted separately and having no plural", x:"Rice is uncountable."},
    {w:"possessive", s:"po-ZESS-iv", d:"showing ownership", x:"Hers and theirs are possessive pronouns."},
    {w:"indefinite", s:"in-DEF-i-nit", d:"not referring to a particular person or thing", x:"Everyone is an indefinite pronoun."},
    {w:"demonstrative", s:"de-MON-stra-tiv", d:"pointing out a particular thing", x:"This and those are demonstrative pronouns."},
    {w:"interrogative", s:"in-te-ROG-a-tiv", d:"used to ask a question", x:"Who and which are interrogative pronouns."},
    {w:"agreement", s:"a-GREE-ment", d:"matching in number, gender or person", x:"A pronoun must be in agreement with its antecedent."},
    {w:"autobiography", s:"aw-to-by-OG-ra-fee", d:"the story of a person's life written by that person", x:"She wrote her autobiography."},
    {w:"narration", s:"na-RAY-shun", d:"the telling of a story or an account of events", x:"Narration follows a clear order of events."}
  ],
  grammar:[
    {q:"Identify the abstract noun: 'The soldier showed great courage during the flood.'", a:"courage", why:"Courage names a quality that cannot be seen or touched, so it is abstract; soldier and flood are concrete."},
    {q:"Give the plural of 'child', 'ox' and 'woman'.", a:"children, oxen, women", why:"These are irregular plurals formed by internal change or the old -en ending, not by adding -s."},
    {q:"Underline the collective noun: 'The herd of cattle crossed the road.'", a:"herd", why:"Herd names a whole group of animals treated as one unit."},
    {q:"Correct the error: 'Every student must bring their book.'", a:"Every student must bring his or her book.", why:"'Every student' is singular, so the pronoun must be singular to agree with its antecedent."},
    {q:"Name the antecedent: 'The teachers collected their scripts.'", a:"teachers", why:"'Their' refers back to teachers, which is therefore the antecedent."},
    {q:"Choose the correct pronoun: 'The prize was shared between Musu and (I / me).'", a:"me", why:"After the preposition 'between' the objective case is required."},
    {q:"Which is uncountable — 'advice' or 'suggestion'?", a:"advice", why:"Advice has no plural form; we say 'a piece of advice', while suggestions can be counted."},
    {q:"Identify the interrogative pronoun: 'Whose bag is on the desk?'", a:"Whose", why:"It stands in place of a noun and asks a question about ownership."},
    {q:"Correct the error: 'Neither of the boys have finished.'", a:"Neither of the boys has finished.", why:"'Neither' is singular, so it takes the singular verb 'has'."},
    {q:"Rewrite using a possessive pronoun: 'The books belong to us.'", a:"The books are ours.", why:"'Ours' is the possessive pronoun replacing 'belong to us'."},
    {q:"Identify the compound noun: 'She put the letter in her handbag.'", a:"handbag", why:"It is formed from two words, hand and bag, joined into one noun."},
    {q:"Choose correctly: 'Each of the girls (was / were) given a seat.'", a:"was", why:"The subject is 'each', which is singular, not 'the girls'."}
  ],
  pairs:[
    {kind:"synonym", a:"courage", b:"bravery"},
    {kind:"synonym", a:"choose", b:"select"},
    {kind:"antonym", a:"singular", b:"plural"},
    {kind:"antonym", a:"abstract", b:"concrete"},
    {kind:"antonym", a:"common", b:"proper"},
    {kind:"homophone", a:"their", b:"there"},
    {kind:"homophone", a:"its", b:"it's"},
    {kind:"homophone", a:"whose", b:"who's"}
  ],
  phonics:[
    {label:"Nouns formed with -ness", p:"-ness", words:["kindness","darkness","weakness","happiness"]},
    {label:"Nouns formed with -ment", p:"-ment", words:["government","agreement","judgement","payment"]},
    {label:"Nouns formed with -tion", p:"-tion", words:["narration","education","direction","creation"]},
    {label:"Nouns formed with -ship", p:"-ship", words:["friendship","leadership","hardship","ownership"]}
  ],
  passage:{
    title:"The day I learned to trade",
    text:"When I was fourteen my mother fell ill, and the burden of the family stall at Rally Time market passed to me. I remember the fear of that first morning. The other traders were women who had sold pepper and bitterball for twenty years; their voices carried across the whole row and their hands moved without hesitation. Mine shook. A customer asked the price of a heap of pepper and I could not remember what my mother charged. I guessed, and I guessed too low. By noon I had sold everything and had less money than she had given me to buy the stock.\n\nOld Ma Sando, whose table stood beside ours, watched all of this without a word. When I began to cry she came round and sat with me on the bench. She did not tell me that it would be all right. She took a piece of paper and showed me how she worked out her own prices: what she had paid, what she must earn, what the market would bear. Then she made me repeat the figures back to her until I could say them without looking. The next morning I priced every heap before the first customer arrived, and I did not guess once.\n\nI ran that stall for two years, and it paid my school fees to the end of ninth grade. I learned more arithmetic on that bench than I ever learned from a blackboard, and I learned something else besides: that the person who helps you is often the one with least reason to.",
    qs:[
      {q:"Why did the writer take over the family stall?", a:"Her mother fell ill, so the responsibility for the stall passed to her."},
      {q:"What mistake did she make on the first morning, and what was the result?", a:"She could not remember the prices and guessed too low, so although she sold everything she ended with less money than she had been given to buy the stock."},
      {q:"How did Old Ma Sando help, and how was her method different from simply giving advice?", a:"She showed the writer how to work out prices from cost, required earnings and what the market would bear, then made her repeat the figures until she knew them — teaching the method rather than supplying the answer."},
      {q:"Find one abstract noun and one collective noun in the passage.", a:"Abstract: fear, hesitation or burden. Collective: family."},
      {q:"Identify the antecedent of 'their' in 'their voices carried across the whole row'.", a:"The other traders (the women who had sold pepper and bitterball for twenty years)."},
      {q:"What does the writer mean by the last sentence?", a:"That the person who helped her was a competitor with nothing to gain and something to lose, so kindness often comes from those least obliged to give it."},
      {q:"Give two qualities the writer showed. Support each from the passage.", a:"Responsibility — she took on the stall for her ill mother and ran it for two years; and willingness to learn — she accepted correction and priced everything correctly the next day."}
    ]
  },
  sight:["although","business","government","necessary","opportunity","responsible","separate","success"],
  activities:[
    "Point out that words naming persons, places, things or ideas are nouns; list the different kinds of nouns in a given piece of writing",
    "Group work: pronouns replace nouns — give examples of words that stand in for nouns",
    "Discuss pronouns and their antecedents, including pronouns standing for entire groups of words",
    "Study at least ten new words each week and use them in sentences",
    "Write an autobiographical narrative and a short story"
  ],
  materials:[
    "Primary text: Gateway to English for Senior High Schools, Students' Book 1, N. Grant and A. B. K. Dadzie (eds.), Longman & Sedco, 2008",
    "Senior Secondary Guide English — Pearson",
    "Living English Structure for Schools, W. Stannard Allen, Longman, 2008",
    "Writing and Grammar: Communication in Action, Prentice Hall",
    "Longman Dictionary of Contemporary English, 5th edition; workbooks"
  ],
  assessment:["Quizzes","Homework","Assignments","Oral presentations","Written test"]
},
{
  grade:10, period:"II", sem:"One", icon:"🏃",
  title:"Verbs — Part 1",
  subtitle:"Action, linking and helping verbs; the three simple tenses and the progressive forms",
  outcomes:[
    "Learners are able to construct compositions using the different tenses of verbs, and to use verbs correctly when speaking"
  ],
  objectives:[
    "Write sentences using verbs correctly",
    "Distinguish between visible and mental action verbs",
    "Distinguish between transitive and intransitive verbs",
    "Identify helping verbs and modal auxiliaries and how they are used",
    "Use the present, past and future tenses correctly",
    "Form and use the progressive forms of verbs"
  ],
  note:"An <b>action verb</b> tells what the subject does, whether visible (<i>run, write</i>) or mental (<i>think, believe</i>). A <b>transitive</b> verb passes its action to an object; an <b>intransitive</b> verb does not. A <b>linking verb</b> joins the subject to a word describing it. <b>Helping verbs</b> combine with a main verb: <i>is going, has eaten, will travel</i>.",
  focus:[
    "Action verbs: visible and mental",
    "Transitive and intransitive verbs",
    "Linking verbs",
    "Helping verbs and modal auxiliaries",
    "Present, past and future tenses",
    "Progressive forms of verbs",
    "Descriptive and narrative writing"
  ],
  words:[
    {w:"verb", s:"vurb", d:"a word expressing an action or a state of being", x:"'Runs' is the verb in 'She runs fast'."},
    {w:"transitive", s:"TRAN-si-tiv", d:"taking a direct object", x:"'Wrote' is transitive in 'He wrote a letter'."},
    {w:"intransitive", s:"in-TRAN-si-tiv", d:"not taking a direct object", x:"'Slept' is intransitive in 'The baby slept'."},
    {w:"linking verb", s:"LINK-ing vurb", d:"a verb joining the subject to a word that describes it", x:"'Is' is a linking verb in 'She is a nurse'."},
    {w:"helping verb", s:"HELP-ing vurb", d:"a verb used before a main verb to form a tense", x:"'Have' is a helping verb in 'They have gone'."},
    {w:"auxiliary", s:"awg-ZIL-ya-ree", d:"another word for a helping verb", x:"Do, be and have are auxiliaries."},
    {w:"modal", s:"MOH-dal", d:"an auxiliary showing possibility, permission or obligation", x:"Can, must and should are modals."},
    {w:"tense", s:"tens", d:"the form of a verb showing the time of the action", x:"The past tense of 'go' is 'went'."},
    {w:"progressive", s:"pro-GRESS-iv", d:"the verb form showing continuing action, using -ing", x:"'She is writing' is the present progressive."},
    {w:"object", s:"OB-jekt", d:"the word receiving the action of a transitive verb", x:"In 'He kicked the ball', 'ball' is the object."},
    {w:"subject", s:"SUB-jekt", d:"the word naming who or what performs the action", x:"In 'Birds fly', 'birds' is the subject."},
    {w:"infinitive", s:"in-FIN-i-tiv", d:"the base form of a verb, usually with 'to'", x:"'To read' is an infinitive."},
    {w:"predicate", s:"PRED-i-kat", d:"the part of the sentence containing the verb", x:"In 'The boy ran home', 'ran home' is the predicate."},
    {w:"agreement", s:"a-GREE-ment", d:"the matching of subject and verb in number", x:"'He walks' shows subject-verb agreement."},
    {w:"mental action", s:"MEN-tal AK-shun", d:"an action taking place in the mind", x:"Believe, remember and consider are mental actions."},
    {w:"state of being", s:"stayt of BEE-ing", d:"existence rather than action", x:"'Am', 'is' and 'are' show a state of being."}
  ],
  grammar:[
    {q:"Is the verb transitive or intransitive: 'The children laughed loudly.'", a:"intransitive", why:"'Laughed' passes its action to no object; 'loudly' is an adverb, not an object."},
    {q:"Is the verb transitive or intransitive: 'She wrote a long letter.'", a:"transitive", why:"The action of 'wrote' passes to the object 'letter'."},
    {q:"Identify the linking verb and the word it links to the subject: 'The soup smells delicious.'", a:"smells; delicious", why:"'Smells' does not show action here but links the subject 'soup' to the describing word 'delicious'."},
    {q:"Name the helping verb: 'They have finished the examination.'", a:"have", why:"'Have' combines with the main verb 'finished' to form the present perfect."},
    {q:"Give the future tense of 'She writes a letter.'", a:"She will write a letter.", why:"The future is formed with the modal 'will' plus the base form of the verb."},
    {q:"Change to the present progressive: 'He reads the notice.'", a:"He is reading the notice.", why:"The present progressive uses a form of 'be' plus the -ing form."},
    {q:"Choose correctly: 'The list of names (was / were) posted.'", a:"was", why:"The subject is 'list', which is singular; 'of names' is a prepositional phrase, not the subject."},
    {q:"Identify the mental action verb: 'She considered the offer carefully.'", a:"considered", why:"The action takes place in the mind rather than being visible."},
    {q:"Which modal shows obligation: 'You (may / must) submit the form today.'", a:"must", why:"'Must' expresses obligation or necessity; 'may' expresses permission."},
    {q:"Correct the error: 'He don't understand the question.'", a:"He doesn't understand the question.", why:"The third person singular requires 'does not', shortened to 'doesn't'."},
    {q:"Identify the direct object: 'The farmer planted cassava and rice.'", a:"cassava and rice", why:"Both nouns receive the action of the transitive verb 'planted'."},
    {q:"Change to the past progressive: 'They travel to Kakata.'", a:"They were travelling to Kakata.", why:"The past progressive uses 'was' or 'were' plus the -ing form."}
  ],
  pairs:[
    {kind:"synonym", a:"begin", b:"commence"},
    {kind:"synonym", a:"finish", b:"complete"},
    {kind:"antonym", a:"transitive", b:"intransitive"},
    {kind:"antonym", a:"arrive", b:"depart"},
    {kind:"antonym", a:"accept", b:"refuse"},
    {kind:"homophone", a:"past", b:"passed"},
    {kind:"homophone", a:"been", b:"bean"},
    {kind:"homophone", a:"threw", b:"through"}
  ],
  phonics:[
    {label:"Verbs formed with -ise / -ize", p:"-ise", words:["realise","organise","apologise","recognise"]},
    {label:"Verbs formed with en-", p:"en-", words:["enable","encourage","enlarge","enrich"]},
    {label:"Verbs formed with -ify", p:"-ify", words:["clarify","simplify","identify","justify"]},
    {label:"Verbs formed with re-", p:"re-", words:["rewrite","return","review","rebuild"]}
  ],
  passage:{
    title:"The bridge at Kpatawee",
    text:"For eleven years the people of Kpatawee crossed the river on a bridge of four palm trunks lashed together with vine. In the dry season it served well enough. In the rains the water rose over it, and anyone who needed the clinic on the far bank waited, sometimes for days. Two children had been lost from that crossing within living memory, and the town spoke of the bridge the way one speaks of an illness in the family: constantly, and without expectation of a cure.\n\nThe change began with a schoolteacher named Flomo, who had trained as a carpenter before he trained as a teacher. He measured the span and worked out what timber would be needed. He did not have the money and he did not ask for it. Instead he took the figures to the town meeting and read them aloud, and then he asked one question: how many days of labour would each household give? Forty-one households answered. They cut and hauled the timber themselves through two dry seasons, and a road contractor working nearby, hearing of it, gave them the bolts and cable for nothing.\n\nThe bridge has stood for nine years and has carried a motorcycle ambulance twice. Flomo is often asked how he persuaded the town. He says he persuaded nobody: he simply replaced a complaint with a number, and a number is something people can act upon.",
    qs:[
      {q:"Describe the old bridge and the problem it caused in the rainy season.", a:"It was four palm trunks lashed with vine. In the rains the river rose over it, so anyone needing the clinic on the far bank had to wait, sometimes for days."},
      {q:"What is meant by 'the town spoke of the bridge the way one speaks of an illness in the family'?", a:"They discussed it constantly but had given up believing anything could be done about it — it was accepted as a permanent misfortune."},
      {q:"What two kinds of training made Flomo suited to the task?", a:"He had trained as a carpenter before becoming a teacher, so he could both calculate the construction and explain it to the town."},
      {q:"Instead of asking for money, what did Flomo ask for?", a:"Days of labour from each household — forty-one households answered."},
      {q:"Find one transitive verb and one intransitive verb in the second paragraph.", a:"Transitive: 'measured the span' or 'took the figures'. Intransitive: 'Forty-one households answered'."},
      {q:"Identify the tense of 'The bridge has stood for nine years' and explain the choice.", a:"Present perfect. It shows an action beginning in the past and continuing to the present, which is exactly the sense required."},
      {q:"Explain Flomo's final remark in your own words.", a:"A complaint is vague and invites no action, but a specific figure — how much timber, how many days of work each — turns the problem into a task people can divide and complete."}
    ]
  },
  sight:["achieve","believe","develop","experience","occurred","receive","succeed","therefore"],
  activities:[
    "Construct sentences with appropriate action verbs and point out whether the action is visible or mental",
    "Small group work identifying transitive verbs in sentences and the objects that receive the action",
    "Distinguish between the main verb and the helping verb in passages",
    "Construct sentences using the three verb tenses",
    "Go through the writing process to produce descriptive and narrative writing"
  ],
  materials:[
    "Primary text: Gateway to English for Senior High Schools, Students' Book 1, Longman & Sedco, 2008",
    "Senior Secondary Guide English — Pearson",
    "Living English Structure for Schools, W. Stannard Allen, Longman, 2008",
    "Writing and Grammar: Communication in Action, Prentice Hall",
    "Longman Dictionary of Contemporary English, 5th edition; workbooks"
  ],
  assessment:["Quizzes","Classwork","Homework and assignments","Oral presentations and debates","Written test"]
},
{
  grade:10, period:"III", sem:"One", icon:"⏳",
  title:"Verbs — Part 2",
  subtitle:"The perfect tenses, regular and irregular verbs, comparison, and persuasive writing",
  outcomes:[
    "Learners are able to construct different types of essays using the three verb tenses and regular and irregular verbs correctly"
  ],
  objectives:[
    "Use the perfect tenses of verbs correctly",
    "Distinguish between regular and irregular verbs and how they form their past tenses",
    "Form the comparative and superlative correctly",
    "Write persuasive essays using the relevant mechanics"
  ],
  note:"The <b>perfect tenses</b> use <b>have, has</b> or <b>had</b> with the past participle. Present perfect: <i>I have written</i> — completed, but connected to now. Past perfect: <i>I had written</i> — completed before another past action. Future perfect: <i>I will have written</i> — will be complete by a stated future time. <b>Regular</b> verbs add <b>-ed</b>; <b>irregular</b> verbs change form: <i>go, went, gone</i>.",
  focus:[
    "Present perfect, past perfect and future perfect tenses",
    "Regular verbs and the -ed ending",
    "Irregular verbs and their principal parts",
    "Comparative and superlative forms",
    "Persuasion: the persuasive essay"
  ],
  words:[
    {w:"perfect tense", s:"PER-fekt tens", d:"a tense formed with have, has or had plus the past participle", x:"'She has eaten' is the present perfect."},
    {w:"participle", s:"PAR-ti-si-pul", d:"the verb form used with an auxiliary or as an adjective", x:"'Broken' is the past participle of 'break'."},
    {w:"regular verb", s:"REG-yu-lar vurb", d:"a verb forming its past tense by adding -ed", x:"Walk, walked, walked is a regular verb."},
    {w:"irregular verb", s:"i-REG-yu-lar vurb", d:"a verb forming its past tense by changing form", x:"Write, wrote, written is irregular."},
    {w:"principal parts", s:"PRIN-si-pal parts", d:"the base, past and past participle forms of a verb", x:"Learn the principal parts of each irregular verb."},
    {w:"comparative", s:"com-PAR-a-tiv", d:"the form comparing two things", x:"'Taller' is the comparative of 'tall'."},
    {w:"superlative", s:"su-PER-la-tiv", d:"the form comparing three or more", x:"'Tallest' is the superlative of 'tall'."},
    {w:"persuasion", s:"per-SWAY-zhun", d:"writing or speech intended to convince", x:"A persuasive essay uses evidence and reasoning."},
    {w:"argument", s:"AR-gyu-ment", d:"a reason given to support a position", x:"Her argument was supported by figures."},
    {w:"evidence", s:"EV-i-dens", d:"facts offered in support of a claim", x:"Opinion without evidence persuades no one."},
    {w:"counter-argument", s:"COWN-ter AR-gyu-ment", d:"a point raised against one's own position", x:"A strong essay answers the counter-argument."},
    {w:"conclusion", s:"con-KLOO-zhun", d:"the closing section restating the position", x:"The conclusion should not introduce new evidence."},
    {w:"thesis", s:"THEE-sis", d:"the central claim an essay sets out to prove", x:"State the thesis in the first paragraph."},
    {w:"emphasis", s:"EM-fa-sis", d:"special importance given to a point", x:"He placed emphasis on the cost."}
  ],
  grammar:[
    {q:"Give the three principal parts of 'begin'.", a:"begin, began, begun", why:"'Begin' is irregular: the vowel changes rather than -ed being added."},
    {q:"Choose correctly: 'By the time we arrived, the bus (has / had) left.'", a:"had", why:"The past perfect is required because the bus left before the other past action of arriving."},
    {q:"Complete with the present perfect: 'She ______ (finish) her assignment.'", a:"has finished", why:"The present perfect uses 'has' with the past participle for a completed action linked to now."},
    {q:"Correct the error: 'I have went to the market already.'", a:"I have gone to the market already.", why:"After 'have' the past participle 'gone' is required, not the past tense 'went'."},
    {q:"Give the past tense and past participle of 'lie' (to recline).", a:"lay, lain", why:"'Lie' is irregular: lie, lay, lain. This differs from 'lay' (to place), which gives laid, laid."},
    {q:"Form the future perfect: 'By June they ______ (complete) the building.'", a:"will have completed", why:"The future perfect uses 'will have' plus the past participle for an action finished by a future time."},
    {q:"Give the comparative and superlative of 'good'.", a:"better, best", why:"'Good' is irregular and does not take -er or -est."},
    {q:"Correct the error: 'This is the most fastest route.'", a:"This is the fastest route.", why:"A double superlative is wrong: use either 'most' or '-est', never both."},
    {q:"Choose correctly: 'Of the two roads, this is the (shorter / shortest).'", a:"shorter", why:"The comparative is used when only two things are compared."},
    {q:"Correct the error: 'He has ate his lunch.'", a:"He has eaten his lunch.", why:"'Eaten' is the past participle required after 'has'."},
    {q:"Identify the tense: 'They had been warned before the storm came.'", a:"past perfect (passive)", why:"'Had been warned' places the warning before another past event."},
    {q:"Give the past participle of 'choose', 'break' and 'speak'.", a:"chosen, broken, spoken", why:"All three are irregular verbs forming the participle in -en."}
  ],
  pairs:[
    {kind:"synonym", a:"persuade", b:"convince"},
    {kind:"synonym", a:"complete", b:"finish"},
    {kind:"antonym", a:"regular", b:"irregular"},
    {kind:"antonym", a:"agree", b:"oppose"},
    {kind:"antonym", a:"begin", b:"conclude"},
    {kind:"homophone", a:"passed", b:"past"},
    {kind:"homophone", a:"lead", b:"led"},
    {kind:"homophone", a:"principal", b:"principle"}
  ],
  phonics:[
    {label:"Past participles ending -en", p:"-en", words:["written","spoken","broken","chosen"]},
    {label:"Comparatives with -er", p:"-er", words:["taller","stronger","brighter","quicker"]},
    {label:"Superlatives with -est", p:"-est", words:["tallest","strongest","brightest","quickest"]},
    {label:"Words with the prefix over-", p:"over-", words:["overcome","overtake","overlook","overload"]}
  ],
  passage:{
    title:"Should school uniforms be compulsory?",
    text:"Every year the same argument returns to our school. Some parents ask that uniforms be abolished, and their reasons deserve a fair hearing. A uniform costs money that a poor family may not have, and a child who cannot afford one may stay at home rather than come in ordinary clothes. That is a real objection and it should not be dismissed.\n\nYet I have come to believe the uniform should stay, for three reasons. First, it conceals difference. Where pupils wear their own clothes, the gap between the child of a trader and the child of a minister is displayed every morning, and children are cruel about such things. Second, it is cheaper over a year than it appears. A uniform is two garments worn daily for twelve months; ordinary clothes wear out faster and must be more numerous. Third, it marks the school day as different from the rest of life, and that small ceremony of changing into it has value.\n\nThe objection about cost is not answered by abolishing the uniform, because the poorest child then needs clothes just the same. It is answered by a uniform fund, and our own school has run one for six years. Nine pupils were clothed by it last year and no one but the principal knows their names. That is the better solution: keep the uniform, and remove the barrier to it.",
    qs:[
      {q:"State the objection to uniforms that the writer takes seriously.", a:"That a uniform costs money a poor family may not have, and a child unable to afford one may stay away from school altogether."},
      {q:"Summarise the writer's three arguments in favour of uniforms.", a:"They conceal differences of wealth between pupils; they are cheaper over a year than ordinary clothes; and they mark the school day as distinct from the rest of life."},
      {q:"Why does the writer say abolishing the uniform does not solve the cost problem?", a:"Because the poorest child would still need clothes to wear to school, so the expense is not removed, only shifted."},
      {q:"What solution is proposed, and what evidence is given that it works?", a:"A uniform fund. The writer's school has run one for six years and clothed nine pupils last year, with their names known only to the principal."},
      {q:"Why is it effective for the writer to state the opposing argument first?", a:"It shows the objection has been understood and treated fairly, which makes the reader more willing to accept the reply that follows."},
      {q:"Find one verb in the present perfect tense in the passage.", a:"'I have come to believe' (also 'has run one for six years' and 'were clothed' in the past)."},
      {q:"Why does the writer mention that only the principal knows the pupils' names?", a:"To show the fund protects the dignity of those helped, answering the fear that assistance would expose a child's poverty."}
    ]
  },
  sight:["argument","because","consequently","evidence","however","moreover","persuade","therefore"],
  activities:[
    "Explain and demonstrate the perfect tenses of verbs",
    "Group work constructing sentences using the perfect tenses",
    "List regular and irregular verbs and discuss how their past tenses are formed",
    "Construct sentences using regular and irregular verbs in their present and past tenses",
    "Group work on persuasive writing, discussing the issues involved"
  ],
  materials:[
    "Primary text: Gateway to English for Senior High Schools, Students' Book 1, Longman & Sedco, 2008",
    "Senior Secondary Guide English — Pearson",
    "Living English Structure for Schools, W. Stannard Allen, Longman, 2008",
    "Longman Dictionary of Contemporary English, 5th edition",
    "Workbooks and lists of irregular verbs"
  ],
  assessment:["Quizzes","Classwork","Homework and assignments","Persuasive essay","Written test"]
},
{
  grade:10, period:"IV", sem:"Two", icon:"🎨",
  title:"Adjectives and Adverbs",
  subtitle:"Modifying nouns and verbs, proper and compound adjectives, and conjunctive adverbs",
  outcomes:[
    "Learners are able to demonstrate the proper use of adjectives and adverbs in compositions"
  ],
  objectives:[
    "Distinguish adjectives from other parts of speech and explain how they modify nouns and pronouns",
    "Apply adjectives and adverbs appropriately to make writing vivid or precise",
    "Recognise adverbs and how they modify verbs, adjectives and other adverbs",
    "Identify the four questions adverbs answer: Where? When? In what way? To what extent?",
    "Ask of adjectives: what kind, which one, how much, how many?"
  ],
  note:"An <b>adjective</b> modifies a noun or pronoun and answers <b>what kind, which one, how much</b> or <b>how many</b>. An <b>adverb</b> modifies a verb, an adjective or another adverb and answers <b>where, when, in what way</b> or <b>to what extent</b>. A <b>conjunctive adverb</b> — <i>however, therefore, moreover</i> — joins independent clauses and takes a semicolon before it.",
  focus:[
    "Adjectives and the nouns they modify",
    "Proper adjectives and compound adjectives",
    "Articles as adjectives",
    "Adverbs modifying verbs, adjectives and adverbs",
    "The four questions adverbs answer",
    "Conjunctive adverbs and their punctuation",
    "Choosing precise modifiers in writing"
  ],
  words:[
    {w:"adjective", s:"AJ-ek-tiv", d:"a word that modifies a noun or pronoun", x:"'Heavy' is an adjective in 'a heavy load'."},
    {w:"adverb", s:"AD-vurb", d:"a word modifying a verb, adjective or another adverb", x:"'Quickly' is an adverb in 'She ran quickly'."},
    {w:"modify", s:"MOD-i-fy", d:"to describe or limit the meaning of another word", x:"Adjectives modify nouns."},
    {w:"proper adjective", s:"PROP-er AJ-ek-tiv", d:"an adjective formed from a proper noun, written with a capital", x:"'Liberian' is a proper adjective."},
    {w:"compound adjective", s:"COM-pownd AJ-ek-tiv", d:"an adjective of two or more words, often hyphenated", x:"'Well-known' is a compound adjective."},
    {w:"conjunctive adverb", s:"con-JUNK-tiv AD-vurb", d:"an adverb joining two independent clauses", x:"However and therefore are conjunctive adverbs."},
    {w:"article", s:"AR-ti-kul", d:"the words a, an and the used before nouns", x:"'The' is the definite article."},
    {w:"degree", s:"de-GREE", d:"the extent to which a quality is present", x:"Adverbs of degree include very and quite."},
    {w:"vivid", s:"VIV-id", d:"producing a clear and strong picture in the mind", x:"Precise adjectives make writing vivid."},
    {w:"precise", s:"pre-SISE", d:"exact and definite", x:"Choose a precise word rather than a vague one."},
    {w:"intensifier", s:"in-TEN-si-fy-er", d:"a word strengthening the meaning of another", x:"'Extremely' is an intensifier."},
    {w:"comparison", s:"com-PAR-i-son", d:"the forms showing degrees of a quality", x:"Fast, faster, fastest is a comparison."},
    {w:"clause", s:"clawz", d:"a group of words containing a subject and a verb", x:"A conjunctive adverb joins two clauses."},
    {w:"semicolon", s:"SEM-ee-coh-lon", d:"the mark ; used to join closely related clauses", x:"Use a semicolon before 'however'."}
  ],
  grammar:[
    {q:"Identify the adjective and the noun it modifies: 'The narrow path led to a quiet village.'", a:"narrow modifies path; quiet modifies village", why:"Each adjective answers 'what kind' about the noun that follows it."},
    {q:"Identify the adverb and say what it modifies: 'She spoke very softly.'", a:"'softly' modifies 'spoke'; 'very' modifies 'softly'", why:"An adverb may modify a verb or another adverb, as 'very' does here."},
    {q:"Write the proper adjective from 'Liberia'.", a:"Liberian", why:"Proper adjectives are formed from proper nouns and keep the capital letter."},
    {q:"Correct the error: 'He drives very careful.'", a:"He drives very carefully.", why:"The word modifies the verb 'drives', so the adverb 'carefully' is required, not the adjective."},
    {q:"Punctuate correctly: 'The road was flooded however we continued.'", a:"The road was flooded; however, we continued.", why:"A conjunctive adverb joining two independent clauses takes a semicolon before it and a comma after."},
    {q:"Which question does the adverb answer: 'They arrived yesterday.'", a:"When?", why:"'Yesterday' is an adverb of time."},
    {q:"Correct the error: 'She sings good.'", a:"She sings well.", why:"'Well' is the adverb; 'good' is an adjective and cannot modify the verb 'sings'."},
    {q:"Identify the compound adjective: 'It was a well-attended meeting.'", a:"well-attended", why:"Two words joined by a hyphen work together as a single adjective before the noun."},
    {q:"Choose correctly: 'The soup tastes (good / well).'", a:"good", why:"'Tastes' is a linking verb here, so it takes the adjective describing the subject."},
    {q:"Identify all adjectives: 'Three tall boys carried the heavy iron gate.'", a:"Three, tall, heavy, iron", why:"'Three' answers how many, 'tall' and 'heavy' what kind, and 'iron' what kind — a noun used as an adjective."},
    {q:"Which question does the adverb answer: 'He almost finished the work.'", a:"To what extent?", why:"'Almost' is an adverb of degree."},
    {q:"Correct the error: 'This is the more better option.'", a:"This is the better option.", why:"'Better' is already comparative; adding 'more' creates a double comparative."}
  ],
  pairs:[
    {kind:"synonym", a:"vivid", b:"striking"},
    {kind:"synonym", a:"precise", b:"exact"},
    {kind:"antonym", a:"rapidly", b:"slowly"},
    {kind:"antonym", a:"rarely", b:"frequently"},
    {kind:"antonym", a:"vague", b:"precise"},
    {kind:"homophone", a:"plain", b:"plane"},
    {kind:"homophone", a:"weather", b:"whether"},
    {kind:"homophone", a:"loose", b:"lose"}
  ],
  phonics:[
    {label:"Adverbs formed with -ly", p:"-ly", words:["quickly","carefully","rarely","precisely"]},
    {label:"Adjectives formed with -ful", p:"-ful", words:["careful","hopeful","powerful","truthful"]},
    {label:"Adjectives formed with -less", p:"-less", words:["careless","hopeless","fearless","useless"]},
    {label:"Adjectives formed with -ous", p:"-ous", words:["dangerous","famous","generous","various"]}
  ],
  passage:{
    title:"The tailor of Broad Street",
    text:"His shop is narrower than a doorway and darker than the street outside, and for thirty-one years it has been the best tailoring in the district. The machine is a black Singer with a treadle, older than he is; he has never owned an electric one and says he never will, because current fails and a foot does not. Cloth hangs from every nail in careful, colour-sorted rows.\n\nWhat distinguishes his work is not speed. He is, in fact, notoriously slow, and a suit ordered in March may not be ready in April. What distinguishes it is that he measures twice, cuts once, and refuses to begin a garment until he has seen the customer walk. A body at rest and a body in motion are differently shaped, he says, and only one of them will wear the coat.\n\nHis apprentices leave after two or three years to open faster shops that make more money, and he lets them go without complaint. Some of them come back, years later, to ask him something. He always answers, and he never says he told them so. That, more than the stitching, may be why the shop has outlasted every competitor on the street.",
    qs:[
      {q:"Give three adjectives from the first paragraph and the nouns they modify.", a:"'narrower' and 'darker' modify 'shop'; 'black' modifies 'Singer'; 'careful' and 'colour-sorted' modify 'rows'."},
      {q:"Why does the tailor refuse an electric machine?", a:"Because the electricity supply fails, whereas a treadle worked by foot never does."},
      {q:"What does he mean by saying a body at rest and a body in motion are differently shaped?", a:"Clothes must fit a person as they actually move, not only as they stand still, so he watches the customer walk before cutting."},
      {q:"Identify the adverb in 'He is, in fact, notoriously slow' and say what it modifies.", a:"'notoriously' modifies the adjective 'slow'."},
      {q:"Is the tailor's slowness presented as a fault? Explain.", a:"No. It is presented as the consequence of care — measuring twice and cutting once — and the passage links it to the quality that has kept the shop open."},
      {q:"Find one compound adjective in the passage.", a:"'colour-sorted' (describing the rows of cloth)."},
      {q:"What quality does the last paragraph reveal, and how is it shown rather than stated?", a:"Generosity of spirit: he lets apprentices leave without complaint, answers them when they return, and never says he told them so — his conduct is described rather than his character named."}
    ]
  },
  sight:["although","careful","definitely","especially","immediately","particularly","probably","usually"],
  activities:[
    "Identify adjectives and the nouns or pronouns they modify",
    "Use adjectives and adverbs in speech and writing",
    "Classify adjectives and adverbs by the questions they answer",
    "Debate the four questions adverbs answer: Where? When? In what way? To what extent?",
    "Rewrite plain sentences using vivid and precise modifiers"
  ],
  materials:[
    "Primary text: Gateway to English for Senior High Schools, Longman & Sedco, 2008",
    "Senior Secondary Guide English — Pearson",
    "Living English Structure for Schools, W. Stannard Allen, Longman, 2008",
    "Longman Dictionary of Contemporary English, 5th edition",
    "Workbooks"
  ],
  assessment:["Quizzes","Classwork","Homework and assignments","Oral presentations","Written test"]
},
{
  grade:10, period:"V", sem:"Two", icon:"🔗",
  title:"Prepositions, Conjunctions and Interjections",
  subtitle:"Prepositional phrases, the three kinds of conjunction, and words that express feeling",
  outcomes:[
    "Learners are able to demonstrate the correct use of prepositions, conjunctions and interjections in written and spoken English"
  ],
  objectives:[
    "Establish that a prepositional phrase consists of a preposition and a noun or pronoun",
    "Distinguish prepositions with their objects from adverbs",
    "Identify coordinating, subordinating and correlative conjunctions",
    "Use conjunctive adverbs properly",
    "Demonstrate that interjections express feelings or emotions",
    "Write a persuasive advertisement"
  ],
  note:"A <b>preposition</b> shows the relationship between words — location, direction, cause or possession. With its object it forms a <b>prepositional phrase</b>: <i>under the table</i>. <b>Coordinating</b> conjunctions join equals (for, and, nor, but, or, yet, so — <b>FANBOYS</b>); <b>correlative</b> conjunctions work in pairs (<i>either… or</i>); <b>subordinating</b> conjunctions introduce a dependent clause (<i>because, although</i>).",
  focus:[
    "Prepositions and prepositional phrases",
    "Telling prepositions and adverbs apart",
    "Coordinating conjunctions",
    "Correlative conjunctions",
    "Subordinating conjunctions",
    "Conjunctive adverbs",
    "Interjections",
    "Persuasion: the advertisement"
  ],
  words:[
    {w:"preposition", s:"prep-o-ZISH-un", d:"a word showing the relation of a noun to another word", x:"'Under' is a preposition in 'under the bridge'."},
    {w:"prepositional phrase", s:"prep-o-ZISH-un-al frayz", d:"a preposition with its object and modifiers", x:"'In the market' is a prepositional phrase."},
    {w:"object of the preposition", s:"OB-jekt", d:"the noun or pronoun following a preposition", x:"In 'on the mat', 'mat' is the object."},
    {w:"conjunction", s:"con-JUNK-shun", d:"a word joining words, phrases or clauses", x:"'And' is a conjunction."},
    {w:"coordinating", s:"co-OR-di-nay-ting", d:"joining elements of equal rank", x:"But and or are coordinating conjunctions."},
    {w:"correlative", s:"co-REL-a-tiv", d:"working in pairs to join equal elements", x:"Neither… nor is correlative."},
    {w:"subordinating", s:"sub-OR-di-nay-ting", d:"introducing a clause that depends on the main clause", x:"'Although' is subordinating."},
    {w:"interjection", s:"in-ter-JEK-shun", d:"a word expressing sudden feeling", x:"'Alas!' is an interjection."},
    {w:"independent clause", s:"in-de-PEN-dent clawz", d:"a clause that can stand alone as a sentence", x:"'The rain stopped' is independent."},
    {w:"dependent clause", s:"de-PEN-dent clawz", d:"a clause that cannot stand alone", x:"'Because it rained' is dependent."},
    {w:"advertisement", s:"ad-VER-tis-ment", d:"a public notice intended to persuade", x:"An advertisement must be brief and vivid."},
    {w:"slogan", s:"SLOH-gan", d:"a short memorable phrase used in advertising", x:"A good slogan is easily remembered."},
    {w:"appeal", s:"a-PEEL", d:"the quality that attracts or persuades", x:"The advertisement had wide appeal."},
    {w:"audience", s:"AW-dee-ens", d:"the people addressed by a piece of writing", x:"Know your audience before you write."}
  ],
  grammar:[
    {q:"Identify the prepositional phrase and its object: 'The keys are under the wooden bench.'", a:"under the wooden bench; object: bench", why:"The phrase begins with the preposition 'under' and ends with its object 'bench'."},
    {q:"Is the word in bold a preposition or an adverb: 'She looked **up** the word.'", a:"adverb (part of the phrasal verb)", why:"There is no object following 'up' — it completes the verb rather than relating a noun."},
    {q:"Is the word in bold a preposition or an adverb: 'She climbed **up** the ladder.'", a:"preposition", why:"'Up' has the object 'ladder', forming a prepositional phrase."},
    {q:"Name the coordinating conjunction: 'He was tired, but he finished the work.'", a:"but", why:"It joins two independent clauses of equal rank."},
    {q:"Complete the correlative pair: 'Neither the teacher ______ the pupils were informed.'", a:"nor", why:"'Neither' is always paired with 'nor'."},
    {q:"Identify the subordinating conjunction: 'Although it was late, they continued working.'", a:"Although", why:"It introduces the dependent clause 'Although it was late'."},
    {q:"Punctuate: 'The bridge was closed therefore we took the long road.'", a:"The bridge was closed; therefore, we took the long road.", why:"'Therefore' is a conjunctive adverb, so a semicolon precedes it and a comma follows."},
    {q:"Identify the interjection: 'Alas! The harvest was lost.'", a:"Alas", why:"It expresses sudden feeling and stands apart from the grammar of the sentence."},
    {q:"Correct the error: 'The list of the students are on the board.'", a:"The list of the students is on the board.", why:"The subject is 'list'; 'of the students' is a prepositional phrase and cannot control the verb."},
    {q:"Choose correctly: 'Between you and (I / me), the plan will fail.'", a:"me", why:"'Between' is a preposition and requires the objective case."},
    {q:"Name the seven coordinating conjunctions.", a:"for, and, nor, but, or, yet, so", why:"They are remembered by the mnemonic FANBOYS."},
    {q:"Correct the parallel structure: 'Either you must pay now or losing the deposit.'", a:"Either you must pay now or you must lose the deposit.", why:"Correlative conjunctions must join grammatically parallel elements."}
  ],
  pairs:[
    {kind:"synonym", a:"although", b:"though"},
    {kind:"synonym", a:"therefore", b:"consequently"},
    {kind:"antonym", a:"above", b:"below"},
    {kind:"antonym", a:"before", b:"after"},
    {kind:"antonym", a:"toward", b:"away from"},
    {kind:"homophone", a:"to", b:"too"},
    {kind:"homophone", a:"by", b:"buy"},
    {kind:"homophone", a:"for", b:"four"}
  ],
  phonics:[
    {label:"Words with the prefix inter-", p:"inter-", words:["interject","international","interrupt","interval"]},
    {label:"Words with the prefix sub-", p:"sub-", words:["subordinate","submit","subtract","subway"]},
    {label:"Words with the prefix co-", p:"co-", words:["coordinate","cooperate","coexist","correlate"]},
    {label:"Words with the prefix trans-", p:"trans-", words:["transport","translate","transfer","transmit"]}
  ],
  passage:{
    title:"An advertisement and what lies behind it",
    text:"A poster went up along Tubman Boulevard last month. It showed a young woman in a white coat holding a bottle of tonic, and beneath her, in letters a foot high: DOCTORS AGREE. In smaller print at the base of the poster, in grey on grey, was the phrase 'in a survey of nine practitioners'.\n\nNine. Not nine hundred, not nine thousand. Nine practitioners, unnamed, in an unnamed place, asked an unstated question. And the young woman, as it happened, was a model, not a physician; the white coat was a costume. Nothing in the poster was false in the narrow sense. Everything in it was arranged to be misread.\n\nThis is worth studying, because the technique is not confined to tonic. Notice what the poster relies upon: a picture that implies authority without claiming it, a headline in the present tense that sounds like established fact, and the qualifying detail placed where the eye will not travel. A reader who has been taught to look for the small print, to ask 'how many?' and 'who says?', is protected. A reader who has not is sold something. Advertising is a form of persuasion, and persuasion, like any tool, may be used honestly or otherwise.",
    qs:[
      {q:"What did the headline claim, and what did the small print reveal?", a:"The headline said 'DOCTORS AGREE'; the small print revealed the claim rested on a survey of only nine practitioners."},
      {q:"Why does the writer emphasise the number nine?", a:"To show how small and unrepresentative the sample was compared with what the confident headline implies."},
      {q:"Explain the phrase 'Nothing in the poster was false in the narrow sense.'", a:"Each statement was technically true, but the arrangement of image, wording and placement was designed to create a false impression."},
      {q:"List the three techniques the writer identifies.", a:"An image implying authority without claiming it; a present-tense headline that sounds like established fact; and qualifying detail placed where the eye will not go."},
      {q:"Find two prepositional phrases in the first paragraph.", a:"'along Tubman Boulevard', 'in a white coat', 'beneath her', 'in letters a foot high', 'at the base of the poster' — any two."},
      {q:"Identify the subordinating conjunction in the final paragraph and the clause it introduces.", a:"'because' — introducing 'because the technique is not confined to tonic'."},
      {q:"What does the writer say protects a reader, and what is the wider lesson?", a:"Being taught to look for the small print and to ask 'how many?' and 'who says?'. The wider lesson is that persuasion is a tool that can be used honestly or dishonestly, so readers must be critical."}
    ]
  },
  sight:["against","among","beneath","between","despite","during","throughout","without"],
  activities:[
    "Group discussion: prepositions relate words in a sentence, showing location, direction, cause and possession",
    "Identify prepositions in sentences and state the relationship each shows",
    "Teacher writes sentences omitting the conjunctions; learners supply them",
    "Classify conjunctions as coordinating, correlative or subordinating",
    "Learners select approved topics and compose a persuasive advertisement"
  ],
  materials:[
    "Primary text: Gateway to English for Senior High Schools, Longman & Sedco, 2008",
    "Senior Secondary Guide English — Pearson",
    "Living English Structure for Schools, W. Stannard Allen, Longman, 2008",
    "Longman Dictionary of Contemporary English, 5th edition",
    "Newspapers and printed advertisements for analysis"
  ],
  assessment:["Quizzes","Classwork","Homework and assignments","Advertisement writing task","Written test"]
},
{
  grade:10, period:"VI", sem:"Two", icon:"🧩",
  title:"Phrases and Clauses",
  subtitle:"Verbal phrases, appositives, phrasal verbs, and independent and dependent clauses",
  outcomes:[
    "Learners are able to use correct English phrases and clauses in written and spoken English"
  ],
  objectives:[
    "Recognise kinds of phrases in sentences",
    "Distinguish prepositional phrases from adjective and adverb phrases",
    "Identify appositives and appositive phrases and the words they rename",
    "Apply participles and participial phrases in sentences",
    "Identify gerunds and gerund phrases",
    "Construct sentences using infinitives and infinitive phrases",
    "Compare and contrast independent and dependent clauses"
  ],
  note:"A <b>phrase</b> is a group of words with no subject and verb of its own; a <b>clause</b> has both. The three <b>verbals</b> are the <b>participle</b> (verb form used as an adjective), the <b>gerund</b> (-ing form used as a noun) and the <b>infinitive</b> (<i>to</i> + verb, used as noun, adjective or adverb). An <b>appositive</b> renames the noun beside it.",
  focus:[
    "Noun phrases and verb phrases",
    "Prepositional, adjective and adverb phrases",
    "Appositives and appositive phrases",
    "Participles and participial phrases",
    "Gerunds and gerund phrases",
    "Infinitives and infinitive phrases",
    "Phrasal verbs",
    "Independent, dependent, noun, adjective and adverb clauses"
  ],
  words:[
    {w:"phrase", s:"frayz", d:"a group of words without both a subject and a verb", x:"'On the roof' is a phrase."},
    {w:"clause", s:"clawz", d:"a group of words containing a subject and a verb", x:"'When he arrived' is a clause."},
    {w:"appositive", s:"a-POZ-i-tiv", d:"a noun placed beside another to rename it", x:"In 'my brother, a nurse', 'a nurse' is an appositive."},
    {w:"participle", s:"PAR-ti-si-pul", d:"a verb form used as an adjective", x:"'Running water' uses a participle."},
    {w:"gerund", s:"JER-und", d:"an -ing verb form used as a noun", x:"'Swimming is healthy' uses a gerund."},
    {w:"infinitive", s:"in-FIN-i-tiv", d:"the form 'to' plus the base verb", x:"'To succeed' is an infinitive."},
    {w:"verbal", s:"VUR-bal", d:"a verb form used as another part of speech", x:"Participles, gerunds and infinitives are verbals."},
    {w:"phrasal verb", s:"FRAY-zal vurb", d:"a verb combined with a preposition or adverb with a new meaning", x:"'Break down' is a phrasal verb."},
    {w:"independent clause", s:"in-de-PEN-dent clawz", d:"a clause able to stand alone as a sentence", x:"'She wrote the letter' is independent."},
    {w:"dependent clause", s:"de-PEN-dent clawz", d:"a clause that cannot stand alone", x:"'Because she wrote' is dependent."},
    {w:"noun clause", s:"nown clawz", d:"a dependent clause used as a noun", x:"'What he said' is a noun clause."},
    {w:"adjective clause", s:"AJ-ek-tiv clawz", d:"a dependent clause modifying a noun", x:"'who came late' is an adjective clause."},
    {w:"adverb clause", s:"AD-vurb clawz", d:"a dependent clause modifying a verb", x:"'when the bell rang' is an adverb clause."},
    {w:"fragment", s:"FRAG-ment", d:"an incomplete sentence punctuated as a full one", x:"'Because he was late.' is a fragment."},
    {w:"modifier", s:"MOD-i-fy-er", d:"a word or group describing another word", x:"Place the modifier next to what it describes."},
    {w:"dangling modifier", s:"DANG-ling MOD-i-fy-er", d:"a modifier with nothing sensible to describe", x:"A dangling modifier confuses the reader."}
  ],
  grammar:[
    {q:"Identify the appositive: 'Mr Kollie, our head teacher, opened the meeting.'", a:"our head teacher", why:"It is a noun phrase placed beside 'Mr Kollie' to rename him, and is set off by commas."},
    {q:"Is the -ing word a gerund or a participle: 'Reading improves vocabulary.'", a:"gerund", why:"'Reading' is the subject of the sentence, so it functions as a noun."},
    {q:"Is the -ing word a gerund or a participle: 'The reading lamp is broken.'", a:"participle", why:"'Reading' modifies the noun 'lamp', so it functions as an adjective."},
    {q:"Identify the infinitive phrase: 'She hopes to win the scholarship.'", a:"to win the scholarship", why:"It begins with the infinitive 'to win' and includes its object."},
    {q:"Correct the dangling modifier: 'Walking to school, the rain began to fall.'", a:"Walking to school, I felt the rain begin to fall.", why:"The participial phrase must modify the person walking, not the rain."},
    {q:"Is the clause independent or dependent: 'Although the price had risen.'", a:"dependent", why:"'Although' makes it subordinate, so it cannot stand alone as a sentence."},
    {q:"Identify the adjective clause: 'The pupil who won the prize is from Bong.'", a:"who won the prize", why:"It modifies the noun 'pupil' and begins with the relative pronoun 'who'."},
    {q:"Identify the noun clause: 'What she decided surprised everyone.'", a:"What she decided", why:"The whole clause functions as the subject of the verb 'surprised'."},
    {q:"Give the meaning of the phrasal verb: 'The car broke down on the highway.'", a:"stopped working / failed mechanically", why:"A phrasal verb has a meaning different from its separate words."},
    {q:"Correct the fragment: 'Because the road was flooded.'", a:"Because the road was flooded, we turned back.", why:"A dependent clause must be joined to an independent clause to form a sentence."},
    {q:"Identify the participial phrase: 'Exhausted by the journey, the traveller slept.'", a:"Exhausted by the journey", why:"It is a participle with its modifiers, describing 'traveller'."},
    {q:"Identify the adverb clause and what it modifies: 'We left when the rain stopped.'", a:"when the rain stopped; it modifies 'left'", why:"It answers 'when' about the verb, so it is an adverb clause."}
  ],
  pairs:[
    {kind:"synonym", a:"postpone", b:"put off"},
    {kind:"synonym", a:"tolerate", b:"put up with"},
    {kind:"antonym", a:"independent", b:"dependent"},
    {kind:"antonym", a:"complete", b:"fragment"},
    {kind:"antonym", a:"include", b:"omit"},
    {kind:"homophone", a:"cite", b:"site"},
    {kind:"homophone", a:"stationary", b:"stationery"},
    {kind:"homophone", a:"complement", b:"compliment"}
  ],
  phonics:[
    {label:"Phrasal verbs with 'break'", p:"break", words:["break down","break up","break in","break out"]},
    {label:"Phrasal verbs with 'run'", p:"run", words:["run across","run into","run out","run over"]},
    {label:"Phrasal verbs with 'get'", p:"get", words:["get away","get over","get along","get by"]},
    {label:"Phrasal verbs with 'put'", p:"put", words:["put off","put up with","put down","put away"]}
  ],
  passage:{
    title:"Learning to read the river",
    text:"My grandfather, a fisherman on the Saint Paul for fifty years, could not read a word of print. He could read the river. Standing on the bank in the early light, he would name for me the things I could not see: where the bed dropped away, where a submerged log lay waiting, which stretch of quiet water was in fact the most dangerous because the current beneath it ran hardest.\n\nTo learn this took me four years, and I learned it badly. What defeated me was that none of it could be written down. He would say that the water 'sat wrong' over a deep place, and I would look, and see water. Only slowly, after many mornings, did I begin to catch the faint difference in the surface — a smoothness slightly too smooth, a hesitation in the ripple — that told him what lay beneath.\n\nHe died in the year I turned twenty. Every fisherman on that stretch came, and several of them told me the same thing in almost the same words: that he had taught them the river, and that he had never once asked to be paid for it. Knowing something and keeping it are two different skills, my grandfather used to say, and the second one is worth less.",
    qs:[
      {q:"What contrast is drawn in the opening two sentences?", a:"That he could not read print at all, yet could read the river expertly — one kind of literacy replaced by another."},
      {q:"Why was the quiet stretch of water the most dangerous?", a:"Because the current running beneath it was the strongest, despite the calm appearance of the surface."},
      {q:"Why did it take the writer four years to learn?", a:"Because the knowledge could not be written down; it depended on perceiving very faint differences in the surface that had to be learned by repeated observation."},
      {q:"Identify the appositive in the first sentence.", a:"'a fisherman on the Saint Paul for fifty years' — it renames 'My grandfather'."},
      {q:"Find one participial phrase and one gerund in the passage.", a:"Participial phrase: 'Standing on the bank in the early light'. Gerund: 'Knowing something and keeping it' (both -ing forms used as nouns)."},
      {q:"Explain the grandfather's final saying in your own words.", a:"Possessing knowledge and hoarding it are separate abilities, and hoarding is the less valuable of the two — knowledge is worth more when shared."},
      {q:"How does the third paragraph confirm the grandfather's saying?", a:"The other fishermen testified that he had taught them the river and never asked payment, showing he practised what he said."}
    ]
  },
  sight:["accordingly","although","furthermore","nevertheless","otherwise","specifically","subsequently","whereas"],
  activities:[
    "Discuss the kinds of phrases and provide examples",
    "Differentiate between noun phrases and verb phrases",
    "Brainstorm and generate examples of various phrases",
    "Explain what appositives are and identify them in sentences",
    "Construct sentences using infinitives and infinitive phrases",
    "Compare and contrast independent and dependent clauses"
  ],
  materials:[
    "Primary text: Gateway to English for Senior High Schools, Longman & Sedco, 2008",
    "Senior Secondary Guide English — Pearson",
    "Living English Structure for Schools, W. Stannard Allen, Longman, 2008",
    "Longman Dictionary of Contemporary English, 5th edition",
    "Workbooks and lists of phrasal verbs"
  ],
  assessment:["Quizzes","Classwork","Homework and assignments","Oral presentations","Written test"]
},

/* ================================ GRADE 11 ================================ */
{
  grade:11, period:"I", sem:"One", icon:"📚",
  title:"Verb Usage — Part 1",
  subtitle:"The five forms of a verb, the six tenses with their progressive forms, and the book report",
  outcomes:[
    "Learners are able to apply previous knowledge to use verbs correctly in written composition and to write a book report"
  ],
  objectives:[
    "Classify and use the six tenses of the verb correctly, including the progressive forms",
    "Use the five forms of verbs correctly",
    "Write an effective book report",
    "Write a cause-and-effect passage and state the problem"
  ],
  note:"Every verb has <b>five forms</b>: base (<i>start</i>), s-form (<i>starts</i>), -ing form (<i>starting</i>), past tense (<i>started</i>) and past participle (<i>has started</i>). From these come the <b>six tenses</b> — present, past, future, present perfect, past perfect, future perfect — each with a <b>progressive</b> form showing continuing action.",
  focus:[
    "The five forms of a verb",
    "The six tenses and their progressive forms",
    "Cause-and-effect writing",
    "Writing book reports in the context of literature",
    "Identifying verb tenses in a text"
  ],
  words:[
    {w:"base form", s:"bays form", d:"the simplest form of a verb, without endings", x:"'Write' is the base form."},
    {w:"past participle", s:"past PAR-ti-si-pul", d:"the form used with have, has or had", x:"'Written' is the past participle."},
    {w:"progressive", s:"pro-GRESS-iv", d:"the form showing continuing action", x:"'Was writing' is past progressive."},
    {w:"book report", s:"buuk re-PORT", d:"a written account and evaluation of a book", x:"A book report summarises and judges."},
    {w:"summary", s:"SUM-a-ree", d:"a short account of the main points", x:"Begin the report with a brief summary."},
    {w:"plot", s:"plot", d:"the sequence of events in a story", x:"Outline the plot without revealing the ending."},
    {w:"character", s:"KA-rak-ter", d:"a person represented in a story", x:"The main character changes by the end."},
    {w:"setting", s:"SET-ing", d:"the time and place of a story", x:"The setting is a village in Nimba."},
    {w:"theme", s:"theem", d:"the central idea a work explores", x:"The theme is the cost of ambition."},
    {w:"cause", s:"cawz", d:"the thing that makes something else happen", x:"State the cause before the effect."},
    {w:"effect", s:"e-FEKT", d:"the result produced by a cause", x:"The effect was a fall in attendance."},
    {w:"evaluate", s:"e-VAL-yu-ayt", d:"to judge the worth of something", x:"Evaluate the book, do not only retell it."},
    {w:"recommend", s:"rek-o-MEND", d:"to advise as worth doing or reading", x:"I recommend this book to younger readers."},
    {w:"author", s:"AW-thor", d:"the writer of a book", x:"Name the author and the title first."}
  ],
  grammar:[
    {q:"Give the five forms of 'begin'.", a:"begin, begins, beginning, began, begun", why:"Base, s-form, -ing form, past tense and past participle."},
    {q:"Name the tense: 'They had been waiting for two hours.'", a:"past perfect progressive", why:"'Had been' plus the -ing form shows continuing action completed before another past event."},
    {q:"Name the tense: 'She will have finished by Friday.'", a:"future perfect", why:"'Will have' plus the past participle shows completion by a future time."},
    {q:"Correct the error: 'He has wrote the report.'", a:"He has written the report.", why:"After 'has' the past participle 'written' is required."},
    {q:"Change to the present perfect progressive: 'They work here for six years.'", a:"They have been working here for six years.", why:"An action beginning in the past and still continuing takes the present perfect progressive."},
    {q:"Give the past participle of 'lay' (to place) and 'lie' (to recline).", a:"laid; lain", why:"These two verbs are frequently confused: lay, laid, laid and lie, lay, lain."},
    {q:"Identify the tense: 'By the time you called, I had already left.'", a:"past perfect", why:"'Had left' happened before the past action of calling."},
    {q:"Correct the error: 'She is knowing the answer.'", a:"She knows the answer.", why:"Verbs of state such as 'know' are not normally used in the progressive."},
    {q:"Name the tense: 'The rains are coming early this year.'", a:"present progressive", why:"'Are' plus the -ing form shows action in progress."},
    {q:"Complete: 'If the bus arrives late, we ______ (miss) the opening.'", a:"will miss", why:"The main clause of a first conditional takes the simple future."},
    {q:"Correct the shift in tense: 'He opened the door and sees the visitor.'", a:"He opened the door and saw the visitor.", why:"Tense must be consistent within a sentence unless the time genuinely changes."},
    {q:"Give the s-form and -ing form of 'carry'.", a:"carries; carrying", why:"A final -y after a consonant becomes -ies, but stays before -ing."}
  ],
  pairs:[
    {kind:"synonym", a:"summarise", b:"condense"},
    {kind:"synonym", a:"evaluate", b:"assess"},
    {kind:"antonym", a:"cause", b:"effect"},
    {kind:"antonym", a:"praise", b:"criticise"},
    {kind:"antonym", a:"brief", b:"lengthy"},
    {kind:"homophone", a:"read", b:"reed"},
    {kind:"homophone", a:"write", b:"right"},
    {kind:"homophone", a:"scene", b:"seen"}
  ],
  phonics:[
    {label:"Doubling before -ing", p:"double", words:["running","beginning","stopping","planning"]},
    {label:"Dropping final e before -ing", p:"drop e", words:["writing","making","hoping","coming"]},
    {label:"-y becomes -ies", p:"-ies", words:["carries","studies","replies","tries"]},
    {label:"Words with the prefix pre-", p:"pre-", words:["predict","prepare","prevent","preview"]}
  ],
  passage:{
    title:"Why the well was abandoned",
    text:"When the hand pump was installed at the edge of the town in 2016, four hundred people depended on it. Within three years it had been abandoned, and the women had returned to the creek forty minutes' walk away. The reasons are worth setting down, because they are not the reasons usually given.\n\nThe pump did not fail because the technology was unsuitable. It failed because of a decision made before it was ever installed. The contract had provided for the drilling and the pump, but not for a maintenance fund, and no one had been trained to repair it. When a gasket perished in the second year, the nearest technician was in Gbarnga and charged more to travel than the town could raise in a month. The pump stood, entirely repairable, for eleven months. By then the habit of walking to the creek had reasserted itself, and when a visiting engineer finally replaced the gasket at no cost, only a handful of households returned to the pump.\n\nThe lesson has been learned elsewhere in the county. Three towns that installed pumps in 2019 each set aside a small monthly levy from the beginning and sent two young people for a week's training. All three pumps are working. The equipment was identical; what differed was the planning around it.",
    qs:[
      {q:"State the immediate cause and the underlying cause of the pump's failure.", a:"The immediate cause was a perished gasket. The underlying cause was that no maintenance fund and no local training had been provided for in the contract."},
      {q:"Why did the pump stand unrepaired for eleven months?", a:"The nearest technician was in Gbarnga and his travel cost more than the town could raise in a month."},
      {q:"Explain why repairing the pump later did not restore its use.", a:"By then the habit of walking to the creek had returned, so only a few households came back — the social habit outlasted the technical fault."},
      {q:"What did the three towns in 2019 do differently?", a:"They set aside a small monthly levy from the start and sent two young people for a week's training."},
      {q:"Identify the tense of 'it had been abandoned' and explain the choice.", a:"Past perfect (passive). It places the abandonment before the later point from which the writer is narrating."},
      {q:"Find one verb in the present perfect in the final paragraph.", a:"'The lesson has been learned elsewhere in the county.'"},
      {q:"What general principle does the last sentence express?", a:"That the success of a project depends less on the equipment than on the planning, funding and training arranged around it."}
    ]
  },
  sight:["consequently","previously","significantly","subsequently","furthermore","initially","ultimately","whereas"],
  activities:[
    "Write a cause-and-effect passage and state the problem",
    "Discuss contemporary issues and develop topics into cause-and-effect essays",
    "Read passages and identify as many verb tenses as possible, then classify them",
    "Incorporate sentences using all six tenses of the verb",
    "Read short stories and write a book report using the standard format"
  ],
  materials:[
    "Primary text: Gateway to English for Senior High Schools, Longman & Sedco, 2008",
    "Senior Secondary Guide English — Pearson",
    "Living English Structure for Schools, W. Stannard Allen, Longman, 2008",
    "Longman Dictionary of Contemporary English, 5th edition",
    "Class readers and short story collections"
  ],
  assessment:["Quizzes","Homework and assignments","Book report","Oral presentations","Written test"]
},
{
  grade:11, period:"II", sem:"One", icon:"✍️",
  title:"Verb Usage — Part 2: Voice, Paragraphs and Proofreading",
  subtitle:"Active and passive voice, the elements of a paragraph, and correcting common errors",
  outcomes:[
    "Learners are able to write effective paragraphs using the passive and active voices of the verb tenses"
  ],
  objectives:[
    "Classify the active and passive voices of sentences and construct sentences effectively",
    "Construct effective paragraphs using the elements of a paragraph",
    "Apply proper mechanics to write sentences effectively",
    "Proofread for misspelled words, grammatical errors, run-on sentences and fragments"
  ],
  note:"In the <b>active voice</b> the subject performs the action: <i>The council built the road.</i> In the <b>passive voice</b> the subject receives it: <i>The road was built by the council.</i> Use the active for directness; the passive when the doer is unknown or unimportant. A paragraph needs a <b>topic sentence</b>, a developed <b>body</b>, a <b>conclusion</b>, and both <b>unity</b> and <b>coherence</b>.",
  focus:[
    "Proper verb usage",
    "Active and passive voice and when each is appropriate",
    "The topic sentence, body and conclusion",
    "Unity and coherence in the paragraph",
    "Proofreading: mechanics of grammar, misspelled words",
    "Run-on sentences and sentence fragments",
    "Shift in pronouns, capitalisation and abbreviation"
  ],
  words:[
    {w:"active voice", s:"AK-tiv voys", d:"the form in which the subject performs the action", x:"'The boy kicked the ball' is active."},
    {w:"passive voice", s:"PAS-iv voys", d:"the form in which the subject receives the action", x:"'The ball was kicked' is passive."},
    {w:"topic sentence", s:"TOP-ik SEN-tens", d:"the sentence stating the main idea of a paragraph", x:"Put the topic sentence first."},
    {w:"unity", s:"YU-ni-tee", d:"the quality of every sentence supporting one idea", x:"A paragraph without unity confuses the reader."},
    {w:"coherence", s:"co-HEER-ens", d:"the logical flow of ideas from sentence to sentence", x:"Linking words give coherence."},
    {w:"proofread", s:"PROOF-reed", d:"to read in order to find and correct errors", x:"Always proofread before submitting."},
    {w:"mechanics", s:"me-KAN-iks", d:"the conventions of spelling, punctuation and capitalisation", x:"Marks are lost for poor mechanics."},
    {w:"run-on sentence", s:"RUN-on SEN-tens", d:"two sentences joined without correct punctuation", x:"A run-on sentence must be split or joined properly."},
    {w:"comma splice", s:"KOM-a splys", d:"two independent clauses joined by only a comma", x:"A comma splice is a common error."},
    {w:"fragment", s:"FRAG-ment", d:"an incomplete sentence punctuated as complete", x:"Avoid fragments in formal writing."},
    {w:"transition", s:"tran-ZISH-un", d:"a word linking one idea to the next", x:"'However' is a transition."},
    {w:"abbreviation", s:"a-bree-vee-AY-shun", d:"a shortened form of a word", x:"'Dr' is an abbreviation of 'Doctor'."},
    {w:"capitalisation", s:"kap-i-tal-i-ZAY-shun", d:"the use of capital letters", x:"Proper nouns require capitalisation."},
    {w:"antecedent", s:"an-teh-SEE-dent", d:"the noun a pronoun refers to", x:"Avoid an unclear antecedent."},
    {w:"concise", s:"con-SISE", d:"expressing much in few words", x:"Good writing is concise."}
  ],
  grammar:[
    {q:"Change to the passive: 'The headmaster announced the results.'", a:"The results were announced by the headmaster.", why:"The object becomes the subject and the verb takes a form of 'be' with the past participle."},
    {q:"Change to the active: 'The letter was written by Musu.'", a:"Musu wrote the letter.", why:"The agent becomes the subject and the verb returns to its simple form."},
    {q:"Which voice is preferable and why: 'A decision was made to close the school.'", a:"Active — 'The board decided to close the school.'", why:"The passive conceals who acted; naming the agent makes the sentence clearer and more accountable."},
    {q:"Correct the run-on: 'The rain fell heavily we stayed indoors.'", a:"The rain fell heavily, so we stayed indoors.", why:"Two independent clauses need a conjunction with a comma, a semicolon, or separation into two sentences."},
    {q:"Correct the comma splice: 'She studied hard, she passed the examination.'", a:"She studied hard, and she passed the examination.", why:"A comma alone cannot join independent clauses; add a conjunction or use a semicolon."},
    {q:"Correct the fragment: 'Running through the tall grass beside the road.'", a:"The boy was running through the tall grass beside the road.", why:"A subject and a finite verb must be supplied to make a complete sentence."},
    {q:"Correct the pronoun shift: 'When a student studies, you improve.'", a:"When a student studies, he or she improves.", why:"The person must remain consistent; do not shift from third to second person."},
    {q:"Correct the capitalisation: 'we visited monrovia last june with dr kollie.'", a:"We visited Monrovia last June with Dr Kollie.", why:"Sentences, proper nouns, months and titles before names take capitals."},
    {q:"Identify the error: 'Neither the pupils nor the teacher were present.'", a:"Neither the pupils nor the teacher was present.", why:"With 'neither… nor' the verb agrees with the nearer subject, which is singular."},
    {q:"Is the voice active or passive: 'The bridge is being repaired.'", a:"passive", why:"The subject 'bridge' receives the action; 'is being' plus the participle forms the passive progressive."},
    {q:"Improve for conciseness: 'Due to the fact that it was raining, we did not go.'", a:"Because it was raining, we did not go.", why:"'Due to the fact that' is wordy; 'because' says the same in one word."},
    {q:"Correct the error: 'The reason is because he was late.'", a:"The reason is that he was late.", why:"'Reason' and 'because' together are redundant."}
  ],
  pairs:[
    {kind:"synonym", a:"concise", b:"brief"},
    {kind:"synonym", a:"revise", b:"amend"},
    {kind:"antonym", a:"active", b:"passive"},
    {kind:"antonym", a:"clear", b:"ambiguous"},
    {kind:"antonym", a:"formal", b:"informal"},
    {kind:"homophone", a:"affect", b:"effect"},
    {kind:"homophone", a:"accept", b:"except"},
    {kind:"homophone", a:"advice", b:"advise"}
  ],
  phonics:[
    {label:"Commonly misspelled: double letters", p:"double", words:["accommodate","occurrence","embarrass","necessary"]},
    {label:"-ible or -able", p:"-ible", words:["possible","responsible","visible","terrible"]},
    {label:"-able endings", p:"-able", words:["comfortable","reasonable","valuable","suitable"]},
    {label:"Silent letters", p:"silent", words:["government","environment","February","Wednesday"]}
  ],
  passage:{
    title:"What the marking scheme rewards",
    text:"Having marked senior examinations for nine years, I can say that the scripts which fail rarely fail from ignorance. They fail from disorder. Two candidates may know the same amount and be separated by fifteen marks, and the difference is almost always in the arrangement rather than the knowledge.\n\nConsider the commonest pattern. A candidate reads a question asking him to explain, and he describes instead. He writes everything he knows about the topic, in the order it occurs to him, and hopes the examiner will find the answer somewhere inside it. He will get some credit, because some of the right material is present. But an examiner marks against a scheme, and a scheme awards a mark for each distinct point clearly made. Material buried inside a paragraph of unsorted recollection is often not awarded, not from unfairness, but because it cannot be identified.\n\nThe remedy takes two minutes. Read the command word and decide what is actually wanted. Note the marks available and plan that many points. Give each point its own sentence, and begin that sentence with the point itself rather than working towards it. This is not a trick for concealing ignorance; a candidate who knows nothing will still fail. It is a method for ensuring that what a candidate does know is visible to the person marking.",
    qs:[
      {q:"According to the writer, why do most failing scripts fail?", a:"From disorder in the arrangement of the answer rather than from ignorance of the subject."},
      {q:"Describe the commonest error the writer identifies.", a:"The candidate describes when asked to explain, writing everything he knows in the order it occurs to him and hoping the examiner will locate the answer within it."},
      {q:"Why is buried material often not credited?", a:"Because an examiner marks against a scheme awarding a mark per distinct point clearly made, and a point that cannot be identified cannot be awarded."},
      {q:"State the three steps of the remedy.", a:"Read the command word and decide what is wanted; note the marks available and plan that many points; give each point its own sentence beginning with the point itself."},
      {q:"Rewrite in the active voice: 'Material buried inside a paragraph is often not awarded.'", a:"Examiners often do not award material buried inside a paragraph."},
      {q:"Why does the writer insist the method is 'not a trick for concealing ignorance'?", a:"To make clear that organisation cannot substitute for knowledge — it only ensures that genuine knowledge is visible and therefore creditable."},
      {q:"What is the topic sentence of the second paragraph, and does the paragraph have unity?", a:"'Consider the commonest pattern.' Yes — every following sentence develops that single pattern and its consequence."}
    ]
  },
  sight:["accommodate","acknowledge","apparent","committee","conscience","definitely","occurrence","recommend"],
  activities:[
    "Review the verb tenses and write the past tense of given irregular verbs",
    "Construct verbs whose present principal part ends in 'y'",
    "Classify sentences as active or passive and convert between the two",
    "Write paragraphs with a clear topic sentence, body and conclusion",
    "Proofread passages for misspelled words, run-on sentences, fragments, pronoun shifts, capitalisation and abbreviation"
  ],
  materials:[
    "Primary text: Gateway to English for Senior High Schools, Longman & Sedco, 2008",
    "Senior Secondary Guide English — Pearson",
    "Writing and Grammar: Communication in Action, Prentice Hall",
    "Longman Dictionary of Contemporary English, 5th edition",
    "Workbooks and proofreading exercises"
  ],
  assessment:["Quizzes","Classwork","Proofreading exercise","Paragraph writing","Written test"]
},
{
  grade:11, period:"III", sem:"One", icon:"📄",
  title:"Verb Usage — Part 3: Essay Writing and Dictionary Skills",
  subtitle:"Continuous and simple tenses, the thesis statement, essay organisation, and using a dictionary",
  outcomes:[
    "Learners are able to demonstrate more proficient use of verbs in spoken and written English by writing proper expositions"
  ],
  objectives:[
    "Use verbs in the past progressive, present simple, past simple, past continuous and future tenses",
    "Identify the thesis statement of an essay",
    "Select writing topics and organise an essay with unity and coherence",
    "Use the dictionary effectively in defining words"
  ],
  note:"A <b>thesis statement</b> is the single sentence stating what an essay will prove; every paragraph must serve it. An essay has an <b>introduction</b> ending in the thesis, a <b>body</b> of paragraphs each developing one supporting idea, and a <b>conclusion</b>. In a dictionary, words are in <b>alphabetical order</b> and <b>guide words</b> at the top of the page show the first and last entries.",
  focus:[
    "Using past continuous, present simple, past simple and future tenses",
    "Selecting writing topics",
    "The thesis statement",
    "The organisation of the essay; unity and coherence; mechanics",
    "Dictionary skills: alphabetical order, guide words",
    "Using a dictionary to find meaning, spelling and pronunciation"
  ],
  words:[
    {w:"exposition", s:"eks-po-ZISH-un", d:"writing that explains or informs", x:"An expository essay explains a process."},
    {w:"thesis statement", s:"THEE-sis STAYT-ment", d:"the sentence stating the essay's central claim", x:"Place the thesis at the end of the introduction."},
    {w:"introduction", s:"in-tro-DUK-shun", d:"the opening section of an essay", x:"The introduction attracts interest and states the thesis."},
    {w:"body", s:"BOD-ee", d:"the middle paragraphs developing the argument", x:"Each body paragraph makes one point."},
    {w:"conclusion", s:"con-KLOO-zhun", d:"the closing paragraph drawing the essay together", x:"The conclusion restates the thesis in new words."},
    {w:"outline", s:"OWT-lyn", d:"a plan showing the order of ideas", x:"Make an outline before you write."},
    {w:"guide words", s:"gyd wurds", d:"the words at the top of a dictionary page", x:"Guide words show the first and last entries."},
    {w:"entry", s:"EN-tree", d:"a single word and its explanation in a dictionary", x:"Read the whole entry before choosing a meaning."},
    {w:"definition", s:"def-i-NISH-un", d:"the statement of a word's meaning", x:"A word may have several definitions."},
    {w:"pronunciation", s:"pro-nun-see-AY-shun", d:"the way a word is spoken", x:"The dictionary shows pronunciation in brackets."},
    {w:"etymology", s:"et-i-MOL-o-jee", d:"the origin and history of a word", x:"The etymology of 'school' is Greek."},
    {w:"part of speech", s:"part of speech", d:"the grammatical class of a word", x:"The entry gives the part of speech."},
    {w:"alphabetical", s:"al-fa-BET-i-kal", d:"arranged in the order of the alphabet", x:"Dictionary words are in alphabetical order."},
    {w:"coherence", s:"co-HEER-ens", d:"logical connection between parts", x:"Transitions create coherence."}
  ],
  grammar:[
    {q:"Name the tense: 'While I was cooking, the lights went out.'", a:"past continuous and past simple", why:"'Was cooking' shows an action in progress interrupted by the completed action 'went out'."},
    {q:"Complete: 'She ______ (study) when the visitor arrived.'", a:"was studying", why:"The past continuous shows the ongoing action interrupted by another."},
    {q:"Choose correctly: 'Water (boils / is boiling) at 100 degrees.'", a:"boils", why:"The present simple is used for general truths, not the progressive."},
    {q:"Correct the error: 'Yesterday I have gone to the clinic.'", a:"Yesterday I went to the clinic.", why:"A finished time expression such as 'yesterday' requires the past simple, not the present perfect."},
    {q:"Identify the thesis statement: 'Many towns lack clean water. Boreholes are costly. This essay argues that community maintenance funds are the single most effective way to keep rural pumps working.'", a:"the third sentence", why:"It states the specific claim the essay will prove, rather than giving background."},
    {q:"Name the tense: 'They will be travelling all night.'", a:"future continuous", why:"'Will be' plus the -ing form shows an action in progress at a future time."},
    {q:"Correct the error: 'He is having a car since 2019.'", a:"He has had a car since 2019.", why:"'Have' meaning possession is not used in the progressive, and 'since' requires the present perfect."},
    {q:"Which dictionary page contains 'obstacle': guide words 'oblige / occupy' or 'octave / offer'?", a:"oblige / occupy", why:"Alphabetically 'obstacle' falls between 'oblige' and 'occupy'."},
    {q:"Correct the tense shift: 'She entered the hall and everyone stands up.'", a:"She entered the hall and everyone stood up.", why:"Both verbs describe the same past moment and must share the same tense."},
    {q:"Complete: 'By next December they ______ (live) here for ten years.'", a:"will have been living", why:"The future perfect continuous shows a continuing action complete at a future point."},
    {q:"Choose correctly: 'The train (leaves / is leaving) at six every morning.'", a:"leaves", why:"The present simple is used for a fixed timetable or repeated event."},
    {q:"Correct the error: 'I am agreeing with your suggestion.'", a:"I agree with your suggestion.", why:"'Agree' is a state verb and is not normally used in the progressive."}
  ],
  pairs:[
    {kind:"synonym", a:"explain", b:"clarify"},
    {kind:"synonym", a:"outline", b:"plan"},
    {kind:"antonym", a:"introduction", b:"conclusion"},
    {kind:"antonym", a:"general", b:"specific"},
    {kind:"antonym", a:"support", b:"contradict"},
    {kind:"homophone", a:"cite", b:"sight"},
    {kind:"homophone", a:"course", b:"coarse"},
    {kind:"homophone", a:"role", b:"roll"}
  ],
  phonics:[
    {label:"Words with the root -scrib- / -script- (write)", p:"scrib", words:["describe","prescribe","manuscript","inscription"]},
    {label:"Words with the root -dict- (say)", p:"dict", words:["dictionary","predict","contradict","dictate"]},
    {label:"Words with the root -spect- (look)", p:"spect", words:["inspect","spectator","perspective","respect"]},
    {label:"Words with the root -port- (carry)", p:"port", words:["transport","export","portable","support"]}
  ],
  passage:{
    title:"In defence of the dictionary",
    text:"A dictionary is the least fashionable book a student can own and the most useful. Its unfashionableness is easy to explain: it answers only the question you thought to ask, and it does so without flattery. But a student who consults one seriously acquires something no summary can supply, which is precision.\n\nConsider the entry for a single ordinary word. It gives the spelling, which settles an argument. It gives the pronunciation, which lets you use the word aloud without embarrassment. It gives the part of speech, which tells you where the word may stand in a sentence. It gives several definitions in order of use, so you learn that the meaning you knew is one of four. Often it gives the etymology, and this is the part most students skip and should not, because a word's history frequently explains its present sense: knowing that 'manuscript' comes from the Latin for 'written by hand' fixes both the meaning and the spelling permanently.\n\nThe common objection is that looking up words is slow. It is. That is its value. A meaning arrived at slowly, through the small effort of turning pages and reading an entry to its end, is retained; a meaning glanced at is forgotten by the afternoon. The dictionary is not merely a place to check a word. Used properly, it is a method of learning one.",
    qs:[
      {q:"Why does the writer call the dictionary 'unfashionable'?", a:"Because it answers only the exact question asked and does so plainly, without flattering the reader."},
      {q:"List four pieces of information a dictionary entry provides.", a:"The spelling, the pronunciation, the part of speech, and several definitions in order of use — often also the etymology."},
      {q:"Why does the writer say students should not skip the etymology?", a:"Because a word's history often explains its present meaning, and knowing the origin fixes both meaning and spelling in the memory."},
      {q:"What example is given, and what does it illustrate?", a:"'Manuscript' from the Latin for 'written by hand' — showing how the origin makes both the sense and the spelling memorable."},
      {q:"How does the writer answer the objection that using a dictionary is slow?", a:"By agreeing and arguing that the slowness is the value: a meaning reached through effort is retained, while one merely glanced at is soon forgotten."},
      {q:"Identify the thesis of this passage.", a:"That the dictionary, though unfashionable, is the most useful book a student can own because it teaches precision — and used properly it is a method of learning a word, not merely checking one."},
      {q:"Find one sentence in the present simple used for a general truth.", a:"'A meaning arrived at slowly… is retained' (also 'It gives the spelling, which settles an argument')."}
    ]
  },
  sight:["analyse","conclude","emphasise","illustrate","interpret","justify","summarise","support"],
  activities:[
    "Group discussion on the thesis statement; identify the central idea of a paragraph",
    "Identify supporting ideas in each body paragraph that relate to the thesis statement",
    "Practise arranging words in alphabetical order and using guide words at the top of the page",
    "Use the dictionary to find meaning, spelling, pronunciation and part of speech",
    "Plan and write an expository essay with a clear thesis"
  ],
  materials:[
    "Primary text: Gateway to English for Senior High Schools, Longman & Sedco, 2008",
    "Senior Secondary Guide English — Pearson",
    "Longman Dictionary of Contemporary English, 5th edition",
    "Writing and Grammar: Communication in Action, Prentice Hall",
    "Workbooks"
  ],
  assessment:["Quizzes","Homework and assignments","Expository essay","Dictionary exercise","Written test"]
},
{
  grade:11, period:"IV", sem:"Two", icon:"🔤",
  title:"Vocabulary and Spelling",
  subtitle:"Synonyms, antonyms and homophones; prefixes, roots and suffixes; context clues and spelling rules",
  outcomes:[
    "Learners are able to demonstrate proper use of words with similar meanings, opposite meanings, prefixes, suffixes and root words in compositions"
  ],
  objectives:[
    "Explain the differences among synonyms, antonyms and homophones",
    "Define prefix, root and suffix and use them to learn words",
    "Apply spelling rules",
    "Use context clues to determine the meaning of unfamiliar words",
    "Correct commonly misspelled words"
  ],
  note:"A <b>prefix</b> is added before a root and changes meaning (<i>un-, dis-, pre-</i>); a <b>suffix</b> is added after and usually changes the part of speech (<i>-ness, -ly, -tion</i>). Key spelling rules: <b>i before e except after c</b>; drop a silent <b>e</b> before a vowel suffix; change <b>y</b> to <b>i</b> after a consonant; and double a final consonant after a short stressed vowel.",
  focus:[
    "Synonyms, antonyms, homophones and homographs",
    "Prefixes and their meanings",
    "Root words and word analysis",
    "Suffixes and their meanings",
    "Commonly misspelled words",
    "Using context clues",
    "Spelling rules"
  ],
  words:[
    {w:"synonym", s:"SIN-o-nim", d:"a word with nearly the same meaning as another", x:"'Begin' is a synonym of 'start'."},
    {w:"antonym", s:"AN-to-nim", d:"a word opposite in meaning to another", x:"'Hot' is an antonym of 'cold'."},
    {w:"homophone", s:"HOM-o-fone", d:"a word sounding the same but spelled differently", x:"'Their' and 'there' are homophones."},
    {w:"homograph", s:"HOM-o-graf", d:"a word spelled the same but with a different meaning", x:"'Lead' the metal and 'lead' the verb are homographs."},
    {w:"prefix", s:"PREE-fiks", d:"a word part added to the front of a root", x:"'Un-' is a prefix meaning not."},
    {w:"suffix", s:"SUF-iks", d:"a word part added to the end of a root", x:"'-ness' is a suffix forming nouns."},
    {w:"root", s:"root", d:"the base part of a word carrying its core meaning", x:"'Port' is a root meaning carry."},
    {w:"affix", s:"AF-iks", d:"a prefix or a suffix", x:"An affix changes the meaning or class of a word."},
    {w:"context clue", s:"CON-tekst kloo", d:"a hint to a word's meaning found in the surrounding text", x:"Use context clues before reaching for a dictionary."},
    {w:"derive", s:"de-RYV", d:"to obtain a word from another word or language", x:"Many English words derive from Latin."},
    {w:"connotation", s:"con-o-TAY-shun", d:"the feeling a word carries beyond its plain meaning", x:"'Thrifty' and 'stingy' differ in connotation."},
    {w:"denotation", s:"dee-no-TAY-shun", d:"the plain dictionary meaning of a word", x:"Both words share a denotation."},
    {w:"analyse", s:"AN-a-lyz", d:"to break something into parts to understand it", x:"Analyse the word into prefix, root and suffix."},
    {w:"mnemonic", s:"ne-MON-ik", d:"a device that aids memory", x:"A mnemonic helps with difficult spellings."}
  ],
  grammar:[
    {q:"Give a synonym and an antonym for 'generous'.", a:"synonym: liberal or open-handed; antonym: mean or stingy", why:"A synonym matches the meaning closely; an antonym reverses it."},
    {q:"Choose the correct homophone: 'The team lost (their / there) way.'", a:"their", why:"'Their' shows possession; 'there' refers to place."},
    {q:"Choose correctly: 'The medicine had no (affect / effect).'", a:"effect", why:"'Effect' is the noun meaning result; 'affect' is normally the verb."},
    {q:"Break 'unbelievable' into prefix, root and suffix.", a:"un- + believe + -able", why:"'Un-' means not, 'believe' is the root, '-able' means capable of."},
    {q:"What does the prefix 'mis-' mean? Give two words.", a:"wrongly or badly: misunderstand, misspell", why:"The prefix reverses or negates the quality of the root."},
    {q:"Apply the rule: spell the word meaning 'to take in and hold', beginning with 'rec'.", a:"receive", why:"I before e except after c — 'receive' follows the rule."},
    {q:"Add '-ing' to 'come' and to 'begin'.", a:"coming; beginning", why:"Drop the silent e before a vowel suffix; double the final consonant after a short stressed vowel."},
    {q:"Add '-ed' to 'carry' and to 'play'.", a:"carried; played", why:"Change y to i after a consonant, but keep y after a vowel."},
    {q:"Use context to define 'arid': 'The arid plain had no water and few plants could survive.'", a:"very dry", why:"The absence of water and plants signals the meaning."},
    {q:"Give the meaning of the root 'aud' and two words containing it.", a:"hear: audible, audience", why:"Knowing the root allows the meaning of unfamiliar words to be inferred."},
    {q:"Correct the spelling: 'accomodate', 'seperate', 'recieve'.", a:"accommodate, separate, receive", why:"Two c's and two m's; 'separate' has 'a rat' in it; i before e except after c."},
    {q:"Which suffix turns 'happy' into a noun?", a:"-ness, giving 'happiness'", why:"'-ness' forms abstract nouns from adjectives, with y changing to i."}
  ],
  pairs:[
    {kind:"synonym", a:"ancient", b:"antique"},
    {kind:"synonym", a:"abundant", b:"plentiful"},
    {kind:"antonym", a:"expand", b:"contract"},
    {kind:"antonym", a:"praise", b:"condemn"},
    {kind:"antonym", a:"scarce", b:"abundant"},
    {kind:"homophone", a:"stationary", b:"stationery"},
    {kind:"homophone", a:"peace", b:"piece"},
    {kind:"homophone", a:"weak", b:"week"}
  ],
  phonics:[
    {label:"Prefix un- (not)", p:"un-", words:["unable","unfair","unusual","unwilling"]},
    {label:"Prefix dis- (opposite)", p:"dis-", words:["disagree","dishonest","disappear","discomfort"]},
    {label:"Suffix -tion (act of)", p:"-tion", words:["education","attention","description","invitation"]},
    {label:"Root -graph- (write)", p:"graph", words:["paragraph","autograph","biography","telegraph"]}
  ],
  passage:{
    title:"The word that changed a verdict",
    text:"In a district court some years ago, a case turned on the difference between two words that most speakers treat as interchangeable. A man had signed an agreement to 'discharge' a debt within ninety days. When the ninety days passed and no money had been paid, the lender sued. The defence argued that 'discharge' could mean either to pay or to release from obligation, and that the agreement was therefore ambiguous.\n\nThe magistrate sent for a dictionary. Both meanings were there, as the defence had said. But the entry also gave the etymology: from the Old French descharger, to unload. And it listed the meanings in order of current use, with the sense of payment first in commercial contexts. The magistrate ruled that in an agreement about money, between two parties who both traded for a living, the commercial sense governed. The debt stood.\n\nWhat interests me is not the verdict but the reasoning. The court did not decide what the word ought to mean. It examined what the word did mean to the people who used it, in the setting where they used it. That is precisely how a careful reader should treat any unfamiliar word: not by guessing from the shape of it, and not by seizing the first definition, but by asking which of its senses the surrounding context requires.",
    qs:[
      {q:"What ambiguity did the defence rely on?", a:"That 'discharge' could mean either to pay a debt or to be released from the obligation, making the agreement unclear."},
      {q:"What two pieces of information in the dictionary entry helped the magistrate?", a:"The etymology from Old French descharger, to unload; and the ordering of meanings, with the payment sense first in commercial contexts."},
      {q:"On what basis was the case decided?", a:"That in an agreement about money between two traders, the commercial sense of the word governed."},
      {q:"What distinction does the writer draw in the final paragraph?", a:"Between deciding what a word ought to mean and examining what it did mean to the people using it in that particular setting."},
      {q:"What three errors of reading does the writer warn against?", a:"Guessing from the shape of a word, seizing on the first definition, and ignoring what the surrounding context requires."},
      {q:"Identify the root of 'discharge' and one other English word built from it.", a:"The root relates to 'charge' (to load); other words include 'charger', 'recharge' and 'overcharge'."},
      {q:"Explain the difference between denotation and connotation using this case.", a:"The denotation of 'discharge' covered both payment and release; the connotation in a commercial setting between traders pointed to payment, which decided the matter."}
    ]
  },
  sight:["ambiguous","conscientious","embarrass","exaggerate","maintenance","occasionally","privilege","rhythm"],
  activities:[
    "Discuss synonyms, antonyms, homophones and homographs and give examples of each",
    "Review and discuss root words and use context clues to arrive at word meanings",
    "Review commonly misspelled words for proper spelling",
    "Take turns constructing sentences using context clues",
    "Generate lists of synonyms, antonyms and homophones for class use"
  ],
  materials:[
    "Primary text: Gateway to English for Senior High Schools, Longman & Sedco, 2008",
    "Longman Dictionary of Contemporary English, 5th edition",
    "Senior Secondary Guide English — Pearson",
    "Lists of prefixes, roots and suffixes",
    "Workbooks and spelling lists"
  ],
  assessment:["Quizzes","Spelling tests","Homework and assignments","Vocabulary exercise","Written test"]
},
{
  grade:11, period:"V", sem:"Two", icon:"🏛️",
  title:"Library Skills and Reading Comprehension",
  subtitle:"The card catalogue, active reading, the SQ4R method, skimming and scanning",
  outcomes:[
    "Learners are able to use the card catalogue to find materials in the library and to develop critical thinking and reading skills"
  ],
  objectives:[
    "Use the card catalogue or online catalogue to find information in the library",
    "Provide correct answers to comprehension and critical thinking questions from a given text",
    "Apply the various reading methods to get meaning from passages",
    "Distinguish activities before, during and after reading",
    "Use scanning and skimming appropriately"
  ],
  note:"A <b>card catalogue</b> lists every item by <b>author, title</b> and <b>subject</b>, each card giving the <b>call number</b> that locates the book on the shelf. <b>Skimming</b> means reading quickly for the general sense; <b>scanning</b> means searching for one specific item. The <b>SQ4R</b> method is <b>Survey, Question, Read, Record, Recite, Review</b>.",
  focus:[
    "Using the card catalogue or online catalogue",
    "Call numbers and information in the catalogue",
    "Materials found in the library",
    "Answering direct and critical thinking questions",
    "Active reading: before, during and after",
    "The SQ4R method",
    "Skimming and scanning"
  ],
  words:[
    {w:"catalogue", s:"KAT-a-log", d:"a systematic list of the items in a library", x:"Search the catalogue by subject."},
    {w:"call number", s:"kawl NUM-ber", d:"the code showing where a book is shelved", x:"Copy the call number before you search."},
    {w:"reference", s:"REF-er-ens", d:"a work consulted for information, not borrowed", x:"Dictionaries are reference books."},
    {w:"periodical", s:"peer-ee-OD-i-kal", d:"a magazine or journal published at intervals", x:"Periodicals are kept separately."},
    {w:"index", s:"IN-deks", d:"an alphabetical list of topics with page numbers", x:"Use the index to find a topic quickly."},
    {w:"skim", s:"skim", d:"to read quickly for the general idea", x:"Skim the chapter before reading closely."},
    {w:"scan", s:"skan", d:"to search a text for one specific piece of information", x:"Scan the page for the date."},
    {w:"survey", s:"SUR-vay", d:"to look over a text before reading it", x:"Survey the headings first."},
    {w:"recite", s:"re-SYT", d:"to say aloud from memory to fix learning", x:"Recite the main points without looking."},
    {w:"comprehension", s:"com-pre-HEN-shun", d:"understanding of what is read", x:"Comprehension improves with active reading."},
    {w:"inference", s:"IN-fer-ens", d:"a conclusion drawn from evidence rather than stated", x:"Make an inference from the writer's tone."},
    {w:"critical thinking", s:"KRIT-i-kal THINK-ing", d:"judging information rather than accepting it", x:"Critical thinking questions ask why."},
    {w:"summarise", s:"SUM-a-ryz", d:"to state the main points briefly", x:"Summarise each section as you go."},
    {w:"bibliography", s:"bib-lee-OG-ra-fee", d:"a list of the sources used", x:"Record the bibliography as you research."}
  ],
  grammar:[
    {q:"You need one date from a long article. Should you skim or scan?", a:"scan", why:"Scanning searches for one specific item; skimming is for the general sense."},
    {q:"What do the letters of SQ4R stand for?", a:"Survey, Question, Read, Record, Recite, Review", why:"Each step makes the reader active rather than passive."},
    {q:"Which catalogue entry would you use if you know only the topic?", a:"the subject entry", why:"Subject cards group all works on a topic regardless of author or title."},
    {q:"Is this a direct or a critical thinking question: 'In what year was the school founded?'", a:"direct", why:"The answer is stated explicitly in the text."},
    {q:"Is this a direct or a critical thinking question: 'Why did the writer choose to open with a question?'", a:"critical thinking", why:"It requires judgement about the writer's purpose, which is not stated."},
    {q:"Correct the error: 'Each of the books are on the shelf.'", a:"Each of the books is on the shelf.", why:"'Each' is singular, so the verb must be singular."},
    {q:"Name three activities to carry out before reading.", a:"Survey the headings; ask what you already know; set a purpose or question for reading", why:"Preparation gives the reading direction and improves recall."},
    {q:"What is the purpose of the 'Recite' step in SQ4R?", a:"To say the main points aloud from memory, which tests and fixes understanding", why:"Retrieving information strengthens memory more than rereading."},
    {q:"Correct the error: 'The library have many periodicals.'", a:"The library has many periodicals.", why:"'Library' is a singular collective noun taking a singular verb here."},
    {q:"Where would you look for the meaning, spelling and pronunciation of a word?", a:"a dictionary", why:"A dictionary gives all three, while an encyclopaedia gives factual information about a subject."},
    {q:"Correct the error: 'Neither the index nor the contents page were helpful.'", a:"Neither the index nor the contents page was helpful.", why:"With 'neither… nor' the verb agrees with the nearer subject."},
    {q:"Rewrite concisely: 'It is important to note that the book is located in the reference section.'", a:"The book is in the reference section.", why:"'It is important to note that' adds no meaning."}
  ],
  pairs:[
    {kind:"synonym", a:"summarise", b:"outline"},
    {kind:"synonym", a:"locate", b:"find"},
    {kind:"antonym", a:"skim", b:"study closely"},
    {kind:"antonym", a:"borrow", b:"lend"},
    {kind:"antonym", a:"specific", b:"general"},
    {kind:"homophone", a:"read", b:"reed"},
    {kind:"homophone", a:"know", b:"no"},
    {kind:"homophone", a:"presence", b:"presents"}
  ],
  phonics:[
    {label:"Words with the root -log- (word, study)", p:"log", words:["catalogue","dialogue","biology","apology"]},
    {label:"Words with the root -bibl- (book)", p:"bibl", words:["bibliography","bible","bibliophile"]},
    {label:"Words with the prefix ref- / re- (back)", p:"re-", words:["reference","refer","review","recall"]},
    {label:"Words with the suffix -ary (relating to)", p:"-ary", words:["library","dictionary","summary","necessary"]}
  ],
  passage:{
    title:"The reading room at Sinkor",
    text:"The public reading room at Sinkor holds nine hundred books, most of them donated, and it is open four afternoons a week. It has no computers and no air conditioning. It has one librarian, a retired schoolmistress named Mrs Toe, and a rule that surprises every visitor: no borrowing. Every book must be read inside the room.\n\nThe rule was not made out of distrust. Mrs Toe explains it plainly to anyone who asks. In the first year of the collection there were four hundred books and a lending register; within eighteen months the register recorded three hundred and eleven loans and the shelves held two hundred and forty books. She does not blame the borrowers. People move, houses flood, a book lent to a cousin is not easily recovered. But a collection assembled by donation cannot survive that rate of loss, and a book on the shelf can be read by fifty people while a book in a house is read by one.\n\nAttendance has risen every year since the rule was made. Pupils come after school and sit at the long tables until the light goes. Some of them read the same book across many afternoons and have never owned a book in their lives. Mrs Toe keeps no record of who reads what. She says the only statistic she trusts is the number of chairs occupied at four o'clock.",
    qs:[
      {q:"Describe the reading room in three details from the first paragraph.", a:"It holds nine hundred mostly donated books, opens four afternoons a week, and has no computers or air conditioning — with one librarian and a no-borrowing rule."},
      {q:"Why was the no-borrowing rule introduced? Give the figures.", a:"In the first year there were four hundred books; after eighteen months and three hundred and eleven loans only two hundred and forty remained — the loss rate was unsustainable for a donated collection."},
      {q:"How does Mrs Toe avoid blaming the borrowers?", a:"She accepts that people move, houses flood and a book lent to a relative is hard to recover — the loss is circumstantial rather than dishonest."},
      {q:"What argument does she give for a book staying on the shelf?", a:"That a book on the shelf can be read by fifty people, while a book in a house is read by one."},
      {q:"What evidence suggests the rule has succeeded?", a:"Attendance has risen every year since it was made, and pupils stay reading until the light goes."},
      {q:"Explain the final sentence in your own words.", a:"She judges the library's success only by how many people are actually sitting and reading, not by borrowing records or other statistics."},
      {q:"Would you find this passage by searching an author, title or subject catalogue entry? Explain.", a:"A subject entry — a reader interested in libraries or literacy would search the topic rather than a known author or title."}
    ]
  },
  sight:["available","catalogue","evidence","information","reference","research","resource","source"],
  activities:[
    "Group demonstration of using the card catalogue to find materials in the library",
    "Set up a class library with a librarian and a card catalogue on poster sheets, and role play finding materials",
    "Organise a class visit to the nearest library as a follow-up",
    "Read passages and answer both direct and critical thinking questions",
    "Practise the SQ4R method on a chapter of a class reader",
    "Practise skimming and scanning against the clock"
  ],
  materials:[
    "Primary text: Gateway to English for Senior High Schools, Longman & Sedco, 2008",
    "Senior Secondary Guide English — Pearson",
    "Longman Dictionary of Contemporary English, 5th edition",
    "Poster sheets and card stock for a class catalogue",
    "Class readers, newspapers and reference books"
  ],
  assessment:["Quizzes","Comprehension exercises","Library skills practical","Oral presentations","Written test"]
},
{
  grade:11, period:"VI", sem:"Two", icon:"✉️",
  title:"Letter, Speech and Report Writing",
  subtitle:"Formal and informal letters, applications, speeches and reports",
  outcomes:[
    "Learners are able to use the parts of formal letter writing to write business letters, applications, excuses, requests and thanks, and to write speeches and reports"
  ],
  objectives:[
    "Distinguish the five parts of formal and informal letters",
    "Identify acceptable forms of letter writing",
    "Write business letters, letters of application, excuse, request and thanks",
    "Write and deliver speeches",
    "Write reports and present them for critical evaluation"
  ],
  note:"A <b>formal letter</b> has the <b>writer's address</b> and date, the <b>recipient's address</b>, a <b>salutation</b>, the <b>body</b> and a <b>subscription</b>. Begin <i>Dear Sir/Madam</i> and end <i>Yours faithfully</i>; begin <i>Dear Mr Kollie</i> and end <i>Yours sincerely</i>. An <b>informal letter</b> needs only the writer's address, date, greeting, body and a friendly close.",
  focus:[
    "Informal letters",
    "Formal and business letters",
    "Letters of application, excuse, request and thanks",
    "The five parts of a letter",
    "Speech writing",
    "Report writing",
    "Oral reading and speaking; listening for critical evaluation"
  ],
  words:[
    {w:"salutation", s:"sal-yu-TAY-shun", d:"the greeting that opens a letter", x:"'Dear Sir' is a salutation."},
    {w:"subscription", s:"sub-SKRIP-shun", d:"the closing phrase before the signature", x:"'Yours faithfully' is the subscription."},
    {w:"heading", s:"HED-ing", d:"the writer's address and the date", x:"The heading goes at the top right."},
    {w:"body", s:"BOD-ee", d:"the main message of a letter", x:"Keep the body clear and brief."},
    {w:"formal", s:"FOR-mal", d:"following official convention", x:"A business letter is formal."},
    {w:"informal", s:"in-FOR-mal", d:"friendly and personal in style", x:"An informal letter may use contractions."},
    {w:"application", s:"ap-li-KAY-shun", d:"a formal request, especially for a post", x:"Enclose a curriculum vitae with the application."},
    {w:"recipient", s:"re-SIP-ee-ent", d:"the person to whom something is sent", x:"Address the recipient correctly."},
    {w:"enclosure", s:"en-KLOH-zher", d:"a document sent with a letter", x:"Note the enclosure at the foot."},
    {w:"courtesy", s:"KUR-te-see", d:"polite behaviour in speech or writing", x:"Courtesy costs nothing and gains much."},
    {w:"agenda", s:"a-JEN-da", d:"the list of matters to be discussed", x:"The report followed the agenda."},
    {w:"minutes", s:"MIN-its", d:"the written record of a meeting", x:"The secretary read the minutes."},
    {w:"audience", s:"AW-dee-ens", d:"those who listen to a speech", x:"Adapt the speech to the audience."},
    {w:"delivery", s:"de-LIV-e-ree", d:"the manner of presenting a speech", x:"Good delivery needs pace and eye contact."},
    {w:"conclusion", s:"con-KLOO-zhun", d:"the closing part of a speech or report", x:"End with a memorable conclusion."},
    {w:"recommendation", s:"rek-o-men-DAY-shun", d:"a suggested course of action in a report", x:"The report ended with three recommendations."}
  ],
  grammar:[
    {q:"Which subscription follows 'Dear Sir'?", a:"Yours faithfully", why:"When the recipient is not named, the letter closes 'Yours faithfully'."},
    {q:"Which subscription follows 'Dear Mrs Toe'?", a:"Yours sincerely", why:"When the recipient is named, the letter closes 'Yours sincerely'."},
    {q:"Name the five parts of a formal letter.", a:"Heading (writer's address and date), recipient's address, salutation, body, subscription with signature", why:"All five are required in formal correspondence."},
    {q:"Correct the error: 'I am writing to informing you of my absence.'", a:"I am writing to inform you of my absence.", why:"After 'to' the infinitive base form is required."},
    {q:"Make more formal: 'I can't come to school on Monday because I'm sick.'", a:"I regret that I shall be unable to attend school on Monday owing to illness.", why:"Formal writing avoids contractions and uses more measured vocabulary."},
    {q:"Correct the error: 'Please find enclose my certificates.'", a:"Please find enclosed my certificates.", why:"The past participle 'enclosed' is required as an adjective."},
    {q:"Where is the date placed in a formal letter?", a:"Below the writer's address in the heading", why:"The date follows the sender's address at the top of the letter."},
    {q:"Correct the error: 'Me and my friend wrote the report.'", a:"My friend and I wrote the report.", why:"The nominative 'I' is required for the subject, and courtesy places the other person first."},
    {q:"Rewrite for a formal report: 'The thing was a total mess.'", a:"The arrangements were seriously disorganised.", why:"Reports require objective, specific language rather than vague colloquialism."},
    {q:"Correct the error: 'The committee have submitted its report.'", a:"The committee has submitted its report.", why:"The verb and the pronoun must agree: treat the collective noun consistently as singular."},
    {q:"Correct the error: 'Kindly do the needful and revert back to me.'", a:"Please take the necessary action and reply to me.", why:"'Do the needful' is not standard, and 'revert back' is redundant."},
    {q:"What should a report's recommendations be based on?", a:"The findings set out in the body of the report", why:"A recommendation not supported by the findings carries no authority."}
  ],
  pairs:[
    {kind:"synonym", a:"request", b:"apply for"},
    {kind:"synonym", a:"inform", b:"notify"},
    {kind:"antonym", a:"formal", b:"informal"},
    {kind:"antonym", a:"accept", b:"decline"},
    {kind:"antonym", a:"praise", b:"complaint"},
    {kind:"homophone", a:"dear", b:"deer"},
    {kind:"homophone", a:"mail", b:"male"},
    {kind:"homophone", a:"sent", b:"scent"}
  ],
  phonics:[
    {label:"Words with the suffix -ment", p:"-ment", words:["statement","agreement","appointment","acknowledgement"]},
    {label:"Words with the suffix -ance / -ence", p:"-ance", words:["attendance","assistance","reference","correspondence"]},
    {label:"Words with the prefix in- / im-", p:"in-", words:["inform","inquire","impress","important"]},
    {label:"Formal letter vocabulary", p:"formal", words:["sincerely","faithfully","enclosed","regarding"]}
  ],
  passage:{
    title:"A letter that got the job",
    text:"A principal I know keeps two letters of application in his desk drawer, both for the same vacancy advertised eleven years ago. He shows them to teachers in training. The first is longer, from a candidate with better qualifications, and it did not get the post.\n\nThat letter runs to three pages. It describes the writer's ambitions, his philosophy of education, the difficulties of his upbringing and the sacrifices his mother made. All of it may be true and some of it is moving. But it never once mentions the school, the subject advertised, or what the writer would do in the classroom on a Monday morning. It is a letter about a person, sent to an institution that needed a chemistry teacher.\n\nThe second is under a page. It names the post and where the writer saw it advertised. It states his qualification and the years he has taught chemistry. It gives one paragraph on how he would handle the school's particular difficulty, which the advertisement had mentioned: a laboratory with no running water. He proposed three practicals that need none, and named them. It closes by offering to teach a demonstration lesson at the school's convenience. He was appointed, and he taught there for nine years. The principal's point to the trainees is always the same: the reader of your letter is not interested in you until you have shown you are interested in him.",
    qs:[
      {q:"Why did the longer letter fail despite better qualifications?", a:"It described only the writer — his ambitions, philosophy and background — and never mentioned the school, the subject or what he would actually do in the classroom."},
      {q:"List four things the successful letter contained.", a:"It named the post and where it was advertised; stated the qualification and years of experience; addressed the school's specific difficulty; and offered a demonstration lesson."},
      {q:"How did the second writer show he had understood the school's situation?", a:"He noticed the advertisement mentioned a laboratory with no running water and proposed three named practicals that require none."},
      {q:"What is the effect of offering to teach a demonstration lesson?", a:"It shifts the claim from assertion to proof and shows confidence, making it easy for the school to test him at no risk."},
      {q:"Explain the principal's closing remark in your own words.", a:"An employer cares about your qualities only once you have shown you understand and care about his needs — attention to the reader must come before self-description."},
      {q:"Which subscription should the successful letter have used if it began 'Dear Sir'?", a:"'Yours faithfully' — the recipient was not named."},
      {q:"Rewrite this opening in a more effective form: 'I am a hardworking person who has always dreamed of teaching.'", a:"'I wish to apply for the post of chemistry teacher advertised in the Daily Observer of 3 May.' — naming the post and its source immediately."}
    ]
  },
  sight:["acknowledge","application","correspondence","enclosed","faithfully","sincerely","regarding","submitted"],
  activities:[
    "Explain the parts of formal and informal letters",
    "Group work constructing different kinds of writing: business, application, excuse, request, speech and report",
    "Listen to colleagues as they present for critical evaluation",
    "Write and deliver a short speech to the class",
    "Write a report on a school event and present its recommendations"
  ],
  materials:[
    "Primary text: Gateway to English for Senior High Schools, Longman & Sedco, 2008",
    "Senior Secondary Guide English — Pearson",
    "Sample letters, application forms and reports",
    "Longman Dictionary of Contemporary English, 5th edition",
    "Workbooks"
  ],
  assessment:["Quizzes","Letter writing tasks","Speech delivery","Report writing","Written test"]
},

/* ================================ GRADE 12 ================================ */
{
  grade:12, period:"I", sem:"One", icon:"🎯",
  title:"The Three Cases of Pronouns; Perfect Tenses",
  subtitle:"Nominative, objective and possessive case; the perfect and perfect progressive tenses; summary writing",
  outcomes:[
    "Learners are able to write incorporating the cases of pronouns and the perfect tenses of verbs"
  ],
  objectives:[
    "Differentiate the three cases of pronouns",
    "Construct speeches effectively using the perfect tenses",
    "Recognise different kinds of speeches",
    "Prepare and present speeches",
    "Summarise passages"
  ],
  note:"Pronouns take three <b>cases</b>. The <b>nominative</b> (<i>I, he, she, we, they, who</i>) is used for subjects and after linking verbs. The <b>objective</b> (<i>me, him, her, us, them, whom</i>) is used for objects of verbs and prepositions. The <b>possessive</b> (<i>my, his, her, our, their, whose</i>) shows ownership and never takes an apostrophe.",
  focus:[
    "The nominative, objective and possessive cases",
    "Who and whom",
    "Present perfect and present perfect progressive",
    "Past perfect and past perfect progressive",
    "Future perfect and future perfect progressive",
    "Speech writing and delivery",
    "Summary writing"
  ],
  words:[
    {w:"case", s:"kays", d:"the form of a pronoun showing its function in a sentence", x:"'He' is the nominative case."},
    {w:"nominative", s:"NOM-i-na-tiv", d:"the case used for the subject of a verb", x:"'She' is nominative in 'She left'."},
    {w:"objective", s:"ob-JEK-tiv", d:"the case used for the object of a verb or preposition", x:"'Him' is objective in 'Tell him'."},
    {w:"possessive case", s:"po-ZESS-iv kays", d:"the case showing ownership", x:"'Theirs' is a possessive pronoun."},
    {w:"antecedent", s:"an-teh-SEE-dent", d:"the noun a pronoun refers back to", x:"Match the pronoun to its antecedent."},
    {w:"summary", s:"SUM-a-ree", d:"a brief statement of the main points", x:"A summary omits examples and detail."},
    {w:"paraphrase", s:"PA-ra-frayz", d:"to restate in one's own words at similar length", x:"Paraphrase rather than copy."},
    {w:"informative speech", s:"in-FOR-ma-tiv speech", d:"a speech intended to explain or inform", x:"An informative speech avoids argument."},
    {w:"persuasive speech", s:"per-SWAY-siv speech", d:"a speech intended to convince", x:"A persuasive speech needs evidence."},
    {w:"impromptu", s:"im-PROMP-tyu", d:"delivered without preparation", x:"An impromptu speech tests confidence."},
    {w:"valedictory", s:"val-e-DIK-to-ree", d:"a farewell speech", x:"The head girl gave the valedictory."},
    {w:"gist", s:"jist", d:"the essential meaning of a passage", x:"Give the gist in one sentence."},
    {w:"condense", s:"con-DENS", d:"to reduce in length while keeping the sense", x:"Condense the passage to fifty words."},
    {w:"rhetoric", s:"RET-o-rik", d:"the art of effective speaking and writing", x:"Repetition is a device of rhetoric."}
  ],
  grammar:[
    {q:"Choose correctly: 'The prize was awarded to Musu and (I / me).'", a:"me", why:"It follows the preposition 'to', so the objective case is required."},
    {q:"Choose correctly: '(He / Him) and I completed the project.'", a:"He", why:"It is part of the compound subject, so the nominative case is required."},
    {q:"Choose correctly: 'It was (she / her) who reported the fault.'", a:"she", why:"After the linking verb 'was' the nominative case is used."},
    {q:"Choose correctly: 'To (who / whom) should I address the letter?'", a:"whom", why:"It is the object of the preposition 'to'."},
    {q:"Choose correctly: '(Who / Whom) wrote this essay?'", a:"Who", why:"It is the subject of the verb 'wrote'."},
    {q:"Correct the error: 'Their going to submit they're forms there.'", a:"They're going to submit their forms there.", why:"They're is 'they are', their shows possession, and there refers to place."},
    {q:"Correct the error: 'The dog wagged it's tail.'", a:"The dog wagged its tail.", why:"'Its' is the possessive; 'it's' means 'it is'."},
    {q:"Name the tense: 'She has been teaching here since 2015.'", a:"present perfect progressive", why:"'Has been' plus the -ing form shows a continuing action begun in the past."},
    {q:"Name the tense: 'They had been waiting an hour before the bus came.'", a:"past perfect progressive", why:"It shows continuing action completed before another past event."},
    {q:"Complete: 'By next month he ______ (work) here for ten years.'", a:"will have been working", why:"The future perfect progressive shows duration up to a future point."},
    {q:"Choose correctly: 'Between you and (I / me), the plan is weak.'", a:"me", why:"'Between' is a preposition requiring the objective case."},
    {q:"Correct the error: 'Us students were informed late.'", a:"We students were informed late.", why:"The pronoun is part of the subject, so the nominative 'we' is required."}
  ],
  pairs:[
    {kind:"synonym", a:"condense", b:"abridge"},
    {kind:"synonym", a:"deliver", b:"present"},
    {kind:"antonym", a:"expand", b:"summarise"},
    {kind:"antonym", a:"formal", b:"impromptu"},
    {kind:"antonym", a:"nominative", b:"objective"},
    {kind:"homophone", a:"whose", b:"who's"},
    {kind:"homophone", a:"your", b:"you're"},
    {kind:"homophone", a:"theirs", b:"there's"}
  ],
  phonics:[
    {label:"Contractions and possessives", p:"apostrophe", words:["it's / its","who's / whose","they're / their","you're / your"]},
    {label:"Words with the suffix -ory", p:"-ory", words:["valedictory","introductory","satisfactory","obligatory"]},
    {label:"Words with the prefix pro-", p:"pro-", words:["pronoun","proclaim","propose","promote"]},
    {label:"Words with the root -voc- (call)", p:"voc", words:["vocal","advocate","evoke","vocabulary"]}
  ],
  passage:{
    title:"Two minutes at the microphone",
    text:"The best speech I ever heard at a graduation lasted under two minutes. The speaker was a farmer, invited because his daughter was the first from the district to complete twelfth grade. He had prepared nothing on paper and said so at once. Then he said this.\n\n'I want to tell you what it cost. Not to boast. Because some of you have younger sisters and you should know the price before you are asked to pay it. We sold two goats in the first year. In the third year we sold the palm grove that my father planted, and I have not told him, because he is dead, and I would not know how to say it. My wife has worn the same two dresses for six years. I am not a poor man by the standards of this town, and it took everything I had.'\n\nHe paused there. Then: 'I would do it again tomorrow. But I want the men here to hear the second part. Everything I sold, I sold because there was no other way to raise the money. If this district had a scholarship fund of even small amounts, none of it would have been necessary. My daughter's education cost my family a palm grove. The next girl's should cost only her own hard work.' He sat down. Within a year the district had a fund, and it has sent eleven girls to senior school.",
    qs:[
      {q:"Why was the farmer invited to speak?", a:"Because his daughter was the first person from the district to complete twelfth grade."},
      {q:"List three sacrifices the family made.", a:"They sold two goats, sold the palm grove the speaker's father had planted, and his wife wore the same two dresses for six years."},
      {q:"Why does the speaker say he is telling the cost — and what does he insist he is not doing?", a:"He tells it so that those with younger sisters know the price in advance; he insists he is not boasting."},
      {q:"What is the 'second part' he wants the men to hear?", a:"That the sacrifices were only necessary because no scholarship fund existed, and that with even a small fund none of it would have been required."},
      {q:"Explain the force of 'My daughter's education cost my family a palm grove. The next girl's should cost only her own hard work.'", a:"It contrasts a price paid in family property with a price paid in effort, arguing that the burden should fall on the pupil's work rather than the family's assets."},
      {q:"Identify the case of 'my' in 'my father planted' and of 'me' if it appeared in 'he told me'.", a:"'My' is possessive; 'me' would be objective."},
      {q:"Why was this short speech more effective than a long prepared one might have been?", a:"It was concrete and personal, admitted its own lack of preparation, gave specific verifiable costs, and ended with a single actionable proposal — which the district then adopted."}
    ]
  },
  sight:["accordingly","consequently","furthermore","henceforth","nevertheless","notwithstanding","respectively","whereby"],
  activities:[
    "Group review and discussion of the three cases — nominative, objective and possessive — with examples",
    "In a contrived scenario, use the appropriate tense",
    "Group work reading and summarising given texts",
    "Read different kinds of speeches: informative, persuasive, valedictory",
    "Prepare and present a short speech using the perfect tenses"
  ],
  materials:[
    "Primary text: Gateway to English for Senior High Schools, Longman & Sedco, 2008",
    "Senior Secondary Guide English — Pearson",
    "Living English Structure for Schools, W. Stannard Allen, Longman, 2008",
    "Longman Dictionary of Contemporary English, 5th edition",
    "Collections of speeches for study"
  ],
  assessment:["Quizzes","Homework and assignments","Speech presentation","Summary writing","Written test"]
},
{
  grade:12, period:"II", sem:"One", icon:"🎭",
  title:"Poem, Prose, Drama and Creative Writing",
  subtitle:"Creating original work, the principal parts of a verb, and review of the simple and perfect tenses",
  outcomes:[
    "Learners are able to prepare and present original works of art such as poems, short stories and speeches"
  ],
  objectives:[
    "Create an original work of art such as a poem, a story or a drama",
    "Demonstrate effective speech writing skills",
    "Recognise different kinds of speeches",
    "Compose and present speeches",
    "Review the five principal parts of a verb and the six tenses"
  ],
  note:"<b>Prose</b> is ordinary written language; <b>poetry</b> is arranged in lines and uses rhythm, imagery and often rhyme; <b>drama</b> is written to be performed, in dialogue with stage directions. Useful devices: <b>simile</b> (<i>like</i> or <i>as</i>), <b>metaphor</b> (direct comparison), <b>personification</b>, <b>alliteration</b> and <b>imagery</b>.",
  focus:[
    "Review of essay writing",
    "Creative writing: poem, short story and drama",
    "Figures of speech and imagery",
    "Review of verb usage",
    "The five principal parts of a verb",
    "Present, past and future simple; present, past and future perfect"
  ],
  words:[
    {w:"prose", s:"prohz", d:"ordinary written or spoken language without metrical structure", x:"A novel is written in prose."},
    {w:"poetry", s:"POH-e-tree", d:"writing arranged in lines using rhythm and imagery", x:"Poetry compresses meaning."},
    {w:"drama", s:"DRAH-ma", d:"a work written to be performed by actors", x:"Drama is written mostly as dialogue."},
    {w:"stanza", s:"STAN-za", d:"a group of lines forming a division of a poem", x:"The poem has four stanzas."},
    {w:"simile", s:"SIM-i-lee", d:"a comparison using 'like' or 'as'", x:"'As brave as a lion' is a simile."},
    {w:"metaphor", s:"MET-a-for", d:"a direct comparison without 'like' or 'as'", x:"'He is a lion in battle' is a metaphor."},
    {w:"personification", s:"per-son-i-fi-KAY-shun", d:"giving human qualities to things", x:"'The wind whispered' is personification."},
    {w:"alliteration", s:"a-lit-e-RAY-shun", d:"repetition of the same initial sound", x:"'Wild waves washed' is alliteration."},
    {w:"imagery", s:"IM-ij-ree", d:"language appealing to the senses", x:"Strong imagery makes a scene vivid."},
    {w:"rhyme", s:"rym", d:"matching sounds at the ends of lines", x:"The poem uses an ABAB rhyme."},
    {w:"rhythm", s:"RITH-um", d:"the pattern of stressed and unstressed syllables", x:"Rhythm gives a poem its movement."},
    {w:"dialogue", s:"DY-a-log", d:"conversation between characters", x:"Drama is carried by dialogue."},
    {w:"stage direction", s:"stayj di-REK-shun", d:"an instruction to the actors in a play", x:"Stage directions appear in brackets."},
    {w:"protagonist", s:"pro-TAG-o-nist", d:"the leading character in a story or play", x:"The protagonist faces the main conflict."},
    {w:"conflict", s:"CON-flikt", d:"the struggle that drives a story", x:"Every story needs a conflict."},
    {w:"climax", s:"KLY-maks", d:"the point of greatest tension in a story", x:"The climax comes near the end."}
  ],
  grammar:[
    {q:"Give the five principal parts of 'speak'.", a:"speak, speaks, speaking, spoke, spoken", why:"Base, s-form, -ing form, past tense and past participle."},
    {q:"Identify the figure of speech: 'Her voice was music to the tired crowd.'", a:"metaphor", why:"The voice is called music directly, without 'like' or 'as'."},
    {q:"Identify the figure of speech: 'The old house groaned in the wind.'", a:"personification", why:"A human action, groaning, is given to a house."},
    {q:"Identify the figure of speech: 'He fought like a cornered leopard.'", a:"simile", why:"The comparison uses the word 'like'."},
    {q:"Name the tense: 'The rains had ceased before we set out.'", a:"past perfect", why:"'Had ceased' happened before the past action of setting out."},
    {q:"Correct the error: 'The poet have used three similes.'", a:"The poet has used three similes.", why:"'Poet' is singular and requires 'has'."},
    {q:"Give the past participle of 'sing', 'ring' and 'swim'.", a:"sung, rung, swum", why:"All three are irregular verbs following the same i-a-u pattern."},
    {q:"Correct the tense shift: 'The curtain rises and the hero entered.'", a:"The curtain rises and the hero enters.", why:"Stage action is conventionally described in the present tense throughout."},
    {q:"Identify the alliteration: 'The soft sand slipped silently away.'", a:"soft, sand, slipped, silently", why:"The repeated initial 's' sound creates alliteration."},
    {q:"Name the tense: 'By the last act, the audience will have understood the twist.'", a:"future perfect", why:"'Will have' plus the past participle shows completion by a future point."},
    {q:"Correct the error: 'He begun to write his first poem last year.'", a:"He began to write his first poem last year.", why:"'Began' is the past tense; 'begun' is the participle used only with have, has or had."},
    {q:"What is the difference between a stanza and a paragraph?", a:"A stanza is a group of lines in a poem; a paragraph is a group of sentences in prose", why:"Each is the basic unit of division in its own form."}
  ],
  pairs:[
    {kind:"synonym", a:"create", b:"compose"},
    {kind:"synonym", a:"vivid", b:"graphic"},
    {kind:"antonym", a:"prose", b:"poetry"},
    {kind:"antonym", a:"comedy", b:"tragedy"},
    {kind:"antonym", a:"climax", b:"anticlimax"},
    {kind:"homophone", a:"verse", b:"verse (vs. worse)"},
    {kind:"homophone", a:"rhyme", b:"rime"},
    {kind:"homophone", a:"scene", b:"seen"}
  ],
  phonics:[
    {label:"Literary terms from Greek", p:"greek", words:["drama","protagonist","dialogue","metaphor"]},
    {label:"Words with the suffix -ist", p:"-ist", words:["novelist","dramatist","satirist","columnist"]},
    {label:"Words with the suffix -ism", p:"-ism", words:["realism","symbolism","criticism","idealism"]},
    {label:"Words with the root -vers- / -vert- (turn)", p:"vers", words:["verse","reverse","convert","diverse"]}
  ],
  passage:{
    title:"Harmattan",
    text:"The wind comes down from the desert in December and it changes everything it touches. It arrives first as a smell, dry and faintly metallic, two days before the dust. Then the horizon closes in. The hills that stand over Gbarnga simply are not there one morning, and the sun rises as a pale coin you can look at directly without hurting your eyes.\n\nEverything cracks. Lips crack, the covers of books curl, the wooden door of my grandmother's kitchen shrinks in its frame until it swings free and bangs all night. Clothes dry in an hour. The old people cough. And every surface in the house wears the same fine red film, so that a hand laid flat on the table and lifted leaves a clean print, like something in a museum.\n\nMy grandmother did not complain about the harmattan. She said it was the only season that told the truth. In the rains, she said, everything is washed and green and you cannot see what is failing. The harmattan takes the leaves off and shows you the shape of the tree, and the shape of the tree is what you have.",
    qs:[
      {q:"How does the harmattan announce itself before the dust arrives?", a:"As a dry, faintly metallic smell, two days ahead of the dust itself."},
      {q:"Quote an example of imagery describing the sun and explain its effect.", a:"'The sun rises as a pale coin you can look at directly' — the comparison conveys both the dimness and the flat, hard-edged look of the sun through dust."},
      {q:"List three effects of the dryness given in the second paragraph.", a:"Lips crack, book covers curl, the kitchen door shrinks and bangs; clothes dry in an hour and the old people cough."},
      {q:"Identify the simile in the second paragraph and say what it compares.", a:"'like something in a museum' — comparing the clean handprint left in the dust to a preserved exhibit."},
      {q:"Explain the grandmother's claim that the harmattan 'told the truth'.", a:"The rains cover everything in green growth that hides what is failing, while the harmattan strips the leaves away and reveals the tree's real shape — the underlying reality."},
      {q:"What wider meaning might her remark carry beyond trees?", a:"That hard times reveal the true state of people and situations, showing what is actually there once appearances are stripped away."},
      {q:"Find one example of personification in the passage.", a:"'every surface in the house wears the same fine red film' — surfaces are described as wearing something, a human action."}
    ]
  },
  sight:["atmosphere","description","imagination","metaphor","narrative","original","perspective","technique"],
  activities:[
    "Divide into groups to write poems, plays or short stories using imagination and creativity",
    "Group work for more practice in using the tenses",
    "Read and discuss examples of poem, prose and drama",
    "Identify figures of speech in a set text",
    "Present original work to the class for critical evaluation"
  ],
  materials:[
    "Primary text: Gateway to English for Senior High Schools, Longman & Sedco, 2008",
    "Senior Secondary Guide English — Pearson",
    "Anthologies of African poetry, prose and drama",
    "Longman Dictionary of Contemporary English, 5th edition",
    "Workbooks"
  ],
  assessment:["Quizzes","Creative writing portfolio","Oral presentation","Homework and assignments","Written test"]
},
{
  grade:12, period:"III", sem:"One", icon:"⚠️",
  title:"Phrasal Verbs, Common Mistakes and WASSCE Practice",
  subtitle:"Reviewing phrasal verbs and troublesome words, and preparing for the public examination",
  outcomes:[
    "Learners are able to use phrasal verbs, improve spelling, and write and deliver speeches with confidence"
  ],
  objectives:[
    "Construct compositions using proper phrasal verbs",
    "Demonstrate correct use of words to avoid common mistakes",
    "Review past WASSCE papers",
    "Apply tips for taking public examinations",
    "Practise speech development and oral delivery"
  ],
  note:"A <b>phrasal verb</b> is a verb plus a preposition or adverb whose meaning is not obvious from the parts: <i>put off</i> means postpone. Common confusions to master: <b>affect / effect, its / it's, their / there / they're, accept / except, advice / advise, principal / principle, lie / lay, fewer / less</b>.",
  focus:[
    "Review of phrasal verbs",
    "Common mistakes and troublesome words",
    "Review of past WASSCE papers",
    "Tips for taking public examinations",
    "Speech development and oral practice"
  ],
  words:[
    {w:"phrasal verb", s:"FRAY-zal vurb", d:"a verb plus a particle with a distinct meaning", x:"'Call off' means cancel."},
    {w:"particle", s:"PAR-ti-kul", d:"the preposition or adverb in a phrasal verb", x:"In 'give up', 'up' is the particle."},
    {w:"idiom", s:"ID-ee-um", d:"an expression whose meaning is not literal", x:"'Bite the bullet' is an idiom."},
    {w:"colloquial", s:"co-LOH-kwee-al", d:"used in ordinary conversation rather than formal writing", x:"Avoid colloquial usage in an essay."},
    {w:"redundant", s:"re-DUN-dant", d:"repeating what has already been said", x:"'Return back' is redundant."},
    {w:"ambiguous", s:"am-BIG-yu-us", d:"having more than one possible meaning", x:"An ambiguous sentence must be rewritten."},
    {w:"command word", s:"co-MAND wurd", d:"the instruction word in an examination question", x:"'Discuss' is a command word."},
    {w:"allocate", s:"AL-o-kayt", d:"to assign or distribute", x:"Allocate time according to the marks."},
    {w:"revise", s:"re-VYZ", d:"to review work in preparation for an examination", x:"Revise using past papers."},
    {w:"legible", s:"LEJ-i-bul", d:"clear enough to be read", x:"Handwriting must be legible."},
    {w:"concise", s:"con-SISE", d:"expressing much in few words", x:"A concise answer scores well."},
    {w:"relevant", s:"REL-e-vant", d:"directly connected to the matter in hand", x:"Include only relevant material."},
    {w:"rubric", s:"ROO-brik", d:"the instructions at the head of an examination paper", x:"Read the rubric before starting."},
    {w:"omit", s:"o-MIT", d:"to leave out", x:"Do not omit any compulsory question."}
  ],
  grammar:[
    {q:"Give the meaning of 'call off' and use it in a sentence.", a:"to cancel — 'The match was called off because of rain.'", why:"The meaning cannot be worked out from 'call' and 'off' separately."},
    {q:"Give the meaning of 'put up with'.", a:"to tolerate or endure", why:"A three-word phrasal verb with a single idiomatic meaning."},
    {q:"Choose correctly: 'The medicine will (affect / effect) your appetite.'", a:"affect", why:"'Affect' is the verb meaning to influence; 'effect' is normally the noun."},
    {q:"Choose correctly: 'There are (fewer / less) pupils this term.'", a:"fewer", why:"'Fewer' is used with countable nouns; 'less' with uncountable."},
    {q:"Choose correctly: 'Everyone was present (accept / except) the treasurer.'", a:"except", why:"'Except' means excluding; 'accept' means to receive."},
    {q:"Choose correctly: 'The (principal / principle) addressed the assembly.'", a:"principal", why:"'Principal' is the head of a school; 'principle' is a rule or belief."},
    {q:"Correct the redundancy: 'He returned back to the classroom.'", a:"He returned to the classroom.", why:"'Return' already contains the sense of 'back'."},
    {q:"Correct the error: 'She advised me to take her advise.'", a:"She advised me to take her advice.", why:"'Advise' is the verb; 'advice' is the noun."},
    {q:"Correct the error: 'I could of finished it yesterday.'", a:"I could have finished it yesterday.", why:"'Could of' is a mishearing of 'could have'."},
    {q:"Choose correctly: 'Please (lie / lay) the book on the table.'", a:"lay", why:"'Lay' takes an object; 'lie' does not."},
    {q:"Correct the error: 'The reason why he failed is because he did not revise.'", a:"He failed because he did not revise.", why:"'Reason why… is because' is triply redundant."},
    {q:"What does the command word 'evaluate' require, as distinct from 'describe'?", a:"A judgement supported by evidence, weighing strengths against weaknesses, rather than a plain account", why:"Marks are awarded against the command word, so misreading it loses credit."}
  ],
  pairs:[
    {kind:"synonym", a:"postpone", b:"put off"},
    {kind:"synonym", a:"cancel", b:"call off"},
    {kind:"antonym", a:"accept", b:"reject"},
    {kind:"antonym", a:"include", b:"exclude"},
    {kind:"antonym", a:"concise", b:"verbose"},
    {kind:"homophone", a:"principal", b:"principle"},
    {kind:"homophone", a:"advice", b:"advise"},
    {kind:"homophone", a:"affect", b:"effect"}
  ],
  phonics:[
    {label:"Phrasal verbs with 'take'", p:"take", words:["take after","take over","take up","take in"]},
    {label:"Phrasal verbs with 'give'", p:"give", words:["give up","give in","give away","give out"]},
    {label:"Phrasal verbs with 'look'", p:"look", words:["look after","look into","look up","look forward to"]},
    {label:"Phrasal verbs with 'come'", p:"come", words:["come across","come about","come down with","come up with"]}
  ],
  passage:{
    title:"Advice from an examiner",
    text:"Every year I am asked by candidates what separates a distinction from a pass, and every year my answer disappoints them, because it is not about knowledge. It is about the reading of the question.\n\nTake a common instruction: 'Discuss the effects of rural-urban migration on the city.' Three words in that sentence govern the answer, and candidates routinely ignore all three. 'Discuss' requires more than one side. 'Effects' means consequences, not causes — yet a third of scripts spend two pages explaining why people migrate, which earns nothing. 'On the city' excludes effects on the village, which another quarter of scripts describe at length. A candidate who writes four accurate paragraphs on the wrong thing scores lower than one who writes two paragraphs on the right thing.\n\nMy practical advice is unglamorous. Underline the command word and the limiting words before you write a syllable. Check the mark allocation and plan that many distinct points. Write the point first and the illustration second, so the examiner sees the answer before the evidence. And keep an eye on the clock: an unanswered final question costs more marks than a weak paragraph in the first. None of this requires you to know more than you already do. It requires you to spend the first ninety seconds thinking rather than writing.",
    qs:[
      {q:"What does the examiner say separates a distinction from a pass?", a:"Not knowledge, but the careful reading of the question."},
      {q:"Identify the three governing words in the sample question and what each requires.", a:"'Discuss' requires more than one side; 'effects' means consequences not causes; 'on the city' excludes effects on the village."},
      {q:"Why does a candidate who writes four accurate paragraphs sometimes score less than one who writes two?", a:"Because accuracy on material outside the question earns nothing, while a shorter answer addressing the question exactly earns the available marks."},
      {q:"Summarise the four pieces of practical advice.", a:"Underline the command and limiting words; check the marks and plan that many points; state the point before the illustration; and watch the clock so no question is left unanswered."},
      {q:"Why is an unanswered final question costlier than a weak first paragraph?", a:"A weak paragraph still earns some marks, whereas an unattempted question earns none at all."},
      {q:"Explain the phrase 'My practical advice is unglamorous.'", a:"The advice is dull and procedural rather than clever or impressive — but it is what actually raises marks."},
      {q:"Find one phrasal verb in the passage and give its meaning.", a:"'keep an eye on' — to watch or monitor."}
    ]
  },
  sight:["accurate","allocate","criteria","emphasise","evaluate","illustrate","relevant","specific"],
  activities:[
    "Demonstrate the use of phrasal verbs in sentences and compositions",
    "Discuss and review troublesome words and common mistakes",
    "Practise writing speeches and present them in class for critical evaluation",
    "Review past WASSCE papers in preparation for public examinations",
    "Practise identifying command words and planning answers to the marks available"
  ],
  materials:[
    "Primary text: Gateway to English for Senior High Schools, Longman & Sedco, 2008",
    "Past WASSCE English papers and mark schemes",
    "Longman Dictionary of Contemporary English, 5th edition",
    "Lists of phrasal verbs and commonly confused words",
    "Workbooks"
  ],
  assessment:["Quizzes","Past paper practice","Oral presentations","Homework and assignments","Written test"]
},
{
  grade:12, period:"IV", sem:"Two", icon:"📖",
  title:"Essay Writing and Creative Writing",
  subtitle:"The four kinds of essay, the principal parts of the verb, and public speaking",
  outcomes:[
    "Learners are able to write and deliver different kinds of speeches, and to compose essays of every type"
  ],
  objectives:[
    "Compose different kinds of speeches",
    "Develop and deliver public speeches",
    "Write expository, narrative, descriptive and persuasive essays",
    "Use the principal parts of a verb properly in given texts",
    "Evaluate different kinds of writing in the classroom"
  ],
  note:"There are four principal kinds of essay. <b>Narrative</b> tells a story in sequence. <b>Descriptive</b> creates a picture through sensory detail. <b>Expository</b> explains or informs, with no argument. <b>Persuasive</b> argues a case with evidence and answers the opposing view. Every essay needs an <b>introduction, body</b> and <b>conclusion</b>, with unity and coherence throughout.",
  focus:[
    "Review of essay writing",
    "Narrative, descriptive, expository and persuasive essays",
    "Creative writing",
    "Review of verb usage and the five principal parts",
    "The six tenses in composition",
    "Speech development and oral practice"
  ],
  words:[
    {w:"narrative", s:"NA-ra-tiv", d:"an essay that tells a story in order", x:"A narrative essay follows a sequence of events."},
    {w:"descriptive", s:"de-SKRIP-tiv", d:"an essay creating a picture through detail", x:"A descriptive essay appeals to the senses."},
    {w:"expository", s:"eks-POZ-i-to-ree", d:"an essay that explains or informs", x:"An expository essay presents facts."},
    {w:"persuasive", s:"per-SWAY-siv", d:"an essay arguing for a position", x:"A persuasive essay must answer objections."},
    {w:"chronological", s:"kron-o-LOJ-i-kal", d:"arranged in order of time", x:"Narrative usually follows chronological order."},
    {w:"transition", s:"tran-ZISH-un", d:"a word or phrase linking ideas", x:"'Furthermore' is a transition."},
    {w:"anecdote", s:"AN-ek-doht", d:"a short account of an incident", x:"An anecdote can open an essay well."},
    {w:"elaborate", s:"e-LAB-o-rayt", d:"to develop an idea in more detail", x:"Elaborate each point with an example."},
    {w:"objectivity", s:"ob-jek-TIV-i-tee", d:"freedom from personal bias", x:"Exposition requires objectivity."},
    {w:"draft", s:"draft", d:"an early version of a piece of writing", x:"Revise the first draft carefully."},
    {w:"revision", s:"re-VIZH-un", d:"the reworking of a draft to improve it", x:"Revision improves structure and clarity."},
    {w:"coherent", s:"co-HEER-ent", d:"logically connected and easy to follow", x:"A coherent essay flows naturally."},
    {w:"emphasis", s:"EM-fa-sis", d:"special weight given to a point", x:"Place emphasis on the strongest argument."},
    {w:"conviction", s:"con-VIK-shun", d:"firm belief, or the power to convince", x:"He spoke with conviction."}
  ],
  grammar:[
    {q:"Which kind of essay explains a process without arguing a case?", a:"expository", why:"Exposition informs; persuasion argues."},
    {q:"Give the five principal parts of 'take'.", a:"take, takes, taking, took, taken", why:"Base, s-form, -ing form, past tense and past participle."},
    {q:"Correct the error: 'The essay was wrote in one hour.'", a:"The essay was written in one hour.", why:"The passive requires the past participle 'written'."},
    {q:"Which kind of essay is most likely to use chronological order?", a:"narrative", why:"A story is normally told in the order the events occurred."},
    {q:"Correct the tense shift: 'She walks into the room and saw the letter.'", a:"She walked into the room and saw the letter.", why:"Both verbs describe the same past moment and must agree."},
    {q:"Give three transitions suitable for adding a point.", a:"furthermore, moreover, in addition", why:"Transitions signal the relationship between ideas and create coherence."},
    {q:"Correct the error: 'Having wrote the introduction, he paused.'", a:"Having written the introduction, he paused.", why:"The perfect participle requires 'written'."},
    {q:"What must a persuasive essay include that an expository essay need not?", a:"A counter-argument and its answer", why:"Persuasion must engage the opposing view to be convincing."},
    {q:"Correct the error: 'Each of the essays were marked twice.'", a:"Each of the essays was marked twice.", why:"'Each' is singular and controls the verb."},
    {q:"Name the tense: 'By the deadline she will have revised all four drafts.'", a:"future perfect", why:"It shows completion by a stated future time."},
    {q:"Improve the coherence: 'The road is bad. Trade has fallen.'", a:"The road is bad; consequently, trade has fallen.", why:"A transition makes the causal relationship explicit."},
    {q:"Give the past participle of 'lie' (to recline) and 'lay' (to place).", a:"lain; laid", why:"These verbs are the most commonly confused pair in English."}
  ],
  pairs:[
    {kind:"synonym", a:"elaborate", b:"expand"},
    {kind:"synonym", a:"conclude", b:"infer"},
    {kind:"antonym", a:"introduction", b:"conclusion"},
    {kind:"antonym", a:"objective", b:"biased"},
    {kind:"antonym", a:"draft", b:"final copy"},
    {kind:"homophone", a:"passed", b:"past"},
    {kind:"homophone", a:"whether", b:"weather"},
    {kind:"homophone", a:"aloud", b:"allowed"}
  ],
  phonics:[
    {label:"Words with the suffix -ive", p:"-ive", words:["narrative","descriptive","persuasive","expressive"]},
    {label:"Words with the suffix -ity", p:"-ity", words:["clarity","objectivity","originality","credibility"]},
    {label:"Words with the prefix com- / con-", p:"con-", words:["compose","conclude","convince","construct"]},
    {label:"Words with the root -struct- (build)", p:"struct", words:["structure","construct","instruct","destruction"]}
  ],
  passage:{
    title:"The paragraph that would not work",
    text:"I spent three days on a single paragraph once, and I have never forgotten what it taught me. The assignment was an expository essay on the causes of soil erosion in our county. I had the material — I had walked the gullies myself and interviewed four farmers — but the third paragraph refused to come right. I wrote it eleven times. Each version was grammatical and each was dead.\n\nOn the third evening I saw the problem, and it was not a problem of language at all. I did not actually know which of the three causes I had listed was the most important. I had put them in the order I had discovered them, which is the order of my own experience and of no interest whatsoever to a reader. The paragraph would not organise itself because I had not decided anything.\n\nSo I went back to my notes and worked out, on the evidence I had, that the removal of tree cover came first and the others followed from it. Then the paragraph took nine minutes. What I learned is that most writing difficulties are not writing difficulties. When a sentence will not come, it is usually because the thought behind it is not finished. Language is not a covering that we put over an idea; it is the shape the idea takes when it is complete.",
    qs:[
      {q:"What was the assignment and what material did the writer already have?", a:"An expository essay on the causes of soil erosion in the county; he had walked the gullies himself and interviewed four farmers."},
      {q:"Why did the eleven versions all fail, despite being grammatical?", a:"Because the writer had not decided which cause was most important, so there was no principle organising the paragraph."},
      {q:"Why was the order of discovery useless to the reader?", a:"It reflected only the writer's own path through the material, which carries no meaning or logic for someone reading the finished essay."},
      {q:"What did he do to solve the problem, and how long did the paragraph then take?", a:"He returned to his notes and worked out from the evidence that loss of tree cover was the primary cause; the paragraph then took nine minutes."},
      {q:"Explain the sentence 'most writing difficulties are not writing difficulties'.", a:"A sentence usually resists being written because the underlying thought is still unclear or undecided, not because of any weakness in vocabulary or grammar."},
      {q:"Explain the metaphor in the final sentence.", a:"Language is not a wrapping placed over a ready-made idea; the words are the form the idea takes once the thinking is genuinely complete."},
      {q:"What kind of essay was the writer attempting, and what does that kind require?", a:"Expository — it explains and informs objectively, presenting causes supported by evidence rather than arguing a position."}
    ]
  },
  sight:["although","coherent","consequently","demonstrate","effective","furthermore","nevertheless","significant"],
  activities:[
    "Divide into groups of five to write expositions: essay, narrative, descriptive and persuasive",
    "Use the principal parts of a verb properly in given texts",
    "Group work evaluating different kinds of writing in the classroom",
    "Compose and deliver a public speech",
    "Draft, revise and produce a final copy of one essay"
  ],
  materials:[
    "Primary text: Gateway to English for Senior High Schools, Longman & Sedco, 2008",
    "Senior Secondary Guide English — Pearson",
    "Writing and Grammar: Communication in Action, Prentice Hall",
    "Longman Dictionary of Contemporary English, 5th edition",
    "Workbooks and model essays"
  ],
  assessment:["Quizzes","Essay portfolio","Speech delivery","Peer evaluation","Written test"]
},
{
  grade:12, period:"V", sem:"Two", icon:"🔁",
  title:"Review of Vocabulary, Phrases and Clauses",
  subtitle:"Context clues, spelling rules and a consolidation of phrase and clause structure",
  outcomes:[
    "Learners are able to apply improved context clues, revised spelling rules, and a firm grasp of phrases and clauses to construct stories, speeches and other documents"
  ],
  objectives:[
    "Demonstrate improved use of context clues in learning vocabulary",
    "Apply spelling rules with greater accuracy",
    "Review phrases and clauses and use them correctly",
    "Solicit feedback and apply corrective measures"
  ],
  note:"Four kinds of <b>context clue</b> help with an unknown word: a <b>definition</b> in the sentence, a <b>synonym</b> nearby, an <b>antonym</b> signalled by <i>but</i> or <i>unlike</i>, and an <b>example</b> introduced by <i>such as</i>. A sentence is <b>simple</b> (one independent clause), <b>compound</b> (two joined), <b>complex</b> (one independent and one dependent) or <b>compound-complex</b>.",
  focus:[
    "Review of vocabulary development",
    "Context clues: definition, synonym, antonym, example",
    "Review of spelling rules",
    "Review of phrases: prepositional, participial, gerund, infinitive, appositive",
    "Review of clauses: independent, dependent, noun, adjective, adverb",
    "Sentence types: simple, compound, complex, compound-complex"
  ],
  words:[
    {w:"context", s:"CON-tekst", d:"the words surrounding a term that help fix its meaning", x:"Use context to work out the word."},
    {w:"infer", s:"in-FUR", d:"to work out a meaning not directly stated", x:"Infer the meaning from the sentence."},
    {w:"simple sentence", s:"SIM-pul SEN-tens", d:"a sentence with one independent clause", x:"'The bell rang' is a simple sentence."},
    {w:"compound sentence", s:"COM-pownd SEN-tens", d:"two independent clauses joined", x:"'He called and she answered' is compound."},
    {w:"complex sentence", s:"COM-pleks SEN-tens", d:"one independent and one dependent clause", x:"'When he called, she answered' is complex."},
    {w:"compound-complex", s:"COM-pownd COM-pleks", d:"two independent clauses plus a dependent one", x:"A compound-complex sentence has three clauses."},
    {w:"relative pronoun", s:"REL-a-tiv PRO-nown", d:"who, whom, whose, which or that, introducing a clause", x:"'Who' introduces an adjective clause."},
    {w:"subordinate", s:"sub-OR-di-nat", d:"dependent on another clause", x:"A subordinate clause cannot stand alone."},
    {w:"antecedent", s:"an-teh-SEE-dent", d:"the noun a pronoun refers to", x:"Keep the antecedent clear."},
    {w:"parallel structure", s:"PA-ra-lel STRUK-cher", d:"using the same grammatical form for items in a list", x:"Parallel structure improves rhythm."},
    {w:"conciseness", s:"con-SISE-ness", d:"the quality of using no unnecessary words", x:"Aim for conciseness in revision."},
    {w:"clarity", s:"KLA-ri-tee", d:"the quality of being easily understood", x:"Clarity matters more than elegance."},
    {w:"proofreading", s:"PROOF-ree-ding", d:"final checking for errors", x:"Proofreading catches careless mistakes."},
    {w:"revision", s:"re-VIZH-un", d:"improving a draft in structure and expression", x:"Revision is where writing improves."}
  ],
  grammar:[
    {q:"Use the context clue to define 'frugal': 'Unlike his extravagant brother, Sando was frugal.'", a:"careful with money, thrifty", why:"'Unlike' signals an antonym clue against 'extravagant'."},
    {q:"Use the context clue to define 'arboreal': 'Arboreal animals, such as monkeys and squirrels, live in trees.'", a:"living in trees", why:"'Such as' introduces examples that reveal the meaning."},
    {q:"Classify: 'Although the rain fell, the match continued.'", a:"complex", why:"One dependent clause introduced by 'although' plus one independent clause."},
    {q:"Classify: 'The bell rang and the pupils left.'", a:"compound", why:"Two independent clauses joined by the coordinating conjunction 'and'."},
    {q:"Classify: 'When the bell rang the pupils left, and the hall fell silent.'", a:"compound-complex", why:"A dependent clause plus two independent clauses."},
    {q:"Identify the adjective clause: 'The book that she recommended is missing.'", a:"that she recommended", why:"It modifies the noun 'book' and begins with a relative pronoun."},
    {q:"Correct the parallel structure: 'She likes reading, to swim and cycling.'", a:"She likes reading, swimming and cycling.", why:"Items in a list must share the same grammatical form."},
    {q:"Apply the spelling rule: add '-ing' to 'begin' and '-ed' to 'occur'.", a:"beginning; occurred", why:"Double the final consonant after a short stressed vowel."},
    {q:"Identify the gerund phrase: 'Reading past papers improved his marks.'", a:"Reading past papers", why:"The -ing phrase functions as the subject, so it is a gerund phrase."},
    {q:"Correct the misplaced modifier: 'She served cake to the children on paper plates.'", a:"She served cake on paper plates to the children.", why:"The modifier must sit next to what it describes — the cake, not the children."},
    {q:"Identify the noun clause: 'Whoever finishes first may leave.'", a:"Whoever finishes first", why:"The clause functions as the subject of 'may leave'."},
    {q:"Use the context clue to define 'lucid': 'Her explanation was so lucid that even the youngest pupil understood.'", a:"clear and easy to understand", why:"The result clause explains the meaning through its effect."}
  ],
  pairs:[
    {kind:"synonym", a:"lucid", b:"clear"},
    {kind:"synonym", a:"frugal", b:"thrifty"},
    {kind:"antonym", a:"simple", b:"complex"},
    {kind:"antonym", a:"concise", b:"wordy"},
    {kind:"antonym", a:"independent", b:"subordinate"},
    {kind:"homophone", a:"clause", b:"claws"},
    {kind:"homophone", a:"phrase", b:"frays"},
    {kind:"homophone", a:"altar", b:"alter"}
  ],
  phonics:[
    {label:"Doubling rule before a vowel suffix", p:"double", words:["occurred","beginning","permitted","preferred"]},
    {label:"i before e except after c", p:"ie/ei", words:["believe","achieve","receive","deceive"]},
    {label:"Words with the suffix -ence", p:"-ence", words:["independence","coherence","preference","difference"]},
    {label:"Words with the suffix -ant / -ent", p:"-ant", words:["important","significant","different","excellent"]}
  ],
  passage:{
    title:"Marking my own work",
    text:"In my final year a teacher did something that changed how I write. She handed back an essay with no marks and no comments — only a note asking me to grade it myself, out of twenty, with reasons, and to return it the following day.\n\nI read it that evening expecting the exercise to be quick. It was not. Reading your own work as a stranger is a genuinely difficult act, and the first thing I discovered was how much of my meaning existed only in my head. Sentence after sentence made perfect sense to me because I knew what I had intended; read coldly, several of them could be understood two ways. I found a paragraph that began by discussing one thing and ended by discussing another, with no signal to the reader that we had moved. I found four sentences that said nothing at all and were there only because they sounded like the kind of thing an essay contains.\n\nI gave myself thirteen. She had given it fifteen, which she revealed afterwards, and she said the two marks did not matter. What mattered, she said, was that I would never again submit a piece of work without reading it once as somebody who had not written it. That habit has been worth more to me than any rule of grammar I was ever taught.",
    qs:[
      {q:"What unusual thing did the teacher do?", a:"She returned an essay with no marks or comments, asking the pupil to grade it himself out of twenty with reasons."},
      {q:"Why did the exercise take longer than expected?", a:"Because reading one's own work as a stranger is genuinely difficult — the writer keeps supplying meaning from memory rather than from the page."},
      {q:"List the three faults the writer discovered.", a:"Sentences that could be read two ways; a paragraph that changed subject without signalling it; and four sentences that said nothing and were included only because they sounded essay-like."},
      {q:"Explain 'how much of my meaning existed only in my head'.", a:"He understood his own sentences because he knew what he had intended, but that intention was never actually put on the page for a reader."},
      {q:"Why did the teacher say the two marks did not matter?", a:"Because the object was not the grade but the habit of self-review, which was worth far more than the difference between thirteen and fifteen."},
      {q:"Identify one complex sentence in the second paragraph.", a:"'Sentence after sentence made perfect sense to me because I knew what I had intended' — an independent clause with a dependent 'because' clause."},
      {q:"What single habit does the passage recommend, and why is it effective?", a:"Reading your work once as someone who did not write it. It exposes ambiguity, unsignalled shifts and empty sentences that the author cannot otherwise see."}
    ]
  },
  sight:["ambiguity","coherence","conciseness","consistency","emphasis","precision","structure","transition"],
  activities:[
    "Review and discuss vocabulary development through rehearsal exercises",
    "Group work soliciting feedback and providing corrective measures",
    "Review and discuss context clues and spelling rules",
    "Groups of five review and discuss phrases and clauses",
    "Classify sentences as simple, compound, complex or compound-complex"
  ],
  materials:[
    "Primary text: Gateway to English for Senior High Schools, Longman & Sedco, 2008",
    "Senior Secondary Guide English — Pearson",
    "Longman Dictionary of Contemporary English, 5th edition",
    "Workbooks and spelling lists",
    "Past WASSCE papers"
  ],
  assessment:["Quizzes","Spelling and vocabulary tests","Sentence analysis exercise","Peer review","Written test"]
},
{
  grade:12, period:"VI", sem:"Two", icon:"🎓",
  title:"WASSCE Review and Examination Technique",
  subtitle:"Consolidating the whole course through past papers and examination practice",
  outcomes:[
    "Learners are able to respond correctly to questions in past WASSCE papers and to pass future examinations successfully"
  ],
  objectives:[
    "Provide correct responses to past WASSCE papers",
    "Review the grammar of the whole course systematically",
    "Practise examination technique under timed conditions",
    "Rehearse continuously with past papers to build confidence"
  ],
  note:"Work systematically through the paper. Read the <b>rubric</b> first and note how many questions are compulsory. <b>Allocate time by the marks</b>: a 20-mark essay deserves four times the minutes of a 5-mark question. Attempt every required question — an unanswered question scores <b>zero</b>, while even a partial answer earns something. Leave five minutes at the end to proofread.",
  focus:[
    "Review of nouns, pronouns and their cases",
    "Review of verbs, tenses and voice",
    "Review of adjectives, adverbs, prepositions and conjunctions",
    "Review of phrases, clauses and sentence types",
    "Review of vocabulary, spelling and common errors",
    "Comprehension and summary technique",
    "Essay and letter writing under timed conditions",
    "Examination strategy and time management"
  ],
  words:[
    {w:"rubric", s:"ROO-brik", d:"the instructions at the head of an examination paper", x:"Read the rubric before you begin."},
    {w:"compulsory", s:"com-PUL-so-ree", d:"required, not optional", x:"Section A is compulsory."},
    {w:"allocation", s:"al-o-KAY-shun", d:"the distribution of marks or time", x:"Check the mark allocation."},
    {w:"command word", s:"co-MAND wurd", d:"the instruction word telling you what to do", x:"'Summarise' is a command word."},
    {w:"legibility", s:"lej-i-BIL-i-tee", d:"the quality of being readable", x:"Legibility affects the examiner's patience."},
    {w:"paraphrase", s:"PA-ra-frayz", d:"to restate in your own words", x:"A summary must paraphrase, not copy."},
    {w:"verbatim", s:"ver-BAY-tim", d:"word for word", x:"Do not lift sentences verbatim in a summary."},
    {w:"register", s:"REJ-is-ter", d:"the level of formality of language", x:"A letter to a minister needs a formal register."},
    {w:"lexis", s:"LEK-sis", d:"the vocabulary of a language", x:"The lexis question tests word knowledge."},
    {w:"comprehension", s:"com-pre-HEN-shun", d:"understanding of a text", x:"Answer comprehension in complete sentences."},
    {w:"inference", s:"IN-fer-ens", d:"a conclusion drawn from evidence", x:"Some questions require inference."},
    {w:"revise", s:"re-VYZ", d:"to go over work in preparation", x:"Revise with past papers, not by rereading notes."},
    {w:"strategy", s:"STRAT-e-jee", d:"a plan for achieving a goal", x:"An examination strategy saves marks."},
    {w:"proofread", s:"PROOF-reed", d:"to check written work for errors", x:"Always leave time to proofread."}
  ],
  grammar:[
    {q:"Choose correctly: 'Neither the principal nor the teachers (was / were) informed.'", a:"were", why:"With 'neither… nor' the verb agrees with the nearer subject, 'teachers'."},
    {q:"Correct the error: 'He is one of the pupils who has passed.'", a:"He is one of the pupils who have passed.", why:"'Who' refers to 'pupils', which is plural."},
    {q:"Choose correctly: 'The committee (has / have) reached its decision.'", a:"has", why:"Treated as one body, the collective noun takes a singular verb and 'its'."},
    {q:"Correct the error: 'The teacher gave the books to my brother and I.'", a:"…to my brother and me.", why:"After the preposition 'to' the objective case is required."},
    {q:"Correct the dangling modifier: 'Having failed the test, the teacher called his parents.'", a:"Having failed the test, the boy had his parents called by the teacher.", why:"As written, the participial phrase says the teacher failed the test."},
    {q:"Choose correctly: 'If I (was / were) the principal, I would extend the library hours.'", a:"were", why:"The subjunctive is used for a hypothetical condition contrary to fact."},
    {q:"Correct the error: 'The amount of pupils has increased.'", a:"The number of pupils has increased.", why:"'Number' is used with countable nouns, 'amount' with uncountable."},
    {q:"Punctuate: 'however the results were delayed'", a:"However, the results were delayed.", why:"An introductory conjunctive adverb is followed by a comma."},
    {q:"Correct the error: 'She don't have no money.'", a:"She doesn't have any money.", why:"A double negative is non-standard, and the third person singular needs 'doesn't'."},
    {q:"Rewrite in reported speech: 'I will submit it tomorrow,' she said.", a:"She said that she would submit it the following day.", why:"Reported speech shifts the tense back and adjusts time references."},
    {q:"Correct the error: 'Between the two candidates, he is the best.'", a:"Between the two candidates, he is the better.", why:"The comparative is used when only two are compared."},
    {q:"Give the plural of 'crisis', 'phenomenon' and 'analysis'.", a:"crises, phenomena, analyses", why:"These retain their Greek and Latin plural forms."}
  ],
  pairs:[
    {kind:"synonym", a:"summarise", b:"paraphrase"},
    {kind:"synonym", a:"revise", b:"review"},
    {kind:"antonym", a:"compulsory", b:"optional"},
    {kind:"antonym", a:"formal", b:"colloquial"},
    {kind:"antonym", a:"accurate", b:"erroneous"},
    {kind:"homophone", a:"passed", b:"past"},
    {kind:"homophone", a:"cite", b:"site"},
    {kind:"homophone", a:"course", b:"coarse"}
  ],
  phonics:[
    {label:"Irregular plurals from Latin and Greek", p:"plural", words:["crises","phenomena","analyses","criteria"]},
    {label:"Examination command words", p:"command", words:["discuss","evaluate","summarise","illustrate"]},
    {label:"Commonly misspelled in examinations", p:"spelling", words:["definitely","separate","necessary","occurred"]},
    {label:"Formal connectives", p:"connect", words:["consequently","furthermore","nevertheless","accordingly"]}
  ],
  passage:{
    title:"The last hour",
    text:"There is a particular kind of failure that happens in the final hour of an examination, and it has nothing to do with what the candidate knows. I have watched it from the front of the hall for many years and its signs are always the same.\n\nA candidate begins strongly. He gives the first question everything he has, because it is the one he was hoping for, and he writes for fifty minutes on a question worth ten marks. By the time he reaches the essay he has an hour left instead of the ninety minutes he needed, and he writes it fast and badly. Then, with twelve minutes remaining, he discovers a compulsory question on the last page that he has not attempted at all. He answers it in a panic in seven lines. That paper contains a great deal of correct knowledge and it will not pass well, and when the result comes he will believe he did not know enough.\n\nThe cure is a pencil and two minutes at the start. Before writing anything, divide the total minutes by the total marks. Write the finishing time for each question beside its number in the margin. Then obey those times even in the middle of a sentence, because a question left at seven marks out of ten costs you three, while a question never begun costs you all twenty. The discipline feels brutal the first time. It is the single cheapest way to raise a grade that I know.",
    qs:[
      {q:"What kind of failure does the writer describe, and what is its cause?", a:"Failure in the final hour caused not by lack of knowledge but by poor allocation of time across the paper."},
      {q:"Trace the sequence of the candidate's mistakes.", a:"He spends fifty minutes on a ten-mark question, reaches the essay with only an hour instead of ninety minutes, writes it badly, then finds an unattempted compulsory question with twelve minutes left and answers it in seven lines."},
      {q:"Why will the candidate misdiagnose his own result?", a:"He will assume he did not know enough, when the real cause was the mismanagement of time."},
      {q:"State the remedy in your own words.", a:"Before writing, divide the available minutes by the total marks, write a finishing time beside each question in the margin, and keep to those times strictly."},
      {q:"Explain the arithmetic in 'a question left at seven marks out of ten costs you three, while a question never begun costs you all twenty.'", a:"Abandoning a partly finished answer loses only the remaining marks, but an unattempted question loses every mark available — so moving on always costs less than overrunning."},
      {q:"Why does the writer admit the discipline 'feels brutal the first time'?", a:"Because stopping mid-sentence on a question you could still improve goes against instinct, even though it protects far more marks elsewhere."},
      {q:"Identify the sentence type: 'A candidate begins strongly.'", a:"Simple — one independent clause."}
    ]
  },
  sight:["compulsory","criteria","evaluate","hypothesis","interpret","justify","phenomena","summarise"],
  activities:[
    "Divide into groups to review and discuss past WASSCE papers",
    "Continuous rehearsal of past WASSCE papers to build confidence",
    "Practise comprehension and summary under timed conditions",
    "Write essays and letters to time and mark them against the scheme",
    "Peer marking of past paper answers against the official mark scheme"
  ],
  materials:[
    "Primary text: Gateway to English for Senior High Schools, Longman & Sedco, 2008",
    "Past WASSCE English papers and mark schemes",
    "Senior Secondary Guide English — Pearson",
    "Longman Dictionary of Contemporary English, 5th edition",
    "Workbooks and timed practice papers"
  ],
  assessment:["Quizzes","Timed past paper practice","Peer marking","Oral presentations","Written examination"]
}

];
