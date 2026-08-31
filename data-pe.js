/* Physical Education, Grades 1-6 — Liberian National Curriculum.
   36 units (6 grades x 6 periods). Practical PE: the body, fitness, screening,
   games, stunts, first aid, health education and track & field.

   Every unit carries a `study[]` block list — the course text of the guide
   ("Physical Education 1-6", 72 pp.), rendered verbatim on the Study Notes
   page (see data-pe79.js for the Junior High half of the same subject).
   `**bold**` marks the key terms; table cells take no markup because the
   renderer escapes them. */
const PE_CURRICULUM = [

/* ============================ GRADE 1 ============================ */
{
  grade: 1, period: "I", sem: "One", icon: "🏃",
  title: "Introduction to Physical Education",
  subtitle: "What P.E. is, why it is good for the body, and the parts of a game",
  outcomes: [
    "Learners are able to talk to friends about P.E., say the good things it can do for the body, and take part in sport activities."
  ],
  objectives: [
    "Discuss the introduction to Physical Education",
    "Analyse healthy conditions in general physical education",
    "Take part in sporting activities and list the different parts of a game"
  ],
  note: "Physical Education is the study of the body in motion. It keeps the body strong and healthy, helps us think clearly and teaches us to play fairly with others.",
  study:[
    /* ---- course text: Semester One, Period I — Introduction to Physical Education (guide pp. 2-3) ---- */
    {k:"h3", t:"What Physical Education Is"},
    {k:"p", t:"**Physical Education** is the study of the body in motion. It plays a crucial role in the development and physical well-being of learners. The maintenance of the body through **physical fitness**, **health**, **flexibility** and **endurance** promotes sound reasoning and growth."},
    {k:"p", t:"**Health** means being well in the body and the mind. When we take part in P.E. we learn healthy conditions: clean habits, good food, exercise and rest. We also build **motor skills** — the movements of running, jumping, throwing and catching that every game needs."},
    {k:"rule"},
    {k:"h3", t:"Sport — Track and Field"},
    {k:"p", t:"A **sport** is a game with rules that people play or compete in. In **track and field** the events are running races, jumping and throwing. Every sport has two things a player must learn:"},
    {k:"bul", items:["**Skills** — the special movements of the sport, such as sprinting, jumping or throwing correctly","**Rules** — what players may and may not do, so that play is fair and safe for everyone"]},
    {k:"rule"},
    {k:"h3", t:"Games"},
    {k:"p", t:"In Grade One we play two kinds of games:"},
    {k:"bul", items:["**Classroom games** — quiet games we can play inside the classroom, even on a rainy day","**Manipulative games** — games in which we handle objects such as beanbags, balls and ropes"]},
    {k:"rule"},
    {k:"h3", t:"The Different Parts of a Game"},
    {k:"p", t:"Every game is made of parts. When you can name the parts of a game, you can learn any new game quickly:"},
    {k:"num", items:["**The players** — the people taking part, in teams or as individuals","**The rules** — what is fair and what is not allowed","**The playing area** — the field, court or classroom space marked out for the game","**The equipment** — the things used to play, such as a ball, a beanbag or a whistle","**The score** — how points are counted to see which side has won"]},
    {k:"rule"},
    {k:"h3", t:"Two Games to Learn"},
    {k:"p", t:"**Beanbag Basket Relay.** Arrange learners in rows facing the baskets. Draw a line across the front of the rows. On the sound of a whistle, the first learner attempts to throw a beanbag into the basket. **One point** is awarded for each basket."},
    {k:"p", t:"**Shuttle Run.** Learners form two groups with objects opposite each line, **five (5) feet** apart. On the sound of a whistle, the first two learners run ahead of the line, faster between the objects, to the end — up to the last person."}
  ],
  focus: ["Definition of Physical Education and health", "Sport: track and field, skills and rules", "Games: classroom games and manipulative games", "The different parts of a game"],
  terms: [
    { t: "physical education", d: "learning about the body and how to move and play well", x: "In physical education we exercise and play games." },
    { t: "health", d: "being well in the body and the mind", x: "Good food and exercise keep our health strong." },
    { t: "exercise", d: "moving the body to make it strong", x: "Running is a good exercise." },
    { t: "sport", d: "a game with rules that people play or compete in", x: "Football is a popular sport in Liberia." },
    { t: "game", d: "an activity played for fun, with rules", x: "We played a classroom game after the lesson." },
    { t: "rule", d: "something that tells players what they may and may not do", x: "Every game has a rule that all must obey." },
    { t: "skill", d: "something you can do well after practice", x: "Throwing a beanbag into a basket is a skill." },
    { t: "player", d: "a person taking part in a game", x: "Each player must wait for the whistle." },
    { t: "whistle", d: "a small instrument blown to start or stop a game", x: "The teacher blew the whistle to start the relay." },
    { t: "relay", d: "a race in which team members take turns", x: "Our team won the beanbag relay." }
  ],
  facts: [
    { q: "What is Physical Education?", a: "Learning about the body and how to move, exercise and play well." },
    { q: "Name two good things P.E. does for the body.", a: "It makes the body strong and healthy, and it helps us think clearly." },
    { q: "What is a rule in a game?", a: "Something that tells players what they may and may not do." },
    { q: "Name two parts of a game.", a: "Any two: the players, the rules, the playing area, the equipment and the score." },
    { q: "What is used to start and stop a game?", a: "A whistle." },
    { q: "Name one classroom game you have played.", a: "For example: the beanbag basket relay." },
    { q: "What is a relay?", a: "A race in which members of a team take turns." },
    { q: "Why must we obey the rules of a game?", a: "So that the game is fair and nobody gets hurt." }
  ],
  tf: [
    { s: "Physical Education helps to keep the body strong.", a: "true", why: "Exercise and games build a strong, healthy body." },
    { s: "Games have no rules.", a: "false", why: "Every game has rules so that play is fair and safe." },
    { s: "Only boys can take part in P.E.", a: "false", why: "Boys and girls both take part in P.E." },
    { s: "A whistle is used to start and stop a game.", a: "true", why: "The teacher blows a whistle to signal the players." },
    { s: "In a relay, team members take turns.", a: "true", why: "That is what makes it a relay race." },
    { s: "We should push other players to win.", a: "false", why: "Pushing is unfair and dangerous; we play fairly." }
  ],
  apply: [
    { q: "Your friend does not want to join the game because he is shy. What will you say?", a: "I will invite him kindly, offer to be his partner, and tell him nobody will laugh at him." },
    { q: "A player keeps breaking the rule in a relay. What should happen?", a: "The teacher should stop the game and explain the rule again, and the player should start over fairly." },
    { q: "Why do we warm up before we run?", a: "To get the body ready so that we do not hurt our muscles." },
    { q: "Name one game you can play in the classroom when it is raining.", a: "For example: clappers, charades or a beanbag passing game." },
    { q: "How does playing games help you make friends?", a: "We work together in teams, share turns and learn to be patient with one another." }
  ],
  sort: {
    title: "Indoor games and outdoor sports",
    groups: [
      { name: "Classroom (indoor) games", items: ["clappers", "charades", "beanbag pass", "my ship is loaded"] },
      { name: "Outdoor sport and games", items: ["football", "shuttle run", "relay race", "track and field"] }
    ]
  },
  compare: {
    title: "The parts of a game",
    caption: "Complete the table by explaining each part of a game.",
    items: [
      { p: "The players", f: "The people taking part, arranged in teams or as individuals." },
      { p: "The rules", f: "What players may and may not do, so the game is fair and safe." },
      { p: "The playing area", f: "The field, court or classroom space marked out for the game." },
      { p: "The equipment", f: "The things used to play, such as a ball, beanbag, rope or whistle." },
      { p: "The score", f: "How points are counted to see which side has won." }
    ]
  },
  casestudy: {
    title: "The beanbag basket relay",
    text: "Teacher Sirleaf arranged her Grade One class in four rows facing four baskets. She drew a line across the front of the rows and explained the rule: nobody may cross the line, and each learner throws one beanbag, then goes to the back of the row. On the whistle, the first learners threw. Musu's beanbag went in and her team cheered. Then Sekou stepped over the line to get closer. His beanbag went in easily, but the teacher stopped the game. She did not shout. She simply said, \"Sekou, your throw was good, but it does not count. The line makes the game the same for everybody.\" Sekou went to the back of the row. The next time his turn came, he stayed behind the line, threw carefully, and missed. But when his team won by two points, he cheered louder than anyone.",
    questions: [
      { q: "What was the rule in the relay?", a: "Nobody may cross the line, and each learner throws one beanbag then goes to the back of the row." },
      { q: "Why did the teacher say Sekou's throw did not count?", a: "Because he stepped over the line, and the line makes the game the same for everybody." },
      { q: "What does this story teach about playing games?", a: "That obeying the rules keeps the game fair, and a fair loss is better than an unfair point." }
    ]
  },
  project: {
    title: "Our class game book",
    brief: "Make a page describing one game your class plays.",
    steps: [
      "Choose one game you have played in P.E.",
      "Write the name of the game at the top of your page.",
      "Draw the playing area and the players.",
      "Write two rules of the game.",
      "Teach the game to a younger pupil and tell the class how it went."
    ],
    criteria: ["game correctly named", "clear drawing of the play area", "two correct rules written", "game successfully taught to someone else"]
  },
  activities: [
    "Group discussion on the role of physical education, physical fitness and healthy conditions",
    "Beanbag Basket Relay: rows face the baskets, throw on the whistle, one point per basket",
    "Shuttle Run: two groups run between objects five feet apart",
    "Individually, take part in a game to check physical fitness and motor skills"
  ],
  materials: ["P.E. handbook", "Stopwatch", "Whistle", "Beanbags", "Baskets"],
  assessment: ["Individual presentation", "Group presentation", "Class participation", "Practical demonstration"]
},

{
  grade: 1, period: "II", sem: "One", icon: "🧍",
  title: "The Human Body",
  subtitle: "Parts of the body, movement skills and personal hygiene",
  outcomes: [
    "Learners are able to name parts of the body, take care of their personal hygiene and participate in sports."
  ],
  objectives: [
    "Name different parts of the body",
    "Use movement skills in physical activities",
    "Know what part the body plays in exercises",
    "Take part in a football game",
    "Explain the importance of personal hygiene",
    "List ways we can care for body parts"
  ],
  note: "Our body is a wonderful machine. Each part has work to do. When we exercise, many parts work together — and when we keep the body clean, it stays healthy.",
  study:[
    /* ---- course text: Semester One, Period II — The Human Body (guide pp. 5-6) ---- */
    {k:"h3", t:"Parts of the Body"},
    {k:"p", t:"The **human body** is made of many parts, and each part has a name and a job. The **head** holds the brain, the eyes, the ears, the nose and the mouth. The **trunk** holds the chest and the stomach. The **limbs** are the arms and the legs, ending in the hands and the feet."},
    {k:"p", t:"We must **name** the parts of the body and **care** for them: wash the skin, clean the teeth, keep the hair tidy and cover wounds. Caring for the body is part of **personal hygiene**."},
    {k:"rule"},
    {k:"h3", t:"Body Types"},
    {k:"p", t:"Bodies grow in different shapes. Learners identify various body parts and link them to body-building exercises, and learn the three common **body types**:"},
    {k:"bul", items:["**Ectomorph** — the slim, lean body type","**Endomorph** — the soft, round body type","**Mesomorph** — the strong, muscular body type"]},
    {k:"rule"},
    {k:"h3", t:"Motor Skills and the Body's Role in Exercise"},
    {k:"p", t:"**Motor skills** are the movements our muscles learn — running, jumping, throwing, catching and kicking. In every **exercise**, a part of the body does the work: the legs run and jump, the arms throw, and the heart beats faster to feed the muscles. Know what part the body plays in each exercise."},
    {k:"rule"},
    {k:"h3", t:"Personal Hygiene"},
    {k:"p", t:"**Personal hygiene** means keeping the body clean so that germs cannot make us sick. Ways we can care for our body parts:"},
    {k:"num", items:["Bathe the whole body with soap and clean water every day","Wash the hands before eating and after using the toilet","Brush the teeth morning and evening","Keep the fingernails short and clean","Wear clean clothes and clean sports wear"]},
    {k:"rule"},
    {k:"h3", t:"Activities and Games"},
    {k:"bul", items:["**Jumping Jack** — jump to open the legs while clapping the hands overhead, then jump back to attention","**Football (game)** — take part in a class football game and show the body parts at work","**Skill drill** — practise one sport movement again and again until it is smooth","**Fox and Rabbit** — a chasing game: the fox chases, the rabbit dodges and runs"]}
  ],
  focus: ["Body parts", "Motor skills", "The body's role in exercises", "Football game", "Personal hygiene", "Care for the body"],
  terms: [
    { t: "body part", d: "one section of the body, such as an arm or a leg", x: "The leg is the body part we use to run." },
    { t: "motor skill", d: "the ability to move the body well", x: "Jumping and catching are motor skills." },
    { t: "muscle", d: "the part of the body that pulls the bones so we can move", x: "Strong muscles help us to lift and run." },
    { t: "bone", d: "the hard part inside the body that gives it shape", x: "The bone in the leg is long and strong." },
    { t: "joint", d: "the place where two bones meet and bend", x: "The knee is a joint." },
    { t: "personal hygiene", d: "keeping your own body clean", x: "Washing hands is good personal hygiene." },
    { t: "germ", d: "a tiny living thing that can make you sick", x: "Washing with soap removes germs." },
    { t: "soap", d: "what we use with water to wash away dirt and germs", x: "Use soap when you wash your hands." },
    { t: "posture", d: "the way you hold your body when standing or sitting", x: "Good posture keeps the back straight." },
    { t: "jumping jack", d: "an exercise jumping with hands clapping overhead and legs opening", x: "We did ten jumping jacks to warm up." }
  ],
  facts: [
    { q: "Name five parts of the body.", a: "Any five, for example: head, arm, hand, leg, foot, chest and back." },
    { q: "Which body parts do we use most in running?", a: "The legs, feet and also the arms, which swing to help us." },
    { q: "What is a joint?", a: "The place where two bones meet and bend, such as the knee." },
    { q: "What is personal hygiene?", a: "Keeping your own body clean." },
    { q: "Name three ways to care for the body.", a: "Any three: bathe daily, wash hands with soap, brush teeth, cut nails, and wear clean clothes." },
    { q: "Why should we wash our hands before eating?", a: "To remove germs so that we do not become sick." },
    { q: "What is a jumping jack?", a: "An exercise where you jump with hands clapping overhead and legs opening." },
    { q: "How many players are on a football team on the field?", a: "Eleven players." }
  ],
  tf: [
    { s: "The knee is a joint.", a: "true", why: "It is a place where two bones meet and bend." },
    { s: "We should wash our hands only once a week.", a: "false", why: "We wash hands often, especially before eating and after the toilet." },
    { s: "Muscles help the body to move.", a: "true", why: "Muscles pull the bones so that we can move." },
    { s: "Only the legs work when we run.", a: "false", why: "The arms, chest, heart and lungs all work too." },
    { s: "Cutting your nails is part of personal hygiene.", a: "true", why: "Short clean nails keep germs away." },
    { s: "Dirty clothes cannot make you sick.", a: "false", why: "Dirty clothes carry germs that can cause illness." }
  ],
  apply: [
    { q: "You have played football and you are sweaty and dusty. What should you do?", a: "Cool down, drink water, then bathe with soap and put on clean clothes." },
    { q: "Name the body parts you use when you throw a ball.", a: "The hand and fingers, the arm and shoulder, and the legs and trunk to give power and balance." },
    { q: "Your friend never washes his hands before eating. What will you tell him?", a: "That germs on his hands can enter his food and make him sick, and that soap and water take only a moment." },
    { q: "Why do we breathe faster when we exercise?", a: "Because the body needs more air, so the lungs and heart work harder to supply the muscles." },
    { q: "Give one way to care for your teeth.", a: "Brush them every morning and night, and avoid eating too many sweet things." }
  ],
  sort: {
    title: "Body parts and hygiene actions",
    groups: [
      { name: "Parts of the body", items: ["head", "arm", "leg", "hand", "foot", "chest"] },
      { name: "Ways to care for the body", items: ["bathe daily", "wash hands", "brush teeth", "cut nails", "wear clean clothes"] }
    ]
  },
  compare: {
    title: "Body parts and the work they do in exercise",
    caption: "Complete the table showing what each part does when we exercise.",
    items: [
      { p: "Legs and feet", f: "Carry the body in running, jumping and kicking." },
      { p: "Arms and hands", f: "Throw, catch, swing and help balance the body." },
      { p: "Heart", f: "Beats faster to pump blood to the working muscles." },
      { p: "Lungs", f: "Take in more air so the body gets the oxygen it needs." },
      { p: "Muscles and joints", f: "Pull the bones and bend so the body can move." }
    ]
  },
  casestudy: {
    title: "Why Fatu stopped getting sick",
    text: "Fatu was absent from school almost every second week with stomach trouble. Her teacher noticed that Fatu ate her lunch straight after playing football, without washing. One day the teacher set up a bucket of water and a piece of soap by the classroom door and made a simple rule: everyone washes before eating. At first the children thought it was a waste of playtime. Fatu grumbled loudest. But after two months the teacher counted the register. Absences in the class had dropped by more than half, and Fatu had not missed a single day. When the bucket cracked, it was Fatu who asked her uncle for a new one.",
    questions: [
      { q: "What did the teacher notice about Fatu?", a: "That she ate her lunch straight after playing football, without washing her hands." },
      { q: "What simple rule did the teacher introduce?", a: "That everyone washes their hands with soap and water before eating." },
      { q: "What was the result after two months?", a: "Absences in the class dropped by more than half and Fatu did not miss a single day." }
    ]
  },
  project: {
    title: "My body chart",
    brief: "Draw and label a chart of the human body.",
    steps: [
      "Draw a large outline of a person on a sheet of paper.",
      "Label at least eight parts of the body.",
      "Beside four of the labels, write what that part does in exercise.",
      "In a corner, draw the four things you use to keep clean.",
      "Display your chart and explain it to the class."
    ],
    criteria: ["eight parts correctly labelled", "four correct explanations of function", "hygiene items drawn", "neat clear presentation"]
  },
  activities: [
    "Group discussion naming the parts of the human body",
    "In pairs, identify body parts and link them to body building",
    "Jumping Jack exercise and skill drill",
    "Football game and the Fox and Rabbit game"
  ],
  materials: ["Charts", "Posters", "Football", "Mat", "Whistle", "Stopwatch"],
  assessment: ["Individual presentation", "Group presentation", "Class participation", "Practical demonstration"]
},

{
  grade: 1, period: "III", sem: "One", icon: "💪",
  title: "Physical Fitness",
  subtitle: "What fitness is, why it matters, and games that build motor skills",
  outcomes: [
    "Learners are able to talk about physical fitness and develop motor skills through exercises and games."
  ],
  objectives: [
    "Talk about physical fitness",
    "Show motor skills",
    "Take part in exercises and games"
  ],
  note: "Physical fitness means the body is strong enough to do daily work and play without getting too tired. We build fitness by exercising regularly.",
  study:[
    /* ---- course text: Semester One, Period III — Physical Fitness (guide pp. 7-8) ---- */
    {k:"h3", t:"What Physical Fitness Is"},
    {k:"p", t:"**Physical fitness** is the ability of the body to do work and play without getting too tired, and to meet the demands of the day with energy left over. A fit body is strong, bends easily, and keeps going."},
    {k:"rule"},
    {k:"h3", t:"The Importance of Physical Fitness"},
    {k:"bul", items:["It makes the **heart and muscles strong** so we can work and play longer","It builds **motor skills** — running, jumping, bending and throwing","It keeps the body **healthy** and helps us fight sickness","It makes us feel happy and helps us learn in class"]},
    {k:"rule"},
    {k:"h3", t:"Exercises that Build Fitness"},
    {k:"p", t:"We take part in exercises and games to develop motor skills. Two exercises from the guide:"},
    {k:"p", t:"**Toes Touch** — the learner bends forward until he touches his toes with the fingers, while the legs remain straight. This stretches the back and the legs."},
    {k:"p", t:"**Balloon Hit** — every player has a balloon. Each learner keeps his balloon in the air by hitting it with his best hand. Later add the other hand, the elbows; hit and turn around; hit and touch the floor, until he reaches the distance required."},
    {k:"rule"},
    {k:"h3", t:"The Four Kinds of Games"},
    {k:"table", head:["Kind of game","What it means","Example"], rows:[
      ["Classroom game","A quiet game played indoors at the desk or in a small space","Balloon Hit"],
      ["Loco-motor game","A game of travelling movements — running, hopping, dodging","American Hopscotch"],
      ["Manipulative game","A game played by handling objects such as balls and beanbags","Ball games"],
      ["Cooperative game","A game in which players work together instead of against each other","Group relay tasks"]
    ]},
    {k:"p", t:"Other guide games for this period: **Automobiles** (drivers move and park on command), **American Hopscotch** (hop through the marked squares), and the **Air Planes** game (arms wide, banking and gliding to the leader's signals)."}
  ],
  focus: ["Definition of physical fitness", "Its importance", "Exercise", "Classroom, loco-motor, manipulative and cooperative games"],
  terms: [
    { t: "physical fitness", d: "being strong and healthy enough to work and play without tiring quickly", x: "Physical fitness helps you run without getting tired." },
    { t: "loco-motor skill", d: "a skill that moves the body from one place to another", x: "Running and hopping are loco-motor skills." },
    { t: "manipulative skill", d: "a skill using the hands or feet to control an object", x: "Throwing and catching are manipulative skills." },
    { t: "cooperative game", d: "a game where players work together", x: "In a cooperative game, everyone must help." },
    { t: "flexible", d: "able to bend and stretch easily", x: "Stretching makes the body flexible." },
    { t: "strength", d: "the power of the muscles", x: "Lifting builds strength in the arms." },
    { t: "stamina", d: "the power to keep going for a long time", x: "Long runs build stamina." },
    { t: "balance", d: "holding the body steady without falling", x: "Standing on one foot tests your balance." },
    { t: "warm up", d: "gentle exercise done before hard activity", x: "We warm up before the race." },
    { t: "cool down", d: "gentle exercise done after hard activity", x: "A cool down helps the body rest properly." }
  ],
  facts: [
    { q: "What is physical fitness?", a: "Being strong and healthy enough to work and play without tiring quickly." },
    { q: "Name two loco-motor skills.", a: "Any two: running, walking, hopping, jumping, skipping and galloping." },
    { q: "Name two manipulative skills.", a: "Any two: throwing, catching, kicking, striking and bouncing." },
    { q: "Why do we warm up before exercise?", a: "To prepare the muscles so that we do not get injured." },
    { q: "Name two ways to become fit.", a: "Exercise regularly and play active games; also eat good food and rest well." },
    { q: "What does the toes touch exercise stretch?", a: "The back and the muscles at the back of the legs." },
    { q: "What is balance?", a: "Holding the body steady without falling." },
    { q: "Name one reason why fitness is important for a pupil.", a: "It gives energy for school work and play, and keeps the body healthy." }
  ],
  tf: [
    { s: "Physical fitness means being able to work and play without tiring quickly.", a: "true", why: "That is the meaning of fitness." },
    { s: "Running is a manipulative skill.", a: "false", why: "Running is a loco-motor skill; manipulative skills use an object." },
    { s: "We should warm up before hard exercise.", a: "true", why: "Warming up prepares the muscles and prevents injury." },
    { s: "Only strong boys can become fit.", a: "false", why: "Every pupil, boy or girl, can improve fitness by regular exercise." },
    { s: "Stretching helps the body become flexible.", a: "true", why: "Regular stretching improves flexibility." },
    { s: "Fitness comes from one day of hard exercise.", a: "false", why: "Fitness is built by exercising regularly over time." }
  ],
  apply: [
    { q: "You get tired after climbing a short hill. What does this tell you and what will you do?", a: "It shows my stamina is low. I will walk, run and play active games regularly to build it up." },
    { q: "Design a simple warm up of three exercises for your class.", a: "For example: march in place, arm circles, and gentle toe touches — each for one minute." },
    { q: "Why is a cooperative game good for a class?", a: "Because everyone must help, so no one is left out and the class learns teamwork." },
    { q: "Name one exercise you can do at home with no equipment.", a: "Jumping jacks, toes touch, running in place or hopping on one foot." },
    { q: "How does good fitness help you in the classroom?", a: "It gives me energy, helps me sit and concentrate, and I am absent less often." }
  ],
  sort: {
    title: "Loco-motor skills and manipulative skills",
    groups: [
      { name: "Loco-motor skills", items: ["running", "hopping", "skipping", "jumping", "galloping"] },
      { name: "Manipulative skills", items: ["throwing", "catching", "kicking", "bouncing", "striking"] }
    ]
  },
  compare: {
    title: "Parts of physical fitness",
    caption: "Complete the table with the meaning and one activity that builds each part.",
    items: [
      { p: "Strength", f: "The power of the muscles; built by lifting, pushing and climbing." },
      { p: "Stamina (endurance)", f: "The power to keep going; built by running, skipping and long walking." },
      { p: "Flexibility", f: "The ability to bend and stretch; built by stretching exercises such as toes touch." },
      { p: "Balance", f: "Holding the body steady; built by standing on one foot and walking on a line." }
    ]
  },
  casestudy: {
    title: "The balloon that taught control",
    text: "Teacher Kollie gave every child in Grade One a balloon and one instruction: keep it in the air using only your best hand. The room filled with laughter as balloons floated everywhere. Then he changed the rule — the other hand only. Then elbows only. Then hit it, turn around, and hit it again before it touched the floor. Small Nyema, who was usually the slowest runner in the class, turned out to be the very best at this. She had the steadiest hand and never let her balloon fall once. Her classmates were surprised. Teacher Kollie was not. He told the class, \"Fitness is not one thing. Some of you are fast. Nyema has control. A good player builds all of them.\"",
    questions: [
      { q: "What rules did the teacher change during the balloon game?", a: "Best hand only, then the other hand, then elbows, then hit, turn around and hit again." },
      { q: "Who was best at the game, and why was the class surprised?", a: "Nyema, who was usually the slowest runner, was best because she had the steadiest hand and most control." },
      { q: "What did the teacher mean by saying fitness is not one thing?", a: "That fitness has several parts — speed, strength, control, balance — and a good player works on all of them." }
    ]
  },
  project: {
    title: "My weekly exercise chart",
    brief: "Keep a chart of the exercise you do for one week.",
    steps: [
      "Rule a chart with the seven days of the week.",
      "Each day, do at least fifteen minutes of active play or exercise.",
      "Write or draw what you did each day.",
      "Mark the day you felt strongest.",
      "Show your chart to the class and say which activity you liked best."
    ],
    criteria: ["all seven days recorded", "at least fifteen minutes each day", "honest recording", "clear report to the class"]
  },
  activities: [
    "Toes Touch: bend forward until the fingers touch the toes with legs straight",
    "Balloon Hit: keep a balloon in the air with the best hand, then the other hand and elbows",
    "American Hopscotch and Air Planes games",
    "Group discussion on what physical fitness is and why it is important"
  ],
  materials: ["Measurement scales", "Meter rule", "Assessment forms", "Balloons", "Whistle"],
  assessment: ["Individual presentation", "Group presentation", "Class participation", "Practical demonstration"]
},

{
  grade: 1, period: "IV", sem: "Two", icon: "📋",
  title: "Physical Fitness Screening",
  subtitle: "Checking the body, types of screening, and team games",
  outcomes: [
    "Learners are able to explain various types of physical fitness screening and demonstrate exercises and games."
  ],
  objectives: [
    "Talk about physical fitness screening",
    "Explain various types of screening",
    "Demonstrate exercises and games"
  ],
  note: "Screening means checking the body to see how fit and healthy it is. The teacher may measure height and weight, or count how many times you can do an exercise. Screening is not a competition — it shows where each pupil can improve.",
  study:[
    /* ---- course text: Semester Two, Period IV — Physical Fitness Screening (guide pp. 9-10) ---- */
    {k:"h3", t:"What Fitness Screening Is"},
    {k:"p", t:"**Physical fitness screening** means checking the body with simple tests to see **how fit** a learner is — before training begins, and again later to see the improvement. Screening tells the teacher what each learner can do and what each learner must practise."},
    {k:"p", t:"Talking about fitness screening means being able to name the check, show how it is done, and say what it measures."},
    {k:"rule"},
    {k:"h3", t:"Types of Screening"},
    {k:"p", t:"The guide lists various types of screening the teacher may use:"},
    {k:"bul", items:["**Body checks** — height, weight and body build","**Strength checks** — simple push or sit-up tasks","**Endurance checks** — how long the learner can keep moving","**Flexibility checks** — how far the body can bend and stretch"]},
    {k:"rule"},
    {k:"h3", t:"Exercise — Jogging in Place"},
    {k:"p", t:"**Jogging in Place** — learners stand erect. On a whistle, they jog in place as if they are running, but without moving any distance. The knees lift, the arms swing, and the heart beats faster. Stop when the whistle sounds again."},
    {k:"rule"},
    {k:"h3", t:"The Four Games of this Period"},
    {k:"p", t:"**Beanbag Pile (classroom game).** Learners are seated in a single line formation with beanbags placed in a pile in front of the first learner in each line. On the signal **'GO'**, the first player takes a bag and passes it to the second player. The remaining beanbags are passed back one at a time. The last learner lays the first beanbag on the floor; each succeeding bag must be placed on top of the other, with only the first beanbag touching the floor. The stack must stand without any assistance from the stacker; if it falls, it must be re-stacked. **The first team to pile the bags correctly and call out the total number of beanbags wins the relay.**"},
    {k:"p", t:"**Back Pass The Beanbag (loco-motor game).** The beanbag passes backwards down the line from player to player; the last player runs to the front and the passing begins again."},
    {k:"p", t:"**Ball Pass (manipulative game).** Players pass a ball around or along the group quickly and cleanly — no throws, no drops."},
    {k:"p", t:"**Blind Flight (cooperative game).** One player is guided by the voices of the team, so the group must cooperate to keep the 'blind' player safe."}
  ],
  focus: ["Definition of physical fitness screening", "Types of screening", "Exercise: jogging in place", "Beanbag Pile, Back Pass the Beanbag, Ball Pass and Blind Flight games"],
  terms: [
    { t: "screening", d: "checking the body to see how fit and healthy it is", x: "The teacher did a screening of the whole class." },
    { t: "height", d: "how tall a person is", x: "The nurse measured his height against the wall." },
    { t: "weight", d: "how heavy a person is", x: "Weight is measured on a scale." },
    { t: "measure", d: "to find the size or amount of something", x: "We measure height with a meter rule." },
    { t: "record", d: "to write down information so it can be checked later", x: "We record each result on a form." },
    { t: "jog", d: "to run slowly and steadily", x: "Jog in place on the sound of the whistle." },
    { t: "pulse", d: "the beat of the heart felt at the wrist or neck", x: "Feel your pulse after running." },
    { t: "result", d: "what is found after a test", x: "She wrote her result on the chart." },
    { t: "improve", d: "to become better than before", x: "With practice her score began to improve." },
    { t: "scale", d: "the instrument used to weigh someone", x: "Stand still on the scale." }
  ],
  facts: [
    { q: "What is physical fitness screening?", a: "Checking the body to see how fit and healthy it is." },
    { q: "Name two things that can be measured in screening.", a: "Height and weight; also the pulse and the number of exercises done." },
    { q: "What do we use to measure height?", a: "A meter rule or measuring tape." },
    { q: "What do we use to measure weight?", a: "A scale." },
    { q: "Why do we record the results?", a: "So we can compare later and see if we have improved." },
    { q: "What does it mean to jog in place?", a: "To run on the spot without moving forward." },
    { q: "Where can you feel your pulse?", a: "At the wrist or at the neck." },
    { q: "Is screening a competition between pupils?", a: "No. It shows each pupil where he can improve." }
  ],
  tf: [
    { s: "Screening means checking how fit and healthy the body is.", a: "true", why: "That is the definition of screening." },
    { s: "Screening is a competition to find the best pupil.", a: "false", why: "It shows each pupil his own progress, not who is best." },
    { s: "Weight is measured with a scale.", a: "true", why: "A scale shows how heavy a person is." },
    { s: "Results should not be written down.", a: "false", why: "Recording results lets us compare and see improvement." },
    { s: "Jogging in place means running without moving forward.", a: "true", why: "You run on the spot." },
    { s: "Your pulse beats faster after you run.", a: "true", why: "The heart works harder during exercise." }
  ],
  apply: [
    { q: "Your friend is embarrassed because he is the heaviest in the class. What will you say?", a: "That screening is not a competition, that bodies differ, and that what matters is exercising and improving his own result." },
    { q: "Feel your pulse before and after jogging in place. What difference do you expect?", a: "It will beat faster after jogging, because the heart is working harder to supply the muscles." },
    { q: "Why should the same pupil be measured again after some months?", a: "To see whether he has grown and whether his fitness has improved." },
    { q: "In the Beanbag Pile game, the stack keeps falling. What should the team do?", a: "Slow down, pass carefully and place each bag squarely — speed without care loses the relay." },
    { q: "Name one way to improve your screening result before the next test.", a: "Exercise regularly, play active games, eat good food and get enough sleep." }
  ],
  sort: {
    title: "Screening measures and game equipment",
    groups: [
      { name: "Things we measure in screening", items: ["height", "weight", "pulse", "number of sit-ups", "time taken to run"] },
      { name: "Equipment we use", items: ["meter rule", "scale", "stopwatch", "whistle", "assessment form"] }
    ]
  },
  compare: {
    title: "Kinds of screening and what each shows",
    caption: "Complete the table showing what each screening tells the teacher.",
    items: [
      { p: "Measuring height", f: "Shows how the pupil is growing over time." },
      { p: "Measuring weight", f: "Shows body mass; compared with height it shows healthy growth." },
      { p: "Counting an exercise", f: "Shows muscular strength and endurance, for example how many sit-ups in a minute." },
      { p: "Timing a run", f: "Shows speed and stamina." },
      { p: "Checking the pulse", f: "Shows how hard the heart is working and how quickly the body recovers." }
    ]
  },
  casestudy: {
    title: "The chart on the classroom wall",
    text: "At the start of the term, Teacher Weah measured every pupil in Grade One and wrote the results in a book, not on the wall, because he did not want anyone laughed at. He told them, \"You are not racing each other. You are racing the person you were in September.\" Each month he measured again. In November, a small boy named Jallah could do only four sit-ups. By March he could do fourteen. He was still the last in the class in sit-ups. But when the teacher read out how much each pupil had improved, Jallah's improvement was the greatest in the room, and the class clapped for him for a long time.",
    questions: [
      { q: "Why did the teacher keep the results in a book instead of on the wall?", a: "So that no pupil would be laughed at because of his result." },
      { q: "What did the teacher mean by racing the person you were in September?", a: "That each pupil should compare himself with his own earlier result, not with other pupils." },
      { q: "Why did the class clap for Jallah even though he was still last?", a: "Because his improvement was the greatest in the class, and improvement is what screening measures." }
    ]
  },
  project: {
    title: "My own fitness record",
    brief: "Make and keep your own simple fitness record.",
    steps: [
      "Rule a card with four rows: height, weight, sit-ups in one minute, and jog in place for one minute.",
      "With your teacher's help, fill in your results today.",
      "Practise the exercises at home for one month.",
      "Fill in your results again after one month.",
      "Write one sentence saying what improved and what you will work on next."
    ],
    criteria: ["all four measures recorded", "second set of results taken", "honest recording", "sensible plan for next month"]
  },
  activities: [
    "Demonstration of physical fitness screening",
    "Jogging in place: stand erect, and on the whistle jog without moving forward",
    "Beanbag Pile relay: pass and stack the beanbags without the stack falling",
    "Back Pass the Beanbag, Ball Pass and Blind Flight games"
  ],
  materials: ["Balls and playing objects", "Beanbags", "Meter rule", "Scale", "Stopwatch"],
  assessment: ["Individual presentation", "Group presentation", "Class participation", "Practical demonstration"]
},

{
  grade: 1, period: "V", sem: "Two", icon: "🤸",
  title: "Stunts and Manipulative Skills",
  subtitle: "Individual and partner activities, rope jumping, long jump, stunts and tumbling",
  outcomes: [
    "Learners are able to tell what physical fitness is, explain its importance, and demonstrate physical fitness activities through games, stunts and tumbling."
  ],
  objectives: [
    "Tell the class about individual and partner activities",
    "Explain the importance of physical activities",
    "Demonstrate physical fitness activities"
  ],
  note: "A stunt is a controlled body movement such as a roll. Stunts and tumbling build strength, balance and confidence — but they must always be done on a mat, with the teacher watching.",
  study:[
    /* ---- course text: Semester Two, Period V — Stunts and Manipulative Skills (guide pp. 11-12) ---- */
    {k:"h3", t:"Individual and Partner Activities"},
    {k:"p", t:"Physical fitness activities can be done **alone (individual)** or **with a partner**. Individual activities — such as rope jumping by yourself — build personal skill. Partner activities — throwing a beanbag to each other, long-jumping in turns — teach cooperation, timing and fair turns."},
    {k:"p", t:"The three activity sets of this period, each done individually and with a partner:"},
    {k:"num", items:["**Beanbag activity** — toss, catch and carry the beanbag, alone and passing to a partner","**Rope jumping activity** — jump a turning rope alone; take turns and jump in pairs with a partner","**Long-jump activity** — run, take off and land with both feet; partners measure and compare jumps"]},
    {k:"rule"},
    {k:"h3", t:"Games"},
    {k:"p", t:"**Jumping Jack** — learners stand in a vertical line facing the leader. On a whistle, they jump up and down with the hands clapping overhead and the legs opening while in the air."},
    {k:"p", t:"**Charades** — divide the class into five or six smaller groups. A captain is elected from each group. The word or object chosen by a group should have syllables, to make it easier to act out. One group acts out its charade in front of the class; the captain asks the class to guess the syllable or the complete word. If the word is not guessed within a certain time, the captain tells the class and the next group has its turn."},
    {k:"p", t:"**Chain Tag** — when a player is tagged he joins hands with the tagger, and the growing chain chases the free players together. **Barnyard** — players are named for barnyard animals and dash across on the farmer's call."},
    {k:"rule"},
    {k:"h3", t:"Stunts and Tumbling — the Forward Roll"},
    {k:"num", items:["Begin in a **squat position**, with the head up, the arms extended forward slightly, and the fingers pointed straight ahead.","**Push off from the toes**, raise the seat, and tuck the chin to the chest.","Continue the forward movement, **landing on the base of the neck and the top of the shoulders**.","Push off with the hands and continue the forward motion to a **crouching and standing position**."]},
    {k:"p", t:"Other stunts to try after the basic roll is safe: **Forward Roll to Jump Tuck**, **Consecutive Rolls**, **Reach Over Roll**, **Dive Forward Roll**, and **Forward Roll to One-Leg Stand**."}
  ],
  focus: ["Beanbag activity", "Rope jumping activity", "Long jump activity", "Games", "Stunts and tumbling: the forward roll and its variations"],
  terms: [
    { t: "stunt", d: "a controlled body movement such as a roll or balance", x: "The forward roll is a simple stunt." },
    { t: "tumbling", d: "rolling and turning movements done on a mat", x: "Tumbling is done safely on a mat." },
    { t: "forward roll", d: "a roll forward over the shoulders to a standing position", x: "Tuck your chin to do a forward roll." },
    { t: "mat", d: "a soft cover placed on the floor for safety", x: "Never tumble without a mat." },
    { t: "tuck", d: "to pull the chin or knees in close to the body", x: "Tuck your chin to your chest before you roll." },
    { t: "squat", d: "to crouch down with knees bent", x: "Begin the roll in a squat position." },
    { t: "partner activity", d: "an activity done with one other person", x: "Passing a beanbag is a partner activity." },
    { t: "long jump", d: "jumping as far forward as you can", x: "He measured his long jump with a tape." },
    { t: "rope jumping", d: "jumping over a swinging rope", x: "Rope jumping builds stamina and timing." },
    { t: "safety", d: "keeping yourself and others from harm", x: "Safety comes first in every stunt." }
  ],
  facts: [
    { q: "What is a stunt?", a: "A controlled body movement such as a roll or a balance." },
    { q: "What must always be used when tumbling?", a: "A mat, for safety." },
    { q: "Describe the start of a forward roll.", a: "Begin in a squat position with head up, arms extended forward and fingers pointing ahead." },
    { q: "Why do you tuck your chin in a forward roll?", a: "To protect the neck and let the body roll smoothly." },
    { q: "Name two variations of the forward roll.", a: "Any two: forward roll to jump tuck, consecutive rolls, reach over roll, dive forward roll and forward roll to one-leg stand." },
    { q: "Name one individual activity and one partner activity.", a: "Individual: rope jumping. Partner: passing a beanbag with a partner." },
    { q: "What does rope jumping build?", a: "Stamina, timing and coordination." },
    { q: "Why should the teacher always watch during stunts?", a: "To make sure the movement is done correctly and safely." }
  ],
  tf: [
    { s: "Tumbling should be done on a hard concrete floor.", a: "false", why: "Tumbling must be done on a mat for safety." },
    { s: "You should tuck your chin to your chest in a forward roll.", a: "true", why: "This protects the neck and helps the body roll." },
    { s: "Rope jumping helps build stamina.", a: "true", why: "It keeps the heart and legs working steadily." },
    { s: "It is safe to do a new stunt without the teacher watching.", a: "false", why: "The teacher must supervise to prevent injury." },
    { s: "A partner activity is done alone.", a: "false", why: "A partner activity is done with one other person." },
    { s: "Stunts help build balance and confidence.", a: "true", why: "Controlled movements develop both." }
  ],
  apply: [
    { q: "A classmate wants to try a dive forward roll on the bare floor. What will you tell him?", a: "To stop and wait for a mat and the teacher, because rolling on a bare floor can injure his neck and back." },
    { q: "You keep rolling to one side in your forward roll. What might be wrong?", a: "My hands are probably not level, or I am not pushing evenly with both feet; I should place both hands the same distance apart and push straight." },
    { q: "Describe how to land safely after a long jump.", a: "Land on both feet with knees bent to absorb the shock, arms forward for balance, in soft sand if possible." },
    { q: "How can a partner help you learn rope jumping?", a: "He can turn the rope steadily, count for me, and tell me when I am jumping too early or too late." },
    { q: "Name two safety rules for a stunts lesson.", a: "Always use a mat and warm up first; and never attempt a stunt you have not been taught." }
  ],
  sort: {
    title: "Individual activities and partner activities",
    groups: [
      { name: "Individual activities", items: ["rope jumping alone", "forward roll", "long jump", "jumping jack"] },
      { name: "Partner or group activities", items: ["beanbag pass", "charades", "chain tag", "partner rope turning"] }
    ]
  },
  compare: {
    title: "Stunts and the skills they build",
    caption: "Complete the table showing what each activity develops.",
    items: [
      { p: "Forward roll", f: "Builds body control, courage and coordination." },
      { p: "Rope jumping", f: "Builds stamina, timing and light footwork." },
      { p: "Long jump", f: "Builds leg power and teaches safe landing." },
      { p: "Beanbag activities", f: "Build manipulative skill — throwing, catching and accuracy." }
    ]
  },
  casestudy: {
    title: "The roll that took three weeks",
    text: "Korto was afraid of the forward roll. Every time she reached the point of tucking her chin, she stopped and stood up. The other children finished the drill and moved on to games while she was still standing on the mat. Her teacher did not force her and did not let anyone laugh. Instead he broke the movement into pieces. In the first week Korto only practised the squat and the chin tuck. In the second week she rocked backward and forward on her back like a chair. In the third week, almost without noticing, she rocked forward hard enough to come up onto her feet — and she had done a forward roll. She did four more that afternoon.",
    questions: [
      { q: "What part of the forward roll was Korto afraid of?", a: "Tucking her chin and rolling over." },
      { q: "How did the teacher help her?", a: "He broke the movement into small pieces, practised over three weeks, and did not force her or allow mockery." },
      { q: "What does this teach about learning a new physical skill?", a: "That breaking a skill into small steps and practising patiently overcomes fear better than forcing or rushing." }
    ]
  },
  project: {
    title: "A stunt demonstration card",
    brief: "Prepare and demonstrate one stunt safely to your group.",
    steps: [
      "Choose one stunt you can already do safely.",
      "Write the steps of the stunt in order, numbering them.",
      "Write two safety rules for the stunt.",
      "Demonstrate it to your group on a mat, with the teacher watching.",
      "Help one classmate to learn the same stunt."
    ],
    criteria: ["steps written in correct order", "two safety rules given", "safe demonstration on a mat", "successfully helped a classmate"]
  },
  activities: [
    "Jumping Jack: jump with hands clapping overhead and legs opening in the air",
    "Charades: groups act out a word for the class to guess",
    "Chain Tag and Barnyard games",
    "Forward Roll and its variations: to jump tuck, consecutive rolls, reach over roll, to one-leg stand"
  ],
  materials: ["Mats", "Ropes", "Beanbags", "Posters", "Pencils", "Stopwatch"],
  assessment: ["Individual presentation", "Group presentation", "Class participation", "Practical demonstration"]
},

{
  grade: 1, period: "VI", sem: "Two", icon: "🩹",
  title: "First Aid",
  subtitle: "Principles of first aid, safety rules and the RICE method",
  outcomes: [
    "Learners are able to explain the principles of first aid, list safety rules, apply the skills of providing first aid, and demonstrate various games."
  ],
  objectives: [
    "Explain the principles of first aid",
    "List safety rules",
    "Apply the skills of providing first aid",
    "Demonstrate various games"
  ],
  note: "First aid is the first help given to someone who is hurt, before a nurse or doctor arrives. Children should always call an adult first — but knowing the simple steps can help a friend.",
  study:[
    /* ---- course text: Semester Two, Period VI — First Aid (guide pp. 13-14) ---- */
    {k:"h3", t:"The Principles of First Aid"},
    {k:"p", t:"**First aid** is the first help given to an injured or sick person **before** the nurse or doctor arrives. The principles of first aid: **act quickly but stay calm**, **keep the injured person safe**, and **get help** from an adult at once."},
    {k:"rule"},
    {k:"h3", t:"Safety Rules"},
    {k:"p", t:"Safety rules prevent accidents before they happen. List them and keep them:"},
    {k:"bul", items:["Play only in the marked playing area, away from stones, holes and traffic","Warm up before running and cool down after","Wear flat shoes and take off sharp objects such as pins and broken jewellery","Obey the whistle and the teacher at once","Never push, trip or hold another player","Report every injury — even a small one — to the teacher"]},
    {k:"rule"},
    {k:"h3", t:"First Aid Skills — the RICE Method"},
    {k:"p", t:"For sprains and bruises on the sports field, apply the **RICE method**:"},
    {k:"table", head:["Letter","Word","What to do"], rows:[
      ["R","Rest","Stop the activity and rest the injured part — no more running on it"],
      ["I","Ice","Put ice or a cold wet cloth on the injury to stop swelling and pain"],
      ["C","Compression","Wrap the part firmly (not too tight) with a bandage or cloth"],
      ["E","Elevation","Raise the injured part above the level of the heart"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Games for this Period"},
    {k:"p", t:"**Clappers (classroom game).** Arrange groups into small circles around the classroom. The first player in each group claps the number of syllables in her first name, pauses for two seconds, then claps the number again. She continues this action, and any other player with the same number of syllables in his name joins in. Allow each group to clap five times, then move to the next player and repeat the game. Repeat for surnames, and finally for a combination of first and last names."},
    {k:"p", t:"**Crazy Circle (loco-motor game, outdoor).** Players run, stop and change direction around the circle on the leader's wild signals. **Bat Ball (manipulative game, outdoor).** A ball is batted with the open hand and fielded by the other side — control the ball, do not throw it wildly."},
    {k:"p", t:"In groups, learners demonstrate first aid application using the RICE method, and discuss the principles, the safety rules and what to do during an emergency."}
  ],
  focus: ["Principles of first aid", "Safety rules", "First aid skills", "The RICE method", "Clappers, Crazy Circle and Bat Ball games"],
  terms: [
    { t: "first aid", d: "the first help given to an injured or sick person", x: "She gave first aid before the nurse came." },
    { t: "injury", d: "harm done to the body", x: "He got an injury when he fell." },
    { t: "RICE", d: "Rest, Ice, Compression, Elevation — the steps for a sprain", x: "We used the RICE method on his ankle." },
    { t: "rest", d: "stopping the activity so the injured part is not used", x: "Rest the leg and do not walk on it." },
    { t: "ice", d: "something cold placed on an injury to reduce swelling", x: "Put ice on the swollen ankle." },
    { t: "compression", d: "gently pressing or wrapping an injury", x: "A bandage gives compression." },
    { t: "elevation", d: "raising the injured part above the level of the heart", x: "Elevation helps reduce swelling." },
    { t: "swelling", d: "when a part of the body becomes bigger after injury", x: "There was swelling around his knee." },
    { t: "bandage", d: "a cloth strip used to cover or wrap a wound", x: "Wrap a clean bandage around the cut." },
    { t: "emergency", d: "a sudden dangerous situation needing quick action", x: "In an emergency, call an adult at once." }
  ],
  facts: [
    { q: "What is first aid?", a: "The first help given to an injured or sick person before a nurse or doctor arrives." },
    { q: "What do the letters RICE stand for?", a: "Rest, Ice, Compression and Elevation." },
    { q: "What is the first thing a child should do when someone is badly hurt?", a: "Call an adult or the teacher immediately." },
    { q: "Why do we put ice on a sprain?", a: "To reduce the swelling and the pain." },
    { q: "What does elevation mean in first aid?", a: "Raising the injured part above the level of the heart." },
    { q: "Name two safety rules for the playground.", a: "Any two: do not push, do not run on wet floors, wear proper shoes, and keep the field clear of stones and glass." },
    { q: "What should be used to cover a clean wound?", a: "A clean bandage or dressing." },
    { q: "Why should we not move a badly injured person?", a: "Because moving can make the injury worse; move only if the person is in danger." }
  ],
  tf: [
    { s: "First aid is the first help given before the nurse or doctor arrives.", a: "true", why: "That is the meaning of first aid." },
    { s: "RICE stands for Rest, Ice, Compression and Elevation.", a: "true", why: "These are the four steps for treating a sprain." },
    { s: "A child should treat a serious injury alone.", a: "false", why: "A child must call an adult immediately." },
    { s: "Ice on a fresh sprain helps reduce swelling.", a: "true", why: "Cold reduces swelling and eases pain." },
    { s: "It is safe to run on a floor with broken glass on it.", a: "false", why: "The field or floor must be cleared before play." },
    { s: "A dirty cloth is good for covering a wound.", a: "false", why: "Only a clean bandage or dressing should be used, to avoid infection." }
  ],
  apply: [
    { q: "Your friend twists his ankle during a game. Describe what you would do, step by step.", a: "Stop the game and call the teacher; help him sit and rest; apply something cold; wrap it gently; and raise the leg on a bag or bench." },
    { q: "A classmate has a small cut on the knee. What are the first two things to do?", a: "Wash your own hands, then clean the cut gently with clean water and cover it with a clean dressing; tell the teacher." },
    { q: "Why must the person giving first aid stay calm?", a: "Because panic causes mistakes and frightens the injured person; calm action helps everyone." },
    { q: "Look around your school field. Name two dangers and how to remove them.", a: "For example: broken bottles — clear them into a bin; and a hole in the ground — fill it or mark it off." },
    { q: "What should you never put on a burn?", a: "Never put oil, butter, kerosene or dirt on a burn; use clean cool water and call an adult." }
  ],
  sort: {
    title: "First aid kit items and playground dangers",
    groups: [
      { name: "In the first aid kit", items: ["bandage", "clean water", "soap", "gloves", "cotton wool"] },
      { name: "Dangers to remove", items: ["broken glass", "sharp stones", "wet slippery floor", "open hole"] }
    ]
  },
  compare: {
    title: "The RICE method",
    caption: "Complete the table explaining each step of RICE.",
    items: [
      { p: "R — Rest", f: "Stop the activity so the injured part is not used." },
      { p: "I — Ice", f: "Apply something cold to reduce swelling and pain." },
      { p: "C — Compression", f: "Wrap the injury gently with a bandage to limit swelling." },
      { p: "E — Elevation", f: "Raise the injured part above the level of the heart." }
    ]
  },
  casestudy: {
    title: "The whistle that stopped everything",
    text: "During a football game at break, Momo went down holding his ankle. Some boys shouted at him to get up and keep playing. One boy tried to pull him to his feet. Then Grade One's monitor, a small girl named Bendu, blew the teacher's spare whistle as loud as she could and stood over Momo with her arms out. \"Nobody moves him,\" she said. She sent the fastest runner for the teacher, told another boy to fetch cold water, and made Momo sit still with his leg raised on a school bag. When the teacher arrived she said Bendu had done exactly the right thing: the ankle was badly sprained, and pulling him up could have made it far worse.",
    questions: [
      { q: "What did the other boys want to do, and why was it wrong?", a: "They wanted to pull Momo up and continue playing, which could have made the injury much worse." },
      { q: "List three things Bendu did correctly.", a: "She stopped anyone from moving him, sent for the teacher, and kept him resting with the leg raised while cold water was fetched." },
      { q: "Which parts of the RICE method did Bendu use?", a: "Rest — she kept him still; Ice — she sent for cold water; and Elevation — she raised the leg on a school bag." }
    ]
  },
  project: {
    title: "A class first aid poster",
    brief: "Make a poster teaching the school what to do when someone is hurt.",
    steps: [
      "Write the title FIRST AID at the top.",
      "Write the four RICE steps with a small drawing beside each.",
      "Write in large letters: ALWAYS CALL AN ADULT FIRST.",
      "List three items that should be in a first aid kit.",
      "Display your poster where the whole school can see it."
    ],
    criteria: ["four RICE steps correct", "call an adult clearly shown", "three kit items listed", "clear and readable poster"]
  },
  activities: [
    "Discuss and demonstrate first aid principles, safety rules and their application in an emergency",
    "In groups demonstrate the RICE method: Rest, Ice, Compression, Elevation",
    "Clappers: clap the number of syllables in your name and find others who match",
    "Crazy Circle and Bat Ball games"
  ],
  materials: ["First aid kit", "Bandages", "Soap", "Water", "Gloves", "Whistle"],
  assessment: ["Individual presentation", "Group presentation", "Class participation", "Practical demonstration"]
},

/* ============================ GRADE 2 ============================ */
{
  grade: 2, period: "I", sem: "One", icon: "🏃",
  title: "Introduction to Physical Education",
  subtitle: "The meaning and history of P.E., its importance, and sporting activities",
  outcomes: ["Learners are able to discuss physical education, explain its importance, and participate in games and sporting activities."],
  objectives: ["Discuss Physical Education and its history", "Explain the importance of physical education", "Participate in games and sporting activities"],
  note: "People have exercised and competed for thousands of years. The ancient Greeks held the first Olympic Games. Today P.E. is taught in schools all over the world because a healthy body helps a person learn and work well.",
  study:[
    /* ---- course text: Semester One, Period I — Introduction to Physical Education (guide pp. 15-16) ---- */
    {k:"h3", t:"Physical Education, Its History and Importance"},
    {k:"p", t:"**Physical Education** is the study of the body in motion; it develops learners physically and mentally. From its early history, P.E. grew from simple games and military drill into the school subject that teaches **fitness, skills, fair play and health**. Its importance: it builds a strong body, trains the mind to make quick, honest decisions, and teaches learners to cooperate."},
    {k:"rule"},
    {k:"h3", t:"Health and Personal Hygiene"},
    {k:"p", t:"**General health** is the well-being of the whole body — strength, cleanliness, good food and rest. **Personal hygiene** is the daily care we give our own body: bathing, clean clothes, clean teeth and clean hands. Healthy, clean learners miss fewer school days and play better."},
    {k:"rule"},
    {k:"h3", t:"Exercise (Flexibility) — the Trunk Twist"},
    {k:"p", t:"**Trunk Twist** — start in a sitting position with the right leg extended and the left leg bent and crossed over the right leg. The left hand rests on the floor, and the right arm rests on the side of the left leg. Simultaneously push against the leg with the right arm and turn the trunk as far as possible toward the left side. **Reverse the positions and repeat the exercise.**"},
    {k:"rule"},
    {k:"h3", t:"Sporting Activities (Track & Field) — the Long Jump"},
    {k:"p", t:"**Long Jump** — the learner begins several yards back from the take-off board, runs forward, and places his take-off foot on the board. As soon as he leaves the board, he brings his rear leg and both arms forward and upward. His heels contact the ground, and he immediately thrusts both arms back, forcing his body well forward."},
    {k:"rule"},
    {k:"h3", t:"Minor Games"},
    {k:"p", t:"**Crambo (classroom game).** One child chosen to be 'IT' starts the game by saying, *'I am thinking of something (inside or outside the room) that rhymes with rain.'* The other players ask, *'Is it a rain?' 'Is it a drain?'* and so on. The child who guesses correctly becomes 'IT'."},
    {k:"p", t:"**Crows and Cranes (loco-motor game)** — two lines face each other; when 'crows' or 'cranes' is called, that side chases the other to its goal line. **Battle Ball (manipulative game)** — two teams battle to force the ball across the opponents' line."}
  ],
  focus: ["Definition of Physical Education", "History of Physical Education", "Importance of Physical Education", "Exercise and sport", "Classroom, loco-motor and manipulative games"],
  terms: [
    { t: "physical education", d: "learning about the body and how to move, exercise and play well", x: "Physical education is on our timetable twice a week." },
    { t: "history", d: "the story of what happened in the past", x: "The history of P.E. begins with the ancient Greeks." },
    { t: "importance", d: "the reason why something matters", x: "The importance of exercise is a strong, healthy body." },
    { t: "Olympic Games", d: "a great world sports competition that began in ancient Greece", x: "Athletes from many countries meet at the Olympic Games." },
    { t: "athlete", d: "a person trained in sport", x: "An athlete trains almost every day." },
    { t: "compete", d: "to try to win against others", x: "The two teams compete for the trophy." },
    { t: "teamwork", d: "people working together for one goal", x: "Teamwork won us the relay." },
    { t: "fair play", d: "playing honestly and by the rules", x: "Fair play matters more than winning." },
    { t: "equipment", d: "the things used to play a sport", x: "Balls and ropes are P.E. equipment." },
    { t: "referee", d: "the person who makes sure the rules are obeyed", x: "The referee blew for a foul." }
  ],
  facts: [
    { q: "What is Physical Education?", a: "Learning about the body and how to move, exercise and play well." },
    { q: "Where did the Olympic Games begin?", a: "In ancient Greece." },
    { q: "Give two reasons why physical education is important.", a: "Any two: it builds a strong healthy body, improves the mind, teaches teamwork and fair play, and prevents sickness." },
    { q: "What is fair play?", a: "Playing honestly and according to the rules." },
    { q: "Who makes sure the rules are obeyed in a match?", a: "The referee." },
    { q: "Name two kinds of games played in P.E.", a: "Any two: classroom games, loco-motor games, manipulative games and cooperative games." },
    { q: "What is an athlete?", a: "A person trained in sport." },
    { q: "Why is teamwork important in sport?", a: "Because players must work together for the team to succeed." }
  ],
  tf: [
    { s: "The Olympic Games began in ancient Greece.", a: "true", why: "That is where the first Olympic Games were held." },
    { s: "Physical education is only about playing football.", a: "false", why: "It covers the body, fitness, health, first aid, games and many sports." },
    { s: "Fair play means winning at any cost.", a: "false", why: "Fair play means playing honestly and by the rules." },
    { s: "Exercise helps the mind as well as the body.", a: "true", why: "Active pupils concentrate and learn better." },
    { s: "The referee makes sure the rules are obeyed.", a: "true", why: "That is the referee's job." },
    { s: "Girls should not take part in sporting activities.", a: "false", why: "Boys and girls take part equally in P.E. and sport." }
  ],
  apply: [
    { q: "Your team lost a match. How should you behave towards the winners?", a: "Congratulate them, thank them for the game, and plan how to practise better next time." },
    { q: "How does P.E. help you outside the sports field?", a: "It builds health and energy for school work, and teaches discipline, teamwork and patience." },
    { q: "A player on your team cheats to win a point. What will you do?", a: "Tell him it is wrong, admit it to the referee, and give the point back — winning by cheating is not winning." },
    { q: "Your school has no equipment for a game. What can you do?", a: "Use simple local materials — rolled cloth balls, bottle markers, drawn lines — and play games that need no equipment." },
    { q: "Name one sport played in Liberia and one skill it needs.", a: "For example: football, which needs the skill of controlling and passing the ball with the feet." }
  ],
  sort: {
    title: "Benefits of P.E.",
    groups: [
      { name: "Benefits to the body", items: ["strong muscles", "healthy heart", "good posture", "less sickness"] },
      { name: "Benefits to the mind and to others", items: ["clear thinking", "teamwork", "fair play", "confidence"] }
    ]
  },
  compare: {
    title: "Kinds of games in physical education",
    caption: "Complete the table with the meaning of each kind of game.",
    items: [
      { p: "Classroom game", f: "A quiet game played indoors in a small space, such as clappers or charades." },
      { p: "Loco-motor game", f: "A game where players move about — running, hopping or chasing." },
      { p: "Manipulative game", f: "A game using an object handled with the hands or feet, such as a ball or beanbag." },
      { p: "Cooperative game", f: "A game where players must work together rather than compete." }
    ]
  },
  casestudy: {
    title: "The field with no goalposts",
    text: "Grade Two at Kakata Public School wanted to play football, but the school had no goalposts and only one worn ball. Some children said there was no point playing. Their teacher asked them a question instead: \"What does a goal actually need to be?\" The class thought about it. Two stones, they decided. They paced out the distance so both goals were the same width, marked the touchlines with a stick dragged through the dust, and made two teams by counting off. They played every break for the rest of the term. When a visitor from the district office came and asked which team was best, the children could not answer — they changed the teams every week so that nobody was always on the losing side.",
    questions: [
      { q: "What problem did the class have, and how did they solve it?", a: "They had no goalposts, so they used two stones paced out to the same width and marked lines in the dust." },
      { q: "Why could the children not say which team was best?", a: "Because they changed the teams every week so nobody was always on the losing side." },
      { q: "What does this story show about physical education?", a: "That P.E. depends on organisation and fairness more than on expensive equipment." }
    ]
  },
  project: {
    title: "A history poster of sport",
    brief: "Make a poster on the story of sport and exercise.",
    steps: [
      "At the top write: WHY WE EXERCISE.",
      "Draw one picture of exercise long ago, such as the ancient Olympic Games.",
      "Draw one picture of a sport played in Liberia today.",
      "Write three reasons why exercise is important.",
      "Present your poster to the class in two minutes."
    ],
    criteria: ["both pictures drawn", "three correct reasons", "neat readable writing", "clear oral presentation"]
  },
  activities: [
    "Discuss the history and importance of physical education, exercise and sport",
    "Group work on the different kinds of games and their rules",
    "Practical: warm up, then a loco-motor and a manipulative game",
    "Individual and group presentations on why P.E. matters"
  ],
  materials: ["P.E. handbook", "Stopwatch", "Whistle", "Balls", "Charts"],
  assessment: ["Individual presentation", "Group presentation", "Class participation", "Practical demonstration"]
},

{
  grade: 2, period: "II", sem: "One", icon: "🧍",
  title: "The Human Body",
  subtitle: "Body parts and types, motor skills, and growing up",
  outcomes: ["Learners are able to identify parts of the body, explain their roles, demonstrate motor skills, and describe how boys and girls grow and change."],
  objectives: ["Identify different parts of the body", "Explain the role of the body parts", "Demonstrate motor skills through sport", "Describe how the body grows and changes"],
  note: "Every person's body grows and changes as they get older. Growing is normal and healthy. Keeping the body clean, eating good food and exercising helps the body grow well.",
  study:[
    /* ---- course text: Semester One, Period II — The Human Body (guide pp. 17-18) ---- */
    {k:"h3", t:"Exploring the Body Parts"},
    {k:"p", t:"We **explore the body parts** — we list them, draw them and show the **role** each one plays. The legs run, the arms throw, the eyes watch the ball, the ears hear the whistle. Every part has work to do in play and in life."},
    {k:"p", t:"Remember the three **body types** from Grade One — the slim **ectomorph**, the round **endomorph** and the muscular **mesomorph** — and link body parts to the exercises that build them."},
    {k:"rule"},
    {k:"h3", t:"Types of Motor Skills"},
    {k:"bul", items:["**Loco-motor skills** — movements that carry the body from place to place: running, hopping, jumping, dodging","**Manipulative skills** — movements that control objects: throwing, catching, kicking, dribbling","**Stability skills** — balancing and twisting the body in one place"]},
    {k:"rule"},
    {k:"h3", t:"Sexuality Education — Characteristics of Boys and Girls"},
    {k:"p", t:"Boys are different from girls by their **body parts**, the **clothes they wear** and their **behaviour**. The body parts of the boy are the **penis** and **scrotum**, and of the girl the **breast** and **vagina**. These parts are private: they must be covered, kept clean, and never touched by others without permission. In pairs, learners show the characteristics of a boy or a girl and write a report."},
    {k:"rule"},
    {k:"h3", t:"Games"},
    {k:"p", t:"**Hat Race (classroom game).** All players stand in the aisles with a ruler in their right hand. The first has a hat, which he places on his ruler. On the signal **'GO'** he passes the hat over his right shoulder to the next player, who takes the hat with his ruler and passes it over his right shoulder to the next player, and so on."},
    {k:"p", t:"**Do As I Do (loco-motor game)** — the leader performs a movement and everyone must copy it exactly. **Beanbag Basket (manipulative game)** — throw beanbags into the basket for points, as in the beanbag basket relay of Grade One."},
    {k:"rule"},
    {k:"h3", t:"Stunts and Tumbling — the Tip Over"},
    {k:"p", t:"**Tip Over** — begin in a squat position with hands on the mat and knees between the arms. Lean forward, raise the seat, look back through the legs; then place the top of the shoulders on the mat and roll over to a sitting position."},
    {k:"p", t:"Then practise: **Back Roller**, **Forward Roll**, **Consecutive Roll** and **Forward Roll to One-Leg Stand**."}
  ],
  focus: ["Exploration of body parts", "Body types", "Roles of body parts", "Types of motor skills", "Growth and change", "Games and gymnastics"],
  terms: [
    { t: "body type", d: "the general shape and build of a person's body", x: "People have different body types." },
    { t: "growth", d: "getting bigger and stronger as you get older", x: "Good food helps growth." },
    { t: "motor skill", d: "the ability to move the body well", x: "Catching a ball is a motor skill." },
    { t: "coordination", d: "making different parts of the body work together smoothly", x: "Skipping needs good coordination." },
    { t: "trunk", d: "the main part of the body without the head, arms and legs", x: "The trunk holds the chest and stomach." },
    { t: "limb", d: "an arm or a leg", x: "The arms and legs are our four limbs." },
    { t: "organ", d: "a part inside the body that does special work", x: "The heart is an important organ." },
    { t: "heart", d: "the organ that pumps blood round the body", x: "Exercise makes the heart strong." },
    { t: "lungs", d: "the organs we use to breathe", x: "Our lungs take in air." },
    { t: "nutrition", d: "the food the body needs to grow and stay well", x: "Good nutrition supports growth." }
  ],
  facts: [
    { q: "Name the four limbs.", a: "Two arms and two legs." },
    { q: "What is the trunk of the body?", a: "The main part of the body, without the head, arms and legs." },
    { q: "What does the heart do?", a: "It pumps blood around the body." },
    { q: "What do the lungs do?", a: "They take in air so the body gets oxygen." },
    { q: "What is a motor skill?", a: "The ability to move the body well, such as running, catching or jumping." },
    { q: "What is coordination?", a: "Making different parts of the body work together smoothly." },
    { q: "Name two things that help the body grow well.", a: "Good food and enough sleep; also exercise and cleanliness." },
    { q: "Is it normal for bodies to be different sizes and shapes?", a: "Yes. People have different body types and all can be healthy." }
  ],
  tf: [
    { s: "The heart pumps blood around the body.", a: "true", why: "That is the work of the heart." },
    { s: "All people have exactly the same body type.", a: "false", why: "People differ in shape and build, and all can be healthy." },
    { s: "Coordination means moving parts of the body together smoothly.", a: "true", why: "That is the definition of coordination." },
    { s: "Sleep is not needed for growth.", a: "false", why: "The body grows and repairs itself during sleep." },
    { s: "The lungs help us to breathe.", a: "true", why: "The lungs take in air and pass oxygen to the blood." },
    { s: "It is wrong to ask a teacher or parent questions about how the body grows.", a: "false", why: "Asking a trusted adult is the right way to learn correct information." }
  ],
  apply: [
    { q: "Which organs work hardest when you run a long distance?", a: "The heart and the lungs, together with the leg muscles." },
    { q: "Name two motor skills used in football and say which body parts they use.", a: "Kicking uses the legs and feet; heading or throwing in uses the neck, arms and trunk." },
    { q: "A classmate is teased for being small. What will you say?", a: "That people grow at different times and different body types are all normal, and that teasing is unkind and against our class rules." },
    { q: "Why should you eat well and sleep enough while you are growing?", a: "Because food gives the body material to build with, and the body grows and repairs itself during sleep." },
    { q: "Who should you ask if you have a question about changes in your body?", a: "A trusted adult — a parent, guardian, teacher or health worker." }
  ],
  sort: {
    title: "Outside parts and inside organs",
    groups: [
      { name: "Outside parts of the body", items: ["head", "arm", "leg", "hand", "foot", "trunk"] },
      { name: "Organs inside the body", items: ["heart", "lungs", "stomach", "brain"] }
    ]
  },
  compare: {
    title: "Body parts and their roles",
    caption: "Complete the table with the role of each part of the body.",
    items: [
      { p: "Brain", f: "Controls the whole body and lets us think and learn." },
      { p: "Heart", f: "Pumps blood carrying food and oxygen to every part." },
      { p: "Lungs", f: "Take in air so the blood can carry oxygen." },
      { p: "Muscles", f: "Pull the bones so the body can move." },
      { p: "Bones", f: "Give the body shape and protect the organs inside." }
    ]
  },
  casestudy: {
    title: "Two brothers, two builds",
    text: "Sando and Tokpa are brothers in the same school. Sando is tall and thin; Tokpa is shorter and heavier. When the Grade Two class did their fitness activities, Sando was the fastest in the long run, and everyone expected him to be best at everything. But when the class did the throwing and the tug-of-war, Tokpa was the strongest by far. At first each brother was jealous of the other. Their teacher put them in the same team for a relay that needed both a fast runner and a strong thrower. They won. Afterwards the teacher told the class that no single body type is the best one — different builds are suited to different things, and every one of them can be trained to be fit.",
    questions: [
      { q: "How do Sando and Tokpa differ in build?", a: "Sando is tall and thin; Tokpa is shorter and heavier." },
      { q: "What was each brother best at?", a: "Sando was fastest at the long run; Tokpa was strongest at throwing and tug-of-war." },
      { q: "What did the teacher want the class to learn?", a: "That no single body type is best — different builds suit different activities, and everyone can become fit." }
    ]
  },
  project: {
    title: "Growing and staying healthy",
    brief: "Make a short booklet about caring for a growing body.",
    steps: [
      "Fold two sheets to make a small booklet.",
      "Page 1: draw yourself and write your name and age.",
      "Page 2: list four foods that help the body grow.",
      "Page 3: list four ways you keep your body clean.",
      "Page 4: write one question you would like to ask a trusted adult about growing up."
    ],
    criteria: ["four growth foods listed", "four hygiene habits listed", "sensible question written", "booklet neat and complete"]
  },
  activities: [
    "Discussion and labelling of the parts of the body and their roles",
    "Demonstration of motor skills through sport activities",
    "Gymnastic activities and manipulative games",
    "Group discussion, guided by the teacher, on healthy growth and personal care"
  ],
  materials: ["Charts", "Posters", "Mat", "Whistle", "Life education resource books"],
  assessment: ["Individual presentation", "Group presentation", "Class participation", "Practical demonstration"]
},

{
  grade: 2, period: "III", sem: "One", icon: "📋",
  title: "Physical Fitness Screening",
  subtitle: "Height and weight, sit-ups and the squat thrust",
  outcomes: ["Learners are able to discuss physical fitness screening, demonstrate various types of screening, and take part in games."],
  objectives: ["Discuss physical fitness screening", "Demonstrate various types of screening", "Take part in exercises and games"],
  note: "In screening we measure the body and count what it can do. Everyone's numbers are different. The important number is not the biggest one — it is whether your own number is better than last time.",
  study:[
    /* ---- course text: Semester One, Period III — Physical Fitness Screening (guide pp. 19-20) ---- */
    {k:"h3", t:"Physical Fitness — Body Screening"},
    {k:"p", t:"**Body screening** is the simple health and fitness check the class does at the start of the season. Screening shows each learner's fitness level: it tells the teacher who needs gentle work and who is ready for harder exercise. Discuss what screening is, then demonstrate the types."},
    {k:"p", t:"Types of screening to demonstrate:"},
    {k:"bul", items:["**Height and weight** — measured with the measurement scales and a metre rule","**Ability checks** — simple strength and endurance tasks","**Result records** — the teacher writes the results in the assessment forms and repeats the tests later in the year"]},
    {k:"rule"},
    {k:"h3", t:"Exercise — Sit-Ups"},
    {k:"p", t:"**Sit-Ups** — learners sit on the floor with hands locked behind the head. On a whistle, learners lie on their backs and return to the normal sitting position, on several counts. Sit-ups build the muscles of the stomach (the abdominal muscles)."},
    {k:"rule"},
    {k:"h3", t:"Games"},
    {k:"p", t:"**Human Checkers (classroom game).** Place seven chairs in a row. Three girls sit on the three chairs at one end and three boys sit at the other end. The object is to move the girls to the boys' chairs and the boys to the girls' chairs **in fifteen moves**. Only one move can be made at a time. Moves are made by sliding into an open chair or by 'jumping' over one person. Players cannot move backward. For example, girl number three moves to the spare chair; on the second move, boy number four jumps girl number three, who is now in the spare position — and so on."},
    {k:"p", t:"**Find Your Letter** — players hunt for the letter or card that matches their own when it is called. **Bombardment** — teams throw soft balls at the targets or players on the other side, who dodge; a hit player is out until the next round."}
  ],
  focus: ["Definition of physical fitness screening", "Body screening: height and weight", "Exercises: sit-ups and squat thrust", "Games"],
  terms: [
    { t: "screening", d: "checking the body to see how fit and healthy it is", x: "Screening is done at the start of the term." },
    { t: "sit-up", d: "an exercise where you lie on your back and rise up to touch the knees", x: "He did twenty sit-ups in one minute." },
    { t: "squat thrust", d: "an exercise moving from a squat to a push-up position and back", x: "The squat thrust works the whole body." },
    { t: "repetition", d: "one complete movement of an exercise", x: "Do ten repetitions of the exercise." },
    { t: "abdominal muscles", d: "the muscles of the stomach area", x: "Sit-ups strengthen the abdominal muscles." },
    { t: "endurance", d: "the ability to keep going for a long time", x: "Endurance is built by regular exercise." },
    { t: "stopwatch", d: "a watch used to time an exercise exactly", x: "The teacher used a stopwatch for the one-minute test." },
    { t: "average", d: "the usual or middle amount", x: "Her result was above the class average." },
    { t: "progress", d: "improvement over time", x: "His chart shows good progress." },
    { t: "assessment form", d: "the paper on which results are written", x: "Fill in your name on the assessment form." }
  ],
  facts: [
    { q: "What is physical fitness screening?", a: "Checking the body to see how fit and healthy it is." },
    { q: "Which two body measurements are usually taken first?", a: "Height and weight." },
    { q: "Describe a sit-up.", a: "Lie on the back with legs folded and hands behind the head, then rise until the face comes towards the knees." },
    { q: "Which muscles do sit-ups strengthen?", a: "The abdominal (stomach) muscles." },
    { q: "What is a repetition?", a: "One complete movement of an exercise." },
    { q: "What instrument times a one-minute exercise test?", a: "A stopwatch." },
    { q: "Why is each pupil's result written on a form?", a: "So progress can be compared at the next screening." },
    { q: "Should pupils compare their results with each other or with themselves?", a: "With themselves, to see their own progress." }
  ],
  tf: [
    { s: "Sit-ups strengthen the stomach muscles.", a: "true", why: "The abdominal muscles do the work in a sit-up." },
    { s: "Height and weight are measured in screening.", a: "true", why: "They are the usual first measurements." },
    { s: "A stopwatch is used to measure weight.", a: "false", why: "A stopwatch measures time; a scale measures weight." },
    { s: "You should hold your breath through the whole exercise.", a: "false", why: "Breathe steadily; holding the breath is harmful." },
    { s: "It is fine to compare your result with your own earlier result.", a: "true", why: "That is exactly what screening is for." },
    { s: "One screening test is enough for the whole of a pupil's school life.", a: "false", why: "Screening is repeated so that growth and progress can be followed." }
  ],
  apply: [
    { q: "You could do 8 sit-ups in September and 15 in March. What does this show?", a: "That my abdominal strength and endurance have nearly doubled — my regular exercise is working." },
    { q: "Your partner's back hurts when she does sit-ups. What should you do?", a: "Stop the exercise at once and tell the teacher; she may be doing it wrongly or may need to rest." },
    { q: "Plan how to improve your squat thrust score in one month.", a: "Practise a few every day, increase the number slowly each week, rest between sets, and keep the movement correct rather than rushed." },
    { q: "Why should the same stopwatch and the same method be used each time?", a: "So the comparison is fair and any change in the result is real." },
    { q: "A pupil is unwell on screening day. What should happen?", a: "He should not be tested; he should be screened later when he is well." }
  ],
  sort: {
    title: "Instruments and exercises",
    groups: [
      { name: "Instruments used in screening", items: ["meter rule", "scale", "stopwatch", "assessment form"] },
      { name: "Exercises tested", items: ["sit-ups", "squat thrust", "jog in place", "toe touch"] }
    ]
  },
  compare: {
    title: "Screening exercises and what they test",
    caption: "Complete the table by writing what each exercise tests.",
    items: [
      { p: "Sit-ups in one minute", f: "Strength and endurance of the abdominal muscles." },
      { p: "Squat thrust", f: "Whole-body strength, agility and coordination." },
      { p: "Jog in place", f: "Heart and lung endurance." },
      { p: "Toe touch", f: "Flexibility of the back and the back of the legs." }
    ]
  },
  casestudy: {
    title: "Numbers that told the truth",
    text: "When the district health team came to screen Grade Two, one boy, Varney, was worried. He was the shortest in the class and had always been told he was weak. The team measured his height and weight, then timed the sit-ups. Varney did twenty-two in one minute, more than any other pupil in the room. The nurse wrote his number down and said, in front of everyone, \"Strength is not the same as size.\" Varney's teacher pinned the class results in her book and, at the end of term, gave every child a card showing only their own two results, September and March. Varney's card is still in his family's Bible.",
    questions: [
      { q: "What had Varney been told about himself, and what did the screening show?", a: "He had been told he was weak because he was short; the screening showed he did more sit-ups than anyone in the class." },
      { q: "What did the nurse mean by 'strength is not the same as size'?", a: "That a small body can be strong, and that size does not decide fitness." },
      { q: "Why did the teacher give each child a card with only their own results?", a: "So each pupil could see his own progress without being compared with others." }
    ]
  },
  project: {
    title: "Screening record card",
    brief: "Design and complete a screening record card for yourself.",
    steps: [
      "Draw a card with your name and two columns: Now and In one month.",
      "Record height, weight, sit-ups in one minute and squat thrusts in one minute.",
      "Exercise regularly for a month.",
      "Complete the second column with your teacher's help.",
      "Write two sentences on what improved and why."
    ],
    criteria: ["all four measures recorded twice", "card clear and neat", "honest results", "sensible explanation of the change"]
  },
  activities: [
    "Sit-Ups: lie facing upward with hands behind the head and rise until the face touches the knees",
    "Squat Thrust: from a squat, thrust the legs back to a push-up position and return",
    "Measuring and recording height and weight on assessment forms",
    "Classroom, loco-motor and manipulative games"
  ],
  materials: ["Measurement scales", "Meter rule", "Assessment forms", "Stopwatch", "Mat"],
  assessment: ["Individual presentation", "Group presentation", "Class participation", "Practical demonstration"]
},

{
  grade: 2, period: "IV", sem: "Two", icon: "🩹",
  title: "First Aid",
  subtitle: "Definition of first aid, safety rules and treating simple injuries",
  outcomes: ["Learners are able to define first aid, list safety rules, and apply the skills of first aid treatment."],
  objectives: ["Define first aid", "List safety rules", "Apply the skills in first aid treatment", "Demonstrate games"],
  note: "First aid means acting calmly, quickly and correctly. For a child the first rule never changes: call an adult. The second is: do no further harm.",
  study:[
    /* ---- course text: Semester Two, Period IV — First Aid / Personal Hygiene (guide pp. 21) ---- */
    {k:"h3", t:"Personal Hygiene — Caring for the Body"},
    {k:"p", t:"**Personal hygiene** is the daily care we give our body to keep it clean and healthy. The guide asks three things: name the **body parts to care for most**, list the **ways to care for body parts**, and explain **why caring for them matters**."},
    {k:"table", head:["Body part to care for most","How to care for it","Why it matters"], rows:[
      ["Skin","Bathe with soap and clean water; dry well","Clean skin stops germs and skin infection"],
      ["Teeth and mouth","Brush morning and evening","Prevents tooth decay and mouth disease"],
      ["Hands and nails","Wash before eating; keep nails short and clean","Stops germs reaching the food we eat"],
      ["Hair","Wash and comb it regularly","Keeps lice and dandruff away"],
      ["Feet","Wash and dry between the toes; wear clean shoes","Prevents sores, especially after sports"]
    ]},
    {k:"rule"},
    {k:"h3", t:"First Aid Reminder"},
    {k:"p", t:"Cleanliness is also **first aid**: wash every cut or graze with clean water and soap, cover it with a clean dressing, and **tell an adult**. A clean wound heals quickly; a dirty wound can become infected."},
    {k:"rule"},
    {k:"h3", t:"Games"},
    {k:"p", t:"**Knots (classroom game).** Learners begin standing together in a small circle with their hands at their sides. On a whistle, all learners move their hands forward and grasp other learners' hands. Players who are standing next to each other cannot hold hands. When everyone is holding hands, the group — **without letting go** — begins to undo itself and return to the original circle formation."},
    {k:"p", t:"**Fragile Rock (loco-motor game)** — players move like fragile rocks: careful balancing and slow, controlled motion so nothing is 'broken'. **Borden Ball (manipulative game)** — pass and move with the ball across the opponents' goal line to score."},
    {k:"rule"},
    {k:"h3", t:"Stunts and Tumbling"},
    {k:"p", t:"**Bear Dance** — squat on the left foot and extend the right leg forward, with the arms extended from the sides. Simultaneously jump forward, draw the left leg back, and extend the right leg forward (then change feet)."},
    {k:"p", t:"Animal walks to follow: **Camel Walk** (hands and feet on the floor, hips high, moving slowly like a camel), **Elephant Walk** (bent forward, arms hanging and swinging like a trunk) and **Gorilla Walk** (deep crouch, knuckles touching the ground, swaying from side to side)."}
  ],
  focus: ["Definition of first aid", "Safety rules", "First aid skills and their application", "Simple injuries: cuts, bruises, nosebleeds and burns", "Games"],
  terms: [
    { t: "first aid", d: "the immediate temporary care given to a person who is hurt or suddenly sick", x: "First aid is given before the nurse arrives." },
    { t: "safety rule", d: "a rule that keeps people from being hurt", x: "No pushing on the stairs is a safety rule." },
    { t: "bruise", d: "a dark mark under the skin caused by a knock", x: "He had a bruise on his knee." },
    { t: "cut", d: "an opening in the skin made by something sharp", x: "Wash the cut with clean water." },
    { t: "nosebleed", d: "when blood comes from the nose", x: "For a nosebleed, sit and lean forward." },
    { t: "burn", d: "an injury caused by heat, fire or hot liquid", x: "Cool a burn under clean running water." },
    { t: "infection", d: "germs entering the body and causing sickness", x: "Cover a wound to prevent infection." },
    { t: "bleeding", d: "blood coming out of the body", x: "Press gently to stop the bleeding." },
    { t: "shock", d: "a dangerous weak state after a serious injury", x: "Keep the victim warm and calm to treat for shock." },
    { t: "victim", d: "the person who has been hurt", x: "Do not move the victim unless necessary." }
  ],
  facts: [
    { q: "Define first aid.", a: "The immediate temporary care given to a person who has become sick or has been injured." },
    { q: "What is the first rule for a child at an accident?", a: "Call an adult or the teacher at once." },
    { q: "How do you stop bleeding from a small cut?", a: "Press gently on it with a clean cloth and raise the part if you can." },
    { q: "What should you do for a nosebleed?", a: "Sit the person down, lean the head slightly forward and pinch the soft part of the nose." },
    { q: "What should be put on a burn?", a: "Clean cool water — never oil, butter or dirt." },
    { q: "Name three safety rules for the school.", a: "Any three: do not run on wet floors, do not push, keep the field free of glass, do not play with fire, walk on the stairs." },
    { q: "Why do we cover a wound?", a: "To keep out germs and prevent infection." },
    { q: "Name three items found in a first aid kit.", a: "Any three: bandage, gloves, soap, clean water, cotton wool and antiseptic." }
  ],
  tf: [
    { s: "First aid is the immediate temporary care given to an injured person.", a: "true", why: "That is the definition." },
    { s: "You should put butter or oil on a burn.", a: "false", why: "Use clean cool water; oil holds in the heat and causes infection." },
    { s: "Covering a wound helps prevent infection.", a: "true", why: "A clean cover keeps germs out." },
    { s: "You should lean the head far back during a nosebleed.", a: "false", why: "Lean slightly forward so blood does not run down the throat." },
    { s: "Safety rules help to prevent injuries.", a: "true", why: "That is why they exist." },
    { s: "You should wash your hands before treating someone's wound.", a: "true", why: "Clean hands prevent passing germs to the wound." }
  ],
  apply: [
    { q: "A pupil spills hot water on her hand. What do you do?", a: "Call the teacher, put the hand under clean cool running water for several minutes, do not burst any blister, and cover loosely with a clean cloth." },
    { q: "Write three safety rules for your own classroom.", a: "For example: walk, do not run, indoors; keep bags out of the walkway; and never touch the teacher's sharp or hot items." },
    { q: "A boy falls and his knee is bleeding and dirty. Order the steps.", a: "Call the teacher; wash my hands; clean the wound with clean water; press gently to stop bleeding; cover with a clean dressing." },
    { q: "Why must a first aid kit be kept where everyone can find it?", a: "Because in an emergency there is no time to search for it." },
    { q: "Someone is hurt and a crowd gathers round. What should be done?", a: "Ask the crowd to move back so the victim gets air and the helper has room to work." }
  ],
  sort: {
    title: "Safe and unsafe actions",
    groups: [
      { name: "Safe actions", items: ["walking on wet floors", "washing hands before helping", "calling an adult", "clearing glass from the field"] },
      { name: "Unsafe actions", items: ["pushing on the stairs", "putting oil on a burn", "moving a badly injured person", "using a dirty cloth on a wound"] }
    ]
  },
  compare: {
    title: "Simple injuries and their first aid",
    caption: "Complete the table with the correct first aid for each injury.",
    items: [
      { p: "Small cut", f: "Clean with clean water, press gently to stop bleeding, cover with a clean dressing." },
      { p: "Bruise", f: "Apply something cold and rest the part." },
      { p: "Nosebleed", f: "Sit down, lean slightly forward and pinch the soft part of the nose." },
      { p: "Minor burn", f: "Cool under clean running water, then cover loosely; never apply oil." },
      { p: "Sprain", f: "Rest, Ice, Compression and Elevation." }
    ]
  },
  casestudy: {
    title: "The kit in the cupboard",
    text: "Kpelle Community School had a first aid kit. It was a good one, donated two years earlier, and it was kept locked in the principal's cupboard because people had been taking the plasters. Then one afternoon a boy fell from the mango tree and cut his arm badly. The principal was away at a district meeting, and the cupboard key was in her handbag. The teachers used a clean cloth from a pupil's bag and sent for a motorbike to the clinic. The boy was fine. The next Monday the staff bought a second small kit, hung it on a nail by the Grade Two door where every child could reach it, and made the class monitors responsible for checking it each Friday. Nothing has gone missing since.",
    questions: [
      { q: "Why could the school not use its first aid kit?", a: "It was locked in the principal's cupboard and she had taken the key with her to a meeting." },
      { q: "What did the school do afterwards?", a: "They bought a second kit, hung it where every child could reach it, and made the class monitors check it every Friday." },
      { q: "What lesson does this teach about first aid supplies?", a: "That a kit must be available and reachable in an emergency, and that shared responsibility keeps it stocked." }
    ]
  },
  project: {
    title: "Our classroom first aid corner",
    brief: "Set up and label a first aid corner for your class.",
    steps: [
      "With your teacher, choose a place in the classroom that everyone can reach.",
      "List the items your kit should contain.",
      "Make a label card for each item.",
      "Write a card of five safety rules to pin above the corner.",
      "Choose two monitors to check the corner every week."
    ],
    criteria: ["sensible reachable place chosen", "correct items listed", "five safety rules written", "monitors chosen and duty explained"]
  },
  activities: [
    "Discuss the meaning and importance of first aid and safety rules",
    "Demonstrate treatment of cuts, bruises, nosebleeds and minor burns",
    "Role-play an emergency: call an adult, keep calm, do not move the victim",
    "Classroom and loco-motor games"
  ],
  materials: ["First aid kit", "Gloves", "Bandage", "Soap", "Water", "Charts"],
  assessment: ["Individual presentation", "Group presentation", "Class participation", "Practical demonstration"]
},

{
  grade: 2, period: "V", sem: "Two", icon: "💪",
  title: "Physical Fitness",
  subtitle: "Kinds of fitness activities, exercises, stunts and tumbling",
  outcomes: ["Learners are able to define physical fitness, discuss its importance, and demonstrate exercises and sport activities."],
  objectives: ["Define physical fitness", "Discuss the importance of fitness", "Identify kinds of fitness activities", "Demonstrate exercises and sport activities"],
  note: "There are different kinds of fitness activity: some build strength, some build endurance, some build flexibility, and some build speed. A fit body needs all four.",
  study:[
    /* ---- course text: Semester Two, Period V — Physical Fitness (guide pp. 22-23) ---- */
    {k:"h3", t:"Physical Fitness and its Measurement"},
    {k:"p", t:"**Physical fitness** is the ability of the body to work and play with energy. We can **measure** part of it: **measure the height** against a wall chart or metre rule, and **weigh** the body on a measurement scale. Height and weight written down at the start and end of term show how the body is growing."},
    {k:"rule"},
    {k:"h3", t:"Assessment of Physical Fitness (Boys and Girls)"},
    {k:"p", t:"The teacher assesses the fitness of the learners — **boys and girls alike** — with simple checks, and writes the results on the assessment forms. Everyone takes part; fitness is for every learner, not only for the best players."},
    {k:"rule"},
    {k:"h3", t:"Exercise — Bicycling"},
    {k:"p", t:"**Bicycling** — learners lie on the back on the floor with the legs extended upward and the buttocks balanced on the hands. On a whistle, learners flex and extend the legs alternately, like one riding a bicycle. Keep the pedalling smooth and steady until the whistle sounds again."},
    {k:"rule"},
    {k:"h3", t:"Games"},
    {k:"p", t:"**Mirror Mirror (classroom game).** Arrange the class into pairs with the players facing each other. Number the players one and two. On a whistle, player one begins to perform a movement — such as winking, moving a finger, or hopping on one foot. Player two must copy the actions of player one until the teacher calls **'CHANGE.'** When this occurs, the players exchange roles. When the teacher calls **'new mirror,'** everyone must find a new partner and the game continues."},
    {k:"p", t:"**Geometrical Shapes (loco-motor game)** — learners run, and on the call of a shape (circle, line, square) they group themselves to form that shape. **Bounce Netball (manipulative game)** — the ball is bounced and caught between players as it moves toward the goal; bounce passes only, no running with the ball."}
  ],
  focus: ["Definition of physical fitness", "Importance of physical fitness", "Kinds of fitness activities", "Exercises", "Games and stunts and tumbling"],
  terms: [
    { t: "physical fitness", d: "the ability of the body to work and play well without tiring quickly", x: "Regular exercise builds physical fitness." },
    { t: "strength activity", d: "an activity that builds muscle power", x: "Pull-ups are a strength activity." },
    { t: "endurance activity", d: "an activity that lets the body keep going for long", x: "Jogging is an endurance activity." },
    { t: "flexibility activity", d: "an activity that helps the body bend and stretch", x: "Toe touching is a flexibility activity." },
    { t: "speed", d: "how quickly the body can move", x: "Sprinting develops speed." },
    { t: "agility", d: "the ability to change direction quickly", x: "The shuttle run tests agility." },
    { t: "log roll", d: "a stunt rolling sideways with the body straight", x: "The log roll is done on a mat." },
    { t: "side roll", d: "a stunt rolling to the side from a tucked position", x: "Practise the side roll slowly." },
    { t: "tip over", d: "a stunt tipping the body over onto the hands", x: "The tip over needs strong arms." },
    { t: "routine", d: "a set of exercises done in the same order each time", x: "We follow the same warm-up routine." }
  ],
  facts: [
    { q: "Define physical fitness.", a: "The ability of the body to work and play well without tiring quickly." },
    { q: "Name the four main kinds of fitness activity.", a: "Strength, endurance, flexibility and speed or agility activities." },
    { q: "Give one example of an endurance activity.", a: "Jogging, skipping or a long run." },
    { q: "Give one example of a flexibility activity.", a: "The toe touch or any stretching exercise." },
    { q: "What is agility?", a: "The ability to change direction quickly." },
    { q: "Name two stunts you have learned.", a: "Any two: forward roll, log roll, side roll and tip over." },
    { q: "Why should a fitness routine be done regularly?", a: "Because fitness is built over time and lost when we stop." },
    { q: "Give two reasons why fitness is important.", a: "It keeps the body healthy and gives energy for work and play; it also improves mood and concentration." }
  ],
  tf: [
    { s: "A fit body needs strength, endurance, flexibility and speed.", a: "true", why: "All four make up total fitness." },
    { s: "Jogging is a flexibility activity.", a: "false", why: "Jogging builds endurance; stretching builds flexibility." },
    { s: "Fitness is lost if you stop exercising.", a: "true", why: "Fitness must be maintained by regular activity." },
    { s: "Agility means being able to change direction quickly.", a: "true", why: "That is the definition." },
    { s: "Stunts should be practised on rough ground.", a: "false", why: "Stunts must be done on a mat or soft surface." },
    { s: "Only athletes need to be physically fit.", a: "false", why: "Everyone needs fitness for health and daily life." }
  ],
  apply: [
    { q: "Design a four-part fitness routine, one activity for each kind of fitness.", a: "For example: push-ups (strength), jog in place (endurance), toe touch (flexibility) and shuttle run (speed and agility)." },
    { q: "You can run far but you cannot touch your toes. What should you add to your routine?", a: "Flexibility work — regular stretching such as the toes touch and trunk twist." },
    { q: "Why do we warm up before doing stunts?", a: "Warm muscles stretch and bend safely; cold muscles tear more easily." },
    { q: "Your friend says exercise is only for people who play sport. Answer him.", a: "Everyone needs fitness — it keeps the heart healthy, prevents sickness, and gives energy for school and work." },
    { q: "How would you make a fitness routine that a pupil with a hurt leg can join?", a: "Replace the running with seated arm and trunk exercises, so he takes part without using the injured leg." }
  ],
  sort: {
    title: "Sort the fitness activities",
    groups: [
      { name: "Strength and power", items: ["push-ups", "pull-ups", "tug-of-war", "climbing"] },
      { name: "Endurance and flexibility", items: ["jogging", "skipping", "toe touch", "trunk twist"] }
    ]
  },
  compare: {
    title: "Kinds of fitness activity",
    caption: "Complete the table with an example and a benefit for each kind.",
    items: [
      { p: "Strength activity", f: "For example push-ups; builds muscle power for lifting and carrying." },
      { p: "Endurance activity", f: "For example jogging; lets the body keep working for a long time." },
      { p: "Flexibility activity", f: "For example the toe touch; lets the body bend and reach without injury." },
      { p: "Speed and agility activity", f: "For example the shuttle run; helps the body move and turn quickly." }
    ]
  },
  casestudy: {
    title: "The five-minute morning",
    text: "Teacher Gbenyon had a problem. His Grade Two class was sleepy every morning and the first lesson was wasted. He did not have equipment or a field. So he started something small: five minutes of exercise, in the aisles between the desks, before the first lesson of every single day. Marching, arm circles, ten squat thrusts, and a stretch. Some teachers thought he was wasting learning time. At the end of the year the district tested all the Grade Two classes in reading. His class had the highest scores in the school. He could not prove the exercise had caused it. But he had lost far fewer minutes to sleepy, restless children than any other teacher on his corridor.",
    questions: [
      { q: "What problem was Teacher Gbenyon trying to solve?", a: "His class was sleepy every morning and the first lesson was being wasted." },
      { q: "What was his solution, and what did it need?", a: "Five minutes of exercise beside the desks every morning; it needed no equipment or field." },
      { q: "Why could he not prove exercise caused the high reading scores?", a: "Because many things affect scores; but he could show he lost fewer minutes to restless pupils." }
    ]
  },
  project: {
    title: "Class fitness routine",
    brief: "Create a five-minute fitness routine for your class.",
    steps: [
      "Choose four exercises, one for each kind of fitness.",
      "Decide how long or how many repetitions for each.",
      "Write the routine in order on a large card.",
      "Lead your group through the routine.",
      "Ask them which part was hardest and adjust your card."
    ],
    criteria: ["all four kinds of fitness covered", "times or repetitions given", "routine successfully led", "sensible adjustment made"]
  },
  activities: [
    "Discuss the meaning, importance and kinds of physical fitness activities",
    "Practical exercise session: strength, endurance and flexibility",
    "Stunts and tumbling: log roll, side roll and tip over on the mat",
    "Cooperative and manipulative games"
  ],
  materials: ["Mats", "Whistle", "Stopwatch", "Posters", "Balls"],
  assessment: ["Individual presentation", "Group presentation", "Class participation", "Practical demonstration"]
},

{
  grade: 2, period: "VI", sem: "Two", icon: "❤️",
  title: "Physical Fitness and the Heart Muscle",
  subtitle: "How exercise strengthens the heart",
  outcomes: ["Learners are able to explain the heart muscle, describe how exercise affects it, and demonstrate exercises and games."],
  objectives: ["Explain what the heart muscle is", "Describe how exercise strengthens the heart", "Demonstrate exercises that work the heart", "Take part in games"],
  note: "The heart is a muscle, and like every other muscle it grows stronger when it is worked. Exercise that makes the heart beat faster for several minutes is the exercise that makes it strong.",
  study:[
    /* ---- course text: Semester Two, Period VI — Physical Fitness and the Heart Muscle (guide pp. 24-25) ---- */
    {k:"h3", t:"Identifying the Heart Muscle"},
    {k:"p", t:"The **heart** is a strong **muscle** found in the chest, between the two lungs, a little to the left. It is about the size of your own fist. It works day and night without resting — even when you sleep, your heart keeps beating."},
    {k:"rule"},
    {k:"h3", t:"The Three Main Functions of the Heart Muscle"},
    {k:"num", items:["**It pumps blood** around the whole body, to every part — the brain, the arms, the legs.","**It carries oxygen and food** (in the blood) to feed the muscles and organs so they can work.","**It collects the wastes** (like carbon dioxide) from the body parts so they can be removed."]},
    {k:"p", t:"During exercise the muscles need more oxygen and food, so the heart pumps **faster and harder**. This is why our heartbeat rises when we run — and why regular exercise makes the heart muscle stronger."},
    {k:"rule"},
    {k:"h3", t:"Exercise — the Frog Dance"},
    {k:"p", t:"**Frog Dance** — learners squat with hands on hips. On a whistle, learners jump all around, from one distance to another, like frogs. Feel the heartbeat before and after the dance: the difference shows the heart answering the muscles' call."},
    {k:"rule"},
    {k:"h3", t:"Games"},
    {k:"p", t:"**My Ship Is Loaded (classroom game).** One child starts by saying *'my ship is loaded with cars'* (or any cargo he wishes). The player who receives the ball repeats what the first child said and adds a new item as he rolls the ball to another player — he would say, *'my ship is loaded with cars and hats.'* Each player in turn adds a new item. When a child fails to repeat all the cargo, the ball is given to the player on his right, who starts a new game."},
    {k:"p", t:"**Hot Spot (loco-motor game)** — players run and dodge to avoid the 'hot spot' marked on the ground. **Boundary Ball (manipulative game)** — teams roll or pass the ball across the opponents' boundary line to score, defending their own line as they attack."}
  ],
  focus: ["The heart muscle", "Pulse and heartbeat", "Exercise and the heart", "Games and activities"],
  terms: [
    { t: "heart", d: "the muscle that pumps blood around the body", x: "The heart never stops working." },
    { t: "heartbeat", d: "one pumping movement of the heart", x: "You can hear a heartbeat with your ear on the chest." },
    { t: "pulse", d: "the beat of the heart felt at the wrist or neck", x: "Count your pulse for one minute." },
    { t: "blood", d: "the red liquid the heart pumps around the body", x: "Blood carries food and oxygen." },
    { t: "oxygen", d: "the part of the air the body needs to live", x: "Blood carries oxygen from the lungs to the muscles." },
    { t: "circulation", d: "the movement of blood around the body", x: "Exercise improves circulation." },
    { t: "rate", d: "how many times something happens in a set time", x: "Her pulse rate was 90 beats a minute." },
    { t: "recover", d: "to return to normal after exercise", x: "A fit person's pulse recovers quickly." },
    { t: "aerobic exercise", d: "exercise that makes the heart and lungs work harder for several minutes", x: "Running is aerobic exercise." },
    { t: "rest", d: "the state of the body when it is not active", x: "At rest the heart beats more slowly." }
  ],
  facts: [
    { q: "What kind of organ is the heart?", a: "It is a muscle." },
    { q: "What is the work of the heart?", a: "To pump blood around the body." },
    { q: "What does blood carry to the muscles?", a: "Food and oxygen." },
    { q: "Where can you feel your pulse?", a: "At the wrist or at the neck." },
    { q: "What happens to the pulse during exercise?", a: "It becomes faster, because the heart works harder." },
    { q: "What is aerobic exercise?", a: "Exercise that makes the heart and lungs work harder for several minutes, such as running or skipping." },
    { q: "How does exercise help the heart?", a: "It strengthens the heart muscle so it pumps more blood with each beat." },
    { q: "Whose pulse returns to normal faster after exercise, a fit person or an unfit person?", a: "A fit person's pulse recovers faster." }
  ],
  tf: [
    { s: "The heart is a muscle.", a: "true", why: "It is a special muscle that pumps blood." },
    { s: "The heart stops working when we sleep.", a: "false", why: "The heart never stops; it beats more slowly at rest." },
    { s: "Exercise makes the heart muscle stronger.", a: "true", why: "Like other muscles, the heart strengthens with work." },
    { s: "The pulse gets slower while you are running.", a: "false", why: "It gets faster because the heart pumps harder." },
    { s: "Blood carries oxygen to the muscles.", a: "true", why: "Oxygen from the lungs travels in the blood." },
    { s: "A fit person's pulse takes longer to return to normal.", a: "false", why: "A fit person recovers more quickly." }
  ],
  apply: [
    { q: "Count your pulse sitting still, then after one minute of jogging in place. Explain the difference.", a: "It is faster after jogging because the muscles need more oxygen, so the heart pumps more often." },
    { q: "Name three activities that give the heart good exercise.", a: "Running, skipping and fast walking or football — anything that keeps the heart beating faster for several minutes." },
    { q: "Why is it not enough to exercise hard once a month?", a: "Because the heart strengthens through regular exercise; occasional effort gives little benefit and can be risky." },
    { q: "An old man in your town walks every morning. What is he doing for his heart?", a: "He is giving his heart regular aerobic exercise, which keeps it strong and improves circulation." },
    { q: "Two pupils run the same race. One recovers in one minute, the other in four. What does this show?", a: "That the first pupil is fitter — a fit heart recovers faster after effort." }
  ],
  sort: {
    title: "Heart words and heart activities",
    groups: [
      { name: "Words about the heart", items: ["pulse", "heartbeat", "blood", "circulation", "oxygen"] },
      { name: "Activities that work the heart", items: ["running", "skipping", "football", "fast walking"] }
    ]
  },
  compare: {
    title: "The body at rest and during exercise",
    caption: "Complete the table comparing the body at rest and during exercise.",
    items: [
      { p: "Heart rate", f: "Slow and steady at rest; fast during exercise." },
      { p: "Breathing", f: "Quiet and slow at rest; deep and quick during exercise." },
      { p: "Skin", f: "Cool and dry at rest; warm and sweating during exercise." },
      { p: "Muscles", f: "Relaxed at rest; working and needing more oxygen during exercise." }
    ]
  },
  casestudy: {
    title: "Counting hearts",
    text: "Teacher Kamara asked her Grade Two class to sit quietly and put two fingers on the side of their necks. \"Count every beat until I say stop,\" she said, and timed one minute. The numbers were between 80 and 100. Then she had them jog in place for two minutes and count again. Now the numbers were between 140 and 170, and the children were amazed at how their own bodies had changed in two minutes. She had them count again after three minutes of sitting. Most were back near normal. One boy, Sekou, who walked six kilometres to school every day, was back to his resting number after only one minute. \"That,\" said Teacher Kamara, \"is what a strong heart looks like. And Sekou did not buy it. He walked to it.\"",
    questions: [
      { q: "What happened to the pupils' pulse after two minutes of jogging?", a: "It rose from between 80 and 100 to between 140 and 170 beats a minute." },
      { q: "Why did Sekou's pulse return to normal fastest?", a: "Because he walked six kilometres to school every day, so his heart was strong and fit." },
      { q: "What did the teacher mean by saying Sekou did not buy his fitness?", a: "That fitness comes from regular activity, not from money or equipment." }
    ]
  },
  project: {
    title: "My heart diary",
    brief: "Record how your heart responds to exercise for one week.",
    steps: [
      "Each day, count your resting pulse for one minute and write it down.",
      "Do three minutes of active exercise.",
      "Count your pulse again immediately and write it down.",
      "Sit for two minutes, count again and write it down.",
      "At the end of the week, say whether your recovery got faster."
    ],
    criteria: ["seven days recorded", "three counts each day", "results clearly presented", "sensible conclusion about recovery"]
  },
  activities: [
    "Discuss the heart as a muscle and how exercise strengthens it",
    "Practical: count the pulse at rest, after exercise, and after recovery",
    "Aerobic exercise session: jog in place, jumping jacks and skipping",
    "Loco-motor and cooperative games"
  ],
  materials: ["Body system chart", "Posters", "Stopwatch", "Whistle", "Ropes"],
  assessment: ["Individual presentation", "Group presentation", "Class participation", "Practical demonstration"]
},

/* ============================ GRADE 3 ============================ */
{
  grade: 3, period: "I", sem: "One", icon: "🏃",
  title: "Introduction to Physical Education",
  subtitle: "Definition, history, importance and general health",
  outcomes: ["Learners are able to discuss physical education, explain general health, and participate in sporting activities."],
  objectives: ["Discuss Physical Education", "Explain general health", "Participate in sporting activities", "Demonstrate games and stunts"],
  note: "Health means more than not being sick. A healthy person is well in body, well in mind, and able to live and work with others. Physical education helps with all three.",
  study:[
    /* ---- course text: Semester One, Period I — Introduction to Physical Education (guide pp. 26-28) ---- */
    {k:"h3", t:"Definitions — Physical Education and Health"},
    {k:"p", t:"**Physical Education** is the study of the body in motion; it plays a crucial role in the development and physical well-being of learners. **Health** is the state of being well in body and mind — strong, clean and free from sickness."},
    {k:"p", t:"From its **history**, P.E. grew out of games, dances and military training into a school subject. Its **importance**: it keeps the body fit, teaches fair play and teamwork, sharpens the mind, and fills leisure time with healthy activity."},
    {k:"rule"},
    {k:"h3", t:"Personal Hygiene — Care of the Body"},
    {k:"p", t:"**Personal hygiene** means caring for our own body every day. State its meaning, list the parts of the body we care for — skin, hair, teeth, hands, feet and clothing — and explain how to care for each of them. Good personal hygiene can affect your health: it keeps germs away and makes you fit for games and school work."},
    {k:"rule"},
    {k:"h3", t:"Exercise — the Squat Thrust"},
    {k:"p", t:"**Squat Thrust** — learners squat with hands placed on the floor. On a whistle, each balances on his hands and stretches his body backward, then squats again, alternately. Strong shoulders and a quick spring are built by repeating this exercise."},
    {k:"rule"},
    {k:"h3", t:"Games"},
    {k:"p", t:"**Poorhouse (classroom game).** Learners get into a semicircle formation: partners sit on chairs placed in a horseshoe pattern, and two chairs representing the 'Poorhouse' are placed at the open end. Each couple has a number and must keep their hands joined throughout the game. The game begins with the couple in the poorhouse calling out two numbers, such as two and six. The couples whose numbers are called must change places; during the changeover, the poorhouse couple attempt to reach the vacated chairs first."},
    {k:"bul", items:["**King (loco-motor game)** — the 'king' calls movements and the players obey only the king's true commands","**Butterflies (manipulative game)** — players flutter, dodge and exchange places on the call, never being caught without a spot","**Clock (cooperative game)** — the whole class cooperates to form the numbers of a clock with their bodies","**Deck Tennis (individual and partner game)** — throw and catch a ring or 'deck' across a line; it must not touch the ground"]},
    {k:"rule"},
    {k:"h3", t:"Stunts and Tumbling — the Log Roll"},
    {k:"p", t:"**Log Roll** — lie on the back with arms extended over the head and the hands locked together. Keep the body in a straight line and roll to the left side for a minute and back to the original position. The first to reach the original spot wins a point."},
    {k:"p", t:"Then practise: **Side Roll**, **Forward Roll** and **Look Back Through the Legs**."}
  ],
  focus: ["Definition, history and importance of Physical Education", "General health", "Exercise", "Games: classroom, loco-motor and manipulative", "Stunts and tumbling"],
  terms: [
    { t: "physical education", d: "the study and practice of the body in movement, exercise and sport", x: "Physical education develops the whole person." },
    { t: "health", d: "being well in body, mind and social life", x: "Good health is more than not being sick." },
    { t: "physical health", d: "the wellness of the body", x: "Exercise and good food build physical health." },
    { t: "mental health", d: "the wellness of the mind and feelings", x: "Play and rest support mental health." },
    { t: "social health", d: "getting on well with other people", x: "Team games build social health." },
    { t: "hygiene", d: "the practice of keeping clean to stay healthy", x: "Hygiene prevents many diseases." },
    { t: "disease", d: "a sickness of the body", x: "Clean water helps prevent disease." },
    { t: "prevention", d: "stopping something bad before it happens", x: "Prevention is better than cure." },
    { t: "posture", d: "the way the body is held when sitting or standing", x: "Good posture prevents back pain." },
    { t: "discipline", d: "training yourself to do what is right", x: "Sport teaches discipline." }
  ],
  facts: [
    { q: "What is Physical Education?", a: "The study and practice of the body in movement, exercise and sport." },
    { q: "Give the three parts of general health.", a: "Physical health, mental health and social health." },
    { q: "Where did organised physical education and sport begin?", a: "In the ancient world, especially with the Greeks who held the first Olympic Games." },
    { q: "Give three reasons why P.E. is important.", a: "Any three: builds a healthy body, improves the mind, teaches teamwork and discipline, and prevents disease." },
    { q: "What is hygiene?", a: "The practice of keeping clean in order to stay healthy." },
    { q: "Why is prevention better than cure?", a: "Because it is easier, cheaper and safer to avoid sickness than to treat it." },
    { q: "How do team games help social health?", a: "They teach us to cooperate, share, take turns and respect others." },
    { q: "Name one exercise that improves posture.", a: "Standing tall against a wall, or trunk and back stretches." }
  ],
  tf: [
    { s: "Health means only that the body is not sick.", a: "false", why: "Health includes the body, the mind and social life." },
    { s: "Physical education teaches discipline as well as fitness.", a: "true", why: "Rules, training and teamwork build discipline." },
    { s: "Hygiene helps prevent disease.", a: "true", why: "Cleanliness removes germs before they cause sickness." },
    { s: "Prevention is more expensive than cure.", a: "false", why: "Preventing sickness is cheaper and safer than treating it." },
    { s: "Team games can improve social health.", a: "true", why: "They teach cooperation and respect for others." },
    { s: "Posture has nothing to do with health.", a: "false", why: "Poor posture causes back and neck pain over time." }
  ],
  apply: [
    { q: "A pupil is physically strong but always quarrels with teammates. Is he fully healthy? Explain.", a: "No. He has physical health but poor social health; health includes getting on well with others." },
    { q: "Name two ways your school could improve pupils' health without spending money.", a: "For example: a handwashing point with soap, and a daily few minutes of class exercise." },
    { q: "Why is P.E. important for someone who will never be an athlete?", a: "Because everyone needs a healthy body, energy for work, and the discipline and teamwork P.E. teaches." },
    { q: "You feel worried before a test. How can exercise help?", a: "Active exercise reduces stress and lifts the mood, helping the mind to settle and think clearly." },
    { q: "How would you explain 'prevention is better than cure' to a small child?", a: "It is easier to wash your hands than to lie sick in bed; stopping trouble is easier than fixing it." }
  ],
  sort: {
    title: "Three kinds of health",
    groups: [
      { name: "Physical health", items: ["strong muscles", "healthy heart", "good diet", "enough sleep"] },
      { name: "Mental and social health", items: ["feeling calm", "confidence", "making friends", "cooperating in a team"] }
    ]
  },
  compare: {
    title: "Aspects of health",
    caption: "Complete the table by explaining each aspect of general health.",
    items: [
      { p: "Physical health", f: "The body is strong, well fed, clean, rested and free from disease." },
      { p: "Mental health", f: "The mind is calm and able to learn, cope with problems and enjoy life." },
      { p: "Social health", f: "The person gets on well with family, friends and community." },
      { p: "The role of P.E.", f: "Exercise, games and sport build all three at the same time." }
    ]
  },
  casestudy: {
    title: "The timetable argument",
    text: "At a school in Bong County, the staff argued about the timetable. Examination results were poor, and the principal proposed cutting P.E. to add another period of mathematics. One young teacher asked to speak. She had kept a record for a term: on the two days the class had P.E., attendance was higher and there were far fewer fights at break. She also pointed out that three pupils had been absent for weeks with illnesses linked to poor hygiene, which the P.E. teacher taught. The staff voted to keep P.E., but moved it to the last period so that no lesson was lost to restless bodies. Two years later, the mathematics results were the best in the district.",
    questions: [
      { q: "What did the principal want to do, and why?", a: "Cut P.E. to add another mathematics period, because examination results were poor." },
      { q: "What evidence did the young teacher present?", a: "Higher attendance and fewer fights on P.E. days, and absences caused by hygiene-related illness that P.E. teaches about." },
      { q: "What compromise did the staff reach?", a: "They kept P.E. but moved it to the last period so no lesson was lost to restless pupils." }
    ]
  },
  project: {
    title: "A health survey of my class",
    brief: "Carry out a small survey on healthy habits.",
    steps: [
      "Write four questions, such as: Do you eat breakfast? Do you wash hands before eating?",
      "Ask ten classmates and record yes or no for each.",
      "Count the totals for each question.",
      "Draw a simple bar chart of your results.",
      "Write two sentences on what your class should improve."
    ],
    criteria: ["four sensible questions", "ten pupils surveyed", "correct totals and chart", "sensible recommendation"]
  },
  activities: [
    "Discuss the history and importance of physical education and health in general",
    "Group work on physical, mental and social health",
    "Practical: warm up, exercise, then classroom and loco-motor games",
    "Stunts and tumbling on the mat"
  ],
  materials: ["P.E. handbook", "Stopwatch", "Whistle", "Charts", "Mat"],
  assessment: ["Individual presentation", "Group presentation", "Class participation", "Practical demonstration"]
},

{
  grade: 3, period: "II", sem: "One", icon: "💪",
  title: "Physical Fitness",
  subtitle: "The meaning and importance of fitness, and kinds of fitness activities",
  outcomes: ["Learners are able to define physical fitness, discuss its importance, and demonstrate exercises and sport activities."],
  objectives: ["Define physical fitness", "Discuss the importance of fitness", "Identify kinds of fitness activities", "Demonstrate exercises and games"],
  note: "Fitness is built the same way a wall is built: one block at a time, regularly. Nobody becomes fit in a day, and nobody stays fit without working at it.",
  study:[
    /* ---- course text: Semester One, Period II — Physical Fitness (guide pp. 29) ---- */
    {k:"h3", t:"Physical Fitness and How We Measure It"},
    {k:"p", t:"**Physical fitness** is the ability of the body to do its daily work and play without too much fatigue. Part of fitness can be measured directly: **measure the height** with a metre rule, and **weigh the body** on the measurement scales. Recording both, term by term, shows how each learner is growing."},
    {k:"rule"},
    {k:"h3", t:"Developing Interest in Physical Fitness"},
    {k:"p", t:"The teacher assesses the physical fitness of the students — **boys and girls** — and every learner is helped to develop an **interest** in fitness activities: choosing a favourite game, setting a small goal, and watching his or her own records improve across the year."},
    {k:"rule"},
    {k:"h3", t:"Games"},
    {k:"p", t:"**Puzzled Words (classroom game).** Organize the class into groups of five to eight learners. The teacher gives each group a pile of letters that, after reshuffling, will form a word. On a whistle from the teacher, each group tries to put its word together. **The first team to assemble its word wins the game.**"},
    {k:"p", t:"**Loose Caboose (loco-motor game).** Players form 'trains' in pairs; one player — the loose caboose — has no train and tries to hook onto the back of any train, making its front player the new loose caboose."},
    {k:"p", t:"**California Kickball (manipulative game).** Played like kickball: the pitcher rolls the ball, the kicker kicks it and runs the bases, and the fielders make the out by throwing to the base before the runner arrives."}
  ],
  focus: ["Definition of physical fitness", "Importance of physical fitness", "Kinds of fitness activities", "Exercises", "Games and stunts"],
  terms: [
    { t: "physical fitness", d: "the ability of the body to carry out daily work and play without undue tiredness", x: "Physical fitness lets you finish the day with energy left." },
    { t: "muscular strength", d: "the greatest force a muscle can produce", x: "Muscular strength is tested by lifting." },
    { t: "muscular endurance", d: "how long a muscle can keep working", x: "Repeated sit-ups test muscular endurance." },
    { t: "cardiovascular endurance", d: "how long the heart and lungs can supply the working body", x: "Distance running builds cardiovascular endurance." },
    { t: "flexibility", d: "the range through which a joint can move", x: "Stretching improves flexibility." },
    { t: "body composition", d: "the amounts of muscle, bone and fat in the body", x: "Exercise and diet affect body composition." },
    { t: "repetition", d: "one complete movement of an exercise", x: "Do fifteen repetitions of the calf jump." },
    { t: "set", d: "a group of repetitions done together", x: "Three sets of ten repetitions." },
    { t: "training", d: "regular exercise planned to improve fitness", x: "Training must be regular to work." },
    { t: "rest day", d: "a day without hard exercise, to let the body recover", x: "A rest day helps the muscles rebuild." }
  ],
  facts: [
    { q: "Define physical fitness.", a: "The ability of the body to carry out daily work and play without undue tiredness." },
    { q: "Name four components of physical fitness.", a: "Muscular strength, muscular endurance, cardiovascular endurance and flexibility." },
    { q: "What is the difference between strength and endurance?", a: "Strength is how much force a muscle can produce; endurance is how long it can keep working." },
    { q: "What is a set in training?", a: "A group of repetitions done together." },
    { q: "Why is a rest day important?", a: "It lets the muscles recover and rebuild stronger." },
    { q: "Name two kinds of fitness activity and an example of each.", a: "Endurance — jogging; flexibility — the toes touch." },
    { q: "Why must training be regular?", a: "Because fitness is built gradually and is lost when training stops." },
    { q: "How does fitness help a pupil at school?", a: "It gives energy and concentration, and prevents frequent sickness and absence." }
  ],
  tf: [
    { s: "Muscular endurance is how long a muscle can keep working.", a: "true", why: "That is the definition." },
    { s: "A rest day wastes training time.", a: "false", why: "Rest lets muscles recover and grow stronger." },
    { s: "Cardiovascular endurance involves the heart and lungs.", a: "true", why: "They supply the working muscles with oxygen." },
    { s: "You can become fit in a single day of hard exercise.", a: "false", why: "Fitness is built gradually through regular training." },
    { s: "Flexibility is the range through which a joint can move.", a: "true", why: "That is the definition." },
    { s: "Fitness stays forever once you have it.", a: "false", why: "Fitness is lost if regular exercise stops." }
  ],
  apply: [
    { q: "A pupil can lift a heavy load once but cannot carry it far. Which component does he lack?", a: "Muscular endurance — he has strength but cannot sustain the work." },
    { q: "Plan a week of training with rest days for a Grade Three pupil.", a: "For example: exercise on Monday, Wednesday and Friday; light play Tuesday and Thursday; rest Saturday and Sunday." },
    { q: "Why does the same exercise get easier after a few weeks?", a: "Because the body adapts — the muscles and heart become stronger, so the same work costs less effort." },
    { q: "How could you make the exercise harder once it becomes easy?", a: "Add repetitions or sets, increase the time, or reduce the rest between sets." },
    { q: "Explain to a friend why he should not train hard while he is sick.", a: "The body is already fighting the illness; hard training weakens it further and delays recovery." }
  ],
  sort: {
    title: "Components of fitness",
    groups: [
      { name: "Tests of strength and endurance", items: ["push-ups", "sit-ups", "pull-ups", "long run"] },
      { name: "Tests of flexibility and agility", items: ["toe touch", "trunk twist", "shuttle run", "squat thrust"] }
    ]
  },
  compare: {
    title: "Components of physical fitness",
    caption: "Complete the table with the meaning and a test for each component.",
    items: [
      { p: "Muscular strength", f: "Greatest force a muscle can produce; tested by lifting or a maximum pull." },
      { p: "Muscular endurance", f: "How long a muscle can keep working; tested by repeated sit-ups or push-ups." },
      { p: "Cardiovascular endurance", f: "How long the heart and lungs can supply the body; tested by a timed run." },
      { p: "Flexibility", f: "How far a joint can move; tested by the toes touch or trunk twist." }
    ]
  },
  casestudy: {
    title: "The boy who trained too hard",
    text: "Emmanuel decided he wanted to be the fittest boy in Grade Three. He started running every morning and every evening, and did a hundred sit-ups a day, and refused to take any rest days at all. For two weeks his results improved fast. In the third week they stopped improving. In the fourth week they got worse, and he was tired all day in class and his knees hurt. The P.E. teacher looked at his diary and told him to take three days off completely, then train only every second day. Emmanuel thought this was nonsense — but he tried it. Within two weeks his results were better than they had ever been.",
    questions: [
      { q: "What was Emmanuel's training mistake?", a: "He trained twice a day with no rest days at all." },
      { q: "What signs showed that something was wrong?", a: "His results stopped improving and then got worse, he was tired all day, and his knees hurt." },
      { q: "Why did training less make him fitter?", a: "Because the body grows stronger during rest and recovery, not only during exercise." }
    ]
  },
  project: {
    title: "My fitness training plan",
    brief: "Write and follow a two-week training plan.",
    steps: [
      "Test yourself in four fitness components and record the results.",
      "Write a plan for two weeks, marking training days and rest days.",
      "Choose one exercise for each component.",
      "Follow the plan and tick off each day.",
      "Re-test yourself and compare your results."
    ],
    criteria: ["four components tested", "plan includes rest days", "plan actually followed and ticked", "results compared honestly"]
  },
  activities: [
    "Discuss the definition, importance and kinds of physical fitness activities",
    "Practical: exercises for strength, endurance and flexibility",
    "Games: cooperative, loco-motor and manipulative games",
    "Stunts and tumbling on the mat"
  ],
  materials: ["Body system chart", "Posters", "Pencils", "Stopwatch", "Mat"],
  assessment: ["Individual presentation", "Group presentation", "Class participation", "Practical demonstration"]
},

{
  grade: 3, period: "III", sem: "One", icon: "📋",
  title: "Physical Fitness Screening",
  subtitle: "Types of screening, the trunk twist and the bicycling exercise",
  outcomes: ["Learners are able to discuss physical screening, demonstrate various types of screening, and take part in games."],
  objectives: ["Discuss physical screening", "Demonstrate various types of screening", "Record results correctly", "Take part in exercises and games"],
  note: "A screening result is only useful if the test is done the same way every time. Same method, same instrument, same effort — then the numbers can be trusted.",
  study:[
    /* ---- course text: Semester One, Period III — Physical Fitness Screening (guide pp. 30-31) ---- */
    {k:"h3", t:"The Importance of Body Screening"},
    {k:"p", t:"**Physical fitness screening** checks how fit the body is — its strength, endurance and flexibility. The **importance of body screening** is that it gives every learner a starting point: before a season of training, the teacher screens the class, records the results, and uses them to plan exercises that no one is left out of and no one is injured by."},
    {k:"p", t:"Discuss the history and importance of physical fitness screening, then demonstrate the screening types, the exercises and the games."},
    {k:"rule"},
    {k:"h3", t:"Exercise — Sit-Ups"},
    {k:"p", t:"**Sit-Ups** — learners sit with legs folded and hands locked behind the head. On a whistle, each lies on his back and comes back to the same position, alternately. Count the repetitions in a set time and record them — this is itself a screening of stomach-muscle strength."},
    {k:"rule"},
    {k:"h3", t:"Games"},
    {k:"p", t:"**Beatball Softball (softball game).** Play according to regular softball rules. Learners get the ball and throw it to the first baseman, who must touch the base with the ball in his hand, then throw from first to second, second to third, and third to home. **If the ball gets home ahead of the runner, he is out; if the runner beats the ball home, he scores a run for his team.** After three outs, the teams exchange places."},
    {k:"bul", items:["**Bound Ball (volleyball game)** — pass the volleyball over the line; a team that lets the ball be grounded loses the point","**Call Ball (manipulative game)** — the thrower tosses the ball up and calls a player's name; that player must catch it before it bounces away and become the next thrower","**Alley Soccer (soccer game)** — soccer played in a narrow alley, which teaches close dribbling and quick passing"]}
  ],
  focus: ["Definition of physical fitness screening", "Body screening", "Exercises: trunk twist and bicycling", "Games and stunts"],
  terms: [
    { t: "screening", d: "checking the body to find its level of fitness and health", x: "The screening takes place twice a year." },
    { t: "trunk twist", d: "an exercise turning the upper body from side to side", x: "The trunk twist loosens the waist." },
    { t: "bicycling", d: "an exercise lying on the back and moving the legs as if cycling", x: "Bicycling strengthens the stomach and legs." },
    { t: "frog dance", d: "an exercise squatting and springing like a frog", x: "The frog dance builds leg power." },
    { t: "accuracy", d: "being exactly correct", x: "Accuracy matters when recording results." },
    { t: "compare", d: "to look at two things to see how they differ", x: "Compare this term's results with last term's." },
    { t: "baseline", d: "the first result, used for later comparison", x: "September's test is our baseline." },
    { t: "target", d: "the result you are aiming for", x: "My target is twenty sit-ups." },
    { t: "chart", d: "a drawing showing information clearly", x: "The chart shows the class results." },
    { t: "evaluate", d: "to judge how good or successful something is", x: "We evaluate the results at the end of term." }
  ],
  facts: [
    { q: "What is physical fitness screening?", a: "Checking the body to find its level of fitness and health." },
    { q: "Why must the same method be used each time?", a: "So results can be fairly compared and any change is real." },
    { q: "Describe the trunk twist.", a: "Stand with feet apart and hands on the hips or held out, and turn the upper body from side to side." },
    { q: "Describe the bicycling exercise.", a: "Lie on the back, raise the legs, and move them in circles as if riding a bicycle." },
    { q: "What is a baseline result?", a: "The first result taken, used for comparing later results." },
    { q: "What is a target?", a: "The result you are aiming to reach." },
    { q: "Name two body measurements taken in screening.", a: "Height and weight." },
    { q: "Why is accuracy important in recording?", a: "Because wrong figures give a false picture of a pupil's fitness." }
  ],
  tf: [
    { s: "Results should be recorded accurately.", a: "true", why: "Wrong figures give a false picture." },
    { s: "You can compare results fairly even if the method changes.", a: "false", why: "The method must stay the same for a fair comparison." },
    { s: "The trunk twist works the waist and upper body.", a: "true", why: "It turns the trunk from side to side." },
    { s: "Bicycling is done standing up.", a: "false", why: "It is done lying on the back with the legs raised." },
    { s: "A baseline is the first result used for later comparison.", a: "true", why: "That is the definition." },
    { s: "It is helpful to set a target after a screening.", a: "true", why: "A target gives something clear to work towards." }
  ],
  apply: [
    { q: "Your class was tested on grass in September and on concrete in March. Is the comparison fair?", a: "No — the surface changes the result, so the conditions should be kept the same." },
    { q: "Set yourself a realistic target for sit-ups if you can now do 12.", a: "For example fifteen or sixteen in a month — a small increase I can reach by regular practice." },
    { q: "How would you record class results so nobody is embarrassed?", a: "Give each pupil a private card with only their own results, and share only class totals or improvements." },
    { q: "A pupil deliberately writes a bigger number than he achieved. What is wrong with this?", a: "It is dishonest, and it hides the truth about his fitness so he cannot improve properly." },
    { q: "Why should a screening be done at the beginning and the end of the term?", a: "So the two results show whether the term's work and training have improved fitness." }
  ],
  sort: {
    title: "Screening steps in order",
    groups: [
      { name: "Before the test", items: ["prepare instruments", "warm up", "explain the method", "set out the assessment forms"] },
      { name: "After the test", items: ["record results", "cool down", "compare with baseline", "set a new target"] }
    ]
  },
  compare: {
    title: "Screening exercises",
    caption: "Complete the table with the method and purpose of each exercise.",
    items: [
      { p: "Trunk twist", f: "Turn the upper body side to side; shows flexibility of the waist and back." },
      { p: "Bicycling", f: "Lie on the back and circle the legs; builds and tests stomach and leg endurance." },
      { p: "Frog dance", f: "Squat and spring upward repeatedly; tests leg power." },
      { p: "Toe touch", f: "Bend forward to touch the toes with straight legs; tests flexibility." }
    ]
  },
  casestudy: {
    title: "Two stopwatches",
    text: "Grade Three was screened by two teachers working at the same time to save time. Teacher Sumo used the school stopwatch. Teacher Nagbe used the timer on a borrowed phone and, because he was busy, he started the pupils running before he pressed start. At the end of the day, the pupils tested by Teacher Nagbe all had times that looked several seconds faster. One girl in his group was recorded as faster than the school's best runner, who had been tested by Teacher Sumo. The children knew it could not be right. The head teacher had the whole class re-tested the next morning, with one watch, one starter, and one line. It took longer. But the results were worth keeping.",
    questions: [
      { q: "What went wrong in Teacher Nagbe's testing?", a: "He started the pupils running before pressing start, so all his times were recorded as too fast." },
      { q: "How did the pupils know the results were wrong?", a: "A girl in his group was recorded as faster than the school's best runner." },
      { q: "What did the head teacher do, and why was it worth the extra time?", a: "He re-tested the whole class with one watch, one starter and one line, so the results were fair and could be trusted." }
    ]
  },
  project: {
    title: "Class screening chart",
    brief: "Help run and record a class screening.",
    steps: [
      "Agree with your group on the exact method for one test.",
      "Write the method down in five clear steps.",
      "Test five classmates using exactly that method.",
      "Record the results neatly on a chart.",
      "Report to the class on any difficulty in keeping the method the same."
    ],
    criteria: ["method written in five clear steps", "five pupils tested", "results accurately recorded", "honest report on difficulties"]
  },
  activities: [
    "Discuss the importance of physical fitness screening and the various types",
    "Trunk Twist and Bicycling exercises, timed and recorded",
    "Frog Dance and Toe Touch exercises",
    "Classroom, loco-motor and manipulative games"
  ],
  materials: ["Measurement scales", "Meter rule", "Assessment forms", "Stopwatch", "Mat"],
  assessment: ["Individual presentation", "Group presentation", "Class participation", "Practical demonstration"]
},

{
  grade: 3, period: "IV", sem: "Two", icon: "🎗️",
  title: "HIV and AIDS / Exercises",
  subtitle: "Meaning, spread and prevention of HIV, with balance activities",
  outcomes: ["Learners are able to state the meaning of HIV and AIDS, identify ways HIV is spread and not spread, explain how HIV attacks the immune system and its effects on the family, and demonstrate balance activities and minor games."],
  objectives: ["State the meaning of the acronyms HIV and AIDS", "Identify ways in which HIV is spread", "Identify ways in which HIV is not spread", "Explain how HIV attacks the immune system", "Explain the effects of HIV and AIDS on the family", "Demonstrate balance activities and minor games"],
  note: "People living with HIV are our neighbours, classmates and family. They should be treated with kindness and respect. You cannot get HIV from sharing a desk, a plate, a hug or a game.",
  study:[
    /* ---- course text: Semester Two, Period IV — HIV and AIDS / Exercises (guide pp. 32-33) ---- */
    {k:"h3", t:"The Meaning of HIV and AIDS"},
    {k:"p", t:"**HIV** stands for **Human Immunodeficiency Virus** — the virus that attacks the body's defence system. **AIDS** stands for **Acquired Immune Deficiency Syndrome** — the group of illnesses that come when the body's defences have been destroyed by HIV."},
    {k:"rule"},
    {k:"h3", t:"How HIV Attacks the Immune System"},
    {k:"p", t:"The **immune system** is the army of the body — white blood cells that fight germs. HIV enters these soldier cells, multiplies inside them and destroys them. With fewer and fewer defenders, the body can no longer fight ordinary sicknesses, and the person becomes ill with AIDS."},
    {k:"rule"},
    {k:"h3", t:"How HIV is Spread — and How It is NOT Spread"},
    {k:"bul", items:["**Spread**: through unprotected sexual contact with an infected person; through infected blood (transfusions, sharing of sharp instruments or needles); and from an infected mother to her baby during pregnancy, birth or breastfeeding","**NOT spread**: by hugging, shaking hands, sharing food or cups, playing together, mosquito bites, or using the same toilet or classroom"]},
    {k:"rule"},
    {k:"h3", t:"Prevention and the Effects on the Family"},
    {k:"p", t:"**Prevention**: abstain from sexual activity, never share needles, razor blades or other sharp instruments, and make sure blood is screened before transfusion. **Effects on the family**: sickness and death of parents and breadwinners, children left as orphans, and money spent on treatment instead of food and school fees. Persons with HIV need our love and care, not rejection."},
    {k:"rule"},
    {k:"h3", t:"Balance Activities"},
    {k:"p", t:"**Spine Hand Stand (Rear Support)** — the learner starts in a sitting position and gradually raises the seat off the mat until the body forms a straight line; he remains in that position for the time required by the teacher."},
    {k:"p", t:"**The Bridge** — the learner sits on the floor; on a signal he lies on his back and attempts to lift the body, balancing on the palms of the hands and the soles of the feet until the body is in an arch, like a bridge. He remains in that position for the time required by the teacher."},
    {k:"p", t:"Stunts and tumbling and games for the period: **Double Wheelbarrow**, **Without Hands**, and **Two Square** — the square court game in which the ball must bounce once in another player's square."}
  ],
  focus: ["Definition of HIV and AIDS", "Causes and effects", "Preventive methods", "Effects on the family", "Balance activities and pyramid building", "Stunts and tumbling; loco-motor and manipulative games"],
  terms: [
    { t: "HIV", d: "Human Immunodeficiency Virus, the virus that attacks the body's defence system", x: "HIV weakens the immune system." },
    { t: "AIDS", d: "Acquired Immune Deficiency Syndrome, the illness that can develop from HIV", x: "AIDS develops when HIV has badly weakened the body." },
    { t: "virus", d: "a very tiny germ that causes disease", x: "HIV is a virus." },
    { t: "immune system", d: "the body's defence against disease", x: "The immune system fights germs." },
    { t: "infection", d: "when a germ enters the body and causes disease", x: "The immune system fights infection." },
    { t: "prevention", d: "stopping something from happening", x: "Prevention is the best protection against HIV." },
    { t: "stigma", d: "unfair shame or blame placed on a person", x: "Stigma hurts people living with HIV." },
    { t: "counselling", d: "talking with a trained person for advice and support", x: "Counselling helps families cope." },
    { t: "testing", d: "a medical check to find out if a person has an infection", x: "Testing is free at the clinic." },
    { t: "balance activity", d: "an exercise that trains the body to stay steady", x: "The bridge is a balance activity." }
  ],
  facts: [
    { q: "What does HIV stand for?", a: "Human Immunodeficiency Virus." },
    { q: "What does AIDS stand for?", a: "Acquired Immune Deficiency Syndrome." },
    { q: "What part of the body does HIV attack?", a: "The immune system, the body's defence against disease." },
    { q: "Name two ways HIV is spread.", a: "Through infected blood, and from an infected mother to her baby; also through unsafe sharp instruments and needles." },
    { q: "Name three ways HIV is NOT spread.", a: "Hugging, sharing food or plates, and playing together; also mosquito bites and sharing a desk." },
    { q: "What is the best protection for a child against HIV?", a: "Avoiding contact with other people's blood and unsterilised sharp objects, and abstinence." },
    { q: "Name two effects of HIV and AIDS on a family.", a: "Loss of income and care when a parent is ill, and children may have to leave school; there is also stress and stigma." },
    { q: "How should we treat a person living with HIV?", a: "With kindness, respect and support — never with stigma." }
  ],
  tf: [
    { s: "HIV attacks the immune system.", a: "true", why: "It weakens the body's defence against disease." },
    { s: "You can get HIV from hugging a friend.", a: "false", why: "HIV is not spread by hugging, sharing food or ordinary contact." },
    { s: "AIDS stands for Acquired Immune Deficiency Syndrome.", a: "true", why: "That is the correct meaning." },
    { s: "A mosquito bite can give you HIV.", a: "false", why: "HIV is not spread by mosquitoes." },
    { s: "People living with HIV should be avoided.", a: "false", why: "They should be treated with kindness and respect; ordinary contact is safe." },
    { s: "Sharing unsterilised sharp instruments can spread HIV.", a: "true", why: "Infected blood on a sharp object can pass the virus." }
  ],
  apply: [
    { q: "A classmate's mother is living with HIV and other pupils avoid him. What will you do?", a: "Explain that HIV is not spread by ordinary contact, continue to be his friend, and tell a teacher if the teasing continues." },
    { q: "Why is it dangerous to share a razor blade or needle?", a: "Because infected blood can remain on it and pass HIV or other infections to the next person." },
    { q: "How does HIV in a family affect a child's schooling?", a: "The child may have to work or care for a sick parent, may lose school fees, and may face stigma — support is needed." },
    { q: "A friend says he cannot eat from a plate used by someone with HIV. Correct him.", a: "HIV is not spread through food, plates or saliva; refusing is based on fear, not fact, and it hurts people." },
    { q: "Why is counselling important for a family affected by HIV?", a: "It gives correct information, emotional support, and help in planning care and treatment." }
  ],
  sort: {
    title: "How HIV is spread and not spread",
    groups: [
      { name: "Ways HIV can be spread", items: ["contact with infected blood", "unsterilised needles", "shared razor blades", "from mother to baby"] },
      { name: "Ways HIV is NOT spread", items: ["hugging", "sharing food", "mosquito bites", "playing together", "sharing a desk"] }
    ]
  },
  compare: {
    title: "HIV and AIDS",
    caption: "Complete the table comparing HIV and AIDS.",
    items: [
      { p: "HIV", f: "The virus itself, which attacks and weakens the immune system." },
      { p: "AIDS", f: "The condition that can develop later, when the immune system has been badly damaged." },
      { p: "Testing", f: "A medical check that tells a person whether they have the virus." },
      { p: "Treatment", f: "Medicine from the clinic that keeps the virus under control so a person can live and work well." }
    ]
  },
  casestudy: {
    title: "The empty desk beside Musa",
    text: "When word went round the village that Musa's mother was on HIV treatment, the children in his Grade Three class began to move away from his desk. Within a week he was sitting alone. He stopped putting up his hand. His teacher noticed and did not scold anyone. Instead she asked the class a question: \"Name every way you think HIV can pass from one person to another.\" The children listed sharing food, mosquitoes, touching, breathing the same air. She went through the list and crossed out every single wrong answer, and the health worker from the clinic came the following week and did the same. On the Friday, three girls carried their benches back to Musa's desk. He is now the class monitor.",
    questions: [
      { q: "Why did the children move away from Musa?", a: "Because they heard his mother was on HIV treatment and wrongly believed they could catch HIV from him." },
      { q: "How did the teacher deal with the problem?", a: "She asked the class to list how they thought HIV spreads, corrected every wrong belief, and brought in a health worker." },
      { q: "What does this story show about stigma?", a: "That stigma grows from wrong information, and correct knowledge is the way to end it." }
    ]
  },
  project: {
    title: "A true and false HIV poster",
    brief: "Make a poster that corrects wrong ideas about HIV.",
    steps: [
      "Divide a large sheet into two columns: TRUE and NOT TRUE.",
      "In the NOT TRUE column, write four wrong beliefs people hold.",
      "In the TRUE column, write the correct fact for each one.",
      "At the bottom write: TREAT EVERY PERSON WITH RESPECT.",
      "Display the poster and explain it to another class."
    ],
    criteria: ["four wrong beliefs correctly identified", "four correct facts given", "respectful message included", "poster explained to others"]
  },
  activities: [
    "Discuss the meaning of HIV and AIDS, how it spreads, how it does not spread, prevention, and its effects on the family",
    "Balance activities and pyramid building in groups",
    "Spine Hand Stand (rear support) and The Bridge on the mat",
    "Double wheelbarrow, loco-motor and manipulative games"
  ],
  materials: ["Chalkboard", "Life education resource books", "Charts", "Mat", "Whistle"],
  assessment: ["Individual presentation", "Group presentation", "Class participation", "Practical demonstration"]
},

{
  grade: 3, period: "V", sem: "Two", icon: "🛡️",
  title: "Sexually Transmitted Infections",
  subtitle: "Meaning, effects and prevention, with abstinence as the best protection",
  outcomes: ["Learners are able to state the meaning of the acronym STIs, explain the effects of sexually transmitted infections on the body, and state that abstinence is the best method of preventing infections."],
  objectives: ["State the meaning of the acronym STIs", "Explain the effects of sexually transmitted infections on the body", "State that abstinence is the best method of preventing these infections"],
  note: "This topic is about protecting your health. The clear message for pupils of this age is abstinence — waiting — which protects the body completely. Always take your questions to a parent, guardian, teacher or health worker.",
  study:[
    /* ---- course text: Semester Two, Period V — Sexually Transmitted Infections (guide pp. 34-35) ---- */
    {k:"h3", t:"The Meaning of STIs"},
    {k:"p", t:"**STI** stands for **Sexually Transmitted Infection** — infections passed from one person to another mainly through sexual contact. Common examples are **gonorrhoea**, **syphilis** and **chlamydia**; HIV (studied in Period IV) is also sexually transmitted."},
    {k:"rule"},
    {k:"h3", t:"Causes and Effects"},
    {k:"p", t:"Many STIs are **infections caused by bacteria** — and because bacteria cause them, most of them **can be treated and cured** at the hospital or clinic if the person goes early. The **effects** on the body, when an STI is not treated: pain, sores, discharge, damage to the reproductive organs, infertility (no children later), and greater danger of catching HIV."},
    {k:"rule"},
    {k:"h3", t:"Treatment and Prevention"},
    {k:"p", t:"**Treatment**: any sign — sore, rash, pain or unusual discharge — must be reported at once to a health worker; both partners must be treated, and medicines must be finished completely."},
    {k:"p", t:"**Prevention**: **abstinence** — not having sex — is the **best method of preventing** these infections, especially for young people. Faithfulness to one uninfected partner and correct medical advice protect adults who are married."},
    {k:"rule"},
    {k:"h3", t:"Exercise — Group Jump Rope"},
    {k:"p", t:"**Group Jump Rope** — two learners hold the rope at the ends and begin to turn it. A selected number of learners attempt to enter in a group. Anyone who stops the rope takes one end of the rope to allow another learner to join the others."},
    {k:"rule"},
    {k:"h3", t:"Stunts and Tumbling — the Eskimo Roll"},
    {k:"p", t:"**Eskimo Roll** — one partner lies on his back and the other partner stands, facing forward and near his partner's head. The partner on the floor grasps his partner's ankles and raises his own legs in order to allow his partner to grasp each leg above the ankles. The top partner leans forward, places the (other) partner's feet on the floor, and then performs a forward roll. The lower partner follows, and both continue performing a series of forward rolls."},
    {k:"p", t:"Also practise the **Forward Drop** and the **Forearm Stand**."}
  ],
  focus: ["Definition and meaning of STIs", "Causes and effects", "Infections caused by bacteria", "Treatment", "Preventive method: abstinence"],
  terms: [
    { t: "STI", d: "Sexually Transmitted Infection, an infection passed through sexual contact", x: "STIs can be prevented." },
    { t: "infection", d: "when a germ enters the body and causes disease", x: "An untreated infection can spread." },
    { t: "bacteria", d: "tiny living germs, some of which cause disease", x: "Some STIs are caused by bacteria." },
    { t: "abstinence", d: "choosing not to have sexual contact", x: "Abstinence is the surest protection." },
    { t: "treatment", d: "medical care given to cure or control a disease", x: "Treatment must come from a clinic." },
    { t: "clinic", d: "a place where trained health workers treat people", x: "Go to the clinic for correct treatment." },
    { t: "health worker", d: "a trained person who cares for people's health", x: "A health worker gives correct advice." },
    { t: "symptom", d: "a sign in the body that shows something is wrong", x: "Pain can be a symptom of infection." },
    { t: "protection", d: "keeping yourself safe from harm", x: "Knowledge is a form of protection." },
    { t: "self-respect", d: "valuing yourself and your own body", x: "Self-respect helps you make good choices." }
  ],
  facts: [
    { q: "What does STI stand for?", a: "Sexually Transmitted Infection." },
    { q: "What causes some STIs?", a: "Bacteria; others are caused by viruses." },
    { q: "What is the best method of preventing STIs for pupils of your age?", a: "Abstinence — choosing to wait and avoid sexual contact." },
    { q: "Name two effects of untreated infections on the body.", a: "Pain and long-term illness, and damage that can make a person unable to have children later." },
    { q: "Where should a person go for treatment?", a: "To a clinic or hospital, to a trained health worker." },
    { q: "Why should a person never use medicine bought on the street?", a: "It may be wrong, fake or the wrong dose, and it can make the illness worse." },
    { q: "What is a symptom?", a: "A sign in the body that shows something is wrong." },
    { q: "Who should you talk to if you have questions about your body?", a: "A parent, guardian, teacher, nurse or other trusted adult." }
  ],
  tf: [
    { s: "STI stands for Sexually Transmitted Infection.", a: "true", why: "That is the correct meaning." },
    { s: "Abstinence is the surest way to prevent STIs.", a: "true", why: "Avoiding sexual contact prevents transmission completely." },
    { s: "Infections always cure themselves without treatment.", a: "false", why: "Untreated infections can spread and cause serious harm." },
    { s: "It is safe to buy medicine from a street seller.", a: "false", why: "Such medicine may be fake or wrong; go to a clinic." },
    { s: "Some STIs are caused by bacteria.", a: "true", why: "Bacteria cause several sexually transmitted infections." },
    { s: "You should be ashamed to ask a health worker a health question.", a: "false", why: "Health workers are there to give correct information without judgement." }
  ],
  apply: [
    { q: "Why is going to a clinic better than asking a friend for advice about a health problem?", a: "Because health workers are trained and give correct, private advice, while a friend may repeat rumours." },
    { q: "A friend is pressured to do something he is not ready for. What can he say?", a: "He can say no clearly, leave the situation, and tell a trusted adult; a true friend respects his decision." },
    { q: "How does knowing the facts protect your health?", a: "Correct knowledge lets me make safe choices and not be misled by rumours or pressure." },
    { q: "Why is early treatment of any infection important?", a: "Because infections get worse and can spread and cause permanent damage if left untreated." },
    { q: "What does self-respect have to do with health choices?", a: "Valuing my own body and future helps me refuse pressure and choose what keeps me safe." }
  ],
  sort: {
    title: "Helpful and unhelpful responses",
    groups: [
      { name: "Helpful and safe", items: ["going to a clinic", "asking a trusted adult", "choosing abstinence", "learning the facts"] },
      { name: "Unhelpful and unsafe", items: ["believing rumours", "street medicine", "keeping a health problem secret", "giving in to pressure"] }
    ]
  },
  compare: {
    title: "Facts about STIs",
    caption: "Complete the table with the correct information.",
    items: [
      { p: "Meaning", f: "STI means Sexually Transmitted Infection." },
      { p: "Causes", f: "Germs such as bacteria and viruses passed by sexual contact." },
      { p: "Effects", f: "Pain, illness, and lasting damage to health if untreated." },
      { p: "Best prevention for pupils", f: "Abstinence — choosing to wait." },
      { p: "Where to get help", f: "A clinic or hospital, from a trained health worker." }
    ]
  },
  casestudy: {
    title: "The question in the box",
    text: "Teacher Doe knew her Grade Three pupils had questions they were too shy to ask aloud, and that they were getting answers from older children in the market that were simply wrong. So she put a small closed box at the back of the room. Any pupil could write a question, without a name, and drop it in. Every Friday she opened the box and answered the questions that were suitable for the class, and for anything beyond her she invited the nurse from the health post. In the first week there were nineteen questions. Eleven of them were based on something a pupil had been told that was false. By the end of the term the box had far fewer questions in it, and the ones that came were much better ones.",
    questions: [
      { q: "Why did Teacher Doe put a box at the back of the room?", a: "Because pupils were too shy to ask aloud and were getting wrong answers from older children." },
      { q: "What did she do with questions she could not answer?", a: "She invited the nurse from the health post to answer them." },
      { q: "What does the fall in the number of questions suggest?", a: "That the pupils' wrong beliefs had been corrected and they now had accurate information." }
    ]
  },
  project: {
    title: "Who can I ask?",
    brief: "Make a card listing the trusted people and places you can go to for health information.",
    steps: [
      "Write the title: WHO CAN I ASK?",
      "List four trusted adults you could go to with a health question.",
      "List two places in your community where trained help is available.",
      "Write one sentence on why rumours are dangerous.",
      "Keep the card in your exercise book."
    ],
    criteria: ["four trusted adults named", "two places of help named", "clear statement on rumours", "card completed neatly"]
  },
  activities: [
    "Guided discussion on the meaning of STIs, their causes, effects and prevention",
    "Group work: identifying trusted sources of health information",
    "Role-play: refusing pressure politely and firmly",
    "Physical activity session: exercises and cooperative games"
  ],
  materials: ["Chalkboard", "Life education resource books", "Charts", "Posters"],
  assessment: ["Individual presentation", "Group presentation", "Class participation", "Written exercise"]
},

{
  grade: 3, period: "VI", sem: "Two", icon: "🧍",
  title: "The Human Body",
  subtitle: "Body parts, body types and motor skills",
  outcomes: ["Learners are able to label parts of the body, describe body types, explain the roles of the body parts, and demonstrate motor skills."],
  objectives: ["Label different parts of the body", "Describe the three body types", "Explain the role of the body parts", "Demonstrate motor skills through sport"],
  note: "People are built differently. Scientists describe three general body types — the slim ectomorph, the muscular mesomorph and the heavier endomorph. Most people are a mixture. No type is better than another.",
  study:[
    /* ---- course text: Semester Two, Period VI — The Human Body; Nutrition and Diet (guide pp. 36-37) ---- */
    {k:"h3", t:"Body Parts, Body Types and Motor Skills"},
    {k:"p", t:"**Label** the different parts of the body and state the **role** of each: legs for running, arms for throwing, eyes for tracking the ball. Remember the **body types** — ectomorph, endomorph and mesomorph — and outline the **types of motor skills**: loco-motor (travelling), manipulative (handling objects) and stability (balancing)."},
    {k:"rule"},
    {k:"h3", t:"Nutrition, Diet and Nutrients"},
    {k:"p", t:"**Nutrition** means eating the food the body needs to grow, develop and work properly. **Diet** is the food and drink that we take into the body every day. **Nutrients** are the rich substances found in foods that your body needs most."},
    {k:"p", t:"**Water** is needed by the body for digestion and to remove wastes. **Food** is needed because it repairs body cells, gives energy, and protects against diseases. A child who eats only one kind of food suffers **deficiency** — the shortage of a needed nutrient."},
    {k:"rule"},
    {k:"h3", t:"The Three Groups of Food"},
    {k:"table", head:["Food group","What it does for the body","Examples"], rows:[
      ["Body-building foods","Build and repair the muscles and other body cells","Meat, fish, eggs"],
      ["Energy-giving foods","Give the body fuel to work, run and play","Rice, fufu, sugar cane, yam"],
      ["Protective foods","Protect the body against diseases","Pineapple, oranges, plum"]
    ]},
    {k:"p", t:"For Physical Education activities, choose **nutritious food**: a meal with one food from each group, and clean water — not sweets and fizzy drinks before a game."},
    {k:"rule"},
    {k:"h3", t:"Games"},
    {k:"bul", items:["**Tetherball (individual and partner game)** — hit the ball on its rope around the pole in one direction while your opponent tries to wind it the other way","**Flag or Touch Football** — football in which a runner is 'tackled' by touching him or pulling his flag, never by knocking him down","**Football End Ball** — pass the ball up the field and score by getting it to your free player behind the opponents' end line"]}
  ],
  focus: ["Exploration of body parts", "Body types: ectomorph, mesomorph and endomorph", "Roles of the body parts", "Types of motor skills", "Games and gymnastics"],
  terms: [
    { t: "ectomorph", d: "a slim, lightly built body type", x: "An ectomorph is often a good long-distance runner." },
    { t: "mesomorph", d: "a muscular, strongly built body type", x: "A mesomorph builds muscle easily." },
    { t: "endomorph", d: "a heavier, rounder body type", x: "An endomorph may be strong in pushing sports." },
    { t: "physique", d: "the form and build of a person's body", x: "Athletes have different physiques." },
    { t: "skeleton", d: "all the bones of the body together", x: "The skeleton supports the body." },
    { t: "muscle", d: "tissue that contracts to move the bones", x: "Muscles work in pairs." },
    { t: "fine motor skill", d: "a small, careful movement of the hands or fingers", x: "Writing is a fine motor skill." },
    { t: "gross motor skill", d: "a large movement using the big muscles", x: "Running is a gross motor skill." },
    { t: "gymnastics", d: "a sport of controlled body movements such as rolls and balances", x: "Gymnastics needs strength and balance." },
    { t: "coordination", d: "smooth working together of body parts", x: "Catching a ball needs coordination." }
  ],
  facts: [
    { q: "Name the three body types.", a: "Ectomorph, mesomorph and endomorph." },
    { q: "Describe an ectomorph.", a: "A slim, lightly built person." },
    { q: "Describe a mesomorph.", a: "A muscular, strongly built person." },
    { q: "Describe an endomorph.", a: "A heavier, rounder built person." },
    { q: "Is one body type better than the others?", a: "No. Each has different strengths, and all can be fit and healthy." },
    { q: "What is the difference between fine and gross motor skills?", a: "Fine motor skills are small careful movements of the hands; gross motor skills use the large muscles of the body." },
    { q: "What does the skeleton do?", a: "It supports the body, gives it shape and protects the organs." },
    { q: "Give one example each of a fine and a gross motor skill.", a: "Fine: writing or tying a lace. Gross: running or jumping." }
  ],
  tf: [
    { s: "An ectomorph is slim and lightly built.", a: "true", why: "That is the description of the ectomorph type." },
    { s: "The mesomorph body type is the best one to have.", a: "false", why: "No body type is best; each has different strengths." },
    { s: "Writing is a fine motor skill.", a: "true", why: "It uses small careful movements of the fingers." },
    { s: "The skeleton protects the organs inside the body.", a: "true", why: "For example the ribs protect the heart and lungs." },
    { s: "Most people are purely one body type.", a: "false", why: "Most people are a mixture of the three." },
    { s: "Gross motor skills use the large muscles.", a: "true", why: "Running and jumping are examples." }
  ],
  apply: [
    { q: "Which body type might do best at long-distance running and why?", a: "Often the ectomorph, because a light frame is easier to carry over distance — but training matters more than build." },
    { q: "A heavier pupil is discouraged in P.E. What would you say to him?", a: "That his build has its own strengths, such as power in pushing and throwing, and every body type can become fit." },
    { q: "Name three fine motor skills used in school work.", a: "Writing, drawing and using a ruler or scissors carefully." },
    { q: "Why do gymnasts need both strength and coordination?", a: "Strength holds the body in position, and coordination makes the movements smooth and controlled." },
    { q: "How does knowing your body type help you plan your training?", a: "It helps me choose activities where I do well and work harder on the areas that are naturally more difficult for me." }
  ],
  sort: {
    title: "Fine and gross motor skills",
    groups: [
      { name: "Fine motor skills", items: ["writing", "drawing", "tying a lace", "buttoning a shirt"] },
      { name: "Gross motor skills", items: ["running", "jumping", "throwing", "climbing", "rolling"] }
    ]
  },
  compare: {
    title: "The three body types",
    caption: "Complete the table describing each body type.",
    items: [
      { p: "Ectomorph", f: "Slim and lightly built; often suited to endurance activities." },
      { p: "Mesomorph", f: "Muscular and strongly built; builds strength and power easily." },
      { p: "Endomorph", f: "Heavier and rounder; often strong in pushing and throwing events." },
      { p: "Most people", f: "A mixture of the three types; all can become fit through training." }
    ]
  },
  casestudy: {
    title: "Choosing the team",
    text: "The Grade Three sports day was coming and the class had to choose a team for four events: the long run, the shot throw, the relay and the tug-of-war. The children wanted to put the same four fast boys into everything. Their teacher stopped them and drew three columns on the board — light build, muscular build, heavier build — and asked which events might suit each. Slowly the class worked it out. The tall thin girl who never won a sprint was entered for the long run and won it. The heaviest boy in the class anchored the tug-of-war and they took first place. The class finished second overall in the whole school, their best result ever, and only two of the original four fast boys had actually run.",
    questions: [
      { q: "What did the class first want to do?", a: "Put the same four fast boys into every event." },
      { q: "How did the teacher change their thinking?", a: "She had them match the different builds to the events those builds suit." },
      { q: "What was the result of the new approach?", a: "The class finished second in the whole school, their best result ever, with different pupils winning different events." }
    ]
  },
  project: {
    title: "Body types and sports chart",
    brief: "Make a chart matching body types to suitable activities.",
    steps: [
      "Draw three columns headed ectomorph, mesomorph and endomorph.",
      "Under each, draw a simple figure showing that build.",
      "Write two sports or events that often suit each build.",
      "At the bottom write one sentence: why training matters more than build.",
      "Present your chart to the class."
    ],
    criteria: ["three types correctly described", "two suitable activities each", "correct statement about training", "clear presentation"]
  },
  activities: [
    "Label the parts of the body and explain their roles",
    "Discuss the three body types and match them to suitable activities",
    "Demonstrate fine and gross motor skills through sport",
    "Gymnastic activities and manipulative games"
  ],
  materials: ["Charts", "Posters", "Mat", "Whistle", "Balls"],
  assessment: ["Individual presentation", "Group presentation", "Class participation", "Practical demonstration"]
},

/* ============================ GRADE 4 ============================ */
{
  grade: 4, period: "I", sem: "One", icon: "🏃",
  title: "Introduction to Physical Education",
  subtitle: "Definition, history and importance; general health and flexibility",
  outcomes: ["Learners are able to discuss physical education, explain general health, and participate in sporting activities."],
  objectives: ["Discuss Physical Education", "Explain general health", "Participate in sporting activities", "Demonstrate flexibility exercises, games and stunts"],
  note: "Physical education is not simply games. It is a planned programme that develops the body, teaches health and safety, and builds character through sport.",
  study:[
    /* ---- course text: Semester One, Period I — Introduction to Physical Education (guide pp. 38-39) ---- */
    {k:"h3", t:"Definitions — Physical Education, Its History and Importance"},
    {k:"p", t:"**Physical Education** is the study of the body in motion; it plays a crucial role in the development and physical well-being of learners. Its **history** stretches from the games and military drills of long ago to the modern school subject. Its **importance**: the maintenance of the body through physical fitness, health, flexibility and endurance promotes sound reasoning and growth."},
    {k:"p", t:"**Health**, in general, is complete well-being — a body that is fit, clean and properly fed, and a mind that is calm and alert. Exercise protects health; health makes exercise possible."},
    {k:"rule"},
    {k:"h3", t:"Exercises — Strength and Flexibility (Stretches)"},
    {k:"p", t:"**Bench Press** — learners lie on a bench face up with feet flat on the floor. Start with the arms extended and the weight over the chest, grasping the bar at approximately shoulder width. Under control, lower the weight to the chest; then push the weight back to the starting position. Repeat for the time required by the teacher."},
    {k:"bul", items:["**Standing / Seated Press** — press the weight from the shoulders to full arm-stretch overhead, standing or seated, then lower it under control","**Upright Rowing** — stand tall, hold the bar with both hands close together, and pull it up to the chin with the elbows high, then lower slowly","**Deltoid Raises** — with a small weight in each hand, raise the arms straight out to the sides to shoulder height and lower them slowly — this builds the deltoid muscles of the shoulder"]},
    {k:"rule"},
    {k:"h3", t:"Games"},
    {k:"p", t:"**Traffic Lights (loco-motor game).** Learners find their own space. The teacher signals: **RED means JOG; YELLOW means WALK; GREEN means RUN; BLUE means LIE ON STOMACH; and BLACK means JUMP IN PLACE.** On a whistle, all children begin to move according to the teacher's signals."},
    {k:"p", t:"**Tug-of-War** — two teams pull opposite ends of a rope; each side tries to drag the middle mark of the rope past its own line. **Twister (manipulative game)** — hands and feet are placed on coloured spots as the caller names them, twisting the body without falling."},
    {k:"rule"},
    {k:"h3", t:"Stunts and Tumbling"},
    {k:"p", t:"**Wheel Stunt** — learners stand three per group. The center learner stands with legs apart and arms extended sideward. The outside learners place their feet near the center learner's foot, grasp hands, then lean outward for the time required by the teacher."},
    {k:"p", t:"**Walking Down the Wall** — facing away, walk the hands down the wall from a standing lean until the body arches; hold, then walk the hands back up."}
  ],
  focus: ["Definition, history and importance of Physical Education", "Health", "Exercise: flexibility and stretches", "Loco-motor, manipulative and cooperative games", "Stunts and tumbling"],
  terms: [
    { t: "physical education", d: "planned education through physical activity, developing the body, health and character", x: "Physical education appears on every school timetable." },
    { t: "flexibility", d: "the range of movement possible at a joint", x: "Stretching improves flexibility." },
    { t: "stretch", d: "an exercise that lengthens a muscle gently", x: "Hold each stretch for thirty seconds." },
    { t: "bench press", d: "an exercise lying on a bench and pushing a weight upward", x: "The bench press develops the chest and arms." },
    { t: "upright rowing", d: "an exercise pulling a weight upward to the chest", x: "Upright rowing works the shoulders." },
    { t: "deltoid", d: "the rounded muscle forming the shape of the shoulder", x: "Deltoid raises develop the shoulders." },
    { t: "tug-of-war", d: "a contest where two teams pull opposite ends of a rope", x: "Tug-of-war tests strength and teamwork." },
    { t: "cooperative game", d: "a game in which players must work together to succeed", x: "In a cooperative game nobody wins alone." },
    { t: "wheel stunt", d: "a group stunt with a centre learner and two outside learners leaning outward", x: "The wheel stunt needs balance and trust." },
    { t: "character", d: "the qualities that make up a person's behaviour", x: "Sport builds character such as honesty and courage." }
  ],
  facts: [
    { q: "Define Physical Education.", a: "Planned education through physical activity, developing the body, health and character." },
    { q: "Give two points in the history of physical education.", a: "It began with the ancient Greeks and their Olympic Games, and later became a school subject worldwide." },
    { q: "Give three reasons for the importance of P.E.", a: "It builds health and fitness, teaches safety and hygiene, and develops teamwork, discipline and character." },
    { q: "What is flexibility?", a: "The range of movement possible at a joint." },
    { q: "How should a stretch be performed?", a: "Slowly and gently, holding the position without bouncing, and breathing normally." },
    { q: "Describe the bench press.", a: "Lie on a bench face up with feet flat, hold the bar at shoulder width, lower it under control to the chest and push it back up." },
    { q: "What muscles do deltoid raises develop?", a: "The deltoids, the rounded muscles of the shoulders." },
    { q: "What is a cooperative game?", a: "A game in which players must work together to succeed." }
  ],
  tf: [
    { s: "Flexibility is the range of movement at a joint.", a: "true", why: "That is the definition." },
    { s: "You should bounce hard while stretching.", a: "false", why: "Bouncing can tear the muscle; stretch slowly and hold." },
    { s: "The bench press develops the chest and arms.", a: "true", why: "Pushing the weight upward works those muscles." },
    { s: "Physical education is only about playing games.", a: "false", why: "It also teaches health, safety, fitness and character." },
    { s: "The deltoids are the shoulder muscles.", a: "true", why: "They give the shoulder its rounded shape." },
    { s: "In a cooperative game one player can win alone.", a: "false", why: "Success depends on the whole group working together." }
  ],
  apply: [
    { q: "Design a three-exercise stretching warm-up and say what each stretches.", a: "For example: arm circles (shoulders), trunk twist (waist and back) and toe touch (back of the legs)." },
    { q: "Your school has no weights for the bench press. What can you use instead?", a: "Bodyweight push-ups, which work the same chest and arm muscles with no equipment." },
    { q: "In the Traffic Lights game, some pupils ignore the signals. How does that spoil the game?", a: "The game depends on everyone responding to the same signal; ignoring it causes collisions and makes the drill useless." },
    { q: "Why must the wheel stunt be practised carefully?", a: "Because three learners depend on each other's grip and balance; if one lets go the others fall." },
    { q: "How does sport build character?", a: "It requires honesty, effort under pressure, respect for opponents, and accepting both winning and losing well." }
  ],
  sort: {
    title: "Kinds of activity",
    groups: [
      { name: "Strength exercises", items: ["bench press", "upright rowing", "deltoid raises", "standing press"] },
      { name: "Games and stunts", items: ["traffic lights", "tug-of-war", "twister", "wheel stunt", "walking down the wall"] }
    ]
  },
  compare: {
    title: "What physical education develops",
    caption: "Complete the table with an example for each area.",
    items: [
      { p: "The body", f: "Strength, endurance, flexibility and skill — through exercise and sport." },
      { p: "Health knowledge", f: "Hygiene, nutrition, first aid and safety." },
      { p: "Character", f: "Discipline, honesty, courage and perseverance." },
      { p: "Social skills", f: "Teamwork, leadership, fair play and respect for others." }
    ]
  },
  casestudy: {
    title: "Traffic lights",
    text: "Teacher Toe played Traffic Lights with his Grade Four class: red meant jog, yellow walk, green run, blue lie on the stomach, black jump in place. The first time, it was chaos — children collided, two fell, and half of them ran on red because they were watching each other instead of him. He stopped the game and did not restart it. Instead he made the class say the five signals aloud together, three times. Then he ran the game in slow motion, walking pace only. Only on the third attempt did he allow full speed. It worked perfectly. Afterwards a pupil asked why he had not just told them to be careful. \"Because,\" he said, \"telling you to be careful does not teach you the signals.\"",
    questions: [
      { q: "Why did the game fail the first time?", a: "The pupils did not know the signals and were watching each other instead of the teacher, so they collided." },
      { q: "What three steps did the teacher use to fix it?", a: "He had them say the signals aloud, then played at walking pace, and only then allowed full speed." },
      { q: "What did he mean by his answer to the pupil's question?", a: "That safety comes from actually knowing and practising the rules, not from a general warning." }
    ]
  },
  project: {
    title: "A P.E. handbook page",
    brief: "Write one page for a class handbook on physical education.",
    steps: [
      "Write a clear definition of physical education in your own words.",
      "Write three sentences on its history.",
      "List five reasons why it is important.",
      "Describe one exercise and one game with their rules.",
      "Combine the class pages into a single handbook."
    ],
    criteria: ["accurate definition", "history section correct", "five valid reasons", "exercise and game clearly described"]
  },
  activities: [
    "Discuss the history and importance of physical education, health, games and sporting activities",
    "Flexibility stretches, bench press or push-ups, standing press, upright rowing and deltoid raises",
    "Traffic Lights, Tug-of-War and Twister games",
    "Wheel Stunt and Walking Down the Wall"
  ],
  materials: ["P.E. handbook", "Stopwatch", "Whistle", "Mat", "Rope"],
  assessment: ["Individual presentation", "Group presentation", "Class participation", "Practical demonstration"]
},

{
  grade: 4, period: "II", sem: "One", icon: "💪",
  title: "Physical Fitness",
  subtitle: "Fitness and the cardiovascular system, with jumping exercises",
  outcomes: ["Learners are able to identify the cardiovascular system, discuss its functions, and demonstrate exercises relating to the system."],
  objectives: ["Define physical fitness", "Discuss the importance of fitness", "Identify the cardiovascular system and its functions", "Demonstrate exercises and sport activities"],
  note: "The cardiovascular system is the heart and the blood vessels together. It delivers oxygen and food to every cell and carries waste away. Exercise makes this whole system work better.",
  study:[
    /* ---- course text: Semester One, Period II — Physical Fitness and the Cardiovascular System (guide pp. 40-41) ---- */
    {k:"h3", t:"Physical Fitness and its Importance"},
    {k:"p", t:"**Physical fitness** is the ability of the body to carry out daily tasks with vigour and without undue fatigue. Its **importance**: it strengthens the heart and muscles, controls body weight, improves posture, and sharpens concentration for school work."},
    {k:"p", t:"The **cardiovascular system** is made of the heart, the blood and the blood vessels. Its **functions**: the heart pumps blood through the vessels to carry oxygen and food to every cell, and to carry away carbon dioxide and wastes. Exercises that make the heart beat faster — running, jumping, skipping — train this system."},
    {k:"rule"},
    {k:"h3", t:"Kinds of Fitness Activities — Jumping Exercises"},
    {k:"p", t:"**Calf Jump** — the learner stands with feet shoulder-width apart and hands on hips; the knees bend slightly, and using mainly the **calf muscles**, he jumps rapidly in place for 10 repetitions."},
    {k:"bul", items:["**Calf-Jump Spins** — the same calf jump with a half or full turn in the air","**One-Leg Calf Jump** — calf jumps performed on one foot, then the other","**Individual Rope Skipping** — hold one handle in each hand with the rope behind you; swing the rope over your head and jump over it when it reaches your feet; continue swinging and jumping"]},
    {k:"rule"},
    {k:"h3", t:"Game — Give and Take (Cooperative)"},
    {k:"p", t:"**Give and Take** — learners squat in a circle, each holding an object in the right hand. On a signal, all pass the objects to the next person on the right. Continue the exercise until everyone receives his own object back — 10 repetitions make a game. It teaches rhythm, attention and cooperation."},
    {k:"rule"},
    {k:"h3", t:"Stunts and Tumbling"},
    {k:"p", t:"**Hand Stand (Head Stand)** — with hands and head forming a tripod on the mat, raise the legs until the body is straight and balanced; come down with control. **Frog Stand** — squat with the hands flat on the mat, rest the knees on the elbows, lean forward and lift the feet off the floor, balancing on the hands like a frog."}
  ],
  focus: ["Definition of physical fitness", "Importance of physical fitness", "The cardiovascular system", "Kinds of fitness activities: jumping exercises", "Cooperative games and stunts"],
  terms: [
    { t: "cardiovascular system", d: "the heart and blood vessels, which move blood around the body", x: "Running strengthens the cardiovascular system." },
    { t: "blood vessel", d: "a tube that carries blood through the body", x: "Arteries and veins are blood vessels." },
    { t: "artery", d: "a blood vessel carrying blood away from the heart", x: "The main artery leaves the heart." },
    { t: "vein", d: "a blood vessel carrying blood back to the heart", x: "Veins return blood to the heart." },
    { t: "oxygen", d: "the gas from the air that the body needs to release energy", x: "Blood carries oxygen to the muscles." },
    { t: "calf jump", d: "a jumping exercise using mainly the calf muscles", x: "Do ten repetitions of the calf jump." },
    { t: "rope skipping", d: "jumping over a rope swung over the head and under the feet", x: "Rope skipping is excellent cardiovascular exercise." },
    { t: "head stand", d: "a stunt balancing the body upside down on the head and hands", x: "The head stand needs a mat and a spotter." },
    { t: "frog stand", d: "a stunt balancing the knees on the elbows with hands on the floor", x: "The frog stand builds arm strength." },
    { t: "give and take", d: "a cooperative game requiring exchange and teamwork", x: "Give and Take teaches cooperation." }
  ],
  facts: [
    { q: "What is the cardiovascular system?", a: "The heart and the blood vessels, which move blood around the body." },
    { q: "Name the two main kinds of blood vessel.", a: "Arteries and veins." },
    { q: "What does an artery do?", a: "Carries blood away from the heart." },
    { q: "What does a vein do?", a: "Carries blood back to the heart." },
    { q: "Give two functions of the cardiovascular system.", a: "It delivers oxygen and food to the cells, and it carries away waste." },
    { q: "Describe the calf jump.", a: "Stand with feet shoulder width apart, hands on hips, knees slightly bent, and jump rapidly in place using mainly the calf muscles." },
    { q: "Why is rope skipping good exercise?", a: "It raises the heart rate and builds endurance, timing and leg strength." },
    { q: "What safety measure is needed for the head stand?", a: "A mat and a partner or teacher to spot and support." }
  ],
  tf: [
    { s: "Arteries carry blood away from the heart.", a: "true", why: "That is how arteries are defined." },
    { s: "The cardiovascular system only includes the heart.", a: "false", why: "It includes the heart and all the blood vessels." },
    { s: "Exercise improves the working of the cardiovascular system.", a: "true", why: "The heart becomes stronger and circulation improves." },
    { s: "The calf jump mainly uses the arm muscles.", a: "false", why: "It uses mainly the calf muscles of the lower leg." },
    { s: "Blood carries waste away from the cells.", a: "true", why: "That is one of the functions of the system." },
    { s: "A head stand may safely be done on bare concrete.", a: "false", why: "It requires a mat and a spotter." }
  ],
  apply: [
    { q: "Explain what happens in your cardiovascular system when you sprint.", a: "The heart beats much faster and harder, arteries widen, and more oxygen-rich blood reaches the leg muscles while waste is carried away." },
    { q: "Design a five-minute cardiovascular workout with no equipment.", a: "For example: one minute jog in place, one minute jumping jacks, one minute calf jumps, one minute high knees, one minute fast marching." },
    { q: "Why do fit people have a lower resting pulse?", a: "Their heart is stronger and pumps more blood with each beat, so it needs fewer beats per minute at rest." },
    { q: "A pupil feels dizzy during hard exercise. What should be done?", a: "Stop at once, sit or lie down in the shade, drink water, and tell the teacher." },
    { q: "Why is a rope one of the best pieces of P.E. equipment for a poor school?", a: "It is cheap and lasts long, yet gives excellent cardiovascular, timing and leg training." }
  ],
  sort: {
    title: "The cardiovascular system and its exercises",
    groups: [
      { name: "Parts of the system", items: ["heart", "artery", "vein", "blood", "capillary"] },
      { name: "Exercises that train it", items: ["rope skipping", "calf jump", "jogging", "jumping jacks"] }
    ]
  },
  compare: {
    title: "The cardiovascular system",
    caption: "Complete the table with the function of each part.",
    items: [
      { p: "Heart", f: "Pumps blood continuously around the whole body." },
      { p: "Arteries", f: "Carry oxygen-rich blood away from the heart to the body." },
      { p: "Veins", f: "Carry blood back to the heart to be pumped to the lungs." },
      { p: "Blood", f: "Carries oxygen and food to the cells and takes waste away." }
    ]
  },
  casestudy: {
    title: "The rope from the market",
    text: "The Grade Four teacher at a small school in Nimba had no equipment at all. She bought one length of rope from the market with her own money and cut it into six skipping ropes. She set a simple class challenge: how many total skips could the class add up in a term? They kept a running total on the board. By the end of the first month the number was over ten thousand and the children were skipping at break without being asked. At the end of term the school nurse did a routine check and remarked that Grade Four had the lowest resting pulse rates of any class in the school. The teacher had not been trying to achieve that. She had been trying to give them something to do.",
    questions: [
      { q: "What equipment did the teacher provide, and how?", a: "Six skipping ropes, made by cutting up one length of rope she bought at the market with her own money." },
      { q: "How did she motivate the class?", a: "By setting a class challenge to add up the total skips for the term and keeping a running total on the board." },
      { q: "What did the nurse's check show, and why?", a: "Grade Four had the lowest resting pulse rates in the school, because regular skipping had strengthened their hearts." }
    ]
  },
  project: {
    title: "Cardiovascular training log",
    brief: "Train and record your cardiovascular fitness for two weeks.",
    steps: [
      "Record your resting pulse and how long you can skip or jog without stopping.",
      "Train three times a week, increasing the time slightly each session.",
      "Record your pulse before and after every session.",
      "After two weeks, re-test your resting pulse and endurance time.",
      "Write a short conclusion on what changed."
    ],
    criteria: ["baseline recorded", "six sessions logged", "pulse recorded each time", "clear honest conclusion"]
  },
  activities: [
    "Discuss physical fitness, its importance and the cardiovascular system",
    "Jumping exercises: calf jump, calf jump spins, one-leg calf jump and individual rope skipping",
    "Cooperative game: Give and Take",
    "Stunts: head stand and frog stand on the mat"
  ],
  materials: ["Body system chart", "Posters", "Pencils", "Stopwatch", "Ropes", "Mat"],
  assessment: ["Individual presentation", "Group presentation", "Class participation", "Practical demonstration"]
},

{
  grade: 4, period: "III", sem: "One", icon: "🩹",
  title: "First Aid and Safety",
  subtitle: "Types of wounds, treatment and common emergencies",
  outcomes: ["Learners are able to define first aid, list types of wounds, and apply the skills of first aid treatment."],
  objectives: ["Define First Aid", "List types of wounds", "Apply the skills in First Aid treatment", "Respond correctly to common emergencies"],
  note: "There are five types of wound: abrasion, incision, laceration, puncture and avulsion. For all of them, the four steps are the same: stop the bleeding, protect the wound, treat for shock, and seek medical care.",
  study:[
    /* ---- course text: Semester One, Period III — First Aid and Safety (guide pp. 42-43) ---- */
    {k:"h3", t:"Definition of First Aid"},
    {k:"p", t:"**First aid** is the immediate, temporary care given to a person who has been injured or is suddenly ill, before full medical help arrives. In an emergency, your first decision should be **whether to move the victim or not**; move a victim only when it is necessary to save life — for example, an accident victim from a car, from water, or from a smoky room."},
    {k:"rule"},
    {k:"h3", t:"Types of Wounds"},
    {k:"table", head:["Wound","What it is"], rows:[
      ["Abrasion","Scrapes against the skin"],
      ["Incision","A cut made in the body during surgery"],
      ["Laceration","A jagged, tearing wound of the flesh"],
      ["Puncture","A deep narrow wound made by a pointed object such as a nail or thorn"],
      ["Avulsion","A wound in which tissue is torn away or partly torn off"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Treatment — the Four Steps"},
    {k:"num", items:["**Stop the bleeding** — press on the wound with a clean cloth or bandage.","**Protect the wound from contamination and infection** — clean it and cover it with a sterile dressing.","**Treat the victim for shock** — lay the victim down, keep him warm and reassure him.","**Seek medical care immediately** — get the victim to a clinic or hospital without delay."]},
    {k:"rule"},
    {k:"h3", t:"Common Emergencies"},
    {k:"bul", items:["**Fire** — get out and raise the alarm; never hide; crawl low under smoke","**Flood** — move to high ground; never play in flood water","**Burns** — cool the burn with clean, cool running water and cover it with a clean dressing"]},
    {k:"rule"},
    {k:"h3", t:"Games"},
    {k:"p", t:"**Who's Leading? (classroom game).** A learner is chosen to be 'IT'; he stands outside the circle with his hands over his eyes. The teacher then selects a player in the circle to be the 'leader'. The leader starts any motion he chooses — blinking his eyes, waving his arms over his head — and the circle copies. 'IT' opens his eyes and tries to guess who the leader is. As the game progresses, the leader slyly switches to other movements while 'IT' tries to find him. Allow two or three guesses, then change the leader and 'IT'."},
    {k:"p", t:"**Steal the Bacon (loco-motor game)** — two teams with matching numbers face each other across a centre 'bacon'; when a number is called, both players race to seize the bacon and carry it home without being tagged. **Boundary Ball (manipulative game)** — pass or roll the ball over the opponents' boundary line to score."}
  ],
  focus: ["Definition of First Aid", "First aid skills and their application", "Types of wounds", "Treatment", "Common emergencies: fire, flood and burns", "Games"],
  terms: [
    { t: "first aid", d: "the immediate temporary care given to an injured or suddenly sick person", x: "First aid can save a life before help arrives." },
    { t: "abrasion", d: "a wound where the skin is scraped", x: "He got an abrasion sliding on the gravel." },
    { t: "incision", d: "a clean cut made by a sharp edge, such as in surgery", x: "An incision has smooth edges." },
    { t: "laceration", d: "a rough, torn wound", x: "A laceration has ragged edges." },
    { t: "puncture", d: "a deep narrow wound made by a pointed object", x: "A nail causes a puncture wound." },
    { t: "avulsion", d: "a wound where skin or tissue is torn away", x: "An avulsion needs urgent medical care." },
    { t: "contamination", d: "dirt or germs getting into a wound", x: "Cover the wound to prevent contamination." },
    { t: "shock", d: "a dangerous weakening of the body after serious injury", x: "Keep the victim warm and still to treat for shock." },
    { t: "emergency", d: "a sudden serious situation needing immediate action", x: "Fire is an emergency." },
    { t: "evacuate", d: "to move people out of a dangerous place", x: "Evacuate the building calmly in a fire." }
  ],
  facts: [
    { q: "Define first aid.", a: "The immediate temporary care given to a person who has become sick or has been injured." },
    { q: "List the five types of wound.", a: "Abrasion, incision, laceration, puncture and avulsion." },
    { q: "What is an abrasion?", a: "A wound where the skin has been scraped." },
    { q: "What is the difference between an incision and a laceration?", a: "An incision is a clean cut with smooth edges; a laceration is rough and torn." },
    { q: "Give the four steps in treating a wound.", a: "Stop the bleeding; protect the wound from contamination and infection; treat the victim for shock; seek medical care immediately." },
    { q: "When should a victim be moved?", a: "Only when it is necessary to save life, for example from water, fire, smoke or a car that might catch fire." },
    { q: "Name three common emergencies.", a: "Fire, flood and burns." },
    { q: "Why is a puncture wound dangerous even when it looks small?", a: "Because it is deep and can carry germs far into the body, causing serious infection." }
  ],
  tf: [
    { s: "An incision is a clean cut with smooth edges.", a: "true", why: "That is what distinguishes it from a laceration." },
    { s: "A small puncture wound is never dangerous.", a: "false", why: "It is deep and can cause serious infection." },
    { s: "The first step in treating a wound is to stop the bleeding.", a: "true", why: "It is the first of the four steps." },
    { s: "Every injured person should be moved immediately.", a: "false", why: "Move a victim only when necessary to save life." },
    { s: "Treating for shock is part of wound treatment.", a: "true", why: "It is the third of the four steps." },
    { s: "A wound may be left open and uncovered.", a: "false", why: "It must be protected from contamination and infection." }
  ],
  apply: [
    { q: "A pupil steps on a nail. Describe your actions.", a: "Do not pull anything embedded; call the teacher at once; keep him still and calm; cover the area with a clean dressing; and get him to a clinic, as a puncture needs medical attention." },
    { q: "Classify these wounds: a graze from falling on gravel; a torn wound from barbed wire.", a: "The graze is an abrasion; the torn wound from barbed wire is a laceration." },
    { q: "A fire starts in the school kitchen. What is the first thing to do?", a: "Raise the alarm and evacuate everyone calmly by the nearest safe exit; do not go back inside." },
    { q: "How do you recognise that someone is going into shock?", a: "The skin is pale, cold and clammy, breathing is fast and shallow, and the person is weak, dizzy or confused." },
    { q: "Why is 'seek medical care immediately' listed as a step even for wounds you have treated?", a: "Because first aid is only temporary care; trained staff must check for infection, deeper damage and the need for stitches or injections." }
  ],
  sort: {
    title: "Wounds and emergency actions",
    groups: [
      { name: "Types of wounds", items: ["abrasion", "incision", "laceration", "puncture", "avulsion"] },
      { name: "Steps in treatment", items: ["stop the bleeding", "protect from contamination", "treat for shock", "seek medical care"] }
    ]
  },
  compare: {
    title: "Types of wounds",
    caption: "Complete the table describing each type of wound.",
    items: [
      { p: "Abrasion", f: "The skin is scraped away on the surface, as from a fall on rough ground." },
      { p: "Incision", f: "A clean cut with smooth edges made by a sharp blade." },
      { p: "Laceration", f: "A rough, torn wound with ragged edges." },
      { p: "Puncture", f: "A deep narrow wound from a pointed object such as a nail." },
      { p: "Avulsion", f: "Skin or tissue torn away from the body; needs urgent medical care." }
    ]
  },
  casestudy: {
    title: "The four steps at the workshop",
    text: "During a school visit to a carpentry workshop, a Grade Four pupil named Torkpah caught his forearm on the edge of a saw bench. The cut was long and bleeding freely. Two adults began arguing about whether to carry him to the road. The class monitor, who had learned the four steps a fortnight earlier, sat Torkpah down and pressed a clean cloth firmly over the wound with her palm. She kept the arm raised. She told a boy to fetch the teacher and told another to bring Torkpah's jacket to keep him warm because he had gone pale. By the time the teacher arrived the bleeding had almost stopped. At the clinic the nurse said the pressure had probably saved him a great deal of blood.",
    questions: [
      { q: "What type of wound did Torkpah have?", a: "A laceration or incision — a long open cut bleeding freely." },
      { q: "Which of the four steps did the monitor carry out?", a: "She stopped the bleeding with pressure, protected the wound with a clean cloth, treated for shock with the jacket, and sent for help to get medical care." },
      { q: "Why was she right not to join the argument about carrying him?", a: "Because the priority was stopping the bleeding, and moving him was not necessary to save his life." }
    ]
  },
  project: {
    title: "First aid response cards",
    brief: "Make a set of five wound response cards.",
    steps: [
      "Make one card for each of the five wound types.",
      "On the front write the wound name and how to recognise it.",
      "On the back write the correct first aid actions in order.",
      "Test a partner using the cards.",
      "Store the set in the class first aid corner."
    ],
    criteria: ["five wound types covered", "recognition described correctly", "actions in the correct order", "partner successfully tested"]
  },
  activities: [
    "Discuss the history and importance of first aid and safety, types of wounds and treatment",
    "Demonstrate deciding whether to move a victim, and how to move one safely",
    "Practise the four steps of wound treatment on a model or partner",
    "Games: Who's Leading, Steal the Bacon and Boundary Ball"
  ],
  materials: ["First aid kit", "Gloves", "Bandage", "Soap", "Water", "Alcohol"],
  assessment: ["Individual presentation", "Group presentation", "Class participation", "Practical demonstration"]
},

{
  grade: 4, period: "IV", sem: "Two", icon: "📋",
  title: "Physical Fitness Screening",
  subtitle: "The one-mile walk test, the Cooper 12-minute run and the bicycle test",
  outcomes: ["Learners are able to discuss physical screening and demonstrate various types of screening and sport activities."],
  objectives: ["Discuss physical screening", "Demonstrate various types of screening", "Record and interpret results", "Take part in sport activities and games"],
  note: "Field tests such as the one-mile walk and the Cooper 12-minute run measure cardiovascular endurance. They need only a measured course and a stopwatch, so any school can use them.",
  study:[
    /* ---- course text: Semester Two, Period IV — Physical Fitness Screening (guide pp. 44-45) ---- */
    {k:"h3", t:"Physical Fitness Screening and Its Three Tests"},
    {k:"p", t:"**Physical fitness screening** is the testing of the body to find its fitness level — especially **cardiorespiratory endurance**, the power of the heart and lungs to keep working. Three screening tests appear in the guide:"},
    {k:"rule"},
    {k:"h3", t:"The One-Mile Walk Test"},
    {k:"p", t:"**1-Mile Walk Test** — learners begin with warm-up exercises, such as simple stretches and walking in place. Later, walk a mile as fast as you can. **You must always have one foot in contact with the ground** — if both feet leave the ground at any time during the movement, you are running. Time the walk and record it."},
    {k:"rule"},
    {k:"h3", t:"The Cooper 12-Minute Run and the 6-Mile Bicycle Test"},
    {k:"bul", items:["**Cooper 12-Minute Run** — run (or run and walk) for exactly twelve minutes and measure the distance covered; the farther you go, the better your endurance","**6-Mile Bicycle Test** — ride six miles in the best time you can, pacing yourself evenly; the faster the time, the fitter the rider"]},
    {k:"p", t:"Screen first, train afterwards, then screen again at the end of term: the change in your time or distance is your **progress**."},
    {k:"rule"},
    {k:"h3", t:"Games"},
    {k:"p", t:"**Squirrel and Nut (classroom game).** Learners sit at their desks with the head resting on one arm; the other arm is held to the side with the hand in an open position. One child, chosen to be the 'squirrel', carries a word card and moves quietly around the room. When the squirrel drops the 'nut' into the hand of a player, that person jumps up, correctly pronounces the word on the card, then tries to tag the squirrel before the squirrel can reach his own seat."},
    {k:"p", t:"**Mouse Trap (loco-motor game)** — join hands in a circle to make the 'trap'; the mice run in and out, and when the leader calls 'SNAP!' the trap closes and the caught mice join the circle. **Elastic Rope (manipulative game)** — two players hold a loop of elastic rope with their ankles while others jump it in patterns of ever-rising height."}
  ],
  focus: ["Definition of physical fitness screening", "Body screening: 1-mile walk test, Cooper 12-minute run, 6-mile bicycle test", "Classroom, loco-motor and manipulative games"],
  terms: [
    { t: "field test", d: "a fitness test done outdoors with simple equipment", x: "The Cooper run is a field test." },
    { t: "one-mile walk test", d: "a test of endurance walking one mile as fast as possible", x: "In the one-mile walk test one foot always touches the ground." },
    { t: "Cooper 12-minute run", d: "a test measuring how far you can run in twelve minutes", x: "The Cooper 12-minute run tests endurance." },
    { t: "bicycle test", d: "an endurance test measuring performance over a set cycling distance", x: "The six-mile bicycle test measures leg endurance." },
    { t: "distance", d: "how far something is from one point to another", x: "Measure the distance around the field." },
    { t: "pacing", d: "controlling your speed so you can finish the whole distance", x: "Good pacing wins long races." },
    { t: "warm-up", d: "gentle activity done before a test or hard exercise", x: "Begin with a warm-up of stretches and walking in place." },
    { t: "interpret", d: "to explain what a result means", x: "Interpret the score using the class table." },
    { t: "standard", d: "an agreed level used to judge a result", x: "Compare the time with the standard for your age." },
    { t: "endurance", d: "the ability to continue an effort for a long time", x: "These tests all measure endurance." }
  ],
  facts: [
    { q: "What is a field test?", a: "A fitness test done outdoors using simple equipment such as a measured course and a stopwatch." },
    { q: "Describe the one-mile walk test.", a: "After a warm-up, walk one mile as fast as you can, always keeping one foot in contact with the ground." },
    { q: "What does the Cooper 12-minute run measure?", a: "How far you can run in twelve minutes — a measure of cardiovascular endurance." },
    { q: "Why must one foot stay on the ground in the walk test?", a: "Because otherwise it becomes running, and the test would no longer be the same for everyone." },
    { q: "What equipment is needed for these tests?", a: "A measured course, a stopwatch and a recording form." },
    { q: "What is pacing?", a: "Controlling your speed so that you can complete the whole distance." },
    { q: "Why is a warm-up done before the test?", a: "To prepare the muscles and heart and prevent injury." },
    { q: "What do all three of these tests measure?", a: "Cardiovascular endurance." }
  ],
  tf: [
    { s: "In the one-mile walk test one foot must always touch the ground.", a: "true", why: "Otherwise it becomes running." },
    { s: "The Cooper test measures how fast you run 100 metres.", a: "false", why: "It measures how far you run in twelve minutes." },
    { s: "A warm-up should be done before an endurance test.", a: "true", why: "It prepares the body and prevents injury." },
    { s: "Starting at full speed is the best strategy in a 12-minute run.", a: "false", why: "Good pacing gives a better total distance." },
    { s: "Field tests need expensive laboratory equipment.", a: "false", why: "They need only a measured course and a stopwatch." },
    { s: "These tests measure cardiovascular endurance.", a: "true", why: "They all test the heart and lungs over time." }
  ],
  apply: [
    { q: "Two pupils run the Cooper test. One covers 1,800m, the other 2,400m. What can you conclude?", a: "The second pupil has greater cardiovascular endurance, though age, size and training all affect the result." },
    { q: "How would you set up a Cooper test at your school?", a: "Measure a loop of the field accurately, mark it, warm the class up, start them together, count laps for twelve minutes and record each distance." },
    { q: "A pupil sprints the first two minutes of the Cooper run and then walks. Advise him.", a: "Start at a pace he can hold for the full twelve minutes; steady pacing covers far more total distance than a fast start and collapse." },
    { q: "It is a very hot afternoon. What precautions are needed for endurance testing?", a: "Test in the early morning or late afternoon, provide water, allow rest and shade, and stop any pupil who feels dizzy or unwell." },
    { q: "Why should results be compared with a standard for the pupil's age?", a: "Because what counts as a good distance differs by age and stage of growth." }
  ],
  sort: {
    title: "Test procedures",
    groups: [
      { name: "Before the test", items: ["measure the course", "warm up", "explain the rules", "prepare the stopwatch"] },
      { name: "During and after", items: ["pace yourself", "count the laps", "cool down", "record the result"] }
    ]
  },
  compare: {
    title: "Three endurance field tests",
    caption: "Complete the table describing each test.",
    items: [
      { p: "One-mile walk test", f: "Walk one mile as fast as possible, one foot always on the ground; time is recorded." },
      { p: "Cooper 12-minute run", f: "Run as far as possible in twelve minutes; distance is recorded." },
      { p: "Six-mile bicycle test", f: "Cycle six miles; time and effort are recorded to show leg and heart endurance." },
      { p: "What they share", f: "All are field tests of cardiovascular endurance needing only a course and a watch." }
    ]
  },
  casestudy: {
    title: "Measuring the field",
    text: "Grade Four wanted to do the Cooper 12-minute run, but nobody knew how long the school field actually was. The teacher turned it into a mathematics lesson. Two pupils walked the boundary heel-to-toe while the others counted, then they measured a single pace with a tape and multiplied. They came up with 214 metres. To check, another group used a long rope of known length laid end to end. That gave 219. They took the average and marked the corners with painted stones. When the class ran the test, everyone's distance could be worked out properly for the first time. The marked loop is still there, and three other classes now use it.",
    questions: [
      { q: "Why could the class not immediately do the Cooper test?", a: "They did not know the length of the school field, so distances could not be calculated." },
      { q: "What two methods did they use to measure it?", a: "Pacing the boundary heel-to-toe and multiplying by pace length, and laying a rope of known length end to end." },
      { q: "Why was taking the average of 214 and 219 sensible?", a: "Because both methods have small errors, and averaging gives a more reliable figure." }
    ]
  },
  project: {
    title: "Run a class endurance test",
    brief: "Organise and run one endurance field test for your group.",
    steps: [
      "Measure and mark a course accurately, recording its length.",
      "Write the test procedure in clear steps.",
      "Lead a warm-up for your group.",
      "Run the test, timing and recording every pupil.",
      "Present the results and note anything that could be improved."
    ],
    criteria: ["course accurately measured", "procedure written clearly", "warm-up conducted", "results complete and accurate"]
  },
  activities: [
    "Discuss the importance and types of physical fitness screening",
    "One-mile walk test with warm-up: simple stretches and walking in place",
    "Cooper 12-minute run on a measured course, distances recorded",
    "Games: Squirrel and Nut, Mouse Trap and Elastic Rope"
  ],
  materials: ["Stopwatch", "Measuring tape", "Assessment forms", "Whistle", "Markers"],
  assessment: ["Individual presentation", "Group presentation", "Class participation", "Practical demonstration"]
},

{
  grade: 4, period: "V", sem: "Two", icon: "🤝",
  title: "Personal and Social Behaviour and Values",
  subtitle: "Feedback, teamwork, leadership and appreciating differences",
  outcomes: ["Learners are able to identify the purposes for and follow activities, rules, procedures and etiquette, and appreciate differences in others."],
  objectives: ["Use feedback to improve motor skills and movement patterns", "Show constructive competition, initiative and leadership", "Identify positive feelings from regular participation in physical activity", "Identify the benefits of social interaction", "Develop teamwork with pupils of varying skill and fitness levels", "Develop sport skills"],
  note: "In sport, how you behave matters as much as how you play. Feedback, fair competition, leadership and respect for those who are different from you are all part of a good player.",
  study:[
    /* ---- course text: Semester Two, Period V — Personal and Social Behaviour and Values (guide pp. 46-47) ---- */
    {k:"h3", t:"Feedback"},
    {k:"p", t:"**Feedback** is information about how you performed. Use **limited feedback to improve motor skills and movement patterns** in controlled settings. It comes from the **teacher** — who corrects your technique — and from your **peers** — who watch and tell you what they saw."},
    {k:"rule"},
    {k:"h3", t:"Personal and Social Behaviours"},
    {k:"bul", items:["**Responsibility** — doing your part without being reminded","**Best effort** — trying as hard as you can, even when you are losing","**Compassion** — caring about how teammates and opponents feel","**Initiative** — seeing what needs to be done and doing it","**Leadership** — guiding a group fairly and by example","**Constructive competition** — competing hard while respecting rules, officials and opponents"]},
    {k:"rule"},
    {k:"h3", t:"Regular Participation and Social Benefits"},
    {k:"p", t:"Identify the **positive feelings** that come with regular participation in physical activities — enjoyment, confidence, calmness and a sense of belonging. The **social benefits of participation** include new friends, practice in teamwork with students of **varying skills and fitness levels**, and learning to win and lose with grace."},
    {k:"rule"},
    {k:"h3", t:"Individual Differences"},
    {k:"p", t:"**Appreciate differences in others**: learners differ in size, speed, strength and skill, and a team needs them all. Learn the difference between a **real body image** — seeing your body as it truly is, with respect — and a **false body image** — a twisted idea, from teasing or boasting, that your body is worth less than another's."},
    {k:"rule"},
    {k:"h3", t:"Basketball Skills"},
    {k:"p", t:"Basketball has a **history** (invented as an indoor team game), **rules** (no running with the ball, no contact fouls) and **skills** — dribbling, passing and shooting."},
    {k:"p", t:"**Dribbling Skill** — arrange at least ten (10) chairs in a line at ten-foot intervals from the starting line. A ball is placed on the starting line with each learner standing behind it, both hands resting on his knees. On a whistle, he picks up the ball and dribbles around the chairs in a zigzag pattern to the end and back to the original position. The first person to reach back wins a point."},
    {k:"p", t:"**Shooting** — draw a line at a 45-degree angle, 30 feet from the basket. Each learner attempts at least ten (10) lay-up shots: he must begin dribbling from the 30-foot line and attempt a basket when he reaches it. Award **five (5) points** for each successful basket. Other shooting tests: the **free throw**, the **one-hand shot** and the **two-hands shot**."}
  ],
  focus: ["Feedback from teacher and peers", "Personal and social behaviours: responsibility, best effort, compassion, initiative, leadership, constructive competition", "Regular participation and social benefits", "Individual differences and body image", "Basketball: history, rules and skills"],
  terms: [
    { t: "feedback", d: "information about your performance that helps you improve", x: "The coach gave useful feedback on my shooting." },
    { t: "responsibility", d: "doing what you are supposed to do without being told", x: "Returning the equipment is a responsibility." },
    { t: "best effort", d: "trying as hard as you can", x: "Best effort matters more than the score." },
    { t: "compassion", d: "caring about the feelings of others", x: "He showed compassion to the injured player." },
    { t: "initiative", d: "acting on your own to do what is needed", x: "She took the initiative and organised the team." },
    { t: "leadership", d: "guiding and encouraging others towards a goal", x: "Good leadership lifts the whole team." },
    { t: "constructive competition", d: "competing in a way that helps everyone improve", x: "Constructive competition is friendly but serious." },
    { t: "etiquette", d: "the accepted polite behaviour in a sport", x: "Shaking hands after the match is etiquette." },
    { t: "body image", d: "how a person sees and feels about their own body", x: "A false body image can harm confidence." },
    { t: "dribbling", d: "moving with the ball under control", x: "He dribbled around the chairs in a zigzag." }
  ],
  facts: [
    { q: "What is feedback and who can give it?", a: "Information about your performance that helps you improve; it can come from the teacher or from peers." },
    { q: "Name four personal and social behaviours valued in sport.", a: "Any four: responsibility, best effort, compassion, initiative, leadership and constructive competition." },
    { q: "What is constructive competition?", a: "Competing in a way that pushes everyone to improve, without hostility or cheating." },
    { q: "Give two positive feelings that come from regular participation.", a: "Enjoyment and confidence; also a sense of belonging and reduced stress." },
    { q: "Name two social benefits of taking part in physical activity.", a: "Making friends and learning teamwork; also learning to respect others and resolve disagreements." },
    { q: "What is the difference between real and false body image?", a: "A real body image matches how the body actually is; a false body image is an inaccurate view of oneself." },
    { q: "Describe the basketball dribbling drill.", a: "Ten chairs are set in a line at ten-foot intervals; on the whistle the player dribbles in a zigzag to the end and back." },
    { q: "What is sports etiquette?", a: "The accepted polite behaviour in a sport, such as shaking hands and respecting officials." }
  ],
  tf: [
    { s: "Feedback helps a player improve.", a: "true", why: "It tells him what to correct." },
    { s: "Constructive competition means trying to humiliate the other side.", a: "false", why: "It means competing in a way that helps everyone improve." },
    { s: "Taking initiative means waiting to be told what to do.", a: "false", why: "Initiative means acting on your own to do what is needed." },
    { s: "Regular participation in physical activity improves mood.", a: "true", why: "It produces positive feelings and reduces stress." },
    { s: "Teams should exclude pupils with lower skill levels.", a: "false", why: "Teamwork means working with pupils of varying skill and fitness." },
    { s: "Shaking hands after a match is part of sports etiquette.", a: "true", why: "It shows respect for opponents." }
  ],
  apply: [
    { q: "Give feedback to a teammate who keeps missing his shots, in a way that helps.", a: "Point out one specific thing — for example 'bend your knees and follow through' — say what he did well, and offer to practise with him." },
    { q: "You are made captain of a team with players of very different ability. How will you organise it?", a: "Give every player a role that suits their strength, rotate positions so all take part, and praise effort rather than only success." },
    { q: "A strong player mocks a weaker one. What should the captain do?", a: "Stop it immediately, remind him that the team needs everyone, and speak privately to both so nobody is humiliated." },
    { q: "How can you show compassion during a game?", a: "By helping an opponent up, stopping play if someone is hurt, and encouraging a player who has made a mistake." },
    { q: "Why is it important for a young person to have a realistic body image?", a: "Because a false view can damage confidence and lead to unhealthy eating or over-training." }
  ],
  sort: {
    title: "Good and poor sporting behaviour",
    groups: [
      { name: "Good behaviour", items: ["encouraging a teammate", "accepting the referee's decision", "shaking hands after the game", "taking responsibility for equipment"] },
      { name: "Poor behaviour", items: ["mocking a weaker player", "arguing with the referee", "cheating to win", "blaming others for a loss"] }
    ]
  },
  compare: {
    title: "Personal and social behaviours in sport",
    caption: "Complete the table by explaining each behaviour.",
    items: [
      { p: "Responsibility", f: "Doing your duties — arriving on time, caring for equipment, keeping your role." },
      { p: "Best effort", f: "Trying your hardest regardless of the score or who is watching." },
      { p: "Compassion", f: "Caring for the feelings and welfare of teammates and opponents." },
      { p: "Initiative", f: "Seeing what needs doing and acting without being told." },
      { p: "Leadership", f: "Guiding, organising and encouraging others towards a shared goal." }
    ]
  },
  casestudy: {
    title: "The captain nobody expected",
    text: "When the Grade Four basketball team needed a captain, everyone assumed it would be Prince, the best shooter in the school. The teacher chose Yatta instead. Prince was furious. Over the following weeks the class watched what Yatta actually did: she arrived first and set out the cones, she made sure the two weakest players got the ball in every practice, she told Prince honestly when he was ball-hogging, and she never once argued with a referee. The team lost their first two matches and won the next six. At the end of the season Prince was asked what changed. He said, \"She made me pass. I hated it. We started winning.\"",
    questions: [
      { q: "Why were people surprised at the choice of captain?", a: "Because Prince was the best shooter and everyone assumed he would be chosen." },
      { q: "List three things Yatta did as captain.", a: "She arrived first and set out the equipment, ensured the weakest players got the ball, and gave Prince honest feedback without arguing with referees." },
      { q: "What does Prince's final comment show about leadership?", a: "That good leadership improves the whole team, even when individuals dislike the change at first." }
    ]
  },
  project: {
    title: "Our team code of conduct",
    brief: "Write a code of conduct for a class sports team.",
    steps: [
      "In your group, list six behaviours that make a good teammate.",
      "For each, write one sentence saying why it matters.",
      "Add two rules about how the team treats opponents and officials.",
      "Add one rule about including players of all abilities.",
      "Present your code and display the agreed class version."
    ],
    criteria: ["six behaviours with reasons", "rules for opponents and officials", "inclusion rule included", "clear presentation and agreement"]
  },
  activities: [
    "Discuss personal and social behaviours, regular participation, social benefits and individual differences",
    "Basketball: history, rules and skills",
    "Dribbling drill: zigzag around ten chairs set at ten-foot intervals",
    "Shooting drill: lay-up shots from a 30-foot line, plus free throw and one- and two-hand shots"
  ],
  materials: ["Whistle", "Basketball", "Stopwatch", "Chairs or markers"],
  assessment: ["Individual presentation", "Group presentation", "Class participation", "Practical demonstration"]
},

{
  grade: 4, period: "VI", sem: "Two", icon: "🥗",
  title: "The Human Body",
  subtitle: "Body parts and types, motor skills, nutrition and balanced diet",
  outcomes: ["Learners are able to label body parts, demonstrate motor skills, explain the roles of the body parts and the effects of food deficiency, and state the meaning of nutrition and nutrients and the importance of a balanced diet."],
  objectives: ["Label different parts of the body", "Demonstrate motor skills through sports", "Explain the role of the body parts", "State the meaning of nutrition and nutrients", "Explain the effects of food deficiency", "Explain the importance of eating a balanced diet"],
  note: "Nutrition is the study of how food feeds the body. Nutrients are the useful substances in food. A balanced diet contains all three food groups in the right amounts — the body cannot be trained into health on poor food.",
  study:[
    /* ---- course text: Semester Two, Period VI — The Human Body; Nutrition and the Balanced Diet (guide pp. 48-49) ---- */
    {k:"h3", t:"Body Parts and Motor Skills — Revision"},
    {k:"p", t:"**Label** the different parts of the body, explain the **role** of each part in movement, recall the **body types** (ectomorph, endomorph, mesomorph), and demonstrate the **types of motor skills** through sports — loco-motor, manipulative and stability skills."},
    {k:"rule"},
    {k:"h3", t:"Nutrition and Nutrients"},
    {k:"p", t:"**Nutrition** means eating the food the body needs to grow, develop and work properly; **nutrients** are the rich substances in foods that the body needs most. Divide the class into two groups: one states the meaning of nutrition, the other the meaning of nutrients; then list the three **food groups** — body-building (meat, fish, eggs), energy-giving (rice, fufu, sugar cane, yam) and protective (pineapple, oranges, plum) — with the nutrients found in each and the function of the food we eat."},
    {k:"rule"},
    {k:"h3", t:"Food Deficiency and the Balanced Diet"},
    {k:"p", t:"**Food deficiency** is the lack of a needed nutrient; its **effects on the body** include stunted growth, weakness, poor sight, bleeding gums and falling sick often. The answer is a **balanced diet** — a daily diet containing foods from all three groups with clean water. The importance of eating a balanced diet: it builds the body, fuels it and protects it all at once."},
    {k:"rule"},
    {k:"h3", t:"Games (Manipulative)"},
    {k:"bul", items:["**Keep Away** — two or three players pass the ball among themselves while one in the middle tries to intercept","**Long Ball** — two teams pass and run to carry the ball over the far goal line","**Four Square** — play in a four-square court; the ball must bounce once in another player's square and be returned before a second bounce","**Dribble Tag** — everyone dribbles while 'IT' tags; a player who loses control is caught"]},
    {k:"rule"},
    {k:"h3", t:"Gymnastic Activities"},
    {k:"bul", items:["**Rabbit Jump** — squat with hands forward on the mat, then spring feet-first like a rabbit","**Reach-Over Roll** — a forward roll begun by reaching far over one shoulder","**Puppy Dog Walk** — on all fours, walk with the head up, knees off the ground","**Teddy Bear Stand** — tuck into a ball and balance briefly on the seat like a seated teddy bear"]}
  ],
  focus: ["Exploration of body parts, body types, roles and motor skills", "Nutrition and nutrients", "Food deficiency", "Balanced diet", "Manipulative games and gymnastic activities"],
  terms: [
    { t: "nutrition", d: "the way the body takes in and uses food to grow and stay well", x: "Good nutrition supports growth and fitness." },
    { t: "nutrient", d: "a useful substance in food that the body needs", x: "Protein is an important nutrient." },
    { t: "balanced diet", d: "a diet containing all the food groups in the right amounts", x: "A balanced diet keeps the body healthy." },
    { t: "food deficiency", d: "a lack of a needed nutrient in the diet", x: "Food deficiency causes weakness and illness." },
    { t: "carbohydrate", d: "a nutrient that gives the body energy", x: "Rice and cassava are rich in carbohydrate." },
    { t: "protein", d: "a nutrient that builds and repairs the body", x: "Fish, beans and eggs supply protein." },
    { t: "vitamin", d: "a nutrient needed in small amounts to protect health", x: "Fruit and green leaves supply vitamins." },
    { t: "mineral", d: "a substance such as iron or calcium needed by the body", x: "Calcium builds strong bones." },
    { t: "energy food", d: "food that supplies fuel for activity", x: "Rice is an energy food." },
    { t: "body building food", d: "food that helps the body grow and repair", x: "Fish is a body building food." }
  ],
  facts: [
    { q: "What is nutrition?", a: "The way the body takes in and uses food to grow and stay well." },
    { q: "What is a nutrient?", a: "A useful substance in food that the body needs." },
    { q: "Name the three food groups.", a: "Energy foods (carbohydrates and fats), body building foods (proteins), and protective foods (vitamins and minerals)." },
    { q: "Which nutrient builds and repairs the body?", a: "Protein." },
    { q: "Which nutrient mainly supplies energy?", a: "Carbohydrate." },
    { q: "What is a balanced diet?", a: "A diet containing all the food groups in the right amounts." },
    { q: "Name two effects of food deficiency.", a: "Weakness and poor growth; also frequent illness and poor concentration." },
    { q: "Give a Liberian example for each food group.", a: "Energy: rice or cassava. Body building: fish, beans or eggs. Protective: potato greens, mango or orange." }
  ],
  tf: [
    { s: "Protein builds and repairs the body.", a: "true", why: "That is the main role of protein." },
    { s: "A balanced diet means eating only one kind of food.", a: "false", why: "It means eating all food groups in the right amounts." },
    { s: "Food deficiency can cause poor growth.", a: "true", why: "The body lacks what it needs to build itself." },
    { s: "Vitamins are needed in very large amounts.", a: "false", why: "They are needed in small amounts but are essential." },
    { s: "Rice and cassava are energy foods.", a: "true", why: "They are rich in carbohydrate." },
    { s: "Exercise alone can make up for a poor diet.", a: "false", why: "The body cannot build health without proper nutrients." }
  ],
  apply: [
    { q: "Plan a balanced school lunch using foods available in Liberia.", a: "For example: rice (energy), fish or beans (body building), and potato greens with a mango (protective) plus clean water." },
    { q: "A pupil is always tired and gets sick often. What might be wrong with his diet?", a: "He may have a food deficiency — too little protein or too few vitamins and minerals — and should be checked at a clinic." },
    { q: "Why does an athlete need more food than someone who sits all day?", a: "Because activity uses more energy, and training also requires protein for muscle repair." },
    { q: "Your friend eats only rice at every meal. What advice will you give?", a: "Rice gives energy but not building or protective nutrients; add fish or beans and greens or fruit whenever possible." },
    { q: "Why is clean drinking water part of good nutrition?", a: "Because the body needs water for every process, and dirty water causes disease that stops the body using its food." }
  ],
  sort: {
    title: "Food groups",
    groups: [
      { name: "Energy foods", items: ["rice", "cassava", "plantain", "palm oil"] },
      { name: "Body building foods", items: ["fish", "beans", "eggs", "meat"] },
      { name: "Protective foods", items: ["potato greens", "mango", "orange", "pawpaw"] }
    ]
  },
  compare: {
    title: "Nutrients and their work",
    caption: "Complete the table with the work of each nutrient and a food that supplies it.",
    items: [
      { p: "Carbohydrate", f: "Gives the body energy; found in rice, cassava and plantain." },
      { p: "Protein", f: "Builds and repairs the body; found in fish, beans, eggs and meat." },
      { p: "Vitamins", f: "Protect health and help the body work; found in fruit and green leaves." },
      { p: "Minerals", f: "Build bones, blood and teeth; found in greens, fish and milk." },
      { p: "Water", f: "Needed for every body process, including digestion and cooling." }
    ]
  },
  casestudy: {
    title: "The morning bowl",
    text: "The Grade Four teacher noticed that the same six pupils always struggled in the last hour before lunch — heads on desks, no answers, nothing written. She asked, quietly and one at a time, what they had eaten that morning. All six had eaten nothing. She spoke to the PTA. The parents could not fund a full school feeding programme, but they agreed that each family would contribute a small cup of rice a week, and two mothers volunteered to cook a simple porridge each morning. It cost almost nothing. Within a month the teacher's register showed better attendance, and by the end of term the six pupils in question were no longer the last in the class.",
    questions: [
      { q: "What did the teacher notice, and what was the cause?", a: "Six pupils struggled in the late morning because they had eaten nothing before school." },
      { q: "What solution did the PTA reach?", a: "Each family contributed a small cup of rice a week and two mothers cooked a morning porridge." },
      { q: "What does this show about nutrition and learning?", a: "That even a small, cheap improvement in nutrition can significantly improve attendance and school performance." }
    ]
  },
  project: {
    title: "A week of balanced meals",
    brief: "Plan a week of balanced meals from locally available food.",
    steps: [
      "Rule a table with seven days and three meals.",
      "Plan each meal to include an energy, a body building and a protective food.",
      "Use only foods available in your community.",
      "Mark the nutrient group beside each item.",
      "Discuss with your family which meals are affordable and adjust the plan."
    ],
    criteria: ["all seven days planned", "all three groups in each meal", "local foods used", "realistic and affordable plan"]
  },
  activities: [
    "Label the parts of the body and explain their roles and body types",
    "Group work: one group defines nutrition, the other nutrients; list the three food groups and their nutrients",
    "Discuss food deficiency and the importance of a balanced diet",
    "Manipulative games and gymnastic activities"
  ],
  materials: ["Charts", "Posters", "Food samples or pictures", "Whistle", "Mat"],
  assessment: ["Individual presentation", "Group presentation", "Class participation", "Written exercise"]
},

/* ============================ GRADE 5 ============================ */
{
  grade: 5, period: "I", sem: "One", icon: "🏐",
  title: "Physical Education, Sport and Exercise",
  subtitle: "Contributors to modern P.E., deltoid raises and volleyball",
  outcomes: ["Learners are able to discuss physical education and participate in games and sporting activities."],
  objectives: ["Discuss Physical Education, its history and importance", "Name the peoples who contributed to modern physical education", "Perform deltoid raise exercises", "Participate in volleyball and other games"],
  note: "Modern physical education draws on many traditions: the Greeks who built gymnasia and the Olympics, the Romans who trained for the army, and later European and American educators who brought P.E. into schools.",
  study:[
    /* ---- course text: Semester One, Period I — Physical Education, Sport and Exercise (guide pp. 50-52) ---- */
    {k:"h3", t:"Contributors to Modern Physical Education"},
    {k:"p", t:"**Physical Education** is the study of the body in motion. Its **history** was shaped by several peoples who contributed to what we practise today:"},
    {k:"table", head:["Contributors","What they gave physical education"], rows:[
      ["The Greeks","The Olympic Games and the ideal of a trained body serving a trained mind"],
      ["The Romans","Military drill, marching and public games in the arenas"],
      ["The Americans","Organized school and college sports such as basketball and volleyball"],
      ["The Europeans","Gymnastics systems, school P.E. programmes and modern games like football"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Exercise — Deltoid Raises"},
    {k:"p", t:"**Deltoid raises** develop your **deltoids**, the roundish muscles that form the shape of your shoulders. The deltoid has three parts to work — **anterior (front)**, **lateral (side)** and **posterior (back)**."},
    {k:"p", t:"**Anterior Deltoid** — learners stand with arms at their sides and elbows extended, holding a dumbbell in each hand. With palms down and arms straight, raise your right arm until it is level with your shoulder in front of you. Lower the weight to the starting position and repeat the exercise using your left arm. The **lateral raise** lifts the arm out to the side; the **posterior raise** works the back of the shoulder."},
    {k:"rule"},
    {k:"h3", t:"Sport — Volleyball"},
    {k:"p", t:"Volleyball has a **history** (invented as a gentle indoor game), **rules** (a team may touch the ball at most three times before returning it over the net), **court dimensions** (a rectangle divided by a high net) and **skills and techniques** — chief among them the service:"},
    {k:"p", t:"**Underhand Service** — for a right-hand player, put your left foot slightly in front of the right foot. The weight is on the rear foot and the body is bent forward slightly. The ball is held in the palm of the left hand in a ready position in front of the right knee. The right arm is extended backward and upward; as the right arm swings down and forward, a small step is taken as the weight shifts to the front foot. **The ball is hit with the heel of the right hand or the side of the fist. Immediately before the hand contacts the ball, the ball is released out of the left hand.**"},
    {k:"rule"},
    {k:"h3", t:"Games"},
    {k:"p", t:"**Rattlesnake and Bumblebee (classroom game).** Learners are seated at desks; take two small objects and two equal teams. One player is chosen from each team and sent out of the room. While the two players are out, team players hide the two articles (team A hides for team B and vice versa). The two learners return and begin looking for their articles. Members of either team 'buzz' or 'hiss' according to how close each player is to his object. Repeat with two new 'finders'. **One point is awarded to the learner, and his team, who finds the object first.**"},
    {k:"p", t:"**Open the Window (loco-motor game)** — the circle opens a 'window' gap for the runner to dash through before it closes. **Trick the Guard (manipulative game)** — pass the object among the team to trick the guard and slip it past him to score."}
  ],
  focus: ["Definition, history and importance of Physical Education", "Contributors: Greeks, Romans, Americans, Europeans", "Exercise: anterior, lateral and posterior deltoid raises", "Volleyball: history, rules and court dimensions", "Classroom, loco-motor and manipulative games"],
  terms: [
    { t: "gymnasium", d: "a place built for exercise and training", x: "The Greeks trained in a gymnasium." },
    { t: "contributor", d: "someone who helped to develop something", x: "The Greeks were major contributors to physical education." },
    { t: "deltoid raise", d: "an exercise raising the arms to develop the shoulder muscles", x: "Deltoid raises are done with dumbbells." },
    { t: "anterior", d: "at the front", x: "The anterior deltoid is at the front of the shoulder." },
    { t: "lateral", d: "at the side", x: "The lateral deltoid is at the side of the shoulder." },
    { t: "posterior", d: "at the back", x: "The posterior deltoid is at the back of the shoulder." },
    { t: "volleyball", d: "a sport in which two teams hit a ball over a net", x: "Volleyball is played with six players a side." },
    { t: "underhand service", d: "a serve in volleyball hit from below with the heel of the hand", x: "Beginners learn the underhand service first." },
    { t: "court", d: "the marked playing area of a game", x: "The volleyball court is marked with clear lines." },
    { t: "rally", d: "the play from the serve until the point is decided", x: "That was a long rally." }
  ],
  facts: [
    { q: "Name four peoples who contributed to modern physical education.", a: "The Greeks, the Romans, the Europeans and the Americans." },
    { q: "What did the Greeks contribute?", a: "Organised athletics, the gymnasium and the Olympic Games." },
    { q: "What did the Romans contribute?", a: "Physical training for the army and organised public games and contests." },
    { q: "Name the three parts of the deltoid muscle.", a: "Anterior (front), lateral (side) and posterior (back)." },
    { q: "Describe the anterior deltoid raise.", a: "Stand with arms at the sides holding a weight, palms down, and raise one straight arm forward to shoulder level, then lower and repeat with the other arm." },
    { q: "How many players are in a volleyball team on court?", a: "Six." },
    { q: "Describe the underhand service.", a: "For a right-handed player, left foot slightly forward, ball in the left palm in front of the right knee, right arm swings back then down and forward to strike the ball with the heel of the hand." },
    { q: "What is a rally in volleyball?", a: "The play from the serve until the point is decided." }
  ],
  tf: [
    { s: "The Olympic Games began with the Greeks.", a: "true", why: "The ancient Olympics were a Greek institution." },
    { s: "The deltoid has three parts: anterior, lateral and posterior.", a: "true", why: "They are the front, side and back parts of the shoulder muscle." },
    { s: "In the underhand service the ball is struck with the fingertips.", a: "false", why: "It is struck with the heel of the hand or the side of the fist." },
    { s: "The Romans used physical training for their army.", a: "true", why: "Military fitness was a Roman priority." },
    { s: "A volleyball team has eleven players on court.", a: "false", why: "A volleyball team has six players on court." },
    { s: "Physical education developed from many traditions.", a: "true", why: "Greek, Roman, European and American influences all contributed." }
  ],
  apply: [
    { q: "Your school cannot afford dumbbells for deltoid raises. What can you use?", a: "Filled water bottles, small sandbags or stones of equal weight, or bodyweight arm raises held for time." },
    { q: "Which deltoid part is worked by raising the arms straight out to the sides?", a: "The lateral (side) deltoid." },
    { q: "A beginner's serve keeps going into the net. What should she correct?", a: "Contact the ball lower and swing further through, keeping the ball in front and transferring weight onto the front foot." },
    { q: "Why is it useful to know the history of physical education?", a: "It shows why P.E. is valued — for health, for readiness, for education and for competition — and how ideas travelled between cultures." },
    { q: "How would you mark out a volleyball court with no proper equipment?", a: "Measure with a tape or rope, mark the lines with chalk or ash, and use a rope between two poles as a net." }
  ],
  sort: {
    title: "Contributors and their contributions",
    groups: [
      { name: "Ancient contributions", items: ["the gymnasium", "the Olympic Games", "military training", "public games"] },
      { name: "Modern contributions", items: ["P.E. in school timetables", "organised sports leagues", "physical fitness testing", "coaching methods"] }
    ]
  },
  compare: {
    title: "The three deltoid raises",
    caption: "Complete the table describing each exercise.",
    items: [
      { p: "Anterior deltoid raise", f: "Raise the straight arm forward to shoulder level; works the front of the shoulder." },
      { p: "Lateral deltoid raise", f: "Raise the straight arms out to the sides to shoulder level; works the side of the shoulder." },
      { p: "Posterior deltoid raise", f: "Bend forward and raise the arms backward and outward; works the back of the shoulder." },
      { p: "Why all three", f: "Training all three parts gives balanced, strong and injury-resistant shoulders." }
    ]
  },
  casestudy: {
    title: "The rope net",
    text: "Grade Five at a school outside Gbarnga had studied volleyball on paper for two years without ever touching a ball. The rules were memorised; the court dimensions were copied into every exercise book. Then a new teacher arrived and asked a blunt question: what exactly was stopping them? They had no net and no ball. Over one weekend the class solved it. Two boys' fathers put up poles. The girls plaited a net from old fishing line and rope. A ball was borrowed from the church youth group. The court was measured with a tape and marked out with ash. On the Monday, the class played their first real game, badly, and with enormous enjoyment. Within a year the school had a team that reached the county semi-final.",
    questions: [
      { q: "What was the problem with how volleyball had been taught before?", a: "It was taught entirely on paper, with rules and dimensions memorised without ever playing." },
      { q: "How did the class create the equipment they needed?", a: "Fathers put up poles, the girls plaited a net from fishing line and rope, a ball was borrowed and the court was marked with ash." },
      { q: "What does this show about learning a sport?", a: "That practical participation is essential; knowledge of the rules alone does not make players." }
    ]
  },
  project: {
    title: "Mark out a volleyball court",
    brief: "Measure, mark and label a volleyball court.",
    steps: [
      "Find the correct court dimensions from your notes.",
      "Measure and mark the court on the school ground.",
      "Mark the centre line and attack lines.",
      "Draw a scale diagram of the court in your exercise book, with measurements.",
      "Write out five basic rules of the game beside your diagram."
    ],
    criteria: ["court measured accurately", "all lines marked", "scale diagram with measurements", "five correct rules"]
  },
  activities: [
    "Group discussion on the history and importance of physical education, exercise and sport",
    "Deltoid raises: anterior, lateral and posterior",
    "Volleyball: underhand service technique and court dimensions",
    "Games: Rattlesnake and Bumblebee, Open the Window and Trick the Guard"
  ],
  materials: ["P.E. handbook", "Stopwatch", "Whistle", "Volleyball", "Net or rope", "Measuring tape"],
  assessment: ["Individual presentation", "Group presentation", "Class participation", "Practical demonstration"]
},

{
  grade: 5, period: "II", sem: "One", icon: "📋",
  title: "Physical Fitness Screening",
  subtitle: "The Cooper 12-minute run, flexibility and endurance, and track and field",
  outcomes: ["Learners are able to discuss physical screening and demonstrate exercise, sport and various types of screening."],
  objectives: ["Discuss physical screening", "Demonstrate the Cooper 12-minute run", "Perform flexibility and endurance exercises", "Take part in track and field events"],
  note: "Track and field is the oldest organised sport. It divides into track events, races run on the track, and field events, the jumping and throwing contests held on the field.",
  study:[
    /* ---- course text: Semester One, Period II — Physical Fitness Screening (guide pp. 53) ---- */
    {k:"h3", t:"Screening — the Cooper 12-Minute Run"},
    {k:"p", t:"**Physical fitness screening** tests the body's condition before training. **Body screening** this term centres on the **Cooper 12-Minute Run**: run (and walk when you must) for exactly twelve minutes, and measure the distance you cover. The farther you run in twelve minutes, the greater your **endurance** — the heart-lung staying power all sports depend on."},
    {k:"rule"},
    {k:"h3", t:"Exercises — Flexibility and Endurance"},
    {k:"p", t:"Two fitness qualities are exercised this period. **Flexibility** is the ability of the joints and muscles to bend and stretch through their full range. **Endurance** is the ability to keep working for a long time without exhaustion."},
    {k:"p", t:"**Sit-Ups** — learners sit on the floor with legs folded, lie on the floor facing upward with hands held behind the head. On the count of two, learners rise up with hands still held behind the head until the face touches the knees, then lie back. Repeat on counts; record the repetitions as part of screening."},
    {k:"rule"},
    {k:"h3", t:"Sport — Track and Field"},
    {k:"p", t:"Athletics divides into two families of events:"},
    {k:"bul", items:["**Track events** — the races run on the track: sprints such as the 100 m, middle- and long-distance runs, hurdling and the relays","**Field events** — the jumps and throws on the field: long jump, high jump, shot put, discus and javelin"]},
    {k:"p", t:"**The (100m) Run** — learners line up horizontally. On a count, they run as fast as they can to the hundred-metre distance. Sprinters wear spikes (track shoes) for grip on the track."}
  ],
  focus: ["Definition of physical fitness", "Body screening: Cooper 12-minute run", "Exercises: flexibility and endurance", "Track and field: track events and field events"],
  terms: [
    { t: "track event", d: "a running or walking race held on the track", x: "The 100 metres is a track event." },
    { t: "field event", d: "a jumping or throwing contest held on the field", x: "The long jump is a field event." },
    { t: "sprint", d: "a short race run at top speed", x: "The 100m sprint is over in seconds." },
    { t: "endurance event", d: "a long race testing stamina", x: "The 1500m is an endurance event." },
    { t: "sit-up", d: "an exercise raising the trunk from lying to sitting", x: "Sit-ups strengthen the abdominal muscles." },
    { t: "flexibility exercise", d: "an exercise that increases the range of movement at a joint", x: "Stretching is a flexibility exercise." },
    { t: "lane", d: "the marked strip a runner must stay in", x: "Stay in your lane in a sprint." },
    { t: "false start", d: "starting before the signal is given", x: "A false start means restarting the race." },
    { t: "finish line", d: "the line marking the end of a race", x: "Lean forward at the finish line." },
    { t: "spike", d: "a track shoe with points for grip", x: "Sprinters wear spikes for grip." }
  ],
  facts: [
    { q: "What is the difference between a track event and a field event?", a: "Track events are races run on the track; field events are jumping and throwing contests on the field." },
    { q: "Name two track events.", a: "Any two: the 100m, 200m, 400m, 800m, 1500m and relay races." },
    { q: "Name two field events.", a: "Any two: long jump, high jump, triple jump, shot put and javelin." },
    { q: "What does the Cooper 12-minute run measure?", a: "How far you can run in twelve minutes, testing cardiovascular endurance." },
    { q: "Describe a sit-up.", a: "Sit on the floor with legs folded, lie back with hands behind the head, and rise until the face comes towards the knees." },
    { q: "Why must runners stay in their lanes in a sprint?", a: "For fairness and safety, so that all run the same distance without interference." },
    { q: "What is a false start?", a: "Starting before the signal; the race must be restarted." },
    { q: "Give one flexibility and one endurance exercise.", a: "Flexibility: the toes touch or a hamstring stretch. Endurance: jogging or the 12-minute run." }
  ],
  tf: [
    { s: "The long jump is a field event.", a: "true", why: "Jumping and throwing contests are field events." },
    { s: "The 100m race is an endurance event.", a: "false", why: "It is a sprint, testing speed rather than endurance." },
    { s: "The Cooper test measures distance covered in twelve minutes.", a: "true", why: "That is how the test is scored." },
    { s: "Sit-ups mainly develop the arm muscles.", a: "false", why: "They develop the abdominal muscles." },
    { s: "A false start requires the race to be restarted.", a: "true", why: "Starting before the signal is unfair." },
    { s: "Runners may change lanes freely during a sprint.", a: "false", why: "They must stay in their lanes for fairness and safety." }
  ],
  apply: [
    { q: "Classify: 400m, high jump, relay, shot put.", a: "Track events: 400m and the relay. Field events: high jump and shot put." },
    { q: "A pupil does well in the sprint but poorly in the Cooper run. What should he train?", a: "Cardiovascular endurance: longer steady runs at a pace he can sustain, building the time gradually." },
    { q: "Design a warm-up specifically for a sprinting session.", a: "Light jogging, then leg swings and hip stretches, then two or three short accelerations at increasing speed." },
    { q: "Why is flexibility important for a jumper?", a: "It allows full range at the hips and legs, giving more powerful take-off and reducing injury risk." },
    { q: "How can a school run a fair sprint with no lane markings?", a: "Scratch or chalk straight lines the same length for each runner, use a single starter and one finish line, and run in small heats." }
  ],
  sort: {
    title: "Track and field events",
    groups: [
      { name: "Track events", items: ["100m", "400m", "800m", "relay race", "hurdles"] },
      { name: "Field events", items: ["long jump", "high jump", "triple jump", "shot put", "javelin"] }
    ]
  },
  compare: {
    title: "Fitness qualities and the events that need them",
    caption: "Complete the table with an event that mainly needs each quality.",
    items: [
      { p: "Speed", f: "Short sprints such as the 100m." },
      { p: "Endurance", f: "Long races such as the 1500m and the Cooper 12-minute run." },
      { p: "Power", f: "Jumping and throwing events such as the long jump and shot put." },
      { p: "Flexibility", f: "Hurdles and high jump, which need a wide range of movement." }
    ]
  },
  casestudy: {
    title: "Twelve minutes in the sun",
    text: "The Grade Five class scheduled their Cooper run for one o'clock, the hottest part of the day, because that was when the field was free. Halfway through, two pupils stopped with headaches and one had to sit in the shade for twenty minutes. Nobody was seriously ill, but the teacher was shaken. She wrote three rules on the board that afternoon and never broke them again: endurance testing before nine in the morning or after four in the afternoon; water available at the side of the field; and any pupil who feels dizzy stops immediately and is not questioned about it. The following term the class ran the same test at seven in the morning. Every single distance was longer than in the heat.",
    questions: [
      { q: "What went wrong with the first Cooper run?", a: "It was run at one o'clock in the heat; two pupils stopped with headaches and one needed twenty minutes in the shade." },
      { q: "What three rules did the teacher introduce?", a: "Test early or late in the day, keep water at the field, and let any dizzy pupil stop immediately without question." },
      { q: "What did the results the following term show?", a: "Every distance was longer when the test was run in the cool of the morning." }
    ]
  },
  project: {
    title: "Class athletics meeting",
    brief: "Plan a small athletics meeting with track and field events.",
    steps: [
      "Choose two track events and two field events.",
      "Write the rules and the measuring method for each.",
      "Draw the layout of the field showing where each event happens.",
      "List the officials needed and what each does.",
      "Run the meeting with your group and record all results."
    ],
    criteria: ["four events chosen with rules", "clear field layout", "officials listed with duties", "results recorded accurately"]
  },
  activities: [
    "Discuss the importance of physical fitness screening, exercise and sport",
    "Sit-ups: lie facing upward, hands behind the head, rise until the face touches the knees",
    "Cooper 12-minute run on a measured course",
    "Track and field: 100m run, plus flexibility and endurance exercises"
  ],
  materials: ["Stopwatch", "Measuring tape", "Assessment forms", "Whistle", "Track markers"],
  assessment: ["Individual presentation", "Group presentation", "Class participation", "Practical demonstration"]
},

{
  grade: 5, period: "III", sem: "One", icon: "🩹",
  title: "First Aid and Safety",
  subtitle: "Priorities in an emergency, wounds, poisoning and common emergencies",
  outcomes: ["Learners are able to define first aid, identify the priorities in responding to an emergency, list safety rules, and differentiate between the types of wounds and their treatment."],
  objectives: ["Define First Aid", "Identify the priorities in responding to an emergency", "List safety rules", "Differentiate between the types of wounds and know the first aid treatment for each", "Describe the treatment of poisoning and common emergencies"],
  note: "In any emergency there is an order of priorities: rescue promptly, check breathing, control severe bleeding, and give first aid for poisoning. Doing them in the wrong order costs lives.",
  study:[
    /* ---- course text: Semester One, Period III — First Aid and Safety (guide pp. 54-55) ---- */
    {k:"h3", t:"First Aid and the Priorities in an Emergency"},
    {k:"p", t:"**First aid** is the immediate, temporary care of an injured or suddenly ill person before medical help arrives. The first decision in an emergency is **whether to move the victim or not — only do it when necessary**. The priorities in responding, in order:"},
    {k:"num", items:["**Rescue promptly** — move a victim immediately from a water incident, from a room containing smoke, or from a car that might catch fire.","**Check breathing** — ensure the victim has an open airway, that is, by giving mouth-to-mouth artificial respiration where breathing has stopped.","**Control severe bleeding** — apply direct pressure with the palm of the hand (or an ice block) over the wound in order to stop the bleeding.","**Give first aid for poisoning** — identify the poison and rush the victim to medical care."]},
    {k:"rule"},
    {k:"h3", t:"Types of Wounds"},
    {k:"bul", items:["**Abrasion** — a scrape that rubs the skin's surface","**Incision** — a clean cut, as made in surgery","**Laceration** — a jagged tear of the flesh","**Puncture** — a deep, narrow wound from a pointed object","**Avulsion** — tissue torn away or hanging by a flap"]},
    {k:"rule"},
    {k:"h3", t:"Administering First Aid — the Four Steps for Wounds"},
    {k:"num", items:["**Stop the bleeding immediately**","**Protect the wound from contamination and infection**","**Treat the victim for shock**","**Seek medical care immediately**"]},
    {k:"rule"},
    {k:"h3", t:"Poisonings"},
    {k:"bul", items:["**By swallowing** — poisons taken through the mouth: keep the container, note what was swallowed, and get medical help at once","**Animal bite** — from a snake or a mad dog: keep the victim still, wash the bite, and rush the victim to the hospital"]},
    {k:"rule"},
    {k:"h3", t:"Common Emergencies"},
    {k:"table", head:["Emergency","First aid"], rows:[
      ["Nosebleeds","Sit the victim up, lean the head forward, and pinch the soft part of the nose"],
      ["Bee stings","Remove the sting, wash the spot, and apply a cold compress"],
      ["Sprains","Rest the joint and apply ice — the RICE method"],
      ["Strains","Rest the overstretched muscle and apply a cold pack"],
      ["Burns","Cool under clean running water; never apply oil; cover with a clean dressing"]
    ]}
  ],
  focus: ["Definition of first aid", "Priorities in an emergency", "Types of wounds", "Administering first aid: the four steps", "Poisonings", "Common emergencies: nosebleeds, bee stings, sprains, strains and burns"],
  terms: [
    { t: "priority", d: "the thing that must be done first", x: "Breathing is the first priority after rescue." },
    { t: "rescue", d: "moving a victim out of immediate danger", x: "Rescue promptly from water or smoke." },
    { t: "airway", d: "the passage through which air reaches the lungs", x: "Make sure the victim has an open airway." },
    { t: "artificial respiration", d: "breathing for a victim who has stopped breathing", x: "Mouth-to-mouth artificial respiration may be needed." },
    { t: "severe bleeding", d: "heavy loss of blood that must be stopped at once", x: "Control severe bleeding with direct pressure." },
    { t: "direct pressure", d: "pressing firmly on a wound to stop bleeding", x: "Apply direct pressure with the palm." },
    { t: "poisoning", d: "harm caused by a dangerous substance entering the body", x: "Poisoning may happen by swallowing or by an animal bite." },
    { t: "sprain", d: "an injury to the ligaments of a joint", x: "A sprained ankle is swollen and painful." },
    { t: "strain", d: "an injury to a muscle or tendon from over-stretching", x: "He strained a muscle in his thigh." },
    { t: "bee sting", d: "an injury from a bee's sting, which may cause swelling", x: "Remove the sting and apply something cold." }
  ],
  facts: [
    { q: "Define first aid.", a: "The immediate temporary care given to a person who has become sick or has been injured." },
    { q: "List the four priorities in an emergency.", a: "Rescue promptly; check breathing; control severe bleeding; give first aid for poisoning." },
    { q: "Name three situations requiring prompt rescue.", a: "A water incident, a room containing smoke or toxic fumes, and a car that might catch fire." },
    { q: "How do you check breathing?", a: "Ensure the victim has an open airway, and if not breathing, give mouth-to-mouth artificial respiration." },
    { q: "How is severe bleeding controlled?", a: "By applying direct pressure with the palm of the hand over the wound, and elevating the part if possible." },
    { q: "List the five types of wound.", a: "Abrasion, incision, laceration, puncture and avulsion." },
    { q: "Give the four steps in applying first aid to wounds.", a: "Stop the bleeding immediately; protect the wound from contamination and infection; treat the victim for shock; seek medical care immediately." },
    { q: "Name two ways poisoning can occur.", a: "By swallowing a poison, and by an animal bite." },
    { q: "Name four common emergencies.", a: "Nosebleeds, bee stings, sprains, strains and burns." }
  ],
  tf: [
    { s: "Checking breathing comes before controlling severe bleeding.", a: "true", why: "Without breathing the victim dies within minutes." },
    { s: "You should always move an injured person immediately.", a: "false", why: "Move a victim only when necessary to save life." },
    { s: "Direct pressure with the palm helps control severe bleeding.", a: "true", why: "It is the standard method." },
    { s: "Poisoning can only happen by swallowing.", a: "false", why: "It can also occur through an animal bite, breathing fumes or absorption." },
    { s: "A sprain is an injury to a joint's ligaments.", a: "true", why: "A strain, by contrast, affects a muscle or tendon." },
    { s: "The victim should be allowed to walk around after a serious injury.", a: "false", why: "Keep the victim still to prevent worsening the injury or shock." }
  ],
  apply: [
    { q: "You find a person unconscious in a smoke-filled room. Give your actions in order.", a: "Call for help, protect myself, rescue promptly from the smoke, check the airway and breathing, give artificial respiration if trained and needed, then control bleeding and get medical care." },
    { q: "Distinguish between a sprain and a strain, and give first aid for each.", a: "A sprain injures a joint's ligaments; a strain injures a muscle or tendon. Both are treated by RICE: rest, ice, compression and elevation." },
    { q: "A child has swallowed kerosene. What must you not do, and what must you do?", a: "Do not make him vomit; keep him calm and upright, do not give food, and get him to a clinic immediately with the container if possible." },
    { q: "Someone is stung by bees near the school garden. What do you do?", a: "Move everyone away calmly, remove the sting by scraping, apply something cold, and watch for severe swelling or breathing difficulty, which needs urgent medical care." },
    { q: "Why is treating the victim for shock one of the four steps?", a: "Because shock can kill even when the wound itself is not fatal; keeping the victim warm, still and reassured helps prevent it." }
  ],
  sort: {
    title: "Emergency priorities and common emergencies",
    groups: [
      { name: "Immediate life-saving priorities", items: ["rescue promptly", "check breathing", "control severe bleeding", "first aid for poisoning"] },
      { name: "Common emergencies", items: ["nosebleed", "bee sting", "sprain", "strain", "burn"] }
    ]
  },
  compare: {
    title: "Common emergencies and their first aid",
    caption: "Complete the table with the correct treatment.",
    items: [
      { p: "Nosebleed", f: "Sit up, lean slightly forward, pinch the soft part of the nose for ten minutes." },
      { p: "Bee sting", f: "Scrape out the sting, apply something cold, and watch for severe reaction." },
      { p: "Sprain", f: "Rest, Ice, Compression, Elevation." },
      { p: "Strain", f: "Rest the muscle, apply cold, and avoid using it until it heals." },
      { p: "Burn", f: "Cool under clean running water, cover loosely, never apply oil or ointment." }
    ]
  },
  casestudy: {
    title: "The order of things",
    text: "A motorbike came off the road outside the school gate. Three teachers reached the rider at the same time. One immediately began pressing a cloth to the deep cut on his leg. The second started asking the crowd who owned the bike. The third, an older woman who had trained as a nurse's aide years before, knelt at the rider's head, tilted his chin gently, and only then said, quietly, that he was breathing. She then took over the leg. Afterwards she explained to the staff why she had checked the airway first even though the leg was bleeding dramatically. The bleeding was frightening, she said, but a blocked airway kills in four minutes, and she did not yet know whether he had one.",
    questions: [
      { q: "What did each of the three responders do first?", a: "One pressed on the bleeding leg, one questioned the crowd, and the third checked the airway and breathing." },
      { q: "Why did the trained responder check the airway before the bleeding?", a: "Because a blocked airway kills within about four minutes, and she did not yet know whether he was breathing." },
      { q: "What is the correct order of emergency priorities?", a: "Rescue promptly, check breathing, control severe bleeding, then treat poisoning and other injuries." }
    ]
  },
  project: {
    title: "Emergency action plan",
    brief: "Write an emergency action plan for your school.",
    steps: [
      "List the four priorities in order, with what to do for each.",
      "Write down who to call and where the first aid kit is kept.",
      "List five common emergencies and their treatment.",
      "Write five school safety rules that would prevent these emergencies.",
      "Present the plan to your class and give a copy to the principal."
    ],
    criteria: ["priorities in correct order", "contact and kit details included", "five emergencies treated correctly", "five preventive safety rules"]
  },
  activities: [
    "Discuss first aid, priorities in an emergency, types of wounds, the four steps, poisonings and common emergencies",
    "Demonstrate the decision whether to move a victim, and safe removal from danger",
    "Practise checking the airway and controlling bleeding by direct pressure",
    "Role-play a full emergency response in groups"
  ],
  materials: ["First aid kit", "Gloves", "Bandage", "Soap", "Water", "Alcohol"],
  assessment: ["Individual presentation", "Group presentation", "Class participation", "Practical demonstration"]
},

{
  grade: 5, period: "IV", sem: "Two", icon: "⚡",
  title: "Basic Speed and Power Exercises",
  subtitle: "Sprinting, peak power and medicine ball training",
  outcomes: ["Learners are able to identify the person with the highest peak power output, discuss basic speed and power exercises, develop speed and power, and demonstrate various kinds of games and exercises."],
  objectives: ["Define sprinting and identify kinds of sprints", "Identify the person with the highest peak power output", "Discuss basic speed and power exercises", "Develop speed and power", "Demonstrate games, speed and power exercises"],
  note: "Speed is how fast you can move. Power is strength applied quickly. A sprinter needs both: strong legs and the ability to use that strength in a fraction of a second.",
  study:[
    /* ---- course text: Semester Two, Period IV — Basic Speed and Power Exercises (guide pp. 56-57) ---- */
    {k:"h3", t:"Sprinting and the Kinds of Sprints"},
    {k:"p", t:"**Sprinting** is running at full speed over a short distance. **Speed** covers the ground quickly; **power** adds force to the speed. The person whose body releases the most force in the shortest time has the highest **peak power output**."},
    {k:"bul", items:["**Sprint Starts, Running** — the crouch start from the marks","**Sprint Starts, Swimming** — the dive or push-off start used in the pool","**Short Sprints** — repeated bursts of 30-60 metres at full effort","**Downhill Sprinting** — sprinting down a gentle slope to teach the legs faster turnover"]},
    {k:"rule"},
    {k:"h3", t:"Sprint Starts, Running — How to Get in Position"},
    {k:"num", items:["**'On your marks'** — kneel down with feet staggered 10-14 inches apart, the front foot placed about 20 inches from the starting line. (Right-handed people start with their left foot forward.)","**'Set'** — raise your back and hips. Your front leg bends about 90 degrees, and your rear leg bends about 120 degrees. Your back is flat, and your hips are slightly higher than your shoulders. You touch the ground with your fingertips, which raises your shoulders as high as possible — do not put too much weight on your fingertips.","**'GO'** — raise your shoulder so that you can direct force with your front driving leg through the length of your body. Move with the fastest speed you have to reach the required distance. First to reach the line wins."]},
    {k:"rule"},
    {k:"h3", t:"Peak Power Training"},
    {k:"p", t:"**Stationary bicycle training (ergometer)** — set the frictional resistance on the bicycle. Warm up by pedalling at an easy pace for 2 minutes. Then ride as fast as you can for 1 minute, and count the pedal revolutions — the count measures your peak power output."},
    {k:"p", t:"**Peak power weight training** — lifting moderate weights with fast, controlled movements builds the explosive strength of the legs and shoulders. **Medicine ball exercises** — throwing, catching and sweeping the heavy medicine ball (play catch with yourself or a partner) develop whole-body power."},
    {k:"rule"},
    {k:"h3", t:"Games"},
    {k:"p", t:"Play **catch with yourself/partner** using the medicine ball, and **Mouse and Cheese (loco-motor game)** — the mice may leave their holes only to snatch the 'cheese' and dart back before the cat tags them; speed and timing decide who eats."}
  ],
  focus: ["Definition of sprinting and kinds of sprints", "Peak power: stationary bicycle training", "Peak power weight training", "Medicine ball exercises", "Loco-motor games"],
  terms: [
    { t: "sprint", d: "a run at maximum speed over a short distance", x: "The 100m is the classic sprint." },
    { t: "speed", d: "how quickly the body can move from one place to another", x: "Speed is trained with short fast efforts." },
    { t: "power", d: "strength applied quickly; force combined with speed", x: "Jumping high needs power." },
    { t: "peak power output", d: "the greatest power a person can produce in a very short burst", x: "Sprinters have a high peak power output." },
    { t: "acceleration", d: "increasing speed", x: "Acceleration is decisive in the first metres of a sprint." },
    { t: "medicine ball", d: "a heavy ball used for strength and power training", x: "Medicine ball throws build explosive power." },
    { t: "stationary bicycle", d: "a fixed cycle used for training and testing", x: "Peak power can be tested on a stationary bicycle." },
    { t: "weight training", d: "training with weights to build strength and power", x: "Weight training must be properly supervised." },
    { t: "explosive", d: "producing great force very suddenly", x: "The frog jump is an explosive movement." },
    { t: "reaction time", d: "the time between the signal and the start of movement", x: "Sprinters train reaction time at the start." }
  ],
  facts: [
    { q: "Define sprinting.", a: "Running at maximum speed over a short distance." },
    { q: "What is power?", a: "Strength applied quickly: force combined with speed." },
    { q: "What is peak power output?", a: "The greatest power a person can produce in a very short burst." },
    { q: "Which athletes usually have the highest peak power output?", a: "Sprinters and other explosive athletes such as jumpers and weightlifters." },
    { q: "Name three ways of training power.", a: "Stationary bicycle sprints, peak power weight training and medicine ball exercises." },
    { q: "What is reaction time?", a: "The time between the starting signal and the beginning of movement." },
    { q: "Give two examples of explosive exercises with no equipment.", a: "The frog jump and the standing long jump; also fast squat jumps." },
    { q: "Why must young learners' weight training be supervised?", a: "Because poor technique or excessive weight can injure growing bones and joints." }
  ],
  tf: [
    { s: "Power means strength applied quickly.", a: "true", why: "It combines force and speed." },
    { s: "Sprinting is running over a long distance at a steady pace.", a: "false", why: "Sprinting is maximum speed over a short distance." },
    { s: "Medicine ball exercises can develop explosive power.", a: "true", why: "Throwing a heavy ball fast trains power." },
    { s: "Reaction time is unimportant in sprinting.", a: "false", why: "A fast reaction at the start can decide a short race." },
    { s: "Weight training for young learners should be supervised.", a: "true", why: "Poor technique or heavy loads can injure growing bodies." },
    { s: "Long slow jogging is the best way to train peak power.", a: "false", why: "Power is trained by short explosive efforts, not slow steady running." }
  ],
  apply: [
    { q: "Design a power training session using no equipment at all.", a: "For example: standing long jumps, frog jumps, squat jumps and fast 20 metre sprints, with full rest between efforts." },
    { q: "Why is full rest between sprints necessary in power training?", a: "Because power can only be produced when the muscles are fresh; tired efforts train endurance, not power." },
    { q: "Two runners have the same top speed but one wins every race. What might explain it?", a: "Better acceleration and reaction time: he reaches top speed sooner even though the top speed is equal." },
    { q: "How could you compare the peak power of two pupils with no machine?", a: "Use a standing long jump or vertical jump; both measure explosive leg power fairly with only a tape measure." },
    { q: "Why do sprinters do fewer repetitions than distance runners?", a: "Because each sprint must be at maximum effort, which is only possible a limited number of times before quality falls." }
  ],
  sort: {
    title: "Speed and power training",
    groups: [
      { name: "Speed and power exercises", items: ["short sprints", "standing long jump", "medicine ball throw", "squat jump"] },
      { name: "Endurance exercises", items: ["12-minute run", "long jogging", "steady cycling", "distance walking"] }
    ]
  },
  compare: {
    title: "Speed, power and endurance",
    caption: "Complete the table comparing these qualities.",
    items: [
      { p: "Speed", f: "How fast the body moves; trained with short maximum-effort sprints." },
      { p: "Power", f: "Strength applied quickly; trained with jumps, throws and explosive lifts." },
      { p: "Endurance", f: "The ability to continue for a long time; trained with steady prolonged effort." },
      { p: "Rest needed", f: "Full recovery between efforts for speed and power; shorter rests for endurance work." }
    ]
  },
  casestudy: {
    title: "Ten metres",
    text: "Musu was the fastest girl in Grade Five over 100 metres, but she lost the county 60 metre final to a girl she had beaten easily the month before. Her coach filmed nothing, owned no equipment, and had no science. What he did have was a stopwatch and a piece of chalk. He marked the track at ten metres, twenty, forty and sixty, and timed her at each. The numbers showed the problem exactly: she was slower than her rival to ten metres and to twenty, and faster after forty. She was not slow. She was slow to start. For six weeks they worked only on the first three strides and the reaction to the whistle. She won the rematch by a metre.",
    questions: [
      { q: "What was Musu's actual weakness?", a: "Her acceleration and reaction: she was slow over the first twenty metres, though faster later." },
      { q: "How did the coach diagnose it with almost no equipment?", a: "He chalked marks at ten, twenty, forty and sixty metres and timed her at each point." },
      { q: "What does this show about training?", a: "That measuring the right thing identifies the real problem, and training can then be targeted rather than general." }
    ]
  },
  project: {
    title: "Measure your power",
    brief: "Test and improve your explosive leg power over four weeks.",
    steps: [
      "Measure your standing long jump three times and record the best.",
      "Train explosive jumps twice a week, with full rest between efforts.",
      "Keep a log of every session.",
      "Re-measure your standing long jump after four weeks.",
      "Calculate your improvement in centimetres and report it."
    ],
    criteria: ["baseline measured properly", "eight sessions logged", "full rest observed and noted", "improvement calculated correctly"]
  },
  activities: [
    "Discuss kinds of sprints, peak power output, and basic speed and power exercises",
    "Medicine ball exercises and peak power weight training with supervision",
    "Stationary bicycle or substitute training for peak power",
    "Loco-motor games and short sprint drills"
  ],
  materials: ["Stopwatch", "Measuring tape", "Medicine ball or substitute", "Whistle", "Markers"],
  assessment: ["Individual presentation", "Group presentation", "Class participation", "Practical demonstration"]
},

{
  grade: 5, period: "V", sem: "Two", icon: "🧘",
  title: "Fitness Component: Flexibility",
  subtitle: "Whole body, lower body, trunk and back stretches",
  outcomes: ["Learners are able to discuss the flexibility component of physical education and demonstrate flexibility exercises."],
  objectives: ["Define flexibility", "Discuss flexibility as a component of fitness", "Demonstrate whole body stretches", "Demonstrate lower body, trunk and back stretches"],
  note: "Flexibility is the forgotten component of fitness. It prevents injury, improves posture and allows every other kind of training to be done properly. Stretch slowly, hold the position, and never bounce.",
  study:[
    /* ---- course text: Semester Two, Period V — Fitness Component: Flexibility (guide pp. 58-59) ---- */
    {k:"h3", t:"What Flexibility Is"},
    {k:"p", t:"**Flexibility** is the fitness component that lets the joints and muscles move through their full range — bending, twisting and reaching without strain. Good flexibility prevents injuries in sport, improves posture, and makes every other exercise easier. It is trained by **stretching** — slowly extending a muscle and holding the position."},
    {k:"rule"},
    {k:"h3", t:"Whole Body Stretches"},
    {k:"p", t:"**Good-Morning Stretch** — stand with feet shoulder-width apart, and reach up over your head with your arms extended fully. Try to extend your arms as much as possible — first one arm, then the other, then both arms. **Hold each stretch for at least 1 minute. Continue with 3 repetitions.**"},
    {k:"p", t:"**Good-Morning Stretch with Toes Touch** — stand with feet shoulder-width apart and reach up over your head with your arms extended fully — first one arm, then the other, then both arms. Then flex your knees slightly, bend over at the waist, and reach toward your toes. Reach down until you feel the stretch in your **hamstring muscles** (the backs of the thighs). Hold the stretch for 1 minute. Continue with 3 repetitions."},
    {k:"rule"},
    {k:"h3", t:"Lower Body, Trunk and Back Stretches"},
    {k:"p", t:"**Supine Alternate Hamstring Stretch** — lie on your back with both legs straight. Grasp the back of your right thigh and bring the knee to the chest — this segment is sometimes called the **knee-to-chest exercise**. Pull on your thigh until you feel a stretch in your lower back; hold the stretch for 1-2 minutes. Then extend your knee so that you feel a stretch in the back of your right hamstring muscles (the supine hamstring stretch). Hold the stretch, and return to the starting position. Repeat with the left leg."},
    {k:"p", t:"Rules of safe stretching: warm up first, move **slowly**, stretch to the point of gentle tension — **never bounce and never force a stretch into pain** — and hold each position for the time stated."}
  ],
  focus: ["Definition of flexibility", "Whole body stretches", "Lower body stretches", "Trunk and back stretches"],
  terms: [
    { t: "flexibility", d: "the range of movement possible at a joint", x: "Flexibility is a component of physical fitness." },
    { t: "stretch", d: "a movement that lengthens a muscle gently", x: "Hold each stretch for at least one minute." },
    { t: "hold", d: "to stay in the stretched position without moving", x: "Hold the stretch, do not bounce." },
    { t: "repetition", d: "one complete performance of the exercise", x: "Continue with three repetitions." },
    { t: "hamstring", d: "the large muscle at the back of the thigh", x: "The supine stretch works the hamstring." },
    { t: "supine", d: "lying on the back", x: "The supine hamstring stretch is done lying on the back." },
    { t: "good-morning stretch", d: "a standing stretch reaching the arms overhead", x: "Begin with the good-morning stretch." },
    { t: "knee-to-chest exercise", d: "bringing the knee to the chest while lying on the back", x: "The knee-to-chest exercise stretches the lower back." },
    { t: "range of motion", d: "how far a joint can move", x: "Stretching increases the range of motion." },
    { t: "warm muscle", d: "a muscle that has been gently exercised before stretching", x: "Stretch a warm muscle, never a cold one." }
  ],
  facts: [
    { q: "Define flexibility.", a: "The range of movement possible at a joint." },
    { q: "Give two benefits of good flexibility.", a: "It prevents injury and improves posture; it also allows fuller, more efficient movement." },
    { q: "Describe the good-morning stretch.", a: "Stand with feet shoulder width apart and reach up overhead with the arms fully extended, first one arm, then the other, then both, holding each stretch." },
    { q: "Describe the good-morning stretch with toes touch.", a: "After reaching overhead, flex the knees slightly, bend at the waist and reach toward the toes until the stretch is felt in the hamstrings; hold for one minute." },
    { q: "Describe the supine alternate hamstring stretch.", a: "Lie on the back with both legs straight, grasp the back of one thigh and bring the knee to the chest, then extend the knee to stretch the hamstring, hold, and return." },
    { q: "How long should a stretch be held?", a: "For at least one minute, or one to two minutes for the supine hamstring stretch." },
    { q: "How many repetitions are recommended for the good-morning stretch?", a: "Three repetitions." },
    { q: "Why should you never bounce while stretching?", a: "Bouncing can tear the muscle fibres and causes the muscle to tighten rather than lengthen." }
  ],
  tf: [
    { s: "Flexibility is the range of movement at a joint.", a: "true", why: "That is the definition." },
    { s: "Bouncing makes a stretch more effective.", a: "false", why: "Bouncing risks tearing the muscle and makes it tighten." },
    { s: "Stretches should be held, not rushed.", a: "true", why: "Holding allows the muscle to lengthen safely." },
    { s: "It is best to stretch cold muscles hard before any warm-up.", a: "false", why: "Stretch warm muscles; cold muscles are more easily injured." },
    { s: "The knee-to-chest exercise stretches the lower back.", a: "true", why: "Pulling the thigh in stretches the lower back." },
    { s: "Flexibility work is only for gymnasts.", a: "false", why: "Everyone benefits; it prevents injury and improves posture and daily movement." }
  ],
  apply: [
    { q: "Write a full flexibility routine covering the whole body, lower body, trunk and back.", a: "For example: good-morning stretch, then toes touch and supine hamstring stretch, then trunk twist, then knee-to-chest, each held one minute for three repetitions." },
    { q: "A pupil feels sharp pain during a stretch. What does that mean?", a: "That he has gone too far; a stretch should feel like tension, not pain, and he must ease back at once." },
    { q: "Why should stretching come after the warm-up rather than before it?", a: "Because warm muscles lengthen safely, while cold muscles are more easily torn." },
    { q: "How does poor flexibility affect a footballer?", a: "It shortens the stride, reduces kicking range and greatly increases the risk of muscle strains." },
    { q: "Design a two-minute flexibility break for pupils who sit all day.", a: "Stand and reach overhead, trunk twist to each side, gentle toe touch, and a shoulder and neck stretch, held gently and breathed through." }
  ],
  sort: {
    title: "Stretches by body area",
    groups: [
      { name: "Whole body and upper", items: ["good-morning stretch", "overhead reach", "shoulder stretch"] },
      { name: "Lower body", items: ["toes touch", "supine hamstring stretch", "calf stretch", "knee-to-chest"] },
      { name: "Trunk and back", items: ["trunk twist", "side bend", "lower back stretch"] }
    ]
  },
  compare: {
    title: "Key flexibility exercises",
    caption: "Complete the table with the method and the area stretched.",
    items: [
      { p: "Good-morning stretch", f: "Reach overhead with arms fully extended, one arm then both; stretches the whole upper body." },
      { p: "Good-morning with toes touch", f: "Add a slight knee bend and reach to the toes; stretches the hamstrings and back." },
      { p: "Supine alternate hamstring stretch", f: "Lying on the back, bring the knee to the chest then extend it; stretches lower back and hamstring." },
      { p: "Trunk twist", f: "Turn the upper body side to side; stretches the waist and back." }
    ]
  },
  casestudy: {
    title: "The two minutes nobody wanted",
    text: "The Grade Five football team hated stretching. Two minutes at the end of every training session felt like wasted time when they could be playing. Their coach kept a simple record in the back of his notebook: every muscle injury in the squad, with the date. In the first season, before he introduced the routine, he counted eleven pulled muscles across the team. He introduced the two minutes and enforced it, unpopular as it was. The second season he counted three. He showed the boys the two pages, side by side, and said nothing at all. They have not complained since, and the captain now leads the stretching himself when the coach is late.",
    questions: [
      { q: "Why did the team dislike the stretching routine?", a: "It took two minutes at the end of every session which they wanted to spend playing." },
      { q: "What record did the coach keep, and what did it show?", a: "A record of every muscle injury: eleven in the season before the routine, three in the season after." },
      { q: "Why did he say nothing when he showed them the pages?", a: "Because the evidence spoke for itself and was more persuasive than any argument." }
    ]
  },
  project: {
    title: "A flexibility programme",
    brief: "Build and follow a four-week flexibility programme.",
    steps: [
      "Measure your reach in a seated toe touch and record it.",
      "Choose six stretches covering the whole body.",
      "Perform them five times a week, holding each stretch properly.",
      "Log every session.",
      "Re-measure your reach and report the improvement."
    ],
    criteria: ["baseline measured", "six stretches covering all areas", "twenty sessions logged", "improvement measured and reported"]
  },
  activities: [
    "Discuss flexibility as a component of physical fitness and its benefits",
    "Good-Morning Stretch and Good-Morning Stretch with Toes Touch, three repetitions each",
    "Supine Alternate Hamstring Stretch, holding one to two minutes",
    "Trunk, back and lower body stretches in pairs"
  ],
  materials: ["Measurement scales", "Meter rule", "Assessment forms", "Mat", "Stopwatch"],
  assessment: ["Individual presentation", "Group presentation", "Class participation", "Practical demonstration"]
},

{
  grade: 5, period: "VI", sem: "Two", icon: "🚭",
  title: "The Human Body and its Relationship to Drugs and Exercise",
  subtitle: "Body types, motor skills, and the effects of alcohol and drug abuse",
  outcomes: ["Learners are able to describe the different parts of the human body, explain the roles of body parts in exercise, develop motor skills, list commonly abused drugs and alcohol, and explain ways to prevent abuse in society."],
  objectives: ["Describe different parts of the body and the three body types", "Develop motor skills", "Explain the effects of alcohol and drug abuse on health", "List some commonly abused drugs", "State ways of preventing alcohol and drug abuse"],
  note: "Drugs and alcohol damage exactly the systems that exercise builds: the heart, the lungs, the muscles and the brain. Refusing them is not weakness; it is protecting everything you have trained for.",
  study:[
    /* ---- course text: Semester Two, Period VI — The Human Body and its Relationship to Drugs and Exercise (guide pp. 60-61) ---- */
    {k:"h3", t:"Body Parts, Body Types and Motor Skills"},
    {k:"p", t:"Describe the different parts of the body and explain the **role** each part plays in exercise — legs run and jump, arms throw and pull, the heart pumps. Recall the three **body types (physiques)**: **mesomorph (thick, muscular)**, **ectomorph (slim)** and **endomorph (fat, round)**. Every physique benefits from exercise."},
    {k:"rule"},
    {k:"h3", t:"Exercise — Jump Rope"},
    {k:"p", t:"**Jump Rope** — learners form a horizontal or vertical line with two persons holding a rope at both ends. On a whistle, the rope is turned, and each learner jumps in and continues to jump when the rope drops under his or her feet. The learner whose legs stop the rope from turning takes the position of one of those turning the rope. The activity is completed when all learners have entered and turned the rope."},
    {k:"rule"},
    {k:"h3", t:"Sexuality Education — Substance Abuse"},
    {k:"p", t:"**Substance abuse** is the harmful use of drugs or alcohol. It damages the body we train, so an athlete must know the substances and refuse them."},
    {k:"table", head:["Commonly abused drugs","Commonly abused alcohol"], rows:[
      ["Marijuana (grass)","Cane juice"],
      ["Opium","Gin"],
      ["Cigarette","Rum"],
      ["Tobacco","Beer and wine"],
      ["Snuff","—"],
      ["Cola nuts","—"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Causes, Effects and Prevention"},
    {k:"p", t:"**Causes** — the commonest cause among the young is **peer pressure**: friends who push you to drink or smoke 'to belong'. The **effects** of drugs and alcohol on the health of human beings in the family include a damaged liver, heart and brain; addiction (the body cannot stop); drunken violence and poverty; and ruined education and sport."},
    {k:"p", t:"**Preventive methods:**"},
    {k:"bul", items:["**Avoid taking in harmful drugs and alcohol** — say a clear NO the first time","**Avoid friends that will lead you to abuse alcohol and drugs** — choose friends who respect your 'no'","Keep busy with sports, study and useful work","Report sellers of drugs to adults and the authorities"]}
  ],
  focus: ["Exploration of body parts and body types: mesomorph, ectomorph, endomorph", "Exercise: jump rope", "Substance abuse", "Commonly abused drugs and alcohol", "Prevention"],
  terms: [
    { t: "mesomorph", d: "a thick, muscular body type", x: "A mesomorph builds muscle readily." },
    { t: "ectomorph", d: "a slim, lightly built body type", x: "An ectomorph is naturally lean." },
    { t: "endomorph", d: "a heavier, rounder body type", x: "An endomorph may excel in power events." },
    { t: "substance abuse", d: "the harmful use of drugs or alcohol", x: "Substance abuse damages health and family life." },
    { t: "drug", d: "a substance that changes how the body or mind works", x: "Some drugs are medicines; others are abused." },
    { t: "alcohol", d: "the intoxicating substance in drinks such as cane juice and beer", x: "Alcohol damages the liver and the brain." },
    { t: "addiction", d: "being unable to stop using a substance", x: "Addiction takes control of a person's life." },
    { t: "tobacco", d: "the plant used in cigarettes and snuff", x: "Tobacco damages the lungs and heart." },
    { t: "peer pressure", d: "influence from people your own age to behave a certain way", x: "Peer pressure often starts drug use." },
    { t: "rehabilitation", d: "treatment that helps a person recover from addiction", x: "Rehabilitation needs medical and family support." }
  ],
  facts: [
    { q: "Name the three body types and describe each.", a: "Mesomorph, thick and muscular; ectomorph, slim; endomorph, heavier and rounder." },
    { q: "Name four commonly abused drugs.", a: "Any four: marijuana, opium, cigarettes, tobacco, snuff and cola nuts." },
    { q: "Name two forms of alcohol commonly abused.", a: "Cane juice and beer or other spirits." },
    { q: "Name two effects of drug abuse on the body.", a: "Damage to the lungs, heart, liver and brain; and loss of coordination, memory and fitness." },
    { q: "Name two effects of drug and alcohol abuse on the family.", a: "Loss of income and neglect of children; also quarrels, violence and shame in the community." },
    { q: "What is addiction?", a: "Being unable to stop using a substance even when it is causing harm." },
    { q: "State three ways of preventing drug and alcohol abuse.", a: "Education about the dangers, refusing peer pressure, and providing sport and other healthy activities; also counselling and community action." },
    { q: "How does exercise help a person resist substance abuse?", a: "It gives health, confidence, a positive group of friends and something worthwhile to protect." }
  ],
  tf: [
    { s: "A mesomorph is thick and muscular.", a: "true", why: "That is the description of the mesomorph type." },
    { s: "Smoking tobacco improves lung capacity.", a: "false", why: "It damages the lungs and reduces the ability to exercise." },
    { s: "Addiction means being unable to stop using a substance.", a: "true", why: "That is the definition." },
    { s: "Alcohol only affects the person who drinks it.", a: "false", why: "It affects the family, the workplace and the whole community." },
    { s: "Peer pressure is one reason young people begin using drugs.", a: "true", why: "Influence from friends is a major factor." },
    { s: "Once a person is addicted nothing can be done.", a: "false", why: "Rehabilitation, counselling, medical care and family support can help recovery." }
  ],
  apply: [
    { q: "A friend offers you a cigarette and says everyone does it. What will you say and do?", a: "Say no clearly and without apology, give a reason such as my training or my health, change the subject or leave, and stay friends with people who respect the answer." },
    { q: "Explain how smoking would affect a footballer's performance.", a: "It reduces lung capacity and oxygen delivery, so he tires faster, recovers more slowly and cannot maintain pace." },
    { q: "Why is sport an effective drug prevention programme?", a: "It occupies time, builds health and confidence, provides positive friends and role models, and gives young people something they do not want to lose." },
    { q: "Design a message for a school anti-drug poster.", a: "For example: your lungs are for running and your money is for your future, so say no. Short, specific and positive." },
    { q: "How would you support a classmate whose parent is struggling with alcohol?", a: "Be a steady friend without gossiping, encourage him to speak to a teacher or counsellor, and never treat it as his fault." }
  ],
  sort: {
    title: "Harmful substances and healthy choices",
    groups: [
      { name: "Commonly abused substances", items: ["marijuana", "opium", "cigarettes", "snuff", "cane juice"] },
      { name: "Healthy alternatives", items: ["sport and exercise", "music and dance", "study groups", "community work"] }
    ]
  },
  compare: {
    title: "Effects of substance abuse",
    caption: "Complete the table with the effects at each level.",
    items: [
      { p: "On the body", f: "Damages the lungs, heart, liver and brain; reduces fitness and coordination." },
      { p: "On the mind", f: "Impairs memory, judgement and learning; can cause anxiety and depression." },
      { p: "On the family", f: "Loss of income, neglect of children, quarrels and violence." },
      { p: "On the community", f: "Crime, accidents, lost work and the cost of treating avoidable illness." },
      { p: "Prevention", f: "Education, refusal skills, sport and healthy activity, counselling and community action." }
    ]
  },
  casestudy: {
    title: "What Sekou lost",
    text: "Sekou was the fastest 400 metre runner his county had produced in years. At sixteen he was training with the national junior squad. He started smoking with older boys in the neighbourhood, nothing much, he said, only socially. Within eighteen months his times had slipped by four seconds. He blamed his shoes, then the track, then his coach. The coach, who had seen it before, said only one thing: stop for three months and let us look at the clock again. Sekou did not stop. He was dropped from the squad at eighteen. He is twenty-four now and coaches a boys' team in his old neighbourhood, and the first thing he tells every new boy is the exact number of seconds a cigarette cost him.",
    questions: [
      { q: "What happened to Sekou's performance and over what period?", a: "His 400 metre times slipped by four seconds within about eighteen months of starting to smoke." },
      { q: "How did Sekou explain his decline at first?", a: "He blamed his shoes, the track and his coach rather than the smoking." },
      { q: "What does Sekou now tell the boys he coaches, and why is it effective?", a: "He tells them exactly how many seconds smoking cost him; a specific personal cost is more persuasive than a general warning." }
    ]
  },
  project: {
    title: "Anti-substance abuse campaign",
    brief: "Plan a short campaign for your school.",
    steps: [
      "List four commonly abused substances in your community.",
      "For each, write the specific harm it does to the body.",
      "Design one poster with a short, positive message.",
      "Write three refusal lines a pupil can actually use.",
      "Present your campaign to another class."
    ],
    criteria: ["four substances with accurate harms", "clear positive poster", "three realistic refusal lines", "campaign presented to others"]
  },
  activities: [
    "Discuss the parts of the body, body types and their roles in exercise",
    "Jump rope exercise and motor skill development",
    "Discussion on substance abuse: commonly used drugs and alcohol, their effects and prevention",
    "Role-play refusal skills against peer pressure"
  ],
  materials: ["Charts", "Posters", "Ropes", "Life education resource books", "Whistle"],
  assessment: ["Individual presentation", "Group presentation", "Class participation", "Written exercise"]
},

/* ============================ GRADE 6 ============================ */
{
  grade: 6, period: "I", sem: "One", icon: "🏃",
  title: "Introduction to Physical Education",
  subtitle: "Definition, history, health and exercise components, with track and gymnastics",
  outcomes: ["Learners are able to discuss physical education, explain general health and exercise components, participate in sporting activities, and demonstrate games and gymnastic activities."],
  objectives: ["Discuss Physical Education, its history and importance", "Explain general health and exercise components", "Participate in sporting activities", "Demonstrate games and gymnastic activities"],
  note: "By Grade Six a pupil should be able not only to take part but to explain: what fitness is made of, why each component matters, and how to train it. This is where P.E. becomes a subject you can reason about.",
  study:[
    /* ---- course text: Semester One, Period I — Introduction to Physical Education (guide pp. 62-63) ---- */
    {k:"h3", t:"Physical Education, Health and Exercise Components"},
    {k:"p", t:"**Physical Education** is the study of the body in motion — its **history** runs from Greek gymnasia and Roman drill to today's school programme. Its **importance** is this: the maintenance of the body through physical fitness, health, flexibility and endurance promotes sound reasoning and growth. **Health** is general well-being — bodily, mental and social — and exercise is one of its chief components."},
    {k:"rule"},
    {k:"h3", t:"Sport (Track & Field) — the 800 m Race"},
    {k:"p", t:"Track and field demands **skills** (the techniques of running, jumping and throwing) and **rules** (lane discipline, fair starts, correct distances)."},
    {k:"p", t:"**The 800 m Race** — learners get on their marks (a line drawn before them); on the sound of a whistle, they run as fast as they can around a standardised track on a football field, twice. Pace yourself: a fast start, a steady middle, and a finishing kick."},
    {k:"rule"},
    {k:"h3", t:"Exercises"},
    {k:"p", t:"**Jump Rope (two-foot basic)** — the learner pulls the rope over and jumps over it, and takes a second rebound jump as the rope passes backward and upward."},
    {k:"p", t:"**Jumping Jack** — the learner stands erect; on a whistle he jumps with hands clapping over head while the legs are wide open in the air, and returns to attention on the next count."},
    {k:"rule"},
    {k:"h3", t:"Gymnastic Activities"},
    {k:"p", t:"**Mule Kick** — begin in a semi-crouched position, with hands shoulder-width apart, knees bent, and feet together. In a simultaneous movement, shift the weight over the hands, and vigorously thrust the legs upward and backward."},
    {k:"p", t:"**Cartwheel** — begin with the back straight, the arms extended sideward, and the legs approximately shoulder-width apart. Bend toward the left, placing the left hand, then the right, on the mat, and at the same time raising the side of the body — the legs pass over head in a wheel, and you land facing the direction you came from."}
  ],
  focus: ["Definition, history and importance of Physical Education", "Health", "Sport: track and field and its rules", "Exercises: jump rope, jumping jack, mule kick and cartwheel", "The 800m race"],
  terms: [
    { t: "exercise component", d: "one of the parts that make up total fitness", x: "Strength is an exercise component." },
    { t: "800 metre race", d: "a middle-distance track race of two laps", x: "The 800m needs both speed and endurance." },
    { t: "jump rope", d: "an exercise jumping over a rope swung by the hands", x: "The two-foot basic is the first jump rope skill." },
    { t: "jumping jack", d: "an exercise jumping with arms clapping overhead and legs spread", x: "Jumping jacks are a standard warm-up." },
    { t: "mule kick", d: "a stunt thrusting the legs upward and backward from a crouch", x: "The mule kick prepares for the handstand." },
    { t: "cartwheel", d: "a sideways rotation with hands and feet touching the ground in turn", x: "The cartwheel requires a straight arm and a strong push." },
    { t: "rebound", d: "the small second jump between rope turns", x: "Take a rebound jump as the rope passes." },
    { t: "standardised track", d: "a running track built to official measurements", x: "Two laps of a standardised track is 800 metres." },
    { t: "technique", d: "the correct way of performing a skill", x: "Good technique saves energy." },
    { t: "warm-up", d: "activity that prepares the body for harder work", x: "Never sprint without a warm-up." }
  ],
  facts: [
    { q: "Define Physical Education.", a: "Planned education through physical activity, developing the body, health, skill and character." },
    { q: "How many laps of a standard track is the 800m race?", a: "Two laps." },
    { q: "Describe the two-foot basic jump rope.", a: "Pull the rope over and jump over it, then take a second rebound jump as the rope passes backward and upward." },
    { q: "Describe the jumping jack.", a: "Stand erect, then jump with the hands clapping overhead while the legs open wide in the air." },
    { q: "Describe the mule kick.", a: "Begin in a semi-crouched position with hands shoulder-width apart, knees bent and feet together, then shift weight over the hands and thrust the legs upward and backward." },
    { q: "Describe the cartwheel.", a: "Begin with the back straight, arms extended sideward and legs shoulder-width apart; bend to the left placing the left hand then the right on the mat while raising the side." },
    { q: "Give three reasons why P.E. is important.", a: "It builds fitness and health, teaches safety and self-care, and develops discipline, teamwork and character." },
    { q: "Name four components of exercise or fitness.", a: "Strength, endurance, flexibility and speed or power; agility, balance and coordination are also components." }
  ],
  tf: [
    { s: "The 800m race is two laps of a standard track.", a: "true", why: "A standard lap is 400 metres." },
    { s: "In the jump rope basic, there is a rebound jump between turns.", a: "true", why: "The rebound keeps the rhythm as the rope passes." },
    { s: "The cartwheel is performed with bent arms.", a: "false", why: "The supporting arm must be straight and strong." },
    { s: "The mule kick begins from a standing upright position.", a: "false", why: "It begins from a semi-crouched position with hands on the floor." },
    { s: "Total fitness has several components.", a: "true", why: "Strength, endurance, flexibility, speed and others together make up fitness." },
    { s: "Warming up before sprinting is optional.", a: "false", why: "Sprinting cold is a common cause of muscle injury." }
  ],
  apply: [
    { q: "Which components of fitness does the 800m mainly demand?", a: "Cardiovascular endurance above all, with a substantial demand on speed and on the ability to pace." },
    { q: "A pupil's cartwheel collapses halfway. What is the most likely fault?", a: "The supporting arm bends or the hands are placed too close together; he needs a straight strong arm and a wider hand placement in line." },
    { q: "Design a full warm-up for a gymnastics lesson.", a: "Light jogging, jumping jacks, arm and shoulder circles, gentle trunk twists and hamstring stretches, then easy rolls before harder stunts." },
    { q: "Explain to a Grade One pupil why exercise matters, in simple words.", a: "Your body is like a machine: the more you use it properly, the better it works, and it keeps you strong and free from sickness." },
    { q: "Your school has one mat and thirty pupils. How do you organise a safe gymnastics lesson?", a: "Rotate small groups through the mat while the others do floor exercises, stretching or skill drills that need no mat, with the teacher always at the mat." }
  ],
  sort: {
    title: "Exercises and gymnastic stunts",
    groups: [
      { name: "Conditioning exercises", items: ["jump rope", "jumping jack", "jogging", "stretching"] },
      { name: "Gymnastic stunts", items: ["mule kick", "cartwheel", "forward roll", "backward roll"] }
    ]
  },
  compare: {
    title: "Components of exercise and how to train them",
    caption: "Complete the table with a training method for each component.",
    items: [
      { p: "Strength", f: "Resistance work: push-ups, pull-ups, lifting, tug-of-war." },
      { p: "Endurance", f: "Sustained running, skipping, cycling and the 800m." },
      { p: "Flexibility", f: "Held stretches for all major muscle groups." },
      { p: "Speed and power", f: "Short maximal sprints, jumps and throws with full recovery." },
      { p: "Coordination and balance", f: "Gymnastic stunts such as the cartwheel and mule kick." }
    ]
  },
  casestudy: {
    title: "The pupil who could explain it",
    text: "At the county schools' quiz, a question came up that nobody expected: name four components of physical fitness and give a training method for each. Three schools passed. The Grade Six boy from a small rural school answered in twenty seconds, strength, endurance, flexibility and power, with a method for each, and then added, without being asked, that his school had no equipment so they trained all four with a rope, a field and their own body weight. The examiner asked him where he had learned it. He said his teacher made every pupil write a training plan each term and defend it in front of the class. Not perform it. Defend it.",
    questions: [
      { q: "What was the question the boy answered?", a: "Name four components of physical fitness and give a training method for each." },
      { q: "What did he add without being asked?", a: "That his school trained all four components with only a rope, a field and body weight." },
      { q: "What teaching method produced this understanding?", a: "Every pupil had to write a training plan each term and defend it in front of the class." }
    ]
  },
  project: {
    title: "Defend a training plan",
    brief: "Write and defend a term's training plan.",
    steps: [
      "List the components of fitness you intend to train.",
      "Choose one exercise for each, usable with your school's actual resources.",
      "Set out a weekly schedule including rest days.",
      "Write one sentence justifying each choice.",
      "Present and defend your plan to the class, answering their questions."
    ],
    criteria: ["all components covered", "exercises realistic for the school", "rest days included", "each choice justified and defended"]
  },
  activities: [
    "Brainstorm and discuss the history and importance of physical education, health, games and sport",
    "The 800m race: two laps of the field on the whistle",
    "Jump rope (two-foot basic) and jumping jacks",
    "Mule kick and cartwheel on the mat"
  ],
  materials: ["P.E. handbook", "Stopwatch", "Whistle", "Ropes", "Mat"],
  assessment: ["Individual presentation", "Group presentation", "Class participation", "Practical demonstration"]
},

{
  grade: 6, period: "II", sem: "One", icon: "🤸",
  title: "The Human Body and Gymnastics",
  subtitle: "Body types, gymnastics, growth and development, and gender-based violence",
  outcomes: ["Learners are able to describe the different parts of the body and body types, develop motor skills, demonstrate gymnastic activities, state the meaning of puberty and sexuality, describe physical changes during puberty, and define and identify the root causes of gender-based violence."],
  objectives: ["Explore body parts and body types", "Demonstrate gymnastics: forward and backward roll", "State the meaning of puberty and sexuality", "Describe physical changes during puberty in boys and girls", "Define gender-based violence and identify its root causes"],
  note: "Puberty is the time of life when a young person begins to look like an adult. It happens to everyone, at different times, and it is entirely normal. Gender-based violence is never normal and never acceptable; it can be reported and it can be stopped.",
  study:[
    /* ---- course text: Semester One, Period II — The Human Body and Gymnastics (guide pp. 64-65) ---- */
    {k:"h3", t:"Body Parts and Body Types (Physique)"},
    {k:"p", t:"Describe the different parts of the body and develop **motor skills** through them. Recall the three body types (physique): **ectomorph** (slim), **mesomorph** (muscular) and **endomorph** (round). In pairs and groups, discuss the parts, draw them, and name the motor skills each one serves."},
    {k:"rule"},
    {k:"h3", t:"Gymnastics (Sport) — the Forward and Backward Roll"},
    {k:"p", t:"**Forward and 'Backward Roll'** — a mat is placed on the floor. On a whistle, the learner bends and curves the body until the hands rest on the floor, then pushes the entire body forward to roll on the back and come up facing the same direction. The backward roll reverses the movement: sit back, roll over the shoulders with the chin tucked, and arrive on the feet."},
    {k:"rule"},
    {k:"h3", t:"Human Growth and Development — Puberty"},
    {k:"p", t:"**Puberty** is the time in life when a learner begins to look like an adult and becomes physically able to reproduce. **Sex** means male and female; **sexuality** means the expression of who we are as human beings."},
    {k:"p", t:"Physical changes during puberty: in boys the voice deepens, hair grows on the face and body, and the **hormone testosterone** causes the changes; in girls the breasts develop, hips widen, menstruation begins, and the **hormone estrogen** causes the changes. **Menstruation (the menstrual cycle)** is the monthly flow that shows a girl's body is maturing — it is natural, healthy, and nothing to be ashamed of; during it a girl keeps clean, changes her pads, and may take part in gentle exercise."},
    {k:"rule"},
    {k:"h3", t:"The Reproductive System and Gender-Based Violence"},
    {k:"p", t:"The **male and female reproductive systems** are the body parts by which life is begun — respect for one's own body and for other people's bodies protects them."},
    {k:"p", t:"**Gender-based violence (GBV)** is harm done to a person because he is a boy or because she is a girl — beating, forced marriage, rape, and harmful traditional practices. Its **root causes** include ignorance, the abuse of power, and harmful customs. Divide into groups to discuss the root causes; brainstorm **harmful traditional practices**; define GBV, list its forms, and summarize: violence against any person is wrong, and every case must be reported to a trusted adult or the authorities."}
  ],
  focus: ["Exploration of body parts and body types (physique)", "Gymnastics: forward and backward roll", "Human growth and development: puberty", "Gender-based violence and harmful traditional practices"],
  terms: [
    { t: "puberty", d: "the time in life when a young person begins to look like an adult", x: "Puberty happens at different ages for different people." },
    { t: "sexuality", d: "the expression of who we are as human beings, male and female", x: "Sexuality is part of being human." },
    { t: "hormone", d: "a chemical made in the body that causes changes and controls processes", x: "Hormones cause the changes of puberty." },
    { t: "growth spurt", d: "a period of rapid growth in height and size", x: "A growth spurt happens during puberty." },
    { t: "gender", d: "the social roles and expectations attached to being male or female", x: "Gender roles differ between communities." },
    { t: "gender-based violence", d: "harm done to a person because of their gender", x: "Gender-based violence is a crime." },
    { t: "harmful traditional practice", d: "a custom that damages a person's health or rights", x: "Harmful traditional practices should be discussed openly and stopped." },
    { t: "consent", d: "freely given agreement", x: "Nothing may be done to a person without consent." },
    { t: "report", d: "to tell an authority about something wrong", x: "Report abuse to a trusted adult or the police." },
    { t: "backward roll", d: "a gymnastic roll backward over the shoulders", x: "The backward roll needs strong arms and a tucked chin." }
  ],
  facts: [
    { q: "What is puberty?", a: "The time in life when a young person begins to look like an adult and the body matures." },
    { q: "What is sexuality?", a: "The expression of who we are as human beings; sex means male and female." },
    { q: "What causes the physical changes of puberty?", a: "Hormones produced in the body." },
    { q: "Name two changes that occur in boys during puberty.", a: "The voice deepens and the body grows taller and more muscular; hair also grows on the body and face." },
    { q: "Name two changes that occur in girls during puberty.", a: "The body grows and takes an adult shape, and menstruation begins; hair also grows on the body." },
    { q: "Define gender-based violence.", a: "Harm done to a person because of their gender." },
    { q: "Name two root causes of gender-based violence.", a: "Unequal power between men and women, and harmful beliefs or traditions that excuse it; poverty and silence also allow it to continue." },
    { q: "Describe the backward roll.", a: "From a squat on a mat, roll backward with the chin tucked, placing the hands beside the head to push the body over and come up facing forward." },
    { q: "What should a person do who experiences or witnesses violence?", a: "Report it to a trusted adult, a teacher, a health worker or the police." }
  ],
  tf: [
    { s: "Puberty happens to everyone at exactly the same age.", a: "false", why: "It happens at different ages for different people, and that is normal." },
    { s: "Hormones cause the physical changes of puberty.", a: "true", why: "They are the chemical signals that drive the changes." },
    { s: "Gender-based violence is a private matter that should not be reported.", a: "false", why: "It is a crime and a violation of rights; it should always be reported." },
    { s: "A backward roll should be done with the chin tucked.", a: "true", why: "Tucking the chin protects the neck." },
    { s: "Changes during puberty are a sign that something is wrong.", a: "false", why: "They are normal and healthy signs of growing up." },
    { s: "Some traditional practices can harm health and rights.", a: "true", why: "These are called harmful traditional practices and should be stopped." }
  ],
  apply: [
    { q: "A classmate is worried because she is developing earlier than her friends. What will you say?", a: "That puberty begins at different ages for everyone, that there is nothing wrong with her, and that she can talk to a parent, teacher or nurse if she has questions." },
    { q: "Give three root causes of gender-based violence and one way to address each.", a: "Unequal power, teach equal rights; harmful beliefs, discuss and challenge them openly; silence, make reporting safe and confidential." },
    { q: "A boy in your class says girls should not play sport. How would you respond?", a: "Point out that girls have equal right and equal ability to take part, and that such attitudes are the same thinking that leads to discrimination." },
    { q: "Who can a pupil report abuse to?", a: "A parent or guardian, a teacher, the principal, a health worker, a social worker or the police." },
    { q: "Why is it important to talk about these topics openly in school?", a: "Because silence protects those who do harm; correct information and open discussion give young people the knowledge and confidence to protect themselves and others." }
  ],
  sort: {
    title: "Puberty and protection",
    groups: [
      { name: "Normal changes of puberty", items: ["growth spurt", "voice change", "body hair", "adult body shape"] },
      { name: "Ways to seek help", items: ["talk to a parent", "tell a teacher", "visit a health worker", "report to the police"] }
    ]
  },
  compare: {
    title: "Understanding growth and rights",
    caption: "Complete the table with the correct explanation.",
    items: [
      { p: "Puberty", f: "The normal stage when the body matures towards adulthood, driven by hormones." },
      { p: "Sexuality", f: "The expression of who we are as human beings, male and female." },
      { p: "Gender", f: "The social roles and expectations attached to being male or female." },
      { p: "Gender-based violence", f: "Harm done to a person because of their gender; a crime that must be reported." },
      { p: "Harmful traditional practice", f: "A custom that damages a person's health or rights and should be stopped." }
    ]
  },
  casestudy: {
    title: "The group discussion",
    text: "The Grade Six teacher divided her class into four groups and gave each the same task: list the root causes of gender-based violence in your own community. She expected general answers. What came back was uncomfortably specific. One group wrote that girls who report are called liars. Another wrote that families settle cases privately to protect their name. A third wrote that some men believe a wife is property. The fourth simply wrote: nobody talks about it. The teacher had planned a lesson. What she got was a class that then asked to invite the social worker from the district office, and a set of four lists that the school still uses when it trains new staff.",
    questions: [
      { q: "What task did the teacher set the four groups?", a: "To list the root causes of gender-based violence in their own community." },
      { q: "Give two of the causes the pupils identified.", a: "Any two: girls who report are called liars; families settle cases privately; some men believe a wife is property; nobody talks about it." },
      { q: "What did the class do as a result of the discussion?", a: "They asked to invite the district social worker, and their lists are still used to train new staff." }
    ]
  },
  project: {
    title: "A rights and safety guide",
    brief: "Produce a short guide on growing up safely.",
    steps: [
      "Page 1: explain puberty in simple, accurate and respectful language.",
      "Page 2: list the normal changes in boys and in girls.",
      "Page 3: define gender-based violence and list three root causes.",
      "Page 4: list every person and place a young person can go to for help.",
      "Have your teacher check it, then share it with a lower class."
    ],
    criteria: ["accurate and respectful language", "changes correctly described", "causes correctly identified", "complete list of sources of help"]
  },
  activities: [
    "Class discussion on parts of the body, motor skills and gymnastics",
    "Forward and backward roll on the mat, on the whistle",
    "Discussion on human growth and development, puberty and sexuality",
    "Group discussion on the root causes of gender-based violence and harmful traditional practices"
  ],
  materials: ["Charts", "Posters", "Mat", "Whistle", "Life education resource books"],
  assessment: ["Individual presentation", "Group presentation", "Class participation", "Written exercise"]
},

{
  grade: 6, period: "III", sem: "One", icon: "🩹",
  title: "First Aid and Safety",
  subtitle: "Emergency care: acting calmly, quickly and correctly",
  outcomes: ["Learners are able to define first aid, apply the priorities of emergency care, and demonstrate correct first aid procedures."],
  objectives: ["Define first aid and emergency care", "Apply the priorities: rescue promptly, check breathing, control severe bleeding", "Demonstrate correct procedures", "List safety rules and common emergencies"],
  note: "First aid, or emergency care, is the immediate temporary care given to a person who has become sick or been injured. The rule for the responder is three words: calmly, quickly, correctly.",
  study:[
    /* ---- course text: Semester One, Period III — First Aid and Safety (guide pp. 66-67) ---- */
    {k:"h3", t:"Definition of First Aid"},
    {k:"p", t:"**First aid** — or an emergency care — is the **immediate, temporary care given to a person who has become sick or who has been injured**. In administering first aid, the learner must act **calmly, quickly and correctly**."},
    {k:"rule"},
    {k:"h3", t:"The Priorities in an Emergency"},
    {k:"num", items:["**Rescue promptly** — move the victim when it is necessary to save life, for example from water, or from a room containing carbon monoxide, smoke or toxic fumes.","**Check breathing** — where breathing has stopped, give the victim mouth-to-mouth artificial respiration.","**Control severe bleeding** — apply direct pressure with the palm of your hand over the wound; if possible, elevate the body part so that it is above the level of the victim's heart; keep the victim still — do not let him or her get up or walk around.","**Send someone for a medical practitioner** at once."]},
    {k:"rule"},
    {k:"h3", t:"Types of Wounds and Their Treatment"},
    {k:"p", t:"Differentiate the five wounds — **abrasion** (a scrape), **incision** (a clean cut), **laceration** (a jagged tear), **puncture** (a deep stab from a pointed object) and **avulsion** (tissue torn away) — and know the first-aid treatment for each one."},
    {k:"p", t:"First aid for wounds — the four steps in applying first aid: **1. stop the bleeding immediately; 2. protect the wound from contamination and infection; 3. treat the victim for shock; 4. seek medical care immediately.**"},
    {k:"rule"},
    {k:"h3", t:"Poisonings"},
    {k:"bul", items:["**By swallowing** — keep the container as evidence, note what and how much was swallowed, do not make the victim vomit unless the health worker says so, and rush the victim to the hospital","**Animal bite** — wash the bite with soap and plenty of water, keep the bitten part still and low, and get the victim to medical care at once"]},
    {k:"rule"},
    {k:"h3", t:"Common Emergencies — Proper Techniques"},
    {k:"table", head:["Emergency","Proper first-aid technique"], rows:[
      ["Nosebleeds","Sit down, lean forward, and pinch the soft part of the nose for about ten minutes; breathe through the mouth"],
      ["Bee stings","Scrape the sting away, wash the spot, and apply a cold compress"],
      ["Sprains","Rest the joint; apply ice; compress gently; elevate (RICE)"],
      ["Strains","Rest the muscle, apply cold packs, and stretch it gently only after the pain eases"],
      ["Burns","Cool with clean running water for several minutes; cover with a clean loose dressing; never break blisters or apply grease"]
    ]}
  ],
  focus: ["Definition of first aid and emergency care", "Rescue promptly", "Check breathing and artificial respiration", "Control severe bleeding and elevation", "Common emergencies and safety rules"],
  terms: [
    { t: "emergency care", d: "immediate temporary care given to a sick or injured person", x: "First aid is also called emergency care." },
    { t: "rescue promptly", d: "moving a victim from danger when necessary to save life", x: "Rescue promptly from water, smoke or fire." },
    { t: "carbon monoxide", d: "a poisonous gas produced by burning, which has no smell", x: "Carbon monoxide in a closed room can kill." },
    { t: "toxic fumes", d: "poisonous gases or smoke", x: "Move the victim away from toxic fumes." },
    { t: "artificial respiration", d: "breathing for a victim who is not breathing", x: "Mouth-to-mouth artificial respiration may restore breathing." },
    { t: "elevate", d: "to raise a part of the body above the level of the heart", x: "Elevate the wounded limb to slow the bleeding." },
    { t: "direct pressure", d: "pressing firmly on a wound with the palm", x: "Direct pressure is the first way to control bleeding." },
    { t: "medical practitioner", d: "a trained doctor or health worker", x: "Send someone for a medical practitioner." },
    { t: "keep still", d: "preventing the injured person from moving or walking", x: "Keep the victim still until help arrives." },
    { t: "calmly", d: "without panic or hurry that causes mistakes", x: "Act calmly, quickly and correctly." }
  ],
  facts: [
    { q: "Define first aid or emergency care.", a: "The immediate temporary care given to a person who has become sick or who has been injured." },
    { q: "State the three-word rule for administering first aid.", a: "Act calmly, quickly and correctly." },
    { q: "List the priorities in order.", a: "Rescue promptly, check breathing, control severe bleeding, and seek medical care." },
    { q: "Give three situations requiring prompt rescue.", a: "A water incident, a room containing carbon monoxide, smoke or toxic fumes, and a vehicle that might catch fire." },
    { q: "How is breathing checked and supported?", a: "Ensure the victim has an open airway, and give mouth-to-mouth artificial respiration if he is not breathing." },
    { q: "Describe the control of severe bleeding.", a: "Apply direct pressure with the palm of the hand over the wound, elevate the part above the level of the heart if possible, keep the victim still, and send for a medical practitioner." },
    { q: "Why should the victim not be allowed to get up and walk around?", a: "Because movement worsens the injury and can cause collapse or increased bleeding." },
    { q: "Why is carbon monoxide especially dangerous?", a: "Because it is poisonous but has no smell, so a victim can be overcome without warning." }
  ],
  tf: [
    { s: "First aid is permanent treatment.", a: "false", why: "It is immediate temporary care until medical help is available." },
    { s: "Elevating a bleeding limb above the heart helps slow the bleeding.", a: "true", why: "It reduces blood pressure in the limb." },
    { s: "Carbon monoxide can be detected by its strong smell.", a: "false", why: "It has no smell, which is what makes it so dangerous." },
    { s: "A victim of severe bleeding should be kept still.", a: "true", why: "Movement worsens bleeding and risks collapse." },
    { s: "You should rescue a victim from danger only when necessary to save life.", a: "true", why: "Unnecessary movement can worsen injuries." },
    { s: "Panic helps the responder act faster.", a: "false", why: "Panic causes mistakes; act calmly, quickly and correctly." }
  ],
  apply: [
    { q: "A generator has been running in a closed room and a person is unconscious inside. What do you do?", a: "Do not enter unprotected; open doors and windows from outside, get help, rescue the victim into fresh air, check breathing, and send for a medical practitioner immediately." },
    { q: "Give the full sequence for a victim with a deeply bleeding arm wound.", a: "Ensure safety, check breathing, apply direct pressure with the palm over a clean dressing, elevate the arm above the heart, keep him still and warm, and send for medical care." },
    { q: "Why is calmly listed before quickly?", a: "Because panicked speed produces mistakes; a calm responder actually acts faster and more effectively." },
    { q: "You are alone with a seriously injured person and have no phone. What is your plan?", a: "Shout for help, treat the immediate life threat of airway and bleeding, and send the first person who arrives for a medical practitioner while I stay with the victim." },
    { q: "Write five safety rules that would prevent most school emergencies.", a: "For example: no running on wet floors; clear the field of glass and stones; no play near fire or the kitchen; report every broken fitting; and no unsupervised gymnastics." }
  ],
  sort: {
    title: "Correct and incorrect responses",
    groups: [
      { name: "Correct responses", items: ["check the airway first", "apply direct pressure", "elevate the wound", "send for a medical practitioner"] },
      { name: "Incorrect responses", items: ["let the victim walk it off", "crowd around the victim", "give drink to an unconscious person", "enter a smoke-filled room unprotected"] }
    ]
  },
  compare: {
    title: "The priorities of emergency care",
    caption: "Complete the table with the action and reason for each priority.",
    items: [
      { p: "Rescue promptly", f: "Move the victim from water, smoke, fumes or fire, only when necessary to save life." },
      { p: "Check breathing", f: "Ensure an open airway and give artificial respiration if needed; without breathing, death follows in minutes." },
      { p: "Control severe bleeding", f: "Direct pressure with the palm, elevate the part, keep the victim still." },
      { p: "Seek medical care", f: "Send someone for a medical practitioner; first aid is only temporary care." }
    ]
  },
  casestudy: {
    title: "Four minutes",
    text: "A boy went under at the creek below the school. Two Grade Six pupils pulled him out. He was not breathing. One of them, Nyema, had learned artificial respiration three weeks earlier in a P.E. lesson she had thought at the time was boring. She checked his mouth, tilted his head, and began. The other boy ran for the teacher. It took about ninety seconds before the boy coughed and brought up water. The clinic later told the family that permanent brain damage begins after roughly four minutes without oxygen. Nyema had started within one. When asked about it afterwards she said the only thing she remembered thinking was the order: airway, breathing, then everything else.",
    questions: [
      { q: "What was the first thing Nyema checked?", a: "The airway; she checked his mouth and tilted his head before starting artificial respiration." },
      { q: "Why was the speed of her response so important?", a: "Because permanent brain damage begins after roughly four minutes without oxygen, and she started within one." },
      { q: "What does her comment about the order show?", a: "That knowing the priorities in sequence, airway then breathing then everything else, is what allows correct action under pressure." }
    ]
  },
  project: {
    title: "First aid demonstration",
    brief: "Prepare and deliver a practical first aid demonstration.",
    steps: [
      "Choose one emergency: severe bleeding, a non-breathing victim, or rescue from smoke.",
      "Write the correct sequence of actions with reasons.",
      "Prepare the materials you need.",
      "Demonstrate the procedure to the class with a volunteer acting as the victim.",
      "Answer the class's questions on why each step comes in that order."
    ],
    criteria: ["correct sequence with reasons", "materials prepared", "clear accurate demonstration", "questions answered correctly"]
  },
  activities: [
    "Discuss first aid, priorities, safety rules and common emergencies",
    "Demonstrate prompt rescue from water, smoke or a vehicle",
    "Demonstrate checking breathing and mouth-to-mouth artificial respiration on a model",
    "Demonstrate control of severe bleeding by direct pressure and elevation"
  ],
  materials: ["First aid kit", "Gloves", "Bandage", "Soap", "Water", "Alcohol"],
  assessment: ["Individual presentation", "Group presentation", "Class participation", "Practical demonstration"]
},

{
  grade: 6, period: "IV", sem: "Two", icon: "🌟",
  title: "Benefits of Physical Activity",
  subtitle: "Physical, social and mental benefits, and the fitness components",
  outcomes: ["Learners are able to develop motor skills, improve their body while playing games, and show ideas to others to develop skills in various physical activities."],
  objectives: ["Develop motor skills", "Improve the body while playing games", "Explain the physical, social and mental benefits of activity", "Demonstrate the fitness components", "Show ideas to others to develop skills"],
  note: "The benefits of physical activity fall into three groups: physical, meaning health, fitness and performance; social, meaning friends, cooperation and teamwork; and mental, meaning feeling good, relief from stress, and self-esteem.",
  study:[
    /* ---- course text: Semester Two, Period IV — Benefits of Physical Activity (guide pp. 68-69) ---- */
    {k:"h3", t:"Why Bother? — The Three Kinds of Benefits"},
    {k:"table", head:["Physical benefits","Social benefits (human interaction)","Mental benefits"], rows:[
      ["Health — a stronger heart, cleaner lungs, fewer sick days","Friends — sport gives you mates who share your goals","Feel good — activity lifts the spirit"],
      ["Fitness — strength, speed, flexibility and endurance","Cooperation — learning to work with others toward one aim","Stress relief — play drains away worry and anger"],
      ["Performance — better skills in every game you play","Teamwork — trusting others and being trusted in return","Self esteem — the quiet pride of a body you have trained"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Exercises — the Fitness Components at Work"},
    {k:"bul", items:["**Agility** — learners run between objects placed before them, as quickly as possible, changing direction sharply at each one","**Balance** — learners walk on a 30-yard-long bar that is two feet (2') high above the floor, without stepping off","**Endurance** — learners do the 30-minute run around a football field at a steady pace"]},
    {k:"rule"},
    {k:"h3", t:"Gymnastic Stunts"},
    {k:"p", t:"**Frog Jump** — begin in a squat position with hands on the floor. Jump forward and land on the hands followed by the toes touching the floor. Gradually increase the height and the distance ahead of you."},
    {k:"p", t:"**Crab Walk** — learners start by sitting on the floor with hands stretched behind and legs folded. On a whistle, learners move forward on the hands and the legs until they reach the distance required."},
    {k:"rule"},
    {k:"h3", t:"Sport (Track & Field) — the Standing Long Jump"},
    {k:"p", t:"**Standing Long Jump** — the learner stands with his toes just behind the starting line, his feet comfortably spread, his knees bent and his trunk well forward. After several swings with the arms, he swings his arms vigorously and extends his legs. As soon as his feet leave the floor, he begins to flex his knees, keeping his arms forward; he finally lands with his feet parallel and his trunk and arms extended forward. Measure from the line to the back of the nearer foot."}
  ],
  focus: ["Physical benefits: health, fitness, performance", "Social benefits: friends, cooperation, teamwork", "Mental benefits: feeling good, stress relief, self-esteem", "The eight fitness components", "Gymnastic stunts and track and field"],
  terms: [
    { t: "benefit", d: "a good result or advantage gained", x: "Exercise has physical, social and mental benefits." },
    { t: "self-esteem", d: "how much a person values himself", x: "Success in sport raises self-esteem." },
    { t: "stress relief", d: "the easing of worry and tension", x: "A run is excellent stress relief." },
    { t: "agility", d: "the ability to change direction quickly and control the body", x: "Agility is tested by running between objects." },
    { t: "balance", d: "keeping the body steady in position or motion", x: "Walking a raised bar tests balance." },
    { t: "endurance", d: "the ability to sustain effort over time", x: "A thirty-minute run tests endurance." },
    { t: "coordination", d: "smooth combined working of body parts", x: "Coordination links the eye and the hand." },
    { t: "performance", d: "how well a person carries out a task or sport", x: "Training improves performance." },
    { t: "frog jump", d: "a stunt jumping forward from a squat, landing on the hands then the feet", x: "The frog jump builds explosive power." },
    { t: "standing long jump", d: "a jump for distance from a standing start", x: "The standing long jump measures leg power." }
  ],
  facts: [
    { q: "Name the three groups of benefits of physical activity.", a: "Physical, social and mental benefits." },
    { q: "Give three physical benefits.", a: "Health, fitness and improved performance." },
    { q: "Give three social benefits.", a: "Friends, cooperation and teamwork." },
    { q: "Give three mental benefits.", a: "Feeling good, stress relief and self-esteem." },
    { q: "How is agility demonstrated?", a: "By running between objects placed in a line as quickly as possible." },
    { q: "How is balance demonstrated?", a: "By walking along a bar about two feet above the floor and thirty yards long." },
    { q: "How is endurance demonstrated?", a: "By a thirty-minute run around a football field." },
    { q: "Describe the standing long jump.", a: "Stand with toes behind the line, feet comfortably spread, knees bent and trunk forward; after arm swings, swing the arms vigorously and extend the legs, then flex the knees and land with feet parallel and arms forward." },
    { q: "Describe the crab walk.", a: "Sit on the floor with hands stretched behind and legs folded; on the whistle move forward on the hands and feet for the required distance." }
  ],
  tf: [
    { s: "Physical activity has mental as well as physical benefits.", a: "true", why: "It relieves stress, improves mood and builds self-esteem." },
    { s: "Agility means the ability to keep going for a long time.", a: "false", why: "That is endurance; agility is changing direction quickly." },
    { s: "Team sport builds cooperation and teamwork.", a: "true", why: "These are among its main social benefits." },
    { s: "Self-esteem cannot be affected by physical activity.", a: "false", why: "Achievement and improvement in activity raise self-esteem." },
    { s: "The frog jump begins from a squat position with hands on the floor.", a: "true", why: "That is how the stunt starts." },
    { s: "Stress relief is a mental benefit of exercise.", a: "true", why: "Exercise reduces tension and worry." }
  ],
  apply: [
    { q: "A pupil says exercise is a waste of time because he is already thin. Answer him fully.", a: "Fitness is not appearance: exercise strengthens the heart and lungs, builds bone and muscle, relieves stress, raises self-esteem and reduces disease, none of which body size shows." },
    { q: "Design one activity that delivers physical, social and mental benefits at once.", a: "A cooperative relay: it exercises the body, requires teamwork and communication, and gives every member a share in the group's success." },
    { q: "How could your school use sport to reduce fighting at break?", a: "Organise structured games at break with mixed teams and rotating captains, so energy is used constructively and pupils build relationships across groups." },
    { q: "Which fitness component matters most for a goalkeeper, and why?", a: "Agility and reaction, with coordination and balance, because the goalkeeper must change direction and reach explosively in unpredictable directions." },
    { q: "A shy pupil avoids all activity. How would you use the social and mental benefits to help?", a: "Start with cooperative, non-competitive activities where nobody is eliminated, give her a defined role, praise effort publicly, and let success build the confidence to take on more." }
  ],
  sort: {
    title: "Three kinds of benefit",
    groups: [
      { name: "Physical benefits", items: ["health", "fitness", "performance", "strong bones"] },
      { name: "Social benefits", items: ["friends", "cooperation", "teamwork", "leadership"] },
      { name: "Mental benefits", items: ["feeling good", "stress relief", "self-esteem", "confidence"] }
    ]
  },
  compare: {
    title: "Fitness components and how they are demonstrated",
    caption: "Complete the table with the demonstration for each component.",
    items: [
      { p: "Agility", f: "Running between objects placed in a line as quickly as possible." },
      { p: "Balance", f: "Walking a thirty-yard bar two feet above the floor." },
      { p: "Endurance", f: "A thirty-minute run around the football field." },
      { p: "Power", f: "The standing long jump and the frog jump." },
      { p: "Coordination", f: "Skills combining eye and limb, such as catching while moving." }
    ]
  },
  casestudy: {
    title: "What break time was for",
    text: "The principal of a school in Paynesville was dealing with a fight almost every break. Detentions did not work. Suspensions did not work. A Grade Six teacher proposed something the staff thought was naive: give the fighting boys the job of organising break-time games for the lower classes. Not as punishment, but as a role, with a whistle and a register. Four of the six accepted. Within a month the fights had almost stopped, and not because the boys were being watched. They were busy, they were trusted, and for the first time in their school careers the younger children looked up to them. Two of the four are now on the school council.",
    questions: [
      { q: "What had the school tried before, and with what result?", a: "Detentions and suspensions, neither of which stopped the fighting." },
      { q: "What was the teacher's proposal?", a: "To give the fighting boys the role of organising break-time games for the lower classes, with a whistle and a register." },
      { q: "Why did it work?", a: "The boys were occupied, trusted and respected; the social and mental benefits of the role changed their behaviour." }
    ]
  },
  project: {
    title: "Benefits campaign",
    brief: "Run a campaign showing why physical activity matters.",
    steps: [
      "Make three posters, one each for physical, social and mental benefits.",
      "Collect one real example from your school for each kind of benefit.",
      "Organise one activity that demonstrates all three.",
      "Run the activity with a lower class.",
      "Report to your class on what you observed."
    ],
    criteria: ["three posters with accurate content", "real examples collected", "activity organised and run", "clear observational report"]
  },
  activities: [
    "Discuss the physical, social and mental benefits of physical activity",
    "Demonstrate agility, balance and endurance activities",
    "Gymnastic stunts: frog jump and crab walk",
    "Track and field: standing long jump"
  ],
  materials: ["Balls and playing objects", "Bar or beam", "Stopwatch", "Measuring tape", "Whistle"],
  assessment: ["Individual presentation", "Group presentation", "Class participation", "Practical demonstration"]
},

{
  grade: 6, period: "V", sem: "Two", icon: "🏅",
  title: "Track and Field",
  subtitle: "Jumping skills, field and track events, and the relay race",
  outcomes: ["Learners are able to develop jumping skills effectively and demonstrate the various kinds of jumps."],
  objectives: ["Develop jumping skills", "Demonstrate the various kinds of jumps", "Identify track and field events and their rules", "Take part in relay races and games"],
  note: "Track and field divides into two families. Field events, which are the high jump, the triple jump, the long jump and the throws; and track events, which are the sprints, the middle and long distances, the hurdles and the relays.",
  study:[
    /* ---- course text: Semester Two, Period V — Track and Field (guide pp. 70-71) ---- */
    {k:"h3", t:"The Two Families of Events"},
    {k:"p", t:"**Track and field** divides into two families. **Field events** this period: the **high jump** — run in, take off from one foot, arch over the bar and land on the back without knocking the bar down — and the **triple jump** — a hop on one foot, a step onto the other foot, and a jump with both feet into the pit, measured to the nearest break in the sand. **Track events** this period: the **relay race**."},
    {k:"rule"},
    {k:"h3", t:"The Relay Race"},
    {k:"p", t:"Four runners make a relay team, each running one leg and passing a **baton**. The receiver starts inside the takeover zone as his teammate arrives; the baton must pass from hand to hand **inside the zone** — a pass outside the zone, or a dropped baton lost beyond recovery, costs the race. Practise the handover at jogging speed first, then at full speed; the receiver looks ahead and trusts the call."},
    {k:"rule"},
    {k:"h3", t:"Exercises and Stunts for Jumping"},
    {k:"p", t:"**Forward and 'Backward Roll'** — a mat is placed on the floor. On a whistle, the learner bends and curves the body until the hands rest on the floor and pushes the entire body forward to roll on the back, facing the same direction."},
    {k:"bul", items:["**Frog Jump** — squat with hands on the floor; jump forward, landing on the hands followed by the toes, and gradually increase height and distance","**Crab Walk** — sit with hands stretched behind and legs folded; on a whistle, move forward on hands and legs","**Standing Long Jump** — swing the arms, extend the legs, flex the knees in flight, and land with feet parallel and trunk and arms forward"]},
    {k:"rule"},
    {k:"h3", t:"Games"},
    {k:"bul", items:["**Fox and Rabbit (classroom game)** — the rabbit eludes the hunting fox with quick dodges; a caught rabbit becomes the fox","**Beanbag Basket Relay (classroom game)** — throw beanbags into the basket in relay turns; one point per basket","**Squirrel in the Forest (loco-motor game)** — squirrels nest in threes; on 'hunter!' each squirrel must find a new nest while the odd squirrel out takes a new turn","**Shuttle Run (manipulative game)** — run out, fetch an object, run back, and hand it to the next runner"]}
  ],
  focus: ["Field events: high jump and triple jump", "Track events: the relay race", "Exercise components", "Gymnastic stunts", "Rules of track and field", "Classroom, loco-motor and manipulative games"],
  terms: [
    { t: "high jump", d: "a field event jumping over a raised bar", x: "The high jump needs a good approach and take-off." },
    { t: "triple jump", d: "a field event of a hop, a step and a jump", x: "The triple jump is hop, step and jump in sequence." },
    { t: "long jump", d: "a field event jumping for distance from a run-up", x: "The long jump is measured from the take-off board." },
    { t: "relay race", d: "a race in which team members run in turn and pass a baton", x: "The relay is decided by the changeovers." },
    { t: "baton", d: "the tube passed between runners in a relay", x: "Dropping the baton can cost the race." },
    { t: "changeover", d: "the exchange of the baton between two runners", x: "A smooth changeover wins relays." },
    { t: "take-off", d: "the moment of leaving the ground in a jump", x: "The take-off must be behind the line." },
    { t: "approach run", d: "the run-up before a jump", x: "A consistent approach run is essential." },
    { t: "foul", d: "a breach of the rules that cancels the attempt", x: "Stepping over the board is a foul." },
    { t: "landing", d: "the way the body comes back to the ground", x: "Land with knees bent and arms forward." }
  ],
  facts: [
    { q: "Name two field events and two track events.", a: "Field: high jump and triple jump. Track: relay race and sprints." },
    { q: "What are the three phases of the triple jump?", a: "The hop, the step and the jump." },
    { q: "What is a baton and what happens if it is dropped?", a: "The tube passed between relay runners; dropping it usually costs the race and can mean disqualification." },
    { q: "Why is the changeover the most important part of a relay?", a: "Because time is won or lost in the exchange, and a failed changeover loses the race regardless of speed." },
    { q: "What is a foul in the long jump?", a: "Stepping over the take-off board or line before jumping; the attempt does not count." },
    { q: "Why is a consistent approach run important?", a: "So the take-off is accurate and at full controlled speed every time." },
    { q: "Describe a safe landing in a jump.", a: "Land with knees bent to absorb the shock, feet parallel, and arms forward for balance, preferably in sand." },
    { q: "Name two games used to develop track skills.", a: "Any two: Fox and Rabbit, Beanbag Basket Relay, Squirrel in the Forest and Shuttle Run." }
  ],
  tf: [
    { s: "The triple jump consists of a hop, a step and a jump.", a: "true", why: "Those are its three phases." },
    { s: "In a relay, individual speed matters more than the changeover.", a: "false", why: "Races are commonly won or lost in the changeovers." },
    { s: "Stepping over the take-off board is a foul.", a: "true", why: "The attempt does not count." },
    { s: "The high jump is a track event.", a: "false", why: "It is a field event." },
    { s: "A consistent approach run improves jumping accuracy.", a: "true", why: "It makes the take-off point reliable." },
    { s: "Landing with straight locked legs is correct technique.", a: "false", why: "Knees must bend to absorb the shock and prevent injury." }
  ],
  apply: [
    { q: "Your relay team has the four fastest runners but keeps losing. Diagnose the problem.", a: "Almost certainly the changeovers: poor timing, wrong hand, or the incoming runner slowing; the team should practise exchanges at speed until they are automatic." },
    { q: "A jumper fouls on every attempt. How would you fix it?", a: "Measure and mark his approach run, count his strides, and practise the run-up repeatedly without jumping until the take-off foot lands consistently behind the board." },
    { q: "Design a safe long jump landing area with no proper sand pit.", a: "Dig and loosen a bed of soft sand or fine soil, clear it of stones, rake it level before every jump, and never allow jumping onto hard ground." },
    { q: "In which order should relay runners be placed and why?", a: "Commonly a strong starter first, reliable runners in the middle, and the fastest or strongest finisher last, but the placing should also suit who exchanges the baton best." },
    { q: "How can a school without a high jump bar practise the event safely?", a: "Use a light rope or elastic between two poles, which falls harmlessly, and land on stacked mats or a deep sand bed." }
  ],
  sort: {
    title: "Track and field events",
    groups: [
      { name: "Field events", items: ["high jump", "triple jump", "long jump", "shot put"] },
      { name: "Track events", items: ["relay race", "100m sprint", "800m", "hurdles"] }
    ]
  },
  compare: {
    title: "Kinds of jump",
    caption: "Complete the table describing each jump.",
    items: [
      { p: "High jump", f: "An approach run and single take-off to clear a raised bar; measured by height." },
      { p: "Long jump", f: "A fast approach run and single take-off for distance; measured from the board." },
      { p: "Triple jump", f: "Hop, step and jump in one continuous sequence; measured by total distance." },
      { p: "Standing long jump", f: "A jump for distance from a standing start with no run-up; tests pure leg power." }
    ]
  },
  casestudy: {
    title: "The changeover",
    text: "St. Peter's had the four fastest Grade Six runners in the district and had lost the relay two years running. The new coach did something the boys found insulting: for three weeks he did not let them run a single full lap. They practised only the exchange, standing, then walking, then jogging, then at full speed, hundreds of times, in both directions, until the outgoing runner could set off at the right instant without looking back. At the district meeting, St. Peter's did not have the fastest individual time of the day. Their four legs added up to less than the winning school's. They won by nine metres, all of it gained in three changeovers.",
    questions: [
      { q: "Why had St. Peter's lost the relay for two years despite having the fastest runners?", a: "Because their baton changeovers were poor, and races are won or lost in the exchange." },
      { q: "What did the new coach make them practise, and how?", a: "Only the exchange, standing, walking, jogging, then at full speed, hundreds of times in both directions." },
      { q: "How did they win despite not being the fastest?", a: "They gained nine metres purely through three efficient changeovers." }
    ]
  },
  project: {
    title: "Organise a relay competition",
    brief: "Plan and run a class relay competition.",
    steps: [
      "Write the rules, including baton, lanes, changeover zones and disqualification.",
      "Mark the track and the changeover zones.",
      "Form balanced teams and decide the running order with reasons.",
      "Hold at least two rounds and time every team.",
      "Report which changeover gained or lost the most time."
    ],
    criteria: ["complete written rules", "track and zones marked", "running order justified", "times recorded and analysed"]
  },
  activities: [
    "Discuss track and field events, exercise components, sport activities and games",
    "Field events: high jump and triple jump technique",
    "Track event: relay race and baton changeover practice",
    "Games: Fox and Rabbit, Beanbag Basket Relay, Squirrel in the Forest and Shuttle Run"
  ],
  materials: ["Measuring tape", "Batons", "Balls and playing objects", "Stopwatch", "Whistle", "Mat"],
  assessment: ["Individual presentation", "Group presentation", "Class participation", "Practical demonstration"]
},

{
  grade: 6, period: "VI", sem: "Two", icon: "🏆",
  title: "Fitness of the Body",
  subtitle: "Total fitness, lifelong activity and planning your own programme",
  outcomes: ["Learners are able to explain total fitness of the body, plan a personal fitness programme, and demonstrate the components of fitness."],
  objectives: ["Explain the total fitness of the body", "Identify the components of fitness and how each is trained", "Plan a personal fitness programme", "Demonstrate fitness activities and assess progress"],
  note: "This is the last unit of primary physical education. Its purpose is simple: that you leave able to keep yourself fit for the rest of your life, without a coach, without a gym and without money.",
  study:[
    /* ---- course text: Semester Two, Period VI — Fitness of the Body (guide pp. 72) ---- */
    {k:"h3", t:"Health-Related and Skill-Related Fitness"},
    {k:"p", t:"**Fitness of the body** has two families of components. **Health-related fitness** keeps the body working well: **cardiovascular endurance, muscular strength, muscular endurance, flexibility and body composition** (the balance of muscle and fat). **Skill-related fitness** wins games: **speed, agility, balance, coordination, reaction time and power**. Improve in various kinds of physical education components: develop motor skills and coordinate your body during exercises, and demonstrate different kinds of physical activities."},
    {k:"rule"},
    {k:"h3", t:"The Importance of Movement"},
    {k:"p", t:"The body was made to move. Regular movement keeps the heart strong, the joints free and the weight healthy; it teaches coordination of the eye, hand and foot; and it builds habits that protect health long after school days end. A fit learner plays better, learns better and lives better."},
    {k:"rule"},
    {k:"h3", t:"Exercise Component — Agility"},
    {k:"p", t:"**Agility** is the fitness component that lets you change direction quickly with control. Train it by running between markers, dodging and cutting sharply — as in the shuttle runs and chasing games of this stage."},
    {k:"rule"},
    {k:"h3", t:"Gymnastic Activities — Stunts and Tumbling"},
    {k:"p", t:"**Leg Wrestling** — learners lie side by side on their backs, facing opposite directions. On a whistle, both raise their inside legs so that their knees are crossed. From this position, each partner tries to force his opponent's leg down to the mat."},
    {k:"p", t:"**Wicket Walk** — bend forward and grasp the legs just above the ankles, and walk without letting go, taking short quick steps."},
    {k:"p", t:"**Marathon Race** — the long steady run that ends the year: pace yourself from the first step, breathe evenly, and finish what you start."},
    {k:"rule"},
    {k:"h3", t:"Sport (Track & Field) — Skills and Rules Recalled"},
    {k:"p", t:"Recall the **skills** — sprinting form, baton exchange, the long jump and standing long jump — and the **rules**: fair starts, lane discipline, legal take-offs and correct measurement. Track and field rewards the athlete who honours both."}
  ],
  focus: ["Total fitness of the body", "The components of fitness and their training", "Planning a personal programme", "Lifelong physical activity", "Assessment of progress"],
  terms: [
    { t: "total fitness", d: "the condition in which all components of fitness are developed together", x: "Total fitness is the aim of physical education." },
    { t: "programme", d: "a planned series of training sessions", x: "A programme should suit your goals and resources." },
    { t: "goal", d: "what you are trying to achieve", x: "Set a clear, measurable goal." },
    { t: "progression", d: "increasing the training load gradually", x: "Progression prevents injury and keeps improvement going." },
    { t: "overload", d: "training slightly harder than you are used to, so the body adapts", x: "Without overload there is no improvement." },
    { t: "recovery", d: "the rest during which the body rebuilds stronger", x: "Recovery is part of training, not a break from it." },
    { t: "lifelong activity", d: "physical activity continued throughout life", x: "Walking and farming are lifelong activities." },
    { t: "monitoring", d: "checking progress regularly", x: "Monitoring shows whether the programme is working." },
    { t: "adapt", d: "to change to suit new conditions", x: "The body adapts to regular training." },
    { t: "maintenance", d: "training to keep the fitness you have gained", x: "Maintenance needs less work than building." }
  ],
  facts: [
    { q: "What is total fitness?", a: "The condition in which all the components of fitness are developed together." },
    { q: "Name five components of fitness.", a: "Strength, endurance, flexibility, speed or power, and agility, balance or coordination." },
    { q: "What is overload?", a: "Training slightly harder than the body is used to, so that it adapts and improves." },
    { q: "What is progression?", a: "Increasing the training load gradually over time." },
    { q: "Why is recovery part of training?", a: "Because the body rebuilds itself stronger during rest, not during the exercise itself." },
    { q: "What makes a good training goal?", a: "One that is clear, measurable and realistic, with a date by which it should be achieved." },
    { q: "Why is monitoring important?", a: "It shows whether the programme is working and when it needs to be changed." },
    { q: "Give three lifelong physical activities requiring no equipment or money.", a: "Walking, running and bodyweight exercise; also farming, dancing and swimming." }
  ],
  tf: [
    { s: "Total fitness means developing all components together.", a: "true", why: "That is the definition." },
    { s: "Without overload the body will still improve.", a: "false", why: "The body only adapts when asked to do slightly more than it is used to." },
    { s: "Recovery is a waste of training time.", a: "false", why: "The body rebuilds stronger during recovery." },
    { s: "A good goal is measurable and has a date.", a: "true", why: "Otherwise progress cannot be judged." },
    { s: "Fitness gained in school lasts for life without further activity.", a: "false", why: "Fitness must be maintained by continued regular activity." },
    { s: "Maintaining fitness requires less work than building it.", a: "true", why: "Maintenance needs a lower training load than improvement." }
  ],
  apply: [
    { q: "Write a personal fitness programme for the coming holiday, using no equipment.", a: "For example: run or walk briskly on Monday, Wednesday and Friday; bodyweight strength on Tuesday and Thursday; stretching daily; Sunday rest, with distance or repetitions increasing weekly." },
    { q: "Your programme stops producing improvement after two months. What should you change?", a: "Apply progression: increase the distance, repetitions, speed or difficulty, or change the exercises, since the body has adapted to the current load." },
    { q: "How would you keep fit as an adult with a full-time job and no money for a gym?", a: "Build activity into life: walk or cycle to work, use bodyweight exercise at home three times a week, and keep one active hobby or sport at the weekend." },
    { q: "Set a measurable fitness goal for yourself and say how you will monitor it.", a: "For example: run 2.5km without stopping within eight weeks, monitored by recording distance and time each session in a log." },
    { q: "A friend trains hard for two weeks then stops for a month, repeatedly. Advise him.", a: "Consistency beats intensity: a moderate programme done every week all year produces far more fitness than short bursts followed by long gaps." }
  ],
  sort: {
    title: "Principles of training and lifelong activities",
    groups: [
      { name: "Principles of training", items: ["overload", "progression", "recovery", "consistency", "specificity"] },
      { name: "Lifelong activities", items: ["walking", "running", "farming", "dancing", "swimming"] }
    ]
  },
  compare: {
    title: "Building a personal fitness programme",
    caption: "Complete the table with what each stage involves.",
    items: [
      { p: "Set a goal", f: "Decide a clear, measurable target with a date." },
      { p: "Test yourself", f: "Record a baseline for each component you intend to train." },
      { p: "Plan the week", f: "Choose exercises for each component, with training days and rest days." },
      { p: "Apply overload and progression", f: "Train slightly harder than you are used to, and increase gradually." },
      { p: "Monitor and adjust", f: "Log every session, re-test regularly, and change the plan when improvement stops." }
    ]
  },
  casestudy: {
    title: "Twelve years later",
    text: "A former pupil came back to speak to Grade Six at his old school. He is a driver now, long hours, sitting all day, no field, no team, no coach. He told them he had not played organised sport since he was fifteen. Then he took out a folded piece of paper, worn soft along the creases. It was the personal fitness programme he had written as a Grade Six project, in his own childish handwriting, with the exercises listed and the rest days marked. He had rewritten it four times over twelve years as his life changed. He said the point had never been the specific exercises. The point was that at eleven years old somebody had taught him that a body is something you look after on purpose.",
    questions: [
      { q: "What were the visitor's circumstances as an adult?", a: "He was a driver working long hours seated, with no field, team or coach, and had not played organised sport since fifteen." },
      { q: "What had he kept from Grade Six, and what had he done with it?", a: "His personal fitness programme project, which he had rewritten four times over twelve years as his life changed." },
      { q: "What did he say the real value of the project was?", a: "Not the specific exercises, but learning that the body is something you look after deliberately." }
    ]
  },
  project: {
    title: "My lifelong fitness plan",
    brief: "Write the fitness programme you will take with you when you leave primary school.",
    steps: [
      "Test yourself in each component of fitness and record the baseline.",
      "Set one measurable goal for each component, with a date.",
      "Write a weekly plan using only what is available to you at home.",
      "Include rest days, progression and a way of monitoring.",
      "Present and defend your plan, then keep a copy."
    ],
    criteria: ["baseline recorded for each component", "measurable dated goals", "realistic home-based weekly plan", "progression, rest and monitoring included"]
  },
  activities: [
    "Discuss total fitness of the body and the principles of training",
    "Test and record all fitness components",
    "Each learner writes and presents a personal fitness programme",
    "Practical session demonstrating each component of fitness"
  ],
  materials: ["Assessment forms", "Stopwatch", "Measuring tape", "Charts", "Whistle"],
  assessment: ["Individual presentation", "Group presentation", "Class participation", "Written programme"]
}

];

const PE_GENERAL = {
  subject: "Physical Education",
  intro: "Physical Education is the study and practice of the body in movement. The Liberian primary physical education curriculum develops the whole learner: a strong and healthy body, sound knowledge of health, hygiene, nutrition, first aid and safety, and the character built through fair play, teamwork and discipline.",
  objectives: [
    "To develop the learner's physical fitness, motor skills and knowledge of the human body.",
    "To equip the learner with practical knowledge of health, hygiene, nutrition, first aid and safety.",
    "To build character, teamwork, leadership and respect for others through games and sport."
  ],
  approach: "The programme is learner-centred, inclusive and differentiated. Learners work individually and in mixed groups according to gender, ability and learning style. Every unit combines discussion, demonstration and practical participation, and every learner takes part."
};
