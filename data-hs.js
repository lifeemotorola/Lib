/* Curriculum data — Republic of Liberia, HEALTH SCIENCE (Elementary strand),
   Grades 1–6, Periods I–VI.

   This is the HEALTH STRAND of the national Elementary "General Science 1-6"
   curriculum guide (uploads/General Science1-6.pdf, 78 pp.), pulled out of the
   grade pages the guide devotes to health so that a teacher can plan, print and
   export it as a course of its own. Nothing is invented here: every outcome,
   objective, content line, activity and material comes from the guide page cited
   in each unit's `subtitle`, and the same content also lives inside the General
   Science subject (data-sc.js) under its own period number.

   THE SHAPE OF THE SUBJECT. The guide is a science guide, and health sits in it
   as one or two units a grade — so a health course of its own is built as a
   year: six periods, Grades 1 to 6, thirty-six units. Where the guide has health
   content, that content is taught in the guide's own period, at the guide's own
   number; the remaining periods of that grade teach the same grade's health
   outcomes, objectives, contents and activities again, one unit at a time, in
   the order a child meets them. The guide itself spirals — handwashing, body
   safety and HIV come back harder every year — and so does this.

     Grade 1 · Period VI  — Care of the Body · HIV/AIDS · Substance Abuse
                            (guide pp. 12–13), taught as six units across the
                            year, with the HIV column in Period VI.
     Grade 2 · Periods III and VI — Exploring the Human Body (pp. 18–19) and
                            Exploring Drugs / Exploring My Body (pp. 24–25).
     Grade 3 · Periods II and IV — the Health Lesson: Human Reproduction and
                            Puberty (pp. 28–29) and Investigating More Uses of
                            Plants / How We Care for Our Bodies (pp. 32–33).
     Grade 4 · Periods V and VI — Skin Profile, Soil Profile and Malaria
                            (pp. 46–47) and Health and Personal Hygiene
                            (pp. 48–49).
     Grade 5 · Periods III and IV — Health Lessons (pp. 54–56) and the health
                            contents of Organization of Life (pp. 57–59).
     Grade 6 · Periods II and IV — the preventive measures against HIV/AIDS and
                            human reproduction (p. 66) and The Human Body:
                            Health Lessons (pp. 70–73).

   SEMESTERS. Periods I–III are Semester One and Periods IV–VI are Semester Two,
   which is the guide's own arrangement for every grade bar one: the guide marks
   Grade 1 Period VI "Semester One" on p. 12, against every other Grade 1 period
   it places in Semester Two. As the last period of a six-period year it is
   taught in Semester Two here.

   Each unit is planned as ONE three-to-four-week health unit (the guide's own
   unit duration is 3–4 weeks): set "Weeks per unit" to 4 and the period length
   to 40 minutes, then generate Daily plans or a Weekly unit plan. Three units
   of four weeks make a twelve-week semester, which is the school year as the
   other subjects keep it.

   Unit shape follows the shared lesson-plan fields (lesson.js) plus three
   health-strand fields consumed by the healthPlan branches, so every other
   subject keeps its exact existing wording:
     healthPlan:true — plans are built in the health-lesson shape (health circle,
                       demonstration, practice, class health chart, pledge)
     safeguard       — the safeguarding line printed on the plan for units that
                       teach body safety, puberty, HIV or reproduction; the guide
                       itself asks for it ("please pay attention to proprietary
                       information", guide p. 19)
     aids[] / home[] — concrete aids and the home practice done with parents
   Assessment in the health strand is oral, demonstrative and chart-based: the
   guide lists quizzes, tests, class and homework, science journal, key-term
   spelling, discussion-circle contribution, group tasks, oral reports and
   paper-based activities — every unit carries those in `assessment`. */

var HS_CURRICULUM = [
/* ==========================================================================
   GRADE 1 — the guide puts all of the Grade 1 health content in Period VI
   (pp. 12-13: “CARE OF THE BODY · HIV/AIDS · SUBSTANCE ABUSE”). The six units
   below teach that one guide unit as a year: Periods I-V take the guide's own
   contents in the order a child meets them — the body, caring for it,
   handwashing, private parts, substances — and Period VI closes the year with
   the guide's HIV and AIDS content in its own period.
   ========================================================================== */

/* ------------------------------ GRADE 1 · PERIOD I ------------------------------ */
{
  grade:1, period:"I", sem:"One", icon:"🧍", healthPlan:true,
  title:"Getting to Know My Body",
  subtitle:"Health strand · getting to know your body — the names and work of the body parts, the five sense organs, and body types and individual uniqueness (guide p. 12)",
  outcomes:[
    "Use knowledge and skills acquired to identify and name the different parts of their bodies",
    "Say what each named part of the body is used for",
    "Accept that bodies are different — tall and short, big and small — and that every body is a good body (guide contents: body types and individual uniqueness)"
  ],
  objectives:[
    "Name the main parts of the body from head to toe",
    "Say what each part is used for, using the rhyme “This is my —, I use it to —”",
    "Point to each part on a chart and on themselves while the class names it together",
    "Name the five sense organs — eyes, ears, nose, tongue and skin — and say what each one senses",
    "Describe their own body type and say why every body type deserves respect",
    "Say one way of keeping each part they have named clean and strong"
  ],
  safeguard:"Parts of the body are named with the correct words while clothes stay on. Private parts are named on the chart only, as the parts a vest and pants cover — never by asking a child to point at, show or touch their own. If a child says something that worries you, listen once, do not question the child twice, write down what the child said in the child's own words, and take it to the head teacher and the child's carer the same day.",
  note:"<b>The body</b> has many parts and every part has its own work. A Grade 1 child learns the <b>names</b> of the parts, what each part is <b>used for</b>, and that bodies come in different <b>types</b> — tall and short, big and small — and every one of them is a good body.",
  study:[
    {k:"h3", t:"The Parts of My Body"},
    {k:"p", t:"The body is made of many parts, and each part has a work to do. Starting at the top there is the **head**, with the **hair**, the **face**, the **eyes**, the **ears**, the **nose** and the **mouth** with the **teeth** and the **tongue**. Below the head is the **neck**, then the **shoulders**, the **chest** and the **back**, the **belly**, the **arms** with the **hands** and **fingers**, and the **legs** with the **knees**, the **feet** and the **toes**."},
    {k:"table", head:["Body part","What it is used for"],
     rows:[
      ["Eyes","To see"],
      ["Ears","To hear"],
      ["Nose","To smell and to breathe"],
      ["Tongue","To taste"],
      ["Teeth","To chew food"],
      ["Hands and fingers","To hold, to write and to feel"],
      ["Legs and feet","To stand, to walk and to run"],
      ["Skin","To cover the body and to feel"]
     ]},
    {k:"h3", t:"The Five Sense Organs"},
    {k:"p", t:"Five parts of the body carry the **senses** to the brain: the **eyes** for seeing, the **ears** for hearing, the **nose** for smelling, the **tongue** for tasting and the **skin** for feeling. These five are called the **sense organs**. The brain sits inside the head and it tells the whole body what to do."},
    {k:"h3", t:"Bodies Are Different"},
    {k:"p", t:"Some people are **tall** and some are **short**; some are **big** and some are **small**. That is a body **type**, and it is the way a person is made. No body type is better than another. In this lesson every child names their own body type and the class gives them a round of **applause**, because every body is a good body. A person who is different from you — small, big, or who walks or sees differently — is still a person who deserves respect and a friend."},
    {k:"h3", t:"The Rhyme of the Body"},
    {k:"p", t:"The guide gives Grade 1 a rhyme for this work: “**This is my —, I use it to —**.” The teacher touches or points to a part and the children finish the line: “This is my hand, I use it to write.” Say it, point it, clap it. For the private parts the teacher names them on the chart and does the pointing, so that no child is ever asked to touch their own."}
  ],
  focus:[
    "Naming the parts of the body from head to toe",
    "What each part is used for: the rhyme “This is my —, I use it to —”",
    "The five sense organs and what each one senses",
    "Body types: tall and short, big and small",
    "Every body is a good body: a round of applause for every child",
    "Revision: point, name and use — the class body chart"
  ],
  terms:[
    {t:"body", d:"the whole person, from the head to the feet", x:"My body has many parts."},
    {t:"body part", d:"one named piece of the body, such as an arm or a nose", x:"The hand is a body part."},
    {t:"head", d:"the top part of the body, holding the eyes, ears, nose, mouth and brain", x:"The head sits on the neck."},
    {t:"trunk", d:"the middle of the body — the chest, the back and the belly", x:"The trunk holds the heart."},
    {t:"limb", d:"an arm or a leg", x:"Arms and legs are limbs."},
    {t:"organ", d:"a part of the body that does a special work", x:"The eye is an organ for seeing."},
    {t:"sense organ", d:"the eyes, ears, nose, tongue or skin — the parts that carry the senses", x:"The skin is a sense organ."},
    {t:"sense", d:"seeing, hearing, smelling, tasting or feeling", x:"We have five senses."},
    {t:"brain", d:"the part inside the head that tells the body what to do", x:"The brain tells the legs to walk."},
    {t:"skin", d:"the covering of the whole body", x:"The skin feels hot and cold."},
    {t:"body type", d:"the way a person is built — tall, short, big or small", x:"My body type is short."},
    {t:"unique", d:"one of a kind; there is nobody else exactly like you", x:"Every child is unique."}
  ],
  facts:[
    {q:"Name five parts of the body.", a:"Head, eyes, nose, arms and legs (any five named parts)."},
    {q:"What are the eyes used for?", a:"To see."},
    {q:"What are the ears used for?", a:"To hear."},
    {q:"Name the five sense organs.", a:"Eyes, ears, nose, tongue and skin."},
    {q:"What does the nose do?", a:"It smells and it breathes air in and out."},
    {q:"What is the brain?", a:"The part inside the head that tells the whole body what to do."},
    {q:"Are tall bodies better than short bodies?", a:"No. Bodies are different and every body is a good body."},
    {q:"Say the body rhyme for one part.", a:"“This is my hand, I use it to write.” (or any true line)."}
  ],
  tf:[
    {s:"The eyes are used for hearing.", a:"false", why:"The eyes see; the ears hear."},
    {s:"The skin covers the whole body.", a:"true", why:"The skin is the covering of the body and it feels heat, cold and pain."},
    {s:"There are five sense organs.", a:"true", why:"Eyes, ears, nose, tongue and skin."},
    {s:"Only tall bodies are good bodies.", a:"false", why:"Bodies are tall, short, big or small, and every one of them is a good body."},
    {s:"The brain tells the body what to do.", a:"true", why:"The brain is inside the head and it controls the body."},
    {s:"The teeth are used for hearing.", a:"false", why:"The teeth chew food; the ears hear."}
  ],
  classify:{
    title:"Where is this part of the body?",
    groups:[
      {name:"Head and neck", items:["eyes","ears","nose","tongue","teeth","hair"]},
      {name:"Trunk (chest, back, belly)", items:["shoulders","chest","back","belly"]},
      {name:"Arms and hands", items:["arm","elbow","hand","fingers"]},
      {name:"Legs and feet", items:["leg","knee","foot","toes"]}
    ]
  },
  diagram:{
    title:"The parts of the body",
    caption:"Write the name of each part and one line on what it is used for.",
    parts:[
      {p:"Eyes", f:"to see"},
      {p:"Ears", f:"to hear"},
      {p:"Nose", f:"to smell and to breathe"},
      {p:"Tongue", f:"to taste"},
      {p:"Teeth", f:"to chew food"},
      {p:"Hands", f:"to hold, to write and to feel"},
      {p:"Legs and feet", f:"to stand, to walk and to run"},
      {p:"Skin", f:"to cover the body and to feel"}
    ]
  },
  experiment:{
    title:"The Body-Trace Map",
    aim:"To name the parts of the body and show where each one is.",
    materials:["A large sheet of paper or two sheets taped together","A pencil or crayon","Word cards with the names of the parts","Tape or glue"],
    steps:[
      "One child lies on the paper while a partner draws carefully around the whole body.",
      "The pair writes the child's name at the top of the tracing.",
      "The class names the parts together as the teacher points to them on a chart.",
      "The pair tapes the word card for each part in the right place on the tracing.",
      "Each pair shows its map and says the rhyme for two of its parts: “This is my —, I use it to —.”"
    ],
    expect:"Every pair finishes with a body map whose labels sit in the right places, and can say what at least two parts are used for.",
    why:"Naming a part, drawing its place and saying its work fixes the words in the memory far better than listening alone."
  },
  apply:[
    {q:"A new child in your class is very small for her age. Some children laugh. What do you say?", a:"I say that bodies are different and hers is a good body; she is my classmate and I will play with her."},
    {q:"Your little brother asks what his tongue is for. What do you tell him?", a:"The tongue tastes the food — sweet, sour, salt and bitter — and it helps you to talk."},
    {q:"Which part of your body tells you that the fire is hot?", a:"The skin feels the heat and the brain tells the hand to pull away."},
    {q:"Why does the teacher let every child have a round of applause for their body type?", a:"So that every child learns that their own body is good and that other people's bodies are good too."},
    {q:"Name one part of the body you have not learned yet that you want to know about.", a:"Any honest answer, for example: “the ribs — I want to know what they do.”"}
  ],
  activities:[
    "Rhyme and point: “This is my —, I use it to —”, teacher leading, private parts named on the chart only",
    "Whole class: name the parts from head to toe and clap once for each",
    "Choral drill of the five sense organs with the sense each one carries",
    "Flip chart or board drawing of the different body types — tall, short, big, small — each one greeted with applause",
    "Every child names their own body type and the class claps for it",
    "Body-Trace Map in pairs, with the word cards taped in place"
  ],
  materials:[
    "Posters and a chart of the parts of the body",
    "A dressed/undressed chart picture of a boy and a girl for naming parts correctly",
    "Magazine cutouts of children of different body types",
    "Word cards with the names of the parts",
    "Large sheets of paper, pencils or crayons, tape for the body-trace map",
    "Flip chart or board for the class body drawing"
  ],
  aids:[
    "Chart of the parts of the body, head to toe",
    "Word cards for each part and for the five sense organs",
    "Large paper and crayons for the Body-Trace Map",
    "A dressed/undressed chart picture for naming private parts",
    "Poster of children of different body types"
  ],
  home:[
    "Say the rhyme “This is my —, I use it to —” for five parts of the body while a grown-up listens",
    "Stand straight and tell your family your body type, and say why it is a good body",
    "Name the five sense organs to somebody at home and say what each one does",
    "Draw yourself and write the name of six parts on the drawing"
  ],
  assessment:[
    "Oral naming: the child points to and names ten parts of the body on the chart",
    "The rhyme: each child finishes two lines of “This is my —, I use it to —”",
    "Sense-organ quiz: five oral questions, answered in a full sentence",
    "The Body-Trace Map, marked on the correct placing of the labels",
    "Written work: match the part to its work; six items only",
    "Science journal: the child's own drawing of their body type with one sentence under it"
  ]
},

/* ----------------------------- GRADE 1 · PERIOD II ----------------------------- */
{
  grade:1, period:"II", sem:"One", icon:"🪥", healthPlan:true,
  title:"Caring for Each Part of My Body",
  subtitle:"Health strand · care for the body — how we care for each part and when we do it (guide p. 12: “Care for the body”)",
  outcomes:[
    "Use knowledge and skills acquired to state ways of caring for each part of the body",
    "Practise the daily care of the hands, teeth, skin, hair, eyes, ears and nose",
    "Understand that keeping clean keeps disease away"
  ],
  objectives:[
    "State ways we care for each part of the body",
    "Say when each care is done — daily, after meals, after play",
    "Demonstrate the care of the hands, teeth, skin and hair with the real aid",
    "Explain why we do not share a comb, a towel or a toothbrush",
    "Say why clean clothes and a clean bed help the body",
    "Keep a class chart of the care the class does each day for one week"
  ],
  safeguard:"Care of the body is taught by demonstration on a chart or on the teacher's own hands and teeth; no child is asked to undress, to show a part of the body, or to speak about their own body in front of the class. Where a child's clothes, hair or skin show that a family is struggling, the teacher supplies what is needed quietly and never draws attention to the child; a worry about a child's welfare is written in the child's own words and taken to the head teacher the same day.",
  note:"<b>Care for the body</b> means the daily work that keeps each part clean and healthy: washing the hands, brushing the teeth, bathing the skin, combing the hair, washing the face, and cleaning the ears and nose gently. <b>Hygiene</b> is the name for this work, and it keeps <b>disease</b> away.",
  study:[
    {k:"h3", t:"What Care Means"},
    {k:"p", t:"Every part of the body needs care, and the care is done at a particular time. **Hygiene** means keeping clean so as to stay healthy. A **germ** is a tiny living thing, too small to see, that lives on dirty hands and on unwashed food and can cause **disease**."},
    {k:"table", head:["Body part","How we care for it","When we do it"],
     rows:[
      ["Hands and nails","Wash with soap and clean water; cut the nails short","Before eating, after the toilet, after play"],
      ["Teeth","Brush with paste, or rub with a clean chewing stick; rinse the mouth","In the morning and after the last meal"],
      ["Skin","Bathe with soap and clean water; dry with your own clean towel","Every morning, and after hard play"],
      ["Hair","Wash and comb; keep the head free of nits","Regularly, with your own comb"],
      ["Eyes","Wash the face; do not rub with dirty hands; never look straight at the sun","Every day"],
      ["Ears","Wash only the outside; never push anything inside","When washing"],
      ["Nose","Blow gently into a tissue and put the tissue in the bin","When it runs"],
      ["Feet","Wash, dry between the toes, and wear shoes or slippers","Every day"]
     ]},
    {k:"h3", t:"What Is Mine Is Mine"},
    {k:"p", t:"A **towel**, a **comb**, a **toothbrush** and a **handkerchief** are personal things: each child has their own. Sharing them passes germs, nits and sore eyes from one child to another. If a friend has no toothbrush, tell the teacher; the class keeps a spare."},
    {k:"h3", t:"Clean Clothes, Clean Bed, Clean Compound"},
    {k:"p", t:"Clean **clothes** keep the skin well; a wet or dirty cloth worn for days makes the skin itchy and sore. A clean **bed** and a swept **compound** keep flies, mosquitoes and rats away from the house. Care of the body and care of the place a child lives go together."},
    {k:"h3", t:"The Class Care Chart"},
    {k:"p", t:"The class keeps a **chart** with a square for each day. At the end of the day every child who washed their hands before eating, brushed their teeth that morning and bathed that day ticks their own square. The chart is not a competition and nobody is shamed for a missing tick: the teacher looks for the child who is missing many days and finds out quietly what the family needs."}
  ],
  focus:[
    "What hygiene means and why we keep clean",
    "Caring for the hands, teeth, skin and hair",
    "Caring for the eyes, ears, nose and feet",
    "My towel, my comb, my toothbrush: what is not shared",
    "Clean clothes, a clean bed and a clean compound",
    "The class care chart for one week"
  ],
  terms:[
    {t:"hygiene", d:"keeping clean in order to stay healthy", x:"Good hygiene keeps disease away."},
    {t:"care", d:"the daily work we do to keep a part of the body well", x:"Brushing is care of the teeth."},
    {t:"germ", d:"a tiny living thing, too small to see, that can cause disease", x:"Germs live on dirty hands."},
    {t:"disease", d:"an illness of the body", x:"Dirty hands can carry disease."},
    {t:"soap", d:"what we use with water to lift off dirt and germs", x:"Wash with soap and water."},
    {t:"towel", d:"the cloth we dry the body with; one person's own", x:"Dry with your own clean towel."},
    {t:"comb", d:"what we use for the hair; one person's own", x:"Use your own comb, not your friend's."},
    {t:"toothbrush", d:"the small brush used with paste to clean the teeth", x:"Brush with your own toothbrush."},
    {t:"chewing stick", d:"a clean local stick chewed at one end to clean the teeth", x:"A chewing stick cleans the teeth too."},
    {t:"bath", d:"washing the whole body with soap and water", x:"Take a bath every morning."},
    {t:"nits", d:"the tiny eggs of a head louse, found in the hair", x:"A clean combed head has no nits."},
    {t:"chart", d:"a sheet where the class records what it has done", x:"The care chart shows one square for each day."}
  ],
  facts:[
    {q:"What does hygiene mean?", a:"Keeping clean in order to stay healthy."},
    {q:"How do we care for the teeth?", a:"Brush with paste or rub with a clean chewing stick in the morning and after the last meal."},
    {q:"Why should you not share a comb?", a:"Sharing a comb passes nits and germs from one head to another."},
    {q:"When should you wash your hands?", a:"Before eating, after the toilet, after blowing the nose and when coming in from outside."},
    {q:"How do we care for the ears?", a:"Wash only the outside; never push anything inside the ear."},
    {q:"Why should we wear shoes or slippers?", a:"Shoes protect the feet from cuts, from worms in the soil and from jiggers."},
    {q:"What does a clean compound do for a family?", a:"It keeps flies, mosquitoes and rats away, so the family falls sick less often."},
    {q:"What is a germ?", a:"A tiny living thing, too small to see, that can cause disease."}
  ],
  tf:[
    {s:"A towel can be shared with a friend.", a:"false", why:"A towel is personal; sharing it passes germs and sore eyes."},
    {s:"We should brush the teeth in the morning and after the last meal.", a:"true", why:"Brushing twice a day keeps the teeth clean and strong."},
    {s:"It is safe to push a stick into the ear to clean it.", a:"false", why:"Nothing is pushed inside the ear; only the outside is washed."},
    {s:"Clean clothes help to keep the skin healthy.", a:"true", why:"Dirty clothing worn for days makes the skin itchy and sore."},
    {s:"Germs are big enough to see with the eye.", a:"false", why:"Germs are too small to see, which is why we keep clean even when hands look clean."},
    {s:"Sweeping the compound is part of caring for the body.", a:"true", why:"A clean compound keeps flies and mosquitoes away from the family."}
  ],
  classify:{
    title:"Which part does this care belong to?",
    groups:[
      {name:"Hands", items:["wash with soap","cut the nails short","dry with your own towel"]},
      {name:"Teeth", items:["brush with paste","use a clean chewing stick","rinse after the last meal"]},
      {name:"Skin and hair", items:["bathe with soap","comb the hair","wear clean clothes"]},
      {name:"Eyes, ears and nose", items:["wash the face","never rub with dirty hands","blow the nose into a tissue"]}
    ]
  },
  diagram:{
    title:"Caring for the parts of the body",
    caption:"Write how we care for each part and when we do it.",
    parts:[
      {p:"Teeth", f:"brush morning and after the last meal"},
      {p:"Hair", f:"wash and comb with your own comb"},
      {p:"Skin", f:"bathe with soap and clean water every day"},
      {p:"Hands and nails", f:"wash with soap; keep the nails short"},
      {p:"Eyes", f:"wash the face; never rub with dirty hands"},
      {p:"Ears", f:"clean only the outside"},
      {p:"Nose", f:"blow gently into a tissue and bin it"},
      {p:"Feet", f:"wash, dry between the toes, wear shoes"}
    ]
  },
  experiment:{
    title:"The Two Towels Test",
    aim:"To show why a towel, a comb and a toothbrush are not shared.",
    materials:["Two clean white cloths or two pieces of paper","A little cocoa powder, charcoal dust or fine dry soil","Water in a small bowl","Soap"],
    steps:[
      "Rub a little dry cocoa or dust over one child's hands.",
      "Press the dusty hands on the first cloth and look at the mark left behind.",
      "Now wash the hands properly with soap and water and dry them.",
      "Press the clean hands on the second cloth and look at the mark.",
      "Compare the two cloths and say what moved from the hands to the cloth."
    ],
    expect:"The first cloth carries a clear mark and the second almost none; whatever was on the hands stayed on the cloth.",
    why:"What leaves the hands stays on whatever the hands touch — a towel, a comb, a cup — and that is how germs, nits and sore eyes pass from one child to another."
  },
  apply:[
    {q:"Your friend wants to dry her hands on your towel. What do you say?", a:"No, use your own; a towel is personal — I will ask the teacher for a spare for you."},
    {q:"You have no toothbrush this week. What do you do?", a:"Tell the teacher quietly, and clean the teeth with a clean chewing stick or a clean cloth and salt water until there is one."},
    {q:"A child in class never has a bath and the others move away from him. What should the class do?", a:"Keep him as a friend and tell the teacher, who helps the family quietly; nobody is laughed at or left out."},
    {q:"Why do we cut the fingernails short?", a:"Dirt and germs hide under long nails, and long nails scratch the skin."},
    {q:"Your small sister rubs her eyes with hands she has just used to play in the dust. What do you tell her?", a:"Wash your hands first; dirty hands carry germs into the eyes and cause sore eyes."}
  ],
  activities:[
    "Teacher demonstrates the care of each body part with the real aid while the children mimic it",
    "Action rhyme: name a part, the class says its care and claps the number of times a day it is done",
    "Sorting game: care cards placed under the picture of the part they belong to",
    "The Two Towels Test, teacher-led, with the two cloths shown to the class",
    "The class care chart: one square a day for a week, ticks at the end of the day",
    "Drawing: “How I care for my body”, with the teacher writing the child's sentence underneath"
  ],
  materials:[
    "A chart of the “do's” for the various body parts (the guide's own material)",
    "Soap, clean water, a towel, a toothbrush and paste, a comb, a nail brush",
    "Magazine cutouts of personal hygiene materials",
    "Two white cloths and cocoa powder or charcoal dust for the demonstration",
    "The class care chart on the board or on a large sheet",
    "Posters of children washing, brushing and bathing"
  ],
  aids:[
    "Real soap, water, towel, toothbrush, paste, comb and nail brush",
    "Chart of the “do's” for each body part",
    "Care cards for the sorting game",
    "Two cloths and cocoa powder for the demonstration",
    "The class care chart"
  ],
  home:[
    "Bath with soap and water in the morning for five days; a grown-up signs the chart",
    "Brush the teeth in the morning and after the last meal",
    "Wash your own handkerchief or bring a clean one each day",
    "Help to sweep the compound or the room where you sleep",
    "Say to your family which things are yours alone: towel, comb, toothbrush"
  ],
  assessment:[
    "Oral questions: state the care for five named parts of the body",
    "Demonstration: the child brushes, washes and combs with the real aid in front of the class",
    "Sorting task: care cards placed under the right part",
    "The class care chart for the week, read with each child privately",
    "Written work: complete the table of part, care and when — six items",
    "Science journal: draw yourself doing one care, with the sentence written under it"
  ]
},

/* ---------------------------- GRADE 1 · PERIOD III ---------------------------- */
{
  grade:1, period:"III", sem:"One", icon:"🧼", healthPlan:true,
  title:"Washing My Hands",
  subtitle:"Health strand · the importance of proper hand washing — the steps, the four times, and the handwashing song (guide pp. 12–13)",
  outcomes:[
    "State the importance of proper hand washing",
    "Wash the hands correctly, step by step, with soap and clean water",
    "Explain that soap and clean water wash germs away, and that water alone does not"
  ],
  objectives:[
    "State the importance of proper hand washing",
    "Perform the seven steps of handwashing in the right order",
    "Name the four times when the hands must be washed",
    "Sing the handwashing song while washing",
    "Show, with the pepper test, what soap does that water alone does not",
    "Remind a friend to wash their hands before eating, kindly"
  ],
  safeguard:"Handwashing is demonstrated by the teacher and then performed by every child with their own water and their own towel; no child is singled out about their own cleanliness in front of the class. Where a child has no soap or no clean water at home, the teacher provides what is needed quietly and never asks the child to explain why. Anything a child says that worries you is written in the child's own words and reported to the head teacher and the child's carer the same day.",
  note:"<b>Proper hand washing</b> means water, soap, and seven steps done in the right order. Hands that look clean can still carry **germs**, and those germs travel from the hand to the mouth and into the food. Soap lifts the germs off; water alone leaves them there.",
  study:[
    {k:"h3", t:"Why We Wash Our Hands"},
    {k:"p", t:"The hands touch everything — the door, the ground, the money, the ball, the latrine door, other people's hands. The **germs** that cause diarrhoea, worms and stomach pain ride on the hands and go straight into the mouth with the food. Washing the hands with **soap** and clean water takes those germs off before the food is touched."},
    {k:"h3", t:"The Seven Steps"},
    {k:"num", items:[
      "Wet both hands with clean running or poured water.",
      "Rub soap on the palms until there are bubbles.",
      "Rub the palms together, then the backs of the hands.",
      "Rub between the fingers and around each thumb.",
      "Rub the fingertips and under the nails.",
      "Rinse off all the soap with clean water.",
      "Dry the hands completely with your own clean towel."
    ]},
    {k:"p", t:"The whole wash takes about as long as singing the **handwashing song** once through — that is why the guide gives the class a song and not a clock."},
    {k:"h3", t:"The Four Times"},
    {k:"p", t:"Wash the hands **before eating**, **after the toilet**, **after blowing the nose or coughing into the hand**, and **when coming in from outside** or after playing. The guide's song names them: “…when we want to eat … after our play … after the restrooms … when we come from places.”"},
    {k:"h3", t:"The Handwashing Song"},
    {k:"p", t:"“**This is the way we wash our hands, wash our hands, wash our hands … when we want to eat … after our play … after the restrooms … when we come from places.**” The class sings it while it washes, and the song ends when the hands are done."},
    {k:"h3", t:"Water Is Not Enough"},
    {k:"p", t:"Water alone moves the dirt you can see. **Soap** is what lifts the germs off the skin, because one end of the soap holds the water and the other end holds the grease the germs sit in. Water alone leaves the germs where they were. If there is no soap, ash and clean water, or a clean chewing stick's ash, is better than water alone — but soap is best."}
  ],
  focus:[
    "Why we wash: germs travel from the hand to the mouth",
    "The seven steps of handwashing",
    "The four times the hands must be washed",
    "The handwashing song",
    "The Pepper and Soap test: what soap does that water does not",
    "The class handwashing station for one week"
  ],
  terms:[
    {t:"handwashing", d:"washing the hands with soap and clean water, step by step", x:"Proper handwashing takes seven steps."},
    {t:"soap", d:"what we use with water to lift off dirt and germs", x:"Soap lifts the germs off the skin."},
    {t:"germ", d:"a tiny living thing, too small to see, that can cause disease", x:"Germs ride on dirty hands."},
    {t:"diarrhoea", d:"a sickness of loose, watery stool", x:"Dirty hands can cause diarrhoea."},
    {t:"bubbles", d:"the foam soap makes when it is rubbed", x:"Rub until there are bubbles."},
    {t:"rinse", d:"to wash the soap off with clean water", x:"Rinse all the soap away."},
    {t:"towel", d:"the cloth we dry the hands with; one person's own", x:"Dry with your own clean towel."},
    {t:"latrine", d:"the toilet place", x:"Wash your hands after the latrine."},
    {t:"clean water", d:"water that is safe to drink and to wash with", x:"Wash with clean water."},
    {t:"ash", d:"the powder left after wood is burnt; used when there is no soap", x:"Ash and water can be used when soap is finished."},
    {t:"song", d:"words sung to help us remember", x:"The handwashing song names the four times."},
    {t:"station", d:"the place in the compound where the class washes its hands", x:"The handwashing station has water and soap."}
  ],
  facts:[
    {q:"Why do we wash our hands?", a:"To take off the germs that cause diarrhoea, worms and stomach pain before they reach the mouth."},
    {q:"Name the seven steps of handwashing.", a:"Wet, soap, palms and backs, between the fingers and the thumbs, fingertips and nails, rinse, dry."},
    {q:"Name the four times you must wash your hands.", a:"Before eating, after the toilet, after blowing the nose or coughing, and when coming in from outside."},
    {q:"Why is soap better than water alone?", a:"Soap lifts the germs off the skin; water alone moves only the dirt you can see."},
    {q:"How long should you wash for?", a:"About as long as the handwashing song takes to sing once."},
    {q:"Why should you dry the hands completely?", a:"Germs move more easily to food from a wet hand than from a dry one."},
    {q:"What can be used if there is no soap?", a:"Clean ash and water, rubbed well and rinsed — better than water alone, but soap is best."},
    {q:"What should you do if a friend forgets to wash before eating?", a:"Remind them kindly: “Let us wash first” — not shout at them or shame them."}
  ],
  tf:[
    {s:"Washing hands with only water removes all the germs.", a:"false", why:"Soap is needed to lift the germs off the skin properly."},
    {s:"Hands should be washed before eating.", a:"true", why:"Germs on the hands go into the mouth with the food."},
    {s:"It is enough to wet the hands and shake them dry.", a:"false", why:"The seven steps are needed, and the hands must be dried on a clean towel."},
    {s:"You must wash your hands after using the toilet.", a:"true", why:"The toilet is one of the four times named in the handwashing song."},
    {s:"Hands that look clean cannot carry germs.", a:"false", why:"Germs are too small to see; a hand can look clean and still carry them."},
    {s:"Singing the song helps you wash for long enough.", a:"true", why:"The song lasts about as long as a proper wash, so the class washes for the right time."}
  ],
  classify:{
    title:"Wash your hands or not?",
    groups:[
      {name:"Wash at once", items:["before eating","after the latrine","after blowing the nose","after playing outside","after touching money or a door"]},
      {name:"Not needed", items:["after washing them a minute ago","after reading your own book","after putting on your shirt"]}
    ]
  },
  diagram:{
    title:"The seven steps of handwashing",
    caption:"Put the steps in the right order and say the word for each.",
    parts:[
      {p:"Step 1", f:"wet both hands with clean water"},
      {p:"Step 2", f:"rub soap until there are bubbles"},
      {p:"Step 3", f:"rub the palms, then the backs"},
      {p:"Step 4", f:"rub between the fingers and around each thumb"},
      {p:"Step 5", f:"rub the fingertips and under the nails"},
      {p:"Step 6", f:"rinse off all the soap"},
      {p:"Step 7", f:"dry with your own clean towel"}
    ]
  },
  experiment:{
    title:"The Pepper and Soap Test",
    aim:"To show how soap removes germs from the hands.",
    materials:["A wide bowl of clean water","Ground pepper or fine dust","Soap","A finger to dip"],
    steps:[
      "Sprinkle ground pepper on the surface of the water — the pepper stands for germs.",
      "Dip one clean finger into the water and take it out; look at the pepper stuck to it.",
      "Rub soap on the same finger.",
      "Dip the soapy finger into the water again and watch.",
      "Draw what happened in both cases in your science journal."
    ],
    expect:"Without soap the pepper sticks to the finger; with soap the pepper rushes away from it.",
    why:"Soap breaks the skin of the water and pushes the pepper (the germs) away, which is why washing with soap is far better than water alone."
  },
  apply:[
    {q:"Your friend eats without washing his hands after playing. What may happen?", a:"Germs on his hands can enter his mouth with the food and make him sick with diarrhoea, stomach pain or worms."},
    {q:"There is no soap in the school today. What do you do before eating?", a:"Wash with clean ash and water, rubbed well and rinsed, and tell the teacher that the soap is finished."},
    {q:"You cough into your hand and then somebody gives you bread. What do you do?", a:"Wash the hands with soap first, or take the bread with the other hand and wash before eating."},
    {q:"A small child in your house puts her fingers in her mouth all day. What can you teach her?", a:"Teach her to wash her hands with soap before she eats and after she plays, and to keep her fingers out of her mouth."},
    {q:"Why does the teacher ask the class to sing while it washes?", a:"The song lasts as long as a proper wash, so the children wash for long enough and remember the four times."}
  ],
  activities:[
    "Action song: “This is the way we wash our hands … when we want to eat … after our play … after the restrooms … when we come from places”",
    "Teacher demonstrates the seven steps with real soap and water; the class mimics them step by step",
    "Every child washes at the station while the class counts the seven steps out loud",
    "The Pepper and Soap test, teacher-led, with the two results drawn in the journal",
    "Make a handwashing poster for the school yard with the four times on it",
    "Class handwashing station: water, soap and a towel kept ready for one week, with a monitor's roster"
  ],
  materials:[
    "Soap, clean water in a pouring container, a clean towel",
    "A bowl of water and ground pepper for the Pepper and Soap test",
    "Poster paper and crayons for the class poster",
    "A chart of the seven steps drawn by the teacher",
    "Ash in a small tin, to show what to do when the soap is finished",
    "Magazine cutouts or drawings of children washing hands"
  ],
  aids:[
    "Real soap, water and a towel at the washing station",
    "Bowl, water and ground pepper for the demonstration",
    "Chart of the seven steps with pictures",
    "Poster paper and crayons",
    "Ash in a tin as the substitute for soap"
  ],
  home:[
    "Wash your hands with soap at all four times on one day and tell the class which time was hardest",
    "Teach the handwashing song to somebody at home",
    "Show the seven steps to a brother or sister and count them out loud",
    "Help to put soap and water ready where the family eats",
    "Draw the Pepper and Soap test in your journal and write one line under it"
  ],
  assessment:[
    "Demonstration: the child performs the seven steps in order while the class counts",
    "Oral quiz: name the four times the hands must be washed",
    "True or false with reasons: water alone, soap, drying, the four times — six items",
    "The Pepper and Soap drawing in the science journal, with one sentence saying what it showed",
    "Poster: the four times, drawn and labelled in the child's own words",
    "Class chart: the handwashing station monitor's record for the week, read privately with each child"
  ]
},

/* ----------------------------- GRADE 1 · PERIOD IV ---------------------------- */
{
  grade:1, period:"IV", sem:"Two", icon:"🛡️", healthPlan:true,
  title:"My Body Belongs to Me",
  subtitle:"Health strand · private and non-private parts — the parts a vest and pants cover, good touches and touches that are not good, and telling a trusted adult (guide p. 12)",
  outcomes:[
    "Name the private parts of the body as the parts a vest and pants cover",
    "Understand that their body belongs to them and that no one may touch their private parts",
    "Know what to do: say no, go away, and tell a trusted adult until someone helps"
  ],
  objectives:[
    "Say which parts of the body are private and which are not",
    "State the rule: private parts are covered, personal, and nobody may touch, look at or photograph them",
    "Tell the difference between a good touch and a touch that is not good",
    "Practise saying NO in a loud, clear voice and walking away",
    "Name three trusted adults and say what to tell them",
    "Say that a grown-up who asks a child to keep a touching secret is not keeping a promise"
  ],
  safeguard:"Private parts are named with the correct words on a chart or on a dressed/undressed drawing while clothes stay on. No child is ever asked to undress, to point at their own body, to touch another child, or to say anything about their own body in front of the class. Teach the words, not the bodies. If a child discloses a touch that worries you, listen once, do not question the child twice, write down what the child said in the child's own words, and hand it to the head teacher and the child's carer the same day — in Liberia, to the police Women and Children Protection Unit and the Ministry of Gender, Children and Social Protection; a recent assault goes to a health facility at once. Teachers never investigate and never promise to keep a disclosure secret.",
  note:"The parts of the body that a **vest and pants** (a swimsuit) cover are the **private parts**. They are the child's own. Nobody may touch them, look at them or take a picture of them, and no child is asked to show them. A **good touch** is safe and welcome — a handshake, a high-five you agreed to. Any other touch can be refused: **say NO, go away, and tell**.",
  study:[
    {k:"h3", t:"Private and Non-Private Parts"},
    {k:"p", t:"The **non-private** parts of the body are the hands, the arms, the face, the head, the legs and the feet — the parts everybody sees. The **private parts** are the parts a **vest and pants** (a swimsuit) cover: the **breasts**, the **buttocks** and the **genitals** (the vulva on a girl and the penis on a boy). The teacher names these on a chart, with the correct words, while clothes stay on."},
    {k:"h3", t:"The Rule of the Private Parts"},
    {k:"num", items:[
      "My body belongs to me.",
      "The parts my vest and pants cover are private.",
      "Nobody may touch them, look at them or take a picture of them.",
      "I do not show them to other children and I do not ask to see another child's.",
      "If anybody tries, I say NO, I go away, and I tell a trusted adult.",
      "I keep telling until somebody helps me."
    ]},
    {k:"h3", t:"Good Touches and Touches That Are Not Good"},
    {k:"p", t:"A **good touch** is safe, it is wanted, and it does not have to be secret: a handshake, a high-five you agreed to, a hand on the shoulder from a teacher, a parent washing a small child's back. A touch that is **not good** touches a private part, makes a child feel confused or afraid, or comes with a request to keep it secret. A child who feels “this is not right” is allowed to say no even to a grown-up, even to somebody in the family, even to somebody the child likes."},
    {k:"h3", t:"Say No, Go, Tell"},
    {k:"p", t:"Practise three moves until they are easy: **say NO** in a loud voice (“No! Stop! Do not touch me!”), **go** away to where there are people, and **tell** a **trusted adult** — mother, father, grandmother, an uncle the child trusts, the teacher, the school counsellor, the pastor or imam. A **trusted adult** is a grown-up who listens and who acts. If the first grown-up does not help, tell another. Telling is brave; it is never naughty and it is never telling tales."},
    {k:"h3", t:"Secrets"},
    {k:"p", t:"A **good secret** is a surprise for a birthday — it is kept for a short time and everybody laughs at the end. A **bad secret** is any touch or any picture that a grown-up says must not be told. A grown-up who asks a child to keep a touching secret is not keeping a promise; that is the moment to tell."}
  ],
  focus:[
    "Private and non-private parts, named on the chart",
    "The rule of the private parts: my body belongs to me",
    "Good touches and touches that are not good",
    "Say no, go away, tell a trusted adult — and keep telling",
    "Good secrets and bad secrets",
    "The class rule poster and the practice role play"
  ],
  terms:[
    {t:"private parts", d:"the parts a vest and pants cover: the breasts, the buttocks and the genitals", x:"Private parts are personal; nobody may touch them."},
    {t:"genitals", d:"the parts of the body used for making a baby and for passing urine", x:"The vulva and the penis are the genitals."},
    {t:"vest and pants", d:"the clothes that cover the private parts; a swimsuit covers the same parts", x:"The parts my vest and pants cover are private."},
    {t:"good touch", d:"a touch that is safe, wanted and not a secret", x:"A handshake is a good touch."},
    {t:"bad touch", d:"a touch of a private part, or one that frightens a child or must be kept secret", x:"A bad touch is told to a trusted adult."},
    {t:"trusted adult", d:"a grown-up who listens to a child and who acts to help", x:"My teacher is a trusted adult."},
    {t:"secret", d:"something only some people know; a bad secret about touching must always be told", x:"A touching secret is never kept."},
    {t:"no", d:"the word a child may say to any touch that is not wanted", x:"Say NO in a loud voice."},
    {t:"report", d:"to tell a trusted adult what happened", x:"Report to the head teacher or to your mother."},
    {t:"safety", d:"being free from harm", x:"Body safety means nobody touches your private parts."},
    {t:"rule", d:"a line that keeps people safe", x:"The class rule is: my body belongs to me."},
    {t:"brave", d:"not letting fear stop you from doing what is right", x:"Telling is brave, not naughty."}
  ],
  facts:[
    {q:"Which parts of the body are private parts?", a:"The parts a vest and pants (a swimsuit) cover: the breasts, the buttocks and the genitals."},
    {q:"Name two non-private parts.", a:"Hands, arms, face, legs or feet."},
    {q:"What should you do if somebody touches your private parts?", a:"Say NO, go away to where there are people, and tell a trusted adult — and keep telling until somebody helps."},
    {q:"Give one example of a good touch.", a:"A handshake, or a high-five you agreed to."},
    {q:"Name three trusted adults you could tell.", a:"Mother, father, grandmother, teacher, school counsellor, pastor or imam (any three)."},
    {q:"Is it naughty to tell about a bad touch?", a:"No. Telling is brave and it is how the child and other children are kept safe."},
    {q:"What is a bad secret?", a:"Any touch or picture that a grown-up says must not be told."},
    {q:"May a child say no to a grown-up?", a:"Yes. Any child may say no to any touch that is not wanted, and then tell."}
  ],
  tf:[
    {s:"Private parts may be shown to other children if they ask.", a:"false", why:"Private parts are personal; they are not shown and nobody asks to see them."},
    {s:"A handshake is a good touch.", a:"true", why:"It is safe, it is wanted and it is not a secret."},
    {s:"If the first grown-up does not help, a child should stop telling.", a:"false", why:"The rule is to keep telling until somebody helps."},
    {s:"A grown-up who asks a child to keep a touching secret is keeping a promise.", a:"false", why:"That is the moment to tell; no touching secret is ever kept."},
    {s:"Telling about a bad touch is brave.", a:"true", why:"Telling is how the child and other children are protected."},
    {s:"Only strangers touch children in ways that are not good.", a:"false", why:"Most harm is done by somebody the child knows, which is why the rule names any person at all."}
  ],
  classify:{
    title:"Is it a good touch or not?",
    groups:[
      {name:"Good touch", items:["a handshake","a high-five you agreed to","a hand on the shoulder from the teacher","a parent washing a small child's back"]},
      {name:"Not a good touch", items:["touching a private part","a touch that must be kept secret","a touch that hurts or frightens","taking pictures of private parts"]}
    ]
  },
  diagram:{
    title:"The parts of the body — private and not private",
    caption:"Write PRIVATE or NOT PRIVATE beside each part, using the chart.",
    parts:[
      {p:"Hands", f:"not private"},
      {p:"Face", f:"not private"},
      {p:"Arms and legs", f:"not private"},
      {p:"Breasts", f:"private"},
      {p:"Buttocks", f:"private"},
      {p:"Vulva (girl)", f:"private"},
      {p:"Penis (boy)", f:"private"},
      {p:"Hair and head", f:"not private"}
    ]
  },
  experiment:{
    title:"The Loud No Practice",
    aim:"To practise saying NO in a loud voice and walking away to safety.",
    materials:["Two hoops or two chalk circles on the floor, one labelled SAFE","A list of short practice lines written on the board","A whistle or a bell"],
    steps:[
      "The teacher reads a short, harmless practice line, such as “Come and see my new ball — do not tell anybody.”",
      "One child says NO in a loud, clear voice.",
      "The same child walks quickly from the first circle into the circle labelled SAFE.",
      "The class counts how many children can be heard at the back of the room.",
      "Repeat with a partner, then swap; nobody is ever asked to act out a real event."
    ],
    expect:"Every child says the word loudly enough to be heard across the room and moves to the safe place without stopping to argue.",
    why:"A child who has said NO out loud ten times in class can say it when it matters; the walk-away is practised so that it happens without thinking."
  },
  apply:[
    {q:"An older boy in the compound asks you to come into an empty room with him. What do you do?", a:"Say no, do not go in, stay where there are people, and tell a trusted adult the same day."},
    {q:"Somebody touches your private part and says “do not tell anybody or you will be beaten.” What do you do?", a:"Tell. Go to a trusted adult at once and keep telling until somebody helps; a touching secret is never kept."},
    {q:"Your friend tells you that somebody is touching her private parts. What do you do?", a:"Believe her, do not question her, and go with her straight to the teacher or to our mother — that is helping, not telling tales."},
    {q:"A grown-up asks to take a picture of you without your clothes. What do you say?", a:"No. Pictures of private parts are not taken; say no, go away and tell."},
    {q:"Your teacher gives you a high-five after your reading. Is that all right?", a:"Yes — it is a good touch: safe, wanted and not secret."}
  ],
  activities:[
    "Chart talk: the dressed and undressed drawing, private parts named with the correct words while clothes stay on",
    "Whole class: say the rule together — “My body belongs to me” — three times in a chorus",
    "Role play in pairs: the line, the loud NO, the walk away, and the telling to a trusted adult (no child acts out a real event)",
    "Poster: the class rule of the private parts, drawn and hung where the class can see it",
    "Trusted-adult circle: every child names three grown-ups they could tell",
    "Sorting game: good touch / not a good touch cards placed in the right hoop"
  ],
  materials:[
    "A dressed and undressed chart picture of a boy and a girl",
    "Poster paper and crayons for the class rule poster",
    "Two hoops or chalk circles for the sorting game and the Loud No practice",
    "Word cards — private, trusted adult, report, secret, no",
    "A whistle or a bell for the practice",
    "The school's own safeguarding route written on the board (head teacher, carer, WCPU)"
  ],
  aids:[
    "Dressed and undressed chart picture for naming the private parts",
    "Word cards and two hoops for the sorting game",
    "Poster paper and crayons for the class rule",
    "The practice lines written on the board",
    "A whistle or bell"
  ],
  home:[
    "Say the rule to your family: my body belongs to me, and I tell a trusted adult",
    "With your family, name three trusted adults you could run to in your own compound",
    "Tell your family the difference between a good secret and a touching secret",
    "Practise saying NO in a loud voice with a brother, sister or grown-up at home"
  ],
  assessment:[
    "Oral questions: name the private parts; say the rule; name three trusted adults",
    "Role play: the loud NO, the walk away and the telling, marked on all three moves",
    "Sorting task: good touch and not-a-good-touch cards placed correctly, with a reason",
    "The class rule poster, with every child's own line written under it",
    "True or false with reasons: six items, marked orally for the slower writers",
    "Teacher's record: every child has named at least three trusted adults, checked privately"
  ]
},

/* ------------------------------ GRADE 1 · PERIOD V ---------------------------- */
{
  grade:1, period:"V", sem:"Two", icon:"🚫", healthPlan:true,
  title:"Good Substances and Bad Substances",
  subtitle:"Health strand · substance abuse — what it is, the bad substances, the good substances, prescribed medication, and why children should not take in bad substances (guide pp. 12–13)",
  outcomes:[
    "Understand the danger of taking in bad substances and identify ways of avoiding drug abuse",
    "Identify the substances that are commonly abused",
    "Name good substances and say why children must never take a medicine that is not theirs"
  ],
  objectives:[
    "Say what substance abuse means",
    "Name bad substances found in the community: alcohol, drugs, cigarettes and tobacco",
    "Name good substances: clean water, juice, milk, fresh food",
    "Say that prescribed medication, such as paracetamol, is only taken when a health worker or a grown-up gives it",
    "Give reasons why children should not take in bad substances",
    "Refuse a bad substance in a clear voice and walk away"
  ],
  safeguard:"This unit names substances; it never asks a child what happens in their own house. No child is asked whether anybody at home drinks or smokes, and no child is named or shamed for what a family member does. If a child says something that suggests they are being given a substance, or that they are hungry or unsafe, write it in the child's own words and take it to the head teacher and the carer the same day.",
  note:"A **substance** is anything a person takes into the body. **Good substances** build the body: clean water, juice, milk and fresh food. **Bad substances** spoil it: alcohol, cigarettes and tobacco, and drugs people abuse. **Medicine** such as paracetamol is a good substance only when a health worker or a grown-up gives it in the right amount.",
  study:[
    {k:"h3", t:"What Substance Abuse Means"},
    {k:"p", t:"A **substance** is anything taken into the body — food, water, medicine, alcohol, tobacco. **Substance abuse** is taking something harmful into the body, or taking a medicine in the wrong way or in the wrong amount, so that it damages the person. A person who cannot stop taking it has an **addiction**, and that is an illness that needs help from a health worker."},
    {k:"h3", t:"Bad Substances"},
    {k:"bul", items:[
      "**Alcohol** — the drink grown-ups call beer, pahn, cane juice or spirit. It damages a child's growing brain and body.",
      "**Cigarettes and tobacco** — smoked, chewed or sniffed as snuff. They damage the lungs and the heart.",
      "**Drugs people abuse** — such as marijuana (also called ikwa, kush or any local name the children bring), and stronger drugs that are not medicine.",
      "**Cleaning liquids, petrol and glue** — sniffed by some people; they can stop the heart."
    ]},
    {k:"h3", t:"Good Substances"},
    {k:"p", t:"**Clean water**, **fruit juice**, **milk** and **fresh cooked food** are good substances: they build the body and the mind. A **prescribed medication** — the guide names paracetamol — is also a good substance, but only when a health worker or a grown-up gives it, in the amount written, to the person it was given for."},
    {k:"h3", t:"Why Children Must Not Take Bad Substances"},
    {k:"num", items:[
      "They make the body sick — the stomach, the liver, the lungs and the heart.",
      "They spoil the mind and the memory, so a child cannot learn.",
      "They cause accidents and fights.",
      "They waste the family's money that should buy food and school fees.",
      "They lead to addiction, and a child who starts young finds it hardest to stop.",
      "They can kill."
    ]},
    {k:"h3", t:"What a Child Does"},
    {k:"p", t:"A child **never tastes** a medicine that is not theirs, never takes a sweet or a drink from a stranger, never tastes a liquid under the sink or in a bottle without a label. The words are: “**No, thank you. I do not take that.**” Then walk away and tell a trusted adult."}
  ],
  focus:[
    "What a substance is, and what substance abuse means",
    "The bad substances: alcohol, cigarettes and tobacco, drugs people abuse",
    "The good substances: water, juice, milk, fresh food",
    "Prescribed medication: paracetamol is only taken when a grown-up gives it",
    "Six reasons a child must not take in bad substances",
    "The refusal line and walking away"
  ],
  terms:[
    {t:"substance", d:"anything a person takes into the body", x:"Water is a substance."},
    {t:"substance abuse", d:"taking something harmful into the body, or taking a medicine in the wrong way", x:"Substance abuse damages the body."},
    {t:"drug", d:"a substance that changes the way the body works; some are medicine and some are abused", x:"A drug is only taken when a health worker gives it."},
    {t:"alcohol", d:"a drink such as beer, pahn or spirit that harms a child's body and mind", x:"Alcohol is a bad substance for children."},
    {t:"tobacco", d:"the leaf smoked in cigarettes or sniffed as snuff", x:"Tobacco damages the lungs."},
    {t:"medicine", d:"a substance given by a health worker to cure or to stop pain", x:"Paracetamol is a medicine."},
    {t:"prescribed", d:"given by a health worker, with the amount written for one person", x:"Prescribed medicine is only for the person it was given to."},
    {t:"dose", d:"the amount of medicine to be taken at one time", x:"The dose is written on the label."},
    {t:"addiction", d:"when a person cannot stop taking a substance", x:"Addiction is an illness that needs help."},
    {t:"poison", d:"a substance that harms or kills the body", x:"Petrol and cleaning liquid are poisons."},
    {t:"refuse", d:"to say no clearly", x:"Refuse in a loud voice and walk away."},
    {t:"label", d:"the writing on a bottle or packet that says what is inside", x:"Never drink from a bottle with no label."}
  ],
  facts:[
    {q:"What is a substance?", a:"Anything a person takes into the body."},
    {q:"Name three bad substances.", a:"Alcohol, cigarettes or tobacco, and drugs that people abuse."},
    {q:"Name three good substances.", a:"Clean water, fruit juice, milk, fresh food."},
    {q:"Why must a child never take a medicine that is not theirs?", a:"The dose may be wrong, the medicine may be for another illness, and it may poison the child."},
    {q:"Give two reasons a child should not drink alcohol.", a:"It damages the growing body and mind, it causes accidents and fights, and it wastes the family's money."},
    {q:"What is addiction?", a:"When a person cannot stop taking a substance; it is an illness that needs help from a health worker."},
    {q:"What should you do with a bottle of liquid you find under the sink?", a:"Do not taste it, do not smell it; leave it and call a grown-up at once."},
    {q:"Say the refusal line.", a:"“No, thank you. I do not take that.” — then walk away and tell a trusted adult."}
  ],
  tf:[
    {s:"A child may take any medicine found in the house.", a:"false", why:"Only a health worker or a grown-up gives medicine, and only the medicine meant for you."},
    {s:"Cigarettes are good for the lungs.", a:"false", why:"Cigarettes and tobacco damage the lungs and the heart."},
    {s:"Clean water is a good substance.", a:"true", why:"Water builds the body and keeps it working."},
    {s:"Paracetamol can be taken in any amount because it is a medicine.", a:"false", why:"The dose is given by a health worker; too much paracetamol damages the liver."},
    {s:"A child should taste a liquid to find out what it is.", a:"false", why:"Never taste an unknown liquid — it may be a poison."},
    {s:"Addiction is an illness that needs help.", a:"true", why:"A person who cannot stop needs a health worker, not blame."}
  ],
  classify:{
    title:"Good or bad for the body?",
    groups:[
      {name:"Good substances", items:["clean water","fruit juice","milk","fresh food","medicine given by a health worker"]},
      {name:"Bad substances", items:["alcohol","cigarettes","tobacco","drugs people abuse","petrol and cleaning liquid"]},
      {name:"Good habits", items:["washing hands with soap","brushing teeth","telling a trusted adult","asking a grown-up before taking anything"]}
    ]
  },
  diagram:{
    title:"What goes into my body",
    caption:"Write GOOD or BAD beside each substance and say why.",
    parts:[
      {p:"Clean water", f:"good — it builds the body"},
      {p:"Fruit juice", f:"good — it gives vitamins"},
      {p:"Milk", f:"good — it builds bones and teeth"},
      {p:"Paracetamol", f:"good only when a grown-up or health worker gives it"},
      {p:"Alcohol", f:"bad — it damages the body and mind"},
      {p:"Cigarettes", f:"bad — they damage the lungs"},
      {p:"Petrol", f:"bad — it is a poison"},
      {p:"Sweets from a stranger", f:"bad — never taken from somebody you do not know"}
    ]
  },
  experiment:{
    title:"The Label Detective",
    aim:"To show how to tell a safe substance from a dangerous one before anything is taken.",
    materials:["Three clean, empty containers: a medicine packet, a drink bottle, a cleaning-liquid bottle","A chart with three columns: name, who gives it, what it is for","Crayons"],
    steps:[
      "Look at each container in turn and read the label out loud, or ask the teacher to read it.",
      "Sort the containers: one that a health worker gives, one that anybody may drink, one that nobody drinks.",
      "Write the name of each in the right column of the chart.",
      "Say the rule for each column out loud.",
      "Draw the three containers in the science journal with the word SAFE or NEVER under each."
    ],
    expect:"Every container is placed in the right column and the class can say the rule for each: medicine only from a health worker, a drink only from a labelled bottle, a cleaning liquid never.",
    why:"The label, not the look of the liquid, is what tells a person what is safe; a child who checks a label first does not need to taste anything."
  },
  apply:[
    {q:"A man in the street gives you a sweet and says it will make you feel happy. What do you do?", a:"Do not take it; say “No, thank you”, walk away and tell a trusted adult the same day."},
    {q:"You find a sweet-smelling bottle of liquid under the sink. What do you do?", a:"Do not taste or smell it; leave it and call a grown-up at once."},
    {q:"Your head hurts and there is paracetamol in the cupboard from your brother's illness. What do you do?", a:"Tell a grown-up; the medicine is only taken when a grown-up or a health worker gives it to you."},
    {q:"Somebody offers you a cigarette and says “just try, once”. What do you say?", a:"“No, thank you. I do not take that.” Then walk away and tell."},
    {q:"Your uncle drinks every evening and the family is hungry. What is the right way to think about it?", a:"Alcohol wastes money that should buy food, and a person who cannot stop needs help from a health worker — not blame; a child tells a trusted adult if there is no food."}
  ],
  activities:[
    "Role play in pairs: the offer and the refusal — “No, thank you. I do not take that.” — and the walk away",
    "Sorting game: good substances and bad substances cards placed in the right hoop, with a reason",
    "Label Detective with three clean, empty containers",
    "Pairs act out how a person who is drunk behaves; the class discusses the effects afterwards (the guide's own activity)",
    "Poster: “Good substances, bad substances” for the classroom wall",
    "Class slogan, said three times in a chorus: “My body is not a dustbin — I do not put bad things into it.”"
  ],
  materials:[
    "Magazine cutouts of personal hygiene and food materials",
    "Empty clean packages of safe medicine (paracetamol) for the sorting talk",
    "Three clean, empty containers with labels for the Label Detective",
    "Two hoops or boxes labelled GOOD and BAD",
    "A chart of the “do's” for the body",
    "Poster paper and crayons"
  ],
  aids:[
    "Good and bad substance cards for sorting",
    "Empty clean medicine packet and drink bottle",
    "Two hoops labelled GOOD and BAD",
    "Chart with the three columns for the Label Detective",
    "Poster paper and crayons"
  ],
  home:[
    "Name three good substances at the table and say what each one does for the body",
    "With a grown-up, find the label on one medicine in the house and read who it is for",
    "Say the refusal line to your family and tell them who your trusted adults are",
    "Help to put every cleaning liquid up high, away from small children"
  ],
  assessment:[
    "Oral quiz: name three bad substances and three good substances",
    "Sorting task: the substance cards placed in the right hoop with a reason for each",
    "The Label Detective chart, completed in pairs",
    "Refusal role play, marked on the clear NO, the walk away and the telling",
    "Written work: true or false with reasons, six items",
    "Poster and slogan: the class says the slogan together and each child names one good substance"
  ]
},

/* ------------------------------ GRADE 1 · PERIOD VI --------------------------- */
{
  grade:1, period:"VI", sem:"Two", icon:"💛", healthPlan:true,
  title:"HIV, AIDS and Caring for People Who Are Sick",
  subtitle:"Health strand · HIV and AIDS — what HIV is, ways of getting and not getting HIV, and care for people living with HIV (guide p. 13)",
  outcomes:[
    "Explain basic facts about HIV and AIDS and how it can affect our lives",
    "State ways of getting HIV and ways of not getting it",
    "Show care and kindness to a person who is sick, and never laugh at or avoid them"
  ],
  objectives:[
    "Say what HIV is in words a small child can use",
    "Say that HIV is not caught by playing, hugging, sharing a cup or sitting together",
    "Say that you must never touch another person's blood or an open wound",
    "Say what a person living with HIV needs: care, food, rest and medicine",
    "Say that nobody in the class is ever pointed at or laughed at because of an illness",
    "Answer the guide's picture talk: what does the person with the “big, big disease” need?"
  ],
  safeguard:"HIV teaching at this age is about care and kindness, never about who is sick. No child is ever asked whether anybody at home is sick, and no child is named, pointed at or left out because of an illness in their family. If a child discloses something that worries you, listen once, do not question the child twice, write it down in the child's own words and take it to the head teacher and the carer the same day.",
  note:"**HIV** is a very tiny **virus** that weakens the body's defence against sickness. When the defence has been weak for a long time, the person is ill with **AIDS**. Nobody catches HIV by playing, hugging, sharing a cup or sitting with a person who has it. What a child must do is stay clean, never touch blood or an open wound, and treat everybody with **kindness**.",
  study:[
    {k:"h3", t:"What HIV Is"},
    {k:"p", t:"**HIV** is a very tiny **virus** — far too small to see — that gets inside the body and weakens its **defence** against sickness. The defence is the part of the body that fights germs; with HIV it becomes weak, and after a long time the person is ill with **AIDS**. A person with HIV can look and play like anybody else, and can live a long life with the right medicine and food."},
    {k:"h3", t:"How HIV Is Not Got"},
    {k:"bul", items:[
      "Not by playing together.",
      "Not by sitting beside somebody in class.",
      "Not by hugging.",
      "Not by sharing a cup, a plate or a spoon that has been washed.",
      "Not by a mosquito bite.",
      "Not by being taught by, or cared for by, somebody living with HIV."
    ]},
    {k:"h3", t:"How HIV Can Be Got — and What a Child Does"},
    {k:"p", t:"HIV lives in the blood of a person who has it, and it passes when that blood gets into another person's blood — through an open cut, or through a needle or a blade that has not been cleaned. What a child does is simple and always the same: **never touch another person's blood**, never touch an open wound without a grown-up, never pick up a used blade or needle — call a grown-up — and never share a blade, a needle or a toothbrush with anybody. If you get a cut, wash it with clean water and soap and let a grown-up cover it."},
    {k:"h3", t:"Caring for a Person Who Is Sick"},
    {k:"p", t:"The guide asks the class the picture talk: “**big, big disease** — what does the person in the picture need?” The answer a child gives is: **care, food, rest and medicine**. A person who is sick needs a friend, a plate of food, quiet rest, and the medicine the clinic gives. **Stigma** — laughing at somebody, pointing, or moving away — makes the illness worse and it is never allowed in this class."},
    {k:"h3", t:"What We Do in This Class"},
    {k:"num", items:[
      "We play with everybody.",
      "We never laugh at a person who is sick, or at a person whose family member is sick.",
      "We never touch blood or an open wound; we call a grown-up.",
      "We never pick up a used blade, needle or razor — we tell a grown-up.",
      "We treat a visitor, a teacher or a classmate who is ill with kindness.",
      "We tell a trusted adult if anybody makes us afraid."
    ]}
  ],
  focus:[
    "What HIV is, in a small child's words",
    "How HIV is not got: playing, hugging, sharing a cup, a mosquito",
    "How it can be got, and what a child does: never touch blood",
    "The picture talk: what does the person with the big, big disease need?",
    "Care and kindness; no stigma in this class",
    "The class kindness chart for the last week"
  ],
  terms:[
    {t:"HIV", d:"a very tiny virus that weakens the body's defence against sickness", x:"HIV can be prevented."},
    {t:"AIDS", d:"the illness that develops when HIV has weakened the body for a long time", x:"AIDS develops from untreated HIV."},
    {t:"virus", d:"a germ far too small to see that causes disease", x:"HIV is a virus."},
    {t:"defence", d:"the part of the body that fights germs", x:"HIV weakens the body's defence."},
    {t:"blood", d:"the red liquid inside the body that carries life", x:"Never touch another person's blood."},
    {t:"wound", d:"a cut or a break in the skin", x:"Wash a wound and let a grown-up cover it."},
    {t:"blade", d:"a razor or sharp knife", x:"Never pick up a used blade."},
    {t:"needle", d:"a sharp pointed instrument used at the clinic", x:"Never pick up a used needle; tell a grown-up."},
    {t:"medicine", d:"what a health worker gives to make a person better", x:"A person with HIV takes medicine from the clinic."},
    {t:"care", d:"looking after somebody who is ill", x:"A sick person needs care and food."},
    {t:"kindness", d:"treating a person gently and well", x:"Show kindness to everybody in the class."},
    {t:"stigma", d:"laughing at, pointing at or avoiding a person because of an illness", x:"Stigma is never allowed in this class."}
  ],
  facts:[
    {q:"What is HIV?", a:"A very tiny virus that weakens the body's defence against sickness."},
    {q:"Can you catch HIV by playing with a child who has HIV?", a:"No. HIV is not spread by playing, hugging, sharing a cup or sitting together."},
    {q:"Can a mosquito give you HIV?", a:"No. HIV is not carried by a mosquito."},
    {q:"What must you never touch?", a:"Another person's blood or an open wound; call a grown-up."},
    {q:"You see a used blade in the yard. What do you do?", a:"Do not touch it. Tell a grown-up at once."},
    {q:"What does a person who is sick need?", a:"Care, food, rest and the medicine the clinic gives."},
    {q:"Some children laugh at a boy because his mother is sick. What should the class do?", a:"Stop the laughing and keep the boy as a friend; stigma is not allowed and it makes the illness worse."},
    {q:"What do you do if you cut your finger?", a:"Wash it with soap and clean water and let a grown-up cover it."}
  ],
  tf:[
    {s:"You can catch HIV by playing with a child who has HIV.", a:"false", why:"HIV is not spread by playing, hugging, sharing a cup or sitting together."},
    {s:"A mosquito can give a person HIV.", a:"false", why:"HIV is not carried by mosquitoes."},
    {s:"You should never touch another person's blood.", a:"true", why:"HIV can pass through blood into an open cut; call a grown-up."},
    {s:"A person who is sick should be left alone by the class.", a:"false", why:"A sick person needs care, food, rest and medicine — and a friend."},
    {s:"HIV can be prevented.", a:"true", why:"Clean habits, never touching blood and safe behaviour prevent HIV."},
    {s:"It is all right to pick up a used needle if you are careful.", a:"false", why:"Never pick up a used needle or blade; tell a grown-up."}
  ],
  classify:{
    title:"Can HIV be got this way?",
    groups:[
      {name:"No — safe", items:["playing together","hugging","sharing a washed cup","sitting together in class","a mosquito bite","being taught by a person with HIV"]},
      {name:"Never do this", items:["touching somebody's blood","touching an open wound","sharing a blade or a razor","picking up a used needle","sharing a toothbrush"]}
    ]
  },
  diagram:{
    title:"What a person who is sick needs",
    caption:"Write the four things under the picture and say why each one matters.",
    parts:[
      {p:"Care", f:"somebody to stay with them and to fetch help"},
      {p:"Food", f:"good food gives the body strength to fight"},
      {p:"Rest", f:"sleep lets the body repair itself"},
      {p:"Medicine", f:"the clinic's medicine, taken every day as told"},
      {p:"A friend", f:"kindness, so the person is not left alone"},
      {p:"No stigma", f:"nobody laughs, points or moves away"}
    ]
  },
  experiment:{
    title:"The Kindness Chain",
    aim:"To show that the class can keep one another safe and well by what it does, not by who it avoids.",
    materials:["A strip of paper for each child","Crayons","Sticky tape or glue","A wall space where the chain can hang"],
    steps:[
      "Every child writes or dictates one kind thing the class does for a person who is sick.",
      "The teacher writes the child's sentence for the children who are still learning to write.",
      "Each strip is made into a loop and the loops are taped together into a chain.",
      "The chain is hung across the classroom.",
      "The class reads three of the strips out loud each day for a week."
    ],
    expect:"A chain long enough to cross the wall, with a kind action — never a person's name — on every strip.",
    why:"What a small child can do about HIV is exactly this: keep clean, never touch blood, and treat every person with kindness. Saying it daily makes it the habit of the class."
  },
  apply:[
    {q:"A boy in your class has AIDS and other children avoid him. What should you do?", a:"Play with him and treat him kindly; he needs care, food, rest and medicine, and no child catches HIV by playing or sitting with him."},
    {q:"You and a friend find a used razor blade on the path to school. What do you do?", a:"Do not touch it; tell a grown-up at once so that it can be taken away safely."},
    {q:"Your friend's father is sick and the other children say his house has “the big disease”. What do you say?", a:"Say that nobody is laughed at for an illness; sickness is not a shame and the family needs our kindness."},
    {q:"You fall and cut your knee in the yard. What do you do?", a:"Wash it with soap and clean water and let a grown-up cover it; do not let anybody else's blood touch the cut."},
    {q:"A visitor comes to class who is thin and ill. What does the class do?", a:"Welcome the visitor, give them a seat, and treat them with respect and kindness."}
  ],
  activities:[
    "Picture talk on the “big, big disease”: what does the person in the picture need? (the guide's own activity)",
    "The Kindness Chain: one strip per child, hung across the classroom",
    "Whole class: “Can HIV be got this way?” — cards placed in the YES or NO hoop",
    "Choral rule: “We never touch blood; we call a grown-up” — said three times",
    "Drawing: “What I can do to keep my body safe”, with the teacher's sentence underneath",
    "End-of-year health fair: the class shows its handwashing, its body-rule poster and its kindness chain to another class"
  ],
  materials:[
    "A picture of a person who is ill for the picture talk",
    "Posters and magazine cutouts of children playing together",
    "Strips of paper, crayons and tape for the Kindness Chain",
    "Two hoops labelled YES and NO for the sorting game",
    "A chart of the body's defence drawn simply by the teacher",
    "The class handwashing station, for the health fair"
  ],
  aids:[
    "Picture of a person who is ill, for the picture talk",
    "Sorting cards and two hoops",
    "Paper strips, crayons and tape for the chain",
    "The class body-rule poster from Period IV",
    "Soap, water and towel for the health fair"
  ],
  home:[
    "Tell your family the ways HIV is not got: playing, hugging, sharing a washed cup, a mosquito",
    "Say the blood rule to your family: never touch blood or an open wound — call a grown-up",
    "With your family, name one kind thing you could do for a sick neighbour",
    "Show your family the seven handwashing steps once more, and say when to do them"
  ],
  assessment:[
    "Oral quiz: what HIV is, and four ways it is not got",
    "Sorting task: “Can HIV be got this way?” cards, with a reason for each",
    "The picture talk: each child says one thing the sick person needs",
    "The Kindness Chain, with one kind action from every child",
    "Written work: true or false with reasons, six items, read aloud for the slower writers",
    "End-of-year health fair: the class demonstrates handwashing, says the body rule and presents the kindness chain"
  ]
},
/* ==========================================================================
   GRADE 2 — the guide's health content sits in Period III (pp. 18-19,
   “EXPLORING HUMAN BODY”) and Period VI (pp. 24-25, “EXPLORING DRUGS ·
   EXPLORING MY BODY”). Those two keep their numbers below; Periods I, II take
   the guide's own opening activities for the grade (naming the major parts
   including the five sense organs, the senses and the organs used for sensing),
   Period IV carries the privacy and body-respect column of p. 19, and Period V
   takes the drugs column of p. 24.
   ========================================================================== */

/* ------------------------------ GRADE 2 · PERIOD I ------------------------------ */
{
  grade:2, period:"I", sem:"One", icon:"🧍", healthPlan:true,
  title:"The Major Parts of the Human Body",
  subtitle:"Health strand · exploring the human body — naming the major parts including the five sense organs, and matching each part with its proper function (guide p. 18, with objective 4 of p. 24)",
  outcomes:[
    "Name the major parts of the human being",
    "Match each part of the body with its proper function",
    "Appreciate that the body is made of parts that work together"
  ],
  objectives:[
    "Name the major parts of the human body: head, neck, shoulders, chest, arms, hands, belly, back, legs and feet",
    "Name the five sense organs and say which sense each one carries",
    "Match each part with the work it does",
    "Name the parts inside the body that keep a person alive: the heart, the lungs, the stomach and the brain",
    "Sing the body-parts song to remember the names",
    "Say why a body needs every one of its parts"
  ],
  safeguard:"Parts are named with the correct words while clothes stay on; private parts are named on a chart only and no child is ever asked to point at, show or touch their own. If a child says something that worries you, listen once, do not question the child twice, write it down in the child's own words, and take it to the head teacher and the child's carer the same day.",
  note:"The human body has an **outside** — the parts we can see and name — and an **inside**, where the **heart**, the **lungs**, the **stomach** and the **brain** do the work that keeps a person alive. Every part has a **function**: a work that only it does well.",
  study:[
    {k:"h3", t:"The Parts We Can See"},
    {k:"p", t:"From the top down, the major parts of a human being are the **head**, the **neck**, the **shoulders**, the **chest**, the **arms** with the **hands** and **fingers**, the **belly**, the **back**, and the **legs** with the **knees**, **feet** and **toes**. The guide asks the class to name them with a song — “**Head, shoulders, knees and toes, knees and toes**” — because a word sung is a word kept."},
    {k:"table", head:["Part","Its proper function","What happens if it is hurt"],
     rows:[
      ["Head (with the brain)","Thinks, remembers, tells the body what to do","A hard knock on the head is dangerous"],
      ["Eyes","See","A person cannot see the way"],
      ["Ears","Hear","Sounds are missed"],
      ["Nose","Smells and breathes","Breathing is hard when it is blocked"],
      ["Mouth and teeth","Eats, tastes, chews, speaks","Food cannot be chewed well"],
      ["Chest (with heart and lungs)","Pumps blood and breathes air","The body cannot get air or blood"],
      ["Arms and hands","Reach, carry, hold, write, feel","Work becomes hard"],
      ["Belly (with the stomach)","Digests the food","Food is not turned into strength"],
      ["Legs and feet","Stand, walk, run, jump","A person cannot move about"]
     ]},
    {k:"h3", t:"The Five Sense Organs"},
    {k:"p", t:"Five parts carry the senses to the brain: the **eyes** (sight), the **ears** (hearing), the **nose** (smell), the **tongue** (taste) and the **skin** (touch). These are the **sense organs**, and they are the body's way of knowing what is happening outside it."},
    {k:"h3", t:"The Parts Inside"},
    {k:"p", t:"Some of the most important parts cannot be seen. The **heart** pumps the blood round the body. The **lungs** take air in and out. The **stomach** turns food into the strength the body uses. The **brain** inside the head thinks, remembers and tells every other part what to do. Because they are inside, they must be protected: that is why we do not fight with the chest, why we do not run with something sharp in the mouth, and why we wear a helmet or carry a load on the head with care."},
    {k:"h3", t:"Every Part Matters"},
    {k:"p", t:"No part of the body is useless. A person who cannot walk still thinks, speaks and loves; a person who cannot see still hears, feels and remembers. In this class nobody is laughed at because of the way their body works, and a child who uses a stick, a chair or a hearing aid is helped, not mocked."}
  ],
  focus:[
    "Naming the major parts of the human body",
    "Matching each part with the work it does",
    "The five sense organs and their senses",
    "The parts inside: heart, lungs, stomach, brain",
    "The body-parts song",
    "Every part matters: nobody is laughed at for the way their body works"
  ],
  terms:[
    {t:"human being", d:"a person", x:"A human being has a head, a trunk and four limbs."},
    {t:"major part", d:"one of the big named parts of the body", x:"The chest is a major part."},
    {t:"function", d:"the work a part of the body does", x:"The function of the heart is to pump blood."},
    {t:"sense organ", d:"the eyes, ears, nose, tongue or skin", x:"The tongue is a sense organ for taste."},
    {t:"sense", d:"sight, hearing, smell, taste or touch", x:"We have five senses."},
    {t:"heart", d:"the part inside the chest that pumps blood", x:"The heart pumps blood round the body."},
    {t:"lungs", d:"the two parts inside the chest that take air in and out", x:"The lungs breathe air."},
    {t:"stomach", d:"the part inside the belly that turns food into strength", x:"Food goes to the stomach."},
    {t:"brain", d:"the part inside the head that thinks and controls the body", x:"The brain remembers what we learn."},
    {t:"blood", d:"the red liquid the heart pumps round the body", x:"Blood carries strength to every part."},
    {t:"chest", d:"the front of the trunk, holding the heart and lungs", x:"The chest rises when we breathe in."},
    {t:"protect", d:"to keep safe from harm", x:"We protect the head from hard knocks."}
  ],
  facts:[
    {q:"Name five major parts of the human body.", a:"Head, neck, shoulders, chest, arms, hands, belly, back, legs, feet (any five)."},
    {q:"What is the function of the heart?", a:"It pumps blood round the whole body."},
    {q:"What do the lungs do?", a:"They take air in and out when we breathe."},
    {q:"Name the five sense organs.", a:"Eyes, ears, nose, tongue and skin."},
    {q:"Which sense does the skin carry?", a:"Touch — heat, cold, pain and pressure."},
    {q:"What does the stomach do?", a:"It digests the food and turns it into the strength the body uses."},
    {q:"Why must we protect the head?", a:"The brain is inside it; a hard knock on the head can hurt the brain."},
    {q:"Why is nobody laughed at for the way their body works?", a:"Because every person is made in their own way and every person deserves respect."}
  ],
  tf:[
    {s:"The heart pumps blood round the body.", a:"true", why:"That is the function of the heart."},
    {s:"The lungs digest the food.", a:"false", why:"The stomach digests food; the lungs breathe air."},
    {s:"The skin is one of the five sense organs.", a:"true", why:"The skin carries the sense of touch."},
    {s:"The brain is inside the belly.", a:"false", why:"The brain is inside the head; the stomach is inside the belly."},
    {s:"Every part of the body has a function.", a:"true", why:"Each part does a work that the others cannot do as well."},
    {s:"A child who cannot walk is useless.", a:"false", why:"No part of a person makes them useless; a person who cannot walk still thinks, speaks and loves."}
  ],
  classify:{
    title:"Which part does the work?",
    groups:[
      {name:"Seeing, hearing, smelling, tasting", items:["eyes","ears","nose","tongue","skin"]},
      {name:"Moving and holding", items:["arms","hands","fingers","legs","feet"]},
      {name:"Working inside", items:["heart","lungs","stomach","brain"]},
      {name:"Covering and protecting", items:["skin","hair","nails","skull"]}
    ]
  },
  diagram:{
    title:"Match the part with its function",
    caption:"Draw a line from each part to the work it does.",
    parts:[
      {p:"Heart", f:"pumps blood round the body"},
      {p:"Lungs", f:"take air in and out"},
      {p:"Stomach", f:"digests the food"},
      {p:"Brain", f:"thinks and tells the body what to do"},
      {p:"Eyes", f:"see"},
      {p:"Ears", f:"hear"},
      {p:"Legs and feet", f:"stand, walk and run"},
      {p:"Skin", f:"covers the body and feels"}
    ]
  },
  experiment:{
    title:"The Breathing and Pulse Count",
    aim:"To show that the heart and the lungs are working inside the body all the time.",
    materials:["A clock or a watch with a second hand","Paper and pencil","A chart drawn on the board for the class results"],
    steps:[
      "Sit quietly for one minute and count how many times your chest rises — that is your breathing.",
      "Put two fingers on the inside of your wrist or on the side of your neck and count the beats for one minute — that is your pulse.",
      "Write both numbers down.",
      "Walk briskly round the compound for two minutes.",
      "Sit down and count the breathing and the pulse again at once.",
      "Compare the two sets of numbers on the class chart."
    ],
    expect:"Both numbers are higher straight after the walk, and they come back down after a rest.",
    why:"The lungs take in more air and the heart pumps faster when the body needs more strength; that is how we know the two organs inside the chest are working."
  },
  apply:[
    {q:"Your friend falls and knocks his head on the desk. What do you do?", a:"Tell the teacher at once; a knock on the head is serious because the brain is inside."},
    {q:"Why do we not run with a pencil or a stick in the mouth?", a:"A fall can push it into the mouth, the throat or the brain; it is a wrong use of the body."},
    {q:"A boy in your class is blind. What can he do, and how do you help him?", a:"He can hear, feel, think, learn and play; I offer my arm for the way, describe what is on the board, and never laugh at him."},
    {q:"You ran all the way to school and your chest is moving fast. Why?", a:"The body needed more air, so the lungs breathed faster and the heart pumped faster to carry it."},
    {q:"Why does the teacher say the body is like a team?", a:"Because every part has its own work and the body is only well when all the parts work together."}
  ],
  activities:[
    "Song: “Head, shoulders, knees and toes” — naming the parts as the class sings (the guide's own activity)",
    "Whole class: name the major parts on the chart while a volunteer points to them on their own body",
    "Matching game: part cards and function cards paired on the board",
    "The Breathing and Pulse Count, with the class chart of before and after",
    "Drawing and labelling a body with the four inside parts in the right places",
    "Choral line: “Every part of my body has a work to do”"
  ],
  materials:[
    "Chart naming the parts of the body, including the inside parts",
    "Pictures of the body with the heart, lungs, stomach and brain shown",
    "Word cards for the parts and for their functions",
    "A clock or watch with a second hand",
    "Paper, pencils and crayons",
    "Poster paper for the class body drawing"
  ],
  aids:[
    "Chart of the parts of the body, outside and inside",
    "Part and function word cards for the matching game",
    "A clock with a second hand for the pulse count",
    "Class results chart drawn on the board",
    "Crayons and paper for the labelled drawing"
  ],
  home:[
    "Teach “Head, shoulders, knees and toes” to somebody at home and name the parts in your own language too",
    "Count your breathing for one minute while sitting, and again after running; tell the class the two numbers",
    "Draw a body and put the heart, lungs, stomach and brain in the right places",
    "Name three parts inside the body to your family and say what each one does"
  ],
  assessment:[
    "Oral naming: ten major parts, pointed to on the chart",
    "Matching: each part joined to the right function, eight items",
    "The Breathing and Pulse record, with the two numbers and one sentence saying why they changed",
    "Labelled drawing of the body with the four inside parts",
    "Written work: true or false with reasons, six items",
    "Science journal: “The part of my body I am most careful with, and why”"
  ]
},

/* ----------------------------- GRADE 2 · PERIOD II ----------------------------- */
{
  grade:2, period:"II", sem:"One", icon:"👀", healthPlan:true,
  title:"My Senses and How They Keep Me Safe",
  subtitle:"Health strand · the senses and the body organs used for sensing — how the five senses warn the body and keep a child safe (guide p. 18, activity 2)",
  outcomes:[
    "Name the five senses and the organ that carries each one",
    "Explain how the senses warn the body of danger",
    "Care for the sense organs so that they keep working"
  ],
  objectives:[
    "Name the five senses and match each to its sense organ",
    "Say what each sense tells a child about the world",
    "Give one danger that each sense warns of",
    "State how to care for the eyes, the ears, the nose, the tongue and the skin",
    "Say what to do when a sense is lost or damaged",
    "Test one sense in class and record what the class finds"
  ],
  safeguard:"Sense tests are done with clean, safe materials only: nothing is put in the ear, nothing is put in the eye, and no food is used in a tasting test unless the teacher knows it is safe for every child. A child with a disability of sight, hearing or speech is helped and never used as an example without their own agreement. If a child seems not to see the board or not to hear the teacher, write it down and ask the family to take the child to the clinic — quietly, never in front of the class. Anything a child says that worries you is written in the child's own words and reported to the head teacher the same day.",
  note:"The five **senses** are the body's warning system. **Sight**, **hearing**, **smell**, **taste** and **touch** tell the brain what is happening outside the body, and the brain decides what to do about it. A sense organ that is cared for keeps working for a whole life.",
  study:[
    {k:"h3", t:"The Five Senses and Their Organs"},
    {k:"table", head:["Sense","Sense organ","What it tells us","The danger it warns of"],
     rows:[
      ["Sight","Eyes","Colour, shape, size, movement, writing","A hole in the path, a car coming, a fire"],
      ["Hearing","Ears","Sound, voices, warning shouts","A car horn, a call for help, a falling branch"],
      ["Smell","Nose","Smells — good and bad","Smoke, gas, food that has gone bad"],
      ["Taste","Tongue","Sweet, sour, salt, bitter","Food that is spoilt or poisonous"],
      ["Touch","Skin","Heat, cold, pain, pressure, roughness","Fire, a hot pot, a sharp edge, a rough road"]
     ]},
    {k:"h3", t:"How a Sense Keeps a Child Safe"},
    {k:"bul", items:[
      "**Sight** — look before you cross the road; look where you put your foot.",
      "**Hearing** — listen for the horn, for the teacher's call, for a cry for help.",
      "**Smell** — smoke in the night means wake the house; food that smells bad is not eaten.",
      "**Taste** — food that tastes strange is spat out and reported to a grown-up.",
      "**Touch** — a hot pot is let go at once; a cut is washed and covered."
    ]},
    {k:"h3", t:"Caring for the Sense Organs"},
    {k:"num", items:[
      "**Eyes** — wash the face, never rub with dirty hands, never look straight at the sun, and sit where you can see the board.",
      "**Ears** — wash only the outside, never push anything inside, and keep away from loud noise close to the ear.",
      "**Nose** — blow gently into a tissue and bin it; do not pick the nose.",
      "**Tongue** — brush it when you brush the teeth; do not taste anything you do not know.",
      "**Skin** — bathe daily, dry well, wear shoes, and cover cuts.",
      "**All of them** — tell a grown-up at once if a sense is hurt or stops working."
    ]},
    {k:"h3", t:"When a Sense Does Not Work"},
    {k:"p", t:"Some people cannot see well, cannot hear well, or cannot speak. They are not less than anybody. A person who cannot see counts the steps to the latrine and listens for voices; a person who cannot hear watches faces and reads lips. In this class a child who cannot see the board sits in front, and a child who cannot hear sits where they can watch the teacher's face — and nobody is laughed at, because a body that works differently is still a person's own body."}
  ],
  focus:[
    "The five senses and the organ for each",
    "What each sense tells us about the world",
    "The dangers the senses warn of",
    "Caring for the eyes, ears, nose, tongue and skin",
    "When a sense does not work well",
    "The class sense test and what it showed"
  ],
  terms:[
    {t:"sense", d:"sight, hearing, smell, taste or touch", x:"We have five senses."},
    {t:"sight", d:"the sense of seeing, carried by the eyes", x:"Sight warns me of a car coming."},
    {t:"hearing", d:"the sense of hearing sound, carried by the ears", x:"Hearing catches the teacher's call."},
    {t:"smell", d:"the sense carried by the nose", x:"Smell warns me that food has spoilt."},
    {t:"taste", d:"the sense carried by the tongue", x:"Taste tells me the food is sour."},
    {t:"touch", d:"the sense carried by the skin", x:"Touch tells me the pot is hot."},
    {t:"warning", d:"a sign that something is dangerous", x:"Smoke is a warning of fire."},
    {t:"danger", d:"something that can harm the body", x:"A hot pot is a danger to the hand."},
    {t:"spoilt", d:"food that has gone bad", x:"Spoilt food smells and tastes bad."},
    {t:"patient", d:"a person who is being cared for by a health worker", x:"The clinic sees the patient."},
    {t:"clinic", d:"the place where a health worker sees sick people", x:"Take a sore eye to the clinic."},
    {t:"disability", d:"a way a body works differently, such as not seeing well", x:"A disability is not a shame."}
  ],
  facts:[
    {q:"Name the five senses and the organ for each.", a:"Sight — eyes; hearing — ears; smell — nose; taste — tongue; touch — skin."},
    {q:"Which sense warns you of a fire at night?", a:"Smell — the smell of smoke; also sight, if there is a flame."},
    {q:"How do you care for the ears?", a:"Wash only the outside and never push anything inside the ear."},
    {q:"Why must you never look straight at the sun?", a:"The strong light damages the eyes."},
    {q:"What should you do if food tastes strange?", a:"Spit it out, do not swallow, and tell a grown-up at once."},
    {q:"Why should you wear shoes on the road?", a:"Because the skin of the foot can be cut, and worms and jiggers enter through the skin."},
    {q:"A child in your class cannot see the board. What should happen?", a:"She sits in front, the teacher tells the family to take her to the clinic, and nobody laughs at her."},
    {q:"Which sense tells you that a pot is hot before you burn yourself?", a:"Touch — the skin feels the heat near the pot."}
  ],
  tf:[
    {s:"The tongue carries the sense of hearing.", a:"false", why:"The ears hear; the tongue tastes."},
    {s:"Smoke has a smell that warns of fire.", a:"true", why:"The nose smells smoke, often before a flame is seen."},
    {s:"It is safe to push a cotton bud into the ear to clean it.", a:"false", why:"Nothing is pushed inside the ear; only the outside is washed."},
    {s:"Food that tastes strange should be spat out.", a:"true", why:"A strange taste is a warning that the food is spoilt or poisonous."},
    {s:"A child who cannot hear well should sit at the back of the class.", a:"false", why:"Such a child sits where they can watch the teacher's face and hear best, and the family is asked to take them to the clinic."},
    {s:"Wearing shoes protects the skin of the feet.", a:"true", why:"Shoes keep out cuts, worms and jiggers."}
  ],
  classify:{
    title:"Which sense do you use?",
    groups:[
      {name:"Sight", items:["reading the board","seeing a car coming","choosing a ripe mango"]},
      {name:"Hearing", items:["hearing the bell","hearing your name called","hearing the rain on the roof"]},
      {name:"Smell", items:["smelling smoke","smelling spoilt soup","smelling the bread baking"]},
      {name:"Taste", items:["tasting salt in the soup","tasting a sour orange","tasting burnt rice"]},
      {name:"Touch", items:["feeling a hot pot","feeling a rough stone","feeling the rain on your skin"]}
    ]
  },
  diagram:{
    title:"The five sense organs and their care",
    caption:"Write the sense, then one way of caring for the organ.",
    parts:[
      {p:"Eyes", f:"wash the face; never rub with dirty hands; never stare at the sun"},
      {p:"Ears", f:"wash only the outside; nothing pushed inside"},
      {p:"Nose", f:"blow gently into a tissue and bin it"},
      {p:"Tongue", f:"brush it with the teeth; never taste the unknown"},
      {p:"Skin", f:"bathe daily, dry well, wear shoes, cover cuts"},
      {p:"All five", f:"tell a grown-up at once if one is hurt"}
    ]
  },
  experiment:{
    title:"The Taste-and-Smell Test",
    aim:"To show that the nose does part of the work of tasting.",
    materials:["Small pieces of a safe local food the whole class may eat — for example orange, banana or boiled cassava","A blindfold (used only with a child who agrees)","Cups of clean water","A recording chart on the board"],
    steps:[
      "Wash your hands. Check with the teacher that every child may eat the food safely.",
      "Taste a small piece with the nose open and say what it is.",
      "Rinse the mouth with water.",
      "Hold the nose closed, taste another piece of the same food, and say what it is now.",
      "Record how many children could name the food each time on the class chart."
    ],
    expect:"Most children name the food easily with the nose open and find it much harder with the nose closed.",
    why:"The nose and the tongue work together to give taste; that is why food tastes flat when the nose is blocked, and why smell is one of the body's warnings against spoilt food."
  },
  apply:[
    {q:"You wake in the night and the room smells of smoke. What do you do?", a:"Wake the house at once, get low under the smoke, go outside, and do not go back in for anything."},
    {q:"Your friend wants to look straight at the sun during the eclipse talk. What do you say?", a:"Do not look straight at the sun; it damages the eyes. We use the pinhole or the teacher's safe method."},
    {q:"You are given rice that smells sour. What do you do?", a:"Do not eat it; tell the grown-up who cooked it that the rice has spoilt."},
    {q:"A child puts a bead in his ear and it will not come out. What should happen?", a:"Do not dig for it; take him to the teacher and to the clinic at once."},
    {q:"Your small sister walks barefoot to the latrine at night. What do you tell her?", a:"Wear slippers; the ground can cut the skin and worms in the soil can enter through the foot."}
  ],
  activities:[
    "Whole class: name the five senses, then match each one to its organ on the board",
    "The Taste-and-Smell Test, with the class chart of the two results",
    "Walk round the school: list what each sense notices (one line per sense)",
    "Care cards: one way of caring for each sense organ, sorted under the right organ",
    "Role play: the warning shout — “Fire! Smoke!” — and what the class does",
    "Sense poster: five drawings, one for each sense organ, with its care written under it"
  ],
  materials:[
    "Chart of the five sense organs",
    "Safe tasting food, cups of water, a blindfold (used only with agreement)",
    "Word cards for the senses and the organs",
    "Poster paper and crayons",
    "The class recording chart on the board",
    "Slippers, soap and a towel for the care demonstration"
  ],
  aids:[
    "Chart of the five sense organs and their care",
    "Safe food, water and cups for the taste test",
    "Word cards for sorting",
    "Poster paper and crayons",
    "Soap, towel and slippers for the care demonstration"
  ],
  home:[
    "Walk round your compound and write one thing each sense notices",
    "Show your family how to blow the nose gently and bin the tissue",
    "Check that everybody at home wears slippers to the latrine at night",
    "Tell your family: never put anything inside the ear, and never look straight at the sun"
  ],
  assessment:[
    "Oral quiz: name the five senses and the organ for each",
    "Matching: the sense joined to the danger it warns of",
    "The Taste-and-Smell record, with one sentence saying what the test showed",
    "Care cards sorted under the right organ, with a reason for each",
    "Written work: true or false with reasons, six items",
    "Sense poster, presented to another class at the health fair"
  ]
},

/* ---------------------------- GRADE 2 · PERIOD III ---------------------------- */
{
  grade:2, period:"III", sem:"One", icon:"🚻", healthPlan:true,
  title:"Boys' Bodies and Girls' Bodies",
  subtitle:"Health strand · exploring the human body — male and female private parts, the differences between male and female, where a baby lives and where a baby comes from, and gender: made differently but equal (guide pp. 18–19)",
  outcomes:[
    "Name the human body parts in general and explain basic facts about the female and male private parts",
    "Distinguish male from female bodies and appreciate the similarities between them",
    "Understand that we are both human, made differently but equal, and each one deserves respect"
  ],
  objectives:[
    "Name the private parts of a boy and of a girl using the correct words",
    "State the differences between male and female bodies",
    "Say that a woman can get pregnant and a man cannot, and that a baby lives in the womb",
    "Say where a baby comes from, in words a child of this age can hold",
    "Name the similarities between boys and girls",
    "Repeat the class slogan: “This is my body, I respect it”"
  ],
  safeguard:"Private parts are named with the correct words on a chart or on a dressed/undressed drawing while clothes stay on. No child is ever asked to undress, to show, to point at their own body, or to compare their own body with another child's. Teach the words, not the bodies. Answer only the question the child asks, in the words of this age; questions a grown-up should answer are taken aside, not answered in front of the class. If a child discloses a touch that worries you, listen once, do not question the child twice, write it down in the child's own words, and hand it to the head teacher and the carer the same day — in Liberia, to the police Women and Children Protection Unit and the Ministry of Gender, Children and Social Protection.",
  note:"Boys and girls are made **differently** but they are **equal**: both are human and each one deserves respect. The parts a vest and pants cover are the **private parts**. A **woman** can carry a baby in the **womb**; a **man** cannot. A baby grows in the womb and is born when it is ready. The class slogan is: “**This is my body, I respect it.**”",
  study:[
    {k:"h3", t:"The Private Parts, Named Correctly"},
    {k:"p", t:"The parts a vest and pants (a swimsuit) cover are the **private parts**. On a **girl** they are the **breasts**, the **buttocks** and the **vulva** (the opening between the legs). On a **boy** they are the **buttocks** and the **penis** and **testicles**. The teacher names them on the chart with the correct words and the children repeat them; that is all. A child who knows the correct word can say what happened to them, and that is why we teach the words."},
    {k:"h3", t:"How Boys and Girls Differ"},
    {k:"table", head:["","Girls and women","Boys and men"],
     rows:[
      ["Private parts","Breasts, vulva, buttocks","Penis, testicles, buttocks"],
      ["Carrying a baby","A woman can get pregnant and carry a baby in the womb","A man cannot get pregnant"],
      ["Body shape at this age","Bodies are still much the same at seven and eight","Bodies are still much the same at seven and eight"],
      ["Voice, hair, size","Change later, at puberty","Change later, at puberty"]
     ]},
    {k:"h3", t:"Where a Baby Lives and Where a Baby Comes From"},
    {k:"p", t:"A baby **lives** inside its mother, in a part of her body called the **womb**, and it grows there for about nine months. A baby **comes from** its mother's body, born through the opening between her legs, and the guide says plainly that it is the mother who carries and delivers the baby and the father who helps to care for it. A baby is a gift and a big work: it is a grown-up's responsibility, never a child's."},
    {k:"h3", t:"The Similarities"},
    {k:"p", t:"Boys and girls both have a head, a heart, lungs, a stomach, two arms, two legs, skin, hair and a brain. Both feel hunger, pain, fear and joy. Both can learn, run, sing, draw and lead. The guide's own words are: “**we are both humans, made differently but equal, each one deserves respect**.” In this class a girl is not told that a thing is not for her because she is a girl, and a boy is not told that a thing is not for him because he is a boy."},
    {k:"h3", t:"The Slogan"},
    {k:"p", t:"The guide asks the teacher to teach the slogan in Liberian English and to repeat it three times in a chorus: “**This is my body, I respect it.**” Say it at the end of every lesson in this unit — it is the line a child remembers when they need it."}
  ],
  focus:[
    "The private parts of a boy and of a girl, named on the chart",
    "The differences between male and female bodies",
    "Where a baby lives: the womb; where a baby comes from",
    "The similarities: we are both human, made differently but equal",
    "Respect for every body, including a body that works differently",
    "The slogan: “This is my body, I respect it”"
  ],
  terms:[
    {t:"male", d:"a boy or a man", x:"A boy is male."},
    {t:"female", d:"a girl or a woman", x:"A girl is female."},
    {t:"private parts", d:"the parts a vest and pants cover", x:"Private parts are personal."},
    {t:"vulva", d:"the private part between a girl's legs", x:"The vulva is a girl's private part."},
    {t:"penis", d:"the private part between a boy's legs, used for passing urine", x:"The penis is a boy's private part."},
    {t:"testicles", d:"the two small parts behind a boy's penis", x:"The testicles are private."},
    {t:"breasts", d:"the parts on the chest of a girl or woman", x:"The breasts are private."},
    {t:"womb", d:"the part inside a woman where a baby grows", x:"A baby lives in the womb."},
    {t:"pregnant", d:"carrying a baby inside the womb", x:"A woman gets pregnant; a man cannot."},
    {t:"born", d:"coming out of the mother's body into the world", x:"The baby is born after about nine months."},
    {t:"equal", d:"worth the same; nobody is worth less", x:"Boys and girls are equal."},
    {t:"respect", d:"treating a person as worth something", x:"Every person deserves respect."}
  ],
  facts:[
    {q:"Name the private parts of a girl.", a:"The breasts, the vulva and the buttocks."},
    {q:"Name the private parts of a boy.", a:"The penis, the testicles and the buttocks."},
    {q:"Who can get pregnant?", a:"A woman can get pregnant; a man cannot."},
    {q:"Where does a baby live before it is born?", a:"Inside its mother, in the womb."},
    {q:"Where does a baby come from?", a:"From its mother's body, born through the opening between her legs."},
    {q:"Name three ways boys and girls are the same.", a:"Both have a heart, lungs, a brain, two arms and two legs; both feel hunger, pain and joy; both can learn and lead."},
    {q:"Say the class slogan.", a:"“This is my body, I respect it.”"},
    {q:"Why do we learn the correct words for the private parts?", a:"A child who knows the correct word can tell a trusted adult what happened and be believed and helped."}
  ],
  tf:[
    {s:"A man can get pregnant.", a:"false", why:"A woman carries the baby in the womb; a man cannot get pregnant."},
    {s:"A baby grows inside its mother's womb.", a:"true", why:"The womb is where the baby lives for about nine months."},
    {s:"Boys are worth more than girls.", a:"false", why:"We are both human, made differently but equal, and each one deserves respect."},
    {s:"Private parts are named on a chart, not shown by a child.", a:"true", why:"We teach the words, not the bodies; no child undresses or points at their own body."},
    {s:"Only girls have a heart and lungs.", a:"false", why:"Both boys and girls have the same inside parts."},
    {s:"The class slogan is “This is my body, I respect it”.", a:"true", why:"The guide asks for it to be repeated three times in a chorus."}
  ],
  classify:{
    title:"Boy, girl, or both?",
    groups:[
      {name:"Girls and women", items:["vulva","breasts","can get pregnant","carries the baby in the womb"]},
      {name:"Boys and men", items:["penis","testicles","cannot get pregnant","helps to care for the baby"]},
      {name:"Both", items:["heart","lungs","brain","two arms","two legs","feelings","the right to respect"]}
    ]
  },
  diagram:{
    title:"The private parts, named on the chart",
    caption:"Name each part with the correct word and write PRIVATE beside it.",
    parts:[
      {p:"Vulva", f:"girl's private part between the legs"},
      {p:"Penis", f:"boy's private part between the legs"},
      {p:"Testicles", f:"boy's private parts behind the penis"},
      {p:"Breasts", f:"girl's private part on the chest"},
      {p:"Buttocks", f:"private, on both boys and girls"},
      {p:"Womb", f:"inside a woman; where a baby grows"},
      {p:"Hands and face", f:"not private"},
      {p:"Legs and feet", f:"not private"}
    ]
  },
  experiment:{
    title:"The Same-or-Different Chart",
    aim:"To show, with the class's own answers, how much boys and girls share and how little separates them.",
    materials:["A large sheet with two joined circles drawn on it (a Venn diagram)","Crayons","Word cards with body-part names and with feelings and abilities"],
    steps:[
      "Draw two joined circles on the floor or on a large sheet: one for GIRLS, one for BOYS.",
      "Sort the word cards: parts or abilities only girls have, only boys have, or both.",
      "Place each card in the right part of the diagram — the same cards go in the middle.",
      "Count the cards in the middle and the cards at the two sides.",
      "Say what the count shows."
    ],
    expect:"A small pile at each side and a very large pile in the middle, where both circles meet.",
    why:"What boys and girls share is far more than what separates them — and the guide's own line is that we are made differently but equal."
  },
  apply:[
    {q:"A boy says girls cannot be class captain. What do you say?", a:"Girls and boys are equal; a girl can be class captain, and she is chosen on how she works, not on her body."},
    {q:"Somebody asks you to show them your private parts to prove what you learned. What do you do?", a:"Say no — private parts are not shown; we named them on the chart. Then tell a trusted adult."},
    {q:"A small child asks where babies come from. How do you answer?", a:"A baby grows inside its mother in the womb and is born when it is ready — that is enough for a small child."},
    {q:"A girl in your class is laughed at because she is taller than the boys. What do you do?", a:"Say that bodies are different and every body is a good body, and stop the laughing."},
    {q:"Your teacher says the slogan and some children mumble. Why does it matter to say it out loud?", a:"Because the line has to be easy to say, so that it is ready when a child needs it."}
  ],
  activities:[
    "Chart talk: pictures of a boy and a girl; the class names the similarities and then the differences (the guide's own activity)",
    "The Same-or-Different Chart, sorted by the class",
    "Choral slogan in Liberian English, three times: “This is my body, I respect it”",
    "Drawing: a boy and a girl, dressed, with the private parts marked on a separate chart only",
    "Picture focus: the teacher points to the private parts on the chart while the class names them correctly",
    "Pair talk: “One thing I can do well” — with the class noticing that neither list belongs only to boys or only to girls"
  ],
  materials:[
    "Pictures of a boy and a girl, dressed and undressed, for the chart work",
    "Charts and posters naming the body parts",
    "Word cards for the sorting activity",
    "A large sheet for the Venn diagram",
    "Crayons and paper",
    "The guide's own internet links where the school has them"
  ],
  aids:[
    "Dressed and undressed chart pictures of a boy and a girl",
    "Word cards for the Same-or-Different Chart",
    "Large sheet with the two joined circles drawn on it",
    "Crayons",
    "The slogan written large on the board"
  ],
  home:[
    "Tell your family the slogan: “This is my body, I respect it”",
    "With a grown-up, name three things boys and girls both have, and one difference",
    "Ask a grown-up at home what they were told about where babies come from when they were small",
    "Draw a dressed picture of yourself and write one line about what your body can do"
  ],
  assessment:[
    "Oral naming: the private parts of a boy and of a girl, on the chart, with the correct words",
    "The Same-or-Different Chart, with the class able to say what the count shows",
    "Oral quiz: who can get pregnant, where a baby lives, where a baby comes from",
    "The slogan, said clearly by every child",
    "Sorting task: boy / girl / both cards placed correctly",
    "Written work: true or false with reasons, six items, read aloud for the slower writers"
  ]
},

/* ----------------------------- GRADE 2 · PERIOD IV ---------------------------- */
{
  grade:2, period:"IV", sem:"Two", icon:"🛑", healthPlan:true,
  title:"Good Touches, Bad Touches and Reporting",
  subtitle:"Health strand · privacy and body respect — which parts can be touched and which cannot, how negative touches can be avoided, and how to report them (guide p. 19)",
  outcomes:[
    "State the sensitive body parts and the rule that protects them",
    "Identify bad touches and explain how they can be avoided",
    "Report a bad touch to a trusted adult, and know that teachers never keep such a report secret"
  ],
  objectives:[
    "Say which parts of the body can be shown and which are private and covered",
    "Explain what privacy means, at home and at school",
    "Tell the difference between a good touch and a negative (bad) touch",
    "State how negative touches can be avoided",
    "Practise the reporting route: who to tell, what to say, and what happens next",
    "Repeat the two class rules: do not harm yourself; do not harm others"
  ],
  safeguard:"Nothing in this unit is acted out on a child's own body and no child is asked about their own experience. Reporting is taught as a route the whole class knows: tell a trusted adult, the adult tells the head teacher, the head teacher and the carer act, and in Liberia the case goes to the police Women and Children Protection Unit and the Ministry of Gender, Children and Social Protection; a recent assault goes to a health facility at once, because seventy-two hours matters for care and for evidence. Teachers listen, write down the child's own words, and never investigate, never question twice and never promise secrecy.",
  note:"**Privacy** means that the parts a vest and pants cover are kept covered and are nobody else's business. A **good touch** is safe and welcome. A **negative touch** touches a private part, frightens a child, or must be kept secret. Two rules hold the whole unit: **do not harm yourself, and do not harm others**.",
  study:[
    {k:"h3", t:"What Can Be Shown and What Is Covered"},
    {k:"p", t:"The hands, the face, the arms, the head and the legs can be **shown** — everybody sees them every day. The parts a **vest and pants** cover are **private** and are kept covered. A child does not walk about without clothes in the house where visitors are, does not change in front of people, and does not show private parts to another child or ask to see another child's."},
    {k:"h3", t:"Privacy at Home and at School"},
    {k:"p", t:"**Privacy** means having a place to wash and to change where other people do not walk in, and having the right to close a door. Where a whole family sleeps in one room, privacy is kept with a cloth, a screen or a turn — the teacher does not ask a child to describe their room. At school, children use the latrine one at a time where that can be arranged, and nobody follows another child in."},
    {k:"h3", t:"Good Touches and Negative Touches"},
    {k:"table", head:["Good touch","Negative (bad) touch"],
     rows:[
      ["A handshake or a high-five you agreed to","Touching a private part"],
      ["A hand on the shoulder from a teacher","A touch that must be kept secret"],
      ["A parent washing a small child's back","A touch that hurts, or that frightens"],
      ["A doctor examining a child with a parent there","A touch by somebody who says “do not tell”"],
      ["A hug you want, from somebody you choose","Taking pictures of a child's private parts"]
     ]},
    {k:"h3", t:"How Negative Touches Can Be Avoided"},
    {k:"num", items:[
      "Do not be without clothes in front of people.",
      "Do not go alone with a person to a lonely place — a room, a bush, an empty classroom.",
      "Do not take a lift, a gift or a phone from somebody who then asks for something back.",
      "Do not keep a touching secret, ever.",
      "Stay where there are people; walk home with others.",
      "Say the line early: “No. Stop. I am going to tell.”"
    ]},
    {k:"h3", t:"How to Report"},
    {k:"p", t:"Tell a **trusted adult** — mother, father, an aunt, the teacher, the school counsellor, the pastor or imam. Say what happened in your own words; you do not need to know the right words. If the first grown-up does not act, tell another. The adult then tells the **head teacher** and the child's **carer**, and they take it to the police **Women and Children Protection Unit** and the **Ministry of Gender, Children and Social Protection**; if the assault was recent, the child is taken to a health facility the same day. A teacher who hears a report writes down the child's own words, acts the same day, and does not investigate."},
    {k:"h3", t:"The Two Rules"},
    {k:"p", t:"The guide gives two short rules for the body: **do not harm yourself** — do not cut, hit or put bad substances into your own body — and **do not harm others** — do not touch, hit, tease or frighten another child. Respecting your own body and that of others is one habit, not two."}
  ],
  focus:[
    "What can be shown and what is private and covered",
    "Privacy at home and at school",
    "Good touches and negative touches",
    "How negative touches can be avoided",
    "The reporting route: who, what, and what happens next",
    "The two rules: do not harm yourself, do not harm others"
  ],
  terms:[
    {t:"privacy", d:"having a private part covered and a place where others do not walk in", x:"Privacy means I keep my private parts covered."},
    {t:"sensitive body part", d:"a private part: the breasts, the buttocks, the vulva, the penis and the testicles", x:"A sensitive body part is not touched by others."},
    {t:"good touch", d:"a touch that is safe, wanted and not a secret", x:"A handshake is a good touch."},
    {t:"negative touch", d:"a touch of a private part, or one that hurts, frightens or must be kept secret", x:"A negative touch is reported at once."},
    {t:"avoid", d:"to keep away from", x:"Avoid being alone in a lonely place."},
    {t:"report", d:"to tell a trusted adult what happened", x:"Report to the teacher the same day."},
    {t:"trusted adult", d:"a grown-up who listens and acts", x:"My aunt is a trusted adult."},
    {t:"head teacher", d:"the teacher in charge of the school", x:"The teacher tells the head teacher."},
    {t:"carer", d:"the grown-up who looks after a child", x:"The carer is told the same day."},
    {t:"lonely place", d:"a place with no people, where nobody can hear a shout", x:"Never go with a person to a lonely place."},
    {t:"harm", d:"to hurt", x:"Do not harm yourself and do not harm others."},
    {t:"secrecy", d:"keeping something hidden; never promised about a touching report", x:"A teacher never promises secrecy about a bad touch."}
  ],
  facts:[
    {q:"What is privacy?", a:"Keeping the private parts covered and having a place to wash and change where others do not walk in."},
    {q:"Name two good touches.", a:"A handshake, a high-five you agreed to, a hand on the shoulder from a teacher."},
    {q:"Name two negative touches.", a:"Touching a private part, or a touch that must be kept secret."},
    {q:"Give two ways of avoiding a negative touch.", a:"Do not go alone with a person to a lonely place, and do not be without clothes in front of people."},
    {q:"Who do you tell?", a:"A trusted adult — mother, father, aunt, teacher, counsellor, pastor or imam — and if the first does not act, tell another."},
    {q:"What does the adult do then?", a:"The adult tells the head teacher and the carer, and they take it to the police Women and Children Protection Unit and the Ministry of Gender, Children and Social Protection."},
    {q:"What are the two rules of the body?", a:"Do not harm yourself, and do not harm others."},
    {q:"May a teacher promise to keep a report secret?", a:"No. A report is written down and acted on the same day; only the people who must know are told."}
  ],
  tf:[
    {s:"It is all right to walk about without clothes in front of visitors.", a:"false", why:"Private parts are kept covered; that is what privacy means."},
    {s:"A touch that must be kept secret is a negative touch.", a:"true", why:"Any touching secret is told to a trusted adult; no grown-up needs a child to keep one."},
    {s:"Going with somebody to a lonely place is a way of staying safe.", a:"false", why:"Staying where there are people is how negative touches are avoided."},
    {s:"A child should keep telling until somebody helps.", a:"true", why:"If the first grown-up does not act, the child tells another."},
    {s:"Teachers should investigate a report before telling anybody.", a:"false", why:"Teachers listen, write down the child's own words and report the same day; they never investigate."},
    {s:"“Do not harm others” means not touching, hitting, teasing or frightening another child.", a:"true", why:"Respecting your own body and that of others is one habit."}
  ],
  classify:{
    title:"Safe or unsafe?",
    groups:[
      {name:"Safe", items:["washing with a cloth round you","walking home with others","telling a trusted adult","saying no and walking away","a doctor examining you with a parent there"]},
      {name:"Unsafe", items:["going alone with somebody to an empty room","keeping a touching secret","taking a gift from somebody who then asks for something back","being without clothes in front of people","pictures of private parts"]}
    ]
  },
  diagram:{
    title:"The reporting route",
    caption:"Write the four steps in order and say who does each one.",
    parts:[
      {p:"Step 1", f:"the child tells a trusted adult, in their own words"},
      {p:"Step 2", f:"the adult writes down what the child said and tells the head teacher"},
      {p:"Step 3", f:"the head teacher and the carer are told the same day"},
      {p:"Step 4", f:"the case goes to the Women and Children Protection Unit and the Ministry of Gender, Children and Social Protection"},
      {p:"If it was recent", f:"the child is taken to a health facility at once"},
      {p:"Never", f:"the teacher does not investigate and does not promise secrecy"}
    ]
  },
  experiment:{
    title:"The Refuse — Reason — Run — Report Drill",
    aim:"To practise four moves until they can be done without thinking.",
    materials:["Four cards with one word on each: REFUSE, REASON, RUN, REPORT","Two chalk circles on the floor, one labelled SAFE","A bell"],
    steps:[
      "The teacher reads a short, harmless practice line, such as “Come with me, do not tell anybody.”",
      "REFUSE: the child says “No!” in a loud voice.",
      "REASON: the child says one short line — “My body belongs to me.”",
      "RUN: the child moves quickly to the circle labelled SAFE.",
      "REPORT: the child names the trusted adult they would tell.",
      "Repeat until every child has done all four."
    ],
    expect:"Every child completes all four moves in order, and can be heard across the room.",
    why:"A child who has practised the four moves in class can do them when it matters; the drill makes the route ordinary, so that telling is not frightening."
  },
  apply:[
    {q:"An older person asks you to come to his room to collect a gift. What do you do?", a:"Say no, do not go, stay where there are people, and tell a trusted adult the same day."},
    {q:"A friend tells you somebody touched her private parts and made her promise not to tell. What do you do?", a:"Believe her, do not question her, and go with her at once to the teacher or to a trusted adult; a touching secret is never kept."},
    {q:"You are at home and a visitor walks in while you are changing. What do you do?", a:"Cover yourself and tell a grown-up that I need privacy to change."},
    {q:"A boy keeps touching other children in the line. What should the class do?", a:"Tell him to stop, tell the teacher, and remember the second rule: do not harm others."},
    {q:"Why must a teacher never promise to keep a report secret?", a:"Because the report has to reach the head teacher and the carer so that the child is protected; secrecy is what the person who harmed the child asked for."}
  ],
  activities:[
    "Picture work: volunteers point to the parts of the body that are private — on the chart, never on a child (the guide's own activity)",
    "Refuse — Reason — Run — Report drill, four moves, every child",
    "Choral rules: “Do not harm yourself. Do not harm others.” — three times",
    "Slogan in Liberian English, three times: “This is my body, I respect it”",
    "Sorting game: SAFE and UNSAFE cards placed in the right hoop",
    "Class poster: the reporting route, drawn in four steps and hung in the classroom"
  ],
  materials:[
    "Dressed and undressed chart pictures of a boy and a girl",
    "Four cards: REFUSE, REASON, RUN, REPORT",
    "Two hoops or chalk circles, one labelled SAFE",
    "Poster paper and crayons for the reporting route",
    "A bell for the drill",
    "The school's safeguarding route written on the board"
  ],
  aids:[
    "Dressed and undressed chart pictures",
    "The four drill cards and the SAFE circle",
    "Poster paper and crayons",
    "A bell",
    "The safeguarding route, written large"
  ],
  home:[
    "Tell your family the two rules: do not harm yourself, do not harm others",
    "Name three trusted adults in your own compound and say which you would tell first",
    "Practise the four moves with a brother, sister or grown-up at home",
    "Say the slogan to your family: “This is my body, I respect it”"
  ],
  assessment:[
    "Oral quiz: what privacy means; which parts are private; good and negative touches",
    "The drill: all four moves, in order, loud enough to be heard",
    "Sorting task: SAFE and UNSAFE cards, with a reason for each",
    "The reporting-route poster: every child can say the four steps",
    "Written work: true or false with reasons, six items",
    "Teacher's record: every child has named three trusted adults, checked privately and never in front of the class"
  ]
},

/* ------------------------------ GRADE 2 · PERIOD V ---------------------------- */
{
  grade:2, period:"V", sem:"Two", icon:"💊", healthPlan:true,
  title:"Drugs: What They Are and What They Do",
  subtitle:"Health strand · exploring drugs — the meaning of the word “drug”, good drugs and bad drugs and where each is found, the real and local names for bad drugs, and their effects (guide p. 24)",
  outcomes:[
    "Know the types of drugs that are harmful to the body",
    "Understand the effect of using drugs on the individual, the family, the society and the school",
    "Tell the difference between good drugs and bad drugs and where each type can be found"
  ],
  objectives:[
    "Tell the meaning of the word “drug”",
    "Tell the difference between good drugs and bad drugs, and where each type is found",
    "Identify the real and local names for bad drugs",
    "State the effects of bad substances on the body and the mind, the family, the society and the school",
    "Explain what addiction and alcoholism are",
    "Say why a child should say no to using them"
  ],
  safeguard:"This unit names substances; it never asks what happens in a child's own house. No child is asked whether anybody at home drinks, smokes or uses drugs, and no child is named or shamed for what a family member does. If a child says something that suggests they are being given a substance, or that they are hungry or unsafe, write it in the child's own words and take it to the head teacher and the carer the same day.",
  note:"A **drug** is any substance, other than food, that changes the way the body works. A **good drug** is medicine given by a health worker to make a person better. A **bad drug** is taken to change the way a person feels, and it damages the body, the mind, the family and the school. Taking it again and again leads to **addiction**.",
  study:[
    {k:"h3", t:"What the Word “Drug” Means"},
    {k:"p", t:"A **drug** is any substance, other than food, that changes the way the body works. Some drugs are **medicine**: a health worker gives them, in the right amount, to cure an illness or to stop pain — paracetamol for a fever, an injection for malaria, a tablet for worms. Those are **good drugs**. Other drugs are taken not to cure anything but to change the way a person feels, and they damage the body; those are **bad drugs**."},
    {k:"h3", t:"Good Drugs and Bad Drugs, and Where Each Is Found"},
    {k:"table", head:["","Good drugs (medicine)","Bad drugs (abused substances)"],
     rows:[
      ["What they are","Paracetamol, malaria tablets, worm medicine, injections","Marijuana, opium, alcohol, tobacco, snuff"],
      ["Where they are found","The clinic, the hospital, the pharmacy, the school first-aid box","The street, the ghetto, a bar, a smoking place, somebody's pocket"],
      ["Who gives them","A health worker, a nurse or a grown-up told by a health worker","Nobody who is allowed to; a seller, a friend, an older person"],
      ["What they do","Cure or prevent illness for a set number of days","Change the way a person feels and damage the body"]
     ]},
    {k:"h3", t:"The Real and Local Names"},
    {k:"p", t:"The guide names the bad substances used in the community: **marijuana**, **opium**, **alcohol**, **tobacco** and **snuff**. Marijuana has many local names in Liberia — the class may know some of them; the teacher writes the ones the children bring, and says plainly that a different name does not make it a different thing. Alcohol is found as beer, pahn, cane juice, gin and spirit. Tobacco comes as cigarettes, as a roll, as snuff and as chewing tobacco."},
    {k:"h3", t:"What Bad Substances Do"},
    {k:"bul", items:[
      "**To the body** — they damage the lungs, the liver, the heart and the brain; a person coughs, grows thin, forgets things and falls sick often.",
      "**To the mind** — a person cannot think clearly, cannot learn, cannot remember; some become violent, some become frightened and see things that are not there.",
      "**To the family** — money that should buy food, school fees and medicine is spent instead; children go hungry; quarrels and beatings follow.",
      "**To the society** — theft and violence rise; roads and places become unsafe; the community loses the work of that person.",
      "**To the school** — a pupil who uses them misses school, sleeps in class, fights, and is sent away; learning stops."
    ]},
    {k:"h3", t:"Addiction and Alcoholism"},
    {k:"p", t:"**Addiction** is when a person's body has come to need the substance and the person cannot stop, even when it is hurting them and everybody they love. **Alcoholism** is the same thing with alcohol. Addiction is an **illness**: the person needs a health worker's help, and blame alone never cured anybody. A child's part is simple — never start."}
  ],
  focus:[
    "What the word “drug” means",
    "Good drugs and bad drugs, and where each is found",
    "The real and local names for bad drugs",
    "Effects on the body, the mind, the family, the society and the school",
    "Addiction and alcoholism: an illness that needs help",
    "Why a child says no — and never starts"
  ],
  terms:[
    {t:"drug", d:"any substance, other than food, that changes the way the body works", x:"Paracetamol is a drug given as medicine."},
    {t:"medicine", d:"a good drug given by a health worker to cure or to prevent illness", x:"The clinic gives medicine for malaria."},
    {t:"pharmacy", d:"the place where medicine is sold and given out", x:"Good drugs come from the pharmacy."},
    {t:"marijuana", d:"a plant smoked or eaten to change the way a person feels; it has many local names", x:"Marijuana is a bad drug."},
    {t:"opium", d:"a strong drug made from a poppy; it is not medicine for children", x:"Opium is a bad drug."},
    {t:"tobacco", d:"the plant smoked in cigarettes or sniffed as snuff", x:"Tobacco damages the lungs."},
    {t:"snuff", d:"tobacco powder sniffed up the nose", x:"Snuff is tobacco and it is a bad substance."},
    {t:"alcohol", d:"beer, pahn, cane juice, gin or spirit", x:"Alcohol is a bad substance for children."},
    {t:"addiction", d:"when the body needs a substance and the person cannot stop", x:"Addiction is an illness that needs a health worker."},
    {t:"alcoholism", d:"addiction to alcohol", x:"Alcoholism breaks families."},
    {t:"effect", d:"what a thing does to a person", x:"One effect of tobacco is a bad cough."},
    {t:"society", d:"all the people living together in a place", x:"Drug abuse hurts the whole society."}
  ],
  facts:[
    {q:"What is a drug?", a:"Any substance, other than food, that changes the way the body works."},
    {q:"What is the difference between a good drug and a bad drug?", a:"A good drug is medicine given by a health worker to cure or to prevent illness; a bad drug is taken to change the way a person feels and it damages the body."},
    {q:"Where is a good drug found?", a:"At the clinic, the hospital, the pharmacy or the school first-aid box."},
    {q:"Name four bad substances named in the guide.", a:"Marijuana, opium, alcohol, tobacco and snuff (any four)."},
    {q:"Name two effects of bad substances on the body and the mind.", a:"They damage the lungs, liver and brain; a person forgets things, cannot learn, and may become violent or frightened."},
    {q:"How does drug abuse hurt a family?", a:"Money for food, school fees and medicine is spent on the substance; children go hungry and quarrels follow."},
    {q:"How does it hurt the school?", a:"The pupil misses school, sleeps in class, fights and is sent away, so learning stops."},
    {q:"What is addiction?", a:"When the body needs the substance and the person cannot stop; it is an illness that needs a health worker's help."}
  ],
  tf:[
    {s:"Every drug is bad.", a:"false", why:"Medicine given by a health worker is a good drug; bad drugs are the ones taken to change how a person feels."},
    {s:"A different local name makes a drug a different thing.", a:"false", why:"Marijuana is the same plant whatever it is called in the market."},
    {s:"Drug abuse wastes the family's money.", a:"true", why:"Money that should buy food, fees and medicine goes on the substance instead."},
    {s:"Addiction is an illness.", a:"true", why:"A person who cannot stop needs a health worker's help, not blame alone."},
    {s:"Snuff is harmless because it is not smoked.", a:"false", why:"Snuff is tobacco taken through the nose and it damages the body just the same."},
    {s:"A child who sees a bad drug being used should pick it up and bring it to school.", a:"false", why:"The child does not touch it; the child tells a grown-up."}
  ],
  classify:{
    title:"Good drug or bad drug?",
    groups:[
      {name:"Good drugs (medicine)", items:["paracetamol from the clinic","malaria tablets","worm medicine","an injection given by a nurse"]},
      {name:"Bad drugs", items:["marijuana","opium","alcohol","tobacco","snuff"]},
      {name:"Where good drugs are found", items:["the clinic","the hospital","the pharmacy","the school first-aid box"]},
      {name:"Who may give a drug", items:["a health worker","a nurse","a grown-up told by a health worker"]}
    ]
  },
  diagram:{
    title:"What a bad substance does",
    caption:"Write one effect under each heading.",
    parts:[
      {p:"To the body", f:"damages the lungs, the liver, the heart and the brain"},
      {p:"To the mind", f:"forgets, cannot learn, may become violent or afraid"},
      {p:"To the family", f:"money for food is spent; quarrels and hunger follow"},
      {p:"To the society", f:"theft and violence rise; places become unsafe"},
      {p:"To the school", f:"absence, sleeping in class, fighting, being sent away"},
      {p:"To the person's future", f:"addiction, illness, and the loss of the work they could have done"}
    ]
  },
  experiment:{
    title:"The Smoke Filter Demonstration (teacher-led)",
    aim:"To show what tobacco smoke leaves behind inside the body.",
    materials:["A clean white cloth or a piece of cotton wool","A plastic bottle with the bottom cut off, to act as a funnel","Cigarette smoke produced by the teacher away from the children, or charcoal smoke as a substitute","Water and soap"],
    steps:[
      "Push the cotton wool or the cloth into the neck of the bottle.",
      "Hold the wide end over the smoke so that the smoke is drawn through the cotton (the teacher does this; no child is near the smoke).",
      "Take the cotton out and look at it.",
      "Compare it with a piece of clean cotton wool.",
      "Wash your hands afterwards and draw both pieces in the science journal."
    ],
    expect:"The cotton that the smoke passed through is stained brown and smells; the clean cotton is white.",
    why:"The same brown tar sticks inside the lungs of a person who smokes; the demonstration shows why a smoker coughs and why the lungs stop working well."
  },
  apply:[
    {q:"Somebody offers you a cigarette and says “just try, once”. What do you say?", a:"“No, thank you. I do not take that.” Then walk away and tell a trusted adult."},
    {q:"Your friend's father spends the money for food on drink. What is the right way to think about it?", a:"The family is being harmed, the father needs a health worker's help, and if there is no food at home I tell a trusted adult."},
    {q:"You find a small packet of leaves in your brother's pocket. What do you do?", a:"Do not touch it or taste it; tell a grown-up what you saw."},
    {q:"A man at the market says the local name of a drug and tells you it is only a herb. What do you say?", a:"A different name does not make it a different thing; I say no and walk away."},
    {q:"Why does the teacher say “never start”, not “try it and see”?", a:"Because addiction makes stopping far harder than not starting, and a child's body and brain are still growing."}
  ],
  activities:[
    "Demonstration: a group of three or four children act out how drugs are used, and the class names what the drugs are called (the guide's own activity)",
    "Volunteers tell the effects of drugs on the individual and the family, using what they learned in Grade 1",
    "The Smoke Filter Demonstration, teacher-led, with the two pieces of cotton compared",
    "Sorting game: good drug, bad drug, and who may give a drug",
    "Local-names chart: the names the class knows for bad substances, written under the real name",
    "Effect poster: five columns — body, mind, family, society, school — filled by the class"
  ],
  materials:[
    "Charts, posters and picture books about drugs and medicine",
    "Empty clean medicine packets from the clinic for the good-drugs side",
    "Cotton wool, a cut plastic bottle and a source of smoke for the demonstration",
    "Word cards for the sorting game",
    "Poster paper and crayons for the effect poster",
    "The guide's internet links where the school has them"
  ],
  aids:[
    "Good-drug and bad-drug cards for sorting",
    "Empty medicine packets from the clinic",
    "Cotton wool and the bottle for the smoke filter",
    "Local-names chart drawn on the board",
    "Poster paper and crayons"
  ],
  home:[
    "Ask a grown-up at home what the local names for bad substances were when they were small",
    "With your family, name three good drugs kept in the house and say who gives them",
    "Say the refusal line to your family: “No, thank you. I do not take that.”",
    "Help to put every medicine in the house up high, away from small children"
  ],
  assessment:[
    "Oral quiz: the meaning of “drug”; good drugs and bad drugs; where each is found",
    "Local-names chart: three names written under the real name",
    "Sorting task: good drug, bad drug, who may give it — with a reason for each",
    "The effect poster: five columns filled and explained",
    "Written work: true or false with reasons, six items",
    "Science journal: the smoke filter drawing, with one sentence on what the tar does inside the lungs"
  ]
},

/* ----------------------------- GRADE 2 · PERIOD VI ---------------------------- */
{
  grade:2, period:"VI", sem:"Two", icon:"🙅", healthPlan:true,
  title:"Saying No: Peer Pressure, Safe Medicine and Body Respect",
  subtitle:"Health strand · exploring drugs and exploring my body — why you should say no, the peer pressure lines and the answers to them, the wrong ways of using our body parts, and the year's body-respect consolidation (guide pp. 24–25, with pp. 18-19)",
  outcomes:[
    "Explain why they should say no to using drugs",
    "Explain basic facts about the female and male private parts and discuss the differences between male and female bodies",
    "Name the parts of the body and match each with its proper function, and talk about the wrong ways of using our body parts"
  ],
  objectives:[
    "Say why a person should say no to using drugs",
    "Answer the peer pressure lines the guide names: “Just try, once”, “It's harmless”, “It will make you see things / feel happy”",
    "Name the parts of the body and match each with its proper function",
    "Talk about the wrong ways of using our body parts",
    "Show how a medicine is taken safely: who gives it, how much, and for how many days",
    "Close the year with the class health campaign and the slogan"
  ],
  safeguard:"Refusal practice uses invented lines only and no child is asked what happens in their own house or to their own body. Where a child reveals that they are being offered substances, or harmed, listen once, do not question twice, write down the child's own words and take them to the head teacher and the carer the same day; in Liberia the case goes to the police Women and Children Protection Unit and the Ministry of Gender, Children and Social Protection. Medicine is never given to a child at school without the carer's knowledge.",
  note:"Saying **no** is a skill, and like any skill it is practised. The guide names the **peer pressure lines** a child hears — “just try, once”, “it's harmless”, “it will make you feel happy” — and asks the class to **phrase its own answers**. The body, too, has a **proper function** for every part, and some ways of using the body are **wrong ways**: putting bad substances into it, harming it, or letting somebody else use it.",
  study:[
    {k:"h3", t:"Why Say No"},
    {k:"p", t:"A person says no to a bad substance because of what the substance does: it damages the body and the mind, it takes the family's money, it stops a child learning, it leads to addiction, and it can kill. Saying no is not rudeness and it is not fear: it is a person looking after the one body they have."},
    {k:"h3", t:"The Peer Pressure Lines and the Answers"},
    {k:"table", head:["The line a person uses","What it really means","The answer"],
     rows:[
      ["“Just try, once.”","Once is how it starts.","“No. One time is enough to make my body want it.”"],
      ["“It's harmless.”","It is not harmless; that is a lie told to sell it.","“It is not harmless. It damages the body and the brain.”"],
      ["“It will make you see things / feel happy.”","It changes the mind, and that is the damage.","“I want to feel happy playing football, not like that.”"],
      ["“Everybody is doing it.”","Not everybody; and everybody is not me.","“Then everybody can do it. I will not.”"],
      ["“Are you afraid?”","Trying to shame you into it.","“Yes, and I am right to be. No.”"],
      ["“Do not tell anybody.”","A person who says this is doing something wrong.","“I will tell. A touching secret is never kept.”"]
     ]},
    {k:"h3", t:"The Parts of the Body and Their Proper Function"},
    {k:"p", t:"Every part has a **proper function**: the eyes see, the ears hear, the nose smells and breathes, the tongue tastes, the hands hold and feel, the legs carry, the heart pumps, the lungs breathe, the stomach digests and the brain thinks. A body that is used the way it was made to be used stays well."},
    {k:"h3", t:"The Wrong Ways of Using Our Body Parts"},
    {k:"bul", items:[
      "Putting bad substances into the body — through the mouth, the nose or the skin.",
      "Taking medicine that is not yours, or taking more than the dose.",
      "Hurting your own body, or letting somebody else hurt it.",
      "Using the body to hurt, frighten or touch another person.",
      "Letting somebody take pictures of your private parts.",
      "Going without sleep, food or washing for days, so that the body cannot work."
    ]},
    {k:"h3", t:"Medicine Taken Safely"},
    {k:"num", items:[
      "A health worker or a grown-up told by a health worker gives it.",
      "It is the medicine for this person and this illness.",
      "The **dose** — how much and how often — is read from the label or from the health worker's words.",
      "The **course** is finished, even when the person feels better.",
      "Medicine is stored up high, away from small children, and old medicine is taken back to the clinic.",
      "No medicine is ever shared with a friend or a brother."
    ]},
    {k:"h3", t:"The Year's Slogan"},
    {k:"p", t:"The guide gives the class two lines to say together: “**This is my body, I respect it**” and “**I'll not put drugs into it**.” Say them three times in a chorus at the close of the year, and say them at the health fair for the other classes."}
  ],
  focus:[
    "Why a person says no to a bad substance",
    "The peer pressure lines and the class's own answers",
    "The parts of the body and their proper function",
    "The wrong ways of using our body parts",
    "Medicine taken safely: who, how much, how long, stored where",
    "The class health campaign and the two slogans"
  ],
  terms:[
    {t:"peer pressure", d:"when people of your own age push you to do something", x:"Peer pressure is answered with a clear no."},
    {t:"refusal skill", d:"the way of saying no so that it is heard", x:"A refusal skill is practised out loud."},
    {t:"excuse", d:"a reason given to make something wrong sound right", x:"“It's harmless” is an excuse."},
    {t:"dose", d:"how much medicine is taken at one time", x:"The dose is on the label."},
    {t:"course", d:"the number of days a medicine is taken for", x:"Finish the course even when you feel better."},
    {t:"proper function", d:"the work a part of the body is made to do", x:"The proper function of the ears is hearing."},
    {t:"wrong way", d:"using a part of the body for what harms it", x:"Putting drugs into the body is a wrong way."},
    {t:"harm", d:"to hurt or damage", x:"Bad substances harm the body."},
    {t:"shame", d:"trying to make a person feel small so they give in", x:"“Are you afraid?” is shame, not a reason."},
    {t:"slogan", d:"a short line a class says together", x:"The slogan is “This is my body, I respect it.”"},
    {t:"campaign", d:"planned work to tell other people something", x:"The class campaign tells the school to say no."},
    {t:"stored", d:"kept safely in a place", x:"Medicine is stored up high, away from small children."}
  ],
  facts:[
    {q:"Give two reasons for saying no to a bad substance.", a:"It damages the body and the mind, it wastes the family's money, it stops learning, and it can lead to addiction."},
    {q:"Answer the line “Just try, once”.", a:"No. One time is enough to make my body want it."},
    {q:"Answer the line “It's harmless”.", a:"It is not harmless; it damages the body and the brain."},
    {q:"Name three wrong ways of using our body parts.", a:"Putting bad substances in, taking medicine that is not ours, hurting ourselves, letting somebody hurt or photograph us."},
    {q:"Who may give a child medicine?", a:"A health worker, or a grown-up told by a health worker."},
    {q:"Why must a course of medicine be finished?", a:"Because stopping early lets the illness come back, and come back stronger."},
    {q:"Say the two slogans.", a:"“This is my body, I respect it” and “I'll not put drugs into it.”"},
    {q:"Where is medicine stored in a house?", a:"Up high, in a closed place, away from small children — and old medicine is taken back to the clinic."}
  ],
  tf:[
    {s:"“Just try, once” is a safe offer.", a:"false", why:"Once is how addiction starts; the answer is no."},
    {s:"Medicine should be shared with a friend who has the same sickness.", a:"false", why:"Medicine is given to one person, by a health worker, in a measured dose."},
    {s:"A course of medicine is finished even when the person feels better.", a:"true", why:"Stopping early lets the illness come back stronger."},
    {s:"Shaming somebody into taking a substance is a good reason to take it.", a:"false", why:"Shame is not a reason; a person who shames you is doing wrong."},
    {s:"Every part of the body has a proper function.", a:"true", why:"Each part is made for a work, and the body stays well when it is used that way."},
    {s:"Old medicine can be kept for years in the cupboard.", a:"false", why:"Old medicine is taken back to the clinic; it can be spoilt or dangerous."}
  ],
  classify:{
    title:"Right way or wrong way?",
    groups:[
      {name:"Right way", items:["eating good food","taking medicine from a health worker","washing and resting the body","using the hands to learn a skill","saying no and telling"]},
      {name:"Wrong way", items:["putting alcohol into the body","taking your brother's tablets","letting somebody touch your private parts","sniffing glue or petrol","hurting another child"]}
    ]
  },
  diagram:{
    title:"Answer the line",
    caption:"Write the answer the class practised for each pressure line.",
    parts:[
      {p:"“Just try, once.”", f:"No. One time is enough to make my body want it."},
      {p:"“It's harmless.”", f:"It is not harmless; it damages the body and the brain."},
      {p:"“It will make you feel happy.”", f:"I want to feel happy playing football, not like that."},
      {p:"“Everybody is doing it.”", f:"Then everybody can do it. I will not."},
      {p:"“Are you afraid?”", f:"Yes, and I am right to be. No."},
      {p:"“Do not tell anybody.”", f:"I will tell. A touching secret is never kept."}
    ]
  },
  experiment:{
    title:"The Pressure-Line Practice",
    aim:"To give every child a ready answer to the lines that pressure them.",
    materials:["Six cards, one pressure line on each","A class answer chart on the board","Two chalk circles, one labelled SAFE"],
    steps:[
      "The teacher holds up one pressure-line card and reads it.",
      "A volunteer gives the class answer in a loud, steady voice.",
      "The class votes on whether the answer is clear, true and short.",
      "The best answers are written on the class answer chart.",
      "Every child says one answer to a partner and hears it said back.",
      "The chart is copied into the science journal."
    ],
    expect:"A chart of six short answers that every child in the class can say out loud without stopping to think.",
    why:"Pressure works by surprise; a child who already owns six answers is not surprised, and says no before the moment passes."
  },
  apply:[
    {q:"An older boy says “everybody in this town smokes; are you afraid?” What do you say?", a:"Then everybody can do it; I will not — and being careful is not being afraid."},
    {q:"You are given tablets at the clinic and you feel better after two days. What do you do?", a:"Finish the course as the health worker said, and take the rest of the medicine only as told."},
    {q:"A friend says a herb is not a drug because it grows in the bush. What do you say?", a:"A bad substance is a bad substance whatever it is called; I do not take it."},
    {q:"Somebody asks you to send a picture of yourself without clothes. What do you do?", a:"Say no, do not send it, and tell a trusted adult the same day."},
    {q:"Why does the class hold a campaign at the end of the year?", a:"So that what the class learned reaches the other classes, and so that saying no is ordinary in the school."}
  ],
  activities:[
    "Peer pressure lines: the teacher reads them and the class phrases its own answers (the guide's own activity)",
    "Pairs: each child says one refusal line loudly and the partner says it back",
    "Sorting game: right way and wrong way cards, placed with a reason",
    "Medicine safety demonstration: reading a label, measuring a dose, finishing a course, storing it up high",
    "Class campaign: posters, a slogan and a short play for the school, with leaflets and a megaphone where the school has them",
    "Closing chorus: “This is my body, I respect it — I'll not put drugs into it”, three times"
  ],
  materials:[
    "Charts and posters on drugs, medicine and the body",
    "Empty clean medicine packaging with a readable label",
    "Six pressure-line cards and the class answer chart",
    "Poster paper, crayons and markers for the campaign",
    "Leaflets and a megaphone for the class campaign, where the school has them",
    "The guide's internet links where the school has them"
  ],
  aids:[
    "Pressure-line cards and the answer chart",
    "Empty medicine packaging with a label",
    "Poster paper, crayons and markers",
    "The class slogan written large on the board",
    "Leaflets for the campaign"
  ],
  home:[
    "Say both slogans to your family: “This is my body, I respect it — I'll not put drugs into it”",
    "Practise answering one pressure line with a grown-up at home",
    "Check with a grown-up where the medicine in your house is kept, and whether any of it is old",
    "Tell your family who gives medicine in your house and how the dose is measured"
  ],
  assessment:[
    "Oral quiz: why say no; the parts of the body and their proper function; the wrong ways",
    "The Pressure-Line Practice: every child says one answer clearly",
    "Sorting task: right way and wrong way, with a reason for each",
    "Medicine safety: the label read, the dose, the course, the storage — four items",
    "Written work: true or false with reasons, six items",
    "Class campaign: the posters, the play and the two slogans, presented to another class at the health fair"
  ]
},
/* ==========================================================================
   GRADE 3 — the guide's health content sits in Period II (pp. 28-29, the
   “HEALTH LESSON: HUMAN REPRODUCTION AND PUBERTY” carried inside the outer
   space unit) and Period IV (pp. 32-33, “INVESTIGATING MORE USES OF PLANTS ·
   INVESTIGATING HOW WE CARE FOR OUR BODIES”). Both keep their numbers below.
   The plant work of Period IV is a two-part catalogue — Period I makes the
   catalogue and Period III matches it to the nutrient groups — while Period V
   carries the bad-substances column and Period VI the STI and refusal column
   of pp. 32-33.
   ========================================================================== */

/* ------------------------------ GRADE 3 · PERIOD I ------------------------------ */
{
  grade:3, period:"I", sem:"One", icon:"🌿", healthPlan:true,
  title:"A Catalog of Local Plants",
  subtitle:"Health strand · investigating more uses of plants — a catalog of twenty local plants and their uses, grouped as food, medicine, clothing, building materials, grooming and skin care, and ornaments (guide p. 32)",
  outcomes:[
    "Describe the ways we use plants and plant products",
    "Make a catalog of local plants and the ways we use them",
    "Group local plants by the work they do for us: food, medicine, clothing, building, grooming and ornaments"
  ],
  objectives:[
    "Name twenty local plants found around the school and the market",
    "Say how each plant is used",
    "Group the plants under the six headings the guide gives",
    "Explain that the same plant can serve more than one group",
    "Say which parts of the plant are used — leaf, root, fruit, seed, bark, oil",
    "Display a catalog of local plants matched with their uses"
  ],
  safeguard:"No child tastes, chews or applies any leaf, root, bark or fruit in this unit — the catalogue is made from what the class already eats at home and from named, known plants, drawn and written, never sampled. Where a family uses a local remedy, the class records it as knowledge and the teacher adds plainly that a sick child goes to the clinic; no child is asked what their family treats at home. Anything a child says that worries you is written in the child's own words and reported to the head teacher and the carer the same day.",
  note:"A **catalog** is a list made with care. The guide asks Grade 3 to list **twenty local plants** and to group them by what they do for us: **food, medicine, clothing, building materials, grooming and skin care, and ornaments**. One plant can belong to more than one group — the coconut feeds, oils the skin and thatches a roof.",
  study:[
    {k:"h3", t:"Making the Catalog"},
    {k:"p", t:"A **catalog** of plants is a list with three columns — the **name** of the plant, the **part** we use, and **what we use it for**. The guide asks for twenty local plants. Work in the market, in the school garden and in the compound; ask the elders the local name as well as the school name, and write both."},
    {k:"table", head:["Local plant","Part we use","What we use it for","Group"],
     rows:[
      ["Cassava","Root and leaf","Fufu, gari, dumboy; the leaf for soup","Food"],
      ["Rice","Grain","The daily food of the country","Food"],
      ["Plantain","Fruit","Boiled, roasted, fried, pounded","Food"],
      ["Yam","Tuber","Boiled, pounded","Food"],
      ["Sweet potato","Tuber","Boiled or roasted","Food"],
      ["Cocoyam (eddoe)","Tuber","Boiled, or pounded","Food"],
      ["Maize (corn)","Grain","Roasted, boiled, or ground","Food"],
      ["Oil palm","Fruit and kernel","Palm oil, palm butter, kernel oil","Food, grooming"],
      ["Coconut","Fruit and shell","Water, meat, oil; the shell for a cup","Food, grooming, ornaments"],
      ["Mango","Fruit","Eaten ripe","Food"],
      ["Orange","Fruit","Eaten, or squeezed","Food"],
      ["Papaya (pawpaw)","Fruit","Eaten ripe; the green fruit as a vegetable","Food"],
      ["Groundnut (peanut)","Seed","Eaten, or pressed for oil","Food"],
      ["Beans","Seed","Cooked as a soup or a sauce","Food"],
      ["Pumpkin (with egusi seeds)","Fruit and seed","The fruit cooked; the seed ground for soup","Food"],
      ["Okra","Fruit","Drawn soup","Food"],
      ["Bitter leaf","Leaf","A medicine for the stomach; also a soup","Medicine, food"],
      ["Neem","Leaf and bark","A medicine for fever and for the skin","Medicine"],
      ["Fever grass (lemongrass)","Leaf","A hot drink for fever and for a cold","Medicine"],
      ["Moringa","Leaf and pod","A food and a medicine, rich in strength","Food, medicine"],
      ["Aloe vera","Leaf","The jelly for burns and for the skin","Medicine, skin care"],
      ["Chewing stick (from several trees)","Twig and root","Cleaning the teeth","Grooming"],
      ["Cotton","Boll","Thread and cloth","Clothing"],
      ["Raffia palm","Leaf and stem","Thatch, rope, and weaving","Building"],
      ["Bamboo","Stem","Posts, walls, fence and furniture","Building"],
      ["Hibiscus","Flower","Ornament in the hair and in the compound","Ornaments"]
     ]},
    {k:"h3", t:"The Six Groups"},
    {k:"bul", items:[
      "**Food** — cassava, rice, plantain, yam, maize, beans, groundnut, mango, orange, papaya, okra, pumpkin.",
      "**Medicine** — bitter leaf, neem, fever grass, moringa, aloe vera, lime, ginger.",
      "**Clothing** — cotton for thread and cloth; raffia and palm leaf for a hat or a mat.",
      "**Building materials** — bamboo, raffia, coconut palm thatch, the mahogany and other timber trees.",
      "**Grooming and skin care** — palm kernel oil, coconut oil, black soap made from plantain peel ash, the chewing stick for the teeth.",
      "**Ornaments** — hibiscus, bougainvillea, palm kernel seeds for a necklace, a woven raffia cap."
    ]},
    {k:"h3", t:"One Plant, Many Uses"},
    {k:"p", t:"The **coconut** is food, oil for the skin and hair, and shell for a cup or a button. The **oil palm** gives palm oil for the pot, palm butter for soup, kernel oil for the skin, and fronds for thatch. The **papaya** is eaten ripe and cooked green; its leaf is used as a medicine in some homes. When a plant is put in a group, put it in every group it belongs to and say why."},
    {k:"h3", t:"What the Catalog Is For"},
    {k:"p", t:"The guide asks for a **display**: a catalog of local plants matched with their uses, and later with the nutrients they give. The display goes on the wall where other classes can read it, and it is the class's own book of what grows here. It also tells a plain truth: the food that grows in this country can feed a family well, and the child who knows twenty plants knows where the next meal comes from."}
  ],
  focus:[
    "What a catalog is: name, part used, what it is for",
    "Twenty local plants, named in school English and in the local name",
    "The six groups: food, medicine, clothing, building, grooming, ornaments",
    "One plant, many uses",
    "The class display: the plant catalog wall",
    "Which plants the class uses every day"
  ],
  terms:[
    {t:"catalog", d:"a careful list with the name, the part used and the use", x:"The class catalog holds twenty plants."},
    {t:"local plant", d:"a plant that grows in this country", x:"Cassava is a local plant."},
    {t:"nutrient", d:"the part of food that feeds the body", x:"Rice gives the nutrient carbohydrate."},
    {t:"medicine", d:"what is used to cure or to ease an illness", x:"Bitter leaf is used as a medicine."},
    {t:"fibre", d:"the thread from a plant, used for cloth and rope", x:"Cotton gives fibre for cloth."},
    {t:"thatched", d:"roofed with palm or grass", x:"The house is thatched with palm."},
    {t:"remedy", d:"a local way of treating an illness at home", x:"Fever grass tea is a home remedy."},
    {t:"ornament", d:"something used to make a person or a place beautiful", x:"A hibiscus flower is an ornament."},
    {t:"grooming", d:"keeping the hair, teeth and skin clean and neat", x:"A chewing stick is used for grooming."},
    {t:"skin care", d:"what we put on the skin to keep it well", x:"Coconut oil is used for skin care."},
    {t:"part used", d:"the leaf, root, fruit, seed, bark or oil that we take", x:"The part used of cassava is the root."},
    {t:"display", d:"work put up on the wall for others to read", x:"The plant display is on the classroom wall."}
  ],
  facts:[
    {q:"What is a catalog?", a:"A careful list with the name of the plant, the part we use and what we use it for."},
    {q:"Name five local plants we eat.", a:"Cassava, rice, plantain, yam, maize, beans, groundnut, mango, orange, papaya, okra, pumpkin."},
    {q:"Name three plants used as medicine.", a:"Bitter leaf, neem, fever grass, moringa, aloe vera, lime, ginger."},
    {q:"Name one plant used for building and one used for clothing.", a:"Bamboo or raffia for building; cotton for clothing."},
    {q:"Name one plant used for grooming and skin care.", a:"Oil palm for kernel oil, coconut for oil, or the chewing stick for the teeth."},
    {q:"Give one plant with more than one use.", a:"The coconut: food, coconut oil for the skin, and shell for a cup or an ornament."},
    {q:"Why does the teacher say no plant is tasted in this lesson?", a:"Because some plants are poisonous; the catalog is made from named, known plants, never by tasting."},
    {q:"Where does a sick child go?", a:"To the clinic or the hospital; a home remedy does not take the place of a health worker."}
  ],
  tf:[
    {s:"A plant can belong to only one group.", a:"false", why:"The coconut is food, skin care and ornament; a plant is put in every group it belongs to."},
    {s:"Cotton gives the fibre for cloth.", a:"true", why:"Cotton is the clothing plant of the six groups."},
    {s:"It is safe to taste a leaf to find out what it is.", a:"false", why:"Some plants are poisonous; nothing in this unit is tasted."},
    {s:"A home remedy takes the place of the clinic.", a:"false", why:"A home remedy is recorded as knowledge; a sick child is taken to a health worker."},
    {s:"Bamboo is used for building.", a:"true", why:"Bamboo gives posts, walls, fences and furniture."},
    {s:"The guide asks for a catalog of ten local plants.", a:"false", why:"The guide asks for twenty local plants and their uses."}
  ],
  classify:{
    title:"Which group does this plant belong to?",
    groups:[
      {name:"Food", items:["cassava","rice","plantain","yam","maize","beans","groundnut","mango","okra"]},
      {name:"Medicine", items:["bitter leaf","neem","fever grass","moringa","aloe vera","lime"]},
      {name:"Clothing", items:["cotton","raffia leaf for a hat"]},
      {name:"Building materials", items:["bamboo","raffia","coconut thatch","timber"]},
      {name:"Grooming and skin care", items:["palm kernel oil","coconut oil","black soap from plantain ash","chewing stick"]},
      {name:"Ornaments", items:["hibiscus","bougainvillea","palm kernel seeds","a woven raffia cap"]}
    ]
  },
  diagram:{
    title:"The catalog line",
    caption:"Fill in one line of the catalog for each plant: name, part used, what it is for, group.",
    parts:[
      {p:"Cassava", f:"root and leaf — fufu, gari, soup — food"},
      {p:"Oil palm", f:"fruit and kernel — palm oil, kernel oil, thatch — food, grooming, building"},
      {p:"Neem", f:"leaf and bark — medicine for fever and skin — medicine"},
      {p:"Cotton", f:"boll — thread and cloth — clothing"},
      {p:"Bamboo", f:"stem — posts, walls, fence — building"},
      {p:"Aloe vera", f:"leaf — jelly for burns and the skin — medicine, skin care"},
      {p:"Hibiscus", f:"flower — in the hair and the compound — ornaments"},
      {p:"Chewing stick", f:"twig — cleaning the teeth — grooming"}
    ]
  },
  experiment:{
    title:"The Plant Hunt and the Class Catalog",
    aim:"To make the twenty-plant catalog from real plants found near the school.",
    materials:["Paper, pencil and a ruler for each group","A teacher-made incomplete poster with the six group headings","Crayons","A clipboard or a hard book to write on","A camera or phone where the school has one, otherwise careful drawings"],
    steps:[
      "In groups of four, walk the school compound, the garden and the road to the market.",
      "For each plant, write the school name, the local name, the part used and the use.",
      "Do not pick, taste or chew anything; draw the leaf where you cannot name the plant.",
      "Back in class, sort the plants into the six groups on the teacher's poster.",
      "Copy the finished catalog onto the display sheet and hang it on the wall."
    ],
    expect:"A catalog of at least twenty local plants, each with a part used and a use, sorted into the six groups.",
    why:"A list a child made themselves, from plants they can point to, is remembered; and the sort shows how much of daily life hangs on plants."
  },
  apply:[
    {q:"Your small brother picks a red berry in the bush and wants to eat it. What do you say?", a:"Do not eat it; nobody tastes an unknown plant. Take him to a grown-up and show them the plant."},
    {q:"Your grandmother uses bitter leaf for a stomach pain. Should she still go to the clinic?", a:"Yes — the remedy is knowledge, but a pain that goes on is taken to a health worker."},
    {q:"Name one plant in your compound and say which of the six groups it belongs to.", a:"Any true answer, for example: “the mango tree at our gate — food.”"},
    {q:"Which local plant gives the oil your family cooks with, and where does it come from?", a:"Palm oil from the oil palm fruit, or groundnut oil pressed from groundnuts."},
    {q:"Why does the catalog record the local name as well as the school name?", a:"Because the person at the market and the elder at home use the local name, and a child must be able to ask for what they need."}
  ],
  activities:[
    "Plant hunt in groups of four: twenty plants, with the school name, the local name, the part used and the use",
    "Sorting: the plants placed under the six group headings on the teacher-made poster",
    "Guided discussion: “Which plant can supply our bodies with…?” (the guide's own activity)",
    "Drawing: one plant per child, with the part used coloured in",
    "Display: the class catalog on the wall, matched with uses, for other classes to read",
    "Choral line: “Twenty plants feed, cure, clothe and build for us.”"
  ],
  materials:[
    "Level textbook and science charts",
    "Teacher-made incomplete posters (2) with the six group headings",
    "Pictures of local plants from magazines or drawings",
    "Paper, pencils, crayons and a ruler",
    "A clipboard or hard book to write on outdoors",
    "The guide's internet links where the school has them"
  ],
  aids:[
    "The two teacher-made posters with the six headings",
    "Pictures of local plants",
    "Paper, pencils, crayons and a ruler",
    "Clipboards or hard books for the plant hunt",
    "The class catalog sheet for the wall"
  ],
  home:[
    "Walk your own compound and name five plants, with what your family uses each for",
    "Ask an elder the local name of three plants and bring the names to class",
    "Draw one plant from home with its part used labelled",
    "With a grown-up, say which of the six groups the plants in your compound belong to"
  ],
  assessment:[
    "The catalog itself: twenty plants, each with a part used and a use",
    "Sorting task: plants placed under the six groups, with a reason for each",
    "Oral quiz: name three food plants, three medicine plants, one building plant",
    "The display, explained by each group to another class",
    "Written work: true or false with reasons, six items",
    "Science journal: the drawing of one plant with its four columns filled in"
  ]
},

/* ----------------------------- GRADE 3 · PERIOD II ----------------------------- */
{
  grade:3, period:"II", sem:"One", icon:"🌱", healthPlan:true,
  title:"Growing Up: Puberty and Where Babies Come From",
  subtitle:"Health strand · the guide's Grade 3 health lesson — puberty and its key features, the steps in reproduction, the right time to have a baby, and how pregnancy can be avoided (guide pp. 28–29)",
  outcomes:[
    "Explain the stage of puberty among females and males",
    "Explain the different steps in reproduction",
    "Plan when they want to have a baby, and understand the right time for it"
  ],
  objectives:[
    "Define puberty and name its key features",
    "Name the changes puberty brings: of the body, of feelings and of the way a person is treated",
    "Say that menstruation in girls and wet dreams in boys are normal",
    "Put the steps of reproduction in order: ovulation, fertilization, conception, pregnancy, delivery",
    "Say when the right time to have a baby is",
    "Say how pregnancy can be avoided, and that waiting is the safe way"
  ],
  safeguard:"Puberty is taught from charts and from the guide's own words, in mixed or same-sex small groups as the school's custom allows, and never by asking a child about their own body, their own changes or their own home. No child is examined, measured or pointed at. Questions a grown-up should answer are taken aside and answered quietly, never in front of the class; a question is answered at the level it was asked and no further. Send the parent notice the week before this unit and hold the talk with a same-sex teacher or the school health worker where the school can. If a child discloses anything that worries you, listen once, do not question twice, write it in the child's own words and take it to the head teacher and the carer the same day — in Liberia, to the police Women and Children Protection Unit and the Ministry of Gender, Children and Social Protection.",
  note:"**Puberty** is the time when a child's body grows into a grown-up's body. It brings changes to the **body**, to **feelings** and to the way other people **treat** you. A baby begins when an **egg** from the woman meets a **sperm** from the man; the baby grows in the **womb** for about nine months and is then **born**. The right time to have a baby is when a person is **grown** and can care for a child; a child cannot, and waiting is the safe way.",
  study:[
    {k:"h3", t:"What Puberty Is"},
    {k:"p", t:"**Puberty** is the stage when the body changes from a child's body into a grown-up's body. It does not come on one day: it comes slowly, over some years, and it comes earlier for some people and later for others. Both are normal. The guide names the **key features**: parts of the body undergo changes, girls begin **menstruation**, boys have **wet dreams**, and there are **physical**, **emotional** and **social** changes."},
    {k:"h3", t:"The Changes"},
    {k:"table", head:["Kind of change","In girls","In boys"],
     rows:[
      ["Physical (of the body)","Breasts grow; hair grows under the arms and between the legs; the body grows taller and wider; menstruation begins","The voice breaks; hair grows on the face, under the arms and between the legs; the penis and testicles grow; the body grows taller and the shoulders widen"],
      ["Emotional (of the feelings)","Feelings come strongly and change quickly; a person wants to be liked, and worries what others think","The same — strong feelings, mood swings, wanting to be noticed and respected"],
      ["Social (of how others treat you)","People expect more help at home and more care about dress and behaviour; unwanted attention can begin","People expect a boy to be strong and to help; some are pushed to prove themselves"],
      ["Of the skin and hair","The skin grows oily and spots can come; sweat smells more","The same — oily skin, spots and a stronger smell of sweat"]
     ]},
    {k:"h3", t:"Menstruation and Wet Dreams"},
    {k:"p", t:"**Menstruation** is the monthly bleeding a woman and a girl have once her body is ready; it is not an illness, not a wound and not a shame. It means the body is working as it was made to. A girl who is menstruating carries a clean cloth or pad, washes, and goes on with school and play. **Wet dreams** are the same kind of normal for boys: the body releases fluid in the night. Neither is dirty, neither is anybody's fault, and neither is spoken about to tease a person."},
    {k:"h3", t:"The Steps in Reproduction"},
    {k:"num", items:[
      "**Ovulation** — an egg leaves the woman's body store, once in about a month.",
      "**Fertilization** — a sperm from the man meets the egg. This is the moment a new life begins.",
      "**Conception** — the joined egg settles in the **womb**; this is the start of pregnancy.",
      "**Pregnancy** — the baby grows inside the womb for about nine months.",
      "**Delivery** — the baby is born, and the mother and the father care for it."
    ]},
    {k:"h3", t:"The Right Time to Have a Baby"},
    {k:"p", t:"The guide asks the class to think about the **right time**. A baby is a person who needs food, clothing, school fees, care and time for many years. The right time is when a person is **grown**, has finished school or training, has work or a way to feed a family, and **chooses** to have a child with someone who will help. A child of nine or twelve cannot give a baby those things, which is why the guide asks pupils to **plan** and to **wait**."},
    {k:"h3", t:"How Pregnancy Can Be Avoided"},
    {k:"p", t:"Pregnancy is avoided by **not having sex**. That is called **waiting**, or **abstinence**, and it is the only sure way, and the only one a child needs. It is not a punishment and it is not being afraid: it is choosing the life you want first. Anybody who presses a child to do otherwise is doing wrong, and the child says no and tells a trusted adult. Grown-ups have other methods, which a health worker explains to them; a child's answer is waiting."},
    {k:"h3", t:"What Nobody May Do"},
    {k:"p", t:"Nobody may touch a child's private parts, ask a child to show them, take pictures of them, or press a child into sex. Nobody may shame a girl for menstruating or a boy for the changes in his body. A person who does any of these things is doing wrong, and the child says **no**, goes away, and **tells** — and keeps telling until somebody helps."}
  ],
  focus:[
    "What puberty is, and that it comes early for some and late for others",
    "The physical changes, in girls and in boys",
    "The emotional and social changes",
    "Menstruation and wet dreams: normal, not a shame",
    "The five steps in reproduction",
    "The right time to have a baby; waiting is the safe way"
  ],
  terms:[
    {t:"puberty", d:"the stage when a child's body grows into a grown-up's body", x:"Puberty comes at different ages for different people."},
    {t:"menstruation", d:"the monthly bleeding of a woman or a girl; it is normal", x:"Menstruation is not an illness."},
    {t:"wet dream", d:"when a boy's body releases fluid in the night; it is normal", x:"A wet dream is a normal part of growing up."},
    {t:"physical change", d:"a change of the body", x:"Growing taller is a physical change."},
    {t:"emotional change", d:"a change in feelings", x:"Strong feelings are an emotional change."},
    {t:"social change", d:"a change in how other people treat you", x:"Being expected to help more at home is a social change."},
    {t:"ovulation", d:"when an egg leaves the woman's body store, about once a month", x:"Ovulation is the first step in reproduction."},
    {t:"fertilization", d:"when a sperm from the man meets the egg", x:"Fertilization begins a new life."},
    {t:"conception", d:"when the joined egg settles in the womb", x:"Conception is the start of pregnancy."},
    {t:"pregnancy", d:"the nine months a baby grows inside the womb", x:"Pregnancy lasts about nine months."},
    {t:"delivery", d:"the birth of the baby", x:"At delivery the baby is born."},
    {t:"abstinence", d:"choosing not to have sex; waiting", x:"Abstinence is the sure way to avoid pregnancy."}
  ],
  facts:[
    {q:"What is puberty?", a:"The stage when a child's body grows into a grown-up's body; it comes slowly and at different ages for different people."},
    {q:"Name two physical changes of puberty in girls.", a:"The breasts grow and hair grows under the arms and between the legs; menstruation begins."},
    {q:"Name two physical changes of puberty in boys.", a:"The voice breaks, hair grows on the face and the body, and the penis and testicles grow."},
    {q:"Is menstruation an illness?", a:"No. It is the normal monthly bleeding that shows a girl's body is working as it was made to."},
    {q:"Name the five steps in reproduction.", a:"Ovulation, fertilization, conception, pregnancy and delivery."},
    {q:"How long does a pregnancy last?", a:"About nine months."},
    {q:"When is the right time to have a baby?", a:"When a person is grown, has finished school or training, can feed and care for a child, and chooses to with somebody who will help."},
    {q:"How can pregnancy be avoided?", a:"By not having sex — by waiting, which is called abstinence."}
  ],
  tf:[
    {s:"Puberty comes on the same day for everybody.", a:"false", why:"It comes slowly, over years, and earlier for some and later for others — both are normal."},
    {s:"Menstruation is an illness.", a:"false", why:"It is the normal monthly bleeding of a woman's or a girl's body."},
    {s:"Fertilization is when a sperm meets the egg.", a:"true", why:"That is the moment a new life begins."},
    {s:"A baby grows in the womb for about nine months.", a:"true", why:"Pregnancy lasts about nine months before delivery."},
    {s:"Abstinence means waiting, and it is the sure way to avoid pregnancy.", a:"true", why:"Not having sex is the only sure way, and the only one a child needs."},
    {s:"A girl should be sent home from school when she is menstruating.", a:"false", why:"She carries a clean cloth or pad, washes, and goes on with school and play."}
  ],
  classify:{
    title:"Which kind of change is it?",
    groups:[
      {name:"Physical (of the body)", items:["growing taller","the voice breaking","hair under the arms","menstruation beginning","spots on the skin"]},
      {name:"Emotional (of the feelings)", items:["feelings coming strongly","worrying what others think","wanting to be liked","mood swings"]},
      {name:"Social (of how others treat you)", items:["being expected to help more at home","unwanted attention","being pushed to prove yourself"]},
      {name:"Nobody's business", items:["another child's private parts","another child's family","what another child's body looks like"]}
    ]
  },
  diagram:{
    title:"The steps in reproduction",
    caption:"Put the five steps in order and write one line about each.",
    parts:[
      {p:"Ovulation", f:"an egg leaves the woman's body store, about once a month"},
      {p:"Fertilization", f:"a sperm from the man meets the egg"},
      {p:"Conception", f:"the joined egg settles in the womb"},
      {p:"Pregnancy", f:"the baby grows in the womb for about nine months"},
      {p:"Delivery", f:"the baby is born, and the mother and father care for it"}
    ]
  },
  experiment:{
    title:"The Growing-Up Questions Box (anonymous)",
    aim:"To let every child ask what they want to know, without anybody having to ask out loud.",
    materials:["A box with a slit in the lid","Slips of paper and pencils","A chart for the questions the class will answer together","The parent notice sent out the week before"],
    steps:[
      "Every child writes one question about growing up, without a name, and puts it in the box.",
      "The teacher reads the questions out and groups them: body, feelings, or how people treat you.",
      "The class answers the questions that the guide covers, from the chart and the notes.",
      "Questions a grown-up should answer are taken aside and answered quietly, one to one, or at the talk with the same-sex teacher or the school health worker.",
      "No child is asked who wrote a question, and no child's own body is discussed in class."
    ],
    expect:"A wall of questions answered from the guide, and two or three taken aside for a quiet, one-to-one answer.",
    why:"A child who is too shy to ask in class still needs the answer; the box makes asking safe, and the teacher's judgement keeps the answer at the child's level."
  },
  apply:[
    {q:"A girl in your class has her first menstruation and a boy laughs at her. What do you do?", a:"Tell him to stop — menstruation is normal and nobody is laughed at — and help her quietly to what she needs, or take her to the female teacher."},
    {q:"Your friend's body has not changed yet, and he is worried. What do you say?", a:"Puberty comes earlier for some and later for others; both are normal, and it will come."},
    {q:"An older person tells you that you are grown now because your body has changed. What is the truth?", a:"The body changing is not the same as being grown; a person is grown when they can care for themselves and a family."},
    {q:"Somebody says you must prove you are grown by having sex. What do you say?", a:"No. Waiting is the safe way and it is my choice; a person who presses a child is doing wrong, and I will tell a trusted adult."},
    {q:"Why does the class use a questions box instead of asking out loud?", a:"Because a child who is too shy to ask in class still needs the answer, and nobody has to be named for what they want to know."}
  ],
  activities:[
    "Chart work: the changes of puberty, named from the guide's own list — physical, emotional and social",
    "The Growing-Up Questions Box, answered together or taken aside quietly",
    "Ordering game: the five steps of reproduction placed in the right order on the board",
    "Small-group talk with a same-sex teacher or the school health worker, where the school's custom allows it",
    "Think and write: “The life I want at twenty” — and what having a baby now would do to it (the guide's own activity)",
    "Parent notice sent home the week before the unit begins"
  ],
  materials:[
    "Charts of the changes at puberty, drawn for this age",
    "A questions box, slips of paper and pencils",
    "The parent notice, prepared a week before",
    "Level textbook and science charts",
    "Paper and crayons for the “life I want at twenty” writing",
    "The guide's internet links where the school has them"
  ],
  aids:[
    "Chart of the changes at puberty",
    "The questions box and slips of paper",
    "Word cards for the five steps in reproduction",
    "The parent notice",
    "Paper and crayons"
  ],
  home:[
    "Read the parent notice with a grown-up at home and bring back any question, written down",
    "Ask a grown-up of your own sex what they were told about growing up when they were your age",
    "Write “the life I want at twenty” and keep it in your journal",
    "Tell a grown-up at home: nobody touches my body, and I tell if anybody tries"
  ],
  assessment:[
    "Oral quiz: define puberty; name one physical, one emotional and one social change",
    "Ordering task: the five steps of reproduction, in the right order, with a line about each",
    "True or false with reasons: six items",
    "The questions box: every child's question answered, in class or taken aside",
    "The “life I want at twenty” writing, marked on thought and honesty, not on length",
    "Teacher's record: the parent notice went out; any disclosure written in the child's own words and passed to the head teacher the same day"
  ]
},

/* ---------------------------- GRADE 3 · PERIOD III ---------------------------- */
{
  grade:3, period:"III", sem:"One", icon:"🍠", healthPlan:true,
  title:"Nutrients from Liberian Plants",
  subtitle:"Health strand · nutrients from Liberian plants — grouping local names against the major nutrient groups: carbohydrates, proteins, fats and oils, vitamins and minerals (guide p. 32)",
  outcomes:[
    "Describe the ways we use plants and plant products as sources of nutrients",
    "Match local plants with the major nutrient groups",
    "Explain why a body needs something from each group every day"
  ],
  objectives:[
    "Say what a nutrient is",
    "Name the five major nutrient groups the guide gives",
    "Match local plants and local foods to the group they belong to",
    "Say what each nutrient group does for the body",
    "Plan one day's food that has something from each group",
    "Read the signs of a body that is not getting what it needs"
  ],
  safeguard:"Food work never asks what a child ate at home or whether there was food; the plate a child plans is a plate from the market and the garden, not a report on the family. Where a child is thin, tired or hungry, the teacher acts quietly — a word with the head teacher, a meal where the school can give one — and never asks the child to explain in front of the class.",
  note:"A **nutrient** is the part of the food that feeds the body. The guide gives five groups: **carbohydrates**, **proteins**, **fats and oils**, **vitamins** and **minerals**. A body needs something from each group **every day** — that is what a balanced plate means.",
  study:[
    {k:"h3", t:"What a Nutrient Is"},
    {k:"p", t:"A **nutrient** is the part of the food that does the work inside the body: giving strength, building the body, or keeping it from falling sick. The food on the plate is made of nutrients, and different foods carry different ones. That is why one food alone is never enough, however much of it you eat."},
    {k:"h3", t:"The Five Nutrient Groups"},
    {k:"table", head:["Nutrient group","What it does for the body","Local plants and foods that give it"],
     rows:[
      ["Carbohydrates","Give energy to work, play and think","Rice, cassava, yam, plantain, maize, sweet potato, cocoyam, breadfruit, sugarcane"],
      ["Proteins","Build the body and repair it; make a child grow","Beans, groundnuts, egusi (pumpkin seeds), soya, fish, meat, eggs"],
      ["Fats and oils","Give stored energy and keep the body warm; carry vitamins","Palm oil, palm butter, groundnut oil, coconut, avocado (pear)"],
      ["Vitamins","Keep the eyes, the skin and the body's defence working","Mango, orange, papaya, pineapple, guava, pepper, dark green leaves, carrot"],
      ["Minerals","Build the blood and the bones","Dark green leaves (bitter leaf, moringa, cassava leaf), banana, coconut water, groundnut, fish with bones"]
     ]},
    {k:"h3", t:"The Balanced Plate"},
    {k:"p", t:"A **balanced plate** has something from each group: a big part of **carbohydrate** for strength, a part of **protein** to build the body, a little **fat or oil** for energy and to carry vitamins, and a good part of **vitamins and minerals** from fruit and green leaves. Rice with palm butter soup, with beans or fish in it and greens on the side, is a balanced plate made entirely of Liberian food."},
    {k:"h3", t:"When the Body Does Not Get What It Needs"},
    {k:"p", t:"A body that does not get enough **protein** stops growing well and falls sick often. Not enough **vitamins** brings sore eyes, sore gums and a body that catches every illness. Not enough **minerals** brings tiredness and weak blood. Not enough **carbohydrate** leaves a child too tired to learn. None of these is a child's fault and none of them is laughed at: the answer is food, and where a family cannot give it, the school and the clinic help."},
    {k:"h3", t:"Food Hygeine"},
    {k:"p", t:"A good food can still make a person sick if it is handled badly. **Wash the hands** before cooking and eating, **wash the fruit and the greens** in clean water, **cover the food** from flies, **cook it through**, and **eat it fresh** — food left standing in the heat grows germs. Clean water, clean hands and a covered pot are half of good feeding."}
  ],
  focus:[
    "What a nutrient is",
    "The five nutrient groups and what each does",
    "Matching local plants and foods to their groups",
    "The balanced plate, made from Liberian food",
    "The signs of a body that is not getting what it needs",
    "Clean hands, clean water, clean food"
  ],
  terms:[
    {t:"nutrient", d:"the part of food that feeds the body", x:"Rice gives the nutrient carbohydrate."},
    {t:"carbohydrate", d:"the nutrient that gives energy", x:"Cassava and rice are carbohydrates."},
    {t:"protein", d:"the nutrient that builds and repairs the body", x:"Beans and groundnuts give protein."},
    {t:"fat and oil", d:"the nutrient that stores energy and keeps the body warm", x:"Palm oil is a fat."},
    {t:"vitamin", d:"the nutrient that keeps the eyes, skin and defence working", x:"Oranges give vitamin C."},
    {t:"mineral", d:"the nutrient that builds the blood and the bones", x:"Greens give minerals for the blood."},
    {t:"energy", d:"the strength to work, play and think", x:"Carbohydrate gives energy."},
    {t:"balanced plate", d:"a plate with something from each nutrient group", x:"Rice, beans, greens and palm oil make a balanced plate."},
    {t:"defence", d:"the part of the body that fights germs", x:"Vitamins help the body's defence."},
    {t:"anaemia", d:"weak blood, from too little mineral in the food", x:"Green leaves help to prevent anaemia."},
    {t:"fresh", d:"food made or picked the same day", x:"Eat food fresh, not left standing in the heat."},
    {t:"covered", d:"food kept under a cover so flies cannot reach it", x:"Food is covered until it is eaten."}
  ],
  facts:[
    {q:"What is a nutrient?", a:"The part of food that feeds the body: gives strength, builds it, or keeps it from falling sick."},
    {q:"Name the five nutrient groups.", a:"Carbohydrates, proteins, fats and oils, vitamins and minerals."},
    {q:"Which nutrient gives energy?", a:"Carbohydrate — from rice, cassava, yam, plantain and maize."},
    {q:"Which nutrient builds the body?", a:"Protein — from beans, groundnuts, egusi, fish, meat and eggs."},
    {q:"Name two foods that give vitamins.", a:"Mango, orange, papaya, pineapple, guava, pepper or dark green leaves."},
    {q:"Name two foods that give minerals.", a:"Dark green leaves such as bitter leaf, moringa or cassava leaf; banana; coconut water."},
    {q:"Why is one food alone not enough?", a:"Because each food carries only some nutrients, and the body needs something from every group each day."},
    {q:"Give two ways of keeping food safe to eat.", a:"Wash the hands and the food, cook it through, cover it from flies and eat it fresh."}
  ],
  tf:[
    {s:"Rice gives carbohydrate.", a:"true", why:"Rice, cassava and yam are the carbohydrate foods."},
    {s:"Beans give protein for building the body.", a:"true", why:"Beans, groundnuts and egusi are the protein foods."},
    {s:"One food can give the body everything it needs.", a:"false", why:"Each food carries only some nutrients, which is why the plate must be balanced."},
    {s:"Vitamins help the body fight illness.", a:"true", why:"Vitamins keep the eyes, the skin and the body's defence working."},
    {s:"Food left in the heat all day is still safe to eat.", a:"false", why:"Warm food grows germs; food is eaten fresh or reheated well."},
    {s:"A child who is thin and tired should be laughed at.", a:"false", why:"Thinness and tiredness are signs the body needs food and a clinic; they are never a reason for shame."}
  ],
  classify:{
    title:"Which nutrient group does it belong to?",
    groups:[
      {name:"Carbohydrates", items:["rice","cassava","yam","plantain","maize","sweet potato","breadfruit"]},
      {name:"Proteins", items:["beans","groundnuts","egusi seeds","fish","eggs","soya"]},
      {name:"Fats and oils", items:["palm oil","palm butter","groundnut oil","coconut","avocado pear"]},
      {name:"Vitamins", items:["mango","orange","papaya","pineapple","guava","pepper","greens"]},
      {name:"Minerals", items:["bitter leaf","moringa leaf","cassava leaf","banana","coconut water"]}
    ]
  },
  diagram:{
    title:"The balanced plate",
    caption:"Divide the plate into the five groups and write a Liberian food in each part.",
    parts:[
      {p:"Biggest part", f:"carbohydrate — rice, cassava or yam"},
      {p:"A good part", f:"protein — beans, groundnuts, egusi or fish"},
      {p:"A small part", f:"fat or oil — palm oil or groundnut oil"},
      {p:"A good part", f:"vitamins — mango, orange, papaya or pepper"},
      {p:"A good part", f:"minerals — bitter leaf, moringa or cassava leaf"},
      {p:"With every plate", f:"clean water, and clean hands before eating"}
    ]
  },
  experiment:{
    title:"Plan a Balanced Meal from Local Foods",
    aim:"To build one day's food from the five nutrient groups, using foods grown here.",
    materials:["Pictures or drawings of local foods, cut out or drawn","A paper plate for each group, divided into five","Glue and crayons","The class nutrient chart on the board"],
    steps:[
      "Each group is given a paper plate divided into five parts and a pile of food pictures.",
      "Sort the pictures into the five nutrient groups first.",
      "Choose one food for each part of the plate, from the foods grown or sold here.",
      "Glue them on and write the name of each under it.",
      "Each group shows its plate and says what each food does for the body.",
      "The class votes on which plates are balanced and which are missing a group."
    ],
    expect:"Plates that carry something from all five groups, named from local food, with a reason for each choice.",
    why:"Planning a plate is the skill that turns the nutrient table into a meal; a child who can build a balanced plate can feed a family well."
  },
  apply:[
    {q:"Your plate has rice and oil only, every day. What is missing and what will happen?", a:"Protein, vitamins and minerals are missing; the body will not grow well and will fall sick often."},
    {q:"Name a Liberian meal that is already balanced.", a:"Rice with palm butter soup, with fish or beans in it and greens on the side."},
    {q:"Your friend is always tired in the morning. Name one food reason and one other reason.", a:"Not enough food, or food without enough minerals; or not enough sleep. Neither is his fault."},
    {q:"The soup was cooked last night and stood in the kitchen all day. What should happen before it is eaten?", a:"It should be boiled again until it is hot right through, and eaten at once; better still, food is eaten fresh."},
    {q:"Why does the teacher never ask what you ate at home?", a:"Because food is not a competition and nobody is shamed for what their family could or could not give."}
  ],
  activities:[
    "Guided discussion: “Which plant can supply our bodies with carbohydrates? With protein?” (the guide's own activity)",
    "Sorting: local food pictures placed under the five nutrient groups",
    "Plan a Balanced Meal from local foods, on a paper plate in five parts",
    "Market list: one day's food for a family, written with the group beside each item",
    "Poster: the balanced plate, drawn from Liberian food, hung in the classroom",
    "Choral line: “Something from each group, every day.”"
  ],
  materials:[
    "Food pictures cut from magazines, or drawings made by the class",
    "Paper plates, glue and crayons",
    "The class nutrient chart on the board",
    "Level textbook and science charts",
    "Real local foods brought in for the display where the school can",
    "The guide's internet links where the school has them"
  ],
  aids:[
    "Food pictures for the sorting game",
    "Paper plates, glue and crayons",
    "The nutrient chart",
    "Real local foods for the display",
    "Poster paper for the balanced plate"
  ],
  home:[
    "With a grown-up, name the five nutrient groups and one food from home in each",
    "Help to plan one day's food for the family from what the market sells",
    "Wash the fruit and the greens before they are cooked, and say why",
    "Draw a balanced plate in your journal with Liberian food in each part"
  ],
  assessment:[
    "Oral quiz: name the five nutrient groups and what each does",
    "Sorting task: local foods placed under the five groups, with a reason",
    "The balanced plate: five parts filled, explained to the class",
    "True or false with reasons: six items",
    "The market list: one day's food with the group written beside each item",
    "Science journal: the balanced plate drawing and one line on why one food is not enough"
  ]
},

/* ----------------------------- GRADE 3 · PERIOD IV ---------------------------- */
{
  grade:3, period:"IV", sem:"Two", icon:"🧼", healthPlan:true,
  title:"Caring for Our Bodies: Personal Hygiene",
  subtitle:"Health strand · investigating how we care for our bodies — the importance of personal hygiene, the daily care of the body, and the slogan (guide p. 33, objective 5, with the guide's care-of-the-body column)",
  outcomes:[
    "Explain the importance of personal hygiene",
    "Practise the daily care of the whole body and know why each care is done",
    "Keep a personal hygiene routine for a month and record it"
  ],
  objectives:[
    "Explain the importance of personal hygiene",
    "Name the daily, weekly and seasonal care the body needs",
    "Say what germs are and how hygiene keeps them from entering the body",
    "Care for the teeth, the skin, the hair, the nails, the ears, the eyes and the feet",
    "Keep clean water and a clean latrine at the centre of the routine",
    "Repeat the slogan: “This is my body; I respect it.”"
  ],
  safeguard:"Personal hygiene is taught on charts, on the teacher's own hands and teeth, and with the children's own aids; no child is inspected, no child's body or clothes are commented on in front of the class, and no child is asked about the water or the soap at home. Where a child needs soap, a towel, shoes or a comb, the teacher supplies what the school can, quietly and privately; a worry about a child's welfare is written down and taken to the head teacher the same day.",
  note:"**Personal hygiene** is the daily work of keeping the body clean. It matters because **germs** — too small to see — live on dirty hands, in unwashed food, in standing water and on unwashed bodies, and they enter the body through the **mouth**, the **nose**, the skin and a **cut**. Hygiene closes those doors.",
  study:[
    {k:"h3", t:"Why Hygiene Matters"},
    {k:"p", t:"A **germ** is a living thing too small to see that can cause **disease**. Germs reach the body through the **mouth** (with food or with dirty fingers), through the **nose** (with the air), through the **skin** when it is cut, and through the eyes when they are rubbed with dirty hands. Personal hygiene closes all four doors: clean hands, clean food, clean water, and cuts washed and covered."},
    {k:"h3", t:"The Daily Routine"},
    {k:"table", head:["Care","How it is done","The door it closes"],
     rows:[
      ["Bathe with soap and water","Every morning; dry well, especially between the toes","The skin"],
      ["Brush the teeth","In the morning and after the last meal, with paste or a clean chewing stick","The mouth"],
      ["Wash the hands with soap","Before eating, after the latrine, after blowing the nose, coming in from outside","The mouth, the nose, the eyes"],
      ["Wash the face and the eyes","Every morning with clean water and your own cloth","The eyes"],
      ["Comb or brush the hair","Every day with your own comb; look for nits","The skin"],
      ["Keep the nails short","Cut short and clean under them with a brush","The mouth"],
      ["Wear clean clothes","Changed daily; washed and dried in the sun","The skin"],
      ["Cover a cut","Wash with soap and clean water, then cover it","The skin"],
      ["Wear shoes or slippers","On the road, to the latrine and at the pump","The skin of the feet"]
     ]},
    {k:"h3", t:"Clean Water and the Latrine"},
    {k:"p", t:"Hygiene is not only about the body; it is about the **water** and the **latrine** too. Water for drinking is kept covered, drawn with a clean cup and stored in a clean container. The **latrine** is kept clean and covered, hands are washed with soap after it, and nobody passes stool in the bush where the rain can wash it to the water. A compound that does these things has far less diarrhoea, fewer worms and less cholera."},
    {k:"h3", t:"Weekly and Seasonal Care"},
    {k:"bul", items:[
      "**Weekly** — wash the school uniform and the bed cloth; wash the comb; sweep and wash the sleeping room; cut the nails.",
      "**Monthly** — check the hair for nits; wash or sun the mats and the mattress.",
      "**In the rains** — dry the feet well to stop fungal infection between the toes; clear standing water so mosquitoes do not breed.",
      "**In the dry season** — keep water stored and covered; wash the hands all the same."
    ]},
    {k:"h3", t:"The Slogan"},
    {k:"p", t:"The guide asks the class to repeat its slogan: “**This is my body; I respect it**.” Say it together at the end of every hygiene lesson, three times, and say it again at the end of the year with the second line the guide gives: “**I'll not put drugs into it.**”"}
  ],
  focus:[
    "Why hygiene matters: the four doors germs use",
    "The daily routine, care by care",
    "Clean water and a clean latrine",
    "Weekly and seasonal care",
    "The class hygiene chart for a month",
    "The slogan: “This is my body; I respect it.”"
  ],
  terms:[
    {t:"hygiene", d:"keeping clean in order to stay healthy", x:"Personal hygiene keeps disease away."},
    {t:"germ", d:"a living thing too small to see that can cause disease", x:"Germs enter through the mouth, the nose, the skin and a cut."},
    {t:"disease", d:"an illness of the body", x:"Dirty water can bring disease."},
    {t:"routine", d:"the things done in the same order every day", x:"My morning routine is bath, brush and breakfast."},
    {t:"latrine", d:"the toilet place", x:"Wash your hands with soap after the latrine."},
    {t:"contaminated", d:"water or food that carries germs", x:"Uncovered water can be contaminated."},
    {t:"fungal infection", d:"an itchy rash that grows where the skin stays wet", x:"Dry between the toes to stop fungal infection."},
    {t:"nits", d:"the eggs of a head louse in the hair", x:"A combed head has no nits."},
    {t:"covered", d:"kept under a lid or a cloth", x:"Drinking water is kept covered."},
    {t:"chewing stick", d:"a clean local twig chewed at one end to clean the teeth", x:"A chewing stick cleans the teeth."},
    {t:"slippers", d:"shoes worn to the latrine and at the pump", x:"Wear slippers so the skin of the foot is not cut."},
    {t:"slogan", d:"a short line the class says together", x:"“This is my body; I respect it.”"}
  ],
  facts:[
    {q:"Why does personal hygiene matter?", a:"Because germs reach the body through the mouth, the nose, the skin and a cut, and hygiene closes those doors."},
    {q:"Name the four times the hands must be washed.", a:"Before eating, after the latrine, after blowing the nose, and when coming in from outside."},
    {q:"How often should the teeth be brushed?", a:"Twice a day — in the morning and after the last meal."},
    {q:"Name two things that keep drinking water safe.", a:"Keep it covered, draw it with a clean cup, and store it in a clean container."},
    {q:"Why should a cut be washed and covered?", a:"Because germs enter through broken skin; washing and covering close the door."},
    {q:"Why wear slippers to the latrine?", a:"To keep the skin of the foot from cuts, worms and jiggers."},
    {q:"Name one seasonal care in the rains.", a:"Dry the feet well and clear standing water so that mosquitoes cannot breed."},
    {q:"Say the class slogan.", a:"“This is my body; I respect it.”"}
  ],
  tf:[
    {s:"Germs can enter the body through a cut.", a:"true", why:"Broken skin is one of the four doors, which is why a cut is washed and covered."},
    {s:"Drinking water can be left uncovered.", a:"false", why:"Uncovered water catches dust, flies and hands, and carries disease."},
    {s:"Brushing once a week is enough.", a:"false", why:"The teeth are brushed twice a day, after the last meal as well as in the morning."},
    {s:"Passing stool in the bush near the water is safe.", a:"false", why:"Rain washes it to the water; the latrine is what keeps a compound well."},
    {s:"A towel and a comb are personal and are not shared.", a:"true", why:"Sharing them passes germs, nits and sore eyes."},
    {s:"Washing the hands only when they look dirty is enough.", a:"false", why:"Germs are too small to see; the hands are washed at the four times whether they look dirty or not."}
  ],
  classify:{
    title:"Daily, weekly or seasonal?",
    groups:[
      {name:"Every day", items:["bathe with soap","brush the teeth","wash the hands at the four times","wear clean clothes","comb the hair"]},
      {name:"Every week", items:["wash the uniform","wash the bed cloth","cut the nails","sweep and wash the sleeping room"]},
      {name:"In the rains", items:["dry the feet well","clear standing water","cover the stored water","sleep under a net"]},
      {name:"In the dry season", items:["keep water stored and covered","wash the hands all the same","protect the water container from dust"]}
    ]
  },
  diagram:{
    title:"The four doors and how we close them",
    caption:"Write the care that closes each door.",
    parts:[
      {p:"The mouth", f:"wash the hands, wash the food, cook it through, brush the teeth"},
      {p:"The nose", f:"cover a cough, blow into a tissue and bin it, keep the air clean"},
      {p:"The skin", f:"bathe, wear shoes, wash and cover a cut"},
      {p:"The eyes", f:"wash the face, never rub with dirty hands"},
      {p:"The water", f:"keep it covered, draw it with a clean cup"},
      {p:"The latrine", f:"keep it clean and covered, wash the hands with soap after it"}
    ]
  },
  experiment:{
    title:"The Glitter Germs Demonstration",
    aim:"To show how germs travel from the hands to everything a person touches.",
    materials:["A little glitter or fine powder that shows well","A door handle or a shared pencil","Soap, water and a towel","Paper and pencil for the record"],
    steps:[
      "The teacher puts a small amount of glitter on one child's hands (with the child's agreement).",
      "The child shakes hands with three classmates and opens the door.",
      "The class looks at how far the glitter has travelled in two minutes.",
      "The child then washes with water only and the class looks again.",
      "The child washes properly with soap and water and dries; the class looks a third time.",
      "Record which wash moved the glitter and which did not."
    ],
    expect:"The glitter spreads to three classmates, the door and the desk; water alone leaves most of it; soap and water take it away.",
    why:"Germs travel exactly as the glitter does, and they are stopped the same way — by washing with soap, not by water alone."
  },
  apply:[
    {q:"Your friend washes his hands with water only and says they are clean. What do you tell him?", a:"Water moves the dirt you can see; soap is what lifts the germs. Use soap at the four times."},
    {q:"The water container at home is left open beside the road. What do you do?", a:"Tell a grown-up to cover it and to keep the cup clean; uncovered water carries disease."},
    {q:"You cut your toe on a stone going to the latrine. What do you do?", a:"Wash it with soap and clean water, cover it, and wear slippers from now on."},
    {q:"A child in class has nits. What should happen?", a:"Nobody laughs and nobody moves away; the teacher tells the family quietly and the child keeps their own comb."},
    {q:"Why does the class say the slogan out loud every lesson?", a:"So the line is ready when it is needed, and so that respecting the body becomes the habit of the class."}
  ],
  activities:[
    "Story telling: a child or two share how substances or germs enter the body — if there are no volunteers, the teacher tells a short story (the guide's own activity)",
    "The Glitter Germs demonstration, teacher-led, with the three results recorded",
    "Routine chart: the daily cares, ticked by each child for one month",
    "Care cards: one care per card, sorted under daily, weekly or seasonal",
    "Water and latrine check: the class inspects its own station and reports what is needed",
    "Slogan, three times in a chorus: “This is my body; I respect it.”"
  ],
  materials:[
    "Soap, water, a towel, a toothbrush and paste, a comb, a nail brush",
    "Glitter or fine powder for the demonstration",
    "The class routine chart, one square per child per day",
    "Charts of the daily care of the body",
    "Slippers and a clean cloth for the care demonstration",
    "The guide's internet links where the school has them"
  ],
  aids:[
    "Real soap, water, towel, toothbrush, paste and comb",
    "Glitter or fine powder",
    "The routine chart on the wall",
    "Care cards for the sorting game",
    "Slippers and a clean cloth"
  ],
  home:[
    "Keep the daily routine for one month and tick the chart each day",
    "Check that the drinking water at home is covered and drawn with a clean cup",
    "Wash and sun your bed cloth this week",
    "Teach the slogan to somebody at home: “This is my body; I respect it.”"
  ],
  assessment:[
    "Oral quiz: why hygiene matters, the four doors, the four times for handwashing",
    "Demonstration: the child washes, brushes and combs with the real aid, in the right order",
    "Sorting task: daily, weekly and seasonal care, with a reason for each",
    "The routine chart for the month, read privately with each child",
    "True or false with reasons: six items",
    "Science journal: the Glitter Germs record and one line on what soap did that water did not"
  ]
},

/* ------------------------------ GRADE 3 · PERIOD V ---------------------------- */
{
  grade:3, period:"V", sem:"Two", icon:"🚫", healthPlan:true,
  title:"Bad Substances: How They Enter and How We Avoid Them",
  subtitle:"Health strand · alcohol and drug abuse — how bad substances enter the body, their effects on the body, and the ways of avoiding taking them in (guide pp. 32–33)",
  outcomes:[
    "Explain the basic facts about the effects of bad substances on the body",
    "Practise different ways of avoiding using bad drugs",
    "Explain how bad substances enter the body: through the mouth, the nose and the skin"
  ],
  objectives:[
    "Name the three ways bad substances enter the body: the mouth, the nose and the skin",
    "State the effects of alcohol and drug abuse on the body and the mind",
    "Give four ways of avoiding taking in a bad substance",
    "Answer a peer pressure line with the class's own answer",
    "Say what to do when a substance is found or offered",
    "Repeat the slogan: “I'll not put drugs into it.”"
  ],
  safeguard:"The unit names substances and refusal; it never asks what happens in a child's own house, and no child is asked to name a person who uses them. Where a child reveals that they are being offered or given a substance, or that there is no food or care at home, listen once, do not question twice, write it in the child's own words and take it to the head teacher and the carer the same day.",
  note:"A bad substance enters the body through three doors: the **mouth** (drunk, eaten or chewed), the **nose** (sniffed) and the **skin** (rubbed in, or through a cut). Once it is in, it reaches the blood and the brain. The ways of avoiding it are plain: **do not take it, do not go where it is used, say no, and tell**.",
  study:[
    {k:"h3", t:"The Three Doors"},
    {k:"table", head:["Door","How the substance goes in","Examples in the community"],
     rows:[
      ["The mouth","Drunk, eaten or chewed","Alcohol; kola and other stimulants; tablets that are not medicine for you; a drug mixed into a drink"],
      ["The nose","Sniffed or smoked up into the nose","Snuff; glue and petrol vapour; smoke held in the mouth and nose"],
      ["The skin","Rubbed in, or through a cut or a needle","Some drugs are rubbed on; a used blade or needle breaks the skin and lets what is on it in"]
     ]},
    {k:"h3", t:"What Bad Substances Do to the Body"},
    {k:"bul", items:[
      "**To the brain** — a person cannot think clearly, cannot learn, cannot remember; some become violent, some frightened, some see things that are not there.",
      "**To the lungs and the heart** — smoking and sniffing damage the breathing and make the heart work too hard.",
      "**To the liver and the stomach** — alcohol damages the liver, which is the part that cleans the blood.",
      "**To the growing body** — a child's body and brain are still being built; damage done now lasts a lifetime.",
      "**To the family and the school** — money goes, learning stops, fights begin, and a child may be sent away from school."
    ]},
    {k:"h3", t:"The Ways of Avoiding Them"},
    {k:"num", items:[
      "**Do not take it.** No first time. The body cannot want what it has never had.",
      "**Do not go where it is used.** Leave the ghetto, the smoking place and the bar.",
      "**Say no with a reason, out loud.** “No, thank you. I do not take that.”",
      "**Walk away** to where there are people.",
      "**Tell a trusted adult** the same day, and keep telling until somebody helps.",
      "**Choose your company.** A friend who presses you is not the friend who will help you pass."
    ]},
    {k:"h3", t:"Peer Pressure Lines and the Answers"},
    {k:"p", t:"The guide asks the class to **review the peer pressure lines** and to **add others the children have heard**. Write them on the board, then write the class's own answer beside each. Practise them out loud until they are easy: “Just try once.” — “No. One time is enough.” “It's harmless.” — “It is not harmless.” “Everybody does it.” — “Then everybody can do it; I will not.” “Are you afraid?” — “I am careful, and I am right to be.”"},
    {k:"h3", t:"What to Do When a Substance Is Found or Offered"},
    {k:"p", t:"**Do not touch it, do not taste it, do not smell it.** Tell a grown-up where it is, and let a grown-up move it. If it is offered to you, say no, walk away, and tell the same day. If somebody says a drink or a sweet is “just for you” and you do not know what is in it, do not take it: leave it and go where there are people."},
    {k:"h3", t:"The Slogan"},
    {k:"p", t:"The guide gives the second line of the class slogan: “**I'll not put drugs into it**”, said after “This is my body; I respect it.” Say both together, three times, at the close of every lesson in this unit."}
  ],
  focus:[
    "The three doors: mouth, nose, skin",
    "What alcohol and drugs do to the body and the mind",
    "Six ways of avoiding a bad substance",
    "The peer pressure lines, and the class's own answers",
    "What to do when a substance is found or offered",
    "The slogan: “I'll not put drugs into it.”"
  ],
  terms:[
    {t:"substance", d:"anything taken into the body that is not ordinary food", x:"Alcohol is a substance."},
    {t:"abuse", d:"using something in a way that harms", x:"Drug abuse harms the body."},
    {t:"sniff", d:"to draw a powder or a vapour up into the nose", x:"Sniffing glue damages the brain."},
    {t:"vapour", d:"the gas that comes off a liquid such as petrol or glue", x:"Petrol vapour is sniffed and it is dangerous."},
    {t:"stimulant", d:"a substance that speeds the body up", x:"Some drugs are stimulants and they harm a child."},
    {t:"liver", d:"the part inside the body that cleans the blood", x:"Alcohol damages the liver."},
    {t:"brain", d:"the part that thinks, remembers and controls the body", x:"Drugs damage a growing brain."},
    {t:"company", d:"the people you spend time with", x:"Choose company that helps you learn."},
    {t:"offer", d:"to hold something out for somebody to take", x:"An offer is refused out loud."},
    {t:"refusal", d:"saying no clearly", x:"A refusal is short, true and loud."},
    {t:"ghetto", d:"a place where drugs are used and sold", x:"A child does not go to the ghetto."},
    {t:"slogan", d:"a short line the class says together", x:"“I'll not put drugs into it.”"}
  ],
  facts:[
    {q:"Name the three ways a bad substance enters the body.", a:"Through the mouth, through the nose and through the skin."},
    {q:"Give one example of each.", a:"Mouth — alcohol or a tablet that is not yours; nose — snuff or glue vapour; skin — a drug rubbed in, or a used needle or blade."},
    {q:"Name two effects of bad substances on the brain.", a:"A person cannot think clearly, cannot learn or remember, and may become violent, frightened or confused."},
    {q:"Which part of the body does alcohol damage most?", a:"The liver, which is the part that cleans the blood."},
    {q:"Give three ways of avoiding a bad substance.", a:"Do not take it, do not go where it is used, say no out loud, walk away, tell a trusted adult, choose your company."},
    {q:"What do you do if you find a packet of leaves or a bottle in the yard?", a:"Do not touch, taste or smell it; tell a grown-up where it is and let a grown-up move it."},
    {q:"Answer the line “Just try once”.", a:"No. One time is enough; my body cannot want what it has never had."},
    {q:"Say both lines of the slogan.", a:"“This is my body; I respect it — I'll not put drugs into it.”"}
  ],
  tf:[
    {s:"A bad substance can enter the body through the skin.", a:"true", why:"Some drugs are rubbed in, and a used blade or needle breaks the skin."},
    {s:"Sniffing glue is safe because it is not swallowed.", a:"false", why:"The vapour goes straight to the brain through the nose and damages it."},
    {s:"A child's growing brain is damaged more easily than a grown-up's.", a:"true", why:"A child's body and brain are still being built, so the damage lasts."},
    {s:"It is rude to say no to an offer.", a:"false", why:"Saying no clearly is looking after the only body you have."},
    {s:"A tablet that is in the house is safe for anybody to take.", a:"false", why:"Medicine is given by a health worker to one person, in a measured dose."},
    {s:"Choosing your company is part of avoiding drugs.", a:"true", why:"A friend who presses you is not the friend who will help you pass."}
  ],
  classify:{
    title:"Which door does it use?",
    groups:[
      {name:"Through the mouth", items:["alcohol","a tablet that is not yours","a drug mixed into a drink","kola taken to keep awake all night"]},
      {name:"Through the nose", items:["snuff","glue vapour","petrol vapour","cigarette smoke"]},
      {name:"Through the skin", items:["a used blade","a used needle","a drug rubbed into the skin","an open cut touching blood"]},
      {name:"Ways of avoiding", items:["say no out loud","do not go where it is used","walk away","tell a trusted adult","choose your company"]}
    ]
  },
  diagram:{
    title:"How a bad substance travels",
    caption:"Draw the three arrows into the body and write one way of blocking each.",
    parts:[
      {p:"Mouth", f:"block it: do not take it; do not eat or drink what you do not know"},
      {p:"Nose", f:"block it: leave the place where it is being sniffed or smoked"},
      {p:"Skin", f:"block it: never touch a used blade or needle; cover a cut"},
      {p:"Blood", f:"once it is in the blood it reaches the brain and the body"},
      {p:"Brain", f:"damaged: cannot learn, cannot remember, may become violent"},
      {p:"The way out", f:"there is no quick way out — which is why we do not start"}
    ]
  },
  experiment:{
    title:"The Pressure Lines and the Class Answers",
    aim:"To give the class a set of answers it owns, in its own words.",
    materials:["A board divided into two columns: THE LINE and OUR ANSWER","Chalk","Six slips with the lines the guide names","Space for the lines the children add"],
    steps:[
      "The teacher reads one pressure line and writes it in the first column.",
      "The class suggests answers; the teacher writes the clearest three.",
      "The class votes for the one that is short, true and easy to say.",
      "Children add lines they have heard themselves; the class answers those too.",
      "Every child says one line and one answer to a partner, out loud.",
      "The chart is copied into the science journal."
    ],
    expect:"A chart of at least six lines with answers the class wrote itself, and every child able to say one out loud.",
    why:"Pressure works by surprise and by the child having no words ready; a child who owns the words is not caught without an answer."
  },
  apply:[
    {q:"A friend says “just try, one puff, nobody will know”. What do you say and do?", a:"“No. One time is enough.” Then walk away to where there are people and tell a trusted adult the same day."},
    {q:"You find a small bottle of clear liquid in the classroom. What do you do?", a:"Do not touch it, taste it or smell it; tell the teacher where it is."},
    {q:"An older pupil says he will give you something to keep you awake all night to study. What do you say?", a:"No. Sleep is what the body needs; I will study in the day."},
    {q:"Somebody offers you a drink at a party and you do not know what is in it. What do you do?", a:"Do not take it; say no, keep your own cup with you, and stay where there are people."},
    {q:"A friend keeps going to the place where the older boys smoke. What do you say to him?", a:"Come away with me; that company will not help you pass, and I do not want to lose you to it."}
  ],
  activities:[
    "Story telling: how a substance enters the body — a child's story, or a short one from the teacher (the guide's own activity)",
    "Tell: what drugs do to the human body, from the class's own list",
    "Review the peer pressure lines and add others from the children; write the class's answers",
    "Sorting game: mouth, nose, skin — how each substance gets in",
    "Poster: “The three doors and how I close them”, hung in the classroom",
    "Slogan, three times: “This is my body; I respect it — I'll not put drugs into it.”"
  ],
  materials:[
    "Charts and pictures showing the effects of drugs on the body",
    "The board divided into THE LINE and OUR ANSWER",
    "Paper and crayons for the poster",
    "Level textbook and science charts",
    "Empty, clean, labelled containers for the “do not touch” talk",
    "The guide's internet links where the school has them"
  ],
  aids:[
    "Charts of the effects of substances on the body",
    "The pressure-lines chart",
    "Empty labelled containers",
    "Poster paper and crayons",
    "The slogan written large"
  ],
  home:[
    "Ask a grown-up what the local names for bad substances were when they were small, and bring one to class",
    "Say both lines of the slogan to your family",
    "With a grown-up, check that every medicine and chemical in the house is stored up high",
    "Name one trusted adult you would tell if you were offered something"
  ],
  assessment:[
    "Oral quiz: the three doors, the effects on the body, the ways of avoiding",
    "Sorting task: mouth, nose or skin, with a reason for each",
    "The pressure-lines chart: every child says one line and one answer out loud",
    "Poster: the three doors and how to close them",
    "True or false with reasons: six items",
    "Science journal: the class answers, copied, with the one the child would use first"
  ]
},

/* ----------------------------- GRADE 3 · PERIOD VI ---------------------------- */
{
  grade:3, period:"VI", sem:"Two", icon:"🛡️", healthPlan:true,
  title:"How STIs Get In, How They Do Not, and Refusal Skills",
  subtitle:"Health strand · sexually transmitted infections — what they are, the common ones, how they get into the body and how they do not, how to avoid them, and refusal skills (guide p. 33)",
  outcomes:[
    "Explain how STIs get into the body and how they do not",
    "Identify ways of preventing STIs",
    "Practise refusal skills against sexual advances, and explain the value of waiting"
  ],
  objectives:[
    "Say what an STI is",
    "Name the common STIs the guide lists",
    "Explain how STIs get into the body and how they do not",
    "Name the common symptoms, and say that some STIs show no symptom at all",
    "State three ways of avoiding STIs",
    "Demonstrate a refusal skill, and say why waiting has value"
  ],
  safeguard:"This unit is taught from charts and from invented case studies only. No child is asked about their own body, their own home, or anybody they know who is sick, and no pupil is named, laughed at or pointed at because of an illness in their family. Symptoms are taught so that a child knows when to go to a clinic — never so that a child can label a person. Refusal practice uses invented lines, and a disclosure is listened to once, written in the child's own words and taken to the head teacher and the carer the same day; in Liberia the case goes to the police Women and Children Protection Unit and the Ministry of Gender, Children and Social Protection.",
  note:"An **STI** — a **sexually transmitted infection** — is an infection that passes from one person to another through sexual contact. The guide names **syphilis**, **gonorrhoea**, **HIV**, **hepatitis B** and “**itchy fish**” (trichomoniasis). STIs pass through sexual contact and through blood; they do **not** pass by playing, hugging, sharing a cup, sitting together or a mosquito bite. The way to avoid them is to **wait**.",
  study:[
    {k:"h3", t:"What an STI Is"},
    {k:"p", t:"An **STI** is a **sexually transmitted infection**: an infection that passes from one person to another through sexual contact. The guide lists the common ones: **syphilis**, **gonorrhoea**, **HIV**, **hepatitis B** and “**itchy fish**”, which is trichomoniasis. A person can have an STI and look well; that is one reason why the guide insists on facts rather than guesses."},
    {k:"h3", t:"How STIs Get In — and How They Do Not"},
    {k:"table", head:["They get in this way","They do not get in this way"],
     rows:[
      ["Sexual contact with a person who has the infection","Playing together"],
      ["Through blood — a used blade, a used needle, an unclean instrument","Hugging, or shaking hands"],
      ["From a mother to her baby, before health workers prevent it","Sharing a cup, a plate or a spoon that has been washed"],
      ["Through an open cut that touches infected blood","Sitting together in class"],
      ["","A mosquito bite"],
      ["","Being taught by, or cared for by, a person living with HIV"]
     ]},
    {k:"h3", t:"The Common Symptoms"},
    {k:"p", t:"Different STIs show different signs: a discharge or an unusual sore between the legs, burning when passing urine, a rash, a sore that will not heal, itching, pain in the lower belly, or a fever that will not go. **Some STIs show no symptom at all for a long time**, which is why a person who thinks they may have been exposed goes to the **clinic** and is tested rather than waiting for a sign. Any child with a symptom tells a trusted adult and is taken to the clinic; the clinic treats STIs, and treatment is private."},
    {k:"h3", t:"How to Avoid STIs"},
    {k:"num", items:[
      "**Wait.** Not having sex is the sure way, and the only one a child needs.",
      "**Never touch blood or an open wound**; never share a blade, a needle or a razor.",
      "**Say no and mean it** — refuse an advance early, loudly and in front of people.",
      "**Stay out of risky places** — do not go alone with somebody to a lonely place.",
      "**Tell a trusted adult** if anybody presses you, touches you or frightens you.",
      "**Go to the clinic** if you think you have been exposed; treatment works and it is private."
    ]},
    {k:"h3", t:"Refusal Skills"},
    {k:"p", t:"The guide asks the teacher to **demonstrate refusal skills against sexual advances**. A refusal has four parts: **say the word** (“No.”), **say it loudly and early**, **say it with your body** (step back, arms up, move to where there are people), and **tell** a trusted adult the same day. A child is never required to be polite to somebody who is doing wrong, and a child who was pressed never carries blame."},
    {k:"h3", t:"The Value of Waiting"},
    {k:"p", t:"The guide asks the teacher to **explain the value of waiting and having sex when older**. Waiting keeps a child free of STIs, free of an early pregnancy, and in school. It keeps the life a child planned — the guide's own “what I want to become in ten years” writing — within reach. Waiting is not being small: it is a person deciding what their life is for, before somebody else decides it for them."}
  ],
  focus:[
    "What an STI is, and the common ones the guide names",
    "How STIs get in, and how they do not",
    "The common symptoms — and why a person goes to the clinic",
    "Six ways of avoiding STIs",
    "Refusal skills: the four parts, practised out loud",
    "The value of waiting"
  ],
  terms:[
    {t:"STI", d:"a sexually transmitted infection — one that passes through sexual contact", x:"Syphilis and gonorrhoea are STIs."},
    {t:"infection", d:"germs getting into the body and causing illness", x:"An infection can be treated at the clinic."},
    {t:"syphilis", d:"an STI that begins with a sore and spreads if untreated", x:"Syphilis is treated at the clinic."},
    {t:"gonorrhoea", d:"an STI that causes a discharge and burning", x:"Gonorrhoea is an STI named in the guide."},
    {t:"hepatitis B", d:"an infection of the liver that can pass sexually and through blood", x:"Hepatitis B is prevented and treated at the clinic."},
    {t:"itchy fish", d:"the local name for trichomoniasis, an STI that causes itching", x:"“Itchy fish” is the name the guide gives."},
    {t:"symptom", d:"a sign the body gives that something is wrong", x:"A sore can be a symptom of an STI."},
    {t:"discharge", d:"unusual fluid from the private parts", x:"A discharge is taken to the clinic."},
    {t:"exposed", d:"when a person may have met an infection", x:"A person who has been exposed is tested at the clinic."},
    {t:"advance", d:"when somebody presses another person for sex", x:"An advance is refused early and loudly."},
    {t:"refusal skill", d:"the practised way of saying no", x:"A refusal skill has four parts."},
    {t:"waiting", d:"choosing not to have sex until a person is older", x:"Waiting keeps a child in school and free of STIs."}
  ],
  facts:[
    {q:"What is an STI?", a:"A sexually transmitted infection: one that passes from person to person through sexual contact."},
    {q:"Name four STIs the guide lists.", a:"Syphilis, gonorrhoea, HIV, hepatitis B and “itchy fish” (trichomoniasis)."},
    {q:"Name three ways STIs do not spread.", a:"Not by playing, hugging, sharing a washed cup, sitting together, or a mosquito bite."},
    {q:"Name two ways they do get in.", a:"Through sexual contact with an infected person, and through blood — a used blade, needle or unclean instrument."},
    {q:"Why is waiting for a symptom the wrong plan?", a:"Because some STIs show no symptom for a long time; a person goes to the clinic and is tested."},
    {q:"Name the four parts of a refusal.", a:"Say the word no, say it loudly and early, say it with the body by stepping back and moving to people, and tell a trusted adult the same day."},
    {q:"What should a child do if somebody presses them?", a:"Refuse early and loudly, go where there are people, and tell a trusted adult the same day — and keep telling."},
    {q:"Why does waiting have value?", a:"It keeps a child free of STIs and early pregnancy, keeps them in school, and keeps the life they planned within reach."}
  ],
  tf:[
    {s:"You can catch an STI by playing with a friend.", a:"false", why:"STIs do not pass by playing, hugging, sharing a washed cup or sitting together."},
    {s:"Some STIs show no symptom for a long time.", a:"true", why:"That is why a person who may have been exposed is tested at the clinic rather than waiting for a sign."},
    {s:"STIs can be treated at the clinic.", a:"true", why:"Most are cured with the right medicine; treatment is private."},
    {s:"A used blade cannot pass an infection.", a:"false", why:"Blood on a blade or a needle can carry HIV and hepatitis B."},
    {s:"A child who was pressed into something carries the blame.", a:"false", why:"The blame belongs to the person who pressed them; the child is believed and helped."},
    {s:"Waiting is a way of choosing what your life is for.", a:"true", why:"Waiting keeps a child in school, free of infection, and on the path they planned."}
  ],
  classify:{
    title:"Does it spread the infection?",
    groups:[
      {name:"Yes", items:["sexual contact with an infected person","a used needle or blade","an unclean instrument that cuts","from a mother to a baby, before it is prevented"]},
      {name:"No", items:["playing together","hugging","sharing a washed cup","a mosquito bite","sitting together in class","caring for a person with HIV"]}
    ]
  },
  diagram:{
    title:"The refusal, in four parts",
    caption:"Write the four parts in order and practise each one.",
    parts:[
      {p:"1. The word", f:"“No.”"},
      {p:"2. The voice", f:"loud, early, and not softened into a maybe"},
      {p:"3. The body", f:"step back, arms up, move to where there are people"},
      {p:"4. The telling", f:"tell a trusted adult the same day, and keep telling"},
      {p:"Never", f:"keep it secret, or think it was your fault"},
      {p:"Always", f:"the blame belongs to the person who pressed you"}
    ]
  },
  experiment:{
    title:"The Refusal Practice, in Pairs",
    aim:"To practise the four parts of a refusal until they are ready.",
    materials:["Invented practice lines written on the board (never a real event)","A chart of the four parts","Two chalk circles, one labelled SAFE"],
    steps:[
      "The teacher reads an invented line, such as “Come with me and do not tell anybody.”",
      "The first child says “No.” in a loud voice.",
      "The same child steps back and moves into the SAFE circle.",
      "The child names the trusted adult they would tell.",
      "The partner says what they saw and whether it was clear.",
      "Swap, and repeat with a second line."
    ],
    expect:"Every child completes the four parts in order and can be heard across the room; nobody acts out a real event and nobody is asked about their own life.",
    why:"A refusal is a skill of the body as well as the voice; practising it in class means it is there when it is needed."
  },
  apply:[
    {q:"An older person says “come with me to the garden, do not tell anybody”. What do you do?", a:"Say no loudly, do not go, stay where there are people, and tell a trusted adult the same day."},
    {q:"A friend says you can catch an STI from a mosquito. What do you say?", a:"No. STIs do not pass by a mosquito, by playing, by hugging or by sharing a washed cup."},
    {q:"Somebody tells you that only bad people get STIs. What is the truth?", a:"Anybody can catch an infection; sickness is not a judgement on a person, and nobody is laughed at or named."},
    {q:"You think you may have been exposed to an infection. What do you do?", a:"Tell a trusted adult and go to the clinic to be tested; treatment works and it is private."},
    {q:"A boy says waiting is for children who are afraid. What do you say?", a:"Waiting is for the person who has decided what their life is for; I am not going to lose school for a moment somebody else chose for me."}
  ],
  activities:[
    "Show and tell with pictures: how STIs affect the body (the guide's own activity)",
    "Brainstorm: how do STIs get into the human body? Then: how do they not?",
    "Refusal practice in pairs, four parts, with invented lines only",
    "Explain: the value of waiting and having sex when older (the guide's own activity)",
    "Poster: “How STIs get in — and how they do not”, hung for the health fair",
    "Class case study with invented characters: what would you say, and who would you tell?"
  ],
  materials:[
    "Pictures and charts showing the effects of STIs, chosen for this age",
    "The board for the brainstorm: GETS IN and DOES NOT",
    "The four-parts refusal chart",
    "Invented case-study cards",
    "Poster paper and crayons",
    "The guide's internet links where the school has them"
  ],
  aids:[
    "Charts of the five common STIs",
    "The refusal chart in four parts",
    "Invented case-study cards",
    "Poster paper and crayons",
    "The two circles, one labelled SAFE"
  ],
  home:[
    "With a grown-up, name the ways STIs do not spread — playing, hugging, sharing a washed cup, a mosquito",
    "Tell a grown-up at home who your trusted adults are",
    "Say the refusal line to somebody at home: “No.” — loud and early",
    "Write in your journal one line on what you want to become in ten years"
  ],
  assessment:[
    "Oral quiz: what an STI is; two ways in; three ways not in",
    "Brainstorm chart: GETS IN and DOES NOT, filled by the class",
    "The refusal practice: four parts, in order, loud enough to be heard",
    "Poster: how STIs get in and how they do not, explained to another class",
    "True or false with reasons: six items",
    "Science journal: the “ten years from now” line, and one reason waiting protects it"
  ]
},
/* ==========================================================================
   GRADE 4 — the guide's health content sits in Period V (pp. 46-47, “SKIN
   PROFILE · SOIL PROFILE · MALARIA”) and Period VI (pp. 48-49, “HEALTH AND
   PERSONAL HYGIENE”). Both keep their numbers below. Periods I and II take
   the skin and the personal-hygiene work of those two guide units as the
   year's opening terms, and Periods III and IV carry the physical changes of
   puberty and then the changes of the mind and of the way boys and girls are
   treated, so that Period VI closes the year with the body-safety and
   pregnancy-facts column of pp. 48-49.
   ========================================================================== */

/* ------------------------------ GRADE 4 · PERIOD I ------------------------------ */
{
  grade:4, period:"I", sem:"One", icon:"🖐️", healthPlan:true,
  title:"The Skin: Layers, Functions and Care",
  subtitle:"Health strand · the skin — its layers and what each layer does, how the skin protects the body, and how a child cares for it (guide p. 46, “Skin: layers and functions”)",
  outcomes:[
    "Appreciate the organization of the skin and describe its layers",
    "Explain what the skin does for the body",
    "Care for the skin so that it can go on doing that work"
  ],
  objectives:[
    "Name the layers of the human skin in order",
    "Say what each layer does",
    "Explain how the skin protects the body from germs, water loss, heat and injury",
    "Say how the skin feels and how it cools the body",
    "Describe how a cut heals",
    "Care for the skin daily and treat a small wound correctly"
  ],
  safeguard:"The skin is taught from charts, from the back of a child's own hand and from drawings; no child is asked to show or examine any part of the body that is covered. Wounds are treated with clean water, soap and a clean cloth, and a teacher never treats an open wound without gloves or a barrier — a child with a wound that is deep, dirty or not healing is taken to the clinic. Where a child's skin shows neglect, scabies or a burn that worries you, act quietly: supply what the school can and take the worry to the head teacher, never to the class.",
  note:"The **skin** is the largest organ of the body and the one that meets the world. It has **layers** — the **epidermis** on the outside, the **dermis** under it, and the **fat layer** beneath — and each layer has its own work. The skin **protects**, **feels**, **cools** and **heals**.",
  study:[
    {k:"h3", t:"The Layers of the Skin"},
    {k:"p", t:"A **cross-section** of the skin — a cut through it, looked at from the side — shows three layers. The **epidermis** is the thin outside layer: it is the part you can see, and it is being made new all the time as the old cells rub off. Under it is the **dermis**, the thick living layer that holds the **blood vessels**, the **nerves**, the **sweat glands**, the **oil glands** and the roots of the **hairs**. Under that is the **fat layer**, which keeps the body warm and cushions the bones and muscles."},
    {k:"table", head:["Layer","What it is","What it does"],
     rows:[
      ["Epidermis","The thin outside layer you can see","Blocks germs and water; makes new skin all the time; holds the colour of the skin"],
      ["Dermis","The thick living layer under it","Holds the blood vessels, the nerves, the sweat and oil glands, and the hair roots; feels touch, heat, cold and pain"],
      ["Fat layer","The soft layer at the bottom","Keeps the body warm; cushions the bones and muscles; stores energy"]
     ]},
    {k:"h3", t:"What the Skin Does"},
    {k:"bul", items:[
      "**Protects** — it keeps germs out, keeps water in, and cushions what is under it.",
      "**Feels** — the nerves in it carry touch, heat, cold, pain and pressure to the brain, and that is how the body knows to pull away from a hot pot.",
      "**Cools** — the sweat glands put water on the skin, and as it dries the body cools down.",
      "**Waters the body in** — an unbroken skin keeps the body's water inside, which is why a large burn is dangerous.",
      "**Makes vitamin D** — with a little morning sun on the skin.",
      "**Heals** — a small cut closes from the edges, and a scab forms while the new skin grows underneath."
    ]},
    {k:"h3", t:"How a Cut Heals"},
    {k:"p", t:"When the skin is cut, the blood vessels in the dermis bleed and then close, and the blood dries into a **scab**. Under the scab the epidermis makes new cells until the gap is closed, and the scab falls off by itself. The work takes about a week for a small cut. A scab must not be picked, because picking reopens the door that the body has just closed."},
    {k:"h3", t:"Caring for the Skin"},
    {k:"num", items:[
      "Bathe every day with soap and clean water, and dry well — especially between the toes and in the folds of the skin.",
      "Wash a cut at once with soap and clean water, then cover it with a clean cloth.",
      "Do not pick a scab, do not squeeze a spot, and do not scratch an itch until it bleeds.",
      "Wear shoes on the road, to the latrine and at the pump.",
      "Keep out of the midday sun; wear a hat and a shirt when the sun is strongest.",
      "Use your own towel, your own comb and your own cloth — skin infections pass by sharing."
    ]},
    {k:"h3", t:"When the Skin Tells You Something"},
    {k:"p", t:"A rash that spreads, an itch that keeps a child awake, a sore that will not heal, a burn that blisters, or a wound that is red, hot and throbbing are all signs that the skin needs a **health worker**, not more washing. In this class nobody is teased for a rash, for spots, for scabies or for the colour of their skin; the teacher takes the child aside quietly and the family is told."}
  ],
  focus:[
    "The three layers of the skin and what each does",
    "How the skin protects the body",
    "How the skin feels and cools the body",
    "How a cut heals",
    "Caring for the skin every day",
    "When the skin needs a health worker, not more washing"
  ],
  terms:[
    {t:"skin", d:"the covering of the body; the largest organ", x:"The skin protects the body."},
    {t:"epidermis", d:"the thin outside layer of the skin", x:"The epidermis is the part you can see."},
    {t:"dermis", d:"the thick living layer under the epidermis", x:"The dermis holds the nerves and the sweat glands."},
    {t:"fat layer", d:"the soft layer at the bottom of the skin", x:"The fat layer keeps the body warm."},
    {t:"cross-section", d:"a drawing of something cut through, so the layers can be seen", x:"The cross-section shows three layers."},
    {t:"blood vessel", d:"the tube that carries blood through the body", x:"A cut bleeds because it breaks blood vessels."},
    {t:"nerve", d:"the thread that carries feeling to the brain", x:"Nerves in the skin feel heat and pain."},
    {t:"sweat gland", d:"the small part in the dermis that puts water on the skin to cool it", x:"Sweat cools the body as it dries."},
    {t:"oil gland", d:"the small part that keeps the skin and hair soft", x:"Oil glands make the skin greasy at puberty."},
    {t:"scab", d:"the dried blood that covers a healing cut", x:"A scab is not picked."},
    {t:"organ", d:"a part of the body that does a special work", x:"The skin is an organ."},
    {t:"infection", d:"germs getting in and causing illness", x:"A covered cut keeps out infection."}
  ],
  facts:[
    {q:"Name the three layers of the skin in order.", a:"The epidermis, the dermis, and the fat layer underneath."},
    {q:"What does the epidermis do?", a:"It blocks germs and water, and it makes new skin all the time."},
    {q:"What does the dermis hold?", a:"The blood vessels, the nerves, the sweat and oil glands, and the roots of the hairs."},
    {q:"How does the skin cool the body?", a:"The sweat glands put water on the skin, and as it dries the body cools."},
    {q:"What happens when the skin is cut?", a:"It bleeds, the blood dries into a scab, and new skin grows underneath until the scab falls off."},
    {q:"Why should a scab not be picked?", a:"Picking reopens the door the body has just closed and lets germs in."},
    {q:"Name three ways of caring for the skin.", a:"Bathe daily and dry well; wash and cover a cut; wear shoes; keep out of the midday sun; use your own towel."},
    {q:"When does the skin need a health worker?", a:"For a rash that spreads, an itch that keeps you awake, a sore that will not heal, a blistering burn or a wound that is red, hot and throbbing."}
  ],
  tf:[
    {s:"The skin is the largest organ of the body.", a:"true", why:"It covers the whole body and carries out several important works."},
    {s:"The dermis is the outside layer you can see.", a:"false", why:"The epidermis is the outside layer; the dermis lies under it."},
    {s:"Sweat cools the body as it dries.", a:"true", why:"The water put on the skin by the sweat glands takes heat away as it dries."},
    {s:"A scab should be picked off as soon as it forms.", a:"false", why:"Picking reopens the cut and lets germs in; the scab falls off by itself."},
    {s:"It is safe to walk barefoot to the latrine.", a:"false", why:"The skin of the foot can be cut, and worms and jiggers enter through it."},
    {s:"A rash that spreads should be taken to the clinic.", a:"true", why:"It may be an infection that needs medicine, not more washing."}
  ],
  classify:{
    title:"Which layer does it belong to?",
    groups:[
      {name:"Epidermis", items:["the part you can see","blocks germs","makes new skin","holds the colour"]},
      {name:"Dermis", items:["nerves","sweat glands","oil glands","hair roots","blood vessels"]},
      {name:"Fat layer", items:["keeps the body warm","cushions bones and muscles","stores energy"]},
      {name:"Not a layer at all", items:["a scab","a spot","a blister","a callus"]}
    ]
  },
  diagram:{
    title:"The layers of the skin",
    caption:"Label the three layers and write one line about what each does.",
    parts:[
      {p:"Epidermis", f:"the outside layer; blocks germs and water, and grows new skin"},
      {p:"Dermis", f:"nerves, blood vessels, sweat and oil glands, hair roots"},
      {p:"Fat layer", f:"keeps the body warm and cushions what is under it"},
      {p:"Hair", f:"grows from a root in the dermis"},
      {p:"Sweat gland", f:"puts water on the skin to cool the body"},
      {p:"Nerve", f:"carries touch, heat, cold and pain to the brain"},
      {p:"Blood vessel", f:"carries blood; a cut makes it bleed"}
    ]
  },
  experiment:{
    title:"The Skin Model",
    aim:"To build a model of the three layers and show what each one does.",
    materials:["Cardboard or a paper plate for the fat layer","A sponge or cotton wool for the dermis","A sheet of thin paper or cling film for the epidermis","Scissors, glue and crayons","Water in a cup, and a small stone"],
    steps:[
      "Cut the sponge to the shape of the hand and glue it onto the card; this is the fat layer with the dermis on it.",
      "Cover the sponge with the thin paper; this is the epidermis.",
      "Press a finger in: the sponge springs back, as the dermis and the fat layer cushion the body.",
      "Sprinkle a little water on the paper and watch: it runs off the epidermis — the skin keeps water out.",
      "Tear a small hole in the paper and sprinkle again: the water goes straight into the sponge — a cut lets water and germs in.",
      "Draw the model with the three layers labelled in your science journal."
    ],
    expect:"Water runs off the whole model and soaks straight in where the paper is torn; the sponge springs back when pressed.",
    why:"The model shows the two works of the skin at once: an unbroken epidermis keeps water and germs out, and the layers under it cushion and protect what is beneath."
  },
  apply:[
    {q:"You graze your knee on the playground. What do you do, in order?", a:"Wash it at once with soap and clean water, dry it, cover it with a clean cloth, and do not pick the scab when it forms."},
    {q:"Your friend squeezes the spots on his face every morning. What do you tell him?", a:"Squeezing pushes the infection deeper and can leave a mark; wash the face and leave them."},
    {q:"A child in your class has scabies and the others move away from her. What should happen?", a:"Nobody moves away or laughs; the teacher takes her aside quietly, the family is told, and the whole class is checked and treated together."},
    {q:"Why does the teacher say to keep out of the sun at midday?", a:"Because strong sun burns the skin, damages it for life, and can lead to skin disease later."},
    {q:"Your small brother has a burn from the cooking fire. What do you do?", a:"Put the burn under cool running water at once, keep it clean and covered, and take him to the clinic — a burn that blisters is a clinic matter."}
  ],
  activities:[
    "Chart work: a cross-section of the skin, drawn and labelled in three layers",
    "The Skin Model, in small groups, with the water test on the whole model and on the torn one",
    "Pairs: read the key words, make the list, and read the list to the class (the guide's own activity)",
    "Sorting game: layer cards placed against the right layer on the class drawing",
    "Wound practice: wash, dry and cover a graze on a partner's arm with a clean cloth",
    "Science journal: copy the key words and their meanings, and sketch the cross-section"
  ],
  materials:[
    "A chart of the skin cross-section, drawn by the teacher",
    "Cardboard, sponge or cotton wool, thin paper, scissors and glue for the model",
    "Water in a cup for the test",
    "Clean cloths, soap and clean water for the wound practice",
    "Crayons and paper for the labelled drawings",
    "The guide's internet links where the school has them"
  ],
  aids:[
    "Chart of the skin cross-section",
    "Model materials: card, sponge, thin paper, glue",
    "Clean cloths, soap and water",
    "Layer cards for the sorting game",
    "Crayons and paper"
  ],
  home:[
    "Bathe and dry well every day for a week, especially between the toes; tick your chart",
    "Show your family how to wash, dry and cover a small cut",
    "Check the skin of your feet every evening for a cut or a sore, and tell a grown-up what you find",
    "Draw the three layers of the skin in your journal and label them"
  ],
  assessment:[
    "Oral quiz: name the three layers and what each does",
    "The Skin Model, marked on the layers, the labels and the water test",
    "Sorting task: layer cards placed correctly, with a reason for each",
    "Wound practice: wash, dry, cover — done in the right order",
    "Written work: true or false with reasons, six items",
    "Science journal: the labelled cross-section and the key words with their meanings"
  ]
},

/* ----------------------------- GRADE 4 · PERIOD II ---------------------------- */
{
  grade:4, period:"II", sem:"One", icon:"🧼", healthPlan:true,
  title:"Cleanliness and Personal Hygiene",
  subtitle:"Health strand · health and personal hygiene — the daily cleanliness of the whole body, the care of the private parts and of the teeth, and the hygiene that grows with a growing body (guide p. 48, with the care-of-the-body column)",
  outcomes:[
    "Explain what good health is and the importance of keeping healthy",
    "Practise the daily cleanliness the body needs as it grows",
    "Keep the classroom, the latrine and the compound clean as part of caring for the body"
  ],
  objectives:[
    "Say what good health is and why keeping healthy matters",
    "Name the daily, weekly and monthly care the body needs",
    "Care for the private parts correctly, and say why wiping is done from front to back",
    "Care for the teeth, the hair, the nails and the feet",
    "Explain how a clean compound and a clean latrine keep the body healthy",
    "Keep a personal hygiene routine for a month and record it"
  ],
  safeguard:"Hygiene is taught on charts and with the children's own aids; no child's body, clothes or smell is commented on in front of the class, and no child is asked what soap or water there is at home. The care of the private parts is taught as washing with clean water and plain soap on the outside only, never inside the body, and never by demonstration on a child. Where a child needs soap, a towel, underclothes or shoes, the teacher supplies what the school can, privately; where a child's condition suggests neglect or abuse, write it down and take it to the head teacher the same day.",
  note:"**Good health** is not only the absence of sickness: it is a body that is clean, fed, rested and active, and a mind that is calm. **Personal hygiene** is the daily work that keeps it that way — and as the body grows towards puberty, that work grows too: more sweat, more oil in the skin and the hair, and the care of the private parts.",
  study:[
    {k:"h3", t:"What Good Health Is"},
    {k:"p", t:"**Good health** is a body and a mind working well. It is built from clean water, good food, sleep, exercise, cleanliness and rest — and from being free of the fear of being hurt. Keeping healthy matters because a healthy child learns, grows and plays, and a healthy class attends school every day."},
    {k:"h3", t:"The Daily Care"},
    {k:"table", head:["Care","How and when","Why"],
     rows:[
      ["Bathe with soap and water","Every morning, and after hard play","Washes off sweat, dust and germs; stops body odour and skin infection"],
      ["Wash the private parts","Every day with clean water and plain soap, on the outside only; rinse well","Keeps the parts clean and comfortable without harming them"],
      ["Wipe from front to back","After the toilet, every time","Stops the germs of the stool from reaching the opening that passes urine"],
      ["Brush the teeth","Twice a day — morning and after the last meal","Stops holes, pain and bad breath"],
      ["Wash the hands with soap","Before eating, after the latrine, after blowing the nose, coming in from outside","Closes the door germs use"],
      ["Wash and comb the hair","Daily, with your own comb","Keeps nits and sores away"],
      ["Keep the nails short","Cut weekly and clean under them","Stops dirt and germs hiding and being carried to the mouth"],
      ["Wear clean underclothes","Changed and washed daily","The private parts stay clean and comfortable"],
      ["Wear shoes or slippers","On the road, to the latrine, at the pump","Keeps out cuts, worms and jiggers"]
     ]},
    {k:"h3", t:"The Care of the Private Parts"},
    {k:"p", t:"The private parts are washed every day with **clean water and plain, unperfumed soap, on the outside only** — nothing is put inside the body, and no powder, cream, bleach or “tightening” preparation is ever used on a child. The parts are rinsed well and dried with the child's own towel. After the toilet, wiping is done **from front to back**, so that the germs of the stool are not carried to the opening that passes urine; that single habit prevents a great many infections. A girl who is menstruating changes her pad or cloth at least three times a day, washes, and wraps the used cloth and disposes of it as the school arranges; nobody is laughed at and nobody is sent home for it."},
    {k:"h3", t:"The Care That Grows with the Body"},
    {k:"p", t:"As a body approaches puberty it sweats more, the skin and hair grow oily, and spots can appear. The answer is the same care done more often: a daily bath, a clean shirt, the face washed twice a day, the hair washed and combed, and no squeezing of spots. **Body odour** is normal at this age and is not a person's fault; a clean body, clean clothes and, where a family can, a deodorant are enough, and nobody is teased for it."},
    {k:"h3", t:"A Clean Compound, a Clean Latrine, a Clean Classroom"},
    {k:"p", t:"The body is kept well by the place as well as by the soap. **Clear the standing water** so that mosquitoes cannot breed; **sweep the compound** and **bin the rubbish** so that flies and rats stay away; **keep the latrine clean and covered**; **keep the water covered** and draw it with a clean cup; **sweep and air the classroom** every day. The guide's own project for this grade is exactly this: a class plan for destroying the mosquito breeding places around their homes."}
  ],
  focus:[
    "What good health is, and why it matters",
    "The daily care table: how and why",
    "The care of the private parts, and wiping from front to back",
    "The care that grows with the body: sweat, oil, spots, odour",
    "A clean compound, latrine, water container and classroom",
    "The class hygiene routine for a month"
  ],
  terms:[
    {t:"good health", d:"a body and a mind working well", x:"Good health is more than not being sick."},
    {t:"hygiene", d:"keeping clean in order to stay healthy", x:"Personal hygiene is daily work."},
    {t:"private parts", d:"the parts a vest and pants cover", x:"Private parts are washed with water and plain soap, outside only."},
    {t:"front to back", d:"the direction a person wipes after the toilet", x:"Wipe from front to back, always."},
    {t:"urine", d:"the water the body passes out", x:"Wiping the wrong way can carry germs to where the urine comes out."},
    {t:"menstruation", d:"the monthly bleeding of a woman or a girl", x:"A girl who is menstruating changes her pad three times a day."},
    {t:"pad", d:"the cloth or the bought pad used during menstruation", x:"A pad is changed at least three times a day."},
    {t:"body odour", d:"the smell of sweat on a body that is growing", x:"Body odour is normal and is stopped by washing, not teased."},
    {t:"breeding place", d:"where an insect lays its eggs and the young grow", x:"Standing water is a breeding place for mosquitoes."},
    {t:"deodorant", d:"what some people put under the arm to cover the smell of sweat", x:"Clean clothes matter more than deodorant."},
    {t:"rubbish", d:"what is thrown away", x:"Rubbish is binned so that flies and rats stay away."},
    {t:"routine", d:"the same care done in the same order every day", x:"My routine is bath, brush and breakfast."}
  ],
  facts:[
    {q:"What is good health?", a:"A body and a mind working well, built from clean water, good food, sleep, exercise, cleanliness and rest."},
    {q:"How are the private parts washed?", a:"Every day with clean water and plain soap, on the outside only, rinsed well and dried with your own towel."},
    {q:"Why is wiping done from front to back?", a:"So that the germs of the stool are not carried to the opening that passes urine."},
    {q:"How often should a pad or cloth be changed during menstruation?", a:"At least three times a day, with washing."},
    {q:"Name two cares that grow with the body at this age.", a:"More frequent washing because of sweat and oil, washing the face twice a day for spots, and daily washing of the hair."},
    {q:"Name three things a clean compound needs.", a:"No standing water, swept ground, binned rubbish, a clean covered latrine and covered water."},
    {q:"Why is a girl never sent home from school for menstruating?", a:"It is normal, not an illness; she changes her pad, washes, and goes on with school and play."},
    {q:"Give one reason the classroom should be swept and aired daily.", a:"Dust and a closed room spread coughs and sore eyes; a swept, aired room keeps the class well."}
  ],
  tf:[
    {s:"Good health is only the absence of sickness.", a:"false", why:"Good health is a body and a mind working well — clean, fed, rested and active."},
    {s:"The private parts are washed with clean water and plain soap, on the outside only.", a:"true", why:"Nothing is put inside the body, and no bleach, cream or powder is used on a child."},
    {s:"Wiping from back to front is just as good.", a:"false", why:"Wiping from front to back is what stops the germs of the stool from reaching the urinary opening."},
    {s:"Body odour at this age is the person's fault.", a:"false", why:"Sweat and oil increase as the body grows; washing and clean clothes are the answer, never teasing."},
    {s:"Standing water near the house is harmless.", a:"false", why:"It is where mosquitoes breed, and mosquitoes carry malaria."},
    {s:"A girl who is menstruating should be sent home from school.", a:"false", why:"Menstruation is normal; she changes her pad, washes, and carries on with school."}
  ],
  classify:{
    title:"Which care does it belong to?",
    groups:[
      {name:"The body", items:["bathe daily","wash the private parts outside only","wipe from front to back","brush the teeth twice a day","wash and comb the hair"]},
      {name:"The clothes and the towel", items:["clean underclothes daily","your own towel","your own comb","washed uniform weekly"]},
      {name:"The compound", items:["clear standing water","sweep the ground","bin the rubbish","cover the water"]},
      {name:"The latrine", items:["keep it clean","keep it covered","wash hands with soap after it","wear slippers to it"]}
    ]
  },
  diagram:{
    title:"The daily routine",
    caption:"Write the care for each time of day and say why it is done.",
    parts:[
      {p:"On waking", f:"bathe, wash the private parts, brush the teeth, put on clean underclothes"},
      {p:"Before eating", f:"wash the hands with soap"},
      {p:"After the toilet", f:"wipe from front to back, then wash the hands with soap"},
      {p:"After the last meal", f:"brush the teeth again"},
      {p:"Weekly", f:"cut the nails, wash the uniform, wash the bed cloth"},
      {p:"Every day at school", f:"sweep and air the classroom, keep the water covered"}
    ]
  },
  experiment:{
    title:"The Standing Water Watch",
    aim:"To find the mosquito breeding places around the school and the homes, and to clear them.",
    materials:["Paper, pencil and a clipboard for each group","A map of the school compound drawn by the class","A tub or a spade for clearing","A chart for the count before and after"],
    steps:[
      "In groups of four, walk the compound and mark every place where water stands: a tin, an old tyre, a blocked gutter, a puddle, a broken pot.",
      "Look closely at the standing water for the wrigglers — the young of the mosquito, which hang just under the surface.",
      "Count the places found on the first walk and write the number on the chart.",
      "Clear them: tip the water out, fill the hole, bin the tin, open the gutter.",
      "Walk again after one week and count the places again.",
      "Report both numbers to the class and to the head teacher."
    ],
    expect:"A large number of breeding places on the first walk and far fewer on the second, with some wrigglers found in the water on the first.",
    why:"A female Anopheles mosquito needs only a small amount of still water to lay her eggs; removing the water removes the next generation of the insect that carries malaria."
  },
  apply:[
    {q:"There is a smell in the classroom and one child is being teased for it. What do you do?", a:"Stop the teasing; sweat and body odour are normal at this age, and the answer is washing and clean clothes, not shame."},
    {q:"Your small sister wipes herself from back to front. What do you tell her?", a:"Wipe from front to back, always, so the germs of the stool do not reach the opening that passes urine."},
    {q:"A girl in your class has stained her dress during menstruation. What should the class and the teacher do?", a:"Nobody laughs and nobody points; the female teacher helps her quietly with what she needs and she carries on with school."},
    {q:"Old tins in your yard hold water after every rain. What do you do?", a:"Tip them out, bin them or turn them over, and clear the blocked gutter, so that mosquitoes cannot breed."},
    {q:"Why does the class keep a routine chart for a month?", a:"Because a habit is made by repeating it; the chart shows the child what they now do without being told."}
  ],
  activities:[
    "Question and answer on what good health is and why keeping healthy matters (the guide's own activity)",
    "The daily routine chart, ticked by each child for a month",
    "The Standing Water Watch: find, count, clear, count again, report",
    "Care cards sorted under body, clothes and towel, compound, latrine",
    "Washing demonstration on the board chart — never on a child — of the care of the private parts",
    "Class plan for destroying the mosquito breeding places around their homes (the guide's own portfolio project)"
  ],
  materials:[
    "Soap, clean water, towels, toothbrush and paste, comb, nail brush, slippers",
    "The routine chart on the wall",
    "Clipboards, paper and pencils for the water watch",
    "A map of the compound drawn by the class",
    "Chart paper and crayons for the class plan",
    "The guide's internet links where the school has them"
  ],
  aids:[
    "Real soap, water, towel, toothbrush, comb, nail brush, slippers",
    "The routine chart",
    "The compound map and clipboards",
    "Care cards for sorting",
    "Chart paper and crayons"
  ],
  home:[
    "Keep the daily routine for a month and tick the chart each day",
    "Clear every place where water stands in your own compound, and count them for the class",
    "Wash your own underclothes for one week and dry them in the sun",
    "Check that the drinking water at home is covered and drawn with a clean cup"
  ],
  assessment:[
    "Oral quiz: what good health is; the daily care and why each is done",
    "Sorting task: body, clothes, compound, latrine — with a reason for each",
    "The Standing Water Watch: the two counts, the map and the class report",
    "The routine chart for the month, read privately with each child",
    "True or false with reasons: six items",
    "Science journal: the compound map with the breeding places marked before and after"
  ]
},

/* ---------------------------- GRADE 4 · PERIOD III ---------------------------- */
{
  grade:4, period:"III", sem:"One", icon:"🌱", healthPlan:true,
  title:"Growing and Changing: What Puberty Does to the Body",
  subtitle:"Health strand · body changes during puberty — the physical changes in boys and in girls, and why they are normal (guide p. 48, “Body changes · Changes that occur in boys and girls · Physical changes”)",
  outcomes:[
    "Explain the importance of the changes that occur in the body during puberty",
    "Identify the different types of changes",
    "Understand that the changes come at different times for different people and are nobody's fault"
  ],
  objectives:[
    "Describe the body changes of puberty in boys and in girls",
    "Say why the changes happen and that they are normal",
    "Explain that puberty comes earlier for some and later for others",
    "Name the hygiene that the changes make necessary",
    "Say which changes are nobody's business but the child's own",
    "Answer a question about puberty with a correct, calm fact"
  ],
  safeguard:"Puberty is taught from charts and from the guide's own words, in mixed or same-sex small groups as the school's custom allows, and never by asking a child about their own body, their own changes or their own home. No child is examined, measured, weighed or pointed at, and no child is asked to say which changes they have had. A drawing of a boy and a girl is the guide's own material and is used dressed as well as undressed, for naming parts, never for comparing children. Questions are answered at the level asked and no further; a question a grown-up should answer is taken aside. Send the parent notice the week before and, where the school can, hold the talk with a same-sex teacher or the school health worker. Anything a child discloses that worries you is written in the child's own words and reported to the head teacher and the carer the same day — in Liberia, to the police Women and Children Protection Unit and the Ministry of Gender, Children and Social Protection.",
  note:"**Puberty** is the time when a child's body becomes a grown-up's body. It is started by **hormones** — chemicals the body makes that carry messages. It brings **physical changes**: growth, hair, the voice, the breasts, menstruation, and changes to the skin. It comes early for some, late for others, and both are normal.",
  study:[
    {k:"h3", t:"What Starts the Changes"},
    {k:"p", t:"The body makes chemicals called **hormones**, which travel in the blood and carry messages from one part of the body to another. At puberty the body begins to make more of the hormones that bring about growth and the changes of the body. Nobody decides to start it and nobody can stop it: it is the ordinary way a child's body becomes a grown-up's body."},
    {k:"h3", t:"The Physical Changes"},
    {k:"table", head:["Change","In girls","In boys"],
     rows:[
      ["Growth","A growth spurt — taller, and the hips widen","A growth spurt — taller, and the shoulders widen"],
      ["Hair","Hair grows under the arms and between the legs","Hair grows on the face, under the arms, between the legs and sometimes on the chest"],
      ["Breasts","The breasts grow and may be tender; one may grow a little faster than the other","The chest does not grow in this way"],
      ["Voice","The voice deepens a little","The voice breaks and then deepens; it may squeak for a time"],
      ["Private parts","The genitals grow; menstruation begins","The penis and testicles grow; wet dreams may happen"],
      ["Skin and hair","The skin and hair grow oily; spots may come; sweat smells more","The same — oily skin, spots and a stronger smell of sweat"],
      ["Muscles and strength","Strength grows steadily","Muscles and strength grow quickly; the shoulders widen"],
      ["Body fat","The body lays down more fat on the hips and thighs","The body lays down less fat and more muscle"]
     ]},
    {k:"h3", t:"Early, Late and Normal"},
    {k:"p", t:"Puberty does not come on the same birthday for everybody. Some children begin at nine and some at thirteen, and both are normal. A child who has started is not more grown-up than one who has not, and a child who has not started is not behind. Nobody is teased, nobody is measured in front of the class, and nobody's body is discussed by another pupil."},
    {k:"h3", t:"The Hygiene the Changes Bring"},
    {k:"num", items:[
      "Bathe every day and use a clean towel and clean underclothes — the body sweats more now.",
      "Wash the face twice a day with soap and water; do not squeeze spots.",
      "Wash and comb the hair regularly with your own comb.",
      "Use a deodorant only if the family has one; clean skin and clean clothes matter more.",
      "A girl who has begun menstruating changes her pad or cloth at least three times a day and washes.",
      "A boy who has wet dreams washes in the morning and changes his underclothes; it is normal and it is his own business."
    ]},
    {k:"h3", t:"Whose Business It Is"},
    {k:"p", t:"The changes of a child's body belong to that child. Nobody may comment on them, touch them, tease about them, or ask to see them. Nobody may take a picture of them. A person who does any of those things is doing wrong, and the child says **no**, goes to where there are people, and **tells a trusted adult** the same day."}
  ],
  focus:[
    "What starts the changes: hormones",
    "The physical changes in girls and in boys",
    "Early, late and normal — nobody is behind",
    "The hygiene the changes bring",
    "Whose business the changes are",
    "The class questions, answered at the level asked"
  ],
  terms:[
    {t:"puberty", d:"the time when a child's body becomes a grown-up's body", x:"Puberty brings many changes at once."},
    {t:"hormone", d:"a chemical the body makes that carries a message to another part", x:"Hormones start the changes of puberty."},
    {t:"growth spurt", d:"a time of growing very fast", x:"A growth spurt can make a child shoot up in a year."},
    {t:"menstruation", d:"the monthly bleeding of a girl or a woman; it is normal", x:"Menstruation begins during puberty."},
    {t:"wet dream", d:"when a boy's body releases fluid in the night; it is normal", x:"A wet dream is nobody's business but his own."},
    {t:"tender", d:"sore to touch", x:"Growing breasts can be tender for a time."},
    {t:"oily", d:"producing more oil than before", x:"The skin grows oily at puberty, which is why spots come."},
    {t:"muscle", d:"the part of the body that moves the bones", x:"Muscles grow fast at puberty in boys."},
    {t:"deodorant", d:"what some people put under the arm for the smell of sweat", x:"Clean skin matters more than deodorant."},
    {t:"private", d:"belonging to one person only", x:"The changes of your body are private."},
    {t:"normal", d:"ordinary; the way bodies are made to work", x:"Early and late are both normal."},
    {t:"teasing", d:"laughing at a person to hurt them", x:"Teasing about a body is never allowed in this class."}
  ],
  facts:[
    {q:"What starts the changes of puberty?", a:"Hormones — chemicals the body makes that carry messages from one part to another."},
    {q:"Name three physical changes in girls.", a:"Breasts grow, hair grows under the arms and between the legs, the hips widen, and menstruation begins."},
    {q:"Name three physical changes in boys.", a:"The voice breaks, hair grows on the face and body, the penis and testicles grow, and the shoulders widen."},
    {q:"Is a child who starts at thirteen behind?", a:"No. Puberty comes earlier for some and later for others, and both are normal."},
    {q:"Name two new hygiene habits the changes make necessary.", a:"Bathing daily with clean underclothes, washing the face twice a day, and washing the hair regularly."},
    {q:"How often is a pad or cloth changed during menstruation?", a:"At least three times a day, with washing."},
    {q:"Whose business are the changes of your body?", a:"Your own — together with a trusted adult or a health worker when you need help. Nobody else's."},
    {q:"What do you do if somebody teases you about your body?", a:"Say stop, go to where there are people, and tell a trusted adult; teasing about a body is not allowed."}
  ],
  tf:[
    {s:"Puberty comes on the same birthday for everybody.", a:"false", why:"It comes earlier for some and later for others, and both are normal."},
    {s:"Hormones carry the messages that start the changes.", a:"true", why:"Hormones are the body's chemical messengers."},
    {s:"A boy's voice may squeak for a time while it is breaking.", a:"true", why:"That is ordinary and it settles."},
    {s:"Spots should be squeezed to clear them.", a:"false", why:"Squeezing pushes the infection deeper and can leave a mark."},
    {s:"Somebody may tease a girl about her breasts because they are growing.", a:"false", why:"Nobody comments on, touches or teases about another person's body."},
    {s:"Menstruation is an illness.", a:"false", why:"It is the normal monthly bleeding that shows the body is working as it was made to."}
  ],
  classify:{
    title:"Which change is it?",
    groups:[
      {name:"Both boys and girls", items:["a growth spurt","hair under the arms","oily skin and spots","a stronger smell of sweat","strong feelings"]},
      {name:"Usually girls", items:["breasts growing","menstruation beginning","the hips widening"]},
      {name:"Usually boys", items:["the voice breaking","hair on the face","wet dreams","the shoulders widening"]},
      {name:"Nobody's business", items:["another child's body","who has started and who has not","what another child looks like undressed"]}
    ]
  },
  diagram:{
    title:"The changes of puberty and the hygiene they need",
    caption:"Write the care beside each change.",
    parts:[
      {p:"More sweat", f:"bathe daily; clean underclothes; a clean towel"},
      {p:"Oily skin and spots", f:"wash the face twice a day; never squeeze"},
      {p:"Oily hair", f:"wash and comb regularly with your own comb"},
      {p:"Menstruation", f:"change the pad three times a day and wash"},
      {p:"Wet dreams", f:"wash in the morning and change underclothes"},
      {p:"Growing body", f:"eat well, sleep well, and keep playing"},
      {p:"Strong feelings", f:"talk to a trusted adult; nobody is laughed at"}
    ]
  },
  experiment:{
    title:"The Growth Record (four-week observation study)",
    aim:"To show that bodies grow at different speeds, without comparing one child with another.",
    materials:["A measuring stick and a scale used privately, one child at a time, by a same-sex teacher or the school health worker","A private record card for each child, which only that child and the teacher see","A class chart that shows only the class average, never a named child"],
    steps:[
      "Each child is measured privately at the start of the four weeks, and again at the end.",
      "The child writes their own two numbers on their own card, which is folded and kept by them.",
      "The class works out the average growth of the group for the four weeks and puts only that on the wall.",
      "The class then measures a plant it is growing, and records its growth over the same four weeks, on the wall.",
      "The class compares the plant's growth with the class average, and says what both need in order to grow.",
      "No child's own numbers are read out, and no child is asked how much they grew."
    ],
    expect:"Everybody has grown by the end of the four weeks, some more than others, and the plant has grown measurably where it was watered and fed.",
    why:"Growing is the work of the whole body and it needs food, sleep and care; recording it on the plant rather than on the class shows the point without putting any child's body on display."
  },
  apply:[
    {q:"A boy in your class is the tallest and a smaller boy is teased for being short. What do you say?", a:"Puberty comes earlier for some and later for others; a smaller boy now may be the taller one next year, and nobody is teased for their body."},
    {q:"Your friend's voice squeaked in the middle of reading and the class laughed. What do you do?", a:"Do not laugh; tell them it happens to everybody while the voice is breaking, and let the reading go on."},
    {q:"A girl's dress is stained during menstruation and some boys point at her. What should happen?", a:"The pointing is stopped at once, the female teacher helps her quietly, and the class is told plainly that menstruation is normal and nobody is shamed for it."},
    {q:"Somebody asks to see whether your body has changed yet. What do you say?", a:"No. The changes of my body are mine; nobody sees them, and I will tell a trusted adult that you asked."},
    {q:"Why does the class measure a plant instead of comparing the children?", a:"Because the point is that growth needs food, sleep and care — and no child's body is put on display to make it."}
  ],
  activities:[
    "Drawing of a boy and a girl, dressed and undressed, to identify the parts of the body that undergo changes (the guide's own activity)",
    "Small-group work: one group lists the physical changes, another the changes of the mind, another the social changes",
    "Early-and-late talk: why nobody is behind, and why nobody's body is discussed by another pupil",
    "The Growth Record: measure the plant on the wall for four weeks and keep each child's own card private",
    "Questions answered at the level asked, and taken aside when a grown-up should answer them",
    "Parent notice sent home the week before the unit begins"
  ],
  materials:[
    "Charts of the changes at puberty, drawn for this age",
    "Dressed and undressed drawings of a boy and a girl, as the guide's own material",
    "A plant in a pot, a measuring stick and water",
    "Private record cards, one for each child",
    "The parent notice, prepared a week before",
    "The guide's internet links where the school has them"
  ],
  aids:[
    "Charts of the changes at puberty",
    "Dressed and undressed drawings for naming parts",
    "The plant, the measuring stick and the private record cards",
    "The parent notice",
    "Chart paper and crayons"
  ],
  home:[
    "Read the parent notice with a grown-up of your own sex and bring back any question, written down",
    "Ask a grown-up what they were told about growing up when they were your age",
    "Keep the hygiene the changes need, every day for a month, and tick your chart",
    "Write in your journal one thing about growing up that you are glad somebody told you"
  ],
  assessment:[
    "Oral quiz: what starts the changes; three changes in girls and three in boys",
    "Small-group lists: physical, of the mind, social — presented to the class",
    "True or false with reasons: six items",
    "The Growth Record: the plant's four-week chart on the wall, and each child's own card kept private",
    "The class rule, said by every child: nobody's body is discussed, touched, teased or photographed",
    "Teacher's record: the parent notice went out; the questions were answered; any disclosure written in the child's own words and passed to the head teacher the same day"
  ]
},

/* ----------------------------- GRADE 4 · PERIOD IV ---------------------------- */
{
  grade:4, period:"IV", sem:"Two", icon:"🤝", healthPlan:true,
  title:"Feelings, Friends and Fair Treatment",
  subtitle:"Health strand · the changes of puberty that affect the mind, the social and cultural changes, and the changes in the way boys and girls are treated (guide p. 48, “Changes that affect the mind · Social/cultural changes · Changes in the way boys and girls are treated”)",
  outcomes:[
    "Identify the different types of change that come with growing up",
    "Explain the changes that affect the mind and the social changes",
    "Recognise unfair treatment of boys and girls and stand for respect and equality"
  ],
  objectives:[
    "Name the changes of puberty that affect the mind and the feelings",
    "Name the social and cultural changes that come with growing up",
    "Give examples of the way boys and girls are treated differently, and say which of those are unfair",
    "Say what respect, fairness and equality mean in a classroom",
    "Practise settling a quarrel and asking a trusted adult for help with a feeling",
    "Stand up for a person who is being treated unfairly, without fighting"
  ],
  safeguard:"No child is asked to describe their own feelings, their own home or how their own family treats them; case studies use invented characters only. Where a child discloses anything that worries you — violence at home, being touched, being hungry, being kept from school — listen once, do not question twice, write it in the child's own words and take it to the head teacher and the carer the same day. Nobody is made to act out their own life in front of the class.",
  note:"Growing up changes the **mind** as well as the body: feelings come strongly, and a person begins to care what others think. It also changes a person's **place** in the family and the community — and in many places boys and girls are treated **differently** as soon as their bodies change. Different is not the same as fair: **respect, fairness and equality** are the guide's own themes for this work.",
  study:[
    {k:"h3", t:"The Changes That Affect the Mind"},
    {k:"p", t:"The same hormones that change the body also change the **feelings**. A person may feel happy one hour and low the next; may want to be alone and then want company; may care deeply what others think; may be quick to anger or quick to tears; may want more privacy and more independence. All of it is normal. What helps is naming it: telling a trusted adult, keeping to a routine, sleeping enough, eating, playing and talking rather than keeping it inside."},
    {k:"h3", t:"The Social and Cultural Changes"},
    {k:"p", t:"**Social** changes are the changes in how a person is expected to behave and what others expect of them. As bodies grow, a family may ask more work at home, more care of younger children, more modesty in dress and behaviour, and more responsibility. Some of that is fair and part of growing; some of it — a girl taken out of school to work, a boy sent to the street to sell — is not, and a child who is withdrawn from school is a matter for the head teacher and the family, not for the child to bear alone."},
    {k:"h3", t:"How Boys and Girls Are Treated"},
    {k:"table", head:["The way it is often done","Fair or unfair?","Why"],
     rows:[
      ["A girl is expected to fetch water and cook; a boy is not","Unfair","Both can fetch and cook; both need the skill"],
      ["A boy is told not to cry","Unfair","Feelings are not a sex; a boy who is sad is sad"],
      ["A girl is kept home during menstruation","Unfair","Menstruation is normal; she goes to school"],
      ["A boy is pushed to fight to prove himself","Unfair","Proving oneself is done by work, not by hurting"],
      ["A girl is told science is not for her","Unfair","Anybody can learn science"],
      ["Both help at home, and both are kept in school","Fair","Both grow, both learn, both belong"],
      ["A boy or a girl is laughed at for how their body looks","Unfair and cruel","No body is laughed at in this class"]
     ]},
    {k:"h3", t:"Respect, Fairness and Equality"},
    {k:"p", t:"**Respect** is treating a person as worth something. **Fairness** is giving each person what they need to do well, not the same thing to everybody. **Equality** is the truth that no person is worth more than another because of their sex, their body, their family's money, their tribe, their religion or a disability. The guide asks the class to encourage **gender equity** — a boy and a girl given the same chance to learn, to lead and to be safe."},
    {k:"h3", t:"Quarrels, Friendship and Asking for Help"},
    {k:"p", t:"Strong feelings bring quarrels. The way through one is plain: **stop**, **say what you feel without insulting**, **listen to the other side**, **agree the smallest next step**, and if it cannot be settled, **take it to a trusted adult**. A friend who presses you to do wrong is not a friend; a friend who tells you the truth is. And a feeling that will not go away — sadness that lasts weeks, fear, or thoughts of harming yourself — is taken to a trusted adult, because it can be helped and it is not a shame."}
  ],
  focus:[
    "The changes that affect the mind and the feelings",
    "The social and cultural changes of growing up",
    "How boys and girls are treated differently, and which of those are unfair",
    "Respect, fairness and equality, and gender equity",
    "Settling a quarrel, and being a friend who tells the truth",
    "When a feeling is taken to a trusted adult"
  ],
  terms:[
    {t:"feeling", d:"what a person feels inside — joy, anger, fear, sadness", x:"Feelings come strongly at this age."},
    {t:"mood", d:"the feeling a person has for a time", x:"Moods can change quickly at puberty."},
    {t:"social change", d:"a change in what others expect of you", x:"Being asked to help more at home is a social change."},
    {t:"cultural", d:"to do with the way a community lives and what it expects", x:"Cultural expectations differ from place to place."},
    {t:"respect", d:"treating a person as worth something", x:"Every person deserves respect."},
    {t:"fairness", d:"giving each person what they need to do well", x:"Fairness is not always the same as sameness."},
    {t:"equality", d:"nobody is worth more than another", x:"Equality is the guide's theme for this unit."},
    {t:"gender equity", d:"giving boys and girls the same chance", x:"Gender equity keeps a girl in school."},
    {t:"stereotype", d:"a fixed idea about what a boy or a girl must be like", x:"“Science is not for girls” is a stereotype."},
    {t:"quarrel", d:"an angry disagreement", x:"A quarrel is settled, not won."},
    {t:"privacy", d:"the right to keep some things to yourself", x:"Wanting more privacy is normal at this age."},
    {t:"discrimination", d:"treating a person worse because of who they are", x:"Discrimination is not allowed in this class."}
  ],
  facts:[
    {q:"Name three changes of puberty that affect the mind.", a:"Strong feelings that change quickly, caring what others think, wanting more privacy, and being quick to anger or to tears."},
    {q:"Give one example of a social change at this age.", a:"A family asking more work at home, or more modesty in dress and behaviour."},
    {q:"Give one example of boys and girls being treated unfairly.", a:"A girl kept home during menstruation, a boy told not to cry, or a girl told science is not for her."},
    {q:"What is the difference between fairness and sameness?", a:"Fairness gives each person what they need to do well; sameness gives everybody the same thing."},
    {q:"What is gender equity?", a:"Giving boys and girls the same chance to learn, to lead and to be safe."},
    {q:"How is a quarrel settled?", a:"Stop, say what you feel without insulting, listen, agree the smallest next step, and take it to a trusted adult if it cannot be settled."},
    {q:"When should a feeling be taken to a trusted adult?", a:"When it lasts and will not go away — sadness for weeks, fear, or thoughts of harming yourself. It can be helped."},
    {q:"Name one thing that helps with strong feelings.", a:"Naming it to a trusted adult, keeping to a routine, sleeping enough, eating, playing and talking."}
  ],
  tf:[
    {s:"Strong feelings at this age are a sign something is wrong with you.", a:"false", why:"They are normal and come from the hormones of growing up."},
    {s:"A boy who is sad should be told not to cry.", a:"false", why:"Feelings are not a sex, and nobody is shamed for having them."},
    {s:"A girl should be kept home from school while she is menstruating.", a:"false", why:"Menstruation is normal; she changes her pad, washes and carries on with school."},
    {s:"Gender equity means boys and girls get the same chance to learn.", a:"true", why:"That is the guide's own theme for this work."},
    {s:"A friend who presses you to do wrong is still a good friend.", a:"false", why:"A friend who tells you the truth is the friend who helps you."},
    {s:"Sadness that lasts for weeks should be told to a trusted adult.", a:"true", why:"It can be helped, and telling is not a shame."}
  ],
  classify:{
    title:"Fair or unfair?",
    groups:[
      {name:"Fair", items:["both help at home","both are kept in school","both may lead the class","both may learn science","both may say no to a touch"]},
      {name:"Unfair", items:["only the girl fetches water","the boy is told not to cry","the girl is kept home during menstruation","the boy is pushed to fight","a girl is told science is not for her"]}
    ]
  },
  diagram:{
    title:"Settling a quarrel",
    caption:"Write the five steps in the order you would use them.",
    parts:[
      {p:"Step 1", f:"stop — do not shout and do not hit"},
      {p:"Step 2", f:"say what you feel, without insulting the other person"},
      {p:"Step 3", f:"listen to the other side, all the way through"},
      {p:"Step 4", f:"agree the smallest next step you can both keep"},
      {p:"Step 5", f:"if it cannot be settled, take it to a trusted adult"},
      {p:"Never", f:"hit, insult, or gather a crowd to watch"}
    ]
  },
  experiment:{
    title:"The Same Chance Chart",
    aim:"To test, with the class's own observations, whether boys and girls get the same chance in the school.",
    materials:["A board divided into three columns: BOTH, BOYS ONLY, GIRLS ONLY","A list of school jobs and activities written on cards","Space to add what the class notices","Crayons"],
    steps:[
      "Write every job and activity in the school on a card: carrying the register, sweeping, leading the line, fetching the ball, answering on the board, being class captain, carrying the chair, running the errand.",
      "Sort the cards: who is usually asked to do each one — boys, girls, or both?",
      "Count the cards in each column.",
      "Talk about each card in the BOYS ONLY and GIRLS ONLY columns: is there a reason, or is it only habit?",
      "Choose three to change this term and write them on the class chart.",
      "Look again at the end of the term and count the columns a second time."
    ],
    expect:"Most cards sit in the BOTH column, and the two narrow columns shrink once the class has agreed to change three of them.",
    why:"Equality is not a slogan; it is a count. A class that counts its own habits can change them, and a class that changes them gives every child the chance to lead."
  },
  apply:[
    {q:"Your sister is asked to fetch all the water and your brother is asked to do nothing. What do you say?", a:"Say that both can fetch and both can help; then do half of it myself rather than only arguing."},
    {q:"A boy in class is teased because he cried when he fell. What do you do?", a:"Tell them to stop — feelings are not a sex — and help him up."},
    {q:"A girl is told she cannot be class captain because she is a girl. What do you say?", a:"Anybody can be class captain; she is chosen on how she works, and I will vote for the best person."},
    {q:"Your friend is sad and quiet for two weeks and says nothing to anybody. What do you do?", a:"Stay with him, ask him gently, and go with him to a trusted adult; sadness that lasts is helped, and telling is not a shame."},
    {q:"Two children in the class are quarrelling and a crowd is gathering. What do you do?", a:"Do not add to the crowd; help them to stop, say what they feel, listen and agree a next step — and take it to a trusted adult if it cannot be settled."}
  ],
  activities:[
    "Small-group work: one group lists the changes of the mind, one the social changes, one the differences in treatment",
    "The Same Chance Chart: sort the school jobs, count the columns, choose three to change",
    "Role play: settling a quarrel in five steps, using invented characters only",
    "Role play: standing up for somebody being treated unfairly, without fighting",
    "Whole-class talk: what respect, fairness and equality look like in this classroom",
    "Class charter: three promises the class writes and signs for how boys and girls are treated"
  ],
  materials:[
    "Job and activity cards for the Same Chance Chart",
    "A board divided into BOTH, BOYS ONLY, GIRLS ONLY",
    "Chart paper for the class charter",
    "Charts of the changes at puberty",
    "Crayons and paper",
    "The guide's internet links where the school has them"
  ],
  aids:[
    "Job and activity cards",
    "The three-column board",
    "Chart paper for the class charter",
    "Charts of the changes at puberty",
    "Crayons"
  ],
  home:[
    "With a grown-up, list the jobs boys and girls do at home, and say which are fair and which could change",
    "Tell your family one thing you are good at that people say is “for the other sex”",
    "Say one kind thing to somebody in your house who is having a hard week",
    "Write in your journal: one feeling you have had strongly this term, and what helped"
  ],
  assessment:[
    "Oral quiz: the changes of the mind; the social changes; fair and unfair treatment",
    "The Same Chance Chart: the two counts, and the three changes the class made",
    "Role play: settling a quarrel in five steps, marked on all five",
    "The class charter: three promises, written and signed",
    "True or false with reasons: six items",
    "Science journal: one feeling, and one thing that helped with it"
  ]
},

/* ------------------------------ GRADE 4 · PERIOD V ---------------------------- */
{
  grade:4, period:"V", sem:"Two", icon:"🦟", healthPlan:true,
  title:"The Skin, the Soil and Malaria",
  subtitle:"Health strand · the skin profile compared with the soil profile, how malaria gets to us through the skin, and a personal plan to prevent malaria (guide pp. 46–47)",
  outcomes:[
    "Appreciate the organization of the skin and compare it with that of the soil",
    "Identify the benefits of keeping the environment clean to prevent malaria",
    "Make a personal plan about how to prevent malaria infection"
  ],
  objectives:[
    "Describe the layers of the soil and compare them with the layers of the skin",
    "Name the ways the skin profile and the soil profile are similar, and how they differ",
    "Describe how malaria gets to us through the skin",
    "State how malaria is transmitted and how it can be prevented",
    "Make a personal plan to prevent malaria",
    "Take part in a class plan for destroying the mosquito breeding places around their homes"
  ],
  safeguard:"The soil work is done with a trowel, gloves where the school has them, and clean hands afterwards; no child digs without a grown-up, and no child tastes soil or puts their hands to their mouth during the work. Malaria is taught as a disease anybody can catch, never as anybody's fault: no child is named or blamed for a fever, and a child who is ill is taken to a health worker the same day, not treated by the class. Anything a child says that worries you is written in the child's own words and reported to the head teacher the same day.",
  note:"The **skin** and the **soil** are both made of **layers**, and comparing the two is the guide's own way of teaching a cross-section. **Malaria** reaches a person through the skin: a female **Anopheles** mosquito bites at night and puts the tiny parasite into the blood. Malaria is **prevented** by stopping the bite and by clearing the places where the mosquito breeds.",
  study:[
    {k:"h3", t:"The Soil Profile"},
    {k:"p", t:"A **soil profile** is the soil seen from the side in a dug pit or a jar. At the top is the **topsoil** — dark, crumbly, full of roots, leaves and the small living things that make the soil rich. Under it is the **subsoil** — lighter in colour, with more stones and less life. Under that is the **parent material** — the broken rock the soil is made from — and below that the **bedrock**. The layers are different in colour, in the size of the particles and in how they feel."},
    {k:"h3", t:"The Skin and the Soil: Alike and Different"},
    {k:"table", head:["","The skin","The soil"],
     rows:[
      ["Layers","Epidermis, dermis, fat layer","Topsoil, subsoil, parent material, bedrock"],
      ["The top","The outside layer takes the sun, the wind and the rain","The topsoil takes the sun, the rain and everything that falls on it"],
      ["Living things","Hair, sweat glands, nerves and the germs that live on it","Roots, worms, insects and the small living things that feed the plants"],
      ["Water","Keeps the body's water in and lets sweat out","Holds water for the plants and lets the rest drain away"],
      ["Protection","Protects the body underneath","Protects the seeds, the roots and the water underneath"],
      ["Repair","Makes new skin and heals a cut","Is washed away by erosion and heals slowly, which is why it must be protected"],
      ["Different","It is living, it feels, it heals itself","It is not living, it does not feel, and erosion takes it away"]
     ]},
    {k:"h3", t:"How Malaria Gets to Us Through the Skin"},
    {k:"p", t:"Malaria is carried by the female **Anopheles** mosquito, which bites between dusk and dawn. She pushes her mouth through the **skin** to reach a blood vessel, and while she feeds she puts **saliva** into the blood; the malaria **parasite** travels in that saliva. So the illness reaches a person through the skin, at night, from the bite of one insect. Malaria is **not** caught from the air, from sharing a cup, from sitting beside somebody who is ill, or from bad food."},
    {k:"h3", t:"The Signs and What to Do"},
    {k:"p", t:"The fever of malaria usually begins **seven to fourteen days** after the bite, though it can be longer. It comes as fever and shivering, headache, body aches, vomiting and sweating, and it often comes and goes in waves. A child with a fever is taken to a health worker **the same day** for a test and the right medicine — malaria treated early is cured; malaria left for days can kill. A child is never given somebody else's tablets, and a fever is never “sweated out” at home without a test."},
    {k:"h3", t:"Preventing Malaria"},
    {k:"num", items:[
      "**Sleep under an insecticide-treated net**, every night, tucked in, with no holes.",
      "**Clear the standing water** round the house — tins, old tyres, blocked gutters, puddles, broken pots — so that mosquitoes cannot breed.",
      "**Cut the grass and clear the bush** near the house where the mosquito rests in the day.",
      "**Cover the arms and legs** at dusk and dawn, when the Anopheles bites.",
      "**Fill in or drain** the pools and the puddles that stay after the rain.",
      "**Go to the clinic at once with a fever**, and take the medicine for the whole course.",
      "**Keep the compound clean** — a clean environment is the guide's own preventive measure."
    ]},
    {k:"h3", t:"My Personal Plan"},
    {k:"p", t:"The guide asks each child to **make a personal plan**. A plan is a list with a name and a time on it: I sleep under my net every night; I check my net for holes on Sunday and bring it to be mended; I tip out every tin in the compound on Saturday; I go to the clinic the same day I get a fever. Write it, keep it, and tick it."}
  ],
  focus:[
    "The layers of the soil, and how they compare with the skin",
    "The Venn comparison: alike and different",
    "How malaria reaches us through the skin",
    "The signs of malaria, and going to the clinic the same day",
    "Seven ways of preventing malaria",
    "My personal plan, and the class plan for the compound"
  ],
  terms:[
    {t:"soil profile", d:"the soil seen from the side, showing its layers", x:"The soil profile shows topsoil at the top."},
    {t:"topsoil", d:"the dark top layer, full of roots and life", x:"Topsoil is where the seeds grow."},
    {t:"subsoil", d:"the lighter layer under the topsoil", x:"Subsoil has more stones and less life."},
    {t:"bedrock", d:"the solid rock under the soil", x:"Under the parent material is the bedrock."},
    {t:"erosion", d:"the washing or blowing away of the soil", x:"Erosion takes the topsoil away."},
    {t:"malaria", d:"an illness carried by the bite of a mosquito", x:"Malaria is prevented by a net and by clearing water."},
    {t:"Anopheles mosquito", d:"the mosquito that carries malaria; it bites between dusk and dawn", x:"The Anopheles mosquito bites at night."},
    {t:"parasite", d:"a small living thing that lives in or on another and harms it", x:"The malaria parasite enters the blood with the mosquito's saliva."},
    {t:"saliva", d:"the water in a person's or an insect's mouth", x:"The parasite travels in the mosquito's saliva."},
    {t:"insecticide-treated net", d:"a bed net treated to kill or drive off mosquitoes", x:"Sleep under an insecticide-treated net every night."},
    {t:"fever", d:"a body that is too hot through illness", x:"A fever is taken to the clinic the same day."},
    {t:"prevention", d:"stopping something before it happens", x:"Prevention is better than a cure."}
  ],
  facts:[
    {q:"Name the layers of the soil.", a:"Topsoil, subsoil, parent material and bedrock."},
    {q:"Give two ways the skin and the soil are alike.", a:"Both have layers; both have a top that takes the sun and the rain; both protect what is under them; both hold life."},
    {q:"Give two ways they differ.", a:"The skin is living, feels and heals itself; the soil is not living, does not feel, and is lost to erosion."},
    {q:"How does malaria reach a person?", a:"Through the skin, from the bite of a female Anopheles mosquito, which puts the parasite into the blood with her saliva."},
    {q:"When does the Anopheles mosquito bite?", a:"Between dusk and dawn."},
    {q:"How long after the bite does the fever usually begin?", a:"Usually seven to fourteen days, though it can be longer."},
    {q:"Name three ways of preventing malaria.", a:"Sleep under a treated net, clear standing water, cut the grass and cover the arms and legs at dusk."},
    {q:"What should happen the same day a child gets a fever?", a:"The child is taken to a health worker for a test and the right medicine, and the whole course is finished."}
  ],
  tf:[
    {s:"Malaria is caught by sharing a cup with somebody who has it.", a:"false", why:"Malaria passes through the bite of an Anopheles mosquito, not by sharing a cup or sitting together."},
    {s:"The Anopheles mosquito bites between dusk and dawn.", a:"true", why:"That is why a net matters more than anything else at night."},
    {s:"Malaria can be left for a week to see whether it passes.", a:"false", why:"A fever is taken to a health worker the same day; malaria left for days can kill."},
    {s:"A mosquito needs only a small amount of still water to breed.", a:"true", why:"An old tin or a blocked gutter is enough, which is why clearing them works."},
    {s:"The soil has layers, like the skin.", a:"true", why:"Topsoil, subsoil, parent material and bedrock — the guide compares the two profiles."},
    {s:"Somebody else's malaria tablets can be taken for a fever.", a:"false", why:"Only a health worker gives the medicine, after a test, in the right dose, for the whole course."}
  ],
  classify:{
    title:"Where does it belong?",
    groups:[
      {name:"Ways of preventing malaria", items:["sleep under a treated net","clear the standing water","cover the arms and legs at dusk","cut the grass near the house","go to the clinic with a fever"]},
      {name:"Where mosquitoes breed", items:["an old tin with water","a blocked gutter","an old tyre","a puddle that stays","a broken pot"]},
      {name:"Signs of malaria", items:["fever and shivering","headache","body aches","vomiting","sweating"]},
      {name:"Not malaria", items:["a cough from dust","a cut on the foot","a toothache"]}
    ]
  },
  diagram:{
    title:"The pathway of malaria infection",
    caption:"Draw the six arrows in order and write one line about each.",
    parts:[
      {p:"1. Still water", f:"the mosquito lays her eggs in a tin, a puddle or a gutter"},
      {p:"2. The young grow", f:"the wrigglers hatch and live just under the surface"},
      {p:"3. The mosquito", f:"the grown mosquito rests in the grass by day"},
      {p:"4. The bite", f:"she bites at night and puts saliva into the blood through the skin"},
      {p:"5. The parasite", f:"the parasite multiplies in the blood and the liver"},
      {p:"6. The fever", f:"seven to fourteen days later, the fever begins — go to the clinic"}
    ]
  },
  experiment:{
    title:"The Soil Profile in a jar and the skin poster",
    aim:"To compare the two profiles side by side, as the guide asks.",
    materials:["A clear jar or a cut plastic bottle","Soil dug with a trowel under a grown-up's eye, with gloves where the school has them","Water","A poster of the skin cross-section drawn by the class","A board for the Venn diagram","Crayons"],
    steps:[
      "Dig the soil in layers from a pit, or take it from three depths, keeping each sample separate.",
      "Put the samples into the jar in the order they were taken and press them down gently.",
      "Add water until the jar is nearly full and let it stand until the layers settle.",
      "Look at the side of the jar: the layers differ in colour, in particle size and in how they feel.",
      "Hang the jar beside the skin poster and draw the two profiles in the Venn diagram.",
      "Write the similarities in the middle and the differences at the two sides."
    ],
    expect:"Four clear bands in the jar, darkest at the top, and a Venn diagram with a full middle and two short sides.",
    why:"Seeing the layers of the ground beside the layers of the skin fixes the idea of a cross-section, and the guide uses exactly this comparison to teach it."
  },
  apply:[
    {q:"Your net has two holes in it and the rain has come. What do you do?", a:"Mend it the same day or sleep under another one; a holed net does not stop a mosquito. Tell a grown-up at once."},
    {q:"Your small brother has a fever in the night. What do you do?", a:"Tell a grown-up at once and he is taken to the clinic the same day for a test — nobody waits to see whether it passes."},
    {q:"There is a blocked gutter beside your house. What do you do?", a:"Open it so the water runs away, and keep it clear, so that mosquitoes cannot breed."},
    {q:"Somebody says the rain brings malaria. What is the truth?", a:"Rain leaves standing water where the mosquito breeds; it is the mosquito, not the rain, that carries the parasite."},
    {q:"Write one line of your personal plan.", a:"Any true line, for example: “I will tip out every tin in the compound every Saturday.”"}
  ],
  activities:[
    "Small groups: one makes a soil profile in a jar, the other makes a poster of the skin cross-section (the guide's own activity)",
    "Field trip to an open, non-rocky area where the soil can be dug to about ten feet, with a grown-up (the guide's own activity)",
    "Venn diagram: the similarities and the differences between the two profiles",
    "Audiovisual: a short presentation on malaria with a worksheet after it, where the school has them",
    "Science journal: sketch the soil profile, the skin profile and the pathway of malaria infection",
    "Portfolio project: the class designs and describes a plan for destroying the mosquito breeding places around their homes"
  ],
  materials:[
    "A clear jar or cut plastic bottle, a trowel and gloves where the school has them",
    "Soil samples from three depths",
    "Chart paper, crayons and a board for the Venn diagram",
    "Charts of the skin and of the malaria pathway",
    "A video and worksheet on malaria where the school has them",
    "The guide's internet links where the school has them"
  ],
  aids:[
    "The soil jar and the trowel",
    "The skin poster",
    "The Venn diagram board",
    "Charts of the malaria pathway",
    "The class breeding-place plan"
  ],
  home:[
    "Tip out every place where water stands in your compound and count them",
    "Check your net for holes and tell a grown-up what you find",
    "Write your personal malaria plan with a grown-up and keep it by your bed",
    "Sleep under the net every night for a month and tick your chart"
  ],
  assessment:[
    "Oral quiz: the layers of the soil; two similarities and two differences between skin and soil",
    "The soil jar and the skin poster, with the Venn diagram filled in",
    "The pathway of malaria: six steps, drawn and explained",
    "My personal malaria plan, with a name and a time on each line",
    "True or false with reasons: six items",
    "The class breeding-place plan, presented to the head teacher and to another class"
  ]
},

/* ----------------------------- GRADE 4 · PERIOD VI ---------------------------- */
{
  grade:4, period:"VI", sem:"Two", icon:"🛡️", healthPlan:true,
  title:"Protecting Myself: Body Safety, Pregnancy Facts and Acting Early",
  subtitle:"Health strand · health and personal hygiene — recognising inappropriate touching, acting to protect oneself from sexual abuse, and the facts about conception, pregnancy and preventing teenage pregnancy (guide pp. 48–49)",
  outcomes:[
    "Recognise inappropriate touching regardless of who does it",
    "Act to protect oneself from sexual abuse",
    "Understand the facts relating to the processes of conception, pregnancy and childbirth, and act to prevent teenage pregnancy"
  ],
  objectives:[
    "Tell the difference between a good touch and a bad touch, and name who possible perpetrators are",
    "Explain how to report a bad touch and how to avoid one",
    "Explain the signs and symptoms of pregnancy, and who gets pregnant",
    "Explain the consequences of pregnancy for the teenage mother and her partner",
    "Name the ways of preventing pregnancy, and say what a girl can do to make sure she does not get pregnant",
    "Describe the role of the father during pregnancy"
  ],
  safeguard:"This is the grade at which the guide puts the body-safety and pregnancy work, and every line of it is taught from charts, from invented case studies and from the guide's own words. No child is asked about their own body, their own home or anybody they know who is pregnant, and no pupil is named, shamed or pointed at. A disclosure is listened to once, never questioned twice, written in the child's own words and taken to the head teacher and the carer the same day — in Liberia, to the police Women and Children Protection Unit and the Ministry of Gender, Children and Social Protection, and to a health facility at once if the assault was recent, because seventy-two hours matters for care and for evidence. Teachers do not investigate and never promise secrecy. A pupil who is pregnant is kept in school and helped, never expelled or shamed: the school's own rule and the Ministry's policy both say so.",
  note:"**Sexual abuse** is any sexual touch or act done to a child, by anybody, whether by force, by trick or by pressure. It is **never** the child's fault. A child who is pressed says **no**, **goes** to where there are people, and **tells** until somebody helps. **Pregnancy** begins when a sperm joins an egg; the signs are a missed monthly bleeding, tender breasts, sickness in the morning and tiredness. The sure way to prevent pregnancy is **waiting**.",
  study:[
    {k:"h3", t:"Good Touches and Bad Touches"},
    {k:"table", head:["Good touch","Bad touch"],
     rows:[
      ["A handshake or a high-five you agreed to","Touching a private part"],
      ["A hand on the shoulder from a teacher","A touch that must be kept secret"],
      ["A doctor examining a child with a parent in the room","A touch that hurts, frightens or confuses"],
      ["A hug you want, from somebody you choose","Being made to touch somebody else's private parts"],
      ["A parent washing a small child's back","Taking pictures or videos of a child's private parts"],
      ["A pat on the back for good work","Any touch that comes with a gift, a threat or a promise"]
     ]},
    {k:"h3", t:"Who Perpetrators Are"},
    {k:"p", t:"A **perpetrator** is the person who does the abuse, and the fact a child most needs is this: **most abuse is done by somebody the child knows** — a relative, a neighbour, an older pupil, a person who helps the family, somebody in a position of trust, sometimes another child. It is not usually a stranger in the bush. That is why the rule is about the **touch**, not about who does it: any person at all, of any age, of any sex, in any clothes, may not do it. Abuse is also done by pressure and by tricks, not only by force — a gift, a promise, a threat, or “you owe me”."},
    {k:"h3", t:"Reporting and Avoiding"},
    {k:"num", items:[
      "**Say no**, loudly and early — “No. Stop. Do not touch me.”",
      "**Go** to where there are people; do not argue and do not wait.",
      "**Tell** a trusted adult the same day — and keep telling until somebody helps.",
      "**Avoid** being alone with a person in a room, a bush or an empty classroom.",
      "**Avoid** gifts, rides and phones that come with something expected back.",
      "**Never keep a touching secret**; a grown-up who asks a child to keep one is doing wrong.",
      "**A teacher does not investigate** — the teacher writes the child's own words and takes them to the head teacher."
    ]},
    {k:"h3", t:"Pregnancy: The Facts"},
    {k:"p", t:"**Conception** is the moment a sperm from the man joins an egg from the woman. The joined egg settles in the **womb** and grows there for about **nine months**; that is **pregnancy**. The **signs** are a missed monthly bleeding, tender breasts, sickness in the morning, tiredness and a body that changes shape. **Who gets pregnant?** A girl or a woman who has begun to release eggs — which begins after menstruation starts, not before. The person who makes her pregnant is the male partner; the guide asks plainly who gets pregnant and who impregnates their partner, so that the responsibility is shared and not thrown at the girl alone."},
    {k:"h3", t:"Teenage Pregnancy: The Consequences"},
    {k:"bul", items:[
      "**For the girl** — she leaves school, or struggles to stay; her body is not finished growing, so the birth is more dangerous; she can lose the baby or her own life.",
      "**For the boy** — school and plans are lost too; a child he cannot yet feed is his responsibility in law and in custom.",
      "**For the baby** — born smaller and sicker, to parents who cannot yet earn.",
      "**For both families** — cost, quarrels, shame put on the girl, and often the girl sent away.",
      "**The way out** — the girl stays in school, both families are told, the clinic is visited, and the child is cared for. A pregnant pupil is helped, never expelled."
    ]},
    {k:"h3", t:"Preventing Pregnancy"},
    {k:"p", t:"The sure way is **waiting** — not having sex. That is what a girl can do to make sure she does not get pregnant, and it is what a boy can do: **wait, and keep out of the situations where waiting is hard**. Those situations have names: being alone with a person behind a closed door, going to a lonely place, taking a gift that comes with a price, being pressed by an older person or by a crowd, drinking. Grown-ups have other methods, which a health worker explains to them; a child's answer, and the guide's, is waiting."},
    {k:"h3", t:"The Role of the Father"},
    {k:"p", t:"The guide asks for a **role play showing the role of a prepared and an unprepared father during pregnancy**. A prepared father tells the truth, goes with the girl to the clinic, helps with the cost, tells both families, goes on with school or work, and is present at the birth. An unprepared father denies it, disappears, and leaves the girl and both families to carry everything. The class plays both, and says which one the baby needs."}
  ],
  focus:[
    "Good touches and bad touches, named plainly",
    "Who perpetrators are — most often somebody known",
    "Reporting and avoiding: six steps",
    "Pregnancy: conception, the signs, who gets pregnant",
    "Teenage pregnancy: the consequences for the girl, the boy, the baby and both families",
    "Preventing pregnancy by waiting; the role of the father"
  ],
  terms:[
    {t:"sexual abuse", d:"any sexual touch or act done to a child, by anybody", x:"Sexual abuse is never the child's fault."},
    {t:"perpetrator", d:"the person who does the abuse", x:"A perpetrator is often somebody the child knows."},
    {t:"pressure", d:"pressing a person to do what they do not want", x:"Abuse is done by pressure as well as by force."},
    {t:"conception", d:"when a sperm joins an egg", x:"Conception is the start of a pregnancy."},
    {t:"womb", d:"the part of a woman where the baby grows", x:"The baby grows in the womb for nine months."},
    {t:"sign", d:"what the body shows", x:"A missed monthly bleeding is a sign of pregnancy."},
    {t:"teenage pregnancy", d:"a pregnancy in a girl who is still a child herself", x:"Teenage pregnancy costs the girl her schooling."},
    {t:"responsibility", d:"what a person must answer for", x:"The boy carries responsibility for the child too."},
    {t:"clinic", d:"the place where a health worker sees patients", x:"A pregnant girl is taken to the clinic."},
    {t:"waiting", d:"choosing not to have sex", x:"Waiting is the sure way to prevent pregnancy."},
    {t:"disclosure", d:"when a person tells what happened to them", x:"A disclosure is written in the child's own words."},
    {t:"expelled", d:"sent away from school for good", x:"A pregnant pupil is helped, never expelled."}
  ],
  facts:[
    {q:"What is sexual abuse?", a:"Any sexual touch or act done to a child, by anybody, by force, by trick or by pressure. It is never the child's fault."},
    {q:"Who are possible perpetrators?", a:"Anybody — most often a person the child knows: a relative, a neighbour, an older pupil, or somebody in a position of trust."},
    {q:"Name the six steps of reporting and avoiding.", a:"Say no loudly, go to where there are people, tell a trusted adult, avoid being alone, avoid gifts that come with a price, and never keep a touching secret."},
    {q:"What is conception?", a:"The moment a sperm from the man joins an egg from the woman."},
    {q:"Name three signs of pregnancy.", a:"A missed monthly bleeding, tender breasts, sickness in the morning and tiredness."},
    {q:"How long does a pregnancy last?", a:"About nine months."},
    {q:"Name two consequences of teenage pregnancy for the girl.", a:"She leaves school or struggles to stay, and because her body is not finished growing, the birth is more dangerous for her and the baby."},
    {q:"What should happen to a pregnant pupil?", a:"She is kept in school and helped, taken to the clinic, and both families are told; she is never expelled or shamed."}
  ],
  tf:[
    {s:"Sexual abuse is the child's fault.", a:"false", why:"It is never the child's fault, by force, by trick or by pressure."},
    {s:"Most abuse is done by a stranger.", a:"false", why:"Most is done by somebody the child knows, which is why the rule is about the touch, not the person."},
    {s:"A child should keep a touching secret if the person asks.", a:"false", why:"A touching secret is never kept; that request is the sign of a person doing wrong."},
    {s:"Pregnancy begins at conception.", a:"true", why:"When a sperm joins an egg and the joined egg settles in the womb."},
    {s:"Only the girl carries the consequences of a teenage pregnancy.", a:"false", why:"The boy loses school and plans too, and carries responsibility in law and in custom for the child."},
    {s:"A pregnant pupil should be sent away from school.", a:"false", why:"She is kept in school and helped; the school's own rule and the Ministry's policy both say so."}
  ],
  classify:{
    title:"Touch, situation or consequence?",
    groups:[
      {name:"Good touch", items:["a handshake","a high-five you agreed to","a doctor examining you with a parent there","a hug you want"]},
      {name:"Bad touch or abuse", items:["touching a private part","a touch that must be kept secret","pictures of private parts","being made to touch somebody else"]},
      {name:"Risky situations", items:["being alone in a room with a person","a lonely place","a gift that comes with a price","being pressed by an older person"]},
      {name:"Consequences of teenage pregnancy", items:["lost schooling","a dangerous birth for a growing body","a baby born smaller and sicker","cost and quarrels for both families"]}
    ]
  },
  diagram:{
    title:"The six steps: from the touch to the help",
    caption:"Write the six steps in order and say who does each one.",
    parts:[
      {p:"1", f:"the child says NO, loudly and early"},
      {p:"2", f:"the child goes to where there are people"},
      {p:"3", f:"the child tells a trusted adult the same day"},
      {p:"4", f:"the adult writes the child's own words and tells the head teacher"},
      {p:"5", f:"the head teacher and the carer act the same day"},
      {p:"6", f:"the case goes to the Women and Children Protection Unit and the Ministry of Gender, Children and Social Protection"},
      {p:"If it was recent", f:"the child is taken to a health facility at once — seventy-two hours matters"}
    ]
  },
  experiment:{
    title:"The Prepared and Unprepared Father",
    aim:"To show, by role play with invented characters, what a baby needs from a father.",
    materials:["Two role-play cards, one for each father, with invented characters","A chart divided into WHAT HE DOES and WHAT THE BABY GETS","Space for the class to act and to watch"],
    steps:[
      "Two volunteers take the two cards; neither acts out a real event or a real person.",
      "The first plays the prepared father: he tells the truth, goes to the clinic, helps with the cost, tells both families and stays.",
      "The second plays the unprepared father: he denies it, disappears and leaves everything to the girl.",
      "The class fills in the chart: what each father does, and what the baby gets from it.",
      "The class says which father the baby needs, and why.",
      "Each child writes one line on what a prepared father does."
    ],
    expect:"A chart showing that the prepared father's actions bring the baby a clinic, food, a name and two families, and that the unprepared one leaves the baby with none of them.",
    why:"The guide asks for this role play because responsibility is the part a boy most often forgets; seeing it acted makes the point without naming anybody in the class."
  },
  apply:[
    {q:"A relative who gives your family money touches your private parts and says “do not tell, it will break the family”. What do you do?", a:"Say no, go to where there are people, and tell a trusted adult the same day; a touching secret is never kept, and the person who asks for one is doing wrong."},
    {q:"An older pupil says he will give you a phone if you go with him to the empty classroom. What do you do?", a:"Say no, do not go, and tell a teacher the same day — a gift that comes with a price is not a gift."},
    {q:"A girl in your class is pregnant and the head teacher is being asked to send her away. What should happen?", a:"She stays in school and is helped, she is taken to the clinic, both families are told, and nobody shames her."},
    {q:"A boy says preventing pregnancy is only the girl's work. What do you say?", a:"No. Waiting is both of them; and if there is a baby, the boy carries the responsibility too, in law and in custom."},
    {q:"Name two situations that make waiting hard, and what you do about them.", a:"Being alone with a person in a room, and going to a lonely place — I do not go, I stay where there are people, and I tell."}
  ],
  activities:[
    "Matching exercise: good and bad touches, developed by the class (the guide's own activity)",
    "Teacher demonstration of a good touch and a bad touch on the chart, never on a child",
    "Class discussion with open questions on pregnancy and its signs (the guide's own activity)",
    "Brainstorm: the ways of avoiding getting pregnant, led by the class",
    "Role play: the prepared and the unprepared father during pregnancy (the guide's own activity)",
    "Class charter: three promises the class makes about touching, telling and staying safe"
  ],
  materials:[
    "Charts and posters on body safety, good and bad touches",
    "Dressed and undressed drawings of a boy and a girl, as the guide's own material",
    "Role-play cards with invented characters",
    "Chart paper for the brainstorm and the charter",
    "Pictures showing the changes of pregnancy, chosen for this age",
    "The guide's internet links where the school has them"
  ],
  aids:[
    "Charts of good and bad touches",
    "Dressed and undressed drawings for naming parts",
    "Role-play cards",
    "Chart paper for the brainstorm",
    "The class charter sheet"
  ],
  home:[
    "Tell a grown-up at home the rule: nobody touches my body, and I tell if anybody tries",
    "Name three trusted adults in your own compound, and say which you would tell first",
    "With a grown-up, talk about what a boy's responsibility is if there is a baby",
    "Write in your journal one line on what you would do if somebody asked you to keep a touching secret"
  ],
  assessment:[
    "Oral quiz: good and bad touches; who perpetrators are; the six steps",
    "Matching exercise: good and bad touches, completed and explained",
    "The role play: the prepared and unprepared father, with the chart filled in",
    "Brainstorm chart: the ways of preventing pregnancy",
    "True or false with reasons: six items",
    "Teacher's record: every child can say the six steps and name three trusted adults; any disclosure is written in the child's own words and passed to the head teacher the same day"
  ]
},
/* ==========================================================================
   GRADE 5 — the guide's health content sits in Period III (pp. 54-56, “HEALTH
   LESSONS”) and Period IV (pp. 57-59, “ORGANIZATION OF LIFE”, whose last two
   contents are the reproductive system and personal hygiene and sanitation).
   Both keep their numbers below. The nutrition and immune-system work of
   Period III opens the year as Periods I and II; Period V carries the
   adolescent-development column of pp. 57-59; and Period VI takes the guide's
   own objective “Identify community health services” and closes the year with
   the class health campaign.
   ========================================================================== */

/* ------------------------------ GRADE 5 · PERIOD I ------------------------------ */
{
  grade:5, period:"I", sem:"One", icon:"🍲", healthPlan:true,
  title:"Food and the Three Food Groups",
  subtitle:"Health strand · HIV and nutrition — what a nutrient is, the three food groups (protective, energy and body-building), and how nutrients improve the immune system (guide p. 54)",
  outcomes:[
    "Understand that nutrition helps people, including people living with HIV, to live longer",
    "Name the three food groups and the work each one does",
    "Plan a day's food with at least one kind of food from each group"
  ],
  objectives:[
    "Say what a nutrient is and name the three food groups the guide gives",
    "Match local foods to the group they belong to",
    "Explain what each group does for the body",
    "Explain how nutrients improve the immune system",
    "Plan a day's food with at least one kind from each group, as the guide asks",
    "Say what a person living with HIV needs from food, and why"
  ],
  safeguard:"Food work never asks what a child ate, whether there was food at home, or what anybody in the family eats; the plate a child plans is a plate from the market, not a report on a household. Where a child is thin, tired or plainly hungry, the teacher acts quietly — a word with the head teacher, a meal where the school can give one — and never asks the child to explain in front of the class. Nobody is named, and nobody is shamed for what their family could or could not give.",
  note:"A **nutrient** is the part of food that feeds the body. The guide gives **three food groups**: **energy** foods, **body-building** foods and **protective** foods. A body needs at least one kind of food from each group **every day**, and the nutrients are what keep the **immune system** — the body's defence — working.",
  study:[
    {k:"h3", t:"The Three Food Groups"},
    {k:"table", head:["Food group","What it does","Local foods in it","How much a day"],
     rows:[
      ["Energy foods (carbohydrates and fats)","Give the strength to work, play, think and keep warm","Rice, cassava, yam, plantain, maize, breadfruit, sweet potato; palm oil, groundnut oil, coconut, avocado","The largest part of the plate"],
      ["Body-building foods (proteins)","Build the body, repair it, and make the blood and the defence","Beans, groundnuts, egusi and pumpkin seeds, soya, fish, meat, eggs, milk","A good part at every meal"],
      ["Protective foods (vitamins and minerals)","Keep the eyes, the skin, the blood and the defence working","Mango, orange, papaya, pineapple, guava, pepper, dark green leaves, carrot, banana","At least two kinds every day"]
     ]},
    {k:"h3", t:"What a Nutrient Does Inside"},
    {k:"p", t:"A **nutrient** is not only fuel. **Carbohydrate** and **fat** give the energy the body runs on. **Protein** is cut into small pieces by the stomach and rebuilt into muscle, skin, blood and the very cells that fight infection. **Vitamins** and **minerals** are the small helpers: vitamin A for the eyes and the lining of the nose and throat, vitamin C for the gums and for healing, iron for the blood, zinc for growth. A body missing one of them does not fail all at once; it fails slowly, and it fails first in its defence against disease."},
    {k:"h3", t:"How Nutrients Improve the Immune System"},
    {k:"p", t:"The **immune system** is the body's defence: the white cells in the blood, the lymph nodes, the spleen, the skin, the lining of the mouth and gut, and the fluid that carries them. To make a single new white cell a body needs protein, and to make that cell work it needs vitamin A, vitamin C, zinc and iron. Feed a body badly and it makes fewer cells and weaker ones; feed it well and the defence is ready before the germ arrives. That is why the guide's own line is that **nutrition helps people — including people living with HIV — to live longer**."},
    {k:"h3", t:"Caring for the Nutritional Needs of a Person Living with HIV"},
    {k:"bul", items:[
      "**More of the same food, not different food** — a person living with HIV needs more energy and more protein than a well person, because the body is working harder all the time.",
      "**Food from all three groups at every meal**, with a little extra body-building food.",
      "**Clean water, boiled or treated**, because a body whose defence is weak cannot fight the germs in dirty water.",
      "**Food cooked through and eaten fresh**, never left standing warm.",
      "**Regular meals**, even when the person does not feel like eating — small amounts often.",
      "**The clinic's medicine every day**, taken with food where the health worker says so. Food helps the medicine; it never replaces it."
    ]},
    {k:"h3", t:"The Day's Plate"},
    {k:"p", t:"The guide asks for a whole-class discussion on the **amount of food needed from each group on a daily basis — at least one kind of food from each group**. A day can be built from Liberian food alone: rice with palm butter and fish for the midday meal, beans and gari in the evening, a mango on the way home, greens with the soup, and clean water all day. The cheapest plate in the market, chosen well, can carry all three groups."}
  ],
  focus:[
    "What a nutrient is, and the three food groups",
    "What each group does for the body",
    "How nutrients build and feed the immune system",
    "The nutritional needs of a person living with HIV",
    "The day's plate, built from local food",
    "Clean water and clean food as part of feeding"
  ],
  terms:[
    {t:"nutrient", d:"the part of food that feeds the body", x:"Protein is a nutrient that builds the body."},
    {t:"energy food", d:"carbohydrate and fat — the food that gives strength", x:"Rice is an energy food."},
    {t:"body-building food", d:"protein — the food that builds and repairs", x:"Beans are body-building food."},
    {t:"protective food", d:"vitamins and minerals — the food that keeps the defence working", x:"Mango is a protective food."},
    {t:"immune system", d:"the body's defence against germs", x:"Good food keeps the immune system working."},
    {t:"white cell", d:"the cell in the blood that fights infection", x:"White cells are made from the protein in food."},
    {t:"iron", d:"the mineral that builds the blood", x:"Green leaves give iron for the blood."},
    {t:"zinc", d:"the mineral the body needs for growth and healing", x:"Fish and groundnuts give zinc."},
    {t:"vitamin A", d:"the vitamin for the eyes and for the lining of the nose and throat", x:"Dark green leaves and mango give vitamin A."},
    {t:"malnutrition", d:"a body that is not getting the food it needs", x:"Malnutrition weakens the defence first."},
    {t:"treated water", d:"water boiled or made safe to drink", x:"A weak body needs treated water."},
    {t:"HIV", d:"the virus that weakens the body's defence", x:"Good nutrition helps a person living with HIV live longer."}
  ],
  facts:[
    {q:"Name the three food groups and what each does.", a:"Energy foods give strength; body-building foods build and repair; protective foods keep the eyes, the blood and the defence working."},
    {q:"Name two local foods in each group.", a:"Energy — rice, cassava, palm oil; body-building — beans, fish, groundnuts; protective — mango, greens, pepper."},
    {q:"What does the body need from protein?", a:"To build muscle, skin, blood, and the white cells that fight infection."},
    {q:"How do nutrients improve the immune system?", a:"The body needs protein to make white cells and vitamins and minerals such as A, C, iron and zinc to make them work."},
    {q:"Why does a person living with HIV need more food?", a:"Because the body is working harder all the time, so it needs more energy and more protein than a well person."},
    {q:"What must a person living with HIV do besides eating well?", a:"Take the clinic's medicine every day; food helps the medicine, it never replaces it."},
    {q:"What does the guide say a day's food must contain?", a:"At least one kind of food from each of the three groups."},
    {q:"Why is clean water part of feeding a weak body?", a:"Because a body whose defence is weak cannot fight the germs in dirty water."}
  ],
  tf:[
    {s:"Rice and cassava are body-building foods.", a:"false", why:"They are energy foods; beans, fish, eggs and groundnuts are the body-building foods."},
    {s:"Vitamins and minerals are the protective foods.", a:"true", why:"They keep the eyes, the skin, the blood and the defence working."},
    {s:"A body needs at least one kind of food from each group every day.", a:"true", why:"That is the guide's own daily-amount rule."},
    {s:"Food can replace the clinic's medicine for a person with HIV.", a:"false", why:"Food helps the medicine and keeps the defence working; it never replaces it."},
    {s:"Malnutrition weakens the body's defence first.", a:"true", why:"A body short of food makes fewer and weaker white cells."},
    {s:"A person living with HIV needs less food than a well person.", a:"false", why:"The body is working harder, so it needs more energy and more protein."}
  ],
  classify:{
    title:"Which food group does it belong to?",
    groups:[
      {name:"Energy foods", items:["rice","cassava","yam","plantain","maize","palm oil","coconut","avocado"]},
      {name:"Body-building foods", items:["beans","groundnuts","egusi","fish","meat","eggs","soya","milk"]},
      {name:"Protective foods", items:["mango","orange","papaya","pineapple","guava","pepper","greens","carrot"]},
      {name:"Not a food group", items:["water","medicine","sleep","exercise"]}
    ]
  },
  diagram:{
    title:"The day's plate in three groups",
    caption:"Write one food from each group for each meal of the day.",
    parts:[
      {p:"Breakfast", f:"energy — gari or bread; body-building — groundnuts; protective — an orange"},
      {p:"Midday", f:"energy — rice; body-building — fish or beans; protective — greens in the soup"},
      {p:"Evening", f:"energy — cassava or plantain; body-building — beans; protective — pepper and greens"},
      {p:"Between", f:"protective — a mango or a banana"},
      {p:"All day", f:"clean, treated water"},
      {p:"For a weak body", f:"the same three groups, with a little more body-building food and small meals often"}
    ]
  },
  experiment:{
    title:"The Three-Group Market Basket",
    aim:"To build a day's food for a family, from each group, for the money a family actually has.",
    materials:["A list of local market prices, written by the class from what they know","Paper, pencil and a ruler","Pictures or drawings of local foods","A chart with the three groups as headings"],
    steps:[
      "Write the foods the market sells this week, with the price of a small amount of each.",
      "Sort them under the three group headings.",
      "Choose one food from each group for each meal of the day, keeping to a small budget.",
      "Add up the cost of the day.",
      "Compare baskets between groups and say which are balanced and which are missing a group.",
      "Write the cheapest balanced basket on the wall chart."
    ],
    expect:"Every group finishes with three groups represented at every meal, and the class can name a balanced day that a family with little money could actually buy.",
    why:"The guide's daily-amount rule only matters if a family can afford it; proving that a balanced day is within reach is the point of the exercise."
  },
  apply:[
    {q:"Your family can only afford rice and oil this week. What is the cheapest way to add the other two groups?", a:"Add beans or groundnuts for body-building, and greens or a cheap seasonal fruit for protection; a small amount of each is enough."},
    {q:"A person living with HIV in your compound has lost weight and has stopped eating. What should the family do?", a:"Give small amounts often, keep up all three groups, give clean treated water, and take them to the clinic the same day — weight loss in a person with HIV is a clinic matter."},
    {q:"A classmate is thin and always tired and the others tease him. What do you say?", a:"That a thin, tired body is a sign it needs food and a clinic, never a reason for teasing; and I tell the teacher quietly."},
    {q:"Name one protective food that grows near your house.", a:"Any true answer, for example: “the mango tree by our gate.”"},
    {q:"Why does the class plan food for a whole day rather than for one meal?", a:"Because the body needs at least one food from each group every day, and the plan shows whether the day as a whole is balanced."}
  ],
  activities:[
    "Use pictures to identify the three food groups (the guide's own activity)",
    "Whole-class discussion on the amount of food needed from each group daily — at least one kind from each group",
    "The Three-Group Market Basket, built from this week's market prices",
    "Brief talk after the pictorial code showing the different nutritional states of people living with HIV (the guide's own activity)",
    "Poster: the three groups, drawn with local foods, for the health fair",
    "Choral line: “One from each group, every day.”"
  ],
  materials:[
    "Pictures of local foods, cut from magazines or drawn",
    "A list of market prices, gathered by the class",
    "Chart paper, crayons and a ruler",
    "The pictorial code of nutritional states, drawn by the teacher as the guide's own material",
    "Real local foods brought in for the display where the school can",
    "The guide's internet links where the school has them"
  ],
  aids:[
    "Food pictures for sorting",
    "The market price list",
    "Chart paper and crayons",
    "The pictorial code drawn by the teacher",
    "Poster paper for the health fair"
  ],
  home:[
    "With a grown-up, name one food from each group that your family eats in a day",
    "Help to plan one day's food for the family from what the market sells",
    "Draw the three-group plate in your journal with Liberian food in each part",
    "Check that the drinking water at home is covered, and say why it matters for a weak body"
  ],
  assessment:[
    "Oral quiz: the three groups, what each does, and two local foods in each",
    "Sorting task: foods placed under the three groups, with a reason for each",
    "The Three-Group Market Basket, with the day's cost and the three groups shown",
    "Poster: the three groups for the health fair",
    "True or false with reasons: six items",
    "Science journal: the day's plate, drawn, with one line on what the immune system needs from it"
  ]
},

/* ----------------------------- GRADE 5 · PERIOD II ---------------------------- */
{
  grade:5, period:"II", sem:"One", icon:"🦠", healthPlan:true,
  title:"The Immune System: The Body's Defence",
  subtitle:"Health strand · the body's immune system and how it keeps us healthy, what weakens it, and what keeps it strong (guide p. 54, “What is the body immune system · How nutrients improve our immune system”)",
  outcomes:[
    "Understand the body's immune system and how it keeps us healthy",
    "Explain how the defence is weakened and how it is strengthened",
    "Practise the habits that keep the defence working"
  ],
  objectives:[
    "Say what the immune system is and name the parts of it",
    "Explain how the defence fights a germ that enters the body",
    "Name what weakens the defence — poor food, HIV, lack of sleep, untreated illness",
    "Name what strengthens it — food, sleep, clean water, immunisation, rest and treatment",
    "Explain what immunisation is and why a child is taken for it",
    "Say how a person living with HIV can keep their defence working"
  ],
  safeguard:"The immune system is taught as the body's own defence, never by asking a child about their own illnesses, their own clinic cards or anybody in their family who is sick. No pupil is named or pointed at because of an illness, and nobody is asked who in their house takes medicine. A child who is often ill is helped quietly: the teacher speaks to the head teacher and to the family so that the child is taken to a clinic. Stigma is taught as a health danger, not a joke.",
  note:"The **immune system** is the body's defence against germs. It is made of the **skin**, the lining of the mouth and gut, the **white cells** in the blood, the **lymph nodes**, the **spleen** and the fluid that carries them. A germ that gets past the skin is met, named and destroyed — and the body **remembers** it afterwards. Food, sleep, clean water, **immunisation** and treatment keep that defence working; poor food, untreated illness and **HIV** weaken it.",
  study:[
    {k:"h3", t:"The Parts of the Defence"},
    {k:"table", head:["Part","What it does"],
     rows:[
      ["The skin","The first wall — an unbroken skin keeps germs out altogether"],
      ["The lining of the mouth, nose and gut","The second wall — it traps germs and washes them away"],
      ["The white cells in the blood","Find a germ, surround it and destroy it"],
      ["The lymph nodes","The small glands in the neck, armpit and groin where the white cells gather and multiply"],
      ["The spleen","Filters the blood and holds a store of white cells"],
      ["The memory of the body","After an illness, or after immunisation, the defence recognises the same germ next time and answers faster"]
     ]},
    {k:"h3", t:"How the Defence Fights"},
    {k:"p", t:"When a germ gets past the skin, the white cells come to it, surround it and destroy it. The place can become red, hot, sore and swollen — that **inflammation** is the defence at work, not the disease winning. A **fever** is often the body raising its temperature to make the germ harder to grow. The swollen glands a child feels in the neck during a sore throat are the **lymph nodes** doing their work. After the fight, the body keeps a **memory** of that germ, which is why a person usually catches a childhood illness only once, and why immunisation works."},
    {k:"h3", t:"What Weakens the Defence"},
    {k:"bul", items:[
      "**Poor food** — without protein, vitamins and minerals the body makes fewer and weaker white cells.",
      "**HIV** — the virus attacks the very cells that run the defence, which is why the illness is serious even when the germ is a small one.",
      "**Lack of sleep and rest** — the repair work of the body is done while a person sleeps.",
      "**Untreated illness** — worms, malaria and a tooth abscess keep the defence busy so it cannot answer the next germ.",
      "**Dirty water and dirty hands** — they keep sending in new germs for a tired defence to fight.",
      "**Stress and fear** — a child who is afraid or grieving falls sick more easily, and needs help, not blame."
    ]},
    {k:"h3", t:"What Strengthens It"},
    {k:"num", items:[
      "**Food from the three groups every day**, with clean treated water.",
      "**Sleep** — a child of this age needs about nine to eleven hours.",
      "**Immunisation** — the course at the clinic, finished, with the card kept.",
      "**Clean hands, clean food, a clean latrine** — fewer germs arriving means a defence that can keep up.",
      "**Treating illness early** — worms, malaria, a sore tooth and a wound are all treated, not waited out.",
      "**Exercise and play** — a body that moves works better in every part.",
      "**For a person living with HIV** — the clinic's medicine every day, which lets the defence recover even after it has been weakened."
    ]},
    {k:"h3", t:"Immunisation"},
    {k:"p", t:"**Immunisation** is giving a person a very small, safe part of a germ, or a weakened germ, so that the defence learns it without the person having the illness. The body then keeps the **memory**, and when the real germ comes the defence answers at once. The Liberian child's **immunisation card** records what has been given and when; it is kept safe, taken to every clinic visit and to school, and a child who has missed a dose is taken back — a missed dose is caught up, not started again."}
  ],
  focus:[
    "The parts of the immune system and what each does",
    "How the defence fights a germ, and why a fever and swollen glands happen",
    "What weakens the defence",
    "What strengthens it — food, sleep, immunisation, cleanliness, treatment",
    "Immunisation and the card",
    "How a person living with HIV keeps their defence working"
  ],
  terms:[
    {t:"immune system", d:"the body's defence against germs", x:"The immune system fights infection."},
    {t:"white cell", d:"the cell in the blood that destroys germs", x:"White cells surround and destroy a germ."},
    {t:"lymph node", d:"the small gland where white cells gather", x:"The nodes in the neck swell during a sore throat."},
    {t:"spleen", d:"the part that filters the blood and stores white cells", x:"The spleen holds a store of white cells."},
    {t:"inflammation", d:"redness, heat, swelling and soreness — the defence at work", x:"A red, sore cut is inflammation, not failure."},
    {t:"fever", d:"a raised body temperature that makes germs harder to grow", x:"A fever is one of the body's own defences."},
    {t:"immunisation", d:"giving a safe part of a germ so the defence learns it", x:"Immunisation is recorded on the child's card."},
    {t:"memory", d:"the defence remembering a germ and answering faster next time", x:"After immunisation the body keeps the memory."},
    {t:"abscess", d:"a pocket of pus from an infection", x:"A tooth abscess keeps the defence busy."},
    {t:"HIV", d:"the virus that attacks the cells that run the defence", x:"HIV weakens the immune system."},
    {t:"stigma", d:"shaming a person for an illness", x:"Stigma keeps people from the clinic; it is a health danger."},
    {t:"course", d:"the set number of doses or days of a treatment", x:"Finish the course of immunisation and of medicine."}
  ],
  facts:[
    {q:"What is the immune system?", a:"The body's defence against germs: the skin, the linings, the white cells, the lymph nodes and the spleen."},
    {q:"What are the small glands in the neck that swell during a sore throat?", a:"The lymph nodes, where the white cells gather and multiply."},
    {q:"Why does a cut go red, hot and sore?", a:"That is inflammation — the defence at work, not the disease winning."},
    {q:"Name three things that weaken the defence.", a:"Poor food, HIV, lack of sleep, untreated illness, and dirty water and hands."},
    {q:"Name three things that strengthen it.", a:"Food from the three groups, sleep, immunisation, clean hands and water, early treatment, and exercise."},
    {q:"What is immunisation?", a:"Giving a safe part of a germ so the defence learns it and keeps the memory, without the person having the illness."},
    {q:"What happens if a child misses a dose of immunisation?", a:"The child is taken back and the missed dose is caught up; the course is not started again."},
    {q:"How can a person living with HIV keep their defence working?", a:"By taking the clinic's medicine every day, eating from the three groups, drinking clean water and treating illness early."}
  ],
  tf:[
    {s:"The skin is part of the immune system.", a:"true", why:"It is the first wall that keeps germs out altogether."},
    {s:"A fever is always a sign that the defence is losing.", a:"false", why:"A fever is often the body making it harder for the germ to grow."},
    {s:"Swollen glands in the neck mean the defence is working.", a:"true", why:"The lymph nodes swell as the white cells gather to fight."},
    {s:"HIV attacks the cells that run the defence.", a:"true", why:"That is why even a small germ can be dangerous for a person with HIV."},
    {s:"A child who misses a dose of immunisation must start the course again.", a:"false", why:"The missed dose is caught up; the course is finished, not restarted."},
    {s:"Laughing at a person because they are ill is harmless.", a:"false", why:"Stigma keeps people away from the clinic and makes illness worse; it is a health danger."}
  ],
  classify:{
    title:"Does it strengthen or weaken the defence?",
    groups:[
      {name:"Strengthens", items:["food from the three groups","nine to eleven hours of sleep","immunisation","clean hands and water","treating illness early","play and exercise","the clinic's medicine every day"]},
      {name:"Weakens", items:["poor food","HIV","too little sleep","untreated worms or malaria","dirty water","an untreated wound","fear and grief without help"]}
    ]
  },
  diagram:{
    title:"The defence, step by step",
    caption:"Write what happens at each step when a germ reaches the body.",
    parts:[
      {p:"Step 1", f:"the germ meets the skin — an unbroken skin keeps it out"},
      {p:"Step 2", f:"if it gets in, the lining traps it and washes it away"},
      {p:"Step 3", f:"the white cells come, surround it and destroy it"},
      {p:"Step 4", f:"the place grows red, hot and sore — the defence at work"},
      {p:"Step 5", f:"the lymph nodes swell as more white cells are made"},
      {p:"Step 6", f:"the body keeps the memory, so the next answer is faster"}
    ]
  },
  experiment:{
    title:"The Germ Model — Walls and Defenders",
    aim:"To model the two walls of the defence and the white cells that work behind them.",
    materials:["A box with a lid, standing for the body","Small balls or beans standing for germs","Two teams: the skin and the lining are the box and a paper screen; the white cells are the rest of the class","A chart to count the germs that get in"],
    steps:[
      "Close the box. Shake the balls at it and count how many get in — none.",
      "Open a small gap in the lid, standing for a cut, and shake again; count how many get in now.",
      "Put the paper screen inside, standing for the lining, and shake again; count those that get past both.",
      "The white-cell team takes the balls that got past and removes them, one by one.",
      "Repeat with a bigger gap and count how many the defenders can still manage.",
      "Record the numbers and say what the model shows."
    ],
    expect:"Nothing gets in through the closed box; a few get in through the gap; the lining catches most of those; the defenders clear the rest, unless the gap is too big for them.",
    why:"The model shows why a covered cut matters, why the defence can be overwhelmed, and why fewer germs arriving — clean hands, clean water — leaves the defenders able to cope."
  },
  apply:[
    {q:"Your friend has a cut and picks the scab off every day. What do you say?", a:"Every pick reopens the wall and sends more germs in for the defence to fight; cover it and leave it."},
    {q:"A child in your class has not been taken for the last immunisation. What should happen?", a:"The family is told quietly and the child is taken to the clinic for the missed dose; the dose is caught up, not started again."},
    {q:"Somebody says a person with HIV should not be taught by our teacher. What do you say?", a:"That is stigma, and it is a health danger: HIV is not spread by teaching, playing or sharing a cup, and the person needs care and the clinic's medicine, not shame."},
    {q:"You have been tired and sick three times this term. What should happen?", a:"The teacher tells the family quietly and you are taken to the clinic — repeated illness is checked for worms, malaria and the blood, and treated."},
    {q:"Name two habits that keep the defence working that cost nothing.", a:"Sleeping enough, washing the hands with soap, and playing and moving every day."}
  ],
  activities:[
    "Chart work: the parts of the immune system, drawn and labelled",
    "The Germ Model — walls and defenders, with the counts recorded",
    "Class list: what weakens the defence and what strengthens it, on two halves of the board",
    "Immunisation card talk: what the card records, why it is kept, and how a missed dose is caught up",
    "Sleep and food log for one week, kept privately by each child",
    "Poster: “How my body defends me”, drawn for the health fair"
  ],
  materials:[
    "A chart of the immune system, drawn by the teacher",
    "A box with a lid, small balls or beans, and a paper screen for the model",
    "Chart paper and crayons",
    "A sample immunisation card, or a copy drawn by the teacher",
    "Paper for the private sleep and food log",
    "The guide's internet links where the school has them"
  ],
  aids:[
    "Chart of the immune system",
    "The box, the balls and the paper screen",
    "Chart paper and crayons",
    "A sample immunisation card",
    "The sleep and food log sheets"
  ],
  home:[
    "Find your immunisation card with a grown-up and check whether any dose is owed",
    "Keep a week's sleep log at home and see whether you are getting nine to eleven hours",
    "Name three foods that feed the defence and eat one of them each day this week",
    "Check that the drinking water at home is treated or boiled, and say why"
  ],
  assessment:[
    "Oral quiz: the parts of the defence; how it fights; what weakens and strengthens it",
    "The Germ Model: the counts, and one sentence on what the model shows",
    "Two-column chart: weakens and strengthens, with a reason for each entry",
    "Immunisation: what the card records and how a missed dose is caught up",
    "True or false with reasons: six items",
    "Science journal: the labelled immune system and the week's sleep and food log"
  ]
},

/* ---------------------------- GRADE 5 · PERIOD III ---------------------------- */
{
  grade:5, period:"III", sem:"One", icon:"🩺", healthPlan:true,
  title:"Health Lessons: HIV, Contraception, Abstinence and Healthy Relationships",
  subtitle:"Health strand · the guide's Grade 5 health lessons — HIV and nutrition, conception, contraceptives and where they are found, abstinence, risky situations and refusal skills, and healthy and unhealthy relationships (guide pp. 54–56)",
  outcomes:[
    "Understand that nutrition helps people living with HIV live longer, and explain the facts about conception",
    "Identify different types of contraceptives, how they work, their strengths and their side effects, and where to find them in one's community",
    "Explain the benefits of abstinence, identify risky situations, and practise how to avoid them and how to refuse"
  ],
  objectives:[
    "Outline the facts of conception and say when pregnancy occurs",
    "Research the different types of contraceptives, their strengths, their weaknesses and their side effects",
    "Say where contraceptives can be found in the community",
    "Distinguish the benefits of abstinence",
    "Identify risky situations and practise how to avoid them",
    "Practise effective refusal skills, and tell a healthy relationship from an unhealthy one"
  ],
  safeguard:"This unit teaches the facts the guide sets for Grade 5, and it teaches them from charts, from the guide's own words and from invented case studies only. No child is asked about their own body, their own home, their own relationships or anybody they know; no pupil is named, shamed or pointed at. Contraception is taught as information for later life, explained by a health worker: the message for a pupil of this age is abstinence, and the guide says so. A disclosure is listened to once, never questioned twice, written in the child's own words and taken to the head teacher and the carer the same day — in Liberia, to the police Women and Children Protection Unit and the Ministry of Gender, Children and Social Protection, and to a health facility at once if the assault was recent. Send the parent notice the week before; hold the boys' and girls' discussions separately, as the guide asks.",
  note:"**Conception** is when a sperm from the man joins an egg from the woman; pregnancy begins then. **Contraceptives** are the methods grown-ups use to delay or prevent pregnancy — each has strengths, weaknesses and side effects, and a health worker explains them. For a pupil of this age the guide's answer is **abstinence**: waiting, which prevents pregnancy, prevents STIs, and keeps the life a child has planned within reach.",
  study:[
    {k:"h3", t:"The Facts of Conception"},
    {k:"p", t:"About once a month a woman's body releases an **egg** — that is **ovulation**. If a **sperm** from a man meets that egg, the two join: that is **fertilization**, and the moment the joined egg settles in the **womb** is **conception**. **Pregnancy occurs, then, when a sperm meets an egg** — most often in the days around ovulation, though a girl who has just begun to menstruate can become pregnant at any point in the month because her cycle is not yet regular. A girl who has begun to menstruate can become pregnant. That is the fact, and it is why the guide teaches it before the body has finished changing."},
    {k:"h3", t:"Contraceptives: Kinds, Strengths, Weaknesses and Side Effects"},
    {k:"table", head:["Method","How it works","Strengths","Weaknesses and side effects"],
     rows:[
      ["Male condom","Stops the sperm from reaching the egg","Bought without a prescription; also reduces the risk of STIs and HIV","Must be used correctly every time; can break or slip if used wrongly"],
      ["Female condom","The same, worn inside the body","Under the woman's own control; also reduces STI risk","Must be put in correctly; not available everywhere"],
      ["The pill","Hormones stop the egg being released","Very effective when taken daily at the same time","Must be taken every day; can cause nausea, headaches and changes in bleeding; does not protect against STIs"],
      ["The injection","Hormones stop the egg being released, given at the clinic every two or three months","Nothing to remember daily; very effective","Must return to the clinic on time; can change bleeding and cause weight change; the effect can take months to wear off"],
      ["The implant","A small rod put under the skin of the arm that releases hormones","Lasts for years; nothing to remember","Needs a trained health worker to put in and take out; can change bleeding"],
      ["The IUD (the coil)","A small device placed in the womb by a health worker","Lasts for years; nothing to remember","Needs a trained health worker; can make periods heavier and cramping; does not protect against STIs"],
      ["Emergency contraception","A tablet taken after unprotected sex to reduce the chance of pregnancy","Works after the event when taken in time","The sooner the better — it is not a regular method and it does not protect against STIs"]
     ]},
    {k:"p", t:"Two facts belong beside that table. First: only the **condom** reduces the risk of HIV and other STIs as well as pregnancy. Second: a **contraceptive is a health worker's business** — the right method, the dose and the side effects are explained at the clinic or the hospital, and no method is taken on a friend's advice. In this community they are found at the **clinic**, the **hospital**, the **reproductive health unit**, the **pharmacy** and through a **community health worker**; some are free."},
    {k:"h3", t:"Abstinence and Its Benefits"},
    {k:"p", t:"**Abstinence** is choosing not to have sex. Its benefits are plain: it prevents pregnancy with certainty, it prevents HIV and other STIs, it costs nothing, it needs no clinic and no permission, and it can be stopped being practised only by a choice a person makes for themselves — never by pressure. It keeps a child in school, keeps the “what I want to become in ten years” plan whole, and keeps a person's own body their own. The guide names abstinence first among the ways of preventing pregnancy, and it is the only method this class recommends to a pupil."},
    {k:"h3", t:"Risky Situations"},
    {k:"p", t:"A **risky situation** is one in which a person is pressed towards sex, or towards a bad substance, or towards being alone with somebody who could harm them. They have shapes everybody knows: being alone with a person behind a closed door; a lonely place on the way home; a party where there is drink and no grown-up; a lift or a gift that comes with a price; an older person who gives money and then asks; a crowd that dares somebody. **Avoiding them** is plainer than refusing in them: do not go, go with others, tell somebody where you are going, and leave early and together."},
    {k:"h3", t:"Refusal Skills: Ineffective and Effective"},
    {k:"p", t:"The guide asks the teacher to **demonstrate ineffective refusal skills** — the soft, laughing, half-turned-away no that a person hears as a yes — and then to **explain the steps in effective refusal** and let pairs practise them. An effective refusal has four parts: **say the word no**, **say it early and in a steady voice**, **say it with the body** — face the person, step back, move towards other people — and **mean it consistently**, because “no” said three times with a laugh in between is heard as maybe. Saying no is not rude when somebody is pressing you; and **no means no**, whoever says it."},
    {k:"h3", t:"Friendship, Love and Healthy Relationships"},
    {k:"table", head:["A healthy relationship","An unhealthy one"],
     rows:[
      ["Both can say no and it is accepted","One person decides for both"],
      ["Each keeps their own friends and their own school work","One person cuts the other off from everybody"],
      ["Disagreements are talked out","Disagreements bring threats, hitting or shame"],
      ["Nobody is pressed for sex, money or secrets","Gifts, money or rides come with something expected back"],
      ["Each is glad of the other's success","One puts the other down, in private or in public"],
      ["Both tell a trusted adult when something is wrong","One says “do not tell anybody”"]
     ]},
    {k:"p", t:"**Self-acceptance** is the beginning of all of it: knowing that you are worth respect before anybody says so, which is why the guide asks the class to work on respect for oneself and for others, and on how what we think others think of us can pull our **self-esteem** about. Ways of expressing friendship and love that are healthy are the ordinary ones: helping with school work, sharing food, walking home together in a group, telling the truth, and saying kind things in front of other people."}
  ],
  focus:[
    "The facts of conception, and when pregnancy occurs",
    "The kinds of contraceptives, their strengths, weaknesses and side effects",
    "Where contraceptives are found, and why a health worker explains them",
    "Abstinence and its benefits",
    "Risky situations, avoiding them, and the four parts of an effective refusal",
    "Healthy and unhealthy relationships, and self-acceptance"
  ],
  terms:[
    {t:"conception", d:"when a sperm joins an egg and it settles in the womb", x:"Pregnancy begins at conception."},
    {t:"ovulation", d:"the release of an egg, about once a month", x:"Pregnancy is most likely around ovulation."},
    {t:"contraceptive", d:"a method used to delay or prevent pregnancy", x:"A condom is a contraceptive."},
    {t:"condom", d:"a covering worn during sex that also reduces the risk of STIs", x:"The condom is the only method that also reduces HIV risk."},
    {t:"IUD", d:"a small device placed in the womb by a health worker", x:"The IUD lasts for years."},
    {t:"side effect", d:"an unwanted effect a method or a medicine can have", x:"A changed bleeding pattern is a side effect of the injection."},
    {t:"abstinence", d:"choosing not to have sex", x:"Abstinence prevents pregnancy and STIs with certainty."},
    {t:"risky situation", d:"a place or a set-up in which a person is pressed towards harm", x:"Being alone behind a closed door is a risky situation."},
    {t:"refusal skill", d:"the practised way of saying no so that it is heard", x:"An effective refusal has four parts."},
    {t:"self-esteem", d:"what a person thinks they are worth", x:"Self-esteem is built by what you do, not by what others say."},
    {t:"self-acceptance", d:"accepting yourself before anybody else does", x:"Self-acceptance is the start of a healthy relationship."},
    {t:"healthy relationship", d:"one in which both people are safe, respected and free to say no", x:"In a healthy relationship both keep their own friends."}
  ],
  facts:[
    {q:"What is conception?", a:"The moment a sperm joins an egg and the joined egg settles in the womb."},
    {q:"When does pregnancy occur?", a:"When a sperm meets an egg — most often in the days around ovulation."},
    {q:"Can a girl who has just begun menstruating become pregnant?", a:"Yes. Once menstruation has begun, she can become pregnant, and because her cycle is not yet regular it can happen at any point in the month."},
    {q:"Name four kinds of contraceptive.", a:"The condom, the pill, the injection, the implant and the IUD."},
    {q:"Which method also reduces the risk of HIV and other STIs?", a:"The condom — and only the condom."},
    {q:"Where are contraceptives found in this community?", a:"At the clinic, the hospital, the reproductive health unit, the pharmacy and through a community health worker; some are free."},
    {q:"Why must a method be explained by a health worker?", a:"Because the right method, the dose and the side effects differ from person to person, and no method is taken on a friend's advice."},
    {q:"Name four benefits of abstinence.", a:"It prevents pregnancy with certainty, prevents HIV and STIs, costs nothing, needs no clinic, and keeps a child in school."}
  ],
  tf:[
    {s:"Conception is when a sperm joins an egg.", a:"true", why:"That is the moment a pregnancy begins."},
    {s:"A girl who has just begun menstruating cannot become pregnant.", a:"false", why:"Once menstruation has begun she can, and because her cycle is irregular it can happen at any time in the month."},
    {s:"The condom also reduces the risk of HIV.", a:"true", why:"It is the only contraceptive method that reduces the risk of STIs as well as pregnancy."},
    {s:"A contraceptive can be chosen on a friend's advice.", a:"false", why:"The right method and its side effects are explained by a health worker at the clinic."},
    {s:"A soft, laughing no is an effective refusal.", a:"false", why:"Ineffective refusal is heard as maybe; an effective refusal is said early, steadily and with the body."},
    {s:"No means no, whoever says it.", a:"true", why:"A person who keeps pressing after a no is doing wrong, and the child tells a trusted adult."}
  ],
  classify:{
    title:"Which is it?",
    groups:[
      {name:"Contraceptive methods", items:["condom","the pill","the injection","the implant","the IUD","emergency contraception"]},
      {name:"Where they are found", items:["the clinic","the hospital","the reproductive health unit","the pharmacy","a community health worker"]},
      {name:"Risky situations", items:["alone behind a closed door","a lonely place on the way home","a party with drink and no grown-up","a gift that comes with a price"]},
      {name:"Healthy relationship", items:["both can say no","both keep their own friends","disagreements are talked out","each is glad of the other's success"]}
    ]
  },
  diagram:{
    title:"The four parts of an effective refusal",
    caption:"Write the four parts and practise each one with a partner.",
    parts:[
      {p:"1. The word", f:"“No.” — said early, before the moment has gone"},
      {p:"2. The voice", f:"steady and clear, not a laugh and not a whisper"},
      {p:"3. The body", f:"face the person, step back, move towards other people"},
      {p:"4. Consistency", f:"the same no every time — no said three times with a laugh between is heard as maybe"},
      {p:"Then", f:"tell a trusted adult the same day"},
      {p:"Remember", f:"no means no, whoever says it"}
    ]
  },
  experiment:{
    title:"The Ten-Year Plan and the Risky Situation",
    aim:"To show what a teenage pregnancy would do to a plan, and to practise getting out of the situations that lead there.",
    materials:["Paper and pencil for each child","A board with the guide's own question: “What do you want to become in the next ten years?”","Risky-situation cards with invented characters and places","Two chalk circles, one labelled SAFE"],
    steps:[
      "Every child writes what they want to become in the next ten years and puts the paper away in their journal.",
      "Volunteers read theirs out, and the class asks: how would having a baby as a teenager change this plan?",
      "The teacher reads a risky-situation card with invented characters: a party, a lift, a gift, an empty classroom.",
      "A volunteer names the risk, says the avoidance, and then says the refusal in four parts while moving to the SAFE circle.",
      "Pairs practise one situation each and hear it said back.",
      "Each child writes one line on the plan they mean to protect."
    ],
    expect:"Every child has a written ten-year plan, can say how an early pregnancy would damage it, and can name one avoidance and perform one refusal.",
    why:"The guide's own activity is exactly this: the plan first, then the situations that would cost it. A child who has said the plan out loud has a reason to leave."
  },
  apply:[
    {q:"An older man gives your friend money and a phone and then asks her to come to his room. What do you say to her?", a:"That is not a gift, it is a price. She gives the things back or leaves them, she does not go, and we tell a trusted adult the same day."},
    {q:"A boy says that when a girl says no she means yes. What do you say?", a:"No means no. A person who keeps pressing after a no is doing wrong, and she should tell."},
    {q:"You are at a party where there is drink and no grown-up, and it is getting late. What do you do?", a:"Leave — with others, not alone — and go home. Leaving early is plainer than refusing in the moment."},
    {q:"Your friend's boyfriend tells her not to see her other friends and checks her phone. What do you say?", a:"That is an unhealthy relationship; she keeps her own friends and her own school work, and she tells a trusted adult."},
    {q:"Why does the class say abstinence is the method for a pupil?", a:"Because it prevents pregnancy and STIs with certainty, costs nothing, needs no clinic, and keeps the ten-year plan whole."}
  ],
  activities:[
    "Whole-class discussion: the different types and names of contraceptives, their strengths, weaknesses and side effects",
    "Small-group discussion: when does pregnancy occur?",
    "Think and write: what do you want to become in the next ten years, and how would a baby as a teenager change it? (the guide's own activity)",
    "Role play on preventing pregnancy through refusal and good decision-making (the guide's own activity)",
    "Demonstration of ineffective refusal, then the four steps of effective refusal, then practice in pairs (the guide's own activity)",
    "Boys and girls in separate working groups to discuss the body changes they experience, as the guide asks; drama on self-esteem and on accepting others"
  ],
  materials:[
    "Charts of the menstrual cycle and ovulation (the guide's own material)",
    "Posters and pictures of the contraceptive methods, or a chart drawn by the teacher",
    "Risky-situation cards with invented characters",
    "Paper and pencils for the ten-year plan",
    "The parent notice, sent out the week before",
    "The guide's internet links where the school has them"
  ],
  aids:[
    "Chart of the menstrual cycle and ovulation",
    "Chart of the contraceptive methods",
    "Risky-situation cards",
    "Paper and pencils",
    "The parent notice"
  ],
  home:[
    "Read the parent notice with a grown-up and bring back any question, written down",
    "Write your ten-year plan and keep it in your journal, with one line on what would protect it",
    "With a grown-up, name the places in this community where a person goes for contraceptive advice",
    "Practise the four-part refusal with a brother, sister or grown-up at home"
  ],
  assessment:[
    "Oral quiz: conception, when pregnancy occurs, four contraceptive methods and where they are found",
    "The ten-year plan, with the line on what would damage it and the line on what protects it",
    "The refusal: four parts, in order, performed to a partner",
    "Table work: healthy and unhealthy relationship signs, with a reason for each",
    "True or false with reasons: six items",
    "Teacher's record: the parent notice went out; the boys' and girls' groups were held separately; any disclosure written in the child's own words and passed to the head teacher the same day"
  ]
},

/* ----------------------------- GRADE 5 · PERIOD IV ---------------------------- */
{
  grade:5, period:"IV", sem:"Two", icon:"🧹", healthPlan:true,
  title:"Personal Hygiene, Sanitation and Caring for Our Surroundings",
  subtitle:"Health strand · personal hygiene and sanitation — the care of the mouth, teeth, nose, eyes and hair, the care of the genitals, the care of our surroundings, and practising health-care behaviour to prevent disease (guide p. 58, content 7, with the outcomes of p. 57)",
  outcomes:[
    "Practise health-care behaviour to prevent diseases",
    "Explain how to take good care of the surroundings, especially the classroom and the home",
    "Encourage gender equity in our society"
  ],
  objectives:[
    "State the daily care of the mouth and teeth, the nose, the eyes and the hair",
    "State the correct care of the genitals",
    "Explain how to care for the surroundings — the classroom, the home and the compound",
    "Name four diseases that come from dirty surroundings, and how to prevent them",
    "Explain how a clean water container, a latrine and a refuse pit keep a family well",
    "Take part in a class plan for the school compound, and carry it out"
  ],
  safeguard:"Hygiene is taught on charts and with the children's own aids; no child's body, clothes or smell is ever commented on in front of the class, and no child is asked what soap, water or latrine there is at home. The care of the genitals is taught as washing with clean water and plain soap on the outside only, never inside the body, and never by demonstration on a child. Where a child needs soap, a towel, underclothes, shoes or a clean latrine, the teacher supplies what the school can, privately, and takes the rest to the head teacher. Nobody is shamed for the state of their house or their clothes.",
  note:"**Personal hygiene** is the care of your own body; **sanitation** is the care of the place you live in. Both prevent disease: the first closes the doors in the body, the second removes the germs before they reach a person at all. The guide names the **mouth and teeth, the nose, the eyes, the hair, our surroundings and the genitals**, and it asks the class to run the same care over the classroom and the home.",
  study:[
    {k:"h3", t:"The Care of the Mouth and Teeth"},
    {k:"p", t:"The teeth are brushed **twice a day** — in the morning and after the last meal — with a soft brush and paste, or rubbed with a clean **chewing stick**; the brush is held at the gum line and worked in small circles, front and back, and the tongue is brushed too. **Sugar left on the teeth** is what makes the holes, so the last thing a child eats at night matters as much as the brushing. A tooth that aches, a gum that bleeds, or a sore that will not heal in the mouth is a **clinic** matter, not a matter for salt and patience. Between the ages of six and twelve the milk teeth fall out and the permanent teeth come through, and those teeth have to last a whole life."},
    {k:"h3", t:"The Nose, the Eyes and the Hair"},
    {k:"table", head:["Part","The daily care","The disease it prevents"],
     rows:[
      ["Nose","Blow gently into a tissue and bin it; do not pick; do not put leaves or paper inside","Sore nose, nose bleeds, and the spread of coughs and colds"],
      ["Eyes","Wash the face; never rub with dirty hands; use your own towel; do not share eye make-up or eye medicine","Sore eyes (conjunctivitis), which spreads fast through a class"],
      ["Hair","Wash and comb with your own comb; look for nits; keep the head covered from dust","Nits, sores of the scalp, and ringworm"],
      ["Ears","Wash the outside only; nothing pushed inside; keep water out of a sore ear","Ear infection and a damaged ear drum"],
      ["Hands and nails","Wash with soap at the four times; keep the nails short and clean underneath","Diarrhoea, worms, typhoid and cholera"],
      ["Feet","Wash, dry between the toes and wear shoes or slippers","Fungal infection, jiggers and worms from the soil"]
     ]},
    {k:"h3", t:"The Care of the Genitals"},
    {k:"p", t:"The **genitals** are washed every day with **clean water and plain, unperfumed soap, on the outside only**, then rinsed well and dried with the child's own towel. Nothing is put **inside** the body — no soap, no powder, no cream, no bleach, no “tightening” preparation, and no washing-out of any kind; those things damage a child and they change the body's own clean balance. **Underclothes are changed and washed daily** and dried in the sun. After the toilet, wiping is done **from front to back** so that the germs of the stool are not carried to the opening that passes urine. During menstruation a pad or a clean cloth is changed at least three times a day, with washing, and the used cloth is wrapped and disposed of as the school arranges. A discharge, an itch, a sore or a smell that will not go is a **clinic** matter, and it is nobody's fault."},
    {k:"h3", t:"The Care of Our Surroundings"},
    {k:"bul", items:[
      "**The classroom** — swept and aired every day; desks wiped; the floor and the corners, not only the middle; paper binned, not dropped.",
      "**The home and the compound** — swept; rubbish binned or put in a **refuse pit** and burnt or covered; the compound cleared of grass and bush.",
      "**The water** — kept covered, drawn with a clean cup, stored in a clean container, and boiled or treated for drinking.",
      "**The latrine** — kept clean and covered, with a lid and a handwashing point with soap or ash beside it; nobody passes stool in the bush or on the beach.",
      "**Standing water** — tipped out, drained or filled in, so that mosquitoes cannot breed."
    ]},
    {k:"h3", t:"The Diseases a Clean Compound Prevents"},
    {k:"p", t:"Dirty surroundings bring **diarrhoea and cholera** (from water and hands), **typhoid** (from food and flies), **malaria** (from standing water), **worms** (from soil and bare feet), **scabies and ringworm** (from sharing cloths and combs), and **sore eyes** (from flies and dirty hands). Every one of them is prevented more cheaply by soap, a latrine, a covered water container and a broom than by medicine — and that is why the guide puts sanitation inside a health lesson."},
    {k:"h3", t:"Health-Care Behaviour and Gender Equity"},
    {k:"p", t:"**Health-care behaviour** is doing these things whether or not anybody is watching, and doing them as a habit: washing the hands before eating, using the latrine, covering the water, sweeping the class, and going to the clinic early. The guide pairs this with **gender equity** — in a healthy school the sweeping, the water-fetching and the leading are shared by boys and girls alike, and a girl is not kept from school to do the work of the house while her brother is not."}
  ],
  focus:[
    "The care of the mouth and teeth, the nose, the eyes, the ears and the hair",
    "The care of the genitals — outside only, and never harmful preparations",
    "The care of the classroom, the home and the compound",
    "The diseases a clean compound prevents",
    "Health-care behaviour as a habit, and gender equity in the work",
    "The class plan for the school compound, carried out"
  ],
  terms:[
    {t:"sanitation", d:"the care of the place where people live — latrine, water, refuse, drainage", x:"Sanitation prevents disease before it starts."},
    {t:"hygiene", d:"the care of the body", x:"Personal hygiene is daily work."},
    {t:"genitals", d:"the private parts between the legs", x:"The genitals are washed with water and plain soap, outside only."},
    {t:"discharge", d:"unusual fluid from the genitals", x:"A discharge that will not go is a clinic matter."},
    {t:"refuse pit", d:"a hole in the ground where rubbish is put and covered or burnt", x:"Rubbish goes in the refuse pit, not on the ground."},
    {t:"treated water", d:"water boiled or made safe to drink", x:"Drinking water is treated or boiled."},
    {t:"conjunctivitis", d:"sore eyes, which spreads fast through a class", x:"Sore eyes are treated, and no towel is shared."},
    {t:"ringworm", d:"an itchy ring on the skin or the scalp", x:"Ringworm is treated at the clinic."},
    {t:"typhoid", d:"a fever from food or water carrying germs", x:"Typhoid is prevented by clean water and clean hands."},
    {t:"health-care behaviour", d:"doing the healthy thing as a habit, whether or not anybody is watching", x:"Washing the hands before eating is health-care behaviour."},
    {t:"gender equity", d:"boys and girls sharing the work and the chances", x:"Gender equity means the sweeping is shared."},
    {t:"habit", d:"what a person does without being told", x:"A habit is made by repeating it."}
  ],
  facts:[
    {q:"How often should the teeth be brushed, and how?", a:"Twice a day, with a soft brush and paste or a clean chewing stick, worked in small circles along the gum line, with the tongue brushed too."},
    {q:"How are the genitals washed?", a:"Every day with clean water and plain soap, on the outside only, rinsed and dried with your own towel — nothing is put inside the body."},
    {q:"Why is wiping done from front to back?", a:"So the germs of the stool are not carried to the opening that passes urine."},
    {q:"Name three things a clean compound needs.", a:"A covered water container, a clean covered latrine with a handwashing point, and a refuse pit or a bin."},
    {q:"Name three diseases that dirty surroundings bring.", a:"Diarrhoea and cholera, typhoid, malaria, worms, scabies, ringworm and sore eyes."},
    {q:"Why is standing water cleared?", a:"It is where mosquitoes breed, and mosquitoes carry malaria."},
    {q:"What does the guide mean by health-care behaviour?", a:"Doing the healthy thing as a habit — washing hands, using the latrine, covering water, sweeping, going to the clinic early — whether or not anybody is watching."},
    {q:"How does gender equity show itself in this unit?", a:"The sweeping, the water-fetching and the leading are shared by boys and girls, and a girl is not kept from school to do the work of the house."}
  ],
  tf:[
    {s:"The teeth are brushed only in the morning.", a:"false", why:"They are brushed twice — morning and after the last meal — because sugar left on them overnight makes holes."},
    {s:"Nothing is put inside the genitals to clean them.", a:"true", why:"They are washed outside only with water and plain soap; powders, creams and bleaches damage a child."},
    {s:"A refuse pit keeps a compound healthier than throwing rubbish on the ground.", a:"true", why:"Binned or buried rubbish keeps away flies, rats and the germs they carry."},
    {s:"Malaria is caused by bad food.", a:"false", why:"Malaria comes from the bite of an Anopheles mosquito; bad food brings typhoid and diarrhoea."},
    {s:"A girl should stay home to fetch water while her brother goes to school.", a:"false", why:"The guide pairs this unit with gender equity: the work is shared and both stay in school."},
    {s:"Sore eyes can spread through a class by a shared towel.", a:"true", why:"Conjunctivitis spreads fast, which is why every child has their own towel."}
  ],
  classify:{
    title:"Which care prevents which disease?",
    groups:[
      {name:"Washing hands with soap", items:["diarrhoea","cholera","typhoid","worms"]},
      {name:"A latrine and covered water", items:["cholera","typhoid","diarrhoea","worms"]},
      {name:"Clearing standing water and a net", items:["malaria"]},
      {name:"Your own towel, comb and cloth", items:["scabies","ringworm","sore eyes"]},
      {name:"Shoes and dry feet", items:["jiggers","fungal infection","worms from the soil"]}
    ]
  },
  diagram:{
    title:"The compound check",
    caption:"Walk the compound and write YES or NO beside each line, then what you will do about the NOs.",
    parts:[
      {p:"Drinking water", f:"covered, drawn with a clean cup, treated or boiled"},
      {p:"Latrine", f:"clean, covered, with soap or ash beside it"},
      {p:"Refuse", f:"binned or in a refuse pit, not on the ground"},
      {p:"Standing water", f:"none — tins turned over, gutters open"},
      {p:"Grass and bush", f:"cut back from the house"},
      {p:"Classroom", f:"swept and aired daily, paper binned"},
      {p:"Personal", f:"my own towel, comb, cloth and slippers"}
    ]
  },
  experiment:{
    title:"The Compound Inspection and the Class Plan",
    aim:"To inspect the school compound against a checklist and to carry out the plan that comes from it.",
    materials:["A checklist written by the class from the compound table","A clipboard or hard book and a pencil for each group","Brooms, a spade, gloves where the school can provide them","A chart for the before-and-after record","A camera or phone where the school has one, otherwise drawings"],
    steps:[
      "The class writes its own checklist of seven lines, from the compound table.",
      "In groups of four, walk the compound and mark each line YES or NO.",
      "Bring the results together and count the NOs.",
      "Choose the three NOs the class can put right this week, and write who will do what and when.",
      "Carry the plan out — sweep, clear, drain, cover, bin.",
      "Walk again after two weeks with the same checklist and count the NOs again."
    ],
    expect:"Fewer NOs on the second walk, with the three chosen items put right and the work shared between boys and girls.",
    why:"The guide asks the class to take good care of the surroundings, especially the classroom and the home; a checklist makes the care measurable, and doing the work shows that prevention is cheaper than medicine."
  },
  apply:[
    {q:"Your classroom is swept only in the middle and the corners are full of paper. What do you do?", a:"Say it in the class meeting, add the corners to the duty roster, and bin the paper; the corners are where the flies and the dust sit."},
    {q:"A friend puts soap inside herself to “clean properly” because somebody told her to. What do you say?", a:"Nothing goes inside; that damages the body and causes infection. Wash outside with water and plain soap, and if there is a problem go to the clinic."},
    {q:"There is no handwashing point beside your latrine. What do you do?", a:"Tell the teacher and the class; a tin of ash or a bar of soap and a cup of water beside the latrine is enough until a proper point is made."},
    {q:"The boys sweep and the girls fetch water, every day. What is the fair arrangement?", a:"Share both, so that every child learns both and nobody is kept from school by the work."},
    {q:"Name one disease that soap and a latrine prevent that medicine costs more to cure.", a:"Cholera or typhoid — prevented by clean water, a latrine and clean hands, but costly and dangerous to treat."}
  ],
  activities:[
    "Explanation of how to take good care of the surroundings, especially the classroom and the home (the guide's own activity)",
    "Explanation of how to care for the genitals, from the chart, never by demonstration on a child",
    "Care cards: mouth and teeth, nose, eyes, hair, hands, feet, genitals — with the disease each prevents",
    "The compound inspection and the class plan, carried out and counted twice",
    "Handwashing station: the class keeps soap or ash and water beside the latrine for a month",
    "Gender-equity roster: the week's duties shared between boys and girls, written and posted"
  ],
  materials:[
    "Soap, a towel, a toothbrush and paste, a comb, a nail brush, slippers, a clean cloth",
    "Brooms, a spade, gloves where the school has them",
    "Clipboards or hard books and pencils for the inspection",
    "Chart paper and crayons for the checklist and the plan",
    "A chart of the parts of the body for the care cards",
    "The guide's internet links where the school has them"
  ],
  aids:[
    "Real soap, towel, toothbrush, paste, comb, slippers and cloth",
    "Brooms and a spade",
    "The checklist on clipboards",
    "Chart paper and crayons",
    "The gender-equity duty roster"
  ],
  home:[
    "Sweep your sleeping room and the compound for a week and tick your chart",
    "Check the drinking water at home: covered, clean cup, treated or boiled",
    "Wash your own underclothes for a week and dry them in the sun",
    "With a grown-up, list the jobs at home that could be shared more fairly between boys and girls"
  ],
  assessment:[
    "Oral quiz: the daily care of each part, and the disease each prevents",
    "Sorting task: care cards matched to the disease prevented",
    "The compound inspection: the two counts, and the three things the class put right",
    "The gender-equity roster: posted, shared and kept for a month",
    "True or false with reasons: six items",
    "Science journal: the compound checklist, filled in at home, with one line on what the family changed"
  ]
},

/* ------------------------------ GRADE 5 · PERIOD V --------------------------- */
{
  grade:5, period:"V", sem:"Two", icon:"🌸", healthPlan:true,
  title:"Adolescent Development: Body Changes, Menstruation and Ovulation",
  subtitle:"Health strand · adolescent development — the body changes, menstruation and ovulation, the external reproductive organs and their functions, and the effects of teenage pregnancy (guide pp. 57–59, contents 5 and 6)",
  outcomes:[
    "Describe some of the body changes at puberty",
    "Explain menstruation and ovulation, and read a menstrual-cycle chart",
    "Identify and discuss the effects of teenage pregnancy"
  ],
  objectives:[
    "Name the external organs of the male and female reproductive systems and state their functions",
    "Describe the body changes of adolescent development in boys and in girls",
    "Explain menstruation and ovulation and read a simple cycle chart",
    "Discuss the effects of teenage pregnancy on the girl, the boy, the baby and both families",
    "Say what a girl needs in order to manage menstruation at school with dignity",
    "Encourage gender equity in our society"
  ],
  safeguard:"Adolescent development is taught from charts, from the guide's own drawings and from invented case studies only; no child is asked about their own body, their own cycle, their own changes or anybody they know who is pregnant, and no pupil is examined, named, measured or pointed at. The boys' and girls' discussions are held separately, as the guide asks, each with a same-sex teacher or the school health worker where the school can. A disclosure is listened to once, written in the child's own words and taken to the head teacher and the carer the same day — in Liberia, to the police Women and Children Protection Unit and the Ministry of Gender, Children and Social Protection. A pregnant pupil is kept in school and helped, never expelled or shamed.",
  note:"**Adolescence** is the stage between childhood and grown-up life, when the body becomes able to make a baby. The **external reproductive organs** are the outside parts; their functions are to pass urine, to carry the sperm or to receive it, and to protect the inside parts. **Ovulation** releases an egg; **menstruation** is the monthly bleeding when no egg has been joined. Understanding both is what lets a pupil **plan**, and planning is what keeps a teenage pregnancy from happening.",
  study:[
    {k:"h3", t:"The External Reproductive Organs"},
    {k:"table", head:["","Female (the vulva)","Male (the penis and scrotum)"],
     rows:[
      ["The outside parts","The vulva: the outer and inner lips, the opening that passes urine, the opening to the womb, and the clitoris","The penis and the scrotum, which holds the two testicles"],
      ["The function","To protect the inside parts, to pass urine, to receive the sperm, and to be the way a baby leaves the body","To pass urine, to carry the sperm out of the body, and to protect the testicles"],
      ["The inside parts (named, not drawn in detail)","The vagina, the womb, the two fallopian tubes and the two ovaries","The tubes that carry the sperm, and the glands that make the fluid"],
      ["The care","Washed daily with clean water and plain soap, outside only; nothing put inside; clean underclothes daily","Washed daily with clean water and plain soap, under the foreskin drawn back gently and returned; clean underclothes daily"]
     ]},
    {k:"h3", t:"The Body Changes of Adolescent Development"},
    {k:"p", t:"In **girls**: the breasts grow, hair grows under the arms and between the legs, the hips widen, the body grows taller, the skin grows oily and spots may come, and **menstruation** begins. In **boys**: the penis and testicles grow, hair grows on the face and the body, the voice breaks and deepens, the shoulders widen, the body grows taller, the skin grows oily, and **wet dreams** may happen. In **both**: a growth spurt, stronger sweat and body odour, strong feelings, a wish for more privacy, and a new interest in friendship and in how other people see them. All of it is normal and it comes at its own pace."},
    {k:"h3", t:"Menstruation and Ovulation"},
    {k:"p", t:"About once a month, one of the two **ovaries** releases an egg — that is **ovulation**. The womb builds a soft lining ready for it. If the egg is not joined by a sperm, the lining is not needed and it comes away as the monthly bleeding — **menstruation**. The bleeding lasts about three to seven days and the whole **cycle** is counted from the first day of one bleeding to the first day of the next, usually about twenty-eight days, though in the first two years it is often irregular and that is normal. **A girl can become pregnant if a sperm is present around ovulation**, and because a young cycle is irregular, that can be at any point in the month — which is why the guide teaches this before the body has finished changing."},
    {k:"h3", t:"Managing Menstruation with Dignity"},
    {k:"num", items:[
      "Carry a pad or a clean cloth, wrapped, in the bag every day once menstruation has begun.",
      "Change it at least three times a day, and wash.",
      "Wrap the used cloth or pad and dispose of it where the school arranges — never in the open.",
      "Wash daily and wear clean underclothes.",
      "Go on with school, play and every ordinary thing — menstruation is not an illness.",
      "Tell the female teacher or the school health worker if there is no pad, or bad pain, or bleeding that is very heavy."
    ]},
    {k:"h3", t:"The Effects of Teenage Pregnancy"},
    {k:"bul", items:[
      "**On the girl** — she leaves school or struggles to stay; her body is still growing, so the birth is more dangerous; she can suffer a fistula, lose the baby, or lose her own life.",
      "**On the boy** — school and plans are lost too, and he carries responsibility for a child he cannot yet feed.",
      "**On the baby** — born smaller and sicker, to parents who cannot yet earn, and often into poverty.",
      "**On both families** — cost, quarrels and shame put on the girl, who is often the one sent away.",
      "**On the community** — another child without a school place and another mother without a living.",
      "**The way out** — the girl stays in school, both families are told, the clinic is visited early and often, and the child is cared for by both sides."
    ]},
    {k:"h3", t:"Gender Equity"},
    {k:"p", t:"Notice what the effects list does not share out evenly: the girl carries most of it. That is why the guide pairs this unit with **gender equity** — the same chance at school, the same share of the work at home, the same right to say no, and the same responsibility when a child comes. A boy who learns this at eleven is a father who does not disappear at seventeen."}
  ],
  focus:[
    "The external reproductive organs and their functions",
    "The body changes of adolescence in girls and in boys",
    "Ovulation and menstruation, and reading a cycle chart",
    "Managing menstruation at school with dignity",
    "The effects of teenage pregnancy, and the way out",
    "Gender equity: the same chance, the same share, the same responsibility"
  ],
  terms:[
    {t:"adolescence", d:"the stage between childhood and grown-up life", x:"Adolescence brings many changes at once."},
    {t:"vulva", d:"the outside private parts of a girl or woman", x:"The vulva is washed with water and plain soap, outside only."},
    {t:"scrotum", d:"the bag of skin that holds the two testicles", x:"The scrotum is washed daily."},
    {t:"testicle", d:"the part that makes the sperm", x:"The two testicles hang in the scrotum."},
    {t:"ovary", d:"the part inside a woman that holds and releases the eggs", x:"One ovary releases an egg each month."},
    {t:"ovulation", d:"the release of an egg, about once a month", x:"Pregnancy is most likely around ovulation."},
    {t:"menstruation", d:"the monthly bleeding when no egg has been joined", x:"Menstruation lasts about three to seven days."},
    {t:"cycle", d:"the count from the first day of one bleeding to the first day of the next", x:"A cycle is usually about twenty-eight days."},
    {t:"irregular", d:"not the same length every month", x:"A young cycle is often irregular, and that is normal."},
    {t:"dignity", d:"being treated with respect", x:"A girl manages menstruation with dignity."},
    {t:"fistula", d:"a serious injury of childbirth that leaves a woman leaking urine", x:"A growing body is at risk of fistula in childbirth."},
    {t:"gender equity", d:"the same chance and the same share for boys and girls", x:"Gender equity keeps a girl in school."}
  ],
  facts:[
    {q:"Name the outside parts of the female and of the male reproductive system.", a:"Female — the vulva; male — the penis and the scrotum, which holds the testicles."},
    {q:"What are the functions of the vulva?", a:"To protect the inside parts, to pass urine, to receive the sperm, and to be the way a baby leaves the body."},
    {q:"What is ovulation?", a:"The release of an egg from one of the ovaries, about once a month."},
    {q:"What is menstruation?", a:"The monthly bleeding, of about three to seven days, when the egg has not been joined and the womb's lining comes away."},
    {q:"How long is a menstrual cycle, and is it regular at first?", a:"Usually about twenty-eight days, counted from the first day of one bleeding to the next; in the first two years it is often irregular, which is normal."},
    {q:"Can a girl become pregnant at any point in the month?", a:"Yes, while her cycle is irregular — which is why the guide teaches this before the body has finished changing."},
    {q:"Name two effects of teenage pregnancy on the girl.", a:"She leaves school or struggles to stay, and because her body is still growing the birth is more dangerous — she can suffer a fistula, lose the baby or lose her own life."},
    {q:"What should happen to a pregnant pupil?", a:"She stays in school and is helped, both families are told, the clinic is visited early, and the child is cared for by both sides."}
  ],
  tf:[
    {s:"Ovulation is the release of an egg.", a:"true", why:"One of the ovaries releases an egg about once a month."},
    {s:"Menstruation is an illness.", a:"false", why:"It is the normal monthly bleeding when the egg has not been joined."},
    {s:"A young girl's cycle is often irregular.", a:"true", why:"That is normal in the first two years, and it means pregnancy can happen at any point in the month."},
    {s:"A girl should stay home from school while she is menstruating.", a:"false", why:"She changes her pad, washes, and goes on with school; menstruation is not an illness."},
    {s:"A teenage girl's body is ready for childbirth.", a:"false", why:"Her body is still growing, so the birth is more dangerous for her and the baby."},
    {s:"A pregnant pupil should be sent away from school.", a:"false", why:"She is kept in school and helped; that is the school's own rule and the Ministry's policy."}
  ],
  classify:{
    title:"Which organ, which cycle part, which effect?",
    groups:[
      {name:"Female external organs", items:["the vulva","the outer and inner lips","the opening that passes urine","the clitoris"]},
      {name:"Male external organs", items:["the penis","the scrotum","the testicles"]},
      {name:"The cycle", items:["ovulation","the lining building up","menstruation","the first day of the next bleeding"]},
      {name:"Effects of teenage pregnancy", items:["lost schooling","a dangerous birth","a small and sickly baby","cost and quarrels for both families"]}
    ]
  },
  diagram:{
    title:"The menstrual cycle",
    caption:"Number the days in order and write what happens in each part.",
    parts:[
      {p:"Day 1", f:"the first day of the bleeding — the count starts here"},
      {p:"Days 1 to 5 or 7", f:"the lining comes away: menstruation"},
      {p:"About day 14", f:"ovulation — an egg is released"},
      {p:"Days 15 to 28", f:"the lining builds up, ready for a joined egg"},
      {p:"If the egg is not joined", f:"the lining comes away and the next bleeding begins"},
      {p:"If it is joined", f:"conception — the lining stays and the pregnancy begins"},
      {p:"In the first two years", f:"the cycle is often irregular, and that is normal"}
    ]
  },
  experiment:{
    title:"The Cycle Chart and the Case Study",
    aim:"To read a menstrual cycle chart and to work out, from invented cases, what a girl needs in order to stay in school.",
    materials:["A cycle chart drawn on the board, numbered from day 1","Invented case-study cards (never a real person)","Paper and pencils","A list of what a school needs to provide: water, a private place, a disposal arrangement, a spare pad"],
    steps:[
      "Read the chart together: day 1, the bleeding, ovulation about day 14, and the next day 1.",
      "Take one invented case card: a girl who has begun menstruating and has no pad at school.",
      "In small groups, list what she needs, in order, and who provides each thing.",
      "Take a second card: a girl whose monthly bleeding has not come and who feels sick in the mornings.",
      "Say what happens next, and who is told.",
      "Write the class list of what the school should provide, and take it to the head teacher."
    ],
    expect:"A correct reading of the chart, a practical list for the first case, and a clear route for the second — parent or carer, then the clinic — with nobody named and nothing shamed.",
    why:"The guide asks for the chart and for the case study of a parent-and-child talk on menstruation and ovulation; the point is that a girl with what she needs stays in school, and a girl who is pregnant is helped rather than hidden."
  },
  apply:[
    {q:"A girl in your class has started menstruating and there is no private place or water at school. What should happen?", a:"The class writes the list — water, a private place, a disposal arrangement, a spare pad — and takes it to the head teacher; that is what keeps her in school."},
    {q:"A friend's monthly bleeding has not come for two months and she is being sick in the mornings. What do you do?", a:"Go with her to a trusted adult — a female teacher, the school health worker or her family — and she is taken to the clinic. Nobody shames her and she is not expelled."},
    {q:"Some boys laugh that menstruation makes girls “unclean”. What do you say?", a:"Menstruation is normal and it is the body working as it was made to; laughing at it is ignorance, and it stops now."},
    {q:"Your cousin is pregnant at fourteen and the family wants to send her to the village. What should happen?", a:"She stays in school as long as she can, both families are told, the clinic is visited early and often, and the baby is cared for by both sides."},
    {q:"Why does the guide put gender equity beside this unit?", a:"Because the girl carries most of the cost of a teenage pregnancy, and equity — the same chance, the same share, the same responsibility — is what stops that."}
  ],
  activities:[
    "Display the diagram of the external structures of the male and female reproductive system and outline the physical differences (the guide's own activity)",
    "Description of the body changes of adolescent development, in separate boys' and girls' groups, as the guide asks",
    "Discussion on menstruation and ovulation, with the cycle chart",
    "Case study: a scenario of a talk about menstruation between a parent and a child, with invented characters (the guide's own activity)",
    "Discussion of the effects of teenage pregnancy, and the way out for each one",
    "Class list to the head teacher: what the school needs so that a girl can manage menstruation with dignity"
  ],
  materials:[
    "A diagram of the external structures of the male and female reproductive systems",
    "A menstrual cycle chart drawn on the board",
    "Invented case-study cards",
    "Paper and pencils for the class list",
    "The parent notice, sent out the week before",
    "The guide's internet links where the school has them"
  ],
  aids:[
    "Diagram of the external reproductive structures",
    "The cycle chart",
    "Case-study cards",
    "Paper and pencils",
    "The parent notice"
  ],
  home:[
    "Read the parent notice with a grown-up of your own sex and bring back any question, written down",
    "Ask a grown-up what they were told about menstruation or about wet dreams when they were your age",
    "With a grown-up, check that there is a clean cloth or pad and a private place at home for menstruation",
    "Write in your journal one line on what gender equity looks like in your own house"
  ],
  assessment:[
    "Oral quiz: the external organs and their functions; ovulation; menstruation; the cycle",
    "The cycle chart: numbered and explained in the right order",
    "The case study: the two invented cases, with the right route for each",
    "The class list to the head teacher, presented and followed up",
    "True or false with reasons: six items",
    "Teacher's record: the parent notice went out; the groups were held separately; any disclosure written in the child's own words and passed to the head teacher the same day"
  ]
},

/* ----------------------------- GRADE 5 · PERIOD VI ---------------------------- */
{
  grade:5, period:"VI", sem:"Two", icon:"📣", healthPlan:true,
  title:"Community Health Services and the Class Health Campaign",
  subtitle:"Health strand · community health services — where to find help, what each service does, and the class health campaign that carries the year's health messages to the school (guide p. 54, “Identify community health services”)",
  outcomes:[
    "Identify the community health services and where to find them",
    "Know which service to go to for which problem, and when to go at once",
    "Carry the year's health messages to other classes through a planned campaign"
  ],
  objectives:[
    "Name the health services in the community and what each one does",
    "Say how far each is, what it costs, and what to bring",
    "Match a health problem to the service that solves it",
    "Name the danger signs that mean a person goes the same day, not tomorrow",
    "Say what a community health worker does and how to reach one",
    "Plan and run a class health campaign with posters, a short play and leaflets"
  ],
  safeguard:"No child is asked about their own clinic visits, their own illnesses or anybody in their family who is sick, and nobody is named or pointed at because of an illness. A child who needs care is taken to a health worker by the school, quietly and with the family told; the school never treats illness itself beyond first aid. Campaign messages are written by the class and checked by the teacher for accuracy and for safeguarding before they are shown to anybody. Anything a child says that worries you is written in the child's own words and reported to the head teacher the same day.",
  note:"A **community health service** is any place or person in the community that keeps people well: the **clinic**, the **health post**, the **hospital**, the **pharmacy**, the **community health worker**, the **traditional birth attendant**, the **school health worker** and the **voluntary counselling and testing** point. Knowing **which** one to go to, **where** it is and **when** to go at once is health knowledge a child can use for a lifetime.",
  study:[
    {k:"h3", t:"The Services and What Each Does"},
    {k:"table", head:["Service","What it does","What to bring"],
     rows:[
      ["Health post / clinic","Treats malaria, diarrhoea, coughs, wounds and fevers; gives immunisation; tests for malaria, HIV, pregnancy and the blood; gives family planning advice","The child's immunisation card or clinic card, and the fever or the problem written down"],
      ["Hospital","Treats serious illness and accidents; delivers babies; does operations and X-rays","A referral note from the clinic if there is one, and the clinic card"],
      ["Pharmacy","Sells and gives out medicine, with advice on how to take it","The prescription or the health worker's instruction, and the money"],
      ["Community health worker","Visits homes, treats simple illness, gives health advice, and refers to the clinic","Nothing but the problem, plainly said"],
      ["Traditional birth attendant","Helps a mother in childbirth in the community","She is called early, and the clinic is told"],
      ["Voluntary counselling and testing (VCT) point","Tests for HIV with counselling before and after; treatment is then given at the clinic","Nothing but yourself; the test is private"],
      ["School health worker or teacher","First aid at school, and the route to the clinic and to the family","The child's own words about what happened"]
     ]},
    {k:"h3", t:"How Far, What It Costs, What to Bring"},
    {k:"p", t:"A health service is only useful if a person can get to it. For each one near the school the class writes four things: **the name**, **how far** it is on foot, **what it costs**, and **what to bring**. Some services are free — immunisation, most testing, and much of the treatment for malaria and for HIV; some cost a small fee. A family that cannot pay is still taken: a child is never kept from a clinic because of money, and the head teacher and the community health worker help with the route."},
    {k:"h3", t:"Which Problem, Which Service?"},
    {k:"bul", items:[
      "**Fever** — the clinic or the health post the same day, for a malaria test.",
      "**Diarrhoea with thirst and weakness** — the clinic at once; oral rehydration salt on the way.",
      "**A deep cut or a burn** — clean water and a clean cloth first, then the clinic or the hospital the same day.",
      "**A suspected broken bone** — do not move the limb; the hospital.",
      "**A toothache or a swollen gum** — the clinic, then the dentist if there is one.",
      "**Sore eyes that spread through the class** — the clinic, and nobody shares a towel.",
      "**A girl who has missed her monthly bleeding and is being sick in the mornings** — a trusted adult, then the clinic.",
      "**A person who wants to know their HIV status** — the VCT point; the test is private and free.",
      "**A person who wants to delay a pregnancy** — the clinic or the reproductive health unit, where a health worker explains the methods."
    ]},
    {k:"h3", t:"The Danger Signs: Go the Same Day"},
    {k:"num", items:[
      "A child who will not wake, or who is confused.",
      "A fit, or a stiff neck with a fever.",
      "A fever in a small child, or a fever with vomiting and no food.",
      "Fast or difficult breathing.",
      "Blood in the stool or in the urine.",
      "A burn that blisters, or a deep or dirty wound.",
      "Severe pain anywhere, or a broken bone.",
      "A pregnant girl with bleeding, or with a headache and swollen hands and feet.",
      "Any disclosure of abuse — the child is taken to a health facility at once, because seventy-two hours matters for care and for evidence."
    ]},
    {k:"h3", t:"The Class Health Campaign"},
    {k:"p", t:"A **campaign** is planned work to carry a message to other people. The class chooses three messages from the year — handwashing with soap at the four times, sleeping under a net every night, or saying no and telling a trusted adult — and makes for each one a **poster**, a **slogan** and a **short play**. The teacher checks every message for accuracy and for safeguarding before it is shown. Then the class presents to the other classes, hands out the **leaflets** it has written, and, where the school has one, uses the **megaphone** in the assembly. A campaign is not decoration: it is the year's knowledge going out of the classroom and into the school."}
  ],
  focus:[
    "The health services in the community and what each does",
    "How far, what it costs, and what to bring",
    "Which problem goes to which service",
    "The danger signs that mean the same day, not tomorrow",
    "The community health worker and how to reach one",
    "The class health campaign: three messages, posters, a play and leaflets"
  ],
  terms:[
    {t:"health service", d:"a place or a person in the community that keeps people well", x:"The clinic is a health service."},
    {t:"clinic", d:"the local place where a health worker sees patients", x:"A fever goes to the clinic the same day."},
    {t:"health post", d:"the smallest health service, often the nearest one", x:"The health post treats simple illness and refers the rest."},
    {t:"pharmacy", d:"the place where medicine is given out and sold", x:"The pharmacy needs a health worker's instruction."},
    {t:"community health worker", d:"the person who visits homes and treats simple illness", x:"The community health worker can be reached through the school."},
    {t:"referral", d:"being sent to a bigger service for more care", x:"The clinic gives a referral note to the hospital."},
    {t:"VCT point", d:"the place where a person is tested for HIV with counselling", x:"The test at the VCT point is private and free."},
    {t:"oral rehydration salt", d:"the salt-and-sugar mix in water that saves a child with diarrhoea", x:"Give oral rehydration salt on the way to the clinic."},
    {t:"danger sign", d:"a sign that a person goes to a health worker at once", x:"A child who will not wake is a danger sign."},
    {t:"campaign", d:"planned work to carry a message to other people", x:"The class campaign carries three health messages."},
    {t:"leaflet", d:"a small sheet given out with a message on it", x:"The class writes a leaflet for each message."},
    {t:"free", d:"costing nothing", x:"Immunisation and most testing are free."}
  ],
  facts:[
    {q:"Name five health services in a community.", a:"The clinic or health post, the hospital, the pharmacy, the community health worker, the traditional birth attendant, the VCT point and the school health worker."},
    {q:"What does a community health worker do?", a:"Visits homes, treats simple illness, gives health advice and refers people to the clinic."},
    {q:"What is taken to the clinic?", a:"The child's card if there is one, and the problem written down — the fever, how many days, and what has been given."},
    {q:"Name three danger signs that mean the same day.", a:"A child who will not wake or is confused; a fit or a stiff neck with fever; fast or difficult breathing; blood in the stool; a blistering burn."},
    {q:"Where does a person go to know their HIV status?", a:"To the VCT point or the clinic; the test is private, it is free, and there is counselling before and after."},
    {q:"Where does a person go for advice on delaying a pregnancy?", a:"To the clinic or the reproductive health unit, where a health worker explains the methods."},
    {q:"What should happen if a family cannot pay?", a:"The child is still taken; a child is never kept from a clinic for money, and the head teacher and the community health worker help with the route."},
    {q:"What does a class health campaign need for each message?", a:"A poster, a slogan and a short play — each checked by the teacher for accuracy and for safeguarding."}
  ],
  tf:[
    {s:"A fever can wait three days to see whether it passes.", a:"false", why:"A fever is taken to the clinic the same day for a malaria test; waiting is how a small illness becomes a dangerous one."},
    {s:"The community health worker can treat simple illness at home.", a:"true", why:"That is the worker's work, along with advice and referral."},
    {s:"A pharmacy can give any medicine a person asks for.", a:"false", why:"Medicine is given on a health worker's instruction or prescription."},
    {s:"The HIV test is private and free.", a:"true", why:"Testing is done at the VCT point or the clinic with counselling before and after."},
    {s:"A child who will not wake should be left to sleep.", a:"false", why:"That is a danger sign; the child goes to a health worker at once."},
    {s:"A class campaign message can be shown without the teacher checking it.", a:"false", why:"Every message is checked for accuracy and for safeguarding before it goes out."}
  ],
  classify:{
    title:"Which service for which problem?",
    groups:[
      {name:"Clinic or health post", items:["fever","diarrhoea","a cough that will not go","immunisation","a pregnancy test","sore eyes"]},
      {name:"Hospital", items:["a broken bone","a serious accident","an operation","a difficult birth"]},
      {name:"Pharmacy", items:["medicine on a health worker's instruction","oral rehydration salt"]},
      {name:"Go the same day, anywhere", items:["a child who will not wake","a fit with fever","fast breathing","blood in the stool","a disclosure of abuse"]}
    ]
  },
  diagram:{
    title:"The route to help",
    caption:"Write the five steps in order and say who does each one.",
    parts:[
      {p:"Step 1", f:"notice the problem and say it plainly"},
      {p:"Step 2", f:"tell a trusted adult — parent, carer, teacher"},
      {p:"Step 3", f:"first aid at once: water, a clean cloth, rehydration salt"},
      {p:"Step 4", f:"go to the nearest right service — post, clinic or hospital"},
      {p:"Step 5", f:"take the card, the referral note and the medicine instructions home"},
      {p:"If it is a danger sign", f:"go now, do not wait until morning"}
    ]
  },
  experiment:{
    title:"The Service Map of Our Community",
    aim:"To make a map of the health services near the school, with the four facts a person needs for each.",
    materials:["A large sheet of paper for the map","Pencils, rulers and crayons","The four facts written for each service: name, distance, cost, what to bring","Information gathered from the head teacher, the community health worker and the clinic"],
    steps:[
      "Draw the school in the middle of the sheet.",
      "List every health service the class can name within walking distance, and find out about the others from the head teacher.",
      "For each one, write the four facts: the name, how far it is on foot, what it costs, and what to bring.",
      "Put a red ring round the services that are open at night.",
      "Put a star on the nearest one for a fever, and on the nearest one for a broken bone.",
      "Hang the map where every class can read it, and give a copy to the head teacher."
    ],
    expect:"A map with four services or more, each with its four facts, with the nearest fever service and the nearest fracture service marked.",
    why:"The guide asks pupils to identify community health services; a map with a distance and a cost on it is the difference between knowing a clinic exists and being able to reach it at two in the morning."
  },
  apply:[
    {q:"Your brother has a fever at eight in the evening. What do you do?", a:"Tell a grown-up at once, keep him cool and give fluids, and he is taken to the nearest service that is open — the clinic, the health post or the hospital — the same night."},
    {q:"Your friend says his family has no money for the clinic. What do you say?", a:"A child is never kept from a clinic for money; many services are free, and the head teacher and the community health worker help with the route."},
    {q:"A girl in your class has missed her monthly bleeding and is being sick in the mornings. Where does she go?", a:"A trusted adult first — a female teacher or her family — then the clinic; she is helped, not shamed, and she stays in school as long as she can."},
    {q:"Name one message you would put on a campaign poster, and why.", a:"Any of the year's three — for example, “Wash your hands with soap before you eat”, because it prevents diarrhoea, worms and typhoid."},
    {q:"Why must the teacher check every campaign message?", a:"Because a wrong health message can do harm, and because a message about a person's body must never name, shame or expose anybody."}
  ],
  activities:[
    "The Service Map of Our Community, drawn in groups and hung in the school",
    "Matching game: problem cards placed against the service that solves them",
    "Danger-signs drill: the class says which of nine signs means “go now”",
    "Visit from the community health worker, or a visit to the clinic, where the school can arrange one",
    "The class health campaign: three messages, each with a poster, a slogan and a short play",
    "Leaflets written by the class and handed out, with the megaphone in assembly where the school has one"
  ],
  materials:[
    "A large sheet for the map, pencils, rulers and crayons",
    "Problem cards and service cards for the matching game",
    "Poster paper, markers and crayons for the campaign",
    "Leaflet paper, and a megaphone where the school has one",
    "Information from the head teacher and the community health worker",
    "The guide's internet links where the school has them"
  ],
  aids:[
    "The large map sheet and the drawing materials",
    "Problem and service cards",
    "Poster paper and markers",
    "Leaflet paper",
    "The checked campaign messages"
  ],
  home:[
    "With a grown-up, name the nearest health post or clinic and how long it takes to walk there",
    "Find out what your family does if somebody has a fever at night",
    "Check whether the immunisation cards in your house are up to date",
    "Tell your family the three campaign messages the class chose"
  ],
  assessment:[
    "Oral quiz: the services, what each does, and which problem goes where",
    "The Service Map: four or more services with the four facts, and the two nearest marked",
    "Matching game: problem to service, with a reason for each",
    "The danger-signs drill: nine signs, correctly sorted into NOW and TODAY",
    "The campaign: three messages, a poster and a slogan each, checked and presented to another class",
    "True or false with reasons: six items"
  ]
},
/* ==========================================================================
   GRADE 6 — the guide's health content sits in Period II (pp. 66-67,
   objectives 5 and 6 of the ecosystem unit: “State preventive measures
   against HIV/AIDS” and “Discuss human reproduction”) and Period IV
   (pp. 70-73, “THE HUMAN BODY: HEALTH LESSONS”). Both keep their numbers
   below. Periods I and III take the body and the disease work that Period IV
   stands on; Period V takes the second half of the guide's Period IV block —
   risky behaviour, STIs and getting out of dangerous situations; and Period VI
   closes the year with the healthy living, first aid and health-service work
   the unit leads to.
   ========================================================================== */

/* ------------------------------ GRADE 6 · PERIOD I ----------------------------- */
{
  grade:6, period:"I", sem:"One", icon:"🫀", healthPlan:true,
  title:"The Systems of the Human Body",
  subtitle:"Health strand · the human body — the systems, the organs in each, what each system does, and how the systems work together (guide p. 70, with the systems work of pp. 57-59)",
  outcomes:[
    "Appreciate the human body as a set of systems working together",
    "Name the systems, the organs in each, and the work each system does",
    "Explain what keeps a system well and what damages it"
  ],
  objectives:[
    "Name the seven systems of the body",
    "Name the main organs in each system and state their functions",
    "Explain how two systems depend on each other",
    "Say what each system needs in order to stay well",
    "Say what damages each system",
    "Explain that the body is one whole, not a collection of spare parts"
  ],
  safeguard:"The body is taught from charts and models; no child is examined, measured, or asked about their own body, their own illnesses or anybody in their family. A child who has a disability, a scar, a wound or an illness is helped and never used as an example in front of the class without their own agreement. Anything a child says that suggests they are unwell, hungry or unsafe is written down and taken quietly to the head teacher and the family.",
  note:"A **system** is a group of organs working together for one job. The body's systems are the **skeletal**, **muscular**, **circulatory**, **respiratory**, **digestive**, **excretory**, **nervous** and **reproductive** systems. None of them works alone: the breath the lungs take in is carried by the blood the heart pumps to the muscle that moves the bone.",
  study:[
    {k:"h3", t:"The Seven Systems"},
    {k:"table", head:["System","The main organs","The work it does","What it needs to stay well"],
     rows:[
      ["Skeletal","Bones, joints, cartilage, the skull","Holds the body up, protects the brain, heart and lungs, makes blood in the marrow, and lets the body move with the muscles","Calcium and vitamin D from food and sun, exercise, and care of the back and the head"],
      ["Muscular","The muscles of the arms, legs, back and heart","Move the bones, hold the body up, keep the heart beating and move food along the gut","Exercise, protein from food, rest, and stretching after hard work"],
      ["Circulatory","The heart, the blood and the blood vessels","Carry oxygen, food, heat and the defence cells to every part, and carry waste away","Exercise, food with iron, clean water, and no smoke in the lungs"],
      ["Respiratory","The nose, the windpipe and the lungs","Take air in, take the oxygen out of it and send out the waste gas","Clean air, no cigarette smoke, treatment for coughs, and a clear nose"],
      ["Digestive","The mouth, gullet, stomach, liver, intestines","Break food down so the body can use it, and pass what is left out","Clean food and water, cooked food, and treatment for worms"],
      ["Excretory","The kidneys, the bladder, the skin and the lungs","Clean the blood and pass out the waste as urine, sweat and breath","Plenty of clean water, and no holding of urine for hours"],
      ["Nervous","The brain, the spinal cord and the nerves","Think, remember, feel, and carry messages to every part of the body in an instant","Sleep, food, safety from hard knocks to the head, and no bad substances"],
      ["Reproductive","The ovaries, womb and vulva; the testicles and penis","Make a baby possible, and make the hormones that change the body at puberty","Correct knowledge, cleanliness, and the right to say no"]
     ]},
    {k:"h3", t:"How Two Systems Depend on Each Other"},
    {k:"p", t:"Take one breath. The **respiratory** system takes the air in; the **circulatory** system carries the oxygen to a muscle; the **muscular** system uses it to move a bone of the **skeletal** system; the **nervous** system told the muscle to move and tells the lungs to breathe faster. Run for two minutes and all four answer together — the heart beats faster, the breathing deepens, the muscles burn and the skin sweats to cool the body. That is one body, not seven."},
    {k:"h3", t:"What Damages a System"},
    {k:"bul", items:[
      "**Smoke and bad air** — damage the lungs and then the heart.",
      "**Alcohol and drugs** — damage the liver, the brain and the nerves, and a growing brain most of all.",
      "**Dirty water and unwashed hands** — bring diarrhoea, cholera, typhoid and worms, which damage the digestive system and the blood.",
      "**Untreated illness** — a sore throat untreated can damage the heart; malaria untreated damages the blood and the brain.",
      "**Too little sleep, too little food, too little exercise** — weaken every system at once.",
      "**A hard knock on the head** — damages the brain, which is the part that runs all the others."
    ]},
    {k:"h3", t:"What Keeps the Whole Body Well"},
    {k:"p", t:"The same six habits serve every system: **food from the three groups every day**; **clean, treated water**; **eight to ten hours of sleep**; **an hour of movement a day**; **clean hands, clean food and a latrine**; and **going to the clinic early** when something is wrong. There is no system with its own separate rule — the body is tended as a whole, and it is tended every day."},
    {k:"h3", t:"The Body as a Whole Person"},
    {k:"p", t:"A body is not a machine that a person owns: it is the person. Nobody is laughed at for how their body works — for a limp, a stammer, a patch of skin, a missing limb, a small frame or a slow hand. A class that understands the systems understands that a body working differently is still a person's own, and that what everybody needs is the same: food, water, sleep, safety, respect and a clinic when they are ill."}
  ],
  focus:[
    "The seven systems and the organs in each",
    "What each system does and what it needs",
    "How two systems depend on each other",
    "What damages a system",
    "The six habits that keep the whole body well",
    "The body as a whole person, and nobody laughed at"
  ],
  terms:[
    {t:"system", d:"a group of organs working together for one job", x:"The circulatory system is the heart, the blood and the vessels."},
    {t:"organ", d:"a part of the body with a special work", x:"The heart is an organ."},
    {t:"skeletal system", d:"the bones and joints", x:"The skeletal system holds the body up."},
    {t:"muscular system", d:"the muscles that move the body", x:"The muscular system moves the bones."},
    {t:"circulatory system", d:"the heart, the blood and the blood vessels", x:"The circulatory system carries oxygen."},
    {t:"respiratory system", d:"the nose, the windpipe and the lungs", x:"The respiratory system takes in air."},
    {t:"digestive system", d:"the mouth, stomach, liver and intestines", x:"The digestive system breaks food down."},
    {t:"excretory system", d:"the kidneys, the bladder, the skin and the lungs", x:"The excretory system cleans the blood."},
    {t:"nervous system", d:"the brain, the spinal cord and the nerves", x:"The nervous system carries messages."},
    {t:"oxygen", d:"the part of the air the body must have", x:"The blood carries oxygen to every part."},
    {t:"marrow", d:"the soft part inside a bone that makes blood", x:"The marrow makes new blood cells."},
    {t:"calcium", d:"the mineral that builds the bones and teeth", x:"Milk and greens give calcium."}
  ],
  facts:[
    {q:"Name the seven systems of the body.", a:"Skeletal, muscular, circulatory, respiratory, digestive, excretory, nervous — with the reproductive system as the eighth, studied in Period IV."},
    {q:"What does the circulatory system do?", a:"It carries oxygen, food, heat and the defence cells to every part and carries waste away."},
    {q:"Which system makes blood?", a:"The skeletal system — the marrow inside the bones makes new blood cells."},
    {q:"Give one example of two systems working together.", a:"The lungs take in air, the blood carries the oxygen to a muscle, and the muscle moves a bone — four systems in one breath."},
    {q:"Name two things that damage the lungs.", a:"Cigarette smoke and bad air, and an untreated cough."},
    {q:"Name three habits that keep every system well.", a:"Food from the three groups, clean water, eight to ten hours of sleep, an hour of movement, clean hands, and going to the clinic early."},
    {q:"How much sleep does a pupil of this age need?", a:"About eight to ten hours a night."},
    {q:"Why is nobody laughed at for the way their body works?", a:"Because a body working differently is still a person's own, and what everybody needs is the same: food, water, sleep, safety, respect and a clinic."}
  ],
  tf:[
    {s:"The marrow inside the bones makes blood.", a:"true", why:"The skeletal system makes new blood cells in the marrow."},
    {s:"The lungs digest the food.", a:"false", why:"The digestive system does; the lungs take in air."},
    {s:"Smoking damages only the lungs.", a:"false", why:"It damages the lungs and then the heart and the blood vessels."},
    {s:"The nervous system carries messages to every part of the body.", a:"true", why:"The brain, the spinal cord and the nerves do that work in an instant."},
    {s:"Each system has its own separate rule for keeping well.", a:"false", why:"The same six habits serve every system, because the body is one whole."},
    {s:"A pupil of this age needs about eight to ten hours of sleep.", a:"true", why:"Sleep is when the body repairs itself in every system at once."}
  ],
  classify:{
    title:"Which system does the organ belong to?",
    groups:[
      {name:"Circulatory", items:["heart","blood","blood vessels"]},
      {name:"Respiratory", items:["nose","windpipe","lungs"]},
      {name:"Digestive", items:["mouth","stomach","liver","intestines"]},
      {name:"Excretory", items:["kidneys","bladder","skin","lungs"]},
      {name:"Nervous", items:["brain","spinal cord","nerves"]},
      {name:"Skeletal and muscular", items:["bones","joints","skull","muscles"]}
    ]
  },
  diagram:{
    title:"The systems and their work",
    caption:"Write the work of each system and one thing that damages it.",
    parts:[
      {p:"Skeletal", f:"holds the body up and makes blood — damaged by a hard knock and by too little calcium"},
      {p:"Muscular", f:"moves the bones and keeps the heart beating — damaged by no exercise"},
      {p:"Circulatory", f:"carries oxygen, food and defence cells — damaged by smoke and by too little iron"},
      {p:"Respiratory", f:"takes air in and waste gas out — damaged by smoke and bad air"},
      {p:"Digestive", f:"breaks food down — damaged by dirty water, dirty hands and worms"},
      {p:"Excretory", f:"cleans the blood — damaged by too little water"},
      {p:"Nervous", f:"thinks, remembers and carries messages — damaged by hard knocks to the head and by drugs"}
    ]
  },
  experiment:{
    title:"Exercise and the Pulse Rate",
    aim:"To show the circulatory and respiratory systems answering together.",
    materials:["A clock or watch with a second hand","Paper and pencil","A graph grid drawn on the board for the class results"],
    steps:[
      "Sit quietly and count the pulse at the wrist or the neck for one minute; write the number down.",
      "Count the breathing for one minute as well; write that down.",
      "Walk briskly, or run on the spot, for two minutes.",
      "Sit down and at once count the pulse and the breathing again for one minute.",
      "Rest for five minutes and count both a third time.",
      "Put the class's three sets of numbers on the graph grid on the board."
    ],
    expect:"The pulse and the breathing both rise sharply after the exercise and come back towards the resting numbers after five minutes.",
    why:"The muscles needed more oxygen, so the lungs breathed faster to get it in and the heart pumped faster to carry it — two systems answering one need, which is what a system is for."
  },
  apply:[
    {q:"You ran all the way to school and your heart is pounding and you are out of breath. Explain what is happening.", a:"The muscles needed more oxygen, so the lungs breathed faster and the heart pumped faster to carry it; it settles as the body recovers."},
    {q:"A man in your compound smokes and coughs every morning. What is happening inside him?", a:"The smoke is damaging his lungs, and the heart then has to work harder to carry oxygen round the body."},
    {q:"Your friend eats only rice and oil and is always tired. Which systems are suffering, and why?", a:"Every system: without protein the muscles and blood cannot be built, without vitamins and minerals the defence and the blood fail, and without them the whole body is tired."},
    {q:"A boy in your class uses a stick to walk and some children imitate him. What do you do?", a:"Stop the imitation; his body is his own and works in its own way, and he needs the corridor kept clear, not an audience."},
    {q:"Name one habit that serves all seven systems at once, and say why.", a:"Sleep — because the body repairs itself in every system while a person sleeps. Or clean water, which every system needs."}
  ],
  activities:[
    "Chart work: the systems, their organs and their work, drawn and labelled",
    "Exercise and the Pulse Rate, with the class graph on the board",
    "Matching game: organ cards placed against the system they belong to",
    "Two-system talk: the class explains, in its own words, what happens in one breath and in one run",
    "Poster: “One body, seven systems”, drawn for the health fair",
    "Science journal: the pulse graph, with one line on what the two systems did together"
  ],
  materials:[
    "A chart of the systems of the body, drawn by the teacher",
    "Organ and system word cards for the matching game",
    "A clock with a second hand",
    "Graph grid on the board, paper and pencils",
    "Poster paper and crayons",
    "The guide's internet links where the school has them"
  ],
  aids:[
    "Chart of the systems of the body",
    "Organ and system cards",
    "A clock with a second hand",
    "The graph grid",
    "Poster paper and crayons"
  ],
  home:[
    "Count your pulse sitting and after two minutes of running, and bring both numbers to class",
    "Name the seven systems to somebody at home and say what each does",
    "Check your own day: how many hours of sleep, how much water, how much movement, and how much food from each group",
    "Draw one system in your journal with its organs labelled"
  ],
  assessment:[
    "Oral quiz: the seven systems, their organs and their work",
    "Matching task: organ to system, with a reason for each",
    "The pulse graph: three sets of numbers, and a line saying what the two systems did",
    "Written work: true or false with reasons, six items",
    "Poster: “One body, seven systems” for the health fair",
    "Science journal: one system drawn and labelled, with what it needs and what damages it"
  ]
},

/* ----------------------------- GRADE 6 · PERIOD II ---------------------------- */
{
  grade:6, period:"II", sem:"One", icon:"💛", healthPlan:true,
  title:"Preventing HIV and AIDS; Human Reproduction",
  subtitle:"Health strand · the preventive measures against HIV/AIDS and the facts of human reproduction (guide p. 66, objectives 5 and 6)",
  outcomes:[
    "State the preventive measures against HIV and AIDS",
    "Discuss human reproduction and its stages",
    "Treat a person living with HIV with respect, and know where testing and treatment are found"
  ],
  objectives:[
    "Explain how HIV is transmitted and how it is not transmitted",
    "State the preventive measures against HIV and AIDS",
    "State the impact of HIV on the body's defence system",
    "Outline the stages of human reproduction",
    "Explain how a mother-to-child transmission is prevented",
    "Say where testing, treatment and care are found, and why stigma is a health danger"
  ],
  safeguard:"HIV is taught as a health fact, never as a judgement. No child is asked whether anybody at home is sick, is taking medicine or has been tested, and no pupil is named, pointed at, avoided or made to speak for a family. Nobody in the class is ever asked to say who they think might be infected. Stigma is taught as the danger it is — it keeps people from testing and from treatment. A disclosure is listened to once, written in the child's own words and taken to the head teacher and the carer the same day; a child's own HIV status is private health information and is never discussed in a classroom.",
  note:"**HIV** is a virus that attacks the very cells that run the **immune system** — the body's defence — which is why the guide asks pupils to state its impact on that defence. It is **not** spread by touch, by sharing a cup, by a mosquito, by saliva, by tears, by sitting together or by caring for somebody. It **is** prevented, treated and lived with: **testing** is private and free, and **treatment** taken every day keeps a person well for a long life.",
  study:[
    {k:"h3", t:"What HIV Does to the Defence"},
    {k:"p", t:"The **immune system** is the body's defence: the white cells, the lymph nodes, the spleen and the linings that keep germs out. HIV enters the very cells that command that defence and uses them to make copies of itself, so the defence slowly loses its commander. When the defence has been weak for a long time, germs that a healthy body shrugs off become dangerous — and that stage is called **AIDS**. The guide asks pupils to **state the impact of HIV/AIDS on the body's defence system**, and that is the whole of it: the defence is weakened, and the person is then ill with infections a well body would have beaten."},
    {k:"h3", t:"How HIV Is Transmitted — and How It Is Not"},
    {k:"table", head:["It is transmitted","It is not transmitted"],
     rows:[
      ["Through unprotected sex with a person who has the virus","By touch, a handshake, a hug or a kiss on the cheek"],
      ["Through blood: a used needle, a used blade, an unclean instrument, an unscreened transfusion","By sharing a cup, a plate or a spoon that has been washed"],
      ["From a mother to her baby, in pregnancy, birth or breastfeeding, when it is not prevented","By a mosquito, a bed bug or any insect"],
      ["","By saliva, tears, sweat or a cough"],
      ["","By sharing a latrine, a classroom, a desk or a bed"],
      ["","By caring for somebody, teaching them, or sitting beside them"]
     ]},
    {k:"h3", t:"The Preventive Measures"},
    {k:"num", items:[
      "**Abstinence** — not having sex is the surest prevention, and the one this class recommends to a pupil.",
      "**Being faithful to one uninfected partner** — the guide's own measure for adults.",
      "**A condom, used correctly every time**, for adults who choose to have sex.",
      "**Never sharing a needle, a blade or a razor**, and never touching another person's blood with bare hands.",
      "**Screening** of every blood transfusion, and only clinic or hospital instruments used for cutting, piercing or injection.",
      "**Preventing mother-to-child transmission** — a pregnant woman is tested at the clinic and given medicine, and the baby is given medicine after birth.",
      "**Testing and treatment** — a person who knows their status and takes the clinic's medicine every day can live a long life and cannot pass the virus on.",
      "**Do not circumcise, scarify or pierce with an unclean instrument**, and do not share a toothbrush."
    ]},
    {k:"h3", t:"Testing, Treatment and Care"},
    {k:"p", t:"Testing is done at the **clinic** or at a **voluntary counselling and testing (VCT) point**. It is **private**, it is **free**, and there is **counselling before and after**. A person who tests positive is not given a sentence: they are given **antiretroviral medicine**, taken every day, which lets the defence recover, keeps the person well for decades, and — taken properly — brings the virus down so far that it cannot be passed to another person. A person living with HIV needs **food from the three groups, clean water, treatment for infections, rest and respect**; the guide's own line is that nutrition helps people living with HIV live longer."},
    {k:"h3", t:"Human Reproduction: The Stages"},
    {k:"bul", items:[
      "**Ovulation** — an egg is released from an ovary, about once a month.",
      "**Fertilization** — a sperm meets the egg, usually in the fallopian tube.",
      "**Conception and implantation** — the joined egg settles in the lining of the womb.",
      "**Pregnancy** — the baby grows in the womb for about nine months, fed through the placenta.",
      "**Labour and delivery** — the womb pushes the baby out through the birth canal, or a health worker delivers it by operation when that is safer.",
      "**After the birth** — the placenta is delivered, breastfeeding begins, and both mother and baby are seen at the clinic."
    ]},
    {k:"h3", t:"Stigma Is a Health Danger"},
    {k:"p", t:"**Stigma** — laughing at a person, pointing, avoiding them, or saying their illness is a punishment — drives people away from testing and away from the medicine that keeps them alive. That is why the guide's teaching on HIV is also teaching on respect: a person living with HIV goes to school, teaches, plays, works and is loved like anybody else. In this class nobody is named, nobody is avoided, and nobody is made to speak for a family's illness."}
  ],
  focus:[
    "What HIV does to the body's defence",
    "How HIV is transmitted, and how it is not",
    "The eight preventive measures",
    "Testing, treatment and living a long life with HIV",
    "The stages of human reproduction",
    "Stigma is a health danger: nobody is named, avoided or shamed"
  ],
  terms:[
    {t:"HIV", d:"the virus that attacks the cells that run the body's defence", x:"HIV weakens the immune system."},
    {t:"AIDS", d:"the stage when the defence is too weak and other infections take hold", x:"AIDS develops when HIV is untreated for a long time."},
    {t:"immune system", d:"the body's defence against germs", x:"HIV attacks the immune system itself."},
    {t:"antiretroviral", d:"the medicine taken every day that keeps a person with HIV well", x:"Antiretroviral medicine is taken for life."},
    {t:"VCT point", d:"the place where a person is tested for HIV with counselling", x:"Testing at the VCT point is private and free."},
    {t:"counselling", d:"talking with a trained person before and after a test", x:"Counselling comes before and after the test."},
    {t:"screening", d:"testing blood before it is given to somebody", x:"Screening of transfusions prevents HIV."},
    {t:"transmission", d:"the passing of an infection from one person to another", x:"Mother-to-child transmission can be prevented."},
    {t:"fallopian tube", d:"the tube along which the egg travels from the ovary", x:"Fertilization usually happens in the fallopian tube."},
    {t:"placenta", d:"the part that feeds the baby inside the womb", x:"The placenta feeds the baby for nine months."},
    {t:"stigma", d:"shaming a person for an illness", x:"Stigma keeps people from the clinic."},
    {t:"abstinence", d:"choosing not to have sex", x:"Abstinence is the surest prevention for a pupil."}
  ],
  facts:[
    {q:"What does HIV do to the body?", a:"It attacks the very cells that command the immune system, so the defence is slowly weakened and infections a well body would beat become dangerous."},
    {q:"Name four ways HIV is not transmitted.", a:"Not by touch, hugging, sharing a washed cup, a mosquito, saliva, tears, a latrine, or caring for somebody."},
    {q:"Name three ways it is transmitted.", a:"Unprotected sex, blood through a used needle or unclean instrument, and from a mother to her baby when it is not prevented."},
    {q:"Name four preventive measures.", a:"Abstinence, faithfulness to one uninfected partner, correct condom use, never sharing a needle or blade, screened blood, and preventing mother-to-child transmission."},
    {q:"Where is testing done, and what is it like?", a:"At the clinic or a VCT point; it is private, free, and there is counselling before and after."},
    {q:"What does treatment do?", a:"Antiretroviral medicine taken every day lets the defence recover, keeps a person well for decades, and lowers the virus so far that it cannot be passed on."},
    {q:"Name the stages of human reproduction.", a:"Ovulation, fertilization, conception and implantation, pregnancy, labour and delivery, and the care of the mother and baby after."},
    {q:"Why is stigma a health danger?", a:"Because it drives people away from testing and from the medicine that keeps them alive."}
  ],
  tf:[
    {s:"HIV can be caught by sharing a cup.", a:"false", why:"It is not spread by cups, plates, touch, a mosquito, saliva or tears."},
    {s:"HIV attacks the body's defence system.", a:"true", why:"That is why a person with untreated HIV becomes ill from infections a healthy body would beat."},
    {s:"A person with HIV who takes the medicine every day can live a long life.", a:"true", why:"Treatment lets the defence recover and keeps the person well for decades."},
    {s:"Testing for HIV costs money and is not private.", a:"false", why:"At the clinic or the VCT point it is free and private, with counselling before and after."},
    {s:"Fertilization usually happens in the fallopian tube.", a:"true", why:"The egg travels down the tube and meets the sperm there."},
    {s:"Laughing at a person because they have HIV is harmless.", a:"false", why:"Stigma drives people from testing and treatment; it is a health danger."}
  ],
  classify:{
    title:"Transmitted or not?",
    groups:[
      {name:"Transmitted", items:["unprotected sex","a used needle or blade","an unclean instrument","from a mother to her baby when not prevented"]},
      {name:"Not transmitted", items:["a handshake","a hug","sharing a washed cup","a mosquito","saliva or tears","sharing a latrine","caring for a person"]},
      {name:"Preventive measures", items:["abstinence","faithfulness to one uninfected partner","a condom used correctly","never sharing a blade","screened blood","preventing mother-to-child transmission"]}
    ]
  },
  diagram:{
    title:"The stages of human reproduction",
    caption:"Put the six stages in order and write one line about each.",
    parts:[
      {p:"Ovulation", f:"an egg is released from an ovary"},
      {p:"Fertilization", f:"a sperm meets the egg, usually in the fallopian tube"},
      {p:"Conception and implantation", f:"the joined egg settles in the lining of the womb"},
      {p:"Pregnancy", f:"the baby grows for about nine months, fed through the placenta"},
      {p:"Labour and delivery", f:"the baby is born, with a health worker present"},
      {p:"After the birth", f:"the placenta is delivered, breastfeeding begins, and both are seen at the clinic"}
    ]
  },
  experiment:{
    title:"The Care and Prevention Poster",
    aim:"To make, from the class's own words, a correct poster on prevention and on care.",
    materials:["Poster paper and markers","The class's own list of preventive measures","The chart of how HIV is and is not transmitted","A checklist the teacher uses before any poster is shown: true, kind, and nobody named"],
    steps:[
      "The class writes the eight preventive measures in its own words.",
      "In groups, choose four and make a poster that a Grade 4 pupil could understand.",
      "Add one line on where testing is found and that it is free and private.",
      "Add one line on how a person living with HIV is treated in this school.",
      "The teacher checks each poster against the checklist: is it true, is it kind, and does it name nobody?",
      "The checked posters are hung in the school and shown at the health fair."
    ],
    expect:"Posters that are factually right, kind in tone, and that name no person — hung where other classes will read them.",
    why:"The preventive measures only work when the whole school knows them, and a class that can say them in its own words has learned them; the checklist keeps the campaign from becoming the stigma it is meant to end."
  },
  apply:[
    {q:"A boy in your class has HIV and some parents want him moved to another school. What should happen?", a:"He stays. HIV is not spread by sitting, playing or sharing a classroom; he takes his medicine, and the school's answer is a health talk, not a removal."},
    {q:"Your aunt is pregnant and has not been to the clinic. What do you say to the family?", a:"She goes to the clinic early — testing and medicine prevent HIV passing to the baby, and they prevent many other dangers of pregnancy too."},
    {q:"Somebody says a person with HIV can be recognised by looking at them. What do you say?", a:"No, you cannot tell by looking; a person with HIV can look and work like anybody else, and guessing is how stigma starts."},
    {q:"Name one preventive measure a pupil of your age can carry out today.", a:"Abstinence; never sharing a blade, a razor or a needle; and never touching another person's blood with bare hands."},
    {q:"Why does the class check every campaign poster before it is shown?", a:"Because a wrong message can do harm, and a message that names or shames somebody becomes the very stigma the lesson is against."}
  ],
  activities:[
    "Chart work: how HIV is transmitted and how it is not, sorted into two columns",
    "The Care and Prevention Poster, made in groups and checked by the teacher before it is shown",
    "The stages of human reproduction, ordered on the board and copied into the journal",
    "Talk on testing and treatment: where the VCT point is, what the test is like, and what the medicine does",
    "Whole-class line, said three times: “Nobody is named. Nobody is avoided. Stigma is a danger.”",
    "Letter to a Grade 4 pupil on what HIV is and is not, read to the class and checked before it is sent"
  ],
  materials:[
    "Charts of the immune system and of the stages of reproduction",
    "Poster paper and markers",
    "The two-column transmission board",
    "Information about the nearest clinic and VCT point",
    "The checklist: true, kind, and nobody named",
    "The guide's internet links where the school has them"
  ],
  aids:[
    "Charts of the immune system and of reproduction",
    "Poster paper and markers",
    "The two-column board",
    "The clinic and VCT information",
    "The poster checklist"
  ],
  home:[
    "Tell your family four ways HIV is not transmitted — touch, cups, a mosquito, sharing a latrine",
    "With a grown-up, find out where the nearest clinic or VCT point is, and whether testing is free",
    "Say to your family: nobody is named or avoided because of an illness; stigma is a danger",
    "Write in your journal one line on what you would say to a person who is afraid to be tested"
  ],
  assessment:[
    "Oral quiz: transmission, prevention, the impact on the defence, the stages of reproduction",
    "Two-column sort: transmitted and not transmitted, with a reason for each",
    "The prevention poster, checked against the checklist and explained to the class",
    "The reproduction stages: six in order, with a line about each",
    "True or false with reasons: six items",
    "Science journal: the letter to a Grade 4 pupil, checked and copied"
  ]
},

/* ---------------------------- GRADE 6 · PERIOD III ---------------------------- */
{
  grade:6, period:"III", sem:"One", icon:"🦠", healthPlan:true,
  title:"Communicable and Non-Communicable Disease",
  subtitle:"Health strand · the germs and parasites that cause disease — communicable and non-communicable disease, how each spreads, and how each is prevented (guide p. 66, “animal parasites: protozoa, fungi, viruses and bacteria”, with the prevention work of the unit)",
  outcomes:[
    "Explain the difference between a communicable and a non-communicable disease",
    "Name the germs and parasites that cause disease and how each reaches a person",
    "State the preventive measures for the common diseases of this community"
  ],
  objectives:[
    "Name the four kinds of germ the guide lists — protozoa, fungi, viruses and bacteria",
    "Give one disease caused by each",
    "Tell a communicable disease from a non-communicable one",
    "Name the routes a communicable disease uses: water, food, air, hands, blood, insects and contact",
    "State the preventive measures for malaria, diarrhoea, cholera, typhoid, worms, TB, HIV and skin disease",
    "Say which diseases of this community are not caught from a person at all"
  ],
  safeguard:"Disease is taught as a health fact, never by pointing at a person. No child is asked who in their family is ill, what anybody at home takes medicine for, or whether there is a particular illness in their house, and no pupil is named, avoided or made to speak for a family. A child who is often ill is helped quietly: the teacher speaks to the family so that the child is taken to a clinic. Diseases that carry stigma — HIV, TB, epilepsy, a skin condition — are named only as diseases, and the class is told plainly that nobody in it is ever pointed at because of one. Anything a child says that worries you is written in the child's own words and reported to the head teacher the same day.",
  note:"A **communicable** disease passes from one person or one living thing to another — through water, food, air, hands, blood, an insect or contact. A **non-communicable** disease does not pass from person to person: it comes from the body itself, from what a person takes in over years, or from the way they live. Both kinds are **prevented**, and prevention is cheaper than the cure.",
  study:[
    {k:"h3", t:"The Four Kinds of Germ"},
    {k:"table", head:["Kind of germ","What it is","Diseases it causes","How it is stopped"],
     rows:[
      ["Virus","Smaller than a bacterium; grows only inside a living cell","HIV, hepatitis B, measles, the common cold","Immunisation, clean hands, no sharing of blades or needles, and treatment"],
      ["Bacterium","A single living cell that can grow anywhere in the body","Cholera, typhoid, TB, a sore throat, a wound infection","Clean water and food, immunisation, treatment for the whole course, and covering a wound"],
      ["Protozoon","A tiny one-celled animal, often carried by an insect or by water","Malaria, amoebic dysentery","A net, cleared standing water, clean water, and treatment early"],
      ["Fungus","A mould-like germ that grows on warm, damp skin","Ringworm, fungal infection between the toes, thrush","Dry skin, clean underclothes, no sharing of towels or combs, and treatment"]
     ]},
    {k:"h3", t:"Communicable: The Seven Routes"},
    {k:"bul", items:[
      "**Water** — cholera, typhoid, diarrhoea, worms. Prevented by treated or boiled water, a covered container and a latrine.",
      "**Food** — typhoid, diarrhoea. Prevented by washing hands and food, cooking through, covering from flies and eating fresh.",
      "**Air and droplets** — TB, measles, coughs and colds, meningitis. Prevented by immunisation, airing a room, covering a cough, and treating a cough that lasts.",
      "**Hands and surfaces** — diarrhoea, worms, sore eyes. Prevented by washing hands with soap at the four times, and by not sharing towels.",
      "**Blood and instruments** — HIV, hepatitis B. Prevented by never sharing a needle, blade or razor, by screening transfusions, and by clean clinic instruments.",
      "**Insects** — malaria. Prevented by a treated net, cleared standing water, covered arms and legs at dusk, and a clinic the same day for a fever.",
      "**Contact and shared things** — scabies, ringworm, sore eyes, nits. Prevented by your own towel, comb, cloth and underclothes, and by treatment."
    ]},
    {k:"h3", t:"Non-Communicable Disease"},
    {k:"p", t:"A **non-communicable disease** is not caught from anybody. It comes from the body itself, from what a person takes in over years, or from the way they live. In this community they include **sickle cell disease** (inherited, not caught), **high blood pressure** and **diabetes** (from food, weight and years), **asthma**, **tooth decay**, and the damage that **alcohol, tobacco and drugs** do to the liver, the lungs and the heart. Some are inherited and cannot be prevented, only cared for; most are made less likely by the same six habits — food from the three groups, clean water, sleep, movement, no smoke and no bad substances. A person with a non-communicable disease is not contagious: they sit, learn and work with everybody else."},
    {k:"h3", t:"Prevention, Cheaper Than the Cure"},
    {k:"num", items:[
      "**Malaria** — a treated net every night, cleared standing water, a clinic the same day for a fever.",
      "**Diarrhoea and cholera** — clean water, a latrine, handwashing with soap, oral rehydration salt at once.",
      "**Typhoid** — clean water, cooked food, handwashing, and no flies on the food.",
      "**Worms** — shoes, handwashing, a latrine, deworming at the clinic, and clean food.",
      "**TB** — airing the room, covering a cough, immunisation, and finishing the whole course of medicine for a cough that lasts more than two weeks.",
      "**HIV and hepatitis B** — no sharing of blades or needles, screened blood, clean clinic instruments, abstinence, and testing.",
      "**Skin disease** — your own towel and comb, dry skin, clean underclothes, and treatment."
    ]}
  ],
  focus:[
    "The four kinds of germ and the diseases they cause",
    "The seven routes a communicable disease uses",
    "Non-communicable disease: not caught from anybody",
    "Prevention for the common diseases of this community",
    "Which diseases carry stigma, and why nobody is pointed at",
    "The class prevention chart for the health fair"
  ],
  terms:[
    {t:"communicable", d:"able to pass from one person or living thing to another", x:"Malaria and cholera are communicable diseases."},
    {t:"non-communicable", d:"not passed from person to person", x:"Sickle cell disease is non-communicable."},
    {t:"virus", d:"a germ that grows only inside a living cell", x:"HIV and measles are caused by viruses."},
    {t:"bacterium", d:"a single-celled germ", x:"Cholera and typhoid are caused by bacteria."},
    {t:"protozoon", d:"a tiny one-celled animal, often carried by an insect", x:"Malaria is caused by a protozoon."},
    {t:"fungus", d:"a mould-like germ that grows on damp skin", x:"Ringworm is caused by a fungus."},
    {t:"parasite", d:"a living thing that lives in or on another and harms it", x:"The malaria parasite lives in the blood."},
    {t:"route", d:"the way a germ reaches a person", x:"Dirty water is the route of cholera."},
    {t:"inherited", d:"passed from parents to a child in the body, not caught", x:"Sickle cell disease is inherited."},
    {t:"contagious", d:"able to be caught from another person", x:"A non-communicable disease is not contagious."},
    {t:"deworming", d:"the medicine given at the clinic to clear worms", x:"Deworming is given at the clinic and at school."},
    {t:"immunisation", d:"the safe way of teaching the defence to know a germ", x:"Immunisation prevents measles and TB."}
  ],
  facts:[
    {q:"Name the four kinds of germ and one disease each.", a:"Virus — HIV or measles; bacterium — cholera or typhoid; protozoon — malaria; fungus — ringworm."},
    {q:"What is a communicable disease?", a:"One that passes from person to person or from another living thing, through water, food, air, hands, blood, an insect or contact."},
    {q:"Name three non-communicable diseases.", a:"Sickle cell disease, high blood pressure, diabetes, asthma and tooth decay."},
    {q:"Is sickle cell disease caught from a person?", a:"No. It is inherited from parents, and a person with it sits and learns with everybody else."},
    {q:"Name three ways malaria is prevented.", a:"Sleeping under a treated net, clearing standing water, and going to the clinic the same day for a fever."},
    {q:"How is cholera prevented?", a:"By clean treated water, a latrine, handwashing with soap, and oral rehydration salt at once if it comes."},
    {q:"Why must a TB course be finished?", a:"Because stopping early lets the germs survive and come back stronger, and it spreads to other people."},
    {q:"Name one disease that carries stigma, and how the class treats it.", a:"HIV or TB or a skin disease — nobody is named, avoided or made to speak for a family, because nobody catches a disease by sitting in a classroom."}
  ],
  tf:[
    {s:"Malaria is caused by a protozoon carried by a mosquito.", a:"true", why:"The Anopheles mosquito carries the malaria parasite into the blood."},
    {s:"Sickle cell disease can be caught from a classmate.", a:"false", why:"It is inherited from parents; it is not contagious."},
    {s:"Cholera is prevented by clean water, a latrine and handwashing.", a:"true", why:"Its route is dirty water and hands."},
    {s:"A course of TB medicine can be stopped when the cough goes.", a:"false", why:"The whole course is finished, or the germs survive and come back stronger."},
    {s:"Ringworm can spread by sharing a comb or a towel.", a:"true", why:"Fungal germs travel on shared cloths and combs."},
    {s:"A person with a non-communicable disease should be kept away from class.", a:"false", why:"Non-communicable disease is not contagious; the person learns and works with everybody."}
  ],
  classify:{
    title:"Communicable or non-communicable?",
    groups:[
      {name:"Communicable", items:["malaria","cholera","typhoid","TB","measles","HIV","hepatitis B","ringworm","scabies"]},
      {name:"Non-communicable", items:["sickle cell disease","high blood pressure","diabetes","asthma","tooth decay","the liver damage of alcohol"]},
      {name:"Route: water and food", items:["cholera","typhoid","diarrhoea","worms"]},
      {name:"Route: air and droplets", items:["TB","measles","coughs and colds","meningitis"]}
    ]
  },
  diagram:{
    title:"The germ, its route and its prevention",
    caption:"Fill in one line for each germ: what it is, how it reaches a person, how it is stopped.",
    parts:[
      {p:"Virus", f:"air, blood, contact — stopped by immunisation, clean hands, clean instruments"},
      {p:"Bacterium", f:"water, food, air — stopped by clean water, cooked food, a latrine and the whole course of medicine"},
      {p:"Protozoon", f:"an insect — stopped by a net, cleared water and a clinic the same day for a fever"},
      {p:"Fungus", f:"damp skin and shared things — stopped by dry skin and your own towel and comb"},
      {p:"Non-communicable", f:"not a route at all — inherited, or built up over years"},
      {p:"The same six habits", f:"food from the three groups, clean water, sleep, movement, no smoke, no bad substances"}
    ]
  },
  experiment:{
    title:"The Route and the Stop",
    aim:"To prove, with a demonstration, how far one germ travels and how one habit stops it.",
    materials:["Glitter or a fine coloured powder","Two chalk circles or two hoops","Soap, water and a towel","The class chart of the seven routes"],
    steps:[
      "Put a little glitter on one child's hands, with the child's agreement.",
      "The child shakes hands with three classmates, opens the door and touches a desk.",
      "The class marks, on the floor plan, everywhere the glitter reached in two minutes.",
      "The child washes with water only; the class looks again.",
      "The child washes properly with soap and dries with their own towel; the class looks a third time.",
      "Record the three results on the class chart and say which route and which stop they show."
    ],
    expect:"The glitter reaches three classmates, the door and the desk; water alone leaves most of it; soap and a towel take it away.",
    why:"This is the hands-and-surfaces route, and it is the route of diarrhoea, worms, typhoid and sore eyes. One habit — soap at the four times — closes it."
  },
  apply:[
    {q:"There is a cough going round the class that has lasted three weeks in one child. What should happen?", a:"The room is aired, coughs are covered, and the child is taken to the clinic — a cough of more than two weeks is checked for TB, and the whole course is finished."},
    {q:"Your family draws water from an open well beside the road. What do you say?", a:"Boil or treat it and keep it covered; an open well beside a road is the route of cholera, typhoid and worms."},
    {q:"A classmate has sickle cell disease and some children will not sit near him. What do you say?", a:"Sickle cell disease is inherited, not caught; he sits with everybody, and he needs water, warmth and a clinic when he is in pain."},
    {q:"Name the one habit that prevents more diseases than any other in this list.", a:"Washing the hands with soap at the four times — it closes the route for diarrhoea, cholera, typhoid, worms and sore eyes."},
    {q:"Why does the class never ask who in the family is ill?", a:"Because a disease is not a person's fault, and a class that asks questions like that becomes a place where people hide their illness instead of getting it treated."}
  ],
  activities:[
    "Chart work: the four kinds of germ, with one disease each",
    "Sorting game: disease cards placed under their route — water, food, air, hands, blood, insects, contact",
    "The Route and the Stop demonstration, with the floor-plan record",
    "Communicable and non-communicable board, filled by the class",
    "Prevention chart: one line for each of the common diseases of this community",
    "Class rule, said together: nobody is named, nobody is avoided, and a disease is not a person's fault"
  ],
  materials:[
    "Charts of the four kinds of germ, drawn by the teacher",
    "Disease cards and route cards for the sorting game",
    "Glitter or fine powder for the demonstration",
    "Soap, water and a towel",
    "Chart paper and crayons for the prevention chart",
    "The guide's internet links where the school has them"
  ],
  aids:[
    "Chart of the four kinds of germ",
    "Disease and route cards",
    "Glitter, soap, water and a towel",
    "Chart paper and crayons",
    "The prevention chart"
  ],
  home:[
    "With a grown-up, name three diseases of your area and the route each one uses",
    "Check the water at home: covered, clean cup, treated or boiled",
    "Say to your family: a disease is not a person's fault, and nobody in our house is hidden away for being ill",
    "Write in your journal the one prevention your family could add this month"
  ],
  assessment:[
    "Oral quiz: the four germs, the seven routes, communicable against non-communicable",
    "Sorting task: disease to route, with a reason for each",
    "The Route and the Stop record: three results and one sentence on what they show",
    "The prevention chart, one line per disease, presented to another class",
    "True or false with reasons: six items",
    "Science journal: one disease of your area, its route, and the prevention your family can carry out"
  ]
},

/* ----------------------------- GRADE 6 · PERIOD IV ---------------------------- */
{
  grade:6, period:"IV", sem:"Two", icon:"🧬", healthPlan:true,
  title:"The Reproductive System, Puberty and Sexual Identity",
  subtitle:"Health strand · the human body: health lessons — the organs and functions of the male and female reproductive systems, the stages of puberty, sexual identity, sexual orientation and discrimination, and the facts of contraception and pregnancy (guide pp. 70–73)",
  outcomes:[
    "Express what we feel about ourselves and that of others, and appreciate our bodies and those of others",
    "Develop a sense of who one is sexually, and understand the facts about sexual orientation and about discrimination",
    "Explain the stages of puberty in boys and girls, and identify the different treatment of girls and boys during puberty"
  ],
  objectives:[
    "Identify the organs of the male and female reproductive systems and describe their structure and function",
    "Explain the stages of puberty in boys and in girls, and why puberty is experienced differently",
    "Tell the facts about sexual orientation, and say why discrimination and bullying are wrong",
    "Explain the facts about contraception in delaying pregnancy",
    "Explain ways to prevent pregnancy, and the sexual and reproductive rights a young person has",
    "Explain the facts of contraception, pregnancy and the menstrual cycle"
  ],
  safeguard:"The guide puts this content in Grade 6 and the class teaches it from charts, from the guide's own words and from case studies with invented characters only. No child is asked about their own body, their own feelings, their own attractions, their own cycle or anybody they know, and no pupil is examined, named, measured or pointed at. The boys' and girls' discussions are held separately, as the guide asks, each with a same-sex teacher or the school health worker where the school can. Nobody is asked to state their own sexual orientation, in class or out of it; the lesson is that every person is treated with respect and never bullied. A disclosure is listened to once, written in the child's own words and taken to the head teacher and the carer the same day — in Liberia, to the police Women and Children Protection Unit and the Ministry of Gender, Children and Social Protection. Send the parent notice the week before.",
  note:"The **reproductive system** is the set of organs that make a baby possible and that make the hormones which change the body at **puberty**. Every person also has a **sexual identity** — a sense of who they are — and people differ in the sex they are **attracted** to: **heterosexual**, **homosexual** or **bisexual**. Difference is a fact about people; **discrimination** and **bullying** are wrong, and every person in this class is safe.",
  study:[
    {k:"h3", t:"The Organs and Their Functions"},
    {k:"table", head:["","The female system","The male system"],
     rows:[
      ["Outside parts","The vulva: the outer and inner lips, the clitoris, the opening that passes urine and the opening to the womb","The penis and the scrotum, which holds the two testicles"],
      ["Inside parts","The vagina, the cervix, the womb (uterus), the two fallopian tubes and the two ovaries","The vas deferens, the seminal vesicles and the prostate, which make and carry the fluid"],
      ["The cells made","An egg, released about once a month from an ovary","Sperm, made in the testicles in very large numbers, all the time after puberty"],
      ["The function","To release an egg, to receive the sperm, to carry and feed a baby for nine months, and to give birth","To make and deliver the sperm, and to make the hormone that changes the body at puberty"],
      ["The hormones","Oestrogen and progesterone, which run the menstrual cycle","Testosterone, which drives the changes of puberty in boys"]
     ]},
    {k:"h3", t:"Puberty: The Stages"},
    {k:"p", t:"**Puberty** is the stage at which the body becomes able to make a baby. It comes in stages, over some years, and the order is often: a growth spurt; hair under the arms and between the legs; the breasts in girls and the testicles and penis in boys; the voice in boys; **menstruation** in girls and **wet dreams** in boys; oily skin and spots in both; and the widening of the hips in girls and of the shoulders in boys. **Why is puberty experienced differently?** Because the age it starts, the speed it runs and the order it takes differ from person to person, all of it normal: some are nine and some are fourteen, some are finished in two years and some take five, and each is a body arriving on its own timetable."},
    {k:"h3", t:"The Treatment of Boys and Girls"},
    {k:"p", t:"The guide asks the class to **identify the different treatment of girls and boys during puberty**, and to act it in a drama showing the difference in treatment at home. What pupils usually find: a girl is given more work and less freedom “for her own safety”; a boy is given more freedom and told not to show feeling; a girl is shamed for her bleeding and a boy is not; a girl is watched and a boy is trusted. Some of that is care, much of it is habit, and none of it is fair. **Fair treatment, respect and equality** are the guide's answers — the same chance at school, the same share of the work at home, and the same right to say no."},
    {k:"h3", t:"Sexual Identity and Sexual Orientation"},
    {k:"p", t:"**Sexual identity** is a person's own sense of who they are as a male or a female person. **Sexual orientation** is the sex a person is attracted to: **heterosexual** means attracted to people of the other sex, **homosexual** means attracted to people of the same sex, and **bisexual** means attracted to people of both sexes. These words describe people, not behaviour that anybody in this class must declare; **no pupil is ever asked to say which they are**. What the guide asks the class to learn is the next sentence: a person with a different sexual orientation is a person, and **teasing, bullying and discrimination** against them are wrong, in the yard, in the classroom, online and in the community. A pupil who is being bullied tells a trusted adult; a pupil who is bullying is stopped, and the teacher records it."},
    {k:"h3", t:"Contraception, the Menstrual Cycle and Pregnancy"},
    {k:"p", t:"The **menstrual cycle** runs from the first day of one bleeding to the first day of the next, usually about twenty-eight days, with **ovulation** near the middle; a pregnancy can begin when a sperm is present around ovulation. **Contraceptives** delay or prevent pregnancy: the **condom** (which also reduces the risk of HIV and other STIs), the **pill**, the **injection**, the **implant**, the **IUD** and **emergency contraception**. Each has strengths, weaknesses and side effects, and a **health worker** explains them at the clinic; no method is taken on a friend's advice. The guide's own line for this age is that **abstinence** — choosing not to have sex — is the surest prevention of pregnancy and of STIs, and it is what this class recommends to a pupil. A young person's **sexual and reproductive rights** include the right to correct information, to say no, to be free from pressure and violence, to privacy at the clinic, and to be treated by a health worker without shame."},
    {k:"h3", t:"Myths and Facts"},
    {k:"p", t:"The guide asks for **questions and answers on myths and facts about puberty**. The class writes the myths it has heard and answers each one: that a girl cannot get pregnant the first time (false); that menstruation is an illness (false); that a boy must prove himself by having sex (false); that spots come from dirt (false — they come from oil and hormones, and squeezing makes them worse); that a girl's body is ready for a baby because she can conceive (false — her body is still growing, which is why teenage birth is dangerous). Each myth is answered with the fact, and the class keeps the list on the wall."}
  ],
  focus:[
    "The organs of the male and female reproductive systems and their functions",
    "The stages of puberty, and why it is experienced differently",
    "The different treatment of boys and girls, and what is fair",
    "Sexual identity and sexual orientation, and why bullying is wrong",
    "The menstrual cycle, contraception and preventing pregnancy",
    "Myths and facts about puberty, answered and kept on the wall"
  ],
  terms:[
    {t:"reproductive system", d:"the organs that make a baby possible", x:"The reproductive system matures at puberty."},
    {t:"ovary", d:"the organ that holds and releases the eggs", x:"Two ovaries release an egg about once a month."},
    {t:"fallopian tube", d:"the tube along which the egg travels to the womb", x:"Fertilization usually happens in the fallopian tube."},
    {t:"womb (uterus)", d:"the organ where a baby grows for nine months", x:"The joined egg settles in the womb."},
    {t:"cervix", d:"the opening of the womb", x:"The cervix opens at the birth of a baby."},
    {t:"testicle", d:"the organ that makes the sperm", x:"The two testicles hang in the scrotum."},
    {t:"hormone", d:"the chemical the body makes that carries messages", x:"Testosterone drives the changes in boys."},
    {t:"sexual identity", d:"a person's own sense of who they are", x:"Sexual identity is a person's own."},
    {t:"sexual orientation", d:"the sex a person is attracted to", x:"Heterosexual, homosexual and bisexual are orientations."},
    {t:"discrimination", d:"treating a person worse because of who they are", x:"Discrimination and bullying are wrong."},
    {t:"abstinence", d:"choosing not to have sex", x:"Abstinence is the surest prevention for a pupil."},
    {t:"reproductive rights", d:"the rights a person has over their own body and their own health", x:"Correct information and the right to say no are reproductive rights."}
  ],
  facts:[
    {q:"Name the inside parts of the female reproductive system.", a:"The vagina, the cervix, the womb (uterus), the two fallopian tubes and the two ovaries."},
    {q:"Name the parts of the male reproductive system.", a:"The penis, the scrotum with the two testicles, the vas deferens, and the seminal vesicles and prostate that make the fluid."},
    {q:"What are the functions of the ovary and of the testicle?", a:"The ovary releases an egg about once a month; the testicle makes sperm and the hormone that changes the body at puberty."},
    {q:"Give three stages of puberty.", a:"A growth spurt; hair under the arms and between the legs; the breasts in girls and the growth of the penis and testicles in boys; the voice breaking; menstruation or wet dreams."},
    {q:"Why is puberty experienced differently?", a:"Because the age it starts, the speed and the order differ from person to person — all normal."},
    {q:"Name the three sexual orientations the guide names.", a:"Heterosexual, homosexual and bisexual."},
    {q:"What must never happen to a pupil because of their orientation?", a:"They must never be teased, bullied or discriminated against; a pupil who is bullied tells a trusted adult and the teacher records it."},
    {q:"Which contraceptive also reduces the risk of HIV and other STIs?", a:"The condom — and only the condom."}
  ],
  tf:[
    {s:"The ovary releases an egg about once a month.", a:"true", why:"That is ovulation, and it is when pregnancy is most likely to begin."},
    {s:"Fertilization usually happens in the womb.", a:"false", why:"It usually happens in the fallopian tube; the joined egg then settles in the womb."},
    {s:"Everybody goes through puberty at the same age and speed.", a:"false", why:"The age, the speed and the order differ from person to person, and all of it is normal."},
    {s:"A pupil can be asked in class which sexual orientation they are.", a:"false", why:"Nobody is ever asked to declare it; the lesson is that every person is respected and never bullied."},
    {s:"Bullying a pupil for a different orientation is wrong.", a:"true", why:"Discrimination and bullying are wrong, in the yard, in the classroom, online and in the community."},
    {s:"A girl who can conceive has a body that is ready to give birth safely.", a:"false", why:"Her body is still growing, which is why teenage birth is dangerous for her and the baby."}
  ],
  classify:{
    title:"Female, male, or both?",
    groups:[
      {name:"Female system", items:["ovary","fallopian tube","womb (uterus)","cervix","vagina","vulva"]},
      {name:"Male system", items:["testicle","scrotum","vas deferens","prostate","penis"]},
      {name:"Both", items:["hormones","puberty","the right to say no","the right to correct information","the right to be respected"]},
      {name:"Nobody's business", items:["another pupil's body","another pupil's cycle","another pupil's orientation","another pupil's family"]}
    ]
  },
  diagram:{
    title:"The female and male reproductive systems",
    caption:"Label each part and write its function beside it.",
    parts:[
      {p:"Ovary", f:"holds and releases the egg, about once a month"},
      {p:"Fallopian tube", f:"carries the egg; where fertilization usually happens"},
      {p:"Womb (uterus)", f:"where the baby grows for about nine months"},
      {p:"Cervix", f:"the opening of the womb"},
      {p:"Vagina", f:"receives the sperm; the way a baby leaves the body"},
      {p:"Testicle", f:"makes the sperm and the hormone of puberty in boys"},
      {p:"Scrotum", f:"holds and protects the two testicles"},
      {p:"Penis", f:"passes urine and delivers the sperm"}
    ]
  },
  experiment:{
    title:"Myths and Facts: The Class Wall",
    aim:"To answer, with facts, the myths the class has actually heard.",
    materials:["Slips of paper and pencils for the myths, written anonymously","A board divided into MYTH and FACT","The guide's own notes and the class charts","A wall sheet to keep the finished list on"],
    steps:[
      "Every child writes one thing they have heard about puberty, without a name, and puts it in the box.",
      "The teacher reads them out and the class sorts each into MYTH or FACT.",
      "For each myth the class writes the fact beside it, from the guide's notes and the charts.",
      "The list is copied onto a wall sheet and kept up for the rest of the term.",
      "A child who wrote a question rather than a myth has it answered at the level it was asked, and taken aside if a grown-up should answer it."
    ],
    expect:"A wall sheet of eight or more myths, each with a correct, short fact beside it, and every question answered.",
    why:"The guide asks for questions and answers on the myths and facts of puberty, because a myth believed at twelve runs a life; the wall answer is there the next time the myth is heard."
  },
  apply:[
    {q:"A girl in your class is told she must stop playing football now that her body has changed. What do you say?", a:"That the change of her body is not a reason to stop anything; the work and the play are shared, and that is what fair treatment means."},
    {q:"Somebody is bullying a boy because they say he is not “man enough”. What do you do?", a:"Say stop, do not join in, go with him to a trusted adult, and make sure the teacher records it."},
    {q:"A friend says a girl cannot get pregnant the first time, so there is no need to wait. What do you say?", a:"That is a myth: she can become pregnant the first time, and waiting — abstinence — is the surest prevention for a pupil."},
    {q:"Somebody asks you in class which orientation you are. What do you say?", a:"That is my own business and nobody is asked to declare it; the lesson is that everybody is respected and nobody is bullied."},
    {q:"A boy says pregnancy is the girl's problem only. What do you say?", a:"Both carry the responsibility; a boy who disappears leaves the girl, both families and the child with everything."}
  ],
  activities:[
    "Show and tell: identify and describe the function of the male and female organs, from the chart (the guide's own activity)",
    "Questions and answers on the myths and facts of puberty, kept on the class wall (the guide's own activity)",
    "Puzzle: match the physical and social changes of puberty to boys and to girls (the guide's own activity)",
    "Drama: the difference in treatment between boys and girls at home, with a talk on fair treatment, respect and equality",
    "Skit on sexual and reproductive rights, showing how a young person applies them to prevent pregnancy (the guide's own activity)",
    "Parent notice sent home the week before; the boys' and girls' groups held separately, as the guide asks"
  ],
  materials:[
    "Diagrams of the male and female reproductive systems (the guide's own material)",
    "Charts of the stages of puberty",
    "Slips of paper and a box for the myths",
    "A board divided into MYTH and FACT, and a wall sheet",
    "The parent notice, sent out the week before",
    "The guide's internet links where the school has them"
  ],
  aids:[
    "Diagrams of the two reproductive systems",
    "Chart of the stages of puberty",
    "The myths box and the wall sheet",
    "The parent notice",
    "The puzzle cards of body changes"
  ],
  home:[
    "Read the parent notice with a grown-up of your own sex and bring back any question, written down",
    "Ask a grown-up what myths they heard about puberty when they were twelve, and bring one to class",
    "Write in your journal one line on what fair treatment of boys and girls looks like in your house",
    "Ask a grown-up where the nearest clinic is for advice on delaying a pregnancy"
  ],
  assessment:[
    "Oral quiz: the organs and their functions; the stages of puberty; orientation and discrimination",
    "The myths-and-facts wall: eight or more myths, each answered with a short fact",
    "The puzzle: physical and social changes matched to boys and to girls, with a reason",
    "The drama on treatment at home, and the class's three promises about fair treatment",
    "True or false with reasons: six items",
    "Teacher's record: the parent notice went out; the groups were held separately; nobody was asked to declare anything about themselves; any disclosure written in the child's own words and passed to the head teacher the same day"
  ]
},

/* ------------------------------ GRADE 6 · PERIOD V ---------------------------- */
{
  grade:6, period:"V", sem:"Two", icon:"⚠️", healthPlan:true,
  title:"Risky Behaviour, STIs and Getting Out of Dangerous Situations",
  subtitle:"Health strand · the second half of the guide's Grade 6 health lessons — risky behaviours that expose a person to STI and HIV infection, how to avoid them and how to get out of them, and why young people choose to wait (guide pp. 70–73)",
  outcomes:[
    "Explain risky behaviours that expose an individual to STI and HIV infection",
    "Identify ways of avoiding risky behaviours and situations",
    "Understand the different circumstances that lead to teenage sex or to abstinence"
  ],
  objectives:[
    "Name the risky behaviours and situations the guide lists",
    "Explain how each one exposes a person to STI and HIV infection",
    "State how to avoid a risky behaviour and how to get out of a risky situation",
    "Explain why young people choose not to have sex, why some choose to, and why some have sex when they do not want to",
    "Practise the steps of getting out of a risky situation, and write the letter the guide asks for",
    "Say what to do when somebody else is in danger"
  ],
  safeguard:"Risky situations are taught from invented case studies only — never from a child's own life, and never with a child asked to say what they have done or where they have been. Role play uses invented characters and invented lines. Nobody is blamed for what happened to them: the blame belongs to the person who pressed, tricked or forced them. A disclosure is listened to once, written in the child's own words and taken to the head teacher and the carer the same day; a recent assault goes to a health facility at once, and in Liberia the case goes to the police Women and Children Protection Unit and the Ministry of Gender, Children and Social Protection.",
  note:"A **risky behaviour** is one that exposes a person to infection, to pregnancy or to harm: drinking liquor, smoking, taking narcotic drugs, being alone in lonely places at night, unprotected sex, and giving in to peer pressure. Each one can be **avoided**, and each situation can be **left**. A young person who waits is not missing something: they are keeping the life they have planned.",
  study:[
    {k:"h3", t:"The Risky Behaviours the Guide Names"},
    {k:"table", head:["Risky behaviour or situation","What it exposes a person to","How it is avoided"],
     rows:[
      ["Drinking liquor","Poor decisions, unsafe sex, violence and accidents","Do not drink; leave the place where people are drinking"],
      ["Smoking","Lung and heart disease, and the habits that lead to other drugs","Do not start; do not keep the company that presses you to"],
      ["Taking narcotic drugs","Addiction, damaged judgement, unsafe sex and shared needles","Do not take them; never share a needle; leave the ghetto"],
      ["Being alone or in lonely places at night","Assault, and the pressure that follows","Do not go; walk with others; tell somebody where you are going"],
      ["Unprotected sex","Pregnancy, HIV and other STIs","Abstinence; and for adults, a condom used correctly every time"],
      ["Peer pressure","All of the above, done to please somebody else","Choose your company; say no early; have an answer ready"],
      ["Accepting gifts, rides or airtime from an older person","A price expected back, which the child cannot refuse later","Do not take them; a gift with a price is not a gift"],
      ["Being under the influence of alcohol or drugs and unable to decide","Sex the person did not choose, and infection","Stay clear of both; and do not leave a friend alone in that state"]
     ]},
    {k:"h3", t:"How to Get Out of a Risky Situation"},
    {k:"num", items:[
      "**Name it early** — the moment you feel “this is not right”, act.",
      "**Say no** — short, loud, and only once: “No. I am going.”",
      "**Give a reason or an excuse if you need one** — an errand, a parent waiting, a phone call. Any excuse is allowed.",
      "**Move to people** — towards the road, the light, the shop, a house with its door open.",
      "**Call somebody** — a parent, a brother, a teacher, anybody who will come.",
      "**Tell afterwards** — the same day, to a trusted adult, and keep telling until somebody helps.",
      "**Do not go back** to that place or that person, and take somebody with you if you must pass it."
    ]},
    {k:"h3", t:"Why Young People Choose Not to Have Sex"},
    {k:"p", t:"The guide asks the class to discuss it in three groups: **why teenagers choose not to have sex**, **why they choose to**, and **why they have sex even when they do not want to**. The answers the class gives are usually honest: they choose not to because of school, because of their plans, because of their parents, because of what they have been taught, because of fear of pregnancy and infection, and because they want to choose for themselves. They choose to because of desire, curiosity, peer pressure, a wish to be loved, a need for money or gifts, or because somebody older pressed them. And they have sex when they do not want to because of pressure, because of drink or drugs, because of a gift that turned into a debt, because they were afraid to say no, or because they were forced — and in that last case it is not sex at all, it is abuse, and it is reported the same day."},
    {k:"h3", t:"Desire Is Natural — and Can Be Managed"},
    {k:"p", t:"The guide's own case study is of two learners: one has decided to abstain but has sexual desires and is attracted to a classmate; another is willing to try sex because he or she feels the desire. The class advises both, and the teacher says plainly that **sexual desire is natural** — it is not a fault and not a dirty thing. What a young person does with it is a choice, and the choices that keep a person safe are: keep busy, keep in company, keep the plan in front of you, avoid the situations and the substances that dissolve judgement, and talk to a trusted adult rather than to a crowd."},
    {k:"h3", t:"When Somebody Else Is in Danger"},
    {k:"p", t:"A friend who is being pressed, a friend who has had too much to drink, a friend who is being walked to a lonely place — these are moments to act, not to watch. **Do not leave them alone; do not let them go with a person they do not want to go with; get an adult; and make a noise if you must.** Being a friend is not the same as being polite, and a friend who is angry with you for tonight will thank you for years."},
    {k:"h3", t:"The Letter the Guide Asks For"},
    {k:"p", t:"The guide asks each pupil to **write a letter to another student in Grade 4 about how to get out of risky situations**, to read it aloud, and to use the letters in a discussion of strategies. The letter is short: name one situation, say the seven steps in your own words, and give one line of encouragement. It is checked by the teacher before it goes, because a younger child is reading it."}
  ],
  focus:[
    "The risky behaviours the guide names, and what each exposes a person to",
    "How each is avoided",
    "The seven steps of getting out of a risky situation",
    "Why young people choose not to, choose to, or are forced",
    "Desire is natural, and can be managed",
    "When somebody else is in danger, and the letter to a Grade 4 pupil"
  ],
  terms:[
    {t:"risky behaviour", d:"something a person does that exposes them to infection, pregnancy or harm", x:"Drinking liquor is a risky behaviour."},
    {t:"risky situation", d:"a place or a set-up in which harm is likely", x:"A lonely place at night is a risky situation."},
    {t:"peer pressure", d:"being pushed by people of your own age", x:"Peer pressure is answered with a prepared no."},
    {t:"narcotic drug", d:"a drug that dulls the mind and leads to addiction", x:"Narcotic drugs destroy judgement."},
    {t:"unprotected sex", d:"sex without a condom", x:"Unprotected sex exposes a person to HIV and pregnancy."},
    {t:"desire", d:"the strong feeling a person has", x:"Sexual desire is natural at this age."},
    {t:"abstinence", d:"choosing not to have sex", x:"Abstinence is the surest prevention."},
    {t:"debt", d:"what is owed; a gift that turns into one is a trap", x:"A gift that becomes a debt was never a gift."},
    {t:"influence", d:"the state of a person whose judgement has been taken by drink or drugs", x:"A person under the influence cannot consent."},
    {t:"consent", d:"a free, willing yes — and only a free yes is a yes", x:"Consent cannot be given under pressure or drink."},
    {t:"strategy", d:"a plan for getting out", x:"The letter to a Grade 4 pupil sets out a strategy."},
    {t:"company", d:"the people you spend time with", x:"Choose company that helps you keep your plan."}
  ],
  facts:[
    {q:"Name six risky behaviours the guide lists.", a:"Drinking liquor, smoking, taking narcotic drugs, being alone or in lonely places at night, unprotected sex and peer pressure."},
    {q:"How does drinking liquor expose a person to HIV?", a:"It takes away judgement, so a person agrees to sex they would not agree to sober, and to sex without a condom."},
    {q:"Name five of the seven steps for getting out of a risky situation.", a:"Name it early; say no; give an excuse if needed; move to people; call somebody; tell the same day; do not go back."},
    {q:"Why do some young people have sex when they do not want to?", a:"Because of pressure, drink or drugs, a gift that turned into a debt, fear of saying no, or force — and the last is abuse, reported the same day."},
    {q:"Is sexual desire a fault?", a:"No. It is natural. What a person does with it is a choice, and there are safe ways to manage it."},
    {q:"Can a person consent while drunk or under the influence?", a:"No. Consent must be free and willing; a person under the influence cannot give it."},
    {q:"What should you do if a friend is being walked to a lonely place against their will?", a:"Do not leave them; do not let them go; get an adult; make a noise if you must."},
    {q:"What is in the letter the guide asks each pupil to write?", a:"One situation, the steps for getting out in the pupil's own words, and one line of encouragement — for a Grade 4 pupil, and checked by the teacher first."}
  ],
  tf:[
    {s:"A gift from an older person is always a gift.", a:"false", why:"A gift that comes with something expected back is a debt, and the child is the one who pays it."},
    {s:"Sexual desire at this age is a fault.", a:"false", why:"It is natural; the choice is what a person does with it."},
    {s:"A person who is drunk cannot give consent.", a:"true", why:"Consent must be free and willing; drink and drugs take that away."},
    {s:"An excuse to get out of a risky situation is allowed.", a:"true", why:"Any excuse that gets a child away safely is a good one — an errand, a parent waiting, a phone call."},
    {s:"A friend being pressed should be left alone so as not to interfere.", a:"false", why:"Do not leave them; get an adult, and make a noise if you must."},
    {s:"The class recommends abstinence to a pupil.", a:"true", why:"It prevents pregnancy and STIs with certainty and keeps the pupil's own plan whole."}
  ],
  classify:{
    title:"Behaviour, situation or way out?",
    groups:[
      {name:"Risky behaviours", items:["drinking liquor","smoking","narcotic drugs","unprotected sex","accepting gifts from an older person"]},
      {name:"Risky situations", items:["a lonely place at night","a party with drink and no grown-up","being alone behind a closed door","a crowd that dares you"]},
      {name:"Ways out", items:["name it early","say no","give an excuse","move to people","call somebody","tell the same day"]},
      {name:"Not a way out", items:["hoping it will stop","keeping it secret","going back to the same place"]}
    ]
  },
  diagram:{
    title:"Getting out: the seven steps",
    caption:"Write the seven steps in order and say which you would use first.",
    parts:[
      {p:"1", f:"name it early — the moment it feels wrong, act"},
      {p:"2", f:"say no — short, loud, once"},
      {p:"3", f:"give an excuse if you need one — any excuse is allowed"},
      {p:"4", f:"move to people — the road, the light, the shop"},
      {p:"5", f:"call somebody — a parent, a brother, a teacher"},
      {p:"6", f:"tell the same day, and keep telling until somebody helps"},
      {p:"7", f:"do not go back to that place or that person"}
    ]
  },
  experiment:{
    title:"The Letter to a Grade 4 Pupil",
    aim:"To write, check and send the letter the guide asks for.",
    materials:["Paper and pencils","The seven steps on the board","The teacher's checklist: true, safe, and nothing that would frighten a younger child","An envelope or a folder to carry the letters"],
    steps:[
      "Choose one risky situation, invented or general — not a real event and not a real person.",
      "Write the letter to a Grade 4 pupil: name the situation, give the steps in your own words, and add one line of encouragement.",
      "Read the draft to a partner, who says whether a Grade 4 child would understand it.",
      "The teacher checks each letter: is it true, is it safe, and does it frighten nobody?",
      "Copy the letter out fairly.",
      "The letters are carried to the Grade 4 class, read aloud, and used there for the discussion of strategies."
    ],
    expect:"A short letter from every pupil, checked, that a ten-year-old could follow — naming a situation, the steps out, and one line of encouragement.",
    why:"The guide asks for this letter because teaching it is the best way to learn it: a pupil who can explain the escape to a younger child has the escape themselves."
  },
  apply:[
    {q:"You are at a gathering where the older people are drinking and it is getting late. What do you do?", a:"Leave with others, not alone, and go home; leaving early is plainer than refusing in the moment."},
    {q:"A friend has had too much to drink and somebody is trying to walk her home. What do you do?", a:"Do not let her go with him; call her family or another adult, stay with her, and make a noise if you must."},
    {q:"An older person has been giving your friend airtime and now says she owes him. What do you say to her?", a:"A gift that becomes a debt was never a gift; she owes him nothing, and we tell a trusted adult the same day."},
    {q:"Somebody says a real man cannot say no. What do you say?", a:"The person who decides for themselves is the one in charge; saying no is the whole point."},
    {q:"Why is the letter written to a Grade 4 pupil and not to a grown-up?", a:"Because a younger child is the one who will meet the situation next, and because teaching the steps is how you learn them."}
  ],
  activities:[
    "Case study of the two learners, with the class advising each and the teacher saying that desire is natural (the guide's own activity)",
    "Role play of the healthy choices open to them, with invented characters only (the guide's own activity)",
    "Brainstorming on the risky behaviours common among adolescents, listed by the class",
    "Drawing competition on the places and things that encourage risky behaviour (the guide's own activity)",
    "Letter writing: a letter to a Grade 4 pupil on getting out of risky situations, read aloud and checked (the guide's own activity)",
    "Role play on being unable to decide while under the influence of alcohol or drugs, and what a friend does"
  ],
  materials:[
    "The two case-study cards with invented learners",
    "Chart paper for the brainstorm",
    "Paper and pencils for the letters, and a folder to carry them",
    "The seven steps written on the board",
    "Drawing paper and crayons for the competition",
    "The guide's internet links where the school has them"
  ],
  aids:[
    "The case-study cards",
    "Chart paper for the brainstorm",
    "Paper, pencils and the folder for the letters",
    "The seven-step board",
    "Drawing paper and crayons"
  ],
  home:[
    "Tell a grown-up at home the seven steps for getting out of a risky situation",
    "With a grown-up, name the places near your house that a child should not go alone at night",
    "Write in your journal one line on what you would do if a friend were being pressed",
    "Ask a grown-up what they were told about risky behaviour when they were twelve"
  ],
  assessment:[
    "Oral quiz: the risky behaviours, what each exposes a person to, and how each is avoided",
    "The seven steps: in order, and applied to one invented situation",
    "The brainstorm chart: the risky behaviours common among adolescents, and the class's avoidances",
    "The letter to a Grade 4 pupil: checked, copied, and carried to the Grade 4 class",
    "True or false with reasons: six items",
    "Teacher's record: no child was asked about their own life; any disclosure written in the child's own words and passed to the head teacher the same day"
  ]
},

/* ----------------------------- GRADE 6 · PERIOD VI ---------------------------- */
{
  grade:6, period:"VI", sem:"Two", icon:"🏃", healthPlan:true,
  title:"Healthy Living: Food, Exercise, Rest, First Aid and Health Services",
  subtitle:"Health strand · the habits of healthy living — food and water, exercise, rest and sleep, avoiding harmful substances, first aid for the accidents of home and school, and using the health services well (guide pp. 70–73, the healthy-living outcome of the unit)",
  outcomes:[
    "Practise the habits that keep a whole body well for life",
    "Give first aid for the accidents of home, school and road",
    "Use the health services well, and know when to go at once"
  ],
  objectives:[
    "Plan a day of food and water from the three food groups",
    "Explain the place of exercise, rest and sleep, and how much a pupil of this age needs",
    "State what alcohol, tobacco and drugs do to a growing body, and refuse them",
    "Give first aid for a bleeding cut, a burn, a suspected fracture, a faint, a nosebleed, a bite and a choking child",
    "Say when a person goes to a health worker at once, and what to bring",
    "Run the end-of-year health fair for the school"
  ],
  safeguard:"First aid is practised on a partner's arm or on a model, never on a real wound, and nobody is asked to remove clothing or to show a part of the body. The teacher demonstrates on their own hands; a real injury is washed, covered and taken to a health worker, and the school treats nothing beyond first aid. Nobody is asked about their own health, their own illnesses, their own sleep or what their family eats. A child who seems unwell, hungry or tired all the time is helped quietly, through the head teacher and the family.",
  note:"**Healthy living** is not one big decision but five ordinary habits kept every day: **food from the three groups**, **clean water**, **an hour of movement**, **eight to ten hours of sleep**, and **no alcohol, tobacco or drugs**. Around them sit two skills that save lives — **first aid** for the accidents that happen anyway, and knowing **when to go to a health worker at once**.",
  study:[
    {k:"h3", t:"Food and Water"},
    {k:"p", t:"A day's food carries something from each group: **energy** foods for the work of the day, **body-building** foods for growth and repair, and **protective** foods for the defence and the blood. A pupil of this age is growing fast and needs all three, in more quantity than a small child, with **clean treated water** through the day — more in the heat and more when working. Skipping the morning meal leaves a body without the fuel to learn; a pupil who comes to school hungry cannot attend to a lesson, and a school that can feed its pupils does."},
    {k:"h3", t:"Exercise, Rest and Sleep"},
    {k:"table", head:["Habit","How much","What it does","What happens without it"],
     rows:[
      ["Exercise","About an hour a day — walking, running, football, work in the garden, play","Builds the heart, the lungs, the muscles and the bones; keeps the weight steady; steadies the mood","A body that does not move grows weak, gains weight and falls sick more often"],
      ["Sleep","About eight to ten hours a night","The body repairs itself, the brain stores what was learned, and growth happens","Poor sleep weakens the defence, spoils memory and mood, and makes learning hard"],
      ["Rest and play","Time in the day that is not work","Lowers the stress that makes a body ill","A person who never rests falls ill and cannot think clearly"],
      ["Water","More in the heat and when working","Carries everything the body needs and takes the waste out","Too little water brings headaches, tiredness and kidney trouble"]
     ]},
    {k:"h3", t:"Alcohol, Tobacco and Drugs"},
    {k:"p", t:"At this age a body and a brain are still being built, which is exactly why these three do their worst damage now. **Alcohol** damages the liver and the brain, and it takes away the judgement that keeps a person safe. **Tobacco** damages the lungs and the heart, and the addiction begins faster in a young body than in an old one. **Narcotic drugs** damage the brain, lead to addiction, and — with a shared needle — carry HIV and hepatitis B. The answer is not “later”: it is **no**, said early, with a reason, in a loud voice; and it is **choosing company** that does not press you."},
    {k:"h3", t:"First Aid"},
    {k:"num", items:[
      "**A bleeding cut** — wash your own hands if you can, press firmly on the cut with a clean cloth, raise the limb, keep pressing until the bleeding stops, then cover it. Do not touch another person's blood with bare hands.",
      "**A burn** — hold it under cool running water for ten minutes, cover it with a clean, non-fluffy cloth, and take the person to the clinic. No oil, no ash, no mud on a burn; and nothing is stuck to it.",
      "**A suspected fracture** — do not move the limb and do not try to straighten it; support it, keep the person still, and take them to the hospital.",
      "**A faint** — lay the person down, raise the legs, loosen the clothing, cool them, and stay; when they wake, give water slowly. Do not crowd round.",
      "**A nosebleed** — sit the person up, lean the head slightly forward, and pinch the soft part of the nose for ten minutes without letting go. Do not tip the head back.",
      "**A bite — dog, snake or insect** — wash the wound with soap and water; a dog bite or a snake bite goes to the clinic at once, and the animal is reported.",
      "**A choking child** — if they cannot speak or cough, give up to five back blows between the shoulder blades, then five thrusts to the upper belly for an older child; call for help at once and keep going.",
      "**Any wound with another person's blood on it** — wash at once with soap and water and tell a grown-up the same day."
    ]},
    {k:"h3", t:"Using the Health Services Well"},
    {k:"p", t:"Know **which** service for **which** problem, and go **early**: a fever goes to the clinic the same day for a test; a deep cut or a burn goes for a dressing and, if needed, a tetanus injection and a check on HIV exposure; a cough of more than two weeks goes for a TB check; a pregnancy goes to the clinic early and often; and anything a child wants to know about their own health can be asked at the clinic, privately. Take the **card**, take the referral note if one is given, and **finish the course** of any medicine. Services are free for much of this, and a child is never kept from a clinic because of money."},
    {k:"h3", t:"The End-of-Year Health Fair"},
    {k:"p", t:"The year closes with a **health fair** run by the class for the school: a handwashing station with soap and the seven steps; a net hung and explained; the pulse and breathing investigation, run for visitors; the balance and the sign charts; the campaign posters from the year; the letter to the Grade 4 pupils on getting out of risky situations; the first-aid demonstration; and the Myths and Facts wall. Pupils run the stands, answer the questions, and mark the younger classes' demonstrations. A fair is not a display of work: it is the year's knowledge being given away."}
  ],
  focus:[
    "A day of food and water from the three groups",
    "Exercise, sleep, rest and water — how much, and why",
    "Alcohol, tobacco and drugs, and the answer of no",
    "First aid for eight accidents of home, school and road",
    "Using the health services well, and going early",
    "The end-of-year health fair, run by the class"
  ],
  terms:[
    {t:"healthy living", d:"the daily habits that keep a body and a mind well", x:"Healthy living is five ordinary habits kept every day."},
    {t:"first aid", d:"the help given at once, before a health worker sees the person", x:"First aid for a cut is pressure with a clean cloth."},
    {t:"fracture", d:"a broken bone", x:"A suspected fracture is not straightened; it is supported."},
    {t:"tetanus", d:"an infection that enters through a dirty wound", x:"A deep or dirty wound needs a tetanus injection at the clinic."},
    {t:"faint", d:"a short loss of consciousness", x:"A person who faints is laid down with the legs raised."},
    {t:"choking", d:"when something blocks the airway", x:"A choking child who cannot speak needs back blows at once."},
    {t:"dehydration", d:"a body without enough water", x:"Dehydration brings headache, tiredness and thirst."},
    {t:"course", d:"the set number of days a medicine is taken", x:"Finish the course even when you feel better."},
    {t:"referral", d:"being sent to a bigger service", x:"The clinic gives a referral note to the hospital."},
    {t:"exercise", d:"moving the body on purpose", x:"An hour of exercise a day builds the heart."},
    {t:"sleep", d:"the hours the body repairs itself", x:"A pupil needs eight to ten hours of sleep."},
    {t:"health fair", d:"a day when the class runs health stands for the school", x:"The class runs the health fair for the other classes."}
  ],
  facts:[
    {q:"Name the five habits of healthy living.", a:"Food from the three groups, clean water, an hour of exercise, eight to ten hours of sleep, and no alcohol, tobacco or drugs."},
    {q:"How much sleep does a pupil of this age need?", a:"About eight to ten hours a night."},
    {q:"How much exercise, and what does it do?", a:"About an hour a day; it builds the heart, the lungs, the muscles and the bones, and steadies the mood."},
    {q:"What is the first aid for a bleeding cut?", a:"Press firmly with a clean cloth, raise the limb, keep pressing until it stops, and cover it — without touching another person's blood with bare hands."},
    {q:"What is the first aid for a burn?", a:"Cool running water for ten minutes, then a clean, non-fluffy cloth, then the clinic. No oil, ash or mud, and nothing stuck to it."},
    {q:"What is done for a suspected fracture?", a:"Do not move or straighten the limb; support it, keep the person still, and take them to the hospital."},
    {q:"What goes on a nosebleed, and what must not be done?", a:"Sit up, lean forward, and pinch the soft part of the nose for ten minutes without letting go; the head is not tipped back."},
    {q:"Why does a deep or dirty wound go to the clinic?", a:"For cleaning, a dressing, a tetanus injection, and a check on exposure to HIV and hepatitis B."}
  ],
  tf:[
    {s:"A pupil needs about eight to ten hours of sleep.", a:"true", why:"Sleep is when the body repairs itself and the brain stores what was learned."},
    {s:"Oil or ash should be put on a burn.", a:"false", why:"Cool running water for ten minutes, then a clean cloth and the clinic; oil, ash and mud make it worse."},
    {s:"A suspected fracture should be straightened before the person is moved.", a:"false", why:"The limb is supported and the person is kept still; straightening it does more damage."},
    {s:"The head is tipped back for a nosebleed.", a:"false", why:"The person sits up and leans forward, and the soft part of the nose is pinched for ten minutes."},
    {s:"Alcohol, tobacco and drugs damage a growing body most.", a:"true", why:"A body and brain that are still being built are the most easily damaged."},
    {s:"A course of medicine can be stopped once the person feels better.", a:"false", why:"The whole course is finished, or the illness comes back stronger."}
  ],
  classify:{
    title:"Which first aid, which habit?",
    groups:[
      {name:"Press and cover", items:["a bleeding cut","a wound with blood on it"]},
      {name:"Cool water for ten minutes", items:["a burn","a scald"]},
      {name:"Keep still and get help", items:["a suspected fracture","a head injury","a snake bite"]},
      {name:"Daily habits", items:["food from three groups","clean water","an hour of exercise","eight to ten hours of sleep"]},
      {name:"Refused every time", items:["alcohol","tobacco","narcotic drugs","a shared needle"]}
    ]
  },
  diagram:{
    title:"First aid: what to do first",
    caption:"Write the first thing you do for each, in one line.",
    parts:[
      {p:"A bleeding cut", f:"press firmly with a clean cloth and raise the limb"},
      {p:"A burn", f:"cool running water for ten minutes, then cover"},
      {p:"A suspected fracture", f:"support it, keep the person still, get help"},
      {p:"A faint", f:"lay them down, raise the legs, cool them, stay"},
      {p:"A nosebleed", f:"sit up, lean forward, pinch the soft part for ten minutes"},
      {p:"A bite", f:"wash with soap and water, then the clinic the same day"},
      {p:"A choking child", f:"five back blows, then five thrusts, and call for help"},
      {p:"Any wound with blood on it", f:"wash at once and tell a grown-up the same day"}
    ]
  },
  experiment:{
    title:"The First-Aid Stations",
    aim:"To practise the eight first-aid actions until the hands know them.",
    materials:["Clean cloths and a triangular bandage","A bowl of clean water and soap","A model or a partner's arm — never a real wound","Cards with one accident on each drawn from the eight","A chart to tick what each group has performed"],
    steps:[
      "The class is divided into stations, one for each of the eight accidents.",
      "The teacher demonstrates each action once, on their own hands or on a model.",
      "In pairs, the children perform the action: press and cover; cool and cover; support and stay; lay and raise; sit, lean and pinch.",
      "The partner checks it against the card and says what was missed.",
      "Pairs move round the stations until every pair has performed all eight.",
      "Each child ticks their own card, and the class keeps the chart for the health fair."
    ],
    expect:"Every pair performs all eight actions, in the right order, on a model or a partner's arm, and no real wound is used at any point.",
    why:"First aid is a skill of the hands, and a skill of the hands is not learned from a chart; practising it at twelve means it is there for the rest of a life."
  },
  apply:[
    {q:"Your brother falls from a mango tree and cannot move his leg. What do you do?", a:"Do not move him and do not straighten the leg; support it, keep him still, send for help, and stay with him until help comes."},
    {q:"A pot of hot soup tips over your sister's arm. What do you do, in order?", a:"Hold the arm under cool running water for ten minutes, cover it with a clean, non-fluffy cloth, and take her to the clinic. No oil, ash or mud."},
    {q:"A friend offers you a cigarette after school and says one will do nothing. What do you say?", a:"No. One is how the addiction begins, and it starts faster in a body my age. Then I walk away and choose my company."},
    {q:"You cut your foot on a rusty tin in the yard. What now?", a:"Wash it with soap and clean water, cover it, and go to the clinic the same day for cleaning, a tetanus injection and a check."},
    {q:"Why does the class run the health fair itself rather than watch the teacher run it?", a:"Because running a stand and answering the questions is how the knowledge becomes yours, and because it gives the year's work away to the rest of the school."}
  ],
  activities:[
    "The First-Aid Stations: eight actions, practised in pairs on a model or a partner's arm",
    "A day's food and water plan, drawn on a plate and checked against the three groups",
    "The pulse and breathing investigation, run again and explained to visitors at the fair",
    "Refusal practice: the lines and the answers, said out loud to a partner",
    "Service map finished: which service for which problem, and the danger signs",
    "The end-of-year health fair: stands run by the pupils for the whole school"
  ],
  materials:[
    "Clean cloths, a triangular bandage, soap and water",
    "The eight accident cards and the tick chart",
    "Paper plates, crayons and food pictures for the day's plan",
    "A clock with a second hand for the pulse investigation",
    "The campaign posters and the Myths and Facts wall from the year",
    "The guide's internet links where the school has them"
  ],
  aids:[
    "Cloths, bandage, soap and water",
    "The eight accident cards and the tick chart",
    "Paper plates and crayons",
    "A clock with a second hand",
    "The posters and the wall sheet"
  ],
  home:[
    "Keep the five habits for one month and tick your chart: food, water, exercise, sleep, and no substances",
    "Show your family the first aid for a bleeding cut and for a burn",
    "Check the first-aid cloth and bandage in your house and put them where everybody knows",
    "Tell your family the danger signs that mean a person goes to a health worker at once"
  ],
  assessment:[
    "Oral quiz: the five habits, the first aid for eight accidents, and when to go at once",
    "The First-Aid Stations: eight actions performed, checked by a partner and ticked",
    "The day's food and water plan, checked against the three groups",
    "The service map: which service for which problem, with the danger signs marked",
    "True or false with reasons: six items",
    "The health fair: every pupil runs a stand, answers questions, and marks a younger class's demonstration"
  ]
},

];
