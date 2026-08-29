/* Curriculum data — Republic of Liberia, Junior High GENERAL SCIENCE, Grades 7–9
   Derived from the "General Science 7-9" curriculum guide (59 pp.), 6 periods per grade.

   Same unit shape as the elementary SC_CURRICULUM so GEN_SC renders it unchanged:
     terms[] {t,d,x} · facts[] {q,a} · tf[] {s,a,why} · classify · diagram
     · experiment · apply[] {q,a} · activities[] · materials[] · assessment[]

   Per the project rule, the external links listed in the source guide
   (www.dictionary.com, www.dison.com, www.khanacademy.com, www.nature.com,
   www.owlcation.com, www.sciencefun.org, www.sciencekids.org, www.sporcle.com)
   are deliberately omitted: the pack must stay fully offline.
*/

const SC_CURRICULUM_79 = [

/* ================================ GRADE 7 ================================ */
{
  grade:7, period:"I", sem:"One", icon:"🔬",
  title:"Scientific Knowledge, Measurement and Non-Living Matter",
  subtitle:"Unit I: Scientific method, the two systems of measurement, and matter",
  outcomes:["Apply scientific methods using relevant acquired skills to solve problems","Interpret the characteristics of matter and describe the changes that take place in the environment"],
  objectives:["Discover science and scientific knowledge","Organize simple methods of acquiring scientific knowledge","Compare the two systems of measurement","Demonstrate the use of the two systems of measurement in solving problems","Outline the characteristics of non-living matter","Discuss the states of matter and their properties","Distinguish the forms of matter with examples"],
  note:"<b>Science</b> is organized knowledge obtained by observation and experiment. A <b>fact</b> can be tested and verified; <b>fiction</b> and superstition cannot. Scientists work through the <b>scientific method</b>: observe, ask a question, form a hypothesis, experiment, record results and draw a conclusion. Quantities are measured in the <b>metric (SI) system</b> or the older <b>English system</b>.",
  focus:["Definition of science","Scientific method and scientific attitude","Metric and English systems of measurement","Non-living matter and its characteristics","States of matter","Elements, compounds and mixtures"],
  terms:[
    {t:"science", d:"organized knowledge gained through observation and experiment", x:"Science explains why objects fall."},
    {t:"hypothesis", d:"a testable statement suggested as an answer before experimenting", x:"My hypothesis is that sugar dissolves faster in hot water."},
    {t:"observation", d:"careful use of the senses or instruments to gather information", x:"She recorded her observation of the boiling water."},
    {t:"experiment", d:"a fair test carried out to check a hypothesis", x:"The experiment proved the hypothesis correct."},
    {t:"conclusion", d:"the judgement drawn after examining the results", x:"The conclusion supported the hypothesis."},
    {t:"metric system", d:"the decimal system of measurement based on metres, grams and litres", x:"The metric system uses the kilogram."},
    {t:"English system", d:"the older system using feet, pounds and gallons", x:"The English system measures in inches."},
    {t:"mass", d:"the amount of matter in an object", x:"The mass of the stone is 250 g."},
    {t:"volume", d:"the amount of space an object occupies", x:"The volume of water is 50 cm³."},
    {t:"density", d:"mass per unit volume of a substance", x:"Density is found by dividing mass by volume."},
    {t:"matter", d:"anything that has mass and occupies space", x:"Air is matter because it has mass."},
    {t:"element", d:"a substance made of only one kind of atom", x:"Oxygen is an element."},
    {t:"compound", d:"two or more elements chemically combined", x:"Water is a compound."},
    {t:"mixture", d:"substances put together but not chemically joined", x:"Air is a mixture of gases."}
  ],
  facts:[
    {q:"What is science?", a:"Organized knowledge about the world gained through observation and experiment."},
    {q:"List the steps of the scientific method in order.", a:"Observe, state the problem, form a hypothesis, experiment, record and analyse results, draw a conclusion."},
    {q:"Name the two systems of measurement.", a:"The metric (SI) system and the English system."},
    {q:"What is the metric unit of mass, length and volume?", a:"The gram (or kilogram), the metre and the litre."},
    {q:"Define matter.", a:"Anything that has mass and occupies space."},
    {q:"State the three states of matter.", a:"Solid, liquid and gas."},
    {q:"How is density calculated?", a:"Density = mass ÷ volume."},
    {q:"Give one difference between a compound and a mixture.", a:"A compound is chemically joined in fixed proportions; a mixture is not chemically joined and can be separated physically."}
  ],
  tf:[
    {s:"A hypothesis is a proven fact.", a:"false", why:"A hypothesis is only a suggested answer that still has to be tested by experiment."},
    {s:"The metre is the metric unit of length.", a:"true", why:"The metric system is built on the metre for length."},
    {s:"Gases have a fixed shape and a fixed volume.", a:"false", why:"A gas has neither a fixed shape nor a fixed volume; it fills its container."},
    {s:"Density is found by dividing mass by volume.", a:"true", why:"Density is defined as mass per unit volume."},
    {s:"Air is a compound.", a:"false", why:"Air is a mixture of gases that are not chemically joined."},
    {s:"Matter must have mass and occupy space.", a:"true", why:"That is the definition of matter."}
  ],
  classify:{ title:"Element, compound or mixture?", groups:[
    {name:"Elements", items:["oxygen","iron","carbon","copper"]},
    {name:"Compounds", items:["water","common salt","carbon dioxide","rust"]},
    {name:"Mixtures", items:["air","sea water","soil","palm oil and water"]}
  ]},
  diagram:{ title:"Steps of the scientific method", caption:"Write what the scientist does at each step.", parts:[
    {p:"Observation", f:"Notices something in the environment and records it carefully"},
    {p:"Statement of the problem", f:"Puts the puzzle into a clear question that can be investigated"},
    {p:"Hypothesis", f:"Suggests a testable answer to the question"},
    {p:"Experiment", f:"Carries out a fair test, changing one factor at a time"},
    {p:"Recording of data", f:"Writes down measurements and observations as they happen"},
    {p:"Conclusion", f:"States whether the results support the hypothesis"}
  ]},
  experiment:{
    title:"Measuring the Volume of an Irregular Solid by Displacement",
    aim:"To find the volume of a stone using a measuring cylinder.",
    materials:["A measuring cylinder","Water","A small stone","A piece of thread","A balance"],
    steps:[
      "Pour water into the measuring cylinder and record the first reading, V₁.",
      "Tie the thread to the stone and lower it gently until it is fully covered by the water.",
      "Record the new water level, V₂.",
      "Work out the volume of the stone as V₂ − V₁.",
      "Find the mass of the stone on the balance and calculate its density as mass ÷ volume."
    ],
    expect:"The water rises, and the rise in level equals the volume of the stone.",
    why:"A solid pushes aside (displaces) its own volume of water, so the increase in the reading is exactly the volume of the stone."
  },
  apply:[
    {q:"A learner claims a charm cures malaria. How would a scientist test this claim?", a:"By using the scientific method — forming a hypothesis and running a fair, controlled test with records, rather than accepting the claim as fact."},
    {q:"Why do scientists all over the world prefer the metric system?", a:"It is decimal, so units convert easily by multiplying or dividing by ten, and it is used internationally so results can be compared."},
    {q:"A block has a mass of 60 g and a volume of 20 cm³. Find its density.", a:"Density = 60 ÷ 20 = 3 g/cm³."}
  ],
  activities:["Practise the steps of the scientific method on a class problem","Measure mass, length and volume using metric instruments","Convert between metric units","Classify substances as element, compound or mixture"],
  materials:["Measuring cylinders, balances and metre rules","Stones, water and containers","Charts of the metric system","Samples of common substances"],
  assessment:["Quiz on the scientific method","Practical measurement exercise","Laboratory report","Classification test"]
},
{
  grade:7, period:"II", sem:"One", icon:"🌱",
  title:"Living Matter",
  subtitle:"Unit II: Characteristics of living things, the cell, and the parts of a plant",
  outcomes:["Demonstrate a positive attitude towards the environment and use natural resources sustainably","Develop self-control and respect for oneself"],
  objectives:["Highlight the characteristics of living matter","Recognize the cell as the basic unit of living things","Differentiate between plants and animals","Assess the basic structure of plants and their functions","Determine the characteristics of flowering and non-flowering plants","Model the parts of a plant"],
  note:"All <b>living things</b> carry out seven life processes, remembered as <b>MRS GREN</b>: Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion and Nutrition. The <b>cell</b> is the basic unit of every living thing. Green plants make their own food by <b>photosynthesis</b>, which is why they are called producers.",
  focus:["Characteristics of living things","The cell as the basic unit","Differences between plants and animals","Root and shoot systems","Photosynthesis","Flowering and non-flowering plants"],
  terms:[
    {t:"cell", d:"the smallest unit of a living thing", x:"The cell is the building block of the body."},
    {t:"organism", d:"any complete living thing", x:"A goat is an organism."},
    {t:"photosynthesis", d:"the process by which green plants make food using sunlight", x:"Photosynthesis takes place in the leaf."},
    {t:"chlorophyll", d:"the green colouring in leaves that traps sunlight", x:"Chlorophyll makes the leaf green."},
    {t:"respiration", d:"the release of energy from food in the cells", x:"Respiration goes on day and night."},
    {t:"excretion", d:"the removal of waste made in the body", x:"Excretion removes carbon dioxide."},
    {t:"sensitivity", d:"the ability to respond to changes around one", x:"Sensitivity makes a plant bend to light."},
    {t:"root system", d:"the part of the plant below the soil", x:"The root system absorbs water."},
    {t:"shoot system", d:"the stem, leaves and flowers above the soil", x:"The shoot system carries the leaves."},
    {t:"stomata", d:"tiny holes in the leaf for gas exchange", x:"Air enters the leaf through the stomata."},
    {t:"flowering plant", d:"a plant that bears flowers and seeds", x:"The mango is a flowering plant."},
    {t:"non-flowering plant", d:"a plant that reproduces without flowers, by spores", x:"Ferns are non-flowering plants."}
  ],
  facts:[
    {q:"Name the seven characteristics of living things.", a:"Movement, respiration, sensitivity, growth, reproduction, excretion and nutrition."},
    {q:"What is the basic unit of all living things?", a:"The cell."},
    {q:"State two differences between plants and animals.", a:"Plants make their own food and are fixed in one place; animals feed on other organisms and can move about freely."},
    {q:"Which part of the plant absorbs water and mineral salts?", a:"The root."},
    {q:"What is the function of the leaf?", a:"To make food by photosynthesis."},
    {q:"Name the gas taken in and the gas given out during photosynthesis.", a:"Carbon dioxide is taken in and oxygen is given out."},
    {q:"Give one example each of a flowering and a non-flowering plant.", a:"Mango is flowering; fern is non-flowering."}
  ],
  tf:[
    {s:"All living things are made of cells.", a:"true", why:"The cell is the basic structural unit of every living organism."},
    {s:"Plants cannot respire.", a:"false", why:"Plants respire day and night to release energy; photosynthesis is a separate process."},
    {s:"Chlorophyll traps sunlight for photosynthesis.", a:"true", why:"Chlorophyll is the green pigment that absorbs light energy."},
    {s:"Ferns reproduce by seeds.", a:"false", why:"Ferns are non-flowering and reproduce by spores."},
    {s:"The stem transports water and food through the plant.", a:"true", why:"The stem carries raw materials up and manufactured food down."}
  ],
  classify:{ title:"Sort these living things", groups:[
    {name:"Plants", items:["cassava","fern","mango tree","grass"]},
    {name:"Animals", items:["goat","fish","grasshopper","bird"]},
    {name:"Non-flowering plants", items:["fern","moss","algae","mushroom"]}
  ]},
  diagram:{ title:"Parts of a flowering plant and their functions", caption:"Write the work each part does.", parts:[
    {p:"Root", f:"Absorbs water and mineral salts and fixes the plant firmly in the soil"},
    {p:"Stem", f:"Supports the plant and transports water, minerals and food"},
    {p:"Leaf", f:"Makes food by photosynthesis and exchanges gases"},
    {p:"Flower", f:"The reproductive part that forms fruits and seeds"},
    {p:"Chlorophyll", f:"Traps sunlight energy so that food can be made"},
    {p:"Stomata", f:"Small openings that let carbon dioxide in and oxygen and water vapour out"}
  ]},
  experiment:{
    title:"Comparing a Plant Grown in Sunlight with One Grown in the Shade",
    aim:"To show that green plants need sunlight to grow well.",
    materials:["Two young plants of the same kind and size","Two pots with the same soil","Water","A sunny place and a dark shaded place"],
    steps:[
      "Plant the two seedlings in identical pots with the same amount of soil.",
      "Place one pot in bright sunlight and the other in a dark shaded place.",
      "Give both plants the same amount of water each day.",
      "Observe both plants for two weeks and record the colour, height and number of leaves.",
      "Compare the two plants and record your conclusion."
    ],
    expect:"The plant in sunlight stays green and healthy; the plant in the shade becomes pale, weak and spindly.",
    why:"Sunlight is needed for photosynthesis. Without light the plant cannot make enough food, so it loses its green colour and grows poorly."
  },
  apply:[
    {q:"Why is a green plant called a producer?", a:"Because it makes its own food by photosynthesis and so provides food for other organisms."},
    {q:"A potted plant on a window sill bends towards the window. Which characteristic of living things does this show?", a:"Sensitivity — the plant responds to the direction of light."},
    {q:"Why would clearing all the forest harm the community?", a:"Plants supply oxygen, food, medicine and shade, and hold the soil together; removing them causes erosion and loss of these resources."}
  ],
  activities:["Draw and label a flowering plant","Examine leaves and roots collected locally","Compare growth of plants in light and shade","Group living things as plants or animals"],
  materials:["Live plant specimens","Hand lenses","Pots, soil and seedlings","Charts of plant structure"],
  assessment:["Labelled diagram of a plant","Quiz on the characteristics of living things","Practical growth report","Class presentation"]
},
{
  grade:7, period:"III", sem:"One", icon:"⚡",
  title:"Energy",
  subtitle:"Unit III: Kinds and forms of energy, work, and simple machines",
  outcomes:["Interpret the concept of energy and recognize its forms and safe use","Apply knowledge acquired to the use of simple machines"],
  objectives:["Explain the meaning of energy","Discuss the kinds of energy with examples","Discuss the forms of energy with examples","Explain the relationship between work and energy","Explain ways in which we can conserve energy and natural resources","Discuss the principles associated with simple machines","Describe the six kinds of simple machine and their uses"],
  note:"<b>Energy</b> is the ability to do work. Stored energy is <b>potential energy</b>; energy of movement is <b>kinetic energy</b>. Energy is never destroyed — it only changes from one form to another. A <b>simple machine</b> does not create energy; it makes work easier by changing the size or direction of a force.",
  focus:["Definition of energy","Potential and kinetic energy","Forms of energy","Energy conversion","Work and energy","The six simple machines"],
  terms:[
    {t:"energy", d:"the ability to do work", x:"Food gives the body energy."},
    {t:"potential energy", d:"stored energy an object has because of its position or condition", x:"A stone on a hill has potential energy."},
    {t:"kinetic energy", d:"the energy a body has because it is moving", x:"A rolling ball has kinetic energy."},
    {t:"work", d:"what is done when a force moves an object through a distance", x:"Work = force × distance."},
    {t:"machine", d:"a device that makes work easier", x:"A wheelbarrow is a machine."},
    {t:"lever", d:"a rigid bar that turns about a fixed point", x:"A crowbar is a lever."},
    {t:"fulcrum", d:"the fixed point about which a lever turns", x:"The fulcrum is in the middle of a see-saw."},
    {t:"inclined plane", d:"a slanting surface used to raise a load", x:"A ramp is an inclined plane."},
    {t:"pulley", d:"a grooved wheel with a rope used to lift loads", x:"A pulley raises water from a well."},
    {t:"wheel and axle", d:"a wheel fixed to a rod that turns with it", x:"A steering wheel is a wheel and axle."},
    {t:"screw", d:"an inclined plane wound round a cylinder", x:"A screw holds wood together."},
    {t:"energy conversion", d:"the change of energy from one form to another", x:"A lamp converts electrical energy to light."}
  ],
  facts:[
    {q:"Define energy.", a:"The ability to do work."},
    {q:"Name the two kinds of energy.", a:"Potential energy and kinetic energy."},
    {q:"List four forms of energy.", a:"Heat, light, sound, chemical, electrical, mechanical and solar energy (any four)."},
    {q:"State the relationship between work, force and distance.", a:"Work = force × distance."},
    {q:"Name the six simple machines.", a:"Lever, inclined plane, screw, wedge, wheel and axle, and pulley."},
    {q:"What energy change happens when a stone falls?", a:"Potential energy changes to kinetic energy."},
    {q:"Give two ways of conserving energy at home.", a:"Switch off lights and appliances when not in use, and cook with a well-covered pot to save fuel."}
  ],
  tf:[
    {s:"A machine creates energy.", a:"false", why:"A machine only makes work easier; it cannot create energy."},
    {s:"A stretched catapult has potential energy.", a:"true", why:"Energy is stored in it because of its stretched condition."},
    {s:"Energy can be destroyed.", a:"false", why:"Energy is never destroyed; it only changes from one form to another."},
    {s:"A ramp is an example of an inclined plane.", a:"true", why:"A ramp is a slanting surface used to raise loads more easily."},
    {s:"Work is done when a force moves an object through a distance.", a:"true", why:"That is the scientific definition of work."}
  ],
  classify:{ title:"Which simple machine?", groups:[
    {name:"Levers", items:["crowbar","see-saw","scissors","wheelbarrow"]},
    {name:"Inclined planes and wedges", items:["ramp","axe","knife","nail"]},
    {name:"Wheels and pulleys", items:["steering wheel","door knob","flag pole pulley","well pulley"]}
  ]},
  diagram:{ title:"Forms of energy and where they are seen", caption:"Write one everyday example of each form.", parts:[
    {p:"Heat energy", f:"Warms the body and cooks food, as from a fire or the sun"},
    {p:"Light energy", f:"Enables us to see, as from the sun or a lamp"},
    {p:"Sound energy", f:"Travels to the ear and is heard, as from a drum"},
    {p:"Chemical energy", f:"Stored in food, fuel and batteries"},
    {p:"Electrical energy", f:"Flows through wires to run lamps and radios"},
    {p:"Solar energy", f:"Comes from the sun and can be trapped by solar panels"}
  ]},
  experiment:{
    title:"Showing that an Inclined Plane Reduces Effort",
    aim:"To show that less force is needed to raise a load along a slope than to lift it straight up.",
    materials:["A smooth plank","A block or tin of sand as the load","A spring balance","Books to raise one end of the plank","String"],
    steps:[
      "Tie the string to the load and hook it to the spring balance.",
      "Lift the load straight up and read the force on the spring balance. Record it.",
      "Raise one end of the plank on the books to make a slope of the same height.",
      "Pull the load slowly up the slope and read the force again. Record it.",
      "Compare the two readings."
    ],
    expect:"The force needed to pull the load up the slope is smaller than the force needed to lift it straight up.",
    why:"The inclined plane spreads the same work over a longer distance, so the effort force required at any moment is reduced."
  },
  apply:[
    {q:"Why is it easier to push a drum up a plank than to lift it into a truck?", a:"The plank is an inclined plane; it lets the same work be done over a longer distance with a smaller effort."},
    {q:"Trace the energy changes when a torch is switched on.", a:"Chemical energy in the cells changes to electrical energy, which changes to light energy and some heat energy."},
    {q:"Give one reason why a community should use solar energy.", a:"Solar energy is free, renewable and does not pollute the environment or run out like firewood."}
  ],
  activities:["List daily activities that require energy","Demonstrate energy conversions","Identify simple machines in the school and home","Measure effort with a spring balance"],
  materials:["Spring balances and string","Planks, pulleys and levers","Torch and dry cells","Charts of simple machines"],
  assessment:["Quiz on forms of energy","Practical report on the inclined plane","Test on simple machines","Class participation"]
},
{
  grade:7, period:"IV", sem:"Two", icon:"🩺",
  title:"Health and Disease",
  subtitle:"Unit IV: Personal hygiene, common diseases, nutrition and community health",
  outcomes:["Adopt good hygiene behaviour and recognize diseases associated with lack of vitamins","Resist peer pressure and harmful substances and identify risky behaviour, while creating awareness about HIV and AIDS"],
  objectives:["Define health, disease and personal hygiene","Identify common diseases in our community, their myths, and methods of prevention and control","Explain the importance of community health","Demonstrate good hygiene practices","Relate the principles of hygiene and a balanced diet to good health","Discuss nutrition and name the basic food groups","Discuss myths and taboos associated with nutrition"],
  note:"<b>Health</b> is complete physical, mental and social well-being, not merely the absence of disease. <b>Personal hygiene</b> means keeping the body clean to stay healthy. <b>Communicable diseases</b> spread from person to person; <b>non-communicable diseases</b> do not. A <b>balanced diet</b> contains all the food groups in the right amounts.",
  focus:["Health, disease and personal hygiene","Communicable and non-communicable diseases","Prevention and control of malaria, cholera and diarrhoea","Common myths about disease","Balanced diet and food groups","Deficiency diseases","HIV and AIDS awareness"],
  terms:[
    {t:"health", d:"complete physical, mental and social well-being", x:"Good food supports health."},
    {t:"disease", d:"a condition that stops the body working normally", x:"Malaria is a common disease."},
    {t:"personal hygiene", d:"keeping one's own body clean", x:"Bathing daily is personal hygiene."},
    {t:"communicable disease", d:"a disease that spreads from one person to another", x:"Cholera is communicable."},
    {t:"vector", d:"an animal that carries a disease germ from one person to another", x:"The mosquito is the vector of malaria."},
    {t:"balanced diet", d:"a meal containing all the food groups in the right amounts", x:"Rice, fish and greens make a balanced diet."},
    {t:"nutrient", d:"a useful substance in food that the body needs", x:"Protein is a nutrient."},
    {t:"deficiency disease", d:"an illness caused by lack of a nutrient", x:"Scurvy is a deficiency disease."},
    {t:"immunization", d:"protecting the body from disease by vaccination", x:"Immunization prevents measles."},
    {t:"sanitation", d:"keeping the surroundings clean and free from waste", x:"Good sanitation prevents cholera."},
    {t:"HIV", d:"the virus that weakens the body's defence system", x:"HIV is spread through infected blood."},
    {t:"myth", d:"a false belief that is not supported by evidence", x:"It is a myth that malaria comes from eating mangoes."}
  ],
  facts:[
    {q:"Define health.", a:"Complete physical, mental and social well-being, not merely the absence of disease."},
    {q:"What is the difference between a communicable and a non-communicable disease?", a:"A communicable disease spreads from person to person; a non-communicable disease does not."},
    {q:"Name the vector that spreads malaria.", a:"The female Anopheles mosquito."},
    {q:"State three ways of preventing cholera and diarrhoea.", a:"Drink safe boiled or treated water, wash hands with soap before eating, and dispose of human waste properly in a latrine."},
    {q:"Name the basic food groups.", a:"Carbohydrates, proteins, fats and oils, vitamins, mineral salts and water."},
    {q:"Which nutrient is called the body-building food?", a:"Protein."},
    {q:"State two ways HIV is spread.", a:"Through unprotected sexual contact and through contact with infected blood, such as shared sharp instruments."}
  ],
  tf:[
    {s:"Malaria is caused by eating too many mangoes.", a:"false", why:"Malaria is caused by a parasite carried by the female Anopheles mosquito; this is a common myth."},
    {s:"Washing hands with soap before eating helps prevent diarrhoea.", a:"true", why:"It removes germs from the hands before they reach the mouth."},
    {s:"A balanced diet contains only carbohydrates.", a:"false", why:"A balanced diet must contain all the food groups — proteins, fats, vitamins, minerals and water — in the correct amounts."},
    {s:"Sleeping under a treated mosquito net helps prevent malaria.", a:"true", why:"The net keeps the mosquito vector from biting during the night."},
    {s:"HIV can be spread by shaking hands with an infected person.", a:"false", why:"HIV is not spread by ordinary social contact such as shaking hands or sharing food."}
  ],
  classify:{ title:"Sort these diseases and foods", groups:[
    {name:"Communicable diseases", items:["cholera","malaria","measles","tuberculosis"]},
    {name:"Non-communicable diseases", items:["diabetes","scurvy","rickets","high blood pressure"]},
    {name:"Body-building foods", items:["fish","beans","meat","eggs"]}
  ]},
  diagram:{ title:"Food groups and what they do", caption:"Write the work each food group does in the body.", parts:[
    {p:"Carbohydrates", f:"Give the body energy — rice, cassava, potato"},
    {p:"Proteins", f:"Build the body and repair worn tissue — fish, beans, meat"},
    {p:"Fats and oils", f:"Give energy and keep the body warm — palm oil, groundnut"},
    {p:"Vitamins", f:"Protect the body from disease — fruits and vegetables"},
    {p:"Mineral salts", f:"Build bones and teeth and keep the blood healthy — salt, milk"},
    {p:"Water", f:"Carries nutrients and waste and keeps the body cool"}
  ]},
  experiment:{
    title:"Testing a Food Sample for Starch",
    aim:"To find out which foods contain starch.",
    materials:["Small samples of rice, cassava, fish and oil","Iodine solution","A white saucer or tile","A dropper"],
    steps:[
      "Place a small piece of each food sample separately on the white saucer.",
      "Add two drops of iodine solution to each sample.",
      "Observe and record any colour change immediately.",
      "Repeat with each food and record your results in a table.",
      "State which samples contain starch."
    ],
    expect:"Rice and cassava turn blue-black, while fish and oil stay brown.",
    why:"Iodine turns blue-black in the presence of starch, so the colour change identifies the energy-giving carbohydrate foods."
  },
  apply:[
    {q:"A child eats only rice every day and becomes weak with swollen legs. What is wrong and how would you correct it?", a:"The child lacks protein. The diet should include body-building foods such as fish, beans, meat or eggs to make it balanced."},
    {q:"Why should human waste be buried or put in a latrine?", a:"Exposed waste is washed into water sources and carried by flies, spreading cholera, typhoid and diarrhoea."},
    {q:"Why is it important to correct myths about disease in a community?", a:"False beliefs stop people from using real prevention and treatment, so the disease keeps spreading."}
  ],
  activities:["Design posters on preventing malaria and diarrhoea","Discuss and correct common myths about disease","Plan a balanced meal from local foods","Demonstrate correct hand washing"],
  materials:["Iodine solution and food samples","Posters and chart paper","Mosquito net for demonstration","Soap and water"],
  assessment:["Quiz on diseases and prevention","Poster project","Balanced diet planning exercise","Practical hygiene demonstration"]
},
{
  grade:7, period:"V", sem:"Two", icon:"🌍",
  title:"Earth and Space Science",
  subtitle:"Unit V: Climatic zones, the atmosphere, weather and rocks",
  outcomes:["Identify and describe features of earth and space science and recognize how they impact natural formations and the environment","Understand basic concepts and processes of science as used in everyday life"],
  objectives:["Distinguish between Earth Science and Space Science","Explain what causes weather to change and why we have different climates","Name and describe the spheres of the earth","List and describe the levels of the atmosphere","Name the factors that influence the weather of a place","Describe factors that lead to rain formation","Name the three kinds of rock","Name some minerals of the earth found in Liberia"],
  note:"<b>Earth Science</b> studies the earth itself — its rocks, water and air. <b>Space Science</b> studies bodies beyond the earth. <b>Weather</b> is the condition of the atmosphere at a place at a particular time; <b>climate</b> is the average weather of a place over many years. Liberia lies in the <b>torrid zone</b>, near the equator, which is why it is hot all year.",
  focus:["Earth Science and Space Science","The earth's climatic zones","The spheres of the earth","Layers of the atmosphere","Weather and climate","Rain formation","The three kinds of rock"],
  terms:[
    {t:"Earth Science", d:"the study of the earth, its rocks, water and air", x:"Earth Science explains how rocks form."},
    {t:"Space Science", d:"the study of the sun, moon, stars and planets", x:"Space Science studies the planets."},
    {t:"weather", d:"the condition of the atmosphere at a place at a given time", x:"Today's weather is rainy."},
    {t:"climate", d:"the average weather of a place over many years", x:"Liberia has a tropical climate."},
    {t:"atmosphere", d:"the layer of air surrounding the earth", x:"The atmosphere protects us from the sun."},
    {t:"troposphere", d:"the lowest layer of the atmosphere where weather occurs", x:"Clouds form in the troposphere."},
    {t:"equator", d:"the imaginary line round the middle of the earth", x:"The equator divides the earth in two."},
    {t:"torrid zone", d:"the hot zone on either side of the equator", x:"Liberia lies in the torrid zone."},
    {t:"frigid zone", d:"the very cold zone near the poles", x:"The frigid zone is covered in ice."},
    {t:"evaporation", d:"the change of water into water vapour", x:"Evaporation begins the water cycle."},
    {t:"condensation", d:"the change of water vapour back into water droplets", x:"Condensation forms clouds."},
    {t:"precipitation", d:"water falling from clouds as rain, hail or dew", x:"Rain is a form of precipitation."},
    {t:"mineral", d:"a useful solid substance obtained from the earth", x:"Iron ore is a mineral found in Liberia."}
  ],
  facts:[
    {q:"State one difference between Earth Science and Space Science.", a:"Earth Science studies the earth itself, while Space Science studies bodies beyond the earth such as the sun, moon and stars."},
    {q:"Name the climatic zones of the earth.", a:"The torrid zone, the temperate zones and the frigid zones."},
    {q:"In which zone does Liberia lie?", a:"The torrid zone, near the equator."},
    {q:"Name the four spheres of the earth.", a:"The lithosphere, hydrosphere, atmosphere and biosphere."},
    {q:"In which layer of the atmosphere does weather take place?", a:"The troposphere."},
    {q:"Name three factors that influence the weather of a place.", a:"Temperature, air pressure, humidity, wind and precipitation (any three)."},
    {q:"Name the three kinds of rock.", a:"Igneous, sedimentary and metamorphic rocks."},
    {q:"Name two minerals found in Liberia.", a:"Iron ore and gold (also diamond)."}
  ],
  tf:[
    {s:"Weather and climate mean exactly the same thing.", a:"false", why:"Weather is the condition at a particular time; climate is the average condition over many years."},
    {s:"Liberia lies in the frigid zone.", a:"false", why:"Liberia lies in the torrid zone near the equator, which is why it is hot all year."},
    {s:"Clouds form when water vapour condenses.", a:"true", why:"Rising vapour cools and condenses into tiny droplets that form clouds."},
    {s:"The troposphere is the layer nearest the earth.", a:"true", why:"It is the lowest layer, where all weather occurs."},
    {s:"Igneous rock is formed from cooled molten rock.", a:"true", why:"Igneous rock forms when magma or lava cools and hardens."}
  ],
  classify:{ title:"Sort these terms", groups:[
    {name:"Spheres of the earth", items:["lithosphere","hydrosphere","atmosphere","biosphere"]},
    {name:"Kinds of rock", items:["igneous","sedimentary","metamorphic","granite"]},
    {name:"Minerals of Liberia", items:["iron ore","gold","diamond","bauxite"]}
  ]},
  diagram:{ title:"Stages of the water cycle", caption:"Write what happens at each stage.", parts:[
    {p:"Evaporation", f:"The sun heats water in rivers and the sea, changing it to water vapour"},
    {p:"Transpiration", f:"Plants give off water vapour through their leaves"},
    {p:"Condensation", f:"Rising vapour cools and turns into tiny droplets, forming clouds"},
    {p:"Precipitation", f:"Droplets join, grow heavy and fall as rain"},
    {p:"Collection / run-off", f:"Water gathers in rivers, lakes and the sea, and the cycle begins again"}
  ]},
  experiment:{
    title:"Demonstrating Condensation and Rain Formation",
    aim:"To show how rain is formed by evaporation and condensation.",
    materials:["A kettle or pot of hot water","A source of heat","A cold metal plate or lid","Tongs or a cloth to hold the plate"],
    steps:[
      "Heat the water in the pot until steam rises steadily.",
      "Hold the cold plate with the cloth a little above the rising steam.",
      "Observe what forms on the underside of the cold plate.",
      "Continue holding until drops become large enough to fall.",
      "Record your observation and relate it to rain."
    ],
    expect:"Water droplets collect on the cold plate, grow larger and fall like rain.",
    why:"The hot vapour cools when it touches the cold plate and condenses back into liquid water — the same process that forms clouds and rain in the atmosphere."
  },
  apply:[
    {q:"Why does Liberia have heavy rainfall for much of the year?", a:"It lies in the torrid zone near the equator, where high temperatures cause heavy evaporation and moist winds from the ocean bring rain."},
    {q:"Why is the atmosphere important to living things?", a:"It supplies oxygen for respiration and carbon dioxide for photosynthesis, keeps the earth warm, and shields us from harmful rays of the sun."},
    {q:"How does mining minerals both help and harm a community?", a:"It creates jobs and income, but it can destroy farmland, pollute rivers and cause erosion if not properly controlled."}
  ],
  activities:["Sketch a globe showing the climatic zones","Record daily weather for a week","Collect and identify rock samples","Draw and label the water cycle"],
  materials:["Globe and world map","Rock and mineral samples","Thermometer and rain gauge","Charts of the atmosphere"],
  assessment:["Quiz on weather and climate","Weather record chart","Rock identification exercise","Labelled water cycle diagram"]
},
{
  grade:7, period:"VI", sem:"Two", icon:"🌾",
  title:"Agriculture",
  subtitle:"Unit VI: Agricultural products, kinds of plants, soils and seed planting",
  outcomes:["Develop skills in farming while appreciating the value of nature"],
  objectives:["State the two main types of agricultural products","Explain how soil is prepared for growing plants","State the importance of fertilizer in the growing of plants","Apply the fundamentals of agriculture in the production of food","Describe the three kinds of plant by lifespan","Explain the purpose of irrigation"],
  note:"<b>Agriculture</b> is the growing of crops and the rearing of animals for food and income. Crops are grouped as <b>food crops</b>, grown to be eaten, and <b>cash crops</b>, grown mainly for sale. Plants are also grouped by how long they live: <b>annual</b> (one season), <b>biennial</b> (two seasons) and <b>perennial</b> (many years).",
  focus:["Definition of agriculture","Food crops and cash crops","Annual, biennial and perennial plants","Types of soil for farming","Soil preparation and fertilizer","Irrigation and seed planting"],
  terms:[
    {t:"agriculture", d:"the growing of crops and rearing of animals", x:"Agriculture feeds the nation."},
    {t:"food crop", d:"a crop grown mainly to be eaten", x:"Rice is a food crop."},
    {t:"cash crop", d:"a crop grown mainly for sale", x:"Rubber is a cash crop in Liberia."},
    {t:"annual plant", d:"a plant that completes its life in one season", x:"Maize is an annual plant."},
    {t:"biennial plant", d:"a plant that takes two seasons to complete its life", x:"The carrot is a biennial plant."},
    {t:"perennial plant", d:"a plant that lives and bears for many years", x:"The mango tree is perennial."},
    {t:"loamy soil", d:"soil that is a good mixture of sand, clay and humus", x:"Loamy soil is best for farming."},
    {t:"sandy soil", d:"soil with large particles that drains water quickly", x:"Sandy soil dries out fast."},
    {t:"alluvial soil", d:"fertile soil deposited by rivers", x:"Alluvial soil is found near river banks."},
    {t:"humus", d:"decayed plant and animal matter in the soil", x:"Humus makes the soil fertile."},
    {t:"fertilizer", d:"a substance added to soil to supply plant nutrients", x:"Fertilizer improves the yield."},
    {t:"irrigation", d:"supplying water to crops artificially", x:"Irrigation helps farming in the dry season."},
    {t:"germination", d:"the sprouting of a seed into a young plant", x:"Germination begins when the seed takes in water."}
  ],
  facts:[
    {q:"Define agriculture.", a:"The growing of crops and the rearing of animals for food and income."},
    {q:"Name the two main types of agricultural products.", a:"Food crops and cash crops."},
    {q:"Give two examples of cash crops grown in Liberia.", a:"Rubber and cocoa (also coffee and oil palm)."},
    {q:"Name the three kinds of plant according to lifespan.", a:"Annual, biennial and perennial plants."},
    {q:"Which soil is best for growing most crops and why?", a:"Loamy soil, because it holds enough water and air and is rich in humus."},
    {q:"Why is fertilizer added to soil?", a:"To replace nutrients used up by crops and so improve growth and yield."},
    {q:"Name three conditions necessary for germination.", a:"Water, warmth and air (oxygen)."}
  ],
  tf:[
    {s:"Rubber is a food crop.", a:"false", why:"Rubber is a cash crop, grown mainly for sale rather than to be eaten."},
    {s:"Loamy soil is the best soil for most crops.", a:"true", why:"It holds water and air well and is rich in humus."},
    {s:"A perennial plant lives for only one season.", a:"false", why:"A perennial lives and bears for many years; an annual lives one season."},
    {s:"Humus makes soil fertile.", a:"true", why:"Humus is decayed organic matter that supplies nutrients and improves soil structure."},
    {s:"Seeds need water, warmth and air to germinate.", a:"true", why:"These three conditions are necessary for a seed to sprout."}
  ],
  classify:{ title:"Sort these crops and soils", groups:[
    {name:"Food crops", items:["rice","cassava","plantain","maize"]},
    {name:"Cash crops", items:["rubber","cocoa","coffee","oil palm"]},
    {name:"Types of soil", items:["loamy","sandy","clayey","alluvial"]}
  ]},
  diagram:{ title:"Steps in preparing land and planting", caption:"Write why each step is done.", parts:[
    {p:"Clearing", f:"Removes bush and weeds that would compete with the crop"},
    {p:"Ploughing / tilling", f:"Breaks and loosens the soil so roots and air can get in"},
    {p:"Harrowing / levelling", f:"Breaks large lumps and makes a fine seed bed"},
    {p:"Manuring", f:"Adds nutrients to the soil to feed the growing crop"},
    {p:"Planting", f:"Places seeds at the correct depth and spacing"},
    {p:"Weeding and irrigation", f:"Removes competing weeds and supplies water when rain is short"}
  ]},
  experiment:{
    title:"Investigating the Conditions Necessary for Germination",
    aim:"To show that seeds need water, air and warmth to germinate.",
    materials:["Four jars or tins","Bean seeds","Cotton wool","Water","Boiled cooled water and oil (to remove air)","A refrigerator or cold place"],
    steps:[
      "Set up jar A with seeds on damp cotton wool in a warm place — all conditions present.",
      "Set up jar B with seeds on dry cotton wool in a warm place — no water.",
      "Set up jar C with seeds fully covered by boiled water topped with oil — no air.",
      "Set up jar D with seeds on damp cotton wool placed in a cold place — no warmth.",
      "Leave for five days, then observe and record which seeds have germinated."
    ],
    expect:"Only the seeds in jar A germinate; those in B, C and D do not.",
    why:"Germination needs water, air and warmth together. Each of the other jars lacks one condition, so the seed cannot sprout — this shows all three are necessary."
  },
  apply:[
    {q:"Why does a farmer rotate crops instead of planting the same crop every year?", a:"Different crops use different nutrients; rotating them keeps the soil fertile and helps control pests and diseases."},
    {q:"A farmer's land is sandy and dries quickly. What can be done to improve it?", a:"Add manure, compost or humus to help the soil hold water and nutrients, and use mulching and irrigation."},
    {q:"Why is agriculture important to Liberia?", a:"It supplies food for the people, provides work and income for families, and earns money for the country through cash crops."}
  ],
  activities:["Collect and categorize food and cash crops","Examine and compare local soil samples","Prepare a nursery bed and plant seeds","Observe and record the germination of seeds"],
  materials:["Soil samples and containers","Bean and maize seeds","Cotton wool and jars","Simple farm tools"],
  assessment:["Quiz on crops and soils","Practical germination report","Field trip report","Nursery project"]
},

/* ================================ GRADE 8 ================================ */
{
  grade:8, period:"I", sem:"One", icon:"⚗️",
  title:"Scientific Knowledge and Non-Living Matter",
  subtitle:"Unit I: Basic and derived units, the structure of matter, and separating mixtures",
  outcomes:["Apply scientific knowledge to innovate and effectively share findings with others"],
  objectives:["Discuss the scientific method and demonstrate its application in problem solving","Describe and discuss the basic and derived units of measurement","Describe the composition of matter","Discuss the states of matter and their properties","Differentiate the kinds of matter","Identify common compounds with their formulae","Distinguish between compounds and mixtures and demonstrate methods of separating mixtures"],
  note:"Scientists distinguish <b>common sense</b> and superstition from tested <b>scientific knowledge</b>. Measurements use <b>basic units</b> (metre, kilogram, second) and <b>derived units</b> built from them, such as area (m²), volume (m³) and density (kg/m³). All matter is made of <b>atoms</b>; a <b>compound</b> is chemically joined in fixed proportions, while a <b>mixture</b> is not and can be separated physically.",
  focus:["Sources of knowledge and the nature of a scientist","Basic and derived units","Structure and states of matter","Elements and symbols","Compounds and their formulae","Mixtures and methods of separation"],
  terms:[
    {t:"basic unit", d:"a fundamental unit that is not derived from others", x:"The metre is a basic unit."},
    {t:"derived unit", d:"a unit formed by combining basic units", x:"The unit of area, m², is a derived unit."},
    {t:"area", d:"the amount of surface a shape covers", x:"Area is measured in square metres."},
    {t:"volume", d:"the space occupied by an object", x:"Volume is measured in cubic metres."},
    {t:"density", d:"the mass of a unit volume of a substance", x:"Density = mass ÷ volume."},
    {t:"weight", d:"the pull of gravity on a mass", x:"Weight is measured in newtons."},
    {t:"force", d:"a push or a pull acting on a body", x:"Force is measured in newtons."},
    {t:"atom", d:"the smallest particle of an element", x:"An atom of oxygen is very small."},
    {t:"molecule", d:"two or more atoms joined together", x:"O₂ is a molecule of oxygen."},
    {t:"symbol", d:"a short letter code standing for an element", x:"Na is the symbol for sodium."},
    {t:"formula", d:"symbols showing the elements in a compound", x:"NaCl is the formula for common salt."},
    {t:"solute", d:"the substance that dissolves in a liquid", x:"Salt is the solute in salt water."},
    {t:"solvent", d:"the liquid in which a solute dissolves", x:"Water is a common solvent."},
    {t:"filtrate", d:"the clear liquid that passes through the filter paper", x:"The filtrate collected was clear."}
  ],
  facts:[
    {q:"Name three basic units and the quantities they measure.", a:"The metre measures length, the kilogram measures mass and the second measures time."},
    {q:"Give two examples of derived units.", a:"The square metre for area and the cubic metre for volume (also kg/m³ for density)."},
    {q:"What is the smallest particle of an element called?", a:"An atom."},
    {q:"Write the symbols for sodium, iron and oxygen.", a:"Na, Fe and O."},
    {q:"Write the chemical formula for common salt and for water.", a:"NaCl and H₂O."},
    {q:"State two differences between a compound and a mixture.", a:"A compound is chemically joined in fixed proportions and has new properties; a mixture is not joined, keeps the properties of its parts and can be separated physically."},
    {q:"Name three methods of separating mixtures.", a:"Filtration, evaporation and distillation (also magnetic separation and decantation)."}
  ],
  tf:[
    {s:"The kilogram is a derived unit.", a:"false", why:"The kilogram is a basic unit; derived units such as density are built from basic units."},
    {s:"Density is a derived quantity.", a:"true", why:"It is obtained by combining mass and volume, so its unit is derived."},
    {s:"A compound can be separated by physical means.", a:"false", why:"A compound is chemically joined and needs a chemical change to separate it; only mixtures separate physically."},
    {s:"Superstition is a reliable source of scientific knowledge.", a:"false", why:"Scientific knowledge must be testable and verifiable by observation and experiment."},
    {s:"NaCl is the formula for common salt.", a:"true", why:"Common salt is sodium chloride, made of sodium and chlorine."}
  ],
  classify:{ title:"Sort these quantities and substances", groups:[
    {name:"Basic units", items:["metre","kilogram","second","kelvin"]},
    {name:"Derived units", items:["square metre","cubic metre","newton","kg/m³"]},
    {name:"Methods of separation", items:["filtration","evaporation","distillation","decantation"]}
  ]},
  diagram:{ title:"Methods of separating mixtures", caption:"Write when each method is used.", parts:[
    {p:"Filtration", f:"Separates an insoluble solid from a liquid, e.g. sand from water"},
    {p:"Evaporation", f:"Recovers a dissolved solid by boiling off the liquid, e.g. salt from sea water"},
    {p:"Distillation", f:"Separates a liquid from a solution by boiling and condensing, e.g. pure water"},
    {p:"Decantation", f:"Pours off the clear liquid after the solid has settled"},
    {p:"Magnetic separation", f:"Removes magnetic material, e.g. iron filings from sand"},
    {p:"Sieving", f:"Separates solids whose particles are of different sizes"}
  ]},
  experiment:{
    title:"Finding the Density of a Regular Solid",
    aim:"To determine the density of a rectangular block using its mass and volume.",
    materials:["A rectangular wooden or metal block","A metre rule or ruler","A balance","A notebook for recording"],
    steps:[
      "Measure the length, breadth and height of the block in centimetres.",
      "Calculate the volume as length × breadth × height.",
      "Find the mass of the block on the balance in grams.",
      "Calculate the density using density = mass ÷ volume.",
      "Repeat with a second block of different material and compare the two densities."
    ],
    expect:"Each block gives a definite density value, and different materials give different densities.",
    why:"Density is a property of the material itself, not of the size of the piece, so every block of the same material gives the same value."
  },
  apply:[
    {q:"Why does a piece of wood float on water while a stone sinks?", a:"Wood has a lower density than water, so it floats; the stone is denser than water and sinks."},
    {q:"How would you obtain pure water from muddy salty water?", a:"Filter it to remove the mud, then distil the filtrate so pure water evaporates and condenses, leaving the salt behind."},
    {q:"Why must a scientist record measurements in agreed units?", a:"So that other people anywhere can repeat the work, compare results and check that the findings are correct."}
  ],
  activities:["Measure area, volume and density of solids","Write symbols and formulae of common substances","Separate a mixture in the laboratory","Compare scientific knowledge with superstition"],
  materials:["Balances, rulers and measuring cylinders","Filter paper, funnels and beakers","Salt, sand and water","Periodic table chart"],
  assessment:["Practical density report","Quiz on units of measurement","Test on compounds and mixtures","Laboratory report"]
},
{
  grade:8, period:"II", sem:"One", icon:"🧫",
  title:"Classification and Living Matter",
  subtitle:"Unit II: Protists, plants and animals, cell structure, and the human body systems",
  outcomes:["Develop the link between cells, tissues and organs in a living organism","Demonstrate relationships among the different systems in the human body"],
  objectives:["Describe the characteristics of protists, plants and animals with examples","Describe and explain cell structure","Distinguish between respiration and photosynthesis in plants","Discuss the types of roots and leaves","Classify animals according to the major phyla","Describe the structural organization of the human body","Discuss the skeletal, digestive and circulatory systems"],
  note:"Living things are <b>classified</b> into groups by their shared characteristics. The body is organized in levels: <b>cell → tissue → organ → system → organism</b>. <b>Photosynthesis</b> makes food and stores energy in daylight; <b>respiration</b> releases that energy and goes on day and night. The two processes are opposites, not the same thing.",
  focus:["Classification of living things","Protist, plant and animal characteristics","Plant and animal cell structure","Photosynthesis and respiration compared","Types of roots and leaves","Major animal phyla","Skeletal, digestive and circulatory systems"],
  terms:[
    {t:"classification", d:"grouping living things by shared characteristics", x:"Classification makes study easier."},
    {t:"protist", d:"a simple, mostly one-celled organism", x:"Amoeba is a protist."},
    {t:"tissue", d:"a group of similar cells doing the same work", x:"Muscle is a tissue."},
    {t:"organ", d:"several tissues working together for one job", x:"The heart is an organ."},
    {t:"system", d:"a group of organs working together", x:"The digestive system breaks down food."},
    {t:"cell membrane", d:"the thin covering controlling what enters and leaves a cell", x:"The cell membrane is selective."},
    {t:"nucleus", d:"the part that controls all the activities of the cell", x:"The nucleus directs the cell."},
    {t:"cell wall", d:"the rigid outer covering found only in plant cells", x:"The cell wall gives the plant cell shape."},
    {t:"chloroplast", d:"the plant cell part containing chlorophyll", x:"Photosynthesis occurs in the chloroplast."},
    {t:"tap root", d:"one main root growing straight down with small side roots", x:"The mango has a tap root."},
    {t:"fibrous root", d:"many thin roots of about the same size", x:"Grass has fibrous roots."},
    {t:"phylum", d:"a large group in the classification of animals", x:"Insects belong to the phylum Arthropoda."},
    {t:"skeleton", d:"the framework of bones supporting the body", x:"The skeleton protects the organs."},
    {t:"digestion", d:"the breaking down of food into a form the body can absorb", x:"Digestion begins in the mouth."}
  ],
  facts:[
    {q:"Give the levels of organization in the body from smallest to largest.", a:"Cell, tissue, organ, system, organism."},
    {q:"Name two parts found in a plant cell but not in an animal cell.", a:"The cell wall and chloroplasts (also a large vacuole)."},
    {q:"What is the function of the nucleus?", a:"It controls all the activities of the cell."},
    {q:"State two differences between photosynthesis and respiration.", a:"Photosynthesis makes food and takes in carbon dioxide in daylight; respiration breaks down food to release energy and takes in oxygen at all times."},
    {q:"Name the two main types of root.", a:"Tap roots and fibrous roots."},
    {q:"Give an example of an animal in the phylum Arthropoda.", a:"The grasshopper (also insects such as ants and beetles)."},
    {q:"Name three functions of the skeleton.", a:"It supports the body, protects delicate organs and allows movement with the muscles."},
    {q:"Where does digestion begin?", a:"In the mouth, where the teeth chew food and saliva begins to break down starch."}
  ],
  tf:[
    {s:"Plant cells have a cell wall but animal cells do not.", a:"true", why:"The rigid cellulose cell wall is found only in plant cells."},
    {s:"Respiration takes place only during the day.", a:"false", why:"Respiration goes on day and night; it is photosynthesis that needs daylight."},
    {s:"The nucleus controls the activities of the cell.", a:"true", why:"The nucleus directs all cell activity and contains the hereditary material."},
    {s:"Grass has a tap root.", a:"false", why:"Grass has fibrous roots; a tap root is one main root as in the mango."},
    {s:"A group of organs working together forms a system.", a:"true", why:"That is the definition of an organ system."}
  ],
  classify:{ title:"Sort these living things and structures", groups:[
    {name:"Protists", items:["amoeba","paramecium","euglena","algae"]},
    {name:"Plant cell only", items:["cell wall","chloroplast","large vacuole","chlorophyll"]},
    {name:"Body systems", items:["skeletal","digestive","circulatory","respiratory"]}
  ]},
  diagram:{ title:"Parts of a cell and their functions", caption:"Write the work each part does.", parts:[
    {p:"Cell membrane", f:"Controls what substances enter and leave the cell"},
    {p:"Nucleus", f:"Controls all the activities of the cell"},
    {p:"Cytoplasm", f:"Jelly-like material where the cell's reactions take place"},
    {p:"Cell wall", f:"Rigid outer layer giving the plant cell shape and support"},
    {p:"Chloroplast", f:"Contains chlorophyll and carries out photosynthesis"},
    {p:"Vacuole", f:"Stores water, food and waste, and keeps the plant cell firm"}
  ]},
  experiment:{
    title:"Showing that Carbon Dioxide is Produced During Respiration",
    aim:"To show that exhaled air contains more carbon dioxide than fresh air.",
    materials:["Two test tubes","Lime water","A drinking straw","A clock"],
    steps:[
      "Pour equal amounts of clear lime water into two test tubes, A and B.",
      "Leave tube A untouched as the control.",
      "Using the straw, gently blow exhaled air through the lime water in tube B for about one minute.",
      "Observe and compare the two tubes.",
      "Record which tube turns milky and state your conclusion."
    ],
    expect:"The lime water in tube B turns milky, while tube A stays clear.",
    why:"Lime water turns milky in the presence of carbon dioxide. Exhaled air contains carbon dioxide produced by respiration in the body cells."
  },
  apply:[
    {q:"Why are green plants able to feed themselves while animals are not?", a:"Green plants have chlorophyll and can make their own food by photosynthesis; animals lack chlorophyll and must feed on plants or other animals."},
    {q:"A person breaks a rib. Which organ is put at risk and why?", a:"The lungs, and possibly the heart, because the ribs form the cage that protects them."},
    {q:"Why is the circulatory system important to digestion?", a:"After food is digested, the blood absorbs and carries the nutrients to every cell of the body."}
  ],
  activities:["Draw and label plant and animal cells","Classify local animals into their major groups","Test exhaled air with lime water","Examine roots and leaves of local plants"],
  materials:["Microscope or hand lenses","Lime water and test tubes","Plant and animal specimens","Charts of the human body systems"],
  assessment:["Labelled cell diagram","Quiz on classification","Practical respiration report","Test on body systems"]
},
{
  grade:8, period:"III", sem:"One", icon:"🔧",
  title:"Energy and Simple Machines",
  subtitle:"Unit III: Forms of energy, forces in the environment, and energy transformation",
  outcomes:["Appreciate energy sources and uses and how they impact the environment"],
  objectives:["Distinguish between potential and kinetic energy with examples","Discuss the forms of energy with examples","Discuss and describe some of the forces in the environment","Name some sources and uses of fuel","Illustrate energy transformations with flow charts"],
  note:"Energy exists in many <b>forms</b> — mechanical, heat, light, chemical, atomic and solar — and changes from one form to another without being destroyed. A <b>force</b> is a push or pull. Forces in our environment include <b>gravity</b>, <b>inertia</b>, <b>friction</b>, <b>cohesion</b> and <b>adhesion</b>.",
  focus:["Potential and kinetic energy","Forms of energy","Sources and uses of energy","Forces: gravity, inertia, friction, cohesion, adhesion","Energy transformations","Impact of energy use on the environment"],
  terms:[
    {t:"mechanical energy", d:"the energy of a body due to its motion or position", x:"A moving car has mechanical energy."},
    {t:"chemical energy", d:"energy stored in food, fuel and batteries", x:"Petrol stores chemical energy."},
    {t:"solar energy", d:"energy that comes from the sun", x:"Solar energy charges the panel."},
    {t:"atomic energy", d:"energy released from the nucleus of an atom", x:"Atomic energy produces electricity."},
    {t:"gravity", d:"the force that pulls objects towards the earth", x:"Gravity makes fruit fall."},
    {t:"inertia", d:"the tendency of a body to stay at rest or keep moving", x:"Inertia throws passengers forward when a car stops."},
    {t:"friction", d:"the force that opposes motion between surfaces in contact", x:"Friction slows the moving box."},
    {t:"cohesion", d:"the attraction between particles of the same substance", x:"Cohesion holds water drops together."},
    {t:"adhesion", d:"the attraction between particles of different substances", x:"Adhesion makes water wet the glass."},
    {t:"fuel", d:"a material burnt to release energy", x:"Charcoal is a fuel."},
    {t:"renewable energy", d:"energy from a source that is not used up", x:"Solar energy is renewable."},
    {t:"energy transformation", d:"the change of energy from one form to another", x:"A generator transforms chemical energy to electrical energy."}
  ],
  facts:[
    {q:"State the difference between potential and kinetic energy.", a:"Potential energy is stored energy due to position or condition; kinetic energy is the energy of a moving body."},
    {q:"Name six forms of energy.", a:"Mechanical, heat, light, chemical, atomic and solar energy."},
    {q:"Name four forces found in the environment.", a:"Gravity, inertia, friction, cohesion and adhesion (any four)."},
    {q:"Give one useful and one harmful effect of friction.", a:"Friction lets us walk and stop vehicles; it also wears out machine parts and wastes energy as heat."},
    {q:"What energy change takes place in photosynthesis?", a:"Solar (light) energy is changed into chemical energy stored in food."},
    {q:"What energy change takes place in a dry cell torch?", a:"Chemical energy changes to electrical energy and then to light and heat energy."},
    {q:"Name two renewable sources of energy.", a:"Solar energy and wind energy (also water/hydro energy)."}
  ],
  tf:[
    {s:"Friction is always useful.", a:"false", why:"Friction is useful for walking and braking, but it also wears out parts and wastes energy as heat."},
    {s:"Gravity pulls objects towards the earth.", a:"true", why:"Gravity is the force of attraction between the earth and objects near it."},
    {s:"Solar energy is a renewable source.", a:"true", why:"The sun keeps supplying energy and is not used up."},
    {s:"Inertia is the tendency of a body to change its state of motion by itself.", a:"false", why:"Inertia is the tendency of a body to resist change and stay at rest or keep moving."},
    {s:"Energy is destroyed when a bulb burns out.", a:"false", why:"Energy is never destroyed; it is only converted into other forms such as heat and light."}
  ],
  classify:{ title:"Sort these examples", groups:[
    {name:"Potential energy", items:["stone on a hill","stretched catapult","water behind a dam","compressed spring"]},
    {name:"Kinetic energy", items:["rolling ball","running child","blowing wind","flowing river"]},
    {name:"Renewable sources", items:["solar","wind","water","biomass"]}
  ]},
  diagram:{ title:"Energy transformations", caption:"Write the energy change that takes place in each case.", parts:[
    {p:"Photosynthesis", f:"Solar energy changes to chemical energy stored in food"},
    {p:"Burning firewood", f:"Chemical energy changes to heat and light energy"},
    {p:"Solar panel", f:"Solar energy changes to electrical energy"},
    {p:"Electric lamp", f:"Electrical energy changes to light and heat energy"},
    {p:"Falling stone", f:"Potential energy changes to kinetic energy"},
    {p:"Generator", f:"Chemical energy in fuel changes to mechanical then electrical energy"}
  ]},
  experiment:{
    title:"Comparing Friction on Different Surfaces",
    aim:"To find out how the nature of a surface affects friction.",
    materials:["A wooden block","A spring balance","String","A smooth table top","A rough mat and a piece of sandpaper"],
    steps:[
      "Attach the string to the block and hook it to the spring balance.",
      "Pull the block steadily along the smooth table and read the force needed. Record it.",
      "Repeat the pull along the rough mat and record the reading.",
      "Repeat again on the sandpaper and record the reading.",
      "Compare the three readings and arrange the surfaces in order of friction."
    ],
    expect:"The roughest surface needs the greatest pulling force; the smooth table needs the least.",
    why:"Rough surfaces interlock more, so they oppose motion more strongly. Friction increases as a surface becomes rougher."
  },
  apply:[
    {q:"Why do drivers slow down on a wet road?", a:"Water reduces the friction between the tyres and the road, so the vehicle takes longer to stop and may skid."},
    {q:"Why is oil put into machines?", a:"Oil reduces friction between moving parts, so less energy is wasted as heat and the parts do not wear out quickly."},
    {q:"Why is depending on firewood harmful to the environment?", a:"Cutting trees for firewood causes deforestation and erosion, and burning it pollutes the air; renewable sources such as solar are safer."}
  ],
  activities:["Draw flow charts of energy transformations","Investigate friction on different surfaces","List and group energy sources used at home","Debate the environmental impact of energy use"],
  materials:["Spring balances and blocks","Surfaces of different roughness","Torch, dry cells and small solar panel","Charts of energy forms"],
  assessment:["Quiz on forms of energy","Friction practical report","Flow chart assignment","Group presentation"]
},
{
  grade:8, period:"IV", sem:"Two", icon:"🧼",
  title:"Health and Hygiene",
  subtitle:"Unit IV: Personal hygiene, communicable diseases, substance abuse and reproductive health",
  outcomes:["Appreciate the importance of good health and demonstrate how diseases are transferable","Identify risky behaviour that can lead to rape and drug abuse, and create awareness of STIs and HIV"],
  objectives:["Discuss the importance of good health and how it can be promoted","Demonstrate various methods used in maintaining personal hygiene","Discuss the relationship between personal hygiene and community health","Explain the effects of substance abuse on health","Name common diseases and methods of preventing them","Explain the concept of reproductive health","List the vulnerable groups affected by HIV and AIDS"],
  note:"<b>Personal hygiene</b> is the care of one's own body; <b>community health</b> is the health of everyone in a place. The two are linked: dirty surroundings make individuals sick, and sick individuals spread disease to the community. <b>Substance abuse</b> is the wrong use of drugs and other harmful substances, and it damages the body, the mind and the family.",
  focus:["Importance and promotion of good health","Care of skin, ear, nose, mouth and eyes","Care of reproductive organs and menstrual hygiene","Substance abuse and its effects","Communicable diseases and prevention","Reproductive health and HIV/AIDS awareness"],
  terms:[
    {t:"hygiene", d:"the practice of keeping clean to prevent disease", x:"Good hygiene prevents illness."},
    {t:"community health", d:"the health of all the people living in an area", x:"Clean water improves community health."},
    {t:"communicable disease", d:"a disease passed from one person to another", x:"Tuberculosis is communicable."},
    {t:"substance abuse", d:"the harmful or wrong use of drugs and other substances", x:"Substance abuse damages the liver."},
    {t:"addiction", d:"a condition in which a person cannot stop using a substance", x:"Addiction is hard to overcome."},
    {t:"menstruation", d:"the monthly flow of blood from the womb", x:"Menstruation begins at puberty."},
    {t:"puberty", d:"the stage when the body becomes able to reproduce", x:"Puberty brings many body changes."},
    {t:"reproductive health", d:"the health of the reproductive system at all stages of life", x:"Reproductive health education is important."},
    {t:"STI", d:"a sexually transmitted infection", x:"Gonorrhoea is an STI."},
    {t:"HIV", d:"the virus that attacks the body's defence system", x:"HIV weakens immunity."},
    {t:"AIDS", d:"the condition that develops in the late stage of HIV infection", x:"AIDS leaves the body open to infection."},
    {t:"abstinence", d:"choosing not to engage in sexual activity", x:"Abstinence is the surest protection."}
  ],
  facts:[
    {q:"Name five aspects of good health.", a:"Physical, mental, emotional, social and spiritual health."},
    {q:"State three good personal hygiene practices.", a:"Bathing daily with soap, brushing the teeth twice a day, and washing hands with soap after using the toilet."},
    {q:"How should the ears be cared for?", a:"Clean only the outer part with a soft cloth; never push sharp objects into the ear."},
    {q:"Explain the link between personal hygiene and community health.", a:"When individuals keep clean and dispose of waste properly, fewer germs spread, so the whole community stays healthier."},
    {q:"Name three effects of substance abuse.", a:"It damages organs such as the liver and brain, causes addiction, and leads to poor school performance and family problems."},
    {q:"Name three common sexually transmitted infections.", a:"Gonorrhoea, syphilis and chlamydia."},
    {q:"State the surest way for a young person to avoid HIV and STIs.", a:"Abstinence from sexual activity."}
  ],
  tf:[
    {s:"Personal hygiene affects the health of the whole community.", a:"true", why:"Germs spread from person to person, so individual cleanliness protects everyone."},
    {s:"Sharp objects should be used to clean inside the ear.", a:"false", why:"They can damage the ear drum; only the outer ear should be cleaned with a soft cloth."},
    {s:"Substance abuse harms only the person who uses the substance.", a:"false", why:"It also harms the family and the community through violence, accidents and poverty."},
    {s:"Girls need clean materials and privacy for menstrual hygiene.", a:"true", why:"Proper menstrual hygiene prevents infection and protects dignity."},
    {s:"AIDS can be cured by traditional charms.", a:"false", why:"There is no such cure; prevention and proper medical treatment are what help."}
  ],
  classify:{ title:"Sort these practices and conditions", groups:[
    {name:"Good hygiene practices", items:["bathing daily","brushing teeth","washing hands with soap","cutting nails short"]},
    {name:"Communicable diseases", items:["tuberculosis","cholera","measles","gonorrhoea"]},
    {name:"Harmful substances", items:["alcohol","tobacco","marijuana","unprescribed drugs"]}
  ]},
  diagram:{ title:"Care of the body parts", caption:"Write how each part should be cared for.", parts:[
    {p:"Skin", f:"Bathe daily with soap and clean water and wear clean clothes"},
    {p:"Teeth and mouth", f:"Brush at least twice daily and avoid too much sugar"},
    {p:"Ears", f:"Clean the outer part only with a soft cloth; never insert sharp objects"},
    {p:"Nose", f:"Blow gently into a clean handkerchief and keep the nostrils clean"},
    {p:"Eyes", f:"Wash with clean water, avoid rubbing, and read in good light"},
    {p:"Reproductive organs", f:"Wash daily with clean water and use clean materials during menstruation"}
  ]},
  experiment:{
    title:"Showing the Effect of Soap on Hand Washing",
    aim:"To show that washing with soap removes more dirt and germs than water alone.",
    materials:["Cooking oil mixed with a little ground charcoal or pepper","Soap","Clean water","Two basins","A clean white cloth"],
    steps:[
      "Rub the oil and charcoal mixture on the hands of two volunteers to represent germs.",
      "Let the first volunteer wash with plain water only for twenty seconds.",
      "Let the second volunteer wash with soap and water for twenty seconds.",
      "Dry both pairs of hands on the clean white cloth.",
      "Compare the marks left on the cloth and record your observation."
    ],
    expect:"The hands washed with soap leave far fewer marks than those washed with water alone.",
    why:"Soap breaks up oil and lifts dirt and germs from the skin so that they can be rinsed away; plain water cannot remove oily dirt."
  },
  apply:[
    {q:"Why is a person with tuberculosis advised to cover the mouth when coughing?", a:"Tuberculosis is spread through droplets in the air; covering the mouth stops the germs reaching other people."},
    {q:"A learner is offered drugs by a friend. Give two reasons to refuse and one way to say no.", a:"Drugs damage health and lead to addiction and poor performance; the learner can firmly say no, give a reason and walk away, or report to a trusted adult."},
    {q:"Why should a whole community, not just one family, keep its surroundings clean?", a:"Germs, flies and mosquitoes move freely between homes, so disease can spread from one dirty compound to everyone."}
  ],
  activities:["Demonstrate correct hand washing with soap","Discuss ways of resisting peer pressure","Create awareness posters on HIV and STIs","Debate the effects of substance abuse"],
  materials:["Soap, water and basins","Posters and chart paper","Clean cloths and toothbrushes","Health charts"],
  assessment:["Practical hygiene demonstration","Quiz on diseases and prevention","Poster and awareness project","Role play on refusing drugs"]
},
{
  grade:8, period:"V", sem:"Two", icon:"🌦️",
  title:"Earth and Space Science",
  subtitle:"Unit V: The spheres, the atmosphere, winds and clouds, and the hydrosphere",
  outcomes:["Recognize the geosphere as the source of our minerals and appreciate the earth as a supporter of life","Understand the theories of space"],
  objectives:["Discuss the atmosphere and composition of the earth","Distinguish between weather and climate","Explain the kinds of wind and cloud","Determine the sources, properties and usage of water","Demonstrate simple methods of purifying water","Discuss the nature of the ocean in relation to currents and tides","Name and describe the layers of the earth"],
  note:"The earth is made of four <b>spheres</b>: the <b>lithosphere</b> (rock), the <b>hydrosphere</b> (water), the <b>atmosphere</b> (air) and the <b>biosphere</b> (living things). Only about 3% of the earth's water is fresh, so water must be conserved and purified. Water can be purified by <b>filtration</b>, <b>boiling</b> and <b>chlorination</b>.",
  focus:["The spheres of the earth","Composition of the atmosphere","Weather and climate compared","Kinds of wind and cloud","The hydrosphere and water sources","Purification of water","Ocean currents and tides","Layers of the earth"],
  terms:[
    {t:"lithosphere", d:"the solid rocky outer part of the earth", x:"Minerals come from the lithosphere."},
    {t:"hydrosphere", d:"all the water on the earth", x:"The hydrosphere includes rivers and seas."},
    {t:"biosphere", d:"the part of the earth where living things are found", x:"The biosphere supports life."},
    {t:"humidity", d:"the amount of water vapour in the air", x:"Humidity is high before rain."},
    {t:"wind", d:"air in motion over the earth's surface", x:"The wind blows from the sea."},
    {t:"land breeze", d:"wind blowing from the land to the sea at night", x:"A land breeze blows at night."},
    {t:"sea breeze", d:"wind blowing from the sea to the land during the day", x:"A sea breeze cools the coast."},
    {t:"cumulus", d:"a heaped, cotton-like cloud", x:"Cumulus clouds look like cotton wool."},
    {t:"stratus", d:"a low, flat layer of cloud", x:"Stratus cloud covers the sky in a sheet."},
    {t:"chlorination", d:"adding chlorine to water to kill germs", x:"Chlorination makes water safe to drink."},
    {t:"water table", d:"the level below which the ground is soaked with water", x:"Wells reach the water table."},
    {t:"tide", d:"the regular rise and fall of the sea", x:"The tide comes in twice a day."},
    {t:"ocean current", d:"a large steady flow of water in the sea", x:"Ocean currents affect climate."},
    {t:"core", d:"the innermost layer of the earth", x:"The core is the hottest layer."}
  ],
  facts:[
    {q:"Name the four spheres of the earth.", a:"The lithosphere, hydrosphere, atmosphere and biosphere."},
    {q:"Name the main gases of the atmosphere and their proportions.", a:"Nitrogen about 78%, oxygen about 21%, and small amounts of carbon dioxide, water vapour and other gases."},
    {q:"State the difference between weather and climate.", a:"Weather is the state of the atmosphere at a place at a given time; climate is the average weather over many years."},
    {q:"Explain the difference between a land breeze and a sea breeze.", a:"A sea breeze blows from the sea to the land by day; a land breeze blows from the land to the sea at night."},
    {q:"Name three sources of water supply.", a:"Rain, rivers and streams, wells and boreholes (also springs and the sea)."},
    {q:"Name three simple methods of purifying water.", a:"Filtration, boiling and chlorination."},
    {q:"Name the three main layers of the earth.", a:"The crust, the mantle and the core."},
    {q:"What causes tides?", a:"The gravitational pull of the moon, and to a smaller extent the sun, on the waters of the earth."}
  ],
  tf:[
    {s:"Oxygen is the most abundant gas in the atmosphere.", a:"false", why:"Nitrogen is the most abundant, at about 78%; oxygen is about 21%."},
    {s:"A sea breeze blows from the sea to the land during the day.", a:"true", why:"The land heats faster than the sea, so cooler air moves in from the sea."},
    {s:"Boiling water kills disease germs.", a:"true", why:"High temperature destroys the micro-organisms that cause disease."},
    {s:"Most of the earth's water is fresh water fit for drinking.", a:"false", why:"Most water is salty ocean water; only a small fraction is fresh."},
    {s:"The core is the outermost layer of the earth.", a:"false", why:"The core is the innermost layer; the crust is the outermost."}
  ],
  classify:{ title:"Sort these features", groups:[
    {name:"Spheres of the earth", items:["lithosphere","hydrosphere","atmosphere","biosphere"]},
    {name:"Layers of the earth", items:["crust","mantle","outer core","inner core"]},
    {name:"Methods of purifying water", items:["filtration","boiling","chlorination","sedimentation"]}
  ]},
  diagram:{ title:"Simple water purification steps", caption:"Write what each step achieves.", parts:[
    {p:"Sedimentation", f:"Water is left to stand so heavy particles settle to the bottom"},
    {p:"Decantation", f:"The clear water is poured off, leaving the settled dirt behind"},
    {p:"Filtration", f:"Water passes through sand, gravel or cloth to remove fine solids"},
    {p:"Boiling", f:"Heating to boiling point kills disease-causing germs"},
    {p:"Chlorination", f:"Adding chlorine destroys remaining germs and keeps water safe"},
    {p:"Safe storage", f:"Keeping water covered in a clean container prevents recontamination"}
  ]},
  experiment:{
    title:"Making a Simple Water Filter",
    aim:"To purify muddy water using a simple filter.",
    materials:["A clean plastic bottle cut at the base","Clean sand and fine gravel","Small stones","Cotton wool or clean cloth","Muddy water","A collecting container"],
    steps:[
      "Turn the cut bottle upside down and place the cotton wool at the neck.",
      "Add a layer of fine sand, then coarse sand, then gravel and stones on top.",
      "Hold the filter over the collecting container.",
      "Pour the muddy water slowly onto the top layer and let it pass through.",
      "Compare the water collected with the original muddy water."
    ],
    expect:"The water collected is much clearer than the muddy water poured in.",
    why:"Each layer traps particles of a different size, so the solid dirt is held back. The water is clearer but must still be boiled, because filtering does not remove germs."
  },
  apply:[
    {q:"Filtered water still looks clear but may cause disease. Why?", a:"Filtration removes only solid particles; disease germs are too small to be trapped, so the water must also be boiled or chlorinated."},
    {q:"Why is the coastal area often cooler in the afternoon than inland?", a:"The sea breeze brings cool moist air from the ocean onto the land during the hot part of the day."},
    {q:"Why should a community protect its well from surface run-off?", a:"Run-off carries waste and germs into the well, contaminating the water and causing diseases such as cholera and typhoid."}
  ],
  activities:["Name and define the spheres of the earth","Record and compare weather over two weeks","Build and test a simple water filter","Discuss factors that influence climate change"],
  materials:["Bottles, sand, gravel and cotton wool","Thermometer and wind vane","Globe and charts of the earth's layers","Containers for water samples"],
  assessment:["Quiz on the earth's spheres","Water filter practical report","Weather record chart","Test on weather and climate"]
},
{
  grade:8, period:"VI", sem:"Two", icon:"🌱",
  title:"Soil Science",
  subtitle:"Unit VI: Kinds of soil, soil improvement, seeds and germination",
  outcomes:["Recognize the types of soil","Distinguish seed types and recognize factors that affect plant growth"],
  objectives:["Identify the kinds of soil and methods of improving them","Discuss the components of soil","Discuss the effects of different kinds of soil on plant growth","Describe the kinds of fertilizer and their effects","Explain germination and the types of seed","State the conditions necessary for germination"],
  note:"<b>Fertile soil</b> is soil that contains enough nutrients, humus, water and air to support healthy plant growth. Soil is made of <b>mineral particles</b>, <b>humus</b>, <b>water</b>, <b>air</b> and <b>living organisms</b>. Seeds are grouped as <b>monocotyledons</b> (one seed leaf, such as maize) and <b>dicotyledons</b> (two seed leaves, such as beans).",
  focus:["Fertile soil defined","Types of soil and their properties","Components of soil","Methods of improving soil","Fertilizers: organic and inorganic","Types of seed","Conditions necessary for germination"],
  terms:[
    {t:"fertile soil", d:"soil rich enough in nutrients to support good plant growth", x:"Fertile soil gives a high yield."},
    {t:"humus", d:"decayed plant and animal matter in soil", x:"Humus darkens the topsoil."},
    {t:"loam", d:"a balanced mixture of sand, clay and humus", x:"Loam is the best farming soil."},
    {t:"clay soil", d:"soil of very fine particles that holds much water", x:"Clay soil becomes waterlogged."},
    {t:"sandy soil", d:"soil of large particles that drains quickly", x:"Sandy soil loses water fast."},
    {t:"soil texture", d:"how coarse or fine the soil particles are", x:"Texture affects drainage."},
    {t:"organic fertilizer", d:"plant or animal manure added to soil", x:"Compost is an organic fertilizer."},
    {t:"inorganic fertilizer", d:"manufactured chemical fertilizer", x:"NPK is an inorganic fertilizer."},
    {t:"compost", d:"rotted plant and animal waste used as manure", x:"Compost improves the soil."},
    {t:"crop rotation", d:"growing different crops on the same land in turn", x:"Crop rotation keeps soil fertile."},
    {t:"germination", d:"the sprouting of a seed into a seedling", x:"Germination took three days."},
    {t:"monocotyledon", d:"a seed with one seed leaf", x:"Maize is a monocotyledon."},
    {t:"dicotyledon", d:"a seed with two seed leaves", x:"The bean is a dicotyledon."},
    {t:"cotyledon", d:"the seed leaf that stores food for the young plant", x:"The cotyledon feeds the seedling."}
  ],
  facts:[
    {q:"What is fertile soil?", a:"Soil that contains enough nutrients, humus, water and air to support healthy plant growth."},
    {q:"Name the components of soil.", a:"Mineral particles, humus, water, air and living organisms."},
    {q:"Name three types of soil.", a:"Sandy soil, clay soil and loamy soil."},
    {q:"Why is loamy soil the best for farming?", a:"It holds enough water and air, drains well and is rich in humus."},
    {q:"Name three methods of improving soil.", a:"Adding manure or compost, crop rotation, and mulching (also adding fertilizer and controlling erosion)."},
    {q:"State the difference between organic and inorganic fertilizer.", a:"Organic fertilizer is made from decayed plant and animal matter; inorganic fertilizer is manufactured chemically."},
    {q:"Name the two types of seed according to their seed leaves.", a:"Monocotyledons with one seed leaf and dicotyledons with two."},
    {q:"State the conditions necessary for germination.", a:"Water, air (oxygen) and a suitable warm temperature."}
  ],
  tf:[
    {s:"Clay soil drains water quickly.", a:"false", why:"Clay has very fine particles, so it holds water and easily becomes waterlogged; sandy soil drains quickly."},
    {s:"Humus improves the fertility of soil.", a:"true", why:"Humus supplies nutrients and helps the soil hold water and air."},
    {s:"Compost is an organic fertilizer.", a:"true", why:"It is made from decayed plant and animal waste."},
    {s:"The bean seed is a monocotyledon.", a:"false", why:"The bean has two seed leaves, so it is a dicotyledon; maize is a monocotyledon."},
    {s:"Seeds can germinate without air.", a:"false", why:"Germinating seeds respire and need oxygen from the air."}
  ],
  classify:{ title:"Sort these soils, fertilizers and seeds", groups:[
    {name:"Types of soil", items:["sandy","clay","loam","silt"]},
    {name:"Organic fertilizers", items:["compost","cow dung","poultry droppings","green manure"]},
    {name:"Dicotyledon seeds", items:["bean","groundnut","cowpea","pumpkin"]}
  ]},
  diagram:{ title:"Components of soil and their importance", caption:"Write why each component matters.", parts:[
    {p:"Mineral particles", f:"Sand, silt and clay give the soil its texture and supply mineral nutrients"},
    {p:"Humus", f:"Decayed matter that supplies nutrients and holds water"},
    {p:"Water", f:"Dissolves nutrients so roots can absorb them"},
    {p:"Air", f:"Supplies oxygen for the respiration of roots and soil organisms"},
    {p:"Living organisms", f:"Earthworms and bacteria break down matter and aerate the soil"}
  ]},
  experiment:{
    title:"Comparing the Drainage of Different Soils",
    aim:"To compare how quickly water passes through sandy, clay and loamy soil.",
    materials:["Three funnels or cut bottles","Filter paper or cloth","Equal amounts of dry sandy, clay and loamy soil","Three measuring cylinders","Water","A clock"],
    steps:[
      "Line each funnel with filter paper and fill each with an equal amount of one type of soil.",
      "Place each funnel over a measuring cylinder.",
      "Pour the same volume of water into each funnel at the same time and start timing.",
      "After five minutes, record the volume of water collected under each soil.",
      "Compare the results and arrange the soils in order of drainage."
    ],
    expect:"Sandy soil drains fastest and collects most water, clay drains slowest, and loam is in between.",
    why:"Sandy soil has large particles with big air spaces so water passes easily; clay particles are very fine and hold water back. Loam is a balanced mixture, which is why it suits most crops."
  },
  apply:[
    {q:"A farmer's field becomes waterlogged after every rain. What kind of soil is it likely to be and what can be done?", a:"It is likely clay soil. The farmer can add sand, compost and humus to improve drainage and make ridges or drains."},
    {q:"Why do farmers add manure to soil that has been farmed for many years?", a:"Continuous cropping removes nutrients; manure replaces them and restores humus so the soil stays fertile."},
    {q:"Why must seeds not be planted too deep?", a:"A deeply buried seed cannot get enough air, and the shoot may exhaust its stored food before reaching the surface and light."}
  ],
  activities:["Collect and identify local soil samples","Compare drainage of sandy, clay and loamy soils","Prepare compost from plant waste","Germinate maize and bean seeds and compare them"],
  materials:["Soil samples and funnels","Measuring cylinders and water","Maize and bean seeds","Compost materials"],
  assessment:["Soil identification exercise","Drainage practical report","Germination record","Quiz on soil and seeds"]
},

/* ================================ GRADE 9 ================================ */
{
  grade:9, period:"I", sem:"One", icon:"⚛️",
  title:"Scientific Knowledge and Non-Living Matter",
  subtitle:"Unit I: Science and technology, the atom, and physical and chemical change",
  outcomes:["Demonstrate knowledge and skills to solve basic scientific problems and show a desirable attitude towards science"],
  objectives:["Distinguish between science and technology","Demonstrate the use of scientific methods in solving problems","Classify matter into elements, mixtures and compounds with examples","Identify the differences between physical and chemical changes of matter","Describe the composition, properties and usage of air","Describe the atom and its structure","Use the periodic table to classify elements"],
  note:"<b>Science</b> is organized knowledge about nature; <b>technology</b> is the practical use of that knowledge to make useful things. The <b>atom</b> is the smallest particle of an element and is made of <b>protons</b> and <b>neutrons</b> in a nucleus with <b>electrons</b> moving around it. In a <b>physical change</b> no new substance is formed and the change can usually be reversed; in a <b>chemical change</b> a new substance is formed and the change is usually permanent.",
  focus:["Science and technology compared","Scientific method in problem solving","Structure of the atom","The periodic table","Physical and chemical changes","Composition and properties of air"],
  terms:[
    {t:"technology", d:"the practical application of scientific knowledge", x:"The mobile phone is a product of technology."},
    {t:"atom", d:"the smallest particle of an element that can take part in a reaction", x:"An atom has a nucleus."},
    {t:"proton", d:"a positively charged particle in the nucleus", x:"The proton carries a positive charge."},
    {t:"neutron", d:"a particle in the nucleus with no charge", x:"The neutron is neutral."},
    {t:"electron", d:"a negatively charged particle moving around the nucleus", x:"Electrons move in shells."},
    {t:"atomic number", d:"the number of protons in an atom", x:"The atomic number of carbon is 6."},
    {t:"mass number", d:"the total number of protons and neutrons", x:"The mass number of carbon-12 is 12."},
    {t:"periodic table", d:"a table arranging elements in order of atomic number", x:"The periodic table groups similar elements."},
    {t:"physical change", d:"a change in which no new substance is formed", x:"Melting ice is a physical change."},
    {t:"chemical change", d:"a change in which a new substance is formed", x:"Burning wood is a chemical change."},
    {t:"combustion", d:"the burning of a substance in oxygen", x:"Combustion needs oxygen."},
    {t:"rusting", d:"the slow reaction of iron with oxygen and water", x:"Rusting spoils iron roofing sheets."}
  ],
  facts:[
    {q:"State one difference between science and technology.", a:"Science is the organized knowledge of nature; technology is the use of that knowledge to make useful products and solve practical problems."},
    {q:"Name the three particles of an atom and their charges.", a:"The proton is positive, the neutron has no charge and the electron is negative."},
    {q:"Where are protons and neutrons found in the atom?", a:"In the nucleus at the centre of the atom."},
    {q:"What is the atomic number of an element?", a:"The number of protons in one atom of the element."},
    {q:"State two differences between a physical and a chemical change.", a:"A physical change forms no new substance and is usually reversible; a chemical change forms a new substance and is usually irreversible."},
    {q:"Give the approximate composition of air.", a:"About 78% nitrogen, 21% oxygen and 1% carbon dioxide, water vapour and rare gases."},
    {q:"Name two uses of oxygen.", a:"It is used for respiration in living things and for burning fuels (also in hospitals and welding)."}
  ],
  tf:[
    {s:"Melting of candle wax is a chemical change.", a:"false", why:"Melting forms no new substance and can be reversed, so it is a physical change."},
    {s:"Rusting of iron is a chemical change.", a:"true", why:"A new substance, rust, is formed and the change cannot easily be reversed."},
    {s:"The electron carries a positive charge.", a:"false", why:"The electron is negatively charged; the proton carries the positive charge."},
    {s:"Elements in the periodic table are arranged in order of atomic number.", a:"true", why:"The modern periodic table is arranged by increasing atomic number."},
    {s:"Nitrogen is the most abundant gas in air.", a:"true", why:"Nitrogen makes up about 78% of the air."}
  ],
  classify:{ title:"Physical or chemical change?", groups:[
    {name:"Physical changes", items:["melting ice","boiling water","dissolving salt","breaking glass"]},
    {name:"Chemical changes", items:["burning wood","rusting iron","cooking food","souring of milk"]},
    {name:"Particles of the atom", items:["proton","neutron","electron","nucleus"]}
  ]},
  diagram:{ title:"Structure of the atom", caption:"Write where each part is found and its charge.", parts:[
    {p:"Nucleus", f:"The dense centre of the atom containing protons and neutrons"},
    {p:"Proton", f:"Found in the nucleus and carries a positive charge"},
    {p:"Neutron", f:"Found in the nucleus and carries no charge"},
    {p:"Electron", f:"Moves in shells around the nucleus and carries a negative charge"},
    {p:"Electron shell", f:"The path or energy level in which electrons move round the nucleus"}
  ]},
  experiment:{
    title:"Showing that Air Contains Oxygen that Supports Burning",
    aim:"To find the fraction of air used up when a candle burns.",
    materials:["A candle","A shallow dish of water","A glass jar or tumbler","Matches","A marker"],
    steps:[
      "Fix the candle upright in the centre of the dish and pour water into the dish.",
      "Light the candle and carefully invert the glass jar over it, resting the rim in the water.",
      "Observe the candle flame and the level of the water inside the jar.",
      "Mark the level to which the water rises when the flame goes out.",
      "Estimate the fraction of the air in the jar that was used up."
    ],
    expect:"The flame goes out after a short time and the water rises to fill about one fifth of the jar.",
    why:"Only the oxygen, about one fifth of the air, is used up in burning. When it is finished the flame dies and water rises to take the place of the oxygen consumed."
  },
  apply:[
    {q:"Zinc roofing sheets rust faster near the sea. Explain why.", a:"Rusting needs oxygen and water, and the salty moist sea air speeds up the chemical reaction."},
    {q:"Give one example of how science has led to technology in Liberia.", a:"Knowledge of solar energy has led to solar panels and lamps that give light to homes without electricity."},
    {q:"Why can a fire be put out by covering it with a blanket?", a:"The blanket cuts off the supply of oxygen, and burning cannot continue without oxygen."}
  ],
  activities:["Draw and label the structure of the atom","Classify changes as physical or chemical","Use the periodic table to find atomic numbers","Investigate the composition of air"],
  materials:["Periodic table chart","Candles, jars and dishes","Iron nails and water for rusting","Model of the atom"],
  assessment:["Quiz on the atom","Practical report on air","Classification exercise","Test on physical and chemical change"]
},
{
  grade:9, period:"II", sem:"One", icon:"🧬",
  title:"Living Matter",
  subtitle:"Unit II: Kingdoms, reproduction, heredity and human development",
  outcomes:["Demonstrate and apply knowledge of biological characteristics in plants and animals to solve biological problems","Appreciate the physical, social and emotional changes that occur in the body"],
  objectives:["Classify living matter into plants and animals","Describe the characteristics of plants and animals","Describe sexual and asexual forms of reproduction","Discuss Mendel's law of heredity","Discuss the process of reproduction in humans and the development of the fetus","Discuss pregnancy and its implications"],
  note:"Living things are grouped into <b>kingdoms</b>, chiefly the plant and animal kingdoms. <b>Asexual reproduction</b> needs one parent and gives offspring identical to it; <b>sexual reproduction</b> needs two parents and gives offspring that vary. <b>Heredity</b> is the passing of characteristics from parents to offspring, first explained by <b>Gregor Mendel</b>.",
  focus:["Classification into kingdoms","Characteristics of plants and animals","Sexual and asexual reproduction","Mendel's law of heredity","Human reproduction and fetal development","Pregnancy and its implications"],
  terms:[
    {t:"kingdom", d:"the largest group in the classification of living things", x:"The animal kingdom is very large."},
    {t:"asexual reproduction", d:"reproduction from one parent without gametes", x:"Cassava is grown by asexual reproduction."},
    {t:"sexual reproduction", d:"reproduction involving the joining of male and female gametes", x:"Sexual reproduction gives variation."},
    {t:"gamete", d:"a sex cell, either sperm or egg", x:"The gamete carries half the genes."},
    {t:"fertilization", d:"the joining of a male and a female gamete", x:"Fertilization forms a zygote."},
    {t:"zygote", d:"the single cell formed at fertilization", x:"The zygote divides many times."},
    {t:"heredity", d:"the passing of characteristics from parents to offspring", x:"Heredity explains family likeness."},
    {t:"gene", d:"the unit that carries an inherited characteristic", x:"Genes determine eye colour."},
    {t:"dominant trait", d:"a characteristic that shows even when only one gene for it is present", x:"Brown eye colour is dominant."},
    {t:"recessive trait", d:"a characteristic that shows only when both genes for it are present", x:"Blue eye colour is recessive."},
    {t:"fetus", d:"the developing young in the womb after the early weeks", x:"The fetus grows in the uterus."},
    {t:"gestation", d:"the period of development in the womb", x:"Human gestation is about nine months."},
    {t:"placenta", d:"the organ that supplies the fetus with food and oxygen", x:"The placenta joins mother and fetus."}
  ],
  facts:[
    {q:"Name the two main kingdoms of living things studied here.", a:"The plant kingdom and the animal kingdom."},
    {q:"State two differences between plants and animals.", a:"Plants make their own food and are fixed in one place; animals feed on other organisms and move about freely."},
    {q:"State two differences between sexual and asexual reproduction.", a:"Asexual reproduction involves one parent and gives identical offspring; sexual reproduction involves two parents and gives offspring that vary."},
    {q:"Give two examples of asexual reproduction in plants.", a:"Growing cassava from stem cuttings and growing yam from tubers (also budding and runners)."},
    {q:"What is fertilization?", a:"The joining of a male gamete with a female gamete to form a zygote."},
    {q:"Who is known as the father of heredity?", a:"Gregor Mendel."},
    {q:"How long is the normal human gestation period?", a:"About nine months, or forty weeks."},
    {q:"Name two functions of the placenta.", a:"It supplies the fetus with food and oxygen and removes its waste."}
  ],
  tf:[
    {s:"Asexual reproduction produces offspring identical to the parent.", a:"true", why:"Only one parent is involved and no mixing of gametes occurs, so the offspring are genetically the same."},
    {s:"Fertilization is the joining of two gametes.", a:"true", why:"A male gamete fuses with a female gamete to form a zygote."},
    {s:"A recessive trait shows whenever the gene for it is present.", a:"false", why:"A recessive trait shows only when both genes for it are present; a dominant trait shows with only one."},
    {s:"The placenta supplies the fetus with food and oxygen.", a:"true", why:"Materials pass from the mother's blood to the fetus through the placenta."},
    {s:"Teenage pregnancy carries no special health risk.", a:"false", why:"The young body is not fully developed, so there is greater risk to both mother and baby, and schooling is often interrupted."}
  ],
  classify:{ title:"Sort these examples", groups:[
    {name:"Asexual reproduction", items:["cassava cuttings","yam tubers","budding in yeast","binary fission"]},
    {name:"Sexual reproduction", items:["seeds from flowers","human reproduction","fish spawning","bird eggs"]},
    {name:"Stages of development", items:["zygote","embryo","fetus","baby"]}
  ]},
  diagram:{ title:"Stages of human development before birth", caption:"Write what happens at each stage.", parts:[
    {p:"Fertilization", f:"A sperm joins an egg in the oviduct to form a zygote"},
    {p:"Zygote", f:"The single cell divides repeatedly as it moves to the uterus"},
    {p:"Implantation", f:"The ball of cells attaches itself to the wall of the uterus"},
    {p:"Embryo", f:"Organs begin to form during the first weeks of development"},
    {p:"Fetus", f:"The young grows and its organs mature over the remaining months"},
    {p:"Birth", f:"After about nine months the baby is delivered"}
  ]},
  experiment:{
    title:"Investigating Asexual Reproduction in Cassava",
    aim:"To show that a new plant can grow from a stem cutting without seeds.",
    materials:["Healthy cassava stems","A cutlass or knife (teacher-supervised)","Prepared soil beds or pots","Water","Labels"],
    steps:[
      "Cut healthy cassava stems into pieces about 25 cm long, each with several nodes.",
      "Plant the cuttings slanting into the prepared soil, leaving part above the ground.",
      "Label each cutting with the date of planting.",
      "Water regularly and observe over three to four weeks.",
      "Record when shoots and roots appear and describe the new plants."
    ],
    expect:"Shoots grow from the nodes above the soil and roots grow below, producing new cassava plants.",
    why:"This is asexual reproduction: no gametes and no fertilization are involved, so each new plant is genetically identical to the parent stem."
  },
  apply:[
    {q:"Why do farmers grow cassava from cuttings rather than from seeds?", a:"Cuttings grow faster and produce plants identical to the parent, so the good qualities of the chosen variety are kept."},
    {q:"Two brown-eyed parents have a blue-eyed child. Explain using dominance.", a:"Brown is dominant and blue recessive. Each parent carried one hidden recessive gene, and the child received the recessive gene from both."},
    {q:"State two reasons why teenage pregnancy should be avoided.", a:"The girl's body is not fully developed, so childbirth is risky for mother and baby, and her education and future opportunities are usually cut short."}
  ],
  activities:["Classify living things into kingdoms","Plant cassava cuttings and record growth","Work simple Mendelian crosses","Discuss the implications of teenage pregnancy"],
  materials:["Cassava stems and planting beds","Charts of human reproduction","Specimens of plants and animals","Charts on heredity"],
  assessment:["Quiz on reproduction","Practical cutting report","Heredity problem exercise","Class discussion assessment"]
},
{
  grade:9, period:"III", sem:"One", icon:"❤️",
  title:"Health and Hygiene",
  subtitle:"Unit III: Nutrition, puberty, reproductive health and sexually transmitted infections",
  outcomes:["Apply knowledge and skills acquired to practise good health care and resist substance and drug abuse","Communicate effectively about sexuality as it relates to reproductive health"],
  objectives:["Distinguish between health and hygiene","Describe activities necessary to promote personal hygiene and care of the body","Discuss nutrition in relation to food and its care","Discuss the causes and effects of teenage pregnancy","Discuss common sexually transmitted infections, their causes, treatment and prevention","Discuss infertility and its causes","Identify harmful traditional practices affecting women's health"],
  note:"<b>Health</b> is the state of complete well-being, while <b>hygiene</b> is the set of practices that keep us healthy. <b>Puberty</b> is the stage at which the body matures and becomes capable of reproduction, bringing physical and emotional changes. Most <b>STIs</b> are preventable, and abstinence is the surest protection for young people.",
  focus:["Health and hygiene distinguished","Care of the body","Nutrition and food care","Puberty and adolescence","Teenage pregnancy: causes and effects","Sexually transmitted infections","Infertility and harmful traditional practices"],
  terms:[
    {t:"hygiene", d:"the practices that keep the body and surroundings clean", x:"Hygiene prevents infection."},
    {t:"nutrition", d:"the taking in and use of food by the body", x:"Good nutrition builds strong bodies."},
    {t:"malnutrition", d:"poor health caused by lack of the right food", x:"Malnutrition stunts growth."},
    {t:"food care", d:"handling and storing food so it stays safe to eat", x:"Food care prevents food poisoning."},
    {t:"puberty", d:"the stage when the body becomes able to reproduce", x:"Puberty brings a growth spurt."},
    {t:"adolescence", d:"the period of change between childhood and adulthood", x:"Adolescence brings new emotions."},
    {t:"teenage pregnancy", d:"pregnancy occurring in a girl in her teens", x:"Teenage pregnancy interrupts schooling."},
    {t:"STI", d:"an infection passed on through sexual contact", x:"Syphilis is an STI."},
    {t:"gonorrhoea", d:"a bacterial STI causing discharge and pain", x:"Gonorrhoea can be treated with antibiotics."},
    {t:"syphilis", d:"a bacterial STI that develops in stages", x:"Untreated syphilis is dangerous."},
    {t:"infertility", d:"the inability to produce children", x:"Infertility may have several causes."},
    {t:"abstinence", d:"choosing not to engage in sexual activity", x:"Abstinence prevents STIs and pregnancy."}
  ],
  facts:[
    {q:"State the difference between health and hygiene.", a:"Health is the state of complete physical, mental and social well-being; hygiene is the set of practices carried out to keep healthy."},
    {q:"Name four changes that occur in the body at puberty.", a:"A rapid growth spurt, growth of body hair, deepening of the voice in boys, and the beginning of menstruation in girls."},
    {q:"Give three causes of teenage pregnancy.", a:"Peer pressure, lack of correct information about sexuality, and poverty or lack of parental guidance."},
    {q:"Give three effects of teenage pregnancy.", a:"Interruption of schooling, health risks to mother and baby, and social and financial hardship."},
    {q:"Name four common sexually transmitted infections.", a:"Gonorrhoea, syphilis, chlamydia and trichomoniasis."},
    {q:"State three ways of preventing STIs.", a:"Abstinence, being faithful to one uninfected partner, and correct use of protection; also avoiding shared sharp instruments."},
    {q:"Give two causes of infertility.", a:"Biological causes such as untreated infections blocking the tubes, and cultural or lifestyle factors such as harmful practices."},
    {q:"State two ways of caring for food.", a:"Cover food to keep off flies and dust, and store it in a cool clean place or cook it thoroughly before eating."}
  ],
  tf:[
    {s:"Health and hygiene mean exactly the same thing.", a:"false", why:"Health is the state of well-being; hygiene is the practices carried out to achieve and keep it."},
    {s:"Most sexually transmitted infections can be prevented.", a:"true", why:"Abstinence, faithfulness and protection prevent transmission."},
    {s:"An untreated STI can lead to infertility.", a:"true", why:"Infection can damage or block the reproductive tubes, making conception impossible."},
    {s:"Teenage pregnancy affects only the girl involved.", a:"false", why:"It also affects the baby, the families and the wider community through health and economic costs."},
    {s:"Eating a balanced diet is part of good health care.", a:"true", why:"Correct nutrition supplies all the nutrients the body needs to grow and resist disease."}
  ],
  classify:{ title:"Sort these items", groups:[
    {name:"Sexually transmitted infections", items:["gonorrhoea","syphilis","chlamydia","trichomoniasis"]},
    {name:"Changes at puberty", items:["growth spurt","body hair","voice change","menstruation"]},
    {name:"Good food care practices", items:["covering food","washing hands","cooking thoroughly","cool clean storage"]}
  ]},
  diagram:{ title:"Preventing STIs and teenage pregnancy", caption:"Write how each measure helps.", parts:[
    {p:"Abstinence", f:"Avoiding sexual activity removes the risk of infection and pregnancy completely"},
    {p:"Correct information", f:"Knowing the facts helps a young person make safe and informed decisions"},
    {p:"Refusing peer pressure", f:"Being able to say no firmly protects one's health and future"},
    {p:"Early treatment", f:"Reporting symptoms early prevents complications such as infertility"},
    {p:"Avoiding shared sharp objects", f:"Prevents transmission of infections carried in blood"},
    {p:"Guidance and counselling", f:"Support from trusted adults helps young people cope with change"}
  ]},
  experiment:{
    title:"Investigating How Germs Spread from Unwashed Hands",
    aim:"To show how easily germs move from person to person by contact.",
    materials:["Fine powder such as flour or chalk dust","Clean hands","A clean table or set of objects","Soap and water"],
    steps:[
      "Put a little powder on the hands of one learner to represent germs.",
      "Let that learner shake hands with a second learner, who then shakes hands with a third.",
      "Ask each learner to touch a clean object such as a book or door handle.",
      "Examine all the hands and objects for traces of the powder.",
      "Wash hands with soap and water and check again."
    ],
    expect:"Powder is found on the hands of learners who never touched the first one, and on the objects they touched.",
    why:"Germs spread the same way, by contact from person to person and through shared surfaces. Washing with soap breaks the chain of transmission."
  },
  apply:[
    {q:"A young person notices symptoms of an STI but is afraid to tell anyone. What advice would you give and why?", a:"Go to a health centre at once, because early treatment cures most STIs, while delay can cause serious complications including infertility, and can spread the infection to others."},
    {q:"Why should a pregnant woman eat a balanced diet and attend a clinic?", a:"The growing baby draws nourishment from the mother, so good nutrition and regular check-ups protect the health of both and reduce complications at birth."},
    {q:"Why are some traditional practices described as harmful to women's health?", a:"Practices that cause injury, infection or denial of medical care put the mother and child at risk of illness, complications and death."}
  ],
  activities:["Discuss the changes of puberty","Debate the causes and effects of teenage pregnancy","Demonstrate how germs spread and are stopped","Plan a balanced diet from local foods"],
  materials:["Charts on puberty and reproductive health","Soap, water and powder for demonstration","Samples of local foods","Health education posters"],
  assessment:["Quiz on health and hygiene","Class debate assessment","Practical demonstration","Test on STIs and prevention"]
},
{
  grade:9, period:"IV", sem:"Two", icon:"🌡️",
  title:"Force, Heat and Sound",
  subtitle:"Unit IV: Motion, Bernoulli's principle, temperature and the transfer of heat",
  outcomes:["Appreciate the importance of the use of machines to get work done","Appreciate the uses and importance of light and temperature"],
  objectives:["Discuss the relationship of force, work, energy, motion and machines","Explain the relationship between velocity and acceleration, and speed and velocity","Demonstrate and explain Bernoulli's principle with examples","Demonstrate the measurement of temperature in °C and °F","Identify the types of thermometer and their uses","Describe the methods of heat transfer"],
  note:"<b>Speed</b> is distance divided by time; <b>velocity</b> is speed in a stated direction; <b>acceleration</b> is the rate of change of velocity. <b>Bernoulli's principle</b> states that where a fluid moves faster its pressure is lower — this is how aeroplane wings lift. <b>Heat</b> is a form of energy, while <b>temperature</b> is the degree of hotness measured in °C or °F.",
  focus:["Force, motion, work and energy","Speed, velocity and acceleration","Bernoulli's principle","Heat and temperature distinguished","Thermometer scales and types","Conduction, convection and radiation"],
  terms:[
    {t:"speed", d:"the distance travelled in unit time", x:"Speed = distance ÷ time."},
    {t:"velocity", d:"speed in a stated direction", x:"The velocity is 20 m/s due north."},
    {t:"acceleration", d:"the rate of change of velocity with time", x:"Acceleration is measured in m/s²."},
    {t:"inertia", d:"the resistance of a body to a change in its motion", x:"Inertia keeps the bus moving."},
    {t:"Bernoulli's principle", d:"where a fluid flows faster, its pressure is lower", x:"Bernoulli's principle explains lift."},
    {t:"heat", d:"a form of energy that flows from a hotter to a cooler body", x:"Heat flows from the fire."},
    {t:"temperature", d:"the degree of hotness or coldness of a body", x:"Temperature is measured with a thermometer."},
    {t:"thermometer", d:"an instrument for measuring temperature", x:"The clinical thermometer reads body temperature."},
    {t:"conduction", d:"the flow of heat through a solid from particle to particle", x:"Conduction heats a metal spoon."},
    {t:"convection", d:"the transfer of heat by movement of a liquid or gas", x:"Convection currents warm the water."},
    {t:"radiation", d:"the transfer of heat by waves without a material medium", x:"Radiation reaches us from the sun."},
    {t:"sound", d:"a form of energy produced by vibration", x:"Sound travels through air."}
  ],
  facts:[
    {q:"State the difference between speed and velocity.", a:"Speed is the distance covered in unit time; velocity is speed in a stated direction."},
    {q:"Define acceleration and give its unit.", a:"The rate of change of velocity with time, measured in metres per second squared (m/s²)."},
    {q:"A car travels 120 km in 2 hours. Find its speed.", a:"Speed = 120 ÷ 2 = 60 km/h."},
    {q:"State Bernoulli's principle.", a:"Where the speed of a fluid increases, the pressure within the fluid decreases."},
    {q:"State the difference between heat and temperature.", a:"Heat is a form of energy that flows from hot to cold; temperature is the degree of hotness measured in degrees."},
    {q:"What is the boiling point and freezing point of water on the Celsius scale?", a:"100 °C and 0 °C."},
    {q:"Name the three methods of heat transfer.", a:"Conduction, convection and radiation."},
    {q:"How is sound produced?", a:"By the vibration of an object, which sets the surrounding air vibrating."}
  ],
  tf:[
    {s:"Velocity and speed mean exactly the same thing.", a:"false", why:"Velocity includes direction, while speed does not."},
    {s:"Heat and temperature are the same quantity.", a:"false", why:"Heat is energy in transfer; temperature measures the degree of hotness."},
    {s:"Heat reaches the earth from the sun by radiation.", a:"true", why:"Radiation needs no material medium and can cross empty space."},
    {s:"Where a fluid moves faster, its pressure is lower.", a:"true", why:"This is Bernoulli's principle, which explains the lift of an aeroplane wing."},
    {s:"Sound can travel through a vacuum.", a:"false", why:"Sound needs a material medium to carry the vibrations; it cannot travel through a vacuum."}
  ],
  classify:{ title:"Sort these examples", groups:[
    {name:"Conduction", items:["metal spoon in hot tea","iron rod heated at one end","cooking pot handle","metal roof warming"]},
    {name:"Convection", items:["boiling water","sea breeze","smoke rising","hot air balloon"]},
    {name:"Radiation", items:["heat from the sun","warmth from a fire","heat from a lamp","heat from hot coals"]}
  ]},
  diagram:{ title:"Types of thermometer and their uses", caption:"Write what each is used for.", parts:[
    {p:"Clinical thermometer", f:"Measures body temperature, with a narrow range around 35–42 °C"},
    {p:"Laboratory thermometer", f:"Measures a wide range of temperatures in experiments"},
    {p:"Maximum thermometer", f:"Records the highest temperature reached in a period"},
    {p:"Minimum thermometer", f:"Records the lowest temperature reached in a period"},
    {p:"Celsius scale", f:"Water freezes at 0 °C and boils at 100 °C"},
    {p:"Fahrenheit scale", f:"Water freezes at 32 °F and boils at 212 °F"}
  ]},
  experiment:{
    title:"Demonstrating Bernoulli's Principle with a Sheet of Paper",
    aim:"To show that fast-moving air has lower pressure.",
    materials:["A sheet of paper","Two sheets of paper for the second part","Your breath"],
    steps:[
      "Hold one sheet of paper by its edge just below your lower lip so it hangs down.",
      "Blow steadily across the top surface of the paper and observe what happens.",
      "Now hold two sheets a few centimetres apart, hanging down.",
      "Blow steadily into the gap between them and observe.",
      "Record and explain both observations."
    ],
    expect:"The hanging sheet rises towards the moving air, and the two sheets move together rather than apart.",
    why:"The fast-moving air has lower pressure than the still air on the other side, so the higher still-air pressure pushes the paper towards the moving stream. This is Bernoulli's principle and it explains how an aeroplane wing generates lift."
  },
  apply:[
    {q:"Why is the handle of a cooking pot often made of wood or plastic?", a:"Wood and plastic are poor conductors of heat, so the handle stays cool enough to hold while the metal pot conducts heat to the food."},
    {q:"A vehicle travels 150 km in 3 hours. Find the average speed and state why this is speed and not velocity.", a:"Speed = 150 ÷ 3 = 50 km/h. It is speed because no direction of travel is stated."},
    {q:"Why does a zinc roof become very hot in the afternoon?", a:"It absorbs radiation from the sun and, being a metal, conducts the heat readily, so its temperature rises quickly."}
  ],
  activities:["Solve problems on speed and acceleration","Demonstrate Bernoulli's principle with paper","Measure temperature in °C and convert to °F","Investigate conduction in different materials"],
  materials:["Thermometers of different types","Metal and wooden rods","Paper sheets for demonstration","Stopwatch and measuring tape"],
  assessment:["Problem-solving test on motion","Practical report on Bernoulli's principle","Temperature measurement exercise","Quiz on heat transfer"]
},
{
  grade:9, period:"V", sem:"Two", icon:"🧲",
  title:"Magnetism and Electricity",
  subtitle:"Unit V: Magnets, static and current electricity, and electrical safety",
  outcomes:["Apply skills in electronics and electricity to solve problems using SI units"],
  objectives:["Discuss the causes of magnetism and its properties","State the electrostatic laws and discuss static electricity","Describe the effects of current electricity","State the difference between direct and alternating current","Explain how current electricity is measured","Identify the fuse and circuit breaker in an electric circuit","Describe the uses of the compass, motor and dynamo"],
  note:"A <b>magnet</b> attracts magnetic materials and points north–south when suspended. <b>Like poles repel and unlike poles attract.</b> <b>Static electricity</b> is charge at rest; <b>current electricity</b> is charge in motion along a conductor. A <b>fuse</b> and a <b>circuit breaker</b> protect a circuit by cutting off the current when it becomes too large.",
  focus:["Causes and properties of magnetism","Magnetic field and types of magnet","The compass, motor and dynamo","Static electricity and electrostatic laws","Current electricity: direct and alternating","Measuring current, voltage and resistance","Fuses, circuit breakers and safety"],
  terms:[
    {t:"magnet", d:"a body that attracts magnetic materials and points north–south", x:"A magnet picks up pins."},
    {t:"magnetic field", d:"the region around a magnet where its force acts", x:"Iron filings show the magnetic field."},
    {t:"pole", d:"the end of a magnet where the force is strongest", x:"The north pole points north."},
    {t:"electromagnet", d:"a magnet made by passing current through a coil", x:"An electromagnet lifts scrap iron."},
    {t:"compass", d:"an instrument with a magnetic needle used to find direction", x:"The compass points north."},
    {t:"dynamo", d:"a machine that changes mechanical energy to electrical energy", x:"A dynamo lights the bicycle lamp."},
    {t:"electric motor", d:"a machine that changes electrical energy to mechanical energy", x:"A motor turns the fan."},
    {t:"static electricity", d:"electric charge that is at rest on a body", x:"Static electricity makes hair stand up."},
    {t:"current", d:"the flow of electric charge through a conductor", x:"Current is measured in amperes."},
    {t:"direct current", d:"current that flows in one direction only", x:"A dry cell gives direct current."},
    {t:"alternating current", d:"current that reverses direction regularly", x:"Mains supply is alternating current."},
    {t:"conductor", d:"a material that allows electricity to pass through it", x:"Copper is a good conductor."},
    {t:"insulator", d:"a material that does not allow electricity to pass", x:"Rubber is an insulator."},
    {t:"fuse", d:"a thin wire that melts and breaks the circuit if the current is too large", x:"The fuse protects the appliance."}
  ],
  facts:[
    {q:"State the law of magnetism.", a:"Like poles repel each other and unlike poles attract each other."},
    {q:"Name three types of magnet.", a:"Bar magnet, horseshoe magnet and electromagnet."},
    {q:"What is a magnetic field?", a:"The region around a magnet in which its magnetic force can be detected."},
    {q:"State the law of electrostatics.", a:"Like charges repel each other and unlike charges attract each other."},
    {q:"State the difference between direct and alternating current.", a:"Direct current flows in one direction only; alternating current reverses its direction regularly."},
    {q:"Name the units of current, voltage and resistance.", a:"The ampere, the volt and the ohm."},
    {q:"What instrument measures electric current?", a:"An ammeter."},
    {q:"State the purpose of a fuse in a circuit.", a:"It melts and breaks the circuit when the current becomes too large, protecting the appliance and preventing fire."},
    {q:"State one difference between a motor and a dynamo.", a:"A motor changes electrical energy into mechanical energy; a dynamo changes mechanical energy into electrical energy."}
  ],
  tf:[
    {s:"Like poles of a magnet attract each other.", a:"false", why:"Like poles repel; it is unlike poles that attract."},
    {s:"A freely suspended bar magnet comes to rest pointing north and south.", a:"true", why:"The earth behaves as a magnet and aligns the suspended magnet north–south."},
    {s:"Rubber is a good conductor of electricity.", a:"false", why:"Rubber is an insulator; metals such as copper are good conductors."},
    {s:"The mains supply in homes is alternating current.", a:"true", why:"Mains electricity reverses direction regularly, unlike the direct current of a dry cell."},
    {s:"A fuse is fitted to make an appliance run faster.", a:"false", why:"A fuse is a safety device that breaks the circuit when the current is dangerously high."}
  ],
  classify:{ title:"Sort these materials and devices", groups:[
    {name:"Magnetic materials", items:["iron","steel","nickel","cobalt"]},
    {name:"Conductors", items:["copper","aluminium","silver","iron"]},
    {name:"Insulators", items:["rubber","plastic","dry wood","glass"]}
  ]},
  diagram:{ title:"Parts of a simple electric circuit", caption:"Write the work each part does.", parts:[
    {p:"Cell or battery", f:"Supplies the electrical energy that drives the current"},
    {p:"Connecting wires", f:"Provide the conducting path for the current"},
    {p:"Switch", f:"Opens or closes the circuit to stop or start the current"},
    {p:"Bulb or appliance", f:"Converts electrical energy into light, heat or motion"},
    {p:"Ammeter", f:"Measures the current flowing in the circuit, in amperes"},
    {p:"Fuse", f:"Breaks the circuit if the current becomes dangerously large"}
  ]},
  experiment:{
    title:"Making an Electromagnet",
    aim:"To make a magnet using an electric current and to find what affects its strength.",
    materials:["A large iron nail","About two metres of insulated copper wire","A dry cell or battery","Steel pins or paper clips","A switch"],
    steps:[
      "Wind the insulated wire tightly round the iron nail, making about 20 turns.",
      "Connect the two ends of the wire to the cell through the switch.",
      "Close the switch and bring the nail near the pins. Count how many pins are picked up.",
      "Open the switch and observe what happens to the pins.",
      "Increase the number of turns to about 40 and repeat, then record and compare the results."
    ],
    expect:"The nail picks up pins only while the switch is closed, and it picks up more pins when there are more turns of wire.",
    why:"A current flowing in a coil produces a magnetic field, which magnetizes the iron core. More turns give a stronger field, and the magnetism disappears when the current stops — which is why electromagnets can be switched on and off."
  },
  apply:[
    {q:"Why is an electromagnet, rather than a permanent magnet, used in a scrapyard crane?", a:"An electromagnet can be switched on to lift the scrap and switched off to release it, which a permanent magnet cannot do."},
    {q:"Why should a person not touch electrical switches with wet hands?", a:"Water conducts electricity, so the current can pass through the body and cause a dangerous shock."},
    {q:"A bulb keeps blowing whenever the fuse is replaced with a thick wire. Explain the danger.", a:"A thick wire will not melt at the correct current, so the circuit is no longer protected and the wiring can overheat and cause a fire."}
  ],
  activities:["Investigate the properties of magnets with iron filings","Build a simple electric circuit","Make and test an electromagnet","Identify conductors and insulators"],
  materials:["Bar and horseshoe magnets","Iron filings and compasses","Cells, wires, bulbs and switches","Nails and insulated copper wire"],
  assessment:["Practical report on the electromagnet","Quiz on magnetism","Circuit-building exercise","Test on current electricity"]
},
{
  grade:9, period:"VI", sem:"Two", icon:"♻️",
  title:"Environmental Science",
  subtitle:"Unit VI: Sanitation, waste disposal, water supply and air pressure",
  outcomes:["Practise proper disposal of waste and recognize the importance of water and its sources","Acquire knowledge in astronomy and develop interest in farming"],
  objectives:["Discuss the sanitary conditions of the environment, community and market places and ways of improving them","Test for hard and soft water and pH","List the sources of water supply","Discuss the treatment and usage of water","Explain air pressure and its effects","Describe how fluid pressure works in machines"],
  note:"<b>Sanitation</b> is the safe disposal of human and solid waste and the keeping of clean surroundings. Poor sanitation causes diarrhoea, cholera, typhoid and polio. <b>Hard water</b> contains dissolved calcium and magnesium salts and does not lather easily with soap; <b>soft water</b> lathers readily. <b>pH</b> measures how acidic or alkaline a substance is on a scale of 0 to 14.",
  focus:["Sanitation and waste disposal","Diseases caused by poor sanitation","The water cycle and water table","Sources and treatment of water","Hard and soft water and pH","Air pressure and fluid pressure"],
  terms:[
    {t:"sanitation", d:"the safe disposal of waste and keeping of clean surroundings", x:"Good sanitation prevents disease."},
    {t:"solid waste", d:"rubbish such as garbage and refuse", x:"Solid waste should be buried or burnt safely."},
    {t:"sewage", d:"waste water and human waste carried away from homes", x:"Sewage must be treated."},
    {t:"incineration", d:"the safe burning of waste at high temperature", x:"Incineration reduces waste volume."},
    {t:"recycling", d:"treating used material so it can be used again", x:"Recycling saves resources."},
    {t:"water cycle", d:"the continuous movement of water between earth and atmosphere", x:"The water cycle renews our water."},
    {t:"water table", d:"the upper level of water saturating the ground", x:"Wells are dug below the water table."},
    {t:"hard water", d:"water containing dissolved calcium and magnesium salts", x:"Hard water wastes soap."},
    {t:"soft water", d:"water that lathers easily with soap", x:"Rain water is soft water."},
    {t:"pH", d:"a measure of acidity or alkalinity on a scale of 0 to 14", x:"Pure water has a pH of 7."},
    {t:"acid", d:"a substance with a pH below 7", x:"Lime juice is an acid."},
    {t:"alkali", d:"a substance with a pH above 7", x:"Caustic soda is an alkali."},
    {t:"air pressure", d:"the force exerted by the weight of air on a surface", x:"Air pressure falls with altitude."},
    {t:"hydraulic machine", d:"a machine that uses liquid pressure to do work", x:"A car brake is a hydraulic machine."}
  ],
  facts:[
    {q:"Define sanitation.", a:"The safe disposal of human and solid waste and the keeping of surroundings clean."},
    {q:"Name four diseases caused by poor sanitation.", a:"Diarrhoea, cholera, typhoid and polio."},
    {q:"State three ways of disposing of solid waste.", a:"Burying in a pit, controlled burning or incineration, and recycling or composting."},
    {q:"Name four sources of water supply.", a:"Rain, rivers and streams, wells and boreholes, and springs."},
    {q:"State the difference between hard and soft water.", a:"Hard water contains dissolved calcium and magnesium salts and does not lather easily; soft water lathers readily with soap."},
    {q:"What is the pH of pure water, and what does it mean?", a:"Its pH is 7, which means it is neutral — neither acidic nor alkaline."},
    {q:"Name three methods of treating water for drinking.", a:"Filtration, boiling and chlorination (also sedimentation)."},
    {q:"Give two effects of air pressure that we can observe.", a:"It allows us to drink through a straw and to use a syringe, and it holds the mercury column in a barometer."}
  ],
  tf:[
    {s:"Poor sanitation can cause cholera and typhoid.", a:"true", why:"Waste contaminates water and food, spreading these diseases."},
    {s:"Hard water lathers easily with soap.", a:"false", why:"Hard water contains calcium and magnesium salts that waste soap; it is soft water that lathers easily."},
    {s:"A substance with a pH of 3 is acidic.", a:"true", why:"Any pH below 7 shows an acid; 7 is neutral and above 7 is alkaline."},
    {s:"Air has weight and exerts pressure.", a:"true", why:"The weight of the air above presses on every surface, which is air pressure."},
    {s:"Burning rubbish in the open is the best method of waste disposal.", a:"false", why:"Open burning pollutes the air; controlled incineration, burying or recycling are safer."}
  ],
  classify:{ title:"Sort these items", groups:[
    {name:"Methods of waste disposal", items:["burying","composting","incineration","recycling"]},
    {name:"Diseases from poor sanitation", items:["cholera","typhoid","diarrhoea","polio"]},
    {name:"Sources of water", items:["rain","river","well","spring"]}
  ]},
  diagram:{ title:"Stages of water treatment for a town supply", caption:"Write what each stage does.", parts:[
    {p:"Screening", f:"Removes large floating objects such as sticks and leaves"},
    {p:"Sedimentation", f:"Water stands so heavy suspended particles settle out"},
    {p:"Filtration", f:"Water passes through sand and gravel beds to remove fine particles"},
    {p:"Chlorination", f:"Chlorine is added to kill disease-causing germs"},
    {p:"Storage", f:"Treated water is kept in covered reservoirs"},
    {p:"Distribution", f:"Clean water is piped to homes, schools and markets"}
  ]},
  experiment:{
    title:"Testing Water Samples for Hardness",
    aim:"To find out which water samples are hard and which are soft.",
    materials:["Samples of rain water, well water, river water and tap water","Soap solution","Four test tubes with stoppers","A measuring cylinder","A dropper"],
    steps:[
      "Measure equal volumes of each water sample into four labelled test tubes.",
      "Add five drops of soap solution to the first tube, stopper it and shake well.",
      "Observe whether a lasting lather forms and record the result.",
      "Repeat with the same number of drops for each of the other samples.",
      "Add more soap drop by drop to any sample that gives no lather, counting the drops needed."
    ],
    expect:"Rain water lathers quickly with few drops, while well or river water needs many more drops before a lather forms.",
    why:"Dissolved calcium and magnesium salts react with soap first, forming scum instead of lather. The more soap needed, the harder the water."
  },
  apply:[
    {q:"Why does a community that dumps waste near its well suffer from diarrhoea?", a:"Rain washes germs from the waste into the well, contaminating the drinking water and spreading disease."},
    {q:"Explain how drinking through a straw depends on air pressure.", a:"Sucking lowers the pressure inside the straw, so the greater air pressure on the surface of the drink pushes the liquid up."},
    {q:"Why is hard water a problem in a laundry business?", a:"It wastes soap by forming scum instead of lather, so more soap and money are needed and clothes are less clean."}
  ],
  activities:["Survey and report on sanitation in the school and market","Test local water samples for hardness and pH","Build a model water filter","Demonstrate air pressure with simple apparatus"],
  materials:["Water samples and test tubes","Soap solution and pH paper","Bottles, sand and gravel","Straws, syringes and jars"],
  assessment:["Sanitation survey report","Practical water testing report","Quiz on water and pH","Test on air pressure"]
}

];

/* Merge the Junior High units into the single General Science curriculum,
   exactly as English does for Grades 7-9: one subject, extra grades. */
if (typeof SC_CURRICULUM !== "undefined") {
  SC_CURRICULUM.push.apply(SC_CURRICULUM, SC_CURRICULUM_79);
}
