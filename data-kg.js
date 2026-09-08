/* Curriculum data — Republic of Liberia, KINDERGARTEN (ECD), KG-I and KG-II.
   Transcribed from the official "Liberia National ECD Curriculum: Teacher
   Planner, 3- to 6-Year-Olds — STAYING HEALTHY AND SAFE (December)",
   Ministry of Education / Bureau of Early Childhood Education, 2017
   (909924202-2-Staying-Healthy.pdf, 30 pp.).

   One theme so far (the model theme), two units per level:
     Period I:  Keeping My Body Healthy   (December, Weeks 1-2)
     Period II: Caring for Our Community  (December, Weeks 3-4)
   Each unit is planned for 2 weeks — set "Weeks per unit" to 2 when
   generating. Later themes (My Neighborhood, My Environment) extend this
   same array with further periods.

   Level mapping: the national planners differentiate every activity as
   Beginner / Intermediate / Advanced for mixed ages 3-6.
     KG-I (≈ ages 4-5) carries the Beginner steps growing into Intermediate:
     teacher models, children imitate, point, name and sort with help.
     KG-II (≈ ages 5-6) carries the Intermediate steps growing into Advanced:
     children explain, chart, dictate stories, lead games and present work.

   Unit shape follows the shared lesson-plan fields (lesson.js):
     grade ('kg1'/'kg2') · period · sem · icon · title · subtitle
     · outcomes[] · objectives[] · note · study[] · focus[]
     · terms[]{t,d,x} · facts[]{q,a} (oral questions with expected answers)
     · activities[] (planner activity names) · materials[] (master list)
     · assessment[] (observation checkpoints — ECD has no written tests)
   plus three Kindergarten-only fields consumed by the KG branches of
   lesson.js (flag-gated, so every other subject is unaffected):
     kgPlan:true          — marks the unit as an ECD play-based unit
     aids[]               — concrete lesson aids (real objects, cards, charts)
     home[]               — home activities done with parents (no exercise books)
   KG units deliberately carry NO mcq/tf/worked/drill banks: evaluation is
   oral questioning and observation, and the plan builders fall back to
   those automatically. Page comments cite the printed planner pages. */

var KG_CURRICULUM = [

/* ============================ KG-I · PERIOD I ============================ */
{
  grade:"kg1", period:"I", sem:"One", icon:"🧼", kgPlan:true,
  title:"Keeping My Body Healthy",
  subtitle:"Clean hands, healthy teeth, vaccinations, exercise, rest and safe mouths — December, Weeks 1–2",
  outcomes:[
    "Children practise daily habits that keep their bodies clean and healthy",
    "Children tell an adult when they feel sick and know what is safe to put in their mouths"
  ],
  objectives:[
    "Wash hands with soap following the 7 steps with the class chant",
    "Name the things we use to keep clean and say what each is for",
    "Brush the egg-box teeth in round circles on all sides and say when to brush",
    "Tell an adult when feeling sick and say who helps us get well",
    "Sort things into “can go in my mouth” and “must not go in my mouth”",
    "Move, exercise and rest every day and blow the nose gently into a tissue"
  ],
  note:"<b>Health</b> is being well in body and mind, getting along with others, and eating <b>healthy food</b>. KG-I children learn to <b>wash hands</b> with soap, <b>brush teeth</b>, move and rest their bodies, and know what is <b>safe to put in their mouths</b>. The teacher <b>models</b> every habit — washing, eating the snack and exercising with the children.",
  study:[
    /* ---- course text: Section I background + Weeks 1-2 activities (planner pp. 1-14) ---- */
    {k:"h3", t:"Clean Hands, Healthy Teeth and Wellness"},
    {k:"p", t:"**Health** is being well in body and mind, getting along with others, and eating **healthy food**. Children wash their **hands** with soap before eating (wet, soap, bubbles, palms, backs, between fingers, fingers, rinse, dry), brush their **teeth** in round circles after meals, and learn that **vaccinations** stop big sicknesses. When the body feels sick, children **tell an adult**, rest and drink water, and the nurse or doctor helps them get well."},
    {k:"h3", t:"Exercise, Rest and Safe Mouths"},
    {k:"p", t:"**Exercise** — running, jumping, dancing — makes our **muscles** and **heart** strong: the heart beats faster and grows stronger. Bodies also need **rest** and sleep. Young children explore with their mouths, so they must know what is safe: food goes in, everything else is checked with a grown-up first. **Poison** can make us very sick, so hazard-marked containers are never touched — they are **given to an adult at once**."},
    {k:"bul", items:[
      "Wash hands with soap: wet, soap, bubbles, palms, backs, between fingers, fingers, rinse, dry",
      "Brush teeth in circles — front, back, both sides, top and bottom — after meals",
      "Tell an adult when you feel sick; rest, drink water, see the nurse",
      "Exercise every day; rest every day; blow your nose gently, bin the tissue, wash hands",
      "Safe mouths: food — yes; unknown berries, medicines, cleaning liquids — NEVER, ask a grown-up"
    ]}
  ],
  focus:[
    "Keeping clean: hands, face, hair, teeth and nose",
    "Handwashing with soap, step by step with a chant",
    "Teeth: why they matter, plaque, cavities, round-circle brushing",
    "Sick and well: vaccinations, rest, telling an adult",
    "Exercise, heartbeat, muscles and rest",
    "Safe mouths: food, poison and the hazard sign"
  ],
  terms:[
    {t:"clean", d:"free from dirt and germs", x:"Clean hands keep us healthy."},
    {t:"germs", d:"tiny living things on dirty hands that can make us sick", x:"Soap and water wash the germs away."},
    {t:"soap", d:"what we rub with water to make bubbles that clean", x:"Use soap every time you wash."},
    {t:"healthy", d:"well in body and mind", x:"Washing and exercise keep us healthy."},
    {t:"sick", d:"when the body does not feel well", x:"Tell an adult when you feel sick."},
    {t:"vaccine", d:"a small shot that stops us getting a big sickness", x:"The nurse gives vaccines to keep us well."},
    {t:"teeth", d:"hard white parts in our mouth for chewing food", x:"Brush your teeth after meals."},
    {t:"exercise", d:"moving our body to make it strong — run, jump, dance", x:"We exercise every day."},
    {t:"muscles", d:"the strong parts under our skin that move us", x:"Feel your muscles when you run."},
    {t:"poison", d:"something that can make us very sick if tasted", x:"Poison is never put in the mouth."},
    {t:"safe", d:"not harmful; okay to do or touch", x:"It is safe to eat rice."},
    {t:"rest", d:"quiet time when the body gets strong again", x:"We rest after lunch."}
  ],
  facts:[
    {q:"Show and say the 7 handwashing steps.", a:"Wet, soap and bubbles, palms, backs, between fingers, all fingers, rinse, dry completely."},
    {q:"Why do we wash our hands before eating?", a:"Germs on dirty hands travel to food and people and can make us sick."},
    {q:"How do we brush our teeth, and when?", a:"In round circles — front, back, both sides, top and bottom — after meals."},
    {q:"What do you do when you feel sick?", a:"Tell an adult at once, rest, drink water; the nurse or doctor helps us get well."},
    {q:"Name one thing that can go in your mouth and one thing that must not.", a:"Food such as rice or banana — yes. Buttons, pins, medicine, unknown berries — never."},
    {q:"What does exercise do for our body?", a:"It makes our muscles and heart strong; the heart beats faster when we move."}
  ],
  activities:[
    "Morning Meeting: Keeping Clean and Healthy (Planner p. 4)",
    "Morning Meeting: Hand Washing demonstration with chant (Planner p. 5)",
    "Morning Meeting: Brushing Teeth with egg-box mouths (Planner p. 6)",
    "Morning Meeting: Being Sick and Well Being, vaccinations (Planner p. 7)",
    "Morning Meeting: Exercise Is Healthy, heartbeat check (Planner p. 8)",
    "Morning Meeting: What Goes in My Mouth, poison list (Planner p. 9)",
    "Small Group: Hand Washing pictures and instruction cards (Planner p. 10)",
    "Small Group: Nose Blowing games — whistles, straws, tissues (Planner p. 11)",
    "Small Group: Being Sick and Being Well drawings, get-well cards (Planner p. 12)",
    "Small Group: What Goes in My Mouth sorting (Planner p. 13)",
    "Outdoor: Water Play, Sand Play, animal-food walk, market walk (Planner p. 14)"
  ],
  materials:[
    "Soap, plastic bowl, water, pouring cups, named towel per child",
    "Toothbrush and toothpaste, comb, nail brush, sponge, bucket",
    "Poster or drawing of children washing",
    "Egg boxes, small sticks, white paint or chalk; sweet wrappers, sugar packet",
    "Straws (pawpaw stems), whistles, tissues, waste baskets",
    "Sorting sets: safe foods and non-poisonous non-foods; poison/safe pictures",
    "Paper, pencils, crayons, markers, tape",
    "Doctor kit and bandages (drama hospital corner)",
    "Body/skeleton poster; athlete pictures (male and female)"
  ],
  aids:[
    "Real cleaning items: soap, sponge, towel, toothbrush, toothpaste, comb",
    "Poster of children washing + word cards: soap, germs, healthy, teeth, poison",
    "Egg-box “mouths” with stick brushes for circle-brushing practice",
    "Sorting hoops/boxes: “In My Mouth” and “Not in My Mouth” with real items",
    "Straws, whistles and tissues for gentle nose-blowing games",
    "Hospital corner: doctor kit, bandages, dolls, feeling cards"
  ],
  home:[
    "Practise the 7 handwashing steps together before supper; praise each step.",
    "Brush teeth together after supper using round circles; child checks the grown-up.",
    "Walk around the home naming 3 safe mouth items and 3 locked-away (unsafe) items.",
    "Exercise together for 5 minutes (dance, run, stretch) and feel your heartbeats."
  ],
  assessment:[
    "Washes hands with soap following most of the 7 steps with the chant",
    "Names soap, water, towel, toothbrush and says what each is for",
    "Brushes egg-box teeth in circles on all sides; says “after meals”",
    "Sorts 6+ items into mouth / not-mouth; names an adult to tell when sick",
    "Says one thing exercise does; blows nose into tissue, bins it, washes hands"
  ]
},

/* ============================ KG-I · PERIOD II =========================== */
{
  grade:"kg1", period:"II", sem:"One", icon:"🏘️", kgPlan:true,
  title:"Caring for Our Community",
  subtitle:"Our classroom community, rules, road signs, reuse and clean streets — December, Weeks 3–4",
  outcomes:[
    "Children follow class rules and help keep their classroom and streets clean",
    "Children name community places and helpers and walk safely in line"
  ],
  objectives:[
    "Say what a community is: the people and places where we live",
    "Follow 3–5 class rules and say how each keeps us safe",
    "Name red = stop, yellow = wait, green = go and act them in the game",
    "Sort safe-to-pick-up vs never-touch, and reuse vs throw-away",
    "Help clean the classroom and handle trash only with a grown-up",
    "Walk in line holding hands and chant the street-safety steps"
  ],
  note:"The <b>classroom is a community</b> and the town is a community. KG-I children learn that <b>everyone helps</b>: we follow <b>rules</b>, learn <b>road signs</b>, meet <b>helpers</b>, <b>reuse</b> things and keep places <b>clean</b>. The teacher <b>models</b> it all — picking up trash, reusing materials, turning off taps.",
  study:[
    /* ---- course text: Section II background + Weeks 3-4 activities (planner pp. 15-28) ---- */
    {k:"h3", t:"Our Community and Its Rules"},
    {k:"p", t:"A **community** is our homes plus the people, places and services around us — **school, market, hospital, church or mosque**. The classroom is a community too, so it needs **3–5 rules** in **positive words** (“We use indoor voices”). Rules keep everyone **safe** and **kind**. Children also learn the **traffic light**: **red = STOP, yellow = WAIT, green = GO** — signals that protect walkers, bicycles and cars."},
    {k:"h3", t:"Clean Streets and Reusing Things"},
    {k:"p", t:"Keeping places clean is **everyone’s job**: wipe tables, tidy toys, and put trash in its place — **never pick up unsafe trash**; tell a grown-up. Many things can be **reused** instead of thrown away: boxes become buildings and collages. Some scraps **rot back into the earth** (**compost**); plastic and glass pile up, so we use less and reuse more."},
    {k:"bul", items:[
      "Community = the people, places and helpers where we live",
      "3–5 class rules in positive words; rules can change as the class changes",
      "Traffic light: red stop, yellow wait, green go; hold a hand near roads",
      "Safe trash in the bag; unsafe trash — tell a grown-up, then wash hands",
      "Reuse boxes, bottles and paper; compost fruit and vegetable scraps"
    ]}
  ],
  focus:[
    "What a community is: people, places and services",
    "Class rules: 3–5 positive rules and their reasons",
    "Traffic lights and street safety near roads",
    "Safe vs unsafe trash; reuse vs throw-away",
    "Cleaning jobs in our classroom community",
    "Community helpers and saying thank you"
  ],
  terms:[
    {t:"community", d:"the people and places where we live", x:"Our school is part of our community."},
    {t:"market", d:"where people buy and sell food and goods", x:"We buy rice at the market."},
    {t:"hospital", d:"where doctors and nurses care for sick people", x:"The nurse works at the hospital."},
    {t:"rules", d:"agreements that keep everyone safe and kind", x:"We follow our class rules."},
    {t:"safe", d:"protected from harm", x:"Rules keep us safe."},
    {t:"traffic light", d:"red, yellow and green lights that tell us stop, wait, go", x:"Red light means stop!"},
    {t:"helper", d:"a person whose work helps the community", x:"The trash collector is a helper."},
    {t:"trash", d:"things we throw away; litter", x:"Put trash in the bin."},
    {t:"reuse", d:"use something again instead of throwing it away", x:"We reuse boxes for building."},
    {t:"clean", d:"neat and free from dirt and litter", x:"We keep our classroom clean."},
    {t:"compost", d:"old fruit and vegetable scraps rotting back into soil", x:"Scraps become compost for planting."},
    {t:"walk", d:"moving safely in line holding hands", x:"We walk in line on our walk."}
  ],
  facts:[
    {q:"What is a community?", a:"The people and places where we live — homes, school, market, hospital — and the helpers who serve them."},
    {q:"Say one class rule and why we keep it.", a:"Example: “We use indoor voices” — so everyone can hear and learn safely."},
    {q:"What do the three traffic-light colors mean?", a:"Red = stop, yellow = wait, green = go."},
    {q:"You see a broken bottle on the street. What do you do?", a:"Do not touch it. Tell a grown-up at once. Wash hands after touching any trash."},
    {q:"Name something we can reuse and something we throw away.", a:"Reuse: boxes, bottles, paper. Throw away: dirty wrappers, broken unsafe things."},
    {q:"How do we walk safely near roads?", a:"In line, holding hands: Stop — Look — Hold a hand."}
  ],
  activities:[
    "Morning Meeting: Knowing Our Community, places and visits (Planner p. 17)",
    "Morning Meeting: Classroom Rules review, positive wording (Planner p. 18)",
    "Morning Meeting: Visit to the Primary School prep and debrief (Planner p. 19)",
    "Morning Meeting: Keeping Our Community Clean, cleaning jobs (Planner p. 20)",
    "Morning Meeting: Reusing Materials, collection box (Planner p. 21)",
    "Morning Meeting: Recycling Garbage to Produce Compost bags (Planner pp. 22–23)",
    "Small Group: Community Group Painting on wall paper (Planner p. 24)",
    "Small Group: Street Signs and Signals, traffic-light game (Planner pp. 25–26)",
    "Small Group: Keeping Our Community Clean sorting game (Planner p. 26)",
    "Small Group: Reusing Materials collages from clean trash (Planner p. 27)",
    "Outdoor: supervised Trash Walks, sorting outside (Planner p. 28)"
  ],
  materials:[
    "Big paper sheets, paste or tape, crayons, markers",
    "Cardboard + red, yellow, green paper for traffic lights",
    "Clean collected “trash”: boxes, bottles, paper, fabric",
    "Plastic bags, soil, grass clippings, fruit/vegetable scraps, water",
    "Non-rotting comparisons: plastic bits, bottle tops",
    "Community-place pictures; toy cars, trucks, bikes, wagons",
    "Brooms, cloths, basins; helper dress-up clothes",
    "Chart paper for sorting and trash charts"
  ],
  aids:[
    "Wall road-grid paper + community word cards: market, clinic, school, rules",
    "Big class traffic light (red/yellow/green) + child-made signal cards",
    "Sorting trays: safe/unsafe, reuse/throw-away, with real items",
    "Reuse station: collection box, collage trays, 3-D building boxes",
    "Compost bag line with prediction chart and job rota",
    "CleaningDay job chart with picture jobs; toy safety fixing box"
  ],
  home:[
    "Walk past 2 community places naming them; greet one helper and say thank you.",
    "Give the child one clean-up job at home all week (shoes, plates, toys).",
    "Point out one sign or signal on the road; practise stop–look–hold-a-hand.",
    "Find one reused thing at home; draw it and tell how it was reused."
  ],
  assessment:[
    "Says what a community is (people + places); names 2–3 places",
    "Follows 3 rules and tells one reason (safety or kindness)",
    "Names red/yellow/green meanings; acts them in the freeze game",
    "Sorts safe/unsafe and reuse/throw-away with 1–2 prompts",
    "Walks in line holding hands; helps with one cleaning job"
  ]
},

/* =========================== KG-II · PERIOD I ============================ */
{
  grade:"kg2", period:"I", sem:"One", icon:"🦷", kgPlan:true,
  title:"Keeping My Body Healthy",
  subtitle:"Handwashing experts, teeth science, germ stories and healthy habits — December, Weeks 1–2",
  outcomes:[
    "Children practise health habits independently and teach them to others",
    "Children explain why habits matter and record findings in charts and stories"
  ],
  objectives:[
    "Perform the 7-step handwash independently and teach it to another child",
    "Explain why we wash, brush, exercise, rest and vaccinate, in own words",
    "Brush all tooth surfaces in circles; sort snacks into teeth friends/enemies",
    "Dictate or write a sequenced germ story with a safe ending",
    "Sort 8+ mouth items, build a picture graph and read more/fewer",
    "Define poison and hazard; mark hazard containers and state the safety rule"
  ],
  note:"KG-II children become <b>health experts</b>: they <b>teach</b> the 7-step handwash, explain <b>why</b> each habit matters, investigate <b>germs, teeth and poisons</b>, and record findings in <b>charts, graphs and stories</b>. Class jobs — song leader, handwashing checker, materials helper — build <b>responsibility</b>.",
  study:[
    /* ---- course text: Section I, Intermediate/Advanced steps (planner pp. 1-14) ---- */
    {k:"h3", t:"Health Experts: Hands, Teeth and Germs"},
    {k:"p", t:"**Health** is being well in body and mind, getting along with others, and eating **healthy food**. KG-II experts perform the **7-step handwash** alone and **teach** it: checkers verify each step with a picture checklist. **Teeth** need round-circle brushing on **every surface after meals**; **plaque** loves sugar and drills brown holes (**cavities**), so children sort snacks into **teeth friends and enemies**. Every child draws a **germ**, dictates its story, and gives it a safe ending for the class **Germ Book**."},
    {k:"h3", t:"Strong Bodies and Safe Mouths"},
    {k:"p", t:"**Exercise** strengthens **muscles** and the **heart** — children predict, test and read their **heartbeat** before and after moving, and track active days on a ☀️ chart. **Rest** rebuilds the body. **Vaccinations** prevent big diseases; sick children **tell an adult**, rest and drink water. For **safe mouths**, children define **poison** in their own words, sort and **graph** safe vs unsafe items, mark room hazards with the agreed **hazard sign**, and solve dilemmas (unknown berries, candy-looking medicine) with one rule: **ask a grown-up, never taste**."},
    {k:"bul", items:[
      "7 steps solo + teach another child; checkers verify with the checklist",
      "Circle-brush every tooth surface after meals; teeth friends vs enemies",
      "Germ Book: drawn germ + dictated sequenced story + safe ending",
      "Heartbeat: predict → move → feel → conclude; ☀️ exercise chart",
      "Poison defined by children; room hazards marked; graph safe vs unsafe"
    ]}
  ],
  focus:[
    "Independent 7-step handwash + peer teaching with checklists",
    "Teeth science: plaque, cavities, friends/enemies snacks",
    "Germ stories: draw, dictate, sequence, safe endings",
    "Exercise experiments: heartbeat prediction and charts",
    "Vaccinations, sickness routines and kindness mail",
    "Poison definition, hazard marking, sorting graphs"
  ],
  terms:[
    {t:"hygiene", d:"habits that keep our body clean and healthy", x:"Handwashing is good hygiene."},
    {t:"germs", d:"tiny living things that travel from dirty hands to food", x:"Germs hide on mango skin too."},
    {t:"rinse", d:"wash all the soap off with clean water", x:"Rinse until no bubbles stay."},
    {t:"plaque", d:"sticky germ layer that loves sugar on our teeth", x:"Plaque hates the toothbrush."},
    {t:"cavity", d:"a small brown hole sugar bugs eat in a tooth", x:"Brushing stops cavities."},
    {t:"vaccine", d:"a shot that prevents a big sickness", x:"A vaccine hurts a little but protects a lot."},
    {t:"muscles", d:"strong body parts that move us", x:"Running builds strong muscles."},
    {t:"heartbeat", d:"the beating of our heart, faster after exercise", x:"Feel your heartbeat after dancing."},
    {t:"poison", d:"anything that can make us very sick if tasted", x:"Children define poison in own words."},
    {t:"hazard", d:"a danger sign meaning: never touch, tell an adult", x:"The hazard sign marks the bottle."},
    {t:"graph", d:"a picture chart that counts and compares", x:"Our graph shows 9 safe and 7 unsafe."},
    {t:"expert", d:"someone who can do it well and teach others", x:"I am a handwashing expert."}
  ],
  facts:[
    {q:"Teach the 7 handwashing steps and explain step 4.", a:"Wet, soap/bubbles, palms, backs, between fingers, fingers, rinse, dry. Backs matter because germs sit on both sides of the hands."},
    {q:"Why do cavities form, and how do we stop them?", a:"Plaque germs use sugar to drill brown holes that hurt. We stop them by circle-brushing every surface after meals and choosing teeth-friendly snacks."},
    {q:"Prove exercise strengthens your heart.", a:"My heartbeat was slow before running and fast after — exercise makes the heart beat stronger."},
    {q:"A berry bush has shiny red berries. What do you do?", a:"Do not taste. Ask a grown-up. Unknown berries may be poison."},
    {q:"Read our safe/unsafe graph. Which column is taller, and by how many?", a:"Answers vary — children count both columns, compare, and state the difference."},
    {q:"What should a sick child do, step by step?", a:"Tell an adult, rest, drink water, keep clean; see the nurse; friends send kind get-well wishes."}
  ],
  activities:[
    "Morning Meeting: child-led cleaning-item talks + checker reports (p. 4)",
    "Morning Meeting: 7-step demos judged with checklists; food/dish washing (p. 5)",
    "Morning Meeting: teeth science, plaque story, snack sort (Planner p. 6)",
    "Morning Meeting: sickness discussion, scribed stories, nurse visit (p. 7)",
    "Morning Meeting: heartbeat predict–test–conclude, ☀️ challenge (p. 8)",
    "Morning Meeting: poison definition, room hazard hunt and marking (p. 9)",
    "Small Group: instruction studio + Germ Book stories (Planner p. 10)",
    "Small Group: nose-blowing lab — rhythms, races, captions (Planner p. 11)",
    "Small Group: Sick→Well display, get-well cards, feelings corner (p. 12)",
    "Small Group: sort + graph + dilemmas + poison posters (Planner p. 13)",
    "Outdoor: water/sand play, market tally walk, exercise circuit (p. 14)"
  ],
  materials:[
    "Soap, bowl, water, pouring cups, named towels, picture checklists",
    "Toothbrush/paste, comb, sponge; washing poster",
    "Egg boxes, sticks, white paint/chalk; sugar, wrappers, fizzy-drink bottle",
    "Straws, whistles, tissues, bins, face diagram, rhythm cards",
    "Sorting sets + poison/safe pictures; chart paper, stickers, tape",
    "Paper, pencils, crayons, markers; Germ Book binder",
    "Doctor kit, bandages, hospital corner furniture, feeling cards",
    "Body/skeleton poster; athlete pictures; clipboards"
  ],
  aids:[
    "Picture checklists for handwashing checkers + numbered sequence cards 1–7",
    "Egg-box mouths + teeth friend/enemy snack cards",
    "Germ Book binder + drawing and dictation station",
    "Graph wall: two-column charts, stickers, counters, sand timer",
    "Hazard-sign set + poison poster station with markers",
    "Heartbeat chart (☀️ stickers) + whistle/straw experiment trays"
  ],
  home:[
    "Child teaches the family the 7 steps; parents initial the checklist.",
    "Family brushing check: child inspects everyone's round circles after supper.",
    "Family hazard hunt: list 3 locked-away items; draw the hazard sign.",
    "Present the wall-graph idea at home using bottle tops as counters."
  ],
  assessment:[
    "Completes 7 steps solo and teaches another child accurately",
    "Circle-brushes all surfaces; sorts snacks with correct reasons",
    "Dictates a sequenced germ story with a safe ending",
    "Reads the graph: counts, more/fewer, and presents one column",
    "Defines poison, marks hazards, solves dilemmas with safe answers"
  ]
},

/* =========================== KG-II · PERIOD II =========================== */
{
  grade:"kg2", period:"II", sem:"One", icon:"🚦", kgPlan:true,
  title:"Caring for Our Community",
  subtitle:"Young citizens: rules, signals, sorting, compost and community walks — December, Weeks 3–4",
  outcomes:[
    "Children take responsibility for rules, cleanliness and safety in class and street",
    "Children investigate reuse and compost and present findings to parents"
  ],
  objectives:[
    "Define community (people, places, services) and list our community's places",
    "Justify each class rule: act the keeping and state the reason",
    "Read red/yellow/green and local signs; play the traffic game by the rules",
    "Triple-sort (safe/unsafe, reuse/throw-away, rots/stays) and chart results",
    "Run the compost experiment: predict, build bags, record changes",
    "Present one piece of learning clearly to visitors at the exhibition"
  ],
  note:"KG-II children are <b>young citizens</b>: they <b>justify rules</b>, direct <b>traffic games</b>, run <b>sorting and compost investigations</b> with predictions and charts, walk the community with <b>mission clipboards</b>, and <b>present</b> their learning to parents. Class jobs rotate daily — every child leads.",
  study:[
    /* ---- course text: Section II, Intermediate/Advanced steps (planner pp. 15-28) ---- */
    {k:"h3", t:"Young Citizens: Rules and Road Safety"},
    {k:"p", t:"A **community** is people, places and **services** — homes, **school, market, clinic**, and the **helpers** whose work serves all: nurse, teacher, trash collector, officer. The class keeps **3–5 positive rules** and every child can **justify** each one. On roads, children read the **traffic light** — **red = stop, yellow = wait, green = go** — plus local signs, direct block-town traffic and outdoor bikes, and walk missions in **buddy lines** with whistle discipline."},
    {k:"h3", t:"Investigations: Sorting, Reuse and Compost"},
    {k:"p", t:"Young citizens **triple-sort**: safe-to-pick-up vs never-touch, **reuse** vs throw-away, and **rots-back-to-earth** vs stays-forever — then **chart** all three. The **compost experiment** runs full protocol: predict, build soil-and-scrap bags against plastic comparison bags, squash and air on rota, record changes, and plant seeds in finished soil. Findings go to the **parent exhibition**: Germ Book, graphs, box town with working lights, collages and the walk book — each child **presents one piece**."},
    {k:"bul", items:[
      "Community listed by children; every rule justified, not just recited",
      "Traffic game with real rules: signals, sign-holders, parking for misses",
      "Triple sort + 3 charts; touched trash → wash hands chain drilled",
      "Compost: predict → build → rota → record → plant",
      "Mission walk with clipboards; exhibition presented by children"
    ]}
  ],
  focus:[
    "Community definition + child-generated place lists",
    "Rule justification through acting keeping vs breaking",
    "Traffic lights, local signs and disciplined walking",
    "Triple sorting with charts and tallies",
    "Compost prediction, protocol and records",
    "Walks, visits and presenting to parents"
  ],
  terms:[
    {t:"community", d:"people, places and services where we live", x:"Helpers serve our community."},
    {t:"services", d:"useful work helpers do for everyone", x:"The clinic gives health services."},
    {t:"responsibility", d:"a job we own and must do well", x:"Feeding the fish is my responsibility."},
    {t:"signal", d:"a light or sign telling road users what to do", x:"Obey every signal."},
    {t:"pedestrian", d:"a person walking near roads", x:"Pedestrians hold hands."},
    {t:"reuse", d:"use again instead of throwing away", x:"We reuse boxes as buildings."},
    {t:"recycle", d:"turn old materials into new things", x:"Paper can be recycled."},
    {t:"compost", d:"scraps rotting back into rich soil", x:"Compost feeds new plants."},
    {t:"biodegradable", d:"able to rot back into the earth", x:"Banana peels are biodegradable."},
    {t:"predict", d:"say what you think will happen before testing", x:"Predict, then observe."},
    {t:"tally", d:"counting marks that record findings", x:"Tally each wrapper found."},
    {t:"exhibition", d:"a show where we present our work", x:"Parents visit our exhibition."}
  ],
  facts:[
    {q:"Define community and list 4 places in ours.", a:"People, places and services where we live — e.g., school, market, clinic, church/mosque (child lists own community's)."},
    {q:"Justify one class rule.", a:"Example: “We walk indoors” — because running inside can hurt people and break things."},
    {q:"You are already crossing when the light turns yellow. What do you do?", a:"Keep going steadily to the other side — never run back into traffic."},
    {q:"Sort these three ways: banana peel, plastic bottle, broken glass.", a:"Peel: safe to handle, rots (compost). Bottle: safe, reuse. Glass: never touch — tell an adult."},
    {q:"What will happen in the two compost bags? How will you know?", a:"The scrap bag will rot into dark soil; the plastic bag will stay the same. We record changes on the chart weekly."},
    {q:"What did our walk tally show about clean vs dirty spots?", a:"Answers vary — children read their mission tallies and graph clean vs dirty spots."}
  ],
  activities:[
    "Morning Meeting: community definition + child place lists (Planner p. 17)",
    "Morning Meeting: rule justification acting; rules review (Planner p. 18)",
    "Morning Meeting: primary-school visit protocol + debrief (Planner p. 19)",
    "Morning Meeting: clean-crew briefing + Cleaning Day plan (Planner p. 20)",
    "Morning Meeting: reuse launch + trash-chart start (Planner p. 21)",
    "Morning Meeting: compost launch question + job rota (Planner pp. 22–23)",
    "Small Group: team community painting with scribed labels (Planner p. 24)",
    "Small Group: build working lights + full-rules traffic game (pp. 25–26)",
    "Small Group: triple sort + 3 charts + collage finishing (Planner p. 26)",
    "Small Group: reuse workshop — collages + 3-D builds (Planner p. 27)",
    "Outdoor: tally trash walks, sorting outside, mission walk (Planner p. 28)"
  ],
  materials:[
    "Big paper, paste/tape, crayons, markers, chart paper, stickers",
    "Cardboard + red/yellow/green paper; sign cards; music source",
    "Clean “trash”: boxes, bottles, paper, fabric; toy cars, bikes, wagons",
    "Compost kit: bags, soil, grass, fruit/veggie scraps, water, plastic comparisons",
    "Community pictures; brooms, cloths, basins; dress-ups",
    "Clipboards, tally sheets, whistle (walk discipline)"
  ],
  aids:[
    "Community word wall + labeled team-painting station",
    "Working traffic lights (flaps/sliders) + full sign collection",
    "Triple-sort trays with tally sheets + 3 wall charts",
    "Compost line: bags, prediction chart, dated drawing station, rota",
    "Box-town build zone with roads, lights and scribed signs",
    "Mission clipboards + whistle; exhibition display boards"
  ],
  home:[
    "Name-and-point walk past 2 places; thank one helper; report back.",
    "Child presents the triple-sort at home with real items.",
    "Spot one real sign/signal; rehearse the crossing routine.",
    "Start the home scrap bowl; child explains the compost experiment."
  ],
  assessment:[
    "Defines community; lists places; justifies 3 rules with reasons",
    "Reads 3 colors + 1 local sign; follows traffic-game rules as driver and holder",
    "Triple-sorts accurately; reads and presents one chart",
    "States a compost prediction; records one observed change with a drawing",
    "Presents one exhibition piece in full sentences; walks missions safely"
  ]
}

];
