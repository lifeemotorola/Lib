/* Curriculum data — Republic of Liberia, SENIOR HIGH ENGLISH GRAMMAR, Grades 10–12.
   Derived from the "English Grammar 10-12" senior high curriculum guide (37 pp.),
   6 periods per grade, 18 units.

   Every unit carries a `study[]` block list — the course text of the guide,
   rendered verbatim on the Study Notes page, with a comment noting the guide
   pages covered. `**bold**` marks the key terms; table cells take no markup
   because the renderer escapes them.

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
  study:[
    /* ---- course text: Semester One, Period I — Nouns and Pronouns (guide pp. 2-3) ---- */
    {k:"h3", t:"Nouns and their Kinds"},
    {k:"p", t:"A **noun** is a word that names a person, place, thing or idea. The kinds: a **common noun** names any member of a class (market, river, teacher); a **proper noun** names a particular one and takes a capital letter (Monrovia, Liberia, Musu). A **concrete noun** can be seen or touched (book, mango); an **abstract noun** names an idea or quality (honesty, freedom, fear). Nouns are **singular** or **plural** — one child, two children; one box, six boxes — and irregular plurals must be learned one by one. A **compound noun** is made of two or more words (classroom, mother-in-law); a **collective noun** names a group taken as one (team, choir, flock). Nouns are **countable** (three oranges) or **uncountable** (rice, water, information) — and uncountable nouns take no plural and no 'a'. List the different kinds of nouns in a given piece of work."},
    {k:"rule"},
    {k:"h3", t:"Pronouns and their Antecedents"},
    {k:"p", t:"A **pronoun** stands in place of a noun, and the noun it replaces is its **antecedent**. The kinds: **personal pronouns** — I, you, he, she, it, we, they, with their object and possessive forms; **possessive pronouns** — mine, yours, hers, ours, theirs; **indefinite pronouns** — someone, anybody, each, all, none; **demonstrative pronouns** — this, that, these, those; and **interrogative pronouns** — who, whom, whose, which, what. A pronoun must agree with its antecedent in number, gender and person: 'Kollie lost his pen', not 'their pen'."},
    {k:"p", t:"Two harder cases: a pronoun may stand for an **entire group of words** — 'He promised to come early, which surprised us' — and sometimes the **antecedent follows the pronoun** — 'Although she was tired, Musu kept on digging.' Identify the antecedent in every sentence you meet, and construct sentences of your own using nouns and pronouns correctly in speech and writing."},
    {k:"rule"},
    {k:"h3", t:"Narration: Autobiographical Writing"},
    {k:"p", t:"**Autobiographical writing** tells the story of your own life, in the first person, in time order: where and when you were born, your family, the schools you attended, the events that shaped you, and your hopes. Select the important events rather than everything; use the past tense for what happened and the present for what continues; and let your own voice be heard. Write yours, then read it aloud to the class."},
    {k:"rule"},
    {k:"h3", t:"Narration: The Short Story"},
    {k:"p", t:"A **short story** is a brief imagined narration with a beginning that sets the scene and the people, a middle in which a problem rises to a turning point, and an end that resolves it. Keep the cast small, the time short, the setting clear; use dialogue to bring the characters alive; and give the story a title that fits. Write a short story set in your own community."},
    {k:"rule"},
    {k:"h3", t:"Vocabulary Development and Study Skills"},
    {k:"p", t:"Take at least **ten words every week**: learn their spellings and their meanings, and use each in a sentence of your own. Review **study skills and note taking** — listening for the main idea, writing notes in your own words, arranging them under headings, and reviewing them the same day. A growing vocabulary and good notes carry every other subject."},
    {k:"h3", t:"How Nouns Form the Plural"},
    {k:"p", t:"Plurals are a favourite first question on every WASSCE paper because they mix one easy rule with a dozen honest exceptions. The machinery: add **-s** to most nouns (market, markets); add **-es** after s, x, z, ch or sh (box, boxes; church, churches); change **y to -ies** after a consonant (baby, babies) but simply add -s after a vowel (day, days); change **f or fe to -ves** (knife, knives; leaf, leaves); change the **vowel inside** the word (man, men; foot, feet; tooth, teeth); add **-en** in the oldest pattern (ox, oxen; child, children); keep the **same form** for sheep, deer, fish and series; and remember that some nouns are only ever plural (scissors, trousers, cattle, thanks) while others have no plural at all (information, rice, homework, news)."},
    {k:"table", head:["Type","Singular","Plural","The point to state"], rows:[
      ["Regular (add -s)","the pupil","the pupils","the general rule"],
      ["-es after a hiss sound","the box, the church","the boxes, the churches","spelling, not sound, decides"],
      ["-y to -ies","the baby, the city","the babies, the cities","consonant before y"],
      ["f/fe to -ves","the leaf, the knife","the leaves, the knives","half-halves, life-lives too"],
      ["Vowel change","man, woman, foot, tooth","men, women, feet, teeth","must be memorised"],
      ["-en plural","ox, child","oxen, children","old English endings"],
      ["Unchanged","sheep, deer, fish","sheep, deer, fish","one and many, same word"],
      ["Plural only","scissors, trousers","—","a pair of scissors is correct"],
      ["Singular only","information, news, rice","—","no plural, no 'an' before plural verb"]
    ]},
    {k:"h3", t:"Gender in Nouns"},
    {k:"p", t:"Nouns show **gender** in four ways. **Masculine**: man, father, he-goat, actor, prince. **Feminine**: woman, mother, she-goat, actress, princess, lioness. **Common gender** names either sex: cousin, friend, teacher, doctor, baby, neighbour, child — 'My cousin passed her exam' shows a cousin that may now be a woman. **Neuter gender** names things without life or sex: stone, mango, table, Monrovia. Most trade and job words that once had a feminine form (authoress, editress, stewardess) have faded from use — **doctor, engineer and driver are common gender now** — and that is the modern, correct usage an essay may note."},
    {k:"h3", t:"The Cases — and the Personal Pronoun Table"},
    {k:"p", t:"A noun or pronoun has a **case**: the **nominative** for the subject or the complement after a linking verb (**Kollie** bought rice; it is **I**); the **possessive** (genitive) for ownership (Kollie **'s** pen, the market **'s** roof); and the **objective** for the receiver of the action or of a preposition (the teacher praised **Kollie**; between you and **me**)."},
    {k:"table", head:["Person","Subject (nominative)","Object (objective)","Possessive adjective","Possessive pronoun","Reflexive"], rows:[
      ["1st singular","I","me","my","mine","myself"],
      ["2nd singular","you","you","your","yours","yourself"],
      ["3rd singular masculine","he","him","his","his","himself"],
      ["3rd singular feminine","she","her","her","hers","herself"],
      ["3rd singular neuter","it","it","its","its","itself"],
      ["1st plural","we","us","our","ours","ourselves"],
      ["2nd plural","you","you","your","yours","yourselves"],
      ["3rd plural","they","them","their","theirs","themselves"]
    ]},
    {k:"h3", t:"Three Tests before You Choose a Pronoun"},
    {k:"num", items:[
      "**Count the antecedent.** Everyone, each, either, neither, anybody and nobody are SINGULAR: 'Everyone must bring HIS OR HER book' — or recast the sentence plural: 'All must bring their books.'",
      "**Ask what the pronoun does in its own clause.** Subject of a verb takes the nominative (He and I went); object of a verb or preposition takes the objective (between you and ME; she gave it to us).",
      "**Match the gender.** A pronoun takes the sex of its antecedent: Musu ... her; the dog ... its; the class ... its as a unit, their as the members — say which sense you mean."
    ]},
    {k:"table", head:["The common error","The correct form","The reason"], rows:[
      ["Between you and I","between you and me","after a preposition use the objective case"],
      ["Him and I carried the bag","He and I carried the bag","subjects of the verb take the nominative"],
      ["Everyone gave their best","Everyone gave his or her best","singular antecedent, singular pronoun (or recast in the plural)"],
      ["Each of the girls were seated","each of the girls was seated","the subject is 'each', not 'girls'"],
      ["Musu lost their pen","Musu lost her pen","a singular feminine antecedent takes 'her'"],
      ["This book is her's","this book is hers","possessive pronouns take no apostrophe"],
      ["The children's toys are in the yard","(correct as it stands)","an irregular plural takes 's after the -ren"]
    ]},
    {k:"h3", t:"The Possessive Apostrophe in Full"},
    {k:"bul", items:[
      "**Singular noun, even one ending in s: add 's** — Kollie's machete, the boss's car, Moses' or Moses's (both used; be consistent).",
      "**Regular plural already ending in s: add the apostrophe only** — the pupils' exercise books, the teachers' lounge.",
      "**Irregular plural: add 's** — children's rights, women's league, the people's choice.",
      "**Joint possession: one apostrophe at the end** — Kollie and Musu's father (one father). **Separate: both take it** — Kollie's and Musu's fathers (two fathers).",
      "**Time and measure nouns take it too** — a day's journey, two weeks' pay, an hour's rest.",
      "**Its is possessive; it's = it is.** 'The dog wagged its tail' — no apostrophe, because possessive pronouns (its, hers, yours, ours, theirs) NEVER carry one.",
      "**Do not put apostrophes in ordinary plurals** — the 1990s, dos and don'ts, but mind your p's and q's."
    ]},
    {k:"h3", t:"Countable and Uncountable — Quantifiers That Must Match"},
    {k:"table", head:["Use with countable nouns","Use with uncountable nouns","Worked both ways"], rows:[
      ["many books, few oranges, a few girls","much rice, little water, a little time","many/much, few/little"],
      ["several students, a number of bags","a great deal of sugar, a bit of luck","number vs amount"],
      ["three bags of rice (count the bags!)","a piece of advice, a grain of sand","a piece/sack/cup of + noun"],
      ["five cartons of soda","the news IS good; information IS useful","uncountable takes the singular verb"]
    ]},
    {k:"p", t:"Words that look plural but are uncountable, and so take a **singular verb** — news, summons, gallows — together with the usual troublemakers (advice, information, knowledge, furniture, luggage, baggage, money, traffic, weather, research) — are worth ten minutes of drilling every day: the mark for 'The news IS on at six' is as easy to gain and as easy to lose as any in the paper."},
    {k:"h3", t:"Drafting the Autobiographical Narrative, Step by Step"},
    {k:"num", items:[
      "Choose two or three events that truly shaped you — not your whole life from birth: a move to town, a loss, a victory, the day you first earned money.",
      "List them in TIME ORDER on one line each; this outline is your paragraph plan.",
      "Open by placing yourself: who you are and where, in one or two sentences, present tense for what continues, past for what happened.",
      "Tell each event in its own paragraph, with one line of dialogue where it brings the scene alive; keep your pronouns straight — I did it, Mother and I, not Me and Mother.",
      "Close with what the events made you, and your hope: the reflection is what lifts a narrative from a list to a story.",
      "Read it aloud to the class; mark every place the tense jumps without a reason, then repair it."
    ]},
    {k:"h3", t:"The Short Story Toolkit"},
    {k:"bul", items:[
      "**Plot** — the chain of events: beginning (scene and cast), middle (a problem that rises), turning point, end (a resolution that the reader can see was possible).",
      "**Characters** — keep the cast to three or four; reveal each by speech, action and the small chosen detail, never by a list of adjectives.",
      "**Setting** — one place, drawn with two or three senses; a market at dawn, a classroom in the dry season.",
      "**Conflict** — the engine: person against person, against nature, against herself; a story without a problem is an anecdote.",
      "**Theme** — what the story means underneath: honesty, courage, gratitude; never named, always shown.",
      "**Dialogue** — each line spoken must either push the plot or reveal a character; use it to bring the people alive.",
      "**Title** — short, fitted, earned by the story; give the title last."
    ]},
    {k:"h3", t:"Word Building for This Period: Turning Anything into a Noun"},
    {k:"p", t:"English makes nouns out of almost everything by **suffix**: kind → kind**ness**, free → free**dom** (adjective + -ness/-dom); govern → govern**ment**, pay → pay**ment** (verb + -ment); educate → educa**tion** (verb + -tion); friend → friend**ship** (noun + -ship); act**or**, invent**or** (agent nouns); hope**less** turns too. The suffix changes the **part of speech**, so the new word fills a slot in the sentence exactly as a noun: 'The **happiness** of the class was visible.' Learn each new word with the family it belongs to — decide / decision / decisive — and your vocabulary grows by roots, not by singles."},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Identify and classify** — underline the proper nouns, name the kind of each noun in a given sentence (common, collective, abstract, compound); a classed list scores full marks only when the heading matches the word",
      "**Supply the pronoun** — a gap filled with the form that agrees in number, gender and person with the antecedent; state the antecedent if the question asks",
      "**Correct the error** — 'Between you and I', 'Everyone with their book', 'Each of the girls were': spot, recast, and be ready to say why",
      "**The apostrophe** — rewrite with the possessive (the bag of the girl → the girl's bag); know its/it's and hers without an apostrophe",
      "**Uncountable nouns** — 'a piece of advice', 'The news is good'; never 'an information' nor 'advices'",
      "**The composition** — autobiographical narrative or short story on the given topic: keep time order in the first, plot and dialogue in the second, and answer the instruction exactly"
    ]}

  ],

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
  study:[
    /* ---- course text: Semester One, Period II — Verbs, Part 1 (guide pp. 4-5) ---- */
    {k:"h3", t:"Action Verbs: Visible and Mental"},
    {k:"p", t:"A **verb** is the doing or being word of the sentence. An **action verb** shows what the subject does, and the action may be **visible** — run, carry, sweep, throw — or **mental**, performed in the mind — know, believe, remember, decide, love. Point out the action words in a passage and say whether each is visible or mental."},
    {k:"rule"},
    {k:"h3", t:"Transitive and Intransitive Verbs"},
    {k:"p", t:"A **transitive verb** passes its action to an **object** that receives it: 'The farmer **planted** maize' — maize receives the planting. An **intransitive verb** takes no object: 'The baby **slept**.' Many verbs do both: 'She sings' (intransitive) and 'She sings a song' (transitive). Identify the transitive verbs in sentences and the objects that receive the action; note that intransitive verbs do not take one."},
    {k:"rule"},
    {k:"h3", t:"Linking Verbs"},
    {k:"p", t:"A **linking verb** does not show action; it links the subject to a word that renames or describes it. The chief linking verb is **be** — am, is, are, was, were — with **become, seem, appear, feel, taste, smell, grow, look**: 'The soup tastes salty'; 'He became a teacher.' After a linking verb comes a **complement**, not an object."},
    {k:"rule"},
    {k:"h3", t:"Helping Verbs and Modal Auxiliaries"},
    {k:"p", t:"A **helping (auxiliary) verb** stands before the main verb and helps mark its tense or voice — be, do, have: 'She **is coming**', 'They **have finished**', '**Do** you agree?' Distinguish the main verb from the helping verb in passages. A **modal auxiliary** adds ideas such as ability, permission, possibility and obligation — **can, could, may, might, shall, should, will, would, must, ought to**: 'You must wash your hands.' Modals never change their form and are followed by the base verb."},
    {k:"rule"},
    {k:"h3", t:"The Tenses and Progressive Forms"},
    {k:"p", t:"The **present tense** tells of now or of what is always true ('Water boils at 100 degrees'); the **past tense** of what is finished ('We visited Gbarnga last year'); the **future tense** of what is to come, with shall or will ('It will rain tomorrow'). Each tense has a **progressive form** with be + the -ing form, for an action in progress — 'I am writing', 'She was cooking', 'They will be travelling.' Construct sentences in the three tenses, then in their progressive forms."},
    {k:"rule"},
    {k:"h3", t:"Descriptive and Narrative Writing"},
    {k:"p", t:"Go through the writing process — prewrite, draft, revise, edit, publish — and develop given topics into **descriptive writing**, which paints a person, place or thing with details the senses can see, hear, smell, taste and touch; and into **narrative writing**, which tells events in time order with a clear beginning, middle and end."},
    {k:"h3", t:"Main Verb or Helping Verb — the Two Tests"},
    {k:"p", t:"A **main verb** can carry the sentence alone; a **helping (auxiliary) verb** only serves it. Test one: **does it take the -ed or -s of the past and the third person?** 'She **walks**' passes, so walks is the main verb. **Can the word be thrown into a question by borrowing do?** 'Do you **like** it?' passes — like is main; but you cannot say 'Do you are tired?', so **am, is, are, was, were** at work are helpers. Every verb helps with something particular: **be** (am, is, are, was, were) builds the progressive and the passive voice; **have, has, had** build the perfect tenses; **do, does, did** build questions, negatives and emphasis ('I DID finish'). The seven **modal auxiliaries** — can, could, may, might, must, shall, should, will, would — are helpers that take the bare infinitive after them: no -s, no -ing, no 'to': 'She must go', never 'must goes' nor 'must to go'."},
    {k:"h3", t:"Visible, Mental and Linking — Three Kinds of Main Verb"},
    {k:"bul", items:[
      "**Visible (physical) action** can be seen: run, carry, pound, boil, cut, dance. In the composition 'the woman pounded cassava', the pounding is a visible act.",
      "**Mental action** cannot be seen but is still done: think, believe, remember, decide, love, hate, know, understand, suppose, wish, refuse, prefer. 'Kollie decided to stay' reports an act of the mind, not a verb of being.",
      "**Linking (copular) verbs** join the subject to a word that describes or renames it: be, become, seem, appear, look, feel, taste, smell, sound, grow, turn, remain, prove. Test: replace with **is/are** and the sentence still makes sense — 'The soup tastes salty' → 'The soup is salty', so tastes links; 'She tasted the soup' → 'She is the soup' fails, so tasted acts.",
      "A linking verb is followed by an **adjective or a noun complement, never an adverb**: 'She looks well' means healthy; 'She looks badly' would describe her sight, and no examiner means that."
    ]},
    {k:"table", head:["Modal","It expresses","Example","The common slip"], rows:[
      ["can / could","ability, permission, possibility","Musu can pound fufu; Could I borrow your pen?","'can' is never followed by 'to'"],
      ["may / might","permission, weak possibility","May I go home? It might rain by evening.","might for the past: 'He said he might come'"],
      ["must","necessity, strong deduction","You must submit the project Friday; that must be the chief.","'must to' is wrong — must go"],
      ["should / ought to","duty, advice","We should help the old; you ought to greet your elders.","ought is the only one that takes 'to'"],
      ["will / would","future, willingness, polite request, habit","I will try; Would you pass the salt? They would sit for hours talking.","would for past habit: 'Every harmattan we would light a fire'"],
      ["shall","offer, suggestion (formal)","Shall I carry it? We shall overcome.","'shall' with I/we in questions"],
      ["need / dare","necessity, courage (semi-modal)","Need he come? She dared to enter.","in the negative: 'He need not come'"]
    ]},
    {k:"h3", t:"Transitive and Intransitive — Object or No Object"},
    {k:"p", t:"A **transitive verb** passes its action to an **object**: 'Kollie cut **the stick**.' An **intransitive verb** stops with the verb or an adverb: 'The baby **slept** quietly.' Find the object by asking **whom or what after the verb**: cut *what*? the stick — transitive. Sleep *what*? nothing — intransitive. The same verb may change its coat: 'She runs the shop' (transitive) against 'She runs fast' (intransitive); 'The bell rang' (intransitive) against 'He rang the bell' (transitive). Verbs that never take an object include come, go, sleep, arrive, fall, die, laugh, weep, shine and sit; verbs that almost always do include bring, buy, carry, cut, fetch, find, hold, lose, make, owe, pay, put, sell and take. **Give and the verbs of asking take two objects** — 'Father gave **us** (indirect) **money** (direct)' — and both survive in the passive: 'We were given money; money was given to us.'"},
    {k:"h3", t:"Tenses of Period II — Forms and Signal Words"},
    {k:"table", head:["Tense","How it is built","What it says","Signal words","Example"], rows:[
      ["Present simple","base form, +s with he/she/it","habit, general truth, state","always, every day, never","Rice grows in the rainy season"],
      ["Past simple","the past form (or -ed)","finished action","yesterday, last week, in 2019","We visited Grand Bassa last term"],
      ["Future simple","will/shall + base","what is to come","tomorrow, soon, next year","She will sit the WASSCE next June"],
      ["Present progressive","am/is/are + -ing","in progress now; planned near future","now, at present, still","The crowd is cheering"],
      ["Past progressive","was/were + -ing","was in progress when…","while, when, at six yesterday","I was walking when it began to rain"],
      ["Future progressive","will be + -ing","will be in progress at…","at eight tomorrow","At eight they will be writing the test"]
    ]},
    {k:"p", t:"**Stative verbs take no progressive.** Verbs of the mind and the senses — know, believe, remember, decide, love, hate, own, seem, understand, want — are states, not activities: write 'I **know** the road', never 'I am knowing the road'; 'She **loves** cassava leaf', never 'is loving'. Verbs of the senses allow the contrast to carry meaning: 'The soup **tastes** salty' (state) against 'the cook **is tasting** the soup' (act)."},
    {k:"h3", t:"Subject–Verb Agreement — the Six Laws"},
    {k:"num", items:[
      "**A singular subject takes a singular verb; a plural subject a plural.** The boy runs; the boys run. Ignore anything that stands between: 'The box of mangoes IS heavy' — the subject is box.",
      "**Subjects joined by AND are plural** — 'Kollie and Musu ARE friends'; but one idea takes the singular: 'Bread and butter IS his breakfast'; 'Slow and steady WINS the race.'",
      "**With OR, NOR, either…or, neither…nor, not only…but also, the verb agrees with the nearer subject** — 'Neither the driver nor the PASSENGERS WERE hurt'; 'Not only the boys but also the TEACHER WAS late.'",
      "**Each, every, either, neither, one, everyone, nobody take the singular** — 'Each of the girls HAS a book.' But 'the number' is singular and 'a number' plural: 'The NUMBER of pupils is falling; A NUMBER of pupils are absent.'",
      "**Collective nouns** (team, class, crowd, committee, family, jury, government) take the singular as a unit — 'The team IS winning' — and the plural when the members act apart — 'The team ARE arguing among themselves.'",
      "**Money, distance, time and weight as amounts are singular** — 'Ten thousand dollars IS a great sum'; 'Fifty miles IS a long way'; and nouns plural in form but singular in sense — news, measles, mumps, physics, mathematics, politics, the gallows — 'The news IS on at six.'"
    ]},
    {k:"p", t:"One more examiner's trap: the verb **to be** in the past is 'was/were', and after there it agrees with what follows — '**There ARE** three boys' but '**There IS** one girl left'; '**It is I**' formally, though 'it is me' rules in speech; and a question flips subject and verb, so 'Does he know?' never 'Do he know?' Keep the **present perfect** for unfinished time: 'I HAVE lived here for five years' (still do) against 'I LIVED there in 2015' (done and gone)."},
    {k:"h3", t:"Verbs That Carry Your Narrative"},
    {k:"bul", items:[
      "Choose the **strong verb over the adverb-leaned-on**: trudged, not walked slowly; whispered, not said quietly; gaped, not looked widely — two words become one and the line hardens.",
      "Vary your openings: a sentence beginning with the adverb ('Into the yard walked the goat') or the -ing form ('Pounding the cassava, Ma sang') lifts the paragraph out of subject-verb-object monotony.",
      "Hold the **tense of the narrative** — usually past — and shift only where the story truly moves: 'We WERE walking when the rain BEGAN; we HAVE never been so wet.'",
      "Match the verb to the register: a formal essay does not 'kick off' — it 'begins'; a story may.",
      "Read one paragraph aloud hunting **s-v agreement slips** — every, each, news, the number — and repair before you copy the fair draft."
    ]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Label the verb** — in a given sentence, say whether it is an action, linking or helping verb; a transitive or intransitive action verb",
      "**Find the object** — underline the direct object; say which verb has none",
      "**Supply the right form** — 'Each of the pupils (has/have) a book': the mark is for the rule, not a guess",
      "**Rebuild the tense** — change a passage from the present to the past without leaving any verb behind",
      "**The progressive** — rewrite with be + -ing at a given time; know the stative verbs that refuse it",
      "**Modals** — replace must/should/can as directed; follow each with the bare infinitive",
      "**One paragraph of description or narration** — vivid verb, steady tense, and no agreement errors"
    ]}

  ],

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
  study:[
    /* ---- course text: Semester One, Period III — Verbs, Part 2 (guide pp. 6-7) ---- */
    {k:"h3", t:"The Perfect Tenses"},
    {k:"p", t:"The perfect tenses use **have, has, had, will have** with the **past participle**. The **present perfect** — 'I **have finished** my work' — joins the past to the present, for an action completed not long ago or one whose effect remains. The **past perfect** — 'The bus **had left** before we arrived' — is the past before the past, the earlier of two past events. The **future perfect** — 'By Friday we **will have written** the test' — looks forward to an action that will be completed by a stated time. Explain each perfect tense, then construct sentences using them correctly."},
    {k:"rule"},
    {k:"h3", t:"Regular Verbs"},
    {k:"p", t:"A **regular verb** forms its past tense and past participle by adding **-d** or **-ed** to the base: start, started, has started; cook, cooked, has cooked; carry, carried, has carried. Where the base ends in a consonant + y, the y becomes -ied; where it ends in e, only -d is added. List regular verbs and discuss how their past tense is formed."},
    {k:"rule"},
    {k:"h3", t:"Irregular Verbs"},
    {k:"p", t:"An **irregular verb** forms its past tense and past participle by a change inside the word, not by -ed: go, went, gone; see, saw, seen; take, took, taken; eat, ate, eaten; write, wrote, written; buy, bought, bought; cut, cut, cut. There is no rule — each must be learned by heart in its three parts. List irregular verbs, discuss how their past tenses are formed, and construct sentences using regular and irregular verbs in their present and past tenses."},
    {k:"rule"},
    {k:"h3", t:"Comparative and Superlative Forms"},
    {k:"p", t:"Adjectives and adverbs compare in three degrees. For most short words add **-er** and **-est** — tall, taller, tallest; for longer words use **more** and **most** — beautiful, more beautiful, most beautiful. Some change wholly: good, better, best; bad, worse, worst; little, less, least; many, more, most. Never put the two methods together — not 'more taller'. Use the forms correctly in your sentences."},
    {k:"rule"},
    {k:"h3", t:"Persuasion: the Persuasive Essay"},
    {k:"p", t:"A **persuasive essay** seeks to convince the reader to accept a position or act. Its parts: a clear **position** stated early; **reasons** in support, each developed with evidence or example; **answers to the other side**; and a strong **call to action** at the close. Choose an issue that matters to your community, write persuasively using the relevant mechanics — capital letters, punctuation, spelling — and discuss the issues involved for presentation to the class."},
    {k:"h3", t:"The Perfect Tenses — Built on have + Past Participle"},
    {k:"p", t:"Every perfect tense says **completed before**, and every one is built the same way: a form of **have** plus the **past participle**. **Present perfect** (has/have + participle) ties the past to now — 'I **have finished** my work' (it stands finished now); 'Musu **has lived** in Harper for eight years' (she still does). **Past perfect** (had + participle) is *the earlier of two past actions* — 'When the teacher arrived, the boys **had run** away' (running first, arriving after). **Future perfect** (will have + participle) looks back from a future point — 'By next June we **will have completed** Senior High.' The signal words examiners test: **just, already, yet, ever, never, since, for, by** — with **since + starting point** (since 2019, since Monday) and **for + length** (for three years, for a long time); and never put a finished-time word in a present-perfect sentence — 'I have seen him *yesterday*' is wrong: yesterday is simple past, 'I saw him yesterday'."},
    {k:"table", head:["Tense","Formula","Example","What it insists on"], rows:[
      ["Present perfect","has/have + p.p.","She has gone to school.","gone (and not back) — result visible now"],
      ["Present perfect progressive","has/have been + -ing","It has been raining all morning.","still going, or just stopped with evidence"],
      ["Past perfect","had + p.p.","The match had ended when we came.","which of two past events was first"],
      ["Past perfect progressive","had been + -ing","He had been waiting two hours when the bus came.","duration before a past moment"],
      ["Future perfect","will have + p.p.","By eight I shall have cooked the rice.","done before a future mark"],
      ["Future perfect progressive","will have been + -ing","Next year they will have been married ten years.","how long by a future mark"]
    ]},
    {k:"h3", t:"Regular and Irregular — How the Past Is Made"},
    {k:"p", t:"A **regular verb** builds its past and its past participle with **-ed**: walk → walked → walked. The spelling rules that lose marks when forgotten: most verbs add -ed (pound → pounded); verbs ending in **e add only -d** (love → loved); **consonant + y changes y to -ied** (carry → carried, study → studied) but vowel + y simply adds -ed (play → played, enjoy → enjoyed); a **stressed final syllable ending in one vowel and one consonant doubles the last letter** (stop → stopped, plan → planned, refer → referred) — but not when the stress is elsewhere (visit → visited, open → opened) nor after a vowel pair (rain → rained); and **bark, liked, watched** carry the **-t** sound after a voiceless ending — a pronunciation, not a spelling, that oral tests chase. **Irregular verbs** refuse the rule and must be learned in families: they change the vowel (sing–sang–sung; drink–drank–drunk; begin–began–begun), change and add -n (go–went–gone; know–knew–known; grow–grew–grown; draw–drew–drawn), change all three or none at all (do–did–done; see–saw–seen; come–came–come; run–ran–run; put–put–put; cut–cut–cut; cost–cost–cost), or shift only in the participle (take–took–taken; give–gave–given; write–wrote–written; ride–rode–ridden; rise–rose–risen; fall–fell–fallen)."},
    {k:"table", head:["Base form","Past simple","Past participle","The pair examiners love"], rows:[
      ["go","went","gone","has gone (away) vs has been (visited and back)"],
      ["come","came","come","come and see, not come and saw"],
      ["see","saw","seen","I have seen it, not I have saw it"],
      ["do","did","done","did he do it — no double past"],
      ["eat","ate","eaten","has eaten, not has ate"],
      ["take","took","taken","mistaken rhymes with taken, not took"],
      ["give","gave","given","given, written, risen all end -en"],
      ["know","knew","known","know–no past with w"],
      ["begin","began","begun","i–a–u drift: begin-began-begun, swim-swam-swum, ring-rang-rung"],
      ["break","broke","broken","speak-spoke-spoken, steal-stole-stolen"],
      ["choose","chose","chosen","freeze-froze-frozen"],
      ["fly","flew","flown","grow-grew-grown, throw-threw-thrown"],
      ["lie (recline)","lay","lain","versus lay-laid-laid (to put down) — the true trap"],
      ["sit","sat","sat","sit (to rest) takes no object; set-set-set (to place) must: 'She SAT the cup down' is wrong — she SET it down"]
    ]},
    {k:"p", t:"The most punished pair in every mark scheme: **lie vs lay**. **Lie, lay, lain, lying** means to recline — 'The pen LAY on the desk'; 'She has LAIN there since noon'; and it takes NO object. **Lay, laid, laying** means to put something down and MUST have an object — 'She LAID the pen on the desk'; 'She has LAID it there often.' Ask *object or no object*, and the answer follows."},
    {k:"h3", t:"Comparative and Superlative in Full"},
    {k:"p", t:"One syllable takes **-er/-est** (tall, taller, tallest; fast, faster, fastest — with doubled consonant after one vowel: big, bigger, biggest; thin, thinner, thinnest); **-y changes to -ier** (happy, happier, happiest); two or more syllables take **more/most** (useful, more useful, most useful). Irregulars: **good/well — better — best; bad/badly — worse — worst; little — less — least; many/much — more — most; far — farther (distance) — further (more of); old — elder (family rank) — oldest; late — latter (of two) — latest (time)**. The laws that carry marks: **compare with than, never then** ('taller than Kollie'); the **double comparative is wrong** ('more better', 'most biggest'); **use the comparative between two** ('the BETTER of the twins') and the superlative with **one of the + plural** ('one of the BEST schools in Maryland County'); never compare a thing with its own class — write 'Harper is **larger than any other town** in Maryland' (or 'the largest town in Maryland'), never 'larger than any town in Maryland', which would make Harper larger than itself; and the **as…as** frame takes the positive: 'quiet as a mouse', 'not so hot as Gbarnga in March'."},
    {k:"h3", t:"The Persuasive Essay — Skeleton and Moves"},
    {k:"num", items:[
      "**Claim in the first line.** Say what you want the reader to believe or do, in the introduction, before the detail: 'School should begin at seven.'",
      "**One reason per paragraph.** Topic sentence, then proof — fact, example, figure, or a short story — then a line tying it back to the claim.",
      "**Answer the objection.** Name the strongest opposing view and knock it down politely; a persuasion that admits nothing persuades nobody.",
      "**Words that push:** modal duty (must, should, ought), inclusive pronouns (we, our), concrete numbers, the repeated refrain; and no shouting — the calm argument beats the angry one.",
      "**Close with the call.** Restate the claim and say who must do what first.",
      "**Read it as your enemy would.** Mark every assertion with no support behind it; supply the support or cut the assertion."
    ]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Choose the tense** — a sentence with a bracketed verb and a since/for/by/yesterday signal: the perfect or the simple past turns on whether the time is finished",
      "**Supply the participle** — 'has (go) ___': gone, not went; a dozen irregulars return every year, and the lie/lay trap is among them",
      "**Correct the double past or the wrong form** — 'I have saw it', 'He didn't went', 'more better'",
      "**Comparatives from a table of data** — two towns, two figures: write the sentence the numbers support, than and not then",
      "**The older-of-two rule** — 'the taller of the sisters', 'the best of the three'; comparative for two, superlative beyond",
      "**The persuasive paragraph or essay** — claim, one reason per paragraph, an objection answered, a call at the end; the mechanics (tense, agreement, -ed spellings) are marked inside it, not apart from it"
    ]}

  ],

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
  study:[
    /* ---- course text: Semester Two, Period IV — Adjectives and Adverbs (guide pp. 8-9) ---- */
    {k:"h3", t:"Adjectives"},
    {k:"p", t:"An **adjective** modifies — describes or limits — a noun or a pronoun: 'a **brave** girl', 'three **mangoes**', 'the field was **wet**.' Adjectives answer **what kind?** (red, brave, hungry), **which one?** (this, that, the second), and **how much? or how many?** (some, little, seven). Identify adjectives and the nouns or pronouns they modify in sentences, and classify them by the questions they answer."},
    {k:"rule"},
    {k:"h3", t:"Proper and Compound Adjectives"},
    {k:"p", t:"A **proper adjective** is formed from a proper noun and begins with a capital letter — Liberian rubber, Ghanaian kente, African music. A **compound adjective** is two or more words acting as one adjective, usually hyphenated before the noun — a well-known trader, a ten-year-old boy, a first-rate school. Write and classify adjectives of both kinds in speech and writing."},
    {k:"rule"},
    {k:"h3", t:"Adverbs"},
    {k:"p", t:"An **adverb** modifies a verb, an adjective or another adverb: 'She sings **beautifully**', 'very brave', 'quite slowly.' Adverbs answer four questions — **Where?** (here, outside, everywhere), **When?** (now, yesterday, later), **In what way?** (quickly, carefully, badly) and **To what extent?** (very, too, almost). Many are formed from adjectives with -ly; some change spelling — true, truly. Debate the four questions adverbs answer, and recognise how each adverb modifies."},
    {k:"rule"},
    {k:"h3", t:"Conjunctive Adverbs"},
    {k:"p", t:"A **conjunctive adverb** joins two complete thoughts and shows their relation while also modifying the second — **however, therefore, moreover, nevertheless, consequently, furthermore, otherwise, meanwhile**: 'The rain fell; **nevertheless**, the match continued.' Use a semicolon before and a comma after. Explain the correlation between two ideas — contrast, similarity, emphasis — and use conjunctive adverbs to link them in writing."},
    {k:"rule"},
    {k:"h3", t:"Making Writing Vivid and Precise"},
    {k:"p", t:"Well-chosen adjectives and adverbs make writing vivid or precise: 'the dog barked' becomes 'the fierce dog barked loudly in the yard.' But do not heap them — one exact word beats three vague ones. Apply adjectives and adverbs appropriately in compositions, and read the difference aloud."},
    {k:"h3", t:"The Kinds of Adjectives — by the Question They Answer"},
    {k:"table", head:["Question","Kind","Words it covers","Example"], rows:[
      ["what kind?","descriptive (qualitative)","good, tall, red, muddy, tired, honest","the MUDDY road to Todee"],
      ["which one? / how many?","demonstrative","this, that, these, those","THAT mango is ripe"],
      ["whose?","possessive","my, your, his, her, its, our, their, Kollie's","HER new wrapper"],
      ["how many? / which order?","numeral","one, two, first, third, few, several, many","the FIRST boy; SEVERAL traders"],
      ["what? who? which?","interrogative","what, which, whose (before a noun)","WHICH dress will you wear?"],
      ["from where?","proper","Liberian, Ghanaian, Monrovian, Bassa","a KPELLE story"],
      ["(two words joined)","compound","heavy-hearted, good-looking, six-year-old, self-confident","a SELF-CONFIDENT speaker"]
    ]},
    {k:"p", t:"An adjective may sit **before** the noun (attributive: a LONG journey) or **after a linking verb** as complement (predicative: the journey was LONG). Words that look like adjectives but are not: **the** (article), **very** (adverb, till it means exact: the very spot), **enough** follows what it modifies (good ENOUGH, big ENOUGH — never enough big), and a noun may serve as adjective (SCHOOL fees, MANGO tree — still a noun in the dictionary, an adjective in the sentence)."},
    {k:"h3", t:"Order of Adjectives and the Comma Between Them"},
    {k:"p", t:"English stacks descriptive adjectives in a fixed order — **opinion, size, age, shape, colour, origin, material, purpose** — and a wrong order sounds wrong even when the grammar is right: we say 'a beautiful little old round brown clay water pot,' never 'a clay round beautiful pot.' Commas: join adjectives with a comma when the order could be shuffled or and could be inserted ('a cold, hungry traveller'); no comma when the last adjective belongs to the noun as a unit ('a small green school bag' — 'green school bag' is the thing). One thing the mark scheme rewards: never punctuate the article ('a, honest man' is wrong) and never put a comma between adjective and its noun."},
    {k:"h3", t:"Adverbs — Kinds, Formation and the Flat Ones"},
    {k:"bul", items:[
      "**Adverbs of manner** answer how? — formed from the adjective with **-ly**: quick → quickly, slow → slowly. Spelling shifts: **y to -ily** (happy → happily); **drop the -le e + y** (gentle → gently, simple → simply); **drop the -e** (true → truly, whole → wholly, due → duly); **-ll** (full → fully).",
      "**Flat adverbs** — identical to the adjective and taking no -ly: **fast, hard, late, long, low, high, straight, right, far**. 'He runs FAST'; 'She works HARD.' The trap is the -ly twins with their own meanings: **hardly** = scarcely (He HARDLY ate = he almost did not eat), **lately** = recently, **highly** = greatly (praised HIGHLY), **latest** = most recent news. 'The boy spoke hardly any words' is correct; 'the boy worked hardly' is nonsense.",
      "**Adverbs of frequency** — always, usually, often, sometimes, rarely, seldom, never; they sit BEFORE the main verb but AFTER be: 'She ALWAYS sings', 'He is NEVER late'.",
      "**Adverbs of degree** — very, too, rather, quite, fairly, almost, enough (after), so…that, too…to: 'THE soup is TOO hot TO eat' carries its own result.",
      "**Adverbs of time and place** — now, then, today, here, there, elsewhere, upstairs.",
      "**The conjunctive adverbs** — however, therefore, moreover, nevertheless, besides, otherwise, meanwhile, then, finally, first: they link sentences but are NOT conjunctions, so they can never join two sentences with one bare comma."
    ]},
    {k:"table", head:["Pair","One means","The other means","Correct use"], rows:[
      ["good / well","good is an adjective","well is the adverb — and an adjective for health","She sings WELL; the food is GOOD; 'I am WELL, thank you'"],
      ["bad / badly","adjective","adverb","He did BADLY in the test (not 'did bad')"],
      ["real / really","adjective","adverb","a REAL case; it is REALLY hot (not 'real hot')"],
      ["sure / surely","adjective","adverb","Are you SURE?; SURELY he meant no harm (surely = certainly)"],
      ["near / nearly","close by","almost","the NEAR village; he NEARLY died (almost, not close)"],
      ["late / lately","not on time","recently","He came LATE; Have you seen him LATELY?"],
      ["hard / hardly","with effort; solid","scarcely","works HARD; could HARDLY hear"]
    ]},
    {k:"h3", t:"Comparative and Superlative of Adverbs"},
    {k:"p", t:"The -ly adverbs compare with **more/most**, never with -er: **more carefully, most carefully** (not carefullest). The flat and irregular ones compare like adjectives: **fast – faster – fastest; hard – harder – hardest; late – later – latest; early – earlier – earliest; well – better – best; badly – worse – worst; far – farther/further**. Keep than with the comparative and the with the superlative: 'Musu runs **faster than** Kollie'; 'Musu runs **the fastest** of all.' Two comparatives can stack for a trend: '**The more** we practise, **the better** we speak.' And avoid the double mark scheme failure: no 'more faster', no 'most tallest' — one engine of comparison per adjective."},
    {k:"h3", t:"Proper, Compound and the Article"},
    {k:"bul", items:[
      "**Proper adjectives** are made from proper nouns and always carry the capital: Ghana**ian**, Monrovi**an**, Kru, Bassa, Atlantic; but the noun keeps its own spelling — 'the coast of Liberia', not 'Liberian coast of'.",
      "**Compound adjectives** hyphenate before the noun but open after it: 'a **well-known** trader' yet 'the trader is **well known**'; 'a **two-week** course' (not two-weeks); ages: 'a **five-year-old** boy'.",
      "**The definite article**: before a unique thing (the sun, the harmattan, the Equator); before a thing already named (a girl — the girl); with superlatives and ordinals (the best, the first); with adjectives as a class (the poor, the young); with geographical plurals and rivers/seas/orients (the Atlantic, the St Paul, the United States, the Niger); before the name of a vessel (the Joy).",
      "**No article** before most proper names, languages and school subjects (Liberia, English, Mathematics), before meals and abstracts used generally (rice for lunch, honesty pays), and in the plural-generic of things named by material (mangoes rot quickly). **A/an** follows the SOUND, not the letter: **an** hour, **a** university, **an** MP, **a** one-week course, **an** honest man."
    ]},
    {k:"h3", t:"The Conjunctive Adverb and the Semicolon"},
    {k:"p", t:"A conjunctive adverb joining two full sentences takes the **semicolon before it and a comma after it**: 'The market closed**; however,** we bought rice.' A bare comma there is the **comma splice** that papers everywhere punish: 'The market closed, however we bought rice' welds two sentences with a pin. The four lawful repairs: the semicolon above; a full stop and a new sentence; a coordinating conjunction with a comma ('The market closed, **but** we still bought rice'); or subordination ('**Although** the market had closed, we bought rice'). The five degrees of what these words say: **contrast** — however, nevertheless, yet, still, instead; **result** — therefore, thus, so, then, consequently; **addition** — moreover, furthermore, besides, also, again; **time** — meanwhile, then, finally, next; **concession** — indeed, of course (followed by the turn)."},
    {k:"h3", t:"Making Writing Vivid and Precise — the Craft"},
    {k:"bul", items:[
      "**One right adjective beats three average ones**: 'the RED laterite dust stung his eyes' shows and feels; 'very nice beautiful dust' shows nothing.",
      "**Do not grade absolutes**: unique, dead, perfect, full, round cannot be very unique or more perfect — use absolutely, completely, nearly instead.",
      "**Cut -ing echo and empty intensifiers**: very, really, so, just, quite, rather are weeds; each one left standing is a mark of precision lost.",
      "**Match the register**: 'rather nice' for talk, 'satisfactory' for the formal letter; slang has no place in the composition.",
      "**Test each adjective against the noun**: a HEAVY rain falls in sheets, a HARD rain stings; do not say 'hot weather and high temperature' twice."
    ]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Adjective or adverb?** — 'She sings (beautiful/beautifully)'; after a linking verb choose the adjective, with an action verb the adverb",
      "**good/well, hard/hardly, late/lately, near/nearly** — the pair questions come back every single year",
      "**The double comparison** — find and remove: 'more taller', 'most biggest', 'bestest'",
      "**The order of adjectives** — rearrange jumbled words into the natural stack; the mark is for the instinct, so read it aloud",
      "**The -ly spellings** — happily, truly, wholly, gently, quickly under dictation; and more carefully for the -ly adverb's comparative",
      "**Punctuation of however** — the semicolon-and-comma frame; rewrite the comma splice any of the three other lawful ways",
      "**One vivid paragraph** — described under 'making writing vivid': strong nouns and verbs first, adjectives chosen, intensifiers cut"
    ]}

  ],

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
  study:[
    /* ---- course text: Semester Two, Period V — Prepositions, Conjunctions and Interjections (guide pp. 10-11) ---- */
    {k:"h3", t:"Prepositions and the Prepositional Phrase"},
    {k:"p", t:"A **preposition** relates a noun or pronoun to another word in the sentence, showing relationships of **location** (in, on, under, beside), **direction** (to, from, into, toward), **cause or purpose** (for, because of) and **possession** (of) — together with time (at, before, during). A **prepositional phrase** consists of the preposition and its object, with any modifiers: 'under the big table', 'from Monrovia'. Establish that the phrase consists of a preposition and a noun or pronoun, and identify the relationship each preposition shows in a sentence."},
    {k:"rule"},
    {k:"h3", t:"Telling Prepositions and Adverbs Apart"},
    {k:"p", t:"Some words serve as both. A word is a **preposition** when it has an object — 'She walked **down** the hill'; the same word is an **adverb** when it stands alone — 'She walked **down**.' Test it: if a noun or pronoun follows and receives the relation, it is a preposition; if not, it is an adverb. Distinguish prepositions with their objects from adverbs in given sentences."},
    {k:"rule"},
    {k:"h3", t:"Conjunctions"},
    {k:"p", t:"A **conjunction** joins words or groups of words. **Coordinating conjunctions** join equals — **for, and, nor, but, or, yet, so**: 'rice **and** cassava.' **Correlative conjunctions** work in pairs — **either … or, neither … nor, both … and, not only … but also**. **Subordinating conjunctions** begin a dependent clause — **although, because, if, when, since, unless, until, while**: '**Although** the road was bad, the truck arrived.' Supply the missing conjunction to complete a sentence, discuss the functions conjunctions perform, and identify each type with examples."},
    {k:"rule"},
    {k:"h3", t:"Interjections"},
    {k:"p", t:"An **interjection** expresses feeling or emotion — surprise, joy, pain, disgust — and functions independently of the sentence around it: **Oh! Alas! Hurrah! Wow! Ah!** It is followed by an exclamation mark when it stands alone, or a comma when the sentence follows. Interjections carry feeling, not grammar."},
    {k:"rule"},
    {k:"h3", t:"Persuasion: the Advertisement"},
    {k:"p", t:"Compose on approved topics incorporating prepositions, conjunctions, adverbs and interjections — among them the **advertisement**, a short piece of persuasion that names the product, claims its benefit, and calls on the reader to act, using words and pictures chosen to persuade."},
    {k:"h3", t:"The Prepositions of Time and Place — at, in, on"},
    {k:"table", head:["Word","At time","In time","On time"], rows:[
      ["point / part of day","at six o'clock, at noon, at night, at dawn","in the morning, in the rainy season","on Monday evening"],
      ["day / date","—","in June, in 2026, in the 1990s","on Friday, on 26 July, on my birthday"],
      ["festival / period","at Christmas, at the harvest","in the harmattan, in wartime","on Independence Day"],
      ["place point","at the market, at school, at the crossroads","in Monrovia, in Montserrado, in class","on the table, on Broad Street, on the wall"],
      ["line / surface","at the bus stop, at the gate","in the river, in the yard, in the country","on the road, on the coast, on page 12"]
    ]},
    {k:"p", t:"The pairs that decide marks: **between** is for two (or each of a pair), **among** for more than two — 'shared between Musu and Kollie' but 'divided among the traders'. **Besides** = in addition to; **except** = leaving out — 'Besides Kollie, two others came' (Kollie came) against 'Everyone came EXCEPT Kollie' (he did not). **Since** takes a starting point, **for** a length — 'since 2019' / 'for five years'. **During** + noun, **while** + clause — 'during the holiday' / 'while we were on holiday'. **By** = not later than, **until** = up to and no further — 'finish BY Friday' / 'wait UNTIL Friday'. **Into** and **onto** show movement (walk INTO the house, jump ONTO the bed) where **in** and **on** show rest; **off** against **from** ('take it OFF the table' when it leaves the surface, 'from' when the surface is only the starting point). **At** before arrive in small places, **in** for cities and countries: arrive AT the station, arrive IN Monrovia. Never add a preposition to a transitive verb — 'discuss about', 'resemble to', 'enter into the house' (enter the house), 'marry with' are all errors of the mother tongue; 'return back' and 'repeat again' double the meaning."},
    {k:"h3", t:"Prepositions Fixed by the Word Before Them"},
    {k:"table", head:["Verb or adjective","Takes","Example"], rows:[
      ["listen / listen carefully","to","Listen TO the instructions"],
      ["depend / rely","on (upon)","It DEPENDS ON the rains"],
      ["believe","in","Believe IN honesty"],
      ["agree","with a person; to a plan; on a point","I AGREE WITH you; agreed TO the terms; agreed ON the date"],
      ["apologise","for (a thing), to (a person)","Apologise TO the teacher FOR being late"],
      ["afraid / frightened / scared","of","Not AFRAID OF the dark"],
      ["angry / furious","with a person, at a thing","ANGRY WITH the boy, ANGRY AT the noise"],
      ["good / bad / excellent","at","GOOD AT mathematics"],
      ["fond / jealous / proud","of","PROUD OF her country"],
      ["married","to (never with)","She was MARRIED TO a Buchanan man"],
      ["different","from (also to, BrE)","Different FROM what we expected"],
      ["complain / succeed","of-or-about / in","COMPLAINED ABOUT the noise; SUCCEEDED IN the test"],
      ["die","of a disease, from a cause","DIED OF malaria (from overwork)"],
      ["prevented / protected / safe","from","SAFE FROM harm"]
    ]},
    {k:"h3", t:"Conjunctions — Coordinating, Subordinating, Correlative"},
    {k:"p", t:"A **coordinating conjunction** joins equals: the seven **FANBOYS** — for, and, nor, but, or, yet, so — and the comma before them when two full sentences meet: 'The rain fell**, and** we ran.' A **subordinating conjunction** joins a dependent clause to the main clause and says how they relate: **time** — when, while, before, after, since, until, as soon as; **cause** — because, since, as, now that; **condition** — if, unless (= if…not), provided that, once; **contrast** — although, though, whereas, while; **purpose and result** — so that, in order that, so…that; **place** — where, wherever. When the subordinate clause comes first it takes a comma: 'WHEN the bell rang, we left'; no comma when it follows: 'We left WHEN the bell rang.' One rule that recurs in every correction exercise: **no double negatives** with nor — 'Kollie NEITHER came NOR sent word'; and after if or when of the present, use the simple form, not will: 'If it RAINS tomorrow we will stay' — never 'if it will rain.'"},
    {k:"bul", items:[
      "**Correlative conjunctions** come in pairs and demand **balance**: the same form must follow each half — 'BOTH the teacher AND the pupils attended'; 'either Kollie or Musu HAS the key' (the nearer subject rules the verb); 'not only tired BUT ALSO hungry'; 'neither the boys nor the girl WAS late'; 'whether to go OR to stay'; 'the more we practise, the better we speak'. A pair split out of balance is the error to hunt: 'He not only runs but also swims' → 'He BOTH runs AND swims.'"
    ]},
    {k:"h3", t:"Interjections — the Words That Stand Apart"},
    {k:"p", t:"An **interjection** (introjection) throws out feeling and has no grammatical link to the sentence around it: **O** my father!; **Oh!**, **Ah!**, **Alas!**, **Wow!**, **Hey!**, **Hush!**, **Bravo!**, **Hurrah!**, **Well!** (resignation or pause). Because they stand apart, they take the **exclamation mark** when strong and a **comma** when mild — 'Oh, never mind' — and the noun after O is in the **vocative case**: 'O Kollie, come here.' Interjections belong to speech and storytelling, never to the formal letter; a paper may ask you to punctuate them, but no essay should lean on them."},
    {k:"h3", t:"Persuasion at Work — the Advertisement"},
    {k:"num", items:[
      "Fix the product and the person: who must buy, and in one line what it does for them.",
        "Open with the hook — the claim, a question, or the picture in words: 'Thirsty? Ice-cold Joy water, every morning.'",
        "Use the imperative and the second person: TRY it; ASK for it; you will not regret IT.",
        "Lean on the superlative honestly — the strongest, the purest — and back it with one plain reason (size, price, years in the trade).",
        "Shape the slogan to be said aloud: rhyme (Pleasure without price), alliteration (best, brightest, balm), rhythm, or repetition.",
        "Close with the call: buy it where — and say the name again. Check every claim you could not defend in court."
    ]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Supply the preposition** — at/in/on with time and place; arrive AT a town or IN a country; good AT, depend ON, angry WITH a person",
      "**between or among; since or for; during or while; by or until; besides or except** — the pair choices in a given sentence",
      "**Join the sentences** — with and, but, or, nor, yet, so (with the comma), or with although/because/unless (mind the comma when the clause leads)",
      "**Correct the tongue-slip** — 'discuss about', 'marry with', 'enter into', 'repeat again', 'return back': the preposition or the copy is cut",
      "**the correlative balance** — repair 'not only…but also' and 'either…or' so the halves match, and let the nearer subject govern the verb",
      "**the advertisement task** — hook, claim, one honest reason, slogan, call: marked for persuasion, and again for the mechanics inside it"
    ]}

  ],

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
  study:[
    /* ---- course text: Semester Two, Period VI — Phrases and Clauses (guide pp. 12-13) ---- */
    {k:"h3", t:"Noun Phrases and Verb Phrases"},
    {k:"p", t:"A **phrase** is a group of related words without both a subject and a predicate, working as one part of speech. A **noun phrase** is a noun with its modifiers, doing the work of a noun — 'the tall boy in the blue shirt' as the subject of a sentence. A **verb phrase** is the main verb with its helping verbs — 'has been eating.' Differentiate noun phrases from verb phrases in sentences, and generate examples of your own."},
    {k:"rule"},
    {k:"h3", t:"Verbal Phrases"},
    {k:"p", t:"A **verbal** is a verb form used as another part of speech. A **participle** acts as an adjective — 'the **broken** window', 'the boy **sitting** by the door' — and a **participial phrase** is the participle with its modifiers: '**Worn out by the journey**, the travellers slept.' A **gerund** is the -ing form used as a noun — '**Swimming** builds strength' — and a **gerund phrase** is the gerund with its objects: '**Eating cold rice** made him ill.' An **infinitive** is to + the base verb — 'to read' — and an **infinitive phrase** with its objects: 'He went to the shop **to buy bread**.' Apply participle and gerund phrases in sentences, and construct sentences using infinitives and infinitive phrases. Classify each verbal phrase by whether it functions as a noun, an adjective or an adverb."},
    {k:"rule"},
    {k:"h3", t:"Appositives and Prepositional Phrases"},
    {k:"p", t:"An **appositive** is a noun placed beside another noun to explain it, and an **appositive phrase** carries its modifiers: 'Kollie, **the class monitor**, collected the books.' Identify appositives and the words they name. A **prepositional phrase** — preposition, object, modifiers — works as an adjective or an adverb: 'the man **in the yard**', 'she arrived **before dawn**.' Distinguish prepositional phrases from adjective and adverb phrases."},
    {k:"rule"},
    {k:"h3", t:"Phrasal Verbs"},
    {k:"p", t:"A **phrasal verb** is a verb followed by a preposition or adverb so that the pair takes a new meaning: **ran across** (met by chance), **broke down** (stopped working), **get away** (escape), put off (postpone), look after (care for). The meaning cannot be guessed from the parts — learn each as one word."},
    {k:"rule"},
    {k:"h3", t:"Clauses"},
    {k:"p", t:"A **clause** has a subject and a predicate. An **independent (main) clause** stands alone as a sentence; a **dependent (subordinate) clause** cannot, and begins with a subordinating word. Dependent clauses do three works: a **noun clause** — 'I know **that she came**'; an **adjective clause** — 'the man **who called** is here'; an **adverb clause** — 'we stayed home **because it rained**.' Compare and contrast independent and subordinate clauses, and use each kind in your own sentences."},
    {k:"rule"},
    {k:"h3", t:"Exposition: Comparison and Contrast"},
    {k:"p", t:"Write the **comparison-and-contrast** essay, a form of exposition that shows how two things are alike and how they differ: name the two subjects, state the basis of comparison, then treat the points one by one — by subject or by point. Develop your own topics and write the essay."},
    {k:"h3", t:"Phrase and Clause — the First Divide"},
    {k:"p", t:"A **phrase** is a group of words without its own subject–verb pair; a **clause** always carries one. 'In the market' names where but says nothing done — phrase. 'Because the market closed' has a subject and a verb but leans on the rest of the sentence — a **dependent (subordinate) clause**. 'The market closed' stands alone — an **independent (main) clause**. The whole of sentence analysis sits on this one test, and on counting: a **simple** sentence is one independent clause; **compound**, two or more joined by a FANBOYS conjunction or a semicolon; **complex**, one independent clause plus at least one dependent; **compound-complex**, two independents and a dependent. 'The rain fell, and the boys ran' is compound; 'The rain fell while the boys were packing, so they ran' is compound-complex."},
    {k:"table", head:["Phrase type","Built from","It works as","Example"], rows:[
      ["noun phrase","(determiner) + (modifiers) + noun","subject, object, complement","THE OLD WOMAN WITH THE BASKET sold pepper"],
      ["verb phrase","auxiliaries + main verb","the predicate","she HAS BEEN POUNDING rice all morning"],
      ["prepositional phrase","preposition + its object (a noun phrase)","adjective or adverb","the roof OF THE HOUSE / we walked IN THE RAIN"],
      ["infinitive phrase","to + base form","noun, adjective or adverb","TO TELL the truth is brave"],
      ["gerund phrase","-ing form + its dependents","a noun","SELLING OLD CLOTHES paid his fees"],
      ["participial phrase","-ing / -ed verb form + dependents","an adjective","THE BOY CARRYING THE SACK tripped; rice BOILED WITH PALM OIL"],
      ["appositive phrase","a noun phrase beside another noun","explains or renames","Kollie, THE CLASS CAPTAIN, read the prayer"]
    ]},
    {k:"h3", t:"Gerund or Participle — the Two Tests"},
    {k:"p", t:"Both wear **-ing**; the office decides the kind. **In a noun slot — subject, object, complement, object of a preposition — it is a gerund**: '**Selling** fish taught him arithmetic'; 'she enjoys **cooking**'; 'his dream, **teaching**, came true.' **Beside a noun doing the work of an adjective, or inside a verb phrase with be, it is the present participle**: 'the **selling** price'; 'she **was cooking**.' Two tells: a gerund can take a **possessive** before it — 'we objected to **Kollie's coming** late' — and only the gerund can follow of, about, for, by, without, in: 'he learns **by listening**'. The participle, being an adjective, can be dropped from the sentence without injury: 'the man STANDING there' → 'the man there' — try it with the gerund and the sentence collapses."},
    {k:"h3", t:"The Dangling Modifier — Every Year, One Mark"},
    {k:"p", t:"A participial phrase must be fastened to the doer of the -ing action; when the doer is absent or wrong, the modifier **dangles** and the sentence turns absurd: '**Walking to school**, the rain caught Musu' — the rain was not walking. Repair by naming the doer inside the main clause: '**Walking to school**, Musu was caught by the rain'; or by expanding the phrase to a clause: 'As Musu walked to school, the rain caught her.' The same test catches '**Having finished** the plate, the bowl was washed' (the plate did not finish itself) and '**After cooking**, supper was served' — supply the cook."},
    {k:"h3", t:"The Clauses Inside the Complex Sentence"},
    {k:"table", head:["Clause kind","It works as","Begins with","Example"], rows:[
      ["noun clause","subject, object, complement","that, whether, what, who, when, why","WHO BUILT IT is unknown; I know THAT SHE CAME"],
      ["adverbial clause","adverb of time, cause, condition, contrast, purpose","when, because, if, although, so that","we left WHEN the bell rang"],
      ["relative (adjective) clause","adjective on a noun","who, whom, whose, which, that, where","the girl WHO WON; the pen THAT YOU LOST"],
      ["relative clause, defining","says WHICH one — no commas","that / who / zero relative","the boy [who] sits beside me is Tongo"],
      ["relative clause, non-defining","adds a fact about the one already fixed — commas","which / who (never that)","Monrovia, WHICH was founded in 1822, stands on Cape Mesurado"]
    ]},
    {k:"p", t:"Two relative rules that WASSCE corrects: **whom** when the pronoun is an object ('the man WHOM we thanked'), and the comma law — a name or a unique thing takes the commas (Harper**, which lies on the coast,** is my town), a defining clause never does (the town WHICH lies on the coast is Harper). **That** may replace who/which in defining clauses but never after a comma, and it may vanish altogether when it is the object: 'the book (that) I read.'"},
    {k:"h3", t:"Phrasal Verbs — the Verb Plus Its Little Word"},
    {k:"p", t:"A **phrasal verb** welds a verb to an adverb particle or a preposition, and the pair usually means more than the verb: the particle turns **give** (hand over) into **give up** (surrender). When the adverb particle is there, a short object may come **between** — 'turn the light **on**', 'call the man **off**', 'write it **down**', 'pick it **up**' — but a **pronoun object must go between** ('take it **off**', never take off it); a preposition, having an object by nature, stays before its noun — 'look **after** the child' never 'look the child after.' Separable or not is a habit to learn with the word."},
    {k:"table", head:["Phrasal verb","It means","Example"], rows:[
      ["call off","cancel","The match was CALLED OFF for rain"],
      ["put off","postpone; disgust","They PUT the test OFF until Monday"],
      ["give up","stop trying; surrender","He GAVE UP smoking"],
      ["carry on / carry out","continue / perform","CARRY ON with the plan; CARRY OUT the experiment"],
      ["bring up","raise a child; raise a topic","She was BROUGHT UP in Harper"],
      ["run out of","have no more","We RAN OUT OF kerosene"],
      ["put up with","tolerate","The class PUT UP WITH the noise"],
      ["set out / set off","begin a journey","We SET OFF at dawn"],
      ["look into","investigate","The council will LOOK INTO the road"],
      ["take after","resemble","The boy TAKES AFTER his uncle"],
      ["turn down","refuse; lower","She TURNED DOWN the offer"],
      ["do without","manage lacking","We DID WITHOUT the radio"],
      ["get over","recover","He GOT OVER the fever slowly"],
      ["look forward to","await gladly","I LOOK FORWARD TO the holidays (to + -ing!)"]
    ]},
    {k:"h3", t:"Exposition: Comparison and Contrast, the Two Frames"},
    {k:"num", items:[
      "**Block method** — one whole paragraph on A, one on B, then a third weighing them; best for short, simple subjects: first the farm at Kakata, then the plantation at Harbel, then the judgment between.",
      "**Point-by-point method** — one paragraph per point of comparison, each covering A and B together: labour in farm and plantation; tools; yields; marketing. This is the frame WASSCE examiners prefer for its discipline.",
      "Draw the frame before writing: two columns headed A and B with the shared points down the left — every row you cannot fill is a point to drop.",
      "Signal the turns: **similarities** — like, both, also, similarly, likewise, in the same way; **differences** — but, yet, while, whereas, unlike, on the other hand, in contrast, however.",
      "Make every comparison between true like-for-like: 'The climate of Monrovia is wetter than THAT OF Gbarnga' — never 'wetter than Gbarnga', which compares a climate with a town.",
      "End with the weighing sentence: the thesis restated as a judgment, not new material."
    ]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Label the underlined group** — phrase or clause, and if a phrase: noun, verb, prepositional, infinitive, gerund or participial",
      "**Give the clause its kind** — noun, adverbial or relative; defining or non-defining; supply or delete the commas as the clause demands",
      "**Classify the sentence** — simple, compound, complex, compound-complex, by counting independent and dependent clauses",
      "**Repair the dangling modifier** — walk the -ing phrase back to its doer and re-fasten it",
      "**The phrasal verb meaning** — 'called off', 'put up with', 'takes after': supply the one-word verb it replaces, and mind pronouns between the parts (turn IT off)",
      "**the comparative frame** — rewrite so like is compared with like ('the rain of Monrovia, not Monrovia, is heavier than THAT of Gbarnga')",
      "**the exposition paragraph** — comparison or contrast on the given pair, in one of the two frames, with the signal words marked"
    ]}

  ],

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
  study:[
    /* ---- course text: Semester One, Period I — Verb Usage, Part 1 (guide pp. 14-15) ---- */
    {k:"h3", t:"The Five Forms of a Verb"},
    {k:"p", t:"Every verb has **five forms** (its principal parts). With the verb 'start': the **base form** — start, used for the present and after modals ('They start work'); the **s-form** — starts, for the third person singular of the present ('She starts early'); the **ing-form** — starting, for the progressive tenses ('He is starting'); the **past tense** — started ('We started yesterday'); and the **past participle** — has/have started, used with have, has, had and in the passive ('They have started'). Use the five forms correctly in your own writing."},
    {k:"rule"},
    {k:"h3", t:"The Six Tenses and their Progressive Forms"},
    {k:"p", t:"Combine the three times with the two aspects and you have the **six tenses**: the **present** — 'I write'; the **past** — 'I wrote'; the **future** — 'I shall write'; the **present perfect** — 'I have written'; the **past perfect** — 'I had written'; and the **future perfect** — 'I shall have written.' Each carries a **progressive form** with be + -ing for action in progress: 'I am writing', 'I was writing', 'I shall be writing', 'I have been writing', 'I had been writing', 'I shall have been writing.' Read passages from any given text, identify as many verb tenses as possible, and classify the identified verbs into their tenses; then incorporate sentences using the six tenses."},
    {k:"rule"},
    {k:"h3", t:"Cause and Effect"},
    {k:"p", t:"Write a **cause-and-effect passage**: state the problem clearly, then trace its causes and its effects in order, joining them with words such as because, since, therefore, as a result, consequently. Discuss contemporary issues to develop topics into a cause-and-effect essay — poor roads and the food supply, teenage pregnancy and school dropout."},
    {k:"rule"},
    {k:"h3", t:"Writing Book Reports"},
    {k:"p", t:"In the context of literature, the **book report** in its standard format gives: the **title and author**; the **setting** — where and when; the **characters** — who they are; the **plot** — what happens, briefly and in order; the **theme** — what the story is really about; and your **evaluation** — what the book taught you and how well it did it. Read short stories and write a report on each using this format."},
    {k:"h3", t:"The Five Forms and Where Each One Lives"},
    {k:"table", head:["Form","Built how","Lives in","Examples"], rows:[
      ["base (present except 3rd singular)","the dictionary form","after modals; plural present; infinitive","they WORK; must WORK; to WORK"],
      ["-s form (3rd person singular present)","base + s/es","present simple with he/she/it","SHE WORKS; he goes; she studies"],
      ["-ing form (present participle)","base + ing (drop e; double t in running)","progressives; gerunds","is WORKing; WORKing here is hard"],
      ["past form (past simple, V2)","-ed, or the learned change","past simple, alone","SHE WORKED; she went; he knew"],
      ["past participle (V3)","-ed, or -n or unchanged","perfects (have + V3) and passives (be + V3)","has WORKED; was BUILT; has gone; was seen"]
    ]},
    {k:"p", t:"Every one of the tenses is assembled from those five parts. Regular verbs are transparent: work – works – working – worked – worked. Irregular verbs hide their goods, and the two forms that most often collapse into each other in scripts are V2 and V3: went (past) and gone (participle) — 'he HAS gone', never 'has went'; saw and seen; knew and known; wrote and written. A WASSCE objective test will hand you a blank after have, had or was; the answer is always V3."},
    {k:"h3", t:"The Six Tenses, One Table to End All Tables"},
    {k:"table", head:["Tense","Formula","Typical signal","Example"], rows:[
      ["present simple","V1 / V1+s","always, every day, the truth","Rice needs water"],
      ["past simple","V2","yesterday, last term, in 2019","The rains failed last year"],
      ["future simple","will/shall + V1","tomorrow, soon","The school will open in January"],
      ["present perfect","has/have + V3","just, already, yet, since, for","The head has arrived (and is here)"],
      ["past perfect","had + V3","before, after, by the time, when","The bell had rung before we reached the hall"],
      ["future perfect","will have + V3","by + future point","By Friday we shall have finished the wall"]
    ]},
    {k:"p", t:"The progressives — be + V-ing — sit inside the three present/past/future frames when the action is in progress; the perfect progressives add been: 'it **has been raining** since dawn'. The four uses of the present perfect that exams test are: **result now** (I have lost my key — still missing), **experience** (have you ever…?), **continuing state with since/for** (she has lived here since 2019), and **news just in** (the chief has arrived). A finished-time word kills it: not 'have arrived yesterday' but **arrived yesterday**."},
    {k:"h3", t:"Sequence of Tenses"},
    {k:"bul", items:[
      "When the reporting verb is past, the verb inside the report usually steps back: 'Kollie **says** he **is** tired' against 'Kollie **said** he **was** tired.'",
      "A general truth does not step back: 'Our teacher **taught** that water **is** wet'; 'the earth **moves** round the sun' was said, is true.",
      "Two past events in one sentence: the **earlier** takes the past perfect, the later the simple past — 'when I **arrived**, the match **had begun**'; after **after** and **before** the order is already clear, so simple past is tolerated.",
      "A narrative keeps one backbone tense (past) and shifts only on purpose — for flashback (past perfect) or for the characters' own voices (direct speech)."
    ]},
    {k:"h3", t:"Cause and Effect — the Machinery"},
    {k:"table", head:["You want to…","Use","Watch out for"], rows:[
      ["state the cause first","because, since, as, owing to, due to, on account of, because of + noun","due to / because of take a NOUN; because takes a CLAUSE"],
      ["state the result","so, so that, therefore, thus, hence, consequently, as a result","so that = purpose; so…that = degree + result"],
      ["name a chain","lead to, result in, result from, bring about, cause, produce, give rise to","result IN the effect; result FROM the cause"],
      ["write the paragraph","one cause many effects, or many causes one effect — pick one frame","do not invent causes the facts do not support"],
      ["punctuate a leading clause","Because the roads flooded, the trucks stalled","the comma closes the subordinate clause, and no 'because … , so …' double-join"]
    ]},
    {k:"h3", t:"The Book Report — Frame for the Reader"},
    {k:"num", items:[
      "Head the report with the record: title, author, publisher and year, your name and class, the date read.",
      "Summarise in four or five sentences what the book is about — the situation, the trouble, the outcome — WITHOUT retelling every chapter and without giving away more than the first third needs.",
      "Describe the people: the protagonist, the opposition, one or two others — each with a line of evidence from the text.",
      "Name the setting and what it does: the village, the school, the city; the place of a story is a cause, not wallpaper.",
      "Say the theme in one sentence: what the book is REALLY about (growing up, honesty against pride).",
      "Judge with reasons and a quotation: what you liked or disliked and WHY; then recommend — to whom, and for what reader's taste."
    ]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**The verb form bank** — give V1–V3 and -ing of go, see, know, write, take, do, come, begin; the two that slip most (went/gone) are in every paper",
      "**Choose the tense from the signal** — since/for/yesterday/already/by the time: the answer is read from the clue word, not the blank's shape",
      "**The back-shift** — rewrite direct speech into reported: 'Kollie said, \"I am tired\"' → he said he WAS tired (universal truths excepted)",
      "**the because/so pair** — join two sentences once, not twice; comma after a leading because-clause",
      "**the book report or one paragraph of it** — summary, one judged quality with a supporting line, and the record block that shows you know a report from a story"
    ]}

  ],

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
  study:[
    /* ---- course text: Semester One, Period II — Verb Usage, Part 2: Voice, Paragraphs and Proofreading (guide pp. 16-17) ---- */
    {k:"h3", t:"Proper Verb Usage"},
    {k:"p", t:"Review the verb tenses. Write the past tense of given **irregular verbs** — go/went, see/saw, take/took. Construct verbs whose present principal part ends in **y** by adding **s** for the third person singular — study/studies, carry/carries — and note that the y becomes -ied in the past: carried, studied. Use each principal part properly in speech and writing."},
    {k:"rule"},
    {k:"h3", t:"Active and Passive Voice"},
    {k:"p", t:"In the **active voice** the subject performs the action: 'The chef **cooked** the rice.' In the **passive voice** the subject receives it: 'The rice **was cooked** by the chef' — formed with be + the past participle. Use either of them appropriately in speech and writing: the active for directness, the passive when the doer is unknown or unimportant. Classify sentences as active or passive, and construct effective sentences in both voices."},
    {k:"rule"},
    {k:"h3", t:"Writing the Paragraph"},
    {k:"p", t:"An effective paragraph is built of parts. The **topic sentence** states the main idea, usually first; the **body** develops it with supporting details, examples and reasons; the **conclusion** rounds it off or leads on. **Unity** keeps every sentence on the one subject; **coherence** links the sentences in smooth order, with transition words — first, next, however, finally. Read short paragraphs and identify the main idea; develop topic sentences and supporting details from current events, and compose effective paragraphs explicitly stating an opinion."},
    {k:"rule"},
    {k:"h3", t:"Proofreading"},
    {k:"p", t:"**Proofreading** is checking finished writing for correctness. Hunt for: the **mechanics of grammar** — agreement of subject and verb, tense, pronoun case; **misspelled words**; **grammatical errors** such as **run-on sentences** (two sentences run together with only a comma or nothing) and **sentence fragments** (a piece of a sentence punctuated as one); **shifts in pronouns** — wandering from 'they' to 'you' or from 'one' to 'we'; and faults of **capitalization** and **abbreviation** — the capital for proper nouns and beginnings, the full stop and space in abbreviations. Apply proper mechanics to write sentences effectively, and correct a passage of every fault above."},
    {k:"h3", t:"Active to Passive — the Five Movements"},
    {k:"num", items:[
      "Move the OBJECT of the active verb into the subject seat: 'Musa bought rice' → RICE …",
      "Put the verb **be** into the SAME tense the active verb had: bought (past) → WAS.",
      "Change the main verb to its **past participle** (V3): → bought.",
      "Place the old subject after **by**, in the objective case: → by Musa.",
      "Adjust everything else: the plural subject now needs plural be — 'the traders sold rubber; RUBBER WAS SOLD by the traders'; 'MUSA AND JENNIE were thanked' turns to 'we were thanked by…'. Nothing in the by-phrase may steal the verb's number."
    ]},
    {k:"table", head:["Tense","Active","Passive"], rows:[
      ["present simple","pounds the fufu","is pounded"],
      ["present progressive","is pounding","is being pounded"],
      ["past simple","pounded","was pounded"],
      ["past progressive","was pounding","was being pounded"],
      ["present perfect","has pounded","has been pounded"],
      ["past perfect","had pounded","had been pounded"],
      ["future","will pound","will be pounded"],
      ["modal + V1","must pound","must be pounded"]
    ]},
    {k:"p", t:"Three facts that earn the method marks: the passive keeps the **tense of the verb be**, while the main verb always stands as a past participle (is pounded is present, was pounded past, will be pounded future — the tense rides wholly on be; and was being pounded carries the past progressive through both helpers); verbs of two objects give **two passives** — 'she was given a book' and 'a book was given to her'; and the intransitive **cannot** go passive at all — there is no object to promote, so 'the accident was happened' is impossible. Use the passive when the **doer is unknown, obvious or unimportant** ('the shop was robbed'; 'he is well known'), when the **receiver must be the topic** ('the bridge was completed in 2022'), in **scientific and formal instruction** ('the mixture was heated'), and for **tact** ('a mistake was made'). Avoid it when the doer matters: 'five pupils were chased away by the principal's brother' hides nothing — say plainly 'the principal's brother chased away five pupils', and keep the story moving with active verbs."},
    {k:"h3", t:"Proper Verb Usage — the Standing Six"},
    {k:"bul", items:[
      "**The subjunctive** still lives in wishes and demands: 'if I **were** rich' (not was, in the that-clause of wishing); 'I demand that he **come** at once' (base form); 'God **save** Liberia'; 'as it **were**'.",
      "**shall / will**: shall offers and simple futurity with I and we (formal: 'I shall be glad'); will for willingness and promise with all persons; in questions shall I / shall we ask leave and propose.",
      "**ought to, used to, had rather**: 'you OUGHT TO apologise' (ought keeps its to); 'she USED TO sell pepper' — a past habit — but 'she IS USED TO selling pepper' means accustomed to it, the preposition taking the gerund; 'I had rather stay than fight' (bare infinitives).",
      "**dare and need** as semi-modals in the negative and question: 'he DARES not speak'; 'need she GO?' — but the ordinary verb forms are also correct: 'she doesn't need to go.'",
      "**may / might / can / could** in wishes and purpose: 'MAY you succeed'; 'I study so that I MAY pass' — and never 'can' for permission in the formal sentence: 'may I go?'",
      "**do, does, did** carry the question and the negative only — 'he did NOT go', never 'did not went' — and the emphasis 'I DID do it.'"
    ]},
    {k:"h3", t:"The Paragraph — Architecture"},
    {k:"p", t:"A paragraph is **one idea, fully worked**: the **topic sentence** states it (and carries the **controlling idea** — what about it), the **supporting sentences** prove it with fact, example, reason, quotation or narrative detail, and the **concluding sentence** rounds it off or turns toward the next idea. The two marks examiners award on paragraphs are **unity** (nothing in that strays from the topic sentence) and **coherence** (the sentences hold hands). The hands are: the order of time or importance; **transitions** (first, then, again, however, therefore, finally); reference (this plan, that day, the same trouble); and repetition of the key word."},
    {k:"table", head:["If the job is…","Build the paragraph by…","Signal words"], rows:[
      ["telling a story","time order, event on event","first, then, soon, at last"],
      ["describing a scene","spatial order, near to far; the chosen senses","beside, behind, above, at the far end"],
      ["giving information","definition, then facts and figures","namely, for example, that is"],
      ["proving a point","claim, reason, evidence, tie-back","because, since, for instance, thus"],
      ["comparing","block or point-by-point","like, unlike, whereas, similarly"],
      ["explaining consequences","the cause, then each effect in turn","as a result, consequently, therefore"]
    ]},
    {k:"h3", t:"Proofreading — the Order of the Hunt"},
    {k:"num", items:[
      "**Read it aloud, twice.** The ear hears what the eye forgives — the missing he, the verb that never arrived, the sentence that ran across two full stops.",
      "**Hunt by list, not at large**: first subjects and verbs (agreement and tense jumps), then pronouns (antecedent and case), then punctuation (commas at joins, apostrophes, the full stop the run-on sentence needs), then spelling of the same-old words (their/there, received, business).",
      "**Check the top and bottom**: the heading, date, name and closing of a letter; the greeting and farewell of a speech — losses of format marks are avoidable and unforgiven.",
      "**Swap with a classmate for one round.** A fresh eye finds what yours has married itself to.",
      "**Use the marks when you correct**: ^ or ins for insertion, str or ~~through~~ for deletion, sp for spacing, tr for transposed letters, || for a new paragraph, = or cap for a capital. Copy the fair draft only after the marks have died.",
      "**Count what the question demanded**: four sentences, two paragraphs, ten words — a short answer to a long instruction loses on number before meaning."
    ]},
    {k:"h3", t:"The Run-on and Its Four Repairs"},
    {k:"p", t:"Two sentences run together with only a comma or nothing are the most common faults of the second period's script: the **run-on (fused)** sentence ('The bell rang we ran') and the **comma splice** ('The bell rang, we ran'). Four repairs, and any scores: the **full stop** (The bell rang. We ran.); the **semicolon** for closely linked pairs (The bell rang; we ran.); the **coordinating conjunction** with its comma (The bell rang, and we ran.); and **subordination** (After the bell rang, we ran.) The comma may weld lists, but never sentences. A **fragment** is the opposite disease — a dependent clause or a phrase standing alone ('Because the rain fell.'), cured by attaching it to a main clause or completing its thought."},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Change the voice** — active to passive with the tense kept (is pounded, was being pounded, will have been pounded): the marks ride on the be-verb's tense and the V3",
      "**Say why the passive** — supply the by-phrase, or explain that the doer is unknown or unimportant",
      "**Find and fix the run-on** — comma splice or fused sentence: four lawful repairs; fragments: attach or complete",
      "**Shape the paragraph** — pick the topic sentence from four candidates (the one that controls, not merely mentions), then add the missing transition",
      "**The subjunctive and the old helpers** — if I WERE; he DARES not; you OUGHT TO go",
      "**The fair copy** — a paragraph with a given task is marked for the proofread: agreement, punctuation, spelling of the same-old words"
    ]}

  ],

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
  study:[
    /* ---- course text: Semester One, Period III — Verb Usage, Part 3: Essay Writing and Dictionary Skills (guide pp. 18-19) ---- */
    {k:"h3", t:"Using the Tenses in Practice"},
    {k:"p", t:"Practise the tenses in use: the **past continuous** for an action going on in the past — 'At six o'clock I **was reading**'; the **present simple** for what is habitual or always true — 'The sun **rises** in the east'; the **past simple** for a finished action — 'We **visited** the farm last week'; and the **future** with shall and will — 'She **will travel** in May.' Use verbs in these tenses correctly and consistently in speech and writing."},
    {k:"rule"},
    {k:"h3", t:"Writing Essays"},
    {k:"p", t:"**Selecting writing topics**: choose one that is limited enough to cover, worth saying, and fitted to your reader. The **thesis statement** is the central idea of the essay, stated in one sentence in the opening paragraph — every other sentence must serve it. The **organization of the essay** runs introduction, body paragraphs one point at a time, and conclusion. **Unity** keeps every paragraph on the thesis; **coherence** joins them in order; **mechanics** — spelling, punctuation, capitalisation — polish the whole. Identify the thesis statement of an essay and the supporting ideas in each body part that relate to it, then formulate thesis statements on various topics."},
    {k:"rule"},
    {k:"h3", t:"Dictionary Skills"},
    {k:"p", t:"Use the dictionary effectively in defining words. Its keys: **words are arranged in alphabetical order**, letter by letter; the **guide words** at the top of every dictionary page show the first and last entries on that page; the **entry** gives the spelling, the pronunciation, the part or parts of speech, the meanings numbered by sense, and an example. Find a word by its guide words, then read its parts of speech and choose the meaning that fits the sentence."},
    {k:"h3", t:"Using the Tenses in Practice — the Storyteller's Discipline"},
    {k:"p", t:"A narrative is built on one **backbone tense** and moves only when it means to. A past narration tells what happened in the **past simple** ('we LEFT the town at dawn'); the **past progressive** paints the background against which events land ('the sun WAS SHINING, the birds WERE SINGING, when the truck STOPPED'); the **past perfect** steps back to an earlier event before returning ('we HAD TRAVELLED twenty miles; then the tyre burst'). Report and minutes prefer the present perfect for news just in ('the committee HAS approved the site') and the past simple for what is done. A plan or forecast lives in the future. The single worst habit in scripts is the tense drift — 'the woman WAS pounding when a boy COMES in' — and the proofreading pass exists to catch it: underline every verb in the draft, and ask of each, does the clock of the story truly move here?"},
    {k:"h3", t:"The Four Kinds of Essay — One Plan Each"},
    {k:"table", head:["The instruction says…","You must…","Frame"], rows:[
      ["narrate / tell the story of","put events in order with people and a turning point","scene, trouble, climax, outcome, and what it made of you"],
      ["describe","paint with the senses and the particulars","general impression first, then detail near to far"],
      ["explain / give an account of","make a process or a state of affairs clear","definition, causes, workings, effects, example"],
      ["discuss / argue / persuade","weigh and take a side","claim, reasons with proof, answer the objection, restated judgment"]
    ]},
    {k:"p", t:"The command words cut the plan: **relate** asks for a connected story, **give reasons** asks for proof, **compare** demands like-for-like pairs, **state** wants the point plain without decoration, **illustrate** wants an example that carries the idea. Circle the command word and the limits (your own experience; not more than 250 words) before anything else — answering beyond the limit or beside the question is the commonest way an able script fails."},
    {k:"h3", t:"The Essay from Prompt to Fair Copy"},
    {k:"num", items:[
      "**Read the instruction twice**, circle the command word, underline the limits, and say in one line what the finished essay must do.",
      "**Mine for matter** — five minutes of lists: persons, places, causes, examples, quotations, figures; kill nothing at this stage.",
      "**Select and order** — three or four paragraphs, one controlling idea each; write the topic sentences now and test that together they already answer the question.",
      "**Draft** — introduction that states the thesis, the paragraphs in plan order, a conclusion that ends on the judgment, not on a new fact.",
      "**Revise at the paragraph level** — unity, coherence, the transitions, the evidence; a paragraph of two sentences has not been trusted with a job.",
      "**Proofread at the word level** — verbs, pronouns, punctuation, spelling — then copy fair, and keep the plan: an essay is graded as a built thing, not a spilt one."
    ]},
    {k:"h3", t:"The Dictionary Page, Read Aloud"},
    {k:"p", t:"A dictionary entry hands you far more than a meaning. **The guide words** at the top of each page name the first and last entry on it — the alphabetical order they keep is word by LETTER, not by syllable: **car comes before card, card before care, care before caret** (shorter before longer when letters run out), and the entry word is alphabeted ignoring spaces and hyphens. The **syllable points** (dic-tion-ar-y) show where the word falls; the **pronunciation in respelling** (dic-shuh-ner-ee) shows the sounds, with the **accent mark before the stressed syllable**. The **part of speech** (n., v., adj.) tells the kind; the **numbered senses** give the order — usually the oldest or central first; the **example phrase** shows the collocation it lives in; **idioms appear under the main word** (see 'run' for 'run out of'); and **usage labels** (informal, slang, archaic, Brit., U.S.) tell where and when the sense is proper. A thesaurus gives the synonym crowd with a choice to make; a glossary gives the hard words of one book only."},
    {k:"h3", t:"Alphabetical Order — the Librarian's Test"},
    {k:"bul", items:[
      "Compare letter by letter: **fa, far, fare, farm** stand in that order — the shorter word leads when letters run out.",
      "Ignore the space: **post office** is filed P-O-S-T-O (among postman and postage); **passer-by** is alphabeted as passerby, the hyphen dissolved.",
      "Names of persons: surname first (Dadzie, N. Grant — filed under D); titles and prefixes of nobility go as read (most school catalogs file Dr King under K).",
      "Numbers: a dictionary files them as spelt (Twelfth Night under T), a catalog files the word, not the figure.",
      "The catalog itself: **author, title, and subject cards** are three doors into one drawer; the **call number** (Dewey: 000 knowledge, 100 philosophy, 200 religion, 300 society, 400 language, 500 science, 600 craft, 700 arts, 800 literature, 900 history and places) fixes where the book waits on the shelf; the online catalog is the same three doors, typed."
    ]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Choose and justify the tense** — a sentence or short gap with since/yesterday/while/by the time: the mark scheme wants the signal named",
      "**Keep the story in one tense** — repair the drift in a given paragraph (was/walks/came)",
      "**Obey the command word** — narrate against describe against discuss: the same title sets three essays; know what each asks",
      "**Dictionary order** — arrange eight words correctly (care, car, card, caret…); say which came first and why",
      "**The entry's machinery** — guide words, syllables, stress, part of speech, usage labels; identify what each part of a printed entry answers",
      "**The essay plan** — topic sentences for a given title; the examiner can see a plan from the first line of each paragraph"
    ]}

  ],

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
  study:[
    /* ---- course text: Semester Two, Period IV — Vocabulary and Spelling (guide pp. 20-21) ---- */
    {k:"h3", t:"Synonyms, Antonyms and Homophones"},
    {k:"p", t:"**Synonyms** are words of nearly the same meaning — begin, start, commence. **Antonyms** are opposites — generous, stingy. **Homophones** sound alike but differ in spelling and meaning — their/there, peace/piece, flour/flower. **Homographs** are spelled alike but differ in meaning or sound — the wind blows; wind the clock. Discuss each kind with examples, and generate your own lists."},
    {k:"rule"},
    {k:"h3", t:"Prefixes, Roots and Suffixes"},
    {k:"p", t:"A **prefix** is a fixed beginning that changes a word's meaning — **un-** (not), **re-** (again), **dis-** (opposite), **pre-** (before), **mis-** (wrongly). A **suffix** is a fixed ending that changes its kind or meaning — **-ness** makes a noun, **-ful** and **-less** make adjectives, **-ly** makes an adverb, **-er/-or** name the doer. A **root** is the heart of the word carrying the core meaning — **port** (carry) in transport, import, porter; **spect** (look) in inspect, respect. Analyse word parts to arrive at meaning, distinguish a **base word** (a whole English word — play) from a **root** (a core that may not stand alone — port), and write words with prefixes and suffixes, exploring roots as a way to unlock unfamiliar words."},
    {k:"rule"},
    {k:"h3", t:"Using Context Clues"},
    {k:"p", t:"A **context clue** is a hint in the sentence around an unfamiliar word: a definition or restatement, an example, a comparison or a contrast, or the general sense of the passage. 'The soil was **arid**, so dry that nothing grew' — the clause itself defines the word. Use context clues to arrive at word meanings, and take turns constructing sentences that contain them."},
    {k:"rule"},
    {k:"h3", t:"Spelling Rules and Commonly Misspelled Words"},
    {k:"p", t:"Apply the **spelling rules**: i before e except after c — believe, receive; drop the final e before a vowel ending — hope, hoping, but hopeful; double the final consonant after a short vowel — stop, stopping; change y to i before an ending — easy, easier. Review the **commonly misspelled words** for proper spellings — accommodation, beginning, definite, embarrass, necessary, occasion, receive, tomorrow, until, writing — and drill them until they are secure."},
    {k:"h3", t:"Spelling Rules Worth Their Salt"},
    {k:"bul", items:[
      "**i before e except after c** — believe, relief, field, piece; but receive, ceiling, deceit, conceit after the c; the honest exceptions are frequent and must be known: **either, neither, leisure, seize, weird, foreign, ancient**, and their neighbours.",
      "**Double the final consonant** when a stressed final syllable ends in one vowel and one consonant: stop → stopped, big → bigger, refer → referred, begin → beginning. Never when the stress sits earlier: visit → visited, open → opened, travel → travelling (British single l); never after a vowel pair: rain → raining, read → reader.",
      "**Keep the silent e** before -able, -ous and -ing where dropping it would change the sound: courage → courageous, change → changeable, race → racing; drop it elsewhere: love → loving, use → useful, like → likeness. The cut-downs must be memorised: **truly, wholly, duly, judgment, argument** — the e simply vanishes.",
      "**y after a consonant becomes i** before an ending that does not start with i: happy → happier, happy → happiness, carry → carried; but the y stays before -ing and -ish: trying, babyish. Beauty → beauteous is a law unto itself: memorise it.",
      "**Words that end in -able/-ible** follow no rule at all — memorise the two short lists: reasonable, comfortable, preferable, dependable against possible, sensible, visible, terrible, flexible."
    ]},
    {k:"table", head:["Word","The slip that loses the mark","How to keep it"], rows:[
      ["necessary","neccessary, necesary","one C, two S's — a shirt needs sleeves: ne-CE-SS-ary"],
      ["separate","seperate","there is PAR (a container) inside sep-AR-ate"],
      ["receive","recieve","i before e — after the c, e goes first: reCEiVe"],
      ["business","buisness, buisness","busy + ness: BUSY loses its y and no i appears"],
      ["government","goverment","the n of govern stays before -ment"],
      ["privilege","priviledge","there is no a: priviLEGE, twice e"],
      ["definite","definate","fine is inside: defiNE"],
      ["grammar","grammer","both this word and calendar end in -AR: gramMAR, calenDAR; the misspeller writes -er"],
      ["occurrence","occurrence with one c","oc-CUR-RENCE: double c and double r"],
      ["beginning","begining","begin + -ing: double the n: begiN-N-ing"],
      ["calendar","calender","the last syllable is -AR, like grammar"],
      ["cemetery","cemetary","three E's, no a: C-e-m-e-t-e-r-y"]
    ]},
    {k:"table", head:["Homophone","Their own meanings","In a sentence"], rows:[
      ["their / there / they're","possessive / place or filler / they are","THEIR house is over THERE; that's why THEY'RE late"],
      ["to / two / too","direction or infinitive / the number / also, excessively","I came TO see the TWO girls who are TOO small"],
      ["its / it's","possessive / it is or it has","The dog wagged ITS tail; IT'S (it is) rabid"],
      ["peace / piece","quiet, calm / a part of anything","make PEACE; a PIECE of palm oil soap; pass the PEACE pipe"],
      ["principal / principle","head of the school, chief / a rule or belief","the PRINCIPAL is your PAL; a man of PRINCIPLE"],
      ["affect / effect","verb: to influence / noun: the result","the rain AFFECTS the crops; the EFFECT is a thin harvest"],
      ["led / lead","past of lead / the metal (pronounced led)","She LED the song; pipes of LEAD"],
      ["weather / whether","climate / if","in wet WEATHER ask WHETHER to go"],
      ["desert / dessert","to abandon, or the dry land / the sweet course","DESSERT after dinner is sweet; the Sahara is a DESERT"],
      ["aloud / a lot","spoken / many","read it ALOUD; I have A LOT (two words) to do"]
    ]},
    {k:"table", head:["Pair","Rule of the road"], rows:[
      ["borrow / lend","you BORROW FROM, you LEND TO: may I BORROW your pen? I will LEND you mine"],
      ["leave / let","LEAVE = go or make go; LET = allow: LET me go; don't LEAVE me waiting"],
      ["learn / teach","the pupil LEARNS, the master TEACHES: she TAUGHT me to read"],
      ["raise / rise","RAISE takes an object (raise the flag); RISE never does (the sun rises)"],
      ["lay / lie","LAY puts (laid, laid); lie reclines (lay, lain) — the past of lie is lay, the whole trap"],
      ["sit / set","SIT rests (sat); SET places (set) — 'she SET the basket where they SAT'"],
      ["fewer / less","FEWER counts (fewer boys), LESS weighs (less rice)"],
      ["number / amount","the NUMBER of pupils, the AMOUNT of water"],
      ["can / may","CAN ability, MAY permission: MAY I pass?"],
      ["like / as","LIKE + noun (like rain), AS + clause (as it rains)"],
      ["among / between","AMONG more than two, BETWEEN the pair"],
      ["imply / infer","the SPEAKER implies, the HEARER infers","did you IMPLY that I was careless? I INFERRED it from your face"]
    ]},
    {k:"h3", t:"Prefixes, Roots, Suffixes — the Word Machine"},
    {k:"table", head:["Piece","Carries","Unpacks as"], rows:[
      ["un- / in- / im- / il- / ir-","not","unable, indecent, impossible, illegal, irresponsible"],
      ["re-","again","rewrite, rebuild, return"],
      ["pre- / fore-","before","preview, forecast; post- = after: postwar"],
      ["dis- / mis-","apart, wrong","disagree, misjudge"],
      ["over- / under-","too much / too little","overcook, underpaid"],
      ["inter- / sub- / trans-","between / under / across","interstate, subway, transport"],
      ["-tion / -sion","act or state of","narration, permission"],
      ["-ment / -ness / -ship / -hood","state or action","agreement, kindness, friendship, childhood"],
      ["-er / -or / -ist","one who","farmer, actor, pianist"],
      ["-ful / -less / -able / -ive / -ous","full of / without / able / tending / full of (adj.)","helpful, careless, eatable, active, famous"],
      ["scrib / script","write","describe, manuscript"],
      ["port","carry","transport, import, porter"],
      ["vis","see","visible, visit, supervise"],
      ["dict","say","dictate, predict, dictionary"]
    ]},
    {k:"p", t:"The last three rows are **roots**: Latin and Greek seeds from which whole families grow. When a strange word arrives in a passage, take it apart before you guess — **in-visibility** = not (in-) + see (vis) + being able to (-ible) + state (-ity): the state of not being able to be seen. Context then decides which sense the sentence wants."},
    {k:"h3", t:"Context Clues — the Five Give-Aways"},
    {k:"bul", items:[
      "**Definition in the sentence** — 'Laterite, a red iron-rich soil, cakes in the sun.' The comma did the work; examiners love it.",
      "**Restatement** — 'the toll, that is, the money for using the road', signalled by that is, in other words, or a dash.",
      "**Example list** — 'legumes such as beans and groundnut keep the soil rich' teaches legumes by its members.",
      "**Contrast** — 'unlike her talkative sister, Jennie was reticent' makes reticent mean the opposite of talkative; watch but, however, unlike, on the other hand.",
      "**Cause, consequence and tone** — 'the torrential rain washed away two bridges' says torrential was heavy enough to destroy; the whole passage's weather tells you a word's colour even when its dictionary shade stays vague. Never carry one word's meaning to every place: a HARD road is rough, a HARD day is bad, he HARDLY worked is barely."
    ]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Dictation** — the same dozen words every year: necessary, separate, receive, business, government, privilege, definite, grammar, beginning, cemetery",
      "**Choose the homophone** — their/there, peace/piece, principal/principle, affect/effect, led/lead: a blank, two or three spellings, and no mercy",
      "**Correct the misused word** — 'less boys', 'more easier', 'laid down on the bed', 'discuss about', 'laid the book' vs 'lay on the shelf'",
      "**Build the family** — give the noun, verb and adjective of decide, succeed, act, enjoy, invisible",
      "**Prefix or suffix asked for** — the opposite of honest, able, legible, responsible: dishonest, unable, illegible, irresponsible (the negatives double up with the -in- inside: unable, not unabled)",
      "**Meaning from the passage** — supply the sense of a marked word using one of the five clue types, and name the clue"
    ]}

  ],

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
  study:[
    /* ---- course text: Semester Two, Period V — Library Skills and Reading Comprehension (guide pp. 22-23) ---- */
    {k:"h3", t:"Using the Card Catalog and the Online Catalog"},
    {k:"p", t:"The **card catalog** — or the **online catalog (OPAC)** in a modern library — is the index to everything the library holds. Each card or record lists the author, the title, the subject, the place, publisher and date, and above all the **call number**, the shelf address that shows where the book stands. The **information in the catalog**: author and title entries in alphabetical order and subject entries by topic; the **materials in the library** — books, reference works, journals, maps and digital media — each found through the same catalog. Demonstrate the use of the catalog to find materials in the library, and set up a class library with a librarian and a card catalog of poster sheets, role-playing a search."},
    {k:"rule"},
    {k:"h3", t:"Reading Comprehension"},
    {k:"p", t:"Answer two kinds of question from a given text. **Direct questions** are answered straight from the page — who, what, where, when. **Critical thinking questions** ask you to read between and beyond the lines: infer the cause, judge the character, predict the outcome, draw the conclusion. Read passages and provide correct answers to both kinds."},
    {k:"rule"},
    {k:"h3", t:"Active Reading: Before, During and After"},
    {k:"p", t:"**Active reading** engages the reader at every stage: activity **before reading** — survey the title and headings, recall what you already know, ask what you want to find out; activity **when reading** — underline key points, note new words, question the author, summarise section by section; activity **after reading** — retell, answer your questions, and review your notes."},
    {k:"rule"},
    {k:"h3", t:"Scanning, Skimming and the SQ4R Method"},
    {k:"p", t:"**Scanning** searches the page for a particular fact — a name, a date, a figure — moving the eye quickly down the page. **Skimming** moves fast over the whole text to catch the main idea and the shape, reading headings, first and last lines. The **SQ4R method** orders serious study: **Survey** the whole text; **Question** each heading; **Read** for the answers; **Record** the answers in notes; **Recite** them from memory; **Review** them again later. Discuss and explain these reading methods and apply each to passages in class."},
    {k:"h3", t:"Finding a Book — Cards, Call Numbers, Shelves"},
    {k:"p", t:"The catalog is the library's index; the **call number** is the book's address. Under the **Dewey** plan used by most Liberian school libraries the ten classes run 000 knowledge in general, 100 philosophy and psychology, 200 religion, 300 social sciences (so 372 is education, 326 politics), 400 language, 500 pure science (516 mathematics, 523 astronomy, 591 zoology), 600 applied science and crafts (613 health, 641 cookery), 700 arts, 800 literature (810 American, 820 English), 900 history and geography (966 Africa). A number like **966.5 L42** means history of Liberia (966.5) by a writer whose name begins with L. The **author card** tells where a book by a known writer stands; the **title card** a remembered title; the **subject card** what exists on a topic — three doors into one drawer, and the online catalog replaces all three with search fields. Order in every drawer and list: **alphabetical by letter, the shorter word before the longer when letters run out**. Reference works (dictionary, encyclopedia, atlas, almanac, thesaurus, the biography index) live on the open shelf, out of the loan queue — the **encyclopedia** gives the whole field and points to further reading, where the **dictionary** gives the word."},
    {k:"h3", t:"Reading the Question Back into the Passage"},
    {k:"num", items:[
      "**Read the questions first**, then the passage: you then read hunting, and hunting is faster than wandering.",
      "**Number the paragraphs** and match every question to its home paragraph — answers are placed, not floating.",
      "**Answer on the passage's own evidence**: quote or paraphrase the exact words; where 'in your own words' appears, rebuild the sense without reusing any phrase of three words or more.",
      "**Mind the instruction verbs** — 'find a word meaning…' wants ONE word from the passage, and the part of speech must match; 'what does the writer mean by…' wants the sense HERE, not in general.",
      "**Reference questions** ('to what does THIS refer?') are answered by looking both ways — as a rule the thing already named, not the thing coming next.",
      "**Title the passage last**: a good title names the subject and the writer's angle, in five or six words."
    ]},
    {k:"h3", t:"Skimming and Scanning — Two Different Speeds"},
    {k:"table", head:["Skill","You move…","To get","Practice task"], rows:[
      ["skimming","fast over all of it","the gist; which paragraph says what","read a news page in three minutes and give each item its one line"],
      ["scanning","fast to ONE fixed mark","a date, a name, a figure, a word","find 1943, or 'Buchanan', or the word 'tariff', in the same page"],
      ["close reading","slowly, line by line","meaning, tone, the writer's moves","dictionary the unknown words; restate each paragraph"],
      ["study reading","in cycles","retention for the test","the SQ4R below once, then again the next day"]
    ]},
    {k:"h3", t:"SQ4R — the Full Cycle"},
    {k:"bul", items:[
      "**Survey** — title, headings, pictures, the first and last lines: what is this going to tell me?",
      "**Question** — turn each heading into a question and keep it open; the page is now an answer.",
      "**Read** — to answer your question, at study speed, marking whatever serves it.",
      "**Recite** — close the book and say or write the answer; what cannot be recited has not been read.",
      "**Record** — notes in your own words under the heading, names and figures copied exact.",
      "**Review** — the same day, then a week later; five minutes each time keeps a term's work alive for the examination."
    ]},
    {k:"h3", t:"Reading the Lines Behind the Lines"},
    {k:"p", t:"The last questions of a good comprehension are the thinking ones: the writer's **purpose** (to inform, persuade, entertain, warn), the **tone** (angry, amused, respectful, fearful) and the **audience** — all three read from the same signs: the adjectives chosen ('a *thick* crowd' against 'a *gathered* crowd'), the modal verbs ('we *must* act' is persuasion), the question the writer does not answer, and the loaded words behind the answer key's favourite label, **implication**: 'the minister *promised* to rebuild' hints that the rebuilding has not begun. The facts answer *what*; the word-choice answers *why*."},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**The reference work to choose** — atlas for the map, almanac for the year's figures, thesaurus for the synonym, encyclopedia for the overview, dictionary for the spelling: the question hands you a task, you name the shelf",
      "**Alphabet and call-number order** — which book comes first on the shelf, and what does a 966.5 promise",
      "**Scanning or skimming** — name the right speed for the given task (find the score in a results page: scanning)",
      "**The one-word find** — 'in the passage, find a word which means X': match the part of speech the blank requires",
      "**The short answer** — one sentence resting on its own evidence; quote for 'according to the writer', recast for 'in your own words'",
      "**Purpose, tone, audience** — each with one quotation as proof; never 'to make us think'"
    ]}

  ],

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
  study:[
    /* ---- course text: Semester Two, Period VI — Letter, Speech and Report Writing (guide pp. 24-25) ---- */
    {k:"h3", t:"Informal Letters"},
    {k:"p", t:"The **informal letter** goes to someone you know well — family or friend. Its five parts: the **writer's address and date** at the top right; the **salutation** — Dear Mama, Dear Kwi; the **body** in a friendly, conversational tone, one topic to a paragraph; the **closing** — Yours sincerely, Your son, With love; and the **signature**. Language may be warm and free, but spelling and punctuation still stand."},
    {k:"rule"},
    {k:"h3", t:"Formal and Business Letters"},
    {k:"p", t:"The **formal/business letter** goes to an official, a firm or a stranger, and its language is polite and exact. Its parts: the **sender's address** and date; the **receiver's address**; the **salutation** — Dear Sir/Madam, Dear Mr Doe; the **body**, brief and to the point, stating your business in the first paragraph; the **closing** — Yours faithfully when no name is used, Yours sincerely when it is; and the **signature and full name**. Among its kinds: the **letter of application**, which applies for a job — state the post sought, your qualifications, your experience, your referees; and the **letters of excuse, request and thanks** — state the matter at once, give the reason or request plainly, and close courteously. Construct each kind in groups."},
    {k:"rule"},
    {k:"h3", t:"Speech Writing"},
    {k:"p", t:"A **speech** is written to be heard. It opens with a greeting to the audience; states its subject early; develops two or three points in plain, forceful language, with examples they know; and closes with a short, memorable call. Write speeches on set topics, then deliver them for critical evaluation."},
    {k:"rule"},
    {k:"h3", t:"Report Writing, Oral Reading and Listening"},
    {k:"p", t:"A **report** records an event, a visit or an investigation: its title, its date and place, its findings arranged under headings, its conclusion and any recommendation — all in the formal, impersonal style. Practise **oral reading and speaking** — clear voice, steady pace, eye contact — and **listening to speeches**, noting the main points and judging the delivery. Give **oral presentations for critical evaluation**, offering and receiving comment with respect."},
    {k:"h3", t:"The Five Parts of a Letter, and What Each Must Carry"},
    {k:"table", head:["Part","Sits where","Carries","Traps"], rows:[
      ["Heading","top right","writer's address, then the date (12 June 2026 — never 12/6/26)","town and date are joined by a comma; smallest place first; no full stops inside the address lines"],
      ["Salutation","left, below the heading","Dear Mr Dadzie; Dear Sir; My dear Aunt Jene","a name gets a name (never Dear Sir to your uncle); comma after it"],
      ["Body","the letter's middle","one subject per paragraph; the point FIRST, then the reason, then the ask","no slang and no contractions in the formal letter; no 'urgent' shouting in caps in either"],
      ["Subscription","lower right","Yours sincerely (a name was used); Yours faithfully (Dear Sir); yours affectionately (kin and friends)","comma after it, and capital on Yours only"],
      ["Signature","under the subscription","full name; title if the letter is official","post-nominals and designation of office belong to the signature, not the salutation"]
    ]},
    {k:"p", t:"The two courtesies that decide the salutation and the close together: **name the person you are writing to — Dear Mr Kollie — and end Yours sincerely**; **do not know the name — Dear Sir/Madam — and end Yours faithfully.** The **informal letter** adds the personal greeting and the family news, allows contractions and exclamations, and closes yours lovingly or with thanks; the **formal letter** opens with its business in the first sentence ('I write to apply for the post of…'), keeps one matter per paragraph, asks clearly for what it wants, and ends with the thanks owed in advance ('I shall be grateful for an early reply') before the subscription. The **business letter** adds the block above the salutation: the inside address of the person written to, and the **subject line** (your Ref/our Ref if trading). No letter, friendly or stiff, should leave a question the reader cannot answer: who writes, what is wanted, by when."},
    {k:"h3", t:"The Application Letter — the WASSCE Favourite"},
    {k:"num", items:[
      "Heading and inside address: your address and date top right; the Managing Director / the Principal's full address at the left.",
      "Salutation: Dear Sir (unknown name) — so, Yours faithfully at the end.",
      "**State the post sought at once**: 'I wish to apply for the post of clerk advertised in the Daily Observer of 3 June.' The post, the source, the date — three facts in one sentence.",
      "Age, school, WASSCE subjects and results, any certificate or training — figures and dates, not adjectives.",
      "Experience and qualities PROVEN: 'I kept the accounts of my father's store for two years', not 'I am honest and hardworking' alone.",
      "Availability ('I may be interviewed at any time from…') and the enclosures listed (copies of certificates).",
      "One paragraph of polite close asking for consideration; subscription, signature, full name. And no begging: the application states what it offers."
    ]},
    {k:"h3", t:"The Speech — Writing for the Ear"},
    {k:"p", t:"A speech is heard once, so it must be **built to be caught**: the **introduction** greets the platform (Mr Chairman, the Principal, teachers, and fellow students), names the motion, and takes its side within three sentences; the **body** gives three arguments at most, each with its example, and each signed off — 'that is why I say…'; the **conclusion** returns to the greeting's order (I thank the impartial timekeeper…) and ends on the restated claim. The ear's tools: the **short sentence**; **repetition** of the key phrase (I have a dream…); the **triad** (we need food, work and schools); the **rhetorical question** (can a child study on an empty stomach?); the **contrast pair** (not punishment but patience). The delivery's tools, marked in oral exams: **eye** over the room not the paper, **volume** that reaches the back bench, **pace** slowed at the commas, **pause** after the point, standing **posture**, and the page turned before the sentence ends — never turn your back, never read the whole speech aloud."},
    {k:"h3", t:"The Report — What, When, Where, How, Why, Who"},
    {k:"bul", items:[
      "The opening sentence carries the **first three questions** — what happened, when, where: 'A fire destroyed the Grade 9 block of St Peters High School on Tuesday morning.' The rest answers **how** and **why**, and the **who** of witnesses and officials.",
      "The order is the reader's need, not the event's: **most important first**, details after; a fire report names the loss before the weather.",
      "The **third person and the past tense** tell the finished event ('the cause was traced'); present perfect carries the still-unfolding ('two classes have been moved'); direct quotes breathe in short doses.",
      "Matter, not style: figures, names, times; no exclamation, no adjectives the police could not verify.",
      "The head gives the story its first line: a title (THE MARKET FIRE) or a dateline (BUCHANAN, 5 May).",
      "Types you will be asked for: the **news report**, the **match report**, the **meeting report** (with the resolutions), the **trip/field report** (what was seen, learned, recommended) — all six questions, all the same discipline."
    ]},
    {k:"h3", t:"Oral Reading, Listening, and the Two Together"},
    {k:"p", t:"**Oral reading** is marked on **pronunciation** (the final -s, the -ed endings: pounds, liked, needed), **stress** (reCORD vs REcord), **punctuation kept as pause** (a comma half-breath, a full stop a whole one), **speed held steady**, and **tone matched to the sense** (the question rises, the warning slows). **Listening** has its own grades in the viva: listen **for detail** (the figures in a weather bulletin), **for reasoning** (the argument in a debate), and **to evaluate** (is the evidence enough?); the listener's habits — stop the talking inside and wait, note the two or three figures as they pass, question the speaker not the person, and ask the clarifying question at the gap, not in the middle — are the same habits the comprehension paper tests on paper."},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Write the letter the task names** — friend, editor, principal, or the application: the register, the salutation-close pair (Dear Sir — Yours faithfully), and the first sentence that states the post sought are the marked three",
      "**Correct the letter's mechanics** — date and address order, the comma after the salutation and subscription, no contractions in the formal one",
      "**The report of the school event** — six questions in the first paragraph; past tense; third person; no decoration",
      "**The speech on the given motion** — the greeting, the position at once, three arguments with proof, the return at the end",
      "**Pronunciation of the passage read aloud** — the -ed and -s endings, the word stress, the pause at the punctuation",
      "**The listening or oral-viva question** — state the detail you caught and what the speaker argued; answer at the length asked"
    ]}

  ],

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
  study:[
    /* ---- course text: Semester One, Period I — The Three Cases of Pronouns and Perfect Tenses; Speeches and Summary (guide pp. 26-27) ---- */
    {k:"h3", t:"The Three Cases of Pronouns"},
    {k:"p", t:"Every personal pronoun stands in one of three **cases**. The **nominative (subjective) case** — I, we, he, she, they, who — is used as the subject of a verb or after a linking verb: '**She** won the prize'; 'It was **he**.' The **objective case** — me, us, him, her, them, whom — is used as the object of a verb or of a preposition: 'The teacher praised **her**'; 'Give the book to **me**.' The **possessive case** — my, mine, our, ours, his, her, hers, their, theirs, whose — shows ownership: '**Her** book; the book is **hers**.' Differentiate the three cases, provide examples, and use each correctly — never 'between you and I', but 'between you and me'."},
    {k:"rule"},
    {k:"h3", t:"Verb Usage: the Perfect Tenses and their Progressives"},
    {k:"p", t:"In a contrived scenario, use the appropriate tense. The **present perfect** — 'She **has finished** the test' — links past action to the present. The **present perfect progressive** — 'He **has been farming** since dawn' — for an action begun in the past and still going on. The **past perfect** — 'The train **had gone** before we reached the station' — the earlier of two past actions. The **past perfect progressive** — 'They **had been waiting** for an hour when the bus came.' The **future perfect** — 'By June we **shall have completed** the syllabus.' The **future perfect progressive** — 'By then she **will have been teaching** for twenty years.' Construct speeches and compositions using the perfect tenses correctly."},
    {k:"rule"},
    {k:"h3", t:"Speeches: Kinds, Writing and Delivery"},
    {k:"p", t:"Recognise the different **kinds of speeches** and their identifying characteristics: the **informative** speech explains; the **persuasive** speech urges; the **entertaining** speech amuses; the **extemporaneous** speech is prepared in outline and delivered from notes. Read one of each kind and say what marks it. Then develop and present speeches regularly on socio-economic issues, risky behaviours, teenage pregnancy, drug and alcohol abuse, and gender-based violence."},
    {k:"rule"},
    {k:"h3", t:"Summary Writing"},
    {k:"p", t:"A **summary** gives the main ideas of a passage in your own words, in far fewer words, keeping the original sense and order. Method: read the passage through; find the topic sentence of each paragraph; strip away examples, repetitions and detail; write the essentials in your own words; and check that nothing important is lost and nothing added. Read given texts and summarise them."},
    {k:"h3", t:"The Three Cases, Drill and Proof"},
    {k:"p", t:"Cases are positions in the sentence wearing different clothes: **nominative (subjective)**, **possessive (genitive)**, **objective**. The drill that ends the guessing: **strip the sentence to its spine.** 'The principal thanked **the boys and me**' — remove the join, test each alone: *thanked the boys* ✓, *thanked I* ✗ — so thanked **me**. The reverse check works the same: '**She and he** signed the petition' — *he signed* ✓, *him signed* ✗, so **he and she**. After **than** and **as** the case follows from the verb the clause hides: 'Musu is taller than **I**' (than I [am]); 'the teacher praised Musu more than **me**' (than [he praised] me) — the two are not interchangeable, and the objective is the safe everyday form the mark schemes accept. Who/whom: whom only when it can answer with **him** — 'the man WHOM we met' (we met him); 'the woman WHO met us' (she met us). 'It is **I**' is the formal key, 'it's me' the spoken truth — say which register you are writing."},
    {k:"h3", t:"The Perfect Tenses Applied — the Four Questions"},
    {k:"num", items:[
      "**Is the time word finished or open?** yesterday, last year, in 2019 → past simple; today, this week, since, for → present perfect ('I have seen him TODAY' but 'I saw him YESTERDAY').",
      "**Are there two pasts?** The earlier one takes the past perfect — 'by the time we reached the field, the match had begun'; if after/before already fix the order, simple past twice is clean.",
      "**How far does the state run?** had been + -ing counts the duration before a past mark — 'she had been cooking since dawn when the power failed'.",
      "**What does a future deadline see?** by Friday, by next June → future perfect — 'by June we shall have covered the whole guide'."
    ]},
    {k:"p", t:"One trap worth its own drill: **no finished-time word with has/have** — 'he has died last year' is impossible (a death done yesterday belongs to the past simple: **he died last year**). And **gone against been**: 'she has GONE to Ganta' (she is there or on the road) against 'she has BEEN to Ganta' (she went and came back) — the objective test loves exactly this pair."},
    {k:"h3", t:"The Speech Kinds and Their Shapes"},
    {k:"table", head:["Kind","Its one job","Its shape","Its danger"], rows:[
      ["informative","make a subject clear","define, describe, illustrate, summarise","loving the detail more than the listener"],
      ["persuasive","move the listener to act or believe","claim, proofs, answer the objection, call","anger without evidence"],
      ["special occasion (tribute)","honour a person or event","the story that shows the quality","generality: praise must name a deed"],
      ["after-dinner / entertaining","delight the room","short anecdotes, the gentle joke, the quick landing","the joke that needs a footnote"],
      ["debate speech","win the motion on the floor","greet, take the side, three arguments, rebut, close","reading the paper instead of meeting the room"]
    ]},
    {k:"h3", t:"Summary Writing — Cut It to the Bone"},
    {k:"num", items:[
      "**Find the thread**: ask of each paragraph — what did it ADD to the story or argument? Discard example, quotation, figure, description and every repeated point; keep the skeleton.",
      "**Count the words the passage carries** and the limit you must reach; the usual ratio is a third. That ratio is your cutting budget before you write a line.",
      "**Write in your own words**, in **one paragraph**, in the **third person and the present or past tense the passage used** — no 'the writer says', no direct speech, no 'I'.",
      "**Join with subordination** — because, when, after, so that — so the points ride one sentence where the passage needed three.",
      "**Check against the source**: every point of the skeleton present, nothing added, the word limit honoured, and it reads as a whole piece even if the original never did."
    ]},
    {k:"p", t:"The marks in a summary go to **coverage and compression, not style**: a grader counts the points kept and counts the words over. Two habits protect both: write the point-list first, then only the sentences; and never copy a whole sentence of the passage — a lifted line is a point not rewritten and, on many keys, not counted."},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Case in the blank** — 'between you and (I/me)'; 'who(m) did they name'; '(She/Her) and I went': the spine-test wins",
      "**Since/for, gone/been, died/has died** — the three little traps of the perfect tenses, each in a sentence of its own",
      "**Two pasts in one sentence** — put the past perfect on the earlier action; or explain why after/before lets simple past stand",
      "**The summary of 300 words in 100** — points, not prose; one paragraph, third person, own words",
      "**A speech for the named occasion** — greeting, position, three supported points, the close: the format is on the mark scheme before the English is",
      "**Error-spotting across a paragraph** — case, agreement, tense, apostrophe: the paper's own mix, at paper's own speed"
    ]}

  ],

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
  study:[
    /* ---- course text: Semester One, Period II — Poem, Prose, Drama and Review of Verb Usage (guide pp. 28-29) ---- */
    {k:"h3", t:"Review of Essay Writing"},
    {k:"p", t:"Recall the essay: a clear thesis in the opening, body paragraphs one point at a time, a conclusion that gathers the argument — all in unity, coherence and correct mechanics. Review your own past essays against that measure and repair them."},
    {k:"rule"},
    {k:"h3", t:"Creative Writing: Poem, Story and Drama"},
    {k:"p", t:"Create an **original work of art**. The **poem** is written in lines and stanzas, with imagery, rhythm and often rhyme — say something true in words that sing. The **short story** narrates imagined events through character, setting and plot. The **drama** is written in dialogue and stage directions to be acted — the script gives each character words to speak and the stage directions tell what is seen and done. Working in groups, write poems, plays or short stories using imagination and creativity, and read them to the class."},
    {k:"rule"},
    {k:"h3", t:"Review of Verb Usage: the Principal Parts and Six Tenses"},
    {k:"p", t:"Review the **five forms (principal parts) of a verb** — base (start), s-form (starts), ing-form (starting), past (started), past participle (has/have started) — and gain more practice in using the tenses: **present simple, past simple, future simple, present perfect, past perfect, future perfect**. In groups, drill the parts and tenses until each is automatic in writing."},
    {k:"h3", t:"How a Poem Works"},
    {k:"p", t:"A poem says its one thing **in words that do double work**: besides the sense, each line carries **sound** and **shape**. The machinery: the **line** (a poem is read by lines, so where one ends is a choice); the **stanza**, the verse paragraph; **rhythm**, the beat of stressed and unstressed syllables, counted or free; **rhyme** and its **scheme** (AABB for the couplet hymn of praise, ABAB for the alternating ballad, and none at all in **free verse**, which keeps the rhythm and drops the ending-sounds); the **turn** (the point, usually near the end, where the poem swings from picture to meaning); and the **title**, the first words and sometimes the last."},
    {k:"table", head:["Device","It does this","Example (for the local ear)"], rows:[
      ["simile","compares with like or as","'the river runs LIKE a tired man after rain'"],
      ["metaphor","says one thing IS another","'the night is a black wrapper over Bomi'"],
      ["personification","gives the lifeless human acts","'the wind POUNDED the zinc roof all night'"],
      ["hyperbole","deliberate overstatement for effect","'I have told you a thousand times'"],
      ["understatement","softening for the same effect","'the harmattan is a little dry'"],
      ["irony","the words mean the opposite of the situation","'fine weather!' said the farmer as the yam rotted"],
      ["apostrophe","speaking to the absent or dead","'O death, where is thy sting?'"],
      ["alliteration","repeated opening sounds","'the DRY DUST of the harmattan road'"],
      ["assonance","repeated vowel sounds within","'the grOAN of the mOrtar and stOne'"],
      ["onomatopoeia","the word sounds the thing","crash, patter, buzz, splash"]
    ]},
    {k:"h3", t:"Reading a Poem — the Procedure"},
    {k:"num", items:[
      "Read it twice: once for the ear, once with a pencil — mark what you cannot see.",
      "Paraphrase stanza by stanza in plain prose: what is actually happening, to whom, where.",
      "Ask **who speaks** (the poet is not the speaker): a child, an old man, a river, a mourner.",
      "Name the **mood** (grief, pride, playfulness) and find the two words that carry it.",
      "Find the **imagery**: which figure of speech does the most work, and what does it make you see?",
      "Locate the **turn** and say what changed — then the **theme** in one sentence: not the subject (a fishing town) but what the poem says about it (the sea feeds and starves).",
      "Judge: which single line would you keep if the poem were cut in half? Defend the choice."
    ]},
    {k:"h3", t:"Writing the Poem, the Story, the Play Scene"},
    {k:"bul", items:[
      "**The poem** starts from one moment, not a subject: the morning the market burned, a name called across a yard. Fix the picture first — two senses minimum — then choose its music: a rhyme you can land, or free lines whose rhythm you can keep by reading aloud.",
      "**The lyric** is the short personal song-mood poem; the **narrative poem** and the **ballad** tell a story in verse; the **dirge** mourns, the **praise song** honours, the **ode** addresses its subject with ceremony; the **didactic** poem teaches and must not forget to be a poem.",
      "**The short story** keeps to one effect: a single trouble, a small cast, a setting you could draw, a turn where the fight changes shape, and an ending the reader could see but did not. Narrate in the **first person** for intimacy ('I was fourteen…') or **third person** for range; a **flashback** may carry the past into the present action but must leave its rails visible.",
      "**The play scene** speaks only through **dialogue** and **stage directions**: every line either pushes the action or reveals the character; the **soliloquy** lets a figure think aloud; the **aside** trusts the audience with a secret; entrances and exits do the work a novelist does with description; conflict on the stage must be **seen to rise in three beats** — meet, clash, break.",
        "After any draft: read it aloud ONCE with the ear of a stranger, and cut the first sentence of every paragraph — the writing usually begins at the second."
    ]},
    {k:"h3", t:"Prose — the Kinds and the Tools"},
    {k:"p", t:"**Prose** is writing in sentences and paragraphs rather than lines: **fiction** (the novel and the short story — imagined) and **non-fiction** (essay, biography, autobiography, travel, report — the world told truly). A **novel** is long, wide in cast and time, with side plots; a **short story** is one plot, one effect, no room to spare — which is why the story's first line and the tale's ending are the whole of its craft. The **point of view** decides what the reader may know: **first person** (I) is intimate but blind beyond the speaker; **third person limited** lives inside one head; **third person omniscient** sees all heads and times; and the choice, like the tense, is a promise — break it once and the reader's trust is broken with it. Theme is the sentence the plot proves; plot is the theme in action."},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Identify the figure of speech** in a quoted line and say what it does — imagery, rhythm and often rhyme are named in the instruction; name the device and its effect, not one without the other",
      "**Scan the poem's music** — mark the rhyme scheme; count the beats in a line; say whether it is free verse",
      "**The speaker and the tone** — who is speaking, to whom, in what feeling; answer with two supporting words",
      "**Turn the poem to prose** — a stanza paraphrased into plain sentences is a standing objective-paper task",
      "**Write the short story or the play scene** on the given situation — one effect kept; dialogue that carries the plot; the stage directions punctuated correctly",
      "**Essay as review** — a book or play review keeps the essay's frame (thesis, evidence, judgment) and adds the record line: title, author, publisher, year"
    ]}

  ],

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
  study:[
    /* ---- course text: Semester One, Period III — Phrasal Verbs, Common Mistakes and Past WASSCE Papers (guide pp. 30-31) ---- */
    {k:"h3", t:"Review of Phrasal Verbs"},
    {k:"p", t:"A **phrasal verb** is a verb plus a particle with a meaning of its own: **give up** (surrender), **put off** (postpone), **look into** (investigate), **carry on** (continue), **turn down** (refuse), **run out of** (use up). Construct compositions using proper phrasal verbs, and beware the ones whose meaning cannot be guessed — learn each as one item."},
    {k:"rule"},
    {k:"h3", t:"Review of Common Mistakes and Troublesome Words"},
    {k:"p", t:"Discuss and review **troublesome words and common mistakes** — the pairs writers confuse: its/it's; their/there/they're; to/too/two; than/then; affect/effect; accept/except; advice/advise; principal/principle; stationary/stationery; lose/loose. Behind them lie the classic errors: 'he don't' for 'he doesn't'; 'I have seen him yesterday' for 'I saw him yesterday'; double negatives — 'I don't know nothing'; 'between you and I' for 'between you and me'. Demonstrate the correct use of words to avoid common mistakes in speech and writing."},
    {k:"rule"},
    {k:"h3", t:"Review of Past WASSCE Papers"},
    {k:"p", t:"Review **past WASSCE papers** in preparation for public test taking: answer the objective items against the clock; plan and write the essay in the required form; and take the comprehension and cloze sections with close attention. Assign time to each section in proportion to its marks, and mark your own work against the examiner's report."},
    {k:"rule"},
    {k:"h3", t:"Speech Development, Oral Practice and Test Tips"},
    {k:"p", t:"Continue **speech development and oral practice**: write speeches and present them in the classroom for critical evaluation — voice, pace, contact, argument. Tips for taking public tests: read every instruction twice; answer the questions asked, not the ones you hoped for; budget the time; attempt every question; leave minutes to check the paper through."},
    {k:"h3", t:"The Phrasal Verbs the Papers Keep"},
    {k:"table", head:["Phrasal verb","One-word verb it equals","Example"], rows:[
      ["break down","stop working; collapse","The lorry BROKE DOWN at the bridge; the talks BROKE DOWN"],
      ["bring about","cause","The rains BROUGHT ABOUT the flood"],
      ["call on","visit briefly; invite to speak","The teacher CALLED ON me for the answer"],
      ["carry out","perform, execute","CARRY OUT the instructions in order"],
      ["come across","find by chance","I CAME ACROSS the letter in the old chest"],
      ["count on","rely on","You can COUNT ON Musu"],
      ["cut down on","reduce","We CUT DOWN ON sugar"],
      ["do away with","abolish","The school DID AWAY WITH caning"],
      ["end up","finish in a state","We ENDED UP walking home"],
      ["get along with","live on friendly terms","She GETS ALONG WITH her roommates"],
      ["keep up with","stay level with","Keep UP WITH the lesson, not the gossip"],
      ["look down on","despise","No one should LOOK DOWN ON the poor"],
      ["look up to","admire","Every pupil LOOKS UP TO the principal"],
      ["make up for","compensate","He worked twice to MAKE UP FOR the lost day"],
      ["put forward","propose","She PUT FORWARD a new plan"],
      ["run into","meet by chance","I RAN INTO my form teacher in Ganta"],
      ["stand for","represent","ECOWAS STANDS FOR the West African community"],
      ["take over","assume control","The new manager TOOK OVER in April"],
      ["turn up","arrive; appear","He TURNED UP an hour late"],
      ["wear out","become unusable","The shoes WORE OUT before term end"]
    ]},
    {k:"p", t:"Two grammar laws ride with the list. **When the little word is an adverb particle, a short object may sit inside and a pronoun MUST**: turn the light on, turn it on — never turn on it. **When the little word is a true preposition it keeps its object close**: look after the baby, look after her — never look the baby after. Some verbs take both coats with different fits: **put on your shoes** (on = particle: put them on) against **put on the table** (on = preposition: put them on the table). And the participle after the verb keeps its own government: **look forward to** takes the -ing form — 'I look forward to SEEING you', the fixed preposition after the whole phrase, never 'to see you' after this particular pair."},
    {k:"h3", t:"Troublesome Words — the Final Check"},
    {k:"table", head:["Pair","Rule","Correct"], rows:[
      ["affect / effect","AFFECT is the verb (influence); EFFECT is the noun (result), or the verb 'to bring about'","The rain AFFECTED the crop; the EFFECT was famine; the chief EFFECTED change"],
      ["amount / number","AMOUNT for what you weigh, NUMBER for what you count","a large AMOUNT of rice; a small NUMBER of pupils"],
      ["less / fewer","FEWER counts","FEWER traders came this year"],
      ["due to / because of","DUE TO follows a linking verb (attributed to); BECAUSE OF joins clauses","The delay was DUE TO rain; we waited BECAUSE OF the rain"],
      ["data","formally plural, often treated as singular mass","the DATA SHOW (school grammar) / the data is in — answer as the paper asks"],
      ["farther / further","FARTHER for distance, FURTHER for more of anything","we walked FARTHER; FURTHER discussion"],
      ["flaunt / flout","FLAUNT shows off; FLOUT disobeys openly","he FLAUNTED his medal; they FLOUTED the rule"],
      ["lie / lay","LIE reclines (lay, lain); LAY puts down (laid, laid)","she LAID the pen down; she LAY awake; she has LAIN there"],
      ["that / which","THAT defines (no comma); WHICH adds (with comma)","the road THAT we built; the road, WHICH we built, is open"],
      ["who / whom","WHOM when the pronoun is an object","the man WHOM we asked; the boy WHO asked"],
      ["stationary / stationery","stationARY = still; stationERY = pens and paper","the STATIONERY shop sells paper; the STATIONARY bicycle stays parked"],
      ["each other / one another","EACH OTHER for two, ONE ANOTHER for more","the twins helped EACH OTHER; the class helped ONE ANOTHER"]
    ]},
    {k:"h3", t:"The Common Mistakes — One Line Each, to End Them"},
    {k:"bul", items:[
      "**Double negative** — 'I did not see nothing' says the opposite: NO / ANY, choose one.",
      "**Dangling modifier** — 'Walking home, the rain caught me': give the -ing its doer.",
      "**Fragment** — a because/which/when clause left standing alone: weld it to a main clause.",
      "**Comma splice** — two sentences, one comma: full stop, semicolon, conjunction, or subordination.",
      "**Tense drift** — 'she was singing when the bell rings': hold the backbone tense.",
      "**Agreement by sense not proximity** — 'the box of mango ARE' — find the true subject first.",
      "**Vague reference** — 'they say…' with no they, or 'this' with no thing: name the referent.",
      "**Misplaced only** — 'he only walked five miles today' vs 'he walked only five miles': only touches what follows it.",
      "**Faulty comparison** — 'better than any student in the class' (he is a student): add OTHER.",
      "**Unnecessary shift of person** — 'a pupil should study; you must work': one person throughout.",
      "**Redundancy** — 'repeat again, return back, each and every, absolutely must': one is enough.",
      "**Cliche worn through** — 'cold as ice, busy as a bee, last but not least': the composition earns nothing from a borrowed coat."
    ]},
    {k:"h3", t:"How to Work a Past Paper — the Method"},
    {k:"num", items:[
      "**Sit it for real**: the clock on, no notes, one sitting — the value of a past paper is the conditions, not the questions.",
      "**Mark with the key as a prosecutor**: right counts, but the mark scheme's route matters; note the marks lost for format, not sense.",
      "**Classify every loss** into the four boxes: grammar, comprehension, composition format, time. The box with the most entries is next week's drill.",
      "**Rewrite the wrong answers from memory** a week later — a repaired script you did not rewrite is a repair you have not made.",
      "**Keep an error log** — one page per past sitting: the error, the rule, the example. It is the only revision book that ever shrinks."
    ]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**The phrasal-verb blank** — 'the talks were ___ (called off / called on / called up)': meaning decides, and pronoun placement inside it",
      "**Replace with one word** — 'put up with', 'look into', 'do away with': give the single verb the phrase hides",
      "**Choose the troublesome word** — affect/effect, less/fewer, due to/because of, who/whom, that/which: one sentence, one blank, no second chance",
      "**The correction objective** — a ten-line paragraph seeded with fragments, splices, dangling -ings and agreement slips; hunt them all",
      "**The full past-paper circuit** — objectives, then the essay, then the summary, at paper speed: the mark scheme's proportions are the clock's instructions"
    ]}

  ],

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
  study:[
    /* ---- course text: Semester Two, Period IV — Essay Writing, Creative Writing and Verb Usage (guide pp. 32-33) ---- */
    {k:"h3", t:"Reviewing Essay Writing: the Expositions"},
    {k:"p", t:"Review the forms of the essay. In groups of five, write **expositions** — the **essay** that explains a subject point by point; the **narrative** that tells a story with beginning, middle and end; the **descriptive** that paints a scene with the senses; and the **persuasive** that argues one side of a question to move the reader. Evaluate the different kinds of writings in the classroom against their forms."},
    {k:"rule"},
    {k:"h3", t:"Creative Writing"},
    {k:"p", t:"Return to **creative writing** — poem, story, drama — and use the principal parts of a verb properly in given texts: the base form after modals, the s-form for he, she and it, the ing-form in the progressive, the past for finished actions, and the past participle with have, has, had and in the passive."},
    {k:"rule"},
    {k:"h3", t:"Review of Verb Usage"},
    {k:"p", t:"Review the **five forms / principal parts of a verb** and the tenses built on them — **present simple, past simple, future simple, present perfect, past perfect, future perfect** — until each is used without hesitation in given texts and in your own writing."},
    {k:"rule"},
    {k:"h3", t:"Speech Development and Oral Practice"},
    {k:"p", t:"Compose different kinds of **speeches** and develop and deliver **public speeches**: prepare thoroughly, open strongly, signpost the points, close memorably — and judge one another's delivery fairly in class evaluation."},
    {k:"h3", t:"The Expositions — Five Ways to Explain"},
    {k:"table", head:["Mode","Its question","How to build it","Watch"], rows:[
      ["definition","what IS the thing?","genus first (the family), then differentia (what sets it apart): 'A noun is a word that names a person, place, thing or idea'","a circle definition (a ruler is what you rule with) teaches nothing"],
      ["division and classification","what are its parts or kinds?","split on ONE principle, then list the kinds: 'farming is divided into subsistence, plantation and commercial, by purpose and scale'","overlapping boxes; a missing member"],
      ["process analysis","HOW does it work or get made?","steps in order, each with its verb: 'to pound fufu, the boiled cassava IS POUNDED…'","skip nothing; the reader who cannot repeat the steps failed to read"],
      ["cause and effect","WHY, and so what?","one cause with its chain, or one effect with its causes; name the link words","false cause: after is not because"],
      ["comparison and contrast","how alike, how unlike?","point-by-point or block; like with like","faulty pairing: compare a climate with a climate, not a town"]
    ]},
    {k:"p", t:"An exposition is **one controlling idea** driven home: the **thesis** stands at the end of the introduction as a full sentence (not a question, not a title), every **topic sentence** below it answers the thesis in turn, and every fact supports a topic sentence — a paragraph that supports nothing gets cut, however good it reads. The red thread test: read only your topic sentences; if they tell the whole argument by themselves, the essay is built. Exposition differs from persuasion in its promise: persuasion wants the reader to ACT, exposition wants the reader to UNDERSTAND — and an examiner can tell in the first paragraph which was attempted."},
    {k:"h3", t:"The Revision Moves That Pay"},
    {k:"num", items:[
      "**Cut the opening**: find where your second paragraph begins — often the true first line is inside it; start late and end early.",
      "**Trade adverbs for verbs**: 'walked slowly and heavily' becomes TRUDGED; 'said loudly' becomes SHOUTED — and the sentence gains muscle and loses six words.",
      "**Name the abstract**: 'the services are inadequate' becomes 'the health post has no gloves and one shelf of drugs' — exposition lives on particulars.",
      "**Vary the openings**: of ten sentences, at most four may begin with the subject; move the adverbial, use the -ing, or the there-frame — but no stunts.",
      "**Check the transitions at the paragraph seams**: each first sentence after the first should look back (this plan, that day, the same trouble) before it looks forward.",
      "**End on the judgment, not new matter**: the last paragraph says what the whole essay was for — and no example enters after that point."
    ]},
    {k:"h3", t:"Verb Usage — the Final Ten That Still Walk In"},
    {k:"table", head:["The slip","The form","Why"], rows:[
      ["he don't know","he DOESN'T know","the third person takes does"],
      ["nobody know it","NOBODY KNOWS it","indefinite pronouns are singular"],
      ["the number of pupils are","the NUMBER of pupils IS","the head noun is number; a NUMBER of pupils ARE"],
      ["I suggest that he comes now","that he COME now","the mandative subjunctive takes the base form"],
      ["if I was you","if I WERE you","the wishing subjunctive"],
      ["between you and I","between you and ME","object of a preposition"],
      ["who did they select","WHOM did they select","it answers with him — but WHO is correct if it is the subject: 'who selected it?'"],
      ["she laid down on the bed","she LAID the book down; she LAY DOWN","lay puts; lie reclines"],
      ["'she set down in the chair'","she SAT down in the chair; she SET the cup down","SET places a thing and must have an object; SIT rests and must not"],
      ["this data shows / these data show","as the key prefers; know both","data is a plural in Latin; English mass usage is accepted — the reason must be stated"]
    ]},
    {k:"h3", t:"Speech Development and the Oral — the Three Ps"},
    {k:"bul", items:[
      "**Prepare**: know the motion so well you can argue BOTH sides in ninety seconds; build the outline, not the full script — a read speech dies on its feet.",
      "**Practise**: aloud, standing, timed; once to the wall, once to a friend who may interrupt; mark where you ran words together and where you feared the pause — the pause is the punctuation of speech.",
      "**Perform**: feet planted, weight even; eyes in three places around the room, one sentence at each; volume one notch past comfort; the first and the last line delivered from memory; the paper face-up on the stand, never in the hand.",
      "In **debate**, the courtesies score as well as the cases: greet the chair and the timekeeper, address the IMPARTIAL floor, rebut the point not the person, and close the way you opened; a point of information taken graciously buys the ear for your next argument."
    ]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Write the expository essay** on a set topic (farming methods, the value of punctuality, why rivers flood): thesis at the end of the introduction, one mode held, topic sentences that carry the argument alone",
      "**Build the classification** — 'classify the following into…, stating the principle used': overlapping boxes lose the principle mark",
      "**The paragraph repair** — insert the transition, cut the unsupported sentence, or fix the comparison: exposition is graded as craft, not decoration",
      "**Correct the final-ten verb slips** — the objective paper cycles them; don't, number, subjunctives, who/whom, lay/lie",
      "**The debate or platform speech** — outline form may be asked (introduction, arguments with proof, answer to objection, conclusion); deliver one paragraph as the oral"
    ]}

  ],

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
  study:[
    /* ---- course text: Semester Two, Period V — Review of Vocabulary, Phrases and Clauses (guide pp. 34-35) ---- */
    {k:"h3", t:"Review of Vocabulary Development"},
    {k:"p", t:"Review **vocabulary development through rehearsal exercises**: the weekly words, their spellings and meanings; synonyms, antonyms and homophones; prefixes, roots and suffixes unlocking unfamiliar words. Group work: solicit feedback on one another's vocabulary and provide corrective measures where words are misused."},
    {k:"rule"},
    {k:"h3", t:"Improved Use of Context Clues"},
    {k:"p", t:"Demonstrate the improved use of **context clues** in learning vocabulary: definition clues, example clues, comparison and contrast clues, and the sense of the whole passage. Divide the class to review and discuss context clues and drill them on fresh passages until inferring meaning is a habit."},
    {k:"rule"},
    {k:"h3", t:"Improved Application of Spelling Rules"},
    {k:"p", t:"Review the **spelling rules** — i before e except after c; drop the final e before a vowel ending; double the final consonant after a short vowel; change y to i before an ending — together with the list of commonly misspelled words. Apply them in every piece of writing, and construct stories, speeches and other documents that are correctly spelled throughout."},
    {k:"rule"},
    {k:"h3", t:"Review of Phrases and Clauses"},
    {k:"p", t:"In groups of five, review and discuss **phrases and clauses**: the noun phrase and verb phrase; the verbal phrases — participle, gerund, infinitive; the prepositional phrase; and the clauses — independent; dependent; noun, adjective and adverb clauses. Construct sentences that use each, correctly punctuated — the comma after an introductory phrase, no comma between two verbs sharing one subject."},
    {k:"h3", t:"Word Families — the Review Table"},
    {k:"table", head:["Verb","Noun","Adjective","Adverb"], rows:[
      ["decide","decision","decisive","decisively"],
      ["succeed","success","successful","successfully"],
      ["act","action, actor","active","actively"],
      ["enjoy","enjoyment","enjoyable","—"],
      ["apply","application, applicant","applicable","—"],
      ["instruct","instruction, instructor","instructive","instructively"],
      ["govern","government, governor","governmental, governing","—"],
      ["maintain","maintenance","maintainable","—"],
      ["occupy","occupation, occupant","occupied, occupying","—"],
      ["prefer","preference","preferable","preferably"],
      ["revise","revision","revisable","—"],
      ["unite","union, unity, unit","united, unified","unitedly"]
    ]},
    {k:"p", t:"The family drill is worth five minutes a day precisely because the objective paper asks the member the sentence cannot carry by itself: a blank after an article wants the **noun** ('the ___ of the plan'), a blank before a noun wants the **adjective** ('a ___ decision'), a blank after the verb wants the **adverb** ('he acted ___'). Knowing the family means guessing nothing."},
    {k:"h3", t:"Context Clues at Higher Speed — Three Worked Cases"},
    {k:"p", t:"**Case one, the definition clue**: 'Laterite, a red iron-rich soil that cakes when dry, paved the yard.' The words between the commas ARE the meaning — the sentence has only to be cut and the definition lifted. **Case two, the example clue**: 'the pungent odours of the market — fermented cassava, smoked fish, and bitterball — turned visitors away'; the examples set the field (pungent: strong-smelling), and the tone (turned visitors away) sets the sign (unpleasant). **Case three, the contrast clue**: 'where her brother blurted, Jennie was reticent'; the counter-position makes reticent the opposite of the blurting kind (reserved, holding back). The method in every case: **guess from the neighbourhood, test by substitution** (does the guessed word keep the sentence's sense and its grammar?), then check the root or affix if one is showing."},
    {k:"h3", t:"Affixes at Speed — the Review Grid"},
    {k:"table", head:["Affix","Its work","Built example"], rows:[
      ["un-, in-, im-, il-, ir-, dis-","make negative","untrue, indecent, impossible, illegal, irresponsible, disagree"],
      ["re-","again","rebuild, re-read"],
      ["mis-","wrongly","misjudge, misprint"],
      ["over-, under-","too much / too little","overcook, underpay"],
      ["inter- / trans- / sub-","between / across / under","interstate, transport, subway"],
      ["non-","not, outside the class","non-negotiable, nonsense"],
      ["-er / -or / -ist / -ian","one who does","farmer, actor, pianist, historian"],
      ["-tion / -ment / -ness / -ity / -ship / -hood","state, act, quality","instruction, payment, kindness, ability, friendship, childhood"],
      ["-ful / -less / -able / -ible","with / without / able to be","careful, careless, eatable, possible"],
      ["-y / -ish / -like / -ward","having some / like / toward","rainy, reddish, childlike, homeward"],
      ["-ize / -ify / -en","make into","formalize, beautify, widen"]
    ]},
    {k:"h3", t:"Spelling — the Final Gauntlet"},
    {k:"p", t:"The dictation list every candidate should be able to write with eyes shut: **necessary, separate, receive, business, government, privilege, definite, grammar, beginning, cemetery, committee, embarrass, exaggerate, rhythm, environment, library, February, address, recommend, success, surprise, temperature, tomorrow, existence, conscious, questionnaire, beforehand, independent, judgement, accommodate**. The traps are patterns, not accidents: doubled letters (su-cc-ess, re-comm-m-end, a-cc-ommo-date), single-double switches (be-foreh-a-nd has none of the rr people write), silent intruders (rh-yt-h-m, li-br-a-ry, Fe-br-u-a-ry), and the -ent/-ant and -ance/-ence roulette (different, excellent; independence, existence, patient/conscience). Write them twice a week; keep the wrong ones, and only the wrong ones, on the page that sleeps under the pillow."},
    {k:"h3", t:"Phrases and Clauses — the Method of Analysis"},
    {k:"num", items:[
      "**Find the finite verb(s)** first — every verb of that kind opens a clause; count them and you have counted the clauses.",
      "**Find each subject** beside its verb, and mark whether a conjunction (and, but) joins the verbs inside one clause or the clauses themselves.",
      "**Bracket the dependent clauses** at their subordinators (when, because, who, that, although) — an -ed or -ing without an auxiliary is not a clause but a phrase.",
      "**Name each remaining phrase by its head**: a noun phrase, a verb phrase (helpers plus main verb), a prepositional phrase, an infinitive or gerund phrase, a participial phrase.",
      "**State the function of every bracketed group** — the clause or phrase that cannot be named for its office has not been analysed, only labelled."
    ]},
    {k:"p", t:"**The worked analysis.** *When the rains stopped, the farmers, who had waited a month, went to their fields by the river.* — 'When the rains stopped' = adverbial clause of time; 'the farmers' = **noun phrase**, subject; 'who had waited a month' = relative clause, non-defining (its commas say all farmers waited — the name chooses none); 'went' with nothing to help it = past simple main verb, transitive with no object; 'to their fields' = prepositional phrase adverbial of direction; 'by the river' = prepositional phrase adjectival on fields. One sentence, four clauses or phrase-units, none homeless. That is the whole of a WASSCE parse — the skill is the counting, and the confidence is that the count never lies: number the verbs, and the analysis follows."},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Supply the right family member** — decide/decision/decisive blanks after the article, before the noun, after the verb",
      "**Give the meaning from context** — definition clues, example clues, contrast clues; name which one the passage used",
      "**Build and parse by affix** — the opposite of 'legible', the doer of 'instruct', the state of 'child': prefixes and suffixes asked as arithmetic",
      "**Dictation** — from the final gauntlet list; the doubled letters are the mark",
      "**Analyse the sentence** — clauses counted by verb, phrases named by head and office, defining against non-defining and its commas",
      "**Rewrite without changing meaning** — the gerund to a noun clause, the relative clause to an adjective: the transformation question is the vocabulary review in disguise"
    ]}

  ],

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
  study:[
    /* ---- course text: Semester Two, Period VI — WASSCE Review and Examination Technique (guide pp. 36-37) ---- */
    {k:"h3", t:"Why Review Past Papers"},
    {k:"p", t:"The WASSCE papers return year after year to the same syllabus and the same forms of question: **objective** items testing lexis and structure; the **essay** offering narrative, descriptive, argumentative and letter-writing topics; and **comprehension and summary** passages with their questions. Reviewing past WASSCE papers, in groups and alone, trains the hand and the eye to the standard and shows exactly what the examiner rewards."},
    {k:"rule"},
    {k:"h3", t:"How to Work Through a Paper"},
    {k:"num", items:[
      "Read the instructions twice and obey them exactly — the rubric is part of the paper",
      "Budget the time in proportion to the marks, section by section, and keep to it",
      "In the objective section, answer every item — eliminate the impossible options and choose the best",
      "In the essay section, choose the topic you know best, plan it for three minutes, then write to the plan in the form the question demands",
      "In comprehension, read the passage first, then the questions, then return to the passage for the answers — in your own words where required",
      "In summary, keep only the main ideas, in your own words, within the word limit",
      "Attempt every question; never leave a blank",
      "Reserve the last minutes to check spelling, punctuation, grammar and omissions"]},
    {k:"rule"},
    {k:"h3", t:"Continuous Rehearsal to the End"},
    {k:"p", t:"Assign yourselves continuous rehearsal of past WASSCE papers until the examination itself, so that responding to the questions becomes habit. Learners respond positively to questions in past WASSCE papers and make a successful pass in future examinations — that is the aim of this final review."},
    {k:"h3", t:"The Mark Scheme Is a Clock"},
    {k:"p", t:"Every mark on a WASSCE paper is a minute's claim on you: a section carrying a third of the total marks owns a third of the hour allowed. Work the arithmetic before the paper begins — in a paper of 100 marks over 3 hours, 1 mark is about 1.8 minutes, so a 20-mark summary owns some 36 minutes and no more, and a 40-mark essay owns 72: budget, then defend the budget. When a question runs over its minutes, take your best answer and move on — **an unfinished answer scores its part; an unwritten answer scores nothing, however good the plan in your head.** The last twelve minutes of every sitting belong to the sweep: names and numbers re-checked, blanks filled with the closest defensible choice, nothing left empty."},
    {k:"h3", t:"The Objective Paper — the Five-Pass Method"},
    {k:"num", items:[
      "**Read the stem first and cover the options**: for two seconds the question belongs to you, and a pre-formed answer is the best shield against a clever wrong choice.",
      "**Read all options to the end** — the paper is built so that option C tempts the candidate who stops reading at C.",
      "**Eliminate the impossible options first**, then the merely unlikely: two strikes turn one mark into three in the head.",
      "**Answer it again before you mark it**: the second pass catches the eye-slip of choosing B where the pencil meant the words you read under A.",
      "**Flag, do not fight**: a doubtful item gets a small mark on the paper's edge and returns after the last question — the clock is the examiner no one argues with."
    ]},
    {k:"h3", t:"The Essay and the Summary — Half an Hour of Habit"},
    {k:"p", t:"Grammar papers mark the composition as composition — **content and organization first, mechanics carried through it** — so the three habits that lift an average script are all cheap: (1) **answer the exact question** — underline its command words and limits, and check the finished script against them line by line; (2) **plan in topic sentences before the first sentence** — three to five, in order, on the question paper; (3) **leave the last five minutes for the read-aloud proofread**, hunting verbs, pronouns, apostrophes and the same-old spellings. For the summary: one paragraph, own words, the points and nothing else, the limit honoured — coverage and compression, not style, carry the marks. The fair copy must be fair: a legible hand is worth two marks a script, and the examiner who cannot read it cannot reward it."},
    {k:"h3", t:"The Error Log — the Only Book That Shrinks"},
    {k:"bul", items:[
      "One page per past sitting, four boxes: **grammar** (tense, concord, case, punctuation), **comprehension** (the wrong reading, the missed instruction), **format** (letter parts, summary frame, missing record line), **time** (what you ran out on).",
      "Under each, three columns: the error, the rule that kills it, and one true example from your own script — the example is what the exam will recall.",
      "Re-drill the biggest box for ten minutes a day, then re-sit the question that held that error; the box must shrink before the paper is crossed off.",
      "Every second Wednesday, sit a full past paper cold, under time, with no notes — the log tells you where it went, and only the sitting tells you whether it stayed fixed."
    ]},
    {k:"h3", t:"What Each Section Really Demands"},
    {k:"table", head:["The section","What it is testing","How marks are actually given"], rows:[
      ["objective grammar items","recognition of the rule","the right choice, and no credit for a near miss — the reason must be in your head anyway for the next question"],
      ["error spotting / correction","application","the corrected form AND its reason; half answers get half credit at best"],
      ["comprehension","locating and restating","one question, one piece of evidence; 'in your own words' means no three-word lift"],
      ["summary","compression","counted points; the word limit enforced; no opinion of yours"],
      ["composition / directed writing","organization and register","the task done exactly (letter parts, essay frame), then the coherence, then the clean mechanics"],
      ["oral","pronunciation, stress, fluency","the endings -s and -ed, the pause at punctuation, the eye from the page"]
    ]},
    {k:"h3", t:"The Last Week, and the Hall"},
    {k:"bul", items:[
      "**No new material in the last seventy-two hours** — re-drill the log, re-speak one old past-paper essay plan, re-read the dictation list; then stop earlier than you think.",
      "**Kit and sleep beat last-minute cramming**: two pens, pencil, eraser, watch, and the admission document on the table by the door the night before; six hours of sleep is worth more than the sixth hour of light.",
      "**In the hall**: read the instructions on the cover first; write name, index number and subject where required before the clock turns; run the mark-to-minute budget you built in practice.",
      "**Answer the easy sections first to bank the confidence**, and never leave a blank — an empty box cannot be right; a reasoned guess can.",
      "**Hand in with nothing unwritten** — every sheet, every part, your number on the script; the question you left for the flag that never came back is the one to forget on the way out, not on the way in."
    ]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Everything the three years built** — the objective paper is nouns to phrases, tenses to concord, the letter to the summary, all at paper speed",
      "**The time budget** — a practical question may itself ask how you would divide the period; the answer is the marks-to-minutes arithmetic",
      "**The instruction obeyed** — word limits, 'in your own words', 'from the passage', one letter of six paragraphs: the format mark is the cheapest in the hall",
      "**The clean fair copy** — legible, punctuated, proofread; mechanics inside the composition, not bolted on",
      "**The oral**: read the printed passage aloud with the endings and the pauses; answer the interviewer's question at the length asked, and return the question when invited"
    ]}

  ],

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
