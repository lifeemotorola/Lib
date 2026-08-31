/* Curriculum data — Republic of Liberia, SOCIAL STUDIES, Grades 1–6
   Derived from the "Social Studies Grade 1-6" curriculum guide (79 pp.), 6 periods per grade.

   Every unit carries a `study[]` block list — the course text of the guide,
   rendered verbatim on the Study Notes page (see data-ss79.js for the Junior
   High half of the same subject). `**bold**` marks the key terms; table cells
   take no markup because the renderer escapes them.

   Social Studies is a CIVIC and ENQUIRY subject, so each unit carries:
     terms[]      {t, d, x}                      vocabulary term, meaning, example sentence
     facts[]      {q, a}                         short-answer recall
     tf[]         {s, a, why}                    true/false with reason
     apply[]      {q, a}                         reasoning about real Liberian life
     sort         {title, groups:[{name,items}]} classification / sorting task
     mapwork      {title, caption, items:[{p,f}]} locate-and-explain (map, chart or structure)
     casestudy    {title, text, questions:[{q,a}]} source-based comprehension
     project      {title, brief, steps[], criteria[]} enquiry / civic action task
*/

const SS_CURRICULUM = [
/* ================= GRADE 1 ================= */
{
  grade:1, period:"I", sem:"One", icon:"👨‍👩‍👧",
  title:"Self Identity and Responsibilities of Family Members",
  subtitle:"Family types, gender roles, family relationships and people with disabilities",
  outcomes:["Learners exhibit a sense of belongingness to a family","Learners openly discuss gender issues","Learners differentiate types of relationships and respect people with disabilities"],
  objectives:["Identify family structure","Create awareness on gender issues","Determine the role of each family member in the home","Differentiate relationships in the family","Support people that are disabled"],
  note:"A <b>family</b> is a group of people who live together and care for one another. Liberia has three common family types: the <b>single-parent family</b>, the <b>nuclear family</b> and the <b>extended family</b>. Boys and girls have equal right to education.",
  study:[
    /* ---- course text: Semester One, Period I (guide pp. 2-3) ---- */
    {k:"h3", t:"What is a Family?"},
    {k:"p", t:"A **family** is a group of people who live together and care for one another. Every child is born into a family, and the family is the first place where a child learns to love, to speak, to work and to behave well."},
    {k:"p", t:"Your family gives you a name, a home, food, clothes, and the love you need to grow. This feeling that you belong to a family is called a **sense of belonging**."},
    {k:"rule"},
    {k:"h3", t:"Types of Family"},
    {k:"p", t:"There are three common types of family in Liberia:"},
    {k:"num", items:["**Single-parent family** – a family where one parent lives with and cares for the children.","**Nuclear family** – a father, a mother and their children only.","**Extended family** – a family that also includes grandparents, aunties, uncles and cousins."]},
    {k:"p", t:"A single-parent family is a real family. One parent caring for children is enough to make a home, and such a family can be strong and happy."},
    {k:"p", t:"The extended family is very common in our villages and towns: grandparents, aunties and uncles all help to bring up the children and share the work of the home."},
    {k:"rule"},
    {k:"h3", t:"Gender"},
    {k:"p", t:"**Gender** means the roles that society gives to boys and girls, to men and to women. Sex is what you are born as – boy or girl; gender is what people expect you to do because you are a boy or a girl."},
    {k:"p", t:"Some of these expectations are fair and some are not. It is not true that only boys should go to school, or that cooking and cleaning belong to girls alone."},
    {k:"rule"},
    {k:"h3", t:"Roles and Responsibilities in the Home"},
    {k:"p", t:"A **role** is the work or duty a person is expected to do. A **responsibility** is a duty you are expected to carry out. In a good home every member, young or old, carries some responsibility."},
    {k:"bul", items:["**Boys and men**: fetching water and firewood, sweeping the yard, mending tools, farming, protecting the home, repairing the roof and the fence.","**Girls and women**: cooking, washing, pounding rice or cassava, keeping the house clean, caring for babies and the sick, selling at the market.","**Children**: studying, obeying parents, minding younger brothers and sisters, sweeping, washing plates, and saying the truth."]},
    {k:"p", t:"These duties are not for one sex only. Boys can learn to cook and girls can learn to farm and to lead; when everybody helps, the work becomes light and finishes early."},
    {k:"rule"},
    {k:"h3", t:"Equal Educational Opportunity for Girls and Boys"},
    {k:"p", t:"Girls and boys have **equal ability** and an **equal right to education**. Sending a girl to school brings the same advantages to the family as sending a boy."},
    {k:"bul", items:["An educated girl can read, count and keep her own records.","She takes better care of the health of her family.","She can earn a living and support her parents when they are old.","Educated mothers send their own children to school, so the whole community develops.","The nation gains teachers, nurses, farmers, traders and leaders."]},
    {k:"rule"},
    {k:"h3", t:"Family Relationships: Love, Friendship and Care"},
    {k:"p", t:"**Love** is wishing good for a person and showing it by what you do. **Friendship** is the closeness between people who trust and help one another. **Care** is looking after someone kindly, especially when that person is young, old, weak or sick."},
    {k:"bul", items:["Speak kindly and never insult one another.","Share food, clothes and toys.","Help a sick brother or sister and tell an adult at once.","Obey father and mother, and respect grandparents.","Say sorry when you are wrong and forgive when someone offends you."]},
    {k:"p", t:"**Respect** is to treat someone as important and valuable. Respect must go both ways: children respect elders, and elders respect children."},
    {k:"rule"},
    {k:"h3", t:"People with Disabilities"},
    {k:"p", t:"A **disability** is a condition that makes it harder for a person to see, to hear, to walk or to learn. A disability does not stop a person from thinking, learning, working or playing."},
    {k:"bul", items:["Blind and partially sighted people can read with raised **Braille** letters and can move about with a white cane.","Deaf and hard-of-hearing people speak and read with their hands through **sign language**.","People who cannot walk use a **wheelchair** or crutches; ramps and plain ground help them move.","People with learning difficulties learn better when they are taught slowly and patiently."]},
    {k:"p", t:"Never laugh at, imitate, or leave out a person with a disability. Guide them safely, read out what is on the board, include them in games, and always treat them as your equal."},
    {k:"rule"},
    {k:"h3", t:"Keeping Every Child Safe"},
    {k:"p", t:"Your body belongs to you. If any person touches you in a bad way, or asks you to keep such a secret, you must say **NO** loudly, move away, and tell your father, mother, teacher or another trusted grown-up at once. Telling is not naughty – it is protecting yourself."}
  ],
  focus:["Single-parent, nuclear and extended family","Definition of gender","Roles of boys and men; roles of girls and women","Equal educational opportunity for girls and boys","Love, friendship and care","Issues affecting people with disabilities"],
  terms:[
    {t:"family", d:"a group of people who live together and care for one another", x:"My family eats together every evening."},
    {t:"nuclear family", d:"a father, a mother and their children only", x:"A nuclear family is small."},
    {t:"extended family", d:"a family that also includes grandparents, aunties, uncles and cousins", x:"My extended family gathers at Christmas."},
    {t:"single-parent family", d:"a family where one parent lives with and cares for the children", x:"A single-parent family can be strong and happy."},
    {t:"gender", d:"the roles society gives to boys and girls, men and women", x:"We must discuss gender fairly."},
    {t:"role", d:"the work or duty a person is expected to do", x:"The role of a pupil is to study."},
    {t:"responsibility", d:"a duty you are expected to carry out", x:"Sweeping the yard is my responsibility."},
    {t:"disability", d:"a condition that makes it harder for a person to see, hear, walk or learn", x:"A disability does not stop a person from learning."},
    {t:"care", d:"to look after someone kindly", x:"We care for a sick brother."},
    {t:"respect", d:"to treat someone as important and valuable", x:"Show respect to every classmate."}
  ],
  facts:[
    {q:"Name the three types of family studied in this unit.", a:"The single-parent family, the nuclear family and the extended family."},
    {q:"Who makes up a nuclear family?", a:"A father, a mother and their children."},
    {q:"Give one responsibility of a child in the home.", a:"Any correct answer, e.g. sweeping, fetching water, helping with younger children, doing homework."},
    {q:"Why should girls go to school just like boys?", a:"Because girls and boys have equal ability and equal right to education, and educated girls help their families and the nation."},
    {q:"State one way a family shows love to a sick member.", a:"By caring for them, giving medicine, cooking for them and taking them to the clinic."},
    {q:"What should you do if someone touches you in a bad way?", a:"Say NO loudly, move away, and tell a parent, teacher or school authority at once."}
  ],
  tf:[
    {s:"An extended family includes grandparents, aunties and uncles.", a:"true", why:"The extended family goes beyond the parents and children."},
    {s:"Only boys should be sent to school.", a:"false", why:"Girls and boys have an equal right to education."},
    {s:"A single-parent family is a real family.", a:"true", why:"One parent caring for children is a complete family type."},
    {s:"People with disabilities cannot learn anything.", a:"false", why:"People with disabilities can learn and work well when they are supported."},
    {s:"Cooking and cleaning can be done by both men and women.", a:"true", why:"Household work is not only for one gender."},
    {s:"Bad touches should be kept secret.", a:"false", why:"Bad touches must always be reported to a trusted adult."}
  ],
  apply:[
    {q:"A blind girl joins your class. Write two things you and your friends can do to help her.", a:"Guide her safely round the school, read out what is on the board, include her in games, and never laugh at her."},
    {q:"Your brother says cooking is only for girls. What would you tell him and why?", a:"Cooking is a skill everybody needs; both boys and girls should learn it so they can care for themselves and help the family."},
    {q:"Why is it important to know the names of all the members of your family?", a:"It gives you a sense of belonging and identity, and helps you know who to turn to for care and help."},
    {q:"How can a family show care when the mother is sick?", a:"Children can help with chores, keep quiet so she rests, fetch water and medicine, and an adult can take her to the clinic."}
  ],
  sort:{ title:"Family types and family duties",
    groups:[
      {name:"Nuclear family", items:["Father","Mother","Their own children"]},
      {name:"Extended family", items:["Grandmother","Uncle","Auntie","Cousin"]},
      {name:"Duties in the home", items:["Sweeping","Fetching water","Washing plates","Caring for the sick"]}
    ]},
  mapwork:{ title:"My family tree", caption:"Draw your own family tree in the space provided. Write each person's name and how they are related to you.",
    items:[
      {p:"Grandfather / Grandmother", f:"the parents of your father or mother"},
      {p:"Father / Mother", f:"the parents who care for you in the home"},
      {p:"Brother / Sister", f:"children of the same parents as you"},
      {p:"Uncle / Auntie", f:"the brother or sister of your father or mother"},
      {p:"Cousin", f:"the child of your uncle or auntie"},
      {p:"Myself", f:"the child writing this family tree"}
    ]},
  casestudy:{ title:"Musu's home in Gbarnga",
    text:"Musu lives in Gbarnga with her mother, her small brother Sekou, her grandmother and her uncle Varney. Every morning Musu sweeps the parlour and Sekou packs the mats. Their grandmother cooks while their uncle goes to the market. Musu's mother works at the clinic. Last week Sekou had malaria, and everyone in the house helped care for him.",
    questions:[
      {q:"What type of family does Musu belong to?", a:"An extended family, because a grandmother and an uncle live with them."},
      {q:"Name two duties carried out in Musu's home.", a:"Any two: sweeping, packing mats, cooking, going to the market, working at the clinic."},
      {q:"How did the family show care for Sekou?", a:"Everyone in the house helped to care for him while he had malaria."}
    ]},
  project:{ title:"My family and me",
    brief:"Find out about your own family and present what you learn to the class.",
    steps:["Write the names of everybody who lives in your house.","Beside each name write how that person is related to you.","Write one duty each person carries out.","Draw a picture of your family at work or at a meal.","Tell the class the type of family you belong to and one thing you love about it."],
    criteria:["All family members named correctly","Correct family type identified","At least three duties listed","A neat labelled drawing","Clear speaking during the presentation"]},
  activities:["Tell the names of family members in your home and discuss the family type you belong to","Identify males and females in your family and write the role of each","Discuss the meaning of gender","List responsibilities of boys and men, and of girls and women","Role play good and bad touches and explain where bad touches can be reported","Pass the Pen activity on best ways to treat people with disabilities"],
  materials:["Cardboard cut-outs of family types","Picture of someone helping a disabled person cross the road","Poster sheets and markers"],
  assessment:["Quizzes","Class work","Assignments and attendance","Class participation","Individual presentations","Test"]
},
{
  grade:1, period:"II", sem:"One", icon:"🏫",
  title:"Living Together at Home and School",
  subtitle:"Rules and norms, sanitation, safety, directions and reporting bullying",
  outcomes:["Learners determine the attributes of a good home","Learners develop respect for community leaders and elders","Learners follow basic health and safety rules at school and home","Learners differentiate a friend from a bully and report bullying"],
  objectives:["Discuss the characteristics that make up a home","Develop respect for community leaders","Follow health rules at home and at school","Apply safety rules at home and at school","Give the direction of their home and school","Report bullying to school authorities or parents"],
  note:"<b>Rules</b> are things we must do or must not do so that people can live together in peace. Good <b>sanitation</b> — keeping our home, school and body clean — prevents <b>water-borne diseases</b> like cholera and diarrhoea.",
  study:[
    /* ---- course text: Semester One, Period II (guide pp. 4-5) ---- */
    {k:"h3", t:"The Family and the Home"},
    {k:"p", t:"A **home** is the place where a family lives together. A home gives shelter, rest, food and love. The people who live together in one house, whether they are relations or not, make up a household."},
    {k:"p", t:"A **community** is a group of people living in one area and sharing its school, market, clinic, church or mosque, roads and water source. Your home and your family are part of a bigger community."},
    {k:"rule"},
    {k:"h3", t:"Rules and Norms Governing the Home"},
    {k:"p", t:"A **rule** is something we must do or must not do so that people can live together in peace. A **norm** is the usual way of behaving that people accept."},
    {k:"bul", items:["Wake up early, bathe and dress neatly for school.","Greet elders and answer them politely.","Eat what is given and do not waste food.","Do your chores before you go out to play.","Ask permission before taking anything that is not yours.","Be in bed by the time father or mother says.","Tell the truth, even when the truth is difficult."]},
    {k:"p", t:"When a rule is kept, there is peace in the home. When a rule is broken, there is quarrelling, punishment and sadness. These results of keeping or breaking a rule are called **consequences**."},
    {k:"rule"},
    {k:"h3", t:"Rules and Norms Governing the Community"},
    {k:"p", t:"Every community has leaders and rules of its own. In a Liberian town the **town chief**, the **town council of elders**, the **mayor** of a city and the **superintendent** of a county are the people who guide and speak for the community."},
    {k:"bul", items:["Obey the rules of the town: no noise at night, no cutting of young trees, no dumping of rubbish in the gutter.","Attend community meetings and town development work.","Respect the property and the worship of other people.","Report theft, fighting or cruelty to a leader or to the police.","Settle quarrels by talking, not by fighting."]},
    {k:"rule"},
    {k:"h3", t:"Sanitation"},
    {k:"p", t:"**Sanitation** means keeping our home, school and body clean and free from waste. Good sanitation keeps sickness away."},
    {k:"bul", items:["Sweep the house and the yard every day and burn or bury the rubbish.","Use a pit latrine or a toilet, never the bush near the house.","Cover the water container and draw water with a clean cup.","Wash hands with soap after the toilet and before eating.","Cut the grass and clear stagnant water so mosquitoes cannot breed.","Keep the kitchen and the food away from flies."]},
    {k:"rule"},
    {k:"h3", t:"Preventing Water-borne Diseases"},
    {k:"p", t:"A **water-borne disease** is a sickness carried in dirty water, such as **cholera**, **typhoid** and **diarrhoea**. Germs from faeces get into the water that people drink."},
    {k:"bul", items:["Boil the drinking water, or treat it with chlorine or water-purifying tablets.","Drink from a protected well, borehole or pipe-borne supply.","Do not drink from a stream where people also wash or bathe.","Keep latrines far away from wells and boreholes.","Wash vegetables and fruit with clean water before eating."]},
    {k:"p", t:"A person with watery diarrhoea becomes weak very quickly. Give **oral rehydration solution (ORS)** or clean salt-and-sugar water and take the person to a clinic at once."},
    {k:"rule"},
    {k:"h3", t:"Safety Rules"},
    {k:"p", t:"A **safety rule** is an instruction that keeps us from harm. Safety rules protect life, and they must be obeyed at home, on the road and at school."},
    {k:"bul", items:["Cross the road at a corner or zebra crossing; look left, right and left again.","Do not play near the road, the gutter, the river bank or a running vehicle.","Do not climb walls, trees or a burning fence.","Keep paraffin, kerosene, matches, pesticides and medicine out of the reach of children.","Do not run with a sharp object in your hand; walk on the stairs, never run.","Tell an adult at once about a broken wire, a deep hole or a stray dog."]},
    {k:"rule"},
    {k:"h3", t:"Safe Use of Electrical and Electronic Gadgets"},
    {k:"p", t:"Electricity gives light, power and music, but it can kill. Never touch a wire or a socket with wet hands or wet feet, and never put fingers or metal objects into a socket."},
    {k:"bul", items:["Do not play with sockets, plugs, extension cables or bare wires.","Switch the appliance off before you unplug it; pull the plug, not the cable.","Keep radios, televisions and phone chargers away from water and from heat.","Report a sparking, smoking or humming wire to an adult immediately.","Use the phone or tablet only for the time your parents allow, and never to frighten or insult others.","Do not use a phone while it is charging on a wet surface."]},
    {k:"rule"},
    {k:"h3", t:"Direction Map of Home and School"},
    {k:"p", t:"A **direction** is the way to go from one place to another. Directions are given with the four main points: **north, east, south and west**."},
    {k:"p", t:"To draw a simple direction map of your home and school: put your house in the right place, then draw the road, the church, the shop and the stream, and write a label beside each one. Mark an arrow showing the way to school."},
    {k:"p", t:"The same idea is used on a **Google map** and on a **GPS**: a road appears as a coloured line, an important place appears as a pin or icon, and the blue arrow shows where you are and which way you are facing."},
    {k:"rule"},
    {k:"h3", t:"Friendly and Unfriendly Manners"},
    {k:"p", t:"Manners are the way we behave toward other people. Friendly manners make people want to be with you; unfriendly manners hurt and divide."},
    {k:"cols", a:["Greeting elders and answering politely","Saying ‘please’, ‘thank you’ and ‘sorry’","Sharing and taking turns","Helping a fallen classmate up","Speaking softly indoors"], b:["Pushing and snatching","Teasing, mocking and calling names","Laughing at someone who is different","Shouting or answering back rudely","Hiding or spoiling other people's things"]},
    {k:"p", t:"A **bully** is someone who repeatedly frightens or hurts another person. Bullying is never a private matter: tell your teacher, your parents or a school authority at once, and always stand by the person being bullied."}
  ],
  focus:["The family and the home","Rules and norms governing the home and the community","Sanitation and prevention of water-borne diseases","Safety rules; safe use of electrical and electronic gadgets","Direction map of home and school","Friendly and unfriendly manners"],
  terms:[
    {t:"home", d:"the place where a family lives together", x:"A clean home keeps us healthy."},
    {t:"rule", d:"something we must do or must not do so people live in peace", x:"One school rule is to come on time."},
    {t:"norm", d:"the usual way of behaving that people accept", x:"Greeting elders is a norm in Liberia."},
    {t:"community leader", d:"a person chosen to guide and speak for the people of an area", x:"The town chief is a community leader."},
    {t:"sanitation", d:"keeping our surroundings clean and free from waste", x:"Good sanitation stops disease."},
    {t:"water-borne disease", d:"a sickness carried in dirty water, such as cholera", x:"Boiling water prevents water-borne disease."},
    {t:"safety rule", d:"an instruction that keeps us from harm", x:"Look both ways is a safety rule."},
    {t:"direction", d:"the way to go from one place to another", x:"Give the direction from your home to school."},
    {t:"bully", d:"someone who repeatedly frightens or hurts another person", x:"A bully must be reported."},
    {t:"hygiene", d:"the habit of keeping the body clean", x:"Hand washing is good hygiene."}
  ],
  facts:[
    {q:"Give two rules that govern the home.", a:"Any two, e.g. greet elders, keep the house clean, come home before dark, do not fight."},
    {q:"Name two community leaders in your area.", a:"Any two, e.g. town chief, elder, pastor, imam, community chairperson, city mayor."},
    {q:"When should you wash your hands with soap?", a:"Before eating, after using the toilet, after playing, and after cleaning."},
    {q:"State one way to prevent water-borne diseases.", a:"Boil or treat drinking water, cover it, use a clean toilet, and keep the surroundings clean."},
    {q:"What must you do before crossing a street?", a:"Stop, look left and right, listen, and cross only when the road is clear."},
    {q:"What should you do if someone bullies you at school?", a:"Report it at once to a teacher, the school authorities or your parents."}
  ],
  tf:[
    {s:"Rules help people live together in peace.", a:"true", why:"Rules guide behaviour and prevent quarrels."},
    {s:"It is safe for children to play with electric wires.", a:"false", why:"Electric wires can shock or kill; only adults should handle them."},
    {s:"Dirty drinking water can cause disease.", a:"true", why:"Water-borne diseases such as cholera come from dirty water."},
    {s:"Bullying is only a joke and should be ignored.", a:"false", why:"Bullying hurts people and must be reported to an adult."},
    {s:"Community leaders should be respected.", a:"true", why:"They guide and serve the people of the community."},
    {s:"You should cross the street without looking if you are in a hurry.", a:"false", why:"You must always stop and look both ways to stay safe."}
  ],
  apply:[
    {q:"Your friend throws rubbish in the street. What will you tell him?", a:"That rubbish blocks the drains, breeds mosquitoes and causes disease, and that he should use a bin or rubbish pit."},
    {q:"A new pupil does not know the way from the school to the market. How would you give directions?", a:"Name the landmarks in order and say left or right at each turn, e.g. 'Go straight past the church, turn right at the big cotton tree, the market is on your left.'"},
    {q:"Why must the school compound be cleaned every week?", a:"To stop mosquitoes and flies from breeding, prevent disease, and make the school a pleasant place to learn."},
    {q:"Your friend is being bullied but is afraid to talk. What advice will you give?", a:"Tell him that keeping quiet lets the bullying continue; encourage him to report to a teacher or parent, and offer to go with him."}
  ],
  sort:{ title:"Safe and unsafe behaviour",
    groups:[
      {name:"Safe", items:["Washing hands with soap","Crossing at the crosswalk","Boiling drinking water","Telling a teacher about a bully"]},
      {name:"Unsafe", items:["Playing with matches","Touching bare electric wires","Drinking water from a dirty creek","Keeping bullying a secret"]}
    ]},
  mapwork:{ title:"Map from my home to my school", caption:"Draw a simple map showing the road from your home to your school. Colour the roads and mark each landmark.",
    items:[
      {p:"My home", f:"the starting point of the journey"},
      {p:"Main road", f:"the biggest road you follow"},
      {p:"Landmark (church, mosque, market or big tree)", f:"a well-known place that helps you find your way"},
      {p:"Crosswalk", f:"the marked place where it is safe to cross"},
      {p:"My school", f:"the place where the journey ends"}
    ]},
  casestudy:{ title:"Clean-up day at Kakata Public School",
    text:"On Friday the pupils of Kakata Public School held a clean-up campaign. They cut the tall grass, filled the pot-holes where water had settled, and burned the rubbish in a pit far from the classrooms. Before eating, every pupil washed hands with soap at a bucket with a tap. The head teacher explained that the standing water had been breeding mosquitoes.",
    questions:[
      {q:"Why did the pupils fill the pot-holes?", a:"Because water settled there and bred mosquitoes, which spread malaria."},
      {q:"Name one good hygiene habit shown in the passage.", a:"Washing hands with soap before eating."},
      {q:"Give one benefit of the clean-up campaign.", a:"Fewer mosquitoes and less disease, and a cleaner, safer school compound."}
    ]},
  project:{ title:"Class rules poster",
    brief:"Work in a mixed group to make rules that will keep your class clean, safe and peaceful.",
    steps:["Discuss the problems you see in your class and school.","Agree on five rules that would solve those problems.","Write the rules clearly on a poster sheet.","Draw a picture beside each rule.","Present the poster to the class and display it on the wall."],
    criteria:["Five sensible rules written clearly","Rules cover cleanliness, safety and respect","Neat handwriting and drawings","Every group member speaks","Rules agreed by the whole class"]},
  activities:["Sketch a picture of your family tending a sick sibling","Name and discuss leaders in your community","Role play a community leader visiting the school","Organise a hand washing exercise showing the correct method","Carry out a clean-up campaign on campus","Draw objects that are harmful to play with","Demonstrate safe ways to cross the street and to use phones and computers"],
  materials:["Visual aids, markers and posters","Pictures of community leaders","Pictures of brooms, rakes, hoes and wheelbarrows","Poster showing a crosswalk","Bucket of water and soap"],
  assessment:["Quizzes","Class work","Assignments","Class participation","Individual presentations","Test"]
},
{
  grade:1, period:"III", sem:"One", icon:"🌳",
  title:"Man and His Environment",
  subtitle:"The environment, weather and climate, protecting the forest and natural resources",
  outcomes:["Learners explain the importance of protecting the environment","Learners outline how farming, logging and mining impact the forestland","Learners identify renewable energy sources and resources for revenue"],
  objectives:["Define the environment","Describe man's specific activities carried on in the environment","Define weather and climate","Explain how farming and charcoal burning destroy the forestland","Distinguish natural resources for energy from those that generate revenue"],
  note:"The <b>environment</b> is everything around us — people, animals, plants, rivers, mountains and the air. <b>Weather</b> is what the sky is like today; <b>climate</b> is the usual weather of a place over many years. Liberia has two seasons: the <b>rainy season</b> and the <b>dry season</b>.",
  study:[
    /* ---- course text: Semester One, Period III (guide pp. 6-7) ---- */
    {k:"h3", t:"Definition of Environment"},
    {k:"p", t:"The **environment** is everything around us – the land, the water, the air, the plants, the animals and the people. Our environment is where we live and from which we get everything we need to live."},
    {k:"bul", items:["**Where people live** – houses, flats, apartments, wards and towns; in Liberia most people live in small towns and villages.","**Where animals live** – in the forest, on the farm, in the water and in our homes (goats, sheep, fowls, dogs, cattle, fish and bush creatures).","**Plants** – trees, bushes, grasses, ferns and crops; plants give us food, medicine, shade, timber and the air we breathe.","**River bodies** – rivers, streams, creeks, lakes and the ocean; they give water, fish and transport.","**Mountains and hills** – high land such as the **Bong Mountain range** and **Mount Nimba**; they catch rain, give rise to rivers and are cool and forested."]},
    {k:"rule"},
    {k:"h3", t:"How People Influence the Environment"},
    {k:"p", t:"People change their environment both for good and for evil."},
    {k:"cols", a:["Planting trees and new crops","Digging canals and boreholes for clean water","Building schools, hospitals and roads","Keeping the compound and town clean","Making forest reserves and protecting young trees"], b:["Cutting down the forest for charcoal and for farms","Burning rubbish and polluting the air","Dumping plastic and night soil in the river","Killing young fish and hunting animals to extinction","Washing and bathing in the drinking-water stream"]},
    {k:"p", t:"**Pollution** means making the land, the water or the air dirty and harmful. Pollution poisons the plants, the fish and the people who depend on them."},
    {k:"rule"},
    {k:"h3", t:"Weather and Climate"},
    {k:"p", t:"**Weather** is what the sky and the air are like on one day – sunny, cloudy, rainy, windy or hot. **Climate** is the usual weather of a place over many years."},
    {k:"p", t:"Liberia has a **tropical climate**: it is hot and wet all year, and it has two seasons – the **rainy season** (about April/May to October) and the **dry season** (about November to March), when the dry **harmattan** wind blows dust from the Sahara."},
    {k:"bul", items:["Heavy rain fills the rivers and makes the rice and cassava grow.","Long drought makes the wells dry and the crops wither.","Strong wind tears off zinc roofs and uproots trees.","Too much rain washes the soil down the hill into the rivers."]},
    {k:"rule"},
    {k:"h3", t:"Effect of Weather on Living Things"},
    {k:"p", t:"Plants, animals and people all depend on the weather. Too little rain makes hunger; too much rain destroys houses and spreads sickness; great heat dries up the streams."},
    {k:"bul", items:["Crops: some grow in the wet season (rice, cassava, plantain), some in the dry season (vegetables, groundnut).","Animals: fish move with the water; cattle need pasture and water; poultry must be shaded from heat and rain.","People: malaria and diarrhoea rise in the rainy season, coughs and eye trouble in the harmattan."]},
    {k:"rule"},
    {k:"h3", t:"Climate Change"},
    {k:"p", t:"**Climate change** means that the usual weather pattern of the earth is shifting. The earth is getting warmer because people burn wood, charcoal, oil and gas, and because forests are cut down."},
    {k:"bul", items:["Rains come late or fall too heavily, so farming calendars are upset.","The dry season becomes longer and the streams run dry.","The sea rises and floods the low coast and the mangroves.","Stronger storms damage houses, schools and crops."]},
    {k:"p", t:"Every learner can help: plant and water trees, do not burn rubbish or forest, use only the wood you need, and keep the surroundings clean."},
    {k:"rule"},
    {k:"h3", t:"Farming Methods that Protect the Forest"},
    {k:"p", t:"**Slash-and-burn** (swidden) farming is the cutting and burning of bush before planting. It is the common method in Liberia, but when it is repeated every year on the same hill the forest never recovers and the soil is washed away."},
    {k:"bul", items:["**Leave a bush fallow** – let the land rest for many years so forest can grow back.","**Rotate crops** – change the crop planted each season to keep the soil rich.","**Mix crops** – plant beans and groundnut with cassava so the soil keeps its goodness.","**Terrace and ridge** across the slope so rainwater does not carry the soil away.","**Plant trees and grasses** on the boundaries, on the river banks and on the hill tops.","**Protect the forest reserve** – never cut or burn inside it without permission."]},
    {k:"p", t:"**Deforestation** is cutting down the trees of a forest until the land is bare. Bare land gives less rain, fewer birds and poorer harvests."},
    {k:"rule"},
    {k:"h3", t:"Natural Resources"},
    {k:"p", t:"A **natural resource** is something useful that comes from nature. Liberia's resources include **timber**, **iron ore**, **gold**, **diamonds**, **rubber**, **water**, **fish** and good **agricultural land**."},
    {k:"bul", items:["**For energy** – firewood, charcoal, palm oil, water power for electricity, and the sun and wind.","**For revenue (money)** – timber, rubber, iron ore, gold, diamonds and crops sold at home and abroad."]},
    {k:"p", t:"**Renewable energy** never runs out: sunlight, wind and falling water. **Non-renewable** resources can be finished, like petroleum and minerals."},
    {k:"p", t:"**Conservation** means protecting and using resources wisely so that they do not finish. Take only what you need, protect the watersheds, and never waste."}
  ],
  focus:["Definition of environment: where people live, where animals live, plants, river bodies, mountains","How people influence the environment","Effect of weather on living things and effect of climate change","Farming methods that protect the forest","Natural resources for energy and for revenue"],
  terms:[
    {t:"environment", d:"everything around us — land, water, air, plants, animals and people", x:"We must protect the environment."},
    {t:"weather", d:"what the sky and air are like on one day", x:"Today's weather is rainy."},
    {t:"climate", d:"the usual weather of a place over many years", x:"Liberia has a wet tropical climate."},
    {t:"forest", d:"a large area covered with trees", x:"The forest gives us timber and clean air."},
    {t:"deforestation", d:"cutting down the trees of a forest until the land is bare", x:"Deforestation destroys the home of animals."},
    {t:"slash-and-burn", d:"a farming method where bush is cut and burnt before planting", x:"Slash-and-burn farming harms the soil."},
    {t:"natural resource", d:"something useful that comes from nature", x:"Iron ore is a natural resource."},
    {t:"renewable energy", d:"energy that never runs out, such as sunlight and water power", x:"Solar power is renewable energy."},
    {t:"pollution", d:"making the land, water or air dirty and harmful", x:"Plastic pollution blocks our drains."},
    {t:"conservation", d:"protecting and using resources wisely", x:"Conservation keeps the forest for the future."}
  ],
  facts:[
    {q:"What is the environment?", a:"Everything around us — the land, water, air, plants, animals and people."},
    {q:"Name the two seasons of Liberia.", a:"The rainy season and the dry season."},
    {q:"Give two ways people destroy the forestland.", a:"Slash-and-burn farming, charcoal burning, logging and mining."},
    {q:"Name two natural resources of Liberia.", a:"Any two: iron ore, gold, diamonds, rubber, timber, fish, water."},
    {q:"Give one source of renewable energy.", a:"Sunlight (solar), water (hydro) or wind."},
    {q:"How can you help solve the problem of plastic pollution?", a:"Do not throw plastics in the street or drains; collect them in a bin, and reuse containers instead of dropping them."}
  ],
  tf:[
    {s:"Weather and climate mean exactly the same thing.", a:"false", why:"Weather is the condition on one day; climate is the usual pattern over many years."},
    {s:"Charcoal burning destroys trees.", a:"true", why:"Trees must be cut and burnt to make charcoal."},
    {s:"Sunlight is a renewable source of energy.", a:"true", why:"The sun keeps shining and does not run out."},
    {s:"Throwing plastic in the gutter is good for the town.", a:"false", why:"Plastic blocks drains, causes flooding and breeds mosquitoes."},
    {s:"Liberia has iron ore and gold as natural resources.", a:"true", why:"These minerals are mined and earn revenue for the country."},
    {s:"Trees help to keep the air clean.", a:"true", why:"Trees take in bad air and release the oxygen we breathe."}
  ],
  apply:[
    {q:"A farmer wants to clear a big forest by burning. Suggest one better method and give a reason.", a:"He could farm the same plot again using compost or crop rotation, which keeps the soil rich and saves the trees."},
    {q:"How does the rainy season help farmers in Liberia?", a:"The rain waters the crops so seeds germinate and grow without irrigation."},
    {q:"How does the rainy season hinder people in your town?", a:"Roads become muddy and impassable, houses flood, and it is harder to dry rice and travel to market."},
    {q:"Why should Liberia protect the Sapo forest?", a:"It is home to rare animals, it keeps the air and rivers clean, and it can bring income from tourism and research."}
  ],
  sort:{ title:"Helping and harming the environment",
    groups:[
      {name:"Helps the environment", items:["Planting trees","Using solar lamps","Putting rubbish in a pit","Protecting the river bank"]},
      {name:"Harms the environment", items:["Slash-and-burn farming","Charcoal burning","Throwing plastic in the gutter","Cutting trees along the river"]}
    ]},
  mapwork:{ title:"My environment", caption:"Draw a map of the area round your home showing plants, animals, water and buildings. Label each part.",
    items:[
      {p:"Houses", f:"where the people of the area live"},
      {p:"Trees and farm", f:"the plants that give food, shade and clean air"},
      {p:"River or creek", f:"the water body used for washing, fishing and drinking"},
      {p:"Animals", f:"the domestic or wild animals that live nearby"},
      {p:"Rubbish pit", f:"the place where waste is safely put"}
    ]},
  casestudy:{ title:"The bare hill behind Zwedru",
    text:"Ten years ago the hill behind Zwedru was thick forest. People began to cut the trees to burn charcoal and to make farms. Today the hill is bare. When heavy rain falls, the soil washes down into the creek and the water turns brown. Fish are fewer, and the women must walk further to fetch clean water.",
    questions:[
      {q:"What caused the hill to become bare?", a:"People cut down the trees for charcoal burning and for farming."},
      {q:"What happens to the soil when heavy rain falls on the bare hill?", a:"The soil is washed down into the creek, making the water brown."},
      {q:"Name one effect on the people of Zwedru.", a:"There are fewer fish and the women must walk further to fetch clean water."}
    ]},
  project:{ title:"Protecting my environment",
    brief:"Find one environmental problem near your school and suggest how it can be solved.",
    steps:["Walk around the school with your group and look for a problem such as rubbish, bare soil or a blocked drain.","Write down what you see and what causes it.","Discuss two ways the problem can be solved.","Draw a 'before' and 'after' picture.","Present your plan to the class and choose one action to carry out."],
    criteria:["A real problem identified","The cause correctly explained","Two sensible solutions given","Clear before-and-after drawings","One action actually carried out"]},
  activities:["Discuss how people depend on the environment for survival","Draw a map of your environment showing plants and animals","Discuss slash-and-burn farming and its impact on natural vegetation","Discuss how charcoal burning is negative to health","Discuss the two main seasons of Liberia and how they help or hinder farming","Make a field trip to a slash-and-burn farm and report your observation","Identify natural resources in each county of Liberia"],
  materials:["Pictures of forest, towns, mountains and rivers","Physical map of Liberia","Posters showing axes, cutlasses and power-saws","Diagram of deforested land","Map of natural resources in Liberia"],
  assessment:["Quizzes","Class work","Field trip report","Class participation","Test"]
},
{
  grade:1, period:"IV", sem:"Two", icon:"🍚",
  title:"Basic Needs — Similarities in Liberia and Other West African Countries",
  subtitle:"Food, clothing, shelter, healthcare, education, communication and transportation",
  outcomes:["Learners recognise that the basic needs of man are necessary for survival","Learners demonstrate the proper use of communication gadgets","Learners appreciate the benefits of transportation to socio-economic development"],
  objectives:["Categorise the basic needs of man as food, clothing, shelter, healthcare and education","Analyse the importance of each of the needs","Discuss the means of communication and transportation"],
  note:"<b>Basic needs</b> are the things every person must have in order to live well: <b>food, clothing, shelter, healthcare and education</b>. <b>Wants</b> are things that are nice to have but that we can live without.",
  study:[
    /* ---- course text: Semester Two, Period IV (guide pp. 8-10) ---- */
    {k:"h3", t:"Basic Needs of Man"},
    {k:"p", t:"A **basic need** is something a person must have in order to live well. The basic needs studied in this unit are **food, clothing, shelter, healthcare, education, tools for communication and transportation**."},
    {k:"p", t:"A **want** is something that is nice to have but that we can live without, such as a bicycle, a radio, shoes or a soft drink. Needs must come before wants: a wise family spends first on food, school fees, medicine and rent."},
    {k:"rule"},
    {k:"h3", t:"Food"},
    {k:"p", t:"**Food** is what we eat to grow, to work and to stay healthy. Food gives us energy for play and study, builds new blood and bone, and protects the body from disease."},
    {k:"p", t:"**Sources of food** – everything we eat comes from plants or animals:"},
    {k:"bul", items:["**Plants** – rice, cassava, cocoyam, yam, plantain, maize, groundnut, beans, palm oil, vegetables and fruit.","**Animals** – meat, milk, eggs and butter from cattle, goats, sheep, pigs and poultry.","**Marine life** – fish, crab, prawn, periwinkle and shellfish from the river, the lagoon and the sea."]},
    {k:"p", t:"**Nutrition** means getting the right kinds and the right amounts of food for good health. A **balanced diet** contains food from every group, in the right proportion."},
    {k:"table", head:["Group of food","What it does","Examples"], rows:[
      ["Energy (carbohydrates)","Keeps the body warm and gives strength to work","Rice, cassava, yam, plantain, bread, sugar"],
      ["Body-building (proteins)","Makes the body grow and repairs it","Fish, meat, egg, beans, groundnut, milk"],
      ["Energy store (fats and oils)","Keeps the body warm and stores energy","Palm oil, butter, coconut, fatty meat"],
      ["Protective (vitamins and minerals)","Fights disease and builds bone and blood","Oranges, banana, potato greens, cassava leaf, carrot"],
      ["Water","Carries food in the body and cools it","Clean drinking water, soup, fruit"]
    ]},
    {k:"p", t:"Children who do not get enough food become **malnourished**: they are thin, weak, easily ill and slow at school."},
    {k:"rule"},
    {k:"h3", t:"Clothing"},
    {k:"p", t:"**Clothing** is what we wear to cover and protect the body."},
    {k:"bul", items:["**Types of clothing** – shirts, trousers, dresses, skirts and blouses, lappa and guinea brocade, school uniform, hat, sandal and shoe.","**Materials** – cotton, wool, linen, lappa cloth, animal skin and synthetic (nylon) cloth."]},
    {k:"p", t:"**Importance of clothing**: it protects the skin from sun, cold, thorns and insects; it keeps us decent and modest; it shows our school, our work or our festival; and it gives warmth and pride."},
    {k:"p", t:"Clothes must be washed, dried and kept clean and mended. Torn clothes should be patched at once."},
    {k:"rule"},
    {k:"h3", t:"Shelter"},
    {k:"p", t:"**Shelter** is a building that protects us from weather and danger. Without a house a family has no rest, no store for its food and no protection from rain, heat or wild animals."},
    {k:"bul", items:["**Traditional house** – mud-brick or wattle-and-daub walls with a thatch roof of palm leaves or grass; it is cool inside.","**Modern house** – cement-block or brick walls with a zinc (corrugated metal) roof; some have two storeys, water and electricity.","**Emergency shelter** – a tent or a mat shed used when a house is destroyed by fire or storm."]},
    {k:"p", t:"**Importance of shelter**: it gives privacy and sleep, stores food and property, protects from rain, sun and insects, and keeps the family together."},
    {k:"p", t:"A good house has windows for light and air, a clean floor, a latrine outside, and a roof that does not leak."},
    {k:"rule"},
    {k:"h3", t:"Healthcare and Education"},
    {k:"p", t:"**Healthcare** is the service that keeps people well and treats them when they are sick. It is given at the hospital, the clinic, the health post and by the nurse, the midwife and the pharmacist. Immunisation (vaccination), antenatal care for mothers, and treatment at the first sign of illness are all part of good healthcare."},
    {k:"p", t:"**Education** is the learning that helps a person develop and earn a living. Children have a right to go to school. At school we learn to read, write, count, think, work with others, and to know the duties of a citizen."},
    {k:"rule"},
    {k:"h3", t:"Tools for Communication"},
    {k:"p", t:"**Communication** is the sending and receiving of messages between people. Its tools include the telephone and mobile phone, radio, television, newspaper, letter and postcard, e-mail and internet, drum, horn, bell and town crier, and the flags and lights used by ships and police."},
    {k:"p", t:"Communication is a basic need because without it a family cannot send news, trade, call for help, or know what is happening in the county and the nation."},
    {k:"rule"},
    {k:"h3", t:"Transportation"},
    {k:"p", t:"**Transportation** is the moving of people and goods from one place to another. It moves children to school, produce to market, medicine to the clinic and goods to the port."},
    {k:"bul", items:["**Land** – on foot, bicycle, motorbike, taxi, bus, lorry, train.","**Water** – canoe, boat, ferry, ship.","**Air** – aeroplane, helicopter."]},
    {k:"p", t:"Where there is no road, people carry goods on the head, on a hammock, on a donkey or in a canoe. Good roads and bridges make transportation cheap and safe."}
  ],
  focus:["Basic needs of man: food, clothing, shelter, healthcare, education","Importance and sources of food; nutrition and food types","Types and importance of clothing","Types and importance of shelter","Tools for communication","Transportation"],
  terms:[
    {t:"basic need", d:"something a person must have in order to live well", x:"Food is a basic need."},
    {t:"want", d:"something nice to have but not needed to stay alive", x:"A toy car is a want, not a need."},
    {t:"food", d:"what we eat to grow, work and stay healthy", x:"Rice and fish are common food in Liberia."},
    {t:"nutrition", d:"getting the right kinds of food for good health", x:"Good nutrition makes children strong."},
    {t:"clothing", d:"what we wear to cover and protect the body", x:"Clothing protects us from sun and rain."},
    {t:"shelter", d:"a building that protects us from weather and danger", x:"A house is a shelter."},
    {t:"healthcare", d:"the services that keep us well and treat us when sick", x:"The clinic provides healthcare."},
    {t:"education", d:"the learning that helps a person develop and earn a living", x:"Education opens many doors."},
    {t:"communication", d:"sending and receiving messages between people", x:"A phone is used for communication."},
    {t:"transportation", d:"the moving of people and goods from place to place", x:"A bus is a means of transportation."}
  ],
  facts:[
    {q:"List the five basic needs of man.", a:"Food, clothing, shelter, healthcare and education."},
    {q:"Give two sources of food.", a:"Plants (farming), animals (livestock) and marine life (fish)."},
    {q:"Why is clothing important?", a:"It covers the body, protects us from sun, rain and cold, and shows our culture."},
    {q:"Name two means of transportation used in Liberia.", a:"Any two: car, motorbike, canoe, boat, aeroplane, bicycle, walking."},
    {q:"Name two tools of communication.", a:"Mobile phone, radio, television, newspaper, letter, computer."},
    {q:"Why is education a basic need?", a:"It gives a person knowledge and skills to earn a living and to help develop the nation."}
  ],
  tf:[
    {s:"Food, clothing and shelter are basic needs.", a:"true", why:"A person cannot live well without them."},
    {s:"A television is a basic need.", a:"false", why:"A television is a want; you can live without it."},
    {s:"Fish is a source of food from marine life.", a:"true", why:"Fish comes from rivers and the sea."},
    {s:"Healthcare is only needed when someone is dying.", a:"false", why:"Healthcare also prevents disease and keeps well people healthy."},
    {s:"A canoe is a means of water transportation.", a:"true", why:"Canoes carry people and goods across rivers."},
    {s:"Education helps a person earn a better living.", a:"true", why:"Education gives knowledge and skills that lead to better work."}
  ],
  apply:[
    {q:"A family has small money. Should they buy medicine or a radio first? Give a reason.", a:"Medicine, because healthcare is a basic need for survival while a radio is only a want."},
    {q:"How does a good road help the people of your town?", a:"It lets farmers carry produce to market, brings goods and medicine in, and helps children reach school and the sick reach the clinic."},
    {q:"Why do people in Liberia and Ghana eat similar foods such as rice and cassava?", a:"Because both countries have a similar tropical climate and soil, so the same crops grow well and the cultures have traded and mixed for a long time."},
    {q:"Name one correct and one wrong way to use a mobile phone.", a:"Correct: calling family or getting help in an emergency. Wrong: using it during class, or sending or sharing rude pictures and messages."}
  ],
  sort:{ title:"Needs and wants",
    groups:[
      {name:"Basic needs", items:["Rice and fish","A house","Clinic treatment","School books","Clothes"]},
      {name:"Wants", items:["Sweets","A toy car","A television","New sneakers for fashion"]}
    ]},
  mapwork:{ title:"Where our basic needs come from", caption:"Complete the chart by writing where each basic need can be obtained in your community.",
    items:[
      {p:"Food", f:"from the farm, the market, the river and the sea"},
      {p:"Clothing", f:"from the market, the tailor and the shop"},
      {p:"Shelter", f:"built with mud brick, cement block, zinc and thatch"},
      {p:"Healthcare", f:"from the clinic, the hospital and trained health workers"},
      {p:"Education", f:"from the school, the teacher and the community"}
    ]},
  casestudy:{ title:"Market day in Buchanan",
    text:"On Saturday the market at Buchanan is full. Fishermen bring fish caught in the Atlantic Ocean. Farmers bring cassava, pepper and plantain from their farms. A tailor sells lappa and shirts. Beside the market there is a clinic and a small school. People come to the market by taxi, by motorbike and on foot.",
    questions:[
      {q:"Which basic need do the fishermen and farmers supply?", a:"Food."},
      {q:"Which two basic needs are provided by the buildings beside the market?", a:"Healthcare (the clinic) and education (the school)."},
      {q:"Name two means of transportation mentioned.", a:"Taxi, motorbike and walking on foot."}
    ]},
  project:{ title:"A day of basic needs",
    brief:"Record how your family met the five basic needs in one day.",
    steps:["For one day, write down what your family ate, wore and did.","Beside each item write which basic need it met.","Note how each thing was obtained — bought, grown, or given.","Draw a picture of one of the needs being met.","Report to the class which need was the hardest to meet and why."],
    criteria:["All five basic needs covered","Correct matching of item to need","Source of each item stated","A neat drawing","Clear oral report"]},
  activities:["Categorise the basic needs of man","Discuss the importance of each need","Discuss the means of communication and transportation","Group work listing food types eaten at home","Role play buying and selling in a market"],
  materials:["Pictures of food, clothing and houses","Pictures of vehicles, canoes and aeroplanes","A mobile phone and a radio for demonstration"],
  assessment:["Quizzes","Class work","Assignments","Class participation","Test"]
},
{
  grade:1, period:"V", sem:"Two", icon:"🥘",
  title:"Man and His Environment — Food, Clothes and Houses",
  subtitle:"Food, traditional clothes and house types in Liberia and West Africa; self-identity",
  outcomes:["Learners identify food types typical of Liberia and other West African countries","Learners tell the kinds of clothes worn in Liberia and Africa and practise wearing indigenous clothes","Learners appreciate houses typical of Liberia","Learners recognise the importance of living together with other people"],
  objectives:["Differentiate food types in Liberia and other West African countries","Describe clothes typical to Liberia and other West African countries","Distinguish structure types of Liberia from those of other West African countries","Appreciate that they are individuals but part of a family"],
  note:"Liberians eat <b>rice</b> as the staple food, with soups such as potato greens, palm butter and cassava leaf. Traditional dress includes the <b>lappa</b>, the <b>country cloth</b> gown and the <b>vai shirt</b>. Houses may be built of <b>mud brick with thatch</b> or <b>cement block with zinc</b>.",
  study:[
    /* ---- course text: Semester Two, Period V (guide pp. 11-13) ---- */
    {k:"h3", t:"Staple Foods of Liberia"},
    {k:"p", t:"A **staple food** is the main food that people eat almost every day. In Liberia the staple is **rice**; it is eaten with soups and sauces at lunch and at dinner."},
    {k:"bul", items:["**Cassava leaf** – pounded cassava leaves cooked with palm oil, fish or meat.","**Palm butter (red soup)** – made from the fruit of the oil palm, cooked with meat, fish or seafood.","**Potato greens, palaver sauce and jute mallow (krinkrinka)** – leafy vegetables and bitter herbs.","**Groundnut soup, beans and plantain, fufu and foofoo** – pounded cassava or plantain eaten with soup.","**Candied fruit, roasted cassava and rice water** – food and drink of every day."]},
    {k:"p", t:"Rice is grown in the **lowland (swamp) rice fields** and on the upland hills. Fish from the rivers and the Atlantic, and bush meat, give the protein that the rice lacks."},
    {k:"rule"},
    {k:"h3", t:"Food of Other West African Countries"},
    {k:"p", t:"The people of West Africa eat much the same kinds of food, because the same crops grow in the same climate."},
    {k:"bul", items:["**Ghana** – fufu, banku, jollof rice, groundnut soup.","**Nigeria** – pounded yam, egusi soup, jollof rice, beans pudding (akara).","**Sierra Leone** – cassava leaf and palm oil, plated rice, agwain.","**Guinea and Senegal** – thieboudienne (fish and broken rice), foutiou, couscous.","**Côte d'Ivoire** – attiéké (cassava couscous), alloco (fried plantain), sauce claire."]},
    {k:"p", t:"Where the rainfall is short, as in the savannah north, millet, sorghum and maize take the place of rice."},
    {k:"rule"},
    {k:"h3", t:"Traditional Clothes of Liberia"},
    {k:"p", t:"Traditional dress is worn on market days, at festivals, at weddings, at naming ceremonies and in the towns during the Poro and Sande outings."},
    {k:"bul", items:["**Lappa** – a length of printed cloth wrapped round the waist, worn mainly by women.","**Country cloth gown** – cloth woven by hand in the villages, worn by men and women as a gown or blanket.","**Vai shirt and Vai cloth** – the dyed and stitched dress of the Vai people.","**Guinea brocade and ‘kroo’ embroidery** – long embroidered gowns for men and big dresses for women.","**Head tie, hat, coral beads and sandal** – the finishing ornaments."]},
    {k:"p", t:"Cloth carries meaning: colour and design may show that a person is married, mourning, celebrating, or belonging to a particular group."},
    {k:"rule"},
    {k:"h3", t:"Traditional Clothes of Other West African Countries"},
    {k:"bul", items:["**Kente** – brightly woven silk and cotton cloth of the Akan of Ghana.","**Boubou / grand boubou** – a wide, flowing three-piece robe worn in Senegal, Guinea, Mali and northern Nigeria.","**Agbada** – the embroidered broad robe of the Hausa and Yoruba men.","**Pagne / wax print** – the wrapped coloured cloth of women throughout the region.","**Fila and kufi** – caps worn with the gowns."]},
    {k:"p", t:"Wearing our own clothes at home and abroad is a way of showing pride in our culture."},
    {k:"rule"},
    {k:"h3", t:"House Types in Liberia"},
    {k:"bul", items:["**Mud-brick house with a thatch roof** – walls of clay soil dried in the sun, roof of palm leaves; cool and cheap but needs re-thatching.","**Wattle-and-daub house** – a frame of sticks plastered with clay.","**Cement-block (or brick) house with a zinc roof** – the common modern house; durable and rain-tight.","**Storey building** – more than one floor, found in Monrovia and the county capitals.","**Temporary shelter** – boards, tarpaulin or mats, used where people move or after a storm."]},
    {k:"p", t:"Around the coast and on the islands you will also see houses raised on **stilts (piles)** above the water and the sand."},
    {k:"rule"},
    {k:"h3", t:"House Types in West Africa"},
    {k:"bul", items:["**Round mud house with a conical thatch roof** – common in the villages of the forest belt.","**Rectangular compound house** – several rooms or huts round a courtyard, for an extended family.","**Mud-brick (adobe) house with flat roof** – in the dry savannah north.","**Stilt house** – over the lagoons and rivers.","**Woven-grass house with a palm-thatch roof** – cheap and cool."]},
    {k:"p", t:"In every country the roof, the walls and the shape of a house follow the rain, the heat and the building materials that are near at hand."},
    {k:"rule"},
    {k:"h3", t:"Self-Identity, Family Relations and Friends"},
    {k:"p", t:"**Self-identity** is knowing who you are and where you belong: your name, your family, your clan, your ethnic group, your county and your country. It is shown by the way you dress, the language you speak, the names you carry and the customs you keep."},
    {k:"bul", items:["Name and family name; the family each name comes from.","The home, town, clan and county you belong to.","The language you speak and the customs you practise.","The relations in the family: father, mother, brother, sister, uncle, auntie, cousin, grandparent.","Friends in other areas, and how they live like us and unlike us."]},
    {k:"p", t:"Liberian boys and girls greet with a handshake or a curtsy, address elders as ‘Papa’, ‘Mama’, ‘Uncle’ or ‘Auntie’, and share food and work with their neighbours. Friends in other West African countries greet, eat, dress and play differently – but they also love their families, go to school, and want peace."}
  ],
  focus:["Food types in Liberia and other West African countries","Traditional clothes worn in Liberia and West Africa","House types in Liberia and West Africa","Self-identity, family relations, friends and people in other areas"],
  terms:[
    {t:"staple food", d:"the main food that people eat almost every day", x:"Rice is the staple food of Liberia."},
    {t:"cassava leaf", d:"a Liberian soup made from pounded cassava leaves", x:"Cassava leaf is eaten with rice."},
    {t:"palm butter", d:"a soup made from the fruit of the oil palm", x:"Palm butter is a favourite Liberian dish."},
    {t:"lappa", d:"a length of cloth wrapped round the waist, worn mainly by women", x:"She tied a colourful lappa."},
    {t:"country cloth", d:"cloth woven by hand in Liberian villages", x:"The chief wore a country cloth gown."},
    {t:"thatch", d:"a roof made from palm leaves or grass", x:"The old house has a thatch roof."},
    {t:"mud brick", d:"a building block made from clay soil and dried in the sun", x:"Many village houses are built of mud brick."},
    {t:"zinc", d:"the corrugated metal sheet used for roofing", x:"The new house has a zinc roof."},
    {t:"self-identity", d:"knowing who you are and where you belong", x:"Self-identity comes from family and culture."},
    {t:"tradition", d:"a custom passed down from parents to children", x:"Wearing country cloth is a tradition."}
  ],
  facts:[
    {q:"What is the staple food of Liberia?", a:"Rice."},
    {q:"Name two Liberian soups.", a:"Any two: cassava leaf, potato greens, palm butter, pepper soup, okra soup."},
    {q:"Name one traditional Liberian dress.", a:"The lappa, the country cloth gown, or the vai shirt."},
    {q:"Name two materials used to build houses in Liberia.", a:"Any two: mud brick, cement block, thatch, zinc, sticks, mud."},
    {q:"Name one food eaten in both Liberia and Ghana.", a:"Rice, cassava, plantain, fufu or pepper soup."},
    {q:"Why is it good to know your own culture?", a:"It gives you self-identity, pride and a sense of belonging to your family and country."}
  ],
  tf:[
    {s:"Rice is the staple food of Liberia.", a:"true", why:"It is eaten almost every day in most Liberian homes."},
    {s:"Country cloth is imported from Europe.", a:"false", why:"Country cloth is woven by hand in Liberian villages."},
    {s:"Thatch and zinc are both used for roofing.", a:"true", why:"Thatch is traditional and zinc is modern, but both cover houses."},
    {s:"People in Sierra Leone and Liberia eat some of the same foods.", a:"true", why:"They share a similar climate, crops and culture."},
    {s:"Only one type of house is built in Liberia.", a:"false", why:"There are mud-brick houses with thatch, and cement block houses with zinc."},
    {s:"Wearing traditional dress helps keep our culture alive.", a:"true", why:"It passes our identity and craft on to the next generation."}
  ],
  apply:[
    {q:"Why do village houses often have thatch roofs while town houses have zinc?", a:"Thatch is made from local palm leaves and costs nothing, while zinc must be bought and carried from town, but zinc lasts longer and does not leak as easily."},
    {q:"A visitor from Nigeria eats jollof rice at your home. What can you tell her about Liberian food?", a:"That rice is our staple too, and we eat it with soups like cassava leaf, potato greens and palm butter."},
    {q:"Why should you be proud of your country cloth?", a:"Because it is made by Liberian hands, it shows our tradition and skill, and it makes our culture known to others."},
    {q:"How do the two seasons affect the clothes people wear?", a:"In the dry season people wear light clothes because of the heat; in the rainy season they need raincoats, umbrellas and warmer clothing."}
  ],
  sort:{ title:"Food, clothes and houses",
    groups:[
      {name:"Liberian food", items:["Cassava leaf","Palm butter","Potato greens","Fufu and soup"]},
      {name:"Traditional clothing", items:["Lappa","Country cloth gown","Vai shirt","Head tie"]},
      {name:"Building materials", items:["Mud brick","Thatch","Cement block","Zinc"]}
    ]},
  mapwork:{ title:"House types in Liberia", caption:"Draw and label a traditional house and a modern house. Write the materials used for each part.",
    items:[
      {p:"Walls of mud brick", f:"made from clay soil dried in the sun; cool but washed by heavy rain"},
      {p:"Walls of cement block", f:"stronger and longer lasting, but costs more money"},
      {p:"Thatch roof", f:"made from palm leaves; free and cool but can leak and burn"},
      {p:"Zinc roof", f:"metal sheets; lasts long and sheds rain but is hot in the sun"},
      {p:"Verandah", f:"the open space in front where the family sits and greets visitors"}
    ]},
  casestudy:{ title:"Fatu visits her cousin in Voinjama",
    text:"Fatu lives in Monrovia in a cement block house with a zinc roof. In August she visited her cousin Yatta in Voinjama. Yatta's family lives in a mud-brick house with a thatch roof. In the evening they ate rice with cassava leaf, and Yatta's grandmother wore a country cloth gown she had woven herself. Fatu learned to tie a lappa before she went home.",
    questions:[
      {q:"Name the two house types in the passage.", a:"A cement block house with a zinc roof, and a mud-brick house with a thatch roof."},
      {q:"What food did the two cousins eat?", a:"Rice with cassava leaf."},
      {q:"What tradition did Fatu learn on her visit?", a:"She learned to tie a lappa."}
    ]},
  project:{ title:"Our culture book",
    brief:"Make a small class book about Liberian food, clothes and houses.",
    steps:["Each pupil draws one Liberian food, one traditional dress, or one house type.","Write two sentences under your drawing saying what it is and where it is found.","Ask an elder at home for one fact about it and add that fact.","Put all the pages together into a class book.","Read your page aloud to the class."],
    criteria:["A clear labelled drawing","Two correct sentences","One fact from an elder","Neat, tidy work","Confident reading to the class"]},
  activities:["Differentiate food types in Liberia and other West African countries","Describe clothes typical to Liberia","Compare house types of Liberia with those of West Africa","Wear indigenous Liberian clothes on culture day","Discuss self-identity and family relations"],
  materials:["Pictures of Liberian and West African dishes","Samples of country cloth and lappa","Pictures of different house types"],
  assessment:["Quizzes","Class work","Culture day presentation","Class participation","Test"]
},
{
  grade:1, period:"VI", sem:"Two", icon:"🇱🇷",
  title:"Political Sub-Divisions, National Songs and Symbols",
  subtitle:"Counties, capitals, county leaders, districts, clans and the National Anthem",
  outcomes:["Learners develop a sense of nationalism and patriotism to Liberia"],
  objectives:["Identify the political sub-divisions of Liberia","Sketch flags of counties in Liberia","Differentiate the smaller political sub-divisions from the larger ones","Sing the national anthem and identify national symbols"],
  note:"Liberia is divided into <b>15 counties</b>. A county is divided into <b>districts</b>, then <b>chiefdoms</b>, then <b>clans</b>, then <b>towns</b>. A county is led by a <b>Superintendent</b>. Our national symbols include the <b>Lone Star flag</b>, the <b>Coat of Arms</b> and the <b>National Anthem</b>.",
  study:[
    /* ---- course text: Semester Two, Period VI (guide pp. 14-15) ---- */
    {k:"h3", t:"The Counties of Liberia"},
    {k:"p", t:"Liberia is divided into **fifteen (15) counties**. A county is the largest political division of the country. Every county has a **county capital**, which is the town where the county government sits."},
    {k:"table", head:["County","Capital","County","Capital"], rows:[
      ["Montserrado","Bensonville (national capital Monrovia lies in it)","Margibi","Kakata"],
      ["Bong","Gbarnga","Bomi","Tubmanburg"],
      ["Nimba","Sanniquellie","Gbarpolu","Bopolu"],
      ["Lofa","Voinjama","Grand Cape Mount","Robertsport"],
      ["Grand Bassa","Buchanan","Grand Gedeh","Zwedru"],
      ["Sinoe","Greenville","Grand Kru","Barclayville"],
      ["Maryland","Harper","Rivercess","Cestos City"],
      ["River Gee","Fish Town","",""]
    ]},
    {k:"p", t:"The national capital, **Monrovia**, is in Montserrado County; it is the seat of the President and the national government."},
    {k:"rule"},
    {k:"h3", t:"County Leaders and their Roles"},
    {k:"bul", items:["**Superintendent** – heads the county; appointed by the President of the Republic. Keeps the peace, coordinates government offices and chairs the county meeting.","**District Commissioner** – heads a district, and settles small disputes in the district.","**City Mayor** – heads a city such as Monrovia, Gbarnga, Harper, Buchanan or Voinjama, and looks after markets, sanitation and the roads.","**Paramount Chief** – heads a chiefdom, with the **traditional chiefs** of the towns under him.","**Town Chairlady / Chairman** – leads the town development association and organises the town's work."]},
    {k:"p", t:"County and town leaders collect taxes for the county, keep records of the people, maintain the market, the roads, the school and the health post, and call meetings when the community must decide something."},
    {k:"rule"},
    {k:"h3", t:"County Flags"},
    {k:"p", t:"Each county has its own flag and its own seal. County flags carry the colours and the signs of the people of that county – a plant, a tool, a river, a mountain, a star, or a pattern from the local cloth."},
    {k:"bul", items:["Counties of Liberia: Bomi, Bong, Gbarpolu, Grand Bassa, Grand Cape Mount, Grand Gedeh, Grand Kru, Lofa, Margibi, Maryland, Montserrado, Nimba, Rivercess, River Gee, Sinoe.","Every county flag is flown at the county hall beside the flag of the Republic.","Learn to recognise your own county flag and to name the county for any flag shown to you."]},
    {k:"rule"},
    {k:"h3", t:"Political Sub-divisions: From the County to the Town"},
    {k:"num", items:["**County** – the largest division, ruled by a Superintendent.","**District** – a part of a county, ruled by a District Commissioner.","**Chiefdom** – an area of several clans led by a **Paramount Chief**.","**Clan** – a group of towns under one chief, whose people speak the same language and are of one ancestry.","**Town** – the smallest division, with its own town chief and its own town land."]},
    {k:"p", t:"These sub-divisions make governing, collecting taxes, counting the people and taking services to every part of the country easier."},
    {k:"rule"},
    {k:"h3", t:"The National Anthem and National Symbols"},
    {k:"p", t:"The national symbols of Liberia are the **flag**, the **Coat of Arms**, the **National Anthem**, the **Lone Star**, the **Pledge of Allegiance** and the national motto."},
    {k:"bul", items:["**The Flag (the Lone Star flag)** – eleven stripes of **red and white**: the eleven men who signed the Declaration of Independence. The red stands for courage and the blood shed for freedom, the white for purity and peace. The blue square stands for Africa, and the single **white five-pointed star** for the liberty we enjoy and for Liberia as the first republic in Africa.","**The National Anthem** – ‘All Hail, Liberia, Hail!’, sung on public holidays, at school assemblies and when the flag is raised.","**The Coat of Arms** – shows a ship under sail (the fathers coming from America), a plough (agriculture), a palm tree (peace and plenty) and a dove carrying the scroll with the motto ‘**The love of liberty brought us here**’.","**The Pledge of Allegiance** – said with the right hand on the chest in front of the flag.","**Independence Day** – **26 July 1847**, when the Declaration of Independence was signed."]},
    {k:"p", t:"**Patriotism** is love and loyalty for one's country. A patriot sings the anthem respectfully, keeps public property clean, obeys the laws, pays taxes and defends the national good name."}
  ],
  focus:["Counties and county capitals","County leadership and the roles of county leaders","County flags","County, district, chiefdom, clan and town","The National Anthem and national symbols"],
  terms:[
    {t:"county", d:"the largest political division of Liberia", x:"Montserrado is a county."},
    {t:"county capital", d:"the main town where the county government sits", x:"Gbarnga is the county capital of Bong."},
    {t:"superintendent", d:"the leader who heads a county", x:"The superintendent works in the county capital."},
    {t:"district", d:"a part of a county", x:"A county is divided into districts."},
    {t:"chiefdom", d:"an area led by a paramount chief", x:"A chiefdom is smaller than a district."},
    {t:"clan", d:"a group of towns under one chief", x:"Several towns make up a clan."},
    {t:"national anthem", d:"the official song of a country", x:"We sing the national anthem at assembly."},
    {t:"flag", d:"a piece of cloth with colours and signs that stands for a country", x:"The Lone Star flag is our flag."},
    {t:"patriotism", d:"love and loyalty for one's country", x:"Patriotism makes us serve Liberia."},
    {t:"symbol", d:"a sign that stands for something important", x:"The Lone Star is a national symbol."}
  ],
  facts:[
    {q:"How many counties does Liberia have?", a:"Fifteen (15)."},
    {q:"Who leads a county in Liberia?", a:"The Superintendent."},
    {q:"Name the county capital of Bong County.", a:"Gbarnga."},
    {q:"List the political sub-divisions from the largest to the smallest.", a:"County, district, chiefdom, clan, town."},
    {q:"Name two national symbols of Liberia.", a:"Any two: the Lone Star flag, the Coat of Arms, the National Anthem, the Pledge of Allegiance."},
    {q:"What is the name of Liberia's national anthem?", a:"'All Hail, Liberia, Hail!'"}
  ],
  tf:[
    {s:"Liberia has fifteen counties.", a:"true", why:"The country is divided into 15 counties."},
    {s:"A clan is bigger than a county.", a:"false", why:"A county is the largest division; a clan is much smaller."},
    {s:"The Superintendent leads a county.", a:"true", why:"He or she heads the county administration."},
    {s:"Monrovia is the capital city of Liberia.", a:"true", why:"Monrovia is the national capital and the capital of Montserrado County."},
    {s:"We should sit down while the national anthem is sung.", a:"false", why:"We stand at attention to show respect for the country."},
    {s:"Every county in Liberia has its own flag.", a:"true", why:"Each of the 15 counties has a county flag as well as the national flag."}
  ],
  apply:[
    {q:"Why do we stand at attention when the national anthem is sung?", a:"To show respect for our country and to express patriotism and unity."},
    {q:"Your county has a new superintendent. Name two things you would expect him or her to do.", a:"Improve roads, schools and clinics, keep peace in the county, and represent the people to the national government."},
    {q:"Why is it useful to divide a county into districts and clans?", a:"So that leaders can reach the people easily, services can be shared fairly, and problems can be solved close to where people live."},
    {q:"What does the single white star on the Liberian flag stand for?", a:"It stands for Liberia as the first independent republic in Africa — the 'lone star' of freedom on the continent."}
  ],
  sort:{ title:"From the largest to the smallest division",
    groups:[
      {name:"Larger divisions", items:["County","District"]},
      {name:"Smaller divisions", items:["Chiefdom","Clan","Town"]},
      {name:"National symbols", items:["Lone Star flag","Coat of Arms","National Anthem"]}
    ]},
  mapwork:{ title:"Counties of Liberia", caption:"On an outline map of Liberia, shade your own county and write its capital. Then label the counties listed below.",
    items:[
      {p:"Montserrado", f:"capital Bensonville; contains Monrovia, the national capital"},
      {p:"Bong", f:"capital Gbarnga, in the centre of the country"},
      {p:"Nimba", f:"capital Sanniquellie, in the north-east near Mount Nimba"},
      {p:"Grand Bassa", f:"capital Buchanan, a port city on the Atlantic coast"},
      {p:"Lofa", f:"capital Voinjama, in the far north"},
      {p:"Maryland", f:"capital Harper, in the far south-east"}
    ]},
  casestudy:{ title:"Independence Day at school",
    text:"On 26 July the pupils of a school in Kakata lined up on the field. They raised the Lone Star flag and sang 'All Hail, Liberia, Hail!' with their right hands on their chests. The district education officer told them that Liberia became independent in 1847 and that the eleven stripes on the flag stand for the eleven men who signed the Declaration of Independence.",
    questions:[
      {q:"On what date is Liberia's Independence Day?", a:"26 July."},
      {q:"What do the eleven stripes on the flag stand for?", a:"The eleven men who signed the Declaration of Independence."},
      {q:"How did the pupils show respect during the anthem?", a:"They stood in line with their right hands on their chests."}
    ]},
  project:{ title:"My county poster",
    brief:"Make a poster about your own county.",
    steps:["Write the name of your county and its capital.","Draw the county flag and colour it correctly.","Name the current superintendent if you can find out.","List two things your county is known for.","Display the poster and present it to the class."],
    criteria:["Correct county and capital","A neatly coloured county flag","Two correct facts about the county","Tidy presentation","Clear speaking"]},
  activities:["Identify the political sub-divisions of Liberia on a map","Sketch the flags of counties in Liberia","Differentiate smaller from larger political sub-divisions","Sing the national anthem and recite the pledge","Identify national symbols on charts"],
  materials:["Map of Liberia showing counties","Chart of county flags","Copy of the National Anthem and Pledge of Allegiance","Picture of the Coat of Arms"],
  assessment:["Quizzes","Map work","Recitation of the anthem","Class participation","Test"]
},

/* ================= GRADE 2 ================= */
{
  grade:2, period:"I", sem:"One", icon:"🏘️",
  title:"Understanding Our Neighborhood",
  subtitle:"Neighbourhood and community, human rights, and the right to say NO",
  outcomes:["Learners identify what constitutes a neighbourhood and a community","Learners recognise their right to express themselves, including how to say NO to unwanted sexual advances","Learners determine that rights go along with responsibilities"],
  objectives:["Describe a neighbourhood and community","Differentiate a neighbourhood from a community","Locate his or her community on a map","State what human rights are","List some of their rights and responsibilities"],
  note:"A <b>neighbourhood</b> is the small area of houses right around your home. A <b>community</b> is larger — it is all the people of an area together with their school, market, clinic and places of worship. Every <b>right</b> carries a <b>responsibility</b>.",
  study:[
    /* ---- course text: Semester One, Period I (guide pp. 16-17) ---- */
    {k:"h3", t:"What is a Neighbourhood?"},
    {k:"p", t:"A **neighbourhood** is the small area of houses right around your home – the people and places you can reach on foot in a few minutes. A **neighbour** is a person who lives near you."},
    {k:"p", t:"Your neighbourhood has a name. It may be called a zone, a community, a bridge town, a clan or a ward. Every neighbourhood belongs to a town, a chiefdom, a district and a county."},
    {k:"rule"},
    {k:"h3", t:"Things we find in a Neighbourhood"},
    {k:"bul", items:["Houses and the compound where the family lives.","A school, a church or a mosque.","A shop, kiosk or market; a water pump, a well or a standpipe.","A health post, clinic or pharmacy.","A ball field, a lappah and a barbershop.","Roads, paths, drains, a stream or a bridge.","A filling station, a radio mast, a cell-phone antenna."]},
    {k:"p", t:"Draw a plan of your neighbourhood. Put a symbol and a label on each thing you find, and show where your own house is."},
    {k:"rule"},
    {k:"h3", t:"Neighbourhood and Community"},
    {k:"p", t:"A **community** is larger than a neighbourhood. It is all the people of an area, together with the institutions they share – the school, the market, the clinic, the places of worship, the town land and the leaders."},
    {k:"bul", items:["What makes a neighbourhood: nearness, common paths, common water point, people who see each other daily.","What makes a community: people who live together, common interests and needs, common leaders and rules, shared facilities.","What the two have in common: people, place, and the work they do together."]},
    {k:"p", t:"People of one community may speak one language, worship together, and join one **town development association (TDA)** to build the school block or repair the footbridge."},
    {k:"rule"},
    {k:"h3", t:"Features of Neighbourhoods and Communities"},
    {k:"p", t:"A **feature** is an important thing found in a place. The features of a community may be natural or built by people."},
    {k:"table", head:["Natural features","Man-made features"], rows:[
      ["River, creek, pond, hill, lagoon, sea beach, forest","School, church, mosque, health post, market"],
      ["Rain, sunshine, wind, trees and plants","Roads, bridges, drains, borehole, footpaths"],
      ["Animals and birds","Fences, shops, filling station, ball field"]
    ]},
    {k:"p", t:"Rural communities have farms, forests and few houses. Urban communities have many houses close together, streets, street lights, more shops, more people and more services."},
    {k:"rule"},
    {k:"h3", t:"Rights to Express Oneself"},
    {k:"p", t:"A **human right** is something every person is entitled to simply for being human. Children also have rights: to a name, a family, food, shelter, clothing, healthcare, education, protection from harm, and **the right to express themselves** – to say what they think and feel."},
    {k:"bul", items:["Say what you think, politely and without insulting anybody.","Ask questions in class and give your answer.","Choose your friends and your games, within the rules.","Write or draw what you feel; sing; perform.","Join a class or club meeting and speak there."]},
    {k:"p", t:"**Responsibility** goes with every right. Your freedom to speak ends where another person's right to peace and dignity begins; do not use words to abuse, mock or frighten."},
    {k:"rule"},
    {k:"h3", t:"Refusal and Negotiation Skills"},
    {k:"p", t:"A **refusal skill** is the ability to say **no** firmly and safely to something wrong. **Negotiation** is talking with someone until you both reach an agreement."},
    {k:"num", items:["Say **NO** clearly and at once – ‘No, I will not do that.’","Give your reason – ‘That is wrong / it is dangerous / it is against the rule.’","Walk away from the place and the people who press you.","Tell a trusted adult – parent, teacher, auntie or town chief.","In a disagreement, state what you want, listen to the other person, and look for a fair share."]},
    {k:"p", t:"You must refuse: to steal, to cheat in an examination, to bully a smaller child, to try a cigarette or drugs, to go alone with a stranger, to touch or be touched in a bad way, and to keep a secret about something harmful."},
    {k:"rule"},
    {k:"h3", t:"Communication Skills"},
    {k:"p", t:"**Communication** is sending and receiving messages. In the community we speak, we listen, we write, and we use our face and hands."},
    {k:"bul", items:["Look at the person and stand straight when you speak.","Use words that are clear and polite; do not shout.","Listen without interrupting, and answer what was asked.","Speak one idea at a time; begin with a greeting.","Use your hands, your face and your voice to show what you mean.","Ask again when you did not understand; do not pretend."]},
    {k:"p", t:"A message needs a **sender**, the **message**, a **channel** (voice, letter, radio, phone) and a **receiver**. When the receiver understands the message, the communication is complete."},
    {k:"p", t:"Say plainly what you need, what the problem is, or that you refuse. A child who can speak well is a child who can be safe."}
  ],
  focus:["What is a neighbourhood; things we find in a neighbourhood","What constitutes a neighbourhood and a community","Features of neighbourhoods and communities","Rights to express oneself","Refusal and negotiation skills","Communication skills"],
  terms:[
    {t:"neighbourhood", d:"the small area of houses immediately around your home", x:"Our neighbourhood has ten houses."},
    {t:"community", d:"all the people of an area together with their school, market and clinic", x:"Our community built a new well."},
    {t:"neighbour", d:"a person who lives near you", x:"Greet your neighbour every morning."},
    {t:"human right", d:"something every person is entitled to simply for being human", x:"Education is a human right."},
    {t:"responsibility", d:"a duty that goes with a right", x:"With the right to learn comes the responsibility to study."},
    {t:"refusal skill", d:"the ability to firmly say no to something wrong", x:"Refusal skills keep children safe."},
    {t:"negotiation", d:"talking with someone to reach an agreement", x:"They used negotiation to settle the quarrel."},
    {t:"feature", d:"an important thing found in a place", x:"A market is a feature of our community."},
    {t:"map", d:"a drawing that shows where places are", x:"Find your community on the map."},
    {t:"expression", d:"saying what you think or feel", x:"Freedom of expression is a right."}
  ],
  facts:[
    {q:"What is a neighbourhood?", a:"The small area of houses immediately around your home."},
    {q:"Give one difference between a neighbourhood and a community.", a:"A neighbourhood is a small group of nearby houses; a community is larger and includes the school, market, clinic and places of worship."},
    {q:"Name three things found in a community.", a:"Any three: school, market, clinic, church or mosque, police station, water pump, road."},
    {q:"What are human rights?", a:"Things every person is entitled to simply because they are human, such as life, education, health and free speech."},
    {q:"Give one right and the responsibility that goes with it.", a:"The right to education carries the responsibility to attend school and study; the right to speak carries the responsibility to speak the truth and respect others."},
    {q:"What should a child do if an adult tries to touch them wrongly?", a:"Say NO firmly, get away, and tell a parent, teacher or trusted adult at once."}
  ],
  tf:[
    {s:"A community is bigger than a neighbourhood.", a:"true", why:"A community includes many neighbourhoods with shared services."},
    {s:"Children have no rights at all.", a:"false", why:"Children have the right to food, education, healthcare, shelter and protection."},
    {s:"Every right carries a responsibility.", a:"true", why:"For example, the right to learn carries the duty to study and respect others."},
    {s:"You must always obey an adult even when they ask you to do something wrong.", a:"false", why:"You have the right to refuse and to report anything wrong or harmful."},
    {s:"A market is a feature of a community.", a:"true", why:"It is a shared place used by all the people of the area."},
    {s:"Neighbours should help one another.", a:"true", why:"Helping neighbours builds peace and unity in the neighbourhood."}
  ],
  apply:[
    {q:"A stranger offers you money to follow him. What will you do and why?", a:"Say NO loudly, refuse to follow him, run to a safe place and tell a parent or teacher, because strangers can harm children."},
    {q:"Two neighbours are quarrelling over a fence. Suggest a peaceful way to settle it.", a:"Call the elders or community leader to hear both sides, and let the neighbours negotiate an agreement instead of fighting."},
    {q:"How do you show responsibility in your community?", a:"By keeping the surroundings clean, respecting elders, helping neighbours, and obeying community rules."},
    {q:"Why is it important to know your community on a map?", a:"It helps you give directions, find services like the clinic, and understand where you belong."}
  ],
  sort:{ title:"Neighbourhood, community and rights",
    groups:[
      {name:"Found in a neighbourhood", items:["Houses","Footpath","Water pump","Neighbours"]},
      {name:"Found in a community", items:["School","Market","Clinic","Police station","Church or mosque"]},
      {name:"Children's rights", items:["Right to education","Right to healthcare","Right to protection","Right to be heard"]}
    ]},
  mapwork:{ title:"Map of my community", caption:"Draw a map of your community. Mark your home with an X and label the important places.",
    items:[
      {p:"My home", f:"where I live with my family"},
      {p:"School", f:"where the children of the community learn"},
      {p:"Market", f:"where people buy and sell goods"},
      {p:"Clinic", f:"where sick people are treated"},
      {p:"Church or mosque", f:"where people worship"},
      {p:"Main road", f:"the route that links the community to other places"}
    ]},
  casestudy:{ title:"The new water pump",
    text:"The people of Duport Road community had to walk far to fetch water. The community leader called a meeting. Everybody agreed to give a little money and labour. Men dug, women carried sand, and the young people fetched water for the workers. After three weeks a hand pump was working. The leader said that because everyone had a right to clean water, everyone also had a responsibility to keep the pump clean.",
    questions:[
      {q:"What problem did the community face?", a:"The people had to walk far to fetch water."},
      {q:"How did the community solve the problem?", a:"They met, contributed money and labour, and built a hand pump together."},
      {q:"What responsibility goes with the right to clean water?", a:"The responsibility to keep the pump and its surroundings clean."}
    ]},
  project:{ title:"Community survey",
    brief:"Find out what services your community has and what it still needs.",
    steps:["Walk round your community with an adult and list the services you find.","Ask three people what service the community still needs most.","Record their answers in a simple table.","Draw a map showing where the services are.","Present your findings and say which need you would solve first and why."],
    criteria:["At least five services listed","Three people interviewed","A clear table of answers","A labelled map","A reasoned recommendation"]},
  activities:["Describe a neighbourhood and a community","Differentiate a neighbourhood from a community","Locate his or her community on a map","State what human rights are","Role play saying NO to unwanted advances","List rights and matching responsibilities"],
  materials:["Map of the local area","Poster sheets and markers","Pictures of community services"],
  assessment:["Quizzes","Class work","Map work","Role play","Test"]
},
{
  grade:2, period:"II", sem:"One", icon:"🥗",
  title:"Our Basic Needs in the Community",
  subtitle:"Sources of food, clothing, shelter, education, hygiene and malaria",
  outcomes:["Learners determine the sources of the food we eat","Learners use clothes according to weather condition","Learners appreciate shelter as an important need","Learners strive for education and maintain a healthy lifestyle"],
  objectives:["Explain the sources of food","State the importance of clothing","Explain the purpose for building a house","State the importance of education","Discuss the importance of maintaining a healthy lifestyle"],
  note:"Our food comes from three main sources: <b>plants</b>, <b>animals</b> and <b>marine life</b>. Education can be <b>formal</b> (in school), <b>informal</b> (learning at home) or <b>non-formal</b> (adult classes and skills training). <b>Malaria</b> is spread by the bite of a mosquito.",
  study:[
    /* ---- course text: Semester One, Period II (guide pp. 18-19) ---- */
    {k:"h3", t:"Sources of Food"},
    {k:"p", t:"A **source** is the place a thing comes from. Our food comes from three main sources: plants, animals and marine life."},
    {k:"bul", items:["**Plants** – rice, cassava, yam, cocoyam, plantain, maize, groundnut, beans, vegetable, palm oil, sugar-cane, oranges, mango and breadfruit.","**Animals** – beef, goat, mutton, pork, bush meat, chicken and eggs, milk; honey from the hive.","**Marine life** – fish, crab, lobster, prawn, oyster and periwinkle from the sea, the river, and the mangrove swamp."]},
    {k:"p", t:"Food may also come from the market, from a shop, from a can or a packet, and from the farm; but everything on the table began with a plant or an animal."},
    {k:"rule"},
    {k:"h3", t:"Clothing and Shelter in the Community"},
    {k:"p", t:"The community supplies what the family cannot make for itself: the tailor who sews school uniform, the weaver who makes country cloth, the seller of second-hand clothes, and the brick-maker, carpenter, roofer and block-layer who build the house."},
    {k:"bul", items:["Clothing: cotton, lappa, wool and synthetic cloth; washable, mended and kept clean.","Shelter: land for the house, blocks, sand, water, zinc, nails, timber and the licence from the county authority.","Both are bought with money earned by the work of the community: farming, trading, fishing, tailoring and driving."]},
    {k:"rule"},
    {k:"h3", t:"Education: Formal, Informal and Non-formal"},
    {k:"p", t:"**Education** is learning that changes the way a person behaves and works. There are three kinds."},
    {k:"table", head:["Kind of education","Where it happens","Features"], rows:[
      ["Formal education","School, college, university","Teachers, classes, timetable, syllabus, examinations, certificates"],
      ["Informal education","At home, in the community and at play","Learned daily from parents, elders and friends; no classes and no certificate"],
      ["Non-formal education","Adult classes, literacy classes, skills training, Poro and Sande schools","Organised teaching outside the regular school; for a chosen group and a chosen skill"]
    ]},
    {k:"p", t:"Formal education makes a person literate and able to hold a job. Informal education teaches manners, language, farming, cooking and the duties of the community. Non-formal education gives reading, writing and a trade to people who never went to school or who left early."},
    {k:"rule"},
    {k:"h3", t:"Personal Refusal and Negotiation Skills"},
    {k:"p", t:"Children must be able to say no to anything that harms the body or the mind, and to talk their way out of danger."},
    {k:"num", items:["Say no at once and without laughing: ‘No, I will not smoke / drink / steal.’","Give a reason and stand to it.","Leave the place; go where other people are.","Tell an adult the same day.","Negotiate: offer another way, agree to meet halfway, and keep the agreement."]},
    {k:"p", t:"Negotiation is also how quarrels are settled at home, at school and in the town: each side speaks, both listen, and the decision must obey the rule and respect every person."},
    {k:"rule"},
    {k:"h3", t:"Hygiene"},
    {k:"p", t:"**Hygiene** is the habit of keeping the body and the surroundings clean in order to stay healthy. Cleanliness is the first medicine."},
    {k:"bul", items:["Bathe every day; use soap on the armpits, the feet and the private parts.","Brush the teeth morning and night and after food.","Wash hands with soap after the toilet, after handling animals, and before eating or cooking.","Keep nails cut; keep hair clean; wash the school uniform.","Cover the mouth and nose when coughing or sneezing; do not spit anywhere.","Use a latrine and keep it covered; never pass stool in the bush or the gutter.","Drink covered, safe water; eat covered, well-cooked food."]},
    {k:"rule"},
    {k:"h3", t:"Malaria: Causes, Prevention and Treatment"},
    {k:"p", t:"**Malaria** is a fever caused by a parasite that is spread by the bite of the female **Anopheles** mosquito, which bites chiefly at night."},
    {k:"bul", items:["**Causes and breeding** – the mosquito lays eggs in clean stagnant water: footprints, gutters, old tins, tyres, broken pots, and slow streams.","**Signs** – fever, headache, shivering and vomiting, body pains, and sweating; in small children it can cause convulsions.","**Prevention** – sleep under a treated **mosquito net**; clear bush and drain stagnant water; cover water; spray the house; wear long sleeves at dusk; keep the compound clean.","**Treatment** – go to a clinic or health post for a test and the full dose of the anti-malarial medicine; do not share medicine and do not stop when the fever falls."]},
    {k:"rule"},
    {k:"h3", t:"Cleanliness of the Body and the Environment"},
    {k:"p", t:"A **healthy lifestyle** is a way of living that keeps the body strong and well: clean food and water, enough rest, daily work and play, and freedom from smoke and alcohol."},
    {k:"bul", items:["Sweep the compound and burn or bury the rubbish.","Cut the grass around the house and the classroom.","Clear the drains before the rain so water cannot stand.","Keep animals away from the kitchen and the water point.","Store grain and cassava where rats and weevils cannot reach.","Share the community clean-up day; keep the school toilet clean for the next class."]}
  ],
  focus:["Sources of food: plants, animals, marine life","Clothing and shelter","Education: formal, informal and non-formal","Personal refusal and negotiation skills","Hygiene; causes, prevention and treatment of malaria","Cleanliness of the body and the environment"],
  terms:[
    {t:"source", d:"the place a thing comes from", x:"The farm is a source of food."},
    {t:"marine life", d:"the plants and animals that live in water", x:"Fish is part of marine life."},
    {t:"formal education", d:"organised learning in a school with teachers and classes", x:"Formal education leads to a certificate."},
    {t:"informal education", d:"learning at home and in the community from daily life", x:"Cooking is often learned by informal education."},
    {t:"non-formal education", d:"organised learning outside the school, such as adult or skills classes", x:"Adult literacy is non-formal education."},
    {t:"hygiene", d:"keeping the body and surroundings clean to stay healthy", x:"Good hygiene prevents disease."},
    {t:"malaria", d:"a fever caused by a parasite spread by mosquito bites", x:"Sleep under a net to avoid malaria."},
    {t:"mosquito net", d:"a net hung over the bed to keep mosquitoes away", x:"Every child should sleep under a mosquito net."},
    {t:"prevention", d:"stopping something bad before it happens", x:"Prevention is better than cure."},
    {t:"healthy lifestyle", d:"a way of living that keeps the body strong and well", x:"Exercise and good food make a healthy lifestyle."}
  ],
  facts:[
    {q:"Name the three sources of food.", a:"Plants, animals and marine life."},
    {q:"Give two reasons why we wear clothes.", a:"To cover and protect the body from sun, rain and cold, and to look neat and show our culture."},
    {q:"Why do people build houses?", a:"To have shelter from rain, sun, cold and danger, and to have a private place for the family."},
    {q:"Name the three kinds of education.", a:"Formal, informal and non-formal."},
    {q:"What causes malaria?", a:"A parasite passed to people through the bite of an infected mosquito."},
    {q:"State two ways to prevent malaria.", a:"Sleep under a treated mosquito net, clear standing water and bush around the house, and use screens or repellent."}
  ],
  tf:[
    {s:"Fish comes from marine life.", a:"true", why:"Fish live in rivers, lakes and the sea."},
    {s:"Malaria is caused by eating too much sugar.", a:"false", why:"Malaria is caused by a parasite spread by mosquito bites."},
    {s:"Learning to cook from your mother is informal education.", a:"true", why:"It is learning at home from daily life, not in a school."},
    {s:"A house protects a family from bad weather.", a:"true", why:"Shelter keeps out rain, sun and cold."},
    {s:"Standing water around the house helps prevent malaria.", a:"false", why:"Standing water breeds mosquitoes, which spread malaria."},
    {s:"We should wear heavier clothes in the rainy season.", a:"true", why:"The weather is cooler and wetter, so we need protection from the rain."}
  ],
  apply:[
    {q:"There is a pool of water beside your house. What danger is this and what will you do?", a:"It breeds mosquitoes that spread malaria; I will fill it with soil or drain it away."},
    {q:"A child in your class is often absent because of fever. What advice can the class give the family?", a:"Take the child to the clinic for a malaria test and treatment, sleep under a treated net, and clear the bush and standing water around the house."},
    {q:"Why is education called a means of personal advancement?", a:"Because it gives knowledge and skills that let a person get better work, earn more and improve their own life and family."},
    {q:"How does the weather affect the clothes you choose?", a:"In hot dry weather I wear light clothing; when it rains I need a raincoat or umbrella and warmer clothes."}
  ],
  sort:{ title:"Sources of food and kinds of education",
    groups:[
      {name:"From plants", items:["Rice","Cassava","Plantain","Pepper"]},
      {name:"From animals", items:["Goat meat","Chicken","Eggs","Milk"]},
      {name:"From marine life", items:["Fish","Crab","Shrimp","Oyster"]},
      {name:"Kinds of education", items:["Formal","Informal","Non-formal"]}
    ]},
  mapwork:{ title:"Where our food comes from", caption:"Complete the chart showing each food and its source.",
    items:[
      {p:"Farm", f:"gives rice, cassava, plantain, pepper and greens"},
      {p:"Livestock pen", f:"gives goat meat, chicken, eggs and milk"},
      {p:"River and sea", f:"gives fish, crab, shrimp and oyster"},
      {p:"Forest", f:"gives bush fruit, palm nuts and honey"},
      {p:"Market", f:"where food from all these sources is bought and sold"}
    ]},
  casestudy:{ title:"Momo's fever",
    text:"Momo missed school for a week. He had fever, headache and chills. His mother took him to the clinic in Paynesville where the nurse tested his blood and said he had malaria. She gave him medicine and a treated mosquito net. She also told the family to clear the tall grass and pour out the water in the old tyres behind the house. Momo went back to school the next week.",
    questions:[
      {q:"What sickness did Momo have?", a:"Malaria."},
      {q:"How did the nurse know?", a:"She tested his blood at the clinic."},
      {q:"Name two things the family was told to do.", a:"Use the treated mosquito net, clear the tall grass, and pour out the water standing in the old tyres."}
    ]},
  project:{ title:"Healthy home checklist",
    brief:"Check your own home for things that keep the family healthy.",
    steps:["Make a checklist with these items: clean drinking water, mosquito net, soap for hand washing, covered rubbish, no standing water.","Tick the items your home already has.","Write one item your home still needs.","Discuss with your family how it could be obtained.","Report to the class what your family agreed to do."],
    criteria:["Complete checklist","Honest recording","One improvement identified","Family discussion reported","Clear presentation"]},
  activities:["Explain the sources of food","State the importance of clothing","Explain the purpose for building a house","Discuss formal, informal and non-formal education","Demonstrate correct hand washing","Discuss the causes, prevention and treatment of malaria"],
  materials:["Pictures of farms, livestock and fishing","Mosquito net and soap for demonstration","Charts on malaria prevention"],
  assessment:["Quizzes","Class work","Practical demonstration","Class participation","Test"]
},
{
  grade:2, period:"III", sem:"One", icon:"🏛️",
  title:"Local Government",
  subtitle:"Leadership, local government structure, decision making and discrimination",
  outcomes:["Learners accept and respect the authority of leadership in their community","Learners make the right decisions in matters affecting their wellbeing","Learners demonstrate unity and belongingness"],
  objectives:["Describe the characteristics of leadership","Identify local government structure","Identify roles and responsibilities of those responsible for local governance","Explain decision making and its impact on the individual or community","State the effect of discrimination on the individual, community and society"],
  note:"<b>Local government</b> is the government closest to the people. In Liberia it includes the <b>Superintendent</b> of a county, <b>Commissioners</b> of districts and townships, <b>City Mayors</b>, and traditional <b>Chiefs and Elders</b>. <b>Discrimination</b> is treating someone badly because of who they are.",
  study:[
    /* ---- course text: Semester One, Period III (guide pp. 20-21) ---- */
    {k:"h3", t:"What is Leadership?"},
    {k:"p", t:"**Leadership** is guiding and directing a group of people towards a goal. A leader serves the people and is answerable to them; a leader must be honest, courageous, fair, patient, and able to listen."},
    {k:"p", t:"Leaders are found in the family (father and mother), in the class (monitor), in the town, in the county and in the nation (the President). No matter how small the group, somebody has to lead and everybody has to help."},
    {k:"rule"},
    {k:"h3", t:"Leadership in the Church, the Mosque, the School and the Community"},
    {k:"table", head:["Place","Leader","Work of the leader"], rows:[
      ["Church","Pastor, minister, deacon, choir leader","Preaches, prays, visits the sick, manages church funds and buildings"],
      ["Mosque","Imam, muezzin","Leads the prayers, calls the faithful to prayer, teaches the Quran, settles disputes"],
      ["School","Head teacher, teacher, principal, class monitor","Keeps time tables and rules, teaches, maintains discipline, reports to parents"],
      ["Community / town","Town chief, elders, Poro and Sande leaders, chairlady","Rules by custom, keeps the peace, settles quarrels, organises development work"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Local Government in Liberia"},
    {k:"p", t:"**Local government** is the government closest to the people. It carries out the decisions of the national government in each county, district, township and town."},
    {k:"bul", items:["**Superintendent** – the head of a county, appointed by the President; keeps law and order and supervises government offices in the county.","**District Commissioner** – the officer who heads a district; **Township Commissioner** – the officer who heads a township.","**City Mayor** and **Deputy Mayor** – the elected leaders of a city; they look after the market, the sanitation, the streets and the licenses.","**Paramount Chief**, **General Chief** and **Town Chief**, with the **council of elders** – the traditional authority that rules the chiefdoms and towns by custom.","**Representatives and Senators** are elected for the county to the national Legislature – they are not part of local government but they speak for the county."]},
    {k:"p", t:"Local government settles small disputes, collects the market and property taxes, organises the town clean-up, gives letters of identity, and reports to Monrovia when the people need a school block, a clinic or a bridge."},
    {k:"rule"},
    {k:"h3", t:"The Decision-making Process"},
    {k:"p", t:"A **decision** is a choice made after thinking about the options. Good decisions are made in order."},
    {k:"num", items:["Say clearly what the problem is.","Put all the options on the table; let every person speak.","Think of the effect of each option on everybody.","Choose by agreement, or by voting when people do not agree.","Carry out the decision and share the work.","Look back and see whether it worked; correct it if it did not."]},
    {k:"p", t:"In a town meeting the chief lets everybody speak – the market women, the youth, and even an elderly person in a wheelchair – and the minority accepts the vote quietly."},
    {k:"rule"},
    {k:"h3", t:"Decisions have Consequences"},
    {k:"p", t:"A **consequence** is the result that follows a decision or an action. Every choice, good or bad, produces consequences for the person who chooses and for the people around him."},
    {k:"bul", items:["A pupil who decides to study passes, and the family is glad.","A boy who decides to steal is beaten, sent away, and loses the trust of the town.","A town that decides to dig a borehole gets clean water and fewer sicknesses.","A farmer who decides to burn the forest may lose the whole hill to fire."]},
    {k:"p", t:"**Taking responsibility** means owning what you said or did, accepting the consequence, and making it right. Never blame a smaller child for your own act."},
    {k:"rule"},
    {k:"h3", t:"The Effect of Discrimination"},
    {k:"p", t:"**Discrimination** is treating a person unfairly because of who they are – because of sex, tribe, colour, religion, county, being poor, being disabled or being infected."},
    {k:"table", head:["Who is affected","How discrimination shows","The effect"], rows:[
      ["The individual","Insulted, left out, denied a chance","Fear, shame, poor school work, running away"],
      ["The family","One child fed or schooled and another not","Quarrels, jealousy, children who do not trust their parents"],
      ["The community","Strangers or people of another tribe given no land, no market place","Division, fight, poverty for the whole town"],
      ["Society","Unequal pay, unequal access to offices","Wasted talent, anger, and at last conflict"],
      ["PLHIV","Neighbours refuse to buy from or sit with them","The sick hide their illness and refuse treatment"],
      ["The disabled","Children left at home; no ramp, no special help","Talent lost, begging, dependence"],
      ["The elderly","Mocked as useless, robbed of property","Loneliness, hunger, loss of wisdom for the young"]
    ]},
    {k:"p", t:"No person is too young to stop discrimination: share, speak up when others are mocked, and treat every classmate as an equal."}
  ],
  focus:["What is leadership; leadership in the church, mosque, school and community","Local government: superintendents, commissioners, city mayors, township commissioners, chiefs and elders","Decision making process; decisions have consequences","Taking responsibility for what you say or do","Effect of discrimination on the individual, family, community, society, PLHIV, the disabled and the elderly"],
  terms:[
    {t:"leadership", d:"guiding and directing a group of people towards a goal", x:"Good leadership brings development."},
    {t:"local government", d:"the government that serves people at county, district and town level", x:"Local government fixes our town roads."},
    {t:"superintendent", d:"the head of a county", x:"The superintendent chairs the county council."},
    {t:"commissioner", d:"the officer who heads a district or township", x:"The district commissioner settled the dispute."},
    {t:"mayor", d:"the leader of a city", x:"The city mayor of Monrovia opened the market."},
    {t:"elder", d:"a respected older person who advises the community", x:"The elders judged the case fairly."},
    {t:"decision", d:"a choice made after thinking about the options", x:"That decision helped the whole town."},
    {t:"consequence", d:"the result that follows a decision or action", x:"Every decision has a consequence."},
    {t:"discrimination", d:"treating a person unfairly because of who they are", x:"Discrimination against the disabled is wrong."},
    {t:"PLHIV", d:"people living with HIV", x:"PLHIV have the same rights as everyone else."}
  ],
  facts:[
    {q:"What is local government?", a:"The level of government closest to the people, serving the county, district, city and town."},
    {q:"Name three local government officials in Liberia.", a:"Any three: superintendent, district commissioner, township commissioner, city mayor, paramount chief, town chief."},
    {q:"Who heads a county?", a:"The Superintendent."},
    {q:"Give two qualities of a good leader.", a:"Any two: honesty, fairness, patience, courage, good listening, hard work, respect for others."},
    {q:"What is discrimination?", a:"Treating a person unfairly because of who they are — their tribe, sex, disability, illness or age."},
    {q:"Give one effect of discrimination on a person.", a:"It makes them feel worthless, keeps them out of school or work, and can make them sick or lonely."}
  ],
  tf:[
    {s:"A city mayor is a local government leader.", a:"true", why:"The mayor heads the government of a city."},
    {s:"Elders have no role in Liberian communities.", a:"false", why:"Elders advise, settle disputes and preserve tradition."},
    {s:"Every decision has a consequence.", a:"true", why:"What we choose always leads to a result, good or bad."},
    {s:"It is right to refuse to sit beside a person living with HIV.", a:"false", why:"That is discrimination; HIV is not spread by sitting together."},
    {s:"A leader should listen to the people.", a:"true", why:"Listening helps a leader make decisions that serve the people."},
    {s:"The superintendent is chosen for a town only.", a:"false", why:"The superintendent heads a whole county, not a single town."}
  ],
  apply:[
    {q:"A disabled child is laughed at in your school. What can the class do?", a:"Stop the laughing, speak to the pupils about respect, include the child in games and lessons, and report repeated bullying to the teacher."},
    {q:"Your community must choose between repairing the road and repairing the school. How should the decision be made?", a:"Call a community meeting, let everyone give their view, weigh which need is more urgent and helps most people, and then agree together."},
    {q:"Why is it important to respect the authority of your town chief?", a:"He keeps order, settles disputes and represents the town; respecting his authority keeps peace and helps the community work together."},
    {q:"Name one bad decision a child could make and its consequence.", a:"Staying away from school; the consequence is failing exams and losing the chance of a good job."}
  ],
  sort:{ title:"Leaders and their areas",
    groups:[
      {name:"County level", items:["Superintendent","County council"]},
      {name:"District and township", items:["District commissioner","Township commissioner"]},
      {name:"City and town", items:["City mayor","Town chief","Elders"]},
      {name:"Groups who face discrimination", items:["The disabled","PLHIV","The elderly"]}
    ]},
  mapwork:{ title:"Structure of local government", caption:"Complete the chart from the highest local level to the lowest, and write the leader of each.",
    items:[
      {p:"County", f:"headed by the Superintendent"},
      {p:"District", f:"headed by the District Commissioner"},
      {p:"City", f:"headed by the City Mayor"},
      {p:"Township", f:"headed by the Township Commissioner"},
      {p:"Chiefdom / Clan", f:"headed by the Paramount or Clan Chief"},
      {p:"Town", f:"headed by the Town Chief and the elders"}
    ]},
  casestudy:{ title:"The town meeting at Tubmanburg",
    text:"The town chief of a community near Tubmanburg called a meeting because the market had no toilet. Some people wanted the money spent on a new fence instead. The chief let everybody speak, including the market women and an elderly man in a wheelchair. In the end the town voted for the toilet, because sickness was spreading. The chief thanked those who had voted for the fence for accepting the decision peacefully.",
    questions:[
      {q:"What decision did the town have to make?", a:"Whether to build a toilet at the market or a new fence."},
      {q:"How did the chief make sure the decision was fair?", a:"He let everybody speak, including market women and an elderly man in a wheelchair, and then the town voted."},
      {q:"Why was the toilet chosen?", a:"Because sickness was spreading and the toilet was the more urgent need."}
    ]},
  project:{ title:"Meet a community leader",
    brief:"Interview one leader in your community and report to the class.",
    steps:["Choose a leader: a town chief, a mayor, a school principal or a religious leader.","Prepare four questions about their duties and challenges.","With an adult, carry out the interview politely.","Write down the answers.","Present what you learned and say one quality that makes this person a good leader."],
    criteria:["Four sensible questions prepared","Interview politely conducted","Answers accurately recorded","One leadership quality identified","Clear oral report"]},
  activities:["Describe the characteristics of leadership","Identify local government structure on a chart","Role play a community meeting making a decision","Discuss the effects of discrimination on different groups","Debate on a community decision"],
  materials:["Chart of local government structure","Pictures of community and county leaders","Poster sheets"],
  assessment:["Quizzes","Class work","Role play","Interview report","Test"]
},
{
  grade:2, period:"IV", sem:"Two", icon:"🗺️",
  title:"Geography of Liberia",
  subtitle:"Location, physical features, climate, the people of Liberia and child rights",
  outcomes:["Learners effectively use the map of Africa to locate Liberia","Learners demonstrate knowledge of the physical features and climatic conditions of Liberia","Learners identify the different groups in Liberia","Learners advocate for their rights and needs"],
  objectives:["Locate Liberia on the map of Africa","List some physical features of Liberia","State the importance of natural resources","Describe the climate of Liberia and its effects","Identify the people that make up Liberia"],
  note:"Liberia lies on the west coast of Africa. Its boundaries are <b>Guinea</b> to the north, the <b>Atlantic Ocean</b> to the south, <b>Sierra Leone</b> to the west and <b>Côte d'Ivoire (Ivory Coast)</b> to the east. Three groups of people make up Liberia: the <b>indigenous</b> people, the <b>settlers</b>, and <b>other Africans</b>.",
  study:[
    /* ---- course text: Semester One, Period IV (guide pp. 22-23) ---- */
    {k:"h3", t:"Location of Liberia"},
    {k:"p", t:"**Location** is where a place is found. Liberia lies on the **west coast of Africa**, on the **Atlantic Ocean**, a little north of the equator."},
    {k:"bul", items:["**North** – the Republic of **Guinea**.","**East** – the Republic of **Côte d'Ivoire (Ivory Coast)**.","**West** – the Republic of **Sierra Leone**.","**South** – the **Atlantic Ocean**."]},
    {k:"p", t:"A **boundary** is the line that separates one country from another. Liberia's boundaries follow rivers (the **Mano** with Sierra Leone, the **Cavalla** with Côte d'Ivoire), mountain ranges and straight treaty lines."},
    {k:"rule"},
    {k:"h3", t:"Physical Features of Liberia"},
    {k:"p", t:"A **physical feature** is a natural part of the land."},
    {k:"bul", items:["**Mountains** – **Mount Wuteveh (Woléwari)**, the highest land in Liberia, the **Bong Mountain range**, **Mount Nimba** in the north-east and **Mount Gedeh** in the east. On these mountains are the last forests and the rare frog.","**Rivers** – the rivers rise in the mountains and forest and flow south-west into the Atlantic: **Mano, Morro, Lofa, Saint Paul, Saint John, Cestos, Cavalla** and **St. Paul** are the best known. The **St. Paul River** at DuBridge and the **St. John River** supply Monrovia with water.","**Lakes and lagoons** – **Lake Piso** near Robertsport, and lagoons along the coast.","**Waterfalls** – **Mineral Win** and **Wewagi (Recess) falls**, **Cumoh Falls** and the falls of the St. Paul at DuBridge.","**Forests** – the tropical rain forest covers nearly half of Liberia and is the largest in West Africa; it gives timber, medicine and bush meat.","**Coast, capes and islands** – **Cape Mount**, **Cape Mesurado** (Monrovia) and **Cape Palmas**; **Bushrod Island** and **Gbin Hill** in Marshall."]},
    {k:"p", t:"**Significance**: rivers give water, fish and power; mountains gather rain and give rise to the rivers; the forest holds the soil; the coast gives the ports of Monrovia and Buchanan; the flat land near the sea is where the farms and towns are."},
    {k:"rule"},
    {k:"h3", t:"Climate of Liberia"},
    {k:"p", t:"**Climate** is the usual weather pattern of a place over many years. Liberia has a **hot, wet tropical climate** all year, with two seasons:"},
    {k:"bul", items:["**The rainy season** – from about May to October; heavy rain almost every day; June and July are the wettest.","**The dry season** – from about November to April; in December and January the dry, dusty **harmattan** wind blows from the north."]},
    {k:"p", t:"**Effects of the climate on economic activities**: abundant rain makes rice, cassava, plantain, sugarcane, cacao and rubber grow; the rivers can be used for transport and for water; the heat and rain also make roads soft, crops rot in store, and malaria spread; the long dry season allows farming contests, harvesting, drying of fish and cocoa, and building."},
    {k:"rule"},
    {k:"h3", t:"The Three Groups of People in Liberia"},
    {k:"num", items:["**Indigenous people** – the original people who lived in this land first. They speak the twenty-odd indigenous languages, among them **Bassa, Kpelle, Dan/Yacouba, Grebo, Kru, Mano, Vai, Gbandi, Loma, Dei, Krahn, Belle, Gbii, Kwa, Mende, Gola, Gbandi** and others.","**Settlers (Americo-Liberians / Congo people)** – the freed Black Americans and their descendants who came from 1822 onwards, brought English, Christianity, and the ideas of a republic; they married into the tribes and are now one people with them.","**Other Africans** – freed slaves from the West Indies and from American warships, recaptured Africans rescued from slave ships at sea, and migrants from neighbouring countries – **Ghana, Guinea, Nigeria, Sierra Leone, Togo, Liberia's Moslem and Mande traders** – who came to work and to trade."]},
    {k:"p", t:"All the groups are now one nation, one people of Liberia, with one flag and one anthem."},
    {k:"rule"},
    {k:"h3", t:"Child Rights"},
    {k:"p", t:"A **child right** is something every child is entitled to. The basic needs of a child are also the child's rights."},
    {k:"bul", items:["**Food** – enough clean food and water to grow.","**Clothing** – clothes to protect the body and to send a child to school.","**Shelter** – a safe home; no child should sleep on the street.","**Healthcare** – immunisation, treatment, and a healthy mother.","**Education** – free basic education, a place in a class, books and a teacher.","**Emotional and psychological needs** – love, praise, a name, a family, rest, play, and freedom from fear, abuse and harsh punishment."]},
    {k:"p", t:"Every right has a duty beside it: a child has the right to education and the responsibility to go to class and to study; the right to be loved and the duty to obey and to respect."},
    {k:"p", t:"If a right is being denied or a child is being hurt, the child must speak to a teacher, a parent, a town chief, the police, or a child-protection agency such as the **Ministry of Gender, Children and Social Protection (MGCSP)** or **Word of Faith / LIBAID** children's desk."}
  ],
  focus:["Location of Liberia","Physical features: mountains, rivers, lakes, forests","Climate of Liberia","The three groups of people in Liberia: indigenous, settlers, other Africans","Child rights: food, clothing, shelter, healthcare, education, emotional and psychological needs"],
  terms:[
    {t:"location", d:"where a place is found", x:"The location of Liberia is West Africa."},
    {t:"boundary", d:"the line that separates one country from another", x:"Guinea is on our northern boundary."},
    {t:"physical feature", d:"a natural part of the land such as a mountain or river", x:"Mount Nimba is a physical feature."},
    {t:"mountain", d:"a very high area of land", x:"Mount Nimba is the highest mountain in Liberia."},
    {t:"river", d:"a large natural stream of water flowing to the sea", x:"The St. Paul River flows to the Atlantic."},
    {t:"lake", d:"a large body of water surrounded by land", x:"Lake Piso is near Robertsport."},
    {t:"indigenous", d:"the original people who lived in the land first", x:"The sixteen indigenous groups have lived here for centuries."},
    {t:"settler", d:"a person who came from another land to live here", x:"The settlers came from America in 1822."},
    {t:"climate", d:"the usual weather pattern of a place over many years", x:"Liberia has a hot, wet tropical climate."},
    {t:"child right", d:"something every child is entitled to", x:"Education is a child right."}
  ],
  facts:[
    {q:"On which continent is Liberia found?", a:"Africa — in West Africa."},
    {q:"Name the countries that border Liberia.", a:"Guinea to the north, Sierra Leone to the west and Côte d'Ivoire to the east; the Atlantic Ocean is to the south."},
    {q:"Name two rivers of Liberia.", a:"Any two: St. Paul, St. John, Cavalla, Mano, Lofa, Cestos, Sinoe."},
    {q:"Name the highest mountain in Liberia.", a:"Mount Nimba."},
    {q:"Name the three groups of people that make up Liberia.", a:"The indigenous people, the settlers, and other Africans."},
    {q:"List four rights of a child.", a:"Food, clothing, shelter, healthcare and education — plus emotional and psychological care."}
  ],
  tf:[
    {s:"Liberia is bordered by the Atlantic Ocean on the south.", a:"true", why:"The Atlantic coastline forms Liberia's southern boundary."},
    {s:"Guinea lies to the east of Liberia.", a:"false", why:"Guinea is to the north; Côte d'Ivoire is to the east."},
    {s:"Mount Nimba is a physical feature of Liberia.", a:"true", why:"It is Liberia's highest mountain."},
    {s:"Liberia has a cold, dry climate.", a:"false", why:"Liberia has a hot, wet tropical climate with heavy rainfall."},
    {s:"Children have the right to healthcare.", a:"true", why:"Healthcare is one of the basic rights of every child."},
    {s:"Iron ore is a natural resource of Liberia.", a:"true", why:"It is mined at Bong Range and Mount Nimba and earns revenue."}
  ],
  apply:[
    {q:"Why is the Atlantic Ocean important to Liberia?", a:"It gives fish for food and work, it allows ships to bring and take goods through ports like Monrovia and Buchanan, and it affects our rainfall."},
    {q:"How does heavy rainfall affect farming in Liberia?", a:"It waters crops such as rice and cassava well, but too much rain can wash away soil, rot crops and make roads to market impassable."},
    {q:"A child in your town is not sent to school. Which right is denied and what can be done?", a:"The right to education. The community leader, teachers or a child welfare officer should talk with the parents and help the child enrol."},
    {q:"Why should the different groups of people in Liberia live together in peace?", a:"Because all are Liberians with equal rights; peace allows trade, marriage, learning and development to grow across every group."}
  ],
  sort:{ title:"Features, neighbours and rights",
    groups:[
      {name:"Physical features", items:["Mount Nimba","St. Paul River","Lake Piso","Sapo Forest"]},
      {name:"Neighbouring countries", items:["Guinea","Sierra Leone","Côte d'Ivoire"]},
      {name:"Child rights", items:["Food","Education","Healthcare","Shelter","Protection"]}
    ]},
  mapwork:{ title:"Map of Liberia and its neighbours", caption:"On an outline map of Liberia, mark the boundaries and the features listed below.",
    items:[
      {p:"Guinea", f:"the country on Liberia's northern boundary"},
      {p:"Sierra Leone", f:"the country on Liberia's western boundary"},
      {p:"Côte d'Ivoire", f:"the country on Liberia's eastern boundary"},
      {p:"Atlantic Ocean", f:"the sea on Liberia's southern boundary"},
      {p:"Mount Nimba", f:"the highest mountain, in the north-east"},
      {p:"St. Paul River", f:"a major river flowing past Monrovia to the sea"}
    ]},
  casestudy:{ title:"A journey from Voinjama to Monrovia",
    text:"Korpo travelled from Voinjama in Lofa County to Monrovia. She crossed the St. Paul River on a bridge and passed thick forest and rubber trees. It rained heavily most of the way and the road was muddy. In Monrovia she saw big ships in the Freeport. Her uncle explained that the ships carry iron ore and rubber out of the country and bring in rice and fuel.",
    questions:[
      {q:"Which river did Korpo cross?", a:"The St. Paul River."},
      {q:"What kind of weather did she meet on the journey?", a:"Heavy rain, which made the road muddy — typical of the rainy season."},
      {q:"Name one thing exported and one thing imported through the Freeport.", a:"Exported: iron ore or rubber. Imported: rice or fuel."}
    ]},
  project:{ title:"My county on the map",
    brief:"Study one physical feature in or near your county.",
    steps:["Choose a river, mountain, lake or forest near you.","Find out its name and where it starts and ends.","List two ways people use it.","List one danger facing it.","Draw it on a map of your county and present your findings."],
    criteria:["Correct name and location","Two uses stated","One danger identified","A neat labelled map","Clear presentation"]},
  activities:["Locate Liberia on the map of Africa","List physical features of Liberia on a map","Discuss the importance of natural resources","Describe the climate of Liberia and its effects","Identify the people that make up Liberia","Draw and label the map of Liberia"],
  materials:["Map of Africa and map of Liberia","Physical map showing rivers and mountains","Pictures of natural resources"],
  assessment:["Quizzes","Map work","Class work","Class participation","Test"]
},
{
  grade:2, period:"V", sem:"Two", icon:"🚌",
  title:"Transportation and Communication",
  subtitle:"Why people travel, kinds of transport, and traditional and modern communication",
  outcomes:["Learners appreciate the importance of transportation for everyday life","Learners appreciate traditional means of transportation and respect those who use it","Learners appreciate the use of traditional and modern ways of communication"],
  objectives:["List reasons why people travel","Classify the three kinds of transportation","Describe some means of transportation in Liberia today and yesterday","List simple means of communication","Identify various types of communication","Describe the traditional and modern means of communication in Liberia"],
  note:"There are three kinds of transportation: by <b>land</b>, by <b>sea or water</b>, and by <b>air</b>. Communication may be <b>traditional</b> (songs, town crier, talking drum) or <b>modern</b> (telephone, radio, television, internet, newspaper).",
  study:[
    /* ---- course text: Semester Two, Period V (guide pp. 24-25) ---- */
    {k:"h3", t:"The Importance of Transportation"},
    {k:"p", t:"**Transportation** is the moving of people and goods from one place to another. It is the work that makes all the other work possible."},
    {k:"bul", items:["Children get to school and workers get to their jobs.","Farm produce reaches the market before it spoils, and prices stay fair.","The sick reach a clinic, and medicine reaches the village.","Timber, rubber, iron ore, cocoa and coffee reach the port for export.","Friends, relations and news move between towns and countries.","The county and the nation grow in unity and in wealth."]},
    {k:"rule"},
    {k:"h3", t:"Means of Transportation in Liberia"},
    {k:"num", items:["**Land** – on foot, wheelbarrow, bicycle, motorbike, taxi, bus, minibus, lorry, tractor, truck and railway (the mining lines of the past).","**Sea / water** – canoe, pirogue, plank boat, dingy, ferry and large ship; the Freeport of Monrovia and the ports of Buchanan, Harper and Greenville.","**Air** – aeroplane, small bush plane and helicopter; **Roberts International Airport (RIA)** near Monrovia is the country's main airport, with strips at Gbarnga, Harper, Voinjama and Sanniquellie."]},
    {k:"rule"},
    {k:"h3", t:"Traditional Means of Transportation"},
    {k:"bul", items:["**On foot** – still the way most country people travel and carry loads on the head.","**Canoe and pirogue** – dug out of a single tree trunk, paddled with a wooden paddle or pushed with a pole; the Kru people of Maryland and Sinoe are famous **sea-faring folk** and fishermen.","**Raft** – a flat floating platform of tied logs or bamboo used to cross a river.","**Hammock** – a hanging cloth or net; in the forest country a sick or aged person is carried in a hammock on two poles.","**Animal traction** – donkey and horse carts, and oxen to drag timber and plough."]},
    {k:"p", t:"Traditional means are still used where there is no road and no money for fuel; they are slow, cheap and depend on the weather and the river."},
    {k:"rule"},
    {k:"h3", t:"Modern Means of Transportation"},
    {k:"p", t:"Modern transport is faster and carries more, but it costs money for fuel, spare parts and repairs, and it needs roads, bridges, jetties, ports and airports."},
    {k:"bul", items:["Roads: the **Broad Road** from Monrovia to the counties, the dual carriage in the capital, and the last-mile tar roads.","Vehicles: bus, taxi, ‘speedy’ minibus, motorbike ‘okada’, goods truck, tanker.","Water: mechanised outboard-engine boats, ferry and ocean-going ship.","Air: scheduled and charter flights, air ambulance."]},
    {k:"rule"},
    {k:"h3", t:"Traditional Ways of Communicating"},
    {k:"bul", items:["**Songs and drumming** – work songs, children's songs, praise songs and dance drumming carry a message and a feeling.","**The town crier** – a man who walks through the town beating a bell or gong and calling out the news, the meeting or the death.","**The talking drum** – a drum squeezed under the arm so that it imitates the tones of the language and sends messages from town to town.","**Horn, bell, slit-gong and fire** – to call hunters, warn of danger or summon a meeting.","**Griots and elders** – men and women who carry the history of the people and repeat it at the gathering.","**Town criers' symbols** – a stick, a leaf or a piece of cloth sent to summon a chief."]},
    {k:"rule"},
    {k:"h3", t:"Modern Communication: Print and Electronic"},
    {k:"bul", items:["**Print media** – newspapers, journals, magazines, posters, handbills, books and notices on the school board.","**Electronic media** – radio, television, loudspeaker, telephone and mobile phone, SMS, internet, e-mail, WhatsApp and social media.","**The post** – letter, parcel and courier; the **postal stamp** pays for the carrying of the letter.","Liberian newspapers and county radio stations carry the news of the town; the **LBS** and private stations carry news, education and market prices."]},
    {k:"p", t:"Print media can be kept and read again; electronic media is faster and reaches people who cannot read; both are called **the media**, and both must tell the truth."},
    {k:"rule"},
    {k:"h3", t:"Choosing the Right Means"},
    {k:"p", t:"People choose a means of transport or communication according to **distance**, **urgency**, **the load**, **the weather and the roads**, and **the money they have**. A message to a neighbour goes by word of mouth; a sack of rice goes by truck; news from another continent comes by radio or the internet."}
  ],
  focus:["Importance of transportation","Means of transportation in Liberia: air, land, sea","Traditional means: raft, canoe, hammock","Modern means of transportation","Traditional ways to communicate: songs, town criers, talking drum","Print: newspapers and magazines"],
  terms:[
    {t:"transportation", d:"the moving of people and goods from one place to another", x:"Transportation links farmers to markets."},
    {t:"land transport", d:"movement over the ground by foot, bicycle, motorbike, car or train", x:"A taxi is land transport."},
    {t:"water transport", d:"movement over rivers and the sea by canoe, boat or ship", x:"A canoe is water transport."},
    {t:"air transport", d:"movement through the sky by aeroplane or helicopter", x:"Air transport is the fastest."},
    {t:"raft", d:"a flat floating platform of tied logs used to cross water", x:"They crossed the creek on a raft."},
    {t:"hammock", d:"a hanging cloth carried on poles to transport a person", x:"The chief was carried in a hammock."},
    {t:"communication", d:"the sending and receiving of messages", x:"Communication keeps families in touch."},
    {t:"town crier", d:"a person who walks through a town calling out news", x:"The town crier announced the meeting."},
    {t:"talking drum", d:"a drum used to send messages over a distance", x:"The talking drum called the people together."},
    {t:"media", d:"the means such as radio, television and newspapers that carry news", x:"The media reported the election."}
  ],
  facts:[
    {q:"Name the three kinds of transportation.", a:"Land, water (sea) and air."},
    {q:"Give two reasons why people travel.", a:"Any two: to trade, to work, to go to school, to visit family, to seek medical treatment, for holiday."},
    {q:"Name two traditional means of transportation in Liberia.", a:"Raft, canoe and hammock."},
    {q:"Name two traditional ways of communicating.", a:"Songs, the town crier, and the talking drum."},
    {q:"Name two modern means of communication.", a:"Any two: mobile phone, radio, television, internet, newspaper."},
    {q:"Which kind of transport is the fastest over a long distance?", a:"Air transport."}
  ],
  tf:[
    {s:"A canoe is a means of water transportation.", a:"true", why:"It carries people and goods across rivers and lagoons."},
    {s:"The talking drum is a modern means of communication.", a:"false", why:"It is a traditional means used long before telephones."},
    {s:"Good roads help farmers sell their produce.", a:"true", why:"Produce can reach the market quickly before it spoils."},
    {s:"A newspaper is a form of print media.", a:"true", why:"It carries news in printed form."},
    {s:"Air transport is the slowest way to travel a long distance.", a:"false", why:"Air transport is the fastest."},
    {s:"A town crier was used to pass information in villages.", a:"true", why:"He walked round calling out announcements to the people."}
  ],
  apply:[
    {q:"A village has no road. Name two problems this causes.", a:"Farmers cannot get produce to market so it spoils, and sick people cannot reach the clinic quickly; teachers and goods also find it hard to come in."},
    {q:"Why do some people still use canoes in Liberia today?", a:"Because many rivers have no bridges, canoes cost little, and they can reach places where cars cannot go."},
    {q:"Compare the town crier and the radio for passing a message.", a:"The town crier reaches only one town and can be heard clearly by those nearby; the radio reaches thousands of people over many counties at the same time."},
    {q:"How has the mobile phone changed life in your community?", a:"People can call family far away, send and receive money, get news quickly, and call for help in an emergency."}
  ],
  sort:{ title:"Kinds of transport and communication",
    groups:[
      {name:"Land transport", items:["Car","Motorbike","Bicycle","Walking"]},
      {name:"Water transport", items:["Canoe","Boat","Ship","Raft"]},
      {name:"Air transport", items:["Aeroplane","Helicopter"]},
      {name:"Traditional communication", items:["Talking drum","Town crier","Songs"]},
      {name:"Modern communication", items:["Mobile phone","Radio","Television","Newspaper"]}
    ]},
  mapwork:{ title:"Transport in my community", caption:"Complete the chart with the means of transport used in your area and what each is used for.",
    items:[
      {p:"Motorbike (pen-pen)", f:"carries one or two people quickly on small roads"},
      {p:"Taxi and bus", f:"carry many passengers between towns"},
      {p:"Truck", f:"carries heavy goods such as rice and building materials"},
      {p:"Canoe", f:"crosses rivers and creeks where there is no bridge"},
      {p:"Aeroplane", f:"carries people and light goods to other countries"}
    ]},
  casestudy:{ title:"The message from Harper",
    text:"Long ago, when a chief in Harper wanted to call the people, the talking drum was beaten and a town crier walked through the streets. Today the same message is sent by mobile phone and read on the radio. Nyema's grandfather says the drum could only be heard a few miles away, but the radio is heard all over Maryland County in a moment.",
    questions:[
      {q:"Name two traditional ways of passing the message in Harper.", a:"The talking drum and the town crier."},
      {q:"Name two modern ways used today.", a:"The mobile phone and the radio."},
      {q:"What advantage does the radio have over the talking drum?", a:"It is heard all over the county in a moment, while the drum reached only a few miles."}
    ]},
  project:{ title:"Then and now",
    brief:"Compare transport and communication in your community today with the past.",
    steps:["Ask an elder how people travelled and sent messages when they were young.","Write down what they say.","List what is used today for the same purposes.","Draw two pictures: 'long ago' and 'today'.","Present the comparison and say which change has helped most."],
    criteria:["An elder interviewed","Past methods recorded","Present methods listed","Two clear drawings","A reasoned conclusion"]},
  activities:["List reasons why people travel","Classify the three kinds of transportation","Describe means of transportation yesterday and today","List simple means of communication","Role play a town crier and a radio announcer","Draw traditional and modern means of transport"],
  materials:["Pictures of cars, canoes, ships and aeroplanes","Picture of a talking drum and hammock","A radio and a newspaper"],
  assessment:["Quizzes","Class work","Drawing and sorting task","Class participation","Test"]
},
{
  grade:2, period:"VI", sem:"Two", icon:"⚖️",
  title:"Observing Rules and Rights",
  subtitle:"Rules and laws at home and school, freedom of expression and basic rights",
  outcomes:["Learners observe and help maintain rules in the home and school","Learners recognise their right to express themselves freely, including how to say NO","Learners interpret rights"],
  objectives:["Explain the importance of rules and laws","Help craft rules and laws in the school and home","Recognise rights to express themselves freely","Respect the rights of other people","Develop a sense of patriotism by observing rules and laws"],
  note:"A <b>rule</b> guides behaviour in a home, class or school. A <b>law</b> is a rule made by government for the whole country, written in the <b>Constitution of Liberia</b>. Freedom of expression means you may say what you think — but you must respect other people while doing so.",
  study:[
    /* ---- course text: Semester Two, Period VI (guide pp. 26-27) ---- */
    {k:"h3", t:"Rules in the Home"},
    {k:"p", t:"A **rule** is an instruction that guides behaviour in a place. Rules in the home teach a child order, honesty and work."},
    {k:"bul", items:["Rise early, bathe, and greet the family.","Do the assigned chores before play.","Eat what is set before you; do not grab.","Ask before taking or borrowing anything.","Return home at the time you were told.","Speak the truth; do not cheat or swear.","Respect visitors, elders and the property of the house."]},
    {k:"rule"},
    {k:"h3", t:"Rules in the School"},
    {k:"bul", items:["Be in class before the bell and answer the register.","Bring exercise books, pens and reading books.","Wear the uniform correctly and keep the nails cut.","Raise the hand and speak only when you are given the chance.","Do not fight, bully, cheat or steal; report at once if something is wrong.","Obey the head teacher, teachers and the class monitor.","Keep the classroom, the compound and the toilet clean.","Stand, be silent and respectful for the flag and the anthem."]},
    {k:"p", t:"Rules in school are the same for every pupil, whether the pupil is a girl or a boy, rich or poor, or from any tribe. **Class rules are laws for the class**, and a class that makes its own simple laws keeps them better."},
    {k:"rule"},
    {k:"h3", t:"Rights of Expression"},
    {k:"p", t:"**Freedom of expression** is the right to say what you think, to hold an opinion, and to receive and give information. It is a right of every person, and children have it too."},
    {k:"p", t:"Liberians enjoy it in the classroom, in the town meeting, in the newspaper, on the radio and in a demonstration; and it has limits: no insult, no lies about somebody, and no word that stirs up violence."},
    {k:"bul", items:["Do not punish a child for telling the truth or for asking a question.","Let every pupil speak in class and take a part in a debate.","Write, draw, sing and act to express what you think."]},
    {k:"rule"},
    {k:"h3", t:"Confidence, Self-worth and Respect for Others"},
    {k:"bul", items:["**Self-worth** is the sense that you are a person of value; no insult and no mistake can take it away.","**Confidence** is belief in yourself and your abilities; it grows every time you try, fail and try again.","**Respect** is treating others as valuable and important; your right to speak is another child's right to be heard.","**Patriotism** is love and loyalty for one's country – the reason we keep our school, our town and our flag clean."]},
    {k:"p", t:"The four go together: a child who knows his worth speaks up, and a child who respects others listens."},
    {k:"rule"},
    {k:"h3", t:"Refusal, Negotiation and Communicating your Choice"},
    {k:"num", items:["Stop and think: what is being asked of me, and is it wrong or dangerous?","Say **NO** in a firm voice; give one clear reason.","Suggest an alternative – another game, another way, another time.","If the pressure continues, **leave** and tell an adult the same day."]},
    {k:"p", t:"**Communicating your choice** means telling in plain words what you have decided, without insulting the other person and without fear: ‘Thank you, but I will not do that. If you force me, I will report it.’"},
    {k:"rule"},
    {k:"h3", t:"Basic Rights"},
    {k:"p", t:"**Basic (fundamental) rights** are the rights the Constitution of Liberia guarantees to every person."},
    {k:"bul", items:["Right to life, liberty and security of person.","Equality before the law; fair hearing.","Freedom of speech, of the press and of assembly.","Freedom of thought, conscience and religion.","Right to own property; no unlawful search or seizure.","Right to privacy of the home and correspondence.","Right to work, to rest and to equal pay for equal work.","Right of the child to care, education and protection from cruelty and exploitation."]},
    {k:"rule"},
    {k:"h3", t:"The Constitution of Liberia"},
    {k:"p", t:"A **constitution** is the highest law of a country. Every other law, every rule of a school and every order of a leader must agree with it. The Liberian Constitution in force today is the **Constitution of 1980**, which places sovereign power in the people."},
    {k:"bul", items:["It sets up the three branches – the **Legislature**, the **Executive** and the **Judiciary**.","It lists the bill of rights that protects the person.","It says how the President, Senators and Representatives are elected and for how long.","It can be amended only by the vote of the people in a referendum."]},
    {k:"p", t:"A **law** is a rule made by the Legislature for the whole country and enforced by the courts; a **rule** may be made by a home, a school or an association. Both must be just, and both carry consequences when broken."},
    {k:"rule"},
    {k:"h3", t:"The Liberian Flag"},
    {k:"bul", items:["Eleven horizontal stripes of **red and white** – the eleven signers of the Declaration of Independence of 26 July 1847.","A blue square in the upper hoist – the continent of Africa.","A single **white five-pointed star** – the ‘Lone Star’, the first free republic in Africa, and the light of liberty.","Red – courage and the blood of the fathers; white – purity, peace and honesty; blue – hope and the dignity of Africa."]},
    {k:"p", t:"The flag is treated with honour: it is raised in the morning and lowered before dark, never allowed to touch the ground, never flown in tatters, and saluted with the right hand on the chest while the anthem is sung."},
    {k:"p", t:"The same respect is due to the **Coat of Arms**, to the **National Anthem** (‘All Hail, Liberia, Hail!’) and to the **Pledge of Allegiance**."}
  ],
  focus:["Rules in the home and rules in the school","Rights of expression","Rights to express oneself: confidence, self-worth, respect for others and their rights","Refusal and negotiation skills","Communicating your choice","Basic rights, the Constitution of Liberia and the Liberian Flag"],
  terms:[
    {t:"rule", d:"an instruction that guides behaviour in a place", x:"A class rule is to raise your hand."},
    {t:"law", d:"a rule made by government for the whole country", x:"Stealing is against the law."},
    {t:"constitution", d:"the highest law of a country", x:"The Constitution of Liberia protects our rights."},
    {t:"right", d:"something a person is entitled to", x:"Freedom of speech is a right."},
    {t:"freedom of expression", d:"the right to say what you think", x:"Freedom of expression must be used responsibly."},
    {t:"self-worth", d:"the sense that you are valuable as a person", x:"Self-worth helps a child say no to wrong."},
    {t:"confidence", d:"belief in yourself and your abilities", x:"Speak with confidence in class."},
    {t:"respect", d:"treating others as valuable and important", x:"Respect the rights of other people."},
    {t:"patriotism", d:"love and loyalty for one's country", x:"Obeying the law is a mark of patriotism."},
    {t:"consequence", d:"what follows when a rule is broken or kept", x:"Breaking a law has a consequence."}
  ],
  facts:[
    {q:"Why do we have rules?", a:"So that people can live and work together safely and peacefully, and know what is expected of them."},
    {q:"Give one difference between a rule and a law.", a:"A rule guides a small group like a class or home; a law is made by government and applies to the whole country."},
    {q:"What is the highest law of Liberia?", a:"The Constitution of Liberia."},
    {q:"Give two rules of your school.", a:"Any two, e.g. come on time, wear uniform, do not fight, respect teachers, keep the compound clean."},
    {q:"What does freedom of expression mean?", a:"The right to say what you think and feel, while respecting other people."},
    {q:"How does obeying the law show patriotism?", a:"It keeps the nation peaceful and orderly and shows love and loyalty for the country."}
  ],
  tf:[
    {s:"The Constitution is the highest law of Liberia.", a:"true", why:"All other laws must agree with it."},
    {s:"Rules are made only to punish children.", a:"false", why:"Rules are made to protect people and help them live together in peace."},
    {s:"Freedom of expression means you may insult anybody.", a:"false", why:"You must express yourself while respecting the rights and dignity of others."},
    {s:"Pupils can help make the rules of their class.", a:"true", why:"Rules made together are better understood and better kept."},
    {s:"Obeying the law is a mark of patriotism.", a:"true", why:"It shows love and loyalty for the country and keeps it peaceful."},
    {s:"Children have no right to be heard.", a:"false", why:"Children have the right to express their views on matters that affect them."}
  ],
  apply:[
    {q:"Your class has a problem with noise. Write two rules that would help and say how they will be enforced.", a:"Rule 1: raise your hand before speaking. Rule 2: only one person speaks at a time. Enforce by a class monitor recording names and the teacher agreeing a small penalty such as extra cleaning duty."},
    {q:"An older pupil tells you to lie to the teacher. What will you do?", a:"Refuse firmly, explain that lying is wrong and against the school rules, and report it if he keeps pressuring me."},
    {q:"Why must the rights of other people be respected while you use your own?", a:"Because everyone has the same rights; if I use mine to harm others, I take away their rights and cause conflict."},
    {q:"How can pupils show respect for the Liberian flag?", a:"Stand at attention when it is raised or lowered, sing the anthem properly, never let it touch the ground, and keep it clean and whole."}
  ],
  sort:{ title:"Rules, laws and rights",
    groups:[
      {name:"Rules in the home", items:["Greet elders","Come home before dark","Keep the house clean"]},
      {name:"Rules in the school", items:["Wear uniform","Come to school on time","Do not fight"]},
      {name:"Laws of the country", items:["Do not steal","Pay your taxes","Do not damage public property"]},
      {name:"Basic rights", items:["Freedom of speech","Right to education","Right to be protected"]}
    ]},
  mapwork:{ title:"Rules and their reasons", caption:"Complete the chart giving the reason for each rule.",
    items:[
      {p:"Come to school on time", f:"so that lessons can start together and no learning is lost"},
      {p:"Do not fight", f:"so that pupils are safe and disputes are settled by talking"},
      {p:"Keep the compound clean", f:"so that disease does not spread and the school looks good"},
      {p:"Raise your hand before speaking", f:"so that everyone can be heard in turn"},
      {p:"Respect other people's property", f:"so that trust is kept and nothing is lost or damaged"}
    ]},
  casestudy:{ title:"The class that made its own rules",
    text:"Grade Two at a school in Zwedru was noisy and pupils lost their books. Their teacher asked them to make their own rules. The pupils suggested five rules and wrote them on a chart. They agreed that anyone who broke a rule would help sweep the class. After one month the noise had stopped and no more books were lost. The pupils said they kept the rules because they had made them themselves.",
    questions:[
      {q:"What two problems did the class have?", a:"The class was noisy and pupils lost their books."},
      {q:"How were the new rules made?", a:"The pupils themselves suggested them and wrote them on a chart."},
      {q:"Why did the pupils keep the rules?", a:"Because they had made the rules themselves, so they understood and accepted them."}
    ]},
  project:{ title:"Our class charter",
    brief:"Work as a class to write a charter of rights and responsibilities.",
    steps:["List five rights every pupil in the class should have.","Beside each right, write the responsibility that goes with it.","Agree the list by a class vote.","Write the charter neatly on a large sheet and let everyone sign it.","Display it in the classroom and review it after one month."],
    criteria:["Five rights listed","A matching responsibility for each","Agreement reached by vote","Neat, signed charter","Reviewed after one month"]},
  activities:["Explain the importance of rules and laws","Help craft rules for the class and school","Role play saying NO and communicating your choice","Discuss basic rights in the Constitution","Draw and colour the Liberian flag"],
  materials:["Copy of school rules","Simplified extract of the Constitution","Liberian flag","Poster sheets"],
  assessment:["Quizzes","Class work","Class charter","Class participation","Test"]
},

/* ================= GRADE 3 ================= */
{
  grade:3, period:"I", sem:"One", icon:"🏡",
  title:"Local Community",
  subtitle:"Family types, building a strong family, needs and wants, and the local community",
  outcomes:["Learners demonstrate a sense of belonging to a family and protect family values","Learners contribute to the growth and development of their local community"],
  objectives:["Identify family types (nuclear, extended, single-parent)","Build a strong family","Distinguish the basic needs of a family from their wants","Compare and contrast a local community with a neighbourhood","Differentiate between a local community and other communities"],
  note:"A strong family is built on <b>discipline</b>, <b>love</b> and <b>respect</b>. A <b>need</b> is something we must have to live; a <b>want</b> is something we would like but can live without. A <b>local community</b> is the area where you live, with its own service providers.",
  study:[
    /* ---- course text: Semester One, Period I (guide pp. 28-29) ---- */
    {k:"h3", t:"The Family in the Community"},
    {k:"p", t:"A **family** is the first group a child belongs to. Families join together street by street, and streets join to make a **local community** – the area where you live, with its people, its school, its market, its clinic and its leaders."},
    {k:"rule"},
    {k:"h3", t:"Family Types"},
    {k:"num", items:["**Nuclear family** – a father, a mother and their children living together.","**Extended family** – parents and children together with grandparents, aunties, uncles and cousins; this is the common family of the village and the town ward.","**Single-parent family** – one parent (often the mother) living with and caring for the children."]},
    {k:"p", t:"No family type is a joke or a shame. What matters is not the shape of the family but the love, the work and the discipline inside it."},
    {k:"rule"},
    {k:"h3", t:"Building a Strong Family"},
    {k:"p", t:"A **family value** is a belief or standard a family lives by. Strong families are built on three pillars:"},
    {k:"bul", items:["**Discipline** – training that teaches people to behave correctly; children who are taught limits at home behave well at school.","**Love** – wishing good for one another and showing it in work, food, care and kind words.","**Respect** – treating every member as valuable: children honour parents, and parents listen to children."]},
    {k:"p", t:"Other family values are honesty, hard work, sharing, keeping promises, praying or worshipping together, welcoming visitors, and caring for the old and the sick."},
    {k:"p", t:"A family is built also by **cooperation** – everybody doing part of the work so that the home runs smoothly and nobody is over-burdened."},
    {k:"rule"},
    {k:"h3", t:"Needs and Wants of the Family"},
    {k:"p", t:"A **need** is something we must have in order to live; a **want** is something we would like but can live without."},
    {k:"table", head:["Basic needs of the family","Examples of wants"], rows:[
      ["Food and clean water","Soda, biscuits, sweets, flavoured drinks"],
      ["Clothing and shoes","Designer cloth, gold beads, fancy sandals"],
      ["Shelter and rent","A radio in every room, a big tent chair"],
      ["Healthcare and medicine","Playing cards all night, a party dress for every feast"],
      ["School fees, books and uniform","A second phone, cosmetics, extra games"]
    ]},
    {k:"p", t:"A family that spends its money on wants before needs falls into debt and hunger. **Budgeting** – planning in writing what money will go to – keeps the family steady."},
    {k:"rule"},
    {k:"h3", t:"The Local Community and its Service Providers"},
    {k:"p", t:"A **service provider** is a person or a place that gives a service to the people. The local community lives by its service providers."},
    {k:"bul", items:["**Education** – the school, the teachers, the PTA.","**Health** – the clinic, the health post, the pharmacy, the midwife, the community health worker.","**Water and power** – the borehole, the standpipe, the hand pump, the generator, the meter.","**Safety and order** – the town chief, the elders, the police post, the fire volunteer.","**Trade and movement** – the market, the lappah, the taxi and bus drivers, the ferryman.","**Worship and care** – church, mosque, the deaconess, the youth and women groups.","**Local government** – the town development association (TDA), the clan and chiefdom offices."]},
    {k:"p", t:"Service providers are paid by taxes, fees and donations; the pupils pay for their school with fees, and every family with a property tax or a market fee."},
    {k:"rule"},
    {k:"h3", t:"Local Community and Neighbourhood"},
    {k:"bul", items:["A **neighbourhood** is the ring of houses around your own home – small, walked in minutes.","A **local community** is bigger: several neighbourhoods with their shared school, market, stream, church and leaders.","Both give a child **belonging** – the feeling of being part of a group that knows you and looks after you."]},
    {k:"p", t:"A strong community is one in which people know their neighbours, help in sickness and in death, settle disputes by talk, and work together on common projects."},
    {k:"rule"},
    {k:"h3", t:"Key Features of a Local Community"},
    {k:"bul", items:["People: their number, their languages, their religions, their occupations.","Land: the farms, the forest, the stream, the road, the market place.","Institutions: the school, the clinic, the church or mosque, the chief's court, the TDA.","Services: water, sanitation, electricity, transport, security.","Activity: farming, fishing, trading, carving, sewing, teaching.","**Development** – the growth and improvement of the place: a new well, a repaired bridge, a literacy class."]},
    {k:"p", t:"Draw the map of your community and mark the features you can name. Then write the one feature your community most needs, and what the people could do to get it."}
  ],
  focus:["Family types: nuclear, extended, single-parent","Building a strong family: family discipline, love and respect","Basic needs of a family; difference between needs and wants","Local community and its service providers","Local community and neighbourhood","Key features of a local community"],
  terms:[
    {t:"family value", d:"a belief or standard a family lives by", x:"Honesty is an important family value."},
    {t:"discipline", d:"training that teaches people to behave correctly", x:"Family discipline builds good character."},
    {t:"need", d:"something we must have in order to live", x:"Food is a need."},
    {t:"want", d:"something we would like but can live without", x:"A bicycle is a want."},
    {t:"local community", d:"the area where you live with the people and services in it", x:"Our local community has a clinic."},
    {t:"service provider", d:"a person or place that gives a service to the people", x:"The nurse is a service provider."},
    {t:"belonging", d:"the feeling of being part of a group", x:"A sense of belonging makes a child confident."},
    {t:"cooperation", d:"working together for a common purpose", x:"Cooperation built the community hall."},
    {t:"development", d:"the growth and improvement of a place", x:"New roads bring development."},
    {t:"feature", d:"an important part or characteristic of a place", x:"The market is a key feature of our community."}
  ],
  facts:[
    {q:"Name the three family types.", a:"Nuclear, extended and single-parent."},
    {q:"Give two things that build a strong family.", a:"Any two: discipline, love, respect, communication, sharing work, worshipping or eating together."},
    {q:"Give one example of a family need and one of a want.", a:"Need: food, clothing, shelter, medicine. Want: a television, sweets, a bicycle."},
    {q:"Name three service providers in a local community.", a:"Any three: teacher, nurse, police officer, market woman, carpenter, pastor or imam."},
    {q:"Give one difference between a local community and a neighbourhood.", a:"A neighbourhood is only the nearby houses; a local community is larger and has shared services such as a school and market."},
    {q:"How can a child contribute to the development of the community?", a:"By keeping the surroundings clean, joining clean-up campaigns, studying hard, and respecting community rules and elders."}
  ],
  tf:[
    {s:"A want is more important than a need.", a:"false", why:"A need is necessary for survival; a want is not."},
    {s:"Respect helps to build a strong family.", a:"true", why:"Respect keeps peace and unity in the home."},
    {s:"A teacher is a service provider in the community.", a:"true", why:"A teacher provides the service of education."},
    {s:"A local community is smaller than a neighbourhood.", a:"false", why:"A community is larger and contains several neighbourhoods."},
    {s:"Children have no part to play in community development.", a:"false", why:"Children can clean, plant, learn and help their neighbours."},
    {s:"Family discipline teaches children good behaviour.", a:"true", why:"Discipline is the training that builds good character."}
  ],
  apply:[
    {q:"A family has money for either school fees or a new television. Which should they choose and why?", a:"School fees, because education is a need that improves the child's whole future, while a television is only a want."},
    {q:"Your community has no place for children to play. What can be done?", a:"The community can meet, ask the leader for a piece of land, and clear it together as a playground; young people can help clean and maintain it."},
    {q:"Name two family values you would like to pass to your own children.", a:"Any two, e.g. honesty, hard work, respect for elders, love, care for the sick, and the value of education."},
    {q:"How can neighbours help a single-parent family?", a:"By sharing childcare, helping with school fees or food when possible, checking on the children, and giving advice and encouragement."}
  ],
  sort:{ title:"Needs, wants and service providers",
    groups:[
      {name:"Family needs", items:["Rice","Medicine","A house","School fees"]},
      {name:"Family wants", items:["Television","Sweets","New sneakers","Radio"]},
      {name:"Service providers", items:["Teacher","Nurse","Police officer","Carpenter"]}
    ]},
  mapwork:{ title:"Service providers in my local community", caption:"Complete the chart naming the service and where it is found in your community.",
    items:[
      {p:"School", f:"provides education; run by teachers and a principal"},
      {p:"Clinic", f:"provides healthcare; run by nurses and health workers"},
      {p:"Market", f:"provides food and goods; run by traders"},
      {p:"Police station", f:"provides security and settles disputes"},
      {p:"Water pump or well", f:"provides clean drinking water for the community"}
    ]},
  casestudy:{ title:"The Kollie family of Ganta",
    text:"The Kollie family lives in Ganta. There are the parents, four children and an old grandmother. Each evening the family eats together and the children tell what happened at school. Every Saturday the whole family joins the community clean-up. When money was short last year, the parents paid school fees first and put off buying a new radio. The children say their family is strong because everybody helps.",
    questions:[
      {q:"What type of family is the Kollie family?", a:"An extended family, because the grandmother also lives with them."},
      {q:"What choice did the parents make when money was short?", a:"They paid school fees first and put off buying a radio."},
      {q:"Give one reason the children say their family is strong.", a:"Because everybody helps, they eat and talk together, and they join the community clean-up."}
    ]},
  project:{ title:"Community service map",
    brief:"Map the service providers of your local community and rate them.",
    steps:["List every service provider you can find in your community.","Mark each one on a simple map.","For each, write what service it gives.","Ask two people which service is most needed and why.","Present your map and say which service should be improved first."],
    criteria:["At least five providers listed","Correctly marked on the map","Service of each stated","Two people consulted","A reasoned recommendation"]},
  activities:["Identify family types","Discuss ways of building a strong family","Distinguish needs from wants using pictures","Compare a local community with a neighbourhood","Draw a map of the local community showing service providers"],
  materials:["Pictures of family types","Pictures of needs and wants","Poster sheets and markers"],
  assessment:["Quizzes","Class work","Map work","Class participation","Test"]
},
{
  grade:3, period:"II", sem:"One", icon:"🏙️",
  title:"Kinds of Community",
  subtitle:"Urban and rural communities, interdependence, child labour and the media",
  outcomes:["Learners demonstrate knowledge of the importance of community services","Learners appreciate living and working with diversity in urban or rural communities","Learners identify difficult circumstances facing children","Learners identify the influence of media on their lives"],
  objectives:["Describe what a community is","Explain the differences between urban and rural communities","Discuss the interdependence of all communities","Locate the various places and institutions in his or her community","Explain the conditions of children in difficult circumstances"],
  note:"An <b>urban</b> community is a town or city with many people, tall buildings and businesses. A <b>rural</b> community is a village area with farms and fewer people. They depend on each other: the rural area sends food, and the town sends manufactured goods — this is <b>interdependence</b>.",
  study:[
    /* ---- course text: Semester One, Period II (guide pp. 30-32) ---- */
    {k:"h3", t:"Characteristics of a Community"},
    {k:"p", t:"A community is not just a crowd of houses. It has five characteristics:"},
    {k:"num", items:["**People** – a group of families, the **population** of the place.","**Place** – a defined area of land with boundaries, a name and features.","**Shared life** – common interests, work, language and worship.","**Rules and leaders** – norms, laws, a chief, a mayor, a TDA.","**Services and institutions** – school, market, clinic, water, worship place, court."]},
    {k:"p", t:"**Diversity** means that people of different tribes, religions, languages and opinions live together in one place. A classroom, a market and a town are strong when they are diverse and peaceful."},
    {k:"rule"},
    {k:"h3", t:"Community Services and Community Leaders"},
    {k:"table", head:["Community service","Who provides it","Who pays for it"], rows:[
      ["Education","Teachers, head teacher, principal","Parents (fees), government, the community"],
      ["Health","Nurse, midwife, pharmacist, CHW","Families (fees), government, missions"],
      ["Water","Caretaker of the borehole or standpipe","Monthly fee from each household"],
      ["Security and justice","Police, town chief and elders","Taxes of the whole country"],
      ["Roads, drains and market","Public works, the city corporation, the TDA","Government and county funds, town levies"],
      ["Worship and charity","Pastor, imam, deaconess, women's group","Offerings and dues of the members"]
    ]},
    {k:"p", t:"A good community leader is honest, listens, keeps records, calls meetings, spends public money openly, and is accountable to the people."},
    {k:"rule"},
    {k:"h3", t:"Rural and Urban Communities"},
    {k:"p", t:"A **rural community** is a village area with farms, forest and fewer people. An **urban community** is a town or city with many people, buildings, businesses and services."},
    {k:"table", head:["Rural community","Urban community"], rows:[
      ["Farms, forest, fishing; houses far apart","Shops, offices, factories; houses and flats close together"],
      ["One or two languages, strong custom","Many tribes, languages and religions"],
      ["Pipe-borne water rare; wells, springs, stream","Pipe-borne water, metered, plus wells and vendors"],
      ["Primary school, health post; secondary school far","Many schools, hospitals, clinics, pharmacy"],
      ["Market day once a week; foot, canoe, motorbike","Daily market; taxi, bus, lorry, airport near"],
      ["Chief and elders; town meetings","Mayor, corporation, city council, police"]
    ]},
    {k:"p", t:"**Similarities**: in both there are families, children, a place of worship, a market, rules and leaders; in both people farm, trade and marry; in both there is need of clean water and good sanitation."},
    {k:"rule"},
    {k:"h3", t:"Interdependence of Communities"},
    {k:"p", t:"**Interdependence** is the way two places depend on each other. The village and the town cannot live without one another."},
    {k:"bul", items:["The rural area sends the town **food** – rice, cassava, vegetable, palm oil, fish, egg, chicken – and **raw materials** – rubber, cacao, coffee, timber, ore.","The town sends the village **manufactured goods** – cloth, soap, kerosene, cement, zinc, torch lights, tools, medicine and school books.","The town gives the village the secondary school, the hospital, the court and the bank; the village gives the town its water catchment and its forest.","Traders, drivers, teachers, nurses and mechanics move between the two every day."]},
    {k:"p", t:"When one place is cut off by a broken bridge or a closed road, both suffer: food becomes scarce in the town and goods become dear in the village."},
    {k:"rule"},
    {k:"h3", t:"Urban Products and Rural Produce"},
    {k:"table", head:["Rural produce","Urban products"], rows:[
      ["Rice, cassava, cocoyam, plantain, vegetable","Bagged cement, zinc sheets, nails, tools"],
      ["Palm oil and kernel, rubber lump, cacao, coffee","Cloth, lappa, shoes, second-hand dress"],
      ["Fresh and smoked fish, bush meat, egg, milk","Soap, tin food, drink, sugar, kerosene, gas"],
      ["Timber, bamboo, raffia, thatch, medicinal herbs","Books, exercise books, pens, school uniform"],
      ["Charcoal and firewood","Medicine, torch battery, radio, phone credit"]
    ]},
    {k:"p", t:"**Cottage industries in rural communities** are small businesses run from the home or the village: sewing and tailoring, soap and candle making, basket and mat weaving, broom making, carving, pottery, palm-oil pressing, rice pounding, smoking of fish, bead work, hair dressing and hair braiding, brick making and shoe mending."},
    {k:"bul", items:["They need little money to start and use local materials.","They give work to women, girls and school-age children in the holidays.","They turn raw produce into something worth more – cassava into garri, palm fruit into oil, clay into pots.","They keep money inside the community instead of sending it to the town."]},
    {k:"rule"},
    {k:"h3", t:"Child Labour"},
    {k:"p", t:"**Child labour** is work that is too hard for a child, or work that keeps a child from school and from growing well. Not every task is child labour: sweeping, fetching water, minding a sibling and helping on the farm on Saturday are duties that train a child."},
    {k:"bul", items:["**Dangers to the body** – heavy loads bend the back and hurt the chest; machetes and knives cut; farm chemicals poison; long hours in the sun burn and dehydrate.","**Dangers to the mind** – tiredness, shame, fear, and loss of the confidence a child needs to speak and to learn.","**Dangers to schooling** – late arrival, sleep in class, failure, dropping out, illiteracy in adult life.","**Dangerous places** – mining pits, quarry, timber camp, sea fishing at night, street hawking far from home, domestic work in a stranger's house, market portering."]},
    {k:"p", t:"The law protects the child: a child must be in school, must not be made to work for another person, must not be bought or sold, and must not be given work that is dangerous. Report a child at dangerous work to a teacher, a parent, the town chief or the police."},
    {k:"p", t:"**What a pupil can do**: refuse dangerous work and say why; help a classmate who must work by sharing notes; take turns at chores so nobody is over-loaded; join the club that speaks against child labour."}
  ],
  focus:["Characteristics of a community","Community services and community leaders","Rural and urban communities: similarities and differences","Interdependence of communities","Urban products and rural produce","Cottage industries in rural communities","Child labour"],
  terms:[
    {t:"urban community", d:"a town or city with many people and businesses", x:"Monrovia is an urban community."},
    {t:"rural community", d:"a village area with farms and fewer people", x:"A rural community grows most of our food."},
    {t:"interdependence", d:"the way two places depend on each other", x:"Interdependence links the farm and the city."},
    {t:"produce", d:"food and crops grown on farms", x:"Rural produce is sold in the city."},
    {t:"cottage industry", d:"a small business run from the home or village", x:"Soap making is a cottage industry."},
    {t:"institution", d:"an established organisation such as a school, court or bank", x:"A school is an institution."},
    {t:"child labour", d:"work that is too hard for a child and stops them going to school", x:"Child labour denies children an education."},
    {t:"diversity", d:"the presence of people of different backgrounds together", x:"Diversity makes a community rich."},
    {t:"media", d:"radio, television, newspapers and the internet", x:"The media shapes what children think."},
    {t:"population", d:"the number of people living in a place", x:"Urban areas have a large population."}
  ],
  facts:[
    {q:"Give two differences between an urban and a rural community.", a:"Urban has many people, tall buildings, shops and factories; rural has fewer people, farms, and mostly small houses."},
    {q:"What is interdependence?", a:"The way communities depend on one another — the village sends food to the town and the town sends manufactured goods to the village."},
    {q:"Name two things a rural community sends to a city.", a:"Any two: rice, cassava, palm oil, charcoal, fish, vegetables, timber."},
    {q:"Name two things a city sends to a rural community.", a:"Any two: soap, cement, clothes, fuel, medicine, exercise books, phones."},
    {q:"Give one example of a cottage industry.", a:"Soap making, weaving, basket making, blacksmithing, pottery or gara dyeing."},
    {q:"What is child labour?", a:"Work that is too heavy or dangerous for a child and stops them from going to school."}
  ],
  tf:[
    {s:"Monrovia is an urban community.", a:"true", why:"It is a large city with a big population and many businesses."},
    {s:"Rural and urban communities do not need each other.", a:"false", why:"They are interdependent — one supplies food, the other manufactured goods and services."},
    {s:"Weaving in the village is a cottage industry.", a:"true", why:"It is a small business carried on in the home or village."},
    {s:"All work done by children is child labour.", a:"false", why:"Light household chores are normal; child labour is heavy or dangerous work that stops schooling."},
    {s:"Urban communities usually have more people than rural ones.", a:"true", why:"Towns and cities have larger populations."},
    {s:"The media can influence how children behave.", a:"true", why:"What children see and hear on radio, TV and the internet shapes their ideas and actions."}
  ],
  apply:[
    {q:"Why do many young people move from the village to Monrovia?", a:"To look for jobs, better schools, healthcare and electricity, and because farming brings little money."},
    {q:"Give one problem caused when too many people move to the city.", a:"Overcrowding, high rent, not enough jobs, more slums, pressure on water, toilets and schools, and more rubbish."},
    {q:"A boy of ten sells goods in the street all day instead of going to school. What is wrong and what should be done?", a:"This is child labour that denies his right to education; a child welfare officer or community leader should talk with the family and help him return to school."},
    {q:"How can the radio be used to help your community?", a:"To announce health campaigns and meetings, teach farming methods, warn of storms, and share news and education programmes."}
  ],
  sort:{ title:"Urban and rural",
    groups:[
      {name:"Urban community", items:["Tall buildings","Factories","Traffic lights","Many shops"]},
      {name:"Rural community", items:["Farms","Palm trees","Footpaths","Few houses"]},
      {name:"Rural produce", items:["Rice","Cassava","Palm oil","Charcoal"]},
      {name:"Urban products", items:["Soap","Cement","Clothes","Exercise books"]}
    ]},
  mapwork:{ title:"Institutions in my community", caption:"Locate and label the institutions found in your community, and write what each one does.",
    items:[
      {p:"School", f:"educates the children of the community"},
      {p:"Clinic or hospital", f:"treats the sick and gives vaccinations"},
      {p:"Market", f:"where produce and goods are bought and sold"},
      {p:"Police station", f:"keeps law and order and protects the people"},
      {p:"Court", f:"settles disputes according to the law"},
      {p:"Church or mosque", f:"place of worship and community gathering"}
    ]},
  casestudy:{ title:"From Bong farm to Monrovia market",
    text:"Every Thursday, Massa loads bags of cassava and palm oil onto a truck in Bong County. The truck reaches Monrovia at dawn and the goods are sold at Red Light market. With the money Massa buys soap, exercise books, cement and medicine, which she carries back to her village and sells there. She says the village and the city cannot do without each other.",
    questions:[
      {q:"What does Massa carry to the city?", a:"Cassava and palm oil — rural produce."},
      {q:"What does she carry back to the village?", a:"Soap, exercise books, cement and medicine — urban products."},
      {q:"What idea does the last sentence describe?", a:"Interdependence — the village and the city depend on each other."}
    ]},
  project:{ title:"Urban and rural comparison",
    brief:"Compare your community with a different kind of community.",
    steps:["Decide whether your community is urban or rural.","List five features of your own community.","Find out five features of the other kind of community from an elder, a book or a picture.","Draw a two-column table comparing them.","Write two sentences on how the two communities depend on each other."],
    criteria:["Correct classification","Five features of each","A clear comparison table","Two sentences on interdependence","Neat presentation"]},
  activities:["Describe what a community is","Explain the differences between urban and rural communities","Discuss the interdependence of communities","Locate places and institutions in the community","Discuss children in difficult circumstances","Discuss the influence of media"],
  materials:["Pictures of urban and rural scenes","Map of the local community","Newspaper and radio for media discussion"],
  assessment:["Quizzes","Class work","Comparison table","Class participation","Test"]
},
{
  grade:3, period:"III", sem:"One", icon:"🌦️",
  title:"Effect of Weather on Macro-Climate",
  subtitle:"Rainy and dry seasons, macro-climate, and indoor and outdoor activities",
  outcomes:["Learners associate economic activities with changing weather conditions"],
  objectives:["Describe the effects of weather conditions on their lives","Differentiate weather from macro-climate","Explain the conditions that lead to macro-climatic situations and their effects on work","Associate certain activities with indoor or outdoor conditions"],
  note:"<b>Weather</b> changes from day to day. <b>Macro-climate</b> is the large-scale climate of a whole region over many years. Liberia's <b>rainy season</b> runs about May to October and the <b>dry season</b> about November to April; each shapes the work people do.",
  study:[
    /* ---- course text: Semester One, Period III (guide pp. 33-34) ---- */
    {k:"h3", t:"Weather and the Two Seasons"},
    {k:"p", t:"**Weather** is the state of the air on a particular day – whether it is hot or cool, sunny or cloudy, dry or rainy, still or windy. Weather changes from day to day and even from hour to hour."},
    {k:"bul", items:["**The rainy season** – about May to October. Rain falls almost every day, the rivers rise, the rice and cassava grow, roads become muddy, and malaria increases. June and July are the wettest months.","**The dry season** – about November to April. Rain is scarce, the wells fall, the grass burns, dust hangs in the air, and the **harmattan** blows from the north-east.","**The harmattan** – the dry, dusty wind that comes in December and January; it makes the mornings cold, cracks the lips and skin, and covers everything with fine red dust."]},
    {k:"p", t:"Liberia has no cold winter: it is hot and wet all the year round, so the two seasons are wet and dry, not hot and cold."},
    {k:"rule"},
    {k:"h3", t:"Economic Activities under Various Climatic Conditions"},
    {k:"p", t:"An **economic activity** is the work people do to produce, or to earn a living. In Liberia the calendar of work follows the rain."},
    {k:"table", head:["Season or condition","Work people do then"], rows:[
      ["Beginning of the rains (March-April)","Cut and burn the bush, ridge the hill, prepare the swamp, plant rice, cassava, vegetable"],
      ["Height of the rains (June-August)","Weeding, thinning, planting seedlings of coco-yam and plantain; fishing is plentiful; roads are bad and transport is costly"],
      ["End of the rains (September-November)","Harvest rice, cassava, groundnut and plantain; dry and store the food; make and repair fences"],
      ["Dry season and harmattan (December-February)","Dry fish and meat, tap rubber, harvest cacao and coffee, burn charcoal, make bricks, dig wells, build houses, trade at the market, repair roads and bridges"],
      ["Long drought","Irrigate the kitchen garden from the stream, carry water further, lose the crop, suffer hunger"],
      ["Heavy flood","Move the house and the food to higher ground, rescue, repair the bank and the ditch"]
    ]},
    {k:"p", t:"Weather also decides the price of food: when the road is cut by rain, cassava in the town becomes dear while it rots on the farm."},
    {k:"rule"},
    {k:"h3", t:"What is Macro-Climate?"},
    {k:"p", t:"**Climate** is the usual weather of a place over many years. **Macro-climate** is the climate of a **large region** – a whole country or belt of the earth – studied over a long period instead of one day in one village."},
    {k:"bul", items:["Liberia's macro-climate is **equatorial / tropical wet**: hot (about 25-30 °C), heavy rain (3,000-5,000 mm on the coast), high humidity, two seasons.","North of us the macro-climate becomes **tropical wet-and-dry**, and then the hot dry **Sahel**; the rain and the forest get less as you go north.","Within one country there are small **local climates (micro-climates)**: Mount Woléwari is cool and misty, the coast is breezy and moist, Monrovia streets are hotter than the farms because of the zinc and the tar."]},
    {k:"p", t:"A **drought** is a long period with too little rain; a **flood** is water covering land that is normally dry. Both are the great weather dangers of our region."},
    {k:"rule"},
    {k:"h3", t:"Effect of Macro-Climate on the Lives of People"},
    {k:"bul", items:["**Farming** – the length of the rains decides what is grown: rice and cassava in the wet south, millet, maize and groundnut in the drier north.","**Housing** – steep zinc or thatch roofs to shed heavy rain; verandahs; open walls for the breeze; mud walls in the dry country.","**Clothing** – light cotton and cloth that dries quickly in the moist heat; a wrap for the cool harmattan morning.","**Health** – malaria and diarrhoea in the rains, coughs and eye and skin trouble in the harmattan.","**Water and power** – rivers give the borehole, the irrigation and the electricity at Mount Coffee; when rain fails the lights fail.","**Trade and transport** – good dry-season roads, impassable rainy-season paths; the price of rice moves with the weather.","**Festivals and rest** – the harvest dance, the outing, the town clean-up before the rain."]},
    {k:"rule"},
    {k:"h3", t:"Indoor Activities"},
    {k:"p", t:"An **indoor activity** is work or play done inside a building or a room. In the heavy rain and in the harmattan dust, much of the life of the family is indoors."},
    {k:"bul", items:["**Indoor games** – ludo, draughts (checkers), cards, mancala-style stone games, puzzles, word and number games.","**Learning** – reading, writing, homework, revision, copying a song, practising spelling, reading the Bible or Quran.","**Work** – sewing and embroidery, weaving mats and baskets, stringing beads, sorting and packing groundnut, pounding and washing, cooking, ironing, mending a net.","**Office work** – the clerk keeping records, the head teacher marking registers, the shop keeper counting the day's money, the treasurer writing receipts.","**Indoor recreation** – listening to the radio, watching educational television, prayer meeting, choir practice, storytelling in the evening."]},
    {k:"p", t:"Keep an indoor room airy and light; do not burn coal or run a generator inside a closed room, because the smoke can kill."},
    {k:"rule"},
    {k:"h3", t:"Outdoor Activities"},
    {k:"p", t:"An **outdoor activity** is work or play done in the open air."},
    {k:"bul", items:["**Farming** – clearing, ridging, planting, weeding, harvesting, drying, storing; tending poultry, goats and pigs.","**Fishing and hunting** – casting the net from the bank or the canoe, setting the trap, gathering periwinkle and crab in the mangrove.","**Mining** – digging and washing gold and diamond in the river sand, and quarrying stone.","**Other work** – making and burning charcoal, cutting and carting firewood, tapping rubber, brick making, sand and water carrying, hawking at the market, sweeping and drying the compound.","**Outdoor play and sport** – running, football, swimming in the calm pool with a grown-up, kite flying, skipping, and the morning jog.","**Community work** – town clean-up, digging drains, repairing the footpath, planting tree seedlings."]},
    {k:"p", t:"Outdoor work must be done with shade, water and rest in the heat; wear boots in the mud and shoes at the mine, and never enter the water alone."}
  ],
  focus:["Weather: rainy and dry seasons","Economic activities under various climatic conditions","Definition of macro-climate","Effect of macro-climate on the lives of people","Indoor activities: indoor games, office work, indoor recreation","Outdoor activities: farming, fishing, mining"],
  terms:[
    {t:"weather", d:"the state of the air on a particular day", x:"Today's weather is cloudy."},
    {t:"macro-climate", d:"the climate of a large region over many years", x:"West Africa's macro-climate is tropical."},
    {t:"rainy season", d:"the months of heavy rain, about May to October", x:"Farmers plant in the rainy season."},
    {t:"dry season", d:"the months of little rain, about November to April", x:"Roads are best in the dry season."},
    {t:"harmattan", d:"the dry dusty wind that blows from the Sahara in the dry season", x:"The harmattan makes the air hazy."},
    {t:"economic activity", d:"the work people do to earn a living", x:"Farming is an economic activity."},
    {t:"indoor activity", d:"work or play done inside a building", x:"Office work is an indoor activity."},
    {t:"outdoor activity", d:"work or play done in the open air", x:"Fishing is an outdoor activity."},
    {t:"drought", d:"a long period with too little rain", x:"Drought destroys the crops."},
    {t:"flood", d:"water covering land that is normally dry", x:"Heavy rain caused a flood."}
  ],
  facts:[
    {q:"Name the two seasons of Liberia and their months.", a:"The rainy season, about May to October, and the dry season, about November to April."},
    {q:"Give one difference between weather and macro-climate.", a:"Weather is what the air is like on one day; macro-climate is the usual climate of a large region over many years."},
    {q:"Name two outdoor economic activities.", a:"Any two: farming, fishing, mining, logging, road building, market trading."},
    {q:"Name two indoor activities.", a:"Any two: office work, tailoring, teaching in class, indoor games, weaving."},
    {q:"How does the dry season help builders?", a:"There is no rain, so blocks dry well, roads are passable and building work is not interrupted."},
    {q:"What is the harmattan?", a:"The dry, dusty wind that blows from the Sahara during the dry season."}
  ],
  tf:[
    {s:"Weather and macro-climate are the same thing.", a:"false", why:"Weather is day to day; macro-climate is the long-term climate of a whole region."},
    {s:"Farmers plant most crops during the rainy season.", a:"true", why:"The rain waters the crops so they germinate and grow."},
    {s:"Mining is an indoor activity.", a:"false", why:"Mining is carried out in the open or underground, outside a building."},
    {s:"Heavy rain can cause floods in Monrovia.", a:"true", why:"Blocked drains and low land cause water to cover streets and homes."},
    {s:"The harmattan brings dust and dry air.", a:"true", why:"It blows dry, dusty air from the Sahara desert."},
    {s:"Weather has no effect on the work people do.", a:"false", why:"Farming, fishing, building and trading all depend on the weather."}
  ],
  apply:[
    {q:"Why do fishermen sometimes stay ashore in the rainy season?", a:"Because storms and rough seas make small canoes dangerous, so they wait until the sea is calm."},
    {q:"A road contractor plans to build in July. Advise him.", a:"July is the height of the rainy season; the ground will be soft and work will be washed away. He should build in the dry season, roughly November to April."},
    {q:"How does climate change affect Liberian farmers?", a:"Rain becomes unreliable — it may start late or fall too heavily — so planting times fail, crops are lost and harvests are smaller."},
    {q:"Name one indoor job a person could do when heavy rain stops outdoor work.", a:"Tailoring, weaving, repairing tools, teaching, trading in a shop, or making soap."}
  ],
  sort:{ title:"Seasons and activities",
    groups:[
      {name:"Rainy season activities", items:["Planting rice","Repairing roofs","Indoor weaving"]},
      {name:"Dry season activities", items:["Harvesting","Road building","Making mud bricks","Long-distance travel"]},
      {name:"Indoor activities", items:["Office work","Tailoring","Indoor games"]},
      {name:"Outdoor activities", items:["Farming","Fishing","Mining"]}
    ]},
  mapwork:{ title:"The seasons and our work", caption:"Complete the chart showing how each season affects the work of the people.",
    items:[
      {p:"Rainy season (May–October)", f:"planting and weeding; travel is difficult and rivers flood"},
      {p:"Dry season (November–April)", f:"harvesting, building, road work and easy travel"},
      {p:"Harmattan", f:"dry dusty wind; more coughs and colds, and bush fires spread easily"},
      {p:"Heavy storm", f:"roofs blow off, canoes cannot go out, and markets close"},
      {p:"Drought", f:"crops wilt, wells dry up and food becomes expensive"}
    ]},
  casestudy:{ title:"Two seasons at Robertsport",
    text:"In Robertsport the fishermen go out early each morning in the dry season and return with plenty of fish. When the rains come in July, strong winds and high waves keep the canoes ashore for days. Then the men mend their nets under the shelter, and the women smoke and store fish to sell later. The town's income falls in the rains but rises again in December.",
    questions:[
      {q:"In which season do the fishermen catch most fish?", a:"The dry season."},
      {q:"What do the fishermen do when the sea is rough?", a:"They stay ashore and mend their nets under the shelter."},
      {q:"How do the women prepare for the lean season?", a:"They smoke and store fish so it can be sold later."}
    ]},
  project:{ title:"Weather diary",
    brief:"Keep a record of the weather for two weeks and link it to work.",
    steps:["Each day, record whether it was sunny, cloudy, rainy or stormy.","Note one activity people in your area did or could not do that day.","At the end, count the number of days of each weather type.","Draw a simple bar chart of your results.","Write two sentences on how the weather affected work that fortnight."],
    criteria:["Fourteen days recorded","An activity noted each day","Correct counting","A neat bar chart","Two sensible conclusions"]},
  activities:["Describe the effects of weather on daily life","Differentiate weather from macro-climate","Explain the effects of macro-climate on work","Associate activities with indoor or outdoor conditions","Keep a class weather chart"],
  materials:["Weather chart","Pictures of farming, fishing and mining","Rain gauge or bucket for measuring rainfall"],
  assessment:["Quizzes","Weather diary","Class work","Class participation","Test"]
},
{
  grade:3, period:"IV", sem:"Two", icon:"🍲",
  title:"Our Basic Needs",
  subtitle:"Food sources and categories, Western and traditional education, and cultural practices",
  outcomes:["Learners identify the different types of food and how they are obtained","Learners identify cultural practices that influence their behaviour"],
  objectives:["Identify the sources of food","Distinguish the different food types","State the importance of education as a means of personal and national development","Analyse the importance of traditional and Western educational institutions in Liberia","Identify different cultural practices that influence their behaviour"],
  note:"Food is grouped into <b>protein, carbohydrates, fats, vitamins, minerals and water</b>. In Liberia there is <b>Western education</b> in schools and <b>traditional education</b> in the <b>Poro</b> (for boys) and <b>Sande</b> (for girls) societies.",
  study:[
    /* ---- course text: Semester Two, Period IV (guide pp. 35-36) ---- */
    {k:"h3", t:"Sources of Food"},
    {k:"p", t:"Everything we eat comes from a source. The four sources studied are plants, animals, fish and others."},
    {k:"bul", items:["**Plants** – rice, cassava, cocoyam, yam, plantain, maize, millet, sorghum, groundnut, beans, pigeon pea, palm oil and coconut, sugarcane, and all the leafy vegetables (potato greens, cassava leaf, jute mallow, bitter leaf).","**Animals** – beef, goat, mutton, pork, bush meat, chicken and duck, milk and butter, eggs and honey.","**Fish and marine life** – fresh and smoked fish from the river, the lagoon and the Atlantic; crab, lobster, prawn, periwinkle and oyster.","**Others** – salt from the salt pan and the sea, water from the well and the pipe, flavouring (pepper, garlic, ginger, potash, maggi), mushrooms, snails and crickets gathered in the bush."]},
    {k:"rule"},
    {k:"h3", t:"Categories of Food"},
    {k:"p", t:"Foods are grouped according to the work they do in the body. A **balanced diet** contains food from all the groups in the right amount."},
    {k:"table", head:["Food category","What it does in the body","Liberian examples"], rows:[
      ["Carbohydrates (energy foods)","Give strength and warmth for work and play","Rice, cassava, yam, cocoyam, plantain, breadfruit, maize, sugarcane"],
      ["Proteins (body-building foods)","Build the growing body and repair it","Fish, meat, egg, beans, groundnut, milk, egusi and melon seed"],
      ["Fats and oils","Store energy, keep the body warm, carry vitamins","Palm oil, coconut, butter, peanut butter, fat of meat and fish"],
      ["Vitamins","Protect the body from disease, keep the eyes, skin and gums well","Orange, mango, banana, pawpaw, guava, red palm oil, green leafy vegetables, tomato, pepper"],
      ["Minerals","Build bone and teeth and make good blood","Milk and fish (calcium), meat and green leaf and snail (iron), iodised salt, banana (potassium)"],
      ["Water","Carries food and air in the blood, cools the body by sweat","Clean drinking water, soup, porridge, fruit and vegetable juice"]
    ]},
    {k:"p", t:"A meal that is only rice, or only bread with sugar, fills the stomach but does not build the body. Children who lack protein become thin and slow, and children who lack iron blood become pale and tired in class."},
    {k:"bul", items:["Eat from every group at every meal: rice or cassava + a soup with fish or meat + a vegetable + fruit.","Eat the local foods before buying tins and packets – they are cheaper and better.","Drink clean water, not only sweet drinks.","Eat at fixed times and do not skip breakfast."]},
    {k:"rule"},
    {k:"h3", t:"Education"},
    {k:"p", t:"**Education** is the training that develops the mind, the character and the hands of a person, and fits him to earn a living and to serve the community. Education begins at birth in the family and does not end when school ends."},
    {k:"p", t:"In Liberia there are two great systems of education, and every citizen is shaped by one or both: **Western education** in the schools, and **traditional education** in the societies of the people."},
    {k:"rule"},
    {k:"h3", t:"Western Education (Schools)"},
    {k:"bul", items:["**Where** – the public school, the mission and church school, the private academy, the high school, the teachers' college and the university.","**What is taught** – English, mathematics, science, social studies, religious and moral education, physical education, vocational and technical subjects, French and Arabic in some schools.","**How it works** – classes with a fixed number, a timetable, a syllabus set by the Ministry of Education, termly examinations, certificates, and promotion from grade to grade.","**Who teaches** – trained teachers, licensed by the government.","**Its fruit** – reading, writing, arithmetic, thinking, science, trades, professions, and the chance of employment."]},
    {k:"p", t:"Basic education is compulsory for the Liberian child, and the child who finishes junior and senior high school is fitted for the world of work and for further study."},
    {k:"rule"},
    {k:"h3", t:"Traditional Education (Poro Society and Sande Society)"},
    {k:"p", t:"Traditional education is the teaching of the customs, the skills, the laws and the morals of the people. Among many Liberian groups it is given in the **Poro** and **Sande** schools, which are the secret societies of the men and of the women."},
    {k:"table", head:["Poro Society","Sande Society"], rows:[
      ["The society of the men and boys","The society of the women and girls"],
      ["Boys are given the bush school for weeks or months","Girls are given the bush school for weeks or months"],
      ["Teaches courage, the laws and customs of the people, the secret language, the dance, hunting, farming, carving and the use of tools","Teaches womanly conduct, the care of a home and a child, cooking, farming, weaving, dancing, the songs, and the duties of a wife and mother"],
      ["Keeps the peace of the town: the Poro judges disputes and punishes wrongs","Blesses marriages and naming ceremonies; initiates girls into womanhood"],
      ["Its leaders are the Poro chiefs and elders, with their own insignia","Its leaders are the Sande chiefs (the 'Sande doctor' and the paramount Sande woman)"]
    ]},
    {k:"bul", items:["Both societies teach that a person must be honest, brave, industrious, respectful and useful to the community.","Both keep the masks, the songs, the dances and the secrets of the people, so the heritage of the tribe is not lost.","The secret teaching is never told out to the uninitiated; this is a rule of the society, and to obey it is part of the training.","Poro and Sande belong to the whole people and not to one family: they are the reason the community stays together."]},
    {k:"p", t:"**Similarities**: both give moral training, both teach the skills needed for life, both make the young person an adult member of the society. **Differences**: one trains the men and the other the women; the dances, the insignia and the lessons are different."},
    {k:"rule"},
    {k:"h3", t:"Cultural Practices that Influence Behaviour"},
    {k:"p", t:"A **cultural practice** is a custom of the people that shapes what they do and how they behave. Some practices are good and must be kept; some are harmful and must be given up."},
    {k:"table", head:["Good practices to keep","Harmful practices to change"], rows:[
      ["Respect for elders and greeting the community","Female genital cutting / scarification of girls"],
      ["Hard farm work, cooperation and the town clean-up","Early marriage of a girl who should be at school"],
      ["Sharing food, hospitality to strangers, care of orphans","Trial by ordeal, poison testing and accusation of witchcraft"],
      ["Dance, drumming, storytelling and the weaving of cloth","Beating or burning of persons accused of theft"],
      ["Naming ceremony, marriage rite and funeral rites that bind the family","Refusing a child medicine or schooling because of custom"]
    ]},
    {k:"p", t:"A custom is not good only because it is old. Where a practice harms the body, the mind or the rights of a person, the people are free to keep the good part and leave the harmful part."}
  ],
  focus:["Food sources: plants, animals, fish, others","Food categories: protein, carbohydrates, fats, vitamins, minerals, water","Education","Western education (schools)","Traditional education (Poro Society, Sande Society)","Cultural practices that influence behaviour"],
  terms:[
    {t:"protein", d:"food that builds the body, such as fish, meat and beans", x:"Fish is rich in protein."},
    {t:"carbohydrate", d:"food that gives energy, such as rice and cassava", x:"Rice is a carbohydrate."},
    {t:"fat", d:"food that stores energy and keeps the body warm, such as palm oil", x:"Palm oil provides fat."},
    {t:"vitamin", d:"a substance in food that protects the body from disease", x:"Oranges give vitamin C."},
    {t:"mineral", d:"a substance like iron or calcium needed in small amounts", x:"Milk contains the mineral calcium."},
    {t:"balanced diet", d:"a meal with all the food groups in the right amount", x:"A balanced diet keeps children healthy."},
    {t:"Western education", d:"formal learning in a school with classes and certificates", x:"Western education came with the settlers."},
    {t:"traditional education", d:"training in the customs and skills of the people, as in the Poro and Sande", x:"Traditional education teaches respect and craft."},
    {t:"Poro Society", d:"the traditional school for boys in many Liberian societies", x:"The Poro Society trains boys in custom."},
    {t:"Sande Society", d:"the traditional school for girls in many Liberian societies", x:"The Sande Society trains girls in custom."}
  ],
  facts:[
    {q:"Name the six food categories.", a:"Protein, carbohydrates, fats, vitamins, minerals and water."},
    {q:"Give one food rich in protein and one rich in carbohydrate.", a:"Protein: fish, meat, beans or eggs. Carbohydrate: rice, cassava, plantain or yam."},
    {q:"Name the two kinds of education in Liberia.", a:"Western (formal school) education and traditional education."},
    {q:"Name the traditional school for boys and the one for girls.", a:"The Poro Society for boys and the Sande Society for girls."},
    {q:"Give two things traditional education teaches.", a:"Any two: respect for elders, the customs and history of the people, farming, crafts, self-discipline and community duties."},
    {q:"Why is education important for national development?", a:"Educated citizens become teachers, nurses, engineers and leaders who build the country and improve its economy."}
  ],
  tf:[
    {s:"Rice is a carbohydrate food.", a:"true", why:"It gives the body energy."},
    {s:"Water is not part of a balanced diet.", a:"false", why:"Water is one of the essential food groups the body needs daily."},
    {s:"The Sande Society is the traditional school for girls.", a:"true", why:"It trains girls in the customs and skills of the society."},
    {s:"Only Western education is valuable in Liberia.", a:"false", why:"Both Western and traditional education teach useful knowledge and skills."},
    {s:"Fish is a good source of protein.", a:"true", why:"Protein foods build the body, and fish is rich in protein."},
    {s:"Culture has no effect on how children behave.", a:"false", why:"Cultural practices shape greetings, dress, respect for elders and many daily habits."}
  ],
  apply:[
    {q:"Plan a balanced meal from local Liberian foods and name the food group of each item.", a:"Rice (carbohydrate), fish (protein), palm oil (fat), potato greens (vitamins and minerals) and water — a complete balanced meal."},
    {q:"A child eats only rice every day. What problem may arise?", a:"He gets energy but lacks protein, vitamins and minerals, so he may become weak, thin and often sick."},
    {q:"Name one thing a child learns in traditional education that is not taught in school.", a:"The customs, songs, proverbs and rites of the ethnic group, and practical village skills passed down by elders."},
    {q:"Name one cultural practice that is good and one that can be harmful, giving a reason.", a:"Good: respecting and caring for elders, which keeps families strong. Harmful: keeping girls from school for early marriage, which denies their right to education."}
  ],
  sort:{ title:"Food groups and education",
    groups:[
      {name:"Protein", items:["Fish","Beans","Eggs","Goat meat"]},
      {name:"Carbohydrates", items:["Rice","Cassava","Plantain","Yam"]},
      {name:"Vitamins and minerals", items:["Orange","Potato greens","Pepper","Mango"]},
      {name:"Western education", items:["Classroom","Teacher","Certificate"]},
      {name:"Traditional education", items:["Poro Society","Sande Society","Village elders"]}
    ]},
  mapwork:{ title:"A balanced Liberian plate", caption:"Draw a plate and divide it to show a balanced Liberian meal. Label each part with its food group.",
    items:[
      {p:"Rice or fufu", f:"carbohydrate — gives energy for work and play"},
      {p:"Fish or beans", f:"protein — builds the body and repairs it"},
      {p:"Palm oil", f:"fat — stores energy and carries some vitamins"},
      {p:"Potato greens or cassava leaf", f:"vitamins and minerals — protect against disease"},
      {p:"Clean water", f:"needed for digestion and every process in the body"}
    ]},
  casestudy:{ title:"Two schools of Sekou",
    text:"Sekou attends the public school in Sanniquellie from Monday to Friday, where he learns reading, mathematics and science. During the long holiday his grandfather took him to the Poro bush, where the elders taught him the history of his people, how to build a trap, and how to behave before elders. Sekou says both schools have made him a better person.",
    questions:[
      {q:"Name the two kinds of education Sekou received.", a:"Western education at the public school and traditional education in the Poro."},
      {q:"Name one thing he learned in each.", a:"At school: reading, mathematics or science. In the Poro: the history of his people, trap building, or how to behave before elders."},
      {q:"What does Sekou say about the two schools?", a:"That both have made him a better person."}
    ]},
  project:{ title:"Food from my community",
    brief:"Investigate the foods grown and eaten in your community.",
    steps:["List ten foods commonly eaten in your community.","Beside each, write where it comes from — plant, animal or water.","Write which food group each belongs to.","Ask an elder about one food eaten long ago that is rare today.","Present your table and say which foods make a balanced meal."],
    criteria:["Ten foods listed","Correct source for each","Correct food group","One food from the past recorded","A balanced meal identified"]},
  activities:["Identify the sources of food","Distinguish the different food types","Discuss the importance of education for personal and national development","Analyse traditional and Western educational institutions","Identify cultural practices that influence behaviour"],
  materials:["Pictures or samples of local foods","Food group chart","Pictures of school and traditional society activities"],
  assessment:["Quizzes","Class work","Food chart","Class participation","Test"]
},
{
  grade:3, period:"V", sem:"Two", icon:"🩺",
  title:"Health and Safety",
  subtitle:"Caring for the body, physical exercise and communicable diseases",
  outcomes:["Learners develop knowledge of good health habits"],
  objectives:["Explain ways of taking care of his or her body","Demonstrate that physical exercise is good for the body","Demonstrate ways that children play when they are happy","Identify some common communicable diseases","Explain the prevention and cure of some communicable diseases"],
  note:"A <b>communicable disease</b> is one that spreads from person to person, such as cough, tuberculosis, chicken pox and measles. Prevention includes <b>isolating</b> a sick person, covering the mouth when coughing, washing hands, and <b>seeking medical attention</b> early.",
  study:[
    /* ---- course text: Semester Two, Period V (guide pp. 37-38) ---- */
    {k:"h3", t:"The Senses and Their Parts"},
    {k:"p", t:"The head carries the parts by which we know the world: the **eyes** for seeing, the **ears** for hearing and balance, the **nose** for smelling and for warming the air we breathe, and the **teeth and tongue** for chewing and tasting. To keep them well is to keep the body's windows clean."},
    {k:"table", head:["Body part","Its work","How to care for it"], rows:[
      ["Eye","Enables us to see – to read, to find our way, to know faces","Wash with clean water; do not rub with dirty hands; read in good light; do not look at the sun or at welding; wear a hat in the harmattan; see the health worker at once for a sore, a white film (trachoma/cataract) or a wound"],
      ["Ear","Hearing and keeping the body balanced","Keep the ear dry and clean; do not push a stick, match or sharp probe into it; treat an ear running with water at once; keep down loud noise and do not put the phone volume high; dry the ear after bathing"],
      ["Nose","Smelling, warming, and filtering the air we breathe","Do not pick the nose; blow one nostril at a time; wash with clean water; for a nose bleed sit up, lean forward and pinch the soft part for ten minutes; do not put snuff, powder or dirt in it; keep the room free of smoke"],
      ["Teeth and mouth","Cutting, tearing and grinding food; helping clear speech","Brush morning and night and after food with a brush and clean water (and paste); do not chew hard things or open bottles with the teeth; cut down sweet drinks and sweets; see the dentist or clinic for a hole, a swelling or bleeding gums; wash the tongue"]
    ]},
    {k:"p", t:"A symptom is a sign that shows that a person is ill – pain, fever, swelling, discharge, sores, or loss of sight, hearing or taste. When a symptom does not pass in a day or two, go to the clinic."},
    {k:"rule"},
    {k:"h3", t:"Care of the Whole Body"},
    {k:"bul", items:["**Hygiene** – bathe daily with soap; wash the private parts; wash hands with soap before eating and after the toilet; keep nails short and hair clean.","**Clothing** – wear clean, dry clothing; change the shirt and the under-clothes daily; dry the uniform in the sun.","**Food and water** – eat a balanced diet; drink only covered, safe water; wash fruit and vegetable.","**Rest** – sleep about eight to ten hours; the body grows and repairs itself during sleep.","**Exercise** – move the body every day; play, walk, run, jump and work.","**Skin and hair** – treat ringworm, scabies and itching early; do not share a comb, a towel or a razor.","**Bodily secretions** – use a handkerchief and burn or wash it; dispose of menstrual blood with a clean pad or cloth, and wash the cloth well in the sun."]},
    {k:"p", t:"A clean body is also a defence: germs enter through dirty hands, an unwashed cut, a dirty cup, and the nose and mouth."},
    {k:"rule"},
    {k:"h3", t:"Physical Education and Sports"},
    {k:"p", t:"**Physical exercise** is movement of the body that keeps it strong and healthy. Physical education is the school subject that trains the body with games, drills and dance."},
    {k:"bul", items:["Strengthens the heart, the lungs, the muscles and the bones; keeps the weight right.","Makes the blood carry food and air well, and helps the digestion.","Drives away laziness, sleepiness and worry; a body that has worked sleeps well.","Teaches teamwork, discipline, obedience to rules, courage, and how to lose well.","Gives skill to the muscles used for farming, carrying and working.","Builds friends and school pride; opens the way to competitions and to representing the county or the nation."]},
    {k:"p", t:"**Sports played in Liberia**: football, athletics (running, jumping, throwing), basketball, volleyball, handball, table tennis, badminton, boxing, swimming, netball for girls, tug-of-war and the traditional games – wrestling, foot-race, sack race, skipping, and the relay."},
    {k:"bul", items:["Warm up before and cool down after; do not play on a full stomach.","Drink clean water often; play in the shade or in the evening in great heat.","Wear shoes or play on soft ground; do not play near the road, the gutter or the refuse tip.","Stop and tell a teacher when there is pain, giddiness or breathlessness.","Do not use drug, alcohol or a 'strengthening medicine' to play – it destroys the body it was meant to help."]},
    {k:"rule"},
    {k:"h3", t:"Communicable Diseases"},
    {k:"p", t:"A **communicable disease** is a sickness that spreads from one person to another, by germs. Germs spread by the nose and mouth (sneezing, coughing, talking), by dirty hands, by food and water, by the blood, by the skin, and by insects such as the mosquito and the fly."},
    {k:"table", head:["Disease","Signs and symptoms","How it spreads"], rows:[
      ["Common cough and cold","Running or blocked nose, sore throat, mild fever, tiredness","Droplets from the nose and mouth of the sick person; hands and cups"],
      ["Tuberculosis (TB)","Cough of more than two weeks, chest pain, night sweat, weight loss, sometimes blood in the spit","Airborne germs from a person with TB in the chest"],
      ["Chicken pox","Itchy rash with small blisters over the body, fever, feeling weak","Touching the fluid of the sores, and the air from a cough"],
      ["Measles","High fever, cough, running eyes and nose, then a red rash from the face down; small white spots in the mouth","Droplets in the air when the sick person coughs or sneezes"],
      ["Also watch for: cholera and diarrhoea, malaria, and typhoid","Watery stool, fever, vomiting, weakness","Dirty water and food, flies, mosquito bites"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Prevention and Cure"},
    {k:"p", t:"**Prevention** means stopping a disease before it happens, and it is always cheaper than a cure."},
    {k:"num", items:["**Vaccination** – take children for all the routine immunisations (BCG for TB, measles, polio, DPT, yellow fever); a vaccinated child is protected.","**Isolation** – keep a sick person apart from the healthy: separate cup, plate, towel and bed; do not let a child with chicken pox or measles attend school or the market.","**Hygiene** – cover the nose and mouth when coughing or sneezing; wash hands with soap; spit into a covered pit or paper, never on the floor; keep the room open to light and air.","**Clean food and water** – boil or treat drinking water; cover the food; wash vegetable and fruit; protect food from flies.","**Clean environment** – clear the bush, drain stagnant water, use a latrine, dispose of refuse.","**Kill the carriers** – sleep under a mosquito net; spray; keep the compound free of standing water.","**Seek medical attention early** – go to the clinic or health post at the first sign; complete the whole course of any medicine given; do not share medicine or buy it from a street seller."]},
    {k:"p", t:"**Care of the sick person at home**: rest, light food, plenty of clean water, medicine given on time, a clean bed, fresh air, and kindness – never shame. A TB patient must finish the long course of drugs, or the disease returns and becomes harder to cure."},
    {k:"p", t:"Go at once to the health facility if there is: blood in the spit or the stool, a stiff neck or convulsion, breathing with difficulty, a fever that will not fall, a child who cannot drink, or a rash with high fever."}
  ],
  focus:["Body parts: nose, ears, eyes, teeth","Physical education and sports","Communicable diseases: cough, tuberculosis, chicken pox, measles","Prevention and cure: isolation of sick persons, seeking medical attention"],
  terms:[
    {t:"communicable disease", d:"a sickness that spreads from one person to another", x:"Measles is a communicable disease."},
    {t:"prevention", d:"stopping a disease before it happens", x:"Prevention is cheaper than cure."},
    {t:"isolation", d:"keeping a sick person apart so others are not infected", x:"Isolation stops the disease spreading."},
    {t:"tuberculosis", d:"a serious disease of the lungs spread by coughing", x:"Tuberculosis must be treated at the clinic."},
    {t:"measles", d:"a disease with fever and a rash, common in children", x:"Vaccination prevents measles."},
    {t:"vaccination", d:"a medicine given to protect a person from a disease", x:"Every child should get a vaccination."},
    {t:"hygiene", d:"keeping the body and surroundings clean", x:"Good hygiene prevents many diseases."},
    {t:"physical exercise", d:"movement of the body that keeps it strong and healthy", x:"Physical exercise makes the heart strong."},
    {t:"clinic", d:"a place where sick people receive treatment", x:"Take the child to the clinic at once."},
    {t:"symptom", d:"a sign that shows a person is sick", x:"Fever is a symptom of malaria."}
  ],
  facts:[
    {q:"Name three ways of taking care of your body.", a:"Bathe daily with soap, brush the teeth, cut the nails, wash hands, wear clean clothes, eat balanced meals and sleep enough."},
    {q:"Name two communicable diseases.", a:"Any two: cough or common cold, tuberculosis, chicken pox, measles, cholera, COVID-19."},
    {q:"Give two benefits of physical exercise.", a:"It makes the body strong and the heart healthy, helps you sleep well, keeps the right weight and lifts the spirits."},
    {q:"How does tuberculosis spread?", a:"Through the air when an infected person coughs or sneezes near others."},
    {q:"State two ways to prevent the spread of a communicable disease.", a:"Cover the mouth when coughing, wash hands with soap, isolate the sick person and seek medical treatment early."},
    {q:"What should be done for a child with measles?", a:"Keep the child apart from other children, take him or her to the clinic, and give plenty of fluids and rest."}
  ],
  tf:[
    {s:"Measles can spread from one child to another.", a:"true", why:"It is a communicable disease passed through the air."},
    {s:"Physical exercise is bad for children.", a:"false", why:"Exercise makes the body strong and healthy."},
    {s:"Covering the mouth when coughing helps stop disease.", a:"true", why:"It stops germs from spreading through the air."},
    {s:"A sick child with chicken pox should sit with other children.", a:"false", why:"The child should be isolated so the disease does not spread."},
    {s:"Vaccination protects children from some diseases.", a:"true", why:"It teaches the body to fight the disease before it comes."},
    {s:"Brushing teeth is part of caring for the body.", a:"true", why:"It prevents tooth decay and gum disease."}
  ],
  apply:[
    {q:"Your friend keeps coughing without covering his mouth. What will you tell him?", a:"That germs spread through the air and can make the whole class sick; he should cover his mouth with his elbow or a cloth and see the nurse."},
    {q:"Why should a child with an infectious disease stay home from school?", a:"To avoid passing the disease to other pupils, and so the child can rest and be treated."},
    {q:"Design a simple daily routine that keeps a pupil healthy.", a:"Wake early, bathe with soap and brush teeth, eat a balanced breakfast, walk or play at break, wash hands before meals, do homework, bathe again and sleep at least eight hours."},
    {q:"Name one game children play in Liberia and say how it keeps them fit.", a:"Kickball or football — running keeps the heart and legs strong and builds teamwork."}
  ],
  sort:{ title:"Health habits and diseases",
    groups:[
      {name:"Good health habits", items:["Bathing daily","Brushing teeth","Washing hands","Playing sports"]},
      {name:"Communicable diseases", items:["Measles","Tuberculosis","Chicken pox","Cough"]},
      {name:"Prevention methods", items:["Isolation of the sick","Vaccination","Covering the mouth","Seeking medical attention"]}
    ]},
  mapwork:{ title:"Caring for the parts of the body", caption:"Complete the chart showing how each part of the body should be cared for.",
    items:[
      {p:"Eyes", f:"keep clean, read in good light, and never rub with dirty hands"},
      {p:"Ears", f:"clean the outside only; never push sticks inside"},
      {p:"Nose", f:"blow gently into a cloth and keep clean"},
      {p:"Teeth", f:"brush twice a day and avoid too much sugar"},
      {p:"Skin", f:"bathe daily with soap and keep clothes clean"},
      {p:"Hands", f:"wash with soap before eating and after the toilet"}
    ]},
  casestudy:{ title:"The cough in Grade Three",
    text:"Three pupils in Grade Three began to cough badly. The teacher noticed that they coughed openly in class. She sent them to the school nurse, who examined them and sent one home to the clinic. The teacher then taught the whole class to cough into their elbow and to wash hands. In two weeks the coughing had stopped and no other pupil was infected.",
    questions:[
      {q:"How was the cough spreading in the class?", a:"The pupils were coughing openly, so germs passed through the air."},
      {q:"What two actions did the teacher take?", a:"She sent the sick pupils to the nurse, and taught the class to cough into the elbow and wash hands."},
      {q:"What was the result?", a:"The coughing stopped and no other pupil was infected."}
    ]},
  project:{ title:"Health campaign",
    brief:"Run a health campaign in your school.",
    steps:["Choose one health topic: hand washing, coughing safely, or clean water.","Make a poster with pictures and three short rules.","Prepare a two-minute talk for another class.","Deliver the talk and display the poster.","Ask the class one week later whether their habits changed."],
    criteria:["A clear topic","A bright, correct poster","Three simple rules","A confident talk","Follow-up carried out"]},
  activities:["Explain ways of taking care of the body","Demonstrate physical exercises","Demonstrate games children play","Identify common communicable diseases","Explain prevention and cure of communicable diseases"],
  materials:["Charts of body parts","Soap, water and towel","Posters on disease prevention","Sports equipment"],
  assessment:["Quizzes","Practical demonstration","Health campaign poster","Class participation","Test"]
},
{
  grade:3, period:"VI", sem:"Two", icon:"🚑",
  title:"Community Services",
  subtitle:"Types of community services, psycho-social support and safety rules",
  outcomes:["Learners make use of services provided in their community","Learners make use of the different sources of psycho-social support","Learners guide their activities by rules"],
  objectives:["List some community services","Describe communication and transportation as community services","State the advantages and disadvantages of traditional and modern types of community services","Recognise the importance of psycho-social support as a form of community service","Observe safety rules at home, school and in the community"],
  note:"A <b>community service</b> is something provided for the good of everyone — a school, clinic, road, water pump or police post. <b>Psycho-social support</b> means the help given to a person's mind and feelings, from family, friends, community and counsellors.",
  study:[
    /* ---- course text: Semester Two, Period VI (guide pp. 39-40) ---- */
    {k:"h3", t:"What is a Community Service?"},
    {k:"p", t:"A **community service** is something provided for the good of all the people of an area – not for the profit of one family. The **welfare** of a place means the health, happiness and safety of its people, and services are what raise the welfare."},
    {k:"p", t:"Services are provided by the government (through the ministry, the county and the city corporation), by missions and churches, by the community itself through the town development association, and by volunteers who work without pay."},
    {k:"rule"},
    {k:"h3", t:"Types of Community Services"},
    {k:"bul", items:["**Education** – nursery, primary and secondary schools, literacy and adult classes, the library.","**Healthcare** – hospital, clinic, health post, pharmacy, immunisation day, the midwife, the community health worker, the ambulance.","**Water and sanitation** – the borehole, the standpipe, the hand pump, the protected spring, latrines, drains and refuse pits.","**Communication** – the post office, the telephone and mobile network, radio stations, the town loudspeaker, the notice board.","**Transportation** – roads, footpaths, bridges, the ferry, the boat landing, the bus and taxi stand, the airstrip.","**Security and justice** – the police post, the court, the town chief's palava hut, the fire volunteers.","**Economic services** – the market stalls and sheds, the abattoir, the agricultural extension agent, the coop, the bank and the mobile-money agent.","**Social and psycho-social services** – the counsellor, the women's and children's desk, care for orphans, the disabled and the old, the youth club and the sports field."]},
    {k:"p", t:"A **utility** is a basic public service such as water, electricity or telephone; when the utility fails, the whole town feels it."},
    {k:"rule"},
    {k:"h3", t:"Advantages and Disadvantages of Community Services"},
    {k:"table", head:["Service","Advantages","Disadvantages when absent or poor"], rows:[
      ["Healthcare","Sickness is cured, mothers and babies live, epidemic is stopped","People die of curable illness; the strong become weak; fear of infection"],
      ["Education","Reading, counting and skills open work and good judgement","Illiteracy, easy cheating, unemployment, early marriage"],
      ["Water","Clean water ends water-borne disease and saves the hours of fetching","Sickness, long walks for water, children kept from school"],
      ["Transportation","Produce reaches market, price falls, the sick reach the hospital","Food rots, isolation, high price, no emergency help"],
      ["Communication","News, orders, warning and instruction move quickly","Rumour fills the gap; help cannot be called"],
      ["Security and justice","Life and property are safe, disputes are settled peacefully","Thieving, revenge killings, the strong eating the weak"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Transportation as a Community Service"},
    {k:"p", t:"Transportation is the moving of people and goods from place to place. It is divided in three ways, and each community needs all three."},
    {k:"bul", items:["**Land** – road: on foot, wheelbarrow, bicycle, motorbike, taxi, bus, minibus, lorry, tractor; rail: the old mining lines of Bong and Nimba.","**Sea / water** – canoe, plank boat, dingy with engine, ferry, and the ocean-going ship at the Freeport of Monrovia and at Buchanan and Harper.","**Air** – aeroplane, small bush plane and helicopter; Roberts International Airport (RIA) and the county airstrips."]},
    {k:"table", head:["Traditional transport","Modern transport"], rows:[
      ["On foot with a basket or a load on the head","Bicycle, motorbike and 'speedy' minibus"],
      ["Dug-out canoe paddled with a wooden paddle","Engine boat and ferry"],
      ["Hammock carried on two poles; raft of logs","Ambulance vehicle and air ambulance"],
      ["Donkey, horse and ox cart; carrying by porter","Lorry, tanker and tractor trailer"],
      ["Canoe along the coast by paddles and sail","Ship and cargo vessel; aircraft"]
    ]},
    {k:"p", t:"**Advantages of modern transport**: fast, carries great loads, opens distant markets, brings medicine and mail. **Disadvantages**: costly to buy and to fuel, needs good roads and trained drivers, breaks down, and the smoke pollutes the air. Traditional means are cheap, strong and simple, but slow, tiring and limited."},
    {k:"rule"},
    {k:"h3", t:"Communication as a Community Service"},
    {k:"bul", items:["**Traditional communication** – the town crier with his bell, the talking drum, the horn, the bell, fire and smoke, songs and praise names, the griot who carries the history, knotted string and carved tokens, and messages sent by a trusted messenger.","**Modern communication** – the mobile phone and SMS, radio, television, the loudspeaker, letters and parcels by post, telephone and exchange, the internet, e-mail and social media, newspapers and handbills."]},
    {k:"p", t:"Traditional communication reaches people who have no money or electricity, and it carries the feeling of the community; modern communication is quick, reaches far, and lets a message be written down and kept. Both are still used in Liberian towns."},
    {k:"rule"},
    {k:"h3", t:"Psycho-Social Support"},
    {k:"p", t:"**Psycho-social support** is help given to a person's mind and feelings – the hurt, fear, grief and worry that follow trouble, as well as the wound of the body. It is a service as real as medicine."},
    {k:"table", head:["Type of support","Who gives it","What it looks like"], rows:[
      ["Family support","Father, mother, auntie, uncle, grandparent, elder brother or sister","A child is kept at home and fed; someone listens at night; the child is praised, prayed for, kept busy and not shamed"],
      ["Community support","Town chief and elders, women's and youth groups, church and mosque, the teacher, the nurse, the counsellor, the volunteer","Listening and counselling; visiting the sick and the bereaved; the play group for children; support for the disabled and the old; the peer group and the club; reuniting a lost child with family"],
      ["Specialist help","Counsellor, social worker, child-protection officer, nurse, pastor or imam with training","Talk therapy, trauma care, referral to hospital, protection and placement, mediation of a family quarrel"]
    ]},
    {k:"bul", items:["Signs that a person needs psycho-social support: crying without reason, withdrawal and silence, anger and fighting, fear of being alone, wetting the bed, nightmares, not eating, poor school work, saying that life has no meaning.","Never mock or blame a person in distress; listen, stay with them, and tell a trusted adult, a counsellor or a health worker.","**Confidentiality** – what a person tells in a time of trouble is not to be repeated as a joke; only a grown person who can help should be told."]},
    {k:"rule"},
    {k:"h3", t:"Safety Rules and Emergency Response"},
    {k:"p", t:"A **safety rule** is an instruction that protects people from harm. An **emergency** is a sudden dangerous situation needing quick action – fire, a road accident, a drowning, a snake bite, a collapsed house, a flood, or a person bleeding."},
    {k:"num", items:["Prevent: keep to the safety rules, clear the gutter, store paraffin away from heat, do not overload a socket.","Warn: shout for help, and send somebody for the chief, the nurse, the police or the fire volunteers.","Protect: move people away from the danger – but never into it yourself.","Act: put the injured person in the recovery position, press a clean cloth on a bleed, cool a burn with clean water, keep the bitten limb still and low.","Carry: take the sick or injured person to the clinic or hospital; do not give untested medicine.","Report: tell the family, the school office and the local authority; write down what happened."]},
    {k:"p", t:"Community service is everybody's work: the family pays its taxes and does its part, and the pupils keep the school, the market and the street clean and report what is broken."}
  ],
  focus:["Community services and their types","Communication, transportation, healthcare and psycho-social services","Transportation: land, sea, air; traditional and modern","Communication: traditional and modern","Types of support: family and community"],
  terms:[
    {t:"community service", d:"something provided for the good of all the people of an area", x:"The water pump is a community service."},
    {t:"psycho-social support", d:"help given to a person's mind and feelings", x:"Psycho-social support helps after a loss."},
    {t:"counsellor", d:"a trained person who listens and gives advice", x:"The counsellor helped the grieving family."},
    {t:"advantage", d:"a good point about something", x:"An advantage of the radio is its wide reach."},
    {t:"disadvantage", d:"a bad point about something", x:"A disadvantage of the drum is its short range."},
    {t:"volunteer", d:"someone who works for the community without pay", x:"Volunteers cleaned the health post."},
    {t:"safety rule", d:"an instruction that protects people from harm", x:"Wearing a helmet is a safety rule."},
    {t:"welfare", d:"the health, happiness and wellbeing of people", x:"The chief cares about the welfare of the town."},
    {t:"utility", d:"a basic public service such as water or electricity", x:"Electricity is a utility."},
    {t:"emergency", d:"a sudden dangerous situation needing quick action", x:"Call for help in an emergency."}
  ],
  facts:[
    {q:"Name four community services.", a:"Any four: education, healthcare, water supply, transportation, communication, security, waste collection, psycho-social support."},
    {q:"What is psycho-social support?", a:"Help given to a person's mind and feelings by family, friends, community members or a counsellor."},
    {q:"Give one advantage of modern transportation over traditional.", a:"It is much faster and can carry heavier loads over longer distances."},
    {q:"Give one disadvantage of modern transportation.", a:"It costs more, needs fuel and repairs, and causes air pollution and accidents."},
    {q:"Name two safety rules for the road.", a:"Cross at the crosswalk after looking both ways; walk facing traffic; wear a helmet on a motorbike."},
    {q:"Who can give psycho-social support to a child who has lost a parent?", a:"Family members, teachers, religious leaders, community elders, friends and trained counsellors."}
  ],
  tf:[
    {s:"A clinic is a community service.", a:"true", why:"It serves the health needs of the whole community."},
    {s:"Psycho-social support only means giving money.", a:"false", why:"It means supporting a person's mind and feelings by listening, comforting and advising."},
    {s:"Traditional transport such as a canoe still has advantages.", a:"true", why:"It is cheap and can reach places where vehicles cannot go."},
    {s:"Safety rules are only for adults.", a:"false", why:"Children must also follow safety rules to stay from harm."},
    {s:"A community can help maintain its own services.", a:"true", why:"People can clean, repair and contribute money or labour."},
    {s:"Communication is not a community service.", a:"false", why:"Radio, phone networks and post offices serve the whole community."}
  ],
  apply:[
    {q:"The water pump in your community is broken. What can the community do?", a:"Call a meeting, contribute money and labour, ask the local government or an NGO for parts, and appoint someone to maintain it afterwards."},
    {q:"A classmate's mother has died. Suggest two ways the class can give psycho-social support.", a:"Visit and sit with him, listen without judging, include him in play so he is not lonely, and ask the teacher or a counsellor to talk with him."},
    {q:"Compare travelling by canoe and by motor boat on a Liberian river.", a:"The canoe is cheap, quiet and needs no fuel, but it is slow and carries little; the motor boat is fast and carries more, but costs money for fuel and repairs."},
    {q:"Write three safety rules for pupils walking home from school.", a:"Walk on the side facing traffic; cross only at the crosswalk after looking both ways; walk in a group and never accept a lift from a stranger."}
  ],
  sort:{ title:"Services and support",
    groups:[
      {name:"Community services", items:["School","Clinic","Water pump","Police post"]},
      {name:"Traditional transport", items:["Canoe","Hammock","Raft","Walking"]},
      {name:"Modern transport", items:["Bus","Motorbike","Aeroplane","Ship"]},
      {name:"Sources of psycho-social support", items:["Family","Friends","Teacher","Counsellor"]}
    ]},
  mapwork:{ title:"Services in my community", caption:"Locate the community services near you and state one advantage and one problem of each.",
    items:[
      {p:"School", f:"provides education; may be overcrowded or lack books"},
      {p:"Clinic", f:"treats the sick; may lack medicine or staff"},
      {p:"Road", f:"links the community to markets; may become muddy in the rains"},
      {p:"Water pump", f:"gives clean water; may break down and need repair"},
      {p:"Police post", f:"provides security; may be far from some parts of the community"}
    ]},
  casestudy:{ title:"The community health post at Zorzor",
    text:"The people of a town near Zorzor had no health post. Mothers walked six miles to the clinic. The women's group raised money, the men made mud bricks, and a charity gave zinc for the roof. A trained health worker now comes twice a week. The town committee cleans the building and keeps a register. Since it opened, more children have been vaccinated and fewer mothers travel far.",
    questions:[
      {q:"What problem did the town face?", a:"They had no health post, and mothers had to walk six miles to the clinic."},
      {q:"How did the community contribute?", a:"The women raised money, the men made mud bricks, and the committee cleans and keeps records."},
      {q:"Name one result of the new health post.", a:"More children are vaccinated and fewer mothers must travel far."}
    ]},
  project:{ title:"Service audit",
    brief:"Audit one community service and suggest an improvement.",
    steps:["Choose one service: school, clinic, water, road or security.","Find out who provides it and who maintains it.","List two things it does well.","List two problems it faces.","Suggest one realistic improvement and present your report."],
    criteria:["Service clearly described","Provider identified","Two strengths listed","Two problems listed","A realistic improvement suggested"]},
  activities:["List some community services","Describe communication and transportation as community services","State advantages and disadvantages of traditional and modern services","Discuss psycho-social support","Observe and list safety rules at home, school and community"],
  materials:["Pictures of community services","Chart of traditional and modern transport","Poster on safety rules"],
  assessment:["Quizzes","Class work","Service audit report","Class participation","Test"]
},

/* ================= GRADE 4 ================= */
{
  grade:4, period:"I", sem:"One", icon:"🧭",
  title:"Location and Features of Liberia",
  subtitle:"Locating Liberia on the world map, mountains, rivers, lakes, capes and islands",
  outcomes:["Learners use the world map and the map of Africa to locate Liberia and its physical features"],
  objectives:["Locate Liberia on both the world map and the map of Africa","Locate the major mountains of Liberia","Name the major rivers and lakes of Liberia","List other physical features such as capes and islands"],
  note:"Liberia lies in <b>West Africa</b> on the Atlantic coast. Boundaries: <b>North – Guinea</b>, <b>South – Atlantic Ocean</b>, <b>West – Sierra Leone</b>, <b>East – Ivory Coast</b>. Its highest mountains are <b>Mt. Nimba, Gedeh, Wologisi, Bong Range and Putu</b>.",
  study:[
    /* ---- course text: Semester One, Period I (guide pp. 41-42) ---- */
    {k:"h3", t:"Location of Liberia"},
    {k:"p", t:"Liberia lies in **West Africa**, on the west coast of the continent, facing the **Atlantic Ocean**; it is a few degrees north of the equator (about 4° to 9° N latitude and 7° to 12° W longitude). The **equator**, the **Greenwich (prime) meridian**, **latitude** and **longitude** are the lines used on the map to fix its place."},
    {k:"p", t:"By this position Liberia has a hot, wet tropical climate, a long coastline, and a short distance by sea to Europe and to the Americas."},
    {k:"rule"},
    {k:"h3", t:"Boundaries of Liberia"},
    {k:"bul", items:["**North** – the Republic of **Guinea**.","**South** – the **Atlantic Ocean**, with a long, low, lagoon-backed coast.","**West** – the Republic of **Sierra Leone**; the **Mano River** is the boundary for much of its length.","**East** – the Republic of **Côte d'Ivoire (Ivory Coast)**; the **Cavalla (Cestos-Mbao)** line runs with it."]},
    {k:"p", t:"A **boundary** is the line that separates one country from another; boundaries of Liberia follow rivers, mountain crests and straight treaty lines, and are marked on the ground by boundary pillars."},
    {k:"p", t:"Liberia's total area is about **111,369 square kilometres**. The **coastline** is the line where the land meets the sea."},
    {k:"rule"},
    {k:"h3", t:"Mountains of Liberia"},
    {k:"p", t:"The **relief** of Liberia rises in steps from the sea: the mangrove and sand plain of the coast, the rolling bush country, the plateau, and at last the mountain ranges along the Guinea and Côte d'Ivoire borders."},
    {k:"table", head:["Mountain or range","Where it is","Why it matters"], rows:[
      ["Mount Wuteveh (Woléwari)","Bong / Gbarpolu, near the Guinea border","Usually named as the highest land entirely in Liberia; cool, wet and crowned with cloud forest"],
      ["The Bong range (Bong Mountain)","Bong County","Rises above Gbarnga; gives rise to streams; forest reserve"],
      ["Mount Nimba","North-east Nimba County, on the Guinea border","A great isolated massif of bare rock; rare animals and plants; a mining area (iron ore)"],
      ["Mount Gedeh and the Wologisi range","Grand Gedeh and River Gee, on the Côte d'Ivoire border","Dense forest, high rainfall, and the source of many streams"],
      ["The Putu range (Mount Putu)","River Gee / Maryland, on the Côte d'Ivoire border","Covered with ever-green forest; iron ore; home of rare species"]
    ]},
    {k:"p", t:"The mountains catch the moist sea wind, so the rain falls first on them; that is why the highest land is the wettest and the most thickly forested."},
    {k:"rule"},
    {k:"h3", t:"Rivers of Liberia"},
    {k:"p", t:"The rivers of Liberia rise in the mountains and the forest plateau and flow in general south-west to the Atlantic. Because the land falls quickly, the rivers have **rapids and falls** and cannot be sailed far from the mouth."},
    {k:"bul", items:["**St. Paul River** – rises in the hills of Bong and Margibi, falls at **DuBridge** (the Mount Coffee power site), and enters the sea at Mesurado; it supplies water to Monrovia.","**St. John River** – south of Montserrado; it drains the low land of the capital and of the Freeport.","**Cestos River** – between Sinoe and Rivercess; a long river that can be paddled some distance from its mouth at Cestos City.","**Mano River** – forms the boundary with Sierra Leone in the north-west.","**Lofa River** – drains Lofa and part of Gbarpolu.","**Sinoe (Sarh) River** – in Sinoe County; the harbour of Greenville.","**Cavalla (Cestos) River** – the boundary with Côte d'Ivoire in Maryland / River Gee.","**Farmington River** – drains Bomi and Grand Cape Mount into the sea at Duckrun and Tubmanburg.","A **tributary** is a small river that flows into a bigger one; the great rivers of Liberia have many tributaries from the hills."]},
    {k:"p", t:"Uses of the rivers: water for drinking and for the rice mill, fish and periwinkle, sand and stone for building, transport by canoe and launch, and the falling water that turns the turbine at Mount Coffee."},
    {k:"rule"},
    {k:"h3", t:"Lakes, Lagoons, Capes, Peninsulas and Islands"},
    {k:"bul", items:["**Lakes and lagoons** – **Lake Piso** in Grand Cape Mount, near Robertsport, is the best known lake in Liberia; behind the beach coast run long lagoons and marsh, and the St. John basin is a great marsh.","**Capes** – land that juts out into the sea: **Cape Mount** in Grand Cape Mount, **Cape Mesurado** at Monrovia, **Cape St. Paul** south of the capital, and **Cape Palmas** in Maryland, the south-east point of Liberia.","**Peninsula** – land almost surrounded by water but joined to the mainland: **Bushrod Island** in the Mesurado, joined to Monrovia by a causeway, is a peninsula in this sense.","**Islands** – land completely surrounded by water: the small islands in the St. Paul and in the coastal lagoons, and **Gbin Hill** rising out of the Lake Piso shore.","**Waterfalls and rapids** – the falls of the St. Paul at DuBridge and the rapids that stop boats above the mouth of nearly every river: the land falls quickly to the sea."]},
    {k:"p", t:"Why these features matter: the capes are where the ports and the lighthouses were built; the lagoons are the fishing grounds and the salt pans; the islands and peninsulas are easy to defend and rich in palm and coconut; the falls stop navigation but give the power of electricity."},
    {k:"rule"},
    {k:"h3", t:"Reading the Map of Liberia"},
    {k:"num", items:["Find the title and the legend (key) and read what each sign means.","Locate the country by its latitude and longitude and by its neighbours.","Mark the coast, then the mouths of the great rivers, and trace each river to its rise.","Mark the mountains – the land generally rises to the north and east.","Add the counties, the capitals and Monrovia.","Draw your own sketch map of Liberia with the five features named above."]}
  ],
  focus:["Location of Liberia, West Africa","Boundaries of Liberia","Liberia's highest mountains: Mt. Nimba, Gedeh, Wologisi, Bong Range, Putu","Liberia's largest rivers: St. John, St. Paul, Cestos, Mano, Lofa, Sinoe, Cavalla","Other features: lakes, capes and islands"],
  terms:[
    {t:"continent", d:"one of the seven great land masses of the earth", x:"Africa is a continent."},
    {t:"boundary", d:"the line separating one country from another", x:"The Mano River forms part of our boundary."},
    {t:"cape", d:"a piece of land that juts out into the sea", x:"Cape Mount is a well-known cape."},
    {t:"island", d:"land completely surrounded by water", x:"Providence Island lies in the Mesurado River."},
    {t:"peninsula", d:"land almost surrounded by water but joined to the mainland", x:"The Monrovia peninsula stretches into the sea."},
    {t:"tributary", d:"a small river that flows into a bigger one", x:"Many tributaries feed the St. Paul River."},
    {t:"latitude", d:"distance north or south of the equator", x:"Liberia lies just north of the equator in latitude."},
    {t:"longitude", d:"distance east or west of the prime meridian", x:"Longitude helps fix a place on the map."},
    {t:"relief", d:"the shape and height of the land", x:"A relief map shows mountains and lowland."},
    {t:"coastline", d:"the line where the land meets the sea", x:"Liberia has a long Atlantic coastline."}
  ],
  facts:[
    {q:"On which continent and in which region is Liberia located?", a:"In Africa, in the region of West Africa."},
    {q:"State the four boundaries of Liberia.", a:"North – Guinea; South – Atlantic Ocean; West – Sierra Leone; East – Ivory Coast (Côte d'Ivoire)."},
    {q:"Name three of Liberia's highest mountains.", a:"Any three: Mt. Nimba, Mt. Gedeh, Mt. Wologisi, Bong Range, Putu Range."},
    {q:"Name four major rivers of Liberia.", a:"Any four: St. Paul, St. John, Cestos, Mano, Lofa, Sinoe, Cavalla."},
    {q:"Which river forms part of the boundary with Sierra Leone?", a:"The Mano River."},
    {q:"Name one lake and one island in Liberia.", a:"Lake Piso (near Robertsport); Providence Island (in Monrovia)."}
  ],
  tf:[
    {s:"Liberia lies on the Atlantic coast of West Africa.", a:"true", why:"The Atlantic Ocean forms its southern boundary."},
    {s:"Mount Nimba is in the south-west of Liberia.", a:"false", why:"Mount Nimba is in the north-east, in Nimba County."},
    {s:"The Cavalla River forms part of the boundary with Ivory Coast.", a:"true", why:"It flows along much of the eastern boundary."},
    {s:"Lake Piso is found near Robertsport.", a:"true", why:"It lies in Grand Cape Mount County near Robertsport."},
    {s:"Guinea lies to the south of Liberia.", a:"false", why:"Guinea is to the north; the Atlantic Ocean is to the south."},
    {s:"A cape is land that juts out into the sea.", a:"true", why:"Cape Mount and Cape Palmas are examples."}
  ],
  apply:[
    {q:"Why are Liberia's rivers important to the country?", a:"They provide water for drinking and farming, fish for food, transport by canoe, hydro-electric power at sites like Mount Coffee, and they mark some boundaries."},
    {q:"How does the long Atlantic coastline benefit Liberia?", a:"It allows ports such as Monrovia, Buchanan, Greenville and Harper to trade with the world, provides fish, and supports tourism."},
    {q:"Why was Providence Island important in Liberian history?", a:"It is where the first settlers from America landed in 1822, so it is the birthplace of the Liberian state."},
    {q:"How do the mountains of Liberia help the economy?", a:"They contain iron ore and gold that are mined for revenue, they attract rainfall, and their forests supply timber and protect water sources."}
  ],
  sort:{ title:"Physical features of Liberia",
    groups:[
      {name:"Mountains", items:["Mt. Nimba","Mt. Wologisi","Bong Range","Putu Range"]},
      {name:"Rivers", items:["St. Paul","St. John","Cavalla","Mano","Lofa"]},
      {name:"Boundaries", items:["Guinea (north)","Sierra Leone (west)","Ivory Coast (east)","Atlantic Ocean (south)"]}
    ]},
  mapwork:{ title:"Physical map of Liberia", caption:"On an outline map of Liberia, locate and label each of the following features.",
    items:[
      {p:"Mt. Nimba", f:"the highest mountain, in the north-east of Nimba County"},
      {p:"St. Paul River", f:"flows past Monrovia; site of the Mount Coffee hydro plant"},
      {p:"Cavalla River", f:"forms much of the eastern boundary with Ivory Coast"},
      {p:"Mano River", f:"forms part of the western boundary with Sierra Leone"},
      {p:"Lake Piso", f:"a large lagoon-lake near Robertsport in Grand Cape Mount"},
      {p:"Cape Palmas", f:"the cape at the far south-east, near Harper"}
    ]},
  casestudy:{ title:"The Mount Coffee plant",
    text:"The Mount Coffee Hydropower Plant stands on the St. Paul River not far from Monrovia. Water from the river turns great turbines that make electricity for the capital. The plant was destroyed during the civil war and was rebuilt and reopened in 2016. Engineers explain that without the steady rainfall of Liberia's climate the river could not turn the turbines all year.",
    questions:[
      {q:"On which river is the Mount Coffee plant built?", a:"The St. Paul River."},
      {q:"What does the plant produce?", a:"Electricity, from water turning turbines."},
      {q:"Why does the plant depend on Liberia's climate?", a:"Because steady rainfall keeps enough water flowing in the river to turn the turbines."}
    ]},
  project:{ title:"Atlas of my country",
    brief:"Build a small atlas page for Liberia.",
    steps:["Draw an outline map of Liberia on a full page.","Mark and label the four boundaries.","Add and label five rivers and three mountains.","Add a key showing your symbols and colours.","Write three sentences describing Liberia's location to someone who has never seen it."],
    criteria:["Accurate outline","All four boundaries labelled","Five rivers and three mountains marked","A clear key","Three correct descriptive sentences"]},
  activities:["Locate Liberia on the world map and the map of Africa","Locate the major mountains of Liberia","Name the major rivers and lakes","List other physical features such as capes and islands","Draw and label the map of Liberia"],
  materials:["World map, map of Africa, map of Liberia","Physical relief map","Atlas and globe if available"],
  assessment:["Quizzes","Map work","Class work","Class participation","Test"]
},
{
  grade:4, period:"II", sem:"One", icon:"👥",
  title:"People of Liberia",
  subtitle:"The sixteen ethnic groups, later migrants, and the contributions of each group",
  outcomes:["Learners develop a sense of mutual coexistence irrespective of tribal or cultural diversity","Learners appreciate contributions made by the various migrants to the Liberian society","Learners understand reasons for migration"],
  objectives:["Trace the origin of the people of Liberia","Discuss the places of origin of each group","Group tribes by similarity of language or culture","Tell specifically where a tribe is settled in the majority","Identify some social problems associated with migration"],
  note:"Liberia has <b>sixteen</b> major indigenous ethnic groups. They belong to three language families: <b>Mande</b>, <b>Kru</b> and <b>Mel (West Atlantic)</b>. Later came <b>free men of colour</b> from the USA and the West Indies, and <b>recent migrants</b> from Ghana, Guinea, Nigeria, Sierra Leone and Togo.",
  study:[
    /* ---- course text: Semester One, Period II (guide pp. 43-45) ---- */
    {k:"h3", t:"The Early Migrants and the Sixteen Tribal Groups"},
    {k:"p", t:"The ancestors of the Liberian people **migrated** – moved from one place to settle in another – over many centuries. They came chiefly from the north and east, from the great **Mande** country of the upper Niger and from the lands of the savannah, pushing south before drought, war and the search for land; others came along the coast."},
    {k:"bul", items:["**Wars and the slave raiding** of the great states drove small peoples into the forest.","**Drought and the failure of crops** pushed families south and west.","**The search for land, salt, iron and gold**, and for better farming country.","**Religion and the wish to keep their own customs** and to live under their own chiefs.","**The movement of the Mande and Manes** in the 16th and 17th centuries scattered peoples through the whole region."]},
    {k:"p", t:"Out of these migrations came the **sixteen major indigenous ethnic groups of Liberia**, grouped by language into three families: **Mande**, **Kru** and **Mel (West Atlantic)**. Oral tradition – the story, the genealogy, the song and the name of a town – is how the coming of each group is remembered."},
    {k:"rule"},
    {k:"h3", t:"The Sixteen Groups and Where They Live"},
    {k:"p", t:"The **sixteen major indigenous ethnic groups** of Liberia are commonly named as: **Kpelle, Bassa, Gio (Dan), Mano, Kru, Grebo, Krahn, Loma, Gola, Kissi, Vai, Mandingo, Gbandi, Mende, Belle and Dei**. Their languages belong to three families – **Mande**, **Kru** and **Mel (West Atlantic)**."},
    {k:"table", head:["Group","Where it is found chiefly","For which it is known"], rows:[
      ["Kpelle","Bong, Gbarpolu, Margibi","The largest group; iron working, rice farming, the Poro, fine weaving"],
      ["Bassa","Grand Bassa, Rivercess, Margibi","Rice and palm farming, the Kwi dance, the long drum"],
      ["Gio (Dan)","River Gee, Nimba (and across the border)","Carving of masks and stools, farming, the warrior's dance"],
      ["Mano and Loma","Lofa, Nimba, Gbarpolu","Farming, cloth weaving, the strong rule of the chief and the Poro"],
      ["Mende, Gbandi and Kissi","Lofa, Bong, Margibi, Bomi","Farming and trading, the masking dance, the old ties with Sierra Leone"],
      ["Kru","Sinoe, Maryland, Grand Kru, the coast","Sea-faring folk: fishermen, sailors and pilots, the plank canoe"],
      ["Grebo and Krahn","River Gee, Maryland, Sinoe, Nimba","Farming, carving, the drum and the dance, the great masks"],
      ["Vai and Gola","Grand Cape Mount, Bomi, Montserrado coast","Agriculture, cotton and indigo cloth; the Vai written script"],
      ["Dei and Belle","Montserrado, Bomi, Grand Cape Mount","Farming and fishing on the coast and the St. Paul"],
      ["Mandingo","Lofa, Bong, the towns of the north and throughout the country","Trading, leather work, the Muslim faith and Arabic learning"]
    ]},
    {k:"p", t:"**Distribution by geography**: the Mande-speaking peoples occupy the forest and the mountain north and centre; the Kru and Kwa-speaking peoples occupy the south-eastern forest and the coast as far as Cape Palmas; the Mel peoples – Vai, Gola and Dei – hold the coast and the north-west."},
    {k:"rule"},
    {k:"h3", t:"Later Migrants: Free Men of Colour"},
    {k:"bul", items:["**From the United States** – free Black people ('free men and women of colour') and the enslaved who bought or were given freedom; from 1822 the American Colonization Society settled them in Liberia, at Providence Island (1822), Cape Mesurado (1824, Monrovia), and in the stations of the coast.","**From the West Indies and Central America** – Black people from Jamaica, the Bahamas, Haiti and other islands who crossed the Atlantic to escape colour laws and to build a free republic of their own.","**Recaptured Africans** – persons freed by American and British warships from slave vessels after 1820; thousands were landed in Monrovia and in the stations of the coast, and many were settled in the villages of the Mesurado and St. Paul.","These came to be called **Americo-Liberians** or **settlers / Congo people**; they built the churches, schools, the English language and the institutions of the Republic, and they married into the tribes until the distinctions faded."]},
    {k:"rule"},
    {k:"h3", t:"Recent Migrants: Other West Africans"},
    {k:"p", t:"Liberia has always drawn workers and traders from her neighbours, and many of them stayed and became Liberian."},
    {k:"table", head:["From","Why they came","What they brought"], rows:[
      ["Ghana","To farm, to work the plantations and mines, and to trade","Kola nut, trading networks, Methodist and Presbyterian churches, cocoa-farming skill"],
      ["Guinea, Mali and Senegal","Trade, and the Muslim faith; herders and dyers","The Mandingo / Vai trading routes, Islam and Arabic literacy, rice milling, indigo dyeing, gold and kola trade"],
      ["Nigeria and Sierra Leone","Trading and clerical work; the Krio returned from Liberia and Sierra Leone","Shop-keeping, carpentry, tailoring, the civil service, Western-style church building"],
      ["Togo, Benin and Cameroon","Farming and labour on the plantations and in the ports","Cocoa and palm work, seamanship, the fire-brigade and dock trades"]
    ]},
    {k:"p", t:"Their children attend Liberian schools, speak Liberian English and hold Liberian passports; **assimilation** is the blending of a group into the culture of the people among whom it lives."},
    {k:"rule"},
    {k:"h3", t:"Contributions of the Ethnic Groups to Liberian Society"},
    {k:"bul", items:["**Farming** – rice in the swamp, and the **upland and rope rice, cassava, cocoyam, yam, plantain, groundnut** and the oil palm; the Kpelle and Bassa are famous for the swamp dike and the ridged farm.","**Crafts and industry** – iron smelting (the Kpelle and Mano smiths), weaving of **country cloth** (Vai, Gola, Kpelle), carving of masks and stools (Grebo, Dan/Gio, Gola), pottery, mat and basket weaving, leather work and gold smithing.","**Seamanship and trade** – the **Kru, Gola and Grebo** coastmen: canoes, deep-sea fishing, the carrying of goods along the coast, and the piloting of ships and the labour of the ports; the Vai and Gola traded palm oil, cloth and kola.","**Learning and the arts** – the **Vai syllabary**, a written script of some two hundred signs invented for the Vai language in the 1830s and still used for letters and records, and the Arabic learning of the Mandingo and the Vai; the drum, the speech of the **talking drum**, the masks, the dance, the proverb, the riddle, and the epic of the people.","**Government and law** – the **Poro and Sande** societies, the town chief and the council of elders, the bar Association, the rule of the land by the whole town; the **Gola and Vai** systems of town defence and of the coast **town kings**.","**Faith and hospitality** – the mosques and churches, the naming rite, the harvest dance, and the open door for the stranger.","**Names and history** – every group keeps the memory of its origin; the whole nation is richer for the sixteen tongues and their songs."]},
    {k:"p", t:"**Coexistence** means living together peacefully despite differences. Intermarriage, common schooling, common work, one national language, the shared dance of the **Poro-Sande outing** and one flag have joined the many groups into one Liberian people."},
    {k:"rule"},
    {k:"h3", t:"Sea-Faring Folk and Folk Songs"},
    {k:"bul", items:["The **Kru** people of Sinoe, Maryland, Grand Kru and the coast are the most famous **sea-faring folk** of the coast: canoe men, deep-sea fishermen, divers, sailors and pilots who shipped on the coasters and on ocean vessels.","Kru and Grebo **folk songs** are sung at work, at paddling, at the net hauling, at the harvest and at the dance; they are sung in the mother tongue, and the words praise the sea, the ancestors, the chief, the fish, the brave and the beauty.","A folk song **teaches** a lesson, **records** an event of the town, **praises** a person or a place, **scolds** a wrong, and **keeps** the language of the people alive.","Folk songs and the folk tale belong to the whole people: their authors are unknown, they are handed down **orally**, they exist in many versions, and they are accompanied by drum, dance and clap."]},
    {k:"p", t:"Dangers that surround the sea-faring life and the work of children on the water: storm and high surf, the loss of a canoe, drowning, sharks, the fever got from wet clothes, the pulling of nets for hours, and being carried away by a ship for foreign labour."}
  ],
  focus:["Early migrants (16 tribes) and their origins","Distribution of tribes by geographic location","Later migrants: free men of colour from the USA and West Indies","Recent migrants: other West Africans from Ghana, Guinea, Nigeria, Sierra Leone, Togo","Contributions of the ethnic groups to Liberian society"],
  terms:[
    {t:"ethnic group", d:"a group of people sharing a language, culture and origin", x:"The Kpelle are the largest ethnic group."},
    {t:"migration", d:"the movement of people from one place to settle in another", x:"Migration brought many groups to Liberia."},
    {t:"indigenous", d:"belonging to a place from the earliest times", x:"The sixteen indigenous groups came first."},
    {t:"Mande", d:"one of the three language families of Liberia", x:"Kpelle and Vai belong to the Mande family."},
    {t:"Kru", d:"a language family of the coastal and south-eastern peoples", x:"The Kru family includes Bassa and Grebo."},
    {t:"settler", d:"a person from another land who comes to live in a place", x:"The settlers arrived in 1822."},
    {t:"free man of colour", d:"a black person in the Americas who was not enslaved", x:"Free men of colour founded Liberia."},
    {t:"culture", d:"the way of life, beliefs and customs of a people", x:"Each group brought its own culture."},
    {t:"coexistence", d:"living together peacefully despite differences", x:"Coexistence keeps the nation united."},
    {t:"assimilation", d:"the blending of one group into the culture of another", x:"Assimilation happened through marriage and trade."}
  ],
  facts:[
    {q:"How many major indigenous ethnic groups does Liberia have?", a:"Sixteen."},
    {q:"Name the three language families of Liberia.", a:"Mande, Kru and Mel (West Atlantic)."},
    {q:"Name any five Liberian ethnic groups.", a:"Any five: Kpelle, Bassa, Gio (Dan), Mano, Kru, Grebo, Krahn, Lorma, Gola, Kissi, Vai, Mandingo, Gbandi, Mende, Belle, Dei."},
    {q:"Which is the largest ethnic group in Liberia?", a:"The Kpelle."},
    {q:"Where did the later migrants of 1822 come from?", a:"From the United States of America and the West Indies — free men of colour."},
    {q:"Name three West African countries from which recent migrants have come.", a:"Any three: Ghana, Guinea, Nigeria, Sierra Leone, Togo."}
  ],
  tf:[
    {s:"Liberia has sixteen major indigenous ethnic groups.", a:"true", why:"They are recognised as the sixteen indigenous groups of the country."},
    {s:"The Kpelle are found mainly in Bong County.", a:"true", why:"Bong County is the heartland of the Kpelle people."},
    {s:"The settlers of 1822 came from Europe.", a:"false", why:"They were free men of colour from the United States and the West Indies."},
    {s:"The Vai people developed their own writing script.", a:"true", why:"The Vai syllabary is one of Africa's few indigenous scripts."},
    {s:"Migration has brought no benefit to Liberia.", a:"false", why:"Migrants brought trade skills, crafts, farming methods, languages and religions that enriched the nation."},
    {s:"All Liberian ethnic groups speak the same language.", a:"false", why:"Each group has its own language within the Mande, Kru or Mel family."}
  ],
  apply:[
    {q:"Give two reasons why people migrated into the area now called Liberia.", a:"To escape wars and slave raiding, to find better farmland and hunting, to escape drought or disease, and to trade."},
    {q:"Name two contributions of an ethnic group to Liberian society.", a:"E.g. the Vai created a writing script and are skilled traders; the Bassa are noted farmers and fishermen; the Mandingo built long-distance trade networks."},
    {q:"Give one social problem that can come with migration.", a:"Competition for land and jobs, overcrowding in towns, tension between groups, loss of language and culture, and pressure on schools and clinics."},
    {q:"Why is mutual coexistence important in a country with many ethnic groups?", a:"Because peace lets all groups trade, learn and marry across lines, while distrust leads to conflict that destroys development for everyone."}
  ],
  sort:{ title:"Language families and migrants",
    groups:[
      {name:"Mande group", items:["Kpelle","Vai","Mandingo","Gio (Dan)","Mano"]},
      {name:"Kru group", items:["Bassa","Grebo","Kru","Krahn","Dei"]},
      {name:"Mel group", items:["Gola","Kissi"]},
      {name:"Later migrants", items:["Free men of colour from USA","Free men of colour from West Indies","Recaptured Africans"]}
    ]},
  mapwork:{ title:"Where the peoples of Liberia live", caption:"On the map of Liberia, shade the area where each group lives in the majority.",
    items:[
      {p:"Kpelle", f:"mainly Bong County and parts of Lofa and Nimba"},
      {p:"Bassa", f:"mainly Grand Bassa and Margibi Counties along the coast"},
      {p:"Gio and Mano", f:"mainly Nimba County in the north-east"},
      {p:"Grebo and Krahn", f:"mainly Maryland, River Gee and Grand Gedeh in the south-east"},
      {p:"Vai", f:"mainly Grand Cape Mount County in the west"},
      {p:"Lorma and Kissi", f:"mainly Lofa County in the north"}
    ]},
  casestudy:{ title:"The market at Ganta",
    text:"The market at Ganta in Nimba County draws traders from many groups. Gio and Mano farmers bring rice and vegetables. Mandingo traders sell cloth and shoes brought from Guinea. A Bassa carpenter sells stools, and a Ghanaian woman fries plantain chips. They speak Liberian English to each other because each speaks a different mother tongue. The market chairman says that trade has kept the peace in Ganta for many years.",
    questions:[
      {q:"Name three groups that trade at Ganta market.", a:"Any three: Gio, Mano, Mandingo, Bassa, and Ghanaian migrants."},
      {q:"What language do the traders use with one another and why?", a:"Liberian English, because each group speaks a different mother tongue."},
      {q:"According to the chairman, what has kept the peace in Ganta?", a:"Trade among the different groups."}
    ]},
  project:{ title:"My ethnic heritage",
    brief:"Research one Liberian ethnic group and present its contribution.",
    steps:["Choose one of the sixteen groups — your own or another.","Find out its language family and where it lives in the majority.","List two cultural practices, such as a food, dance, craft or ceremony.","Find one contribution the group has made to Liberia.","Present your findings with a drawing or a map."],
    criteria:["Correct language family","Correct location","Two cultural practices","One clear contribution","A neat map or drawing"]},
  activities:["Trace the origin of the people of Liberia","Discuss the places of origin of each group","Group tribes by similarity of language or culture","Locate on a map where each tribe settles in the majority","Discuss social problems associated with migration"],
  materials:["Ethnic map of Liberia","Pictures of cultural dress and crafts","Map of Africa showing migration routes"],
  assessment:["Quizzes","Map work","Research presentation","Class participation","Test"]
},
{
  grade:4, period:"III", sem:"One", icon:"⚓",
  title:"Founding of the Liberian State",
  subtitle:"The Trans-Atlantic slave trade, the American Colonization Society and the founding of Liberia",
  outcomes:["Learners show loyalty to their country and cherish their history"],
  objectives:["Explain how the Trans-Atlantic slave trade led to the formation of the Liberian state","Name the founders and some members of the American Colonization Society","Explain why the American Colonization Society was founded"],
  note:"The <b>Trans-Atlantic slave trade</b> carried millions of Africans to the Americas. In 1816 the <b>American Colonization Society (ACS)</b> was formed to settle free black people in Africa. The first settlers reached <b>Providence Island</b> in <b>1822</b>, and Liberia declared independence on <b>26 July 1847</b>.",
  study:[
    /* ---- course text: Semester One, Period III (guide pp. 46-47) ---- */
    {k:"h3", t:"Factors that led to the Trans-Atlantic Slave Trade"},
    {k:"p", t:"The **Trans-Atlantic slave trade** was the trade, from about 1500 to the 1860s, that carried enslaved Africans in ships across the Atlantic to the Americas. More than ten million men, women and children were taken; millions more died in the capture, on the march to the coast, and on the **middle passage** at sea."},
    {k:"bul", items:["**The demand for labour** on the sugar, tobacco, cotton, coffee and rice plantations and in the gold and silver mines of the Americas; the Indian labourers had died in great numbers.","**The cheapness of enslaved labour** – the planter paid once and owned for life; the trade was a great source of profit for the ship owner, the merchant and the king.","**The weakness of some African rulers and traders** who sold captives and prisoners of war to the traders on the coast in exchange for guns, powder, cloth, iron, salt, brass and rum.","**The goods of Europe** wanted by the chiefs; the gun made war, and war made captives to sell, in a circle of violence.","**The laws and charters of the European powers** that licensed and protected the trade, and the great trading companies with their forts on the coast.","**Racial prejudice** – the false belief that Black people were fit only for slavery, used to answer the conscience of the buyer."]},
    {k:"p", t:"Its **effects on Africa and on Liberia's coast**: the loss of the youngest and strongest people; the constant war and insecurity; the ruin of crafts, farming and the mining of gold and iron; the destruction of the family; and the racial abuse that outlived the trade itself."},
    {k:"rule"},
    {k:"h3", t:"Human Trafficking – Modern-Day Slavery"},
    {k:"p", t:"**Human trafficking** is the buying, selling, transporting or harbouring of people by force, fraud or deception, in order to make them work or be used without pay. It is the slavery of our own day, and it is a crime in Liberia."},
    {k:"table", head:["Form of trafficking","How it looks","Who is most at risk"], rows:[
      ["Forced labour","A person is worked on a farm, in a mine, in a quarry or in a factory for no pay, under threat, with papers taken away","Poor youths promised a job or a scholarship"],
      ["Domestic servitude","Girls kept in a home, beaten, unpaid, and not allowed to leave","Rural girls sent to 'work for an auntie in Monrovia'"],
      ["Sexual exploitation and prostitution","Persons sold or trapped into the sex trade, in a brothel, a bar, a guesthouse or online","Adolescents, runaways, girls promised modelling or school fees"],
      ["Child labour and portering","Children hired for dangerous work, on the boats, at the market or in the timber camp","Children out of school"],
      ["Early and forced marriage","A girl 'married' off to a much older man and treated as property","Girls in secondary school age"],
      ["Begging and petty crime rings","Children collected and made to beg or steal","Street children, orphans"]
    ]},
    {k:"bul", items:["Signs of trafficking: the person is not free to come and go; his identity papers are held by another; he is afraid of police; he is not paid, or paid only in food; he has injuries, or is coached in what to say.","Prevention: finish school; refuse a job that will not give a written contract; tell your family the address and the name of the employer; never pay a broker who promises to 'carry you abroad'.","Report at once to the police, the County/Child protection agency, the **Ministry of Gender, Children and Social Protection**, or the national anti-trafficking hotline; a victim of trafficking must be protected, not punished."]},
    {k:"rule"},
    {k:"h3", t:"The American Colonization Society (ACS)"},
    {k:"p", t:"The **American Colonization Society** – formally 'The Society for the Land of Liberty for the Free People of Colour of the United States' – was founded in **1816** in Washington, D.C., to settle free Black people of America on the coast of Africa."},
    {k:"bul", items:["**Rev. Dr. Robert Finley**, of New Jersey, the founder and first secretary, who conceived the plan.","**Bushrod Washington** of Virginia – statesman and first President of the Society.","**Elijah Kelley** and **J. Ashmun**, the early agents; **Dr. Elijah Caldwell**, who served the enterprise."," **R. R. Gurley**, its long-serving agent; and many American statesmen, clergymen and planters, some of whom wanted to free the enslaved and some only to remove free Black people from the States.","The **American State and local auxiliary societies** which raised the money and the emigrants."]},
    {k:"p", t:"The ACS was supported by the United States Congress, which in 1819 gave authority to send out agents, and by private subscription; it purchased land from African chiefs, equipped ships and paid for the passage of the emigrants."},
    {k:"rule"},
    {k:"h3", t:"Why Liberia was Founded: the Aims of the ACS"},
    {k:"num", items:["**To find a home for the freed slaves** and the free-born Black people of America, where a man could own land, be a citizen, and not be ruled by colour.","**To carry Christianity, schools and the arts of civilised life to the coast of Africa**, and through the liberated colony to open the legitimate trade of the country.","**To give the African race proof of its capacity** for self-government, learning and commerce before a scornful world.","**To put an end, slowly, to the slave trade on this coast** by planting a Christian, trading, free people at the great embarkation points; the colony's navy and its settlements helped to land the **recaptured Africans** freed from slave ships.","**To relieve the American states** of what their governors called a 'dangerous' free Black population – a motive that was unjust, and yet part of the history."]},
    {k:"rule"},
    {k:"h3", t:"Finding a Home for the Freed Slaves: the Story of the Settlement"},
    {k:"num", items:["**1816** – the American Colonization Society is founded in Washington.","**1821** – Lieutenant **Robert F. Stockton** of the U.S. Navy and the agent **Dr. Eli Ayres** buy **Cape Mesurado** from the Gola chiefs for goods and $300.","**1822** – the *Elizabeth Stockton* arrives; the first settlers land at **Providence Island** in the Mesurado river area in search of a healthy site.","**1824** – **Cape Mesurado** is settled and named **Monrovia**, after President James Monroe; **Marshall, Edina, Bassa and the St. Paul stations** follow.","**1834-1839** – the settlements of **Maryland (Harper), Sinoe (Greenville), Bassa (Buchanan)** and **Cape Palmas** are founded and joined into one Commonwealth.","**1839** – the settlements are united as the **Commonwealth of Liberia** under a Governor appointed by the Society.","**26 July 1847** – the **Declaration of Independence** is signed at Monrovia and the **Republic of Liberia** is born; **Joseph J. Roberts**, a free man of colour from America, becomes the first President in 1848.","**1862** – the United States formally recognises the Republic; other powers had recognised Liberia during the 1850s, and Liberia was admitted to the League of Nations in 1920."]},
    {k:"bul", items:["**Emigrants** – the Black settlers who left America to come here; most of them came from Maryland, Virginia, the Carolinas, Georgia and Pennsylvania.","**Recaptured Africans (Congo people)** – persons taken off slave ships at sea and landed in Monrovia and the stations; they gave Liberia much of its later population.","**Repatriation** – the return of people to the land of their ancestors; the settlers' voyage was the great return that founded the nation.","The **pioneers** had to clear forest, fight fever, build the station, buy or rent land, and defend the settlement; many died in the first years."]},
    {k:"p", t:"The founders named the country **Liberia**, 'the land of the free', and its flag, its anthem, its constitution and its counties carry to this day the memory of 1847."}
  ],
  focus:["Factors that led to the Trans-Atlantic slave trade","Human trafficking as a form of modern-day slavery","Members of the American Colonization Society: Bushrod Washington, Elijah Caldwell, Robert Finley","Aims of the ACS and why Liberia was founded","Finding a home for freed slaves"],
  terms:[
    {t:"Trans-Atlantic slave trade", d:"the trade that carried enslaved Africans across the Atlantic to the Americas", x:"The Trans-Atlantic slave trade lasted over 300 years."},
    {t:"slavery", d:"the holding of a person as property to work without pay or freedom", x:"Slavery denies a person all rights."},
    {t:"American Colonization Society", d:"the group formed in 1816 to settle free black people in Africa", x:"The ACS founded Liberia."},
    {t:"colony", d:"a settlement controlled by people from another country", x:"Liberia began as a colony of the ACS."},
    {t:"emigrant", d:"a person who leaves one country to settle in another", x:"The emigrants sailed from New York."},
    {t:"repatriation", d:"returning people to the land of their ancestors", x:"The ACS supported repatriation to Africa."},
    {t:"independence", d:"freedom from the control of another power", x:"Liberia declared independence in 1847."},
    {t:"human trafficking", d:"the buying and moving of people for forced work — modern-day slavery", x:"Human trafficking is a crime."},
    {t:"declaration", d:"an official public statement", x:"The Declaration of Independence was read in 1847."},
    {t:"pioneer", d:"one of the first people to settle in a new place", x:"The pioneers landed at Providence Island."}
  ],
  facts:[
    {q:"In what year was the American Colonization Society founded?", a:"1816."},
    {q:"Name three members of the American Colonization Society.", a:"Bushrod Washington, Elijah Caldwell and Robert Finley."},
    {q:"In what year did the first settlers arrive, and where did they land?", a:"1822, at Providence Island in the Mesurado River."},
    {q:"Why was the ACS founded?", a:"To find a home in Africa for freed and free-born black people from the United States."},
    {q:"On what date did Liberia declare independence?", a:"26 July 1847."},
    {q:"What is modern-day slavery called today?", a:"Human trafficking."}
  ],
  tf:[
    {s:"The American Colonization Society was founded in 1816.", a:"true", why:"It was formed in Washington in that year."},
    {s:"The first settlers landed at Harper in 1822.", a:"false", why:"They landed at Providence Island, near what became Monrovia."},
    {s:"Liberia declared independence on 26 July 1847.", a:"true", why:"That day is celebrated as Independence Day."},
    {s:"Human trafficking is a form of modern-day slavery.", a:"true", why:"People are bought, moved and forced to work without freedom."},
    {s:"Slavery gave enslaved people wages and freedom.", a:"false", why:"Enslaved people were held as property with no pay and no freedom."},
    {s:"Monrovia was named after an American President.", a:"true", why:"It was named after President James Monroe."}
  ],
  apply:[
    {q:"Give two effects of the Trans-Atlantic slave trade on Africa.", a:"It took away millions of young, able people, weakened kingdoms, spread war and raiding, and slowed African development for centuries."},
    {q:"Why do we celebrate 26 July every year?", a:"Because it is the day Liberia declared independence in 1847 and became Africa's first independent republic."},
    {q:"How is human trafficking today similar to the old slave trade?", a:"In both, people are taken from their homes, moved far away, sold and forced to work without freedom or pay."},
    {q:"What can young people do to help stop human trafficking?", a:"Learn the warning signs, refuse offers of work far away from strangers, tell an adult about suspicious offers, and report cases to the police."}
  ],
  sort:{ title:"People, places and dates",
    groups:[
      {name:"Founders of the ACS", items:["Bushrod Washington","Elijah Caldwell","Robert Finley"]},
      {name:"Important places", items:["Providence Island","Monrovia","Cape Mesurado"]},
      {name:"Important dates", items:["1816 — ACS founded","1822 — settlers land","1847 — independence"]}
    ]},
  mapwork:{ title:"Timeline of the founding of Liberia", caption:"Complete the timeline by writing what happened at each date.",
    items:[
      {p:"1816", f:"the American Colonization Society is formed in the United States"},
      {p:"1820", f:"the first ship, the Elizabeth, sails from New York with emigrants"},
      {p:"1822", f:"settlers land at Providence Island and found the settlement at Cape Mesurado"},
      {p:"1824", f:"the settlement is named Monrovia and the colony named Liberia"},
      {p:"1847", f:"Liberia declares independence on 26 July and becomes a republic"},
      {p:"1848", f:"Joseph Jenkins Roberts is inaugurated as the first President"}
    ]},
  casestudy:{ title:"The voyage of the Elizabeth",
    text:"In 1820 a ship called the Elizabeth sailed from New York carrying eighty-six emigrants sent by the American Colonization Society. Many fell sick and died at Sherbro Island. Two years later the survivors and new settlers came to Cape Mesurado, where they landed on Providence Island. Life was hard: there was fever, and disputes arose with the local people over land. Yet the settlement grew, and in 1824 it was named Monrovia.",
    questions:[
      {q:"What was the name of the first ship and when did it sail?", a:"The Elizabeth, in 1820."},
      {q:"Name two difficulties faced by the settlers.", a:"Sickness and death from fever, and disputes with the local people over land."},
      {q:"What happened in 1824?", a:"The settlement was named Monrovia."}
    ]},
  project:{ title:"History wall chart",
    brief:"Make a wall chart of the founding of Liberia.",
    steps:["Draw a timeline from 1816 to 1847.","Mark five key events with their dates.","Draw or write about one person who played a part.","Add one sentence on what each event meant for Liberia.","Display the chart and explain it to the class."],
    criteria:["Five events correctly dated","Events in the right order","One person described","Clear explanatory sentences","Confident presentation"]},
  activities:["Explain how the Trans-Atlantic slave trade led to the formation of the Liberian state","Name the founders of the American Colonization Society","Explain why the ACS was founded","Discuss human trafficking as modern-day slavery","Construct a timeline of key events"],
  materials:["Pictures of the ACS founders","Map showing the Atlantic slave routes","Timeline chart","Picture of Providence Island"],
  assessment:["Quizzes","Timeline task","Class work","Class participation","Test"]
},
{
  grade:4, period:"IV", sem:"Two", icon:"🏛️",
  title:"Structures and Functions of the Liberian Government",
  subtitle:"National and local government, the three branches, and the rights of the disabled",
  outcomes:["Learners respect rule of law and advocate support for the disabled in society","Learners understand their rights about sex and sexuality"],
  objectives:["Describe the structure of the Liberian government","Identify the functions of local and national government","Discuss the care of the disabled community as a responsibility of both local and national government","Discuss rights as enshrined in the Constitution of Liberia and international conventions"],
  note:"Liberia's government has <b>three branches</b>: the <b>Legislative</b> makes the laws, the <b>Executive</b> carries them out, and the <b>Judiciary</b> interprets them. Local government runs the <b>town, clan, chiefdom, district and county</b>.",
  study:[
    /* ---- course text: Semester Two, Period IV (guide pp. 48-49) ---- */
    {k:"h3", t:"National Government and Local Government"},
    {k:"p", t:"**Government** is the group of people who rule and manage a country, and the institutions through which they work. Liberia's government is **republican, unitary and democratic**: power belongs to the people, the counties are administered from the centre, and the offices are held for a fixed term by election."},
    {k:"table", head:["National government","Local government"], rows:[
      ["Makes and administers the law for the whole Republic","Carries out the laws of the Republic in each county and town"],
      ["Seat: Monrovia – Executive Mansion, Capitol Building, Supreme Court","Seat: the county capital – the county hall and the court of the chief"],
      ["The President, the Legislature, the Judiciary","The Superintendent, the District and Township Commissioners, the Mayor, the Paramount and Town Chiefs"],
      ["Takes decisions on money, defence, education policy, foreign relations","Settles local disputes, maintains the market, the roads, the school, the water and the sanitation"],
      ["Raised by national taxes, duties, fees and aid","Funded by county and city levies, market fees, taxes on property and grants"]
    ]},
    {k:"rule"},
    {k:"h3", t:"The Levels of Local Government"},
    {k:"num", items:["**Town** – the smallest unit; the people of a town hold the **town meeting**, which is the highest authority in the town, and they elect a **town chief** and a **chairman/chairlady** with a council of elders.","**Clan** – a group of towns of one people; it is led by a **sub-chief (clan chief)**.","**Chiefdom** – several clans under a **Paramount Chief**, with his own council of chiefs and elders; it is recognised by the Government.","**District** – a part of a county, administered by a **District Commissioner**; a **township** is administered by a **Township Commissioner**.","**County** – the largest local unit, headed by a **Superintendent** appointed by the President; the county has a **county court**, and its people elect a **Representative** and a **Senator**.","**City and special areas** – a city (e.g. Monrovia) is governed by a **Mayor and Corporation**; districts with many people also have a city or municipal council."]},
    {k:"p", t:"A chief is a servant of the whole people: he must keep the peace, protect the stranger, and rule with the elders in the open; he has no power over a person's life, liberty or property except by the law."},
    {k:"rule"},
    {k:"h3", t:"The Branches of Government"},
    {k:"table", head:["Branch","Headed by","Its work","Its members/offices"], rows:[
      ["Legislative (the Legislature = the National Assembly)","The Speaker of the House presides; the Vice President presides in the Senate","Makes the laws, passes the budget, approves appointments, and checks the Executive","The Senate (two Senators from each county) and the House of Representatives (elected from the districts) – together the Legislature"],
      ["Executive","The President, assisted by the Vice President and the Cabinet","Carries out and enforces the laws; runs the ministries, the army and the police; conducts foreign relations","Ministers of the departments, the Superintendents, the agencies, the civil service"],
      ["Judiciary","The Chief Justice of the Supreme Court","Interprets the law, judges the constitutionality of a law, and settles cases","The Supreme Court, Circuit Courts, Magisterial (district) Courts, and the specialised courts"]
    ]},
    {k:"p", t:"Each branch is separate and each checks the others: the Legislature makes the law but the President may **veto** a bill, and the Supreme Court may declare a law void. This is the doctrine of the **separation of powers** and of **checks and balances**."},
    {k:"p", t:"**Rule of law** is the principle that everyone, high or low, must obey the law; no chief, officer or President is above it. The **Senate confirms** the President's principal appointments, and the House may **impeach** an officer who breaks the law."},
    {k:"rule"},
    {k:"h3", t:"Interim Governments and Heads: Liberia 1990-2005"},
    {k:"p", t:"An **interim (transitional) government** is a temporary government set up to rule until free elections can be held. Between 1990 and 2005, because of the civil war, Liberia was governed by a series of such arrangements."},
    {k:"table", head:["Period","Arrangement / head of state","What was done"], rows:[
      ["1980-1984","People's Redemption Council (PRC) under Master Sergeant Samuel K. Doe","The coup of 12 April 1980 overthrew President Tolbert and ended the rule of the 1847 constitution; the PRC governed by decree"],
      ["1984-1990","The Second Republic under President Samuel K. Doe (Constitution of 1983)","One-party rule and economic difficulty; the war began in December 1989"],
      ["1990-1993","Council of State chaired by Amos Sawyer, afterwards Acting President","After President Doe was killed, the Council of State held office; ECOMOG came to keep the peace"],
      ["1994-1996","National Transitional Governing Council (NTGC), chaired by Dr. Wilton G. S. Sankawulo","The Accra Peace Agreement of 1994; the 1995 election was held under the transitional council and was disputed"],
      ["1996-1997","Council of State chaired by Madam Ruth Sando Perry","Disarmament and the general election of 1997, won by Charles G. Taylor"],
      ["1997-2003","President Charles G. Taylor","Reconstruction began, and war returned in 1999-2003; Taylor resigned in August 2003"],
      ["2003-2005","Interim government of Moses Blah (a few weeks), then the National Transitional Government of Liberia (NTGL) under Chairman Gyude Bryant","The Comprehensive Peace Agreement of 2003; recovery of the economy, and the census and registration"],
      ["2005","National election under the transitional government (run-off November 2005)","Ellen Johnson Sirleaf was elected and sworn in January 2006 as the first elected woman head of state in Africa"]
    ]},
    {k:"p", t:"Liberia also belonged to wider groupings: the **Group of 77** of developing states at the United Nations, the **Non-Aligned Movement**, the **African Union**, **ECOWAS**, the **Mano River Union** and the **Community of Sahel-Saharan States**. Through such bodies a small country joins with others to press for fair prices, aid, peace and development."},
    {k:"rule"},
    {k:"h3", t:"Disability and the Rights of the Disabled Community"},
    {k:"p", t:"A **disability** is a condition that makes it harder for a person to see, to hear, to walk, to speak or to learn. It is caused by illness, a wound, a birth defect or an accident – and it is not a curse, a shame or the punishment of an ancestor."},
    {k:"bul", items:["**The right to education** – no child may be refused a place because he is blind, deaf, lame or slow to learn; the school must adapt.","**The right to healthcare and rehabilitation** – treatment, physiotherapy, and help with crutches, calipers, hearing aids or a wheelchair.","**The right to work and to dignity of labour** – a disabled person may be a tailor, a telephonist, a carpenter, an accountant, a teacher, an athlete or a leader.","**The right of access** – ramps, wide doors, handrails, and a place in the market, the church and the meeting.","**The right to be heard** – to speak for himself, and not to be hidden, insulted, or left at home.","**The right to protection** – from abuse, from begging by force, from being called an omen, and from being denied property or inheritance."]},
    {k:"p", t:"The **National Association for Deaf and Blind**, the **Disabled Persons' rights** movements and the **Liberian National Olympic Committee's** disabled athletes, the Ministry of Health and Social Welfare, and the **National Disability law and Convention on the Rights of Persons with Disabilities** all rest on one sentence: as much as any other citizen, a person with a disability is a person of value."},
    {k:"bul", items:["How pupils help: walk with a blind classmate, carry or push, write down what is on the board, do not stare or imitate, learn a few signs, include the child in every game, and report cruelty.","Communication with a deaf person: face him, speak clearly at normal speed, do not shout in his ear, use your hands, and write it down.","Customs that must end: hiding an epileptic child, calling a disabled child a spirit, denying a person a marriage or inheritance because of his body."]}
  ],
  focus:["National government and local government","Local levels: town, clan, chiefdom, district, county","Branches of government: Legislative, Executive, Judiciary","Interim governments and heads; Liberian history 1990 to 2005","Disability and the rights of members of the disabled community"],
  terms:[
    {t:"government", d:"the group of people who rule and manage a country", x:"The government builds roads and schools."},
    {t:"legislative branch", d:"the branch that makes the laws", x:"The Legislature passed a new law."},
    {t:"executive branch", d:"the branch that carries out the laws", x:"The President heads the Executive."},
    {t:"judiciary", d:"the branch that interprets the law and settles cases", x:"The Judiciary is led by the Supreme Court."},
    {t:"legislature", d:"the Senate and House of Representatives together", x:"The Legislature meets in the Capitol Building."},
    {t:"senator", d:"a member of the Senate, elected by a county", x:"Each county elects two senators."},
    {t:"representative", d:"a member of the House of Representatives elected by a district", x:"The representative spoke for his district."},
    {t:"rule of law", d:"the principle that everyone must obey the law", x:"Rule of law protects every citizen."},
    {t:"interim government", d:"a temporary government set up until elections can be held", x:"An interim government ruled after the war."},
    {t:"convention", d:"an international agreement between countries", x:"Liberia signed the convention on children's rights."}
  ],
  facts:[
    {q:"Name the three branches of the Liberian government.", a:"The Legislative, the Executive and the Judiciary."},
    {q:"What is the work of the Legislative branch?", a:"To make the laws of the country."},
    {q:"Who heads the Executive branch of Liberia?", a:"The President."},
    {q:"Which court is the highest in Liberia?", a:"The Supreme Court."},
    {q:"List the levels of local government from smallest to largest.", a:"Town, clan, chiefdom, district, county."},
    {q:"Name two rights of members of the disabled community.", a:"The right to education, healthcare, work, dignity and access to public buildings and services."}
  ],
  tf:[
    {s:"The Legislature makes the laws of Liberia.", a:"true", why:"That is the function of the legislative branch."},
    {s:"The President interprets the law.", a:"false", why:"The Judiciary interprets the law; the President carries it out."},
    {s:"Each county in Liberia elects two senators.", a:"true", why:"The Senate has two senators from each of the fifteen counties."},
    {s:"Local government has no role once there is a national government.", a:"false", why:"Local government delivers services close to the people at county, district and town level."},
    {s:"Disabled citizens have the right to education.", a:"true", why:"The Constitution and international conventions protect their equal rights."},
    {s:"The Supreme Court is part of the Executive branch.", a:"false", why:"It is the head of the Judiciary."}
  ],
  apply:[
    {q:"Why is it important that the three branches of government are separate?", a:"So that no single person or group holds all the power; each branch checks the others and protects citizens from abuse."},
    {q:"Your school has no ramp for a pupil in a wheelchair. Whose responsibility is it and what should be done?", a:"Both local and national government share responsibility with the school; the community should petition the county education office and the school authorities to build a ramp so the pupil can access classes."},
    {q:"A new law is needed to protect children online. Trace the path it would follow.", a:"The Legislature drafts and debates the bill and passes it; the President signs it into law; government agencies enforce it; and the courts apply it when cases arise."},
    {q:"How does the rule of law protect an ordinary citizen?", a:"It means even leaders must obey the law, so a citizen can go to court if his rights are violated and expect a fair hearing."}
  ],
  sort:{ title:"Branches and levels of government",
    groups:[
      {name:"Legislative", items:["Senate","House of Representatives","Makes laws"]},
      {name:"Executive", items:["President","Vice President","Ministers","Carries out laws"]},
      {name:"Judiciary", items:["Supreme Court","Circuit courts","Interprets laws"]},
      {name:"Local government levels", items:["Town","Clan","Chiefdom","District","County"]}
    ]},
  mapwork:{ title:"Structure of the Liberian government", caption:"Complete the organisation chart of government and state the function of each part.",
    items:[
      {p:"Legislature (Senate and House)", f:"makes the laws and approves the national budget"},
      {p:"President", f:"head of state and head of the Executive; carries out the laws"},
      {p:"Ministries and agencies", f:"deliver services such as education, health and public works"},
      {p:"Supreme Court", f:"the highest court; interprets the Constitution and hears appeals"},
      {p:"County Superintendent", f:"leads the county and links it to the national government"},
      {p:"Town Chief and elders", f:"the level of government closest to the people"}
    ]},
  casestudy:{ title:"A ramp for Wilfred",
    text:"Wilfred uses a wheelchair. His school in Kakata had five steps at the entrance, so friends had to lift him every morning. His class wrote a letter to the Parent Teacher Association and the district education officer, quoting the Constitution's guarantee of equal education. The PTA raised money and the county provided cement. A ramp was built in three weeks. Wilfred now enters the school on his own.",
    questions:[
      {q:"What problem did Wilfred face?", a:"There were five steps at the school entrance and friends had to lift his wheelchair."},
      {q:"What did his class do about it?", a:"They wrote to the PTA and the district education officer, quoting the Constitution's guarantee of equal education."},
      {q:"Which levels of authority helped solve it?", a:"The PTA (community), the school, and the county — that is, both local and national responsibility."}
    ]},
  project:{ title:"Know your government",
    brief:"Find out who represents you and what they do.",
    steps:["Find the name of your county superintendent.","Find the names of your two senators and your representative.","Write one duty each of them carries out.","Write one problem in your community you would ask them to solve.","Draft a short, polite letter to one of them about that problem."],
    criteria:["Correct names found","One duty each stated","A real community problem chosen","A polite, well-structured letter","Neat presentation"]},
  activities:["Describe the structure of the Liberian government","Identify the functions of local and national government","Discuss the care of the disabled as a government responsibility","Discuss rights in the Constitution and international conventions","Role play a session of the Legislature"],
  materials:["Chart of the three branches of government","Simplified copy of the Constitution","Pictures of the Capitol Building and Supreme Court"],
  assessment:["Quizzes","Chart completion","Role play","Letter writing","Test"]
},
{
  grade:4, period:"V", sem:"Two", icon:"🛠️",
  title:"Ways of Earning a Living",
  subtitle:"Skilled and unskilled labour, the non-formal sector, and poverty",
  outcomes:["Learners develop respect for the dignity of labour","Learners become aware of the effect of poverty on sexual exploitation and abuse"],
  objectives:["Categorise labour as skilled or unskilled","Differentiate the types of workers in Liberian society","Explain the importance of acquiring a skill as a means of earning a decent living","Identify the contribution of those in the non-formal sector","Discuss poverty as a major problem"],
  note:"A <b>skilled worker</b> has been trained for a particular job — a carpenter, nurse or mechanic. An <b>unskilled worker</b> does work that needs little training. The <b>non-formal sector</b> includes petty traders, tailors and mechanics who work outside registered companies.",
  study:[
    /* ---- course text: Semester Two, Period V (guide pp. 50-51) ---- */
    {k:"h3", t:"Categories of Workers in Liberia"},
    {k:"num", items:["**Government (public) employees** – teachers, nurses, soldiers, police, clerks, extension agents and the Superintendent's staff; paid from the national budget and the taxes of the people; hired under the rules of the **civil service**.","**Private-sector employees** – workers of a company: the plantation (Firestone, LAC, Bea Mountain, Maryland and Sinoe), the bank, the mine, the port, the factory, the hotel, the shop, the garage; their pay, hours and leave are set by the contract, by the Labour Law and by the union.","**The self-employed** – the market woman, the tailor, the carpenter, the taxi and motorbike driver, the fisherman with his own canoe, the hairdresser, the petty trader, the farmer selling his own produce, the mason and the mechanic; they bear their own cost and keep their own profit."]},
    {k:"p", t:"Every category is needed: the trader cannot work without the road the government builds, nor the government without the taxpayer who is self-employed."},
    {k:"rule"},
    {k:"h3", t:"The Civil Service"},
    {k:"p", t:"The **civil service** is the body of people employed by the government to run its work, apart from the army and the elected officers. It is headed in each ministry by the **Minister**, with a **Deputy Minister** and a **Permanent Secretary**, and the service reaches every county through the offices, schools, hospitals and line agencies."},
    {k:"bul", items:["Its work: making and drafting policy, collecting revenue, keeping records, delivering services, and maintaining the property of the State.","Its rules: appointment on merit and on open advertisement, discipline, promotion by grade, a code of conduct, and the duty of **neutrality** – serving the government of the day honestly whichever party holds office.","Its pay: a salary scale set by the Government, with allowances, pension after long service, and a union to speak for its members.","Its ills and the cure: laziness, 'long hand' (corruption) and absence, which are checked by attendance registers, open budgets, audit, the Anti-Corruption Commission and the discipline of the service."]},
    {k:"rule"},
    {k:"h3", t:"Entrepreneurship"},
    {k:"p", t:"**Entrepreneurship** is starting and running one's own business, taking a reasonable risk, and organising land, labour and capital to produce something people want. An **entrepreneur** is that person."},
    {k:"bul", items:["**Qualities of a good entrepreneur** – initiative, courage to begin, honesty, hard work, thrift, good with figures, patience, good with people, willingness to learn, and the discipline to keep records.","**Where the money comes from** – savings and the 'susu' (rotating) club, family help, a cooperative, a bank loan, a development fund, or the first small profit of the shop.","**Small businesses in a Liberian town** – a lappah or kiosk, a tailor shop, a soap or candle workshop, a rice mill, a grinding and pounding shed, a ferry, a taxi or motorbike, a printing and photocopying stand, a bakery, a fish-smoking shed, a farm supplying the market, a hair salon, a mobile-money agent, and a school or clinic run privately.","**Government and NGO help** – the Ministry of Commerce and Industry, the small-business and women's development desks, the cooperatives movement, business skills training, and the registration of the firm."]},
    {k:"p", t:"**Advantages**: independence, all the profit, work suited to oneself, service to the community, and employment for others. **Difficulties**: no sure income, long hours, need for capital, competition, and the risk of loss."},
    {k:"rule"},
    {k:"h3", t:"Skilled and Unskilled Workers"},
    {k:"table", head:["Skilled worker","Unskilled worker"], rows:[
      ["Has been trained for a particular job and can be tested on it","Does work that needs little special training"],
      ["Carpenter, mason, electrician, plumber, mechanic, nurse, teacher, tailor, welder, driver with a licence, cook, printer, telephone technician, surveyor, accountant","Labourer on the farm or the building, porter, sweeper, digger, bush cutter, load-carrier, domestic helper, market helper, watchman without training"],
      ["Earns more because the work takes judgement, apprenticeship and a certificate","Earns less and is out of work first when the work is slack"],
      ["Can be employed abroad or by a big firm; may train apprentices","Must be strong, willing and punctual; may learn a trade and become skilled"]
    ]},
    {k:"bul", items:["**Advantages of skilled labour** – high and steady pay, respect, the chance to teach others, safer work, and the ability to work for oneself.","**Disadvantages of unskilled labour** – low pay, hard on the body, work only when it is to be found, no protection when hurt, and easy to replace.","**How to become skilled** – stay in school, learn under an artisan (apprenticeship), enter a trade or vocational school, take a certificate, keep your tools, and be honest and sober."]},
    {k:"p", t:"**Dignity of labour** is the idea that all honest work deserves respect: the sweeper and the digger are as honourable as the clerk, because the nation is built by their hands. No honest work is shameful; cheating, idleness and begging are."},
    {k:"rule"},
    {k:"h3", t:"The Non-Formal Sector of the Economy"},
    {k:"p", t:"The **non-formal (informal) sector** is the small, unregistered business carried on outside the firms and the government payroll. In Liberia it is the largest employer of the town: the market, the lappah, the roadside stall, the second-hand clothes table, the tailoring shed, the small mechanic and vulcaniser, the carpenter under the mango tree, the fish and water sellers, the hairdresser, the bread and doughnut seller, the hawker, the artisanal gold and diamond digger, the paddled canoe taxi, and the kiosk that recharges phones."},
    {k:"table", head:["Advantages of the non-formal sector","Disadvantages"], rows:[
      ["Opens with very little money; needs no licence and no office","No legal protection, no contract, no pension, no insurance"],
      ["Gives work and food to the poor, the young, the women and the untrained","Irregular, small income; weather and police 'clearing' can stop it"],
      ["Cheap goods and services close to the people","Poor quality, no records, no guarantee, no tax paid"],
      ["Uses local materials and skills; keeps money in the community","Crowding, refuse and noise; no help in sickness or old age"],
      ["A school of enterprise: many big traders began here","Rarely grows because it has no accounts, no credit and no training"]
    ]},
    {k:"p", t:"Liberia's economy needs both: the **formal sector** (government, plantations, mines, banks, licensed firms) which pays taxes and gives steady work, and the **non-formal sector** which feeds and employs the many. The way forward for a non-formal worker is to be registered, to keep a book, to join a cooperative or association, to save, and to learn a skill."},
    {k:"rule"},
    {k:"h3", t:"Sexual Exploitation, Poverty and Prostitution"},
    {k:"p", t:"**Sexual exploitation and abuse** is the use of a person's body for the pleasure or profit of another – rape, defilement of a child, incest, a girl 'paid' for exam marks by a teacher, a woman hired only if she shares the man's bed, and trafficking into the sex trade."},
    {k:"bul", items:["A child cannot consent: any sexual act with a person below the age of consent is a crime, whoever says otherwise, and the 'lover' is an offender.","Warning signs of exploitation: an older person giving expensive gifts and secrecy, being taken in a car alone, being asked for photographs or to remove clothes, being told that the family will be punished or rewarded.","If it happens: say NO, get away, do not wash away the evidence, and tell a trusted adult, a teacher, the guidance counsellor or the police **the same day**; there is no shame on the victim.","**Pregnancy in school** – a girl who is with child must be cared for and, where the law allows, must be able to return to class; dropping out is what poverty and exploitation want.","**Prostitution** is the selling of sex. Most who do it are driven by **poverty** – hunger, school fees, an addict or violent partner, or debt. It brings violence, HIV and other infections, shame, and the loss of self-respect.","**Breaking the chain** – stay in school and finish; learn a skill; join a cooperative and save; refuse the quick money; report the exploiter; treat the person caught in prostitution with pity and help, not mockery.","**Where to go for help** – the police (Women and Children protections desk), the hospital or clinic (treatment and evidence), the Ministry of Gender, Children and Social Protection, a counsellor, a women's or church group, and the national child helpline."]},
    {k:"p", t:"**Poverty** is the state of not having enough for the basic needs. Poverty is not a disgrace, but it makes a family vulnerable; the answer to it is not the selling of a daughter or a body but education, work, saving, cooperative effort and honest government."}
  ],
  focus:["Categories of workers in Liberia: government, private sector, self-employed","Civil service and entrepreneurship","Types of workers: skilled and unskilled","Non-formal sector of the economy","Sexual exploitation and abuse; poverty and prostitution"],
  terms:[
    {t:"labour", d:"the work people do to produce goods and services", x:"Labour built the new road."},
    {t:"skilled worker", d:"a worker trained for a particular job", x:"A carpenter is a skilled worker."},
    {t:"unskilled worker", d:"a worker whose job needs little special training", x:"A porter is an unskilled worker."},
    {t:"civil service", d:"the body of people employed by the government", x:"Teachers in public schools are in the civil service."},
    {t:"private sector", d:"businesses owned by people or companies, not the government", x:"The bank is in the private sector."},
    {t:"self-employed", d:"working for oneself rather than for an employer", x:"A market woman is self-employed."},
    {t:"entrepreneurship", d:"starting and running one's own business", x:"Entrepreneurship creates jobs."},
    {t:"non-formal sector", d:"small unregistered businesses such as petty trading and tailoring", x:"Most Liberians work in the non-formal sector."},
    {t:"poverty", d:"the state of not having enough money for basic needs", x:"Poverty forces children out of school."},
    {t:"dignity of labour", d:"the idea that all honest work deserves respect", x:"The dignity of labour means no honest job is shameful."}
  ],
  facts:[
    {q:"Name the three categories of workers in Liberia.", a:"Government workers, private sector workers and the self-employed."},
    {q:"Give one difference between a skilled and an unskilled worker.", a:"A skilled worker has been trained for a particular trade; an unskilled worker does work needing little special training."},
    {q:"Name three skilled jobs.", a:"Any three: carpenter, mason, nurse, teacher, mechanic, tailor, electrician, driver."},
    {q:"What is the non-formal sector?", a:"The part of the economy made up of small, unregistered businesses such as petty trading, tailoring and roadside repair."},
    {q:"Why is it important to acquire a skill?", a:"A skill lets a person earn a decent living, be independent, create work for others and avoid poverty."},
    {q:"Give one effect of poverty on children.", a:"Children may drop out of school, work instead of learning, go hungry, or be exposed to exploitation and abuse."}
  ],
  tf:[
    {s:"A carpenter is a skilled worker.", a:"true", why:"Carpentry requires training and practice."},
    {s:"Only office work deserves respect.", a:"false", why:"The dignity of labour means all honest work deserves respect."},
    {s:"Market traders are part of the non-formal sector.", a:"true", why:"They run small unregistered businesses."},
    {s:"Government workers belong to the civil service.", a:"true", why:"The civil service is the body of government employees."},
    {s:"Poverty has no link with sexual exploitation.", a:"false", why:"Poverty can push young people into situations where they are exploited and abused."},
    {s:"Entrepreneurship means working for someone else.", a:"false", why:"Entrepreneurship means starting and running your own business."}
  ],
  apply:[
    {q:"A young person cannot afford university. Suggest two ways he can still earn a decent living.", a:"Learn a trade such as tailoring, masonry, mechanics or hairdressing at a vocational centre or through apprenticeship, and later start a small business of his own."},
    {q:"Why is the non-formal sector important to Liberia's economy?", a:"It employs most Liberians, supplies affordable goods and services, keeps money circulating locally, and trains young people through apprenticeship."},
    {q:"How can a community protect young girls from exploitation caused by poverty?", a:"Keep girls in school, provide skills training and small loans, run awareness programmes, and report and prosecute those who exploit children."},
    {q:"Explain the phrase 'the dignity of labour' in your own words.", a:"It means every honest job — whether sweeping, farming or teaching — is worthy of respect, because all work contributes to society."}
  ],
  sort:{ title:"Types of work",
    groups:[
      {name:"Skilled workers", items:["Nurse","Carpenter","Mechanic","Teacher","Electrician"]},
      {name:"Unskilled workers", items:["Porter","Cleaner","Farm labourer","Watchman"]},
      {name:"Government sector", items:["Civil servant","Public school teacher","Police officer"]},
      {name:"Self-employed", items:["Market woman","Tailor","Roadside mechanic","Barber"]}
    ]},
  mapwork:{ title:"Jobs in my community", caption:"List the jobs done in your community and classify each one.",
    items:[
      {p:"Farmer", f:"grows food; often self-employed and partly skilled"},
      {p:"Teacher", f:"educates children; skilled, usually a government or private employee"},
      {p:"Mason", f:"builds with blocks and cement; skilled, often self-employed"},
      {p:"Market trader", f:"buys and sells goods; self-employed in the non-formal sector"},
      {p:"Nurse", f:"cares for the sick; skilled, employed by government or a clinic"},
      {p:"Motorbike rider", f:"carries passengers; self-employed in the non-formal sector"}
    ]},
  casestudy:{ title:"Tarnue learns a trade",
    text:"Tarnue left school after Grade Nine because his family could not pay the fees. For a year he carried loads at the market for small money. Then a mason took him as an apprentice. For two years he mixed mortar and learned to lay blocks without pay, but he was fed. Today Tarnue has his own tools, builds houses in Gbarnga, and employs two young men. He says the skill changed his life.",
    questions:[
      {q:"What kind of work did Tarnue do at first, skilled or unskilled?", a:"Unskilled — he carried loads at the market."},
      {q:"How did he acquire his skill?", a:"Through an apprenticeship with a mason for two years."},
      {q:"Give two results of learning the trade.", a:"He now owns tools and builds houses for himself, and he employs two young men."}
    ]},
  project:{ title:"Career interview",
    brief:"Interview a worker in your community about their job.",
    steps:["Choose a worker: a tailor, nurse, farmer, mechanic or trader.","Prepare five questions about training, daily work, income and challenges.","Carry out the interview politely with an adult present.","Write up the answers in a report.","Present it and say whether the job is skilled or unskilled, and in which sector."],
    criteria:["Five good questions","Interview politely done","Accurate written report","Correct classification of the job","Clear presentation"]},
  activities:["Categorise labour as skilled or unskilled","Differentiate the types of workers in Liberian society","Explain the importance of acquiring a skill","Identify the contribution of the non-formal sector","Discuss poverty as a major problem"],
  materials:["Pictures of different occupations","Chart of skilled and unskilled work","Local tradespeople as resource persons"],
  assessment:["Quizzes","Interview report","Class work","Class participation","Test"]
},
{
  grade:4, period:"VI", sem:"Two", icon:"📡",
  title:"Transportation and Communication",
  subtitle:"Forms of transport and communication, traditional and modern, and gender sensitivity",
  outcomes:["Learners relate transportation and communication to economic development","Learners make appropriate use of communication devices","Learners identify the early means of transportation","Learners communicate effectively"],
  objectives:["Discuss the importance of transportation and communication","Identify the general forms of transportation and communication","Classify each form of transportation as modern or traditional","Classify each form of communication as modern or traditional","Demonstrate effective use of communication in promoting gender sensitivity"],
  note:"Transportation moves people and goods by <b>land, sea and air</b>. <b>Animal traction</b> is the use of animals to pull loads. Good transport and communication drive <b>economic development</b> by linking farms to markets and people to information.",
  study:[
    /* ---- course text: Semester Two, Period VI (guide pp. 52-53) ---- */
    {k:"h3", t:"Forms of Transportation"},
    {k:"p", t:"**Transportation** is the movement of people and goods from place to place. Its three forms follow the three media on which men move: the land, the water and the air."},
    {k:"table", head:["Form","Means used","Where it is important in Liberia"], rows:[
      ["Land","On foot, head-load, wheelbarrow, bicycle, motorbike, taxi, bus, 'speedy' minibus, lorry, tractor, truck, train (the former mining lines of Bong and Nimba)","The Broad Road and the county roads; the port and market traffic of Monrovia; farm-to-market paths"],
      ["Sea / Water","Dug-out canoe, plank boat, outboard launch, ferry, barge, coaster, ocean-going ship","The coast and the rivers: Cape Mount to Cape Palmas; the Freeport of Monrovia, Buchanan, Harper and Greenville; the canoes of Montserrado, Bomi and Grand Kru"],
      ["Air","Light aircraft, helicopter, jet airliner","Roberts International Airport (RIA) and the county airstrips; relief and emergency flights to the interior"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Categories of Transportation"},
    {k:"bul", items:["**Land** – human traction (walking, carrying, the wheelbarrow), animal traction (donkey, horse and ox cart), and mechanical traction (bicycle, motorbike, car, bus, lorry, train).","**Sea / water** – paddled and poled canoe, sail, mechanised boat, ferry, and the ship.","**Air** – aircraft of every kind; and, beyond the atmosphere, the rocket and satellite that carry mail and television signals.","**Pipelines and cables** – for water, oil and information, which are transport too."]},
    {k:"rule"},
    {k:"h3", t:"Animal Traction"},
    {k:"p", t:"**Animal traction** is the use of animals to pull a cart, a plough, a harrow or a load. In Liberia the donkey, the horse and the ox are used, more in the north and the centre than on the coast."},
    {k:"bul", items:["**Uses** – the donkey cart to carry water, charcoal, cassava, plantain, firewood, bricks and the market basket; the ox-cart for heavy loads; the horse for riding and for the carriage; animals also pull the plough and the harrow on the farm.","**Advantages** – cheap to feed and mend, works where there is no petrol, no road or no money; the manure enriches the farm; the animal is strong on the sandy and muddy path.","**Disadvantages** – slow; the animal needs rest, water, veterinary care and food; it can be sick or die; overloading and the tight harness wound the animal's shoulder; the dung and the loose animals make a street dirty."]},
    {k:"p", t:"Treat the animal kindly: never overload it, give it water and shade, rest it in the heat, and never beat it for refusing a load it cannot pull."},
    {k:"rule"},
    {k:"h3", t:"The Uses of Transportation"},
    {k:"num", items:["Carrying **people** – to school, to work, to the clinic, to the meeting, to relations and to worship.","Moving **goods** – produce to the market, imports to the interior, and firewood and water to the home.","**Emergency and relief** – the ambulance, the fire engine, the relief truck and the air-dropped food in a cut-off area.","**Production** – the tractor, the truck and the barge carry the raw material and the finished goods of the plantation, the mine and the factory.","**Defence and public order** – the movement of the security forces and of their supplies.","**Travel and sight-seeing** – the bus and ship tours, and the movement of teachers, nurses and extension agents to their stations.","**National unity** – transport welds the counties into one country: without it, each district would live in isolation."]},
    {k:"p", t:"Its costs must be counted too: money for fuel and repair, accidents, noise, the dust and smoke, the crowding of the streets, and the cutting of the forest for the road."},
    {k:"rule"},
    {k:"h3", t:"Traditional and Modern Communication"},
    {k:"table", head:["Traditional communication","Modern communication"], rows:[
      ["Town crier with bell or gong; the horn; the bell of the church and the call of the muezzin","Telephone and mobile phone; SMS; the internet and e-mail; social media; radio; television; the loudspeaker"],
      ["The talking drum, the slit-gong, the hand-drum and the rattle","Newspaper, magazine, poster, handbill, printed notice and book"],
      ["Fire, smoke, drum signals, and the beat that calls the town","Fibre optic and microwave link; wireless; satellite"],
      ["Message carried by a trusted messenger; knotted string and carved token","Post, courier, and money transfer by mobile"],
      ["Song, proverb, praise name, and the griot's history","Broadcast news, recorded video, film, and the school notice board"]
    ]},
    {k:"p", t:"**Types of communication** by the way the message is made: **verbal** (speech, song, and the written or printed word), **non-verbal** (gesture, facial expression, dress, dance, the beat of the drum, and the flag or the sign), **print** (newspapers and books), and **electronic** (radio, television, phone and internet)."},
    {k:"bul", items:["**Effective communication** is a message that is understood as it was meant: the sender is clear, short and honest; the channel is right; the receiver listens and answers.","The barriers: a foreign language, noise, a poor signal, distance, illiteracy, fear of the chief, gossip, lies, and a message that is too long.","**The media** must be free, but also responsible: a free press reports the truth and exposes wrong; it must not defame, lie, or stir people to violence."]},
    {k:"rule"},
    {k:"h3", t:"Communication and Gender Sensitivity"},
    {k:"p", t:"**Gender sensitivity** is awareness of, and fairness towards, both men and women, and the refusal to treat a person as less able because of sex."},
    {k:"bul", items:["Words, songs, advertisements, jokes and proverbs often put women down as foolish or weak, and men as men who must not cry or cook; such messages are **gender bias**.","Language that insults: calling a woman 'only a woman', or naming a girl as worthless in a proverb, teaches children to despise half the nation.","**Fair communication**: speak to girls and boys with the same respect; let girls answer first in class and lead in the club; praise girls for skill and courage, not only for beauty; give both sexes the same chores and the same chance to learn a trade.","In media and advertising: show a woman as a driver, an engineer, a chief and a farmer, and a man as a nurse, a cook and a teacher; do not use a woman's body to sell soap.","**Why it matters**: Liberia develops only when the girl educated, the market woman with a bank account and the mother with a voice at the meeting are all counted; and because it is simply just.","Practical acts for a class: agree on a no-insult rule, use both 'chairman' and 'chairlady', take turns at every duty, and choose a girl and a boy to lead each activity."]}
  ],
  focus:["Transportation by land, sea and air with examples","Categories: land (walking, animals, cars, trains), sea/water (canoe, boats, ships), air (aircraft, rockets)","Animal traction","Different uses of transportation: moving people and goods","Traditional and modern communication","Communication and gender sensitivity"],
  terms:[
    {t:"economic development", d:"the growth of a country's wealth and living standards", x:"Roads promote economic development."},
    {t:"animal traction", d:"the use of animals to pull carts or ploughs", x:"Animal traction is used in northern West Africa."},
    {t:"port", d:"a place where ships load and unload goods", x:"Buchanan is a busy port."},
    {t:"freight", d:"goods carried by transport", x:"The truck carried freight to Ganta."},
    {t:"network", d:"a system of connected roads, wires or signals", x:"The phone network reaches most counties."},
    {t:"gender sensitivity", d:"awareness of and fairness towards both men and women", x:"Gender sensitivity in messages avoids stereotypes."},
    {t:"broadcast", d:"to send out a programme by radio or television", x:"The station broadcasts news at six."},
    {t:"internet", d:"the worldwide network that links computers and phones", x:"The internet carries messages instantly."},
    {t:"infrastructure", d:"the basic roads, bridges and services a country needs", x:"Good infrastructure attracts investors."},
    {t:"telecommunication", d:"communication over a distance by phone or radio signal", x:"Telecommunication has grown fast in Liberia."}
  ],
  facts:[
    {q:"Name the three general forms of transportation.", a:"Land, sea (water) and air."},
    {q:"Give two examples of land transport.", a:"Any two: walking, bicycle, motorbike, car, bus, truck, train, animal cart."},
    {q:"What is animal traction?", a:"The use of animals such as oxen or donkeys to pull carts or ploughs."},
    {q:"Name two modern means of communication.", a:"Any two: mobile phone, radio, television, internet, email."},
    {q:"How do transportation and communication help economic development?", a:"They let farmers reach markets, allow businesses to trade, bring in investment and information, and connect services to people."},
    {q:"Name one traditional means of communication and one traditional means of transport.", a:"Communication: talking drum, town crier or smoke signal. Transport: canoe, hammock, raft or head-loading."}
  ],
  tf:[
    {s:"A ship is a means of water transportation.", a:"true", why:"Ships carry people and freight across water."},
    {s:"Animal traction means using machines to pull loads.", a:"false", why:"It means using animals such as oxen or donkeys."},
    {s:"Good roads help the economy grow.", a:"true", why:"They connect farms to markets and reduce the cost of moving goods."},
    {s:"The internet is a traditional means of communication.", a:"false", why:"It is a modern, electronic means of communication."},
    {s:"Messages on the radio should treat men and women fairly.", a:"true", why:"Gender-sensitive communication avoids stereotypes and respects everyone."},
    {s:"Buchanan and Monrovia are Liberian ports.", a:"true", why:"Both handle ships carrying freight in and out of the country."}
  ],
  apply:[
    {q:"Explain how a new bridge could change the economy of a rural town.", a:"Farmers could carry produce to market all year, traders would bring goods in, transport costs would fall, and schools, clinics and buyers would become easier to reach."},
    {q:"A radio advert says 'a good wife stays in the kitchen'. What is wrong with it and how would you rewrite it?", a:"It is gender-insensitive and stereotypes women. Rewrite: 'A good family shares the cooking and the work at home.'"},
    {q:"Why does Liberia still need both traditional and modern transport?", a:"Modern transport is fast but needs roads, fuel and money; traditional means like canoes and footpaths still reach remote places cheaply where roads have not been built."},
    {q:"Name two responsible ways to use a mobile phone.", a:"Use it to keep in touch with family and to call for help in an emergency; do not use it during class, and never send or share harmful or indecent messages."}
  ],
  sort:{ title:"Forms of transport and communication",
    groups:[
      {name:"Land transport", items:["Car","Train","Bicycle","Animal cart"]},
      {name:"Water transport", items:["Canoe","Boat","Ship","Ferry"]},
      {name:"Air transport", items:["Aircraft","Helicopter","Rocket"]},
      {name:"Traditional communication", items:["Talking drum","Town crier","Smoke signal"]},
      {name:"Modern communication", items:["Mobile phone","Television","Internet","Newspaper"]}
    ]},
  mapwork:{ title:"Liberia's transport links", caption:"On the map of Liberia, mark the following transport links and state the use of each.",
    items:[
      {p:"Roberts International Airport", f:"Liberia's main airport, at Robertsfield near Harbel"},
      {p:"Freeport of Monrovia", f:"the largest sea port, handling most imports and exports"},
      {p:"Port of Buchanan", f:"the port used mainly for exporting iron ore"},
      {p:"Monrovia–Ganta highway", f:"the main road link to the interior and to Guinea"},
      {p:"St. Paul River", f:"used by canoes for local water transport"}
    ]},
  casestudy:{ title:"The road to Sinoe",
    text:"For years the road to Greenville in Sinoe County was impassable in the rainy season. Farmers watched their plantain and palm oil rot because no truck could reach them. When the road was rebuilt with laterite and bridges, trucks began to come each week. Prices in the village rose because traders competed, and a new clinic was supplied with medicine for the first time in years.",
    questions:[
      {q:"What problem did the bad road cause the farmers?", a:"Their plantain and palm oil rotted because no truck could reach them."},
      {q:"Name two changes after the road was rebuilt.", a:"Trucks came weekly and prices rose because traders competed; the clinic was supplied with medicine."},
      {q:"What does this show about transport and development?", a:"That good transport links directly raise incomes and improve services in a community."}
    ]},
  project:{ title:"Transport survey",
    brief:"Survey the transport used in your community.",
    steps:["For one hour, count the vehicles and other transport passing a safe point.","Record each in a table under land, water or air.","Note which is most common and which is rarest.","Draw a bar chart of your results.","Write two sentences explaining why the most common type is used most."],
    criteria:["A safe counting point chosen","Accurate tally table","Correct classification","A neat bar chart","Two sensible conclusions"]},
  activities:["Discuss the importance of transportation and communication","Identify general forms of transport and communication","Classify each form as modern or traditional","Demonstrate effective communication promoting gender sensitivity","Draw and label means of transport"],
  materials:["Pictures of vehicles, ships and aircraft","Map of Liberia showing roads and ports","Radio and newspaper for media study"],
  assessment:["Quizzes","Transport survey","Class work","Class participation","Test"]
},

/* ================= GRADE 5 ================= */
{
  grade:5, period:"I", sem:"One", icon:"🗺️",
  title:"Geography of Liberia",
  subtitle:"Location, the fifteen counties, size and population, physical features and climate",
  outcomes:["Learners relate the physical features of Liberia to its socio-economic and infrastructural development"],
  objectives:["Locate Liberia on the map of West Africa and Africa","Identify the political sub-divisions of Liberia on the map","Explain the size and population of Liberia","Locate the mountains, rivers, lakes, peninsulas and capes of Liberia","Explain the difference between weather and climate"],
  note:"Liberia covers about <b>111,369 km²</b> and has a population of roughly <b>5 million</b>. It is divided into <b>15 counties</b>. Its boundaries are Guinea (north), the Atlantic Ocean (south), Sierra Leone (west) and Ivory Coast (east).",
  study:[
    /* ---- course text: Semester One, Period I (guide pp. 54-55) ---- */
    {k:"h3", t:"Location and Boundaries of Liberia"},
    {k:"p", t:"Liberia lies in **West Africa**, on the west coast of the continent, fronting the **Atlantic Ocean**. It stands a few degrees north of the equator, between about 4° and 9° north latitude and 7° and 12° west longitude."},
    {k:"bul", items:["**North** – the Republic of **Guinea**.","**South** – the **Atlantic Ocean**.","**West** – the Republic of **Sierra Leone**.","**East** – the Republic of the **Côte d'Ivoire (Ivory Coast)**."]},
    {k:"p", t:"The boundary runs partly by nature and partly by treaty: the **Mano River** with Sierra Leone, the **Cavalla (Cestos) River** and the **Mission range** with Côte d'Ivoire, the **Wologisi** and **Nimba** heights with Guinea, and straight lines marked by pillars."},
    {k:"rule"},
    {k:"h3", t:"The Counties of Liberia"},
    {k:"p", t:"Liberia is divided into **fifteen counties**. Each county has a capital, and each county elects two Senators and at least one Representative to the National Legislature."},
    {k:"table", head:["County","Capital","County","Capital"], rows:[
      ["Montserrado","Bensonville (Monrovia, the national capital, is in it)","Margibi","Kakata"],
      ["Bong","Gbarnga","Bomi","Tubmanburg"],
      ["Gbarpolu","Bopolu","Grand Cape Mount","Robertsport"],
      ["Grand Bassa","Buchanan","Grand Gedeh","Zwedru"],
      ["Nimba","Sanniquellie","Grand Kru","Barclayville"],
      ["Lofa","Voinjama","Rivercess","Cestos City"],
      ["Sinoe","Greenville","River Gee","Fish Town"],
      ["Maryland","Harper","",""]
    ]},
    {k:"bul", items:["**Montserrado** is the smallest county in area but by far the most populous, for the capital stands in it.","**Nimba** and **Bong** are among the largest counties and hold great farm land and mineral wealth.","**Grand Kru, River Gee, Gbarpolu** and **Rivercess** are the newest counties, carved out of the older ones so that government could come nearer to the people."]},
    {k:"rule"},
    {k:"h3", t:"Size and Population"},
    {k:"bul", items:["**Area** – about **111,369 square kilometres**, a little larger than England or the Republic of Georgia.","**Population** – roughly **five million** people; the national census counts the people and their homes so that the schools, clinics and counties can be planned.","**Population density** – the number of persons to each square kilometre; **Montserrado** has the highest density and the forest counties the lowest.","**Distribution** – people crowd the capital, the coast, the port towns and the county capitals; the interior forest country is thin of people.","**Growth** – the population grows because births are many, and because country people move to the towns (urbanisation) and refugees and migrants arrive from the neighbours."]},
    {k:"p", t:"Liberia's people are young: half of them are under eighteen, which is why the school, the youth and the child-protection agencies matter so much to national planning."},
    {k:"rule"},
    {k:"h3", t:"Mountains, Rivers, Lakes, Capes, Islands and Peninsulas"},
    {k:"bul", items:["**Mountains** – Mount Wuteveh (Woléwari), the Bong range, Mount Nimba, Mount Gedeh, the Wologisi and the Putu range; the land rises in steps from the coast to the Guinea and Côte d'Ivoire borders.","**Rivers** – all falling south-west to the sea and cut by rapids: **Mano, Morro, Lofa, St. Paul, St. John, Farmington, Cestos, Cavalla** and **Sinoe**.","**Lakes and lagoons** – **Lake Piso** in Grand Cape Mount, with long coastal lagoons and marsh behind the beach.","**Capes** – **Cape Mount, Cape Mesurado, Cape St. Paul** and **Cape Palmas**.","**Peninsulas and islands** – **Bushrod Island**, joined to Monrovia by a causeway, and the small islands of the St. Paul and the St. John.","**Vegetation** – **rain forest** over nearly half the country (the largest surviving block in West Africa), with **mangrove swamp** on the coast, **savanna grassland** in the far north, and **secondary bush** on the old farms."]},
    {k:"rule"},
    {k:"h3", t:"Climate, Seasons and Industry"},
    {k:"table", head:["Feature","What it is in Liberia"], rows:[
      ["Climate","Hot and wet tropical (equatorial), with two seasons"],
      ["Rainy season","About May to October; the heaviest rain in June, July, August and September"],
      ["Dry season","About November to April, with the dusty harmattan in December and January"],
      ["Agriculture","Rice, cassava, plantain, vegetable, sugarcane; cacao, coffee, oil palm and rubber for sale"],
      ["Mining","Iron ore (Bong, Nimba), gold and diamonds (Lofa, Gbarpolu, the south-east)"],
      ["Manufacturing","Rubber processing, palm-oil mills, cement, bottling, soap, flour and rice milling, furniture and garment shops"]
    ]},
    {k:"p", t:"**Difference between weather and climate**: weather is the state of the air on one day in one place – it may rain this morning and be sunny by noon; climate is the average condition of the weather over many years, and it does not change from day to day. We dress for the weather; we plan the farm, the roof and the crop for the climate."}
  ],
  focus:["Location and boundaries of Liberia","The counties of Liberia: Montserrado, Grand Bassa, Sinoe, Maryland, Bong, Cape Mount, Nimba, Grand Gedeh, Lofa, Grand Kru, Rivercess, Margibi, Bomi, Gbarpolu, River Gee","Size and population","Mountains, rivers, lakes, peninsulas and capes","Difference between weather and climate"],
  terms:[
    {t:"political sub-division", d:"an administrative part of a country such as a county", x:"A county is a political sub-division."},
    {t:"population", d:"the total number of people living in a place", x:"Liberia's population is about five million."},
    {t:"population density", d:"the number of people living in each square kilometre", x:"Montserrado has the highest population density."},
    {t:"peninsula", d:"land almost surrounded by water", x:"The Bushrod Island area lies near a peninsula."},
    {t:"cape", d:"land that juts out into the sea", x:"Cape Palmas is in Maryland County."},
    {t:"weather", d:"the state of the air on a given day", x:"The weather today is rainy."},
    {t:"climate", d:"the average weather of a place over many years", x:"Liberia has a tropical climate."},
    {t:"tropical", d:"belonging to the hot region near the equator", x:"Liberia has a tropical rain forest climate."},
    {t:"infrastructure", d:"roads, bridges, ports and other basic facilities", x:"Infrastructure supports development."},
    {t:"square kilometre", d:"a unit for measuring the area of land", x:"Liberia covers 111,369 square kilometres."}
  ],
  facts:[
    {q:"How many counties does Liberia have and name any five.", a:"Fifteen. Any five: Montserrado, Bong, Nimba, Grand Bassa, Lofa, Maryland, Sinoe, Grand Gedeh, Margibi, Bomi, Grand Cape Mount, Grand Kru, Rivercess, Gbarpolu, River Gee."},
    {q:"What is the approximate area of Liberia?", a:"About 111,369 square kilometres."},
    {q:"Give one difference between weather and climate.", a:"Weather is the state of the air on a given day; climate is the average weather over many years."},
    {q:"Which is the most populous county of Liberia?", a:"Montserrado County, which contains Monrovia."},
    {q:"Name two capes of Liberia.", a:"Cape Mount and Cape Palmas (also Cape Mesurado)."},
    {q:"Which two counties were created most recently?", a:"Gbarpolu and River Gee."}
  ],
  tf:[
    {s:"Liberia has fifteen counties.", a:"true", why:"The country is divided into 15 counties."},
    {s:"Climate is the same as the weather on a single day.", a:"false", why:"Climate is the average pattern over many years."},
    {s:"Montserrado County contains the capital city.", a:"true", why:"Monrovia, the capital, is in Montserrado."},
    {s:"Liberia lies south of the equator.", a:"false", why:"Liberia lies north of the equator, in the northern hemisphere."},
    {s:"Cape Palmas is found in Maryland County.", a:"true", why:"It is at the far south-east near Harper."},
    {s:"Physical features have no effect on where roads are built.", a:"false", why:"Rivers, mountains and swamps determine where roads and bridges can go and how much they cost."}
  ],
  apply:[
    {q:"Why is Montserrado County the most densely populated?", a:"Because Monrovia is there with the seat of government, the main port, most jobs, the best schools and hospitals, so people migrate there."},
    {q:"How do Liberia's rivers affect the building of roads?", a:"Every river crossing needs a bridge or ferry, which is costly; so roads follow easier routes and remote areas are cut off in the rains."},
    {q:"Explain how climate shapes Liberia's agriculture.", a:"Heavy tropical rainfall and warm temperatures suit rice, cassava, rubber, oil palm and cocoa; but the long rainy season limits harvesting, drying and transport."},
    {q:"Why is knowing the population important for the government?", a:"To plan schools, clinics, roads and water supply, to share the national budget fairly, and to fix the number of representatives per district."}
  ],
  sort:{ title:"Counties, features and climate terms",
    groups:[
      {name:"Coastal counties", items:["Montserrado","Grand Bassa","Sinoe","Maryland","Grand Kru"]},
      {name:"Interior counties", items:["Bong","Nimba","Lofa","Grand Gedeh","Gbarpolu"]},
      {name:"Physical features", items:["Mt. Nimba","Lake Piso","Cape Palmas","St. Paul River"]},
      {name:"Climate words", items:["Tropical","Rainy season","Dry season","Harmattan"]}
    ]},
  mapwork:{ title:"The fifteen counties", caption:"On the map of Liberia, label each county and write its capital.",
    items:[
      {p:"Montserrado", f:"capital Bensonville; includes Monrovia"},
      {p:"Bong", f:"capital Gbarnga"},
      {p:"Nimba", f:"capital Sanniquellie"},
      {p:"Lofa", f:"capital Voinjama"},
      {p:"Grand Bassa", f:"capital Buchanan"},
      {p:"Maryland", f:"capital Harper"},
      {p:"Sinoe", f:"capital Greenville"},
      {p:"Grand Cape Mount", f:"capital Robertsport"}
    ]},
  casestudy:{ title:"Why the road to Voinjama is hard to build",
    text:"An engineer explained why the road from Gbarnga to Voinjama costs so much. The route crosses three large rivers, so three bridges are needed. It also passes over hills where heavy rain washes away the surface each year. In the rainy season, from May to October, work must stop altogether. He said the physical features and the climate of Liberia are the greatest challenge to building infrastructure.",
    questions:[
      {q:"Name two physical challenges the road faces.", a:"Three large rivers that need bridges, and hills where rain washes away the surface."},
      {q:"Why must work stop between May and October?", a:"Because that is the rainy season, when heavy rain makes construction impossible."},
      {q:"What does the engineer say is the greatest challenge to infrastructure?", a:"The physical features and the climate of Liberia."}
    ]},
  project:{ title:"County profile",
    brief:"Build a data profile of one Liberian county.",
    steps:["Choose one of the fifteen counties.","Find its capital, approximate population and area.","List two physical features found there.","List two economic activities carried on there.","Draw the county on a map and present your profile."],
    criteria:["Correct capital","Population and area given","Two physical features","Two economic activities","A neat county map"]},
  activities:["Locate Liberia on the map of West Africa and Africa","Identify the political sub-divisions on the map","Explain the size and population of Liberia","Locate mountains, rivers, lakes, peninsulas and capes","Explain the difference between weather and climate"],
  materials:["Map of Liberia showing counties","Physical map and atlas","Population data chart"],
  assessment:["Quizzes","Map work","County profile","Class participation","Test"]
},
{
  grade:5, period:"II", sem:"One", icon:"🚶",
  title:"Migration of People to Liberia",
  subtitle:"The sixteen ethnic groups, ancient West African empires, causes of migration and later migrants",
  outcomes:["Learners trace their origins and appreciate the contributions of each ethnic group of Liberia"],
  objectives:["Name the sixteen major ethnic groups of Liberia","Locate the origins of the early ethnic groups on the map of Africa","Explain why the early ethnic groups migrated to Liberia","List the origins of the second ethnic group","Explain the formation and function of the American Colonization Society","Outline the contributions made by each ethnic group"],
  note:"Many early groups moved south from the three great <b>ancient West African empires — Ghana, Mali and Songhai</b>. The chief <b>causes of migration</b> were <b>wars, religion, drought and pestilence</b>. Later came freed slaves from the Americas and the West Indies, and recaptured Africans.",
  study:[
    /* ---- course text: Semester One, Period II (guide pp. 56-57) ---- */
    {k:"h3", t:"Early Migrants and the Sixteen Ethnic Groups"},
    {k:"p", t:"**Migration** is the movement of people from one place to settle in another. The ancestors of the sixteen major ethnic groups of Liberia reached their present homes by slow migration over many centuries, and each group still tells, in its **oral tradition**, the name of the place it left and the chief who led it out."},
    {k:"bul", items:["The **Mande** speaking peoples – Kpelle, Loma, Mano, Gio (Dan), Mende, Gbandi, Kissi, Bassa and Mandingo – came from the north and north-east, out of the old Mande country of the upper Niger.","The **Kru** and Kwa speaking peoples – Kru, Grebo and Krahn – moved south to the forest coast, and the Kru became the **sea-faring folk** of the shore from Sinoe to Cape Palmas.","The **Mel (West Atlantic)** peoples – Gola, Vai and Dei – hold the coast and the north-west, and the Gola are remembered as among the earliest of all on this shore."]},
    {k:"rule"},
    {k:"h3", t:"The Three Ancient West African Empires"},
    {k:"p", t:"The migrations that peopled Liberia began in the country of the great **Sudan** empires, whose rise and fall moved whole peoples."},
    {k:"table", head:["Empire","Seat and period","Its fame","Its fall"], rows:[
      ["Ghana (Wagadu)","Between the Senegal and Niger rivers; flourished about the 4th to 11th centuries","Gold and salt trade across the Sahara; an army of 200,000; justice and taxes on every load that entered","Broken in the 11th century by the Almoravids and by revolt; its people scattered south"],
      ["Mali","Upper Niger; 13th to 15th centuries","Sundiata Keita; Timbuktu, its mosques and its learning; Mansa Musa's golden pilgrimage to Mecca","Civil war, and the rise of her vassal states; the Tuareg took Timbuktu"],
      ["Songhai","The middle Niger, 15th to 16th centuries","Askia Muhammad; a strong army, a provincial system, canoes on the Niger, trade in salt, gold, kola and slaves","Defeated in 1591 at Tondibi by the gunpowder army of Morocco; the land broke up into warring states"]
    ]},
    {k:"p", t:"When these states fell, when tribute and war pressed on them, and when the slave raiders came for captives, the small peoples took their families, their seed and their iron and walked south into the forest country – the land that became Liberia."},
    {k:"rule"},
    {k:"h3", t:"Causes of Migration"},
    {k:"num", items:["**Wars and raiding** – conquest, the demand for tribute, and the capture of men for the slave trade drove peoples out of the savannah.","**Religion** – the spread of Islam among the Mande states, and the refusal of some peoples to accept it, pushed migrations; others fled the religious wars, and Muslim traders carried their faith into new towns.","**Drought and the failure of the rains** – in the Sahel and the savannah a long drought kills the cattle and the millet, and living men must move to the land of rain.","**Pestilence** – epidemics of smallpox, sleeping sickness and rinderpest emptied villages, and survivors went to find healthy ground.","**The search for land, salt, iron, gold and kola**, and for a place to farm without paying tribute to a king.","**Overflowing population** and the quarrels of chiefs, which sent out a young people to found a new town under a new chief."]},
    {k:"rule"},
    {k:"h3", t:"Later Migrants"},
    {k:"bul", items:["**Freed slaves from the Americas** – Black people emancipated in the United States, sent out by the **American Colonization Society** from **1822**, who founded Monrovia and the coastal stations; they are called **settlers**, **Americo-Liberians** or **Liberians of American descent**.","**Recaptured slaves (Recaptured Africans)** – persons freed at sea by American and British ships from slave vessels after the trade was outlawed in 1808/1820; thousands were landed in Monrovia and the stations and settled in villages along the coast; many were from Yoruba, Congo, Igbo and Angola.","**Freed slaves from the West Indies and Central America** – persons from Jamaica, the Bahamas, Barbados and other islands, who crossed the Atlantic to escape the colour bars of the colonies and to build a free republic of their own.","**Barbadian and other Caribbean labourers**, and later **Kru, Grebo and Mandinka** seamen, who came to work the plantations, the port and the mines."]},
    {k:"p", t:"Each of these groups brought something: the settler brought English, the church, the school, the printed constitution and the coat; the recaptured African brought the trades of the coast towns; the Caribbean brought cane work and seamanship; and the indigenous peoples brought the rice, the iron, the cloth, the medicine of the forest and the law of the town meeting."},
    {k:"rule"},
    {k:"h3", t:"The American Colonization Society and Its Work"},
    {k:"p", t:"The **American Colonization Society (ACS)** was founded in **1816** at Washington to settle free Black people of the United States on the coast of Africa. Its managers included **Bushrod Washington**, **Rev. Robert Finley** and **Elijah Caldwell**, with **Rev. Ralph R. Gurley** as its long-serving agent."},
    {k:"bul", items:["**1821** – the agent **Dr. Eli Ayres** and Lieutenant **Robert F. Stockton** of the U.S. Navy buy **Cape Mesurado** from the Gola chiefs.","**1822** – the *Elizabeth Stockton* brings the first settlers, who land at **Providence Island**; **Monrovia** is founded at Cape Mesurado in 1824 and named for President James Monroe.","**1834-1839** – the stations of **Maryland (Harper)**, **Sinoe (Greenville)**, **Bassa (Buchanan)** and **Cape Palmas** are settled, and in 1839 they are united as the **Commonwealth of Liberia** under a Governor appointed by the Society.","**26 July 1847** – the **Declaration of Independence** is signed and the **Republic of Liberia** is proclaimed; **Joseph Jenkins Roberts**, a free man of colour from Norfolk, Virginia, becomes its first President in 1848.","Liberia's **heritage** from this founding – the flag, the constitution, the English language, the counties and the Christian schools – was mixed with the older heritage of the sixteen peoples, and out of both one nation grew."]},
    {k:"p", t:"**Assimilation** – the blending of the groups into one culture – was helped by intermarriage, by the common school, by the one national language, and by the fact that settler, recaptured African and indigenous child now sit in the same class and sing the same anthem."}
  ],
  focus:["Early migrants and the sixteen major ethnic groups","Origins of the early migrants","The three ancient West African empires: Ghana, Mali, Songhai","Causes of migration: wars, religion, drought, pestilence","Later migrants: freed slaves from the Americas, recaptured slaves, freed slaves from the West Indies","The American Colonization Society"],
  terms:[
    {t:"empire", d:"a large state ruling many peoples under one ruler", x:"The Mali Empire was rich in gold."},
    {t:"Ghana Empire", d:"the earliest of the three great West African empires", x:"The Ghana Empire traded gold and salt."},
    {t:"Mali Empire", d:"the empire of Sundiata and Mansa Musa", x:"The Mali Empire reached its height in the 14th century."},
    {t:"Songhai Empire", d:"the last of the three great West African empires, centred on Gao", x:"The Songhai Empire fell in 1591."},
    {t:"pestilence", d:"a deadly epidemic disease", x:"Pestilence drove people from their homes."},
    {t:"drought", d:"a long period of too little rain", x:"Drought caused migration southward."},
    {t:"recaptured African", d:"an African freed from a slave ship and resettled", x:"Recaptured Africans were landed in Liberia."},
    {t:"assimilation", d:"the blending of one group into another's culture", x:"Assimilation happened through marriage and trade."},
    {t:"oral tradition", d:"history passed down by word of mouth", x:"Oral tradition records the migration."},
    {t:"heritage", d:"the traditions and history handed down from the past", x:"Every group adds to Liberia's heritage."}
  ],
  facts:[
    {q:"Name the three ancient West African empires.", a:"Ghana, Mali and Songhai."},
    {q:"List four causes of migration to Liberia.", a:"Wars, religion, drought and pestilence."},
    {q:"How many major ethnic groups does Liberia have?", a:"Sixteen."},
    {q:"Name the three groups of later migrants.", a:"Freed slaves from the Americas, recaptured slaves, and freed slaves from the West Indies."},
    {q:"When and why was the American Colonization Society formed?", a:"In 1816, to settle free and freed black people from the United States in Africa."},
    {q:"Which Liberian group has its own writing script?", a:"The Vai, who created the Vai syllabary."}
  ],
  tf:[
    {s:"The Mali Empire was one of the three ancient West African empires.", a:"true", why:"Ghana, Mali and Songhai were the three great empires."},
    {s:"Drought was one cause of migration into Liberia.", a:"false", why:"Drought WAS in fact a cause — along with wars, religion and pestilence."},
    {s:"Recaptured Africans were people freed from slave ships.", a:"true", why:"They were rescued at sea and resettled, some in Liberia."},
    {s:"All sixteen ethnic groups arrived at exactly the same time.", a:"false", why:"They migrated in different waves over several centuries."},
    {s:"The ACS was formed in 1816.", a:"true", why:"It was founded in Washington in that year."},
    {s:"Ethnic groups made no contribution to Liberian society.", a:"false", why:"Each contributed language, crafts, farming, trade, music and leadership."}
  ],
  apply:[
    {q:"Explain how the fall of an empire could cause migration.", a:"When an empire collapsed, war, raiding and insecurity followed; people fled south in search of safety, land and food, which is how many groups reached Liberia."},
    {q:"Give two contributions of the settlers to Liberia.", a:"They introduced Western education and the church, established the republic and its Constitution, and developed Monrovia and coastal trade."},
    {q:"Give two contributions of the indigenous groups to Liberia.", a:"They provided the land, languages and cultures of the nation, developed farming, fishing, weaving and iron working, and built the trade networks the country still uses."},
    {q:"Why should Liberians study the migration history of their country?", a:"To understand that all groups came at different times and belong equally, which reduces prejudice and builds national unity."}
  ],
  sort:{ title:"Migration to Liberia",
    groups:[
      {name:"Ancient empires", items:["Ghana","Mali","Songhai"]},
      {name:"Causes of migration", items:["Wars","Religion","Drought","Pestilence"]},
      {name:"Early migrants", items:["Kpelle","Bassa","Vai","Gola","Kru"]},
      {name:"Later migrants", items:["Freed slaves from America","Recaptured Africans","Freed slaves from the West Indies"]}
    ]},
  mapwork:{ title:"Migration routes into Liberia", caption:"On the map of Africa, draw arrows showing the movement of peoples into Liberia and label each source.",
    items:[
      {p:"Western Sudan (Ghana, Mali, Songhai)", f:"the empires from which many Mande groups moved south"},
      {p:"Ivory Coast side", f:"route of Kru-speaking groups moving west along the coast"},
      {p:"Guinea highlands", f:"route of Mande groups such as Kpelle, Mandingo and Gio"},
      {p:"North America", f:"origin of the free men of colour who came from 1822"},
      {p:"The West Indies", f:"origin of the Barbadian and other Caribbean settlers"},
      {p:"Slave ships at sea", f:"origin of the recaptured Africans landed in Liberia"}
    ]},
  casestudy:{ title:"The Congo Town name",
    text:"A community near Monrovia is called Congo Town. Its name comes from the 'Congoes' — Africans recaptured from slave ships by naval patrols in the 1800s and landed in Liberia. They were settled on land near the capital. Over time they mixed with settlers and indigenous people through marriage, trade and church. Today the name is all that recalls their separate origin.",
    questions:[
      {q:"Who were the 'Congoes'?", a:"Africans recaptured from slave ships by naval patrols and landed in Liberia."},
      {q:"Where were they settled?", a:"On land near Monrovia, in the area now called Congo Town."},
      {q:"How did they become part of Liberian society?", a:"They mixed with settlers and indigenous people through marriage, trade and church."}
    ]},
  project:{ title:"Migration story",
    brief:"Record a migration story from your own family or community.",
    steps:["Ask an elder where your family or ethnic group came from.","Write down the route and the reason for the move.","Find out one custom the group brought with it.","Draw the route on a map of Liberia or Africa.","Present the story and say what the group contributed."],
    criteria:["A real story recorded","Route and reason given","One custom described","A clear route map","A contribution identified"]},
  activities:["Name the sixteen major ethnic groups","Locate the origins of the early groups on the map of Africa","Explain why the early groups migrated","Explain the formation and function of the ACS","Outline the contributions of each ethnic group"],
  materials:["Map of Africa showing the ancient empires","Ethnic map of Liberia","Pictures of cultural artefacts"],
  assessment:["Quizzes","Map work","Migration story","Class participation","Test"]
},
{
  grade:5, period:"III", sem:"One", icon:"⚖️",
  title:"Systems of Government",
  subtitle:"The three branches, separation of powers, national emblems and citizenship",
  outcomes:["Learners develop and exhibit a sense of nationalism and patriotism"],
  objectives:["Identify the three branches of Government","Explain the functions of each branch","Describe the concept of Separation of Powers","Identify the national emblems of the Republic of Liberia","Explain the rights of citizens as prescribed by the Constitution"],
  note:"<b>Separation of Powers</b> means the three branches are kept apart so no one branch becomes too strong. <b>Checks and balances</b> let each branch limit the others. Liberia's national emblems include the <b>Flag, Coat of Arms, National Anthem, Lone Star</b> and the <b>Pledge of Allegiance</b>.",
  study:[
    /* ---- course text: Semester One, Period III (guide pp. 58-59) ---- */
    {k:"h3", t:"The Structure of the Liberian Government"},
    {k:"p", t:"The sovereignty of Liberia resides in the people, from whom, through the Constitution, the government derives its just powers. The government has three branches."},
    {k:"table", head:["Branch","Composed of","Its principal work"], rows:[
      ["The Legislature (the National Assembly)","The Senate (two Senators from each of the fifteen counties) and the House of Representatives (elected from the districts)","Makes the laws; passes the national budget; approves treaties and the President's principal appointments; confirms the counties' representation; may impeach an officer"],
      ["The Executive","The President, the Vice President, the Cabinet of Ministers and the departments","Carries out and enforces the laws; commands the armed forces; conducts foreign relations; appoints officers, Superintendents and judges (with Senate consent); may sign or veto a bill"],
      ["The Judiciary","The Supreme Court (Chief Justice and Justices), Circuit Courts, Magisterial and specialised courts","Interprets the laws; tries cases; and may declare a law or an act unconstitutional – this is the power that guards the Constitution"]
    ]},
    {k:"p", t:"The President is elected by the people for a **six-year term**, with a limit of **two terms**; the voting is by secret ballot and the results are declared by the National Elections Commission."},
    {k:"rule"},
    {k:"h3", t:"The Concept of the Separation of Powers"},
    {k:"p", t:"**Separation of powers** means that making the law, carrying out the law and judging under the law are given to three different bodies, and that the same person must not hold power in all three at once. Where all the power is gathered into one hand, that hand becomes a tyrant's."},
    {k:"bul", items:["The Legislature debates the law in open assembly, so that the will of the people is discussed, amended and recorded.","The Executive must administer the law made by others, and cannot simply invent the rule it enforces.","The judge must decide under the law and not under orders from the President or from a mob.","Officers are accountable: a minister answers the questions of the House, and a judge may be removed for misbehavior."]},
    {k:"rule"},
    {k:"h3", t:"Checks and Balances"},
    {k:"p", t:"**Checks and balances** are the powers that let each branch limit the other two, so that none becomes too strong."},
    {k:"table", head:["Check","Who exercises it","On whom"], rows:[
      ["Veto of a bill","The President","The Legislature"],
      ["Override of a veto; passing the budget; approval of appointments and treaties; impeachment","The Legislature (Senate and House)","The President and the Executive"],
      ["Judicial review – declaring a law or act unconstitutional","The Supreme Court","The Legislature and the Executive"],
      ["Appointment of judges, ministers and Superintendents","The President, with the consent of the Senate","The Judiciary and the Executive"],
      ["Impeachment and trial of a President, Vice President or judge","The House impeaches; the Senate tries, the Chief Justice presiding over a presidential trial","Any high officer"],
      ["Free elections, a free press and the right to petition","The people themselves","Every branch"]
    ]},
    {k:"p", t:"A pupil meets the same principle in the class: the class makes its own rules, the monitor carries them out, and the teacher hears the appeal – no one person does all three."},
    {k:"rule"},
    {k:"h3", t:"The National Emblems"},
    {k:"bul", items:["**The Flag (the Lone Star flag)** – eleven red and white stripes for the eleven signers of the Declaration of Independence; the blue square for Africa; the single white five-pointed **Lone Star** for the liberty of the republic and for the first independent state in Africa. Red stands for courage, white for purity and peace.","**The Coat of Arms** – a sailing ship (the fathers arriving from America), a plough and spade (agriculture and honest labour), a palm tree (peace, plenty and uprightness), and above them a dove carrying a scroll with the motto ‘**The love of liberty brought us here**’. The stars and the green and gold of the border recall the land and the heavens of Liberia.","**The National Anthem** – ‘All Hail, Liberia, Hail’, sung at the raising of the flag, at school assembly and on public holidays; the words honour the fathers who won the land and the mothers who built the home.","**The Lone Star** – the emblem of the freedom for which Liberia was founded; it gives the flag and the country their common name.","**The Pledge of Allegiance** – said with the right hand on the chest in front of the flag, promising loyalty to the flag and to the republic for which it stands.","**The national motto and the seal of the county and of the court** complete the emblems that appear on public documents."]},
    {k:"p", t:"How emblems are treated shows the character of a citizen: the flag is hoisted briskly at sunrise and lowered with ceremony before dark, never allowed to touch the ground, never flown torn, and honoured with silence and a covered head."},
    {k:"rule"},
    {k:"h3", t:"Citizenship"},
    {k:"p", t:"A **citizen** is a legally recognised member of a nation, owing allegiance to it and holding its rights and duties. The Constitution reserves some offices – above all the Presidency – to citizens by origin."},
    {k:"bul", items:["**Who is a citizen** – a person born in Liberia of a Black father or mother; a person born abroad to Liberian parents; and a foreigner of the Negro race or of the Black race who is lawfully **naturalised** after the years the law requires and the renunciation of his former allegiance.","**Rights of a citizen** – to live free in the country, to own land, to vote at eighteen, to stand for office, to a fair trial, to education, to work, to travel and to carry a passport, and to the protection of the state abroad.","**Duties of a citizen** – to obey the law, to pay taxes, to defend the country, to respect the rights and property of others, to vote knowingly, to keep public property clean, to serve on a jury or in a town office when called, and to promote unity and peace.","**Documents** – the birth certificate, the national identity card, the voter card and the passport: a citizen keeps them and shows them when the law asks.","**Dual questions** – a citizen who acquires another citizenship by his own act may lose the Liberian one; and a resident who is not a citizen still holds human rights, though not the political ones."]},
    {k:"p", t:"Patriotism is not words only: the pupil who is honest in an examination, who pays the market fee, who does not cut a classmate's tree and who defends a child being bullied is practising the citizenship the Constitution asks for."}
  ],
  focus:["Structure of the Liberian Government: Legislature, Judiciary, Executive","Concept of the Separation of Powers","Checks and balances","The National Emblems: the Flag, Coat of Arms, National Anthem, the Lone Star, the Pledge of Allegiance","Citizenship"],
  terms:[
    {t:"separation of powers", d:"keeping the three branches of government apart so none is too strong", x:"Separation of powers protects democracy."},
    {t:"checks and balances", d:"the ways each branch limits the power of the others", x:"Checks and balances stop abuse of power."},
    {t:"veto", d:"the President's power to reject a bill passed by the Legislature", x:"The President used his veto."},
    {t:"impeachment", d:"the process of charging and removing an official for wrongdoing", x:"The Legislature has the power of impeachment."},
    {t:"citizenship", d:"the status of being a full member of a country", x:"Citizenship brings rights and duties."},
    {t:"coat of arms", d:"the official emblem showing a nation's history and values", x:"The Coat of Arms shows a ship and a plough."},
    {t:"emblem", d:"an object or design that stands for a country", x:"The Lone Star is our best-known emblem."},
    {t:"pledge of allegiance", d:"a promise of loyalty to one's country", x:"We recite the Pledge of Allegiance at assembly."},
    {t:"democracy", d:"government by the people through elected representatives", x:"In a democracy the people choose their leaders."},
    {t:"constitution", d:"the supreme law setting out how a country is governed", x:"The Constitution defines the three branches."}
  ],
  facts:[
    {q:"Name the three branches of the Liberian government and their functions.", a:"Legislature — makes the laws; Executive — carries out the laws; Judiciary — interprets the laws and settles cases."},
    {q:"What is meant by separation of powers?", a:"Dividing government into three branches so that no single branch holds all the power."},
    {q:"Give one example of a check and balance in Liberia.", a:"The President can veto a bill; the Legislature can override the veto or impeach officials; the Supreme Court can declare a law unconstitutional."},
    {q:"Name four national emblems of Liberia.", a:"The Flag, the Coat of Arms, the National Anthem, the Lone Star, and the Pledge of Allegiance."},
    {q:"What does the Coat of Arms of Liberia show?", a:"A ship approaching the coast, a plough and a spade, a palm tree, a dove with a scroll, and the motto 'The Love of Liberty Brought Us Here'."},
    {q:"Name two rights of a Liberian citizen under the Constitution.", a:"Any two: the right to life, to free speech, to worship, to education, to own property, to a fair trial, and to vote."}
  ],
  tf:[
    {s:"The Judiciary makes the laws of Liberia.", a:"false", why:"The Legislature makes the laws; the Judiciary interprets them."},
    {s:"The motto of Liberia is 'The Love of Liberty Brought Us Here'.", a:"true", why:"It appears on the Coat of Arms."},
    {s:"Checks and balances allow one branch to limit another.", a:"true", why:"That is exactly their purpose."},
    {s:"Only the President can be impeached in Liberia.", a:"false", why:"Other officials, including judges, may also be impeached."},
    {s:"Citizens have duties as well as rights.", a:"true", why:"Citizens must obey the law, pay taxes and defend the nation."},
    {s:"The Lone Star flag has thirteen stripes.", a:"false", why:"The Liberian flag has eleven stripes, for the eleven signers of the Declaration of Independence."}
  ],
  apply:[
    {q:"Why would it be dangerous if one person controlled all three branches of government?", a:"He could make any law he liked, enforce it as he pleased and judge his own case; citizens would have no protection from abuse and no way to remove him."},
    {q:"The Legislature passes a law the President disagrees with. What can he do, and what can they do next?", a:"He can veto it. The Legislature can then override the veto by a two-thirds vote in both houses, and the law stands."},
    {q:"How can a young person show patriotism apart from singing the anthem?", a:"By studying hard, obeying the law, keeping the environment clean, respecting others, paying taxes later in life, and serving the community."},
    {q:"Why does a country need a Constitution?", a:"It sets out how power is divided, protects the rights of citizens, and provides a supreme standard against which all other laws are measured."}
  ],
  sort:{ title:"Branches, powers and emblems",
    groups:[
      {name:"Legislature", items:["Senate","House of Representatives","Passes bills","Approves the budget"]},
      {name:"Executive", items:["President","Vice President","Cabinet ministers","Enforces the law"]},
      {name:"Judiciary", items:["Supreme Court","Circuit courts","Interprets the Constitution"]},
      {name:"National emblems", items:["The Flag","Coat of Arms","National Anthem","Pledge of Allegiance"]}
    ]},
  mapwork:{ title:"The Liberian Coat of Arms", caption:"Draw the Coat of Arms and explain what each symbol means.",
    items:[
      {p:"The ship", f:"the vessel that brought the settlers to Liberia"},
      {p:"The plough and spade", f:"the dignity of labour and the value of agriculture"},
      {p:"The palm tree", f:"the natural wealth and produce of the land"},
      {p:"The dove with a scroll", f:"peace and the message of freedom"},
      {p:"The rising sun", f:"the birth of a new nation"},
      {p:"The motto", f:"'The Love of Liberty Brought Us Here'"}
    ]},
  casestudy:{ title:"A bill becomes a law",
    text:"A senator from Nimba proposed a bill to protect the forest. The bill was debated in the Senate and passed, then sent to the House of Representatives, where it was amended and passed again. It went to the President, who signed it. A logging company later argued the law was unconstitutional, and the Supreme Court heard the case and upheld the law. Each of the three branches had played its part.",
    questions:[
      {q:"Which branch debated and passed the bill?", a:"The Legislature — first the Senate, then the House of Representatives."},
      {q:"What did the President do?", a:"He signed the bill into law, acting as head of the Executive."},
      {q:"What was the role of the Supreme Court?", a:"It heard the challenge and interpreted the Constitution, upholding the law."}
    ]},
  project:{ title:"Constitution poster",
    brief:"Make a poster explaining the three branches to younger pupils.",
    steps:["Draw three boxes, one for each branch.","In each box write the branch's name, who leads it and its main function.","Draw arrows showing one check each branch has over another.","Add the national motto at the top.","Present the poster to a Grade Three class."],
    criteria:["All three branches correct","Leader and function stated","At least two checks shown","Motto included","Clear presentation to younger pupils"]},
  activities:["Identify the three branches of government","Explain the functions of each branch","Describe the concept of separation of powers","Identify the national emblems","Explain the rights of citizens under the Constitution","Role play a court case or legislative debate"],
  materials:["Chart of the three branches","Copy of the Constitution","Pictures of the Flag and Coat of Arms","Copy of the National Anthem and Pledge"],
  assessment:["Quizzes","Poster task","Role play","Class participation","Test"]
},
{
  grade:5, period:"IV", sem:"Two", icon:"🕊️",
  title:"Basic Rights",
  subtitle:"Fundamental rights, freedoms, the rights of the child and of people living with HIV",
  outcomes:["Learners uphold the principles of fundamental rights and advocate for the disabled and those living with HIV/AIDS","Learners make informed choices or decisions about sexuality"],
  objectives:["List the Basic and Fundamental Rights as defined by the Constitution","Explain the concept of freedom of speech, thought and religion","Describe the rights of the child","Analyse the importance of children's involvement in decision-making as a right"],
  note:"<b>Fundamental rights</b> belong to every person and cannot be taken away — life, liberty, speech, thought, religion, education and a fair trial. The <b>Convention on the Rights of the Child</b> guarantees survival, development, protection and participation for every child.",
  study:[
    /* ---- course text: Semester Two, Period IV (guide pp. 60-61) ---- */
    {k:"h3", t:"Fundamental Rights and Basic Freedoms"},
    {k:"p", t:"**Fundamental rights** are the rights which belong to every person because he is human, and which the Bill of Rights of the Liberian Constitution forbids the state to take away. They are not gifts from a chief or a president, and therefore a government may not give them out or withhold them as a favour."},
    {k:"bul", items:["The right to **life, liberty, security, property and the pursuit of happiness**.","**Freedom of speech and of the press** – to say, write and print an opinion, and to receive information.","**Freedom of thought and of conscience** – to hold a belief, and to change it.","**Freedom of religion** – to worship, teach and observe the rites of one's faith, or not to worship at all, without punishment; no religion may be set up as the religion of the state.","**Freedom of assembly and association** – to meet, to form a club, a union, a party or a women's group, and to petition the government.","**Due process and fair trial** – no arrest without cause, no search without a warrant, the right to be heard, to defence, to bail, and to no punishment except under a law that existed before the act.","**Equality before the law** and the prohibition of cruel and unusual punishment, of slavery and involuntary servitude, of imprisonment for debt.","**Right to education, to work, to rest and to form a trade union**."]},
    {k:"p", t:"**Limitations**: my right ends where yours begins. Speech may not be used for defamation, for a fraudulent advertisement, for a lie that stirs violence, or to disclose the private life of a person without cause. In a state of emergency declared according to the Constitution some freedoms may be narrowed – but the right to life, to a fair trial and to conscience never yield."},
    {k:"rule"},
    {k:"h3", t:"The Convention on the Rights of the Child"},
    {k:"p", t:"A **convention** is a formal agreement between states. The **Convention on the Rights of the Child (CRC)**, adopted by the United Nations in 1989 and ratified by Liberia, states the rights of every person below eighteen years. Its provisions are grouped under four broad headings."},
    {k:"table", head:["Category of child right","What it means","Examples"], rows:[
      ["Survival","The right to live and to have what keeps one alive","Life; a name and nationality; food and clean water; shelter; the best attainable healthcare and immunisation"],
      ["Development","The right to grow to one's full capacity","Education; play and rest; freedom of thought and religion; access to information; a standard of living that fits growth; love and understanding"],
      ["Protection","The right to be shielded from harm","Protection from abuse, neglect, torture and harsh discipline; from economic exploitation and dangerous work; from drugs, from sexual exploitation and trafficking; from armed conflict; special care for refugees and for a child with a disability; no unlawful deprivation of liberty"],
      ["Participation","The right to be heard and to take part","Freedom to express an opinion in matters that concern the child and to have it taken seriously; to associate peacefully; to take part in cultural and artistic life"]
    ]},
    {k:"p", t:"The guiding rule of the whole Convention is the **best interest of the child**: in every decision – a divorce, a court case, a school expulsion, a town plan – the question is what will serve the child most."},
    {k:"rule"},
    {k:"h3", t:"Child Protection and Child Welfare Agencies"},
    {k:"bul", items:["**Government** – the Ministry of Gender, Children and Social Protection (MGCSP) and its Bureau of Children and Youth, the County Development and Gender offices, the social workers, and the **Women and Children Protection Unit** of the Liberia National Police.","**The courts and the law** – the Children's Law of 2011, which ends cruel treatment and early marriage and sets out a child's right to a parent, to an identity and to care; the courts that hear a case of a child in need of protection.","**National Human Rights Commission of Liberia (LHRC)** – receives complaints of rights being violated and investigates.","**Faith and community bodies** – the church and the mosque, the town chief and the elders, the women's and youth groups, the Poro and Sande authorities, who in a well-governed town are the first shield of the child.","**NGOs and partners** – UNICEF, Save the Children, LIBAID and local associations which run family support, fostering, shelter, birth registration, reintegration of children associated with armed forces, and the child helpline."]},
    {k:"p", t:"**What every child should know**: who to tell (parent, teacher, head teacher, counsellor, the Women and Children Protection Unit, the town chief), that telling is never betrayal, that a victim is never to blame, and that there is a national child helpline to call. **What a school should do**: a child-protection and safeguarding policy, a reporting book, a trained staff, a safe sanitation, separate toilets for girls, and no corporal punishment."},
    {k:"rule"},
    {k:"h3", t:"The Rights of People Living with HIV and AIDS"},
    {k:"p", t:"**PLHIV** means persons living with HIV. HIV (Human Immunodeficiency Virus) weakens the body's power to fight disease; untreated, it may pass into **AIDS** (Acquired Immunodeficiency Syndrome). A person on treatment can live a long and healthy life, work, marry and bear healthy children."},
    {k:"bul", items:["The right to **medical care**, including counselling, testing on his own decision, treatment and, for a pregnant woman, the drugs that keep her child well.","The right to **confidentiality** – a test result is not to be published, discussed with neighbours, or used to shame; the person himself decides whom to tell.","The right to **work, schooling and education** – no one may be dismissed, refused admission or expelled because of his status.","The right to **freedom from discrimination and violence**, and from being driven from a home or property.","The right to **be heard** in the decisions that concern him, and to organise with others living with HIV.","The right of a **child affected by AIDS** to care, to schooling, to inheritance and not to be made a servant in a stranger's house."]},
    {k:"rule"},
    {k:"h3", t:"Stigmatisation: What It Is and How to Refuse It"},
    {k:"p", t:"**Stigma** is the mark of shame that people attach to a person; **stigmatisation** is the treating of a person as unclean or worthless because of his illness, his identity or his history. Stigma kills more surely than the virus, for it keeps people from being tested, from taking their medicine and from telling the truth."},
    {k:"table", head:["Type of stigmatisation","How it shows"], rows:[
      ["Social","Neighbours refuse to eat from the same plate, sit beside, or greet; the person is gossiped about and avoided"],
      ["Enacted / overt","Insulting names, mockery, slapping, being thrown out of a house, town meeting or workplace"],
      ["Internalised","The person begins to believe the shame: he hides, stops attending clinic, gives up school or work, and may despair"],
      ["Institutional","A clinic that reveals a result openly, an employer demanding a test, a school refusing an affected child"],
      ["Gender-based","A woman is blamed and cast out first, while her husband is believed; a girl is denied testing or care"],
      ["Structural / by silence","Laws, customs and sermons that treat the sick as sinners; and the silence of people who might speak up"]
    ]},
    {k:"bul", items:["Do not repeat a person's status as news; do not guess it from his thinness.","Share the cup, the seat, the food, the bed of a family member who is ill – HIV is not spread by ordinary daily contact.","Say ‘person living with HIV’, not ‘an AIDS victim’; the person is bigger than the illness.","Comfort, accompany and help the sick to the clinic; care for the children left by a death.","Speak when a joke or a sermon mocks the sick; report open discrimination to a teacher, a leader or the LHRC.","Learn the facts: three ways HIV is spread – unprotected sex, infected blood and a mother to her child – and the many ways it is not spread."]},
    {k:"rule"},
    {k:"h3", t:"Rights and Responsibilities of Children Infected and Affected by HIV and AIDS"},
    {k:"bul", items:["**Rights** – to be kept in the family or in a safe foster home; to food, clothing, shelter and healthcare, including treatment; to remain in school with fees and uniforms supported; to play, rest and friendship; to know about their own health in a way suited to their age; to inherit the family property; to privacy about their status; never to be separated, hidden, or made to work as a servant because of it.","**Responsibilities** – to take the medicine given and to attend the clinic with the carer; to tell the truth about their health to those who must protect them; to study and to develop their talent; to practise what they have learned of safe conduct and to refuse pressure; to care gently for a sick parent; to treat others living with HIV as equals; to grow in faith, honesty and service to the community."]},
    {k:"p", t:"AIDS orphans are not a burden but a charge on the whole community: the school that keeps their names on the roll, the auntie who feeds one more child, and the class that shares its game are the answer of the nation."}
  ],
  focus:["Fundamental rights and basic freedoms: speech, thought, religion","Convention on the Rights of the Child","Child protection and child welfare agencies","Rights of people living with HIV/AIDS","How not to stigmatise against PLHIV; types of stigmatisation","Rights and responsibilities of children infected and affected by HIV and AIDS"],
  terms:[
    {t:"fundamental right", d:"a basic right belonging to every person that cannot be taken away", x:"Life is a fundamental right."},
    {t:"freedom of speech", d:"the right to express your opinion", x:"Freedom of speech allows honest criticism."},
    {t:"freedom of religion", d:"the right to worship as you choose", x:"Freedom of religion protects all faiths."},
    {t:"convention", d:"an international agreement signed by many countries", x:"Liberia signed the Convention on the Rights of the Child."},
    {t:"child protection", d:"keeping children safe from harm, abuse and neglect", x:"Child protection is everyone's duty."},
    {t:"stigma", d:"shame or disgrace unfairly attached to a person or group", x:"Stigma keeps people from getting tested."},
    {t:"discrimination", d:"treating a person unfairly because of who they are", x:"Discrimination against PLHIV is illegal."},
    {t:"PLHIV", d:"people living with HIV", x:"PLHIV have the same rights as everyone."},
    {t:"participation", d:"the right of children to be heard on matters that affect them", x:"Participation is a child right."},
    {t:"advocacy", d:"speaking up publicly in support of a cause or group", x:"Advocacy changed the school's policy."}
  ],
  facts:[
    {q:"Name four fundamental rights guaranteed by the Constitution of Liberia.", a:"Any four: the right to life, liberty, freedom of speech, freedom of thought, freedom of religion, education, property, and a fair trial."},
    {q:"Name the four broad categories of child rights under the Convention.", a:"Survival, development, protection and participation."},
    {q:"What does freedom of religion mean?", a:"The right of every person to worship as they choose, or not to worship, without being punished."},
    {q:"Give two rights of people living with HIV.", a:"The right to confidentiality about their status, to medical care, to work and to education, free from discrimination."},
    {q:"What is stigma?", a:"Shame or disgrace unfairly attached to a person or group because of a condition such as HIV or disability."},
    {q:"Why should children take part in decisions that affect them?", a:"Because they know their own needs, participation builds confidence and responsibility, and it is guaranteed as a right."}
  ],
  tf:[
    {s:"Freedom of speech means you may say anything without limit.", a:"false", why:"You must not slander others or incite violence; rights carry responsibilities."},
    {s:"HIV can be caught by sitting beside an infected person.", a:"false", why:"HIV is not spread by ordinary social contact."},
    {s:"Children have the right to be heard on matters affecting them.", a:"true", why:"Participation is one of the four categories of child rights."},
    {s:"A person's HIV status should be kept confidential.", a:"true", why:"Confidentiality is a right and protects the person from stigma."},
    {s:"Only adults have fundamental rights.", a:"false", why:"Children have fundamental rights too, plus special protection rights."},
    {s:"Freedom of religion protects all faiths in Liberia.", a:"true", why:"The Constitution guarantees the right to worship as one chooses."}
  ],
  apply:[
    {q:"A pupil is expelled because his mother has HIV. Which rights are violated and what should be done?", a:"His right to education and to freedom from discrimination are violated. The parents should appeal to the school board, the education ministry and a child welfare agency; HIV is not transmitted by attending school."},
    {q:"How can a school reduce stigma against pupils living with HIV?", a:"Teach the facts about how HIV is and is not spread, keep records confidential, punish name-calling, and invite health workers to speak to pupils and parents."},
    {q:"Give one right and one matching responsibility of a child.", a:"The right to education carries the responsibility to attend school and study; the right to be heard carries the duty to listen to others."},
    {q:"A class is not consulted about a new school rule that affects them. What could they do?", a:"Politely ask the principal for a meeting, present their views through the student council or class prefect, and explain how the rule affects them — exercising the right to participate."}
  ],
  sort:{ title:"Rights, freedoms and protection",
    groups:[
      {name:"Fundamental freedoms", items:["Freedom of speech","Freedom of thought","Freedom of religion","Freedom of movement"]},
      {name:"Child rights", items:["Survival","Development","Protection","Participation"]},
      {name:"Forms of stigma", items:["Name-calling","Exclusion from games","Refusing to share a desk","Gossip about status"]},
      {name:"Sources of protection", items:["Constitution","Child welfare agency","School authorities","The courts"]}
    ]},
  mapwork:{ title:"Rights and responsibilities chart", caption:"Complete the chart pairing each right with the responsibility that goes with it.",
    items:[
      {p:"Right to education", f:"responsibility to attend school regularly and study hard"},
      {p:"Right to free speech", f:"responsibility to speak truthfully and respect others"},
      {p:"Right to be protected", f:"responsibility to report abuse and protect others"},
      {p:"Right to healthcare", f:"responsibility to follow health advice and keep clean"},
      {p:"Right to worship freely", f:"responsibility to respect the faith of others"},
      {p:"Right to be heard", f:"responsibility to listen to other people's views"}
    ]},
  casestudy:{ title:"Hawa speaks up",
    text:"Hawa, aged twelve, was told she would be withdrawn from school to be married. She had learned in Social Studies that education is a right and that children may be heard on matters affecting them. She spoke to her class teacher, who called in a child welfare officer. The officer met Hawa's parents and explained the law. Hawa stayed in school and is now in Grade Nine.",
    questions:[
      {q:"Which right of Hawa's was going to be denied?", a:"Her right to education, and her right to protection from early marriage."},
      {q:"What did Hawa do?", a:"She spoke to her class teacher, exercising her right to be heard."},
      {q:"Who helped and what was the result?", a:"A child welfare officer met her parents and explained the law; Hawa stayed in school."}
    ]},
  project:{ title:"Rights awareness campaign",
    brief:"Create a campaign teaching child rights in your school.",
    steps:["Choose three child rights to focus on.","For each, find one real situation where it might be denied.","Make a poster or short drama showing the right being upheld.","Present it at assembly or to another class.","Collect three comments from your audience about what they learned."],
    criteria:["Three rights correctly explained","Realistic situations used","A clear poster or drama","Presentation delivered","Audience feedback collected"]},
  activities:["List the fundamental rights in the Constitution","Explain freedom of speech, thought and religion","Describe the rights of the child","Discuss the rights of PLHIV and how not to stigmatise","Debate children's involvement in decision-making"],
  materials:["Simplified Constitution extract","Poster of the Convention on the Rights of the Child","Materials from child welfare agencies"],
  assessment:["Quizzes","Campaign project","Debate","Class participation","Test"]
},
{
  grade:5, period:"V", sem:"Two", icon:"🏭",
  title:"Economic Development",
  subtitle:"Agriculture, agro-industries, forestry, fishery, mining and manufacturing",
  outcomes:["Learners analyse the roles of the various sectors in the development of the Liberian economy"],
  objectives:["Tell the difference between subsistence farming and plantation agriculture in Liberia","Name some of the major agro-industries in prewar and present-day Liberia","Identify fishery as a component of Liberia's economy","Discuss some of the mining sectors in prewar and present-day Liberia","Identify the small and large scale industries in Liberia"],
  note:"<b>Subsistence farming</b> grows food mainly for the farmer's own family. <b>Plantation (commercial) agriculture</b> grows one crop on a large estate for sale and export — such as <b>rubber at Firestone</b> and <b>oil palm</b>. Liberia's chief minerals are <b>iron ore, gold and diamonds</b>.",
  study:[
    /* ---- course text: Semester Two, Period V (guide pp. 62-63) ---- */
    {k:"h3", t:"Agriculture: Subsistence and Commercial Farming"},
    {k:"table", head:["Subsistence (small-scale) farming","Commercial (plantation) agriculture"], rows:[
      ["The farm grows food chiefly for the farmer's own family","One or two crops are grown on a large estate to be sold, processed or exported"],
      ["Small plots; family labour, borrowed hands and the machete; hand tools","Machines, nurseries, paid workers, managers, measured plots and records"],
      ["Mixed crops – rice, cassava, vegetable, groundnut, plantain, a few poultry","Mono-cropping – rubber, oil palm, cacao, coffee, sugarcane, banana"],
      ["Little cash is spent and little is earned; the surplus is sold at the lappah","Great capital, wages, roads, a mill, shipping, and taxes and duties to the state"],
      ["Feeds the nation; low risk of losing all","Earns foreign money and employment; vulnerable when the world price falls"]
    ]},
    {k:"p", t:"**Cash crops of Liberia** – **rubber** (Firestone at Harbel, and the small-tapper blocks), **oil palm**, **cocoa**, **coffee**, **sugarcane**, with **rice** as the food crop and the great hope of national self-sufficiency. The **Rubber Authority (RA)** and the **Office of National Rice Development Strategy** regulate these industries."},
    {k:"rule"},
    {k:"h3", t:"Major Agro-Industries"},
    {k:"p", t:"An **agro-industry** is a factory whose raw material comes from a farm, a plantation, a forest or the sea."},
    {k:"bul", items:["**Rubber** – the latex is coagulated, smoked and pressed into bale at the estate factory, and made into tyres, soles, heels, gloves and bands.","**Oil palm** – the fresh fruit bunches are boiled and pressed at the mill; the oil becomes cooking oil, soap, margarine and cosmetic; the kernel gives oil for industry.","**Rice and flour** – the paddy is dehusked, polished, graded and bagged; wheat is milled into flour.","**Sugar** – the cane is crushed, boiled, crystallised and packed at the sugar company.","**Cocoa and coffee** – fermented, dried, bagged and shipped for chocolate and drink; a little is roasted and ground at home.","**Fruit, vegetable and fish processing** – drying, smoking, canning and bottling, and the juice and jam shops.","**Forestry products** – sawn timber, plywood, veneer and pallets.","**Leather, basket and mat work** – hides, raffia, bamboo and thatch into household goods."]},
    {k:"p", t:"Agro-industry keeps the value of the crop in Liberia, gives wage work, and makes the road, the jetty, the school and the clinic that the estate builds for its workers."},
    {k:"rule"},
    {k:"h3", t:"Forestry and Manufacturing"},
    {k:"bul", items:["**Forestry** – Liberia holds the largest block of tropical rain forest left in West Africa. Trees are granted under a **concession**, cut on a working plan, scaled and hauled to the mill, and exported as logs or processed into lumber, plywood and veneer. Timber pays royalty and duty and employs the faller, skidder, driver, mill hand, grader and tally clerk.","**Manufacturing industries** – turning raw material into finished goods: cement, iron and steel work, paint, soap and detergent, plastic pipe and chair, bottle and bag, furniture and mattress, garment and shoe, food and drink, brick and block, matches, candle, and the assembly of torchlights and vehicles.","**Small-scale (cottage) industries** – tailoring, soap, candle, bread and doughnut, palm-oil pressing, rice pounding, weaving, carving, pottery, brick making, shoe mending, smoking of fish: run from the compound or a small shed with little capital.","**Large-scale industries** – the rubber, palm-oil, sugar, cement and bottling plants; iron-ore mining and its rail and port; the sawmills: they need great capital, machines, engineers and a workforce under contract."]},
    {k:"p", t:"**Problems affecting Liberia's agro business**: poor and impassable feeder roads in rain, no storage and processing near the farm so the crop spoils, dear and unreliable fuel, seedlings, and fertiliser, borrowed money at high interest, old tools and small plots, no title certainty, the world price falling, pests and disease (swine fever, fall armyworm, black pod), the land dispute, lack of electricity for the mill, and smuggling across the borders."},
    {k:"p", t:"The remedies the government and the farmer together pursue: better rural roads and the fair-cause storage shed, improved rice and cassava seed, extension agents, the cooperative, a warehouse receipt and a market information system, credit through the rural bank, agro-processing near the farm, a guaranteed minimum price, and the planting of trees to keep the water and the soil."},
    {k:"rule"},
    {k:"h3", t:"Mining"},
    {k:"p", t:"**Mining** is the taking of useful material from the earth. Liberia's minerals are **iron ore, gold, diamonds**, and the industrial materials – **silica sand, barite, cassiterite, columbite, and the kyanite of the coast**."},
    {k:"table", head:["Stage","What was done / is done","Where and how"], rows:[
      ["Pre-war mining","Before 1989 mining was among the largest earners of the country; iron ore from the Bong and Nimba ranges was crushed and railed to the ports of Buchanan and Monrovia; gold and diamond were worked at Lofa, Gbarpolu, Bong and the south-east","Mechanised mines with the concession system, taxes and royalty, the 260-mile railroad, and thousands of wage jobs; the first Republic's revenue leaned on ore"],
      ["Present-day mining","The concession mines of iron ore, and industrial minerals; the export of ore, and the licensing of the big companies","Governed by the Mines and Energy Law, the National Minerals Agency and the Extractive Industries Transparency Initiative (EITI), with royalties, community development agreements and environmental bonds"],
      ["Artisanal (small-scale) mining","Gold panning and washing in the river sand and the red earth, and digging shallow pits; diamond winnowing in the gravel of the stream","Lofa, Gbarpolu, Bong, Margibi, Nimba, Maryland and Sinoe; done by families and in bands with pan, shovel, sieve, sluice and a small wash plant; sold to the local buyer or exporter"]
    ]},
    {k:"bul", items:["**Benefits of mining** – wages, royalty and tax, roads and rail, the trading store, skills, and the country's share of its own mineral wealth.","**Dangers and harms** – the river poisoned with silt and with mercury and cyanide used to catch the gold; the hole that fills with rain and drowns a child; the forest cleared; the ear damaged by the crusher; land taken from the farmer; children working in the pit; the 'dash' and the cheating at the weighing; sickness and the quarrel over the concession.","**Responsible mining** – a licence, a plan to reclaim the land, no working in the stream bank or the drinking water, the mercury-free method, safe pits and fencing, no child labour, the weighing in the open, and the community's written agreement on land, jobs and roads."]},
    {k:"p", t:"Gold and diamond belong to the whole people: the licence fee and the royalty pay for the school, and the land that is dug must be given back to the farmer level and planted."}
  ],
  focus:["Agriculture: subsistence farming and commercial farming","Major agro-industries","Forestry and manufacturing industries","Small scale and large scale industries","Problems affecting Liberia's agro business","Mining: pre-war, present-day and artisanal mining"],
  terms:[
    {t:"subsistence farming", d:"growing food mainly for the farmer's own family", x:"Most Liberian farmers practise subsistence farming."},
    {t:"plantation agriculture", d:"growing one crop on a large estate for sale", x:"Firestone is a rubber plantation."},
    {t:"cash crop", d:"a crop grown mainly to be sold", x:"Rubber and cocoa are cash crops."},
    {t:"agro-industry", d:"an industry that processes farm produce", x:"A palm oil mill is an agro-industry."},
    {t:"forestry", d:"the management and use of forests for timber", x:"Forestry earns revenue from timber."},
    {t:"fishery", d:"the industry of catching and selling fish", x:"The fishery employs many coastal people."},
    {t:"mining", d:"digging minerals out of the earth", x:"Mining of iron ore began at Bomi Hills."},
    {t:"artisanal mining", d:"small-scale mining done by hand by individuals", x:"Artisanal mining is common in Nimba."},
    {t:"manufacturing", d:"making goods from raw materials in a factory", x:"Manufacturing adds value to raw materials."},
    {t:"export", d:"a good sent out of the country for sale", x:"Iron ore is Liberia's leading export."}
  ],
  facts:[
    {q:"Give one difference between subsistence and plantation agriculture.", a:"Subsistence farming grows food mainly for the family's own use; plantation agriculture grows one crop on a large estate to be sold or exported."},
    {q:"Name two cash crops of Liberia.", a:"Any two: rubber, oil palm, cocoa, coffee, sugarcane."},
    {q:"Name Liberia's most famous rubber plantation.", a:"Firestone, at Harbel in Margibi County."},
    {q:"Name three minerals mined in Liberia.", a:"Iron ore, gold and diamonds."},
    {q:"What is artisanal mining?", a:"Small-scale mining done by hand by individuals or small groups rather than by big companies."},
    {q:"Give two problems affecting Liberia's agriculture.", a:"Any two: poor roads, lack of credit and equipment, low prices, pests and disease, unreliable rainfall, and shortage of storage and processing facilities."}
  ],
  tf:[
    {s:"Firestone is a rubber plantation in Margibi County.", a:"true", why:"It is at Harbel and is one of the world's largest rubber plantations."},
    {s:"Subsistence farmers grow mainly for export.", a:"false", why:"They grow mainly to feed their own families."},
    {s:"Iron ore is one of Liberia's main exports.", a:"true", why:"It has long been the country's leading mineral export."},
    {s:"Fishery plays no part in the Liberian economy.", a:"false", why:"Fishing provides food, jobs and income along the coast and rivers."},
    {s:"Manufacturing adds value to raw materials.", a:"true", why:"Turning raw material into a finished good increases its worth."},
    {s:"Artisanal mining is done by large foreign companies.", a:"false", why:"It is small-scale mining done by hand by individuals or small groups."}
  ],
  apply:[
    {q:"Why is it better for Liberia to process palm oil at home than to export raw palm nuts?", a:"Processing adds value, so the country earns more money, it creates jobs in the mills, and it builds skills and industry inside Liberia."},
    {q:"Give two problems a small farmer in Bong County faces getting produce to market.", a:"Poor roads that become impassable in the rains, and high transport costs; also lack of storage so produce spoils, and low prices from middlemen."},
    {q:"How did the civil war affect Liberia's mining and agriculture?", a:"Mines and plantations were abandoned or destroyed, workers fled, machinery was looted, and production fell sharply; recovery has taken many years."},
    {q:"Suggest two ways government could help small-scale farmers.", a:"Build and maintain feeder roads, provide credit and improved seed, set up storage and processing centres, and offer extension training."}
  ],
  sort:{ title:"Sectors of the Liberian economy",
    groups:[
      {name:"Agriculture", items:["Subsistence rice farming","Rubber plantation","Oil palm estate","Cocoa farming"]},
      {name:"Mining", items:["Iron ore","Gold","Diamonds","Artisanal mining"]},
      {name:"Forestry and fishery", items:["Timber logging","Coastal fishing","River fishing","Charcoal"]},
      {name:"Manufacturing", items:["Palm oil mill","Soap factory","Cement plant","Bakery"]}
    ]},
  mapwork:{ title:"Economic map of Liberia", caption:"On the map of Liberia, mark where each economic activity is carried on.",
    items:[
      {p:"Harbel, Margibi", f:"Firestone rubber plantation"},
      {p:"Bong Range", f:"iron ore mining"},
      {p:"Mount Nimba", f:"iron ore mining and export by rail to Buchanan"},
      {p:"Buchanan, Grand Bassa", f:"port for exporting iron ore and timber"},
      {p:"Robertsport, Grand Cape Mount", f:"coastal fishing centre"},
      {p:"Lofa County", f:"cocoa, coffee and food crop farming"}
    ]},
  casestudy:{ title:"The palm oil mill at Zwedru",
    text:"Farmers around Zwedru used to sell raw palm nuts to traders at a low price. A cooperative borrowed money and bought a small mill. Now the farmers press their own oil, sell it in bottles, and use the shells as fuel. Their income has almost doubled, and the mill employs six young people. The cooperative plans to buy a second mill next year.",
    questions:[
      {q:"What did the farmers sell before the mill was built?", a:"Raw palm nuts, at a low price to traders."},
      {q:"Name two benefits of the mill.", a:"Farmers' income almost doubled, six young people were employed, and the shells are used as fuel."},
      {q:"What economic idea does this illustrate?", a:"Adding value through processing — turning a raw material into a finished product earns more."}
    ]},
  project:{ title:"Economic activity study",
    brief:"Study one economic activity in your county.",
    steps:["Choose one: farming, fishing, mining, logging or a small factory.","Find out what is produced and who buys it.","List three people or jobs involved in it.","Identify two problems it faces.","Suggest one improvement and present your report."],
    criteria:["Activity clearly described","Product and market identified","Three jobs listed","Two problems identified","A realistic improvement suggested"]},
  activities:["Distinguish subsistence from plantation agriculture","Name major agro-industries prewar and today","Identify fishery as part of the economy","Discuss mining sectors prewar and today","Identify small and large scale industries"],
  materials:["Economic map of Liberia","Pictures of rubber tapping, mining and fishing","Samples of local produce"],
  assessment:["Quizzes","Economic study report","Map work","Class participation","Test"]
},
{
  grade:5, period:"VI", sem:"Two", icon:"🤝",
  title:"Liberia and Her Relations with Other West African Countries",
  subtitle:"History of West Africa, official languages, ECOWAS, WARDA, MRU, rivers and climate",
  outcomes:["Learners analyse the socio-economic and political development of West Africa"],
  objectives:["Analyse the history of West Africa","Name the official language spoken in each West African country","Explain the work of ECOWAS, WARDA and MRU","Name and locate the major rivers of West Africa","Describe the climatic regions of West Africa"],
  note:"<b>ECOWAS</b> (Economic Community of West African States, founded 1975) promotes trade and peace among 15 member states. The <b>Mano River Union (MRU)</b> links Liberia, Sierra Leone, Guinea and Côte d'Ivoire. <b>WARDA</b> is the West Africa Rice Development Association.",
  study:[
    /* ---- course text: Semester Two, Period VI (guide pp. 64-65) ---- */
    {k:"h3", t:"West Africa and Its Map"},
    {k:"p", t:"**West Africa** is the western bulge of the continent, from the **Sahara** in the north to the **Atlantic Ocean (the Gulf of Guinea)** in the south. The **United Nations** grouping includes the sixteen countries below, all members of **ECOWAS**, together with the states of the Sahel further north."},
    {k:"table", head:["Country","Capital","Country","Capital"], rows:[
      ["Liberia","Monrovia","Mali","Bamako"],
      ["Sierra Leone","Freetown","Niger","Niamey"],
      ["Guinea","Conakry","Chad","N'Djamena"],
      ["Guinea-Bissau","Bissau","Senegal","Dakar"],
      ["The Gambia","Banjul (Bakau area)","Ghana","Accra"],
      ["Cape Verde","Praia","Togo","Lomé"],
      ["Burkina Faso","Ouagadougou","Benin","Porto-Novo (Cotonou)"],
      ["Côte d'Ivoire","Yamoussoukro (Abidjan)","Nigeria","Abuja"]
    ]},
    {k:"p", t:"Liberia shares her borders with **Sierra Leone, Guinea and Côte d'Ivoire**; the Mano River and the Cavalla River are the natural frontiers. The map of West Africa must be read for the coast and the ports, the rivers and the hills, the borders and the capitals, and for the roads that join the capitals to one another."},
    {k:"rule"},
    {k:"h3", t:"The People and the Official Languages"},
    {k:"p", t:"The people of West Africa number several hundred millions, in hundreds of ethnic groups and languages; the **official language** of a state is the language used in government, law and school, and it is usually the language left by the colonial power, while the people speak their own tongues at home and in the market."},
    {k:"table", head:["Group","Countries","Language commonly used besides the mother tongues"], rows:[
      ["Anglophone (English-speaking)","Liberia, Sierra Leone, The Gambia, Ghana, Nigeria","English (with Krio and pidgin English on the coast)"],
      ["Francophone (French-speaking)","Guinea, Côte d'Ivoire, Senegal, Mali, Burkina Faso, Niger, Togo, Benin","French"],
      ["Lusophone (Portuguese-speaking)","Guinea-Bissau, Cape Verde","Portuguese (with Creole)"]
    ]},
    {k:"bul", items:["The great regional languages are **Hausa** (north and east), **Yoruba**, **Igbo** and **Fulani/Pulaar**, **Mandinka/Mande**, **Wolof** and **Serer** (Senegal), **Akan/Twi** (Ghana), **Mende, Temne, Vai, Krio** (Sierra Leone), **Kpelle, Bassa, Grebo, Kru, Gio** (Liberia).","**Lingua franca** – a language used between people of different tongues: in Liberia it is English and Liberian English, on the coast Krio and pidgin, in the savannah Hausa and Pulaar, and in the francophone states French and Jula (Dioula).","The peoples across a border are often one people cut in two by a treaty line – the **Mande** and **Kru** families, the **Fulani and Mandinka** traders, the **Gola and Gbii**, the **Akan** on both sides of the Ghana-Côte d'Ivoire line – so that the same dance, the same cloth, the same name and the same feast are found on either side."]},
    {k:"rule"},
    {k:"h3", t:"West African Regional Bodies"},
    {k:"p", t:"The countries of the region are small and weak alone; they therefore join in **regional bodies** to trade, to travel, to keep the peace and to develop."},
    {k:"table", head:["Body","Founded","Members","What it does"], rows:[
      ["ECOWAS – Economic Community of West African States","1975 (Treaty of Lagos)","Fifteen West African states, with a Commission in Abuja","Removes barriers to trade, sets the common external tariff, guarantees the free movement of persons with an ECOWAS passport and residence, keeps a standing mediation and peace role, builds roads, power and telecoms links, and runs programmes for agriculture and for the child"],
      ["Mano River Union (MRU)","1973 (Liberia and Sierra Leone; later Guinea and Côte d'Ivoire)","Liberia, Sierra Leone, Guinea, Côte d'Ivoire","Promotes joint development of the border area – the road, the port, the power line, agriculture and trade; eases the passage of people and goods across the river frontier"],
      ["WARDA – West Africa Rice Development Association (now AfricaRice)","1971","The West African states, hosted by Côte d'Ivoire","Researches and distributes better rice varieties for the lowland and the upland, trains scientists and extension agents, and works so that the region can grow the rice it eats instead of importing it"]
    ]},
    {k:"bul", items:["**Benefits of the free movement protocol** – no visa to cross within ECOWAS, the right to sojourn and to work, the small trader who carries cola, cloth and food across the frontier, families divided by a border kept together, and the peace that trade brings.","**Challenges** – the many overlapping bodies, the road not built, tariffs still charged in practice, the language bar between English and French states, and civil conflict in a member state which becomes the neighbour's problem as refugees and guns cross an open border.","**What a pupil can gain from it** – an ECOWAS passport and one curriculum for study abroad, songs and football teams from the neighbours, and the chance to trade and to work in the whole region."]},
    {k:"rule"},
    {k:"h3", t:"Major Rivers of West Africa"},
    {k:"table", head:["River","Where it runs","Its use"], rows:[
      ["Niger","Rises in the Guinea highlands, swings through Mali, Niger and Nigeria to the delta","Water for the rice and the garden, fishing, transport by canoe and launch, the Inland Niger Delta fisheries, and irrigation"],
      ["Senegal","Between Senegal and Mauritania to the Atlantic","The rice schemes of the delta, the gum and date country above, fishing, and the ports of Saint-Louis"],
      ["Gambia","A short river inside a narrow country","Fishing, rice on its banks, and ferry transport"],
      ["Volta","From Burkina through Ghana to the Gulf of Guinea","The Akosomb Dam, Lake Volta, its hydro-electric power and its fisheries"],
      ["Congo","Through the equatorial forest to the Atlantic","Great navigation, fishing, and the power of its falls"],
      ["Mano and Cavalla, St. Paul and St. John, Gambia and Casamance","The Liberian and Guinean forest coast","Water, fish, sand and stone, the falls that give power, and the canoe paths of the forest people"]
    ]},
    {k:"p", t:"In every case the river is a road before it is a farm: goods moved by water reach the sea cheapest; and the same river that feeds a nation can carry a quarrel unless the states that share it agree by treaty how the water is to be used."},
    {k:"rule"},
    {k:"h3", t:"Climatic Regions and Natural Vegetation"},
    {k:"p", t:"The climate and the vegetation of West Africa change in belts as the rain lessens from the coast to the Sahara."},
    {k:"table", head:["Belt","Climate","Natural vegetation","What is grown or kept"], rows:[
      ["Coastal mangrove and swamp","Hot, wet","Mangrove, rope, coconut","Fish, salt, palm, rice"],
      ["Tropical rain forest","Heavy rain all year with a short dry time","Dense evergreen forest, tall timber trees","Cacao, coffee, oil palm, rubber, cassava, plantain, cola"],
      ["Semi-deciduous forest and woodland","Shorter rains","Open high forest with grass","Yam, maize, groundnut, shea, locust bean; cattle under the fly belt's edge"],
      ["Savanna (guinea and Sudan)","One long dry season","Tall grass with scattered trees","Millet, sorghum, maize, cotton, groundnut; great herds of cattle, sheep and goats"],
      ["Sahel","Very little rain","Short grass, thorn scrub","Millet, grazing and migration; desertification is the danger"],
      ["Desert edge","Almost no rain","Bare sand and stone, tamarisk and grass tufts","Dates in the oasis; camel and goat"]
    ]},
    {k:"p", t:"Liberia sits in the wettest of these belts; this is why we grow rice and palm while the savannah grows millet and cattle, and why the harmattan dust that crosses a thousand miles of savannah reaches our schools in December."},
    {k:"rule"},
    {k:"h3", t:"Natural Resources and Major Industries"},
    {k:"bul", items:["**Minerals** – iron ore (Liberia, Sierra Leone, Mauritania, Nigeria), bauxite (Guinea), gold and diamond (Liberia, Ghana, Sierra Leone, Guinea), manganese, phosphate, tin, columbite and iron, and the **petroleum and gas** of Nigeria, Ghana, Côte d'Ivoire, Senegal and Mauritania.","**Forest and farm** – timber and rubber (Liberia, Côte d'Ivoire, Nigeria), cacao (Côte d'Ivoire and Ghana produce most of the world's cocoa), coffee, groundnut and cotton (Senegal, Mali, Sudan), palm oil, shea butter, dates, kola and livestock.","**Sea** – the richest fishing grounds of Africa off Mauritania, Senegal, Guinea and Sierra Leone, worked by coastal and foreign fleets."]},
    {k:"p", t:"**Major West African industries** – oil refining and petrochemicals, iron and steel, aluminium smelting (the Valco works of Ghana), cement, food and drink processing, canning of fish and fruit, sugar milling, textile and garment making, tire and rubber works, wood processing, leather, soap and cosmetics, brewing and bottling, fertilizer from phosphate, and the newer assembly of vehicles, batteries and phones. The pattern is the same everywhere: the region still exports much raw material and imports much finished goods, and every state is trying to process at home what it digs and grows."}
  ],
  focus:["History of West Africa and the map of West Africa","People and official languages of West Africa","Regional bodies: ECOWAS, WARDA, MRU","Major rivers of West Africa","Climatic regions and natural vegetation of West Africa","Natural resources and major West African industries"],
  terms:[
    {t:"ECOWAS", d:"the Economic Community of West African States", x:"ECOWAS was founded in 1975."},
    {t:"Mano River Union", d:"the union of Liberia, Sierra Leone, Guinea and Côte d'Ivoire", x:"The Mano River Union promotes cooperation."},
    {t:"WARDA", d:"the West Africa Rice Development Association", x:"WARDA researches better rice varieties."},
    {t:"regional body", d:"an organisation of countries in the same region", x:"ECOWAS is a regional body."},
    {t:"official language", d:"the language used in government and schools", x:"English is Liberia's official language."},
    {t:"francophone", d:"French-speaking", x:"Guinea and Senegal are francophone countries."},
    {t:"anglophone", d:"English-speaking", x:"Liberia, Ghana and Nigeria are anglophone."},
    {t:"savanna", d:"grassland with scattered trees", x:"Northern Nigeria lies in the savanna."},
    {t:"Sahel", d:"the dry belt south of the Sahara", x:"The Sahel suffers frequent drought."},
    {t:"free movement", d:"the right of citizens to travel and work across member states", x:"ECOWAS allows free movement of people."}
  ],
  facts:[
    {q:"What does ECOWAS stand for and when was it founded?", a:"The Economic Community of West African States, founded in 1975."},
    {q:"Name the member countries of the Mano River Union.", a:"Liberia, Sierra Leone, Guinea and Côte d'Ivoire."},
    {q:"Name three anglophone West African countries.", a:"Any three: Liberia, Ghana, Nigeria, Sierra Leone, The Gambia."},
    {q:"Name three francophone West African countries.", a:"Any three: Guinea, Senegal, Mali, Côte d'Ivoire, Burkina Faso, Niger, Togo, Benin."},
    {q:"Name three major rivers of West Africa.", a:"The Niger, the Senegal, the Volta, the Gambia and the Benue."},
    {q:"Name the climatic regions of West Africa from south to north.", a:"Tropical rain forest, savanna (guinea and sudan), Sahel, and desert."}
  ],
  tf:[
    {s:"ECOWAS was founded in 1975.", a:"true", why:"It was established by the Treaty of Lagos in that year."},
    {s:"The Niger is the longest river in West Africa.", a:"true", why:"It flows through Guinea, Mali, Niger and Nigeria to the sea."},
    {s:"Liberia is a francophone country.", a:"false", why:"Liberia's official language is English, so it is anglophone."},
    {s:"The Mano River Union includes Liberia and Sierra Leone.", a:"true", why:"Together with Guinea and Côte d'Ivoire."},
    {s:"The Sahel is a wet, forested region.", a:"false", why:"The Sahel is a dry belt of scrub and grass south of the Sahara."},
    {s:"ECOWAS allows free movement of people between member states.", a:"true", why:"Citizens may travel and work across member countries under its protocols."}
  ],
  apply:[
    {q:"Give two benefits Liberia gains from being a member of ECOWAS.", a:"Access to a large market without heavy tariffs, free movement to work and study, peacekeeping support in times of crisis, and joint projects in energy and transport."},
    {q:"Why do West African countries speak different official languages?", a:"Because different European powers colonised different territories — Britain, France and Portugal — and each left its own language in government and schools."},
    {q:"How does climate differ between coastal Liberia and northern Mali?", a:"Coastal Liberia has heavy rainfall and rain forest all year; northern Mali is desert and Sahel with very little rain, high temperatures and sparse vegetation."},
    {q:"How can rivers help cooperation between West African countries?", a:"Shared rivers such as the Niger and Mano allow joint hydro-power, irrigation, fishing and transport projects, and require countries to work together to manage them."}
  ],
  sort:{ title:"West Africa",
    groups:[
      {name:"Anglophone countries", items:["Liberia","Ghana","Nigeria","Sierra Leone","The Gambia"]},
      {name:"Francophone countries", items:["Guinea","Senegal","Mali","Côte d'Ivoire","Togo"]},
      {name:"Regional bodies", items:["ECOWAS","Mano River Union","WARDA"]},
      {name:"Rivers of West Africa", items:["Niger","Senegal","Volta","Gambia"]}
    ]},
  mapwork:{ title:"Map of West Africa", caption:"On the map of West Africa, locate and label each of the following.",
    items:[
      {p:"Liberia", f:"on the Atlantic coast between Sierra Leone and Côte d'Ivoire"},
      {p:"Nigeria", f:"the most populous country in West Africa"},
      {p:"River Niger", f:"the longest river, flowing through Guinea, Mali, Niger and Nigeria"},
      {p:"Mano River", f:"the boundary river between Liberia and Sierra Leone"},
      {p:"The Sahel belt", f:"the dry zone across the north of the region"},
      {p:"Tropical rain forest belt", f:"the wet zone along the southern coast, including Liberia"}
    ]},
  casestudy:{ title:"ECOWAS at work",
    text:"When conflict broke out in the region, ECOWAS sent a peacekeeping force, ECOMOG, in which Nigerian, Ghanaian and other troops served. Later, ECOWAS observers monitored elections in several member states. In trade, an ECOWAS certificate allows Liberian palm oil to enter Ghana without heavy duty. A Liberian student can also study in Nigeria without a visa under the free movement protocol.",
    questions:[
      {q:"What was ECOMOG?", a:"The ECOWAS peacekeeping force, made up of troops from member states."},
      {q:"Give one trade benefit mentioned.", a:"An ECOWAS certificate lets Liberian palm oil enter Ghana without heavy duty."},
      {q:"How does free movement help a Liberian student?", a:"He or she can study in another member state such as Nigeria without needing a visa."}
    ]},
  project:{ title:"West African neighbour study",
    brief:"Research one West African country and compare it with Liberia.",
    steps:["Choose a West African country other than Liberia.","Find its capital, official language and population.","Name two of its natural resources or main exports.","Note one similarity and one difference with Liberia.","Present your comparison with a map."],
    criteria:["Correct capital and language","Population given","Two resources or exports","One similarity and one difference","A neat labelled map"]},
  activities:["Analyse the history of West Africa","Name the official language of each West African country","Explain the work of ECOWAS, WARDA and MRU","Name and locate the major rivers of West Africa","Describe the climatic regions of West Africa"],
  materials:["Map of West Africa","Chart of ECOWAS member states","Atlas and globe","Climate and vegetation maps"],
  assessment:["Quizzes","Map work","Country comparison","Class participation","Test"]
},

/* ================= GRADE 6 ================= */
{
  grade:6, period:"I", sem:"One", icon:"📜",
  title:"The Founding of the Liberian State",
  subtitle:"The slave trade, the ACS, early kingdoms, periods of Liberian history and special populations",
  outcomes:["Learners analyse the history of Liberia from its founding up to the present"],
  objectives:["Explain who founded the Liberian State","List the names of founding members of the American Colonization Society","Tell when the Liberian state was officially founded","Identify the various periods of Liberian History from the Colonial period to the present","Discuss the rights of special population groups"],
  note:"Liberian history falls into periods: <b>Colonial (1822–1839)</b>, <b>Commonwealth (1839–1847)</b>, <b>First Republic (1847–1980)</b> and <b>Second Republic (1986–present)</b>, with interim governments between. <b>Joseph Jenkins Roberts</b> was the first President.",
  study:[
    /* ---- course text: Semester One, Period I (guide pp. 66-67) ---- */
    {k:"h3", t:"The Trans-Atlantic Slave Trade"},
    {k:"p", t:"From the fifteenth to the nineteenth century European ships carried captives seized or bought on the West African coast across the Atlantic to the Americas – the **middle passage**. Some eleven to twelve million men, women and children survived the voyage; a great number died on the march, in the holding shed and at sea."},
    {k:"bul", items:["**The triangle** – manufactured goods (cloth, iron, guns, powder, rum, brass) came from Europe to the coast; captives were carried from Africa to the Americas; and the sugar, tobacco, cotton, rum and coffee of the plantations were taken home.","**The coast of Liberia** was among the embarking shores: canoes brought captives from the rivers and lagoons of the Kru, Gola, Vai and Bassa coast to the ships lying off shore.","**The effects** – the loss of the strongest workers, the gun and the raid circling, the ruin of craft and farm, the breaking of families, the racial contempt invented to justify the trade, and the poverty from which the region is still recovering.","**The abolition** – Britain ended her trade in 1807, the United States in 1808; the squadrons off the coast seized slavers for half a century, and the freed persons were landed at Freetown and Monrovia – the recaptured Africans.","**The end in this country** – the Constitution of 1847 declared that all men are by nature free and independent, and the foreign slave trade on this coast was ended; in **1930 a League of Nations commission** investigated the recruiting of Liberian labour, much of it forced, for the cocoa plantations of the Spanish islands, and the last of that contract-labour system was swept away in the 1950s."]},
    {k:"rule"},
    {k:"h3", t:"The Founding of the ACS and Other Colonization Societies"},
    {k:"p", t:"In **1816** the **American Colonization Society (ACS)** was founded at Washington by **Rev. Robert Finley**, with **Bushrod Washington** as its first president and **Elijah Caldwell**, **Ralph R. Gurley** and many statesmen behind it. Its work was carried out together with the **state auxiliary societies** – the Maryland, Virginia, Pennsylvania, New York, Connecticut and other societies – each of which raised money and sent out its own emigrants."},
    {k:"bul", items:["**American states and Congress** gave money; the Act of 1819 let the President use the navy to help land recaptured Africans.","**Maryland** sent out the party that founded **Providence Island** and later **Maryland in Africa (Harper)**; **Virginia** sent the *Elizabeth Stockton* with its settlers.","**Pennsylvania, New York, Connecticut, Delaware, Rhode Island, Kentucky, Tennessee, Ohio, North Carolina, Georgia, Louisiana and Mississippi** each had a colonization society; and similar schemes were tried in Britain (**the African Institution**, Freetown), in **Haiti** (Boyer's immigration of American Negroes, 1824), and in **Canada** after emancipation.","The societies' agents **purchased land from the chiefs** – Cape Mesurado in 1821 – built the station, and defended it; the settlers bore fever, quarrel with the kings of the shore, and the loss of most of the first parties within a few years."]},
    {k:"p", t:"The **purpose of the ACS** was, in its own words, 'to make provision for the people of colour' and to plant a free Christian state on the coast of Africa; some of its members sought the slow ending of slavery and the return of the enslaved to their own land, and others only wished to remove free Black people from the States. Both motives belong to the record."},
    {k:"rule"},
    {k:"h3", t:"Early Liberian Kingdoms"},
    {k:"p", t:"Long before the ships came, the land that became Liberia had its own peoples, states and governments: the town and the confederacy, not the great empire, was the usual form in the forest country."},
    {k:"table", head:["People","Their polities and fame","Where"], rows:[
      ["Kpelle, Loma, Mano and Mende","Chiefdoms of the northern hills with the strong rule of the Poro; iron working, rice and cola trade; the war dances and the masks","The northern forest and highland"],
      ["Bassa, Dei and Gola","The coastal and riverain towns of the Bassa lagoon and the St. Paul, famous as farmers, fishermen and traders, with their own king and council","Grand Bassa, Rivercess, Montserrado, Bomi"],
      ["Vai","A literate trading people with a written syllabary, the great cloth of country cloth and indigo, and long trade routes to Timbuktu and the coast","Grand Cape Mount, Bomi and into Sierra Leone"],
      ["Gola","The people of the west coast, remembered as senior owners of the soil; their Sorso oracle and the medicine of the forest","Grand Cape Mount, Bomi, Montserrado"],
      ["Kru","No kings, but a federation of towns with written-style treaties and the strongest reputation on the coast: sea-faring folk, canoe men, deep-sea fishermen, pilots and mariners hired by every ship","Sinoe, Maryland, Grand Kru, and the coast as far as Sierra Leone"],
      ["Grebo and Krahn","Great men's houses and warrior-age grades; skilled carvers, farmers of cocoa and coffee, and the 'town king' rule","Grand Butu, Sinoe and the Côte d'Ivoire border"],
      ["Gio (Dan)","The free and warlike people of the Wologisi; independent farming and carving, and a proverb-law of the council of the boys' and men's houses","The south-eastern border"]
    ]},
    {k:"p", t:"The **Gola and Dei towns of the Mesurado and of Water Town**, the **Bassa kingdoms of the St. Paul and the Bassa lagoon**, and the **chiefdoms of the Gbandi and of Lofa** were among the polities that treated, traded and fought with the agents of the settlement; the treaties signed with the Gola kings in 1821 open the constitutional story of the republic."},
    {k:"rule"},
    {k:"h3", t:"The Founding of Liberia and the Governors before Independence"},
    {k:"num", items:["**1821** – Cape Mesurado purchased from the Gola chiefs by **Dr. Eli Ayres** and **Lt. R. F. Stockton**.","**1822** – the first settlers land at **Providence Island**; the settlement at Cape Mesurado follows.","**1824** – the town at Cape Mesurado is named **Monrovia**; **J. R. Yeats** and others are the first agents.","**1833** – the first native treaty and the founding of **Bassa Cove**; the stations grow along the coast.","**Governors appointed by the ACS**: **J. B. Pinney** (1833, the first Governor, from South Carolina), **Thomas Buchanan** (1839), and **Joseph Jenkins Roberts** (1841, the first Black Governor and the last of the colonial period).","**1839** – the settlements are united as the **Commonwealth of Liberia**; a constitution of 1839 gives the people an assembly.","**26 July 1847** – the **Declaration of Independence** is signed and the **Constitution of 1847** adopted; **Joseph Jenkins Roberts** is elected the **first President of the Republic** in 1848.","**1850s-1860s** – treaties of friendship and the borders settled with Britain and France; the Republic's territory grows to its present shape with the annexation of the interior, and recognition by the United States comes in **1862**."]},
    {k:"rule"},
    {k:"h3", t:"Periods in Liberian History"},
    {k:"table", head:["Period","Dates","What marked it"], rows:[
      ["Colonial period","1822-1839","Settlement under the American Colonization Society; the agents and Governors appointed abroad; the coastal stations founded; war and treaty with the kings of the shore"],
      ["Commonwealth period","1839-1847","The settlements united as the Commonwealth of Liberia with a constitution and an assembly; still under the Society, but governing itself"],
      ["First Republic","1847-1980","Independence under the Constitution of 1847; the True Whig Party's one-party rule after 1878; the citizenship and land questions, the 1910s borders and loan, the 1926 Firestone concession and the 1930 league investigation; the 1946-1960 'Unification' and integration programme; the 1979 rice riots; ended by the coup of 12 April 1980"],
      ["Military interregnum","1980-1984","The People's Redemption Council under Samuel K. Doe; the 1983 Constitution approved by plebiscite"],
      ["Second Republic","1985-present","The elected presidency (Doe 1985; the war years' transitional governments; Taylor 1997; Sirleaf 2005; Weah 2018; Boakai? – the succession of the ballot), the multi-party system, the civil war of 1989-1996 and 1999-2003, the Truth and Reconciliation Commission, and the rebuilding of the state"]
    ]},
    {k:"p", t:"Between the republics stood the **interim governments** – Sawyer's Council of State (1990), the National Transitional Governing Council (1994) under Sankawulo, the Council of State under **Ruth Sando Perry** which brought the 1997 election, and the National Transitional Government of Liberia under **Gyude Bryant** (2003-2006) which carried the country to the election of 2005."},
    {k:"rule"},
    {k:"h3", t:"Special Population Groups"},
    {k:"p", t:"A **special population group** is a group whose members need particular care, protection and legal respect because of weakness, need or neglect: the old, persons living with HIV, and persons with disability. The strength of a nation is measured by how it treats these."},
    {k:"table", head:["Group","Their needs","The duties of us all"], rows:[
      ["The elderly","Care in sickness and in age, a share of family income, respect and honour, a place in the council, protection of their property, and an end to the accusation of witchcraft","Honour them and consult them; give them the seat; take them to the clinic; never call them a curse; hear their story and write it down for the class"],
      ["Persons living with HIV (PLHIV)","Confidential treatment and medicine, work and schooling without discrimination, and freedom from shame","Do not reveal a status; share food and tools; walk with the person to the clinic; learn the facts of transmission; speak against the joke and the sermon that wound"],
      ["Persons with disabilities","Rehabilitation, education, work, accessibility, equipment, and a voice in decisions","Do not hide or mock; build the ramp and widen the door; learn a little sign; include them in the game, the club and the class; help them speak for themselves"]
    ]},
    {k:"p", t:"**Suffrage** – the right to vote – was long denied to the interior peoples of Liberia and to many others, and **sovereignty** rests now on every adult citizen; the history of these groups is a lesson that rights must be won, kept, and extended to those still left out."}
  ],
  focus:["Trans-Atlantic Slave Trade","The founding of the ACS and other colonization societies","Early Liberian kingdoms","The founding of Liberia and Governors before independence","Periods in Liberian history: Colonial, Commonwealth, First Republic, Second Republic","Purpose of the ACS","Special population groups: the elderly, PLHIV, the disabled"],
  terms:[
    {t:"colonial period", d:"the years 1822 to 1839 when Liberia was governed by the ACS", x:"The colonial period ended in 1839."},
    {t:"commonwealth", d:"the 1839–1847 union of the Liberian settlements under one governor", x:"The Commonwealth preceded independence."},
    {t:"First Republic", d:"the period from independence in 1847 to the coup of 1980", x:"The First Republic lasted 133 years."},
    {t:"Second Republic", d:"the period from the 1986 Constitution to the present", x:"We live in the Second Republic."},
    {t:"governor", d:"the official who ruled Liberia before independence", x:"Thomas Buchanan was a governor."},
    {t:"kingdom", d:"a state ruled by a king or chief", x:"Early Liberian kingdoms traded along the coast."},
    {t:"abolition", d:"the ending of slavery by law", x:"Abolition came at different times in different lands."},
    {t:"special population group", d:"a group needing particular protection, such as the elderly or disabled", x:"Special population groups have specific rights."},
    {t:"suffrage", d:"the right to vote", x:"Suffrage was later extended to all adults."},
    {t:"sovereignty", d:"the full independent authority of a state", x:"Liberia gained sovereignty in 1847."}
  ],
  facts:[
    {q:"Who founded the Liberian state?", a:"The American Colonization Society, which settled free men of colour from the United States, together with the indigenous peoples already living in the land."},
    {q:"Name three founding members of the ACS.", a:"Bushrod Washington, Elijah Caldwell and Robert Finley."},
    {q:"When was Liberia officially founded as an independent state?", a:"26 July 1847."},
    {q:"Name the four main periods of Liberian history.", a:"Colonial (1822–1839), Commonwealth (1839–1847), First Republic (1847–1980) and Second Republic (1986–present)."},
    {q:"Who was the first President of Liberia?", a:"Joseph Jenkins Roberts."},
    {q:"Name three special population groups.", a:"The elderly, people living with HIV (PLHIV), and people with disabilities."}
  ],
  tf:[
    {s:"Joseph Jenkins Roberts was the first President of Liberia.", a:"true", why:"He was inaugurated in 1848 after independence in 1847."},
    {s:"The Commonwealth period came after the First Republic.", a:"false", why:"The Commonwealth (1839–1847) came before the First Republic."},
    {s:"There were organised kingdoms in the Liberian area before 1822.", a:"true", why:"Early Liberian kingdoms and chiefdoms traded along the coast and interior."},
    {s:"The First Republic ended with the coup of 1980.", a:"true", why:"The 1980 coup ended 133 years of the First Republic."},
    {s:"The elderly have no special rights in Liberia.", a:"false", why:"They are a special population group entitled to care, respect and protection."},
    {s:"The ACS was founded to end all slavery worldwide.", a:"false", why:"Its purpose was to settle free and freed black people from the United States in Africa."}
  ],
  apply:[
    {q:"Why do some historians say Liberia was founded by two peoples rather than one?", a:"Because the indigenous peoples had lived in and governed the land for centuries before the settlers arrived; the modern state grew from the meeting of both."},
    {q:"What were the main causes of tension between settlers and indigenous people?", a:"Disputes over land ownership, differences in religion and education, unequal political power and citizenship, and control of trade."},
    {q:"How should society care for its elderly citizens?", a:"By respecting them, providing pensions and healthcare, keeping them in family life rather than isolation, and using their knowledge and advice."},
    {q:"Why is it important to study the different periods of Liberian history?", a:"To understand how present problems and institutions arose, to learn from past mistakes such as exclusion and conflict, and to build a fairer future."}
  ],
  sort:{ title:"Periods, people and groups",
    groups:[
      {name:"Periods of history", items:["Colonial 1822–1839","Commonwealth 1839–1847","First Republic 1847–1980","Second Republic 1986–present"]},
      {name:"Founders of the ACS", items:["Bushrod Washington","Elijah Caldwell","Robert Finley"]},
      {name:"Early leaders", items:["Jehudi Ashmun","Thomas Buchanan","Joseph Jenkins Roberts"]},
      {name:"Special population groups", items:["The elderly","PLHIV","The disabled"]}
    ]},
  mapwork:{ title:"Timeline of Liberian history", caption:"Complete the timeline, writing what happened at each date.",
    items:[
      {p:"1816", f:"the American Colonization Society is founded"},
      {p:"1822", f:"settlers land at Providence Island; the colonial period begins"},
      {p:"1839", f:"the settlements unite as the Commonwealth of Liberia"},
      {p:"1847", f:"Liberia declares independence on 26 July"},
      {p:"1980", f:"a military coup ends the First Republic"},
      {p:"1986", f:"a new Constitution begins the Second Republic"}
    ]},
  casestudy:{ title:"Two accounts of 1822",
    text:"A settler's letter of 1823 describes the landing at Cape Mesurado as the arrival of civilisation and Christianity in a wild land. An oral tradition of the Dei people records that their king, King Peter, was pressed to sign away land he did not believe he could sell, because land belonged to the ancestors and the whole people. Historians today read both accounts together to understand what happened.",
    questions:[
      {q:"How did the settler describe the landing?", a:"As the arrival of civilisation and Christianity in a wild land."},
      {q:"Why did King Peter believe he could not sell the land?", a:"Because in Dei tradition land belonged to the ancestors and the whole people, not to one man."},
      {q:"Why do historians read both accounts?", a:"Because each gives only one point of view; together they give a fuller and fairer understanding."}
    ]},
  project:{ title:"Historical enquiry",
    brief:"Investigate one period of Liberian history using two sources.",
    steps:["Choose one period: Colonial, Commonwealth, First Republic or Second Republic.","Find two facts from a book or textbook.","Ask an elder for one memory or story about the period, if it is within living memory.","Note where the two sources agree and disagree.","Write a one-page account and present it."],
    criteria:["Period clearly chosen","Two written facts recorded","One oral source used","Agreement and difference noted","A clear one-page account"]},
  activities:["Explain who founded the Liberian state","List the founding members of the ACS","Identify the periods of Liberian history","Discuss the rights of special population groups","Construct a timeline of Liberian history"],
  materials:["Liberian history textbook","Timeline chart","Pictures of early presidents and governors","Map of early settlements"],
  assessment:["Quizzes","Timeline task","Historical enquiry","Class participation","Test"]
},
{
  grade:6, period:"II", sem:"One", icon:"🌾",
  title:"Ways of Earning a Living in Liberia and Selected African Countries",
  subtitle:"Farm crops of West Africa, cattle breeding, mechanised rice, and occupations of North Africa",
  outcomes:["Learners make rational decisions about career choices and matters affecting their wellbeing","Learners identify different cultural values and their influence on people's lives"],
  objectives:["Identify some general farm crops common to selected countries of West Africa","Identify some major cattle breeding countries in West Africa","Discuss problems associated with agriculture","Describe occupations in North, East and South Africa","Relate occupation to cultural values"],
  note:"Each West African country is known for particular crops: <b>Ghana – cocoa</b>, <b>Guinea – cattle</b>, <b>Sierra Leone – coffee</b>, <b>Nigeria – cocoa and oil</b>, <b>Liberia – rubber</b>. In <b>North Africa</b> the <b>Moors</b> raise cattle, the <b>oasis dwellers</b> grow millet and melons, and the <b>Tibu</b> herd cattle.",
  study:[
    /* ---- course text: Semester One, Period II (guide pp. 68-70) ---- */
    {k:"h3", t:"Selected West African Countries and Their Crops"},
    {k:"p", t:"Each country of the region is known for what it grows best, and the crops are called **cash crops** when they are grown to be sold or exported."},
    {k:"table", head:["Country","Chief crops and products","Notes on how they are grown"], rows:[
      ["Ghana","Cocoa, timber, gold, manganese, bauxite; yam, maize, cassava, plantain","Cocoa on small family holdings in the forest south; dried and fermented on mats; the main source of the world's chocolate"],
      ["Guinea","Cattle and live animals, bauxite, rice, palm oil, groundnut","Fulah herds move with the rains along the Fouta Djallon; the rice of the mangrove swamps is famous"],
      ["Sierra Leone","Coffee, cocoa, palm oil and kernel, diamond, fish, rice","Smallholder coffee on the slopes; the Krio and Mende farmer's rice is the staple of the country"],
      ["Nigeria","Cocoa, groundnut and cotton, oil palm, rubber, and petroleum; yam and cassava","The northern groundnut pyramids, the western cocoa belt, and the oil wells and the refineries of the delta"],
      ["Liberia","Rubber, timber, iron ore, oil palm, cocoa and coffee; rice and cassava","The Firestone and state concession plantations beside the small-tapper's block; the forest and the mine"],
      ["Côte d'Ivoire","Cocoa (the world's first), coffee, palm oil, rubber, pineapple, cotton","Cocoa from the south-east, with migrants from the north and from Liberia working the new blocks"],
      ["Mali and Niger","Millet and sorghum, cotton and groundnut, cattle, goats and camels; salt from the Sahara","River Niger irrigation for the cotton; the trans-Saharan salt caravan of Taghaza"],
      ["Senegal and The Gambia","Groundnut, millet, fishing, phosphate, and gum arabic","The groundnut basin supplies oil and stockcake; the sea and the river give fish for the tables of the region"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Cattle Breeding in West Africa"},
    {k:"bul", items:["**Where** – the savannah belt: Fulani herds of **Guinea, Mali, Senegal, Burkina Faso, Niger, northern Nigeria and northern Ghana**; cattle need the open grass of the savannah and are kept on the forest edge where the **tsetse fly** carries sleeping sickness of man and **nagana** of cattle.","**Breeds** – the humped **Zebu (Brahman type)**, the small red **Djallonké/Azawak** cattle; long-horned white cattle of the Fulani; the dwarf, trypanotolerant West African cattle of the coast.","**How the Fulani herd** – a way of life: the family moves with the herds to pasture and water, the milk and blood and butter feed them, cattle are bride price, wealth and sacrifice; some men walk the beasts to the town market.","**Products** – milk, butter, meat and hide; dung for fuel and for the field; the ox for the plough and the cart; the horn for the drinking vessel; and the manure that keeps the soil rich.","**The problems** – the tsetse belt to the south, the drying-up of the wells, the bush being burned and overgrazed, stock disease and the missing veterinary post, theft and cattle raid, the quarrel between herder and farmer over the crop trampled on the dry-season path, and the long trek to market without water.","**The improvements** – the dipping tank and the spray race, the veterinary clinic and the campaign, the boreholes and the small dam, the ranch and the fodder plot, the improved bull and the herd book, and the agreement between farmers and herders on the grazing path."]},
    {k:"rule"},
    {k:"h3", t:"Mechanised Rice Cultivation"},
    {k:"p", t:"Rice is the staple food of Liberia and of the whole Mano River country. **Mechanised rice cultivation** is the growing of rice with machines – tractors, ploughs, harrows, levellers, seeders, harvesters, threshers and the mill – instead of only with the machete, the hoe and the hand."},
    {k:"num", items:["**Laying out the swamp** – the bund and the canal are made so that water can be held at an even depth and drawn off at will; the field is levelled, for standing water must be no deeper than the young plant.","**Tillage** – a tractor with a disc plough or a power tiller turns and puddles the soil into a smooth mud.","**Seed and planting** – certified seed of an improved variety (ARDA/CIRAD lines, the lowland **Lema Sue**, **Bagawuri** and **Lofa** types) is drilled or broadcast, or the seedlings are transplanted in rows; a machine transplanter may set them.","**Weeding and water** – pre-emergent herbicide and the weeder keep the grass down; the water level is managed, then cut off before harvest.","**Harvest and threshing** – a reaper-binder or a combine cuts and threshes; on the small farm the panicle is cut with a knife and threshed by beating or by a power thresher.","**Drying and milling** – the paddy is dried on a concrete floor to a fixed moisture and then milled, de-husked, polished and graded; good drying is what saves the price.","**Stubble and rotation** – the straw feeds cattle or is turned in; a crop of vegetable or groundnut after the rice keeps the soil and brings cash."]},
    {k:"bul", items:["**Advantages** – more acres worked in the short time, timely planting, less loss at harvest, a cleaner milled grain, and the labour that the young will accept.","**Requirements** – flat and irrigable land with a clear title, a machine and its fuel and spare parts, a trained operator and mechanic, credit, and a mill and road near the field.","**Problems** – dear fuel and broken parts, the flooded bund, the small plot that a tractor cannot serve, salinity on the coast, and the farmer's loss when the price of imported rice is held down by subsidy abroad.","**The small-farm way that works** – the power tiller, the treadle thresher, the maize sheller, the rice mill at the village, the hand-pump and the low bund – mechanisation that the cooperative can own together."]},
    {k:"rule"},
    {k:"h3", t:"North Africa: Peoples and Occupations"},
    {k:"p", t:"North Africa is the land of the **Sahara** and the Mediterranean shore – Morocco, Algeria, Tunisia, Libya, Egypt, Sudan, Mauritania, Mali and Niger. Rain fails almost everywhere, so people live where the water is: the Nile, the coast, the mountain and the oasis."},
    {k:"table", head:["Group","Where they live","Their occupations"], rows:[
      ["The Moors (Bidhan)","Mauritania and the western Sahara","Cattle, camel and goat raising on the pasture of the sandy plain; caravan trade in salt and dates; the Islamic learning of the Chinguetti libraries; and fishing on the Atlantic shore"],
      ["The oasis dwellers (Ksour and Siwa types)","The wells and springs of the Sahara in Algeria, Tunisia, Libya, Mali and Niger","Date palms under the shade of the wall, with millet, sorghum, rice in the watered plot, melon, tomato and vegetable; the underground channel (foggaras) lifts the water; small trade and crafts"],
      ["The Tibu (Toubou)","The Tibesti and the Borkou of northern Chad and southern Libya","Cattle, goat and camel herding, the salt mine and the caravan across the desert, the small wheat and millet garden at the well, and the guiding of the traveller"],
      ["The Tuareg","The central Sahara and Sahel","Camel and goat herding, the caravan, silver work, and music of the desert"],
      ["The Fellata / Fulani","The Sahel belt and the savannah","Cattle herding, milk and butter, the pilgrimage for work, and the seasonal farm"],
      ["The farmers and townspeople of the Nile, and of the coast","The Nile valley, the Maghreb towns and the ports","Irrigated cotton, wheat, rice, citrus and sugar; weaving, tanning, brick and copper work; trade and shipping, and the quarry and the oil well"]
    ]},
    {k:"p", t:"Other occupations of the north: **salt mining and the caravan**, fishing on both seas, **oil and gas** in Algeria, Libya, Egypt and Mauritania, **phosphate** in Morocco, Tunisia and Western Sahara, **tourism** at the pyramids, Carthage and the desert fort, the **textile and craft** work of Fez, Marrakesh, Tunis and Cairo, and the **date export** of the oases of Algeria and Tunisia."},
    {k:"rule"},
    {k:"h3", t:"Cultural Values and Career Choice"},
    {k:"p", t:"A **career** is the work a person takes up for life; a **cultural value** is the standard a people holds dear – hard work, honesty, service to the family, respect for elders, hospitality, and courage."},
    {k:"bul", items:["The values that should guide the choice: **service to the community**, the **dignity of all honest labour**, the **use of one's own talent**, the good of the family, and **honesty** in the dealing.","The pressures that mislead a choice: the quick money and the show of the town, the fashion for a university degree and the scorn of the farm and the trade, the idea that a girl should only marry or nurse, the family forcing a son to be a lawyer, and the pull of smuggling, 'yahoo' fraud and the easy life.","What a good choice considers: the need of the country (farmers, nurses, teachers, mechanics, engineers, extension agents, and technicians are wanted), the ability and interest of the person, the training available, the risk and the cost, and whether the work can support a family with honour.","The role of the school and the guidance counsellor: information on the trades and courses, work experience on a farm and in a shop, and the practice of choosing for oneself with advice.","Where the culture and the career meet: the young person who improves the rice, the weaving, the dance, the cloth or the story of his people is serving both Liberia and himself – the old skills have a future and a market."]}
  ],
  focus:["Selected West African countries and their crops: Ghana–cocoa, Guinea–cattle, Sierra Leone–coffee, Nigeria–cocoa, Liberia–rubber","Cattle breeding in West Africa","Mechanised rice cultivation","North Africa: cattle raising among the Moors, oasis dwellers, the Tibu cattle herders, other occupations","Cultural values and career choice"],
  terms:[
    {t:"cash crop", d:"a crop grown mainly for sale or export", x:"Cocoa is Ghana's leading cash crop."},
    {t:"cattle breeding", d:"the raising of cattle for meat, milk and hides", x:"Cattle breeding is important in Guinea."},
    {t:"mechanised farming", d:"farming using machines such as tractors and harvesters", x:"Mechanised rice cultivation raises yields."},
    {t:"oasis", d:"a fertile place in a desert where there is water", x:"Oasis dwellers grow dates and millet."},
    {t:"Moors", d:"a people of the northern Sahara who raise cattle and trade", x:"The Moors move with their herds."},
    {t:"Tibu", d:"a Saharan people who herd cattle", x:"The Tibu are cattle herders."},
    {t:"nomad", d:"a person who moves from place to place with animals", x:"Nomads follow the rains with their herds."},
    {t:"tsetse fly", d:"an insect whose bite spreads disease to cattle and people", x:"The tsetse fly limits cattle keeping in the forest zone."},
    {t:"yield", d:"the amount a farm produces", x:"Better seed raises the yield."},
    {t:"occupation", d:"the work by which a person earns a living", x:"Fishing is a common coastal occupation."}
  ],
  facts:[
    {q:"Match these countries to their leading crop: Ghana, Sierra Leone, Liberia.", a:"Ghana – cocoa; Sierra Leone – coffee; Liberia – rubber."},
    {q:"Name a major cattle breeding country in West Africa.", a:"Guinea (also Mali, Niger and northern Nigeria)."},
    {q:"What is mechanised rice cultivation?", a:"Growing rice with machines such as tractors, planters and harvesters instead of only hand tools."},
    {q:"Name three groups of North Africa and their occupations.", a:"The Moors — cattle raising and trade; the oasis dwellers — growing millet, rice and watermelon; the Tibu — cattle herding."},
    {q:"Why is cattle keeping difficult in the forest zone of West Africa?", a:"Because of the tsetse fly, whose bite spreads disease to cattle."},
    {q:"Give two problems facing agriculture in West Africa.", a:"Any two: unreliable rainfall, pests and disease, poor roads, lack of credit and machinery, low prices, and soil exhaustion."}
  ],
  tf:[
    {s:"Cocoa is the leading cash crop of Ghana.", a:"true", why:"Ghana is one of the world's largest cocoa producers."},
    {s:"Rubber is Liberia's best-known cash crop.", a:"true", why:"Firestone and other plantations produce rubber for export."},
    {s:"The tsetse fly helps cattle to grow fat.", a:"false", why:"Its bite spreads disease that kills cattle."},
    {s:"An oasis is a dry place with no water at all.", a:"false", why:"An oasis is a fertile place in the desert where there IS water."},
    {s:"Nomads move with their animals in search of pasture.", a:"true", why:"They follow grass and water across the dry lands."},
    {s:"Mechanised farming uses machines to raise output.", a:"true", why:"Tractors and harvesters increase the area farmed and the yield."}
  ],
  apply:[
    {q:"Why do most cattle in West Africa come from the north rather than the forest zone?", a:"The northern savanna has open grass, less rainfall and fewer tsetse flies, so cattle stay healthy; the forest zone is wet and tsetse-infested."},
    {q:"Should Liberia depend mainly on rubber for export income? Give reasons for your answer.", a:"No — depending on one crop is risky because world prices can fall and disease can strike; Liberia should also develop palm oil, cocoa, fish, timber and processing industries."},
    {q:"How do cultural values influence the work people choose?", a:"Families often expect children to follow their trade; some communities value farming or trading over office work, and some restrict what women may do — all shaping career choices."},
    {q:"Give two advantages and one disadvantage of mechanised rice farming for Liberia.", a:"Advantages: much larger harvests and less back-breaking labour. Disadvantage: machines and fuel are costly and can replace the labour of small farmers."}
  ],
  sort:{ title:"Countries, crops and peoples",
    groups:[
      {name:"West African crops", items:["Ghana – cocoa","Sierra Leone – coffee","Liberia – rubber","Nigeria – cocoa"]},
      {name:"Cattle areas", items:["Guinea","Mali","Northern Nigeria","Niger"]},
      {name:"North African peoples", items:["Moors","Oasis dwellers","Tibu"]},
      {name:"Farming problems", items:["Tsetse fly","Unreliable rainfall","Poor roads","Low prices"]}
    ]},
  mapwork:{ title:"Crops and occupations of Africa", caption:"On the map of Africa, mark where each activity is carried on.",
    items:[
      {p:"Ghana", f:"cocoa growing in the forest belt"},
      {p:"Liberia", f:"rubber plantations and oil palm"},
      {p:"Guinea and Mali", f:"cattle breeding in the savanna"},
      {p:"Sahara oases", f:"date, millet and watermelon growing by oasis dwellers"},
      {p:"Northern Nigeria", f:"groundnut growing and cattle rearing"},
      {p:"East Africa", f:"coffee, tea and cattle keeping in the highlands"}
    ]},
  casestudy:{ title:"Two farmers, two countries",
    text:"Kwame farms three hectares of cocoa in the forest of Ghana. He sells his beans to a marketing board at a fixed price and can plan ahead. Sekou keeps forty cattle in the savanna of Guinea. He moves them south in the dry season for pasture and sells young bulls at the market. Kwame worries about falling world cocoa prices; Sekou worries about drought and cattle disease.",
    questions:[
      {q:"What does each man produce?", a:"Kwame produces cocoa; Sekou raises cattle."},
      {q:"Why does Sekou move his cattle in the dry season?", a:"To find pasture and water for the herd."},
      {q:"Name the main worry of each farmer.", a:"Kwame fears falling world cocoa prices; Sekou fears drought and cattle disease."}
    ]},
  project:{ title:"Career plan",
    brief:"Plan a career for yourself based on what you have learned.",
    steps:["Name a career you would like and say why.","Find out what education or training it needs.","List two skills the job requires.","Find out whether the job exists in your county, and where.","Write a step-by-step plan from now until you enter that career."],
    criteria:["A realistic career chosen","Training requirements identified","Two skills listed","Local availability researched","A clear step-by-step plan"]},
  activities:["Identify farm crops common to West African countries","Identify major cattle breeding countries","Discuss problems associated with agriculture","Describe occupations in North Africa","Relate occupation to cultural values"],
  materials:["Map of Africa showing crops and livestock","Pictures of cocoa, rubber, cattle and oases","Atlas"],
  assessment:["Quizzes","Map work","Career plan","Class participation","Test"]
},
{
  grade:6, period:"III", sem:"One", icon:"🌍",
  title:"Geography of Africa",
  subtitle:"Location, mountains, rivers and lakes, climate, vegetation and the peoples of Africa",
  outcomes:["Learners analyse the geography of Africa"],
  objectives:["Identify the geographic location of Africa on the world map","Locate the highest mountains in Africa","Name the largest rivers and lakes in Africa","Describe the climatic conditions and vegetation regions of Africa","Identify the major groups of Africa's people"],
  note:"Africa is the world's <b>second largest continent</b>. Its highest mountain is <b>Kilimanjaro</b> (Tanzania); its longest river is the <b>Nile</b>; its largest lake is <b>Lake Victoria</b>. Vegetation runs in belts from the <b>rain forest</b> at the equator through <b>savanna</b> and <b>Sahel</b> to <b>desert</b>.",
  study:[
    /* ---- course text: Semester One, Period III (guide pp. 71-72) ---- */
    {k:"h3", t:"The Boundaries of Africa"},
    {k:"p", t:"Africa is the **second largest continent** – about 30 million square kilometres, a fifth of the land of the earth – and is cut by the **equator** through its middle, so that its climate and its seasons mirror one another north and south."},
    {k:"bul", items:["**North** – the **Mediterranean Sea**, with Europe on the other side; the **Strait of Gibraltar**, only about 14 km wide, joins the Mediterranean to the Atlantic.","**West** – the **Atlantic Ocean**; the great bulge runs from Cape Spartel and Dakar to the Gulf of Guinea.","**East** – the **Red Sea** and the **Gulf of Aden** and the **Indian Ocean**; the **Suez Canal** cuts the narrow neck between the Red Sea and the Mediterranean.","**North-east** – the **Isthmus of Suez** and the **Bab-el-Mandeb** strait; Asia is a stone's throw across the water.","**South** – the **Cape of Good Hope** and the **Agulhas**, where the two oceans meet in a cold current and a rough sea."]},
    {k:"rule"},
    {k:"h3", t:"The Highest Mountains of Africa"},
    {k:"table", head:["Mountain / range","Where","Height and note"], rows:[
      ["Kilimanjaro","Tanzania, near the Kenya border","The highest mountain in Africa, about 5,895 m; a free-standing extinct volcano with ice on its summit, and the national park and the coffee of its slopes"],
      ["Mount Kenya","Kenya","About 5,199 m; a granite massif that gives the country its name and much of its water"],
      ["The Rwenzori range","On the Uganda/DR Congo border","The 'Mountains of the Moon', about 5,109 m; snow and glacier near the equator, and the source water of the Nile"],
      ["Mount Cameroon (Fako)","Cameroon, on the coast","About 4,095 m; an active volcano"],
      ["The Ethiopian highlands (Ras Dashan)","Ethiopia","About 4,550 m; the water tower of the Nile"],
      ["The Atlas","Morocco, Algeria, Tunisia","Toubkal, about 4,167 m; the snow that waters the oasis and the Mediterranean shore"],
      ["The Drakensberg","South Africa / Lesotho","About 3,482 m; the wall over the escarpment"],
      ["Mount Nimba and Woléwari","Liberia's borders","The forest peaks of our own country, which catch the first rain from the sea"]
    ]},
    {k:"rule"},
    {k:"h3", t:"The Largest Rivers and Lakes"},
    {k:"table", head:["River","Length and course","Its uses and users"], rows:[
      ["The Nile","The longest river of the world, about 6,650 km; the White Nile from Lake Victoria and the Blue Nile from Ethiopia join at Khartoum and cross the Sahara to the Mediterranean","Water for the fields and the cities of Egypt and Sudan; the Aswan Dam for power and flood control; fishing; the silt that makes the valley green; the date and cotton of the irrigation scheme; navigation and the ferry"],
      ["The Congo (Zaire)","About 4,700 km; it sweeps a great arc through the equatorial forest to the Atlantic","The largest discharge in the tropics; navigation on the middle reach; the Inga falls for power; the fish of the river and the forest people who live by it"],
      ["The Niger","About 4,180 km; rises in Guinea, curves through Mali and Niger to the delta in Nigeria","The Inner Niger Delta's rice, cattle and fishing; the Office du Niger irrigation; the Kainji and Jebba dams; canoe and ferry transport; groundnut and cotton of the valley"],
      ["The Zambezi","About 2,574 km to the Indian Ocean","Victoria Falls, the Kariba and Cahora Bassa dams for electricity, fishing and tourism"],
      ["The Senegal, Gambia, Volta, Orange, Limpopo and Chad","The shorter rivers of the west and south","Rice, irrigation, the Akosomb Dam, the fisheries, and the seasonal flood-farming of the recession"],
      ["The Mano, St. Paul and Cavalla","Our own short, rapid rivers","Water, fish, sand, the power of the falls, and the canoe road of the forest"]
    ]},
    {k:"table", head:["Lake","Where","Its uses and users"], rows:[
      ["Lake Victoria","Tanzania, Uganda, Kenya","The largest lake in Africa and the second freshest-water lake in the world; the source of the Nile; the Nile perch and tilapia fishery; water, ferry and the lake shore farming"],
      ["Lake Tanganyika","Tanzania, DR Congo, Burundi, Zambia","The deepest lake of Africa and a fishery and mineral wealth"],
      ["Lake Chad","Chad, Cameroon, Niger, Nigeria","Once the glory of the Sahel fishing and grazing; now shrinking with the drought and the drawn-off water – a lesson on climate and use"],
      ["Lake Niger's deltas and lakes (Debo and Karyo), Lake Volta","Mali, Ghana","Lake Volta, the greatest artificial lake by surface, gives Ghana its power and its fish"],
      ["Lake Piso","Grand Cape Mount, Liberia","Our own lake: fish and ferry, the rice of the shore, and the bird life"]
    ]},
    {k:"rule"},
    {k:"h3", t:"The Peoples of Africa: Groupings and Complexion"},
    {k:"bul", items:["**The Negro peoples of the forest and the savannah** – the great majority: the **Mande** (Mali, Bambara, Malinke, Dioula, Kissi, Kpelle, Mende), the **Atlantic-Congo** family (Yoruba, Igbo, Fon, Ewe, Akan, Kru, Grebo, Bantu of the Congo and East Africa, including the **Zulu, Shona, Swahili, Lingala and Kikuyu**).","**The Hamitic and Cushitic peoples of the north-east and the horn** – Somali, Afar, Oromo, Beja and the Amhara of Ethiopia.","**The Khoisan (Bushmen and Hottentot) peoples** of the Kalahari and Namib, with their click sounds; the earliest stock of the south.","**The Berber and Arab peoples of the north** – Kabyle, Tuareg, Riffian, Moor, Libyan, Egyptian and Sudanese Arab.","**Asians and Europeans of the modern age** – the Indians of East Africa and Natal, the Boers/Afrikaners, the Portuguese of Angola and Mozambique, and the Levantine traders of the west coast."]},
    {k:"p", t:"**Complexion**: skin colour runs from the very dark of the rain-forest and equatorial belt to the lighter brown of the Sahel, the horn and the Mediterranean shore – chiefly because of the **sun**: dark skin with its melanin protects the body in the strong tropical light, while paler skin makes the vitamin D that the weak northern sun does not supply. Colour is therefore a matter of climate and of ancestry, not of worth, of ability or of rank; and the false 'races' invented to grade men are the root of the slave trade, of apartheid, and of the prejudice that still wounds."},
    {k:"rule"},
    {k:"h3", t:"The Major Cities of Africa"},
    {k:"p", t:"Africa's cities have grown with frightful speed as people leave the country for work, schooling and peace. **Population** figures below are of the metro area and are approximate; the pupil should check the latest census."},
    {k:"table", head:["City","Country","About (metro population)","What it is for"], rows:[
      ["Lagos","Nigeria","over 15 million","The largest city of Africa; the port, the industry, the oil, the commerce and the film and music of the region"],
      ["Cairo","Egypt","over 20 million","The great Arab city on the Nile; government, learning, textile and tourism of the pyramids"],
      ["Kinshasa (with Brazzaville opposite)","DR Congo / Congo","over 15 million","The capital on the Congo; music, the river port and the trade"],
      ["Johannesburg","South Africa","over 10 million","Gold, finance, industry and the mine towns of the Witwatersrand"],
      ["Nairobi","Kenya","about 5 million","The East African hub, the park, the conference and the flower export"],
      ["Addis Ababa","Ethiopia","about 5 million","The seat of the African Union; the highland capital and the coffee trade"],
      ["Dakar","Senegal","about 4 million","The western port, the university and the fishing fleet"],
      ["Abidjan","Côte d'Ivoire","about 5 million","The cocoa port and the finance of the francophone states"],
      ["Accra","Ghana","over 4 million","The coastal capital, the mine and the cocoa trade"],
      ["Monrovia","Liberia","over 2 million","The national capital, the Freeport, Broad Street trading and the recovering city; Bensonville is the county capital of Montserrado"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Climatic Conditions, Vegetation and the Great Regions"},
    {k:"p", t:"Africa's climates are set in rings about the equator: **equatorial (wet), tropical wet-and-dry, semi-arid (Sahel), arid (desert), and Mediterranean** at the two corners – and mirrored south of the equator, with the added effects of height and of the cold currents off Namibia and Morocco."},
    {k:"table", head:["Region","Climate and rainfall","Vegetation","People, work and animals"], rows:[
      ["The rain forest belt (Liberia, Sierra Leone, Guinea, Côte d'Ivoire, Ghana, Nigeria, Cameroon, Congo)","Hot and wet; 1,500-4,000+ mm, with two wet and two dry periods in the east; no true winter","Dense evergreen forest in layers – the giant trees, the middle woods, the palms and the creepers; the epiphytes; and the mangrove on the coast","Rice, cassava, plantain, yam, cacao, coffee, oil palm and rubber; the tsetse keeps cattle few; the forest gives timber, bush meat, medicine, and the monkey, elephant, hippo and bird"],
      ["The savanna","Hot; one long dry season and rain of 500-1,500 mm","Tall grass with the baobab, shea and acacia; gallery forest on the streams","Millet, sorghum, maize, groundnut and cotton; the great herds of cattle, goat and sheep; the game park – lion, elephant, zebra, giraffe"],
      ["The Sahel","Hot, dry, and failing; 200-600 mm and much evaporation","Short grass, thorn scrub and the acacia","Nomadic cattle, goat and camel; millet on the sand; the danger of drought, over-grazing and the advancing sand"],
      ["The desert (Sahara, Kalahari, Namib)","Extremely dry; less than 100 mm, with great heat by day and frost by night","Bare sand, gravel and stone; only the tamarisk, the grass tuft and the lichen","The oasis date and millet; the caravan and the salt mine; oil, gas, and the minerals beneath the sand; the camel and the goat"],
      ["The Mediterranean corner and the highlands","Warm dry summer, mild wet winter","Olives, vines, figs, orange and cork oak; mountain grass and forest","The farm, the vine and the orchard of the north, and the wheat, the coffee and the tea of the highlands"]
    ]},
    {k:"p", t:"**The desert and the forest are the two edges of the continent's story**: the Sahara is a barrier that forced the trade to walk round it by the rivers and the caravan roads, and the rain forest is the wet country that gives Liberia her water, her timber, her crop and her weather."},
    {k:"bul", items:["**Uses of the rivers and lakes** – drinking and household water, irrigation and the kitchen garden, fish and periwinkle, transport and ferry, the power of the falls, sand, stone and clay, the watering of cattle, the salt pan, tourism and sport, and the washing and the bathing of the whole village.","**Users** – the farmer and the fisher, the herder and the women who fetch water, the miner, the miller, the boatman, the town, the hydro-electric authority, the park, and the industries downstream – which is why a river that crosses several states needs agreement, and why a village must protect its own water."]}
  ],
  focus:["Boundaries of Africa","Highest mountains of Africa","Largest rivers and lakes; uses and users of the rivers and lakes","People of Africa: groupings and complexion","Major cities of Africa and their population","Climatic conditions of Africa","The rain forest and the desert regions"],
  terms:[
    {t:"equator", d:"the imaginary line round the middle of the earth", x:"The equator crosses Africa near Kenya."},
    {t:"Sahara", d:"the largest hot desert in the world, in North Africa", x:"The Sahara covers much of North Africa."},
    {t:"Kilimanjaro", d:"the highest mountain in Africa, in Tanzania", x:"Kilimanjaro is snow-capped despite the heat."},
    {t:"Nile", d:"the longest river in Africa", x:"The Nile flows north to the Mediterranean."},
    {t:"Lake Victoria", d:"the largest lake in Africa", x:"Lake Victoria borders three countries."},
    {t:"rain forest", d:"dense forest with heavy rainfall all year", x:"The Congo rain forest is the second largest in the world."},
    {t:"savanna", d:"tropical grassland with scattered trees", x:"Great herds graze the East African savanna."},
    {t:"vegetation belt", d:"a zone with a particular type of plant life", x:"Vegetation belts run east to west across Africa."},
    {t:"plateau", d:"a large area of high, fairly flat land", x:"Much of Africa is a high plateau."},
    {t:"rift valley", d:"a long deep valley formed where the earth's crust split", x:"The Great Rift Valley runs through East Africa."}
  ],
  facts:[
    {q:"Where is Africa located on the world map?", a:"South of Europe, across the Mediterranean, with the Atlantic Ocean to the west and the Indian Ocean to the east; the equator crosses its middle."},
    {q:"Name the three highest mountains in Africa.", a:"Kilimanjaro (Tanzania), Mount Kenya (Kenya) and the Rwenzori range (Uganda/DR Congo)."},
    {q:"Name the four longest rivers of Africa.", a:"The Nile, the Congo, the Niger and the Zambezi."},
    {q:"Name the largest lake in Africa.", a:"Lake Victoria."},
    {q:"Name the vegetation belts of Africa from the equator northwards.", a:"Rain forest, savanna, Sahel, and desert (the Sahara)."},
    {q:"Name three major cities of Africa.", a:"Any three: Cairo, Lagos, Kinshasa, Johannesburg, Nairobi, Accra, Abidjan."}
  ],
  tf:[
    {s:"Kilimanjaro is the highest mountain in Africa.", a:"true", why:"It rises about 5,895 metres in Tanzania."},
    {s:"The Congo is the longest river in Africa.", a:"false", why:"The Nile is the longest; the Congo carries the most water."},
    {s:"The Sahara is the largest hot desert in the world.", a:"true", why:"It covers much of North Africa."},
    {s:"Africa is the largest continent in the world.", a:"false", why:"Africa is the second largest, after Asia."},
    {s:"The Great Rift Valley runs through East Africa.", a:"true", why:"It stretches from the Red Sea down through Kenya and Tanzania to Mozambique."},
    {s:"Vegetation belts in Africa run roughly east to west.", a:"true", why:"They follow the rainfall bands on either side of the equator."}
  ],
  apply:[
    {q:"Why does the vegetation of Africa change as you travel north from the equator?", a:"Because rainfall decreases with distance from the equator — from heavy rain in the forest belt, to seasonal rain in the savanna, to almost none in the Sahel and desert."},
    {q:"Give three uses of a great African river such as the Nile or the Niger.", a:"Drinking water and irrigation for farming, fishing, transport by boat, and hydro-electric power at dams."},
    {q:"How does the Sahara affect the people who live near it?", a:"They must live near oases or wells, keep hardy animals like camels and goats, move as nomads to find pasture, and trade across the desert routes."},
    {q:"Compare the climate of Liberia with that of Egypt.", a:"Liberia is hot and very wet with a tropical rain forest climate; Egypt is hot and extremely dry desert, depending on the Nile for nearly all its water."}
  ],
  sort:{ title:"Physical Africa",
    groups:[
      {name:"Mountains", items:["Kilimanjaro","Mount Kenya","Rwenzori","Atlas Mountains"]},
      {name:"Rivers", items:["Nile","Congo","Niger","Zambezi"]},
      {name:"Lakes", items:["Lake Victoria","Lake Tanganyika","Lake Chad","Lake Malawi"]},
      {name:"Vegetation belts", items:["Rain forest","Savanna","Sahel","Desert"]}
    ]},
  mapwork:{ title:"Physical map of Africa", caption:"On the map of Africa, locate and label each of the following.",
    items:[
      {p:"The equator", f:"crosses Africa through Gabon, Congo, Uganda and Kenya"},
      {p:"The Sahara Desert", f:"the vast desert across the north of the continent"},
      {p:"River Nile", f:"the longest river, flowing north to the Mediterranean"},
      {p:"River Congo", f:"the river carrying the greatest volume of water in Africa"},
      {p:"Lake Victoria", f:"the largest lake, bordered by Kenya, Uganda and Tanzania"},
      {p:"Mount Kilimanjaro", f:"the highest mountain, in Tanzania"}
    ]},
  casestudy:{ title:"The Nile and Egypt",
    text:"Egypt is almost entirely desert, yet it has farmed for over five thousand years. Nearly all its people live in a narrow green strip along the River Nile and its delta. The Aswan High Dam now controls the flood and generates electricity. Because so little rain falls, every drop of Nile water is shared by agreement among the countries upstream and downstream.",
    questions:[
      {q:"Why do most Egyptians live along the Nile?", a:"Because the rest of the country is desert, and the Nile provides the only water for farming and living."},
      {q:"What two purposes does the Aswan High Dam serve?", a:"It controls the flood and generates electricity."},
      {q:"Why must Nile water be shared by agreement?", a:"Because so little rain falls and many countries upstream and downstream depend on the same river."}
    ]},
  project:{ title:"African region study",
    brief:"Study one region of Africa in detail.",
    steps:["Choose one region: North, West, East, Central or Southern Africa.","Name four countries in it and their capitals.","Describe its climate and vegetation.","Name two physical features and two economic activities.","Draw a labelled map and present your study."],
    criteria:["Four countries and capitals","Climate and vegetation described","Two physical features","Two economic activities","A neat labelled map"]},
  activities:["Identify the geographic location of Africa on the world map","Locate the highest mountains in Africa","Name the largest rivers and lakes","Describe the climatic and vegetation regions","Identify the major groups of Africa's people","Compare the population of major African cities"],
  materials:["Map of Africa and world map","Atlas and globe","Climate and vegetation maps","Population data of African cities"],
  assessment:["Quizzes","Map work","Region study","Class participation","Test"]
},
{
  grade:6, period:"IV", sem:"Two", icon:"🌐",
  title:"Liberia and West Africa",
  subtitle:"Geographic location, population, shared culture, colonial history and social problems",
  outcomes:["Learners analyse the geographical, social and economic trends in West Africa"],
  objectives:["State the geographic location of West Africa","Compare the environmental and climatic conditions of Liberia with her neighbours","Compare similarities in language, customs and general cultural traits","Tell the population and cultural pattern of West African countries","Discuss social problems including juvenile delinquency"],
  note:"West Africa stretches from the Sahara south to the Gulf of Guinea. Liberia shares crops, climate, languages and customs with her neighbours. Only <b>Liberia and Ethiopia</b> escaped European colonisation. <b>Juvenile delinquency</b> is criminal or antisocial behaviour by young people.",
  study:[
    /* ---- course text: Semester Two, Period IV (guide pp. 73-74) ---- */
    {k:"h3", t:"The Geographic Location of West Africa"},
    {k:"p", t:"**West Africa** is the western promontory of the continent: bounded by the **Sahara** on the north, the **Atlantic Ocean** on the west and south, and the **Central African** forest and the Chad basin on the east; it lies between about 4° and 18° north latitude, so that the whole region is tropical. Its coast runs from the mouth of the Senegal river in the north-west to the Bight of Benin in the east, and the region's area is about 5 million square kilometres."},
    {k:"bul", items:["The land rises from the **low coastal plain** – beach, lagoon, mangrove and laterite shelf – through the **forest belt** and the **rolling plateau** to the **highlands** of the Fouta Djallon, the Nimba, Cameroon and Ethiopian massifs.","The **rivers** fall to the sea on the west and south: Senegal, Gambia, Volta, Bandama, Sassandra, Cavalla, St. Paul, Mano, Niger, Benue and the Chad drainage to the inland basin.","Liberia stands at the point where the wet forest coast turns north-west, which is why our climate is the wettest of the region west of Cameroon."]},
    {k:"rule"},
    {k:"h3", t:"Population of Liberia and of West Africa"},
    {k:"p", t:"The region holds over **400 million** people – the most populous part of Black Africa – and the states differ mightily in size."},
    {k:"table", head:["Country","Approximate population","Note"], rows:[
      ["Nigeria","over 200 million","The most populous country of Africa; more than 500 languages"],
      ["Ghana","about 33 million","Densely peopled forest and coast; the receiving country of West African migrants"],
      ["Côte d'Ivoire","about 28 million","The cocoa country, drawing forest migrants from the north and from Liberia and Burkina"],
      ["Niger, Mali, Burkina Faso, Senegal, Guinea","about 20 million each","Sahel and savannah states with fast growth and thin city settlement"],
      ["Liberia and Sierra Leone","about 5 million and 8 million","The two small states of the Mano River; Montserrado alone holds almost half of Liberia's people"],
      ["The Gambia, Guinea-Bissau, Cape Verde, Liberia","under 3 million each","Small populations with an outward coast, fishing, tourism and migration"]
    ]},
    {k:"bul", items:["**A census** is the counting and recording of the people of a country, with their age, sex, home, literacy, work and dwelling; the census figures decide how many Representatives a county returns, where a school or a clinic is built, and what the nation's needs are.","**Population problems of the region** – fast growth out of school and job reach, the crowding of the capitals, the flight of the skilled (**the brain drain**), the refugee movement from civil conflict, child labour and street children, and the pressure of settlement on the forest and the soil.","**What a population policy does** – it promotes schooling for the girl, birth spacing and maternal care, the recording of births, and the dispersal of work and service to the county towns."]},
    {k:"rule"},
    {k:"h3", t:"Liberia and West Africa: Similarities in Language and Culture"},
    {k:"bul", items:["**Language** – Liberia's official language is **English**, as in Sierra Leone, Ghana, Nigeria and The Gambia; the neighbours on three sides are **French**-speaking (Guinea and Côte d'Ivoire), while the people speak their mother tongues: Kpelle, Bassa, Grebo, Kru, Gio, Mano, Vai, Gola, Mende, Loma, Dan, Krahn, Gbii, Dei, Belle, Kissi, Gbandi and Mandingo, with **Krio** and **pidgin English** on the coast of Sierra Leone and Nigeria. The **Mande family** spreads right across the region; so a Kpelle, a Mende, a Vai, a Mandinka and a Dioula man share ancestors, names and words.","**Family and kinship** – the extended family, the clan and the age-mates; respect for elders; the naming ceremony on the eighth day; polygamy tolerated by custom; the woman as trader and the man as farmer and hunter.","**Society and rule** – the **Poro and Sande** and their kindred societies (the **Ndogboi**, **Bundu**, **Kporo**, **Pora**), the **town chief with his council of elders**, the town meeting, the initiation of the boy and the girl, the mask as the voice of the spirit, and the palava settled before the whole town.","**Work** – **rice, cassava, yam, plantain, groundnut, palm oil, cocoa, coffee and cola**; the farm cleared by the men and weeded by the whole family; fishing by canoe and net; the **market day** and the woman trader; the blacksmith, the weaver, the carver and the potter.","**Food and dress** – pounded **fufu/foofoo** and rice with palm-oil and groundnut soup; the pepper soup; **jollof**; the wrap of lappa and country cloth, the embroidered gown and the tie-dyed cloth; the coral bead and the sandal.","**Belief and feast** – one God and the spirit of the ancestors, the Qur'an and the Bible, the harvest dance, the funeral with its drum and its masked dance, the naming feast, and the proverb, the riddle and the folk tale by firelight.","**Music and movement** – the **djembe, sangban, dunun, hand-drum, slit-gong, flute, balafon and the talking drum**; the responsive song; the dance with its shoulder, foot and hip; and the praise name of the family."]},
    {k:"p", t:"These similarities are the reason the peoples of the region move and marry across the borders with ease, and the ground on which **ECOWAS** built the free movement of persons."},
    {k:"rule"},
    {k:"h3", t:"The Colonial History of West Africa"},
    {k:"bul", items:["**Before the Europeans** – the great states of Ghana, Mali, Songhai, Kanem-Bornu, the Hausa city-states, Benin, Oyo, Ashanti, Dahomey and the many stateless societies of the forest; the trans-Saharan trade in gold, salt, kola and slaves; and the coastal trade in cloth, iron, fish and palm produce.","**The Portuguese** reached the coast in the 1440s-1490s (Cadine, Elmina, and the name 'Sierra Leone' from the smoke of the land fires); they came for gold, ivory, pepper and captives, and built the fortified trading posts.","**The Dutch, English, French, Danes, Swedes and Brandenburgers** followed with chartered companies, competing for the trade in gold and slaves; the **forts and castles** of the Gold Coast and the Sierra Leone and Liberia shore are still standing.","**The slave trade** made the coast a 'Slave Coast' for two centuries; its abolition after 1807, and the 'legitimate commerce' in palm oil, groundnut, cocoa and gum, redirected the region's trade.","**The 'Scramble' and colonial rule** – the Berlin Act of 1884-85 set the rules by which France, Britain, Portugal and Germany carved the region; France welded **French West Africa** and **French Equatorial Africa** under a governor-general, Britain ruled by **indirect rule** through the chiefs in Nigeria, the Gold Coast, Sierra Leone and Gambia, and Portugal held Angola, Mozambique and Guinea-Bissau.","**The exceptions** – **Liberia** (founded by the American Colonization Society as a home for free persons of colour and independent from 1847) and **Ethiopia** (which beat Italy at Adowa in 1896 and was occupied only briefly, 1936-41) were never colonised, and became symbols of African self-government.","**The road to independence** – Ghana 1957, Guinea 1958, then Mali, Senegal, Nigeria, Sierra Leone 1961, Uganda 1962, Kenya 1963, The Gambia 1965 and the Portuguese territories in 1974-75; the OAU was founded at Addis in 1963 and became the African Union in 2002."]},
    {k:"p", t:"**The colonial legacy**: a European official language and the school, the drawn border dividing one people between two states, the cash crop and the export road to the port, the court and the code, the chief made a tax collector, the railway that reaches only the mine, and the habit of depending on Europe for the market and the money. Liberia was affected too, by the frontier treaties with France and Britain, by the border arbitration and by the interior provinces' administration."},
    {k:"rule"},
    {k:"h3", t:"Environmental and Climatic Conditions"},
    {k:"bul", items:["The **wet forest coast** from Sierra Leone through Liberia and Côte d'Ivoire to Ghana's west: heavy rain, cloud forest, mangrove swamp, and the crops of cacao, coffee, oil palm and rubber.","The **savannah north**: one season of rain, then a long dry time, the harmattan dust, and the millet, cattle and cotton of the Sahel; the danger of **desertification** as the trees go and the sand advances.","The **coast and its fisheries**: the cold Canary current off Mauritania, Senegal, Guinea and Sierra Leone makes the richest fishing grounds; over-fishing by foreign trawlers and the pollution of lagoons destroy it.","**Hazards and their causes** – flood of the Niger and of the coastal streams, drought and famine in the Sahel, coastal erosion and the washing away of the road, landslide on the cut hill, bush fire, locust and armyworm, and the heat of the city; the cutting of the forest, bad farming on the slope, the burning, the blocked drain, the unplanned settlement and the changing climate.","**The remedies** – forest reserve and the planting of trees, the terracing and the bush fallow, the protected water shore, the drain and the early warning, the fuel-efficient stove, the clean cooking and water, and the town plan; in Liberia these are the **Environmental Protection Agency (EPA)**, the Sustainable National Development Strategy, and the community forestry law."]},
    {k:"rule"},
    {k:"h3", t:"Social Problems and Juvenile Delinquency"},
    {k:"p", t:"A **social problem** is a condition that harms many people in a community and that the community can and must address. **Juvenile delinquency** is criminal or antisocial behaviour by young people – the acts for which an adult would be charged, and other conduct such as truancy, gang violence, begging, drug use and stealing."},
    {k:"table", head:["Social problem","How it shows in our community","What helps"], rows:[
      ["Urbanisation and the slum","Shacks on the water shore and the hill, no drain, no latrine, no title, crowded school","Town plan, site-and-service, community water and sanitation, upgrading of the settlement"],
      ["Unemployment and underemployment","Youth without work after school; the daily-wage man; the graduate with a kiosk","Skills training, apprenticeship, public work, small credit, the agro-industry, and the trade that the country needs"],
      ["Poverty and hunger","One meal a day, children pulled from school, the price of rice","Cooperative and saving, food aid for the child at school, the farm input, and cash for the old and the disabled"],
      ["Drugs, alcohol and gambling","Ganja and 'tramadol', country gin, the betting shop, the gambling den at dusk; the boy who starts in the street and ends in jail","Sport and club, counselling, the bylaw on the bar's hours, the parents' rule, treatment for the addicted and the skill that gives a life"],
      ["Adolescent pregnancy, early marriage and school dropout","The girl married at fifteen to pay a debt; the mother who cannot read","Free and enforced schooling for the girl, the re-entry policy after birth, the sanctions against defilement, and sex education"],
      ["Crime, gang and 'yahoo' fraud, and the carrying of guns","Armed robbery, phone theft, the racketeering of the taxi, the internet scam","Community policing, the youth programme and the trade, real jobs, and the punishment that reform rather than only avenge"],
      ["Gender violence and child abuse","Beating of a wife, the child made a servant, incest, FGM, the insult of a disabled child","The domestic-violence law, the Women and Children Protection Unit, the safe home, the school's reporting duty, and the change of custom from within the culture"],
      ["Corruption and impatience with the rule of law","A 'dash' for a document, a case bought, the tax that disappears","Open budget and audit, the anti-corruption agency, the free press, the vote, and honest practice in our own class"]
    ]},
    {k:"p", t:"The causes of delinquency are usually poverty and the unsupervised hour; the broken home and the quarrel; idleness and the drug; the bad companion and the gang; the cruel or harsh punishment which drives a child out; school failure, hunger and shame; the community where no adult bothers; the violence, the alcohol, the gambling and the media that praise the strongman. The remedies are the family's love and rule, the school that keeps the child fed and busy, sport and club and apprenticeship, the counselling that heals the wound, the community watch, the court for children with a probation officer rather than a cell, forgiveness with a condition, and the example of the elders."},
    {k:"bul", items:["**What the pupil can do**: join the anti-drug and the peer-education club; report the gang, the drug seller and the man who recruits children; be the friend of the boy at risk and take him to the game; refuse the 'dash' and refuse to cheat; keep a friend from the ganja and from the stolen phone; settle a quarrel with talk and not the fist.","Never join the mob that punishes a thief: a lynching is a crime, and a child who takes part in one has begun the delinquency he should be fighting.","Rehabilitation is better than revenge: the boy who returns from a gang and learns a trade is worth more to the town than the boy who is beaten out of it."]}
  ],
  focus:["Geographic location of West Africa","Population of Liberia and countries in West Africa","Liberia and West Africa: similarities in language and culture","Colonial history of West Africa","Environmental and climatic conditions","Social problems and juvenile delinquency"],
  terms:[
    {t:"colonisation", d:"the taking of control of a territory by a foreign power", x:"Colonisation shaped West African borders."},
    {t:"colonial legacy", d:"what colonisation left behind, such as language and borders", x:"The colonial legacy divides related peoples."},
    {t:"cultural trait", d:"a shared feature of a people's way of life", x:"Drumming is a cultural trait across West Africa."},
    {t:"juvenile delinquency", d:"criminal or antisocial behaviour by young people", x:"Juvenile delinquency rises where youths lack work."},
    {t:"urbanisation", d:"the growth of towns as people move in from rural areas", x:"Rapid urbanisation strains services."},
    {t:"unemployment", d:"the state of being able but unable to find work", x:"Youth unemployment is a serious problem."},
    {t:"census", d:"an official count of the population", x:"The census gives the exact population."},
    {t:"lingua franca", d:"a common language used between people of different tongues", x:"Liberian English is a lingua franca here."},
    {t:"custom", d:"a traditional way of doing something", x:"Naming ceremonies are an important custom."},
    {t:"rehabilitation", d:"helping an offender return to a useful life in society", x:"Rehabilitation works better than punishment alone."}
  ],
  facts:[
    {q:"Where is West Africa located?", a:"In the western part of Africa, bounded by the Sahara to the north, the Atlantic Ocean to the west and south, and Central Africa to the east."},
    {q:"Which two African countries were never colonised by Europeans?", a:"Liberia and Ethiopia."},
    {q:"Name three cultural traits shared across West Africa.", a:"Any three: extended family life, respect for elders, drumming and dance, similar staple foods, traditional dress, market trading by women, and naming ceremonies."},
    {q:"Which West African country has the largest population?", a:"Nigeria."},
    {q:"What is juvenile delinquency?", a:"Criminal or antisocial behaviour by young people, such as stealing, drug use, gang activity or vandalism."},
    {q:"Give two causes of juvenile delinquency.", a:"Any two: poverty, broken homes, lack of schooling, unemployment, peer pressure, drug abuse, and the effects of war."}
  ],
  tf:[
    {s:"Liberia and Ethiopia were never colonised by European powers.", a:"true", why:"They are the only two African states that avoided formal European colonisation."},
    {s:"Nigeria has the largest population in West Africa.", a:"true", why:"It is the most populous country in Africa."},
    {s:"West African countries share no cultural traits.", a:"false", why:"They share family patterns, foods, music, dress and trading customs."},
    {s:"Juvenile delinquency has only one cause.", a:"false", why:"It has many causes including poverty, broken homes, unemployment and peer pressure."},
    {s:"Colonial borders sometimes divided the same ethnic group.", a:"true", why:"For example, the Kissi and Mandingo live across several national boundaries."},
    {s:"Liberia's climate is very different from Sierra Leone's.", a:"false", why:"Both have a similar tropical rain forest climate with heavy seasonal rainfall."}
  ],
  apply:[
    {q:"Why do the same ethnic groups live on both sides of Liberia's borders?", a:"Because colonial powers drew boundaries on maps without regard to where peoples lived, so groups like the Kissi, Mandingo and Krahn were split between countries."},
    {q:"Suggest three ways a community can reduce juvenile delinquency.", a:"Keep young people in school, provide skills training and jobs, run sports and youth clubs, strengthen family support and counselling, and offer rehabilitation rather than only punishment."},
    {q:"How has the colonial legacy affected trade in West Africa?", a:"Roads and railways were built to carry goods to the coast rather than between neighbours, and different languages and currencies still make regional trade harder than trade with Europe."},
    {q:"Why is it easier for a Liberian to work in Ghana than in Europe?", a:"Because ECOWAS allows free movement among member states, English is spoken in both, and the cultures and cost of living are similar."}
  ],
  sort:{ title:"West Africa: patterns and problems",
    groups:[
      {name:"Shared cultural traits", items:["Extended family","Respect for elders","Market trading","Drumming and dance"]},
      {name:"Colonial powers", items:["Britain","France","Portugal"]},
      {name:"Never colonised", items:["Liberia","Ethiopia"]},
      {name:"Social problems", items:["Juvenile delinquency","Youth unemployment","Rapid urbanisation","Drug abuse"]}
    ]},
  mapwork:{ title:"Political map of West Africa", caption:"On the map of West Africa, label each country, its capital and its colonial history.",
    items:[
      {p:"Liberia", f:"capital Monrovia; never colonised, founded by settlers in 1822"},
      {p:"Sierra Leone", f:"capital Freetown; former British colony"},
      {p:"Guinea", f:"capital Conakry; former French colony"},
      {p:"Côte d'Ivoire", f:"capital Yamoussoukro; former French colony"},
      {p:"Ghana", f:"capital Accra; former British colony, independent 1957"},
      {p:"Nigeria", f:"capital Abuja; former British colony, most populous in Africa"}
    ]},
  casestudy:{ title:"The Kissi across three borders",
    text:"The Kissi people live where Liberia, Sierra Leone and Guinea meet. They speak the same language, marry across the borders and trade in the same weekly markets. Yet one Kissi child learns in English at school in Liberia, another in English in Sierra Leone, and a third in French in Guinea. Traders must change money three times. Elders say the boundary lines were drawn by strangers who never asked them.",
    questions:[
      {q:"In which three countries do the Kissi live?", a:"Liberia, Sierra Leone and Guinea."},
      {q:"Name two problems the borders cause them.", a:"Children are schooled in different languages, and traders must change money three times."},
      {q:"What do the elders say about the boundaries?", a:"That they were drawn by strangers who never asked the people who lived there."}
    ]},
  project:{ title:"Youth issues survey",
    brief:"Investigate a social problem affecting young people in your community.",
    steps:["Choose one issue: school dropout, unemployment, drug abuse or juvenile crime.","Interview three adults and three young people about its causes.","Record the answers in a table.","Identify the two most common causes given.","Propose two realistic solutions and present your findings."],
    criteria:["A clear issue chosen","Six people interviewed","Answers recorded in a table","Two main causes identified","Two realistic solutions proposed"]},
  activities:["State the geographic location of West Africa","Compare environmental and climatic conditions with neighbours","Compare similarities in language, customs and cultural traits","Discuss the population and cultural pattern of West African countries","Discuss juvenile delinquency and its causes"],
  materials:["Map of West Africa","Population data table","Pictures of cultural festivals across West Africa"],
  assessment:["Quizzes","Map work","Survey report","Class participation","Test"]
},
{
  grade:6, period:"V", sem:"Two", icon:"📰",
  title:"Current Events and Historical Commemorations",
  subtitle:"National holidays, the civil crisis, elections and the role of the media",
  outcomes:["Learners analyse historical trends in Liberia and understand the significance of the media in national development"],
  objectives:["Name the major national holidays of Liberia","Tell the significance of each holiday","Discuss the role of the media in promoting national development","Name the contributions of some media institutions in Liberia","Analyse major media stories","Explain the causes and effects of the Liberian civil war"],
  note:"Key events: the <b>Rice Riots of 14 April 1979</b>, the <b>coup of 1980</b>, the <b>abortive invasion of 12 November</b>, and the <b>civil war 1989–2003</b>. Peace brought the elections of <b>2005, 2011</b> and <b>2017</b>. The <b>media</b> — print and electronic — informs and holds leaders to account.",
  study:[
    /* ---- course text: Semester Two, Period V (guide pp. 75-77) ---- */
    {k:"h3", t:"National Holidays and Their Significance"},
    {k:"p", t:"A **commemoration** is an act or a day set aside to keep a memory alive. A **national holiday** rests the nation, teaches its history, and renews its loyalty. Liberia's fixed and moving holidays include the following."},
    {k:"table", head:["Day","When","Its significance"], rows:[
      ["New Year's Day","1 January","To begin the year with thanksgiving and with resolution"],
      ["Armed Forces Day","11 February","To honour the Armed Forces of Liberia, its founding (1901) and its soldiers"],
      ["Decoration Day","second Wednesday in March","To decorate the graves of the fathers of the nation and to remember the dead"],
      ["Fast and Prayer Day","a Thursday announced by the President","To humble the nation before God and to pray for peace and rain"],
      ["Labour Day","1 May","To honour the dignity of labour and the worker; the union and the employer meet the nation"],
      ["Africa Day (OAU/AU Day)","25 May","To declare the oneness of Africa and the work of the African Union"],
      ["Independence Day","26 July","The birthday of the Republic – the signing of the Declaration of Independence in 1847; the parade, the oration, the sports and the return to the home"],
      ["Flag Day","24 August","To honour the Lone Star flag, its meaning and the makers of it"],
      ["Thanksgiving Day","first Thursday in November","To thank God for the harvest and the year, and to share the food"],
      ["Christmas and Good Friday / Easter","as the church keeps them","The faith of the Christian majority; families meet, the church feeds the neighbours"],
      ["Eid al-Fitr and Eid al-Adha","as the Muslim calendar keeps them","The faith of the Muslim minority; the sacrifice, the gift and the open door of the town"]
    ]},
    {k:"p", t:"Note: the Liberian school year and the national calendar also mark **National Youth Day**, **Human Rights and reconciliation commemorations**, and the days of the county's own founding or of its hero."},
    {k:"rule"},
    {k:"h3", t:"Events Leading to the Civil Crisis"},
    {k:"p", t:"The **civil crisis** was the war and the breakdown of government which began in 1989 and ended in 2003. Long before, the complaints of the country were gathering: one party, one class, and the interior left out of the sharing of the land, the office and the money."},
    {k:"num", items:["**14 April 1979 – the Rice Riots.** The Government proposed to raise the price of imported rice from $5 to something the poor could not pay. Students and market women marched from the university and the Duala Market to the Fee Road; shooting opened and many were killed. It is remembered as the **Good Friday Massacre**; it broke the rule of the True Whig Party, and led to the trial of the opposition and to the coup of 1980.","**12 April 1980 – the Coup d'État.** Master Sergeant **Samuel Kanyon Doe** and sixteen other soldiers seized the Executive Mansion while President **William R. Tolbert Jr.** was away; Tolbert was killed and most of his cabinet executed on the beach. The **First Republic ended** and the **People's Redemption Council** took power; Doe, a soldier from a poor family in Grand Gedeh, ruled by decree, was shot at by the 'Group of Thirteen' officers in 1981, gave a **Constitution in 1983**, and was elected under a single-party ballot in 1985. His rule was marked by the killing of the former ministers and by the favouring of his own people.","**12 November 1985 – the abortive invasion.** A band led by **Thomas O. Quiwonkpa**, a former ally of Doe now fallen out, landed at the **Freeport** and seized the **Barack Street Army Base** and the **Benson Highway**, hoping to take the capital. The attack failed within two days; Quiwonkpa was killed; and the reprisals fell on the Gio and Mano people of the capital and of Tappita, in an atrocity that became one of the roots of the war.","**1986-1989.** Economic hardship, the IMF and World Bank programmes, corruption, the closed press and the state of emergency – and the flight of the disaffected, Samuel Doe's own allies, across the border.","**24 December 1989 – the war begins.** **Charles McArthur Ghankay Taylor**, a former Doe associate who had escaped from a United States jail, crossed from Libya with the **National Patriotic Front of Liberia (NPFL)** into Nimba County. The war was at once a rebellion and a fight for the peoples, the lands and the revenge of a whole decade."]},
    {k:"rule"},
    {k:"h3", t:"The Civil War, 1989–2003"},
    {k:"bul", items:["**Phase one (1989-1996)** – the NPFL and then the break-away **INPFL** fought the government forces; the **ECOMOG** intervention of the West African states came in August 1990; Doe was captured and killed in September 1990; the **Council of State** under **Amos Sawyer** held the rump of the state. The **Siege of Monrovia** (1990 and 1992), the killing at St. Peter's Lutheran Church, the attack on Monrovia of 20 October 1992, the **1994-96** fighting in the western districts and in the capital, and the attack on the civilian quarters of the capital; a million people were driven from their homes and some 150,000-200,000 died.","**The 1995 Accra peace agreement** and the **1996 election** under the **Council of State of Madam Ruth Sando Perry**; **Charles Taylor was elected in July 1997** after the disarmament that never fully happened.","**The peace that failed (1997-1999)** – rebuilding of the economy, the return of some refugees, and the growth of resentment at a government that rewarded its fighters; the **MODEL / Liberians United for Reconciliation and Democracy (LURD)** rose in the north-west in 1999 and the **Moveement for Democracy in Liberia (MODEL)** in the east in 2002.","**Phase two (1999-2003)** – LURD fought from Lofa, Bomi and Margibi to the edge of Monrovia, and MODEL in the east; heavy weapons, the **2003 Battle for the capital**, the shelling of the town, the killing of the Red Cross workers, the mass flight from the capital and the killing of the **Ganta and the Tubmanburg** civilians, and the **1999-2003** attacks across the border into Guinea.","**The end** – the **Comprehensive Peace Agreement of 18 June 2003 (Accra)**; **Charles Taylor resigned on 11 August 2003** and went to Nigeria and then into the custody of the **Special Court for Sierra Leone**; an interim government under **Moses Blah** gave place to the **National Transitional Government of Liberia (NTGL)** under Chairman **Gyude Bryant**, with **ECOMIG** and then the **United Nations Mission in Liberia (UNMIL)** keeping the peace.","**What the war left behind** – dead and maimed, the school and hospital burnt, the road and bridge gone, the records and the deed lost, the rape and the child soldier, the mines in the field, the money and the timber and the diamond that armed the fighters, and the millions of refugees and displaced persons, and the distrust between people, which is the hardest thing to rebuild."]},
    {k:"p", t:"**Truth and reconciliation** – a **Truth and Reconciliation Commission (TRC)** was set up in 2005, took statements from thousands of persons, held public hearings, and reported in 2009 with a call for a reparations programme, a special criminal court for those most responsible, vetting of public officials, and the reforms that prevent a war from beginning again. For the pupil the lesson is the plainest in the book: war begins from words, unfairness and weapons; and it ends only when the people decide to live at peace and to be just to one another."},
    {k:"rule"},
    {k:"h3", t:"Developments after the War: 2005, 2011 and 2017"},
    {k:"num", items:["**11 October 2005 – the election** of the transition, with sixteen candidates; the run-off of **8 November 2005** chose **Ellen Johnson Sirleaf**, the first woman elected head of state in Africa, sworn in on 16 January 2006. She had been a finance minister, an executive at the World Bank and UNDP, and a prisoner and exile of the Doe and Taylor years.","**Rebuilding (2006-2011)** – the **Heavily Indebted Poor Countries (HIPC)** completion point in 2010 cancelled much of the foreign debt; the revenue reform of the **LASSR** (Local Revenue and Self-Sustainability Reform) and the audit of the national accounts; the **Timber Rights Act, the Land Rights Act (2018)** and the forest moratorium; the return of refugees and the disarmed ex-combatants' reintegration; schools and clinics, the electricity and the road to St. Paul River, and the rebuilding of the justice system, the police and the courts with the help of the UN.","**2011** – the re-election of President Sirleaf against **Winston Tubman**, in an election that was again disputed but settled in the courts and by the ECOWAS mediation; and after the election the **by-elections and the 2014 Ebola epidemic**, which killed over three thousand Liberians, closed the schools and the borders and showed how weak the health system was.","**2017** – the election won by **George Manneh Weah ** of the CDC, former world footballer, over the incumbent Vice President, with the transfer of power in January 2018; the first peaceful transition from an elected President to an elected opponent in Liberia's modern history; and the 'Pro-poor Agenda for Prosperity and Participation' with the free-quality-education policy for the primary years.","**Recent developments** – the referendum of 2020 on the rights of women, on the senior-mates' choice of the Senate's two seats and on the independence of the elections, the central-bank and the audit commission, the **land rights** law, the **national identity card**, the return of the **school feeding and the free schooling** programme, the new **road, port, power and water** projects, and the **election of October 2023**, in which **Joseph N. Boakai** was chosen and took office in January 2024."]},
    {k:"p", t:"The pupil should be able to tell what is promised and what is delivered: peace kept, elections held at the fixed time, and the county road, the clinic, the school block and the census are the marks of a country recovering."},
    {k:"rule"},
    {k:"h3", t:"Media Institutions: Print and Electronic"},
    {k:"p", t:"The **media** are the means by which news, information and opinion reach the public. In a democracy the media is the fourth estate: it **informs**, it **educates**, it **entertains**, and it holds the powerful to account – and it carries a great duty, for a lie in a newspaper can burn a town."},
    {k:"table", head:["Kind of media","Institutions in Liberia","Their work"], rows:[
      ["Print","Newspapers – the Daily Observer, New Dawn, The Analyst, Inquirer, Liberian Herald of the past, the county weeklies; magazines; books and the school reader","Reporting the news, the editorial and the letter, the investigation of the misuse of money, the advertisement of the market, and the public notice of tender, sale and law"],
      ["Radio","LBS (Liberian Broadcasting System), the county and community radio stations, the church and campus stations, and the radio programmes on health, farming and education","Reaching people who cannot read and those in the far district; the news, the phone-in and the debate, the school and farmers' hour, and the alert on flood, storm and election"],
      ["Television","LBS-TV, the private national stations and the satellite channels picked up in town","News and current-affairs programme, the debate, the school and religious hour, the film and the sport"],
      ["Online and social media","News websites, Facebook, WhatsApp, X and YouTube channels; the mobile news alert","Fast, cheap and interactive – and the place where rumour, fake news, and abuse also run; therefore to be used with care and checking"],
      ["Regulation","The Independent Media Council of Liberia (IMC), the Liberia Telecommunications Authority (LTA), the LBS board, and the press union (PUL)","Registering and licensing, hearing the complaint against a journalist, keeping the code of ethics, and defending the freedom of the press"],
      ["Legal frame","The Freedom of Information Act, and the Constitution's Bill of Rights (Article I, Section 9)","The right to speak, print and broadcast; the right to see public records; and the responsibility for what is published"]
    ]},
    {k:"bul", items:["**Press freedom** means that no Minister may close a paper for an editorial, no journalist may be locked up for a report that is true, and no owner may use his paper to threaten. Liberia has always ranked among the freer countries of Africa to report.","**Propaganda** is speech made to win belief and not to tell truth – the poster, the one-sided broadcast, the rumour spread for the sake of the man who profits. **Accountability** is the duty of an officer, a candidate, a chief or an editor to give an account of what he did and what he spent.","How to read the news like a citizen: ask who wrote it, when, and from what source; check whether another outlet says the same; separate the report from the opinion; distrust the headline that has no date, no name and no photograph; do not forward what you have not checked, and never send the insult or the private picture of a person.","**Ethics for the school paper and the class broadcast**: facts verified, the other side asked and quoted, no paid praise, no name of a child victim, the correction printed as boldly as the mistake.","Civic habits: listen to a county station's news, read a newspaper's front page at the town hall, keep a clip-file on an issue, write a letter of complaint, attend a radio debate, and report the 'fake'."]}
  ],
  focus:["National holidays of Liberia and their significance","Events leading to the civil crisis: 14 April 1979 Rice Riots, the 1980 Coup, November 12 abortive invasion","Civil War 1989–2003","Developments following the war: elections of 2005, 2011 and 2017","Media institutions: print and electronic"],
  terms:[
    {t:"commemoration", d:"a ceremony remembering an important past event", x:"Independence Day is a commemoration."},
    {t:"national holiday", d:"a day set aside by law to mark an important event", x:"26 July is a national holiday."},
    {t:"coup d'état", d:"the sudden seizure of government by force", x:"The 1980 coup ended the First Republic."},
    {t:"civil war", d:"a war between groups within the same country", x:"The civil war lasted from 1989 to 2003."},
    {t:"election", d:"the choosing of leaders by the votes of the people", x:"The 2005 election restored democracy."},
    {t:"media", d:"the newspapers, radio, television and internet that carry news", x:"The media reported the results."},
    {t:"press freedom", d:"the right of the media to report without government control", x:"Press freedom exposes corruption."},
    {t:"propaganda", d:"information spread to promote a cause, often one-sided", x:"Wartime propaganda spread hatred."},
    {t:"reconciliation", d:"the restoring of friendship after conflict", x:"Reconciliation followed the peace accord."},
    {t:"accountability", d:"being answerable to the people for one's actions", x:"The media promotes accountability."}
  ],
  facts:[
    {q:"Name three national holidays of Liberia and their dates.", a:"Independence Day (26 July), Armed Forces Day (11 February), Flag Day (24 August), Thanksgiving Day (first Thursday in November), Decoration Day (second Wednesday in March)."},
    {q:"What happened on 14 April 1979?", a:"The Rice Riots — protests in Monrovia against a proposed increase in the price of rice, which turned violent."},
    {q:"What happened in 1980?", a:"A military coup overthrew the government and ended the First Republic."},
    {q:"How long did the Liberian civil war last?", a:"From 1989 to 2003, with a break between the phases."},
    {q:"In which years were the post-war elections held?", a:"2005, 2011 and 2017."},
    {q:"Name the two main kinds of media.", a:"Print media (newspapers and magazines) and electronic media (radio, television and the internet)."}
  ],
  tf:[
    {s:"The Rice Riots took place on 14 April 1979.", a:"true", why:"They were sparked by a proposed rise in the price of rice."},
    {s:"Liberia's civil war ended in 1989.", a:"false", why:"It began in 1989 and ended in 2003."},
    {s:"Independence Day is celebrated on 26 July.", a:"true", why:"It marks the declaration of independence in 1847."},
    {s:"The media has no role in national development.", a:"false", why:"It informs citizens, promotes education and health, and holds leaders accountable."},
    {s:"Elections were held in Liberia in 2005 after the war.", a:"true", why:"They restored democratic government after the conflict."},
    {s:"Propaganda always tells the whole truth.", a:"false", why:"Propaganda is one-sided information spread to promote a cause."}
  ],
  apply:[
    {q:"Give three causes of the Liberian civil war.", a:"Long-standing inequality and exclusion between groups, the violence and repression that followed the 1980 coup, poverty and unemployment, competition for control of resources, and the abortive invasion and reprisals."},
    {q:"Name three effects of the civil war on Liberia.", a:"Loss of about 250,000 lives, destruction of schools, clinics, roads and industry, displacement of hundreds of thousands, collapse of the economy, and deep social trauma and mistrust."},
    {q:"How can the media help national development?", a:"By spreading health and farming information, teaching through educational programmes, publicising government plans, exposing corruption, and giving citizens a voice."},
    {q:"How can the media do harm, and how can citizens guard against it?", a:"It can spread rumours, hate speech and propaganda; citizens should check a story against several sources, question who benefits from it, and not forward unverified messages."}
  ],
  sort:{ title:"Holidays, events and media",
    groups:[
      {name:"National holidays", items:["Independence Day 26 July","Flag Day 24 August","Armed Forces Day 11 February","Decoration Day"]},
      {name:"Events leading to crisis", items:["Rice Riots 1979","Coup of 1980","November 12 abortive invasion"]},
      {name:"Post-war developments", items:["Election of 2005","Election of 2011","Election of 2017"]},
      {name:"Kinds of media", items:["Newspapers","Radio","Television","Internet"]}
    ]},
  mapwork:{ title:"Timeline of modern Liberia", caption:"Complete the timeline, writing the significance of each date.",
    items:[
      {p:"14 April 1979", f:"the Rice Riots in Monrovia against the proposed rice price increase"},
      {p:"12 April 1980", f:"the military coup that ended the First Republic"},
      {p:"12 November 1985", f:"the abortive invasion and the reprisals that followed"},
      {p:"1989", f:"the outbreak of the civil war"},
      {p:"2003", f:"the peace agreement that ended the war"},
      {p:"2005", f:"the first post-war democratic election"}
    ]},
  casestudy:{ title:"Radio in the peace process",
    text:"During and after the war, community radio stations broadcast in local languages. They announced where displaced families could find one another, warned of unexploded ordnance, and explained how to register to vote in 2005. Some stations also ran programmes where former fighters and victims spoke to each other. Journalists say radio reached people who could not read and had no electricity, because a small set runs on batteries.",
    questions:[
      {q:"Name three things community radio did after the war.", a:"Helped displaced families find one another, warned of unexploded ordnance, and explained voter registration."},
      {q:"How did radio help reconciliation?", a:"It ran programmes where former fighters and victims spoke to each other."},
      {q:"Why was radio more effective than newspapers?", a:"It reached people who could not read and had no electricity, since a small set runs on batteries."}
    ]},
  project:{ title:"News analysis",
    brief:"Analyse how a current news story is reported.",
    steps:["Choose one national news story from the radio or a newspaper.","Write down the main facts reported.","Find a second source reporting the same story.","Note any difference between the two reports.","Explain which report you trust more and why."],
    criteria:["A real story chosen","Main facts recorded","Two sources used","Differences identified","A reasoned judgement of reliability"]},
  activities:["Name the major national holidays and their significance","Discuss the role of the media in national development","Name the contributions of Liberian media institutions","Analyse major media stories","Explain the causes and effects of the civil war","Construct a timeline of modern Liberian history"],
  materials:["Newspapers and a radio","Calendar of national holidays","Timeline chart","Pictures of national commemorations"],
  assessment:["Quizzes","News analysis","Timeline task","Class participation","Test"]
},
{
  grade:6, period:"VI", sem:"Two", icon:"🥁",
  title:"Cultural Trends of Liberia",
  subtitle:"Culture and customs, arts and crafts, traditional societies, cuisine and managing conflict",
  outcomes:["Learners analyse the cultural trends of Liberia and make rational decisions about harmful socio-cultural practices","Learners understand how to manage conflict with their parents or guardians"],
  objectives:["Describe the culture and customs of Liberia","Identify cultural norms and patterns of Liberia","Discuss arts and crafts and traditional societies","Describe Liberian cuisine","Analyse socio-cultural practices and identify harmful ones","Identify means of ending conflict"],
  note:"<b>Culture</b> is the whole way of life of a people — language, dress, food, music, beliefs and customs. Some practices are beneficial and should be preserved; others are <b>harmful</b> and should be changed. <b>Conflict</b> between adolescents and parents can be resolved by respectful dialogue.",
  study:[
    /* ---- course text: Semester Two, Period VI (guide pp. 78-79) ---- */
    {k:"h3", t:"Culture, Customs, Norms and Patterns"},
    {k:"p", t:"**Culture** is the whole way of life of a people – its language, food, dress, music and dance, its beliefs and worship, its family life, its names, its government and law, its farming and crafts, and its arts. **Custom** is the practice of the culture that is repeated and passed down; a **norm** is the standard of behaviour the culture expects; and a **pattern** is the usual shape that the life of the people takes."},
    {k:"bul", items:["**Material culture** – the things people make and use: the house, the mortar and pestle, the canoe and net, the plough and cutlass, the loom, the gourd and calabash, the pot and the ladle, the mortar board, the fan and the raffia mat, the lappa and country cloth, the sandal, the grindstone, the basket and the mat, the tool of the smith, and the ornament of bead, shell, silver and gold.","**Non-material culture** – the words and the mind: the proverb and the riddle, the folk tale and the praise song, the name and its meaning, the greeting and its courtesy, the taboo, the song and the dance, the joke, the blessing and the oath, and the rule of the council.","**Norms of conduct in Liberian custom** – greet the elder first and stand while he speaks; offer the seat and the water; eat without noise and let the guest eat first; do not call an elder by his bare name; keep the promise made before witnesses; the stranger is fed before he is questioned; a man does not fight his neighbour's quarrel with the fist but with the word at the palava.","**Patterns of the year and of the day** – the farm cleared at the end of the dry season, planted with the first rain, weeded in August and harvested in November and December; the market on a fixed day; the morning farm, the midday rest, the evening play and the firelight story; the Poro and Sande outings in the dry season; the wedding, the naming and the funeral as the great occasions of the town.","**Change in culture** – culture is not a museum: it takes the plough, the school, the pump, the radio and the law court, and leaves the masquerade that strikes a child, the early marriage, the ordeals, and the harmful cutting."]},
    {k:"rule"},
    {k:"h3", t:"Arts and Crafts"},
    {k:"table", head:["Art or craft","How it is made","Where it is found and what it is for"], rows:[
      ["Mask carving and the wood sculpture","The soft wood of the cotton or ceiba tree is cut with axe, adze, knife and chisel, dried in the shade, smoked or dyed, and finished with pigment and cloth","The masked dancer is the voice of the spirit in Poro and Sande; the headdress and the stool are the emblem of a chief; today the carving is also the art that is sold and the memory that is kept"],
      ["Weaving of country cloth","The cotton is spun on a spindle, dyed indigo, and woven on the narrow strip loom by the man; the strips are sewn into a gown or a blanket","Vai, Gola, Kpelle, Bassa and Grebo country; worn for the festival, the naming and the funeral, and as the great gift to a relation"],
      ["Indigo and 'gara' dyeing","The cloth is folded, tied or stitched with the pattern, dyed in indigo, and opened to show the design","The head tie, the wrapper and the shirt of the town; the craft of the women's group"],
      ["Basket, mat and fan making","Raffia, bamboo, palm leaf and rope are split, soaked and plaited","The winnowing fan, the carrying basket, the sleeping mat, the lid and the fan of the kitchen"],
      ["Pottery","The clay is dug, ground, wetted, coiled by hand, burnished, fired in an open pit","The water pot, the cooking pot and the gourd, the oil jar and the baby's bath"],
      ["Leather work, sewing and shoe mending","The hide is scraped, dried and stitched; the second-hand cloth is cut and sewn","The sandal, the bag, the satchel, the school uniform and the lappa gown"],
      ["Metal work and smithing","The ore is smelted in the clay furnace and the bellows, and the iron is heated and beaten on the anvil; brass is cast in a mould of beeswax","The cutlass, the hoe blade, the knife, the spear head, the ring, the anklet, and the mending of everything of iron in the town"],
      ["Drum making and music","A log is hollowed and a goatskin is laced over one end; the hand-drum, the slit-gong, the gourd rattle and the flute","The djembe, sangban, dunun, kendé and the talking drum which sends the message; the praise song, the dance song, the work song and the children's song"],
      ["Ornament and body art","Beads, shells, silver, gold thread, and the pattern cut on the skin; the hair braided and combed","The coral bead of the married woman, the necklace of the chief, the braid of the girl, and the tribe mark of a people"],
      ["Dance and drama","The step, the hip and the shoulder, the song and the response, with drum, bell and clapping","The harvest dance, the Kwi dance of the Bassa, the Gumbe drum dance of the coast, the masked dance of the Poro outing, the school play and the market-day masquerade"]
    ]},
    {k:"p", t:"Arts and crafts are not decoration only: they carry the **history**, the **belief** and the **skill** of the people; they earn money through the market, the hotel, the exhibition and the export; and they teach the child patience, measure and beauty."},
    {k:"rule"},
    {k:"h3", t:"Traditional Societies"},
    {k:"bul", items:["**The Poro Society** – the society of the men, found among the Mande and other peoples of the north and centre. It has its own leaders, its bush school, its dances, its insignia and its law. It initiates the boy, teaches him the customs, the crafts, the courage and the duties of a man, judges quarrels, punishes wrong, protects the weak, and controls the masquerade that appears at the outing.","**The Sande Society (Bundu)** – the society of the women, with its own hierarchy, its **Sande doctor** and its own mask, the **Sowo**. It initiates the girl and trains her for womanhood, cares for the bride, teaches the conduct, the songs and the duties of a wife and a mother, and disciplines the offenders. The **Bundu** is its sister society of the Mende.","**Kindred societies** – the **Kporo** of the Kru, and the **age-grade** and the **men's house** of the Grebo and the Gio; the **town chief's council of elders** and the **men's and women's clubs**.","**What they are for** – education, law and order, the health of the community, the defence of the town, the control of the forest, the settling of marriage and of a dispute, the funeral and the feast, and the keeping of the heritage.","**What must be reformed** – the **female genital cutting / scarification** done on girls, the initiation that keeps a girl out of school, the secret that hides an abuse, and the fine that a family cannot pay; and what should be kept – the moral training, the work, the dance, the proverb, the medicine, the respect, and the discipline that holds the town together."]},
    {k:"p", t:"The traditional societies are the oldest institutions of the country; the Constitution, the school and the law court did not sweep them away and today a boy may be a pupil, a member of the Poro and a citizen at eighteen."},
    {k:"rule"},
    {k:"h3", t:"Liberian Cuisine"},
    {k:"p", t:"**Cuisine** is the food and the cooking of a people. Liberian cooking is built on **rice**, on the soups of the forest and the sea, and on the palm oil and the pepper."},
    {k:"bul", items:["**Rice** – the boiled or fried white rice, the fragrant **swamp rice** of the Bassa and of the lowland, the **check** and the **candied** rice, and the **foofoo/fufu** and **dumboy** made from pounded cassava, plantain or cocoyam.","**The great soups and sauces** – **cassava leaf** (foofu) pounded and cooked long in palm oil with fish or meat; **palm butter (red soup)** made from the fruit of the oil palm; **potato greens**, **jute mallow (krinkrinka)**, **bitter leaf**, **groundnut (peanut) soup**, **egusi and melon-seed soup**, and **palava sauce**; **pepper soup** and **water-fufu** of the coast.","**Fish, meat and sea food** – fresh and smoked fish, crab, periwinkle, oyster, prawn, bush meat, and the dried fish of the market.","**Sides, drinks and sweet** – fried plantain, cassava leaves, roasted corn, groundnut cake, sugarcane, the ginger and pineapple beer, **poyo** and palm wine, the millet drink, and peanut brittle.","**The table and the manner** – the bowl and the wooden trencher, the hands washed, the family sitting round one dish, the guest served first, the blessing before the meat, and the sharing with the neighbour who has nothing.","**Where the food comes from** – the kitchen farm, the market, the lappah and the fisher's canoe; and how the cooking is done in a clean pot, with covered water, with the food covered from the fly, and with the hands washed."]},
    {k:"p", t:"Liberian dishes are shared with the neighbours – **jollof, fufu and soup, thieboudienne and banku** are found across the whole coast – and the food of a country is the shortest way to understand its people."},
    {k:"rule"},
    {k:"h3", t:"Socio-Cultural Practices: Keep and Change"},
    {k:"p", t:"A **socio-cultural practice** is what the people do together as a matter of custom. Each must be judged by whether it serves the person and the community, or whether it harms them."},
    {k:"table", head:["Beneficial – to be preserved","Harmful – to be given up"], rows:[
      ["Extended-family care of every child; the naming ceremony; respect for elders","Early/forced marriage of the girl; the widow 'inherited' like property; the denial of a girl's schooling and inheritance"],
      ["Hard farm work, cooperation, the town clean-up and the harvest dance","Trial by ordeal and the poison cup; the accusation of witchcraft against an old woman; the mob that burns the thief"],
      ["The Poro and Sande moral training, the craft and the dance","Female genital cutting and scarification; initiation that keeps a child in the bush out of school"],
      ["Sharing food with the stranger and the neighbour; hospitality","The taboo that shuts a disabled or an epileptic child away, and the hiding of a person with HIV"],
      ["The proverb, the riddle, the folk tale and the praise song; the mother-tongue","Customs that insult a tribe or a woman, and the mocking of a person's speech or body"],
      ["Settlement of a quarrel before the chief and the elders with both sides heard","Cattle raid, revenge killing, and the fine that ruins a family"]
    ]},
    {k:"p", t:"To keep the culture alive and to end its harm is possible, because the culture itself has the wisdom: a people that changed the masquerade which once killed has already shown it can reform. A pupil's part is to know the good, to respect the elders, to learn a dance or a craft, to speak the mother tongue, and to refuse – without insulting – a custom that hurts a child, a woman, a disabled person or one who is ill."},
    {k:"rule"},
    {k:"h3", t:"Conflict between Adolescents and Parents or Guardians"},
    {k:"p", t:"An **adolescent** is a young person passing from childhood to adulthood – the body changes, the mind wants to think for itself, and the friends become as important as the family. Quarrel between such a young person and his parents or guardian is common; it is not wicked, and it can be settled."},
    {k:"bul", items:["**Reasons for the conflict** – the demand for freedom and the parents' demand for safety; money for clothes, phone, outing and school fees; the friends, the boyfriend or girlfriend and the parents' choice of who is suitable; the work at home the adolescent refuses; school, marks and the future; dress, hair, music, film and the language of the young; religion, the society and the ceremony the young person does not wish to enter; the favouritism between children, the step-parent, the new baby, and the share of a dead father's property; alcohol, drug, gambling and the money that vanishes; punishment felt to be unfair; and the pressure of the peer and the media against the value of the home.","**Restricting powers in the family** – the authority of a parent to set rules, to limit the hour, the money, the company, the dress, the media and the outing, to require work and school, and to punish moderately. These powers exist to protect and to train a child, not to crush him; the Constitution and the Children's Law forbid cruel, degrading or inhuman treatment, and a child of growing years must be consulted in what concerns him.","**Roles in making a family decision** – the father, the mother and the guardian decide together and each has the last word in his or her charge; the elders and the auntie advise; the boy and the girl are heard, and a fair family lets a child speak before the decision is made and expects him to obey after it; the older adolescent takes more responsibility and receives more freedom, and both move together.","**Conflict resolution by dialogue** – choose the time and the place, not in the middle of anger; begin with respect and with what you agree on; say what you feel and what you want in your own words, without insult or threat; listen until you can repeat the other person's reason; ask for the reason of the rule, and offer a fair trial of your own plan; write down or state the agreement and the condition; and accept the parents' final decision while you ask to try again in a month.","**When to call help** – if there is violence, hunger, an unendurable quarrel, a threat, or the wish to run away, speak to a relative you trust, the teacher, the school counsellor, the pastor or imam, a women's or youth group, or the child helpline; mediation by the elders or a family counsellor is better than leaving home.","**The five habits that prevent most quarrels** – tell the truth, do your work before your pleasure, ask in a civil way, keep your promise, and let the parent see that you can carry a little responsibility."]},
    {k:"p", t:"Peace in a family is not the absence of difference but the presence of respect: the son who obeys today will be the father who is obeyed tomorrow, and he will remember how his father spoke to him."}
  ],
  focus:["Culture and customs; cultural norms and patterns of Liberia","Arts and crafts","Traditional societies","Liberian cuisine","Socio-cultural practices","Reasons for possible conflict between adolescents and parents or guardians","Restricting powers in the family; roles in making decisions in the family"],
  terms:[
    {t:"culture", d:"the whole way of life of a people", x:"Liberian culture is rich and varied."},
    {t:"custom", d:"a traditional and widely accepted way of behaving", x:"Greeting elders first is a custom."},
    {t:"norm", d:"an accepted standard of behaviour in a society", x:"Respect for the aged is a social norm."},
    {t:"arts and crafts", d:"the making of beautiful and useful objects by hand", x:"Mask carving is a Liberian craft."},
    {t:"traditional society", d:"an institution such as the Poro or Sande that trains and initiates members", x:"Traditional societies preserve custom."},
    {t:"cuisine", d:"the characteristic cooking of a country", x:"Liberian cuisine features rice and rich soups."},
    {t:"harmful practice", d:"a custom that damages health, rights or dignity", x:"Early marriage is a harmful practice."},
    {t:"adolescent", d:"a young person between childhood and adulthood", x:"Adolescents often seek independence."},
    {t:"conflict resolution", d:"the peaceful settling of a disagreement", x:"Conflict resolution needs listening."},
    {t:"dialogue", d:"a calm conversation between two sides", x:"Dialogue reduces tension at home."}
  ],
  facts:[
    {q:"What is culture?", a:"The whole way of life of a people — their language, dress, food, music, beliefs, arts and customs."},
    {q:"Name three Liberian arts and crafts.", a:"Any three: mask carving, country cloth weaving, basket making, pottery, gara dyeing, soapstone carving, drum making."},
    {q:"Name two traditional societies of Liberia.", a:"The Poro Society (for men) and the Sande Society (for women)."},
    {q:"Name three dishes of Liberian cuisine.", a:"Any three: cassava leaf, palm butter, potato greens, jollof rice, fufu and soup, pepper soup, dumboy, check rice."},
    {q:"Give two reasons why adolescents and parents may come into conflict.", a:"Differences over freedom and curfew, choice of friends, dress and phone use, schooling and career choice, and money."},
    {q:"Name three ways of ending a conflict peacefully.", a:"Dialogue and listening to both sides, mediation by a respected third party, compromise, apology and forgiveness."}
  ],
  tf:[
    {s:"Culture includes food, dress, music and beliefs.", a:"true", why:"Culture is the whole way of life of a people."},
    {s:"All traditional practices are good and should be kept.", a:"false", why:"Some, such as early marriage or harmful initiation practices, damage health and rights and should be changed."},
    {s:"Country cloth weaving is a Liberian craft.", a:"true", why:"It is woven by hand in Liberian villages."},
    {s:"Conflict between parents and adolescents is always destructive.", a:"false", why:"Handled with dialogue it can lead to better understanding and clearer agreements."},
    {s:"The Poro and Sande societies are Liberian traditional institutions.", a:"true", why:"They train and initiate members into adult roles."},
    {s:"Shouting is the best way to end a family disagreement.", a:"false", why:"Calm dialogue, listening and compromise resolve disputes far better."}
  ],
  apply:[
    {q:"Name one Liberian cultural practice that should be preserved and one that should be changed, giving reasons.", a:"Preserve: respect and care for elders, which keeps families strong and passes on knowledge. Change: withdrawing girls from school for early marriage, because it damages their health and denies their right to education."},
    {q:"Your parents refuse to let you attend a school event. Describe how you would resolve this peacefully.", a:"Choose a calm moment, listen to their reasons first, explain politely why the event matters, offer safeguards such as going with a teacher and returning by an agreed time, and accept a compromise."},
    {q:"How can young people help preserve Liberian culture in a modern world?", a:"Learn their mother tongue, wear traditional dress on culture days, learn crafts and songs from elders, record oral history, and share it on social media and at school events."},
    {q:"Why is it important that decisions in a family are shared?", a:"Because everyone affected understands the reasons, young people learn responsibility, and decisions are more likely to be accepted and to work."}
  ],
  sort:{ title:"Liberian culture",
    groups:[
      {name:"Arts and crafts", items:["Mask carving","Country cloth weaving","Basket making","Gara dyeing"]},
      {name:"Liberian cuisine", items:["Cassava leaf","Palm butter","Fufu and soup","Jollof rice"]},
      {name:"Practices to preserve", items:["Respect for elders","Community labour","Naming ceremonies","Storytelling"]},
      {name:"Harmful practices", items:["Early marriage","Denying girls education","Trial by ordeal","Harmful initiation practices"]}
    ]},
  mapwork:{ title:"Culture chart of Liberia", caption:"Complete the chart of Liberian cultural elements and their significance.",
    items:[
      {p:"Country cloth", f:"hand-woven cloth worn on important occasions; shows craft and identity"},
      {p:"Mask and soapstone carving", f:"used in ceremonies and sold as art; carries spiritual meaning"},
      {p:"Poro and Sande", f:"traditional societies that train young people in custom and duty"},
      {p:"Cassava leaf and palm butter", f:"staple dishes made from local crops; served at family gatherings"},
      {p:"Drumming and dance", f:"marks festivals, funerals and celebrations; passes on history"},
      {p:"Proverbs and folk tales", f:"teach wisdom and morals to the young"}
    ]},
  casestudy:{ title:"Yatta and her father",
    text:"Yatta, aged fifteen, wanted to join the school debating club, which met after classes. Her father refused, saying a girl should be home before dark. Yatta was angry at first. Then she asked her aunt to help. Together they explained to her father that the club would improve her English and that a teacher walked the pupils home. Her father agreed she could attend twice a week. Yatta later won a county debating prize.",
    questions:[
      {q:"What was the disagreement about?", a:"Whether Yatta could join the school debating club that met after classes."},
      {q:"What method of conflict resolution was used?", a:"Mediation — she asked her aunt to help — followed by dialogue and compromise."},
      {q:"What was the outcome?", a:"Her father agreed she could attend twice a week, and she later won a county debating prize."}
    ]},
  project:{ title:"Culture documentation",
    brief:"Document one element of Liberian culture before it is lost.",
    steps:["Choose a craft, song, proverb, dish or ceremony from your community.","Interview an elder who knows it well.","Write down how it is done and what it means.","Record it with a drawing, a photograph or a written script.","Present it to the class and say why it should be preserved."],
    criteria:["A genuine cultural element chosen","An elder interviewed","Clear description of the practice","A drawing, photo or script produced","A reasoned case for preservation"]},
  activities:["Describe the culture and customs of Liberia","Identify cultural norms and patterns","Discuss arts and crafts and traditional societies","Describe Liberian cuisine","Analyse harmful socio-cultural practices","Role play resolving a conflict with a parent or guardian"],
  materials:["Samples of country cloth, baskets and carvings","Pictures of festivals and traditional dress","Recipes of Liberian dishes","Resource persons from the community"],
  assessment:["Quizzes","Culture documentation project","Role play","Class participation","Final test"]
}
];

const SS_GENERAL = {
  intro:"Social Studies helps learners understand themselves, their families, their communities, their nation and the wider world. It builds the knowledge, skills, attitudes and values needed for responsible and productive citizenship in Liberia.",
  objectives:[
    "Understand the structure of the family, community and nation and the duties of each citizen.",
    "Locate and describe the physical and human geography of Liberia, West Africa and the wider continent.",
    "Trace the history of Liberia from its founding to the present and explain its significance.",
    "Apply the principles of rights, responsibilities, tolerance and peaceful conflict resolution in daily life."
  ],
  approach:"Inclusive and differentiated learning: individual seat work or group work in mixed groups, according to gender, abilities and learning styles."
};
