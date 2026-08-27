/* Curriculum data — Republic of Liberia, Elementary GENERAL SCIENCE, Grades 1–6
   Derived from the "General Science 1-6" curriculum guide (78 pp.), 6 periods per grade.

   Science is a CONCEPT + INQUIRY subject, so each topic carries:
     terms[]     {t, d, x}                 key term, definition, example/where seen
     facts[]     {q, a}                    short-answer recall questions
     tf[]        {s, a(true|false), why}   true/false statements
     classify    {title, groups:[{name, items:[]}]}   sorting / grouping task
     diagram     {title, caption, parts:[{p, f}]}     label-and-function table
     experiment  {title, aim, materials:[], steps:[], expect, why}
     apply[]     {q, a}                    real-life application / reasoning
*/

const SC_CURRICULUM = [
/* ================= GRADE 1 ================= */
{
  grade:1, period:"I", sem:"One", icon:"🔍",
  title:"Science Observes Things",
  subtitle:"Unit I: Scientific knowledge — using our senses to observe",
  outcomes:["Use knowledge of science to describe things in nature by their shape, size, colour, texture and weight"],
  objectives:["State the meaning of science","State ways in which one can use the senses to observe","Observe colours, shapes, sizes and weight"],
  note:"<b>Science</b> is the study of the world around us. We learn by <b>observing</b> — using our five senses to notice what things are like.",
  focus:["Meaning of science","The five senses","Physical properties: size, shape, colour, weight","Observation skills"],
  terms:[
    {t:"science", d:"the study of the world around us", x:"We learn about plants in science."},
    {t:"observe", d:"to look at carefully and notice", x:"Observe the colour of the leaf."},
    {t:"senses", d:"the five ways we learn about things", x:"We use our senses to observe."},
    {t:"sight", d:"seeing with the eyes", x:"I use sight to see colour."},
    {t:"hearing", d:"listening with the ears", x:"Hearing tells me a bird is near."},
    {t:"smell", d:"using the nose", x:"Smell tells me the food is ready."},
    {t:"taste", d:"using the tongue", x:"Taste tells me the fruit is sweet."},
    {t:"touch", d:"feeling with the skin", x:"Touch tells me the stone is rough."},
    {t:"texture", d:"how a thing feels", x:"The texture of sand is rough."},
    {t:"weight", d:"how heavy a thing is", x:"The stone has more weight than the leaf."},
    {t:"property", d:"something that describes an object", x:"Colour is a property."},
    {t:"compare", d:"to say how things are the same or different", x:"Compare the two stones."}
  ],
  facts:[
    {q:"What is science?", a:"The study of the world around us."},
    {q:"How many senses do we have?", a:"Five."},
    {q:"Which sense do we use to know a thing is rough?", a:"Touch."},
    {q:"Which sense do we use to know the colour of a flower?", a:"Sight."},
    {q:"Which part of the body do we use for smell?", a:"The nose."},
    {q:"Name two properties we can observe in an object.", a:"Any two of: size, shape, colour, texture, weight."}
  ],
  tf:[
    {s:"We use only our eyes to observe.", a:"false", why:"We use all five senses."},
    {s:"Science helps us learn about the world.", a:"true", why:"That is what science is."},
    {s:"Weight tells us how heavy a thing is.", a:"true", why:"Weight is heaviness."},
    {s:"It is safe to taste everything in the laboratory.", a:"false", why:"Never taste unknown things; it can be dangerous."},
    {s:"Texture means how a thing feels.", a:"true", why:"Texture is roughness or smoothness."}
  ],
  classify:{ title:"Which sense do we use?", groups:[
    {name:"Sight (eyes)", items:["the colour red","a tall tree","a bright light"]},
    {name:"Hearing (ears)", items:["a bird singing","a drum beating","the rain falling"]},
    {name:"Touch (skin)", items:["a rough stone","a smooth leaf","a hot cup"]}
  ]},
  diagram:{ title:"The five sense organs", caption:"Write the sense each body part gives us.", parts:[
    {p:"Eyes", f:"Sight — we see colour, shape and size"},
    {p:"Ears", f:"Hearing — we hear sounds"},
    {p:"Nose", f:"Smell — we smell odours"},
    {p:"Tongue", f:"Taste — we taste sweet, sour, salty and bitter"},
    {p:"Skin", f:"Touch — we feel hot, cold, rough and smooth"}
  ]},
  experiment:{
    title:"The Mystery Bag",
    aim:"To use the sense of touch to identify objects without seeing them.",
    materials:["A cloth bag","A stone","A leaf","A pencil","A piece of cloth"],
    steps:["Put the objects in the bag without letting your partner see.","Ask your partner to put one hand in the bag.","Your partner feels one object and describes its texture, shape and size.","Your partner names the object before taking it out.","Take it out and check if the answer was correct."],
    expect:"Your partner can name most objects correctly using touch alone.",
    why:"Touch gives us information about shape, size and texture even when we cannot see."
  },
  apply:[
    {q:"You cannot see in a dark room. Which sense would help you find the door?", a:"Touch — feeling along the wall."},
    {q:"Why should you never taste a strange liquid in class?", a:"It may be poisonous or harmful."},
    {q:"How can you tell that rice is cooking in the kitchen without seeing it?", a:"By the sense of smell."}
  ],
  activities:["Game 'I See': name an object and describe its size, shape, colour, texture or weight","Show and Tell: describe objects in complete sentences","Whole-class brainstorm on the meaning of science","Small mixed-ability group tasks"],
  materials:["Level textbooks","Various objects","Worksheets or activity pages","Posters"],
  assessment:["Quizzes","Test","Class and homework","Assignments","Science journal","Spelling and vocabulary test on key terms"]
},
{
  grade:1, period:"II", sem:"One", icon:"🧊",
  title:"Matter: Things That Make Up Our Environment",
  subtitle:"States of matter and how force acts on matter",
  outcomes:["Relate the term 'matter' to real things around","Describe the effect of greater force versus less force applied to an object"],
  objectives:["State the meaning of matter","Name the states of matter and give examples of each","Distinguish between the three states of matter","Observe a change in the state of matter","List examples of each state of matter"],
  note:"<b>Matter</b> is anything that has weight and takes up space. Matter is found in three states: <b>solid</b>, <b>liquid</b> and <b>gas</b>. A <b>force</b> is a push, a pull or a lift.",
  focus:["Meaning of matter","Three states of matter","Shape, volume and colour","Definition and kinds of force","How forces act on matter"],
  terms:[
    {t:"matter", d:"anything that has weight and takes up space", x:"A stone, water and air are all matter."},
    {t:"solid", d:"matter with its own fixed shape", x:"A stone is a solid."},
    {t:"liquid", d:"matter that flows and takes the shape of its container", x:"Water is a liquid."},
    {t:"gas", d:"matter that spreads to fill all the space", x:"Air is a gas."},
    {t:"volume", d:"the amount of space a thing takes up", x:"The cup holds a small volume."},
    {t:"force", d:"a push, a pull or a lift", x:"I use force to open the door."},
    {t:"push", d:"to move something away from you", x:"Push the door to close it."},
    {t:"pull", d:"to move something towards you", x:"Pull the rope."},
    {t:"melt", d:"to change from solid to liquid", x:"Ice melts in the sun."},
    {t:"freeze", d:"to change from liquid to solid", x:"Water freezes into ice."},
    {t:"container", d:"a thing that holds something", x:"Pour the water into the container."},
    {t:"shape", d:"the form of an object", x:"The ball has a round shape."}
  ],
  facts:[
    {q:"What is matter?", a:"Anything that has weight and takes up space."},
    {q:"Name the three states of matter.", a:"Solid, liquid and gas."},
    {q:"Which state of matter keeps its own shape?", a:"Solid."},
    {q:"Which state of matter takes the shape of its container?", a:"Liquid."},
    {q:"What is a force?", a:"A push, a pull or a lift."},
    {q:"What happens to ice when it is left in the sun?", a:"It melts and becomes liquid water."}
  ],
  tf:[
    {s:"Air is a kind of matter.", a:"true", why:"Air takes up space and has weight."},
    {s:"A liquid has its own fixed shape.", a:"false", why:"A liquid takes the shape of its container."},
    {s:"Pushing a box is using force.", a:"true", why:"A push is a force."},
    {s:"A greater force moves an object further than a small force.", a:"true", why:"More force produces more movement."},
    {s:"Gas can be seen easily with the eyes.", a:"false", why:"Most gases, like air, cannot be seen."}
  ],
  classify:{ title:"Sort these into states of matter", groups:[
    {name:"Solid", items:["stone","chair","pencil","ice"]},
    {name:"Liquid", items:["water","palm oil","milk","kerosene"]},
    {name:"Gas", items:["air","steam","smoke"]}
  ]},
  diagram:{ title:"The three states of matter", caption:"Write one property of each state.", parts:[
    {p:"Solid", f:"Has its own fixed shape and fixed volume"},
    {p:"Liquid", f:"Takes the shape of its container, fixed volume"},
    {p:"Gas", f:"Spreads out to fill the whole container"}
  ]},
  experiment:{
    title:"The Balloon and the Air",
    aim:"To show that air is matter and takes up space.",
    materials:["A balloon","A bottle"],
    steps:["Look at the empty balloon and describe its shape.","Blow air into the balloon and tie it.","Describe the shape of the balloon now.","Press the balloon gently and feel it push back.","Let the air out slowly and feel it on your hand."],
    expect:"The balloon becomes big and firm because air fills the space inside.",
    why:"Air is a gas. It is matter because it takes up space and pushes on the balloon wall."
  },
  apply:[
    {q:"Why does water poured into a cup take the shape of the cup?", a:"Because water is a liquid and liquids take the shape of their container."},
    {q:"You need to move a heavy stone. Should you use greater or less force? Why?", a:"Greater force, because a heavy object needs more force to move it."},
    {q:"Give one example of matter changing state in your home.", a:"Water freezing into ice, or water boiling into steam."}
  ],
  activities:["Each learner brings a named object to be grouped into solid and liquid","Empty–filled–emptied balloon demonstration","Use a push, pull or lift to demonstrate force","Fit solids and liquids into containers and discuss shape"],
  materials:["Level textbooks","Objects in the class and community","Balloons","Empty cans of different sizes","Paper and copybooks"],
  assessment:["Quizzes","Test","Class and homework","Science journal","Vocabulary test on key terms"]
},
{
  grade:1, period:"III", sem:"One", icon:"🌱",
  title:"Living and Non-Living Things",
  subtitle:"Characteristics of living things; plants and animals",
  outcomes:["Identify living and non-living things around them and appreciate the usefulness of some living things to humans"],
  objectives:["State the characteristics of living things","Identify living things","Distinguish between plants and animals as the major groups of living things","List the importance of plants and animals in our surroundings"],
  note:"<b>Living things</b> grow, feed, breathe, move, reproduce and die. <b>Non-living things</b> do not do these. The two major groups of living things are <b>plants</b> and <b>animals</b>.",
  focus:["Characteristics of living things","Living vs non-living","Plants and animals","Usefulness of plants to humans"],
  terms:[
    {t:"living thing", d:"something that grows, feeds, breathes and reproduces", x:"A goat is a living thing."},
    {t:"non-living thing", d:"something that does not grow, feed or breathe", x:"A stone is non-living."},
    {t:"grow", d:"to become bigger", x:"A seed grows into a plant."},
    {t:"feed", d:"to take in food", x:"Animals feed to get energy."},
    {t:"breathe", d:"to take in air", x:"We breathe with our lungs."},
    {t:"reproduce", d:"to produce young ones", x:"Hens reproduce by laying eggs."},
    {t:"movement", d:"changing position", x:"Animals show movement."},
    {t:"plant", d:"a living thing that makes its own food", x:"Cassava is a plant."},
    {t:"animal", d:"a living thing that feeds on plants or other animals", x:"A goat is an animal."},
    {t:"shelter", d:"a place that protects", x:"Trees give shelter from the sun."},
    {t:"oxygen", d:"the gas in air that living things need", x:"Plants give out oxygen."},
    {t:"useful", d:"helpful to us", x:"Plants are useful for food."}
  ],
  facts:[
    {q:"Name three characteristics of living things.", a:"Any three of: grow, feed, breathe, move, reproduce, die."},
    {q:"Name the two major groups of living things.", a:"Plants and animals."},
    {q:"Give one way plants are useful to humans.", a:"They give us food, medicine, shade, timber or oxygen."},
    {q:"Is a stone living or non-living? Why?", a:"Non-living, because it does not grow, feed or breathe."},
    {q:"How do plants get their food?", a:"They make their own food using sunlight."},
    {q:"Name one living thing found in your school compound.", a:"Any correct answer, e.g. a tree, grass, a bird, a pupil."}
  ],
  tf:[
    {s:"All living things grow.", a:"true", why:"Growth is a characteristic of life."},
    {s:"A car moves, so a car is a living thing.", a:"false", why:"A car cannot feed, grow or reproduce on its own."},
    {s:"Plants make their own food.", a:"true", why:"Plants make food using sunlight."},
    {s:"A stone can reproduce.", a:"false", why:"Non-living things do not reproduce."},
    {s:"Trees give us shade and timber.", a:"true", why:"These are useful products of plants."}
  ],
  classify:{ title:"Living or non-living?", groups:[
    {name:"Living", items:["goat","mango tree","fish","pupil","grass"]},
    {name:"Non-living", items:["stone","chair","water","bicycle","sand"]}
  ]},
  diagram:{ title:"Characteristics of living things", caption:"Write what each characteristic means.", parts:[
    {p:"Growth", f:"Living things become bigger over time"},
    {p:"Feeding", f:"Living things take in food for energy"},
    {p:"Breathing", f:"Living things take in air"},
    {p:"Movement", f:"Living things can move or move parts of themselves"},
    {p:"Reproduction", f:"Living things produce young ones like themselves"}
  ]},
  experiment:{
    title:"Do Seeds Grow?",
    aim:"To show that a seed is a living thing because it grows.",
    materials:["Ten bean seeds","Two tins","Cotton wool or soil","Water"],
    steps:["Put soil or wet cotton wool in both tins.","Place five seeds in each tin.","Water the first tin every day.","Do not water the second tin at all.","Observe both tins each day for one week and record what you see."],
    expect:"Seeds in the watered tin sprout and grow; the dry seeds do not.",
    why:"Seeds are living and need water to grow. Without water, growth cannot take place."
  },
  apply:[
    {q:"Your friend says a river is living because it moves. Is he correct? Explain.", a:"No. A river moves but it cannot feed, grow or reproduce, so it is non-living."},
    {q:"Why should we plant more trees in our community?", a:"Trees give oxygen, shade, food, timber and hold the soil."},
    {q:"Name two animals kept at home and say why they are useful.", a:"e.g. hens give eggs and meat; goats give meat and milk."}
  ],
  activities:["Brainstorming: differentiate living and non-living things","Discovery field trip to find living and non-living things","Show and tell using samples from homework","Discussion of how plants and animals differ"],
  materials:["Level textbooks","Chart displaying animals only","Chart displaying plants only","Real specimens from the compound"],
  assessment:["Science journal","Quizzes","Test","Class and homework"]
},
{
  grade:1, period:"IV", sem:"Two", icon:"🌍",
  title:"The Earth and Its Composition",
  subtitle:"Rock, soil, air and water; the water cycle",
  outcomes:["Use a tree diagram or cycle to organise information and make inferences","Demonstrate the scientific process at a science fair"],
  objectives:["Describe the composition of the earth in verbal and graphic forms","Name the three main natural sources of water","Use science vocabulary to describe the water cycle","Demonstrate understanding of the uses of soil and rock"],
  note:"The earth is made of <b>rock, soil, air and water</b>. Water moves round and round in the <b>water cycle</b>: evaporation → condensation → precipitation → collection.",
  focus:["Composition of the earth","Rock and soil","Natural sources of water","The water cycle"],
  terms:[
    {t:"soil", d:"the loose top layer of earth where plants grow", x:"We plant cassava in soil."},
    {t:"rock", d:"the hard solid part of the earth", x:"The road is made over rock."},
    {t:"water cycle", d:"the movement of water between earth and sky", x:"Rain is part of the water cycle."},
    {t:"evaporation", d:"when water changes into vapour and rises", x:"The sun causes evaporation from the river."},
    {t:"condensation", d:"when water vapour cools and forms clouds", x:"Condensation makes clouds."},
    {t:"precipitation", d:"water falling as rain", x:"Precipitation fills the streams."},
    {t:"river", d:"a natural stream of flowing water", x:"The St. Paul is a river."},
    {t:"well", d:"a deep hole dug to reach water", x:"We fetch water from the well."},
    {t:"spring", d:"water coming naturally from the ground", x:"A spring flows near the hill."},
    {t:"vapour", d:"water in the form of gas", x:"Steam is water vapour."},
    {t:"fertile", d:"good for growing plants", x:"Fertile soil gives a good harvest."},
    {t:"erosion", d:"the washing away of soil", x:"Heavy rain causes erosion."}
  ],
  facts:[
    {q:"Name the four things that make up the earth.", a:"Rock, soil, air and water."},
    {q:"Name three natural sources of water.", a:"Rivers, springs and rain (also wells, lakes, streams)."},
    {q:"What is evaporation?", a:"When water changes into vapour and rises into the air."},
    {q:"What causes evaporation?", a:"Heat from the sun."},
    {q:"What forms when water vapour cools?", a:"Clouds (by condensation)."},
    {q:"Give two uses of soil.", a:"Growing crops and making bricks or pots."}
  ],
  tf:[
    {s:"The sun causes water to evaporate.", a:"true", why:"Heat from the sun turns water into vapour."},
    {s:"Rain falls from clouds.", a:"true", why:"Clouds release water as precipitation."},
    {s:"Soil and rock are the same thing.", a:"false", why:"Soil is loose and holds plants; rock is hard and solid."},
    {s:"The water cycle has an end.", a:"false", why:"It repeats over and over without ending."},
    {s:"Cutting all trees on a hillside can cause erosion.", a:"true", why:"Roots hold the soil; without them rain washes soil away."}
  ],
  classify:{ title:"Sort these into groups", groups:[
    {name:"Sources of water", items:["river","well","spring","rain","lake"]},
    {name:"Uses of soil", items:["growing crops","making bricks","making pots"]},
    {name:"Uses of rock", items:["building houses","making roads","grinding stones"]}
  ]},
  diagram:{ title:"The water cycle", caption:"Write what happens at each stage.", parts:[
    {p:"Evaporation", f:"The sun heats water in rivers and the sea; it rises as vapour"},
    {p:"Condensation", f:"The vapour cools high in the sky and forms clouds"},
    {p:"Precipitation", f:"The water falls back to earth as rain"},
    {p:"Collection", f:"Rain collects in rivers, lakes and the ground, and the cycle repeats"}
  ]},
  experiment:{
    title:"Making Rain in the Classroom",
    aim:"To show evaporation and condensation, the two main stages of the water cycle.",
    materials:["Hot water","A clear glass or jar","A metal plate or lid","Some ice cubes if available"],
    steps:["Pour hot water into the jar until it is one quarter full.","Place the metal plate on top of the jar.","Put ice cubes on the plate, or leave the cold plate for five minutes.","Watch the underside of the plate closely.","Record what you see forming and falling."],
    expect:"Drops of water form under the cold plate and fall back down like rain.",
    why:"The hot water evaporates, the vapour meets the cold plate and condenses into drops — this is how rain forms."
  },
  apply:[
    {q:"Why do puddles on the road disappear after a sunny morning?", a:"The sun's heat evaporates the water into the air."},
    {q:"Why is fertile soil important to a farmer?", a:"Because crops grow well in it, giving a good harvest."},
    {q:"Suggest one way your community can stop soil erosion.", a:"Plant trees and grass, or build drains to control running water."}
  ],
  activities:["Draw and label a tree diagram of the earth's composition","Field trip to observe soil and rock types","Water cycle demonstration","Science fair display of the water cycle"],
  materials:["Level textbooks","Samples of soil and rock","Jars and water","Water cycle chart"],
  assessment:["Labelled water cycle diagram","Quizzes","Science journal","Class and homework"]
},
{
  grade:1, period:"V", sem:"Two", icon:"☀️",
  title:"Weather and Climate, Space and Solar System",
  subtitle:"The seasons of Liberia and the heavenly bodies",
  outcomes:["Make simple equipment for reading the weather","Read weather forecasts on phone, computer or television"],
  objectives:["Describe the weather","State the effect of weather on living things","Name and describe the seasons of Liberia","Describe the effects of air (wind and storm) on objects","Explain the effects of poor ventilation on humans","Identify heavenly bodies"],
  note:"<b>Weather</b> is the condition of the air each day. <b>Climate</b> is the usual weather of a place over many years. Liberia has two seasons: the <b>dry season</b> and the <b>rainy season</b>.",
  focus:["Weather and climate","Seasons of Liberia","Effects of wind and storm","Ventilation","Heavenly bodies and the solar system"],
  terms:[
    {t:"weather", d:"the condition of the air each day", x:"Today the weather is hot."},
    {t:"climate", d:"the usual weather of a place over many years", x:"Liberia has a tropical climate."},
    {t:"dry season", d:"the time of year with little rain", x:"The dry season runs from November to April."},
    {t:"rainy season", d:"the time of year with much rain", x:"The rainy season runs from May to October."},
    {t:"temperature", d:"how hot or cold the air is", x:"The temperature is high at noon."},
    {t:"wind", d:"moving air", x:"The wind bends the palm trees."},
    {t:"storm", d:"strong wind with heavy rain", x:"The storm broke the roof."},
    {t:"ventilation", d:"the movement of fresh air into a room", x:"Open the window for ventilation."},
    {t:"sun", d:"the star at the centre of our solar system", x:"The sun gives us light and heat."},
    {t:"moon", d:"the natural satellite of the earth", x:"The moon shines at night."},
    {t:"star", d:"a huge ball of burning gas in space", x:"Stars twinkle at night."},
    {t:"solar system", d:"the sun and the planets that move round it", x:"Earth is in the solar system."}
  ],
  facts:[
    {q:"What is weather?", a:"The condition of the air each day."},
    {q:"How many seasons does Liberia have? Name them.", a:"Two: the dry season and the rainy season."},
    {q:"Which months make up the rainy season in Liberia?", a:"About May to October."},
    {q:"What is the sun?", a:"A star at the centre of our solar system that gives light and heat."},
    {q:"Why is ventilation important in a classroom?", a:"It brings in fresh air so we can breathe well and stay healthy."},
    {q:"Name three heavenly bodies.", a:"The sun, the moon and the stars."}
  ],
  tf:[
    {s:"Weather and climate mean exactly the same thing.", a:"false", why:"Weather is daily; climate is the usual pattern over many years."},
    {s:"The moon gives out its own light.", a:"false", why:"The moon reflects light from the sun."},
    {s:"Liberia has four seasons.", a:"false", why:"Liberia has two: dry and rainy."},
    {s:"Poor ventilation can make people feel sick.", a:"true", why:"Stale air with little oxygen causes headache and tiredness."},
    {s:"Strong wind can damage roofs.", a:"true", why:"A storm can lift or break roofing."}
  ],
  classify:{ title:"Sort these into groups", groups:[
    {name:"Dry season", items:["hot sun","dust","harmattan wind","clear sky"]},
    {name:"Rainy season", items:["heavy rain","floods","muddy roads","dark clouds"]},
    {name:"Heavenly bodies", items:["sun","moon","stars","planets"]}
  ]},
  diagram:{ title:"Reading the weather", caption:"Write what each instrument or sign tells us.", parts:[
    {p:"Thermometer", f:"Measures temperature — how hot or cold it is"},
    {p:"Rain gauge", f:"Measures how much rain has fallen"},
    {p:"Wind vane", f:"Shows the direction the wind is blowing from"},
    {p:"Dark clouds", f:"A sign that rain is likely to fall soon"}
  ]},
  experiment:{
    title:"Make a Simple Rain Gauge",
    aim:"To measure how much rain falls in one day.",
    materials:["A clear plastic bottle","Scissors","A ruler","A marker"],
    steps:["Cut the top off the bottle and turn it upside down inside the base to make a funnel.","Use the ruler and marker to draw a scale in centimetres on the side.","Place the gauge outside in an open place away from trees.","Leave it overnight during the rainy season.","Read and record the level of water each morning for one week."],
    expect:"Different amounts of rain are collected on different days.",
    why:"A rain gauge collects and measures precipitation, which is how weather stations record rainfall."
  },
  apply:[
    {q:"Why do farmers need to know the seasons?", a:"So they know when to plant and when to harvest their crops."},
    {q:"A classroom has all its windows closed on a hot day. What problem may arise?", a:"Poor ventilation — the air becomes stale and hot, and pupils feel tired or sick."},
    {q:"Why do we see the sun in the day and stars at night?", a:"The sun's bright light hides the stars during the day."}
  ],
  activities:["Make simple weather-reading equipment","Keep a class weather chart for one week","Read weather forecasts on phone or television","Model the solar system with balls"],
  materials:["Plastic bottles and rulers","Weather chart","Solar system poster","Level textbooks"],
  assessment:["Weather chart record","Quizzes","Science journal","Test"]
},
{
  grade:1, period:"VI", sem:"Two", icon:"🧼",
  title:"Care of the Body",
  subtitle:"Body parts, hygiene, HIV/AIDS awareness and substance abuse",
  outcomes:["Identify and name different parts of the body and how to care for them","Understand the danger of taking bad substances","Explain basic facts about HIV and AIDS"],
  objectives:["Describe the parts of the body","State ways we care for each body part","State the importance of proper hand washing","Explain HIV/AIDS","Identify substances commonly abused"],
  note:"Keeping the body clean prevents disease. <b>Proper hand washing</b> with soap and clean water is the single best way to stop germs from entering the body. Some parts of the body are <b>private</b> and must not be touched by others.",
  focus:["Names and functions of body parts","Care of the body","Private and non-private parts","Hand washing","HIV/AIDS basic facts","Good and bad substances"],
  terms:[
    {t:"hygiene", d:"keeping clean to stay healthy", x:"Good hygiene prevents disease."},
    {t:"germ", d:"a tiny living thing that can cause disease", x:"Germs live on dirty hands."},
    {t:"disease", d:"a sickness of the body", x:"Malaria is a disease."},
    {t:"soap", d:"what we use with water to remove dirt and germs", x:"Wash your hands with soap."},
    {t:"private parts", d:"parts of the body that are covered and personal", x:"No one should touch your private parts."},
    {t:"HIV", d:"a virus that weakens the body's defence", x:"HIV can be prevented."},
    {t:"AIDS", d:"the sickness caused when HIV has weakened the body", x:"AIDS develops from untreated HIV."},
    {t:"virus", d:"a very tiny germ that causes disease", x:"HIV is a virus."},
    {t:"substance abuse", d:"using harmful things like alcohol or drugs", x:"Substance abuse damages the body."},
    {t:"alcohol", d:"a harmful drink that affects the mind", x:"Alcohol is a bad substance for children."},
    {t:"cigarette", d:"rolled tobacco that is smoked and harms the lungs", x:"Cigarettes damage the lungs."},
    {t:"healthy", d:"free from sickness", x:"Eat well to stay healthy."}
  ],
  facts:[
    {q:"Why should we wash our hands with soap?", a:"To remove germs that cause disease."},
    {q:"Name four times when you must wash your hands.", a:"Before eating, after playing, after using the toilet, and when coming from outside."},
    {q:"What does HIV stand for in simple terms?", a:"A virus that weakens the body's defence against sickness."},
    {q:"Name three substances that are commonly abused.", a:"Alcohol, drugs and cigarettes."},
    {q:"Name two good substances we can take.", a:"Clean water and fruit juices."},
    {q:"What should you do if someone touches your private parts?", a:"Say no loudly, move away and tell a trusted adult at once."}
  ],
  tf:[
    {s:"Washing hands with only water removes all germs.", a:"false", why:"Soap is needed to remove germs properly."},
    {s:"HIV can be prevented.", a:"true", why:"Correct knowledge and safe behaviour prevent HIV."},
    {s:"Cigarettes are good for the lungs.", a:"false", why:"Cigarettes damage the lungs and cause disease."},
    {s:"You should tell a trusted adult about a bad touch.", a:"true", why:"Telling a trusted adult keeps you safe."},
    {s:"Brushing teeth every day helps keep them healthy.", a:"true", why:"Brushing removes food and germs."}
  ],
  classify:{ title:"Good or bad for the body?", groups:[
    {name:"Good substances", items:["clean water","fruit juice","milk","fresh food"]},
    {name:"Bad substances", items:["alcohol","cigarettes","harmful drugs"]},
    {name:"Good habits", items:["washing hands","brushing teeth","bathing daily","cutting nails"]}
  ]},
  diagram:{ title:"Caring for the parts of the body", caption:"Write how we care for each part.", parts:[
    {p:"Teeth", f:"Brush twice a day with a brush and paste or chewing stick"},
    {p:"Hair", f:"Wash and comb it regularly to keep it clean"},
    {p:"Skin", f:"Bath every day with soap and clean water"},
    {p:"Hands and nails", f:"Wash with soap and cut nails short"},
    {p:"Ears", f:"Clean the outside gently; never push objects inside"},
    {p:"Eyes", f:"Wash the face daily and do not rub with dirty hands"}
  ]},
  experiment:{
    title:"The Pepper and Soap Test",
    aim:"To show how soap removes germs from the hands.",
    materials:["A wide bowl of clean water","Ground pepper or dust","Soap"],
    steps:["Sprinkle ground pepper on the surface of the water. The pepper stands for germs.","Dip one clean finger into the water and take it out. Observe the pepper on your finger.","Now rub soap on the same finger.","Dip the soapy finger into the water again.","Watch what the pepper does and record it."],
    expect:"Without soap the pepper sticks to the finger; with soap the pepper rushes away from it.",
    why:"Soap breaks the surface and pushes germs away, which is why washing with soap is far better than water alone."
  },
  apply:[
    {q:"Your friend eats without washing his hands after playing. What may happen?", a:"Germs on his hands can enter his mouth and make him sick with diarrhoea or worms."},
    {q:"Why is it important to know which parts of the body are private?", a:"So that you can protect yourself and report anyone who touches you wrongly."},
    {q:"Give one reason a child should never drink alcohol.", a:"It damages the growing body and the mind, and can lead to accidents and illness."}
  ],
  activities:["Song: 'This is the way we wash our hands'","Rhyme: 'This is my ___, I use it to ___'","Teacher demonstration of body care as learners mimic","Flip chart showing good and bad substances"],
  materials:["Posters","Magazine cutouts of personal hygiene materials","Chart of do's for various body parts","Soap and water for demonstration"],
  assessment:["Quizzes","Test","Demonstration of correct hand washing","Class and homework"]
},

/* ================= GRADE 2 ================= */
{
  grade:2, period:"I", sem:"One", icon:"🔬",
  title:"Science Is Exploration",
  subtitle:"Exploring my world using the science process",
  outcomes:["Use the steps of scientific exploration to investigate the immediate environment"],
  objectives:["Explain what it means to explore","Name the steps of a simple investigation","Ask a science question and predict the answer","Record and report what was found"],
  note:"To <b>explore</b> is to search and find out. Scientists follow steps: <b>ask a question → predict → test → observe → record → report</b>. A <b>prediction</b> is a sensible guess before you test.",
  focus:["Meaning of exploration","Steps of investigation","Predicting","Recording and reporting","Science tools"],
  terms:[
    {t:"explore", d:"to search and find out about something", x:"We explore the school garden."},
    {t:"investigate", d:"to study carefully to find the truth", x:"Let us investigate which soil holds water."},
    {t:"question", d:"what we want to find out", x:"Our question is: does the seed need light?"},
    {t:"predict", d:"to say what you think will happen", x:"I predict the ice will melt."},
    {t:"record", d:"to write down what you find", x:"Record your results in a table."},
    {t:"result", d:"what you found out", x:"The result showed the seed grew."},
    {t:"data", d:"the information you collect", x:"We wrote the data in our journal."},
    {t:"hand lens", d:"a tool that makes small things look bigger", x:"Use a hand lens to see the ant."},
    {t:"measure", d:"to find the size or amount", x:"Measure the water with a cup."},
    {t:"conclusion", d:"what you decide from your results", x:"Our conclusion is that plants need water."},
    {t:"safety", d:"keeping free from harm", x:"Follow safety rules in science."},
    {t:"report", d:"to tell others what you found", x:"Each group will report to the class."}
  ],
  facts:[
    {q:"What does it mean to explore?", a:"To search and find out about something."},
    {q:"What is a prediction?", a:"A sensible guess about what will happen before you test."},
    {q:"Why do scientists record their results?", a:"So they do not forget, and so others can check the work."},
    {q:"What tool makes small things look bigger?", a:"A hand lens (magnifying glass)."},
    {q:"What is a conclusion?", a:"What you decide after looking at your results."},
    {q:"Name two safety rules for science work.", a:"Do not taste unknown things; wash hands after the activity."}
  ],
  tf:[
    {s:"A prediction must always be correct.", a:"false", why:"A prediction is a guess; testing shows if it was right."},
    {s:"Scientists write down what they observe.", a:"true", why:"Recording keeps the data accurate."},
    {s:"You should taste chemicals to identify them.", a:"false", why:"That is dangerous and against safety rules."},
    {s:"A hand lens makes small things appear larger.", a:"true", why:"It magnifies the object."},
    {s:"Exploring means finding out about things.", a:"true", why:"That is the meaning of explore."}
  ],
  classify:{ title:"Sort into the science process", groups:[
    {name:"Before the test", items:["ask a question","make a prediction","collect materials"]},
    {name:"During the test", items:["observe carefully","measure","record data"]},
    {name:"After the test", items:["draw a conclusion","report to the class"]}
  ]},
  diagram:{ title:"Steps of a science investigation", caption:"Write what happens at each step.", parts:[
    {p:"1. Question", f:"Decide what you want to find out"},
    {p:"2. Predict", f:"Say what you think will happen and why"},
    {p:"3. Test", f:"Carry out the activity carefully and fairly"},
    {p:"4. Observe", f:"Use your senses to notice what happens"},
    {p:"5. Record", f:"Write or draw your results"},
    {p:"6. Conclude", f:"Say what your results mean and report them"}
  ]},
  experiment:{
    title:"Which Paper Soaks the Most Water?",
    aim:"To practise the steps of an investigation using a fair test.",
    materials:["Three kinds of paper","A cup of water","A spoon","A ruler"],
    steps:["Question: which paper soaks up the most water?","Write your prediction before testing.","Put one spoon of water on a flat surface for each paper — the same amount each time.","Lay each paper on its water for ten seconds, then lift it.","Measure how far the wet mark spread, record the data, and write your conclusion."],
    expect:"One paper soaks up more water than the others; the results can be measured and compared.",
    why:"Using the same amount of water each time makes it a fair test, so the difference is caused only by the paper."
  },
  apply:[
    {q:"Why must you use the same amount of water for each paper in the test above?", a:"To make it a fair test, so only the type of paper is different."},
    {q:"Your prediction turned out to be wrong. Is your investigation a failure? Explain.", a:"No. Finding out that a prediction is wrong is still a useful scientific result."},
    {q:"Name one question about your school compound that you could investigate.", a:"Any testable question, e.g. 'Which part of the yard dries fastest after rain?'"}
  ],
  activities:["Small mixed-ability groups carry out simple investigations","Whole-class brainstorm on the meaning of exploration","Keep a science journal","Report findings to the class"],
  materials:["Level textbooks","Hand lens","Cups, spoons, rulers","Science journal"],
  assessment:["Science journal","Quizzes","Group report","Class and homework"]
},
{
  grade:2, period:"II", sem:"One", icon:"💧",
  title:"Exploring Water and Air; Sound Energy",
  subtitle:"Sources of water, evaporation, solubility, properties of air and sound",
  outcomes:["Appreciate the importance of the natural elements of the environment and their usefulness to humans"],
  objectives:["Name and identify sources of water","Explain the process of evaporation and condensation","Identify soluble and insoluble substances in water","State the properties and impact of air","Explain how sound is produced and travels"],
  note:"A substance that <b>dissolves</b> in water is <b>soluble</b> (salt, sugar). One that does not dissolve is <b>insoluble</b> (sand, stone). <b>Sound</b> is made when something <b>vibrates</b>.",
  focus:["Sources of water","Evaporation and condensation","Soluble and insoluble substances","Properties of air","Sound energy and communication"],
  terms:[
    {t:"soluble", d:"able to dissolve in water", x:"Salt is soluble in water."},
    {t:"insoluble", d:"not able to dissolve in water", x:"Sand is insoluble."},
    {t:"dissolve", d:"to mix completely into a liquid", x:"Sugar dissolves in tea."},
    {t:"solution", d:"the liquid formed when something dissolves", x:"Salt water is a solution."},
    {t:"evaporation", d:"liquid changing into vapour", x:"Evaporation dries the clothes."},
    {t:"condensation", d:"vapour changing back into liquid", x:"Condensation forms drops on a cold bottle."},
    {t:"air", d:"the mixture of gases around us", x:"Air fills the balloon."},
    {t:"oxygen", d:"the gas in air needed for breathing", x:"We breathe in oxygen."},
    {t:"sound", d:"a form of energy we hear", x:"The drum makes a sound."},
    {t:"vibrate", d:"to move quickly to and fro", x:"The string vibrates to make sound."},
    {t:"loud", d:"having a strong sound", x:"The horn is loud."},
    {t:"communication", d:"passing a message to others", x:"Sound is used in communication."}
  ],
  facts:[
    {q:"Name three sources of water.", a:"Rain, river, well (also spring, lake, sea)."},
    {q:"What is a soluble substance?", a:"One that dissolves in water, such as salt or sugar."},
    {q:"Give two examples of insoluble substances.", a:"Sand and stone (also oil, chalk dust)."},
    {q:"What causes sound?", a:"Vibration — something moving quickly to and fro."},
    {q:"Name the gas in air that we need to breathe.", a:"Oxygen."},
    {q:"Give one way sound is used in communication.", a:"Talking, a drum, a bell, a telephone or a radio."}
  ],
  tf:[
    {s:"Sand dissolves completely in water.", a:"false", why:"Sand is insoluble; it settles at the bottom."},
    {s:"Sound is produced by vibration.", a:"true", why:"Vibrating objects make sound."},
    {s:"Air takes up space.", a:"true", why:"Air fills balloons and containers."},
    {s:"Evaporation happens faster on a hot sunny day.", a:"true", why:"Heat speeds up evaporation."},
    {s:"Sound cannot travel through air.", a:"false", why:"Sound travels through air to reach our ears."}
  ],
  classify:{ title:"Soluble or insoluble in water?", groups:[
    {name:"Soluble", items:["salt","sugar","milk powder"]},
    {name:"Insoluble", items:["sand","stone","chalk","cooking oil"]},
    {name:"Things that make sound", items:["drum","bell","radio","whistle"]}
  ]},
  diagram:{ title:"Properties of air", caption:"Write what each property means.", parts:[
    {p:"Air takes up space", f:"It fills a balloon or an empty bottle"},
    {p:"Air has weight", f:"An inflated ball is heavier than a flat one"},
    {p:"Air can be felt", f:"Moving air (wind) is felt on the skin"},
    {p:"Air supports burning", f:"A candle goes out when air is cut off"},
    {p:"Air is needed for breathing", f:"Living things take oxygen from the air"}
  ]},
  experiment:{
    title:"Soluble and Insoluble",
    aim:"To find out which substances dissolve in water.",
    materials:["Four clear cups of water","Salt","Sugar","Sand","Chalk dust","A spoon"],
    steps:["Label the four cups: salt, sugar, sand, chalk.","Add one spoon of each substance to its cup.","Stir each cup twenty times with a clean spoon.","Let the cups stand for five minutes.","Observe which substances disappeared and which settled, and record your results in a table."],
    expect:"Salt and sugar dissolve and disappear; sand and chalk settle at the bottom.",
    why:"Soluble substances break up and spread through the water; insoluble ones do not."
  },
  apply:[
    {q:"Why does your mother stir sugar into tea?", a:"Stirring helps the sugar dissolve faster and spread through the tea."},
    {q:"Why do clothes dry faster in the sun than in the shade?", a:"The sun's heat makes the water evaporate faster."},
    {q:"How does a talking drum send a message across a distance?", a:"The drum vibrates and the sound travels through the air to distant listeners."}
  ],
  activities:["Test substances for solubility","Balloon and bottle activities showing air takes space","Make a simple string telephone","Discuss how sound is used in communication"],
  materials:["Cups, water, salt, sugar, sand","Balloons","String and tins","Level textbooks"],
  assessment:["Results table","Quizzes","Science journal","Test"]
},
{
  grade:2, period:"III", sem:"One", icon:"🧍",
  title:"Exploring the Human Body",
  subtitle:"Major body parts, male and female, and sensitive parts",
  outcomes:["Name the human body parts and explain basic facts about the female and male private parts"],
  objectives:["Name the major parts of the human being","Distinguish male from female","State sensitive body parts","Explain how to protect one's body"],
  note:"The body has many parts, each with its own <b>function</b>. Some parts are <b>private</b> — they are covered by clothes and no one has the right to touch them. If someone tries, say <b>no</b>, get away and <b>tell a trusted adult</b>.",
  focus:["Major body parts","Functions of body parts","Male and female differences","Sensitive and private parts","Personal safety"],
  terms:[
    {t:"head", d:"the top part of the body holding the brain", x:"The head protects the brain."},
    {t:"trunk", d:"the main part of the body", x:"The trunk holds the chest and abdomen."},
    {t:"limbs", d:"the arms and legs", x:"We move with our limbs."},
    {t:"brain", d:"the organ that controls the body", x:"The brain helps us think."},
    {t:"heart", d:"the organ that pumps blood", x:"The heart beats all day."},
    {t:"lungs", d:"the organs used for breathing", x:"The lungs take in air."},
    {t:"stomach", d:"the organ where food is digested", x:"Food goes to the stomach."},
    {t:"skin", d:"the covering of the whole body", x:"The skin protects the body."},
    {t:"male", d:"a boy or man", x:"A male cannot get pregnant."},
    {t:"female", d:"a girl or woman", x:"A female can get pregnant."},
    {t:"private parts", d:"personal body parts covered by clothing", x:"Private parts must be respected."},
    {t:"trusted adult", d:"a grown-up you can safely tell", x:"Tell a trusted adult if you feel unsafe."}
  ],
  facts:[
    {q:"Name the three main divisions of the human body.", a:"The head, the trunk and the limbs."},
    {q:"Which organ pumps blood round the body?", a:"The heart."},
    {q:"Which organs do we use for breathing?", a:"The lungs."},
    {q:"State one difference between a male and a female.", a:"A female can become pregnant and give birth; a male cannot."},
    {q:"What should you do if someone touches your private parts?", a:"Say no loudly, move away and tell a trusted adult immediately."},
    {q:"Which organ controls the whole body?", a:"The brain."}
  ],
  tf:[
    {s:"The heart pumps blood around the body.", a:"true", why:"That is the heart's function."},
    {s:"It is fine for anyone to touch your private parts.", a:"false", why:"Private parts are personal; you must report any such touch."},
    {s:"The brain is found in the head.", a:"true", why:"The skull protects the brain."},
    {s:"Both males and females can become pregnant.", a:"false", why:"Only females can become pregnant."},
    {s:"The skin covers and protects the whole body.", a:"true", why:"Skin is the body's protective covering."}
  ],
  classify:{ title:"Group the body parts", groups:[
    {name:"Head", items:["eyes","ears","nose","mouth","brain"]},
    {name:"Trunk", items:["chest","heart","lungs","stomach"]},
    {name:"Limbs", items:["arms","hands","legs","feet"]}
  ]},
  diagram:{ title:"Body organs and their functions", caption:"Write the work each organ does.", parts:[
    {p:"Brain", f:"Controls the body and helps us think"},
    {p:"Heart", f:"Pumps blood to all parts of the body"},
    {p:"Lungs", f:"Take in oxygen and give out carbon dioxide"},
    {p:"Stomach", f:"Digests the food we eat"},
    {p:"Skin", f:"Covers and protects the body and feels touch"}
  ]},
  experiment:{
    title:"Feel Your Heartbeat",
    aim:"To observe that the heart beats faster after exercise.",
    materials:["A clock or watch with seconds","Your own hand"],
    steps:["Sit quietly for two minutes.","Place two fingers on the side of your neck or your wrist to feel the beat.","Count the beats for thirty seconds and write the number.","Now jump on the spot for one minute.","Count the beats again for thirty seconds and compare the two numbers."],
    expect:"The heart beats faster after exercise than at rest.",
    why:"During exercise the muscles need more oxygen, so the heart pumps faster to deliver blood more quickly."
  },
  apply:[
    {q:"Why do you breathe faster after running?", a:"Your body needs more oxygen, so the lungs work faster."},
    {q:"A stranger asks to take you somewhere alone and touch you. What do you do?", a:"Say no loudly, run away to a safe place and tell a trusted adult at once."},
    {q:"Why must we protect the head during play?", a:"Because the head holds the brain, which controls the whole body."}
  ],
  activities:["Name and point to body parts","Chart work on male and female differences","Role play on saying no to bad touches","Discussion with a health worker if available"],
  materials:["Body chart","Posters","Level textbooks","Flip chart"],
  assessment:["Labelled body diagram","Quizzes","Oral questions","Test"]
},
{
  grade:2, period:"IV", sem:"Two", icon:"🌿",
  title:"Exploring and Grouping Plants",
  subtitle:"Parts of a plant, grouping plants and plant habitats",
  outcomes:["Group plants in the community and identify plants found in different habitats"],
  objectives:["Name the parts of a plant and their functions","Group plants by size and by use","Name plants found in different habitats","State the uses of plants"],
  note:"The main parts of a plant are the <b>root, stem, leaf, flower and fruit</b>. The <b>root</b> holds the plant and takes in water; the <b>leaf</b> makes food for the plant.",
  focus:["Parts of a plant and functions","Grouping plants: trees, shrubs, herbs","Plant habitats","Uses of plants"],
  terms:[
    {t:"root", d:"the part that holds the plant and takes in water", x:"The root grows in the soil."},
    {t:"stem", d:"the part that holds up the plant and carries water", x:"The stem carries water to the leaves."},
    {t:"leaf", d:"the flat green part that makes food", x:"The leaf makes food using sunlight."},
    {t:"flower", d:"the part that makes seeds", x:"The flower becomes a fruit."},
    {t:"fruit", d:"the part that holds the seeds", x:"A mango is a fruit."},
    {t:"seed", d:"the part that grows into a new plant", x:"Plant the seed in the soil."},
    {t:"tree", d:"a tall plant with a thick woody stem", x:"The cotton tree is a tree."},
    {t:"shrub", d:"a small woody plant with many stems", x:"The hibiscus is a shrub."},
    {t:"herb", d:"a small soft-stemmed plant", x:"Pepper is a herb."},
    {t:"habitat", d:"the place where a plant or animal lives", x:"A swamp is a habitat."},
    {t:"timber", d:"wood used for building", x:"Timber comes from trees."},
    {t:"medicine", d:"something used to treat sickness", x:"Some leaves are used as medicine."}
  ],
  facts:[
    {q:"Name the five main parts of a plant.", a:"Root, stem, leaf, flower and fruit."},
    {q:"What is the work of the root?", a:"To hold the plant firmly and take in water and minerals from the soil."},
    {q:"Which part of the plant makes food?", a:"The leaf."},
    {q:"Name the three groups of plants by size.", a:"Trees, shrubs and herbs."},
    {q:"Give three uses of plants to humans.", a:"Food, medicine, timber, shade, oxygen (any three)."},
    {q:"Name one plant that grows in a swamp.", a:"Rice (also raffia palm or mangrove)."}
  ],
  tf:[
    {s:"The leaf makes food for the plant.", a:"true", why:"Leaves make food using sunlight."},
    {s:"All plants are trees.", a:"false", why:"Plants also include shrubs and herbs."},
    {s:"Roots grow upwards into the air.", a:"false", why:"Roots grow downwards into the soil."},
    {s:"Some plants are used as medicine.", a:"true", why:"Many leaves and barks are traditional medicines."},
    {s:"A habitat is the place where a plant lives.", a:"true", why:"That is the meaning of habitat."}
  ],
  classify:{ title:"Group these plants", groups:[
    {name:"Trees", items:["cotton tree","mango tree","rubber tree","palm tree"]},
    {name:"Shrubs", items:["hibiscus","coffee","pepper bush"]},
    {name:"Herbs", items:["grass","pepper","potato greens"]}
  ]},
  diagram:{ title:"Parts of a plant and their functions", caption:"Write the work of each part.", parts:[
    {p:"Root", f:"Holds the plant firmly and takes in water and minerals"},
    {p:"Stem", f:"Holds up the plant and carries water to the leaves"},
    {p:"Leaf", f:"Makes food for the plant using sunlight"},
    {p:"Flower", f:"Makes seeds for new plants"},
    {p:"Fruit", f:"Protects and carries the seeds"}
  ]},
  experiment:{
    title:"Does the Stem Carry Water?",
    aim:"To show that the stem carries water up to the leaves.",
    materials:["A glass of water","Red or blue ink or food colouring","A white flower or a stick of potato greens"],
    steps:["Half fill the glass with water.","Add plenty of ink so the water is strongly coloured.","Cut the bottom of the stem cleanly and stand it in the coloured water.","Leave it in a bright place for one day.","Look at the petals and leaves, then split the stem and look inside."],
    expect:"The petals and leaves show coloured lines, and the inside of the stem is coloured.",
    why:"The stem contains fine tubes that carry water from the roots up to the leaves and flowers."
  },
  apply:[
    {q:"A plant's roots are cut. What will happen to the plant? Why?", a:"It will wilt and die because it cannot take in water and cannot stand firm."},
    {q:"Why do farmers water crops during the dry season?", a:"Because plants need water to make food and stay alive, and there is little rain."},
    {q:"Name a plant in your community and state one use of it.", a:"Any correct local example, e.g. cassava for food, rubber tree for latex."}
  ],
  activities:["Field trip to collect and group plants","Draw and label a plant","Plant sorting by size and use","Class plant chart"],
  materials:["Real plant specimens","Plant chart","Drawing paper","Level textbooks"],
  assessment:["Labelled plant diagram","Grouping exercise","Quizzes","Science journal"]
},
{
  grade:2, period:"V", sem:"Two", icon:"🐟",
  title:"Classification of Animals Around Me",
  subtitle:"Grouping animals by where they live, what they eat and their bodies",
  outcomes:["Classify animals in the environment into their groups"],
  objectives:["Group animals as domestic or wild","Group animals by their habitat","Group animals by what they eat","Name the young ones of some animals"],
  note:"<b>Domestic</b> animals are kept by people; <b>wild</b> animals live on their own in the bush. Animals that eat only plants are <b>herbivores</b>, those that eat only meat are <b>carnivores</b>, and those that eat both are <b>omnivores</b>.",
  focus:["Domestic and wild animals","Animal habitats","Herbivore, carnivore, omnivore","Young ones of animals"],
  terms:[
    {t:"domestic animal", d:"an animal kept and cared for by people", x:"A goat is a domestic animal."},
    {t:"wild animal", d:"an animal that lives on its own in the bush", x:"A lion is a wild animal."},
    {t:"herbivore", d:"an animal that eats only plants", x:"A cow is a herbivore."},
    {t:"carnivore", d:"an animal that eats only meat", x:"A lion is a carnivore."},
    {t:"omnivore", d:"an animal that eats both plants and meat", x:"A pig is an omnivore."},
    {t:"habitat", d:"the place where an animal lives", x:"Water is the habitat of a fish."},
    {t:"mammal", d:"an animal that feeds its young with milk", x:"A goat is a mammal."},
    {t:"bird", d:"an animal with feathers, wings and a beak", x:"A hen is a bird."},
    {t:"reptile", d:"a crawling animal with dry scaly skin", x:"A lizard is a reptile."},
    {t:"insect", d:"a small animal with six legs", x:"An ant is an insect."},
    {t:"gills", d:"the parts a fish uses to breathe in water", x:"A fish breathes through gills."},
    {t:"young one", d:"the baby of an animal", x:"A kid is the young one of a goat."}
  ],
  facts:[
    {q:"What is a domestic animal?", a:"An animal kept and cared for by people."},
    {q:"Give two examples of wild animals.", a:"Lion and elephant (also monkey, snake, deer)."},
    {q:"What do we call an animal that eats only plants?", a:"A herbivore."},
    {q:"How does a fish breathe?", a:"Through its gills."},
    {q:"How many legs does an insect have?", a:"Six."},
    {q:"What is the young one of a goat called?", a:"A kid."}
  ],
  tf:[
    {s:"A goat is a wild animal.", a:"false", why:"A goat is domestic; it is kept by people."},
    {s:"A lion eats only meat, so it is a carnivore.", a:"true", why:"Carnivores eat only meat."},
    {s:"All birds have feathers.", a:"true", why:"Feathers are a feature of birds."},
    {s:"A fish can breathe on dry land for a long time.", a:"false", why:"Fish use gills and need water to breathe."},
    {s:"A spider is an insect because it is small.", a:"false", why:"Insects have six legs; a spider has eight."}
  ],
  classify:{ title:"Group these animals", groups:[
    {name:"Domestic", items:["goat","hen","dog","cow","cat"]},
    {name:"Wild", items:["lion","elephant","monkey","snake"]},
    {name:"Live in water", items:["fish","crab","frog"]}
  ]},
  diagram:{ title:"Animal groups and their features", caption:"Write one feature of each group.", parts:[
    {p:"Mammals", f:"Have hair or fur and feed their young with milk"},
    {p:"Birds", f:"Have feathers, wings and a beak; lay eggs"},
    {p:"Fish", f:"Live in water, have scales and breathe through gills"},
    {p:"Reptiles", f:"Have dry scaly skin and crawl"},
    {p:"Insects", f:"Have six legs and three body parts"}
  ]},
  experiment:{
    title:"Animal Survey of the School Compound",
    aim:"To observe and classify the animals living around the school.",
    materials:["Notebook and pencil","Hand lens"],
    steps:["Walk quietly round the school compound in your group for fifteen minutes.","Write down every animal you see, including small ones like ants.","For each animal, count the legs and note where you found it.","Back in class, put each animal into a group: insect, bird, mammal or reptile.","Make a table showing the group and the number found."],
    expect:"Insects are the most common group found in the compound.",
    why:"Classifying by observable features such as number of legs and body covering is how scientists group animals."
  },
  apply:[
    {q:"Why can a fish not live on land?", a:"Because it breathes with gills, which only work in water."},
    {q:"A farmer keeps hens for eggs. Are hens domestic or wild? Why?", a:"Domestic, because they are kept and cared for by people."},
    {q:"Explain why a goat is called a herbivore.", a:"Because it feeds only on plants such as grass and leaves."}
  ],
  activities:["Animal survey field trip","Sort animal picture cards into groups","Match animals to their young ones","Class animal chart"],
  materials:["Animal picture cards","Charts of animal groups","Hand lens","Level textbooks"],
  assessment:["Classification table","Quizzes","Science journal","Test"]
},
{
  grade:2, period:"VI", sem:"Two", icon:"💊",
  title:"Exploring Drugs",
  subtitle:"Good and bad substances, medicine safety and drug abuse",
  outcomes:["Identify harmful substances and explain ways of avoiding drug abuse"],
  objectives:["State the meaning of a drug","Distinguish between useful medicine and harmful substances","State the dangers of drug abuse","State rules for taking medicine safely"],
  note:"A <b>drug</b> is any substance that changes how the body works. Medicine given by a health worker helps us. <b>Drug abuse</b> is using drugs wrongly, and it damages the body and the mind.",
  focus:["Meaning of a drug","Useful medicines","Harmful substances","Drug abuse and its dangers","Medicine safety rules"],
  terms:[
    {t:"drug", d:"a substance that changes how the body works", x:"Medicine is a kind of drug."},
    {t:"medicine", d:"a drug used to treat sickness", x:"The nurse gave me medicine."},
    {t:"drug abuse", d:"using drugs wrongly or without need", x:"Drug abuse harms the body."},
    {t:"harmful", d:"causing damage", x:"Cigarettes are harmful."},
    {t:"dose", d:"the correct amount of medicine to take", x:"Take the right dose."},
    {t:"prescription", d:"a health worker's written instruction for medicine", x:"Buy medicine with a prescription."},
    {t:"expiry date", d:"the date after which medicine is unsafe", x:"Check the expiry date."},
    {t:"addiction", d:"not being able to stop using something", x:"Addiction is hard to break."},
    {t:"alcohol", d:"a harmful drink affecting the mind and body", x:"Alcohol harms the liver."},
    {t:"tobacco", d:"the leaf smoked in cigarettes", x:"Tobacco damages the lungs."},
    {t:"health worker", d:"a trained person who treats the sick", x:"See a health worker when ill."},
    {t:"refuse", d:"to say no firmly", x:"Refuse anything offered by a stranger."}
  ],
  facts:[
    {q:"What is a drug?", a:"Any substance that changes how the body works."},
    {q:"What is drug abuse?", a:"Using drugs wrongly, too much, or without a health worker's advice."},
    {q:"Name three commonly abused substances.", a:"Alcohol, cigarettes (tobacco) and harmful drugs."},
    {q:"Why must you check the expiry date on medicine?", a:"Because expired medicine can be unsafe or will not work."},
    {q:"Who should give you medicine?", a:"A parent, guardian or trained health worker."},
    {q:"State one effect of drug abuse on a pupil's schooling.", a:"It damages the brain, so the pupil cannot concentrate or learn well."}
  ],
  tf:[
    {s:"All drugs are bad for us.", a:"false", why:"Medicine given correctly by a health worker is helpful."},
    {s:"You may take any medicine you find at home.", a:"false", why:"Only take medicine given by a parent or health worker."},
    {s:"Cigarette smoking damages the lungs.", a:"true", why:"Tobacco smoke harms lung tissue."},
    {s:"Drug abuse can lead to addiction.", a:"true", why:"Repeated abuse makes stopping very difficult."},
    {s:"It is safe to take expired medicine.", a:"false", why:"Expired medicine may be harmful or ineffective."}
  ],
  classify:{ title:"Helpful or harmful?", groups:[
    {name:"Helpful (used correctly)", items:["prescribed malaria tablets","oral rehydration salts","vitamins from a clinic"]},
    {name:"Harmful substances", items:["alcohol","cigarettes","unknown street drugs"]},
    {name:"Safety rules", items:["check the expiry date","take the correct dose","only from a trusted adult"]}
  ]},
  diagram:{ title:"Effects of drug abuse on the body", caption:"Write how each part is affected.", parts:[
    {p:"Brain", f:"Thinking, memory and learning become poor"},
    {p:"Lungs", f:"Damaged by smoke, causing coughing and disease"},
    {p:"Liver", f:"Damaged by alcohol over time"},
    {p:"Heart", f:"Beats irregularly and is put under strain"},
    {p:"Whole person", f:"Poor school work, loss of friends and money problems"}
  ]},
  experiment:{
    title:"The Smoke Filter Demonstration (Teacher-led)",
    aim:"To show that smoke leaves a dirty stain, as it does in the lungs.",
    materials:["A clean white cloth or cotton wool","A smoky flame such as a candle or lamp (teacher only)"],
    steps:["TEACHER ONLY handles the flame; learners observe from a safe distance.","Hold the white cloth above the smoky flame for a few seconds.","Remove the cloth and let it cool.","Learners observe the colour of the cloth and describe the change.","Discuss what this suggests about smoke entering the lungs."],
    expect:"The white cloth turns grey or black where the smoke touched it.",
    why:"Smoke carries tiny black particles. The same particles collect in the lungs of a smoker and damage them."
  },
  apply:[
    {q:"An older boy offers you a cigarette and says it will make you look big. What do you say and do?", a:"Refuse firmly, walk away and tell a trusted adult."},
    {q:"Why should medicine be kept out of the reach of small children?", a:"Because they may swallow it wrongly and be poisoned."},
    {q:"Your friend has a headache and wants to take a tablet he found. What advice do you give?", a:"Do not take it; go to a parent or health worker first."}
  ],
  activities:["Role play: refusing harmful substances","Poster making on saying no to drugs","Talk from a community health worker","Discussion of medicine safety rules"],
  materials:["Posters","Magazine cutouts","Empty labelled medicine boxes (clean)","Level textbooks"],
  assessment:["Role play assessment","Poster","Quizzes","Test"]
},

/* ================= GRADE 3 ================= */
{
  grade:3, period:"I", sem:"One", icon:"🗺️",
  title:"Exploring the Organization of the Earth",
  subtitle:"Layers of the earth, land and water bodies",
  outcomes:["Describe how the earth is organised and identify its major features"],
  objectives:["Name the layers of the earth","Name the major landforms","Name the major water bodies","Describe the surface of the earth"],
  note:"The earth has three main layers: the <b>crust</b> (the thin outer layer we live on), the <b>mantle</b> (hot rock beneath) and the <b>core</b> (the very hot centre).",
  focus:["Layers of the earth","Landforms","Water bodies","Earth's surface"],
  terms:[
    {t:"crust", d:"the thin outer layer of the earth", x:"We live on the crust."},
    {t:"mantle", d:"the thick layer of hot rock below the crust", x:"The mantle is very hot."},
    {t:"core", d:"the centre of the earth", x:"The core is the hottest part."},
    {t:"landform", d:"a natural feature of the land", x:"A hill is a landform."},
    {t:"mountain", d:"a very high landform", x:"Mount Nimba is a mountain."},
    {t:"valley", d:"low land between hills", x:"A river runs through the valley."},
    {t:"plain", d:"flat open land", x:"Crops grow well on a plain."},
    {t:"ocean", d:"a very large body of salt water", x:"The Atlantic Ocean borders Liberia."},
    {t:"lake", d:"a body of water surrounded by land", x:"Lake Piso is in Grand Cape Mount."},
    {t:"stream", d:"a small flowing body of water", x:"A stream runs behind the school."},
    {t:"continent", d:"a very large mass of land", x:"Africa is a continent."},
    {t:"equator", d:"the imaginary line round the middle of the earth", x:"Liberia lies near the equator."}
  ],
  facts:[
    {q:"Name the three layers of the earth.", a:"The crust, the mantle and the core."},
    {q:"On which layer do we live?", a:"The crust."},
    {q:"Which layer is the hottest?", a:"The core."},
    {q:"Name the ocean that borders Liberia.", a:"The Atlantic Ocean."},
    {q:"Name three landforms.", a:"Mountain, valley, plain (also hill, plateau)."},
    {q:"Name the continent in which Liberia is found.", a:"Africa."}
  ],
  tf:[
    {s:"The crust is the thickest layer of the earth.", a:"false", why:"The crust is the thinnest layer."},
    {s:"The core is at the centre of the earth.", a:"true", why:"The core is the innermost layer."},
    {s:"An ocean contains salt water.", a:"true", why:"Ocean water is salty."},
    {s:"A valley is higher than a mountain.", a:"false", why:"A valley is low land; a mountain is high."},
    {s:"Liberia is on the continent of Africa.", a:"true", why:"Liberia is in West Africa."}
  ],
  classify:{ title:"Landform or water body?", groups:[
    {name:"Landforms", items:["mountain","hill","valley","plain"]},
    {name:"Water bodies", items:["ocean","river","lake","stream"]},
    {name:"Layers of the earth", items:["crust","mantle","core"]}
  ]},
  diagram:{ title:"Layers of the earth", caption:"Write one fact about each layer.", parts:[
    {p:"Crust", f:"The thin solid outer layer where we live"},
    {p:"Mantle", f:"A thick layer of very hot, partly melted rock"},
    {p:"Outer core", f:"A layer of liquid metal"},
    {p:"Inner core", f:"A solid ball of metal; the hottest part of the earth"}
  ]},
  experiment:{
    title:"Model the Layers of the Earth",
    aim:"To build a model showing the earth's three layers.",
    materials:["Clay or mud of three different colours","A knife or thin wire"],
    steps:["Roll a small ball of one colour for the core.","Cover it with a thicker layer of a second colour for the mantle.","Cover the whole thing with a thin layer of the third colour for the crust.","Cut the ball in half with the wire.","Draw and label what you see in the cut face."],
    expect:"The cut shows a small centre, a thick middle layer and a very thin outer skin.",
    why:"The model shows the true proportions: the crust we live on is extremely thin compared with the mantle and core."
  },
  apply:[
    {q:"Why can we not dig down to the core of the earth?", a:"Because it is extremely deep and extremely hot."},
    {q:"Farmers prefer plains to steep mountains for growing rice. Give one reason.", a:"Plains are flat, so soil and water stay in place and machines and people can work easily."},
    {q:"Name one landform or water body near your town and say how people use it.", a:"Any correct local example with a sensible use, e.g. a river used for fishing and water."}
  ],
  activities:["Build a clay model of the earth's layers","Map work identifying landforms and water bodies","Field observation of local landforms","Group presentation"],
  materials:["Clay or mud","Map of Liberia","Globe","Level textbooks"],
  assessment:["Labelled model or diagram","Quizzes","Map exercise","Science journal"]
},
{
  grade:3, period:"II", sem:"One", icon:"🚀",
  title:"Exploring Outer Space",
  subtitle:"The solar system, planets and movements of the earth",
  outcomes:["Describe the solar system and explain day, night and the seasons"],
  objectives:["Name the planets of the solar system","Explain rotation and revolution","Explain the cause of day and night","Describe the moon and its phases"],
  note:"<b>Rotation</b> is the earth spinning on its own axis — it takes 24 hours and causes <b>day and night</b>. <b>Revolution</b> is the earth moving round the sun — it takes 365¼ days and gives us the <b>year</b>.",
  focus:["The solar system","The planets","Rotation and revolution","Day and night","The moon"],
  terms:[
    {t:"solar system", d:"the sun and all the bodies moving round it", x:"Earth is part of the solar system."},
    {t:"planet", d:"a large body that moves round the sun", x:"Mars is a planet."},
    {t:"orbit", d:"the path a body takes round another", x:"The earth's orbit takes one year."},
    {t:"rotation", d:"the spinning of the earth on its axis", x:"Rotation causes day and night."},
    {t:"revolution", d:"the movement of the earth round the sun", x:"One revolution takes a year."},
    {t:"axis", d:"the imaginary line through the earth's centre", x:"The earth spins on its axis."},
    {t:"satellite", d:"a body that moves round a planet", x:"The moon is earth's satellite."},
    {t:"gravity", d:"the force that pulls things towards the earth", x:"Gravity makes fruit fall."},
    {t:"astronaut", d:"a person who travels into space", x:"An astronaut wears a special suit."},
    {t:"telescope", d:"an instrument for viewing distant objects", x:"We see stars with a telescope."},
    {t:"galaxy", d:"a very large group of stars", x:"Our galaxy is the Milky Way."},
    {t:"eclipse", d:"when one body blocks light from another", x:"An eclipse darkens the sun or moon."}
  ],
  facts:[
    {q:"How many planets are in our solar system?", a:"Eight."},
    {q:"Which planet do we live on?", a:"Earth."},
    {q:"What causes day and night?", a:"The rotation of the earth on its axis."},
    {q:"How long does one rotation of the earth take?", a:"About 24 hours (one day)."},
    {q:"How long does the earth take to go round the sun once?", a:"About 365¼ days (one year)."},
    {q:"What is the natural satellite of the earth?", a:"The moon."}
  ],
  tf:[
    {s:"The sun moves round the earth.", a:"false", why:"The earth moves round the sun."},
    {s:"Rotation of the earth causes day and night.", a:"true", why:"As earth spins, one side faces the sun."},
    {s:"The moon is a planet.", a:"false", why:"The moon is a satellite of the earth."},
    {s:"Gravity pulls objects towards the earth.", a:"true", why:"Gravity is a pulling force."},
    {s:"There are eight planets in the solar system.", a:"true", why:"Mercury to Neptune make eight."}
  ],
  classify:{ title:"Sort these space bodies", groups:[
    {name:"Planets", items:["Mercury","Earth","Mars","Jupiter"]},
    {name:"Not planets", items:["the sun (a star)","the moon (a satellite)","a comet"]},
    {name:"Earth's movements", items:["rotation on axis","revolution round the sun"]}
  ]},
  diagram:{ title:"The inner solar system in order from the sun", caption:"Write one fact about each body.", parts:[
    {p:"The Sun", f:"A star at the centre; gives light and heat to all the planets"},
    {p:"Mercury", f:"The planet closest to the sun and the smallest"},
    {p:"Venus", f:"The second planet; the hottest planet"},
    {p:"Earth", f:"The third planet; the only one known to have life"},
    {p:"Mars", f:"The fourth planet; called the red planet"}
  ]},
  experiment:{
    title:"Day and Night with a Torch",
    aim:"To show how the rotation of the earth causes day and night.",
    materials:["A ball or orange to be the earth","A torch to be the sun","A small paper flag or sticker"],
    steps:["Stick the small flag on the ball to mark Liberia.","Darken the room and shine the torch steadily on the ball.","Note that one half of the ball is lit and the other is dark.","Slowly turn the ball on the spot, keeping the torch still.","Watch the flag move from the lit side into the dark side and record what you see."],
    expect:"The flag passes through light and darkness as the ball turns, without the torch moving.",
    why:"The sun does not move round us. Day and night happen because the earth rotates on its own axis."
  },
  apply:[
    {q:"When it is day in Liberia, it is night in another country. Explain why.", a:"Because the earth is round and rotating, only the half facing the sun has daylight."},
    {q:"Why does a ball thrown up always come down?", a:"Because the force of gravity pulls it back towards the earth."},
    {q:"Why do we have a leap year with an extra day every four years?", a:"Because the earth takes about 365¼ days to circle the sun; the quarters add up to one day."}
  ],
  activities:["Torch and ball demonstration of day and night","Model the solar system in the school yard","Draw and label the planets in order","Night sky observation homework"],
  materials:["Torch, balls","Solar system chart","Drawing materials","Level textbooks"],
  assessment:["Labelled solar system diagram","Quizzes","Science journal","Test"]
},
{
  grade:3, period:"III", sem:"One", icon:"⚙️",
  title:"Investigating Force, Energy, Work and Power",
  subtitle:"Types of force, forms of energy and the six simple machines",
  outcomes:["Demonstrate the relationship among force, energy, work, power and machines"],
  objectives:["Explain the meaning of force","State the types of forces","Explain the uses of force","State forms of energy and their sources","State the difference between work and the rate of work (power)","Name examples of the six simple machines and explain their uses"],
  note:"<b>Work</b> is done when a force moves an object. <b>Power</b> is the rate of doing work — how fast the work is done. The <b>six simple machines</b> are the lever, pulley, wheel and axle, inclined plane, wedge and screw.",
  focus:["Force and its types","Forms and sources of energy","Work","Power","The six simple machines"],
  terms:[
    {t:"force", d:"a push or a pull", x:"A force moves the cart."},
    {t:"friction", d:"a force that slows movement between surfaces", x:"Friction stops the box sliding."},
    {t:"gravity", d:"the force pulling objects to the earth", x:"Gravity makes things fall."},
    {t:"energy", d:"the ability to do work", x:"Food gives us energy."},
    {t:"work", d:"what is done when a force moves an object", x:"Lifting a bucket is work."},
    {t:"power", d:"the rate of doing work", x:"A strong engine has more power."},
    {t:"machine", d:"a device that makes work easier", x:"A wheelbarrow is a machine."},
    {t:"lever", d:"a bar that turns on a pivot", x:"A crowbar is a lever."},
    {t:"pulley", d:"a wheel with a rope used for lifting", x:"A pulley lifts the bucket from the well."},
    {t:"inclined plane", d:"a slanting surface (ramp)", x:"A ramp is an inclined plane."},
    {t:"wedge", d:"a tool thick at one end and thin at the other", x:"An axe is a wedge."},
    {t:"screw", d:"an inclined plane wrapped round a rod", x:"A screw holds wood together."}
  ],
  facts:[
    {q:"What is a force?", a:"A push or a pull."},
    {q:"Name two types of force.", a:"Gravity and friction (also muscular, magnetic)."},
    {q:"When is work done in science?", a:"When a force moves an object."},
    {q:"What is power?", a:"The rate of doing work — how fast work is done."},
    {q:"Name the six simple machines.", a:"Lever, pulley, wheel and axle, inclined plane, wedge and screw."},
    {q:"Name three forms of energy.", a:"Heat, light, sound (also mechanical, electrical)."}
  ],
  tf:[
    {s:"Friction always helps movement.", a:"false", why:"Friction opposes movement, though it is useful for grip."},
    {s:"A machine makes work easier.", a:"true", why:"That is the purpose of a machine."},
    {s:"If you push a wall and it does not move, no work is done in science.", a:"true", why:"Work requires the object to move."},
    {s:"A ramp is an example of an inclined plane.", a:"true", why:"A ramp is a slanting surface."},
    {s:"Energy can be seen and held in the hand.", a:"false", why:"Energy is the ability to do work, not a material object."}
  ],
  classify:{ title:"Match to the simple machine", groups:[
    {name:"Lever", items:["crowbar","see-saw","wheelbarrow"]},
    {name:"Inclined plane / wedge", items:["ramp","axe","knife"]},
    {name:"Pulley / wheel and axle", items:["well pulley","flag pole rope","car wheel"]}
  ]},
  diagram:{ title:"The six simple machines", caption:"Write one everyday example of each.", parts:[
    {p:"Lever", f:"A bar on a pivot — e.g. a crowbar or see-saw"},
    {p:"Pulley", f:"A grooved wheel with a rope — e.g. a well pulley"},
    {p:"Wheel and axle", f:"A wheel fixed to a rod — e.g. a car wheel"},
    {p:"Inclined plane", f:"A slanting surface — e.g. a ramp"},
    {p:"Wedge", f:"Thick at one end, thin at the other — e.g. an axe"},
    {p:"Screw", f:"An inclined plane wrapped round a rod — e.g. a screw or bottle top"}
  ]},
  experiment:{
    title:"The Ramp Makes Work Easier",
    aim:"To show that an inclined plane reduces the force needed to raise a load.",
    materials:["A heavy tin or stone","A rubber band or spring balance","A plank of wood","Some books"],
    steps:["Tie the rubber band to the tin.","Lift the tin straight up onto a pile of books and note how far the rubber band stretches.","Now lean the plank against the books to form a ramp.","Pull the tin slowly up the ramp and note the stretch again.","Compare the two stretches and record which needed more force."],
    expect:"The rubber band stretches less when the tin is pulled up the ramp.",
    why:"The inclined plane lets you use a smaller force over a longer distance to do the same work."
  },
  apply:[
    {q:"Why is it easier to push a drum up a plank than to lift it straight into a truck?", a:"The plank is an inclined plane, which reduces the force needed."},
    {q:"Two boys carry equal loads upstairs. One takes 10 seconds, the other 20. Who used more power? Why?", a:"The one who took 10 seconds — he did the same work in less time, so his rate of work was greater."},
    {q:"Give one way friction is useful to us.", a:"It lets our feet grip the ground so we can walk without slipping."}
  ],
  activities:["Spider diagram on force","Identify simple machines in the school and community","Ramp and pulley investigations","Group model building"],
  materials:["Planks, tins, rope, pulleys","Rubber bands or spring balance","Simple machine charts","Level textbooks"],
  assessment:["Practical investigation report","Quizzes","Science journal","Test"]
},
{
  grade:3, period:"IV", sem:"Two", icon:"🌾",
  title:"Investigating More Uses of Plants",
  subtitle:"Food, medicine, timber and cash crops of Liberia",
  outcomes:["Investigate and explain the many uses of plants to people"],
  objectives:["List the uses of plants","Name Liberian food and cash crops","Explain how plants are used as medicine","Explain why we must conserve plants"],
  note:"Plants give us <b>food, medicine, timber, shade, clothing and oxygen</b>. A <b>cash crop</b> is grown mainly to be sold, such as rubber, cocoa and coffee in Liberia.",
  focus:["Uses of plants","Food crops","Cash crops of Liberia","Medicinal plants","Conservation"],
  terms:[
    {t:"food crop", d:"a plant grown to be eaten", x:"Rice is a food crop."},
    {t:"cash crop", d:"a plant grown mainly to be sold", x:"Rubber is a cash crop."},
    {t:"timber", d:"wood cut for building", x:"Timber comes from big trees."},
    {t:"latex", d:"the white liquid from a rubber tree", x:"Latex is collected in a cup."},
    {t:"harvest", d:"to gather crops when ready", x:"We harvest rice in October."},
    {t:"medicinal plant", d:"a plant used to treat sickness", x:"Neem is a medicinal plant."},
    {t:"fibre", d:"thread-like material from plants", x:"Cotton fibre makes cloth."},
    {t:"conserve", d:"to protect and use wisely", x:"We must conserve the forest."},
    {t:"deforestation", d:"the cutting down of many trees", x:"Deforestation harms the soil."},
    {t:"nursery", d:"a place where young plants are raised", x:"Seedlings grow in a nursery."},
    {t:"fertiliser", d:"material added to soil to help plants grow", x:"Manure is a natural fertiliser."},
    {t:"shade", d:"shelter from the sun", x:"The tree gives shade."}
  ],
  facts:[
    {q:"Give four uses of plants.", a:"Food, medicine, timber, shade, clothing, oxygen (any four)."},
    {q:"Name three food crops grown in Liberia.", a:"Rice, cassava and plantain (also potato greens, corn)."},
    {q:"Name three cash crops of Liberia.", a:"Rubber, cocoa and coffee (also oil palm, sugar cane)."},
    {q:"What is latex?", a:"The white liquid obtained from the rubber tree."},
    {q:"What is deforestation?", a:"The cutting down of large numbers of trees."},
    {q:"Give one reason we should conserve plants.", a:"They provide food, oxygen and medicine, and hold the soil against erosion."}
  ],
  tf:[
    {s:"Rubber is a cash crop in Liberia.", a:"true", why:"Rubber is grown mainly for sale and export."},
    {s:"All plants are useful only as food.", a:"false", why:"Plants also give medicine, timber, fibre and oxygen."},
    {s:"Deforestation can lead to soil erosion.", a:"true", why:"Without roots, rain washes the soil away."},
    {s:"Some plants are used to make medicine.", a:"true", why:"Many drugs come from plant materials."},
    {s:"Cutting all the trees in a forest is good for the environment.", a:"false", why:"It destroys habitats and causes erosion and climate problems."}
  ],
  classify:{ title:"Group these plant products", groups:[
    {name:"Food crops", items:["rice","cassava","plantain","corn"]},
    {name:"Cash crops", items:["rubber","cocoa","coffee","oil palm"]},
    {name:"Other uses", items:["timber for building","leaves for medicine","cotton for cloth"]}
  ]},
  diagram:{ title:"Uses of plants", caption:"Give one example for each use.", parts:[
    {p:"Food", f:"Rice, cassava, plantain and vegetables"},
    {p:"Medicine", f:"Leaves and bark used to treat illness"},
    {p:"Timber", f:"Wood for houses, doors and furniture"},
    {p:"Clothing", f:"Cotton fibre spun into cloth"},
    {p:"Oxygen and shade", f:"Trees release oxygen and shelter us from the sun"}
  ]},
  experiment:{
    title:"Grow Your Own Seedling",
    aim:"To raise a young plant and record its growth.",
    materials:["A tin or plastic cup","Soil","Bean or maize seeds","Water","A ruler"],
    steps:["Make small holes in the bottom of the tin for drainage.","Fill it with soil and plant two seeds about 2 cm deep.","Water lightly every day and keep it in the light.","From the day the shoot appears, measure its height each day with the ruler.","Record the heights in a table for two weeks and draw a simple graph."],
    expect:"The seedling grows taller each day; growth can be shown on a graph.",
    why:"Plants need soil, water and light to grow. Measuring growth over time is how scientists collect data."
  },
  apply:[
    {q:"Why does Liberia export rubber?", a:"Because rubber is a cash crop that earns money from other countries."},
    {q:"A community cuts every tree near its stream. Predict two problems.", a:"Soil erosion into the stream and loss of shade, plus the stream may dry up."},
    {q:"Name one medicinal plant used in your community and what it treats.", a:"Any correct local example, e.g. neem or lemon grass used for fever."}
  ],
  activities:["Visit a farm or nursery","Collect and display plant products","Plant a school garden","Debate on conservation"],
  materials:["Seeds, tins, soil","Samples of plant products","Level textbooks","Charts of Liberian crops"],
  assessment:["Growth record and graph","Quizzes","Science journal","Group presentation"]
},
{
  grade:3, period:"V", sem:"Two", icon:"⚗️",
  title:"Investigating What Matter Is Made Up Of",
  subtitle:"Properties of matter, states and measurement; investigating colours",
  outcomes:["Describe the fundamental properties of matter and how they are measured"],
  objectives:["State what matter is","State the properties of matter","Describe the different states of matter","Describe ways to measure different properties of matter","Investigate colours"],
  note:"<b>Mass</b> is the amount of matter in an object, measured in grams and kilograms. <b>Volume</b> is the space it takes up, measured in millilitres and litres. Every kind of matter has properties we can measure.",
  focus:["Properties of matter","States of matter","Measurement of mass and volume","Investigating colours"],
  terms:[
    {t:"mass", d:"the amount of matter in an object", x:"The mass of the stone is 200 g."},
    {t:"volume", d:"the space an object takes up", x:"The bottle has a volume of one litre."},
    {t:"density", d:"how heavy a thing is for its size", x:"Stone has a higher density than wood."},
    {t:"balance", d:"an instrument for measuring mass", x:"Weigh the sugar on a balance."},
    {t:"gram", d:"a unit of mass", x:"A small stone may be 50 grams."},
    {t:"kilogram", d:"a unit of mass equal to 1000 grams", x:"A bag of rice is 25 kilograms."},
    {t:"litre", d:"a unit of volume", x:"Buy one litre of oil."},
    {t:"transparent", d:"allowing light to pass through clearly", x:"Clear glass is transparent."},
    {t:"opaque", d:"not allowing light through", x:"Wood is opaque."},
    {t:"primary colours", d:"colours that cannot be made by mixing", x:"Red, blue and yellow are primary colours."},
    {t:"secondary colour", d:"a colour made by mixing two primary colours", x:"Green is a secondary colour."},
    {t:"mixture", d:"two or more substances put together", x:"Sand and salt form a mixture."}
  ],
  facts:[
    {q:"What is mass?", a:"The amount of matter in an object."},
    {q:"What instrument measures mass?", a:"A balance (or scale)."},
    {q:"In what units is volume of liquid measured?", a:"Millilitres and litres."},
    {q:"Name the three primary colours.", a:"Red, blue and yellow."},
    {q:"What colour is formed when blue and yellow are mixed?", a:"Green."},
    {q:"How many grams are in one kilogram?", a:"One thousand grams."}
  ],
  tf:[
    {s:"Mass and volume mean the same thing.", a:"false", why:"Mass is the amount of matter; volume is the space taken up."},
    {s:"A balance is used to measure mass.", a:"true", why:"That is what a balance does."},
    {s:"Red, blue and yellow are primary colours.", a:"true", why:"They cannot be made by mixing other colours."},
    {s:"Wood is transparent.", a:"false", why:"Wood is opaque; light cannot pass through it."},
    {s:"A litre is a unit of volume.", a:"true", why:"Litres measure volume of liquids."}
  ],
  classify:{ title:"Sort by property", groups:[
    {name:"Transparent", items:["clear glass","clean water","clear plastic"]},
    {name:"Opaque", items:["wood","stone","metal sheet"]},
    {name:"Measured in litres", items:["palm oil","kerosene","drinking water"]}
  ]},
  diagram:{ title:"Measuring the properties of matter", caption:"Write the instrument and the unit used.", parts:[
    {p:"Mass", f:"Measured with a balance, in grams and kilograms"},
    {p:"Volume of liquid", f:"Measured with a measuring cylinder or cup, in millilitres and litres"},
    {p:"Length", f:"Measured with a ruler or tape, in centimetres and metres"},
    {p:"Temperature", f:"Measured with a thermometer, in degrees Celsius"}
  ]},
  experiment:{
    title:"Mixing the Primary Colours",
    aim:"To find out which colours are made by mixing the primary colours.",
    materials:["Red, blue and yellow paint or dye","Three cups of water","A spoon","White paper"],
    steps:["Make a cup of each primary colour: red, blue and yellow.","Mix a little red with a little yellow on the paper and record the colour formed.","Mix blue with yellow and record the result.","Mix red with blue and record the result.","Write your three results in a table."],
    expect:"Red + yellow = orange; blue + yellow = green; red + blue = purple.",
    why:"Primary colours cannot be made by mixing, but mixing pairs of them produces the secondary colours."
  },
  apply:[
    {q:"A stone and a piece of wood are the same size, but the stone is heavier. What property differs?", a:"Density — the stone has more mass for the same volume."},
    {q:"Why are windows made of glass rather than wood?", a:"Glass is transparent, so it lets light into the room."},
    {q:"A trader sells oil by the litre and rice by the kilogram. Explain why the units differ.", a:"Oil is a liquid measured by volume in litres; rice is a solid measured by mass in kilograms."}
  ],
  activities:["Freeze water and compare the mass of solid and liquid","Measure mass and volume of classroom objects","Colour mixing investigation","Record data in tables"],
  materials:["Balance, measuring cups","Water and plastic bottles","Paints or dyes","Level textbooks"],
  assessment:["Data table and conclusions","Quizzes","Science journal","Test"]
},
{
  grade:3, period:"VI", sem:"Two", icon:"🌤️",
  title:"Investigating Changes in Weather and Climate",
  subtitle:"Weather elements, instruments and climate change",
  outcomes:["Investigate and record changes in weather and describe the climate of Liberia"],
  objectives:["Name the elements of weather","Name the instruments used to measure weather","Record daily weather","Describe the climate of Liberia and changes in it"],
  note:"The <b>elements of weather</b> are temperature, rainfall, wind, humidity, cloud cover and sunshine. Each is measured with its own instrument.",
  focus:["Elements of weather","Weather instruments","Recording weather data","Climate of Liberia","Climate change"],
  terms:[
    {t:"temperature", d:"how hot or cold the air is", x:"Temperature rises at noon."},
    {t:"thermometer", d:"an instrument for measuring temperature", x:"Read the thermometer."},
    {t:"rain gauge", d:"an instrument for measuring rainfall", x:"The rain gauge shows 20 mm."},
    {t:"wind vane", d:"an instrument showing wind direction", x:"The wind vane points north."},
    {t:"anemometer", d:"an instrument measuring wind speed", x:"The anemometer spins fast."},
    {t:"humidity", d:"the amount of water vapour in the air", x:"Humidity is high in the rainy season."},
    {t:"forecast", d:"a statement of what the weather will be", x:"The forecast says rain."},
    {t:"drought", d:"a long period without rain", x:"A drought harms crops."},
    {t:"flood", d:"water covering land that is usually dry", x:"The flood destroyed the farm."},
    {t:"climate change", d:"a long-term change in world climate", x:"Climate change brings stronger storms."},
    {t:"global warming", d:"the warming of the earth's surface", x:"Global warming melts ice."},
    {t:"pollution", d:"harmful substances in the environment", x:"Pollution affects the air."}
  ],
  facts:[
    {q:"Name four elements of weather.", a:"Temperature, rainfall, wind, humidity, cloud cover, sunshine (any four)."},
    {q:"Which instrument measures temperature?", a:"A thermometer."},
    {q:"Which instrument measures rainfall?", a:"A rain gauge."},
    {q:"Which instrument shows wind direction?", a:"A wind vane."},
    {q:"What is a drought?", a:"A long period with little or no rain."},
    {q:"What is global warming?", a:"The gradual warming of the earth's surface."}
  ],
  tf:[
    {s:"A thermometer measures rainfall.", a:"false", why:"A thermometer measures temperature; a rain gauge measures rainfall."},
    {s:"Climate change can cause stronger storms and floods.", a:"true", why:"A warmer world produces more extreme weather."},
    {s:"Weather can change from day to day.", a:"true", why:"Weather is the daily condition of the air."},
    {s:"Cutting down forests helps to reduce global warming.", a:"false", why:"Trees absorb carbon dioxide; cutting them increases warming."},
    {s:"Humidity means the amount of water vapour in the air.", a:"true", why:"That is the definition."}
  ],
  classify:{ title:"Match instrument to what it measures", groups:[
    {name:"Thermometer", items:["temperature","how hot or cold"]},
    {name:"Rain gauge", items:["rainfall","amount of rain in mm"]},
    {name:"Wind vane / anemometer", items:["wind direction","wind speed"]}
  ]},
  diagram:{ title:"Weather instruments", caption:"Write what each instrument measures and its unit.", parts:[
    {p:"Thermometer", f:"Temperature, in degrees Celsius"},
    {p:"Rain gauge", f:"Rainfall, in millimetres"},
    {p:"Wind vane", f:"The direction the wind blows from"},
    {p:"Anemometer", f:"The speed of the wind"},
    {p:"Hygrometer", f:"Humidity — water vapour in the air"}
  ]},
  experiment:{
    title:"One Week of Weather Records",
    aim:"To record and compare the weather over five school days.",
    materials:["A thermometer if available","A home-made rain gauge","A weather chart"],
    steps:["Make a table with columns: day, temperature, rainfall, wind, cloud cover.","At the same time each day, take and write the readings.","Where you have no instrument, describe carefully in words, e.g. 'sunny, light wind'.","Continue for five days without missing a day.","At the end, state which day was hottest and which was wettest."],
    expect:"Readings differ from day to day, showing that weather changes daily.",
    why:"Taking readings at the same time each day makes the comparison fair, which is how weather stations work."
  },
  apply:[
    {q:"Why is it useful for a fisherman to hear the weather forecast?", a:"So he knows if a storm is coming and can stay safe on the water."},
    {q:"Explain one way your community can help reduce global warming.", a:"Plant trees, stop burning bush unnecessarily, and reduce waste burning."},
    {q:"Farmers say the rains now start later than before. Which idea does this describe?", a:"Climate change — a long-term change in the usual weather pattern."}
  ],
  activities:["Keep a class weather chart for one week","Make simple weather instruments","Discuss climate change and Liberia","Graph the weekly temperature"],
  materials:["Home-made rain gauge","Thermometer","Weather chart","Level textbooks"],
  assessment:["Weather record table and graph","Quizzes","Science journal","Test"]
},

/* ================= GRADE 4 ================= */
{
  grade:4, period:"I", sem:"One", icon:"⚡",
  title:"Energy",
  subtitle:"Meaning, properties, types and forms of energy",
  outcomes:["State the properties, types and forms of energy as well as its usefulness"],
  objectives:["State the meaning of energy","Name the types and forms of energy","State the properties of energy","Discuss energy transformation"],
  note:"<b>Energy</b> is the ability to do work. The two types are <b>potential</b> (stored) and <b>kinetic</b> (moving). Energy <b>cannot be created or destroyed</b> — it only changes from one form to another.",
  focus:["Meaning of energy","Properties of energy","Potential and kinetic energy","Forms: mechanical, electrical, light, heat, sound","Energy transformation"],
  terms:[
    {t:"energy", d:"the ability to do work", x:"Food gives the body energy."},
    {t:"potential energy", d:"stored energy waiting to be used", x:"A stone on a hill has potential energy."},
    {t:"kinetic energy", d:"the energy of a moving object", x:"A rolling ball has kinetic energy."},
    {t:"mechanical energy", d:"energy of movement and position", x:"A moving cart has mechanical energy."},
    {t:"electrical energy", d:"energy carried by electricity", x:"Electrical energy lights the bulb."},
    {t:"light energy", d:"energy we can see", x:"The sun gives light energy."},
    {t:"heat energy", d:"energy that makes things warm", x:"Fire gives heat energy."},
    {t:"sound energy", d:"energy we can hear", x:"A drum makes sound energy."},
    {t:"transformation", d:"the change of energy from one form to another", x:"A bulb changes electrical to light energy."},
    {t:"source", d:"where something comes from", x:"The sun is a source of energy."},
    {t:"renewable", d:"able to be replaced naturally", x:"Solar energy is renewable."},
    {t:"conserve", d:"to use carefully without waste", x:"Conserve electricity by switching off lights."}
  ],
  facts:[
    {q:"What is energy?", a:"The ability to do work."},
    {q:"Name the two types of energy.", a:"Potential energy and kinetic energy."},
    {q:"Name five forms of energy.", a:"Mechanical, electrical, light, heat and sound."},
    {q:"What is potential energy?", a:"Stored energy that is not yet being used."},
    {q:"State the main property of energy regarding creation.", a:"Energy cannot be created or destroyed; it only changes form."},
    {q:"Name the greatest natural source of energy for the earth.", a:"The sun."}
  ],
  tf:[
    {s:"Energy can be created from nothing.", a:"false", why:"Energy can only change form, not be created."},
    {s:"A stone held high has potential energy.", a:"true", why:"It has stored energy due to its position."},
    {s:"A moving car has kinetic energy.", a:"true", why:"Kinetic energy is the energy of motion."},
    {s:"The sun is our main source of energy.", a:"true", why:"Nearly all energy on earth comes from the sun."},
    {s:"Sound is not a form of energy.", a:"false", why:"Sound is a form of energy that we hear."}
  ],
  classify:{ title:"Potential or kinetic?", groups:[
    {name:"Potential (stored)", items:["a stretched catapult","water behind a dam","a stone on a roof","food in the body"]},
    {name:"Kinetic (moving)", items:["a running boy","a rolling ball","flowing water","blowing wind"]}
  ]},
  diagram:{ title:"Energy transformations", caption:"Write the change of form in each case.", parts:[
    {p:"Electric bulb", f:"Electrical energy → light energy (and some heat)"},
    {p:"Radio", f:"Electrical energy → sound energy"},
    {p:"Burning firewood", f:"Chemical energy → heat and light energy"},
    {p:"Solar panel", f:"Light energy → electrical energy"},
    {p:"A boy running", f:"Chemical energy from food → mechanical (kinetic) energy"}
  ]},
  experiment:{
    title:"Potential Becomes Kinetic",
    aim:"To show stored energy changing into energy of movement.",
    materials:["A rubber band or catapult","A small paper ball","A measuring tape"],
    steps:["Place the paper ball in the rubber band without stretching it, and release. Measure how far it goes.","Now stretch the band a small amount, release, and measure the distance.","Stretch it further, release, and measure again.","Record the three distances in a table.","State the relationship between the stretch and the distance travelled."],
    expect:"The further the band is stretched, the further the ball travels.",
    why:"Stretching stores potential energy. On release it becomes kinetic energy — more stored energy gives more movement."
  },
  apply:[
    {q:"Name the energy change that happens in a torch.", a:"Chemical energy in the battery → electrical energy → light energy."},
    {q:"Why does food give us energy?", a:"Food stores chemical energy which the body changes into movement and heat."},
    {q:"Give two ways your school can conserve energy.", a:"Switch off lights and fans when not in use; use daylight instead of bulbs."}
  ],
  activities:["Group work listing types of energy","Pairs read and make key word lists","Identify energy transformations in the home","Class energy chart"],
  materials:["Rubber bands, paper","Torch, radio","Energy charts","Level textbooks"],
  assessment:["Quizzes","Science journal","Class and homework","Test"]
},
{
  grade:4, period:"II", sem:"One", icon:"🧲",
  title:"Force and Its Kinds",
  subtitle:"Contact and non-contact forces, friction, gravity and magnetism",
  outcomes:["Identify the kinds of force and describe their effects on objects"],
  objectives:["Define force and state its unit","Name the kinds of force","Distinguish between contact and non-contact forces","Describe the effects of force on objects"],
  note:"A <b>contact force</b> acts only when objects touch (friction, muscular force). A <b>non-contact force</b> acts at a distance (gravity, magnetism). Force is measured in <b>newtons (N)</b>.",
  focus:["Definition and unit of force","Contact and non-contact forces","Friction","Gravity","Magnetism","Effects of force"],
  terms:[
    {t:"force", d:"a push or a pull on an object", x:"A force can change motion."},
    {t:"newton", d:"the unit for measuring force", x:"Force is measured in newtons."},
    {t:"contact force", d:"a force acting only on touching", x:"Friction is a contact force."},
    {t:"non-contact force", d:"a force acting at a distance", x:"Gravity is a non-contact force."},
    {t:"friction", d:"a force opposing movement between surfaces", x:"Friction slows the sliding box."},
    {t:"gravity", d:"the force pulling objects towards the earth", x:"Gravity gives objects weight."},
    {t:"magnetism", d:"the force of a magnet attracting iron", x:"Magnetism attracts the nail."},
    {t:"magnet", d:"an object that attracts iron and steel", x:"The magnet picked up the pin."},
    {t:"attract", d:"to pull towards", x:"Unlike poles attract."},
    {t:"repel", d:"to push away", x:"Like poles repel."},
    {t:"weight", d:"the pull of gravity on an object", x:"Weight is measured in newtons."},
    {t:"spring balance", d:"an instrument for measuring force", x:"Use a spring balance to measure pull."}
  ],
  facts:[
    {q:"What is the unit of force?", a:"The newton (N)."},
    {q:"Give two examples of contact forces.", a:"Friction and muscular force (also air resistance)."},
    {q:"Give two examples of non-contact forces.", a:"Gravity and magnetism."},
    {q:"What does a magnet attract?", a:"Iron and steel objects."},
    {q:"State what happens when two like poles of magnets meet.", a:"They repel each other."},
    {q:"Name three effects of force on an object.", a:"It can start motion, stop motion, change direction, or change shape."}
  ],
  tf:[
    {s:"Gravity is a contact force.", a:"false", why:"Gravity acts at a distance, so it is non-contact."},
    {s:"Force is measured in newtons.", a:"true", why:"The newton is the SI unit of force."},
    {s:"Like poles of a magnet attract each other.", a:"false", why:"Like poles repel; unlike poles attract."},
    {s:"Friction produces heat.", a:"true", why:"Rubbing surfaces together generates heat."},
    {s:"A magnet attracts all metals.", a:"false", why:"It attracts iron and steel, not copper or aluminium."}
  ],
  classify:{ title:"Contact or non-contact force?", groups:[
    {name:"Contact forces", items:["friction","pushing a cart","kicking a ball","air resistance"]},
    {name:"Non-contact forces", items:["gravity","magnetism","static electricity"]},
    {name:"Attracted by a magnet", items:["iron nail","steel pin","paper clip"]}
  ]},
  diagram:{ title:"Effects of force on an object", caption:"Give one everyday example of each effect.", parts:[
    {p:"Starts motion", f:"Kicking a ball that was still"},
    {p:"Stops motion", f:"Catching a moving ball"},
    {p:"Changes direction", f:"Heading a football to the side"},
    {p:"Changes speed", f:"Pedalling harder to go faster"},
    {p:"Changes shape", f:"Squeezing a lump of clay"}
  ]},
  experiment:{
    title:"Testing Friction on Different Surfaces",
    aim:"To find out which surface produces the most friction.",
    materials:["A wooden block or tin","A rubber band or spring balance","Surfaces: smooth table, cloth, sandpaper or rough ground"],
    steps:["Attach the rubber band to the block.","Pull the block slowly along the smooth table and note the stretch of the band.","Repeat on the cloth surface, pulling in the same steady way.","Repeat on the rough surface.","Record the stretch for each surface and state which had the most friction."],
    expect:"The rough surface needs the greatest pull, showing it has the most friction.",
    why:"Rough surfaces grip more, so more force is needed to overcome friction."
  },
  apply:[
    {q:"Why do car tyres have grooves cut into them?", a:"To increase friction so the tyres grip the road and do not skid."},
    {q:"Why is oil put on a bicycle chain?", a:"To reduce friction so the parts move easily and wear less."},
    {q:"An object weighs less on the moon than on earth. Explain why.", a:"The moon's gravity is weaker, so it pulls the object with less force."}
  ],
  activities:["Friction investigation on different surfaces","Magnet testing of classroom materials","Demonstrate effects of force with clay and balls","Spring balance measurements"],
  materials:["Magnets, nails, pins","Rubber bands or spring balance","Blocks and varied surfaces","Level textbooks"],
  assessment:["Investigation report","Quizzes","Science journal","Test"]
},
{
  grade:4, period:"III", sem:"One", icon:"📏",
  title:"Measurement of Physical Properties of Matter",
  subtitle:"Metric units, instruments and reading measurements",
  outcomes:["Read units of measurement in the metric system"],
  objectives:["Name the tools for measuring some physical properties","Demonstrate how to measure some physical properties","Assign units to properties measured","Differentiate between the metric and imperial systems"],
  note:"The <b>metric system</b> uses metres, grams and litres and counts in tens. The <b>imperial system</b> uses feet, pounds and gallons. Scientists everywhere use the metric system.",
  focus:["Metric and imperial systems","Measuring length, mass, volume, temperature and time","Instruments and units","Recording measurements"],
  terms:[
    {t:"measurement", d:"finding the size or amount of something", x:"Take an accurate measurement."},
    {t:"metric system", d:"the system using metres, grams and litres", x:"Science uses the metric system."},
    {t:"imperial system", d:"the system using feet, pounds and gallons", x:"Some markets use the imperial system."},
    {t:"metre", d:"the basic unit of length", x:"The room is four metres long."},
    {t:"centimetre", d:"one hundredth of a metre", x:"The pencil is 15 centimetres."},
    {t:"kilogram", d:"the basic unit of mass", x:"The bag is 5 kilograms."},
    {t:"litre", d:"the basic unit of volume for liquids", x:"Buy two litres of oil."},
    {t:"measuring cylinder", d:"a tall marked container for measuring liquid volume", x:"Read the cylinder at eye level."},
    {t:"metre rule", d:"a long ruler one metre in length", x:"Measure the table with a metre rule."},
    {t:"stopwatch", d:"an instrument for measuring time", x:"Time the race with a stopwatch."},
    {t:"degree Celsius", d:"the unit of temperature", x:"Water boils at 100 degrees Celsius."},
    {t:"accurate", d:"correct and exact", x:"Take an accurate reading."}
  ],
  facts:[
    {q:"What is the basic metric unit of length?", a:"The metre."},
    {q:"How many centimetres make one metre?", a:"One hundred."},
    {q:"What instrument measures the volume of a liquid accurately?", a:"A measuring cylinder."},
    {q:"In what unit is temperature measured?", a:"Degrees Celsius."},
    {q:"What instrument is used to measure time?", a:"A stopwatch or clock."},
    {q:"Give one difference between the metric and imperial systems.", a:"Metric uses metres, grams and litres and counts in tens; imperial uses feet, pounds and gallons."}
  ],
  tf:[
    {s:"There are 1000 grams in one kilogram.", a:"true", why:"Kilo means one thousand."},
    {s:"A measuring cylinder measures mass.", a:"false", why:"It measures the volume of liquids."},
    {s:"Scientists all over the world use the metric system.", a:"true", why:"It is the standard scientific system."},
    {s:"Temperature is measured in litres.", a:"false", why:"Temperature is measured in degrees Celsius."},
    {s:"You should read a measuring cylinder at eye level.", a:"true", why:"Reading at eye level avoids error."}
  ],
  classify:{ title:"Match property to unit", groups:[
    {name:"Length", items:["metre","centimetre","kilometre"]},
    {name:"Mass", items:["gram","kilogram"]},
    {name:"Volume", items:["millilitre","litre"]}
  ]},
  diagram:{ title:"Instruments and their units", caption:"Write the property measured and the unit.", parts:[
    {p:"Metre rule / tape", f:"Length — metres and centimetres"},
    {p:"Balance", f:"Mass — grams and kilograms"},
    {p:"Measuring cylinder", f:"Volume — millilitres and litres"},
    {p:"Thermometer", f:"Temperature — degrees Celsius"},
    {p:"Stopwatch", f:"Time — seconds and minutes"}
  ]},
  experiment:{
    title:"Measure Your Classroom",
    aim:"To practise accurate measurement using metric units.",
    materials:["A metre rule or tape measure","A balance","A measuring cylinder","A stopwatch"],
    steps:["Measure the length and width of your desk in centimetres and record them.","Measure the mass of your textbook in grams.","Measure 100 ml of water into a cylinder, reading at eye level.","Time how long it takes a partner to walk across the room.","Write all your results in a table with the correct units beside each."],
    expect:"A completed table of measurements, each with the correct unit.",
    why:"Every measurement must have a number AND a unit; without the unit the number has no meaning."
  },
  apply:[
    {q:"A pupil writes that his desk is '80'. Why is this answer incomplete?", a:"He has not given the unit — it should be 80 centimetres."},
    {q:"Why should a measuring cylinder be read at eye level?", a:"To avoid a false reading caused by looking from above or below."},
    {q:"Which unit would you use to measure the distance from Monrovia to Kakata?", a:"Kilometres."}
  ],
  activities:["Measure objects around the school","Convert between metric units","Compare metric and imperial measures in the market","Record data tables"],
  materials:["Metre rules, tape measures","Balance, measuring cylinders","Stopwatch, thermometer","Level textbooks"],
  assessment:["Measurement table","Practical test","Quizzes","Science journal"]
},
{
  grade:4, period:"IV", sem:"Two", icon:"🛰️",
  title:"The Satellites and the Stars",
  subtitle:"Natural and artificial satellites, stars and galaxies",
  outcomes:["Express appreciation for scientific advancement, particularly artificial satellites"],
  objectives:["Explain what satellites are","Name some artificial and natural satellites","Demonstrate the movement of satellites","Investigate how nearly all spacecraft are man-made satellites","Attempt a model of 'My Satellite of the Future'"],
  note:"A <b>satellite</b> is any body that moves round a larger body. The <b>moon</b> is earth's <b>natural satellite</b>. Machines we send up, like communication satellites, are <b>artificial satellites</b>.",
  focus:["Earth's orbit","Natural and artificial satellites","Uses of satellites","Stars and galaxies","Giant stars"],
  terms:[
    {t:"satellite", d:"a body that moves round a larger body", x:"The moon is a satellite."},
    {t:"natural satellite", d:"a satellite not made by people", x:"The moon is a natural satellite."},
    {t:"artificial satellite", d:"a machine placed in orbit by people", x:"A weather satellite is artificial."},
    {t:"orbit", d:"the path of one body round another", x:"The satellite is in orbit."},
    {t:"spacecraft", d:"a vehicle that travels in space", x:"Apollo was a spacecraft."},
    {t:"star", d:"a huge ball of burning gas", x:"The sun is a star."},
    {t:"galaxy", d:"a very large group of stars", x:"The Milky Way is our galaxy."},
    {t:"constellation", d:"a pattern of stars in the sky", x:"Orion is a constellation."},
    {t:"telescope", d:"an instrument for viewing distant objects", x:"A telescope shows distant stars."},
    {t:"launch", d:"to send up into space", x:"They will launch the rocket."},
    {t:"communication", d:"sending messages over a distance", x:"Satellites help communication."},
    {t:"giant star", d:"a star much larger than the sun", x:"Some giant stars are red."}
  ],
  facts:[
    {q:"What is a satellite?", a:"A body that moves in orbit round a larger body."},
    {q:"Name the natural satellite of the earth.", a:"The moon."},
    {q:"Give two uses of artificial satellites.", a:"Communication (phone and television) and weather forecasting."},
    {q:"Name two spacecraft mentioned in your curriculum.", a:"Apollo, Gemini and Skylab (any two)."},
    {q:"What is a galaxy?", a:"A very large group of stars."},
    {q:"What is the name of our galaxy?", a:"The Milky Way."}
  ],
  tf:[
    {s:"The moon is an artificial satellite.", a:"false", why:"The moon is natural; it was not made by people."},
    {s:"Satellites help us make telephone calls over long distances.", a:"true", why:"Communication satellites relay signals."},
    {s:"The sun is a star.", a:"true", why:"The sun is the star nearest to earth."},
    {s:"All stars are the same size.", a:"false", why:"Some are giant stars far larger than the sun."},
    {s:"A satellite stays in orbit because of gravity.", a:"true", why:"Gravity keeps it moving round the earth."}
  ],
  classify:{ title:"Natural or artificial?", groups:[
    {name:"Natural satellites", items:["the moon","moons of Jupiter"]},
    {name:"Artificial satellites", items:["weather satellite","communication satellite","Skylab"]},
    {name:"Uses of satellites", items:["television signals","weather forecasting","navigation and maps"]}
  ]},
  diagram:{ title:"Satellites and space bodies", caption:"Write what each one is.", parts:[
    {p:"Natural satellite", f:"A body such as the moon that orbits a planet naturally"},
    {p:"Artificial satellite", f:"A machine launched by people to orbit the earth"},
    {p:"Star", f:"A huge ball of burning gas that gives out light and heat"},
    {p:"Galaxy", f:"A very large group of millions of stars"},
    {p:"Constellation", f:"A pattern formed by a group of stars in the sky"}
  ]},
  experiment:{
    title:"Model a Satellite in Orbit",
    aim:"To show how a satellite stays in orbit round the earth.",
    materials:["A small ball or stone tied firmly to a string","An open outdoor space"],
    steps:["Hold the free end of the string and let the ball hang — this is a satellite pulled by gravity.","Swing the ball round in a circle above your head at a steady speed. Keep well away from others.","Note that the string pulls the ball inwards while the ball keeps moving forward.","Swing faster and then slower, and describe what happens to the circle.","Let go carefully in a safe direction and observe the path the ball takes."],
    expect:"The ball circles while the string pulls it inwards; when released it flies off in a straight line.",
    why:"The string acts like gravity. A satellite keeps moving forward while gravity pulls it inwards, so it travels in a curved orbit."
  },
  apply:[
    {q:"How do satellites help during the rainy season in Liberia?", a:"They photograph clouds and storms so forecasters can warn people of heavy rain."},
    {q:"Why do we see the same face of the moon all the time?", a:"Because the moon turns once as it goes once round the earth, so the same side always faces us."},
    {q:"Design one useful job for 'My Satellite of the Future'.", a:"Any sensible answer, e.g. watching forest fires or mapping flooded farmland."}
  ],
  activities:["Small groups build 'My Satellite of the Future' model","Ball-and-string orbit demonstration","Research uses of satellites","Star and constellation observation homework"],
  materials:["String, balls","Card and boxes for models","Solar system and star charts","Level textbooks"],
  assessment:["Satellite model and presentation","Quizzes","Science journal","Test"]
},
{
  grade:4, period:"V", sem:"Two", icon:"🩹",
  title:"Skin Profile and Soil Profile; Malaria",
  subtitle:"Layers of the skin, layers of the soil and preventing malaria",
  outcomes:["Appreciate the organisation of the skin and compare it to that of soil","Identify the benefits of keeping the environment clean to prevent malaria"],
  objectives:["Describe the layers of the human skin","Describe the layers of the soil","Visualise the ways the skin profile and soil profile are similar","Describe how malaria gets to us through the skin","Make a personal plan to prevent malaria infection"],
  note:"Both the skin and the soil are arranged in <b>layers</b> called a <b>profile</b>. Malaria is caused by a parasite carried by the <b>female anopheles mosquito</b>, which pierces the skin to feed on blood.",
  focus:["Layers of the skin","Layers of the soil","Comparing skin and soil profiles","Malaria transmission","Malaria prevention"],
  terms:[
    {t:"profile", d:"the arrangement of layers seen from the side", x:"Draw the soil profile."},
    {t:"epidermis", d:"the outer layer of the skin", x:"The epidermis protects the body."},
    {t:"dermis", d:"the middle layer of the skin", x:"The dermis holds nerves and glands."},
    {t:"topsoil", d:"the dark upper layer of soil rich in humus", x:"Crops grow in the topsoil."},
    {t:"subsoil", d:"the layer below the topsoil", x:"The subsoil has fewer nutrients."},
    {t:"bedrock", d:"the solid rock beneath the soil", x:"Bedrock lies under the subsoil."},
    {t:"humus", d:"decayed plant and animal matter in soil", x:"Humus makes soil fertile."},
    {t:"malaria", d:"a disease spread by the mosquito", x:"Malaria causes fever and chills."},
    {t:"mosquito", d:"the insect that spreads malaria", x:"The mosquito bites at night."},
    {t:"parasite", d:"a living thing that lives on another and harms it", x:"The malaria parasite lives in blood."},
    {t:"insecticide", d:"a chemical that kills insects", x:"Nets are treated with insecticide."},
    {t:"prevention", d:"stopping something before it happens", x:"Prevention is better than cure."}
  ],
  facts:[
    {q:"Name the two main layers of the human skin.", a:"The epidermis (outer) and the dermis (inner)."},
    {q:"Name the three layers of a soil profile.", a:"Topsoil, subsoil and bedrock."},
    {q:"Which soil layer is best for growing crops? Why?", a:"The topsoil, because it contains humus and nutrients."},
    {q:"What insect spreads malaria?", a:"The female anopheles mosquito."},
    {q:"State three ways to prevent malaria.", a:"Sleep under a treated net, clear stagnant water, and cover the body in the evening."},
    {q:"Give one way the skin profile and soil profile are similar.", a:"Both are arranged in layers, with a protective or rich layer on top."}
  ],
  tf:[
    {s:"The epidermis is the inner layer of the skin.", a:"false", why:"The epidermis is the outer layer."},
    {s:"Topsoil contains humus.", a:"true", why:"Humus is decayed matter found in topsoil."},
    {s:"Malaria is spread by drinking dirty water.", a:"false", why:"Malaria is spread by the bite of an infected mosquito."},
    {s:"Sleeping under a treated mosquito net helps prevent malaria.", a:"true", why:"The net stops mosquitoes from biting at night."},
    {s:"Mosquitoes breed in stagnant water.", a:"true", why:"Still water is where mosquito larvae develop."}
  ],
  classify:{ title:"Sort these correctly", groups:[
    {name:"Skin layers", items:["epidermis","dermis"]},
    {name:"Soil layers", items:["topsoil","subsoil","bedrock"]},
    {name:"Malaria prevention", items:["treated net","clear stagnant water","cover arms in the evening","cut tall grass"]}
  ]},
  diagram:{ title:"Comparing skin profile and soil profile", caption:"Write the job of each layer.", parts:[
    {p:"Epidermis (skin)", f:"Outer protective layer against germs and injury"},
    {p:"Dermis (skin)", f:"Inner layer holding nerves, blood vessels and sweat glands"},
    {p:"Topsoil", f:"Dark upper layer rich in humus where roots grow"},
    {p:"Subsoil", f:"Lighter layer below with less humus and more clay"},
    {p:"Bedrock", f:"Solid rock at the base of the profile"}
  ]},
  experiment:{
    title:"Making a Soil Profile in a Jar",
    aim:"To separate soil into its layers and observe the profile.",
    materials:["A clear jar with a lid","Garden soil","Water"],
    steps:["Fill the jar one third with soil taken from the garden.","Add water until the jar is nearly full.","Close the lid tightly and shake hard for one minute.","Place the jar on a table and do not touch it for one day.","Draw and label the layers you can see the next morning."],
    expect:"The soil settles into bands: heavy sand at the bottom, then silt, then clay, with humus floating on top.",
    why:"Heavier particles sink first. This separation shows what soil is made of and mirrors the layering of a real soil profile."
  },
  apply:[
    {q:"Why do health workers ask families to empty containers of standing water?", a:"Because mosquitoes lay eggs in stagnant water, and removing it stops them breeding."},
    {q:"Explain how malaria enters the body through the skin.", a:"An infected mosquito pierces the skin to feed and passes the parasite into the blood."},
    {q:"Write two actions in your personal malaria prevention plan.", a:"Any two sensible actions, e.g. sleep under a treated net every night; clear bush and water around the house."}
  ],
  activities:["Make a soil profile jar","Draw and label the skin profile","Compare the two profiles in a table","Malaria prevention campaign poster"],
  materials:["Jars, soil, water","Skin and soil profile charts","Mosquito net for demonstration","Level textbooks"],
  assessment:["Labelled profile diagrams","Malaria prevention plan","Quizzes","Test"]
},
{
  grade:4, period:"VI", sem:"Two", icon:"🧴",
  title:"Health and Personal Hygiene",
  subtitle:"Puberty, body changes and personal safety",
  outcomes:["Explain the importance of changes that occur during puberty","Recognise inappropriate touching and act to protect oneself"],
  objectives:["Describe body changes during puberty","Explain ways of preventing pregnancy","Discuss sexual abuse and how to avoid it","Practise good personal hygiene"],
  note:"<b>Puberty</b> is the time when a child's body changes into an adult body. These changes are <b>normal and healthy</b>. Every person has the right to say <b>no</b> to any touch that makes them uncomfortable.",
  focus:["Body changes at puberty","Physical, mental and social changes","Personal hygiene during puberty","Good and bad touches","Personal safety and reporting"],
  terms:[
    {t:"puberty", d:"the time when a child's body becomes adult", x:"Puberty begins at about 10 to 14 years."},
    {t:"adolescence", d:"the stage between childhood and adulthood", x:"Adolescence brings many changes."},
    {t:"hormone", d:"a body chemical that causes changes", x:"Hormones cause puberty changes."},
    {t:"physical change", d:"a change in the body's appearance", x:"Growing taller is a physical change."},
    {t:"emotional change", d:"a change in feelings", x:"Mood swings are an emotional change."},
    {t:"hygiene", d:"keeping the body clean", x:"Hygiene is important during puberty."},
    {t:"good touch", d:"a safe and welcome touch", x:"A handshake is a good touch."},
    {t:"bad touch", d:"an unwanted touch, especially of private parts", x:"Report any bad touch."},
    {t:"consent", d:"giving permission freely", x:"No one may touch you without consent."},
    {t:"abstinence", d:"choosing not to have sexual relations", x:"Abstinence prevents pregnancy."},
    {t:"trusted adult", d:"a grown-up you can safely tell", x:"Tell a trusted adult at once."},
    {t:"self-respect", d:"valuing and protecting yourself", x:"Self-respect helps you say no."}
  ],
  facts:[
    {q:"What is puberty?", a:"The time when a child's body changes into an adult body."},
    {q:"Name two physical changes at puberty.", a:"Growing taller, growth of body hair, voice deepening in boys, breast development in girls (any two)."},
    {q:"Why is bathing more important during puberty?", a:"Because the body sweats more and body odour develops."},
    {q:"What is the difference between a good touch and a bad touch?", a:"A good touch is safe and welcome; a bad touch is unwanted, especially of private parts."},
    {q:"What should you do about a bad touch?", a:"Say no firmly, get away and tell a trusted adult immediately."},
    {q:"Name the surest way for a school pupil to avoid pregnancy.", a:"Abstinence — not engaging in sexual activity."}
  ],
  tf:[
    {s:"The changes of puberty are normal and healthy.", a:"true", why:"Every person passes through puberty."},
    {s:"Everyone begins puberty at exactly the same age.", a:"false", why:"It begins at different ages for different people."},
    {s:"You should keep a bad touch a secret.", a:"false", why:"You must always tell a trusted adult."},
    {s:"Good hygiene is more important during puberty.", a:"true", why:"The body sweats more and needs more care."},
    {s:"Only girls experience changes at puberty.", a:"false", why:"Both boys and girls experience puberty changes."}
  ],
  classify:{ title:"Sort these changes and actions", groups:[
    {name:"Physical changes", items:["growing taller","voice deepens","body hair grows"]},
    {name:"Emotional and social changes", items:["mood changes","new interests","wanting more privacy"]},
    {name:"Safe actions", items:["say no firmly","move away","tell a trusted adult"]}
  ]},
  diagram:{ title:"Personal hygiene during puberty", caption:"Write why each habit matters.", parts:[
    {p:"Bath daily with soap", f:"Removes sweat and body odour"},
    {p:"Wear clean clothes", f:"Prevents skin infection and smell"},
    {p:"Wash hands often", f:"Stops the spread of germs and disease"},
    {p:"Care for teeth", f:"Prevents decay and bad breath"},
    {p:"Girls: manage menstruation hygienically", f:"Use clean materials, change regularly, wash hands"}
  ]},
  experiment:{
    title:"Growth Record Chart (Observation Study)",
    aim:"To observe and record the physical growth that happens over time.",
    materials:["A tape measure or marked wall","A notebook"],
    steps:["Working in same-sex pairs, measure each other's height in centimetres.","Record the date and the height in your notebook.","Repeat the measurement on the same day each month for three months.","Calculate how many centimetres you grew in the period.","Draw a simple bar graph of your heights and describe the trend."],
    expect:"Most learners show measurable growth over the three months.",
    why:"Rapid growth is one of the physical changes of puberty; recording it shows the change is real and normal."
  },
  apply:[
    {q:"A classmate is worried because he is shorter than his friends. What can you tell him?", a:"That people grow at different rates and puberty begins at different ages; it is normal."},
    {q:"An older person asks a pupil to keep a touch secret. Why is this a warning sign?", a:"Because a trusted person would not ask a child to keep such a secret; the pupil should tell a trusted adult."},
    {q:"Why does a pupil need more soap and clean clothing during puberty?", a:"Because the body produces more sweat and oil, so more washing is needed."}
  ],
  activities:["Discussion in same-sex groups with the teacher","Role play on refusing and reporting bad touches","Personal hygiene checklist","Talk from a school health worker"],
  materials:["Posters on puberty","Hygiene materials","Level textbooks","Health worker guidance"],
  assessment:["Hygiene checklist","Role play","Quizzes","Written test"]
},

/* ================= GRADE 5 ================= */
{
  grade:5, period:"I", sem:"One", icon:"🔧",
  title:"Simple Machines and Work",
  subtitle:"The six simple machines and how they make work easier",
  outcomes:["Recognise the importance of using machines to do work","Recognise that energy exists in different forms"],
  objectives:["State the meaning of machine","Name the six kinds of simple machines","Explain how each machine makes work easier","Calculate simple work done"],
  note:"<b>Work = force × distance</b>. A machine does not reduce the total work — it lets you use a <b>smaller force over a longer distance</b>, which makes the job easier.",
  focus:["Meaning of machine","The six simple machines","Effort and load","Work done","Uses in daily life"],
  terms:[
    {t:"machine", d:"a device that makes work easier", x:"A pulley is a machine."},
    {t:"simple machine", d:"a basic machine with few or no moving parts", x:"A lever is a simple machine."},
    {t:"effort", d:"the force you apply to a machine", x:"Less effort is needed with a ramp."},
    {t:"load", d:"the object being moved", x:"The load is the heavy box."},
    {t:"fulcrum", d:"the point on which a lever turns", x:"The fulcrum is in the middle of a see-saw."},
    {t:"lever", d:"a rigid bar turning on a fulcrum", x:"A crowbar is a lever."},
    {t:"pulley", d:"a grooved wheel with a rope", x:"A pulley lifts water from a well."},
    {t:"wheel and axle", d:"a wheel fixed to a rod", x:"A door knob is a wheel and axle."},
    {t:"inclined plane", d:"a sloping surface", x:"A ramp is an inclined plane."},
    {t:"wedge", d:"two inclined planes joined", x:"An axe head is a wedge."},
    {t:"screw", d:"an inclined plane wrapped round a cylinder", x:"A screw fastens wood."},
    {t:"work", d:"force multiplied by distance moved", x:"Work is measured in joules."}
  ],
  facts:[
    {q:"What is a machine?", a:"A device that makes work easier."},
    {q:"Name the six simple machines.", a:"Lever, pulley, wheel and axle, inclined plane, wedge and screw."},
    {q:"What is the formula for work?", a:"Work = force × distance."},
    {q:"What is the fulcrum of a lever?", a:"The fixed point on which the lever turns."},
    {q:"Calculate the work done when a force of 10 N moves a box 3 m.", a:"30 joules (10 × 3)."},
    {q:"Give one example of a wedge used at home.", a:"A knife, an axe or a nail."}
  ],
  tf:[
    {s:"A machine reduces the total work that must be done.", a:"false", why:"It reduces the force needed, not the total work."},
    {s:"A see-saw is an example of a lever.", a:"true", why:"It is a bar turning on a fulcrum."},
    {s:"Work is done when a force moves an object.", a:"true", why:"That is the definition of work."},
    {s:"A screw is a form of inclined plane.", a:"true", why:"It is an inclined plane wrapped round a cylinder."},
    {s:"Work is measured in newtons.", a:"false", why:"Force is in newtons; work is in joules."}
  ],
  classify:{ title:"Name the simple machine", groups:[
    {name:"Lever", items:["see-saw","crowbar","scissors","wheelbarrow"]},
    {name:"Inclined plane family", items:["ramp","axe","knife","screw"]},
    {name:"Wheel family", items:["pulley","door knob","car wheel","steering wheel"]}
  ]},
  diagram:{ title:"How each simple machine helps", caption:"Write how each makes work easier.", parts:[
    {p:"Lever", f:"Multiplies force so a small effort moves a large load"},
    {p:"Pulley", f:"Changes the direction of the force; pulling down lifts a load up"},
    {p:"Wheel and axle", f:"Reduces friction so loads roll instead of drag"},
    {p:"Inclined plane", f:"A smaller force over a longer distance raises a load"},
    {p:"Wedge", f:"Turns a downward force into a sideways splitting force"},
    {p:"Screw", f:"Turns rotation into strong straight-line movement to fasten or raise"}
  ]},
  experiment:{
    title:"The Lever and the Fulcrum",
    aim:"To find out how the position of the fulcrum affects the effort needed.",
    materials:["A ruler or flat stick","A pencil or round stick as fulcrum","A small heavy object as the load","Coins or bottle tops as effort weights"],
    steps:["Place the pencil under the ruler to act as the fulcrum.","Put the load on one end of the ruler.","Place the fulcrum near the middle and add coins to the other end until the load lifts. Record how many coins.","Move the fulcrum closer to the load and repeat, recording the coins needed.","Move the fulcrum far from the load and repeat. Compare all three results."],
    expect:"Fewer coins are needed when the fulcrum is close to the load.",
    why:"Moving the fulcrum nearer the load increases the mechanical advantage, so a smaller effort lifts the same load."
  },
  apply:[
    {q:"Why is a wheelbarrow easier to use than carrying bricks by hand?", a:"It is a lever with a wheel, so a smaller effort moves a heavy load and the wheel reduces friction."},
    {q:"Calculate the work done lifting a 20 N bucket a height of 4 m.", a:"80 joules (20 × 4)."},
    {q:"Name two simple machines used in your home and state their jobs.", a:"Any correct examples, e.g. a knife (wedge) for cutting; a door knob (wheel and axle) for opening."}
  ],
  activities:["Identify simple machines in the school and community","Lever and fulcrum investigation","Calculate work in simple problems","Build a model machine"],
  materials:["Rulers, pencils, coins","Pulleys and rope","Simple machine charts","Level textbooks"],
  assessment:["Investigation report","Calculation exercise","Quizzes","Test"]
},
{
  grade:5, period:"II", sem:"One", icon:"🔊",
  title:"Sound and Light Energy",
  subtitle:"How sound is produced and travels; sources and behaviour of light",
  outcomes:["Show interest in making use of science ideas and technology"],
  objectives:["State the meaning and properties of energy","Describe how sound energy is produced","List instruments that produce sound","Explain how sound is used in communication","Demonstrate how sound travels","Identify sources of light and describe its characteristics"],
  note:"<b>Sound</b> is produced by <b>vibration</b> and needs a material (solid, liquid or gas) to travel through — it cannot travel through a vacuum. <b>Light</b> travels in <b>straight lines</b> and much faster than sound.",
  focus:["Sound production and vibration","Properties of sound","Instruments producing sound","Sound in communication","Sources and characteristics of light"],
  terms:[
    {t:"vibration", d:"rapid to-and-fro movement", x:"Vibration produces sound."},
    {t:"pitch", d:"how high or low a sound is", x:"A small drum has a higher pitch."},
    {t:"volume", d:"how loud or soft a sound is", x:"Turn down the volume."},
    {t:"echo", d:"a sound reflected back", x:"We heard an echo in the valley."},
    {t:"medium", d:"the material sound travels through", x:"Air is a medium for sound."},
    {t:"vacuum", d:"a space with no matter at all", x:"Sound cannot travel in a vacuum."},
    {t:"luminous", d:"giving out its own light", x:"The sun is luminous."},
    {t:"non-luminous", d:"not giving out its own light", x:"The moon is non-luminous."},
    {t:"reflection", d:"light bouncing off a surface", x:"A mirror causes reflection."},
    {t:"transparent", d:"letting light pass through clearly", x:"Glass is transparent."},
    {t:"translucent", d:"letting some light through", x:"Thin paper is translucent."},
    {t:"shadow", d:"a dark area where light is blocked", x:"The tree casts a shadow."}
  ],
  facts:[
    {q:"How is sound produced?", a:"By the vibration of an object."},
    {q:"Can sound travel through a vacuum? Why?", a:"No, because sound needs a material medium to travel through."},
    {q:"What is an echo?", a:"A sound that is reflected back to the listener."},
    {q:"Name two luminous objects.", a:"The sun and a burning candle (also a lit bulb)."},
    {q:"In what kind of line does light travel?", a:"In straight lines."},
    {q:"Why do we see lightning before we hear thunder?", a:"Because light travels much faster than sound."}
  ],
  tf:[
    {s:"Sound travels faster than light.", a:"false", why:"Light travels far faster than sound."},
    {s:"Sound is produced by vibration.", a:"true", why:"Vibrating objects create sound waves."},
    {s:"The moon is a luminous body.", a:"false", why:"The moon reflects sunlight; it does not make its own light."},
    {s:"Light travels in straight lines.", a:"true", why:"This is why shadows form."},
    {s:"A shadow forms when an opaque object blocks light.", a:"true", why:"Light cannot pass through the object."}
  ],
  classify:{ title:"Sort these", groups:[
    {name:"Luminous (own light)", items:["sun","candle flame","electric bulb","firefly"]},
    {name:"Non-luminous", items:["moon","mirror","table","the earth"]},
    {name:"Instruments producing sound", items:["drum","guitar","whistle","bell"]}
  ]},
  diagram:{ title:"Properties of sound and light", caption:"Write what each property means.", parts:[
    {p:"Pitch (sound)", f:"How high or low a sound is; depends on how fast the object vibrates"},
    {p:"Volume (sound)", f:"How loud or soft a sound is; depends on the size of the vibration"},
    {p:"Echo (sound)", f:"Sound reflected back from a hard surface"},
    {p:"Reflection (light)", f:"Light bouncing off a surface such as a mirror"},
    {p:"Shadow (light)", f:"A dark area formed when an opaque object blocks light"}
  ]},
  experiment:{
    title:"Seeing Sound Vibrations",
    aim:"To show that sound is caused by vibration.",
    materials:["A tin or drum with a tight cover","Grains of rice or sand","A ruler"],
    steps:["Sprinkle a few grains of rice on the tight surface of the drum.","Tap the drum gently and watch the grains carefully.","Tap it harder and compare how far the grains jump.","Now press a ruler on the edge of a desk and twang the free end; watch it blur as it vibrates.","Shorten the free end and twang again, listening to the change in pitch."],
    expect:"The grains jump when the drum is tapped, and jump higher with a harder tap. The shorter ruler gives a higher pitch.",
    why:"The jumping grains prove the surface is vibrating. Bigger vibration gives louder sound; faster vibration gives higher pitch."
  },
  apply:[
    {q:"Why can astronauts not talk to each other directly in space?", a:"Space is a vacuum with no air, and sound needs a medium to travel through."},
    {q:"Why do we see a person chopping wood in the distance before we hear the sound?", a:"Because light travels much faster than sound."},
    {q:"How can you tell that the moon is non-luminous?", a:"Because it only shines by reflecting light from the sun; it makes no light of its own."}
  ],
  activities:["Vibration demonstrations with drums and rulers","Make a string telephone","Shadow investigation in the sun","Test which materials are transparent, translucent or opaque"],
  materials:["Drums, tins, rice","String and cups","Torch and mirrors","Level textbooks"],
  assessment:["Practical investigation report","Quizzes","Science journal","Test"]
},
{
  grade:5, period:"III", sem:"One", icon:"🍎",
  title:"Health Lessons",
  subtitle:"Nutrition, the immune system and community health services",
  outcomes:["Understand that good nutrition helps people living with HIV live longer","Understand the body's immune system and how it keeps us healthy"],
  objectives:["Broaden knowledge on the impact of nutrition in HIV infection","Explain how the immune system protects the body","Outline the facts of conception","Identify community health services"],
  note:"The <b>immune system</b> is the body's defence against germs. Good <b>nutrition</b> — a balanced diet — keeps the immune system strong. HIV weakens the immune system, so good food helps a person living with HIV stay healthier for longer.",
  focus:["Balanced diet and nutrients","The immune system","Nutrition and HIV","Community health services"],
  terms:[
    {t:"nutrition", d:"getting the food the body needs to be healthy", x:"Good nutrition prevents disease."},
    {t:"balanced diet", d:"a meal with all the food groups in right amounts", x:"Eat a balanced diet daily."},
    {t:"carbohydrate", d:"food that gives energy", x:"Rice is a carbohydrate."},
    {t:"protein", d:"food that builds the body", x:"Fish and beans are proteins."},
    {t:"vitamin", d:"a nutrient that protects the body", x:"Oranges give vitamin C."},
    {t:"mineral", d:"a nutrient like iron or calcium", x:"Milk provides calcium."},
    {t:"immune system", d:"the body's defence against disease", x:"The immune system fights germs."},
    {t:"white blood cells", d:"blood cells that fight germs", x:"White blood cells attack bacteria."},
    {t:"immunity", d:"the ability to resist a disease", x:"Vaccines give immunity."},
    {t:"vaccine", d:"a preparation that protects against a disease", x:"The measles vaccine protects children."},
    {t:"malnutrition", d:"poor health from a bad diet", x:"Malnutrition weakens children."},
    {t:"clinic", d:"a place where people get health care", x:"Go to the clinic when sick."}
  ],
  facts:[
    {q:"What is a balanced diet?", a:"A meal containing all the food groups in the right amounts."},
    {q:"Name the food group that gives energy.", a:"Carbohydrates."},
    {q:"Name the food group that builds the body.", a:"Proteins."},
    {q:"What is the work of the immune system?", a:"To defend the body against germs and disease."},
    {q:"Which blood cells fight germs?", a:"White blood cells."},
    {q:"Why is good nutrition important for a person living with HIV?", a:"It keeps the immune system stronger, so the person stays healthier for longer."}
  ],
  tf:[
    {s:"Eating only rice every day is a balanced diet.", a:"false", why:"A balanced diet needs protein, vitamins and minerals too."},
    {s:"White blood cells help fight infection.", a:"true", why:"They attack germs entering the body."},
    {s:"HIV weakens the immune system.", a:"true", why:"HIV attacks the cells that defend the body."},
    {s:"Vaccines help protect against disease.", a:"true", why:"They give the body immunity."},
    {s:"Malnutrition only means eating too little food.", a:"false", why:"It also means eating the wrong balance of foods."}
  ],
  classify:{ title:"Sort these foods by nutrient", groups:[
    {name:"Carbohydrates (energy)", items:["rice","cassava","plantain","bread"]},
    {name:"Proteins (body building)", items:["fish","beans","meat","eggs"]},
    {name:"Vitamins and minerals (protective)", items:["orange","potato greens","mango","milk"]}
  ]},
  diagram:{ title:"How the body defends itself", caption:"Write the job of each defence.", parts:[
    {p:"Skin", f:"A physical barrier that keeps germs out"},
    {p:"Tears and saliva", f:"Wash away and kill some germs"},
    {p:"Stomach acid", f:"Destroys germs that are swallowed"},
    {p:"White blood cells", f:"Find and destroy germs in the blood"},
    {p:"Vaccines", f:"Train the body in advance to fight a particular disease"}
  ]},
  experiment:{
    title:"Plan a Balanced Meal",
    aim:"To design a balanced meal using foods available in Liberia.",
    materials:["Paper and pencil","Food pictures or real samples if available"],
    steps:["List all the foods eaten in your home in one day.","Put each food into its group: carbohydrate, protein, or vitamins and minerals.","Identify which group is missing or too small in the day's meals.","Design one improved meal that includes all three groups using local foods.","Present your meal plan to the class and explain your choices."],
    expect:"Learners find that meals are often heavy in carbohydrate and can be improved with protein and vegetables.",
    why:"A balanced diet supplies all the nutrients the body needs for energy, growth and protection from disease."
  },
  apply:[
    {q:"Why do children who eat poorly fall sick more often?", a:"Poor nutrition weakens the immune system, so the body cannot fight germs well."},
    {q:"A person living with HIV is advised to eat well. Explain the reason.", a:"Good food strengthens the remaining immune defence, helping the person stay healthy longer."},
    {q:"Name two health services available in your community and their use.", a:"Any correct examples, e.g. a clinic for treatment; a vaccination centre for immunisation."}
  ],
  activities:["Design a balanced meal from local foods","Discussion with a community health worker","Research community health services","Nutrition poster"],
  materials:["Food pictures or samples","Nutrition charts","Level textbooks","Health worker guidance"],
  assessment:["Meal plan","Quizzes","Science journal","Test"]
},
{
  grade:5, period:"IV", sem:"Two", icon:"🧬",
  title:"Organization of Life",
  subtitle:"Cells, tissues, organs and systems",
  outcomes:["Practise health care behaviour to prevent diseases","Encourage gender equity in our society"],
  objectives:["Differentiate between cells, tissues, organs and systems","Name the kinds of tissues, organs and systems","Explain the function of tissues, organs and systems","State the functions of the digestive, circulatory and excretory systems"],
  note:"Life is organised in levels: <b>cell → tissue → organ → system → organism</b>. The <b>cell</b> is the basic building block of all living things.",
  focus:["The cell as the basic unit","Tissues","Organs","Body systems","Digestive, circulatory and excretory systems"],
  terms:[
    {t:"cell", d:"the smallest basic unit of a living thing", x:"The cell is the building block of life."},
    {t:"tissue", d:"a group of similar cells doing one job", x:"Muscle tissue helps movement."},
    {t:"organ", d:"a group of tissues doing a special job", x:"The heart is an organ."},
    {t:"system", d:"a group of organs working together", x:"The digestive system breaks down food."},
    {t:"organism", d:"a complete living thing", x:"A human being is an organism."},
    {t:"digestion", d:"the breaking down of food in the body", x:"Digestion begins in the mouth."},
    {t:"circulation", d:"the movement of blood round the body", x:"The heart drives circulation."},
    {t:"excretion", d:"removing waste from the body", x:"The kidneys carry out excretion."},
    {t:"kidney", d:"the organ that filters waste from blood", x:"The kidney makes urine."},
    {t:"intestine", d:"the long tube where food is absorbed", x:"Nutrients pass through the intestine."},
    {t:"blood vessel", d:"a tube carrying blood", x:"Arteries are blood vessels."},
    {t:"respiration", d:"the release of energy from food in cells", x:"Respiration needs oxygen."}
  ],
  facts:[
    {q:"What is the basic unit of life?", a:"The cell."},
    {q:"Arrange in order from smallest: organ, cell, system, tissue.", a:"Cell, tissue, organ, system."},
    {q:"What is a tissue?", a:"A group of similar cells working together to do one job."},
    {q:"State the function of the digestive system.", a:"To break down food so the body can absorb and use it."},
    {q:"State the function of the circulatory system.", a:"To carry blood, oxygen and food to all parts of the body."},
    {q:"Which organ filters waste from the blood?", a:"The kidney."}
  ],
  tf:[
    {s:"A tissue is smaller than a cell.", a:"false", why:"A tissue is made of many cells, so it is larger."},
    {s:"The heart is an organ.", a:"true", why:"It is made of tissues working together for one job."},
    {s:"The digestive system includes the stomach and intestines.", a:"true", why:"These organs digest and absorb food."},
    {s:"The kidneys are part of the circulatory system.", a:"false", why:"They belong to the excretory system."},
    {s:"All living things are made of cells.", a:"true", why:"The cell is the basic unit of all life."}
  ],
  classify:{ title:"Match organs to their systems", groups:[
    {name:"Digestive system", items:["mouth","stomach","small intestine","liver"]},
    {name:"Circulatory system", items:["heart","arteries","veins","blood"]},
    {name:"Excretory system", items:["kidneys","bladder","skin"]}
  ]},
  diagram:{ title:"Levels of organisation of life", caption:"Write what each level means, with an example.", parts:[
    {p:"Cell", f:"The smallest unit of life — e.g. a red blood cell"},
    {p:"Tissue", f:"Similar cells working together — e.g. muscle tissue"},
    {p:"Organ", f:"Tissues working together for one job — e.g. the heart"},
    {p:"System", f:"Organs working together — e.g. the circulatory system"},
    {p:"Organism", f:"A complete living thing — e.g. a human being"}
  ]},
  experiment:{
    title:"What Happens to My Rice? — Tracing Digestion",
    aim:"To trace the path of food through the digestive system.",
    materials:["A long piece of string or rope","Labels or cards","Chart paper"],
    steps:["Write labels: mouth, gullet, stomach, small intestine, large intestine.","Lay the string on the ground and place the labels along it in the correct order.","Beside each label, write what happens to the rice at that point.","Measure the string to show how long the food's journey is.","Copy the finished diagram into your science journal."],
    expect:"A correctly ordered model showing the journey of food from mouth to waste.",
    why:"Food is broken down step by step as it travels, so nutrients can be absorbed into the blood."
  },
  apply:[
    {q:"Why must you chew food well before swallowing?", a:"Chewing breaks food into small pieces so digestion is faster and easier."},
    {q:"A person's kidneys stop working. Predict one result.", a:"Waste builds up in the blood and the person becomes very ill."},
    {q:"Explain why the heart is called an organ and not a tissue.", a:"Because it is made of several tissues working together to do one job — pumping blood."}
  ],
  activities:["Model the digestive system with string and labels","Draw and label body systems","Group presentations on each system","Science journal work"],
  materials:["String, labels, chart paper","Body system charts","Level textbooks","Microscope if available"],
  assessment:["Labelled system diagrams","Group presentation","Quizzes","Test"]
},
{
  grade:5, period:"V", sem:"Two", icon:"⚛️",
  title:"Structure of Matter",
  subtitle:"Atoms, molecules, elements and changes in matter",
  outcomes:["Create a model to demonstrate atomic movement in the different states of matter"],
  objectives:["Describe the fundamental structure of matter","Explain that matter contains atoms and molecules","Differentiate between atoms and molecules","Explain the changes in matter"],
  note:"An <b>atom</b> is the smallest particle of an element. A <b>molecule</b> is formed when two or more atoms join. A <b>physical change</b> can be reversed (ice melting); a <b>chemical change</b> makes a new substance and usually cannot be reversed (burning).",
  focus:["Structure of matter","Elements, atoms and molecules","Arrangement of particles in solids, liquids and gases","Physical and chemical changes"],
  terms:[
    {t:"atom", d:"the smallest particle of an element", x:"An atom is extremely small."},
    {t:"molecule", d:"two or more atoms joined together", x:"A water molecule has three atoms."},
    {t:"element", d:"a substance made of one kind of atom", x:"Oxygen is an element."},
    {t:"compound", d:"a substance made of different atoms joined", x:"Water is a compound."},
    {t:"particle", d:"a very small piece of matter", x:"Particles move in all matter."},
    {t:"physical change", d:"a change with no new substance formed", x:"Melting ice is a physical change."},
    {t:"chemical change", d:"a change forming a new substance", x:"Burning wood is a chemical change."},
    {t:"reversible", d:"able to be changed back", x:"Melting is reversible."},
    {t:"irreversible", d:"not able to be changed back", x:"Burning is irreversible."},
    {t:"evaporate", d:"to change from liquid to gas", x:"Water evaporates in the sun."},
    {t:"condense", d:"to change from gas to liquid", x:"Steam condenses on a cold surface."},
    {t:"symbol", d:"a short letter code for an element", x:"O is the symbol for oxygen."}
  ],
  facts:[
    {q:"What is an atom?", a:"The smallest particle of an element."},
    {q:"What is a molecule?", a:"Two or more atoms joined together."},
    {q:"Give one difference between an element and a compound.", a:"An element has one kind of atom; a compound has different atoms joined."},
    {q:"Give one example of a physical change.", a:"Melting ice, boiling water or tearing paper."},
    {q:"Give one example of a chemical change.", a:"Burning wood, rusting iron or cooking an egg."},
    {q:"How are particles arranged in a solid?", a:"Closely packed in a fixed pattern, vibrating in place."}
  ],
  tf:[
    {s:"Atoms are too small to see with the naked eye.", a:"true", why:"Atoms are extremely tiny."},
    {s:"Melting ice is a chemical change.", a:"false", why:"No new substance forms, so it is physical."},
    {s:"Burning paper is a chemical change.", a:"true", why:"New substances (ash, smoke, gases) are formed."},
    {s:"Particles in a gas are far apart and move freely.", a:"true", why:"That is why gases fill their container."},
    {s:"Water is an element.", a:"false", why:"Water is a compound of hydrogen and oxygen."}
  ],
  classify:{ title:"Physical or chemical change?", groups:[
    {name:"Physical change", items:["melting ice","boiling water","tearing paper","dissolving salt"]},
    {name:"Chemical change", items:["burning wood","rusting iron","cooking an egg","milk going sour"]}
  ]},
  diagram:{ title:"Arrangement of particles in the three states", caption:"Describe the particles in each state.", parts:[
    {p:"Solid", f:"Particles closely packed in a fixed pattern; they vibrate in place"},
    {p:"Liquid", f:"Particles close but able to slide past one another"},
    {p:"Gas", f:"Particles far apart, moving quickly in all directions"},
    {p:"Melting", f:"Solid to liquid as particles gain energy and move more"},
    {p:"Evaporating", f:"Liquid to gas as particles escape from the surface"}
  ]},
  experiment:{
    title:"Modelling Particles with Learners",
    aim:"To model how particles are arranged and move in solids, liquids and gases.",
    materials:["An open space","The class as particles"],
    steps:["SOLID: learners stand very close together in neat rows and only shake gently on the spot.","LIQUID: learners spread slightly apart and slide slowly past one another, staying in the group.","GAS: learners move quickly in all directions, far apart, filling the whole space safely.","Note how the shape of each 'state' changes when the teacher marks a smaller area.","Draw the three arrangements in your journal."],
    expect:"The solid keeps its shape, the liquid takes the shape of the space, and the gas fills all of it.",
    why:"The behaviour of solids, liquids and gases is explained by how their particles are arranged and how freely they move."
  },
  apply:[
    {q:"Why does a gas fill any container it is put in?", a:"Because its particles are far apart and move freely in all directions."},
    {q:"A nail left in the rain turns brown. Is this physical or chemical? Explain.", a:"Chemical — rust is a new substance and the change cannot easily be reversed."},
    {q:"Explain why you can smell food cooking from another room.", a:"Particles of gas from the food spread out and move through the air to your nose."}
  ],
  activities:["Human particle model of the three states","Sort changes as physical or chemical","Build atom and molecule models with seeds and sticks","Science journal drawings"],
  materials:["Seeds, sticks, clay for models","Charts of particle arrangement","Level textbooks","Open space"],
  assessment:["Particle diagrams","Classification exercise","Quizzes","Test"]
},
{
  grade:5, period:"VI", sem:"Two", icon:"🌡️",
  title:"Weather and Climate of the Earth",
  subtitle:"Causes and effects of weather, and global climate change",
  outcomes:["Connect learning to solving global climate change problems"],
  objectives:["Describe cause and effect relationships of weather","Explain the difference between weather and climate","Describe the causes and effects of climate change","Suggest ways of reducing climate change"],
  note:"<b>Weather</b> changes daily; <b>climate</b> is the average weather over many years. <b>Global warming</b> is caused mainly by <b>greenhouse gases</b> from burning fuel and cutting forests.",
  focus:["Weather versus climate","Causes of weather","Climate zones","Global warming and greenhouse gases","Reducing climate change"],
  terms:[
    {t:"climate", d:"the average weather of a place over many years", x:"Liberia has a tropical climate."},
    {t:"atmosphere", d:"the layer of air surrounding the earth", x:"The atmosphere protects the earth."},
    {t:"greenhouse gas", d:"a gas that traps heat in the atmosphere", x:"Carbon dioxide is a greenhouse gas."},
    {t:"carbon dioxide", d:"the gas released when fuel burns", x:"Cars release carbon dioxide."},
    {t:"global warming", d:"the rise in the earth's average temperature", x:"Global warming melts ice caps."},
    {t:"climate change", d:"long-term change in weather patterns", x:"Climate change alters rainfall."},
    {t:"deforestation", d:"the clearing of forests", x:"Deforestation increases carbon dioxide."},
    {t:"renewable energy", d:"energy from sources that do not run out", x:"Solar power is renewable energy."},
    {t:"sea level", d:"the height of the sea surface", x:"Rising sea level threatens the coast."},
    {t:"erosion", d:"the wearing away of land", x:"Coastal erosion affects Liberia."},
    {t:"conservation", d:"protecting natural resources", x:"Conservation saves the forest."},
    {t:"adaptation", d:"changing in order to cope", x:"Farmers use adaptation to face drought."}
  ],
  facts:[
    {q:"State the difference between weather and climate.", a:"Weather is the daily condition of the air; climate is the average weather over many years."},
    {q:"Name two greenhouse gases.", a:"Carbon dioxide and methane."},
    {q:"Name two human activities that cause global warming.", a:"Burning fuel and cutting down forests."},
    {q:"State two effects of climate change on Liberia.", a:"Coastal erosion and rising sea level; unpredictable rains affecting farming."},
    {q:"Give two ways to reduce global warming.", a:"Plant trees and use renewable energy such as solar."},
    {q:"Why are trees important in reducing global warming?", a:"They absorb carbon dioxide from the air."}
  ],
  tf:[
    {s:"Weather and climate are the same thing.", a:"false", why:"Weather is daily; climate is long-term average."},
    {s:"Carbon dioxide is a greenhouse gas.", a:"true", why:"It traps heat in the atmosphere."},
    {s:"Planting trees can help reduce global warming.", a:"true", why:"Trees absorb carbon dioxide."},
    {s:"Climate change has no effect on farming.", a:"false", why:"It changes rainfall patterns and harms crops."},
    {s:"Solar energy is a renewable source of energy.", a:"true", why:"Sunlight does not run out."}
  ],
  classify:{ title:"Sort these", groups:[
    {name:"Causes of global warming", items:["burning fuel","deforestation","burning waste","factory smoke"]},
    {name:"Effects of climate change", items:["rising sea level","stronger storms","longer droughts","coastal erosion"]},
    {name:"Solutions", items:["plant trees","use solar energy","reduce burning","protect forests"]}
  ]},
  diagram:{ title:"The greenhouse effect", caption:"Write what happens at each stage.", parts:[
    {p:"1. Sunlight arrives", f:"Energy from the sun passes through the atmosphere to the earth"},
    {p:"2. Earth warms", f:"The land and sea absorb the energy and become warm"},
    {p:"3. Heat radiates", f:"The warm earth gives off heat back towards space"},
    {p:"4. Gases trap heat", f:"Greenhouse gases absorb some heat and send it back down"},
    {p:"5. Temperature rises", f:"More greenhouse gas means more trapped heat and global warming"}
  ]},
  experiment:{
    title:"The Greenhouse in a Jar",
    aim:"To show how trapped air becomes warmer than open air.",
    materials:["Two thermometers","One clear glass jar","A sunny place","A notebook"],
    steps:["Place both thermometers side by side in the sun and record the starting temperature of each.","Cover one thermometer with the upturned glass jar; leave the other open.","Leave both in the sun for fifteen minutes.","Read and record both temperatures without moving them.","Compare the two readings and explain the difference."],
    expect:"The thermometer under the jar records a higher temperature than the open one.",
    why:"The jar traps heat just as greenhouse gases trap heat in the atmosphere, raising the temperature."
  },
  apply:[
    {q:"Farmers in Liberia say the rains have become unpredictable. Which problem does this show?", a:"Climate change — long-term shifts in the usual weather pattern."},
    {q:"Explain why coastal communities in Liberia are worried about rising sea level.", a:"Rising sea level erodes the coast and can flood homes, farms and roads."},
    {q:"Suggest two actions your school can take to fight climate change.", a:"Plant trees in the compound and stop burning rubbish; use daylight instead of electricity."}
  ],
  activities:["Greenhouse jar investigation","Debate on climate solutions","Tree planting in the school compound","Research the effects of climate change on Liberia"],
  materials:["Thermometers, glass jars","Climate charts","Tree seedlings","Level textbooks"],
  assessment:["Investigation report","Debate participation","Quizzes","Test"]
},

/* ================= GRADE 6 ================= */
{
  grade:6, period:"I", sem:"One", icon:"🦋",
  title:"Classification of Plants and Animals",
  subtitle:"Plant adaptation, plant population, vertebrates and invertebrates",
  outcomes:["State more than one level of classification of plants and animals"],
  objectives:["Classify plants according to specialised structures","Explain how overpopulation affects the survival of plants","Name vertebrate and invertebrate groups","Identify plant adaptations for survival"],
  note:"<b>Vertebrates</b> have a backbone; <b>invertebrates</b> do not. The five vertebrate groups are <b>fish, amphibians, reptiles, birds and mammals</b>. An <b>adaptation</b> is a feature that helps a living thing survive.",
  focus:["Plant adaptations","Plant population and overpopulation","Vertebrates and invertebrates","Levels of classification"],
  terms:[
    {t:"classification", d:"grouping living things by their features", x:"Classification makes study easier."},
    {t:"vertebrate", d:"an animal with a backbone", x:"A fish is a vertebrate."},
    {t:"invertebrate", d:"an animal without a backbone", x:"An earthworm is an invertebrate."},
    {t:"adaptation", d:"a feature that helps survival", x:"Thorns are an adaptation."},
    {t:"amphibian", d:"an animal living on land and in water", x:"A frog is an amphibian."},
    {t:"mammal", d:"a vertebrate that feeds young on milk", x:"A goat is a mammal."},
    {t:"species", d:"a group of living things that can breed together", x:"Humans are one species."},
    {t:"population", d:"all the members of one species in an area", x:"The plant population is high."},
    {t:"overpopulation", d:"too many individuals for the resources", x:"Overpopulation causes competition."},
    {t:"competition", d:"the struggle for the same resources", x:"Plants compete for light."},
    {t:"habitat", d:"the natural home of a living thing", x:"The forest is their habitat."},
    {t:"survival", d:"staying alive", x:"Adaptation aids survival."}
  ],
  facts:[
    {q:"What is a vertebrate?", a:"An animal that has a backbone."},
    {q:"Name the five groups of vertebrates.", a:"Fish, amphibians, reptiles, birds and mammals."},
    {q:"Give two examples of invertebrates.", a:"Earthworm and insect (also snail, spider, crab)."},
    {q:"What is an adaptation?", a:"A feature of a living thing that helps it survive in its environment."},
    {q:"Give three examples of plant adaptations.", a:"Thorns, milky juice, stinging hairs (also waxy leaves, deep roots)."},
    {q:"How does overpopulation affect plants?", a:"Too many plants compete for light, water and nutrients, so some die or grow poorly."}
  ],
  tf:[
    {s:"All animals have a backbone.", a:"false", why:"Invertebrates such as insects have no backbone."},
    {s:"A frog is an amphibian.", a:"true", why:"It lives both on land and in water."},
    {s:"Thorns help protect a plant from animals.", a:"true", why:"Thorns are a defensive adaptation."},
    {s:"Overpopulation of plants increases competition for light.", a:"true", why:"More plants share the same limited resources."},
    {s:"A snake is an invertebrate.", a:"false", why:"A snake has a backbone, so it is a vertebrate."}
  ],
  classify:{ title:"Vertebrate or invertebrate?", groups:[
    {name:"Vertebrates", items:["fish","frog","snake","hen","goat"]},
    {name:"Invertebrates", items:["earthworm","ant","snail","spider","crab"]},
    {name:"Plant adaptations", items:["thorns","milky juice","stinging hairs","deep roots"]}
  ]},
  diagram:{ title:"The five vertebrate groups", caption:"Write one identifying feature of each.", parts:[
    {p:"Fish", f:"Live in water, have scales and breathe with gills"},
    {p:"Amphibians", f:"Live on land and in water; moist skin; young live in water"},
    {p:"Reptiles", f:"Dry scaly skin; lay eggs on land"},
    {p:"Birds", f:"Feathers, wings and a beak; lay hard-shelled eggs"},
    {p:"Mammals", f:"Hair or fur; feed their young on milk"}
  ]},
  experiment:{
    title:"Competition Between Plants",
    aim:"To find out how overcrowding affects plant growth.",
    materials:["Two tins of the same size","Soil","Bean seeds","Water","A ruler"],
    steps:["Fill both tins with the same amount of soil.","Plant 3 seeds in the first tin and 25 seeds in the second tin.","Water both tins equally every day and keep them in the same light.","After two weeks, measure the height of the plants in each tin.","Compare the average heights and describe the difference."],
    expect:"Plants in the crowded tin are shorter, thinner and weaker than those in the tin with few seeds.",
    why:"Overpopulation creates competition for light, water and nutrients, so each plant gets less and grows poorly."
  },
  apply:[
    {q:"Why do farmers space out their seeds when planting?", a:"To reduce competition so each plant gets enough light, water and nutrients."},
    {q:"A plant in a dry area has very deep roots. Explain this adaptation.", a:"Deep roots reach water far below the surface, helping the plant survive drought."},
    {q:"Why is a bat classified as a mammal and not a bird?", a:"Because it has hair and feeds its young on milk, even though it flies."}
  ],
  activities:["Overcrowding investigation with seeds","Collect and classify local animals","Study plant adaptations on a nature walk","Build a classification key"],
  materials:["Seeds, tins, soil","Classification charts","Specimens from the compound","Level textbooks"],
  assessment:["Investigation report","Classification exercise","Quizzes","Test"]
},
{
  grade:6, period:"II", sem:"One", icon:"🕸️",
  title:"Interdependence in the Ecosystem",
  subtitle:"Food chains, habitats, parasites and HIV/AIDS prevention",
  outcomes:["Use familiar examples to illustrate understanding of balance and interdependence within the ecosystem"],
  objectives:["Describe the ecosystem","Identify at least one ecosystem in their environment","Explain the effect of overpopulation on the ecosystem","List plant and animal parasites","State preventive measures against HIV/AIDS"],
  note:"An <b>ecosystem</b> is all the living things in an area together with their non-living surroundings. A <b>food chain</b> shows how energy passes from one living thing to another: <i>grass → goat → lion</i>.",
  focus:["The ecosystem","Food chains","Habitats","Effects of resource exploitation","Plant and animal parasites","HIV/AIDS prevention"],
  terms:[
    {t:"ecosystem", d:"living things and their surroundings together", x:"A pond is an ecosystem."},
    {t:"food chain", d:"the path of energy from one organism to another", x:"Grass → goat → lion is a food chain."},
    {t:"producer", d:"a plant that makes its own food", x:"Grass is a producer."},
    {t:"consumer", d:"an animal that eats other living things", x:"A goat is a consumer."},
    {t:"decomposer", d:"an organism that breaks down dead matter", x:"Fungi are decomposers."},
    {t:"parasite", d:"an organism living on another and harming it", x:"A tapeworm is a parasite."},
    {t:"host", d:"the living thing a parasite lives on", x:"The dog is the host of the tick."},
    {t:"interdependence", d:"living things depending on one another", x:"Interdependence keeps the balance."},
    {t:"bacteria", d:"tiny single-celled organisms", x:"Some bacteria cause disease."},
    {t:"fungus", d:"an organism such as a mushroom or mould", x:"Fungus grows on old bread."},
    {t:"conservation", d:"protecting the environment", x:"Conservation saves habitats."},
    {t:"balance", d:"a steady state in nature", x:"Pollution upsets the balance."}
  ],
  facts:[
    {q:"What is an ecosystem?", a:"All the living things in an area together with their non-living surroundings."},
    {q:"What is a food chain?", a:"A path showing how energy passes from one living thing to another."},
    {q:"In the chain grass → goat → lion, which is the producer?", a:"The grass."},
    {q:"What is a parasite?", a:"An organism that lives on or in another and harms it."},
    {q:"Name two animal parasites.", a:"Tapeworm and tick (also mosquito, lice)."},
    {q:"State three ways to prevent HIV/AIDS.", a:"Abstinence, avoiding contact with infected blood, and using sterile instruments."}
  ],
  tf:[
    {s:"Plants are producers in a food chain.", a:"true", why:"They make their own food using sunlight."},
    {s:"A parasite helps the organism it lives on.", a:"false", why:"A parasite harms its host."},
    {s:"Destroying a habitat can kill the animals living there.", a:"true", why:"They lose their food and shelter."},
    {s:"Decomposers return nutrients to the soil.", a:"true", why:"They break down dead matter."},
    {s:"HIV can be spread by shaking hands.", a:"false", why:"HIV is not spread by casual contact."}
  ],
  classify:{ title:"Sort these organisms", groups:[
    {name:"Producers", items:["grass","cassava plant","tree","algae"]},
    {name:"Consumers", items:["goat","lion","fish","human"]},
    {name:"Decomposers and parasites", items:["fungi","bacteria","tapeworm","tick"]}
  ]},
  diagram:{ title:"A simple food chain", caption:"Write the role of each link.", parts:[
    {p:"Sun", f:"The original source of all the energy"},
    {p:"Grass (producer)", f:"Makes its own food using sunlight"},
    {p:"Goat (primary consumer)", f:"Eats the grass and gains energy"},
    {p:"Lion (secondary consumer)", f:"Eats the goat and gains energy"},
    {p:"Decomposers", f:"Break down dead bodies and return nutrients to the soil"}
  ]},
  experiment:{
    title:"Map an Ecosystem in Your School",
    aim:"To identify the living and non-living parts of a local ecosystem and build a food chain.",
    materials:["Notebook and pencil","Hand lens","A chosen area such as a garden or hedge"],
    steps:["Choose a small area of the compound and mark its boundary.","List all the living things you can find: plants, insects, birds, worms.","List the non-living parts: soil, water, air, sunlight, stones.","Use your list to build at least two food chains from the area.","Draw the ecosystem and label producers, consumers and decomposers."],
    expect:"A labelled map showing living and non-living parts and at least two valid food chains.",
    why:"Every ecosystem depends on producers capturing energy from the sun and passing it along the chain."
  },
  apply:[
    {q:"All the grass in an area is destroyed. Predict what happens to the goats and then the lions.", a:"The goats lose their food and die or move away, so the lions also lose their food source."},
    {q:"Why are decomposers important in an ecosystem?", a:"They break down dead matter and return nutrients to the soil for plants to use."},
    {q:"Explain how cutting a forest affects the animals living there.", a:"They lose their habitat, food and shelter, so their numbers fall or they move away."}
  ],
  activities:["Map a local ecosystem","Build food chains from local species","Research parasites and their hosts","HIV/AIDS prevention discussion with a health worker"],
  materials:["Hand lens, notebooks","Ecosystem charts","Level textbooks","Health worker guidance"],
  assessment:["Ecosystem map and food chains","Quizzes","Group presentation","Test"]
},
{
  grade:6, period:"III", sem:"One", icon:"🌳",
  title:"The Liberian Forest Resources",
  subtitle:"Forest types, conservation, global warming and pollution",
  outcomes:["Analyse the national and global elements, needs and consequences of nature conservation"],
  objectives:["State the types of the Liberian forest","State the importance of the Liberian forest","Discuss the activities of the Society for the Conservation of Nature in Liberia","State the meaning of global warming and its effects on Liberia","State local causes of water pollution"],
  note:"Liberia holds a large share of West Africa's remaining <b>rainforest</b>. The <b>Society for the Conservation of Nature in Liberia (SCNL)</b> works to protect these forests and the wildlife in them.",
  focus:["Types of Liberian forest","Importance of the forest","Conservation and SCNL","Global warming and Liberia","Water pollution"],
  terms:[
    {t:"rainforest", d:"a thick forest in a region of heavy rainfall", x:"Liberia has tropical rainforest."},
    {t:"conservation", d:"protecting and using resources wisely", x:"Conservation protects the forest."},
    {t:"SCNL", d:"Society for the Conservation of Nature in Liberia", x:"SCNL protects Liberian wildlife."},
    {t:"biodiversity", d:"the variety of living things in an area", x:"Rainforests have high biodiversity."},
    {t:"logging", d:"the cutting of trees for timber", x:"Uncontrolled logging destroys forest."},
    {t:"reserve", d:"protected land for wildlife", x:"Sapo is a national park reserve."},
    {t:"endangered", d:"at risk of dying out", x:"The pygmy hippo is endangered."},
    {t:"pollution", d:"harmful substances in the environment", x:"Pollution spoils the river."},
    {t:"sewage", d:"waste water from homes", x:"Sewage pollutes the creek."},
    {t:"global warming", d:"the rise in the earth's temperature", x:"Global warming affects rainfall."},
    {t:"erosion", d:"the wearing away of soil", x:"Erosion follows deforestation."},
    {t:"sustainable", d:"able to continue without using up resources", x:"Sustainable farming protects the land."}
  ],
  facts:[
    {q:"Name the main type of forest found in Liberia.", a:"Tropical rainforest."},
    {q:"What does SCNL stand for?", a:"The Society for the Conservation of Nature in Liberia."},
    {q:"Give three importances of the Liberian forest.", a:"Timber, medicine, wildlife habitat, oxygen, rainfall control, tourism (any three)."},
    {q:"Name one national park in Liberia.", a:"Sapo National Park."},
    {q:"State three local causes of water pollution.", a:"Sewage, dumping rubbish in rivers, and washing with chemicals or mining waste in streams."},
    {q:"State one effect of global warming on Liberia.", a:"Coastal erosion and rising sea level, or unpredictable rainfall harming farms."}
  ],
  tf:[
    {s:"Liberia has a large part of West Africa's remaining rainforest.", a:"true", why:"Liberia holds a significant share of the Upper Guinean forest."},
    {s:"Cutting all the forest has no effect on rainfall.", a:"false", why:"Forests help produce and regulate rainfall."},
    {s:"SCNL works to protect nature in Liberia.", a:"true", why:"That is the organisation's purpose."},
    {s:"Dumping waste into a river is a cause of water pollution.", a:"true", why:"It adds harmful substances to the water."},
    {s:"Endangered means an animal is already extinct.", a:"false", why:"Endangered means at risk of dying out, not yet gone."}
  ],
  classify:{ title:"Sort these", groups:[
    {name:"Importance of the forest", items:["timber","medicine","wildlife habitat","oxygen","tourism"]},
    {name:"Threats to the forest", items:["uncontrolled logging","farming by burning","mining","hunting"]},
    {name:"Causes of water pollution", items:["sewage","rubbish dumping","mining waste","washing chemicals in streams"]}
  ]},
  diagram:{ title:"Effects of deforestation", caption:"Write the result of each effect.", parts:[
    {p:"Loss of habitat", f:"Animals lose their homes and may become endangered"},
    {p:"Soil erosion", f:"With no roots to hold it, rain washes the topsoil away"},
    {p:"Less rainfall", f:"Fewer trees means less water vapour and changed rain patterns"},
    {p:"More carbon dioxide", f:"Fewer trees absorb less CO₂, increasing global warming"},
    {p:"Loss of resources", f:"Timber, medicine and food from the forest are lost to future generations"}
  ]},
  experiment:{
    title:"Roots Hold the Soil",
    aim:"To show how plant roots protect soil from erosion.",
    materials:["Two trays or shallow boxes","Soil","Grass turf or small growing plants","A watering can or bottle with holes"],
    steps:["Fill both trays with the same amount of soil.","Plant grass in one tray and leave the other bare. Let the grass root for a week.","Raise one end of each tray to make the same slope.","Pour the same amount of water slowly onto the top of each tray.","Collect the water running off each tray and compare how muddy each is."],
    expect:"The runoff from the bare tray is much muddier than from the grassed tray.",
    why:"Roots bind the soil and slow the water, so far less soil is washed away — this is why deforestation causes erosion."
  },
  apply:[
    {q:"A company wants to log a whole forest near your town. State two arguments against it.", a:"It destroys wildlife habitat and causes soil erosion, loss of rainfall and loss of future resources."},
    {q:"Why is it dangerous to dump rubbish into a creek used for drinking water?", a:"It pollutes the water with germs and chemicals, causing disease in the community."},
    {q:"Suggest one way to use forest resources sustainably.", a:"Cut only mature trees and replant seedlings, or harvest fruit and medicine without felling trees."}
  ],
  activities:["Soil erosion investigation","Research SCNL and Sapo National Park","Debate: logging versus conservation","Community clean-up campaign"],
  materials:["Trays, soil, grass","Maps of Liberian forests","Level textbooks","Research materials"],
  assessment:["Investigation report","Research presentation","Quizzes","Test"]
},
{
  grade:6, period:"IV", sem:"Two", icon:"❤️",
  title:"The Human Body: Health Lessons",
  subtitle:"Body systems, communicable diseases and healthy living",
  outcomes:["Apply knowledge of the body systems to maintain personal and community health"],
  objectives:["Describe the main body systems and their functions","Distinguish communicable from non-communicable diseases","State how common diseases are spread and prevented","Explain the importance of exercise, rest and a balanced diet"],
  note:"A <b>communicable disease</b> can be passed from one person to another (malaria, cholera, TB). A <b>non-communicable disease</b> cannot be passed on (diabetes, high blood pressure).",
  focus:["Body systems review","Communicable diseases","Non-communicable diseases","Disease prevention","Exercise, rest and diet"],
  terms:[
    {t:"communicable disease", d:"a disease that spreads from person to person", x:"Cholera is communicable."},
    {t:"non-communicable disease", d:"a disease that does not spread between people", x:"Diabetes is non-communicable."},
    {t:"infection", d:"the entry and growth of germs in the body", x:"Wash cuts to avoid infection."},
    {t:"transmission", d:"the passing of disease from one to another", x:"Mosquitoes cause malaria transmission."},
    {t:"immunisation", d:"protecting by vaccine", x:"Immunisation prevents measles."},
    {t:"sanitation", d:"clean and safe disposal of waste", x:"Good sanitation prevents cholera."},
    {t:"cholera", d:"a serious disease from dirty water", x:"Cholera causes severe diarrhoea."},
    {t:"tuberculosis", d:"a lung disease spread by coughing", x:"Tuberculosis affects the lungs."},
    {t:"nervous system", d:"the brain, spinal cord and nerves", x:"The nervous system controls the body."},
    {t:"skeletal system", d:"the bones of the body", x:"The skeletal system supports us."},
    {t:"exercise", d:"physical activity that keeps the body fit", x:"Exercise strengthens the heart."},
    {t:"rest", d:"time for the body to recover", x:"Children need enough rest."}
  ],
  facts:[
    {q:"What is a communicable disease?", a:"A disease that can be passed from one person to another."},
    {q:"Give three examples of communicable diseases.", a:"Malaria, cholera and tuberculosis (also measles, COVID-19)."},
    {q:"Give two examples of non-communicable diseases.", a:"Diabetes and high blood pressure."},
    {q:"How is cholera commonly spread?", a:"Through drinking water or food contaminated with faeces."},
    {q:"Name the system that controls all body activities.", a:"The nervous system."},
    {q:"State three habits of healthy living.", a:"Eat a balanced diet, exercise regularly, and get enough rest and sleep."}
  ],
  tf:[
    {s:"Malaria is a communicable disease.", a:"true", why:"It is transmitted by mosquitoes from person to person."},
    {s:"Diabetes can be caught from another person.", a:"false", why:"Diabetes is non-communicable."},
    {s:"Good sanitation helps prevent cholera.", a:"true", why:"Safe waste disposal keeps water clean."},
    {s:"Immunisation protects children from certain diseases.", a:"true", why:"Vaccines build immunity."},
    {s:"Exercise weakens the heart.", a:"false", why:"Regular exercise strengthens the heart."}
  ],
  classify:{ title:"Communicable or non-communicable?", groups:[
    {name:"Communicable", items:["malaria","cholera","tuberculosis","measles"]},
    {name:"Non-communicable", items:["diabetes","high blood pressure","asthma"]},
    {name:"Prevention methods", items:["immunisation","clean water","mosquito nets","hand washing"]}
  ]},
  diagram:{ title:"Body systems and their functions", caption:"Write the main job of each system.", parts:[
    {p:"Digestive system", f:"Breaks down food so the body can absorb nutrients"},
    {p:"Circulatory system", f:"Carries blood, oxygen and food to all body parts"},
    {p:"Respiratory system", f:"Takes in oxygen and removes carbon dioxide"},
    {p:"Nervous system", f:"Controls and coordinates all body activities"},
    {p:"Skeletal system", f:"Supports the body, gives shape and protects organs"},
    {p:"Excretory system", f:"Removes waste products from the body"}
  ]},
  experiment:{
    title:"Exercise and the Pulse Rate",
    aim:"To investigate how exercise affects the heart rate and how quickly it recovers.",
    materials:["A clock or watch with a second hand","A notebook"],
    steps:["Sit still for three minutes, then count your pulse for one minute. Record it as the resting rate.","Do star jumps or run on the spot for two minutes.","Count your pulse again immediately for one minute and record it.","Rest for two minutes, then count again. Repeat until the pulse returns to the resting rate.","Draw a graph of pulse rate against time and describe the pattern."],
    expect:"The pulse rises sharply after exercise and falls gradually back to the resting rate.",
    why:"Working muscles need more oxygen, so the heart beats faster. A fit person's pulse returns to normal more quickly."
  },
  apply:[
    {q:"A village has an outbreak of cholera. Suggest two immediate actions.", a:"Provide safe treated drinking water and improve toilet sanitation; treat the sick at a clinic."},
    {q:"Why does the school insist on hand washing before eating?", a:"To remove germs from the hands so they do not enter the mouth and cause disease."},
    {q:"Explain why a pupil who never exercises may have a higher resting pulse.", a:"An unfit heart pumps less blood per beat, so it must beat more often even at rest."}
  ],
  activities:["Pulse rate investigation","Research common diseases in the community","Health campaign poster","Talk from a health worker"],
  materials:["Clocks or watches","Body system charts","Level textbooks","Health worker guidance"],
  assessment:["Investigation graph and report","Health poster","Quizzes","Test"]
},
{
  grade:6, period:"V", sem:"Two", icon:"🏗️",
  title:"Machine and Work",
  subtitle:"Mechanical advantage, efficiency and compound machines",
  outcomes:["Apply knowledge of machines to explain how work is made easier in daily life"],
  objectives:["Calculate work done","Explain mechanical advantage","Explain efficiency of machines","Identify compound machines"],
  note:"<b>Mechanical advantage = load ÷ effort</b>. It tells how many times a machine multiplies your force. A <b>compound machine</b> is made of two or more simple machines, like a bicycle or wheelbarrow.",
  focus:["Work and its unit","Mechanical advantage","Efficiency","Compound machines","Machines in daily life"],
  terms:[
    {t:"work", d:"force multiplied by distance moved", x:"Work is measured in joules."},
    {t:"joule", d:"the unit of work and energy", x:"He did 50 joules of work."},
    {t:"mechanical advantage", d:"load divided by effort", x:"A pulley has a mechanical advantage of 2."},
    {t:"efficiency", d:"useful work out compared with work put in", x:"No machine has 100% efficiency."},
    {t:"compound machine", d:"a machine made of two or more simple machines", x:"A bicycle is a compound machine."},
    {t:"friction", d:"a force opposing motion", x:"Friction lowers efficiency."},
    {t:"lubricant", d:"oil or grease that reduces friction", x:"Oil is a lubricant."},
    {t:"input", d:"the effort or energy put into a machine", x:"The input is the force you apply."},
    {t:"output", d:"the useful work a machine produces", x:"The output lifts the load."},
    {t:"gear", d:"a toothed wheel that transfers motion", x:"Gears change the speed of a bicycle."},
    {t:"axle", d:"the rod on which a wheel turns", x:"The wheel spins on the axle."},
    {t:"velocity ratio", d:"the ratio of distances moved by effort and load", x:"Velocity ratio helps find efficiency."}
  ],
  facts:[
    {q:"State the formula for work.", a:"Work = force × distance."},
    {q:"In what unit is work measured?", a:"The joule (J)."},
    {q:"State the formula for mechanical advantage.", a:"Mechanical advantage = load ÷ effort."},
    {q:"A machine lifts a 100 N load with an effort of 25 N. Find the mechanical advantage.", a:"4 (100 ÷ 25)."},
    {q:"Why is no machine 100% efficient?", a:"Because some energy is always lost as heat due to friction."},
    {q:"Give two examples of compound machines.", a:"A bicycle and a wheelbarrow (also scissors, a crane)."}
  ],
  tf:[
    {s:"Work is measured in newtons.", a:"false", why:"Force is in newtons; work is in joules."},
    {s:"A machine with a mechanical advantage of 3 multiplies your force three times.", a:"true", why:"MA is how many times the load exceeds the effort."},
    {s:"Friction reduces the efficiency of a machine.", a:"true", why:"Energy is lost as heat to friction."},
    {s:"A bicycle is a simple machine.", a:"false", why:"It combines several simple machines, so it is compound."},
    {s:"Oiling a machine can improve its efficiency.", a:"true", why:"Lubrication reduces friction losses."}
  ],
  classify:{ title:"Simple or compound machine?", groups:[
    {name:"Simple machines", items:["lever","pulley","screw","wedge","inclined plane"]},
    {name:"Compound machines", items:["bicycle","wheelbarrow","scissors","crane"]},
    {name:"Ways to raise efficiency", items:["oil the parts","reduce friction","keep parts clean","replace worn bearings"]}
  ]},
  diagram:{ title:"Simple machines inside a bicycle", caption:"Name the simple machine each part represents.", parts:[
    {p:"Wheels and axles", f:"Wheel and axle — reduce friction and carry the rider"},
    {p:"Pedals and cranks", f:"Lever — the foot's effort turns the crank"},
    {p:"Brake levers", f:"Lever — a small hand force creates a large braking force"},
    {p:"Gears and chain", f:"Wheel and axle system — transfers motion to the back wheel"},
    {p:"Nuts and bolts", f:"Screw — hold the parts firmly together"}
  ]},
  experiment:{
    title:"Measuring Mechanical Advantage of a Pulley",
    aim:"To calculate the mechanical advantage of a simple pulley system.",
    materials:["A pulley or a smooth round rod","String","A load such as a tin of sand","A spring balance or rubber band scale"],
    steps:["Measure the weight of the load with the spring balance and record it as the load in newtons.","Set up the string over the pulley with the load on one end.","Pull the other end with the spring balance until the load rises steadily; record this as the effort.","Calculate mechanical advantage = load ÷ effort.","Repeat with a second pulley added and compare the two results."],
    expect:"Adding a second pulley reduces the effort needed, giving a higher mechanical advantage.",
    why:"More supporting strings share the load, so the effort needed falls — though the rope must be pulled a longer distance."
  },
  apply:[
    {q:"Calculate the work done when a force of 15 N pushes a box 6 m.", a:"90 joules (15 × 6)."},
    {q:"A boy lifts a 200 N load using an effort of 50 N. Find the mechanical advantage.", a:"4 (200 ÷ 50)."},
    {q:"Explain why a bicycle is called a compound machine.", a:"Because it is built from several simple machines — levers, wheels and axles, and screws — working together."}
  ],
  activities:["Pulley mechanical advantage investigation","Identify simple machines within compound machines","Work and MA calculations","Build a working model machine"],
  materials:["Pulleys, string, tins","Spring balance","Bicycle for study","Level textbooks"],
  assessment:["Calculation exercise","Investigation report","Model and presentation","Test"]
},
{
  grade:6, period:"VI", sem:"Two", icon:"🧪",
  title:"Elements, Compounds and Molecules",
  subtitle:"Symbols, formulae, mixtures and separation",
  outcomes:["Distinguish between elements, compounds and mixtures and use chemical symbols"],
  objectives:["Define element, compound and mixture","Write the symbols of common elements","Explain how compounds are formed","Describe methods of separating mixtures"],
  note:"An <b>element</b> has one kind of atom (oxygen, O). A <b>compound</b> has different atoms chemically joined (water, H₂O). A <b>mixture</b> is substances merely mixed and can be separated physically.",
  focus:["Elements and symbols","Compounds and formulae","Mixtures","Separating mixtures","Common chemical substances"],
  terms:[
    {t:"element", d:"a substance made of only one kind of atom", x:"Iron is an element."},
    {t:"compound", d:"a substance of different atoms chemically joined", x:"Water is a compound."},
    {t:"mixture", d:"substances mixed but not chemically joined", x:"Sand and salt form a mixture."},
    {t:"symbol", d:"a short letter code for an element", x:"Fe is the symbol for iron."},
    {t:"formula", d:"symbols showing what a compound contains", x:"H₂O is the formula for water."},
    {t:"molecule", d:"two or more atoms joined together", x:"O₂ is an oxygen molecule."},
    {t:"filtration", d:"separating a solid from a liquid using filter paper", x:"Filtration removes sand from water."},
    {t:"evaporation", d:"separating a dissolved solid by boiling off the liquid", x:"Evaporation recovers salt."},
    {t:"distillation", d:"separating liquids by boiling and condensing", x:"Distillation purifies water."},
    {t:"magnetic separation", d:"using a magnet to remove iron", x:"Magnetic separation removes iron filings."},
    {t:"solution", d:"a solid dissolved evenly in a liquid", x:"Salt water is a solution."},
    {t:"residue", d:"the solid left on the filter paper", x:"Sand is the residue."}
  ],
  facts:[
    {q:"What is an element?", a:"A substance made of only one kind of atom."},
    {q:"Give the symbols for oxygen, hydrogen and carbon.", a:"O, H and C."},
    {q:"What is the chemical formula for water?", a:"H₂O."},
    {q:"State one difference between a compound and a mixture.", a:"A compound is chemically joined in fixed proportions; a mixture is not joined and can be separated physically."},
    {q:"Name the method used to separate sand from water.", a:"Filtration."},
    {q:"Name the method used to recover salt from salt water.", a:"Evaporation."}
  ],
  tf:[
    {s:"Water is an element.", a:"false", why:"Water is a compound of hydrogen and oxygen."},
    {s:"A mixture can be separated by physical methods.", a:"true", why:"Its parts are not chemically joined."},
    {s:"The symbol for iron is Ir.", a:"false", why:"The symbol for iron is Fe."},
    {s:"H₂O shows that water has two hydrogen atoms and one oxygen atom.", a:"true", why:"The subscript 2 applies to hydrogen."},
    {s:"A magnet can be used to separate iron filings from sand.", a:"true", why:"Iron is magnetic; sand is not."}
  ],
  classify:{ title:"Element, compound or mixture?", groups:[
    {name:"Elements", items:["oxygen","iron","carbon","gold"]},
    {name:"Compounds", items:["water","salt","carbon dioxide","sugar"]},
    {name:"Mixtures", items:["air","sea water","soil","sand and salt"]}
  ]},
  diagram:{ title:"Methods of separating mixtures", caption:"Write when each method is used.", parts:[
    {p:"Filtration", f:"Separates an insoluble solid from a liquid, e.g. sand from water"},
    {p:"Evaporation", f:"Recovers a dissolved solid by boiling off the liquid, e.g. salt from sea water"},
    {p:"Distillation", f:"Separates a liquid from a solution by boiling and condensing, e.g. pure water"},
    {p:"Magnetic separation", f:"Removes magnetic material, e.g. iron filings from sand"},
    {p:"Hand picking / sieving", f:"Separates solids of different sizes, e.g. stones from rice"}
  ]},
  experiment:{
    title:"Separating a Mixture of Salt and Sand",
    aim:"To separate a mixture using filtration and evaporation.",
    materials:["A mixture of salt and sand","Water","A beaker or tin","Filter paper or clean cloth","A funnel","A source of heat (teacher-supervised)"],
    steps:["Put the salt and sand mixture in the beaker and add water.","Stir well until all the salt has dissolved.","Filter the mixture through the filter paper; the sand stays as residue.","Collect the clear salty water (the filtrate) in a clean dish.","Heat the filtrate gently, under teacher supervision, until the water evaporates and salt crystals remain."],
    expect:"Sand is collected on the filter paper and dry salt is recovered in the dish.",
    why:"Salt is soluble and passes through the filter; sand is insoluble and is trapped. Evaporation then recovers the dissolved salt."
  },
  apply:[
    {q:"Why can the parts of a mixture be separated but not those of a compound?", a:"In a mixture the substances are not chemically joined, so physical methods work; in a compound the atoms are chemically bonded."},
    {q:"How would you obtain clean drinking water from muddy water?", a:"Filter it to remove the solids, then boil or distil it to kill germs and purify it."},
    {q:"Air is described as a mixture. Give one reason why.", a:"Its gases are not chemically joined and can be separated by physical means."}
  ],
  activities:["Separate a salt and sand mixture","Write symbols and formulae for common substances","Classify substances as element, compound or mixture","Build molecule models"],
  materials:["Salt, sand, filter paper, funnels","Beakers and heat source","Periodic table chart","Level textbooks"],
  assessment:["Practical separation report","Symbol and formula test","Quizzes","Final test"]
}
];

const SC_GENERAL = {
  intro:"General Science develops in learners the knowledge, skills and attitudes needed to understand the natural world, to investigate it scientifically, and to apply that understanding to daily life and to the development of Liberia.",
  objectives:[
    "Use the senses and simple instruments to observe, measure and record accurately.",
    "Investigate scientific questions through fair testing and report the findings.",
    "Apply scientific knowledge to health, agriculture, the environment and technology.",
    "Appreciate and conserve the natural resources of Liberia."
  ],
  approach:"Inclusive and differentiated learning: mixed groups or individuals according to abilities, gender, learning styles, disabilities and age, engaged in practical investigation, discussion and reporting."
};
