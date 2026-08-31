/* Curriculum data — Republic of Liberia, Elementary GENERAL SCIENCE, Grades 1–6
   Derived from the "General Science 1-6" curriculum guide (78 pp.), 6 periods per grade.

   Every unit carries a `study[]` block list — the course text of the guide,
   rendered verbatim on the Study Notes page (see data-sc79.js for the Junior
   High half of the same subject). `**bold**` marks the key terms; table cells
   take no markup because the renderer escapes them.

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
  study:[
    /* ---- course text: Semester One, Period I (guide pp. 2-3) ---- */
    {k:"h3", t:"What is Science?"},
    {k:"p", t:"**Science** is the study of the world around us – the sky, the land, the water, the plants, the animals and our own body. We do science when we look carefully, ask questions, and try to find the true answer."},
    {k:"p", t:"A **scientist** observes, asks a question, tests the question, and writes down what was found. You are already a scientist when you notice that a stone is heavier than a leaf of the same size."},
    {k:"rule"},
    {k:"h3", t:"The Five Senses"},
    {k:"p", t:"We observe with the **five senses**. Each sense has its own organ:"},
    {k:"table", head:["Sense","Organ","What it tells us","Example in the classroom"], rows:[
      ["Sight","Eyes","colour, size, shape, and whether a thing is moving","The red ball is bigger than the green one"],
      ["Hearing","Ears","loud or soft, high or low, near or far","The bell is louder than the whisper"],
      ["Smell","Nose","pleasant or bad smell","The onion smells sharp"],
      ["Taste","Tongue","sweet, sour, salty, bitter","The sugar is sweet, the lemon is sour"],
      ["Touch (feeling)","Skin of the hands","rough or smooth, hard or soft, hot or cold, wet or dry","The stone is hard and smooth"]
    ]},
    {k:"p", t:"Never taste or smell anything in science unless the teacher says it is safe. Some things that look like food are poisons."},
    {k:"rule"},
    {k:"h3", t:"Physical Properties of Things"},
    {k:"p", t:"A **property** is something that describes an object. We describe things by their size, their shape, their colour and their weight."},
    {k:"bul", items:["**Size** – big, small, long, short, tall; compared with a ruler or with another object.","**Shape** – round, square, oval, flat, thick or thin; like a ball, a box or a stick.","**Colour** – red, blue, green, yellow, white and black, and the many mixtures of these.","**Weight** – how heavy a thing is; a stone is heavy for its size, a feather is light for its size.","**Other properties** – rough or smooth, hard or soft, wet or dry, whether light passes, whether it floats or sinks, whether it smells."]},
    {k:"p", t:"To **compare** is to say how things are the same and how they are different. When we compare, we must use the same sense and the same method for both things – a fair comparison."},
    {k:"rule"},
    {k:"h3", t:"Observation Skills"},
    {k:"num", items:["**Look** at the thing carefully, in a good light.","**Use more than one sense** – look, feel, listen, and smell only when it is safe.","**Compare** it with something you already know.","**Tell** what you saw in full sentences, naming the property.","**Write or draw** what you saw before you forget it."]},
    {k:"p", t:"A good observer notices what other people pass by. Draw the leaf you are holding: show its shape, its points, its lines and its colour, and write the sentence under it."}
  ],
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
  study:[
    /* ---- course text: Semester One, Period II (guide pp. 4-5) ---- */
    {k:"h3", t:"What is Matter?"},
    {k:"p", t:"**Matter** is anything that has weight and takes up space. Water, stone, air, milk, sand and your own body are matter. Light and heat are not matter, for they have no weight and take up no room."},
    {k:"p", t:"Everything you can hold, pour or breathe is matter. **Volume** is the space a thing takes up; **shape** is the form of an object."},
    {k:"rule"},
    {k:"h3", t:"The Three States of Matter"},
    {k:"table", head:["State","Shape","Volume","Examples"], rows:[
      ["Solid","Keeps its own shape","Takes up its own room","Stone, wood, chalk, rice, a sealed tin"],
      ["Liquid","Takes the shape of the container","Keeps the same amount","Water, palm oil, milk, petrol, juice"],
      ["Gas","Spreads to fill every part of the space","No fixed volume; it can be squeezed smaller","Air, steam, the smell of cooking, your breath"]
    ]},
    {k:"p", t:"A solid is hard to squeeze into less room; a liquid can be poured but is hard to squeeze; a gas is easy to squeeze – a bicycle pump shows it."},
    {k:"p", t:"Matter can change its state: **melting** is a solid changing into a liquid (ice in a cup), **freezing** is a liquid changing into a solid (water in the cold box), and **evaporation** is a liquid drying into vapour (a wet floor drying in the sun)."},
    {k:"rule"},
    {k:"h3", t:"Describing Shape, Volume and Colour"},
    {k:"bul", items:["A **shape** may be round, square, long, flat or oval – a ball is round in every direction, a book is flat and square.","**Volume** is compared by pouring: the big calabash holds more water than the small cup; the same water poured from cup into bowl still has the same volume.","**Colour** belongs to the surface and the light: the same stone may look grey in shade and brown in sunlight."]},
    {k:"p", t:"When matter is moved from one container to another its shape changes, but the amount of matter stays the same."},
    {k:"rule"},
    {k:"h3", t:"Force: A Push, a Pull or a Lift"},
    {k:"p", t:"A **force** is a push, a pull or a lift. You cannot see a force, but you see what a force does."},
    {k:"bul", items:["A **push** moves a thing away from you – pushing a wheelbarrow, pushing a door open.","A **pull** brings a thing towards you – pulling a rope, pulling the lid off a tin, drawing water from the well.","A **lift** raises a thing against the weight of the earth – lifting a bucket, raising the flag on the pole."]},
    {k:"rule"},
    {k:"h3", t:"How Forces Act on Matter"},
    {k:"p", t:"A force can change matter in five ways:"},
    {k:"num", items:["Make a still thing **move** – the ball starts when you kick it.","Stop or slow a moving thing – the hand catches the ball.","Change the **direction** – the player heads the ball back.","Change the **shape** – the clay is squeezed into a pot; the empty tin is crushed.","Change the **size** – the rubber band is stretched longer."]},
    {k:"p", t:"Some forces work when nothing is touching: the earth **pulls** things down (that is why the chalk falls), and a magnet pulls a nail through paper. **Muscular force** is the push and pull of our own arms and legs."}
  ],
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
  study:[
    /* ---- course text: Semester One, Period III (guide pp. 6-7) ---- */
    {k:"h3", t:"Characteristics of Living Things"},
    {k:"p", t:"A **living thing** shows all the works of life:"},
    {k:"bul", items:["**Grow** – it becomes bigger and longer (a baby, a seedling).","**Feed** – it must take in food or make food to live.","**Breathe** – it takes in air and lets out used air.","**Move and respond** – it changes position or answers a change around it.","**Reproduce** – it makes young ones of its own kind.","**Excrete** – it passes out the waste it does not need.","**Die** – every living thing ends its life."]},
    {k:"p", t:"A thing that shows none of these is **non-living**. A car moves and drinks petrol, but it does not grow, does not breathe and cannot have baby cars, so a car is non-living."},
    {k:"rule"},
    {k:"h3", t:"Living Things and Non-Living Things"},
    {k:"table", head:["Living things","Non-living things"], rows:[
      ["Grow and change as they age","Do not grow by themselves"],
      ["Need food, air and water","Need nothing to eat"],
      ["Feel and answer touch, light and sound","No feeling; they do not answer"],
      ["Make young ones – seeds, eggs, babies","Made only by people or by nature's work"],
      ["Examples: mango tree, goat, fish, mushroom, you","Examples: stone, water, chair, table, bicycle, sand"]
    ]},
    {k:"p", t:"Some things puzzle us: a **seed** in the store looks non-living but it is alive and resting – put it in wet soil and it grows. A **mushroom** is living although it is not a green plant and does not make food from sunlight."},
    {k:"rule"},
    {k:"h3", t:"The Two Great Groups: Plants and Animals"},
    {k:"bul", items:["**Plants** are living things that mostly stand in one place and make their own food from sunlight, air and water. They have roots, a stem, leaves and, at the season, flowers and seeds.","**Animals** are living things that move about and must eat plants or other animals. They have sense organs and answer at once to danger.","**Both** breathe, grow, feed, reproduce and die, so both are living. The **difference** is that a plant makes its own food and stays where it is rooted, while an animal hunts, walks, flies or swims for its food."]},
    {k:"rule"},
    {k:"h3", t:"The Usefulness of Plants to Human Beings"},
    {k:"bul", items:["**Food** – rice, cassava, cocoyam, plantain, vegetables, groundnut, oranges, mango and palm oil.","**Medicine** – leaves, barks and roots used for fever, worm, pain and sore.","**Shelter and fuel** – timber and bamboo for the house, thatch for the roof, firewood and charcoal.","**Clothing and rope** – cotton for cloth, raffia and bark for rope, mats and baskets for the home.","**Air and soil** – leaves give the oxygen we breathe, and roots hold the soil so the rain water stays instead of washing the farm away.","**Money** – rubber, cocoa, coffee, kola and timber that are sold.","**For the animals** – their food, their shade and their place to hide and to build."]},
    {k:"p", t:"A plant is useful while it lives and after it is cut; and the nation that wastes its forest wastes its own food, medicine and rain."}
  ],
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
  study:[
    /* ---- course text: Semester Two, Period IV (guide pp. 8-9) ---- */
    {k:"h3", t:"What the Earth Is Made Of"},
    {k:"p", t:"The world we live on is made of four great things: **rock**, **soil**, **air** and **water**. The map shows more water than land – about three parts water to one part land."},
    {k:"bul", items:["**Rock** – the hard solid part of the earth; the stone of the mountain and the river bed.","**Soil** – the loose, soft upper layer in which plants grow.","**Air** – the mixture of gases that wraps the earth and that we breathe.","**Water** – the sea, the river, the lake, the well and the rain."]},
    {k:"rule"},
    {k:"h3", t:"Rock and Soil"},
    {k:"p", t:"A **rock** is a hard mass of mineral matter, found in the hill, in the bed of the river, at the sea shore and in the pit. Rock is worn down by rain, heat, roots and running water; the round stones in the river have been ground smooth by the water."},
    {k:"p", t:"**Soil** is the loose top layer of the earth, made from worn-down rock and from decayed plants and animals."},
    {k:"table", head:["Kind of soil","What it feels like","How it drains and what it suits"], rows:[
      ["Sandy soil","Loose and gritty; the grains rub apart","Water runs through at once; suits melon and cassava; needs manure"],
      ["Clayey soil","Sticky when wet, hard and cracked when dry","Holds water and drains badly; good for the rice swamp, for pots and for brick"],
      ["Loamy soil","Dark, soft and crumbly","Holds enough water and still drains; the best soil for most crops, rich in humus"]
    ]},
    {k:"bul", items:["**Fertile** soil is soil rich in humus, in which plants grow well.","**Erosion** is the washing or blowing away of the soil; bare land on a hill loses soil quickly.","Soil is protected by cover crops, grass on the bunds, trees, ridging across the slope, and by not burning the bush."]},
    {k:"rule"},
    {k:"h3", t:"Natural Sources of Water"},
    {k:"num", items:["**Rain** – caught on the roof and in the tank.","**River and stream** – water flowing in a channel to the sea.","**Lake and pond** – water standing in a hollow of the land.","**Well** – water drawn from a hole dug down to the wet ground.","**Spring** – water that comes out of the ground by itself.","**Borehole and pipe-borne water** – brought up by a machine or carried in pipes to the town.","**Sea and ocean** – salt water; good for fish and transport, not for drinking."]},
    {k:"p", t:"Open stream and pond water must be **boiled, treated or filtered** before drinking, for dirty water carries the germs of cholera and diarrhoea."},
    {k:"rule"},
    {k:"h3", t:"The Water Cycle"},
    {k:"p", t:"Water moves round and round between the earth and the sky; the same water has been going round since the earth began."},
    {k:"num", items:["**Evaporation** – the sun changes water from the sea, the river and the wet ground into invisible **vapour**, which rises.","**Condensation** – high in the cold air the vapour turns back into tiny drops that cluster into **cloud**.","**Precipitation** – when the drops grow heavy they fall as **rain**.","**Collection** – the water runs into the stream, the lake and the ground, and stays until the sun lifts it again."]},
    {k:"p", t:"Make a little water cycle in the classroom: warm water in a bowl, a cover over it, set in the sun – drops form under the cover and run down its slope, as the cloud gives rain."}
  ],
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
  study:[
    /* ---- course text: Semester Two, Period V (guide pp. 10-11) ---- */
    {k:"h3", t:"Weather and Climate"},
    {k:"p", t:"**Weather** is the condition of the air from day to day – hot or cool, sunny or cloudy, rainy or dry, still or windy. It is what you look at when you choose what to wear."},
    {k:"p", t:"**Climate** is the usual weather of a place over many years, and it is what you plan a farm, a roof or a school year by. Liberia's climate is **tropical**: hot and wet all year, with two seasons."},
    {k:"rule"},
    {k:"h3", t:"The Seasons of Liberia"},
    {k:"table", head:["Season","About when","What it is like","What people do"], rows:[
      ["Rainy season","May to October; light rains begin in April","Rain falls nearly every day; the rivers rise; cool in the evening","Rice and cassava planted and weeded; bad roads; malaria is about"],
      ["Dry season","November to April","Little rain; hot sun; the grass dries","Harvesting, drying fish and cassava, building, market trading"],
      ["Harmattan","December to February","Dry dusty wind from the north-east; cool morning, hazy sky","Lips and eyes dry; dust settles everywhere; washing dries fast"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Wind, Storm and Their Effects"},
    {k:"p", t:"**Wind** is moving air. Air moves because the sun warms one place more than another: the warm air rises and cooler air rushes in to fill the room it left."},
    {k:"bul", items:["A gentle breeze cools the sweat, dries the washing and carries the seed and the smell of cooking.","Strong wind and storm tear off zinc roofs, break branches, uproot trees, drive the boat against the shore and raise the sea.","Before the storm: tie down or put away loose sheet and tin, clear the drain, and stay away from a big tree, a pole or a wall.","Never shelter under a lone tree during lightning; report a fallen wire at once and never touch a wire on the ground."]},
    {k:"rule"},
    {k:"h3", t:"Ventilation"},
    {k:"p", t:"**Ventilation** is the movement of fresh air into a room and of used air out of it. A room with good ventilation is a healthy room."},
    {k:"bul", items:["Windows, louvres, an opening above the door and an open roof space let hot bad air rise out while fresh air enters below.","Sleep with the air moving; a closed room full of sleeping people holds the germs of cough and TB.","Never burn charcoal, wood or a generator inside a closed room – the smoke and the gas can kill quietly.","Cut the tall grass near the window so wind can reach the house, and keep a screen against the mosquito."]},
    {k:"rule"},
    {k:"h3", t:"The Heavens above the Earth"},
    {k:"p", t:"The **heavenly bodies** are the sun, the moon, the stars and the planets. The **solar system** is the sun together with all the bodies that move round it: the eight **planets**, their **moons**, and the smaller asteroids and comets."},
    {k:"bul", items:["The **sun** is a star, a great ball of burning gas; it gives light and heat and holds the system together.","**Planets** give no light of their own – they shine because the sun lights them. In order from the sun: **Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune**.","The **earth** is the third planet and the only one known to have life, for it has air, water and the right heat.","The **moon** is the earth's satellite; it gives light at night, rules the tides, and seems to change shape in about 29½ days.","A **shooting star** is a small stone burning in the air, not a star.","An **eclipse** happens when the earth, the moon and the sun stand in one line so that one throws its shadow on another."]},
    {k:"p", t:"Never look straight at the sun, and never look at it through a glass or a telescope; the light can destroy the eye."}
  ],
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
  study:[
    /* ---- course text: Semester Two, Period VI (guide pp. 12-13) ---- */
    {k:"h3", t:"The Parts of the Body and What They Do"},
    {k:"table", head:["Part","Its work"], rows:[
      ["Head, eyes, ears, nose, tongue, teeth","Seeing, hearing, smelling, tasting and chewing; the head holds the brain that rules the body"],
      ["Neck","Holds up the head and lets it turn; carries the air pipe and the food pipe"],
      ["Chest and trunk","Protects the heart and the lungs; bends and twists; holds the body upright"],
      ["Arms, hands and fingers","Reaching, holding, writing, eating and working"],
      ["Legs and feet","Standing, walking, running and jumping"],
      ["Skin","Covers the whole body, feels, and keeps out dirt and germs"],
      ["Stomach and bowels","Hold the food and take the good part of it into the body"],
      ["Heart and lungs","The heart pushes the blood; the lungs take in the air"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Care of the Body"},
    {k:"bul", items:["Bathe every day with soap and wear clean, dry clothing.","Brush the teeth morning and night and after food; keep the nails cut.","Wash the hands with **soap and clean water** before eating and after the toilet.","Eat food from every group and drink safe, covered water.","Sleep enough hours; rest when tired; play or work the body every day.","Cover a cut with clean cloth; show the teacher any wound that is red, hot or running."]},
    {k:"rule"},
    {k:"h3", t:"Private and Non-Private Parts"},
    {k:"p", t:"**Private parts** are the parts of the body that under-clothing covers. They are private: no one should look at or touch them, and you should not show them to others. Hands, arms, face and back are non-private, so a friendly clap or a nurse's examination is not wrong."},
    {k:"bul", items:["No one may touch your private parts, ask you to touch theirs, or make you keep such a thing secret.","If anything like that happens: say **NO**, move away, and tell your parent, a teacher or a **trusted adult** the same day.","A **good touch** is safe and welcome; a **bad touch** is unwanted, secret, frightening or hurtful – and the feeling alone is reason enough to tell.","Telling is not being bad; the person who did it is the one at fault."]},
    {k:"rule"},
    {k:"h3", t:"Hand Washing"},
    {k:"num", items:["Wet the hands with clean water.","Rub soap all over – palm, back, between the fingers, thumbs and under the nails – counting to twenty.","Rinse well with clean water and dry on a clean cloth or in the air.","Do it before eating or cooking, after the toilet, after handling animals, money or rubbish, and after caring for a sick person."]},
    {k:"rule"},
    {k:"h3", t:"HIV and AIDS: What a Small Child Must Know"},
    {k:"p", t:"**HIV** is a very tiny germ (a virus) that weakens the body's power to fight sickness; untreated, it can pass into **AIDS**. A person living with HIV is still a person – a neighbour, a teacher, a relation – and must be treated with respect."},
    {k:"bul", items:["HIV passes only three ways: from an infected mother to her baby, through blood that enters a wound, and by sex with an infected person.","HIV does **not** pass by hugging, sharing a cup, eating together, playing, coughing or the mosquito – so the child who shares a desk is safe.","Never touch blood or an open wound with a bare hand; call an adult.","Medicine from the clinic keeps a person living with HIV strong; shame, the joke and the hiding are what kill."]},
    {k:"rule"},
    {k:"h3", t:"Good Substances and Bad Substances"},
    {k:"table", head:["Good for the body","Bad for the body"], rows:[
      ["Clean water, milk, soup, rice, cassava, vegetable, fruit, groundnut and fish","Tobacco smoke, cigarettes and snuff"],
      ["Medicine given by a health worker in the right amount","Alcohol – country gin, beer and wine: it damages the brain, the liver and the family"],
      ["Rest, play, fresh air and sunshine","Glue, petrol and other things sniffed for fun – they poison the brain"],
      ["Soap and clean water for bathing","Sweet packets and soda all day, and any drug not given by a health worker"]
    ]},
    {k:"p", t:"**Substance abuse** is using a harmful thing, or using medicine wrongly. A child says no to the cigarette and the bottle, walks away, and tells an adult. Nothing makes a boy or a girl great except a sound body and a sound mind."}
  ],
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
  study:[
    /* ---- course text: Semester One, Period I (guide pp. 14-15) ---- */
    {k:"h3", t:"Exploration: Finding Things Out"},
    {k:"p", t:"To **explore** is to search and to find out. Science is exploration: we go, we look, we test, and we bring back what we learned. The people who first explored the river, the forest and the mountain were doing science with their feet and their eyes."},
    {k:"p", t:"Every day a pupil explores: what lives under the stone? Why is the mud at the pond black? Which leaf does the goat eat? What happens to salt left in the sun?"},
    {k:"rule"},
    {k:"h3", t:"The Steps of an Investigation"},
    {k:"num", items:["**Ask a question** – say clearly what you want to find out: ‘Does sugar dissolve faster in warm water than in cold?’","**Predict** – say what you think will happen and give your reason; a **prediction** is a guess to be tested, not a fact.","**Test** – plan a **fair test**: change one thing only (the heat of the water) and keep everything else the same (the amount of water, of sugar, and the stirring).","**Observe** – watch closely with the senses and the instruments.","**Record** – write or draw what you see, and the numbers you get, as it happens.","**Report and conclude** – say what the result shows, and whether your prediction was right."]},
    {k:"p", t:"If the test shows something different from your prediction, the test is not a failure: you have learned something new. That is how science grows."},
    {k:"rule"},
    {k:"h3", t:"Recording and Reporting"},
    {k:"p", t:"**Data** is the information you collect; a **result** is what you found out; a **conclusion** is what you decide from the results. Record in the science notebook:"},
    {k:"bul", items:["The date, the title of the work and the names in the group.","The question and the prediction.","The things used (the apparatus and materials).","What was done, step by step, so that another person could repeat it.","The numbers and the sketch of what was seen.","The conclusion in one or two sentences, and what you would do differently."]},
    {k:"p", t:"When you report, speak slowly, show the record, use the correct word, and answer one question at a time."},
    {k:"rule"},
    {k:"h3", t:"Science Tools"},
    {k:"table", head:["Tool","What it is used for"], rows:[
      ["Hand lens (magnifier)","To make a small thing look bigger – the veins of a leaf, the leg of an ant"],
      ["Ruler, tape and metre rule","To measure length"],
      ["Balance and spring scale","To compare or measure weight"],
      ["Measuring cup, cylinder and beaker","To measure the volume of a liquid"],
      ["Thermometer","To measure how hot or cold a thing is"],
      ["Clock, watch and stopwatch","To measure time"],
      ["Magnets, string, nail, tin, candle and matches","To test pulling, burning and floating"],
      ["Notebook, pencil and paper","To record what was found"],
      ["Glove, goggle and first-aid box","To keep the worker safe"]
    ]},
    {k:"p", t:"**Safety in the laboratory**: do not taste or drink; do not put the nose to a container – fan the air toward you; tie back long hair; keep water away from the flame; report a spill, a burn or a break at once; wash the hands when the work is finished."}
  ],
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
  study:[
    /* ---- course text: Semester One, Period II (guide pp. 16-17) ---- */
    {k:"h3", t:"Sources of Water"},
    {k:"p", t:"Water for drinking and for use comes from **rain** caught on a roof or in a tank, **rivers and streams**, **ponds and lakes**, **wells**, **springs**, **boreholes** and **pipe-borne water** brought to the house or the standpipe."},
    {k:"bul", items:["Water from a protected spring, borehole or treatment plant is safe; water from an open stream or pond must be **boiled, treated with chlorine or filtered**.","Keep water in a clean covered container with a tap, and never dip a dirty cup or hand into it.","Boil and cover the water of a child under five, and of anyone with diarrhoea."]},
    {k:"rule"},
    {k:"h3", t:"Evaporation and Condensation"},
    {k:"p", t:"**Evaporation** is a liquid changing into vapour and going into the air: wet cloth hung out dries, and a puddle disappears."},
    {k:"bul", items:["Evaporation is faster when the air is **hot** or **dry**, when the **wind** moves, and when the water is spread in a shallow dish.","This is how salt is won from sea water in shallow pans, and why the farmer shades the seedbed to keep the damp."]},
    {k:"p", t:"**Condensation** is the opposite: vapour cooling and turning back into liquid – drops on a cold tin, mist on a mirror, and the cloud in the sky."},
    {k:"rule"},
    {k:"h3", t:"Soluble and Insoluble Substances"},
    {k:"p", t:"To **dissolve** is to mix completely into a liquid until the solid seems to have gone. **Salt and sugar dissolve** – they are **soluble**. **Sand, stone, flour and chalk do not dissolve** – they are **insoluble**; they settle or make the water cloudy."},
    {k:"bul", items:["A **solution** is the liquid formed when something has dissolved; the water is the **solvent** and the salt the **solute**.","Stirring, warmer water, and powdering the solid all make dissolving **faster**.","To separate a dissolved solid, boil off the liquid; to separate an insoluble solid, let it settle or pour the water through cloth or paper."]},
    {k:"p", t:"Test it: put salt, sugar, sand and groundnut shell each into water with a stir – which vanish, and which stay?"},
    {k:"rule"},
    {k:"h3", t:"The Properties of Air"},
    {k:"p", t:"**Air** is the mixture of gases around us. It is matter: it has weight and takes up space, though we cannot see it."},
    {k:"num", items:["Air has **weight** – a blown balloon tips the balance against the flat one.","Air **occupies space** – an upside-down glass pushed into water keeps the tissue dry, because the air inside will not let the water in.","Air can be **squeezed** into less room and springs back – a pump, a football, a tyre.","**Moving air is wind**; it turns a sail, dries the washing and blows over a loose sheet of zinc.","Air holds the part living things need for breathing; a candle shut under a glass dies when that part is used up."]},
    {k:"rule"},
    {k:"h3", t:"Sound Energy and Communication"},
    {k:"p", t:"**Sound** is a form of energy we hear, and it is made when something **vibrates** – moves quickly to and fro. Touch the throat while you hum: it is shaking. Pluck a rubber band: it vibrates and sings."},
    {k:"bul", items:["Sound travels from the vibrating thing through a **medium** – air, water, wood, string – and it cannot travel through empty space.","Sound travels better through solids and liquids than through air: a child hears a scratch by putting an ear to the table.","Sound may be **loud or soft** and **high or low**; hard smooth surfaces throw it back as an **echo**.","Sound serves **communication**: the voice, the bell, the whistle, the horn, the talking drum, the town crier, the telephone and the radio.","Protect the ear: do not shout into a friend's ear, keep the earphone low, and cover the ear at the loud speaker or the machine."]},
    {k:"p", t:"Try it: make a string telephone with two cups and a tight string – does the whisper travel? Then slacken the string: is the message lost?"}
  ],
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
  study:[
    /* ---- course text: Semester One, Period III (guide pp. 18-19) ---- */
    {k:"h3", t:"The Major Parts of the Body"},
    {k:"table", head:["Division","Parts it holds","What it does"], rows:[
      ["Head","Eyes, ears, nose, mouth, teeth and tongue; inside it the brain","Sees, hears, smells, tastes and chews; rules the whole body"],
      ["Trunk","Neck, chest and back; inside the heart, lungs and the organs of digestion; outside the skin","Holds and protects the living organs; bends and breathes"],
      ["Limbs","Two arms with hands and fingers; two legs with feet and toes","Reaching, holding and working; standing, walking, running and jumping"]
    ]},
    {k:"rule"},
    {k:"h3", t:"The Work of the Body Parts"},
    {k:"bul", items:["The **brain**, kept safe inside the skull, thinks, remembers and sends word to every part; the **spinal cord** carries the messages down the back.","The **heart**, a muscle about the size of your fist, pushes blood through the **blood vessels** all round the body; it never rests.","The **lungs** take in the fresh part of the air and let out the used part; breathing is faster after running.","The **stomach** and **bowels** hold and squeeze the food and take the good part into the blood; the waste passes out.","The **skin** covers, feels, protects and cools the body by sweat; it is the largest organ.","The **sense organs** report the world to the brain."]},
    {k:"rule"},
    {k:"h3", t:"How the Boy's Body and the Girl's Body Differ"},
    {k:"bul", items:["The chief difference at this age is in the **outside private parts**: a boy has a penis and the scrotum; a girl has the vulva and, inside, the ovaries and the womb that will one day carry a child.","In every other organ the body works the same way, and boys and girls are the same in worth and in ability.","Later, at puberty, the changes grow bigger – the boy's voice breaks and the face grows hair; the girl's breasts develop and monthly bleeding begins. Both are normal, and nobody should be mocked for them.","Any part that hurts, swells, itches or bleeds without cause must be shown to a parent or a health worker."]},
    {k:"rule"},
    {k:"h3", t:"Sensitive and Private Parts"},
    {k:"p", t:"Some parts are **sensitive** – they feel sharply and must be protected: the eye, the ear, the nose, the mouth and teeth, the private parts and the head. **Private parts** are those covered by under-clothing; they are yours alone."},
    {k:"bul", items:["Eye: read in good light, do not rub with dirty hands, get help at once for a sore or a white film.","Ear: keep it dry, never push a stick or match into it, see the health worker if it runs with water.","Nose and teeth: blow one side at a time, brush twice daily, do not pick the nose.","Skin and private parts: bathe, wash between the fingers and toes, keep them clean and dry, wear clean clothing, and never share a towel, a razor or a comb."]},
    {k:"rule"},
    {k:"h3", t:"Personal Safety"},
    {k:"num", items:["Know your own name, your parents' names, your home area and a telephone number.","Go with others, and tell an adult where you are going and when you will return.","Never go away with a stranger, get into a car, or take a gift that asks for secrecy.","Say NO loudly, run to where people are, and tell a **trusted adult** the same day if anybody frightens or touches you.","Keep away from fire, the sharp cutlass, the uncovered pit, deep water and moving vehicles.","A trusted adult may be a parent, auntie, teacher, head teacher, counsellor, nurse, pastor or imam – you never get into trouble for telling a grown person what hurt you."]}
  ],
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
  study:[
    /* ---- course text: Semester Two, Period IV (guide pp. 20-21) ---- */
    {k:"h3", t:"The Parts of a Plant and Their Work"},
    {k:"table", head:["Part","Where it is","Its work","What we see of it"], rows:[
      ["Root","Under the ground as a rule","Holds the plant firm and takes in water and the goodness of the soil; stores food in some plants","Carrot, onion, cassava, yam"],
      ["Stem","Above the ground, or running along it","Holds up the leaves and flower; carries water up and food down","Sugarcane, bamboo, the trunk of a tree"],
      ["Leaf","Spread to the light on the stem","Makes the plant's food using sunlight; gives out water and the air we need","Cassava leaf, orange leaf, the broad cocoyam leaf"],
      ["Flower","At the end of a stem","Makes the seed so new plants can come; often bright or fragrant","Hibiscus, mango flower, the cacao flower"],
      ["Fruit","Grown from the flower","Holds and protects the seed","Mango, orange, tomato, pepper, the palm nut"],
      ["Seed","Inside the fruit","Carries a young plant waiting to grow into the same kind","Rice grain, bean, groundnut, the mango stone"]
    ]},
    {k:"p", t:"A seed needs **water, warmth and air** to start growing. Plant a bean in wet cotton wool and watch which end comes up first."},
    {k:"rule"},
    {k:"h3", t:"Grouping Plants: Trees, Shrubs and Herbs"},
    {k:"table", head:["Group","Stem","Size and life","Examples"], rows:[
      ["Tree","One thick woody stem (trunk)","Tall; lives many years","Mango, orange, oil palm, coconut, rubber, iroko"],
      ["Shrub","Several woody stems from near the ground","Short and bushy","Hibiscus, coffee, the hedge plant"],
      ["Herb","Soft green stem","Small; often one season","Cassava, pepper, tomato, okra, grass"],
      ["Climber and creeper","Weak stem that must climb or run","Long and spreading","Yam, beans, cucumber, melon"]
    ]},
    {k:"p", t:"Plants are also grouped by use: **food crops** (rice, cassava), **cash crops** (rubber, cocoa, coffee, oil palm), **medicine**, **timber**, and plants grown for **beauty**."},
    {k:"rule"},
    {k:"h3", t:"Plant Habitats"},
    {k:"p", t:"A **habitat** is the place where a plant or animal lives, with all the conditions it needs. A plant is fitted for its own habitat; move it and it may fail."},
    {k:"bul", items:["**Water** – the river, pond and swamp: water lily, and the mangrove with its breathing roots.","**Dry and sandy land** – coconut and melon, with long roots and leaves that lose little water.","**Wet shaded forest** – cocoyam and fern, with broad thin leaves that catch the little light.","**On other plants** – the epiphyte (fern, orchid) sits on a branch and takes its food from rain and air.","**Farm and waste place** – grasses and weeds that grow fast and bear cutting and burning."]},
    {k:"rule"},
    {k:"h3", t:"Uses of Plants"},
    {k:"bul", items:["**Food and drink** – the crops, the fruit, palm wine and cane juice.","**Medicine** – neem and fevergrass for fever, the barks and roots of the old people.","**Shelter, tools and fuel** – timber, bamboo, thatch, raffia, firewood and charcoal.","**Cloth, rope and fibre** – cotton, bark cloth and raffia.","**Money** – rubber latex, cocoa, coffee, kola and timber.","**For the animals and the land** – leaves for food and shade, roots holding the soil, flowers feeding the bees, and fallen leaves making the soil rich."]},
    {k:"p", t:"Plants also give the air we breathe and the rain that follows a forest. Cut all the trees and the water, the animals and the harvest go with them."}
  ],
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
  study:[
    /* ---- course text: Semester Two, Period V (guide pp. 22-23) ---- */
    {k:"h3", t:"Ways of Grouping Animals"},
    {k:"bul", items:["By **where they live** – on land, in water, in the air, or in both.","By **what they eat** – plants, meat, or both.","By **the body covering** – fur, feathers, scales or bare skin.","By **the young one** – hatched from an egg or born alive.","By **relationship with people** – domestic or wild.","By **the backbone** – animals with a backbone and animals without."]},
    {k:"rule"},
    {k:"h3", t:"Domestic and Wild Animals"},
    {k:"table", head:["Domestic animals – kept and cared for by people","Wild animals – living on their own in the bush"], rows:[
      ["Goat, sheep, cow, pig, dog, cat, fowl, duck, guinea fowl, donkey, horse","Lion, leopard, elephant, buffalo, antelope, bush pig, monkey, snake, crocodile, civet, porcupine"]
    ]},
    {k:"p", t:"A domestic animal depends on people for food, water, shelter and care: the owner must feed it, water it, keep its place clean and dry, and call the animal health worker when it is sick. A wild animal is not a pet – never take a bush baby from the forest."},
    {k:"rule"},
    {k:"h3", t:"Animal Habitats"},
    {k:"bul", items:["**Land** – goat, cow, termite, snake; the animals of savannah and forest.","**Water** – fish, crab, periwinkle, frog, hippo and the water birds.","**Air** – birds that build in the tree, bats and flying insects.","**In the trees** – monkey, squirrel, the bird's nest and the ants' ground under the tree.","**Under the ground and in rubbish** – earthworm, ant, termite, rat and maggot.","Every animal needs a habitat that gives food, water, shelter and a place to bring up its young; when the forest or the river is spoiled, the animals leave or die."]},
    {k:"rule"},
    {k:"h3", t:"Herbivore, Carnivore and Omnivore"},
    {k:"table", head:["Feeding group","What it eats","Teeth and jaw","Examples"], rows:[
      ["Herbivore","Only plants – grass, leaf, fruit, seed","Flat grinding teeth; a wide mouth and a big belly for the mass of grass","Cow, goat, sheep, rabbit, grasscutter, tortoise"],
      ["Carnivore","Only flesh or other animals","Sharp pointed tearing teeth and strong jaws","Lion, leopard, dog, cat, crocodile, spider"],
      ["Omnivore","Both plants and animals","A mixture of cutting, tearing and grinding teeth","Pig, fowl, rat, monkey, ant – and you"]
    ]},
    {k:"p", t:"The teeth and the shape of the mouth tell you what an animal eats – that is why the cow grinds and the dog tears. Frogs, bats and swallows eat insects and are the farmer's helpers."},
    {k:"rule"},
    {k:"h3", t:"The Young Ones of Animals"},
    {k:"bul", items:["**Hatched from eggs** – fowl, duck, guinea fowl, most birds, snakes, crocodiles, frogs, fish and insects. The hen sits on the eggs to warm them until the chick is ready.","**Born alive and suckled** – goat, sheep, cow, dog, cat, pig, rabbit and monkey; these are **mammals**, and the young one drinks milk.","**Birds** have feathers, wings and a beak and lay hard-shelled eggs; **reptiles** have dry scaly skin; **fish** breathe in water with **gills**; an **insect** has six legs and three body parts.","**Metamorphosis** – the frog's young one (tadpole) lives in water and breathes like a fish, then grows legs and leaves the water; the butterfly begins as a caterpillar.","Mammals and birds feed and guard their young; fish and frogs lay many eggs and mostly leave them."]},
    {k:"p", t:"Watch a hen with her brood or a cat with her kittens, and write down what the parent does and what the young one learns."}
  ],
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
  study:[
    /* ---- course text: Semester Two, Period VI (guide pp. 24-25) ---- */
    {k:"h3", t:"What Is a Drug?"},
    {k:"p", t:"A **drug** is any substance that changes the way the body or the mind works. **Medicine** is a drug used to treat or prevent sickness. Tobacco, alcohol and glue are drugs too – they change the body, and they change it badly."},
    {k:"p", t:"Only a **health worker** – doctor, nurse, pharmacist or licensed seller – should give medicine, and a child takes only what a grown person puts in the hand."},
    {k:"rule"},
    {k:"h3", t:"Useful Medicines"},
    {k:"bul", items:["**Tablets, syrup, capsules and injections** – given by dose for fever, pain, worm, cough and infection.","**Ointment, cream and powder** – applied to skin sore, itching and wound.","**Oral rehydration salts (ORS)** – powder mixed in clean water to replace what is lost in diarrhoea.","**Vaccine** – the drops or the prick that teach the body to fight a disease before it comes (polio, measles, TB, yellow fever).","**Traditional medicine** – the leaves and barks of our people; tell the health worker what has been taken, and never use a mixture of unknown strength."]},
    {k:"p", t:"**Antibiotics** kill certain germs but do nothing to a cold caused by a virus; taking them without need makes the germs harder to kill. Always finish the whole dose as instructed."},
    {k:"rule"},
    {k:"h3", t:"Medicine Safety Rules"},
    {k:"num", items:["Take medicine only from a grown person, at the time and in the amount on the label or told by the health worker.","Read the label: the name, who it is for, the dose and the **expiry date** – medicine after that date is unsafe.","Never take a loose, unmarked tablet found on the floor, and never a friend's medicine.","Keep medicine in its own bottle, high up and away from little children.","Store where heat and sunlight will not spoil it.","Never share a bottle or a used needle – a needle used twice can carry disease.","If someone swallows the wrong thing, tell an adult at once and take the bottle or label with the person to the clinic."]},
    {k:"rule"},
    {k:"h3", t:"Harmful Substances and Drug Abuse"},
    {k:"p", t:"**Drug abuse** is using a drug wrongly or taking a harmful thing for pleasure. The common abuses near us are **tobacco**, **alcohol**, sniffed **glue, petrol or thinners**, **cannabis (ganja)**, and pills taken for a 'high'."},
    {k:"table", head:["Substance","What it does"], rows:[
      ["Tobacco smoke","Chest disease and cough, damage to heart and blood vessels, yellow teeth and bad breath"],
      ["Alcohol","Confuses the brain, ruins the liver, makes the person careless or violent, and wastes the family money"],
      ["Sniffed glue, petrol and thinners","Poison the brain and may stop the heart in a single use; damage nose, lungs and nerves"],
      ["Cannabis and street drugs","Spoil memory and the wish to work, cause fear and madness, and lead into crime and debt"],
      ["Medicine taken wrongly or too much","May stop the breathing, ruin stomach and kidney, hide a sickness, and kill"]
    ]},
    {k:"p", t:"The user becomes less free, not more: the habit – an **addiction** – grows, and the body, the money and the family all pay. The boy or girl who never starts is never caught."},
    {k:"rule"},
    {k:"h3", t:"Saying No and Getting Help"},
    {k:"num", items:["Say **NO** firmly at once, without laughing and without apology.","Give one reason and stop arguing – ‘No, it damages me.’","Leave the place and the company; go where people are.","Tell a trusted adult the same day.","Offer a friend the way out: the game, the club, the clinic, and tell an adult for him."]},
    {k:"bul", items:["**Refuse – reason – run – report**: the four steps a child can always use.","Addiction is a sickness, not a shame: the person caught needs treatment, counselling and family support, not mockery.","A clean, busy body with a trade in the hand is the best defence there is."]}
  ],
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
  study:[
    /* ---- course text: Semester One, Period I (guide pp. 26-27) ---- */
    {k:"h3", t:"The Layers of the Earth"},
    {k:"num", items:["**Crust** – the thin, hard, rocky skin on which we live; the land and the sea floor.","**Mantle** – the thick layer of very hot rock below the crust; part of it is soft and moves slowly.","**Outer core** – hot moving iron and nickel, which gives the earth its magnetism.","**Inner core** – the very hot solid centre, white-hot under enormous pressure."]},
    {k:"p", t:"The crust is broken into great slow-moving slabs. Where they rub, split or meet there are **earthquakes**, and where the hot rock inside forces out there are **volcanoes** and lava."},
    {k:"rule"},
    {k:"h3", t:"Landforms"},
    {k:"p", t:"A **landform** is a natural feature of the land's surface, made by the slow work from inside the earth and by rain, rivers, wind and ice wearing from outside."},
    {k:"table", head:["Landform","What it is","Near us or in Africa"], rows:[
      ["Mountain","A very high area of land with steep sides","Mount Nimba and Mount Wuteveh; Kilimanjaro in East Africa"],
      ["Hill and plateau","A lower rounded height; a wide upland with steep edges","The rolling hills and the plateau belt of the interior"],
      ["Valley","The low land between hills, usually with a stream","The valleys of the St. Paul and the St. John"],
      ["Plain","Flat or gently rolling open land","The coastal plain with its lagoon and sand"],
      ["Delta and estuary","The flat land of mud at a river mouth","The mouths of the St. John, the Cestos and the Niger"],
      ["Desert, dune and oasis","Bare sandy land; the watered place in it","The Sahara and its oases"],
      ["Cliff and cape","A steep rock face; land running out into the sea","Cape Mount, Cape Mesurado, Cape Palmas"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Bodies of Water"},
    {k:"bul", items:["**Ocean** – the very large body of salt water: the Atlantic off our coast, the Indian Ocean off East Africa, the great Pacific.","**Sea** – part of an ocean nearly shut in by land (the Mediterranean, the Red Sea).","**Strait, gulf and bay** – the narrow water between two lands; the sea that runs into the land (the Gulf of Guinea).","**River and stream** – water flowing in a channel; the **source** is where it rises, the **mouth** is where it ends, and **tributaries** are the smaller streams that join it.","**Lake and pond** – water standing in a hollow: Lake Piso in Grand Cape Mount; Lake Victoria, the largest in Africa.","**Swamp, marsh and mangrove** – land nearly always wet.","**Ground water and spring** – water soaked into the soil and rock that comes out again on the hill side."]},
    {k:"rule"},
    {k:"h3", t:"The Earth's Surface: Land and Water"},
    {k:"bul", items:["About **three-quarters of the earth's surface is water** and one-quarter land – the earth looks blue from space.","The land lies in the great **continents**: Asia, Africa, North America, South America, Antarctica, Europe and Australia. **Africa** is the second largest and is crossed through its middle by the **equator**.","Liberia lies on the west coast of Africa, a little north of the equator.","The **lithosphere** (crust and upper mantle) moves slowly on the hot rock below, so the map is never finished: mountains rise and the sea creeps in."]},
    {k:"p", t:"Model the earth in clay and cut it open to show crust, mantle and core; let the class see how thin the crust is beside the heart of the earth."}
  ],
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
  study:[
    /* ---- course text: Semester One, Period II (guide pp. 28-29) ---- */
    {k:"h3", t:"The Solar System"},
    {k:"p", t:"The **solar system** is the **sun** with everything that moves round it – the eight planets, their moons, the dwarf planets, the asteroids and the comets – all held in their paths by the pull of the sun. It lies in one arm of a great **galaxy**, the Milky Way, and a **galaxy** is a vast company of stars."},
    {k:"bul", items:["A **planet** is a large body moving round a star, shining by the star's light.","An **orbit** is the path one body takes round another.","A **satellite** is a body that moves round a planet; the moon is the earth's satellite.","**Gravity** is the pull that keeps the planets in orbit and keeps our feet on the ground."]},
    {k:"rule"},
    {k:"h3", t:"The Planets"},
    {k:"num", items:["**Mercury** – nearest the sun, small, scorching by day and freezing by night.","**Venus** – the brightest ‘morning star’; its thick cloud holds tremendous heat.","**Earth** – the third planet and the only one known to have life.","**Mars** – the red, cold planet with the greatest mountains known.","**Jupiter** – the largest planet, a giant of gas with many moons.","**Saturn** – the ringed gas giant.","**Uranus** – tipped on its side, very cold.","**Neptune** – farthest and coldest, with the fastest winds."]},
    {k:"p", t:"The four inner planets are small and rocky; the four outer are great and gaseous. The sun is by far the largest body of all – a million earths could be packed inside it."},
    {k:"rule"},
    {k:"h3", t:"Rotation, Revolution, Day and Night"},
    {k:"p", t:"The earth moves in two ways at once. It **rotates**, spinning on its **axis** (the imaginary line through the poles) once in about **24 hours**; it **revolves** round the sun once in about **365¼ days**."},
    {k:"bul", items:["**Day and night** come from rotation: the side turned to the sun has daylight, the side turned away has night.","**The seasons** come from revolution with the tilted axis, as each half of the earth leans now toward the sun and now away. In Liberia the seasons are **rainy** and **dry**, not hot and cold.","A **leap year** adds a day every fourth year for the quarter-day left over.","Because the earth turns 15° in an hour, places east of us are ahead in time and places west are behind: this is what makes **time zones**."]},
    {k:"rule"},
    {k:"h3", t:"The Moon"},
    {k:"bul", items:["The **moon** is the earth's only natural satellite – no air, no water, no light of its own, about 27 days round the earth.","Its **phases** – new moon, first quarter, full moon, last quarter – repeat in about 29½ days and give us the month.","The moon pulls the waters and makes the **tides** that rise and fall twice a day on our coast, and that fill the mangrove creeks.","A **solar eclipse** is the moon's shadow falling on the earth; a **lunar eclipse** is the earth's shadow falling on the moon. Never look at a solar eclipse with the naked eye or through a glass."]},
    {k:"rule"},
    {k:"h3", t:"Seeing Far into Space"},
    {k:"bul", items:["A **telescope** gathers light so that far things look near; the great ones are long tubes or bowl-shaped mirrors on tall stands.","A **spacecraft** carries people or machines beyond the air; **astronauts** are trained for it and **rockets** lift it by driving hot gas downward.","**Artificial satellites** circle the earth and carry television, telephone, the weather forecast and the position finder used by ships and planes.","A **constellation** is a known pattern of stars; the same sky has guided travellers on our roads for centuries."]},
    {k:"p", t:"Turn a ball slowly under a lamp in a dark room: one half is lit, the other dark – you are watching day and night being made."}
  ],
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
  study:[
    /* ---- course text: Semester One, Period III (guide pp. 30-31) ---- */
    {k:"h3", t:"Force and Its Types"},
    {k:"p", t:"A **force** is a push or a pull, measured in **newtons (N)** with a spring balance. A force is drawn as an arrow: the longer the arrow, the bigger the force."},
    {k:"bul", items:["**Muscular force** – the push and pull of muscles: carrying, digging, squeezing.","**Friction** – the force between rubbing surfaces that opposes movement; it wears the shoe and heats the palm.","**Gravity** – the pull of the earth on every object; it gives things their weight.","**Magnetism** – the pull (and push) of a magnet on iron and steel.","**Contact forces** (muscular, friction) need touching; **non-contact forces** (gravity, magnetism) act at a distance."]},
    {k:"rule"},
    {k:"h3", t:"Forms and Sources of Energy"},
    {k:"p", t:"**Energy** is the ability to do work. Nothing moves, glows, heats or grows without it."},
    {k:"table", head:["Form of energy","What it does","Where we meet it"], rows:[
      ["Light","Makes things visible; travels in straight lines","Sun, flame, torch, lamp"],
      ["Heat","Makes things warm; can change the state of matter","Fire, sun, rubbing the hands"],
      ["Sound","Is heard; travels by vibration","Voice, drum, bell"],
      ["Electrical","Runs machines and gives light","Power line, battery, generator"],
      ["Mechanical","The energy of movement and position","Wheelbarrow, falling stone, stretched band"],
      ["Chemical","Stored in matter, released when it changes","Food, firewood, petrol, battery"]
    ]},
    {k:"bul", items:["Almost every form of energy we use came first from the **sun** – food, wood, wind and falling water.","**Renewable** sources are replaced as fast as we use them: sunlight, wind, water, crops and regrown wood.","**Non-renewable** sources will finish: petroleum, gas, coal and minerals.","**Conserve** energy – douse the lamp, put the lid on the pot, use dry wood, and run the machine only for the work."]},
    {k:"rule"},
    {k:"h3", t:"Work"},
    {k:"p", t:"In science, **work** is done only when a force moves an object through a distance: work = force × distance, measured in **joules (J)**."},
    {k:"bul", items:["Holding a heavy load still is tiring, but it does no scientific work, because nothing moves.","Carrying the load twenty metres, or lifting it on to a lorry, is work.","Lifting against gravity: work = weight × height raised."]},
    {k:"rule"},
    {k:"h3", t:"Power"},
    {k:"p", t:"**Power** is the rate of doing work: power = work ÷ time, measured in **watts (W)**; 1,000 W is a kilowatt. Two pupils carry the same basin the same distance: the one who arrives first used more power though both did the same work. A machine that lifts in one minute what takes a man an hour gives sixty times the power."},
    {k:"rule"},
    {k:"h3", t:"The Six Simple Machines"},
    {k:"p", t:"A **machine** makes work easier or faster. A **simple machine** has few or no moving parts; it does not create work, but it changes the way force is applied so that a small effort moves a big load."},
    {k:"table", head:["Machine","Its shape","How it helps","Examples"], rows:[
      ["Lever","A stiff bar turning on a fulcrum","A long arm lets a small force lift a big load","Crowbar, wheelbarrow, seesaw, the forearm"],
      ["Pulley","A grooved wheel with a rope","Changes the direction of the pull and multiplies force","Well bucket, flag halyard, lifting a bag to the loft"],
      ["Wheel and axle","A wheel fixed to a rod","A big wheel turning a small axle multiplies force or speed","Bicycle, door knob, winch, steering wheel"],
      ["Inclined plane","A sloping surface","Less force to push a load up a slope than to lift it straight","Plank, hill road, loading ramp, slide"],
      ["Wedge","Two planes joined, thick to thin","Splits, cuts and holds","Knife, axe, chisel, tooth, nail point"],
      ["Screw","An inclined plane wrapped round a rod","Holds fast, or lifts with a turn","Screw and bolt, jar lid, clamp, spiral stair"]
    ]},
    {k:"p", t:"Find one example of each of the six in the classroom and the compound, draw it with its labels, and say what a **compound machine** – a bicycle, a wheelbarrow, a pair of scissors – is built from."}
  ],
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
  study:[
    /* ---- course text: Semester Two, Period IV (guide pp. 32-33) ---- */
    {k:"h3", t:"More Uses of Plants"},
    {k:"bul", items:["**Food** – every part is eaten: root (cassava, yam), stem (sugarcane), leaf (cassava leaf, potato greens), flower (squash blossom), fruit (mango), seed (groundnut, bean, rice).","**Medicine** – neem and fevergrass for fever, castor oil for the belly, the barks and roots of the old people, a clean leaf as a dressing.","**Shelter, tools and fuel** – timber, bamboo, thatch, raffia, firewood, charcoal and the palm kernel shell.","**Cloth, rope and fibre** – cotton, bark and raffia.","**Money** – rubber, cocoa, coffee, kola, palm oil and timber.","**For the land and the water** – roots hold the soil, leaves break the fall of rain, shade cools the ground, and the forest draws up the rain."]},
    {k:"rule"},
    {k:"h3", t:"Food Crops"},
    {k:"p", t:"A **food crop** is a plant grown to be eaten. The great food crops of Liberia are **rice**, **cassava**, **plantain**, **cocoyam**, **yam**, **maize**, **groundnut**, **beans and pigeon pea**, and the leafy vegetables, with the oil palm and the fruit trees beside them."},
    {k:"bul", items:["**Where** – rice in the swamp dike and on the upland; cassava on the ridge and hill side; plantain round the house; vegetable in the kitchen garden.","**How** – clear, ridge, plant with the first rain, weed twice, harvest when the grain or root is full, dry and store.","**Who** – the whole family: cutting and digging, planting and weeding, harvesting, pounding and drying.","**Care of the harvest** – dry it well, keep out rat and weevil, store in a raised granary or sealed drum, and save the best seed for the next season."]},
    {k:"rule"},
    {k:"h3", t:"Cash Crops of Liberia"},
    {k:"p", t:"A **cash crop** is a crop grown mainly to be sold. It brings the money that pays school fees, buys medicine, rice, cloth and a roof."},
    {k:"table", head:["Cash crop","How it is worked","What it gives"], rows:[
      ["Rubber","A spiral cut in the bark lets the latex run into the cup; the latex is coagulated, smoked and pressed into bale; small tappers sell lump to the collector","Wage work at the estate (Harbel in Margibi) and money for the small-holder; tyres, soles and gloves"],
      ["Oil palm","Bunches cut and carried; fruit boiled and pounded; oil pressed and kernel dried","Cooking oil, soap, and steady household money"],
      ["Cocoa","Grown in shade; pods split; beans fermented and sun-dried","Export and a price for the picker"],
      ["Coffee","Berries picked red, pulped, washed and dried","Export and the home drink"],
      ["Sugarcane","Cut, crushed, juice boiled to sugar","Drink, sugar and work at the mill"],
      ["Timber, cola and bamboo","Cut and gathered under a permit","Money to the county and the family – and a debt to the forest if it is not replanted"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Medicinal Plants"},
    {k:"bul", items:["Neem, fevergrass, senna and aloe; the barks used for fever, worm and pain; leaves laid on a swelling; steam for the chest.","Many world medicines began in forest plants – quinine came from a bark – and research still finds drugs in the forest.","Rules: know the plant exactly; use a clean pot and clean water; know the amount; give a child only a measured dose; tell the health worker what has been taken.","Never strip the bark from both sides of a tree; never dig the whole root when a leaf will serve; never gather the last plant of a kind in the bush.","If there is no better in a day or two, or the person is badly ill, go to the clinic. Traditional medicine and the clinic should help each other, not replace each other."]},
    {k:"rule"},
    {k:"h3", t:"Conserving the Plant Wealth"},
    {k:"bul", items:["**Deforestation** – trees cut faster than they return – leaves the bare hill, the dry stream, the washed soil, and the loss of medicine, bush meat and timber.","To **conserve** is to protect and use wisely: plant more than you cut, take only what you need, and leave the young growth.","Raise a **nursery**; plant on the boundary and in the town; leave a **forest reserve** and protect the watershed; keep fire out of the dry bush.","Cut on a plan and replant; use dry and small wood; cook on a stove that saves fuel.","The law helps: no tree of a reserved forest may be cut without permission, and a community may manage its own forest under the forestry law.","At school: keep a tree plot, plant with the first rain, water and guard it, and count what lives and what was lost."]},
    {k:"p", t:"The forest belongs to the town, the county and the nation together; the child who plants one tree that lives has done a nation's work."}
  ],
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
  study:[
    /* ---- course text: Semester Two, Period V (guide pp. 34-35) ---- */
    {k:"h3", t:"Properties of Matter"},
    {k:"bul", items:["**Mass** – the amount of matter in an object; it stays the same wherever the object goes.","**Volume** – the space the object takes up.","**Density** – how much mass is packed into a given volume; how heavy a thing is for its size.","**Solubility** – whether, and how much, a substance dissolves in water.","**Conductivity** – whether heat or electricity passes through (metal does; wood and plastic do not).","**Hardness, elasticity, brittleness** – whether it scratches, springs back, or snaps.","**Malleability and ductility** – whether it can be hammered thin or drawn to wire.","**Buoyancy and opacity** – whether it floats; whether light passes (transparent, translucent, opaque)."]},
    {k:"rule"},
    {k:"h3", t:"States of Matter and Their Particles"},
    {k:"table", head:["State","Shape and volume","The particles","What it shows"], rows:[
      ["Solid","Fixed shape and volume","Packed close in order, only vibrating","Keeps its form; may bend or break; hard to squeeze"],
      ["Liquid","No fixed shape, fixed volume","Close but free to slide","Flows; takes the vessel's shape; hard to squeeze"],
      ["Gas","No fixed shape or volume","Far apart and moving fast","Fills every corner; can be squeezed; presses the walls"]
    ]},
    {k:"p", t:"**Changing the state**: melting (solid to liquid by heat), freezing (liquid to solid by cold), evaporation and boiling (liquid to gas), condensation (gas to liquid), and sublimation (a solid to gas at once, like dry ice or the mothball). Heating and cooling are the levers: the same water is ice, water and steam, and nothing but heat has been added or taken away."},
    {k:"rule"},
    {k:"h3", t:"Measuring Mass and Volume"},
    {k:"bul", items:["**Mass** is measured with a **balance** or a spring scale in **grams (g)** and **kilograms (kg)**; 1,000 g = 1 kg. A bag of rice of 50 kg is a familiar mass.","**Volume of a liquid** is measured in **millilitres (mL)** and **litres (L)** with a **measuring cylinder** or graduated beaker; 1,000 mL = 1 L.","**Volume of a regular solid** = length × breadth × height; 1 mL = 1 cm³.","**Volume of an irregular solid** is found by **displacement**: read the water in the cylinder, sink the stone, and the rise is its volume.","Read a cylinder with the eye level with the surface, at the lowest point of the curve, and record the unit with the number."]},
    {k:"p", t:"**Density = mass ÷ volume.** Iron, water and oil of the same mass do not fill the same room: iron is dense and oil is light for its size. Wood less dense than water floats; the same water is heavier than an equal cup of oil."},
    {k:"rule"},
    {k:"h3", t:"Investigating Colour"},
    {k:"bul", items:["Colour is the light a thing returns to the eye: a red petal looks red because it sends back the red part of the light and takes the rest.","**Primary colours of pigment** – red, yellow and blue – cannot be mixed from others. **Secondary colours** come from mixing two: red + yellow = orange, yellow + blue = green, blue + red = purple.","Mixing all the paint primaries gives a near black; mixing all the lights gives white – sunlight holds the colours of the rainbow.","The **spectrum** – red to violet – can be shown with a prism, or with a mirror standing in a bowl of water in the sunlight.","**Transparent** materials (clear water, clean glass) let light through; **translucent** (oiled paper, ground glass) let some; **opaque** (wood, stone, metal) let none and cast a shadow."]},
    {k:"p", t:"Try it: drop a scrap of the same coloured cloth into water with a little vinegar, into soapy water, and into ash water – see which changes colour, and write the result in the notebook."}
  ],
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
  study:[
    /* ---- course text: Semester Two, Period VI (guide pp. 36-37) ---- */
    {k:"h3", t:"The Elements of Weather"},
    {k:"table", head:["Element","What it means","Instrument"], rows:[
      ["Temperature","How hot or cold the air is","Thermometer (°C)"],
      ["Rainfall","The depth of rain fallen","Rain gauge"],
      ["Wind direction","The way the wind comes from","Wind vane"],
      ["Wind speed","How fast the wind moves","Anemometer"],
      ["Humidity","How much water vapour the air holds","Hygrometer, or the wet-and-dry bulb"],
      ["Cloud and sunshine","How much sky is covered; how long the sun shone","Sky map; sunshine recorder"],
      ["Air pressure","The weight of the air about us","Barometer"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Weather Instruments and How to Read Them"},
    {k:"bul", items:["**Thermometer** – read in the shade at eye level without touching the bulb; keep it in a louvered screen about 1.25 m above the grass.","**Rain gauge** – a straight can with a measuring tube, level and clear of dripping roofs; read at the same hour daily and record in millimetres.","**Wind vane** – the arrow points to the way the wind comes FROM: a vane facing north shows a north wind.","**Anemometer** – the cups spin faster as the wind rises; count the turns or read the dial.","Set up a class station: an open place, the instruments in line, the record sheet filled every morning for a week."]},
    {k:"rule"},
    {k:"h3", t:"Recording Weather Data"},
    {k:"num", items:["Choose the same place, the same time and the same instrument each day.","Write the date and the figures for every element.","Note what you see as well: cloud, rain, dew, haze, and how the wind feels on the face.","Add the week up: highest and lowest temperature, total rainfall, the windiest day.","Draw a bar chart for the rain and a line for the temperature.","Read the report to the class or the assembly, and say what the week means for the farm, the washing and the walk to school."]},
    {k:"p", t:"A **forecast** says what the weather will be; the national meteorological service builds it from the records of many stations, and the radio and the papers carry it out. A storm or flood warning, heard in time, saves roofs and lives."},
    {k:"rule"},
    {k:"h3", t:"The Climate of Liberia"},
    {k:"bul", items:["A **hot, wet equatorial (tropical) climate**, steady rather than extreme; the mean temperature stays about 25–27 °C through the year.","Rainfall is heavy – 2,000 to over 4,000 mm on the coast – with the heaviest rain in June, July, August and September.","The **rainy season** runs about May to October and the **dry season** November to April, with the dusty **harmattan** from the north-east in December and January.","Humidity is high on the coast and the sea breeze moderates the heat of Monrovia.","Local differences: the highest land is cooler and wrapped in mist, and a cleared town is hotter than the forest beside it."]},
    {k:"rule"},
    {k:"h3", t:"Climate Change and Our Part"},
    {k:"p", t:"**Climate change** is a long-term change in the usual weather pattern of the earth. **Global warming** is the rise in the earth's average temperature, caused chiefly by **carbon dioxide** and other gases from burning coal, oil, gas and wood, and from cutting the forests."},
    {k:"bul", items:["Effects near us: late or too heavy rains, floods that wash road and bridge and farm, the sea creeping into the mangrove, longer dry spells, new pests, and strain on forest and reef.","Our part at home and school: plant and guard trees; do not burn bush or rubbish; use less firewood and a stove that saves it; clear the drain before the rain; store water for the dry weeks; walk, and cover the pot when cooking.","What the grown-up world must do: fewer felled trees, weather warnings heeded in the farming calendar, forest reserves, clean power from sun and water, and the promises of the world agreement on climate."]},
    {k:"p", t:"Liberia holds the largest block of rain forest left in West Africa. Keeping it is our gift to the world – and our own defence against the flood and the hunger that follow the changed rain."}
  ],
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
  study:[
    /* ---- course text: Semester One, Period I (guide pp. 38-39) ---- */
    {k:"h3", t:"Light Travels"},
    {k:"p", t:"**Light** is a form of energy that makes things visible. It travels in a **straight line** at enormous speed – about 300,000 kilometres in a second – so the flash of lightning reaches the eye long before the thunder reaches the ear."},
    {k:"bul", items:["Light from the sun and a flame goes out in every direction.","We see a thing only when light from it enters the eye: a lamp or the sun is a **luminous body**; a table or the moon, which only throws back light, is **illuminated**.","Straight travel is shown by a line of men each behind another, by a torch beam through dusty air, and by a small-hole camera."]},
    {k:"rule"},
    {k:"h3", t:"Reflection"},
    {k:"p", t:"**Reflection** is light bouncing back from a surface. A smooth bright surface throws back an image; a rough surface scatters it, so white wall and chalk reflect without showing your face. Shadows and eclipses are the other side of reflection: light that cannot pass leaves a dark shape behind."},
    {k:"bul", items:["Periscope, mirror and the rear-view glass serve by reflection.","**Lateral inversion** – the mirror puts the left hand on the right side – is why an ambulance writes its name backward."]},
    {k:"p", t:"Hold a mirror in sunlight and throw the patch of light about the wall; then bend the mirror and the patch moves – the law of reflection is being obeyed under your hand."},
    {k:"rule"},
    {k:"h3", t:"Refraction"},
    {k:"p", t:"**Refraction** is the bending of light as it passes from one transparent material into another, so a stick in water looks bent and a coin in a basin seems to rise when the water is poured in."},
    {k:"bul", items:["A **lens** is shaped glass that refracts: a **convex** lens is thicker in the middle and brings light together to a point; a **concave** lens is thinner in the middle and spreads it out.","The eye is a convex-lens camera: the lens throws an inverted image on the **retina** at the back, and the brain reads it upright.","Glasses correct an eye whose lens cannot bend the light enough or bends too much; a magnifying glass, a telescope and a camera are convex lenses at work.","A **prism** splits white light into the seven colours of the **spectrum** – red, orange, yellow, green, blue, indigo, violet – which the rainbow shows in the sky."]},
    {k:"rule"},
    {k:"h3", t:"Colours of Light"},
    {k:"bul", items:["White light is a mixture of colours; a thing looks red because it returns the red and takes in the rest.","**Primary colours of pigment** are red, yellow and blue; **secondary** are orange, green and purple. Mixing all the pigments gives black; mixing all the lights gives white.","**Colour blindness** – not telling red from green – runs in families, is commoner in boys, and matters in choosing a trade such as pilot, driver or electrician; it is tested with dotted plates."]},
    {k:"p", t:"Cut coloured paper into **patterns** – symmetrical and repeating, as the loom and the dye pit do – and hang the work in the class; a mirror makes one half of the pattern into a whole."},
    {k:"rule"},
    {k:"h3", t:"The Human Eye"},
    {k:"table", head:["Part","Its work"], rows:[
      ["Cornea","The clear window at the front; admits and bends the light"],
      ["Iris and pupil","The coloured ring with the hole that widens in the dark and narrows in bright light"],
      ["Lens","Focuses the light on the back of the eye"],
      ["Retina","Receives the image and sends the news along the optic nerve"],
      ["Optic nerve","Carries the message to the brain"]
    ]},
    {k:"bul", items:["Read and write in good light, and hold the book about 25 cm from the eye.","Do not rub the eye, and do not put dirt, fingers or a shared cloth into it.","Go at once for a **red eye**, running water, swelling or a white film on the pupil; wash hands before touching the face.","Wear a shade or goggles at welding, at chemical work and on bright water or sand.","Wear only glasses given after an examination, and go back for the check; tell the teacher if the board has become blurred.","Never look straight at the sun, and never at the sun or an eclipse through a lens or glass."]},
    {k:"p", t:"Cover one eye and then the other and the picture still stands – **binocular vision** gives size and nearness, the sense the driver and the catcher depend on."}
  ],
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
  study:[
    /* ---- course text: Semester One, Period II (guide pp. 40-41) ---- */
    {k:"h3", t:"Magnetic Materials and Magnets"},
    {k:"p", t:"A **magnet** is a body that pulls **magnetic materials** towards it and, when it can swing freely, sets itself north and south. The chief magnetic materials are **iron and steel**, with cobalt and nickel beside them."},
    {k:"bul", items:["**Magnetic**: nail, pin, needle, razor blade, paper clip, the tin can, a door hinge – anything plated with tin is still steel or iron under the coat.","**Non-magnetic**: wood, plastic, glass, rubber, cloth, paper, copper, aluminium, brass, gold, water, and the human body – none is pulled.","Test it with the same magnet at the same distance, and sort the objects into two rows."]},
    {k:"p", t:"Magnets come in shapes: **bar**, **horseshoe**, **needle**, **ring** and **disc**, and in sizes from the tiny one in a speaker to the lifting magnet on a crane. A **natural magnet** is the ore called lodestone; **artificial magnets** are made of steel by people."},
    {k:"rule"},
    {k:"h3", t:"Properties of Magnets"},
    {k:"num", items:["A magnet attracts magnetic materials, and its pull is strongest at two places, the **poles**.","A freely suspended magnet points **north and south**; the north-seeking end is marked N.","**Like poles repel; unlike poles attract** – N against S pulls, N against N or S against S pushes.","A magnet has a **magnetic field** around it, the space where its pull is felt; it reaches through paper, cloth, water, plastic and thin wood.","A magnet can **magnetise** another piece of steel: stroke a needle with one pole of a magnet, in one direction only, and the needle becomes a magnet.","A magnet loses its power when it is hammered, dropped, heated or burnt, so a magnetised needle kept in the fire is spoiled."]},
    {k:"p", t:"**Make a compass**: magnetise a needle by stroking, lay it on a leaf floating in water, and watch it swing to north – a **compass** is a magnet on a pivot, and it is the reason a ship or a plane or a hunter never loses direction."},
    {k:"rule"},
    {k:"h3", t:"Uses of Magnets"},
    {k:"bul", items:["**Compass** for navigation on sea, road and bush path.","Loudspeaker, earphone, microphone and the bell – a magnet with a coil of wire.","Fridge door, bag and box catch, the magnetic clip, and the tool rack that holds a screwdriver.","Separating iron filings from sand or from a sack of grain, and lifting scrap steel at the yard.","The **magnetic separator** at a mine, the **crane magnet** at the port, and the **maglev train** that floats on repelling magnets with almost no friction.","Hard disk and card that store the picture, the record and the message.","In school, medicine, business and industry the magnet finds, holds, moves, separates and points."]},
    {k:"p", t:"Care of a magnet: keep the **keepers** across the poles, do not hammer it, keep it away from heat, from fire and from a strong electric current, store it where the pull will not gather iron dust or a razor, and never put one near a phone, a card, a watch or a pacemaker."},
    {k:"rule"},
    {k:"h3", t:"Uses and Hazards in the Home"},
    {k:"bul", items:["Keep small magnets away from a little child, who may swallow two of them – they can clamp across the intestine and prove fatal: tell an adult and go to the clinic at once.","Do not let a magnet touch a watch, a phone, a card or a television screen, for it spoils their record.","Never cut or bend a big magnet: it is brittle and a sharp fragment flies; wear a glove and use the vise.","Do not bring a magnet near the gas line or the pacemaker of a person with a heart regulator.","Keep the magnets of the class in a labelled box, and report a cracked one."]},
    {k:"p", t:"Make a compass and a magnetic fishing rod in the group, test both, and keep the box and the record of what the magnet pulled and what it would not."}
  ],
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
  study:[
    /* ---- course text: Semester One, Period III (guide pp. 42-43) ---- */
    {k:"h3", t:"The Green Plant"},
    {k:"p", t:"A green plant **makes its own food**. This is called **photosynthesis**: ‘photo’ means light, ‘synthesis’ means putting together. It is the greatest workshop on the earth, for everything that lives, ourselves included, eats either a plant or an animal that ate a plant."},
    {k:"rule"},
    {k:"h3", t:"How Photosynthesis Goes On"},
    {k:"bul", items:["The **roots** take up water with the plant foods dissolved in it.","The **stomata** – tiny openings, mostly under the leaf – let in **carbon dioxide** from the air and let out oxygen and vapour.","The **chlorophyll**, the green matter in the leaf, traps the energy of **sunlight**.","With that energy the leaf builds **glucose**, a sugar, from carbon dioxide and water; **oxygen** is set free as the plant throws out what it does not need.","The sugar is used at once for energy, stored as **starch** in root, stem, seed or fruit, or turned into fibre for building."]},
    {k:"p", t:"Word equation: **carbon dioxide + water → (sunlight, chlorophyll) glucose + oxygen**. Balanced: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. Show that a leaf needs light by covering part of it with paper for two days and testing with iodine: only the exposed part turns blue-black with starch."},
    {k:"rule"},
    {k:"h3", t:"Plant Parts and Their Functions"},
    {k:"table", head:["Part","Function","Special forms to notice"], rows:[
      ["Root","Holds the plant, takes up water and salts, stores food","Tap root with a main (carrot, cassava); fibrous root in a bundle (rice, grass)"],
      ["Stem","Carries water up and food down, holds the leaves to the light, stores and is used for food","Underground stem of cocoyam and ginger; sugarcane stores sugar"],
      ["Leaf","Photosynthesis, breathing, and the loss of water vapour","Broad leaf of cassava; spine of the cactus; the insect-trapping pitcher"],
      ["Flower","Makes the seed; the reproductive part","Petals attract the insect; the stamen and pistil are its male and female parts"],
      ["Fruit","Protects the ripe seed and carries it away","Mango, pod, burr, the winged seed, the coconut that floats"],
      ["Seed","Carries the young plant and its store; rests until it is wanted","Wing, hook or sweet flesh – all are ways of spreading"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Reproduction in Flowering Plants"},
    {k:"p", t:"A flower has the **stamen** (the male part: filament and anther, which makes the **pollen**) and the **pistil** (the female part: stigma, style and ovary, with the **ovules** inside). Pollen carried from anther to stigma is **pollination**; insects, wind, birds and water carry it, and the bright or sweet-smelling petal is the advertisement."},
    {k:"num", items:["The pollen lands on the sticky **stigma** and grows a **pollen tube** down the style.","The **male nucleus** travels the tube to the **ovule** in the ovary.","There the male nucleus joins the egg cell – **fertilisation** occurs.","The fertilised ovule becomes a **seed**; the ovary wall thickens and becomes the **fruit**.","The flower fades; the fruit ripens and the seed is sown by wind, water, animal or by people."]},
    {k:"p", t:"The seed then **germinates**: it takes in water, the **radicle** comes out first downwards and becomes the root, and the **plumule** rises to become the shoot and the first leaves. Test germination with beans in wet cotton: one warm and wet, one dry, one shut from air, one boiled dead – only the first grows."},
    {k:"rule"},
    {k:"h3", t:"Plant Habitats"},
    {k:"table", head:["Habitat","How the plant is fitted","Examples"], rows:[
      ["Dry land (xerophyte)","Thick skin, wax, spine, small or rolled leaf, deep root – all to save water","Cactus, coconut, melon, the baobab"],
      ["Water (hydrophyte)","Soft, thin, hollow leaf; air bags; roots that grip in mud","Water lily, the floating fern"],
      ["Swamp and shore","Breathing roots that rise above the water; props against the mud","Mangrove with its pneumatophores, and the rice plant"],
      ["Shaded forest floor","Broad thin leaf to catch the faint light","Cocoyam, ginger, the young cocoa under the shade tree"],
      ["Other plants","Roots in air and rain, not in soil","Orchid, fern, and the plant that strangles its tree"]
    ]},
    {k:"p", t:"Note how the plant of one habitat fails in another – the coconut drowns in a bucket and the cactus rots in the swamp: each is fitted to its own place."}
  ],
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
  study:[
    /* ---- course text: Semester Two, Period IV (guide pp. 44-45) ---- */
    {k:"h3", t:"Feeding in Animals"},
    {k:"p", t:"An animal must take in food, for it cannot make its own like the green plant. What an animal eats is told by its teeth, its jaws and its stomach, and this gives the three groups:"},
    {k:"table", head:["Group","Mouth and teeth","Food and manner of eating","Examples"], rows:[
      ["Herbivore","Flat grinding molars, a hard dental pad in front, no canine; wide jaw","Grass and leaf bitten off and ground long; a big belly with chambers or a long bowel for the cellulose","Cow, goat, sheep, rabbit, grasscutter, tortoise"],
      ["Carnivore","Sharp pointed canine and tearing teeth, strong jaw that only opens up and down","Kills and tears flesh; swallows large pieces","Lion, leopard, dog, cat, crocodile"],
      ["Omnivore","A mixture of cutting, tearing and grinding teeth","Eats plants and animals, and stores what it finds","Pig, rat, monkey, fowl, ant, human being"]
    ]},
    {k:"p", t:"Special feeders: the **filter feeder** (fish, tadpole, earthworm) takes the tiny food from mud or water; the **sucker and licker** (butterfly, housefly, mosquito) draws or laps liquid food. Each mouth is a tool shaped for the work."},
    {k:"rule"},
    {k:"h3", t:"Locomotion"},
    {k:"p", t:"**Locomotion** is the moving of an animal from place to place to find food, water, mate or shelter, and to escape danger. The limb and the habitat agree with each other."},
    {k:"bul", items:["**Walking and running** on four or two feet – dog, goat, ant, human being; the hoof for open ground, the claw for grip.","**Swimming** – fish with fins and tail, frog with webbed feet, the bird that dives; the body is smooth and shaped to slip through.","**Flying and gliding** – bird, bat and insect; hollow light bone, feather or membrane, and great chest muscles.","**Jumping and leaping** – long hind limb of frog, grasshopper and rabbit.","**Crawling and slithering** – snake with its scales, earthworm with its rings, the snail on its foot."]},
    {k:"rule"},
    {k:"h3", t:"Respiration"},
    {k:"p", t:"**Respiration** is the taking in of air and the releasing of energy from food inside the body – not the same as breathing, though breathing serves it."},
    {k:"table", head:["Animal","Organ by which it breathes","How it works"], rows:[
      ["Fish and tadpole","Gills","Water passes over the feathery gill, and the small blood vessels take out the air it holds"],
      ["Insect (grasshopper, ant, fly)","Spiracles and tracheae","Air enters the side openings and runs in tubes to every part"],
      ["Frog","Skin and lungs","Breathes through the moist skin in water and with lungs on land"],
      ["Earthworm","Moist skin","The skin must stay wet or the worm suffocates"],
      ["Bird, reptile, mammal","Lungs","Air goes down the windpipe into the lungs and the blood carries it round"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Reproduction and Home Care in Animals"},
    {k:"bul", items:["**Asexual** – one parent only; a new animal grows from a part of the body (hydra budding) or an unfertilised egg develops (some insects). **Sexual** – a male cell and a female cell join; most animals do this.","Fertilisation is **internal** in birds, reptiles and mammals, and **external** where fish and frogs shed egg and spawn together in the water.","Some young are **born alive** and are suckled – the **mammals**; others are **hatched from eggs** – birds, reptiles, fish and insects.","**Parental care** – nest, warmth, feeding, guarding, and teaching the young to hunt, fly or forage – is greatest in birds and mammals and little or none in fish and frogs.","Care of domestic stock: shelter, clean dry bedding, water, food on time, ticks and worms treated, the sick one separated, and the young kept from dog and snatcher."]},
    {k:"p", t:"Set the animals in the right place: goat and cow **walk**, snake **crawls**, fish **swims**, bird **flies**, frog **jumps and swims** – and match the mouth: cow **grazes**, dog **tears**, fowl **picks**, ant **carries off** and stores."}
  ],
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
  study:[
    /* ---- course text: Semester Two, Period V (guide pp. 46-47) ---- */
    {k:"h3", t:"States of Matter"},
    {k:"p", t:"Matter exists in three common states, and its state depends on how the particles are packed and how fast they move."},
    {k:"table", head:["State","Shape and volume","The particles","What it shows"], rows:[
      ["Solid","Keeps its own shape and size","Close in a fixed order, only vibrating","Chalk, wood, stone; may bend or break; cannot be poured"],
      ["Liquid","Takes the shape of the vessel, size the same","Close but sliding freely","Water, palm oil; pours; has a level surface; hard to squeeze"],
      ["Gas","Spreads to fill every part of the vessel","Far apart and moving fast","Air, steam; can be squeezed into less room; presses the wall"]
    ]},
    {k:"bul", items:["**Melting** – a solid becomes a liquid (ice, butter, wax, the tin in the ladle).","**Boiling and evaporation** – a liquid becomes gas; boiling happens fast throughout, evaporation slowly at the surface.","**Condensation** – a gas becomes a liquid (drops on a cold tin, dew on the grass, the steam on the lid).","**Freezing, solidification, sublimation** – liquid to solid, and a solid that goes straight to gas (the mothball, dry ice).","A change of state is a **physical change**: the substance stays itself, and the change can be undone."]},
    {k:"rule"},
    {k:"h3", t:"Elements, Compounds and Mixtures"},
    {k:"bul", items:["An **element** is a substance that cannot be split into anything simpler; it is made of one kind of **atom**. Oxygen, iron, carbon, gold, aluminium and copper are elements, and the **periodic table** keeps the 118 known elements in order.","A **compound** is two or more elements joined in fixed proportion by chemical means: **water** (H₂O), **salt** (NaCl), carbon dioxide, sand (silicon and oxygen). Its properties are not those of the parts; salt is safe to eat though sodium burns and chlorine poisons.","A **mixture** is two or more substances merely mixed, in no fixed proportion: air, sea water, soil, sand and salt, the nut and the rice. The parts keep their own nature and are separated by physical means – picking, sieving, settling, filtering, evaporating, magnetism.","Elements may be **metals** (shiny, heavy, draw to wire, hammer thin, carry heat and current) or **non-metals** (dull, light, brittle, and poor conductors)."]},
    {k:"table", head:["","Element","Compound","Mixture"], rows:[
      ["Made of","One kind of atom","Two or more elements chemically joined in fixed ratio","Two or more substances merely mixed"],
      ["Can be split by","Chemical process only; not to anything simpler","Chemical process (electrolysis, burning)","Physical means: pick, sieve, filter, settle, evaporate"],
      ["Properties of parts","One nature only","New nature, different from the parts","Each part keeps its own nature"],
      ["Examples","Oxygen, iron, gold, carbon, aluminium","Water H₂O, salt NaCl, carbon dioxide, sand","Air, sea water, soil, pepper and salt, blood"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Burning, Rusting and Rotting"},
    {k:"p", t:"A **chemical change** (chemical reaction) makes a new substance: it may give out heat and light, colour, smell or gas, and it is not easily undone. A **physical change** alters form or state only and can be reversed – melting, dissolving, cutting, bending, evaporation."},
    {k:"bul", items:["**Burning (combustion)** needs three things – **fuel, air (oxygen) and heat to start it** (the fire triangle); take away one and the fire dies.","**Rusting** – iron with air and moisture becomes the brown **rust**, which crumbles and lets more rust in; paint, oil or a cover prevents it.","**Rotting and souring** – decay and fermentation by tiny living things; food kept cool, dry, salted, smoked or sealed resists them.","Other reactions: milk turning, dough rising with yeast, the candle burning, an egg boiled, wood burnt, and a nail left in the rain.","**Conservation of mass** – in a closed vessel nothing is lost, only changed: the wax of a candle weighed before and after burning, with the smoke and vapour caught, weighs the same. This is the first law of chemistry."]},
    {k:"p", t:"Sort these as physical or chemical: melting ice, burning firewood, dissolving salt in water, rusting cutlass, tearing paper, souring milk, boiling an egg, drying washing."}
  ],
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
  study:[
    /* ---- course text: Semester Two, Period VI (guide pp. 48-49) ---- */
    {k:"h3", t:"The Water Cycle"},
    {k:"p", t:"Water is always going round between the sea, the land and the sky, driven by the heat of the sun; the supply never runs out though it changes its place and its cleanliness."},
    {k:"num", items:["The sun **evaporates** water from sea, river, pond and the wet ground; the vapour rises.","Plants add vapour from their leaves (**transpiration**).","In the colder upper air the vapour **condenses** on dust to make the cloud.","Currents carry the cloud; the drops grow heavy by more condensation and collide.","**Precipitation** falls as rain, and at the cold heights as hail, sleet or snow.","**Runoff** fills stream and river; part **infiltrates** the soil to the **ground water**, the wet layer below, which feeds well and spring.","The sea, the lake and the ground hold the water until the sun lifts it again – a never-ending circle."]},
    {k:"p", t:"Prove condensation with a tin of ice water: drops form on the outside, and the water came from the air."},
    {k:"rule"},
    {k:"h3", t:"Rain, Flood and Drought"},
    {k:"bul", items:["**Rain** comes when moist air is lifted and cooled – over a hill, along a front, or in the great rising of the thunderstorm. The coast and the southwest of Liberia get the heaviest fall.","A **flood** is water overflowing its banks; causes: long heavy rain, a river swollen from the whole inland, blocked or filthy drains, a choked gutter, bush burned so the soil sheds, a house built on the flood plain, silt filling the channel, and the destruction of the mangrove and the bank vegetation.","**Flood management**: clean the drain before the rainy season, plant and protect trees, keep off the flood plain, line and clear the channel, keep an emergency bag and a higher place to go to, and mind the warning of the meteorological office.","**Drought** is a long failure of rain; the crops wither, the well falls, animals die. Its causes include the failure of the rainy season, cutting the forest and the grass that keep moisture in the land, poor soil, overgrazing, and the shifting of the climate."]},
    {k:"p", t:"In a drought store water, mulch the beds to keep the damp, plant what needs little, dig the **retention ditch** and the small dam, keep a covered tank, and repair the hand pump before it fails. In a flood move the family, the food and the medicine early: the water takes the roof last and the life first."},
    {k:"rule"},
    {k:"h3", t:"Waterborne and Other Diseases"},
    {k:"p", t:"A **waterborne disease** is a sickness carried chiefly by water fouled with human waste: **cholera**, **typhoid**, **hepatitis A**, **dysentery**, **diarrhoea**, and **guinea worm** from water holding the infected tiny creature. **Mosquito-borne** sickness – **malaria**, dengue and yellow fever – comes from clean-looking water standing in the tire, the tin and the roof gutter, where the insect breeds."},
    {k:"table", head:["Disease","Chief sign","How to prevent it"], rows:[
      ["Diarrhoea and cholera","Loose watery stool, vomiting, quick wasting","Boil or treat the water, wash hands with soap, use a latrine, keep flies off food, take ORS early and get help"],
      ["Typhoid","Long fever, headache, weakness, sometimes spots","Safe water and food, vaccination when offered, fly control, hand washing"],
      ["Guinea worm","Blister and burning pain; the worm comes out","Filter every drinking water through cloth; never drink from a pond with a worm case"],
      ["Schistosomiasis (bilharzia)","Itching after wading, then belly or urine trouble","Do not bathe or wash in still water; use a clean tap, and get treatment"],
      ["Malaria","Fever, headache, vomiting, chills; danger for the child and the pregnant woman","Sleep under an insecticide-treated net, clear grass and standing water, screen, spray at fogging time, take the test and finish the full medicine"]
    ]},
    {k:"p", t:"**Safe water for the home**: take it from a safe source; **boil** it and let it cool in the covered pot; or treat it with chlorine drops; or pour it through a clean cloth and a ceramic filter; store it in a covered vessel with a tap and never dip a cup into it."},
    {k:"rule"},
    {k:"h3", t:"Personal and Environmental Hygiene"},
    {k:"bul", items:["**Personal**: bathe and wash the hair; wash the hands with soap before eating and after the toilet; wear and change clean dry clothing; bathe after sweating; keep the nails cut; brush the teeth; wash under the arms and between the toes daily, especially after sport.","**Menstrual**: use clean cloth or a pad, change it often, wash the body, rest, take a warm drink, and record the date; the monthly course is normal and no one is teased for it. A very heavy flow with faintness or pain that stops work is shown to a health worker.","**Home and school**: cover and empty the rubbish and burn or bury what can; clear the bush round the house; keep stagnant water out of the tin and the tire; use a latrine with a slab and a door and keep it clean; keep the drain clear to carry water away; separate the drinking water from the waste water; rat-proof the store and keep food covered; sleep under a net.","**Environment**: protect the well and the spring from latrine and soak-away; never let water stand indoors or near the home; report a broken pipe or a blocked drain; keep animals away from the house and the water course."]},
    {k:"p", t:"The **sanitation calendar** of the village: clean the compound and dig the drain in the dry season, before the rain falls; clear the gutter each month in the rainy season; burn the refuse weekly; empty and wash the water vessel weekly; keep the latrine covered with ash or lime after each use."}
  ],
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
  study:[
    /* ---- course text: Semester One, Period I (guide pp. 50-51) ---- */
    {k:"h3", t:"Energy"},
    {k:"p", t:"**Energy** is the ability to do work. Work is done whenever a force moves an object, and energy is what makes it possible. Energy is measured in **joules (J)**; a kilogram of rice lifted a metre needs about ten joules."},
    {k:"p", t:"Matter and energy go together, and the greater proof of it is that a little mass changed wholly to energy gives enormous power: the sun shines because it keeps changing some of its matter to light and heat."},
    {k:"rule"},
    {k:"h3", t:"Forms of Energy"},
    {k:"table", head:["Form","Where it lives","What it does"], rows:[
      ["Light (radiant)","Sun, flame, lamp, torch","Makes things visible; lets the leaf cook its food"],
      ["Heat (thermal)","Fire, sun, a rubbing, a hot pot","Raises temperature; melts, boils and dries"],
      ["Sound","Voice, drum, engine","Carries speech and music; warns"],
      ["Electrical","Moving charge in a wire, lightning, battery","Runs the lamp, the radio, the iron and the mill"],
      ["Magnetic","The field of a magnet, an electromagnet","Lifts, holds, points and drives the motor"],
      ["Chemical","Food, fuel, battery, the powder in a match","Released as heat when burned or digested"],
      ["Mechanical","A moving body, a lifted load, a stretched band","The energy of motion (kinetic) and of position (potential)"],
      ["Nuclear","The heart of the atom","Sets free in the sun and in the reactor"]
    ]},
    {k:"rule"},
    {k:"h3", t:"The Law of Conservation of Energy"},
    {k:"p", t:"**Energy is never created and never destroyed: it only passes from one form to another. The total stays the same.** This is the **law of conservation of energy**."},
    {k:"bul", items:["A falling stone: **potential** energy of height becomes **kinetic** energy of motion; hitting the ground it becomes sound and heat.","A torch: **chemical** energy of the cell becomes **electrical**, then **light** and heat.","A radio or a television: electrical energy becomes sound, light and heat.","Your body: the **chemical** energy of rice and oil becomes motion, warmth and growth.","A **generator** changes mechanical energy to electrical; a **motor** goes the other way.","In every change part of the useful energy leaks out as **waste heat** – which is why the lamp, the phone and the engine all get warm, and why no machine gives back all it takes."]},
    {k:"p", t:"Test it: drop a ball from one metre and it rebounds less than one metre – the height it lost became heat and sound. A machine that gives more than it takes is impossible, and a person who sells you one is cheating."},
    {k:"rule"},
    {k:"h3", t:"Sources and Uses of Energy"},
    {k:"bul", items:["Almost every source is the **sun**: today by light and warmth, and long ago as the coal, oil and gas stored in ancient living things.","**Fuel** – firewood, charcoal, kerosene, petrol, diesel and gas – releases chemical energy as heat.","**Food** is the fuel of the body.","**Moving water and wind** drive the mill, the pump and the turbine; falling water at Mount Coffee turns the **generator** that gives Monrovia its light.","**Solar cells** change light to electricity; **solar water heaters** warm the water; **biogas** from dung and rubbish gives clean cooking gas and manure.","**Geothermal** heat comes up from the hot rock deep down, **nuclear** power from the atom's heart – both used for electricity elsewhere."]},
    {k:"rule"},
    {k:"h3", t:"Renewable and Non-renewable Energy"},
    {k:"table", head:["Renewable – replaced as we use it","Non-renewable – finished and gone"], rows:[
      ["Sunlight, wind, falling and flowing water, wave and tide, the heat of the earth's inside, wood and crop waste and biogas from what is replanted","Petrol, diesel and kerosene from crude oil, coal, natural gas, and the minerals dug out of the ground"]
    ]},
    {k:"p", t:"A source is renewable when it is replaced as fast as it is taken, so a forest cut faster than it regrows is being used as a non-renewable. The world's work is mostly still done by the non-renewables, which run short and raise the price of everything – and burn to the gases that warm the sky."},
    {k:"rule"},
    {k:"h3", t:"Conservation and Safety"},
    {k:"bul", items:["**Conservation of energy** – using less and wasting none – keeps the light and the fuel for those who come after: switch off, use efficient lamp and stove, cook with the pot covered, dry in sun and wind, insulate the hot drum, use the biogas digester, ride together and walk, plant and shade the house, and never leave a heater or iron on.","Never burn charcoal or wood inside a closed room, for the smoke takes the life quietly; cook where the air moves.","Do not overload a socket or a line, and keep the frayed cord and the wet switch away from a hand.","Store petrol and kerosene in a labelled closed container away from the house, with no flame or smoke near; it is **flammable**.","Handle a hot pot with a holder; wear a glove and goggles at the flame, and keep the long hair and loose clothing from the fire."]},
    {k:"p", t:"Keep the day's log: every form of energy the house met, what each was changed into, where it was wasted, and one change that would save it."}
  ],
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
  study:[
    /* ---- course text: Semester One, Period II (guide pp. 52-53) ---- */
    {k:"h3", t:"Force and Motion"},
    {k:"p", t:"A **force** is a push or a pull. It is measured in **newtons (N)** with a **spring balance**, and shown by an arrow whose length is the size of the force and whose head is its direction. A force can start a thing moving, stop it, speed or slow it, change its direction, or change its shape."},
    {k:"rule"},
    {k:"h3", t:"Types of Force"},
    {k:"table", head:["Type","How it acts","Examples"], rows:[
      ["Muscular","The pull of muscle, needing contact","Carrying, pushing the wheelbarrow, pedalling, digging"],
      ["Friction","Between rubbing surfaces, opposing motion","The shoe gripping the ground; the wear of the sole; the heat of rubbing the hands"],
      ["Gravitational (gravity)","The pull of the earth on every body, no contact needed","The falling stone; the weight you feel; water running down; your mass held to the ground"],
      ["Magnetic","The field of a magnet; acts at a distance","A nail pulled, a pole repelled, the compass turning"],
      ["Elastic","A stretched thing springing back","Bowstring, catapult, rubber band, the mattress"],
      ["Electric","Between charges; acts at a distance","The combed rubber attracting paper; lightning"],
      ["Air resistance and water resistance","The drag of the fluid a body moves through; needs contact","The swimmer slowed, the parachute opening, the bike rider leaning forward"],
      ["Applied by a machine","Force changed in size or direction","Pulley, lever, wedge, wheel and axle"]
    ]},
    {k:"p", t:"Forces may **balance** (a book lying still: gravity down, table up) or be **unbalanced** (the same book pushed – it moves). Only an unbalanced force changes motion. Force also acts in fluids: water **pushes up** with **buoyancy**, and an object floats when it pushes aside water as heavy as itself."},
    {k:"rule"},
    {k:"h3", t:"Effects and Measurement of Force"},
    {k:"bul", items:["Motion changes in **speed** and in **direction**; the **momentum** of a body (mass × velocity) is why a loaded, fast lorry cannot stop at once and why a ball is hard to catch.","The unit of force, the newton, is the force that gives a kilogram an acceleration of one metre per second every second.","**Mass** is the quantity of matter (kg) and stays the same; **weight** is the pull of the earth on it (N) and changes with where you are. Weight = mass × gravity (about 10 N per kg on the earth). A 5 kg basin weighs about 50 N; on the moon, with one-sixth the pull, the mass is still 5 kg but the weight is only about 8 N.","Measure weight with a **spring balance** or scale and mass with a **balance**; the two are confused because we commonly give the weight in the name of the kilogram."]},
    {k:"rule"},
    {k:"h3", t:"Friction: Enemy and Friend"},
    {k:"p", t:"**Friction** is the force between two surfaces in contact that opposes their moving over each other; it always acts against the motion, and how great it is depends on the nature of the surfaces and on how hard they are pressed together."},
    {k:"bul", items:["**Useful** – walking and running without slipping, writing with chalk, holding a basin, the nail and the knot and the screw that hold, the brake that stops, the match that lights, and the tyre that grips the road.","**Harmful** – it wears the sole, the tyre, the gear and the shaft; it wastes work as heat and noise, and it heats the engine.","**Reducing it** – polish, **lubricate** with oil or grease, use ball bearing or roller, and stream-line the body of car and plane.","**Increasing it** – tread on tyre and sole, sand or salt on a slippery floor, rosin on the hand, and a rough handle."]},
    {k:"p", t:"Test it fairly: pull the same brick with the spring balance on smooth wood, on sandpaper, and with a cloth under it – keep the brick and the pulling the same and change only the surface, then say which variable you changed and which you kept."}
  ],
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
  study:[
    /* ---- course text: Semester One, Period III (guide pp. 54-55) ---- */
    {k:"h3", t:"Measurement"},
    {k:"p", t:"To **measure** is to find how big a quantity is by comparing it with an agreed standard unit. A measurement is worthless without its **unit**, and rough work is helped by an **estimate** made first and tested after."},
    {k:"rule"},
    {k:"h3", t:"Units: Customary and SI"},
    {k:"bul", items:["Liberia uses both systems: the customary in the market and on the land (inch, foot, mile, pound, gallon, cup, basin, bag, ‘one tie of wood’), and the **Système International (SI)** – the metric system – in school, trade, medicine and government.","The **SI** (metric) units: **metre (m)** for length, **kilogram (kg)** for mass, **second (s)** for time, with the **litre (L)** for volume and **degree Celsius (°C)** for temperature.","**Why SI is better**: it grows by tens (1 km = 1,000 m; 1 kg = 1,000 g; 1 L = 1,000 mL), so its arithmetic is easy, and one unit serves for length, mass and volume, while the old units change their factor at every step.","Use **standard units**, not the span of a hand, because people differ; keep a ruler, scale, clock and measure in the store, and use the same unit in the comparison."]},
    {k:"rule"},
    {k:"h3", t:"Measuring the Common Quantities"},
    {k:"table", head:["Quantity","SI unit","Instruments and method"], rows:[
      ["Length","metre (m)","Ruler, tape, metre stick, caliper; read at right angles and from a marked end, not a worn one"],
      ["Mass","kilogram (kg)","Beam balance, platform scale, spring scale; zero first, weigh a dry container for the bag"],
      ["Volume of liquid","litre (L), mL","Measuring cylinder, beaker, pipette; read the lowest point of the curve with the eye level"],
      ["Volume of regular solid","cm³ or m³","Length × breadth × height; 1 cm³ = 1 mL"],
      ["Temperature","degree Celsius (°C)","Thermometer; do not touch the bulb; read in the shade at eye level"],
      ["Time","second (s)","Clock, watch, stopwatch; start and stop at the same event"],
      ["Area","m²","Length × breadth; for the field take it with a tape or a measured pace, and pace a strip to the tree line"],
      ["Force","newton (N)","Spring balance"],
      ["Speed","metre per second (m/s)","Distance ÷ time"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Conversion, Area and Volume"},
    {k:"bul", items:["Length: 1 cm = 10 mm, 1 m = 100 cm, 1 km = 1,000 m; 1 in = 2.54 cm, 1 ft = 30.48 cm, 1 yd = 0.9144 m, 1 mi = 1.609 km.","Mass: 1 kg = 1,000 g; 1 lb = 0.4536 kg, so a 100 lb bag of rice is about 45 kg.","Volume: 1 L = 1,000 mL; 1 gal = 3.785 L, so a 5-gallon jerry is about 19 litres.","Area of the rectangle or square = length × breadth; of the triangle = ½ × base × height; of the circle = π × radius² (π ≈ 3.14).","Volume of the box = length × breadth × height; of the cylinder = πr² × height.","A compound unit is a unit made of two: **speed** is m/s or km/h (1 m/s = 3.6 km/h), and a **rate** such as so many L per hour."]},
    {k:"p", t:"Convert as you go: the farmer sells a 45 kg bag and calls it 100 lb; a sign of ‘10 km’ is about 6 miles; the tin that holds 5 gallons holds about 19 L."},
    {k:"rule"},
    {k:"h3", t:"Accuracy, Error and Recording"},
    {k:"bul", items:["**Zero error** – the instrument does not read zero when empty; always check before use.","**Parallax error** – the eye not level with the mark, so a cylinder or a scale is misread.","Not the same instrument, or not read the same way, between one measurement and the next.","**Least count** – the smallest division the instrument can show; a ruler marks millimetres, so a length is read to the nearest millimetre.","**Repeating** – take the measurement three times and record the mean; take the same quantity with the same care each time.","**Fair test** – in an investigation change only one thing (the variable you are testing), keep all else the same, and use the same method and instrument for both parts."]},
    {k:"p", t:"Record as a number with its unit and the instrument used, and note what was estimated; a table with the unit in its heading is the way of science and of the good trader."}
  ],
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
  study:[
    /* ---- course text: Semester Two, Period IV (guide pp. 56-57) ---- */
    {k:"h3", t:"Earth Satellites"},
    {k:"p", t:"A **satellite** is any body that moves round a larger body. The moon is the earth's **natural satellite**; a machine put in orbit by people is an **artificial satellite**. Once launched, a satellite keeps falling round the earth: its forward speed is so great that the ground curves away beneath it as fast as it drops, and with almost no air at that height to slow it, it circles for years."},
    {k:"bul", items:["The **orbit** is the path; a **low orbit** runs a few hundred kilometres up, a **geostationary orbit** about 36,000 km over the equator, where the satellite goes once a day and hangs above the same place – the orbit chosen for the television and weather satellite.","**Communication satellites** carry telephone, radio and television across ocean and continent.","**Weather satellites** photograph the cloud and the storm so the warning can go ahead of it.","**Navigation satellites** tell the ship, the plane and the road the position to a few metres.","**Earth-observation satellites** map forest, farm and coast, find water, and count what has been cut.","**Research and space-station satellites** carry the scientist's instruments and crew; they need oxygen, water, food, and protection from the heat of the sun and the cold of shadow."]},
    {k:"rule"},
    {k:"h3", t:"Stars"},
    {k:"p", t:"A **star** is a huge ball of very hot gas, chiefly hydrogen and helium, that gives out its **own** light and heat. The **sun** is a star – an ordinary middle-sized one, and the nearest by far; everything else we see at night is beyond the solar system."},
    {k:"bul", items:["A star **shines because of nuclear change** in its heart, where hydrogen is joined into helium and a little mass becomes energy.","**Colour tells the heat**: a blue-white star is hottest, yellow like the sun is middle, and red is coolest.","**Constellations** are the known patterns of stars, used for the seasons and the road for thousands of years.","A **light-year** is the distance light travels in a year – about 9.5 trillion km – and it measures how far, not how long; the faint star may be dozens or thousands of years away.","A star seems to move across the sky because the earth turns; the **North Star** stands still, above the turning point, and is the guide of the north.","**Distance from the sun**: Mercury about 58 million km, Venus 108, the earth 150 (one **astronomical unit**), Mars 228; the moon only about 384,000 km – a rocket reaches it in days, the nearest star would take tens of thousands of years."]},
    {k:"rule"},
    {k:"h3", t:"Life of a Star"},
    {k:"num", items:["A star is born in a **nebula**, a great cloud of gas and dust, pulled together by its own gravity.","When the heart is hot enough, hydrogen begins to join into helium and the star shines steadily; our sun has been in this stage about 4.6 billion years and will stay so billions more.","When the hydrogen gives out the star swells into a **red giant**; a big star may burn through heavier fuels and stand as a **supergiant**.","The outer matter goes off into space, enriching the clouds from which new stars and planets form.","What is left is a small dense **white dwarf**, which cools through long ages; the greatest stars end in a **supernova**, and may leave a **neutron star** or a **black hole** whose pull light itself cannot leave."]},
    {k:"rule"},
    {k:"h3", t:"Galaxies and the Reach of Science"},
    {k:"bul", items:["A **galaxy** is a vast company of stars with their gas and dust, held together by gravity; our own is the **Milky Way**, a spinning disc of some hundred billion stars.","Beyond it lie other galaxies, some near, most unimaginably far, rushing apart as the space between them stretches: this is the expanding universe.","The **telescope** grew into the giant glass on the mountain and the mirror satellite above the air, which sees farther and farther back toward the beginning.","The **space programme** has put people on the moon, kept crews in orbit, and sent machines to every planet; satellites give the weather, the telephone and the map, and the same work opens the questions of life, the origin of the elements, and the fate of the world's climate."]},
    {k:"p", t:"The sky above Liberia on a clear night is a science lesson free of cost: find the North Star, watch where the moon and the brightest planets sit among the constellations, and plot the movement each night in the same hour."}
  ],
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
  study:[
    /* ---- course text: Semester Two, Period V (guide pp. 58-59) ---- */
    {k:"h3", t:"The Skin"},
    {k:"p", t:"The **skin** is the largest organ of the body: it covers about 2 square metres and weighs about 5 kg. It is made of two chief layers – the thin outer **epidermis** and the thick inner **dermis** – with the fat and muscle beneath."},
    {k:"table", head:["Part of the skin","Its work"], rows:[
      ["Epidermis (outer layer)","Protects against dirt, germs and rubbing; the dead outer cells are worn off and made good continually; its melanin gives colour and shields from the sun"],
      ["Dermis (true skin)","Strong and elastic; holds the blood vessels, the nerves, the hair roots, the sweat glands and the oil glands"],
      ["Receptors in the dermis","Report touch, pressure, heat, cold and pain to the brain"],
      ["Hair and its root","Keeps out dust from nose and ear, shades the eye, and warms"],
      ["Sweat gland and pore","Sends sweat out to cool the body and carry off waste"],
      ["Oil gland and fat layer","Keeps the skin soft, saves warmth, and pads the body"],
      ["Nails","Guard the tips of fingers and toes and serve as tools"]
    ]},
    {k:"p", t:"The five works of the skin are **protection, sensation, temperature control, excretion, and storage**. Sweating cools: as the water on the skin evaporates it takes the heat away – the same law that dries the washing, and the reason the humid day feels harder than the hot dry day."},
    {k:"rule"},
    {k:"h3", t:"Care of the Skin"},
    {k:"bul", items:["Bathe daily with soap and clean water, washing the neck, armpits, between the fingers and toes and the private parts; dry well, for damp skin cracks and breeds itch.","Wear clean, loose clothing that lets the air through, and change what the sweat has wet; put on a shade or a hat at the noon sun and protect the skin with clothing at work.","Eat the protective foods (fruit, vegetable, liver, egg, groundnut) and drink enough water; a dry dull skin tells of short water and poor food.","Do not squeeze a pimple, scratch a mosquito bite or pick a scab; wash the scratch and cover it, and let the cut heal – a small sore left dirty may open wide.","Never share a razor, towel or comb; ringworm, itch and scab spread by the shared cloth.","Keep the skin from strong soap and unguent that is not for the body; do not put chemical, kerosene or ash on a sore, and tell an adult of a sore that will not close.","Never scratch the eye; bathe the burned skin in running cool water for ten minutes – never oil, butter or toothpaste – and cover with clean cloth.","See the health worker for rash, itch that keeps you from sleeping, the spreading red and hot line, the running ringworm, and the burn that blisters wide."]},
    {k:"p", t:"The **sweat test** after exercise: weigh the dry towel, wipe the arm, weigh again; the weight gained is what the skin sent out, and the skin left the salt behind."},
    {k:"rule"},
    {k:"h3", t:"Soil"},
    {k:"p", t:"**Soil** is the loose material on the surface of the land in which plants grow. It is made of weathered rock, **humus** (the decayed remains of plants and animals), water, air, and living things such as worm, ant, termite and bacteria."},
    {k:"bul", items:["**Weathering** – the breaking of rock in place – is **physical** (heat and cool, frost, roots, rain and wind, the rubbing of moving water), **chemical** (rain water with its weak acid dissolving and rusting), and **biological** (root, burrowing animal and the acids of decay).","**Soil formation** goes from bare rock to weathered rubble, to soil with the first humus from moss and lichen, and then to deep fertile soil, in hundreds or thousands of years – so fertile soil is a treasure to be treated as a treasure.","**Soil profile**: topsoil (A) – dark, rich and where the plants feed; subsoil (B) – paler, more compact and where roots go deep; weathered rock (C); and the solid **parent rock** below – a spade hole left standing for a day shows the four.","**Horizon O** – the leaf mould on top of a forest soil – is the layer that feeds the whole; this is why the forest soil is black and soft and the bare hill's is thin and pale.","Texture by rubbing a moist pinch: **sandy** (gritty, falls apart), **clayey** (smooth, sticky, rolls to a ribbon), **loamy** (soft and crumbly, the best for the garden). Structure – the crumbs a good soil falls into; porosity – the open space holding the air and water; drainage and water-holding – the two opposite powers a soil must balance; fertility – the store of plant food and humus."]},
    {k:"table", head:["Type of soil","Its particles","How it behaves","Best use"], rows:[
      ["Sandy","Large grains","Water runs straight through; little water or food held; warms early; poor","Melon, cassava and the sweet potato, with manure"],
      ["Clayey","Very fine","Holds water; drains badly; sticky when wet and hard when dry; rich in mineral food but root finds it hard","The rice swamp, and pots, brick and plaster"],
      ["Loamy","Mixed, with humus","Holds enough moisture and still drains; warm, easy and full of plant food","The garden and most farm crops – the farmer's aim"],
      ["Humus / organic","Mostly decayed matter","Dark and spongy; water and nutrient store; a dressing that improves any soil","Digged into the bed, and spread on top"]
    ]},
    {k:"p", t:"**Why soil must be conserved** – it is the base of food, home and life, and once washed or used up it takes centuries to return. The enemies are **erosion** (sheet, rill, gully, and wind erosion in the bare dry season), **loss of fertility** from continuous cropping without rest, and **pollution** from chemical, rubbish, oil, and the human waste left on the ground."},
    {k:"bul", items:["Protect it with a cover of crop, grass or mulch; plant on the contour, ridge or tie, dig the **terraces** and the grass waterway; leave the trees and the strip of vegetation along the stream; rotate and intercrop, and rest the land with legume.","Add the humus – compost, manure and the turned-in refuse, plus crop residue instead of burning.","Clear the drain, plant at the start of the rain, and never leave the hill slope bare.","At school: keep a terrace, a **compost pit** and a shade; test the soils of the compound and the bank with water and with cloth; keep the rat and the bush fire out; report the gully beginning before it eats the road.","Liberia's soil is mostly the old, deeply weathered, red and yellow **laterite** of the forest zone – leached and acid, fertile only while the forest stands. The lime and phosphate it lacks come back only with organic matter, ash or fertiliser."]},
    {k:"rule"},
    {k:"h3", t:"Malaria"},
    {k:"p", t:"**Malaria** is a fever sickness caused by the **plasmodium**, a tiny one-celled creature carried from person to person by the bite of the female **Anopheles mosquito**, which bites chiefly from evening to morning. It is the greatest killer among our sicknesses, especially of children under five, of pregnant women and of the weak; Liberia's heat, rain and standing water give it every chance."},
    {k:"bul", items:["**Signs** – fever and shaking chills, headache, vomiting and body pain, sweating as the fever falls; the child may feed badly, grow weak or fall into convulsion. **Severe malaria** – drowsiness or unconsciousness, breathing trouble, jaundice, blood in the urine – is an emergency: go at once to the health centre.","**Diagnosis and treatment** – the rapid test or the blood film, then the full dose of the combination medicine the health worker gives, finished even after the fever is gone. Never take an unknown injection from a trader; never save the packet of someone else, and never buy the wrong dose of the packet.","**Prevention** – sleep under an insecticide-treated net with it tucked; keep the house screened and spray at fogging time; empty every vessel that holds water, cover the drum, fill the footprint, and clear the grass and the gutter so no water stands for the mosquito to breed in; use the repellent on the exposed skin in the evening; remove the old tire, the tin and the blocked roof channel.","**School and home** – keep the compound clean and cut, drain the standing water, screen the window and net the bed; report the absence from fever; and support the net campaign, the spraying, and the teaching that a clean compound is medicine before the disease.","In pregnancy, take the preventive doses the clinic gives, and treat the fever the same day it shows."]},
    {k:"p", t:"The **mosphere hunt** in the compound: find and tip out every water-holding thing, and put the record on the wall; a covered drain and a cut grass mean more than a spray that reaches only the room."}
  ],
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
  study:[
    /* ---- course text: Semester Two, Period VI (guide pp. 60-63) ---- */
    {k:"h3", t:"The Stages of Human Growth"},
    {k:"table", head:["Stage","About what it covers","What it does"], rows:[
      ["Infancy","Birth to 2 years","The fastest growth; rolls, sits, crawls, walks, and learns speech"],
      ["Early childhood","3 to 5 years","Play and speech grow; runs and jumps, and the first learning"],
      ["Middle and late childhood","6 to 10 years","The school years; slow steady growth; reading, writing and the skill of hand"],
      ["Adolescence","about 10 to 19 years","Puberty and the adult form; the mind and feelings change; the search for who one is"],
      ["Adulthood","from about 20 years","Full growth, marriage and work, and bringing up a family"],
      ["Old age","later years","Wrinkled skin and grey hair, less speed, weaker eye and ear, and failing bone; the old carry wisdom and should be honoured and cared for"]
    ]},
    {k:"p", t:"Growth is the increase in size (measured by height and weight); **development** is becoming able to do new things. Growth is fastest in the baby and at adolescence, slow in between; the girl's adolescent spurt begins about two years before the boy's; and a baby is born with the bones of an adult partly in cartilage."},
    {k:"rule"},
    {k:"h3", t:"Adolescence and Puberty"},
    {k:"p", t:"**Adolescence** is the time of growing from child to adult, and **puberty** is when the body becomes able to have a child – the girl about 10–14 and the boy about 11–16. Both grow by the messages of **hormones** carried in the blood from glands, chiefly the pituitary ‘master gland’ in the brain."},
    {k:"bul", items:["**In the girl** – the breasts grow; the hips widen; the skin and hair oilier; **the monthly period** (menstruation), bleeding from the womb about every 28 days, in the flow 3–7 days; a small brownish discharge is common and clean; the eggs already made begin to ripen.","**In the boy** – the penis and testicles grow; the hair comes on the face, underarm and body; the voice breaks and deepens; the muscles thicken; a nocturnal emission (wetting in sleep) is common and not a disease.","**In both** – the height and weight rise quickly; armpit and pubic hair; sweat and smell; the skin acne and blackheads; the feelings swing and the interest in the other sex wakes; the need for sleep is greater."]},
    {k:"p", t:"These changes are normal, they come to every one at a different time, and no one is improved by teasing or hiding. Care: wash the body daily, change the face cloth, and wash the face and keep the hair clean; leave the acne unscratched and seek the skin trouble if it swells and pain; at the monthly flow put on a pad or clean folded cloth, change it often, wash the body and put the used one out of sight."},
    {k:"rule"},
    {k:"h3", t:"Adolescent Health"},
    {k:"p", t:"The adolescent body is being built: **nutrition** needs food from every group and iron – beans, groundnut, dark green leaf, liver, egg and fish – and enough clean water; **exercise** daily for the muscle, the heart, the bone, the sleep and the calm mind; **rest** about 8–10 hours and a time to oneself; **cleanliness**, soap and water and a dry change; a **regular habit of emptying the bowel and the bladder** and never holding it; and **mental and emotional health** – a person, a family, a club or a pastor to talk to, and one trusted adult to ask anything without fear of shame."},
    {k:"bul", items:["**HIV** is the virus that weakens the body's power to fight; it passes only from an infected mother to her baby, through blood entering a wound, and by sex with an infected person; the untreated infection may end in **AIDS**.","**STIs** – such as gonorrhoea, syphilis and herpes – pass mostly by sex; some show discharge, smarting or sore, and some show nothing at all; all need treatment for both partners from a health worker, and an untreated one can blind a baby or hurt the internal organs.","**Prevention** – keep off sex while young; refuse every offer without apology or argument; never share a blade, a needle, a toothbrush or anything that draws blood; see that the cut is dressed; go to the clinic for a sore, running or itching; and never believe that washing, herb or a charm clears a disease from the body.","**Body changes that are not a disease**: the late starter, the early developer, and the acne – all pass in time.","**The harm of substance use and of the crowd** – the cigarette, the bottle, the sniffed glue and the tablet taken for fun – begin at this age; the pupil learns to say NO and to walk away.","**The law is on the side of the child**: any sex act with a person under 16 is a crime (statutory rape), no adult may touch you sexually, and marriage or sex forced upon a girl is a crime. The victim is never the wrongdoer.","**Safety for the girl on the way to and from school** – go with others, and tell an adult if anyone follows, waits, offers a lift or asks for secrecy; keep the route near houses and light and avoid the shortcut through the bush – and report the same day, because a person who does this to one will do it to another."]},
    {k:"p", t:"Where to go with a question: the parent or auntie, the teacher, the school health or the **family health** worker, the **youth friendly service** at the clinic, the counsellor or trusted pastor, the government health line, and the woman and child protection desk of the police."},
    {k:"rule"},
    {k:"h3", t:"Food, Water and Waste"},
    {k:"bul", items:["Eat from every group daily – the body-building (fish, meat, egg, bean, groundnut, milk), the energy (rice, cassava, yam, bread, oil) and the protective (fruit, leafy vegetable); wash the fruit and vegetable; cook the meat well; and take only safe water.","Wash the hands with soap before eating and after the toilet; cover the food and keep the fly off it; keep raw and cooked food apart.","Sleep 8–10 hours; be active daily; keep off the bottle, the cigarette and the drug; avoid too much tea and coffee; rest the eye from the screen and hold the phone at arm's length; and eat little of the sweet and soda that spoil the tooth."]},
    {k:"rule"},
    {k:"h3", t:"Safety at Home, on the Road and at Work"},
    {k:"num", items:["Keep matches, paraffin, medicine and poison in the locked place, marked with a label and never in a bottle that holds drink; light the candle on a stand away from the curtain and blow it out.","Use a dry cloth on the hot pot, put the pot handle in, and keep the oil from water in the pan, for it boils over.","In a gas or kerosene fire: smother it with a cloth or sand – never pour water on burning oil; carry a burn under running cool water and cover it with clean cloth; get help at once.","Switch off at the point, never with a wet hand or a wet foot; report the bare or broken wire and the cracked plug; keep one plug to one socket and never join the lamps with a twisted link; keep the cord away from the stove, the water and the rat; never work at the line, never climb a pole and stay off the street where a line has fallen; call the authority and keep everyone away.","Put the earth wire to a metal box and casing, and keep the lamp and its oil away from the mattress.","On the road and in the water: look both ways, cross where people can see, wear the helmet on the bike, never ride on a load or a fender, obey the zebra and the light and never chase a ball into the road, and never swim in deep, fast or strange water or alone.","At work and in the workshop: wear the shoe, goggle and glove, tie the hair and loose clothing; keep the blade from you and the guard on; report the cut, the ache and the noise in the ear; use the ladder with the foot held; lift with the knees and not the bent back.","Weather and disaster: keep off the big tree, pole and wall in storm; move to high ground before the water rises; and keep the emergency bag and the plan."]},
    {k:"p", t:"**First aid**: wash the hands, stop the bleeding with clean pressure, wash the cut with clean running water, cover it, and raise the part; burn under running cool water; the faint person laid flat with the feet raised; the broken limb kept still, not pulled straight; for **choking** the abdominal thrusts; and send for the health worker or move to the clinic – the dressing on the way, not the excuse to wait."}
  ],
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
  study:[
    /* ---- course text: Semester One, Period I (guide pp. 64-65) ---- */
    {k:"h3", t:"Why Living Things Are Classified"},
    {k:"p", t:"**Classification** is the sorting of living things into groups according to their likeness. We classify because the world of life is too great to be learned one by one: a system of groups lets us name a thing, remember it, and tell what it is like before we meet it."},
    {k:"bul", items:["Look first at the **features that do not change** – backbone, number of legs, covering, the way the young is fed – not at colour or size, which differ in the same kind.","Group from the broad to the narrow: **kingdom**, then **phylum** or **division**, **class**, **order**, **family**, **genus** and **species**.","A **species** is a company of living things so alike that they can breed together and have young that can breed again.","Each kind carries two Latin names, the genus and the species, so that a student in Monrovia and a student in Tokyo mean the same creature.","Every plant and animal found is put into a group; the first to describe a new kind gives it its name."]},
    {k:"rule"},
    {k:"h3", t:"Plant Adaptations"},
    {k:"p", t:"An **adaptation** is a feature of body or of habit that helps a living thing survive in its own habitat. The plant cannot run, so its body must be made for the place where its seed fell."},
    {k:"table", head:["Habitat","Adaptation","The plant that shows it"], rows:[
      ["Very dry land","Thick waxy skin, leaf reduced to spine, root long and wide, stem that stores water","Cactus, aloe, the coconut of the sand"],
      ["Water","Light spongy stem with air chambers, leaf floating and divided to let the water past, roots loose","Water lily, the fern of the swamp"],
      ["Salt water and mud","Roots that rise above the water to breathe, props against the soft mud, seed that germinates on the parent","Mangrove along our shore"],
      ["Shade of the forest","Very broad thin leaf with much chlorophyll to catch the faint light","Cocoyam, young cocoa, ginger"],
      ["Farm and open ground","Seed in great number, and root or rhizome that lives under the cut and the fire","Spear grass, the creeper that covers the fallow"]
    ]},
    {k:"bul", items:["**Insect-eating plants** (the pitcher and the sundew) live in poor soil and catch their nitrogen from flies.","**Thorn and stinging hair** defend the plant from browsing; the milk of some is poison.","**Falling of the leaf** in the dry season saves the water; the **rolling** of the leaf in the wind does the same."]},
    {k:"rule"},
    {k:"h3", t:"Plant Population and Overpopulation"},
    {k:"p", t:"A **population** is all the living things of one kind in one place. A population grows when births and germination exceed deaths, and it is held back by the **carrying capacity** of its place – the food, water, room, light and soil that can be had."},
    {k:"bul", items:["When plants are too thick they **compete**: for light, for water, for the plant food of the soil, and for room for the root.","Overcrowded plants grow tall, thin and weak; they flower late, and disease runs from plant to plant in the damp air that cannot move.","**Thinning** removes the weak seedlings so those left may stand strong; that is why the farmer leaves one plant in the station of the maize and the cassava.","Seeds spread far by wind, water, hook and bird, so a weed that has taken a field is hard to drive out.","Population is also kept down by insect, disease, drought and browsing; when these are removed the kind multiplies beyond the land's power to feed it – as the rat does in the store and the water hyacinth in the river.","The same law touches people: a town grown past its water, farm, school and hospital is a place of crowding, and land is needed to support the number."]},
    {k:"p", t:"Test it: sow bean seed thick and thin in two tins, give both the same water and light, and at three weeks measure the tallest plant, the number of leaves and the weight of the whole – then bring the two tins to the class."},
    {k:"rule"},
    {k:"h3", t:"Vertebrates and Invertebrates"},
    {k:"p", t:"Animals are first divided by one feature: whether they have a **backbone**. A **vertebrate** has a backbone and an internal skeleton; an **invertebrate** has none."},
    {k:"table", head:["Vertebrate group","Skin","Breathing","Young","Examples"], rows:[
      ["Fish","Scales, slippery with slime","Gills","Eggs in the water","Tilapia, catfish, bonga, sole"],
      ["Amphibian","Bare and moist","Skin when in water, lungs when on land","Eggs in water; the tadpole hatches and changes","Frog, toad, newt"],
      ["Reptile","Dry horny scales","Lungs","Leathery eggs on land, some hatched inside","Snake, lizard, turtle, crocodile"],
      ["Bird","Feathers, fore limbs turned to wings","Lungs with air sacs","Hard-shelled eggs, sat on","Fowl, hornbill, dove, kingfisher"],
      ["Mammal","Hair or fur; milk glands","Lungs","Born alive and suckled","Goat, cow, bat, whale, human being"]
    ]},
    {k:"bul", items:["Warm-blooded (bird and mammal) keeps an unchanging body heat and so can work in cold and at night; cold-blooded animals depend on the heat of their surroundings – which is why the snake lies on the warm road and hides in the cool when the sun is high.","**Invertebrates** hold nine parts of the animal kingdom in ten: **insect** (six legs, three body parts, often wings) – ant, termite, mosquito, butterfly; **arachnid** (eight legs) – spider, scorpion, tick; **crustacean** – crab, prawn, periwinkle-relative of the shore; **mollusc** – snail, octopus, the bivalves; **annelid worm** – earthworm, leech; and the **coelenterates**, **sponges** and others.","The **exoskeleton** of the insect is a coat on the outside, which must be cast off as the animal grows; the backbone of the vertebrate is a frame on the inside that grows with it."]},
    {k:"rule"},
    {k:"h3", t:"Key to the Groups"},
    {k:"num", items:["Is there a backbone? No – an invertebrate; yes – a vertebrate.","Is the skin scales, feathers, hair or bare? That puts the vertebrate in its class.","How does it breathe – gill, lung or skin?","Is the young hatched or born, and is it suckled?","Where does it live, in water, on land or in the air, and does it pass both at one stage?","Test your key on ten animals from the compound, the market and the river, and let another group run your key on your specimens: a good key should give the same answer to both."]},
    {k:"p", t:"Classification is the map of the living world: the pupil who can place a creature in its group knows already what it eats, where it lives, and how it brings up its young."}
  ],
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
  study:[
    /* ---- course text: Semester One, Period II (guide pp. 66-67) ---- */
    {k:"h3", t:"The Ecosystem"},
    {k:"p", t:"An **ecosystem** is all the living things in an area together with the non-living surroundings they depend on – the soil, water, air, light and warmth. Forest, pond, termite mound, mangrove, farm and the compound itself are each an ecosystem."},
    {k:"bul", items:["**Producers** – the green plants – make food from sunlight and stand at the bottom of every ecosystem.","**Consumers** eat: the **herbivore** eats plants, the **carnivore** eats flesh, and the **omnivore** eats both.","**Decomposers** – bacteria and **fungus** – break down dead body and waste, returning the mineral food to the soil for the root.","The ecosystem is held together by **interdependence**: no part stands alone; take out one link and every other is moved.","A balance is a working number of each kind; it is not fixed, but shifts with the season, the rain and the harvest."]},
    {k:"rule"},
    {k:"h3", t:"Food Chains and Food Webs"},
    {k:"p", t:"A **food chain** shows how energy passes from one living thing to another, and the arrow points the way the energy goes: **grass → goat → lion**. In this chain the grass is the producer, the goat the first consumer (herbivore), and the lion the second consumer (carnivore)."},
    {k:"num", items:["**Producer** – the plant, which stores the sun's energy in food.","**Primary consumer** – the plant-eater, grasshopper, goat, tilapia.","**Secondary consumer** – the flesh-eater that takes the plant-eater, the frog, the hawk.","**Tertiary consumer** – the greater hunter, the lion or the person.","**Decomposer** – bacteria and fungus, which finish the work on everything that dies."]},
    {k:"bul", items:["At each step most of the energy (about nine parts in ten) is lost as heat and movement, so the chain is short and the lion must have a wide country.","Because of this loss the number of prey is always greater than the number of hunters; a pond can keep many tilapia but few fish-eagle.","A **food web** is many chains crossing: the fowl eats the grain and the insect, the snake eats the rat and the frog, and the rat eats the stored rice. Real feeding is a web, not a thread.","If one kind is driven out, the creatures that fed on it hunger while the creatures it fed on multiply; the mosquito fish put into a pond reduce the mosquito, and the rat destroyed by poison may starve the owl and let the field rat increase."]},
    {k:"p", t:"Draw the web of the pond or the farm with the arrows in the direction of the energy, and mark which are producers, consumers and decomposers."},
    {k:"rule"},
    {k:"h3", t:"Habitat, Niche and Change"},
    {k:"p", t:"A **habitat** is the address of a living thing – the place it lives; its **niche** is its work and way of living – what it eats, what eats it, when it feeds and how it breeds. Two kinds cannot hold one niche in one place for long."},
    {k:"bul", items:["Forest, savannah, swamp, shore and the roof of the house each hold their own company, each fitted to it.","When the place is spoiled the population moves or falls; the frog is the first to go from a polluted stream, and the bird from the felled tree.","The **succession** of the abandoned farm: grass, then bush and shrub, then fast-growing tree, then the tall forest – and each stage brings its own animals with it."]},
    {k:"rule"},
    {k:"h3", t:"Effects of Resource Exploitation"},
    {k:"p", t:"**Exploitation** is the use of a resource for gain: farming, hunting, fishing, digging and cutting timber. Use may be right and careful, or too fast for nature to make good."},
    {k:"bul", items:["Cutting the forest without replanting leaves bare soil, washed gully, dry and silted stream, the loss of the medicine and the fruit and the animal, and the flood below.","Overhunting for the **bush meat** trade empties the forest: the colobus, the pygmy hippo, the parrot and the forest antelope go first, and the seeds they carried are no longer sown.","Overfishing with the small mesh, the poison and the blast takes the young with the old and the breeding stock with them; the shrimp trawl disturbs the bottom.","Burning the bush for the farm and for the hunt destroys the humus, the small creatures and the young tree; digging for gold and diamond fouls the river with the mud and the washing chemical.","Crowding the land past its strength strips the soil, so the field yields less while more mouths must be fed.","**Conservation** is the rule that makes use last: take the growth and spare the seed tree; keep the reserve; use the net with the legal mesh; close the season that is breeding; guard the watershed; and replant what is taken – **sustainable** use, meeting today's need without robbing tomorrow's."]},
    {k:"p", t:"Debate in class: a family must eat this year; the forest must stand for twenty years. Set out the arguments of both sides and then name the rule that lets the town do both – the forest managed for use, not shut from use."},
    {k:"rule"},
    {k:"h3", t:"Parasites"},
    {k:"p", t:"A **parasite** is a living thing that lives in or on another living thing, the **host**, and takes food from it while doing it harm. The parasite is usually small, breeds fast, and depends on the host for everything but the finding of a new one."},
    {k:"table", head:["Parasite","Lives","Effect on the host","How it is caught"], rows:[
      ["Roundworm and hookworm","In the bowel; the hookworm gets in through the bare foot","Poor blood, pot belly, weakness and dullness at school","Egg or larva in soil fouled with human waste"],
      ["Tapeworm","In the bowel from the raw or half-cooked meat of pig or cow","Hunger, weight loss and bits of worm in the stool","Uncooked infected meat"],
      ["Malaria parasite (plasmodium)","In the blood and the liver","Fever, anaemia and the great danger to the small child","Bite of the female Anopheles mosquito"],
      ["Louse and flea and tick","On the skin and in the hair and clothing","Itching, sores from scratching, and the carrying of sickness","Shared comb, cloth, bed and animal"],
      ["Scab mite and ringworm fungus","In the skin","The itch that keeps the child awake; the running ring on the scalp","Shared towel, razor and comb"],
      ["Guinea worm","Under the skin, coming out through the blister","Burning pain and swelling","Water holding the infected tiny creature – filter it through cloth"]
    ]},
    {k:"bul", items:["Plant parasites too: the **dodder** that runs over the legume, the mistletoe on the branch, the fungal rust and smut on the leaf, and the root-knot in the tomato.","Prevention: use a latrine and never pass stool on the ground; wear shoes on the damp soil; wash and cook food well; deworm as the health worker directs; treat the itch and the ringworm at once; keep hair, nails and clothing clean and never share them; wash the bed cloth and dry it in the sun."]},
    {k:"rule"},
    {k:"h3", t:"HIV and AIDS"},
    {k:"p", t:"**HIV** is a virus, too small for the light microscope, that attacks the body's power to fight disease. Without treatment the infection may pass into **AIDS**, when ordinary sicknesses become deadly. There is no cure yet, but **antiretroviral drugs** taken daily keep the virus down and the person strong, working and living – and make the risk of passing it on very small."},
    {k:"bul", items:["HIV passes by three ways only: from an infected mother to her baby before or at birth, or through milk; by blood entering a wound; and by sex with an infected person.","It does **not** pass by hugging, shaking hands, sharing a cup or a bench, eating together, coughing, or the bite of the mosquito – so no pupil need fear the classmate or the teacher living with HIV.","**Prevention** – keep off sex while young; be faithful to one partner who is tested and uninfected; use a condom at every sex act where risk exists; never share a blade, needle or toothbrush; see that every cut is dressed and used needles burnt or boxed; get tested with a partner, and treat at once; the baby of an infected mother takes the medicine given and is fed as counselled.","**Do not** believe anyone who says a wash, a herb, a charm or sex with a child can cure or prevent AIDS; that teaching is ignorance or a crime.","Go to the **voluntary counselling and testing** service; the result is private, the counsellor explains it, and the treatment is within reach.","To the person living with HIV: respect, not the whisper. To the person tempted to mock: the jest drives the sick one from the clinic, and drives the sickness deeper."]}
  ],
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
  study:[
    /* ---- course text: Semester One, Period III (guide pp. 68-69) ---- */
    {k:"h3", t:"Types of Liberian Forest"},
    {k:"p", t:"Liberia is a forest country: the greater part of the land carries **rainforest**, the evergreen and semi-evergreen forest of hot, wet weather, and the west African block that remains to us is the largest left in the region. Forest, with the mangrove and the gallery forest along the river, covers more of the land than any other crop."},
    {k:"bul", items:["**Tropical rainforest** – tall evergreen trees rising in stages, the great iroko and the trees that pass them; lianas and epiphyte; dark and cool beneath, and alive with bird, insect and mammal. Much of it is the **evergreen and semi-evergreen** forest of the interior and southwest.","**Gallery (riverine) forest** – the green ribbon that follows the river through the farming country, kept by the water it stands in.","**Secondary and old farm bush** – the regrowth on land left after cultivation, thinner and lower, which becomes forest again if it is given the years and the fire is kept from it.","**Mangrove swamp** – the salt-water forest of the shore and creek, breathing roots above the mud, the breeding place of fish and the shield against the sea.","**Savannah woodland** – the open country of grass and scattered tree in the north, burnt nearly every dry season.","**Swamp and peatland, and the island forest** of the lagoon and the sand bar."]},
    {k:"rule"},
    {k:"h3", t:"The Importance of the Forest"},
    {k:"bul", items:["**Rain and soil** – the forest breathes out water vapour that returns as rain, its leaves break the fall of the storm, and its roots hold the soil from the gully.","**Water** – the forest about the spring and the river bank keeps the stream running in the dry season and keeps the water clean.","**Food and medicine** – bush meat, fruit, mushroom, palm oil and the leaves and barks of the old people's healing; much of the world's medicine began in forest plants.","**Shelter, tool and fuel** – timber, bamboo, raffia, thatch and firewood for the house, the bed, the canoe and the cooking.","**Money and work** – timber and the certified chain of it, rubber, cocoa, coffee, kola and palm oil give wage and price; the park brings the visitor.","**Air, weather and life** – the trees take the smoke gas and give the oxygen; the forest holds a store of carbon no field can hold; and **biodiversity** – the variety of living kinds – is richest where the standing forest is.","**For the animal** – habitat and corridor for the forest elephant, the pygmy hippo, the bongo, the colobus, and the bird of the high canopy."]},
    {k:"rule"},
    {k:"h3", t:"Conservation, the Law and SCNL"},
    {k:"bul", items:["**Conservation** is the protection and wise use of a resource so that it serves still when we are old. In the forest that means cutting by plan and not by greed, leaving the young growth, and replanting.","**Forest classification** under the national forestry law: **forest land reserved** for production, protected and multipurpose uses; **wildlife sanctuary** and **national park**; and **communal forest** controlled by the community itself with a written management plan, so that the town has legal standing in its own wood.","**The Forest Development Authority (FDA)** is the state body that classifies and guards the forest, issues the permit, and keeps the record of what is cut; no tree of the reserved forest may be cut without its permission.","**SCNL** – the **Society for the Conservation of Nature in Liberia** – is the national body of the people for the protection of nature: it works for legal protection of the forest and its wildlife, teaches in the school and the town, supports the park and the ranger, and carries the country's part in the world's conservation bodies.","**Sapo National Park** in River Gee and Sinoe is the largest protected rainforest in West Africa; the **Gola** forest on the Sierra Leone border is kept as a peace park shared by the two countries; the **Mahama**, **East Porro** and **West Porro** reserves, and the **Lake Piso** community conservation area, guard the rest.","The **endangered** kinds – the pygmy hippo, the western chimpanzee, the lion, the great forest bird, the elephant and the turtle of our beach – are protected by law; killing, buying or carrying them is a crime."]},
    {k:"p", t:"Write the letter of complaint that the class sends when a truck is seen carrying timber out of the reserve without a mark: name, place, day, and the office written to."},
    {k:"rule"},
    {k:"h3", t:"Global Warming and Liberia"},
    {k:"p", t:"The gases in the air – above all **carbon dioxide** from burning coal, oil, gas and wood, and the loss of the forest that would have taken it – hold the heat of the earth as glass holds the warmth in a house. The **greenhouse effect** is this holding; when it is strengthened the world warms, and this is **global warming** or **climate change**."},
    {k:"bul", items:["**Effects on Liberia**: the rains come late or fall too heavily; the floods take road, bridge and farm; the dry season grows longer in the north; the sea creeps over the low shore and the mangrove; the heat rises in the town; new insect and sickness appear; and the reef and the forest are strained.","**Effects on Africa and the world**: shrinking lake and glacier, the desert moving south, the harvest uncertain, and the people moving from the land that will no longer feed them.","**What the world must do**: burn less and use the sun, wind and water; keep the forest standing – and Liberia's standing forest is her gift and her claim; and honour the promises of the world agreement on climate.","**What we do here**: plant and guard the tree; burn neither bush nor rubbish; save the firewood and cook with the stove that needs less; clear the drain and store the water; plant on the contour and hold the soil.","The town that plants alone loses; the nation that plants together gains. A seedling guarded by a class is worth more than a speech about the forest."]},
    {k:"rule"},
    {k:"h3", t:"Water Pollution"},
    {k:"p", t:"**Pollution** is the fouling of a natural thing by what does not belong to it. Water is polluted when waste is put into it faster than it can be carried off or made clean, and its living things die or become unfit for use."},
    {k:"table", head:["Source of pollution","What it puts in","What it does"], rows:[
      ["Human waste from the pit left open, or none at all","Germs of cholera, typhoid and worm","Sickness down the stream where people draw water"],
      ["Waste water of the house – water of washing, and oil","Grease, soap, rubbish","Chokes the stream life and the soil; makes the pool of the mosquito"],
      ["Rubbish – plastic, tin, bottle and rag","Solid refuse","Fills the drain, backs the flood, strangles the animal, and holds the water the mosquito needs"],
      ["Mining and washing of gold and diamond","Mud, and the chemical used","Cloudy water, dead fish, and poison in the downstream well"],
      ["Fertiliser and spray from the farm and the plantation","Plant food and poison","Mass of weed and algae, then the fish without air; spray reaching the stream on the wind or the rain"],
      ["Factory, garage and ship, and the cut in the soil","Oil, chemical, and silt","Poison and mud; the water no longer clean enough to treat"]
    ]},
    {k:"bul", items:["**Sewage** is the waste water of the town; it must be carried in a pipe away from the water supply and treated in ponds or a plant before it is returned to the stream – the near town of a river mouth must never be upstream of the intake.","Prevention: use a latrine, and keep it from the well; put the rubbish in a pit, a bin or the collection, not the drain or the water; keep the chemical, oil and drum away from the bank; never wash the hand pump in the stream; and leave the grass and bush strip along the bank to strain what runs off the farm.","Care of the water at home: take it from the safe source, **boil** or treat with chlorine or filter through clean cloth, keep it in a covered vessel with a tap, and wash the vessel weekly.","Every pupil, group and school should keep one stream or one spring: record its use, its pollution and its improvement; and report to the health and water officer."]},
    {k:"p", t:"Water is the last thing the forest gives and the first thing the town spoils; the class that guards a spring has done more for its county than the man who writes about it."}
  ],
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
  study:[
    /* ---- course text: Semester Two, Period IV (guide pp. 70-73) ---- */
    {k:"h3", t:"The Systems of the Body"},
    {k:"p", t:"The body works as one nation, through its **systems** – gangs of organs serving together. The food must be built up in the body; this is **assimilation**. And the body must keep the same conditions within: the temperature near 37 °C, the amount of water and salt, and the sugar of the blood – this self-balancing is **homeostasis**, kept by the nervous system and the hormones."},
    {k:"table", head:["System","Its chief parts","Its work"], rows:[
      ["Digestive","Mouth and teeth, food pipe, stomach, small and large intestine, liver and pancreas","Breaks food to simple stuff the blood can take; passes out the refuse"],
      ["Circulatory (transport)","Heart, blood vessels, blood and lymph","Carries food, air and waste to and from every cell"],
      ["Respiratory","Nose and windpipe, lungs, diaphragm","Takes in oxygen and passes out carbon dioxide"],
      ["Excretory (urinary)","Kidney, tubes, bladder","Washes the used matter out of the blood in urine"],
      ["Nervous","Brain, spinal cord, nerves","Rules and joins all activity; feels, thinks and remembers"],
      ["Skeletal","Bones, joint, cartilage","Frame, levers for movement, protection of brain, heart and lung; the marrow makes blood cells"],
      ["Muscular","Muscles fastened to bone by tendon","Movement, posture, and heat; the heart is a muscle"],
      ["Endocrine","The ductless glands","Pour out the hormones that govern growth, the changes of puberty and the use of food"],
      ["Reproductive","The male and female organs","Makes the cells by which a new person begins"],
      ["Immune (defence)","White cells, lymph node, spleen","Fight the germ and build the power to resist it"]
    ]},
    {k:"bul", items:["The **blood** carries food, air and waste: **red cells** with **haemoglobin** (made from iron) carry oxygen, **white cells** fight germ, **platelets** clot the wound, and the pale liquid plasma floats them all.","**Lymph** is the fluid drained from the tissues, returning to the blood and filtering through the gland.","The **kidney** filters the blood, keeps what is useful and sends waste out as urine – about 1.5 litres a day; water must be drunk or the kidney cannot work.","The bones of a child are more cartilage than bone, and the joints are **movable** at shoulder and knee, **slightly movable** in the back, and fixed in the skull."]},
    {k:"rule"},
    {k:"h3", t:"Care of the Systems"},
    {k:"bul", items:["**Back and bone** – sit with the back against the chair and the book raised, carry the load on the back or on both shoulders, lift with bent knees, sleep on a firm pad, and take the milk, fish, bone, egg, green leaf and sunlight that give the lime and the vitamin D.","**Teeth** – brush morning and night and after food, keep off sweet and soda, and go to the dentist for the hole before the pain comes; a milk tooth that is loose falls and a new one stands in its place.","**Eyes** – read in good light, hold the book about 25 cm away, rest the eye from the screen, wear the shade at the glare, never rub with a dirty hand, and get the glasses after an examination when the board is blurred.","**Ears** – keep them dry, never push anything into the canal, see the health worker at once for running water, pain or the hearing that has gone dull, and cover them at the loud machine.","**Nose and throat** – blow one side at a time with the mouth open; breathe through the nose, which warms and strains the air, and not through the mouth; use clean water for the nose and drink no water from an open vessel.","**Skin** – bathe with soap and clean water, dry well, wear clean dry clothing, wash between the fingers and toes and the folds, and treat the itch and the ringworm at once.","**Heart and blood** – be active every day, take the iron and the protective foods, keep off tobacco and smoke, and rest when the chest aches.","**Breathing** – keep the air of the room moving, sleep with the window open; never smoke nor sit in smoke; cover the mouth in cough and sneeze, and never spit on the floor.","**Food and bowels** – eat on times, chew well, take roughage and water daily, and never pass over the wish to empty the bowel."]},
    {k:"rule"},
    {k:"h3", t:"Communicable Diseases"},
    {k:"p", t:"A **communicable (infectious) disease** is a sickness caused by a living germ – **bacteria**, **virus**, or a small animal creature – that can pass from one person or animal to another. A **non-communicable disease** is not passed on: it comes from the body's own failing, its chemistry or its habit, as in diabetes, high blood pressure, asthma, sickle cell disease and cancer. An **infection** is the germ's entry and multiplying in the body, and **contagion** is its passing directly."},
    {k:"bul", items:["**Cough and sneeze** – the droplets of TB, pneumonia, influenza, cold and measles thrown into the air.","**Food and water** – cholera, typhoid, dysentery, diarrhoea and hepatitis A from water or food fouled with human waste.","**Touch, shared thing and wound** – scab, ringworm, itch, and the germ of tetanus from a dirty cut; blood disease from the shared blade or needle.","**Insect and animal** – the Anopheles mosquito carries **malaria** and dengue; the tsetse the sleeping sickness; the flea plague; the tick its fevers; the dog rabies; the louse typhus.","**From mother to child** – HIV, syphilis and hepatitis before or at birth or through milk.","**Soil** – hookworm through the bare foot."]},
    {k:"table", head:["Disease","Chief signs","How it is prevented"], rows:[
      ["Cholera and typhoid","Watery rice-water stool and vomiting (cholera); long fever and weakness (typhoid)","Boil, treat or filter the water; wash hands with soap; use a latrine; food covered and flies off it; vaccination when offered"],
      ["Malaria","Fever with shaking, headache, vomiting; danger for the child and the pregnant woman","Net, screen, cleared grass and standing water, fogging, prompt test and the full medicine"],
      ["Tuberculosis (TB)","Cough longer than three weeks, wasting, night sweat, sometimes blood","Cover the cough, air and sun in the room, the BCG vaccine, and the full six-month treatment of the case from the clinic"],
      ["Hepatitis A and B","Yellow eye and skin, dark water, pain under the ribs","Safe water and food and the vaccine; never share a blade, razor or needle"],
      ["Measles","Fever, running eye, then the rash","Vaccination in the child; keep the sick child from others and give the vitamin A"],
      ["Polio","Fever and the stiff neck, then the limb that will not bear","The drops of the vaccine, and water away from waste"],
      ["Yaws and scab","The running sore, and the itch that keeps from sleep","Clean body, clothing washed and dried in sun, no sharing of cloth or blade, and the medicine of the clinic"],
      ["Conjunctivitis and the child's eye disease","Red eye, running water, and the white film of the pupil","Wash hands and face; no shared towel or cloth; the eye medicine and the operation of the clinic"],
      ["Rabies","Fear, thirst and madness after the bite","Vaccinate the dog; wash the bite with soap and running water at once and go for the injections"]
    ]},
    {k:"p", t:"**Immunisation** is the protection given by the vaccine, which teaches the body to make its own defence before the disease comes: BCG, polio, measles, yellow fever, hepatitis B and the rest of the **national immunisation days**. A child without the card is not safe, and a community that refuses the drops brings back the sickness it had buried."},
    {k:"rule"},
    {k:"h3", t:"Prevention of Disease"},
    {k:"bul", items:["**Sanitation** is the keeping of the surroundings from what breeds disease: the latrine used and clean, the drain open to carry the water off, the refuse in the pit or the bin, the house with air and light, the water covered, and the compound cut short.","**Food** – wash the fruit and the leaf, cook the flesh and fish well, keep raw and cooked apart, cover what is left, and never eat what has a smell or a film.","**Habits** – wash the hands with soap before eating and after the toilet; brush the teeth; bathe; sleep under the net; wash the wound; rest; exercise; and cough into the sleeve.","**Against the germ's path** – fly and rat out of the food; the sick person apart and the cough covered; nothing shared that touches blood or skin; and shoes on the soil.","**Health of the mind** – talk with an adult you trust; keep a friend and a club; and see the counsellor for the sadness that will not lift. The mind and the body are one care.","**Public health** – the clinic, the health worker and the campaign; report the fever and the diarrhoea in a day, and take the water and food with seriousness when the town is warned."]},
    {k:"rule"},
    {k:"h3", t:"Exercise, Rest and Diet"},
    {k:"bul", items:["**Balanced diet** – food from the three groups daily: energy (rice, cassava, oil, sugar), body-building (fish, meat, egg, bean, groundnut, milk) and protective (fruit and green leaf). Eat on times, in the amount that the body uses, and chew well; drink safe water by the cupful through the day.","The adolescent needs more food and iron, more sleep, and more movement than the child; the pregnant and nursing mother needs more of every good thing.","**Exercise** – walk, run, play, work, and dance daily for half an hour at least: the heart and lung, the muscle and bone, the sleep and the calm mind come of it, and the body that is used is the body that resists.","**Rest** – sleep 8 to 10 hours at this age with the room aired; stop and rest before the tiredness is deep; keep a quiet hour daily; and take the day of the Lord or the Sabbath as the day of the whole family.","**Restlessness** in the body shows as fidget, headache and dull eye; in the mind, as the bad temper, the care that will not lie down and the lesson that will not enter. Cure both with sleep, food, play, the talk with an adult and the day without the screen."]},
    {k:"p", t:"Keep the week's health log: the food of each day in its three groups, the hours of sleep, the exercise, the water drunk, and the day's one bad habit; then write the change you will make next week – and the change your household will make with you."}
  ],
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
  study:[
    /* ---- course text: Semester Two, Period V (guide pp. 74-75) ---- */
    {k:"h3", t:"Work"},
    {k:"p", t:"**Work** is done when a force moves an object through a distance in the direction of the force."},
    {k:"bul", items:["**Work = force × distance**; W = F × d.","The unit of work is the **joule (J)**: one newton moving a body one metre does one joule. A 1 kg bag of rice lifted 1 metre takes about 10 J.","**Power** is the rate of doing work, P = W ÷ t, measured in **watts (W)**; 1,000 W = 1 kilowatt, and the lamp, the fridge and the iron are all sold by their watts.","A machine may do the same work with less force, more speed, or force turned another way, but it never does more work than is put into it."]},
    {k:"rule"},
    {k:"h3", t:"Machines, Effort and Load"},
    {k:"p", t:"A **machine** is a device that makes work easier, faster or safer by changing the size or the direction of a force. The force you put on is the **effort (E)**; the weight to be moved is the **load (L)**; the distance the effort moves is the **effort distance** and the distance the load moves the **load distance**."},
    {k:"table", head:["Simple machine","Its law of helping","Everyday use"], rows:[
      ["Lever","Effort × its arm = Load × its arm; the long arm multiplies the force","Crowbar, wheelbarrow, seesaw, the forearm, the pair of scissors"],
      ["Pulley","Each rope supporting the load divides the effort required","Well bucket, flag halyard, lifting a bag to the loft"],
      ["Wheel and axle","Force on the large wheel overcomes a greater pull on the small axle","Bicycle, winch, door knob, the steering wheel"],
      ["Inclined plane","Longer way but less force: work stays the same","Plank, gangway, hill road, the wedge and the screw"],
      ["Gears","A small wheel driving a large one multiplies force; the large driving the small multiplies speed","Bicycle and motor, clock, the grinding mill"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Mechanical Advantage and Efficiency"},
    {k:"p", t:"**Mechanical advantage (MA)** tells how many times a machine multiplies the force: **MA = load ÷ effort**. A machine that lifts a 100 N load with an effort of 25 N has MA = 100 ÷ 25 = **4**."},
    {k:"bul", items:["**Velocity ratio (VR)** = distance moved by the effort ÷ distance moved by the load; for the ideal machine with nothing wasted MA equals VR.","In the real machine MA is always less, because of **friction** and the weight of the machine itself.","**Efficiency = (work out ÷ work in) × 100 %** = (MA ÷ VR) × 100 %. Work out is always less than work in, so no machine is 100 % efficient – the lost work is paid for in heat and wear.","To raise the efficiency: **lubricate** with oil or grease, polish the surfaces, use the ball bearing, keep the machine clean and tight, and stream-line what moves through air or water.","A machine of MA 4 that wastes a third of the work has an efficiency near 67 % – the buyer who counts only the force he saves and never the friction pays for it in fuel and in repair."]},
    {k:"p", t:"A wheelbarrow is a **compound machine**: lever, wheel and axle, and the wedge of the blade. Take one to pieces and name every simple machine in it."},
    {k:"rule"},
    {k:"h3", t:"Machines in Daily Life"},
    {k:"bul", items:["The lever in the hand cart and the bottle opener, the pulley at the well and the crane, the inclined plane of the loading gangway, the wedge of axe, knife and tooth, the screw of lid, clamp and drill, and the wheel and axle in every vehicle.","**Work done by machine and by hand**: two pupils heap a basin of sand with and without the plank; both do the same work against gravity, but the plank gives it with less force and more time.","The study of machines is a study of waste: find the friction of the class, the compound and the workshop, and name one change that would save it."]},
    {k:"rule"},
    {k:"h3", t:"Safety with Machines"},
    {k:"num", items:["Wear the close clothing, the tied hair, the shoe and the goggle; take off ring and chain, and put on the ear guard at the loud machine.","Check the guard, the tight bolt and the sharp edge before starting; keep the guard on the grindstone and the saw.","Never reach over a moving part; stop the machine to clear a jam, and lock the switch off with the key on you.","Use the handle and the hold: never the bare hand, never the wet hand at the electric tool, and never the cracked cord.","Stop and report the strange noise, smell or shake; do not work at a machine you have not been taught.","Keep the finger, the foot and the loose cloth from the blade, the roller and the press – and remember the last cut is as sharp as the first.","Lift with bent knees; push rather than pull the loaded barrow; keep the barrow's load low and the way clear."]},
    {k:"p", t:"Test the arithmetic of the compound: with a 2-m plank a 500 N drum is rolled up with 200 N of push; the work done on the drum is 500 N × 1 m = 500 J, the work put in is 200 N × 2 m = 400 J – and a student who finds the answer impossible has met the first question that science asks of a machine. Compute the MA (500 ÷ 200 = 2.5), the VR (2 ÷ 1 = 2) and the efficiency (2.5 ÷ 2 = 1.25) – and then say why a figure greater than 100 % means an error in the measurement, since no machine gives back more than it takes. This is the best lesson of the period: the number that offends the law of energy tells you to measure again."}
  ],
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
  study:[
    /* ---- course text: Semester Two, Period VI (guide pp. 76-78) ---- */
    {k:"h3", t:"Elements and Symbols"},
    {k:"p", t:"An **element** is a substance that cannot be broken down into anything simpler by chemical means; it is made of one kind of **atom**. About 118 elements are known, and near 90 of them are found in nature; everything else is a compound or a mixture built from them."},
    {k:"bul", items:["A **symbol** is the short sign for an element, from its English or Latin name: the first letter capital, and a second small – **H** hydrogen, **O** oxygen, **C** carbon, **N** nitrogen, **Fe** iron (ferrum), **Na** sodium (natrium), **K** potassium, **Cu** copper, **Ag** silver, **Au** gold, **Pb** lead, **Ca** calcium, **Cl** chlorine, **S** sulfur, **Mg** magnesium, **Al** aluminium, **Zn** zinc, **Sn** tin, **Hg** mercury.","A symbol means one atom of the element, and so many grams of it equal to its atomic mass: 12 g of carbon, 16 g of oxygen, 56 g of iron.","The **periodic table** arranges the elements in rows by increasing number and in columns of like behaviour: the **metals** shine, are drawn to wire, hammered thin, and carry heat and current; the **non-metals** are dull, brittle and poor conductors; the **noble gases** hardly react at all.","The smallest particle of an element that can enter a chemical change is an **atom**; every atom is a tiny **nucleus** of protons and neutrons with the electrons moving about it – almost all of an atom is empty room."]},
    {k:"rule"},
    {k:"h3", t:"Compounds, Formulae and Molecules"},
    {k:"p", t:"A **compound** is two or more elements **chemically joined** in a fixed proportion by mass; it has a nature of its own, unlike the parts that made it. Common salt is safe to eat though sodium metal burns on water and chlorine gas is a poison."},
    {k:"bul", items:["A **formula** shows the atoms in a compound: **H₂O** – two hydrogen and one oxygen; **CO₂** – one carbon and two oxygen; **NaCl** – one sodium and one chlorine; CaCO₃ (lime stone), H₂SO₄ (the battery acid), NaHCO₃ (cooking soda) and C₆H₁₂O₆ (glucose).","A **molecule** is the smallest particle of a substance that can stand alone and still be that substance: one molecule of water holds two atoms of hydrogen and one of oxygen; oxygen gas is O₂, hydrogen gas H₂, and the metals are single atoms packed together.","A **diatomic molecule** is two atoms joined (O₂, H₂, N₂, Cl₂); an atom of a noble gas stands alone.","The number of atoms in a formula is read from the **subscript** written after the symbol; the figure before a formula multiplies the whole (2H₂O is two molecules, four hydrogen atoms and two oxygen).","A **mixture** is two or more substances merely mixed, in no fixed proportion, each keeping its own nature – air, sea water, soil, sand and salt, pepper and rice."]},
    {k:"table", head:["","Compound","Mixture"], rows:[
      ["How made","Elements chemically joined","Substances merely mixed"],
      ["Proportion","Fixed and always the same","Variable"],
      ["Nature of parts","New substance unlike the parts","Each part keeps its own nature"],
      ["Separated by","Chemical action (electrolysis, burning)","Physical means: pick, sieve, filter, settle, evaporate, magnet"],
      ["Examples","Water, salt, carbon dioxide, sand","Air, sea water, soil, the drink with the sugar in it"]
    ]},
    {k:"p", t:"In a **chemical change** new substances are formed – the nail rusts, the candle burns, the milk sours, the powder fizzes in the acid – and mass is neither lost nor gained. In a **physical change** only form or state moves, and it can be undone: melting, dissolving, cutting and evaporating."},
    {k:"rule"},
    {k:"h3", t:"Separating Mixtures"},
    {k:"table", head:["Method","What it separates","How it is done"], rows:[
      ["Picking and hand-sorting","Big unlike bits – stone from rice","By hand, on a tray"],
      ["Sieving and grading","Fine from coarse – sand from gravel","Through a mesh the one size can pass"],
      ["Magnetic separation","Iron from other matter","A magnet or a magnetic roller draws the filings, the tin scrap and the nails"],
      ["Winnowing","Chaff from grain","The light part is blown aside as the heavier falls"],
      ["Sedimentation and decantation","Heavy solid from liquid","Let it settle, then pour the water off – as the paddy water is poured from the washed rice"],
      ["Filtration","Insoluble solid from liquid","Pour through filter paper or clean cloth; the liquid that passes is the filtrate, what stays on the paper the residue"],
      ["Evaporation to dryness","Dissolved solid from the liquid","Boil the salt water in a dish; the salt is left – as salt is won from the sea in the shallow pans"],
      ["Crystallisation","Dissolved solid in clean form","Cool the strong hot solution slowly so the crystals grow, then drain them"],
      ["Distillation","Liquid from dissolved matter, or one liquid from another","Boil, and pass the vapour through the cold tube where it condenses and is caught; this makes clean distilled water for the lab and the battery"],
      ["Chromatography","The colours mixed in an ink or a dye","Let the liquid run up the paper and carry the colours at different speeds"]
    ]},
    {k:"p", t:"Work the two in series: **sand and salt** – add water and stir, filter off the sand, and evaporate the water from the filtrate to leave the salt. Sea water – filter, then either evaporate for the salt or distill for the drinking water. Both are done in the kitchen and at the salt pan, and the pupil who can plan them has learned chemistry as work, not as a lesson."},
    {k:"rule"},
    {k:"h3", t:"Common Substances"},
    {k:"bul", items:["**Water** (H₂O) – the universal solvent; the home of life, and the thing a village will quarrel over and die for if it is dirty.","**Lime** – quicklime and slaked lime; used in the mortar, to sweeten an acid soil, and in the wash; **chalk and limestone** are calcium carbonate.","**Common salt** (NaCl) – food, preserver and the raw material of soap, glass and bleach.","**Sugar** (C₁₂H₂₂O₁₁) and **starch** – the store of energy in the plant and in the body; iodine turns starch blue-black, the test of both.","**Wood and charcoal** – carbon with what the plant took from the air; the fuel of the house and the source of the ash.","**Carbon dioxide** (CO₂) – the gas of fizzing, of the fire that will not burn and of the leaf's food; **oxygen** (O₂) – the gas that keeps fire and breath going.","**Acids** – sour, and they eat metal: the citric of lemon, the acetic of vinegar, and the strong sulphuric and nitric of the battery, the factory and the laboratory; **bases** – soap-like, bitter and slippery, and they neutralise an acid to give salt and water. A **neutral** such as pure water is neither.","**Alloy** – a mixture of metals: brass (copper and zinc), bronze, solder, and steel (iron with a little carbon); a home for the tin plate and the roofing sheet, the pot, the wire and the coin.","Everyday uses: soap from oil and alkali, bleaching powder and the water treatment, the fertiliser from the mine, cement for the block, medicine for the sickness, and the gas for the flame. Chemical work has taken the washing, the light and the medicine off the arm of the people – and the same chemistry wastes its way into the soil, the river and the air if it is not handled and stored with the rule and the cap."]},
    {k:"p", t:"Test with your own hands: filter the muddy water through cloth, then evaporate a spoon of the clear water on a clean lid – the film left in the lid is what was dissolved in it, and the day's lesson is finished with a number instead of a memory."}
  ],
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
