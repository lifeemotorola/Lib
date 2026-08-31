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
  study:[
    /* ---- study notes: Semester One, Period I (guide pp. 2–5) ---- */
    {k:"h3", t:"What is Science?"},
    {k:"p", t:"**Science** is organized knowledge about the world. It is knowledge that we gain through careful **observation** and **experiment**, and that can be tested and verified. Science explains why things happen: why objects fall, why water boils, why food keeps us healthy."},
    {k:"p", t:"A **fact** is a statement that can be tested and verified. **Fiction** is a story invented by imagination, and it cannot be verified. In science, we accept only facts — claims that experiments support. Ordinary people do science every day: a farmer tests which seed grows best, a cook tests how long food takes to boil, a mechanic tests which part has failed."},
    {k:"rule"},
    {k:"h3", t:"The Scientific Method"},
    {k:"p", t:"Scientists do not guess. They follow a plan called the **scientific method**, which has these steps:"},
    {k:"num", items:[
      "**Observation** — use the senses or instruments to notice something in the environment and record it carefully.",
      "**Statement of the problem** — put the puzzle into a clear question that can be investigated.",
      "**Hypothesis** — suggest a testable answer to the question before experimenting.",
      "**Experiment** — carry out a fair test, changing one factor at a time.",
      "**Recording of data** — write down measurements and observations as they happen.",
      "**Conclusion** — examine the results and state whether they support the hypothesis."
    ]},
    {k:"p", t:"The **scientific attitude** is the quality of being curious, honest and careful: asking questions, recording what is really seen, repeating experiments, and being ready to change a conclusion when new evidence appears. A **hypothesis** is not a proven fact — it is only a suggested answer that still has to be tested."},
    {k:"p", t:"Examples of simple science in everyday life: measuring the length of a cloth before selling it, testing whether a mixture of oil and water stays mixed, and boiling water to see what happens to it."},
    {k:"rule"},
    {k:"h3", t:"Measurement"},
    {k:"p", t:"**Measurement** is comparing a quantity with a standard unit. There are two systems of measurement in common use: the **metric (SI) system** and the older **English system**."},
    {k:"table", head:["Quantity","Metric unit","English unit"], rows:[
      ["Length","metre (m)","foot (ft), yard (yd), inch (in)"],
      ["Mass","gram (g), kilogram (kg)","ounce (oz), pound (lb)"],
      ["Volume","litre (L)","gallon (gal), pint (pt)"]
    ]},
    {k:"p", t:"The metric system is a **decimal system**: its units are related by tens, so a centimetre is one hundredth of a metre, a milligram is one thousandth of a gram, and a kilometre is a thousand metres. This makes conversion easy — multiply or divide by 10, 100 or 1000. The English system does not work in tens, so its conversions are harder."},
    {k:"p", t:"To solve problems, measure with the right instrument — a ruler or metre stick for length, a balance for mass, a measuring cylinder for volume — and show your work. For example, if a rope is 3 metres long and you cut off 85 cm, the rope left is 300 cm − 85 cm = **215 cm**."},
    {k:"rule"},
    {k:"h3", t:"Matter and Its Characteristics"},
    {k:"p", t:"**Matter** is anything that has **mass** and occupies **space**. The desk, the chalk, the air in the room and the water in your cup are all matter. A **non-living thing** is matter that does not grow, breathe or reproduce — such as a stone, a ruler, water or air."},
    {k:"p", t:"**Non-living matter** has these characteristics:"},
    {k:"bul", items:[
      "It has **mass** — it contains a quantity of matter.",
      "It occupies **space** — it has volume.",
      "It can be measured: its mass with a balance, its volume by displacement or by reading a container.",
      "It can be separated into parts that are elements, compounds or mixtures."
    ]},
    {k:"p", t:"**Density** is the mass of a substance per unit volume. It is found by dividing mass by volume:"},
    {k:"p", t:"**Density = mass ÷ volume**"},
    {k:"rule"},
    {k:"h3", t:"States of Matter"},
    {k:"p", t:"Matter exists in three states: **solid, liquid and gas**. Water shows all three: **ice** is a solid, **water** is a liquid, and **steam** is a gas."},
    {k:"table", head:["State","Shape","Volume","Example"], rows:[
      ["Solid","Fixed shape","Fixed volume","Ice, stone, iron"],
      ["Liquid","Takes the shape of its container","Fixed volume","Water, palm oil"],
      ["Gas","Takes the shape of its container","No fixed volume — fills the container","Steam, air"]
    ]},
    {k:"p", t:"In a **solid**, the particles are packed tightly and vibrate in fixed positions, so a solid keeps its shape. In a **liquid**, the particles can slide past one another, so a liquid flows and takes the shape of its container, though its volume stays the same. In a **gas**, the particles are far apart and move freely, so a gas expands to fill any container."},
    {k:"p", t:"Water can change from one state to another: **melting** (ice → water) and **boiling** (water → steam) take in heat; **freezing** and **condensation** give out heat. These changes are **physical changes** — no new substance is formed."},
    {k:"rule"},
    {k:"h3", t:"Elements, Compounds and Mixtures"},
    {k:"p", t:"All matter is made of **elements**, **compounds** or **mixtures**."},
    {k:"p", t:"An **element** is a substance made of only one kind of atom. Examples: **oxygen, iron, carbon, copper, sulphur**. An element cannot be broken down into a simpler substance by ordinary chemical means."},
    {k:"p", t:"A **compound** is two or more elements **chemically combined** in fixed proportions. Examples: **water** (hydrogen + oxygen), **common salt** (sodium + chlorine), **carbon dioxide** (carbon + oxygen), **rust** (iron + oxygen). In a compound the elements lose their separate properties, and the compound can be split back into its elements only by chemical means."},
    {k:"p", t:"A **mixture** is two or more substances put together but **not chemically joined**. Each substance keeps its own properties, and the mixture can be separated by physical means. Examples: **air** (a mixture of gases), **sea water** (salt dissolved in water), **soil**, and sand mixed with salt."},
    {k:"p", t:"**Ways of separating mixtures:**"},
    {k:"bul", items:[
      "A **magnet** pulls iron filings out of a mixture of iron filings and sulphur.",
      "**Oil and water** separate on standing — the oil floats on top and can be poured off (using a separating funnel).",
      "**Filtration** removes sand from water.",
      "**Evaporation** leaves salt behind when sea water is boiled off.",
      "**Distillation** collects the water vapour from salt water as pure water."
    ]},
    {k:"rule"},
    {k:"h3", t:"Physical and Chemical Changes"},
    {k:"p", t:"Substances change in two main ways: **physical changes** and **chemical changes**."},
    {k:"p", t:"In a **physical change**, no new substance is formed. The substance may change its shape, size or state, but it stays the same substance. Examples: **melting of candle wax**, **boiling of water into steam**, cutting paper, breaking glass, dissolving salt in water. Physical changes can usually be reversed."},
    {k:"p", t:"In a **chemical change**, one or more **new substances** with new properties are formed. Chemical changes involve the **participation of energy** — usually heat, light or electricity. Examples:"},
    {k:"bul", items:[
      "**Burning of a candle** — wax and oxygen form carbon dioxide, water and ash; the flame gives out light and heat.",
      "**Respiration** — food in the body combines with oxygen to give energy, carbon dioxide and water.",
      "**Decay of materials** — dead leaves and rotting food break down into new substances.",
      "**Rusting of iron** — iron combines with oxygen and moisture to form rust.",
      "**Baking a cake or frying an egg** — the raw ingredients become new substances that cannot be turned back."
    ]},
    {k:"p", t:"These changes can be **verified experimentally**: boil water and observe that the steam condenses back to water (physical); burn a candle and observe the new products — smoke, soot and gas (chemical). A chemical change is usually shown by a change of colour, the formation of a gas or a precipitate, and the giving out or taking in of heat."},
    {k:"rule"},
    {k:"h3", t:"Fuels"},
    {k:"p", t:"A **fuel** is a substance that burns and gives out heat and light. Fuels are grouped into three kinds by their state:"},
    {k:"table", head:["Kind of fuel","Examples","Uses"], rows:[
      ["Solid fuels","wood, charcoal, coal","cooking, heating, powering engines"],
      ["Liquid fuels","kerosene, gasoline (petrol), diesel, oil","cooking, fuel for vehicles and generators"],
      ["Gaseous fuels","cooking gas (LPG), biogas, natural gas","cooking, heating, running engines"]
    ]},
    {k:"p", t:"Wood, charcoal, gasoline, oil and cooking gas are all fuels, and all of them **contain hydrogen** — most are **hydrocarbons**, compounds of carbon and hydrogen. When a fuel burns, it combines rapidly with oxygen in the air; this chemical change releases **energy** as heat and light, which we use for cooking, lighting and power."}
  ],
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
  study:[
    /* ---- study notes: Semester One, Period II (guide pp. 6–9) ---- */
    {k:"h3", t:"Living Matter"},
    {k:"p", t:"**Living things** are things that grow, feed, breathe, respond to their surroundings, grow larger, get rid of waste and produce young ones. Every living thing — a mango tree, a goat, a fish or a person — is an **organism**, and every organism is made of tiny living units called **cells**."},
    {k:"p", t:"The **cell** is the basic unit of all living things. It is the smallest structure that can carry out the work of life. Some organisms, such as amoeba, are just one cell; others, such as humans, are made of billions of cells working together."},
    {k:"rule"},
    {k:"h3", t:"Plants and Animals"},
    {k:"p", t:"Living things are grouped into two great kingdoms: **plants** and **animals**. The main differences between them are:"},
    {k:"cols", a:[
      "**Plants** are green and make their own food by photosynthesis.",
      "Plants are fixed in one place; they do not move from place to place.",
      "Plants have a cell wall of cellulose around each cell."
    ], b:[
      "**Animals** are not green and feed on other organisms for food.",
      "Animals can move about freely from place to place.",
      "Animal cells have no cell wall."
    ]},
    {k:"p", t:"**Plants** are further divided into **flowering plants** and **non-flowering plants**. A **flowering plant** (such as the mango tree, rice, cassava and okra) bears a flower which, after pollination and fertilization, forms a **fruit** containing **seeds**. A **non-flowering plant** (such as the fern, moss and algae) has no true flower and no seed; it multiplies by tiny bodies called **spores**."},
    {k:"rule"},
    {k:"h3", t:"Parts of a Plant and Their Functions"},
    {k:"p", t:"Every plant has two main systems: the **root system** below the soil and the **shoot system** (stem, leaves, flower) above the soil."},
    {k:"bul", items:[
      "**Root** — absorbs **water and mineral salts** from the soil and provides **fixation**, holding the plant firmly in the ground. A young bean seed shows a **tap root** that grows straight down into the soil.",
      "**Stem** — stands the plant up and provides **transportation**: it carries water and minerals up from the root to the leaves and carries the food made in the leaves down to other parts of the plant. The stem also takes part in the **preparation of food**.",
      "**Leaf** — the main part for the **preparation of food**. The leaf contains **chlorophyll**, the green colouring that traps the energy of sunlight.",
      "**Flower and fruit** — the flower is the reproductive part of the plant; after it is pollinated and fertilized it forms a fruit that carries the seeds for new plants."
    ]},
    {k:"p", t:"**Photosynthesis** is the process by which a green plant prepares its own food. In the leaf, **carbon dioxide** from the air enters through tiny holes called **stomata**, and **water** is brought up by the stem. In the presence of **chlorophyll** and the **sunlight** it traps, the plant makes **starch** (food) and gives out **oxygen** to the air."},
    {k:"p", t:"**Photosynthesis:** carbon dioxide + water → (sunlight, chlorophyll) → starch + oxygen"},
    {k:"p", t:"A plant grown in the shade turns pale and grows weak, while the same plant grown in sunlight stays green and strong — because without sunlight the chlorophyll cannot make food. Green plants are therefore called **producers**: they produce the food on which all other living things ultimately depend."},
    {k:"rule"},
    {k:"h3", t:"Structure and Function of the Flower"},
    {k:"p", t:"A complete flower, such as the hibiscus flower, is made of the **flower stalk (pedicel)**, the **epicalyx**, and four main whorls:"},
    {k:"num", items:[
      "**Calyx (sepals)** — the outer green leaves of the flower.",
      "**Corolla (petals)** — the coloured petals.",
      "**Androecium (stamens)** — the male part, made of the **filament** and the **anther** which carries the **pollen grains**.",
      "**Gynoecium** — the female part, made of the **ovary**, the **style** and the **stigma**."
    ]},
    {k:"p", t:"The **functions** of the flower parts:"},
    {k:"bul", items:[
      "The **epicalyx and calyx** give **protection** to the young flower.",
      "The **corolla** (bright petals) helps **pollination** by attracting insects.",
      "The **androecium** is the **male part** — it makes the pollen.",
      "The **gynoecium** is the **female part** — the pollen grain grows down the style into the ovary, where fertilization takes place and the fruit and seeds form."
    ]},
    {k:"rule"},
    {k:"h3", t:"Animals: Vertebrates and Invertebrates"},
    {k:"p", t:"Animals are divided into two groups according to their skeleton:"},
    {k:"cols", a:[
      "**Vertebrates** have a skeleton inside the body — an **endoskeleton** with a **vertebral column** (backbone).",
      "Locally: **fish, frogs, birds, goats, cattle, dogs, lizards**."
    ], b:[
      "**Invertebrates** have **no internal skeleton** (no backbone).",
      "Locally: **grasshopper, butterfly, moth, earthworm, crayfish, snail**."
    ]},
    {k:"p", t:"By examining the external features of local animals — the fins of a fish, the four legs of a frog, the wings and beak of a bird, the fur of a goat — you can group them as vertebrates or invertebrates."},
    {k:"rule"},
    {k:"h3", t:"The Human Reproductive System"},
    {k:"p", t:"The **reproductive system** is the set of organs by which human beings produce young ones. The **male reproductive system** includes the testes (which make the male cells or sperm), the vas deferens and the penis. The **female reproductive system** includes the ovaries (which make the female cells or eggs), the oviducts (fallopian tubes), the uterus (womb) and the vagina."},
    {k:"p", t:"When a male cell from the father joins a female cell from the mother in the oviduct, **fertilization** takes place. The fertilized egg develops in the uterus, and after about nine months a new baby is born. This is **pregnancy**."},
    {k:"rule"},
    {k:"h3", t:"Puberty"},
    {k:"p", t:"**Puberty** is the period when a young person's body changes from that of a child to that of an adult. It usually begins between about **10 and 14 years** of age. The change is brought about by **sex hormones** secreted under the control of the **pituitary gland** and the **adrenal glands**."},
    {k:"p", t:"**In girls:** the body widens at the hips, the breasts develop, the voice becomes softer, and **menstruation** (the monthly flow of blood) begins."},
    {k:"p", t:"**In boys:** the shoulders broaden, the voice breaks and becomes deep, facial hair begins to grow, and **wet dreams** (nocturnal emission) may occur during sleep."},
    {k:"p", t:"Puberty brings not only **physical change** but also **emotional change** and **social change**: a young person becomes more interested in the opposite sex and in taking on adult responsibilities. These changes are natural, and a young person should keep **bodily integrity and privacy** — the body is one's own, and one should respect the body and privacy of others."},
    {k:"rule"},
    {k:"h3", t:"The Menstrual Cycle and Menopause"},
    {k:"p", t:"**Menstruation** is the monthly flow of blood that begins with puberty in girls. It happens because an egg is released from the ovary each month (**ovulation**) and, if it is not fertilized, the lining of the uterus breaks down and is discharged. The cycle of events is the **menstrual cycle**, which lasts about 28 days."},
    {k:"p", t:"A girl should keep clean during menstruation: wash the body daily, use clean cloths or pads, and do not fear the change, because it is a normal sign of health."},
    {k:"p", t:"After many years, usually around 45 to 55 years of age, menstruation stops forever. This is **menopause**, the end of a woman's child-bearing years."},
    {k:"rule"},
    {k:"h3", t:"Pregnancy and Teenage Pregnancy"},
    {k:"p", t:"**Pregnancy** occurs when a male cell fertilizes a female cell and the fertilized egg is implanted in the lining of the uterus. The baby develops in the womb for about nine months."},
    {k:"p", t:"**Teenage pregnancy** is pregnancy that happens when a girl is still a child in school. It has serious consequences:"},
    {k:"bul", items:[
      "**Biological** — the body of a teenager is not fully grown, so pregnancy and birth can be dangerous for both the mother and the baby.",
      "**Socio-psychological** — the girl is stigmatized, loses friends, suffers shame and distress, and the relationship with the family and the community is broken.",
      "**Economic** — the girl leaves school, loses the chance to learn a trade or a profession, and becomes a financial burden at a time when she should be preparing for life."
    ]},
    {k:"p", t:"**Prevention of teenage pregnancy:** a young person should avoid early sexual activity, keep self-control and respect for oneself, study hard and set goals for the future, keep away from bad company, talk to parents or a trusted adult about problems, and know that sexual activity belongs to marriage, when the body and the mind are ready."}
  ],
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
  study:[
    /* ---- study notes: Semester One, Period III (guide pp. 10–11) ---- */
    {k:"h3", t:"What is Energy?"},
    {k:"p", t:"**Energy** is the **ability to do work**. Everything we do — cooking food, walking to school, carrying water, pushing a wheelbarrow — needs energy. In science, **work** is done when a **force** moves an object through a **distance**."},
    {k:"p", t:"Energy is not a substance we can see and hold, but we recognize it by the work it does. **Matter** is used to produce energy: food is matter that gives the body energy, and fuels such as wood, kerosene and gasoline are matter that, when burned, give out heat and light energy."},
    {k:"rule"},
    {k:"h3", t:"Kinds of Energy"},
    {k:"p", t:"There are two kinds of energy: **potential energy** and **kinetic energy**."},
    {k:"p", t:"**Potential energy** is **stored energy** that a body has because of its **position** or its **condition**. Examples:"},
    {k:"bul", items:[
      "A **stone on a hill** has potential energy because of its height.",
      "Water held back by a **dam** has potential energy.",
      "A **stretched bow** has potential energy in its condition.",
      "Food in a container has potential (chemical) energy."
    ]},
    {k:"p", t:"**Kinetic energy** is the energy a body has because it is **moving**. Examples: a **rolling ball**, a **flowing river**, a **moving car**, the **wind**, and water falling from a height."},
    {k:"rule"},
    {k:"h3", t:"Conversion of Energy"},
    {k:"p", t:"Energy can be **converted** — changed — from one kind to another, and from one form to another. When the stone on the hill falls, its **potential energy** is converted into **kinetic energy** as it moves. When a stretched bow shoots an arrow, the stored potential energy of the bow becomes the kinetic energy of the moving arrow."},
    {k:"p", t:"In everyday life we see energy converted in many ways:"},
    {k:"bul", items:[
      "A **burning candle** converts chemical energy into heat and light.",
      "A **dynamo or generator** converts mechanical energy into electrical energy.",
      "An **electric lamp** converts electrical energy into light and heat.",
      "The **body** converts the chemical energy of food into mechanical energy for work and heat energy to keep the body warm."
    ]},
    {k:"p", t:"Energy is never created from nothing and never destroyed. It only **changes from one form to another**. This is the law of **conservation of energy**."},
    {k:"p", t:"The main **forms** in which energy appears are: **heat** energy, **light** energy, **sound** energy, **chemical** energy, **electrical** energy, **mechanical** energy and **solar (sun)** energy."},
    {k:"rule"},
    {k:"h3", t:"Conserving Energy and Natural Resources"},
    {k:"p", t:"Energy and the natural resources that give it (fuel, water, forests) are not endless. Ways we can **conserve energy** in everyday life:"},
    {k:"bul", items:[
      "Switch off lights and electrical appliances when they are not in use.",
      "Cook with a well-covered pot so the heat is not wasted.",
      "Use the amount of fuel and water that the task needs — no more.",
      "Plant trees and protect the forest, because trees are the source of fuel wood.",
      "Walk or use a bicycle for short distances instead of burning fuel.",
      "Repair leaking taps so water, which carries energy, is not wasted."
    ]},
    {k:"rule"},
    {k:"h3", t:"Simple Machines"},
    {k:"p", t:"A **machine** is a device that makes work **easier**. A machine does **not** create energy; it helps us by changing the **size** or the **direction** of the force we apply. A **simple machine** is one of six basic kinds. Every complex machine — a car, a watch, a generator — is built from these six."},
    {k:"num", items:[
      "**Lever** — a rigid bar that turns about a fixed point called the **fulcrum**. The load is pushed or lifted at one end and the **effort** is applied at the other. Examples: a **see-saw**, **scissors**, a **beam balance**, **tongs**, a crowbar, and the handle of a bucket.",
      "**Inclined plane** — a **slanting surface** used to raise a load with less force than lifting it straight up. A **ramp** or a hill path is an inclined plane: pushing a load up a long slope needs less force than lifting it, though the force acts over a longer distance.",
      "**Screw** — an **inclined plane wound round a cylinder**. The threads of a screw, the lid of a bottle, and the cap of a jar are screws; turning them slowly changes a small turning force into a large pushing force.",
      "**Wheel and axle** — a large **wheel fixed to a smaller rod (the axle)** so that both turn together. Turning the wheel with a small effort turns the axle with a larger force. Examples: a **steering wheel**, a **windlass** for drawing water, and a door knob.",
      "**Pulley** — a **grooved wheel with a rope** over it, used for lifting loads. A **fixed pulley** (like the one at a well) changes the direction of the pull so you pull down to lift up; a **movable pulley** reduces the force needed to lift the load.",
      "**Wedge** — two inclined planes back to back, used for splitting or cutting. Examples: an **axe**, a **knife**, a **nail** and a door wedge."
    ]},
    {k:"p", t:"The **principle** of every simple machine is the same: a small effort over a long distance can move a large load over a short distance. The machine makes the work easier, but the amount of work (force × distance) done is not reduced — some is always lost to **friction**."},
    {k:"rule"},
    {k:"h3", t:"Force, Work and Power"},
    {k:"p", t:"A **force** is a push or a pull that can change the motion or the shape of a body. Forces are measured in **newtons (N)**."},
    {k:"p", t:"**Work** is done when a force moves an object in the direction of the force, and it is measured as:"},
    {k:"p", t:"**Work = force × distance**"},
    {k:"p", t:"Work is measured in **joules (J)**: one joule is the work done when a force of one newton moves an object one metre. **Example:** lifting a book that weighs 20 N through 1.5 m does work = 20 × 1.5 = **30 J**."},
    {k:"p", t:"**Power** is the **rate** of doing work — how much work is done in one second. Power = work ÷ time, and is measured in **watts (W)**: one watt is one joule of work done in one second. Two people can carry the same load to the top of the stairs, but the one who climbs faster has the greater power."}
  ],
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
  study:[
    /* ---- study notes: Semester Two, Period IV (guide pp. 12–15) ---- */
    {k:"h3", t:"Health, Disease and Personal Hygiene"},
    {k:"p", t:"**Health** is complete physical, mental and social well-being — not merely the absence of disease. A healthy person can work, learn and take part in the life of the community."},
    {k:"p", t:"A **disease** is a condition that stops the body from working normally. **Personal hygiene** is the practice of keeping one's own body clean to stay healthy. Good personal hygiene includes:"},
    {k:"bul", items:[
      "Washing the hands with soap before eating and after using the latrine.",
      "Bathing daily with soap and clean water.",
      "Washing the hair and cutting the nails short.",
      "Wearing clean clothes and changing underclothes often.",
      "Brushing the teeth and keeping the mouth clean.",
      "Covering the mouth when coughing or sneezing."
    ]},
    {k:"p", t:"Clean hands stop disease germs from entering the body with food, and a clean body keeps the skin and the hair free from germs."},
    {k:"rule"},
    {k:"h3", t:"Types of Diseases"},
    {k:"p", t:"Diseases are of two main **types**:"},
    {k:"cols", a:[
      "**Communicable (infectious) diseases** spread from one person to another, directly or through a **vector** such as the mosquito.",
      "Caused by tiny living germs: bacteria, viruses, protozoa and worms.",
      "Examples: **malaria, cholera, diarrhoea, typhoid, measles, influenza**."
    ], b:[
      "**Non-communicable diseases** do **not** spread from person to person.",
      "Caused by lack of nutrients, by bad habits, or by the body's own condition.",
      "Examples: **scurvy, rickets, goitre, anaemia, diabetes**."
    ]},
    {k:"rule"},
    {k:"h3", t:"Preventing and Controlling Common Diseases"},
    {k:"p", t:"The diseases most common in our community are **diarrhoea, cholera, typhoid and malaria**. They are prevented and controlled as follows:"},
    {k:"bul", items:[
      "**Drink safe water** — boil it or treat it with bleaching powder or a purification tablet before drinking.",
      "**Wash hands with soap** before eating and after using the latrine.",
      "**Use a latrine** — never defecate in open places; cover and empty it properly.",
      "**Keep the environment clean** — throw away waste in covered bins, keep food covered, and destroy the breeding places of flies and mosquitoes.",
      "**Sleep under an insecticide-treated mosquito net** and drain stagnant water around the house to stop the **female Anopheles mosquito**, which carries the malaria germ, from breeding.",
      "**Seek treatment early** — go to the clinic at the first sign of a disease, and take all the medicine given.",
      "**Be immunized** — take the vaccines on time, especially for measles, polio and typhoid."
    ]},
    {k:"rule"},
    {k:"h3", t:"Common Myths about Disease"},
    {k:"p", t:"A **myth** is a false belief that is not supported by evidence. Some myths people believe about disease:"},
    {k:"bul", items:[
      "\"Malaria is caused by eating plums and drinking beer.\" **False** — malaria is caused by the **Plasmodium** germ carried into the blood by the bite of the infected female Anopheles mosquito.",
      "\"A person who looks strong cannot catch malaria.\" **False** — anyone bitten by an infected mosquito can catch malaria.",
      "\"Cholera is a spirit or a curse.\" **False** — cholera is caused by a germ that enters the body through dirty water and dirty food."
    ]},
    {k:"p", t:"Myths delay treatment and spread fear. We should use **science** — facts we can test and verify — to understand and treat disease."},
    {k:"rule"},
    {k:"h3", t:"Community Health"},
    {k:"p", t:"**Community health** is the health of all the people who live in a place. It is improved when the whole community works together:"},
    {k:"bul", items:[
      "On **family planning and reproductive health** — parents who plan their families can space their children, so each child gets food, care and schooling; mothers are kept safe in pregnancy.",
      "On **environmental sanitation** — clearing drains, burying or burning waste, and protecting the water sources keep the whole community free from cholera and typhoid.",
      "On **immunization** — bringing all children to the clinic so that dangerous diseases such as measles and polio disappear from the community.",
      "On **malaria and HIV/AIDS awareness** — using nets, draining stagnant water, and teaching young people about safe behaviour."
    ]},
    {k:"rule"},
    {k:"h3", t:"Nutrition and the Food Groups"},
    {k:"p", t:"**Nutrition** is the process by which the body takes in food and uses it. The body's **food needs** are: energy for work, material to build and repair the body, protection against disease, and water. Foods are grouped according to the main work they do:"},
    {k:"table", head:["Food group","Main work","Locally produced examples"], rows:[
      ["Energy-giving foods","Carbohydrates and fats give the body energy","rice, maize, cassava, plantain, yam, sweet potato, palm oil, coconut"],
      ["Body-building foods","Proteins build and repair the body","fish, meat, beans, peas, groundnut, cashew, eggs, milk"],
      ["Protective foods","Vitamins and mineral salts protect the body from disease","orange, mango, papaya, guava, leafy vegetables (fluted pumpkin, spinach), tomatoes, onion"]
    ]},
    {k:"p", t:"A **balanced diet** contains all the food groups in the right amounts. Many foods we eat are **locally produced** — our community can feed itself well with rice, cassava, beans, fish, palm oil and local fruits and vegetables."},
    {k:"p", t:"Some **myths and taboos** attached to food are false: for example, the belief that a pregnant woman must not eat fish, or that beans are bad for children. Such taboos cause **malnutrition**. Food should be chosen by what it does for the body, not by fear."},
    {k:"rule"},
    {k:"h3", t:"Diseases of Vitamin Deficiency"},
    {k:"p", t:"When the body does not get enough of a vitamin or mineral, a **deficiency disease** appears:"},
    {k:"table", head:["Deficiency","Disease","Signs"], rows:[
      ["Vitamin A","Night blindness","difficulty seeing in the dark, dry eyes"],
      ["Vitamin B₁ (thiamine)","Beriberi","weakness, numbness in the limbs"],
      ["Vitamin C","Scurvy","bleeding gums, slow healing of wounds"],
      ["Vitamin D (and calcium)","Rickets","soft, bent bones in children"],
      ["Iodine","Goitre","swelling of the neck"],
      ["Iron","Anaemia","pallor, tiredness, dizziness"]
    ]},
    {k:"p", t:"These diseases are prevented by a **balanced diet** of protective foods — local fruits and green vegetables daily."},
    {k:"rule"},
    {k:"h3", t:"Substance and Drug Abuse"},
    {k:"p", t:"**Substance abuse** is the taking of drugs or alcohol in a harmful way — beyond what is needed, or in a way that damages the body and the mind. **Influence factors** that push a young person into substance abuse include **peer pressure** (fear of being left out), **parental pressure** or neglect, unemployment, curiosity and the easy availability of the substance."},
    {k:"p", t:"**Effects of substance and drug abuse on the body:** the stomach is damaged and appetite is lost; the heart beats irregularly; the brain and the nerves are harmed, so the person loses concentration, memory and control; the body wastes away; and the person becomes a slave to the habit, stealing or lying to get the next dose."},
    {k:"p", t:"A young person resists abuse by choosing good company, being busy with school and honest work, saying **no** with confidence, and talking to parents or a counsellor about problems."},
    {k:"rule"},
    {k:"h3", t:"Physical Exercise"},
    {k:"p", t:"**Physical exercise** — running, dancing, swimming, playing football, working in the garden — is important to the body because it:"},
    {k:"bul", items:[
      "Strengthens the muscles and the bones.",
      "Makes the heart and the lungs work better.",
      "Helps the body to use food properly and keeps a healthy weight.",
      "Relieves the mind from tension and gives sleep at night.",
      "Builds courage, confidence and the habit of discipline."
    ]},
    {k:"p", t:"A learner who exercises daily is stronger, learns better and falls sick less often."},
    {k:"rule"},
    {k:"h3", t:"HIV and Risky Behaviour"},
    {k:"p", t:"**HIV** is a virus that attacks the body's defence system; **AIDS** is the last stage of the disease, when the body can no longer fight ordinary germs. HIV is spread through **unprotected sexual contact**, through **infected blood** (shared needles, dirty cutting instruments, unsafe transfusion), and from an **infected mother to her child** during pregnancy, birth or breastfeeding. It is **not** spread by sitting, shaking hands, sharing food or by mosquitoes."},
    {k:"p", t:"Behaviours are grouped by how much risk they carry of HIV infection:"},
    {k:"table", head:["Risk","Example behaviour"], rows:[
      ["High risk","unprotected sex with a partner whose status is unknown; sharing a needle or a dirty cutting instrument; receiving an untested transfusion"],
      ["Low risk","a small cut from a needle that is washed and treated promptly; contact with the blood of an infected person through clean, unbroken skin"],
      ["No risk","sitting together, shaking hands, sharing food, using the same toilet, mosquito bites"]
    ]},
    {k:"p", t:"A young person protects against HIV by keeping self-control, delaying sexual activity, never sharing sharp instruments, and getting tested and knowing one's status before any relationship."}
  ],
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
  study:[
    /* ---- study notes: Semester Two, Period V (guide pp. 15–17) ---- */
    {k:"h3", t:"Earth Science and Space Science"},
    {k:"p", t:"**Earth Science** is the study of the earth itself — its rocks, its water and its air, and the changes that take place in them. **Space Science** is the study of the bodies beyond the earth — the **sun, the moon, the stars and the planets**, and the space in which they move."},
    {k:"p", t:"The two are linked: the sun, studied in space science, is the source of the heat and light that drive the weather and the growth of plants on the earth."},
    {k:"rule"},
    {k:"h3", t:"Climatic Zones of the Earth"},
    {k:"p", t:"Because the earth is round, the sun's rays strike it at different angles. This divides the earth into **climatic zones**:"},
    {k:"bul", items:[
      "The **torrid zone** — the hot zone on either side of the **equator**, between the **Tropic of Cancer** (in the north) and the **Tropic of Capricorn** (in the south). Here the sun shines nearly straight down all year, so it is hot."
      , "The **temperate zones** — the mild zones between the tropics and the polar circles, where the sun's rays come at an angle."
      , "The **frigid zones** — the very cold zones near the **North and South Poles**, where the sun's rays come so obliquely that the land is covered with ice for much of the year."
    ]},
    {k:"p", t:"The **equator** is the imaginary line round the middle of the earth, equidistant from the two poles. **Liberia lies in the torrid zone**, just north of the equator, which is why it is hot all the year round and receives heavy rains in the rainy season."},
    {k:"rule"},
    {k:"h3", t:"The Atmosphere and Its Layers"},
    {k:"p", t:"The **atmosphere** is the layer of air that surrounds the earth, held close by the earth's gravity. Going upwards from the ground, its layers are:"},
    {k:"num", items:[
      "**Troposphere** — the lowest layer, from the ground to about 10 km. **All weather** — clouds, rain and wind — takes place in the troposphere.",
      "**Stratosphere** — above the troposphere, where the ozone layer absorbs much of the sun's harmful ultraviolet rays.",
      "**Mesosphere** — above the stratosphere, where most meteors burn up before reaching the ground.",
      "**Exosphere / ionosphere** — the outer layers, where the air becomes very thin and radio waves are reflected back to the earth.",
      "**Magnetosphere** — the region of the earth's **magnetic field** around all the layers, which deflects the streams of charged particles from the sun and protects living things."
    ]},
    {k:"p", t:"The **biosphere** is not a layer of air but the part of the earth — the surface, the water and the lower air — where **living things** exist. The earth's atmosphere is the blanket that makes the biosphere possible: it keeps the temperature mild, gives oxygen for breathing and carbon dioxide for plants, and protects us from the sun's dangerous rays."},
    {k:"rule"},
    {k:"h3", t:"Weather and Climate"},
    {k:"p", t:"**Weather** is the condition of the atmosphere at a place **at a particular time** — it may be rainy, hot or windy today and change tomorrow. **Climate** is the **average weather** of a place over many years. We know the climate of Liberia because for many years it has been hot with a rainy season and a dry season."},
    {k:"p", t:"The **factors that influence the weather** of a place are:"},
    {k:"bul", items:[
      "**Temperature** — how hot or cold the air is.",
      "**Air pressure** — the weight of the air; high pressure brings clear weather, low pressure brings clouds and rain.",
      "**Humidity** — the amount of water vapour in the air.",
      "**Precipitation** — the water that falls as rain, sleet or hail.",
      "**Wind** — the moving air, which carries heat and moisture from place to place."
    ]},
    {k:"p", t:"The **factors that influence the climate** of a place are its **position nearness to the sea or the equator**, its **latitude**, the **prevailing wind belt** it lies in, its **temperature**, its **rainfall** and its **sunshine**."},
    {k:"rule"},
    {k:"h3", t:"How Rain Is Formed"},
    {k:"p", t:"Rain is formed in the **water cycle**:"},
    {k:"num", items:[
      "**Evaporation** — the heat of the sun changes water in the sea, rivers and lakes into invisible **water vapour** that rises into the air. (Boiling water in a pot shows evaporation on a small scale.)",
      "**Condensation** — high in the air the vapour cools and changes back into tiny **water droplets**, which gather into **clouds**.",
      "**Precipitation** — when the droplets become too heavy to float, they fall as **rain** (or as hail in very cold air).",
      "**Collection** — the rain gathers in rivers, lakes and the sea, and the cycle begins again."
    ]},
    {k:"rule"},
    {k:"h3", t:"The Spheres of the Earth"},
    {k:"p", t:"The earth is made of several spheres, one inside the other:"},
    {k:"bul", items:[
      "**Lithosphere** — the solid outer shell: the crust and the upper mantle, the land and the sea floor on which we live.",
      "**Hydrosphere** — all the water of the earth: oceans, seas, rivers, lakes, rain and underground water.",
      "**Atmosphere** — the sphere of air around the earth.",
      "**Biosphere** — the sphere of life, where plants, animals and people exist at the meeting of the other spheres."
    ]},
    {k:"p", t:"Beneath the lithosphere the earth goes down through the **mantle**, a thick layer of very hot rock, to the **core**, the innermost part, which is made chiefly of iron and nickel and is the hottest part of the earth."},
    {k:"rule"},
    {k:"h3", t:"Rocks and the Rock Cycle"},
    {k:"p", t:"The crust of the earth is built of **rocks**, and rocks are made of **minerals**. There are **three kinds of rock**:"},
    {k:"num", items:[
      "**Igneous rocks** — formed when molten rock (**magma**) cools and hardens, either deep inside the earth (granite) or on the surface as lava (basalt).",
      "**Sedimentary rocks** — formed when particles of older rocks (**sediment**) are carried by water or wind, layered, and pressed and cemented together over long ages (sandstone, limestone). Fossils are found only in sedimentary rocks.",
      "**Metamorphic rocks** — formed when existing rocks are changed by great **heat and pressure** deep in the crust (marble from limestone, slate from clay rock)."
    ]},
    {k:"p", t:"Rocks are never permanent: they change from one kind to another in the **rock cycle**. Magma cools to igneous rock; the igneous rock weathers into sediment; the sediment is compressed into sedimentary rock; and heat and pressure turn it into metamorphic rock, which may melt again into magma and start the cycle over."},
    {k:"p", t:"**Minerals of the earth found in Liberia** include: **iron ore** (in the Bong and Margibi areas), **diamonds** (in the Lofa and Nimba rivers), **rubies and sapphires**, **gold**, **iron sand** (along the coast), **bauxite** and **laterite** soil. These minerals are among the wealth of the country, mined for its development."}
  ],
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
  study:[
    /* ---- study notes: Semester Two, Period VI (guide pp. 18–20) ---- */
    {k:"h3", t:"What is Agriculture?"},
    {k:"p", t:"**Agriculture** is the science and practice of growing crops and rearing animals to provide food and raw materials for people. It is the main occupation of the people of Liberia, and it feeds the nation and provides the wealth that makes the **green revolution** — a great increase in food production — possible."},
    {k:"rule"},
    {k:"h3", t:"Types of Agricultural Products"},
    {k:"p", t:"The two main types of agricultural products are:"},
    {k:"cols", a:[
      "**Food crops** — grown to be eaten.",
      "Examples: **rice, maize, cassava, plantain, yam, beans, palm fruit, coconut**."
    ], b:[
      "**Cash crops** — grown to be sold for money.",
      "Examples: **rubber, coffee, cocoa, palm oil, pineapple**."
    ]},
    {k:"p", t:"A farm may grow both kinds: the food crops feed the family and the cash crops bring the money to buy what the farm does not produce."},
    {k:"rule"},
    {k:"h3", t:"The Three Kinds of Plants"},
    {k:"p", t:"Plants are divided into three kinds according to how long they live and how often they bear fruit:"},
    {k:"num", items:[
      "**Annual plants** — they germinate, grow, bear fruit and die within **one year**. Examples: **rice, maize, beans, pea**.",
      "**Biennial plants** — they live for **two years**: in the first year they make leaves, and in the second year they flower, bear fruit and die. Examples: **onion, cabbage, carrot**.",
      "**Perennial plants** — they live for **many years** and bear fruit again and again. Examples: **mango, citrus, coffee, coconut, rubber**."
    ]},
    {k:"rule"},
    {k:"h3", t:"Soils and Soil Preparation"},
    {k:"p", t:"Soil is the loose layer of the earth's crust in which plants grow. The main soils used for growing plants are:"},
    {k:"bul", items:[
      "**Alluvial soil** — rich, dark soil deposited by rivers and streams where they flood; very fertile, as on the riverbanks of the Lofa and the St. Paul.",
      "**Loamy soil** — a mixture of sand, clay and humus in the right proportion; it holds water and air well and is the best soil for most crops.",
      "**Sandy soil** — made mostly of sand grains; it drains very fast and holds little water, so it needs watering and manuring often."
    ]},
    {k:"p", t:"The **purpose of soil preparation** is to make the soil ready for the seed: the land is **cleared** of weeds and stumps, **ploughed or dug** to turn it over and break the hard clods, **leveled**, and divided into **beds or furrows**. Prepared soil is loose, so the young roots can push into it, and it lets water and air reach the roots. Water is conserved in the soil by making furrows, mulching, and **irrigating** in the dry season."},
    {k:"rule"},
    {k:"h3", t:"Seed Germination and Growth"},
    {k:"p", t:"A **seed** is a young plant in hiding. When the conditions are right, the seed **germinates** — the embryo begins to grow and breaks through the seed coat. There are two main types of seeds:"},
    {k:"cols", a:[
      "**Dicotyledonous (dicot) seeds** — the embryo has **two seed leaves (cotyledons)**.",
      "Examples: **bean, pea, groundnut, mango**.",
      "When the bean seed germinates, the two cotyledons swell and feed the young plant until the first leaves make their own food."
    ], b:[
      "**Monocotyledonous (monocot) seeds** — the embryo has **one seed leaf**.",
      "Examples: **rice (paddy), corn (maize)**.",
      "The food for the young plant is stored in the **endosperm**, and the one seed leaf (the cotyledon) passes the food to the growing embryo."
    ]},
    {k:"p", t:"The **parts of a seed** and their names:"},
    {k:"bul", items:[
      "**Testa (seed coat / tegmen)** — the tough outer covering that protects the seed.",
      "**Hilum** — the scar where the seed was joined to the fruit."
      , "**Micropyle** — the tiny hole through which water enters the seed.",
      "**Embryo** — the young plant inside the seed, made of the **radicle** (the future root) and the **plumule** (the future stem and leaves).",
      "**Cotyledon** — the seed leaf; two in a dicot, one in a monocot.",
      "**Endosperm** — the food store in a monocot seed.",
      "**Radicle** — grows down first and becomes the **tap root** of a dicot, or leads to **adventitious (fibrous) roots** of a monocot."
    ]},
    {k:"p", t:"The **process of germination**: water soaks in through the micropyle and the seed swells; the radicle breaks through the seed coat and grows down into the soil; then the plumule grows up towards the light, and the first true leaves appear. The dicot seedling develops a **tap root** with side branches, while the monocot seedling develops a cluster of **fibrous roots** of the same size."},
    {k:"rule"},
    {k:"h3", t:"Conditions for Germination"},
    {k:"p", t:"A seed will not germinate unless the following conditions are present:"},
    {k:"num", items:[
      "**Water** — to soak the seed and wake the embryo.",
      "**Air (oxygen)** — for the respiration of the growing embryo; a seed drowned in water will rot.",
      "**Suitable temperature (sunlight and warmth)** — germination is slow in the cold.",
      "**Proper spacing** — seeds sown too close crowd each other and grow weak; they must be spaced so each plant gets room, water, air and light."
    ]},
    {k:"p", t:"A seed in dry sand will not germinate, and a seed in water with no air will not germinate — but the same seed in moist, loose, well-spaced soil in a warm place will."},
    {k:"rule"},
    {k:"h3", t:"Weeding"},
    {k:"p", t:"**Weeding** is the removal of wild plants (weeds) that compete with the crops for water, light, air and food from the soil. The methods of weeding:"},
    {k:"bul", items:[
      "**Mechanical method** — removing weeds with a hoe, a hand fork or a machine.",
      "**Chemical method** — spraying the weeds with a weed-killer (herbicide) that kills the weeds and spares the crop.",
      "**Physical method** — killing the weeds by burning, by covering the ground with a mulch or plastic sheet, or by deep ploughing that buries them."
    ]},
    {k:"p", t:"Weeding has advantages — it gives the crops room and the soil's food, and it stops diseases hiding in the weeds — but the chemical method must be used with care, because a weed-killer can harm the crop, the soil and the people if it is not used as directed."},
    {k:"rule"},
    {k:"h3", t:"Manure and Fertilizers"},
    {k:"p", t:"The **importance of fertilizer** in growing plants is to replace the food (mineral salts) that the crops take out of the soil, so that the soil stays fertile and the yield is large."},
    {k:"p", t:"The **difference between manure and fertilizers**:"},
    {k:"table", head:["","Manure","Fertilizer"], rows:[
      ["What it is","Decayed plant and animal waste (compost, farmyard manure)","A chemical or mineral food for plants, made in a factory or mined"],
      ["Food content","Rich in humus; feeds the plants slowly and improves the soil structure","Strong in nitrogen, phosphorus and potash; acts quickly but does not improve the soil as much"],
      ["How it is made","Heap of green waste, leaves and dung left to rot","Mixed and manufactured, e.g. NPK, urea, superphosphate"],
      ["Cost","Cheap and easy to make on the farm","Costly to buy, but a small amount goes a long way"]
    ]},
    {k:"p", t:"The best farmer uses both: manure to keep the soil rich and crumbly, and a fertilizer to give a quick boost of food at the right time in the crop's growth."}
  ],
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
  study:[
    /* ---- study notes: Semester One, Period I (guide pp. 21–23) ---- */
    {k:"h3", t:"Scientific Knowledge"},
    {k:"p", t:"People gain knowledge in different ways. **Common sense** is the everyday knowledge we get from experience: we know fire burns, water wets, and food must be cooked before some of it can be eaten. But common sense and **superstition** often stop where real knowledge begins: common sense says the sun rises because it wants to, and superstition blames a spirit for a storm. **Scientific knowledge** goes further — it asks **why**, and it answers only with explanations that have been **tested by experiment**."},
    {k:"p", t:"**How scientists solve problems:** a scientist observes a problem, asks a clear question, forms a **hypothesis** (a suggested answer), plans a **fair experiment** to test it, records the results honestly, and draws a **conclusion**. If the results disagree with the hypothesis, the scientist changes the hypothesis and tests again. This is the **scientific method**."},
    {k:"p", t:"The **nature (characteristics) of a scientist:** a scientist is **curious** (always asking why), **honest** (never faking results), **patient** (repeating tests until they are sure), **careful** (measuring exactly), **open-minded** (ready to change an idea when the evidence demands it), and **creative** (finding new ways to test and to solve problems). These same habits help in daily life: in making an honest accounting, in weighing the evidence before deciding, and in not accepting a rumour as true."},
    {k:"rule"},
    {k:"h3", t:"Measurement: Basic and Derived Units"},
    {k:"p", t:"A **basic (fundamental) unit** is a unit that stands alone and is not built from any other unit. The three basic units of the metric system are:"},
    {k:"bul", items:[
      "The **metre (m)** — for **length**.",
      "The **kilogram (kg)** — for **mass**.",
      "The **second (s)** — for **time**."
    ]},
    {k:"p", t:"A **derived unit** is a unit **built from basic units** by multiplying or dividing them. Examples:"},
    {k:"table", head:["Quantity","Derived unit","Built from"], rows:[
      ["Area","square metre (m²)","metre × metre"],
      ["Volume","cubic metre (m³)","metre × metre × metre"],
      ["Density","kilogram per cubic metre (kg/m³)","kilogram ÷ cubic metre"],
      ["Weight and force","newton (N)","kg × m ÷ s² (mass × acceleration)"]
    ]},
    {k:"p", t:"**Example problems:** the area of a floor 4 m by 6 m is 4 × 6 = **24 m²**. The volume of a box 2 m × 1 m × 0.5 m is 2 × 1 × 0.5 = **1 m³**. A substance of mass 8 kg that occupies 2 m³ has density = 8 ÷ 2 = **4 kg/m³**. Weight is the force with which gravity pulls a mass; it is measured in newtons."},
    {k:"rule"},
    {k:"h3", t:"The Structure of Matter"},
    {k:"p", t:"All matter is made of very tiny particles called **atoms**. An atom of one kind of element is different from an atom of another element. Atoms can join together to form **molecules**: two or more atoms chemically joined. A molecule of water is made of two atoms of hydrogen and one atom of oxygen."},
    {k:"p", t:"Matter exists in three **states**, and the states differ in how their particles are arranged:"},
    {k:"bul", items:[
      "**Solid** — the particles are locked in a fixed pattern, so the solid has a fixed shape and a fixed volume.",
      "**Liquid** — the particles are close but free to slide, so the liquid has a fixed volume but takes the shape of its container.",
      "**Gas** — the particles are far apart and fly about freely, so the gas fills whatever container holds it."
    ]},
    {k:"p", t:"The same substance can be in different states: water is **ice** (solid), **water** (liquid) and **steam** (gas). The changes between the states — melting, freezing, boiling and condensation — are **physical changes**, because no new substance is formed."},
    {k:"rule"},
    {k:"h3", t:"Elements and Their Symbols"},
    {k:"p", t:"An **element** is a pure substance made of only one kind of atom; it cannot be broken down into a simpler substance by chemical means. To save time, scientists give each element a **symbol** — one or two letters, the first always capital:"},
    {k:"bul", items:[
      "Hydrogen — **H**; Oxygen — **O**; Carbon — **C**; Nitrogen — **N**",
      "Sodium — **Na** (from natrium); Potassium — **K** (from kalium)",
      "Iron — **Fe** (from ferrum); Gold — **Au** (from aurum)",
      "Copper — **Cu** (from cuprum); Silver — **Ag** (from argentum)"
    ]},
    {k:"p", t:"When a symbol stands alone it means one atom of the element: **O** is one atom of oxygen. When two of the same symbol are joined, **O₂**, it means a molecule of oxygen made of two atoms."},
    {k:"rule"},
    {k:"h3", t:"Compounds, Formulae and Names"},
    {k:"p", t:"A **compound** is a substance made of two or more elements **chemically combined in fixed proportions**. A compound has its own properties, different from those of the elements in it: hydrogen is a burning gas and oxygen is a gas that supports burning, but water — their compound — puts out fire."},
    {k:"p", t:"The **chemical formula** of a compound is written with the symbols of its elements; a number after a symbol tells how many atoms of that element are in one molecule. Common compounds, with their formulae, scientific names and common (commercial) names:"},
    {k:"table", head:["Formula","Scientific name","Common / commercial name"], rows:[
      ["H₂O","dihydrogen monoxide","water"],
      ["NaCl","sodium chloride","common salt (table salt)"],
      ["CO₂","carbon dioxide","carbonic gas, soda water gas"],
      ["H₂SO₄","sulphuric acid","oil of vitriol"],
      ["HCl","hydrogen chloride","hydrochloric acid"],
      ["CaCO₃","calcium carbonate","limestone, chalk, marble"],
      ["C₁₂H₂₂O₁₁","sucrose","sugar (cane sugar)"],
      ["CH₄","methane","marsh gas, biogas"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Mixtures"},
    {k:"p", t:"A **mixture** is two or more substances that are put together but are **not chemically joined**. Each substance in a mixture keeps its own properties, and the proportions can vary. Examples:"},
    {k:"bul", items:[
      "**Air** — a mixture of the gases nitrogen, oxygen, carbon dioxide and others.",
      "**Sea water** — a mixture of water, common salt and other dissolved salts.",
      "**Petroleum** — a mixture of many liquid hydrocarbons, separated by distillation into kerosene, gasoline, diesel and others.",
      "**Sugar water** — a mixture of sugar (the **solute**) dissolved in water (the **solvent**)."
    ]},
    {k:"p", t:"The **difference between a compound and a mixture**:"},
    {k:"cols", a:[
      "A compound is made by a **chemical** combination in **fixed** proportions.",
      "A compound has **new** properties of its own.",
      "Its parts cannot be separated by physical means."
    ], b:[
      "A mixture is made by a **physical** mixing, in **any** proportions.",
      "A mixture keeps the **properties of its parts**.",
      "Its parts can be separated by **physical** methods."
    ]},
    {k:"p", t:"**Common methods of separating mixtures:**"},
    {k:"num", items:[
      "**Filtration** — the solid is caught on filter paper and the liquid (the **filtrate**) passes through; used for sand in water.",
      "**Evaporation** — the solvent is boiled off and the solid is left behind; used to get salt from sea water.",
      "**Distillation** — the liquid is boiled, the vapour is cooled and collected; used to get pure water from sea water and to separate the fractions of petroleum.",
      "**Magnetic separation** — a magnet draws out the iron from a mixture of iron filings and sulphur.",
      "**Decantation** — the liquid is carefully poured off from the solid that has settled, or from an immiscible liquid like oil on water.",
      "**Chromatography** — the parts of a dissolved mixture are separated as they travel at different speeds through a paper or a column; used to separate the dyes in ink."
    ]}
  ],
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
  study:[
    /* ---- study notes: Semester One, Period II (guide pp. 24–26) ---- */
    {k:"h3", t:"Classification of Living Things"},
    {k:"p", t:"There are millions of living things, so scientists **classify** them — group them by their shared characteristics — to make them easy to study. Living things are placed in three great groups: **protists, plants and animals**."},
    {k:"num", items:[
      "**Protists** — the simplest living things, mostly **one-celled** organisms. They may be plant-like (making food by photosynthesis) or animal-like (moving and feeding). Examples: **amoeba, paramecium, algae**.",
      "**Plants** — multi-celled organisms that are **green** (they have chlorophyll), that **make their own food** by photosynthesis, and that are **fixed in one place** by their roots. Examples: **cassava, rice, fern, mango**.",
      "**Animals** — multi-celled organisms that are **not green**, that **feed on other organisms**, and that can **move about freely**. Examples: **fish, frog, grasshopper, goat, human**."
    ]},
    {k:"p", t:"Living things differ from non-living things (a stone, a piece of wood cut down, a glass of water): they **feed, breathe, grow, respond to their surroundings, excrete waste and reproduce**."},
    {k:"rule"},
    {k:"h3", t:"Cell Structure"},
    {k:"p", t:"The **cell** is the basic unit of every living thing. The main parts of a cell and their functions:"},
    {k:"bul", items:[
      "**Cell membrane** — the thin covering at the edge of the cell; it controls what enters and what leaves.",
      "**Cytoplasm** — the jelly-like fluid inside the cell in which the cell's parts float and most of the cell's work goes on.",
      "**Nucleus** — the round body that **controls all the activities** of the cell and carries the hereditary material.",
      "**Mitochondrion** — the part where respiration releases energy from food."
    ]},
    {k:"p", t:"A **plant cell** has three parts that an **animal cell** does not have:"},
    {k:"bul", items:[
      "A **cell wall** of cellulose, outside the membrane, that gives the cell a fixed shape.",
      "**Chloroplasts**, the green bodies containing **chlorophyll**, in which photosynthesis takes place.",
      "A large **vacuole** that stores water, food and waste in a strong cell-sap."
    ]},
    {k:"rule"},
    {k:"h3", t:"Needs of Plants; Respiration and Photosynthesis"},
    {k:"p", t:"A plant needs: **sunlight** (for photosynthesis), **water** and **mineral salts** (from the soil, taken by the root), **carbon dioxide** (from the air, through the stomata of the leaf), **oxygen** (for respiration), and **space** to grow."},
    {k:"p", t:"Plants carry out two great processes that are often confused:"},
    {k:"table", head:["","Photosynthesis","Respiration"], rows:[
      ["What it does","makes food (starch) from carbon dioxide and water","breaks down food to release energy"],
      ["When","in daylight only (needs light)","day and night (all the time)"],
      ["Gas taken in","carbon dioxide","oxygen"],
      ["Gas given out","oxygen","carbon dioxide"],
      ["Where","in the chloroplasts of the green cells","in the mitochondria of all the living cells"]
    ]},
    {k:"p", t:"The two processes are **opposites**: photosynthesis stores energy in the food it makes, and respiration releases that energy for the plant's work. A plant does not \"breathe in oxygen and out carbon dioxide\" only at night — it respires all the time; in daylight it also photosynthesizes, which is why a green room full of plants gives out oxygen."},
    {k:"rule"},
    {k:"h3", t:"Plants According to Their Environment"},
    {k:"p", t:"Plants are also grouped by the environment in which they live:"},
    {k:"bul", items:[
      "**Hydrophytes** — plants that live **in water**, with leaves adapted to float, such as the **water lily** and the ferns of the swamp.",
      "**Epiphytes** — plants that grow **on the branches of other trees** (not feeding on them) to reach the light of the forest canopy, such as many orchids and the mosses of the high forest.",
      "**Rhodophytes** — the **red algae**, seaweeds that live in the sea, from which carrageenan and other products are made."
    ]},
    {k:"rule"},
    {k:"h3", t:"Types of Roots and Leaves"},
    {k:"p", t:"**Types of roots:**"},
    {k:"num", items:[
      "**Tap root** — one main root that grows straight down, with smaller side roots, as in the **mango, cassava and bean**.",
      "**Adventitious (fibrous) root** — many roots of about the same size that start from the base of the stem, as in **grass, rice and corn**.",
      "**Modified roots** — roots that have taken on a new job: **storage roots** that store food (the swollen root of the **cassava** and the **sweet potato**), **prop roots** that support the plant (the pillars of the **maize stalk**), and **aerial roots** that take moisture from the air."
    ]},
    {k:"p", t:"**Types of leaves:** a **simple leaf** is one single blade attached to the stem (the mango leaf); a **compound leaf** is a leaf whose blade is divided into several leaflets on one stalk (the cassava leaf). Leaves come in many **shapes** — broad, narrow, needle-like, heart-shaped — and they are **arranged on the stem** in three ways: **alternate** (one leaf at each node, in turn), **opposite** (two leaves facing each other at a node) and **whorled** (three or more leaves ringed round the node). The leaf shape and the arrangement are adaptations: they let each leaf catch its share of light without shading the others."},
    {k:"rule"},
    {k:"h3", t:"Animals: The Major Phyla"},
    {k:"p", t:"Animals are classified into large groups called **phyla**, according to their body structure. The major phyla, with local examples:"},
    {k:"table", head:["Phylum","Main characteristic","Local examples"], rows:[
      ["Porifera","body full of pores; fixed in one place","sponges of the sea"],
      ["Coelenterata","body with a mouth and stinging cells","jellyfish, corals"],
      ["Platyhelminthes","flat, unsegmented body","flatworms, tapeworms"],
      ["Nematoda","round, unsegmented body","roundworms of the intestine"],
      ["Annelida","body divided into rings (segments)","earthworm, leech"],
      ["Mollusca","soft body, often with a shell","snail, clam"],
      ["Arthropoda","jointed legs, body in sections, hard outer shell","grasshopper, butterfly, crayfish, spider, termite"],
      ["Echinodermata","spiny skin, star-shaped body","sea star (starfish)"],
      ["Chordata","a backbone (vertebral column)","fish, frog, lizard, bird, goat, human"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Insects: The Grasshopper"},
    {k:"p", t:"The **grasshopper** is the example insect of the phylum **Arthropoda**. Its body shows the insect plan clearly:"},
    {k:"bul", items:[
      "The body is in **three parts**: the **head** (with two eyes, two feelers or antennae, and the mouth parts), the **thorax** (with **three pairs of legs** and two pairs of wings), and the **abdomen** (with the breathing holes called spiracles).",
      "The body is covered by a hard outer **exoskeleton** (cuticle) that protects the soft parts; because it cannot stretch, the grasshopper **moults** to grow.",
      "It **breathes** through the spiracles into tubes that carry air to every part of the body.",
      "It has **compound eyes** made of many little lenses, and its hind legs are built for jumping."
    ]},
    {k:"rule"},
    {k:"h3", t:"The Structural Organization of the Body"},
    {k:"p", t:"The body of an animal is organized in levels, from the smallest to the largest:"},
    {k:"p", t:"**Cell → Tissue → Organ → System → Organism**"},
    {k:"p", t:"Similar **cells** that do the same work form a **tissue** (muscle cells form muscle tissue). Several different tissues that work together for one job form an **organ** (the heart is built of muscle, nerve and lining tissue). Organs that work together form a **system** (the heart, the vessels and the blood form the circulatory system). All the systems working together make the **organism** — the complete animal."},
    {k:"rule"},
    {k:"h3", t:"The Skeletal System"},
    {k:"p", t:"The **skeleton** is the framework of bones of the body, joined at **joints** by ligaments. In the human body it is made of about **206 bones**. Its functions:"},
    {k:"bul", items:[
      "It **supports** the body and gives it its shape.",
      "It **protects** the delicate organs — the skull the brain, the rib cage the heart and lungs, the spine the spinal cord.",
      "It **allows movement**, because the muscles pull on the bones at the joints.",
      "It **makes blood cells** inside the bones (red cells, white cells and platelets) and stores minerals such as calcium."
    ]},
    {k:"p", t:"The skeleton has two parts: the **axial skeleton** (the skull, spine and rib cage, down the middle of the body) and the **appendicular skeleton** (the bones of the arms and the legs and the shoulder and hip bones that join them to the middle). Draw your own skeleton and label the skull, the spine, the ribs, the shoulder bones, the arm bones, the hip bones and the leg bones."},
    {k:"rule"},
    {k:"h3", t:"The Digestive System"},
    {k:"p", t:"The **digestive system** breaks down food into a form the body can absorb and carry to the cells. The food passes through this path:"},
    {k:"num", items:[
      "**Mouth** — the teeth **chew** the food and the **saliva** of the salivary glands wets it and begins to break down the starch.",
      "**Oesophagus** — the food pipe; waves of muscle (peristalsis) push the food down to the stomach.",
      "**Stomach** — the food is churned with **acid** and the enzyme pepsin, which begins to digest the protein; it stays here two to four hours.",
      "**Small intestine** — the main place of digestion and **absorption**: the juices of the **liver** (bile) and the **pancreas** finish breaking down the fat, protein and starch, and the walls of the intestine absorb the food into the blood.",
      "**Large intestine** — the water is absorbed from the food that is left; the waste is dried into faeces.",
      "**Rectum and anus** — the faeces are stored briefly and passed out of the body."
    ]},
    {k:"p", t:"Disorders of the system include the **ulcer** (a sore in the stomach or intestine), **dysentery** and **diarrhoea** (the intestine is inflamed by germs), and **appendicitis** (the appendix becomes inflamed). They are prevented by washing the hands, drinking safe water and eating clean food."},
    {k:"rule"},
    {k:"h3", t:"The Circulatory System"},
    {k:"p", t:"The **circulatory system** carries food, oxygen, water and hormones to every cell of the body and carries away the waste (chiefly carbon dioxide). It is made of:"},
    {k:"bul", items:[
      "The **heart** — a four-chambered muscle pump that beats about 70 times a minute, pushing the blood round the body.",
      "The **blood vessels** — the **arteries** that carry blood away from the heart, the **veins** that carry it back, and the fine **capillaries** where the exchange of food, gas and waste happens with the cells.",
      "The **blood** — the fluid that does the carrying: the **red cells** carry oxygen, the **white cells** fight disease, the **platelets** help the blood to clot, and the **plasma** (the straw-coloured fluid) carries the dissolved food and waste."
    ]},
    {k:"p", t:"Disorders of the system include **anaemia** (too few red cells, from a lack of iron or from blood loss), **hypertension** (blood pressure that is too high) and the diseases of the blood such as the parasite carried by the tsetse fly. A balanced diet rich in iron, and physical exercise, keep the system strong."},
    {k:"rule"},
    {k:"h3", t:"The Male and Female Reproductive Systems"},
    {k:"p", t:"The **male reproductive system** has: the **testes** (which make the male cells, the sperm, and the hormone testosterone), the **vas deferens** that carries the sperm, the **prostate gland** that adds fluid to the semen, and the **penis** through which the semen and urine leave the body."},
    {k:"p", t:"The **female reproductive system** has: the **ovaries** (which make the female cells, the eggs, and the hormones oestrogen and progesterone), the **oviducts** (fallopian tubes) in which fertilization takes place, the **uterus** (womb) in which the baby develops, and the **vagina** (birth canal), through which the menstrual flow passes and the baby is born."},
    {k:"p", t:"**Disorders and diseases associated with them** include the **sexually transmitted infections** — gonorrhoea, syphilis and **HIV** — which are spread by unprotected sexual contact and are prevented by self-control, by faithful marriage and by never sharing needles; and in the woman, the inflammation of the reproductive organs that is prevented by keeping the body clean and by seeing the doctor early. Both systems are the most private parts of the body, and a young person guards them by self-control and by respecting the privacy of others."}
  ],
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
  study:[
    /* ---- study notes: Semester One, Period III (guide pp. 27–29) ---- */
    {k:"h3", t:"Energy: Kinds and Forms"},
    {k:"p", t:"**Energy** is the ability to do work. It is of two kinds:"},
    {k:"cols", a:[
      "**Potential energy** — stored energy because of position or condition.",
      "A stone on a cliff, water behind a dam, a stretched bow, food in a jar."
    ], b:[
      "**Kinetic energy** — the energy of movement.",
      "A falling stone, a flowing river, a running athlete, the wind."
    ]},
    {k:"p", t:"As energy is used it changes from one **form** to another. The main forms of energy:"},
    {k:"bul", items:[
      "**Mechanical energy** — the energy of moving or working machines and bodies.",
      "**Heat energy** — the energy that makes bodies hot; it flows from the hot to the cold.",
      "**Light energy** — the energy we see, from the sun, a lamp or a flame.",
      "**Chemical energy** — the energy stored in substances, released in a chemical change: in food, in fuel, in a battery.",
      "**Atomic energy** — the huge energy locked in the nucleus of the atom, released in a nuclear reactor or a bomb.",
      "**Solar energy** — the energy of the sun's rays, caught by a solar panel or by the green leaf."
    ]},
    {k:"p", t:"**Sources and uses of energy:** the ultimate source is the **sun**. Solar energy is converted to **chemical energy** in **photosynthesis**; a **solar cell** converts it to **electrical energy**; **fossil fuels** (coal, petroleum, natural gas), which store ancient solar energy as chemical energy, are burned to **thermal energy** and then to **electrical energy** in a power station; a falling object changes its **potential energy to kinetic energy**; an electric bulb changes **electrical energy to light**; and the body releases **chemical energy from glucose** during **cellular respiration**."},
    {k:"rule"},
    {k:"h3", t:"Forces in the Environment"},
    {k:"p", t:"A **force** is a push or a pull. The forces we meet in the environment:"},
    {k:"num", items:[
      "**Gravity** — the force with which the earth pulls every body towards its centre. Throw a ball straight up and gravity slows it, stops it, and brings it back down. Gravity gives a body its **weight** and keeps us, the atmosphere and the oceans on the earth.",
      "**Inertia** — the tendency of a body to keep on doing what it is doing: a body at rest stays at rest, and a body in motion stays in motion, unless a force acts on it. In a 100-metre race the athlete who has started is harder to stop than the one standing still; a passenger lurches forward when a moving bus suddenly stops.",
      "**Friction** — the force that opposes the sliding of one surface over another. Rub your palms together quickly and friction warms them. Friction is helpful (it lets us walk without slipping, and a match lights on the box) but it is also a waste (it wears out tyres and machine parts, and heats the engine, so we use oil).",
      "**Cohesion** — the force of attraction between particles of the **same** substance. It is cohesion that makes a drop of water hold together in a round bead and that holds the grains of a solid together.",
      "**Adhesion** — the force of attraction between particles of **different** substances. Glue or honey on two sheets of paper, or the gum that closes an envelope, are adhesion at work. Drop oil into water and the oil does not stick to the water — the adhesion between them is weak."
    ]},
    {k:"rule"},
    {k:"h3", t:"Fuels: Examples and Uses"},
    {k:"p", t:"A **fuel** is a substance that gives out heat and light energy when it burns. Fuels we use:"},
    {k:"table", head:["Fuel","State","Uses"], rows:[
      ["Charcoal, wood, coal","solid","cooking and heating, power stations"],
      ["Kerosene, gasoline, diesel","liquid","cooking, vehicles, generators, lamps"],
      ["Cooking gas (LPG), biogas, natural gas","gas","cooking, heating, engines"],
      ["A candle (paraffin wax)","solid","light and heat when there is no electricity"]
    ]},
    {k:"p", t:"When charcoal, kerosene or a candle burns, the **chemical energy** stored in the fuel is released as **heat and light**. Burning needs three things: the fuel, the **oxygen** of the air, and enough **heat** to start the reaction — remove any one and the fire goes out."},
    {k:"rule"},
    {k:"h3", t:"Machines and Their Work"},
    {k:"p", t:"A **machine** makes work easier by changing the size or the direction of the force. A **simple machine** is one of the six basic kinds — lever, inclined plane, screw, wheel and axle, pulley and wedge — and a **compound machine** is a machine made of two or more simple machines working together."},
    {k:"p", t:"Everyday tools are simple machines:"},
    {k:"bul", items:[
      "A **shovel** is a lever; a **wheelbarrow** is a lever with wheels and an axle.",
      "A **ladder** is an inclined plane; stairs are inclined planes.",
      "**Scissors** are two levers joined at a pivot; a **knife** or an **axe** is a wedge.",
      "A **pulley** lifts water from the well or the bucket from the well of a compound machine.",
      "A **bicycle** is a compound machine: wheels and axles, levers (the brakes and pedals), and a chain that transfers the force."
    ]},
    {k:"p", t:"The **work done** by a machine is the work done on the load: **work = force × distance**, measured in **joules**. A machine does not save work — a small force over a long distance on the effort side lifts a large load over a short distance on the load side — but it lets **one person** do work that would otherwise need several. The **speed** of the work (how fast it is done) is the **power** of the machine, measured in **watts** (joules per second). A fast engine and a slow engine that do the same work in different times have different powers."},
    {k:"p", t:"**Simple problems:** a man lifts a 200 N load through 1.5 m. Work = 200 × 1.5 = **300 J**. If he does it in 10 s, his power = 300 ÷ 10 = **30 W**. A pulley with two rope strands lifting a 100 N load needs an effort of about 100 ÷ 2 = **50 N** (ignoring friction) — the force is halved, but the rope must be pulled twice as far."}
  ],
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
  study:[
    /* ---- study notes: Semester Two, Period IV (guide pp. 30–35) ---- */
    {k:"h3", t:"Good Health and How It Is Promoted"},
    {k:"p", t:"**Good health** is not only the absence of disease. It has five aspects: **physical** health (the body works well), **mental** health (the mind learns and reasons clearly), **emotional** health (one can handle feelings and stress), **social** health (one gets along with others), and **spiritual** health (one lives by values and beliefs). A person is truly healthy when all five are in balance."},
    {k:"p", t:"Good health is **promoted** by: a balanced diet of local foods; daily physical exercise; enough sleep; personal and environmental hygiene; immunization on time; clean water; and seeing the doctor at the first sign of illness, not when the disease is strong."},
    {k:"rule"},
    {k:"h3", t:"Personal Hygiene: Care of the Body Parts"},
    {k:"p", t:"**Personal hygiene** is the care of one's own body. The care of each part:"},
    {k:"bul", items:[
      "**Skin** — bathe daily with soap and clean water; keep the nails short; change underclothes often; treat cuts and sores at once so they do not become infected.",
      "**Ear** — clean only the **outer** ear with a soft cloth after bathing; **never** push a match, a nail or a finger inside the ear, because the thin **eardrum** can be pierced and the hearing ruined.",
      "**Nose** — let the nose clear itself by sneezing into a handkerchief; do not pick it with dirty fingers; when the nose is blocked, breathe through the mouth until it is seen to by the doctor.",
      "**Mouth and teeth** — brush the teeth with a brush and toothpaste **twice a day**, especially after the last meal; rinse the mouth with clean water; visit the dental clinic to remove the plaque that causes tooth decay.",
      "**Eyes** — do not rub them with dirty hands; keep the lashes clean; read and study in good light, not too close to the book; do not share a towel that has touched the eyes of a person with an eye infection."
    ]},
    {k:"p", t:"**Care of the reproductive organs (menstrual hygiene):** the private parts are washed daily with clean water and a soft cloth, and clean underclothes are changed often. A girl at **menstruation** changes her clean cloth or pad at least twice a day, washes herself each day, keeps the materials clean and dry, and has a private place to do so. Menstrual hygiene prevents infection, protects the girl's dignity, and lets her stay at school and at work."},
    {k:"rule"},
    {k:"h3", t:"Personal Hygiene and Community Health"},
    {k:"p", t:"The health of the person and the health of the community are one. A person who washes hands, uses a latrine, covers food and keeps a clean house removes germs from the common air, water and ground — so the **community health** rises. And when the community provides the latrine, the clean water, the rubbish collection and the clinic, every **person** in it is healthier. Dirty surroundings make individuals sick, and sick individuals spread disease to the community."},
    {k:"rule"},
    {k:"h3", t:"Substance and Drug Abuse"},
    {k:"p", t:"**Substance abuse** is the use of drugs, alcohol and other harmful substances in a way that damages the body and the mind. Its **effect on health:** the **liver** and the **stomach** are poisoned; the **brain** and the nerves are harmed, so the user loses memory, concentration and control; the heart beats irregularly; the body wastes away; and the user becomes an **addict**, who cannot stop, and who steals, lies and endangers others to get the next dose. The family loses its worker and its peace, and the community loses a member to crime and accident."},
    {k:"p", t:"A young person resists by choosing good company, staying busy at school and in honest work, knowing the tricks by which substances are pushed (curiosity, \"just try once\", pressure of the group), and answering with a firm, polite **no**. In the prevention of HIV the **ABC method** is taught: **A**bstinence, **B**e **f**aithful, and use a **C**ondom where there is exposure — abstinence being the surest protection for the young."},
    {k:"rule"},
    {k:"h3", t:"Common Diseases: Occurrence and Prevention"},
    {k:"p", t:"The **common communicable diseases** of our community, how they occur, and how they are prevented:"},
    {k:"table", head:["Disease","How it occurs","Prevention"], rows:[
      ["Malaria","the Plasmodium germ is carried by the bite of the infected female Anopheles mosquito","sleep under a treated net, drain stagnant water, screen the house, treat early"],
      ["Cholera and dysentery","germs enter the body through dirty water and dirty food","drink safe water, wash hands with soap, use a latrine, cover food"],
      ["Typhoid","the Salmonella germ is spread by flies from faeces to food","safe water, hand washing, flies kept away from food"],
      ["Measles","a virus carried in the air by coughing and sneezing","immunization on time, avoid crowded sick rooms"],
      ["Tuberculosis (TB)","a bacterium spread by the cough of a sick person","air out the sick room, treat the sick early and completely, BCG vaccination"],
      ["Threadworm and bilharzia","the worm eggs are swallowed or enter through the skin in water","wear shoes in the water, wash fruits and vegetables, treat the worm with the clinic medicine"]
    ]},
    {k:"p", t:"The **non-communicable diseases** — such as **anaemia, goitre, rickets and scurvy** — occur from a lack of nutrients in the food and are prevented by a **balanced diet** of local foods; **diabetes** and the diseases of the heart are prevented by a balanced diet, exercise and the avoidance of substance abuse."},
    {k:"rule"},
    {k:"h3", t:"Reproductive Health and Reproductive Tract Infections"},
    {k:"p", t:"**Reproductive health** is the state of complete physical, emotional and social well-being of the reproductive system at every stage of life — not merely the absence of disease. A reproductively healthy young person knows the body, guards its privacy, makes decisions freely and without force, and is free of infection."},
    {k:"p", t:"A **reproductive tract infection (RTI)** is a disease of the organs of reproduction. The most dangerous RTIs are the **sexually transmitted infections (STIs)** — diseases passed from one person to another through sexual contact, from an infected mother to her child, or through infected blood."},
    {k:"p", t:"**STIs:** an STI is caused by a germ (a bacterium or a virus). The **common STIs in Liberia** are **gonorrhoea** (a discharge from the private parts, painful urination), **syphilis** (sores that heal and return, and great harm to the unborn child), **chlamydia** (often with no sign at first, but it can make a woman unable to bear children), and **HIV**."},
    {k:"p", t:"**Effects of STIs:** the woman may develop an inflammation that blocks the birth canal and makes her **infertile**; the unborn child may be deformed or born dead; the man's seed may be harmed; and the infection may enter the blood and spread to the whole body. **Prevention:** abstinence before marriage, faithfulness within marriage, never sharing needles or cutting instruments, testing before a relationship, and early treatment at the clinic — an STI treated early is curable (except HIV)."},
    {k:"p", t:"**HIV and AIDS:** **HIV** (Human Immunodeficiency Virus) is the virus; **AIDS** (Acquired Immunodeficiency Syndrome) is the last stage of the disease, when the body's defence system is destroyed. The **mode of transmission** is the same as the STIs — sexual contact, infected blood (needles, cutting instruments, transfusion), and mother to child. The **signs and symptoms** in the late stage are: fevers that will not go, a weight loss, a swelling of the glands, a cough that lasts, sores on the mouth and a diarrhoea that will not stop, and at last the diseases (pneumonia, TB) that a healthy body would fight off."},
    {k:"p", t:"The **impact of HIV/AIDS:** on the **individual**, the sickness and the loss of life; on the **family**, the loss of the breadwinner, the orphans and the poverty; on the **community** and the nation, the loss of its workers, its teachers and its farmers. The **vulnerable groups** are: the young people in risky relationships, the users of shared needles, the workers in the sex trade, the recipients of untested blood, the infants of infected mothers, and the orphaned children. **Prevention** is by the ABC method and by never sharing sharps; **there is no cure for AIDS**, but a person living with HIV, on the proper treatment, can live well and long. **Care and support:** the person living with HIV is fed, is treated at the clinic, is visited, and — most of all — is **not discriminated against**: he is not a sinner to be shunned, he is a sick person to be helped, and no one may touch, beat or drive away a person because of HIV."},
    {k:"rule"},
    {k:"h3", t:"Rape and Teenage Pregnancy"},
    {k:"p", t:"**Rape** is a forced sexual act. It is a **crime**, and the **blame is always on the attacker**, never on the victim. The **myths** — that a girl \"asked for it\" by the way she dressed or went out — are false: no dress and no walk ever gives a person the right to force another. The **attitudes** of shame that silence a survivor let the attacker go free."},
    {k:"p", t:"Every person has **reproductive health rights**: the right to one's own body, the right to refuse, and the right to safety. **No one has the right to force another person to have sex.**"},
    {k:"p", t:"**How to avoid and get out of risky situations:** do not walk alone at night in an empty place; keep company with friends; be firm and loud in refusing; run to a public place, a shop, a house with lights, and shout; tell a parent, a teacher or the police at once."},
    {k:"p", t:"**Steps to take in case of rape:** do **not** wash or throw away the clothes (they may hold the evidence); **tell** a trusted person at once; **report** the attack to the police; go to the hospital or the clinic for **medical attention** — an examination, the emergency pill to prevent pregnancy, and the treatment (**PEP**) that can stop HIV if it was risked. The friend who is told helps by listening without blame, by keeping the secret safe, and by going with her to the report and to the clinic."},
    {k:"p", t:"**Teenage pregnancy:** the **causes** are early sexual activity, ignorance, poverty, bad company and the pressure of the moment. The **effects** are the danger to the unready body, the leaving of school, the shame, the orphans and the poverty. The **prevention** is education, self-control, the avoidance of risky situations, and the setting of goals for the future that make a young person value herself too much to be used."},
    {k:"rule"},
    {k:"h3", t:"Morbidity and Mortality"},
    {k:"p", t:"**Morbidity** is the state of being sick — the diseases and the number of sick people in a place. **Mortality** is the state of dying — the deaths and the number of deaths in a place, especially the **child mortality** that measures how well a community cares for its children."},
    {k:"p", t:"The **causes** of high morbidity and mortality are: the lack of clean water and of latrines, the lack of immunization, malnutrition, the delay in seeing the doctor, poverty, and the lack of health education. The **vulnerable groups affected** are: the **children under five**, the **mothers** in child-birth, the **elderly**, the people with **HIV/AIDS**, and the poor who cannot reach the clinic."},
    {k:"p", t:"**Prevention and the types of support services:** the prevention is by the community health services — the immunization of the children, the clean water and the latrine, the nutrition programme, the safe motherhood care in pregnancy, and the health education in the schools. The **support services** required by each vulnerable group are: the **children** need the clinic, the immunization and the food; the **mothers** need the antenatal care, the skilled birth attendant and the safe delivery; the **elderly** need the treatment of the chronic disease and the company of the family; and the **people living with HIV** need the lifelong treatment, the food and the care without discrimination."}
  ],
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
  study:[
    /* ---- study notes: Semester Two, Period V (guide pp. 36–37) ---- */
    {k:"h3", t:"The Spheres of the Earth"},
    {k:"p", t:"The earth is made of four great spheres, each with its own composition:"},
    {k:"bul", items:[
      "The **lithosphere (geosphere)** — the solid sphere: the crust and the upper mantle, the land and the sea floor. It is the source of our **minerals** — the iron, the diamond, the bauxite and the gold that the country mines.",
      "The **hydrosphere** — the water sphere: all the oceans, seas, rivers, lakes and underground water of the earth.",
      "The **atmosphere** — the air sphere that surrounds the earth, made chiefly of **nitrogen** (about 78%) and **oxygen** (about 21%), with **water vapour**, **carbon dioxide** and the rare gases mixed in.",
      "The **biosphere** — the sphere of life, where the other three meet and living things exist."
    ]},
    {k:"p", t:"The earth is a supporter of life because these four spheres work together: the atmosphere gives air to breathe and protects from the sun's harsh rays, the hydrosphere gives water to drink and to grow food, the geosphere gives the minerals and the land, and the biosphere is the life itself."},
    {k:"rule"},
    {k:"h3", t:"The Atmosphere: Water Vapour and Precipitation"},
    {k:"p", t:"**Water vapour** is water in the form of a gas, mixed in the air in small amounts. It comes from the **evaporation** of the sea, the rivers, the lakes and the sweating of the plants. The air cannot hold the vapour forever: when it is cooled high in the atmosphere, the vapour changes back into tiny droplets (**condensation**) that form the **clouds**."},
    {k:"p", t:"**Precipitation** is the water that falls from the clouds to the earth. Its **kinds**:"},
    {k:"bul", items:[
      "**Rain** — the water droplets when they are large enough to fall; the common precipitation of Liberia.",
      "**Drizzle** — the very fine rain of a light cloud.",
      "**Snow** — the droplets frozen into crystals in very cold air; unknown in Liberia but common in the frigid zones.",
      "**Hail** — balls of ice formed in the violent storm clouds of a cold region.",
      "**Dew** — the droplets that condense on the cold ground and grass at night, and **frost**, the ice that forms on a colder ground."
    ]},
    {k:"rule"},
    {k:"h3", t:"Weather, Climate and the Winds"},
    {k:"p", t:"**Weather** is the condition of the air at a place at a particular time — it changes from hour to hour. **Climate** is the average weather of a place over many years — it changes slowly, if at all. We forecast the weather from the instruments: the **thermometer** (temperature), the **barometer** (air pressure), the **rain gauge** (rainfall) and the **wind vane** (direction of the wind)."},
    {k:"p", t:"**Kinds of winds:** a **wind** is air in motion, caused by a difference in air pressure — the air flows from the high pressure to the low pressure. The winds are named for the direction from which they blow:"},
    {k:"bul", items:[
      "The **trade winds** — the steady winds that blow from the northeast towards the equator in our hemisphere; they carry the rains to the west coast of Liberia.",
      "The **monsoons** — the seasonal winds that reverse with the seasons and bring the heavy rains of the tropics.",
      "The **westerlies** — the winds of the temperate zones, blowing from the west.",
      "The **local winds** — the **sea breeze** of the day (the cool air from the sea blowing inland) and the **land breeze** of the night (the cool air from the land blowing out to the sea), caused by the land heating and cooling faster than the sea."
    ]},
    {k:"p", t:"The **kinds of clouds** are named by their shape and height: the **cumulus**, the flat-bottomed heap of a fair day; the **stratus**, the low grey sheet that brings the drizzle; and the **cirrus**, the high white wisps of thin ice crystals."},
    {k:"p", t:"The **conditions influencing** the weather and the climate of a place are: its **latitude** (its distance from the equator, which fixes how directly the sun shines), its **distance from the sea** (the sea moderates the temperature), the **prevailing winds** that bring moisture or dryness, the **air pressure**, the **temperature**, the **rainfall** and the **sunshine**."},
    {k:"p", t:"The **climate** of a place is changed by **natural** causes — the tilt of the earth, the moving of the sun's vertical rays between the tropics, and the great eruptions of the volcano that fill the air with dust — and by **artificial (human)** causes: the **clearing of the forest**, which dries the air and warms the land; the **burning of fossil fuels**, which loads the air with carbon dioxide and traps the heat (**the greenhouse effect**); and the great works of water that change the local rains. This is the **climatic change** the whole world is watching."},
    {k:"rule"},
    {k:"h3", t:"The Hydrosphere: Inland Waters and the Ocean"},
    {k:"p", t:"The **hydrosphere** is all the water of the earth, about **70 percent** of the surface. The **inland waters** — the rivers, the lakes, the ponds and the underground water — have the properties of pure water: it is colourless, tasteless, odourless, it freezes at 0°C and boils at 100°C, and it dissolves more substances than any other liquid, which is why it is called the **universal solvent**."},
    {k:"p", t:"**Sources and supply of water:** water comes from the **rain** (the great source), from the **rivers and streams**, from the **wells and boreholes** (the underground water) and from the **lakes and dams**. It is **supplied** to the people by the well, the tap of the water company, and the tank that catches the roof water."},
    {k:"p", t:"**Simple methods of purifying water:**"},
    {k:"num", items:[
      "**Sedimentation** — the water is left standing so that the mud and the sand sink to the bottom.",
      "**Filtration** — the water is poured through a filter of cloth, sand and gravel that catches the fine particles. (A simple filter: a cut bottle, packed with charcoal, sand and gravel, over a clean jug.)",
      "**Boiling** — the water is boiled for a few minutes, which kills the disease germs that the filter cannot catch.",
      "**Chlorination** — a little bleaching powder or a purification tablet is added to the clean water, which kills the germs in the well and the tank."
    ]},
    {k:"p", t:"The **ocean** is the great body of salt water that surrounds the land. Its **currents** are the steady movements of the sea water, driven by the winds and by the difference in temperature and salinity — the warm current flows from the equator and the cold current flows from the poles, and the fishermen of the coast know the current that brings the fish. Its **tides** are the rise and fall of the sea twice a day, caused by the pull of the **moon** (and, less, the sun) on the water: the **high tide** when the pull lifts the water in, and the **low tide** when it falls back. The tides are used to read the boats in and out of the harbour and to farm the tidal mud flats."},
    {k:"rule"},
    {k:"h3", t:"The Geosphere: Crust, Space Rocks and the Solar System"},
    {k:"p", t:"The **earth's crust** is the thin solid shell, about 30–50 km thick, on which we live; beneath it the **mantle** of hot rock goes down to the **core** of iron and nickel. The crust is made of **rocks** and the rocks of **minerals** — the iron ore, the diamond, the bauxite, the gold and the laterite that are the wealth of the geosphere."},
    {k:"p", t:"The **minerals in space (space rocks):** rocks and minerals that fall from space are the **meteorites** — pieces of the asteroids that burn as they enter the atmosphere (the **meteor**, or shooting star) and reach the ground. They are made of the same metals and silicates as the rocks of the earth, and they tell the scientists the age of the solar system."},
    {k:"p", t:"**A review of the solar system:** the sun is at the centre, and round it move the **eight planets** in their **orbits** — Mercury, Venus, **Earth**, Mars, Jupiter, Saturn, Uranus and Neptune — with their **moons**, the **asteroids** between Mars and Jupiter, and the **comets** on their long, narrow paths. Simple observations show the order: in a clear night the planets are the steady lights (they do not twinkle) among the twinkling stars, and the moon is the only body near enough to see its **craters** through a small telescope."},
    {k:"rule"},
    {k:"h3", t:"Theories About Space and Early Space Travel"},
    {k:"p", t:"The **theories about space:** for a thousand years people held the **geocentric theory** — that the earth was the fixed centre and the sun, the moon and the stars moved round it. In the sixteenth and seventeenth centuries the **heliocentric theory** was established — that the **sun** is the centre and the earth is a planet that moves round it, turning also on its axis. The theory of **gravity** (Newton) explained why the planets stay in their orbits, and the telescopes of the later ages showed that the stars are suns, each with its own planets, and that the universe is far greater than the old maps."},
    {k:"p", t:"The **early space travelers:** the age of space travel began in 1957 with **Sputnik**, the first artificial satellite of the Union of Soviet Socialist Republics; in 1961 **Yuri Gagarin** became the first human in space, circling the earth in the Vostok 1; in 1969 the American astronauts **Armstrong, Aldrin and Collins** landed the **Apollo 11** on the moon; and since then the **space shuttles**, the **space stations** and the **satellites** of communication, of weather and of war have carried the work of the earth up into the sky."},
    {k:"rule"},
    {k:"h3", t:"The Phases of the Moon"},
    {k:"p", t:"The **moon** is the earth's natural satellite; it does not make its own light but reflects the light of the sun. As it moves round the earth in about **28 days**, we see now this side, now that side, of its lit half — and so it appears to change shape in the **phases**:"},
    {k:"num", items:[
      "**New moon** — the moon is between the earth and the sun; the lit side is turned from us and the sky is dark.",
      "**First quarter** — a half moon, after about seven days.",
      "**Full moon** — the earth is between the sun and the moon; the whole lit face is towards us, after about fourteen days.",
      "**Last quarter** — the other half moon, and then the new moon again."
    ]},
    {k:"p", t:"The **effects of the phases:** the full moon lights the night path of the farmer and the fisherman; the tides are greatest at the new and the full moon (the **spring tides**), when the sun and the moon pull together; and the **eclipses** happen only in the phases — the **solar eclipse** at the new moon, when the moon passes between the earth and the sun, and the **lunar eclipse** at the full moon, when the earth passes between the sun and the moon and the moon turns red in the earth's shadow."}
  ],
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
  study:[
    /* ---- study notes: Semester Two, Period VI (guide pp. 38–39) ---- */
    {k:"h3", t:"Fertile Soil"},
    {k:"p", t:"Soil is the loose, living layer of the earth's crust, made from the broken-down **rocks** (the mineral part), the decayed **plants and animals** (the **humus**), the **water** and the **air** that fill the spaces between the particles, and the countless **living things** — worms, bacteria and fungi — that work in it."},
    {k:"p", t:"A **fertile soil** is a soil that can give a good crop: it has enough **humus** and **mineral salts** to feed the plant, it holds the right amount of **water** and lets the rest drain away, it holds **air** for the breathing of the roots, it is loose enough for the roots to push into, and it is teeming with the living things that turn the decayed matter into plant food."},
    {k:"rule"},
    {k:"h3", t:"Types of Soil"},
    {k:"p", t:"The main **types of soil**, and their effect on plant growth:"},
    {k:"table", head:["Type of soil","What it is like","Effect on plant growth"], rows:[
      ["Clay soil","fine particles packed close; heavy, dark, holds water but drains slowly","the plants waterlog in the rains and the soil crusts hard in the sun; good for rice in the paddy, poor for the root crops"],
      ["Sandy soil","coarse grains, loose, light; drains the water too fast","the water and the food run out before the plant can use them; it must be manured and watered often"],
      ["Loamy soil","a mix of sand, clay and humus in balance; crumbly, dark, loose","the best soil: it holds water and air at the same time, and most crops grow best in it"],
      ["Alluvial soil","rich deposit of the rivers where they flood; very dark and fertile","the best natural farmland, as on the banks of the Lofa and the St. Paul"],
      ["Laterite soil","the red, iron-rich soil of the old, weathered land of the tropics","it is hard and acid when it is bare; it must be cleared, limed and manured before the crop will take"]
    ]},
    {k:"p", t:"On a **field trip** you can identify the types of soil in your locality: take samples from the riverbank, from the upland and from the farm, look at the colour and feel the texture, put a little of each in a cup of water and stir — the sand settles first, then the silt, then the clay — and the sample with the dark humus at the top is the **fertile** one."},
    {k:"rule"},
    {k:"h3", t:"Methods of Improving Soil"},
    {k:"p", t:"Soil that has been farmed for years, or that is of a poor type, can be **improved**:"},
    {k:"num", items:[
      "By **manuring** — putting on the farmyard manure and the compost (the **organic fertilizer**) that adds humus and feeds the soil life.",
      "By **fertilizing** — adding the **chemical fertilizer** (NPK, urea, superphosphate) that replaces the mineral salts the crop has taken out.",
      "By **liming** — spreading lime on the acid red soil to raise its pH so the plant food can be taken in.",
      "By **crop rotation** — changing the crop from year to year: after the legume (the beans, the groundnut) that fixes nitrogen in the soil, the heavy feeder (the maize, the cassava) that uses it.",
      "By **fallowing** — leaving the land to rest for a season or two, so the weeds and the vegetation can restore the humus.",
      "By **mulching** — covering the bare soil with the cut weeds or the dry leaves, which keeps the moisture in and the sun from crusting the top.",
      "By **terracing and contour ploughing** on the hillsides, and by keeping the roots and the stubble in the ground, to stop the **soil erosion** that carries the topsoil away with the rain."
    ]},
    {k:"rule"},
    {k:"h3", t:"Germination of Seeds and Types of Seeds"},
    {k:"p", t:"**Germination** is the process by which the young plant (the **embryo**) in the seed begins to grow: the seed takes in water, the **radicle** breaks through the seed coat and grows down to become the first root, and the **plumule** grows up to become the first stem and leaves."},
    {k:"p", t:"The **types of seeds**:"},
    {k:"cols", a:[
      "**Dicotyledonous seeds** — two seed leaves (cotyledons) in the embryo; no endosperm in the mature seed, the food is stored in the fat cotyledons.",
      "Examples: **bean, pea, groundnut, mango, cashew**."
    ], b:[
      "**Monocotyledonous seeds** — one seed leaf; the food is stored in the **endosperm** and the one cotyledon passes it to the embryo.",
      "Examples: **rice, corn, millet, sorghum**."
    ]},
    {k:"p", t:"When the dicot seed (the bean) germinates, the two cotyledons swell, push out of the coat and feed the young plant until its first leaves make their own food, and the main root goes down as a **tap root**. When the monocot seed (the rice grain) germinates, the radicle comes out of the end and the young plant develops a cluster of **fibrous roots**."},
    {k:"rule"},
    {k:"h3", t:"Conditions Necessary for Germination"},
    {k:"p", t:"The seed will germinate well only when the following conditions are all present:"},
    {k:"num", items:[
      "**Water** — in the right amount: enough to soak the seed and wake the embryo, but not so much that it drowns the seed and cuts off the air.",
      "**Air (oxygen)** — for the respiration of the growing embryo; a seed under standing water will rot.",
      "**Suitable temperature** — the warmth of the tropics, not the cold that slows the growth and not the heat that kills the embryo.",
      "**Light** — most seeds germinate in the dark (the light is needed only when the young plant breaks the surface), but a few, like some of the weeds, need the light.",
      "**Good spacing and a loose seed bed** — so that each seedling has room, air and water of its own."
    ]},
    {k:"p", t:"The **experiment:** plant the same seeds in three bags of soil — one kept in the dark cupboard, one set in the open air in the sun, and one left on the desk in the classroom — and give all three the same water. The seed in the open air germinates the best, because it has the water, the air and the warmth together; the one in the dark cupboard germinates poorly, and the one on the dry desk does not germinate at all, for it has no water. This shows that germination is not the work of one condition alone, but of all the conditions together."}
  ],
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
  study:[
    /* ---- study notes: Semester One, Period I (guide pp. 40–41) ---- */
    {k:"h3", t:"Science, Technology and the Scientific Method"},
    {k:"p", t:"**Man and the scientific method of solving problems:** from the first day, man has met problems — how to cross the river, how to keep the food from spoiling, how to light the house at night — and he has solved them. The **scientific method** is the sure way of solving a problem: instead of guessing and being satisfied with the guess, the scientist tests the guess by experiment. Every problem in the laboratory, in the farm and in the clinic is met the same way."},
    {k:"p", t:"The **scientific method of study** has these steps, in order:"},
    {k:"num", items:[
      "**Observation** — noticing the facts of the problem with the senses or with instruments.",
      "**Hypothesis** — the suggested explanation, stated so that it can be tested.",
      "**Experiment** — the fair test, carried out to check the hypothesis, changing one factor at a time.",
      "**Collection of facts** — the recording of the measurements and the observations as they happen, honestly and in full.",
      "**Conclusion** — the judgement, drawn from the facts, that the hypothesis is supported or is not supported.",
      "**Future work** — the recommendation: what should be tested next, and how the finding should be put to use."
    ]},
    {k:"p", t:"The **difference between science and technology:** **science** is the **knowledge** — the study of nature that gives the facts, the laws and the explanations (the discovery that an electric current heats a wire). **Technology** is the **use** of that knowledge — the making of the useful things and the solving of the practical problems (the electric heater, the generator, the lamp). Science asks why; technology asks how can we use it."},
    {k:"p", t:"The **aid of mathematics:** mathematics is the language in which science describes things. It describes things **qualitatively** (the quality: the water is hot, the rock is harder than the other) and **quantitatively** (the quantity: the water is 80°C, the force is 50 N, the distance is 2.5 km). The law of science is written as a mathematical relation — work = force × distance, density = mass ÷ volume — so that it can be measured, checked and used to predict."},
    {k:"rule"},
    {k:"h3", t:"The Atom and Its Structure"},
    {k:"p", t:"An **element** is a pure substance made of one kind of particle, and the smallest particle of an element that can take part in a reaction is the **atom**. The atom is made of three smaller particles:"},
    {k:"table", head:["Particle","Charge","Where it is","Relative mass"], rows:[
      ["Proton","positive (+)","in the nucleus at the centre","1"],
      ["Neutron","none (neutral)","in the nucleus","1"],
      ["Electron","negative (−)","moving in shells round the nucleus","very small (about 1/1800)"]
    ]},
    {k:"p", t:"The **nucleus** is the small, heavy centre of the atom, holding the protons and the neutrons; the **electrons** move in shells (energy levels) round the nucleus, the first shell taking 2, the next 8. The atom as a whole is neutral, because the number of protons equals the number of electrons."},
    {k:"p", t:"Two numbers describe the atom: the **atomic number** is the number of **protons** in the nucleus (it is the identity of the element — every atom with 6 protons is carbon), and the **mass number** is the total number of **protons + neutrons**."},
    {k:"rule"},
    {k:"h3", t:"The Classification of Elements: The Periodic Table"},
    {k:"p", t:"The **periodic table** is the table that arranges all the elements in order of their **atomic number**, so that the elements with similar properties fall in the same vertical column (the **group**) and each horizontal row is a **period**. The first **20 elements**, in order:"},
    {k:"num", items:[
      "**Hydrogen (H, 1)** — the lightest element, a burning gas.",
      "**Helium (He, 2)** — the light gas of the balloons, in group of the rare (noble) gases.",
      "**Lithium (Li, 3)** and **Sodium (Na, 11)** and **Potassium (K, 19)** — the reactive metals of group 1.",
      "**Beryllium (Be, 4)** and **Magnesium (Mg, 12)** and **Calcium (Ca, 20)** — the lighter metals of group 2.",
      "**Boron (B, 5)** and **Carbon (C, 6)** and **Silicon (Si, 14)** and **Phosphorus (P, 15)** and **Sulphur (S, 16)** — the non-metals of the middle.",
      "**Nitrogen (N, 7)** and **Oxygen (O, 8)** and **Fluorine (F, 9)** and **Chlorine (Cl, 17)** — the gases and halogens.",
      "**Neon (Ne, 10)** and **Argon (Ar, 18)** — the noble gases that take part in no reaction."
    ]},
    {k:"p", t:"From the table the learner can **classify** the first 20 elements: the metals (which conduct, which are shiny and malleable) stand on the left and in the middle, the non-metals (which do not conduct) on the right, and the noble gases in the last column on the far right."},
    {k:"rule"},
    {k:"h3", t:"Physical and Chemical Changes"},
    {k:"p", t:"Matter changes in two ways. In a **physical change** no new substance is formed: the change is only in the size, the shape or the state of the substance — the melting of the ice, the boiling of the water, the cutting of the paper, the dissolving of the sugar. A physical change can usually be **reversed**, and no energy is given out or taken in in any great amount."},
    {k:"p", t:"In a **chemical change** one or more **new substances** are formed, with new properties. The signs of a chemical change are: a change of **colour**, the giving out of a **gas** (the fizzing), the formation of a solid that was not there (the **precipitate**), and the **giving out or taking in of energy** (the heat, the light). The examples: the **burning** (combustion) of the wood, the **rusting** of the iron (the slow reaction of the iron with the oxygen and the moisture of the air), the rotting of the food, and the action of the acid on the metal. A chemical change is usually **irreversible**."},
    {k:"rule"},
    {k:"h3", t:"Mixtures: Air and Sea Water"},
    {k:"p", t:"A **mixture** is two or more substances that are together but are not chemically joined; each keeps its own properties, and the parts can be separated by **physical** methods."},
    {k:"p", t:"**Air** is a mixture of gases, in these proportions by volume:"},
    {k:"bul", items:[
      "**Nitrogen** — about **78%**. It does not support burning or breathing; it fills the grain and the fruit to keep the food from spoiling, and it is used in the making of ammonia and of nitric acid.",
      "**Oxygen** — about **21%**. It supports **burning** and **respiration**; it is used in the hospital for the breath of the sick, and in the welding and cutting of the metal.",
      "**Carbon dioxide** — about **0.04%**. It is taken in by the green plant for photosynthesis; it is used in the making of the soda water and of the carbonate drinks, and in the fire extinguisher.",
      "**Water vapour and the rare (noble) gases** — about **1%**. The argon and the neon are used in the electric lamp and in the advertisement sign."
    ]},
    {k:"p", t:"**Sea water** is a mixture of the water and the dissolved salts — the common salt (sodium chloride) chief among them, with the magnesium and the calcium salts. The salt can be separated from the sea water by **evaporation** (the salt pan), and the fresh water by **distillation** (the desalinator)."},
    {k:"p", t:"The **differences between elements, mixtures and compounds**:"},
    {k:"table", head:["","Element","Compound","Mixture"], rows:[
      ["Made of","one kind of atom","two or more kinds of atom, chemically joined","two or more substances, physically mixed"],
      ["Proportions","—","fixed","any"],
      ["Properties","its own","new, of its own","the properties of the parts kept"],
      ["Separated by","—","chemical means","physical means"]
    ]},
    {k:"p", t:"The **methods of separating mixtures:** **magnetic separation** (the iron from the iron and the sulphur, by the magnet), **filtration** (the sand from the water, by the filter paper), **distillation** (the water from the salt water, by the boiling and the cooling of the vapour), **evaporation** (the salt from the sea water), **decantation** (the liquid poured off from the settled solid), and **fractional distillation** (the fractions of the petroleum — the kerosene, the gasoline, the diesel — separated by their different boiling points)."},
    {k:"rule"},
    {k:"h3", t:"Compounds: Acids, Bases and Salts"},
    {k:"p", t:"Besides the compounds of the everyday life, the chemist knows three great families of compounds: the **acids**, the **bases** and the **salts**."},
    {k:"p", t:"**Acids** — compounds that contain **hydrogen** which can be replaced by a metal. The common acids: **sulphuric acid (H₂SO₄)**, **hydrochloric acid (HCl)** and **nitric acid (HNO₃)**. Their **properties:** they taste **sour**, they turn the blue **litmus** paper **red**, they react with the active metals to give out the gas **hydrogen**, and they react with the bases to give the salt and the water. Their **uses:** the sulphuric acid in the storage battery of the car and in the making of the fertilizers and the dyes; the hydrochloric acid in the stomach (where it helps to digest the food) and in the cleaning of the metal; the nitric acid in the making of the fertilizers and of the explosives."},
    {k:"p", t:"**Bases** — compounds that contain the **metal** and the **hydroxyl (OH)** group. Their **properties:** they taste **bitter**, they feel **soapy (slippery)** in the hand, they turn the red **litmus** paper **blue**, and they react with the acids to give the salt and the water. The common bases: the **sodium hydroxide (NaOH)**, the **calcium hydroxide (Ca(OH)₂)** (the lime water) and the **ammonia (NH₃)** in the water. Their **uses:** the sodium hydroxide in the making of the soap and of the paper; the calcium hydroxide (the **lime**) in the whitewashing of the wall, in the sweetening of the bitter water and in the liming of the acid soil; the ammonia in the household cleaner."},
    {k:"p", t:"**Salts** — the compounds made when the hydrogen of the acid is replaced by the **metal** of the base, in the reaction of the acid and the base (the **neutralization**). The common salts: the **sodium carbonate (Na₂CO₃)** (the washing soda), the **potassium chlorate (KClO₃)**, and the **common salt (NaCl)**. Their **properties:** most of them taste **salty**, they dissolve in the water, and they are **neutral** — they do not change the colour of the litmus. Their **uses:** the sodium carbonate in the washing of the cloth and in the making of the glass and of the soap; the potassium chlorate in the match-head and in the fireworks (it gives out the oxygen that helps the burning); and the common salt in the feeding and the preserving of the food."},
    {k:"p", t:"**The neutralization:** the acid + the base → the **salt** + the **water**. Example: H₂SO₄ + 2 NaOH → Na₂SO₄ + 2 H₂O. The farmer who limes his acid soil is doing a neutralization on a large scale: the base (the lime) destroys the acid of the soil and leaves the salt behind, and the crop can grow."}
  ],
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
  study:[
    /* ---- study notes: Semester One, Period II (guide pp. 42–44) ---- */
    {k:"h3", t:"Living Matter: Definition, Classification and Characteristics"},
    {k:"p", t:"**Living matter** is the matter that lives: it grows, it feeds, it breathes, it responds to its surroundings, it gets rid of its waste, and it produces young ones like itself. A **living thing** is identified by these life processes — a stone, a rusted nail or a cut-down log has none of them, so they are not alive."},
    {k:"p", t:"Living things are **classified** by their shared characteristics, from the largest group to the smallest: the **kingdom**, then the **phylum** (in animals) or the **division** (in plants), the **class**, the **order**, the **family**, the **genus** and the **species**."},
    {k:"rule"},
    {k:"h3", t:"The Two Kingdoms"},
    {k:"p", t:"The living world is chiefly of two **kingdoms**:"},
    {k:"cols", a:[
      "The **plant kingdom** — the green, chlorophyll-bearing organisms that make their own food and are fixed in place.",
      "Its **divisions**: the **flowering plants** (the dicots — the bean, the mango — with two seed leaves; and the monocots — the rice, the corn — with one) and the **non-flowering plants** (the ferns, the mosses, the algae)."
    ], b:[
      "The **animal kingdom** — the organisms without chlorophyll that feed on other living things and can move about.",
      "Its **phyla** run from the simplest to the most complex: the **Porifera** (sponges), the **Coelenterata** (jellyfish), the **worms** (flat, round and segmented), the **Mollusca** (snails, clams), the **Arthropoda** (insects, crabs, spiders — the largest phylum) and the **Chordata** (the animals with a backbone: fish, amphibians, reptiles, birds and mammals, of which the human is one)."
    ]},
    {k:"rule"},
    {k:"h3", t:"Reproduction: Sexual and Asexual"},
    {k:"p", t:"**Reproduction** is the process by which the living thing produces its young. It is of two systems:"},
    {k:"p", t:"**Asexual reproduction** needs **one parent** and no sex cells. The young is produced from a part of the parent's body, and is **identical** to the parent. In **plants:** the **cassava** from the stem **cuttings**, the **yam** from the **tuber**, the **sweet potato** from the rooted vine, the **strawberry** from the **runner**, and the **guava** from the **budding** of the tree. In **animals:** the **amaba and the paramecium** by the **binary fission** (the one cell divides into two), and the **hydra** by the **budding** (the young grows out of the side of the parent and breaks off)."},
    {k:"p", t:"**Sexual reproduction** needs **two parents** and the **sex cells (gametes)**: the small, moving **sperm** of the male and the large, fixed **egg** of the female. When the sperm joins the egg, **fertilization** takes place, and the single cell formed is the **zygote**. The zygote divides again and again, and from it the new organism grows. The young of sexual reproduction is **not identical** to either parent — it carries the mixed characters of both, which is why the children of one family differ from one another, and why the species can change and improve over the ages."},
    {k:"rule"},
    {k:"h3", t:"Mendel's Law of Heredity"},
    {k:"p", t:"**Heredity** is the passing of the characteristics from the parents to the offspring. The **father of heredity** is **Gregor Mendel**, the monk who, in the 1860s, crossed the pea plants of different characters and counted the characters of the offspring over many generations."},
    {k:"p", t:"Mendel crossed the **tall** pea plant with the **dwarf** pea plant. In the **first generation (F₁)** every plant was **tall** — the character of the dwarf did not appear at all. He called the character that appears (the tall) the **dominant** character, and the one that is hidden (the dwarf) the **recessive** character. When he crossed the tall plants of the F₁ among themselves, in the **second generation (F₂)** the dwarf reappeared, in the proportion of about **three tall to one dwarf (3:1)**."},
    {k:"p", t:"From his counts Mendel drew his **laws of heredity:**"},
    {k:"num", items:[
      "Each character of the organism is carried by a pair of **factors** (now called **genes**), one inherited from each parent.",
      "The two factors **segregate** (separate) from one another at the making of the gametes, so that each gamete carries only **one** factor of the pair (**the law of segregation**).",
      "When the two factors of a pair are different (one dominant, one recessive), the **dominant** factor shows and the **recessive** is hidden; the recessive shows only when **both** factors of the pair are recessive.",
      "The different pairs of factors **assort independently** of one another in the gametes (**the law of independent assortment**), which is why the offspring mix the characters of both grandparents."
    ]},
    {k:"p", t:"**The application:** the farmer who saves the seed of the best of his plants, and the breeder of the rice and of the cacao, work on the law of Mendel — they cross the plants they want, and, generation after generation, they bring the good characters together and the bad characters out."},
    {k:"rule"},
    {k:"h3", t:"Human Reproduction and the Development of the Fetus"},
    {k:"p", t:"In the human, the **sperm** of the male, carried in the semen, enters the body of the female at the **copulation**. If it reaches the **egg** in the **oviduct (fallopian tube)**, the **fertilization** takes place: the sperm pierces the egg, and the **zygote** is formed. The zygote divides as it travels down the tube, and, in about a week, it is planted (implanted) in the thickened lining of the **uterus (womb)**."},
    {k:"p", t:"The **development of the fetus** to the stage of delivery:"},
    {k:"num", items:[
      "**Weeks 1–2** — the zygote divides into the ball of cells (the morula, then the blastula) and is implanted in the uterus. The **placenta** begins to form — the organ that joins the blood of the mother to the blood of the young, and through which the young gets its food and its oxygen and gives out its waste.",
      "**Weeks 3–8 (the embryo)** — the great building: from the ball of cells come the three layers that make the **organs** — the heart begins to beat in the third week, and by the end of the eighth week the head, the limbs and the organs are formed, and the young is called the **embryo**.",
      "**Week 9 to the birth (the fetus)** — the organ of the young is formed, and now it **grows**: the bones harden, the muscles grow, the hair and the nails come, and the young moves and kicks. The **umbilical cord**, which joins the fetus to the placenta, carries the food and the oxygen in, and the waste out, to the blood of the mother."
    ]},
    {k:"p", t:"The **process of delivery (childbirth):** when the **gestation** of about **nine months (40 weeks)** is done, the delivery begins. In the **first stage** the muscles of the womb contract and the **cervix** (the mouth of the womb) opens; in the **second stage** the contractions push the baby out through the **vagina (birth canal)** — head first, in the normal birth; and in the **third stage** the **placenta (afterbirth)** comes away. A skilled birth attendant, a clean place and a warm cloth for the newborn are the care that the mother and the child need."},
    {k:"rule"},
    {k:"h3", t:"Pregnancy: Its Social and Psychological Implications"},
    {k:"p", t:"**Pregnancy** is the carrying of the young in the womb, and it is the greatest change in the life of the woman. Its **implications**:"},
    {k:"p", t:"**Social implications:** the family is changed — a new member, a new work, a new expense; the community counts a new citizen. In the **teenage** pregnancy the implications are the worst: the girl **leaves school** and loses the chance of the trade and the profession; she is **stigmatized** and loses the standing in the family and the community; and the child is born to a mother who is not yet a woman in body or in purse. In the **planned** pregnancy the implications are the good: the child comes when the parents are ready in body, in purse and in mind, and the child is wanted, and the wanted child is the well-reared child."},
    {k:"p", t:"**Psychological implications:** in the mother there are the changes of the mood with the hormones, the fear of the birth, the joy of the expectation, and, in the planned mother, the peace of the preparation. In the **teenage** mother there is the **shame**, the **fear**, the **regret** and the **guilt**, and the strain between her and her parents, her husband and her child — a strain that is the root of much of the neglect and the ill-treatment of the young child. The prevention of the **teenage** pregnancy, by the education and the self-control and the planning of the family, is the protection of the mind of the girl and of the future of the child."},
    {k:"rule"},
    {k:"h3", t:"Types of Plants and Their Functions"},
    {k:"p", t:"**Types of leaves:** the **simple leaf** (the one blade, as the leaf of the mango) and the **compound leaf** (the blade divided into the leaflets, as the leaf of the cassava); the leaves of the **shape** — the broad, the narrow, the needle-like (the pine), the lobed (the oak) and the heart-shaped (the guava); and the leaves of the **modified** function — the **tendril** (the leaf that twines and holds the vine), the **spine** (the leaf of the cactus, modified to keep the water in) and the **bulb-scale** (the fleshy leaf of the onion that stores the food)."},
    {k:"p", t:"**Classification of plants:** the flowering plants are divided into two **classes** by the seed:"},
    {k:"cols", a:[
      "The **dicotyledons (dicots)** — two seed leaves; the veins of the leaf are **netted**; the root is the **tap root**; the flower parts in the **fours** and the **fives**.",
      "The mango, the cashew, the cotton, the hibiscus."
    ], b:[
      "The **monocotyledons (monocots)** — one seed leaf; the veins of the leaf are **parallel**; the root is the **fibrous**; the flower parts in the **threes**.",
      "The rice, the corn, the grass, the pineapple, the banana."
    ]},
    {k:"p", t:"The **function** of the plant is the work it does for the community: the green plant makes the **food** (the starch) and the **oxygen** of the air, it gives the **fruit** and the **seed** to eat, the **wood** for the house and the fuel, the **medicine** from the bark and the leaf, and it holds the **soil** together and gives the **shade**."},
    {k:"rule"},
    {k:"h3", t:"The Systems of the Human Body"},
    {k:"p", t:"The human body is made of **systems** of organs, each with its structure and its function:"},
    {k:"table", head:["System","Its structure","Its function"], rows:[
      ["Skeletal","the 206 bones, joined at the joints","to support the body, to protect the organs, to allow the movement, and to make the blood cells"],
      ["Muscular","the muscles, attached to the bones","to move the body and the parts of the body, by the contraction and the relaxation"],
      ["Nervous","the brain, the spinal cord and the nerves","to receive the message from the senses, to judge it, and to order the muscle and the gland to act"],
      ["Endocrine","the glands without the duct — the pituitary, the thyroid, the adrenal, the pancreas, the gonads","to secrete the hormones into the blood, which regulate the growth, the metabolism and the reproduction"],
      ["Circulatory","the heart, the vessels and the blood","to carry the food, the oxygen and the hormones to the cells, and to carry the waste away"],
      ["Respiratory","the nose, the trachea, the bronchi and the lungs","to take in the oxygen and to give out the carbon dioxide, in the breathing"],
      ["Digestive","the mouth, the oesophagus, the stomach, the intestines, the liver, the pancreas","to break down the food and to absorb it into the blood, and to pass out the waste"],
      ["Urinary","the kidneys, the ureters, the bladder and the urethra","to filter the blood and to remove the waste of the urea, in the urine"],
      ["Reproductive","the organs of reproduction, male and female","to produce the gametes and to bring up the young, so that the species continues"]
    ]},
    {k:"p", t:"The systems are not separate; they work **together**. You eat (the digestive), the food is absorbed into the blood (the circulatory carries it), the oxygen is breathed in (the respiratory) and carried by the blood to the cell, the energy is released in the cell (the respiration), and the waste is taken away by the blood to the lung and to the kidney (the circulatory, the respiratory, the urinary). The **nervous** and the **endocrine** systems are the directors of the whole."},
    {k:"rule"},
    {k:"h3", t:"Puberty and the Human Life Cycle"},
    {k:"p", t:"The **human life cycle** runs through the stages:"},
    {k:"num", items:[
      "**Infancy** — from the birth to about one year: the greatest growth, the learning of the sitting, the creeping and the walking, and of the first words.",
      "**Childhood** — from one year to about ten: the steady growth of the body and of the mind, the learning of the school, and the play.",
      "**Adolescence (puberty)** — from about ten or twelve to about eighteen: the period of the great change, when the body of the child becomes the body of the adult.",
      "**Adulthood** — from about eighteen: the full growth, the work, the marriage and the family.",
      "**Old age** — the last stage, when the body slows and the strength fades, and the experience and the wisdom remain."
    ]},
    {k:"p", t:"The **physical changes of adolescence:** in the girl, the widening of the hip, the development of the breast, the softening of the voice, and the beginning of the **menstruation**; in the boy, the broadening of the shoulder, the deepening of the voice (the breaking of the voice), the growth of the facial hair, and the **nocturnal emission**. The **emotional changes:** the strong interest in the opposite sex, the sensitivity and the moodiness, the desire for the independence and for the company of the peers, and the great energy of the mind, which must be directed to the study and to the work, or it will find the wrong channel."},
    {k:"rule"},
    {k:"h3", t:"Juvenile Delinquency"},
    {k:"p", t:"**Juvenile delinquency** is the breaking of the law and of the good order of the society by the young person — the theft, the violence, the drug abuse, the truancy and the gang."},
    {k:"p", t:"The **causes:** the **breakdown of the family** (the absence of the father or the mother, the neglect, the ill-treatment, the single-parent household that is poor); the **poverty** and the **unemployment** of the home; the **bad company** and the **peer pressure** of the street; the **lack of the school** and the **idle time**; the **drug and the substance abuse**; the **media** that shows the violence and the crime as the way to the honour; and the **absence of the guidance** of the church and of the community."},
    {k:"p", t:"The **impact on the youth and on the society:** on the youth, the **criminal record** that follows him for life, the loss of the school and of the trade, the **addiction**, and the death in the gang and in the prison; on the society, the **fear** in the community, the **expense** of the police and of the court and of the prison, the loss of the worker and of the future citizen, and the cycle — the delinquent boy becomes the father who cannot guide his own son."},
    {k:"p", t:"The **solutions** that the investigation suggests: the **strengthening of the family** (the guidance of the parent, the visitation of the child, the discipline that is firm but not cruel); the **school** that is open and that cares for the child (the sports, the club, the vocational class); the **community** that gives the young person the work and the place (the youth club, the trade school, the church and the mosque); the **counselling** of the boy who has gone astray, rather than the prison alone; and the **law** that is fair to the child, that punishes the least and that **rehabilitates** the most."}
  ],
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
  study:[
    /* ---- study notes: Semester One, Period III (guide pp. 45–47) ---- */
    {k:"h3", t:"Health and Hygiene"},
    {k:"p", t:"**Health** is the state of complete physical, mental and social well-being — the condition of the person. **Hygiene** is the set of **practices** that keep the person and the surroundings clean, and so keep the health. The difference: health is the **goal**, and hygiene is one of the **means** to the goal. A healthy body that is kept dirty will lose its health, and a clean body that is fed poorly will not keep its health — the hygiene, the nutrition, the exercise and the rest all work together."},
    {k:"rule"},
    {k:"h3", t:"Personal Hygiene: Care of the Body"},
    {k:"p", t:"The **activities necessary to promote personal hygiene** and the optimum care of the body:"},
    {k:"bul", items:[
      "**The skin** — the bath with soap and clean water, each day; the clean underclothes, changed each day; the nails cut short and clean, so that the germs do not hide under them.",
      "**The hair** — washed with the soap or the shampoo at least twice a week, and combed; the head examined for the lice, and treated at once if they are found.",
      "**The mouth and the teeth** — the brush with the paste after each meal, or at least twice a day; the floss between the teeth; the visit to the dental clinic twice a year.",
      "**The ears and the nose** — the outer ear cleaned with the soft cloth; nothing pushed into the ear or the nose; the nose blown gently into the handkerchief.",
      "**The eyes** — no rubbing with the dirty hand; the good light for the reading; the rest from the close work.",
      "**The clothes and the posture** — the clean, well-fitting clothes; the standing and the sitting with the back straight, so that the bones and the muscles are not strained; the shoes that fit the foot."
    ]},
    {k:"p", t:"To the care of the body are added the **rest and the sleep** (the eight to nine hours of the learner), the **physical exercise** each day, and the **cleaning of the surroundings** — the house, the yard and the water — which are the hygiene of the community."},
    {k:"rule"},
    {k:"h3", t:"Nutrition and Food Care"},
    {k:"p", t:"**Nutrition** is the taking in of the food by the body, and the use of it — the digestion, the absorption and the building. A person is well **nourished** when the food gives all the **nutrients** in the right amount: the **carbohydrate** and the **fat** for the energy, the **protein** for the building and the repair, the **vitamin** and the **mineral salt** for the protection, and the **water** for the carrying. The **malnutrition** is the failure of any of these — the under-nourishment (the starvation, the stunting of the child) or the over-nourishment (the obesity, with its disease of the heart)."},
    {k:"p", t:"**Food care** is the handling and the storing of the food so that it stays safe to eat. The rules:"},
    {k:"bul", items:[
      "The **clean hands** and the clean surface, before and after the food is touched.",
      "The food **covered**, from the fly and the dust and the hand of the curious child.",
      "The food **stored** in the cool, dry, clean place; the grain in the sealed container, from the weevil and the mould.",
      "The food **cooked** through, and the cooked food kept hot or kept cold — the warm, damp food is the home of the germ.",
      "The **safe water** in the cooking and in the washing of the fruit and the vegetable.",
      "The **spoiled food** — the rancid, the mouldy, the sour — thrown out, and not saved for the animal."
    ]},
    {k:"p", t:"The neglect of the food care brings the **food poisoning**: the vomiting, the cramp and the diarrhoea, that come from the germ of the spoiled food or from the poison of the bad plant. The prevention is the care of the food, from the market to the plate."},
    {k:"rule"},
    {k:"h3", t:"Reproductive Health: Teenage Pregnancy and Its Care"},
    {k:"p", t:"**Puberty and adolescence** bring the maturity of the body and the question of the **reproductive health** — the health of the organs of reproduction, and the wisdom in their use. The greatest problem of the reproductive health of the young is the **teenage pregnancy**."},
    {k:"p", t:"The **causes of the teenage pregnancy:** the early sexual activity, from the **peer pressure** and the curiosity; the **lack of the correct information** about the sexuality and the reproduction; the **poverty** and the absence of the guidance of the parent; the **idleness** and the bad company; and the **drunk and the drug**, that take the mind from the consequence."},
    {k:"p", t:"The **effects:** on the **body** — the young womb is not grown for the burden, so the birth is dangerous for the mother and the child; on the **school** — the girl leaves, and loses the trade and the profession; on the **society** — the shame, the broken family, the orphan, and the poverty that follows the child into its own life."},
    {k:"p", t:"**Maternal and child nutrition:** the woman in the pregnancy needs the food of the **two** — her own, and the food of the child in the womb. She needs the **protein** (the beans, the fish, the meat, the groundnut) for the building of the child, the **iron** (the leafy vegetable, the liver, the bean) for the blood that carries the oxygen to the child, and the **folic acid** (the dark green leaf) for the forming of the spine and the brain of the embryo. The child, after the birth, needs the **breast milk** of the mother, which is the perfect food of the first six months, and then the food of the family, shared and well cooked. The **basic needs of the mother and the child** are: the **antenatal care** at the clinic, the **skilled birth attendant** at the birth, the **breast milk** and the **complementary food** of the child, the **immunization** of the child on time, the **clean water** and the **latrine**, and the **love and the time** of the family."},
    {k:"p", t:"The **harmful traditional practices** that wound the health of the woman and the survival of the child:"},
    {k:"bul", items:[
      "The **female circumcision (the mutilation of the female organ)** — the cutting that wounds the flesh of the young girl, brings the infection and the bleeding, and makes the birth dangerous; it is a practice against the health and against the right of the girl to her own body, and it is being left behind in the countries that understand it.",
      "The **early marriage** — the marriage of the girl before her body and her mind are grown, which is the root of the teenage pregnancy and of the death in the child-birth.",
      "The **taboo on the food of the nursing mother** — the rule that the woman who nurses must not eat the food that would strengthen her (the fish, the egg, the fowl), which leaves her weak and the milk poor.",
      "The **seclusion of the woman after the birth** — the shutting of the mother and the child in the dark, unclean room, where the infection of the wound finds its way in."
    ]},
    {k:"p", t:"These practices are **changed** by the education of the family and the community, the example of the leader, and the law that protects the child and the woman."},
    {k:"rule"},
    {k:"h3", t:"Infertility and Sterility"},
    {k:"p", t:"**Infertility** is the inability of the couple to produce the child, after the trying for the time; **sterility** is the permanent loss of the power of the reproduction, in the man or in the woman. The **causes**:"},
    {k:"cols", a:[
      "**Biological causes** — the untreated **STI** (the gonorrhoea and the chlamydia) that inflames and blocks the tube of the woman; the disease of the ovary and of the uterus; the low count of the sperm of the man, from the injury or the fever (the mumps) or the heat; the block of the vessel of the sperm; and the disorder of the hormone that the gland does not secrete in right measure."
    ], b:[
      "**Cultural and lifestyle causes** — the **harmful practice** (the circumcision) that wounds the organ; the **early marriage** and the early child-bearing, before the body is grown; the **stress** of the mind and the poverty of the body; the **alcohol and the drug**, that harm the sperm and the egg; and the neglect of the **nutrition** that the reproduction needs."
    ]},
    {k:"p", t:"The prevention is the **early treatment** of the infection, the **abstinence** until the marriage, the **planning** of the family, and the leaving of the harmful practice and the harmful habit. The couple that cannot produce the child is not the less worthy — the child is the blessing, not the measure of the worth of the person."},
    {k:"rule"},
    {k:"h3", t:"Common Sexually Transmitted Infections"},
    {k:"p", t:"The **STI** is the infection that is passed from one person to another through the sexual contact, and, in some cases, through the blood and from the mother to the child. The **common STIs in Liberia**, and their cause, treatment and prevention:"},
    {k:"table", head:["STI","Cause","Signs","Treatment"], rows:[
      ["Gonorrhoea","the bacterium *Neisseria gonorrhoeae*","the discharge from the private part, the pain in the urination","the antibiotic, taken to the end by both partners"],
      ["Syphilis","the spirochaete *Treponema pallidum*","the painless sore (the chancre), then the rash, and at last the harm to the brain and the heart","the antibiotic (the penicillin), given early it is cured"],
      ["Chancroid","the bacterium *Haemophilus ducreyi*","the painful sore of the genital, and the swollen gland","the antibiotic"],
      ["Chlamydia","the bacterium *Chlamydia trachomatis*","often no sign at first; in the woman, the silent inflammation that blocks the tube","the antibiotic, given to both partners"],
      ["Trichomoniasis","the protozoan *Trichomonas vaginalis*","the itching, the discharge, the smell","the antibiotic (the metronidazole)"],
      ["Candidiasis (the thrush)","the fungus *Candida albicans*","the itching and the white discharge, in the woman and in the man","the antifungal cream or tablet"]
    ]},
    {k:"p", t:"The **prevention** of all of them is one: the **abstinence** before the marriage, the **faithfulness** within the marriage, the **never sharing** of the needle and the cutting instrument, and the **early treatment** at the clinic — the STI that is found early and treated by **both** partners is cured, and the STI that is left is the one that brings the inflammation, the block, and the **infertility**."},
    {k:"rule"},
    {k:"h3", t:"HIV and AIDS"},
    {k:"p", t:"**HIV** (Human Immunodeficiency Virus) is the virus that destroys the **defence** of the body — the white cell (the CD4 cell) that fights the germ. **AIDS** (Acquired Immunodeficiency Syndrome) is the **last stage** of the infection, when the defence is gone, and the body falls to the disease (the pneumonia, the tuberculosis, the diarrhoea) that the healthy body would fight off. The **causes** are the **modes of transmission**: the **unprotected sexual** contact with the infected person; the **infected blood** (the shared needle, the dirty cutting instrument, the untested transfusion); and the **mother to the child** (in the pregnancy, the birth, and the breast milk). It is **not** spread by the sitting, the handshake, the sharing of the food, or the mosquito."},
    {k:"p", t:"The **signs and symptoms** of the late stage: the fever that will not go, the **weight loss**, the swelling of the **gland**, the **cough** that lasts the month, the **diarrhoea** that will not stop, and the **sore** of the mouth and the skin that will not heal."},
    {k:"p", t:"The **treatment:** there is **no cure** for the AIDS, but the **antiretroviral therapy (ART)** — the daily medicine that holds the virus down — lets the person **live well and long**, and **stops the passing** of the virus to another. The person on the ART takes the medicine **every day**, eats well, rests, and keeps the appointment at the clinic."},
    {k:"p", t:"The **prevention:** the **ABC** — the **A**bstinence, the **B**e **f**aithful, and the **C**ondom where the exposure is; the **never sharing** of the sharp; the **testing** of the blood before the transfusion and before the relationship; and the **treatment of the mother** on the ART, so that the child is born **free** of the virus. The **vulnerable groups** are the young in the risky relationship, the user of the shared needle, the worker in the sex trade, the recipient of the untested blood, and the orphan. The **care and support of the person living with HIV (PLWHA):** the food, the medicine, the visit, the company, and **no discrimination** — the person with the HIV is the sick person to be helped, not the sinner to be shunned; he keeps his work, his school and his seat at the table of the family."},
    {k:"rule"},
    {k:"h3", t:"Human Sexuality and Responsible Behaviour"},
    {k:"p", t:"**Sex** is the difference of the body between the male and the female, and the act of the reproduction. **Sexuality** is the whole of the person as it relates to the sex — the body, the feeling, the thought, the relationship and the value. The **cycles of sexuality** of the young run from the **attraction** of the childhood, through the **infatuation** and the **crush** of the early adolescence, to the **dating** and, at last, the **commitment** of the marriage. The **factors that affect the sexual behaviour of the adolescent** are: the **hormone** of the puberty (the body that is grown and ready); the **peer pressure** and the company; the **media** (the film, the music, the internet) that shows the sex; the **family** (the example and the silence of the parent); and the **culture and the religion** of the community. The **consequence of the irresponsible sexual behaviour** is: the **teenage pregnancy**, the **STI** and the **HIV**, the **shame** and the broken relationship, and the loss of the future that the young person had planned. The **responsible attitude** of the adolescent is the **self-control**, the **abstinence** until the marriage, the **respect** of the own body and of the body of the other, and the **courage** to say the no."},
    {k:"p", t:"To keep the responsible attitude, the young person learns three **skills of the communication**:"},
    {k:"bul", items:[
      "**Effective communication** — the **listening** (the hearing of the other to the end, without the interrupting), the **message** (the saying of what is meant, clearly and without the anger), the **clarity** (the words that the other can understand), and the **non-verbal communication** (the eye, the face and the tone, that say what the word will not say).",
      "**Negotiation** — the **listening and understanding** of the point of view of the other person; the **proving of the alternative** (the showing of the other way, that both can keep their ground); the **compromise** (the meeting in the middle, where both lose a little and both keep the relationship); and the **emotion** (the keeping of the anger out of the talk, so that the two talk about the thing, not at each other).",
      "**Assertiveness** — the **understanding of the sexual right** (the right of the person to his or her own body, and the right to refuse); the **saying of what you want** (the clear, calm \"no, thank you\", without the shame and without the fight); the **understanding of your sexual trigger** (the knowing of the situation and the feeling that pulls you into the risk, so that you can step away from it); and the **recognizing of the pressure line** (the knowing of the moment when the pressure is too strong, and the leaving of the place, to the friend or the parent, before the \"no\" becomes the \"yes\")."
    ]},
    {k:"rule"},
    {k:"h3", t:"Drugs and Substance Abuse: Effects and Corrective Measures"},
    {k:"p", t:"The **effect of the alcohol and the drug on the body:** the **liver** is poisoned and swells; the **stomach** is burned and the appetite is lost; the **brain** and the nerve are harmed, so the memory, the judgment and the control go; the **heart** beats wild and the blood pressure rises; the **reproduction** is harmed — the sperm of the man is few and the period of the woman is broken; and the body **wastes** while the habit **grows**, until the **addiction** — the state where the person cannot stop, and will steal, lie and hurt to get the dose."},
    {k:"p", t:"The **corrective measures:** the **refusal** at the first offer (the firm, calm no, and the leaving of the place); the **company** that does not use (the choice of the friend who studies and works); the **busy life** (the school, the work, the sport and the church or the mosque, that leave no idle hour for the habit); the **counselling** of the one who has fallen (the clinic, the centre of the rehabilitation, the family that receives him back without the shame that pushes him out); and the **law** that closes the door of the sale to the child, and the **education** that tells the truth of the drug, in the school and in the home."},
    {k:"rule"},
    {k:"h3", t:"First Aid"},
    {k:"p", t:"**First aid** is the **immediate, temporary care** given to the injured or the suddenly sick person, before the doctor comes. It is given by anyone who is there, with the clean hand and the calm mind, and it follows the order: **make the scene safe**, **call for help** (the adult, the ambulance, the phone number of the clinic), and **treat**."},
    {k:"p", t:"The **treatment of the common injuries**:"},
    {k:"num", items:[
      "**The wound and the cut** — press the clean cloth on the wound to stop the bleeding, and keep the hand above the heart if it is on the arm or the leg; wash the small cut with the clean water and the soap, and cover it with the clean bandage; do **not** dig the dirt or the glass out of the deep wound — cover it and go to the clinic, for the tetanus shot.",
      "**The heavy bleeding** — the firm, steady pressure on the wound with the clean cloth, for the full five minutes, without the lifting to look; if the blood soaks through, put the cloth on top, and keep the pressure; go to the clinic.",
      "**The burn and the scald** — the **cold running water** on the burn, for the full twenty minutes; **no** butter, no toothpaste, no egg white on the burn; cover it with the clean, dry cloth, and go to the clinic for the burn that is big, deep, or on the face or the hand.",
      "**The bite of the animal and the sting of the insect** — the wash of the wound with the soap and the clean water; the cold cloth on the sting, to take the swelling down; the **immediate** clinic for the bite of the dog or the cat (the **anti-rabies** shot, given in time, saves the life).",
      "**The fracture (the broken bone)** — the part is **immobilized** (the splint of the stick or the board, padded, and tied above and below the break) and **not** straightened by force; the cold cloth on the swelling; the person is carried, not walked, to the clinic.",
      "**The nosebleed** — the sitting up, the head **forward** (not back, so that the blood is not swallowed), and the firm pinch of the soft part of the nose, for the full ten minutes.",
      "**The person who has fainted** — the laying down, the raising of the legs, the loosening of the tight cloth, and the fresh air; if the person does not wake in a minute, go to the clinic at once."
    ]},
    {k:"p", t:"The **artificial respiration** is given to the person who has **stopped breathing** (the drownder, the victim of the smoke, the child choked by the food that has stopped the air). For the **mouth-to-mouth**: the head is tilted back and the chin lifted (the airway is opened), the nose is pinched, and the rescuer gives **one full breath every five seconds**, watching for the chest to rise — **about twelve breaths to the minute**, until the breathing comes back or the ambulance takes over. For the **choked** person, the **Heimlich manoeuvre**: the standing behind the person, the fist in the middle of the stomach, and the sharp, inward pull, until the object is forced out. The first aid that is given **quickly and correctly** in the first minutes is often the difference between the life and the death."}
  ],
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
  study:[
    /* ---- study notes: Semester Two, Period IV (guide pp. 48–51) ---- */
    {k:"h3", t:"Force, Motion and Energy"},
    {k:"p", t:"A **force** is a push or a pull acting on a body, measured in **newtons (N)**. The **applications** of force are seen everywhere: the push that opens the door, the pull that draws the bucket from the well, the force of the foot on the ball, and the force of gravity on every body. A force can change the **motion** of a body (start it, stop it, speed it up, slow it down, turn it) or change its **shape** (stretch the rubber, crush the can)."},
    {k:"p", t:"The relationship of **force, work and energy:** **work** is done when the force moves the body in its direction, and **work = force × distance**, measured in **joules (J)**. The work done on a body is **energy** given to it: the energy to lift it (potential), the energy to move it (kinetic). **Simple problems:** the force of 50 N that moves a box 4 m does work = 50 × 4 = **200 J**, and gives the box 200 J of energy. A 60 kg learner carried up a 2 m stair (weight ≈ 600 N) is given 600 × 2 = **1200 J** of potential energy."},
    {k:"rule"},
    {k:"h3", t:"Inertia, Speed, Velocity and Acceleration"},
    {k:"p", t:"**Inertia** is the property of a body to resist a change in its motion: the body at rest stays at rest, and the body in motion stays in motion in a straight line, unless a force acts on it. The greater the **mass** of the body, the greater its inertia — the lorry is harder to start and harder to stop than the bicycle. Inertia is why the passenger is thrown forward when the bus stops suddenly, and why the dust comes out of the carpet when it is beaten."},
    {k:"p", t:"**Speed** is the distance travelled in unit time: **speed = distance ÷ time**, in metres per second (m/s) or kilometres per hour (km/h). **Velocity** is the speed **in a stated direction**: the car at 60 km/h towards Gbarnga has a velocity, while the car at 60 km/h with no direction stated has only a speed. A body that goes round a circle at steady speed has a **changing velocity**, because its direction is changing all the time."},
    {k:"p", t:"**Acceleration** is the rate of change of velocity with time: **acceleration = change of velocity ÷ time**, in metres per second squared (m/s²). A body accelerates when it speeds up, slows down (the negative acceleration) or changes direction. **Simple problems:** the car that travels 120 km in 2 hours has speed = 120 ÷ 2 = **60 km/h**; the trolley whose speed rises from 2 m/s to 10 m/s in 4 s has acceleration = (10 − 2) ÷ 4 = **2 m/s²**."},
    {k:"rule"},
    {k:"h3", t:"Bernoulli's Principle"},
    {k:"p", t:"**Bernoulli's principle** states: where the **speed of a fluid** (a liquid or a gas) **increases, the pressure within the fluid decreases**. Hold a sheet of paper to your lip and blow **over** the top of it: the air over the top moves fast, its pressure falls, and the still air below, at the higher pressure, pushes the paper **up**. The paper rises to meet the fast air."},
    {k:"p", t:"The **examples and applications**:"},
    {k:"bul", items:[
      "The **wing of the aeroplane** — curved above, flat below: the air over the top travels faster, the pressure above falls, and the higher pressure below lifts the wing. This is the **lift** that carries the plane.",
      "The **curve of the football** — the spinning ball drags the air round one side faster, the pressure on that side falls, and the ball curves towards the low pressure.",
      "The **atomizer (the perfume spray)** — the fast air jet over the tube lowers the pressure at the top, and the air pressure in the bottle pushes the liquid up the tube, where the jet breaks it into spray.",
      "The **roof torn off the house in the hurricane** — the wind over the roof is fast and its pressure low, and the still air inside the house, at the higher pressure, pushes the roof up and out.",
      "The **Chimney** — the hot, fast gas in the chimney has the low pressure, and the fresh air outside pushes the smoke up."
    ]},
    {k:"rule"},
    {k:"h3", t:"Heat and Temperature"},
    {k:"p", t:"**Heat** is a form of **energy** that flows from the hotter body to the cooler body, measured in **joules** (or calories). **Temperature** is the **degree of hotness or coldness** of a body, measured in **degrees** with the **thermometer**. The difference: the temperature tells how hot the body is; the heat is the energy in motion — the cup of tea at 80°C and the pot of tea at 80°C have the same **temperature**, but the pot holds more **heat**."},
    {k:"p", t:"**The measurement of temperature:** the **thermometer** is the glass tube with the bulb of the liquid (the mercury or the coloured alcohol) that expands in the heat and contracts in the cold. The scale is fixed by the two fixed points: the **freezing point of ice (0°)** and the **boiling point of water (100°)** at the ordinary pressure. The two scales in use:"},
    {k:"bul", items:[
      "The **Celsius (Centigrade) scale** — from 0°C (ice) to 100°C (water).",
      "The **Fahrenheit scale** — from 32°F (ice) to 212°F (water)."
    ]},
    {k:"p", t:"The conversion between the scales: **°F = (9/5 × °C) + 32**, and **°C = (5/9 × (°F − 32))**. Example: the body temperature of 37°C is (9/5 × 37) + 32 = 66.6 + 32 = **98.6°F**; and the room at 77°F is (5/9 × (77 − 32)) = (5/9 × 45) = **25°C**."},
    {k:"p", t:"The **types of thermometers** and their use:"},
    {k:"table", head:["Type","How it is made","Its use"], rows:[
      ["Clinical (medical) thermometer","narrow tube with a kink near the bulb, scale 35–42°C","to measure the temperature of the body; the kink holds the reading after it is taken out"],
      ["Laboratory thermometer","straight tube, scale about −10 to 110°C","to measure the temperature in the experiment"],
      ["Maximum-and-minimum thermometer","two kinks, one to hold the maximum and one the minimum reached","to record the highest and the lowest temperature of the day, in the weather station"],
      ["Bimetallic (the thermostat)","two strips of different metal bent together, that curve in the heat","to switch the machine on and off at a set temperature, in the iron and the refrigerator"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Effects of Heat Change and the Transfer of Heat"},
    {k:"p", t:"The **effect of the heat on the substance:** the heat makes the substance **expand** (grow larger) and the cold makes it **contract**. The solid, the liquid and the gas all expand in the heat, and the **gas expands most**. The **practical applications**:"},
    {k:"bul", items:[
      "The **gap in the rail of the railway** and the **joint in the bridge** — left so that the iron can expand in the heat of the day without buckling.",
      "The **mercury (or the alcohol) in the thermometer** — it rises in the heat because it expands.",
      "The **caution with the glass** — the thick glass (the jug) cracks when the boiling water is poured into it, because the inside expands faster than the outside; the thin glass and the pre-warmed jug do not.",
      "The **hot-air balloon** — the air in the balloon is heated and expands, becomes lighter than the air outside, and the balloon rises.",
      "The **fitting of the iron tyre on the wooden wheel** — the tyre is heated and expands, put on the wheel, and contracts on cooling to grip the wheel tight."
    ]},
    {k:"p", t:"The **transfer of heat** is by three ways:"},
    {k:"num", items:[
      "**Conduction** — the flow of the heat through the **solid**, from particle to particle, from the hot end to the cold end, without the matter moving. The **conductors** (the metal: the copper, the iron, the aluminium) carry the heat fast; the **non-conductors (insulators)** (the wood, the cloth, the air, the rubber) carry it slow. **Applications:** the **copper pan** (the conductor, to cook fast), with the **wooden or the plastic handle** (the insulator, to keep the hand cool); the **wool and the cotton** of the clothing (the insulator, that holds the warm air next to the body); and the **double wall of the flask** (the vacuum, that stops the conduction and the convection).",
      "**Convection** — the transfer of the heat by the **movement of the liquid or the gas**: the hot part rises, the cold part sinks, and the **convection current** carries the heat round. **Applications:** the **boiling of the water** (the hot water from the bottom rises and the whole pot is heated); the **sea breeze and the land breeze** (the warm air over the land rises and the cool air from the sea flows in); the **radiator and the heater** (the warm air rises from it and the room is heated); and the **chimney** (the hot smoke rises and draws the fresh air in).",
      "**Radiation** — the transfer of the heat by the **waves**, with **no medium at all** — the heat of the **sun** crosses the empty space to the earth by radiation. The **black and the matt** surface **absorbs** the radiation best (and gives it out best); the **white and the shiny** surface **reflects** it. **Applications:** the **blackened plate of the solar heater** (to take the heat of the sun); the **white clothing of the desert** (to reflect the sun); and the **silvered wall of the flask** (to reflect the heat back in)."
    ]},
    {k:"rule"},
    {k:"h3", t:"Sound Energy"},
    {k:"p", t:"**Sound** is the form of energy produced by the **vibration** of a body. The vibrating body (the string of the guitar, the reed of the flute, the drum skin, the voice box) sets the air round it vibrating, and the vibration travels out as the **sound wave** — just as the stone dropped in the water sends out the **water wave** that travels over the surface, only the sound wave travels through the **air** (and through the water and the solid) as a wave of the compression and the rarefaction of the particles. The sound **needs the medium** (the air, the water, the solid) to travel — it **cannot travel through the vacuum**, which is why the space is silent. The speed of the sound in the air is about **340 m/s** (about 1200 km/h), much slower than the light."},
    {k:"p", t:"The **characteristics of the sound wave**:"},
    {k:"bul", items:[
      "**Pitch (the highness or the lowness)** — fixed by the **frequency** (the number of the vibrations per second, in hertz, Hz): the fast vibration gives the **high** pitch (the whistle, the girl's voice), the slow vibration the **low** pitch (the drum, the boy's voice after the breaking).",
      "**Loudness (the strength)** — fixed by the **amplitude** (the size of the vibration): the big vibration gives the loud sound, the small vibration the soft sound.",
      "**Quality (the tone)** — the character that makes the note of the violin different from the note of the flute at the same pitch and the same loudness."
    ]},
    {k:"p", t:"The **audibility range** of the human ear is from about **20 Hz to 20,000 Hz**. The sound **above 20,000 Hz** is the **ultrasonic** sound (the ultrasound, that the doctor uses to see the baby in the womb, and that the bat uses to find its way in the dark); the sound **below 20 Hz** is the **infrasonic** sound (the rumble of the earthquake and of the storm, that we feel more than we hear)."},
    {k:"p", t:"The **musical instruments** are grouped by the way they make the sound: the **stringed** (the guitar, the violin, the kora — the vibration of the string), the **wind** (the flute, the trumpet, the horn — the vibration of the column of air), and the **percussion** (the drum, the bell, the xylophone — the vibration of the skin or the bar that is struck)."},
    {k:"rule"},
    {k:"h3", t:"Light Energy"},
    {k:"p", t:"**Light** is the form of energy that we **see** — the electromagnetic radiation that the eye can receive. It is produced by the **hot and the excited body** (the flame, the hot metal, the electric filament, the lightning, and the sun). Light travels in the **straight line**, at the speed of about **300,000,000 m/s (3 × 10⁸ m/s)** — a million times faster than the sound, which is why we **see the lightning before we hear the thunder** of the same storm. Because it travels in the straight line, the body that stops it casts the **shadow** (the dark region behind it), and the arrangement of the pinhole and the mirror gives the **image**."},
    {k:"p", t:"**The reflection of light:** when the light falls on the smooth surface (the mirror), it is **reflected** (bounced back). The **law of reflection:** the angle of incidence (the angle the falling ray makes with the normal) is **equal** to the angle of reflection (the angle the reflected ray makes with the normal). The **plane mirror** gives the image that is the same size as the object, upright, and as far behind the mirror as the object is in front of it."},
    {k:"p", t:"**The refraction of light:** when the light passes from one transparent medium to another (the air to the water, the air to the glass), it is **bent** at the surface — this is the **refraction**. It is the refraction that makes the **pencil in the glass of water look bent** at the surface, and the **pool look shallower** than it is, and the **star twinkle** (the light is refracted again and again in the moving air)."},
    {k:"p", t:"**The colours of the spectrum:** the white light of the sun is the **mixture of all the colours**. When it passes through the **prism** (the triangle of the glass), it is **dispersed** (spread) into its **seven colours**, in the order: **red, orange, yellow, green, blue, indigo and violet** — the **spectrum** (the rainbow is the same dispersion, by the drop of the rain). The red is bent the least, the violet the most."},
    {k:"p", t:"**The mirrors and the lenses** — the types and the uses:"},
    {k:"table", head:["Type","How it is made","Its use"], rows:[
      ["Plane mirror","the flat, shiny surface","the dressing mirror, the mirror of the room"],
      ["Concave mirror","the reflecting surface curved in (like the inside of the spoon)","the shaving and the makeup mirror (the magnified image), the headlight of the car and the torch (the beam of the parallel ray), the solar furnace (the focus of the sun)"],
      ["Convex mirror","the reflecting surface curved out (like the back of the spoon)","the rear-view mirror of the car and the shop (the wide field of view, the image upright and diminished)"],
      ["Convex (converging) lens","thick in the middle, thin at the edge","the magnifying glass, the spectacles for the far-sighted eye, the camera and the projector lens, the eye itself (the lens of the eye)"],
      ["Concave (diverging) lens","thin in the middle, thick at the edge","the spectacles for the long-sighted eye (the myopia), that spreads the ray before it enters the eye"]
    ]},
    {k:"p", t:"**The effect of light on the substances** is by how much the light passes through:"},
    {k:"bul", items:[
      "**Transparent** — the substance that lets the light pass through clearly, so that the object behind is seen distinctly: the **clear glass, the clean water, the air**.",
      "**Translucent** — the substance that lets the light pass but **scatters** it, so that the object behind is seen only confusedly: the **frosted (ground) glass, the wax paper, the thin cloud**.",
      "**Opaque** — the substance that lets **no light** pass through, so that it casts the shadow: the **wood, the stone, the metal, the human body**."
    ]}
  ],
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
  study:[
    /* ---- study notes: Semester Two, Period V (guide pp. 52–55) ---- */
    {k:"h3", t:"Magnetism: Causes and Properties"},
    {k:"p", t:"**Magnetism** is the property of certain bodies (chiefly the iron, the nickel and the cobalt) to attract the magnetic materials. The **causes** of magnetism:"},
    {k:"bul", items:[
      "By **friction (stroking)** — the stroke of the hard steel with one pole of the magnet, in one direction, over and over.",
      "By **induction** — the touch of the soft iron by the magnet, which makes it magnetic while it is touched, and the magnetism goes when it is taken away.",
      "By the **electric current** — the current in the coil of wire makes the iron core a magnet (the electromagnet).",
      "By the **earth itself** — the great magnetism of the earth, which makes the suspended magnet point to the poles, and which the lightning has given to the iron of the ground (the natural magnet, the lodestone)."
    ]},
    {k:"p", t:"The **properties** of the magnet:"},
    {k:"bul", items:[
      "It **attracts** the magnetic materials (the iron, the steel, the nickel, the cobalt), and the force is **strongest at the poles** (the two ends).",
      "The **law of the magnet:** the **like poles repel** (the north and the north, the south and the south), and the **unlike poles attract** (the north and the south).",
      "The magnet that is **suspended freely** (on the thread or on the needle in the water) comes to rest pointing to the **north and the south** — the end that points to the north is the **north pole (N)**, and the other is the **south pole (S)**.",
      "The magnet can **magnetize** the other magnetic body by the touch (the induction) and by the stroke.",
      "The magnet **loses** its magnetism by the **heating** to the redness, by the **hammering**, and by the long keeping with the poles down (the keeping on the yoke of the soft iron, with the poles together, keeps it)."
    ]},
    {k:"p", t:"The **magnetic field** is the region round the magnet in which its force is felt. It is shown by the **iron filings** sprinkled on the paper over the magnet: the filings line up in the **lines of force**, that run from the north pole to the south pole, outside the magnet. The **production of the magnetic field** is not only by the magnet but by the **current** also: the current in the straight wire makes the field round it (the circle of the filings), and the current in the **coil (the solenoid)** makes the field of the bar magnet inside it — and, with the iron core in the coil, the **electromagnet**."},
    {k:"rule"},
    {k:"h3", t:"Types of Magnets"},
    {k:"p", t:"The **types of the magnet**:"},
    {k:"bul", items:[
      "The **bar magnet** — the rectangular bar of steel, with the pole at each end; the field is shown by the filings over it.",
      "The **horseshoe magnet** — the bar bent into the horse-shoe, so that the poles are close together, and the force between them is strong; it is used in the lifting and in the experiment.",
      "The **electromagnet** — the iron core in the coil of the wire, that is a magnet only while the current flows. Its **advantages** over the permanent magnet: it can be **turned on and off** by the switch, its **strength** can be varied by the current and by the number of the turns, and it can be made much stronger than the permanent magnet. Its **uses:** the **crane of the scrap yard** that lifts the car, the **electric bell**, the **telegraph relay**, the **loudspeaker** and the **magnetic lock** of the door.",
      "The **electric bell (the Graham bell)** — the electromagnet with the **armature** (the soft iron) in front of it, the **spring** that holds the armature away, and the **contact screw** that touches the stem of the armature. When the switch is closed, the current flows, the electromagnet attracts the armature, the hammer strikes the gong, and the armature **breaks the contact** — the current stops, the magnet lets go, the spring brings the armature back, the contact is made again, and the cycle repeats about fifty times a second: the **ringing**."
    ]},
    {k:"rule"},
    {k:"h3", t:"The Compass"},
    {k:"p", t:"The **compass** is the instrument with the **magnetic needle** (the small bar magnet on the jewel, in the glass case) that points to the north. Its **uses:** the finding of the **direction** on the land; the **navigation of the sea**, where the helmsman steers the ship by the needle (the variation of the needle from the true north is corrected by the chart); and the **navigation of the space**, where the craft holds its attitude by the compass that points to the magnetic pole of the earth. The needle of the compass points to the **magnetic** north, which is a little away from the **true** (the geographic) north — the difference is the **magnetic variation (declination)** of the place."},
    {k:"rule"},
    {k:"h3", t:"The Motor and the Dynamo"},
    {k:"p", t:"The **electric motor** is the machine that changes the **electrical energy into the mechanical energy**: the current in the coil (the armature) in the field of the magnet makes the force that turns the coil, and the **commutator** (the split ring) reverses the current in the coil every half turn, so that the turning goes on in one direction. The motor turns the fan, the washing machine, the pump and the drill."},
    {k:"p", t:"The **dynamo (the generator)** is the machine that works the other way: it changes the **mechanical energy into the electrical energy**. The coil is turned by the hand, by the water wheel, or by the engine, in the field of the magnet, and the turning of the coil in the field **induces** the current in it. The bicycle light is lit by the small dynamo on the wheel, and the great station of the power house turns the coil by the steam or by the water, to give the current to the whole city."},
    {k:"rule"},
    {k:"h3", t:"Lightning and Thunder"},
    {k:"p", t:"**Lightning** is the great discharge of the electricity between the clouds, or between the cloud and the earth. The **cause:** the rain and the hail in the storm cloud are beaten by the rising and the falling air, and the charge is separated — the top of the cloud becomes positive, the bottom negative — until the air between the cloud and the ground cannot hold the difference, and the **discharge** leaps across as the lightning. The **thunder** is the sound of the same discharge: the air in the channel is heated to the great heat in an instant, expands with violence, and the shock wave is the thunder."},
    {k:"p", t:"The **effect of the lightning on the electrical appliances:** the stroke, or the charge that runs along the wire, brings the **surge** of the voltage (the thousand times the ordinary) into the house, and the surge **burns** the appliance (the television, the computer, the refrigerator) that is on the line. The **protection:** the **lightning rod** on the tall building (the down conductor carries the stroke to the earth, past the house); the **unplugging** of the appliance in the storm; and the **surge protector** in the socket, that takes the surge off the appliance and into the earth wire."},
    {k:"rule"},
    {k:"h3", t:"Electric Current: Types and Effects"},
    {k:"p", t:"The **electric current** is the flow of the charge (the electron) in the conductor. It is of two **types**:"},
    {k:"table", head:["","Direct Current (DC)","Alternating Current (AC)"], rows:[
      ["Direction","flows in one direction only","reverses its direction regularly (the fifty times a second, in the mains of Liberia)"],
      ["Produced by","the dry cell, the lead-acid accumulator (the battery), and the generator with the commutator","the alternator (the generator without the commutator, with the slip ring)"],
      ["Use","the torch, the radio, the phone, the car, the battery of the computer","the mains of the house, the factory, and the power line (it is sent over the long distance, and it can be transformed)"]
    ]},
    {k:"p", t:"The **effects of the current** on the substance:"},
    {k:"num", items:[
      "The **heating effect** — the current in the **metal** (the resistance) heats it: the filament of the lamp glows, the iron and the heater heat, and the fuse melts. In the **non-metal** (the carbon, the nichrome) the same effect is used in the element of the heater.",
      "The **magnetic effect** — the current in the wire makes the magnetic field round it (the electromagnet, the motor, the dynamo, the bell).",
      "The **chemical effect (the electrolysis)** — the current through the **aqueous solution** (the water with the salt or the acid) breaks the substance into its parts at the electrodes: the water is split into the **hydrogen** and the **oxygen**, and the metal is laid on the surface of the other (the **electroplating**). The solution that carries the current is the **electrolyte**, and the metal or the carbon rod that carries the current into it is the **electrode**."
    ]},
    {k:"rule"},
    {k:"h3", t:"The Measurement of the Current, Ohm's Law and the SI Units"},
    {k:"p", t:"The **electric current** is measured by the **ammeter**, that is connected **in series** in the circuit; the **voltage** (the pressure of the current) is measured by the **voltmeter**, that is connected **in parallel** across the part of the circuit; and the **resistance** is measured by the **ohmmeter**."},
    {k:"p", t:"**Ohm's law:** the current in the conductor is **directly proportional** to the voltage across it, and **inversely proportional** to the resistance, at the constant temperature. It is written:"},
    {k:"p", t:"**V = I × R**"},
    {k:"p", t:"where the **V** is the voltage in **volts**, the **I** is the current in **amperes**, and the **R** is the resistance in **ohms**. **Problems:** the current in the resistor of 6 Ω with the 12 V across it is I = 12 ÷ 6 = **2 A**. The voltage across the lamp that takes the 0.5 A at the 240 V mains is V = 0.5 × 240 = **120 V**… the resistance of the heater that takes the 5 A at the 230 V is R = 230 ÷ 5 = **46 Ω**."},
    {k:"p", t:"The **S.I. units** of the electrical quantity:"},
    {k:"table", head:["Quantity","S.I. unit","Symbol"], rows:[
      ["Current","ampere","A"],
      ["Voltage (potential difference)","volt","V"],
      ["Resistance","ohm","Ω"],
      ["Power","watt","W"],
      ["Energy (work)","joule","J"],
      ["Charge","coulomb","C"]
    ]},
    {k:"p", t:"The **power** of the appliance is P = V × I, in the watt: the heater at the 230 V that takes the 5 A has P = 230 × 5 = **1150 W** (the 1.15 kW). The **energy** used is the power × the time: the kilowatt-hour (the kwh) is the unit of the electric bill — the appliance of the 1 kW that runs the 5 hours uses the 5 kwh."},
    {k:"rule"},
    {k:"h3", t:"The Transformer"},
    {k:"p", t:"The **transformer** is the machine that changes the **voltage of the alternating current** (it works only with the AC, not with the DC). It is made of the two coils (the **primary** and the **secondary**) on the common iron core: the AC in the primary makes the changing field in the core, and the changing field **induces** the voltage in the secondary."},
    {k:"p", t:"The **types**:"},
    {k:"cols", a:[
      "The **step-up transformer** — the secondary has **more turns** than the primary; it **raises** the voltage (and lowers the current, in the same proportion).",
      "Its use: at the power station, the voltage is stepped up to the hundred thousand volts for the **long line**, so that the loss of the heat in the wire is small."
    ], b:[
      "The **step-down transformer** — the secondary has **fewer turns** than the primary; it **lowers** the voltage (and raises the current).",
      "Its use: at the sub-station and in the house, the voltage is stepped down to the **230 V** of the socket, and in the adapter of the phone and of the radio, to the few volts of the appliance."
    ]},
    {k:"rule"},
    {k:"h3", t:"The Series and the Parallel Circuits"},
    {k:"p", t:"The **series circuit** is the one where the components (the lamps, the resistors) are joined **in a single loop**, one after the other. The **same current** flows through all of them, the voltage is **shared** among them, and if **one** breaks (the filament of the one lamp burns), the **whole circuit is broken** and all the others go out. The series is used in the small circuit (the torch, the string of the small lamp of the decoration)."},
    {k:"p", t:"The **parallel circuit** is the one where the components are joined **across the same two points**, each in its own branch. The **same voltage** is across all of them, the current is **shared** among the branches, and if **one** breaks, the **others keep on** — this is why the lamp of the house and the socket are all in parallel: the burning of the one lamp does not put out the others. The **house wiring is always parallel**, for this reason."},
    {k:"p", t:"**Problems:** in the series, the two resistors of 2 Ω and 3 Ω give the total R = 2 + 3 = **5 Ω**; in the parallel, the two resistors of 6 Ω and 3 Ω give the total R = (6 × 3) ÷ (6 + 3) = **2 Ω**."},
    {k:"rule"},
    {k:"h3", t:"The Fuse and the Circuit Breaker"},
    {k:"p", t:"The **fuse** is the thin wire of the special metal (the lead and the tin) in the case of the glass, in the **series** with the circuit, at the entry of the appliance. Its **function:** if the current rises above the **rating** of the fuse (the overload, or the **short circuit** where the live and the neutral touch and the current leaps to the great size), the heat of the current **melts** the wire, and the circuit is **broken** — the appliance is cut off before the wire can burn and the fire start. The fuse that has blown is **replaced** by the one of the **same rating** (never by the thicker, that would not blow in time, and never by the copper wire, that would not blow at all)."},
    {k:"p", t:"The **circuit breaker** is the switch that does the same work as the fuse, but **trips** (opens) by the electromagnet or by the bimetal, when the current is too great, and **resets** (closes) again when the fault is cleared — it is not used up, as the fuse is. In the modern house the **breaker** (the box of the switchboard with the breakers of each circuit) has taken the place of the many fuses, and the **earth wire** carries the fault current to the ground, so that the person who touches the case of the appliance that has faulted is not shocked, and the breaker trips."},
    {k:"p", t:"The **safety rules** of the electricity: the **never** of the repair of the wire with the current on; the **dry hand** at the switch and at the socket; the **earthing** of the case of the metal appliance; the **fuse and the breaker** of the right rating, in the live wire; and the **never** of the water and the electricity together."},
    {k:"rule"},
    {k:"h3", t:"Electrolysis"},
    {k:"p", t:"The **electrolysis** is the splitting of the substance (the **electrolyte**) by the **direct current** that is passed through it. The electrolyte is the solution (or the melt) that carries the current — the water with a little of the acid or of the salt, the solution of the copper sulphate, the solution of the common salt. The two **electrodes** (the carbon rod or the metal plate) carry the current into the solution: the **anode** (the positive electrode) and the **cathode** (the negative electrode). The current pulls the positive part (the **cation**) to the cathode, and the negative part (the **anion**) to the anode, and the substance is **split** at the electrodes."},
    {k:"p", t:"The **electrolysis of the water:** the water with a little of the dilute sulphuric acid, between the two carbon electrodes, with the DC of the battery. At the **cathode** the **hydrogen** gas is collected (the gas that burns with the pop), and at the **anode** the **oxygen** (the gas that relights the glowing splint), in the proportion of **two volumes of the hydrogen to one of the oxygen** — the same proportion in which the hydrogen and the oxygen are joined in the water (H₂O)."},
    {k:"p", t:"The **uses of the electrolysis:** the **electroplating** (the laying of the thin layer of the metal — the chromium on the tap, the gold on the jewelry — on the object that is made the cathode, in the solution of the salt of that metal); the **refining** of the copper (the impure copper is the anode, the pure is the cathode, and the copper of the anode goes into the solution and comes out on the cathode, leaving the impurity behind); and the **extraction** of the metal that is too active to be smelted by the charcoal — the **aluminium** from the alumina, by the great current of the Hall process."}
  ],
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
  study:[
    /* ---- study notes: Semester Two, Period VI (guide pp. 56–58) ---- */
    {k:"h3", t:"Sanitation and the Disposal of Wastes"},
    {k:"p", t:"**Sanitation** is the safe disposal of the **human waste** and the **solid waste (the garbage)**, and the keeping of the surroundings clean. The **sanitary condition** of the school, the home, the community and the market place is bad where the waste is left in the open: the faeces in the ground, the garbage in the drain, and the flies and the rat that carry the germ from the waste to the food and to the water."},
    {k:"p", t:"The **ways of disposing the waste**:"},
    {k:"bul", items:[
      "**The human waste (the faeces)** — in the **pit latrine** (the covered pit with the slab, that the fly cannot get out of), or in the **septic tank** of the town (where the sewage is held, the solid settles, and the clear water soaks into the ground, away from the well). The defecation in the open (the bush, the bank of the river) is the great source of the disease.",
      "**The solid waste (the garbage)** — by the **burying** in the pit (the covered, and the far from the water), by the **burning (incineration)** that is controlled, in the incinerator, not in the open fire that poisons the air, by the **recycling** (the glass, the tin, the paper, and the plastic that are gathered and sold to be made into the new thing), and by the **composting** (the green waste — the leaf, the peel, the weed — that is heaped and left to rot into the manure of the garden).",
      "**The cleaning of the school, the community and the market place** — by the daily sweep, the covered bin that is emptied, the drain that is cleared, the wall that is washed, and the rule that every person takes his waste to the bin, and the market that has the place for the waste of the stall, and the day of the community clean-up."
    ]},
    {k:"p", t:"The **effect of the human and the solid waste** that is not disposed of: it brings the **disease** — the **diarrhoea** and the **cholera** (the germ of the faeces in the water and the food), the **typhoid** (the fly that carries the germ from the faeces to the food), the **polio** (the germ in the water, that the immunization stops), and the **malaria** (the stagnant water of the drain and the tin, where the mosquito breeds). It brings the **fly and the rat**, the **stink** of the place, and the **poisoning** of the well and the stream. The prevention is the disposal of the waste, the clean water, and the **immunization** of the child."},
    {k:"rule"},
    {k:"h3", t:"Water Supply: The Cycle, the Sources and the Treatment"},
    {k:"p", t:"The **water cycle** is the round that the water goes, without the stop: the **evaporation** of the sea and the river by the sun, the **condensation** of the vapour into the cloud, the **precipitation** of the rain and the snow, the **collection** in the river, the lake and the ground, and the evaporation again. The cycle renews the water of the earth — the same water that the first man drank."},
    {k:"p", t:"The **water table** is the upper level of the water that soaks into the ground (the **groundwater**): below it, the hole is filled with the water, and above it, the soil is only damp. The **well** and the **borehole** are dug and bored down through the dry soil to the water table, and the bucket or the pump draws the water up."},
    {k:"p", t:"The **sources of the water supply:** the **rain** (caught in the tank from the roof), the **river and the stream**, the **well and the borehole** (the groundwater), the **spring** (the water that comes up from the ground of its own), and the **dam** (the river held back by the wall, that the town draws from). The source is **safe** when it is protected from the waste (the well that is covered and ringed, the stream that is not the place of the defecation and of the washing), and **unsafe** when the faeces, the garbage and the poison of the farm reach it."},
    {k:"p", t:"The **treatment of the water** for the drinking:"},
    {k:"num", items:[
      "**Sedimentation** — the water is held, and the mud and the sand sink to the bottom.",
      "**Filtration** — the water is passed through the sand and the gravel (the filter bed of the town), that catches the fine particle and much of the germ.",
      "**Chlorination** — the little of the chlorine (the bleaching powder, the gas) is added, that kills the germ that the filter left.",
      "**Boiling** — the water of the house is boiled for the minute or two, that kills the germ before it is drunk."
    ]},
    {k:"p", t:"The **transportation of the water** to the people is by the **pipe** (the main and the branch, from the treatment works to the standpipe and to the house), the **tank** on the roof of the house, and the **carrier** (the can and the jerrican, that the woman carries from the well and the stream, when the pipe is not there)."},
    {k:"rule"},
    {k:"h3", t:"Water as a Solvent: Hard and Soft Water, and the pH"},
    {k:"p", t:"Water is the **universal solvent** — it dissolves more substance than any other liquid: the salt, the sugar, the lime, and the mineral of the rock that the rain wears. Because of what it has dissolved, the water is of two kinds:"},
    {k:"cols", a:[
      "**Soft water** — the water with little or no salt of the calcium and the magnesium dissolved in it: the **rain water**, the **distilled** water, and much of the **well** water.",
      "It **lathers easily** with the soap (the rich lather, with little of the curd), and it cleans well."
    ], b:[
      "**Hard water** — the water that has dissolved the salt of the **calcium** and the **magnesium**, from the chalk and the gypsum that the rain has passed over: much of the **tap** water of the town, and the water of the well that goes through the limestone.",
      "It **wastes the soap** (the little lather, and the grey curd), and it leaves the **scale** (the deposit of the salt) in the kettle and the pipe."
    ]},
    {k:"p", t:"The **test for the hard and the soft water:** put the little of the soap in the two test tubes of the water, and shake. The water that gives the **rich lather** at once is the **soft** water; the water that gives the **scum (the curd)** before the lather, and needs much more of the soap, is the **hard** water. Another test: boil the water in the clean flask and let it cool — the hard water leaves the **white scale** on the side of the flask, and the soft water leaves none."},
    {k:"p", t:"The **pH** is the measure of how **acid** or how **alkaline** the substance is, on the scale of **0 to 14**: the **7 is the neutral** (the pure water), below the 7 is the **acid** (the lower, the stronger — the 1 of the hydrochloric acid, the 2 of the vinegar, the 3 of the lemon), and above the 7 is the **alkali (the base)** (the higher, the stronger — the 8 of the baking soda, the 11 of the soap, the 14 of the caustic soda). The **test** is by the **litmus paper** (the red that the acid turns blue→red… the blue litmus that the acid turns **red**, and the red litmus that the alkali turns **blue**) and by the **pH paper (the universal indicator)** that takes the colour of the number on the chart. The drinking water should be near the **7** (the 6.5 to the 8.5): the water that is too acid eats the pipe and the tooth, and the water that is too alkaline is bitter and hard."},
    {k:"rule"},
    {k:"h3", t:"The Uses of Water: Pressure, the Wheel and the Dam"},
    {k:"p", t:"The **water pressure** is the force that the water exerts, and it **increases with the depth** — the deeper in the water, the greater the pressure (the ear aches in the deep dive, and the dam is built **thick at the bottom** and thin at the top, for the pressure at the bottom is the greatest). Pour the water into the can with the three holes, one above the other, and the water from the **bottom** hole spurts the **farthest**."},
    {k:"p", t:"The **water wheel** is the wheel that the falling or the flowing water turns: the **overshot** wheel (the water poured on the top, that the weight of the water turns the wheel) and the **undershot** wheel (the water that strikes the bottom, that the flow turns the wheel). The wheel turns the **mill** (the grinding of the grain), the **saw**, and the small **generator** of the village, that the stream of the mountain lights."},
    {k:"p", t:"The **dam** is the wall that holds back the river, and makes the **reservoir**. Its **work:** it stores the water of the rainy season for the **dry** season (the drinking and the irrigation of the farm); it holds the **flood** back, so that the town below is not drowned; and the water that is let down through the **turbine** turns the generator, and gives the **hydro-electric power** (the power of the fall of the water). The height of the fall and the quantity of the water fix the power of the dam."},
    {k:"rule"},
    {k:"h3", t:"The Properties of Water: Adhesion, Cohesion and Surface Tension"},
    {k:"p", t:"The **cohesion** is the force that the particle of the water exerts on the other particle of the **water** — it holds the drop together in the round bead, and makes the water pull itself up in the fine tube (the **capillary** action, that carries the water from the root to the leaf of the tall tree)."},
    {k:"p", t:"The **adhesion** is the force that the particle of the water exerts on the particle of the **other substance** — it makes the water **wet** the glass and the cloth, and climb a little up the side of the glass that it is in (the **meniscus**, the curve of the surface of the water in the tube)."},
    {k:"p", t:"The **surface tension** is the **skin** that the surface of the water makes, by the cohesion of the particle at the top — it lets the **insect (the water strider)** walk on the water without the sinking, it makes the **drop** keep its shape until it is too heavy, and it lets the **needle of the steel** float on the water, when it is laid gently on the surface, for the needle is pushed down by the skin, not through it. The soap **breaks** the surface tension (the bubble, the lather), and that is why the soapy water wets and cleans."},
    {k:"rule"},
    {k:"h3", t:"Air Pressure and Fluid Pressure in Machines"},
    {k:"p", t:"The **air pressure** is the force that the **weight of the air** exerts on every surface. The air of the atmosphere presses on you with the force of about **one kilogram on every square centimetre** (the 100,000 newton on the square metre), and you do not feel it, for it presses the same on every side, and the air in your body presses back. The **effects** that we see: the **straw** (you suck the air out of the straw, and the pressure of the air on the water in the glass pushes the water up the straw to your mouth — it is not you that pulls the water, it is the air that pushes it); the **syringe** (the same principle, that the air pressure pushes the fluid out when the plunger is pressed); the **barometer** (the column of the mercury that the air pressure holds up, 76 cm at the sea level, and lower on the mountain); the **suction cup** (the air is squeezed out of the cup, and the pressure outside holds it to the wall); and the **teapot** (the hole in the lid, that lets the air in as the water goes out, so that the water does not choke in the pot)."},
    {k:"p", t:"The **fluid pressure** (the pressure of the liquid) works the **hydraulic machine**, by the **Pascal's principle**: the pressure that is put on the enclosed fluid is passed to every part of the fluid, and to the wall of the vessel. The **hydraulic machine** is the two pistons in the tube of the oil, one small and one large: the small force on the small piston makes the pressure in the oil, and the same pressure on the **large** piston gives the **large** force (the force is multiplied by the ratio of the area of the piston). The **applications:** the **car jack** (the small force of the handle raises the car on the large piston), the **car brake** (the force of the foot on the pedal is multiplied by the oil, and the brake pad is pressed on the disc), and the **hydraulic press** (that shapes the metal). The machine does not give the work for nothing — the small piston moves the **long** distance, to move the large piston the **short** distance."},
    {k:"rule"},
    {k:"h3", t:"Buoyancy: Density and Specific Gravity"},
    {k:"p", t:"The **buoyancy** is the **upthrust** (the push up) that the fluid (the liquid or the gas) exerts on the body that is put in it. The **Archimedes' principle:** the body that is immersed in the fluid is pushed up by a force that is **equal to the weight of the fluid that it displaces**. The body **sinks** when it is **heavier than the water it displaces** (its density is greater than the density of the water), and it **floats** when it is **lighter** (its density is less) — and the body that floats displaces its own **weight** of the water (the ship of the iron floats, for the iron is hollowed out, and the whole ship, with the air in it, is lighter than the water it pushes aside)."},
    {k:"p", t:"The **simple experiment of the buoyancy:** put the object in the pan of the water that is full to the brim, in the basin. The water that overflows (the water that the object **displaced**) is caught in the beaker, and its weight is measured — it is **equal to the upthrust** on the object, and to the **loss of weight** of the object in the water (the weight of the object in the air, minus the weight of the object in the water)."},
    {k:"p", t:"The **density** is the mass of the unit volume of the substance: **density = mass ÷ volume** (the kg/m³, or the g/cm³). The **specific gravity (the relative density)** is the density of the substance, compared with the density of the water: **specific gravity = the weight in the air ÷ the loss of weight in the water** (the weight of the object in the air, divided by the weight of the water that it displaces). The water has the specific gravity of **1**; the substance with the specific gravity **below the 1** floats on the water (the wood, the oil), and the substance with the specific gravity **above the 1** sinks (the stone, the iron). The **hydrometer** (the glass tube with the weight at the bottom, that floats in the liquid) reads the specific gravity: it floats **high** in the liquid that is dense (the salt water, the syrup), and **low** in the liquid that is light (the fresh water, the alcohol) — the farmer uses it to test the sugar of the cane juice, and the mechanic to test the acid of the battery."},
    {k:"rule"},
    {k:"h3", t:"Space: The Moon, the Eclipses and the Shooting Stars"},
    {k:"p", t:"The **relationship of the moon and the sun:** the moon has **no light of its own** — it **shines** by the light of the sun that it reflects, and it is the position of the moon, between the earth and the sun, that gives the **phase** (the new, the quarter, the full). The pull of the moon (and, less, the sun) on the water of the sea gives the **tide** — the rise and the fall of the sea, twice a day. The moon is the **stabilizer** of the earth: its pull holds the tilt of the axis of the earth steady, and the tilt gives us the **season**."},
    {k:"p", t:"The **surface of the moon** and the life: the surface is the grey dust and the rock, broken by the **crater** (the hole of the bowl, made by the strike of the meteoroid, over the ages) and by the **mountain** (the range that is higher than the mountain of the earth, for there is no rain and no river to wear them down). There is **no air** (no atmosphere to hold the heat, and no sound to carry), **no water** that is seen, and **no life** — the temperature is the **130°C by the day** and the **−170°C by the night**, for there is no air to carry the heat from the day to the night. The gravity on the moon is **one-sixth** of the gravity of the earth (the man jumps six times as high, and the rocket that lands there is light to lift). The **Apollo** man walked on the moon in the 1969, and left the footmark in the dust, that no wind will ever blur."},
    {k:"p", t:"The **eclipses** are caused by the shadow of one body on the other, in the line of the sun, the earth and the moon:"},
    {k:"bul", items:[
      "The **solar eclipse** — at the **new moon**, when the moon passes **between the earth and the sun**, and its shadow falls on the earth. The people in the shadow see the sun covered, by the day. It is the **total** (the corona of the sun shows round the black moon), the **partial** (part of the sun is covered), or the **annular** (the moon is too far, and the ring of the sun shows round it). It is the rare thing, in the one place, for the shadow of the moon is small.",
      "The **lunar eclipse** — at the **full moon**, when the **earth passes between the sun and the moon**, and the moon goes into the shadow of the earth. The moon is not gone, but turns the **red** (the copper color), for the light of the sun that reaches it is the red, that the air of the earth has refracted round the edge of the shadow. It is seen by all the side of the earth that the moon is up."
    ]},
    {k:"p", t:"The **meteoroid** is the piece of the rock and the dust that moves in the space (the small one, the size of the grain to the size of the house). When it enters the atmosphere of the earth, at the speed of the mile to the second, the air in front of it is compressed and heated to the white heat, and the meteoroid **burns** in the sky as the **shooting star (the meteor)** — the streak of the light, that is seen in the clear night. Most of it burns up, high in the air; the piece that survives and falls to the ground is the **meteorite**, that is found in the field, and that the scientist studies, for it is the matter of the space, older than the earth."},
    {k:"rule"},
    {k:"h3", t:"Farming in Liberia: The Types and Their Merits"},
    {k:"p", t:"**Farming (agriculture)** is the practice of growing the crop and rearing the animal, for the food and the wealth of the people. It is the first industry of Liberia, and the hand of the farmer feeds the nation and fills the port with the rubber, the coffee, the palm oil and the rice that the country sells."},
    {k:"p", t:"The **types of farming**:"},
    {k:"cols", a:[
      "The **family (the subsistence) farm** — the small plot, that the family works with the hand and the hoe, for the food of the house (the rice, the cassava, the vegetable, and the few of the animal) and the little that is sold at the market for the school fee.",
      "Its **merit:** it feeds the family, it uses the hand of the home (no wage is paid), and it keeps the seed and the way of the ancestor.",
      "Its **fault:** the small yield, for the tool is the hoe and the manure is little; it is at the mercy of the rain and of the price of the market; and the child leaves it for the city, for it does not pay the life."
    ], b:[
      "The **commercial farm** — the large holding, that is worked for the **sale** (the rubber, the coffee, the cacao, the rice, the palm oil, and the cattle), with the machine, the wage labour, and the money of the bank.",
      "It is of two kinds: the **private** farm (the company or the person, that owns the land and the means) and the **Government** farm (the estate of the state, that is worked for the wealth of the nation, and that teaches the way of the modern farming to the young farmer).",
      "Its **merit:** the great yield, by the machine and the good seed and the manure; it gives the wage to the labourer of the town; and it fills the port with the export, that brings the money to the country.",
      "Its **fault:** the money that it needs (the machine, the seed, the fuel), that the small farmer does not have; the risk of the price and of the weather, that falls on the one owner; and, where it is worked for the export alone, the food of the people is left to the small farm."
    ]},
    {k:"p", t:"The two types are not the enemy but the **complement**: the family farm feeds the village, and the commercial farm feeds the nation and the world, and the government that helps both — the family with the extension, the credit and the market, and the commercial with the road, the port and the law that is fair — is the government that feeds the Liberia."}
  ],
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
