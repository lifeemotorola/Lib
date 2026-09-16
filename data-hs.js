/* Curriculum data — Republic of Liberia, HEALTH SCIENCE (Elementary strand),
   Grades 1–6.

   This is the HEALTH STRAND of the national Elementary "General Science 1-6"
   curriculum guide (uploads/General Science1-6.pdf, 78 pp.), pulled out of the
   six grade pages the guide devotes to health so that a teacher can plan, print
   and export it as a course of its own. Nothing is invented here: every outcome,
   objective, content line, activity and material comes from the guide page cited
   in each unit's `subtitle`, and the same content also lives inside the General
   Science subject (data-sc.js) under its own period number.

     Grade 1 · Period VI  — Care of the Body (guide pp. 12–13)
     Grade 2 · Period VI  — Exploring Drugs / Exploring My Body (pp. 24–25, 18–19)
     Grade 3 · Period IV  — Investigating How We Care for Our Bodies (pp. 32–33)
     Grade 4 · Period VI  — Health and Personal Hygiene (pp. 48–49, with skin and
                            malaria from pp. 46–47)
     Grade 5 · Period III — Health Lessons (pp. 54–55)
     Grade 6 · Period IV  — The Human Body: Health Lessons (pp. 70–73, with the
                            HIV prevention content of pp. 66–67)

   Each unit is planned as ONE four-week health unit (the guide's own unit
   duration is 3–4 weeks): set "Weeks per unit" to 4 and the period length to
   40 minutes, then generate Daily plans or a Weekly unit plan.

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

/* ============================ GRADE 1 · PERIOD VI ============================ */
{
  grade:1, period:"VI", sem:"Two", icon:"🧼", healthPlan:true,
  title:"Caring for My Body",
  subtitle:"Health strand · body parts and how to care for them, handwashing, private parts, good and bad substances and what small children should know about HIV (guide pp. 12–13)",
  outcomes:[
    "Use knowledge and skills acquired to identify and name different parts of their bodies and how they can care for them",
    "Understand the danger of taking in bad substances and identify ways of avoiding drug abuse",
    "Explain basic facts about HIV and AIDS and how it can affect our lives"
  ],
  objectives:[
    "Describe the parts of the body and name what each part is used for",
    "State ways we care for each body part",
    "State the importance of proper hand washing",
    "Name private parts and state the rule that protects them",
    "Explain basic facts about HIV/AIDS and how to care for people who are sick",
    "Identify substances commonly abused and name good substances instead"
  ],
  safeguard:"Body parts are named with the correct words while clothes stay on: private parts are taught as the parts a swimsuit covers, using a chart or a dressed/undressed drawing — never by asking a child to undress. If a child discloses a touch that worries you, listen, do not question twice, write down what the child said in the child's own words, and hand it to the head teacher and the child's carer the same day. HIV teaching for this age is about care and kindness, never about naming or pointing at a sick person in the class or compound.",
  note:"<b>Health</b> means keeping the body clean, eating good food, resting and moving every day. Grade 1 learners know the <b>parts of the body</b> and what each part does, they <b>wash their hands</b> with soap, they know their <b>private parts</b> are covered and their own, and they know that <b>bad substances</b> such as alcohol, cigarettes and other people's medicine must never be taken.",
  study:[
    /* ---- course text: Grade 1, Semester Two, Period VI (guide pp. 12-13) ---- */
    {k:"h3", t:"Getting to Know My Body"},
    {k:"p", t:"The body has many parts and every part has its own work. **Eyes** see, **ears** hear, the **nose** smells and breathes, the **tongue** tastes, the **skin** of the hands feels, the **arms** carry and hold, the **legs** walk and run, the **teeth** chew food, the **heart** pumps blood and the **brain** in the head tells the whole body what to do. Body types are different — some people are tall and some are short, some are big and some are small — and every body is a good body. The Grade 1 rhyme the guide gives for this is: “This is my —, I use it to —.”"},
    {k:"h3", t:"Caring for the Parts of the Body"},
    {k:"table", head:["Body part","How we care for it","When"],
     rows:[
      ["Hands and nails","Wash with soap and water; cut nails short","Before eating, after the toilet, after play"],
      ["Teeth","Brush with paste or chew a clean chewing stick; rinse after meals","Morning and after the last meal"],
      ["Skin","Bathe with soap and clean water; dry with a clean towel","Every morning and after hard play"],
      ["Hair","Wash and comb; keep the head clean of nits","Regularly, with your own comb"],
      ["Eyes","Wash the face; do not rub with dirty hands; do not stare at the sun","Daily"],
      ["Ears and nose","Clean only the outside; blow the nose gently into a tissue and bin it","When needed"]
     ]},
    {k:"p", t:"**Hygiene** means keeping clean to stay healthy. A **germ** is a tiny living thing we cannot see that lives on dirty hands and can cause **disease**. Soap and clean water wash germs away; water alone does not."},
    {k:"h3", t:"Washing My Hands"},
    {k:"num", items:[
      "Wet both hands with clean water.",
      "Rub soap on the palms until there are bubbles.",
      "Rub the palms together, then the backs of the hands.",
      "Rub between the fingers and around each thumb.",
      "Rub the fingertips, then rinse off all the soap.",
      "Dry the hands completely with your own clean towel.",
      "Wash at four times: before eating, after the toilet, after blowing the nose, and when coming in from outside."
    ]},
    {k:"p", t:"The guide asks the class to sing it while washing: “This is the way we wash our hands, wash our hands, wash our hands … when we want to eat … after our play … after the restrooms … when we come from places.”"},
    {k:"h3", t:"My Body Belongs to Me"},
    {k:"p", t:"The parts of the body that a vest and pants (a swimsuit) cover are **private parts**. They are special and personal: no one is allowed to touch them, look at them or ask to see them, and you do not show them to other children. If anyone touches you in a way that feels wrong or confusing, you may say **NO**, go away, and **tell a trusted adult** — mother, father, grandmother, your teacher — and keep telling until someone helps you. **Good touches** are safe ones, like a handshake or a high-five with your permission."},
    {k:"h3", t:"Good Substances and Bad Substances"},
    {k:"bul", items:[
      "**Good substances**: clean water, fruit juice, milk, fresh cooked food, and medicine that a health worker or a grown-up gives you in the right amount.",
      "**Bad substances**: alcohol (pahn), cigarettes and tobacco, and drugs that people abuse — they damage a growing body and mind.",
      "Never taste a medicine that is not yours, and never taste cleaning liquid or petrol. Ask a grown-up first.",
      "Why children must not take bad substances: they make people sick, they spoil the mind and memory, they waste family money, and they keep children from learning."
    ]},
    {k:"h3", t:"HIV and AIDS: What a Small Child Should Know"},
    {k:"p", t:"**HIV** is a very tiny **virus** that weakens the body's defence against sickness; when the defence has been weakened for a long time, the person is ill with **AIDS**. HIV is not carried by a mosquito and you cannot catch it by playing with, sitting beside, hugging, sharing a cup with, or being taught by a person living with HIV. What a small child must do is stay clean, never touch blood or open wounds, and treat a person who is sick with kindness — such a person needs care, food, rest and medicine, and the class must never laugh at or avoid them. The guide's picture talk for Grade 1 is the “big, big disease”: what does the person in the picture need?"}
  ],
  focus:[
    "Getting to know my body: parts, works and body types",
    "Caring for the parts of the body and daily hygiene",
    "Washing my hands with soap, step by step",
    "Private parts, good touches and telling a trusted adult",
    "Good substances and bad substances; never taste what is not yours",
    "HIV: basic facts and caring for people who are sick"
  ],
  terms:[
    {t:"body part", d:"any of the named pieces of the body, such as the head, arms or legs", x:"Name a body part you use for writing."},
    {t:"organ", d:"a part inside the body that does a special work", x:"The heart is an organ that pumps blood."},
    {t:"hygiene", d:"keeping clean in order to stay healthy", x:"Good hygiene prevents disease."},
    {t:"germ", d:"a tiny living thing, too small to see, that can cause disease", x:"Germs live on dirty hands."},
    {t:"soap", d:"what we use with water to lift off dirt and germs", x:"Wash your hands with soap."},
    {t:"disease", d:"an illness of the body", x:"Malaria is a disease."},
    {t:"private parts", d:"the parts of the body a vest and pants cover; they are personal", x:"No one should touch your private parts."},
    {t:"trusted adult", d:"a grown-up you can tell and who will help you", x:"Your teacher is a trusted adult."},
    {t:"virus", d:"a very tiny germ that causes disease", x:"HIV is a virus."},
    {t:"HIV", d:"the virus that weakens the body's defence against sickness", x:"HIV can be prevented."},
    {t:"AIDS", d:"the illness that develops when HIV has weakened the body for a long time", x:"AIDS develops from untreated HIV."},
    {t:"substance abuse", d:"using harmful things such as alcohol, tobacco or other people's drugs", x:"Substance abuse damages the body."},
    {t:"alcohol", d:"a drink that harms the body and the mind of a child", x:"Alcohol is a bad substance for children."},
    {t:"healthy", d:"free from sickness; the body working well", x:"Eat well to stay healthy."}
  ],
  facts:[
    {q:"Name four body parts and say what each one does.", a:"Eyes see, ears hear, the nose smells and breathes, legs walk and run."},
    {q:"Why should we wash our hands with soap?", a:"Soap lifts off the germs that water alone leaves behind, so we do not carry them into our mouth or onto our food."},
    {q:"Name four times when you must wash your hands.", a:"Before eating, after using the toilet, after blowing the nose, and when coming in from outside."},
    {q:"Which parts of the body are called private parts?", a:"The parts covered by a vest and pants (a swimsuit); they are personal and no one may touch them."},
    {q:"What should you do if someone touches you in a way that is wrong?", a:"Say no, go away from that person, and tell a trusted adult — keep telling until someone helps."},
    {q:"Give two bad substances and one good substance.", a:"Bad: alcohol, cigarettes (or drugs not given to you by a health worker). Good: clean water (or fresh food, juice, milk)."},
    {q:"What is HIV?", a:"A very tiny virus that weakens the body's defence against sickness."},
    {q:"Can you catch HIV by playing with a child who has HIV?", a:"No. HIV is not spread by playing, hugging, sharing a cup or sitting together; a person who is sick needs kindness and care."}
  ],
  tf:[
    {s:"Washing hands with only water removes all germs.", a:"false", why:"Soap is needed to lift the germs off the skin properly."},
    {s:"Private parts may be shown to other children if they ask.", a:"false", why:"Private parts are personal; they are not shown to anyone."},
    {s:"HIV can be prevented.", a:"true", why:"Correct knowledge, clean habits and safe behaviour prevent HIV."},
    {s:"Cigarettes are good for the lungs.", a:"false", why:"Cigarettes damage the lungs and cause disease."},
    {s:"Brushing teeth every day helps keep them healthy.", a:"true", why:"Brushing removes food and germs that make holes in the teeth."},
    {s:"A child may take any medicine found in the house.", a:"false", why:"Only a grown-up or health worker gives medicine, and only the medicine meant for you."}
  ],
  classify:{
    title:"Good or bad for the body?",
    groups:[
      {name:"Good substances", items:["clean water","fruit juice","milk","fresh food","medicine given by a health worker"]},
      {name:"Bad substances", items:["alcohol","cigarettes","tobacco","drugs people abuse","petrol and cleaning liquid"]},
      {name:"Good habits", items:["washing hands with soap","brushing teeth","bathing daily","cutting nails","telling a trusted adult"]},
      {name:"Private parts", items:["breasts","buttocks","genitals (vulva and penis)"]}
    ]
  },
  diagram:{
    title:"Caring for the parts of the body",
    caption:"Write how we care for each part and when we do it.",
    parts:[
      {p:"Teeth", f:"brush twice a day with paste or a clean chewing stick"},
      {p:"Hair", f:"wash and comb regularly with your own comb"},
      {p:"Skin", f:"bath every day with soap and clean water"},
      {p:"Hands and nails", f:"wash with soap; cut the nails short"},
      {p:"Eyes", f:"wash the face; do not rub with dirty hands"},
      {p:"Ears", f:"clean only the outside; never push anything inside"},
      {p:"Nose", f:"blow gently into a tissue and put the tissue in the bin"}
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
    {q:"Why is it important to know which parts of the body are private?", a:"So that you know your body belongs to you, you protect those parts, and you tell a trusted adult if anyone touches them."},
    {q:"Give one reason a child should never drink alcohol.", a:"It damages the growing body and the mind, causes accidents and illness, and wastes the family's money."},
    {q:"A boy in your class has AIDS and other children avoid him. What should you do?", a:"Play with him and treat him kindly; he needs care, food, rest and medicine, and no child catches HIV by playing or sitting with him."},
    {q:"You find a sweet-smelling bottle of liquid under the sink. What do you do?", a:"Do not taste or smell it; leave it and call a grown-up at once."}
  ],
  activities:[
    "Rhyme and point: “This is my —, I use it to —”, teacher leads so children are never asked to touch private parts",
    "Action song: “This is the way we wash our hands … when we want to eat … after our play … after the restrooms”",
    "Teacher demonstrates the care of each body part and the class mimics it with real aids",
    "Talk about body types: tall and short, big and small — each child's body type is celebrated with a round of applause",
    "Flip chart / board drawing of the different bodies and of good and bad substances",
    "Role play in pairs: a child says NO, walks away and tells a trusted adult",
    "Picture talk on the “big, big disease”: what does the sick person need?"
  ],
  materials:[
    "Posters and a chart of the “do's” for each body part",
    "Magazine cutouts of personal hygiene materials",
    "Flip chart or board drawings of different body types",
    "Soap, clean water, towel, toothbrush and paste, comb, nail brush",
    "Bowl of water, ground pepper (for the Pepper and Soap test)",
    "Dressed and undressed chart picture of a boy and a girl for naming private parts",
    "Empty clean packages of safe medicine for the sorting talk"
  ],
  aids:[
    "Real soap, water, towel, toothbrush and paste, comb and nail brush",
    "Picture chart of a boy and a girl, dressed and undressed",
    "Word cards — germ, soap, hygiene, private parts, trusted adult",
    "Bowl of water and ground pepper for the class demonstration",
    "Two hoops or boxes labelled GOOD and BAD for sorting"
  ],
  home:[
    "Wash your hands with soap at the four times while your family watches, and count the steps out loud",
    "Say the rule of the private parts to your family: my body belongs to me and I tell a trusted adult",
    "Help to fetch clean water for washing and name three good substances at the table",
    "Brush your teeth in the morning and after the last meal; a grown-up checks"
  ],
  assessment:[
    "Oral quiz on the parts of the body and their work",
    "Demonstration: the child performs the seven handwashing steps and the class counts them",
    "Sorting task: good substances / bad substances cards placed in the right hoop",
    "Chart and drawing: “how I care for my body”, with the teacher writing the child's sentence under it",
    "Written test with true/false, matching and short answers (teacher's copy carries the reasons)",
    "Science journal: the Pepper and Soap drawing and what the child learned"
  ]
},

/* ============================ GRADE 2 · PERIOD VI ============================ */
{
  grade:2, period:"VI", sem:"Two", icon:"🛡️", healthPlan:true,
  title:"My Body, My Safety and Safe Medicine",
  subtitle:"Health strand · the major parts of the human body, male and female, sensitive parts and bad touches, and the kinds and dangers of abused drugs (guide pp. 24–25, with pp. 18–19)",
  outcomes:[
    "Know the types of drugs that are harmful to the body, understand their effect, and explain why they should say no to using drugs",
    "Name the human body parts in general and explain basic facts about the female and male private parts",
    "Appreciate the similarities between male and female bodies and identify bad touches and how to avoid them"
  ],
  objectives:[
    "Tell the meaning of the word “drug”",
    "Distinguish between good drugs (useful medicine) and bad drugs and say where each is found",
    "Identify the real and the local names for bad drugs",
    "Name the major parts of the human being and match each with its proper function",
    "Distinguish male from female and state the sensitive parts of the body",
    "Explain how bad touches are avoided and how they are reported"
  ],
  safeguard:"Teach body safety with charts and pictures only; children keep their clothes on and are never asked to show or touch private parts. Girls and boys may be seated in separate working groups for the private-parts talk, as the guide directs for this age. Answer honestly and briefly, in the words the guide uses: a female can become pregnant, a male cannot, a baby grows inside the mother's womb and is born through the birth canal. Never ask a child to speak about abuse in front of the class: if a disclosure comes, listen once, write the child's own words down, and report it that day to the head teacher and the carer; in Liberia this falls to the police Women and Children Protection Unit and the Ministry of Gender, Children and Social Protection.",
  note:"The human body has three main parts — <b>head</b>, <b>trunk</b> and <b>limbs</b> — and inside the trunk the <b>brain</b>, <b>heart</b>, <b>lungs</b> and <b>stomach</b> do the great works of the body. Boys and girls are made differently but are equal and must be respected. A <b>drug</b> is anything that changes the body or the mind: medicine given by a health worker is a good drug, while <b>alcohol</b>, <b>tobacco</b>, <b>marijuana</b>, <b>opium</b> and <b>snuff</b> are bad drugs that cause <b>addiction</b>.",
  study:[
    /* ---- course text: Grade 2, Period III (guide pp. 18-19) + Period VI (pp. 24-25) ---- */
    {k:"h3", t:"The Major Parts of the Human Body"},
    {k:"p", t:"The body is divided into three main parts: the **head**, the **trunk** and the **limbs**. The head carries the eyes, ears, nose, tongue and the brain. The trunk holds the heart, lungs and stomach. The limbs are the arms and the legs."},
    {k:"table", head:["Part or organ","Where it is","Its work"],
     rows:[
      ["Brain","Head","controls the whole body — thinking, feeling, moving"],
      ["Eyes, ears, nose, tongue","Head","seeing, hearing, smelling, tasting (the five senses)"],
      ["Heart","Chest","pumps blood round the body"],
      ["Lungs","Chest","take in air and let air out"],
      ["Stomach","Belly","holds food and begins digesting it"],
      ["Skin","Outside the whole body","covers us, feels things, and lets sweat out"],
      ["Arms and legs","Limbs","carry, hold, walk and run"]
     ]},
    {k:"h3", t:"Male and Female: Different but Equal"},
    {k:"bul", items:[
      "Boys have a **penis** and **testicles**; girls have a **vulva** and a **womb (uterus)** inside the body.",
      "A female can become pregnant because the baby lives and grows in the **womb**; a male cannot get pregnant.",
      "A baby comes out of the mother's body through the **birth canal** when it is born.",
      "Breasts feed the baby with milk; both boys and girls have chests, but a girl's breasts grow at puberty.",
      "We are both human beings, made differently but **equal** — each one deserves respect, and no work or game belongs to only one sex.",
      "The **sensitive (private) parts** are the breasts, the buttocks and the parts covered by underwear. They are shown to no one and touched by no one."
    ]},
    {k:"h3", t:"Good Touch and Bad Touch"},
    {k:"p", t:"A **good touch** is safe and wanted: a handshake, a high-five, a pat on the back from a parent, a nurse's careful touch while your mother holds you. A **bad touch** is any touch of your private parts, any touch that frightens or confuses you, any touch that someone asks you to keep secret, and being made to look at or touch another person's private parts. Your body belongs to you and not to anybody else."},
    {k:"num", items:[
      "SAY NO — firmly, in a loud voice.",
      "GET AWAY — run to where there are people.",
      "TELL — a trusted adult (parent, teacher, aunt, head teacher).",
      "KEEP TELLING — tell another adult until someone acts to keep you safe.",
      "Do not keep a bad secret; no one has the right to make you promise silence about a bad touch.",
      "Avoid risky situations: do not go naked in front of people, do not stay alone behind closed doors with an older person of any sex."
    ]},
    {k:"p", t:"The class slogan the guide gives in Liberian English is: **“This is my body, I respect it”** — said three times together."},
    {k:"h3", t:"What Is a Drug?"},
    {k:"p", t:"A **drug** is anything that changes how the body or the mind works when it enters the body — by the mouth, the nose, the skin or a injection. Medicine is a good drug when a **health worker** or a grown-up gives the right **dose** at the right time. Bad drugs are used to make people forget or feel “high”, and they damage the body."},
    {k:"table", head:["Bad drug (real name)","Local name / form","Where it is found","What it does"],
     rows:[
      ["Alcohol","pahn, cane juice, local gin","bars, some shops, home bottles","spoils the mind and liver, causes quarrels and accidents"],
      ["Tobacco / snuff","cigarette, pipe, snuff","shops, pockets","blackens the lungs, causes cough, tooth decay and cancer"],
      ["Marijuana","“green”, “bomb”, ganja","hidden in papers and tins","clouds the mind, spoils memory and school work"],
      ["Opium / tramadol and other abuse","pills and syrups taken without a doctor","from friends, from a stolen or borrowed box","upsets the stomach, causes addiction and can kill"]
     ]},
    {k:"h3", t:"Addiction, Alcoholism and Rules for Safe Medicine"},
    {k:"bul", items:[
      "**Addiction** is being unable to stop taking a drug although it is harming you. **Alcoholism** is the addiction to alcohol.",
      "Effects on the body and mind: weak hands, cough, poor memory, madness, sickness, death.",
      "Effects on the family: no money for food or school fees, quarrels, beating, neglect of children.",
      "Effects on school: late arrival, sleeping in class, failing, fighting, dropping out.",
      "Medicine rules: only a grown-up or health worker gives medicine; check the label and the **expiry date**; take your own medicine only; never share; keep medicine high and locked.",
      "Say **no** to the pressure lines: “just try once”, “it is harmless”, “it will make you see things”. Reply: “No, thank you — I do not take that. My body belongs to me.”"
    ]},
    {k:"h3", t:"Refusal Skills: Refuse — Reason — Run — Report"},
    {k:"p", t:"**Refuse** — say a clear NO. **Reason** — give your reason: it harms my body, my mind and my family. **Run** — walk or run away from the place and the group. **Report** — tell a trusted adult, the teacher or the health worker, so the danger is stopped. Practise in pairs until the NO is loud, steady and unhurried; laughing along or hesitating is what pulls a child back into the group."}
  ],
  focus:[
    "The three main divisions of the body and the organs inside the trunk",
    "Male and female bodies: different but equal; sensitive parts",
    "Good touch and bad touch; the five-step safety rule",
    "What a drug is; good medicine and bad drugs, with local names",
    "Addiction, alcoholism and the effects of drug abuse on body, family and school",
    "Refusal skills: refuse — reason — run — report"
  ],
  terms:[
    {t:"head", d:"the top part of the body that carries the brain and the sense organs", x:"The head sits on the neck."},
    {t:"trunk", d:"the main part of the body without the head and limbs", x:"The heart and lungs are in the trunk."},
    {t:"limbs", d:"the arms and the legs", x:"We use our limbs to hold and to walk."},
    {t:"brain", d:"the soft organ in the skull that controls the whole body", x:"The brain makes you think and move."},
    {t:"womb", d:"the place inside a female where a baby grows", x:"A baby lives in the womb."},
    {t:"private parts", d:"the parts covered by underwear — breasts, buttocks and genitals", x:"Private parts are not shown and not touched."},
    {t:"trusted adult", d:"a grown-up you can tell who will act to protect you", x:"Tell a trusted adult the same day."},
    {t:"drug", d:"anything that changes how the body or the mind works", x:"Medicine is a drug used carefully."},
    {t:"medicine", d:"a drug given by a health worker to cure or ease sickness", x:"Take your medicine at the right time."},
    {t:"dose", d:"the amount of medicine to be taken at one time", x:"Never take more than the dose given."},
    {t:"expiry date", d:"the last date a medicine may be used", x:"Check the expiry date before you take medicine."},
    {t:"addiction", d:"not being able to stop taking a harmful drug", x:"Addiction grows slowly and is hard to break."},
    {t:"alcoholism", d:"the addiction to alcohol", x:"Alcoholism damages the family as well as the body."},
    {t:"refuse", d:"to say no firmly and keep your decision", x:"Refuse the offer, then walk away."}
  ],
  facts:[
    {q:"Name the three main parts of the human body.", a:"Head, trunk and limbs."},
    {q:"Which organ pumps blood round the body, and which one controls the whole body?", a:"The heart pumps blood; the brain controls the whole body."},
    {q:"State one difference between a male and a female body.", a:"A female has a womb and can become pregnant; a male cannot."},
    {q:"What should you do if someone touches your private parts?", a:"Say no, get away, tell a trusted adult the same day, and keep telling until someone acts."},
    {q:"What is a drug?", a:"Anything that changes how the body or the mind works when it enters the body."},
    {q:"What is drug abuse?", a:"Taking drugs that are not meant for you, or taking them in a way or amount that harms the body or the mind."},
    {q:"Name three commonly abused substances.", a:"Alcohol, tobacco (and snuff), marijuana; opium or tablets taken without a doctor."},
    {q:"Why must you check the expiry date on a medicine?", a:"Because medicine past its expiry date may not work and may harm the body."},
    {q:"Who should give you medicine?", a:"A health worker, or a grown-up following the health worker's instructions."},
    {q:"State one effect of drug abuse on a pupil's schooling.", a:"Coming late, sleeping in class, failing, or leaving school."}
  ],
  tf:[
    {s:"A good drug is medicine given by a health worker in the right dose.", a:"true", why:"Medicine taken as directed cures or eases sickness."},
    {s:"Only strangers can give a bad touch.", a:"false", why:"Most bad touches come from someone the child knows and trusts."},
    {s:"A male body can become pregnant.", a:"false", why:"Only a female body has a womb where a baby grows."},
    {s:"Addiction means you cannot stop taking a harmful drug.", a:"true", why:"The body and the mind begin to demand the drug."},
    {s:"It is safe to take a tablet your friend gives you if it is sweet.", a:"false", why:"Never take medicine that was not meant for you and given by a grown-up or health worker."},
    {s:"Keeping a bad touch secret helps to stop it.", a:"false", why:"Telling a trusted adult is what stops it."}
  ],
  classify:{
    title:"Helpful or harmful?",
    groups:[
      {name:"Helpful (good drugs)", items:["paracetamol given by mother for fever","oral rehydration salt","syrup from the clinic","vaccine from the health worker"]},
      {name:"Harmful (bad drugs)", items:["alcohol","tobacco and snuff","marijuana","opium","tablets taken without a doctor"]},
      {name:"Safe touches", items:["handshake","high-five you agreed to","a nurse's touch while mother holds you","a hug from a parent at home"]},
      {name:"Must be reported", items:["touch on private parts","being made to touch another person","a request to keep a secret about touching","being shown naked pictures"]}
    ]
  },
  diagram:{
    title:"Body organs and their functions",
    caption:"Draw the outline of the body in your journal and label the organs with their work.",
    parts:[
      {p:"Brain (head)", f:"controls thinking, feeling and movement"},
      {p:"Heart (chest)", f:"pumps blood round the body"},
      {p:"Lungs (chest)", f:"take in air and let air out"},
      {p:"Stomach (belly)", f:"holds food and starts digestion"},
      {p:"Skin (outside)", f:"covers the body, feels and sweats"},
      {p:"Womb (female trunk)", f:"where a baby grows before birth"}
    ]
  },
  experiment:{
    title:"The Smoke Filter Demonstration (teacher-led)",
    aim:"To show what smoke leaves inside the lungs.",
    materials:["A clear jar or bottle","A white tissue or cotton wool","A piece of cigarette paper or a small amount of ash/dust","Water"],
    steps:[
      "Put the tissue into the funnel so it filters the air.",
      "Let a learner squeeze the bottle so that air is pulled through the tissue (or drop the dust/ash on the tissue).",
      "Take out the tissue and look at the brown marks left behind.",
      "Compare it with a clean tissue and record the difference in the journal.",
      "Discuss: if this is what smoke leaves in a jar, what does it leave in the lungs of a person who smokes every day?"
    ],
    expect:"The white tissue comes out spotted and brown, while the clean one is white.",
    why:"Smoke carries tar and tiny particles; the lungs trap them the way the tissue did, which is why smokers cough and fall sick."
  },
  apply:[
    {q:"A big boy offers you a cigarette behind the store. Use the four-step rule.", a:"Refuse — “No, I do not smoke”; give the reason — “it spoils my lungs and my school work”; run — go where people are; report — tell my teacher or my mother."},
    {q:"Why must girls and boys be treated with equal respect in this lesson?", a:"Because both are human beings made differently but equal, and each body deserves the same protection and the same chances."},
    {q:"Your baby brother has fever and there is medicine on the table. What do you do?", a:"I do not give him any medicine; I call my mother or take him to the health worker, because only a grown-up or health worker gives medicine."},
    {q:"A neighbour says, “Don't tell anyone about what I did.” Why must you still tell?", a:"Because a promise about a bad touch is not a secret to keep: telling a trusted adult stops the harm and keeps me and other children safe."},
    {q:"Give two reasons why drug abuse is bad for the whole family, not only for the user.", a:"Family money is spent on the drug instead of food and school fees, and there is quarrelling, fear and neglect of the children."}
  ],
  activities:[
    "Name and point: the major body parts and the five sense organs, with the chart",
    "Song game: “Head, shoulders, knees and toes” at speed, then a quiet repeat",
    "Chart work: similarities and differences between a boy and a girl, drawn on the wall chart",
    "Pictures: point to the private parts on the chart and say the rule for each",
    "Role play: three or four children show how drugs are offered; the class names them and answers the pressure lines",
    "Demonstration of a negative touch on the chart — which parts may be touched and which may not",
    "Poster making: “Say NO to drugs — my body belongs to me”",
    "Talk with a community health worker on medicine safety, when available"
  ],
  materials:[
    "Chart naming the body parts; pictures of the male and female body (dressed and undressed)",
    "Charts, posters, picture books and, if possible, a video",
    "Clean empty labelled medicine packages for the safety talk",
    "Flip chart or board for the two-column similarity/difference table",
    "Props for role play: papers, a tin, a borrowed “pill” bottle (empty and clean)",
    "Jars, white tissue and dust for the filter demonstration"
  ],
  aids:[
    "Body chart with the organs and the male/female difference",
    "Two hoops: SAFE TOUCH and MUST BE REPORTED",
    "Word cards — drug, dose, expiry date, addiction, refuse",
    "Empty clean medicine boxes with readable labels",
    "White tissue, jar and dust for the filter demonstration",
    "Chalkboard for the similarity/difference table"
  ],
  home:[
    "Say the class slogan to your family: “This is my body, I respect it” — and the five-step rule for a bad touch",
    "Ask a grown-up to show you where medicine is kept and why it stays high and locked",
    "Look at one medicine box with a grown-up and read the expiry date out loud",
    "Practise your refusal line on anyone who offers something harmful, at home in front of the family"
  ],
  assessment:[
    "Labelled body diagram with the work of each organ",
    "Oral quiz and written test on key terms (drug, dose, addiction, private parts)",
    "Role-play assessment: the four-step refusal, marked on a simple rubric",
    "Poster or chart on saying no to drugs, presented to the class",
    "Discussion-circle contribution on male and female similarity and difference",
    "Class and homework, science journal entries, group and individual oral reports"
  ]
},

/* ============================ GRADE 3 · PERIOD IV ============================ */
{
  grade:3, period:"IV", sem:"Two", icon:"🌿", healthPlan:true,
  title:"Food, Cleanliness and Saying No",
  subtitle:"Health strand · investigating more uses of plants and how we care for our bodies — local plants and nutrients, personal hygiene, how bad substances and STIs enter the body, and how they do not (guide pp. 32–33)",
  outcomes:[
    "Describe the ways we use plants and plant products as sources of nutrients",
    "Explain the basic facts about the effects of bad substances on the body and practise ways of avoiding them",
    "Explain how STIs get into the body and how they do not, and identify ways of preventing STIs"
  ],
  objectives:[
    "Make a catalogue of some local plants and the ways we use them",
    "Match local plants with the major nutrient groups",
    "Group local plants used for food, medicine, clothing, building material, grooming and skin care, and ornaments",
    "Explain the effects of drug and alcohol abuse on the body",
    "Explain the importance of personal hygiene",
    "State how STIs enter the body and how they do not, and name the ways of avoiding them"
  ],
  safeguard:"Grade 3 STI teaching is limited to what the guide lists: what an infection is, the germs that cause the common ones, how they do and do not enter the body, and why waiting is the safe choice. Do not go into sexual acts, and do not use any learner's own family or neighbours as an example. Separate boys and girls for the menstruation talk if that is the custom of the school, and always have a same-sex teacher or a trusted adult present. A child who becomes upset or begins to speak about being hurt is handled outside the lesson, quietly, and reported the same day to the head teacher and the carer.",
  note:"Plants feed us, heal us, clothe us and shelter us — and the same care that keeps a garden healthy keeps our <b>body</b> healthy. Grade 3 learns the <b>five nutrient groups</b> in Liberian plants, why <b>personal hygiene</b> matters, how <b>bad substances</b> and how <b>STIs</b> enter the body — and how they do not. The class slogan grows: “This is my body; I respect it; I will not put drugs into it.”",
  study:[
    /* ---- course text: Grade 3, Semester Two, Period IV (guide pp. 32-33) ---- */
    {k:"h3", t:"Twenty Local Plants and Their Uses"},
    {k:"p", t:"The guide asks the class to build a **catalogue of twenty local plants** with the use of each. A plant may be used for more than one thing, so the catalogue has a column for every use."},
    {k:"table", head:["Plant (and local name)","Food use","Medicine / other use","Nutrient group it mainly gives"],
     rows:[
      ["Cassava (gari, foo-foo)","the boiled or pounded root","leaves also eaten as greens","Carbohydrate (energy)"],
      ["Rice","the grain","straw for thatch and feeding animals","Carbohydrate"],
      ["Plantain / banana","cooked or fried","the leaf for wrapping; sap for swelling","Carbohydrate and vitamin"],
      ["Groundnut","the nut, and groundnut soup","oil for cooking","Protein and fat/oil"],
      ["Cowpea, beans","the seed in soup and sauce","fixes goodness into the soil (manure)","Protein"],
      ["Palm oil tree","red oil for cooking","wine from the tree (a bad drink when abused), thatch","Fat/oil"],
      ["Cocoyam / eddoe","the corm and the leaves","a light food for the sick","Carbohydrate and mineral"],
      ["Soursop, guava, mango, pawpaw","the fruit","leaf decoctions used in the community","Vitamin (protective)"],
      ["Bitter leaf, jute mallow (fiofio), pumpkin leaf","green sauce","traditional medicines","Vitamin and mineral"],
      ["Neem, lemongrass, aloe, guava leaf","tea for comfort","bathing boils, fever and stomach complaints; insect-repellent smell","Protective / medicinal"],
      ["Cotton","fibre for cloth and rope","seed oil","(not a food)"],
      ["Rubber tree","—","latex from the bark","(not a food)"],
      ["Bamboo, raffia palm","—","building material, fencing, mats, brooms","(not a food)"],
      ["Kola, hibiscus (sobolo), henna","drink and colour","ornament and grooming of the skin","(not a main food)"]
     ]},
    {k:"h3", t:"Nutrients from Liberian Plants"},
    {k:"p", t:"Food gives five kinds of nutrient. **Carbohydrates** and **fats and oils** give energy; **proteins** build the body and repair it; **vitamins** and **minerals** protect it. Cassava, rice and plantain are energy foods; groundnut, beans and cowpea are body-building foods; the green leaves and the fruits are protective foods. A day's eating should take **at least one food from every group**, and a plate made only of cassava foo-foo is not a balanced plate."},
    {k:"h3", t:"Personal Hygiene and the Clean Body"},
    {k:"bul", items:[
      "Bathe every day and after hard play; wash the private parts with clean water and keep them dry; wear clean clothing, and clean underwear every day.",
      "Wash the hands with soap before eating, after the toilet, after blowing the nose and after handling anything dirty.",
      "Brush or rinse the teeth morning and night; rinse the mouth after anything sweet; see the health worker for a bad tooth.",
      "Cut the nails short; wash and comb the hair; keep the head free of nits; clean the outside of the ears only.",
      "Cover a cough or sneeze, bin the tissue, then wash the hands; do not share a towel, a comb or a razor.",
      "Keep the compound, the pit latrine and the water source clean; wash and cover drinking water; dispose of refuse so flies and rats do not feed on it."
    ]},
    {k:"h3", t:"How Bad Substances Enter the Body"},
    {k:"p", t:"Substances — good or bad — can enter the body in three ways: **through the mouth** (drinking or eating), **through the nose** (breathing smoke, dust or snuff) and **through the skin** (rubbing, injection, or a cut). That is why we do not taste unknown things, do not stand in smoke, and do not rub anything on the skin or let anyone inject us without a health worker."},
    {k:"bul", items:[
      "Effects of bad substances: the brain and memory slow down, the liver and lungs are damaged, the stomach is spoiled, the temper becomes bad, school work fails, and money that should buy food is burned.",
      "**Withdrawal** and craving show that a person has become addicted; the family suffers with the user.",
      "Ways of avoiding them: keep away from drinking places and from groups that use drugs; have a reason and a reply ready; walk away; tell a trusted adult when you are pressured; spend free time in sport, church or mosque, reading, farm work or a skill."
    ]},
    {k:"h3", t:"Sexually Transmitted Infections (STIs)"},
    {k:"p", t:"A **sexually transmitted infection** is a germ-caused illness that is passed mainly through **sexual contact** — the meeting of bodies in sex. Some are also passed through **blood** (sharing a blade, a razor or a needle, an unsterilised cutting tool) and from an **infected mother to her baby** before or during birth or through breast milk. Common ones named in the guide are **syphilis**, **gonorrhoea**, **HIV**, **hepatitis B** and **trichomoniasis** (the guide's “itchy fish”)."},
    {k:"table", head:["Question","The answer for Grade 3"],
     rows:[
      ["How do STIs get into the body?","Through sexual contact with an infected person; through blood by shared blades, needles or unsterilised tools; from an infected mother to the baby"],
      ["How do they NOT get into the body?","Not by sharing food or a cup, not by sitting beside or hugging a sick person, not by mosquitoes, not by playing, swimming, sharing a bench or a toilet seat, not by being coughed on"],
      ["What are common signs?","Pain or burning when passing urine, a running sore or discharge, itching, sores or blisters on the private parts, pain in the lower belly, fever, swollen glands"],
      ["How are they avoided?","Waiting until marriage — no sex is 100% safe; being faithful to one partner who is tested; no alcohol or drug use that leads to risky decisions; never sharing a razor, blade or needle; seeing a health worker early, because most STIs are curable when treated and dangerous when ignored"],
      ["What if someone has an STI?","Go to a health worker for treatment, finish the medicine, tell the partner, and never be shunned or laughed at; care, not insults, is what a sick person needs"]
     ]},
    {k:"h3", t:"Refusal Skills and the Value of Waiting"},
    {k:"p", t:"Grade 3 practises the same four steps used against drugs: **refuse — reason — run — report**. The guide asks for role play against pressure and for the class to explain the value of waiting: a body that is respected, a school life kept, a heart not frightened, and no chance of an infection. The lesson closes with the full class slogan: “This is my body; I respect it; I will not put drugs into it.”"}
  ],
  focus:[
    "Catalogue of twenty local plants and their uses",
    "Nutrient groups in Liberian plants and the balanced plate",
    "Personal hygiene: daily habits for a clean body and clean water",
    "How bad substances enter the body and what they do to it",
    "STIs: what they are, how they enter and how they do not",
    "Refusal skills and the value of waiting"
  ],
  terms:[
    {t:"nutrient", d:"a substance in food that the body needs to live and grow", x:"Carbohydrate is a nutrient."},
    {t:"carbohydrate", d:"the nutrient that gives most energy, as in rice, cassava and plantain", x:"Cassava is rich in carbohydrate."},
    {t:"protein", d:"the nutrient that builds and repairs the body", x:"Groundnut and beans give protein."},
    {t:"vitamin", d:"a nutrient that protects the body from disease", x:"Fruit and green leaves give vitamins."},
    {t:"mineral", d:"a nutrient such as iron, salt or calcium that keeps the body working", x:"Cocoyam leaves give minerals."},
    {t:"hygiene", d:"keeping the body and its surroundings clean to stay healthy", x:"Personal hygiene stops germs spreading."},
    {t:"medicinal plant", d:"a plant used to treat sickness or pain", x:"Neem is a medicinal plant."},
    {t:"addiction", d:"not being able to stop using a harmful substance", x:"Addiction steals money and health."},
    {t:"infection", d:"the state of germs getting into the body and multiplying there", x:"An untreated infection spreads."},
    {t:"STI", d:"a sexually transmitted infection, passed mainly by sexual contact and by blood", x:"Syphilis and gonorrhoea are STIs."},
    {t:"virus", d:"a tiny germ that causes disease and can only live inside a living body", x:"HIV and hepatitis B are viruses."},
    {t:"abstinence", d:"choosing not to have sex — the surest way to avoid STIs", x:"Abstinence is what the guide calls the 100% safe choice for a child."}
  ],
  facts:[
    {q:"Give four uses of plants.", a:"Food, medicine, clothing/fibre, building material (also grooming, ornaments and fuel)."},
    {q:"Name three food crops grown in Liberia.", a:"Rice, cassava, plantain, cocoyam, groundnut, cowpea (any three)."},
    {q:"Match these crops with their nutrient group: cassava, groundnut, pawpaw.", a:"Cassava — carbohydrate (energy); groundnut — protein (and oil); pawpaw — vitamin (protective)."},
    {q:"What are the three routes by which bad substances enter the body?", a:"The mouth, the nose and the skin."},
    {q:"State three personal habits of good hygiene.", a:"Bathing daily, washing hands with soap before eating and after the toilet, cleaning the teeth, cutting nails, wearing clean underwear (any three)."},
    {q:"Name three STIs.", a:"Syphilis, gonorrhoea, HIV, hepatitis B, trichomoniasis (any three)."},
    {q:"Give two ways an STI does NOT spread.", a:"Not by sharing food or a cup, not by mosquitoes, not by playing or swimming together, not by sitting on a shared bench or toilet (any two)."},
    {q:"State the surest way for a Grade 3 pupil to avoid an STI.", a:"Abstinence — no sexual contact at all."},
    {q:"What should a person who thinks he has an STI do?", a:"Go to a health worker early for testing and treatment, finish the medicine, and not buy drugs from a shop or share a razor."}
  ],
  tf:[
    {s:"A plate of only cassava foo-foo is a balanced meal.", a:"false", why:"It gives mostly carbohydrate; the body also needs body-building (protein) and protective (vegetable and fruit) foods."},
    {s:"Groundnut and beans supply protein that builds the body.", a:"true", why:"Proteins repair and grow the body's tissues."},
    {s:"Mosquitoes can spread STIs.", a:"false", why:"STIs are passed by sexual contact, by blood through shared blades or needles, and from mother to baby — not by insects."},
    {s:"Sharing a razor blade can pass an infection through blood.", a:"true", why:"A blade with blood on it can carry HIV, hepatitis B and other germs into the next person."},
    {s:"Standing in smoke can let a bad substance into the body.", a:"true", why:"Substances enter through the nose as well as the mouth and the skin."},
    {s:"Most STIs can be cured if the person goes early to a health worker.", a:"true", why:"Bacterial STIs are curable with the right medicine finished properly; the danger is ignoring them."}
  ],
  classify:{
    title:"Group these plant products",
    groups:[
      {name:"Energy foods (carbohydrate)", items:["rice","cassava","plantain","cocoyam","breadfruit"]},
      {name:"Body-building foods (protein)", items:["groundnut","cowpea","beans","palm-nut meat","fish (an animal source, with the plants)"]},
      {name:"Protective foods (vitamin and mineral)", items:["bitter leaf","pumpkin leaf","soursop","guava","pawpaw"]},
      {name:"Not for eating", items:["cotton fibre","latex","raffia and bamboo","henna and kola (used for colour, drink and ceremony)","neem leaf (medicine)"]}
    ]
  },
  diagram:{
    title:"Uses of plants",
    caption:"Draw or copy the plant chart and write the use and the nutrient group beside each plant.",
    parts:[
      {p:"Root / corm (cassava, cocoyam)", f:"energy food — carbohydrate"},
      {p:"Seed (rice, groundnut, cowpea)", f:"body-building — protein; oil for cooking"},
      {p:"Leaf (bitter leaf, pumpkin leaf)", f:"protective food — vitamins and minerals"},
      {p:"Fruit (guava, pawpaw, soursop)", f:"protective food — vitamins"},
      {p:"Bark / latex / sap (rubber, neem, aloe)", f:"medicine, timber and craft material"},
      {p:"Stem and fibre (bamboo, raffia, cotton)", f:"building, mats, rope and clothing"}
    ]
  },
  experiment:{
    title:"Grow Your Own Seedling — and Eat What Grows",
    aim:"To grow a food or medicine plant in a tin and connect it with the nutrient group it supplies.",
    materials:["Seeds (pawpaw, groundnut, cowpea or chilli)","Empty tins with holes made in the bottom","Garden soil and sand","Watering can or cup","Journal for the record"],
    steps:[
      "Put soil and a little sand into the tin and press it gently level.",
      "Plant two seeds per tin about as deep as a finger's nail, and water lightly.",
      "Keep the tin in light shade and water every morning and evening.",
      "Measure the height of the seedling once a week and draw it at each stage.",
      "When the leaves are ready, discuss with the class: which nutrient group does your plant belong to, and how would the family eat or use it?"
    ],
    expect:"Germination in five to ten days; a steady increase in height; a leaf the child can name a use for.",
    why:"A plant the child grew carries its nutrient group and its use into memory far better than a copied list, and it teaches where the family's food comes from."
  },
  apply:[
    {q:"Your mother cooks only rice for a week. What should she add and why?", a:"A sauce with groundnut or fish (protein) and green leaves or fruit (protective foods), so the meal gives energy, building and protection."},
    {q:"A boy in your class says the fever leaf tea a neighbour gave him is “medicine, so it can't harm you”. Correct him.", a:"Any liquid put into the body can help or harm: it must be known, safe and given by a grown-up or health worker — herbs are no exception, and unknown mixtures can be poisons."},
    {q:"A girl in your class has lice. State three things she and the class should do.", a:"Wash and treat the hair with the help of a grown-up, wash her comb and pillowcase, and never share combs, hats or towels; the class treats her kindly and does not laugh."},
    {q:"Explain to a younger child why a shared razor blade is dangerous.", a:"A used blade may carry blood, and germs in that blood — such as HIV or hepatitis B — can enter the next person's cut."},
    {q:"Someone tells you that an STI is “a punishment”. What does this lesson say?", a:"An infection is caused by a germ, not by a curse; the answer is a health worker, medicine taken properly, and kindness to the sick person instead of insults."}
  ],
  activities:[
    "Whole-class storytelling: one or two children tell how substances enter the body (the guide's own opener)",
    "Guided discussion at a center: “Which plant can supply our bodies with carbohydrates … proteins … vitamins?”",
    "Display: the class catalogue of local plants matched with uses and nutrient groups",
    "Tell: what drugs do to the human body; repeat the class slogan",
    "Review the peer-pressure lines and add new ones from the children",
    "Show and tell with pictures: how STIs affect the body and where they come from",
    "Brainstorm: how STIs get into the human body — and tell how they do not",
    "Demonstrate refusal skills against pressure, and explain the value of waiting",
    "Hygiene audit of the classroom, the water barrel and the latrine, with a checklist"
  ],
  materials:[
    "Level textbook and science charts",
    "Two teacher-made incomplete posters (for the class to finish)",
    "Local plant samples, seeds, tins, soil and water for the garden",
    "Pictures for the STI and drug show-and-tell",
    "Flip chart of the five food groups with local foods",
    "Seeds, tins, soil — the level textbook's garden materials"
  ],
  aids:[
    "Real samples of the local foods for the nutrient sorting",
    "Incomplete posters the class completes together",
    "Word cards — nutrient, carbohydrate, protein, vitamin, hygiene, STI, abstinence",
    "Chart paper and markers for the twenty-plant catalogue",
    "Hygiene checklist cards for the class audit",
    "Seeds, tins and soil for the seedling investigation"
  ],
  home:[
    "With a grown-up, name the plants around the house that give food and the ones used as medicine; add them to the class catalogue",
    "Bring one local food to class and say which nutrient group it belongs to",
    "Practise the four-step refusal in front of the family and let them add one pressure line",
    "Check the home water: is it washed, boiled or treated, and covered? Report what you find",
    "Bathe, wash the hair and change into clean clothing before school; a grown-up signs the checklist"
  ],
  assessment:[
    "The twenty-plant catalogue with uses and nutrient groups (marked for accuracy and completeness)",
    "Oral and written quiz on the five nutrient groups and personal hygiene",
    "Spelling and vocabulary test on the lesson key terms",
    "Group task: sort the foods by nutrient and present the balanced plate",
    "Oral report: how STIs get into the body and how they do not",
    "Science journal: the seedling record with its weekly measurement and drawing",
    "Paper-based activity: the true/false statements with correction of the false ones"
  ]
},

/* ============================ GRADE 4 · PERIOD VI ============================ */
{
  grade:4, period:"VI", sem:"Two", icon:"🌱", healthPlan:true,
  title:"My Changing Body: Puberty, Hygiene and Protecting Myself",
  subtitle:"Health strand · health and personal hygiene — the changes of puberty, good and bad touches, pregnancy facts and hygiene — with the skin and malaria unit of the same semester (guide pp. 48–49, and pp. 46–47)",
  outcomes:[
    "Explain the importance of the changes that occur in the body during puberty and identify the different types of change",
    "Recognise inappropriate touching regardless of who does it, and act to protect oneself from sexual abuse",
    "Understand the facts relating to conception, pregnancy and childbirth, and keep the skin healthy against malaria"
  ],
  objectives:[
    "Describe the body changes that occur during puberty in boys and in girls",
    "Explain why personal hygiene must change along with the changing body",
    "Distinguish good touches from bad touches and name possible perpetrators",
    "Explain the ways of preventing pregnancy and state the consequences of teenage pregnancy",
    "Describe the layers of the skin and how malaria enters the body through the skin",
    "Make and carry out a personal and family plan for preventing malaria"
  ],
  safeguard:"This unit is taught with a chart or drawing, in normal clothes, and never by asking a pupil to show any part of the body. Where the school's custom allows it, hold the puberty and body-change talk with boys and girls in separate groups, each led by a same-sex teacher or a trusted adult, and open the shared part (respect, safety, reporting) to the whole class. Answer only what is asked, correctly and briefly; do not volunteer detail beyond the guide. Tell the pupils at the start that no one will be laughed at and that anything shared in the circle stays in the circle — except a disclosure of harm, which the teacher must report. If a pupil discloses abuse, listen once, do not investigate, note the pupil's own words, and report the same day to the head teacher and the carer; the case then belongs to the school and to the authorities (in Liberia, the police Women and Children Protection Unit and the Ministry of Gender, Children and Social Protection). Invite the school health worker for the puberty session whenever possible, as the guide directs.",
  note:"<b>Puberty</b> is the time when a child's body changes into an adult body that can make babies. The changes are <b>physical</b>, <b>mental (emotional)</b> and <b>social</b>. With the changes comes new hygiene work — sweat, oil and body odour need daily washing. <b>Every</b> pupil has the right to a body that is not touched wrongly: know the <b>bad touch</b>, say no, get away, and tell. The <b>skin</b> is the body's cover and its first defence, and it is where the <b>Anopheles mosquito</b> bites and passes <b>malaria</b>.",
  study:[
    /* ---- course text: Grade 4, Semester Two, Period VI (guide pp. 48-49) + Period V (pp. 46-47) ---- */
    {k:"h3", t:"Puberty: The Changes That Come"},
    {k:"p", t:"**Puberty** usually begins between about **10 and 14** years of age (a little earlier or later is still normal). **Hormones**, the chemical messengers made inside the body, start the changes. Both girls and boys grow taller and stronger, hair appears under the arms and around the private parts, the skin and hair become oilier, sweat grows stronger, the voice changes, feelings become deeper and quicker, and pupils begin to be attracted to one another."},
    {k:"table", head:["Change","Girls","Boys"],
     rows:[
      ["Body shape","hips widen, breasts begin to grow","shoulders broaden, muscles grow"],
      ["Voice","becomes a little higher and softer","becomes deeper; the Adam's apple shows"],
      ["First sign often noticed","menstruation (a monthly bleed from the vagina)","wet dreams (semen leaving the body during sleep)"],
      ["Skin and hair","oilier skin, more sweat","oilier skin, more sweat, facial hair begins"],
      ["Feeling and social change","shyer or more sensitive, wanting privacy","moody or competitive, wanting respect and space"],
      ["New care needed","a sanitary napkin or clean cloth, changed and washed","face washed often, deodorant if the family can afford it"]
     ]},
    {k:"p", t:"**Menstruation** is the monthly bleeding of a girl's body: about once every **28 days** the womb prepares a soft bed of blood for a possible baby, and when no baby begins, that bed leaves the body through the vagina as a flow that usually lasts **three to five days**. It is not dirt, not shame and not an illness; a girl may rest, use a clean napkin or cloth, wash with clean water and soap, and keep her school bag ready. A **wet dream** is the same kind of normal body work for a boy. Both are handled quietly and without jokes: the class rule is respect."},
    {k:"h3", t:"Hygiene That Grows With the Body"},
    {k:"bul", items:[
      "Bathe at least once a day and wash the private parts with clean water; wipe front to back, dry well, and wear clean, loose underwear changed every day.",
      "Wash the face and hair often because the skin is oilier now; use your own towel and comb.",
      "Change and wash a sanitary napkin or clean cloth as needed, wrap the used material and bin or burn it, then wash the hands.",
      "Keep the armpits and sweat areas washed; wear a clean school uniform and wash the feet daily between the toes.",
      "Brush the teeth twice a day; keep the nails short; cover a cough and wash the hands.",
      "Sweat and standing water attract mosquitoes: keep the compound clean, clear blocked drains and gutters, and sleep under an insecticide-treated net."
    ]},
    {k:"h3", t:"The Skin and Malaria"},
    {k:"p", t:"The skin has two main layers: the **epidermis** outside (with the sweat pores and the oil glands) and the **dermis** under it (with hairs, nerves, blood vessels and glands). The skin protects, feels, lets out sweat and keeps germs out; the **female Anopheles mosquito** bites through it at dusk and dawn and puts the **malaria parasite** into the blood. The **soil profile** is compared with the skin profile: topsoil, subsoil and bedrock under our feet, as the layers of the skin cover us."},
    {k:"table", head:["Prevention","What it does"],
     rows:[
      ["Insecticide-treated bed net","keeps the mosquito off you while you sleep — the strongest single step"],
      ["Clear bushes, gutters and standing water","removes the places where the mosquito lays its eggs in water"],
      ["Cover or empty tins, tyres and buckets weekly","stops water standing long enough for wrigglers to become flies"],
      ["Screens, long sleeves and trousers at dusk","fewer bites at the hours when the mosquito feeds"],
      ["Early testing and the full course of medicine","stops a small fever becoming severe malaria, and stops the parasite passing on"],
      ["Indoor spraying and proper drainage","brings the whole community's mosquito numbers down"]
     ]},
    {k:"h3", t:"Good Touch, Bad Touch and Who Does It"},
    {k:"p", t:"A **good touch** is wanted, safe and public: a handshake, a high-five, a parent's hug at home, a nurse's examination while a parent holds you. A **bad touch** is any touch of the breasts, buttocks, vulva or penis; any touch under clothing that leaves you confused or afraid; being made to touch someone else; and being shown pictures of naked people. Possible **perpetrators** are most often people the child already knows and trusts — a relative, a neighbour, a step-parent, a teacher, a religious man, an older boy — not a stranger in the bush. **Grooming** is how an abuser prepares: gifts, extra attention, secrets, a boundary tested little by little, and a threat that you or your family will suffer if you speak."},
    {k:"num", items:[
      "Say NO firmly, in your own words: “I do not want anyone to touch my breasts, buttocks, vulva or penis.”",
      "Get away to a place where there are people.",
      "Tell an adult you trust the same day — parent, teacher, head teacher or school health worker.",
      "Keep telling until someone acts; a grown-up who ignores it is not the adult you are looking for.",
      "Do not carry the shame: the wrong belongs to the one who did it, never to the child.",
      "Protect other children by telling: an adult who hurts one child has usually hurt more."
    ]},
    {k:"h3", t:"Pregnancy: The Facts and the Consequences"},
    {k:"p", t:"**Conception** happens when a sperm cell from a male joins an egg cell from a female, usually in the fallopian tube; the joined cell grows into a baby in the **womb** and is born about **nine months** later. A female can become pregnant; a male cannot — which is exactly why a boy cannot walk away from a pregnancy either: the responsibility begins before the birth, with the courage to wait. **Pregnancy as a teenager** usually means school left, a small body carrying a heavy risk (bleeding and eclampsia, with far greater danger of death in childbirth for a very young mother), no money, and a childhood unfinished; the father's life changes too, with work and expenses arriving early. The **surest** way for a Grade 4 pupil to avoid pregnancy is **abstinence** — no sex at all. Contraceptives (condoms, pills, injections, implants and IUDs) belong to adults planning a family: only the condom also lessens STIs, and none of them is a reason to start sex early. Anyone pressuring you is not respecting you, and **no means no — at any age, from anyone, including a husband or a boyfriend**."}
  ],
  focus:[
    "Puberty: physical, emotional and social changes in girls and boys",
    "Menstruation and wet dreams as normal body work, handled with respect",
    "Personal hygiene that grows with the changing body",
    "The layers of the skin, and how malaria enters through the skin",
    "Good touch and bad touch, grooming, and the six-step safety rule",
    "Conception and pregnancy, and how a Grade 4 pupil prevents them"
  ],
  terms:[
    {t:"puberty", d:"the years when a child's body changes into an adult body able to make a baby", x:"Puberty usually begins between 10 and 14."},
    {t:"adolescence", d:"the growing-up years between childhood and adulthood", x:"Adolescence brings new feelings and new duties."},
    {t:"hormone", d:"a chemical messenger carried in the blood that tells an organ what to do", x:"Hormones start the changes of puberty."},
    {t:"menstruation", d:"the monthly flow of blood from the womb of a female", x:"Menstruation usually lasts three to five days."},
    {t:"ovulation", d:"the release of an egg from the ovary, about the middle of the cycle", x:"Pregnancy can follow if the egg meets a sperm."},
    {t:"emotional change", d:"a change in feelings and moods", x:"Feeling shy or quick-tempered is an emotional change."},
    {t:"hygiene", d:"keeping the body clean in order to stay healthy", x:"Hygiene must change along with puberty."},
    {t:"epidermis", d:"the outer layer of the skin", x:"The epidermis keeps germs out."},
    {t:"dermis", d:"the layer under the epidermis, with nerves, hair roots and glands", x:"Sweat and oil come from glands in the dermis."},
    {t:"malaria parasite", d:"the tiny living thing that causes malaria, passed by a mosquito", x:"The parasite enters the blood through the skin."},
    {t:"good touch", d:"a wanted, safe and public touch", x:"A handshake is a good touch."},
    {t:"bad touch", d:"any touch of a private part, or any touch that frightens or must be kept secret", x:"A bad touch must be reported the same day."},
    {t:"perpetrator", d:"the person who does the harm", x:"Most perpetrators are already known to the child."},
    {t:"consent", d:"a free, clear yes from a person able to choose — a child can never give it", x:"No means no, at any age."},
    {t:"abstinence", d:"choosing not to have sex", x:"Abstinence is the surest protection for a pupil."},
    {t:"self-respect", d:"valuing your own body and life enough to protect them", x:"Self-respect is the reason behind the slogan."}
  ],
  facts:[
    {q:"What is puberty?", a:"The time when a child's body changes into an adult body that can make a baby, driven by hormones."},
    {q:"Name two physical changes at puberty that happen to both girls and boys.", a:"Growing taller, hair under the arms and around the private parts, oilier skin and more sweat, a changing voice (any two)."},
    {q:"Why is bathing more important during puberty?", a:"Because the sweat and oil glands become active, so the body smells and the skin breaks out unless it is washed daily."},
    {q:"What is menstruation?", a:"The monthly flow of blood and tissue from the womb when no pregnancy has begun; it is normal and not dirt."},
    {q:"Name the two main layers of the skin.", a:"The epidermis outside and the dermis under it."},
    {q:"How does malaria get into the body?", a:"The female Anopheles mosquito bites through the skin at dusk or dawn and puts the malaria parasite into the blood."},
    {q:"State three ways to prevent malaria.", a:"Sleep under a treated net, clear bushes and blocked drains, empty standing water weekly, cover up at dusk, test and treat a fever early (any three)."},
    {q:"What is the difference between a good touch and a bad touch?", a:"A good touch is wanted, safe and public; a bad touch is of a private part, or frightens or confuses you, or must be kept secret."},
    {q:"What should you do about a bad touch?", a:"Say no, get away to where people are, tell a trusted adult the same day, and keep telling until someone acts."},
    {q:"Name the surest way for a school pupil to avoid pregnancy.", a:"Abstinence — no sex at all."},
    {q:"Give two consequences of teenage pregnancy.", a:"School left, danger to the young mother and baby, no money, shame and stress for both families (any two)."}
  ],
  tf:[
    {s:"Only strangers give bad touches.", a:"false", why:"Most bad touches come from someone the child already knows and trusts."},
    {s:"Menstruation means a girl is dirty or ill.", a:"false", why:"It is normal body work; she needs rest, clean material and privacy, not teasing."},
    {s:"The mosquito that spreads malaria breeds in clean, still water.", a:"true", why:"It lays its eggs in standing water — a blocked gutter, a tin, an old tyre."},
    {s:"The dermis is the outermost layer of the skin.", a:"false", why:"The epidermis is outermost; the dermis lies under it."},
    {s:"The condom is the surest way for a Grade 4 pupil to avoid pregnancy.", a:"false", why:"Abstinence is; contraceptives are for adults planning a family, and only the condom also lessens STIs."},
    {s:"Boys and girls must be treated with equal respect at puberty.", a:"true", why:"Both bodies are changing, and both deserve the same protection and the same chances at school."}
  ],
  classify:{
    title:"Sort these changes and actions",
    groups:[
      {name:"Physical changes", items:["growing taller","breasts begin to grow","the voice deepens","hair under the arms","oilier skin"]},
      {name:"Emotional changes", items:["feeling shy","a quick temper","falling in love","wanting privacy","worrying about the body"]},
      {name:"Social and cultural changes", items:["being given more responsibility","boys and girls treated differently at home","joining a health or peer club","courtship at an older age"]},
      {name:"Hygiene for the changing body", items:["bathing daily","washing the private parts and drying them","changing a napkin or cloth and washing the hands","wearing clean underwear daily","washing the face and hair"]},
      {name:"Must be reported", items:["a touch on the breasts or private parts","being made to touch someone else","a request to keep touching secret","being shown naked pictures","a threat for speaking out"]}
    ]
  },
  diagram:{
    title:"Personal hygiene during puberty",
    caption:"Look at the two dressed figures on the chart and write the daily care for each marked part.",
    parts:[
      {p:"Skin of the trunk", f:"bath daily with soap, dry well, wear clean clothing"},
      {p:"Face", f:"wash twice a day to remove the extra oil and ease pimples"},
      {p:"Armpits", f:"wash and scrub; use deodorant if the family can afford it"},
      {p:"Private parts", f:"wash with clean water front to back, dry, wear clean cotton underwear"},
      {p:"Feet", f:"wash between the toes and dry; wash the sandals or shoes"},
      {p:"Teeth and mouth", f:"brush morning and night; rinse after anything sweet"},
      {p:"Hair and scalp", f:"wash and comb with your own comb; treat nits early"}
    ]
  },
  experiment:{
    title:"Growth and Hygiene Record (Four-Week Observation Study)",
    aim:"To record the changes and the new hygiene duties of your own body honestly, and to see whether the plan was kept.",
    materials:["A notebook or journal page","A ruler, and a scale if one is available","A chart of the daily hygiene habits"],
    steps:[
      "Record your height and weight, and how many days last week you bathed, washed your hair, brushed your teeth and changed your underwear.",
      "Write the new hygiene duties your body now needs (washing more often, carrying a clean cloth or napkin, washing the uniform).",
      "Repeat the record every week for four weeks; keep it private — a tick chart, not a confession, if you prefer.",
      "Graph the days of bathing and tooth-brushing, and mark your height at each week.",
      "Conclude in writing: which habit was hardest, what you will change next month, and why the body now needs it."
    ],
    expect:"A steady upward height line, an improving habit graph, and a conclusion naming one habit to fix.",
    why:"Puberty is the age when habits decide adult skin, dental and body health; measuring one's own change turns a lecture into a personal plan, and the private format protects the pupil's dignity."
  },
  apply:[
    {q:"A girl in your class has blood on her uniform and the others laugh. What does a pupil with self-respect do?", a:"Hand her a jacket or a cloth, walk with her to get clean material, tell the teacher quietly, and stop the laughing — menstruation is normal, not a joke."},
    {q:"An uncle says, “This is our secret; do not tell your mother.” What do you do?", a:"Refuse the secret, get away, and tell a trusted adult the same day: a secret about touching is a warning, not a promise to keep."},
    {q:"Rain water stands in tins and old tyres in your compound. Advise the family on malaria.", a:"Empty or cover them every week, clear the gutter and cut the bushes, sleep under a treated net, and test and treat any fever within a day."},
    {q:"A boy says he cannot be harmed because he is a boy. Correct him.", a:"Nobody is beyond harm: boys can be touched wrongly too, and the rule is the same for everyone — say no, get away, tell a trusted adult the same day."},
    {q:"Why can a boy not “walk away” from a pregnancy?", a:"Because the mother and the baby need support before and after the birth — the responsibility starts long before the baby comes, and preventing it lies wholly in his hands."},
    {q:"Your younger brother asks where babies come from. Answer as the guide does.", a:"A sperm cell from the father joins an egg cell from the mother, usually in a tube inside her body; the baby then grows in the womb for about nine months and is born through the birth canal."}
  ],
  activities:[
    "Question and answer on what good health is and why keeping healthy matters",
    "Drawing of a boy and a girl on the chart (dressed), naming the parts that change",
    "Small-group work by type of change — physical, emotional, social — with a report back to the class",
    "Matching exercise linking good and bad touches, then the teacher's demonstration on the chart",
    "Same-sex group discussion of the body changes, led by a same-sex teacher or the health worker",
    "Open-ended class discussion on pregnancy: who gets pregnant, the signs, and the role of the father",
    "Role play of a prepared and an unprepared father during pregnancy, then the discussion",
    "Brainstorm of the ways to avoid pregnancy, written up as the class list on the wall chart",
    "Two mixed-ability groups: one builds a soil profile in a jar, one prepares the skin cross-section poster",
    "Field trip to dig and read a soil section, recording colour, particle size and texture",
    "Venn diagram of the similarities and differences between the skin profile and the soil profile",
    "Portfolio project: a written family plan for destroying the mosquito breeding places at home"
  ],
  materials:[
    "Charts and posters on puberty and body change (dressed figures)",
    "Hygiene materials for the demonstration: soap, towel, clean cloth, napkin, comb",
    "Picture books, and a video or projector if the school has power",
    "Charts of the skin, the soil profile and the malaria cycle; a mosquito net to handle",
    "Jars, soil and water for the profile work; a spade and hand lens for the dig",
    "Notebooks for the growth and hygiene record; a ruler and a scale if available"
  ],
  aids:[
    "Puberty chart with the girls' and the boys' changes side by side",
    "A two-column chart or two hoops: SAFE TOUCH / MUST BE REPORTED",
    "Word cards — puberty, hormone, menstruation, consent, epidermis, parasite",
    "A real insecticide-treated net to unfold and inspect",
    "Skin and soil profile charts for the Venn diagram",
    "Hygiene checklist card for the four-week record"
  ],
  home:[
    "Show your family the six-step rule for a bad touch and agree which two adults are your trusted ones",
    "Walk the compound with a grown-up and destroy or cover every place where water stands; write down what you found",
    "Sleep under the treated net every night this week, and count the mornings you woke without bites",
    "Get your own hygiene kit ready for the school bag (soap, clean cloth or napkin, towel, comb) and check it each morning",
    "Ask a parent or elder what they were taught about respect between boys and girls at your age, and bring one sentence to class"
  ],
  assessment:[
    "The hygiene checklist and four-week growth record, marked for honesty and improvement",
    "Labelled diagrams: the skin profile, the soil profile and the pathway of malaria infection",
    "Role play: refusing a bad touch and reporting it, scored with the class rubric",
    "Oral and written test on puberty changes, good and bad touches, and malaria prevention",
    "Spelling and vocabulary test on the lesson key terms",
    "The family plan for destroying mosquito breeding places, presented as a poster",
    "Discussion-circle contribution on the consequences of teenage pregnancy and the father's role"
  ]
},

/* ============================ GRADE 5 · PERIOD III ============================ */
{
  grade:5, period:"III", sem:"One", icon:"🍲", healthPlan:true,
  title:"Nutrition, Germs and the Health Services Near Us",
  subtitle:"Health strand · health lessons — nutrition and HIV, the immune system, the three food groups, conception and contraceptives, abstinence and risky situations, community health services (guide pp. 54–55)",
  outcomes:[
    "Broaden their knowledge of the impact of nutrition during HIV infection and care for the nutritional needs of people living with HIV",
    "Explain how the body's immune system protects us and why good food defends it",
    "Outline the facts of conception and pregnancy, identify contraceptives and where they are found, and distinguish healthy from unhealthy relationships"
  ],
  objectives:[
    "State the meaning of a nutrient and name the three food groups with local examples",
    "Explain how nutrients improve the body's immune system",
    "Describe the role of nutrition for a person living with HIV",
    "Explain how conception happens, and what the menstrual cycle and ovulation are",
    "Identify the kinds of contraceptives, how they work, their strengths, weaknesses and side effects, and where they are obtained",
    "Distinguish the benefits of abstinence, identify risky situations, practise refusal skills, and tell healthy from unhealthy relationships",
    "Outline the community health services that keep a family well"
  ],
  safeguard:"The contraceptive and conception content of this unit is the national Grade 5 curriculum and is taught as information for responsible adulthood, never as encouragement to be sexually active. Keep it factual, brief and clinical; use the chart of the menstrual cycle and of the reproductive organs rather than any role play that puts pupils in a sexual situation. Boys and girls may discuss their own body changes in separate groups with a same-sex teacher, as the guide directs. Role play is used only for refusal, for avoiding risky situations and for supporting a friend. No pupil is asked about their own or a relative's sexual experience. Any disclosure of abuse is reported the same day to the head teacher and the carer, in confidence, with no class discussion. Where a pupil is already a parent or pregnant, the response is a plan for school attendance and health care — not punishment, and not a public talk.",
  note:"<b>Nutrition</b> is what the body takes in and uses. Good food is the immune system's ammunition: <b>white blood cells</b> and <b>antibodies</b> are built out of protein, so a hungry body cannot fight germs well. A person living with <b>HIV</b> needs good food above all else, together with ARV medicine, to stay strong and live long. <b>Conception</b> needs a sperm and an egg to meet; <b>contraceptives</b> act at that meeting-point and belong to adults planning a family; <b>abstinence</b> is the fully safe choice for a pupil.",
  study:[
    /* ---- course text: Grade 5, Semester One, Period III (guide pp. 54-55) ---- */
    {k:"h3", t:"What Is a Nutrient? The Three Food Groups"},
    {k:"p", t:"A **nutrient** is a part of food that the body uses for energy, building or protection. The guide groups foods three ways, and the day's eating should take **at least one kind from each group**:"},
    {k:"table", head:["Group","Work in the body","Liberian examples"],
     rows:[
      ["Energy foods (carbohydrate, fat and oil)","burn slowly to give heat and strength","rice, cassava and gari, foo-foo, plantain, breadfruit, yam, cocoyam, sugar, palm oil, groundnut oil"],
      ["Body-building foods (protein)","grow and repair muscle, blood and skin","fish fresh or smoked, meat, eggs, milk, groundnut, cowpea, beans, palm-nut meat"],
      ["Protective foods (vitamins and minerals)","guard against disease and keep eyes, skin, gums, bones and nerves working","bitter leaf, jute mallow (fiofio), pumpkin leaf, cassava leaf, orange, pawpaw, guava, soursop, banana, carrot, tomato, salt, crayfish"]
     ]},
    {k:"p", t:"**Malnutrition** is a body out of balance with its food: too little of it (wasting, stunting), the wrong things (too much sugar and fried fat), or a missing nutrient (iron anaemia, goitre from too little iodine, kwashiorkor from too little protein, rickets and poor eyesight from missing vitamins). Clean **water** is not a food group but belongs to every meal — six to eight cups a day, safe to drink."},
    {k:"h3", t:"The Immune System: How the Body Fights Germs"},
    {k:"p", t:"The **immune system** is the body's defence. Germs are met first by the **skin** and by the linings of the nose, throat and gut; **white blood cells** in the blood and lymph then hunt and destroy the germs and make **antibodies** that remember them, so the next attack is defeated before it makes you ill. This readiness is **immunity**. It is built by having survived a disease, by a **vaccine** (which shows the body a harmless piece of the germ so it can prepare), and in a baby by the mother's milk. Food and rest do not kill a germ by themselves — they keep this defence strong enough to do the fighting."},
    {k:"h3", t:"Nutrition and HIV"},
    {k:"bul", items:[
      "**HIV** weakens the immune system by destroying the very white blood cells that organise the defence; untreated, the body loses the strength to fight ordinary infections — the stage called **AIDS**.",
      "HIV is passed by sexual contact with an infected person, by blood (shared blades and needles, unsterilised tools, an infected transfusion), and from an infected mother to her baby in pregnancy, birth or breastfeeding.",
      "HIV is NOT passed by hugging, sharing food or a cup, sitting together, playing, swimming, a toilet seat, a mosquito bite, or being taught by a person living with HIV.",
      "Good nutrition does not cure HIV, but it keeps the defence working, holds the weight up, helps the medicine act, and lets a person living with HIV work, go to school and live long — with **ARV** tablets taken every day for life, never missed.",
      "Caring for the nutritional needs of a person living with HIV: small frequent meals; something from all three groups every day; eggs, fish, groundnut and oil for strength; fruit and green leaves; plenty of clean water; food cooked and served hygienically, because ordinary germs are more dangerous to them; and support instead of gossip, since shame keeps people away from the clinic.",
      "A person who eats well and takes ARVs on time can live a long, active life: the dangerous illness is the untreated one."
    ]},
    {k:"h3", t:"Conception, the Menstrual Cycle and Pregnancy"},
    {k:"p", t:"At **ovulation**, about the middle of the cycle, an ovary releases an egg into the fallopian tube. The **menstrual cycle** averages about **28 days**; the womb lining thickens ready for a pregnancy and, when no egg has been joined, leaves the body as the monthly flow. **Conception** happens when one **sperm** cell joins the **egg** cell, usually in the fallopian tube; the joined cell travels to the womb, settles into the lining and grows. A baby develops in the **womb** for about **nine months (40 weeks)** and is born through the **birth canal**. A pregnancy is prevented only by acting **before** the sperm meets the egg — which is what contraceptives do, and why sex between children is neither safe nor lawful."},
    {k:"h3", t:"Contraceptives: Kinds, Strengths, Weaknesses and Where They Are Found"},
    {k:"table", head:["Method","How it works","Strength","Weakness or side effect","Where it is found"],
     rows:[
      ["Male condom","keeps sperm out of the vagina","cheap and easy; the only method that also lessens STI spread","can tear or slip; single use only","shops, clinic, health worker, community agent"],
      ["Oral pills (daily)","stop the ovary releasing eggs","very effective when taken as directed; periods lighter","a pill every day at the same time; nausea or spotting at first; missed pills risk pregnancy","clinic or pharmacy, with advice"],
      ["Injection (every 2 or 3 months)","stops the release of eggs","private, lasts months, very effective","must return on time; weight change and irregular bleeding at first","clinic, health centre, outreach team"],
      ["Implant (rod in the arm)","releases hormone for years","three to five years of protection, and reversible","fitted and removed only by a health worker; irregular bleeding","clinic, hospital"],
      ["IUD (device in the womb)","stops the joined cell settling","long and reversible, with nothing to remember","fitted only by a health worker; cramps at first; needs checking","clinic, hospital"],
      ["Fertility-awareness methods and withdrawal","avoid the fertile days; withdraw before ejaculation","no cost and no drug","unreliable for a young couple; gives no STI protection at all","teaching at the clinic"],
      ["Sterilisation (operation)","permanently blocks the tube or the vas","permanent, for adults whose family is complete","it is an operation and must not be expected to be undone","hospital"]
     ]},
    {k:"p", t:"Contraceptives are for **adults planning a family**. For a pupil the guide's own answer is **abstinence**: completely effective, free, no side effect, no clinic visit, and no risk of an STI. A trusted **health worker** is the right person to ask about any method — not a friend, a shop or an advertisement — and no one has the right to pressure a person into sex, into refusing a condom, or into hiding contraception."},
    {k:"h3", t:"Risky Situations, Refusal Skills and Healthy Relationships"},
    {k:"bul", items:[
      "Risky situations to avoid: being alone in a lonely place at night; an adult's closed room; a vehicle with one passenger; a party where alcohol and drugs are flowing; being carried home drunk; an older “sponsor”, an ex-boyfriend, or a classmate with a camera; any offer that comes with a demand for secrecy; gifts, school fees or phone credit given as payment.",
      "Refusal is a skill, not a mood: say it early and clearly, give your reason, do not argue or negotiate, move away, and tell someone if the pressure continues. Practise the lines: “No — my body belongs to me.” “Not now, not at my age.” “If you respected me, you would stop.”",
      "A **healthy relationship** respects both people: it keeps each in school, tells the truth, lets a NO be heard, asks nothing secret, and has no fear or beating in it. An **unhealthy relationship** controls, isolates, shames, threatens, hits or uses sex as payment. Leaving it means telling a trusted adult, keeping your phone and your way home ready, and never meeting alone to “explain”.",
      "Getting out is harder than never getting in. The guide's think-and-write asks: what do you want your life to look like in ten years? A baby now, an infection now or a court case now can rewrite that plan — and so can a body you protected while you were still a child."
    ]},
    {k:"h3", t:"Community Health Services"},
    {k:"p", t:"A **community health service** is the care a family can reach near home: the village health post, the clinic or health centre, the hospital, the midwife and the **antenatal care** for mothers, the **EPI immunisation** days for babies, the **VCT** testing point and the **ART** clinic for HIV, the nutrition programme for children, malaria testing and treatment, the health education talks, the safe water point and the latrine, and the local authority's refuse arrangements. Knowing **where** it is, **when** it opens and **what** it costs is a health skill in itself: go early, follow the instructions, finish the medicine, and return for the check."}
  ],
  focus:[
    "Nutrients and the three food groups in Liberian foods",
    "Malnutrition in both directions — too little, and the wrong food",
    "The immune system: white blood cells, antibodies and vaccination",
    "HIV and nutrition: eat well, take ARVs on time, care without gossip",
    "The menstrual cycle, ovulation, conception and pregnancy",
    "Contraceptives: kinds, how they work, where they are found",
    "Abstinence, risky situations and refusal skills; healthy and unhealthy relationships",
    "The community health services a family can reach"
  ],
  terms:[
    {t:"nutrient", d:"a part of food that the body uses for energy, building or protection", x:"Cassava supplies the energy nutrient."},
    {t:"balanced diet", d:"food that takes at least one kind from each group, in the right amount", x:"Rice, fish sauce and pumpkin leaf make a balanced plate."},
    {t:"malnutrition", d:"harm to the body from too little, too much, or the wrong food", x:"Kwashiorkor is malnutrition from too little protein."},
    {t:"immune system", d:"the body's system for finding and destroying germs", x:"The immune system remembers a germ it has met."},
    {t:"white blood cell", d:"the cell in the blood that attacks and eats germs", x:"White blood cells fight the infection."},
    {t:"antibody", d:"the protein the body makes to mark and defeat a germ", x:"A vaccine makes the body prepare antibodies."},
    {t:"immunity", d:"being able to resist a disease", x:"Breast milk gives a baby immunity."},
    {t:"vaccine", d:"a harmless preparation that trains the body against a disease", x:"Children receive a vaccine on the EPI day."},
    {t:"HIV", d:"the virus that weakens the body's defence against sickness", x:"HIV is prevented by safe conduct and held back by ARVs."},
    {t:"ARV", d:"the medicine that holds HIV back so the defence can work", x:"ARVs are taken for life, without missing doses."},
    {t:"ovulation", d:"the release of an egg from the ovary, about the middle of the cycle", x:"Pregnancy can only follow ovulation."},
    {t:"conception", d:"the joining of a sperm and an egg to begin a pregnancy", x:"Conception usually happens in the fallopian tube."},
    {t:"contraceptive", d:"a method used to prevent conception", x:"The condom is the only contraceptive that also lessens STIs."},
    {t:"abstinence", d:"choosing not to have sex", x:"Abstinence is fully effective and costs nothing."},
    {t:"risky situation", d:"a place or moment where harm is likely if you stay", x:"Being alone in a lonely place at night is a risky situation."},
    {t:"peer pressure", d:"push from people of your own age to do what they do", x:"Refusal skills beat peer pressure."},
    {t:"clinic", d:"the small health facility where a family is treated and advised", x:"The clinic tests for malaria and supplies contraceptives."}
  ],
  facts:[
    {q:"What is a balanced diet?", a:"Food that takes at least one kind from each of the three groups — energy, body-building and protective — in the amount the body needs."},
    {q:"Name the food group that gives energy, with two Liberian examples.", a:"Energy foods (carbohydrate, fat and oil): rice, cassava, gari, plantain, breadfruit, palm oil (any two)."},
    {q:"Name the food group that builds the body, with two examples.", a:"Body-building foods (protein): fish, eggs, groundnut, beans, cowpea, dried meat (any two)."},
    {q:"What is the work of the immune system?", a:"To find and destroy germs and to remember them, so the next attack is defeated quickly."},
    {q:"Which blood cells fight germs?", a:"White blood cells."},
    {q:"Why is good nutrition important for a person living with HIV?", a:"The defence needs building material: good food keeps strength and weight, lets the ARVs work, and stops small infections becoming dangerous."},
    {q:"Name two ways in which HIV is not transmitted.", a:"Not by hugging, sharing food or a cup, playing, a toilet seat, swimming or mosquitoes (any two)."},
    {q:"Where does a baby grow, and for how long?", a:"In the womb (uterus), for about nine months, or 40 weeks."},
    {q:"What is ovulation?", a:"The release of an egg from the ovary, about the middle of the menstrual cycle."},
    {q:"Name two contraceptives and how each works.", a:"Condom — keeps the sperm out; pills — stop the ovary releasing eggs; injection or implant — hormone that stops the release of eggs; IUD — stops the joined cell settling (any two)."},
    {q:"What is the one advantage of the condom over the pill?", a:"It also lessens the spread of STIs, including HIV."},
    {q:"State three benefits of abstinence for a pupil.", a:"No pregnancy, no STI or HIV, no side effect, no cost, school kept, and time to grow up (any three)."},
    {q:"Name three community health services.", a:"The health post or clinic, the hospital, the midwife and antenatal care, EPI immunisation, VCT and ART for HIV, malaria testing, the nutrition programme, the safe water point (any three)."}
  ],
  tf:[
    {s:"Good nutrition can cure HIV.", a:"false", why:"It keeps the defence strong and the ARVs working, but only medicine holds the virus back; there is no cure."},
    {s:"A body short of protein cannot build the cells that fight germs.", a:"true", why:"Antibodies and white blood cells are built from the body-building nutrients."},
    {s:"Taking ARVs only when you feel ill is enough.", a:"false", why:"They must be taken every day without missing a dose, or the virus multiplies and becomes resistant."},
    {s:"A person can be living with HIV and still look quite healthy.", a:"true", why:"For years there may be no outward sign; only a test at a health facility tells."},
    {s:"Withdrawal is a reliable contraceptive.", a:"false", why:"Sperm can leave before withdrawal, so it fails often and protects against no STI at all."},
    {s:"A relationship that frightens you is unhealthy and can be left.", a:"true", why:"Respect, safety and a NO that is heard are the marks of a healthy relationship; tell a trusted adult and leave."},
    {s:"A health worker, not a shop, is the right person to ask about contraceptives.", a:"true", why:"A health worker explains the method, the side effects and the correct use, and screens for STIs; a shop only sells."}
  ],
  classify:{
    title:"Sort these foods by nutrient",
    groups:[
      {name:"Energy foods", items:["rice","gari and foo-foo","plantain","breadfruit","yam","cassava","palm oil","sugar"]},
      {name:"Body-building foods", items:["fish","eggs","groundnut","cowpea","beans","dried meat","milk","palm-nut meat"]},
      {name:"Protective foods", items:["bitter leaf","pumpkin leaf","fiofio","orange","pawpaw","guava","carrot","tomato","crayfish"]},
      {name:"Not a food group (and harmful in excess)", items:["alcohol","cigarettes","sweets and fizzy drinks","very strong tea or coffee","unknown herbal mixtures"]}
    ]
  },
  diagram:{
    title:"How the body defends itself",
    caption:"Copy the defence chart and write the work of each line of defence.",
    parts:[
      {p:"Skin", f:"the first wall — keeps germs out of the body"},
      {p:"Mucus and cilia of the nose and throat", f:"trap the germs in the air and sweep them out"},
      {p:"Stomach acid", f:"destroys the germs that come in with food and water"},
      {p:"White blood cells", f:"hunt, eat and destroy the germs that get through"},
      {p:"Antibodies", f:"mark the germ and remember it for the next meeting"},
      {p:"Fever", f:"heat that slows the germs while the body fights"},
      {p:"Vaccine", f:"the training that gives memory without the illness"}
    ]
  },
  experiment:{
    title:"Plan a Balanced Meal from Local Foods — and Test the Class Plates",
    aim:"To build a day's menu from foods the family can actually buy, and check that all three groups are present.",
    materials:["Food pictures, empty packets or real samples","Chart paper and markers","Cups or a scale if available","A notebook for the cost"],
    steps:[
      "In groups, write one day of food for a family of five — breakfast, lunch, supper and a snack — using only foods sold in your market.",
      "Mark each item with a letter: E for energy, B for body-building, P for protective.",
      "Check the day: does every meal carry at least one E, one B and one P? Work out the cost of the day's food.",
      "Exchange menus with another group and improve them: cheaper, more local, more balanced.",
      "Present the changed menu and answer: which group was hardest to find, and why?"
    ],
    expect:"Every group names its foods by group and produces a menu carrying all three letters at each meal; most groups find the protective group the shortest.",
    why:"A balanced diet is decided in the market and at the pot, not on paper. The letter test makes the missing group visible, and costing the day teaches the family budget that a nurse would otherwise have to explain."
  },
  apply:[
    {q:"A neighbour with HIV stopped her ARVs because she feels strong. Advise her.", a:"Feeling strong is the medicine working; stopping lets the virus multiply and the body grow ill again. The tablets are for life, every day, with good food and the clinic follow-up kept."},
    {q:"The family eats rice and palm-oil sauce with no fish or meat. Which group is short, and what can be added cheaply?", a:"Body-building (protein) is short; work groundnut, beans or cowpea into the sauce, and add dry fish or eggs when there is money."},
    {q:"A friend is being “sponsored” with phone credit by an older man who expects sex. Give the four-step advice.", a:"Refuse early and clearly; reason — “I am a student; my body is not for sale”; run — stop meeting alone and leave that place; report — tell a trusted adult or teacher so it is stopped before harm is done."},
    {q:"Why is the clinic better than the pharmacy for a first question about contraceptives?", a:"Because a health worker examines, explains the side effects and correct use, keeps a record and screens for STIs; a shop only sells a packet."},
    {q:"A baby has missed its vaccines. What do you tell the mother?", a:"Take the baby on the next EPI day, carry the health card, and finish every dose — a vaccine trains the immune system before the germ arrives."},
    {q:"Your classmate is teased for a dirty uniform. What does this lesson say about hygiene and dignity?", a:"Hygiene teaching never shames what a family cannot afford: wash and mend what you have, share the washing water kindly, and laugh at nobody."}
  ],
  activities:[
    "Identify the three food groups from pictures and samples, in mixed-ability groups",
    "Short teacher talk with the pictorial chart on the nutritional state of people living with HIV",
    "Whole-class discussion on how much is needed from each group every day (at least one kind from each)",
    "Boys and girls in separate groups discuss the body changes each is going through, with a same-sex teacher",
    "Chart work: the menstrual cycle and ovulation read from the diagram",
    "Case study: a parent and child talking about menstruation — what went well, and what did not",
    "Small-group discussion: when does pregnancy occur, and what must meet for it to occur?",
    "Whole-class list of the contraceptives known in the community, with where each is found and its cost",
    "Role play of refusal and of good decision-making under pressure",
    "Think and write: “what I want to become in the next ten years”, then how a teenage baby would change the plan; volunteers read out",
    "Role play of the risky situations to avoid for that plan, followed by the class discussion",
    "Research and report on the community health services: name, distance, opening days and cost"
  ],
  materials:[
    "Posters and charts of the food groups, the immune system and the reproductive chart",
    "Food pictures, samples and empty packets; paper and markers for the menu work",
    "Chart of the menstrual cycle and the table of contraceptives",
    "Level textbook, and the community health-facility map or leaflets",
    "Pictorial material on the nutritional state of people living with HIV",
    "Projector and video on nutrition, HIV or a clinic visit, if the school has power"
  ],
  aids:[
    "Real local foods or their pictures for the E / B / P letter game",
    "The menstrual-cycle chart and the contraceptive table on the wall",
    "Word cards — nutrient, immunity, antibody, ovulation, conception, contraceptive, abstinence",
    "Blank cards for the class to write the community health services and their distances",
    "The health facility's opening-day card or poster, if the clinic supplies one"
  ],
  home:[
    "Cook, or help to cook, one meal carrying all three food groups; write the recipe and its cost in your journal",
    "Find out how far the nearest health post or clinic is, what day it opens and what it costs; report to class",
    "Ask which vaccines you had as a baby, and look for your health card if the family has one",
    "Practise your refusal lines with a brother or sister, and let a parent add one pressure line to answer",
    "Bring one protective food (a fruit or a green leaf) to school this week and name its nutrient"
  ],
  assessment:[
    "The family menu plan, marked on the three groups, local availability and cost",
    "Quizzes and a written test on nutrients, the immune system, HIV facts and conception",
    "Spelling and vocabulary test on the lesson key terms",
    "Science journal: the ten-year plan and the reflection on what could change it",
    "Group oral report on the community health services, with distance, days and cost",
    "Role-play assessment of refusal skills and of leaving an unhealthy situation",
    "Discussion-circle contribution on caring for a person living with HIV without gossip"
  ]
},

/* ============================ GRADE 6 · PERIOD IV ============================ */
{
  grade:6, period:"IV", sem:"Two", icon:"🫀", healthPlan:true,
  title:"The Human Body in Health: Systems, Disease and Healthy Living",
  subtitle:"Health strand · the human body and health lessons — the body systems, the reproductive system and puberty, risky behaviour and STI/HIV prevention, communicable and non-communicable disease, and the habits of healthy living (guide pp. 70–73, with pp. 66–67)",
  outcomes:[
    "Apply knowledge of the body systems to maintain personal and community health",
    "Identify the organs of the male and female reproductive systems and describe their structure and function",
    "Explain the risky behaviours that expose a person to STI/HIV infection, the ways of avoiding them, and the impact of HIV/AIDS on the body's defence system"
  ],
  objectives:[
    "Describe the main body systems — nervous, circulatory, respiratory, digestive, skeletal, muscular and excretory — and their functions",
    "Identify the organs of the male and female reproductive systems and state their functions",
    "Explain the stages of puberty and the different way boys and girls are treated at that time",
    "Distinguish communicable from non-communicable disease, and explain how common diseases spread and are prevented",
    "State how HIV is and is not transmitted, and the way it destroys the body's defence",
    "Explain why exercise, rest and a balanced diet are needed for healthy living, and give the first aid for a cut and a burn"
  ],
  safeguard:"Grade 6 health teaching is the bridge to junior high: the reproductive organs, contraception and HIV are taught as science and as protection, with the correct names, never as instruction, titillation or gossip about named people in the community. Case studies and role plays use invented characters only — no pupil is asked about their own or a family member's sexual experience. Boys and girls may be split for the body-change part, each group led by a same-sex teacher or the health worker, with the discussion of respect, discrimination and reporting done together. Stigma is taught as a health danger of its own: no pupil may be named, laughed at or excluded because of an illness, a family's illness, their body or their home arrangement. A disclosure of abuse, pressure or violence is left at the door of the classroom and taken at once to the head teacher and the carer, kept confidential and never discussed in class; in Liberia the case is referred to the police Women and Children Protection Unit and the Ministry of Gender, Children and Social Protection, and a recent assault is taken to a health facility quickly, within 72 hours, for care and evidence.",
  note:"The body works as <b>systems</b> that depend on one another: the <b>nervous system</b> commands, the <b>circulatory system</b> carries, the <b>respiratory system</b> supplies air, the <b>digestive system</b> supplies food, the <b>skeletal</b> and <b>muscular systems</b> move the body, the <b>excretory system</b> cleans the blood, and the <b>reproductive system</b> carries life to the next generation. A <b>communicable disease</b> passes from one person to another; a <b>non-communicable</b> one cannot. <b>Healthy living</b> — clean food and water, rest, exercise, no tobacco or alcohol, and no risky sex — is what keeps the systems working; <b>HIV</b> attacks the defence system itself, which is why prevention and early treatment matter so much.",
  study:[
    /* ---- course text: Grade 6, Semester Two, Period IV (guide pp. 70-73), with pp. 66-67 ---- */
    {k:"h3", t:"The Body Systems and Their Work"},
    {k:"table", head:["System","Main organs","Its work","How to protect it"],
     rows:[
      ["Nervous","brain, spinal cord, nerves","controls everything — thinking, feeling, moving, and the work of the organs","sleep, no alcohol or drugs, a cap in the sun, helmets and seat belts, no reckless swimming"],
      ["Circulatory","heart, blood, blood vessels","carries food, air and the germ-fighters to every part, and takes waste away","exercise, less fried and salty food, no smoking, treating fever and infection early"],
      ["Respiratory","nose, windpipe, lungs","takes in oxygen and lets out carbon dioxide","no smoking, no cooking in a closed smoky room, clean air, covering a cough, treating asthma properly"],
      ["Digestive","mouth, gullet, stomach, intestines, liver","breaks food into nutrients and pushes out the waste","washed food, clean water, fibre and fruit, eating slowly, washing the hands"],
      ["Skeletal and muscular","bones, joints, muscles","holds the body up, protects the organs, and makes movement","good posture at the bench, carrying the bag on both shoulders, exercise, calcium in crayfish, milk and leaves"],
      ["Excretory","kidneys, bladder, sweat glands","removes water, salt and other waste and keeps the blood balanced","clean drinking water, bathing, not taking unknown tablets in quantity"],
      ["Reproductive","ovaries, womb, vagina; testes, vas deferens, penis","makes the egg and the sperm, joins them, grows the baby and feeds it","cleanliness, respectful and lawful conduct, health checks, and never pressuring anyone"]
     ]},
    {k:"p", t:"The systems are one machine: run three minutes and the **nervous system** orders the **heart** to beat faster so the **lungs** can take in more air and carry more **blood** to the muscles, while the **skin** sweats to cool the work down. Health is that cooperation kept going."},
    {k:"h3", t:"The Reproductive System: Organs and Functions"},
    {k:"p", t:"In the **female** the **ovaries** make the egg cells and the female hormones; a **fallopian tube** carries the egg towards the **womb (uterus)**, where a baby grows; the **vagina** is the birth passage; the **breasts** make milk after birth. In the **male** the **testes** make the sperm cells and the male hormone; the **vas deferens** carries the sperm; the **prostate and other glands** add the fluid; the **penis** delivers it. **Conception** happens when one sperm joins the egg, usually in the fallopian tube. **Hormones** are what turn a child's body into an adult one at **puberty**, which comes about two years earlier, on average, for girls than for boys."},
    {k:"table", head:["Change","Girls","Boys"],
     rows:[
      ["Growth spurt","breasts and hips develop, body fat rises","height and muscle increase, shoulders broaden"],
      ["Hair","pubic and underarm hair","pubic, underarm, then facial and chest hair"],
      ["Skin and voice","oilier skin and pimples; voice a little deeper","oilier skin and pimples; voice deepens; Adam's apple shows"],
      ["Reproductive sign","menstruation begins, usually between 11 and 14","sperm production begins; wet dreams and erections"],
      ["Social treatment","often more policing and earlier chores","often more freedom, and more room for risk-taking"]
     ]},
    {k:"p", t:"The guide asks the class to look honestly at this **difference in treatment** — the chores, the curfews, the excuses, who is questioned and who is trusted — and to discuss **fair treatment, respect and equality**; a drama on the subject, followed by the discussion, is the guide's own activity. Puberty in Liberia may also bring a naming of roles: the same class must state plainly that no role gives anyone power over another person's body."},
    {k:"h3", t:"Sexual Identity, Orientation and Respect"},
    {k:"p", t:"**Sex drive** is the body's natural desire at this age: it is neither shameful nor a command, and it can be governed. **Sexual orientation** names the sex a person is drawn to — **heterosexual** (the other sex), **homosexual** (the same sex), **bisexual** (both). Whatever the law and the custom of the community, the science lesson is plain: no person is to be teased, beaten, shamed or excluded; **discrimination** and bullying damage health, because they push people away from the clinic, the test and the truth. The class answers bullying as a health matter, not a joke."},
    {k:"h3", t:"Risky Behaviour, STIs and HIV"},
    {k:"bul", items:[
      "**Risky behaviours** that expose a person to STI and HIV: drinking liquor, smoking and taking narcotic drugs, which destroy the judgement that says no; being alone in lonely places at night; unprotected sex; sex with several partners or with a much older partner; sharing razors or needles; ignoring a sore or a discharge instead of going to a clinic; and yielding to the pressure of a group or a lover.",
      "Avoiding them and getting out: stay in public places and with your own group; refuse early; an adult who is sexually active uses a condom correctly and every time; be faithful to one tested partner; never share a blade; go for testing; and tell someone the moment a situation turns bad.",
      "The **STIs** named in the guide are syphilis, gonorrhoea, trichomoniasis, hepatitis B and HIV. Most are curable or controllable when treated early at a clinic; untreated they cause sores, pain in passing urine, discharge, infertility, jaundice, and — with HIV — the collapse of the body's defence.",
      "**HIV** is passed by unprotected sex with an infected person, by infected blood (shared blades and needles, unsterilised tools, an infected transfusion) and from an infected mother to her baby in pregnancy, birth or breastfeeding. It is NOT passed by air, water, food, cups, seats, mosquitoes, sport, a shared classroom, or a teacher living with HIV.",
      "**Prevention**: abstinence; being faithful to one uninfected partner; correct and consistent condom use. **Treatment**: testing at a VCT point and **ARVs** taken for life. No STI and no HIV can be told from a person's face or body.",
      "The community's defence is not silence but knowledge, testing, no stigma, and care for those affected — including the children an AIDS death has left behind, and the animals and environment that a weakened household can no longer tend (the guide's own link to ecosystem balance)."
    ]},
    {k:"h3", t:"Contraception, Pregnancy and the Ten-Year Plan"},
    {k:"p", t:"The changes of puberty bring the possibility of a pregnancy. The **contraceptives** that prevent it — condoms, pills, injections, implants, IUDs and sterilisation — each have a strength, a weakness and a side effect, and each has its place: a shop, a pharmacy or a clinic. For a pupil, **abstinence** is the complete choice; for adults, the advice of a health worker is the starting point. **Consent** is what makes any adult relationship lawful and human, and a person who cannot say no is not in a relationship but in a danger. The guide's writing task puts this in the pupil's own terms: name what you want your life to be in ten years, and say honestly what a baby now, an infection now, or a court case now would change."},
    {k:"h3", t:"Communicable and Non-Communicable Disease"},
    {k:"table", head:["Kind","What it means","Examples","How it is stopped"],
     rows:[
      ["Communicable","passes from one person, animal or place to another","cholera, typhoid, diarrhoea, tubercle, malaria, measles, worms, HIV","clean and covered water, handwashing with soap, latrines and refuse control, nets and cleared standing water, immunisation, safe conduct, covering a cough, early treatment"],
      ["Non-communicable","cannot pass between people; from the body, the genes or the way of living","high blood pressure, diabetes, heart disease, asthma, sickle-cell disease, cancer, malnutrition","less salt, sugar and fried fat, daily exercise, no tobacco or alcohol, rest, the doctor's medicine taken properly, family screening"],
      ["Vector-borne (a kind of communicable)","carried by an animal such as a mosquito or a fly","malaria, dengue, yellow fever","remove the breeding places, sleep under a net, screens and covering at dusk, community spraying"]
     ]},
    {k:"p", t:"Four habits hold the whole subject together: a **balanced diet** from the three groups; **exercise** that lifts the pulse most days of the week; **rest and sleep** (eight to ten hours at your age) for body and mind to repair; and **cleanliness with safe conduct** — clean water, washed hands, a used latrine, a slept-under net, and no tobacco, alcohol or risky sex. **Immunisation** prepares the defence before the germ arrives, and **first aid** is the skill this grade must leave school with: press a clean cloth on a bleeding cut and raise the limb; cool a burn under running water or with clean wet cloth for ten minutes, never grease or toothpaste; send for a health worker for anything deep, large or life-threatening; keep the casualty warm, calm and unfed if the belly or leg is hurt."}
  ],
  focus:[
    "The body systems and how each one is protected",
    "The male and female reproductive organs and their functions",
    "Puberty: physical, emotional and social change, and unequal treatment",
    "Sexual identity and orientation; the health cost of discrimination",
    "Risky behaviour, STIs and HIV: how they pass and how they do not",
    "Contraceptives, pregnancy and the ten-year plan",
    "Communicable versus non-communicable disease",
    "Exercise, rest, a balanced diet, immunisation and first aid"
  ],
  terms:[
    {t:"system", d:"a group of organs working together for one purpose", x:"The circulatory system moves the blood."},
    {t:"nervous system", d:"brain, spinal cord and nerves, which control the body", x:"The nervous system tells the muscle to move."},
    {t:"circulatory system", d:"heart, blood and vessels, which carry food, air and waste", x:"The circulatory system feeds every part."},
    {t:"respiratory system", d:"the organs that take in air and let air out", x:"The respiratory system supplies oxygen."},
    {t:"digestive system", d:"the organs that break food into nutrients", x:"The digestive system turns rice into fuel."},
    {t:"ovary", d:"the female organ that makes the egg and the hormones", x:"The ovary releases an egg each cycle."},
    {t:"testis", d:"the male organ that makes sperm and the male hormone", x:"The testes lie outside the body because sperm need cooler heat."},
    {t:"womb", d:"the organ where a baby grows before birth", x:"The baby grew in the womb for nine months."},
    {t:"sperm", d:"the male sex cell that joins the egg", x:"One sperm joins one egg at conception."},
    {t:"contraceptive", d:"a method that prevents conception", x:"The condom is the only contraceptive that also blocks STIs."},
    {t:"communicable disease", d:"an illness that passes from one to another", x:"Cholera is a communicable disease."},
    {t:"non-communicable disease", d:"an illness that cannot pass to another person", x:"Diabetes is non-communicable."},
    {t:"transmission", d:"the way a germ moves from one host to another", x:"Cut the transmission and the outbreak ends."},
    {t:"immunisation", d:"giving a vaccine so the body is ready before the germ arrives", x:"Immunisation keeps measles out of the school."},
    {t:"risk", d:"the chance of harm in a situation or a habit", x:"Name the risk, then change the plan."},
    {t:"stigma", d:"the shame and exclusion put on a sick person", x:"Stigma keeps people from the clinic, and that kills."},
    {t:"first aid", d:"the immediate help given before the health worker arrives", x:"Press a clean cloth on the cut — that is first aid."}
  ],
  facts:[
    {q:"Name the system that controls all the activities of the body.", a:"The nervous system — the brain, spinal cord and nerves."},
    {q:"Which organ makes the egg cell, and which makes the sperm cell?", a:"The ovary makes the egg; the testis makes the sperm."},
    {q:"Where does fertilisation normally happen?", a:"In the fallopian tube."},
    {q:"Give three examples of communicable diseases.", a:"Cholera, typhoid, tubercle, malaria, measles, diarrhoea, HIV (any three)."},
    {q:"Give two examples of non-communicable diseases.", a:"High blood pressure, diabetes, heart disease, asthma, sickle-cell disease, cancer (any two)."},
    {q:"How is cholera commonly spread, and how is it stopped?", a:"By water or food soiled with the faeces of a case; clean or boiled and covered water, washed food, latrines and handwashing stop it."},
    {q:"State three habits of healthy living.", a:"A balanced diet, daily exercise, enough rest and sleep, cleanliness and handwashing, safe conduct, no tobacco or alcohol (any three)."},
    {q:"State three ways to prevent HIV/AIDS.", a:"Abstinence, faithfulness to one uninfected partner, correct condom use, never sharing blades or needles, testing and treatment (any three)."},
    {q:"Name two ways HIV is not spread.", a:"Not by mosquitoes; not by sharing food, cups, seats or a classroom (any two)."},
    {q:"What is the impact of HIV on the body's defence system?", a:"It destroys the white blood cells that organise the defence, so ordinary germs become dangerous; the untreated end stage is AIDS."},
    {q:"Why must a TB patient finish the full six months of medicine?", a:"Because the strongest germs survive an early stop, multiply as drug-resistant TB, and keep the family infected."},
    {q:"What is the first aid for a burn, and what must you not do?", a:"Cool it under clean running water or with a clean wet cloth for about ten minutes, cover it with clean cloth and send for help; never put grease, butter or toothpaste on it."}
  ],
  tf:[
    {s:"The reproductive system is the only system a person needs in order to live.", a:"false", why:"It carries life to the next generation; the individual lives on the nervous, circulatory, respiratory and other systems."},
    {s:"A person living with HIV cannot be known by looking at them.", a:"true", why:"Only a test at a health facility tells; the outward look may stay healthy for years."},
    {s:"Sharing a razor blade can transmit HIV and hepatitis B.", a:"true", why:"Both pass through infected blood left on the blade."},
    {s:"Exercise is only for the muscles.", a:"false", why:"It trains the heart and lungs, steadies the blood sugar and the mind, and lowers blood pressure."},
    {s:"A non-communicable disease can be caught from a classmate.", a:"false", why:"By definition it does not pass between people; it comes from the body, the genes or the way of living."},
    {s:"A girl's right to say no applies even to her husband.", a:"true", why:"Consent is always required; forced sex is harm, and it must be stopped and reported."},
    {s:"One course of tablets cures a person of HIV.", a:"false", why:"ARVs hold the virus down for life but do not clear it, so treatment is lifelong and never missed."},
    {s:"Toothpaste is a good first aid for a burn.", a:"false", why:"Nothing greasy or powdery goes on a burn — only clean cooling water, then a clean covering and help."}
  ],
  classify:{
    title:"Communicable or non-communicable?",
    groups:[
      {name:"Communicable", items:["cholera","typhoid","tubercle","measles","malaria","diarrhoea","HIV/AIDS","worm infection"]},
      {name:"Non-communicable", items:["high blood pressure","diabetes","asthma","sickle-cell disease","cancer","malnutrition"]},
      {name:"Stopping the first group", items:["clean and covered water","handwashing with soap","latrine use and refuse control","nets and cleared standing water","immunisation","safe conduct and condoms","early and completed treatment"]},
      {name:"Healthy living for the second group", items:["less salt, sugar and fried fat","daily exercise","no tobacco or alcohol","rest and sleep","the doctor's medicine taken as directed","family screening"]}
    ]
  },
  diagram:{
    title:"Body systems and their functions",
    caption:"Draw the outline of the body in your journal, label each system with its work, then add the organs of the reproductive system.",
    parts:[
      {p:"Brain and spinal cord", f:"nervous system — control and command"},
      {p:"Heart and blood vessels", f:"circulatory system — carries food, air and waste"},
      {p:"Lungs and windpipe", f:"respiratory system — air in, air out"},
      {p:"Stomach and intestines", f:"digestive system — breaks food into nutrients"},
      {p:"Kidneys and bladder", f:"excretory system — removes water and salt waste"},
      {p:"Ovary, fallopian tube, womb, vagina", f:"female reproductive system — egg, growth of the baby, birth passage"},
      {p:"Testis, vas deferens, penis", f:"male reproductive system — sperm and its delivery"},
      {p:"Skin", f:"covering and defence — sweat, heat and feeling"}
    ]
  },
  experiment:{
    title:"Exercise and the Pulse Rate",
    aim:"To measure what exercise does to the heart, how long recovery takes, and what that says about fitness.",
    materials:["A watch with a second hand or a phone timer","A chart on the board for the class results","Open space to move safely"],
    steps:[
      "Sit quietly for two minutes. Find the pulse at the wrist or the side of the neck, count the beats for 15 seconds and multiply by 4; record this as the resting rate.",
      "Rest two minutes and count again, to check that the first reading was honest.",
      "Run on the spot or skip for three minutes, then count the pulse at once and record it.",
      "Count again every minute for five minutes until the rate falls back near the resting number; record the recovery time.",
      "Graph the whole class: resting, after exercise, minutes of recovery. Compare a pupil who plays sport with one who does not, and explain the difference.",
      "Write the conclusion in the journal: what the heart had to do, why it beat faster, and what the recovery time shows."
    ],
    expect:"The rate rises sharply after exercise and returns to rest within about two to five minutes; the fitter pupils recover sooner.",
    why:"The beating heart is the circulatory system at work: exercise raises the muscles' demand for oxygen, so the heart pumps faster and stronger; a short recovery time is the sign of a trained heart — and the reason the guide asks for daily exercise."
  },
  apply:[
    {q:"Two boys in your class are pressuring a girl to “prove” her love. Advise both sides from this lesson.", a:"To her: say no early and clearly, stay with your friends, keep your way home ready, and tell a trusted adult; her body and her schooling are hers. To them: pressure is not love and forcing is harm and a crime — a real friend accepts the no, and the class must not laugh."},
    {q:"A young man says condoms are “only for preventing babies”. Correct him with the science.", a:"They are also the only contraceptive that blocks the germs carried in the fluids — STIs and HIV — because they stop the fluid passing from one body into another."},
    {q:"Your neighbour stopped his TB tablets after two months because he feels well. Explain the danger.", a:"The germs left alive are the toughest ones; they multiply as drug-resistant TB, he stays infectious to his family, and his treatment becomes longer, dearer and harder."},
    {q:"Design the school's answer to a cholera scare in the market town.", a:"Boiled or treated water kept covered, handwashing with soap before eating and after the latrine, refuse buried or burnt and not left for flies, food covered and served hot, the latrine cleaned and used, and any case of watery diarrhoea taken to the health centre the same day."},
    {q:"A pupil asks why the class may not mock a boy whose mother has AIDS.", a:"Because stigma is itself a health danger: it keeps families from testing and treatment, and it punishes a child for an illness he did not choose — HIV does not pass through a shared desk, cup, game or classroom."},
    {q:"Write the letter the guide asks for: how to get out of a risky situation, to a Grade 4 pupil.", a:"Name the place and the people you should avoid; refuse early and clearly and give your reason; do not stay to argue; go where people are; tell a trusted adult the same day; and if someone frightens you, tell again until somebody acts."},
    {q:"A classmate has been cut on the arm by broken glass at the latrine. Give the first aid and what follows.", a:"Wash your hands, press a clean cloth firmly on the cut, raise the arm, keep him sitting; do not squeeze or probe it; cover it and send for the health worker, with a tetanus check afterwards, then clean and bandage the area safely."}
  ],
  activities:[
    "Case study read in silence: two learners — one deciding to abstain although the desire is there, one willing to try because of it; the class advises each, and hears that the desire is natural while the choice is the lesson",
    "Role play of what the two case-study learners can do to make a healthy choice",
    "Tell and discuss: sexual orientation; then a role play of teasing and bullying, then the discussion on respect and against discrimination",
    "Homework feedback: the same discussion carried on at home with the parents",
    "Role play of a person unable to decide while under the influence of alcohol or drugs",
    "Brainstorm of the risky behaviours common among adolescents of this area, and a drawing competition on the places and things that encourage them",
    "Letter writing to a Grade 4 pupil on getting out of risky situations; volunteers read out and the class lists the strategies",
    "Question and answer on the myths and facts about puberty, with a matching puzzle on the changes in boys and in girls",
    "Small-group discussion of what causes stimulation (touch and hormones) and of the value of waiting",
    "Three groups report: why teenagers choose not to have sex, why they choose to, and why some have sex when they do not want to",
    "Show and tell with the charts: name and describe the function of the male and female organs",
    "Skit on sexual and reproductive rights, showing them applied to prevent a pregnancy",
    "Case study of adults who used contraceptives and the benefit they found",
    "Field survey of the school and the market for disease risks, with a written report to the head teacher",
    "The pulse investigation, with the class graph and the recovery time explained",
    "First-aid practice in pairs: a bleeding cut and a burn, on the demonstration cloth and with clean water"
  ],
  materials:[
    "Primary text: Darsaw Arthur and Fischer-Buder Karin, New Elementary Science for Liberia, Grade 6 Pupil's Book (Pearson, 2014)",
    "Diagrams and posters of the male and female reproductive systems and of the body systems",
    "Chart paper and markers; a clock or watch for the pulse work",
    "Projector, television or animation, if the school has power and equipment",
    "First-aid materials for the demonstration: clean cloth, bandage, soap, safe water",
    "Leaflets and a megaphone for the class health campaign"
  ],
  aids:[
    "Labelled charts of the two reproductive systems and of the seven body systems",
    "Word cards — transmission, immunisation, stigma, consent, non-communicable",
    "Case-study cards, each with the two invented learners written on it",
    "A clock for the pulse count and a graph grid for the class results",
    "The local clinic's service card: name, distance, days, cost and the VCT point",
    "Clean cloth and bandage for the first-aid demonstration"
  ],
  home:[
    "Interview a parent or elder on what they were taught about puberty at your age; report one thing better now and one thing worse",
    "Walk the compound and the street for mosquito breeding places and for risky places for a young person; write the list for the family",
    "Gather the family's health cards and report which immunisations are still owed",
    "Teach a younger brother or sister the pulse count and the resting and after-exercise figures",
    "Agree the family plan for a risky situation: where you go, whom you call, and what you say",
    "Put together the home first-aid cloth and bandage, and show your family how to press a bleeding cut"
  ],
  assessment:[
    "The pulse investigation report, with its graph and the recovery-time explanation",
    "A labelled diagram of the reproductive organs with the function of each beside it",
    "Written test on communicable and non-communicable disease and the transmission routes",
    "The letter to a Grade 4 pupil on getting out of a risky situation, marked on content and clarity",
    "Group presentation on the risky behaviours of the area and how to avoid them",
    "The health campaign poster, presented to another class (the guide's own activity)",
    "First-aid demonstration: a bleeding cut and a burn, marked on the correct steps",
    "Spelling and vocabulary test on the lesson key terms; class and homework; science journal"
  ]
}

];
