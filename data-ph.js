/* Curriculum data — Republic of Liberia, SENIOR HIGH PHYSICS, Grades 10-12.
   Arranged exactly as the official "Physics 10-12" curriculum guide (25 Jan 2012,
   Ministry of Education / WAEC) numbers it: 3 grades x 6 periods, 18 units,
   Semester One = Periods I-III and Semester Two = Periods IV-VI, the topics
   titled and ordered as the guide lists them:

     Grade 10  I Introduction to Physics and Properties of Matter
               II Velocity and Acceleration        III Work, Energy and Power
               IV Thermal Physics                  V Electrostatics
               VI Properties of Matter
     Grade 11  I Motion in Two Dimensions          II Composition and Resolution of Forces
               III Momentum and its Conservation   IV Heat
               V Waves                             VI Light
     Grade 12  I Refraction and Dispersion of Light II Direct Current Electricity
               III Magnetism and Electro-magnetism IV Alternating Current (AC) and Electronics
               V Atomic and Nuclear Physics        VI High Energy Physics

   Every unit carries a `study[]` block list — the course text of the guide,
   rendered verbatim on the Study Notes page; the comment above each study[]
   list cites the guide pages it draws on. `**bold**` marks the key terms;
   table cells take no markup because the renderer escapes them.

   Uses the same unit shape as SC_CURRICULUM so GEN_SC renders it unchanged:
     grade · period · sem · icon · title · subtitle · outcomes[] · objectives[]
     · note · study[] · focus[] · terms[]{t,d,x} · facts[]{q,a} · tf[]{s,a,why}
     · classify{title,groups} · diagram{title,caption,parts[]{p,f}}
     · experiment{title,aim,materials,steps,expect,why} · worked[]{q,steps,a}
     · apply[]{q,a} · activities[] · materials[] · assessment[]

   Because Physics is calculation-heavy every unit also carries a worked[]
   bank, which GEN_SC renders as the "Calculations & problem solving" sheet.
*/

var PH_CURRICULUM = [

/* ================================ GRADE 10 ================================ */
{
  grade:10, period:"I", sem:"One", icon:"⚛️",
  title:"Introduction to Physics and Properties of Matter",
  subtitle:"What physics is, its branches and careers, the measurement of physical quantities, and pressure in solids, liquids and gases",
  outcomes:[
    "Appreciate the importance of physics in everyday life and of making accurate measurement of physical quantities and their applications in science and technology"
  ],
  objectives:[
    "Discuss the importance of physics", "Identify scalar and vector quantities",
    "Identify basic mathematical concepts: scientific notation and significant figures",
    "Distinguish fundamental from derived physical quantities and their units",
    "Apply dimensional analysis to the relationship between fundamental and derived quantities",
    "Measure with various measuring instruments", "Distinguish density from relative density",
    "Explain pressure in solids, liquids and gases"
  ],
  note:"<b>Physics</b> is the branch of science that studies <b>matter, energy and their interactions</b>. Because its measurements make every science exact, the year's work opens with the <b>measurement of physical quantities</b> — fundamental and derived quantities, SI units, prefixes and the measuring instruments — and with <b>pressure</b> in solids, liquids and gases, from the knife edge to the hydraulic press.",
  study:[
    /* ---- course text: Grade 10, Semester One, Period I — Introduction to Physics and Properties of Matter (guide pp. 1-4) ---- */
    {k:"h3", t:"What Physics Is"},
    {k:"p", t:"**Physics** is the branch of science that studies **matter, energy and their interactions**. The syllabus is designed to give a sound knowledge of the fundamental concepts of physics through a conceptual approach — understanding phenomena, facts, concepts, theories, laws and principles — with ample scope for laboratory and practical work. It underlies every other science and every technology around us: the telephone, the car, the hospital scanner and the power line all answer to physics. Drumming, a thrown stone, a lightning strike — each is matter moving because energy moved."},
    {k:"rule"},
    {k:"h3", t:"The Branches of Physics"},
    {k:"bul", items:[
      "**Mechanics** — motion, forces, work and energy",
      "**Heat (thermal physics)** — temperature, expansion and the behaviour of gases",
      "**Waves, sound and optics** — vibrations, sound and light",
      "**Electricity and magnetism** — charges, currents, circuits, motors and generators",
      "**Atomic and nuclear physics** — the atom, radioactivity and the nucleus"
    ]},
    {k:"rule"},
    {k:"h3", t:"Great Physicists and their Contributions"},
    {k:"p", t:"**Galileo** gave us the experimental method, the telescope and the laws of motion; **Newton** — the three laws of motion and universal gravitation; **Maxwell** — the theory that unites electricity, magnetism and light; the **Curies** — the study of radioactivity; **Einstein** — relativity and the equation E = mc². Physics has a special relationship with the other sciences: it supplies their foundations, and its measurements make them exact. With the other natural sciences it drives technology and national development."},
    {k:"rule"},
    {k:"h3", t:"Careers that Use Physics"},
    {k:"p", t:"Appreciate the importance of physics in everyday life and in careers: **engineering** (civil, electrical, mechanical), **medicine** (X-rays, scanners, radiotherapy), **teaching and research**, **energy** (power plants, solar installations), and **transport** (vehicle design, aviation, shipping). In each, accurate measurement of physical quantities is the daily bread — which is why the measurement of physical quantities leads the year's work."},
    {k:"h3", t:"Fundamental Quantities and Derived Quantities"},
    {k:"p", t:"A **physical quantity** is anything measured by a number and a unit. Distinguish **fundamental quantities** from **derived quantities**: the SI system of measurement rests on seven base quantities — length (**metre, m**), mass (**kilogram, kg**), time (**second, s**), electric current (**ampere, A**), temperature (**kelvin, K**), amount of substance (**mole, mol**) and luminous intensity (**candela, cd**) — and every other unit is **derived** by combination: area (m²), volume (m³), density (**kg/m³** — distinguish density from **relative density**, the pure ratio to the density of water), speed (m/s), acceleration (m/s²), force (**newton, N**) and pressure (**pascal, Pa**)."},
    {k:"rule"},
    {k:"h3", t:"Metric Prefixes, Conversion and Scientific Notation"},
    {k:"p", t:"The **metric prefixes** scale any unit — kilo (×1000), centi (×1/100), milli (×1/1000) — so convert units before calculating. Write very large and very small measures in **scientific notation** (a number between 1 and 10 times a power of ten: 0.00562 = 5.62×10⁻³) and report every result to the correct **number of significant figures** — the digits that carry news, never more than the measurement itself knows. Do the exercises in the calculation and deriving of units."},
    {k:"rule"},
    {k:"h3", t:"Accuracy, Precision and Errors"},
    {k:"p", t:"**Accuracy** is nearness to the true value; **precision** is the agreement of repeated readings and the fineness of the scale. The **errors in measurement**: the **parallax error** of reading a pointer from the side (read at eye level), the **zero error** of an instrument that does not read zero, and the **random errors** of fluctuating readings — reduced by repeating the measurement and averaging."},
    {k:"rule"},
    {k:"h3", t:"Dimensional Analysis"},
    {k:"p", t:"**Dimensional analysis** checks a formula by its units: work in the base dimensions of mass M, length L, time T — force is MLT⁻², and a correct equation must carry the same dimensions on both sides. Analyze dimensional analysis in terms of the relationship between fundamental and derived quantities."},
    {k:"rule"},
    {k:"h3", t:"Measuring Instruments and the Measurement of Pressure"},
    {k:"p", t:"**Measure with the various measuring instruments:** length with the **meter rule**, the **vernier caliper** (jaws and slide — to a tenth of a millimetre) and the **micrometer screw gauge** (to a hundredth); mass with the **beam balance** and **electronic balance**; weight and force with the **spring balance**; time with the **stop watch**; temperature with the **thermometer**. In the laboratory find the density of a regular and an irregular solid with balance, graduated cylinder and **density bottle**, and read a liquid's specific gravity with a **hydrometer**. And **pressure** — force per unit area, P = F/A — works differently in the three states: transmitted from solids at the contact alone, acting equally in all directions within a **liquid** (increasing with depth), and filling its whole container in a **gas**."},
    {k:"h3", t:"Pressure — in Solids, Liquids and Gases"},
    {k:"p", t:"**Pressure** is force per unit area: **P = F/A**, in pascals (Pa) — 1 Pa = 1 N/m². A sharp cutlass cuts because the small area makes the pressure great; the tractor's broad tyres press softly and so do not sink. Compare the behaviour: a **solid** passes pressure on only at its contacts; a **liquid at rest** presses equally in all directions, and a **gas** presses everywhere on its container's walls."},
    {k:"rule"},
    {k:"h3", t:"Pressure in a Liquid"},
    {k:"p", t:"The pressure in a liquid increases with **depth** and with the liquid's **density**: at depth h, **P = ρgh** (h in metres) — independent of the vessel's shape, which is why the dam's wall is thickest at its foot, and why the deep well's water bears more than the pan's. Liquids find their own level and transmit pressure undiminished — **Pascal's principle** — so a small force on a small piston becomes a great force on a large one: the **hydraulic press**, the brake pedal and the jack, where F₂/F₁ = A₂/A₁."},
    {k:"rule"},
    {k:"h3", t:"Density, Upthrust, Archimedes and Flotation"},
    {k:"p", t:"**Density** ρ = m/V (kg/m³) — distinguish it from **relative density** (density ÷ density of water, a pure number), measured with the **density bottle** or the **hydrometer**. A body immersed in a fluid feels an **upthrust**: **Archimedes' principle** says the upthrust equals the weight of the fluid displaced — verified in the laboratory by weighing a body in air, then in water. The **law of flotation** follows: a floating body displaces its own weight of fluid — so the iron ship rides the sea, its average density below water's; the hydrometer sinks to its mark; the drowned stone, denser than water, stays down."},
    {k:"rule"},
    {k:"h3", t:"Gas Pressure and its Measurement"},
    {k:"p", t:"The atmosphere itself presses on us: measure it with the **barometer** — mercury filling an inverted tube standing at **76 cm (760 mmHg)** at sea level, falling as one climbs a hill; the **manometer** gauges the excess pressure of a trapped gas. The **aneroid barometer** (a sealed thin box with a pointer) is the portable form and the base of the altimeter."},
    {k:"rule"},
    {k:"h3", t:"Bernoulli's Principle and Applications"},
    {k:"p", t:"**Bernoulli's principle:** where a fluid flows faster, its pressure falls. It lifts the aeroplane wing (fast air over the curved top, slow beneath), draws the spray from the scent-atomizer, and makes two racing cars suck together. Applications in the house and on the road: the Bunsen burner's air hole, the filter pump."},
  ],

  focus:[
    "Meaning, branches and careers of physics",
    "Fundamental and derived quantities and their SI units",
    "Metric prefixes, scientific notation and significant figures",
    "Accuracy, precision and errors in measurement",
    "Measuring instruments: rule, vernier, micrometer, balance, stopwatch, thermometer",
    "Density and relative density", "Pressure in solids, liquids and gases; P = ρgh",
    "Archimedes' and Pascal's principles; the barometer and manometer"
  ],
  terms:[
    {t:"physics", d:"the science that studies matter, energy and their interactions", x:"Physics explains how a ball falls to the ground."},
    {t:"matter", d:"anything that has mass and occupies space", x:"Air, water and iron are all matter."},
    {t:"energy", d:"the ability to do work or cause a change", x:"A moving car has kinetic energy."},
    {t:"force", d:"a push or pull that can change the motion of an object", x:"A force is needed to open a door."},
    {t:"scientific method", d:"the ordered way of investigation used in science", x:"The scientific method begins with observation."},
    {t:"hypothesis", d:"a testable proposed explanation for an observation", x:"A good hypothesis can be tested by experiment."},
    {t:"technology", d:"the practical application of scientific knowledge", x:"Physics drives much of modern technology."},
    {t:"career", d:"a profession or field of work", x:"Engineering is a career that needs physics."},
    {t:"physical quantity", d:"anything that can be measured and expressed in numbers with a unit", x:"Length is a physical quantity."},
    {t:"fundamental quantity", d:"a basic quantity not derived from others", x:"Mass, length and time are fundamental."},
    {t:"derived quantity", d:"a quantity formed by combining fundamental quantities", x:"Speed is a derived quantity."},
    {t:"SI unit", d:"the standard international unit of measurement", x:"The SI unit of length is the metre."},
    {t:"metre", d:"the SI base unit of length", x:"A metre is slightly longer than a yard."},
    {t:"kilogram", d:"the SI base unit of mass", x:"Mass is measured in kilograms."},
    {t:"second", d:"the SI base unit of time", x:"Time is measured in seconds."},
    {t:"density", d:"mass per unit volume of a substance", x:"Density = mass ÷ volume."},
    {t:"accuracy", d:"how close a measurement is to the true value", x:"A correct scale gives accuracy."},
    {t:"precision", d:"how close repeated measurements are to one another", x:"Precision is about consistency."},
    {t:"parallax error", d:"reading a scale with the eye not directly over the mark", x:"Look straight at the scale to avoid parallax."},
    {t:"zero error", d:"a systematic error because an instrument does not read zero when it should", x:"A micrometer with zero error gives wrong readings."},
    {t:"pressure", d:"force acting normally per unit area, P = F/A", x:"Pressure is measured in pascals."},
    {t:"pascal", d:"the unit of pressure, one newton per square metre", x:"1 Pa = 1 N/m²."},
    {t:"upthrust", d:"the upward force on a body in a fluid", x:"Upthrust makes an object float."},
    {t:"Archimedes' principle", d:"the upthrust on a body equals the weight of fluid displaced", x:"Archimedes' principle explains floating."},
    {t:"Pascal's principle", d:"pressure applied to an enclosed fluid is transmitted equally in all directions", x:"The hydraulic press uses Pascal's principle."},
    {t:"barometer", d:"an instrument that measures atmospheric pressure", x:"A mercury barometer measures the atmosphere."},
    {t:"manometer", d:"a U-shaped tube used to measure gas pressure", x:"A manometer compares two pressures."},
    {t:"Bernoulli's principle", d:"the pressure in a moving fluid is lower where it moves faster", x:"Bernoulli's principle helps aeroplane wings lift."},
    {t:"atmospheric pressure", d:"the pressure exerted by the weight of the air", x:"Atmospheric pressure is about 101 kPa at sea level."},
    {t:"hydraulic press", d:"a machine using Pascal's principle to multiply force", x:"A hydraulic press lifts a heavy car."},
  ],
  facts:[
    {q:"Define physics and name three of its branches.", a:"Physics is the science of matter, energy and their interactions. Its branches include mechanics, heat (thermodynamics), light (optics), sound (acoustics), electricity and magnetism, and atomic and nuclear physics."},
    {q:"State one major contribution each of Galileo and Newton.", a:"Galileo studied falling bodies and built the telescope for astronomy; Newton formulated the three laws of motion and the law of universal gravitation."},
    {q:"Name four careers that depend on physics.", a:"Engineering, medicine (X-rays and radiotherapy), architecture and building, meteorology, and the energy and transport industries are examples."},
    {q:"State the SI base units for length, mass, time, temperature and electric current.", a:"Metre (m), kilogram (kg), second (s), kelvin (K) and ampere (A)."},
    {q:"Show how the unit of speed is derived from length and time.", a:"Speed = length ÷ time, so its unit is m/s (metre per second)."},
    {q:"Define density and state its unit.", a:"Density is mass per unit volume; its unit is kg/m³ (or g/cm³)."},
    {q:"What is the difference between accuracy and precision?", a:"Accuracy is how close a result is to the true value; precision is how close repeated measurements are to one another. Readings can be precise yet inaccurate if the instrument is wrongly calibrated."},
    {q:"Define pressure and state its unit.", a:"Pressure is the force acting normally per unit area; P = F/A, measured in pascals (Pa), where 1 Pa = 1 N/m²."},
    {q:"Write the formula for pressure in a liquid and explain its terms.", a:"P = ρgh, where ρ is the density of the liquid, g the gravitational field strength and h the depth below the surface."},
    {q:"State Archimedes' principle.", a:"When a body is immersed in a fluid, it experiences an upthrust equal to the weight of the fluid it displaces."},
    {q:"State Pascal's principle and name one device that uses it.", a:"Pressure applied to an enclosed fluid is transmitted equally in all directions; it is used in the hydraulic press and hydraulic brakes."},
  ],
  tf:[
    {s:"Physics is the science of matter, energy and their interactions.", a:"true", why:"That is the standard definition of physics."},
    {s:"Isaac Newton discovered the theory of relativity.", a:"false", why:"Relativity was developed by Albert Einstein; Newton gave the laws of motion and gravitation."},
    {s:"Mass is a derived quantity.", a:"false", why:"Mass is one of the fundamental quantities; speed and density are derived."},
    {s:"The SI unit of time is the second.", a:"true", why:"The second is the SI base unit of time."},
    {s:"Parallax error is a type of systematic error.", a:"false", why:"Parallax is usually a random or blunder error caused by eye position; zero error is the systematic type."},
    {s:"Pressure is force multiplied by area.", a:"false", why:"Pressure is force divided by area, P = F/A."},
    {s:"Pressure in a liquid increases with depth.", a:"true", why:"The weight of liquid above adds force as depth increases."},
    {s:"Pascal's principle is the basis of the hydraulic press.", a:"true", why:"Equal transmission of pressure lets a small force lift a heavy load."},
  ],
  classify:{ title:"Sort these quantities and units", groups:[
    {name:"Fundamental quantities", items:[
      "length", "mass", "time", "electric current"
    ]},
    {name:"Derived quantities", items:[
      "speed", "density", "force", "pressure", "volume"
    ]},
    {name:"SI base units", items:[
      "metre", "kilogram", "second", "kelvin", "ampere"
    ]},
    {name:"Instruments", items:[
      "ruler", "vernier calliper", "micrometer screw gauge", "measuring cylinder"
    ]},
  ]},
  diagram:{ title:"Reading a measuring cylinder", caption:"State what each part is for.", parts:[
    {p:"Scale in cm³ / mL", f:"Used to read the volume of the liquid"},
    {p:"Meniscus", f:"The curved liquid surface; read at its lowest point"},
    {p:"Glass body", f:"Holds the liquid whose volume is measured"},
    {p:"Base", f:"Stands the cylinder firmly on the bench"},
    {p:"Spout", f:"Allows the liquid to be poured out easily"},
  ]},
  experiment:{
    title:"Finding the density of a regular solid",
    aim:"To measure the mass and volume of a regular block and calculate its density.",
    materials:[
      "A rectangular block of wood or metal", "A ruler", "A balance",
      "A measuring cylinder (for an irregular solid)"
    ],
    steps:[
      "Measure the length, breadth and height of the block with a ruler and record each in metres.",
      "Calculate the volume = length × breadth × height.",
      "Find the mass of the block using the balance and record it in kilograms.",
      "Divide the mass by the volume to find the density.",
      "Repeat twice and average the results.",
    ],
    expect:"The density is the mass divided by the volume. For a wooden block it should be less than that of water (about 700–900 kg/m³) so the block floats; a metal block gives a much higher value.",
    why:"This experiment applies the definition density = mass ÷ volume using real measurements. Averaging repeated readings improves accuracy, and the result is expressed in the SI unit kg/m³, exactly the skill the unit teaches."
  },
  worked:[
    {q:"Convert 5 km to metres.", steps:[
      "1 km = 1000 m", "5 × 1000"
    ], a:"5000 m"},
    {q:"A block measures 0.2 m × 0.1 m × 0.05 m and has a mass of 0.8 kg. Find its volume and density.", steps:[
      "Volume = 0.2 × 0.1 × 0.05 = 0.001 m³", "Density = mass ÷ volume = 0.8 ÷ 0.001"
    ], a:"0.001 m³ and 800 kg/m³"},
    {q:"A car travels 150 m in 10 s. Calculate its average speed in m/s.", steps:[
      "Speed = distance ÷ time", "150 ÷ 10"
    ], a:"15 m/s"},
    {q:"A force of 100 N acts on an area of 2 m². Find the pressure.", steps:[
      "P = F ÷ A", "100 ÷ 2"
    ], a:"50 Pa"},
    {q:"Find the pressure at a depth of 2 m in water (ρ = 1000 kg/m³, g = 10 m/s²).", steps:[
      "P = ρgh", "1000 × 10 × 2"
    ], a:"20 000 Pa"},
    {q:"A hydraulic press has a small piston of area 0.02 m² and a large piston of area 0.2 m². A force of 50 N is applied to the small piston. Find the force on the large piston.", steps:[
      "Pressure transmitted equally: F₁/A₁ = F₂/A₂", "50/0.02 = F₂/0.2", "F₂ = 50 × 0.2 ÷ 0.02"
    ], a:"500 N"},
  ],
  apply:[
    {q:"Why does a doctor need to understand physics even though a doctor is not called a physicist?", a:"Medical imaging, X-rays, ultrasound and radiotherapy all work on physical principles; understanding them helps a doctor use the equipment safely and correctly."},
    {q:"A micrometer screw gauge reads 4.00 mm when fully closed. What is its zero error and what should you do?", a:"It has a zero error of +0.00... actually it is +0.00 if it reads correctly; if it read 0.02 mm the error would be subtracted from all readings. Here it reads correctly at zero, so no correction is needed."},
    {q:"Why are dams built much thicker at the bottom than at the top?", a:"Pressure in the water increases with depth, so the lower walls must be stronger to withstand the greater pressure."},
    {q:"Why does a ship made of steel float while a steel nail sinks?", a:"The ship's hollow shape displaces a large volume of water whose weight equals the ship's weight (Archimedes' principle); the nail displaces too little water to balance its weight."},
  ],
  activities:[
    "Discuss the branches of physics and the careers that use them",
    "Measure lengths, masses and times with the rule, balance and stopwatch, and estimate the errors",
    "Find the density of a regular solid and of a liquid",
    "Demonstrate pressure in solids, liquids and gases with simple apparatus",
    "Verify Archimedes' principle with a displacement can (eureka can) and a spring balance",
    "Plot the field of pressure: measure water pressure at different depths with a manometer"
  ],
  materials:[
    "Metre rules, vernier calipers and micrometer screw gauges",
    "Beam balances, spring balances and stopwatches",
    "Measuring cylinders, beakers and density bottles",
    "Manometers, barometers and displacement cans"
  ],
  assessment:[
    "Practical work", "Written test", "Measurement exercises", "Problem solving", "Class quiz"
  ]
},
{
  grade:10, period:"II", sem:"One", icon:"🚀",
  title:"Velocity and Acceleration",
  subtitle:"Distance, displacement, speed, velocity and acceleration; the equations and graphs of uniformly accelerated motion, free fall, and Newton's laws with universal gravitation",
  outcomes:[
    "Recognize the various types of motion, their applications, and the various forms in which forces affect the state of a body"
  ],
  objectives:[
    "Analyze uniformly accelerated motion",
    "Apply the basic equations of motion and interpret the motion graphs",
    "Use Newton's laws of motion and analyze the effect of gravity on falling bodies",
    "Discuss the force of gravitation between objects"
  ],
  note:"<b>Speed</b> is distance ÷ time (a scalar); <b>velocity</b> is displacement ÷ time (a vector); <b>acceleration</b> is the rate of change of velocity. The <b>equations of motion</b> for constant acceleration are <b>v = u + at</b>, <b>s = ut + ½at²</b> and <b>v² = u² + 2as</b>. <b>Newton's laws</b> describe inertia, F = ma, and action and reaction, and his <b>law of universal gravitation</b> F = Gm₁m₂/r² holds the Moon in orbit and drops the mango.",
  study:[
    /* ---- course text: Grade 10, Semester One, Period II — Velocity and Acceleration (guide pp. 4-5) ---- */
    {k:"h3", t:"The Elements of Motion"},
    {k:"p", t:"Distinguish the elements of motion: **distance** (the length travelled, a scalar) from **displacement** (distance with direction, a vector); **speed** = distance ÷ time from **velocity** = displacement ÷ time (with direction); **acceleration** = change of velocity ÷ time, in m/s² — negative acceleration decelerates. Uniform velocity covers equal displacements in equal times; uniform acceleration changes velocity equally in equal times."},
    {k:"rule"},
    {k:"h3", t:"Equations and Graphs of Uniformly Accelerated Motion"},
    {k:"p", t:"For uniform acceleration the **equations of uniform linear motion:** v = u + at; s = ut + ½at²; v² = u² + 2as (u initial, v final velocity, s displacement, t time). Analyze motion by **graphical analysis on standard graph sheets:** the **position/displacement-time graph** slopes for velocity — curving upward when accelerating; the **velocity-time graph** slopes for acceleration, and its **area** gives the displacement. Interpret and construct both in the graph exercises."},
    {k:"rule"},
    {k:"h3", t:"Freely Falling Bodies"},
    {k:"p", t:"Near the Earth every falling body accelerates at **g ≈ 9.8 m/s² (use 10 m/s²)** downward whatever its mass — air resistance aside, the stone and the feather fall together (as in the evacuated tube). Apply the equations of motion with a = g; a body thrown up slows at −10 m/s² to rest, then returns symmetrically. In the lab, measure the acceleration of a trolley on an inclined plane with ticker-timer or stopwatch."},
    {k:"rule"},
    {k:"h3", t:"Newton's Laws of Motion and Universal Gravitation"},
    {k:"p", t:"**First law** (inertia): a body stays at rest or in uniform motion in a straight line unless a resultant force acts on it. **Second law:** the rate of change of momentum is proportional to the applied force — **F = ma** (newton: the force giving 1 kg an acceleration of 1 m/s²); solve the problems for mass, force and acceleration together. **Third law:** to every action there is an equal and opposite reaction — the launcher pushes the rocket's gas back, and the gas pushes the rocket on. **Newton's law of universal gravitation:** every mass attracts every other mass, F = Gm₁m₂/r² — gravity quiets the moon into orbit and drops the mango."},
    {k:"rule"},
  ],

  focus:[
    "Distance, displacement, speed, velocity and acceleration",
    "Uniformly accelerated motion and the equations of uniform linear motion",
    "Position–time and velocity–time graphs on standard graph sheets",
    "Freely falling bodies and the acceleration due to gravity",
    "Newton's three laws of motion", "Newton's law of universal gravitation"
  ],
  terms:[
    {t:"speed", d:"the rate of change of distance, a scalar", x:"Speed = distance ÷ time."},
    {t:"velocity", d:"speed in a stated direction, a vector", x:"Velocity is displacement ÷ time."},
    {t:"acceleration", d:"the rate of change of velocity", x:"Acceleration is measured in m/s²."},
    {t:"displacement", d:"distance in a stated direction", x:"Displacement is a vector."},
    {t:"inertia", d:"the tendency of a body to resist a change in its motion", x:"Inertia keeps a bus passenger moving forward."},
    {t:"mass", d:"the amount of matter in a body", x:"Mass is a scalar measured in kilograms."},
    {t:"weight", d:"the gravitational force on a body, W = mg", x:"Weight is a force measured in newtons."},
  ],
  facts:[
    {q:"Distinguish speed from velocity.", a:"Speed is the rate of change of distance and has magnitude only; velocity is the rate of change of displacement and includes direction, making it a vector."},
    {q:"Write the three equations of motion for constant acceleration.", a:"v = u + at; s = ut + ½at²; v² = u² + 2as, where u is initial velocity, v final velocity, a acceleration, t time and s displacement."},
    {q:"State Newton's three laws of motion.", a:"(1) A body remains at rest or in uniform motion unless acted on by a resultant force; (2) F = ma, the acceleration is proportional to the force and inversely proportional to the mass; (3) to every action there is an equal and opposite reaction."},
    {q:"A car accelerates from rest at 2 m/s² for 5 s. Find its final velocity.", a:"v = u + at = 0 + 2 × 5 = 10 m/s."},
    {q:"In free fall, which reaches the ground first — a heavy stone or a light one (air resistance neglected)?", a:"They reach the ground together, because the acceleration due to gravity g ≈ 9.8 m/s² is the same for every body whatever its mass."},
    {q:"State Newton's law of universal gravitation.", a:"Every mass attracts every other mass with a force proportional to the product of the masses and inversely proportional to the square of the distance between them: F = Gm₁m₂/r²."},
  ],
  tf:[
    {s:"Velocity is a scalar quantity.", a:"false", why:"Velocity includes direction, so it is a vector; speed is the scalar."},
    {s:"Newton's first law concerns inertia.", a:"true", why:"A body at rest or in uniform motion stays that way unless a resultant force acts — the law of inertia."},
    {s:"Weight and mass are the same thing.", a:"false", why:"Mass is the amount of matter; weight is the gravitational force W = mg."},
    {s:"The acceleration of a body is proportional to the resultant force on it.", a:"true", why:"That is Newton's second law, a ∝ F."},
    {s:"A feather and a stone fall together in a vacuum.", a:"true", why:"Without air resistance every body falls with the same acceleration g, as the evacuated-tube experiment shows."},
  ],
  classify:{ title:"Sort these quantities and statements", groups:[
    {name:"Scalar quantities", items:[
      "speed", "distance", "mass", "time"
    ]},
    {name:"Vector quantities", items:[
      "velocity", "displacement", "acceleration", "momentum", "force"
    ]},
    {name:"Newton's laws", items:[
      "law of inertia", "F = ma", "action and reaction"
    ]},
    {name:"Graphs of motion", items:[
      "gradient of a velocity–time graph gives acceleration",
      "area under a velocity–time graph gives distance",
      "a straight position–time line means constant velocity"
    ]},
  ]},
  diagram:{ title:"Velocity–time graph for acceleration", caption:"State what each part shows.", parts:[
    {p:"Gradient (slope)", f:"Gives the acceleration"},
    {p:"Area under the graph", f:"Gives the distance travelled"},
    {p:"Initial velocity u", f:"Velocity at time zero"},
    {p:"Final velocity v", f:"Velocity at the end of the time"},
    {p:"Horizontal section", f:"Constant velocity (zero acceleration)"},
  ]},
  experiment:{
    title:"Measuring acceleration on an inclined plane",
    aim:"To measure the acceleration of a trolley rolling down a slope.",
    materials:[
      "A trolley", "A ramp or plank", "A stopwatch", "A metre rule", "Markers"
    ],
    steps:[
      "Set the ramp at a steady slope and mark the starting point.",
      "Release the trolley from rest and time how long it takes to reach a fixed distance down the ramp.",
      "Repeat three times and average the time.",
      "Use s = ½at² to calculate the acceleration from the distance and the average time.",
      "Change the slope and repeat to compare accelerations.",
    ],
    expect:"The steeper the slope, the greater the acceleration. Using s = ½at², the acceleration is found from a = 2s ÷ t² for a trolley starting from rest.",
    why:"Starting from rest (u = 0), the equation s = ut + ½at² simplifies to s = ½at². Measuring the distance and time lets the acceleration be found, applying the equations of motion directly."
  },
  worked:[
    {q:"A car accelerates from 5 m/s to 15 m/s in 4 s. Find its acceleration.", steps:[
      "a = (v − u) ÷ t", "(15 − 5) ÷ 4"
    ], a:"2.5 m/s²"},
    {q:"A ball is dropped from rest and falls for 3 s. Find its velocity (g = 10 m/s²).", steps:[
      "v = u + at", "0 + 10 × 3"
    ], a:"30 m/s"},
    {q:"Find the distance travelled by a car accelerating from rest at 2 m/s² for 5 s.", steps:[
      "s = ut + ½at²", "0 + ½ × 2 × 25"
    ], a:"25 m"},
    {q:"What force gives a 2 kg mass an acceleration of 4 m/s²?", steps:[
      "F = ma", "2 × 4"
    ], a:"8 N"},
  ],
  apply:[
    {q:"Why does a bus passenger lurch forward when the bus stops suddenly?", a:"The passenger's body continues forward by inertia (Newton's first law) because it keeps its motion unless a force acts."},
    {q:"A passenger on a smoothly moving bus tosses a coin straight up. Why does the coin fall back into his hand?", a:"The coin keeps the forward velocity of the bus (Newton's first law), moving horizontally with the passenger while it rises and falls, so it lands where it left his hand."},
    {q:"Why is a heavy load carried on the head said to make a person walk more carefully?", a:"The load raises the person's centre of gravity; by inertia the combined body resists changes of motion more, so a sudden change of pace is harder to control — hence the careful, steady steps."},
  ],
  activities:[
    "Measure acceleration down a ramp with a trolley and stopwatch",
    "Plot and interpret position–time and velocity–time graphs on graph sheets",
    "Demonstrate motion of freely falling bodies due to gravity",
    "Demonstrate Newton's third law by hammering nails or with two spring trolleys",
    "Solve problems on the equations of motion in groups"
  ],
  materials:[
    "Trolleys, ramps (inclined planes), stopwatches and metre rules",
    "Ticker timers or motion sensors if available", "Standard graph sheets and calculators",
    "Falling bodies: stones, sheets of paper and a vacuum tube if available"
  ],
  assessment:[
    "Practical work", "Written test", "Graph work", "Problem solving", "Class quiz"
  ]
},
{
  grade:10, period:"III", sem:"One", icon:"⚙️",
  title:"Work, Energy and Power",
  subtitle:"Work, kinetic and potential energy, the conservation of energy, power, and simple machines with moments, mechanical advantage, velocity ratio and efficiency",
  outcomes:[
    "Appreciate the works of machines in life and the interrelationship between matter and energy, work and energy, and work/energy and power, and do simple calculations on work, energy and power"
  ],
  objectives:[
    "Identify the characteristics of work, energy and power and their SI units",
    "Solve simple problems involving work, energy (potential and kinetic) and power",
    "Distinguish the types of simple machines",
    "Distinguish between work input and work output",
    "Compute potential and kinetic energy problems",
    "Demonstrate the law of conservation of mechanical energy and its application",
    "Apply the principle of moments and the machine equations MA, VR and efficiency"
  ],
  note:"<b>Work</b> is done when a force moves its point of application: <b>W = F × s</b>, in joules. <b>Energy</b> is the capacity to do work — <b>kinetic</b> (KE = ½mv²) and <b>potential</b> (PE = mgh) — and the <b>principle of conservation of energy</b> turns one into the other without loss. <b>Power</b> is the rate of doing work, in watts. A machine's <b>mechanical advantage MA = load ÷ effort</b>, <b>velocity ratio VR = effort distance ÷ load distance</b> and <b>efficiency = (MA ÷ VR) × 100%</b>, with the lever, pulley and inclined plane ruled by the <b>principle of moments</b>.",
  study:[
    /* ---- course text: Grade 10, Semester One, Period III — Work, Energy and Power (guide pp. 6-8) ---- */
    {k:"h3", t:"Work"},
    {k:"p", t:"**Work** is done only when a force moves its point of application along its own direction: **W = F × s** — force in newtons times displacement in metres gives work in **joules (J)**. Carrying the load level does no work on it against gravity; climbing the hill with it does. Identify the characteristics of work with its SI unit."},
    {k:"rule"},
    {k:"h3", t:"Energy — Kinetic and Potential"},
    {k:"p", t:"**Energy** is the capacity to do work, measured in the same joules. The two **kinds of mechanical energy**: **kinetic energy** — the energy of motion, KE = ½mv² — and **potential energy** — the energy of position or state, PE = mgh. Compute potential and kinetic energy problems, converting mass to kilograms, g = 10 m/s². Energy appears in many other forms — chemical, heat, light, sound, electrical, nuclear — matter and energy being the twin stock of physics."},
    {k:"rule"},
    {k:"h3", t:"Conservation of Mechanical Energy"},
    {k:"p", t:"The **law of conservation of energy:** energy can be **transformed** from one form to another but can neither be created nor destroyed. Demonstrate it with the falling body and the pendulum: potential at the top becomes kinetic at the bottom, and the total stays constant where friction may be ignored. Trace energy transformations in machines and the home: the palm-oil lamp's chemical energy to light and heat; the generator's chemical to electrical; the falling fruit's potential to kinetic."},
    {k:"rule"},
    {k:"h3", t:"Power"},
    {k:"p", t:"**Power** is the rate of doing work: **P = work ÷ time = W/t**, measured in **watts (W)** — one joule each second. Two boys shift the same load; the quicker one is the more powerful. The same machine's power may be written P = Fv where the load moves steadily. Solve the simple problems involving work, energy and power."},
    {k:"rule"},
    {k:"h3", t:"Work Input, Work Output and the Roller Experiment"},
    {k:"p", t:"Distinguish **work input** from **work output**: every machine takes work in and returns work out — no machine can give out more energy than it receives, and friction always taxes the difference. In the lab, investigate energy and power with a roller on a slope: let a toy car or ball roll from a measured height and time it down the incline."},
    {k:"h3", t:"The Moment of a Force"},
    {k:"p", t:"The **moment of a force** about a point is its turning effect: **moment = force × perpendicular distance from the pivot**, in newton-metres (N·m). The same push opens a gate easily at its far edge and hardly at all near the hinges. Clockwise and anticlockwise moments balance in the **principle of moments**: for a body in equilibrium, the sum of the clockwise moments about a point equals the sum of the anticlockwise ones — the law of the balanced lever. In the lab, balance a metre rule on a fulcrum with known masses."},
    {k:"rule"},
    {k:"h3", t:"Couples and Centre of Gravity"},
    {k:"p", t:"A **couple** is a pair of equal, opposite, parallel forces whose lines of action differ: it produces rotation only — the hands on the steering wheel, the fingers on the bottle top — with moment = one force × the perpendicular distance between the two. A body balances when its **centre of gravity** — the point through which its whole weight acts, in a uniform body the geometric centre — is vertically supported; this ties equilibrium to the parallel forces and moments."},
    {k:"rule"},
    {k:"h3", t:"Machines — the Three Numbers"},
    {k:"p", t:"A **machine** is any device by which a force (the **effort**) overcomes a load more conveniently. Judge every machine by three numbers: the **mechanical advantage MA = load ÷ effort** (how much it multiplies force); the **velocity ratio VR = distance moved by effort ÷ distance moved by load** (fixed by its geometry, no friction in it); and the **efficiency = (MA ÷ VR) × 100%** (always below 100% — friction and the moving parts take their share). Distinguish work input from work output: the machine never creates energy."},
    {k:"rule"},
    {k:"h3", t:"The Simple Machines"},
    {k:"table", head:["Machine", "How it works", "Liberian example"], rows:[
      ["Lever", "A rigid bar turning on a fulcrum; load and effort classes 1-3 by arrangement", "Wheelbarrow, cutlass as a lever, the bottle opener, the market see-saw"],
      ["Pulley", "Wheel and rope; blocks compound the strands and raise the MA", "Hoisting water from the well, raising a flag"],
      ["Inclined plane", "The long slope trades distance for force", "Plank to roll a drum into a truck"],
      ["Wheel and axle", "A big wheel turns a small axle with it", "Bicycle pedals, the windlass of a well"],
      ["Wedge", "A double inclined plane that splits", "Axe and knife blades"],
      ["Screw", "An inclined plane wound round a post", "Car jack, vice, bottle cap"],
    ]},
    {k:"p", t:"The **wheelbarrow** is the everyday second-class lever — load between fulcrum and effort, MA always above 1 — spot its class among levers about the market and the yard."},
  ],

  focus:[
    "Definition, formula and unit of work; W = F × s",
    "Kinetic energy KE = ½mv² and potential energy PE = mgh",
    "The principle of conservation of energy and energy transformations",
    "Power and its unit; P = work ÷ time", "Moments, couples and the principle of moments",
    "Simple machines: lever, pulley, inclined plane, wheel and axle, wedge, screw",
    "Mechanical advantage, velocity ratio and efficiency of machines"
  ],
  terms:[
    {t:"work", d:"the product of force and the distance moved in the direction of the force", x:"Work = force × distance."},
    {t:"joule", d:"the SI unit of work and energy", x:"One joule is one newton-metre."},
    {t:"energy", d:"the ability to do work", x:"Energy is measured in joules."},
    {t:"kinetic energy", d:"the energy a body has because of its motion", x:"KE = ½mv²."},
    {t:"potential energy", d:"stored energy a body has because of its position or state", x:"A raised stone has potential energy."},
    {t:"power", d:"the rate at which work is done or energy is transferred", x:"Power = work ÷ time."},
    {t:"watt", d:"the SI unit of power", x:"One watt is one joule per second."},
    {t:"conservation of energy", d:"energy cannot be created or destroyed, only transformed", x:"Energy is conserved in every process."},
    {t:"gravitational potential energy", d:"energy due to height above a reference level", x:"PE = mgh."},
    {t:"moment", d:"the turning effect of a force, force × perpendicular distance", x:"Moment = F × d."},
    {t:"newton-metre", d:"the unit of moment of a force", x:"A moment is measured in N m."},
    {t:"principle of moments", d:"for equilibrium, clockwise moments equal anticlockwise moments", x:"The principle of moments balances a see-saw."},
    {t:"couple", d:"two equal, parallel, opposite forces acting on a body", x:"Turning a steering wheel applies a couple."},
    {t:"lever", d:"a rigid bar that turns about a fixed point (fulcrum)", x:"A seesaw is a lever."},
    {t:"fulcrum", d:"the fixed point about which a lever turns", x:"The fulcrum of a see-saw is at its centre."},
    {t:"mechanical advantage", d:"load divided by effort", x:"MA = load ÷ effort."},
    {t:"velocity ratio", d:"distance moved by effort divided by distance moved by load", x:"VR = effort distance ÷ load distance."},
    {t:"efficiency", d:"useful work output divided by work input, times 100%", x:"Efficiency = (MA ÷ VR) × 100%."},
    {t:"pulley", d:"a wheel with a grooved rim over which a rope runs", x:"A pulley lifts a bucket from a well."},
    {t:"inclined plane", d:"a sloping surface used to move a load to a height", x:"A ramp is an inclined plane."},
    {t:"wheel and axle", d:"a machine where a wheel turns a smaller axle", x:"A door handle is a wheel and axle."},
    {t:"wedge", d:"a triangular machine used to split objects", x:"An axe blade is a wedge."},
    {t:"screw", d:"an inclined plane wound around a cylinder", x:"A screw jack lifts heavy loads."},
  ],
  facts:[
    {q:"Define work and state its formula and unit.", a:"Work is done when a force moves a body in the direction of the force; work = force × distance, and its unit is the joule (J)."},
    {q:"Write the formula for kinetic energy and for gravitational potential energy.", a:"KE = ½mv², where m is mass and v is speed; PE = mgh, where h is the height above the reference level."},
    {q:"State the principle of conservation of energy.", a:"Energy can neither be created nor destroyed; it can only be transformed from one form to another or transferred from one body to another."},
    {q:"Define power and state its unit.", a:"Power is the rate of doing work (work ÷ time); its unit is the watt (W), equal to one joule per second."},
    {q:"A 2 kg stone is lifted 3 m. Taking g = 10 m/s², find its gain in potential energy.", a:"PE = mgh = 2 × 10 × 3 = 60 J."},
    {q:"A body of mass 4 kg moves at 5 m/s. Find its kinetic energy.", a:"KE = ½ × 4 × 5² = ½ × 4 × 25 = 50 J."},
    {q:"A motor does 600 J of work in 30 s. Find its power.", a:"Power = 600 ÷ 30 = 20 W."},
    {q:"Define the moment of a force and state its unit.", a:"The moment of a force about a point is the product of the force and the perpendicular distance from the point to the line of action of the force; its unit is the newton-metre (N m)."},
    {q:"State the principle of moments.", a:"When a body is in equilibrium, the sum of the clockwise moments about any point equals the sum of the anticlockwise moments about the same point."},
    {q:"Define mechanical advantage, velocity ratio and efficiency.", a:"MA = load ÷ effort; VR = distance moved by effort ÷ distance moved by load; efficiency = (useful work output ÷ work input) × 100% = (MA ÷ VR) × 100%."},
    {q:"A lever has MA 4 and VR 5. Find its efficiency.", a:"Efficiency = (4 ÷ 5) × 100% = 80%."},
    {q:"Why is the efficiency of a machine always less than 100%?", a:"Because of friction and the work done in lifting the machine's moving parts, some input energy is wasted as heat."},
  ],
  tf:[
    {s:"Work is the product of force and distance moved in the direction of the force.", a:"true", why:"That is the definition of work."},
    {s:"The SI unit of power is the joule.", a:"false", why:"The joule is the unit of work and energy; power is measured in watts."},
    {s:"Power is the rate of doing work.", a:"true", why:"Power = work ÷ time."},
    {s:"A faster body has more kinetic energy than a slower body of the same mass.", a:"true", why:"KE = ½mv² grows with the square of the speed."},
    {s:"The moment of a force is measured in joules.", a:"false", why:"Moment is measured in newton-metres (N m); the joule is the unit of work and energy."},
    {s:"Mechanical advantage equals load divided by effort.", a:"true", why:"That is the definition of MA."},
    {s:"The efficiency of a machine can be greater than 100%.", a:"false", why:"Efficiency is always less than 100% because some energy is lost to friction and other effects."},
    {s:"A pulley has a velocity ratio greater than one.", a:"true", why:"The effort moves more than one metre for a single metre of load movement, giving VR above 1."},
  ],
  classify:{ title:"Sort these machines and quantities", groups:[
    {name:"Levers", items:[
      "see-saw", "crowbar", "wheelbarrow", "scissors"
    ]},
    {name:"Other simple machines", items:[
      "pulley", "inclined plane", "wheel and axle", "wedge", "screw"
    ]},
    {name:"Measures performance", items:[
      "mechanical advantage", "velocity ratio", "efficiency"
    ]},
    {name:"Parts of a lever", items:[
      "fulcrum", "load", "effort", "effort arm", "load arm"
    ]},
  ]},
  diagram:{ title:"A first-class lever", caption:"State what each part does.", parts:[
    {p:"Fulcrum", f:"The fixed pivot about which the lever turns"},
    {p:"Load", f:"The weight being lifted, at one end of the bar"},
    {p:"Effort", f:"The force applied at the other end"},
    {p:"Effort arm", f:"Distance from the fulcrum to the effort"},
    {p:"Load arm", f:"Distance from the fulcrum to the load"},
  ]},
  experiment:{
    title:"The principle of moments with a metre rule",
    aim:"To verify that clockwise moments equal anticlockwise moments for a balanced lever.",
    materials:[
      "A metre rule", "A knife-edge support (fulcrum)", "Several masses of known weight",
      "A loop of string"
    ],
    steps:[
      "Balance the metre rule on the knife-edge at its centre.",
      "Hang a known mass at a measured distance on the left and record the anticlockwise moment.",
      "Hang another known mass on the right at a distance that balances the rule.",
      "Calculate the clockwise moment on the right.",
      "Compare the two moments and repeat with different masses.",
    ],
    expect:"When the rule is balanced, the clockwise moment equals the anticlockwise moment, so mass × distance on one side equals mass × distance on the other.",
    why:"The metre rule is balanced when the turning effects of the hanging masses are equal and opposite. Comparing the products force × distance on both sides verifies the principle of moments directly."
  },
  worked:[
    {q:"A force of 20 N moves a box 5 m in the direction of the force. Find the work done.", steps:[
      "Work = force × distance", "20 × 5"
    ], a:"100 J"},
    {q:"A 3 kg ball is dropped from a height of 4 m. Taking g = 10 m/s², find its potential energy at the top.", steps:[
      "PE = mgh", "3 × 10 × 4"
    ], a:"120 J"},
    {q:"A 2 kg object moves at 6 m/s. Calculate its kinetic energy.", steps:[
      "KE = ½mv²", "½ × 2 × 36"
    ], a:"36 J"},
    {q:"A lift motor does 4500 J of work in 30 s. Find its power in watts.", steps:[
      "Power = work ÷ time", "4500 ÷ 30"
    ], a:"150 W"},
    {q:"A force of 8 N acts at a perpendicular distance of 0.5 m from a pivot. Find its moment.", steps:[
      "Moment = force × distance", "8 × 0.5"
    ], a:"4 N m"},
    {q:"A 60 N load on a lever is 0.2 m from the fulcrum; the effort of 15 N acts 0.8 m away. Check balance.", steps:[
      "Anticlockwise = 60 × 0.2 = 12 N m", "Clockwise = 15 × 0.8 = 12 N m", "They are equal"
    ], a:"Balanced (12 N m each side)"},
    {q:"A machine lifts a 200 N load with a 50 N effort. Find its mechanical advantage.", steps:[
      "MA = load ÷ effort", "200 ÷ 50"
    ], a:"4"},
    {q:"Using MA = 4 and VR = 5, find the efficiency.", steps:[
      "Efficiency = (MA ÷ VR) × 100%", "(4 ÷ 5) × 100"
    ], a:"80%"},
  ],
  apply:[
    {q:"Why are hydroelectric dams built high in the mountains?", a:"The greater the height of the stored water, the more gravitational potential energy it has, which becomes more kinetic energy and then more electrical energy in the turbines."},
    {q:"Why is a long crowbar easier to use than a short one for lifting a heavy stone?", a:"A longer effort arm multiplies the turning effect, so a smaller effort produces a larger moment about the fulcrum."},
    {q:"Why do builders use a ramp instead of lifting bricks straight up?", a:"The ramp (inclined plane) allows the same work to be done with a smaller effort by moving over a greater distance, though the velocity ratio is larger."},
    {q:"A pulley system has a mechanical advantage of 4. Why is its efficiency still not 100%?", a:"Friction in the pulleys and the weight of the moving parts waste some input energy as heat, so the useful output is less than the input."},
  ],
  activities:[
    "Roll a roller (trolley) down a slope and account for the energy changes",
    "Balance a metre rule with hanging masses to verify the principle of moments",
    "Identify the simple machines in the home and school and find their MA and VR",
    "Calculate the efficiency of a pulley system from measurements",
    "Solve problems on work, energy, power and machines in groups"
  ],
  materials:[
    "Trolleys or rollers, ramps and spring balances",
    "Metre rules, knife edges and known masses", "Pulleys, ropes, loads and spring balances",
    "Levers, crowbars and inclined planes"
  ],
  assessment:[
    "Practical work", "Written test", "Problem solving", "Machine analysis", "Class quiz"
  ]
},
{
  grade:10, period:"IV", sem:"Two", icon:"🌡️",
  title:"Thermal Physics",
  subtitle:"Heat and temperature, thermometry, thermal expansion, and the gas laws of Boyle, Charles and Pressure with heating curves",
  outcomes:[
    "Elaborate the concept of heat, its relationship with temperature and its effects on substances in accordance with the gas laws"
  ],
  objectives:[
    "Distinguish between temperature and heat",
    "Outline the steps and principles involved in the measurement of temperature",
    "Describe the features and use of different types of thermometers",
    "Identify the fundamental intervals of thermometers", "Solve simple thermometry problems",
    "Demonstrate Charles', Boyle's and the combined gas laws",
    "Describe thermal expansion — linear, area and volume — and its applications"
  ],
  note:"<b>Temperature</b> is the degree of hotness read on a thermometer; <b>heat</b> is the energy that flows because of a temperature difference. The scales are <b>Celsius, Fahrenheit and Kelvin</b> (K = °C + 273). Matter <b>expands</b> when heated, and a fixed mass of gas obeys <b>Boyle's law</b> (P₁V₁ = P₂V₂), <b>Charles' law</b> (V₁/T₁ = V₂/T₂) and the <b>Pressure law</b> (P₁/T₁ = P₂/T₂), which combine into <b>P₁V₁/T₁ = P₂V₂/T₂</b>.",
  study:[
    /* ---- course text: Grade 10, Semester Two, Period IV — Thermal Physics (guide pp. 8-10) ---- */
    {k:"h3", t:"Heat versus Temperature"},
    {k:"p", t:"Distinguish **temperature** from **heat**: temperature is the degree of hotness — the level read on a thermometer — while heat is the **energy that flows** from a hotter body to a colder one, measured in joules. A teaspoon of boiling water holds less heat than the whole pot, at the same temperature. Heat transfer by **conduction** (particle to particle, best in metals), **convection** (carried by the rising currents of fluids) and **radiation** (by waves, needing no medium — the sun's route)."},
    {k:"rule"},
    {k:"h3", t:"Thermometry — Scales and Thermometers"},
    {k:"p", t:"Outline the steps and principles involved in the measurement of temperature. The three **temperature scales**: **Celsius** (ice point 0 °C, steam point 100 °C), **Fahrenheit** (32 °F to 212 °F) and **Kelvin** (absolute scale, K = °C + 273). Convert between them: °F = (9/5)C + 32. The **fundamental intervals** of a thermometer are its two fixed points and the divisions between them; the **types of thermometers and their properties**: the mercury-in-glass (a thermometric liquid expanding uniformly), the alcohol thermometer (for cold climates), the clinical thermometer (with its kink), and the thermocouple."},
    {k:"rule"},
    {k:"h3", t:"Thermal Expansion"},
    {k:"p", t:"Solids, liquids and gases expand on heating: the **expansion — linear, area and volume** — fits rails with gaps and bridges with rollers, loosens the stuck bottle cap in hot water, and sets the thermostat's bimetal strip bending. The expansion of gases the gas laws describe."},
    {k:"rule"},
    {k:"h3", t:"The Gas Laws and Heating Curves"},
    {k:"p", t:"Heating a substance raises its temperature till a change of state pins it: the **heating curve** of ice climbs to 0 °C, holds flat while it melts (the **melting point**), climbs again, and holds at 100 °C while it boils (the **boiling point**) — liquids cool in the mirror-image **cooling curve**. Water shows an **anomalous expansion**: it contracts on warming from 0 °C to 4 °C, where it is densest — that is why ponds freeze from the top and the fish survive below."},
    {k:"table", head:["Law", "Statement", "Equation"], rows:[
      ["Boyle's law", "At constant temperature, the volume of a fixed mass of gas is inversely proportional to its pressure", "P₁V₁ = P₂V₂"],
      ["Charles's law", "At constant pressure, the volume is directly proportional to the absolute temperature", "V₁/T₁ = V₂/T₂"],
      ["Pressure law", "At constant volume, the pressure is directly proportional to the absolute temperature", "P₁/T₁ = P₂/T₂"],
      ["Combined", "The three together for a fixed mass of gas", "P₁V₁/T₁ = P₂V₂/T₂"],
    ]},
    {k:"p", t:"Demonstrate the laws: compress the air in a sealed syringe (Boyle), warm a trapped column of air (Charles), heat a sealed flask (Pressure law). Remember **temperatures must be in kelvin: K = °C + 273**."},
  ],

  focus:[
    "The difference between temperature and heat",
    "Temperature scales — Celsius, Fahrenheit and Kelvin — and their conversion",
    "Types of thermometers, their properties and calibration; fundamental intervals",
    "Expansion of solids, liquids and gases — linear, area and volume",
    "Heating and cooling curves; melting and boiling points",
    "Boyle's, Charles' and the Pressure laws; the combined gas equation",
    "Temperatures in kelvin for gas law calculations"
  ],
  terms:[
    {t:"heat", d:"energy that flows from a hotter to a colder body", x:"Heat flows until temperatures are equal."},
    {t:"temperature", d:"a measure of the degree of hotness of a body", x:"Temperature is measured with a thermometer."},
    {t:"internal energy", d:"the total kinetic and potential energy of the particles of a body", x:"Internal energy rises when a body is heated."},
    {t:"expansion", d:"an increase in size when heated", x:"A railway rail expands in the heat."},
    {t:"anomalous expansion", d:"the unusual behaviour of water contracting from 4°C down to 0°C", x:"Anomalous expansion lets ice float."},
    {t:"melting point", d:"the temperature at which a solid changes to a liquid", x:"Ice melts at 0°C."},
    {t:"boiling point", d:"the temperature at which a liquid boils into vapour", x:"Water boils at 100°C at sea level."},
    {t:"Boyle's law", d:"pressure is inversely proportional to volume at constant temperature", x:"Boyle's law: P₁V₁ = P₂V₂."},
    {t:"Charles' law", d:"volume is proportional to absolute temperature at constant pressure", x:"Charles' law: V₁/T₁ = V₂/T₂."},
    {t:"pressure law", d:"pressure is proportional to absolute temperature at constant volume", x:"Pressure law: P₁/T₁ = P₂/T₂."},
    {t:"absolute zero", d:"the lowest possible temperature, −273 °C or 0 K", x:"Absolute zero is 0 K."},
    {t:"combined gas equation", d:"the single equation uniting the three gas laws", x:"P₁V₁/T₁ = P₂V₂/T₂."},
    {t:"thermometer", d:"an instrument for measuring temperature", x:"A mercury-in-glass thermometer reads temperature."},
    {t:"fundamental interval", d:"the distance between the two fixed points (ice and steam points) of a thermometer scale", x:"The fundamental interval is divided into 100 Celsius degrees."},
  ],
  facts:[
    {q:"Distinguish heat from temperature.", a:"Heat is a form of energy that flows between bodies at different temperatures; temperature is a measure of the average kinetic energy of the particles, i.e. how hot a body is."},
    {q:"State two useful applications of thermal expansion.", a:"The bimetallic strip in thermostats, expansion of mercury in a thermometer, and gaps left in railway rails to allow expansion."},
    {q:"State Boyle's law and write its equation.", a:"At constant temperature, the pressure of a fixed mass of gas is inversely proportional to its volume; P₁V₁ = P₂V₂."},
    {q:"State Charles' law and the pressure law.", a:"At constant pressure the volume of a gas is proportional to its absolute temperature (V₁/T₁ = V₂/T₂); at constant volume the pressure is proportional to absolute temperature (P₁/T₁ = P₂/T₂)."},
    {q:"Write the combined gas equation.", a:"P₁V₁/T₁ = P₂V₂/T₂, using temperatures in kelvin."},
    {q:"What is unusual about the expansion of water?", a:"Water contracts as it cools from 4 °C to 0 °C instead of expanding, so ice is less dense than water and floats; this is the anomalous expansion of water."},
    {q:"Name the three temperature scales and state the relationship between Celsius and Kelvin.", a:"Celsius (°C), Fahrenheit (°F) and Kelvin (K); K = °C + 273, and °F = (9/5)°C + 32."},
  ],
  tf:[
    {s:"Temperature is the same thing as heat.", a:"false", why:"Temperature is a measure of hotness; heat is energy that flows because of a temperature difference."},
    {s:"Boyle's law states that pressure is inversely proportional to volume at constant temperature.", a:"true", why:"That is Boyle's law."},
    {s:"Charles' law is applied at constant pressure.", a:"true", why:"Charles' law relates volume and temperature at constant pressure."},
    {s:"In gas law calculations temperatures are used in degrees Celsius.", a:"false", why:"Temperatures must be in kelvin (absolute) for the gas laws to work."},
    {s:"Ice is denser than water.", a:"false", why:"Because of anomalous expansion, ice is less dense and floats on water."},
  ],
  classify:{ title:"Sort these thermal statements and scales", groups:[
    {name:"Gas laws", items:[
      "Boyle's law", "Charles' law", "pressure law", "combined gas equation"
    ]},
    {name:"Temperature scales", items:[
      "Celsius", "Fahrenheit", "Kelvin"
    ]},
    {name:"About temperature", items:[
      "a measure of the degree of hotness", "read on a thermometer",
      "measured in kelvin or degrees Celsius"
    ]},
    {name:"About heat", items:[
      "energy that flows from hot to cold", "measured in joules",
      "flows because of a temperature difference"
    ]},
  ]},
  diagram:{ title:"The bimetallic strip thermostat", caption:"State what each part does.", parts:[
    {p:"Brass strip", f:"Expands more when heated"},
    {p:"Iron strip", f:"Expands less when heated"},
    {p:"Contact point", f:"Opens or closes the circuit"},
    {p:"Screw adjuster", f:"Sets the temperature at which the thermostat switches"},
    {p:"Circuit wires", f:"Carry the current that the thermostat controls"},
  ]},
  experiment:{
    title:"Boyle's law with a syringe",
    aim:"To show that the pressure and volume of a gas are inversely proportional at constant temperature.",
    materials:[
      "A strong plastic syringe", "A few drops of oil", "A clamp",
      "A set of small masses or a book"
    ],
    steps:[
      "Seal the nozzle of the syringe and draw the plunger out so a fixed volume of air is trapped.",
      "Note the initial volume reading.",
      "Place a known force (mass) on the plunger to increase the pressure and record the new volume.",
      "Add more force in steps, recording pressure and volume each time.",
      "Multiply pressure by volume at each step and compare the products.",
    ],
    expect:"The product of pressure and volume stays roughly constant at each step, showing that P is inversely proportional to V for the trapped air at constant temperature — Boyle's law.",
    why:"The trapped air is a fixed mass at roughly constant temperature. Doubling the force doubles the pressure and halves the volume, keeping P×V constant, exactly as Boyle's law predicts."
  },
  worked:[
    {q:"A gas occupies 300 cm³ at a pressure of 100 kPa. Find its volume when the pressure becomes 200 kPa at constant temperature.", steps:[
      "Boyle's law P₁V₁ = P₂V₂", "100 × 300 = 200 × V₂", "V₂ = 30000 ÷ 200"
    ], a:"150 cm³"},
    {q:"A gas has volume 500 cm³ at 300 K. Find its volume at 360 K at constant pressure.", steps:[
      "Charles' law V₁/T₁ = V₂/T₂", "500/300 = V₂/360", "V₂ = (500 × 360) ÷ 300"
    ], a:"600 cm³"},
    {q:"Convert 27 °C to kelvin.", steps:[
      "K = °C + 273", "27 + 273"
    ], a:"300 K"},
    {q:"A gas at 200 kPa and 300 K has a pressure of 250 kPa at constant volume. Find the new temperature.", steps:[
      "Pressure law P₁/T₁ = P₂/T₂", "200/300 = 250/T₂", "T₂ = (250 × 300) ÷ 200"
    ], a:"375 K"},
    {q:"Convert 100 °C to kelvin.", steps:[
      "K = °C + 273", "100 + 273"
    ], a:"373 K"},
  ],
  apply:[
    {q:"Why does a sealed plastic bottle of water bulge when left in the sun?", a:"Heat warms the air and water vapour inside; at nearly constant volume the increased temperature raises the pressure, pressing the bottle outward."},
    {q:"Why do fish survive a hard winter in a pond that freezes only at the surface?", a:"Anomalous expansion makes the 4 °C water densest at the bottom, so the colder, less dense water stays on top and freezes, protecting the warmer water beneath."},
    {q:"Why is a tyre more likely to burst on a hot day?", a:"Heating raises the temperature and therefore the pressure of the gas inside the tyre (pressure law); if the tyre cannot hold the higher pressure it bursts."},
    {q:"Why must a gap be left between the rails of a railway line?", a:"The gap allows the rails to expand in the heat without buckling, preventing damage."},
  ],
  activities:[
    "Convert temperatures between the Celsius, Fahrenheit and Kelvin scales",
    "Calibrate an unmarked thermometer at the ice and steam points",
    "Demonstrate linear expansion with a metal rod and gauge, and the bimetallic strip",
    "Use syringes to demonstrate the pressure law, and a trapped air column for Charles' law",
    "Plot the heating curve of ice and identify the melting and boiling points",
    "Solve problems on the gas laws with temperatures in kelvin"
  ],
  materials:[
    "Thermometers (mercury-in-glass, alcohol, clinical), beakers, ice and Bunsen burners",
    "Linear expansion apparatus, metal rods and bimetallic strips",
    "Syringes, oil, clamps and masses for the gas laws", "Graph paper and rulers"
  ],
  assessment:[
    "Practical work", "Written test", "Graph work", "Problem solving", "Class quiz"
  ]
},
{
  grade:10, period:"V", sem:"Two", icon:"⚡",
  title:"Electrostatics",
  subtitle:"Electric charge, conductors and insulators, Coulomb's law, electric fields and potential, and capacitors and their networks",
  outcomes:[
    "Recognize that an electric charge produces an electric field, the methods of detecting an electric charge, and the importance of capacitors in electrical and electronic devices"
  ],
  objectives:[
    "Identify the two kinds of electric charges",
    "Distinguish between conductors and insulators",
    "State the basic laws and Coulomb's law of electrostatics",
    "Illustrate lines of force relative to electric charges",
    "Explain the methods of charging a body",
    "Solve problems on Coulomb's law, electric field intensity and work done in an electric field",
    "Identify the types of capacitors and their uses",
    "Discuss the relationship between potential difference and capacitance",
    "Solve problems on networks of capacitors"
  ],
  note:"Matter is made of atoms with <b>protons</b> (positive), <b>electrons</b> (negative) and <b>neutrons</b> (neutral). Charging by <b>friction</b> transfers electrons between materials, so one gains a negative charge and the other a positive charge. <b>Like charges repel and unlike charges attract</b>. The <b>electroscope</b> detects charge, the <b>Van de Graaff generator</b> builds up a high voltage, and a <b>capacitor</b> stores charge.",
  study:[
    /* ---- course text: Grade 10, Semester Two, Period V — Electrostatics (guide pp. 10-11) ---- */
    {k:"h3", t:"The Concept of Electric Charge"},
    {k:"p", t:"Every atom carries the two kinds of electric charge: the positive **protons** locked in the nucleus and the mobile negative **electrons** outside. Rubbing is a robbery of electrons: friction strips them from one body to another — the rubbed comb lifts paper bits, the balloon rubbed on hair clings to the wall. **State the two kinds of charges** and the **basic law of electrostatics: like charges repel, unlike charges attract.**"},
    {k:"rule"},
    {k:"h3", t:"Conductors and Insulators; Methods of Charging"},
    {k:"p", t:"**Conductors** (metals, the human body, the damp earth) let charge run through their free electrons; **insulators** (glass, plastics, rubber, dry air) hold their charge where it lands. The **methods of charging a body:** by **friction** (rubbing), by **contact** (sharing charge with a charged body), and by **induction** (charge rearranging without contact — the way to a permanent charge on a conductor with none of the source's charge spent). **Detect an electric charge with the gold-leaf electroscope:** charged, its leaf diverges. Demonstrate charging by friction and induction with balloons rubbed on wool."},
    {k:"rule"},
    {k:"h3", t:"Coulomb's Law, Electric Fields and Potential"},
    {k:"p", t:"**Coulomb's law of electrostatics:** the force between two point charges is F = kq₁q₂/r² — proportional to each charge, inverse-square in the distance, with k ≈ 9×10⁹ N·m²/C². An electric charge produces around it an **electric field** — the space in which another charge feels force; draw the **lines of force for single and paired charges**: from positive to negative, radial for a lone point charge, never crossing, dense where the field is strong. **Electric field intensity (strength)** E = F/q (N/C); the **potential difference** between two points is the **work done in an electric field per unit charge**, V = W/q (volts). Solve problems on Coulomb's law, field intensity and work."},
    {k:"rule"},
    {k:"h3", t:"The Van de Graaff and Lightning"},
    {k:"p", t:"The **Van de Graaff generator** piles charge by the million volts on its dome by carrying it in on a moving belt — for accelerating particles and for spectacle. Nature's electrostatics is the thunderstorm: the friction of rising air charges the cloud till the spark to earth we call **lightning** — and the pointed **lightning conductor** discharges the danger quietly into the ground."},
    {k:"rule"},
    {k:"h3", t:"Capacitors and Capacitance"},
    {k:"p", t:"A **capacitor** stores electric charge on two plates kept apart by an insulator (the dielectric); its **capacitance C = Q/V** in farads — raised by larger plates, closer spacing, and a better dielectric. Identify the **types and uses of capacitors:** camera flash and radio tuning; in **parallel the capacitances add (C = C₁ + C₂)**, in **series they combine reciprocally (1/C = 1/C₁ + 1/C₂)** — the network rules are the mirror image of resistors. Work the networks of capacitors — series, parallel and series-parallel — in the exercise set."},
  ],

  focus:[
    "The concept of electric charge; the two kinds of charge",
    "Conductors and insulators; the methods of charging a body",
    "The basic law of electrostatics and Coulomb's law F = kq₁q₂/r²",
    "Electric fields, lines of force, potential difference and field intensity",
    "Detecting charge: the electroscope and the Van de Graaff generator",
    "Capacitors and capacitance C = Q/V; series and parallel networks"
  ],
  terms:[
    {t:"charge", d:"a property of matter that causes electric forces", x:"Protons carry positive charge."},
    {t:"proton", d:"a positively charged particle in the nucleus", x:"The number of protons sets the atomic number."},
    {t:"electron", d:"a negatively charged particle orbiting the nucleus", x:"Electrons move to charge objects."},
    {t:"neutral", d:"having equal numbers of positive and negative charges", x:"A neutral object has no net charge."},
    {t:"friction charging", d:"charging by rubbing so electrons transfer", x:"Rubbing a balloon charges it by friction."},
    {t:"induction", d:"charging a body without contact, using a nearby charge", x:"Induction charges an object without touching it."},
    {t:"electric field", d:"the region where an electric force acts on a charge", x:"Field lines show the electric field."},
    {t:"electroscope", d:"an instrument used to detect electric charge", x:"The leaves of an electroscope diverge when charged."},
    {t:"Van de Graaff generator", d:"a machine that builds up a very high voltage of static charge", x:"A Van de Graaff generator makes hair stand up."},
    {t:"capacitor", d:"a device that stores electric charge", x:"A capacitor stores charge in a camera flash."},
    {t:"capacitance", d:"the charge stored per unit voltage", x:"Capacitance is measured in farads."},
    {t:"lightning conductor", d:"a metal rod that conducts lightning safely to the ground", x:"A lightning conductor protects a building."},
  ],
  facts:[
    {q:"Describe the atomic model of electric charge.", a:"Atoms consist of a nucleus of positively charged protons and neutral neutrons, surrounded by negatively charged electrons; normally the numbers of protons and electrons are equal, so the atom is neutral."},
    {q:"Explain how charging by friction works.", a:"Rubbing transfers electrons from one material to the other: the material that loses electrons becomes positively charged and the one that gains them becomes negatively charged."},
    {q:"State the rule for the force between charges.", a:"Like charges repel each other and unlike charges attract each other."},
    {q:"What is the electric field around a charge?", a:"The region around a charge in which another charge experiences a force; it is drawn with field lines from positive to negative."},
    {q:"How is an electroscope used to detect charge?", a:"When a charged object touches or is brought near the cap, charge moves to the leaves, which diverge because like charges repel, showing that charge is present."},
    {q:"What is a capacitor and what does its capacitance measure?", a:"A capacitor stores electric charge; its capacitance is the charge stored per unit voltage, measured in farads."},
    {q:"State two applications of electrostatics.", a:"Photocopiers and laser printers, electrostatic painting, the lightning conductor, and air purification are examples."},
  ],
  tf:[
    {s:"Like charges repel each other.", a:"true", why:"Like charges repel and unlike charges attract."},
    {s:"An electron is positively charged.", a:"false", why:"An electron carries a negative charge; a proton is positive."},
    {s:"Rubbing a balloon on hair charges it by friction.", a:"true", why:"Electrons transfer during rubbing, giving the balloon a net charge."},
    {s:"A capacitor stores electric charge.", a:"true", why:"That is the purpose of a capacitor."},
    {s:"The leaves of a charged electroscope repel because they gain like charges.", a:"true", why:"Both leaves gain the same charge and repel."},
    {s:"A neutral atom has more electrons than protons.", a:"false", why:"A neutral atom has equal numbers of protons and electrons."},
  ],
  classify:{ title:"Sort these statements and devices", groups:[
    {name:"Positive charge carriers", items:[
      "proton"
    ]},
    {name:"Negative charge carriers", items:[
      "electron"
    ]},
    {name:"Neutral particles", items:[
      "neutron", "uncharged atom"
    ]},
    {name:"Electrostatic devices", items:[
      "electroscope", "Van de Graaff generator", "capacitor", "lightning conductor"
    ]},
  ]},
  diagram:{ title:"Charging an electroscope by induction", caption:"State what each part does.", parts:[
    {p:"Metal cap", f:"Receives the charge from the charged rod"},
    {p:"Metal rod", f:"Conducts the charge to the leaves"},
    {p:"Gold leaves", f:"Diverge because they gain like charges"},
    {p:"Charged rod", f:"Brings charge near (or touches) the cap"},
    {p:"Earth connection", f:"Allows induced charge to escape during induction"},
  ]},
  experiment:{
    title:"Charging by friction with a balloon",
    aim:"To show how rubbing transfers charge and how the charged object attracts and repels.",
    materials:[
      "A balloon", "A piece of wool or a jumper", "Small pieces of paper",
      "A wall or running tap"
    ],
    steps:[
      "Rub the balloon against the wool or jumper for a minute.",
      "Bring the balloon near small pieces of paper and observe.",
      "Bring it near a thin stream of running water and observe.",
      "Hold the charged balloon against a wall and release it.",
      "Test the balloon with two rubbed together and describe what happens.",
    ],
    expect:"The rubbed balloon attracts small pieces of paper and bends a stream of water because it is charged and induces opposite charge. It may cling to a wall for the same reason.",
    why:"Rubbing transfers electrons from the wool to the balloon, giving it a net negative charge. The charged balloon attracts neutral objects by inducing an opposite charge on them, demonstrating the force between unlike charges."
  },
  worked:[
    {q:"A balloon is rubbed and gains 3 × 10⁶ electrons. State the sign of its charge.", steps:[
      "Gaining electrons adds negative charge"
    ], a:"Negative"},
    {q:"A rod loses electrons when rubbed. State the sign of its charge.", steps:[
      "Losing electrons leaves more protons"
    ], a:"Positive"},
    {q:"Two identical charges repel with force F. If the charge is doubled, what happens to the force?", steps:[
      "Force is proportional to the product of the charges",
      "Doubling one charge doubles the force"
    ], a:"The force doubles"},
    {q:"A capacitor stores 2 C of charge at a voltage of 4 V. Find its capacitance.", steps:[
      "C = Q ÷ V", "2 ÷ 4"
    ], a:"0.5 F"},
  ],
  apply:[
    {q:"Why does your hair stand up when you touch a Van de Graaff generator?", a:"Your body gains like charges that spread to the strands of hair, which then repel one another and stand up."},
    {q:"Why does a photocopier attract toner powder to the charged drum?", a:"The drum carries a pattern of static charge; the oppositely charged toner is attracted to the charged areas and sticks to form the image."},
    {q:"Why are the metal cases of sensitive electronic equipment earthed?", a:"Earthing lets any built-up static charge flow safely away, preventing sparks and protecting the delicate components."},
  ],
  activities:[
    "Charge a balloon by friction and observe its effects",
    "Demonstrate attraction and repulsion with charged rods",
    "Use an electroscope to detect different charges",
    "Visit or describe the working of a Van de Graaff generator",
    "Discuss applications of electrostatics in the home and industry"
  ],
  materials:[
    "Balloons, rods of glass and ebonite, and wool", "An electroscope",
    "Small pieces of paper and running water",
    "Charts and diagrams of capacitors and generators"
  ],
  assessment:[
    "Practical work", "Written test", "Demonstration", "Class quiz", "Assignment"
  ]
},
{
  grade:10, period:"VI", sem:"Two", icon:"💧",
  title:"Properties of Matter",
  subtitle:"The states and structure of matter, the kinetic theory, cohesion, adhesion, surface tension, viscosity, diffusion and elasticity with Hooke's law and Young's modulus",
  outcomes:[
    "Recognize the structure of matter and determine the effect of applied force due to Hooke's law"
  ],
  objectives:[
    "Distinguish between atoms and molecules", "Examine the kinetic theory of matter",
    "Distinguish between cohesion and adhesion",
    "Analyze Hooke's law and apply Young's modulus in solving problems",
    "Explain surface tension, viscosity and diffusion in solids, liquids and gases",
    "Represent elasticity graphically"
  ],
  note:"The <b>kinetic theory</b> pictures matter as tiny particles in constant motion — vibrating in fixed places in a <b>solid</b>, sliding in a <b>liquid</b>, flying free in a <b>gas</b> — with <b>Brownian motion</b> as the direct evidence. <b>Cohesion</b> attracts like molecules, <b>adhesion</b> unlike; <b>surface tension</b> skins a liquid and <b>viscosity</b> is its internal friction. <b>Hooke's law</b> — extension proportional to load within the elastic limit (F = ke) — and <b>Young's modulus</b> E = stress ÷ strain govern the effect of applied force.",
  study:[
    /* ---- course text: Grade 10, Semester Two, Period VI — Properties of Matter (guide pp. 12-13) ---- */
    {k:"h3", t:"The States and Structure of Matter"},
    {k:"p", t:"Matter exists in three states, and its structure explains them: in a **solid** the particles hold fixed positions and only vibrate — definite shape and volume; in a **liquid** they slide about — definite volume, the vessel's shape; in a **gas** they fly free — filling any container. Distinguish **atoms** (the smallest particles of an element that take part in reaction) from **molecules** (the groups of atoms that exist free — O₂, H₂O)."},
    {k:"rule"},
    {k:"h3", t:"The Kinetic Theory of Matter"},
    {k:"p", t:"The **kinetic theory** states that matter is made of tiny particles in constant motion, their energy rising with temperature. The direct evidence is **Brownian motion**: smoke or pollen specks in restlessness under the microscope, knocked about by invisible molecules. The theory explains diffusion, evaporation, pressure and all the states' properties."},
    {k:"rule"},
    {k:"h3", t:"Cohesion, Adhesion, Surface Tension and Viscosity"},
    {k:"p", t:"**Cohesion** is the attraction between like molecules (water to water); **adhesion**, between unlike (water wetting glass, climbing the tube in **capillarity** while mercury falls). **Surface tension** draws a liquid's surface tight like a skin — the razor floats, the insect walks on water, a drop stands spherical. **Viscosity** is a fluid's internal friction: palm oil pours slow, kerosene fast. **Diffusion** mixes one substance through another by molecular wandering."},
    {k:"rule"},
    {k:"h3", t:"Elasticity — Hooke's Law and Young's Modulus"},
    {k:"p", t:"**Elasticity** is the power to regain shape when the deforming force is withdrawn. **Hooke's law:** within the elastic limit, the extension of a spring or wire is directly proportional to the applied load — F = ke; past the **elastic limit** a body stretches and stays stretched. Plot the extension against load: straight through the proportional region, then curving away at the **yield point** — the graphical representation of elasticity. For stretching a material itself (not a specimen), use **Young's (elastic) modulus** E = stress ÷ strain, and apply it in the exercise problems; **elastic strings** store and return energy the same way."},
    {k:"rule"},
  ],

  focus:[
    "The states of matter and their structure; atoms and molecules",
    "The kinetic theory and its assumptions", "Brownian motion as evidence of particle motion",
    "Forces between molecules: cohesion and adhesion; capillarity",
    "Surface tension, viscosity and diffusion",
    "Elasticity and Hooke's law F = ke; the elastic limit",
    "Young's (elastic) modulus E = stress ÷ strain; graphical representation of elasticity"
  ],
  terms:[
    {t:"kinetic theory", d:"the idea that matter is made of particles in constant motion", x:"Kinetic theory explains why gases fill a container."},
    {t:"cohesion", d:"the force of attraction between particles of the same substance", x:"Cohesion holds a drop of water together."},
    {t:"adhesion", d:"the force of attraction between particles of different substances", x:"Adhesion makes water cling to glass."},
    {t:"elasticity", d:"the property of a body to return to its original shape after deformation", x:"A rubber band shows elasticity."},
    {t:"Brownian motion", d:"the random, zigzag motion of small particles caused by collisions", x:"Brownian motion is seen with pollen in water."},
    {t:"atom", d:"the smallest particle of an element that can take part in a chemical reaction", x:"An atom of oxygen is written O."},
    {t:"molecule", d:"a group of atoms bonded together that exists freely", x:"O₂ and H₂O are molecules."},
    {t:"surface tension", d:"the force that makes a liquid surface behave like a stretched skin", x:"Surface tension lets an insect walk on water."},
    {t:"viscosity", d:"the internal friction of a fluid that resists its flow", x:"Palm oil is more viscous than kerosene."},
    {t:"diffusion", d:"the spreading of one substance through another by molecular motion", x:"Diffusion spreads perfume through a room."},
    {t:"Hooke's law", d:"within the elastic limit, the extension of a spring is proportional to the load", x:"Hooke's law: F = ke."},
    {t:"Young's modulus", d:"the ratio of stress to strain for a stretched material", x:"Young's modulus is measured in pascals."},
    {t:"elastic limit", d:"the greatest force or stress a body can take and still return to its original shape", x:"Past the elastic limit a wire stays stretched."},
  ],
  facts:[
    {q:"State the main idea of the kinetic theory of matter.", a:"All matter is made of very small particles in constant motion; the arrangement and speed of the particles explain the properties of solids, liquids and gases."},
    {q:"Distinguish cohesion from adhesion with one example of each.", a:"Cohesion is attraction between particles of the same substance (a drop of water holds together); adhesion is attraction between different substances (water clings to a glass wall)."},
    {q:"What is Brownian motion and what does it show?", a:"The random, zigzag motion of tiny particles in a fluid, caused by collisions with molecules; it gives evidence that molecules are in continuous motion."},
    {q:"State Hooke's law and write its equation.", a:"Within the elastic limit, the extension of a spring or wire is directly proportional to the applied load; F = ke, where k is the stiffness of the spring."},
    {q:"Define surface tension and give one everyday example.", a:"Surface tension is the tendency of a liquid surface to shrink into the minimum area, acting like a stretched skin; it lets a razor blade float and an insect walk on water."},
    {q:"What is viscosity and how does it differ between liquids?", a:"Viscosity is the internal friction of a fluid that opposes flow; thick palm oil pours slowly (high viscosity) while kerosene pours quickly (low viscosity)."},
  ],
  tf:[
    {s:"In a solid the particles are closely packed and vibrate about fixed positions.", a:"true", why:"That is the kinetic theory picture of a solid."},
    {s:"Cohesion is the attraction between particles of different substances.", a:"false", why:"Cohesion is between particles of the same substance; attraction between different substances is adhesion."},
    {s:"Hooke's law holds up to the elastic limit of a spring.", a:"true", why:"Beyond the elastic limit the extension is no longer proportional to the load."},
    {s:"A spring stretched past its elastic limit returns to its original length when released.", a:"false", why:"Past the elastic limit the spring is permanently deformed and stays stretched."},
    {s:"Diffusion happens because particles are in constant random motion.", a:"true", why:"The random motion of the particles carries one substance through another."},
  ],
  classify:{ title:"Sort these statements", groups:[
    {name:"Properties of solids", items:[
      "fixed shape", "fixed volume", "particles vibrate about fixed points"
    ]},
    {name:"Properties of liquids", items:[
      "fixed volume", "no fixed shape", "particles slide past one another"
    ]},
    {name:"Properties of gases", items:[
      "no fixed shape", "no fixed volume", "particles far apart and move rapidly"
    ]},
    {name:"Behaviour of matter", items:[
      "Brownian motion", "diffusion", "capillarity"
    ]},
  ]},
  diagram:{ title:"The three states of matter", caption:"State what the particles do in each state.", parts:[
    {p:"Solid", f:"Particles closely packed and vibrating about fixed positions"},
    {p:"Liquid", f:"Particles close together but free to slide past one another"},
    {p:"Gas", f:"Particles far apart, moving rapidly and randomly"},
    {p:"Heating", f:"Supplies energy that loosens the particles and changes the state"},
    {p:"Cooling", f:"Removes energy and brings the particles closer together"},
  ]},
  experiment:{
    title:"Hooke's law with a spring",
    aim:"To show that the extension of a spring is proportional to the applied load within the elastic limit.",
    materials:[
      "A stiff helical spring", "A retort stand and clamp", "A metre rule",
      "A set of equal slotted masses", "A pointer of stiff wire or a paper clip"
    ],
    steps:[
      "Hang the spring from the clamp and fix the metre rule beside it.",
      "Record the position of the pointer on the unloaded spring.",
      "Add one mass at a time, recording the pointer position each time.",
      "Subtract the original position to find the extension for each load.",
      "Plot extension against load and note where the graph stops being straight.",
    ],
    expect:"The graph of extension against load is a straight line through the origin while the elastic limit is not exceeded, then curves away when the spring is overloaded.",
    why:"Each equal load stretches the spring by an equal extra amount (F = ke), so extension is proportional to load — Hooke's law. Past the elastic limit the proportionality fails and the spring is permanently deformed."
  },
  worked:[
    {q:"A spring stretches 2 cm when a load of 4 N hangs from it. Find the spring constant k.", steps:[
      "Hooke's law F = ke", "k = F ÷ e = 4 ÷ 0.02"
    ], a:"200 N/m"},
    {q:"A wire of original length 2 m stretches by 1 mm under a force. Find the strain.", steps:[
      "Strain = extension ÷ original length", "0.001 ÷ 2"
    ], a:"0.0005 (5 × 10⁻⁴)"},
    {q:"A load of 50 N produces a stress of 2.5 × 10⁶ Pa in a wire. Find the strain if Young's modulus is 1.0 × 10¹¹ Pa.", steps:[
      "E = stress ÷ strain", "strain = stress ÷ E = (2.5 × 10⁶) ÷ (1.0 × 10¹¹)"
    ], a:"2.5 × 10⁻⁵"},
    {q:"What load stretches the same spring (k = 200 N/m) by 5 cm?", steps:[
      "F = ke", "200 × 0.05"
    ], a:"10 N"},
  ],
  apply:[
    {q:"Why does a steel ship float even though steel is denser than water?", a:"The ship's hollow shape displaces a large volume of water; by Archimedes' principle the upthrust on that volume exceeds the ship's weight, so it floats."},
    {q:"Why do raindrops form nearly spherical beads on a waxed leaf?", a:"Surface tension pulls the surface inwards to the least possible area, and a sphere has the least surface area for a given volume."},
    {q:"Why does hot palm oil pour more easily than cold palm oil?", a:"Heating lowers the oil's viscosity — its internal friction — so the particles slide past one another more freely."},
  ],
  activities:[
    "Demonstrate Brownian motion using smoke in a smoke cell or ink in water",
    "Demonstrate cohesion and adhesion with water and mercury in glass tubes (capillarity)",
    "Float a razor blade or needle on water to show surface tension, then break the surface with detergent",
    "Compare the flow rates of water, kerosene and palm oil to rank their viscosities",
    "Load a spring in equal steps and plot the extension–load graph to find its elastic limit",
    "Discuss why ice floats and why it matters for fish in a frozen pond"
  ],
  materials:[
    "Springs, retort stands, metre rules and slotted masses",
    "Smoke cells or microscopes with ink for Brownian motion",
    "Glass tubes, water, mercury and capillary tubes",
    "Razor blades, detergent and samples of viscous liquids"
  ],
  assessment:[
    "Practical work", "Written test", "Graph work", "Problem solving", "Class quiz"
  ]
},

/* ================================ GRADE 11 ================================ */
{
  grade:11, period:"I", sem:"One", icon:"🎯",
  title:"Motion in Two Dimensions",
  subtitle:"Vectors in two dimensions, projectile motion, circular and rotational motion, and simple harmonic (oscillatory) motion",
  outcomes:[
    "Appreciate the use of force in motion and its impact on everyday activity"
  ],
  objectives:[
    "Add and resolve vectors", "Solve problems on simple harmonic motion",
    "Use the equations of motion in solving one- and two-dimensional problems",
    "Distinguish the types of motion — projectile, rotational, circular, simple harmonic and oscillatory — and their applications"
  ],
  note:"Motion in two dimensions adds a second axis to the equations of motion. A <b>projectile</b> keeps its horizontal velocity while gravity accelerates it downward, tracing a <b>parabola</b>. A body in <b>circular motion</b> accelerates toward the centre, held by the <b>centripetal force</b> <b>F = mv²/r</b>; in <b>rotational motion</b> a body spins about an axis with <b>angular velocity ω = 2π/T</b>. In <b>simple harmonic motion</b> the acceleration is proportional to the displacement and always directed toward the mean position — the pendulum and the mass on a spring.",
  study:[
    /* ---- course text: Grade 11, Semester One, Period I — Motion in Two Dimensions (guide pp. 14-15) ---- */
    {k:"h3", t:"Vectors in Two Dimensions"},
    {k:"p", t:"Add and resolve vectors: a vector in a plane is fixed by its **magnitude and direction**, and any vector can be replaced by two perpendicular **components** — a force F at angle θ to the horizontal has components **F cos θ** (horizontal) and **F sin θ** (vertical). Adding vectors head-to-tail (or by the parallelogram) gives the **resultant**, and resolving each vector first lets the equations of motion be applied along each axis separately — the working method for all two-dimensional motion problems."},
    {k:"rule"},
    {k:"h3", t:"Projectile Motion"},
    {k:"p", t:"A **projectile** is any body thrown into space upon which the only acting force is gravity. Its motion splits in two: **horizontally** the velocity stays constant (no horizontal force), **vertically** the body accelerates downward at g — so a stone thrown level from a roof takes the same time to fall as one simply dropped. The two motions together trace the **parabola**, the projectile's path; the horizontal distance covered is its **range**, and the greatest height comes where the vertical velocity momentarily vanishes. A ball kicked at an angle, a javelin and water from a hose all follow the parabola."},
    {k:"rule"},
    {k:"h3", t:"Circular Motion"},
    {k:"p", t:"In **circular motion** a body moves round a fixed centre at constant speed — but its direction changes every instant, so its velocity changes and the body **accelerates toward the centre**: the **centripetal acceleration** v²/r. The force providing it is the **centripetal force F = mv²/r** — the string's pull on a whirling stone, friction on a car rounding a bend, gravity on the orbiting moon. Remove the force and the body flies off along the **tangent**, not outward along the radius."},
    {k:"rule"},
    {k:"h3", t:"Rotational Motion"},
    {k:"p", t:"In **rotational (rotary) motion** every point of the body moves in a circle about a fixed **axis** — the wheel, the fan blade, the spinning earth. The angle turned per second is the **angular velocity ω**, measured in radians per second and linked to the period by **ω = 2π/T**; points farther from the axis move faster (v = ωr). Distinguish it from circular motion, where one small body moves round a centre that is not its own axis."},
    {k:"rule"},
    {k:"h3", t:"Simple Harmonic (Oscillatory) Motion"},
    {k:"p", t:"**Simple harmonic motion** is oscillatory motion in which the acceleration is proportional to the displacement and is always directed toward the mean (rest) position — the **pendulum** swinging through small angles and the **mass on a spring**. One complete to-and-fro movement is an **oscillation**; the time it takes is the **period T** (for a pendulum T = 2π√(L/g), independent of the mass) and the greatest displacement is the **amplitude**. It is the model of every vibration, from a guitar string to a suspension."},
  ],

  focus:[
    "Addition and resolution of vectors in one and two dimensions",
    "Projectile motion: constant horizontal velocity, vertical acceleration g",
    "The parabolic path, range and greatest height of a projectile",
    "Circular motion and the centripetal force F = mv²/r",
    "Rotational motion about an axis; angular velocity ω = 2π/T",
    "Simple harmonic and oscillatory motion; period and amplitude",
    "Applications: thrown balls, bends and orbits, wheels, pendulums"
  ],
  terms:[
    {t:"projectile", d:"a body thrown into space on which the only force is gravity", x:"A thrown javelin is a projectile."},
    {t:"trajectory", d:"the path followed by a projectile — a parabola", x:"The trajectory of a kicked ball is a parabola."},
    {t:"range", d:"the horizontal distance a projectile covers before landing", x:"A projectile's range grows with launch speed."},
    {t:"centripetal force", d:"the force that keeps a body moving in a circle, directed to the centre", x:"Centripetal force makes a ball whirl on a string."},
    {t:"centripetal acceleration", d:"the acceleration of a body in circular motion, v²/r, directed to the centre", x:"A car on a bend has centripetal acceleration."},
    {t:"angular velocity", d:"the angle turned through per second, in radians per second", x:"Angular velocity ω = 2π/T."},
    {t:"axis of rotation", d:"the fixed line about which a body spins", x:"A wheel turns about its axle — its axis of rotation."},
    {t:"period", d:"the time for one complete circle or one oscillation", x:"The period of the second hand is 60 s."},
    {t:"simple harmonic motion", d:"oscillation in which acceleration is proportional to displacement and directed to the mean position", x:"A pendulum swings in simple harmonic motion."},
    {t:"amplitude", d:"the greatest displacement from the mean position", x:"A gentle push keeps the pendulum's amplitude small."},
    {t:"oscillation", d:"one complete to-and-fro movement about the mean position", x:"Each swing of a pendulum is one oscillation."},
    {t:"tangent", d:"the straight line a body in circular motion follows if the centripetal force is removed", x:"Mud flies off a spinning wheel along the tangent."},
  ],
  facts:[
    {q:"What is a projectile, and what path does it follow?", a:"A projectile is any body thrown into space on which the only acting force is gravity; its horizontal velocity stays constant while gravity accelerates it downward, so it follows a parabolic path."},
    {q:"Why does the horizontal velocity of a projectile remain constant?", a:"No horizontal force acts on it (air resistance neglected); gravity acts only vertically, so the horizontal component of velocity is unchanged."},
    {q:"What force keeps a body moving in a circle, and in which direction does it act?", a:"The centripetal force, F = mv²/r, always directed toward the centre of the circle."},
    {q:"Distinguish circular motion from rotational motion.", a:"In circular motion a small body moves round a centre (a car on a roundabout); in rotational motion every point of an extended body turns about a fixed axis through the body (a spinning wheel)."},
    {q:"Define simple harmonic motion and give two examples.", a:"Oscillatory motion in which the acceleration is proportional to the displacement and directed toward the mean position; examples are a simple pendulum swinging through small angles and a mass vibrating on a spring."},
    {q:"A stone on a string is whirled in a horizontal circle and the string breaks. In which direction does the stone move?", a:"Along the tangent to the circle at the point of release, because with the centripetal force gone there is no force to bend its path."},
    {q:"Write the formula for angular velocity and for the period of a simple pendulum.", a:"Angular velocity ω = 2π/T; for a pendulum T = 2π√(L/g), where L is the length and g the acceleration due to gravity."},
  ],
  tf:[
    {s:"A projectile's horizontal velocity changes as it flies.", a:"false", why:"No horizontal force acts, so the horizontal velocity stays constant; only the vertical velocity changes."},
    {s:"The centripetal force on a whirling stone acts outward, away from the centre.", a:"false", why:"Centripetal force acts toward the centre of the circle; the outward feeling on a bend is due to inertia."},
    {s:"A body moving in a circle at constant speed has a changing velocity.", a:"true", why:"Velocity includes direction, and the direction changes every instant on the circle."},
    {s:"In simple harmonic motion the acceleration is proportional to the displacement.", a:"true", why:"That proportionality, with the acceleration toward the mean position, defines simple harmonic motion."},
    {s:"The period of a simple pendulum depends on the mass of the bob.", a:"false", why:"T = 2π√(L/g) depends only on the length and on g, not on the mass."},
    {s:"A spinning wheel is an example of rotational motion.", a:"true", why:"Every point of the wheel turns about the fixed axle — the axis of rotation."},
  ],
  classify:{ title:"Sort these motions", groups:[
    {name:"Projectile motion", items:[
      "a level-thrown stone", "a kicked football in flight", "a javelin thrown at an angle"
    ]},
    {name:"Circular motion", items:[
      "the Moon orbiting the Earth", "a stone whirled on a string", "a car on a roundabout"
    ]},
    {name:"Rotational motion", items:[
      "a spinning fan blade", "a wheel about its axle", "the Earth spinning on its axis"
    ]},
    {name:"Simple harmonic motion", items:[
      "a swinging pendulum", "a mass vibrating on a spring", "a plucked guitar string"
    ]},
  ]},
  diagram:{ title:"The path of a projectile", caption:"State what each part of the motion shows.", parts:[
    {p:"Launch point", f:"Where the projectile is thrown, with initial velocity"},
    {p:"Initial horizontal velocity", f:"Stays constant through the whole flight"},
    {p:"Highest point", f:"Vertical velocity is momentarily zero; horizontal velocity remains"},
    {p:"Trajectory", f:"The parabolic path traced by the projectile"},
    {p:"Range", f:"The horizontal distance from launch to landing"},
  ]},
  experiment:{
    title:"The simple pendulum",
    aim:"To investigate how the period of a pendulum depends on its length.",
    materials:[
      "A string and a small bob (a nut or stone)", "A retort stand and clamp", "A stopwatch",
      "A metre rule"
    ],
    steps:[
      "Tie the bob to the string and suspend it from the clamp.",
      "Measure the length L from the suspension point to the centre of the bob.",
      "Displace the bob slightly (about 10°) and release it to swing steadily.",
      "Time 20 complete oscillations and divide by 20 to find the period T.",
      "Repeat for five different lengths and plot T² against L.",
    ],
    expect:"The graph of T² against L is a straight line through the origin: doubling the length increases the period, with T = 2π√(L/g).",
    why:"For small swings the pendulum moves in simple harmonic motion, whose period depends only on the length and on g — not on the mass of the bob or the size of the swing — so T² is proportional to L."
  },
  worked:[
    {q:"A ball rolls off a table 1.25 m high with a horizontal speed of 4 m/s. How long does it take to land, and how far from the table does it strike the floor? (g = 10 m/s²)", steps:[
      "Vertically: s = ½gt² → 1.25 = ½ × 10 × t²", "t² = 0.25, so t = 0.5 s",
      "Horizontally: range = 4 × 0.5"
    ], a:"0.5 s; it lands 2 m from the table"},
    {q:"A stone of mass 0.5 kg is whirled in a circle of radius 1 m at 2 m/s. Find the centripetal force.", steps:[
      "F = mv²/r", "0.5 × 2² ÷ 1"
    ], a:"2 N"},
    {q:"A wheel turns once every 2 s. Find its angular velocity.", steps:[
      "ω = 2π ÷ T", "2π ÷ 2"
    ], a:"π rad/s (≈ 3.14 rad/s)"},
    {q:"A projectile is thrown with horizontal velocity 6 m/s from a height of 45 m. Find its time of fall. (g = 10 m/s²)", steps:[
      "s = ½gt²", "45 = ½ × 10 × t²", "t² = 9"
    ], a:"3 s"},
  ],
  apply:[
    {q:"Why does a stone whirled on a string fly off along the tangent when the string breaks?", a:"While the string held, its pull bent the path into a circle; when it breaks the centripetal force vanishes and the stone continues, by inertia, along the straight-line tangent it had at that instant."},
    {q:"Passengers in a car rounding a bend feel thrown outward, yet no outward force acts on them. Explain.", a:"Their bodies try to continue in a straight line (inertia) while the car turns inward; the door and seat push them inward, and this lack of an outward force is simply inertia in the rotating frame of the car."},
    {q:"A hunter aims his spear directly at a monkey in a tree, and the monkey drops at the instant the spear is thrown. Why can the spear still strike the monkey?", a:"Both spear and monkey fall with the same acceleration g; the spear drops below the straight line by exactly as much as the monkey falls, so they meet."},
  ],
  activities:[
    "Analyze vectors in one and two dimensions with scale drawings",
    "Roll a ball off a table at different speeds and compare the ranges",
    "Whirl a rubber stopper on a string and feel the centripetal force; observe the tangent on release",
    "Compare the spins of a bicycle wheel and a stone on a string (rotational vs circular motion)",
    "Time a pendulum for different lengths and plot T² against L",
    "Solve problems on projectile and circular motion in groups"
  ],
  materials:[
    "Strings, bobs, retort stands, stopwatches and metre rules",
    "Balls, tables and marked floors for projectile work",
    "Rubber stoppers or nuts on strings for circular motion",
    "Graph paper, protractors and calculators"
  ],
  assessment:[
    "Practical work", "Written test", "Problem solving", "Graph work", "Class quiz"
  ]
},
{
  grade:11, period:"II", sem:"One", icon:"🛞",
  title:"Composition and Resolution of Forces",
  subtitle:"Scalars and vectors, the composition and resolution of forces, equilibrium, parallel forces and moments, centre of gravity and friction",
  outcomes:[
    "Recognize the various types of forces, the conditions that bring them to equilibrium, the advantages and disadvantages of friction, and the conditions for the equilibrium of parallel forces",
    "Demonstrate the types of equilibrium"
  ],
  objectives:[
    "Combine force vectors to produce a resultant force",
    "Use the cosine and sine laws in the resolution of forces",
    "Distinguish between resultant and equilibrant force",
    "Demonstrate the two conditions for equilibrium",
    "Distinguish the types of friction and calculate its coefficient",
    "Distinguish between centre of gravity and centre of mass",
    "Apply the principle of moments to parallel forces"
  ],
  note:"Forces are vectors: they add head-to-tail or by the <b>parallelogram</b>, and any force <b>resolves</b> into perpendicular components F cos θ and F sin θ. The single force replacing a set is the <b>resultant</b>; the force balancing them is the <b>equilibrant</b>, equal and opposite to the resultant. A body is in <b>equilibrium</b> when the forces balance (no resultant force) and the <b>moments</b> balance (no resultant torque). <b>Friction</b> opposes motion; its <b>coefficient μ = F ÷ R</b> measures it.",
  study:[
    /* ---- course text: Grade 11, Semester One, Period II — Composition and Resolution of Forces (guide pp. 3-4, 16-18) ---- */
    {k:"h3", t:"Scalars and Vectors"},
    {k:"p", t:"Quantities divide by direction. A **scalar** has magnitude only — mass, time, temperature, speed, energy, distance. A **vector** has magnitude and direction both — force, velocity, acceleration, displacement, weight, momentum. Classify the quantities by the table and represent a vector by an **arrow**: length for magnitude, head for direction."},
    {k:"rule"},
    {k:"h3", t:"Forces — Contact and Non-contact"},
    {k:"p", t:"A **force** is a push or pull, measured in newtons; it may act by **contact** (push, pull, friction, tension, the table propping the book) or **at a distance** (gravitational, magnetic and electrostatic forces). Forces change a body's motion or its shape — the various forms in which forces affect the state of a body."},
    {k:"rule"},
    {k:"h3", t:"Addition of Forces — Resultant and Equilibrant"},
    {k:"p", t:"Combine force vectors to produce the **resultant**: for two forces at an angle, draw the **parallelogram of forces** (or place them **head-to-tail** in a triangle) and measure the diagonal. Where the vectors do not make a right angle, apply the **sine and cosine laws** to compute the resultant. When the resultant is zero, the body is in **equilibrium** — and the single force that balances a known resultant, equal and opposite to it, is the **equilibrant**. Distinguish the two: the resultant is what the forces together do; the equilibrant, what stops them."},
    {k:"p", t:"**Resolve a force** into perpendicular **components** — F cos θ along a direction, F sin θ across it — letting a slope's downhill pull be separated from the rest."},
    {k:"rule"},
    {k:"h3", t:"Equilibrium and Friction"},
    {k:"p", t:"The **conditions for equilibrium** of a body: the vector sum of all forces acting on it is zero **and** the sum of the moments about any point is zero. Demonstrate the types of equilibrium — **stable** (widened base, low centre), **unstable** (tipped past the point of no return) and **neutral** (the rolling ball). **Friction** — the force that opposes sliding — has its advantages (walking, brakes, grip) and disadvantages (wear and wasted heat); distinguish its types (static, sliding/kinetic, rolling) and calculate its **coefficient** μ = friction ÷ normal reaction. Distinguish **centre of gravity** (where the weight acts) from **centre of mass** (where the mass is spread). In the lab, verify the triangle of forces with spring balances."},
    {k:"rule"},
    {k:"h3", t:"Parallel Forces, Moments and the Centre of Gravity"},
    {k:"p", t:"For **parallel forces** the two conditions for equilibrium apply together: the forces must balance in each direction, and their **moments** (force × perpendicular distance from the line of action) must balance about any point — the **principle of moments**. The **centre of gravity** is the point through which the whole weight of a body appears to act; it coincides with the **centre of mass**, and a body balances when its centre of gravity lies above the point of support — the test of the **types of equilibrium**: **stable** (returns when tilted), **unstable** (topples) and **neutral** (stays put in the new position)."},
  ],

  focus:[
    "Scalar and vector quantities; forces as vectors",
    "Composition of forces: head-to-tail and the parallelogram; the cosine and sine laws",
    "Resolution of forces into perpendicular components",
    "Resultant and equilibrant; the two conditions for equilibrium",
    "Parallel forces and moments (torque); the principle of moments",
    "Centre of gravity and centre of mass; stable, unstable and neutral equilibrium",
    "Friction: its types, advantages and disadvantages; the coefficient of friction"
  ],
  terms:[
    {t:"scalar", d:"a quantity with magnitude but no direction", x:"Speed is a scalar quantity."},
    {t:"vector", d:"a quantity with both magnitude and direction", x:"Velocity is a vector quantity."},
    {t:"force", d:"a push or pull that can change the motion of a body", x:"A force of 10 N pulls the cart."},
    {t:"contact force", d:"a force acting only when bodies touch", x:"Friction and tension are contact forces."},
    {t:"non-contact force", d:"a force acting between bodies that are not touching", x:"Gravity, magnetism and electric force are non-contact."},
    {t:"resultant", d:"the single force that has the same effect as a set of forces", x:"The resultant balances all the other forces."},
    {t:"equilibrium", d:"the state in which the resultant force on a body is zero", x:"A book at rest is in equilibrium."},
    {t:"friction", d:"a force opposing the motion between two touching surfaces", x:"Friction slows a sliding block."},
    {t:"tension", d:"the pulling force transmitted through a rope or string", x:"Tension holds a hanging load."},
    {t:"component", d:"one of the perpendicular parts into which a vector can be split", x:"The horizontal component moves the cart."},
    {t:"newton", d:"the SI unit of force", x:"One newton gives a 1 kg mass an acceleration of 1 m/s²."},
    {t:"parallelogram of forces", d:"a graphical method of adding two forces", x:"The diagonal of the parallelogram is the resultant."},
    {t:"moment", d:"the turning effect of a force, force × perpendicular distance from the point", x:"A moment is measured in newton-metres (N m)."},
    {t:"centre of gravity", d:"the point through which the entire weight of a body appears to act", x:"A metre rule balances at its centre of gravity."},
    {t:"coefficient of friction", d:"the ratio of the friction force to the normal reaction, μ = F ÷ R", x:"Ice has a small coefficient of friction."},
  ],
  facts:[
    {q:"Distinguish a scalar from a vector quantity and give two examples of each.", a:"A scalar has magnitude only (speed, mass, energy); a vector has magnitude and direction (force, velocity, displacement)."},
    {q:"State three contact forces and three non-contact forces.", a:"Contact: friction, tension, normal reaction, air resistance. Non-contact: gravitational force, magnetic force, electrostatic force."},
    {q:"What is meant by the resultant of two forces?", a:"The single force which, acting alone, has exactly the same effect as the two forces together."},
    {q:"State the condition for a body to be in equilibrium under a set of forces.", a:"The resultant (vector sum) of all the forces must be zero."},
    {q:"Explain how the parallelogram method is used to add two forces.", a:"Draw the two forces from the same point at their correct angles; complete the parallelogram; the diagonal from the starting point is the resultant."},
    {q:"A 5 N force acts at 0° and a 5 N force at 90°. What is the magnitude of the resultant?", a:"Resultant = √(5² + 5²) = √50 = 7.07 N, at 45° to either force."},
    {q:"What is the unit of force and how is it defined?", a:"The newton (N); one newton is the force that gives a mass of one kilogram an acceleration of one metre per second squared."},
    {q:"Define the centre of gravity of a body.", a:"The point through which the whole weight of the body appears to act whatever its orientation; a body balances when supported directly beneath its centre of gravity."},
    {q:"Distinguish between stable, unstable and neutral equilibrium.", a:"Stable: the body returns to its original position after a small tilt (a cone on its base); unstable: it topples further away (a cone balanced on its point); neutral: it stays in the new position (a cone on its side)."},
  ],
  tf:[
    {s:"Speed is a vector quantity.", a:"false", why:"Speed has only magnitude; velocity has magnitude and direction and is the vector."},
    {s:"Gravity is a non-contact force.", a:"true", why:"Gravitational attraction acts between masses even when they are not touching."},
    {s:"The resultant of two forces is always their algebraic sum.", a:"false", why:"Forces are vectors; the resultant depends on the angle between them and is found by vector addition, not simple addition."},
    {s:"A body at rest is in equilibrium.", a:"true", why:"At rest the resultant force on it is zero."},
    {s:"Friction always opposes motion.", a:"true", why:"Friction acts in the direction opposite to the motion or attempted motion."},
    {s:"Mass is a vector quantity.", a:"false", why:"Mass has magnitude only and is a scalar."},
  ],
  classify:{ title:"Sort these quantities", groups:[
    {name:"Scalar quantities", items:[
      "mass", "speed", "energy", "distance", "time"
    ]},
    {name:"Vector quantities", items:[
      "force", "velocity", "displacement", "acceleration", "weight"
    ]},
    {name:"Contact forces", items:[
      "friction", "tension", "air resistance", "normal reaction"
    ]},
    {name:"Non-contact forces", items:[
      "gravity", "magnetic force", "electrostatic force"
    ]},
  ]},
  diagram:{ title:"Resolving a force into components", caption:"State what each arrow represents.", parts:[
    {p:"Force F", f:"The original force making an angle θ with the horizontal"},
    {p:"Horizontal component", f:"F·cosθ — the part of the force acting along the horizontal"},
    {p:"Vertical component", f:"F·sinθ — the part of the force acting vertically"},
    {p:"Angle θ", f:"The angle between the force and the horizontal"},
    {p:"Point of application", f:"Where the force acts on the body"},
  ]},
  experiment:{
    title:"The triangle of forces",
    aim:"To show that three forces acting on a point can balance and form a closed triangle.",
    materials:[
      "Three spring balances", "A small ring", "Three pieces of string",
      "A drawing board with drawing pins"
    ],
    steps:[
      "Tie three strings to the ring and attach a spring balance to each.",
      "Pull the three balances in different directions so the ring stays exactly at the centre of the board.",
      "Read and record the three forces.",
      "Draw the three forces head-to-tail as vectors to scale.",
      "Observe what shape the three arrows form when the ring is balanced.",
    ],
    expect:"When the ring is at rest the three arrows drawn head-to-tail form a closed triangle. This shows that the three forces balance because their resultant is zero.",
    why:"The triangle of forces is the graphical form of equilibrium: if three forces acting on a point balance, they can be represented by the three sides of a closed triangle drawn in the correct directions, and the vector sum is zero."
  },
  worked:[
    {q:"Two forces, 6 N east and 8 N north, act on a point. Find the magnitude of the resultant.", steps:[
      "Right-angled: resultant² = 6² + 8²", "36 + 64 = 100", "√100"
    ], a:"10 N"},
    {q:"A force of 10 N acts at 60° to the horizontal. Find its horizontal and vertical components.", steps:[
      "Horizontal = 10 cos60° = 10 × 0.5", "Vertical = 10 sin60° = 10 × 0.866"
    ], a:"5 N horizontal, 8.66 N vertical"},
    {q:"Three forces, 3 N, 4 N and 5 N, balance. What is the resultant?", steps:[
      "Equilibrium means resultant = 0", "All forces balance"
    ], a:"0 N"},
    {q:"A 12 N force east and a 5 N force west act on a body. Find the resultant.", steps:[
      "Same line, opposite directions", "12 − 5"
    ], a:"7 N east"},
    {q:"Two children of weight 300 N and 200 N sit on a uniform see-saw 4 m long. Where is the pivot for balance?", steps:[
      "The 300 N child sits at one end; let the 200 N child sit at the other",
      "Moments about the pivot: 300 × d = 200 × (4 − d)", "300d = 800 − 200d, so 500d = 800"
    ], a:"1.6 m from the heavier child"},
  ],
  apply:[
    {q:"Why is it easier to pull a loaded cart using a rope at a small angle to the horizontal than to push it at the same angle?", a:"Pulling upward at a small angle gives a useful horizontal component and slightly reduces the normal reaction and friction, while pushing presses the cart down and increases friction."},
    {q:"A lamp hangs from a ceiling and does not fall. What can you say about the forces on it?", a:"The lamp is in equilibrium: the upward tension in the wire exactly balances its downward weight, so the resultant force is zero."},
    {q:"Why do we resolve a force into perpendicular components?", a:"Perpendicular components act independently and never interfere, so each can be handled by simple arithmetic and the effects added separately."},
  ],
  activities:[
    "Construct vectors with magnitudes in the same and opposite directions to find the resultant",
    "Demonstrate composition and resolution of forces using a force table",
    "Discuss the coefficient of kinetic and static friction on an inclined plane, and methods of reducing friction",
    "Use pencils as rollers under a wooden block to overcome friction",
    "Find the centre of gravity of a lamina by suspension and check its types of equilibrium",
    "Verify the two conditions of equilibrium with parallel forces on a metre rule"
  ],
  materials:[
    "Weights, pulleys, force boards and force tables", "Spring balances and protractors",
    "Inclined planes, wooden blocks and spring balances",
    "Metre rules, knife edges and lamina shapes"
  ],
  assessment:[
    "Practical work", "Written test", "Problem solving", "Scale drawing", "Class quiz"
  ]
},
{
  grade:11, period:"III", sem:"One", icon:"💥",
  title:"Momentum and its Conservation",
  subtitle:"Linear momentum and impulse, elastic and inelastic collisions, and the conservation of linear and angular momentum",
  outcomes:[
    "Recognize the dangers in the collision of moving objects and take measures in avoiding them"
  ],
  objectives:[
    "Analyze the nature and the effect of momentum", "Distinguish between impulse and momentum",
    "Distinguish between elastic and inelastic collisions",
    "Distinguish between the laws of conservation of linear and angular momentum and their applications"
  ],
  note:"<b>Momentum</b> p = mv, measured in kg m/s. <b>Impulse</b> (force × time) equals the change of momentum — which is why crumpling bumpers and airbags reduce forces by lengthening times. In a closed system the <b>law of conservation of momentum</b> holds the total momentum constant through every collision: <b>elastic</b> collisions keep kinetic energy too, <b>inelastic</b> ones lose it to heat and sound. <b>Angular momentum</b> is conserved the same way — the skater spins faster as she draws her arms in.",
  study:[
    /* ---- course text: Grade 11, Semester One, Period III — Momentum and its Conservation (guide pp. 18-19) ---- */
    {k:"h3", t:"The Nature and Effect of Momentum"},
    {k:"p", t:"Analyze the nature and effect of **momentum**: p = mv, measured in **kg m/s** — the quantity of motion a body carries. A loaded truck at 30 km/h is harder to stop than a car at the same speed because its mass gives it more momentum; the danger in collisions of moving objects comes from momentum being destroyed in a moment, which demands a large force. This is the physics of the dangers on our roads and of the measures — buffers, crumple zones, seat belts — that avoid them."},
    {k:"rule"},
    {k:"h3", t:"Impulse and Momentum"},
    {k:"p", t:"Distinguish **impulse** from momentum: **impulse = force × time = change of momentum** (Ft = mv − mu). The crumpling bumper lengthens the time and so shrinks the force — the use of seatbelts and airbags, and the reason a cricketer draws back his hands while catching. Conversely, a short collision time (the unyielding wall) means a huge force, and it is force that does the damage."},
    {k:"rule"},
    {k:"h3", t:"Elastic and Inelastic Collisions"},
    {k:"p", t:"Distinguish the collision types: in **elastic collisions** both momentum and kinetic energy are conserved (two billiard balls, gas molecules); in **inelastic collisions** momentum is conserved but kinetic energy is not — the bodies may stick together and energy leaves as heat, sound and deformation. In every collision, elastic or inelastic, the **total momentum is conserved**."},
    {k:"rule"},
    {k:"h3", t:"The Conservation of Linear and Angular Momentum"},
    {k:"p", t:"The **law of conservation of (linear) momentum**: for interacting bodies with no external force, total momentum before = total momentum after — the working rule for every collision and explosion problem, and the principle by which the rocket moves in empty space (exhaust back, rocket forward, total unchanged). **Angular momentum** is likewise conserved when no external torque acts: the skater spinning faster with arms drawn in, the diver tucking to somersault, the Earth keeping its spin."},
  ],

  focus:[
    "Linear momentum p = mv and its unit", "Impulse = force × time = change of momentum",
    "Elastic and inelastic collisions compared",
    "The law of conservation of linear momentum and its applications",
    "Explosions and recoil; rockets in empty space", "Angular momentum and its conservation"
  ],
  terms:[
    {t:"momentum", d:"the product of mass and velocity, p = mv", x:"Momentum is conserved in a collision."},
    {t:"impulse", d:"force multiplied by time, equal to the change of momentum", x:"Impulse = F × t = change in momentum."},
    {t:"elastic collision", d:"a collision in which kinetic energy is conserved", x:"Two billiard balls collide almost elastically."},
    {t:"inelastic collision", d:"a collision in which kinetic energy is not conserved", x:"A mud ball that sticks is inelastic."},
    {t:"conservation of momentum", d:"the total momentum of a closed system stays constant", x:"Momentum before a collision equals momentum after."},
    {t:"recoil", d:"the backward movement of a gun or engine as momentum is conserved", x:"The recoil of a gun balances the bullet's momentum."},
    {t:"angular momentum", d:"the momentum of a rotating body, conserved when no external torque acts", x:"A skater spins faster drawing her arms in."},
    {t:"explosion", d:"an event in which parts of a body fly apart with equal and opposite momenta", x:"The fragments of a firecracker share the momentum."},
  ],
  facts:[
    {q:"Define momentum and state its unit.", a:"Momentum is the product of mass and velocity, p = mv, measured in kg m/s."},
    {q:"State the law of conservation of momentum.", a:"In a closed system the total momentum before a collision equals the total momentum after it, provided no external force acts."},
    {q:"Distinguish between impulse and momentum.", a:"Momentum is the product of mass and velocity (p = mv); impulse is the product of force and time (F × t), and it equals the change of momentum an object undergoes."},
    {q:"Distinguish between elastic and inelastic collisions.", a:"In an elastic collision both momentum and kinetic energy are conserved; in an inelastic collision momentum is conserved but kinetic energy is lost as heat, sound and deformation."},
    {q:"State the law of conservation of angular momentum with one example.", a:"When no external torque acts on a rotating body its angular momentum stays constant; a skater who draws in her arms spins faster because her mass moves closer to the axis."},
    {q:"A 1000 kg car at rest is struck by a 2000 kg truck moving at 5 m/s, and the two lock together. Find their common speed.", a:"Momentum before = 2000 × 5 = 10 000 kg m/s; after, the combined 3000 kg moves at 10 000 ÷ 3000 ≈ 3.3 m/s."},
  ],
  tf:[
    {s:"Momentum equals mass divided by velocity.", a:"false", why:"Momentum is the product of mass and velocity, p = mv."},
    {s:"In an elastic collision kinetic energy is conserved.", a:"true", why:"That is the definition of an elastic collision."},
    {s:"Momentum is conserved only in elastic collisions.", a:"false", why:"Momentum is conserved in all collisions of a closed system; it is kinetic energy that is lost in inelastic ones."},
    {s:"A gun recoils because total momentum must stay zero.", a:"true", why:"The bullet's forward momentum is balanced by the gun's equal backward momentum."},
    {s:"Angular momentum increases when a spinning skater draws in her arms.", a:"false", why:"Her angular momentum stays constant; her spin rate increases because her mass moves closer to the axis."},
    {s:"Impulse is measured in newton-seconds.", a:"true", why:"Impulse = force × time, and N × s equals kg m/s, the unit of momentum."},
  ],
  classify:{ title:"Sort these collision and momentum statements", groups:[
    {name:"Collision types", items:[
      "elastic (kinetic energy conserved)", "inelastic (kinetic energy lost)"
    ]},
    {name:"About momentum", items:[
      "p = mv", "measured in kg m/s", "conserved in every collision of a closed system"
    ]},
    {name:"About impulse", items:[
      "force × time", "equals the change of momentum",
      "lengthening collision time reduces the force"
    ]},
    {name:"Safety measures from impulse", items:[
      "seat belts", "airbags", "crumple zones"
    ]},
  ]},
  diagram:{ title:"Two trolleys colliding", caption:"State what each stage of the collision shows.", parts:[
    {p:"Trolley A before", f:"Mass m₁ moving with velocity u₁ toward B"},
    {p:"Trolley B before", f:"Mass m₂ moving with velocity u₂ (here at rest)"},
    {p:"Collision", f:"The trolleys push on each other with equal and opposite forces"},
    {p:"After (elastic)", f:"The trolleys separate; total momentum unchanged"},
    {p:"After (inelastic)", f:"The trolleys move off together at a common velocity; momentum still unchanged"},
  ]},
  experiment:{
    title:"Conservation of momentum with trolleys or carts",
    aim:"To verify that the total momentum of a closed system is conserved in a collision.",
    materials:[
      "Two trolleys or toy cars of different masses", "A level runway or smooth table",
      "Sticky tape or velcro (for inelastic collisions)", "A stopwatch or ticker timer",
      "Known masses"
    ],
    steps:[
      "Give trolley A a push so it rolls at a steady measured speed toward trolley B at rest.",
      "Record the speed of A before impact (distance ÷ time).",
      "Let A strike B with the velcro faces so they stick, and measure the common speed after.",
      "Repeat with an extra mass first on A, then on B.",
      "Compare total momentum before (m₁u₁) with total momentum after ((m₁ + m₂)v) each time.",
    ],
    expect:"Within the limits of measurement, the momentum after the collision equals the momentum before it in every trial, elastic or inelastic.",
    why:"The trolleys push on each other with equal and opposite forces (Newton's third law), so no net external force changes the total momentum — the law of conservation of momentum."
  },
  worked:[
    {q:"A body of mass 2 kg moves at 5 m/s. Find its momentum.", steps:[
      "p = mv", "2 × 5"
    ], a:"10 kg m/s"},
    {q:"A 2 kg trolley at 3 m/s catches and sticks to a 1 kg trolley at rest. Find their common velocity.", steps:[
      "Momentum before = (2 × 3) + (1 × 0) = 6 kg m/s", "After: (2 + 1) × v = 6", "v = 6 ÷ 3"
    ], a:"2 m/s"},
    {q:"A force of 50 N acts on a ball for 0.1 s. Find the impulse and the change of momentum.", steps:[
      "Impulse = F × t", "50 × 0.1"
    ], a:"5 N s, i.e. 5 kg m/s of momentum change"},
    {q:"A 0.5 kg ball hits a wall at 8 m/s and rebounds at 6 m/s. Find the change of momentum.", steps:[
      "Taking rebound direction as positive: Δp = m(v − u)", "0.5 × (6 − (−8))"
    ], a:"7 kg m/s"},
  ],
  apply:[
    {q:"Why do seat belts and airbags save lives in a crash?", a:"They increase the time over which the momentum of the passenger is brought to zero, so the force (impulse ÷ time) is much smaller and injury is reduced."},
    {q:"Why does a rocket move forward in empty space where there is nothing to push against?", a:"By the law of conservation of momentum, the exhaust gases are pushed backwards and the rocket moves forward equally, so the total momentum stays zero."},
    {q:"Why does a gun kick backward when it is fired?", a:"By conservation of momentum, the forward momentum given to the bullet must be balanced by an equal backward momentum given to the gun — the recoil."},
  ],
  activities:[
    "Discuss the nature and effect of momentum and of impulse in groups",
    "Construct an experiment verifying conservation of momentum using trolleys or a pendulum",
    "Construct the steps (equations) for calculating elastic and inelastic collisions",
    "Design momentum carts to demonstrate elastic and inelastic collision",
    "Research how crumple zones, seat belts and airbags use impulse to save lives"
  ],
  materials:[
    "Trolleys or carts and a level runway", "Ticker timers or stopwatches and metre rules",
    "Known slotted masses and sticky tape", "Newton's cradle if available"
  ],
  assessment:[
    "Practical work", "Written test", "Problem solving", "Group presentation", "Class quiz"
  ]
},
{
  grade:11, period:"IV", sem:"Two", icon:"🔥",
  title:"Heat",
  subtitle:"Specific heat and specific heat capacity, latent heat of fusion and vaporisation, heat transfer and the laws of heat exchange, and the vacuum flask",
  outcomes:[
    "Recognize and appreciate the importance and effect of heat energy in our environment"
  ],
  objectives:[
    "Elaborate the concept and characteristics of heat",
    "Distinguish between specific heat and specific heat capacity",
    "Distinguish between the methods of heat transfer and the laws of heat exchange",
    "Discuss heat transfer in a vacuum flask", "Solve problems using Q = mcΔT and Q = mL"
  ],
  note:"The <b>specific heat capacity</b> c of a substance is the heat needed to raise 1 kg of it by one degree: <b>Q = mcΔT</b>. During a change of state the temperature stays constant while <b>latent heat</b> is taken in or given out: <b>Q = mL</b>. Heat moves by <b>conduction</b>, <b>convection</b> and <b>radiation</b>, and when bodies mix in a calorimeter the <b>law of heat exchange</b> balances heat lost against heat gained — the working rule the vacuum flask fights with its vacuum, silvered walls and cork.",
  study:[
    /* ---- course text: Grade 11, Semester Two, Period IV — Heat (guide pp. 20-21) ---- */
    {k:"h3", t:"The Concept and Characteristics of Heat"},
    {k:"p", t:"**Heat** is a form of energy — the energy that flows from a hotter body to a colder one because of the **temperature difference**, always flowing hot to cold and never of its own accord the other way. Its characteristics: heat is measured in **joules**, it flows by **conduction, convection and radiation**, it changes the temperature of a body or its state (melting, boiling), and it can be put to work in **heat engines**. The **internal energy** of a body is the total kinetic and potential energy of its particles; heating raises it."},
    {k:"h3", t:"Specific Heat Capacity and Latent Heat"},
    {k:"p", t:"The **specific heat capacity** c is the heat needed to raise 1 kg of a substance by one degree — Q = mcΔT; water's is high (4200 J kg⁻¹ K⁻¹), which is why the sea moderates the coastal air and why water cools engines. The **law of heat exchange**: when bodies mix in a calorimeter, heat lost by the hot equals heat gained by the cold. The **specific latent heat** is the heat of a change of state at fixed temperature — **fusion** for melting and freezing (L_f: Q = mL_f), **vaporization** for boiling and condensing (L_v: Q = mL_v). Apply them on the heating-curve numbers in the lab."},
    {k:"rule"},
    {k:"h3", t:"Heat Transfer and the Vacuum Flask"},
    {k:"p", t:"Discuss heat transfer in the **vacuum flask**: the **vacuum** stops conduction and convection; the **silvered walls** return radiation; the **cork stopper** seals what the glass cannot. A well-made flask keeps the soup hot and the ice unmelted by fighting all three transfers at once."},
  ],

  focus:[
    "The concept and characteristics of heat",
    "Specific heat and specific heat capacity; Q = mcΔT",
    "Latent heat of fusion and of vaporisation; Q = mL",
    "The methods of heat transfer: conduction, convection and radiation",
    "The laws of heat exchange; calorimeter experiments", "Heat transfer in the vacuum flask"
  ],
  terms:[
    {t:"specific heat capacity", d:"the heat needed to raise the temperature of 1 kg of a substance by 1 °C", x:"Water has a high specific heat capacity."},
    {t:"latent heat", d:"heat absorbed or released during a change of state without a temperature change", x:"Melting ice absorbs latent heat."},
    {t:"specific latent heat of fusion", d:"heat to change 1 kg of solid to liquid at the melting point", x:"Fusion latent heat melts ice to water."},
    {t:"specific latent heat of vaporisation", d:"heat to change 1 kg of liquid to vapour at the boiling point", x:"Vaporisation latent heat turns water to steam."},
    {t:"conduction", d:"heat transfer through a material without the material itself moving", x:"A metal spoon heats by conduction."},
    {t:"convection", d:"heat transfer by the movement of a fluid", x:"Warm air rises by convection."},
    {t:"radiation", d:"heat transfer by infrared waves without any medium", x:"The Sun heats Earth by radiation."},
  ],
  facts:[
    {q:"Write the formula for heat to change temperature and define each term.", a:"Q = mcΔT, where Q is heat, m is mass, c is specific heat capacity and ΔT is the temperature rise."},
    {q:"What is specific latent heat and why is there no temperature change during a change of state?", a:"It is the heat required to change the state of 1 kg of a substance at constant temperature; the energy is used to break or form the bonds between particles rather than to raise their kinetic energy, so the temperature does not change."},
    {q:"Name the three methods of heat transfer and give one example of each.", a:"Conduction — heating a metal spoon in a hot liquid; convection — warm air rising in a room; radiation — heat from the Sun reaching Earth through space."},
    {q:"How much heat is needed to raise the temperature of 2 kg of water by 5 °C? (c = 4200 J/kg°C)", a:"Q = 2 × 4200 × 5 = 42 000 J."},
    {q:"Why does a black surface radiate and absorb heat better than a shiny one?", a:"Dull black surfaces are better absorbers and emitters of radiation, while shiny surfaces reflect heat and radiation."},
  ],
  tf:[
    {s:"The heat to change temperature is given by Q = mcΔT.", a:"true", why:"That is the standard formula."},
    {s:"During melting the temperature of a substance remains constant.", a:"true", why:"Latent heat is absorbed to break bonds without raising the temperature."},
    {s:"Heat can be transferred by radiation even through a vacuum.", a:"true", why:"Radiation needs no medium; the Sun heats Earth through empty space."},
    {s:"Convection can take place in a solid.", a:"false", why:"Convection needs a fluid that can move; solids transfer heat mainly by conduction."},
    {s:"Water has a low specific heat capacity.", a:"false", why:"Water has a very high specific heat capacity of about 4200 J/kg°C."},
  ],
  classify:{ title:"Sort these statements", groups:[
    {name:"Methods of heat transfer", items:[
      "conduction", "convection", "radiation"
    ]},
    {name:"Heat formulas", items:[
      "Q = mcΔT", "Q = mL"
    ]},
    {name:"Good conductors", items:[
      "copper", "aluminium", "iron"
    ]},
    {name:"Good insulators", items:[
      "wood", "air", "plastic", "cotton"
    ]},
  ]},
  diagram:{ title:"The vacuum flask", caption:"State how each part stops heat from escaping or entering.", parts:[
    {p:"Double glass wall", f:"Thin glass vessel holding the drink or ice"},
    {p:"Vacuum between the walls", f:"Stops conduction and convection — there is no medium to carry heat"},
    {p:"Silvered surfaces", f:"Reflect radiation back, cutting heat loss by radiation"},
    {p:"Cork or plastic stopper", f:"Insulates the top and stops convection through the mouth"},
    {p:"Case and cap", f:"Protects the fragile glass and holds the stopper firm"},
  ]},
  experiment:{
    title:"Heating curve of a substance",
    aim:"To plot how temperature changes with time as ice warms, melts and then boils.",
    materials:[
      "Ice in a beaker", "A thermometer", "A Bunsen burner or hot plate", "A stopwatch",
      "Graph paper"
    ],
    steps:[
      "Place crushed ice in a beaker and record its temperature.",
      "Heat gently and record the temperature every minute.",
      "Continue until the water has melted and then boiled for several minutes.",
      "Plot a graph of temperature against time.",
      "Identify the flat parts of the curve where the temperature stopped changing.",
    ],
    expect:"The curve shows a rising portion as the ice warms, then a flat part at 0 °C while the ice melts (latent heat of fusion), then a rising portion as the water warms, then a flat part at 100 °C while it boils (latent heat of vaporisation).",
    why:"The flat parts show that during a change of state the temperature stays constant while heat energy is absorbed as latent heat to change the state, confirming the ideas of specific heat capacity and latent heat."
  },
  worked:[
    {q:"Find the heat needed to raise 2 kg of water from 20 °C to 30 °C (c = 4200 J/kg°C).", steps:[
      "ΔT = 30 − 20 = 10 °C", "Q = mcΔT = 2 × 4200 × 10"
    ], a:"84 000 J"},
    {q:"How much heat is needed to melt 0.5 kg of ice? (L = 3.34 × 10⁵ J/kg)", steps:[
      "Q = mL", "0.5 × 3.34 × 10⁵"
    ], a:"167 000 J"},
    {q:"A 3 kg metal block warms by 25 °C with 30 000 J. Find its specific heat capacity.", steps:[
      "c = Q ÷ (mΔT)", "30000 ÷ (3 × 25)"
    ], a:"400 J/kg°C"},
  ],
  apply:[
    {q:"Why does a coastal town stay cooler in summer than an inland town?", a:"Water has a high specific heat capacity and heats up slowly, and sea breezes bring cooler air, moderating the coastal temperature."},
    {q:"Why do food pots use black, rough bottoms?", a:"Dull black surfaces absorb radiation better, so more heat from the flame is transferred into the pot."},
  ],
  activities:[
    "Conduct calorimeter heat-exchange experiments and check the law of heat exchange",
    "Estimate and calculate the specific heat capacity of a metal block",
    "Examine the equations and calculate the latent heat of fusion and of vaporisation",
    "Demonstrate the principles of heat engines if a model is available",
    "Take apart (or study a diagram of) a vacuum flask and explain each part",
    "Solve problems on specific heat and latent heat in groups"
  ],
  materials:[
    "Calorimeters, thermometers, Bunsen burners and stirrers",
    "Metal blocks, known masses and ice", "Candle, smoke and glass jars for convection",
    "Black and shiny cans and a lamp for radiation; a vacuum flask"
  ],
  assessment:[
    "Practical work", "Written test", "Problem solving", "Lab report", "Class quiz"
  ]
},
{
  grade:11, period:"V", sem:"Two", icon:"🔊",
  title:"Waves",
  subtitle:"The nature, characteristics and properties of waves, types of waves, sound production and transmission, the Doppler effect, vibrations in strings and tubes, and beats",
  outcomes:[
    "Recognize and appreciate the importance of the nature, characteristics and components of waves in daily activities"
  ],
  objectives:[
    "Analyze the characteristics, concept and components of waves",
    "Elaborate on the properties and the categories of waves",
    "Design methods of production and transmission of sound waves and their applications",
    "Compute the speed of sound relative to its temperature", "Analyze the Doppler effect",
    "Distinguish between loudness and intensity, intensity and intensity level, and music and noise",
    "Analyze vibrations in strings and tubes (pipes) and in beats"
  ],
  note:"A <b>wave</b> is a disturbance that transfers energy without transferring matter. In a <b>transverse</b> wave the particles vibrate at right angles to the direction of travel (water waves, light); in a <b>longitudinal</b> wave they vibrate along it (sound). The <b>wave equation</b> is <b>v = fλ</b>, where v is speed, f frequency and λ wavelength. <b>Sound</b> is a longitudinal wave produced by a vibrating source and needs a medium; it cannot travel in a vacuum.",
  study:[
    /* ---- course text: Grade 11, Semester Two, Period V — Waves (guide pp. 22-23) ---- */
    {k:"h3", t:"The Nature of Waves"},
    {k:"p", t:"A **wave** carries energy from place to place without carrying matter — the sea's rollers travel, the water only bobs. The **characteristics and components**: **amplitude** (greatest displacement), **wavelength λ** (distance between crests), **frequency f** (vibrations each second, in hertz), **period T = 1/f**, and speed **v = fλ**. The **types of waves:** **transverse** (vibration across the travel — water and light) and **longitudinal** (vibration along it — sound); and **mechanical** waves need a medium where **electromagnetic** waves need none. Elaborate the properties: reflection, refraction, diffraction and interference."},
    {k:"rule"},
    {k:"h3", t:"Sound — Production, Transmission, Speed"},
    {k:"p", t:"**Sound** is a longitudinal wave born of a vibrating source that needs a material medium — it passes through air, water and iron, but never through a vacuum. Compute the **speed of sound relative to the temperature of the air** — about 340 m/s at 15 °C, rising roughly 0.6 m/s for each degree; sound also travels fastest in solids and slowest in gases. **Use echoes to measure it** in the lab fieldwork: stand a known distance from a wall, clap in rhythm with the returning echo, and count the claps timed — the round trip of sound in one clap-time gives the speed."},
    {k:"rule"},
    {k:"h3", t:"The Qualities of Sound"},
    {k:"p", t:"Distinguish the **loudness** of sound from its **intensity**: intensity is the physical power per unit area (its logarithm the **intensity level** in decibels), loudness the ear's answer to it. **Pitch** follows frequency; **quality (timbre)** separates the drum from the flute at the same note. Vibrations in **strings** (plucked and bowed, shorter and tighter giving higher notes) and in **tubes** (the organ pipe's stationary waves, open and closed) make the music; and when two close frequencies sound together they produce **beats** — the slow wax-and-wane as the waves slip in and out of step."},
    {k:"rule"},
    {k:"h3", t:"The Doppler Effect"},
    {k:"p", t:"The **Doppler effect**: as a source approaches, its waves pile up and the pitch/rises; as it recedes, they stretch and the pitch falls — the taxi horn that drops as it passes. Design the methods of production and transmission of sound waves with applications: the sonar's echo, the doctor's ultrasound scan, the hall's acoustics."},
    {k:"rule"},
    {k:"h3", t:"Vibrations in Strings and Tubes; Beats"},
    {k:"p", t:"Every musical instrument is a vibrating source: **strings** (guitar, kora) vibrate with a frequency set by length, tension and thickness, and **pipes** (flute, horn, whistle) vibrate in the air column within — **closed pipes** and **open pipes** give their own series of notes, longer or looser giving lower pitch. Stringed and non-stringed (percussion and wind) instruments differ in how they set the vibration going. When two notes of nearly equal frequency sound together the combined loudness rises and falls — **beats** — at a rate equal to the difference of the two frequencies, the trick piano tuners use; **noise** is a jumble of unrelated frequencies where **music** is orderly."},
  ],

  focus:[
    "The nature, characteristics and properties of waves",
    "Types of waves: transverse and longitudinal; mechanical and electromagnetic",
    "The wave equation v = fλ and its terms",
    "Sound: production, characteristics and transmission; echo",
    "The speed of sound relative to temperature",
    "Loudness and intensity; intensity and intensity level; music and noise",
    "The Doppler effect", "Vibrations in strings and tubes (pipes); beats"
  ],
  terms:[
    {t:"wave", d:"a disturbance that transfers energy without transferring matter", x:"A wave travels along a rope."},
    {t:"transverse wave", d:"a wave in which particles vibrate at right angles to the direction of travel", x:"Water ripples are transverse waves."},
    {t:"longitudinal wave", d:"a wave in which particles vibrate along the direction of travel", x:"Sound is a longitudinal wave."},
    {t:"wavelength", d:"the distance between two successive crests or compressions", x:"Wavelength is measured in metres."},
    {t:"frequency", d:"the number of complete waves per second, measured in hertz", x:"A frequency of 50 Hz means 50 waves per second."},
    {t:"period", d:"the time for one complete wave, equal to 1 ÷ frequency", x:"Period is measured in seconds."},
    {t:"amplitude", d:"the maximum displacement of a particle from its rest position", x:"Loud sounds have large amplitude."},
    {t:"hertz", d:"the unit of frequency, one wave per second", x:"Frequency is measured in hertz (Hz)."},
    {t:"echo", d:"the reflection of sound heard after the original sound", x:"An echo returns from a distant wall."},
    {t:"compression", d:"a region of high pressure in a longitudinal wave", x:"A compression is a crowded region of particles."},
    {t:"rarefaction", d:"a region of low pressure in a longitudinal wave", x:"A rarefaction is a spread-out region."},
    {t:"audio range", d:"the range of frequencies the human ear can hear", x:"The audio range is about 20 Hz to 20 000 Hz."},
    {t:"beat", d:"the regular rise and fall of loudness heard when two nearly equal frequencies sound together", x:"Two tuning forks of 256 Hz and 258 Hz give 2 beats per second."},
    {t:"closed pipe", d:"a pipe closed at one end, sounding odd harmonics", x:"A closed pipe sounds an octave lower than an open pipe of the same length."},
  ],
  facts:[
    {q:"Distinguish a transverse from a longitudinal wave and give one example of each.", a:"In a transverse wave the particles vibrate at right angles to the direction of travel (water waves, light); in a longitudinal wave they vibrate along the direction of travel (sound)."},
    {q:"Define wavelength, frequency and period.", a:"Wavelength is the distance between two successive crests or compressions; frequency is the number of complete waves per second; period is the time for one complete wave (T = 1/f)."},
    {q:"State the wave equation and define its terms.", a:"v = fλ, where v is wave speed (m/s), f is frequency (Hz) and λ is wavelength (m)."},
    {q:"A wave has a frequency of 100 Hz and a wavelength of 3 m. Find its speed.", a:"v = fλ = 100 × 3 = 300 m/s."},
    {q:"Why can sound not travel through a vacuum?", a:"Sound is a longitudinal wave that needs particles to vibrate and pass on the disturbance; a vacuum has no particles."},
    {q:"What is an echo and how is it useful?", a:"An echo is the reflection of sound; it is used in echo sounding to measure the depth of the sea and in estimating distances."},
    {q:"State the range of frequencies audible to a normal human ear.", a:"Roughly 20 Hz to 20 000 Hz."},
    {q:"What are beats and how is the beat frequency found?", a:"Beats are the periodic swelling and fading of sound heard when two notes of nearly equal frequency sound together; the beat frequency equals the difference of the two frequencies."},
    {q:"Distinguish between stringed and non-stringed instruments.", a:"Stringed instruments (guitar, kora, violin) make their notes with vibrating stretched strings; non-stringed instruments — wind (flute, horn) and percussion (drum, bell, cymbal) — vibrate air columns or struck surfaces."},
  ],
  tf:[
    {s:"Sound is a longitudinal wave.", a:"true", why:"Sound travels by compressions and rarefactions along its direction of travel."},
    {s:"Light is a transverse wave.", a:"true", why:"Light vibrates at right angles to its direction of travel."},
    {s:"The period of a wave is the number of waves per second.", a:"false", why:"That is the frequency; the period is the time for one wave (T = 1/f)."},
    {s:"Wave speed equals frequency multiplied by wavelength.", a:"true", why:"That is the wave equation v = fλ."},
    {s:"Sound can travel through empty space.", a:"false", why:"Sound needs a medium such as air, water or a solid."},
    {s:"An echo is produced by the reflection of sound.", a:"true", why:"An echo is reflected sound returning to the listener."},
    {s:"Two tuning forks of 256 Hz and 260 Hz sounded together give 4 beats per second.", a:"true", why:"Beat frequency is the difference of the frequencies: 260 − 256 = 4 Hz."},
    {s:"A longer, looser guitar string gives a higher note.", a:"false", why:"Length and looseness lower the frequency of vibration; tighter and shorter strings give higher notes."},
  ],
  classify:{ title:"Sort these waves and terms", groups:[
    {name:"Transverse waves", items:[
      "light", "water ripple", "radio wave"
    ]},
    {name:"Longitudinal waves", items:[
      "sound", "ultrasound"
    ]},
    {name:"Wave measurements", items:[
      "wavelength", "frequency", "period", "amplitude", "speed"
    ]},
    {name:"Sound phenomena", items:[
      "echo", "vibrating string", "compression", "rarefaction"
    ]},
  ]},
  diagram:{ title:"A transverse wave", caption:"State what each part represents.", parts:[
    {p:"Crest", f:"The highest point of the wave"},
    {p:"Trough", f:"The lowest point of the wave"},
    {p:"Amplitude", f:"The maximum displacement from the rest position"},
    {p:"Wavelength", f:"Distance between two successive crests"},
    {p:"Rest position", f:"The level of the undisturbed medium"},
  ]},
  experiment:{
    title:"Speed of sound by echo",
    aim:"To measure the speed of sound using an echo against a distant wall.",
    materials:[
      "A large open space with a distant wall", "A clapper or drum", "A stopwatch",
      "A measuring tape"
    ],
    steps:[
      "Measure the distance from the source to the reflecting wall.",
      "Make a loud clap and start the stopwatch.",
      "Stop the watch when the echo is heard.",
      "Repeat several times and average the times.",
      "Use speed = distance ÷ time, remembering the sound travels to the wall and back.",
    ],
    expect:"The speed works out close to the accepted value of about 340 m/s in air at room temperature. The total distance travelled by the sound is twice the distance to the wall.",
    why:"The sound travels from the source to the wall and back, so the total distance is 2 × d. Dividing this by the echo time gives the speed of sound, an example of using v = distance ÷ time with a real measurement."
  },
  worked:[
    {q:"A wave has a frequency of 50 Hz and a wavelength of 4 m. Find its speed.", steps:[
      "v = fλ", "50 × 4"
    ], a:"200 m/s"},
    {q:"A wave travels at 340 m/s with a frequency of 170 Hz. Find its wavelength.", steps:[
      "λ = v ÷ f", "340 ÷ 170"
    ], a:"2 m"},
    {q:"Find the period of a wave of frequency 200 Hz.", steps:[
      "T = 1 ÷ f", "1 ÷ 200"
    ], a:"0.005 s"},
    {q:"A sound travels 1020 m in 3 s. Find its speed.", steps:[
      "Speed = distance ÷ time", "1020 ÷ 3"
    ], a:"340 m/s"},
    {q:"Two sources emit 256 Hz and 260 Hz. What beat frequency is heard?", steps:[
      "Beat frequency = f₂ − f₁", "260 − 256"
    ], a:"4 beats per second"},
  ],
  apply:[
    {q:"Why can two people on the Moon not talk to each other directly?", a:"There is no air (medium) on the Moon, so sound waves have nothing to travel through; speech cannot pass between them."},
    {q:"How does a ship measure the depth of the sea?", a:"It sends a sound (or ultrasound) pulse to the bottom and times the echo; depth = (speed × time) ÷ 2 because the sound travels down and back."},
    {q:"Why does a guitar string that is shorter produce a higher note?", a:"A shorter string vibrates with a smaller wavelength and therefore a higher frequency, which we hear as a higher pitch."},
    {q:"Why does a piano tuner listen for beats?", a:"When the string and the tuning fork have nearly the same frequency, the beat rate tells the tuner how far off the string is; the beats vanish when the string is exactly tuned."},
  ],
  activities:[
    "Discuss the nature of waves and their components in groups",
    "Discuss the characteristics of waves: reflection, refraction, diffraction, interference and polarization",
    "Distinguish transverse from longitudinal waves using a string and a coil (slinky) spring",
    "Produce different sounds with percussion instruments (drum, bells, cymbal, horn, guitar, flute) to illustrate sound transmission",
    "Demonstrate the production and transmission of sound in closed and open tubes",
    "Demonstrate the Doppler effect using turning forks or a whirling buzzer"
  ],
  materials:[
    "Strings, coil (slinky) springs and ripple tanks if available",
    "Turning forks, drums, bells, cymbals, horns, guitars and flutes",
    "Closed and open pipes or tubes", "Stopwatches, metre rules and graph paper"
  ],
  assessment:[
    "Practical work", "Written test", "Problem solving", "Class presentation", "Class quiz"
  ]
},
{
  grade:11, period:"VI", sem:"Two", icon:"💡",
  title:"Light",
  subtitle:"The nature and sources of light, rectilinear propagation, shadows and eclipses, the pinhole camera, reflection at plane and spherical mirrors, and the electromagnetic spectrum",
  outcomes:[
    "Recognize the source of light and its effects on mirrors in producing images"
  ],
  objectives:[
    "Determine the sources and importance of radiant energy",
    "Construct the linear propagation of light indicating shadows and eclipses",
    "Analyze the major regions of the electromagnetic spectrum, the photoelectric effect and the principle of the laser",
    "Examine the effects of burning on the environment",
    "Analyze and demonstrate image formation using a mirror"
  ],
  note:"<b>Light</b> is radiant energy from luminous sources — the Sun and lamps; illuminated bodies like the Moon only reflect it. It travels in <b>straight lines</b>, giving <b>shadows</b> (umbra and penumbra), <b>eclipses</b> and the inverted image of the <b>pinhole camera</b>. The <b>laws of reflection</b> govern plane and spherical mirrors, and light is the visible band of the <b>electromagnetic spectrum</b>, the waves from radio to gamma all travelling at c = 3 × 10⁸ m/s.",
  study:[
    /* ---- course text: Grade 11, Semester Two, Period VI — Light (guide pp. 24-25) ---- */
    {k:"h3", t:"Light — Sources, Propagation, Shadows"},
    {k:"p", t:"**Sources of light:** the sun and lamps (luminous), the moon and this page (illuminated). Light travels in **straight lines** — rectilinear propagation — as shadows prove: the **umbra** of full shadow and **penumbra** of partial shadow give us solar (**Sun–Moon–Earth)** and lunar (**Sun–Earth–Moon**) eclipses. The **pinhole camera** trades the same straightness for an inverted, diminished image on its screen — magnification = image size ÷ object size = image distance ÷ object distance. Examine the effects of its burning on the environment with the mirror's and lens's concentrated sun."},
    {k:"rule"},
    {k:"h3", t:"Reflection and its Laws; Mirrors"},
    {k:"p", t:"The **laws of reflection:** the incident ray, the reflected ray and the **normal** lie in one plane, and the angle of incidence equals the angle of reflection. The **plane mirror** forms an image **laterally inverted, the same size, virtual, and as far behind the mirror as the object is in front**. The **spherical mirrors:** a **concave** mirror converges light — images real or magnified (the shaving mirror, the torch reflector); a **convex** mirror always gives small, upright, virtual images over a wide field (the car's wing mirror, security mirrors). Draw the **ray diagrams** with the principal axis, pole, **centre of curvature C** and principal **focus F**; the mirror equation 1/f = 1/u + 1/v with f = r/2."},
    {k:"rule"},
    {k:"h3", t:"Radiant Energy and Electromagnetic Waves"},
    {k:"p", t:"**Radiant energy** travels as **electromagnetic waves** — oscillating electric and magnetic fields that need no material medium (which is how the sun's energy reaches us across empty space). All electromagnetic waves in a vacuum travel at the same **speed of light, c = 3.0 × 10⁸ m/s**, related to frequency and wavelength by the **universal wave equation c = fλ** — as the frequency rises, the wavelength shrinks. Determine the sources of radiant energy and their importance."},
    {k:"rule"},
    {k:"h3", t:"The Bands of the Spectrum"},
    {k:"p", t:"Analyze the major regions of the electromagnetic spectrum, in order of rising frequency (falling wavelength):"},
    {k:"table", head:["Band", "Source/production", "Uses and effects"], rows:[
      ["Radio waves", "Oscillating currents in an aerial", "Broadcasting, communication"],
      ["Microwaves", "Electronic tubes", "Cooking from within, radar, mobile telephony"],
      ["Infrared", "Every warm body", "Heaters, remote controls, night viewing"],
      ["Visible light", "Very hot sources", "The only band the eye sees — red to violet"],
      ["Ultraviolet", "The sun, arc lamps", "Vitamin D and sun-sunburn, sterilizing, fluorescent security marks"],
      ["X-rays", "Fast electrons striking a target", "Peering through flesh at bone, inspecting welds"],
      ["Gamma rays", "Radioactive nuclei", "Killing cancers, sterilizing, tracing"],
    ]},
    {k:"rule"},
    {k:"h3", t:"The Dangers of the Short-Wave Bands"},
    {k:"p", t:"The same energy that serves can harm: **ultraviolet** burns skin and eyes (the sun's excess, the welder's arc — the ozone layer normally screens it); **X-rays and gamma rays** penetrate and ionize living cells — handle radioactive sources with distance, shielding and short exposure, with the radiation symbol respected wherever it appears. In the laboratory, investigate the **inverse square law** of radiation from a source: intensity ∝ 1/d²."},
    {k:"rule"},
    {k:"h3", t:"The Photoelectric Effect and the Laser"},
    {k:"p", t:"The **photoelectric effect** — electrons ejected from a metal surface by light of sufficient frequency, never below it however bright — showed that light arrives in packets (photo-electric cells put it to work in doors and meters), and the **principle of the laser** — excited atoms emitting identical photons in step — produces the intense, single-colour, narrow beam of the surveyor, the surgeon and the compact disc."},
  ],

  focus:[
    "Nature and sources of light; luminous and non-luminous bodies",
    "Rectilinear propagation: shadows (umbra and penumbra), eclipses, the pinhole camera",
    "Reflection of light by plane and spherical mirrors; ray diagrams",
    "The mirror equation and image formation by mirrors",
    "The electromagnetic spectrum and its regions; c = fλ",
    "The photoelectric effect and the principle of the laser"
  ],
  terms:[
    {t:"rectilinear propagation", d:"light travels in straight lines", x:"The pinhole camera uses rectilinear propagation."},
    {t:"reflection", d:"the bouncing of light off a surface", x:"Reflection lets a mirror show your image."},
    {t:"incident ray", d:"the ray of light that strikes a surface", x:"The incident ray meets the mirror."},
    {t:"reflected ray", d:"the ray that bounces off a surface", x:"The reflected ray leaves the mirror."},
    {t:"normal", d:"the line at right angles to the surface at the point of incidence", x:"Angles are measured to the normal."},
    {t:"angle of incidence", d:"the angle between the incident ray and the normal", x:"The angle of incidence equals the angle of reflection."},
    {t:"electromagnetic wave", d:"a transverse wave of electric and magnetic fields that travels through vacuum", x:"Light is an electromagnetic wave."},
    {t:"speed of light", d:"the speed of electromagnetic waves in vacuum, about 3 × 10⁸ m/s", x:"c ≈ 3 × 10⁸ m/s."},
    {t:"frequency", d:"the number of complete waves per second", x:"Frequency is measured in hertz."},
    {t:"wavelength", d:"the distance between successive crests", x:"Wavelength is measured in metres."},
    {t:"radio waves", d:"the lowest-frequency electromagnetic waves used for communication", x:"Radio waves carry broadcast signals."},
    {t:"microwaves", d:"short-wavelength radio waves used in cooking and radar", x:"A microwave oven cooks food."},
    {t:"infrared", d:"electromagnetic waves with frequencies just below visible light", x:"Remote controls use infrared."},
    {t:"visible light", d:"the small band of the spectrum the human eye can see", x:"Visible light gives us sight."},
    {t:"ultraviolet", d:"electromagnetic waves just above visible light", x:"Sunlight contains ultraviolet rays."},
    {t:"X-rays", d:"high-energy waves used to photograph bones", x:"An X-ray image shows broken bones."},
    {t:"gamma rays", d:"the highest-frequency electromagnetic waves", x:"Gamma rays are used in radiotherapy."},
    {t:"universal wave equation", d:"c = fλ, relating speed, frequency and wavelength", x:"The universal wave equation is c = fλ."},
  ],
  facts:[
    {q:"State the two laws of reflection.", a:"(1) The angle of incidence equals the angle of reflection; (2) the incident ray, the normal and the reflected ray all lie in the same plane."},
    {q:"Why is a pinhole camera image inverted?", a:"Light travels in straight lines, so the ray from the top of the object passes through the pinhole and reaches the bottom of the screen, inverting the image."},
    {q:"What are electromagnetic waves and how fast do they travel in vacuum?", a:"They are transverse waves of electric and magnetic fields that need no medium and travel through empty space at about 3 × 10⁸ m/s."},
    {q:"List the bands of the electromagnetic spectrum in order of increasing frequency.", a:"Radio, microwave, infrared, visible, ultraviolet, X-ray, gamma (increasing frequency, decreasing wavelength)."},
    {q:"State three properties common to all electromagnetic waves.", a:"They are transverse; they travel at the speed of light in vacuum; they transfer energy without needing a medium; and they can be reflected and refracted."},
    {q:"Write the universal wave equation and define each term.", a:"c = fλ, where c is the speed of the wave (m/s), f the frequency (Hz) and λ the wavelength (m)."},
    {q:"State one use of radio, microwave, infrared, visible, ultraviolet, X-ray and gamma rays.", a:"Radio — broadcasting; microwave — cooking and radar; infrared — remote controls; visible — sight; ultraviolet — sterilising and detecting forged notes; X-ray — medical imaging; gamma — cancer radiotherapy and sterilising equipment."},
    {q:"A radio wave has a frequency of 100 MHz (1 × 10⁸ Hz). Find its wavelength.", a:"λ = c ÷ f = 3 × 10⁸ ÷ 1 × 10⁸ = 3 m."},
    {q:"Why must over-exposure to ultraviolet and X-rays be avoided?", a:"They carry high energy that can damage living cells and increase the risk of cancer and burns."},
  ],
  tf:[
    {s:"The angle of incidence equals the angle of reflection.", a:"true", why:"That is the first law of reflection."},
    {s:"Light travels in straight lines.", a:"true", why:"This is the principle of rectilinear propagation."},
    {s:"Electromagnetic waves need a medium to travel through.", a:"false", why:"They can travel through empty space (a vacuum)."},
    {s:"All electromagnetic waves travel at the speed of light in vacuum.", a:"true", why:"That is a fundamental property of the spectrum."},
    {s:"Radio waves have a higher frequency than gamma rays.", a:"false", why:"Gamma rays have the highest frequency; radio waves the lowest."},
    {s:"X-rays are used to form images of bones.", a:"true", why:"X-rays pass through flesh but are absorbed by bone."},
    {s:"The universal wave equation is c = fλ.", a:"true", why:"Speed = frequency × wavelength."},
    {s:"Visible light is the whole of the electromagnetic spectrum.", a:"false", why:"Visible light is only a small band of a much wider spectrum."},
  ],
  classify:{ title:"Sort these light statements and devices", groups:[
    {name:"Plane mirror", items:[
      "image as far behind as the object is in front", "laterally inverted image",
      "virtual image the same size"
    ]},
    {name:"Concave mirror", items:[
      "converges light to a focus", "shaving mirror", "torch reflector"
    ]},
    {name:"Convex mirror", items:[
      "always gives a small upright virtual image", "car wing mirror",
      "wide field of view for security"
    ]},
    {name:"Propagation of light", items:[
      "shadows and eclipses", "pinhole camera image", "light travels in straight lines"
    ]},
  ]},
  diagram:{ title:"The electromagnetic spectrum", caption:"State what each band is.", parts:[
    {p:"Radio", f:"Longest wavelength, lowest frequency; used for broadcasting"},
    {p:"Microwave", f:"Used in cooking and radar"},
    {p:"Infrared", f:"Heat radiation and remote controls"},
    {p:"Visible light", f:"The band the human eye can see"},
    {p:"Ultraviolet", f:"Sterilising and detecting counterfeit notes"},
    {p:"X-ray", f:"Medical imaging of bones"},
    {p:"Gamma", f:"Shortest wavelength, highest energy; radiotherapy"},
  ]},
  experiment:{
    title:"The inverse square law of light",
    aim:"To show that the intensity of light from a point source decreases with the square of the distance.",
    materials:[
      "A small lamp or torch", "A metre rule", "A piece of white card", "A dark room"
    ],
    steps:[
      "Place the lamp at one end and the card a measured distance d away in a dark room.",
      "Note how bright the light on the card appears.",
      "Move the card to distance 2d and observe the brightness.",
      "Move it to distance 3d and observe again.",
      "Compare how the apparent brightness changes with distance.",
    ],
    expect:"The card appears dimmer as it is moved away; at twice the distance the light spreads over four times the area, so the brightness falls to one quarter. This is the inverse square law.",
    why:"The same total energy spreads over a sphere whose area grows with the square of the distance, so intensity is inversely proportional to the square of the distance — a property shared by electromagnetic and other radiation."
  },
  worked:[
    {q:"A radio wave has a frequency of 1 × 10⁸ Hz. Find its wavelength.", steps:[
      "λ = c ÷ f", "3 × 10⁸ ÷ 1 × 10⁸"
    ], a:"3 m"},
    {q:"A light wave has a wavelength of 5 × 10⁻⁷ m. Find its frequency.", steps:[
      "f = c ÷ λ", "3 × 10⁸ ÷ 5 × 10⁻⁷"
    ], a:"6 × 10¹⁴ Hz"},
    {q:"A microwave has a frequency of 1 × 10¹⁰ Hz. Find its wavelength.", steps:[
      "λ = c ÷ f", "3 × 10⁸ ÷ 1 × 10¹⁰"
    ], a:"0.03 m"},
    {q:"State the speed of light in vacuum to one significant figure.", steps:[
      "c = 3 × 10⁸ m/s"
    ], a:"3 × 10⁸ m/s"},
  ],
  apply:[
    {q:"Why does a convex mirror make a good car wing (side) mirror?", a:"It always forms a small, upright, virtual image and gives a much wider field of view than a plane mirror, so the driver sees more of the road behind."},
    {q:"During a solar eclipse, who stands in the umbra and who in the penumbra?", a:"An observer in the umbra (full shadow) sees a total eclipse; one in the penumbra (partial shadow) sees a partial eclipse."},
    {q:"How can a simple periscope use plane mirrors to see over a wall?", a:"Two plane mirrors at 45° reflect the light twice; since each mirror reflects with the angle of incidence equal to the angle of reflection, the scene over the wall is turned to the viewer's eye."},
  ],
  activities:[
    "Discuss the sources of light and its production; distinguish luminous from non-luminous objects",
    "Use a torch light and copy book, and a torch and ball, to demonstrate how shadows and eclipses are produced",
    "Construct a ray box to indicate rectilinear propagation of light rays",
    "Construct ray diagrams displaying image formation by plane and curved mirrors",
    "Examine the mirror equation and apply it in calculating mirror problems",
    "List the regions of the electromagnetic spectrum and match each to its uses"
  ],
  materials:[
    "Ray boxes, plane and curved mirrors, and pins",
    "Pinhole cameras, torches, copy books and balls for shadows and eclipses",
    "Mirrors, metre rules and protractors", "Charts of the electromagnetic spectrum"
  ],
  assessment:[
    "Practical work", "Written test", "Ray diagram drawing", "Problem solving", "Class quiz"
  ]
},

/* ================================ GRADE 12 ================================ */
{
  grade:12, period:"I", sem:"One", icon:"🔍",
  title:"Refraction and Dispersion of Light",
  subtitle:"The laws of refraction, refractive index and Snell's law, critical angle and total internal reflection, lenses, eye defects, dispersion and optical instruments",
  outcomes:[
    "Recognize the sources of colours in respect to producing other colours, and identify the lenses and their uses in the correction of eye defects"
  ],
  objectives:[
    "Analyze and justify the laws of refraction",
    "Calculate the refractive index of various materials",
    "Apply Snell's law equation to compute the index of refraction",
    "Distinguish between primary colours and primary pigments",
    "Distinguish between total internal reflection and critical angle",
    "Discuss eye defects and their correction",
    "Discuss the camera, projection, simple and compound microscopes, and telescopes"
  ],
  note:"<b>Refraction</b> is the bending of light between media of different optical density, governed by <b>Snell's law</b>: <b>n = sin i ÷ sin r</b> — the <b>refractive index</b>, also c ÷ v. Light leaving glass meets a <b>critical angle</b> beyond which it totally reflects inside (<b>total internal reflection</b> — optical fibres). A <b>prism disperses</b> white light into its colours; <b>lenses</b> converge or diverge it to form images — the magnifier, the camera, the microscope, the telescope, and the correction of short and long sight.",
  study:[
    /* ---- course text: Grade 12, Semester One, Period I — Refraction and Dispersion of Light (guide pp. 26-27) ---- */
    {k:"h3", t:"Refraction — Laws, Snell, Refractive Index"},
    {k:"p", t:"**Refraction** is the bending of light as it crosses between media of different optical density: toward the normal going in to glass, away coming out. The **laws of refraction:** the incident ray, refracted ray and normal lie in one plane, and **Snell's law: sin i / sin r = constant = n**, the **refractive index** — which is also the ratio of the **speed of light in vacuum to that in the medium**, n = c/v. A pool's **real depth** exceeds its **apparent depth** by the same factor: n = real depth / apparent depth — the straight stick 'bending' at the water. Calculate the refractive index of a glass block in the laboratory by tracing rays through it with pins; apply Snell's law to compute the index."},
    {k:"rule"},
    {k:"h3", t:"Critical Angle and Total Internal Reflection"},
    {k:"p", t:"Light travelling from glass toward air refracts ever wider; at the **critical angle** C (sin C = 1/n) the ray just grazes the surface — and past it, with no route out, all the light reflects back inside: **total internal reflection**. Distinguish the two: the critical angle is the threshold; total internal reflection the result. It makes the prism's perfect mirrors, the sparkling diamond, the mirage on the hot road, and the **optical fibres** that carry telephone calls and endoscopes by the thousand reflections."},
    {k:"rule"},
    {k:"h3", t:"Dispersion, Colours, Lenses and the Eye"},
    {k:"p", t:"The prism splits white light into the spectrum — **dispersion** — because each colour refracts by its own amount, violet most, red least: the rainbow is the sky's dispersion. Distinguish **primary colours** of light (red, green, blue — adding to white) from **primary pigments** (cyan, magenta, yellow — subtracting to black). **Lenses:** the **convex (converging)** forms real inverted images for camera, projector and telescope — and a magnified virtual one inside the focal length (the magnifying glass); the **concave (diverging)**, small upright images and the correction of **short sight (myopia)**, as the convex corrects **long sight (hyperopia)** — lenses and eye defects. The lens formula matches the mirror's: 1/f = 1/u + 1/v; m = v/u."},
  ],

  focus:[
    "Refraction at a plane interface; the laws of refraction",
    "Refractive index: Snell's law, speed of light, real and apparent depth",
    "Critical angle and total internal reflection",
    "Dispersion of white light; primary colours and primary pigments",
    "Lenses and eye defects: short sight (myopia) and long sight (hyperopia)",
    "The camera, projection, simple and compound microscopes, and telescopes"
  ],
  terms:[
    {t:"refraction", d:"the bending of light when it changes medium", x:"A spoon in water looks bent due to refraction."},
    {t:"refractive index", d:"the ratio sin i ÷ sin r (Snell's law)", x:"Glass has a refractive index of about 1.5."},
    {t:"critical angle", d:"the angle of incidence above which total internal reflection occurs", x:"Beyond the critical angle light reflects internally."},
    {t:"dispersion", d:"the splitting of white light into its colours", x:"A prism causes dispersion."},
    {t:"convex lens", d:"a lens that is thicker at the centre and converges light", x:"A magnifying glass is a convex lens."},
    {t:"concave lens", d:"a lens that is thinner at the centre and diverges light", x:"A concave lens spreads light out."},
    {t:"principal focus", d:"the point where parallel rays meet after a convex lens", x:"Parallel rays focus at the principal focus."},
    {t:"focal length", d:"the distance from the lens to its principal focus", x:"Focal length is measured in metres."},
    {t:"total internal reflection", d:"the complete reflection of light back into a medium when the angle of incidence exceeds the critical angle", x:"Optical fibres work by total internal reflection."},
    {t:"apparent depth", d:"the depth a pool or block of glass appears to have because light bends on leaving it", x:"A pool looks shallower than its real depth."},
    {t:"Snell's law", d:"the law that sin i ÷ sin r is a constant for two given media", x:"Snell's law gives the refractive index."},
  ],
  facts:[
    {q:"Define refractive index and write Snell's law.", a:"The refractive index of a medium is n = sin i ÷ sin r, where i is the angle of incidence and r the angle of refraction, when light enters from air."},
    {q:"What is the critical angle and what happens beyond it?", a:"It is the angle of incidence at which the refracted ray just grazes the surface; for angles greater than the critical angle, total internal reflection occurs."},
    {q:"What is dispersion and what does a prism produce?", a:"Dispersion is the splitting of white light into its constituent colours by a prism, producing the visible spectrum."},
    {q:"How does a convex lens form an image of a distant object?", a:"Parallel rays from the distant object are converged to the principal focus, forming a real, inverted and diminished image."},
    {q:"A ray enters glass with i = 30° and refracts at r = 20°. Find the refractive index.", a:"n = sin30° ÷ sin20° = 0.5 ÷ 0.342 = 1.46."},
    {q:"How are real depth and apparent depth related to the refractive index of a liquid?", a:"n = real depth ÷ apparent depth; because light bends leaving the liquid, the bottom appears closer to the surface than it truly is."},
  ],
  tf:[
    {s:"A concave lens converges parallel light to a focus.", a:"false", why:"A concave lens diverges light; it is the convex lens that converges it."},
    {s:"Refraction is the bending of light when it changes medium.", a:"true", why:"That is the definition of refraction."},
    {s:"Dispersion splits white light into its colours.", a:"true", why:"A prism disperses white light into the spectrum."},
    {s:"The refractive index of a medium is always less than 1.", a:"false", why:"For a medium denser than air the refractive index is greater than 1."},
    {s:"Light can be guided along an optical fibre by total internal reflection.", a:"true", why:"The fibre is so narrow that rays strike its wall beyond the critical angle and reflect totally at every bounce."},
  ],
  classify:{ title:"Sort these statements and devices", groups:[
    {name:"Refraction", items:[
      "Snell's law", "refractive index", "bending in water", "critical angle"
    ]},
    {name:"Converging light", items:[
      "convex lens", "concave mirror", "magnifying glass"
    ]},
    {name:"Diverging light", items:[
      "concave lens", "convex mirror"
    ]},
    {name:"Total internal reflection", items:[
      "optical fibres", "sparkling diamond", "prism periscope"
    ]},
  ]},
  diagram:{ title:"Refraction of light into a prism", caption:"State what each part shows.", parts:[
    {p:"Incident ray", f:"Light entering the glass from air"},
    {p:"Normal", f:"Line at right angles to the surface"},
    {p:"Bent ray in glass", f:"Light bending towards the normal on entering"},
    {p:"Refracted ray out", f:"Light bending away from the normal on leaving"},
    {p:"Dispersion", f:"White light splitting into colours inside the prism"},
  ]},
  experiment:{
    title:"Refraction through a rectangular block",
    aim:"To verify that light bends on entering and leaving a glass block and to measure the refractive index.",
    materials:[
      "A rectangular glass block", "A ray box or torch with a slit", "A sheet of white paper",
      "A pencil and protractor"
    ],
    steps:[
      "Place the block on the paper and draw its outline.",
      "Direct a narrow ray of light into one face at a known angle of incidence.",
      "Mark the path of the ray entering and leaving the block.",
      "Draw the ray paths, the normal and measure the angle of refraction.",
      "Calculate n = sin i ÷ sin r and repeat for other angles.",
    ],
    expect:"The light bends towards the normal on entering the block and away from it on leaving; the ratio sin i ÷ sin r is constant and close to the refractive index of glass (about 1.5).",
    why:"The block has a different optical density from air, so the speed of light changes and the ray bends according to Snell's law. Measuring the angles lets the refractive index be calculated directly."
  },
  worked:[
    {q:"A ray of light has an angle of incidence of 45° and an angle of refraction of 28°. Find the refractive index.", steps:[
      "n = sin i ÷ sin r", "sin45° ÷ sin28°", "0.707 ÷ 0.469"
    ], a:"1.51"},
    {q:"A convex lens has a focal length of 20 cm. Express it in metres.", steps:[
      "1 m = 100 cm", "20 ÷ 100"
    ], a:"0.2 m"},
    {q:"Light travels at 3 × 10⁸ m/s in air and 2 × 10⁸ m/s in a medium. Find the refractive index of the medium.", steps:[
      "n = speed in air ÷ speed in medium", "3 × 10⁸ ÷ 2 × 10⁸"
    ], a:"1.5"},
    {q:"Given n = 1.5 and an angle of refraction of 30°, find sin i (and hence i).", steps:[
      "sin i = n × sin r", "1.5 × sin30° = 1.5 × 0.5"
    ], a:"sin i = 0.75, so i ≈ 49°"},
  ],
  apply:[
    {q:"Why does a swimming pool appear shallower than it really is?", a:"Light from the bottom of the pool bends away from the normal as it leaves the water, so the eye traces it back to a higher apparent position, making the pool look shallower."},
    {q:"Why are fibre-optic cables able to carry light without it escaping?", a:"Light is kept inside the fibre by total internal reflection, bouncing off the walls whenever it reaches an angle greater than the critical angle."},
    {q:"Why does a person with short sight need a concave lens?", a:"A concave lens diverges the light so the image is focused on the retina instead of in front of it, correcting the short-sighted eye."},
  ],
  activities:[
    "Discuss the law of refraction and solve problems on refractive index",
    "Use a glass block and a prism to find the refractive index of a material",
    "Discuss how a light ray leaving water creates the critical angle",
    "Discuss eye defects and their correction; the camera and projection",
    "Use a bending pencil in a glass of water to practise refraction",
    "Assemble simple and compound microscopes and telescopes if available, and study their ray diagrams"
  ],
  materials:[
    "Glass blocks, prisms, ray boxes and protractors",
    "Convex and concave lenses, screens and metre rules", "Charts of the eye and its defects",
    "Sample optical instruments: magnifying glasses, cameras, microscopes and telescopes"
  ],
  assessment:[
    "Practical work", "Written test", "Ray diagram drawing", "Problem solving", "Class quiz"
  ]
},
{
  grade:12, period:"II", sem:"One", icon:"🔌",
  title:"Direct Current Electricity",
  subtitle:"Sources of direct current, resistance and Ohm's law, series and parallel circuits, EMF and internal resistance, Kirchhoff's laws, electrical energy, power and cost, and electrical safety",
  outcomes:[
    "Construct and analyze electric circuits in determining the resistance, potential difference and the current in accordance with Ohm's and Kirchhoff's laws",
    "Identify the factors affecting the resistance of a conductor"
  ],
  objectives:[
    "Identify sources of direct current: primary and secondary cells, fuel and solar cells",
    "Distinguish and analyze series, parallel and series–parallel circuits",
    "Analyze Ohm's law and its uses in circuit analysis",
    "Formulate Kirchhoff's laws of electric energy and apply them in circuits",
    "Calculate the internal resistance of cells and batteries",
    "Solve problems on electrical energy, power and the cost of electrical energy",
    "State and apply electrical safety rules"
  ],
  note:"An <b>electric current</b> is the rate of flow of charge, in amperes; its sources are <b>cells</b> — primary (dry cell), secondary (accumulator), fuel and solar. <b>Ohm's law</b> gives <b>V = IR</b>; in <b>series</b> resistances add, in <b>parallel</b> reciprocals add. A real cell has <b>EMF</b> E and <b>internal resistance</b> r: <b>E = I(R + r)</b>. <b>Kirchhoff's laws</b> — the currents at a junction add to zero, and the voltages round a loop add to zero — solve every network, and the <b>kilowatt-hour</b> prices the energy the meter counts.",
  study:[
    /* ---- course text: Grade 12, Semester One, Period II — Direct Current Electricity (guide pp. 28-29) ---- */
    {k:"h3", t:"Electric Charge and Current"},
    {k:"p", t:"**Electric charge** (Q, in coulombs) is the property that makes electricity; the **current** I = Q/t is charge flowing, measured in **amperes** by the ammeter in series. **Direct current (DC)** flows one way — from cells and batteries; **alternating current (AC)** reverses many times a second — from the mains. Identify the **sources of direct current:** **primary cells** (spent once — the dry Leclanché cell of the torch), **secondary cells** (rechargeable — the car's lead-acid battery), and **fuel and solar cells**."},
    {k:"rule"},
    {k:"h3", t:"Circuit Components and Diagrams"},
    {k:"p", t:"Draw and wire circuits with the standard symbols: cell and battery, switch, resistor, rheostat (variable), lamp, ammeter in series and voltmeter across, fuse and earth. Circuit diagrams are the electrician's shorthand; a closed loop is required for current."},
    {k:"rule"},
    {k:"h3", t:"Ohm's Law, Resistance and Resistivity"},
    {k:"p", t:"**Ohm's law:** at constant temperature, the current through a metallic conductor is directly proportional to the potential difference across it — **V = IR**, with R in **ohms (Ω)**. The **factors affecting the resistance of a conductor**: length (R ∝ l), thickness (R ∝ 1/A), material and temperature — confirmed with the wire board, and summarized as R = ρl/A where ρ is the **resistivity**."},
    {k:"rule"},
    {k:"h3", t:"Series and Parallel Circuits"},
    {k:"table", head:["Arrangement", "Resistance", "Current", "Voltage"], rows:[
      ["Series", "R = R₁ + R₂ + R₃", "Same everywhere", "Divided across the parts"],
      ["Parallel", "1/R = 1/R₁ + 1/R₂ + 1/R₃", "Divided among the branches", "Same across all branches"],
    ]},
    {k:"p", t:"**Distinguish and analyze the series and parallel circuits** — and the series-parallel combinations at the third stroke: lamps in series share and dim; lamps in parallel keep full brightness, which is why homes are wired in parallel. Construct and analyze the circuits to determine resistance, p.d. and current."},
    {k:"rule"},
    {k:"h3", t:"EMF, Internal Resistance, Energy and Power"},
    {k:"p", t:"The **electromotive force (E)** is the total energy a cell gives each coulomb; as current flows the cell's own **internal resistance (r)** spends some, so the terminal voltage falls: E = I(R + r). Calculate the internal resistance of cells and battery. **Electrical energy and power:** P = VI = I²R = V²/R, and energy = power × time. Apply the power relations in the resistance problems."},
    {k:"rule"},
    {k:"h3", t:"Kirchhoff's Laws of Electric Energy"},
    {k:"p", t:"**Kirchhoff's first (current) law:** the total current flowing into a junction equals the total current flowing out — charge is saved. **Kirchhoff's second (voltage) law:** around any closed loop of a circuit the sum of the EMFs equals the sum of the voltage drops (IR) — energy is saved. Together they analyze any network, series–parallel or beyond, and with **E = I(R + r)** they account for the energy a cell spends inside itself as well as in the circuit."},
    {k:"h3", t:"Paying for Electricity"},
    {k:"p", t:"**Electrical energy sells by the kilowatt-hour (kWh)** — the 'unit': energy = power × time, so **units used = (power in kW) × (time in h)**. Cost of electricity: a 100 W bulb for 10 hours is 1 unit; a 2 kW cooker for 2 hours is 4 units. Read the meter (cumulative kWh) and compute the month's bill at the tariff per unit. Calculate examples for the appliances in your home."},
    {k:"rule"},
    {k:"h3", t:"Electrical Safety Rules"},
    {k:"bul", items:[
      "Never touch switches or appliances with wet hands — water conducts.",
      "Never stick anything but a proper plug into a socket.",
      "Replace worn or taped-over flex; never join wire by twisting and taping.",
      "Switch off, and unplug, before servicing anything; keep children away from open installations.",
      "Use the correct fuse rating — never bypass a fuse with wire.",
      "Earth metal-cased appliances; treat every wire as live until proved dead."
    ]},
  ],

  focus:[
    "Sources of direct current: primary and secondary cells, fuel and solar cells",
    "Resistance and resistivity; factors affecting the resistance of a conductor",
    "Ohm's law and its use in circuit analysis",
    "DC circuits: series, parallel and series–parallel",
    "Electromotive force (EMF) and internal resistance; E = I(R + r)",
    "Electrical energy and power; the cost of electrical energy in kilowatt-hours",
    "Kirchhoff's laws of electric energy", "Electrical safety rules"
  ],
  terms:[
    {t:"electric current", d:"the rate of flow of electric charge", x:"Current is measured in amperes."},
    {t:"ampere", d:"the unit of electric current", x:"A current of one ampere flows when one coulomb passes per second."},
    {t:"voltage", d:"the potential difference that pushes charge around a circuit", x:"Voltage is measured in volts."},
    {t:"resistance", d:"the opposition of a conductor to electric current", x:"Resistance is measured in ohms."},
    {t:"ohm", d:"the unit of resistance", x:"One ohm carries one ampere under one volt."},
    {t:"direct current", d:"current that flows in one direction only", x:"A cell produces direct current."},
    {t:"alternating current", d:"current that reverses direction regularly", x:"Mains supply is alternating current."},
    {t:"series circuit", d:"a circuit where components are connected one after another", x:"Christmas lights are often in series."},
    {t:"parallel circuit", d:"a circuit where components lie in separate branches", x:"House wiring is in parallel."},
    {t:"Ohm's law", d:"current is proportional to voltage at constant temperature", x:"Ohm's law gives V = IR."},
    {t:"conductor", d:"a material that allows current to flow easily", x:"Copper is a good conductor."},
    {t:"insulator", d:"a material that does not allow current to flow", x:"Plastic is an insulator."},
    {t:"kilowatt-hour", d:"the energy used by a 1 kW appliance in one hour; the billing unit", x:"A 2 kW kettle for 3 hours uses 6 kWh."},
    {t:"power rating", d:"the electrical power an appliance is designed to use", x:"A bulb stamped 100 W draws 100 joules each second."},
  ],
  facts:[
    {q:"Define electric current and state its unit.", a:"Electric current is the rate of flow of electric charge, measured in amperes (A); one ampere is one coulomb of charge passing per second."},
    {q:"Distinguish direct from alternating current.", a:"Direct current flows in one direction only (from a cell or battery); alternating current reverses direction regularly (as from mains electricity)."},
    {q:"State Ohm's law and write its equation.", a:"At constant temperature the current through a conductor is proportional to the voltage across it; V = IR."},
    {q:"What is the difference between a series and a parallel circuit?", a:"In series the components are connected one after another so the same current flows through all; in parallel each branch has the same voltage and the current divides between branches."},
    {q:"A resistor has a voltage of 12 V across it and a current of 3 A. Find its resistance.", a:"R = V ÷ I = 12 ÷ 3 = 4 Ω."},
    {q:"Name three circuit symbols a learner should know.", a:"Cell, battery, bulb, switch, ammeter, voltmeter and resistor are common symbols."},
    {q:"Why are the bulbs in a house wired in parallel rather than in series?", a:"In parallel each bulb gets the full mains voltage and can be switched independently, and if one fails the others stay on."},
    {q:"How is the cost of electrical energy calculated?", a:"Cost = power (kW) × time (h) × price per unit (kWh); energy in kWh = kilowatts × hours."},
    {q:"A 2 kW kettle is used for 3 hours. Find the energy used in kWh.", a:"Energy = 2 × 3 = 6 kWh."},
    {q:"State three electrical safety rules.", a:"Never touch electrical appliances with wet hands; never overload sockets; replace damaged plugs and cables; and switch off and unplug before cleaning."},
  ],
  tf:[
    {s:"Electric current is the rate of flow of charge.", a:"true", why:"That is the definition of current."},
    {s:"Direct current reverses direction regularly.", a:"false", why:"Direct current flows one way; alternating current reverses direction."},
    {s:"Ohm's law states V = IR.", a:"true", why:"Voltage equals current times resistance at constant temperature."},
    {s:"In a series circuit the voltage is the same across every component.", a:"false", why:"In a series circuit the current is the same and the voltages add; it is in a parallel circuit that the voltage is the same across every branch."},
    {s:"A good insulator allows current to flow easily.", a:"false", why:"An insulator does not allow current to flow easily; a conductor does."},
    {s:"Resistance is measured in ohms.", a:"true", why:"The ohm is the unit of resistance."},
    {s:"Electrical energy is billed in kilowatt-hours.", a:"true", why:"The kWh is the unit used on electricity bills."},
    {s:"The earth wire is a safety connection to the ground.", a:"true", why:"It carries fault current safely away and helps trip the fuse."},
  ],
  classify:{ title:"Sort these statements and materials", groups:[
    {name:"Conductors", items:[
      "copper", "aluminium", "iron", "sea water"
    ]},
    {name:"Insulators", items:[
      "plastic", "rubber", "glass", "wood"
    ]},
    {name:"Series circuit facts", items:[
      "same current everywhere", "resistances add", "one path for current"
    ]},
    {name:"Parallel circuit facts", items:[
      "same voltage across branches", "current divides", "independent switching"
    ]},
  ]},
  diagram:{ title:"A simple series circuit", caption:"State what each component does.", parts:[
    {p:"Cell / battery", f:"Provides the voltage that pushes the current"},
    {p:"Switch", f:"Opens or closes the circuit"},
    {p:"Bulb", f:"Turns electrical energy into light and heat"},
    {p:"Ammeter", f:"Measures the current in amperes"},
    {p:"Wires", f:"Carry the current around the circuit"},
  ]},
  experiment:{
    title:"Verifying Ohm's law",
    aim:"To show that the current through a resistor is proportional to the voltage across it.",
    materials:[
      "A resistor (or bulb)", "A battery of cells", "An ammeter", "A voltmeter",
      "A variable resistor or rheostat", "Connecting wires"
    ],
    steps:[
      "Set up a circuit with the resistor, ammeter, battery and variable resistor in series.",
      "Connect the voltmeter across the resistor.",
      "Adjust the variable resistor to give a low voltage and record the current and voltage.",
      "Increase the voltage in steps, recording current and voltage each time.",
      "Divide voltage by current at each step and compare the values.",
    ],
    expect:"The ratio of voltage to current (V/I) is the same at every step, confirming that current is proportional to voltage — Ohm's law, V = IR.",
    why:"If the resistor stays at constant temperature, the resistance is constant, so doubling the voltage doubles the current and V/I never changes. A graph of V against I is a straight line through the origin."
  },
  worked:[
    {q:"A current of 2 A flows through a 6 Ω resistor. Find the voltage across it.", steps:[
      "V = IR", "2 × 6"
    ], a:"12 V"},
    {q:"A 9 V battery drives a current of 3 A. Find the resistance.", steps:[
      "R = V ÷ I", "9 ÷ 3"
    ], a:"3 Ω"},
    {q:"Find the current through a 12 Ω resistor with 6 V across it.", steps:[
      "I = V ÷ R", "6 ÷ 12"
    ], a:"0.5 A"},
    {q:"A 2 Ω and a 3 Ω resistor are connected in series. Find the total resistance.", steps:[
      "Series: R = R₁ + R₂", "2 + 3"
    ], a:"5 Ω"},
    {q:"A 2 kW kettle is used for 2 hours. Find the energy used in kWh.", steps:[
      "Energy = power × time", "2 × 2"
    ], a:"4 kWh"},
    {q:"At a price of L$ 40 per unit, find the cost of using 5 kWh.", steps:[
      "Cost = units × price", "5 × 40"
    ], a:"L$ 200"},
  ],
  apply:[
    {q:"Why do long wires in a house use thick copper cables rather than thin ones?", a:"Thick copper cables have low resistance, so less energy is wasted as heat and the voltage drop along the wire is small."},
    {q:"Why is a fuse placed in series in a circuit?", a:"The same current flows through the fuse; if the current becomes too large the fuse melts and breaks the circuit, protecting the appliance."},
    {q:"Why must a switch be connected in the live wire?", a:"So that when the switch is open, no live voltage reaches the appliance, making it safe to work on."},
    {q:"Why should you never connect too many appliances to one socket?", a:"Overloading makes the current exceed the safe value for the cable, overheating it and risking fire or blowing the fuse."},
  ],
  activities:[
    "Discuss the processes in which direct currents are produced",
    "Construct and analyze series circuits, parallel circuits and combinations, using lamps and dry cells",
    "Verify Ohm's law in the laboratory and plot the V–I graph",
    "Use the ammeter, voltmeter and ohmmeter in circuit analysis and state their importance",
    "Demonstrate the heating effect in circuits using cells and a light bulb",
    "Calculate the energy used by appliances and the cost on a Liberia Electricity Corporation bill"
  ],
  materials:[
    "Sources of EMF: dry cells, accumulators, photocells if available",
    "Lamps (6 or 12 volt), switches and connecting wires",
    "Ammeters, voltmeters, ohmmeters and resistance boxes",
    "Constantan wire (28 gauge), tungsten wires and a Wheatstone bridge if available"
  ],
  assessment:[
    "Practical work", "Written test", "Circuit analysis", "Problem solving", "Class quiz"
  ]
},
{
  grade:12, period:"III", sem:"One", icon:"🧲",
  title:"Magnetism and Electro-magnetism",
  subtitle:"Magnets and magnetic fields, magnetising and demagnetising, the magnetic effect of a current, electromagnetic induction, motors, generators, the galvanometer and the transformer",
  outcomes:[
    "Recognize that it is magnetic effect that produces electricity"
  ],
  objectives:[
    "Analyze the origin of magnets",
    "Compare the relationship between electricity and magnetism",
    "Distinguish a motor from a generator",
    "Elaborate the principle of the transformer and its function",
    "Distinguish between AC and DC motors",
    "Explain the force on a current-carrying conductor in a magnetic field and the moving-coil galvanometer"
  ],
  note:"A <b>magnet</b> has north and south poles; like poles repel, unlike attract, and its <b>field lines</b> run north to south outside the magnet. An electric current produces a <b>magnetic field</b>, and a conductor carrying current across a field feels a force (<b>Fleming's left-hand rule</b>) — the <b>motor</b> and the <b>moving-coil galvanometer</b>. <b>Electromagnetic induction</b> (<b>Fleming's right-hand rule</b>) is the reverse: motion in a field generates EMF — the <b>generator</b>. The <b>transformer</b> trades voltage for current: <b>Vs/Vp = Ns/Np</b>, with power (nearly) conserved.",
  study:[
    /* ---- course text: Grade 12, Semester One, Period III — Magnetism and Electro-magnetism (guide pp. 30-31) ---- */
    {k:"h3", t:"Magnets — Types and Properties"},
    {k:"p", t:"A **magnet** has attractive and directive properties: it pulls iron and steel and, swung free, settles north-south. The **types of magnets:** natural (lodestone), and artificial — bar, horseshoe and the strong modern alloys; **permanent** magnets hold their magnetism (steel), **temporary** magnets hold it only while magnetized (soft iron). **Magnetic materials:** iron, steel, cobalt and nickel — and their alloys; copper, aluminium, wood and rubber ignore the magnet."},
    {k:"rule"},
    {k:"h3", t:"Poles and the Law of Magnetism"},
    {k:"p", t:"The force concentrates at the two **poles** — north-seeking and south-seeking. The **law of magnetic poles:** like poles repel, unlike poles attract. Repulsion alone proves magnetism — attraction only shows the other body might be mere unseduced iron. Breaking a magnet makes two smaller magnets, poles and all: no pole exists alone."},
    {k:"rule"},
    {k:"h3", t:"Magnetic Fields, Flux and the Earth"},
    {k:"p", t:"A **magnetic field** is the space around a magnet where its force works; draw it with **field lines** running from N to S, closest where the force is strongest, never crossing. Map the field of a bar magnet with iron filings or a **plotting compass** — in the laboratory plotting the field around a bar magnet on the sheet. **Magnetic flux** counts the lines through an area, and **magnetic flux density** B is flux per unit area. The **Earth itself is a great magnet:** its magnetic south lies near the geographic north, and the **compass** needle aligns with Earth's field — the traveller's idea of direction."},
    {k:"rule"},
    {k:"h3", t:"Magnetizing and Demagnetizing"},
    {k:"p", t:"**Methods of magnetizing:** stroking with a magnet (single and divided touch), and the electrical method — a strong DC current in a coil around the specimen. **Demagnetizing:** heating beyond the hot point, hammering, or withdrawing slowly from an AC coil. The **uses of magnets:** compasses, the telephone and loudspeaker, electric meters, magnetic catches and the separation of iron scrap."},
    {k:"h3", t:"The Magnetic Effect of a Current"},
    {k:"p", t:"An electric current **always produces a magnetic field** — magnetic effect is what makes electricity do work. A straight current carries circular field lines about it (the right-hand grip rule); winding the wire into a **solenoid** concentrates the field into a bar-magnet pattern, and an **iron core** inside makes the **electromagnet** — strong, switchable, and the heart of relays and bells."},
    {k:"rule"},
    {k:"h3", t:"Force on a Conductor — the Motor"},
    {k:"p", t:"A current-carrying conductor lying across a magnetic field feels a **force**; **Fleming's left-hand rule** gives the direction: First finger Field, seCond finger Current, thuMb Motion. Wound into a coil between magnet poles, current makes the coil rotate — the **DC electric motor**, with a **split-ring commutator** to reverse the current every half-turn so the rotation keeps its direction. (Distinguish the AC and DC motors by their supply and their commutator.) Build a simple DC motor in the laboratory. The **moving-coil galvanometer** is the same action tamed: the coil's deflection against a spring measures the current — the ancestor of ammeter and voltmeter."},
    {k:"rule"},
    {k:"h3", t:"Electromagnetic Induction — the Generator"},
    {k:"p", t:"**Electromagnetic induction:** when the magnetic flux through a circuit changes, an e.m.f. is induced in it — move the magnet or move the coil, either works. **Faraday's law:** the induced e.m.f. is proportional to the rate of change of flux. **Fleming's right-hand rule** gives the induced current's direction (Field, Motion, Current). The **generator (dynamo)** winds a coil in a magnetic field and spins it — mechanical energy in, electrical out, supply to the national grid. Distinguish motor from generator: one feeds current to make motion, the other feeds motion to make current."},
    {k:"rule"},
    {k:"h3", t:"The Transformer"},
    {k:"p", t:"The **transformer** changes AC voltage: AC in the **primary** coil drives an alternating flux through the soft-iron core, which induces an alternating e.m.f. in the **secondary** coil. The turns ratio governs it: **Vs/Vp = Ns/Np** — **step-up** transformers raise the voltage for the grid's long-distance wires (so the I²R line losses fall), and **step-down** transformers return it to 220 V for the house. Elaborate the principle and the function: a transformer works only on AC, and for an ideal transformer VpIp = VsIs."},
  ],

  focus:[
    "The origin of magnets; types and properties",
    "Magnetic materials; the concept and types of magnetic fields; magnetic flux and flux density",
    "Methods of magnetising and demagnetizing",
    "The magnetic effect of a current; force on a conductor in a magnetic field",
    "The moving-coil galvanometer; Fleming's left-hand rule",
    "Electromagnetic induction: laws, induced current and EMF",
    "Motors (AC and DC), generators, inductors and transformers"
  ],
  terms:[
    {t:"magnet", d:"a material that attracts iron and steel and has poles", x:"A bar magnet has a north and a south pole."},
    {t:"magnetic pole", d:"the region of a magnet where the force is strongest", x:"The poles are the two ends of the magnet."},
    {t:"magnetic field", d:"the region around a magnet where magnetic forces act", x:"Field lines map the magnetic field."},
    {t:"field line", d:"a line showing the direction of the magnetic force", x:"Field lines run from north to south."},
    {t:"attraction", d:"the force pulling two poles together", x:"Unlike poles attract."},
    {t:"repulsion", d:"the force pushing two poles apart", x:"Like poles repel."},
    {t:"magnetisation", d:"making a magnetic material into a magnet", x:"Stroke and solenoid methods magnetise steel."},
    {t:"demagnetisation", d:"removing magnetism from a magnet", x:"Heating a magnet demagnetises it."},
    {t:"solenoid", d:"a coil of wire that produces a magnetic field when current flows", x:"A solenoid magnetises a steel bar inside it."},
    {t:"ferromagnetic", d:"materials strongly attracted by a magnet", x:"Iron, steel, nickel and cobalt are ferromagnetic."},
    {t:"compass", d:"an instrument using a magnetised needle to find direction", x:"The compass needle points to the Earth's magnetic north."},
    {t:"magnetic field of the Earth", d:"the field produced by the Earth, behaving like a giant magnet", x:"The Earth's field guides the compass needle."},
    {t:"electromagnetic induction", d:"the production of an e.m.f. when the magnetic field through a coil changes", x:"Induction powers generators."},
    {t:"e.m.f.", d:"electromotive force — the energy given to each unit of charge", x:"A changing field induces an e.m.f."},
    {t:"motor effect", d:"the force on a current-carrying conductor in a magnetic field", x:"The motor effect makes a coil spin."},
    {t:"Fleming's left-hand rule", d:"a rule giving the direction of force on a current in a field", x:"Thumb = motion, first finger = field, second finger = current."},
    {t:"commutator", d:"a device that reverses the current so the motor coil keeps turning", x:"The commutator splits rings reverse the current."},
    {t:"galvanometer", d:"an instrument for detecting and measuring small currents", x:"A moving-coil galvanometer detects current."},
    {t:"generator", d:"a machine that converts kinetic energy into electrical energy", x:"A dynamo is a generator."},
    {t:"transformer", d:"a device that changes the voltage of alternating current", x:"A transformer steps 240 V up or down."},
    {t:"step-up transformer", d:"a transformer that increases the voltage", x:"The grid uses step-up transformers."},
    {t:"step-down transformer", d:"a transformer that decreases the voltage", x:"A phone charger uses a step-down transformer."},
    {t:"primary coil", d:"the input coil of a transformer", x:"The primary coil receives the supply."},
    {t:"secondary coil", d:"the output coil of a transformer", x:"The secondary coil delivers the induced voltage."},
  ],
  facts:[
    {q:"State three properties of a bar magnet.", a:"It has a north and a south pole; unlike poles attract and like poles repel; it freely aligns north–south when suspended; and it attracts iron and steel."},
    {q:"Distinguish magnetic from non-magnetic materials with two examples of each.", a:"Magnetic materials are strongly attracted by a magnet (iron, steel, nickel, cobalt); non-magnetic materials are not attracted (wood, plastic, copper, glass)."},
    {q:"In which direction do magnetic field lines run?", a:"Outside a magnet, field lines run from the north pole to the south pole."},
    {q:"Name three methods of magnetising a steel bar and three methods of demagnetising it.", a:"Magnetise by stroking, by a direct-current solenoid, or by hammering while it lies in a strong field. Demagnetise by heating, dropping repeatedly, or withdrawing it from an alternating-current coil."},
    {q:"How does a magnetic compass show direction?", a:"A freely suspended magnetised needle aligns itself along the Earth's magnetic field, pointing towards magnetic north."},
    {q:"What is the motor effect?", a:"When a current-carrying conductor is placed in a magnetic field, it experiences a force; this is the motor effect that turns electrical energy into kinetic energy."},
    {q:"State Fleming's left-hand rule.", a:"Hold the left hand with the thumb, first finger and second finger at right angles: first finger points along the field, second finger along the current, and the thumb gives the direction of the force (motion)."},
    {q:"What is electromagnetic induction and on what does the induced e.m.f. depend?", a:"It is the production of an e.m.f. in a conductor when the magnetic field through it changes; the e.m.f. is larger with a stronger field, a faster movement and more turns on the coil."},
    {q:"How does a transformer change voltage and what is its relationship?", a:"The ratio of voltages equals the ratio of turns, Vₚ/Vₛ = Nₚ/Nₛ; a step-up transformer has more turns on the secondary, a step-down fewer."},
    {q:"Why does a transformer only work with alternating current?", a:"Only a changing (alternating) magnetic field induces an e.m.f.; direct current gives a steady field that induces nothing."},
    {q:"State the function of the commutator in a DC motor.", a:"It reverses the direction of the current in the coil every half-turn so the coil keeps rotating in the same direction."},
  ],
  tf:[
    {s:"Like poles of two magnets attract each other.", a:"false", why:"Like poles repel; unlike poles attract."},
    {s:"Magnetic field lines run from north to south outside a magnet.", a:"true", why:"That is the convention for drawing field lines."},
    {s:"Copper is a magnetic material.", a:"false", why:"Copper is non-magnetic; iron, steel, nickel and cobalt are magnetic."},
    {s:"A current-carrying conductor in a magnetic field experiences a force.", a:"true", why:"That is the motor effect."},
    {s:"A transformer works on direct current.", a:"false", why:"A transformer needs alternating current to produce a changing magnetic field and induce an e.m.f."},
    {s:"A generator converts kinetic energy into electrical energy.", a:"true", why:"A generator uses motion to induce a current."},
    {s:"A galvanometer detects small electric currents.", a:"true", why:"That is its purpose."},
  ],
  classify:{ title:"Sort these materials and methods", groups:[
    {name:"Magnetic materials", items:[
      "iron", "steel", "nickel", "cobalt"
    ]},
    {name:"Non-magnetic materials", items:[
      "copper", "wood", "plastic", "glass", "aluminium"
    ]},
    {name:"Methods of magnetisation", items:[
      "stroking", "direct current solenoid", "hammering in a field"
    ]},
    {name:"Methods of demagnetisation", items:[
      "heating", "dropping", "withdrawing from an a.c. coil"
    ]},
  ]},
  diagram:{ title:"A simple DC electric motor", caption:"State what each part does.", parts:[
    {p:"Coil", f:"Carries the current and experiences the turning force"},
    {p:"Magnet poles", f:"Provide the magnetic field"},
    {p:"Commutator", f:"Reverses the current every half-turn"},
    {p:"Brushes", f:"Carry the current onto the rotating commutator"},
    {p:"Axle", f:"Transmits the turning motion to the load"},
  ]},
  experiment:{
    title:"Building a simple electric motor",
    aim:"To show how a coil in a magnetic field turns when a current flows.",
    materials:[
      "Insulated copper wire", "A strong magnet", "A cell or battery",
      "Two paper clips as brushes", "Connecting wires"
    ],
    steps:[
      "Wind several turns of wire into a small coil, leaving two straight ends.",
      "Strip the ends and balance the coil between the two paper-clip supports.",
      "Place the strong magnet under the coil.",
      "Connect the paper clips to the battery.",
      "Give the coil a small push and observe what happens.",
    ],
    expect:"When current flows, the coil feels a force from the magnetic field and begins to rotate. This is the motor effect turning electrical energy into motion.",
    why:"The current in the coil creates its own magnetic field which interacts with the magnet's field; the resulting force on the two sides of the coil makes it turn, exactly the principle used in real DC motors."
  },
  worked:[
    {q:"A steel bar is magnetised by stroking from its centre to one end repeatedly. State which end becomes which pole.", steps:[
      "The end finished with the stroking magnet's north pole", "Becomes the north pole"
    ], a:"The last-stroked end becomes the opposite pole to the stroking pole"},
    {q:"A transformer has 200 turns on the primary and 600 on the secondary. If the input voltage is 240 V, find the output voltage.", steps:[
      "Vₚ/Vₛ = Nₚ/Nₛ", "240/Vₛ = 200/600", "Vₛ = 240 × 600 ÷ 200"
    ], a:"720 V (step-up)"},
    {q:"A step-down transformer changes 240 V to 12 V. If the primary has 1000 turns, how many turns has the secondary?", steps:[
      "240/12 = 1000/Nₛ", "Nₛ = 1000 × 12 ÷ 240"
    ], a:"50 turns"},
    {q:"A wire carrying 2 A lies at right angles to a magnetic field of flux density 0.5 T over 0.1 m of its length. Find the force on it.", steps:[
      "F = BIL", "0.5 × 2 × 0.1"
    ], a:"0.1 N"},
  ],
  apply:[
    {q:"Why does a magnet lose its magnetism when it is hammered or dropped?", a:"Dropping or hammering jolts the magnetic domains out of alignment, so the material becomes demagnetised."},
    {q:"Why can a ship's steel hull disturb a compass?", a:"The steel hull becomes slightly magnetised and produces its own field, which bends the compass needle away from true magnetic north."},
    {q:"Why is a loudspeaker described as a motor?", a:"It uses the motor effect: the varying current in its coil interacts with a magnet to move the cone, producing sound."},
    {q:"Why does a bicycle dynamo produce light only when the wheel is turning?", a:"The dynamo is a generator that needs motion to change the magnetic field; when the wheel stops, no e.m.f. is induced and the lamp goes out."},
  ],
  activities:[
    "Discuss the origin of magnets, their types and their importance",
    "Distinguish the various types of magnets and their applications",
    "Discuss the relationship between electricity and magnetism and the effect of electricity on magnetism",
    "Plot the field of a bar magnet with a plotting compass and iron filings",
    "Construct a diagram showing the conversion process between AC and DC motors; construct and analyze diagrams of a motor and a generator",
    "Verify the transformer equation to calculate the input or output of a transformer"
  ],
  materials:[
    "Magnets (bar, U-shape and horse-shoe), iron filings and plotting compasses",
    "Magnetometer, nails and steel bars for magnetisation",
    "Galvanometers, transformers and demonstration motors",
    "Ammeters, voltmeters and connecting wires"
  ],
  assessment:[
    "Practical work", "Written test", "Diagram work", "Problem solving", "Class quiz"
  ]
},
{
  grade:12, period:"IV", sem:"Two", icon:"📻",
  title:"Alternating Current (AC) and Electronics",
  subtitle:"Alternating current and the mains, electrical measuring instruments, RCL circuits and resonance, domestic wiring and safety, semiconductors, diodes, transistors and the cathode ray tube",
  outcomes:[
    "Recognize the usage of alternating current and the application of transistors in a circuit"
  ],
  objectives:[
    "Identify electrical measuring instruments and state their uses",
    "Demonstrate the functions of alternating current",
    "Distinguish between resistance and impedance",
    "Analyze the R, C, L circuits and resonance",
    "Analyze the principle of the cathode ray tube and the applications of transistors and diodes",
    "Explain how electricity is produced and wired for the home, and apply electrical safety rules"
  ],
  note:"<b>Alternating current (AC)</b> reverses direction many times each second — Liberia's mains does so 60 times — and is the form in which electricity is generated, transformed and distributed, unlike the steady <b>direct current (DC)</b> of cells. Its effective value is the <b>r.m.s.</b> (240 V r.m.s. ≈ 340 V peak). In AC circuits resistance broadens into <b>impedance</b>, and resistor, capacitor and coil make <b>RCL circuits</b> that resonate at one frequency. <b>Electronics</b> builds on <b>semiconductors</b> — doped silicon — whose <b>diode</b> conducts one way (rectifying AC to DC) and whose <b>transistor</b> amplifies and switches, at the heart of the <b>cathode ray tube</b> and every circuit.",
  study:[
    /* ---- course text: Grade 12, Semester Two, Period IV — Alternating Current (AC) and Electronics (guide pp. 28-29, 32-33) ---- */
    {k:"h3", t:"Alternating Current and the Mains Supply"},
    {k:"p", t:"**Alternating current (AC)** flows first one way, then the other, reversing direction many times each second — the **mains frequency** (60 Hz in Liberia, 50 Hz in many countries) — while **direct current (DC)** from cells flows steadily one way. AC is what generators naturally produce and what the **national grid** carries, because transformers can raise its voltage for transmission and lower it for use. Its effective or **r.m.s. value** does the same work as a DC of that value: the 240 V (or 220 V) mains peaks at about **340 V** (peak = r.m.s. × √2), and its **period** at 50 Hz is 0.02 s. **Electrical measuring instruments**: the ammeter (series), the voltmeter (across), the ohmmeter (on the isolated component) and the multimeter serve both AC and DC."},
    {k:"rule"},
    {k:"h3", t:"R, C, L Circuits, Impedance and Resonance"},
    {k:"p", t:"In an AC circuit the **resistor** behaves as in DC, but the **capacitor (C)** blocks steady current while passing alternating, and the **inductor (coil, L)** passes steady current while opposing alternating — so the combined opposition, the **impedance**, is greater than the pure resistance alone. When the frequency is such that the capacitor's and inductor's effects cancel, the circuit **resonates**: current peaks at the resonant frequency — the principle that tunes a radio to one station."},
    {k:"h3", t:"Producing Electricity for Liberia"},
    {k:"p", t:"The sources of electrical energy for the home: **hydroelectric** generation (the Mount Coffee plant on the St. Paul River — falling water turning turbines), **diesel generators** for towns and compounds, and **solar panels** on the village roof. Each converts another energy form into electrical energy; together they feed the **national grid**, which transmits the power at high voltage and low current (to minimize I²R heating losses over long lines) and steps it down near the consumer."},
    {k:"rule"},
    {k:"h3", t:"Domestic Circuits"},
    {k:"p", t:"House wiring is wired in **parallel** so each appliance takes the full mains voltage and switches separately; lighting and socket rings (the **ring circuit**) make the rounds of the house. Know the wires: **live** (carries the voltage — insult to touch), **neutral** (completes the circuit, near earth potential) and **earth** (the safety wire, running current away if the live touches a metal case). The **fuse** — a thin wire that melts when the current is too high (or today the circuit breaker) — sits on the live line; **double insulation** (an all-plastic case) protects appliances that have no earth wire."},
    {k:"rule"},
    {k:"h3", t:"Basic Electronics — Semiconductors"},
    {k:"p", t:"A **semiconductor** conducts between conductor and insulator — silicon and germanium. **Doping** adds trace impurities: donor atoms (with extra electrons) give **n-type**, acceptor atoms (leaving electron 'holes') give **p-type**; undoped material is **intrinsic**, doped **extrinsic**, and **band theory** explains their conductance rising with temperature — unlike a metal's. The **semiconductor devices:** the **diode** (conducts one way — rectifying AC to DC), the **thermistor** (resistance falling as it warms — the thermometer of circuits) and the **transistor** (the current amplifier and switch that makes modern electronics possible). Analyze their functions in a simple circuit."},
    {k:"rule"},
  ],

  focus:[
    "AC measurements: peak and r.m.s. values, frequency and period",
    "The functions of alternating current; AC versus DC",
    "Electrical measuring instruments and their uses",
    "Resistance and impedance; R, C, L circuits and resonance",
    "Producing electricity for Liberia; the national grid",
    "Domestic circuits: ring circuits, plugs, fuses, earthing and safety",
    "Semiconductors: doping, intrinsic and extrinsic, p-type and n-type, band theory",
    "Semiconductor devices: the diode and rectification, the transistor, the thermistor; the cathode ray tube"
  ],
  terms:[
    {t:"alternating current (AC)", d:"current that reverses its direction many times each second", x:"The mains supply is alternating current."},
    {t:"r.m.s. value", d:"the effective value of an alternating current or voltage, doing the same work as that DC value", x:"A 240 V r.m.s. supply peaks at about 340 V."},
    {t:"peak value", d:"the greatest instantaneous value reached by an alternating quantity", x:"Peak voltage = r.m.s. voltage × √2."},
    {t:"impedance", d:"the total opposition of an AC circuit to current, from resistance, capacitance and inductance", x:"Impedance is measured in ohms."},
    {t:"resonance", d:"the condition of an RCL circuit at the frequency where current is greatest", x:"A radio circuit resonates at the station's frequency."},
    {t:"semiconductor", d:"a material, such as silicon, conducting between a conductor and an insulator", x:"Silicon is the commonest semiconductor."},
    {t:"doping", d:"adding trace impurities to a semiconductor to control its conduction", x:"Doping silicon with phosphorus makes n-type."},
    {t:"p-type semiconductor", d:"doped semiconductor conducting mainly by 'holes'", x:"Aluminium doping gives p-type silicon."},
    {t:"n-type semiconductor", d:"doped semiconductor conducting mainly by extra electrons", x:"Phosphorus doping gives n-type silicon."},
    {t:"transistor", d:"a semiconductor device that amplifies current or acts as a switch", x:"The transistor made modern electronics possible."},
    {t:"thermistor", d:"a semiconductor whose resistance falls as temperature rises", x:"A thermistor senses temperature in circuits."},
    {t:"cathode ray tube", d:"a vacuum tube in which a steered electron beam forms a display", x:"Older televisions use a cathode ray tube."},
    {t:"live wire", d:"the wire that carries the alternating voltage to the appliance", x:"The live wire is brown and dangerous."},
    {t:"neutral wire", d:"the wire at approximately zero potential that completes the circuit", x:"The neutral wire is blue."},
    {t:"earth wire", d:"a safety wire connected to the ground", x:"The earth wire is green and yellow."},
    {t:"fuse", d:"a safety device that melts and breaks the circuit when the current is too large", x:"A fuse protects an appliance."},
    {t:"ring circuit", d:"a socket circuit wired as a loop from the consumer unit", x:"Socket outlets use a ring circuit."},
    {t:"double insulation", d:"safety by insulating all live parts so no earth wire is needed", x:"A hair dryer may be double insulated."},
    {t:"circuit breaker", d:"a switch that automatically opens when the current is too large", x:"A circuit breaker replaces a fuse."},
    {t:"national grid", d:"the network of cables that carries electricity across the country", x:"The grid transmits high-voltage electricity."},
    {t:"step-up transformer", d:"a transformer that raises the voltage for transmission", x:"The grid uses step-up transformers."},
    {t:"diode", d:"a device that allows current to flow in one direction only", x:"A diode rectifies alternating current."},
    {t:"rectification", d:"converting alternating current to direct current", x:"Half-wave rectification uses one diode."},
  ],
  facts:[
    {q:"What are the three wires in a home supply and what are their colours?", a:"Live (brown), neutral (blue) and earth (green-and-yellow)."},
    {q:"State the function of a fuse and of the earth wire.", a:"The fuse melts and breaks the circuit if the current is too large, protecting the wiring and appliance; the earth wire carries dangerous current safely to the ground and helps blow the fuse if the metal casing becomes live."},
    {q:"Why is electricity transmitted at very high voltage through the grid?", a:"High voltage reduces the current for a given power, which greatly reduces energy wasted as heat in the transmission lines."},
    {q:"Distinguish between alternating and direct current.", a:"Direct current flows steadily in one direction, as from a cell; alternating current reverses its direction many times each second, as from the generators of the national grid — which is why transformers can be used with it."},
    {q:"What is the r.m.s. value of an alternating voltage, and how does it compare with the peak?", a:"The r.m.s. value is the effective value that does the same work as a steady DC of that size; the peak value is larger, peak = r.m.s. × √2, so a 240 V mains peaks near 340 V."},
    {q:"Distinguish between resistance and impedance.", a:"Resistance is the opposition of a resistor, the same for DC and AC; impedance is the total opposition of an AC circuit containing resistance, capacitance and inductance, and it depends on frequency."},
    {q:"Why is electricity transmitted at very high voltage?", a:"At high voltage the current needed for a given power is small, so the energy lost as heat in the transmission lines (I²R) is greatly reduced."},
    {q:"Why is a semiconductor diode used in a power supply?", a:"It allows current to flow in only one direction, so it rectifies the alternating mains supply into direct current for electronic devices."},
  ],
  tf:[
    {s:"The live wire is brown in a standard plug.", a:"true", why:"In standard wiring the live wire is brown."},
    {s:"It is safe to handle electrical appliances with wet hands.", a:"false", why:"Water conducts electricity and greatly increases the danger of electric shock."},
    {s:"A diode allows current to flow in both directions.", a:"false", why:"A diode allows current to flow in one direction only."},
    {s:"The mains supply is a direct current supply.", a:"false", why:"The mains is alternating current; it reverses direction at the mains frequency (50 or 60 Hz)."},
    {s:"A transistor can act as an electrically controlled switch.", a:"true", why:"A small current at the base controls a much larger current, switching it on and off."},
    {s:"A thermistor's resistance rises as it gets hotter.", a:"false", why:"For a thermistor the resistance falls as temperature rises, which is what makes it useful as a temperature sensor."},
  ],
  classify:{ title:"Sort these statements", groups:[
    {name:"Wires in a plug", items:[
      "live", "neutral", "earth"
    ]},
    {name:"Safety devices", items:[
      "fuse", "circuit breaker", "earth wire", "double insulation"
    ]},
    {name:"Energy sources", items:[
      "hydroelectric", "solar", "diesel generator", "wind"
    ]},
    {name:"Billed energy units", items:[
      "kilowatt-hour", "unit (as used on a bill)"
    ]},
  ]},
  diagram:{ title:"A correctly wired three-pin plug", caption:"State what each part does.", parts:[
    {p:"Live pin (brown)", f:"Carries the alternating voltage; fitted with the fuse"},
    {p:"Neutral pin (blue)", f:"Completes the circuit at near-zero potential"},
    {p:"Earth pin (green/yellow)", f:"Safety connection to ground"},
    {p:"Fuse", f:"Melts to break the circuit on an overload"},
    {p:"Cable grip", f:"Holds the cable so the wires cannot be pulled out"},
  ]},
  experiment:{
    title:"Measuring the energy used by a bulb",
    aim:"To measure the electrical power of a bulb and find the energy used in a known time.",
    materials:[
      "A bulb of known power rating", "An ammeter and a voltmeter", "A stopwatch",
      "A battery or power supply", "Connecting wires"
    ],
    steps:[
      "Set up the bulb with the ammeter in series and the voltmeter across it.",
      "Record the current and the voltage.",
      "Calculate the power using P = VI.",
      "Note the time the bulb is on.",
      "Calculate the energy used in joules and in watt-hours.",
    ],
    expect:"The measured power (VI) should be close to the rating printed on the bulb. Energy = power × time, so a 60 W bulb left on for one hour uses 60 Wh = 0.06 kWh.",
    why:"Measuring current and voltage and applying P = VI shows how an appliance's power is found; multiplying by the time it is on gives the energy used, which is what the electricity bill charges for in kWh."
  },
  worked:[
    {q:"A 100 W bulb is on for 10 hours. Find the energy in kWh.", steps:[
      "100 W = 0.1 kW", "0.1 × 10"
    ], a:"1 kWh"},
    {q:"A heater carries 5 A at 240 V. Find its power.", steps:[
      "P = VI", "5 × 240"
    ], a:"1200 W"},
    {q:"The mains supply is 240 V r.m.s. Find its peak voltage. (√2 ≈ 1.41)", steps:[
      "Peak = r.m.s. × √2", "240 × 1.41"
    ], a:"About 340 V"},
    {q:"An AC supply has a frequency of 50 Hz. Find its period.", steps:[
      "T = 1 ÷ f", "1 ÷ 50"
    ], a:"0.02 s"},
  ],
  apply:[
    {q:"Why are the sockets in a house wired in a ring circuit rather than many separate long cables?", a:"A ring circuit uses two paths back to the consumer unit, so thinner cables can be used and each socket still carries its share of current safely and cheaply."},
    {q:"Why is a semiconductor diode used in a power supply?", a:"It allows current to flow in only one direction, so it rectifies the alternating mains supply into direct current for electronic devices."},
    {q:"Why are the metal cases of kettles and cookers connected to the earth wire?", a:"If a live wire comes loose and touches the metal case, the earth wire gives the current an easy path to the ground, blowing the fuse or tripping the breaker instead of shocking anyone who touches the appliance."},
  ],
  activities:[
    "Discuss electrical measuring instruments and use the multimeter on AC and DC circuits",
    "Perform experiments in circuits involving an inductor, a capacitor and a resistor, and find the resonant frequency",
    "Chart how electricity is produced for Liberia (hydro, diesel, solar) and how the national grid reaches homes",
    "Wire a model three-pin plug and ring circuit, and trace the live, neutral and earth paths",
    "Demonstrate the uses of transistors and diodes in a circuit; build a simple half-wave rectifier",
    "Discuss vacuum tubes and the principle of the cathode ray tube"
  ],
  materials:[
    "Voltmeters, ammeters, ohmmeters and multimeters",
    "Resistors, capacitors and inductors; low-voltage AC supplies",
    "Diodes, transistors, thermistors, a small bulb and a power source",
    "Model plugs, sockets, fuses and circuit breakers; conduction wires"
  ],
  assessment:[
    "Practical work", "Written test", "Circuit analysis", "Problem solving", "Class quiz"
  ]
},
{
  grade:12, period:"V", sem:"Two", icon:"☢️",
  title:"Atomic and Nuclear Physics",
  subtitle:"The nucleus and the electron, radioactivity and half-life, the effects of radioactive substances, nuclear fission and fusion, and the uses of nuclear energy",
  outcomes:[
    "Identify substances that can emit harmful particles and take appropriate precautions against the harm of long-term exposure to radioactive substances"
  ],
  objectives:[
    "Examine the properties of an electron",
    "Analyze the effect of radioactive substances on the human body",
    "Draw and analyze the typical atom and the applications of nuclear energy",
    "Distinguish between fission and fusion",
    "Describe radioactivity, its types, radioactive decay and half-life"
  ],
  note:"The <b>nucleus</b> contains <b>protons (Z)</b> and <b>neutrons</b>; the <b>mass number A</b> is the total, and <b>isotopes</b> are atoms of the same element with different neutron counts. Unstable nuclei emit <b>alpha (α)</b>, <b>beta (β)</b> or <b>gamma (γ)</b> radiation, decaying randomly with a constant <b>half-life</b>. <b>Fission</b> splits a heavy nucleus and <b>fusion</b> joins light nuclei, both releasing huge energy by Einstein's <b>E = mc²</b> — the promise and the danger of nuclear power.",
  study:[
    /* ---- course text: Grade 12, Semester Two, Period V — Atomic and Nuclear Physics (guide pp. 34-37) ---- */
    {k:"h3", t:"The Atom and the Electron"},
    {k:"p", t:"Draw and analyze the typical atom: a minute dense **nucleus** of protons and neutrons, with the electrons around it; the **atomic number Z** counts the protons, the **mass number A** the protons + neutrons, and **isotopes** are atoms of the same element whose neutron counts differ (and with them, A). Examine the **properties of the electron** — discovered in **cathode rays**: tiny mass (1/1836 of the proton's), unit negative charge, deflected by electric and magnetic fields. **Thermionic emission** boils electrons off a hot cathode, and the **photoelectric emission** shakes them out with light — the doors by which electrons leave matter; X-rays are born where fast electrons are stopped."},
    {k:"rule"},
    {k:"h3", t:"Radioactivity — Types, Decay, Half-life"},
    {k:"p", t:"**Radioactivity** is the spontaneous break-up of an unstable nucleus. The **types of radiation:** **alpha** particles (helium nuclei — charged +2, short range, stopped by paper, strongly ionizing), **beta** particles (fast electrons — stopped by thin metal) and **gamma** rays (uncharged electromagnetic waves — needing lead or thick concrete). **Radioactive decay** is random and exponential: the **half-life** — the time for half the atoms present to decay — is constant for each isotope, from fractions of a second to billions of years. In the laboratory simulate the decay curve by throwing dice ('sixes decay'), plotting survivors against throws."},
    {k:"p", t:"Identify radioactive substances and the **effects of radioactivity on the human body** — radiation burns, sickness, cancer and damaged cells — and take the appropriate precautions against the harm of long-term exposure: shield, distance, hands off, short exposure. The **uses of radioactive isotopes**: treating cancers, sterilizing instruments, dating old things by carbon-14, and tracing paths through pipes and bodies."},
    {k:"rule"},
    {k:"h3", t:"Fission and Fusion — the Uses of Nuclear Energy"},
    {k:"p", t:"Distinguish the types of nuclear reactions: **fission** — a heavy nucleus (uranium-235) splits when it swallows a neutron, releasing energy and more neutrons that sustain a **chain reaction**; controlled, it runs nuclear power stations; uncontrolled, the atomic bomb. **Fusion** — light nuclei (hydrogen's) joining to helium at star-temperatures — powers the sun and promises clean energy, tamed nowhere yet. Mass becomes energy by Einstein's **E = mc²**."},
    {k:"rule"},
  ],

  focus:[
    "The nucleus and the electron; properties of the electron",
    "Atomic number Z, mass number A and isotopes",
    "Radioactivity: alpha, beta and gamma radiation compared",
    "Radioactive decay and half-life",
    "Radioactive substances and their effects on the human body; precautions",
    "Nuclear fission and fusion; chain reactions",
    "Types of nuclear reactions and the uses of nuclear energy",
    "Thermionic and photoelectric emissions; cathode rays and X-rays"
  ],
  terms:[
    {t:"proton number Z", d:"the number of protons in a nucleus", x:"Z identifies the element."},
    {t:"mass number A", d:"the total number of protons and neutrons in a nucleus", x:"A = Z + number of neutrons."},
    {t:"isotope", d:"atoms of the same element with different numbers of neutrons", x:"Carbon-12 and carbon-14 are isotopes."},
    {t:"radioactivity", d:"the spontaneous emission of radiation from unstable nuclei", x:"Radioactivity is a random process."},
    {t:"alpha particle", d:"two protons and two neutrons, a helium nucleus", x:"Alpha particles are stopped by paper."},
    {t:"beta particle", d:"a fast electron emitted from a nucleus", x:"Beta particles pass through paper but not metal."},
    {t:"gamma ray", d:"high-energy electromagnetic radiation from a nucleus", x:"Gamma rays need thick lead to stop them."},
    {t:"half-life", d:"the time for half of the radioactive nuclei to decay", x:"A half-life of 10 days halves activity every 10 days."},
    {t:"fission", d:"the splitting of a heavy nucleus into lighter ones, releasing energy", x:"Fission powers nuclear reactors."},
    {t:"fusion", d:"the joining of light nuclei to form a heavier one, releasing energy", x:"Fusion powers the Sun."},
    {t:"chain reaction", d:"a self-sustaining series of fissions", x:"A chain reaction releases enormous energy."},
    {t:"thermionic emission", d:"the release of electrons from a hot filament", x:"The cathode ray tube uses thermionic emission."},
  ],
  facts:[
    {q:"Describe the structure of the atom and define A and Z.", a:"An atom has a nucleus of protons and neutrons surrounded by electrons; Z is the proton number and A is the mass number (protons + neutrons)."},
    {q:"What are isotopes? Give an example.", a:"Isotopes are atoms of the same element with the same number of protons but different numbers of neutrons, such as carbon-12 and carbon-14."},
    {q:"Compare alpha, beta and gamma radiation.", a:"Alpha particles are helium nuclei (2p + 2n), positively charged, stopped by paper; beta particles are fast electrons, negatively charged, stopped by a few millimetres of metal; gamma rays are electromagnetic waves, stopped only by thick lead or concrete."},
    {q:"Define half-life.", a:"Half-life is the time taken for half the nuclei in a radioactive sample to decay, so the activity falls to half."},
    {q:"Distinguish nuclear fission from nuclear fusion.", a:"Fission splits a heavy nucleus (such as uranium) into lighter nuclei releasing energy and is used in reactors; fusion joins light nuclei (such as hydrogen) to form a heavier one, releasing far more energy and powering the Sun."},
    {q:"State two uses and two dangers of radioactive isotopes.", a:"Uses: medical imaging and cancer radiotherapy, dating ancient materials, sterilising equipment. Dangers: damage to living cells, cancer and radiation sickness if exposure is excessive."},
    {q:"A sample has a half-life of 10 days. What fraction remains after 20 days?", a:"After one half-life ½ remains; after two, ¼ remains."},
  ],
  tf:[
    {s:"The mass number A is the number of protons in a nucleus.", a:"false", why:"A is the total of protons and neutrons; the number of protons is Z."},
    {s:"Alpha particles are stopped by a sheet of paper.", a:"true", why:"Alpha particles are weakly penetrating."},
    {s:"Gamma rays are the most penetrating form of nuclear radiation.", a:"true", why:"Gamma rays need thick lead or concrete to be stopped."},
    {s:"Half-life is the time for the whole sample to decay.", a:"false", why:"It is the time for half of the sample to decay, not all of it."},
    {s:"Nuclear fusion powers the Sun.", a:"true", why:"The Sun releases energy by fusing hydrogen into helium."},
    {s:"X-rays are produced where fast electrons are suddenly stopped.", a:"true", why:"Stopping fast electrons in a metal target converts their energy into X-ray radiation."},
  ],
  classify:{ title:"Sort these particles and statements", groups:[
    {name:"Alpha properties", items:[
      "helium nucleus", "positive", "stopped by paper"
    ]},
    {name:"Beta properties", items:[
      "fast electron", "negative", "stopped by thin metal"
    ]},
    {name:"Gamma properties", items:[
      "electromagnetic wave", "no charge", "stopped by thick lead"
    ]},
    {name:"Nuclear processes", items:[
      "fission", "fusion", "chain reaction"
    ]},
  ]},
  diagram:{ title:"The structure of the atom", caption:"State what each part is.", parts:[
    {p:"Proton", f:"Positively charged particle; Z counts them"},
    {p:"Neutron", f:"Neutral particle; together with protons gives A"},
    {p:"Electron", f:"Negatively charged particle in the shells"},
    {p:"Nucleus", f:"Dense centre containing protons and neutrons"},
    {p:"Electron shell", f:"The orbit where electrons are found"},
  ]},
  experiment:{
    title:"Modelling half-life with a dice",
    aim:"To model the random decay of a radioactive sample and understand half-life.",
    materials:[
      "A set of dice (or coins)", "Paper and pencil for recording", "A container"
    ],
    steps:[
      "Start with all the dice showing an 'active' state and count them.",
      "Throw all the dice and remove (count as 'decayed') any showing a chosen number, such as 6.",
      "Count how many active dice remain and record the number.",
      "Repeat, throwing only the remaining active dice, until very few are left.",
      "Plot the number of active dice against the number of throws.",
    ],
    expect:"The number of active dice falls roughly by half after every few throws, producing an exponential decay curve very like the decay of a real radioactive sample.",
    why:"Each throw is a random trial in which about one in six of the remaining dice 'decays', so the fraction removed is constant. This constant-fraction removal is exactly how radioactivity decays, and it explains the meaning of half-life."
  },
  worked:[
    {q:"A nucleus has Z = 92 and A = 238. Find the number of neutrons.", steps:[
      "Neutrons = A − Z", "238 − 92"
    ], a:"146 neutrons"},
    {q:"A sample has a half-life of 4 days. What fraction remains after 12 days?", steps:[
      "12 days = 3 half-lives", "(1/2)³"
    ], a:"1/8 remains"},
    {q:"A radioactive sample has an activity of 800 counts/min and a half-life of 5 years. Find its activity after 10 years.", steps:[
      "10 years = 2 half-lives", "800 ÷ 2 = 400, ÷ 2 = 200"
    ], a:"200 counts/min"},
    {q:"How many protons and neutrons are in carbon-14 (Z = 6)?", steps:[
      "Protons = Z = 6", "Neutrons = A − Z = 14 − 6"
    ], a:"6 protons, 8 neutrons"},
  ],
  apply:[
    {q:"Why are carbon-14 and potassium-40 used to date ancient objects?", a:"They decay at a known constant rate (fixed half-life), so measuring the remaining proportion gives the age of the object since it formed."},
    {q:"Why does a nuclear reactor use control rods?", a:"Control rods absorb neutrons to keep the chain reaction going steadily at a safe rate instead of running away."},
    {q:"Why is a smoke detector safe to keep in the house although it contains a radioactive source?", a:"It uses a tiny amount of a weak alpha emitter; alpha particles cannot even cross a sheet of paper or a few centimetres of air, so with the source sealed inside the case no radiation reaches the room."},
  ],
  activities:[
    "Draw and display a simple tracer experiment, and discuss radioactive detectors and substances",
    "Model half-life with dice and plot the decay curve; examine a half-life experiment using Geiger counters",
    "State and discuss the effects of radioactive substances on living things, and the precautions against exposure",
    "Discuss fission and fusion reactions (e.g. the U-238 disintegration) and list the applications of nuclear energy",
    "Explain the nature, properties and characteristics of cathode rays and X-rays"
  ],
  materials:[
    "Dice or coins for the half-life model", "Graph paper for decay curves",
    "Charts of atomic structure and of the nuclear power cycle",
    "A Geiger–Müller counter if available"
  ],
  assessment:[
    "Practical work", "Written test", "Problem solving", "Lab report", "Class quiz"
  ]
},
{
  grade:12, period:"VI", sem:"Two", icon:"🌀",
  title:"High Energy Physics",
  subtitle:"Quantum mechanics and the uncertainty principle, quantum numbers, particle accelerators, detecting instruments, subatomic reactions, the four interactions and Einstein's photoelectric equation",
  outcomes:[
    "Describe the disintegration of atoms in producing energy particles that can be accelerated and captured"
  ],
  objectives:[
    "Examine the uncertainty principle",
    "Analyze the principal quantum numbers and describe the motion of an electron",
    "Discuss the various types of particle accelerators",
    "Identify and discuss the four basic interactions between particles of matter",
    "Analyze the conservation laws of particle physics"
  ],
  note:"<b>High energy physics</b> probes the heart of matter. <b>Quantum mechanics</b> rules the very small: Heisenberg's <b>uncertainty principle</b> limits how precisely position and momentum can be known together, and <b>quantum numbers</b> describe the electron's state of motion. <b>Particle accelerators</b> — linacs and cyclotrons — smash particles to reveal what is inside, <b>detectors</b> record the tracks, and the <b>four basic interactions</b> (gravitational, electromagnetic, weak and strong) with the <b>conservation laws</b> decide which <b>subatomic reactions</b> may happen. Einstein's <b>photoelectric equation</b> hf = W + KE ties light to the quantum.",
  study:[
    /* ---- course text: Grade 12, Semester Two, Period VI — High Energy Physics (guide pp. 38-39) ---- */
    {k:"h3", t:"High Energy Physics — the Frontier"},
    {k:"p", t:"Modern physics pushes deeper: **quantum mechanics** rules the very small — Heisenberg's **uncertainty principle** limits how precisely a particle's position and momentum can both be known — and **quantum numbers** describe the electron's state and its motion about the nucleus. **Particle accelerators** (linacs and cyclotrons, giant rings) smash particles to reveal what's within, with **detecting instruments** (the cloud and bubble chambers, counters) recording their tracks; the **four basic interactions** between particles of matter — the gravitational, the electromagnetic, the weak and the strong nuclear — run the subatomic reactions, and the **conservation laws of particle physics** decide what may happen in them. Einstein's photoelectric equation hf = work function + KE ties the age-old light to the quantum."},
    {k:"rule"},
    {k:"h3", t:"Electron Configuration of the Light Elements"},
    {k:"p", t:"The **quantum numbers** describe the motion of an electron about the nucleus: the **principal quantum number n** fixes the shell (K, L, M…) and its energy, with the subshells, orientations and spins filling in behind it. Electrons occupy the lowest available states first — so hydrogen is **1s¹**, helium **1s²**, and the light elements build up shell by shell (carbon 2,4; sodium 2,8,1). Writing the **electron configuration** of the light elements is the working exercise of the quantum numbers — and the reason the periodic table has the shape it has."},
    {k:"rule"},
    {k:"h3", t:"Einstein's Photoelectric Equation"},
    {k:"p", t:"In the **photoelectric effect** light ejects electrons from a metal surface — instantly, and only when the frequency exceeds a threshold, whatever the intensity. Einstein explained it in 1905: each photon carries energy **hf**; a quantum **W** (the work function) frees the electron, and the remainder leaves as kinetic energy — **hf = W + KE**. The equation, not the wave picture, accounts for the threshold, and it earned the Nobel Prize: light arrives as quanta."},
  ],

  focus:[
    "Quantum mechanics and the uncertainty principle",
    "Principal quantum numbers and the motion of the electron; electron configuration of light elements",
    "Particle accelerators: the linear accelerator (linac) and the cyclotron",
    "Detecting instruments: cloud and bubble chambers, counters",
    "Subatomic particles and reactions; preparing a chart of subatomic particles",
    "The four basic interactions between particles of matter",
    "The conservation laws of particle physics",
    "Einstein's photoelectric equation hf = W + KE"
  ],
  terms:[
    {t:"quantum mechanics", d:"the branch of physics that rules the very small, where energy comes in quanta", x:"Quantum mechanics describes the electron in the atom."},
    {t:"uncertainty principle", d:"Heisenberg's rule that a particle's position and momentum cannot both be known exactly at the same time", x:"The uncertainty principle sets a limit on measurement itself."},
    {t:"quantum number", d:"a number (n, l, m, s) describing an electron's state of motion in an atom", x:"The principal quantum number n gives the shell."},
    {t:"particle accelerator", d:"a machine that speeds charged particles to high energy and smashes them into targets or each other", x:"The cyclotron whirls particles to high speed."},
    {t:"linear accelerator (linac)", d:"an accelerator that pushes particles along a straight line of electrodes", x:"A linac accelerates particles in a straight line."},
    {t:"cyclotron", d:"an accelerator that whirls particles in circles inside two 'dees' under a magnetic field", x:"The cyclotron spirals particles outward to high energy."},
    {t:"cloud chamber", d:"a detector in which passing particles leave trails of droplets", x:"A cloud chamber shows a particle's track."},
    {t:"Geiger–Müller counter", d:"a detector that clicks when radiation or a particle ionizes the gas in its tube", x:"A Geiger counter measures activity."},
    {t:"subatomic particle", d:"any particle smaller than the atom: electrons, protons, neutrons and the many others", x:"Protons and neutrons are subatomic particles."},
    {t:"fundamental interaction", d:"one of the four basic forces between particles: gravitational, electromagnetic, weak and strong", x:"The strong interaction binds the nucleus."},
    {t:"photoelectric effect", d:"the emission of electrons from a metal surface when light of high enough frequency falls on it", x:"The photoelectric cell uses the photoelectric effect."},
    {t:"photon", d:"a quantum (packet) of light energy, E = hf", x:"Each photon carries energy hf."},
  ],
  facts:[
    {q:"State Heisenberg's uncertainty principle.", a:"It is impossible to know both the exact position and the exact momentum of a particle at the same time; the more precisely one is known, the less precisely the other can be."},
    {q:"What do the principal quantum numbers describe?", a:"They describe the allowed states of motion of an electron in an atom — its energy level or shell (n), the subshell (l), the orientation (m) and the spin (s); together they give the electron configuration of an element."},
    {q:"Name two types of particle accelerators and state what each does.", a:"The linear accelerator (linac), which pushes particles to high energy along a straight line of electrodes, and the cyclotron, which whirls them in circles inside two hollow 'dees' under a magnetic field until they spiral out at high speed."},
    {q:"Name two detecting instruments of high energy physics and what they show.", a:"The cloud (or bubble) chamber, which makes the tracks of charged particles visible as trails of droplets (or bubbles), and the Geiger–Müller counter, which counts particles by the ionization they cause in its gas."},
    {q:"Identify and discuss the four basic interactions between particles of matter.", a:"The gravitational interaction (weakest, between masses), the electromagnetic interaction (between charges), the weak interaction (behind beta decay) and the strong interaction (the strongest, binding the nucleus)."},
    {q:"What do the conservation laws of particle physics decide?", a:"They decide which subatomic reactions can happen: energy, momentum, electric charge and other quantum quantities must balance before and after every reaction — a reaction that would break a conservation law cannot occur."},
    {q:"Write Einstein's photoelectric equation and define each term.", a:"hf = W + KE, where hf is the energy of the photon of frequency f, W is the work function (the energy needed to free the electron from the metal) and KE is the kinetic energy of the emitted electron."},
  ],
  tf:[
    {s:"The uncertainty principle says a particle's position and momentum cannot both be known exactly at once.", a:"true", why:"That is Heisenberg's uncertainty principle — precision in one costs precision in the other."},
    {s:"A cyclotron accelerates particles along a straight line.", a:"false", why:"A cyclotron whirls particles in circles inside two 'dees'; it is the linac that accelerates in a straight line."},
    {s:"A cloud chamber makes the tracks of charged particles visible.", a:"true", why:"The particle ionizes the gas along its path, and droplets or bubbles form on the ions to trace the track."},
    {s:"The gravitational interaction is the strongest of the four basic interactions.", a:"false", why:"Gravity is by far the weakest; the strong nuclear interaction is the strongest."},
    {s:"In the photoelectric effect, no electrons are emitted below the threshold frequency, however bright the light.", a:"true", why:"Each photon must carry at least the work function W = hf₀; intensity only adds more photons, not more energy per photon."},
    {s:"The conservation laws can forbid a subatomic reaction from happening.", a:"true", why:"A reaction that would violate conservation of energy, momentum or charge simply cannot occur."},
  ],
  classify:{ title:"Sort these high energy ideas", groups:[
    {name:"Quantum ideas", items:[
      "uncertainty principle", "quantum numbers", "photoelectric equation hf = W + KE"
    ]},
    {name:"Particle accelerators", items:[
      "linear accelerator (linac)", "cyclotron"
    ]},
    {name:"Detecting instruments", items:[
      "cloud chamber", "bubble chamber", "Geiger–Müller counter"
    ]},
    {name:"The four interactions", items:[
      "gravitational", "electromagnetic", "weak", "strong"
    ]},
  ]},
  diagram:{ title:"The cyclotron", caption:"State what each part of the cyclotron does.", parts:[
    {p:"Particle source", f:"Injects charged particles at the centre"},
    {p:"The two 'dees'", f:"Hollow semicircular electrodes the particle whirls inside"},
    {p:"High-frequency supply", f:"Reverses the voltage so the particle is pushed faster each time it crosses the gap"},
    {p:"Magnetic field", f:"Bends the particle's path into circles — faster, wider circles each lap"},
    {p:"Spiral path out", f:"The particle spirals outward as it gains energy, leaving at high speed"},
  ]},
  experiment:{
    title:"Drawing and labelling particle accelerators",
    aim:"To draw and label the diagrams of the linear accelerator and the cyclotron and describe how each accelerates a particle.",
    materials:[
      "Reference charts or textbook diagrams of the linac and cyclotron", "A4 or graph paper",
      "Pencils, rulers and colours"
    ],
    steps:[
      "Study the reference diagram of the linear accelerator and list its parts.",
      "Draw the linac: the source, the line of drift tubes and the alternating supply.",
      "Study the reference diagram of the cyclotron and list its parts.",
      "Draw the cyclotron: the source, the two 'dees', the magnetic field and the spiral path out.",
      "Under each diagram, write two or three sentences on how the machine speeds the particle.",
    ],
    expect:"Neat labelled diagrams of both accelerators, with notes explaining that the linac pushes particles along a straight line while the cyclotron whirls them in circles under a magnetic field, speeding them at every crossing.",
    why:"Drawing and labelling the machines forces attention to how each part works — the electric fields do the accelerating and the magnetic field in the cyclotron does the bending — the same understanding the chart of subatomic particles builds on."
  },
  worked:[
    {q:"A photon has frequency 1.0 × 10¹⁵ Hz. Find its energy. (h = 6.6 × 10⁻³⁴ J s)", steps:[
      "E = hf", "6.6 × 10⁻³⁴ × 1.0 × 10¹⁵"
    ], a:"6.6 × 10⁻¹⁹ J"},
    {q:"Light of photon energy 6.0 × 10⁻¹⁹ J falls on a metal of work function 4.0 × 10⁻¹⁹ J. Find the maximum kinetic energy of the emitted electrons.", steps:[
      "hf = W + KE", "KE = hf − W", "(6.0 − 4.0) × 10⁻¹⁹"
    ], a:"2.0 × 10⁻¹⁹ J"},
    {q:"A Geiger counter records 800 counts per minute from a source of half-life 3 hours. Find the count rate 6 hours later.", steps:[
      "6 hours = 2 half-lives", "800 ÷ 2 = 400; ÷ 2 again"
    ], a:"200 counts per minute"},
    {q:"An electron falls from the n = 3 shell to the n = 2 shell of an atom, emitting a photon of energy 3.0 × 10⁻¹⁹ J. Find the photon's frequency. (h = 6.6 × 10⁻³⁴ J s)", steps:[
      "E = hf", "f = E ÷ h = (3.0 × 10⁻¹⁹) ÷ (6.6 × 10⁻³⁴)"
    ], a:"About 4.5 × 10¹⁴ Hz"},
  ],
  apply:[
    {q:"Why are particle accelerators needed to study the structure of matter?", a:"The nucleus and its particles are held by the strong interaction and can only be split or revealed by smashing them with other particles at very high energy, which only accelerators can provide."},
    {q:"Why does drawing up a chart of subatomic particles help in analyzing nuclear reactions?", a:"The chart lists each particle's charge, mass and other quantum properties, so one can check the conservation laws — energy, momentum and charge — and see at a glance which reactions are possible."},
    {q:"The Sun's surface is about 5800 K, yet its light barely ejects electrons from some metals, while a weak ultraviolet lamp does. Why?", a:"Photoelectric emission depends on the frequency of each photon (hf must exceed the work function), not on the total brightness; ultraviolet photons each carry more energy than visible photons."},
  ],
  activities:[
    "Examine the half-life experiment using Geiger counters (or the dice model)",
    "Write out the electron configuration of some light elements using quantum numbers",
    "Draw and label diagrams of the various particle accelerators",
    "Prepare a chart of subatomic particles and their properties",
    "Discuss the four basic interactions and rank them by strength",
    "Solve problems using Einstein's photoelectric equation"
  ],
  materials:[
    "Geiger–Müller counter if available; dice for modelling half-life",
    "Reference charts of particle accelerators and subatomic particles",
    "Graph paper, pencils, rulers and colours", "Scientific calculators (with indices)"
  ],
  assessment:[
    "Written test", "Diagram work", "Problem solving", "Chart making", "Class presentation"
  ]
},
];
