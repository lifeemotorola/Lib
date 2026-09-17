/* Curriculum data — Republic of Liberia, SENIOR HIGH CHEMISTRY, Grades 10–12.
   Derived from the "Chemistry 10-12" senior high curriculum guide (60 pp.),
   6 periods per grade, 18 units. Where the guide sets two topics in one period
   they are merged into that period's unit, as the guide itself teaches them
   together.

   Every unit carries a `study[]` block list — the course text of the guide,
   rendered verbatim on the Study Notes page, with a comment noting the guide
   pages covered. `**bold**` marks the key terms; table cells take no markup
   because the renderer escapes them.

   Uses the SC_CURRICULUM unit shape so GEN_SC renders it unchanged, plus the
   optional `worked` field (calculations with steps) which GEN_SC renders only
   when present:
     grade · period · sem · icon · title · subtitle · outcomes[] · objectives[]
     · note · focus[] · terms[]{t,d,x} · facts[]{q,a} · tf[]{s,a,why}
     · classify{title,groups} · diagram{title,caption,parts}
     · experiment{title,aim,materials,steps,expect,why}
     · worked[]{q,steps[],a} · apply[]{q,a}
     · activities[] · materials[] · assessment[]

   Per the project rule the digital research links listed in the source guide
   (reviewgamezone.com, sciencegeek.net, funbrain.com, researchgate.net,
   khanacademy.com, dictionary.com) are omitted: the pack must stay offline.
   Textbooks named in the guide are retained as text references.
*/

var CH_CURRICULUM = [

/* ================================ GRADE 10 ================================ */
{
  grade:10, period:"I", sem:"One", icon:"⚗️",
  title:"Introduction to Chemistry; Matter and its Properties",
  subtitle:"The scientific method, units of measurement, symbols and formulae, laboratory safety, and the states of matter",
  outcomes:[
    "Learners are able to apply the scientific method in chemistry using relevant acquired skills to solve problems",
    "Learners are able to distinguish the properties and states of matter and classify substances correctly"
  ],
  objectives:[
    "Demonstrate knowledge about the origins and various stages in the development of chemistry",
    "Express appreciation for the scientific method",
    "Explain the word chemistry and other related terminologies",
    "Distinguish the systems of units of measurement and solve simple conversion problems",
    "Discuss the origin of symbols of elements and apply them to write formulae and names of compounds",
    "Apply the laboratory safety rules and identify apparatus in the laboratory",
    "Distinguish physical and chemical properties and changes, and classify matter"
  ],
  note:"<b>Chemistry</b> is the study of matter, its composition, properties and the changes it undergoes. The <b>scientific method</b> runs: observation → question → hypothesis → experiment → analysis → conclusion. The <b>SI base units</b> are the metre (length), kilogram (mass), second (time), kelvin (temperature) and mole (amount). <b>Matter</b> is anything that has mass and occupies space.",
  study:[
    /* ---- course text: Semester One, Period I — Introduction to Chemistry; Matter and its Properties (guide pp. 3-6) ---- */
    {k:"h3", t:"The Development of Chemistry"},
    {k:"p", t:"**Chemistry** is the study of matter and the changes it undergoes. Its development runs from the alchemists' fires and the metal-workers of old to the modern laboratory science. The **scientific method** is its engine — observe, question, hypothesize, experiment, conclude — and learners apply its steps to solve problems. Among the **contributors of chemistry** are Dalton, Mendeleev, Rutherford and Bohr; among its **branches**: organic, inorganic, physical, analytical and biochemistry."},
    {k:"h3", t:"The Scientific Method in Practice"},
    {k:"p", t:"A learner notices that palm wine sours faster in the hot dry season than in the rainy season (**observation**) and asks why. The **hypothesis**: the higher the temperature, the faster the microbes that sour the wine work. The **experiment** changes only the temperature — the **independent variable** — while the same wine, the same containers and the same timing are kept as the **control (constant) variables**, and the degree of souring, measured as the **dependent variable**, is recorded each day. The data go into a table and a graph (**analysis**), the **conclusion** accepts, revises or rejects the hypothesis, the result is **communicated** in a report, and other learners **repeat** the work to check it. A result that repeated experiments always show is stated as a **law**; a tested explanation that unites many such facts is a **theory** — a theory is the strongest form scientific knowledge takes, not a mere guess."},
    {k:"bul", items:[
      "**Observation** — what the senses or an instrument reveals, stated as fact",
      "**Question** — a specific, answerable problem drawn from the observation",
      "**Hypothesis** — a tentative, testable explanation that could be proved wrong",
      "**Experiment** — a controlled test in which only one variable is changed at a time",
      "**Analysis** — the data are organised into tables and graphs and the pattern read off",
      "**Conclusion** — the hypothesis accepted, revised or rejected",
      "**Communication and repetition** — the work reported so that others can check it"
    ]},
    {k:"rule"},
    {k:"h3", t:"Units of Measurement"},
    {k:"p", t:"Distinguish the **systems of units**: the SI (metric) system of the laboratory — mass in **kilograms**, length in **metres**, time in **seconds**, temperature in **kelvins/degrees**, volume in **litres or cubic metres** — and solve simple **conversion problems** between units. Write very large and very small measures in **scientific notation** and to the proper number of **significant figures**, and tell **precision** (how nearly repeated measures agree) from **accuracy** (how nearly they hit the true value), with standard deviation. Practise by measuring different objects — length, volume, time, mass, temperature and area — with rulers, tape rules, vernier calipers, the micrometer, stopwatches, balances and thermometers."},
    {k:"p", t:"**Working with the instruments:** read a liquid at the bottom of the **meniscus**, with the eye level with the liquid surface, to avoid **parallax error**; immerse the bulb of a thermometer fully in the substance being read; and set a balance to zero before weighing. The derived unit **density** = mass ÷ volume, in g/cm³ or kg/m³, is a fingerprint of a pure substance: a 52.0 g sample of liquid that occupies 40.0 cm³ has density 52.0 ÷ 40.0 = 1.30 g/cm³, given to two figures after the point because both measurements carry three significant figures. Density converts across unit systems — 1 g/cm³ = 1 000 kg/m³ — and the density of water at 4 °C, 1 g/cm³, is the reference for **relative density**, a pure number because it is a ratio of two densities: a metal of relative density 8.9 is 8.9 times as heavy as an equal volume of water."},
    {k:"rule"},
    {k:"h3", t:"Chemical Symbols, Formulae and Naming Compounds"},
    {k:"p", t:"The **origin of the symbols of the elements** lies with Berzelius: one or two letters, from the modern or the Latin name (Fe from ferrum, Na from natrium). Apply the symbols to write the **formulae** of compounds — the **types of formula**: empirical, molecular and structural — and to name compounds by the **IUPAC nomenclature**: the metal first, the non-metal ending in -ide; prefixes di-, tri-, tetra- where they are needed. Assignment: write the formula for the IUPAC names of some simple compounds."},
    {k:"p", t:"**Naming in practice:** NaCl is sodium chloride, CaO is calcium oxide, MgCl₂ is magnesium chloride — the metal first, the non-metal in -ide, subscripts ignored unless the metal can carry two charges, in which case Roman numerals name the charge: FeCl₂ is iron(II) chloride, FeCl₃ is iron(III) chloride, CuO is copper(II) oxide. Covalent compounds show their atom counts with Greek prefixes: CO is carbon monoxide, CO₂ is carbon dioxide, N₂O₅ is dinitrogen pentoxide. **Polyatomic ions** have fixed names to know: SO₄²⁻ sulfate, NO₃⁻ nitrate, CO₃²⁻ carbonate, PO₄³⁻ phosphate, OH⁻ hydroxide, NH₄⁺ ammonium — so Na₂CO₃ is sodium carbonate and (NH₄)₂SO₄ is ammonium sulfate. **Common names** that stay in everyday and industrial use: HCl hydrochloric acid, H₂SO₄ sulfuric acid, HNO₃ nitric acid, NaHCO₃ baking soda, CaCO₃ limestone or marble, NaOH caustic soda, Ca(OH)₂ slaked lime."},
    {k:"rule"},
    {k:"h3", t:"Apparatus and Safety Rules"},
    {k:"p", t:"In the laboratory, **identify and draw the apparatus** — beakers, flasks, test tubes, the Bunsen burner, pipettes and burettes — discuss **safety and the safety rules**: recognize the **safety and hazard signs** (flammable, toxic, corrosive), tie back hair, never taste a chemical, point no heated tube at anyone, and report every spill at once. Outline the format of a **lab report**: title, aim, apparatus, method, results, conclusion."},
    {k:"rule"},
    {k:"h3", t:"Matter and its Properties"},
    {k:"p", t:"**Matter** is anything that has mass and occupies space. The **states of matter and their changes** — solid, liquid and gas, passing by melting, evaporation, condensation, freezing and sublimation. Identify the **properties and changes of matter**: a **physical change** alters no substance (ice to water); a **chemical change** makes a new one (iron to rust). **Classification of mixtures**: solid-solid, solid-liquid and liquid-liquid."},
    {k:"p", t:"**Standard separation techniques for mixtures** — for solid-solid (handpicking, magnetism, dissolving), solid-liquid (filtration, evaporation) and liquid-liquid (distillation, the separating funnel); the **boiling point** reads for liquids and the **melting point** for solids, and a pure substance keeps its melting point sharp. In the lab, demonstrate experiments on chemical and physical changes, and apply the separation techniques to mixtures of ice, sand, salt and water."},
    {k:"h3", t:"Physical and Chemical Properties in Detail"},
    {k:"table", head:["Class","Examples","How it is recognised"], rows:[
      ["Physical property","Melting point, boiling point, density, colour, odour, solubility, electrical conductivity","Observed or measured without the substance becoming a different substance"],
      ["Chemical property","Flammability, reactivity with acids or with oxygen, toxicity, corrosion, oxidising power","Revealed only when the substance reacts and new substances are formed"]
    ]},
    {k:"p", t:"**Reading the examples:** ice melts at 0 °C — a physical property that doubles as its melting point; paper burns to ash and gases — flammability, a chemical property; iron left in damp air becomes reddish-brown rust, a new substance of new properties that no washing returns to iron — a chemical change; sugar dissolved in water is a physical change, because evaporating the water recovers the same sugar. The field signs of a chemical change: a colour change, a precipitate, a gas, a temperature change or light — and, above all, products that cannot be recovered by physical means."},
    {k:"h3", t:"Changes of State at the Particle Level"},
    {k:"p", t:"At the **melting point** of a pure solid the particles gain just enough energy to break free of their fixed positions; the temperature stays flat while solid and liquid coexist, because the heat goes into breaking the forces between particles rather than into speeding them up. At the **boiling point** bubbles form through the whole liquid, whereas **evaporation** happens only at the surface and at every temperature — which is why a puddle shrinks on a still day; and because the faster particles leave, evaporation **cools**: sweating, a wet cloth on a feverish forehead and the wet-bulb thermometer all rest on it. **Sublimation** is the direct solid-to-gas passage — camphor, naphthalene balls, and dry ice (solid carbon dioxide) — while **condensation** is the return from vapour to liquid, the beads on a cold drink bottle or frost forming on a cold night when water vapour goes straight to solid."},
    {k:"h3", t:"Choosing the Right Separation"},
    {k:"num", items:[
      "**Filter** an insoluble solid from a liquid — sand from water; the solid is the residue on the paper, the clear liquid the filtrate",
      "**Evaporate** the solvent to recover a dissolved solid — salt from sea water, done gently in an evaporating dish",
      "**Distil** to pull a volatile liquid away from dissolved solids, or to keep the liquid — fresh water from sea water, the vapour condensed in the condenser",
      "**Fractionally distil** two miscible liquids of different boiling points — the method by which petrol, kerosene and diesel are drawn off the petroleum fractions",
      "**Use a separating funnel** for two immiscible liquids — kerosene over water, the lower layer run off through the tap",
      "**Chromatograph** a mixture of dyes or plant pigments on paper, each component travelling its own distance with the solvent",
      "**Sublimate** a solid that passes to vapour without melting — iodine or naphthalene from sand, collected on a cool surface"
    ]}
  ],

  focus:[
    "Development of chemistry; the scientific method and its steps",
    "Contributors to chemistry and the branches of chemistry",
    "Systems of units; mass, length, time, temperature and volume",
    "Scientific notation, significant figures, precision and accuracy",
    "Origin of chemical symbols; writing formulae and naming compounds",
    "Laboratory apparatus and safety rules",
    "Matter: states, physical and chemical properties, and changes"
  ],
  terms:[
    {t:"chemistry", d:"the study of matter, its composition, properties and changes", x:"Chemistry explains why iron rusts."},
    {t:"matter", d:"anything that has mass and occupies space", x:"Air, water and iron are all matter."},
    {t:"scientific method", d:"the ordered procedure of investigation used in science", x:"The scientific method begins with observation."},
    {t:"hypothesis", d:"a testable proposed explanation", x:"A hypothesis must be capable of being disproved."},
    {t:"element", d:"a substance that cannot be broken into simpler substances chemically", x:"Oxygen is an element."},
    {t:"compound", d:"a substance of two or more elements chemically combined in fixed proportion", x:"Water is a compound."},
    {t:"mixture", d:"two or more substances physically combined in any proportion", x:"Air is a mixture of gases."},
    {t:"symbol", d:"a one- or two-letter abbreviation for an element", x:"The symbol for sodium is Na, from natrium."},
    {t:"chemical formula", d:"a representation of a compound using symbols and numbers", x:"The formula of water is H₂O."},
    {t:"physical property", d:"a property observed without changing the substance", x:"Melting point is a physical property."},
    {t:"chemical property", d:"a property describing how a substance reacts", x:"Flammability is a chemical property."},
    {t:"physical change", d:"a change in which no new substance is formed", x:"Melting ice is a physical change."},
    {t:"chemical change", d:"a change in which a new substance is formed", x:"Burning paper is a chemical change."},
    {t:"SI units", d:"the international system of base units of measurement", x:"The SI unit of mass is the kilogram."},
    {t:"scientific notation", d:"expressing a number as a coefficient times a power of ten", x:"6 020 becomes 6.02 × 10³."},
    {t:"significant figures", d:"the digits in a measurement known with certainty plus one estimated", x:"0.00420 has three significant figures."},
    {t:"accuracy", d:"how close a measurement is to the true value", x:"Accuracy is judged against a standard."},
    {t:"precision", d:"how close repeated measurements are to one another", x:"Precision concerns reproducibility, not correctness."},
    {t:"homogeneous", d:"having uniform composition throughout", x:"Salt solution is homogeneous."},
    {t:"heterogeneous", d:"having non-uniform composition", x:"Sand in water is heterogeneous."},
    {t:"meniscus", d:"the curved surface of a liquid in a narrow tube", x:"Read the burette at the bottom of the meniscus."},
    {t:"hazard symbol", d:"a sign warning of a specific laboratory danger", x:"A hazard symbol marks corrosive substances."}
  ],
  facts:[
    {q:"Define chemistry and name four of its branches.", a:"The study of matter, its composition, properties and changes. Its branches include organic, inorganic, physical, analytical and biochemistry."},
    {q:"State the steps of the scientific method in order.", a:"Observation, formulating a question, proposing a hypothesis, carrying out a controlled experiment, analysing the data, and drawing a conclusion which is then reported and repeated."},
    {q:"Name the SI base units for mass, length, time, temperature and amount of substance.", a:"Kilogram (kg), metre (m), second (s), kelvin (K) and mole (mol)."},
    {q:"State the difference between accuracy and precision.", a:"Accuracy is closeness to the true value; precision is closeness of repeated measurements to one another. A set of readings may be precise but inaccurate if the instrument is wrongly calibrated."},
    {q:"Where do chemical symbols come from? Give two examples from Latin.", a:"Many are the first letters of the English name, but several come from Latin names: Na from natrium (sodium), Fe from ferrum (iron), K from kalium (potassium), Ag from argentum (silver)."},
    {q:"State three differences between a compound and a mixture.", a:"A compound has its elements chemically combined in a fixed ratio, has properties different from its constituents, and can be separated only chemically; a mixture is physically combined in any ratio, keeps the properties of its constituents, and can be separated physically."},
    {q:"Distinguish a physical change from a chemical change and give an example of each.", a:"A physical change forms no new substance and is usually reversible, such as melting ice; a chemical change forms one or more new substances and is usually not easily reversed, such as burning wood."},
    {q:"State six laboratory safety rules.", a:"Never eat, drink or taste anything in the laboratory; wear eye protection and a lab coat; never work alone or without permission; add acid to water, never water to acid; point test tube mouths away from people when heating; and know the position of the fire extinguisher, sand bucket and first aid box."},
    {q:"Name four states of matter and describe the arrangement of particles in the first three.", a:"Solid, liquid, gas and plasma. In a solid the particles are closely packed in a fixed pattern and vibrate; in a liquid they are close but free to slide past one another; in a gas they are far apart and move rapidly and randomly."}
  ],
  tf:[
    {s:"A hypothesis must be testable.", a:"true", why:"A statement that cannot be tested or disproved lies outside the scientific method."},
    {s:"The SI unit of mass is the gram.", a:"false", why:"The SI base unit of mass is the kilogram; the gram is a submultiple of it."},
    {s:"Dissolving salt in water is a chemical change.", a:"false", why:"No new substance is formed and the salt can be recovered by evaporation, so it is a physical change."},
    {s:"A set of measurements can be precise but not accurate.", a:"true", why:"Readings may agree closely with each other yet all be shifted from the true value by a faulty instrument."},
    {s:"Water should always be added to concentrated acid.", a:"false", why:"Acid must be added slowly to water; the reverse causes violent spitting of hot acid."},
    {s:"Air is a mixture, not a compound.", a:"true", why:"Its gases are physically mixed in variable proportions and keep their own properties."},
    {s:"The symbol Fe for iron comes from its Latin name ferrum.", a:"true", why:"Several symbols derive from Latin rather than English names."}
  ],
  classify:{ title:"Sort these correctly", groups:[
    {name:"Elements", items:["oxygen","iron","sodium","carbon"]},
    {name:"Compounds", items:["water","common salt","carbon dioxide","calcium carbonate"]},
    {name:"Mixtures", items:["air","sea water","soil","brass"]},
    {name:"Physical changes", items:["melting ice","dissolving sugar","boiling water","crushing chalk"]},
    {name:"Chemical changes", items:["burning wood","rusting iron","souring milk","digesting food"]}
  ]},
  diagram:{ title:"Common laboratory apparatus", caption:"State the use of each piece of apparatus.", parts:[
    {p:"Beaker", f:"Holding, mixing and heating liquids in approximate volumes"},
    {p:"Conical flask", f:"Holding liquid during titration; the shape allows swirling without spilling"},
    {p:"Burette", f:"Delivering accurately measured variable volumes of liquid in titration"},
    {p:"Pipette", f:"Delivering one accurately fixed volume of liquid"},
    {p:"Measuring cylinder", f:"Measuring approximate volumes of liquid"},
    {p:"Bunsen burner", f:"Providing a controlled flame for heating"},
    {p:"Tripod and gauze", f:"Supporting apparatus over the flame and spreading the heat"},
    {p:"Evaporating dish", f:"Evaporating a solution to recover the dissolved solid"},
    {p:"Test tube holder", f:"Holding a hot test tube safely away from the hand"}
  ]},
  experiment:{
    title:"Separating a mixture of sand, salt and water",
    aim:"To separate the components of a mixture using filtration and evaporation, and to show that mixtures can be separated physically.",
    materials:["Mixture of sand and common salt","Distilled water","Beakers","Filter funnel and filter paper","Glass rod","Evaporating dish","Tripod, gauze and Bunsen burner","Balance"],
    steps:[
      "Weigh the dry mixture of sand and salt and record its mass.",
      "Add the mixture to about 50 cm3 of distilled water in a beaker and stir well to dissolve the salt.",
      "Fold a filter paper, place it in the funnel and filter the mixture into a clean beaker.",
      "Wash the residue on the paper with a little distilled water and allow it to drain.",
      "Transfer the filtrate to an evaporating dish and heat gently until crystals begin to appear, then remove the flame and allow it to dry.",
      "Weigh the dry sand and the recovered salt and compare with the original mass."
    ],
    expect:"The sand remains on the filter paper as the residue because it is insoluble, while the salt passes through dissolved in the filtrate. Evaporating the filtrate leaves white salt crystals in the dish. The combined masses of recovered sand and salt should be close to the original mass of the mixture.",
    why:"The components of a mixture keep their own properties, so a difference in solubility can be used to separate them physically without any chemical reaction. Because no new substance is formed, mass is conserved and both components can be recovered — the practical difference between a mixture and a compound."
  },
  worked:[
    {q:"Convert 2.5 kg to grams.", steps:["1 kg = 1000 g","2.5 × 1000"], a:"2500 g"},
    {q:"Convert 750 cm3 to dm3.", steps:["1 dm³ = 1000 cm³","750 ÷ 1000"], a:"0.750 dm³"},
    {q:"Express 0.000 045 6 in scientific notation.", steps:["Move the decimal point 5 places right","Coefficient 4.56, exponent −5"], a:"4.56 × 10⁻⁵"},
    {q:"Convert 27 °C to kelvin.", steps:["K = °C + 273","27 + 273"], a:"300 K"},
    {q:"How many significant figures are in 0.004 508?", steps:["Leading zeros are not significant","Count 4, 5, 0, 8"], a:"4 significant figures"},
    {q:"Convert 3.6 × 10⁴ mg to kilograms.", steps:["3.6 × 10⁴ mg = 36 000 mg","÷ 1000 = 36 g","÷ 1000 = 0.036 kg"], a:"0.036 kg"},
    {q:"A student measures 24.98 g, 25.02 g and 25.00 g. The true mass is 25.00 g. Comment on accuracy and precision.", steps:["Mean = 75.00 ÷ 3 = 25.00 g","Spread is only 0.04 g","Mean equals the true value"], a:"Both accurate and precise"},
    {q:"Write the formula of calcium carbonate given Ca²⁺ and CO₃²⁻.", steps:["Charges are +2 and −2","They balance one to one"], a:"CaCO₃"}
  ],
  apply:[
    {q:"A learner heats a test tube pointing towards a classmate. State the danger and the correct practice.", a:"Boiling liquid can spurt out and scald or splash chemicals into the classmate's face. The mouth of the tube must always point away from everyone, and the tube should be moved gently in and out of the flame."},
    {q:"Why is it dangerous to add water to concentrated sulfuric acid?", a:"Dilution releases a great deal of heat; water added on top boils instantly and throws hot concentrated acid out of the vessel. Acid must be added slowly to water, which absorbs and spreads the heat."},
    {q:"A gold trader claims a nugget is pure gold. Suggest a physical property that could test the claim without destroying it.", a:"Measure its density by weighing it and finding its volume by displacement; pure gold has a density of about 19.3 g/cm3, so a markedly lower value shows the nugget is alloyed or false."},
    {q:"Explain why a burette rather than a measuring cylinder is used in titration.", a:"A burette delivers variable volumes to the nearest 0.05 cm3 and allows the flow to be stopped exactly at the end point, whereas a measuring cylinder gives only an approximate fixed reading."},
    {q:"Why must the same balance be used throughout a quantitative experiment?", a:"Different balances may have different systematic errors; using one balance keeps any error constant so that differences between readings remain valid."}
  ],
  activities:[
    "Calculation and conversion of units",
    "Writing formulae and IUPAC names of some simple compounds",
    "Field trip outside the classroom to observe the application of the scientific method",
    "LAB: discuss safety and safety rules; recognise and identify hazard signs",
    "LAB: draw and name the common laboratory apparatus",
    "LAB: separate a mixture of sand, salt and water"
  ],
  materials:[
    "Primary text: Michael C. Cox and John Sadler, Senior Secondary Guide for Liberia — Chemistry (Star Books/Pearson, 2011)",
    "Chemistry: The Study of Change and Its Principles (Anderson et al., 2017)",
    "Secondary texts: Edexcel IGCSE Chemistry and Edexcel Mastering Chemistry (Pearson, 2010)",
    "Kobina Adu Lartson, Practical Chemistry for SSS (Sedco/Pearson, 1999)",
    "Laboratory apparatus, balance, hazard charts and safety equipment"
  ],
  assessment:["Presentation","Written assignment","Quiz","Identification of laboratory apparatus","Laboratory report"]
},
{
  grade:10, period:"II", sem:"One", icon:"⚛️",
  title:"Atomic Structure",
  subtitle:"Atomic theories, fundamental particles, isotopes, relative atomic mass, quantum numbers and electron configuration",
  outcomes:[
    "Learners are able to interpret the key concepts, theories and principles relating to atomic structure and apply these principles appropriately"
  ],
  objectives:[
    "Discuss contributors to atomic structure",
    "Explain the arrangement of the fundamental particles",
    "Discuss the concept of atomic theories",
    "Discuss atomic number and mass number and their relationship to isotopes",
    "Discuss the four quantum numbers",
    "Construct electronic configurations for atoms and ions",
    "Explain the rules and principles for filling in electrons"
  ],
  note:"An atom consists of a tiny dense <b>nucleus</b> of <b>protons</b> (+1, mass 1) and <b>neutrons</b> (0, mass 1), surrounded by <b>electrons</b> (−1, negligible mass). <b>Atomic number Z</b> = number of protons; <b>mass number A</b> = protons + neutrons. Electrons fill orbitals by the <b>Aufbau principle</b> (lowest energy first), the <b>Pauli exclusion principle</b> (maximum two electrons per orbital, opposite spins) and <b>Hund's rule</b> (singly occupy degenerate orbitals before pairing).",
  study:[
    /* ---- course text: Semester One, Period II — Atomic Structure (guide pp. 7-8) ---- */
    {k:"h3", t:"The History of Atomic Structure"},
    {k:"p", t:"The atom grew clearer through a line of experiments. **Dalton's atomic theory** (all matter is made of indivisible atoms; atoms of one element are alike; compounds join atoms in simple ratios) began modern chemistry. Then came the **discovery of the electron** in J. J. Thomson's cathode-ray work and of the nucleus: **Rutherford's gold foil experiment** (with Geiger and Marsden) fired alpha particles at gold leaf; most passed through, a few bounced back — so the atom is mostly empty space with a tiny, dense, positive **nucleus**. **Bohr's model of hydrogen** placed the electrons in fixed energy levels, like shelves around the nucleus."},
    {k:"p", t:"The missing pieces were found inside the nucleus. Rutherford fired alpha particles at nitrogen gas and knocked out hydrogen nuclei from it — the first artificial nuclear change — and named the hydrogen nucleus the **proton** (1919). The **neutron** followed in 1932 when James Chadwick showed that beryllium bombarded with alpha particles threw out an uncharged particle of about the proton's mass. Between the electron (1897) and the neutron (1932) stood Thomson's **plum-pudding model** — electrons embedded in a sphere of positive charge — which the gold foil results replaced, because only a small dense positive core could throw alpha particles back. In the modern **quantum-mechanical model** the electron is no longer a particle on a fixed path but a **probability cloud**: an orbital is the region where the electron is most likely to be found."},
    {k:"rule"},
    {k:"h3", t:"The Fundamental Particles and Their Arrangement"},
    {k:"table", head:["Particle","Charge","Relative mass","Position in the atom"], rows:[
      ["Proton","+1","1","In the nucleus"],
      ["Neutron","0","1","In the nucleus"],
      ["Electron","−1","1/1836","In the energy levels (shells) around the nucleus"]
    ]},
    {k:"p", t:"**The scale of the atom:** if an atom were blown up to a football stadium, the nucleus would be a pea at the centre and the electrons a fine dust of motes circling in the stands — the atom is over 99.9 % empty space, which is why it can be squeezed into solids and liquids with hardly any change of density. The proton and neutron each weigh about 1.67 × 10⁻²⁷ kg; the electron, 9.11 × 10⁻³¹ kg, is 1/1836 of that, so nearly all the atom's mass sits in the nucleus, and nearly all its charge balance sits in the electrons. Because the electron is so light, it is the **outer electrons alone** that chemistry acts on — chemical reactions rearrange electrons; they never touch the nucleus."},
    {k:"rule"},
    {k:"h3", t:"Atomic Number, Mass Number and Isotopes"},
    {k:"p", t:"The **atomic number** is the number of protons (and, in a neutral atom, of electrons); the **mass number** counts the protons and neutrons together. **Isotopes** are atoms of the same element — same atomic number — with different mass numbers because their neutrons differ. The **relative atomic mass** of an element is the weighted average of the masses of its isotopes; calculate it from mass-spectrometer data: multiply each mass number by its relative abundance, add, and divide by the total abundance."},
    {k:"p", t:"**Worked — chlorine:** the mass spectrometer finds two isotopes, chlorine-35 at 75 % and chlorine-37 at 25 %. Relative atomic mass = (35 × 75 + 37 × 25) ÷ 100 = (2625 + 925) ÷ 100 = 3550 ÷ 100 = **35.5**. That is why the periodic table lists 35.5 rather than a whole number — the table carries the weighted average, and it is the value to use in all mole and formula-mass calculations. **Isotopes in use:** uranium-235 is the fuel of nuclear reactors; iodine-131 traces the thyroid gland in medicine; cobalt-60 sterilises surgical instruments and treats cancer; tritium (hydrogen-3) marks watch dials; and carbon-14, whose half-life is 5 730 years, dates once-living objects — an artefact whose carbon-14 has fallen to one quarter of the living level is two half-lives old, about 11 500 years."},
    {k:"rule"},
    {k:"h3", t:"Quantum Numbers and Electron Configuration"},
    {k:"p", t:"The four **quantum numbers** describe each electron: the principal (the shell, its size and energy), the subsidiary (the orbital's **shape** — s spherical, p dumb-bell, d cloverleaf), the magnetic (the orbital's orientation in space), and the spin (the electron's own spin, up or down)."},
    {k:"p", t:"Construct **electron configurations** for atoms: the **rules and principles for filling in electrons** — the Aufbau principle (fill the lowest energy level first), the Pauli exclusion principle (no two electrons share all four quantum numbers), and Hund's rule (spread singly over equal orbitals before pairing). Write them in **dot notation**, **orbital notation**, **orbital diagrams**, the shorthand **noble-gas configuration**, and the **KLMNOPQ shell notation**. Assignment: prepare models of atoms using the Bohr model and simple molecules, and charts showing the shapes of the s, p and d orbitals."},
    {k:"p", t:"**Worked — chlorine (17Cl):** seventeen electrons fill in order of rising energy — 1s² 2s² 2p⁶ 3s² 3p⁵: the 2p block takes six, the 3s takes two, and the remaining five go into 3p — by Hund's rule, three orbitals singly first, then two pair up, leaving **one unpaired electron**. In shell notation this is (2, 8, 7): K=2, L=8, M=7. The seven outer electrons are the **valence electrons**, and they alone decide how chlorine reacts — it needs one more to complete its octet, which is why it forms the Cl⁻ ion and a single bond. In noble-gas shorthand the same atom is written [Ne] 3s² 3p⁵."},
    {k:"bul", items:[
      "Shell capacity follows 2n²: **K** (n=1) holds 2, **L** (n=2) holds 8, **M** (n=3) holds 18, **N** (n=4) holds 32",
      "The outer shell, however, is satisfied at **eight** (the octet) — or two for hydrogen — which is why sodium's third shell holds only one although it could hold eighteen",
      "An element's **group** counts its outer electrons and its **period** counts its shells: potassium (2, 8, 8, 1) sits in Group 1, Period 4"
    ]},
    {k:"h3", t:"Electronic Structure of Ions"},
    {k:"p", t:"Atoms form ions by moving **outer** electrons only, until the outer shell matches a noble gas. **Sodium, 11Na (2, 8, 1), loses one electron to become Na⁺ (2, 8)** — the neon arrangement; **chlorine, 17Cl (2, 8, 7), gains one to become Cl⁻ (2, 8, 8)** — the argon arrangement; **magnesium, 12Mg (2, 8, 2), loses two to become Mg²⁺ (2, 8)**; **oxygen, 8O (2, 6), gains two to become O²⁻ (2, 8)**. In every case the protons in the nucleus are untouched — an ion is the same element wearing a charge, and the charge simply counts the electrons gained (+) or lost (−). Cations are smaller than their parent atoms, anions larger, because the balance of nuclear pull on the remaining electrons shifts."}
  ],

  focus:[
    "History of atomic structure; Dalton's atomic theory",
    "Discovery of the electron and nucleus; Rutherford's gold foil experiment",
    "Bohr's model of hydrogen",
    "Fundamental particles and their arrangement",
    "Isotopes; atomic number and mass number",
    "Relative atomic mass and relative abundance",
    "The four quantum numbers",
    "Electron configuration and the rules for filling orbitals"
  ],
  terms:[
    {t:"atom", d:"the smallest particle of an element that retains its properties", x:"An atom of gold is still gold."},
    {t:"proton", d:"a positively charged particle in the nucleus", x:"The proton number defines the element."},
    {t:"neutron", d:"an uncharged particle in the nucleus", x:"Neutrons add mass but no charge."},
    {t:"electron", d:"a negatively charged particle outside the nucleus", x:"Electrons occupy orbitals."},
    {t:"nucleus", d:"the tiny dense positively charged centre of an atom", x:"Almost all the mass is in the nucleus."},
    {t:"atomic number", d:"the number of protons in an atom, symbol Z", x:"Carbon has atomic number 6."},
    {t:"mass number", d:"the total number of protons and neutrons, symbol A", x:"Carbon-12 has mass number 12."},
    {t:"isotope", d:"atoms of the same element with different numbers of neutrons", x:"Carbon-12 and carbon-14 are isotopes."},
    {t:"relative atomic mass", d:"the weighted average mass of the isotopes of an element", x:"Chlorine has a relative atomic mass of 35.5."},
    {t:"orbital", d:"a region of space where an electron is most likely to be found", x:"An s orbital is spherical."},
    {t:"shell", d:"a principal energy level occupied by electrons", x:"The first shell holds two electrons."},
    {t:"quantum number", d:"a number describing the state of an electron", x:"Four quantum numbers describe each electron."},
    {t:"Aufbau principle", d:"electrons fill the lowest energy orbitals first", x:"The Aufbau principle gives the filling order."},
    {t:"Pauli exclusion principle", d:"no two electrons in an atom have all four quantum numbers the same", x:"An orbital holds at most two electrons of opposite spin."},
    {t:"Hund's rule", d:"orbitals of equal energy are singly filled before pairing begins", x:"Hund's rule explains parallel spins."},
    {t:"electron configuration", d:"the arrangement of electrons in the orbitals of an atom", x:"Sodium is 1s2 2s2 2p6 3s1."},
    {t:"valence electron", d:"an electron in the outermost shell", x:"Valence electrons determine chemical behaviour."},
    {t:"cation", d:"a positively charged ion formed by losing electrons", x:"Na+ is a cation."},
    {t:"anion", d:"a negatively charged ion formed by gaining electrons", x:"Cl− is an anion."},
    {t:"mass spectrometer", d:"an instrument measuring isotopic masses and abundances", x:"Relative atomic mass is found with a mass spectrometer."}
  ],
  facts:[
    {q:"State the main points of Dalton's atomic theory.", a:"All matter consists of indivisible atoms; atoms of the same element are identical in mass and properties; atoms of different elements differ; atoms combine in simple whole-number ratios to form compounds; and atoms are neither created nor destroyed in a chemical reaction."},
    {q:"Describe Rutherford's gold foil experiment and what it proved.", a:"Alpha particles were fired at thin gold foil; most passed straight through, a few were deflected and very few bounced back. This showed the atom is mostly empty space with a tiny, dense, positively charged nucleus containing nearly all the mass."},
    {q:"Give the charge, mass and location of the three fundamental particles.", a:"Proton: charge +1, relative mass 1, in the nucleus. Neutron: charge 0, relative mass 1, in the nucleus. Electron: charge −1, relative mass about 1/1840, in orbitals outside the nucleus."},
    {q:"Define isotopes and give one example.", a:"Atoms of the same element with the same number of protons but different numbers of neutrons, so the same atomic number but different mass numbers — for example chlorine-35 and chlorine-37."},
    {q:"Why do isotopes of an element have identical chemical properties?", a:"Chemical behaviour is determined by the number and arrangement of electrons, which is the same for all isotopes of an element; only the nuclear mass differs."},
    {q:"Name the four quantum numbers and what each describes.", a:"The principal quantum number n gives the shell and size; the azimuthal number l gives the sub-shell and shape; the magnetic number m gives the orientation in space; and the spin number s gives the direction of electron spin."},
    {q:"State the three rules governing the filling of orbitals.", a:"The Aufbau principle — lowest energy orbitals fill first; the Pauli exclusion principle — an orbital holds a maximum of two electrons with opposite spins; and Hund's rule — orbitals of equal energy are each singly occupied before any is doubly occupied."},
    {q:"Write the full electron configuration of a potassium atom (Z = 19).", a:"1s2 2s2 2p6 3s2 3p6 4s1."},
    {q:"Explain why the electron configuration of Na+ differs from that of Na.", a:"Sodium loses its single 3s electron to form the ion, giving 1s2 2s2 2p6 — the stable configuration of neon."}
  ],
  tf:[
    {s:"Almost all the mass of an atom is concentrated in the nucleus.", a:"true", why:"Protons and neutrons carry essentially all the mass; electrons are about 1/1840 as heavy."},
    {s:"Isotopes of an element have different numbers of protons.", a:"false", why:"They have the same number of protons but different numbers of neutrons."},
    {s:"An orbital can hold a maximum of two electrons.", a:"true", why:"The Pauli exclusion principle requires them to have opposite spins."},
    {s:"Rutherford's experiment showed the atom is a solid sphere.", a:"false", why:"It showed the atom is mostly empty space with a tiny dense nucleus."},
    {s:"Hund's rule states that degenerate orbitals are singly filled before pairing.", a:"true", why:"This minimises repulsion between electrons of like charge."},
    {s:"The relative atomic mass of chlorine is not a whole number because it is a mixture of isotopes.", a:"true", why:"It is the weighted average of chlorine-35 and chlorine-37 in their natural abundances."}
  ],
  classify:{ title:"Sort these correctly", groups:[
    {name:"Found in the nucleus", items:["proton","neutron"]},
    {name:"Found outside the nucleus", items:["electron"]},
    {name:"Positively charged", items:["proton","cation","alpha particle"]},
    {name:"Rules for filling orbitals", items:["Aufbau principle","Pauli exclusion principle","Hund's rule"]},
    {name:"Quantum numbers", items:["principal n","azimuthal l","magnetic m","spin s"]}
  ]},
  diagram:{ title:"Structure of the atom", caption:"State what each labelled part is and what it contributes.", parts:[
    {p:"Nucleus", f:"Tiny dense positively charged centre holding nearly all the mass"},
    {p:"Proton", f:"Positive particle; its number is the atomic number and fixes the element"},
    {p:"Neutron", f:"Neutral particle adding mass and stabilising the nucleus"},
    {p:"Electron", f:"Negative particle in orbitals; determines chemical behaviour"},
    {p:"First shell (K)", f:"Nearest the nucleus, lowest energy, holds up to 2 electrons"},
    {p:"Second shell (L)", f:"Holds up to 8 electrons"},
    {p:"Valence shell", f:"Outermost occupied shell; its electrons take part in bonding"}
  ]},
  experiment:{
    title:"Building models of atoms using the Bohr model",
    aim:"To construct models showing the arrangement of protons, neutrons and electrons in the first twenty elements.",
    materials:["Cardboard or manila card","Beads, seeds or bottle tops of three colours","Glue and string","Compasses and ruler","Marker pens","Periodic table"],
    steps:[
      "Choose an element from the first twenty and look up its atomic number and mass number.",
      "Calculate the number of protons, neutrons and electrons it contains.",
      "Draw concentric circles on the card to represent the shells, using compasses.",
      "Place beads of one colour for protons and another for neutrons at the centre to form the nucleus.",
      "Attach beads of a third colour on the circles, filling 2 in the first shell, 8 in the second and 8 in the third.",
      "Label the model with the symbol, atomic number, mass number and electron configuration, and display it."
    ],
    expect:"Each completed model shows the nucleus at the centre containing protons and neutrons, with electrons arranged in shells of 2, 8, 8. The number of electrons equals the number of protons, so the atom is neutral overall, and the outermost shell shows the valence electrons of that element.",
    why:"The Bohr model makes visible the relationship between atomic number, electron arrangement and chemical behaviour. Elements in the same group are seen to have the same number of valence electrons, which is the structural reason for the repeating pattern of properties in the periodic table."
  },
  worked:[
    {q:"An atom has atomic number 17 and mass number 35. State its numbers of protons, neutrons and electrons.", steps:["Protons = Z = 17","Neutrons = A − Z = 35 − 17","Electrons = protons in a neutral atom"], a:"17 protons, 18 neutrons, 17 electrons"},
    {q:"Chlorine exists as 75% Cl-35 and 25% Cl-37. Calculate its relative atomic mass.", steps:["(35 × 75)/100 = 26.25","(37 × 25)/100 = 9.25","26.25 + 9.25"], a:"35.5"},
    {q:"Write the electron configuration of sulfur (Z = 16).", steps:["Fill 1s2 (2)","2s2 2p6 (10)","3s2 3p4 (16)"], a:"1s2 2s2 2p6 3s2 3p4"},
    {q:"Write the electron configuration of the ion Mg2+ (Z = 12).", steps:["Mg is 1s2 2s2 2p6 3s2","Lose 2 electrons from 3s"], a:"1s2 2s2 2p6"},
    {q:"How many neutrons are in an atom of uranium-238 (Z = 92)?", steps:["Neutrons = A − Z","238 − 92"], a:"146 neutrons"},
    {q:"An element has two isotopes of mass 63 (69%) and 65 (31%). Find its relative atomic mass.", steps:["(63 × 69)/100 = 43.47","(65 × 31)/100 = 20.15","43.47 + 20.15"], a:"63.6 (copper)"},
    {q:"State the maximum number of electrons in the shell where n = 3.", steps:["Maximum = 2n²","2 × 3² = 2 × 9"], a:"18 electrons"},
    {q:"Give the number of valence electrons in phosphorus (Z = 15).", steps:["Configuration 1s2 2s2 2p6 3s2 3p3","Outer shell n = 3 holds 3s2 3p3"], a:"5 valence electrons"}
  ],
  apply:[
    {q:"Why is carbon-14 used to date ancient wood while carbon-12 is not?", a:"Carbon-14 is radioactive and decays at a known constant rate, so the proportion remaining measures elapsed time; carbon-12 is stable and does not change, giving no clock."},
    {q:"An atom of an element has 11 protons and 12 neutrons. Identify it and predict its ion.", a:"Eleven protons make it sodium, mass number 23. With one valence electron it loses that electron to form Na+."},
    {q:"Explain why noble gases are chemically unreactive using electron configuration.", a:"Their outermost shells are completely filled, which is an especially stable arrangement, so they have little tendency to gain, lose or share electrons."},
    {q:"Two samples of copper from different mines give the same relative atomic mass. Explain why.", a:"The natural abundances of copper-63 and copper-65 are essentially constant worldwide, so the weighted average is the same regardless of source."},
    {q:"Why can a mass spectrometer distinguish isotopes but ordinary chemical tests cannot?", a:"A mass spectrometer separates ions by mass-to-charge ratio, and isotopes differ in mass; chemical tests depend on electron arrangement, which isotopes share."}
  ],
  activities:[
    "Study Thomson's, Rutherford's and Geiger-Marsden's experiments and Dalton's atomic theory",
    "Prepare models of atoms using the Bohr atomic model",
    "Calculate relative atomic mass using mass spectrometry data",
    "Prepare models of atoms and simple molecules",
    "Prepare charts and drawings showing electron configurations",
    "Practise writing electron configurations for atoms and ions"
  ],
  materials:[
    "Primary text: Michael C. Cox and John Sadler, Senior Secondary Guide for Liberia — Chemistry (Star Books/Pearson, 2011)",
    "Chemistry: The Study of Change and Its Principles (Anderson et al., 2017)",
    "Card, beads, seeds and bottle tops for atomic models",
    "Periodic table charts",
    "Dry cell batteries, wires, coins and other metallic and non-metallic objects"
  ],
  assessment:["Presentation","Written assignment","Quiz","Laboratory report","Class participation"]
},
{
  grade:10, period:"III", sem:"One", icon:"📊",
  title:"The Periodic Table and Periodic Chemistry",
  subtitle:"History of the periodic law, structure of the table, groups and periods, and periodic trends",
  outcomes:[
    "Learners are able to demonstrate knowledge of the periodic table and discuss the basic properties of the elements"
  ],
  objectives:[
    "Discuss the history and development of the periodic table",
    "Identify that elements are placed on the periodic table because of similar properties",
    "Identify the main blocks, groups and periods of the periodic table",
    "Discuss the chemical and physical properties of the groups",
    "Discuss the periodic trends",
    "Describe the elements of the first transition series"
  ],
  note:"The <b>periodic law</b> states that the properties of the elements are a periodic function of their <b>atomic numbers</b>. A <b>group</b> is a vertical column whose members share the same number of valence electrons and therefore similar chemistry; a <b>period</b> is a horizontal row. Across a period, atomic radius <b>decreases</b> while ionisation energy and electronegativity <b>increase</b>; down a group the reverse occurs.",
  study:[
    /* ---- course text: Semester One, Period III — The Periodic Table and Periodic Chemistry (guide pp. 9-11) ---- */
    {k:"h3", t:"History and Origin of the Periodic Law"},
    {k:"p", t:"The history and development of the **periodic table** runs from Döbereiner's triads and Newlands' octaves to **Mendeleev**, who arranged the elements by increasing mass and left gaps for elements not yet found — and the gaps filled, proving the **periodic law**: the properties of the elements recur periodically with their atomic number. Elements are placed on the periodic table because of their **similar properties**."},
    {k:"rule"},
    {k:"h3", t:"The Structure of the Periodic Table"},
    {k:"p", t:"Identify the main blocks, **groups and periods** of the periodic table: the **groups** are the vertical columns (same outer electrons, same family behaviour); the **periods** are the horizontal rows (a new shell each). The **metals** sit left and centre, the **non-metals** right, and the **metalloids** stand on the staircase between, sharing the properties of both. The blocks: the s-block, p-block, d-block (the transition metals) and f-block."},
    {k:"h3", t:"The Families by Name"},
    {k:"bul", items:[
      "**Group 1 — the alkali metals** (lithium, sodium, potassium, rubidium, caesium, francium): soft, low-density metals that react violently with water, each losing its single outer electron to a +1 ion; reactivity grows down the group",
      "**Group 2 — the alkaline earth metals** (beryllium, magnesium, calcium, strontium, barium): harder and denser than Group 1, forming +2 ions; calcium is in bones, magnesium in chlorophyll",
      "**Group 17 — the halogens** (fluorine, chlorine, bromine, iodine): reactive non-metals in diatomic molecules, each one electron short of an octet, forming −1 ions; chlorine is a pale green gas used to treat water",
      "**Group 18 — the noble gases** (helium, neon, argon, krypton, xenon): full outer shells make them famously **inert**; neon and argon light the sign tubes, helium fills balloons, argon shields the arc of a welding torch"
    ]},
    {k:"p", t:"**Locating an element from its structure:** the period number equals the number of occupied shells, and the group number counts the outer electrons — so an atom of (2, 8, 8, 2) stands in Period 4, Group 2 (it is calcium), and an atom of (2, 8, 7) stands in Period 3, Group 17 (it is chlorine). Two elements in the same group share their outer count and therefore their chemistry; two elements in the same period share a shell, so their sizes shrink across it as the nuclear charge climbs."},
    {k:"rule"},
    {k:"h3", t:"Trends in Periodic Properties"},
    {k:"table", head:["Property","Across a period","Down a group"], rows:[
      ["Electronegativity","Increases (the pull on bonding electrons grows)","Decreases"],
      ["Ionization energy","Increases (the outer electron is held more tightly)","Decreases"],
      ["Electron affinity","Generally increases toward the halogens","Generally decreases"],
      ["Atomic radius","Decreases (same shell, stronger nuclear pull)","Increases (a new shell each step)"],
      ["Metallic character","Decreases","Increases (non-metallic character fades)"]
    ]},
    {k:"p", t:"Bonding trends run with them: compounds pass from **ionic to covalent** character across a period, and **lattice energy** rises as the ions grow smaller and more highly charged. Plot these periodic trends from data in the lab."},
    {k:"p", t:"**Why the trends behave:** across a period the protons increase one by one while the electrons enter the **same** shell, so the nuclear pull on that shell tightens — atoms shrink, the outer electron is held harder (ionization energy and electronegativity rise). Down a group each new shell sits farther out and the inner shells **shield** the outer electrons from the nucleus, so despite the larger nuclear charge the outer electrons feel a weaker effective pull — atoms grow, ionization energy and electronegativity fall, and metallic character rises. **Shielding** is the one idea that explains the down-group arrows of the whole table."},
    {k:"p", t:"**The alkali metals meet water — a visible series:** lithium fizzes gently; sodium melts into a silver ball that darts across the surface; potassium ignites in a lilac flame; rubidium and caesium explode. The same shape of reaction runs through the group: 2Na + 2H₂O → 2NaOH + H₂ — the metal donates its outer electron, the hydroxide solution turns alkali, and the hydrogen burns if the metal is hot enough. Each step down gives more of the reaction, because each step down loses its outer electron more readily."},
    {k:"rule"},
    {k:"h3", t:"The Elements of the First Transition Series"},
    {k:"p", t:"The **first transition series** (scandium to zinc) shows the series' marks: all are hard, dense **metals** in the solid state; iron, cobalt and nickel are **magnetic**; they show **variable oxidation states**; they form **coloured compounds** (copper salts blue, iron(III) yellow-brown); and several serve as **catalysts** (iron in the Haber process, vanadium pentoxide in the Contact process)."},
    {k:"bul", items:[
      "**Coloured ions to know:** Cu²⁺ blue, Fe²⁺ pale green, Fe³⁺ yellow-brown, Cr³⁺ green, MnO₄⁻ (permanganate) deep purple, Co²⁺ pink — the colour comes from partially filled d-orbitals absorbing light",
      "**Variable oxidation states in one metal:** iron runs Fe²⁺ and Fe³⁺ in the same compounds (FeCl₂ and FeCl₃), copper runs Cu⁺ and Cu²⁺, manganese runs from +2 to +7 — the d-electrons can take part in bonding, not just the s-electron",
      "**Catalysts that earn their keep:** iron speeds ammonia synthesis (Haber process), vanadium pentoxide speeds sulfur trioxide formation (Contact process), nickel speeds hydrogenation of oils, platinum in a car's catalyst converts exhaust gases to harmless ones",
      "**Everyday presence:** iron in blood's haemoglobin and in steel; copper in wiring and in the blue of CuSO₄ fungicide; zinc in galvanised sheet and in carbon-zinc cells"
    ]},
    {k:"p", t:"**The table as a prediction machine:** because properties recur with structure, the position of an element predicts it — the undiscovered element left by Mendeleev in Group 14 was called **eka-silicon** from its predicted behaviour, and when germanium arrived it matched prediction within a few units. The same logic tells you in advance what a new element of Group 1 would be like — a soft, dense metal that reacts violently with water — and what a new noble gas of Group 18 would be like — a colourless, inert gas: that is how xenon's properties were expected before it was first bottled."},
  ],

  focus:[
    "History and origin of the periodic law; Mendeleev and Moseley",
    "Structure of the periodic table: groups, periods, blocks",
    "Metals, non-metals and metalloids",
    "Periodic trends: electronegativity, ionisation energy, electron affinity",
    "Atomic radius, metallic and non-metallic character",
    "Lattice energy and the change from ionic to covalent bonding",
    "Elements of the first transition series"
  ],
  terms:[
    {t:"periodic law", d:"the properties of elements are a periodic function of their atomic numbers", x:"The periodic law orders the table."},
    {t:"group", d:"a vertical column of the periodic table", x:"Group 1 contains the alkali metals."},
    {t:"period", d:"a horizontal row of the periodic table", x:"Period 3 runs from sodium to argon."},
    {t:"alkali metal", d:"a very reactive Group 1 metal with one valence electron", x:"Sodium is an alkali metal."},
    {t:"alkaline earth metal", d:"a Group 2 metal with two valence electrons", x:"Calcium is an alkaline earth metal."},
    {t:"halogen", d:"a reactive Group 17 non-metal with seven valence electrons", x:"Chlorine is a halogen."},
    {t:"noble gas", d:"an unreactive Group 18 element with a full outer shell", x:"Argon is a noble gas."},
    {t:"transition element", d:"a d-block element forming coloured compounds and variable oxidation states", x:"Iron is a transition element."},
    {t:"metalloid", d:"an element with properties between metals and non-metals", x:"Silicon is a metalloid."},
    {t:"atomic radius", d:"a measure of the size of an atom", x:"Atomic radius decreases across a period."},
    {t:"ionisation energy", d:"the energy needed to remove one mole of electrons from gaseous atoms", x:"Ionisation energy rises across a period."},
    {t:"electron affinity", d:"the energy change when an atom gains an electron", x:"Halogens have high electron affinity."},
    {t:"electronegativity", d:"the tendency of an atom to attract a shared electron pair", x:"Fluorine is the most electronegative element."},
    {t:"metallic character", d:"the tendency of an element to lose electrons and form cations", x:"Metallic character increases down a group."},
    {t:"lattice energy", d:"the energy released when gaseous ions form one mole of an ionic solid", x:"High lattice energy means a stable crystal."},
    {t:"shielding effect", d:"the reduction of nuclear attraction on outer electrons by inner shells", x:"Shielding increases down a group."},
    {t:"nuclear charge", d:"the total positive charge of the nucleus", x:"Effective nuclear charge grows across a period."},
    {t:"valence electron", d:"an electron in the outermost shell", x:"Group number relates to valence electrons."}
  ],
  facts:[
    {q:"State the periodic law.", a:"The physical and chemical properties of the elements are a periodic function of their atomic numbers."},
    {q:"What was Mendeleev's major contribution and how was it later corrected?", a:"Mendeleev arranged the elements by increasing atomic mass in order of repeating properties and left gaps for undiscovered elements. Moseley later showed the correct ordering principle is atomic number, which removed the anomalies."},
    {q:"How many groups and periods are there in the modern periodic table?", a:"Eighteen groups and seven periods."},
    {q:"Name the four blocks of the periodic table and the sub-shell being filled in each.", a:"The s-block (s sub-shell), p-block (p sub-shell), d-block (d sub-shell) and f-block (f sub-shell)."},
    {q:"State three physical properties of metals and three of non-metals.", a:"Metals are lustrous, malleable and ductile, and conduct heat and electricity. Non-metals are dull, brittle when solid, and are poor conductors — most are gases or low-melting solids."},
    {q:"Explain why atomic radius decreases across a period.", a:"Protons are added to the nucleus while electrons enter the same shell, so nuclear charge increases with little extra shielding and the outer electrons are pulled in more tightly."},
    {q:"Explain why atomic radius increases down a group.", a:"Each successive element has one more occupied shell, and the increased shielding by inner electrons offsets the greater nuclear charge, so the outer shell lies further from the nucleus."},
    {q:"State the trend in ionisation energy across a period and down a group, with reasons.", a:"It increases across a period because the outer electron is held more tightly by the growing nuclear charge; it decreases down a group because the outer electron is further away and better shielded."},
    {q:"State four characteristic properties of the first transition series.", a:"They are hard, dense metals with high melting points; they show variable oxidation states; they form coloured compounds and complex ions; and many are catalysts and show magnetic properties."},
    {q:"Why is fluorine the most electronegative element?", a:"It has a high nuclear charge with only one inner shell of shielding and a very small atomic radius, so it attracts a shared pair of electrons more strongly than any other element."}
  ],
  tf:[
    {s:"Elements in the same group have the same number of valence electrons.", a:"true", why:"This is why they share similar chemical properties."},
    {s:"Atomic radius increases across a period from left to right.", a:"false", why:"It decreases, because the increasing nuclear charge draws the same shell inward."},
    {s:"The modern periodic table is arranged in order of increasing atomic mass.", a:"false", why:"It is arranged by increasing atomic number, following Moseley's work."},
    {s:"Noble gases have complete outer shells.", a:"true", why:"That full-shell arrangement accounts for their very low reactivity."},
    {s:"Metallic character increases down a group.", a:"true", why:"The outer electron is further from the nucleus and more easily lost."},
    {s:"Transition elements show only one oxidation state.", a:"false", why:"They characteristically show several, because d and s electrons are close in energy."}
  ],
  classify:{ title:"Sort these elements and trends", groups:[
    {name:"Alkali metals (Group 1)", items:["lithium","sodium","potassium"]},
    {name:"Halogens (Group 17)", items:["fluorine","chlorine","bromine","iodine"]},
    {name:"Noble gases (Group 18)", items:["helium","neon","argon"]},
    {name:"Transition elements", items:["iron","copper","zinc","chromium"]},
    {name:"Increases across a period", items:["ionisation energy","electronegativity","non-metallic character"]},
    {name:"Increases down a group", items:["atomic radius","metallic character","shielding"]}
  ]},
  diagram:{ title:"Regions of the periodic table", caption:"State what is found in each labelled region.", parts:[
    {p:"Group 1", f:"Alkali metals: one valence electron, very reactive, form +1 ions"},
    {p:"Group 2", f:"Alkaline earth metals: two valence electrons, form +2 ions"},
    {p:"d-block", f:"Transition elements: variable oxidation states, coloured compounds, catalysts"},
    {p:"Group 17", f:"Halogens: seven valence electrons, very reactive non-metals, form −1 ions"},
    {p:"Group 18", f:"Noble gases: full outer shells, chemically inert"},
    {p:"Staircase line", f:"Divides metals on the left from non-metals on the right; metalloids lie along it"},
    {p:"f-block", f:"Lanthanide and actinide series placed below the main table"}
  ]},
  experiment:{
    title:"Plotting periodic trends from data",
    aim:"To plot atomic radius and ionisation energy against atomic number and identify the periodic pattern.",
    materials:["Data table of atomic radii and first ionisation energies for elements 1 to 20","Graph paper","Ruler and sharp pencil","Coloured pencils","Periodic table"],
    steps:[
      "Rule axes on graph paper with atomic number on the horizontal axis and atomic radius on the vertical axis.",
      "Plot the atomic radius of each element from hydrogen to calcium and join the points with a smooth line.",
      "On a second grid plot first ionisation energy against atomic number for the same elements.",
      "Mark on both graphs where each new period begins.",
      "Identify the highest and lowest points on each curve and name those elements.",
      "Write two sentences describing the pattern seen in each graph."
    ],
    expect:"The atomic radius graph shows a saw-tooth pattern: radius falls steadily across each period, then jumps sharply at the start of the next period. The ionisation energy graph shows the opposite pattern, rising across each period with small dips, and falling sharply at each alkali metal. The peaks of ionisation energy fall on the noble gases and the troughs on the Group 1 metals.",
    why:"Both patterns arise from the same cause. Across a period the nuclear charge rises while electrons enter the same shell, so attraction increases: atoms get smaller and electrons are harder to remove. At the start of a new period a new shell begins further out with extra shielding, so radius jumps up and ionisation energy falls. This repeating pattern is the periodic law made visible."
  },
  worked:[
    {q:"An element has the configuration 1s2 2s2 2p6 3s2 3p1. Give its group and period.", steps:["Highest n = 3 so period 3","Three valence electrons, p-block"], a:"Group 13, Period 3 (aluminium)"},
    {q:"Arrange Na, Mg and Al in order of increasing atomic radius.", steps:["All in period 3","Radius decreases across a period"], a:"Al < Mg < Na"},
    {q:"Arrange Li, Na and K in order of increasing ionisation energy.", steps:["All in Group 1","Ionisation energy decreases down a group"], a:"K < Na < Li"},
    {q:"Which has the larger radius, Na or Na+? Explain by choosing the reason.", steps:["Na+ has lost its outer shell","Fewer shells means smaller"], a:"Na is larger than Na+"},
    {q:"An element has 2, 8, 7 electrons. Predict its group, charge on its ion and one property.", steps:["Seven valence electrons → Group 17","Gains one electron"], a:"Group 17, forms a −1 ion, a reactive non-metal (chlorine)"},
    {q:"State which of Cl and I is more electronegative and why.", steps:["Both Group 17","Electronegativity decreases down a group"], a:"Chlorine is more electronegative"},
    {q:"An element in period 4 has configuration ending 3d6 4s2. Identify the block and the element.", steps:["d sub-shell filling → d-block","Total electrons = 26"], a:"d-block, iron"}
  ],
  apply:[
    {q:"Why does sodium react more vigorously with water than lithium?", a:"Sodium's valence electron is in a shell further from the nucleus and better shielded, so it is lost more readily, making sodium the more reactive metal."},
    {q:"Predict the formula of the compound between an element in Group 2 and one in Group 17.", a:"The Group 2 element forms a 2+ ion and the Group 17 element a 1− ion, so two halide ions balance one metal ion, giving MX₂ — for example CaCl₂."},
    {q:"Mendeleev left gaps in his table. Why was this a strength rather than a weakness?", a:"The gaps were a prediction: he specified the properties of the missing elements, and when gallium and germanium were discovered they matched closely, which confirmed the underlying periodic law."},
    {q:"Explain why transition metals are widely used as catalysts.", a:"Their variable oxidation states allow them to accept and donate electrons readily, and their partly filled d orbitals let reactant molecules adsorb onto the surface, both of which provide alternative low-energy reaction pathways."},
    {q:"Silicon lies on the staircase line. Predict two of its properties and one use.", a:"As a metalloid it has a metallic lustre but is brittle like a non-metal, and it is a semiconductor — conducting only under certain conditions — which makes it the basis of computer chips and solar cells."}
  ],
  activities:[
    "Draw each group of the periodic table: alkali metals, alkaline earth metals, transition metals, boron, carbon, nitrogen and oxygen families, halogens and noble gases",
    "Plot a graph of atomic number against ionic radius for period 2 and for the main group elements",
    "Use the graphs to explain the periodic trends",
    "Discuss the physical states, metallic and magnetic properties of the first transition series",
    "Prepare a large wall chart of the periodic table"
  ],
  materials:[
    "Primary text: Michael C. Cox and John Sadler, Senior Secondary Guide for Liberia — Chemistry (Star Books/Pearson, 2011)",
    "Chemistry: The Study of Change and Its Principles (Anderson et al., 2017)",
    "Periodic table charts and data tables",
    "Graph paper, rulers and coloured pencils",
    "Samples of common elements where available"
  ],
  assessment:["Presentation","Written assignment","Quiz","Graph plotting exercise","Class participation"]
},
{
  grade:10, period:"IV", sem:"Two", icon:"🔗",
  title:"Chemical Bonding",
  subtitle:"Ionic, covalent and metallic bonding, hybridisation, Lewis structures, polarity and molecular shape",
  outcomes:[
    "Learners are able to analyse the different types of chemical bonding, their properties and their molecular shapes"
  ],
  objectives:[
    "Distinguish the different types of chemical bonding",
    "Discuss hybridisation of atomic orbitals",
    "Demonstrate the types of bonding of molecules using Lewis structures",
    "Discuss electronegativity relative to the concept of bond polarity",
    "Discuss molecular geometry",
    "Distinguish between inter-atomic bonding and intermolecular forces"
  ],
  note:"Atoms bond to attain a stable outer shell — the <b>octet rule</b>. In <b>ionic bonding</b> electrons are transferred from metal to non-metal, giving oppositely charged ions held by electrostatic attraction. In <b>covalent bonding</b> electrons are shared. <b>Metallic bonding</b> is a lattice of cations in a sea of delocalised electrons. Molecular shape follows <b>VSEPR</b>: electron pairs repel and arrange as far apart as possible.",
  study:[
    /* ---- course text: Semester One, Period IV — Chemical Bonding (guide pp. 12-14) ---- */
    {k:"h3", t:"Bonding Types — Ionic Bonding"},
    {k:"p", t:"An **ionic bond** forms when one atom **transfers** electrons to another: a metal loses its outer electrons, a non-metal gains them, and the oppositely charged ions attract. Factors influencing its formation: a metal of low ionization energy meeting a non-metal of high electron affinity. **Properties of ionic compounds:** crystalline solids of high melting point, hard but brittle, conducting electricity when molten or dissolved (the ions are then free) but not when solid, and soluble in water. Draw electron-dot and orbital diagrams to illustrate ionic bond formation for different compounds."},
    {k:"p", t:"**Worked — forming NaCl and MgO:** sodium (2, 8, 1) gives its outer electron to chlorine (2, 8, 7), and Na⁺ and Cl⁻ pack into a lattice in which each ion touches six of the opposite charge; the 1:1 ratio follows the charges. Magnesium (2, 8, 2) gives two electrons, one each to two oxygens (2, 6), so MgO forms as Mg²⁺ : O²⁻, still 1:1. Doubly charged ions pull harder than singly charged ones — the **lattice energy** of MgO far exceeds that of NaCl, which is why MgO melts near 2 850 °C while NaCl melts at 801 °C. Ionic compounds are **brittle** because pushing one ion layer sideways brings like charges face to face and the crystal shears; and they dissolve in water because polar water molecules strip the ions loose one by one."},
    {k:"rule"},
    {k:"h3", t:"Metallic Bonding"},
    {k:"p", t:"In a metal the atoms surrender their outer electrons to a common **sea of delocalised electrons** surrounding a lattice of positive ions — the **electron-sea model**. This one idea explains the whole family portrait: the electrons roam, so metals **conduct electricity** in solid or liquid state and grow warm under current; the ions sit in layers that **slide** over one another without breaking the bond, so metals are **malleable** (hammerable into sheet) and **ductile** (drawn into wire); the same electrons absorb and re-emit light, giving the **metallic lustre**; and the strong collective pull of ions on the sea gives **high melting points and densities**. An **alloy** — metal mixed with another element, the foreign atoms distorting the layers — is harder than the pure metal, which is why brass beats copper and steel beats iron in the workshop."},
    {k:"rule"},
    {k:"h3", t:"Covalent Bonding, Bond Polarity and Hybridization"},
    {k:"p", t:"A **covalent bond** forms when two non-metal atoms **share** electron pairs — single, double and triple bonds by one, two or three shared pairs; use the models to illustrate them. Factors influencing its formation: two atoms of similar electronegativity, each short of a full outer shell. **Properties of covalent (molecular) compounds:** low melting and boiling points, soft, non-conductors, often insoluble in water but soluble in organic solvents."},
    {k:"p", t:"**Bond polarity:** when the sharing is unequal the bond is polar — work it from the **electronegativity difference**: the greater the difference, the more ionic the character; calculate the percentage ionic character. **Hybridization of atomic orbitals** — **sp³** (tetrahedral, as in methane), **sp²** (trigonal, as in ethene), **sp** (linear, as in ethyne) — explains how carbon keeps four equal bonds. Apply the **octet rule** to draw the basic **Lewis structures** of compounds, and from the electron-pair geometry tell the **molecular shapes** — linear, bent, trigonal planar, tetrahedral, pyramidal."},
    {k:"h3", t:"Intermolecular Forces — Between the Molecules"},
    {k:"table", head:["Force","Where it acts","Relative strength","What it shows up in"], rows:[
      ["Van der Waals (London dispersion)","Between all molecules, strongest in large or long-chain ones","Weakest","Iodine is a solid, bromine a liquid, chlorine a gas — same family, growing forces"],
      ["Dipole-dipole","Between permanent dipoles — polar molecules","Intermediate","HCl boils higher than F2 of similar mass; polar solvents dissolve polar solutes"],
      ["Hydrogen bond","H bonded to N, O or F, attracted to a lone pair of a neighbour","Strongest of the three","Water, ammonia and alcohols; the structure of DNA and proteins"]
    ]},
    {k:"p", t:"Intermolecular forces are **between** molecules, not the bonds **within** them — boiling water breaks hydrogen bonds between H₂O molecules, not the O–H covalent bonds, which is why the change is physical. The strength of these forces sets melting and boiling points, viscosity and surface tension: hydrogen fluoride, water and ammonia all boil far above their lighter relatives, and water's unusual high boiling point, high specific heat and high heat of vaporisation are hydrogen bonding at work — the reason life, and the coastal climate, behave as they do."},
    {k:"p", t:"**Polarity of the whole molecule:** a molecule can hold polar bonds and still be **non-polar** if the dipoles cancel by symmetry. **CO₂ is linear, O=C=O: the two C=O dipoles point opposite ways and cancel, so carbon dioxide has no overall dipole. H₂O is bent at about 104.5°: the two O–H dipoles add up, so water is a strong permanent dipole** — and that is why water dissolves salts and sugars, wets surfaces, and carries life's chemistry, while the non-polar CO₂ does none of these things. Methane (tetrahedral, H–C–H only) is non-polar; ammonia (pyramidal) is polar."},
    {k:"rule"},
    {k:"h3", t:"Laboratory — Properties Compared"},
    {k:"p", t:"Compare the **physical properties of ionic and covalent solids**; investigate the **polarity of some solvents**; investigate the effects of **heat, electricity and some solvents on covalent compounds**; and compare the boiling points of two liquids to show how **hydrogen bonding** affects boiling point — water's hydrogen bonds hold it liquid where its small mass says it should be a gas."},
    {k:"h3", t:"Worked — Drawing Lewis Structures"},
    {k:"num", items:[
      "Count the **valence electrons** of every atom: carbon 4, oxygen 6, hydrogen 1, chlorine 7 — add them (subtract one for each + charge, add one for each − charge)",
      "Lay the atoms out with the **least electronegative atom central** (carbon nearly always), joining them with single bonds",
      "Distribute the remaining electrons as **lone pairs** around the outer atoms until each owns an octet (duet for hydrogen)",
      "If the central atom is short, **share a lone pair as a double or triple bond**",
      "Check: every electron placed, every atom (save hydrogen) at eight"
    ]},
    {k:"p", t:"**Carbon dioxide:** 4 + 6 + 6 = 16 electrons. O–C–O single bonds use 4, leaving 12; the oxygens take six each, but carbon then has only four — so each oxygen donates one lone pair as a second bond: **O=C=O**, carbon at a full octet, 16 electrons placed. **Water:** 8 + 1 + 1 = 10 electrons; two O–H bonds use 4, oxygen keeps 6 as **two lone pairs** — the bent shape and the dipole follow from those lone pairs. **Ammonia:** 5 + 3 = 8; three N–H bonds and **one lone pair** on nitrogen — the pyramidal shape. The **coordinate (dative) bond** is the same sharing with both electrons from one atom: in NH₄⁺ the fourth hydrogen's pair comes from nitrogen's lone pair, written N→H."},
    {k:"h3", t:"Molecular Shapes at a Glance (VSEPR)"},
    {k:"bul", items:[
      "**Linear** — 2 bonding pairs, 0 lone pairs, 180°: CO₂, BeCl₂",
      "**Trigonal planar** — 3 bonding pairs, 120°: BF₃, the carbon of ethene",
      "**Tetrahedral** — 4 bonding pairs, 109.5°: CH₄, CCl₄",
      "**Trigonal pyramidal** — 3 bonding pairs + 1 lone pair, about 107°: NH₃, PH₃",
      "**Bent (angular)** — 2 bonding pairs + 2 lone pairs, about 104.5°: H₂O, H₂S",
      "Lone pairs crowd harder than bonding pairs, so **each lone pair closes the angle**: 109.5° → 107° → 104.5° down the last three examples"
    ]},
  ],

  focus:[
    "Ionic bonding: factors influencing formation and properties of ionic compounds",
    "Covalent bonding: factors influencing formation and properties of molecular compounds",
    "Hybridisation of atomic orbitals: sp3, sp2 and sp",
    "Lewis structures and the octet rule",
    "Electronegativity and bond polarity",
    "Molecular geometry and simple shapes",
    "Metallic bonding; inter-atomic versus intermolecular forces"
  ],
  terms:[
    {t:"chemical bond", d:"the force of attraction holding atoms together", x:"A chemical bond stores energy."},
    {t:"ionic bond", d:"electrostatic attraction between oppositely charged ions", x:"NaCl contains ionic bonds."},
    {t:"covalent bond", d:"a bond formed by sharing a pair of electrons", x:"A covalent bond joins the atoms in H₂."},
    {t:"metallic bond", d:"attraction between metal cations and delocalised electrons", x:"Metallic bonding explains conductivity."},
    {t:"octet rule", d:"atoms tend to attain eight electrons in the outer shell", x:"The octet rule guides Lewis structures."},
    {t:"Lewis structure", d:"a diagram showing valence electrons as dots and bonds as lines", x:"Draw the Lewis structure of CO₂."},
    {t:"lone pair", d:"a pair of valence electrons not used in bonding", x:"Water has two lone pairs on oxygen."},
    {t:"bonding pair", d:"a shared pair of electrons forming a bond", x:"A single bond is one bonding pair."},
    {t:"double bond", d:"a bond in which two pairs of electrons are shared", x:"Oxygen gas contains a double bond."},
    {t:"coordinate bond", d:"a covalent bond where both electrons come from one atom", x:"NH₄+ contains a coordinate bond."},
    {t:"hybridisation", d:"the mixing of atomic orbitals to form equivalent hybrid orbitals", x:"Carbon in methane is sp3 hybridised."},
    {t:"bond polarity", d:"unequal sharing of electrons due to electronegativity difference", x:"H–Cl is a polar bond."},
    {t:"dipole", d:"a separation of charge across a bond or molecule", x:"Water is a permanent dipole."},
    {t:"VSEPR", d:"valence shell electron pair repulsion theory predicting shape", x:"VSEPR predicts a bent water molecule."},
    {t:"molecular geometry", d:"the three-dimensional arrangement of atoms in a molecule", x:"Methane has tetrahedral geometry."},
    {t:"intermolecular force", d:"an attraction between separate molecules", x:"Hydrogen bonding is an intermolecular force."},
    {t:"hydrogen bond", d:"a strong dipole attraction involving H bonded to N, O or F", x:"Hydrogen bonding raises the boiling point of water."},
    {t:"van der Waals force", d:"a weak attraction between temporary dipoles", x:"Van der Waals forces hold iodine crystals."},
    {t:"lattice", d:"a regular repeating three-dimensional arrangement of particles", x:"Sodium chloride forms a giant ionic lattice."},
    {t:"delocalised electron", d:"an electron free to move through a structure", x:"Delocalised electrons carry current in metals."}
  ],
  facts:[
    {q:"State three differences between ionic and covalent compounds.", a:"Ionic compounds have high melting points, conduct electricity when molten or in solution, and are usually soluble in water; covalent molecular compounds have low melting points, do not conduct, and are often insoluble in water but soluble in organic solvents."},
    {q:"Explain how an ionic bond forms between sodium and chlorine.", a:"Sodium loses its single valence electron to become Na+, chlorine gains it to become Cl−, and the oppositely charged ions attract electrostatically, packing into a giant lattice."},
    {q:"Why do ionic compounds conduct electricity when molten but not when solid?", a:"Conduction requires mobile charged particles. In the solid the ions are locked in the lattice; melting frees them to move to the electrodes."},
    {q:"Explain the difference between sp3, sp2 and sp hybridisation with an example of each.", a:"sp3 mixes one s and three p orbitals giving four bonds at 109.5°, as in methane; sp2 mixes one s and two p giving three bonds at 120° in a plane, as in ethene; sp mixes one s and one p giving two bonds at 180°, as in ethyne."},
    {q:"State the shapes and bond angles of methane, ammonia and water, and explain the difference.", a:"Methane is tetrahedral at 109.5° with four bonding pairs; ammonia is trigonal pyramidal at about 107° with one lone pair; water is bent at about 104.5° with two lone pairs. Lone pairs repel more strongly than bonding pairs, so each one closes the bond angle further."},
    {q:"How does electronegativity difference determine bond type?", a:"A difference below about 0.4 gives a non-polar covalent bond, between 0.4 and 1.7 a polar covalent bond, and above about 1.7 predominantly ionic bonding."},
    {q:"Explain why metals conduct electricity and are malleable.", a:"Delocalised electrons move freely through the lattice carrying charge, and the layers of cations can slide over one another without breaking the bonding because the electron sea adjusts."},
    {q:"State the difference between inter-atomic bonds and intermolecular forces.", a:"Inter-atomic bonds — ionic, covalent, metallic — hold atoms together within a substance and are strong; intermolecular forces such as hydrogen bonds and van der Waals forces act between separate molecules and are much weaker, governing melting and boiling points."},
    {q:"Why is water a liquid at room temperature while hydrogen sulfide is a gas?", a:"Water molecules form strong hydrogen bonds because hydrogen is bonded to highly electronegative oxygen; H₂S has only weak dipole and van der Waals forces, so far less energy is needed to separate its molecules."}
  ],
  tf:[
    {s:"Ionic bonding involves the transfer of electrons.", a:"true", why:"Electrons pass from the metal to the non-metal, forming oppositely charged ions."},
    {s:"Covalent compounds generally conduct electricity in solution.", a:"false", why:"They contain no free ions or electrons, so they are non-conductors."},
    {s:"A lone pair repels more strongly than a bonding pair.", a:"true", why:"It is held by only one nucleus so occupies more space, which reduces the bond angle."},
    {s:"Methane is tetrahedral with bond angles of 90°.", a:"false", why:"It is tetrahedral with bond angles of 109.5°."},
    {s:"Hydrogen bonding is stronger than a covalent bond.", a:"false", why:"Hydrogen bonding is an intermolecular force, far weaker than a covalent bond."},
    {s:"Metals are malleable because layers of cations can slide past one another.", a:"true", why:"The delocalised electron sea keeps the structure bonded as the layers move."}
  ],
  classify:{ title:"Sort these substances and forces", groups:[
    {name:"Ionic compounds", items:["sodium chloride","magnesium oxide","calcium fluoride"]},
    {name:"Covalent molecular", items:["water","carbon dioxide","methane","iodine"]},
    {name:"Metallic", items:["copper","iron","aluminium"]},
    {name:"Intermolecular forces", items:["hydrogen bonding","van der Waals forces","dipole-dipole attraction"]},
    {name:"Molecular shapes", items:["linear","trigonal planar","tetrahedral","bent"]}
  ]},
  diagram:{ title:"Shapes of simple molecules", caption:"State the shape, bond angle and reason for each molecule.", parts:[
    {p:"Methane CH₄", f:"Tetrahedral, 109.5° — four bonding pairs, no lone pairs"},
    {p:"Ammonia NH₃", f:"Trigonal pyramidal, about 107° — three bonding pairs and one lone pair"},
    {p:"Water H₂O", f:"Bent, about 104.5° — two bonding pairs and two lone pairs"},
    {p:"Carbon dioxide CO₂", f:"Linear, 180° — two double bonds, no lone pairs on carbon"},
    {p:"Boron trifluoride BF₃", f:"Trigonal planar, 120° — three bonding pairs, no lone pairs"},
    {p:"Sodium chloride lattice", f:"Giant ionic lattice, each ion surrounded by six of opposite charge"}
  ]},
  experiment:{
    title:"Comparing the physical properties of ionic and covalent solids",
    aim:"To compare melting point, solubility and electrical conductivity of an ionic and a covalent solid.",
    materials:["Sodium chloride (ionic)","Candle wax or naphthalene (covalent)","Distilled water and kerosene or ethanol","Test tubes and rack","Crucible or metal spatula","Bunsen burner","Dry cell, bulb, wires and carbon electrodes","Beakers"],
    steps:[
      "Place a little of each solid on a separate spatula and heat gently in the flame. Record which melts quickly and which resists melting.",
      "Shake a spatula measure of each solid with distilled water in separate test tubes and record whether it dissolves.",
      "Repeat the solubility test with kerosene or ethanol in place of water.",
      "Set up a simple circuit with a dry cell, bulb and two carbon electrodes.",
      "Test conductivity of each solid in the dry state by touching the electrodes to it.",
      "Dissolve each in water where possible and test conductivity of the solution. Record all results in a table."
    ],
    expect:"Sodium chloride resists melting in a Bunsen flame, dissolves readily in water but not in kerosene, does not conduct as a dry solid but its solution lights the bulb. The wax melts almost at once, does not dissolve in water but dissolves in kerosene, and conducts neither as a solid nor in solution.",
    why:"Sodium chloride is a giant ionic lattice: many strong electrostatic forces must be overcome to melt it, its ions are stabilised by polar water molecules, and once free to move those ions carry current. Wax is a molecular solid held only by weak van der Waals forces, so little heat separates the molecules; being non-polar it dissolves in a non-polar solvent, and having no free ions or electrons it cannot conduct."
  },
  worked:[
    {q:"Predict the formula of the ionic compound formed between magnesium and chlorine.", steps:["Mg forms Mg2+","Cl forms Cl−","Two Cl− balance one Mg2+"], a:"MgCl₂"},
    {q:"Given electronegativities H = 2.1 and Cl = 3.0, find the difference and state the bond type.", steps:["3.0 − 2.1 = 0.9","0.4 < 0.9 < 1.7"], a:"0.9 — polar covalent"},
    {q:"Given Na = 0.9 and Cl = 3.0, classify the bond in NaCl.", steps:["3.0 − 0.9 = 2.1","2.1 > 1.7"], a:"2.1 — ionic"},
    {q:"How many bonding pairs and lone pairs surround the nitrogen in NH₃?", steps:["N has 5 valence electrons","3 shared with H, 2 remain"], a:"3 bonding pairs and 1 lone pair"},
    {q:"State the hybridisation of carbon in ethene, C₂H₄.", steps:["Each carbon forms 3 sigma bonds","One p orbital left for the pi bond"], a:"sp2"},
    {q:"Predict the shape of BeCl₂ using VSEPR.", steps:["Be has 2 bonding pairs, no lone pairs","Pairs repel to 180°"], a:"Linear"},
    {q:"How many electrons are shown in the Lewis structure of CO₂?", steps:["C contributes 4","Each O contributes 6","4 + 12"], a:"16 valence electrons"}
  ],
  apply:[
    {q:"Explain why graphite conducts electricity but diamond does not, though both are pure carbon.", a:"In graphite each carbon bonds to three others, leaving one delocalised electron per atom free to move between layers; in diamond all four valence electrons are locked in covalent bonds, so none is free to carry charge."},
    {q:"Why does ethanol mix with water but petrol does not?", a:"Ethanol has an –OH group that forms hydrogen bonds with water, so the molecules mix freely; petrol is non-polar and cannot form such bonds, so it separates as a layer."},
    {q:"A solid melts at 801 °C, dissolves in water and its solution conducts. Identify the bonding and justify.", a:"Ionic bonding: the very high melting point indicates a strong giant lattice, and conduction in solution shows mobile ions are released when the lattice breaks up."},
    {q:"Why is candle wax soft while sodium chloride is hard and brittle?", a:"Wax molecules are held by weak van der Waals forces easily overcome by pressure; NaCl has strong electrostatic forces in a rigid lattice, so it resists deformation but shatters when like charges are forced together."},
    {q:"Predict whether CCl₄ is a polar molecule, and explain.", a:"Each C–Cl bond is polar, but the four bonds point to the corners of a tetrahedron so the dipoles cancel exactly; the molecule as a whole is non-polar."}
  ],
  activities:[
    "Draw electron dot and orbital diagrams to illustrate ionic bond formation in different compounds",
    "Apply the octet rule to draw basic Lewis structures for compounds",
    "Calculate electronegativity difference and percentage ionic character to predict bond polarity",
    "Build models of simple molecules to show their shapes",
    "LAB: compare the physical properties of ionic and covalent solids",
    "LAB: test the conductivity of different solutions"
  ],
  materials:[
    "Primary text: Michael C. Cox and John Sadler, Senior Secondary Guide for Liberia — Chemistry (Star Books/Pearson, 2011)",
    "Molecular model kits or balls and sticks",
    "Sodium chloride, candle wax, naphthalene",
    "Dry cells, bulbs, wires and carbon electrodes",
    "Electronegativity data tables"
  ],
  assessment:["Presentation","Written assignment","Quiz","Laboratory report","Model building exercise"]
},
{
  grade:10, period:"V", sem:"Two", icon:"🧮",
  title:"Atoms, Molecules, Ions and Stoichiometry",
  subtitle:"Fundamental chemical laws, the mole concept, percentage composition, formulae and balancing equations",
  outcomes:[
    "Learners are able to identify the fundamental chemical laws, calculate the percentage of elements in compounds, discuss the mole concept, and master the techniques of balancing chemical equations"
  ],
  objectives:[
    "Distinguish the fundamental chemical laws",
    "Distinguish atoms, molecules and ions",
    "Discuss the mole concept",
    "Determine the percentage of elements in compounds",
    "Determine the empirical and molecular formula of a compound",
    "Discuss the kinds and types of chemical reactions",
    "Analyse the techniques in balancing chemical equations"
  ],
  note:"The <b>mole</b> is the amount of substance containing <b>6.02 × 10²³</b> particles — the <b>Avogadro constant</b>. Key relationships: <b>moles = mass ÷ molar mass</b>, <b>number of particles = moles × 6.02 × 10²³</b>, and for gases at s.t.p. <b>1 mole occupies 22.4 dm³</b>. Equations are balanced because of the <b>law of conservation of mass</b>: atoms are neither created nor destroyed.",
  study:[
    /* ---- course text: Semester Two, Period V — Atoms, Molecules, Ions and Stoichiometry (guide pp. 15-17) ---- */
    {k:"h3", t:"The Fundamental Chemical Laws"},
    {k:"p", t:"Three laws stand at the root of chemistry. The **law of conservation of mass** — matter is neither created nor destroyed in a reaction: the mass of the products equals the mass of the reactants. The **law of definite proportions** — all pure samples of a compound contain the same elements in the same proportions by mass. The **law of multiple proportions** — when two elements form more than one compound, the masses of one that combine with a fixed mass of the other are in a simple ratio (as in CO and CO₂). Demonstrate a lab to prove the fundamental chemical laws."},
    {k:"rule"},
    {k:"h3", t:"Atoms, Molecules and Ions"},
    {k:"p", t:"An **atom** is the smallest particle of an element that takes part in a reaction; a **molecule** is two or more atoms chemically joined (O₂, H₂O); an **ion** is a charged particle formed when an atom or group gains or loses electrons — cations are positive, anions negative."},
    {k:"p", t:"**Which substances are molecules and which are lattices:** covalent non-metal combinations exist as discrete molecules — O₂, N₂, Cl₂, H₂O, CO₂, H₂SO₄ — and their formula is a true **molecular formula**, one molecule's worth of atoms. Ionic combinations, and metals, exist as **giant lattices** with no single molecule: the formula NaCl is a **formula unit**, saying the lattice holds sodium and chlorine ions in a 1:1 ratio, not that a NaCl molecule floats about. The **relative formula mass** (Mᵣ) is the same arithmetic either way: add the relative atomic masses. H₂O: 1 + 1 + 16 = 18; CO₂: 12 + 16 + 16 = 44; NaCl: 23 + 35.5 = 58.5; CuSO₄·5H₂O: 63.5 + 32 + 64 + 5(18) = 249.5 ≈ 250 — the 5H₂O is **water of crystallisation**, locked into the blue copper sulfate lattice and lost as white anhydrous salt on heating."},
    {k:"rule"},
    {k:"h3", t:"The Mole Concept"},
    {k:"p", t:"The **mole** is chemistry's counting unit: one mole of any substance contains the Avogadro constant of particles (6.02 × 10²³) and weighs its molar mass in grams. Work the conversions in every direction: **mole-to-mole** (from the balanced equation's ratios), **mole-to-mass** and **mass-to-mass** (through the molar mass), and **mole-to-atom, particle or molecule** (through Avogadro's number). Demonstrate the mole concept in the lab."},
    {k:"p", t:"**Worked — 36 g of water:** moles = mass ÷ molar mass = 36 ÷ 18 = **2 mol of H₂O** = 2 × 6.02 × 10²³ = **1.204 × 10²⁴ molecules**. Each molecule carries two hydrogen atoms, so the sample holds 2 × 1.204 × 10²⁴ = **2.408 × 10²⁴ hydrogen atoms** and 1.204 × 10²⁴ oxygen atoms. The same chain works backward: 0.5 mol of CO₂ weighs 0.5 × 44 = 22 g and contains 0.5 × 6.02 × 10²³ molecules. In solution the mole converts to **moles per litre** (molarity): 18 g of H₂SO₄ (M = 98) dissolved to exactly 1.0 dm³ gives 0.184 mol ÷ 1.0 dm³ ≈ 0.18 mol/dm³."},
    {k:"p", t:"**The molar volume of a gas:** at STP (0 °C, 1 atm) one mole of **any** ideal gas occupies **22.4 dm³ (22 400 cm³)**; at room conditions it is about 24 dm³ — equal gases, equal volumes (Avogadro's law), because gas volume is set by how far apart the molecules sit, not by their size. So 11.2 dm³ of any gas at STP is 0.5 mol; 5.6 dm³ of oxygen at STP is 0.25 mol, weighing 0.25 × 32 = 8 g. **Gas density** follows at once: density = molar mass ÷ molar volume — oxygen, 32 ÷ 22.4 = 1.43 g/dm³ at STP, heavier than air (about 29 g/mol, 1.29 g/dm³), which is why an oxygen flame burns fiercer than an air flame."},
    {k:"rule"},
    {k:"h3", t:"Percentage Composition and the Formula of a Compound"},
    {k:"p", t:"**Percentage composition**: for each element in a compound, percentage = (mass of the element in one mole of the compound ÷ molar mass) × 100. From analysis backward: divide each element's percentage by its relative atomic mass, reduce to the simplest whole-number ratio — that is the **empirical formula**; multiply it to match the molar mass — that is the **molecular formula**. Determine the formula of a compound from its data; find empirical and molecular formulae across the exercises; in the lab, determine the empirical formula of magnesium oxide by burning magnesium in a crucible."},
    {k:"p", t:"**Worked — the composition of water:** in 18 g of H₂O the hydrogens weigh 2 g and the oxygen 16 g — so water is (2 ÷ 18) × 100 = **11.1 % hydrogen** and (16 ÷ 18) × 100 = **88.9 % oxygen** by mass. Copper sulfate pentahydrate, CuSO₄·5H₂O (M = 249.5), carries 90 g of water per 249.5 g — (90 ÷ 249.5) × 100 = **36.1 % water of crystallisation**: heat a blue sample and about a third of its mass walks out as steam, leaving the white anhydrous salt."},
    {k:"p", t:"**Worked — from analysis to formula:** a compound is found to be 40.0 % carbon, 6.7 % hydrogen and 53.3 % oxygen. Per 100 g: C 40.0 ÷ 12 = 3.33; H 6.7 ÷ 1 = 6.7; O 53.3 ÷ 16 = 3.33. Divide by the smallest (3.33): C 1, H 2, O 1 — the **empirical formula CH₂O**, whose mass is 30. The measured molar mass is 60, twice that, so the **molecular formula is C₂H₄O₂** — ethanoic acid, the acid of vinegar. In the magnesium-oxide lab the same arithmetic runs on masses: 0.60 g of Mg burns to 1.00 g of MgO, so 0.40 g of oxygen joined it — Mg 0.60 ÷ 24 = 0.025, O 0.40 ÷ 16 = 0.025, the 1:1 ratio giving MgO."},
    {k:"rule"},
    {k:"h3", t:"Chemical Reactions and Balancing Equations"},
    {k:"p", t:"The **kinds of chemical reactions**: combination (synthesis), decomposition, displacement, double decomposition, and redox. The **techniques in balancing chemical reactions**: write the correct formulae (never change a formula to balance), count the atoms on each side, fix the coefficients one element at a time — metals first, then non-metals, hydrogen, and oxygen last — and check the conservation of mass at the end. Present the fundamental laws and the calculations of percentage composition."},
    {k:"p", t:"**Worked — balancing:** photosynthesis is 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ — six carbons in, six out; twelve hydrogens in, twelve out; the oxygens balance at 12 each side only once the 6 sits before O₂. Burning butane: C₄H₁₀ + 6½O₂ → 4CO₂ + 5H₂O, doubled to whole numbers: **2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O**. Check by count: C 8 = 8, H 20 = 20, O 26 = 16 + 10. A balanced equation is a **molecular scoreboard**: 2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O says two molecules of butane need thirteen of oxygen — or two moles need thirteen moles, so 2 × 58 g of butane consumes 13 × 32 = 416 g of oxygen and gives 8 × 44 = 352 g of CO₂."},
    {k:"p", t:"**The limiting reactant and the yield:** in 2H₂ + O₂ → 2H₂O the recipe is two moles of hydrogen to one of oxygen. Give the reaction 4 g of hydrogen (2 mol) and 16 g of oxygen (0.5 mol) and oxygen is **limiting** — it is used up first, fixing the output: 0.5 mol O₂ makes 1.0 mol H₂O = **18 g of water**, while 2 g of hydrogen remains unburnt. The **theoretical yield** is that 18 g; if the flask actually catches 15 g, the **percentage yield** = (15 ÷ 18) × 100 = **83 %** — real reactions lose product to spillage, side reactions and incomplete mixing, which is why yields sit below 100 % and industry hunts for the processes that sit highest."},
  ],

  focus:[
    "Law of conservation of mass, definite proportions and multiple proportions",
    "Atoms, molecules and ions distinguished",
    "The mole concept: mole-mole, mole-mass, mass-mass, mole-particle",
    "Percentage composition by mass",
    "Molar mass; empirical and molecular formulae",
    "Kinds and types of chemical reactions",
    "Techniques of balancing chemical equations"
  ],
  terms:[
    {t:"mole", d:"the amount of substance containing 6.02 × 10^23 particles", x:"One mole of carbon has a mass of 12 g."},
    {t:"Avogadro constant", d:"the number of particles in one mole, 6.02 × 10^23", x:"The Avogadro constant links moles to particles."},
    {t:"molar mass", d:"the mass of one mole of a substance in grams", x:"The molar mass of water is 18 g/mol."},
    {t:"relative molecular mass", d:"the sum of the relative atomic masses in a molecule", x:"The relative molecular mass of CO2 is 44."},
    {t:"empirical formula", d:"the simplest whole-number ratio of atoms in a compound", x:"The empirical formula of benzene is CH."},
    {t:"molecular formula", d:"the actual number of atoms of each element in a molecule", x:"The molecular formula of benzene is C6H6."},
    {t:"percentage composition", d:"the percentage by mass of each element in a compound", x:"Water is 11.1% hydrogen by mass."},
    {t:"conservation of mass", d:"matter is neither created nor destroyed in a chemical reaction", x:"Conservation of mass requires balanced equations."},
    {t:"definite proportions", d:"a pure compound always contains the same elements in the same ratio by mass", x:"Water is always 8 parts oxygen to 1 part hydrogen."},
    {t:"multiple proportions", d:"when two elements form several compounds, the masses combining are in simple whole-number ratios", x:"CO and CO2 illustrate multiple proportions."},
    {t:"molecule", d:"two or more atoms chemically bonded together", x:"O2 is a diatomic molecule."},
    {t:"ion", d:"an atom or group of atoms carrying an electric charge", x:"SO4^2- is a polyatomic ion."},
    {t:"stoichiometry", d:"the calculation of quantities in chemical reactions", x:"Stoichiometry predicts the yield."},
    {t:"limiting reagent", d:"the reactant entirely used up, which limits the product formed", x:"The limiting reagent controls the yield."},
    {t:"excess reagent", d:"the reactant remaining after the reaction stops", x:"Some excess reagent is left over."},
    {t:"theoretical yield", d:"the maximum product calculable from the equation", x:"Actual yield is usually below theoretical yield."},
    {t:"percentage yield", d:"actual yield divided by theoretical yield, times 100", x:"A percentage yield of 85% is good."},
    {t:"molar volume", d:"the volume of one mole of gas, 22.4 dm3 at s.t.p.", x:"Molar volume links gas volume to moles."}
  ],
  facts:[
    {q:"State the law of conservation of mass.", a:"Matter is neither created nor destroyed in a chemical reaction; the total mass of the products equals the total mass of the reactants."},
    {q:"State the law of definite proportions with an example.", a:"A given pure compound always contains the same elements combined in the same proportion by mass. Water from any source is always 88.9% oxygen and 11.1% hydrogen by mass."},
    {q:"State the law of multiple proportions with an example.", a:"When two elements form more than one compound, the masses of one element combining with a fixed mass of the other are in a simple whole-number ratio. In CO and CO₂ the oxygen masses combining with 12 g of carbon are 16 g and 32 g, a ratio of 1:2."},
    {q:"Define the mole and state the Avogadro constant.", a:"The mole is the amount of substance containing as many elementary particles as there are atoms in 12 g of carbon-12, namely 6.02 × 10²³ — the Avogadro constant."},
    {q:"State the relationship between mass, moles and molar mass.", a:"Number of moles = mass in grams ÷ molar mass in g/mol."},
    {q:"What volume does one mole of any gas occupy at s.t.p.?", a:"22.4 dm³ (22 400 cm³) at standard temperature and pressure."},
    {q:"State the difference between empirical and molecular formula.", a:"The empirical formula gives the simplest whole-number ratio of atoms; the molecular formula gives the actual number of each atom in one molecule and is a whole-number multiple of the empirical formula."},
    {q:"Name five types of chemical reaction with a general equation for each.", a:"Combination A + B → AB; decomposition AB → A + B; displacement A + BC → AC + B; double decomposition AB + CD → AD + CB; and neutralisation acid + base → salt + water."},
    {q:"Outline the steps for balancing a chemical equation.", a:"Write the correct formulae of reactants and products; count the atoms of each element on both sides; adjust coefficients — never subscripts — starting with the most complex substance; balance hydrogen and oxygen last; then check every element and reduce the coefficients to their simplest ratio."},
    {q:"What is a limiting reagent and why does it matter?", a:"The reactant completely consumed first; it determines the maximum amount of product, since the reaction stops when it runs out however much of the other reactant remains."}
  ],
  tf:[
    {s:"One mole of any substance contains 6.02 × 10^23 particles.", a:"true", why:"That is the definition of the mole through the Avogadro constant."},
    {s:"When balancing an equation you may change the subscripts in a formula.", a:"false", why:"Changing subscripts changes the substance; only coefficients in front of formulae may be adjusted."},
    {s:"The empirical and molecular formulae of a compound are always different.", a:"false", why:"They are the same when the molecular formula is already in its simplest ratio, as for CO₂ and H₂O."},
    {s:"One mole of any gas occupies 22.4 dm3 at s.t.p.", a:"true", why:"Equal volumes of gases at the same temperature and pressure contain equal numbers of molecules."},
    {s:"The limiting reagent is the reactant present in the greatest mass.", a:"false", why:"It is the one that runs out first in terms of moles required by the equation, regardless of mass."},
    {s:"Percentage yield can exceed 100% in a correctly conducted experiment.", a:"false", why:"A figure above 100% indicates impure or wet product, or a measurement error."}
  ],
  classify:{ title:"Sort these reactions and quantities", groups:[
    {name:"Combination reactions", items:["2Mg + O2 → 2MgO","N2 + 3H2 → 2NH3"]},
    {name:"Decomposition reactions", items:["CaCO3 → CaO + CO2","2H2O2 → 2H2O + O2"]},
    {name:"Displacement reactions", items:["Zn + CuSO4 → ZnSO4 + Cu","Fe + CuSO4 → FeSO4 + Cu"]},
    {name:"Neutralisation", items:["HCl + NaOH → NaCl + H2O","H2SO4 + 2KOH → K2SO4 + 2H2O"]},
    {name:"The fundamental laws", items:["conservation of mass","definite proportions","multiple proportions"]}
  ]},
  diagram:{ title:"The mole map", caption:"State the conversion factor used along each route.", parts:[
    {p:"Mass to moles", f:"Divide the mass in grams by the molar mass in g/mol"},
    {p:"Moles to mass", f:"Multiply the number of moles by the molar mass"},
    {p:"Moles to particles", f:"Multiply by the Avogadro constant, 6.02 × 10^23"},
    {p:"Particles to moles", f:"Divide by the Avogadro constant"},
    {p:"Moles of gas to volume at s.t.p.", f:"Multiply by 22.4 dm3/mol"},
    {p:"Moles of A to moles of B", f:"Multiply by the mole ratio taken from the balanced equation"},
    {p:"Moles to concentration", f:"Divide the moles of solute by the volume of solution in dm3"}
  ]},
  experiment:{
    title:"Determining the empirical formula of magnesium oxide",
    aim:"To find by experiment the ratio in which magnesium combines with oxygen, and hence the empirical formula of magnesium oxide.",
    materials:["Clean magnesium ribbon about 10 cm","Crucible with lid","Pipe clay triangle and tripod","Bunsen burner","Tongs","Balance reading to 0.01 g","Emery paper"],
    steps:[
      "Clean the magnesium ribbon with emery paper to remove the oxide layer, then coil it loosely.",
      "Weigh the empty crucible with its lid and record the mass.",
      "Place the magnesium in the crucible, replace the lid, reweigh and record.",
      "Heat the covered crucible strongly on the pipe clay triangle, lifting the lid briefly at intervals with tongs to admit air without letting white smoke escape.",
      "Continue until no further reaction occurs, then allow the crucible to cool completely.",
      "Reweigh the crucible with its contents, and calculate the mass of magnesium and the mass of oxygen combined."
    ],
    expect:"The bright metal burns with an intense white flame to leave a white powder heavier than the original ribbon. Dividing the mass of each element by its relative atomic mass gives moles of Mg and O in a ratio close to 1:1, so the empirical formula is MgO. A ratio slightly below 1:1 for oxygen is common where some white smoke escaped.",
    why:"Mass is conserved, so the mass gained by the crucible is exactly the mass of oxygen that combined with the magnesium. Converting each mass to moles and taking the simplest ratio gives the empirical formula directly. The experiment also demonstrates the law of definite proportions, since the same ratio is obtained however much magnesium is used."
  },
  worked:[
    {q:"Calculate the molar mass of CaCO₃ (Ca = 40, C = 12, O = 16).", steps:["40 + 12 + (3 × 16)","40 + 12 + 48"], a:"100 g/mol"},
    {q:"How many moles are in 36 g of water (H₂O = 18)?", steps:["moles = mass ÷ molar mass","36 ÷ 18"], a:"2 moles"},
    {q:"What is the mass of 0.25 mol of NaOH (Na = 23, O = 16, H = 1)?", steps:["Molar mass = 40 g/mol","mass = 0.25 × 40"], a:"10 g"},
    {q:"How many molecules are in 2 moles of CO₂?", steps:["particles = moles × 6.02 × 10²³","2 × 6.02 × 10²³"], a:"1.204 × 10²⁴ molecules"},
    {q:"Calculate the percentage of oxygen in water (H₂O = 18).", steps:["Mass of O = 16","(16 ÷ 18) × 100"], a:"88.9%"},
    {q:"A compound contains 40% C, 6.7% H and 53.3% O. Find its empirical formula (C=12, H=1, O=16).", steps:["C: 40/12 = 3.33, H: 6.7/1 = 6.7, O: 53.3/16 = 3.33","Divide by 3.33 → 1 : 2 : 1"], a:"CH₂O"},
    {q:"The empirical formula is CH₂O and the relative molecular mass is 180. Find the molecular formula.", steps:["Empirical mass = 30","180 ÷ 30 = 6","Multiply subscripts by 6"], a:"C₆H₁₂O₆"},
    {q:"What volume does 0.5 mol of oxygen occupy at s.t.p.?", steps:["1 mol = 22.4 dm³","0.5 × 22.4"], a:"11.2 dm³"},
    {q:"Balance: Fe + O₂ → Fe₂O₃.", steps:["Balance Fe and O by inspection","4Fe + 3O₂ gives 2Fe₂O₃"], a:"4Fe + 3O₂ → 2Fe₂O₃"},
    {q:"How many grams of CO₂ form when 100 g of CaCO₃ decomposes fully? (CaCO₃ = 100, CO₂ = 44)", steps:["moles CaCO₃ = 100/100 = 1","1 mol gives 1 mol CO₂","mass = 1 × 44"], a:"44 g"}
  ],
  apply:[
    {q:"A student obtains 85 g of product when the calculation predicts 100 g. Calculate the percentage yield and suggest two reasons for the shortfall.", a:"Percentage yield = 85/100 × 100 = 85%. Losses occur through product left on the apparatus during transfer, incomplete reaction, or side reactions forming other products."},
    {q:"Why does a candle appear to lose mass when it burns, though mass is conserved?", a:"The products, carbon dioxide and water vapour, escape into the air and are not weighed. If the reaction were carried out in a sealed vessel the total mass would remain constant."},
    {q:"Explain why a chemist works in moles rather than in grams when planning a reaction.", a:"Substances react in fixed ratios of particles, not of mass. The mole converts a mass that can be weighed into a number of particles, so the balanced equation can be used directly."},
    {q:"Iron rusting causes a nail to gain mass. Reconcile this with conservation of mass.", a:"The nail combines with oxygen and water from the air, so the mass gained by the nail equals the mass of those reactants consumed; the total mass of the system is unchanged."},
    {q:"A fertiliser bag claims 21% nitrogen and the compound is (NH₄)₂SO₄. Check the claim. (N=14, H=1, S=32, O=16)", a:"Molar mass = (2 × 18) + 32 + 64 = 132. Nitrogen mass = 28. Percentage = 28/132 × 100 = 21.2%, so the claim is accurate."}
  ],
  activities:[
    "Presentation on the fundamental chemical laws",
    "Calculations of percentage composition",
    "LAB: demonstrate a laboratory experiment to prove the fundamental chemical laws",
    "LAB: determine the empirical formula of magnesium oxide",
    "Practise balancing chemical equations of all types",
    "Solve mole-mole, mole-mass and mass-mass problems"
  ],
  materials:[
    "Primary text: Michael C. Cox and John Sadler, Senior Secondary Guide for Liberia — Chemistry (Star Books/Pearson, 2011)",
    "Magnesium ribbon, crucibles, tongs and pipe clay triangles",
    "Balance reading to 0.01 g",
    "Bunsen burners and tripods",
    "Relative atomic mass tables and calculators"
  ],
  assessment:["Presentation","Written assignment","Quiz","Laboratory report","Problem-solving exercise"]
},
{
  grade:10, period:"VI", sem:"Two", icon:"🔋",
  title:"Oxidation-Reduction Reactions",
  subtitle:"Oxidation and reduction, oxidation numbers, oxidising and reducing agents, and balancing redox equations",
  outcomes:[
    "Learners are able to interpret oxidation-reduction reactions and balance simple redox equations"
  ],
  objectives:[
    "Discuss the terms oxidation and reduction",
    "Discuss the difference between oxidising and reducing agents",
    "Apply the concept of calculating oxidation numbers",
    "Apply the rules for balancing redox reactions in acidic and basic media",
    "Determine the mole ratio for a redox reaction experimentally"
  ],
  note:"<b>Oxidation is loss</b> of electrons; <b>reduction is gain</b> — remembered as <b>OIL RIG</b>. The species <b>oxidised</b> is the <b>reducing agent</b>; the species <b>reduced</b> is the <b>oxidising agent</b>. Oxidation number rules: free elements = 0; a simple ion = its charge; hydrogen = +1 (−1 in hydrides); oxygen = −2 (−1 in peroxides); and the sum over a neutral compound = 0, or the charge for an ion.",
  study:[
    /* ---- course text: Semester Two, Period VI — Oxidation-Reduction Reactions (guide pp. 18-19) ---- */
    {k:"h3", t:"Oxidation and Reduction"},
    {k:"p", t:"**Oxidation** is the **loss of electrons** (and, in the older terms, the gain of oxygen or the loss of hydrogen); **reduction** is the **gain of electrons** (the loss of oxygen or the gain of hydrogen). The two never occur apart: one species is **oxidized** while another is **reduced**, so we speak of **oxidation-reduction (redox) reactions**."},
    {k:"rule"},
    {k:"h3", t:"Oxidizing and Reducing Agents"},
    {k:"p", t:"The **oxidizing agent** is the substance that takes electrons — it oxidizes the other and is itself **reduced**. The **reducing agent** is the substance that gives electrons — it reduces the other and is itself **oxidized**. Keep the difference straight: the agent is named for what it does to its partner, not to itself."},
    {k:"rule"},
    {k:"h3", t:"Redox Around Us"},
    {k:"bul", items:[
      "**Combustion** — fuel is oxidized by oxygen: petrol, wood, kerosene all give their electrons to O₂, and the heat is the payoff; magnesium burning in air is the same story in a crucible",
      "**Respiration** — the body's controlled redox: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy, glucose oxidized cell by cell; **photosynthesis** runs the reverse with sunlight",
      "**Rusting** — iron oxidized by air and moisture to hydrated iron(III) oxide; painting, greasing or **galvanizing** (a sacrificial zinc coat) starve the reaction of oxygen or take the blow in zinc's place",
      "**Batteries and cells** — a redox reaction whose electrons are captured in a wire instead of wasted as heat: the zinc in a carbon-zinc cell is oxidized and does the work",
      "**Bleaching and disinfection** — chlorine and bleaching powder oxidize the coloured, odorous and living molecules in water and laundry; the same chemistry makes them dangerous in dose",
      "**Metallurgy** — every ore reduced to its metal is a redox: Fe₂O₃ + 3CO → 2Fe + 3CO₂ in the blast furnace, carbon monoxide the reducing agent"
    ]},
    {k:"rule"},
    {k:"h3", t:"Oxidation Numbers"},
    {k:"p", t:"Assign **oxidation numbers** by the rules: free elements are 0; a simple ion carries its charge; hydrogen is +1 (save in metal hydrides) and oxygen −2 (save in peroxides); fluorine is always −1; and the sum of the oxidation numbers equals the charge of the species. A rise in oxidation number is oxidation; a fall is reduction — the numbers find the redox in any equation. Exercise: determine the oxidation states for elements in various species."},
    {k:"p", t:"**Worked — reading the numbers:** in Fe₂O₃ the oxygens are 2(−2) = −4, so the two irons are +4 in total — **iron +3**. In SO₄²⁻ the oxygens are −8 and the ion is −2, so **sulfur +6** (its maximum, matching the six outer electrons given up). In KMnO₄ the potassium is +1 and the oxygens −8, so **manganese +7** — which is why permanganate is such a hungry oxidizer, ready to fall from +7. In H₂O₂ the rule bends: oxygen is **−1** in peroxides, not −2. In NaH the other exception shows: hydrogen is **−1** in metal hydrides. In NO₃⁻ the nitrogen works out to **+5**; in NH₃ to **−3**. And in the classic displacement 2Al + Fe₂O₃ → Al₂O₃ + 2Fe, aluminium climbs 0 → +3 (oxidized, the reducing agent) while iron falls +3 → 0 (reduced) — the thermite reaction that welds rail joints, driven entirely by that climb-and-fall."},
    {k:"rule"},
    {k:"h3", t:"Balancing Redox Equations"},
    {k:"p", t:"Apply the **rules for balancing redox reactions**, in acidic and in basic solutions: split the skeleton equation into the oxidation and reduction **half-equations**; balance the atoms (in acid, add H₂O and H⁺; in base, add H₂O and OH⁻); balance the charges with electrons; equalize the electrons lost and gained; add the half-equations and cancel. Practise by balancing simple redox equations in acidic and basic media."},
    {k:"rule"},
    {k:"h3", t:"Laboratory — the Zinc-Copper Displacement"},
    {k:"p", t:"Determine the **mole ratio**, and write the balanced equation, for the reaction between aqueous copper(II) sulfate and zinc metal: zinc gives its electrons to the copper(II) ions — **Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)** — a redox displacement in one-to-one ratio, the blue solution fading as the red copper coats the zinc."},
    {k:"h3", t:"Worked — Balancing a Redox Equation in Acid"},
    {k:"p", t:"Permanganate oxidizes iron(II) in acid: skeleton, MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺. **Oxidation half:** Fe²⁺ → Fe³⁺ + e (iron 2+ to 3+). **Reduction half:** MnO₄⁻ → Mn²⁺ — manganese +7 to +2, so five electrons arrive: MnO₄⁻ + 5e⁻ → Mn²⁺; balance oxygen with water (4 H₂O on the right) and hydrogen with acid (8 H⁺ on the left): **MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O**. Equalize electrons: the iron half gives one, so run it five times — 5Fe²⁺ → 5Fe³⁺ + 5e⁻. Add and cancel the five electrons: **MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺**. Check: 1 Mn, 4 O, 8 H and 5 Fe on each side, and the charge — left (−1) + 8(+1) + 5(+2) = +17, right (+2) + 5(+3) = +17 — so the equation balances in atoms **and** charge, the final test an atom count alone does not give."},
    {k:"p", t:"**Common oxidizing agents in the laboratory:** acidified **potassium permanganate**, purple, reduced to almost colourless Mn²⁺; acidified **potassium dichromate**, orange, reduced to green Cr³⁺ — both used to test for a reducing agent, and both change colour as they are reduced. **Chlorine water** oxidizes bromide to red-brown bromine and iodide to brown iodine. And on the reducing side: **sulfur dioxide**, **hydrogen sulfide** and **hydrosulfite** ions give up electrons readily — the pairs that let you build a displacement map of the whole halogen family: F₂ displaces Cl⁻, Cl₂ displaces Br⁻ and I⁻, Br₂ displaces I⁻, and no halogen displaces a halide above it."},
    {k:"p", t:"**Displacement and the activity order:** a metal pushes another out of solution only if it is more easily oxidized — more reactive. Iron goes into copper(II) sulfate and plates out the copper (Fe + Cu²⁺ → Fe²⁺ + Cu); copper goes into iron(II) sulfate and does nothing. The same ladder orders the metals with hydrogen: above it — zinc, iron — they liberate hydrogen from dilute acids; below it — copper, silver, gold — they do not, which is why gold sits inert in river sands while iron weathers. This activity series, built from displacement experiments, is the map that electrochemistry and metallurgy read from next year."},
  ],

  focus:[
    "Describing oxidation and reduction in terms of oxygen, hydrogen and electrons",
    "Rules for calculating oxidation numbers",
    "Oxidising and reducing agents identified",
    "Balancing simple redox equations",
    "Balancing redox equations in acidic and basic solutions",
    "Determining mole ratios experimentally"
  ],
  terms:[
    {t:"oxidation", d:"loss of electrons, increase in oxidation number", x:"Magnesium is oxidised when it burns."},
    {t:"reduction", d:"gain of electrons, decrease in oxidation number", x:"Copper ions are reduced to copper metal."},
    {t:"redox reaction", d:"a reaction in which oxidation and reduction occur together", x:"Displacement reactions are redox reactions."},
    {t:"oxidation number", d:"the apparent charge on an atom in a compound", x:"The oxidation number of Mn in MnO4- is +7."},
    {t:"oxidising agent", d:"the species that accepts electrons and is itself reduced", x:"Potassium permanganate is an oxidising agent."},
    {t:"reducing agent", d:"the species that donates electrons and is itself oxidised", x:"Zinc metal is a reducing agent."},
    {t:"half equation", d:"an equation showing only the oxidation or only the reduction", x:"Write the half equation for the anode."},
    {t:"disproportionation", d:"a reaction in which one species is both oxidised and reduced", x:"Chlorine in water shows disproportionation."},
    {t:"electron transfer", d:"the movement of electrons from one species to another", x:"Redox is defined by electron transfer."},
    {t:"displacement", d:"a reaction in which a more reactive element replaces a less reactive one", x:"Zinc displaces copper from its salt."},
    {t:"reactivity series", d:"an order of metals by their tendency to lose electrons", x:"The reactivity series predicts displacement."},
    {t:"corrosion", d:"the gradual oxidation of a metal by its environment", x:"Rusting is the corrosion of iron."},
    {t:"combustion", d:"rapid reaction with oxygen releasing heat and light", x:"Combustion of fuel is a redox process."},
    {t:"anode", d:"the electrode at which oxidation occurs", x:"Oxidation always occurs at the anode."},
    {t:"cathode", d:"the electrode at which reduction occurs", x:"Reduction always occurs at the cathode."},
    {t:"mole ratio", d:"the ratio in which substances react, from the balanced equation", x:"The mole ratio determines the quantities used."}
  ],
  facts:[
    {q:"Define oxidation and reduction in terms of electrons.", a:"Oxidation is the loss of electrons and reduction is the gain of electrons — summarised as OIL RIG."},
    {q:"State the rules for assigning oxidation numbers.", a:"A free element is 0; a monatomic ion equals its charge; hydrogen is +1 except −1 in metal hydrides; oxygen is −2 except −1 in peroxides; Group 1 is +1 and Group 2 is +2; fluorine is always −1; the sum in a neutral compound is 0 and in a polyatomic ion equals the ion's charge."},
    {q:"How do you identify the oxidising and reducing agents in a reaction?", a:"Assign oxidation numbers to every atom on both sides. The species whose oxidation number rises has been oxidised and is the reducing agent; the species whose number falls has been reduced and is the oxidising agent."},
    {q:"Give the oxidation number of manganese in KMnO₄ and show the working.", a:"K is +1 and each O is −2, giving −8 for four oxygens. For a neutral compound: +1 + Mn + (−8) = 0, so Mn = +7."},
    {q:"State the steps for balancing a redox equation in acidic solution.", a:"Split into two half equations; balance all atoms except O and H; add H₂O to balance oxygen; add H⁺ to balance hydrogen; add electrons to balance charge; multiply the half equations so the electrons cancel; then add them together and check."},
    {q:"How is the procedure modified for basic solution?", a:"Balance as for acid, then add to both sides the same number of OH⁻ ions as there are H⁺; combine H⁺ and OH⁻ into water and cancel any water appearing on both sides."},
    {q:"Explain why displacement of copper by zinc is a redox reaction.", a:"Zinc atoms lose two electrons to become Zn2+ (oxidised) while Cu2+ ions gain those two electrons to become copper metal (reduced), so electron transfer occurs."},
    {q:"Name three common oxidising agents and three common reducing agents.", a:"Oxidising: potassium permanganate, potassium dichromate, concentrated nitric acid, chlorine and oxygen. Reducing: hydrogen, carbon, carbon monoxide, and reactive metals such as zinc and magnesium."},
    {q:"What is disproportionation? Give an example.", a:"A reaction in which the same element is simultaneously oxidised and reduced. When chlorine dissolves in water, Cl₀ goes both to Cl⁻ (reduced) and to ClO⁻ (oxidised)."}
  ],
  tf:[
    {s:"Oxidation is the loss of electrons.", a:"true", why:"OIL RIG — Oxidation Is Loss, Reduction Is Gain."},
    {s:"The oxidising agent is itself oxidised in the reaction.", a:"false", why:"The oxidising agent accepts electrons and is therefore itself reduced."},
    {s:"The oxidation number of an element in its free state is zero.", a:"true", why:"There is no charge separation between identical atoms."},
    {s:"Oxidation and reduction can occur independently of one another.", a:"false", why:"Electrons lost by one species must be gained by another, so the two always occur together."},
    {s:"Oxygen usually has an oxidation number of −2.", a:"true", why:"The exceptions are peroxides, where it is −1, and compounds with fluorine."},
    {s:"Reduction occurs at the anode.", a:"false", why:"Oxidation occurs at the anode and reduction at the cathode."}
  ],
  classify:{ title:"Sort these species and processes", groups:[
    {name:"Common oxidising agents", items:["KMnO4","K2Cr2O7","concentrated HNO3","chlorine"]},
    {name:"Common reducing agents", items:["zinc metal","hydrogen","carbon","carbon monoxide"]},
    {name:"Oxidation processes", items:["Mg → Mg2+ + 2e-","loss of electrons","increase in oxidation number"]},
    {name:"Reduction processes", items:["Cu2+ + 2e- → Cu","gain of electrons","decrease in oxidation number"]}
  ]},
  diagram:{ title:"Electron transfer in a displacement reaction", caption:"State what happens at each labelled stage when zinc is added to copper(II) sulfate.", parts:[
    {p:"Zinc metal", f:"Zn atoms lose two electrons each; zinc is oxidised and is the reducing agent"},
    {p:"Zn2+ ions entering solution", f:"The solution gains colourless zinc ions as the metal dissolves"},
    {p:"Cu2+ ions in solution", f:"Blue ions accept the electrons released by zinc"},
    {p:"Copper deposited", f:"Cu2+ is reduced to brown copper metal that coats the zinc"},
    {p:"Fading blue colour", f:"Shows Cu2+ concentration falling as it is reduced"},
    {p:"Heat released", f:"The reaction is exothermic; the tube becomes warm"}
  ]},
  experiment:{
    title:"Displacement of copper by zinc: determining the mole ratio",
    aim:"To determine the mole ratio for the reaction between zinc metal and aqueous copper(II) sulfate and write the balanced equation.",
    materials:["Zinc powder or granulated zinc","0.5 mol/dm3 copper(II) sulfate solution","Beakers of 100 cm3","Filter funnel and paper","Balance to 0.01 g","Stirring rod","Distilled water","Drying oven or warm place"],
    steps:[
      "Weigh accurately about 1.3 g of zinc and record the exact mass.",
      "Measure 50 cm3 of 0.5 mol/dm3 copper(II) sulfate solution into a beaker and note its blue colour.",
      "Add the zinc a little at a time, stirring, and observe the colour of the solution and of the solid.",
      "Allow to stand until the blue colour has faded and no further change occurs.",
      "Filter off the solid, wash it with distilled water and dry it thoroughly.",
      "Weigh the dry copper and calculate the moles of zinc used and copper formed."
    ],
    expect:"The blue solution fades toward colourless and a brown deposit of copper forms on and around the zinc, while the beaker becomes warm. The moles of zinc consumed and the moles of copper produced are found to be approximately equal, giving a 1:1 mole ratio and the equation Zn + CuSO4 → ZnSO4 + Cu.",
    why:"Zinc is above copper in the reactivity series, so each zinc atom transfers two electrons to a copper(II) ion: Zn → Zn2+ + 2e− and Cu2+ + 2e− → Cu. Because both half reactions involve two electrons, the species react one to one, which is exactly what the measured masses confirm. The fading blue colour tracks the removal of Cu2+ from the solution."
  },
  worked:[
    {q:"Find the oxidation number of S in H₂SO₄.", steps:["H = +1 each (+2), O = −2 each (−8)","+2 + S − 8 = 0"], a:"S = +6"},
    {q:"Find the oxidation number of Cr in Cr₂O₇²⁻.", steps:["O = −2 each, 7 × (−2) = −14","2Cr − 14 = −2"], a:"Cr = +6"},
    {q:"Find the oxidation number of N in NH₄⁺.", steps:["H = +1 each (+4)","N + 4 = +1"], a:"N = −3"},
    {q:"In Fe + CuSO₄ → FeSO₄ + Cu, identify what is oxidised.", steps:["Fe goes 0 → +2","Increase in oxidation number"], a:"Fe is oxidised (it is the reducing agent)"},
    {q:"In the same reaction, name the oxidising agent.", steps:["Cu2+ goes +2 → 0","It gains electrons, so is reduced"], a:"Cu2+ (in CuSO₄)"},
    {q:"Write the oxidation half equation for magnesium burning.", steps:["Mg loses two electrons","Mg → Mg2+ + 2e−"], a:"Mg → Mg²⁺ + 2e⁻"},
    {q:"Balance the half equation MnO₄⁻ → Mn²⁺ in acid.", steps:["Add 4H₂O to balance O","Add 8H⁺ to balance H","Add 5e⁻ to balance charge"], a:"MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O"},
    {q:"Find the oxidation number of Cl in NaClO₃.", steps:["Na = +1, O = −2 each (−6)","+1 + Cl − 6 = 0"], a:"Cl = +5"}
  ],
  apply:[
    {q:"Explain why iron rusts faster near the sea and how galvanising prevents it.", a:"Salt in the air provides an electrolyte that speeds electron transfer, accelerating the oxidation of iron. Galvanising coats the iron with zinc, which is more reactive and is oxidised in preference, protecting the iron even if the coating is scratched."},
    {q:"Why is carbon used to extract iron from its ore in a blast furnace?", a:"Carbon and carbon monoxide are cheap reducing agents that remove oxygen from iron(III) oxide, reducing the iron to the metal while the carbon is oxidised to carbon dioxide."},
    {q:"Vitamin C is described as an antioxidant. Explain in redox terms.", a:"It is readily oxidised itself, so it donates electrons to harmful oxidising species and is consumed in their place, protecting other molecules from being oxidised."},
    {q:"A bleached cloth returns to a lighter colour permanently. Is bleaching oxidation or reduction?", a:"Oxidation: the bleaching agent oxidises the coloured molecules in the stain, breaking the bonds responsible for the colour so the substance no longer absorbs visible light."},
    {q:"Why does a piece of silver jewellery blacken over time?", a:"Silver is slowly oxidised by sulfur compounds in the air to form black silver sulfide on the surface; polishing removes the tarnish layer."}
  ],
  activities:[
    "Determine oxidation states for elements in various species",
    "Balance simple redox equations in acidic and basic media",
    "LAB: determine the mole ratio and write the balanced equation for the reaction between aqueous CuSO4 and Zn metal",
    "LAB: experiment on testing for reducing agents",
    "Identify oxidising and reducing agents in everyday processes",
    "Relate the reactivity series to displacement reactions"
  ],
  materials:[
    "Primary text: Michael C. Cox and John Sadler, Senior Secondary Guide for Liberia — Chemistry (Star Books/Pearson, 2011)",
    "Copper(II) sulfate solution, zinc metal and powder",
    "Potassium permanganate and potassium dichromate",
    "Beakers, filter funnels, balance",
    "Reactivity series charts"
  ],
  assessment:["Presentation","Written assignment","Quiz","Laboratory report","Problem-solving exercise"]
},

/* ================================ GRADE 11 ================================ */
{
  grade:11, period:"I", sem:"One", icon:"🧪",
  title:"Solution and Solubility",
  subtitle:"Types of solution, concentration units, dilution, colligative properties and colloids",
  outcomes:[
    "Learners are able to elaborate the properties of solutions and apply mathematical and laboratory techniques",
    "Learners are able to affirm a firm knowledge of solubility and demonstrate its practical applications"
  ],
  objectives:[
    "Discuss the types of solution",
    "Distinguish between dilute and concentrated solutions",
    "Analyse stock solutions and perform dilution calculations",
    "Analyse the various concentration units",
    "Describe the colligative properties of solutions",
    "Discuss colloids and the factors affecting solubility"
  ],
  note:"A <b>solution</b> is a homogeneous mixture of <b>solute</b> dissolved in <b>solvent</b>. <b>Molarity</b> M = moles of solute ÷ volume of solution in dm³. On dilution the moles of solute are unchanged, so <b>M₁V₁ = M₂V₂</b>. <b>Colligative properties</b> — vapour pressure lowering, boiling point elevation, freezing point depression and osmotic pressure — depend on the <b>number</b> of dissolved particles, not their identity.",
  study:[
    /* ---- course text: Semester One, Period I — Solution and Solubility (guide pp. 20-23) ---- */
    {k:"h3", t:"Solutions — Homogeneous and Heterogeneous"},
    {k:"p", t:"A **solution** is a uniform mixture of a **solute** dissolved in a **solvent**. A **homogeneous** mixture is uniform throughout (salt in water); a **heterogeneous** mixture keeps its parts visibly separate (sand in water). Identify the solutes and solvents in common household mixtures. The types of solutions by saturation: a **saturated** solution holds all the solute it can at that temperature; an **unsaturated** solution can still dissolve more; a **supersaturated** solution holds (unstably) more than saturation — a single seed crystal brings the excess crashing out."},
    {k:"rule"},
    {k:"h3", t:"Dilute and Concentrated Solutions; Stock Solutions"},
    {k:"p", t:"A **dilute** solution carries little solute in much solvent; a **concentrated** one, much solute. The laboratory keeps **stock solutions** — accurately made concentrated solutions from which working solutions are drawn by dilution; work the simple dilution calculations with **M₁V₁ = M₂V₂**."},
    {k:"p", t:"**Worked — a dilution:** the shelf holds 2.0 M hydrochloric acid and the titration wants 0.2 M. M₁V₁ = M₂V₂ gives 2.0 × V₁ = 0.2 × 250 cm³, so V₁ = 25 cm³: pipette 25 cm³ of the stock into a flask and make up to 250 cm³ — the acid is ten times weaker, the same moles (0.05) spread through ten times the volume. **And keep the safety rule beside it:** when diluting concentrated acid, always pour the acid into the water, never the water into the acid, so the heat of dilution spreads through the bulk instead of boiling a pocket of acid on the surface. The same arithmetic scales mass percentages: 50 g of 40 % sugar solution is 20 g of sugar, which diluted to 200 g of solution is a 10 % solution."},
    {k:"rule"},
    {k:"h3", t:"Concentration Units"},
    {k:"p", t:"Analyze the various **concentration units** and calculate with each:"},
    {k:"bul", items:["**Molarity (M)** — moles of solute per litre of solution","**Molality (m)** — moles of solute per kilogram of solvent","**Normality (N)** — gram-equivalents of solute per litre of solution","**Percentage by mass (% w/w)** and **percentage by volume (% v/v)**","**Parts per million (ppm)** and **parts per billion (ppb)** — for trace amounts"]},
    {k:"p", t:"**Each unit, worked on one beaker:** dissolve 4.0 g of NaOH (M = 40) in water and make up to 500 cm³. **Molarity**: 4.0 ÷ 40 = 0.10 mol in 0.5 dm³ → **0.20 M**. **Molality** (with the solution weighing 504 g, so the water 480 g): 0.10 mol ÷ 0.48 kg = **0.21 m** — close to the molarity, but not the same number, and they drift apart for concentrated solutions because molarity counts litres of solution while molality counts kilograms of solvent (and volume changes with temperature, mass does not). **Percentage by mass**: (4.0 ÷ 504) × 100 ≈ **0.8 % w/w**. For a tincture measured by volume, 20 cm³ of ethanol in 100 cm³ of solution is **20 % v/v**. And **ppm** speaks the language of traces: 50 mg of fluoride in one tonne (10⁶ g) of water is 50 ppm — the scale water quality is judged on, where safe drinking water keeps most contaminants at single-figure ppm and the ocean sits near 35 000 ppm of dissolved salts overall."},
    {k:"rule"},
    {k:"h3", t:"Colligative Properties"},
    {k:"p", t:"The **colligative properties of solutions** depend on the *number* of dissolved particles, not their kind: the **vapour pressure** falls, the **boiling point** rises (boiling point elevation), the **freezing point** falls (freezing point depression), and the **osmotic pressure** appears across a membrane. The **colligative properties of electrolyte solutions** run stronger still — each formula unit splits into several particles, multiplying the effect. Work the simple calculations involving boiling point elevation and freezing point depression."},
    {k:"h3", t:"Osmosis and Its Working"},
    {k:"p", t:"**Osmosis** is the slow flow of water through a **semi-permeable membrane** from the weaker (dilute) side toward the stronger (concentrated) side, until the particle counts — and the osmotic pressures — balance. Put a dialysis bag of sugar solution in a beaker of pure water and the water creeps in: the bag swells, and if the membrane held, a head of water would pile up on the strong side, that head being the osmotic pressure made visible. The same rule runs through living tissue: a plant cell in pure water takes it up and stands turgid, in strong brine it loses water and **plasmolyzes**, and the red cells of the blood live only in a solution matched to them — which is why an IV drip runs in **normal (0.9 %) saline**, isotonically, so the cells neither burst nor shrivel. **Reverse osmosis** pushes the rule backward with pressure: feed sea water through a membrane against the osmotic flow and pure water comes out the other side — the working heart of desalination plants and of the bottled-purified-water machines."},
    {k:"p", t:"**Freezing point depression in life and roadwork:** the more particles in the water, the lower its freezing point — salt on an icy walkway does not melt the ice by heat but by diluting the thin surface water into brine that freezes below 0 °C, and the ice must refreeze as pure water before the road grips. A 1 m solution of a nonelectrolyte depresses water's freezing point by 1.86 °C per molal; a salt, splitting into two or three ions, depresses several times as far, particle for particle."},
    {k:"rule"},
    {k:"h3", t:"Colloids, Solubility and Solubility Curves"},
    {k:"p", t:"A **colloid** stands between solution and suspension — particles too small to see or settle, large enough to scatter a beam of light (the Tyndall effect): milk, fog, palm-wine haze and smoke. The **general principles of solubility**: like dissolves like — polar solutes in polar solvents — and the **factors affecting solubility**: temperature, pressure (for gases), stirring and particle size. Explain the **solubility of ionic substances**; analyze the **solubility curves** — a solubility curve reads how many grams dissolve in 100 g of water at each temperature — and apply the **solubility table** to the quantitative analysis of a solution. In the lab, determine the solubility curve of potassium nitrate."},
    {k:"h3", t:"The Families of Colloids"},
    {k:"table", head:["Dispersed in","Type of colloid","Everyday examples"], rows:[
      ["Solid in liquid","Sol","Gold sol, muddy suspensions of fine clay, ink"],
      ["Liquid in liquid","Emulsion","Milk, palm oil in water, mayonnaise, vinaigrette"],
      ["Liquid in gas","Aerosol","Fog, cloud, spray paint, smoke of an aerosol can"],
      ["Gas in liquid","Foam","Shaving foam, soap suds, froth on hot chocolate"],
      ["Solid or liquid in solid","Solid sol","Coloured glass, jellied gelatin, cheese, pearl"]
    ]},
    {k:"p", t:"**Dissolving, seen up close:** an ionic solid dissolves when water's dipoles — δ⁺ on the hydrogens, δ⁻ on the oxygen — grip the exposed ions and pull them loose, each ion wrapped in a shell of water molecules, **solvation** (hydration in water). Whether the solid pays that price depends on the balance: if the ion-water attraction outweighs the lattice pull, it dissolves; if not, it stands. That balance is why ionic solubility climbs with temperature for most salts (the lattice loosens), yet **gas solubility falls with temperature** — warm soda hisses because the CO₂ has less to hold it — and rises with **pressure**, Henry's law, which is why the bottle is capped under high gas pressure and the bubbles wait until it is opened. Stirring and grinding speed the approach to the limit but never raise the limit itself: saturation belongs to temperature and pair, not to effort."},
    {k:"p", t:"**Reading the curve — potassium nitrate, worked:** the solubility of KNO₃ runs from about 13 g per 100 g of water at 0 °C to about 246 g at 100 °C, one of the steepest curves in the tables. So 200 g of KNO₃ dropped into 100 g of water at 25 °C (solubility about 38 g) dissolves only ~38 g and the rest lies undissolved at the bottom; heat to 80 °C (about 169 g) and nearly all of it vanishes; cool the saturated hot solution back to 25 °C and some 130 g of crystals crash out — the laboratory and industrial way of **purifying a salt by recrystallization**. Contrast **sodium chloride**: its curve is nearly flat (about 36 g at 0 °C, 39 g at 100 °C), so cooling recovers almost nothing — which is why common salt is won from sea water and salterns by **evaporation**, not by cooling."},
  ],

  focus:[
    "Solutions: homogeneous and heterogeneous",
    "Saturated, unsaturated and supersaturated solutions",
    "Dilute and concentrated solutions; stock solutions",
    "Concentration units: molarity, molality, ppm, normality, %w/w, %v/v",
    "Colligative properties and their behaviour in electrolyte solutions",
    "Colloids and factors affecting solubility",
    "Precipitation and quantitative analysis"
  ],
  terms:[
    {t:"solution", d:"a homogeneous mixture of solute and solvent", x:"Salt water is a solution."},
    {t:"solute", d:"the substance dissolved in a solution", x:"Sugar is the solute in syrup."},
    {t:"solvent", d:"the substance in which the solute dissolves", x:"Water is the universal solvent."},
    {t:"saturated solution", d:"a solution holding the maximum solute at that temperature", x:"No more dissolves in a saturated solution."},
    {t:"unsaturated solution", d:"a solution that can dissolve more solute", x:"An unsaturated solution is not yet full."},
    {t:"supersaturated solution", d:"a solution holding more solute than normal, and unstable", x:"A supersaturated solution crystallises on disturbance."},
    {t:"solubility", d:"the mass of solute dissolving in 100 g of solvent at a given temperature", x:"Solubility usually rises with temperature."},
    {t:"molarity", d:"moles of solute per cubic decimetre of solution", x:"A 1 M solution has 1 mol per dm3."},
    {t:"molality", d:"moles of solute per kilogram of solvent", x:"Molality does not change with temperature."},
    {t:"normality", d:"gram equivalents of solute per dm3 of solution", x:"Normality is used in titration work."},
    {t:"parts per million", d:"milligrams of solute per kilogram of solution", x:"Trace pollutants are measured in ppm."},
    {t:"stock solution", d:"a concentrated solution kept for dilution as needed", x:"Dilute the stock solution before use."},
    {t:"dilution", d:"adding solvent to reduce concentration", x:"Dilution leaves the moles of solute unchanged."},
    {t:"colligative property", d:"a property depending on the number of dissolved particles", x:"Boiling point elevation is a colligative property."},
    {t:"osmotic pressure", d:"the pressure needed to prevent osmosis into a solution", x:"Osmotic pressure rises with concentration."},
    {t:"colloid", d:"a mixture with particles larger than in a solution but not settling out", x:"Milk is a colloid."},
    {t:"Tyndall effect", d:"the scattering of a light beam by colloidal particles", x:"The Tyndall effect distinguishes a colloid from a solution."},
    {t:"suspension", d:"a mixture whose particles settle on standing", x:"Muddy water is a suspension."},
    {t:"precipitate", d:"an insoluble solid formed in a solution reaction", x:"A white precipitate confirms the ion."},
    {t:"crystallisation", d:"the formation of crystals from a saturated solution", x:"Salt is obtained by crystallisation."}
  ],
  facts:[
    {q:"Define solute, solvent and solution.", a:"The solute is the substance dissolved; the solvent is the substance doing the dissolving, usually present in greater amount; the solution is the homogeneous mixture that results."},
    {q:"Distinguish saturated, unsaturated and supersaturated solutions.", a:"A saturated solution holds the maximum solute possible at that temperature; an unsaturated one can dissolve more; a supersaturated one holds more than the equilibrium amount and is unstable, crystallising when disturbed or seeded."},
    {q:"Give the formula for molarity and state its units.", a:"Molarity = moles of solute ÷ volume of solution in dm³, with units mol/dm³ (M)."},
    {q:"State the dilution equation and explain why it works.", a:"M₁V₁ = M₂V₂. Adding solvent changes the volume but not the number of moles of solute, so the product of concentration and volume is constant."},
    {q:"State the difference between molarity and molality.", a:"Molarity is moles per dm³ of solution and varies with temperature because volume expands; molality is moles per kilogram of solvent and is independent of temperature."},
    {q:"Name the four colligative properties.", a:"Lowering of vapour pressure, elevation of boiling point, depression of freezing point, and osmotic pressure."},
    {q:"Why does 1 mol of NaCl depress the freezing point roughly twice as much as 1 mol of sugar?", a:"Colligative properties depend on the number of dissolved particles. NaCl dissociates into two ions per formula unit while sugar dissolves as single molecules, so NaCl gives about twice as many particles."},
    {q:"State four factors affecting solubility.", a:"The nature of solute and solvent (like dissolves like), temperature, pressure for gases, and the degree of stirring and particle size which affect the rate rather than the final amount."},
    {q:"How can a colloid be distinguished from a true solution?", a:"By the Tyndall effect: a beam of light passing through a colloid is scattered and its path becomes visible, whereas a true solution does not scatter the beam."},
    {q:"Why does the solubility of a gas fall as temperature rises?", a:"Dissolving a gas is exothermic and gas molecules gain kinetic energy with heating, so more of them escape the solvent; warm water therefore holds less dissolved oxygen."}
  ],
  tf:[
    {s:"On dilution the number of moles of solute stays the same.", a:"true", why:"Only solvent is added, which is why M1V1 = M2V2 holds."},
    {s:"Molarity is independent of temperature.", a:"false", why:"It depends on volume, which expands with temperature; molality is the temperature-independent measure."},
    {s:"A colloid scatters a beam of light.", a:"true", why:"This is the Tyndall effect, caused by the relatively large colloidal particles."},
    {s:"The solubility of most solids decreases as temperature rises.", a:"false", why:"For most solids solubility increases with temperature; it is gases whose solubility falls."},
    {s:"Colligative properties depend on the identity of the dissolved particles.", a:"false", why:"They depend only on the number of particles, not on what they are."},
    {s:"Adding salt to water raises its boiling point.", a:"true", why:"Boiling point elevation is a colligative effect of the dissolved particles."}
  ],
  classify:{ title:"Sort these mixtures and properties", groups:[
    {name:"True solutions", items:["salt water","sugar solution","air","brass"]},
    {name:"Colloids", items:["milk","fog","jelly","paint"]},
    {name:"Suspensions", items:["muddy water","chalk in water","sand in water"]},
    {name:"Colligative properties", items:["vapour pressure lowering","boiling point elevation","freezing point depression","osmotic pressure"]},
    {name:"Concentration units", items:["molarity","molality","ppm","% w/w"]}
  ]},
  diagram:{ title:"Preparing a standard solution", caption:"State the purpose of each step or piece of apparatus.", parts:[
    {p:"Analytical balance", f:"Weighs the solute accurately to at least two decimal places"},
    {p:"Weighing bottle", f:"Holds the solute; rinsing it into the beaker avoids loss of solid"},
    {p:"Beaker and glass rod", f:"Used to dissolve the solute completely before transfer"},
    {p:"Volumetric flask", f:"Fixed accurate volume container in which the solution is made up"},
    {p:"Filter funnel", f:"Guides the solution into the narrow neck without spilling"},
    {p:"Graduation mark", f:"The bottom of the meniscus must sit exactly on this line"},
    {p:"Stopper and inversion", f:"Mixing the solution thoroughly so concentration is uniform"}
  ]},
  experiment:{
    title:"Determining the solubility curve of potassium nitrate",
    aim:"To measure how the solubility of potassium nitrate changes with temperature and plot a solubility curve.",
    materials:["Potassium nitrate","Distilled water","Boiling tubes","Thermometer 0-100 °C","Water bath and beaker","Balance","Measuring cylinder","Stirring wire"],
    steps:[
      "Weigh 4 g of potassium nitrate into a boiling tube and add exactly 10 cm3 of distilled water.",
      "Warm the tube in a water bath, stirring, until all the solid just dissolves.",
      "Remove the tube and allow it to cool slowly, stirring gently with the thermometer.",
      "Record the exact temperature at which the first crystals reappear — this is the saturation temperature for that concentration.",
      "Add a further 1 cm3 of water, redissolve by warming, cool again and record the new crystallisation temperature.",
      "Repeat for several additions and plot solubility in grams per 100 g of water against temperature."
    ],
    expect:"Crystals reappear at a lower temperature each time water is added. Plotting the results gives a smooth curve rising steeply from left to right: the solubility of potassium nitrate increases markedly with temperature, from roughly 30 g per 100 g of water at 20 °C to over 100 g per 100 g at 60 °C.",
    why:"Dissolving potassium nitrate is an endothermic process, so raising the temperature supplies the energy needed to break the crystal lattice and favours dissolution. At the crystallisation temperature the solution is exactly saturated, so the mass of solid present in the known mass of water gives the solubility directly at that temperature."
  },
  worked:[
    {q:"Calculate the molarity of a solution containing 4 g of NaOH in 250 cm³ (NaOH = 40).", steps:["moles = 4 ÷ 40 = 0.1","V = 0.25 dm³","M = 0.1 ÷ 0.25"], a:"0.4 mol/dm³"},
    {q:"What mass of NaCl is needed to make 500 cm3 of 0.2 M solution? (NaCl = 58.5)", steps:["moles = 0.2 × 0.5 = 0.1","mass = 0.1 × 58.5"], a:"5.85 g"},
    {q:"What volume of 2 M HCl gives 100 cm3 of 0.5 M solution?", steps:["M₁V₁ = M₂V₂","2 × V₁ = 0.5 × 100","V₁ = 50 ÷ 2"], a:"25 cm³, made up to 100 cm³"},
    {q:"Calculate the concentration in g/dm3 of a 0.25 M solution of CaCO₃ (M = 100).", steps:["g/dm³ = molarity × molar mass","0.25 × 100"], a:"25 g/dm³"},
    {q:"Express 0.005 g of lead in 1 kg of water in ppm.", steps:["0.005 g = 5 mg","ppm = mg per kg"], a:"5 ppm"},
    {q:"Calculate the molality of 0.5 mol of solute in 250 g of solvent.", steps:["250 g = 0.25 kg","m = 0.5 ÷ 0.25"], a:"2 mol/kg"},
    {q:"How many moles of solute are in 40 cm3 of 0.15 M solution?", steps:["V = 0.040 dm³","n = 0.15 × 0.040"], a:"0.006 mol"},
    {q:"A solution is 10% w/w. What mass of solute is in 250 g of solution?", steps:["10% of 250","0.10 × 250"], a:"25 g"}
  ],
  apply:[
    {q:"Why is salt spread on icy roads in cold countries?", a:"Dissolved salt depresses the freezing point of water, so the ice melts at a temperature below 0 °C and the road becomes safe."},
    {q:"Explain why fish die in a pond after a hot spell even when no pollution occurs.", a:"The solubility of oxygen falls as water warms, so dissolved oxygen decreases while the fish's metabolic demand rises, and they suffocate."},
    {q:"A nurse must give a patient a 0.9% saline drip but has only concentrated stock. What calculation is needed and why must it be exact?", a:"A dilution calculation using M₁V₁ = M₂V₂ to find the volume of stock required. Body fluids are isotonic with 0.9% saline; too concentrated a solution draws water out of cells and too dilute a one makes them swell and burst."},
    {q:"Why does sugar dissolve faster in hot tea when stirred and when crushed?", a:"Heat increases the kinetic energy of the molecules, stirring removes the saturated layer from around the crystals, and crushing increases the surface area exposed to the solvent — all three raise the rate of dissolving."},
    {q:"How could you tell whether a cloudy white liquid is a colloid or a suspension?", a:"Let it stand: a suspension settles into layers and can be filtered, while a colloid remains dispersed and passes through filter paper. Shining a beam of light through a colloid also shows the Tyndall effect."}
  ],
  activities:[
    "Identify the solutes and solvents in common household solutions",
    "Simple dilution calculations and calculations with concentration units",
    "Calculations involving boiling point elevation and freezing point depression",
    "LAB: prepare a standard solution using a volumetric flask",
    "LAB: determine the solubility curve of potassium nitrate",
    "LAB: precipitation reactions and quantitative analysis for common ions",
    "LAB: dilution of concentrated solutions"
  ],
  materials:[
    "Primary text: Michael C. Cox and John Sadler, Senior Secondary Guide for Liberia — Chemistry (Star Books/Pearson, 2011)",
    "Volumetric flasks, pipettes, burettes and beakers",
    "Potassium nitrate, sodium chloride, sodium hydroxide",
    "Thermometers, water baths and balances",
    "Simple distillation apparatus: flasks, stoppers, tubing, condensers"
  ],
  assessment:["Presentation","Written assignment","Quiz","Laboratory report","Calculation exercise"]
},
{
  grade:11, period:"II", sem:"One", icon:"💨",
  title:"Kinetic Theory of Gases",
  subtitle:"Pressure, the gas laws, the ideal gas equation, gas stoichiometry and the kinetic molecular theory",
  outcomes:[
    "Learners are able to solve both composition and reaction stoichiometry problems involving gases"
  ],
  objectives:[
    "Describe the concept of pressure and its units",
    "Explain and apply Boyle's, Charles's, Gay-Lussac's and Avogadro's laws",
    "Perform calculations using the ideal gas equation",
    "Apply the gas laws to gas phase reactions and perform stoichiometric calculations",
    "State Dalton's law of partial pressures and apply it to collecting gas over water",
    "Explain the postulates of the kinetic molecular theory",
    "Calculate root mean square velocity and apply Graham's law of diffusion"
  ],
  note:"<b>Boyle's law</b>: at constant T, P₁V₁ = P₂V₂. <b>Charles's law</b>: at constant P, V₁/T₁ = V₂/T₂. <b>Gay-Lussac's law</b>: at constant V, P₁/T₁ = P₂/T₂. Combining them with Avogadro's law gives the <b>ideal gas equation PV = nRT</b>, where R = 8.31 J/K/mol. <b>Temperature must always be in kelvin.</b>",
  study:[
    /* ---- course text: Semester One, Period II — The Kinetic Theory of Gases (guide pp. 24-26) ---- */
    {k:"h3", t:"Pressure and its Units"},
    {k:"p", t:"**Pressure** is force per unit area — in a gas, the ceaseless hammering of molecules on the walls. The **units of pressure**: the pascal (Pa), the atmosphere (atm), and the millimetre of mercury (mmHg, or torr); **1 atm = 760 mmHg = 101,325 Pa**."},
    {k:"p", t:"**Converting between the units, worked:** 380 mmHg ÷ 760 = **0.5 atm**; 2 atm × 101 325 = **202 650 Pa**; 202 650 Pa ÷ 101 325 = **2 atm** back again. The mercury column is the historical standard — Torricelli's tube, 1643, showed that a bar of mercury 760 mm high balances the weight of the whole atmosphere at sea level, so one atmosphere is literally 760 mm of mercury. In the gas equations the three units behave identically so long as both pressures in a relation wear the same unit; only when **R** enters must the pressure and temperature match R's own units (atm and kelvin for R = 0.0821 L·atm·mol⁻¹·K⁻¹, or pascals and kelvin for R = 8.314 J·mol⁻¹·K⁻¹)."},
    {k:"rule"},
    {k:"h3", t:"The Ideal Gas Laws"},
    {k:"table", head:["Law","Statement","Relation (the constant held)"], rows:[
      ["Boyle's law","At constant temperature, the volume of a fixed gas mass varies inversely with the pressure","P₁V₁ = P₂V₂"],
      ["Charles's law","At constant pressure, the volume varies directly with the absolute (kelvin) temperature","V₁/T₁ = V₂/T₂"],
      ["Gay-Lussac's law","At constant volume, the pressure varies directly with the absolute temperature","P₁/T₁ = P₂/T₂"],
      ["Avogadro's law","Equal volumes of gases, at the same temperature and pressure, contain equal numbers of molecules","V ∝ n"]
    ]},
    {k:"p", t:"Combine them into the **ideal gas equation: PV = nRT** — and perform calculations with it. Explain and apply each law to observations of gas behaviour: the squeezed syringe (Boyle), the balloon swelling in the sun (Charles), the sealed tin bursting in the fire (Gay-Lussac)."},
    {k:"p", t:"**Boyle, worked:** a syringe holds 2.0 dm³ of air at 1.0 atm; pressed to 4.0 atm the volume falls to V₂ = P₁V₁ ÷ P₂ = (1.0 × 2.0) ÷ 4.0 = **0.50 dm³** — the pressure quadruples, the volume quarters, the product P·V = 2.0 the same. **Charles, worked:** 300 cm³ of gas at 300 K heated at constant pressure to 600 K doubles its volume to **600 cm³** — the law demands **kelvin**, because doubling a Celsius temperature (27 °C to 54 °C) would mean almost nothing; the kelvin scale runs from **absolute zero, −273.15 °C**, where extrapolated gas volumes and pressures both fall to zero. Absolute zero is the coldest temperature possible — kinetic energy's floor — and no process ever quite reaches it."},
    {k:"p", t:"**PV = nRT, worked:** what volume does 2.0 mol of gas occupy at 27 °C (300 K) and 2.0 atm? V = nRT ÷ P = (2.0 × 0.0821 × 300) ÷ 2.0 = **24.6 dm³**. Inverting it gives the **molar mass of an unknown gas**: a gas of mass 4.4 g fills 2.24 dm³ at STP, so n = PV ÷ RT = (1.0 × 2.24) ÷ (0.0821 × 273) = 0.10 mol, and M = 4.4 ÷ 0.10 = **44 g/mol** — the fingerprint of CO₂. At STP the equation collapses to the memory shortcut: 1 mol of any gas = 22.4 dm³."},
    {k:"rule"},
    {k:"h3", t:"Gas Stoichiometry and Dalton's Law"},
    {k:"p", t:"Apply the gas laws to **gas-phase reactions**, performing stoichiometric calculations through the mole and the molar gas volume; obtain the **molar mass of a gas** from its mass, volume and conditions through PV = nRT. **Dalton's law of partial pressures:** the total pressure of a gas mixture equals the sum of the partial pressures of its parts — so in **collecting a gas over water**, **P(gas) = P(total) − P(water vapour)** at that temperature."},
    {k:"rule"},
    {k:"h3", t:"The Kinetic Molecular Theory of Gases"},
    {k:"p", t:"The **kinetic molecular theory** explains the laws: gases are made of tiny particles in constant, random motion; their own volume is negligible; there are no forces between them; collisions are perfectly elastic; and the average kinetic energy of the particles rises with the absolute temperature. From it follow **diffusion** (mixing into another gas) and **effusion** (escape through a pinhole) — light gases the faster; calculate sample problems involving **root mean square velocity**, effusion and diffusion. In the lab, conduct the experiment to verify Boyle's law with a syringe."},
    {k:"h3", t:"Diffusion and Effusion — Graham's Law"},
    {k:"p", t:"**Graham's law:** at the same temperature the rate of diffusion or effusion is inversely proportional to the square root of the molar mass — rate ∝ 1/√M. **Worked:** hydrogen (M = 2) diffuses √(16 ÷ 2) = √8 ≈ **2.8 times as fast as methane** (M = 16); helium (M = 4) escapes a pinhole √(20 ÷ 4) = √5 ≈ **2.2 times as fast as neon** (M = 20). The classic demonstration runs two gases toward each other along a glass tube — **concentrated ammonia** from one end, **concentrated hydrochloric acid** from the other: NH₃ (M = 17) outruns HCl (M = 36.5) by √(36.5 ÷ 17) ≈ 1.5, so the white ring of ammonium chloride smoke forms nearer the acid end, at a point about 1.5 times farther from the ammonia end than from the acid end — the faster gas has travelled farther when they meet. The same speed rule sets the **root mean square velocity**: at 27 °C nitrogen (M = 28) rms-runs at about 500 m/s, hydrogen at about 1 900 m/s — molecules crossing the room many thousands of times a second, and yet a gas scent still takes seconds to reach you, because the path is a crowd of collisions, not a straight dash."},
    {k:"p", t:"**The gas laws at work around the island:** the **LPG cylinder** on the cookstove is butane and propane compressed to liquid — heat the cylinder and the pressure climbs by the direct P–T law, which is why it keeps in the shade, out of the fire. **Soda bottles** are capped under high CO₂ pressure so Henry's law keeps the gas in solution; open the cap and the pressure drops, the solubility falls, and the bubbles are the law showing its hand. A **fire extinguisher** of the CO₂ type sprays a gas that smothers by displacement — denser than air, it blankets the fuel. In **diving**, the deeper the diver, the higher the pressure that loads air (and its nitrogen) into the blood; ascent too fast and the nitrogen comes out of solution as bubbles — the bends — so decompression stops let it leave as gas, slowly. And a **sealed can in a fire** is Gay-Lussac in the can: the trapped air's pressure climbs until the seam gives."},
  ],

  focus:[
    "Pressure and its units",
    "Boyle's, Charles's, Gay-Lussac's and Avogadro's laws",
    "The ideal gas equation and the general gas equation",
    "Gas stoichiometry and molar mass of a gas",
    "Dalton's law of partial pressures; collecting a gas over water",
    "The kinetic molecular theory of gases",
    "Root mean square velocity, diffusion and effusion",
    "Real gases: the hard sphere and van der Waals models"
  ],
  terms:[
    {t:"pressure", d:"force acting per unit area", x:"Gas pressure results from molecular collisions."},
    {t:"pascal", d:"the SI unit of pressure, one newton per square metre", x:"Standard pressure is 101 325 Pa."},
    {t:"atmosphere", d:"a unit of pressure equal to 101 325 Pa", x:"One atmosphere is 760 mmHg."},
    {t:"Boyle's law", d:"at constant temperature, volume is inversely proportional to pressure", x:"Boyle's law explains a syringe."},
    {t:"Charles's law", d:"at constant pressure, volume is directly proportional to absolute temperature", x:"Charles's law explains a rising balloon."},
    {t:"Gay-Lussac's law", d:"at constant volume, pressure is directly proportional to absolute temperature", x:"Gay-Lussac's law warns against heating sealed cans."},
    {t:"Avogadro's law", d:"equal volumes of gases at the same T and P contain equal numbers of molecules", x:"Avogadro's law links volume to moles."},
    {t:"ideal gas", d:"a hypothetical gas obeying the gas laws exactly at all conditions", x:"Real gases approach ideal behaviour at low pressure."},
    {t:"ideal gas equation", d:"PV = nRT relating pressure, volume, moles and temperature", x:"The ideal gas equation gives the molar mass."},
    {t:"gas constant", d:"the constant R in the ideal gas equation, 8.31 J/K/mol", x:"R has the same value for all gases."},
    {t:"standard temperature and pressure", d:"273 K and 1 atmosphere", x:"One mole occupies 22.4 dm3 at s.t.p."},
    {t:"partial pressure", d:"the pressure a gas in a mixture would exert alone", x:"Partial pressures add to the total."},
    {t:"Dalton's law", d:"the total pressure equals the sum of the partial pressures", x:"Dalton's law applies to gas collected over water."},
    {t:"kinetic molecular theory", d:"the model explaining gas behaviour by molecular motion", x:"The kinetic theory explains pressure."},
    {t:"diffusion", d:"the spreading of a gas through another gas", x:"Diffusion carries a scent across a room."},
    {t:"effusion", d:"the escape of gas through a tiny opening", x:"Effusion is faster for lighter gases."},
    {t:"Graham's law", d:"rate of diffusion is inversely proportional to the square root of molar mass", x:"Graham's law compares two gases."},
    {t:"root mean square velocity", d:"the square root of the mean of the squared molecular speeds", x:"Root mean square velocity rises with temperature."},
    {t:"van der Waals equation", d:"a modified gas equation allowing for molecular size and attraction", x:"The van der Waals equation fits real gases."}
  ],
  facts:[
    {q:"State Boyle's law and give its mathematical form.", a:"At constant temperature the volume of a fixed mass of gas is inversely proportional to its pressure: P₁V₁ = P₂V₂."},
    {q:"State Charles's law and give its mathematical form.", a:"At constant pressure the volume of a fixed mass of gas is directly proportional to its absolute temperature: V₁/T₁ = V₂/T₂."},
    {q:"Write the ideal gas equation and define each symbol with its unit.", a:"PV = nRT, where P is pressure in Pa, V volume in m³, n moles, R the gas constant 8.31 J/K/mol, and T absolute temperature in kelvin."},
    {q:"State the postulates of the kinetic molecular theory.", a:"Gases consist of very many tiny particles in constant random motion; the volume of the particles is negligible compared with the container; collisions are perfectly elastic with no loss of energy; there are no attractive forces between particles; and the average kinetic energy is proportional to absolute temperature."},
    {q:"State Dalton's law of partial pressures.", a:"The total pressure of a mixture of gases that do not react equals the sum of the partial pressures each gas would exert if it alone occupied the container."},
    {q:"Why must the vapour pressure of water be subtracted when a gas is collected over water?", a:"The collected gas is mixed with water vapour, so the measured total pressure includes the vapour pressure of water; subtracting it gives the true partial pressure of the dry gas."},
    {q:"State Graham's law of diffusion.", a:"At the same temperature and pressure, the rate of diffusion of a gas is inversely proportional to the square root of its molar mass — so lighter gases diffuse faster."},
    {q:"Under what conditions do real gases deviate most from ideal behaviour, and why?", a:"At high pressure and low temperature. The molecules are then close together so their own volume is no longer negligible and intermolecular attractions become significant — the two assumptions the ideal model ignores."},
    {q:"Explain how the kinetic theory accounts for gas pressure.", a:"Gas molecules move rapidly and randomly and collide with the walls of the container; each collision exerts a small force, and the total force per unit area of these countless collisions is the pressure."},
    {q:"Why must temperature be converted to kelvin in gas law calculations?", a:"The gas laws express direct proportionality with absolute temperature. The Celsius scale has an arbitrary zero, so ratios of Celsius temperatures are meaningless; only the kelvin scale starts at absolute zero."}
  ],
  tf:[
    {s:"At constant temperature, doubling the pressure halves the volume of a gas.", a:"true", why:"This is Boyle's inverse proportionality."},
    {s:"Temperature may be used in degrees Celsius in the ideal gas equation.", a:"false", why:"Absolute temperature in kelvin must be used, since the laws depend on proportionality from absolute zero."},
    {s:"Lighter gases diffuse faster than heavier ones at the same temperature.", a:"true", why:"Graham's law: rate is inversely proportional to the square root of molar mass."},
    {s:"In the kinetic theory, collisions between gas molecules are perfectly elastic.", a:"true", why:"No kinetic energy is lost, which is why a gas does not spontaneously settle."},
    {s:"Real gases behave most ideally at high pressure and low temperature.", a:"false", why:"They behave most ideally at low pressure and high temperature, where molecules are far apart and fast moving."},
    {s:"One mole of any gas occupies 22.4 dm3 at s.t.p.", a:"true", why:"It follows from Avogadro's law that equal volumes contain equal numbers of molecules."}
  ],
  classify:{ title:"Sort these laws and quantities", groups:[
    {name:"Constant temperature", items:["Boyle's law","P1V1 = P2V2"]},
    {name:"Constant pressure", items:["Charles's law","V1/T1 = V2/T2"]},
    {name:"Constant volume", items:["Gay-Lussac's law","P1/T1 = P2/T2"]},
    {name:"Units of pressure", items:["pascal","atmosphere","mmHg","bar"]},
    {name:"Kinetic theory postulates", items:["random motion","elastic collisions","negligible particle volume","no intermolecular forces"]}
  ]},
  diagram:{ title:"Collecting a gas over water", caption:"State the purpose of each labelled part of the apparatus.", parts:[
    {p:"Reaction flask", f:"Where the gas is generated by the chemical reaction"},
    {p:"Delivery tube", f:"Carries the gas from the flask to the collecting vessel"},
    {p:"Trough of water", f:"Seals the system and allows the gas to displace water"},
    {p:"Inverted measuring cylinder", f:"Collects the gas and measures the volume produced"},
    {p:"Water level", f:"Levelling it inside and outside equalises pressure with the atmosphere"},
    {p:"Trapped water vapour", f:"Mixes with the gas, so its vapour pressure must be subtracted"},
    {p:"Thermometer", f:"Records the temperature needed for the gas law calculation"}
  ]},
  experiment:{
    title:"Verifying Boyle's law with a syringe",
    aim:"To show that the volume of a fixed mass of gas is inversely proportional to its pressure at constant temperature.",
    materials:["50 cm3 plastic syringe with a sealed nozzle","Set of identical masses","Flat board and clamp","Ruler","Recording table","Graph paper"],
    steps:[
      "Draw 40 cm3 of air into the syringe and seal the nozzle firmly so no air can escape.",
      "Clamp the syringe vertically with the plunger uppermost and record the initial volume with no load.",
      "Place one mass carefully on the plunger and record the new volume when it becomes steady.",
      "Add masses one at a time, recording the volume after each addition.",
      "Calculate the pressure for each reading as atmospheric pressure plus the added weight divided by the plunger area.",
      "Tabulate P, V and the product PV, then plot V against 1/P."
    ],
    expect:"The volume decreases each time a mass is added. The product PV stays approximately constant across all readings, and the graph of V against 1/P is a straight line passing through the origin, confirming that volume is inversely proportional to pressure.",
    why:"On the kinetic model, pressure arises from molecules colliding with the container walls. Reducing the volume at constant temperature packs the same number of molecules into a smaller space, so collisions with unit area of wall become more frequent and the pressure rises in exact inverse proportion. The temperature must stay constant, which is why the plunger is loaded slowly and readings taken only when steady."
  },
  worked:[
    {q:"A gas occupies 500 cm3 at 100 kPa. What is its volume at 250 kPa, temperature constant?", steps:["P₁V₁ = P₂V₂","100 × 500 = 250 × V₂","V₂ = 50 000 ÷ 250"], a:"200 cm³"},
    {q:"A gas occupies 300 cm3 at 27 °C. Find its volume at 127 °C at constant pressure.", steps:["T₁ = 300 K, T₂ = 400 K","V₂ = 300 × 400 ÷ 300"], a:"400 cm³"},
    {q:"Calculate the moles of gas in 5.6 dm3 at s.t.p.", steps:["1 mol = 22.4 dm³","5.6 ÷ 22.4"], a:"0.25 mol"},
    {q:"Find the volume of 2 mol of gas at 300 K and 100 000 Pa (R = 8.31).", steps:["V = nRT/P","(2 × 8.31 × 300) ÷ 100 000","4986 ÷ 100 000"], a:"0.0499 m³ (49.9 dm³)"},
    {q:"A mixture contains oxygen at 40 kPa and nitrogen at 60 kPa. Find the total pressure.", steps:["Dalton's law: add partial pressures","40 + 60"], a:"100 kPa"},
    {q:"Gas collected over water reads 101 kPa total; water vapour pressure is 3 kPa. Find the dry gas pressure.", steps:["P(dry) = P(total) − P(water)","101 − 3"], a:"98 kPa"},
    {q:"Compare the rates of diffusion of hydrogen (M = 2) and oxygen (M = 32).", steps:["Rate ∝ 1/√M","√(32/2) = √16 = 4"], a:"Hydrogen diffuses 4 times faster"},
    {q:"0.5 g of a gas occupies 400 cm3 at s.t.p. Find its molar mass.", steps:["moles = 0.4 ÷ 22.4 = 0.01786","M = 0.5 ÷ 0.01786"], a:"28 g/mol"}
  ],
  apply:[
    {q:"Why does a sealed aerosol can explode if thrown into a fire?", a:"At constant volume the pressure of the gas rises in direct proportion to absolute temperature (Gay-Lussac's law); heating rapidly raises the internal pressure beyond the strength of the can."},
    {q:"Explain why a balloon rises and expands as it climbs into the atmosphere.", a:"Atmospheric pressure falls with altitude, so by Boyle's law the volume of the gas increases; the balloon rises because its overall density remains lower than the surrounding air."},
    {q:"Why do car tyre pressures read higher after a long journey?", a:"Friction heats the tyre and the air inside it. The volume is nearly fixed, so by Gay-Lussac's law the pressure rises with the absolute temperature."},
    {q:"A gas cylinder in a hot store room is a hazard. Explain and give one precaution.", a:"Heating at constant volume raises the internal pressure, risking rupture. Cylinders must be stored in a cool, shaded, ventilated place away from any heat source."},
    {q:"Ammonia and hydrogen chloride are released at opposite ends of a tube. Predict where the white ring forms.", a:"Nearer the hydrogen chloride end. Ammonia has the smaller molar mass (17 against 36.5), so by Graham's law it diffuses faster and travels further before they meet."}
  ],
  activities:[
    "Perform calculations on the gas laws and various stoichiometric problems",
    "Calculate sample problems involving root mean square velocity, effusion and diffusion",
    "LAB: conduct an experiment to verify Boyle's law",
    "LAB: collect a gas over water and correct for water vapour pressure",
    "Discuss the principles of the hard sphere model and the van der Waals model",
    "Plot graphs of P against V and V against 1/P"
  ],
  materials:[
    "Primary text: Michael C. Cox and John Sadler, Senior Secondary Guide for Liberia — Chemistry (Star Books/Pearson, 2011)",
    "Syringes, masses, clamps and stands",
    "Gas collection apparatus, troughs and measuring cylinders",
    "Thermometers and barometers",
    "Graph paper and calculators"
  ],
  assessment:["Presentation","Written assignment","Quiz","Laboratory report","Calculation exercise"]
},
{
  grade:11, period:"III", sem:"One", icon:"⚖️",
  title:"Electrolytes: Acids, Bases and Salts",
  subtitle:"Arrhenius and Bronsted-Lowry theories, pH and pOH, percentage dissociation, salts and titration",
  outcomes:[
    "Learners are able to interpret knowledge of electrolytes — acids, bases and salts — and perform various acid-base titrations"
  ],
  objectives:[
    "Discuss electrolytes and non-electrolytes",
    "Elaborate on acids and bases using the Arrhenius and Bronsted-Lowry theories",
    "Solve sample problems involving pH and pOH",
    "Demonstrate calculations that analyse amounts of acid and base dissociated",
    "Determine the effects of salts on solution acidity",
    "Discuss the concept of Lewis acids and bases",
    "Describe the laboratory and industrial preparation of salt"
  ],
  note:"<b>Arrhenius</b>: an acid gives H⁺ in water, a base gives OH⁻. <b>Bronsted-Lowry</b>: an acid is a proton donor and a base a proton acceptor, which gives <b>conjugate acid-base pairs</b>. <b>Lewis</b>: an acid accepts an electron pair, a base donates one. <b>pH = −log[H⁺]</b> and <b>pH + pOH = 14</b> at 25 °C.",
  study:[
    /* ---- course text: Semester One, Period III — Electrolytes: Acids, Bases and Salts (guide pp. 27-30) ---- */
    {k:"h3", t:"Electrolytes and Non-electrolytes"},
    {k:"p", t:"An **electrolyte** is a substance which, molten or in solution, conducts electricity and is decomposed by it — the current is carried by free ions (acids, bases, salts). A **non-electrolyte** conducts in neither state — sugar, ethanol — because its molecules never part into ions. List several acids and bases, then write chemical equations to show how they behave as electrolytes."},
    {k:"rule"},
    {k:"h3", t:"Theories of Acids and Bases"},
    {k:"p", t:"The **Arrhenius theory**: an acid gives hydrogen ions (H⁺) in water, and a base gives hydroxide ions (OH⁻) in water. The **Brønsted–Lowry theory** widens it: an acid is a **proton donor** and a base a **proton acceptor** — so HCl + H₂O → H₃O⁺ + Cl⁻ pairs acid HCl with its conjugate base Cl⁻, and base water with its conjugate acid H₃O⁺. Write acid-base equations explaining both theories, identifying each **conjugate acid-base pair**. Properties of acids and bases: acids taste sour and turn blue litmus red; bases feel soapy and turn red litmus blue."},
    {k:"h3", t:"The Acids and Bases You Meet"},
    {k:"table", head:["Acid","Formula","Where it shows up"], rows:[
      ["Hydrochloric acid","HCl","Stomach juice (digestion); pickling metal before plating"],
      ["Sulfuric acid","H2SO4","Lead-acid car battery; fertilizer and dye works; the great industrial workhorse"],
      ["Nitric acid","HNO3","Fertilizers; explosive manufacture; dissolving copper and silver"],
      ["Ethanoic (acetic) acid","CH3COOH","Vinegar, 4-8 percent; ester perfumes"],
      ["Citric acid","C6H8O7","Oranges, lemons, sour fruit; flavouring and soft drinks"],
      ["Carbonic acid","H2CO3","Fizzy drinks, made on the spot when CO2 meets water"]
    ]},
    {k:"p", t:"**Strong versus weak:** a **strong acid** (HCl, H₂SO₄, HNO₃) hands over its proton almost completely — a 0.1 M solution is nearly 0.1 M in H⁺. A **weak acid** (CH₃COOH, citric, carbonic) only partly parts with its proton, holding an equilibrium CH₃COOH ⇌ CH₃COO⁻ + H⁺ whose position is measured by the **dissociation constant Ka**: the larger Ka, the further the equilibrium sits to the right. Two solutions can carry the same pH and different strengths, or different pH and the same strength — **concentration** is how much is there, **strength** is how far it ionizes, and the two must never be confused. On the base side: **NaOH and KOH** are strong (fully split), **ammonia** weak (NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, mostly unsplit)."},
    {k:"bul", items:[
      "**Sodium hydroxide, NaOH (caustic soda)** — soap-making, drains, pulping wood for paper; kept dry, because it absorbs water straight from the air (deliquescent)",
      "**Potassium hydroxide, KOH** — soft soaps and the alkaline paste of storage batteries",
      "**Ammonia solution, NH4OH (ammonium hydroxide)** — glass and mirror cleaning, carpet stain lifting; the pungent smell is NH3 escaping",
      "**Calcium hydroxide, Ca(OH)2 (slaked lime)** — mortar, whitewash, and the farmer's cure for acidic soil",
      "**Magnesium hydroxide, Mg(OH)2 (milk of magnesia)** — the household antacid that neutralizes stomach acid"
    ]},
    {k:"rule"},
    {k:"h3", t:"pH and pOH; Percentage Dissociation"},
    {k:"p", t:"The strength of an acid solution is read on the **pH** scale: **pH = −log[H⁺]** and likewise **pOH = −log[OH⁻]**, with **pH + pOH = 14** at 25 °C; below 7 acidic, 7 neutral, above 7 basic. Solve sample problems on the concept of pH and pOH, and demonstrate calculations analyzing the amounts of acid and base **dissociated** — the **percentage dissociation** = (amount ionized ÷ amount dissolved) × 100; a strong acid dissociates almost completely, a weak one barely."},
    {k:"p", t:"**Worked — the arithmetic of pH:** a 0.01 M solution of HCl is fully split, so [H⁺] = 0.01 = 10⁻² and **pH = 2**; a 0.001 M NaOH gives [OH⁻] = 10⁻³, pOH = 3 and **pH = 14 − 3 = 11**. Dilute the 0.01 M acid ten times and the pH climbs only one unit, to 3 — each step of the scale is a **tenfold** change in hydrogen-ion concentration, so a solution at pH 3 carries ten times the [H⁺] of one at pH 4 and a hundred times that of pH 5. The scale has edges: 1 M HCl sits at pH 0, and concentrated acids run negative; a saturated strong base runs above 14. **Percentage dissociation, worked:** 0.1 M ethanoic acid measured at [H⁺] = 0.0013 M has ionized (0.0013 ÷ 0.1) × 100 = **1.3 %** — barely a drop of the bottle, which is why a weak acid can be concentrated and still gentle where a dilute strong acid stings."},
    {k:"bul", items:[
      "**The body runs on pH:** stomach acid at pH 1-2 digests the meal, blood held at 7.35-7.45 by the carbonic-acid/bicarbonate buffer, and a drip of 0.9 % saline kept neutral to it",
      "**Rain is never quite 7:** dissolved CO2 makes clean rain fall at about 5.6; below 5.6 the rain is **acid rain**, loaded with sulfur and nitrogen acids from industry and exhaust",
      "**The farm reads pH:** cocoa and coffee favour a mildly acid soil near 5-6; lime (Ca(OH)2) raises an over-acid field, and the test is a drop of soil extract against universal indicator",
      "**Household ladder:** lemon about 2, vinegar 2.5-3, milk 6.5, pure water 7, soap 9-10, bleach 12-13 — the ladder that universal indicator paints in its rainbow"
    ]},
    {k:"rule"},
    {k:"h3", t:"Acid-Base Properties of Salts"},
    {k:"p", t:"A **salt** is the product of acid + base. In water a salt may leave the solution neutral, acidic or basic — the salt of a strong acid and strong base stays neutral (NaCl); of a strong acid and a weak base turns acidic (NH₄Cl); of a weak acid and a strong base turns basic (CH₃COONa). Study the **determination of the effects of salt on** a solution, and the **laboratory and industrial preparation of salts** — by neutralization, displacement, double decomposition; by the Solvay process and the sea's evaporation."},
    {k:"rule"},
    {k:"h3", t:"Titration and Indicators"},
    {k:"p", t:"The **acid-base titration** measures an unknown concentration: a standard solution runs from the **burette** into a measured pipette of the other until the **indicator** changes at the end-point; then cₐVₐ relates to c_bV_b through the equation's ratio. Prepare an indicator from **local plants** (hibiscus, hibiscus flower, or coloured leaves) and test household solutions with it."},
    {k:"h3", t:"Indicators at a Glance"},
    {k:"table", head:["Indicator","In acid","In base","Typical use"], rows:[
      ["Litmus","Red","Blue","First rough test of a solution"],
      ["Phenolphthalein","Colourless","Pink","Strong acid against strong base titration"],
      ["Methyl orange","Red","Yellow","Acid against weak base titration"],
      ["Universal indicator","Red-orange-yellow-green","Blue-purple","Reading the pH across the whole scale"],
      ["Red cabbage extract","Pink-red in acid","Blue-green in base","The classroom's home-made universal indicator"]
    ]},
    {k:"p", t:"**Worked — a titration calculation:** 25.0 cm³ of sodium hydroxide solution is neutralised exactly by 12.5 cm³ of 0.1 M hydrochloric acid. The equation NaOH + HCl → NaCl + H₂O runs 1:1, so moles of acid = 0.1 × 12.5/1000 = 0.00125, and the same moles of base sat in the 25.0 cm³: concentration = 0.00125 ÷ 0.0250 = **0.05 M NaOH**. In the bench method the burette is rinsed with the titrant, filled to the zero line, and run drop by drop near the end — the true end-point is the last drop that changes the colour, and three concordant titres within 0.1 cm³ are averaged before the number earns its place in the report."},
    {k:"p", t:"**Neutralisation at work:** the antacid tablet is magnesium hydroxide eating excess stomach acid; the farmer spreads lime on acid soil; the bee-sting venom (acid) is eased with dilute ammonia or baking soda, the wasp's alkaline venom with weak vinegar; the drain opener is caustic eating grease; and the tannery, the dye house and the soap boiler all run their vats on acid-meets-base. In industry the principle scales to ponds: acidic mine drainage is treated with lime until the pH reads safe, before it is let to the stream."},
  ],

  focus:[
    "Electrolytes and non-electrolytes; strong and weak",
    "Arrhenius and Bronsted-Lowry theories; conjugate pairs",
    "Properties of acids and bases",
    "pH and pOH calculations",
    "Percentage dissociation",
    "Acid-base properties of salts; hydrolysis",
    "Lewis acids and bases",
    "Laboratory and industrial preparation of salt; acid-base titration",
    "Indicators, including those prepared from local plants"
  ],
  terms:[
    {t:"electrolyte", d:"a substance conducting electricity when molten or in solution", x:"Salt solution is an electrolyte."},
    {t:"non-electrolyte", d:"a substance whose solution does not conduct electricity", x:"Sugar solution is a non-electrolyte."},
    {t:"strong electrolyte", d:"a substance almost completely ionised in solution", x:"Hydrochloric acid is a strong electrolyte."},
    {t:"weak electrolyte", d:"a substance only partly ionised in solution", x:"Ethanoic acid is a weak electrolyte."},
    {t:"acid", d:"a proton donor; gives H+ ions in water", x:"Hydrochloric acid donates protons."},
    {t:"base", d:"a proton acceptor; gives OH- ions in water if alkaline", x:"Ammonia accepts a proton."},
    {t:"alkali", d:"a soluble base", x:"Sodium hydroxide is an alkali."},
    {t:"conjugate acid", d:"the species formed when a base accepts a proton", x:"NH4+ is the conjugate acid of NH3."},
    {t:"conjugate base", d:"the species remaining when an acid donates a proton", x:"Cl- is the conjugate base of HCl."},
    {t:"amphoteric", d:"able to act as either an acid or a base", x:"Water and aluminium oxide are amphoteric."},
    {t:"Lewis acid", d:"an electron pair acceptor", x:"BF3 is a Lewis acid."},
    {t:"Lewis base", d:"an electron pair donor", x:"Ammonia is a Lewis base."},
    {t:"pH", d:"the negative logarithm of the hydrogen ion concentration", x:"A pH below 7 is acidic."},
    {t:"pOH", d:"the negative logarithm of the hydroxide ion concentration", x:"pH + pOH = 14 at 25 degrees."},
    {t:"neutralisation", d:"the reaction of an acid with a base to give salt and water", x:"Neutralisation is exothermic."},
    {t:"salt", d:"the compound formed when the hydrogen of an acid is replaced by a metal", x:"Sodium chloride is a salt."},
    {t:"hydrolysis", d:"the reaction of a salt with water affecting the pH", x:"Sodium carbonate hydrolyses to give an alkaline solution."},
    {t:"titration", d:"finding concentration by measured reaction with a standard solution", x:"Titration locates the end point precisely."},
    {t:"indicator", d:"a substance changing colour with pH", x:"Phenolphthalein is an indicator."},
    {t:"end point", d:"the point at which the indicator changes colour", x:"Stop the titration at the end point."},
    {t:"buffer", d:"a solution resisting change in pH on adding acid or base", x:"Blood is buffered near pH 7.4."},
    {t:"percentage dissociation", d:"the fraction of solute ionised, expressed as a percentage", x:"Weak acids have low percentage dissociation."}
  ],
  facts:[
    {q:"Define an acid and a base according to Arrhenius.", a:"An acid is a substance that produces hydrogen ions in aqueous solution; a base produces hydroxide ions in aqueous solution."},
    {q:"Define an acid and a base according to Bronsted-Lowry, and give a conjugate pair.", a:"An acid is a proton donor and a base a proton acceptor. In HCl + H₂O → Cl⁻ + H₃O⁺, HCl and Cl⁻ are a conjugate acid-base pair, as are H₂O and H₃O⁺."},
    {q:"State the Lewis definition of acids and bases with an example.", a:"A Lewis acid accepts a lone pair of electrons and a Lewis base donates one. In BF₃ + NH₃ → F₃B–NH₃, BF₃ is the Lewis acid and ammonia the Lewis base."},
    {q:"Give the formula for pH and state the pH ranges for acidic, neutral and alkaline solutions.", a:"pH = −log[H⁺]. Below 7 is acidic, exactly 7 is neutral, and above 7 is alkaline at 25 °C."},
    {q:"State the relationship between pH and pOH and explain it.", a:"pH + pOH = 14 at 25 °C, because the ionic product of water Kw = [H⁺][OH⁻] = 1 × 10⁻¹⁴."},
    {q:"State three differences between strong and weak acids.", a:"A strong acid ionises almost completely, has a high percentage dissociation and a low pH at a given concentration, and conducts well; a weak acid ionises only partly, has a low percentage dissociation and a higher pH at the same concentration, and conducts poorly."},
    {q:"Name four general properties of acids.", a:"They taste sour, turn blue litmus red, react with reactive metals to give hydrogen, react with carbonates to give carbon dioxide, and neutralise bases to form salt and water."},
    {q:"Explain why a solution of sodium carbonate is alkaline.", a:"The carbonate ion is the conjugate base of the weak acid H₂CO₃, so it hydrolyses in water, accepting protons and releasing hydroxide ions, which raises the pH above 7."},
    {q:"Describe how a salt may be prepared in the laboratory by neutralisation.", a:"Warm dilute acid is added to excess insoluble base or carbonate and stirred until no more dissolves; the mixture is filtered to remove the excess solid, and the filtrate is evaporated to the point of crystallisation and left to cool so that crystals form."},
    {q:"Outline the steps of an acid-base titration.", a:"Rinse and fill the burette with the standard solution; pipette a known volume of the other solution into a conical flask; add two or three drops of indicator; run the burette solution in with swirling until the indicator just changes colour; record the titre and repeat until two readings agree closely."},
    {q:"How is table salt obtained industrially?", a:"By mining impure rock salt and purifying it, or by the solar evaporation of sea water in shallow pans, followed by washing and recrystallisation to remove impurities."}
  ],
  tf:[
    {s:"A strong acid is always concentrated.", a:"false", why:"Strength refers to the degree of ionisation; concentration refers to the amount dissolved. A strong acid can be dilute."},
    {s:"pH + pOH equals 14 at 25 °C.", a:"true", why:"It follows from the ionic product of water, Kw = 1 × 10^-14."},
    {s:"Water can act as both an acid and a base.", a:"true", why:"Water is amphoteric: it donates a proton to ammonia and accepts one from hydrogen chloride."},
    {s:"All bases are alkalis.", a:"false", why:"Only soluble bases are alkalis; copper(II) oxide is a base but not an alkali."},
    {s:"A Lewis acid donates a pair of electrons.", a:"false", why:"A Lewis acid accepts an electron pair; the Lewis base donates it."},
    {s:"Neutralisation reactions are exothermic.", a:"true", why:"Heat is released as hydrogen and hydroxide ions combine to form water."},
    {s:"An indicator prepared from hibiscus petals can show whether a solution is acidic.", a:"true", why:"Many local plant pigments are natural indicators that change colour with pH."}
  ],
  classify:{ title:"Sort these substances", groups:[
    {name:"Strong acids", items:["hydrochloric acid","sulfuric acid","nitric acid"]},
    {name:"Weak acids", items:["ethanoic acid","carbonic acid","citric acid"]},
    {name:"Strong bases", items:["sodium hydroxide","potassium hydroxide"]},
    {name:"Weak bases", items:["ammonia solution","calcium hydroxide"]},
    {name:"Non-electrolytes", items:["sugar solution","ethanol","pure water"]},
    {name:"Indicators", items:["litmus","phenolphthalein","methyl orange","hibiscus extract"]}
  ]},
  diagram:{ title:"Titration apparatus", caption:"State the purpose of each labelled part.", parts:[
    {p:"Burette", f:"Delivers a measured variable volume of standard solution accurately"},
    {p:"Burette tap", f:"Controls the flow so it can be reduced to drops near the end point"},
    {p:"Pipette", f:"Transfers one accurate fixed volume of the solution being analysed"},
    {p:"Conical flask", f:"Holds the analyte; its shape permits swirling without loss"},
    {p:"White tile", f:"Placed beneath the flask so the colour change is clearly seen"},
    {p:"Indicator", f:"Signals the end point by changing colour"},
    {p:"Retort stand and clamp", f:"Holds the burette vertical and steady"}
  ]},
  experiment:{
    title:"Preparing an indicator from local plants and testing solutions",
    aim:"To extract a natural indicator from local plant material and use it to classify household substances as acidic, neutral or alkaline.",
    materials:["Hibiscus petals, red cabbage or purple yam","Ethanol or hot water","Mortar and pestle","Filter funnel and paper","Test tubes and rack","Household samples: lime juice, vinegar, soap solution, salt solution, baking soda, palm wine","Universal indicator paper for comparison","Dropper"],
    steps:[
      "Grind a handful of the plant material in a mortar with a little hot water or ethanol.",
      "Filter the coloured extract into a clean container; this is the indicator.",
      "Place 2 cm3 of each household sample into separate labelled test tubes.",
      "Add three drops of the plant indicator to each tube and record the colour produced.",
      "Test the same samples with universal indicator paper and record the pH.",
      "Tabulate colour against pH, and use the table to classify each sample as acidic, neutral or alkaline."
    ],
    expect:"The extract gives distinctly different colours in different tubes: typically red or pink in lime juice and vinegar, purple or unchanged in salt solution, and green, blue or yellow in soap and baking soda. Comparison with the universal indicator paper shows lime juice and vinegar are acidic, salt solution neutral, and soap and baking soda alkaline.",
    why:"The pigments in these plants are weak acids whose molecular structure, and therefore the wavelengths of light they absorb, changes when they gain or lose a proton. Because the colour depends on the hydrogen ion concentration of the solution, the extract acts as a genuine acid-base indicator — a serviceable substitute where manufactured indicators are unavailable."
  },
  worked:[
    {q:"Calculate the pH of a solution with [H+] = 1 × 10⁻³ mol/dm³.", steps:["pH = −log[H⁺]","−log(10⁻³)"], a:"pH = 3"},
    {q:"Find the pH of 0.01 M HCl.", steps:["HCl is strong, so [H⁺] = 0.01","pH = −log(10⁻²)"], a:"pH = 2"},
    {q:"A solution has pOH = 5. Find its pH.", steps:["pH + pOH = 14","14 − 5"], a:"pH = 9 (alkaline)"},
    {q:"Find [H+] in a solution of pH 4.", steps:["[H⁺] = 10⁻ᵖᴴ","10⁻⁴"], a:"1 × 10⁻⁴ mol/dm³"},
    {q:"Find the pH of 0.001 M NaOH.", steps:["[OH⁻] = 10⁻³, pOH = 3","pH = 14 − 3"], a:"pH = 11"},
    {q:"25 cm3 of NaOH needs 20 cm3 of 0.1 M HCl. Find the NaOH concentration.", steps:["moles HCl = 0.1 × 0.020 = 0.002","1:1 ratio so moles NaOH = 0.002","M = 0.002 ÷ 0.025"], a:"0.08 mol/dm³"},
    {q:"A 0.1 M weak acid has [H+] = 1.3 × 10⁻³. Find its percentage dissociation.", steps:["(1.3 × 10⁻³ ÷ 0.1) × 100","0.013 × 100"], a:"1.3%"},
    {q:"What volume of 0.5 M H2SO4 neutralises 40 cm3 of 0.5 M NaOH?", steps:["moles NaOH = 0.5 × 0.040 = 0.02","Ratio 1 acid : 2 base, so acid = 0.01","V = 0.01 ÷ 0.5"], a:"20 cm³"}
  ],
  apply:[
    {q:"Why is an antacid tablet effective against indigestion?", a:"It contains a weak base such as magnesium hydroxide or calcium carbonate that neutralises excess hydrochloric acid in the stomach, raising the pH and relieving the pain without making the stomach alkaline."},
    {q:"A farmer's soil tests at pH 4.5. Recommend a treatment and explain the chemistry.", a:"Apply lime, calcium hydroxide or calcium carbonate. The base neutralises the excess hydrogen ions in the soil, raising the pH toward neutral where most crops take up nutrients best."},
    {q:"Explain why bee stings are treated with baking soda but wasp stings with vinegar.", a:"A bee sting is acidic, so the mildly alkaline baking soda neutralises it; a wasp sting is alkaline, so the acidic vinegar neutralises that instead."},
    {q:"Why must a burette be rinsed with the solution it will contain rather than with water?", a:"Water left inside would dilute the standard solution and lower its true concentration, so the titre measured would be larger than it should be and the result inaccurate."},
    {q:"Blood stays close to pH 7.4 despite acids entering it constantly. Explain the principle involved.", a:"Blood is buffered: it contains a weak acid and its conjugate base, chiefly the carbonic acid/hydrogencarbonate system, which absorbs added H⁺ or OH⁻ and so resists any large change in pH."}
  ],
  activities:[
    "List several acids and bases and write equations showing how they behave as electrolytes",
    "Write acid-base reactions illustrating the Arrhenius theory",
    "Write acid-base reactions illustrating the Bronsted-Lowry theory and identify conjugate pairs",
    "Solve pH and pOH problems and percentage dissociation calculations",
    "LAB: carry out acid-base titrations and calculate concentrations",
    "LAB: prepare an indicator from local plants and use it to test acidity and basicity",
    "Study the mining of impure sodium chloride and its conversion into table salt"
  ],
  materials:[
    "Primary text: Michael C. Cox and John Sadler, Senior Secondary Guide for Liberia — Chemistry (Star Books/Pearson, 2011)",
    "Burettes, pipettes, conical flasks and retort stands",
    "Standard acid and alkali solutions",
    "Indicators: litmus, phenolphthalein, methyl orange, universal indicator",
    "Local plant material for indicator extraction",
    "pH meters or pH paper"
  ],
  assessment:["Presentation","Written assignment","Quiz","Titration practical and report","Calculation exercise"]
},
{
  grade:11, period:"IV", sem:"Two", icon:"🔌",
  title:"Electrochemistry",
  subtitle:"Electrochemical cells, standard electrode potentials, electrolysis, Faraday's laws and applications",
  outcomes:[
    "Learners are able to demonstrate knowledge of the concepts and principles of electrochemistry as well as its practical applications"
  ],
  objectives:[
    "Explain the concept of balancing redox reactions",
    "Discuss the electrochemical cell and make use of the cell diagram",
    "Apply the principle of electrolysis to distinguish the electrolytic from the electrochemical cell",
    "Discuss the factors that influence the discharge of species",
    "Simplify cell reactions for the electrolysis of various species",
    "State Faraday's first and second laws and solve sample problems",
    "Describe the practical applications of electrolysis, including electroplating and smelting"
  ],
  note:"An <b>electrochemical (galvanic) cell</b> converts chemical energy to electrical energy spontaneously; an <b>electrolytic cell</b> uses electrical energy to force a non-spontaneous reaction. In both, <b>oxidation occurs at the anode</b> and <b>reduction at the cathode</b>. <b>Faraday's first law</b>: mass deposited is proportional to charge passed, Q = It, with 1 faraday = 96 500 C per mole of electrons.",
  study:[
    /* ---- course text: Semester Two, Period IV — Electrochemistry (guide pp. 31-34) ---- */
    {k:"h3", t:"Review — Redox Reactions and Balancing"},
    {k:"p", t:"Electrochemistry is redox put to work, so review the balancing of redox equations first: split the equation into the **oxidation half-equation** (electrons lost) and the **reduction half-equation** (electrons gained), balance atoms and charges in each, and join them with equal electrons. Practise the problems on balancing redox reactions."},
    {k:"rule"},
    {k:"h3", t:"Electrochemical Cells and Standard Electrode Potentials"},
    {k:"p", t:"An **electrochemical (galvanic) cell** turns a spontaneous redox reaction into electric current: the anode is oxidized (negative terminal) and the cathode reduced (positive), the electrons travelling through the wire while the **salt bridge** completes the circuit. Each electrode has a **standard electrode potential** (E°), measured against the standard hydrogen electrode; the cell's **e.m.f.** is E°(cathode) − E°(anode) — a positive e.m.f. means a spontaneous cell reaction. Draw the diagrams of various electrochemical cells and do the simple e.m.f. calculations; solve problems using standard electrode potentials."},
    {k:"h3", t:"The Electrochemical Series, and What It Predicts"},
    {k:"table", head:["Metal","Half-equation (M to M+n)","Standard electrode potential, E (volts)"], rows:[
      ["Lithium","Li to Li+ + e","−3.05"],
      ["Zinc","Zn to Zn2+ + 2e","−0.76"],
      ["Iron","Fe to Fe2+ + 2e","−0.44"],
      ["Hydrogen","2H+ + 2e to H2","0.00 (reference)"],
      ["Copper","Cu2+ + 2e to Cu","+0.34"],
      ["Silver","Ag+ + e to Ag","+0.80"],
      ["Gold","Au3+ + 3e to Au","+1.50"]
    ]},
    {k:"p", t:"The series reads one way: the more **negative** the potential, the more eagerly the metal gives up electrons — the better **reducing agent** and the easier it is **oxidized**; lithium sits at the eager end, gold at the noble. **Prediction one — will it beat hydrogen?** A metal above hydrogen in the series (Zn, Fe, Mg) dissolves in dilute acid giving off H2: Zn + 2HCl → ZnCl2 + H2; copper and silver, below it, sit in the acid untouched. **Prediction two — which way does the cell run?** In the Daniell cell zinc (−0.76) and copper (+0.34): E cell = (+0.34) − (−0.76) = **+1.10 V** — positive, so zinc is the anode (oxidized), copper the cathode, and electrons flow from zinc to copper through the wire. Swap the pair with silver (−0.76 versus +0.80) and the e.m.f. climbs to 1.56 V, the everyday voltage of a silver cell. **Prediction three — corrosion:** where two metals touch in damp air, the more negative (anodic) one corrodes to protect the other — the zinc on a galvanised pipe is sacrificed so the iron stands, and a copper roof next to a steel gutter teaches the same lesson the wrong way."},
    {k:"rule"},
    {k:"h3", t:"Cell Diagrams"},
    {k:"p", t:"The **cell diagram** (cell notation) writes the cell in one line: anode on the left, cathode on the right, a single vertical line for a phase boundary and double lines for the salt bridge — Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s) for the Daniell cell."},
    {k:"h3", t:"The Cells in the House and the Car"},
    {k:"p", t:"The **dry cell (Leclanché cell)** — the flat and the cylinder in every torch and clock — is a galvanic cell wearing a paste: the **zinc can is the anode**, slowly oxidizing to Zn²⁺; the central **carbon rod is the cathode**, where manganese dioxide (with a little carbon) accepts the electrons; the **ammonium chloride paste** is the electrolyte, and the cell's 1.5 V is the difference between the two electrodes. It is a **primary** cell: the chemistry runs one way, the zinc can eats through, and the cell is spent. The **lead-acid storage battery** is a **secondary** cell — the same plate chemistry, reversible: on discharge, lead anodes and lead(IV) oxide cathodes both build lead(II) sulfate in sulfuric acid, E about 2.0 V per cell, six cells stacked for the car's 12 V; on charge the charger pushes the reaction back, re-forming Pb and PbO₂ and re-concentrating the acid — which is why the electrolyte's density is the battery's health test, and why the terminal that feeds the engine is the **negative** lead. The alkaline cell, the nickel-cadmium pack and the lithium-ion battery of the phone are the same family refined: different couples, the same rule — a spontaneous redox, its electrons captured in a wire."},
    {k:"rule"},
    {k:"h3", t:"Electrolysis — Principles, and the Factors Influencing Discharge"},
    {k:"p", t:"**Electrolysis** is the reverse trade: an external current forces a non-spontaneous reaction in an **electrolytic cell**. Distinguish the **electrolytic cell from the electrochemical cell** — one consumes current to drive chemistry, the other makes current from chemistry; the anode is positive in electrolysis, negative in a battery. The **factors that influence the discharge of species** at the electrodes: the position of the ion in the electrochemical series, the concentration of the ions, and the nature of the electrodes. Simplify the cell reactions; apply electrolysis to electroplating — **electroplate a metal object with copper** in the lab — and to the extraction of metals."},
    {k:"p", t:"**Worked — the electrolysis of brine (the chlor-alkali industry):** electrolyse a concentrated sodium chloride solution with inert electrodes. At the **cathode** the water (or the hydrogen ion) is reduced, giving hydrogen gas; at the **anode** the chloride ion is oxidized, giving chlorine gas; and the sodium left behind, with the hydroxide from the water, forms **sodium hydroxide** in the remaining solution: 2NaCl(aq) + 2H₂O(l) → 2NaOH(aq) + H₂(g) + Cl₂(g). One vat, three products, all sold."},
    {k:"bul", items:[
      "**Sodium hydroxide** — the soap boiler's alkali, the paper and textile works' base, the drain opener",
      "**Chlorine** — drinking-water disinfection, PVC (polyvinyl chloride) pipe and cable sheathing, bleaching powder, hydrochloric acid",
      "**Hydrogen** — ammonia for fertilizer, hydrogenation of oils, and the fuel of the emerging hydrogen economy"
    ]},
    {k:"rule"},
    {k:"h3", t:"Faraday and Applications"},
    {k:"p", t:"**Faraday's laws of electrolysis** quantify the work: the mass discharged is proportional to the quantity of electricity passed (charge Q = current × time), and to the chemical equivalent of the ion. Applications: electroplating, the purification of copper, the extraction of aluminium, and the calculation of masses deposited across the exercises."},
    {k:"p", t:"**Worked — copper from a current:** pass 2.0 A for one hour through copper(II) sulfate with copper electrodes. Charge Q = It = 2.0 × 3 600 = **7 200 C**. The Faraday constant is **96 500 C per mole of electrons**, so the charge carries 7 200 ÷ 96 500 = 0.0746 mol of electrons. Copper plates down two electrons per ion (Cu²⁺ + 2e⁻ → Cu), so the copper formed is 0.0746 ÷ 2 = 0.0373 mol, weighing 0.0373 × 63.5 = **2.37 g** — and in a plating bath that mass leaves the anode and lands on the cathode, the solution's concentration holding steady. Scale it: the same 2.37 g of copper on a 50 cm² spoon is a layer about 0.1 mm thick, thick enough to shine and to stop the steel beneath from rusting."},
    {k:"h3", t:"Electroplating, Step by Step"},
    {k:"num", items:[
      "**Clean** the article to be plated — grease and oxide will mask the bond and the plate will flake",
      "**Hang it as the cathode** from an inert clip, dipped in a solution of a salt of the plating metal (copper sulfate for copper, silver nitrate for silver, tin chloride for tin)",
      "**Use the plating metal as the anode** so the dissolved ions replace themselves and the bath keeps its strength (or an inert anode if the metal is precious)",
      "**Run a gentle current** — too fast and the deposit throws rough, spongy crystals; slow current gives the smooth mirror",
      "**Rinse, dry and judge** by the shine and by the scratch test: a good plate is the metal you see, the article only what it has become"
    ]},
  ],

  focus:[
    "Review of redox reactions and balancing",
    "Electrochemical cells and standard electrode potential",
    "Cell diagrams and emf of cells",
    "Principles of electrolysis; comparing electrolytic and electrochemical cells",
    "Factors influencing the discharge of species",
    "Faraday's first and second laws of electrolysis",
    "Practical applications: electroplating, smelting and purification"
  ],
  terms:[
    {t:"electrochemistry", d:"the study of the relation between chemical change and electricity", x:"Electrochemistry explains batteries."},
    {t:"electrochemical cell", d:"a cell producing electricity from a spontaneous redox reaction", x:"A dry cell is an electrochemical cell."},
    {t:"electrolytic cell", d:"a cell using electricity to drive a non-spontaneous reaction", x:"Electroplating uses an electrolytic cell."},
    {t:"electrode", d:"a conductor through which current enters or leaves an electrolyte", x:"Carbon rods serve as electrodes."},
    {t:"anode", d:"the electrode at which oxidation occurs", x:"The anode is positive in electrolysis."},
    {t:"cathode", d:"the electrode at which reduction occurs", x:"Metal is deposited at the cathode."},
    {t:"electrolyte", d:"a molten or dissolved substance conducting by ion movement", x:"Copper sulfate solution is an electrolyte."},
    {t:"electrolysis", d:"chemical decomposition produced by passing an electric current", x:"Electrolysis of water gives hydrogen and oxygen."},
    {t:"half cell", d:"one electrode and its solution, half of a complete cell", x:"Two half cells make an electrochemical cell."},
    {t:"salt bridge", d:"a connection allowing ion flow between half cells", x:"The salt bridge completes the circuit."},
    {t:"electrode potential", d:"the tendency of an electrode to lose or gain electrons", x:"Electrode potential is measured against hydrogen."},
    {t:"standard hydrogen electrode", d:"the reference electrode assigned a potential of zero", x:"All potentials are quoted against the standard hydrogen electrode."},
    {t:"electromotive force", d:"the potential difference of a cell producing no current", x:"The emf drives electrons round the circuit."},
    {t:"cell diagram", d:"a shorthand notation representing a cell", x:"A cell diagram places the anode on the left."},
    {t:"Faraday constant", d:"the charge on one mole of electrons, 96 500 C", x:"One faraday deposits one mole of silver."},
    {t:"electroplating", d:"depositing a thin metal layer on an object by electrolysis", x:"Electroplating protects steel from corrosion."},
    {t:"smelting", d:"extracting metal from ore by heating, often with reduction", x:"Iron is obtained by smelting."},
    {t:"discharge", d:"the loss or gain of electrons by an ion at an electrode", x:"The order of discharge depends on position in the series."},
    {t:"electrochemical series", d:"an order of elements by their standard electrode potentials", x:"The electrochemical series predicts displacement."}
  ],
  facts:[
    {q:"State three differences between an electrochemical cell and an electrolytic cell.", a:"An electrochemical cell produces electricity from a spontaneous reaction, its anode is negative and no external supply is needed; an electrolytic cell consumes electricity to drive a non-spontaneous reaction, its anode is positive and an external source is essential."},
    {q:"At which electrode does oxidation occur, and at which reduction, in both types of cell?", a:"Oxidation always occurs at the anode and reduction always at the cathode, in both electrochemical and electrolytic cells."},
    {q:"What is the function of a salt bridge?", a:"It completes the electrical circuit by allowing ions to migrate between the half cells, maintaining electrical neutrality without letting the two solutions mix."},
    {q:"Define standard electrode potential.", a:"The potential of an electrode measured against the standard hydrogen electrode under standard conditions of 298 K, 1 mol/dm³ solutions and 1 atmosphere pressure."},
    {q:"How is the emf of a cell calculated from electrode potentials?", a:"E°cell = E°cathode − E°anode, that is the potential of the reduction half minus the potential of the oxidation half. A positive value indicates a spontaneous cell reaction."},
    {q:"State Faraday's first law of electrolysis.", a:"The mass of a substance liberated at an electrode is directly proportional to the quantity of electricity passed through the electrolyte."},
    {q:"State Faraday's second law of electrolysis.", a:"When the same quantity of electricity passes through different electrolytes, the masses liberated are proportional to their chemical equivalent masses."},
    {q:"State the three factors influencing the discharge of ions at an electrode.", a:"The position of the ion in the electrochemical series, the concentration of the ion in the electrolyte, and the nature of the electrode used."},
    {q:"Write the electrode reactions for the electrolysis of acidified water.", a:"At the cathode 2H⁺ + 2e⁻ → H₂, and at the anode 4OH⁻ → 2H₂O + O₂ + 4e⁻, giving hydrogen and oxygen in a 2:1 volume ratio."},
    {q:"Name four practical applications of electrolysis.", a:"Electroplating to protect and decorate metals; purification of copper for electrical wiring; extraction of reactive metals such as aluminium and sodium; and the manufacture of chlorine and sodium hydroxide from brine."},
    {q:"Why is aluminium extracted by electrolysis rather than by reduction with carbon?", a:"Aluminium is very high in the reactivity series, so its oxide is extremely stable and carbon cannot reduce it; only the electrical energy supplied in electrolysis is sufficient."}
  ],
  tf:[
    {s:"Oxidation occurs at the anode in both types of cell.", a:"true", why:"The definition of the anode is the electrode at which oxidation occurs."},
    {s:"An electrolytic cell produces electrical energy.", a:"false", why:"It consumes electrical energy to drive a non-spontaneous reaction; the electrochemical cell produces it."},
    {s:"One faraday equals 96 500 coulombs.", a:"true", why:"It is the charge carried by one mole of electrons."},
    {s:"A positive cell emf indicates a spontaneous reaction.", a:"true", why:"A positive E°cell corresponds to a negative free energy change."},
    {s:"The salt bridge allows electrons to pass between the half cells.", a:"false", why:"Electrons pass through the external wire; the salt bridge carries ions to maintain neutrality."},
    {s:"Aluminium can be extracted from its ore using carbon in a blast furnace.", a:"false", why:"Aluminium is too reactive; its oxide must be electrolysed."}
  ],
  classify:{ title:"Sort these features", groups:[
    {name:"Electrochemical (galvanic) cell", items:["spontaneous reaction","produces electricity","anode negative","dry cell"]},
    {name:"Electrolytic cell", items:["non-spontaneous reaction","consumes electricity","anode positive","electroplating"]},
    {name:"At the cathode", items:["reduction","gain of electrons","metal deposited"]},
    {name:"At the anode", items:["oxidation","loss of electrons","gas often evolved"]},
    {name:"Applications of electrolysis", items:["electroplating","copper purification","aluminium extraction","chlorine manufacture"]}
  ]},
  diagram:{ title:"A simple electrochemical cell", caption:"State the function of each labelled component.", parts:[
    {p:"Zinc electrode", f:"Anode: zinc is oxidised, releasing electrons into the circuit"},
    {p:"Copper electrode", f:"Cathode: copper ions are reduced and deposited on it"},
    {p:"Zinc sulfate solution", f:"Electrolyte of the anode half cell"},
    {p:"Copper sulfate solution", f:"Electrolyte of the cathode half cell"},
    {p:"Salt bridge", f:"Permits ion flow to maintain neutrality and completes the circuit"},
    {p:"External wire", f:"Carries electrons from the anode to the cathode"},
    {p:"Voltmeter", f:"Measures the electromotive force of the cell"}
  ]},
  experiment:{
    title:"Electroplating a metal object with copper",
    aim:"To electroplate an iron nail with copper and verify Faraday's first law by weighing.",
    materials:["Iron nail, cleaned with emery paper","Copper strip as the anode","Copper(II) sulfate solution acidified with a little sulfuric acid","Beaker","Battery or low-voltage d.c. supply","Connecting wires with crocodile clips","Ammeter and stop clock","Balance to 0.01 g"],
    steps:[
      "Clean and degrease the nail, dry it thoroughly and weigh it accurately.",
      "Fill the beaker with acidified copper(II) sulfate solution.",
      "Connect the nail to the negative terminal (cathode) and the copper strip to the positive terminal (anode).",
      "Include the ammeter in the circuit and lower both electrodes into the solution without letting them touch.",
      "Pass a steady current of about 0.3 A for exactly 15 minutes, recording the current.",
      "Remove the nail, rinse it gently, dry it and reweigh; calculate the charge passed as Q = It and compare with the mass gained."
    ],
    expect:"A bright pink-brown layer of copper builds up evenly on the nail, which gains mass, while the copper anode loses a comparable mass. The mass deposited agrees approximately with the value calculated from Q = It and Faraday's first law, that 96 500 C deposits one mole of electrons, so 2 × 96 500 C deposits one mole of copper.",
    why:"At the cathode Cu2+ + 2e− → Cu, so every two electrons arriving deposit one copper atom; the mass deposited is therefore directly proportional to the charge passed, which is Faraday's first law. At the anode Cu → Cu2+ + 2e− replenishes the solution, so the copper concentration stays constant and the anode dissolves as the cathode grows."
  },
  worked:[
    {q:"Calculate the charge passed when 2 A flows for 5 minutes.", steps:["Q = It","t = 5 × 60 = 300 s","Q = 2 × 300"], a:"600 C"},
    {q:"How many moles of electrons are in 96 500 C?", steps:["1 faraday = 96 500 C","= 1 mole of electrons"], a:"1 mole"},
    {q:"Find the mass of copper deposited by 0.2 mol of electrons (Cu = 64).", steps:["Cu2+ + 2e⁻ → Cu","0.2 ÷ 2 = 0.1 mol Cu","0.1 × 64"], a:"6.4 g"},
    {q:"Calculate the emf of a cell with E°(Cu2+/Cu) = +0.34 V and E°(Zn2+/Zn) = −0.76 V.", steps:["E°cell = E°cathode − E°anode","0.34 − (−0.76)"], a:"+1.10 V"},
    {q:"What mass of silver is deposited by 96 500 C? (Ag = 108, Ag+ + e- → Ag)", steps:["1 faraday = 1 mol electrons","1 mol electrons gives 1 mol Ag"], a:"108 g"},
    {q:"How long must 1.5 A flow to deposit 0.5 mol of electrons?", steps:["Q = 0.5 × 96 500 = 48 250 C","t = Q/I = 48 250 ÷ 1.5"], a:"32 167 s (about 8.9 hours)"},
    {q:"During electrolysis of water, 4 mol of electrons pass. How many moles of oxygen form?", steps:["4OH⁻ → 2H₂O + O₂ + 4e⁻","4 mol electrons → 1 mol O₂"], a:"1 mole of O₂"}
  ],
  apply:[
    {q:"Why is a bicycle handlebar chromium plated rather than painted?", a:"The electroplated chromium bonds as a continuous metallic layer that resists corrosion and abrasion far better than paint, and it also gives a durable bright finish."},
    {q:"Explain why impure copper must be purified before use in electrical cables.", a:"Impurities greatly increase electrical resistance and cause energy loss as heat. Electrolytic refining, with impure copper as anode and pure copper as cathode, gives copper of 99.99% purity."},
    {q:"Sea water is electrolysed instead of pure water in industry. Give one product and one reason.", a:"Chlorine is produced at the anode along with hydrogen and sodium hydroxide. Sea water is abundant and free, and the dissolved ions make it a good conductor, whereas pure water conducts poorly."},
    {q:"A ship's steel hull carries blocks of zinc below the waterline. Explain the electrochemistry.", a:"Zinc is more reactive than iron, so it acts as the anode of a natural cell and is oxidised in preference — sacrificial protection. The hull becomes the cathode and is protected until the zinc is consumed."},
    {q:"Why does a torch battery eventually stop working even though its metals remain?", a:"The reaction consumes the electrolyte and the reactive electrode material at the surfaces where reaction occurs, and products accumulate there; the cell reaches equilibrium so no further net electron flow is possible."}
  ],
  activities:[
    "Practice problems on balancing redox reactions",
    "Problem solving using standard electrode potentials",
    "Draw diagrams of various electrochemical cells and calculate emf",
    "LAB: set up a simple cell using copper wire, iron nail, copper(II) sulfate solution and a beaker",
    "LAB: electroplate an object and verify Faraday's first law",
    "Collect and examine used dry cells to identify their components",
    "Discuss practical applications of electrolysis including electroplating and smelting"
  ],
  materials:[
    "Primary text: Michael C. Cox and John Sadler, Senior Secondary Guide for Liberia — Chemistry (Star Books/Pearson, 2011)",
    "Copper strips, zinc strips, iron nails and copper wire",
    "Copper(II) sulfate and zinc sulfate solutions",
    "Batteries, wires, ammeters and voltmeters",
    "Beakers, salt bridges and electrode holders",
    "Electrochemical series data tables"
  ],
  assessment:["Presentation","Written assignment","Quiz","Laboratory report","Calculation exercise"]
},
{
  grade:11, period:"V", sem:"Two", icon:"🔥",
  title:"Chemical Energetics and Nuclear Chemistry",
  subtitle:"Enthalpy changes, Hess's law and energy diagrams; radioactivity, half-life, fission and fusion",
  outcomes:[
    "Learners are able to perform comparative analysis on the concept of energetics and interpret related energy level diagrams",
    "Learners are able to describe radioactivity, including its various applications"
  ],
  objectives:[
    "Identify the system and the surroundings in a chemical process",
    "Identify the ways in which energy is transferred in a chemical process",
    "Investigate the relationship between internal energy and enthalpy",
    "Calculate the change in enthalpy of a reaction using Hess's law",
    "Describe radioactivity, including its historical development",
    "Explain how nuclear reactions differ from chemical reactions",
    "Describe the types and nature of radiation and the role of half-life",
    "Distinguish between fission and fusion and explain their effects and uses"
  ],
  note:"An <b>exothermic</b> reaction releases heat and has a <b>negative ΔH</b>; an <b>endothermic</b> reaction absorbs heat and has a <b>positive ΔH</b>. <b>Hess's law</b>: the total enthalpy change is the same whatever route is taken. Heat energy is found from <b>q = mcΔT</b>. In nuclear chemistry the <b>half-life</b> is the time for half the nuclei present to decay, and it is constant for a given isotope.",
  study:[
    /* ---- course text: Semester Two, Period V — Chemical Energetics and Nuclear Chemistry (guide pp. 35-38) ---- */
    {k:"h3", t:"Thermodynamics — Heat, Systems and the Law of Conservation of Energy"},
    {k:"p", t:"In every chemical process, name the **system** (the reaction under study) and the **surroundings** (all the rest). **Heat energy** moves between them; **heat capacity** is the heat needed to raise a body's temperature by one degree (specific heat, per gram). The **changes of state** — melting, boiling — take in or give out heat while the temperature stays fixed. **Chemical energy** is energy stored in bonds, and the **law of conservation of energy** rules the whole: energy is neither created nor destroyed, only transferred — from bond to heat, heat to surroundings."},
    {k:"rule"},
    {k:"h3", t:"Enthalpy Changes and Energy-Level Diagrams"},
    {k:"p", t:"**Enthalpy (H)** is the heat content of a system at constant pressure; the change ΔH relates closely to the internal energy. An **exothermic** reaction releases heat — ΔH negative; an **endothermic** one absorbs heat — ΔH positive. Read them off **energy-level diagrams**: exothermic sits the products lower than the reactants; endothermic, higher. Analyze the experimental data behind them."},
    {k:"p", t:"**Worked — from bond energies:** break the reactants' bonds (energy in) and make the products' (energy out), and ΔH = Σ(bonds broken) − Σ(bonds made). For H₂ + Cl₂ → 2HCl: breaking one H–H (436 kJ) and one Cl–Cl (243 kJ) costs 679 kJ; making two H–Cl bonds (2 × 431 = 862 kJ) pays back 862; ΔH = 679 − 862 = **−183 kJ per mole of reaction** — exothermic, as the burning hydrogen-chlorine flame shows. The rule holds generally: a reaction is exothermic when the bonds it makes are **stronger** than the bonds it breaks, and the flame is the surplus leaving as heat. **Worked — in the calorimeter:** 100 g of water warmed from 20 °C to 25 °C by a reaction absorbs q = mcΔT = 100 × 4.18 × 5 = **2 090 J = 2.09 kJ** (the specific heat of water, 4.18 J g⁻¹ K⁻¹, is why water is the coolant of machines and of fevers alike). Divide by the moles that reacted and the enthalpy change per mole is in hand — the same arithmetic that measures the heat of neutralization."},
    {k:"p", t:"**Enthalpy of neutralization, a constant worth knowing:** every strong acid meeting every strong base in dilute solution releases about **−57 kJ per mole of water formed** — the reaction is always the same H⁺ + OH⁻ → H₂O underneath, which is why the number barely moves from acid to acid. It is a tidy classroom flame: mixing equal volumes of 1 M HCl and 1 M NaOH in a foam cup climbs a few degrees, and the calculated −57 kJ/mol sits close behind it."},
    {k:"p", t:"**Chemical energy in Liberian life:** the firewood heap, the charcoal briquette, the kerosene lamp, the petrol in the canoe engine and the fuel oil in the generator are all stored enthalpy being released — combustion, every one of it, exothermic by hundreds of kJ per mole (octane: about −5 500 kJ/mol). The body runs the same ledger on glucose, −2 800 kJ per mole, delivered slowly by respiration instead of in a flash. On the grid, the steam turbine at the plant is water's enthalpy change doing the turning; and the coming years' question is which **exothermic reaction** — firewood, fuel oil, diesel, or the sun's photons converted by a cell — will keep Liberia's lights on cheapest and cleanest, the enthalpy books deciding alongside the price at the depot."},
    {k:"rule"},
    {k:"h3", t:"Standard Enthalpy Changes; Hess's Law"},
    {k:"p", t:"The **standard enthalpy changes** are measured under standard conditions: the **standard enthalpy of combustion** (one mole burning completely in oxygen) and the **standard enthalpy of formation** (one mole formed from its elements). **Hess's law of heat summation**: the total enthalpy change is the same whatever the route — add the steps' ΔH values to reach a ΔH that cannot be measured directly. Calculate ΔH of a reaction using Hess's law, and using standard enthalpies: ΔH°(reaction) = ΣΔH°f(products) − ΣΔH°f(reactants). In the lab, measure the enthalpy change of neutralization of an acid by a base with a calorimeter and thermometer."},
    {k:"rule"},
    {k:"h3", t:"Nuclear Chemistry — Radioactivity"},
    {k:"p", t:"**Radioactivity** is the spontaneous disintegration of an unstable nucleus with the giving out of radiation — Becquerel discovered it, and the Curies carried it on (the historical development). Nuclear reactions **differ from ordinary chemical reactions**: they change the nucleus, not the electrons; one element becomes another; the energies are millions of times greater; and the rate cannot be altered by heat, pressure or catalyst."},
    {k:"p", t:"The **types and nature of radiations:** **alpha (α)** particles are helium nuclei — heavy, positive, short-range, stopped by paper; **beta (β)** particles are electrons — light, negative, stopped by a few millimetres of metal; **gamma (γ)** rays are electromagnetic waves — uncharged and needing lead or concrete. A decay is written as a **nuclear equation** that balances **mass number** (top) and **charge** (bottom): uranium-238 alpha-decays, ²³⁸U → ²³⁴Th + ⁴He (mass 238 = 234 + 4, charge 92 = 90 + 2); carbon-14 beta-decays, ¹⁴C → ¹⁴N + ⁰₁e (mass 14 = 14 + 0, charge 6 = 7 − 1) — a neutron has become a proton, and the element itself has changed, which no chemical reaction ever does."},
    {k:"p", t:"**Radioactivity put to work:** cobalt-60 and cesium-137 sources sterilize surgical instruments and some foods where heat would spoil them; iodine-131 concentrates in the thyroid and, gently dosed, treats overactivity while tracing the gland on the camera; technetium-99m maps the heart and bones in the diagnostic scan; americium-241 in the smoke detector ionizes the air between its plates, and smoke starves the ionization, tripping the alarm; and carbon-14, fed to every living thing by CO₂ and frozen at death, dates the once-living — bone, wood, shell and the buried field — to within a few hundred years. The power station's fuel is the same physics at scale: uranium-235 fission, a chain of −200 MeV per nucleus, the energy that no chemical bond could ever match."},
    {k:"p", t:"**Protection — the ALARA rule (as low as reasonably achievable):** keep **time** short, **distance** long (the intensity falls with the square of the distance, so a metre more is worth fourfold), and **shield** with the right thickness — paper for alpha (though alpha is dangerous **inside** the body, where inhaled or swallowed it stops short and burns hard), aluminium for beta, and lead or a concrete wall for gamma. That is why the handler wears a dosimeter on the chest, why the source lives in a lead box, and why the rule of the laboratory is simple: respect the radiation, minimize the dose, and never let an alpha or beta source into the breath or the gut."},
    {k:"rule"},
    {k:"h3", t:"Half-life, Fission and Fusion"},
    {k:"p", t:"The **half-life** — the time for half the nuclei in a sample to decay — measures the stability of the nucleus: a short half-life goes quickly (unstable); a long one lasts for ages (nearly stable). Work half-life problems, including the dating of old objects by carbon-14. **Nuclear reactions — fission and fusion in nuclear reactors:** fission splits a heavy nucleus (uranium-235) into lighter ones plus energy — the reactors' and the bomb's process; fusion joins light nuclei (hydrogen) into helium at enormous temperature — the sun's process and man's future hope. Both give out energy far beyond chemistry's reach, and both demand respect."},
    {k:"p", t:"**Half-life, worked:** a sample of isotope X starts at 16 g and its half-life is 2 hours. After 2 h: 8 g; 4 h: 4 g; 6 h: 2 g; 8 h: 1 g. So the fall from 16 g to 2 g is **three half-lives, 6 hours** — and the curve never quite touches zero, which is why old waste stays a question of **thousands** of years rather than a cleanup date: after ten half-lives only about 1/1 000 remains, and after twenty, one in a million. **Carbon-14 dating, worked:** the isotope's half-life is 5 730 years, and a living tissue holds a fixed share of it until death, when the share decays. A wooden beam from a buried structure tests at **one quarter** of the living level — two half-lives down — so the wood died about **11 460 years** ago; at one eighth, three half-lives, 17 190 years. The method reaches its practical limit near fifty thousand years, where the signal fades into background, and for older stone the geologist turns to uranium-lead, whose half-lives run in hundreds of millions."}
  ],

  focus:[
    "Thermodynamics: heat energy, heat capacity, changes of state",
    "Law of conservation of energy; enthalpy changes",
    "Standard enthalpies of combustion, formation, reaction, neutralisation and evaporation",
    "Hess's law of constant heat summation; energy level diagrams",
    "Definition and history of radioactivity",
    "Nuclear versus ordinary chemical reactions",
    "Types and nature of radiation: alpha, beta and gamma",
    "Half-life and nuclear stability; fission and fusion",
    "Uses and hazards of radioactivity"
  ],
  terms:[
    {t:"system", d:"the part of the universe under study", x:"The reacting chemicals are the system."},
    {t:"surroundings", d:"everything outside the system", x:"Heat flows to the surroundings."},
    {t:"enthalpy", d:"the heat content of a system at constant pressure", x:"Enthalpy change is measured in kJ/mol."},
    {t:"enthalpy change", d:"the heat absorbed or released at constant pressure, symbol delta H", x:"A negative enthalpy change means exothermic."},
    {t:"exothermic", d:"releasing heat to the surroundings", x:"Combustion is exothermic."},
    {t:"endothermic", d:"absorbing heat from the surroundings", x:"Photosynthesis is endothermic."},
    {t:"specific heat capacity", d:"the heat needed to raise 1 g of a substance by 1 K", x:"Water has a high specific heat capacity."},
    {t:"Hess's law", d:"the total enthalpy change is independent of the route taken", x:"Hess's law allows indirect calculation."},
    {t:"enthalpy of formation", d:"the heat change when one mole of a compound forms from its elements", x:"Standard enthalpy of formation is measured at 298 K."},
    {t:"enthalpy of combustion", d:"the heat released when one mole burns completely in oxygen", x:"Fuels are compared by enthalpy of combustion."},
    {t:"enthalpy of neutralisation", d:"the heat released when acid and base form one mole of water", x:"Enthalpy of neutralisation is about -57 kJ/mol."},
    {t:"calorimeter", d:"apparatus for measuring heat changes", x:"A simple calorimeter can be a lagged cup."},
    {t:"radioactivity", d:"the spontaneous emission of radiation from unstable nuclei", x:"Radioactivity was discovered by Becquerel."},
    {t:"alpha particle", d:"a helium nucleus emitted in radioactive decay", x:"An alpha particle is stopped by paper."},
    {t:"beta particle", d:"a fast electron emitted from the nucleus", x:"A beta particle is stopped by aluminium."},
    {t:"gamma ray", d:"high energy electromagnetic radiation from the nucleus", x:"Gamma rays need thick lead to stop them."},
    {t:"half-life", d:"the time for half the nuclei in a sample to decay", x:"Carbon-14 has a half-life of 5730 years."},
    {t:"nuclear fission", d:"the splitting of a heavy nucleus into lighter ones with energy release", x:"Fission powers nuclear reactors."},
    {t:"nuclear fusion", d:"the joining of light nuclei into a heavier one with energy release", x:"Fusion powers the sun."},
    {t:"isotope", d:"atoms of the same element differing in neutron number", x:"Radioactive isotopes are used in medicine."},
    {t:"transmutation", d:"the change of one element into another by nuclear reaction", x:"Transmutation changes the atomic number."}
  ],
  facts:[
    {q:"Distinguish exothermic from endothermic reactions in terms of enthalpy change.", a:"An exothermic reaction releases heat to the surroundings and has a negative ΔH; an endothermic reaction absorbs heat from the surroundings and has a positive ΔH."},
    {q:"Write the formula for heat energy transferred and define each term.", a:"q = mcΔT, where q is heat in joules, m the mass in grams, c the specific heat capacity in J/g/K, and ΔT the temperature change in kelvin."},
    {q:"State Hess's law and explain why it works.", a:"The total enthalpy change for a reaction is the same whatever route is taken from reactants to products. It follows from the law of conservation of energy: if two routes gave different values, energy could be created by going one way and back the other."},
    {q:"Define standard enthalpy of formation.", a:"The enthalpy change when one mole of a compound is formed from its constituent elements in their standard states at 298 K and 1 atmosphere."},
    {q:"Why is the enthalpy of neutralisation of a strong acid with a strong alkali nearly constant?", a:"Both are fully ionised in solution, so the only reaction taking place in every case is H⁺ + OH⁻ → H₂O, which releases about 57 kJ per mole of water formed regardless of which acid and alkali are used."},
    {q:"State three differences between chemical and nuclear reactions.", a:"Chemical reactions involve only the outer electrons and the elements are unchanged; nuclear reactions involve the nucleus and one element changes into another. Nuclear reactions release far more energy, and their rate is unaffected by temperature, pressure or catalysts."},
    {q:"Compare alpha, beta and gamma radiation in charge, penetrating power and ionising power.", a:"Alpha is a helium nucleus of charge +2, least penetrating, stopped by paper, but most strongly ionising. Beta is an electron of charge −1, stopped by a few millimetres of aluminium, moderately ionising. Gamma has no charge, is most penetrating, needing thick lead, and is least ionising."},
    {q:"Define half-life and state one property of it.", a:"The time taken for half the radioactive nuclei in a sample to decay. It is constant for a given isotope and cannot be altered by temperature, pressure or chemical combination."},
    {q:"Distinguish nuclear fission from nuclear fusion.", a:"Fission splits a heavy nucleus such as uranium-235 into lighter nuclei with the release of neutrons and energy; fusion joins light nuclei such as hydrogen isotopes into a heavier one. Fusion releases more energy per unit mass but requires enormous temperatures."},
    {q:"State four uses of radioactivity.", a:"Medical diagnosis and cancer treatment; carbon dating of archaeological material; sterilising medical equipment and preserving food; and generating electricity in nuclear reactors, with tracers used in industry and agriculture."},
    {q:"State three hazards of radiation exposure.", a:"It damages living cells and can cause radiation sickness; it can mutate DNA leading to cancer and inherited defects; and radioactive waste remains dangerous for very long periods and is difficult to dispose of safely."}
  ],
  tf:[
    {s:"An exothermic reaction has a negative enthalpy change.", a:"true", why:"Heat leaves the system, so its enthalpy falls."},
    {s:"Hess's law follows from the conservation of energy.", a:"true", why:"If different routes gave different energy changes, energy could be created from nothing."},
    {s:"The half-life of an isotope can be shortened by heating it.", a:"false", why:"Half-life is a nuclear property, unaffected by temperature, pressure or chemical state."},
    {s:"Gamma radiation is the most strongly ionising.", a:"false", why:"Gamma is the most penetrating but the least ionising; alpha is the most ionising."},
    {s:"Nuclear fusion powers the sun.", a:"true", why:"Hydrogen nuclei fuse to helium, releasing enormous energy."},
    {s:"In a nuclear reaction one element can change into another.", a:"true", why:"Transmutation alters the number of protons in the nucleus."},
    {s:"Photosynthesis is an exothermic process.", a:"false", why:"It absorbs light energy to build glucose, so it is endothermic."}
  ],
  classify:{ title:"Sort these processes and radiations", groups:[
    {name:"Exothermic processes", items:["combustion","neutralisation","respiration","condensation"]},
    {name:"Endothermic processes", items:["photosynthesis","melting ice","thermal decomposition","evaporation"]},
    {name:"Alpha radiation", items:["helium nucleus","charge +2","stopped by paper","strongly ionising"]},
    {name:"Gamma radiation", items:["electromagnetic","no charge","stopped by thick lead","weakly ionising"]},
    {name:"Uses of radioactivity", items:["carbon dating","cancer treatment","food preservation","power generation"]}
  ]},
  diagram:{ title:"Energy level diagrams", caption:"State what each labelled feature represents.", parts:[
    {p:"Reactant level", f:"The enthalpy of the reactants at the start of the reaction"},
    {p:"Product level (below reactants)", f:"An exothermic reaction: products have lower enthalpy, ΔH is negative"},
    {p:"Product level (above reactants)", f:"An endothermic reaction: products have higher enthalpy, ΔH is positive"},
    {p:"Activation energy hump", f:"The minimum energy needed for reactant molecules to react"},
    {p:"ΔH arrow", f:"The overall enthalpy change between reactants and products"},
    {p:"Catalysed pathway", f:"A lower hump showing the reduced activation energy with a catalyst"}
  ]},
  experiment:{
    title:"Measuring the enthalpy change of neutralisation",
    aim:"To determine the heat released when hydrochloric acid neutralises sodium hydroxide.",
    materials:["1 mol/dm3 hydrochloric acid","1 mol/dm3 sodium hydroxide","Expanded polystyrene cup with lid","Thermometer reading to 0.1 °C","Two 50 cm3 measuring cylinders","Stirring rod","Stop clock"],
    steps:[
      "Measure 50 cm3 of the hydrochloric acid into the polystyrene cup and record its steady temperature.",
      "Measure 50 cm3 of the sodium hydroxide in a separate cylinder and record its temperature; take the mean as the initial temperature.",
      "Add the alkali to the acid quickly, replace the lid and stir gently with the thermometer.",
      "Record the temperature every 15 seconds and note the highest value reached.",
      "Calculate the temperature rise, then the heat released using q = mcΔT with m = 100 g and c = 4.2 J/g/K.",
      "Calculate the moles of water formed and hence the enthalpy change per mole."
    ],
    expect:"The temperature rises by about 6-7 °C. Taking m = 100 g and c = 4.2 J/g/K gives q of roughly 2700 J. Since 0.05 mol of water is formed, ΔH is about −54 to −57 kJ/mol, close to the accepted value for a strong acid neutralised by a strong alkali.",
    why:"The reaction is exothermic because the strong bond formed in the water molecule releases more energy than is needed to separate the ions. Since both reagents are fully ionised, the only change occurring is H+ + OH− → H2O, which is why the value is nearly the same for any strong acid and strong alkali. The polystyrene cup insulates the system so that most of the heat stays in the solution and can be measured; heat lost to the air and to the thermometer accounts for the small shortfall from the textbook figure."
  },
  worked:[
    {q:"Calculate the heat needed to raise 200 g of water by 25 K (c = 4.2 J/g/K).", steps:["q = mcΔT","200 × 4.2 × 25"], a:"21 000 J (21 kJ)"},
    {q:"A reaction releases 5.6 kJ and forms 0.1 mol of product. Find ΔH per mole.", steps:["ΔH = −q/n","−5.6 ÷ 0.1"], a:"−56 kJ/mol"},
    {q:"100 g of solution rises 7 °C. Calculate q (c = 4.2 J/g/K).", steps:["q = 100 × 4.2 × 7"], a:"2940 J"},
    {q:"An isotope has a half-life of 8 days. What fraction remains after 24 days?", steps:["24 ÷ 8 = 3 half-lives","(1/2)³"], a:"1/8 remains"},
    {q:"A 80 g sample has a half-life of 5 years. What mass remains after 15 years?", steps:["15 ÷ 5 = 3 half-lives","80 → 40 → 20 → 10"], a:"10 g"},
    {q:"Given ΔHf: CO₂ = −394, H₂O = −286, CH₄ = −75 kJ/mol. Find ΔH for CH₄ + 2O₂ → CO₂ + 2H₂O.", steps:["ΔH = ΣΔHf(products) − ΣΔHf(reactants)","[−394 + 2(−286)] − [−75 + 0]","−966 + 75"], a:"−891 kJ/mol"},
    {q:"Complete the nuclear equation: U-238 emits an alpha particle.", steps:["Alpha is He-4 (Z=2)","238 − 4 = 234; 92 − 2 = 90"], a:"Th-234 (thorium)"},
    {q:"After 4 half-lives, what percentage of a sample remains?", steps:["(1/2)⁴ = 1/16","1/16 × 100"], a:"6.25%"}
  ],
  apply:[
    {q:"Why does a cold pack become cold when the inner bag is broken?", a:"The salt inside dissolves endothermically, absorbing heat from the surroundings including the injury, so the pack and the skin cool."},
    {q:"Explain why water is used as a coolant in car engines and industrial plant.", a:"Water has an exceptionally high specific heat capacity, so it absorbs a large quantity of heat for a small rise in temperature, carrying heat away efficiently."},
    {q:"Carbon-14 in a wooden artefact is one quarter of the living level. If its half-life is 5730 years, how old is it?", a:"One quarter remaining means two half-lives have passed, so the artefact is about 11 460 years old."},
    {q:"Why must radioactive waste be stored for thousands of years while chemical waste can often be neutralised?", a:"Radioactive decay cannot be stopped or accelerated by any chemical treatment; the activity falls only with the passage of half-lives, some of which are extremely long."},
    {q:"Compare the fuel value of a nuclear reaction with a chemical one and explain the difference.", a:"Nuclear reactions release roughly a million times more energy per gram, because they convert a small amount of nuclear binding mass into energy, whereas chemical reactions only rearrange far weaker electron bonds."}
  ],
  activities:[
    "Simple calculations on heat of reaction",
    "Solve sample Hess's law problems",
    "Plot simple energy against time and energy level diagrams",
    "Identify several sources of fuels — solids, liquids and gases",
    "LAB: demonstrate experiments to explain exothermic and endothermic processes",
    "LAB: measure the enthalpy change of neutralisation",
    "Research the key scientists in the development of nuclear chemistry",
    "Write and balance simple nuclear equations and perform half-life calculations"
  ],
  materials:[
    "Primary text: Michael C. Cox and John Sadler, Senior Secondary Guide for Liberia — Chemistry (Star Books/Pearson, 2011)",
    "Polystyrene cups, thermometers and measuring cylinders",
    "Standard acid and alkali solutions",
    "Ammonium nitrate and anhydrous calcium chloride for thermal demonstrations",
    "Charts of the electromagnetic spectrum and radiation types",
    "Half-life decay curve graphs"
  ],
  assessment:["Presentation","Written assignment","Quiz","Laboratory report","Calculation exercise"]
},
{
  grade:11, period:"VI", sem:"Two", icon:"⚖️",
  title:"Chemical Equilibrium and Chemical Kinetics",
  subtitle:"Reversible reactions, Le Chatelier's principle, the equilibrium constant, reaction rates and collision theory",
  outcomes:[
    "Learners are able to discuss the general principles of equilibrium, including the mathematical relationship between Kp and Kc",
    "Learners are able to discuss the rate laws and the concept of collision theory"
  ],
  objectives:[
    "Discuss the general principles of equilibrium",
    "Explain Le Chatelier's principle as it relates to the factors influencing equilibrium",
    "Explain the nature of the equilibrium constant and perform simple related calculations",
    "Demonstrate the relationship between Kp and Kc",
    "Discuss the rate laws and determine the form of a rate law",
    "Demonstrate the reaction mechanism and discuss activation energy",
    "Explain the concept of collision theory"
  ],
  note:"At <b>dynamic equilibrium</b> the forward and reverse reactions continue at <b>equal rates</b>, so concentrations remain constant. <b>Le Chatelier's principle</b>: if a system at equilibrium is disturbed, it shifts so as to oppose the change. For aA + bB ⇌ cC + dD, <b>Kc = [C]^c[D]^d ÷ [A]^a[B]^b</b>. <b>Collision theory</b>: reaction occurs only when particles collide with at least the <b>activation energy</b> and in the correct orientation.",
  study:[
    /* ---- course text: Semester Two, Period VI — Chemical Equilibrium and Chemical Kinetics (guide pp. 39-42) ---- */
    {k:"h3", t:"General Principles of Equilibrium"},
    {k:"p", t:"A **reversible reaction** runs in both directions at once; when the forward and backward rates become equal, the mixture reaches **chemical equilibrium** — concentrations constant, yet both reactions still running: equilibrium is **dynamic**, not stopped. The **law of mass action** states the general principle: the rate of a reaction is proportional to the product of the concentrations of the reactants. Describe several reversible reactions in nature — hemoglobin's grip on oxygen, the carbonates in the soil."},
    {k:"rule"},
    {k:"h3", t:"Factors Influencing Equilibrium — Le Chatelier's Principle"},
    {k:"p", t:"**Le Chatelier's principle:** when a constraint (change of concentration, pressure or temperature) is imposed on a system at equilibrium, the system adjusts so as to **annul (undo) the constraint**. Add a reactant — the equilibrium shifts to consume it; squeeze a gaseous equilibrium — it shifts to the side with fewer molecules; heat an exothermic equilibrium — it shifts toward the reactants. A catalyst shifts nothing: it only makes equilibrium arrive sooner."},
    {k:"rule"},
    {k:"h3", t:"The Equilibrium Constant; Kp and Kc"},
    {k:"p", t:"For aA + bB ⇌ cC + dD, the **equilibrium constant** is Kc = [C]ᶜ[D]ᵈ / [A]ᵃ[B]ᵇ — concentrations of products over reactants, each raised to its coefficient; Kc ≫ 1 favours the products, Kc ≪ 1 the reactants, and K changes with temperature alone. For gases the constant may be written in partial pressures as K_p, and the **relationship between K_p and K_c** is K_p = K_c(RT)^Δn, where Δn counts the change in gas molecules. Perform the simple calculations on equilibrium constants."},
    {k:"p", t:"**Worked — a Kc from the equilibrium mixture:** for N₂ + 3H₂ ⇌ 2NH₃ the flask at equilibrium holds [N₂] = 0.2, [H₂] = 0.6, [NH₃] = 1.2 mol/dm³. Kc = [NH₃]² ÷ ([N₂][H₂]³) = 1.44 ÷ (0.2 × 0.216) = 1.44 ÷ 0.0432 = **33.3** — comfortably above 1, so at this temperature the mixture leans to the ammonia side, and the number is the equilibrium's fingerprint: repeat the experiment from any starting mix and 33.3 is what you find again. **Worked — Kp from Kc:** for 2SO₂ + O₂ ⇌ 2SO₃, Δn = 2 − (2 + 1) = **−1**, so Kp = Kc(RT)⁻¹ = Kc ÷ RT — at 450 °C (723 K), a Kc of 4.0 gives Kp = 4.0 ÷ (0.0821 × 723) = **0.067**: when the product side holds fewer gas molecules, Kp sits below Kc."},
    {k:"h3", t:"The Industrial Equilibria — Haber and Contact"},
    {k:"p", t:"**Ammonia by the Haber process** is Le Chatelier run as a business: N₂ + 3H₂ ⇌ 2NH₃, ΔH = −92 kJ. The product side has **four gas molecules to two**, so **high pressure (about 200 atm)** pushes the yield up — exactly what the principle predicts; the reaction is **exothermic**, so **low temperature** would push the yield further, but too cold and the rate crawls to nothing — hence the compromise **450 °C** with an **iron catalyst** (which speeds both directions equally, so it changes the time to equilibrium, never the yield). Each pass converts only 15-25 % of the feed, so the unreacted nitrogen and hydrogen are **condensed and recycled** over the catalyst again — the plant is a loop, and the loop is what makes the economics work. The ammonia becomes urea and ammonium nitrate fertilizer, and the process fed the twentieth century's food supply. **Sulfuric acid by the Contact process** runs the same logic on 2SO₂ + O₂ ⇌ 2SO₃: **vanadium(V) oxide catalyst, 450 °C, modest pressure**, the SO₃ absorbed into concentrated sulfuric acid (making oleum, then diluted) rather than straight into water, because direct absorption throws a sticky acid mist the works cannot handle."},
    {k:"rule"},
    {k:"h3", t:"Chemical Kinetics — Reaction Rates and the Rate Laws"},
    {k:"p", t:"**Chemical kinetics** studies how fast: the **reaction rate** is the change in concentration per unit time. Describe the speeds of natural reactions — explosions in a moment, food decay in days, the rusting of iron in seasons. The **rate laws** write rate = k[A]ᵐ[B]ᵇ: **types of rate laws** — zero, first and second order by the sum of the powers. **Determine the form of the rate law** by the **method of initial rates** (compare how the rate answers when one concentration is doubled at a time), and apply the **integrated rate laws**: the **first-order** law falls exponentially, with a constant **half-life** (t½ = 0.693/k); the **second-order** half-life lengthens as the reactant thins."},
    {k:"p", t:"**Worked — reading a rate from data:** a solution's reactant falls from 0.80 to 0.60 mol/dm³ in the first 100 seconds — average rate = (0.80 − 0.60) ÷ 100 = **0.0020 mol dm⁻³ s⁻¹** — and from 0.60 to 0.48 in the next 100 seconds, 0.0012: the rate is dying as the reactant thins, exactly the first-order signature. The **method of initial rates**, worked in miniature: doubling [A] doubles the initial rate, so m = 1; doubling [B] quadruples it, so n = 2 — the law is **rate = k[A][B]²**, third order overall. And the **half-life check**: if successive halves of the reactant each take the same 60 seconds (0.80→0.40, 0.40→0.20), the reaction is first-order and k = 0.693 ÷ 60 s = **0.0115 s⁻¹** — the constant the whole exponential curve turns on."},
    {k:"p", t:"**The factors, put in numbers:** **concentration** — doubling the reactants roughly doubles the collisions, so the rate scales with the rate law's powers; **surface area** — powder burns where a lump glows, because every newly exposed atom is a new collision site, which is why the flour mill and the coal mine both fear the dust cloud; **temperature** — near room temperature most reaction rates **double or triple for every 10 °C** of warming, because the share of collisions above the activation energy swells (the Q10 rule), which is why food keeps in the cold and the body's chemistry stalls in hypothermia; **catalyst** — a lower activation energy admits a far larger share of collisions at the same temperature, so the rate multiplies while the equilibrium and the ΔH stand untouched: manganese dioxide on hydrogen peroxide throws the oxygen off in a stream, the enzyme catalase does the same ten million times faster."},
    {k:"rule"},
    {k:"h3", t:"Collision Theory, Activation Energy and Mechanisms"},
    {k:"p", t:"The **collision theory**: reactions happen only when particles collide with enough energy and the right orientation. The **activation energy** is the minimum energy of a fruitful collision — heat supplies it, catalysts lower it, so both speed the rate. The **reaction mechanism** is the step-by-step path of the reaction, its slowest step setting the rate; demonstrate a mechanism for a model reaction. In the lab, investigate the effect of concentration on reaction rate."},
    {k:"h3", t:"Enzymes — the Catalysts of the Living Body"},
    {k:"p", t:"An **enzyme** is a protein catalyst, and it shows the collision theory at its finest: its active site is shaped to hold the one **substrate** it serves, the **lock-and-key** fit, so the molecules are gripped in the exact orientation a fruitful collision needs, and the activation energy falls so far that digestion and respiration run at body temperature where the uncatalysed chemistry would take centuries. Three things kill an enzyme — **heat** (the protein denatures, the key warps), a **wrong pH** (the charges that hold the shape are stripped), and **inhibitors** that block the site — which is why the kitchen, the clinic and the laboratory all treat enzymes as temperature- and pH-sensitive machines. The body's own roster: **amylase** in the saliva starting on starch, **pepsin** in the stomach's acid on protein, **lipase** on the fats, **catalase** in every cell mopping up the hydrogen peroxide that respiration leaks. Industry keeps its own vats of them: yeast enzymes ferment the wine and the bread, proteases in the powder shrink the soak time, and the bioreactor is simply kinetics — the right temperature, the right pH, the right substrate — scaled to a tank."},
  ],

  focus:[
    "General principles of equilibrium; reversible reactions and the law of mass action",
    "Factors influencing equilibrium: Le Chatelier's principle",
    "The equilibrium constant and its calculation",
    "Relationship between Kp and Kc",
    "Reaction rates and factors affecting them",
    "Rate laws; method of initial rates",
    "Integrated rate laws: zero, first and second order; half-life",
    "Activation energy, reaction mechanism and collision theory"
  ],
  terms:[
    {t:"reversible reaction", d:"a reaction proceeding in both directions", x:"A reversible reaction is shown by a double arrow."},
    {t:"dynamic equilibrium", d:"the state where forward and reverse rates are equal", x:"At dynamic equilibrium concentrations stay constant."},
    {t:"law of mass action", d:"reaction rate is proportional to the product of active masses", x:"The law of mass action underlies the equilibrium constant."},
    {t:"equilibrium constant", d:"the ratio of product to reactant concentrations at equilibrium", x:"A large Kc favours products."},
    {t:"Kc", d:"the equilibrium constant expressed in concentrations", x:"Kc has no units when the powers cancel."},
    {t:"Kp", d:"the equilibrium constant expressed in partial pressures", x:"Kp is used for gaseous equilibria."},
    {t:"Le Chatelier's principle", d:"a system at equilibrium shifts to oppose an imposed change", x:"Le Chatelier's principle predicts the direction of shift."},
    {t:"reaction rate", d:"the change in concentration of reactant or product per unit time", x:"Reaction rate falls as reactants are used up."},
    {t:"rate law", d:"an equation relating rate to reactant concentrations", x:"The rate law must be found by experiment."},
    {t:"order of reaction", d:"the power to which a concentration is raised in the rate law", x:"A first-order reaction depends on one concentration."},
    {t:"rate constant", d:"the proportionality constant k in the rate law", x:"The rate constant increases with temperature."},
    {t:"activation energy", d:"the minimum energy needed for a successful collision", x:"A catalyst lowers the activation energy."},
    {t:"collision theory", d:"reaction requires collisions of sufficient energy and correct orientation", x:"Collision theory explains the effect of temperature."},
    {t:"catalyst", d:"a substance speeding a reaction without being consumed", x:"A catalyst provides an alternative pathway."},
    {t:"activated complex", d:"the unstable arrangement at the top of the energy barrier", x:"The activated complex exists only briefly."},
    {t:"reaction mechanism", d:"the sequence of elementary steps making up a reaction", x:"The mechanism shows how the reaction proceeds."},
    {t:"rate-determining step", d:"the slowest step, which controls the overall rate", x:"The rate-determining step limits the reaction."},
    {t:"half-life of a reaction", d:"the time for the concentration to fall to half its value", x:"A first-order half-life is independent of concentration."}
  ],
  facts:[
    {q:"What is meant by dynamic equilibrium?", a:"A state in a closed system where the forward and reverse reactions continue at exactly equal rates, so the concentrations of all species remain constant although both reactions are still occurring."},
    {q:"State Le Chatelier's principle.", a:"If a change is imposed on a system at equilibrium, the position of equilibrium shifts in the direction that tends to oppose or reduce that change."},
    {q:"Predict the effect of increasing pressure on N₂ + 3H₂ ⇌ 2NH₃ and explain.", a:"The equilibrium shifts to the right. There are four moles of gas on the left and only two on the right, so shifting right reduces the number of gas molecules and hence opposes the increase in pressure."},
    {q:"Write the expression for Kc for the reaction aA + bB ⇌ cC + dD.", a:"Kc = [C]^c [D]^d ÷ [A]^a [B]^b, with all concentrations measured at equilibrium."},
    {q:"What does a very large value of Kc indicate?", a:"That the position of equilibrium lies far to the right, so at equilibrium the mixture consists mostly of products."},
    {q:"State the relationship between Kp and Kc.", a:"Kp = Kc(RT)^Δn, where Δn is the number of moles of gaseous products minus the moles of gaseous reactants. When Δn is zero, Kp equals Kc."},
    {q:"Does a catalyst change the position of equilibrium? Explain.", a:"No. A catalyst lowers the activation energy of the forward and reverse reactions equally, so equilibrium is reached faster but the position and the value of K are unchanged."},
    {q:"State five factors affecting the rate of a chemical reaction.", a:"Concentration of reactants, temperature, surface area of a solid, presence of a catalyst, and for gases the pressure; light also affects some reactions."},
    {q:"Explain the effect of temperature on reaction rate using collision theory.", a:"Raising the temperature increases the average kinetic energy, so collisions are both more frequent and, far more importantly, a much greater proportion of them possess energy equal to or above the activation energy."},
    {q:"What are the two requirements for a successful collision?", a:"The colliding particles must have combined energy at least equal to the activation energy, and they must collide with the correct relative orientation."},
    {q:"State one characteristic of the half-life of a first-order reaction.", a:"It is constant and independent of the initial concentration, so the concentration falls by half in each successive equal interval of time."}
  ],
  tf:[
    {s:"At equilibrium the forward and reverse reactions have stopped.", a:"false", why:"Both continue but at equal rates, which is why the equilibrium is described as dynamic."},
    {s:"A catalyst increases the yield of product at equilibrium.", a:"false", why:"It only speeds the attainment of equilibrium; the position and value of K are unchanged."},
    {s:"Increasing pressure shifts a gaseous equilibrium toward the side with fewer moles of gas.", a:"true", why:"That shift reduces the pressure and so opposes the imposed change."},
    {s:"The order of a reaction can be predicted from the balanced equation.", a:"false", why:"Order must be determined by experiment; it reflects the mechanism, not the stoichiometry."},
    {s:"A catalyst lowers the activation energy of a reaction.", a:"true", why:"It provides an alternative pathway with a lower energy barrier."},
    {s:"For a first-order reaction the half-life is independent of the starting concentration.", a:"true", why:"This constancy is the distinguishing feature of first-order kinetics."},
    {s:"Increasing the surface area of a solid reactant slows the reaction.", a:"false", why:"A greater surface area exposes more particles to collision, so the rate increases."}
  ],
  classify:{ title:"Sort these effects and factors", groups:[
    {name:"Shifts equilibrium right (endothermic forward)", items:["raising temperature","removing product","adding reactant"]},
    {name:"Factors increasing reaction rate", items:["higher temperature","higher concentration","larger surface area","adding a catalyst"]},
    {name:"Unaffected by a catalyst", items:["position of equilibrium","value of Kc","enthalpy change"]},
    {name:"Requirements for successful collision", items:["sufficient energy","correct orientation"]}
  ]},
  diagram:{ title:"Energy profile of a reaction", caption:"State what each labelled feature represents.", parts:[
    {p:"Reactants", f:"Starting enthalpy level of the reacting substances"},
    {p:"Activation energy Ea", f:"Energy barrier that must be overcome for reaction to occur"},
    {p:"Activated complex", f:"The unstable transition arrangement at the peak of the barrier"},
    {p:"Products", f:"Final enthalpy level of the substances formed"},
    {p:"ΔH", f:"The overall enthalpy change, negative if products lie below reactants"},
    {p:"Catalysed curve", f:"A lower peak showing the alternative pathway of reduced activation energy"}
  ]},
  experiment:{
    title:"Investigating the effect of concentration on reaction rate",
    aim:"To determine how the rate of reaction between sodium thiosulfate and hydrochloric acid depends on thiosulfate concentration.",
    materials:["0.1 mol/dm3 sodium thiosulfate solution","1 mol/dm3 hydrochloric acid","Distilled water","Conical flasks of 100 cm3","Measuring cylinders","Stop clock","Paper marked with a bold cross","Thermometer"],
    steps:[
      "Place the marked paper cross on the bench and stand a conical flask on top of it.",
      "Measure 50 cm3 of thiosulfate solution into the flask and record its temperature.",
      "Add 5 cm3 of hydrochloric acid, start the clock immediately and swirl once.",
      "Look down through the flask and stop the clock when the cross can no longer be seen.",
      "Repeat with thiosulfate diluted to 40, 30, 20 and 10 cm3, making each up to 50 cm3 with distilled water so the total volume stays constant.",
      "Tabulate concentration against time, calculate 1/time as a measure of rate, and plot rate against concentration."
    ],
    expect:"The cross disappears fastest in the most concentrated solution and progressively more slowly as the thiosulfate is diluted. A plot of 1/time against concentration gives a straight line through the origin, showing that the rate is directly proportional to the thiosulfate concentration.",
    why:"The reaction precipitates fine sulfur, which clouds the mixture until the cross is hidden; the time taken is therefore a fair inverse measure of rate. On collision theory, a higher concentration means more reactant particles in the same volume, so collisions occur more frequently and the proportion that are successful is unchanged — hence the rate rises in direct proportion. The temperature and total volume are kept constant so that concentration is the only variable."
  },
  worked:[
    {q:"For H₂ + I₂ ⇌ 2HI, write the expression for Kc.", steps:["Products over reactants","Powers equal the coefficients"], a:"Kc = [HI]² ÷ ([H₂][I₂])"},
    {q:"At equilibrium [HI] = 0.4, [H₂] = 0.1, [I₂] = 0.1. Calculate Kc.", steps:["Kc = (0.4)² ÷ (0.1 × 0.1)","0.16 ÷ 0.01"], a:"Kc = 16"},
    {q:"For N₂ + 3H₂ ⇌ 2NH₃, find Δn for the Kp relationship.", steps:["moles gas products = 2","moles gas reactants = 4","2 − 4"], a:"Δn = −2"},
    {q:"The rate law is rate = k[A][B]. State the overall order.", steps:["Order in A = 1, in B = 1","Sum the orders"], a:"Second order overall"},
    {q:"Doubling [A] doubles the rate. What is the order with respect to A?", steps:["Rate ratio 2, concentration ratio 2","2 = 2^n so n = 1"], a:"First order"},
    {q:"Doubling [B] quadruples the rate. What is the order with respect to B?", steps:["4 = 2^n","n = 2"], a:"Second order"},
    {q:"A first-order reaction has a half-life of 20 s. What fraction remains after 60 s?", steps:["60 ÷ 20 = 3 half-lives","(1/2)³"], a:"1/8 remains"},
    {q:"If rate = k[A]² and [A] is halved, what happens to the rate?", steps:["Rate ∝ [A]²","(1/2)² = 1/4"], a:"Rate falls to one quarter"}
  ],
  apply:[
    {q:"In the Haber process, why is a compromise temperature of about 450 °C used?", a:"The forward reaction is exothermic, so a low temperature would favour a higher yield of ammonia at equilibrium but the rate would be impractically slow. About 450 °C is a compromise giving an acceptable yield in a commercially useful time."},
    {q:"Explain why food keeps longer in a refrigerator.", a:"Lowering the temperature reduces the kinetic energy of the molecules, so far fewer collisions have the activation energy needed; the reactions of spoilage and the growth of micro-organisms are greatly slowed."},
    {q:"Why does flour dust in a mill present an explosion hazard while a bag of flour does not?", a:"Dispersed as dust the flour has an enormous surface area exposed to oxygen, so combustion can propagate almost instantly; in a bag only the outer surface can react."},
    {q:"A reversible reaction in a sealed flask appears to have stopped. How could you demonstrate that it has not?", a:"Introduce a labelled isotope into one reactant; over time it appears in the products as well, proving that both the forward and reverse reactions continue at equal rates."},
    {q:"Why is a large excess of air used when burning fuel in a furnace?", a:"Raising the concentration of oxygen increases the frequency of successful collisions, giving a faster and more complete combustion and avoiding the poisonous carbon monoxide formed when oxygen is limited."}
  ],
  activities:[
    "Describe several reversible reactions found in nature",
    "Solve simple problems on equilibrium constant calculations",
    "LAB: perform an experiment to demonstrate reversible and irreversible chemical reactions",
    "LAB: heat lead(II) nitrate and observe dinitrogen tetroxide to explain the variation of Kc and Kp",
    "LAB: use iron(III) chloride, potassium thiocyanate and water to illustrate Le Chatelier's principle",
    "LAB: investigate the effect of concentration on reaction rate using sodium thiosulfate and acid",
    "Describe the speed of natural reactions such as explosions, food decay, rusting and ripening",
    "Explain why paper is torn into pieces before being burned"
  ],
  materials:[
    "Primary text: Michael C. Cox and John Sadler, Senior Secondary Guide for Liberia — Chemistry (Star Books/Pearson, 2011)",
    "Sodium thiosulfate, hydrochloric acid, iron(III) chloride, potassium thiocyanate",
    "Conical flasks, measuring cylinders and stop clocks",
    "Thermometers and water baths",
    "Graph paper and calculators"
  ],
  assessment:["Presentation","Written assignment","Quiz","Laboratory report","Calculation exercise"]
},

/* ================================ GRADE 12 ================================ */
{
  grade:12, period:"I", sem:"One", icon:"🧬",
  title:"Introduction to Organic Chemistry",
  subtitle:"General characteristics, separation and purification, functional groups, homologous series and isomerism",
  outcomes:[
    "Learners are able to discuss general characteristics and laboratory techniques, and write and name hydrocarbons"
  ],
  objectives:[
    "Discuss the general characteristics of organic compounds",
    "Demonstrate practical knowledge of separation and purification methods for organic compounds",
    "Identify the various functional groups in organic compounds",
    "Identify members of the homologous series",
    "Distinguish the classes of isomers",
    "Discuss the general properties and reactions of hydrocarbons"
  ],
  note:"<b>Organic chemistry</b> is the chemistry of carbon compounds. Carbon is unique in <b>catenation</b> — bonding to itself in chains and rings — and forms four covalent bonds. A <b>homologous series</b> is a family with the same general formula and functional group, differing by <b>CH₂</b>, with a gradual change in physical properties. <b>Isomers</b> have the same molecular formula but different structures.",
  study:[
    /* ---- course text: Semester One, Period I — Introduction to Organic Chemistry (guide pp. 43-44) ---- */
    {k:"h3", t:"General Characteristics of Organic Compounds"},
    {k:"p", t:"**Organic chemistry** is the chemistry of carbon compounds. The **general characteristics of organic compounds**: they are built on carbon chains and rings, burn, are mostly insoluble in water but soluble in organic solvents, have lower melting points than inorganic salts, react more slowly, and exist in enormous variety because carbon bonds to itself without end. **Classification of organic compounds:** **straight chain and branched**, **cyclic and acyclic**, and the **aromatic compounds** built on the benzene ring."},
    {k:"p", t:"**Why carbon is different:** carbon has **four** bonding sites (tetravalency), so it makes single, double and triple bonds and reaches both forward and sideways at once; it **catenates** — bonds to itself without limit — into chains, branched trees and rings; and its bonds are strong yet reactive enough to rearrange. No other element combines these three, which is why carbon alone supports millions of compounds where all the other elements together manage a few thousand. **The three unsaturation levels of the hydrocarbons:** the **alkanes** (CₙH₂ₙ₊₂, all single bonds — saturated), the **alkenes** (CₙH₂, one C=C double bond — two hydrogens short), and the **alkynes** (CₙH₂₋₂, one C≡C triple bond — four short); the double or triple bond is a **site of unsaturation** that the alkenes and alkynes spend in addition reactions, and the alkanes, having none, substitute instead."},
    {k:"table", head:["Family","General formula","First members (state at room temperature)","Everyday name and use"], rows:[
      ["Alkanes","CnH2n+2","Methane CH4 (gas), ethane (gas), propane (gas), butane (gas), pentane (liquid)","Cooking gas, LPG cylinders, petrol fractions"],
      ["Alkenes","CnH2n","Ethene C2H4 (gas), propene, butenes","The plastic's monomer: polythene from ethene"],
      ["Alkynes","CnH2n-2","Ethyne (acetylene) C2H2 (gas)","The welding torch's flame, the triple-bond heat"]
    ]},
    {k:"rule"},
    {k:"h3", t:"Separation and Purification of Organic Compounds"},
    {k:"p", t:"Demonstrate practical knowledge of the **separation and purification methods for organic compounds** — **distillation** (by boiling point), **crystallization** (by solubility), **chromatography** (by adsorption — in the lab, separate plant pigments by paper chromatography), sublimation and solvent extraction; the proof of purity is a sharp melting or boiling point."},
    {k:"rule"},
    {k:"h3", t:"Functional Groups and Homologous Series"},
    {k:"p", t:"A **functional group** is the atom or group that gives a family of compounds its reactions: −OH of the alkanols, −COOH of the alkanoic acids, −CHO of the alkanals, C=O of the alkanones, −COO− of the esters. Identify the various functional groups in organic compounds, and recognize them from the structure in the exercises."},
    {k:"p", t:"A **homologous series** is a family with a general formula, neighbouring members differing by CH₂, graded physical properties and similar chemistry — the alkanes C_nH_2n+2, alkenes C_nH_2n, alkynes C_nH_2n−2. Identify the members of the homologous series — and write and **name the hydrocarbons** by IUPAC rules: the longest chain, the lowest numbers, the family suffix."},
    {k:"p", t:"**Naming, step by step:** (1) find the **longest chain** and name it — meth-(1) eth-(2) prop-(3) but-(4) pent-(5) hex-(6) hept-(7) oct-(8), with the family ending, **-ane** for single bonds, **-ene** for one double bond (its position numbered: but-1-ene, but-2-ene), **-yne** for one triple bond; (2) number the chain from the **end nearer** the branch or the double bond, so the locants come out lowest; (3) name each branch as a **substituent** with its locant — methyl (CH₃), ethyl (C₂H₅) — alphabetically, with di-, tri- for repeats; (4) put it together: CH₃CH(CH₃)CH₂CH₃ is **2-methylbutane**, CH₃CH₂CH=CH₂ is **but-1-ene**, CH₃C(CH₃)₂CH₃ is **2,2-dimethylpropane** — the same C₄H₁₀ as butane, named by its branching. The functional-group families carry their own endings: **-ol** (alcohol), **-al** (aldehyde), **-one** (ketone), **-oic acid** (carboxylic acid), and the group's carbon is always numbered to take the **lowest locant** — CH₃CH₂OH is propan-1-ol, CH₃COCH₃ is propanone, CH₃COOH is ethanoic acid."},
    {k:"p", t:"**Worked — drawing from the name:** 3-methylpentane is a five-carbon chain (pent-) with a methyl branch on carbon 3: CH₃CH₂CH(CH₃)CH₂CH₃, C₆H₁₄. 2,3-dimethylbutane is a four-carbon chain methyl-branched at carbons 2 and 3: CH₃CH(CH₃)CH(CH₃)CH₃, also C₆H₁₄ — the name and the drawing are two languages for the same structure, and switching between them is the organic chemist's daily arithmetic."},
    {k:"rule"},
    {k:"h3", t:"Isomerism and Chemical Properties"},
    {k:"p", t:"**Isomerism**: same molecular formula, different structures — chain isomers, position isomers, and functional isomers (as propan-1-ol and propan-2-ol). Classify and draw the structures of isomers. The **chemical properties and reactions**: the alkanes substitute, the alkenes and alkynes add, and the burning of all of them gives out the energy that runs our vehicles. Field trip: to LPRC to see how the quality of petrol is graded, using the **concept of the octane number** — branched chains burn smoothly and rate high."},
    {k:"p", t:"**Isomers, worked:** **C₄H₁₀** has two structures — straight **butane** (a four-carbon row) and branched **2-methylpropane**, gas and isobutane by trade — **chain isomers** with different boiling points (−0.5 °C and −11.7 °C) from the same formula. **C₃H₈O** runs a wider family: propan-1-ol and propan-2-ol, **position isomers** of the −OH, plus **propanone (acetone), a functional isomer** — the same atoms re-paired into a ketone, with its own smell, its own reactions. **C₃H₆O** again: propanal (an aldehyde) and propanone (the ketone) are functional isomers of one another. The isomer count climbs steeply — C₁₀H₂₂ knows seventy-five chain structures — and it is this combinatorial explosion of carbon that fills the organic side of the periodic table's neighbourhood."},
    {k:"p", t:"**Combustion, worked:** butane burns completely as 2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O — balance the carbons to 8 CO₂, the hydrogens to 10 H₂O, and the oxygens: 16 + 10 = 26 on the right, so 13 O₂ on the left. With **insufficient air** the combustion is **incomplete** and the products take in carbon monoxide and soot: 2C₄H₁₀ + 9O₂ → 8CO + 10H₂O — the colourless, odourless **CO** is the dangerous by-product of the choked engine and the smothered generator, deadly because it grabs haemoglobin some two hundred times faster than oxygen does, starving the blood while it still flows. The blue, roaring flame is complete combustion; the yellow, sooty one is incomplete — the flame's colour is the equation's confession."},
    {k:"p", t:"**Cracking — making the small from the large:** the long, oily alkane chains of heavy oil fractions are heated (or passed over a catalyst) until they **crack** into the shorter chains the market wants — for instance C₁₀H₂₂ → C₄H₈ + CH₁₄, a butene for plastics beside a hexane for fuel, the double bond appearing wherever the chain snaps. The petrol fraction is short in demand relative to the heavy oils in the barrel, so the refinery cracks to make up the difference; **steam cracking** takes the paraffins of naphtha at high temperature into ethene and propene, the monomers that become polythene and polypropylene. And the **octane number** grades petrol's knock resistance on a scale from **0 (n-heptane, the fuel that knocks worst) to 100 (2,2,4-trimethylpentane, isooctane, the smoothest)**: the more branched and ringed the molecule, the harder it resists the premature, knocking burn — which is why the grade on the pump climbs with branching, and why the engine that pinks on low-grade fuel is simply hearing its octane budget run out."},
  ],

  focus:[
    "General characteristics and classification of organic compounds",
    "Straight chain and branched, cyclic and acyclic, aromatic compounds",
    "Separation and purification: distillation, crystallisation, chromatography",
    "Functional groups and the homologous series",
    "Isomerism: structural and stereoisomerism",
    "Alkanes, alkenes and alkynes: nomenclature, properties and reactions",
    "IUPAC nomenclature rules"
  ],
  terms:[
    {t:"organic chemistry", d:"the chemistry of carbon compounds", x:"Organic chemistry covers fuels, plastics and drugs."},
    {t:"catenation", d:"the ability of an element to bond to itself in chains", x:"Catenation explains the vast number of carbon compounds."},
    {t:"hydrocarbon", d:"a compound of carbon and hydrogen only", x:"Methane is the simplest hydrocarbon."},
    {t:"alkane", d:"a saturated hydrocarbon with only single bonds, CnH2n+2", x:"Ethane is an alkane."},
    {t:"alkene", d:"an unsaturated hydrocarbon with a carbon-carbon double bond, CnH2n", x:"Ethene is an alkene."},
    {t:"alkyne", d:"an unsaturated hydrocarbon with a triple bond, CnH2n-2", x:"Ethyne is an alkyne."},
    {t:"saturated", d:"containing only single carbon-carbon bonds", x:"Alkanes are saturated."},
    {t:"unsaturated", d:"containing carbon-carbon double or triple bonds", x:"Unsaturated compounds decolourise bromine water."},
    {t:"functional group", d:"the atom or group that determines a compound's chemistry", x:"The -OH group makes an alcohol."},
    {t:"homologous series", d:"a family of compounds with the same general formula differing by CH2", x:"The alkanes form a homologous series."},
    {t:"isomer", d:"a compound with the same molecular formula but different structure", x:"Butane and methylpropane are isomers."},
    {t:"structural isomerism", d:"isomerism arising from different arrangement of atoms", x:"Chain and position isomerism are structural."},
    {t:"aromatic compound", d:"a compound containing a benzene ring", x:"Benzene is the simplest aromatic compound."},
    {t:"aliphatic", d:"an open chain or non-aromatic cyclic compound", x:"Hexane is aliphatic."},
    {t:"substitution reaction", d:"a reaction where one atom or group replaces another", x:"Alkanes undergo substitution with chlorine."},
    {t:"addition reaction", d:"a reaction where atoms add across a multiple bond", x:"Alkenes undergo addition."},
    {t:"cracking", d:"breaking large hydrocarbons into smaller useful ones", x:"Cracking produces petrol from heavy oil."},
    {t:"fractional distillation", d:"separating a mixture by differences in boiling point", x:"Crude oil is separated by fractional distillation."},
    {t:"chromatography", d:"separating a mixture by differential movement through a medium", x:"Chromatography separates plant pigments."},
    {t:"recrystallisation", d:"purifying a solid by dissolving and reforming crystals", x:"Recrystallisation removes impurities."}
  ],
  facts:[
    {q:"State four general characteristics of organic compounds.", a:"They are mostly covalent with low melting and boiling points; they are generally insoluble in water but soluble in organic solvents; most burn readily; they react slowly and often need catalysts; and they show isomerism."},
    {q:"Why does carbon form so many more compounds than any other element?", a:"Carbon shows catenation, bonding to itself in long chains, branches and rings; it forms four strong covalent bonds; and it bonds readily to hydrogen, oxygen, nitrogen and the halogens."},
    {q:"Define a homologous series and state four of its characteristics.", a:"A family of compounds with the same functional group and general formula, whose members differ by CH₂. Members show a gradual change in physical properties, similar chemical properties, and can be prepared by similar methods."},
    {q:"Give the general formula of the alkanes, alkenes and alkynes.", a:"Alkanes CnH2n+2, alkenes CnH2n, and alkynes CnH2n−2."},
    {q:"Name the first four alkanes and give their molecular formulae.", a:"Methane CH₄, ethane C₂H₆, propane C₃H₈ and butane C₄H₁₀."},
    {q:"How would you distinguish an alkane from an alkene in the laboratory?", a:"Add bromine water and shake. The alkene decolourises the orange bromine water immediately by addition across the double bond; the alkane leaves it unchanged in the absence of light."},
    {q:"Name four methods of separating and purifying organic compounds.", a:"Simple and fractional distillation, crystallisation and recrystallisation, chromatography, and solvent extraction; filtration and sublimation are also used."},
    {q:"State the difference between substitution and addition reactions.", a:"In substitution an atom or group in the molecule is replaced by another, typical of saturated alkanes; in addition, atoms add across a double or triple bond with no atom leaving, typical of unsaturated alkenes and alkynes."},
    {q:"Define isomerism and name two types of structural isomerism.", a:"Isomerism is the existence of compounds with the same molecular formula but different structural arrangements. Types include chain isomerism, position isomerism and functional group isomerism."},
    {q:"State the IUPAC rules for naming a branched alkane.", a:"Find the longest continuous carbon chain and name it as the parent alkane; number the chain from the end nearer the first branch; name and number each substituent; use di-, tri- for repeats; and list substituents alphabetically before the parent name."},
    {q:"What is cracking and why is it economically important?", a:"Breaking long-chain hydrocarbons into shorter ones by heat and a catalyst. It converts less useful heavy fractions into petrol and into alkenes needed for making plastics, matching supply to demand."}
  ],
  tf:[
    {s:"Alkanes are saturated hydrocarbons.", a:"true", why:"They contain only single carbon-carbon bonds."},
    {s:"Alkenes decolourise bromine water.", a:"true", why:"Bromine adds across the double bond, removing the orange colour."},
    {s:"Members of a homologous series differ by CH3.", a:"false", why:"Successive members differ by CH₂."},
    {s:"Isomers have different molecular formulae.", a:"false", why:"They share the same molecular formula but differ in structure."},
    {s:"Most organic compounds are ionic.", a:"false", why:"They are predominantly covalent, which accounts for their low melting points and poor conductivity."},
    {s:"Fractional distillation separates liquids by difference in boiling point.", a:"true", why:"The more volatile component vaporises and is collected first."},
    {s:"Benzene is an aromatic compound.", a:"true", why:"It contains the characteristic delocalised six-carbon ring."}
  ],
  classify:{ title:"Sort these organic compounds and methods", groups:[
    {name:"Alkanes", items:["methane","ethane","propane","butane"]},
    {name:"Alkenes", items:["ethene","propene","butene"]},
    {name:"Alkynes", items:["ethyne","propyne"]},
    {name:"Separation methods", items:["fractional distillation","crystallisation","chromatography","solvent extraction"]},
    {name:"Functional groups", items:["-OH alcohol","-COOH carboxylic acid","-CHO aldehyde","-NH2 amine"]}
  ]},
  diagram:{ title:"Fractional distillation of crude oil", caption:"State the fraction obtained at each level and one use.", parts:[
    {p:"Top of the column (coolest)", f:"Refinery gases: bottled gas for cooking"},
    {p:"Upper section", f:"Petrol (gasoline): fuel for cars"},
    {p:"Upper-middle section", f:"Naphtha: feedstock for making chemicals and plastics"},
    {p:"Middle section", f:"Kerosene: fuel for lamps, stoves and aircraft"},
    {p:"Lower-middle section", f:"Diesel oil: fuel for lorries, generators and trains"},
    {p:"Lower section", f:"Lubricating oil and waxes: machine oils, candles and polish"},
    {p:"Bottom (hottest)", f:"Bitumen: surfacing roads and roofing"}
  ]},
  experiment:{
    title:"Separating plant pigments by paper chromatography",
    aim:"To separate and compare the coloured pigments in leaf extracts using paper chromatography.",
    materials:["Fresh green leaves and a coloured flower","Chromatography or filter paper strips","Ethanol or propanone as solvent","Mortar and pestle","Sand for grinding","Beaker and watch glass","Capillary tube or fine dropper","Pencil and ruler"],
    steps:[
      "Grind the leaves with a little sand and 5 cm3 of ethanol to extract the pigments, then filter.",
      "Draw a pencil line 2 cm from the bottom of the paper strip and mark a small spot on it.",
      "Using a capillary tube, apply the extract to the spot, letting it dry between applications until the spot is strongly coloured.",
      "Pour solvent into the beaker to a depth of about 1 cm, below the level of the pencil line.",
      "Suspend the strip so that only the solvent, not the spot, touches the liquid, and cover the beaker.",
      "When the solvent front nears the top, remove the strip, mark the front, dry it and measure the distance moved by each pigment."
    ],
    expect:"The single spot separates into several coloured bands up the paper — typically yellow-orange carotenes travelling furthest, then yellow xanthophylls, then blue-green chlorophyll a and yellow-green chlorophyll b. Each pigment has a characteristic Rf value, calculated as distance moved by the pigment divided by distance moved by the solvent front.",
    why:"Separation depends on the balance between two effects: how strongly each pigment is adsorbed onto the stationary paper and how readily it dissolves in the moving solvent. Pigments more soluble in the solvent and less strongly held by the paper travel further. Because that balance is fixed for a given pigment, solvent and paper, the Rf value identifies the substance — which is why chromatography is a standard purification and identification method in organic chemistry."
  },
  worked:[
    {q:"Give the molecular formula of the alkane with 5 carbons.", steps:["CnH2n+2","n = 5, so 2(5)+2 = 12"], a:"C₅H₁₂ (pentane)"},
    {q:"Give the molecular formula of the alkene with 4 carbons.", steps:["CnH2n","n = 4, so H = 8"], a:"C₄H₈ (butene)"},
    {q:"Give the molecular formula of the alkyne with 3 carbons.", steps:["CnH2n−2","n = 3, so 6 − 2 = 4"], a:"C₃H₄ (propyne)"},
    {q:"How many structural isomers does C₄H₁₀ have? Name them.", steps:["Straight chain: butane","Branched: methylpropane"], a:"2 isomers: butane and 2-methylpropane"},
    {q:"A pigment moves 4.5 cm while the solvent front moves 9.0 cm. Find its Rf.", steps:["Rf = distance moved by pigment ÷ distance moved by solvent","4.5 ÷ 9.0"], a:"Rf = 0.50"},
    {q:"Name the compound CH₃CH₂CH(CH₃)CH₃ by IUPAC rules.", steps:["Longest chain = 4 carbons (butane)","Methyl branch on carbon 2"], a:"2-methylbutane"},
    {q:"Write the equation for the complete combustion of methane.", steps:["CH₄ + O₂ → CO₂ + H₂O","Balance: 2 O₂ needed"], a:"CH₄ + 2O₂ → CO₂ + 2H₂O"}
  ],
  apply:[
    {q:"Why does the boiling point rise steadily along the alkane series from methane to decane?", a:"Each additional CH₂ increases the size of the molecule and the number of electrons, so the van der Waals forces between molecules become stronger and more energy is required to separate them."},
    {q:"Why is petrol more valuable than the heavy fractions of crude oil, and how does industry respond?", a:"Demand for petrol far exceeds the amount naturally present in crude oil, while heavy fractions are in surplus. Cracking converts the surplus long chains into petrol and into alkenes for plastics."},
    {q:"Explain why cooking gas is stored as a liquid under pressure.", a:"Compressing the gas at moderate pressure liquefies propane and butane, greatly reducing the volume so that a usable quantity of fuel can be carried in a portable cylinder."},
    {q:"A student's chromatogram shows the spot has run into the solvent and disappeared. What error was made?", a:"The solvent level was above the pencil line, so the spot dissolved directly into the reservoir instead of being carried up the paper."},
    {q:"Why is incomplete combustion of a hydrocarbon in a poorly ventilated room dangerous?", a:"With insufficient oxygen the fuel forms carbon monoxide, a colourless odourless gas that binds irreversibly to haemoglobin and prevents oxygen transport, causing death without warning."}
  ],
  activities:[
    "Solve problems on determining an organic compound from its structure and identifying functional groups",
    "Classify and draw the structures of isomers",
    "Practise IUPAC nomenclature for branched hydrocarbons",
    "Field trip to the Liberia Petroleum Refining Company to see how petrol quality and octane rating are assessed",
    "LAB: separate plant pigments by paper chromatography",
    "LAB: distinguish alkanes from alkenes using bromine water",
    "Build models of isomers using molecular model kits"
  ],
  materials:[
    "Primary text: Michael C. Cox and John Sadler, Senior Secondary Guide for Liberia — Chemistry (Star Books/Pearson, 2011)",
    "Molecular model kits",
    "Chromatography paper, ethanol and propanone",
    "Bromine water and hydrocarbon samples",
    "Distillation apparatus",
    "Charts of functional groups and homologous series"
  ],
  assessment:["Presentation","Written assignment","Quiz","Laboratory report","Nomenclature exercise"]
},
{
  grade:12, period:"II", sem:"One", icon:"🧴",
  title:"Hydrocarbon Derivatives, Polymers and Biochemistry",
  subtitle:"Alcohols, aldehydes, ketones, acids and esters; soap making, polymerisation and the biomolecules",
  outcomes:[
    "Learners are able to discuss hydrocarbon derivatives together with their preparation, testing and polymerisation processes, as well as the basic concepts of biochemistry"
  ],
  objectives:[
    "Discuss hydrocarbon derivatives",
    "Demonstrate techniques for the laboratory preparation and testing of hydrocarbon derivatives",
    "Demonstrate practical knowledge about the production of soap",
    "Distinguish between natural and synthetic organic materials",
    "Discuss polymerisation and polymers",
    "Distinguish between plastics and other materials",
    "Discuss fats and oils as alkyl esters and the basic biomolecules"
  ],
  note:"Functional groups define the derivative families: <b>alkanols</b> –OH, <b>alkanals</b> –CHO, <b>alkanones</b> C=O, <b>alkanoic acids</b> –COOH, and <b>esters</b> –COO–. <b>Saponification</b> is the hydrolysis of a fat or oil by hot alkali to give soap and glycerol. <b>Polymerisation</b> joins many small <b>monomers</b> into a long <b>polymer</b>, either by addition or by condensation.",
  study:[
    /* ---- course text: Semester One, Period II — Hydrocarbon Derivatives, Polymers and Biochemistry (guide pp. 45-47) ---- */
    {k:"h3", t:"Hydrocarbon Derivatives"},
    {k:"p", t:"Replace a hydrogen of a hydrocarbon and a derivative is born. For each family learn the **sources, classification, nomenclature, structure, physical properties, chemical properties and uses**, with the laboratory tests of characterization:"},
    {k:"table", head:["Family","Functional group","Example","Notes"], rows:[
      ["Alkanols (alcohols)","−OH","Ethanol","From fermentation; classified primary, secondary, tertiary; oxidized to alkanals then acids"],
      ["Alkanals (aldehydes)","−CHO","Ethanal","Oxidation of primary alkanols; reduce Fehling's solution (brick-red)"],
      ["Alkanones (ketones)","C=O (mid-chain)","Propanone","Oxidation of secondary alkanols; resist further oxidation"],
      ["Ethers","−O−","Ethoxyethane","The anaesthetic solvent"],
      ["Halocarbons (alkyl halides)","−X","Chloroethane","Alkane + halogen in light; solvents and refrigerants"],
      ["Alkanoic (carboxylic) acids","−COOH","Ethanoic acid","Weak acids; vinegar is dilute ethanoic acid"],
      ["Alkyl alkanoates (esters)","−COO−","Ethyl ethanoate","Acid + alkanol; the sweet smells of fruits; solvents and flavourings"]
    ]},
    {k:"p", t:"Demonstrate the techniques for their laboratory preparation and testing, and in the lab **make soap by the saponification of palm oil** — boiling the oil with sodium hydroxide until the ester splits into soap and glycerol."},
    {k:"p", t:"**The alkanols, in depth:** **ethanol (C₂H₅OH)** is made by **fermentation** — yeast works sugar anaerobically, C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂, best at 30-35 °C, the reaction stalling when the alcohol reaches 12-15 % — and refined by **fractional distillation**, the spirit of the brewery and the raw material of the solvent, the fuel and the antiseptic (at 70 %, where it kills the germ and keeps its own water). **Methanol (CH₃OH, wood spirit)** is its poisonous little brother — a glassful blinds, a cup can kill — which is why the brewer's still keeps its first, methanol-rich run from the bottle. **Propan-1-ol** and the higher alkanols follow the family: the −OH makes them polar enough to mix with water (until the chain outgrows it), the sodium test — 2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂, the quiet pop of hydrogen — the family signature, and **oxidation** is the family ladder: a **primary** alkanol climbs to the alkanal (ethanol → ethanal) and on to the alkanoic acid (ethanal → ethanoic acid), a **secondary** one to the alkanone (propan-2-ol → propanone), a **tertiary** one standing its ground."},
    {k:"p", t:"**The carboxylic acids and their esters:** the acids of the series — **methanoic (formic) acid** in the ant's sting, **ethanoic (acetic) acid** in vinegar at 4-8 %, **propanoic** with its rancid note, **butanoic** in the smell of vomit, **benzoic acid** the preservative of the soft drink — all carry the −COOH group and its behaviours: sour, weakly acidic (they fizz the carbonates, CH₃COOH + NaHCO₃ → CH₃COONa + H₂O + CO₂), and reactive with alkanols. The acid plus the alcohol, with an acid catalyst, gives the **ester and water** — **esterification**, a reversible reaction: CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O. The esters are the **fragrance chemistry**: ethyl ethanoate (pear drop), pentyl ethanoate (banana), methyl butanoate (pineapple), and the same sweet esters flavour the jam and the liqueur. Scale it up and an ester becomes **biodiesel** — the fatty-acid esters of the palm oil, transesterified with methanol, the fuel that burns the island's own crop."},
    {k:"h3", t:"The Derivatives' Reaction Map"},
    {k:"bul", items:[
      "Alkanol + sodium → salt + hydrogen (the quiet pop)",
      "Primary alkanol + [O] → alkanal + [O] → alkanoic acid (the oxidation ladder)",
      "Alkanoic acid + sodium carbonate → salt + water + carbon dioxide (the fizz)",
      "Alkanoic acid + alkanol ⇌ ester + water (the fragrance, the flavour, the glue)",
      "Alkene + bromine water → the colour drains (the unsaturation test that separates the C=C from the plain chain)",
      "Alkanol + concentrated acid, heat → alkene (the reverse: dehydration puts the double bond back)"
    ]},
    {k:"rule"},
    {k:"h3", t:"Polymerization and Polymers"},
    {k:"p", t:"**Polymerization** joins many small molecules (**monomers**) into a chain (**polymer**); two monomers make a **dimer**, and a **resin** is a solid or sticky polymer raw. **Natural polymers**: rubber (from the latex of Hevea, coagulated with acid — Liberia's own crop), starch, protein. **Synthetic (man-made) polymers**: classified and prepared from the monomers and co-monomers as **addition polymers** (polythene from ethene; write the polymerization reaction) and **condensation polymers** (nylon, with a small molecule dropped per link). **Plastics and resins**, distinguished; the **important properties of polymers**: **thermoplastics** soften on warming and can be reshaped, **thermosetting plastics** set once and for all. Distinguish natural from synthetic organic materials; visit a plastic or rubber processing industry."},
    {k:"h3", t:"The Addition Polymers, by Name"},
    {k:"table", head:["Monomer","Polymer","The product in the house"], rows:[
      ["Ethene (C2H4)","Polythene (polyethylene)","Bottles, bags, pipes, the milk container"],
      ["Propene (C3H6)","Polypropylene","Ropes, crates, carpet fibre, bottle caps"],
      ["Vinyl chloride (CH2=CHCl)","PVC (polyvinyl chloride)","Water pipe, cable sheathing, flooring"],
      ["Styrene (C6H5-CH=CH2)","Polystyrene","Foam trays, CD cases, the disposable cup"],
      ["Tetrafluoroethene (CF2=CF2)","Polytetrafluoroethylene (Teflon)","The non-stick pan's surface"]
    ]},
    {k:"p", t:"**Addition versus condensation, the two ways to build:** in **addition** polymerization the monomer's double bond simply opens and the units zip together, no by-product, the polymer's composition a whole number of the monomer's — n C₂H₄ → (C₂H₄)ₙ. In **condensation** polymerization two different functional groups meet and a small molecule, usually water or HCl, is dropped at every link: the diamine and the diacid of **nylon-6,6** lose a water per bond, the diol and the diacid of **Terylene (polyester)** do the same, and the natural **proteins** are condensation polymers of their amino acids, water the dropped molecule, the peptide bond the link. **Thermoplastic versus thermosetting, the practical split:** the thermoplastic (polythene, PVC, polystyrene) carries straight chains that slide when warm, so it melts, flows, re-molds — and can be melted again, the route to **recycling**; the thermosetting (bakelite, the epoxy of the boat hull) cross-links into a 3-D network on curing, so it will not melt, it chars — set once, fixed for life, and the one plastic the recycler cannot remelt."},
    {k:"p", t:"**The waste question:** a polythene bag outlives the shopper by centuries, and the coastline is where the count comes due — broken into **microplastics** that the fish carry up the chain, the polymer's persistence is its environmental fingerprint. The working answers run the **three Rs** (reduce, reuse, recycle — with the resin code on the bottle's base telling the sorter which family it holds), the **biodegradable** polymers from starch and cellulose that the soil's microbes will eat, and the **incineration with energy recovery** that at least returns the fuel value, with the dioxin question answered by clean, hot, well-controlled burners. The polymer that is cheap enough to throw away is the one that ends up in the lagoon — the chemistry and the civic habit are the same problem from two banks."},
    {k:"rule"},
    {k:"h3", t:"Introductory Biochemistry"},
    {k:"p", t:"**Amino acids** are **di-functional** — an amino group (−NH₂, basic) and a carboxyl group (−COOH, acidic) on one molecule — and **proteins** are synthesized from amino acids linked by peptide bonds: the body's own polymers. **Carbohydrates** — the sugars, starches and cellulose, C_x(H₂O)_y — are the fuel food. Discuss the proteins together with the carbohydrates: enzymes are proteins, and digestion breaks both down for rebuilding."},
    {k:"p", t:"**Proteins, the body's workhorse:** the body builds from a set of about **twenty amino acids** — eight or nine of them **essential**, to be found in the food because the body cannot make them — and joins them in a **condensation**, each peptide bond dropping a water: −COOH + H−NH₂ → −CO−NH− + H₂O. The chain then folds, and the fold is the function: **haemoglobin**'s pocket carries oxygen, **keratin**'s chain toughens the hair, **collagen**'s rope holds the skin, and every **enzyme** is a protein whose shape is its job. **Denaturation** is the shape unwound — by heat (the egg white setting), by acid (the milk curdling), by heavy metal salts (the reason the salts of lead and mercury are poisons) — the amino acids untouched, the fold destroyed, the function gone, and usually not to be put back. The bench tests: the **biuret test** turns violet on the peptide bonds, **ninhydrin** turns purple on free amino groups, and the **xanthoproteic** and **Millon** tests flag the particular amino acids that carry aromatic or sulfur groups."},
    {k:"p", t:"**Carbohydrates, the fuel ladder:** the **monosaccharides** (glucose, fructose, galactose — C₆H₁₂O₆, the body's direct fuel) join in pairs to the **disaccharides** — **sucrose** (glucose + fructose, the table sugar of the sugar cane), **maltose** (two glucoses, the beer and the mash), **lactose** (glucose + galactose, the milk sugar) — and in long chains to the **polysaccharides**: **starch** (the grain's storage, the rice, the cassava, the potato on the Liberian table), **glycogen** (the animal's quick-release store, in liver and muscle) and **cellulose** (the plant's wall, the fibre that the gut passes and the termite digests). The bench tests run the family: **Benedict's solution** boiled with a reducing sugar turns green to brick-red, the copper(II) reduced; **iodine** meets starch and goes blue-black; and the **hydrolysis** of the polysaccharide, acid or enzyme, runs it back down the ladder to the monosaccharides that the blood can spend."},
    {k:"p", t:"**Lipids, the storage form:** a fat or oil is a **triglyceride** — **glycerol carrying three fatty acids**, each a long carboxylic chain — and the family splits on the chains' saturation: the **saturated** fats (palm oil, the animal tallow) carry no double bonds, pack tight, and are **solid at room temperature**; the **unsaturated** (the fish oil, the olive) carry one or more double bonds, kink the chain, and stay **liquid** — the oils. The two reactions that matter to the works: **hydrogenation**, adding H₂ across the double bonds over a nickel catalyst to harden the liquid oil into the spreadable fat of the margarine (and, overdone, the trans-fat the health books warn against), and **saponification**, the alkali splitting the ester bonds to the **soap and the glycerol** — the palm-oil soap of the market being exactly this chemistry, and the glycerol the by-product the perfumer keeps."},
  ],

  focus:[
    "Alkanols: sources, classification, nomenclature, properties and uses",
    "Alkanals and alkanones; ethers and halocarbons",
    "Alkanoic acids and esters; laboratory tests",
    "Fats and oils as alkyl esters; saponification and soap production",
    "Polymerisation: addition and condensation; plastics",
    "Natural and synthetic organic materials",
    "Basic biochemistry: carbohydrates, proteins and lipids"
  ],
  terms:[
    {t:"alkanol", d:"an alcohol, containing the -OH functional group", x:"Ethanol is an alkanol."},
    {t:"primary alcohol", d:"an alcohol whose -OH carbon carries one alkyl group", x:"Ethanol is a primary alcohol."},
    {t:"alkanal", d:"an aldehyde, containing the -CHO group", x:"Methanal is an alkanal."},
    {t:"alkanone", d:"a ketone, with C=O between two carbons", x:"Propanone is an alkanone."},
    {t:"alkanoic acid", d:"a carboxylic acid, containing -COOH", x:"Ethanoic acid is in vinegar."},
    {t:"ester", d:"a compound formed from an acid and an alcohol", x:"Esters give fruits their smell."},
    {t:"esterification", d:"the reaction of an acid with an alcohol to give an ester and water", x:"Esterification needs an acid catalyst."},
    {t:"saponification", d:"the alkaline hydrolysis of a fat or oil to give soap", x:"Saponification produces soap and glycerol."},
    {t:"glycerol", d:"the trihydric alcohol released in saponification", x:"Glycerol is used in cosmetics."},
    {t:"soap", d:"the sodium or potassium salt of a long-chain fatty acid", x:"Soap emulsifies grease."},
    {t:"detergent", d:"a synthetic cleaning agent working in hard water", x:"Detergents do not form scum."},
    {t:"polymer", d:"a very large molecule made of repeating units", x:"Polythene is a polymer."},
    {t:"monomer", d:"the small molecule from which a polymer is made", x:"Ethene is the monomer of polythene."},
    {t:"addition polymerisation", d:"joining unsaturated monomers with no other product", x:"Polythene forms by addition polymerisation."},
    {t:"condensation polymerisation", d:"joining monomers with elimination of a small molecule", x:"Nylon forms by condensation polymerisation."},
    {t:"thermoplastic", d:"a plastic that softens on heating and can be remoulded", x:"Polythene is a thermoplastic."},
    {t:"thermosetting plastic", d:"a plastic that sets permanently and cannot be remelted", x:"Bakelite is thermosetting."},
    {t:"carbohydrate", d:"a compound of carbon, hydrogen and oxygen supplying energy", x:"Starch is a carbohydrate."},
    {t:"protein", d:"a polymer of amino acids joined by peptide bonds", x:"Protein builds and repairs tissue."},
    {t:"amino acid", d:"the monomer unit of proteins, with -NH2 and -COOH groups", x:"There are twenty common amino acids."},
    {t:"lipid", d:"a fat or oil, an ester of glycerol and fatty acids", x:"Palm oil is a lipid."},
    {t:"biodegradable", d:"able to be broken down by living organisms", x:"Most plastics are not biodegradable."}
  ],
  facts:[
    {q:"Name five classes of hydrocarbon derivatives and the functional group of each.", a:"Alkanols –OH; alkanals –CHO; alkanones C=O within the chain; alkanoic acids –COOH; and esters –COO–. Halocarbons carry a halogen and ethers an –O– link."},
    {q:"How are primary, secondary and tertiary alcohols distinguished?", a:"By the number of alkyl groups attached to the carbon bearing the –OH: one for primary, two for secondary and three for tertiary."},
    {q:"Give a chemical test to distinguish an aldehyde from a ketone.", a:"Warm with Fehling's or Tollens' reagent. The aldehyde reduces Fehling's solution to a brick-red precipitate of copper(I) oxide, or Tollens' to a silver mirror; the ketone gives no reaction."},
    {q:"Write the general equation for esterification and name the catalyst.", a:"Alkanoic acid + alkanol ⇌ ester + water, catalysed by a few drops of concentrated sulfuric acid."},
    {q:"Explain the process of saponification.", a:"A fat or oil, which is an ester of glycerol with long-chain fatty acids, is boiled with concentrated sodium hydroxide. The ester links are hydrolysed to give the sodium salts of the fatty acids, which are soap, together with glycerol."},
    {q:"Explain how soap removes grease from cloth.", a:"The soap molecule has a long non-polar hydrocarbon tail that dissolves in grease and a polar ionic head that dissolves in water. The tails embed in the grease and the heads face outward, lifting the droplet into suspension as an emulsion which is rinsed away."},
    {q:"State the difference between addition and condensation polymerisation.", a:"In addition polymerisation unsaturated monomers join by opening their double bonds with no other product formed; in condensation polymerisation monomers join with the elimination of a small molecule, usually water."},
    {q:"Name two addition polymers and two condensation polymers with a use for each.", a:"Addition: polythene for bags and bottles, polyvinyl chloride for pipes. Condensation: nylon for rope and fabric, and polyester for clothing."},
    {q:"State two differences between soap and synthetic detergent.", a:"Soap is made from natural fats and is biodegradable but forms scum in hard water; synthetic detergent is made from petroleum products, works well in hard water without scum, but is often less readily biodegradable."},
    {q:"Name the three main classes of biomolecule and the monomer of each.", a:"Carbohydrates, built from simple sugars such as glucose; proteins, built from amino acids; and lipids, formed from glycerol and fatty acids."},
    {q:"Why is the accumulation of plastic waste an environmental problem?", a:"Most plastics are not biodegradable, so they persist for centuries; they block drains and waterways, are eaten by animals, and release toxic gases when burned in the open."}
  ],
  tf:[
    {s:"Ethanol contains the -OH functional group.", a:"true", why:"It is an alkanol, or alcohol."},
    {s:"Ketones give a silver mirror with Tollens' reagent.", a:"false", why:"Only aldehydes are oxidised by Tollens' reagent; ketones do not react."},
    {s:"Saponification produces soap and glycerol.", a:"true", why:"Alkaline hydrolysis of the ester links in a fat gives both products."},
    {s:"Polythene is formed by condensation polymerisation.", a:"false", why:"It is an addition polymer of ethene; no small molecule is eliminated."},
    {s:"Soap works better than detergent in hard water.", a:"false", why:"Soap forms an insoluble scum with the calcium and magnesium ions in hard water; detergents do not."},
    {s:"Proteins are polymers of amino acids.", a:"true", why:"Amino acids are joined by peptide bonds into long chains."},
    {s:"Thermosetting plastics can be melted and remoulded repeatedly.", a:"false", why:"Their cross-linked structure sets permanently; only thermoplastics can be remoulded."}
  ],
  classify:{ title:"Sort these compounds and materials", groups:[
    {name:"Alcohols", items:["methanol","ethanol","propanol"]},
    {name:"Carboxylic acids", items:["methanoic acid","ethanoic acid","citric acid"]},
    {name:"Addition polymers", items:["polythene","polypropene","PVC","polystyrene"]},
    {name:"Condensation polymers", items:["nylon","polyester","bakelite"]},
    {name:"Natural materials", items:["cotton","wool","rubber","silk"]},
    {name:"Synthetic materials", items:["nylon","polyester","plastic","synthetic rubber"]}
  ]},
  diagram:{ title:"How a soap molecule cleans", caption:"State the role of each labelled feature.", parts:[
    {p:"Hydrocarbon tail", f:"Non-polar and hydrophobic; dissolves into the grease droplet"},
    {p:"Ionic head (-COO- Na+)", f:"Polar and hydrophilic; remains dissolved in the surrounding water"},
    {p:"Grease droplet", f:"The oily dirt being lifted from the fabric surface"},
    {p:"Micelle", f:"Ball of soap molecules with tails inward around the grease and heads outward"},
    {p:"Negative outer surface", f:"Like charges repel, keeping the droplets suspended and preventing redeposition"},
    {p:"Rinse water", f:"Carries the suspended emulsion away from the cloth"}
  ]},
  experiment:{
    title:"Making soap by saponification of palm oil",
    aim:"To prepare soap from a local oil by boiling with sodium hydroxide, and to test its cleaning action.",
    materials:["Palm oil or coconut oil, 10 cm3","Concentrated sodium hydroxide solution, 20 cm3","Saturated sodium chloride solution (brine)","250 cm3 beaker","Tripod, gauze and Bunsen burner","Stirring rod","Filter funnel and paper","Safety goggles and gloves","Distilled water"],
    steps:[
      "Wear goggles and gloves throughout: concentrated sodium hydroxide is severely corrosive.",
      "Place the oil in the beaker and add the sodium hydroxide solution carefully.",
      "Heat the mixture gently, stirring continuously, and keep it just boiling for about 20 minutes; add a little distilled water if it thickens too far.",
      "Test a drop with water: when it no longer separates into an oily layer the saponification is complete.",
      "Pour the hot mixture into brine and stir; the soap separates as a curd on the surface.",
      "Filter off the soap, wash it with a little cold water, press it into a mould and test its lather with distilled and with hard water."
    ],
    expect:"The mixture thickens and becomes creamy as the reaction proceeds. On adding brine a solid curd of soap floats to the surface and can be filtered off and pressed. The washed soap produces a good lather with distilled water, but in hard water lather is poor at first and a white scum forms.",
    why:"Palm oil is an ester of glycerol with long-chain fatty acids. Hot alkali hydrolyses the three ester links, giving glycerol and the sodium salts of the fatty acids, which are soap. Adding brine reduces the solubility of the soap so it salts out as a solid — glycerol stays dissolved in the liquid. Scum in hard water forms because calcium and magnesium ions replace sodium, and those salts are insoluble."
  },
  worked:[
    {q:"Name the ester formed from ethanoic acid and ethanol.", steps:["Acid gives the -oate part","Alcohol gives the ethyl part"], a:"Ethyl ethanoate"},
    {q:"Write the general formula of an alkanol with 3 carbons.", steps:["CnH2n+1OH","n = 3"], a:"C₃H₇OH (propanol)"},
    {q:"How many monomer units are in a polythene chain of relative molecular mass 28 000? (ethene = 28)", steps:["Number = total mass ÷ monomer mass","28 000 ÷ 28"], a:"1000 units"},
    {q:"Classify CH₃CH(OH)CH₃ as primary, secondary or tertiary.", steps:["The -OH carbon carries two alkyl groups"], a:"Secondary alcohol"},
    {q:"Write the equation for the complete combustion of ethanol.", steps:["C₂H₅OH + O₂ → CO₂ + H₂O","Balance: 3 O₂, 2 CO₂, 3 H₂O"], a:"C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O"},
    {q:"Name the products of the saponification of a fat with NaOH.", steps:["Ester + alkali → salt + alcohol","The alcohol here is glycerol"], a:"Soap (sodium salt of fatty acid) and glycerol"},
    {q:"A protein chain has 150 amino acids. How many peptide bonds does it contain?", steps:["Bonds = residues − 1","150 − 1"], a:"149 peptide bonds"}
  ],
  apply:[
    {q:"Why does soap leave a scum in hard water while detergent does not?", a:"Hard water contains calcium and magnesium ions, which form insoluble salts with the fatty acid anions of soap, appearing as scum. Detergent anions form soluble salts with those ions, so no scum results."},
    {q:"Explain the danger of burning plastic waste in a household compound.", a:"Incomplete combustion of plastics releases carbon monoxide, dioxins and hydrogen chloride, which damage the lungs and are carcinogenic, and the smoke settles on food and water nearby."},
    {q:"Why is ethanol produced from sugar cane described as a renewable fuel?", a:"The cane regrows each season and absorbs carbon dioxide as it grows, so the carbon released on burning the ethanol was recently taken from the atmosphere, unlike fossil fuel carbon."},
    {q:"A soap maker's product is harsh and irritates the skin. Suggest the fault and the remedy.", a:"Excess sodium hydroxide remains because saponification was incomplete or too much alkali was used. The remedy is to boil longer until no oil separates, use the correct proportions, and wash the curd thoroughly."},
    {q:"Suggest two reasons why a Liberian entrepreneur might make soap from local palm oil.", a:"The raw material is grown locally and is cheaper than imported fats, and the process needs only simple equipment, so a small business can supply a constant local demand and create employment."}
  ],
  activities:[
    "Practice problems on the classification, nomenclature, properties, preparation and reactions of hydrocarbon derivatives",
    "Practice problems on writing polymerisation reactions",
    "Field trip to a plastic or rubber processing industry",
    "LAB: prepare soap by saponification of a local oil",
    "LAB: prepare and test an ester; note its characteristic smell",
    "LAB: distinguish an aldehyde from a ketone using Fehling's or Tollens' reagent",
    "Classify and draw the structures of fats and oils as alkyl esters"
  ],
  materials:[
    "Primary text: Michael C. Cox and John Sadler, Senior Secondary Guide for Liberia — Chemistry (Star Books/Pearson, 2011)",
    "Palm oil, coconut oil and sodium hydroxide",
    "Ethanol, ethanoic acid and concentrated sulfuric acid",
    "Fehling's and Tollens' reagents",
    "Beakers, tripods, Bunsen burners and filter apparatus",
    "Samples of natural and synthetic polymers"
  ],
  assessment:["Presentation","Written assignment","Quiz","Laboratory report","Practical soap-making project"]
},
{
  grade:12, period:"III", sem:"One", icon:"🏭",
  title:"Chemistry, Industry and the Environment; Selected Metals",
  subtitle:"The chemical industry in Liberia, pollution and its control, and the chemistry of sodium, calcium and copper",
  outcomes:[
    "Learners are able to discuss the development of the chemical industry in Liberia, its effects on the environment, and the concept of biotechnology",
    "Learners are able to identify the properties and uses of selected metals and their compounds"
  ],
  objectives:[
    "Discuss the historical development of industry and classify the chemical industry",
    "Describe the raw materials of the chemical industries in Liberia",
    "Discuss the difference between heavy and fine chemicals",
    "Discuss the effects of industry on the environment in Liberia",
    "Discuss the types of environmental pollution, their sources, effects and control",
    "Discuss the properties and uses of sodium, calcium and copper and their compounds",
    "Demonstrate the preparation and identification of these metals and their compounds"
  ],
  note:"<b>Heavy chemicals</b> are produced in bulk at low cost — sulfuric acid, sodium hydroxide, cement, fertiliser. <b>Fine chemicals</b> are made in small quantity at high purity and price — drugs, dyes, reagents. The chief pollution problems are of the <b>air</b> (smoke, SO₂, CO), the <b>water</b> (effluent, mining silt) and the <b>land</b> (solid waste), with the <b>greenhouse effect</b>, <b>acid rain</b> and <b>ozone depletion</b> as global consequences.",
  study:[
    /* ---- course text: Semester One, Period III — Chemistry, Industry and the Environment; Selected Metals (guide pp. 48-51) ---- */
    {k:"h3", t:"The Chemical Industry — in History and in Liberia"},
    {k:"p", t:"Trace the **historical development of industry** — from the dyers, soap-boilers and iron-smelters of old to the modern chemical works — and the **general characteristics and classification of the chemical industry**: heavy (bulk) inorganic and organic chemicals, fine chemicals, consumer products and biotechnology. Describe the **raw materials of the chemical industries in Liberia** — palm oil for soap, latex for rubber, iron ore, the lime of cement, cassava and sugar cane — and the **factors that determine the siting of chemical industries**: nearness of raw material, of power, of water, of transport and of the market. Classify the chemical industry in Liberia, giving the raw materials of each sector, and take field trips to the leading chemical industries."},
    {k:"rule"},
    {k:"h3", t:"Heavy and Fine Chemicals — the Distinction"},
    {k:"p", t:"**Heavy chemicals** are produced cheap in great tonnage (sulfuric acid, sodium hydroxide, cement); **fine chemicals** are made pure and costly in small amounts (drugs, reagents, dyes). Classify examples of both as they relate to the chemical industry in Liberia."},
    {k:"h3", t:"The Four Great Industrial Processes"},
    {k:"table", head:["Process","Reaction made to work","The product and its life"], rows:[
      ["Haber (ammonia)","N2 + 3H2 = 2NH3, iron catalyst, 450 C, 200 atm, exothermic","Fertilizers (urea, ammonium nitrate), nitric acid, the food supply"],
      ["Contact (sulfuric acid)","S to SO2 to SO3 (V2O5, 450 C), absorbed to oleum, diluted","The workhorse acid: batteries, dyes, petroleum refining, phosphate fertilizer"],
      ["Chlor-alkali (brine)","2NaCl + 2H2O = 2NaOH + H2 + Cl2, electrolysis","Caustic soda, chlorine, hydrogen: soap, PVC, bleaching, water treatment"],
      ["Solvay (soda ash)","Brine + NH3 + CO2 = NaHCO3 (filtered), heated to Na2CO3","Soda ash: glass, detergents, the alkali of the works"]
    ]},
    {k:"p", t:"**The Solvay process, step by step:** saturated brine is carbonated with **ammonia and carbon dioxide** (the ammonia from the Haber process, the CO₂ from the lime kiln), and the **sodium hydrogen carbonate**, being the least soluble of the solids present, crystallizes out; filtered and **heated**, it gives the **soda ash**, NaHCO₃ → ½Na₂CO₃ + ½H₂O + ½CO₂, the CO₂ recycled to the carbonation tank and the **ammonia recovered and run again** — the process's economy is its loop. The by-product, calcium chloride, is the one honest cost, and the modern works face it with the **Hoult process**, which runs on salt cake and gives the alkali directly."},
    {k:"rule"},
    {k:"h3", t:"Industry and the Environment"},
    {k:"p", t:"Discuss the **effects of industries on the environment in Liberia** and their control. **Air, water and soil pollution — sources, effects and control:** smoke and gases foul the air; effluents poison the streams; dumping defaces the soil, and the controls are scrubbers, treatment plants, and law enforced. Three named menaces: the **greenhouse effect** (carbon dioxide and methane blanketing the earth's heat away), **acid rain** (sulfur and nitrogen oxides returning as acid) and the **depletion of the ozone layer** (the chlorine of old refrigerants and sprays eating the shield that stops the hard ultraviolet). The **various types of environmental** management, and the **biotechnology concept** — putting micro-organisms to industrial work (fermentation, waste treatment) — close the topic."},
    {k:"h3", t:"The Pollution Ledger — by Medium"},
    {k:"table", head:["Medium","Main sources","The effect","The control that answers it"], rows:[
      ["Air","Factory smoke, vehicle exhaust, open burning, dust from quarry and kiln","Smog, breathing disease, acid rain, the greenhouse blanket","Scrubbers and filters on the stack, the catalytic converter, fire bans, dust suppression"],
      ["Water","Industrial effluent, domestic sewage, oil spill, the acid drain of the mine","Choked oxygen (BOD), poisoned fish, the dead stretch of stream","Settling and treatment plants, containment booms on the spill, neutralization of the acid drain"],
      ["Soil","Slag and ash dumps, chemical dumping, the leachate of the open dumpsite, the tailings of the mine","Lost fertility, the groundwater stained, the crop's uptake of the metal","Segregation and landfarming of the waste, the liner and the leachate pump, the reclamation of the worked ground"]
    ]},
    {k:"p", t:"**BOD — the number that reads the water:** the **biochemical oxygen demand** is the oxygen the water's microbes consume digesting the organic load, measured over five days (BOD₅) — a clean river runs a single figure, a strewn-out drain runs tens, and the stretch downstream of an untreated outfall goes **deoxygenated**, the fish gasping out of the water and the bottom turning to the anaerobic stink. It is the statistic the treatment plant is judged on, and the one the riparian community feels first. **Biotechnology, in the working:** the **fermentation** of the brewery, the bakery, the yoghurt and the citric-acid vat, all a microbe on the clock; the **activated-sludge** tank and the **anaerobic digester**, where the microbes eat the sewage and give back the sludge and the **biogas** (methane) that the works burn for its own heat; and the **bioremediation** that sets the oil-eating bacteria to the spill, the metal-tolerant plant to the leached ground — the living cell as the works' cheapest, self-replicating machine."},
    {k:"rule"},
    {k:"h3", t:"Chemistry of Selected Metals and their Compounds"},
    {k:"p", t:"**Sodium** — a soft, water-attacking metal kept under oil; its compounds: **NaCl** (table salt, our seasoning and a chlor-alkali feedstock), **NaOH** (caustic soda — soap-making), **Na₂CO₃** (soda ash for glass), **NaHCO₃** (baking soda), **NaNO₃**, **NaClO₃** and **Na₂SO₄.** Describe the common household sodium compounds. **Calcium** — its compounds: **CaCO₃** (limestone, marble), **CaO** (quicklime), **Ca(OH)₂** (slaked lime — mortar and the soil's doctor), **CaSO₄** (gypsum) and **CaCl₂** (the drying agent). **Copper** — the red, non-rusting conductor; its compounds **CuSO₄** (the blue fungicide, electrolysis electrolyte), **CuO** and **CuCl₂**. Discuss the **reactivity of iron and aluminium with air, water and acid**, and demonstrate the preparation of copper, and the handling of sodium and calcium, in the school laboratory."},
    {k:"p", t:"**Sodium and its compounds, in detail:** the metal itself is a soft, silvery, low-melting solid kept under paraffin, because it attacks both air (dulling to the oxide, then the peroxide) and water with a reaction that runs from the fizz to the explosion down the group: 2Na + 2H₂O → 2NaOH + H₂, the hydrogen lighting in the alkali's heat, the flame **lilac** — the sodium test, the flame that reads the metal in the salt. The compounds carry the household and the works: **NaOH** (caustic soda) is deliquescent, the alkali of the soap vat and the drain rod, and the pulper's white liquor; **Na₂CO₃** (soda ash) builds the glass, the detergent and the paper; **NaHCO₃** (baking soda) leavens the bread by giving off CO₂ on heating — 2NaHCO₃ → Na₂CO₃ + H₂O + CO₂ — and in the antacid by meeting the stomach's acid; **NaClO** (the hypochlorite of the bleaching powder and the household bleach) oxidizes the stain and the germ; and **NaCl** is the mineral the sea keeps in solution, the feedstock of the chlor-alkali vat, and the road-de-icer of the cold climates."},
    {k:"p", t:"**Calcium — the lime cycle, worked:** the three calcium compounds of the building trade run in a triangle. **Calcination** drives the limestone: CaCO₃ → CaO + CO₂, the **quicklime** made in the kiln at red heat; **slaking** adds the water: CaO + H₂O → Ca(OH)₂, the **slaked lime**, a heat-giving reaction hot enough to boil a thin paste; **setting** closes the ring: Ca(OH)₂ + CO₂ → CaCO₃ + H₂O, the mortar breathing the air's CO₂ and hardening back to the stone it started from. The farmer's use is the same chemistry on the soil — the lime raises the pH of the acid field, the slaked lime whitewashes the wall and the tree trunk, and **CaSO₄** (gypsum) is the retarder ground into the cement, while **CaCl₂** deliquesces so greedily it is the drying agent of the lab and the de-icing salt of the road. In the water, calcium's story is **hardness**: the bicarbonate form is **temporary** (boiling drives off the CO₂ and the scale drops: Ca(HCO₃)₂ → CaCO₃ + H₂O + CO₂) and the sulfate form **permanent**, softened by the ion-exchange resin that trades the calcium for the sodium."},
    {k:"p", t:"**Copper in the circuit and the garden:** copper's place in the works follows from two properties — it conducts second only to silver, and it resists the air's rust — so the wiring, the busbar and the heat exchanger are its, and the red-brown **CuO** (the black of the heated wire) and **CuCl₂** (the blue-green of the concentrated solution) are the compounds the lab keeps for the reduction and the electrolysis. **CuSO₄** is the fungicide of the field (the Bordeaux spray with its lime), the blue crystal of the electrolytic bath, and the pentahydrate that shows the water-of-crystallisation lesson in one flask — blue as the hydrate, white as the anhydrous, blue again when the water returns. The **reactivity of iron and aluminium** completes the series: iron attacks the dilute acid giving hydrogen and the pale-green Fe²⁺ salt, and weathers to the rust in the damp air, whereas **aluminium** wears its thin, tough **oxide film** as armor — the anodized finish of the pot is that same film, thickened and dyed, and it is why the aluminium roof outlasts the steel gutter it is screwed beside."}
  ],

  focus:[
    "Historical development, characteristics and classification of the chemical industry",
    "Raw materials of the chemical industries in Liberia; factors siting an industry",
    "Heavy and fine chemicals distinguished",
    "Effects of industry on the Liberian environment",
    "Air, water and soil pollution: sources, effects and control",
    "Greenhouse effect, acid rain and ozone depletion",
    "Sodium and its compounds: NaCl, NaOH, Na2CO3, NaHCO3, NaNO3, Na2SO4",
    "Calcium and its compounds: CaCO3, CaO, CaSO4, CaCl2, Ca(OH)2",
    "Copper and its compounds; reactivity of iron and aluminium"
  ],
  terms:[
    {t:"chemical industry", d:"industry converting raw materials into useful chemical products", x:"The chemical industry makes fertiliser and cement."},
    {t:"heavy chemical", d:"a chemical made in bulk at relatively low cost", x:"Sulfuric acid is a heavy chemical."},
    {t:"fine chemical", d:"a chemical made in small quantity at high purity", x:"Pharmaceuticals are fine chemicals."},
    {t:"raw material", d:"the basic substance processed by an industry", x:"Limestone is a raw material for cement."},
    {t:"pollution", d:"the release of harmful substances into the environment", x:"Pollution damages health and habitats."},
    {t:"effluent", d:"liquid waste discharged from a factory", x:"Untreated effluent poisons rivers."},
    {t:"acid rain", d:"rain made acidic by dissolved sulfur and nitrogen oxides", x:"Acid rain corrodes buildings and kills fish."},
    {t:"greenhouse effect", d:"the trapping of heat by gases in the atmosphere", x:"Carbon dioxide intensifies the greenhouse effect."},
    {t:"ozone depletion", d:"the thinning of the ozone layer by CFCs", x:"Ozone depletion increases ultraviolet exposure."},
    {t:"biotechnology", d:"using living organisms to make useful products", x:"Biotechnology produces enzymes and vaccines."},
    {t:"recycling", d:"reprocessing waste into new material", x:"Recycling conserves raw materials."},
    {t:"caustic soda", d:"sodium hydroxide, a strong alkali", x:"Caustic soda is used in soap making."},
    {t:"washing soda", d:"hydrated sodium carbonate", x:"Washing soda softens hard water."},
    {t:"baking soda", d:"sodium hydrogencarbonate", x:"Baking soda releases carbon dioxide in baking."},
    {t:"quicklime", d:"calcium oxide, made by heating limestone", x:"Quicklime is used to treat acid soil."},
    {t:"slaked lime", d:"calcium hydroxide, made by adding water to quicklime", x:"Slaked lime is used in mortar."},
    {t:"limestone", d:"rock composed chiefly of calcium carbonate", x:"Limestone is quarried for cement."},
    {t:"thermal decomposition", d:"breaking a compound down by heating", x:"Thermal decomposition of limestone gives quicklime."},
    {t:"flame test", d:"identifying a metal ion by the colour it gives a flame", x:"Sodium gives a golden yellow flame test."},
    {t:"efflorescence", d:"the loss of water of crystallisation to the air", x:"Washing soda shows efflorescence."}
  ],
  facts:[
    {q:"State the difference between heavy and fine chemicals with two examples of each.", a:"Heavy chemicals are made in very large tonnages at low unit cost — sulfuric acid, sodium hydroxide, cement and fertiliser. Fine chemicals are made in small quantities at high purity and high price — pharmaceuticals, dyes and laboratory reagents."},
    {q:"Name four raw materials available to the chemical industry in Liberia.", a:"Limestone for cement, rubber latex, palm oil, iron ore, and salt from sea water; timber and clay are also processed."},
    {q:"State four factors determining the siting of a chemical industry.", a:"Nearness to raw materials and to a market, availability of water and power, good transport links, and a supply of labour; environmental regulations and waste disposal also matter."},
    {q:"Name the main sources and effects of air pollution.", a:"Sources include vehicle exhaust, factory chimneys, burning refuse and mining dust. Effects include respiratory disease, acid rain, reduced visibility and contribution to global warming."},
    {q:"Explain how acid rain forms and state two of its effects.", a:"Sulfur dioxide and nitrogen oxides from burning fossil fuels dissolve in atmospheric water to form sulfuric and nitric acids. The rain acidifies lakes killing fish, damages crops and forests, and corrodes limestone buildings and metal structures."},
    {q:"State four methods of controlling industrial pollution.", a:"Treat effluent before discharge; fit scrubbers and filters to chimneys; recycle waste and by-products; site industries away from residential areas; and enforce environmental legislation with monitoring."},
    {q:"Name four compounds of sodium and give one use of each.", a:"Sodium chloride for food and as a chemical feedstock; sodium hydroxide in soap making; sodium carbonate for softening water and making glass; and sodium hydrogencarbonate as baking powder and in fire extinguishers."},
    {q:"Name four compounds of calcium and give one use of each.", a:"Calcium carbonate for cement and as a building stone; calcium oxide for treating acid soil; calcium hydroxide in mortar and whitewash; and calcium sulfate as plaster of Paris."},
    {q:"Write the equation for the thermal decomposition of limestone and name the products.", a:"CaCO₃ → CaO + CO₂ on strong heating, giving quicklime (calcium oxide) and carbon dioxide."},
    {q:"Give the flame test colours for sodium, calcium and copper.", a:"Sodium gives a golden yellow flame, calcium a brick-red flame and copper a blue-green flame."},
    {q:"Compare the reactivity of iron and aluminium with air, water and acid.", a:"Aluminium is the more reactive but forms a tough impervious oxide layer that protects it, so it appears unreactive; iron has no such protective layer and rusts in moist air. Both react with dilute acids to give hydrogen, aluminium more vigorously once the oxide is removed."}
  ],
  tf:[
    {s:"Sulfuric acid is classified as a heavy chemical.", a:"true", why:"It is produced in enormous tonnage at low unit cost."},
    {s:"Acid rain is caused mainly by carbon dioxide.", a:"false", why:"It is caused chiefly by sulfur dioxide and nitrogen oxides; carbon dioxide makes rain only very weakly acidic."},
    {s:"Sodium gives a golden yellow colour in a flame test.", a:"true", why:"This is a reliable identification test for sodium ions."},
    {s:"Heating limestone produces quicklime and carbon dioxide.", a:"true", why:"CaCO3 decomposes thermally to CaO and CO2."},
    {s:"Aluminium is less reactive than iron.", a:"false", why:"Aluminium is more reactive, but its protective oxide layer makes it appear otherwise."},
    {s:"Untreated factory effluent can be safely discharged into rivers.", a:"false", why:"It poisons aquatic life and contaminates water used for drinking, washing and irrigation."},
    {s:"Recycling reduces the demand for raw materials.", a:"true", why:"Reprocessing used material means less new ore or feedstock must be extracted."}
  ],
  classify:{ title:"Sort these chemicals and effects", groups:[
    {name:"Heavy chemicals", items:["sulfuric acid","sodium hydroxide","cement","fertiliser"]},
    {name:"Fine chemicals", items:["pharmaceuticals","dyes","laboratory reagents","perfumes"]},
    {name:"Air pollutants", items:["sulfur dioxide","carbon monoxide","nitrogen oxides","smoke"]},
    {name:"Compounds of sodium", items:["NaCl","NaOH","Na2CO3","NaHCO3"]},
    {name:"Compounds of calcium", items:["CaCO3","CaO","Ca(OH)2","CaSO4"]}
  ]},
  diagram:{ title:"Sources and control of industrial pollution", caption:"State the pollutant produced and one control measure for each source.", parts:[
    {p:"Factory chimney", f:"Sulfur dioxide and smoke; controlled by scrubbers, filters and low-sulfur fuel"},
    {p:"Effluent pipe", f:"Toxic liquid waste; controlled by treatment and neutralisation before discharge"},
    {p:"Mine tailings", f:"Silt and heavy metals; controlled by settling ponds and site rehabilitation"},
    {p:"Vehicle exhaust", f:"Carbon monoxide and lead; controlled by catalytic converters and unleaded fuel"},
    {p:"Refuse dump", f:"Solid and plastic waste; controlled by sorting, recycling and sanitary landfill"},
    {p:"Cement kiln", f:"Dust and carbon dioxide; controlled by electrostatic precipitators and bag filters"}
  ]},
  experiment:{
    title:"Identifying cations by flame test and precipitation",
    aim:"To identify sodium, calcium and copper ions in solution by flame test and by precipitation with sodium hydroxide.",
    materials:["Solutions of sodium chloride, calcium chloride and copper(II) sulfate","Concentrated hydrochloric acid in a watch glass","Nichrome or platinum wire","Bunsen burner","Test tubes and rack","Sodium hydroxide solution","Dropper","Safety goggles"],
    steps:[
      "Clean the wire by dipping it in concentrated hydrochloric acid and holding it in the hot flame until no colour shows.",
      "Dip the clean wire into the first solution and hold it in the edge of a blue flame; record the colour produced.",
      "Clean the wire again between every test and repeat for each solution.",
      "Place 2 cm3 of each solution in a separate test tube.",
      "Add sodium hydroxide solution drop by drop to each and record the colour of any precipitate.",
      "Continue adding until the sodium hydroxide is in excess and note whether the precipitate dissolves."
    ],
    expect:"Sodium gives a persistent golden yellow flame, calcium a brick-red flame and copper a blue-green flame. With sodium hydroxide, the sodium solution gives no precipitate; calcium gives a white precipitate insoluble in excess; and copper gives a pale blue precipitate of copper(II) hydroxide, also insoluble in excess.",
    why:"In the flame the heat excites the metal's outer electrons to higher energy levels; as they fall back they emit light of a wavelength characteristic of that element, which is why the colour identifies the metal. In the precipitation test the hydroxides of calcium and copper are insoluble and separate as solids, while sodium hydroxide is itself soluble so no precipitate forms — the two tests together confirm the identification."
  },
  worked:[
    {q:"Calculate the mass of CaO from the complete decomposition of 200 g of CaCO3 (CaCO3 = 100, CaO = 56).", steps:["moles CaCO₃ = 200 ÷ 100 = 2","1:1 ratio gives 2 mol CaO","2 × 56"], a:"112 g"},
    {q:"What mass of CO2 is released in the same reaction? (CO2 = 44)", steps:["2 mol CO₂ formed","2 × 44"], a:"88 g"},
    {q:"Calculate the percentage of calcium in CaCO3 (Ca = 40, total = 100).", steps:["(40 ÷ 100) × 100"], a:"40%"},
    {q:"A factory emits 5 tonnes of SO2 daily. How much is that per year (365 days)?", steps:["5 × 365"], a:"1825 tonnes per year"},
    {q:"Calculate the molar mass of Na2CO3 (Na = 23, C = 12, O = 16).", steps:["(2 × 23) + 12 + (3 × 16)","46 + 12 + 48"], a:"106 g/mol"},
    {q:"How many moles are in 21.2 g of Na2CO3?", steps:["moles = 21.2 ÷ 106"], a:"0.2 mol"},
    {q:"Water contains 0.008 g of lead per kg. Express this in ppm.", steps:["0.008 g = 8 mg","ppm = mg per kg"], a:"8 ppm"}
  ],
  apply:[
    {q:"A cement factory is proposed near a town. State two benefits and two environmental concerns.", a:"Benefits: employment and income for the community, and locally produced cement reducing construction costs. Concerns: dust and carbon dioxide emissions harming health and climate, and quarrying that destroys land and habitat."},
    {q:"Why is baking soda used in some fire extinguishers?", a:"Heat decomposes sodium hydrogencarbonate to release carbon dioxide, which is denser than air and smothers the flame by excluding oxygen."},
    {q:"Explain why farmers add lime to acidic soil rather than sodium hydroxide.", a:"Lime is a cheap, mildly alkaline, slow-acting base that neutralises the acid gradually and also supplies calcium as a nutrient; sodium hydroxide is corrosive, expensive and would damage soil structure and plant roots."},
    {q:"A river below a mine runs brown and the fish disappear. Explain the chemistry and suggest a control.", a:"Silt and dissolved heavy metals from the tailings clog fish gills and poison aquatic life while blocking light for plants. Settling ponds and treatment of the effluent before discharge would control it."},
    {q:"Suggest why Liberia imports many fine chemicals but could produce heavy chemicals locally.", a:"Fine chemicals need advanced technology, strict quality control and skilled specialists; heavy chemicals such as cement, salt and lime can be made from abundant local raw materials with simpler plant."}
  ],
  activities:[
    "Describe the development of the chemical industry in Liberia and its characteristics",
    "Classify the chemical industry in Liberia and give the raw materials of each sector",
    "Field trips to leading chemical industries in Liberia",
    "Classify heavy and fine chemicals as they relate to industry in Liberia",
    "Describe common household sodium and calcium compounds with their formulae and uses",
    "LAB: identify cations by flame test and by precipitation with sodium hydroxide",
    "LAB: prepare quicklime by heating limestone and slake it to calcium hydroxide"
  ],
  materials:[
    "Primary text: Michael C. Cox and John Sadler, Senior Secondary Guide for Liberia — Chemistry (Star Books/Pearson, 2011)",
    "Solutions of sodium, calcium and copper salts",
    "Nichrome wire, concentrated hydrochloric acid, Bunsen burners",
    "Limestone, sodium hydroxide solution",
    "Centrifuge, distilled water and pH paper",
    "Charts of Liberian mineral resources"
  ],
  assessment:["Presentation","Written assignment","Quiz","Laboratory report","Field trip report"]
},
{
  grade:12, period:"IV", sem:"Two", icon:"⛏️",
  title:"Metallurgy, Alloys and Cement; Selected Non-Metals",
  subtitle:"Extraction of aluminium, iron, gold and tin; alloys and cement; carbon, nitrogen, oxygen and sulfur",
  outcomes:[
    "Learners are able to discuss extensively the different extraction methods and production activities",
    "Learners are able to discuss the occurrence, properties, preparation, reactions and uses of non-metals and their compounds"
  ],
  objectives:[
    "Describe the metallurgy, properties and uses of Al, Fe, Cu, Au and Sn",
    "Discuss alloys including the common uses of brass, bronze, steel and duralumin",
    "Analyse the production processes of cement and its uses",
    "Apply laboratory methods for preparing and testing carbon, nitrogen, oxygen and sulfur and their compounds",
    "Discuss the uses and reactions of the compounds of these non-metals",
    "Discuss coal, coke and the composition of hard and soft water"
  ],
  note:"<b>Metallurgy</b> is the extraction of a metal from its ore. Very reactive metals such as <b>aluminium</b> require <b>electrolysis</b>; less reactive ones such as <b>iron</b> are <b>reduced with carbon</b> in a blast furnace; unreactive <b>gold</b> occurs native. An <b>alloy</b> is a mixture of a metal with other elements, giving improved properties — <b>brass</b> (Cu+Zn), <b>bronze</b> (Cu+Sn), <b>steel</b> (Fe+C), <b>duralumin</b> (Al+Cu+Mg).",
  study:[
    /* ---- course text: Semester Two, Period IV — Metallurgy, Alloys and Cement; Selected Non-Metals (guide pp. 52-57) ---- */
    {k:"h3", t:"Metallurgy — the Extraction of Metals"},
    {k:"p", t:"**Metallurgy** wins a metal from its ore: mine, concentrate, reduce and refine. Describe the metallurgy, properties and uses of **aluminium** (from bauxite dissolved to alumina, then reduced by **electrolysis** in molten cryolite; light and air-proof, for roofing, pots and aircraft), **iron** (ore, coke and limestone charged in the **blast furnace**; the pig iron purified to steel), **copper** (roasting, then refining by electrolysis), **gold** (won by panning and dissolving — Liberia's rivers), and **tin** (from cassiterite). For each: raw materials, processing, main product, by-products, **recycling** — and uses of the metal. Identify some ores in Liberia and their constituent metals; take the field trips to CEMENCO and to a mining company."},
    {k:"h3", t:"Aluminium — the Hall-Héroult Cell"},
    {k:"p", t:"The route runs in two stages. **First, the Bayer process:** the bauxite (a mix of hydrated alumina with the iron and silica impurities) is digested with hot **sodium hydroxide**, the alumina dissolving to the sodium aluminate while the impurities stand as the red **red mud**; carbonation of the liquor precipitates the pure **alumina, Al₂O₃**, the feedstock. **Second, the electrolytic cell:** the alumina is dissolved in **molten cryolite** at about 950 °C (cryolite's role is to cut the working temperature from the alumina's own 2 050 °C melting point), the **carbon anodes** and the iron bath lined in carbon are the electrodes, and the current runs the reduction at the cathode — Al³⁺ + 3e⁻ → Al, the liquid aluminium sinking to the bottom for tapping — while the anodes are themselves consumed, burning to the CO₂ that leaves the works' roof: 2Al₂O₃ + 3C → 4Al + 3CO₂. The product is light (2.7, against iron's 7.9), air-proof under its oxide skin, and strong when alloyed — the pot, the roofing sheet, the aircraft skin, the foil. And the **recycling** figure is the industry's quiet pride: remelting the scrap takes about **5 %** of the primary energy, which is why the bottle back into the bottle is the greenest aluminium there is."},
    {k:"h3", t:"Iron — the Blast Furnace, Top to Bottom"},
    {k:"p", t:"The furnace is a chimney of zones, each running its own reaction. At the **top**, the hot blast of air meets the descending coke: C + O₂ → CO₂. In the **belly**, the CO₂ is reduced by the glowing coke: CO₂ + C → 2CO, the **carbon monoxide** that does the real work. Through the **shaft**, the monoxide strips the iron from its oxide: Fe₂O₃ + 3CO → 2Fe + 3CO₂, the iron dropping as **pig iron**, a hard, brittle 3-4 % carbon alloy. And the **limestone** (the third charge) has its own job: it decomposes to CaO, which eats the silica impurity as the **slag**, CaSiO₃, tapped off above the iron. The pig iron goes to the **basic oxygen converter**, where a blast of oxygen burns the carbon and the silicon and phosphorus out to the **steel**, the carbon content setting the grade — mild steel (0.1-0.3 %) for the girder, the higher carbons for the spring and the file. **Rust is the iron's second extraction, in reverse:** the prevention is the works' counter-chemistry — the **galvanizing** that trades the zinc as the sacrificial anode, the **paint and grease** that starve the oxygen and the water, and the **stainless** alloy (iron with 18 % chromium, 8 % nickel) whose chromium oxide film stands where the rust would be."},
    {k:"rule"},
    {k:"h3", t:"Alloys"},
    {k:"p", t:"An **alloy** is an intentional mixture of metals (or metal with carbon) whose properties surpass the pure metal. Discuss the common alloys of Cu, Al, Pb and Fe and their uses: **brass** (copper + zinc — taps, cartridge cases), **bronze** (copper + tin — statues, medals, bells), **steel** (iron + carbon — construction), and **duralumin** (aluminium + copper and magnesium — light and strong, for aircraft); with solder (lead + tin) joining the circuits. Identify some alloys in your surroundings and state their compositions."},
    {k:"p", t:"**Copper, from the ore to the cathode:** the ore is **chalcopyrite, CuFeS₂**, the yellow brassy mineral, concentrated by **froth flotation** (the powdered ore is agitated with water and oil — the sulphide grains rise to the foam, the gangue sinks); the concentrate is **roasted** to the oxides and reduced with iron or by self-reduction to the **blister copper** of about 98-99 %; and the final purity comes by **electrolytic refining** — the blister is cast into the **anode**, hung in acidified copper sulfate with a thin **cathode** of pure copper, and the current plates the 99.99 % onto the cathode while the impurities, gold and silver among them, drop as the **anode mud** — the by-product that pays for part of the plant, the precious metals recovered from the sludge. The product carries the wiring, the pipe, the busbar, and the alloy's share of the taps and the bells."},
    {k:"p", t:"**The reactivity series, the whole ladder — and what it tells the smelter:** the metals in order of ease of oxidation, from the eager to the noble: **K, Na, Ca, Mg, Al, (C), Zn, Fe, (H), Pb, Cu, Ag, Au**. The position fixes the **extraction method**: the top of the ladder (K, Na, Ca, Mg, Al) is so eager to keep its electrons that only **electrolysis** of the molten compound can win the metal — the Hall-Héroult cell, the down-draught furnace for the magnesium; the middle (Zn, Fe, Pb) yields to **carbon reduction**, the coke or the monoxide of the blast furnace and the shaft furnace; the bottom (Cu, Ag) is won by **roasting and self-reduction**, and the noblest, **gold and platinum, sit native in the ground**, the panning and the amalgam of the river the whole of their metallurgy. The **thermite reaction** is the series made visible: 2Al + Fe₂O₃ → Al₂O₃ + 2Fe, the aluminium (higher in the ladder) robbing the iron oxide of its oxygen in a flash hot enough to melt the iron — the weld that joins the rail joint where no workshop reaches."},
    {k:"bul", items:[
      "Above carbon — K, Na, Ca, Mg, Al: **electrolysis** of the molten compound",
      "Carbon to zinc — Zn, Fe: **reduction by carbon or carbon monoxide** in the furnace",
      "Zinc to copper — Pb, Cu: **roasting, self-reduction**, the ore doing part of its own work",
      "Copper and below — Ag, Au, Pt: **native**, won by panning, amalgamation, the cyanide leach"
    ]},
    {k:"rule"},
    {k:"h3", t:"Cement and its Uses"},
    {k:"p", t:"Analyze the **production processes of cement**: limestone and clay (or shale) are ground, burned in a long rotary kiln to clinker, and ground again with a little gypsum. **Uses of cement:** with sand it makes mortar, with sand and gravel — concrete for our roads, bridges and blocks. The **environmental impact of cement** — the dust of the quarry and the kiln — must be controlled."},
    {k:"p", t:"**The chemistry of the kiln, in full:** the raw mix is about **80 % limestone and 20 % clay**, ground to a fine slurry or powder and fed to the head of the **rotary kiln**, a steel drum on a slight tilt that turns slowly, the charge tumbling down against the rising hot gases to about **1 450 °C**. In that heat the limestone gives up its CO₂ (CaCO₃ → CaO + CO₂ — the process's carbon cost, the source of much of the industry's footprint) and the calcium, silicon and aluminium oxides **combine** to the four clinker minerals, the silicates that are the cement's true identity. The clinker is cooled, ground again, and the final touch is **3-5 % gypsum** — CaSO₄·2H₂O, ground in as the **retarder** that arrests the flash set, buying the mixer the working minutes the plaster needs. **Setting** is hydration, not drying: the clinker minerals drink the water and grow the interlocking needles and plates of calcium silicate hydrate, the paste that grips the aggregate; and the **concrete** is that paste around sand and stone, **cured** — kept damp — for its first week, the strength climbing as the hydration climbs, most of it in the first days, the rest over years. The controls the works owes the neighbourhood: the baghouse on the kiln's stack, the water spray on the transfer points, the dust monitor on the road, and the quarry face stepped and revegetated behind."},
    {k:"rule"},
    {k:"h3", t:"Selected Non-Metals and their Compounds"},
    {k:"p", t:"Discuss the occurrence, properties, preparation, reactions and uses of the non-metals, and apply the laboratory methods of preparing and testing for them. **Carbon** — its **allotropes**: crystalline **diamond** (hardest natural substance — drills, jewellery) and **graphite** (soft, slippery, a conductor — pencils, electrodes), with the amorphous carbons (charcoal, lampblack). The **oxides of carbon:** **CO₂** — from burning and fermentation; prepared in the lab from calcium carbonate and dilute acid; the gas of lime-water turning milky, of photosynthesis, fire extinguishers and fizzy drinks; and **CO** — the poisonous, burning gas of incomplete combustion. Prepare and test carbon dioxide in the lab."},
    {k:"p", t:"**Nitrogen** — for fertilizers, ammonia by the Haber process; **oxygen** — for welding, hospitals and burning; **sulfur** — for vulcanizing rubber and sulfuric acid by the Contact process; and the reactions of the compounds of carbon, nitrogen, oxygen and sulfur across the exercises."},
    {k:"rule"},
    {k:"h3", t:"Coal and Coke"},
    {k:"p", t:"**Coal — its types** (peat, lignite, bituminous, anthracite, rising in carbon) — and its **destructive distillation**: heated without air it yields coke, coal gas, coal tar and ammoniacal liquor, each with its uses. **Coke** — the smokeless fuel and iron furnaces' reducing agent; its **gasification** with steam gives water gas, the **synthetic gas** (synthesis gas) from which synthetic petrol and ammonia are manufactured."},
    {k:"h3", t:"The Gases, Prepared and Tested"},
    {k:"table", head:["Gas","Prepared in the laboratory","The test that confirms it"], rows:[
      ["Oxygen","Hydrogen peroxide on manganese dioxide; or heating potassium chlorate with the same catalyst","Relights the glowing splint to a flame"],
      ["Hydrogen","Zinc on dilute sulfuric acid","The lighted splint: the sharp pop"],
      ["Carbon dioxide","Marble (calcium carbonate) on dilute hydrochloric acid","Turns limewater milky; extinguishes the flame"],
      ["Ammonia","Warming ammonium chloride with sodium hydroxide","Pungent; turns red litmus blue; dense white fume with HCl"],
      ["Chlorine","Manganese dioxide on concentrated hydrochloric acid","Bleaches damp coloured cloth; turns damp starch-iodide paper blue-black"]
    ]},
    {k:"p", t:"**Sulfur and the Contact process, in full:** the element is the yellow, non-metal of the vulcanizer's bench and the acid works' feedstock, and its route to **sulfuric acid** is the **Contact process** in four rooms. **Roasting**: S + O₂ → SO₂, the sulphur (or the pyrite) burned to the sulphur dioxide. **Oxidation**: 2SO₂ + O₂ ⇌ 2SO₃, over **vanadium(V) oxide** at **450 °C** — the equilibrium run at modest pressure, the temperature a compromise between the exothermic yield and the rate the catalyst allows. **Absorption**: the SO₃ is taken up not in water but in **concentrated sulfuric acid**, SO₃ + H₂SO₄ → H₂S₂O₇, the **oleum** (disulfuric acid), which is then diluted to the 98 % acid the works sells; direct water absorption is refused because the SO₃ grabs the water as a sticky, uncatchable mist. The product is the most-produced chemical on earth — the battery's electrolyte, the fertilizer's phosphate, the dye works' bath, the refinery's sweetening — and the same sulphur, straight from the **Frasch** well or the mine, vulcanizes the rubber: the cross-links of the sulphur atom that turn the sticky, soft latex into the tyre that carries the island."},
  ],

  focus:[
    "Metallurgy: extraction of aluminium, iron, gold and tin",
    "Raw materials, processing, main products, by-products and recycling",
    "Alloys of copper, aluminium, lead and iron and their uses",
    "Cement: production processes, uses and environmental impact",
    "Carbon: allotropes, oxides, coal and coke",
    "Nitrogen and its compounds; oxygen and binary compounds",
    "Sulfur and its compounds, including sulfurous and sulfuric acids",
    "Water: composition, hard and soft water"
  ],
  terms:[
    {t:"metallurgy", d:"the science of extracting and working metals from ores", x:"Metallurgy converts ore into useful metal."},
    {t:"ore", d:"a mineral from which a metal can profitably be extracted", x:"Bauxite is the ore of aluminium."},
    {t:"bauxite", d:"the principal ore of aluminium", x:"Bauxite is purified before electrolysis."},
    {t:"haematite", d:"an iron ore, chiefly iron(III) oxide", x:"Haematite is smelted in the blast furnace."},
    {t:"blast furnace", d:"the tall furnace in which iron ore is reduced by carbon", x:"The blast furnace produces pig iron."},
    {t:"slag", d:"the waste formed when impurities combine with limestone", x:"Slag floats on the molten iron."},
    {t:"flux", d:"a substance added to remove impurities as slag", x:"Limestone is the flux in iron smelting."},
    {t:"smelting", d:"extracting metal from ore by heating with a reducing agent", x:"Smelting reduces iron oxide to iron."},
    {t:"alloy", d:"a mixture of a metal with one or more other elements", x:"Steel is an alloy of iron and carbon."},
    {t:"brass", d:"an alloy of copper and zinc", x:"Brass is used for instruments and fittings."},
    {t:"bronze", d:"an alloy of copper and tin", x:"Bronze resists corrosion in sea water."},
    {t:"duralumin", d:"a light strong alloy of aluminium with copper and magnesium", x:"Duralumin is used in aircraft."},
    {t:"cement", d:"a binding powder made by heating limestone with clay", x:"Cement sets hard when mixed with water."},
    {t:"clinker", d:"the fused nodules formed in the cement kiln", x:"Clinker is ground with gypsum to make cement."},
    {t:"allotrope", d:"a different physical form of the same element", x:"Diamond and graphite are allotropes of carbon."},
    {t:"diamond", d:"the hardest allotrope of carbon, with a giant covalent structure", x:"Diamond is used in cutting tools."},
    {t:"graphite", d:"a soft layered allotrope of carbon that conducts electricity", x:"Graphite is used in pencils and electrodes."},
    {t:"destructive distillation", d:"heating a substance in the absence of air to decompose it", x:"Destructive distillation of coal gives coke and coal gas."},
    {t:"coke", d:"the solid residue of carbon left after coal is heated without air", x:"Coke is the reducing agent in the blast furnace."},
    {t:"hard water", d:"water containing dissolved calcium and magnesium salts", x:"Hard water forms scum with soap."},
    {t:"temporary hardness", d:"hardness removable by boiling, due to hydrogencarbonates", x:"Temporary hardness leaves scale in kettles."},
    {t:"permanent hardness", d:"hardness not removed by boiling, due to sulfates and chlorides", x:"Permanent hardness needs washing soda."}
  ],
  facts:[
    {q:"Why is aluminium extracted by electrolysis while iron is reduced with carbon?", a:"Aluminium is high in the reactivity series and its oxide is too stable for carbon to reduce, so electrolysis of the molten purified ore is required. Iron is lower in the series and its oxide can be reduced by carbon monoxide in a blast furnace at far lower cost."},
    {q:"Name the three raw materials charged into a blast furnace and state the function of each.", a:"Iron ore supplies the iron oxide; coke burns to give heat and produces carbon monoxide as the reducing agent; limestone acts as flux, decomposing to lime which combines with sandy impurities to form slag."},
    {q:"Write the main reduction equation occurring in the blast furnace.", a:"Fe₂O₃ + 3CO → 2Fe + 3CO₂."},
    {q:"Name four alloys, their composition and one use of each.", a:"Brass: copper and zinc, for fittings and instruments. Bronze: copper and tin, for statues and marine parts. Steel: iron and carbon, for construction. Duralumin: aluminium with copper and magnesium, for aircraft."},
    {q:"Why are alloys generally more useful than pure metals?", a:"The differently sized atoms disrupt the regular lattice so layers cannot slide easily, making the alloy harder and stronger; alloys may also resist corrosion better and can be designed for a particular property."},
    {q:"Outline the production of cement.", a:"Limestone and clay are quarried, crushed and mixed, then heated in a rotary kiln to about 1450 °C where they fuse into clinker; the cooled clinker is ground with a little gypsum to control setting, giving cement powder."},
    {q:"State two environmental impacts of cement production.", a:"It releases large quantities of carbon dioxide, both from the decomposition of limestone and from the fuel burned; and it produces dust and requires quarrying that destroys land and habitat."},
    {q:"Name three allotropes of carbon and state one property and use of each.", a:"Diamond is extremely hard with every atom bonded to four others, used in cutting tools; graphite is soft and conducts electricity because of its layered structure with delocalised electrons, used in pencils and electrodes; amorphous carbon such as charcoal is porous and used as a fuel and adsorbent."},
    {q:"State three differences between the properties of CO and CO2.", a:"Carbon monoxide is highly poisonous, burns in air, and is a neutral oxide; carbon dioxide is not poisonous in ordinary concentrations, does not burn and extinguishes flames, and is an acidic oxide turning limewater milky."},
    {q:"What is destructive distillation of coal and what are its products?", a:"Heating coal strongly in the absence of air so that it decomposes, giving coke, coal tar, ammoniacal liquor and coal gas — all of which have industrial uses."},
    {q:"Distinguish temporary from permanent hardness of water and state how each is removed.", a:"Temporary hardness is caused by dissolved calcium and magnesium hydrogencarbonates and is removed by boiling, which decomposes them. Permanent hardness is caused by their sulfates and chlorides and requires washing soda, ion exchange or distillation."}
  ],
  tf:[
    {s:"Aluminium is extracted by reduction with carbon in a blast furnace.", a:"false", why:"It is too reactive; aluminium is obtained by electrolysis of its purified molten ore."},
    {s:"Limestone acts as a flux in the blast furnace.", a:"true", why:"It decomposes to lime which combines with sandy impurities to form slag."},
    {s:"Bronze is an alloy of copper and zinc.", a:"false", why:"Bronze is copper with tin; copper with zinc is brass."},
    {s:"Graphite conducts electricity but diamond does not.", a:"true", why:"Graphite has delocalised electrons between its layers; in diamond all four valence electrons are locked in bonds."},
    {s:"Carbon dioxide turns limewater milky.", a:"true", why:"Insoluble calcium carbonate is precipitated, which is the standard test for the gas."},
    {s:"Temporary hardness in water can be removed by boiling.", a:"true", why:"Boiling decomposes the dissolved hydrogencarbonates."},
    {s:"Alloys are compounds of two or more metals.", a:"false", why:"They are mixtures, not compounds, and may include non-metals such as carbon in steel."}
  ],
  classify:{ title:"Sort these materials", groups:[
    {name:"Extracted by electrolysis", items:["aluminium","sodium","magnesium"]},
    {name:"Extracted by carbon reduction", items:["iron","zinc","lead","tin"]},
    {name:"Found native", items:["gold","platinum","silver"]},
    {name:"Alloys", items:["brass","bronze","steel","duralumin"]},
    {name:"Allotropes of carbon", items:["diamond","graphite","charcoal"]},
    {name:"Causes of water hardness", items:["calcium hydrogencarbonate","magnesium sulfate","calcium chloride"]}
  ]},
  diagram:{ title:"The blast furnace", caption:"State what happens at each labelled zone or opening.", parts:[
    {p:"Charge inlet at the top", f:"Iron ore, coke and limestone are fed in continuously"},
    {p:"Hot air blast (tuyeres)", f:"Preheated air blown in to burn the coke and raise the temperature"},
    {p:"Combustion zone", f:"Coke burns to carbon dioxide, releasing great heat"},
    {p:"Reduction zone", f:"CO2 + C forms CO, which reduces iron oxide to molten iron"},
    {p:"Limestone decomposition zone", f:"CaCO3 decomposes to CaO, which combines with impurities"},
    {p:"Slag tap-hole", f:"Molten slag, being less dense, is drawn off above the iron"},
    {p:"Iron tap-hole", f:"Molten pig iron collects at the base and is run off"},
    {p:"Waste gas outlet", f:"Hot gases removed, cleaned and used to preheat the incoming air"}
  ]},
  experiment:{
    title:"Preparing and testing carbon dioxide",
    aim:"To prepare carbon dioxide in the laboratory and confirm its identity and properties.",
    materials:["Marble chips (calcium carbonate)","Dilute hydrochloric acid","Flat-bottomed flask with thistle funnel and delivery tube","Gas jars and covers","Limewater","Blue litmus paper","Wooden splint and matches","Trough"],
    steps:[
      "Place marble chips in the flask and fit the stopper carrying the thistle funnel and delivery tube.",
      "Pour dilute hydrochloric acid down the thistle funnel until it covers the chips, and observe the effervescence.",
      "Collect the gas by downward delivery into gas jars, since carbon dioxide is denser than air.",
      "Lower a lighted splint into one jar and record what happens.",
      "Pour a little limewater into a second jar, cover and shake, and record the observation.",
      "Place damp blue litmus paper in a third jar and record any colour change."
    ],
    expect:"Effervescence occurs at once and the chips gradually dissolve. The lighted splint is extinguished, showing the gas does not support combustion. The limewater turns milky, confirming carbon dioxide. Damp blue litmus turns faintly pink, showing the gas is weakly acidic in water.",
    why:"The acid displaces carbon dioxide from the carbonate: CaCO3 + 2HCl → CaCl2 + H2O + CO2. The gas is collected by downward delivery because it is about one and a half times as dense as air. Limewater turns milky because the gas forms insoluble calcium carbonate, and the litmus test shows it dissolves to form the weak acid H2CO3 — properties that also explain its use in fire extinguishers and its role in acidifying rainwater."
  },
  worked:[
    {q:"Calculate the mass of iron obtainable from 320 g of Fe2O3 (Fe = 56, O = 16).", steps:["M(Fe₂O₃) = 160, moles = 320 ÷ 160 = 2","Each mole gives 2 mol Fe = 4 mol","4 × 56"], a:"224 g"},
    {q:"Find the percentage of iron in Fe2O3.", steps:["Fe mass = 112, total = 160","(112 ÷ 160) × 100"], a:"70%"},
    {q:"What mass of CaO forms from 500 kg of pure CaCO3? (CaCO3 = 100, CaO = 56)", steps:["moles = 500 000 ÷ 100 = 5000","5000 × 56 g"], a:"280 kg"},
    {q:"An alloy is 70% copper and 30% zinc. What mass of copper is in 250 g?", steps:["0.70 × 250"], a:"175 g copper"},
    {q:"Calculate the volume of CO2 at s.t.p. from 50 g of CaCO3 (M = 100).", steps:["moles = 50 ÷ 100 = 0.5","0.5 × 22.4 dm³"], a:"11.2 dm³"},
    {q:"Balance: Fe2O3 + CO → Fe + CO2.", steps:["Balance Fe: 2 on right","Balance O with 3CO and 3CO₂"], a:"Fe₂O₃ + 3CO → 2Fe + 3CO₂"},
    {q:"How many tonnes of ore at 60% Fe2O3 give 1 tonne of the oxide?", steps:["1 ÷ 0.60"], a:"1.67 tonnes of ore"}
  ],
  apply:[
    {q:"Why is scrap iron recycled rather than always smelting new ore?", a:"Recycling uses far less energy than reducing ore in a blast furnace, conserves the finite ore reserves, produces less carbon dioxide and slag, and removes waste metal from the environment."},
    {q:"Explain why aluminium is used for cooking pots and window frames despite being reactive.", a:"It forms an immediate thin adherent oxide layer that seals the surface and prevents further attack, so in practice it resists corrosion; it is also light, a good conductor of heat and non-toxic."},
    {q:"A kettle in a limestone area furs up with white scale. Explain and suggest a remedy.", a:"Temporary hardness from calcium hydrogencarbonate decomposes on boiling, depositing insoluble calcium carbonate as scale. It can be removed with a weak acid such as vinegar, and prevented by using softened or filtered water."},
    {q:"Why is carbon monoxide from a charcoal stove indoors so dangerous?", a:"It is colourless and odourless so gives no warning, and it binds to haemoglobin about 200 times more strongly than oxygen, so the blood cannot carry oxygen and the victim loses consciousness without realising the danger."},
    {q:"Liberia exports iron ore but imports steel. Explain the value that could be added locally.", a:"Smelting and alloying the ore into steel domestically would multiply its value several times, create skilled employment and supply local construction, instead of exporting the raw material and buying back the finished product."}
  ],
  activities:[
    "Identify some alloys in your surroundings and state their compositions",
    "Identify some ores in Liberia together with their constituent metals",
    "Field trip to CEMENCO and to a mining company",
    "LAB: perform experiments to demonstrate the extraction of metals from their ores",
    "LAB: prepare and test carbon dioxide, oxygen and hydrogen",
    "Group reports on carbon and its compounds, including allotropes and oxides",
    "Group presentations on the industrial preparation of sulfuric acid",
    "LAB: compare the lathering of hard and soft water and soften a hard sample"
  ],
  materials:[
    "Primary text: Michael C. Cox and John Sadler, Senior Secondary Guide for Liberia — Chemistry (Star Books/Pearson, 2011)",
    "Marble chips, hydrochloric acid, limewater",
    "Gas jars, delivery tubes, thistle funnels and troughs",
    "Samples of alloys, ores and cement",
    "Centrifuge, distilled water and pH paper",
    "Charts of the blast furnace and the contact process"
  ],
  assessment:["Presentation","Written assignment","Quiz","Laboratory report","Field trip report"]
},
{
  grade:12, period:"V", sem:"Two", icon:"📚",
  title:"Review of Fundamental Topics I",
  subtitle:"Consolidating measurement, matter, atomic structure, the periodic table, bonding, stoichiometry, redox and solutions",
  outcomes:[
    "Learners are able to demonstrate the ability to review the fundamental topics of chemistry and to answer WASSCE past paper questions"
  ],
  objectives:[
    "Review units of measurement and the history and importance of chemistry",
    "Review matter and its properties and atomic structure",
    "Review the periodic table and chemical bonding",
    "Review chemical reactions, equations and stoichiometry",
    "Review oxidation-reduction reactions and the states of matter",
    "Review solutions, concentration units and solution stoichiometry",
    "Review acids, bases and salts, volumetric titration, solubility and energetics"
  ],
  note:"This period consolidates Grades 10 and 11 for the <b>WASSCE</b>. Work systematically: identify what each question asks, write the relevant relationship, substitute with units, and check that the answer is reasonable. Marks are awarded for <b>method as well as answer</b>, so always show the working. Practise past questions under timed conditions.",
  study:[
    /* ---- course text: Semester Two, Period V — Review of Fundamental Topics I (guide pp. 58-59) ---- */
    {k:"h3", t:"How to Review for the WASSCE"},
    {k:"p", t:"This period reviews the fundamental topics of Grades 10-12 with **WASSCE past papers**. Work in topic order; for each topic, re-read the notes, then answer five past-paper questions from memory before checking the mark scheme; keep a correction book of every error and its right answer."},
    {k:"rule"},
    {k:"h3", t:"Review List 1 — the Foundations (Grades 10-11)"},
    {k:"num", items:["**Units of measurement** — SI units, conversions, scientific notation, significant figures, precision and accuracy.","**The history and importance of chemistry** — the development of the science, its contributors and branches.","**Matter and its properties** — the states and their changes; physical versus chemical change; the separation techniques.","**The atomic structure** — the fundamental particles, Dalton to Bohr, isotopes, quantum numbers and electron configuration.","**The periodic table and periodic chemistry** — groups, periods, the property trends, and the first transition series.","**Chemical bonding** — ionic, covalent and hydrogen bonding; hybridization; polarity; molecular shapes from Lewis structures.","**Chemical reactions, equations and stoichiometry** — the fundamental laws, the mole in all its conversions, percentage composition, empirical and molecular formulae, and the balancing of equations.","**Oxidation-reduction reactions** — oxidation numbers, agents, and balancing redox in acidic and basic media.","**States of matter** — the kinetic view of solid, liquid and gas.","**Solutions** — the concentration units (molarity, molality, normality, ppm, %), dilution problems, colligative properties and solution stoichiometry."]},
    {k:"h3", t:"Topic 1 — Atomic Structure and the Periodic Table: what to master"},
    {k:"p", t:"Write, from memory: the charges and relative masses of proton, neutron and electron; the four quantum numbers and what each describes; the three filling rules — **Aufbau** (lowest energy first), **Pauli exclusion** (two per orbital, opposite spin), **Hund** (single before paired) — and the configurations of Na, Mg, Al, Si, P, S, Cl, Ar in both orbital and (2, 8, …) shell notation, including the ions Na⁺, Cl⁻, Mg²⁺, O²⁻. Know the **weighted-average** arithmetic of relative atomic mass (the chlorine 35.5 from 75/25 of 35 and 37). On the table itself: locate any element from its structure (period = shells, group = outer electrons); read the five trend arrows (radius, ionization energy, electronegativity, electron affinity, metallic character) **and give the reason for each in one sentence** — same shell, rising nuclear charge across; new shell plus shielding down; the answer the mark scheme looks for is the reason, not the arrow. The families: Group 1 down the reactivity series in water, Group 17 the halogens' displacement ladder, Group 18 the inert full shells, and the transition series' five marks (hard dense metals, magnetism of Fe/Co/Ni, variable oxidation states, coloured compounds, catalysis)."},
    {k:"h3", t:"Topic 2 — Bonding: what to master"},
    {k:"p", t:"The three bond types with their **property signatures** (melting point, conductivity solid vs molten, solubility, malleability) so that a set of observations names the bond; the **Lewis structure steps** — count, skeleton, octets, multiple bonds, check — run clean on CO₂, H₂O, NH₃, CH₄, HCl; **VSEPR** with the five shapes and their angles (180°, 120°, 109.5°, 107°, 104.5°) and the lone-pair closing argument; **hybridization** matched to geometry (sp³ tetrahedral, sp² trigonal, sp linear) with the carbon example; **bond polarity** from the electronegativity difference, and the CO₂-vs-H₂O lesson that cancels dipoles cancel the molecule's; and the three **intermolecular forces** graded in strength, with the boiling-point consequences. If the paper gives properties and asks for the bond, answer with the evidence from the data, not the name alone."},
    {k:"h3", t:"Topic 3 — the Mole and Stoichiometry: what to master"},
    {k:"p", t:"The conversion map, fluently, in every direction: **mass ↔ moles ↔ particles** (÷ M, × M, × 6.02 × 10²³), **moles ↔ gas volume** (22.4 dm³ at STP, ~24 at room), **moles ↔ concentration** (× V in dm³). The three fundamental laws stated with an example each; **percentage composition** forward and the **empirical-then-molecular** formula backward (the divide-by-atomic-mass, reduce, then scale-to-molar-mass sequence); **balancing** with coefficients only, checked against mass conservation; the **limiting reactant** found by dividing each given mass by its formula mass and by its coefficient, the smaller quotient ruling; and **percentage yield** = actual ÷ theoretical × 100. Every calculation shows the equation, the mole ratio, the molar mass used, the unit at every line — the working is half the marks."},
    {k:"h3", t:"Topic 4 — Redox and Electrochemistry: what to master"},
    {k:"p", t:"The **oxidation-number rules** applied to any species in under a minute (the peroxide and hydride exceptions included); **oxidation as loss, reduction as gain**, with the agent named for what it does to its partner; the **half-equation method** in acid (H₂O, H⁺, e⁻) and in base (H₂O, OH⁻, e⁻), electrons equalized before adding, atoms and charge both checked; the **electrochemical series** read top to bottom (more negative = easier to oxidize = better reducing agent); **E°cell = E°cathode − E°anode** with the spontaneity sign; the **cell diagram** notation and the **anode/cathode polarity** in galvanic versus electrolytic cells — the swap that trips the most candidates; **Faraday's arithmetic**: Q = It, moles of electrons = Q ÷ 96 500, mass deposited = moles × M ÷ charge; and the three industrial faces — electroplating (the five steps), copper purification, aluminium extraction."},
    {k:"h3", t:"Topic 5 — Solutions, Acids, Bases and Salts: what to master"},
    {k:"p", t:"All the concentration units converted against one another on the same beaker; **M₁V₁ = M₂V₂** dilution; **pH = −log[H⁺]**, **pH + pOH = 14**, the tenfold-per-unit fact, and the pH of household and biological liquids; **strong versus weak** told by the degree of dissociation, not the concentration; the **Arrhenius** and **Brønsted–Lowry** definitions with the conjugate pairs marked on the equation; **salt hydrolysis** — which salt gives which pH, with the reason from the parent acid and base; the **solubility rules** for the common ions, read off the solubility table; the **solubility curve** read at a temperature, the supersaturated and the crystallization; the **colligative** set (vapour pressure down, boiling up, freezing down, osmotic pressure in) and why the electrolyte multiplies it; **titration** — the apparatus, the endpoint, the concordant titres, and the cₐVₐ calculation through the equation's ratio."},
    {k:"h3", t:"Topic 6 — Gases: what to master"},
    {k:"p", t:"The three laws with the quantity held constant named for each; **P in kelvin for every substitution** (°C + 273) — the single most common mark-leak; the **combined law** and **PV = nRT** with R's units matched; **Dalton** and the gas-collected-over-water correction; **molar mass from PV = nRT**; **Graham's law** (rate ∝ 1/√M) with the ammonia–HCl ring worked; and the **kinetic theory's** five statements each tied to the law it explains. The practical side: the laboratory preparations and tests of the five gases (O₂, H₂, CO₂, NH₃, Cl₂) with the collection method each — upward or downward displacement, or over water — chosen by the density and the solubility."},
    {k:"rule"},
    {k:"h3", t:"Drill the Skills the Paper Tests"},
    {k:"bul", items:["Name and draw the laboratory apparatus; state the safety rules; outline a lab report format","Write and balance equations — including redox half-equations — without hesitating","Do mole, concentration and gas-law calculations showing all working, with units","Draw a periodic trend from data and give its reason","State one laboratory preparation and one test for each gas and each class of compound studied"]},
    {k:"h3", t:"The Mistakes that Cost Marks"},
    {k:"bul", items:[
      "Working the gas law in **celsius** — every temperature enters the equation in kelvin",
      "Swapping the **anode and cathode** between the galvanic and the electrolytic cell — in one the anode is negative, in the other positive",
      "Calling a concentrated weak acid **strong** — concentration and strength are different questions",
      "Balancing by **changing a formula** — coefficients only, or the conservation of mass is broken",
      "Quoting **Mₙ** where the question asks for **molarity**, or mol/dm³ where it asks for moles",
      "Forgetting the **state symbols** where the question requires them, or the **catalyst and conditions** over the equilibrium arrow",
      "Answering the question that was **not asked** — five marks for the preparation, spent on the properties",
      "Leaving the **unit** off a numerical answer, or carrying the wrong power of ten from the scientific notation"
    ]},
    {k:"h3", t:"The Self-Check — ten from memory"},
    {k:"num", items:[
      "The configuration of 17Cl, and the shapes and angles of HCl, CO₂, NH₃ and H₂O from their electron-pair counts",
      "Moles in 36 g of water, molecules in that many moles, and the volume of 2 moles of any gas at STP",
      "The oxidation number of S in SO₄²⁻, of Mn in KMnO₄, and of O in H₂O₂",
      "pH of 0.001 M HCl, and of the solution whose pOH is 3",
      "The three gas laws, the combined equation, and the value of the molar volume at STP",
      "Why ionic compounds conduct molten but not solid, in one sentence each for the charge carrier",
      "The half-equations of the permanganate–iron(II) reaction in acid, balanced in atoms and charge",
      "The products of the Haber and the Contact processes, each with its catalyst and conditions",
      "The solubility rule that makes NaCl soluble but AgCl not, stated with the ions",
      "One laboratory preparation and one test each for O₂, H₂ and CO₂, with the collection method"
    ]},
    {k:"rule"},
    {k:"h3", t:"Revision Practical"},
    {k:"p", t:"In the lab, revise the practical arts — and determine the concentration of an unknown acid by titration against a standard base, indicator to the end-point, calculating with cₐVₐ to show full working. Present your worked answers to past papers in groups; internet research and group presentations support the topics under review."}
  ],

  focus:[
    "Units of measurement; the history and importance of chemistry",
    "Matter and its properties",
    "Atomic structure and the periodic table",
    "Chemical bonding",
    "Chemical reactions, equations and stoichiometry",
    "Oxidation-reduction reactions",
    "States of matter and the gas laws",
    "Solutions: concentration units and solution stoichiometry",
    "Acids, bases and salts; volumetric titration; solubility; energetics"
  ],
  terms:[
    {t:"mole", d:"the amount of substance containing 6.02 × 10^23 particles", x:"The mole links mass to number of particles."},
    {t:"molar mass", d:"the mass of one mole of a substance", x:"Molar mass is found from the formula."},
    {t:"empirical formula", d:"the simplest whole-number ratio of atoms", x:"Percentage composition gives the empirical formula."},
    {t:"limiting reagent", d:"the reactant that is completely used up", x:"The limiting reagent fixes the yield."},
    {t:"percentage yield", d:"actual yield as a percentage of theoretical yield", x:"Percentage yield measures efficiency."},
    {t:"oxidation number", d:"the apparent charge on an atom in a compound", x:"Oxidation numbers identify redox changes."},
    {t:"molarity", d:"moles of solute per cubic decimetre of solution", x:"Molarity is used in titration calculations."},
    {t:"titration", d:"determining concentration by measured reaction", x:"Titration finds an unknown concentration."},
    {t:"pH", d:"the negative logarithm of hydrogen ion concentration", x:"pH measures acidity."},
    {t:"enthalpy change", d:"the heat change at constant pressure", x:"Enthalpy change is negative for exothermic reactions."},
    {t:"ionic bond", d:"electrostatic attraction between oppositely charged ions", x:"Ionic bonding gives high melting points."},
    {t:"covalent bond", d:"a shared pair of electrons between two atoms", x:"Covalent bonding forms molecules."},
    {t:"electronegativity", d:"the tendency of an atom to attract a shared pair", x:"Electronegativity difference predicts bond type."},
    {t:"isotope", d:"atoms of the same element with different neutron numbers", x:"Isotopes have the same chemistry."},
    {t:"ideal gas equation", d:"PV = nRT relating the state variables of a gas", x:"The ideal gas equation gives molar mass."},
    {t:"standard solution", d:"a solution of accurately known concentration", x:"A standard solution is used in titration."},
    {t:"periodic trend", d:"a regular variation of a property across the table", x:"Atomic radius shows a clear periodic trend."},
    {t:"WASSCE", d:"the West African Senior School Certificate Examination", x:"Past WASSCE papers guide revision."}
  ],
  facts:[
    {q:"Convert 250 cm3 to dm3 and state why chemists prefer dm3 in concentration work.", a:"250 cm³ = 0.250 dm³. Molarity is defined as moles per dm³, so working in dm³ avoids a conversion error at the final step."},
    {q:"State the three subatomic particles with their relative charges and masses.", a:"Proton +1 with mass 1, neutron 0 with mass 1, and electron −1 with mass about 1/1840."},
    {q:"State the trend in atomic radius and ionisation energy across a period, with the reason.", a:"Atomic radius decreases and ionisation energy increases, because nuclear charge rises while electrons enter the same shell, so the outer electrons are held more tightly."},
    {q:"State three differences in properties between ionic and covalent compounds.", a:"Ionic compounds have high melting points, conduct when molten or aqueous and are usually water-soluble; simple covalent compounds have low melting points, do not conduct, and are usually insoluble in water."},
    {q:"Write the relationship used to find moles from mass, from concentration, and from gas volume at s.t.p.", a:"moles = mass ÷ molar mass; moles = molarity × volume in dm³; moles = volume in dm³ ÷ 22.4 at s.t.p."},
    {q:"State the rules for assigning oxidation numbers in a compound.", a:"Free elements are 0; a simple ion equals its charge; hydrogen is +1 except −1 in hydrides; oxygen is −2 except −1 in peroxides; and the total is 0 for a neutral compound or the charge for an ion."},
    {q:"Outline the steps in a titration calculation.", a:"Find the moles of the standard solution from concentration × volume; use the mole ratio from the balanced equation to find the moles of the unknown; then divide by the volume of the unknown in dm³ to give its concentration."},
    {q:"State the ideal gas equation and the value of R with its units.", a:"PV = nRT, with R = 8.31 J K⁻¹ mol⁻¹ when P is in pascals and V in cubic metres."},
    {q:"State Hess's law and its practical use.", a:"The total enthalpy change is independent of the route taken. It allows the enthalpy change of a reaction that cannot be measured directly to be calculated from enthalpies of formation or combustion."},
    {q:"List five common examination errors to avoid in chemistry calculations.", a:"Failing to convert cm³ to dm³; using Celsius instead of kelvin in gas laws; using an unbalanced equation for the mole ratio; omitting units from the final answer; and rounding intermediate values too early."}
  ],
  tf:[
    {s:"Temperature must be in kelvin for gas law calculations.", a:"true", why:"The laws express proportionality from absolute zero, so Celsius values give wrong ratios."},
    {s:"The mole ratio for a calculation can be read from an unbalanced equation.", a:"false", why:"Only a balanced equation gives the correct ratio in which substances react."},
    {s:"Molarity is expressed in moles per cubic decimetre.", a:"true", why:"That is the definition, which is why volumes must be converted from cm3."},
    {s:"An exothermic reaction has a positive enthalpy change.", a:"false", why:"Exothermic reactions release heat, so ΔH is negative."},
    {s:"Method marks are awarded even if the final answer is wrong.", a:"true", why:"Examiners credit correct working, so all steps should be shown."},
    {s:"Ionisation energy decreases down a group.", a:"true", why:"The outer electron is further from the nucleus and better shielded."}
  ],
  classify:{ title:"Sort these revision topics", groups:[
    {name:"Physical chemistry", items:["energetics","kinetics","equilibrium","gas laws"]},
    {name:"Inorganic chemistry", items:["periodic table","bonding","acids and bases","metals"]},
    {name:"Calculation types", items:["mole calculations","titration","empirical formula","gas volumes"]},
    {name:"Laboratory skills", items:["titration technique","gas preparation","flame tests","filtration"]}
  ]},
  diagram:{ title:"Choosing the right calculation route", caption:"State the relationship to use for each type of question.", parts:[
    {p:"Given mass, asked moles", f:"moles = mass ÷ molar mass"},
    {p:"Given concentration and volume", f:"moles = molarity × volume in dm3"},
    {p:"Given gas volume at s.t.p.", f:"moles = volume in dm3 ÷ 22.4"},
    {p:"Given P, V and T of a gas", f:"Use PV = nRT with T in kelvin"},
    {p:"Given percentage composition", f:"Divide each percentage by the atomic mass, then take the simplest ratio"},
    {p:"Given titre values", f:"Find moles of standard, apply the mole ratio, then divide by volume"},
    {p:"Given temperature rise", f:"q = mcΔT, then divide by moles for ΔH"}
  ]},
  experiment:{
    title:"Revision practical: determining the concentration of an unknown acid",
    aim:"To determine the concentration of a hydrochloric acid solution by titration against standard sodium hydroxide.",
    materials:["Unknown hydrochloric acid","Standard 0.10 mol/dm3 sodium hydroxide","Burette, pipette and pipette filler","Conical flasks","Phenolphthalein indicator","White tile","Retort stand and clamp","Wash bottle of distilled water"],
    steps:[
      "Rinse the burette with the sodium hydroxide solution and fill it, recording the initial reading to 0.05 cm3.",
      "Rinse the pipette with the acid and transfer 25.0 cm3 of it into a clean conical flask.",
      "Add two drops of phenolphthalein; the solution remains colourless.",
      "Run the alkali in with continuous swirling until a permanent faint pink persists for 30 seconds; record the final reading.",
      "Repeat until two titres agree within 0.10 cm3 and take their mean.",
      "Calculate the moles of alkali used, apply the 1:1 ratio, and find the concentration of the acid."
    ],
    expect:"The first rough titration is followed by concordant results agreeing within 0.10 cm3. If for example the mean titre is 22.50 cm3, the moles of NaOH are 0.10 × 0.02250 = 0.00225 mol. Since HCl and NaOH react 1:1, the acid also contains 0.00225 mol in 25.0 cm3, giving a concentration of 0.00225 ÷ 0.0250 = 0.090 mol/dm3.",
    why:"Titration works because the reaction is rapid, complete and of known stoichiometry, so the volumes at the end point give the mole ratio directly. Phenolphthalein is chosen because its colour change falls within the sharp pH jump for a strong acid and strong alkali. Rinsing each piece of apparatus with the solution it will hold prevents dilution errors, and repeating to concordant titres removes random error — the same discipline the WASSCE practical examination rewards."
  },
  worked:[
    {q:"25.0 cm3 of NaOH needs 20.0 cm3 of 0.10 M HCl. Find the NaOH concentration.", steps:["moles HCl = 0.10 × 0.0200 = 0.00200","1:1 ratio","0.00200 ÷ 0.0250"], a:"0.080 mol/dm³"},
    {q:"Find the mass of 0.25 mol of H2SO4 (H=1, S=32, O=16).", steps:["M = 2 + 32 + 64 = 98","0.25 × 98"], a:"24.5 g"},
    {q:"A gas occupies 250 cm3 at 300 K. Find its volume at 350 K at constant pressure.", steps:["V₂ = V₁T₂/T₁","250 × 350 ÷ 300"], a:"291.7 cm³"},
    {q:"Find the oxidation number of Cl in HClO4.", steps:["H = +1, O = −2 each (−8)","+1 + Cl − 8 = 0"], a:"Cl = +7"},
    {q:"A compound is 52.2% C, 13.0% H, 34.8% O. Find its empirical formula.", steps:["C 52.2/12 = 4.35, H 13.0/1 = 13.0, O 34.8/16 = 2.175","Divide by 2.175 → 2 : 6 : 1"], a:"C₂H₆O"},
    {q:"Find the pH of 0.001 M HCl.", steps:["[H⁺] = 10⁻³","pH = −log(10⁻³)"], a:"pH = 3"},
    {q:"200 g of water rises 5 °C. Find q (c = 4.2 J/g/K).", steps:["q = mcΔT","200 × 4.2 × 5"], a:"4200 J"},
    {q:"How many moles of gas occupy 4.48 dm3 at s.t.p.?", steps:["4.48 ÷ 22.4"], a:"0.2 mol"}
  ],
  apply:[
    {q:"A candidate answers 0.09 without units in a concentration question. What is the likely penalty and the lesson?", a:"A mark is lost for the missing unit even though the number is right. Every physical quantity must carry its unit — mol/dm³ here — because the unit is part of the answer."},
    {q:"In a gas law question a candidate uses 27 instead of 300. Identify the error and its effect.", a:"Celsius was used instead of kelvin. Since the laws are proportional to absolute temperature, the ratio is completely wrong and the whole calculation fails."},
    {q:"Two titres differ by 0.60 cm3. Should the candidate average them? Explain.", a:"No. Titres should be concordant within about 0.10 cm3. The titration must be repeated until two agree closely, and only those concordant values averaged."},
    {q:"Explain how to check quickly whether a calculated answer is reasonable.", a:"Compare the order of magnitude against the data: a concentration of 500 mol/dm³ or a mass of 0.000001 g from ordinary laboratory quantities signals a decimal or conversion error that should be traced."},
    {q:"Why is showing every step of working valuable even when unsure of the final answer?", a:"Marks are allocated to method — the correct relationship, substitution and rearrangement — so a candidate who shows correct working gains most of the credit even if an arithmetic slip spoils the final figure."}
  ],
  activities:[
    "Assignments and exercises related to each topic being reviewed",
    "Work through WASSCE past paper questions under timed conditions",
    "Group work on the fundamental laws, atomic structure and the periodic table",
    "Drill on mole, titration and gas law calculations",
    "LAB: revision practical determining the concentration of an unknown acid",
    "Peer marking of past paper answers against the mark scheme"
  ],
  materials:[
    "Primary text: Michael C. Cox and John Sadler, Senior Secondary Guide for Liberia — Chemistry (Star Books/Pearson, 2011)",
    "WASSCE past papers and mark schemes",
    "Burettes, pipettes and standard solutions",
    "Periodic tables and data booklets",
    "Calculators and graph paper"
  ],
  assessment:["Presentation","Written assignment","Quiz","Practical examination","Past paper practice"]
},
{
  grade:12, period:"VI", sem:"Two", icon:"🎓",
  title:"Review of Fundamental Topics II",
  subtitle:"Consolidating organic chemistry, industry and the environment, metals and non-metals for the WASSCE",
  outcomes:[
    "Learners are able to demonstrate the ability to answer correctly the questions set in the WASSCE Chemistry examination"
  ],
  objectives:[
    "Review the general characteristics and classification of organic compounds",
    "Review homologous series, functional groups and hydrocarbons",
    "Review hydrocarbon derivatives and natural and synthetic organic compounds",
    "Review chemistry, industry and the environment",
    "Review the chemistry of selected metals and their compounds",
    "Review the chemistry of selected non-metals and their compounds",
    "Carry out research and make group presentations on the topics reviewed"
  ],
  note:"This final period consolidates Grade 12. Examination technique matters as much as knowledge: read the <b>command word</b> — <i>state</i> wants a brief fact, <i>explain</i> wants a reason, <i>describe</i> wants a sequence, <i>compare</i> wants both sides. Allocate time by the marks available, answer all parts, and support qualitative answers with an <b>equation or named example</b> wherever possible.",
  study:[
    /* ---- course text: Semester Two, Period VI — Review of Fundamental Topics II (guide pp. 60) ---- */
    {k:"h3", t:"Review List 2 — Organic Chemistry"},
    {k:"p", t:"Continue the review for the **WASSCE Chemistry papers**. For **introduction to organic chemistry**, revise and reproduce from memory:"},
    {k:"num", items:["**General characteristics of organic compounds** — carbon's chains and rings, combustibility, slow reactions.","**Classification of organic compounds** — straight and branched chains, cyclic and acyclic, aromatic.","**Homologous series and functional groups** — general formulae and naming; −OH, −CHO, C=O, −COOH, −COO− at sight.","**Hydrocarbons** — alkanes, alkenes, alkynes: sources, tests (bromine water), and reactions.","**Hydrocarbon derivatives** — alkanols, alkanals, alkanones, ethers, halocarbons, alkanoic acids and esters, with a preparation and a test for each.","**Natural and synthetic organic compounds** — polymerization, addition and condensation polymers, plastics and resins, thermoplastic and thermosetting, and the biochemistry of amino acids, proteins and carbohydrates."]},
    {k:"h3", t:"Organic — the functional groups, at sight"},
    {k:"table", head:["Family","Group","Example to know","The test or the reaction that identifies it"], rows:[
      ["Alkanol (alcohol)","-OH","Ethanol C2H5OH","Sodium: the quiet pop of hydrogen; oxidizes to the alkanal then the acid"],
      ["Alkanal (aldehyde)","-CHO","Ethanal CH3CHO","Fehling's: the brick-red precipitate; Tollens': the silver mirror"],
      ["Alkanone (ketone)","C=O","Propanone (acetone)","The iodoform yellow precipitate for the methyl ketones"],
      ["Alkanoic acid","-COOH","Ethanoic acid","The carbonate: the fizz of CO2; turns blue litmus red"],
      ["Ester","-COO-","Ethyl ethanoate","The sweet fruit smell; the hydrolysis back to acid and alcohol"],
      ["Alkene","C=C","Ethene C2H4","Bromine water: the colour drains; alkaline KMnO4 turns brown"]
    ]},
    {k:"h3", t:"The Reactions the Paper Asks"},
    {k:"num", items:[
      "**The oxidation ladder:** primary alkanol → alkanal → alkanoic acid, with the reagent ([O] — acidified dichromate, orange to green) named at each step; secondary alkanol → alkanone and stops",
      "**Esterification:** acid + alkanol ⇌ ester + water, acid catalyst, reversible — and its reverse, the **hydrolysis**, both directions drawable",
      "**Saponification:** the ester (the oil) + NaOH → the salt of the acid (the soap) + glycerol — the palm-oil soap, written and explained",
      "**Fermentation:** C6H12O6 → 2C2H5OH + 2CO2, the yeast, the anaerobic 30-35 °C, the distillation that follows",
      "**Combustion:** complete to CO2 and H2O, incomplete to CO and soot — balanced for the fuel named, the octane number beside it",
      "**Substitution and addition:** the alkane's chlorine light-substitution against the alkene's bromine addition, the two mechanisms contrasted in one answer",
      "**Cracking:** the long alkane to the short alkane and the alkene, the refinery's reason for the plastics"
    ]},
    {k:"h3", t:"Polymers and Biochemistry — what to master"},
    {k:"p", t:"The monomer-to-polymer pairs with their uses (ethene→polythene, propene→polypropylene, vinyl chloride→PVC, styrene→polystyrene, tetrafluoroethene→Teflon); **addition** (double bond opens, no by-product, composition a multiple of the monomer) against **condensation** (two groups meet, water dropped per link — the nylons, the polyesters, and the proteins); **thermoplastic versus thermosetting** with the cross-link reason and the recycling consequence; the **natural** set (rubber from the latex, starch, protein, cellulose) each with its monomer; **proteins** — the twenty amino acids, the peptide bond as condensation, the denaturation by heat and acid, the biuret and ninhydrin tests; **carbohydrates** — the mono-, di- and polysaccharides with the Benedict's and iodine tests, the hydrolysis down the ladder; **lipids** — the triglyceride as glycerol plus three fatty acids, saturated solid against unsaturated liquid, hydrogenation and saponification."},
    {k:"rule"},
    {k:"h3", t:"Review — Industry, Metals, Non-Metals and the Environment"},
    {k:"bul", items:["**Chemistry, industry and the environment** — heavy and fine chemicals; pollution of air, water and soil; greenhouse effect, acid rain, the ozone layer; biotechnology.","**Selected metals** — sodium, calcium, copper: their named compounds, properties and uses; the metallurgy of Al, Fe, Cu, Au and Sn; alloys and their compositions; cement from limestone and clay.","**Selected non-metals** — carbon (allotropes, the oxides CO and CO₂), nitrogen, oxygen and sulfur: preparation, properties, reactions and uses; coal and coke, with the destructive distillation and gasification products."]},
    {k:"h3", t:"The Four Processes, Memorized"},
    {k:"p", t:"Each in one line, conditions included: **Haber** — N₂ + 3H₂ ⇌ 2NH₃, iron catalyst, 450 °C, 200 atm, the unreacted gases recycled; **Contact** — S → SO₂ → SO₃ over V₂O₅ at 450 °C, absorbed as oleum then diluted to the 98 % acid; **Chlor-alkali** — brine electrolyzed to NaOH at the cathode zone, Cl₂ at the anode, H₂ at the cathode; **Solvay** — brine carbonated with NH₃ and CO₂ to the NaHCO₃, heated to the soda ash, the ammonia looped back. The paper asks for the equation, the conditions and the **reason** for each condition — the pressure for the molecule count, the temperature for the exothermic yield against the rate, the catalyst for the time not the yield — and the Le Chatelier sentence that joins them."},
    {k:"h3", t:"Metallurgy and Alloys — what to master"},
    {k:"p", t:"**Aluminium:** the Bayer digestion of the bauxite to the alumina (the red mud aside), the Hall-Héroult cell in molten cryolite at 950 °C, the cathode reduction Al³⁺ + 3e⁻ → Al, the carbon anodes burning to CO₂, and the recycling figure (about 5 % of the primary energy). **Iron:** the furnace's zone reactions — C + O₂ → CO₂, CO₂ + C → 2CO, Fe₂O₃ + 3CO → 2Fe + 3CO₂, the limestone to the CaSiO₃ slag — the pig iron to the converter to the steel, and the rust's three preventions (galvanize, paint, alloy to stainless). **Copper:** the chalcopyrite, the froth flotation, the roasting, the electrolytic refining with the anode mud's gold and silver. The **reactivity series** in order with the extraction method each position fixes (electrolysis at the top, carbon reduction in the middle, roasting and native at the bottom) and the thermite equation as the visible proof. The **alloys** with compositions and uses — brass, bronze, steel, duralumin, solder — and **cement**: the 80/20 raw mix, the 1 450 °C kiln, the clinker, the 3-5 % gypsum as retarder, the setting as hydration, and the concrete's curing week."},
    {k:"rule"},
    {k:"h3", t:"Examination Technique for WASSCE Chemistry"},
    {k:"bul", items:["Read every question twice; answer what is asked, not what you hoped was asked.","Show every step of every calculation — the method earns the marks.","Write equations balanced, with state symbols where required.","Answer the compulsory practical questions from real laboratory experience — reagent, observation, inference.","Attempt every question set; budget minutes per mark and leave ten to check."]},
    {k:"rule"},
    {k:"h3", t:"Revision Practical and Presentations"},
    {k:"p", t:"Final revision practical: the **qualitative analysis of an unknown salt** — note its colour and solubility, flame it, confirm the cation with sodium hydroxide and the anion with the acid test, then statement of identity with reasons. Carry out internet research and make group presentations on selected topics related to those under review."},
    {k:"h3", t:"The Qualitative Analysis Tables"},
    {k:"p", t:"The **cations**, by flame and by the sodium hydroxide test:"},
    {k:"table", head:["Cation","Flame / colour","With NaOH, then excess"], rows:[
      ["Na+","Lilac (through cobalt glass)","No precipitate"],
      ["K+","Lilac","No precipitate"],
      ["Ca2+","Brick-red","White precipitate, insoluble in excess"],
      ["Ba2+","Apple-green","White precipitate, insoluble in excess"],
      ["Cu2+","Blue solution","Blue precipitate, insoluble in excess"],
      ["Fe2+","Pale-green solution","Green precipitate, turning brown on standing"],
      ["Fe3+","Yellow-brown solution","Reddish-brown precipitate, insoluble in excess; blood-red with thiocyanate"],
      ["Al3+","Colourless","White gelatinous precipitate, soluble in excess"],
      ["Mg2+","Colourless","White precipitate, insoluble in excess"],
      ["Zn2+","Colourless","White precipitate, soluble in excess; also soluble in excess ammonia"],
      ["NH4+","-","Warm with NaOH: pungent gas that turns red litmus blue"]
    ]},
    {k:"p", t:"The **anions**, by the acid and the reagent tests:"},
    {k:"table", head:["Anion","The test","The observation that confirms it"], rows:[
      ["Cl-","AgNO3 with dilute HNO3","White precipitate, soluble in dilute ammonia"],
      ["Br-","AgNO3 with dilute HNO3","Pale-cream precipitate, soluble in concentrated ammonia"],
      ["I-","AgNO3 with dilute HNO3","Yellow precipitate, insoluble in ammonia"],
      ["SO4 2-","BaCl2 with dilute HNO3","White precipitate, insoluble in the acid"],
      ["CO3 2-","Dilute acid","Effervescence; the gas turns limewater milky"],
      ["SO3 2-","Dilute acid","Choking gas that decolorizes acidified permanganate"],
      ["NO3-","FeSO4, NaOH down the side, warm","The brown ring at the junction"]
    ]},
    {k:"p", t:"The **procedure** the mark scheme follows: the observation in full (the colour, the precipitate, the solubility in excess, the gas and its test), then the **conclusion** — the ion named with its symbol — and the **reason**, the equation behind the observation. A salt with a blue colour and a blue precipitate insoluble in excess NaOH is **copper(II)**; the white precipitate that dissolves in excess is the **aluminium or zinc** fork, settled by the ammonia test; the effervescent anion that milks the limewater is the **carbonate**."},
    {k:"h3", t:"A Six-Week Drill Plan"},
    {k:"num", items:[
      "**Week 1** — atomic structure, the periodic table and bonding: the configurations, the trends with reasons, the bond signatures and the VSEPR shapes; five past-paper questions a day on the set",
      "**Week 2** — the mole and all the calculations: stoichiometry, percentage composition, formulae, gas volume, concentration and dilution; every working shown, every unit written",
      "**Week 3** — redox and electrochemistry: the oxidation numbers, the half-equations, the series, the e.m.f. and the Faraday masses; the two industrial cells drawn from memory",
      "**Week 4** — solutions, acids, bases, salts and gases: the pH arithmetic, the salt hydrolysis, the solubility table, the titration, and the five gases' preparations and tests",
      "**Week 5** — organic chemistry, polymers and biochemistry: the functional groups at sight, the reaction map, the monomer-polymer pairs, and the biomolecules with their tests",
      "**Week 6** — industry, metals, non-metals and the environment, then the practicals and the full past papers under timed conditions: the object lesson of the clock, the correction book closed out"
    ]},
  ],

  focus:[
    "General characteristics and classification of organic compounds",
    "Homologous series, functional groups and hydrocarbons",
    "Hydrocarbon derivatives; natural and synthetic organic compounds",
    "Chemistry, industry and the environment",
    "Chemistry of selected metals and their compounds",
    "Chemistry of selected non-metals and their compounds",
    "Examination technique and command words"
  ],
  terms:[
    {t:"homologous series", d:"a family of compounds differing by CH2 with the same functional group", x:"The alkanols form a homologous series."},
    {t:"functional group", d:"the reactive group determining a compound's chemistry", x:"The functional group governs the reactions."},
    {t:"isomerism", d:"same molecular formula, different structural arrangement", x:"Isomerism multiplies the number of compounds."},
    {t:"saturated", d:"containing only single carbon-carbon bonds", x:"Saturated compounds undergo substitution."},
    {t:"unsaturated", d:"containing carbon-carbon multiple bonds", x:"Unsaturated compounds undergo addition."},
    {t:"polymer", d:"a large molecule of many repeating monomer units", x:"Polymers form plastics and fibres."},
    {t:"esterification", d:"acid plus alcohol giving an ester and water", x:"Esterification is reversible."},
    {t:"saponification", d:"alkaline hydrolysis of a fat to give soap", x:"Saponification also yields glycerol."},
    {t:"metallurgy", d:"the extraction and working of metals from ores", x:"Metallurgy depends on the reactivity of the metal."},
    {t:"alloy", d:"a mixture of a metal with other elements", x:"Alloys are harder than pure metals."},
    {t:"allotrope", d:"a different physical form of the same element", x:"Diamond and graphite are allotropes."},
    {t:"pollution", d:"the release of harmful substances into the environment", x:"Industrial pollution must be controlled."},
    {t:"hard water", d:"water containing dissolved calcium and magnesium salts", x:"Hard water wastes soap."},
    {t:"flame test", d:"identifying a metal by its characteristic flame colour", x:"The flame test identifies sodium at once."},
    {t:"command word", d:"the instruction word telling the candidate what is required", x:"The command word explain requires a reason."},
    {t:"WASSCE", d:"the West African Senior School Certificate Examination", x:"WASSCE chemistry has theory and practical papers."}
  ],
  facts:[
    {q:"State four general characteristics of organic compounds.", a:"They are predominantly covalent with low melting and boiling points; generally insoluble in water but soluble in organic solvents; they burn readily; and they exhibit isomerism and often react slowly."},
    {q:"Give the general formulae of the alkanes, alkenes, alkynes and alkanols.", a:"Alkanes CnH2n+2; alkenes CnH2n; alkynes CnH2n−2; alkanols CnH2n+1OH."},
    {q:"State a chemical test to distinguish an alkane from an alkene, and one for an alkanoic acid.", a:"An alkene decolourises bromine water at once while an alkane does not. An alkanoic acid gives effervescence of carbon dioxide with sodium carbonate solution."},
    {q:"Name three natural and three synthetic organic materials.", a:"Natural: cotton, wool, natural rubber and silk. Synthetic: nylon, polyester, polythene and synthetic rubber."},
    {q:"State two effects of industry on the Liberian environment and one control for each.", a:"Mining silt pollutes rivers, controlled by settling ponds and site rehabilitation; factory emissions pollute the air, controlled by filters, scrubbers and enforcement of standards."},
    {q:"Give the flame test colours of sodium, calcium and copper.", a:"Sodium golden yellow, calcium brick-red and copper blue-green."},
    {q:"State the method of extraction for aluminium, iron and gold and give the reason for each.", a:"Aluminium by electrolysis because it is too reactive for carbon reduction; iron by carbon reduction in a blast furnace because it lies lower in the reactivity series; gold by physical separation because it occurs native and is unreactive."},
    {q:"Name three allotropes of carbon and one use of each.", a:"Diamond for cutting and drilling tools; graphite for pencils, electrodes and as a lubricant; charcoal as a fuel and an adsorbent."},
    {q:"State the test for carbon dioxide and the test for oxygen.", a:"Carbon dioxide turns limewater milky; oxygen relights a glowing splint."},
    {q:"Distinguish temporary from permanent hardness and state a removal method for each.", a:"Temporary hardness is due to hydrogencarbonates and is removed by boiling; permanent hardness is due to sulfates and chlorides and needs washing soda, ion exchange or distillation."},
    {q:"Explain what the command words state, explain, describe and compare each require.", a:"State asks for a brief fact with no reasoning; explain asks for the reason or mechanism; describe asks for an account or sequence of what happens; compare asks for both similarities and differences, addressing both items."}
  ],
  tf:[
    {s:"Alkenes decolourise bromine water.", a:"true", why:"Bromine adds across the double bond, discharging the colour."},
    {s:"Nylon is a natural fibre.", a:"false", why:"Nylon is a synthetic condensation polymer."},
    {s:"Gold is extracted by electrolysis of its ore.", a:"false", why:"Gold occurs native and is separated physically because it is unreactive."},
    {s:"Limewater turning milky confirms carbon dioxide.", a:"true", why:"Insoluble calcium carbonate is precipitated."},
    {s:"The command word explain requires only a statement of fact.", a:"false", why:"Explain requires the reason or mechanism, not merely the fact."},
    {s:"Graphite is used as a lubricant because its layers slide over one another.", a:"true", why:"The weak forces between layers allow them to slip easily."}
  ],
  classify:{ title:"Sort these for revision", groups:[
    {name:"Organic families", items:["alkanes","alkenes","alkanols","alkanoic acids"]},
    {name:"Laboratory tests", items:["bromine water for alkenes","limewater for CO2","glowing splint for O2","flame test for metals"]},
    {name:"Extraction methods", items:["electrolysis for aluminium","carbon reduction for iron","physical separation for gold"]},
    {name:"Environmental issues", items:["acid rain","greenhouse effect","ozone depletion","water pollution"]}
  ]},
  diagram:{ title:"Answering an examination question well", caption:"State what each stage of good technique requires.", parts:[
    {p:"Read the command word", f:"Decide whether the question wants a fact, a reason, a sequence or a comparison"},
    {p:"Check the mark allocation", f:"Give roughly one distinct point for each mark available"},
    {p:"Plan a structured answer", f:"Order the points logically before writing, especially for longer questions"},
    {p:"Support with an equation or example", f:"A balanced equation or named substance earns credit and shows understanding"},
    {p:"Show all working in calculations", f:"Method marks are awarded even where the final figure is wrong"},
    {p:"State the unit and significant figures", f:"An answer without its unit is incomplete and loses a mark"},
    {p:"Review at the end", f:"Check that every part has been attempted and every answer is reasonable"}
  ]},
  experiment:{
    title:"Revision practical: qualitative analysis of an unknown salt",
    aim:"To identify the cation and anion present in an unknown salt using standard qualitative tests.",
    materials:["Unknown salt sample","Dilute hydrochloric and nitric acids","Sodium hydroxide solution","Barium chloride and silver nitrate solutions","Limewater","Nichrome wire","Test tubes, rack and Bunsen burner","Distilled water","Safety goggles"],
    steps:[
      "Note the colour and appearance of the solid, then dissolve a little in distilled water.",
      "Carry out a flame test on the solid using a clean nichrome wire and record the colour.",
      "To one portion of the solution add sodium hydroxide drop by drop, then in excess, recording any precipitate and whether it dissolves.",
      "To a fresh portion add dilute hydrochloric acid and test any gas with limewater.",
      "To another portion acidified with hydrochloric acid add barium chloride solution and record any precipitate.",
      "To a final portion acidified with nitric acid add silver nitrate solution and record any precipitate. Draw conclusions from the pattern of results."
    ],
    expect:"The tests together identify the salt. For example a golden yellow flame with no precipitate on adding sodium hydroxide indicates sodium; effervescence with acid giving a gas that turns limewater milky indicates a carbonate; a white precipitate with barium chloride indicates a sulfate; and a white precipitate with silver nitrate indicates a chloride.",
    why:"Each test targets one species by exploiting a specific insolubility or a characteristic emission. The flame colour arises from electron transitions unique to the metal, while the precipitation tests depend on the insolubility of barium sulfate and silver chloride. No single test is conclusive on its own, which is why qualitative analysis proceeds by a systematic sequence and the conclusion rests on the whole pattern of observations — exactly the reasoning the WASSCE practical paper assesses."
  },
  worked:[
    {q:"Give the molecular formula of the alkanol with 4 carbons.", steps:["CnH2n+1OH","n = 4 gives C₄H₉OH"], a:"C₄H₉OH (butanol)"},
    {q:"How many isomers has C₅H₁₂? Name two.", steps:["Straight chain and two branched forms"], a:"3 isomers, e.g. pentane and 2-methylbutane"},
    {q:"Calculate the mass of aluminium in 204 g of Al2O3 (Al = 27, O = 16).", steps:["M = 54 + 48 = 102","moles = 204 ÷ 102 = 2","Al = 4 mol × 27"], a:"108 g"},
    {q:"Write the equation for ethanol reacting with ethanoic acid.", steps:["Acid + alcohol → ester + water"], a:"CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O"},
    {q:"Calculate the percentage of nitrogen in NH4NO3 (N=14, H=1, O=16).", steps:["M = 80, N mass = 28","(28 ÷ 80) × 100"], a:"35%"},
    {q:"How many moles of CO2 form from the complete combustion of 1 mol of propane?", steps:["C₃H₈ + 5O₂ → 3CO₂ + 4H₂O"], a:"3 moles"},
    {q:"A polymer has relative molecular mass 56 000 built from propene (42). Find the number of units.", steps:["56 000 ÷ 42"], a:"about 1333 units"}
  ],
  apply:[
    {q:"A question says 'Compare the properties of diamond and graphite'. What must the answer contain to gain full marks?", a:"Both similarities and differences, each addressing both substances — same element and giant covalent structure, but differing in bonding arrangement, hardness, electrical conductivity and use — with the structural reason given."},
    {q:"A six-mark question asks you to describe the extraction of iron. How should the answer be organised?", a:"As roughly six distinct points in sequence: the raw materials charged, the burning of coke, the formation of carbon monoxide, the reduction of the ore with a balanced equation, the role of limestone in forming slag, and the tapping of molten iron."},
    {q:"Why should a candidate always attempt every part of a structured question?", a:"Each part is marked independently, so marks lost by leaving a part blank cannot be recovered elsewhere, while even a partly correct attempt may earn credit."},
    {q:"In the practical paper a candidate records only conclusions and not observations. Why is this costly?", a:"Marks are awarded separately for accurate observation and for the inference drawn from it; without recorded observations the inference marks usually cannot be awarded either."},
    {q:"How would you revise a topic you consistently find difficult?", a:"Work the past questions on that topic first with the mark scheme visible to learn the expected structure, then attempt fresh questions unaided under timed conditions, and check errors against the notes rather than re-reading passively."}
  ],
  activities:[
    "Carry out research and make group presentations on selected topics being reviewed",
    "Work through WASSCE past paper questions on organic chemistry and industrial chemistry",
    "Drill the standard laboratory tests for gases, cations and anions",
    "LAB: revision practical on the qualitative analysis of an unknown salt",
    "Practise interpreting command words and structuring answers by mark allocation",
    "Peer marking of answers against the official mark scheme"
  ],
  materials:[
    "Primary text: Michael C. Cox and John Sadler, Senior Secondary Guide for Liberia — Chemistry (Star Books/Pearson, 2011)",
    "WASSCE past papers and mark schemes",
    "Reagents for qualitative analysis",
    "Test tubes, racks and Bunsen burners",
    "Charts of organic families and laboratory tests"
  ],
  assessment:["Presentation","Written assignment","Quiz","Practical examination","Past paper practice"]
}

];
