/* Curriculum data — Republic of Liberia, SOCIAL STUDIES, Grades 1–6
   Derived from the "Social Studies Grade 1-6" curriculum guide (79 pp.), 6 periods per grade.

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
