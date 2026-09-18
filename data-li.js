/* Curriculum data — Republic of Liberia, SENIOR HIGH LITERATURE IN ENGLISH,
   Grades 10–12.
   Derived from the “Literature 10-12” senior high curriculum guide (25 pp.),
   6 periods per grade, 18 units.

   Every unit carries a `study[]` block list — the course text of the guide,
   rendered verbatim on the Study Notes page. `**bold**` marks the key terms;
   table cells take no markup because the renderer escapes them.

   Unit shape (read by GEN_LI):
     grade · period · sem · icon · title · subtitle · outcomes[] · objectives[]
     · note · study[]
     · terms[]       {t,d,x}       literary term or device, meaning, example
     · quotes[]      {q,w,dev,why} quotation, work, device, effect
     · characters[]  {n,w,d}       character, work, role played
     · themes[]      {t,w,ev}      theme, work, textual evidence
     · facts[]       {q,a}         recall questions
     · tf[]          {s,a,why}     true/false with the reason
     · apply[]       {q,a}         appreciation and applied reasoning
     · passage       {title,text,qs[]}   a practice extract for comprehension
     · write[]       {p,guide}     essay and creative writing prompts
     · activities[] · materials[] · assessment[]

   Per the project rule the digital research links listed in the source guide
   (africanbookscollective.com, literarydevices.net, study.com,
   vocabulary.com, classicsenglishliterature.com, formalpoetry.com,
   poetryfeast.com, poetryfoundation.org, poetryoutloud.org, naijapoets.com)
   are omitted: the pack must stay fully offline. The set texts, anthologies
   and textbooks named in the guide are kept as text references.
   The practice extracts are written for this pack in the manner of the set
   texts being studied; they are not quotations from those texts. */

var LI_CURRICULUM = [

/* ================================ GRADE 10 ================================ */
{
  grade:10, period:"I", sem:"One", icon:"🎭",
  title:"Figurative Expressions and Shakespearean Drama",
  subtitle:"The elements of literature, literary devices, and the characters, conflicts and themes of a Shakespearean play",
  outcomes:[
    "Learners are able to demonstrate an understanding of literature as a set of related systems and write plays applying the elements of literature"
  ],
  objectives:[
    "Discuss literary devices in a given drama",
    "Identify various themes in a drama with textual evidence",
    "Identify the various characters and their roles",
    "Identify the major and minor conflicts in the drama"
  ],
  note:"Literature is made of <b>elements</b> that work together: plot, character, setting, theme, conflict and language. A <b>literary device</b> is the tool the writer uses to make language do more than report — a <b>simile</b> compares using like or as, a <b>metaphor</b> says one thing <i>is</i> another, and <b>personification</b> gives a non-human thing a human action.",
  study:[
    /* ---- course text: Semester One, Period I — Elements of literature and Shakespearean drama (guide pp. 2-3) ---- */
    {k:"h3", t:"The Elements of Literature"},
    {k:"p", t:"**Literature** is writing that is valued for its form and its power to move a reader, not only for the information it carries. It comes in three broad kinds: **prose** (ordinary written language, in sentences and paragraphs), **poetry** (language arranged in lines and stanzas for sound and compression), and **drama** (a story written to be performed, in acts and scenes, with dialogue and stage directions). Whatever the kind, the same **elements** hold it together: the **plot** — what happens, in order; the **characters** — who it happens to; the **setting** — where and when it happens; the **theme** — the idea it is really about; and the **conflict** — the struggle that drives it."},
    {k:"bul", items:[
      "**Plot** — exposition, rising action, climax, falling action, resolution.",
      "**Character** — protagonist, antagonist, major and minor characters, round and flat, and character change.",
      "**Setting** — place, time and social conditions; it creates mood and presses on the characters.",
      "**Theme** — the central idea, stated as a sentence, never as a single word.",
      "**Conflict** — person against person, against self, against society, against nature or fate."
    ]},
    {k:"rule"},
    {k:"h3", t:"Literary Devices — Figurative Expressions"},
    {k:"p", t:"A **figurative expression** says one thing and means another, so that the reader sees the idea rather than merely being told it. The three you must know first are **simile**, **metaphor** and **personification**. A simile compares two things with *like* or *as* — 'the night is **like** a shuttered room'. A metaphor says one thing **is** the other — 'the night **is** a shuttered room'. **Personification** gives a human quality to something that is not human — 'the night **folded its arms** across the town'."},
    {k:"p", t:"Others you will meet in every set text: **imagery** — language that appeals to the five senses; **symbolism** — an object standing for an idea; **irony** — saying one thing and meaning the opposite, or a gap between what a character expects and what happens; **hyperbole** — deliberate exaggeration; **alliteration** — the same initial consonant repeated; **onomatopoeia** — a word that sounds like its meaning; **oxymoron** — two opposite ideas joined; and **allusion** — a reference to another work, person or event."},
    {k:"rule"},
    {k:"h3", t:"Reading a Shakespearean Drama"},
    {k:"p", t:"**William Shakespeare** wrote for a company of players in London around 1590–1613. His plays are written mainly in **blank verse** (unrhymed lines of ten syllables with the stress falling on every second syllable), though his servants and clowns usually speak in **prose**. A play is divided into **acts** and each act into **scenes**; a new scene begins when the place or the time changes. Where there is no scenery, the words tell the audience where they are: 'This is the wood, and we are alone.'"},
    {k:"p", t:"In **A Midsummer Night's Dream** the setting is Athens and the wood outside it. Theseus, Duke of Athens, is to marry Hippolyta; four young lovers — Hermia, Lysander, Helena and Demetrius — flee into the wood; a company of workmen rehearse a play; and Oberon and Titania, the king and queen of the fairies, quarrel over a changeling boy. The servant **Puck** is sent with a love-juice and anoints the wrong eyelids, and the comedy runs on the confusion that follows."},
    {k:"rule"},
    {k:"h3", t:"Characters, Conflicts and Themes"},
    {k:"p", t:"Every play has a **major conflict**, the one the plot turns on, and **minor conflicts** that feed it. In a Shakespearean comedy the conflicts are usually the obstacles between the lovers and the end they want. To identify a **theme**, never write one word: state the idea in a full sentence — 'love is not governed by reason' — and then give the **textual evidence**, the words on the page that show it."},
    {k:"p", t:"Set texts for this period: **A Midsummer Night's Dream** by William Shakespeare; **Let Me Die Alone** by John K. Kargbo; **A Government Driver on His Retirement** by Onu Chibuike."}
,
    {k:"rule"},
    {k:"h3", t:"The Three Core Figures, Worked Step by Step"},
    {k:"p", t:"The examination answer on a figure takes one shape: **name the device, quote the words that carry it, say what the device does** — in that order, and then stop. Worked on the set play, the line is ‘The iron tongue of midnight hath told twelve.’ Step one, the name: **personification**, because the clock's bell is given a tongue and the telling is a person's act — with a **metaphor** inside it, the sound of the bell called an iron tongue. Step two, the words: ‘the iron tongue of midnight hath told twelve.’ Step three, the effect: the night itself is made to speak, so the stroke of the clock feels like a witness calling the hour, and the play's whole confusion is placed at the moment the night turns. Step four, the service: this is the turning point, after which the lovers wake and the wedding can be made — the figure is doing plot work, not decoration."},
    {k:"num", items:[
      "**The test that tells the three figures apart.** Ask in this order: is there a *like* or an *as*? Then it is a **simile**. Is one thing called by another's name? Then it is a **metaphor**. Does a thing that is not human do a human act? Then it is **personification**. ‘The night is like a shuttered room’ is a simile; ‘the night is a shuttered room’ is a metaphor; ‘the night folded its arms across the town’ is personification — and the last line also carries a metaphor, because folding arms is what a person does. A line may hold more than one figure, and the marks are counted per figure, so name what is there, all of it.",
      "**The oxymoron, from this unit's own extract.** Puck calls Lysander ‘this lack-love, this kill-courtesy’ — two opposites joined, and each is a lie spoken to the truth: the man is full of love and has no courtesy, and the figure says that in one breath. The test for an oxymoron is the pair: if you cannot name the two opposite ideas, you have not found one.",
      "**The allusion, and why the play within the play is one.** Snug the joiner announces ‘I am a lion, and I am not a lion; I am Snug the joiner’ — the paradox is the joke, and the joke is the allusion: the mechanicals' play of **Pyramus and Thisbe** is a reference the audience is meant to recognize, and the audience's recognition is what makes the bad acting funny rather than merely bad. An allusion rewards the reader who knows and pays nothing to the reader who does not — which is why it is a test of reading, and the examination sets it as one."
    ]},
    {k:"p", t:"If you name a device without quoting the words, you are describing, not proving; the examiner cannot mark what they cannot check on the page. If you quote without naming, the examiner must name it for you, and the mark that was yours is spent. The three-core figures — **simile, metaphor, personification** — are the ones a candidate is expected to name on an unseen line in under a minute, and the test column is what you run on it."},
    {k:"h3", t:"The Other Figures, with the Test that Finds Each"},
    {k:"table", head:["Figure","The test that finds it","An example to remember","The question it answers"], rows:[
     ["Imagery","appeals to one of the five senses","the scent and the half-light of the wood in the Dream","what the reader sees, hears or smells"],
     ["Symbolism","an object that stands for an idea and keeps standing for it","the love-juice stands for love that is given without consent","what the object means when it returns"],
     ["Irony","a gap between what is said and meant, or expected and happens","Puck, who made the mistake, laughing at the fools he made","what the audience knows that the character does not"],
     ["Hyperbole","deliberate exaggeration, beyond what is meant literally","‘I will roar you as gently as any sucking dove’","what the speaker really feels, under the excess"],
     ["Alliteration","the same initial consonant repeated","‘delve or hew — hack and rack the growing green’","the sound the reader is made to hear"],
     ["Onomatopoeia","a word that sounds like its meaning","the crack and the crash of the axe in the felling","the event itself, in the mouth of the reader"],
     ["Oxymoron","two opposite ideas joined in one phrase","‘this lack-love, this kill-courtesy’","what is true under the contradiction"],
     ["Allusion","a reference to another work, person or event","the mechanicals' Pyramus and Thisbe","what the audience is meant to recognize"]]},
    {k:"p", t:"For the examination, **one clean example of each figure from the set texts** is enough, and it must be clean: the example is the quotation, the name is the device, and the sentence after is the effect. The test column of the table is what you apply to the unseen line in Paper 1 — the line is given to you without the name, and the name is the mark."},
    {k:"h3", t:"A Midsummer Night's Dream, Mapped on the Plot Diagram"},
    {k:"p", t:"The five points of the plot are not a list to be recited; they are the map on which every reference in the answer is placed. Worked on the Dream, the map is this."},
    {k:"num", items:[
      "**Exposition** — Act I states the law (Egeus may compel Hermia to marry Demetrius, on pain of the convent or death), Theseus sets the wedding for the next new moon, the four lovers take their positions, and the mechanicals are chosen to play. Everything the audience needs is on the page before the wood.",
      "**Rising action** — the juice is dropped on the wrong eyelids, in the wood: Demetrius turns from Helena to Hermia, and Lysander turns from Hermia to Helena. The obstacle is no longer the law outside the wood; it is the lovers' own changed hearts, and the confusion can only be undone from inside.",
      "**Climax** — the four meet in the dark and blame one another; after this meeting the outcome is decided, because Oberon is forced to act. The climax of a comedy is the moment the entanglement is full, not the moment it is loosened.",
      "**Falling action** — Oberon wakes the lovers, the charm is withdrawn, Puck mends what Puck missed, and the court returns from the wood to Athens, where the law is in force again.",
      "**Resolution** — three couples marry at Theseus's wedding, the mechanicals' play is performed badly and forgiven kindly, and the audience is asked to forgive the play's own faults. The ending is a festival, which is the definition of the comedy's end."
    ]},
    {k:"p", t:"Note the **double frame**: the lovers' plot and the mechanicals' rehearsal run in parallel through the wood, and the same ending puts both right — the lovers married, the play performed. A question that asks 'what is the function of the mechanicals' wants this: they are the theme of art imitating life, performed by the people least fitted to perform it, and forgiven by the court that watches."},
    {k:"h3", t:"The Elements, Questioned One by One"},
    {k:"table", head:["Element","The question it answers","Where to find it in the Dream","The error that loses the mark"], rows:[
     ["Plot","what happens, in order","the flight to the wood, the juice misplaced, the weddings","retelling the events without saying what they do"],
     ["Character","who it happens to, and what they want","Hermia wants Lysander against the law; Egeus wants the law enforced","naming the character without the want"],
     ["Setting","where and when, and what the place presses","Athens at law; the wood at night, where the law cannot reach","describing the place without the pressure it puts on the plot"],
     ["Theme","the idea the work argues","love is not governed by reason or by the eye","the theme stated as a single word"],
     ["Conflict","the struggle that drives the plot","the lovers against the Athenian law, and the juice against the lovers' own choice","naming a struggle that the plot does not turn on"]]},
    {k:"p", t:"Use the table as a **check before you write**: the question 'discuss the role of the setting' wants the Athens-wood contrast and what each place does to the lovers, not a plot summary; the question 'analyse a character' wants the want and the change; the question 'state the theme' wants the sentence and the two references. The element named in the question is the element the answer must be built on, and the other four are background."},
    {k:"h3", t:"The Liberian Set: Your Own Country's Writing, and the Shakespearean Paper"},
    {k:"p", t:"Two of this period's three set texts are by **Liberian hands**: **Onu Chibuike** wrote *A Government Driver on His Retirement*, and **John K. Kargbo** wrote *Let Me Die Alone*, a drama whose title states its own situation. Reading your own country's writing is not a shortcut around the harder texts; it is the ground on which the WASSCE's relevance questions are answered, because the question 'what does this work bear on in society?' is easiest to answer when the society is the one you know. The driver's road that does not thank him, the man who has given up the will to live — these are the questions a Liberian candidate carries into the examination with the references already at hand."},
    {k:"p", t:"The WASSCE treats the prescribed **Shakespearean text** as a context text: in **Paper 1**, twenty of the fifty objective questions are drawn from it, testing **theme, characterization, style and setting**, and **no essay question is set on the Shakespearean text**. In the 2016–2020 set the prescribed Shakespearean play was **Othello**, and the Grade 11 work of this pack is built on that play — the Grade 10 periods build the same method on *A Midsummer Night's Dream*, so that the skill, not the play, is what is carried forward. The blank verse is the form the method is built in: unrhymed lines of ten syllables, the stress on every second syllable, and the servants and clowns in prose — which is itself a fact the context questions can set, because the choice of verse or prose for a speaker is a choice about that speaker."},
    {k:"h3", t:"Common Mistakes in This Unit"},
    {k:"bul", items:[
      "Writing a **theme** as a single word — 'love', 'jealousy', 'power'. The mark goes to the sentence: 'love is not governed by reason', and the sentence must be defended by two references.",
      "Calling a comparison a **simile** when the *like* or the *as* is missing. 'The night is a shuttered room' is a metaphor; the line becomes a simile the moment it adds *like*.",
      "Confusing **personification** with **metaphor** and naming only one when the line carries both. Giving the clock a tongue is personification; calling the bell a tongue is metaphor; a line that does both earns both marks.",
      "Treating the **mechanicals** as a joke and nothing more. Their play within the play is the theme of art imitating life; the question 'what do the mechanicals contribute' wants that, not a laugh.",
      "Missing the **setting's argument**. Athens is where the law rules and the wood is where the law cannot reach; a play that moves between the two places is arguing about them, and an answer that never names the contrast leaves the argument unstated.",
      "Spelling the names wrong — **Theseus, Hippolyta, Oberon, Titania, Puck, Hermia, Lysander, Helena, Demetrius, Egeus, Bottom, Snug**. The mechanics of the names are counted in every paper, and the loss is the mark the reference was meant to carry."
    ]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Name a figure and say what it does** — device, short quotation, effect in one sentence; the three-core figures are the ones set on an unseen line, and the set play is the ready store of examples",
      "**Twenty context questions on the Shakespearean text** in Paper 1 — theme, characterization, style or setting, each answered with a reference woven in; no essay is set on the Shakespearean text",
      "**Five unseen poem questions and five unseen prose questions** in Paper 1 — the subject in a sentence, the speaker or the narrator, one device quoted, and the effect of the device",
      "**State a theme as a sentence and support it** — two references to the text, each quoted or closely paraphrased, each followed by the comment that says what it shows",
      "**Distinguish the elements** — 'how does the setting drive the plot' wants the Athens-wood contrast and the pressure of each place, not a retelling of the events",
      "**Identify the major conflict** — person against person, person against society or the law, and which one the play makes major; the lovers against the Athenian law is the conflict the plot turns on"
    ]},  ],
  terms:[
    {t:"literature", d:"writing valued for its form and its power to move a reader", x:"Shakespeare's plays are literature as well as drama."},
    {t:"prose", d:"ordinary written language in sentences and paragraphs", x:"The novel is written in prose, not in verse."},
    {t:"drama", d:"a story written to be acted, in acts and scenes", x:"A Midsummer Night's Dream is a drama in five acts."},
    {t:"act", d:"a major division of a play", x:"The quarrel of the fairies opens in Act II."},
    {t:"scene", d:"a subdivision of an act; a new scene when place or time changes", x:"Scene ii moves from the palace to the wood."},
    {t:"plot", d:"the ordered sequence of events in a story or play", x:"The plot turns on Puck's mistake with the love-juice."},
    {t:"protagonist", d:"the central character the plot follows", x:"Hermia is one protagonist of the lovers' plot."},
    {t:"antagonist", d:"the character or force that opposes the protagonist", x:"Egeus is the antagonist who would force Hermia to marry Demetrius."},
    {t:"simile", d:"a comparison made with like or as", x:"‘She is like a bud that has not opened’ is a simile."},
    {t:"metaphor", d:"a comparison that says one thing is another", x:"‘Love is a sickness of the mind’ is a metaphor."},
    {t:"personification", d:"giving a human quality to something not human", x:"‘The morning put on her grey coat and waited’ is personification."},
    {t:"imagery", d:"language that appeals to the five senses", x:"The imagery of the wood is built from scent and half-light."},
    {t:"theme", d:"the central idea of a work, stated as a sentence", x:"A theme of the play is that love is not governed by reason."},
    {t:"conflict", d:"the struggle that drives the plot", x:"The major conflict is between the lovers and the Athenian law."}
  ],
  quotes:[
    {q:"The course of true love never did run smooth.", w:"A Midsummer Night's Dream", dev:"aphorism — a short general truth stated in one line", why:"It names the whole lovers' plot in a single sentence and warns the audience that the marriage they expect will not come easily."},
    {q:"Lord, what fools these mortals be!", w:"A Midsummer Night's Dream", dev:"irony — the speaker is himself the cause of the folly", why:"Puck, who made the mistake, laughs at the humans he has confused; the irony makes the audience share the joke."},
    {q:"Love looks not with the eyes, but with the mind.", w:"A Midsummer Night's Dream", dev:"metaphor — love is spoken of as a person who looks", why:"It states the play's argument that love is a matter of the imagination rather than of sight, which is why the juice on the eyelids can change it."},
    {q:"I am a lion, and I am not a lion; I am Snug the joiner.", w:"A Midsummer Night's Dream", dev:"paradox and comedy of the mechanicals", why:"The joke turns on the difference between acting and being, and it shows the audience how theatre asks them to believe two things at once."},
    {q:"The iron tongue of midnight hath told twelve.", w:"A Midsummer Night's Dream", dev:"personification and metaphor", why:"The clock's bell is given a tongue and a voice, placing the action at the turning point of the night."}
  ],
  characters:[
    {n:"Theseus", w:"A Midsummer Night's Dream", d:"Duke of Athens, whose wedding frames the play and who rules on the lovers' case"},
    {n:"Hermia", w:"A Midsummer Night's Dream", d:"the lover who refuses her father's choice and is threatened with the law"},
    {n:"Helena", w:"A Midsummer Night's Dream", d:"the rejected lover whose devotion is not returned until the juice is misapplied"},
    {n:"Bottom", w:"A Midsummer Night's Dream", d:"the weaver whose assurance makes him comic and who is given an ass's head"},
    {n:"Puck", w:"A Midsummer Night's Dream", d:"Oberon's servant, whose mistake drives the confusion and who restores order at the end"},
    {n:"Oberon", w:"A Midsummer Night's Dream", d:"king of the fairies, who sets the love-juice in motion to win the changeling boy"}
  ],
  themes:[
    {t:"Love is not governed by reason or by the eye", w:"A Midsummer Night's Dream", ev:"the lovers change partners the moment the juice is dropped on the wrong eyelids, so love is shown as a matter of the imagination"},
    {t:"The boundary between dream and waking is uncertain", w:"A Midsummer Night's Dream", ev:"the four lovers wake in Athens unable to say whether what they remember happened or was dreamed"},
    {t:"Authority can be both necessary and absurd", w:"A Midsummer Night's Dream", ev:"Egeus invokes the Athenian law over his daughter's marriage, and Theseus overrules him"},
    {t:"Art imitates life and is laughed at for it", w:"A Midsummer Night's Dream", ev:"the mechanicals' play of Pyramus and Thisbe is performed badly and watched kindly by the court"}
  ],
  facts:[
    {q:"Name the three broad kinds of literature and say what makes each different.", a:"Prose is ordinary written language set out in sentences and paragraphs; poetry is language arranged in lines and stanzas so that sound and compression carry part of the meaning; drama is written to be performed, in acts and scenes, with dialogue and stage directions."},
    {q:"Distinguish a simile from a metaphor.", a:"A simile compares two things using like or as, keeping the comparison open; a metaphor says one thing is the other, closing the comparison and asking the reader to see them as one."},
    {q:"What is blank verse, and who usually speaks prose in a Shakespearean play?", a:"Blank verse is unrhymed verse of ten syllables to a line with the stress on every second syllable. In Shakespeare's plays the servants, clowns and workmen commonly speak prose, while the nobility speak verse."},
    {q:"Explain the difference between a major and a minor conflict in a drama.", a:"The major conflict is the struggle the whole plot turns on and which the resolution settles; the minor conflicts are the smaller struggles that feed it and complicate it along the way."},
    {q:"Give the rule for stating a theme, and give one theme of A Midsummer Night's Dream as a full sentence.", a:"A theme must be stated as a complete sentence giving an idea about life, never as a single word. Example: ‘Love is not governed by reason or by the eye.’"},
    {q:"What does the term textual evidence mean?", a:"Textual evidence is the actual words, action or stage business on the page that support a point — a quotation, a stage direction, or an event that can be pointed to."},
    {q:"Name the two settings of A Midsummer Night's Dream and say what each stands for.", a:"Athens, the ordered city of law and marriage, and the wood outside it, the place of imagination, misrule and change; the movement between them is the movement of the play."}
  ],
  tf:[
    {s:"A simile says that one thing is another thing.", a:"false", why:"That is a metaphor. A simile compares two things using like or as, and leaves the comparison open."},
    {s:"A theme should be written as a complete sentence, not as one word.", a:"true", why:"A single word names a subject; a sentence states the idea the work holds about that subject, which is what a theme is."},
    {s:"Personification gives a human quality to something that is not human.", a:"true", why:"That is exactly the device: the night folds its arms, the clock has an iron tongue."},
    {s:"The antagonist is always a villain.", a:"false", why:"The antagonist is whoever or whatever opposes the protagonist; in comedy it may be a father, a law or a custom, and may not be wicked at all."},
    {s:"In Shakespeare's plays a new scene begins whenever the place or the time changes.", a:"true", why:"With little scenery, the scene division is what tells the audience that the action has moved."},
    {s:"The climax of a plot is the event that begins the story.", a:"false", why:"The event that begins the story is the exposition; the climax is the turning point, after which the falling action and resolution follow."}
  ],
  apply:[
    {q:"‘The course of true love never did run smooth.’ Show, with two references to the play, how Shakespeare makes this true of the four lovers.", a:"Hermia and Lysander are opposed by Egeus and the Athenian law and must flee to the wood; and once there, Puck's mistake with the love-juice turns Lysander and Demetrius from Hermia to Helena, so the obstacle is no longer the law but love itself."},
    {q:"Why is it better to describe Bottom as comic rather than foolish? Support your answer from what he does in the wood.", a:"Bottom is comic because his confidence never fails — he proposes to play every part at once, and accepts his ass's head and Titania's attentions as his due. His assurance, not his ignorance, is what makes the audience laugh, and it is the same assurance that lets him be kind to the fairy who waits on him."},
    {q:"A classmate writes, ‘The theme of the play is love.’ Rewrite the sentence correctly and add the evidence that would earn the mark.", a:"‘The theme of the play is that love is governed by the imagination rather than by the eye, so it can be changed without the lover's consent.’ Evidence: the lovers are made to change partners by a juice dropped on their eyelids while they sleep — nothing in their own judgement changes."},
    {q:"How does the setting of the wood change the way the characters speak and behave?", a:"In Athens the characters speak within the law, of duty and obedience; in the wood they speak of dreams and transformations, quarrel, and fall asleep in one another's arms. The place itself suspends the rules, which is why the confusion can happen there and be forgiven in Athens afterwards."}
  ],
  passage:{
    title:"Practice extract — the wood at midnight",
    text:"LYSANDER: Fair love, you faint with wandering in the wood; \nand, to speak truth, I have forgot our way. \nWe'll rest us, Hermia, if you think it good, \nand wait for the comfort of the day. \n\nHERMIA: Be it so, Lysander: find you out a bed, \nfor I upon this bank will rest my head. \n\n[Lysander lies down at a little distance and sleeps. Puck enters, unseen.] \n\nPUCK: Through the forest have I gone, \nbut Athenian found I none, \non whose eyes I might approve \nthis flower's force in stirring love. \nNight and silence! — Who is here? \nWeeds of Athens he doth wear: \nthis is he, my master said, \ndespised the Athenian maid; \nand here the maiden, sleeping sound, \non the dank and dirty ground. \nPretty soul! she durst not lie \nnear this lack-love, this kill-courtesy. \nChurl, upon thy eyes I throw \nall the power this charm doth owe.",
    qs:[
      {q:"Who is speaking in the second speech, and what does the speech tell you about that character's power in the play?", a:"Puck speaks. The speech shows that he acts on Oberon's instruction and that he has the power to change what a sleeping person loves — so the confusion of the lovers' plot is in his hands rather than in theirs."},
      {q:"‘on the dank and dirty ground’ — name the device and say what it makes the audience feel.", a:"It is imagery (appeal to touch and sight), and it makes the audience feel both sympathy for Hermia, sleeping rough for love, and the distance Puck keeps from human hardship — he remarks on it and then acts anyway."},
      {q:"Explain the phrase ‘this lack-love, this kill-courtesy’. What complaint is being made?", a:"Puck calls Lysander a man without love and without courtesy: Hermia has fled with him and he chooses to sleep apart from her, so he fails her both in love and in the good manners due to a lady. It is the fault Puck uses to justify moving the charm to the wrong man."},
      {q:"This scene is the turning point of the lovers' plot. Say why, in two or three sentences.", a:"Until this moment the obstacle to the marriages is the Athenian law, outside the wood. From this moment the obstacle is the charm on the wrong eyelids, so the confusion comes from within the group of lovers and must be undone by Puck before the weddings can take place."},
      {q:"Write one theme of the play that this extract supports, and give the words from the extract that support it.", a:"Theme: love can be changed without the lover's consent, because it is a matter of the imagination rather than of judgement. Evidence: ‘Churl, upon thy eyes I throw / all the power this charm doth owe’ — the change is made on the eyes while the lover sleeps."}
    ]
  },
  write:[
    {p:"Write an essay on the statement: ‘The wood is the real hero of A Midsummer Night's Dream.’ Do you agree?", guide:"Four or five paragraphs. State your position in the first; give two or three things that happen in the wood which could not happen in Athens; consider one objection and answer it; close with the point you have proved."},
    {p:"Write a short scene of your own, of twenty to thirty lines, in which two characters are lost at night and one of them is afraid.", guide:"Set the place and the time in the first four lines; give each character a different way of speaking; let one small action — a dropped torch, a sound in the grass — carry the fear; end the scene on a change, not on a summary."},
    {p:"‘The law of Athens is cruel to Hermia, but it is not the cruellest thing in the play.’ Discuss.", guide:"Compare what the law threatens with what the charm does. Use at least three references to the text."}
  ],
  activities:[
    "Class discussion on figurative expressions (metaphor, simile and personification)",
    "Read the selected Shakespearean drama aloud in parts",
    "Group work: discuss the main issues running through the drama",
    "Dramatize one scene of the play for the class",
    "Write a short play of your own applying the elements of literature"
  ],
  materials:["A Midsummer Night's Dream by William Shakespeare","Let Me Die Alone by John K. Kargbo","A Government Driver on His Retirement by Onu Chibuike","Prentice Hall Literature","Listen to the Story Teller — A Critical Thinking Liberian Anthology (T. Michael Weah & Llord Aidoo)","Audio-visual material in DVDs"],
  assessment:["Quizzes","Class work","Homework","Dramatization"]
},
{
  grade:10, period:"II", sem:"One", icon:"🎭",
  title:"Figurative Expressions and Shakespearean Drama II",
  subtitle:"Kinds of drama, the traits and roles of characters, figurative expression in the play, and drama writing",
  outcomes:[
    "Learners are able to write drama depicting the traits and roles of characters"
  ],
  objectives:[
    "Interpret Shakespearean drama",
    "Distinguish various types of drama",
    "Outline the traits and roles of characters in the drama",
    "Utilize figurative expressions in a given work of art"
  ],
  note:"The four kinds of drama are <b>tragedy</b>, <b>comedy</b>, <b>tragic-comedy</b> and <b>melodrama</b>. A character's <b>traits</b> are the qualities shown by what they say and do; their <b>role</b> is the part they play in the plot — hero, obstacle, messenger, fool or chorus.",
  study:[
    /* ---- course text: Semester One, Period II — Types of drama, traits and roles, drama writing (guide p. 4) ---- */
    {k:"h3", t:"The Kinds of Drama"},
    {k:"p", t:"**Tragedy** follows a person of high standing from prosperity to ruin, usually brought on by a **tragic flaw** in their own nature — pride, jealousy, ambition — and it ends in death. **Comedy** moves the other way: from confusion and separation to reunion and marriage, and it ends in a festival. **Tragic-comedy** mixes the two: the danger is real and the suffering is felt, but the ending is happy. **Melodrama** simplifies its characters into heroes and villains and loads the plot with sensational events, so that the audience is moved rather than made to think."},
    {k:"bul", items:[
      "**Tragedy** — a great person falls through their own flaw; the mood is pity and fear; the ending is death.",
      "**Comedy** — separation and confusion are put right; the mood is delight; the ending is marriage or feast.",
      "**Tragic-comedy** — the threat is serious but the end is fortunate.",
      "**Melodrama** — stock heroes and villains, strong emotion, a moral that is plain to see."
    ]},
    {k:"rule"},
    {k:"h3", t:"Traits and Roles of Characters"},
    {k:"p", t:"In drama you know a **character** only by two things: what they **say** and what they **do**. A **trait** is a quality shown over and over — Bottom's confidence, Helena's constancy, Hermia's defiance. A **role** is the work the character does in the plot: the **protagonist** carries the action, the **antagonist** opposes it, the **foil** is a second character whose opposite qualities throw the first into relief, the **confidant** is told the secrets we need to hear, and the **fool** or clown says what nobody else dares."},
    {k:"p", t:"When you write about a character, use the pattern **trait — evidence — effect**: name the trait, quote the words or the action that show it, then say what it does to the story. Never write ‘she is brave’ and stop."},
    {k:"rule"},
    {k:"h3", t:"Figurative Expression in a Play"},
    {k:"p", t:"Shakespeare's characters argue in figures. **‘Love looks not with the eyes, but with the mind’** is a metaphor; **‘I will roar you as gently as any sucking dove’** is a simile and a joke at once; **‘the iron tongue of midnight’** is personification. When you find a figure on the page, ask three questions: what two things are being brought together, what does the comparison make us see, and what does it tell us about the character speaking?"},
    {k:"rule"},
    {k:"h3", t:"Writing Your Own Drama"},
    {k:"p", t:"A short play needs five things: a **situation** that is already tense when the curtain rises; a small **cast**; a clear **objective** for the main character; an **obstacle**; and a **change** at the end. Write dialogue, not description — the audience can only hear and see. Give each character a different rhythm of speech. Cut every line that does not either advance the action or reveal a character."},
    {k:"p", t:"Set texts for this period: **A Midsummer Night's Dream** by William Shakespeare; **The Lion and the Jewel** by Wole Soyinka; **Black Woman** by L.S. Senghor; **Bats** by D.H. Lawrence."}
,
    {k:"rule"},
    {k:"h3", t:"The Four Kinds, Worked on the Set Texts"},
    {k:"p", t:"A kind of drama is claimed with **three tests**: the hero's fate, the feeling the play earns, and the ending. The tests are worked on the texts of this course, so that the classification can be made in the examination without the book open."},
    {k:"num", items:[
      "**Tragedy.** The test: a person of high standing falls through a flaw in their own nature, and the end is death. Worked on **Othello** (the Grade 11 set text): Othello, general of Venice, is a man of high standing; his flaw is the ease with which he is made to believe; Iago supplies the suspicion and Othello supplies the certainty; the end is his own death. The fall is his as much as Iago's — which is what separates the tragedy from the melodrama.",
      "**Comedy.** The test: confusion and separation are put right, the end is marriage or a festival, and the feeling is delight. Worked on **A Midsummer Night's Dream**: the lovers are separated, changed by the juice and reunited; three weddings and a festival end the play. Worked on **She Stoops to Conquer**: Marlow, who cannot speak to a lady of his own class, is tricked into ease with the very lady he is courting, and the trick ends in a marriage — the confusion is the engine, and the putting right is the end.",
      "**Tragic-comedy.** The test: the danger is real, the suffering is felt, and the ending is nevertheless fortunate. Worked on **A Raisin in the Sun**: the insurance money can buy the family's ruin — Walter Lee's deal — as easily as its rise; the play carries the weight of a loss throughout; and it ends with a move, not a funeral. The danger is real enough that the ending is not expected, which is the tragic in the tragic-comedy.",
      "**Melodrama.** The test: the characters are simplified into stock heroes and villains, the events are sensational, the moral is plain, and the audience is moved rather than made to think. The villain tied to the tracks; the weeping at the moment the plot needs a turn — the tells are the stock person and the sensational event, and neither has to be explained, because the kind explains them."
    ]},
    {k:"p", t:"Each kind makes a **claim about what life is like**: the tragedy claims that a flaw in a great person can cost everything; the comedy claims that confusion is temporary and union is the natural end; the tragic-comedy claims that the danger is real and the end is fortunate at the same time; the melodrama claims that the moral is plain to see. A classification answer that names the kind and then says what the kind claims about life has finished the question."},
    {k:"table", head:["Kind","The hero's path","The feeling earned","The ending","A set text of this course"], rows:[
     ["Tragedy","a great person falls through their own flaw","pity and fear","death","Othello"],
     ["Comedy","confusion and separation are put right","delight","marriage or festival","A Midsummer Night's Dream; She Stoops to Conquer"],
     ["Tragic-comedy","real danger, real suffering, fortunate end","the weight held to a good end","the settlement that was not expected","A Raisin in the Sun"],
     ["Melodrama","stock hero against stock villain","strong emotion, not thought","the moral made plain","the sensational play of the stage"]]},
    {k:"h3", t:"Trait — Evidence — Effect, Worked on Three Characters"},
    {k:"p", t:"The pattern is **name the trait, quote the words or the action that show it, say what the trait does to the story** — one sentence group per character, and never the bare 'she is brave'. Worked on the set texts:"},
    {k:"num", items:[
      "**Bottom — the confidence that makes him comic rather than cruel.** He accepts the ass's head and the lion's part in the same breath, and speaks to Titania as if the impossible were ordinary. The evidence is his language — 'My heart is true as steel' — borrowed from the court and spent on the wood. The effect: the comedy's second frame, in which art and love both proceed as if the impossible were ordinary; the audience is laughed with, not at.",
      "**Baroka — the cunning of the older order, shown by patience rather than anger.** He lets Lakunle finish every objection before he answers one, and the answer is the proverb: 'You have learned to count, / and having counted, you have not yet learned to read.' The effect: the play's argument is won by the character who listens, and the schoolmaster's borrowed learning is spent before it is spent.",
      "**Helena — the constancy that looks like weakness.** She follows Demetrius into the wood and keeps her love through his insults. The effect: the juice does not make Helena love — it makes Demetrius love her; the constancy the play rewards is hers, and the change that the plot turns on happens in the other."
    ]},
    {k:"p", t:"In the examination the pattern is the whole of character analysis: the trait named, the evidence quoted, the effect stated. A character is **round** when the trait is joined to a change — the character is different at the end from the character at the beginning — and **flat** when the trait is one and holds; a play of six flat characters is no weaker for it, and the flat character who serves one function well is the better writing, because the function is done."},
    {k:"h3", t:"Writing a Short Play — the Five Things, Checked"},
    {k:"p", t:"A one-act needs five things, and each is checked before the curtain: the check is worked as a list the candidate can carry into the composition question."},
    {k:"num", items:[
      "**The situation is already tense when the curtain rises.** Do not stage the walk to the house; stage the knock. The first line of the play should already be an answer to something that was asked.",
      "**The cast is small.** Three speakers can carry a one-act; every mouth beyond that must justify its food, and the justification is a want that touches the main want.",
      "**The main character has one objective, statable in three words.** 'To be believed', 'to leave', 'to be forgiven'. If the objective cannot be stated in three words, the scene will not have a spine, and the dialogue will wander.",
      "**The obstacle is in the room.** Another character, a letter, a clock, a custom — the obstacle must be something the audience can see or hear, because the play has no narrator to tell it.",
      "**A change by the end.** Somebody knows something they did not know, or says something they would not have said at the opening. Without the change you have written a conversation, and a conversation is prose, not drama."
    ]},
    {k:"p", t:"Then the **cut**: every line must either advance the action or reveal a character, and the two jobs are rarely done by the same line, so the line that does neither goes. Give each speaker a different **rhythm of speech** — the schoolmaster in long sentences that return to their start, the Bale in short ones that end where they begin, the market-woman in the proverb that says more than it claims. **Dialogue is the whole of the form**: what is not said or done on stage does not exist in the play, and a description written into a play is a sentence the audience cannot hear."},
    {k:"h3", t:"The Liberian Stage: Hearing the Play as Performance"},
    {k:"p", t:"Liberia reads drama the way it hears it — in the village gathering, in the school and church production, in the funeral, where the eulogy is itself a kind of performance and the assembly answers what is said. That is why the WASSCE's African drama question rewards an answer that hears the play as performance rather than as a book: the drum that opens it, the libation poured to the ancestors before the business of the living, the chorus that speaks for the community, the mask that brings a dead person back to the stage. A play written to be performed is judged by what an audience does with it, and in the African and Liberian tradition **the audience answers** — it is not a silent room, and the answer is part of the play."},
    {k:"p", t:"Of this period's set texts, **L.S. Senghor**'s *Black Woman* is the praise-song for the African woman, written from Senegal in the praise convention of the continent, and **D.H. Lawrence**'s *Bats* is the poem for the child who called the bat ugly — 'Night is the time when the bat takes the air on leathern wings', the comparison that makes the creature strange and exact at once. **The Lion and the Jewel** is the African drama the paper will set, and it is the one to know inside out: the kinds, the traits and the roles of this period are all worked in that play, and the examination's questions on the kind of drama, on the character, and on the device find their ready answers there."},
    {k:"h3", t:"Common Mistakes in This Unit"},
    {k:"bul", items:[
      "Calling a play a **melodrama** because it has a villain. Melodrama simplifies everything into stock heroes and villains and sensational events; Othello has a villain and is a tragedy, because the fall is the hero's as much as the villain's.",
      "Writing 'the character is brave' and stopping there. Without the quotation and the effect, the trait is an opinion, and the opinion is not marked.",
      "Confusing the **foil** with a friend. A foil is defined by the contrast — Helena to Hermia: pleading to defiant, tall to sure — not by the affection between the characters.",
      "Treating **soliloquy** and **aside** as the same. A soliloquy is a speech, made alone on stage, giving the character's real mind; an aside is a remark to the audience, made while the others are present and do not hear it.",
      "In a play you write, **describing** what a character is doing. The audience cannot see a description; give the feeling a body — a hand that will not stop moving is stage business, 'he was nervous' is prose.",
      "Getting the set names wrong — **Baroka, Lakunle, Sidi, Sadiku**, the **Bale** of Ilujinle, **Senghor**, **Lawrence** — and the loss of the mechanics mark that sits on the reference."
    ]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Classify the kind of drama** — name the kind, then the two or three features with a named set text; the table of hero's path, feeling and ending is the answer, and the claim the kind makes about life is what finishes it",
      "**Analyse a character with the pattern** — trait, quoted evidence, effect; one or two characters, each with the pattern complete, and the change named where the character is round",
      "**Name a figure in the play and say what it does** — from the Shakespearean or the African text, the device named, the words quoted, the effect stated in one sentence",
      "**Answer the Paper 1 context questions on the Shakespearean text** — theme, characterization, style or setting, each in a line or two with the reference woven in",
      "**Discuss a theme with two references** — the theme as a sentence, each reference commented, and the references taken from different parts of the play where they can be",
      "**The composition question** — a short scene or play extract written to the brief: a tense opening, a small cast, one objective, an obstacle in the room, and a change by the end"
    ]},  ],
  terms:[
    {t:"tragedy", d:"a play in which a great person falls, through their own flaw, to ruin and death", x:"Macbeth is a tragedy of ambition."},
    {t:"comedy", d:"a play that moves from confusion to reunion and ends happily", x:"A Midsummer Night's Dream is a comedy in five acts."},
    {t:"tragic-comedy", d:"a play with real danger that nevertheless ends happily", x:"The Winter's Tale is often called a tragic-comedy."},
    {t:"melodrama", d:"a play of stock heroes and villains and sensational events", x:"The villain tied her to the tracks: pure melodrama."},
    {t:"tragic flaw", d:"the quality in a hero's nature that brings about the fall", x:"Othello's tragic flaw is the ease with which he is made jealous."},
    {t:"trait", d:"a quality a character shows repeatedly in speech and action", x:"Patience is Bottom's most likeable trait."},
    {t:"role", d:"the part a character plays in the working of the plot", x:"Puck's role is to set the confusion going and to undo it."},
    {t:"foil", d:"a character whose opposite qualities throw another into relief", x:"Helena is a foil to Hermia: tall, pleading and unsure."},
    {t:"dialogue", d:"the words spoken by characters in a play", x:"Drama tells its story through dialogue rather than description."},
    {t:"stage direction", d:"the writer's instruction to the actors, printed in italics or brackets", x:"The stage direction ‘They sleep’ tells the audience what to watch for."},
    {t:"soliloquy", d:"a speech a character makes alone on stage, thinking aloud", x:"In a soliloquy the audience is given the character's real mind."},
    {t:"aside", d:"a short remark made to the audience, unheard by the others on stage", x:"The aside lets the audience know more than the characters do."}
  ],
  quotes:[
    {q:"I am that merry wanderer of the night.", w:"A Midsummer Night's Dream", dev:"metaphor — the speaker names himself a wanderer of the night", why:"It places Puck outside the human order of the play: he belongs to the night and moves through it at will, which is why he can change the lovers' fates and nobody sees him."},
    {q:"The lunatic, the lover and the poet / Are of imagination all compact.", w:"A Midsummer Night's Dream", dev:"metaphor — imagination is spoken of as the substance they are made of", why:"Theseus explains why the lovers' tale sounds invented: all three see what is not there, which is the play's defence of its own theatre."},
    {q:"My heart is true as steel.", w:"A Midsummer Night's Dream", dev:"simile — constancy compared to steel", why:"The comparison is comic coming from a weaver playing a lover, and it shows how the mechanicals borrow the language of the court."},
    {q:"A Lion and the Jewel — the jewel of Ilujinle.", w:"The Lion and the Jewel", dev:"metaphor — a young woman is named a jewel", why:"Naming Sidi a jewel praises her and, at the same time, treats her as a prize to be won — which is exactly the argument of the play."},
    {q:"Night is the time when the bat takes the air on leathern wings.", w:"Bats", dev:"imagery and metaphor — wings compared to leather", why:"The comparison makes the bat both strange and exact, so the reader sees the animal rather than an idea about it."}
  ],
  characters:[
    {n:"Baroka", w:"The Lion and the Jewel", d:"the Bale of Ilujinle — cunning, experienced, and the older order that wins the argument of the play"},
    {n:"Lakunle", w:"The Lion and the Jewel", d:"the young school teacher who despises custom and wants a modern marriage without bride-price"},
    {n:"Sidi", w:"The Lion and the Jewel", d:"the village beauty whose photograph in a magazine begins the contest for her"},
    {n:"Sadiku", w:"The Lion and the Jewel", d:"Baroka's head wife, who carries the older women's wisdom and the trick that ends the play"},
    {n:"Hermia", w:"A Midsummer Night's Dream", d:"the defiant daughter who chooses her own husband against her father and the law"},
    {n:"Demetrius", w:"A Midsummer Night's Dream", d:"the inconstant lover whose change of heart drives the middle of the plot"}
  ],
  themes:[
    {t:"Custom and modernity contend for the same ground", w:"The Lion and the Jewel", ev:"Lakunle would abolish the bride-price and Baroka would keep it, and the play settles the argument not by debate but by the outcome of the contest for Sidi"},
    {t:"Wit can be stronger than youth", w:"The Lion and the Jewel", ev:"Baroka, the older man, wins Sidi by a trick that the younger school teacher never sees coming"},
    {t:"Theatre holds a mirror to its own audience", w:"A Midsummer Night's Dream", ev:"the mechanicals' play and Theseus's speech on the imagination make the audience watch itself watching"},
    {t:"Names and titles are used to claim possession", w:"The Lion and the Jewel", ev:"Sidi is called the jewel of Ilujinle and is photographed for a magazine — both are ways of taking hold of her"}
  ],
  facts:[
    {q:"Distinguish tragedy from comedy in one sentence each.", a:"Tragedy follows a person of high standing from prosperity to ruin through a flaw in their own nature and ends in death; comedy moves from confusion to reunion and ends in marriage or festival."},
    {q:"What is a tragic flaw, and where does it come from?", a:"A tragic flaw is the quality in the hero's own nature that brings about the fall — pride, jealousy, ambition, or a readiness to believe. It is not bad luck: the fall follows from what the hero is."},
    {q:"Explain the difference between a character's traits and a character's role.", a:"A trait is a quality the character shows repeatedly in speech and action; a role is the work the character does in the plot — protagonist, antagonist, foil, confidant or fool."},
    {q:"What is a foil, and why does a playwright use one?", a:"A foil is a second character whose opposite qualities throw the main character into relief; by placing them side by side the writer shows the main character's nature without explaining it."},
    {q:"Give the three questions to ask of any figure of speech you find on the page.", a:"What two things are being brought together; what does the comparison make the reader or audience see; and what does it reveal about the character speaking it."},
    {q:"What must a short play of your own contain?", a:"A situation that is already tense, a small cast, a clear objective for the main character, an obstacle in the way, and a change at the end."},
    {q:"Why is The Lion and the Jewel called a comedy rather than a tragedy?", a:"Because the confusion and rivalry are put right and the play closes with the marriage of Baroka and Sidi; nobody is ruined, and the mood is satire and delight rather than pity and fear."}
  ],
  tf:[
    {s:"A melodrama asks the audience to think rather than to feel.", a:"false", why:"Melodrama simplifies its characters into heroes and villains and loads the plot with sensation precisely so that the audience is moved rather than made to think."},
    {s:"A foil is a character whose opposite qualities throw another character into relief.", a:"true", why:"The contrast shows the main character's nature without the writer having to state it."},
    {s:"A stage direction is spoken aloud by the actors.", a:"false", why:"Stage directions are the writer's instructions to the actors and the crew; they are printed in italics or brackets and are not spoken."},
    {s:"In a tragedy the hero's fall comes from a flaw in his own nature.", a:"true", why:"That is what separates tragedy from misfortune: the ruin follows from what the hero is, not only from what happens to him."},
    {s:"A tragic-comedy ends with the death of the main character.", a:"false", why:"A tragic-comedy raises a real danger but resolves it happily; the death belongs to tragedy."},
    {s:"When writing about a character, quoting one line is enough to prove a trait.", a:"false", why:"A trait is shown repeatedly. Name the trait, give the evidence, and add a second reference; one line may be a moment rather than a quality."}
  ],
  apply:[
    {q:"Is Baroka a villain or a victor? Give two pieces of evidence and a reason for your view.", a:"He is better called a victor than a villain: he tricks Sidi into his house and wins her, but Soyinka gives him wit, self-knowledge and the best lines — he is the character who sees the argument of the play most clearly. Two pieces of evidence: his trick of the stamp, and his defence of custom against Lakunle's borrowed modernity."},
    {q:"‘Lakunle wants to modernise the village but not to understand it.’ Discuss with reference to the bride-price.", a:"Lakunle refuses the bride-price as a matter of principle, yet his objection is about what the custom costs him, not about what it means to the village; he never asks why the payment exists. Soyinka makes him quote English poets and misuse English words, so the reader sees that his modernity is copied rather than thought through."},
    {q:"Show how one figure of speech in the set text changes the way the audience sees a character.", a:"In The Lion and the Jewel, calling Sidi ‘the jewel of Ilujinle’ praises her beauty and at the same time treats her as an object to be owned — and the whole contest of Baroka and Lakunle is conducted on that assumption. The figure is therefore not decoration: it states the play's argument about how women are valued."},
    {q:"You are staging one scene of A Midsummer Night's Dream for a hall with no scenery. What two decisions do you take, and why?", a:"Use the verse and the prose to establish place — the court speaks verse, the mechanicals prose — and light the wood and the palace differently while the actors speak the lines that name where they are, so the audience is placed by what they hear and see rather than by scenery."}
  ],
  passage:{
    title:"Practice extract — the Bale and the schoolmaster",
    text:"LAKUNLE: I do not come to haggle. I come to say, \nplainly, that a man who buys a woman's hand \nwith goats and cloth insults the woman he takes. \n\nBAROKA: [slowly] Insults her. Hm. And the goats, \nthe cloth, the kola — these insult her too? \n\nLAKUNLE: They are the price of a market thing. \n\nBAROKA: Or the thanks of a house to the house it joins. \nTell me, schoolmaster: when your father's father \nsent his kola to my father's father's door, \nwas that a purchase, or a word spoken \nin a tongue you have forgotten how to hear? \n\nLAKUNLE: I have forgotten nothing. I have learned \nto see what custom costs. \n\nBAROKA: You have learned to count, \nand having counted, you have not yet learned to read.",
    qs:[
      {q:"What is Baroka's argument against Lakunle in this extract, stated in one sentence?", a:"Baroka argues that the bride-price is not a purchase but a word of thanks and a bond between two houses, spoken in a language Lakunle no longer understands."},
      {q:"‘They are the price of a market thing’ — name the device and explain what it assumes.", a:"It is a metaphor: the bride is spoken of as a market thing that can be priced. The line assumes that anything paid for is thereby bought and degraded, which is the assumption Baroka spends the rest of the extract answering."},
      {q:"Baroka closes with: ‘You have learned to count, / and having counted, you have not yet learned to read.’ What is the contrast, and what does it say about the two men?", a:"To count is to measure cost; to read is to understand meaning. Baroka is saying that Lakunle can reckon what a custom costs him but cannot understand what it means to the people who keep it — the contrast between borrowed learning and inherited understanding, which is the play's central quarrel."},
      {q:"Which character has the stronger position in this extract? Support your answer with two references.", a:"Baroka: he answers with a question rather than an accusation, and he carries the argument back to the ancestors — ‘when your father's father / sent his kola to my father's father's door’ — where Lakunle can only repeat his objection in different words."},
      {q:"Write one theme of the play that this extract supports, with the evidence for it.", a:"Theme: custom is a language, and those who abandon it lose the ability to understand their own people. Evidence: Baroka's ‘a word spoken / in a tongue you have forgotten how to hear’."}
    ]
  },
  write:[
    {p:"Write an essay: ‘Baroka wins because he understands the village; Lakunle loses because he is ashamed of it.’ Discuss.", guide:"Three body paragraphs, each on one contest — the school, the bride-price, the stamp. Give at least two quotations. Answer one objection to your own argument."},
    {p:"Write a short play scene of twenty-five lines or more in which an older and a younger character argue about one custom in your own community.", guide:"Give each a different manner of speech; let the older character use a proverb or a story; end on a decision or an action, not a summary."},
    {p:"Rewrite the ending of A Midsummer Night's Dream so that Puck does not repair his mistake. Say, in a paragraph, what the genre of the play would then be.", guide:"Consider what happens to the lovers and to the marriages, and whether the ending would now be a comedy, a tragic-comedy or something darker."}
  ],
  activities:[
    "Discuss the types of drama and the traits and roles of characters in the play",
    "Read the selected Shakespearean drama in parts",
    "Identify and discuss the figurative expressions used in the drama",
    "In groups, write a short drama of your own",
    "Dramatize the best group play for the class"
  ],
  materials:["A Midsummer Night's Dream by William Shakespeare","The Lion and the Jewel by Wole Soyinka","Black Woman by L.S. Senghor","Bats by D.H. Lawrence","Prentice Hall Literature","Audio-visual material in DVDs"],
  assessment:["Quizzes","Classwork","Homework","Group dramatization"]
},
{
  grade:10, period:"III", sem:"One", icon:"🥁",
  title:"African Drama",
  subtitle:"Drama in acts and scenes, exposition, conflict, climax and resolution, and the devices of African playwriting",
  outcomes:[
    "Learners are able to demonstrate knowledge of African Drama and relate them to real life situations"
  ],
  objectives:[
    "Sequence drama by scenes and acts",
    "Explain drama exposition",
    "Distinguish the different types of drama",
    "Develop drama writing skills",
    "Relate events in a drama to real life situations"
  ],
  note:"A play is built in <b>acts</b> and <b>scenes</b>. The <b>exposition</b> is the opening material that tells the audience who these people are and what is wrong before the action starts. In African drama the conflict is often between <b>custom and change</b>, and the community itself is frequently one of the characters.",
  study:[
    /* ---- course text: Semester One, Period III — African Drama (guide pp. 5-6) ---- */
    {k:"h3", t:"What Makes Drama African"},
    {k:"p", t:"**African drama** takes its material from African life — its histories, its quarrels between custom and change, its villages and its cities — and it keeps the forms of African performance. A play may open with a **drum** or a **libation**, break into **song** and **dance**, use **mime** and **mask**, and allow the audience to answer the actors. Time is not always a straight line: a **flashback** may bring an ancestor onto the stage, and the living and the dead may share a scene."},
    {k:"p", t:"Because performance in Africa is communal, the **community** is often treated as a character: a chorus of village women, a market, a crowd. The individual is measured against the group, and the resolution often restores the group rather than rewarding one person."},
    {k:"rule"},
    {k:"h3", t:"The Shape of a Play: Exposition to Resolution"},
    {k:"p", t:"**Exposition** is the opening stretch of the play that supplies what the audience must know before the action can begin: who the people are, what they want, what stands in the way, and what happened before the curtain. After it comes the **rising action**, in which the conflict tightens; the **climax**, the turning point after which the outcome is decided; the **falling action**, in which the consequences are seen; and the **resolution** or **denouement**, in which the knot is untied."},
    {k:"bul", items:[
      "**Exposition** — the situation and the past, given to the audience early.",
      "**Rising action** — complications; each scene raises the stakes.",
      "**Climax** — the turning point; after it the ending is only a matter of time.",
      "**Falling action** — the consequences work themselves out.",
      "**Resolution** — the new state of things, and who has paid for it."
    ]},
    {k:"rule"},
    {k:"h3", t:"The Devices of the Playwright"},
    {k:"p", t:"A playwright works with **plot, conflict, climax, resolution, tragic hero, tragic flaw, protagonist, antagonist, irony, dialogue, comedy, tragedy, tragic-comedy and melodrama**. **Irony** is the gap between what a character believes and what the audience knows, or between what is said and what is meant. **Dialogue** carries everything: it must reveal character, advance the plot, and sound like a person speaking."},
    {k:"p", t:"Set texts for this period: **The Lion and the Jewel** by Wole Soyinka; **Second Class Citizen** by Buchi Emecheta; **The Rock** by Darlington Johnson; **The Definition of Love** by Andrew Marvell."}
,
    {k:"rule"},
    {k:"h3", t:"The Lion and the Jewel, Mapped from Exposition to Resolution"},
    {k:"p", t:"The five points of the plot are the map on which the African drama answer is placed. Worked on **The Lion and the Jewel**, the map is this, and the community is counted as one of the characters at every stage."},
    {k:"num", items:[
      "**Exposition** — the village of Ilujinle and its two claims on Sidi: the Bale's house, with its kola and its wives, and the schoolmaster's borrowed new world. The stranger's camera gives the village its reason to talk — Sidi is 'the jewel of Ilujinle' — and the women at the well carry the exposition to the audience before the two men have finished making their cases.",
      "**Rising action** — Baroka and Lakunle each state the claim in the market and the house: the bride-price against the 'modern marriage' without bride-price, and the women of the house, told the news before the play tells it, hold the third opinion. Each scene raises the stakes, because each puts Sidi one step closer to being chosen.",
      "**Climax** — the trick: Sidi is sent to the Bale's house to be wooed by the schoolmaster she expects. The audience sees the switch; Sidi does not — and the gap between what the audience knows and what the character believes is the play's engine at its fullest, the dramatic irony doing the plot's work.",
      "**Falling action** — the village wakes to what has happened, and the contest that was about a woman turns out to have been about two ages. The consequence works itself out in the market, where the proverb, not the argument, says what the play has shown.",
      "**Resolution** — Sidi marries the Bale. The village's order is restored, but not on the schoolmaster's terms: custom has not been refuted, it has outwitted the man who would have replaced it, and the ending is the community's as much as Sidi's."
    ]},
    {k:"p", t:"The map is the answer to the question 'trace the plot' — but the question is more often 'what is the function of the climax' or 'how does the exposition establish the conflict', and the map is still the instrument: the stage is named, the event is quoted or closely paraphrased, and the function is stated. The function of the exposition in the Jewel is to give the audience the law of the village — the jewel is named, the two claimants are set, and the woman is not yet asked — so that the climax, when it comes, is felt as the working of a law the audience has already seen."},
    {k:"table", head:["Device of the African stage","What it does in performance","Where to hear it","The question it answers"], rows:[
     ["The drum","opens the play, keeps time, summons the village","the opening of the Jewel, and the well scene when it begins low","who is gathering, and when"],
     ["The libation","pours a drink to the ancestors before a word of dialogue","the play's opening, before the business of the living","who is present that the stage cannot show"],
     ["Song and dance","carries the community's opinion the play will not let an individual say","the women's chorus, the market scenes","what the village feels about the act just seen"],
     ["Mime and mask","presents a spirit or an ancestor as a person on stage","the flashback that brings the dead back to the scene","how the past acts in the present"],
     ["The chorus","comments on the action and speaks for the community","the village women who answer the actors","who judges, and by what standard"],
     ["The audience's answer","the play allows the audience to answer the actors","the market, the gathering, the festival","what the tradition makes of the play"]]},
    {k:"p", t:"In the examination a device is never a decoration. The question 'how does the playwright use the chorus' wants three things in order: what the chorus says, what the saying does to the action, and what it says about the community. A device named without the effect is a word, and a word is not a reference."},
    {k:"h3", t:"Irony, Worked: the Beauty Outwitted"},
    {k:"p", t:"Irony is worked with **three questions**: what does the character believe, what does the audience know, and where is the gap. At the climax of the Jewel, Sidi believes she is being tested by the old order, in the house of the man her people call the lion; the audience knows she has already been won by it. The gap is not a joke about Sidi — it is the play's statement that custom does not need to argue, because it has arranged the ground on which the argument happens. Name the **kind** before you describe it: **verbal irony** is the gap between what is said and what is meant; **situational irony** is the outcome that defeats the expectation; **dramatic irony** is the gap between what the audience knows and what the character believes. The Jewel's climax is dramatic irony doing plot work, and the market afterwards is situational irony doing theme work."},
    {k:"p", t:"The **proverb** is the device African drama uses where another theatre uses the soliloquy. 'A man who has not travelled thinks his mother is the only cook' does not explain — it lets the village speak with an authority no single character has, and the audience, which owns the proverb, is made a speaker in the play. A proverb quoted in the examination answer, with the situation it is answering, is worth more than a paragraph of paraphrase, because the proverb is the form in which the community thinks, and the form is the point."},
    {k:"h3", t:"The Same Argument Across the Border: Second Class Citizen"},
    {k:"p", t:"**Second Class Citizen** (Buchi Emecheta) moves the period's argument from the village to the city and across an ocean. Adah leaves Nigeria for London to find the freedom the home did not have, and the play of her life is played against a harder servitude: the migration that promised freedom delivers a household to keep and a husband whose ambitions spend her wages. The **conflict changes shape** — person against society rather than person against custom — but the method does not: state the conflict, give the references, and say what the ending settles. The irony the novel runs on is the gap between the country where 'a woman is free' and the freedom that is only to work, and the irony is the engine, not the decoration, of the whole narrative."},
    {k:"p", t:"The shorter works of the period keep the argument at its smallest scale. **The Rock** (Darlington Johnson) holds the drama's question in a single stone — what stands, and what it stands against — and **The Definition of Love** (Andrew Marvell) is the poet's argument in verse, the conceit worked out with the coldness of the poles and the turning of the spheres, so that the reader feels the argument rather than the feeling. Half a page is enough for the drama's question: what is the thing, and who gets to give it its name."},
    {k:"h3", t:"The Liberian Ground: Libation and Chorus in the Country's Own Practice"},
    {k:"p", t:"The **libation** is not a theatrical affectation to the Liberian reader: it is the pouring at the funeral and the gathering, the call to the ancestors that comes before the business of the living, and the business waits on it. When the WASSCE asks how the playwright opens the play, a Liberian candidate can answer from the practice of the country — who is called, what is poured, and why the living's business waits on the calling — and the reference is not borrowed, it is remembered. The **chorus** works the same way: the women at the funeral carry the eulogy, the warning and the verdict, and the village women of the Jewel are that same office in another dress — the community's opinion given a voice it would not have if left to the individuals."},
    {k:"p", t:"The examination rewards the answer that hears the play in its own tradition, and the Liberian candidate already has the ear: the drum that summons, the libation that precedes, the song that carries the opinion, the answer the audience gives. A candidate who has only read the play as a book can name the devices; a candidate who has heard them at the gathering can say what they **do**, and the doing is where the mark is."},
    {k:"h3", t:"Common Mistakes in This Unit"},
    {k:"bul", items:[
      "Calling the **climax** the ending. The climax is the turning point — in the Jewel, the trick in the Bale's house — and after it the ending is only a matter of time; the falling action still has to be told, and the resolution still has to be named.",
      "Treating the **chorus** as background singing. The chorus is a character: it judges, it answers the actors, and a play that loses its chorus loses its community — the question that asks for the chorus's function wants the community's verdict.",
      "Naming the **libation** and describing it as an offering, without saying what it does. It brings the ancestors on to the stage, and the living's business is conducted in front of them; the offering is the how, the presence of the dead is the what.",
      "Confusing **dramatic irony** with **situational irony**. In dramatic irony the audience knows and the character does not — Sidi and the trick; in situational irony the outcome defeats the expectation — the schoolmaster who would abolish custom defeated by it.",
      "Listing the **devices** without the **effect**. 'The play uses song and the drum' earns nothing; 'the women's song gives the village its opinion of the Bale before he speaks' earns the mark.",
      "Getting the names wrong — **Baroka, Lakunle, Sidi, Sadiku**, the **Bale** of Ilujinle, **Emecheta** — and the loss of the mechanics mark that sits on the reference."
    ]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**An African drama essay from Paper 3, Section A** — two questions are set on each prescribed play and one is answered; the question will turn on the exposition, the conflict, the climax and the resolution, named in the text with the references",
      "**A device with its work** — the drum, the libation, the chorus, the mask or the audience's answer, each with the quoted or closely paraphrased example and the effect on the community",
      "**A theme stated as a sentence** — 'custom and change contend, and the village decides' — with the two references that show the contest and the decision",
      "**Irony, named and placed** — the kind, the words or the moment, and what the gap means for the play's argument; the dramatic irony of the trick is the one the paper is likeliest to set",
      "**A character analysed** — trait, evidence, effect, and the community counted as one of the characters where the play makes it so",
      "**The context questions in Paper 1** — theme, characterization, style or setting in the Shakespearean text, each answered in a line or two with the reference woven in"
    ]},  ],
  terms:[
    {t:"exposition", d:"the opening material that tells the audience what it must know before the action begins", x:"The exposition establishes who Sidi is and why the village is talking about her."},
    {t:"rising action", d:"the complications that tighten the conflict after the exposition", x:"The rising action brings the stranger's magazine to Ilujinle and with it the contest for Sidi."},
    {t:"climax", d:"the turning point of the plot, after which the outcome is decided", x:"The climax comes when Sidi discovers the trick that has been played on her."},
    {t:"falling action", d:"the events that show the consequences of the climax", x:"In the falling action the marriage is prepared and the village begins to celebrate."},
    {t:"resolution", d:"the untangling at the end of the play; the new state of things", x:"The resolution restores the village's order, though not on the terms the schoolmaster wanted."},
    {t:"denouement", d:"another name for the resolution — the untying of the knot", x:"The denouement answers every question the exposition raised."},
    {t:"irony", d:"a gap between what is said and meant, or between what a character believes and what is true", x:"It is irony that the village beauty is outwitted by the oldest man in it."},
    {t:"flashback", d:"a scene that shows an event earlier than the main action", x:"A flashback brings the dead brother back to the stage."},
    {t:"chorus", d:"a group who comment on the action and speak for the community", x:"The women's chorus sings the village's opinion of Baroka."},
    {t:"dialogue", d:"what the characters say to one another on stage", x:"Good dialogue reveals character and moves the plot at the same time."},
    {t:"protagonist", d:"the character whose want drives the plot", x:"Sidi is the protagonist in the sense that the contest turns on her choice."},
    {t:"antagonist", d:"whoever or whatever stands in the protagonist's way", x:"In African drama the antagonist is often custom, or the community itself."}
  ],
  quotes:[
    {q:"The roof of the house is thatched, but the rain that falls on it is the same rain.", w:"The Lion and the Jewel", dev:"proverb used as metaphor", why:"Soyinka puts a proverb into the dialogue so that an argument about custom sounds like the village speaking, not like the author explaining."},
    {q:"A man who has not travelled thinks his mother is the only cook.", w:"The Lion and the Jewel", dev:"proverb and imagery", why:"The proverb rebukes Lakunle's borrowed modernity in a form the village — and the audience — recognises at once."},
    {q:"She is no longer a girl; she is a question the village must answer.", w:"The Lion and the Jewel", dev:"metaphor — the girl is called a question", why:"It shows Sidi as the matter in dispute between two ages of the village rather than as a person with her own say."},
    {q:"The drum does not lie about the hour; it is the hour that lies about the drum.", w:"The Lion and the Jewel", dev:"paradox", why:"The paradox carries the play's argument that the old ways keep a time the new ways have lost."},
    {q:"My love is of a birth as rare / As 'tis for object strange and high.", w:"The Definition of Love", dev:"conceit — an extended and ingenious comparison", why:"Marvell's comparison is worked out with the coldness of the poles and the turning of the spheres, so that the reader feels the argument rather than the feeling."}
  ],
  characters:[
    {n:"Baroka", w:"The Lion and the Jewel", d:"the Bale whose cunning wins the contest and who stands for the older order"},
    {n:"Lakunle", w:"The Lion and the Jewel", d:"the school teacher whose borrowed modernity Soyinka satirises"},
    {n:"Sidi", w:"The Lion and the Jewel", d:"the village beauty whose choice settles the play"},
    {n:"Sadiku", w:"The Lion and the Jewel", d:"the head wife whose loyalty to Baroka runs deeper than her mockery of him"},
    {n:"The Surveyor", w:"The Lion and the Jewel", d:"the stranger from the town whose camera sets the whole contest going"},
    {n:"Adah", w:"Second Class Citizen", d:"the heroine who carries her family's survival and her own ambition from Nigeria to London"}
  ],
  themes:[
    {t:"Custom and change contend, and the village decides", w:"The Lion and the Jewel", ev:"the contest for Sidi is settled inside the village, not by the stranger from the town"},
    {t:"Wit and experience outmatch borrowed learning", w:"The Lion and the Jewel", ev:"Baroka's trick succeeds because he understands the village and Lakunle only quotes books"},
    {t:"A woman may be the prize of a contest she did not choose", w:"The Lion and the Jewel", ev:"Sidi is photographed, named a jewel, and argued over before she is asked"},
    {t:"Migration promises freedom and delivers a harder servitude", w:"Second Class Citizen", ev:"Adah leaves home for London and finds herself working and keeping a household while her husband's ambitions consume her wages"}
  ],
  facts:[
    {q:"What does the exposition of a play supply, and why does it matter?", a:"It supplies who the people are, what they want, what stands in their way and what happened before the curtain rose. Without it the audience cannot measure the crisis when it comes."},
    {q:"Give the five parts of a play in order and say what each does.", a:"Exposition (the situation), rising action (complications), climax (the turning point), falling action (the consequences) and resolution or denouement (the new state of things)."},
    {q:"Why is the community often treated as a character in African drama?", a:"Because performance in African societies is communal: the individual is measured against the group, and the ending usually restores the group rather than rewarding a single hero."},
    {q:"Name three elements of African performance that a playwright may bring onto the stage.", a:"Drumming, song and dance; mime and masking; and a libation or invocation, with the audience answering the actors."},
    {q:"What is irony, and why is it useful to a playwright?", a:"Irony is a gap between what is said and meant, or between what a character believes and what the audience knows. It lets the audience understand more than the character does, which creates suspense and, in comedy, superior delight."},
    {q:"How does a flashback work in a play, and what does it add?", a:"A flashback presents an event earlier than the main action, often by bringing a dead or absent person onto the stage. It supplies the past that presses on the present, which is why it suits plays about inheritance and guilt."},
    {q:"Relate one event in the set play to a real-life situation in your own community.", a:"The contest between Baroka and Lakunle over the bride-price is played out wherever an older generation keeps a custom and a younger one, educated elsewhere, is ashamed of it — in disputes over marriage, over funerals, or over who speaks for the family."}
  ],
  tf:[
    {s:"The exposition comes at the end of a play.", a:"false", why:"The exposition opens the play: it gives the audience the situation and the past before the action begins. The ending is the resolution."},
    {s:"The climax is the point after which the outcome is decided.", a:"true", why:"Everything after the climax is consequence — the falling action and the resolution merely work out what the turning point has settled."},
    {s:"In African drama the community is often treated as one of the characters.", a:"true", why:"Because performance is communal, the chorus, the market or the village may act and speak as a single presence against which the individual is measured."},
    {s:"Irony means that a character says exactly what they mean.", a:"false", why:"Irony is a gap between what is said and meant, or between what a character believes and what the audience knows."},
    {s:"A flashback shows an event that happens after the main action.", a:"false", why:"A flashback shows an event earlier than the main action; a forecast of what is to come is foreshadowing."},
    {s:"Dialogue in a play should reveal character and advance the plot at the same time.", a:"true", why:"If a speech does neither, it is decoration and should be cut; drama can only show what is said and done."}
  ],
  apply:[
    {q:"‘Sidi is the most important character and the least free.’ Discuss, with two references to the play.", a:"Everything turns on her — the photograph, the contest, the trick — yet she is named a jewel, bargained over, and deceived into Baroka's house. Her importance and her powerlessness are the same fact: the play keeps her at the centre and never lets her choose the terms."},
    {q:"Show how one proverb in the set text does the work of an argument.", a:"‘A man who has not travelled thinks his mother is the only cook’ answers Lakunle in a form the village recognises. It accuses him of narrowness without raising its voice, and it turns the quarrel from a debate about bride-price into a question of what he has actually understood."},
    {q:"Relate the quarrel between Baroka and Lakunle to a dispute you know of in your own community, and say what the play would advise.", a:"Wherever a younger generation returns from school or from abroad and rejects a custom without asking why it exists, the same quarrel is being played. The play does not simply side with the old: it punishes Lakunle for his contempt and Baroka for his trick, and it suggests that the custom must be understood before it is either kept or thrown away."},
    {q:"You must cut the set play to twenty minutes for a school stage. What do you keep, and why?", a:"Keep the exposition that establishes Sidi and the photograph, the two contests between Baroka and Lakunle, and the trick and the outcome. Cut the subplots and any song that does not advance the contest, because the argument between custom and change is what the play is about and the audience must see it settled."}
  ],
  passage:{
    title:"Practice extract — the village women at the well",
    text:"SADIKU: [to the women] Is it not the rain that makes the yam? \nIs it not the yam that makes the child? \nAnd is it not the child that makes the man \nwho stands before us asking to be Bale? \n\nWOMEN: [a murmur] It is so. \n\nSADIKU: Then let him ask the rain. Let him ask \nthe yam, the child, the man. Let him not ask \nthe school, for the school is a house of chalk \nand chalk is white — it writes, and the rain \ntakes it in one night, and nothing is left. \n\n[She lifts her pot. The drum begins, low.] \n\nBAROKA: [entering] Woman, you speak well of me. \nYou should, I keep you. \n\nSADIKU: And I keep you, my lord. The pot, \nthe fire, the water — these are mine. \nYou are only the mouth that eats.",
    qs:[
      {q:"What is Sadiku's argument in the first four lines?", a:"She argues, in a chain of proverbs, that authority comes out of the life of the village — rain, yam, child, man — and not out of the school, which she calls a house of chalk whose writing the rain washes away in a night."},
      {q:"‘the school is a house of chalk / and chalk is white — it writes, and the rain / takes it in one night’ — name two devices and explain the comparison.", a:"Metaphor (the school is called a house of chalk) and imagery (the rain washing the writing away). The comparison says that book-learning is a mark on a surface, easily erased, while the knowledge of the village is the thing that grows a yam and raises a child."},
      {q:"How does Sadiku's last speech change the power relation between her and Baroka?", a:"Baroka claims that he keeps her; she answers that she keeps him — the pot, the fire and the water are hers, and he is only the mouth that eats. The exchange shows that their dependence is mutual, and it lets the audience see the Bale from below."},
      {q:"What does the stage direction ‘She lifts her pot. The drum begins, low’ add that the dialogue cannot?", a:"It places the scene in working life and in performance at once: the pot is the women's labour and the drum is the theatre of the village, so the audience is reminded that this argument is being conducted in public, with a rhythm behind it."},
      {q:"Write one theme of the play supported by this extract, with the evidence for it.", a:"Theme: real authority in the village belongs to those who sustain life, not to those who hold a title. Evidence: ‘I keep you, my lord. The pot, / the fire, the water — these are mine.’"}
    ]
  },
  write:[
    {p:"Write an essay: ‘In The Lion and the Jewel the village, not the individual, is the real protagonist.’ Discuss.", guide:"Consider the chorus of women, the market and the drum as well as the named characters. Give at least three references."},
    {p:"Write the opening two pages (exposition) of a play set in your own community in which a stranger arrives and changes what the village wants.", guide:"Establish who everybody is, what they want and what happened before, inside the first two pages, without a narrator."},
    {p:"‘Sidi is not given a real choice at the end of the play.’ Do you agree?", guide:"Argue from the trick and from her age and position in the village; consider what the play gains by leaving her own view of the marriage unspoken."}
  ],
  activities:[
    "Read the selected African drama in parts",
    "In groups, brainstorm the similarities and differences between the types of drama",
    "Discuss the exposition of the play and answer questions on it critically",
    "Identify and discuss the literary devices used in the play",
    "In pairs, write a short play; the best is acted out in class"
  ],
  materials:["The Lion and the Jewel by Wole Soyinka","Second Class Citizen by Buchi Emecheta","The Rock by Darlington Johnson","The Definition of Love by Andrew Marvell","Prentice Hall Literature","Listen to the Story Teller — A Critical Thinking Liberian Anthology (T. Michael Weah & Llord Aidoo)","Audio-visual material in DVDs"],
  assessment:["Quizzes","Classwork","Homework","Dramatization"]
}
,
{
  grade:10, period:"IV", sem:"Two", icon:"📖",
  title:"African Prose",
  subtitle:"The types of prose, and how to analyse prose narrative using literary devices",
  outcomes:[
    "Learners are able to demonstrate their understanding of Literature as a set of related systems and apply the literary devices"
  ],
  objectives:[
    "Interpret different types of prose",
    "Appreciate prose as a work of art",
    "Analyze prose using literary devices"
  ],
  note:"<b>Prose</b> is written or spoken language in its ordinary form, in sentences and paragraphs. The three types are <b>fictional prose</b> (imagined: the novel, the short story), <b>non-fictional prose</b> (essays, biography, history, report) and <b>heroic prose</b> (tales of great deeds, often from oral tradition).",
  study:[
    /* ---- course text: Semester Two, Period IV — African Prose (guide p. 7) ---- */
    {k:"h3", t:"The Types of Prose"},
    {k:"p", t:"**Prose** is language set out as we speak it, in sentences and paragraphs, rather than in the lines and stanzas of verse. It is the ordinary vehicle of the novel, the short story, the essay and the report. In this course we study three types."},
    {k:"bul", items:[
      "**Fictional prose** — imagined narrative: the **novel** (long, with several characters and plots) and the **short story** (short, with one situation and few characters). The writer invents the people and the events.",
      "**Non-fictional prose** — writing about what is the case: **biography** and **autobiography**, **essay**, **history**, **report**, **article**, **letter**. The writer is answerable to fact.",
      "**Heroic prose** — narrative of great deeds, usually drawn from **oral tradition**: epic, legend and the tale of the hunter or the founder. It is told in a heightened register, and the hero stands for the values of a people."
    ]},
    {k:"rule"},
    {k:"h3", t:"Analysing Prose with the Literary Devices"},
    {k:"p", t:"To **analyse** prose is to take it apart and say how it works. You take a **passage**, decide what it is doing, and then show the **devices** by which it is done. The same devices you learned for drama are at work here: **imagery**, **symbolism**, **irony**, **metaphor**, **simile**, **personification**, and — in narrative — **point of view**, **flashback**, **foreshadowing** and **suspense**."},
    {k:"p", t:"Work to a method. One: say what the passage is about in one sentence. Two: name the device and quote the words. Three: say what the device makes the reader see or feel. Four: say how it serves the whole book. That is the whole of prose analysis."},
    {k:"rule"},
    {k:"h3", t:"Prose as a Work of Art"},
    {k:"p", t:"Prose is a **work of art** when its form is deliberate: when the order of events, the choice of who tells the story, the rhythm of the sentences and the images that recur all work towards one meaning. To **appreciate** it, you do not have to like it — you have to be able to say what it does and how."},
    {k:"p", t:"Set texts for this period: **Second Class Citizen** by Buchi Emecheta; **The Invisible Man** by Ralph Ellison; **Caged Bird** by Maya Angelou; **The Song of the Women of My Land** by Oumar Farouk Sesay."}
,
    {k:"rule"},
    {k:"h3", t:"The Unit's Own Passage, Analysed the Right Way"},
    {k:"p", t:"The practice extract of this unit — 'the journey, and what it cost' — is worked in the four-step method the unit gives, so that the method can be carried into the examination with the steps already done once."},
    {k:"num", items:[
      "**Step one — what the passage is about, in one sentence.** A woman folds her fare into the lining of her coat and goes to stand at a street where nobody knows her name, while the man she is leaving keeps his eyes on his studies; the passage is the cost of a promise of freedom, paid by one of the two before the journey has begun.",
      "**Step two — the devices, named and quoted.** The rain against the window answers the rain at home, 'which fell on a roof her mother's mother had thatched, and which nobody had to pay for' — the **contrast** is the device, and it does the work of the whole theme in one clause. 'He was cutting his nails with the small scissors, carefully, the way a man cuts something he owns' — the **simile** makes him a man who owns what he touches, and the reader feels the woman as the one who owns nothing and is about to own the street. 'You will manage,' he said, and 'It was meant as praise. She heard it as a sentence' — the **irony** of the same words carrying two meanings, the man's and the woman's, is the passage's engine.",
      "**Step three — what the devices make the reader see or feel.** The two rains are the two lives in one sentence: the rain that is a gift of the house, and the rain that is a rent. The reader is made to feel the journey as a transaction rather than an adventure — and that is the **irony** the passage runs on: the freedom bought with the folded money is a freedom only to work, and the reader understands it before the characters do.",
      "**Step four — how it serves the whole book.** The passage is the hinge of the migration argument: after it, the reader judges the man by his studies and the woman by her street, and the book's verdict on the country where a woman is free is reached without the book stating it. The ending of the passage — 'That, at least, was the whole point' — is the theme, and the theme is placed where the analysis says it will be."
    ]},
    {k:"p", t:"That is the whole of prose analysis, and it takes less time than a summary takes. The summary says what happens; the analysis says **how the book makes the reader feel that what happened matters** — and the WASSCE prose paper pays for the second, because the first can be written by anyone who has read the book, and only the second shows that the book was read as writing."},
    {k:"table", head:["Type of prose","The test that finds it","The writer is answerable to","The set example of this course"], rows:[
     ["Fictional prose","the people and the events are invented; the question is how true they feel","the reader's belief — the invented must behave like the real","the novel and the short story: Second Class Citizen, The Invisible Man"],
     ["Non-fictional prose","the writer is answerable to fact; every claim can be checked","the record — the biography, the history, the report, the letter, the article","the essay, and the book report the candidate writes"],
     ["Heroic prose","a great deed in a heightened register, usually from the mouth of the tradition","the value it carries — the hero stands for a people","the tale of the founder and the hunter, told as it has been told"]]},
    {k:"p", t:"The **novel** and the **short story** are told apart by scale rather than by kind: the novel carries several characters and several plots over hundreds of pages, and the story it tells can be told from more than one side; the **short story** holds one situation, few characters, one turn — and the turn is all it needs, because the short form has no room for the second plot. A candidate who calls a novel 'a short story with more pages' has missed the distinction the paper is testing."},
    {k:"h3", t:"Point of View, the Clues Worked"},
    {k:"p", t:"The unit gives three clues: whose thoughts are given, what the narrator knows that the characters do not, and whose interest the story serves. Worked on the set texts of this period: in **Second Class Citizen** the narration stays close to Adah's mind — the reader thinks her thoughts and shares her counting of the money — so the point of view is the **third person, limited**, and the interest served is hers. In **The Invisible Man** the narrator is the speaker, says *I*, and tells the story from a basement lit by 1,369 light bulbs — the **first person**, and the interest served is the one the title names: the man who is refused the sight of the others. In a **book report** the point of view is the candidate's own: the candidate is the narrator, and the judgement is the last and heaviest part of the report."},
    {k:"p", t:"The examination does not ask 'which person' alone; it asks **what the point of view does**. The first person limits the reader to what one character knows, and the reader therefore shares that character's ignorance and fear — which is how *The Invisible Man* makes the reader feel the refusal of sight rather than merely hear of it. The **omniscient** narrator moves from one mind to another and can say what none of the characters knows, and the gain is the whole, at the cost of the closeness. Name the person, then say what it costs and what it gives — the cost and the gain are the answer, and the person is only its first word."},
    {k:"h3", t:"The Set Texts, Each to Its One Sentence"},
    {k:"p", t:"Each text of the period takes up one of the great arguments of the prose, and the argument is found in the ending — the one sentence the book has been building to. **Caged Bird** (Maya Angelou) makes the caged bird a **symbol** of a people prevented from living freely, and the song is not joy but longing — 'of things unknown / but longed for still' — so the captive is defined by what is refused, not by what is given. **The Song of the Women of My Land** (Oumar Farouk Sesay) makes the women of the land a **collective figure**, and the song is older than the road — the endurance that outlasts the change the road brought, 'the women sang, and the song was older than the road.' **The Invisible Man** (Ralph Ellison) states its theme in the first line — 'I am invisible, understand, simply because people refuse to see me' — and builds the novel on the **paradox** that the invisibility is a social fact: the man is not literally unseen, he is unseen because the others will not look."},
    {k:"p", t:"The one sentence is the **theme**, and the theme is what the prose paper will set: the question is not 'what is the novel about' — that is the subject matter — but 'what does the novel argue', and the argument is the sentence defended by the three references. A candidate who can state each set text's one sentence without the book open has finished the review, because the references will come to the sentence, not the other way round."},
    {k:"h3", t:"The Liberian Ground: Heroic Prose and the Unseen Passage"},
    {k:"p", t:"**Heroic prose** is not a museum piece to the Liberian student: the founding tale of the town, the hunter's story, the tale of the river that gave the place its name — these are the country's own heroic prose, told in the heightened register at the gathering and the funeral, where the hero stands for the values of the people and the telling is the keeping. The WASSCE will ask the candidate to name the type and say what it carries, and the Liberian candidate can answer from the practice of the country rather than from the definition alone — the definition names it, and the tale the candidate has heard shows what it does."},
    {k:"p", t:"The **unseen prose passage** in Paper 1 is short — **120 to 150 words** — and it carries five questions: the subject in a sentence, the speaker or the narrator, one device quoted, the effect of the device, and the tone. The drill for the unseen passage is the unit's own method in miniature: read the passage twice, say the subject, find the one device that does the most work, quote it, and say what it makes the reader feel. The passage is unseen, but the method is not — the candidate who has analysed the set passages through the year will find the unseen passage is the same work at a smaller scale."},
    {k:"h3", t:"Common Mistakes in This Unit"},
    {k:"bul", items:[
      "Calling a novel **non-fictional prose** because it is true to life. The test is invention: if the people and the events are made, it is fictional, however true they feel — and the true-to-life feeling is what the fictional prose is for.",
      "**Summarizing** where the question asks **analysis**. 'The woman leaves for the city' is the summary; 'the two rains — the gift rain at home and the rent rain abroad — make the journey a transaction' is the analysis, and the paper pays for the second.",
      "Naming a device without the **words**. 'The passage uses imagery' earns nothing until the imagery is quoted; the device is in the diction, and the diction is the quotation.",
      "Confusing the **narrator** with the **author**. The narrator is a position in the text; the author is a person. The examination marks the first, and an answer that slides into the second — 'the author was angry about…' — has left the text.",
      "Stopping at the **person** in point of view. First or third is the beginning of the answer; what the point of view does — what it hides from the reader and what it gives — is the rest of it.",
      "Missing the **scale** in the novel-and-short-story distinction. The short story is not a small novel; it is one situation, one turn, few characters — and the turn is all it needs."
    ]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**The five unseen prose questions in Paper 1** — the passage of 120 to 150 words: the subject in a sentence, the speaker or the narrator, one device quoted, its effect, and the tone",
      "**A device with its work** — imagery, symbolism, irony, metaphor, point of view or foreshadowing, each named, quoted, and the effect stated in one sentence",
      "**A theme stated and supported** — the book's argument as a sentence, with two or three references that show the argument working, each reference commented",
      "**The point of view, and what it does** — the person, then the cost and the gain to the reader; the limited and the omniscient told apart by the knowledge the narrator has",
      "**The distinction of the types** — fictional from non-fictional from heroic, with the test that finds each and the set example that carries it",
      "**A book report that is not a summary** — the title, the author, the genre, the setting and the theme in a sentence each, the plot ending before the ending, and the judgement supported by a quotation"
    ]},  ],
  terms:[
    {t:"prose", d:"language written in sentences and paragraphs, not in verse", x:"The novel is written in prose."},
    {t:"fictional prose", d:"imagined narrative — the novel, the novella and the short story", x:"Faceless is fictional prose: its people are invented."},
    {t:"non-fictional prose", d:"writing about what is the case — essay, biography, history, report", x:"A biography is non-fictional prose: the writer is answerable to fact."},
    {t:"heroic prose", d:"narrative of great deeds, usually from oral tradition", x:"The tale of the founder of the town is heroic prose."},
    {t:"novel", d:"a long fictional narrative in prose", x:"Native Son is a novel of Chicago."},
    {t:"short story", d:"a brief fictional narrative, usually one situation and few characters", x:"A short story can be read in one sitting."},
    {t:"narrator", d:"the voice that tells the story", x:"The narrator of Second Class Citizen stays close to Adah's mind."},
    {t:"point of view", d:"the position from which the story is told — first person or third person", x:"A first-person point of view limits the reader to what one character knows."},
    {t:"symbolism", d:"an object or action standing for an idea beyond itself", x:"The caged bird is a symbol of a people prevented from living freely."},
    {t:"suspense", d:"the writer's holding back of what the reader wants to know", x:"Suspense is created by ending the chapter at the moment of decision."},
    {t:"foreshadowing", d:"a hint placed early of what is to come", x:"The storm on the first page foreshadows the quarrel that ends the book."},
    {t:"imagery", d:"language that appeals to the senses", x:"The imagery of heat and dust runs through the novel."}
  ],
  quotes:[
    {q:"The caged bird sings / with a fearful trill / of things unknown / but longed for still.", w:"Caged Bird", dev:"symbolism — the bird stands for a captive people", why:"The song is not joy but longing, so the symbol carries the whole argument of the poem: that the captive is defined by what is refused, not by what is given."},
    {q:"But a bird that stalks / down his narrow cage / can seldom see through / his bars of rage.", w:"Caged Bird", dev:"metaphor — rage given bars, as if it were a cage itself", why:"The metaphor makes the anger the prison rather than the escape, so the reader understands that the cost of captivity is paid inward."},
    {q:"I am invisible, understand, simply because people refuse to see me.", w:"The Invisible Man", dev:"paradox and metaphor — invisibility as a social fact", why:"The narrator is not literally unseen; he is unseen because others will not look. The paradox states the theme of the novel in a single line."},
    {q:"She had come to a country where a woman is free, and found that she was free only to work.", w:"Second Class Citizen", dev:"irony — the gap between what was promised and what is", why:"The irony measures the distance between the idea of the journey and the fact of it, which is the engine of the whole narrative."},
    {q:"The women sang, and the song was older than the road.", w:"The Song of the Women of My Land", dev:"personification and hyperbole — the song is given an age", why:"By making the song older than the road, the poet makes it older than the change that came with the road, and so sets the women's endurance against it."}
  ],
  characters:[
    {n:"Adah", w:"Second Class Citizen", d:"the heroine whose determination carries her from Lagos to London and whose wages carry everybody else"},
    {n:"Francis", w:"Second Class Citizen", d:"Adah's husband, whose ambitions and shame consume her earnings and her independence"},
    {n:"Bigger Thomas", w:"Native Son", d:"the young black man whose fear and rage drive the plot of Richard Wright's novel"},
    {n:"The narrator", w:"The Invisible Man", d:"the unnamed man who tells his own story from a basement lit by 1,369 light bulbs"},
    {n:"Maya", w:"Caged Bird", d:"the child who grows up in the poem's long autobiography and learns to speak again"},
    {n:"The women of the land", w:"The Song of the Women of My Land", d:"a collective figure: the women who work, sing and keep the place going"}
  ],
  themes:[
    {t:"Freedom promised is not the same as freedom given", w:"Caged Bird", ev:"the caged bird sings not of what it has but of what it longs for — ‘of things unknown / but longed for still’"},
    {t:"A person can be made invisible by the refusal of others to look", w:"The Invisible Man", ev:"‘I am invisible, understand, simply because people refuse to see me’"},
    {t:"Migration may exchange one servitude for another", w:"Second Class Citizen", ev:"Adah reaches London and finds herself working to keep a household while her husband studies"},
    {t:"The endurance of women holds a society together", w:"The Song of the Women of My Land", ev:"the song of the women is older than the road, and outlasts the change it came with"}
  ],
  facts:[
    {q:"Distinguish fictional from non-fictional prose.", a:"Fictional prose is imagined: the writer invents people and events, as in the novel and the short story. Non-fictional prose writes about what is the case — biography, essay, history, report — and the writer is answerable to fact."},
    {q:"What is heroic prose, and where does it come from?", a:"Heroic prose narrates great deeds — the epic, the legend, the tale of the hunter or the founder — and it comes largely from oral tradition. It is told in a heightened register because the hero stands for the values of a whole people."},
    {q:"Explain the difference between the narrator and the point of view.", a:"The narrator is the voice that tells the story; the point of view is the position that voice occupies — the first person of a character inside the story, or the third person outside it, whether limited to one mind or knowing all."},
    {q:"What is the difference between foreshadowing and suspense?", a:"Foreshadowing is a hint placed early of what is to come; suspense is the holding back of what the reader wants to know. The first points forward, the second makes the reader wait."},
    {q:"Give the four steps of the method for analysing a prose passage.", a:"Say what the passage is about in one sentence; name the device and quote the words; say what the device makes the reader see or feel; and say how it serves the whole book."},
    {q:"What does it mean to appreciate prose as a work of art?", a:"It means being able to say what the writing does and how — how the order of events, the choice of narrator, the rhythm of the sentences and the recurring images work together towards one meaning — whether or not you happen to like it."},
    {q:"Why is the short story a good form for studying literary devices?", a:"Because it is brief and concentrated: with one situation and few characters, every image and every placement of an event is doing visible work, so the devices are easier to see than they are across four hundred pages."}
  ],
  tf:[
    {s:"A biography is fictional prose.", a:"false", why:"Biography is non-fictional prose: it writes about a real life and the writer is answerable to fact, whatever art is used in the telling."},
    {s:"Heroic prose usually comes from oral tradition.", a:"true", why:"The epic, the legend and the founder's tale were spoken before they were written, and they keep the heightened register of performance."},
    {s:"In a first-person point of view the reader can know what every character is thinking.", a:"false", why:"A first-person narrator is limited to what that character can know. Knowing every mind is the mark of an omniscient third person."},
    {s:"Suspense is created by withholding what the reader wants to know.", a:"true", why:"Suspense is the delayed answer; the writer holds back the outcome and the reader is kept in the waiting."},
    {s:"A symbol is simply a decorated description.", a:"false", why:"A symbol is an object or action that stands for an idea beyond itself and keeps doing so through the work; decoration carries no meaning forward."},
    {s:"Analysing prose means summarising the story.", a:"false", why:"Summary says what happens; analysis says how the writing makes it mean. Analysis always names the device and quotes the words."}
  ],
  apply:[
    {q:"‘The caged bird is the most famous symbol in the set texts, but it is not the simplest.’ Explain, using the poem.", a:"The bird stands for a people prevented from living freely, but the poem complicates it: the bird sings, and the song is of longing rather than of joysuppression; and the bird's rage has ‘bars’ of its own, so captivity is shown to be an inward condition as well as an outward one."},
    {q:"Adah works and Francis studies. Show, with two references, how this reversal carries the novel's theme.", a:"The reversal shows that liberation is not a place but a condition: Adah reaches the country where a woman is free and finds herself free only to work, while the husband she keeps advances his own ambitions on her wages. The novel's theme — that a woman may exchange one servitude for another — is carried not by argument but by who pays for what."},
    {q:"Take one paragraph of the set text and show how the writer's choice of words creates mood.", a:"Choose a short passage, name the images that recur in it — heat, dust, a closed door — say what sense each appeals to, and then say what mood they build together and how that mood prepares the reader for what happens next."},
    {q:"Which type of prose would you use to tell the story of your own town, and why?", a:"Either is defensible: non-fictional prose for a history, because the reader must be able to trust the dates and the names; or heroic prose for the founding tale, because the values of the people are carried in the telling rather than in the evidence. The honest answer says what each form gains and loses."}
  ],
  passage:{
    title:"Practice extract — the journey, and what it cost",
    text:"She had counted the money twice, and it was the same: enough for the fare, enough for the first month, and nothing left over for the third. \n\nHe did not look up from the table. He was cutting his nails with the small scissors, carefully, the way a man cuts something he owns. \n\n‘You will manage,’ he said. ‘You always manage.’ \n\nIt was meant as praise. She heard it as a sentence. Outside, the rain began against the window of the room they rented by the week, and she thought of the rain at home, which fell on a roof her mother's mother had thatched, and which nobody had to pay for. \n\n‘And you?’ she said. \n\n‘I have my studies.’ \n\nShe folded the money into the lining of her coat and went to stand at the window, looking out at a street where nobody knew her name. That, at least, was something. That, at least, was the whole point.",
    qs:[
      {q:"‘He was cutting his nails with the small scissors, carefully, the way a man cuts something he owns.’ Name the device and say what it tells you about the character.", a:"It is a simile with an implied metaphor — the care he takes is compared to the care a man takes over something he owns, which quietly extends to her. The detail shows self-possession and a claim of ownership without his ever having to say it."},
      {q:"‘It was meant as praise. She heard it as a sentence.’ Explain the double meaning of ‘sentence’.", a:"A sentence is what he has spoken, and a sentence is what a court imposes — a term to be served. The narrator uses both meanings in one word: his praise is the thing that condemns her to be the one who always manages, and she hears the condemnation in it."},
      {q:"What is the effect of the contrast between the rain on the rented window and the rain at home?", a:"The rain at home falls on a roof her grandmother thatched, which nobody pays for; the rented room is paid for by the week. The contrast measures what migration has cost — from belonging to tenancy — and it does so without a word of complaint."},
      {q:"‘looking out at a street where nobody knew her name’ — why does the character take this as a gain?", a:"Because anonymity is the first thing she has ever owned outright: in the place she has left, being known meant being answerable. The line shows how little she has won, and how much that little is worth to her."},
      {q:"Write one theme of the set text that this extract supports, with the evidence for it.", a:"Theme: migration may exchange one servitude for another. Evidence: ‘You will manage … You always manage’ and ‘I have my studies’ — her labour is assumed, his ambition is assumed, and the money she has counted is not hers to spend."}
    ]
  },
  write:[
    {p:"Write an essay: ‘Migration in the set prose is a journey towards work, not towards freedom.’ Discuss.", guide:"Use two of the set texts. Three body paragraphs, two quotations each, and one paragraph answering an objection."},
    {p:"Write a short story of 500 words or more in which a journey changes what the traveller values.", guide:"Begin at the moment of arrival rather than departure. Let one object carry the change. End on a decision, not a moral."},
    {p:"Choose one paragraph from the set novel and analyse it in four steps: subject, device, effect, service to the whole.", guide:"Quote the paragraph in full, then write four short paragraphs, one for each step."}
  ],
  activities:[
    "In groups, discuss and interpret the different types of prose",
    "Read the selected African prose and present a report",
    "Discuss and analyse the prose using figurative expressions",
    "Keep a reading journal of the set novel, noting one device per chapter"
  ],
  materials:["Second Class Citizen by Buchi Emecheta","The Invisible Man by Ralph Ellison","Caged Bird by Maya Angelou","The Song of the Women of My Land by Oumar Farouk Sesay","Village Son by Dr. Kandakai","The Spot by T. Michael Weah","Audio-visual material in DVDs on prose"],
  assessment:["Quizzes","Classwork","Homework","Book report"]
},
{
  grade:10, period:"V", sem:"Two", icon:"📕",
  title:"African Prose — Subject Matter, Point of View and the Book Report",
  subtitle:"Subject matter, conflict, setting, moral and cultural values; figurative expression; the point of view of a novel; and the effective book report",
  outcomes:[
    "Learners are able to summarize given African Prose and write a short story (biography and article, etc.)"
  ],
  objectives:[
    "Outline subject matter, conflict, setting, moral, cultural values and their implications in selected African Prose",
    "Utilize figurative expressions",
    "Summarize African Prose in the form of book reports",
    "Analyze different kinds of writings",
    "Make inferences of the point of view of a novel"
  ],
  note:"The <b>subject matter</b> of a novel is what it is about; the <b>point of view</b> is where the teller stands. A <b>book report</b> gives the title, author and genre, states the setting and theme in a sentence, summarises the plot briefly, and then comments with evidence.",
  study:[
    /* ---- course text: Semester Two, Period V — African Prose (guide pp. 8-9) ---- */
    {k:"h3", t:"Subject Matter, Setting, Conflict and Moral"},
    {k:"p", t:"The **subject matter** of a work is the material it takes up — a marriage, a war, a migration, a dispute over land. The **setting** is the place, the time and the social conditions in which that material is worked out; in African prose the setting is often itself part of the argument, because the same events would mean something else in another place. The **conflict** is the struggle, and the **moral** is what the work concludes about how a life should be lived — though a good novel argues its moral rather than announcing it."},
    {k:"p", t:"**Cultural values** are the standards by which a community judges conduct: respect for age, hospitality, the duty to kin, the treatment of a widow, the worth of a child. When a novel sets two value systems against one another, as **Fences** and **Unexpected Joy at Dawn** do, the reader has to decide which character's conduct the book is asking to be judged, and by what standard."},
    {k:"rule"},
    {k:"h3", t:"Point of View"},
    {k:"p", t:"**Point of view** is the position from which the story is told. In the **first person** the narrator says *I* and the reader sees only what that character can see — which is how the reader comes to share a character's ignorance and fear. In the **third person** the narrator says *he* or *she*, and may be **limited** to one character's mind or **omniscient**, knowing all. You infer the point of view from three clues: whose thoughts are given, what the narrator knows that the characters do not, and whose interest the story serves."},
    {k:"rule"},
    {k:"h3", t:"The Effective Book Report"},
    {k:"p", t:"A **book report** is not a summary with an opinion stapled to it. It gives the **title**, the **author** and the **genre**; states the **publication date** if it is known; gives the **setting** and the **theme** in one sentence each; summarises the **plot** in a short paragraph, without giving away the end; names the **characters** that matter and what they do; states the **purpose** of the book and the **plot** that serves it; and closes with a **judgement** supported by evidence from the text."},
    {k:"bul", items:[
      "Title, author, genre and date.",
      "Setting — place, time and social conditions — in one sentence.",
      "Theme — stated as a sentence about life, not as one word.",
      "Plot — a short paragraph, ending before the ending.",
      "Characters — who matters, and what they do that matters.",
      "Judgement — your own, with the evidence that supports it."
    ]},
    {k:"p", t:"Set texts for this period: **Unexpected Joy at Dawn** by Alex Agyei-Agyiri; **Fences** by August Wilson; **The Leader and the Lead** by Niyi Osundare; **Journey of the Magi** by T.S. Eliot."}
,
    {k:"rule"},
    {k:"h3", t:"A Book Report, Worked in Full on Fences"},
    {k:"p", t:"The report is worked in the unit's order on **Fences** (August Wilson), so that each part can be seen in its place. The order is the shape the examiner expects, and the report is judged on the order as much as on the matter, because the reader must always know where to look."},
    {k:"num", items:[
      "**Title, author, genre, date.** *Fences*, by August Wilson, a drama in three acts on a black family in Pittsburgh, in the years after the war. The date, where it is known, is given in the first line, and the genre is named — the play is read in this course for the family it studies, but the genre is the drama, and the report says so.",
      "**Setting, in one sentence.** A black family's yard in Pittsburgh, in the years after the war, where a garbageman who once played ball is building the fence that gives the play its name — and the fence is the setting's argument, because the yard is where the family stands against each other.",
      "**Theme, in one sentence.** A man's disappointments are inherited by his family: the barrier a man builds to keep the world out is the barrier that keeps his son from his own road, and the play asks who pays for the standing.",
      "**Plot, in a short paragraph, ending before the end.** Troy Maxson keeps his family by the rule he learned in the ball field and in the white man's no; his wife Rose has kept the household for eighteen years and names what she has given up; his son Cory's football chance is the thing Troy takes away; and the play moves towards the night when the taking is paid for. The paragraph ends where the taking happens, because the ending belongs to the judgement.",
      "**The characters that matter.** Troy, the standing in front of everything — 'I stood in front of my daddy's hand and I stood in front of a white man's no'; Rose, the duty kept and named; Cory, the boy who will pay for the standing; and the fence itself, the structure that protects and imprisons at once — the symbol the play builds board by board.",
      "**Purpose, and the plot that serves it.** The play's purpose is to show how a disappointment becomes a rule and a rule becomes a barrier; the plot serves it by making the barrier a thing the family lives against — a fence you can see, put up while the son watches, and the watching is what the reader is made to share.",
      "**The judgement, with the evidence.** The play succeeds because it never argues its theme: the fence is built, the boy is kept from the field, and the audience is left with the question Rose puts — 'The boy will pay for the standing.' The reference is the evidence, and the judgement is the candidate's own, carried by the reference rather than by the opinion."
    ]},
    {k:"p", t:"The report is **not a summary with an opinion stapled to it** — the unit's warning, worked: the summary is the plot paragraph, the opinion is the judgement, and between them the setting, the theme, the characters and the purpose keep the report from collapsing into either. A candidate who writes the report in this order every time will find that the WASSCE prose question is the same instrument at a larger scale: the parts are the same, and only the length changes."},
    {k:"table", head:["Point of view","Whose thoughts are given","What the narrator knows","Whose interest it serves"], rows:[
     ["First person","the speaker's, in the I","only what the speaker has seen and heard","the speaker's — the reader shares the speaker's ignorance and fear"],
     ["Third person, limited","one character's, from outside","what that character knows, and sometimes more than the character would say","that character's — the reader is kept as ignorant as the character"],
     ["Third person, omniscient","several, moved between in one paragraph","everything, including what none of the characters knows","the book's — the reader is given the whole, and the judgement with it"]]},
    {k:"p", t:"Work the **three clues** in order on the unseen passage: the pronoun first — *I*, or *he* or *she*; then the mind given — whose thoughts are on the page; then the knowledge — what the narrator knows that the characters do not. Two of the three agreeing is the answer, and if they disagree the passage is working a trick the candidate should name, because the trick is the point the author is making with the point of view."},
    {k:"h3", t:"Cultural Values, Set Against One Another"},
    {k:"p", t:"The unit's question — when a novel sets two value systems against one another, which character's conduct is it asking to be judged, and by what standard? — is worked on **Fences** and on **Unexpected Joy at Dawn** (Alex Agyei-Agyiri). In Fences the value Troy serves is the **standing** — the self a man builds in front of what the world has refused him — and the value Rose serves is the **household**, the duty kept for eighteen years. The play does not say which is right; it shows the cost of each: the son kept from the field by the standing, and the wife who has given and been given in unequal measure, and who names the imbalance when she names it. In *Unexpected Joy at Dawn* the machinery is the same across a border: the value of the crossing set against the value of the home left, the narrator following two people across the border and the cost of crossing it, and the reader asked to judge by the standard the book has built rather than the standard the reader brings."},
    {k:"p", t:"In the examination, 'discuss the cultural values' wants four things in order: the **values named**, the **character who serves each**, the **reference that shows the clash**, and the **standard the book asks for**. The last is what separates the answer that scores from the one that merely lists, because the list is what any reader can make, and the standard is what only the book can give — found in what the work rewards and what it punishes, never in what a character says when a character is wrong."},
    {k:"h3", t:"The Shorter Works of the Period, to Their Sentences"},
    {k:"p", t:"**The Leader and the Lead** (Niyi Osundare) and **Journey of the Magi** (T.S. Eliot) carry the unit's argument in a page. The Osundare poem puns on the two senses of **lead** — to guide, and the metal — and sets them against each other: 'The lead does not know the road, and the leader has forgotten it', a leadership that has lost its way while still insisting on being followed, and the **antithesis** of the two senses is the whole of the poem's argument. The Eliot poem takes the nativity from the side of the travellers: a cold coming, the worst time of the year, a long journey, and a Birth that is 'Hard and bitter agony for us, like Death, our death' — the **simile** that turns the nativity into an ending as well as a beginning, and the closing paradox, 'I should be glad of another death', which asks the reader to work out what manner of dying the speaker means."},
    {k:"p", t:"Both show the unit's rule: a work of prose or verse is judged by the argument it makes, and the argument is found in the ending — the leader still demanding to be followed, the Magi glad of another death. The shorter works are the period's drill: the argument in a sentence, the device that carries it, and the ending that proves it, all of it in a page the candidate can carry in the head."},
    {k:"h3", t:"The Liberian Ground: the Report the School Already Teaches"},
    {k:"p", t:"The **book report** is the Liberian classroom's own instrument: the term's assigned reading, reported in the same order — title, author, genre, setting and theme in a sentence, the plot without the end, the judgement supported — is how the reading is checked in the school, and the WASSCE prose paper is the same instrument at national scale. **Paper 2** sets two questions on the African prose and two on the non-African prose; the candidate answers **one from each section**, in an hour and a quarter, for fifty marks on the paper. The habit the classroom builds through the year — the order of the parts, the sentence for the setting, the sentence for the theme, the plot that stops before the end — is exactly the shape of the paper, and the candidate who has reported the books term by term has already answered the method of the paper, and brings to it only the need for the length."},
    {k:"p", t:"The **subject matter** question is the one the Liberian candidate should never lose: what the work takes up, in a sentence that could be defended — a marriage across a border, a dispute over land, a migration and its cost. The subject matter is not the theme: the subject matter is what the work takes up, and the theme is what the work concludes about it, stated as a sentence about life. The two are kept apart in the report — the subject in the setting line, the theme in its own sentence — and kept apart in the answer, where the confusion of the two is the loss that is easy to make and hard to recover."},
    {k:"h3", t:"Common Mistakes in This Unit"},
    {k:"bul", items:[
      "Giving the **theme** as a single word — 'love', 'duty', 'the fence'. The theme is a sentence about life: 'a man's disappointments are inherited by his family', and the sentence must be defended by the reference.",
      "A book report that **gives away the end**. The plot paragraph ends before the ending; the ending belongs to the judgement, named there, and a report that tells the end in the plot has spent the judgement's material early.",
      "Confusing **first person** with **omniscient** because the speaker is reliable. The test is the knowledge: a first-person narrator can only tell what they saw; an omniscient narrator can move into another mind and say what no character knows.",
      "Missing the **date and the genre** in the report's first line. The mechanics of the format are part of the mark, and the reader who cannot find the genre in the first line will not look for it in the last.",
      "Judging by the standard **brought** rather than the standard **the book builds**. The question is which standard the work asks for, and that is found in what the work rewards and punishes — never in the opinion the candidate holds before the reading.",
      "Taking a **character's line** for the book's argument. A character can be wrong and the book can be right; the writer's point of view is what the finished book holds, and the line is the evidence for it, not the substitute."
    ]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**The African prose essay, Paper 2 Section A** — one of two questions on the prescribed novel, the hour and a quarter shared with the non-African section, fifty marks on the paper for the two answers together",
      "**The book report, in the order** — title, author, genre and date; the setting and the theme in a sentence each; the plot ending before the ending; the characters and what they do; the purpose; and the judgement supported by a quotation",
      "**The point of view, tested on the clues** — the pronoun, the mind given, the knowledge, and then what the point of view does to the reader; the limited and the omniscient told apart by the knowledge",
      "**The cultural values, named and clashed** — the value, the character who serves it, the reference that shows the clash, and the standard the book asks for, in that order",
      "**The subject matter, stated** — what the work takes up, in a sentence that could be defended, kept apart from the theme, which is what the work concludes",
      "**The shorter works, handled** — the poem or the essay of the set: its argument in a sentence, the device that carries it named and quoted, and the ending that proves it"
    ]},  ],
  terms:[
    {t:"subject matter", d:"the material a work takes up — what it is about", x:"The subject matter of the novel is a marriage across a border."},
    {t:"setting", d:"the place, the time and the social conditions of a story", x:"The setting is a mining town in the 1950s."},
    {t:"moral", d:"what a work concludes about how a life should be lived", x:"The moral is argued by the ending rather than spoken by a character."},
    {t:"cultural values", d:"the standards by which a community judges conduct", x:"Respect for age and duty to kin are cultural values in the village."},
    {t:"first person", d:"the point of view in which the narrator says I and is a character in the story", x:"A first-person narrator can only tell what they saw."},
    {t:"third person", d:"the point of view in which the narrator says he, she or they", x:"A third-person narrator stands outside the characters."},
    {t:"omniscient narrator", d:"a third-person narrator who knows the minds of all characters", x:"The omniscient narrator moves from the husband's thoughts to the wife's in one paragraph."},
    {t:"limited narrator", d:"a third-person narrator restricted to one character's mind", x:"A limited narrator keeps the reader as ignorant as the girl."},
    {t:"inference", d:"a conclusion drawn from evidence in the text rather than stated in it", x:"That the marriage is failing is an inference from what the two of them do, not a statement."},
    {t:"book report", d:"an account of a book: its facts, its plot, its characters and a supported judgement", x:"The book report ends with a judgement backed by a quotation."},
    {t:"biography", d:"the story of a person's life written by somebody else", x:"A biography of a president is non-fictional prose."},
    {t:"article", d:"a piece of non-fictional prose on a particular subject", x:"She wrote an article on the cost of school fees."}
  ],
  quotes:[
    {q:"A cold coming we had of it, / Just the worst time of the year / For a journey, and such a long journey.", w:"Journey of the Magi", dev:"imagery and understatement", why:"The hardness of the journey is given in plain, flat words, so the reader feels the fatigue rather than being told of it — and the flatness makes the final lines land harder."},
    {q:"…this Birth was / Hard and bitter agony for us, like Death, our death.", w:"Journey of the Magi", dev:"simile and paradox — birth compared to death", why:"The comparison turns the nativity into an ending as well as a beginning, which is the poem's argument: that the birth the Magi witnessed demanded the death of the old order they lived in."},
    {q:"I should be glad of another death.", w:"Journey of the Magi", dev:"paradox — a death longed for after a birth", why:"The line closes the poem on a paradox, and the reader has to work out what manner of dying the speaker means: the death of the old self that the birth has made necessary."},
    {q:"The lead does not know the road, and the leader has forgotten it.", w:"The Leader and the Lead", dev:"antithesis and pun on lead", why:"The two senses of lead — to guide and the metal — are set against each other, so the poem condemns a leadership that has lost its way while still insisting on being followed."},
    {q:"Some people build fences to keep people out, and other people build fences to keep people in.", w:"Fences", dev:"metaphor — the fence stands for what the character refuses to share", why:"The fence is the play's central symbol and the line states both of its uses, so the audience understands that the same structure that protects Troy Maxson also imprisons the people who love him."}
  ],
  characters:[
    {n:"Troy Maxson", w:"Fences", d:"the garbageman and former ball player whose disappointments are visited on his family"},
    {n:"Rose", w:"Fences", d:"Troy's wife, who has kept the household for eighteen years and who names what she has given up"},
    {n:"Cory", w:"Fences", d:"Troy's son, whose chance at football is the thing Troy takes away"},
    {n:"The Magi", w:"Journey of the Magi", d:"the speakers of the poem, who tell what the journey cost them and what it changed"},
    {n:"The leader", w:"The Leader and the Lead", d:"the figure the poem addresses: the one who claims to know the road"},
    {n:"The narrator", w:"Unexpected Joy at Dawn", d:"the voice that follows two people across a border and the cost of crossing it"}
  ],
  themes:[
    {t:"A man's disappointments are inherited by his family", w:"Fences", ev:"Troy keeps Cory from the football scholarship because the game failed him, and the barrier he builds is the fence of the title"},
    {t:"Duty kept for eighteen years deserves to be named", w:"Fences", ev:"Rose's speech on what she has given and what she has been given"},
    {t:"A great change is also a death of the old self", w:"Journey of the Magi", ev:"‘this Birth was / Hard and bitter agony for us, like Death, our death’"},
    {t:"Leadership that has lost the road still demands to be followed", w:"The Leader and the Lead", ev:"the pun on lead and leader, and the lead's ignorance of the road"}
  ],
  facts:[
    {q:"Give the six things an effective book report must contain.", a:"Title, author and genre (with the publication date if known); the setting in one sentence; the theme as a sentence; a short summary of the plot that stops before the ending; the characters that matter and what they do; and a judgement supported by evidence."},
    {q:"Distinguish subject matter from theme.", a:"The subject matter is the material the work takes up — a migration, a marriage, a dispute over land. The theme is the idea the work holds about that material, stated as a sentence about life."},
    {q:"How do you infer the point of view of a novel?", a:"From three clues: whose thoughts are given to the reader, what the narrator knows that the characters do not, and whose interest the telling serves."},
    {q:"What is the difference between a limited and an omniscient third-person narrator?", a:"A limited narrator stays inside one character's mind and can know no more than that character; an omniscient narrator knows the minds of all the characters and can move between them."},
    {q:"Why does a first-person narrator make a reader share the character's fear?", a:"Because the reader is given only what that character sees and knows, so the reader cannot look ahead of them: the ignorance is shared, and with it the suspense."},
    {q:"What are cultural values, and how does a novel use them?", a:"They are the standards by which a community judges conduct — respect for age, duty to kin, the treatment of a widow. A novel sets them against one another or against a rival system, and then lets the reader judge conduct by them."},
    {q:"Why should a book report not give away the ending?", a:"Because the report's purpose is to make somebody else want to read the book: it must say enough to show what the book is about and not so much that the reading is spoiled."}
  ],
  tf:[
    {s:"A theme and a subject matter are the same thing.", a:"false", why:"The subject matter is the material — a migration, a marriage; the theme is the idea the work holds about it, stated as a sentence."},
    {s:"A first-person narrator can know what the other characters are thinking.", a:"false", why:"A first-person narrator knows only what that character can know; knowing other minds belongs to an omniscient third person."},
    {s:"An inference is a conclusion drawn from evidence in the text rather than stated in it.", a:"true", why:"The reader puts two things together and concludes what the text implies but does not say — which is how point of view is established."},
    {s:"A book report should end with the ending of the plot.", a:"false", why:"It should summarise the plot briefly and stop before the ending, so that the reader of the report still wants to read the book."},
    {s:"Setting includes the social conditions, not only the place and the time.", a:"true", why:"Where and when the story happens includes what the community expects, what it permits and what it punishes — and those are what press on the characters."},
    {s:"A novel that sets two value systems against each other has no moral.", a:"false", why:"It has a moral that is argued rather than announced: the reader is made to judge one conduct against another, which is a stronger form of moral than a stated one."}
  ],
  apply:[
    {q:"‘Troy Maxson builds the fence to keep death out, and it keeps his son in.’ Discuss, with two references.", a:"Troy builds the fence Rose asks for, and he builds the same fence against the football scholarship that would take Cory out of his reach; both are ways of keeping at bay a world that he believes has already beaten him. The play punishes him with the loneliness of the result."},
    {q:"Show how the poem Journey of the Magi makes a birth feel like a death.", a:"Eliot gives the journey in flat, tired words, then turns the nativity into ‘Hard and bitter agony … like Death, our death’, and closes with the wish for ‘another death’. The birth is therefore presented as the end of the old dispensation and the old self, and the reader is left to decide whether that is loss or release."},
    {q:"Explain the pun in The Leader and the Lead and say what it achieves.", a:"Lead is both to guide and the heavy metal. Set against leader, the word accuses those who claim to guide of being a dead weight, and the poem's complaint — that the followers are not told where they are going — is carried by the two senses at once."},
    {q:"You are writing the book report on the set novel. Give your one-sentence theme and the one piece of evidence you would use to support it.", a:"Any defensible theme stated as a sentence about life, with one piece of evidence from the text: for example, ‘a border is crossed more easily than the suspicion that waits on the other side of it’, supported by the scene in which the travellers are questioned by the people they most wanted to trust."}
  ],
  passage:{
    title:"Practice extract — the fence",
    text:"ROSE: Why do you want to keep everybody out? \n\nTROY: I ain't keeping nobody out. I'm keeping what's mine. That's a different thing. \n\nROSE: You can't keep what's yours by standing in front of it with your arms out. \n\nTROY: I been standing in front of something all my life. I stood in front of my daddy's hand and I stood in front of a white man's no. I ain't got another kind of standing in me. \n\n[Cory comes into the yard with his books. Troy does not turn round.] \n\nROSE: Then the boy will pay for the standing. \n\nTROY: The boy will learn it. It's the only thing I got to give him.",
    qs:[
      {q:"‘I ain't keeping nobody out. I'm keeping what's mine.’ What distinction is Troy trying to draw, and why does it not hold?", a:"Troy wants to distinguish defence from exclusion, but the play shows the two are the same act seen from different sides: the fence that keeps the world out of his yard keeps his son in it, and Rose's answer — that you cannot keep what is yours with your arms out — says as much."},
      {q:"Explain the repetition in ‘I stood in front of my daddy's hand and I stood in front of a white man's no.’", a:"The repeated ‘I stood in front of’ is anaphora, and it puts a father's violence and a society's refusal into one grammatical shape, so the audience understands that Troy's whole life has been a posture of obstruction and that he has no other one available to him."},
      {q:"‘Then the boy will pay for the standing.’ What does Rose foresee, and how is the play's title bound up with it?", a:"She foresees that Cory will bear the cost of Troy's defence — the scholarship refused, the son driven out — and the fence of the title is the thing that does it: built to hold what Troy has, it becomes the barrier his family has to climb."},
      {q:"What is gained by the stage direction ‘Cory comes into the yard. Troy does not turn round’?", a:"It says without dialogue what the dialogue has been circling: the son is present and is not acknowledged. The audience sees the exclusion happening, so Troy's last line — that obstruction is the only inheritance he has — is shown rather than argued."},
      {q:"Write one theme of the play supported by this extract, with the evidence for it.", a:"Theme: what a man does to survive may become the thing that damages the people he survives for. Evidence: ‘It's the only thing I got to give him.’"}
    ]
  },
  write:[
    {p:"Write an essay: ‘The fence is the most important character in the play.’ Discuss.", guide:"Treat the fence as symbol and as structure. Give three references, and answer the objection that a symbol cannot be a character."},
    {p:"Write a book report of 400 words on the set novel, following the six-part format.", guide:"Title, author, genre and date; setting; theme as a sentence; short plot summary that stops before the end; the characters that matter; a judgement with evidence."},
    {p:"Write an article of 350 words for your school magazine on one cultural value in your community and what happens to a person who breaks it.", guide:"Name the value, give one concrete example, and say who is hurt and who benefits. Write as prose, not as a list."}
  ],
  activities:[
    "Guided reading of the selected African prose",
    "Discuss the figurative expressions used in the set text",
    "Discuss the format of a book report and write one",
    "Write prose of your own using figures of speech to create images",
    "Discuss the writing process for the different kinds of writing and prepare an essay",
    "Discuss the point of view from which the set novel is written",
    "Write a book report and present it to the class"
  ],
  materials:["Unexpected Joy at Dawn by Alex Agyei-Agyiri","Fences by August Wilson","The Leader and the Lead by Niyi Osundare","Journey of the Magi by T.S. Eliot","The Rain and the Night by Wilton Sankawolo","Audio-visual material in DVDs on prose"],
  assessment:["Quizzes","Classwork","Homework","Book report"]
},
{
  grade:10, period:"VI", sem:"Two", icon:"📚",
  title:"Drama and Prose (Review)",
  subtitle:"Theme, mood, setting, plot, conflict, climax and literary devices across drama and prose",
  outcomes:[
    "Learners are able to demonstrate an understanding of Drama and Prose and effectively apply the literary devices"
  ],
  objectives:[
    "Analyze African Drama and Prose based on theme, mood, setting and literary devices",
    "Discuss the kinds of Drama and Prose"
  ],
  note:"<b>Mood</b> is the feeling a work creates in the reader — tense, mournful, celebratory. <b>Tone</b> is the writer's attitude to the material — ironic, angry, affectionate. Mood is what you feel; tone is how the writer sounds.",
  study:[
    /* ---- course text: Semester Two, Period VI — Drama and Prose (review) (guide p. 10) ---- */
    {k:"h3", t:"Drama and Prose Compared"},
    {k:"p", t:"**Drama** and **prose** tell stories with different equipment. Drama has only speech and action: nothing can be told that is not said or done, so the **exposition** must be spoken and the past must be brought on stage. Prose fiction has a **narrator**, and with a narrator it has an inside — the thoughts of a character, the summary of ten years in a sentence, the comment the narrator chooses to make. Each form gains what the other lacks: drama gains immediacy, prose gains interiority."},
    {k:"rule"},
    {k:"h3", t:"The Elements Reviewed"},
    {k:"bul", items:[
      "**Theme** — the idea, stated as a sentence, and supported by evidence.",
      "**Mood** — the feeling the work creates: dread, delight, grief, expectation.",
      "**Setting** — place, time and social conditions, and the pressure they put on the characters.",
      "**Plot** — exposition, rising action, climax, falling action, resolution.",
      "**Conflict** — person against person, self, society, nature or fate.",
      "**Climax** — the turning point after which the outcome is settled.",
      "**Literary devices** — imagery, symbolism, irony, metaphor, simile, personification, foreshadowing, flashback, suspense and the rest."
    ]},
    {k:"rule"},
    {k:"h3", t:"Mood and Tone"},
    {k:"p", t:"**Mood** is what the reader feels; **tone** is the attitude the writer takes. A passage can be mournful in mood and ironic in tone. Mood is built by **setting**, **imagery** and **rhythm** — short sentences quicken, long ones slow; a bare landscape chills. Tone is heard in **diction**, the writer's choice of words: formal, coarse, affectionate, cold."},
    {k:"p", t:"When you are asked to analyse mood, never say ‘the mood is sad’. Say what in the writing makes it sad — the diction, the image, the rhythm — and quote it."},
    {k:"p", t:"Set texts for this period: **Look Back in Anger** by John Osborne; **Wuthering Heights** by Emily Brontë; **The Grieved Lands** by Agostinho Neto; **Do Not Go Gentle into That Good Night** by Dylan Thomas; **Binsey Poplars** by G.M. Hopkins."}
,
    {k:"rule"},
    {k:"h3", t:"Mood and Tone, Worked on Two of the Set Texts"},
    {k:"p", t:"The unit's warning — never say 'the mood is sad' — is worked on two of the period's texts, so that the difference between the four words can be seen doing its work rather than defined."},
    {k:"num", items:[
      "**Wuthering Heights, the moorland scenes.** The mood is desolate — but the answer is not the word, it is the making of it: the **imagery** of wind and water that runs through the scenes, the bare landscape that chills, the long sentences that slow the reader to the pace of the moor. The **tone** is different from the mood: the bond between Catherine and Heathcliff is stated as a fact of composition — 'Whatever our souls are made of, his and mine are the same' — and that flatness, the statement of a feeling as a fact, is the tone of the book's argument. The mood is what the reader feels on the moor; the tone is how the book speaks of the bond; and the two are not the same, though the question that sets them wants them told apart.",
      "**Do Not Go Gentle into That Good Night.** The mood the villanelle leaves in the reader is the pressure of the plea — and it is built by the **form**: the two refrains that return four times, the two rhymes that hold the nineteen lines, the repetition of 'rage' and 'gentle' set against each other in the same line. The **tone** is the son's: urgent, and knowing it will lose — the plea is made to a dying father, and the tone of a plea is not the tone of an argument, which is why the refrains accumulate rather than develop. A passage can be mournful in mood and urgent in tone at once, and the mark goes to the candidate who says so and shows how the two are made separately."
    ]},
    {k:"p", t:"The four words are kept apart by one question each: **mood** is what the reader feels; **tone** is how the writer sounds; **atmosphere** is the feeling the world of the work has; **setting** is the place and the time. The question that names one wants that one, answered by the making — the diction, the image, the rhythm — and the other three are background. A candidate who can answer 'whose feeling is it' for each of the four has the distinction, because the distinction is the ownership: the reader's, the writer's, the world's, the fact's."},
    {k:"table", head:["Word","Whose feeling or choice it is","How it is made","The test in the text"], rows:[
     ["Mood","the reader's","setting, imagery and rhythm — the short sentences quicken, the bare landscape chills","what is the reader left with, after the last line"],
     ["Tone","the writer's","diction — formal, coarse, affectionate, cold, ironic","how does the voice sound to the reader, line by line"],
     ["Atmosphere","the world of the work","the prevailing feeling of the setting and the imagery, moment to moment","what is the world like, from the opening to the end"],
     ["Setting","the fact of the work","place, time and social conditions, stated","where and when, and what the place presses on the characters"]]},
    {k:"p", t:"The WASSCE sets these as distinctions of one or two marks each, and the table is the answer: the column 'whose' is the test, and the column 'how it is made' is the evidence. The loss is made by the candidate who answers the question that was not asked — the mood when the tone is wanted, or the setting when the atmosphere is wanted — and the recovery is not possible, because the mark is for the word that was set."},
    {k:"h3", t:"Drama and Prose Telling the Same Event"},
    {k:"p", t:"The unit's point — drama gains immediacy, prose gains interiority — is worked by telling one event in both forms, so that the gain of each can be seen in the same material. The event: a man learns his son will not play football. **In prose**, the narrator can say what the man thinks, and the thought can be thirty years long in one sentence — the ball field, the white man's no, the standing, all of it inside the mind, at the speed of the mind, and the reader is given the whole at once. **On the stage**, the same learning must be said or done: the man does not turn round when the boy comes in with the books, and the not-turning is the thought — the audience reads in the body what the prose would have told in the mind, and the reading is the audience's work, which is why the stage feels immediate."},
    {k:"p", t:"So the question 'why is this a play and not a novel' is answered by what the form **gains**: the decision made in front of witnesses, the cost paid in public, the ending that a room of people has seen happen — the settlement before witnesses, which is the drama's end. And the question 'what does the novel give that the play cannot' is answered by the **inside**: the report of the thought, the compression of the years, the comment the narrator chooses to make — the interiority the stage cannot reach, because the stage has no narrator and what is not said or done does not exist. Each form gains what the other lacks, and the comparison the paper sets is the gain of each, named in the material."},
    {k:"h3", t:"The Review Set: One Sentence per Text"},
    {k:"p", t:"The period's five texts, each to its one sentence — the sentence is the theme, the theme is the paper, and the paper is the two or three references that show the sentence working. **Look Back in Anger** (John Osborne): anger may be the only honesty left to a generation — Jimmy Porter's tirades against his wife and his class are cruel, and they are also the only speech in the play that refuses comfort, and Alison's silence is the play's other argument, the answer that is not spoken. **Wuthering Heights** (Emily Brontë): love that cannot be lived out becomes destruction — the choice that keeps Heathcliff and marries Edgar ruins two households across two generations, and the bond stated as a fact of composition is what makes the ruin inevitable. **The Grieved Lands** (Agostinho Neto): the living world is injured by those who do not notice it — the land is given the patience and then the voice of the people who suffer on it, 'and waiting, they have learned to speak', the country made the speaker of its own grievance."},
    {k:"p", t:"**Do Not Go Gentle into That Good Night** (Dylan Thomas): a person should resist the end, however certainly it comes — the refrain 'Rage, rage against the dying of the light' repeated through the villanelle is the whole of the argument, and the form is the argument, because the plea that cannot be answered is the villanelle's shape. **Binsey Poplars** (G.M. Hopkins): the loss is felt in the mouth before it is understood — 'O if we but knew what we do / When we delve or hew — hack and rack the growing green', the harsh consonants making the reader hear the blows, so the elegy is earned by the sound before it is stated by the sense. One sentence each, and the five sentences are the review of the year: stated without the book open, they are the state the WASSCE will demand in Grade 12."},
    {k:"h3", t:"The Liberian Ground: the Semester's Terminal, Rehearsed"},
    {k:"p", t:"This is the **review** period of the first year, and the terminal examination of the semester in the Liberian school is set in the same shape as the WASSCE pieces it rehearses: the unseen poem, the unseen passage, the question on a named text, and the composition. The drill of the year — the device, the quotation, the effect; the theme as a sentence; the four words kept apart — is the drill of the paper, and the candidate who has done the drill through the semester walks into the terminal with the paper already half answered. The set texts of the review are the year's texts returned in a new order, so that the one-sentence argument of each can be stated without the book open — which is the state the WASSCE will demand, and the review is the last chance to reach it before the demand comes."},
    {k:"h3", t:"Common Mistakes in This Unit"},
    {k:"bul", items:[
      "Saying **the mood is sad** and stopping there. The mark is in the making — the diction, the image, the rhythm — and the word alone is the absence of the answer, not the beginning of it.",
      "Confusing **mood** and **tone**. The mood is the reader's feeling; the tone is the writer's attitude. A passage can be mournful in mood and ironic in tone, and the question wants the one that was asked, answered by the making.",
      "Calling the **atmosphere** the **setting**. The setting is where and when; the atmosphere is the feeling the where and when have — the world's feeling, moment to moment, from the opening to the end.",
      "Miscounting the **villanelle** — nineteen lines, two refrains, two rhymes — and missing that 'Rage, rage against the dying of the light' returns four times and closes the poem; the form is the argument, and the count is the form.",
      "**Paraphrasing** the poem where the question asks for the words. The device is in the diction, and the diction is the quotation; a paraphrase has lost the sound, and the sound is where the mark is.",
      "Answering **drama** with **prose** equipment. A play has no narrator; what is not said or done on stage does not exist, and the analysis that reaches for the narrator's thought has left the stage the play is on."
    ]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**The distinction question** — mood from tone from atmosphere, each with the test and the reference; one or two marks each, and the column 'whose' is the sentence that earns the mark",
      "**The unseen poem** — the subject in a sentence, the speaker, one device quoted, the turn if there is one, and the theme as a sentence; the villanelle's refrains named where the form is the argument",
      "**The unseen prose passage** — the same moves in prose: the subject, the point of view, the device quoted, the effect, and the tone of the voice",
      "**A named text, on its one argument** — the theme as a sentence, two or three references, each commented, and the references taken from different parts of the work where they can be",
      "**The form, named with its numbers** — the villanelle, the elegy, the sonnet: the shape with its counts, and what the shape does to the argument it carries",
      "**The comparison, one point at a time** — drama and prose held against one question, the gain of each named in the material, and the point that was set answered before the next is reached"
    ]},  ],
  terms:[
    {t:"mood", d:"the feeling a work creates in the reader", x:"The mood of the moorland scenes is desolate."},
    {t:"tone", d:"the writer's attitude towards the material — ironic, angry, affectionate", x:"The tone is ironic even where the events are tragic."},
    {t:"diction", d:"the writer's choice of words", x:"The plain diction of the letter makes the news land harder."},
    {t:"atmosphere", d:"the prevailing feeling created by setting and imagery", x:"An atmosphere of expectation hangs over the hall before the trial."},
    {t:"climax", d:"the turning point of the plot", x:"The climax is the moment the letter is read aloud."},
    {t:"denouement", d:"the untying of the plot at the end", x:"The denouement settles every claim made in the opening act."},
    {t:"villanelle", d:"a poem of nineteen lines with two refrains and two rhymes", x:"Do Not Go Gentle into That Good Night is a villanelle."},
    {t:"refrain", d:"a line or lines repeated at intervals in a poem", x:"‘Rage, rage against the dying of the light’ is the refrain."},
    {t:"elegy", d:"a poem of mourning for somebody dead", x:"Binsey Poplars is an elegy for felled trees."},
    {t:"interiority", d:"the showing of a character's thoughts from inside", x:"Prose fiction gains interiority by means of a narrator; drama cannot."},
    {t:"irony", d:"a gap between what is said and meant, or between expectation and outcome", x:"The irony is that the letter meant to save him destroys him."},
    {t:"imagery", d:"language appealing to the five senses", x:"The imagery of wind and water runs through Wuthering Heights."}
  ],
  quotes:[
    {q:"Do not go gentle into that good night, / Old age should burn and rave at close of day; / Rage, rage against the dying of the light.", w:"Do Not Go Gentle into That Good Night", dev:"villanelle with two refrains, and metaphor — death as night", why:"The repeated refrains make the poem an argument that cannot be answered, and the metaphor of night lets the poet urge his dying father to fight the very thing the poem must accept."},
    {q:"O if we but knew what we do / When we delve or hew — hack and rack the growing green!", w:"Binsey Poplars", dev:"exclamation, alliteration and imagery", why:"The harsh consonants of delve, hew, hack and rack make the reader hear the blows, so the loss is felt in the mouth before it is understood."},
    {q:"My facers, my reflections, my tenor and bass — where are they now?", w:"Binsey Poplars", dev:"metaphor and personification — the trees are given faces and voices", why:"Hopkins names the trees as if they were companions, so their felling is a death of persons rather than timber, and the elegy is earned."},
    {q:"Whatever our souls are made of, his and mine are the same.", w:"Wuthering Heights", dev:"metaphor — the soul spoken of as a substance", why:"The comparison states the bond between Catherine and Heathcliff as a matter of composition rather than of choice, which is why it cannot be negotiated away."},
    {q:"The grieved lands have learned to wait, / and waiting, they have learned to speak.", w:"The Grieved Lands", dev:"personification — the land waits and speaks", why:"The land is given the patience and then the voice of the people who suffer on it, so the poem makes the country the speaker of its own grievance."}
  ],
  characters:[
    {n:"Heathcliff", w:"Wuthering Heights", d:"the foundling whose love for Catherine turns to revenge across a generation"},
    {n:"Catherine Earnshaw", w:"Wuthering Heights", d:"the woman who chooses Edgar Linton and keeps Heathcliff, and is destroyed by the choice"},
    {n:"Jimmy Porter", w:"Look Back in Anger", d:"the angry young man whose tirades against his wife and his class carry the play"},
    {n:"Alison", w:"Look Back in Anger", d:"Jimmy's wife, whose silence is the play's other argument"},
    {n:"The father", w:"Do Not Go Gentle into That Good Night", d:"the dying man the villanelle addresses and urges to resist"},
    {n:"The speaker", w:"The Grieved Lands", d:"the voice that gives the suffering country its words"}
  ],
  themes:[
    {t:"Love that cannot be lived out becomes destruction", w:"Wuthering Heights", ev:"Catherine marries Edgar and keeps Heathcliff, and the arrangement ruins two households across two generations"},
    {t:"Anger may be the only honesty left to a generation", w:"Look Back in Anger", ev:"Jimmy's tirades are cruel and are also the only speech in the play that refuses comfort"},
    {t:"A person should resist the end, however certainly it comes", w:"Do Not Go Gentle into That Good Night", ev:"the refrain ‘Rage, rage against the dying of the light’ repeated through the villanelle"},
    {t:"The living world is injured by those who do not notice it", w:"Binsey Poplars", ev:"‘O if we but knew what we do / When we delve or hew — hack and rack the growing green’"}
  ],
  facts:[
    {q:"Distinguish mood from tone.", a:"Mood is the feeling the work creates in the reader; tone is the writer's attitude towards the material. A passage may be mournful in mood and ironic in tone."},
    {q:"What does drama lose, and what does it gain, by having no narrator?", a:"It loses interiority — the direct report of a character's thoughts, the summary of years, the narrator's comment. It gains immediacy: everything is said or done in front of the audience, and the past must be brought on stage."},
    {q:"What is a villanelle?", a:"A poem of nineteen lines built on two rhymes, with two refrains repeated through it and again in the closing stanza — as in Dylan Thomas's Do Not Go Gentle into That Good Night."},
    {q:"How do you write about mood without merely naming it?", a:"Say what in the writing creates it — the setting, the imagery, the diction, the length of the sentences — and quote the words that do the work."},
    {q:"Give the seven elements of drama and prose named in the review.", a:"Theme, mood, setting, plot, conflict, climax and literary devices."},
    {q:"What is an elegy?", a:"A poem of mourning for somebody or something that has died or been lost; Binsey Poplars is an elegy for trees that were felled."},
    {q:"Why can prose fiction summarise ten years in a sentence when drama cannot?", a:"Because prose has a narrator who can stand outside the action and compress it, whereas drama shows only what is said and done in the time of the performance."}
  ],
  tf:[
    {s:"Mood is the writer's attitude towards the material.", a:"false", why:"That is tone. Mood is the feeling the work creates in the reader; tone is the attitude the writer takes."},
    {s:"A villanelle has two refrains that return through the poem.", a:"true", why:"The two refrains alternate through the stanzas and come together in the final stanza, which is what gives the form its insistence."},
    {s:"Drama can report a character's thoughts directly.", a:"false", why:"Drama shows speech and action only; thoughts must be spoken in a soliloquy or an aside. Direct report of thought belongs to prose fiction and its narrator."},
    {s:"An elegy is written in praise of a living person.", a:"false", why:"An elegy mourns somebody or something dead or lost. Binsey Poplars mourns felled trees."},
    {s:"Short sentences tend to quicken the rhythm of a passage.", a:"true", why:"Short sentences give less to hold in the mind at once, so the reader moves faster — one of the ways mood is built."},
    {s:"Irony requires that a character be lying.", a:"false", why:"Irony is a gap between what is said and meant, or between what a character expects and what happens; the character may be entirely sincere."}
  ],
  apply:[
    {q:"‘Jimmy Porter's anger is the only honest thing in the play, and it is also unforgivable.’ Discuss.", a:"Both halves can be held: his anger names what the others are pleased to ignore — class, complacency, a marriage arranged across the grain — and it is visited on Alison in a way the play never excuses. The play's achievement is to refuse to choose between the two verdicts."},
    {q:"Show how Dylan Thomas builds urgency with the villanelle form rather than in spite of it.", a:"The two refrains — ‘Do not go gentle into that good night’ and ‘Rage, rage against the dying of the light’ — return through the poem and meet in the closing stanza, so the argument is repeated rather than developed, which is what a plea to a dying man would actually sound like."},
    {q:"Compare how drama and prose would handle a death that happened ten years before the story begins.", a:"Prose would let the narrator summarise it and show the thoughts it still causes; drama must bring it on stage — through a flashback, a reported speech, a letter read aloud, or a character who will not stop speaking of it — and the audience must hear it as present speech."},
    {q:"Choose one poem and one play from the year's set texts and compare their treatment of loss.", a:"Compare what each form can do: the poem concentrates the feeling into image and refrain, the play distributes it among voices and lets it be contested. Both should be quoted, and the comparison should end on which form does what the other cannot."}
  ],
  passage:{
    title:"Practice extract — the last light",
    text:"The lamps were lit along the road before the lamps were needed, the way they are in a house where somebody is expected. \n\nHe sat with his hands on his knees, a man who had once been able to fill a room by walking into it, and the room was filled now by the sound of the kettle and nothing else. \n\n‘You should have let me be angry,’ he said. \n\nShe did not answer. She had spent eighteen years not answering, and it had become, over eighteen years, a kind of answer. \n\nOutside, the wind came up the road from the cutting where the poplars had been, and the poplars were not there to take it.",
    qs:[
      {q:"‘the lamps were lit along the road before the lamps were needed’ — what mood does this open, and how?", a:"It opens a mood of waiting, with the suggestion of a house preparing for something it dreads. The detail is domestic and small, and that smallness is what makes it unsettling: the ordinary is being done too early and too carefully."},
      {q:"Comment on the contrast in ‘a man who had once been able to fill a room by walking into it, and the room was filled now by the sound of the kettle and nothing else’.", a:"The contrast is built on the one verb used twice in opposite senses — fill. Once he filled the room with presence; now a kettle does it, and the emptiness of the second filling measures the first."},
      {q:"‘She had spent eighteen years not answering, and it had become, over eighteen years, a kind of answer.’ Explain what the repetition achieves.", a:"The repeated phrase makes the silence a settled habit rather than an act, so the reader understands that she has not chosen it this evening — she has become it. The repetition is the rhythm of a long marriage."},
      {q:"Why does the extract end on the poplars that are no longer there?", a:"The absent trees are the last image, so the passage closes on a loss that cannot be repaired and that receives no comment — which is how the elegiac mood is made to fall on the whole scene rather than on one character."},
      {q:"Write one theme supported by this extract, with the evidence for it.", a:"Theme: what is not said over a long life becomes the loudest thing in the room. Evidence: ‘She had spent eighteen years not answering, and it had become … a kind of answer.’"}
    ]
  },
  write:[
    {p:"Write an essay comparing how one drama and one prose text from the year's set books present a conflict between a parent and a child.", guide:"Four paragraphs: one on each text, one comparing the method each form uses, one conclusion. Quote from both."},
    {p:"Write a passage of prose in which the mood is dread, and then annotate it in the margin for the three devices you used.", guide:"Keep it to one page. Mark the diction, the imagery and the sentence length that do the work."},
    {p:"‘An angry book is better than a comfortable one.’ Discuss, using two set texts.", guide:"Define what each text is angry about, then judge what the anger achieves and what it costs."}
  ],
  activities:[
    "Read the selected drama and prose texts",
    "In groups, discuss the elements of drama and prose",
    "In groups, analyse a given drama and prose passage using the seven elements",
    "Prepare a chart of the literary devices met during the year, with an example of each"
  ],
  materials:["Look Back in Anger by John Osborne","Wuthering Heights by Emily Brontë","The Grieved Lands by Agostinho Neto","Do Not Go Gentle into That Good Night by Dylan Thomas","Binsey Poplars by G.M. Hopkins","Prentice Hall Literature","Audio-visual material in DVDs"],
  assessment:["Quizzes","Class work","Homework","Assignments","Dramatization"]
}
,

/* ================================ GRADE 11 ================================ */
{
  grade:11, period:"I", sem:"One", icon:"🌍",
  title:"Non-African Prose",
  subtitle:"Themes, style, content, plot and conflict in non-African prose, and the book report format",
  outcomes:[
    "Learners are able to demonstrate understanding of Non-African Prose and recognize cultural diversity in the context of the given prose"
  ],
  objectives:[
    "Identify elements of non-African prose",
    "Analyze roles of characters in selected non-African prose",
    "Prepare a summary report of selected non-African prose using approved formats",
    "Utilize figurative expressions in given texts"
  ],
  note:"In <b>non-African prose</b> from Europe and America the conflict is often between the individual and a society that will not see them. <b>Style</b> is the writer's way with words — diction, sentence length, imagery, tone — and it is the surest evidence you have of what a writer thinks.",
  study:[
    /* ---- course text: Semester One, Period I — Non-African Prose (guide p. 12) ---- */
    {k:"h3", t:"Reading Prose from Outside Africa"},
    {k:"p", t:"**Non-African prose** is narrative or expository writing from beyond the continent — the European and American novel, the short story, the play and the essay. It comes out of different histories: industrial cities, class systems, immigration, war. Reading it well means reading for **cultural diversity**: the same human acts — marrying, working, quarrelling, burying — are governed by different assumptions, and the text is where you find out what those are."},
    {k:"bul", items:[
      "**Themes** — what the work is about at the level of ideas.",
      "**Style** — the writer's way with words: diction, sentence length, imagery, tone.",
      "**Content** — the matter taken up: the events, the people, the places.",
      "**Plot** — how the events are ordered and what they cause.",
      "**Conflict** — person against person, self, society, nature or fate."
    ]},
    {k:"rule"},
    {k:"h3", t:"Figurative Expression in Non-African Prose"},
    {k:"p", t:"The devices do not change at the border. What changes is what they are used for. In **Native Son** Richard Wright uses **imagery** of cold, of snow and of closed doors to build the pressure that the plot will release. In Frost's **Birches** the whole poem is one extended **comparison** between a boy swinging birches and the wish to climb out of life and come back to it. Read the figure and then ask what work it does in this particular book."},
    {k:"rule"},
    {k:"h3", t:"The Book Report Format"},
    {k:"p", t:"Use one format for every report, so that the reader always knows where to look. Give the **title** of the book; the **author** and **genre**, with the **published date** if you can find it; then a **sentence summary** of the book giving its **setting** and **theme**; then the **characters**; then the **purpose** of the book and the **plot**; and last your own **judgement**, with the evidence that supports it."},
    {k:"p", t:"Set texts for this period: **Native Son** by Richard Wright; **She Stoops to Conquer** by Oliver Goldsmith; **Vanity** by Birago Diop; **Birches** by Robert Frost."}
,
    {k:"rule"},
    {k:"h3", t:"Style, Worked on Two Opposite Writings"},
    {k:"p", t:"**Style** is the writer's way with words — diction, sentence length, imagery, tone — and it is the surest evidence of what a writer thinks, because each of the four is a choice, and the choice is the position. Worked on the two prose set texts of the period, which are the two opposites the course holds up:"},
    {k:"num", items:[
      "**Native Son (Richard Wright) — the plain, hard style.** The diction is plain, the sentences short and flat, and the imagery is of cold, of snow and of closed doors — the style of **naturalism**, which shows a person pressed by conditions they did not choose. Worked on the line 'He had committed murder, and murder was not what he thought it was': the **understatement** is the style — the enormity is carried by the plainness, and the gap between the act and the word is the novel's argument, that fear makes a man before the law does. The style is the position: a man who cannot afford softening is not given softening.",
      "**She Stoops to Conquer (Oliver Goldsmith) — the polished, witty style.** The diction is formal where the plain would do, and the comedy is the register: 'I'll be with you in a moment, sir; but I must attend to the ladies first.' Marlow's formality with the woman he believes a servant, and his ease with the women he knows to be servants, is the gap the joke is made of — and the **satire** is on the affectation: the class that polishes its language is the class that cannot be seen through, and the style that polishes is the style the play is laughing at."
    ]},
    {k:"p", t:"In the examination the style question wants three things in order: the **marker named** — diction, sentence length, imagery or tone; the **example quoted** — the words that carry the marker; and the **thought the marker carries** — the position the choice is. A style answer without the thought is a list of markers, and the list is what the question is not."},
    {k:"table", head:["The marker of style","The test that finds it","Native Son","She Stoops to Conquer"], rows:[
     ["Diction","the words chosen, and their level","plain, hard, the street's own words","formal where the plain would do — the affectation is the joke"],
     ["Sentence length","the pace the sentence gives","short and flat, the pace of a man who has no time","long and turning, the pace of a man polishing"],
     ["Imagery","the sense the images appeal to","cold, snow, closed doors — the pressure","the house, the table, the mistake — the confusion"],
     ["Tone","the attitude to the material","cold where the events are violent","amused where the events are cruel"]]},
    {k:"p", t:"The table is the answer to 'compare the styles': one marker at a time, the test, the two examples, and the thought each carries. The comparison of styles is the comparison of positions — the naturalism that shows the pressure, and the satire that laughs at the polish — and the position is what the marker carries."},
    {k:"h3", t:"Cultural Diversity, the Reading the Paper Asks For"},
    {k:"p", t:"To read for **cultural diversity** is to read for the assumptions: what does the text take for granted that its reader is not given? Worked on the two texts: **Native Son** assumes the reader knows nothing of the Black Belt, and it builds the pressure from the reader's own distance — the closed door is felt from the outside, and the feeling from the outside is the novel's way of making the outside see. **She Stoops to Conquer** assumes the reader knows the country gentry, and it polishes its satire on the gap between the town's manners and the country's — the reader's knowledge is the joke's second side, and the gap the reader brings is the gap the play exploits. The worked test: **name the assumption, give the reference, say what the text does with the reader's ignorance** — it makes it sympathy, it makes it comedy, or it makes it the accusation."},
    {k:"p", t:"The WASSCE's **non-African prose section** — Paper 2, Section B — sets two questions on the prescribed non-African novels, **Native Son** (Richard Wright) and **The Last Goodman** (Patience Swift), and the candidate answers one, sharing the hour and a quarter with the African section for fifty marks on the paper. The diversity reading is what the question 'how does the novel present a society not its own' wants: the assumption named, the reference given, and the work the text does with the distance — and the distance is the candidate's own, because the society presented is not the society the candidate lives in."},
    {k:"h3", t:"The Poems of the Period, to Their Sentences"},
    {k:"p", t:"**Vanity** (Birago Diop) watches a woman adorn herself and counts the cost — the counting is the argument, and the title is the verdict: the adornment is the labour, and the labour is paid for. **Birches** (Robert Frost) is one **extended comparison**: a boy swinging the birches, and the wish to climb out of life and come back to it — 'So was I once myself a swinger of birches. And so I dream of going back to be.' The comparison lets Frost say the embarrassing thing plainly: he wants the escape, but only an escape he can come back from — 'Earth's the right place for love: I don't know where it's likely to go better.' The extended metaphor is the form: the comparison is carried through the whole poem, and the poem's argument is the comparison's destination — the earth, named at the end, as the place the escape returns to."},
    {k:"p", t:"The two poems are the period's drill in the shorter form: the argument in a sentence, the device that carries it — the counting, the extended comparison — and the ending that proves it. The sentence is the theme, the device is the reference, and the ending is the proof, and the three together are the one page the candidate can carry in the head."},
    {k:"h3", t:"The Book Report Format, Applied Outside Africa"},
    {k:"p", t:"The format does not change at the border: the title, the author, the genre, the date; the setting and the theme in a sentence each; the plot without the end; the characters; the purpose; the judgement. Worked on **Native Son**: the title, Richard Wright, a novel of naturalism; the setting is the Black Belt of Chicago and the Dalton house, the two worlds that never touch; the theme — fear makes a man before the law does; the plot moves from the first killing, which the pressure makes thinkable, to the last speech, which the pressure makes necessary; the characters — Bigger, whose fear the novel makes the reader share, Bessie, drawn in and killed by the man who cannot think what else to do, Mary, whose sincere friendliness is fatal because neither of them knows how to behave in it; the purpose — to show what the society's refusal to see costs; and the judgement, carried by the last act, not by the opinion."},
    {k:"p", t:"The non-African report is where the **date** matters most: the novel's year is part of its argument, and a report that gives the setting without the date has given the world without the hour. The date is the mechanics of the format, and the mechanics is the mark the reader must always be able to find in the first line."},
    {k:"h3", t:"The Liberian Ground: the Section B, and the Distance the Candidate Brings"},
    {k:"p", t:"The Liberian candidate brings to Section B the **distance the reading is made of**: the society Native Son presents is not the society the candidate lives in, and the not-living-in is what the diversity reading works on. The assumption the novel makes — that the reader does not know the Black Belt — is the candidate's own position, and the reference is the reader's own ignorance made the sympathy. The question 'how does the novel present a society not its own' is answered by the candidate who can name the assumption, give the reference, and say what the text does with the distance — and the distance is the ground, and the ground is the candidate's own."},
    {k:"p", t:"And the period's shorter works keep the drill at its smallest scale: the poem's argument in a sentence, the device that carries it, the ending that proves it. **Vanity** and **Birches** are the two the paper is likeliest to set, and the two are the counting and the extended comparison — the verdict the title carries, and the earth that is the right place for love. The one sentence each, and the sentences are the review: stated without the book open, they are the state the section will find."},
    {k:"h3", t:"Common Mistakes in This Unit"},
    {k:"bul", items:[
      "Assuming the **devices change at the border**. They do not: what changes is what they are used for — the imagery of Native Son is cold, the imagery of She Stoops is comic, and the instrument is the same in both.",
      "Calling **Native Son a tragedy**. It is a novel — a naturalist novel — and the tragedy is what the society does, not what the form is; the form is the prose, and the argument is the naturalism.",
      "Confusing **satire with irony**. Satire is a method of the whole work — the ridicule to correct; irony is a gap in a moment — what is said and what is meant. She Stoops is a satire run on the ironies, and the two are the work's and the line's.",
      "A book report without the **date**. The year is part of the argument, and the report that omits it has omitted the hour of the world the book is in.",
      "Missing the **extended metaphor** in Birches. The swinging of the birches is the comparison carried through the whole poem, and a report that names the poem 'about birches' has named the comparison, not the argument.",
      "Getting the names wrong — **Wright, Goldsmith, Bigger Thomas, Bessie Mears, Mary Dalton, Marlow, Kate Hardcastle, Tony Lumpkin, Diop, Frost** — and the mechanics loss that sits on the reference."
    ]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**The non-African prose essay, Paper 2 Section B** — one of two questions on Native Son or The Last Goodman, the hour and a quarter shared with the African section, fifty marks on the paper",
      "**Style, marked and quoted** — diction, sentence length, imagery or tone: the marker named, the example quoted, and the thought the marker carries in the one sentence",
      "**The cultural diversity reading** — the assumption the text makes, the reference, and what the text does with the reader's distance; the distance the candidate's own",
      "**The book report, in the format** — title, author, genre, date; the setting and the theme in a sentence each; the plot without the end; the characters; the purpose; the judgement with the evidence",
      "**A theme with the references** — 'fear makes a man before the law does', or 'affectation is a greater obstacle to love than class', each defended by two references, each commented",
      "**The poems, handled** — the argument in a sentence, the device named and quoted, and the ending that proves it; the counting of Vanity and the extended comparison of Birches the two the paper is likeliest to set"
    ]},  ],
  terms:[
    {t:"style", d:"a writer's way with words — diction, sentence length, imagery, tone", x:"Wright's plain, hard style suits a story about a man who cannot afford softening."},
    {t:"diction", d:"the choice and order of words", x:"The formal diction of the letter contrasts with the speech of the street."},
    {t:"tone", d:"the writer's attitude towards the material", x:"The tone is cold where the events are violent."},
    {t:"content", d:"the matter a work takes up — events, people, places", x:"The content of the novel is a winter in a crowded city."},
    {t:"exposition", d:"writing that explains or informs", x:"The essay is exposition rather than narrative."},
    {t:"naturalism", d:"writing that shows a person pressed by conditions they did not choose", x:"Naturalism shows Bigger as made by the street as much as by himself."},
    {t:"satire", d:"writing that ridicules folly or vice in order to correct it", x:"Goldsmith's comedy satirises the affectations of the town."},
    {t:"comedy of manners", d:"comedy that mocks the behaviour and affectations of a social class", x:"She Stoops to Conquer is a comedy of manners set among country gentry."},
    {t:"extended metaphor", d:"a comparison carried through a whole passage or work", x:"Frost's swinging of the birches is an extended metaphor for the wish to leave life and return."},
    {t:"symbol", d:"an object that stands for an idea and keeps standing for it", x:"The snow in Native Son is a symbol of the closing of every way out."},
    {t:"irony", d:"a gap between what is said and meant, or between expectation and outcome", x:"It is irony that Marlow, who cannot speak to ladies, is tricked into easy conversation with one."},
    {t:"cultural diversity", d:"the different assumptions and customs of different peoples", x:"Reading for cultural diversity means asking what a text assumes its readers take for granted."}
  ],
  quotes:[
    {q:"Bessie's black body was the ransom he paid for a few hours of peace.", w:"Native Son", dev:"metaphor — the body spoken of as ransom", why:"The comparison states the whole trap: Bigger buys relief with the only currency he has, and the relief costs a life, so the reader sees the pressure that makes the crime thinkable."},
    {q:"He had committed murder, and murder was not what he thought it was.", w:"Native Son", dev:"paradox and understatement", why:"The gap between the act and the word is the novel's subject: what the law calls murder, Bigger has experienced as the only moment in which he was fully himself."},
    {q:"I'll be with you in a moment, sir; but I must attend to the ladies first.", w:"She Stoops to Conquer", dev:"irony of situation", why:"Marlow's bashfulness before ladies and his ease with servants make the joke work, and the audience knows what he does not — that the servant is the lady."},
    {q:"Ask me no questions and I'll tell you no fibs.", w:"She Stoops to Conquer", dev:"proverb and comic inversion", why:"Tony Lumpkin uses a proverb to refuse information, and the joke is that the refusal is itself the information the plot needs."},
    {q:"So was I once myself a swinger of birches. And so I dream of going back to be.", w:"Birches", dev:"extended metaphor — swinging birches stands for the wish to leave the world and return to it", why:"The comparison lets Frost say something embarrassing plainly: that he wants escape, but only an escape he can come back from, which is why he adds that earth is the right place for love."}
  ],
  characters:[
    {n:"Bigger Thomas", w:"Native Son", d:"the young man whose fear and rage carry the novel from the first killing to the last speech"},
    {n:"Bessie Mears", w:"Native Son", d:"Bigger's lover, who is drawn into the crime and then killed by the man who cannot think what else to do"},
    {n:"Mary Dalton", w:"Native Son", d:"the daughter of Bigger's employer, whose friendliness is sincere and fatal because neither of them knows how to behave in it"},
    {n:"Marlow", w:"She Stoops to Conquer", d:"the young gentleman who cannot speak to a lady of his own class and is at ease with a servant"},
    {n:"Kate Hardcastle", w:"She Stoops to Conquer", d:"the young woman who pretends to be a barmaid in order to be loved for herself — she stoops to conquer"},
    {n:"Tony Lumpkin", w:"She Stoops to Conquer", d:"the mischief-maker whose practical joke sends Marlow to the wrong house and sets the whole comedy going"}
  ],
  themes:[
    {t:"Fear makes a man before the law does", w:"Native Son", ev:"Bigger's acts follow from the terror he lives in, and the novel gives the terror before it gives the crime"},
    {t:"What a society refuses to see, it will pay for", w:"Native Son", ev:"the Daltons' charity and Bigger's rage never touch, because neither can recognise the other as a person"},
    {t:"Affectation is a greater obstacle to love than class", w:"She Stoops to Conquer", ev:"Marlow can speak freely only to a woman he believes beneath him; Kate must stoop in order to be heard"},
    {t:"A person may want escape and want the world at the same time", w:"Birches", ev:"‘Earth's the right place for love: I don't know where it's likely to go better’"}
  ],
  facts:[
    {q:"Name the five things the guide lists for the study of non-African prose.", a:"Themes, style, content, plot and conflict."},
    {q:"What does style mean, and how do you show it in an answer?", a:"Style is the writer's way with words — diction, sentence length, imagery and tone. You show it by quoting the words and saying what the choice does: a short sentence quickens, a formal word distances, a repeated image binds the book together."},
    {q:"Give the parts of the approved book report format in order.", a:"Title of the book; author, genre and published date; a sentence summary giving the setting and the theme; the characters; the purpose of the book and the plot; and a judgement supported by evidence."},
    {q:"What is a comedy of manners?", a:"A comedy that mocks the behaviour, affectations and pretensions of a social class — as Goldsmith does with the country gentry and their town manners in She Stoops to Conquer."},
    {q:"How does irony of situation work in She Stoops to Conquer?", a:"The audience knows that the house Marlow takes for an inn is Mr Hardcastle's, and that the barmaid he is at ease with is Hardcastle's daughter; the humour and the suspense come from the gap between what he believes and what is true."},
    {q:"What is an extended metaphor, and where is one in the set texts?", a:"A comparison carried through a whole passage or work rather than made in one phrase. Frost's swinging of birches, held from the first stanza to the last, is an extended metaphor for the wish to leave the world and come back to it."},
    {q:"Why does reading non-African prose help a reader understand cultural diversity?", a:"Because the same human acts are shown governed by different assumptions — about class, about family, about what a person is owed — and noticing those differences makes a reader able to name the assumptions of their own community."}
  ],
  tf:[
    {s:"Style is what a work is about.", a:"false", why:"That is content or subject matter. Style is how the writer writes it — diction, sentence length, imagery and tone."},
    {s:"A book report should include a judgement supported by evidence.", a:"true", why:"Without evidence the report is only an opinion; the judgement is what makes it worth reading, and the evidence is what makes it worth believing."},
    {s:"An extended metaphor is made in a single phrase.", a:"false", why:"An extended metaphor is carried through a whole passage or work; a single phrase is a simple metaphor."},
    {s:"Irony of situation depends on the audience knowing more than the character.", a:"true", why:"The gap between what the character believes and what the audience knows is what creates both the humour and the suspense."},
    {s:"Comedy of manners satirises the affectations of a social class.", a:"true", why:"That is its subject: the pretensions of a class, shown by putting its members in situations they cannot manage."},
    {s:"A symbol is an object that means something different in every appearance.", a:"false", why:"A symbol carries the same idea forward through the work; if it means something new each time, it is only a decorated object."}
  ],
  apply:[
    {q:"‘Bigger Thomas is made, not born.’ Discuss, with two references to the novel.", a:"The novel gives the conditions first — the rat in the room, the crowding, the jobs that are refused, the charity that humiliates — and then the acts. Bigger's own claim at the end, that what he did made him free, is the strongest evidence: until he killed, the book shows him as a man with nowhere to put his fear."},
    {q:"Show how Goldsmith makes the audience side with the trick in She Stoops to Conquer.", a:"Marlow's arrogance with servants and his silence with ladies make him ridiculous before he is deceived; Kate's motive is given first, so the audience consents; and Tony's mischief is presented as a joke on a man who needs one. The comedy therefore punishes affectation rather than innocence."},
    {q:"Frost says of climbing the birch: ‘Earth's the right place for love.’ Explain how that line resolves the poem.", a:"The poem wants escape from a life that ‘conforms to the straight crookedness of a hazel stick’ and then refuses the escape it has imagined, because what he wants is not to leave but to begin again — and beginning again requires the place he is in. The line closes the extended metaphor by turning it back to earth."},
    {q:"Compare the treatment of fear in one African and one non-African set text.", a:"Choose one of each, name what the character fears and who or what creates the fear, then compare what each book concludes: whether fear is shown as a private failing or as a condition made by others."}
  ],
  passage:{
    title:"Practice extract — the room, and the door",
    text:"He had not decided anything. That was the thing nobody would believe afterwards, and the thing he could not explain: he had not decided. \n\nThe snow came at the windows in a way that made the room smaller. He had noticed, in the last week, that the street had the same effect: it came at him, and everything behind him closed. \n\nShe said his name, and because she said it in the voice of a person who expected an answer, he was frightened — more frightened than he had been of the gun, or of the money, or of what his mother would say. \n\nHe put out his hand to keep her quiet, and the hand was the whole of the decision.",
    qs:[
      {q:"‘He had not decided anything.’ Why does the narrator insist on this twice?", a:"Because the whole moral weight of the passage rests on it: the novel is arguing that the act is produced by pressure rather than chosen, and the repetition asks the reader to hold intention and cause apart."},
      {q:"Explain the image ‘The snow came at the windows in a way that made the room smaller’.", a:"It is imagery that turns weather into pressure: the snow is given the verb of an attacker and the room the effect of a closing. The image carries the theme that the world outside is not merely cold but actively reducing him, which is why he acts as he does."},
      {q:"Why is it the voice, rather than the gun or the money, that frightens him most?", a:"Because a voice that expects an answer makes him a person who must answer, and that is the one thing the novel shows him never being allowed to be. The gun and the money are things; the expectation of an answer is a claim on him."},
      {q:"‘the hand was the whole of the decision’ — name the device and explain the effect.", a:"It is a metaphor in which an act is spoken of as a decision, and the compression is the point: the sentence says that the whole of a moral choice was contained in one reflex, which is the novel's case in a line."},
      {q:"Write one theme of the novel supported by this extract, with the evidence for it.", a:"Theme: a person pressed long enough by conditions they did not choose will act without ever having chosen to. Evidence: ‘He had not decided anything’ and ‘the hand was the whole of the decision’."}
    ]
  },
  write:[
    {p:"Write an essay: ‘The novel asks us to understand Bigger Thomas, not to forgive him.’ Discuss.", guide:"Separate understanding from forgiveness in the first paragraph. Give three references, and answer the objection that explaining a crime excuses it."},
    {p:"Write a book report of 400 words on the set novel, following the approved format.", guide:"Title; author, genre and date; sentence summary with setting and theme; characters; purpose and plot; a judgement with evidence."},
    {p:"Write a short prose passage in which a character is pressed by something they cannot name, using imagery rather than explanation.", guide:"One page. Let the weather, the room or the street carry the pressure. Do not name the emotion."}
  ],
  activities:[
    "Read the selected non-African prose and discuss themes, style, plot, content and conflict",
    "Outline and discuss the figurative expressions used in the set text",
    "Adopt the sample format and write a book report of the selected non-African prose",
    "Class discussion on the point of view from which the set text is written"
  ],
  materials:["Native Son by Richard Wright","She Stoops to Conquer by Oliver Goldsmith","Vanity by Birago Diop","Birches by Robert Frost","The Village Son by Dr. E. Kandakai"],
  assessment:["Quizzes","Class work","Homework","Assignments","Oral presentations","Book report"]
},
{
  grade:11, period:"II", sem:"One", icon:"✍️",
  title:"Prose and Poetry",
  subtitle:"African prose and the writer's point of view, textual evidence, cultural background and the great themes",
  outcomes:[
    "Learners are able to appreciate African Prose and formulate personal opinions"
  ],
  objectives:[
    "Analyze African Prose in relation to the writer's point of view",
    "Determine textual evidence in an African prose",
    "Identify literary devices used in African Prose",
    "Formulate and defend personal opinions on selected African Prose",
    "Discuss sexuality issues based on the selected African Prose text"
  ],
  note:"A <b>personal opinion</b> in literature is worthless without <b>textual evidence</b> — the words, the action, the placement. And the writer's <b>point of view</b> is not the same as the narrator's: it is the position the whole book takes.",
  study:[
    /* ---- course text: Semester One, Period II — Prose and Poetry (guide p. 13) ---- */
    {k:"h3", t:"The Writer's Point of View"},
    {k:"p", t:"There are three positions to keep apart. The **narrator's** point of view is the grammatical position of the telling — first person or third. The **character's** point of view is what that character believes. The **writer's** point of view is what the finished book holds, and it is shown by what the book rewards and punishes. When you ask for the writer's point of view, do not ask what the writer believed: ask what the book does. In **Lonely Days** the book's judgement of widowhood is carried by what happens to Yaremi, not by an opinion stated anywhere."},
    {k:"rule"},
    {k:"h3", t:"Textual Evidence"},
    {k:"p", t:"**Textual evidence** is what you can point to on the page: a **quotation**, an **action**, a **stage direction**, a **repeated word**, or the **placing** of one event before another. Evidence beats assertion. ‘The novel criticises the treatment of widows’ is worth nothing. ‘The novel criticises the treatment of widows: Yaremi is told to shave her head and is forbidden the market for the length of the mourning, and the town arranges it as a duty rather than a punishment’ is worth a mark."},
    {k:"rule"},
    {k:"h3", t:"The Great Themes of African Prose"},
    {k:"p", t:"The set texts take up **grief**, **social class**, the **land** question, **love**, the **role of women in society**, **family loyalty** and **violence** — and, in this period, **sexuality**. These are not subjects to be listed; each is an argument. When the novel shows a widow's grief, it is also asking who profits from the rules about widows. When it shows a woman's body being discussed by men, it is asking who owns the discussion."},
    {k:"p", t:"When you discuss **sexuality** in a set text, keep to what the text says and does, use the vocabulary precisely, and connect the private matter to the public one — to power, to money, to who is allowed to speak. A classroom discussion of sexuality must be conducted with respect for everybody in the room."},
    {k:"rule"},
    {k:"h3", t:"Composing Your Own Prose"},
    {k:"p", t:"Write about what you can see. Choose a **situation** small enough to hold in one piece; give it a **beginning** that is already moving; use **dialogue** that sounds like a person; and **end on a change**. Then revise: cut every sentence that exists only for the writer's pleasure, and check that the last paragraph answers the question the first one asked."},
    {k:"p", t:"Set texts for this period: **Lonely Days** by Bayo Adebowale; **Faceless** by Amma Darko; **Piano and Drums** by Gabriel Okara; **Crossing the Bar** by Alfred Tennyson; **Africa's Plea** by Roland T. Dempster; **The Human But** and **A Song Out of Midnight** by Roland T. Dempster."}
,
    {k:"rule"},
    {k:"h3", t:"Three Positions, Worked on Lonely Days"},
    {k:"p", t:"The unit's three positions — the narrator's, the character's, the writer's — are kept apart by one test each, and the tests are worked on **Lonely Days** (Bayo Adebowale), so the keeping apart can be seen doing its work."},
    {k:"num", items:[
      "**The narrator's position — the grammar.** The grammatical position of the telling: in Lonely Days the narration is the third person, close to Yaremi's days, the pronoun *she*, and the mind given is hers. The narrator's position is the answer to 'who tells', and the telling is the grammar — first or third, limited or omniscient — and the grammar is the position's first word.",
      "**The character's position — the belief.** What Yaremi believes: that the mourning is the duty, that the custom is what is done, that the question she does not ask — 'and if I walk now?' — is the question that is not to be asked. The character's position is the belief the book is examining, not the belief the book holds — the belief is the material, and the material is what the book works on.",
      "**The writer's position — the book's reward and punishment.** What the finished book holds, shown by what it rewards and what it punishes: the book's judgement of widowhood is carried by what happens to Yaremi — the shaving, the ban from the market, the six moons — and by the ending the widow is given, not by an opinion stated anywhere. The writer's position is the book's, and the book's is the one that can be defended by the references, because the reward and the punishment are the ending."
    ]},
    {k:"p", t:"The examination asks for the **writer's point of view**, and the loss is made by the candidate who answers with the narrator's. The test in one line: the narrator's is the grammar, the character's is the belief, the writer's is the book's reward and punishment — and the reward and the punishment are the ending. A candidate who can say which of the three each answer is giving has the distinction, and the distinction is the mark."},
    {k:"h3", t:"Textual Evidence, the Upgrade Worked"},
    {k:"p", t:"The unit's example is the one to learn: 'The novel criticises the treatment of widows' is worth nothing; 'The novel criticises the treatment of widows: Yaremi is told to shave her head and is forbidden the market for the length of the mourning, and the town arranges it as a duty rather than a punishment' is worth a mark. Worked as the rule: **the assertion, the colon, the reference, the comment** — the assertion states the claim, the reference is what can be pointed to on the page, and the comment says what the reference shows. The upgrade is the colon: the assertion before it, the evidence after it, and the comment that keeps the evidence from standing alone."},
    {k:"num", items:[
      "**The quotation is the strongest evidence.** A quoted line is stronger than a summary of the chapter, because the quotation is what the page says and the summary is what the candidate remembers — and the mark is for the page, not for the memory.",
      "**The action is the evidence where the action is the argument.** In Lonely Days the shaving is the argument — the community's duty done to the body — and the reference to the shaving is the reference to the theme; the doing is the showing, and the showing is the mark.",
      "**The placing is the evidence the candidate misses.** The market is two streets away, and the ban is for six moons — the placing of the ban against the market is the distance the book measures, and the comment that names the distance is the mark the summary never reaches."
    ]},
    {k:"table", head:["Kind of evidence","The test","The strength","The loss that misses it"], rows:[
     ["Quotation","the words, exact, in the sentence","the strongest — the page says it","the quotation without the comment earns nothing"],
     ["Action","what the character does, named","strong — the doing is the argument","the action summarized without the name"],
     ["Stage direction","the writer's instruction, quoted","strong — the writer's own hand","the direction paraphrased into the character's"],
     ["Repeated word","the word that returns, counted","the pattern — the return is the emphasis","the word named without the count"],
     ["Placing","one event set before another","the distance — the order is the argument","the order lost in the summary"]]},
    {k:"p", t:"The table is the drill: for each assertion in the answer, the strongest evidence available is the one used, and the comment follows — the reference is where the mark is, and the comment is where the mark is kept. Evidence beats assertion, and the answer is as long as its assertions, not as long as its references."},
    {k:"h3", t:"The Great Themes, Each as an Argument"},
    {k:"p", t:"The unit's list — grief, social class, the land, love, the role of women in society, family loyalty, violence, and in this period sexuality — is not a list to be recited; each is an argument, and the argument is the question the text is asking. Worked on **Lonely Days**: the theme is not 'widowhood' — the theme is the question, *what the village calls duty the widow experiences as punishment*, and the argument is carried by the two sufferings the novel states: 'I have been a widow twice: once when he died, and once when they told me what to do about it.' Worked on **Faceless** (Amma Darko): the theme is not 'street children' — the theme is the question, *a child without a name is a child without protection*, and the argument is carried by the verb — the street takes the name, and the street does not give things back."},
    {k:"p", t:"When the period sets **sexuality**, the unit's rule holds: keep to what the text says and does, use the vocabulary precisely, and connect the private matter to the public one — to power, to money, to who is allowed to speak. The set text treats sexuality as a question of power as much as of desire, and the answer that keeps to the text and connects it to the power is the answer the paper rewards. The classroom discussion is conducted with respect for everybody in the room, and the examination answer is conducted with respect for the text — the text kept to, the vocabulary precise, and the connection the public one."},
    {k:"h3", t:"The Liberian Ground: the Market, the Mourning, the Poet at Home"},
    {k:"p", t:"**Lonely Days** is the novel the Liberian candidate knows from the country's own practice: the mourning that is regulated, the market that is banished, the six moons that are a season — the yam's time. The village of the novel is the village the candidate has heard of, and the reference is not borrowed but remembered. And the period's poems are half by hands the candidate's own country claims: **Roland T. Dempster** — *Africa's Plea*, *The Human But*, *A Song Out of Midnight* — is the Liberian poet of the set, and 'Africa, my Africa, have you heard my plea?' is the **apostrophe** that puts the reader in the position of the one who must answer — the continent addressed, and the reader the answerer."},
    {k:"p", t:"The prose paper will set the African section on **Faceless** (Amma Darko) and **Lonely Days** (Bayo Adebowale) — two questions on each, one answered — and the argument each carries is the one the unit has worked: the name and the protection, the duty and the punishment. The candidate who has the one sentence for each, with the three references, has the section, and the section is the hour and a quarter shared with the non-African — the fifty marks of Paper 2."},
    {k:"h3", t:"Common Mistakes in This Unit"},
    {k:"bul", items:[
      "Answering the **writer's point of view** with the narrator's. The narrator's is the grammar — first or third; the writer's is what the book rewards and punishes, and the reward and the punishment are the ending.",
      "**Asserting without pointing.** 'The novel criticises the treatment of widows' is the assertion; the colon, the reference and the comment are the answer, and the assertion alone is the mark's absence.",
      "**Listing the themes** instead of arguing them. The list is what the syllabus gives; the argument is what the text asks, and 'discuss the theme' wants the question the text is asking, not the word the syllabus lists.",
      "Using **imprecise vocabulary** on sexuality. The period's rule: the vocabulary precise, the private connected to the public, and the text kept to — the power, the money, who is allowed to speak.",
      "Confusing the **persona** with the poet in the period's poems. The speaker of *Piano and Drums* is the voice the poem adopts, and the speaker of *Crossing the Bar* is the old man the poem takes on — the persona is the voice, and the poet is the person.",
      "Missing the **placing** as evidence. The ban set against the market, the six moons against the yam's season — the order is the argument, and the summary that loses the order loses the theme."
    ]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**The African prose essay, Paper 2 Section A** — one of two questions on Faceless or Lonely Days, the hour and a quarter shared with the non-African section, fifty marks on the paper",
      "**The writer's point of view, shown by the book** — the position stated, the reward and the punishment named, and the ending that carries them; the grammar and the belief kept apart",
      "**Textual evidence, in the upgrade** — the assertion, the colon, the reference, the comment; the quotation the strongest, and the placing the one the candidate misses",
      "**A theme as an argument** — the question the text is asking, stated as a sentence, and defended by two or three references, each commented",
      "**The cultural background, named** — the custom, the market, the mourning, each with the reference and the work it does in the argument",
      "**The poems of the period, to their sentences** — the argument, the device named and quoted, and the ending that proves it; the apostrophe of Africa's Plea the one the paper is likeliest to set"
    ]},  ],
  terms:[
    {t:"writer's point of view", d:"the position the finished book takes, shown by what it rewards and punishes", x:"The writer's point of view is shown by the ending the widow is given, not by a stated opinion."},
    {t:"textual evidence", d:"what can be pointed to on the page — quotation, action, stage direction, placing", x:"A quoted line is stronger evidence than a summary of the chapter."},
    {t:"grief", d:"deep sorrow, especially for a death", x:"The novel's subject is the grief a widow is permitted to show."},
    {t:"social class", d:"a division of society by wealth, birth or occupation", x:"The quarrel in the village runs along the line of social class."},
    {t:"widowhood", d:"the state and the rites imposed on a woman whose husband has died", x:"The book's argument is carried by what widowhood costs Yaremi."},
    {t:"gender role", d:"the part a society assigns to a woman or a man", x:"The novel questions the gender roles the village takes for granted."},
    {t:"sexuality", d:"the ways people experience and express desire, and the rules a society sets on it", x:"The set text treats sexuality as a question of power as much as of desire."},
    {t:"inference", d:"a conclusion drawn from evidence rather than stated in the text", x:"That the marriage was arranged is an inference from what the parents say."},
    {t:"refrain", d:"a line or phrase repeated through a poem", x:"The refrain returns at the end of each stanza."},
    {t:"metaphor", d:"a comparison that says one thing is another", x:"‘Sunset and evening star’ is a metaphor for the approach of death."},
    {t:"symbolism", d:"an object or action standing for an idea beyond itself", x:"The crossing of the bar is a symbol of death."},
    {t:"dialogue", d:"the words spoken between characters", x:"The dialogue carries the plot without a narrator's help."}
  ],
  quotes:[
    {q:"Sunset and evening star, / And one clear call for me!", w:"Crossing the Bar", dev:"metaphor — death spoken of as evening and a call", why:"The comparison takes the terror out of death by giving it the order of a day and the mannerliness of a summons, which is exactly the calm the poem is asking for."},
    {q:"For tho' from out our bourne of Time and Place / The flood may bear me far, / I hope to see my Pilot face to face / When I have crost the bar.", w:"Crossing the Bar", dev:"symbolism and metaphor — the sandbar stands for the boundary of death", why:"The whole poem turns on the bar: a real sandbar at the mouth of a harbour, and the boundary the speaker expects to cross. The image lets Tennyson hope without arguing."},
    {q:"…but lost in the labyrinth of its complexities, it ends in the middle of a phrase at a dagger's point.", w:"Piano and Drums", dev:"metaphor and imagery — the music is a labyrinth ending in a dagger", why:"The piano's sophistication is given an edge that cuts, so the reader feels the danger in the attraction rather than being told about it."},
    {q:"…and my blood ripples with the drum, and I am caught in the middle.", w:"Piano and Drums", dev:"personification of the blood, and metaphor of being caught", why:"The body answers before the mind decides, and the metaphor of being caught states the poem's theme: the poet belongs to two inheritances and cannot choose between them without losing part of himself."},
    {q:"Africa, my Africa, have you heard my plea?", w:"Africa's Plea", dev:"apostrophe — the poet addresses the continent as a person", why:"Addressing Africa directly turns the poem into a plea rather than a description, so the reader is put in the position of the one who must answer."}
  ],
  characters:[
    {n:"Yaremi", w:"Lonely Days", d:"the widow whose mourning is regulated by the village and whose survival is the novel's argument"},
    {n:"The village elders", w:"Lonely Days", d:"the collective authority that decides what a widow may do and for how long"},
    {n:"Fofo", w:"Faceless", d:"the street girl whose life the novel makes visible and whose name has to be recovered"},
    {n:"Kabria", w:"Faceless", d:"the woman who works with street children and who carries the reader's view of what can be done"},
    {n:"The poet", w:"Piano and Drums", d:"the speaker caught between the drum of his ancestry and the piano of the school"},
    {n:"The speaker", w:"Crossing the Bar", d:"an old man who makes death into an evening crossing rather than a battle"}
  ],
  themes:[
    {t:"What the village calls duty, the widow experiences as punishment", w:"Lonely Days", ev:"the rites of mourning are carried out by the community as a service and are suffered by one woman as a sentence"},
    {t:"A child without a name is a child without protection", w:"Faceless", ev:"the street children of the novel are known by nicknames until somebody troubles to learn who they are"},
    {t:"Two inheritances can be felt in the body at once", w:"Piano and Drums", ev:"‘my blood ripples with the drum’ against the ‘wailing rage’ of the piano, and the poet is ‘caught in the middle’"},
    {t:"Death can be met as a crossing rather than a defeat", w:"Crossing the Bar", ev:"the whole poem is built on the image of a ship putting out over a sandbar at evening"}
  ],
  facts:[
    {q:"Distinguish the narrator's point of view from the writer's point of view.", a:"The narrator's point of view is the grammatical position of the telling — first or third person, limited or omniscient. The writer's point of view is what the finished book holds, and it is shown by what the book rewards and punishes."},
    {q:"What counts as textual evidence?", a:"Anything you can point to on the page: a quotation, an action, a stage direction, a repeated word, or the placing of one event before another."},
    {q:"Why is ‘the novel is about widowhood’ not a theme?", a:"Because it names a subject, not an idea. A theme states what the book holds about the subject: for example, ‘a widow's grief is regulated by the community for the community's comfort, not for hers’."},
    {q:"How should a discussion of sexuality in a set text be conducted?", a:"Keep to what the text says and does, use precise language, connect the private matter to the public one — power, money, who may speak — and treat everybody in the classroom with respect."},
    {q:"What does the refrain of a poem do?", a:"It returns at intervals, and each return carries a slightly heavier meaning than the last, so the poem accumulates rather than develops."},
    {q:"Give the four steps for composing a short piece of prose.", a:"Choose a situation small enough to hold; begin it already moving; write dialogue that sounds like a person; and end on a change, then revise by cutting whatever is only for the writer's pleasure."},
    {q:"What is an apostrophe in poetry?", a:"A figure in which the poet addresses somebody absent or something that cannot answer — a continent, a bird, the sea — as if it were present and listening."}
  ],
  tf:[
    {s:"A personal opinion in literature needs no support if it is sincerely held.", a:"false", why:"An opinion without textual evidence cannot be marked: the reader cannot tell whether it came from the book or from anywhere else."},
    {s:"The writer's point of view is shown by what the book rewards and punishes.", a:"true", why:"That is the only evidence available: what the book does at the end, and to whom."},
    {s:"A subject and a theme are the same thing.", a:"false", why:"A subject names the material; a theme states the idea the work holds about it, as a sentence."},
    {s:"An apostrophe addresses something that cannot answer.", a:"true", why:"That is the figure: the poet speaks to an absent person, an abstraction or a thing as though it were present."},
    {s:"A refrain is a line that appears only once, at the end of the poem.", a:"false", why:"A refrain returns at intervals through the poem and usually again in the last stanza."},
    {s:"Dialogue is only used in drama.", a:"false", why:"Prose fiction uses dialogue constantly, and it is one of the main ways a novelist reveals character without commenting."}
  ],
  apply:[
    {q:"‘The village does not hate the widow; it simply does not see her.’ Discuss, with two references to Lonely Days.", a:"The rites are performed by relatives who speak of duty and who never ask what the widow wants; the elders arrange her mourning as a service to the dead and not to her. The novel's point of view is therefore shown in the gap between the kindness intended and the cruelty done, which is more damning than open hostility would be."},
    {q:"Show how Faceless makes a reader care about a child the novel at first refuses to name.", a:"The novel begins with the street and its nicknames, then gives the girl a name, a family and a history, and only then lets the reader judge what has been done to her. The structure itself is the argument: those without names are those nobody is answerable for."},
    {q:"In Piano and Drums the poet is caught between two inheritances. Does the poem choose? Support your answer from the text.", a:"It does not choose, and that is its conclusion: the blood answers the drum while the education answers the piano, and the last movement of the poem leaves the speaker standing between them rather than resolving him — which is the honest answer for a poet formed by both."},
    {q:"Defend or attack this opinion: ‘Crossing the Bar is a poem about giving in.’", a:"Either position can be defended from the text. It is not giving in because the poem asks for a crossing rather than a collapse and expects to meet the Pilot; it is giving in because the summons is described as clear and unwished-for and the tide is not asked to wait. The strongest answer decides, and quotes the line that settles it."}
  ],
  passage:{
    title:"Practice extract — the mourning",
    text:"They came on the third day with the razor, the white cloth, and the advice, and they were very kind about all three. \n\n‘It is the custom,’ her husband's brother said, and he was not a cruel man; he had wept at the graveside with the rest. ‘It is what is done.’ \n\nShe did not ask who does it. She had stopped asking that the first time, which had been the day of the washing, when four women had held her still and she had understood that the holding was meant as help. \n\nOutside, the market was opening. She could hear it — the calling, the arguing, the money — and she had sold pepper in that market for nineteen years. \n\n‘You will not go for six moons,’ her husband's brother said. ‘After that, the cloth may come off and you may walk where you like.’ \n\nShe thought: and if I walk now? She did not say it. Nineteen years, and the market two streets away, and she did not say it.",
    qs:[
      {q:"‘They came on the third day with the razor, the white cloth, and the advice, and they were very kind about all three.’ What is the effect of putting the razor and the cloth on the same grammatical level as the advice?", a:"It makes the violence and the kindness one visit rather than two, so the reader understands that the custom is not carried out by enemies. The list is the book's argument in a sentence: what is done to her arrives in the same hands as what is said to comfort her."},
      {q:"Explain ‘she had understood that the holding was meant as help’.", a:"The novel separates intention from effect: the women who held her were performing a service as they understood it, and the sentence refuses to call them cruel. The cruelty is located in the custom rather than in the people, which is a harsher judgement because it is harder to escape."},
      {q:"What work does the sound of the market do in this passage?", a:"It measures exactly what is being taken away: she has sold pepper there for nineteen years, and the freedom she is told she may have in six moons is freedom to return to her own livelihood. The market's nearness — two streets — turns a rite into an exclusion."},
      {q:"‘She thought: and if I walk now? She did not say it.’ What does the placing of this at the end of the extract achieve?", a:"The unspoken question is left unanswered and unsaid, so the reader holds the whole weight of the passage in a sentence that is never finished. The silence is the point: the custom works because the question is not asked aloud."},
      {q:"Write one theme of the novel supported by this extract, with the evidence for it.", a:"Theme: a community's care for a widow is arranged for its own order and not for her life. Evidence: ‘It is the custom … It is what is done’ and ‘You will not go for six moons.’"}
    ]
  },
  write:[
    {p:"Write an essay: ‘The village is not cruel, and that is the novel's most serious charge.’ Discuss.", guide:"Three references to the rites. Separate intention from effect. Answer the objection that the novel should name a villain."},
    {p:"Defend a personal opinion about one set text in 400 words, using at least four pieces of textual evidence.", guide:"State the opinion in the first sentence. Give the evidence. Answer one objection in the last paragraph."},
    {p:"Write a short story of 500 words in which a character's living is taken away by a rule nobody intends as unkind.", guide:"Do not give the rule a villain. Let the reader hear the work going on without the character."}
  ],
  activities:[
    "Read the selected African prose and formulate and defend personal opinions",
    "Discuss the author's background and style, the themes, the story's main line and its cultural relevance",
    "Discuss the sexuality issues that arise from the set text, with respect for every learner",
    "Compose a short story of your own"
  ],
  materials:["Lonely Days by Bayo Adebowale","Faceless by Amma Darko","Piano and Drums by Gabriel Okara","Crossing the Bar by Alfred Tennyson","Africa's Plea and A Song Out of Midnight by Roland T. Dempster","The Human But by Roland T. Dempster"],
  assessment:["Quizzes","Classwork","Homework","Oral presentations"]
},
{
  grade:11, period:"III", sem:"One", icon:"📜",
  title:"Poetry",
  subtitle:"The types and forms of poetry, poetic devices, unseen poems, and writing poems of your own",
  outcomes:[
    "Learners are able to analyze poetry (African and Non-African) and appreciate diversity of values and practices"
  ],
  objectives:[
    "Differentiate the types of poetry and their forms",
    "Appreciate poetry using literary devices and imagery",
    "Apply poetic devices in poetry"
  ],
  note:"A <b>sonnet</b> is fourteen lines; the <b>Shakespearean</b> sonnet rhymes in three quatrains and a couplet, and turns its argument at the third quatrain. An <b>unseen poem</b> is read without notes: subject, device, effect, and the turn.",
  study:[
    /* ---- course text: Semester One, Period III — Poetry (guide p. 14) ---- */
    {k:"h3", t:"The Types of Poetry"},
    {k:"p", t:"Poetry is language arranged in **lines** and **stanzas** so that sound and compression carry part of the meaning. The main types are these."},
    {k:"bul", items:[
      "**Narrative poetry** — tells a story: the **epic**, the **ballad**.",
      "**Lyric poetry** — expresses a single speaker's feeling or thought: the **ode**, the **elegy**, the **sonnet**.",
      "**Dramatic poetry** — spoken by a character rather than by the poet: the **dramatic monologue**.",
      "**Pastoral poetry** — set in the country and concerned with shepherds and rural life.",
      "**Didactic poetry** — written to teach or to argue a doctrine.",
      "**Satiric poetry** — mocks folly or vice in order to correct it.",
      "**Sonnet** — fourteen lines: the **Shakespearean** (three quatrains and a couplet) or the **Petrarchan** (an octave and a sestet).",
      "**Elegy** — a poem of mourning.",
      "**Ballad** — a short narrative poem in stanzas, often with a refrain, made to be sung."
    ]},
    {k:"rule"},
    {k:"h3", t:"Reading an Unseen Poem"},
    {k:"p", t:"For an **unseen poem** you have nothing but the page, so work in order. One: read it twice and say the **subject** in a sentence. Two: who is **speaking**, and to whom? Three: name the **devices** and quote them. Four: find the **turn** — the place where the poem changes direction, which in a sonnet is usually the third quatrain or the final couplet. Five: state the **theme** as a sentence. Never paraphrase stanza by stanza: the examiner already has the poem."},
    {k:"rule"},
    {k:"h3", t:"Poetic Devices"},
    {k:"p", t:"**Imagery** appeals to the senses; **symbolism** carries an idea in an object; **foreshadowing** points to what is to come; **suspense** withholds it; **flashback** brings the past into the poem; **alliteration** repeats an initial consonant; **assonance** repeats a vowel; **onomatopoeia** makes a word sound like its meaning; **repetition** and **refrain** accumulate; **enjambment** carries a sentence over the end of a line; and **rhyme** and **rhythm** give the poem its body."},
    {k:"p", t:"Set texts for this period: **The Panic of Growing Older** by Lenrie Peters; **Shall I compare thee to a summer's day?** (Shakespearean sonnet); **The Dining Table** by Gbanabom Hallowell; **A Government Driver on his Retirement** by Onu Chibuike; **The Song of the Women of My Land** by Oumar Farouk Sesay; **Caged Bird** by Maya Angelou; **Journey of the Magi** by T.S. Eliot; **Bats** by D.H. Lawrence."}
,
    {k:"rule"},
    {k:"h3", t:"The Unseen Poem, Worked in the Five Steps"},
    {k:"p", t:"The unit's practice extract — the poem of the felled tree and the market women — is worked in the five-step method, so the method can be carried into Paper 1 with the steps already done once."},
    {k:"num", items:[
      "**Step one — the subject, in a sentence, after two readings.** A tree at the corner of the road, where the market women rested in its shade, is cut, and the shade, the women and the rest go with it — the poem is about the loss the boys on the stump do not know was a loss.",
      "**Step two — who is speaking, and to whom.** The speaker is not a person in the scene; the voice is the one that has counted the women as 'being old' and that calls the boys' ignorance 'a kind of mercy, / and a kind of danger' — a voice of judgement, speaking to the reader, and the reader is the one the poem is asking to know what was cut.",
      "**Step three — the devices, named and quoted.** The **personification** of the shade going with the women — the shade is a thing that goes, and the going is the loss made visible; the **oxymoron's shape** in 'a kind of mercy, / and a kind of danger' — the two kinds joined, the ignorance both the saving and the cost; and the **contrast** of the last stanza — the road wider, the cars quicker, nobody late, nobody resting — the gain stated in the negatives, and the negatives the loss.",
      "**Step four — the turn.** The turn is the second stanza, at 'which is a kind of mercy, / and a kind of danger': the poem moves from the loss to the judgement of the loss, and the turn is where the poem changes from describing to arguing — the hinge the method finds.",
      "**Step five — the theme, as a sentence.** The progress that takes the rest is a gain the young do not know they have lost — the poem's argument, and the argument is proved by the ending: nobody is late, and nobody is resting."
    ]},
    {k:"p", t:"Five steps, and the unseen poem is answered. The examiner already has the poem, so the **paraphrase is the loss**: the subject in a sentence is enough of the what, and the device, the turn and the theme are the how and the why — and the how and the why are where the mark is, because the what is what the examiner has."},
    {k:"table", head:["Point","The Shakespearean","The Petrarchan","The test that tells them"], rows:[
     ["The lines","fourteen","fourteen","the count — both are the fourteen"],
     ["The stanzas","three quatrains and a couplet","an octave and a sestet","the shape of the stanzas"],
     ["The rhyme","the quatrains rhyme, the couplet closes","the octave holds, the sestet answers","the rhyme scheme"],
     ["The turn","the third quatrain, or the couplet","the sestet, where the answer begins","the place the argument changes"],
     ["The mark of the form","the couplet that turns the argument","the sestet that answers the octave","the turning piece named"]]},
    {k:"p", t:"Worked on **Shall I compare thee to a summer's day?**: the turn is 'But thy eternal summer shall not fade' — the third quatrain — and the couplet delivers the promise the sonnet has been building: 'So long as men can breathe or eyes can see, / So long lives this, and this gives life to thee.' The form is the argument: the comparison fails in the quatrains, and the poem itself is what succeeds — the art that preserves what nature cannot — and the couplet is the success stated, the promise the form has been holding."},
    {k:"h3", t:"The Types, Each to a Set Text"},
    {k:"p", t:"The unit's list, worked on the period's texts: the **narrative** is the ballad and the epic, and the ballad tells in stanzas made to be sung; the **lyric** is the ode, the elegy, the sonnet — a single speaker's feeling or thought; the **dramatic** is the monologue, spoken by a character who is not the poet, and the reader learns more than the speaker means to tell; the **pastoral** is the country and the shepherds; the **didactic** is written to teach; the **satiric** mocks to correct. **Binsey Poplars** is the elegy worked — the mourning of the felled trees, 'My facers, my reflections, my tenor and bass — where are they now?', the trees named as companions so the felling is a death of persons rather than timber; **Journey of the Magi** is the narrative in the lyric's dress — the journey told by the traveller, and the nativity taken from the side of the cold; **The Panic of Growing Older** (Lenrie Peters) is the lyric of the measurement — the years against the youth, 'They have eaten the years and left me the calendar', the title's panic the fear of having been consumed while still alive."},
    {k:"p", t:"The type is named with the **number and the function**: the sonnet's fourteen, the villanelle's nineteen and its two refrains, the elegy's mourning, the ballad's stanza. The name without the number is the definition lost, and the number without the function is the fact without the argument — and the argument is what the shape does to the feeling it carries."},
    {k:"h3", t:"The Set Poems, Each to Its Device and Its Turn"},
    {k:"p", t:"The set poems, each to the device that does its work: **The Dining Table** (Gbanabom Hallowell) — the table is the household gathered and dispersed, and the furniture is the symbol that carries the family; **A Government Driver on his Retirement** (Onu Chibuike) — the road that does not thank him, the **personification** that makes the neglect a deliberate refusal; **The Song of the Women of My Land** (Sesay) — the song older than the road, the endurance against the change the road brought; **Caged Bird** (Angelou) — the **symbol** of a people prevented from living freely, the song the longing, 'of things unknown / but longed for still'; **Bats** (Lawrence) — the dark made the bat's country, the creature judged by the wrong standard, 'and the dark is his country.' One device each, and the device is the quotation, and the quotation is the mark."},
    {k:"p", t:"The **turn** is the poem's hinge, and the period's poems turn where the argument changes: the driver's poem turns from the service to the neglect; the caged bird's turns from the cage to the song; the Magi's turns from the journey to the death of the old self — 'this Birth was / Hard and bitter agony for us, like Death, our death'. The unseen question 'where does the poem turn' wants the line, and the line is the quotation — the 'But' of the sonnet, the 'and' of the free verse, the place where the argument changes its mind."},
    {k:"h3", t:"The Liberian Ground: the Unseen, and the Poet at Home"},
    {k:"p", t:"The **unseen poem** in Paper 1 is five questions — the subject, the speaker, the device quoted, the effect, and the theme — and the method is the year's drill at a smaller scale: the steps already done on the set poems are the steps the unseen wants. And the period's set is half at home: **Onu Chibuike**, the Liberian poet, is in the set with the driver's retirement, and **Roland T. Dempster** — *Africa's Plea*, *The Human But*, *A Song Out of Midnight* — carries the Liberian voice into the poetry the candidate knows. The relevance question of the WASSCE is easiest where the poem is the country's own, and the reference is remembered rather than borrowed — and the remembered reference is the exact one."},
    {k:"p", t:"The poetry paper itself — **Paper 3, Sections C and D** — sets two questions on each of the prescribed African and non-African poems, and the candidate answers **one from each section**, in the two hours and a half of the paper, a hundred marks for the drama and the poetry together. The poem the candidate has to its one sentence, with the device and the turn, is the poem the section will set — and the one sentence is the review, and the review is the state the section will find."},
    {k:"h3", t:"Common Mistakes in This Unit"},
    {k:"bul", items:[
      "**Paraphrasing the unseen poem** stanza by stanza. The examiner already has the poem; the subject in a sentence is enough of the what, and the device, the turn and the theme are the marks.",
      "Missing the **turn** in the sonnet. The volta is the hinge — the third quatrain in the Shakespearean, the sestet in the Petrarchan — and the sonnet without its turn is the argument without its change.",
      "Calling any fourteen lines a **Shakespearean sonnet**. The test is the rhyme: three quatrains and a couplet, the couplet turning the argument — the fourteen without the couplet's turn is not the form.",
      "Confusing **assonance with alliteration**. Alliteration is the initial consonant — the 'delve or hew — hack and rack'; assonance is the vowel within the words — the long o of 'the slow smoke.' The sound is the mark, and the sound is named.",
      "Naming the **poet's emotion** instead of the poem's. The question is what the poem does — the image, the rhythm, the turn — and the emotion is what the reader is made to feel, not what the candidate feels for the poet.",
      "Writing the **form** as 'lines and stanzas.' The form is the shape with its numbers — the sonnet's fourteen, the villanelle's nineteen and its refrains — and the number is the name."
    ]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**The five unseen poem questions in Paper 1** — the subject in a sentence, the speaker, the device quoted, the effect, and the theme; the turn named where the poem changes its mind",
      "**The poetry essays, Paper 3 Sections C and D** — two questions on each prescribed poem, one answered from the African section and one from the non-African, in the two hours and a half",
      "**The form, named with its numbers** — the sonnet, the villanelle, the elegy, the ballad: the shape with its counts, and what the shape does to the argument it carries",
      "**A device with its work** — the image, the refrain, the apostrophe, the extended metaphor, each named, quoted, and the effect in one sentence",
      "**The turn, placed** — the line where the argument changes, quoted, and the change named — from the loss to the judgement, from the service to the neglect",
      "**The theme as a sentence** — the poem's argument, defended by the device and the ending, and the relevance to the society where the question asks for it"
    ]},  ],
  terms:[
    {t:"lyric", d:"a short poem expressing one speaker's feeling or thought", x:"A lyric gives a mood rather than a story."},
    {t:"narrative poem", d:"a poem that tells a story", x:"A ballad is a narrative poem made to be sung."},
    {t:"ballad", d:"a short narrative poem in stanzas, often with a refrain", x:"The ballad tells the drowning in four-line stanzas."},
    {t:"elegy", d:"a poem of mourning for someone dead or lost", x:"The elegy closes on the name of the dead."},
    {t:"sonnet", d:"a lyric of fourteen lines, Shakespearean or Petrarchan", x:"Sonnet 18 is a Shakespearean sonnet in three quatrains and a couplet."},
    {t:"quatrain", d:"a stanza or group of four lines", x:"The three quatrains of a Shakespearean sonnet develop the argument."},
    {t:"couplet", d:"two lines that rhyme and close a passage", x:"The closing couplet turns the sonnet's argument round."},
    {t:"volta", d:"the turn in a sonnet where the argument changes", x:"The volta comes at the third quatrain: ‘But thy eternal summer shall not fade’."},
    {t:"enjambment", d:"carrying a sentence over the end of a line without a pause", x:"The enjambment hurries the reader past the line ending."},
    {t:"alliteration", d:"the same initial consonant repeated", x:"‘the sound of the sea’ is alliteration."},
    {t:"assonance", d:"the same vowel sound repeated within words", x:"‘the slow smoke’ repeats the long o."},
    {t:"dramatic monologue", d:"a poem spoken by a character who is not the poet", x:"In a dramatic monologue the reader learns more than the speaker means to tell."}
  ],
  quotes:[
    {q:"Shall I compare thee to a summer's day? / Thou art more lovely and more temperate.", w:"Shall I compare thee to a summer's day?", dev:"rhetorical question and simile", why:"The question opens the comparison and the second line answers it, so the whole sonnet is one argument conducted as a conversation the reader overhears."},
    {q:"But thy eternal summer shall not fade, / Nor lose possession of that fair thou ow'st.", w:"Shall I compare thee to a summer's day?", dev:"the volta — ‘But’ turns the argument at the third quatrain", why:"Everything before the turn is the comparison failing; everything after it is the claim that the poem itself will do what summer cannot, and preserve the beloved."},
    {q:"So long as men can breathe or eyes can see, / So long lives this, and this gives life to thee.", w:"Shall I compare thee to a summer's day?", dev:"the closing couplet, with repetition of ‘so long’", why:"The couplet delivers the promise the sonnet has been building: the poem, not nature, is what will keep the beloved alive, and the repetition makes the promise sound like a legal term."},
    {q:"The driver has driven his last road, / and the road does not thank him.", w:"A Government Driver on his Retirement", dev:"personification — the road is given the power to thank", why:"The ungrateful road is the whole grievance of the poem: a life of service answered by no one, and the personification makes the neglect a deliberate refusal rather than an oversight."},
    {q:"He hangs upside down, / and the dark is his country.", w:"Bats", dev:"imagery and metaphor — darkness given the name of a country", why:"The bat is made a citizen of the dark rather than a visitor to it, so the reader is asked to see the creature as belonging rather than as straying — which is Lawrence's quiet argument in the poem."}
  ],
  characters:[
    {n:"The beloved", w:"Shall I compare thee to a summer's day?", d:"the person the sonnet addresses, kept alive by the poem rather than by nature"},
    {n:"The speaker", w:"Shall I compare thee to a summer's day?", d:"the poet, whose argument moves from a failed comparison to a promise that outlasts it"},
    {n:"The government driver", w:"A Government Driver on his Retirement", d:"the retired servant whose life of service is answered by nobody"},
    {n:"The speaker", w:"The Panic of Growing Older", d:"the voice that measures youth against the years that follow it"},
    {n:"The bat", w:"Bats", d:"the creature Lawrence watches at dusk and refuses to call ugly"},
    {n:"The women", w:"The Song of the Women of My Land", d:"the collective speakers whose work and song outlast the change around them"}
  ],
  themes:[
    {t:"Art preserves what nature cannot", w:"Shall I compare thee to a summer's day?", ev:"the turn at ‘But thy eternal summer shall not fade’ and the closing couplet, which promises that the poem gives life"},
    {t:"Service is answered with neglect, and the neglect is the injury", w:"A Government Driver on his Retirement", ev:"the road does not thank him, and the office he served has no place for him"},
    {t:"The years take more than they are said to take", w:"The Panic of Growing Older", ev:"the poem's title and its measurement of youth against what follows"},
    {t:"A creature judged ugly is only judged by the wrong standard", w:"Bats", ev:"the bat is given a country of its own, and the poem refuses the human measure of beauty"}
  ],
  facts:[
    {q:"How does a Shakespearean sonnet differ from a Petrarchan sonnet?", a:"Both have fourteen lines. The Shakespearean divides into three quatrains and a closing couplet, with the turn usually at the third quatrain; the Petrarchan divides into an octave of eight lines and a sestet of six, with the turn between them."},
    {q:"What is a volta, and where does it come in a Shakespearean sonnet?", a:"The volta is the turn where the poem's argument changes direction. In a Shakespearean sonnet it usually falls at the third quatrain or at the closing couplet — in Sonnet 18 at ‘But thy eternal summer shall not fade’."},
    {q:"Give five steps for reading an unseen poem.", a:"Say the subject in a sentence; decide who speaks and to whom; name and quote the devices; find the turn; state the theme as a sentence. Never paraphrase stanza by stanza."},
    {q:"Distinguish assonance from alliteration.", a:"Alliteration repeats the same initial consonant in neighbouring words; assonance repeats the same vowel sound inside words."},
    {q:"What is enjambment, and what does it do?", a:"Enjambment carries a sentence over the end of a line without a pause, so the reader's ear runs past the line ending — which can hurry the reading or leave a word exposed at the start of a line."},
    {q:"Name the nine types of poetry listed in the guide and give one word on each.", a:"Narrative (tells a story), lyric (one speaker's feeling), dramatic (spoken by a character), pastoral (country life), didactic (teaches), satiric (mocks to correct), sonnet (fourteen lines), elegy (mourns), ballad (a sung story in stanzas)."},
    {q:"What is a dramatic monologue?", a:"A poem spoken by a character who is not the poet, in which the reader learns more than the speaker intends to tell — the gap between what is said and what is revealed is the point."}
  ],
  tf:[
    {s:"A sonnet has fourteen lines.", a:"true", why:"Both forms have fourteen: the Shakespearean as three quatrains and a couplet, the Petrarchan as an octave and a sestet."},
    {s:"A ballad is a lyric poem of one speaker's feeling.", a:"false", why:"A ballad is a narrative poem in stanzas, usually with a refrain, made to be sung; the lyric is the poem of a single feeling."},
    {s:"The volta is the turn where a sonnet changes direction.", a:"true", why:"It is the hinge of the argument, usually at the third quatrain in a Shakespearean sonnet."},
    {s:"Enjambment means ending every line with a full stop.", a:"false", why:"That is an end-stopped line. Enjambment is the opposite: the sentence runs over the line ending without a pause."},
    {s:"An elegy is written to praise a living person at a ceremony.", a:"false", why:"An elegy mourns somebody or something dead or lost."},
    {s:"Assonance repeats the same vowel sound within words.", a:"true", why:"It is the vowel equivalent of the consonantal alliteration, and it is one of the ways a poem is held together by sound."}
  ],
  apply:[
    {q:"Show how Sonnet 18 first fails and then succeeds, using the volta.", a:"The comparison fails because a summer's day is temporary — too hot, too short, and its beauty is leased, not owned. The turn at ‘But thy eternal summer shall not fade’ abandons the comparison and makes the poem itself the preservation: the closing couplet promises that as long as the poem is read, the beloved lives."},
    {q:"‘A Government Driver on his Retirement is a political poem, not a personal one.’ Discuss.", a:"Both readings hold, and the poem depends on holding them: the grievance is entirely personal — one man's last road — and entirely public, because the neglect belongs to an office and a system. The strongest answer shows that the personal detail is what makes the political charge land."},
    {q:"Choose one image from the set poems and show how it carries the whole poem.", a:"Any of the central images will serve: the road that does not thank, the cage, the birch, the drum. Name the image, show where it first appears and where it returns, and say what it has accumulated by the end."},
    {q:"You are given an unseen poem of sixteen lines. Set out, in order, what you would write.", a:"A sentence on the subject; who speaks and to whom; the devices, quoted; where the turn falls and what changes there; the theme as a sentence; and a closing judgement on what the form is doing — no paraphrase of stanzas."}
  ],
  passage:{
    title:"Practice extract — an unseen poem",
    text:"They cut the tree at the corner of the road \nwhere the market women rested in its shade, \nand the shade went too, and the women \nwent with the shade, being old. \n\nThe stump is left for the boys to sit on. \nThey sit there in the heat of the afternoon \nand do not know what was cut, \nwhich is a kind of mercy, \nand a kind of danger. \n\nThe road is wider now. \nCars pass more quickly than they used to. \nNobody is late, and nobody is resting.",
    qs:[
      {q:"Say the subject of the poem in one sentence.", a:"The felling of a roadside tree takes away the place where the market women rested, and with it the rest itself."},
      {q:"‘and the shade went too, and the women / went with the shade, being old’ — what device is at work, and what does it achieve?", a:"The enjambment carries the loss across the line ending so that shade and women are taken in one movement, and the plain statement ‘being old’ refuses to soften it — the two disappearances are made into one fact rather than two."},
      {q:"‘which is a kind of mercy, / and a kind of danger’ — explain the double judgement.", a:"It is mercy that the boys do not know what has been lost, because knowing would make them responsible; it is danger because a generation that does not know what was there cannot object when the next thing is taken. The couplet is the poem's turn."},
      {q:"What is the effect of the last three lines?", a:"They give the gain and the loss in the same breath: the road is wider and the cars are quicker, and the price is that nobody rests. The poem ends on the negative — ‘nobody is resting’ — so the improvement is made to sound like a theft."},
      {q:"State the theme of the poem as one sentence about life.", a:"What a community gains in speed it may lose in the places where its people stop."}
    ]
  },
  write:[
    {p:"Write an essay: ‘The sonnet form is not a cage but a machine.’ Discuss, using Sonnet 18.", guide:"Show how the three quatrains develop an argument and the couplet delivers it. Quote the volta."},
    {p:"Write a poem of sixteen lines or more on a place in your community that has changed, using one recurring image.", guide:"Let the image return three times and mean something different each time. End on a statement, not a moral."},
    {p:"Compare two of the set poems on the subject of service or neglect.", guide:"One paragraph on each poem, one comparing their method, one conclusion. Quote from both."}
  ],
  activities:[
    "Read and appreciate the selected poems aloud",
    "In groups, review and discuss the poetic devices",
    "In groups, discuss the types of poem and the characteristics of the Shakespearean and Petrarchan sonnets",
    "Project: write a short poem of your own and present it to the class"
  ],
  materials:["The Panic of Growing Older by Lenrie Peters","Shall I compare thee to a summer's day? by William Shakespeare","The Dining Table by Gbanabom Hallowell","A Government Driver on his Retirement by Onu Chibuike","The Song of the Women of My Land by Oumar Farouk Sesay","Caged Bird by Maya Angelou","Journey of the Magi by T.S. Eliot","Bats by D.H. Lawrence"],
  assessment:["Quizzes","Class work","Homework","Assignments","Oral presentations","Project"]
}
,
{
  grade:11, period:"IV", sem:"Two", icon:"🎬",
  title:"Non-African Drama",
  subtitle:"Scenes and acts, plot structure, figurative language, cultural values and the literary devices of non-African drama",
  outcomes:[
    "Learners are able to interpret drama scenes and acts and appreciate diversity of values and practices in non-African drama"
  ],
  objectives:[
    "Discuss non-African drama and its elements",
    "Utilize figurative language in non-African drama",
    "Analyze non-African drama by scenes and acts",
    "Appreciate cultural values, practices and their implications in non-African drama"
  ],
  note:"A <b>plot diagram</b> shows the shape of a play: rising action, climax, falling action. A <b>tragic hero</b> is a person of standing brought down by a <b>tragic flaw</b> — in <i>Othello</i>, a readiness to believe.",
  study:[
    /* ---- course text: Semester Two, Period IV — Non-African Drama (guide p. 15) ---- */
    {k:"h3", t:"Drama from Outside Africa"},
    {k:"p", t:"**Non-African drama** comes out of the theatres of Europe and America — of Athens, of Elizabethan London, of the drawing rooms of the eighteenth century, of the modern stage. Its **cultural values** differ from those of African drama: the individual conscience, the private household and the contract between two people carry more of the weight, and the community that judges is smaller. Reading it, ask the same questions, but expect different answers about who owes what to whom."},
    {k:"rule"},
    {k:"h3", t:"Reading a Play by Scenes and Acts"},
    {k:"p", t:"Take a play apart in its own units. An **act** is a large movement, and its end usually changes what is possible. A **scene** changes with the place or the time, and it has one job to do. To analyse a scene, give it a **title** of your own — ‘the scene in which the handkerchief is planted’ — say what it contributes to the plot, and name one device it uses. Then place it on the **plot diagram**: rising action, climax, falling action."},
    {k:"bul", items:[
      "**Rising action** — wants are declared and obstacles set.",
      "**Climax** — the decision or the act after which the ending follows.",
      "**Falling action** — the consequences, usually paid by somebody else.",
      "**Resolution** — the new state of things, and the cost of it."
    ]},
    {k:"rule"},
    {k:"h3", t:"Figurative Language on the Stage"},
    {k:"p", t:"On the stage a figure of speech is spoken, so it is also an **action**. Iago's images of animals and nets do not decorate his speech — they do the work of trapping Othello while the audience watches it happen. **Foreshadowing** warns, **suspense** withholds, **irony** lets the audience know more than the character, and **imagery** gives the play its weather."},
    {k:"p", t:"Set texts for this period: **The Castle of Otranto** by Horace Walpole; **The Proud King** by William Morris; **Native Son** by Richard Wright; **Othello** by William Shakespeare."}
,
    {k:"rule"},
    {k:"h3", t:"Othello on the Plot Diagram, Worked"},
    {k:"p", t:"The plot diagram is the map the non-African drama answer is placed on, and the map is worked on **Othello** — the play the 2016–2020 WASSCE set as its Shakespearean text, and the one this pack's Grade 11 is built on."},
    {k:"num", items:[
      "**Exposition and rising action — Acts I and II.** Othello is established in his standing — the general of Venice, the man who has won the state's trust and Desdemona's love; Iago is established in his grievance, never fully explained, and his method is stated in his first words to the audience: 'I am not what I am.' The rising action is the planting: the suspicion in the council chamber, the handkerchief taken, the storm that brings the island's night — each scene raising the stakes, because each puts Othello one step closer to the certainty.",
      "**The turning — Act III.** The temptation scene: Iago does not accuse; he suggests and withdraws, and Othello supplies the certainty himself. 'O, beware, my lord, of jealousy; / It is the green-eyed monster which doth mock / The meat it feeds on' — the warning against the very thing he is creating, the jealousy given eyes and an appetite, the creature feeding on its victim. After Act III, Othello is committed, and the ending follows — the act ends where what is possible changes, which is the test of the act's end.",
      "**Climax — the bedchamber.** 'Put out the light, and then put out the light' — the repetition with the change of meaning, the candle and the life, the play's whole action compressed into the difference between the two. The murder of Desdemona is the climax, and the audience has watched the certainty being built, so the murder is the paying, not the surprise — the tragedy's end is the paying of what the rising action sowed.",
      "**Falling action — the exposure.** Emilia takes the handkerchief's truth and speaks it at the end, when it can no longer save anybody; Iago's method is named — the 'pestilence' poured into the ear, the language made a physical act — and the denouement exposes the trick and names the cost.",
      "**Resolution — Othello's last speech.** 'I have lost my reputation! I have lost the immortal part of myself, and what remains is bestial' — the metaphor that tells the audience what the play has been arguing: the man who lives by the opinion of the others can be destroyed by a rumour, and Othello names it himself at the moment of his ruin. The tragedy ends in the hero's death, and the death is the hero's as much as the villain's."
    ]},
    {k:"p", t:"The diagram is the answer to 'trace the plot', and the **function of each stage** is the answer to the deeper question: the exposition builds the standing that the fall will cost, the rising action builds the certainty that the murder will spend, and the climax is the paying — the standing and the certainty spent at once. A reference placed on the diagram is a reference the examiner can see, and the seeing is the mark."},
    {k:"table", head:["Point of the test","The requirement","Othello","The reference that proves it"], rows:[
     ["The standing","a person of high standing, from prosperity","the general of Venice, the state's trust, the love won","the senatorial court, and the winning of Desdemona"],
     ["The flaw","a quality in the hero's own nature","the ease with which he is made to believe","the certainty Othello supplies after Iago's suggestion"],
     ["The agent","the force that works on the flaw","Iago — the suspicion supplied, the certainty Othello's","the temptation scene, the silence not filled"],
     ["The fall","the ruin that follows the flaw worked","the murder of Desdemona, the loss of the immortal part","the bedchamber, 'put out the light'"],
     ["The recognition","the naming of what has been done","'I have lost the immortal part of myself'","the last speech, the naming himself"],
     ["The end","death, the tragedy's end","the hero's own death","the denouement, the exposure and the death"]]},
    {k:"p", t:"The checklist is the answer to 'show that Othello is a tragic hero': each point, the requirement, the reference — and the point that separates the **tragedy from the melodrama** is the flaw, because the fall is the hero's as much as the agent's. The melodrama's villain does the falling; the tragedy's hero falls through the villain, and the through is the flaw."},
    {k:"h3", t:"Figurative Language on the Stage, Worked"},
    {k:"p", t:"The unit's point — on the stage a figure is spoken, so it is also an **action** — is worked on Iago's speech. The **imagery of animals and nets** does the work of trapping Othello while the audience watches it happen: the 'green-eyed monster' is the jealousy given eyes and an appetite, and the image tells the audience what is about to happen to the man being warned. The **metaphor of the poison** — 'I'll pour this pestilence into his ear' — makes language a physical act, so the audience understands that Iago is not reporting a suspicion but infecting a man, and the murder begins at the moment of speaking, not at the moment of the deed."},
    {k:"p", t:"The other three of the unit's set: **foreshadowing** warns — the storm before the arrival, the disorder the storm brings to the island and to the marriage; **suspense** withholds — the letter delayed by a scene, the handkerchief the audience has seen planted and Othello has not; and **dramatic irony** gives the audience the advantage — the knowledge that the handkerchief was planted is the audience's, and the advantage is what makes the scene unbearable rather than merely cruel. In the examination, the figure on the stage is named, quoted, and its **action** stated — the work the figure does to the character it is spoken to. The figure that decorates is the candidate's; the figure that acts is the play's, and the question is set on the play's."},
    {k:"h3", t:"The Other Texts of the Period, to Their Points"},
    {k:"p", t:"**The Castle of Otranto** (Horace Walpole) is the **gothic** — the terror, the gloom, the supernatural introduced as a fact of the castle rather than a fear in a character's mind: 'The helmet fell, and the shadow of it covered the court', the object that cannot be explained setting the mood, and Manfred pursued by a curse he cannot interpret. The gothic's device is the unexplained object, and the object is the mood made a thing. **The Proud King** (William Morris) holds the drama's question in the title — the pride that is the king's, and the pride that the king's station gives — and the period's work is to show the pride doing its work on the household, the station's pride and the man's paid for in the same room."},
    {k:"p", t:"And **Native Son** (Richard Wright) is in the set as the prose the drama's questions are asked of: the fear that makes the man, the closed doors, the snow — the imagery that builds the pressure the plot will release. The drama and the prose of the period are the two sides of the same argument — what a society's refusal to see costs — shown on the stage in Othello's certainty and in the prose in Bigger's hand, and the two sides are the range the section will set."},
    {k:"h3", t:"The Liberian Ground: the Context Paper, and Section B"},
    {k:"p", t:"The WASSCE's **Shakespearean text** is the context text of Paper 1 — twenty of the fifty objective questions, testing theme, characterization, style and setting, and no essay set on it. In the 2016–2020 set the prescribed play was **Othello**, and the candidate who has the play to its plot diagram, its tragic hero and its imagery carries the twenty questions with the references already placed. The context question is short — a line or two, the reference woven in — and the shortness is the test: the reference must be the exact one, because the line has no room for the wandering."},
    {k:"p", t:"The **non-African drama essay** is Paper 3, Section B — two questions on each of the prescribed plays, **She Stoops to Conquer** (Goldsmith) and **A Raisin in the Sun** (Hansberry), one answered, in the two hours and a half of the paper. The comedy of manners and the modern domestic are the period's range, and the question will turn on the cultural values each carries — the affectation that keeps the love from the sight, and the dream deferred in the household. The Liberian candidate brings to the section the ear the African drama periods have built, and the ear is what the non-African texts are heard with — the hearing is the reference."},
    {k:"h3", t:"Common Mistakes in This Unit"},
    {k:"bul", items:[
      "Placing the **climax** at Othello's confession rather than at the bedchamber. The climax is the act after which the ending follows — the murder, not the suspicion; the suspicion is the rising action's work, and the murder is the paying.",
      "Calling **Iago a madman** and stopping there. The method is the analysis: the suggestion and the withdrawal, the silence not filled, the certainty the hero supplies himself — the madness is the candidate's word, and the method is the play's.",
      "Forgetting that the **imagery on the stage must be heard**. The figure is spoken, so it is an action — the poison poured, the monster feeding — and the analysis that treats the imagery as decoration has missed the action it does.",
      "Missing the **dramatic irony** of the handkerchief. The audience has seen it planted; Othello has not — the advantage is the audience's, and the scene is unbearable because the audience knows.",
      "Confusing the **denouement** with the **climax**. The denouement is the untying — the exposure of Iago, the truth of Emilia; the climax is the turning; the two are the paying and the naming.",
      "Getting the names wrong — **Othello, Iago, Desdemona, Emilia, Cassio, Manfred**, **Goldsmith, Hansberry, Walpole, Morris** — and the mechanics loss that sits on the reference."
    ]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**The twenty context questions on Othello in Paper 1** — theme, characterization, style or setting, each in a line or two with the exact reference woven in; no essay is set on the Shakespearean text",
      "**The non-African drama essay, Paper 3 Section B** — one of two questions on She Stoops to Conquer or A Raisin in the Sun, in the two hours and a half shared with the other sections",
      "**The plot diagram, placed** — the act and the scene named, the stage of the plot stated, and the function of the stage the reference that proves it",
      "**The tragic hero, by the checklist** — the standing, the flaw, the agent, the fall, the recognition, the end, each with the reference; the flaw the point that makes the tragedy",
      "**A figure on the stage, with its action** — the imagery, the metaphor, the irony, named and quoted, and the work it does to the character who hears it",
      "**The cultural values of the non-African stage** — the individual conscience, the private household, the contract between two people, each with the reference and the work it does in the play"
    ]},  ],
  terms:[
    {t:"act", d:"a large division of a play, ending where what is possible changes", x:"Act III ends with Othello committed to the murder."},
    {t:"scene", d:"a subdivision of an act, changing with place or time", x:"The scene moves from the council chamber to the bedchamber."},
    {t:"plot diagram", d:"the shape of the action: rising, climax, falling", x:"Place the scene on the plot diagram before you analyse it."},
    {t:"tragic hero", d:"a person of high standing brought from prosperity to ruin", x:"Othello is a tragic hero: a general of Venice brought down."},
    {t:"tragic flaw", d:"the quality in the hero's nature that brings the fall", x:"Othello's tragic flaw is the ease with which he is made jealous."},
    {t:"catharsis", d:"the release of pity and fear that tragedy is said to produce", x:"The end of the tragedy leaves the audience spent rather than instructed."},
    {t:"foreshadowing", d:"a hint placed early of what is to come", x:"The storm before the arrival foreshadows the disorder."},
    {t:"suspense", d:"the withholding of what the audience wants to know", x:"Suspense is kept by delaying the letter by one scene."},
    {t:"dramatic irony", d:"irony in which the audience knows more than the character", x:"Dramatic irony: we know the handkerchief was planted and he does not."},
    {t:"gothic", d:"a mode of terror, gloom and the supernatural", x:"The Castle of Otranto is a gothic novel of helmets and vaults."},
    {t:"imagery", d:"language appealing to the senses, carried through a play", x:"The imagery of poison and nets runs through Iago's speech."},
    {t:"denouement", d:"the untying of the plot at the end of a play", x:"The denouement exposes Iago and leaves Othello nothing to say."}
  ],
  quotes:[
    {q:"O, beware, my lord, of jealousy; / It is the green-eyed monster which doth mock / The meat it feeds on.", w:"Othello", dev:"personification and metaphor — jealousy given eyes and an appetite", why:"Iago warns against the very thing he is creating, and the image of a creature feeding on its victim tells the audience what is about to happen to the man being warned."},
    {q:"I'll pour this pestilence into his ear.", w:"Othello", dev:"metaphor — words spoken of as poison poured", why:"The figure makes language a physical act, so the audience understands that Iago is not reporting suspicion but infecting a man, and that the murder begins here."},
    {q:"Put out the light, and then put out the light.", w:"Othello", dev:"repetition with a change of meaning — the candle and the life", why:"The same words mean two things in one line, and the second is forced on the audience by the first: the play's whole action is compressed into the difference between them."},
    {q:"The helmet fell, and the shadow of it covered the court.", w:"The Castle of Otranto", dev:"symbolism and hyperbole — the helmet as an omen", why:"The object that cannot be explained sets the gothic mood: the supernatural is introduced as a fact of the castle rather than as a fear in a character's mind."},
    {q:"I am not what I am.", w:"Othello", dev:"paradox and biblical allusion", why:"Iago states his method in a single contradiction: he will present himself as honest, and the audience is shown the gap between his appearance and his intention from the first line he speaks."}
  ],
  characters:[
    {n:"Othello", w:"Othello", d:"the Venetian general whose standing, love and judgement are taken from him by a man he trusts"},
    {n:"Iago", w:"Othello", d:"the ensign whose grievance is never fully explained and whose method is to let others think they discovered the suspicion themselves"},
    {n:"Desdemona", w:"Othello", d:"Othello's wife, who is faithful, who has no idea what she is accused of, and who forgives him as she dies"},
    {n:"Emilia", w:"Othello", d:"Iago's wife, who takes the handkerchief, and who speaks the truth at the end when it can no longer save anybody"},
    {n:"Manfred", w:"The Castle of Otranto", d:"the prince of Otranto, pursued by a curse he cannot interpret"},
    {n:"Bigger Thomas", w:"Native Son", d:"the young man whose fear carries the novel and whose story is also a story about the making of a criminal"}
  ],
  themes:[
    {t:"A man can be destroyed by what he is made to believe, not by what is true", w:"Othello", ev:"the handkerchief is planted, and Othello's certainty is built on nothing he has seen"},
    {t:"The person who says least is the most dangerous", w:"Othello", ev:"Iago's method is to let others draw the conclusion — ‘I am not what I am’"},
    {t:"Jealousy feeds on the person who feels it", w:"Othello", ev:"‘the green-eyed monster which doth mock / The meat it feeds on’"},
    {t:"A household is the first place a public disaster is paid for", w:"Othello", ev:"the ruin falls on Desdemona and Emilia, who have no part in the quarrel"}
  ],
  facts:[
    {q:"What is a tragic hero, and what brings such a hero down?", a:"A person of high standing brought from prosperity to ruin, and brought down by a flaw in their own nature — pride, jealousy, ambition, or a readiness to believe — rather than by chance alone."},
    {q:"How do you analyse a scene of a play?", a:"Give the scene a title of your own, say what it contributes to the plot, name one device it uses with the words quoted, and then place it on the plot diagram as rising action, climax or falling action."},
    {q:"What is dramatic irony, and why is it at the centre of Othello?", a:"Dramatic irony is the gap between what the audience knows and what the character believes. It is central because the audience watches Iago plant the handkerchief and then watches Othello build a certainty on it — so the play is suspenseful and horrible at once."},
    {q:"Why is a figure of speech on stage also an action?", a:"Because it is spoken by a character to another character for a purpose: Iago's images of nets and poison are doing the trapping, not describing it."},
    {q:"What marks a work as gothic?", a:"Terror, gloom, the supernatural, ancient buildings, curses and omens — as in The Castle of Otranto, where a helmet falls out of the sky and cannot be explained."},
    {q:"Give the four parts of the plot diagram in order.", a:"Rising action (wants declared and obstacles set), climax (the decision after which the ending follows), falling action (the consequences), and resolution (the new state of things)."},
    {q:"How do the cultural values of non-African drama differ from those of African drama?", a:"The private household, the individual conscience and the contract between two people carry more of the weight, and the community that judges the action is smaller — an audience, a household or a court rather than a whole village."}
  ],
  tf:[
    {s:"A tragic hero is brought down by bad luck rather than by a flaw.", a:"false", why:"The fall must follow from what the hero is: Othello's readiness to believe is what Iago works on, and the ruin is made rather than merely met."},
    {s:"Dramatic irony means the audience knows more than the character.", a:"true", why:"That gap is the engine of the suspense, and it is why the audience wants to intervene and cannot."},
    {s:"A scene ends when the act ends.", a:"false", why:"A scene changes with place or time within an act; an act ends where what is possible has changed."},
    {s:"Foreshadowing withholds what the audience wants to know.", a:"false", why:"That is suspense. Foreshadowing points forward to what is to come."},
    {s:"On stage, a figure of speech can be an action as well as a description.", a:"true", why:"A character speaks it to another character for a purpose, so it does something: Iago's images infect Othello as they are spoken."},
    {s:"In non-African drama the community is usually the largest judge of the action.", a:"false", why:"The judging community is usually smaller — a household, a court or an audience. In African drama the village or the community often speaks with one voice."}
  ],
  apply:[
    {q:"‘Iago is a more interesting character than Othello, and the play is worse for it.’ Discuss.", a:"It can be argued: Iago has the energy, the invention and the best lines, while Othello's decline is terrible rather than interesting. But the play needs Othello's stature for the fall to mean anything — a great general destroyed is tragedy, a credulous man deceived is only a sad story — so the imbalance is what makes the tragedy work."},
    {q:"Show how Shakespeare makes the audience watch Othello being trapped rather than merely hear about it.", a:"Iago does not accuse; he suggests and then withdraws, so that Othello supplies the certainty himself. The audience sees the handkerchief planted, sees Iago refuse to explain, and then watches Othello construct the whole case — which is why the scene is unbearable rather than merely unjust."},
    {q:"Place one scene of the set play on the plot diagram and justify where you have put it.", a:"Choose a scene, say whether it declares a want (rising), makes the decisive turn (climax), or shows the consequences (falling), and support the placing by what changes in it and what is possible afterwards."},
    {q:"Compare the treatment of suspicion in Othello and in one African set text.", a:"Name what suspicion is made of in each — in Othello, of nothing at all, deliberately planted; in the African text, usually of a real breach of custom or of a real grievance — and then say what each conclusion tells us about the society the play or novel comes from."}
  ],
  passage:{
    title:"Practice extract — the handkerchief",
    text:"IAGO: Ha! I like not that. \n\nOTHELLO: What dost thou say? \n\nIAGO: Nothing, my lord: or if — I know not what. \n\nOTHELLO: Was not that Cassio parted from my wife? \n\nIAGO: Cassio, my lord? No, sure, I cannot think it, \nthat he would steal away so guilty-like, \nseeing you coming. \n\nOTHELLO: I do believe 'twas he. \n\n[He is silent a moment. Iago does not fill the silence.] \n\nIAGO: Honest, my lord? \n\nOTHELLO: Honest? Ay, honest. \n\nIAGO: My lord, you know my heart. \n\nOTHELLO: I think thou dost; and nothing, of my lord, but this: \nI think my wife be honest, and think she is not; \nI think that thou art just, and think thou art not.",
    qs:[
      {q:"‘Nothing, my lord: or if — I know not what.’ Explain Iago's method in this line.", a:"He denies that he has said anything and at the same time refuses to withdraw what he has implied, so the suspicion is put into the air by somebody who will not own it. The dash is the whole technique: the sentence is left unfinished so that Othello must finish it."},
      {q:"What is the effect of the stage direction ‘He is silent a moment. Iago does not fill the silence’?", a:"It gives the audience the mechanism: Iago's power is in what he refuses to say, and the pause is where Othello does the work himself. The audience is therefore shown the murder being manufactured, not told about it afterwards."},
      {q:"‘Honest, my lord?’ — why is this single word so effective?", a:"Because it repeats the word Othello trusts him by and turns it into a question, so the quality the whole relationship rests on is made uncertain in two syllables without an accusation ever being made."},
      {q:"Comment on the parallel structure of Othello's last speech.", a:"‘I think my wife be honest, and think she is not; / I think that thou art just, and think thou art not’ — the balanced clauses set the two certainties against each other and then cancel them, so the audience hears a mind coming apart in a grammatical shape."},
      {q:"Write one theme of the play supported by this extract, with the evidence for it.", a:"Theme: a man can be destroyed by what he is led to believe rather than by what is true. Evidence: Iago has asserted nothing, and Othello has reached ‘I think she is not’ by himself."}
    ]
  },
  write:[
    {p:"Write an essay: ‘Iago's crime is not that he lies, but that he makes Othello believe he discovered the truth himself.’ Discuss.", guide:"Three references to the temptation scene and one to the end. Answer the objection that Othello is responsible for his own fall."},
    {p:"Write one scene of twenty-five lines or more in which one character plants a suspicion in another's mind without ever making an accusation.", guide:"Use unfinished sentences and pauses. Let the other character supply the conclusion. End on a decision."},
    {p:"Choose one scene of the set play, give it a title of your own, and place it on the plot diagram with reasons.", guide:"One paragraph on the title, one on what it contributes, one on where it falls on the diagram and why."}
  ],
  activities:[
    "Read and summarize the selected non-African drama in parts",
    "Discuss the plot diagram, theme, tragedy, comedy and tragic-comedy in the set play",
    "Outline and discuss the literary devices used by writers in non-African drama",
    "In groups, discuss the implications of the cultural values and practices shown",
    "Write and role-play a short drama in groups"
  ],
  materials:["The Castle of Otranto by Horace Walpole","The Proud King by William Morris","Native Son by Richard Wright","Othello by William Shakespeare","Audio-visual material in DVDs"],
  assessment:["Quizzes","Class work","Homework","Assignments","Oral presentations","Role play"]
},
{
  grade:11, period:"V", sem:"Two", icon:"🎪",
  title:"African Drama and Poetry",
  subtitle:"Exposition, themes and characters of African drama; dramatic forms across cultures; and poetry alongside it",
  outcomes:[
    "Learners are able to use drama to explore, formulate and express ideas, perceptions and feelings"
  ],
  objectives:[
    "Discuss the exposition, themes and characters of selected African drama",
    "Explain the different types of drama",
    "Compare and contrast dramatic forms from different cultures"
  ],
  note:"Drama is written in <b>acts</b> and <b>scenes</b> and is made of <b>characters</b> whose traits and roles carry the plot. Comparing dramatic forms across cultures means asking what each form thinks theatre is <i>for</i>.",
  study:[
    /* ---- course text: Semester Two, Period V — African Drama and Poetry (guide p. 16) ---- */
    {k:"h3", t:"The Exposition of an African Play"},
    {k:"p", t:"The **exposition** of a play supplies what the audience must know before the action can begin. In African drama it often comes by way of a **drum**, a **song**, a **dance** or a **libation** rather than by two servants explaining matters to each other. The **main issues** running through the drama are stated early and in public, with the community present, because the community is the party that will be affected."},
    {k:"rule"},
    {k:"h3", t:"Culture, Values, Norms and their Significance"},
    {k:"p", t:"**Culture** is what a people makes and does; **values** are what they hold good; **norms** are the rules of conduct that follow. A play can show a norm being kept, being broken, or being argued over — and the argument is where the drama lives. In **Harvest of Corruption** the norm is that a public office is held for the public, and the play's whole action is the demonstration of what happens when it is held for a family instead."},
    {k:"rule"},
    {k:"h3", t:"Comparing Dramatic Forms Across Cultures"},
    {k:"p", t:"To **compare** two dramatic forms, take four points and keep them the same for both: who the **audience** is and what it does; how the **story** is told (speech, song, dance, mask, narration); how **time** is handled (straight, broken by flashback, shared with the ancestors); and what the **ending** is held to mean. Greek tragedy ends in the restoration of order after a fall; the Shakespearean comedy ends in marriage and festival; African drama often ends in the restoration of the community and the naming of what was done."},
    {k:"p", t:"Set texts for this period: **Harvest of Corruption** by Frank Ogodo Ogbeche; **The Blood of a Stranger** by Dele Charley; **Ambush** by Gbemisola Adeoti; **The School Boy** by William Blake; **Let Me Die Alone** by John K. Kargbo; **The Lion and the Jewel** by Wole Soyinka."}
,
    {k:"rule"},
    {k:"h3", t:"The Exposition of Harvest of Corruption, Worked"},
    {k:"p", t:"The exposition is worked on **Harvest of Corruption** (Frank Ogodo Ogbeche), so the three things the African opening does can be seen doing them: the community that delivers, the norm that is stated, and the proverb that is the verdict."},
    {k:"num", items:[
      "**The opening, by the community.** The play opens with the women of the town — the chorus given its first office — and the exposition is delivered by the murmur rather than the announcement: 'They took the seed from the store, and the store is the people's.' The exposition states what the audience must know — the office held for the family, the theft done in the dark — and the community is the party that states it, because the community is the party that will be affected.",
      "**The norm, stated early and in public.** The norm the play is about is stated in the opening and argued in the rest: a public office is held for the public. The play's whole action is the demonstration of what happens when the office is held for the family instead — the seed taken from the store, the driver made the instrument of the theft, the official's daughter with the new car. The norm is the exposition's argument, and the argument is the plot.",
      "**The proverb, the verdict before the plot.** 'A harvest sown in the dark is reaped in the light' — the proverb states the play's whole argument in the form the community recognizes, so the audience knows the verdict before the plot delivers it. The exposition has done its work: the audience is not learning what will happen; the audience is learning what it has already decided."
    ]},
    {k:"p", t:"The question 'how does the play open' wants the three, in order: the community that delivers, the norm that is stated, and the proverb that is the verdict — and the function of the opening is the **audience's knowledge**, because the African drama's opening makes the audience a judge before the act is done. The judge made early is the judge who decides, and the decision is the ending the audience has already given."},
    {k:"table", head:["Point","The Greek tragedy","The Shakespearean comedy","The African drama of the set"], rows:[
     ["The audience","the citizens, the spectators of the city","the court, the spectators of the play","the village, the party that answers the actors"],
     ["The story told by","speech, the chorus, the mask","speech and action, the verse and the prose","speech, song, dance, mask, the drum, the libation"],
     ["The time","the straight line, the day of the action","the straight line, the dream's night","the broken line — the flashback, the ancestor on the stage"],
     ["The ending's meaning","the order restored after the fall","the marriage and the festival","the community restored, and what was done named"]]},
    {k:"p", t:"The comparison is worked on the **four points the unit gives**, held the same for both — the audience, the story, the time, the ending — and the point of the comparison is the likeness and the difference, each named in the material. The three forms are told apart by the ending's meaning: the order, the festival, the naming — and the naming is the African drama's office, because the community that judges names what was done, and the naming is the settlement the other two forms do not make."},
    {k:"h3", t:"The Poems and Plays of the Period, to Their Turns"},
    {k:"p", t:"**Ambush** (Gbemisola Adeoti): 'We wait in the tall grass for the road to become a person' — the road spoken of as a person who will arrive, and the waiting is made the action of the poem. The turn is the waiting's cost: the ambush is not the shooting, the ambush is the waiting, and the waiting corrupts the one who waits — the theme, and the theme is the waiting. **The School Boy** (William Blake): the child shut indoors on a summer morning, and the irony of 'O what sweet company!' — the polite word for the bitterness; the turn is the inversion of the proverb — the child is father of the man, and the man is only the child's debtor — what is taken from the child will be owed by the man, so the complaint about schooling becomes the argument about what a society owes its young."},
    {k:"p", t:"**The Blood of a Stranger** (Dele Charley) is the drama of the sacrifice: 'The stranger's blood was asked for, and the stranger's blood was given, and the field is still dry' — the **repetition** measuring the cost against the gain and finding the gain nothing. The play's argument is the uselessness of the sacrifice — the custom that demands the blood, and the field that does not yield — and the repetition is the device that does the measuring: the cost repeated, the dryness repeated, and the nothing between them the theme. **Let Me Die Alone** (John K. Kargbo), the Liberian one-act, holds the period's argument at its smallest scale — the man who has given up the will to live, and the life that comes to him through the one who will not give him up — and the title states the situation, which is the exposition done in three words."},
    {k:"h3", t:"The Liberian Ground: the Paper that Weighs Drama and Poetry"},
    {k:"p", t:"**Paper 3** is the paper that carries the drama and the poetry — four sections, **African Drama, Non-African Drama, African Poetry, Non-African Poetry**, two questions on each of the prescribed texts, and the candidate answers **one from each section** — four questions in the two hours and a half, a hundred marks. The African drama section will set **Harvest of Corruption** and **The Blood of a Stranger** — the two questions on each, one answered — and the argument each carries is the one this period has worked: the harvest sown in the dark, the blood given and the field dry. The candidate who has the one sentence for each play, with the proverb and the repetition, has the section, and the two hours and a half are the time the four sections share."},
    {k:"p", t:"The poetry of the period — **Ambush**, and the poems the African and non-African sections carry — is answered with the same method the Grade 11 periods have built: the subject, the speaker, the device, the turn, the theme. The Liberian candidate brings the ear of the country's own performance — the drum, the libation, the chorus, the answer the audience gives — and the ear is what the African drama is heard with, and the hearing is what the reference is made of."},
    {k:"rule"},
    {k:"h3", t:"Culture, Values and Norms — Worked on the Set Plays"},
    {k:"p", t:"The unit's three words — **culture** is what a people makes and does, **values** are what they hold good, **norms** are the rules of conduct that follow — are worked on the two plays the paper will set, so each word can be seen doing its work in the material rather than defined."},
    {k:"num", items:[
      "**The culture, in the greeting.** In **Harvest of Corruption** the culture is shown in the greetings and the market as much as in the plot: the town that knows the official's daughter has a new car, and the town that says 'let her buy two, the road is long and it is the road that remembers'. The culture is the world the play is set in, and the world is the reference — the play's culture is what the candidate names when the question asks for the setting's social conditions.",
      "**The value, held good.** The value the play holds good is the one it argues for: that a public office is held for the public. The value is what the community holds good, and the holding good is tested by the theft — the seed taken from the store is the value tested, and the test is the plot. In **The Lion and the Jewel** the value is the same in another key: that the jewel of the village belongs to the village, and the value is tested by the magazine and the schoolmaster.",
      "**The norm, kept, broken, or argued.** A play can show a norm being kept, being broken, or being argued over — and the argument is where the drama lives. In Harvest of Corruption the norm is broken in the opening and argued in the rest; in the Jewel the norm is argued in the market and kept in the ending. The question 'what norm does the play break' wants the norm named, the breaking shown, and the argument the play makes with the breaking — and the argument is the theme."
    ]},
    {k:"p", t:"In the examination the three words are the answer's three parts: the culture the world, the value the holding good, the norm the rule — and each part takes its reference from the named play. The significance the question asks for is the argument: what the play shows about the value when the norm is broken, and what the ending settles about the value the community holds."},
    {k:"h3", t:"Satire, the Form the African Drama Takes"},
    {k:"p", t:"**Harvest of Corruption** is a **satire on public theft** — the ridicule to correct — and the satire's shape is the proverb: 'A harvest sown in the dark is reaped in the light' is the verdict the community recognizes, and the recognition is the correction's first step. The satire does not explain the theft; it lets the community name it in the form the community owns, and the naming is the correction. **The Lion and the Jewel** is the **satiric comedy** in its other key: the schoolmaster's pretensions punished by the trick, and the punishment the comedy — the laugh is the correction, and the correction is the ending that puts the village's order back."},
    {k:"p", t:"The satire is told apart from the mere mockery by the correction: the mockery laughs and stops, and the satire laughs and corrects — the target is the public theft, not the official's person; the target is the borrowed modernity, not the schoolmaster's youth. In the examination the question 'is the play a satire' wants the ridicule named, the target named, and the correction the ending makes — and the correction is the argument the play has been making from the opening."},
    {k:"h3", t:"Common Mistakes in This Unit"},
    {k:"bul", items:[
      "**Comparing the forms by listing** each form's features. The comparison is the four points held the same for both — the audience, the story, the time, the ending — and the point is the likeness and the difference named in the material.",
      "Confusing the **libation** with the **sacrifice**. The libation is the offering poured before the business, to the ancestors; the sacrifice is the blood asked for the field — the one is the opening's office, the other is the plot's charge.",
      "Missing that the **chorus speaks for the community**. The chorus is not the background singing; it is the community's opinion given a voice, and the question that asks for the chorus wants the verdict the chorus carries.",
      "Treating **satire** as mockery. The satire is the ridicule to correct — Harvest of Corruption mocks the public theft to correct it, and the correction is the argument, not the laugh.",
      "Confusing the **tragic-comedy** with the **tragedy** because the danger is real. The test is the ending: the threat serious and the end fortunate is the tragic-comedy; the end death is the tragedy — the danger's reality is not the kind's test.",
      "Getting the names wrong — **Ogbeche, Charley, Adeoti, Blake, Kargbo**, the **stranger** of the field — and the mechanics loss that sits on the reference."
    ]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**The African drama essay, Paper 3 Section A** — one of two questions on Harvest of Corruption or The Blood of a Stranger, in the two hours and a half shared with the other sections",
      "**The exposition, with its three** — the community that delivers, the norm that is stated, and the proverb that is the verdict; the function of the opening the audience's knowledge",
      "**A device of the African stage, with its work** — the drum, the libation, the chorus, the mask, the song, each with the example and the effect on the community",
      "**The comparison of the forms, on the four points** — the audience, the story, the time, the ending's meaning, held the same for the two forms, and the likeness and the difference named",
      "**The poems, to their turns** — the subject, the speaker, the device quoted, the turn placed, and the theme as a sentence; the waiting of Ambush and the schooling of The School Boy the two the paper is likeliest to set",
      "**The theme, stated and supported** — the norm broken and the harvest reaped, the blood given and the field dry, each as a sentence with the two references"
    ]},  ],
  terms:[
    {t:"exposition", d:"the opening material that gives the audience what it must know", x:"The exposition is delivered by a drummer rather than by a servant."},
    {t:"libation", d:"the pouring of a drink as an offering to the ancestors", x:"The play opens with a libation before a word of dialogue."},
    {t:"mask", d:"a face covering used in performance to present a spirit or an ancestor", x:"The masked figure speaks for the dead."},
    {t:"norm", d:"a rule of conduct a community expects its members to keep", x:"The norm that a public office serves the public is broken in the play."},
    {t:"culture", d:"what a people makes, does and believes", x:"The play's culture is shown in its greetings as much as its plot."},
    {t:"satire", d:"writing that ridicules folly or vice in order to correct it", x:"Harvest of Corruption is a satire on public theft."},
    {t:"tragic-comedy", d:"a play with real danger that nevertheless ends well", x:"The danger is real and the ending is fortunate: tragic-comedy."},
    {t:"chorus", d:"a group that comments on the action and speaks for the community", x:"The chorus answers the protagonist and speaks for the town."},
    {t:"flashback", d:"a scene showing an event earlier than the main action", x:"A flashback brings the murdered stranger back to the stage."},
    {t:"satiric comedy", d:"comedy that mocks in order to correct", x:"Soyinka's satiric comedy punishes the schoolmaster's pretensions."},
    {t:"denouement", d:"the untying of the plot at the end", x:"The denouement names what was done and who must answer for it."},
    {t:"dramatic form", d:"the shape a theatre tradition gives to a story", x:"Each dramatic form answers differently what a play is for."}
  ],
  quotes:[
    {q:"A harvest sown in the dark is reaped in the light.", w:"Harvest of Corruption", dev:"proverb used as metaphor", why:"The proverb states the play's whole argument — that what is done secretly will be brought into the open — and it does so in a form the community recognises, so the audience knows the verdict before the plot delivers it."},
    {q:"The stranger's blood was asked for, and the stranger's blood was given, and the field is still dry.", w:"The Blood of a Stranger", dev:"repetition and irony", why:"The repeated phrase measures the cost against the gain and finds the gain nothing, so the audience understands that the sacrifice was not only wicked but useless."},
    {q:"We wait in the tall grass for the road to become a person.", w:"Ambush", dev:"metaphor — the road spoken of as a person who will arrive", why:"The comparison makes waiting the action of the poem: the road is not a place but somebody expected, so the reader shares the ambush rather than watching it."},
    {q:"O what sweet company! / But to sit and sigh for the loss of what we had.", w:"The School Boy", dev:"irony — ‘sweet company’ is the opposite of what is meant", why:"Blake's irony attacks a schooling that takes the day from a child, and the reader hears the bitterness under the polite word."},
    {q:"The child is father of the man, and the man is only the child's debtor.", w:"The School Boy", dev:"proverb inverted and metaphor of debt", why:"The proverb is turned into an accusation: what is taken from the child will be owed by the man, so the poem's complaint about schooling becomes an argument about what a society owes its young."}
  ],
  characters:[
    {n:"The corrupt official", w:"Harvest of Corruption", d:"the public officer who treats the office as the family's property and whose harvest the play gathers"},
    {n:"The driver", w:"Harvest of Corruption", d:"the subordinate who is made the instrument of the theft and who is left to answer for it"},
    {n:"The medicine man", w:"The Blood of a Stranger", d:"the figure who asks for the blood and promises that the field will yield"},
    {n:"The stranger", w:"The Blood of a Stranger", d:"the person whose death is demanded for a harvest that never comes"},
    {n:"The school boy", w:"The School Boy", d:"the child shut indoors on a summer morning, whose complaint Blake gives in full"},
    {n:"Sidi", w:"The Lion and the Jewel", d:"the village beauty whose choice settles the contest between custom and change"}
  ],
  themes:[
    {t:"Public theft is committed in private and reaped in public", w:"Harvest of Corruption", ev:"the proverb ‘a harvest sown in the dark is reaped in the light’"},
    {t:"A sacrifice demanded by custom may cost everything and buy nothing", w:"The Blood of a Stranger", ev:"the blood is given and the field is still dry"},
    {t:"A child's freedom is a debt the adult will be asked to pay", w:"The School Boy", ev:"the boy shut in school on a summer morning, and the inversion of the proverb that the child is father of the man"},
    {t:"Waiting is itself an action, and it corrupts the one who waits", w:"Ambush", ev:"the road is spoken of as a person who will arrive, so the waiting becomes the event"}
  ],
  facts:[
    {q:"How is the exposition of an African play often delivered?", a:"Through drumming, song, dance, mime or a libation, with the community present — rather than through two servants explaining matters to each other, as in much European drama."},
    {q:"Distinguish a value from a norm.", a:"A value is what a people holds good; a norm is the rule of conduct that follows from it. A play can show a norm kept, broken or argued over, and the argument is where the drama lives."},
    {q:"Give the four points for comparing dramatic forms across cultures.", a:"Who the audience is and what it does; how the story is told; how time is handled; and what the ending is held to mean."},
    {q:"How do the endings of Greek tragedy, Shakespearean comedy and African drama typically differ?", a:"Greek tragedy ends in the restoration of order after a fall; Shakespearean comedy ends in marriage and festival; African drama often ends in the restoration of the community and the public naming of what was done."},
    {q:"What is satire, and why is it used in African drama?", a:"Satire ridicules folly or vice in order to correct it. It suits public crimes — corruption, abuse of office — because it makes the audience laugh at what they also fear, and the laughter is a form of judgement."},
    {q:"Why is the community often present for the main issues of an African play?", a:"Because the community is the party affected: the issues are stated in public and settled in front of the people who will have to live with the outcome."},
    {q:"What does a flashback do in an African play?", a:"It brings the past — and often the dead — onto the stage, so that the inheritance pressing on the present is shown rather than reported."}
  ],
  tf:[
    {s:"A libation is a speech made by the protagonist before the play begins.", a:"false", why:"A libation is the pouring of a drink as an offering to the ancestors, usually at the opening of a performance."},
    {s:"Satire mocks in order to correct.", a:"true", why:"That is its purpose: to make folly or vice ridiculous so that the audience withdraws its consent from it."},
    {s:"In African drama the main issues are usually settled in private, between two characters.", a:"false", why:"The community is the party affected, so the issues are stated and settled in public."},
    {s:"Greek tragedy typically ends with the restoration of order after a fall.", a:"true", why:"The hero's fall is followed by the re-establishment of the order that was broken, and the audience is left with the cost of it."},
    {s:"A norm is the same thing as a value.", a:"false", why:"A value is what a people holds good; a norm is the rule of conduct that follows from it."},
    {s:"A flashback brings an earlier event onto the stage.", a:"true", why:"It supplies the past that presses on the present, and it may bring the dead into a scene with the living."}
  ],
  apply:[
    {q:"‘Harvest of Corruption punishes the wrong people.’ Discuss, with two references.", a:"It can be argued: the official's family enjoy the money and the driver is left to answer for it, which is the way such thefts work in life. But the play also exposes the whole household to the harvest, so the punishment falls where the guilt is — it is simply slower and less complete than justice would like."},
    {q:"Show how The Blood of a Stranger makes the sacrifice useless as well as wicked.", a:"The blood is asked for, the blood is given, and the field is still dry. By putting the failure last, the play refuses the comfort that the custom worked — so the audience cannot conclude that the evil was at least effective."},
    {q:"Compare the audience's part in Greek tragedy and in African drama.", a:"The Greek audience sits before a chorus that speaks for the city and watches a fall it cannot prevent; the African audience is often addressed, answers, and may be drawn into the dance, so it is a participant rather than a witness. The consequence is that the ending in African drama is frequently a restoration of the community rather than a verdict on an individual."},
    {q:"Blake's The School Boy is a poem, not a play. What does it gain and lose by being a poem rather than a scene?", a:"It gains compression and a single voice that can say the complaint without interruption, and it loses the argument — there is nobody on the page to answer the boy, so the reader must supply the defence of schooling themselves, which is a different and quieter kind of pressure."}
  ],
  passage:{
    title:"Practice extract — the harvest",
    text:"FIRST WOMAN: They took the seed from the store, and the store is the people's. \n\nSECOND WOMAN: Who saw them? \n\nFIRST WOMAN: Nobody saw them. That is why they are bold. \n\nSECOND WOMAN: And the driver? \n\nFIRST WOMAN: The driver carried it, so the driver will hang for it. \n\n[A drum, once, low. The women do not look up.] \n\nSECOND WOMAN: They say the official's daughter has a new car. \n\nFIRST WOMAN: Let her buy two. The road is long, and it is the road that remembers. \n\nSECOND WOMAN: The road has no mouth. \n\nFIRST WOMAN: The road has a harvest. Wait for it.",
    qs:[
      {q:"‘Nobody saw them. That is why they are bold.’ What does this say about the play's view of public crime?", a:"It says that the theft is enabled by secrecy rather than by power alone: the officials are bold because the community has not watched. The play therefore makes looking — and the community's memory — part of justice."},
      {q:"The driver ‘carried it, so the driver will hang for it.’ Explain the irony.", a:"The instrument answers for the theft while those who ordered it and those who enjoy it do not, so the play exposes the mechanism by which public crimes are punished: the smallest person involved is made to stand for the whole."},
      {q:"Why is the drum marked as a stage direction rather than a line of dialogue?", a:"Because it is not spoken by a character but is the sound of the community's knowledge — a judgement already formed before the plot delivers it. The women do not look up because they already know."},
      {q:"Explain the closing exchange: ‘The road has no mouth’ / ‘The road has a harvest. Wait for it.’", a:"The second woman denies that the road can speak, and the first answers that it does not need to: it produces consequences. The exchange carries the play's theme — that what is sown in the dark is reaped in the light — in the form of a proverb rather than a threat."},
      {q:"Write one theme of the play supported by this extract, with the evidence for it.", a:"Theme: what is stolen in secret is paid for in public, and the payment is not fairly distributed. Evidence: ‘The driver carried it, so the driver will hang for it’ and ‘The road has a harvest. Wait for it.’"}
    ]
  },
  write:[
    {p:"Write an essay: ‘The play's title is its argument.’ Discuss, using Harvest of Corruption.", guide:"Three references: the seed, the driver's punishment, and the harvest at the end. Answer the objection that the ending punishes the wrong person."},
    {p:"Compare two dramatic forms you have studied this year on the four points: audience, storytelling, time and ending.", guide:"One paragraph on each point, quoting or describing both forms. Conclude on what each thinks theatre is for."},
    {p:"Write a short play of two scenes in which a community discovers a theft and decides what to do about it.", guide:"Let the community be present in the first scene and let the second be the naming of what was done. Use one proverb."}
  ],
  activities:[
    "Read the selected African drama and share opinions with the class",
    "Outline and discuss the literary terminologies used in the writing of drama",
    "Demonstrate the acts, scenes and characters of drama by acting out the characters' traits",
    "Analyse themes and characters from selected dramas, making connections to self, text and the world"
  ],
  materials:["Harvest of Corruption by Frank Ogodo Ogbeche","The Blood of a Stranger by Dele Charley","Ambush by Gbemisola Adeoti","The School Boy by William Blake","Let Me Die Alone by John K. Kargbo","The Lion and the Jewel by Wole Soyinka","Audio-visual material in DVDs"],
  assessment:["Quizzes","Classwork","Homework","Assignments","Oral presentations"]
},
{
  grade:11, period:"VI", sem:"Two", icon:"🧩",
  title:"African and Non-African Prose, Poetry and Drama",
  subtitle:"Character roles, the techniques of poets, graphic organizers, and composing in all three kinds",
  outcomes:[
    "Learners are able to summarize character roles in a story, use literary devices and write prose, drama and poetry"
  ],
  objectives:[
    "Examine the issues of marriage and faithfulness in the story as well as the treatment of the widow",
    "Analyze the roles of major and minor characters in a story",
    "Describe the techniques used by poets to convey feelings and emotions",
    "Depict character roles using graphic organizers"
  ],
  note:"A <b>graphic organizer</b> — a character web, a plot map, a theme chart — shows relationships that a paragraph hides. Use one to plan an answer, and the answer will have a shape.",
  study:[
    /* ---- course text: Semester Two, Period VI — African and Non-African Prose, Poetry and Drama (guide pp. 17-18) ---- */
    {k:"h3", t:"Major and Minor Characters"},
    {k:"p", t:"A **major character** is one we follow: we are given their wants, their thoughts and their change. A **minor character** exists to serve the plot — to carry a message, to oppose for a scene, to show what the main character might have become. Minor characters are not lesser writing: a well-made one is a whole life seen from outside, in three speeches."},
    {k:"rule"},
    {k:"h3", t:"Marriage, Faithfulness and the Treatment of the Widow"},
    {k:"p", t:"The set texts of this period take up **marriage** and **faithfulness**, the **maltreatment** of a widow and the **loneliness** that follows a death. They also take up **cultural beliefs**, **hostility**, **death** and **widowhood**. In each case the question to ask is the same: who is the duty owed to, and who decides? Where a marriage is a contract between families, faithfulness is not only a private matter; where a widow's mourning is regulated by the community, her grief is not only her own."},
    {k:"rule"},
    {k:"h3", t:"How Poets Convey Feeling"},
    {k:"p", t:"A poet has fewer tools than a novelist and must use them harder. Feeling is carried by **imagery** (what the reader sees and hears), **rhythm and line length** (long lines calm, short ones quicken), **repetition and refrain** (which accumulate), **diction** (a plain word in a grand setting, or the reverse), **symbol** (an object carrying the feeling through the poem), and **the turn** (where the poem changes its mind). A poet rarely names the emotion: the poem is built so that the reader feels it instead."},
    {k:"rule"},
    {k:"h3", t:"Graphic Organizers"},
    {k:"p", t:"Before you write, draw. A **character web** puts the main character in the centre and draws lines to the others, named by the relationship and by what each wants from the centre. A **plot map** draws the five points of the plot. A **theme chart** lists the theme, the evidence and the paragraph that will use it. Two minutes with a pen will save a page of wandering."},
    {k:"p", t:"Set texts for this period: **Lonely Days** by Bayo Adebowale; **She Stoops to Conquer** by Oliver Goldsmith; **Native Son** by Richard Wright; **The Blood of a Stranger** by Dele Charley; **Invisible Man** by Ralph Ellison; **Let Me Die Alone** by John K. Kargbo; and the poems **Piano and Drums**, **The Panic of Growing Older**, **Crossing the Bar** and **Shall I compare thee to a summer's day?**"}
,
    {k:"rule"},
    {k:"h3", t:"The Character Web, Worked on Yaremi"},
    {k:"p", t:"The **character web** is the graphic organizer the unit gives — the main character in the centre, the lines to the others named by the relationship and by what each wants from the centre — and the web is worked on **Yaremi** of *Lonely Days*, so the organizer can be seen planning the answer."},
    {k:"num", items:[
      "**The centre.** Yaremi, the widow — the novel stays inside her days, and the web is drawn from her, because the web is drawn from the character the plot follows.",
      "**The lines, named by the relationship and the want.** The husband's brother — the line named *the duty*, and what he wants from the centre is the keeping of the custom; the co-wives — the line named *the household*, and what they want is the politics of the house kept in its order; the market — the line named *the ban*, and what the market wants of her is the nineteen years she sold pepper in it; the village elders — the line named *the verdict*, and what they want is the question unasked.",
      "**The reading of the web.** The web read is the argument: the widow is surrounded by the duties that are not hers, and the lines are named by the relationship and the want — and the want is the point, because the want is what the novel measures. Two minutes with the pen save the page of wandering, and the web is the shape the answer will have."
    ]},
    {k:"p", t:"The question 'discuss the relationships in the novel' wants the web read — the lines, the wants, and the argument the web shows — and the plan is the answer's shape. A minor character on the web is not a lesser line: the driver of Harvest of Corruption who carries the blame, the co-wives who make the household a politics — the minor character is a whole life seen from outside, in three speeches, and the line is the speech."},
    {k:"h3", t:"How the Poets Convey Feeling, Worked on Piano and Drums"},
    {k:"p", t:"A poet has fewer tools than a novelist and must use them harder, and the tools are worked on **Piano and Drums** (Gabriel Okara), so each can be seen carrying its share of the feeling:"},
    {k:"num", items:[
      "**The imagery.** '…and my blood ripples with the drum, and I am caught in the middle' — the body answers before the mind decides, and the image is the feeling carried: the two inheritances felt in the blood at once, and the ripples the feeling made visible.",
      "**The rhythm and the line length.** The drum's line and the piano's — the short and the long, the native and the borrowed — the rhythm is the argument, and the line length is the two inheritances in the ear before the sense; the long lines calm and the short ones quicken, and the quickening is the drum.",
      "**The repetition and the refrain.** The drum and the piano named again and again through the poem — the accumulation is the feeling, and the refrain's return is the catch that will not let go; the repetition is the feeling made to grow.",
      "**The diction.** 'caught in the middle' — the plain word in the grand subject, and the plainness is what makes the catch felt: the grandeur would have made the catch a figure, and the plain makes it a fact.",
      "**The turn.** The poem's turn is the speaker made the room — 'I am the room they are arguing in' — the argument carried without resolved: he is not the judge of the two inheritances, he is the place where they meet, and the truer account is the room, not the verdict."
    ]},
    {k:"p", t:"Five tools, one poem, and the feeling is never named — the poem is built so the reader feels it instead. The question 'how does the poet convey the feeling' wants the tools named, quoted, and the effect of each — the tool is the quotation, and the quotation is the mark, and the effect is the one sentence that keeps it."},
    {k:"table", head:["Kind","The set text of this period","The one sentence","The device that carries it"], rows:[
     ["Prose","Lonely Days","the duty called by the village the punishment felt by the widow","the paradox — 'a widow twice'"],
     ["Prose","Native Son","the fear that makes the man before the law does","the imagery — the cold, the snow, the closed doors"],
     ["Drama","She Stoops to Conquer","the affectation that keeps the love from the sight","the irony — the servant who is the lady"],
     ["Drama","The Blood of a Stranger","the sacrifice that costs everything and buys nothing","the repetition — the blood given, the field dry"],
     ["Poetry","Piano and Drums","the two inheritances felt in the blood at once","the metaphor — the room the argument is in"],
     ["Poetry","Crossing the Bar","the death met as a crossing rather than a defeat","the symbol — the bar, the evening, the call"]]},
    {k:"p", t:"The table is the period's review in one: each kind, the text, the sentence, the device — and the candidate who can read the table without the book open has the three kinds to their arguments, which is the state the WASSCE will demand. The three kinds are the candidate's whole, and the whole is the one day the papers are set in."},
    {k:"h3", t:"The Liberian Ground: the Three Kinds in One Sitting"},
    {k:"p", t:"The WASSCE's candidate meets the three kinds in one sitting: **Paper 2** carries the prose — the African section on Faceless and Lonely Days, the non-African on Native Son and The Last Goodman, one essay from each, the hour and a quarter, fifty marks; **Paper 3** carries the drama and the poetry — the four sections, one question each, the two hours and a half, a hundred marks. The three kinds are the papers' matter, and the candidate's preparation is the three kinds to their one sentences — the prose's argument, the drama's stage, the poetry's turn — with the device and the reference for each."},
    {k:"p", t:"The composition question — the **form to fit the material** — is the period's test of the choosing: the story that needs the inside of a mind is the prose, the moment held still and made to mean is the poem, the decision made in front of witnesses is the drama. The Liberian candidate who has the one sentence for each kind can choose the form the question sets, and the choosing is the last skill the three grades have built — the prose's argument, the drama's stage, the poem's turn, and the form that fits the material."},
    {k:"rule"},
    {k:"h3", t:"Marriage, Faithfulness and the Widow — the Question Worked"},
    {k:"p", t:"The unit's section takes up **marriage and faithfulness**, the **maltreatment of the widow**, the **loneliness** that follows a death, and the **cultural beliefs** that regulate them all — and each takes up the same question: **who is the duty owed to, and who decides?** Worked on the set texts of the period, so the question can be seen doing its work in the material."},
    {k:"num", items:[
      "**Marriage, in She Stoops to Conquer.** The marriage is a contract between the families as much as between the two, and the faithfulness is not only the private matter: Marlow's ease with the woman he believes a servant, and Kate's stooping to be loved for herself, are the contract's two failures — the contract made with the class, and the faithfulness owed to the person. The question's answer: the duty is owed to the person, and the class decides — and the play's argument is that the deciding is the affectation, and the affectation is the obstacle the love has to pass.",
      "**The widow, in Lonely Days.** The widow's mourning is regulated by the community, and her grief is not only her own: the duty is owed to the dead and to the custom, and the community decides. The question's answer: the duty is owed to the widow, and the community decides — and the novel's argument is the gap between the owed and the decided, the two sufferings the widow suffers, the death and the treatment of the death.",
      "**The loneliness, in the two.** The loneliness of Lonely Days is not solitude but exclusion — the market two streets away, the ban for six moons, the question unasked; and the loneliness of She Stoops is the other side — the person who cannot be seen through the class, the love that passes by the person to the affectation. The question's answer: the loneliness is the duty unowed, and the unowing is the community's in the novel and the class's in the play — and the unowing is what the reader is left holding."
    ]},
    {k:"p", t:"In the examination the three are the period's range, and the question is the one that sets them: who is the duty owed to, and who decides. The answer names the owed, names the decider, gives the reference, and says what the work settles — and the settling is the theme, and the theme is the sentence the references defend."},
    {k:"h3", t:"The Three Kinds, the Reference for Each"},
    {k:"p", t:"The period's set is the three kinds in one — the prose, the poetry, the drama — and each kind carries its argument in the one sentence the unit has worked: **the prose** in Lonely Days, Native Son and the Invisible Man — the duty and the punishment, the fear that makes the man, the invisibility the social fact; **the poetry** in Piano and Drums, The Panic of Growing Older, Crossing the Bar and Shall I compare thee to a summer's day? — the two inheritances, the years eaten, the crossing rather than the defeat, the art that preserves; **the drama** in She Stoops to Conquer and The Blood of a Stranger — the affectation that keeps the love from the sight, the sacrifice that costs everything and buys nothing. The candidate who has the one sentence for each text, with the device and the reference, has the period's whole — and the whole is what the two papers will set."},
    {k:"h3", t:"Common Mistakes in This Unit"},
    {k:"bul", items:[
      "Calling a **minor character** unimportant. The minor character is a whole life seen from outside, in three speeches — the driver who carries the blame, the co-wives who make the household a politics — and the importance is the function, not the length.",
      "Drawing a **character web** with the lines unnamed. The line is named by the relationship and by the want — the duty, the household, the ban, the verdict — and the line without the want is the diagram without the argument.",
      "Naming the **poet's emotion** where the question asks for the feeling conveyed. The poem does not name the emotion; it is built so the reader feels it — the image, the rhythm, the refrain, the diction, the turn, and the tool is the quotation.",
      "Missing the **turn** in the period's poems. The turn is the conclusion carried without resolved — the room the argument is in, the crossing rather than the defeat — and the poem without its turn is the feeling without its shape.",
      "Writing the **marriage and the widowhood** without the question. The question is who is the duty owed to, and who decides — the marriage the contract between the families, the widowhood the regulation by the community — and the question is the argument.",
      "Getting the names wrong — **Yaremi, the co-wives, Bigger, Bessie, Kate Hardcastle, Marlow**, the **narrator of the Invisible Man** — and the mechanics loss that sits on the reference."
    ]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**The prose essays, Paper 2** — one from the African section, one from the non-African, the hour and a quarter, fifty marks; the one sentence for each text, with the device and the reference",
      "**The drama and the poetry, Paper 3** — the four sections, one question each, the two hours and a half, a hundred marks; the form named, the device quoted, the turn placed",
      "**A character, major or minor, by the web** — the centre, the lines named by the relationship and the want, and the argument the web shows",
      "**The poet's technique, with the tools** — the imagery, the rhythm, the refrain, the diction, the symbol, the turn, each named and quoted on the named poem",
      "**The theme, with the society's question** — the duty and the punishment, the faithfulness owed to the living, the loneliness that is the exclusion, each as a sentence with the reference",
      "**The composition, the form to the material** — the inside the prose, the moment the poem, the decision before witnesses the drama; the form chosen, and the devices of the form used deliberately"
    ]},  ],
  terms:[
    {t:"major character", d:"a character we follow: given wants, thoughts and change", x:"Yaremi is a major character: the novel stays inside her days."},
    {t:"minor character", d:"a character who serves the plot in a few appearances", x:"The driver is a minor character and is made to carry the whole blame."},
    {t:"character web", d:"a diagram putting the main character at the centre with lines to the others", x:"Draw a character web before writing about relationships."},
    {t:"plot map", d:"a diagram of the five points of the plot", x:"The plot map shows how quickly the climax arrives."},
    {t:"faithfulness", d:"keeping faith with a person or a promise", x:"The novel asks what faithfulness is owed to a husband who is dead."},
    {t:"widowhood", d:"the condition and rites imposed on a woman whose husband has died", x:"Widowhood is regulated in the novel by people who are not grieving."},
    {t:"maltreatment", d:"cruel or unfair treatment of a person", x:"The maltreatment of the widow is carried out as a duty."},
    {t:"loneliness", d:"the condition of being without company, and the grief of it", x:"The loneliness of the novel is not solitude but exclusion."},
    {t:"refrain", d:"a line or phrase repeated through a poem", x:"The refrain carries the feeling further each time it returns."},
    {t:"diction", d:"the poet's choice of words", x:"The plain diction of the last line lands harder than any grandeur."},
    {t:"tone", d:"the attitude of the voice in the poem", x:"The tone is tender where the subject is harsh."},
    {t:"flashback", d:"the bringing of an earlier event into the story", x:"A flashback shows the marriage before it soured."}
  ],
  quotes:[
    {q:"She had been a wife for twenty-two years and a widow for eleven days, and the second was longer.", w:"Lonely Days", dev:"paradox — a shorter period is called longer", why:"The paradox measures time by weight rather than by the clock, so the reader is given the widowhood as an experience rather than a duration."},
    {q:"The house remembered him in the way a house does: the door, the chair, the place where he had stood.", w:"Lonely Days", dev:"personification — the house is given a memory", why:"The grief is put into the objects rather than into a description of feeling, which is how the novel makes the loss ordinary and unbearable at once."},
    {q:"I have been a widow twice: once when he died, and once when they told me what to do about it.", w:"Lonely Days", dev:"repetition with a turn — the second widowhood is made by the community", why:"The line states the novel's charge in a single sentence: the loss and the treatment of the loss are two separate bereavements."},
    {q:"I am a man, and I have my pride; and my pride is the only thing in this room that belongs to me.", w:"Native Son", dev:"metaphor — pride spoken of as property", why:"The comparison says what the novel has been demonstrating: that everything else in his life is held by somebody else, and ownership of a feeling is all that is left."},
    {q:"The drum says one thing and the piano says another, and I am the room they are arguing in.", w:"Piano and Drums", dev:"extended metaphor — the poet is the room in which the argument happens", why:"It carries the poem's conclusion without resolving it: he is not the judge of the two inheritances but the place where they meet, which is a truer account of what it is to be formed by both."}
  ],
  characters:[
    {n:"Yaremi", w:"Lonely Days", d:"the widow whose days the novel follows and whose exclusion is the argument"},
    {n:"The co-wives", w:"Lonely Days", d:"minor characters who make the household a politics and who are themselves subject to it"},
    {n:"Bigger Thomas", w:"Native Son", d:"the major character whose fear the novel makes the reader share"},
    {n:"Bessie", w:"Native Son", d:"a minor character by the length of her part and a major one by what she suffers"},
    {n:"Kate Hardcastle", w:"She Stoops to Conquer", d:"the young woman who lowers herself in order to be loved for herself"},
    {n:"The narrator", w:"Invisible Man", d:"the unnamed speaker who tells his own story from underground"}
  ],
  themes:[
    {t:"A widow suffers the death and then the treatment of the death", w:"Lonely Days", ev:"‘I have been a widow twice: once when he died, and once when they told me what to do about it’"},
    {t:"What a person owns of themselves may be only a feeling", w:"Native Son", ev:"pride spoken of as the only thing in the room that belongs to him"},
    {t:"Two inheritances argue inside one person", w:"Piano and Drums", ev:"‘I am the room they are arguing in’"},
    {t:"Faithfulness is owed to the living and not only to the dead", w:"Lonely Days", ev:"the rites of mourning are imposed on the widow by people who are not grieving"}
  ],
  facts:[
    {q:"Distinguish a major from a minor character.", a:"A major character is one we follow, given wants, thoughts and change. A minor character serves the plot in a few appearances — carrying a message, opposing for a scene, or showing what the main character might have become."},
    {q:"How does a graphic organizer improve an essay?", a:"It shows relationships a paragraph hides. A character web shows what each person wants from the centre; a plot map shows where the climax falls; a theme chart lists theme, evidence and the paragraph that uses it — so the answer has a shape before it is written."},
    {q:"Name six ways a poet conveys feeling.", a:"Imagery, rhythm and line length, repetition and refrain, diction, symbol, and the turn where the poem changes direction."},
    {q:"Why does a poet rarely name the emotion?", a:"Because naming it tells the reader what to feel; building the poem out of image, rhythm and turn makes the reader feel it, which is stronger and lasts longer."},
    {q:"What question should you ask of any set text that deals with marriage or widowhood?", a:"Who is the duty owed to, and who decides? Where marriage is a contract between families, faithfulness is not only a private matter; where mourning is regulated by the community, grief is not only the mourner's."},
    {q:"What makes a minor character well written?", a:"A whole life seen from outside in a few speeches: a want, a manner of speaking, and one action that costs them something."},
    {q:"How does a flashback help a writer of prose?", a:"It brings the past into the present of the story, so that what presses on the characters is shown rather than reported — which is why it suits novels about inheritance, marriage and guilt."}
  ],
  tf:[
    {s:"A minor character is a badly written character.", a:"false", why:"Minor means serving the plot rather than being followed; a well-made minor character is a whole life seen from outside in a few speeches."},
    {s:"A poet usually names the emotion the poem is about.", a:"false", why:"Naming tells the reader what to feel; the poem is built from image, rhythm and turn so that the reader feels it instead."},
    {s:"A refrain accumulates meaning with each return.", a:"true", why:"Each return carries a heavier weight than the last, so the poem builds rather than repeats."},
    {s:"A character web shows the order of events in a story.", a:"false", why:"That is a plot map. A character web shows relationships and what each person wants from the centre."},
    {s:"Short lines tend to quicken the reading of a poem.", a:"true", why:"Short lines give the eye and the breath less to carry, so the poem moves faster — one of the ways rhythm carries feeling."},
    {s:"In a novel about widowhood the grief is always the widow's private matter.", a:"false", why:"In the set texts the mourning is regulated by the community, so the grief is public property and the widow's own wishes are rarely asked for."}
  ],
  apply:[
    {q:"‘Yaremi is widowed twice, and the second widowhood is the novel's subject.’ Discuss, with two references.", a:"The first widowhood is the death; the second is the regulation of her — the shaving, the exclusion from the market, the six moons — carried out by relatives who intend kindness. The novel's subject is the second, because the first is a fact of life and the second is a fact of a society, and only one of them can be changed."},
    {q:"Choose one minor character from the set texts and show how much the writer does with a small part.", a:"Take Bessie in Native Son: she is given a room, a fear, a loyalty and a death, and her function is to show what Bigger does with the only power he has. The novel gives her enough life that her death is a murder rather than a plot device."},
    {q:"Draw the plan of an essay using a theme chart, then write the first paragraph.", a:"List three themes, the evidence for each, and the paragraph that will use it; then write an opening that states the argument of the whole essay rather than describing the book."},
    {q:"How does the poet of Piano and Drums avoid choosing between the drum and the piano, and why is that the honest ending?", a:"The poem ends by making the speaker the place where the two argue rather than the judge of them, because a person formed by both inheritances cannot choose one without losing part of himself. To resolve it would be to falsify the experience the poem is describing."}
  ],
  passage:{
    title:"Practice extract — the eleventh day",
    text:"On the eleventh day they brought her food, which was kind, and stood while she ate it, which was not. \n\n‘The cloth comes off in six moons,’ they said, and she counted: six moons is a season, and a season is how long the yam takes. \n\nShe had planted yam for nineteen years. \n\n‘If I plant now,’ she said, and then stopped, because she had learned, in eleven days, which sentences finish themselves in other people's mouths. \n\nThe eldest of them said, gently, ‘You are not to think of planting now. You are to think of him.’ \n\nAnd she did think of him. She thought of him for six moons, while the field she had planted for nineteen years went back to grass.",
    qs:[
      {q:"‘They brought her food, which was kind, and stood while she ate it, which was not.’ Explain the contrast and what it reveals.", a:"The first half of the sentence acknowledges the kindness; the second names the supervision that comes with it. The balanced structure lets the reader see that the care and the control arrive together, which is the novel's whole account of how the widow is treated."},
      {q:"Why does she measure six moons against the yam season?", a:"Because a yam season is the measure of her working life — she has planted for nineteen years — so the sentence turns an abstract period of mourning into a concrete loss of a crop. The comparison is her own, and it is the one the visitors cannot hear."},
      {q:"‘which sentences finish themselves in other people's mouths’ — what does this tell the reader about the eleven days?", a:"That she has learned, quickly and completely, who is permitted to finish a thought. It is a small piece of education and it is the whole of her condition: the novel shows her being taught silence rather than being forbidden to speak."},
      {q:"Comment on the last sentence of the extract.", a:"It gives the outcome without a word of protest: she thinks of him for six moons, as instructed, and the field she planted for nineteen years goes back to grass. The cost is placed at the end, in a plain clause, and the absence of complaint is what makes it an accusation."},
      {q:"Write one theme of the novel supported by this extract, with the evidence for it.", a:"Theme: a community's care for a widow is arranged around its own rules and not around her life. Evidence: ‘You are not to think of planting now. You are to think of him’ and the field ‘went back to grass’."}
    ]
  },
  write:[
    {p:"Write an essay: ‘The novel's subject is not the death but the rules that follow it.’ Discuss.", guide:"Three references to the rites. Separate intention from effect. End on what the novel asks the reader to judge."},
    {p:"Write a poem of twenty lines or more in which a person is given instructions they must not question.", guide:"Use repetition of the instruction. Let one concrete image — a field, a door, a cloth — carry what is being lost."},
    {p:"Write a short play scene in which a minor character is given one want, one manner of speech and one action that costs them something.", guide:"Twenty-five lines or more. Do not let the character explain themselves."}
  ],
  activities:[
    "Read selected non-African prose, drama and poetry in parts",
    "Class discussion on the various themes of the set texts",
    "In groups, develop graphic organizers to depict character roles",
    "In pairs, write short stories, plays and poems"
  ],
  materials:["Lonely Days by Bayo Adebowale","She Stoops to Conquer by Oliver Goldsmith","Native Son by Richard Wright","The Blood of a Stranger by Dele Charley","Invisible Man by Ralph Ellison","Let Me Die Alone by John K. Kargbo","Piano and Drums by Gabriel Okara","The Panic of Growing Older by Lenrie Peters","Crossing the Bar by Alfred Tennyson","Sonnet 18 by William Shakespeare","Citizen ID Card by Lekpele M. Nyamalon"],
  assessment:["Quizzes","Class work","Homework","Assignments"]
}
,

/* ================================ GRADE 12 ================================ */
{
  grade:12, period:"I", sem:"One", icon:"🌅",
  title:"Review: African Poems and Figurative Expressions",
  subtitle:"Subject matter, tone, atmosphere, mood, literary devices and the relevance of a poem to society",
  outcomes:[
    "Learners are able to formulate, express ideas, perceptions and feelings through poems"
  ],
  objectives:[
    "Analyze a poem based on theme, form, tone, mood, literary devices, cultural and societal relevance",
    "Create short poems using different themes",
    "Utilize figurative expressions in poems"
  ],
  note:"<b>Subject matter</b> is what the poem is about; <b>tone</b> is the voice's attitude; <b>atmosphere</b> is the feeling the poem's world has; <b>mood</b> is what the reader is left with. Keep the four apart and the analysis looks after itself.",
  study:[
    /* ---- course text: Semester One, Period I — African poems and figurative expressions (guide p. 19) ---- */
    {k:"h3", t:"The Four Things to Keep Apart"},
    {k:"p", t:"Candidates lose marks by confusing these four. The **subject matter** is what the poem is about — a retirement, a continent, a woman at a mirror. The **tone** is the attitude of the voice — tender, angry, ironic, resigned. The **atmosphere** is the feeling the world of the poem has — a hot room, a bare yard, a road at dusk. The **mood** is what the reader is left with. A poem may be about a retirement (subject), speak in a flat, ironic voice (tone), present a bare office and an unthanked road (atmosphere), and leave the reader indignant (mood)."},
    {k:"rule"},
    {k:"h3", t:"The Form of a Poem"},
    {k:"p", t:"**Form** is the shape the poem is given: the **stanza** pattern, the **rhyme** scheme, the **rhythm**, the presence of a **refrain**, and whether it is a **sonnet**, a **ballad**, an **elegy** or **free verse**. Form is never decoration: a sonnet argues, a ballad tells, an elegy mourns, and free verse gives up the regular beat in order to sound like a person thinking."},
    {k:"rule"},
    {k:"h3", t:"Relevance to Society"},
    {k:"p", t:"When you are asked for a poem's **relevance to society**, do not praise it: say what in the world outside the poem it bears on. A Government Driver on his Retirement bears on how a country treats its public servants and its old people. Black Woman bears on what has been said about African women and by whom. Say what the poem shows and what it asks to be changed."},
    {k:"p", t:"Set texts for this period: **The Panic of Growing Older** by Lenrie Peters; **Vanity** by Birago Diop; **The Anvil and the Hammer** by Kofi Awoonor; **Piano and Drums** by Gabriel Okara; **The Dining Table** by Gbanabom Hallowell; **Ambush** by Gbemisola Adeoti; **Black Woman** by Léopold Sédar Senghor; **A Government Driver on his Retirement** by Onu Chibuike."}
,
    {k:"rule"},
    {k:"h3", t:"The Four, Worked on the Government Driver"},
    {k:"p", t:"The unit's four things — subject matter, tone, atmosphere, mood — are kept apart by one question each, and the keeping apart is worked in full on **A Government Driver on his Retirement** (Onu Chibuike), so the distinction can be seen doing its work rather than defined."},
    {k:"num", items:[
      "**The subject matter — what the poem is about.** A government driver retires after thirty years of service, and the letter says: retired — the subject is the retirement, and the retirement is the life of service answered with a clause. The subject is the what, and the what is the driver's last road.",
      "**The tone — the attitude of the voice.** The voice is flat, and the flatness is the anger: 'Thirty years of service and the letter says: retired' — the flatness of the official language set against the life, and the disproportion is the tone. The tone is not stated; it is the flatness, and the flatness is the **understatement** that makes the anger felt rather than told.",
      "**The atmosphere — the feeling the world of the poem has.** The bare office, the unthanked road, the lorry that goes past with another man at the wheel and does not slow — the world of the poem is the world of the nothing, the office the colour of nothing, and the atmosphere is the bareness the service has left when the service is done.",
      "**The mood — what the reader is left with.** Indignation — the reader is left with the anger that is not the speaker's voice but the reader's judgement, and the mood is the disproportion felt: the life against the clause, the thirty years against the word retired."
    ]},
    {k:"p", t:"The four, kept apart, on one poem — and the poem is the one the period's set gives, so the distinction is not the definition but the work. The question that sets one of the four wants that one, answered by the making — the flatness, the bare office, the disproportion — not by the word alone. The word alone is the answer's absence, and the making is the mark."},
    {k:"table", head:["The poem of the set","The subject","The tone","The atmosphere","The mood left"], rows:[
     ["A Government Driver on his Retirement","the service answered with a clause","flat — the flatness the anger","the bare office, the unthanked road","indignation"],
     ["Black Woman","the woman praised in the praise-song","the praise, the apostrophe's warmth","the colour made the clothing","the pride the gaze is turned"],
     ["The Anvil and the Hammer","the making done by things that do not know","the proverb's flatness","the forge, the work, the making","the wonder of the making's ignorance"],
     ["Piano and Drums","the two inheritances in the blood","the catch, the plainness","the room the argument is in","the middle, the unresolvable"]]},
    {k:"p", t:"The table is the review in one: each poem, the four kept apart in its row — and the candidate who can read the row without the book open has the four on the poem, which is the state the distinction question will find. The column is the answer, and the poem is the reference, and the reference is the quotation the column carries."},
    {k:"h3", t:"The Form of a Poem, Named with Its Numbers"},
    {k:"p", t:"**Form** is the shape the poem is given — the stanza pattern, the rhyme scheme, the rhythm, the presence of a refrain, and the type: the sonnet, the ballad, the elegy, the free verse. Worked on the set: **Do Not Go Gentle into That Good Night** is the **villanelle** — nineteen lines, two refrains, two rhymes, the refrains returning four times and closing the poem, and the form is the argument, because the plea that cannot be answered is the villanelle's shape: the repetition accumulates rather than develops, which is what a plea to a dying man would sound like. **Black Woman** (L.S. Senghor) is the **praise-song** — the African convention rather than the European lyric, the apostrophe and the praise, 'Praise be to you, my father's sister, / who made me a man among men', and the form itself is part of the argument about who is addressed and in whose language."},
    {k:"p", t:"**The Panic of Growing Older** (Lenrie Peters) and the driver's poem are the **free verse** — the regular beat given up in order to sound like a person thinking, and the line lengths follow the thought. The form is never decoration: a sonnet argues, a ballad tells, an elegy mourns, and free verse gives up the regular beat to sound like the thinking. The question 'what is the form of the poem' wants the type with its numbers — the villanelle's nineteen and its refrains, the sonnet's fourteen and its couplet — and the number is the name, and the name is the mark."},
    {k:"h3", t:"Relevance to Society, the Answer the Paper Asks"},
    {k:"p", t:"The unit's warning — do not praise it — is worked on the two poems the period is likeliest to set. **A Government Driver on his Retirement** bears on how a country treats its public servants and its old people: the showing is the thirty years against the clause, the unthanked road, the lorry that does not slow; and the asking is the change — the country that retires its servants with a clause is the country the poem is asking to see. **Black Woman** bears on what has been said about African women and by whom: the showing is the nakedness made the clothing, the colour made the life — 'Naked woman, black woman / Clothed with your colour which is life, from your form which is beauty'; and the asking is the gaze turned — the colonial gaze that saw the absence answered by the praise that names the presence."},
    {k:"p", t:"The answer has two parts, and the two are the **showing and the asking**: what the poem shows, and what it asks to be changed. The praise is the loss — the candidate who praises the poem has not answered the question, and the question is the society, not the poem. The Liberian candidate brings the society the driver's road is in, and the reference is the country's own, and the country is the ground the answer stands on."},
    {k:"h3", t:"The Liberian Ground: the General Knowledge, the Twenty Questions"},
    {k:"p", t:"**Paper 1** carries twenty questions on the **general knowledge of literature** — the definitions with the examples: the villanelle and its nineteen lines and its two refrains, the refrain and its return, the elegy and its mourning, the apostrophe and its address, the persona and its voice, the envoi and its closing stanza. The twenty questions are the year's definitions, and the definition is the name with its number and its example — the number the villanelle's, the example the refrain's return. The Liberian candidate carries the twenty with the year's drill: the definition, the number, the example — and the example is the set poem that carries it."},
    {k:"p", t:"The poems of the period are the general knowledge's examples: the villanelle in Dylan Thomas, the praise-song in Senghor, the free verse in the driver's poem and in the panic of growing older — and the example is the set poem, so the general knowledge is the set poems read for their form. The candidate who has the form for each set poem has the twenty questions with the examples already placed, and the placed example is the reference that is exact."},
    {k:"rule"},
    {k:"h3", t:"The Free Verse, Worked on Two of the Set"},
    {k:"p", t:"The unit's list of forms is worked on the two poems of the set that are **free verse**, so the form can be seen doing its work — the regular beat given up in order to sound like a person thinking, and the line lengths following the thought rather than the metre."},
    {k:"num", items:[
      "**The Panic of Growing Older (Lenrie Peters).** The free verse here is the measurement: 'They have eaten the years and left me the calendar' — the metaphor is the years spoken of as food eaten, and what is left of the working life is the counting of it. The line lengths follow the counting — the short line that lands the calendar, and the calendar the panic's object. The free verse gives up the beat to sound like the counting itself, and the counting is the panic: not the fear of death, but the fear of having been consumed while still alive.",
      "**The Anvil and the Hammer (Kofi Awoonor).** 'The anvil does not know it is making the blade; / the hammer does not know it is making the song' — the **personification** gives the two instruments ignorance, and the proverb-shaped metaphor is the argument: the work of making — a person, a nation — is done by things that do not know what they are producing. The free verse here is the proverb's flatness: the line does not rise to the argument, because the argument is the flatness — the making stated as the fact it is, and the fact is the wonder."
    ]},
    {k:"p", t:"The free verse is told apart from the metre by the **beat**: the sonnet's ten syllables and the villanelle's line hold the thought to the form, and the free verse gives the form to the thought — the line length is the thought's length, and the thought's length is the argument's. In the examination the question 'what is the form' wants the type named — the free verse — and the work the form does: the counting that sounds like counting, the proverb that sounds like fact. The form is never decoration, and the free verse's work is the sounding like the thinking."},
    {k:"h3", t:"The Praise-Song, the Form the Argument Is Made Of"},
    {k:"p", t:"**Black Woman** (L.S. Senghor) is the **praise-song** — the African convention rather than the European lyric, and the form is the argument: the apostrophe addresses the woman directly, 'Naked woman, black woman / Clothed with your colour which is life, from your form which is beauty', and the address is the praise — the form in which the continent speaks of itself, not the form in which the continent is spoken of. The paradox of the opening — naked and clothed at once — is the argument in the praise's shape: the contradiction praises rather than confuses, because she is naked and yet clothed by her own colour, and the colour is the life."},
    {k:"p", t:"The praise-song is told apart from the lyric by the **address**: the lyric speaks of, and the praise speaks to — 'Praise be to you, my father's sister, / who made me a man among men' is the address to the aunt who made the man, and the address is the form's work. In the examination the question 'what is the form' wants the praise-song named, the apostrophe the device that carries it, and the argument the form makes — the gaze turned, the absence named the presence, and the naming the praise."},
    {k:"h3", t:"Common Mistakes in This Unit"},
    {k:"bul", items:[
      "**The four-way confusion** — the subject for the tone, the tone for the mood, the atmosphere for the setting. The four are kept apart by the ownership: the reader's, the writer's, the world's, the fact's — and the question wants the one that was set.",
      "**Praising the poem** where the question asks for the relevance. The relevance is the showing and the asking — what the poem shows, and what it asks to be changed — and the praise is the question's absence.",
      "Missing the **form's numbers**. The villanelle's nineteen and its refrains, the sonnet's fourteen and its couplet — the number is the name, and the name without the number is the form lost.",
      "Confusing the **persona** with the poet. The persona is the voice the poem adopts — the retired driver, the speaker of the plea — and the poet is the person; the question is the voice, and the voice is the poem's, not the person's.",
      "Stating the **mood** without the making. The mood is what the reader is left with, and the left-with is the making — the flatness, the bare office, the disproportion — and the word alone is the absence.",
      "Getting the names wrong — **Onu Chibuike, Senghor, Peters, Awoonor, Okara, Hallowell, Adeoti, Thomas** — and the mechanics loss that sits on the reference."
    ]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**The twenty general knowledge questions in Paper 1** — the definition with its number and its example; the villanelle, the refrain, the elegy, the apostrophe, the persona, the envoi, each with the set poem that carries it",
      "**The four, kept apart, on the named poem** — the subject, the tone, the atmosphere, the mood, each with the making and the reference; the driver's poem the one the paper is likeliest to set",
      "**The relevance to the society** — what the poem shows, and what it asks to be changed; the showing the reference, the asking the judgement, and the society the ground the answer stands on",
      "**The form, named with its numbers** — the type with its counts, and what the shape does to the argument it carries",
      "**A device with its work** — the personification, the apostrophe, the paradox, the understatement, each named, quoted, and the effect in one sentence",
      "**The turn, placed** — the line where the argument changes, quoted, and the change named; the flatness that turns to the anger, the praise that turns the gaze"
    ]},  ],
  terms:[
    {t:"subject matter", d:"what a poem is about", x:"The subject matter is a driver's last day of work."},
    {t:"tone", d:"the attitude of the voice in the poem", x:"The tone is flat and angry at once."},
    {t:"atmosphere", d:"the feeling the world of the poem has", x:"The atmosphere is of a bare office at the end of a career."},
    {t:"mood", d:"what the reader is left with", x:"The mood left in the reader is indignation."},
    {t:"form", d:"the shape of a poem — stanza, rhyme, rhythm, type", x:"The form is a sonnet, so the poem argues."},
    {t:"free verse", d:"poetry without a regular metre or rhyme scheme", x:"He writes in free verse, so the line lengths follow the thought."},
    {t:"free indirect style", d:"a narrative style that takes on a character's voice without quoting it", x:"The free indirect style lets the reader hear her thought in the narrator's words."},
    {t:"relevance", d:"what in the world outside the poem the work bears on", x:"The relevance of the poem is how a country treats its old servants."},
    {t:"apostrophe", d:"addressing somebody absent or something that cannot answer", x:"‘Africa, my Africa’ is an apostrophe."},
    {t:"persona", d:"the voice a poet adopts in a poem", x:"The persona of the poem is a retired driver, not the poet."},
    {t:"envoi", d:"a short closing stanza that sums up or dedicates the poem", x:"The envoi turns the poem towards the reader."},
    {t:"mood and atmosphere", d:"what the reader feels and what the poem's world feels like", x:"Keep mood and atmosphere apart: one is the reader's, the other the poem's."}
  ],
  quotes:[
    {q:"Naked woman, black woman / Clothed with your colour which is life, from your form which is beauty!", w:"Black Woman", dev:"apostrophe and paradox — naked and clothed at once", why:"The contradiction praises rather than confuse: she is naked and yet clothed by her own colour, so the poem reverses the colonial gaze that saw nakedness as absence."},
    {q:"Praise be to you, my father's sister, / who made me a man among men.", w:"Black Woman", dev:"apostrophe and praise convention", why:"The poem uses the African praise-song rather than the European lyric, so the form itself is part of the argument about who is being addressed and in whose language."},
    {q:"The anvil does not know it is making the blade; / the hammer does not know it is making the song.", w:"The Anvil and the Hammer", dev:"personification and proverb-shaped metaphor", why:"The two instruments are given ignorance, so the reader understands that the work of making — a person, a nation — is done by things that do not know what they are producing."},
    {q:"Thirty years of service and the letter says: retired.", w:"A Government Driver on his Retirement", dev:"understatement and the flatness of official language", why:"The sentence sets a life against a clause and lets the reader feel the disproportion, which is the whole of the poem's anger."},
    {q:"They have eaten the years and left me the calendar.", w:"The Panic of Growing Older", dev:"metaphor — years spoken of as food eaten", why:"The comparison says that what is left of a working life is the counting of it, so the panic of the title is not fear of death but fear of having been consumed while still alive."}
  ],
  characters:[
    {n:"The retired driver", w:"A Government Driver on his Retirement", d:"the servant whose thirty years are answered with a letter and no acknowledgement"},
    {n:"The addressee", w:"Black Woman", d:"the African woman praised in the poem, and through her the continent"},
    {n:"The speaker", w:"The Panic of Growing Older", d:"the voice measuring what the years have taken and what they have left"},
    {n:"The poet", w:"Piano and Drums", d:"the speaker caught between the drum of inheritance and the piano of schooling"},
    {n:"The family", w:"The Dining Table", d:"the household gathered and dispersed around one piece of furniture"},
    {n:"The watchers", w:"Ambush", d:"those who wait in the grass for the road to become a person"}
  ],
  themes:[
    {t:"A country is judged by how it treats those who served it", w:"A Government Driver on his Retirement", ev:"thirty years of service set against a single official word, and a road that does not thank him"},
    {t:"What was called nakedness can be named as clothing", w:"Black Woman", ev:"‘Naked woman, black woman / Clothed with your colour which is life’"},
    {t:"The work of making a nation is done by things that do not know what they make", w:"The Anvil and the Hammer", ev:"the anvil does not know it is making the blade"},
    {t:"Two inheritances argue inside one person", w:"Piano and Drums", ev:"the drum's primeval youth against the piano's wailing rage, and the speaker caught between them"}
  ],
  facts:[
    {q:"Distinguish subject matter, tone, atmosphere and mood.", a:"The subject matter is what the poem is about; the tone is the attitude of the voice; the atmosphere is the feeling the world of the poem has; the mood is what the reader is left with."},
    {q:"How do you answer a question on a poem's relevance to society?", a:"Do not praise the poem: say what in the world outside it the poem bears on, state what the poem shows about it, and say what it asks to be changed."},
    {q:"What does the form of a poem contribute?", a:"A sonnet argues, a ballad tells, an elegy mourns, free verse follows the movement of a thought. The form is part of the meaning, not a container for it."},
    {q:"What is an apostrophe in poetry, and what does it do?", a:"It addresses somebody absent or something that cannot answer — a continent, a dead person, a bird. It turns description into address, so the reader is put in the position of the one who must respond."},
    {q:"Why is understatement an effective device for anger?", a:"Because it lets the reader supply the force. ‘Thirty years of service and the letter says: retired’ is angrier for being flat, since the disproportion is discovered rather than declared."},
    {q:"What is a persona in a poem?", a:"The voice the poet adopts, which is not necessarily the poet: a retired driver, a widow, a child. Recognising the persona stops a reader from attributing every opinion in the poem to the writer."},
    {q:"How does praise poetry differ from the European lyric?", a:"It addresses the subject directly, accumulates epithets and genealogies, and is made to be spoken in public — so the poem is a social act rather than a private meditation."}
  ],
  tf:[
    {s:"The mood of a poem is what the reader is left with.", a:"true", why:"Atmosphere belongs to the world of the poem; mood belongs to the reader. Keeping them apart is one of the easiest marks to win."},
    {s:"The tone of a poem is what the poem is about.", a:"false", why:"That is the subject matter. The tone is the attitude of the voice — tender, angry, ironic, resigned."},
    {s:"A sonnet is a good form for telling a long story.", a:"false", why:"A sonnet is built to argue in fourteen lines and turn at the volta; telling a story is the business of a ballad or a narrative poem."},
    {s:"Free verse has no regular metre or rhyme scheme.", a:"true", why:"It gives up the regular beat in order to follow the movement of a thought, which is a choice and not a licence."},
    {s:"The persona of a poem is always the poet.", a:"false", why:"The persona is the voice adopted — a driver, a widow, a child — and the poem may be written precisely to show what that voice does not understand."},
    {s:"Answering a question on relevance means praising the poem.", a:"false", why:"It means naming what in the world outside the poem it bears on and what it asks to be changed — praise is not an answer."}
  ],
  apply:[
    {q:"‘A Government Driver on his Retirement is about a man, but the poem is addressed to a country.’ Discuss.", a:"The poem keeps the grievance personal — one driver, one letter — and that is what gives it force: a public servant of thirty years is answered by nobody. The country is therefore not described but indicted, and the reader does the indicting."},
    {q:"Show how Black Woman reverses the way the African woman has been looked at.", a:"The poem addresses her in the form of a praise-song rather than describing her from outside, and its opening paradox — naked and yet clothed by her own colour — takes the term of insult and makes it the term of praise. The reversal is in the addressee and the form, not only in the adjectives."},
    {q:"Choose one poem and show how its form carries its meaning.", a:"Take the sonnet: the three quatrains develop the comparison of a summer's day and the closing couplet delivers the promise that the poem, not nature, is what preserves the beloved. The form is the argument."},
    {q:"Write one sentence of relevance for each of two set poems.", a:"For each: name the subject, then say what in the world outside the poem it bears on and what the poem asks to be changed — for the driver, how a state treats its servants; for the caged bird, what a society does to the people it will not let fly."}
  ],
  passage:{
    title:"Practice extract — the last letter",
    text:"The letter came in an envelope the colour of the office, \nand the office was the colour of nothing. \n\nThirty-two years. The number was in the letter, \nas if he would not remember, as if a man forgets \nthe road he has driven every day of his life. \n\n‘You are hereby retired with effect from…’ \n\nHe read that line three times, and the third time \nhe heard what it did not say: no thanks, no gathering, \nno one at the gate who had ridden with him. \n\nOutside, the lorry he had driven for eleven years \nwent past with another man at the wheel, \nand it did not slow, because a lorry cannot, \nand because the man at the wheel did not know.",
    qs:[
      {q:"‘an envelope the colour of the office, / and the office was the colour of nothing’ — what is the effect of this opening?", a:"It establishes atmosphere by a colour that is not a colour, so the reader is given the blankness of an institution before any person appears. The repetition of ‘the colour of’ makes the second line land as a judgement."},
      {q:"‘as if a man forgets / the road he has driven every day of his life’ — name the device and explain the effect.", a:"It is irony carried by a rhetorical question in statement form, and the enjambment puts ‘forgets’ at the end of a line where it cannot be taken back. The reader is made to feel the insult of being told one's own life."},
      {q:"‘He read that line three times, and the third time / he heard what it did not say’ — explain what he hears.", a:"He hears the absence of what a thirty-two-year service should produce: thanks, a gathering, somebody at the gate who rode with him. The poem therefore locates the injury in the omissions of official language rather than in anything it states."},
      {q:"Why does the poem end on the lorry and the man at the wheel who did not know?", a:"Because the lorry cannot slow and the new driver does not know, the ending refuses sentiment and states the final condition: the work continues and the man is forgotten. It is the plainest and cruellest image available, and placing it last is what makes the poem an indictment."},
      {q:"Write one sentence on the relevance of this poem to society.", a:"It bears on how a state treats the people who have served it, and it asks that service be acknowledged by the people who benefited from it rather than closed with a clause in a letter."}
    ]
  },
  write:[
    {p:"Write an essay: ‘The anger of the set poems is carried by what they leave out, not by what they say.’ Discuss.", guide:"Two or three poems. Quote the omissions. Answer the objection that understatement is too quiet to be angry."},
    {p:"Write a poem of twenty lines or more about a person whose work is not noticed, using one recurring image.", guide:"Let the image be ordinary — a road, a gate, a key. Do not name the emotion."},
    {p:"Choose two set poems and compare their treatment of the same subject — work, or age, or the continent.", guide:"One paragraph on each poem, one comparing method, one conclusion. Quote from both."}
  ],
  activities:[
    "Review and analyse the elements of selected African poems",
    "Review figurative expressions and discuss the literary devices of the given poems and their cultural and societal relevance",
    "Analyse and write poems using different themes and figurative expressions"
  ],
  materials:["The Panic of Growing Older by Lenrie Peters","Vanity by Birago Diop","The Anvil and the Hammer by Kofi Awoonor","Piano and Drums by Gabriel Okara","The Dining Table by Gbanabom Hallowell","Ambush by Gbemisola Adeoti","Black Woman by Léopold Sédar Senghor","A Government Driver on his Retirement by Onu Chibuike"],
  assessment:["Quizzes","Classwork","Homework","Oral presentations"]
},
{
  grade:12, period:"II", sem:"One", icon:"🔍",
  title:"African Prose, Poetry and Literary Devices",
  subtitle:"Themes in the novel, the roles of characters, characterization, imagery, foreshadowing, suspense, flashback and the book report",
  outcomes:[
    "Learners are able to relate themes in novels to social issues as well as analyze the roles of characters in the novel"
  ],
  objectives:[
    "Summarize the selected novel in the form of a book report",
    "Examine the main issues running through the story",
    "Relate themes in the novel to society or other situations",
    "Analyze characters in a novel using graphic organizers"
  ],
  note:"<b>Characterization</b> is the method by which a writer makes a person: what they say, what they do, what others say of them, and what the narrator says of them. Four methods — name them and you can analyse any character.",
  study:[
    /* ---- course text: Semester One, Period II — African Prose, Poetry and Literary Devices (guide p. 20) ---- */
    {k:"h3", t:"Characterization — the Four Methods"},
    {k:"p", t:"A writer makes a person in four ways. **Speech** — what the character says and how they say it. **Action** — what they do, and what it costs them. **Report** — what other characters say about them, which may be true or may be gossip, and the reader must judge. **Comment** — what the narrator says, which is the most direct and the least interesting. The best characterization uses the first two and leaves the reader to do the third."},
    {k:"rule"},
    {k:"h3", t:"The Devices of Narrative"},
    {k:"p", t:"**Symbolism** carries an idea in an object; **imagery** appeals to the senses; **foreshadowing** points to what is to come; **suspense** withholds it; **flashback** brings the past into the present of the story. In a novel these work over hundreds of pages, so the test of a symbol is whether it is still carrying meaning at the end — a symbol that appears once is only an ornament."},
    {k:"rule"},
    {k:"h3", t:"Relating a Theme to Society"},
    {k:"p", t:"To **relate a theme to society**, do three things. State the **theme** as a sentence. Name the **social issue** it touches — the treatment of street children, the position of widows, corruption in public office. Then say what the **novel** shows about the issue that a report would not: what it is like from inside, and whom it costs. The exam question is never ‘is this theme true?’ but ‘what does the novel see that a newspaper does not?’"},
    {k:"p", t:"Set texts for this period: **Lonely Days** by Bayo Adebowale; **Faceless** by Amma Darko; **The Leader and the Lead** by Niyi Osundare; **The Grieved Lands** by Agostinho Neto; **The Song of the Women of My Land** by Oumar Farouk Sesay; **Raider of the Treasure Trove** by Lade Wosonu; **Wuthering Heights** by Emily Brontë; **The Mystic Reformation of Gondolia** by Roland T. Dempster."}
,
    {k:"rule"},
    {k:"h3", t:"Characterization by the Four Methods, Worked on Fofo"},
    {k:"p", t:"The four methods — speech, action, report, comment — are worked on **Fofo** of *Faceless* (Amma Darko), so each method can be seen on the character the paper is likeliest to set."},
    {k:"num", items:[
      "**The speech — what Fofo says, and how.** 'Fofo' — the name she gives when she is asked, and the giving is the first thing that has belonged to her in three years. The speech is the recovery, and the recovery is the characterization: the girl who answers to the description until the name is asked, and the name the first thing she keeps. The way she says it — the looking at the ground, the before that had a door in it — is the speech's doing.",
      "**The action — what she does, and what it costs.** The waiting at the door — the woman who had said wait here, and had not come back — the action is the three years, and the cost is the name the street took. The action is the waiting, and the waiting is the characterization: the patience that is the survival, and the survival that is the argument.",
      "**The report — what the others say of her.** Kabria's asking — 'what is your name?' — and the asking is the report's work: the woman who works with the street children carries the reader's view of what can be done, and the report is the recovery made possible. The report may be true, or it may be the gossip, and the reader judges — and the judgement is the recovery.",
      "**The comment — what the narrator says.** The narrator's comment is the most direct and the least interesting of the four — the statement of what the speech and the action have already shown. The best characterization uses the first two and leaves the reader to do the third, and Fofo is made by the name and the waiting, and the comment is the naming the reader has already done."
    ]},
    {k:"p", t:"The four methods, worked on one character, and the method is the reference: the speech quoted, the action named, the report judged, the comment the least. The question 'how is the character characterized' wants the methods named, each with the reference — and the reference is the mark, and the method is the name, and the name without the reference is the list."},
    {k:"table", head:["Method","The evidence","The reliability","Worked on Fofo"], rows:[
     ["Speech","what the character says, and how","the character's own voice — the strongest","'Fofo' — the name given when it is asked"],
     ["Action","what the character does, and the cost","the doing — the argument made visible","the waiting at the door, the three years"],
     ["Report","what the others say of them","may be true, or may be the gossip — the reader judges","Kabria's asking, and the view it carries"],
     ["Comment","what the narrator says","the most direct, the least interesting","the naming the reader has already done"]]},
    {k:"p", t:"The table is the answer to the characterization question: the method, the evidence, the reliability, and the reference — and the rank is the method's strength, the speech and the action first, the comment last. The best characterization is the first two, and the reader's third is the doing the novel leaves — the leaving is the trust the novel puts in the reader, and the trust is the art."},
    {k:"h3", t:"The Devices of Narrative, Each to Its Set Text"},
    {k:"p", t:"The unit's list, worked on the set: **symbolism** — the street that takes the name in *Faceless*: 'She had a name, but the street had taken it, and the street does not give things back' — the **personification** of the street given the power to take and to withhold, so the loss of the name is shown as a social act rather than an accident; **imagery** — the cold and the snow and the closed doors of *Native Son*, the pressure the plot will release; **foreshadowing** — the broken step in the first chapter, the fall it points to; **suspense** — the chapter ending at the door, the withholding that is the pull; **flashback** — the marriage shown before it soured, the past in the present of the story."},
    {k:"p", t:"In the novel the devices work over the hundreds of pages, so the test of the symbol is **whether it is still carrying meaning at the end** — a symbol that appears once is only an ornament. The street of *Faceless* carries to the end: the name is recovered in the last pages, and the street still keeps it — the recovery and the keeping at once, and the carrying is the argument. The question 'how does the novel use symbolism' wants the symbol named, the first and the last appearance quoted, and the meaning the symbol carries from the first to the last — and the carrying is the test, and the test is the end."},
    {k:"h3", t:"A Theme Related to Society, in Three Steps"},
    {k:"p", t:"The three steps are worked on the theme of *Faceless*, so the relating can be carried into the paper:"},
    {k:"num", items:[
      "**Step one — state the theme as a sentence.** Not 'street children' — the sentence: a child without a name is a child without protection. The theme is the argument, and the argument is the sentence, and the sentence is what the references defend.",
      "**Step two — name the social issue it touches.** The treatment of street children — the issue is the society's, not the character's, and the issue is named with the society's words: the treatment, the protection, the reach. The social issue is what the newspaper would report, and the report is the number, not the name.",
      "**Step three — say what the novel shows about the issue that a report would not.** The report says the number; the novel says the name — the street that takes it and does not give it back, the three years of the waiting, the recovery that is the first thing that belongs. The novel shows what it is like from inside, and whom it costs — and the from-inside is what the report cannot give, and the cost is the whom."
    ]},
    {k:"p", t:"The three steps are the answer to 'relate the theme to society', and the question is never 'is this theme true?' but 'what does the novel see that a newspaper does not?' — and the sees is the from-inside, and the from-inside is the reference. The Liberian candidate brings the society the street children are in, and the society is the ground the answer stands on, and the ground is the country's own."},
    {k:"h3", t:"The Liberian Ground: the African Section, the Two Texts, the Review's Range"},
    {k:"p", t:"The WASSCE's **African prose section** — Paper 2, Section A — sets two questions on each of the prescribed novels, **Faceless** (Amma Darko) and **Lonely Days** (Bayo Adebowale), and the candidate answers one, in the hour and a quarter shared with the non-African section, fifty marks on the paper. The two texts are the period's set, and the argument each carries is the one this period has worked: the name and the protection, the duty and the punishment — and the candidate who has the one sentence for each, with the device and the reference, has the section."},
    {k:"p", t:"The period's shorter works keep the review's range: **The Leader and the Lead** (Niyi Osundare) — the leadership that has lost the road, the pun on lead and leader; **The Grieved Lands** (Agostinho Neto) — the grief made the country, 'We grieved, and the grieving became a country'; **The Song of the Women of My Land** (Sesay) — the women's song older than the road; **Raider of the Treasure Trove** (Lade Wosonu) — the raider who takes what was entrusted, and the taking the book's argument; and **The Mystic Reformation of Gondolia** (Roland T. Dempster) — the Liberian poet in the set, the reformation that the mystic works on the country. The one sentence each, and the sentences are the review: the argument, the device, the ending, and the ending that proves it."},
    {k:"rule"},
    {k:"h3", t:"The Set Poems of the Period, to Their Devices"},
    {k:"p", t:"The period's poems keep the review's range, each to the device that carries its argument: **The Leader and the Lead** (Niyi Osundare) — the **pun** on lead and leader, the antithesis of the two senses, and the leadership that has lost its way while still insisting on being followed; **The Grieved Lands** (Agostinho Neto) — the **metaphor** that turns the feeling into a territory, 'We grieved, and the grieving became a country', the suffering made as real as the land; **The Song of the Women of My Land** (Sesay) — the **hyperbole** that makes the song older than the road, the endurance set against the change the road brought. One device each, and the device is the quotation, and the quotation is the mark."},
    {k:"p", t:"The one sentence each is the review: the argument, the device, the ending that proves it — stated without the book open, they are the state the poetry paper will find, and the poetry paper is Paper 3, the two hours and a half, the four sections, the one hundred marks."},
    {k:"h3", t:"Common Mistakes in This Unit"},
    {k:"bul", items:[
      "Relying on the **narrator's comment** as the strongest characterization. The comment is the most direct and the least interesting — the speech and the action are the strongest, and the reader's third is the doing the novel leaves.",
      "Missing that the **symbol must carry to the end**. The test is the end — the symbol that appears once is the ornament, and the symbol that carries from the first appearance to the last is the argument.",
      "Relating the theme to society by saying **it is true**. The question is what the novel sees that a newspaper does not — the from-inside, the cost, the whom — and the truth is the candidate's word, and the seeing is the novel's.",
      "Forgetting the **book report's format** in the prose answer. The report's order — the title, the author, the genre, the setting and theme in a sentence, the plot without the end, the judgement — is the shape the answer takes, and the shape is the mark.",
      "Naming the **device** without the **reference across the pages**. In the novel the device works over the hundreds of pages, and the reference is the first and the last appearance — the symbol's carrying, the imagery's persistence — and the one appearance is the ornament.",
      "Getting the names wrong — **Fofo, Kabria, Yaremi, Heathcliff, Catherine, Nelly Dean**, **Darko, Adebowale, Osundare, Neto, Sesay, Wosonu, Dempster** — and the mechanics loss that sits on the reference."
    ]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**The African prose essay, Paper 2 Section A** — one of two questions on Faceless or Lonely Days, the hour and a quarter shared with the non-African section, fifty marks on the paper",
      "**The characterization, by the four methods** — the speech, the action, the report, the comment, each named with the reference on the named character; Fofo and Yaremi the two the paper is likeliest to set",
      "**The symbol, carried to the end** — the symbol named, the first and the last appearance quoted, and the meaning the carrying shows; the street that takes the name the one the paper is likeliest to set",
      "**The theme, related to the society in three steps** — the sentence, the issue, and what the novel sees that a report would not; the from-inside the reference",
      "**The devices of narrative, with the reference** — the symbolism, the imagery, the foreshadowing, the suspense, the flashback, each named and quoted across the pages",
      "**The book report, in the format** — the order kept, the setting and theme in a sentence, the plot without the end, and the judgement supported by the quotation"
    ]},  ],
  terms:[
    {t:"characterization", d:"the methods by which a writer makes a person on the page", x:"The characterization is done by speech and action, almost never by comment."},
    {t:"symbolism", d:"an object or action carrying an idea through the work", x:"The fence is symbolism, not scenery."},
    {t:"foreshadowing", d:"a hint placed early of what is to come", x:"The broken step in chapter one foreshadows the fall."},
    {t:"suspense", d:"the withholding of what the reader wants to know", x:"Suspense is kept by ending the chapter at the door."},
    {t:"flashback", d:"the bringing of an earlier event into the story", x:"The flashback shows the marriage before it soured."},
    {t:"social issue", d:"a matter affecting a whole society, taken up in a literary work", x:"The social issue of the novel is the treatment of street children."},
    {t:"graphic organizer", d:"a diagram used to plan an answer — web, map or chart", x:"A character web is a graphic organizer."},
    {t:"omniscient narrator", d:"a narrator who knows the minds of all the characters", x:"The omniscient narrator moves between the street and the office."},
    {t:"stream of consciousness", d:"a style presenting a character's thought as it arrives", x:"The chapter is written in stream of consciousness."},
    {t:"motif", d:"a recurring image, object or phrase in a work", x:"The motif of the road returns in every chapter."},
    {t:"picaresque", d:"a narrative following a roguish character through a series of episodes", x:"The novel's picaresque structure follows the boy from house to house."},
    {t:"epiphany", d:"a moment in which a character suddenly understands", x:"The epiphany comes at the market, and nothing is decided by it."}
  ],
  quotes:[
    {q:"The house had a face, and the face had been turned to the wall.", w:"Wuthering Heights", dev:"personification — the house given a face", why:"The comparison lets the house mourn and refuse, so the reader feels the place as a party to the story rather than a setting for it."},
    {q:"He is more myself than I am. Whatever our souls are made of, his and mine are the same.", w:"Wuthering Heights", dev:"metaphor and hyperbole — the soul spoken of as a substance", why:"Catherine states the bond as a fact of composition, not a preference, which is why the marriage to Edgar cannot be made to work and why the damage runs into the next generation."},
    {q:"She had a name, but the street had taken it, and the street does not give things back.", w:"Faceless", dev:"personification and metaphor — the street takes a name", why:"The novel's whole argument is in the verb: the street is given the power to take and to withhold, so the loss of a name is shown as a social act rather than an accident."},
    {q:"We grieved, and the grieving became a country.", w:"The Grieved Lands", dev:"metaphor — grief spoken of as a place", why:"The comparison turns a feeling into a territory, so the poem claims that a people's suffering is as real as the land they stand on and as hard to leave."},
    {q:"The lead has forgotten the road, and the leader has never known it.", w:"The Leader and the Lead", dev:"antithesis and pun on lead", why:"The two senses of the word are set against each other so that the whole failure of leadership is stated in one line, and the followers are left with neither a road nor a guide."}
  ],
  characters:[
    {n:"Heathcliff", w:"Wuthering Heights", d:"the foundling whose love turns to revenge and whose revenge outlives its object"},
    {n:"Catherine Earnshaw", w:"Wuthering Heights", d:"the woman who keeps Heathcliff and marries Edgar, and is destroyed by the arrangement"},
    {n:"Nelly Dean", w:"Wuthering Heights", d:"the servant who narrates much of the novel and whose report the reader must judge"},
    {n:"Fofo", w:"Faceless", d:"the street girl whose name and history the novel recovers in order to make her a person to the reader"},
    {n:"Kabria", w:"Faceless", d:"the woman who works with street children and who carries what can be done about it"},
    {n:"The Raider", w:"Raider of the Treasure Trove", d:"the figure who takes what was entrusted, and whose taking is the book's argument"}
  ],
  themes:[
    {t:"A love that cannot be lived out becomes an inheritance of damage", w:"Wuthering Heights", ev:"Catherine's arrangement ruins two households and the children who inherit them"},
    {t:"A child without a name is beyond the reach of protection", w:"Faceless", ev:"the street takes her name and does not give it back"},
    {t:"Suffering shared over generations becomes a country", w:"The Grieved Lands", ev:"‘We grieved, and the grieving became a country’"},
    {t:"Leadership without knowledge of the road is a burden, not a guide", w:"The Leader and the Lead", ev:"the pun on lead and leader, and the claim that neither knows the road"}
  ],
  facts:[
    {q:"Name the four methods of characterization.", a:"Speech — what the character says and how; action — what they do and what it costs; report — what other characters say of them, which the reader must judge; comment — what the narrator says, which is the most direct and the least interesting."},
    {q:"How do you test whether an object in a novel is a symbol?", a:"Ask whether it is still carrying meaning at the end. A symbol that appears once and is never answered is an ornament."},
    {q:"Give the three steps for relating a theme to society.", a:"State the theme as a sentence; name the social issue it touches; then say what the novel shows about that issue that a report would not — what it is like from inside, and whom it costs."},
    {q:"What is a motif, and how does it differ from a symbol?", a:"A motif is a recurring image, object or phrase — a pattern the reader notices. A symbol carries an idea. A motif may become a symbol if it accumulates meaning rather than merely repeating."},
    {q:"What is stream of consciousness?", a:"A style that presents a character's thought as it arrives, without the ordering of a narrator, so the reader is inside the mind rather than being told about it."},
    {q:"Why must the reader judge what other characters say about a character?", a:"Because report in a novel may be gossip, envy or self-interest. The reader has to set the report against what the character does — which is why the best writers give the action and leave the judgement to us."},
    {q:"What does an epiphany do in a story?", a:"It is a moment in which a character suddenly understands something; a well-made one changes the character without necessarily changing the plot, which is what separates it from a climax."}
  ],
  tf:[
    {s:"The narrator's direct comment is the most interesting form of characterization.", a:"false", why:"It is the most direct and usually the least interesting; the strongest characterization is done by speech and action, with the reader left to judge."},
    {s:"A symbol should still be carrying meaning at the end of the novel.", a:"true", why:"That is the test: an object that appears once and is never answered is decoration, not a symbol."},
    {s:"Foreshadowing withholds what the reader wants to know.", a:"false", why:"That is suspense. Foreshadowing points forward to what is to come."},
    {s:"What other characters say about a character is always reliable.", a:"false", why:"Report in a novel may be gossip, envy or self-interest; the reader must set it against what the character does."},
    {s:"Relating a theme to society means saying what the novel sees that a report would not.", a:"true", why:"The question is not whether the theme is true but what the novel knows from inside the experience — and whom it costs."},
    {s:"A motif and a symbol are exactly the same thing.", a:"false", why:"A motif recurs as a pattern; a symbol carries an idea. A motif may become a symbol if it accumulates meaning rather than merely repeating."}
  ],
  apply:[
    {q:"‘Catherine is the cause of everything that happens, and she is dead by the middle of the novel.’ Discuss.", a:"Her choice — to marry Edgar and keep Heathcliff — is the engine of the whole book, and the second generation suffers it. Brontë's method is to make the cause a person who cannot be held responsible from beyond the grave, which is why the novel is about inheritance as much as about love."},
    {q:"Show how Faceless makes a social issue into a person.", a:"The novel gives the street children nicknames first, then gives Fofo a name, a family and a history, and only then asks the reader to judge. The structure therefore does what the argument does: it turns a statistic into somebody the reader is answerable for."},
    {q:"Choose one novel and say what it sees that a newspaper report on the same subject would not.", a:"Name the subject, then give what only the novel can supply: what it feels like from inside, what it costs a particular person, and how the people who suffer it explain it to themselves."},
    {q:"Use a graphic organizer to plan an answer on one character, then write the plan as a paragraph.", a:"Draw the web: the character at the centre, lines to the others named by what each wants. Then write a paragraph per line, with one quotation from the text for each relationship."}
  ],
  passage:{
    title:"Practice extract — the street, and the name",
    text:"They called her by the name the street had given her, which was not a name but a description, and she answered to it because answering was quicker than explaining. \n\nKabria said: what is your name? \n\nAnd the girl said: the one they call me. \n\nKabria said: and before the one they call me? \n\nAnd the girl looked at the ground, because there had been a before, and because the before had a door in it and a woman who had said wait here, and she had waited, and the woman had not come back. \n\n‘Fofo,’ she said. \n\nAnd saying it was the first thing that had belonged to her in three years.",
    qs:[
      {q:"‘which was not a name but a description’ — explain the distinction and its importance.", a:"A name is given by a family and carries a history; a description is given by whoever is looking and carries only what they can see. The novel's argument is that a child with only a description is a child nobody is answerable for."},
      {q:"What is the effect of the dialogue being reported without speech marks?", a:"It gives the exchange the flatness of a report rather than the warmth of a scene, so the reader understands that this is an official question being asked by somebody who means well and has asked it many times."},
      {q:"‘there had been a before, and the before had a door in it and a woman who had said wait here’ — name the device and explain the effect.", a:"It is a flashback compressed into a noun phrase, and the compression is what makes it bearable: the girl cannot tell the story, so the narrator tells it in the smallest space possible. The reader is given the whole loss in the word ‘wait’."},
      {q:"Why does the extract end on ‘the first thing that had belonged to her in three years’?", a:"Because the novel's subject is not rescue but ownership of a self: saying her name is the first act of possession she has been able to make. The ending states the theme in a clause rather than announcing it."},
      {q:"Write one sentence relating the theme of this extract to a social issue.", a:"It bears on what a society does to children who have no one to speak for them: without a name and a family, they fall outside the protection the rest of the community takes for granted."}
    ]
  },
  write:[
    {p:"Write an essay: ‘The novel's structure is its argument.’ Discuss, using Faceless or Lonely Days.", guide:"Show how the order in which information is given is the moral point. Three references to the placing of events."},
    {p:"Write a book report of 400 words on the set novel, using the approved format.", guide:"Title; author, genre and date; setting and theme in a sentence each; short plot summary; characters; purpose; a judgement with evidence."},
    {p:"Choose one character and analyse them using all four methods of characterization.", guide:"One paragraph each: speech, action, report, comment — with a quotation for each and a conclusion on what the method achieves."}
  ],
  activities:[
    "Review and summarize the selected novels in parts",
    "Class discussion on the various themes of the novel",
    "In groups, outline and discuss the literary devices used",
    "Summarize the novel as a book report and present it to the class"
  ],
  materials:["Lonely Days by Bayo Adebowale","Faceless by Amma Darko","The Leader and the Lead by Niyi Osundare","The Grieved Lands by Agostinho Neto","The Song of the Women of My Land by Oumar Farouk Sesay","Raider of the Treasure Trove by Lade Wosonu","Wuthering Heights by Emily Brontë","The Mystic Reformation of Gondolia by Roland T. Dempster"],
  assessment:["Quizzes","Classwork","Homework","Oral presentations","Book report"]
},
{
  grade:12, period:"III", sem:"One", icon:"🎭",
  title:"Review: Non-African Drama, Poetry and Literary Devices",
  subtitle:"Drama as a representation of life, style, culture, values and norms; comedy, tragedy, tragic-comedy, melodrama; flashback, imagery and diction",
  outcomes:[
    "Learners are able to examine and demonstrate their understanding of the selected non-African drama"
  ],
  objectives:[
    "Discuss drama as a representation of life, style, culture, values and norms",
    "Review literary devices",
    "Distinguish the types of drama, their cultural and contemporary relevance",
    "Explain the use of flashback and imagery in non-African drama"
  ],
  note:"<b>Diction</b> is the writer's choice of words. In drama it is the quickest way to place a character: register, grammar and vocabulary tell an audience who is speaking before the plot does.",
  study:[
    /* ---- course text: Semester One, Period III — Non-African drama and literary devices (guide p. 21) ---- */
    {k:"h3", t:"Drama as a Representation of Life"},
    {k:"p", t:"A play is not a slice of life; it is life **selected and ordered** so that a question can be settled in two hours. What it represents, it represents through **style** (how the characters speak), **culture** (what they take for granted), **values** (what they hold good) and **norms** (the rules they expect to be kept). When a play breaks a norm on stage, the audience is asked to judge — and that judgement is the point of the performance."},
    {k:"rule"},
    {k:"h3", t:"The Types Reviewed"},
    {k:"p", t:"**Comedy** moves from confusion to reunion and ends in festival. **Tragedy** follows a person of standing from prosperity to ruin through a flaw in their own nature, and ends in death. **Tragic-comedy** raises a real danger and resolves it well. **Melodrama** simplifies its characters into heroes and villains and moves the audience rather than making it think. Each type makes a different claim about what life is like, which is the same as saying each type has a different **contemporary relevance**."},
    {k:"rule"},
    {k:"h3", t:"Flashback, Imagery and Diction on the Non-African Stage"},
    {k:"p", t:"A **flashback** on stage brings the past into the present tense of the performance — a letter read aloud, a scene played behind a gauze, a character who speaks as though the dead were in the room. **Imagery** in drama cannot be private: it must be spoken and heard, so it is always doing something to another character. **Diction** places a speaker instantly: the register, the grammar, the borrowed word. Read any speech aloud and the character's place in the world is in the first line."},
    {k:"p", t:"Set texts for this period: **Othello** by William Shakespeare; **She Stoops to Conquer** by Oliver Goldsmith; **A Raisin in the Sun** by Lorraine Hansberry; **A Midsummer Night's Dream** by William Shakespeare; **Felled 1879 — Binsey Poplars** by G.M. Hopkins; **Do Not Go Gentle into That Good Night** by Dylan Thomas."}
,
    {k:"rule"},
    {k:"h3", t:"The Types, Classified with the Reason"},
    {k:"p", t:"The classification is the kind with the reason, and the reason is the three tests — the hero's fate, the feeling earned, the ending — worked on the named text. Worked on the period's set:"},
    {k:"num", items:[
      "**Othello — the tragedy.** The reason: the standing of the general, the flaw of the ease of believing, the fall that is the murder and the death, and the end death. The tragedy's claim — a flaw in a great person can cost everything — is the play's argument, and the argument is the fall being the hero's as much as the villain's.",
      "**She Stoops to Conquer — the comedy.** The reason: the confusion made by the trick, the putting right in the marriage, the ending the festival, and the feeling the delight. The comedy's claim — the confusion is temporary, and the union is the natural end — is the play's argument, and the argument is the trick ending in the marriage it was meant to prevent.",
      "**A Raisin in the Sun — the tragic-comedy.** The reason: the danger real — the money that can buy the ruin as easily as the rise, the weight of the loss held throughout — and the ending fortunate: the move, not the funeral. The tragic-comedy's claim — the danger real and the end fortunate at the same time — is the play's argument, and the argument is the move that was not expected.",
      "**A Midsummer Night's Dream — the comedy.** The reason: the confusion of the juice, the putting right in the three weddings, the ending the festival. The comedy's claim is the play's argument, and the argument is the dream's night ending in the wedding's day."
    ]},
    {k:"p", t:"The question 'show that the play is a [kind]' wants the kind, the tests, and the references — and the reference is the mark, and the test is the name. The claim the kind makes about life is what finishes the answer, and the claim is the argument: the kind is not the label, the kind is the claim about what life is like, and the claim is what the play has been arguing."},
    {k:"table", head:["Play of the set","The kind","The reason — the three tests","The norm it breaks, and who pays"], rows:[
     ["Othello","tragedy","the standing lost, the flaw of believing, the end death","the norm of the trust kept, and the household pays — Desdemona, Emilia"],
     ["She Stoops to Conquer","comedy","the confusion put right, the feeling delight, the end marriage","the norm of the class's manners, and the affectation pays — Marlow's ease with the servant"],
     ["A Raisin in the Sun","tragic-comedy","the danger real, the weight held, the end fortunate","the norm of the household's keeping, and the deferred dream pays — Walter Lee's deal"],
     ["A Midsummer Night's Dream","comedy","the confusion of the juice, the putting right, the end festival","the norm of the law, and the law pays — the new moon's wedding"]]},
    {k:"p", t:"The table is the review in one: each play, the kind, the reason, and the norm broken with the one who pays — and the candidate who can read the row without the book open has the classification with the reason. The norm and the payer are the drama's argument, and the argument is the society the play is set in: the play breaks the norm on stage, and the audience is asked to judge — and the judgement is the point of the performance."},
    {k:"h3", t:"Flashback, Imagery and Diction, Worked on the Non-African Stage"},
    {k:"p", t:"The unit's three, worked: **the flashback** on stage brings the past into the present tense of the performance — a letter read aloud, a scene played behind a gauze, a character who speaks as though the dead were in the room. In Othello the past is the handkerchief — the gift given, the gift planted, the gift the evidence — and the flashback is the planting the audience has seen, so the present is the paying of what the past has sown. **The imagery** in drama cannot be private: it must be spoken and heard, so it is always doing something to another character — Iago's nets and poison do the work to Othello, and the imagery is the action done to the man who hears it."},
    {k:"p", t:"**The diction** places the speaker instantly: the register, the grammar, the borrowed word. Read any speech aloud and the character's place in the world is in the first line — 'I have lost my reputation! I have lost the immortal part of myself, and what remains is bestial' is the diction of the man who has lost the standing, and the register is the fall heard in the first line. In the examination, the three are named, quoted, and the work of each stated: the flashback's bringing, the imagery's doing, the diction's placing — and the work is the reference, and the reference is the mark."},
    {k:"h3", t:"The Liberian Ground: the Context Paper, and Section B"},
    {k:"p", t:"The **Shakespearean text** of the 2016–2020 set was **Othello**, and the context questions of Paper 1 — twenty of the fifty, theme, characterization, style and setting — are carried by the candidate who has the play to its plot diagram, its tragic hero and its diction. The **non-African drama section** of Paper 3 — Section B — sets two questions on **She Stoops to Conquer** (Goldsmith) and **A Raisin in the Sun** (Hansberry), one answered, in the two hours and a half. The two plays are the period's set, and the argument each carries is the one this period has worked: the affectation that keeps the love from the sight, and the dream deferred in the household — and the candidate who has the one sentence for each, with the norm and the payer, has the section."},
    {k:"p", t:"The poems of the period — **Felled 1879 — Binsey Poplars** (G.M. Hopkins), **Do Not Go Gentle into That Good Night** (Dylan Thomas) — are the poetry the review carries, and the one sentence each: the loss felt in the mouth before it is understood, the plea that cannot be answered. The Liberian candidate brings the ear the African periods have built, and the ear is what the non-African stage is heard with, and the hearing is the reference."},
    {k:"rule"},
    {k:"h3", t:"Style, Culture, Values and Norms — the Four the Play Carries"},
    {k:"p", t:"The unit's four words — **style** (how the characters speak), **culture** (what they take for granted), **values** (what they hold good), **norms** (the rules they expect kept) — are the four a play is read through, and the four are worked on the two plays the section will set, so each can be seen doing its work in the material."},
    {k:"num", items:[
      "**The style, in the diction.** In **A Raisin in the Sun** the style is the household's speech — Mama's plain sentences that end where they begin, Walter Lee's long ones that return to their start, Beneatha's borrowed word — and the style is the argument, because the speech is the household's world. In **She Stoops to Conquer** the style is the register — the formality with the servant, the ease with the real one — and the register is the affectation the play is laughing at.",
      "**The culture, in the taken-for-granted.** The culture of the Younger household is the Black household of Chicago after the war — the money earned by a death, the move that is the dream, the room the family has not left; the culture is the world the play is set in, and the world is the reference. The culture of Hardcastle is the country gentry — the manners, the table, the mistake — and the culture is the satire's ground.",
      "**The value, held good.** The value the Younger household holds good is the keeping — the household kept together against the money's pulling; the value is tested by the deal, and the test is the plot. The value the gentry holds good is the manners — the class kept by the polish; the value is tested by the trick, and the test is the comedy.",
      "**The norm, broken on stage.** The norm the play breaks is the one the audience judges: in the Younger house the norm is the keeping of the household, and the breaking is Walter Lee's deal; in the gentry the norm is the class's manners, and the breaking is Marlow's ease. The breaking on stage is the question the audience is asked to answer, and the answer is the judgement — and the judgement is the point of the performance."
    ]},
    {k:"p", t:"The four are the answer's four parts, and each part takes its reference from the named play: the style the diction quoted, the culture the world named, the value the holding good, the norm the breaking shown. The question that sets the four wants the four, and the four are the play read through its own equipment — the equipment the play carries, and the carrying is the reference."},
    {k:"h3", t:"The Melodrama, Told Apart by the Depth"},
    {k:"p", t:"The **melodrama** is the kind the review must tell apart from the tragedy and the comedy: the characters simplified into stock heroes and villains, the events sensational, the moral plain to see, the audience moved rather than made to think. The tells are the simplification and the sensational — the villain who has no motive but wickedness, the weeping at the moment the plot needs a turn. **Othello** is not the melodrama, because the villain has a method and the hero has a flaw, and the method and the flaw are the depth the melodrama lacks. **A Raisin in the Sun** is not the melodrama, because the danger is the household's and the suffering is the real one, and the ending is the fortunate that was not expected — the tragic-comedy's claim, not the melodrama's."},
    {k:"p", t:"In the examination the question 'is the play a melodrama' wants the kind's tells named — the stock person, the sensational event, the plain moral — and the depth named against them: the flaw that makes the fall the hero's, the method that makes the villain the agent, the danger that makes the end the fortunate. The tells without the depth is the list, and the depth against the tells is the classification with the reason."},
    {k:"h3", t:"Common Mistakes in This Unit"},
    {k:"bul", items:[
      "**Misclassifying A Raisin in the Sun** — the comedy, the tragedy, the melodrama. The test is the ending: the danger real and the end fortunate is the tragic-comedy, and the move, not the funeral, is the ending the kind is named by.",
      "Missing the **diction that places the character**. The register, the grammar, the borrowed word — the diction is the placing, and the line read aloud is the test: the character's place in the world is in the first line.",
      "Confusing the **flashback** with the **reported past**. The flashback is the past brought into the present tense of the performance — the letter read, the scene behind the gauze; the reported past is the character telling what happened, and the two are the stage's and the speech's.",
      "Calling the **melodrama** the serious tragedy. The melodrama's stock hero and villain, the sensational event, the plain moral — the kind's tells are the simplification, and the tragedy's depth is the flaw, and the two are told apart by the depth.",
      "Forgetting that the **Shakespearean text carries no essay**. The context questions only — the twenty of Paper 1, theme, characterization, style and setting — and the essay that reaches for the Shakespearean text answers the question not set.",
      "Getting the names wrong — **Othello, Iago, Desdemona, Emilia, Kate Hardcastle, Marlow, Walter Lee, Lena, Beneatha, Hopkins, Thomas** — and the mechanics loss that sits on the reference."
    ]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**The twenty context questions on Othello in Paper 1** — theme, characterization, style or setting, each in a line or two with the exact reference; no essay is set on the Shakespearean text",
      "**The non-African drama essay, Paper 3 Section B** — one of two questions on She Stoops to Conquer or A Raisin in the Sun, in the two hours and a half shared with the other sections",
      "**The classification, with the reason** — the kind, the three tests worked on the named play, and the claim the kind makes about life; the tragic-comedy of A Raisin in the Sun the one the paper is likeliest to set",
      "**The diction, with the placing** — the register, the grammar, the borrowed word, named and quoted, and the place the diction gives the speaker",
      "**The flashback, with the bringing** — the past in the present tense of the performance, the method named: the letter, the gauze, the speaking as though the dead were in the room",
      "**The imagery, with the doing** — the figure spoken, the action it does to the character who hears it, and the audience's knowledge the dramatic irony that makes it unbearable"
    ]},  ],
  terms:[
    {t:"diction", d:"the writer's or speaker's choice of words", x:"The diction of the letter is official and cold."},
    {t:"register", d:"the level of formality of a speaker's language", x:"He changes register when the magistrate comes in."},
    {t:"flashback", d:"the bringing of an earlier event into the present of the play", x:"The flashback is played behind a gauze while the letter is read."},
    {t:"imagery", d:"language appealing to the senses, spoken aloud on stage", x:"The imagery of nets and poison is spoken by Iago to do a job."},
    {t:"tragedy", d:"a play of a great person's fall through their own flaw", x:"Othello is a tragedy of a readiness to believe."},
    {t:"tragic-comedy", d:"a play with real danger that ends well", x:"The danger is real and the ending is fortunate."},
    {t:"melodrama", d:"a play of stock heroes and villains and strong emotion", x:"The villain of the melodrama has no motive but wickedness."},
    {t:"contemporary relevance", d:"what a play bears on in the world of its audience", x:"The contemporary relevance of the play is what a society owes its tenants."},
    {t:"norms and values", d:"the rules a community expects kept, and what it holds good", x:"The play breaks the norms of the household and asks who suffers."},
    {t:"soliloquy", d:"a speech made alone on stage, giving the character's real mind", x:"The soliloquy tells the audience what the character will not admit."},
    {t:"aside", d:"a remark made to the audience, unheard by the others", x:"The aside gives the audience the advantage over the character."},
    {t:"denouement", d:"the untying of the plot at the end of a play", x:"The denouement exposes the trick and names the cost."}
  ],
  quotes:[
    {q:"What happens to a dream deferred? / Does it dry up / like a raisin in the sun?", w:"A Raisin in the Sun", dev:"the title of the play is a metaphor taken from a poem", why:"The comparison gives the play its whole structure: the insurance money is a deferred dream, and the question the title asks is whether the family will be dried up or will open."},
    {q:"We have decided to move into our house because my father — my father — he changed his life.", w:"A Raisin in the Sun", dev:"repetition and the breaking off of the sentence", why:"The repetition of ‘my father’ carries the son's judgement and his grief at once, and the broken grammar is what a person actually sounds like when both are in the same sentence."},
    {q:"Mama, I'm thirty-five years old and I have never done anything for myself.", w:"A Raisin in the Sun", dev:"plain statement and understatement", why:"The line is the play's case for Walter Lee: he is not ambitious but untried, and the flatness of the sentence is what makes the audience take him seriously."},
    {q:"O, I have lost my reputation! I have lost the immortal part of myself, and what remains is bestial.", w:"Othello", dev:"metaphor and antithesis — reputation spoken of as the immortal part", why:"The comparison tells the audience what the play has been arguing: that a man who lives by the opinion of others can be destroyed by a rumour, and Othello names it himself at the moment of his ruin."},
    {q:"Rage, rage against the dying of the light.", w:"Do Not Go Gentle into That Good Night", dev:"refrain, with repetition and alliteration", why:"The refrain returns four times through the villanelle and closes it, so the plea accumulates rather than develops — which is what a plea to a dying man would sound like."}
  ],
  characters:[
    {n:"Walter Lee Younger", w:"A Raisin in the Sun", d:"the son whose deferred ambition is the play's argument and whose mistake nearly costs the family everything"},
    {n:"Lena Younger (Mama)", w:"A Raisin in the Sun", d:"the mother who holds the insurance money and who decides what it is for"},
    {n:"Beneatha", w:"A Raisin in the Sun", d:"the daughter who wants to be a doctor and who argues for what a person might become"},
    {n:"Othello", w:"Othello", d:"the general whose reputation he calls the immortal part of himself, and which he loses to a rumour"},
    {n:"Kate Hardcastle", w:"She Stoops to Conquer", d:"the woman who must pretend to be beneath herself in order to be seen at all"},
    {n:"The speaker", w:"Do Not Go Gentle into That Good Night", d:"the son urging his dying father to fight the dying of the light, and knowing he will lose"}
  ],
  themes:[
    {t:"A dream deferred may dry up, or it may be opened by a decision", w:"A Raisin in the Sun", ev:"the title's question and the insurance money that is the deferred dream"},
    {t:"A household is where a public injustice is paid for", w:"A Raisin in the Sun", ev:"the family must decide what to do with money that was earned by a death"},
    {t:"A reputation can be taken by a rumour, and it is the immortal part", w:"Othello", ev:"‘I have lost the immortal part of myself, and what remains is bestial’"},
    {t:"A person should resist the end however certainly it comes", w:"Do Not Go Gentle into That Good Night", ev:"the refrain, repeated and closed on"}
  ],
  facts:[
    {q:"How does a play represent life?", a:"By selecting and ordering it so that a question can be settled in two hours — through style (how characters speak), culture (what they take for granted), values (what they hold good) and norms (the rules they expect kept)."},
    {q:"Distinguish tragedy from melodrama.", a:"Tragedy follows a person of standing to ruin through a flaw in their own nature and makes the audience think; melodrama divides characters into heroes and villains and moves the audience rather than making it think."},
    {q:"How does a flashback work on stage?", a:"It brings the past into the present tense of the performance — a letter read aloud, a scene played behind a gauze, a character speaking as though the dead were in the room."},
    {q:"Why is imagery in drama always doing something?", a:"Because it must be spoken and heard: it is addressed to another character and it has a purpose, so it is an action as well as a description."},
    {q:"What does diction tell an audience about a character?", a:"Register, grammar and vocabulary place a speaker instantly — their class, their education, their confidence, and who they are trying to be."},
    {q:"What is contemporary relevance, and how is it shown?", a:"It is what a play bears on in the world of its audience, and it is shown by naming the issue the play takes up and what it asks to be changed — as A Raisin in the Sun bears on housing, work and what a family is owed."},
    {q:"Give the four types of drama and one word on each.", a:"Comedy — reunion; tragedy — fall; tragic-comedy — danger survived; melodrama — sensation."}
  ],
  tf:[
    {s:"Melodrama makes the audience think rather than feel.", a:"false", why:"Melodrama divides characters into heroes and villains and loads the plot with sensation so that the audience is moved rather than made to think."},
    {s:"On stage, imagery is always addressed to somebody.", a:"true", why:"It must be spoken and heard, so it does something to another character rather than only describing."},
    {s:"A flashback shows events that happen after the main action.", a:"false", why:"A flashback brings an earlier event into the present of the performance."},
    {s:"Register is the level of formality of a speaker's language.", a:"true", why:"It places a character instantly — and a change of register within a speech is always worth a mark."},
    {s:"A tragedy ends in the restoration of the hero's fortune.", a:"false", why:"Tragedy follows a fall, usually to death; the restoration belongs to comedy and to some tragic-comedy."},
    {s:"Contemporary relevance means naming what a play bears on in the audience's world.", a:"true", why:"Not praising it: naming the issue it takes up and what it asks to be changed."}
  ],
  apply:[
    {q:"‘Walter Lee Younger is the most sympathetic character and the least trustworthy with money.’ Discuss.", a:"The play makes both true and keeps them together: his speech to his son about being thirty-five and having done nothing is the most honest moment in it, and he then loses the money on a scheme he was told not to trust. Hansberry's argument is that a man can be right about what he is owed and still not be ready to be trusted."},
    {q:"Show how Othello's own words confirm the play's judgement of him.", a:"He names his reputation as the immortal part of himself, and he is destroyed by a rumour about it. The play therefore does not simply pity him: it shows that a man who lives by what others think of him has put the thing he values most where anybody can reach it."},
    {q:"Choose one speech from the set play and say what the diction tells the audience in the first three lines.", a:"Name the register, the grammar and any borrowed or formal word, then say what each places — class, education, intention — before the plot has done anything."},
    {q:"Which type of drama has the most contemporary relevance, and why?", a:"Any of the four defended from a set text: tragedy, because public falls are still public; comedy, because the pretensions it mocks have not gone; tragic-comedy, because most lives survive rather than resolve; melodrama, because it names what people want to believe about villains."}
  ],
  passage:{
    title:"Practice extract — the money",
    text:"MAMA: I come from five generations of people who was slaves, and my husband died in a house he did not own, in a room his mother had rented for nineteen years. \n\nWALTER: Mama — \n\nMAMA: You said you wanted to talk to me about the money. That is not what the money is. The money is not what your father died for. It is what he lived for. \n\n[She puts the envelope on the table. Nobody touches it.] \n\nWALTER: A man needs to feel he could have been something. \n\nMAMA: Then be something. But be it knowing what it cost, and who paid.",
    qs:[
      {q:"‘five generations of people who was slaves’ — comment on the grammar and what it achieves.", a:"The non-standard agreement is the diction of a woman who has not been schooled, and the play puts it in the same sentence as the historical fact, so the audience is given both the authority of her experience and the exactness of her speech. To correct the grammar would be to lose the character."},
      {q:"‘That is not what the money is. The money is not what your father died for. It is what he lived for.’ Explain the distinction.", a:"She separates the insurance — which is paid because he died — from the life that earned it, so the money is made a record of labour rather than a compensation for a death. The distinction is the play's moral centre: what is owed to a life, and who may spend it."},
      {q:"What is gained by the stage direction ‘She puts the envelope on the table. Nobody touches it’?", a:"It makes the money a physical presence with a claim on everybody in the room, and the audience watches the restraint rather than being told about it. The silence is the scene."},
      {q:"‘Then be something. But be it knowing what it cost, and who paid.’ What is Mama's argument?", a:"She does not refuse Walter's ambition; she insists that it be held with the knowledge of what financed it. The play's argument is therefore not between ambition and caution but between a self that remembers its debts and one that does not."},
      {q:"Write one sentence on the contemporary relevance of this extract.", a:"It bears on what a family is owed by the labour of the people who came before it, and on what a person may do with money they did not earn."}
    ]
  },
  write:[
    {p:"Write an essay: ‘The play is not about money but about what a life was worth.’ Discuss.", guide:"Three references, including the envelope. Answer the objection that Walter's scheme was simply foolish."},
    {p:"Write a short scene of thirty lines in which a family must decide what to do with something that cost somebody else everything.", guide:"Give each character a different register. Let one object sit at the centre of the stage. End on a decision rather than an argument."},
    {p:"Compare the use of flashback in one African and one non-African set text.", guide:"Say what each brings back, how it is staged or narrated, and what the past is being used to settle."}
  ],
  activities:[
    "In groups, list and discuss the literary devices used in non-African drama",
    "Review the use of flashback, imagery, suspense and diction in the selected play",
    "Review and write a report on the selected non-African drama",
    "Class discussion on the cultural and contemporary relevance of each type of drama"
  ],
  materials:["Othello by William Shakespeare","She Stoops to Conquer by Oliver Goldsmith","A Raisin in the Sun by Lorraine Hansberry","A Midsummer Night's Dream by William Shakespeare","Felled 1879 — Binsey Poplars by G.M. Hopkins","Do Not Go Gentle into That Good Night by Dylan Thomas"],
  assessment:["Quizzes","Classwork","Homework","Assignments","Oral presentations"]
}
,
{
  grade:12, period:"IV", sem:"Two", icon:"⚖️",
  title:"Prose, Poetry, Drama and Literary Devices",
  subtitle:"Comparing the three kinds of literature, summarizing themes and lessons, and composing in all three",
  outcomes:[
    "Learners are able to distinguish literary work and relate the same to life experiences"
  ],
  objectives:[
    "Compare and contrast prose, poetry, and drama as part of literary work",
    "Summarize the themes and lessons learned in selected prose, poetry and drama",
    "Compose prose, poetry, and drama using literary devices"
  ],
  note:"To <b>compare</b> is to look for likenesses; to <b>contrast</b> is to look for differences. An answer that only lists what each kind is has done neither: take one point at a time and hold the two against it.",
  study:[
    /* ---- course text: Semester Two, Period IV — Prose, Poetry, Drama and Literary Devices (guide p. 22) ---- */
    {k:"h3", t:"The Three Kinds Compared"},
    {k:"p", t:"All three kinds tell stories; they differ in what they can do. **Prose** has a narrator and so has an inside — the report of thought, the compression of years, the comment. **Poetry** has line and stanza, and so has compression and music: it can say in four lines what prose needs a page to reach. **Drama** has only speech and action, and so has immediacy: the audience sees it happen and cannot be told what a character thinks unless that character says it."},
    {k:"table", head:["Point", "Prose", "Poetry", "Drama"], rows:[
      ["Who speaks", "A narrator, and the characters", "One voice, or a persona", "The characters only"],
      ["Time", "Years compressed in a sentence", "A moment held still", "The present tense of the stage"],
      ["Thought", "Reported directly", "Shown in image and rhythm", "Spoken, or not at all"],
      ["Ending", "A new state of things", "A turn, or a resolution in feeling", "A settlement before witnesses"],
      ["Cost", "Expansive; needs length", "Concentrated; needs precision", "Public; needs conflict"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Themes and Lessons"},
    {k:"p", t:"A **theme** is the idea; a **lesson** is what the work asks the reader to carry away. They are not the same: the theme of a novel may be that a community's rules are arranged for its own comfort, and the lesson may be that a person who benefits from a rule rarely sees what it costs. Always state the lesson as something a reader could act on."},
    {k:"rule"},
    {k:"h3", t:"Composing in All Three"},
    {k:"p", t:"Choose the form to fit the material. If the story needs the inside of a mind, write **prose**. If it needs one moment held still and made to mean, write a **poem**. If it needs a decision made in front of witnesses, write a **drama**. Then use the devices deliberately: in prose, imagery and point of view; in poetry, image, rhythm and the turn; in drama, conflict, diction and what is left unsaid."},
    {k:"p", t:"Set texts for this period: **Faceless** by Amma Darko; **Lonely Days** by Bayo Adebowale; **Native Son** by Richard Wright; **A Raisin in the Sun** by Lorraine Hansberry; **Crossing the Bar** by Alfred Tennyson; **I Thank God — A Birthday Poem** by Roland T. Dempster."}
,
    {k:"rule"},
    {k:"h3", t:"The Comparison, Worked One Point at a Time"},
    {k:"p", t:"The unit's rule — to **compare** is to look for the likenesses, to **contrast** is to look for the differences, and the point is taken one at a time — is worked on two of the set texts: **Lonely Days** and **Native Son**, held against one point: the treatment of the woman who carries the household."},
    {k:"num", items:[
      "**The likeness, on the point.** Both novels make the woman the carrier: Yaremi carries the household after the death, and Bigger's world carries Bessie and Mary into the crime. The likeness is the carrying, and the carrying is the theme's work in both — the woman as the one the household stands on, and the standing-on the argument.",
      "**The difference, on the point.** The treatment differs: Yaremi's exclusion is the community's duty, kept by everybody and paid for by one — the shaving, the ban, the six moons; Bessie's and Mary's fate is the man's fear, the pressure the society's refusal builds and the man's hand spends. The difference is the agent — the community's rule, and the man's terror — and the agent is what the point shows.",
      "**The point, held.** The point held is the carrying, and the likeness and the difference are named in the material — the likeness the carrying, the difference the agent. The comparison is finished when the point is held and the two are named, and the two are the reference for each."
    ]},
    {k:"p", t:"The answer that only lists what each novel is has done neither the compare nor the contrast — the point is taken one at a time, and the two are held against it. The question 'compare the treatment of the woman in the two novels' wants the point, the likeness, the difference, and the reference for each — and the reference is the mark, and the point is the name, and the name is what the question set."},
    {k:"table", head:["Work of the set","The kind","The theme, the sentence","The lesson, what the reader carries"], rows:[
     ["Faceless","prose","a child without a name is beyond the reach of protection","the name is the protection, and the protection is the asking"],
     ["Lonely Days","prose","the duty called by the community the punishment felt by the widow","the rule is judged by who pays for it"],
     ["Native Son","prose","the fear that makes the man before the law does","the society's refusal to see is paid for"],
     ["A Raisin in the Sun","drama","the deferred dream may dry up or be opened","the dream is opened by the decision, and the decision is the household's"],
     ["Crossing the Bar","poetry","the death met as a crossing rather than a defeat","the calm is the decision, and the decision is the hope"],
     ["I Thank God — A Birthday Poem","poetry","the gratitude for the life must include the cost","the thanks given for the years there are not is the count's double edge"]]},
    {k:"p", t:"The table is the period's review in one: each work, the kind, the theme as the sentence, and the lesson the reader carries — and the **theme and the lesson are kept apart**: the theme is the idea the work holds, stated as a sentence; the lesson is what the work asks the reader to carry away and act on, stated as something a reader could do. The two are not the same: the theme of a novel may be that a community's rules are arranged for its own comfort, and the lesson may be that a person who benefits from a rule rarely sees what it costs."},
    {k:"h3", t:"Composing in All Three, the Form to the Material"},
    {k:"p", t:"The unit's rule — choose the form to fit the material — is worked on the period's own practice extract, the three versions of one afternoon, so the choosing can be seen doing its work:"},
    {k:"num", items:[
      "**The story that needs the inside of a mind — the prose.** The girl who has been awake since four, the hour her mother died, and who has decided not to tell anybody, because telling would make it a thing that had happened — the inside is the story, and the prose is the form: the narrator can say the deciding, and the deciding is the thought, and the thought is what the stage cannot show.",
      "**The moment held still and made to mean — the poem.** The bell at eight, the house that turned over at four and did not turn back — the moment is the poem: the four lines hold the day, and the compression is what makes the last line land. The poem can say in four lines what the prose needs a page to reach, and the page is the prose's cost.",
      "**The decision made in front of witnesses — the drama.** The teacher and the girl, the lateness and the Monday, the nothing said — the decision is the drama: the body is the saying, the witnesses are the room, and the room is the paying. The settlement before witnesses is the drama's end, and the end is the public one."
    ]},
    {k:"p", t:"The three scenarios, one afternoon, and the choosing is the form: the inside the prose, the moment the poem, the decision the drama. The devices of the form are used deliberately: in the prose the imagery and the point of view, in the poem the image and the rhythm and the turn, in the drama the conflict and the diction and what is left unsaid. The composition question sets the material, and the material chooses the form, and the form is the answer's shape."},
    {k:"h3", t:"The Liberian Ground: the Three Kinds, the One Candidate"},
    {k:"p", t:"The WASSCE's candidate is the one who meets the three kinds in the two papers — **Paper 2** the prose, the African and the non-African sections, the hour and a quarter, fifty marks; **Paper 3** the drama and the poetry, the four sections, the two hours and a half, a hundred marks. The three kinds are the candidate's whole, and the candidate's preparation is the one sentence for each kind — the prose's argument, the drama's stage, the poem's turn — with the device and the reference for each, and the reference is the set work that carries it."},
    {k:"p", t:"The set works of the period — **Faceless, Lonely Days, Native Son, A Raisin in the Sun, Crossing the Bar, I Thank God — A Birthday Poem** (Roland T. Dempster, the Liberian poet) — are the three kinds in one: the prose's name and the widow's duty and the fear, the drama's deferred dream, the poetry's crossing and the birthday's count — 'I thank God for the years, and for the years there are not', the paradox that makes the gratitude include the loss. The Liberian candidate brings the country the works are set against — the street, the household, the crossing — and the country is the ground the relevance is answered on."},
    {k:"rule"},
    {k:"h3", t:"The Lessons, Each Actable — the Theme Kept Apart"},
    {k:"p", t:"The unit's distinction — the **theme** is the idea the work holds, the **lesson** is what the work asks the reader to carry away and act on — is worked on the lessons of the period's set, so each lesson can be seen stated as something a reader could do rather than something the work believes."},
    {k:"num", items:[
      "**Faceless — the lesson: the name is the protection.** The theme is the argument — a child without a name is a child without protection; the lesson is the carrying — ask the name, keep the name, and the protection is the asking. The lesson is actable: the reader who works with a street child asks the name, and the asking is the protection the novel says is owed.",
      "**Lonely Days — the lesson: the rule is judged by who pays for it.** The theme is the argument — the duty called by the community the punishment felt by the widow; the lesson is the carrying — judge the rule by the payer, and the payer is the one the rule does not count. The lesson is actable: the reader who keeps a rule looks at who pays for it, and the looking is the judging the novel says is owed.",
      "**Native Son — the lesson: the refusal to see is paid for.** The theme is the argument — the fear that makes the man before the law does; the lesson is the carrying — see the person, and the seeing is the refusing to pay. The lesson is actable: the reader who refuses to see pays in the end, and the paying is what the novel has shown.",
      "**A Raisin in the Sun — the lesson: the dream is opened by the decision.** The theme is the argument — the deferred dream may dry up or be opened; the lesson is the carrying — decide what the money is for, and the deciding is the opening. The lesson is actable: the household that decides with the cost known is the household the play says is kept."
    ]},
    {k:"p", t:"The lessons, each actable, and the theme kept apart from each: the theme is what the work holds, and the lesson is what the reader could do — and the doing is the test. A lesson that cannot be stated as the act is the theme again, and the theme stated as the act is the lesson — the two are told apart by the doing, and the doing is where the mark is."},
    {k:"h3", t:"The Comparison, the Question the Paper Sets"},
    {k:"p", t:"The comparison question of this period is the one the paper is likeliest to set: **compare the treatment of a woman in two of the set texts** — and the point is the one the texts hold in common, the treatment, and the likeness and the difference are the agent. Worked on the two the set gives: **Lonely Days** and **Faceless** — the woman in the household, and the girl in the street; the likeness is the woman made the one the rule or the street decides about, and the difference is the agent — the community's duty, and the society's refusal. The point held, the likeness and the difference named in the material, and the reference for each — the four are the answer, and the four are the mark."},
    {k:"p", t:"The comparison is finished when the point is held and the two are named, and the two are the reference for each. The answer that retells the two novels has not compared them, and the retelling is the two summaries — the point is what the summaries are not, and the point is what the question set."},
    {k:"h3", t:"Common Mistakes in This Unit"},
    {k:"bul", items:[
      "**Listing instead of comparing** — the likenesses and the differences named without the point held. The point is taken one at a time, and the two are held against it; the list is the two summaries, and the comparison is the point with the likeness and the difference.",
      "Confusing the **theme** with the **lesson**. The theme is the idea the work holds — the sentence; the lesson is what the reader carries and acts on — the carrying. The two are kept apart, and the lesson is stated as something a reader could act on.",
      "**Choosing the form before the material.** The material chooses the form — the inside the prose, the moment the poem, the decision the drama; the form chosen before the material is the shape without the story.",
      "Missing the **compression** in the poetry. The poem's compression is what makes the last line land — the four lines that hold the day, the image that carries the argument in the eleven words; the compression is the form's gain, and the gain is the precision.",
      "Writing the **comparison** as the **contrast** alone. The compare is the likeness, the contrast is the difference, and the question that sets the compare wants the likeness first — the likeness named, and the difference the second.",
      "Getting the names wrong — **Fofo, Yaremi, Bigger, Mama, Walter Lee, Beneatha, Hansberry, Dempster, Tennyson** — and the mechanics loss that sits on the reference."
    ]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**The prose essays, Paper 2** — one from the African section, one from the non-African, the hour and a quarter, fifty marks; the one sentence for each text, with the device and the reference",
      "**The drama and the poetry, Paper 3** — the four sections, one question each, the two hours and a half, a hundred marks; the form named, the device quoted, the turn placed",
      "**The comparison, one point at a time** — the point held, the likeness and the difference named in the material, and the reference for each; the two novels held against the treatment of the woman the one the paper is likeliest to set",
      "**The theme and the lesson, kept apart** — the theme the sentence, the lesson the carrying stated as the act; the two the distinction the question sets",
      "**The composition, the form to the material** — the inside the prose, the moment the poem, the decision the drama; the form chosen, and the devices of the form used deliberately",
      "**The summary, in the argument's order** — the subject, the want, the obstacle, the climax, the change; the own words, and nothing added from outside"
    ]},  ],
  terms:[
    {t:"compare", d:"to look for likenesses between two things", x:"Compare the two novels on their treatment of money."},
    {t:"contrast", d:"to look for differences between two things", x:"Contrast the endings of the three kinds."},
    {t:"lesson", d:"what a work asks the reader to carry away and act on", x:"The lesson of the novel is that a rule is judged by who pays for it."},
    {t:"theme", d:"the idea a work holds about its subject, stated as a sentence", x:"A theme of the play is that a household pays for a public injustice."},
    {t:"narrator", d:"the voice that tells a prose narrative", x:"The narrator can compress ten years into a clause."},
    {t:"persona", d:"the voice adopted in a poem", x:"The persona of the poem is a woman on her birthday."},
    {t:"conflict", d:"the struggle that drives a plot", x:"Drama needs conflict in the first five minutes."},
    {t:"compression", d:"saying much in little", x:"The poem's compression is what makes the last line land."},
    {t:"point of view", d:"the position from which a story is told", x:"The point of view of the novel is limited to one mind."},
    {t:"rhythm", d:"the beat of the language, in poetry and in prose", x:"The rhythm of the closing lines slows the reader down."},
    {t:"turn", d:"the place in a poem where the argument changes", x:"The turn comes in the last four lines."},
    {t:"witnesses", d:"those before whom a dramatic action is settled", x:"A play is settled before witnesses, which is why the ending is public."}
  ],
  quotes:[
    {q:"Sunset and evening star, / And one clear call for me!", w:"Crossing the Bar", dev:"metaphor — death as evening and a summons", why:"The comparison is what poetry can do that prose cannot: an image carries the whole argument of the poem in eleven words, and the reader accepts the calm before testing the claim."},
    {q:"Twilight and evening bell, / And after that the dark!", w:"Crossing the Bar", dev:"imagery and the movement from light to dark", why:"The pairing of the bell with the dark gives the poem an audible edge, so the calm of the opening is not complacency but a decision."},
    {q:"I thank God for the years, and for the years there are not.", w:"I Thank God — A Birthday Poem", dev:"paradox — thanks given for what has not been given", why:"The contradiction is the poem's whole argument about a birthday: that counting years is also counting what is left, and that gratitude must therefore include the loss."},
    {q:"The money is not what your father died for. It is what he lived for.", w:"A Raisin in the Sun", dev:"antithesis and repetition", why:"The sentence turns a payment into a record, and the repetition of the structure is what makes the audience accept the correction."},
    {q:"I have been a widow twice: once when he died, and once when they told me what to do about it.", w:"Lonely Days", dev:"repetition with a turn", why:"The second clause redefines the first, which is how a novelist states a theme without interrupting the story."}
  ],
  characters:[
    {n:"Fofo", w:"Faceless", d:"the street girl whose name the novel recovers"},
    {n:"Yaremi", w:"Lonely Days", d:"the widow whose exclusion is the novel's argument"},
    {n:"Bigger Thomas", w:"Native Son", d:"the young man whose fear the novel makes the reader share"},
    {n:"Mama (Lena Younger)", w:"A Raisin in the Sun", d:"the mother who decides what the money is for"},
    {n:"The speaker", w:"Crossing the Bar", d:"an old man who asks for a crossing rather than a battle"},
    {n:"The speaker", w:"I Thank God — A Birthday Poem", d:"a person counting years and finding the count double-edged"}
  ],
  themes:[
    {t:"What is owed to a life is not the same as what is paid for a death", w:"A Raisin in the Sun", ev:"‘The money is not what your father died for. It is what he lived for’"},
    {t:"A person without a name is beyond the reach of protection", w:"Faceless", ev:"the street gives her a description and keeps her name"},
    {t:"Gratitude for a life must include what that life has cost", w:"I Thank God — A Birthday Poem", ev:"thanks given ‘for the years, and for the years there are not’"},
    {t:"Death can be met as a crossing rather than a defeat", w:"Crossing the Bar", ev:"the whole poem built on the image of putting out over a bar at evening"}
  ],
  facts:[
    {q:"What is the difference between comparing and contrasting?", a:"Comparing looks for likenesses, contrasting for differences. A good answer takes one point at a time and holds both texts against it rather than listing each separately."},
    {q:"Distinguish a theme from a lesson.", a:"A theme is the idea a work holds about its subject, stated as a sentence. A lesson is what the work asks the reader to carry away and act on."},
    {q:"What can prose do that drama cannot?", a:"Report the inside of a mind, compress years into a clause, and comment through a narrator. Drama must show everything in speech and action."},
    {q:"What can poetry do that prose cannot?", a:"Concentrate a whole argument into an image and a rhythm, and make the reader feel it before testing it — which is why a poem can be learned by heart and carried."},
    {q:"What can drama do that prose and poetry cannot?", a:"Settle an action before witnesses in the present tense, so that the audience sees the decision made and cannot be told afterwards what it meant."},
    {q:"How do you choose which form to write in?", a:"If the material needs the inside of a mind, prose; if it needs one moment held still and made to mean, a poem; if it needs a decision made in front of witnesses, drama."},
    {q:"Why is a play's ending public in a way a novel's need not be?", a:"Because the action is settled before witnesses — the other characters and the audience — and the community that judges is in the room, whereas a novel can end inside one person's understanding."}
  ],
  tf:[
    {s:"A theme and a lesson are the same thing.", a:"false", why:"A theme is the idea the work holds; a lesson is what the reader is asked to carry away and act on."},
    {s:"Drama can report a character's thoughts directly.", a:"false", why:"Only if the character speaks them; drama shows speech and action, and the inside of a mind belongs to prose."},
    {s:"Poetry can carry a whole argument in a single image.", a:"true", why:"That is its economy: an image and a rhythm can state what prose would need a page to reach."},
    {s:"Comparing means listing each text separately.", a:"false", why:"That is not comparison. Take one point at a time and hold both texts against it."},
    {s:"A play ends before witnesses, including the audience.", a:"true", why:"The action is settled in public, which is why dramatic endings are verdicts as well as conclusions."},
    {s:"A narrator is needed in poetry.", a:"false", why:"A poem has a speaker or persona, not a narrator; the voice is inside the poem rather than outside it."}
  ],
  apply:[
    {q:"‘The same story would mean something different as a novel, a poem and a play.’ Demonstrate this with one story of your own choosing.", a:"Take a dispute over an inheritance. As prose, the reader is inside the heir's mind and hears the history; as a poem, one moment — the reading of the will — is held still and made to carry everything; as a play, the family must divide it in front of each other and the audience sees who speaks and who is silent."},
    {q:"Choose two set texts in different kinds and compare their treatment of the same theme.", a:"Name the theme in a sentence, take one point at a time — how the reader learns it, how long it takes, what evidence is offered, how the ending settles it — and quote from both."},
    {q:"State the lesson of one set text in a sentence a reader could act on.", a:"Not ‘the novel teaches us about widows’ but something actionable: ‘before supporting a custom, ask who is made to keep it and what it costs them to do so.’"},
    {q:"Compose one short piece in each kind on the same subject, then say in two sentences which worked best and why.", a:"Write a paragraph of prose, a short poem and a few lines of dialogue on the same subject, then judge: which form reached the material most directly, and what was lost in the others."}
  ],
  passage:{
    title:"Practice extract — three versions of one afternoon",
    text:"PROSE: She had been awake since four, which was the hour her mother had died, and by the time the bell rang for the first lesson she had already decided not to tell anybody, because telling would make it a thing that had happened, and she was not ready for it to be a thing that had happened. \n\nPOEM: The bell goes at eight. \nAt four the house turned over \nand did not turn back. \nBetween the two, a girl \nlearns to carry a day \nin the ordinary way. \n\nDRAMA: TEACHER: You are late. \nGIRL: Yes, madam. \nTEACHER: [writing] Late again, and on a Monday. \nGIRL: Yes, madam. \n[The teacher writes. The girl waits. Nobody says the other thing.] \nTEACHER: Sit down, then.",
    qs:[
      {q:"What does the prose version give that the other two cannot?", a:"It gives the inside of her mind — the hour, the decision, and the reason for it — and it can say that she was not ready for it to be a thing that had happened, which neither the poem nor the dialogue can state directly."},
      {q:"What does the poem gain by giving the hours?", a:"The two hours are set against each other with nothing in between, so the whole grief is carried by the gap between four and eight. The compression is what makes ‘a girl / learns to carry a day’ land."},
      {q:"Explain the effect of the stage direction ‘Nobody says the other thing’.", a:"It makes the audience hold the unspoken fact in the room for the length of a pause, which is what drama can do that the other forms cannot: the thing that matters is present and unspoken at the same time."},
      {q:"Which version leaves the reader or audience most informed, and which most affected? Say why.", a:"The prose leaves the reader most informed, because it can report thought directly. The drama leaves the audience most affected, because they have watched a girl be told to sit down while the news is in the room and unacknowledged — and they could not intervene."},
      {q:"Take one line from the poem and rewrite it as prose; then say what is lost.", a:"‘At four the house turned over / and did not turn back’ becomes ‘at four everything changed permanently.’ What is lost is the physical image of a house turning and the flatness of the second clause; what is gained is clarity, and the reader can judge which the passage needed."}
    ]
  },
  write:[
    {p:"Write an essay comparing one prose text and one play from the set books on their treatment of the family.", guide:"Take four points and hold both texts against each. Quote from both. Conclude on which form reaches further."},
    {p:"Compose three short pieces — a paragraph of prose, a poem of twelve lines and ten lines of dialogue — on the same moment.", guide:"Keep the moment identical. Do not let the poem explain and do not let the dialogue narrate."},
    {p:"‘The lesson of a book is more useful than its theme.’ Discuss.", guide:"Define both, take one set text, and say which a reader can act on — and what the other is for."}
  ],
  activities:[
    "In groups, compare and contrast prose, poetry and drama and present to the class",
    "Discuss and review the literary devices found in the selected works",
    "Analyse a selected work, summarize its theme and explain the lesson learned",
    "Project: write a short piece of prose, a poem and a play using literary devices"
  ],
  materials:["Faceless by Amma Darko","Lonely Days by Bayo Adebowale","Native Son by Richard Wright","A Raisin in the Sun by Lorraine Hansberry","Crossing the Bar by Alfred Tennyson","I Thank God — A Birthday Poem by Roland T. Dempster"],
  assessment:["Quizzes","Class work","Homework","Assignments","Oral presentations","Project"]
},
{
  grade:12, period:"V", sem:"Two", icon:"📝",
  title:"Reviewing Past Examination Papers (WASSCE)",
  subtitle:"Answering examination questions on content, expression, mechanics and style, with drills on the literary devices",
  outcomes:[
    "Learners are able to explore, formulate and express ideas and perceptions from past examinations"
  ],
  objectives:[
    "Answer examination questions observing content, expression, mechanics and style",
    "Apply knowledge gained from past examinations to respond effectively to future examinations",
    "Discuss past questions in prose, poetry and drama",
    "Drill for literary devices using examples"
  ],
  note:"Examination answers are marked on <b>content</b> (have you answered the question?), <b>expression</b> (is it written in continuous, correct English?), <b>mechanics</b> (spelling, punctuation, paragraphing) and <b>style</b> (is it appropriate?). All four carry marks.",
  study:[
    /* ---- course text: Semester Two, Period V — Reviewing past examination papers (guide p. 23) ---- */
    {k:"h3", t:"How an Examination Answer is Marked"},
    {k:"p", t:"WASSCE literature answers are marked on four things, and candidates lose most marks on the first."},
    {k:"bul", items:[
      "**Content** — does the answer address the actual question, with the right references and enough of them? An essay that is true but answers a different question scores very little.",
      "**Expression** — is it written in continuous prose, in sentences, with the ideas ordered? Lists, notes and half-sentences lose marks even when the content is right.",
      "**Mechanics** — spelling, punctuation, capital letters, paragraphing, and the correct spelling of the names of characters, authors and places.",
      "**Style** — is the register appropriate? Literary criticism is written in standard English, in the third person, with quotations kept short and woven into the sentence."
    ]},
    {k:"rule"},
    {k:"h3", t:"Answering the Question that was Set"},
    {k:"p", t:"Underline the **instruction word** before you write. *Discuss* means give both sides and then decide. *Compare* means take points in turn. *Analyse* means take it apart and say how it works. *Illustrate* means give examples, and the examples are the answer. *Assess* or *to what extent* means you must take a position and concede something to the other side. Then check how many **texts** the question requires: an answer on one text when two are asked for cannot score full marks, however good it is."},
    {k:"rule"},
    {k:"h3", t:"Using Evidence in an Examination"},
    {k:"p", t:"Two or three **short quotations** per paragraph are worth more than one long one. Weave them into your own sentence: ‘Lakunle's objection is about what the custom costs him — “the price of a market thing” — and never about what it means to the village.’ Never copy a passage out and hope it will do the work for you: a quotation without a comment earns nothing."},
    {k:"rule"},
    {k:"h3", t:"Drill: The Literary Devices"},
    {k:"p", t:"For the examination, know one clean example of each device from the set texts, and be able to say in one sentence what it does. Then practise in the other direction: take a line you have not prepared and name the device in it. The second exercise is the harder one, and it is the one the examination asks for."},
    {k:"p", t:"Set texts for this period: **Faceless** by Amma Darko; **Lonely Days** by Bayo Adebowale; **The Last Goodman** by Patience Swift; **She Stoops to Conquer** by Oliver Goldsmith; **Vanity** by Birago Diop; and **past WASSCE examination papers**."}
,
    {k:"rule"},
    {k:"h3", t:"The Four Heads, Worked on the Model Answer"},
    {k:"p", t:"The unit's marked answer — the extract on *Lonely Days* and the community's responsibility — is worked through the four heads, so the marking can be seen doing its work on the answer the paper sets:"},
    {k:"num", items:[
      "**The content — does the answer address the question?** The question: the community more responsible for the suffering than any single character. The answer: Yaremi suffers twice, and the second suffering is the community's — the death nobody caused, and the mourning imposed; the man who says 'it is the custom' is not cruel — the novel is careful to say that he wept at the graveside — and that is precisely the point; the rules everybody keeps and nobody has to answer for. The content addresses the question, and the question's words — the community, the single character, the responsibility — are the answer's words.",
      "**The expression — the continuous prose, the ideas ordered?** The answer is in the sentences, the paragraphs ordered: the first suffering, the second, the man who says, the rules, the silent question. No list, no note, no half-sentence; the expression is the continuous prose, and the prose is the ideas in the order the argument takes.",
      "**The mechanics — the spelling, the punctuation, the names?** Yaremi, Adebowale, the custom — the names spelled, the punctuation kept, the paragraphs marked. The mechanics is the invisible mark, and the loss is the name misspelled, and the name is the reference the mark sits on.",
      "**The style — the register, the quotations, the person?** The standard English, the third person, the quotation short and woven — 'it is the custom' in the sentence, and the comment after. The style is the register, and the register is the criticism's, not the conversation's."
    ]},
    {k:"p", t:"The four heads, worked on the one answer, and the head is the mark: the content the question addressed, the expression the prose, the mechanics the names, the style the register. The candidate who can mark the answer with the four heads can mark their own, and the own marking is the check that is the five minutes at the end of the paper."},
    {k:"table", head:["The instruction word","The demand","The plan it gives","The loss that misses it"], rows:[
     ["Discuss","the two sides, and the decision","the case to present, the case to reject, the decision","the one side only, and the decision absent"],
     ["Compare","the points taken in turn","the point, the likeness, the difference, the reference","the two summaries, and the point absent"],
     ["Analyse","the taking apart, and the how","the device, the quotation, the effect, the service","the summary, and the how absent"],
     ["Illustrate","the examples — the examples are the answer","the three examples, each with the comment","the statement, and the example absent"],
     ["Assess / to what extent","the position, and the concession","the position stated, the concession made, the holding","the position without the concession, or the reverse"]]},
    {k:"p", t:"The table is the answer to the question's first word: the word underlined, the demand named, the plan given, and the loss that misses it the one avoided. The instruction word is the question's verb, and the verb is the demand — and the demand missed is the content lost, because the content is the question addressed, and the question is the verb."},
    {k:"h3", t:"The Evidence, Woven: the Bad and the Good"},
    {k:"p", t:"The unit's rule — two or three short quotations per paragraph are worth more than one long one, and the quotation is woven into the sentence — is worked on the bad and the good:"},
    {k:"num", items:[
      "**The bad — the passage copied, and the hope.** The candidate copies the paragraph of the novel and hopes the passage will do the work. The passage without the comment earns nothing — the reference is the quotation, and the comment is where the mark is, and the copied passage is the reference without the comment.",
      "**The good — the short quotation, the woven comment.** 'Lakunle's objection is about what the custom costs him — \"the price of a market thing\" — and never about what it means to the village.' The quotation short, in the sentence, and the comment after: the objection named, the cost the quotation, and the meaning the comment. The mark is the comment, and the comment is the candidate's own.",
      "**The rule — the paragraph's shape.** One paragraph, one point, the point's evidence, and the evidence's comment: the point the sentence, the evidence the quotation, and the comment the saying of what the quotation shows. The shape is the paragraph, and the paragraph is the mark."
    ]},
    {k:"p", t:"The weaving is the skill: the quotation in the sentence, the comment after, and the paragraph the shape. The long quotation is the loss — the time spent on the copying, and the comment absent — and the short quotation is the gain, the comment the mark."},
    {k:"h3", t:"The Drill: the Device, the Quotation, the Effect"},
    {k:"p", t:"The unit's drill — know one clean example of each device from the set texts, and be able to say in one sentence what it does — is worked on the period's set, so the drill can be carried into the paper: the **paradox** of 'She had been a wife for twenty-two years and a widow for eleven days, and the second was longer' — the time measured by the weight rather than the clock, and the widowhood the experience; the **irony of situation** of 'It is the custom,' said by the man who was not cruel — the cruelty located in the custom rather than the man, which is the harsher judgement because it is harder to escape; the **proverb** of 'Ask me no questions and I'll tell you no fibs' — the refusal the information the plot needs, and the joke at the expense of the asker; the **metaphor** of 'I'll pour this pestilence into his ear' — the language made a physical act, and the murder begun at the speaking; the **refrain** of 'Rage, rage against the dying of the light' — the plea that accumulates rather than develops, and the accumulation the form."},
    {k:"p", t:"The drill is the device with the quotation and the effect in the one sentence, and the one sentence is the mark. The harder exercise is the reverse — the line unprepared, and the device named in it — and the reverse is what the paper asks, because the paper's line is the unseen, and the unseen is named by the test, and the test is the year's drill."},
    {k:"h3", t:"The Liberian Ground: the Three Papers, the Four Heads"},
    {k:"p", t:"The WASSCE's literature is the three papers — **Paper 1** the fifty objective questions, the hour, fifty marks; **Paper 2** the two sections of the prose, the hour and a quarter, fifty marks; **Paper 3** the four sections of the drama and the poetry, the two hours and a half, a hundred marks. The four heads — the content, the expression, the mechanics, the style — are the marks of the two essay papers, and the objective paper is the content and the mechanics: the question addressed, and the name exact. The Liberian candidate carries the four heads into the two papers, and the heads are the year's drill at the paper's scale."},
    {k:"p", t:"The set texts of the period — **Faceless, Lonely Days, The Last Goodman, She Stoops to Conquer, Vanity**, and the past WASSCE examination papers — are the reference the four heads are worked on, and the past papers are the drill's ground: the question set, the answer marked, and the mark the head. The candidate who has marked the past answer with the four heads has the check that is the five minutes, and the five minutes is the paper's last."},
    {k:"rule"},
    {k:"h3", t:"The Mark Scheme, Worked on a Four-Mark Question"},
    {k:"p", t:"The unit's four heads are worked on a four-mark question of the kind the paper sets, so the marking can be seen point by point: **Identify two literary devices in the passage and explain their effect (4 marks)** — two marks per device, one for the identification and the quotation, one for the effect."},
    {k:"num", items:[
      "**Mark one of the first two — the device named and quoted.** 'The road does not thank him' — the device is the **personification**, the road given the power to thank, and the quotation is the words that carry it. The mark is the identification with the reference, and the reference is the quotation woven into the sentence, not the line copied.",
      "**Mark two of the first two — the effect stated.** The neglect is made a deliberate refusal rather than an oversight, and the refusal is the grievance the poem argues. The mark is the effect in the one sentence, and the sentence is the candidate's — the effect stated, not the device repeated.",
      "**The second device, the same two marks.** 'Thirty years of service and the letter says: retired' — the **understatement**, the flatness of the official language against the life; the effect — the disproportion felt, the life set against the clause, and the anger the flatness makes. The two marks, and the two are the identification and the effect, and the effect is where the mark is kept.",
      "**The marks lost, the candidates' losses.** The device named without the quotation loses the first mark of the pair; the quotation without the effect loses the second; the effect without the device loses both, because the effect is the device's, and the device is what the question set."
    ]},
    {k:"p", t:"The mark scheme rewards the point and the evidence together, and the together is the weaving: the device in the sentence, the quotation in the sentence, the effect after. The four marks are the two devices and the two effects, and the two effects are the two sentences that keep the marks — the sentences that are the candidate's, and the candidate's are where the mark is."},
    {k:"h3", t:"The Past Papers, the Drill's Ground"},
    {k:"p", t:"The past WASSCE examination papers are the drill's ground, and the ground is worked in three moves: the question read for its **instruction word** and its **number of texts**; the answer planned for its **points and the reference for each**; the answer checked with the **four heads** — the content the question addressed, the expression the continuous prose, the mechanics the names, the style the register. The three moves are the year's method at the paper's scale, and the scale is the difference between the drill and the paper."},
    {k:"p", t:"The set texts of the period are the reference the past papers set: **Faceless** and **Lonely Days** for the prose sections, **She Stoops to Conquer** for the drama, **Vanity** for the poetry, and **The Last Goodman** for the non-African prose — each with the one sentence the review has built, and the one sentence is the plan's first point. The candidate who has worked the past papers with the three moves has the drill done at the scale, and the scale is the paper."},
    {k:"h3", t:"Common Mistakes in This Unit"},
    {k:"bul", items:[
      "Not **underlining the instruction word** before the writing. The word is the demand — the discuss, the compare, the analyse, the illustrate, the assess — and the demand missed is the content lost, because the content is the question addressed.",
      "Answering on **one text when two are asked for**. The question's number is the demand — one, two, or any two — and the answer on the one is the half the paper will not make whole, however good the one.",
      "The **long quotation without the comment**. The copied passage is the reference without the comment, and the comment is where the mark is — the short quotation woven, and the comment after.",
      "The **list, the note, the half-sentence** in the essay. The expression is the continuous prose, and the list is the prose's absence — the mark lost on the shape, and the shape the paragraph.",
      "The **first person** in the criticism. The style is the standard English, the third person — the criticism's register, not the conversation's — and the register is the style the head marks.",
      "The **name misspelled** — Yaremi, Fofo, Marlow, Kate Hardcastle, Bigger Thomas, Senghor, Diop, Adebowale, Darko — and the mechanics loss on the reference that is the name."
    ]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**The instruction word, decoded before the writing** — the word underlined, the demand named, the plan given, and the loss that misses it the one avoided",
      "**The texts, the number the question asks for** — one, two, or any two, and the answer on the number the question set, not the number the candidate hoped for",
      "**The evidence, woven** — the short quotation in the sentence, the comment after, and the paragraph the shape: the point, the evidence, the comment",
      "**The four heads, the check at the end** — the content the question, the expression the prose, the mechanics the names, the style the register; the five minutes the paper's last",
      "**The device, the drill** — the device named, the quotation the words, the effect the one sentence, and the work the contribution to the set text",
      "**The objective paper, the content and the mechanics** — the question addressed in the line, and the name exact in the fifty; the unseen passage and the unseen poem the method the year has built"
    ]},  ],
  terms:[
    {t:"content", d:"whether the answer addresses the question set, with the right references", x:"The content is right but the answer does not address the question."},
    {t:"expression", d:"whether the answer is written in ordered, continuous sentences", x:"The expression is clear and the paragraphs are ordered."},
    {t:"mechanics", d:"spelling, punctuation, capitalisation and paragraphing", x:"Marks for mechanics include the spelling of the authors' names."},
    {t:"style", d:"the appropriateness of the register and of the way quotations are used", x:"The style is standard English, in the third person."},
    {t:"instruction word", d:"the verb in the question that tells you what to do — discuss, compare, analyse", x:"Underline the instruction word before you begin."},
    {t:"discuss", d:"give both sides of a question and then decide between them", x:"Discuss means you must present a case you are going to reject."},
    {t:"compare", d:"take points in turn and hold both texts against each", x:"Compare means points, not separate summaries."},
    {t:"analyse", d:"take the writing apart and say how it works", x:"Analyse means naming the device and quoting the words."},
    {t:"illustrate", d:"support an answer with examples, the examples being the point", x:"Illustrate means three examples, each with a comment."},
    {t:"assess", d:"take a position and concede something to the other side", x:"‘To what extent’ requires both a position and a concession."},
    {t:"quotation", d:"the exact words of the text, kept short and woven into your own sentence", x:"A short quotation with a comment beats a long one with none."},
    {t:"comment", d:"what you say about a quotation after giving it", x:"The comment is where the mark is: never leave a quotation standing alone."}
  ],
  quotes:[
    {q:"She had been a wife for twenty-two years and a widow for eleven days, and the second was longer.", w:"Lonely Days", dev:"paradox — a shorter period called longer", why:"For the examination: name the device (paradox), quote the words, then say what it does — it measures time by weight rather than by the clock, so the reader is given the widowhood as an experience."},
    {q:"‘It is the custom,’ her husband's brother said, and he was not a cruel man.", w:"Lonely Days", dev:"irony of situation and understatement", why:"For the examination: the cruelty is located in the custom rather than in the man, which is a harsher judgement because it is harder to escape."},
    {q:"Ask me no questions and I'll tell you no fibs.", w:"She Stoops to Conquer", dev:"proverb, used to refuse information", why:"For the examination: the refusal is itself the information the plot needs, and the joke is at the expense of the person who asks."},
    {q:"I'll pour this pestilence into his ear.", w:"Othello", dev:"metaphor — words as poison poured", why:"For the examination: the figure makes language a physical act, so the audience understands that the murder begins at the moment of speaking, not at the moment of the deed."},
    {q:"Rage, rage against the dying of the light.", w:"Do Not Go Gentle into That Good Night", dev:"refrain, repetition and alliteration", why:"For the examination: the refrain returns four times and closes the poem, so the plea accumulates rather than develops — which is what a plea to a dying man would sound like."}
  ],
  characters:[
    {n:"Yaremi", w:"Lonely Days", d:"the widow whose exclusion is the novel's argument — the character most often set in WASSCE questions"},
    {n:"Fofo", w:"Faceless", d:"the street girl whose name and history the novel recovers"},
    {n:"Marlow", w:"She Stoops to Conquer", d:"the gentleman who cannot speak to a lady of his own class"},
    {n:"Kate Hardcastle", w:"She Stoops to Conquer", d:"the woman who stoops in order to be loved for herself"},
    {n:"The speaker", w:"Vanity", d:"the voice that watches a woman adorn herself and counts the cost"},
    {n:"The Goodman", w:"The Last Goodman", d:"the figure whose goodness is tested by what it costs him"}
  ],
  themes:[
    {t:"A community's care for a widow is arranged for its own order", w:"Lonely Days", ev:"the rites of mourning imposed as a duty rather than offered as help"},
    {t:"A child without a name is beyond the reach of protection", w:"Faceless", ev:"the street gives her a description and keeps her name"},
    {t:"Affectation is a greater obstacle to love than class", w:"She Stoops to Conquer", ev:"Marlow is at ease only with a woman he believes beneath him"},
    {t:"Vanity is a form of labour, and it is paid for", w:"Vanity", ev:"the poem's counting of what adornment takes"}
  ],
  facts:[
    {q:"Name the four things on which an examination answer is marked.", a:"Content (does it answer the question set, with the right references), expression (ordered, continuous sentences), mechanics (spelling, punctuation, capitalisation, paragraphing) and style (an appropriate register, with short quotations woven in)."},
    {q:"What does each instruction word require: discuss, compare, analyse, illustrate, assess?", a:"Discuss — both sides, then a decision. Compare — points taken in turn against both texts. Analyse — take it apart and say how it works. Illustrate — examples, which are the answer. Assess or ‘to what extent’ — a position and a concession."},
    {q:"Why does an answer that is true sometimes score very low?", a:"Because it answers a different question. Content is marked against the question set, not against the subject."},
    {q:"How many quotations should a paragraph carry, and what must follow each?", a:"Two or three short ones, each woven into your own sentence and followed by a comment. A quotation without a comment earns nothing."},
    {q:"What is the commonest mechanical error in literature answers?", a:"Mis-spelling the names of characters, authors and places — an error that costs marks in every paragraph and is entirely avoidable."},
    {q:"How should quotations be introduced?", a:"Briefly and in your own words: ‘Lakunle's objection is about what the custom costs him — “the price of a market thing” — never about what it means to the village.’ Never copy out a passage and leave it to do the work."},
    {q:"Why is it worth knowing one clean example of each device from the set texts?", a:"Because the examination asks for the device in an unprepared line. Knowing one example of each makes the second exercise — naming the device in a line you have not prepared — possible under pressure."}
  ],
  tf:[
    {s:"An answer that is true but answers a different question scores well.", a:"false", why:"Content is marked against the question set. Truth about the subject is not the same as relevance to the question."},
    {s:"Lists and notes lose marks even when the content is correct.", a:"true", why:"Expression is marked separately: the answer must be in continuous prose, in ordered sentences and paragraphs."},
    {s:"A long quotation is worth more than two short ones.", a:"false", why:"Two or three short quotations, each with a comment, are worth more. A copied passage without comment earns nothing."},
    {s:"‘Discuss’ means give one side of the argument clearly.", a:"false", why:"Discuss means give both sides and then decide between them — including the side you are going to reject."},
    {s:"Mis-spelling a character's name costs marks.", a:"true", why:"Mechanics are marked, and the spelling of names is the commonest avoidable error in literature scripts."},
    {s:"‘Illustrate’ means the examples are the answer.", a:"true", why:"The instruction asks for instances; each instance must be given with a comment on what it shows."}
  ],
  apply:[
    {q:"Examination question: ‘Discuss the view that the village, not any individual, is responsible for the widow's suffering in the novel you have studied.’ Plan the answer.", a:"Introduction: state that the suffering has two authors — the death and the rules — and that the second is the village's. Paragraph 1: the rites, quoting ‘It is the custom’ and commenting on who performs them. Paragraph 2: the exclusion from the market, quoting the six moons and commenting on whose livelihood it is. Paragraph 3: the objection — no individual is cruel — and the answer, that this is precisely the charge. Conclusion: restate and concede that the widow's own silence is part of how the custom works."},
    {q:"Examination question: ‘Compare the treatment of pride in two set texts.’ Plan the answer.", a:"State the theme in a sentence. Take four points in turn — what the character is proud of, what the pride costs, who sees it for what it is, and how the ending judges it — and hold both texts against each point, quoting from both. Conclude on which treatment is the harsher and why."},
    {q:"Examination question: ‘Analyse the use of imagery in the poem you have studied.’ Write the first paragraph.", a:"Name the central image and where it first appears, quote the words, say what sense it appeals to and what mood it builds, then show where the image returns and what it has accumulated. Do not paraphrase the poem."},
    {q:"Drill: take an unprepared line from a set text, name the device, and say in one sentence what it does.", a:"Work in three moves: name the device; quote the words that carry it; state the effect in one sentence. Then check the sentence for content (does it say what the device does?), expression (is it a full sentence?), mechanics (spelling of names) and style (standard English, third person)."}
  ],
  passage:{
    title:"Practice extract — a WASSCE-style question and a marked answer",
    text:"QUESTION (25 marks): With reference to one African novel you have studied, discuss the view that the community is more responsible for the suffering of the individual than any single character is. \n\nCANDIDATE'S ANSWER (extract): \n\nIn Bayo Adebowale's Lonely Days, the widow Yaremi suffers twice, and the second suffering is the community's. The first is the death of her husband, which nobody caused. The second is the mourning that is imposed on her: she is shaved, she is kept from the market for six moons, and she is told, in the words of her husband's brother, that ‘it is the custom’. The man who says this is not cruel — the novel is careful to say that he wept at the graveside — and that is precisely the point. \n\nNobody in the village hates Yaremi. What the novel shows instead is a set of rules that everybody keeps and nobody has to answer for, so the cruelty is done without anybody intending it and cannot be apologised for by anybody. When she asks — silently — ‘and if I walk now?’, the question is never put aloud, because the custom works by keeping such questions unasked. It is for this reason that the community, and not any individual, must be held responsible.",
    qs:[
      {q:"Identify the instruction word in the question and say what it requires.", a:"‘Discuss’ — the answer must present both sides (the community's responsibility and the individual's) and then decide between them, not merely assert one."},
      {q:"How does the answer handle the objection that no individual is cruel?", a:"It raises the objection itself — the brother wept at the graveside, nobody hates her — and then answers it: the cruelty is done without intention, which is what makes it impossible to apologise for and therefore a communal responsibility rather than a personal one."},
      {q:"Assess the use of evidence in the first paragraph.", a:"It gives one short quotation, ‘it is the custom’, woven into the candidate's own sentence and followed by a comment on who speaks it and how the novel presents him. That is the correct pattern; two or three such quotations in a paragraph would be better than one."},
      {q:"Give one strength and one weakness of the answer as written.", a:"Strength: it separates the two sufferings and so answers the question rather than describing the novel. Weakness: it draws on only one part of the text, and an answer of this length should carry at least two extended references — the shaving, the exclusion from the market, and the closing question are named but not quoted."},
      {q:"What mark would you award out of 25, and on what grounds?", a:"Any mark defended on the four criteria is acceptable: high for content (the question is answered and both sides are handled), good for expression (continuous prose, ordered paragraphs), sound for mechanics, and good for style — with the deduction for thinness of evidence in the middle of the answer."}
    ]
  },
  write:[
    {p:"WASSCE practice: ‘Assess the view that the most damaging characters in the novel you have studied are those who mean well.’ Write a full answer in continuous prose.", guide:"Plan for five minutes: instruction word, position, two concessions, three references with comments. Write for forty minutes."},
    {p:"WASSCE practice: ‘Compare the presentation of authority in two set texts.’ Write a full answer.", guide:"Take four points and hold both texts against each. Do not write two separate essays."},
    {p:"Drill sheet: for each of twelve devices, write one line from a set text and one sentence on what it does.", guide:"Devices: simile, metaphor, personification, imagery, symbolism, irony, hyperbole, alliteration, onomatopoeia, oxymoron, allusion, foreshadowing."}
  ],
  activities:[
    "Review past WASSCE examinations, especially on how to answer public test questions",
    "Discuss the literary devices met in the set texts",
    "Review and discuss questions in prose, poetry and drama",
    "Review and discuss themes, characters, exposition, tone and mood",
    "Review the mechanics, diction and styles used in the answers",
    "Review and discuss the literary devices with examples"
  ],
  materials:["Faceless by Amma Darko","Lonely Days by Bayo Adebowale","The Last Goodman by Patience Swift","She Stoops to Conquer by Oliver Goldsmith","Vanity by Birago Diop","Past WASSCE examination papers"],
  assessment:["Quizzes","Class work","Homework","Assignments","Oral presentations","Debates"]
},
{
  grade:12, period:"VI", sem:"Two", icon:"🎓",
  title:"More Review: Past Papers, Prose, Poems and Drama",
  subtitle:"Analysing examination questions, summarizing any poem, novel or play, and using literary devices under examination conditions",
  outcomes:[
    "Learners are able to analyze test questions and demonstrate skills in examination"
  ],
  objectives:[
    "Answer examination questions observing content, expression, mechanics and style",
    "Analyze past examination questions",
    "Summarize any given poem, novel and play",
    "Utilize literary devices effectively"
  ],
  note:"A <b>summary</b> is the argument of a work in your own words, in the order that makes it clearest, with nothing added. It is not a description, and it is not a list of events.",
  study:[
    /* ---- course text: Semester Two, Period VI — More review with past papers, prose, poems and drama (guide p. 24) ---- */
    {k:"h3", t:"Analysing the Question Before You Write"},
    {k:"p", t:"Spend the first five minutes on the question itself. Three checks. One: the **instruction word** — discuss, compare, analyse, illustrate, assess. Two: the **number of texts** required — one, two, or ‘any two’. Three: the **key term** in the quotation you are given — which word is doing the work, and can you define it? If a question calls a character ‘tragic’, you must say what you take tragic to mean before you can agree or disagree."},
    {k:"rule"},
    {k:"h3", t:"Summarizing a Poem, a Novel or a Play"},
    {k:"p", t:"To **summarize** a work you must be able to say what it argues. For a **poem**: the subject in a sentence, who speaks, the devices, the turn, the theme. For a **novel**: the situation, the want of the main character, the obstacle, the climax, and what changes by the end. For a **play**: the same, with the addition of who bears the cost in front of whom. In every case: your own words, the order that makes the argument clearest, and nothing added from outside."},
    {k:"rule"},
    {k:"h3", t:"Under Examination Conditions"},
    {k:"p", t:"Plan for five minutes, write for forty, check for five. In the check, read only for **mechanics** and for the question: have you named the author, spelled the characters correctly, kept every quotation short, and answered the question that was set rather than the one you hoped for? One paragraph per point, in order, with a conclusion that restates the position rather than repeating the introduction."},
    {k:"rule"},
    {k:"h3", t:"The Last Drill on Devices"},
    {k:"p", t:"Take a line at random from any set text and work through it in four moves: name the **device**; quote the **words** that carry it; state the **effect** in one sentence; and say what it contributes to the **work**. If you can do that with any line, unprepared, you are ready."},
    {k:"p", t:"Set texts for this period: **Faceless** by Amma Darko; **Lonely Days** by Bayo Adebowale; **Native Son** by Richard Wright; **She Stoops to Conquer** by Oliver Goldsmith; **A Raisin in the Sun** by Lorraine Hansberry; and **past WASSCE examination papers**."}
,
    {k:"rule"},
    {k:"h3", t:"The Question, Analysed in the Five Minutes"},
    {k:"p", t:"The unit's three checks are worked on the period's closing question — 'The most memorable characters in literature are those who never say what they want. With reference to two texts, discuss this view.' — so the five minutes can be seen doing its work:"},
    {k:"num", items:[
      "**The instruction word — discuss.** The demand: the two sides, and the decision. The plan: the case for the silence, the case against, and the holding — the truth not that the memorable are silent, but that they are memorable when something is withheld, whether it is a want, a reason or a fact.",
      "**The number of texts — two.** The demand: two texts, and the two are the references. The plan: Lonely Days for the silence the novel can show — Yaremi's 'and if I walk now?' given as the thought, not the speech; and A Raisin in the Sun for the silence the stage must make by the body — Mama's envelope on the table, the direction that nobody touches it, the want in the room for the length of the pause.",
      "**The key term — memorable.** The demand: the term defined before the agreement. The plan: the memorable named as the character the reader is left holding — the question the village never hears, the want the room supplies — and the definition is the first sentence of the answer, because the agreement and the disagreement are both made with the definition."
    ]},
    {k:"p", t:"The five minutes, the three checks, and the question is the answer's shape: the discuss the two sides and the decision, the two the texts, and the memorable the term defined. The candidate who has the three checks before the writing has the paper's first five minutes done, and the five minutes is the ten marks of the wandering saved — the saving is the plan, and the plan is the shape."},
    {k:"h3", t:"The Summary, Worked on the Three Kinds"},
    {k:"p", t:"The unit's rule — the summary is the argument of a work in the own words, in the order that makes it clearest, with nothing added — is worked on the three kinds, one each, so the summary can be seen in each form:"},
    {k:"num", items:[
      "**The poem — Piano and Drums.** The subject in a sentence: the poet caught between the drum of his ancestry and the piano of the school. The speaker: the poet, the one caught. The devices: the imagery of the blood rippling with the drum, the metaphor of the room the argument is in. The turn: the speaker made the room, the argument carried without resolved. The theme: the two inheritances felt in the body at once, and the middle the honest ending.",
      "**The novel — Lonely Days.** The situation: the widow in the village, the mourning regulated by people who are not grieving. The want: the widow's — the survival, and the name, and the market she sold pepper in for nineteen years. The obstacle: the custom — the shaving, the ban, the six moons. The climax: the question unasked — 'and if I walk now?' — the withholding made the condition. The change: the field gone back to grass, and the widow the one who thought of him for the six moons.",
      "**The play — A Raisin in the Sun.** The situation: the household, the insurance money, the deferred dream. The want: Walter Lee's — to be something, to feel he could have been something. The obstacle: the money's cost, and the decision the household must make. The climax: the deal that nearly costs the family everything, and the money's spending. The change: the move, and the dream opened by the decision — and the cost borne in front of the family, the witnesses the room."
    ]},
    {k:"p", t:"The three summaries, the argument in the own words, and the order the clearest: the poem's subject-speaker-device-turn-theme, the novel's situation-want-obstacle-climax-change, and the play's the same with the cost and the witnesses. The summary is not the description, and it is not the list of the events — the argument is the summary, and the argument is the what-it-says, and the what-it-says is what the question will set."},
    {k:"h3", t:"Under the Conditions: the Five, the Forty, the Five"},
    {k:"p", t:"The unit's plan — plan for five minutes, write for forty, check for five — is worked as the candidate's own rule for the essay paper, so the conditions can be seen doing their work:"},
    {k:"num", items:[
      "**The first five — the plan.** The question's three checks: the instruction word, the number of texts, the key term. The points in the order: the first, the second, the third. The reference for each: the quotation the candidate has, and the comment the candidate will say. The five minutes is the plan, and the plan is the shape the forty will fill.",
      "**The forty — the writing.** One paragraph per point, in the order, and the paragraph the shape: the point the sentence, the evidence the quotation, the comment the saying. The continuous prose, the standard English, the third person, and the quotation short and woven. The forty is the filling, and the filling is the plan's shape.",
      "**The last five — the check.** Read for the mechanics and for the question: the author named, the characters spelled, the quotation short, and the question the one set, not the one hoped for. The conclusion the position restated, not the introduction repeated. The five is the checking, and the checking is the four heads: the content, the expression, the mechanics, the style."
    ]},
    {k:"p", t:"The five, the forty, the five — and the paper is the plan's shape filled and checked. The condition is the time, and the time is the rule: the five that saves the ten marks of the wandering, the forty that fills the shape, and the five that finds the head the mark is in."},
    {k:"h3", t:"The Last Drill on the Devices, the Four Moves"},
    {k:"p", t:"The unit's four moves — name the device, quote the words, state the effect, say the contribution — are worked on a line taken at random from the set texts, so the drill can be carried into the paper with the moves already done once:"},
    {k:"num", items:[
      "**The line, at random.** 'I am invisible, understand, simply because people refuse to see me.' — the first line of *The Invisible Man* (Ralph Ellison), and the line the paper could set on the unseen.",
      "**The device, named.** The paradox and the metaphor — the invisibility the social fact, and the fact the refusal of the others to look; the paradox states the theme, and the metaphor is the theme's shape.",
      "**The effect, in the one sentence.** The reader is made to feel the refusal rather than hear of it — the invisibility is not the physical, and the not-seen is the not-looked, and the gap is the novel's argument in the one line.",
      "**The contribution, to the work.** The line is the novel's first, and the first is the whole: the basement lit by the 1,369 light bulbs is the line's paying, and the line's theme is the novel's, from the first to the last."
    ]},
    {k:"p", t:"The four moves, the line at random, and the drill is the readiness: the device the name, the words the quotation, the effect the one sentence, and the contribution the work. The candidate who can do the four on any line, unprepared, is ready — and the ready is the paper's first five minutes, and the five is the plan that saves the wandering."},
    {k:"h3", t:"The Liberian Ground: the Whole Sitting, Rehearsed"},
    {k:"p", t:"The WASSCE's literature is the whole sitting — **Paper 1**, the fifty objective questions, the hour, fifty marks; **Paper 2**, the two sections of the prose, the hour and a quarter, fifty marks; **Paper 3**, the four sections of the drama and the poetry, the two hours and a half, a hundred marks. The whole sitting is the year's review in the one day: the general knowledge and the unseen and the context in the hour; the African and the non-African prose in the hour and a quarter; and the four sections of the drama and the poetry in the two hours and a half."},
    {k:"p", t:"The Liberian candidate rehearses the sitting in the year's work — the one sentence for each set text, the device and the reference for each, the four heads for the essay, and the four moves for the device. The rehearsal is the review, and the review is Grade 12's whole: Grade 10's elements, Grade 11's kinds, and Grade 12's papers — and the papers are the year's work in the one day, and the one day is the sitting the candidate has rehearsed. The candidate who has the one sentence for each text, with the device and the reference, walks into the sitting with the papers already half answered, and the half is the year, and the year is the rehearsal."},
    {k:"h3", t:"Common Mistakes in This Unit"},
    {k:"bul", items:[
      "**Skipping the five minutes** of the plan. The plan is the shape the forty will fill, and the shape skipped is the wandering the ten marks of — the five that saves is the five spent, and the spent is the paper's first.",
      "The **summary that adds the events not in the work**. The summary is the argument in the own words, and nothing added from outside — the added event is the candidate's, and the candidate's is not the work's.",
      "The **conclusion that repeats the introduction**. The conclusion is the position restated — the holding of the discuss, the decision of the assess — and the repeat is the restatement's absence.",
      "The **device named without the effect**. The four moves are the name, the words, the effect, the contribution — and the name without the effect is the device lost, because the effect is the doing the device does.",
      "The **summary as the list of the events**. The list is the what-happened, and the summary is the what-it-argues — the argument the summary, and the events the description the summary is not.",
      "Getting the names wrong — **Yaremi, Fofo, Bigger, Mama, Walter Lee, Marlow**, the **narrator of the Invisible Man**, **Hansberry, Adebowale, Darko, Wright, Ellison** — and the mechanics loss on the reference that is the name."
    ]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**The whole sitting, the rehearsal** — the three papers, the times and the marks: the hour and fifty, the hour and a quarter and fifty, the two hours and a half and a hundred; the sitting the year's work in the one day",
      "**The question, the three checks in the five** — the instruction word, the number of texts, the key term; the checks the plan, and the plan the shape the forty fills",
      "**The summary, the three kinds** — the poem's subject-speaker-device-turn-theme, the novel's situation-want-obstacle-climax-change, the play's the same with the cost and the witnesses",
      "**The conditions, the five, the forty, the five** — the plan the five, the writing the forty, the check the five; the heads the check's work, and the check the paper's last",
      "**The device, the four moves on any line** — the name, the words, the effect, the contribution; the unprepared line the readiness, and the readiness the paper's first",
      "**The set character, the two prepared references** — Yaremi the widow, Fofo the street girl, Bigger the fear, Mama the decision — each with the two references ready, and the reference the mark"
    ]},  ],
  terms:[
    {t:"summary", d:"the argument of a work in your own words, in the clearest order, with nothing added", x:"The summary gives the argument, not the events."},
    {t:"key term", d:"the word in a question that carries the argument and must be defined", x:"In ‘a tragic hero’, the key term is tragic."},
    {t:"planning", d:"spending the first minutes deciding the position and the order of points", x:"Five minutes of planning is worth ten marks of wandering."},
    {t:"conclusion", d:"the closing paragraph, which restates the position rather than repeating the introduction", x:"The conclusion states what has been proved."},
    {t:"paragraph", d:"one point, its evidence and its comment", x:"One paragraph, one point: no more and no less."},
    {t:"evidence", d:"the reference to the text that supports a point", x:"Each point carries its evidence and a comment on it."},
    {t:"comment", d:"what you say about the evidence after giving it", x:"Without the comment the quotation earns nothing."},
    {t:"register", d:"the level of formality appropriate to the writing", x:"Literary criticism is written in standard English, in the third person."},
    {t:"cohesion", d:"the way the sentences and paragraphs hold together", x:"Cohesion comes from ordering the points, not from adding connectives."},
    {t:"revision", d:"going back over written work to improve it", x:"Revision means rewriting, not rereading."},
    {t:"proof-reading", d:"checking written work for errors of mechanics", x:"Proof-read for spelling, especially of names."},
    {t:"mark scheme", d:"the list of points and criteria by which an answer is marked", x:"The mark scheme rewards the point and the evidence together."}
  ],
  quotes:[
    {q:"I am invisible, understand, simply because people refuse to see me.", w:"The Invisible Man", dev:"paradox and metaphor", why:"Drill: name the device, quote the words, state the effect — the paradox makes invisibility a social fact rather than a physical one, which is the novel's theme in one line."},
    {q:"The money is not what your father died for. It is what he lived for.", w:"A Raisin in the Sun", dev:"antithesis and repetition", why:"Drill: the repeated structure turns a payment into a record, and the audience accepts the correction because of the shape of the sentence."},
    {q:"A harvest sown in the dark is reaped in the light.", w:"Harvest of Corruption", dev:"proverb used as metaphor", why:"Drill: the proverb states the play's verdict in a form the community recognises, so the audience knows the ending before the plot delivers it."},
    {q:"The caged bird sings / with a fearful trill / of things unknown / but longed for still.", w:"Caged Bird", dev:"symbolism and irony", why:"Drill: the song is not joy but longing, so the symbol carries the argument that the captive is defined by what is refused."},
    {q:"Naked woman, black woman / Clothed with your colour which is life.", w:"Black Woman", dev:"paradox and apostrophe", why:"Drill: the contradiction praises rather than confuses, and reverses the gaze that saw nakedness as absence."}
  ],
  characters:[
    {n:"Yaremi", w:"Lonely Days", d:"the widow — the set character most often asked about, and the one to have two prepared references for"},
    {n:"Fofo", w:"Faceless", d:"the street girl whose name the novel recovers"},
    {n:"Bigger Thomas", w:"Native Son", d:"the young man whose fear the novel makes the reader share"},
    {n:"Mama (Lena Younger)", w:"A Raisin in the Sun", d:"the mother who decides what the money is for"},
    {n:"Marlow", w:"She Stoops to Conquer", d:"the gentleman who cannot speak to a lady of his own class"},
    {n:"The narrator", w:"The Invisible Man", d:"the unnamed speaker whose invisibility is a social fact"}
  ],
  themes:[
    {t:"A community's rules are judged by who pays for them", w:"Lonely Days", ev:"the rites of mourning are kept by everybody and paid for by one woman"},
    {t:"What a society refuses to see, it will pay for", w:"The Invisible Man", ev:"invisibility defined as the refusal of others to look"},
    {t:"A deferred dream may dry up or be opened", w:"A Raisin in the Sun", ev:"the insurance money and what the family decides to do with it"},
    {t:"Fear makes a man before the law does", w:"Native Son", ev:"the conditions are given before the acts are"}
  ],
  facts:[
    {q:"Give the three checks to make on an examination question before you write.", a:"The instruction word (discuss, compare, analyse, illustrate, assess); the number of texts required; and the key term in the question or quotation, which you must define before you can answer."},
    {q:"How do you summarize a poem?", a:"The subject in a sentence, who speaks, the devices, the turn, and the theme — in your own words, in the order that makes the argument clearest, with nothing added."},
    {q:"How do you summarize a novel?", a:"The situation, the want of the main character, the obstacle, the climax, and what has changed by the end — with the same rule: your own words, the clearest order, nothing added."},
    {q:"How do you summarize a play?", a:"As for a novel, with the addition of who bears the cost and before whom — because a dramatic action is settled in front of witnesses, including the audience."},
    {q:"How should the examination hour be divided?", a:"Plan for five minutes, write for forty, check for five. In the check, read only for mechanics and for whether the question set has been answered."},
    {q:"What belongs in a conclusion?", a:"A restatement of the position the answer has proved, not a repetition of the introduction. One sentence on what has been established and one on the concession made."},
    {q:"Give the four moves of the final device drill.", a:"Name the device; quote the words that carry it; state the effect in one sentence; say what it contributes to the work as a whole."}
  ],
  tf:[
    {s:"A summary is a list of the events in the order they happen.", a:"false", why:"A summary gives the argument of the work in the order that makes it clearest, in your own words, with nothing added. A list of events is a plot outline."},
    {s:"You should define the key term in a question before answering it.", a:"true", why:"If a question calls a character tragic, the answer depends on what you take tragic to mean; the definition is half the argument."},
    {s:"Planning is time lost in an examination.", a:"false", why:"Five minutes of planning prevents the commonest failure — a well-written answer to the wrong question."},
    {s:"A conclusion should restate what the answer has proved.", a:"true", why:"It closes on the position established, not on a repetition of the opening paragraph."},
    {s:"Proof-reading means reading the answer again for sense.", a:"false", why:"Proof-reading is checking mechanics — spelling, punctuation and the spelling of names. Reading for sense is revision, and it may mean rewriting."},
    {s:"One paragraph should carry one point, its evidence and its comment.", a:"true", why:"That is the unit of a good answer, and it is what makes the answer easy to mark and easy to read."}
  ],
  apply:[
    {q:"Analyse this question: ‘To what extent is the suffering of the widow in the novel you have studied the fault of the community?’", a:"Instruction word: ‘to what extent’ — take a position and concede something. Key term: ‘fault’ — define it as responsibility that could have been refused. Number of texts: one. The answer therefore needs a position on the community's share, a concession about what no one could have prevented (the death), and evidence for the part that could have been refused."},
    {q:"Summarize, in four sentences, the argument of one set novel.", a:"Name the situation, the want, the obstacle, the climax and the change — in that order, in your own words, with no event that does not serve the argument."},
    {q:"Summarize, in three sentences, the argument of one set poem.", a:"The subject, who speaks and the turn, and the theme as a sentence — with nothing added and nothing paraphrased stanza by stanza."},
    {q:"Drill: take an unprepared line from any set text and work the four moves.", a:"Name the device; quote the words that carry it; state the effect in one sentence; say what it contributes to the whole work."}
  ],
  passage:{
    title:"Practice extract — the closing question",
    text:"QUESTION (25 marks): ‘The most memorable characters in literature are those who never say what they want.’ With reference to two texts you have studied, discuss this view. \n\nCANDIDATE'S ANSWER (extract): \n\nThe claim is worth taking seriously, because silence is the one thing a novelist can show that a dramatist can only stage. In Bayo Adebowale's Lonely Days, Yaremi is given the thought — ‘and if I walk now?’ — and not the speech, and the novel makes the withholding the whole of her condition: she has learned, in eleven days, ‘which sentences finish themselves in other people's mouths.’ She is memorable because the reader is left holding a question the village never hears. \n\nOn the stage the same effect must be made by the body. In Lorraine Hansberry's A Raisin in the Sun, Mama puts the envelope on the table and the direction reads simply that nobody touches it; what the family wants is in the room for the length of the pause and is not said by anybody. The audience therefore supplies the wanting, and the silence is louder than a speech would have been. \n\nThere is, however, a case against the claim. Walter Lee says exactly what he wants, at length, and he is among the most memorable characters in either text — which suggests that the truth is not that memorable characters are silent, but that they are memorable when something is withheld, whether it is a want, a reason or a fact.",
    qs:[
      {q:"How does the answer handle the instruction word ‘discuss’?", a:"It takes the claim seriously, supports it with two texts, and then raises the case against it in the final paragraph before qualifying rather than abandoning the position."},
      {q:"Why does the candidate compare a novel and a play rather than two novels?", a:"Because the claim is about what can be shown, and the comparison of two forms lets the answer make the point about method — that a novelist can withhold a thought while a dramatist must stage the silence — which is a stronger argument than two examples of the same kind would give."},
      {q:"Assess the use of evidence in the second paragraph.", a:"It quotes the stage direction rather than a speech, which is the right choice for the point being made, and comments on what the audience is made to supply. A second reference to the scene would strengthen it, but the evidence is woven into the argument rather than appended to it."},
      {q:"What does the final paragraph achieve?", a:"It concedes the strongest objection — that a character who says what he wants can also be memorable — and then refines the claim rather than surrendering it, which is what ‘to what extent’ and ‘discuss’ both require."},
      {q:"Give two improvements you would make to the answer if you had five more minutes.", a:"Add a second piece of evidence to the stage paragraph, and make the closing sentence state the refined claim in one crisp formulation — memorable characters are made by what is withheld — so that the examiner can see the position at a glance."}
    ]
  },
  write:[
    {p:"WASSCE practice: ‘To what extent is the community, rather than the individual, responsible for what happens in the novel you have studied?’ Write a full answer.", guide:"Plan for five minutes: define the key term, take a position, prepare two concessions and three references with comments. Write for forty."},
    {p:"WASSCE practice: ‘With reference to two poems, discuss the view that a poem is more persuasive when it does not name the emotion it is about.’", guide:"Two poems, four points, held against each in turn. Conclude on the stronger case."},
    {p:"Final drill: choose any three lines from three different set texts and work the four moves on each.", guide:"Device; the words that carry it; the effect in one sentence; the contribution to the whole."}
  ],
  activities:[
    "Review past examination questions on the selected poems, novels and plays",
    "Survey the literary devices met across the three years, with one example of each",
    "Review and discuss questions in prose, poetry and drama from past papers",
    "Discuss themes, characters, exposition, tone, mood and plots in past questions",
    "Review content, expression, mechanics and style in sample answers",
    "Drill the literary devices using examples under timed conditions"
  ],
  materials:["Faceless by Amma Darko","Lonely Days by Bayo Adebowale","Native Son by Richard Wright","She Stoops to Conquer by Oliver Goldsmith","A Raisin in the Sun by Lorraine Hansberry","Past WASSCE examination papers"],
  assessment:["Quizzes","Class work","Homework","Assignments","Oral presentations","Debates"]
}
];
