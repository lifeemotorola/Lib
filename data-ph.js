/* Curriculum data — Republic of Liberia, SENIOR HIGH PHYSICS, Grades 10–12.
   Derived from the "Physics 10-12" senior high curriculum guide (25 Jan 2012,
   Ministry of Education / WAEC), 6 periods per grade, 18 units.

   Uses the same unit shape as SC_CURRICULUM so GEN_SC renders it unchanged:
     grade · period · sem · icon · title · subtitle · outcomes[] · objectives[]
     · note · focus[] · terms[]{t,d,x} · facts[]{q,a} · tf[]{s,a,why}
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
  title:"Introduction to Physics: History and Careers",
  subtitle:"What physics is, the great physicists and their contributions, and careers that use physics",
  outcomes:[
    "Acquire an understanding of what physics is and where it is applied",
    "Appreciate the contributions of great physicists to the growth of the subject",
    "Become aware of the many careers that depend on physics"
  ],
  objectives:[
    "Define physics and explain its branches",
    "State the major contributions of key physicists such as Galileo, Newton, Einstein and Maxwell",
    "Explain the relationship between physics and other sciences",
    "Identify careers and everyday situations in which physics is applied",
    "Relate physics to technology and national development"
  ],
  note:"<b>Physics</b> is the branch of science that studies <b>matter, energy and their interactions</b>. It underlies every other science and every technology around us. Physicists such as <b>Galileo</b> (motion and the telescope), <b>Newton</b> (laws of motion and universal gravitation), <b>Maxwell</b> (electromagnetic theory) and <b>Einstein</b> (relativity) built the ideas this course will develop.",
  focus:[
    "Meaning of physics and its major branches",
    "Matter, energy and their interactions",
    "Contributions of Galileo, Newton, Maxwell, Einstein, Curie",
    "Physics and the other sciences; technology and development",
    "Careers that use physics: engineering, medicine, teaching, energy, transport"
  ],
  terms:[
    {t:"physics", d:"the science that studies matter, energy and their interactions", x:"Physics explains how a ball falls to the ground."},
    {t:"matter", d:"anything that has mass and occupies space", x:"Air, water and iron are all matter."},
    {t:"energy", d:"the ability to do work or cause a change", x:"A moving car has kinetic energy."},
    {t:"force", d:"a push or pull that can change the motion of an object", x:"A force is needed to open a door."},
    {t:"motion", d:"a change in the position of an object with time", x:"The motion of a bus is relative to the road."},
    {t:"gravitation", d:"the attraction between masses by virtue of their mass", x:"Gravitation keeps the Moon around the Earth."},
    {t:"electromagnetism", d:"the unified study of electric and magnetic phenomena", x:"Electromagnetism runs electric motors."},
    {t:"mechanics", d:"the branch of physics dealing with motion and the forces causing it", x:"Mechanics explains how machines work."},
    {t:"optics", d:"the branch of physics dealing with light", x:"Optics explains how lenses form images."},
    {t:"thermodynamics", d:"the study of heat, work and internal energy", x:"Thermodynamics explains how engines turn heat into work."},
    {t:"scientific method", d:"the ordered way of investigation used in science", x:"The scientific method begins with observation."},
    {t:"hypothesis", d:"a testable proposed explanation for an observation", x:"A good hypothesis can be tested by experiment."},
    {t:"technology", d:"the practical application of scientific knowledge", x:"Physics drives much of modern technology."},
    {t:"career", d:"a profession or field of work", x:"Engineering is a career that needs physics."}
  ],
  facts:[
    {q:"Define physics and name three of its branches.", a:"Physics is the science of matter, energy and their interactions. Its branches include mechanics, heat (thermodynamics), light (optics), sound (acoustics), electricity and magnetism, and atomic and nuclear physics."},
    {q:"State one major contribution each of Galileo and Newton.", a:"Galileo studied falling bodies and built the telescope for astronomy; Newton formulated the three laws of motion and the law of universal gravitation."},
    {q:"How did James Clerk Maxwell and Albert Einstein each change physics?", a:"Maxwell unified electricity and magnetism into the theory of electromagnetism and showed that light is an electromagnetic wave; Einstein developed the theories of special and general relativity and the famous equation E = mc²."},
    {q:"Why is physics described as the most fundamental of the sciences?", a:"Because its laws of matter and energy underlie chemistry, biology and all technology; every other science builds on physical principles."},
    {q:"Name four careers that depend on physics.", a:"Engineering, medicine (X-rays and radiotherapy), architecture and building, meteorology, and the energy and transport industries are examples."},
    {q:"What is the relationship between physics and technology?", a:"Physics discovers the underlying principles and technology applies them to build useful devices; in turn new technology lets physics probe further."},
    {q:"State the first step of the scientific method and why it matters.", a:"Careful observation, because every enquiry begins by accurately recording what is seen, measured or happens."}
  ],
  tf:[
    {s:"Physics is the science of matter, energy and their interactions.", a:"true", why:"That is the standard definition of physics."},
    {s:"Isaac Newton discovered the theory of relativity.", a:"false", why:"Relativity was developed by Albert Einstein; Newton gave the laws of motion and gravitation."},
    {s:"Galileo used a telescope to study the heavens.", a:"true", why:"He built and used telescopes to observe the Moon, planets and stars."},
    {s:"Physics has no connection with the other sciences.", a:"false", why:"Physics underlies chemistry and biology and provides the principles used across all science."},
    {s:"Gravity is an example of a non-contact force.", a:"true", why:"It acts between masses without them touching."},
    {s:"Technology and physics are unrelated fields.", a:"false", why:"Technology is the practical application of physical principles."}
  ],
  classify:{ title:"Sort these statements", groups:[
    {name:"About matter", items:["has mass","occupies space","found as solid, liquid or gas"]},
    {name:"About energy", items:["ability to do work","exists as kinetic or potential","can be transferred from one form to another"]},
    {name:"Branches of physics", items:["mechanics","optics","thermodynamics","electricity and magnetism"]},
    {name:"Careers using physics", items:["engineering","radiography","meteorology","architecture"]}
  ]},
  diagram:{ title:"Branches of physics", caption:"State what each branch studies.", parts:[
    {p:"Mechanics", f:"Motion and the forces that cause it"},
    {p:"Heat (Thermodynamics)", f:"Heat, temperature, work and internal energy"},
    {p:"Optics", f:"Light, lenses and the formation of images"},
    {p:"Acoustics", f:"Sound, its production and propagation"},
    {p:"Electricity and magnetism", f:"Charges, currents, fields, motors and generators"},
    {p:"Atomic and nuclear physics", f:"Structure of the atom and the nucleus"}
  ]},
  experiment:{
    title:"Measuring reaction time using physics",
    aim:"To apply the idea of a measured quantity to find a learner's reaction time and to practise careful measurement.",
    materials:["A 30 cm ruler","A partner","Paper and pencil for recording"],
    steps:[
      "Hold the ruler vertically at the zero end while a partner places their open hand below it, thumb and fingers almost touching the zero line.",
      "Let the ruler go without warning.",
      "The partner catches the ruler and reads how far it fell, in centimetres.",
      "Repeat three times and record each fall distance.",
      "Average the fall distances and write them in your report."
    ],
    expect:"The ruler falls only a short distance because reaction time is short. Using the distance fallen and the physics of free fall, the reaction time is found from the formula time = square root of (2 × distance ÷ g).",
    why:"This simple activity shows that physics is about measuring. The distance the ruler falls depends on how long the brain and muscles take to react, so a measured fall distance can be converted into a time using the equations of motion — a direct application of the physics in this course."
  },
  worked:[
    {q:"A learner catches a ruler that has fallen 20 cm. Using g = 9.8 m/s², estimate the reaction time.", steps:["Convert 20 cm to 0.20 m","Use time = √(2 × distance ÷ g)","√(2 × 0.20 ÷ 9.8)"], a:"about 0.20 s"},
    {q:"Convert 5 km to metres.", steps:["1 km = 1000 m","5 × 1000"], a:"5000 m"},
    {q:"Convert 250 g to kilograms.", steps:["1 kg = 1000 g","250 ÷ 1000"], a:"0.25 kg"},
    {q:"Convert 2 hours to seconds.", steps:["1 hour = 3600 s","2 × 3600"], a:"7200 s"}
  ],
  apply:[
    {q:"Why does a doctor need to understand physics even though a doctor is not called a physicist?", a:"Medical imaging, X-rays, ultrasound and radiotherapy all work on physical principles; understanding them helps a doctor use the equipment safely and correctly."},
    {q:"Electricity supply to a town depends on physics. Name one physical principle behind a power station.", a:"A generator turns kinetic energy of a turbine into electrical energy using electromagnetic induction."},
    {q:"Why is it important for a country such as Liberia to produce more engineers and physicists?", a:"They design and maintain the roads, power systems, communications and industries that drive national development."}
  ],
  activities:[
    "Brainstorm and list all the ways physics is used around the school in one day",
    "Research and present the contribution of one great physicist",
    "Draw a concept map showing the branches of physics",
    "List ten jobs or careers that need a knowledge of physics",
    "Demonstrate the scientific method with a simple class enquiry"
  ],
  materials:[
    "Primary text: Senior High Physics (Longman / WAEC series)",
    "Charts of famous physicists and their discoveries",
    "Rulers, stopwatches and simple laboratory apparatus",
    "Library or class notes on physics-based careers"
  ],
  assessment:["Class discussion","Oral presentation","Written test","Group presentation","Poster making"]
},
{
  grade:10, period:"II", sem:"One", icon:"📏",
  title:"Physical Measurements",
  subtitle:"Physical quantities, SI units, measurement instruments, accuracy, precision and experimental error",
  outcomes:[
    "Measure physical quantities accurately and state them in the correct SI units",
    "Use measuring instruments correctly and evaluate the reliability of results"
  ],
  objectives:[
    "Define physical quantity and distinguish fundamental from derived quantities",
    "State the SI base units and their symbols",
    "Derive the units of common derived quantities such as speed, density and force",
    "Use measuring instruments such as the ruler, vernier calliper, micrometer and measuring cylinder",
    "Discuss accuracy, precision, parallax error and random and systematic errors"
  ],
  note:"A <b>physical quantity</b> is anything that can be measured and given a number and a unit. <b>Fundamental quantities</b> — length, mass, time, temperature, electric current, amount of substance and luminous intensity — stand alone. <b>Derived quantities</b> are built from them, for example <b>speed = length ÷ time</b> (m/s), <b>density = mass ÷ volume</b> (kg/m³) and <b>force = mass × acceleration</b> (kg·m/s² = newton).",
  focus:[
    "Physical quantities and their classification",
    "The seven SI base units",
    "Derived units: area, volume, density, speed, acceleration, force, pressure",
    "Measuring instruments and how to read them",
    "Accuracy, precision, parallax and sources of error"
  ],
  terms:[
    {t:"physical quantity", d:"anything that can be measured and expressed in numbers with a unit", x:"Length is a physical quantity."},
    {t:"fundamental quantity", d:"a basic quantity not derived from others", x:"Mass, length and time are fundamental."},
    {t:"derived quantity", d:"a quantity formed by combining fundamental quantities", x:"Speed is a derived quantity."},
    {t:"SI unit", d:"the standard international unit of measurement", x:"The SI unit of length is the metre."},
    {t:"metre", d:"the SI base unit of length", x:"A metre is slightly longer than a yard."},
    {t:"kilogram", d:"the SI base unit of mass", x:"Mass is measured in kilograms."},
    {t:"second", d:"the SI base unit of time", x:"Time is measured in seconds."},
    {t:"kelvin", d:"the SI base unit of temperature", x:"Water boils at 373 K."},
    {t:"ampere", d:"the SI base unit of electric current", x:"Current is measured in amperes."},
    {t:"density", d:"mass per unit volume of a substance", x:"Density = mass ÷ volume."},
    {t:"accuracy", d:"how close a measurement is to the true value", x:"A correct scale gives accuracy."},
    {t:"precision", d:"how close repeated measurements are to one another", x:"Precision is about consistency."},
    {t:"parallax error", d:"reading a scale with the eye not directly over the mark", x:"Look straight at the scale to avoid parallax."},
    {t:"meniscus", d:"the curved surface of a liquid in a narrow tube", x:"Read a burette at the bottom of the meniscus."},
    {t:"zero error", d:"a systematic error because an instrument does not read zero when it should", x:"A micrometer with zero error gives wrong readings."}
  ],
  facts:[
    {q:"Define a physical quantity and give one example each of a fundamental and a derived quantity.", a:"A physical quantity is anything that can be measured and expressed with a number and a unit. Example of a fundamental quantity: length, mass or time; example of a derived quantity: speed, density or force."},
    {q:"State the SI base units for length, mass, time, temperature and electric current.", a:"Metre (m), kilogram (kg), second (s), kelvin (K) and ampere (A)."},
    {q:"Show how the unit of speed is derived from length and time.", a:"Speed = length ÷ time, so its unit is m/s (metre per second)."},
    {q:"Define density and state its unit.", a:"Density is mass per unit volume; its unit is kg/m³ (or g/cm³)."},
    {q:"What is the difference between accuracy and precision?", a:"Accuracy is how close a result is to the true value; precision is how close repeated measurements are to one another. Readings can be precise yet inaccurate if the instrument is wrongly calibrated."},
    {q:"What is parallax error and how is it avoided?", a:"Parallax error comes from reading a scale with the eye not directly over the marking; it is avoided by placing the eye level with the mark."},
    {q:"Why is the volume of a liquid read at the bottom of the meniscus?", a:"The surface of the liquid is curved in a narrow tube; the true level is taken at the lowest point of the curve for a concave meniscus."}
  ],
  tf:[
    {s:"Mass is a derived quantity.", a:"false", why:"Mass is one of the fundamental quantities; speed and density are derived."},
    {s:"The SI unit of time is the second.", a:"true", why:"The second is the SI base unit of time."},
    {s:"Density is defined as mass per unit volume.", a:"true", why:"That is the definition of density."},
    {s:"Parallax error is a type of systematic error.", a:"false", why:"Parallax is usually a random or blunder error caused by eye position; zero error is the systematic type."},
    {s:"Precision means how close a reading is to the true value.", a:"false", why:"That describes accuracy; precision is the closeness of repeated readings to one another."},
    {s:"The kelvin is the SI base unit of temperature.", a:"true", why:"Kelvin is one of the seven SI base units."}
  ],
  classify:{ title:"Sort these quantities and units", groups:[
    {name:"Fundamental quantities", items:["length","mass","time","electric current"]},
    {name:"Derived quantities", items:["speed","density","force","pressure","volume"]},
    {name:"SI base units", items:["metre","kilogram","second","kelvin","ampere"]},
    {name:"Instruments", items:["ruler","vernier calliper","micrometer screw gauge","measuring cylinder"]}
  ]},
  diagram:{ title:"Reading a measuring cylinder", caption:"State what each part is for.", parts:[
    {p:"Scale in cm³ / mL", f:"Used to read the volume of the liquid"},
    {p:"Meniscus", f:"The curved liquid surface; read at its lowest point"},
    {p:"Glass body", f:"Holds the liquid whose volume is measured"},
    {p:"Base", f:"Stands the cylinder firmly on the bench"},
    {p:"Spout", f:"Allows the liquid to be poured out easily"}
  ]},
  experiment:{
    title:"Finding the density of a regular solid",
    aim:"To measure the mass and volume of a regular block and calculate its density.",
    materials:["A rectangular block of wood or metal","A ruler","A balance","A measuring cylinder (for an irregular solid)"],
    steps:[
      "Measure the length, breadth and height of the block with a ruler and record each in metres.",
      "Calculate the volume = length × breadth × height.",
      "Find the mass of the block using the balance and record it in kilograms.",
      "Divide the mass by the volume to find the density.",
      "Repeat twice and average the results."
    ],
    expect:"The density is the mass divided by the volume. For a wooden block it should be less than that of water (about 700–900 kg/m³) so the block floats; a metal block gives a much higher value.",
    why:"This experiment applies the definition density = mass ÷ volume using real measurements. Averaging repeated readings improves accuracy, and the result is expressed in the SI unit kg/m³, exactly the skill the unit teaches."
  },
  worked:[
    {q:"A block measures 0.2 m × 0.1 m × 0.05 m and has a mass of 0.8 kg. Find its volume and density.", steps:["Volume = 0.2 × 0.1 × 0.05 = 0.001 m³","Density = mass ÷ volume = 0.8 ÷ 0.001"], a:"0.001 m³ and 800 kg/m³"},
    {q:"Convert 2.5 kg to grams.", steps:["1 kg = 1000 g","2.5 × 1000"], a:"2500 g"},
    {q:"Convert 750 cm³ to m³.", steps:["1 m³ = 1 000 000 cm³","750 ÷ 1 000 000"], a:"0.00075 m³"},
    {q:"A car travels 150 m in 10 s. Calculate its average speed in m/s.", steps:["Speed = distance ÷ time","150 ÷ 10"], a:"15 m/s"}
  ],
  apply:[
    {q:"Why must a carpenter read a ruler with the eye directly above the marking?", a:"Reading from the side causes parallax error and gives the wrong length; placing the eye directly above removes it."},
    {q:"A micrometer screw gauge reads 4.00 mm when fully closed. What is its zero error and what should you do?", a:"It has a zero error of +0.00... actually it is +0.00 if it reads correctly; if it read 0.02 mm the error would be subtracted from all readings. Here it reads correctly at zero, so no correction is needed."},
    {q:"Why is volume measured in cm³ using a measuring cylinder more accurate for a small liquid than using a beaker?", a:"The measuring cylinder has a narrow, graduated column so the liquid surface (meniscus) can be read more precisely and the scale divisions are smaller."}
  ],
  activities:[
    "List five fundamental and five derived quantities used at home",
    "Measure the height, mass and volume of three objects and record results in SI units",
    "Practise reading the vernier calliper and micrometer screw gauge",
    "Design a table to record repeated measurements and their averages",
    "Demonstrate how to avoid parallax error when reading a burette"
  ],
  materials:[
    "Ruler, metre rule and tape measure",
    "Vernier calliper and micrometer screw gauge",
    "Balance, measuring cylinder, beakers and burette",
    "Various regular and irregular solids and liquids"
  ],
  assessment:["Practical measurement exercise","Written test","Class quiz","Laboratory report","Group work"]
},
{
  grade:10, period:"III", sem:"One", icon:"🛞",
  title:"Mechanics: Forces and Vectors",
  subtitle:"Contact and non-contact forces, vector addition and resolution, resultant force and equilibrium",
  outcomes:[
    "Distinguish the types of forces and represent them correctly",
    "Add and resolve forces as vectors and find resultants"
  ],
  objectives:[
    "Distinguish contact forces from non-contact (field) forces",
    "Distinguish scalar from vector quantities",
    "Add vectors by drawing and by calculation",
    "Resolve a force into perpendicular components",
    "Determine the resultant of two or more forces",
    "Apply the condition for equilibrium of a body"
  ],
  note:"A <b>scalar</b> has only magnitude (mass, speed, energy). A <b>vector</b> has magnitude and direction (force, velocity, displacement). A <b>force</b> is a push or pull measured in <b>newtons (N)</b>; it is a vector. Forces acting on the same point are added <b>head-to-tail</b> to find the <b>resultant</b>, or resolved into <b>perpendicular components</b> F·cosθ and F·sinθ. A body is in <b>equilibrium</b> when the resultant force on it is zero.",
  focus:[
    "Contact and non-contact forces",
    "Scalar and vector quantities and their examples",
    "Representing forces as arrows",
    "Addition of vectors: head-to-tail and parallelogram methods",
    "Resolution of forces into components",
    "Resultant force and equilibrium"
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
    {t:"parallelogram of forces", d:"a graphical method of adding two forces", x:"The diagonal of the parallelogram is the resultant."}
  ],
  facts:[
    {q:"Distinguish a scalar from a vector quantity and give two examples of each.", a:"A scalar has magnitude only (speed, mass, energy); a vector has magnitude and direction (force, velocity, displacement)."},
    {q:"State three contact forces and three non-contact forces.", a:"Contact: friction, tension, normal reaction, air resistance. Non-contact: gravitational force, magnetic force, electrostatic force."},
    {q:"What is meant by the resultant of two forces?", a:"The single force which, acting alone, has exactly the same effect as the two forces together."},
    {q:"State the condition for a body to be in equilibrium under a set of forces.", a:"The resultant (vector sum) of all the forces must be zero."},
    {q:"Explain how the parallelogram method is used to add two forces.", a:"Draw the two forces from the same point at their correct angles; complete the parallelogram; the diagonal from the starting point is the resultant."},
    {q:"A 5 N force acts at 0° and a 5 N force at 90°. What is the magnitude of the resultant?", a:"Resultant = √(5² + 5²) = √50 = 7.07 N, at 45° to either force."},
    {q:"What is the unit of force and how is it defined?", a:"The newton (N); one newton is the force that gives a mass of one kilogram an acceleration of one metre per second squared."}
  ],
  tf:[
    {s:"Speed is a vector quantity.", a:"false", why:"Speed has only magnitude; velocity has magnitude and direction and is the vector."},
    {s:"Gravity is a non-contact force.", a:"true", why:"Gravitational attraction acts between masses even when they are not touching."},
    {s:"The resultant of two forces is always their algebraic sum.", a:"false", why:"Forces are vectors; the resultant depends on the angle between them and is found by vector addition, not simple addition."},
    {s:"A body at rest is in equilibrium.", a:"true", why:"At rest the resultant force on it is zero."},
    {s:"Friction always opposes motion.", a:"true", why:"Friction acts in the direction opposite to the motion or attempted motion."},
    {s:"Mass is a vector quantity.", a:"false", why:"Mass has magnitude only and is a scalar."}
  ],
  classify:{ title:"Sort these quantities", groups:[
    {name:"Scalar quantities", items:["mass","speed","energy","distance","time"]},
    {name:"Vector quantities", items:["force","velocity","displacement","acceleration","weight"]},
    {name:"Contact forces", items:["friction","tension","air resistance","normal reaction"]},
    {name:"Non-contact forces", items:["gravity","magnetic force","electrostatic force"]}
  ]},
  diagram:{ title:"Resolving a force into components", caption:"State what each arrow represents.", parts:[
    {p:"Force F", f:"The original force making an angle θ with the horizontal"},
    {p:"Horizontal component", f:"F·cosθ — the part of the force acting along the horizontal"},
    {p:"Vertical component", f:"F·sinθ — the part of the force acting vertically"},
    {p:"Angle θ", f:"The angle between the force and the horizontal"},
    {p:"Point of application", f:"Where the force acts on the body"}
  ]},
  experiment:{
    title:"The triangle of forces",
    aim:"To show that three forces acting on a point can balance and form a closed triangle.",
    materials:["Three spring balances","A small ring","Three pieces of string","A drawing board with drawing pins"],
    steps:[
      "Tie three strings to the ring and attach a spring balance to each.",
      "Pull the three balances in different directions so the ring stays exactly at the centre of the board.",
      "Read and record the three forces.",
      "Draw the three forces head-to-tail as vectors to scale.",
      "Observe what shape the three arrows form when the ring is balanced."
    ],
    expect:"When the ring is at rest the three arrows drawn head-to-tail form a closed triangle. This shows that the three forces balance because their resultant is zero.",
    why:"The triangle of forces is the graphical form of equilibrium: if three forces acting on a point balance, they can be represented by the three sides of a closed triangle drawn in the correct directions, and the vector sum is zero."
  },
  worked:[
    {q:"Two forces, 6 N east and 8 N north, act on a point. Find the magnitude of the resultant.", steps:["Right-angled: resultant² = 6² + 8²","36 + 64 = 100","√100"], a:"10 N"},
    {q:"A force of 10 N acts at 60° to the horizontal. Find its horizontal and vertical components.", steps:["Horizontal = 10 cos60° = 10 × 0.5","Vertical = 10 sin60° = 10 × 0.866"], a:"5 N horizontal, 8.66 N vertical"},
    {q:"Three forces, 3 N, 4 N and 5 N, balance. What is the resultant?", steps:["Equilibrium means resultant = 0","All forces balance"], a:"0 N"},
    {q:"A 12 N force east and a 5 N force west act on a body. Find the resultant.", steps:["Same line, opposite directions","12 − 5"], a:"7 N east"}
  ],
  apply:[
    {q:"Why is it easier to pull a loaded cart using a rope at a small angle to the horizontal than to push it at the same angle?", a:"Pulling upward at a small angle gives a useful horizontal component and slightly reduces the normal reaction and friction, while pushing presses the cart down and increases friction."},
    {q:"A lamp hangs from a ceiling and does not fall. What can you say about the forces on it?", a:"The lamp is in equilibrium: the upward tension in the wire exactly balances its downward weight, so the resultant force is zero."},
    {q:"Why do we resolve a force into perpendicular components?", a:"Perpendicular components act independently and never interfere, so each can be handled by simple arithmetic and the effects added separately."}
  ],
  activities:[
    "Classify a list of quantities as scalar or vector",
    "Use the parallelogram method to add two forces on graph paper",
    "Set up the triangle-of-forces experiment with spring balances",
    "Resolve several forces into horizontal and vertical components",
    "Identify the forces on a book, a hanging lamp and a moving car"
  ],
  materials:[
    "Spring balances, strings and rings",
    "Drawing board, graph paper, protractor and drawing pins",
    "Metre rule and set squares",
    "Mass hangers and weights"
  ],
  assessment:["Practical work","Written test","Graphical exercises","Class quiz","Assignment"]
},
{
  grade:10, period:"IV", sem:"One", icon:"⚡",
  title:"Work, Energy and Power",
  subtitle:"Definition of work, kinetic and potential energy, the principle of conservation of energy, and power",
  outcomes:[
    "Use the definitions of work, energy and power to solve problems",
    "Apply the principle of conservation of energy to everyday situations"
  ],
  objectives:[
    "Define work and state its unit",
    "Distinguish kinetic from potential energy",
    "State and apply the principle of conservation of energy",
    "Define power and solve problems involving work and power",
    "Identify energy transformations in common devices"
  ],
  note:"<b>Work</b> is done when a force moves a body: W = F × d, measured in <b>joules (J)</b>. <b>Energy</b> is the ability to do work. A body in motion has <b>kinetic energy</b> KE = ½mv²; a raised body has <b>gravitational potential energy</b> PE = mgh. The <b>principle of conservation of energy</b> says energy can neither be created nor destroyed, only transformed. <b>Power</b> is the rate of doing work, P = W/t, measured in <b>watts (W)</b>.",
  focus:[
    "Definition and formula of work",
    "Kinetic and potential energy",
    "The principle of conservation of energy",
    "Power and its unit",
    "Energy transformations in machines and the home",
    "Problem solving with W, KE, PE and P"
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
    {t:"gravitational potential energy", d:"energy due to height above a reference level", x:"PE = mgh."}
  ],
  facts:[
    {q:"Define work and state its formula and unit.", a:"Work is done when a force moves a body in the direction of the force; work = force × distance, and its unit is the joule (J)."},
    {q:"Write the formula for kinetic energy and for gravitational potential energy.", a:"KE = ½mv², where m is mass and v is speed; PE = mgh, where h is the height above the reference level."},
    {q:"State the principle of conservation of energy.", a:"Energy can neither be created nor destroyed; it can only be transformed from one form to another or transferred from one body to another."},
    {q:"Define power and state its unit.", a:"Power is the rate of doing work (work ÷ time); its unit is the watt (W), equal to one joule per second."},
    {q:"A 2 kg stone is lifted 3 m. Taking g = 10 m/s², find its gain in potential energy.", a:"PE = mgh = 2 × 10 × 3 = 60 J."},
    {q:"A body of mass 4 kg moves at 5 m/s. Find its kinetic energy.", a:"KE = ½ × 4 × 5² = ½ × 4 × 25 = 50 J."},
    {q:"A motor does 600 J of work in 30 s. Find its power.", a:"Power = 600 ÷ 30 = 20 W."}
  ],
  tf:[
    {s:"Work is the product of force and distance moved in the direction of the force.", a:"true", why:"That is the definition of work."},
    {s:"The SI unit of power is the joule.", a:"false", why:"The joule is the unit of work and energy; power is measured in watts."},
    {s:"A body at rest on the ground has gravitational potential energy.", a:"false", why:"Its height is taken as zero reference, so its PE is zero; it could have chemical or other energy but not gravitational PE."},
    {s:"Energy can be created but not destroyed.", a:"false", why:"Energy is conserved: it can be transformed but never created or destroyed."},
    {s:"Power is the rate of doing work.", a:"true", why:"Power = work ÷ time."},
    {s:"A faster body has more kinetic energy than a slower body of the same mass.", a:"true", why:"KE = ½mv² grows with the square of the speed."}
  ],
  classify:{ title:"Sort these statements and devices", groups:[
    {name:"Kinetic energy", items:["moving car","flowing water","rotating wheel","running learner"]},
    {name:"Potential energy", items:["raised stone","stretched spring","water stored in a dam","cocked bow"]},
    {name:"Units", items:["joule","watt","newton-metre"]},
    {name:"Energy transformations", items:["battery to light","solar panel to electricity","engine to motion"]}
  ]},
  diagram:{ title:"Energy transformation in a torch", caption:"State what each part does.", parts:[
    {p:"Battery", f:"Stores chemical potential energy"},
    {p:"Switch", f:"Controls the flow of current"},
    {p:"Bulb", f:"Turns electrical energy into light and heat"},
    {p:"Reflector", f:"Directs the light forward"},
    {p:"Case", f:"Holds the parts and completes the circuit"}
  ]},
  experiment:{
    title:"Roller down a slope — energy change",
    aim:"To show how gravitational potential energy changes into kinetic energy.",
    materials:["A ramp (plank or board)","A small ball or toy car","A metre rule","A stopwatch"],
    steps:[
      "Set the ramp at a steady slope on the bench.",
      "Measure the vertical height of the top of the ramp above the bench.",
      "Release the ball from the top and time how long it takes to reach the bottom.",
      "Repeat from the same height and average the times.",
      "Repeat with the ramp at a steeper slope and compare."
    ],
    expect:"The higher the starting point, the more gravitational potential energy the ball has; this energy is converted into kinetic energy of motion, so the ball leaves the ramp faster when released from a greater height.",
    why:"At the top the ball has only gravitational potential energy mgh. As it rolls down, that energy is transformed into kinetic energy ½mv² (and a little heat from friction). This is a direct demonstration of the conservation of energy."
  },
  worked:[
    {q:"A force of 20 N moves a box 5 m in the direction of the force. Find the work done.", steps:["Work = force × distance","20 × 5"], a:"100 J"},
    {q:"A 3 kg ball is dropped from a height of 4 m. Taking g = 10 m/s², find its potential energy at the top.", steps:["PE = mgh","3 × 10 × 4"], a:"120 J"},
    {q:"A 2 kg object moves at 6 m/s. Calculate its kinetic energy.", steps:["KE = ½mv²","½ × 2 × 36"], a:"36 J"},
    {q:"A lift motor does 4500 J of work in 30 s. Find its power in watts.", steps:["Power = work ÷ time","4500 ÷ 30"], a:"150 W"},
    {q:"How much work is done lifting a 10 kg bag through 2 m (g = 10 m/s²)?", steps:["Force = mg = 10 × 10 = 100 N","Work = 100 × 2"], a:"200 J"}
  ],
  apply:[
    {q:"A cyclist stops pedalling on a flat road and gradually slows. Where does the kinetic energy go?", a:"It is converted into heat by friction and air resistance, so the road, tyres and air warm up slightly — energy is conserved, not lost."},
    {q:"Why are hydroelectric dams built high in the mountains?", a:"The greater the height of the stored water, the more gravitational potential energy it has, which becomes more kinetic energy and then more electrical energy in the turbines."},
    {q:"A powerful car and a weak car both climb the same hill in the same time. Which does more work and why?", a:"They do the same work, because both lift the same weight through the same height; the powerful car simply does it faster, so it has more power, not more work."}
  ],
  activities:[
    "Calculate the work done and power in simple machines in the classroom",
    "Drop balls from different heights and relate PE to the bounce",
    "List the energy transformations in five household appliances",
    "Solve problems on KE, PE and power in groups",
    "Design a device that shows a change from potential to kinetic energy"
  ],
  materials:[
    "Ramps, balls and toy cars",
    "Stopwatches and metre rules",
    "Spring balances and weights",
    "Examples of simple appliances for discussion"
  ],
  assessment:["Written test","Problem solving","Class quiz","Practical demonstration","Assignment"]
},
{
  grade:10, period:"V", sem:"One", icon:"⚙️",
  title:"Machines: Moments, Couples and Simple Machines",
  subtitle:"The principle of moments, couples, mechanical advantage, velocity ratio and efficiency of simple machines",
  outcomes:[
    "Apply the principle of moments to balanced levers",
    "Analyse simple machines using mechanical advantage, velocity ratio and efficiency"
  ],
  objectives:[
    "Define moment of a force and state its unit",
    "State and apply the principle of moments",
    "Distinguish a couple and calculate its moment",
    "Define mechanical advantage, velocity ratio and efficiency",
    "Describe the lever, pulley, inclined plane, wheel and axle, wedge and screw",
    "Solve problems on simple machines"
  ],
  note:"The <b>moment of a force</b> about a point is <b>force × perpendicular distance</b>, measured in <b>newton-metres (N m)</b>. The <b>principle of moments</b> states that, for a body in equilibrium, the sum of the clockwise moments equals the sum of the anticlockwise moments about any point. A <b>couple</b> is two equal, parallel and opposite forces; its moment is one force × the distance between them. For a machine, <b>mechanical advantage MA = load ÷ effort</b>, <b>velocity ratio VR = distance moved by effort ÷ distance moved by load</b>, and <b>efficiency = (MA ÷ VR) × 100%</b>.",
  focus:[
    "Moment of a force; clockwise and anticlockwise moments",
    "The principle of moments and the balanced lever",
    "Couples and their moment",
    "Mechanical advantage, velocity ratio and efficiency",
    "Simple machines: lever, pulley, inclined plane, wheel and axle, wedge, screw",
    "The wheelbarrow and other everyday levers"
  ],
  terms:[
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
    {t:"screw", d:"an inclined plane wound around a cylinder", x:"A screw jack lifts heavy loads."}
  ],
  facts:[
    {q:"Define the moment of a force and state its unit.", a:"The moment of a force about a point is the product of the force and the perpendicular distance from the point to the line of action of the force; its unit is the newton-metre (N m)."},
    {q:"State the principle of moments.", a:"When a body is in equilibrium, the sum of the clockwise moments about any point equals the sum of the anticlockwise moments about the same point."},
    {q:"What is a couple and how is its moment found?", a:"A couple is two equal, parallel and opposite forces; its moment is one of the forces multiplied by the distance between their lines of action."},
    {q:"Define mechanical advantage, velocity ratio and efficiency.", a:"MA = load ÷ effort; VR = distance moved by effort ÷ distance moved by load; efficiency = (useful work output ÷ work input) × 100% = (MA ÷ VR) × 100%."},
    {q:"A lever has MA 4 and VR 5. Find its efficiency.", a:"Efficiency = (4 ÷ 5) × 100% = 80%."},
    {q:"Name five simple machines and give one use of each.", a:"Lever (see-saw, crowbar), pulley (lifting), inclined plane (ramp), wheel and axle (door handle, steering wheel), wedge (axe), screw (screw jack)."},
    {q:"Why is the efficiency of a machine always less than 100%?", a:"Because of friction and the work done in lifting the machine's moving parts, some input energy is wasted as heat."}
  ],
  tf:[
    {s:"The moment of a force is measured in joules.", a:"false", why:"Moment is measured in newton-metres (N m); the joule is the unit of work and energy."},
    {s:"For a balanced lever, clockwise moments equal anticlockwise moments.", a:"true", why:"That is the principle of moments."},
    {s:"A couple consists of two equal, parallel and opposite forces.", a:"true", why:"That is the definition of a couple."},
    {s:"Mechanical advantage equals load divided by effort.", a:"true", why:"That is the definition of MA."},
    {s:"The efficiency of a machine can be greater than 100%.", a:"false", why:"Efficiency is always less than 100% because some energy is lost to friction and other effects."},
    {s:"A pulley has a velocity ratio greater than one.", a:"true", why:"The effort moves more than one metre for a single metre of load movement, giving VR above 1."}
  ],
  classify:{ title:"Sort these machines and quantities", groups:[
    {name:"Levers", items:["see-saw","crowbar","wheelbarrow","scissors"]},
    {name:"Other simple machines", items:["pulley","inclined plane","wheel and axle","wedge","screw"]},
    {name:"Measures performance", items:["mechanical advantage","velocity ratio","efficiency"]},
    {name:"Parts of a lever", items:["fulcrum","load","effort","effort arm","load arm"]}
  ]},
  diagram:{ title:"A first-class lever", caption:"State what each part does.", parts:[
    {p:"Fulcrum", f:"The fixed pivot about which the lever turns"},
    {p:"Load", f:"The weight being lifted, at one end of the bar"},
    {p:"Effort", f:"The force applied at the other end"},
    {p:"Effort arm", f:"Distance from the fulcrum to the effort"},
    {p:"Load arm", f:"Distance from the fulcrum to the load"}
  ]},
  experiment:{
    title:"The principle of moments with a metre rule",
    aim:"To verify that clockwise moments equal anticlockwise moments for a balanced lever.",
    materials:["A metre rule","A knife-edge support (fulcrum)","Several masses of known weight","A loop of string"],
    steps:[
      "Balance the metre rule on the knife-edge at its centre.",
      "Hang a known mass at a measured distance on the left and record the anticlockwise moment.",
      "Hang another known mass on the right at a distance that balances the rule.",
      "Calculate the clockwise moment on the right.",
      "Compare the two moments and repeat with different masses."
    ],
    expect:"When the rule is balanced, the clockwise moment equals the anticlockwise moment, so mass × distance on one side equals mass × distance on the other.",
    why:"The metre rule is balanced when the turning effects of the hanging masses are equal and opposite. Comparing the products force × distance on both sides verifies the principle of moments directly."
  },
  worked:[
    {q:"A force of 8 N acts at a perpendicular distance of 0.5 m from a pivot. Find its moment.", steps:["Moment = force × distance","8 × 0.5"], a:"4 N m"},
    {q:"A 60 N load on a lever is 0.2 m from the fulcrum; the effort of 15 N acts 0.8 m away. Check balance.", steps:["Anticlockwise = 60 × 0.2 = 12 N m","Clockwise = 15 × 0.8 = 12 N m","They are equal"], a:"Balanced (12 N m each side)"},
    {q:"A machine lifts a 200 N load with a 50 N effort. Find its mechanical advantage.", steps:["MA = load ÷ effort","200 ÷ 50"], a:"4"},
    {q:"The effort moves 2 m while the load moves 0.5 m. Find the velocity ratio.", steps:["VR = effort distance ÷ load distance","2 ÷ 0.5"], a:"4"},
    {q:"Using MA = 4 and VR = 5, find the efficiency.", steps:["Efficiency = (MA ÷ VR) × 100%","(4 ÷ 5) × 100"], a:"80%"}
  ],
  apply:[
    {q:"Why is a long crowbar easier to use than a short one for lifting a heavy stone?", a:"A longer effort arm multiplies the turning effect, so a smaller effort produces a larger moment about the fulcrum."},
    {q:"Why do builders use a ramp instead of lifting bricks straight up?", a:"The ramp (inclined plane) allows the same work to be done with a smaller effort by moving over a greater distance, though the velocity ratio is larger."},
    {q:"A pulley system has a mechanical advantage of 4. Why is its efficiency still not 100%?", a:"Friction in the pulleys and the weight of the moving parts waste some input energy as heat, so the useful output is less than the input."}
  ],
  activities:[
    "Verify the principle of moments using a metre rule and masses",
    "Measure the MA and VR of a pulley system and calculate its efficiency",
    "Identify the fulcrum, load and effort on five everyday levers",
    "Explain how a wheelbarrow reduces the effort needed",
    "Solve problems on MA, VR and efficiency"
  ],
  materials:[
    "Metre rules, knife-edge supports and sets of masses",
    "Pulley systems, strings and spring balances",
    "Everyday levers: crowbar, scissors, wheelbarrow",
    "Ramps and toy cars for the inclined plane"
  ],
  assessment:["Practical experiment","Written test","Problem solving","Class quiz","Assignment"]
},
{
  grade:10, period:"VI", sem:"Two", icon:"🌡️",
  title:"Structure and Behaviour of Matter; Gas Laws",
  subtitle:"Kinetic theory, elasticity, expansion of matter, and Boyle's, Charles' and the Pressure laws",
  outcomes:[
    "Explain the properties of solids, liquids and gases using the kinetic theory",
    "State and apply the gas laws to solve problems"
  ],
  objectives:[
    "Describe the kinetic theory of matter and its assumptions",
    "Explain adhesion, cohesion, elasticity and Brownian motion",
    "Describe the anomalous expansion of water and heating and cooling curves",
    "State the factors affecting melting and boiling points",
    "State and apply Boyle's, Charles' and the Pressure laws and the combined gas equation",
    "Solve problems using the gas laws"
  ],
  note:"The <b>kinetic theory</b> pictures matter as made of tiny particles in constant motion — closely packed and vibrating in a solid, sliding past one another in a liquid, and far apart and moving rapidly in a gas. The three <b>gas laws</b> are <b>Boyle's law</b> (P ∝ 1/V at constant temperature), <b>Charles' law</b> (V ∝ T at constant pressure) and the <b>Pressure law</b> (P ∝ T at constant volume). They combine into the <b>combined gas equation</b> P₁V₁/T₁ = P₂V₂/T₂.",
  focus:[
    "Kinetic theory and its assumptions",
    "Adhesion, cohesion and elasticity",
    "Brownian motion as evidence of particle motion",
    "Anomalous (unusual) expansion of water",
    "Heating and cooling curves; melting and boiling points",
    "Boyle's, Charles' and the Pressure laws; the combined gas equation"
  ],
  terms:[
    {t:"kinetic theory", d:"the idea that matter is made of particles in constant motion", x:"Kinetic theory explains why gases fill a container."},
    {t:"cohesion", d:"the force of attraction between particles of the same substance", x:"Cohesion holds a drop of water together."},
    {t:"adhesion", d:"the force of attraction between particles of different substances", x:"Adhesion makes water cling to glass."},
    {t:"elasticity", d:"the property of a body to return to its original shape after deformation", x:"A rubber band shows elasticity."},
    {t:"Brownian motion", d:"the random, zigzag motion of small particles caused by collisions", x:"Brownian motion is seen with pollen in water."},
    {t:"anomalous expansion", d:"the unusual behaviour of water contracting from 4°C down to 0°C", x:"Anomalous expansion lets ice float."},
    {t:"melting point", d:"the temperature at which a solid changes to a liquid", x:"Ice melts at 0°C."},
    {t:"boiling point", d:"the temperature at which a liquid boils into vapour", x:"Water boils at 100°C at sea level."},
    {t:"Boyle's law", d:"pressure is inversely proportional to volume at constant temperature", x:"Boyle's law: P₁V₁ = P₂V₂."},
    {t:"Charles' law", d:"volume is proportional to absolute temperature at constant pressure", x:"Charles' law: V₁/T₁ = V₂/T₂."},
    {t:"pressure law", d:"pressure is proportional to absolute temperature at constant volume", x:"Pressure law: P₁/T₁ = P₂/T₂."},
    {t:"absolute zero", d:"the lowest possible temperature, −273 °C or 0 K", x:"Absolute zero is 0 K."},
    {t:"combined gas equation", d:"the single equation uniting the three gas laws", x:"P₁V₁/T₁ = P₂V₂/T₂."}
  ],
  facts:[
    {q:"State the main idea of the kinetic theory of matter.", a:"All matter is made of very small particles in constant motion; the arrangement and speed of the particles explain the properties of solids, liquids and gases."},
    {q:"Distinguish cohesion from adhesion with one example of each.", a:"Cohesion is attraction between particles of the same substance (a drop of water holds together); adhesion is attraction between different substances (water clings to a glass wall)."},
    {q:"What is Brownian motion and what does it show?", a:"The random, zigzag motion of tiny particles in a fluid, caused by collisions with molecules; it gives evidence that molecules are in continuous motion."},
    {q:"State Boyle's law and write its equation.", a:"At constant temperature, the pressure of a fixed mass of gas is inversely proportional to its volume; P₁V₁ = P₂V₂."},
    {q:"State Charles' law and the pressure law.", a:"At constant pressure the volume of a gas is proportional to its absolute temperature (V₁/T₁ = V₂/T₂); at constant volume the pressure is proportional to absolute temperature (P₁/T₁ = P₂/T₂)."},
    {q:"Write the combined gas equation.", a:"P₁V₁/T₁ = P₂V₂/T₂, using temperatures in kelvin."},
    {q:"What is unusual about the expansion of water?", a:"Water contracts as it cools from 4 °C to 0 °C instead of expanding, so ice is less dense than water and floats; this is the anomalous expansion of water."}
  ],
  tf:[
    {s:"In a solid the particles are closely packed and vibrate about fixed positions.", a:"true", why:"That is the kinetic theory picture of a solid."},
    {s:"Cohesion is the attraction between particles of different substances.", a:"false", why:"Cohesion is between particles of the same substance; attraction between different substances is adhesion."},
    {s:"Boyle's law states that pressure is inversely proportional to volume at constant temperature.", a:"true", why:"That is Boyle's law."},
    {s:"Charles' law is applied at constant pressure.", a:"true", why:"Charles' law relates volume and temperature at constant pressure."},
    {s:"In gas law calculations temperatures are used in degrees Celsius.", a:"false", why:"Temperatures must be in kelvin (absolute) for the gas laws to work."},
    {s:"Ice is denser than water.", a:"false", why:"Because of anomalous expansion, ice is less dense and floats on water."}
  ],
  classify:{ title:"Sort these statements", groups:[
    {name:"Properties of solids", items:["fixed shape","fixed volume","particles vibrate about fixed points"]},
    {name:"Properties of liquids", items:["fixed volume","no fixed shape","particles slide past one another"]},
    {name:"Properties of gases", items:["no fixed shape","no fixed volume","particles far apart and move rapidly"]},
    {name:"Gas laws", items:["Boyle's law","Charles' law","pressure law","combined gas equation"]}
  ]},
  diagram:{ title:"The three states of matter", caption:"State what the particles do in each state.", parts:[
    {p:"Solid", f:"Particles closely packed and vibrating about fixed positions"},
    {p:"Liquid", f:"Particles close together but free to slide past one another"},
    {p:"Gas", f:"Particles far apart, moving rapidly and randomly"},
    {p:"Heating", f:"Supplies energy that loosens the particles and changes the state"},
    {p:"Cooling", f:"Removes energy and brings the particles closer together"}
  ]},
  experiment:{
    title:"Boyle's law with a syringe",
    aim:"To show that the pressure and volume of a gas are inversely proportional at constant temperature.",
    materials:["A strong plastic syringe","A few drops of oil","A clamp","A set of small masses or a book"],
    steps:[
      "Seal the nozzle of the syringe and draw the plunger out so a fixed volume of air is trapped.",
      "Note the initial volume reading.",
      "Place a known force (mass) on the plunger to increase the pressure and record the new volume.",
      "Add more force in steps, recording pressure and volume each time.",
      "Multiply pressure by volume at each step and compare the products."
    ],
    expect:"The product of pressure and volume stays roughly constant at each step, showing that P is inversely proportional to V for the trapped air at constant temperature — Boyle's law.",
    why:"The trapped air is a fixed mass at roughly constant temperature. Doubling the force doubles the pressure and halves the volume, keeping P×V constant, exactly as Boyle's law predicts."
  },
  worked:[
    {q:"A gas occupies 300 cm³ at a pressure of 100 kPa. Find its volume when the pressure becomes 200 kPa at constant temperature.", steps:["Boyle's law P₁V₁ = P₂V₂","100 × 300 = 200 × V₂","V₂ = 30000 ÷ 200"], a:"150 cm³"},
    {q:"A gas has volume 500 cm³ at 300 K. Find its volume at 360 K at constant pressure.", steps:["Charles' law V₁/T₁ = V₂/T₂","500/300 = V₂/360","V₂ = (500 × 360) ÷ 300"], a:"600 cm³"},
    {q:"Convert 27 °C to kelvin.", steps:["K = °C + 273","27 + 273"], a:"300 K"},
    {q:"A gas at 200 kPa and 300 K has a pressure of 250 kPa at constant volume. Find the new temperature.", steps:["Pressure law P₁/T₁ = P₂/T₂","200/300 = 250/T₂","T₂ = (250 × 300) ÷ 200"], a:"375 K"}
  ],
  apply:[
    {q:"Why does a sealed plastic bottle of water bulge when left in the sun?", a:"Heat warms the air and water vapour inside; at nearly constant volume the increased temperature raises the pressure, pressing the bottle outward."},
    {q:"Why do fish survive a hard winter in a pond that freezes only at the surface?", a:"Anomalous expansion makes the 4 °C water densest at the bottom, so the colder, less dense water stays on top and freezes, protecting the warmer water beneath."},
    {q:"Why is a tyre more likely to burst on a hot day?", a:"Heating raises the temperature and therefore the pressure of the gas inside the tyre (pressure law); if the tyre cannot hold the higher pressure it bursts."}
  ],
  activities:[
    "Demonstrate Brownian motion using smoke or ink in water under a microscope",
    "Verify Boyle's law with a syringe and record a table of P and V",
    "Plot a heating curve for a substance and identify its melting and boiling points",
    "Solve gas law problems in groups",
    "Discuss why ice floats and why it matters"
  ],
  materials:[
    "Syringes, oil, clamps and masses",
    "Thermometers, beakers, ice and Bunsen burner",
    "Microscope, ink or smoke cell for Brownian motion",
    "Graph paper and rulers"
  ],
  assessment:["Practical experiment","Written test","Graph work","Problem solving","Class quiz"]
},

/* ================================ GRADE 11 ================================ */
{
  grade:11, period:"I", sem:"One", icon:"🔥",
  title:"Heat Energy",
  subtitle:"Internal energy, specific heat capacity, latent heat, methods of heat transfer and expansion",
  outcomes:[
    "Explain heat and temperature and solve problems on specific heat and latent heat",
    "Describe the methods of heat transfer and their everyday applications"
  ],
  objectives:[
    "Distinguish heat from temperature",
    "Define internal energy and specific heat capacity",
    "Define specific latent heat of fusion and vaporisation",
    "Solve problems using Q = mcΔT and Q = mL",
    "Describe conduction, convection and radiation with examples",
    "Describe thermal expansion and its applications"
  ],
  note:"<b>Heat</b> is the energy that flows because of a temperature difference; <b>temperature</b> measures the degree of hotness. The heat needed to warm a substance is <b>Q = mcΔT</b>, where c is the <b>specific heat capacity</b>. During a change of state the temperature stays constant and the heat is the <b>latent heat</b> <b>Q = mL</b>. Heat moves by <b>conduction</b>, <b>convection</b> and <b>radiation</b>.",
  focus:[
    "Heat versus temperature",
    "Internal energy and specific heat capacity",
    "Specific latent heat of fusion and vaporisation",
    "Heating and cooling curves",
    "Conduction, convection and radiation",
    "Thermal expansion and its uses"
  ],
  terms:[
    {t:"heat", d:"energy that flows from a hotter to a colder body", x:"Heat flows until temperatures are equal."},
    {t:"temperature", d:"a measure of the degree of hotness of a body", x:"Temperature is measured with a thermometer."},
    {t:"internal energy", d:"the total kinetic and potential energy of the particles of a body", x:"Internal energy rises when a body is heated."},
    {t:"specific heat capacity", d:"the heat needed to raise the temperature of 1 kg of a substance by 1 °C", x:"Water has a high specific heat capacity."},
    {t:"latent heat", d:"heat absorbed or released during a change of state without a temperature change", x:"Melting ice absorbs latent heat."},
    {t:"specific latent heat of fusion", d:"heat to change 1 kg of solid to liquid at the melting point", x:"Fusion latent heat melts ice to water."},
    {t:"specific latent heat of vaporisation", d:"heat to change 1 kg of liquid to vapour at the boiling point", x:"Vaporisation latent heat turns water to steam."},
    {t:"conduction", d:"heat transfer through a material without the material itself moving", x:"A metal spoon heats by conduction."},
    {t:"convection", d:"heat transfer by the movement of a fluid", x:"Warm air rises by convection."},
    {t:"radiation", d:"heat transfer by infrared waves without any medium", x:"The Sun heats Earth by radiation."},
    {t:"expansion", d:"an increase in size when heated", x:"A railway rail expands in the heat."}
  ],
  facts:[
    {q:"Distinguish heat from temperature.", a:"Heat is a form of energy that flows between bodies at different temperatures; temperature is a measure of the average kinetic energy of the particles, i.e. how hot a body is."},
    {q:"Write the formula for heat to change temperature and define each term.", a:"Q = mcΔT, where Q is heat, m is mass, c is specific heat capacity and ΔT is the temperature rise."},
    {q:"What is specific latent heat and why is there no temperature change during a change of state?", a:"It is the heat required to change the state of 1 kg of a substance at constant temperature; the energy is used to break or form the bonds between particles rather than to raise their kinetic energy, so the temperature does not change."},
    {q:"Name the three methods of heat transfer and give one example of each.", a:"Conduction — heating a metal spoon in a hot liquid; convection — warm air rising in a room; radiation — heat from the Sun reaching Earth through space."},
    {q:"How much heat is needed to raise the temperature of 2 kg of water by 5 °C? (c = 4200 J/kg°C)", a:"Q = 2 × 4200 × 5 = 42 000 J."},
    {q:"Why does a black surface radiate and absorb heat better than a shiny one?", a:"Dull black surfaces are better absorbers and emitters of radiation, while shiny surfaces reflect heat and radiation."},
    {q:"State two useful applications of thermal expansion.", a:"The bimetallic strip in thermostats, expansion of mercury in a thermometer, and gaps left in railway rails to allow expansion."}
  ],
  tf:[
    {s:"Temperature is the same thing as heat.", a:"false", why:"Temperature is a measure of hotness; heat is energy that flows because of a temperature difference."},
    {s:"The heat to change temperature is given by Q = mcΔT.", a:"true", why:"That is the standard formula."},
    {s:"During melting the temperature of a substance remains constant.", a:"true", why:"Latent heat is absorbed to break bonds without raising the temperature."},
    {s:"Heat can be transferred by radiation even through a vacuum.", a:"true", why:"Radiation needs no medium; the Sun heats Earth through empty space."},
    {s:"Convection can take place in a solid.", a:"false", why:"Convection needs a fluid that can move; solids transfer heat mainly by conduction."},
    {s:"Water has a low specific heat capacity.", a:"false", why:"Water has a very high specific heat capacity of about 4200 J/kg°C."}
  ],
  classify:{ title:"Sort these statements", groups:[
    {name:"Methods of heat transfer", items:["conduction","convection","radiation"]},
    {name:"Heat formulas", items:["Q = mcΔT","Q = mL"]},
    {name:"Good conductors", items:["copper","aluminium","iron"]},
    {name:"Good insulators", items:["wood","air","plastic","cotton"]}
  ]},
  diagram:{ title:"The bimetallic strip thermostat", caption:"State what each part does.", parts:[
    {p:"Brass strip", f:"Expands more when heated"},
    {p:"Iron strip", f:"Expands less when heated"},
    {p:"Contact point", f:"Opens or closes the circuit"},
    {p:"Screw adjuster", f:"Sets the temperature at which the thermostat switches"},
    {p:"Circuit wires", f:"Carry the current that the thermostat controls"}
  ]},
  experiment:{
    title:"Heating curve of a substance",
    aim:"To plot how temperature changes with time as ice warms, melts and then boils.",
    materials:["Ice in a beaker","A thermometer","A Bunsen burner or hot plate","A stopwatch","Graph paper"],
    steps:[
      "Place crushed ice in a beaker and record its temperature.",
      "Heat gently and record the temperature every minute.",
      "Continue until the water has melted and then boiled for several minutes.",
      "Plot a graph of temperature against time.",
      "Identify the flat parts of the curve where the temperature stopped changing."
    ],
    expect:"The curve shows a rising portion as the ice warms, then a flat part at 0 °C while the ice melts (latent heat of fusion), then a rising portion as the water warms, then a flat part at 100 °C while it boils (latent heat of vaporisation).",
    why:"The flat parts show that during a change of state the temperature stays constant while heat energy is absorbed as latent heat to change the state, confirming the ideas of specific heat capacity and latent heat."
  },
  worked:[
    {q:"Find the heat needed to raise 2 kg of water from 20 °C to 30 °C (c = 4200 J/kg°C).", steps:["ΔT = 30 − 20 = 10 °C","Q = mcΔT = 2 × 4200 × 10"], a:"84 000 J"},
    {q:"How much heat is needed to melt 0.5 kg of ice? (L = 3.34 × 10⁵ J/kg)", steps:["Q = mL","0.5 × 3.34 × 10⁵"], a:"167 000 J"},
    {q:"A 3 kg metal block warms by 25 °C with 30 000 J. Find its specific heat capacity.", steps:["c = Q ÷ (mΔT)","30000 ÷ (3 × 25)"], a:"400 J/kg°C"},
    {q:"Convert 100 °C to kelvin.", steps:["K = °C + 273","100 + 273"], a:"373 K"}
  ],
  apply:[
    {q:"Why does a coastal town stay cooler in summer than an inland town?", a:"Water has a high specific heat capacity and heats up slowly, and sea breezes bring cooler air, moderating the coastal temperature."},
    {q:"Why do food pots use black, rough bottoms?", a:"Dull black surfaces absorb radiation better, so more heat from the flame is transferred into the pot."},
    {q:"Why must a gap be left between the rails of a railway line?", a:"The gap allows the rails to expand in the heat without buckling, preventing damage."}
  ],
  activities:[
    "Plot the heating curve of water and interpret its flat portions",
    "Compare the rates of heating of equal masses of water and sand",
    "Demonstrate conduction through different materials",
    "Demonstrate convection using smoke or a candle in a jar",
    "Solve problems on specific heat capacity and latent heat"
  ],
  materials:[
    "Beakers, thermometer, Bunsen burner and ice",
    "Metals rods and wax to show conduction",
    "Candle, smoke and glass jars for convection",
    "Black and shiny cans and a lamp for radiation"
  ],
  assessment:["Practical work","Written test","Graph interpretation","Problem solving","Class quiz"]
},
{
  grade:11, period:"II", sem:"One", icon:"🔊",
  title:"Waves and Sound",
  subtitle:"Transverse and longitudinal waves, wave properties, the production and speed of sound and echoes",
  outcomes:[
    "Distinguish types of waves and describe their properties",
    "Explain the production and propagation of sound and solve wave problems"
  ],
  objectives:[
    "Distinguish transverse from longitudinal waves",
    "Define wavelength, frequency, period, amplitude and wave speed",
    "Use the wave equation v = fλ",
    "Describe how sound is produced and travels",
    "Explain reflection of sound (echo) and its uses",
    "Describe the vibrating string and the range of human hearing"
  ],
  note:"A <b>wave</b> is a disturbance that transfers energy without transferring matter. In a <b>transverse</b> wave the particles vibrate at right angles to the direction of travel (water waves, light); in a <b>longitudinal</b> wave they vibrate along it (sound). The <b>wave equation</b> is <b>v = fλ</b>, where v is speed, f frequency and λ wavelength. <b>Sound</b> is a longitudinal wave produced by a vibrating source and needs a medium; it cannot travel in a vacuum.",
  focus:[
    "Transverse and longitudinal waves",
    "Wavelength, frequency, period, amplitude and speed",
    "The wave equation v = fλ",
    "Production and propagation of sound",
    "Speed of sound; echoes and their uses",
    "Vibrating strings and the audio range of human hearing"
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
    {t:"audio range", d:"the range of frequencies the human ear can hear", x:"The audio range is about 20 Hz to 20 000 Hz."}
  ],
  facts:[
    {q:"Distinguish a transverse from a longitudinal wave and give one example of each.", a:"In a transverse wave the particles vibrate at right angles to the direction of travel (water waves, light); in a longitudinal wave they vibrate along the direction of travel (sound)."},
    {q:"Define wavelength, frequency and period.", a:"Wavelength is the distance between two successive crests or compressions; frequency is the number of complete waves per second; period is the time for one complete wave (T = 1/f)."},
    {q:"State the wave equation and define its terms.", a:"v = fλ, where v is wave speed (m/s), f is frequency (Hz) and λ is wavelength (m)."},
    {q:"A wave has a frequency of 100 Hz and a wavelength of 3 m. Find its speed.", a:"v = fλ = 100 × 3 = 300 m/s."},
    {q:"Why can sound not travel through a vacuum?", a:"Sound is a longitudinal wave that needs particles to vibrate and pass on the disturbance; a vacuum has no particles."},
    {q:"What is an echo and how is it useful?", a:"An echo is the reflection of sound; it is used in echo sounding to measure the depth of the sea and in estimating distances."},
    {q:"State the range of frequencies audible to a normal human ear.", a:"Roughly 20 Hz to 20 000 Hz."}
  ],
  tf:[
    {s:"Sound is a longitudinal wave.", a:"true", why:"Sound travels by compressions and rarefactions along its direction of travel."},
    {s:"Light is a transverse wave.", a:"true", why:"Light vibrates at right angles to its direction of travel."},
    {s:"The period of a wave is the number of waves per second.", a:"false", why:"That is the frequency; the period is the time for one wave (T = 1/f)."},
    {s:"Wave speed equals frequency multiplied by wavelength.", a:"true", why:"That is the wave equation v = fλ."},
    {s:"Sound can travel through empty space.", a:"false", why:"Sound needs a medium such as air, water or a solid."},
    {s:"An echo is produced by the reflection of sound.", a:"true", why:"An echo is reflected sound returning to the listener."}
  ],
  classify:{ title:"Sort these waves and terms", groups:[
    {name:"Transverse waves", items:["light","water ripple","radio wave"]},
    {name:"Longitudinal waves", items:["sound","ultrasound"]},
    {name:"Wave measurements", items:["wavelength","frequency","period","amplitude","speed"]},
    {name:"Sound phenomena", items:["echo","vibrating string","compression","rarefaction"]}
  ]},
  diagram:{ title:"A transverse wave", caption:"State what each part represents.", parts:[
    {p:"Crest", f:"The highest point of the wave"},
    {p:"Trough", f:"The lowest point of the wave"},
    {p:"Amplitude", f:"The maximum displacement from the rest position"},
    {p:"Wavelength", f:"Distance between two successive crests"},
    {p:"Rest position", f:"The level of the undisturbed medium"}
  ]},
  experiment:{
    title:"Speed of sound by echo",
    aim:"To measure the speed of sound using an echo against a distant wall.",
    materials:["A large open space with a distant wall","A clapper or drum","A stopwatch","A measuring tape"],
    steps:[
      "Measure the distance from the source to the reflecting wall.",
      "Make a loud clap and start the stopwatch.",
      "Stop the watch when the echo is heard.",
      "Repeat several times and average the times.",
      "Use speed = distance ÷ time, remembering the sound travels to the wall and back."
    ],
    expect:"The speed works out close to the accepted value of about 340 m/s in air at room temperature. The total distance travelled by the sound is twice the distance to the wall.",
    why:"The sound travels from the source to the wall and back, so the total distance is 2 × d. Dividing this by the echo time gives the speed of sound, an example of using v = distance ÷ time with a real measurement."
  },
  worked:[
    {q:"A wave has a frequency of 50 Hz and a wavelength of 4 m. Find its speed.", steps:["v = fλ","50 × 4"], a:"200 m/s"},
    {q:"A wave travels at 340 m/s with a frequency of 170 Hz. Find its wavelength.", steps:["λ = v ÷ f","340 ÷ 170"], a:"2 m"},
    {q:"Find the period of a wave of frequency 200 Hz.", steps:["T = 1 ÷ f","1 ÷ 200"], a:"0.005 s"},
    {q:"A sound travels 1020 m in 3 s. Find its speed.", steps:["Speed = distance ÷ time","1020 ÷ 3"], a:"340 m/s"}
  ],
  apply:[
    {q:"Why can two people on the Moon not talk to each other directly?", a:"There is no air (medium) on the Moon, so sound waves have nothing to travel through; speech cannot pass between them."},
    {q:"How does a ship measure the depth of the sea?", a:"It sends a sound (or ultrasound) pulse to the bottom and times the echo; depth = (speed × time) ÷ 2 because the sound travels down and back."},
    {q:"Why does a guitar string that is shorter produce a higher note?", a:"A shorter string vibrates with a smaller wavelength and therefore a higher frequency, which we hear as a higher pitch."}
  ],
  activities:[
    "Demonstrate transverse and longitudinal waves with a slinky spring",
    "Measure the speed of sound by the echo method",
    "Show how a vibrating string produces different notes",
    "Draw and label transverse and longitudinal waves",
    "Solve problems using the wave equation"
  ],
  materials:[
    "Slinky springs and ropes",
    "Tuning forks, drums and clappers",
    "Stopwatch, measuring tape and a long corridor or wall",
    "Guitar string or elastic band fixed on a box"
  ],
  assessment:["Practical work","Written test","Problem solving","Class demonstration","Quiz"]
},
{
  grade:11, period:"III", sem:"One", icon:"🔌",
  title:"Electricity: Current, Circuits and Ohm's Law",
  subtitle:"Electric current, circuit components and symbols, series and parallel circuits and Ohm's law",
  outcomes:[
    "Set up and interpret simple circuits and use Ohm's law",
    "Distinguish series and parallel circuits and solve problems"
  ],
  objectives:[
    "Define electric current and its unit",
    "Distinguish direct from alternating current",
    "Draw and recognise circuit symbols",
    "Distinguish series and parallel circuits",
    "State and apply Ohm's law V = IR",
    "Calculate resistance, current, voltage and power in simple circuits"
  ],
  note:"<b>Electric current</b> is the rate of flow of charge, measured in <b>amperes (A)</b>. <b>Direct current</b> flows one way (from a cell or battery); <b>alternating current</b> reverses direction regularly (from mains). <b>Ohm's law</b> states that, at constant temperature, the current through a conductor is proportional to the voltage across it: <b>V = IR</b>. In a <b>series</b> circuit the same current flows everywhere and resistances add; in a <b>parallel</b> circuit the voltage is the same across every branch.",
  focus:[
    "Electric current, charge and the ampere",
    "Direct and alternating current",
    "Circuit components and their symbols",
    "Series and parallel circuits",
    "Ohm's law V = IR",
    "Power P = VI and resistance calculations"
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
    {t:"insulator", d:"a material that does not allow current to flow", x:"Plastic is an insulator."}
  ],
  facts:[
    {q:"Define electric current and state its unit.", a:"Electric current is the rate of flow of electric charge, measured in amperes (A); one ampere is one coulomb of charge passing per second."},
    {q:"Distinguish direct from alternating current.", a:"Direct current flows in one direction only (from a cell or battery); alternating current reverses direction regularly (as from mains electricity)."},
    {q:"State Ohm's law and write its equation.", a:"At constant temperature the current through a conductor is proportional to the voltage across it; V = IR."},
    {q:"What is the difference between a series and a parallel circuit?", a:"In series the components are connected one after another so the same current flows through all; in parallel each branch has the same voltage and the current divides between branches."},
    {q:"A resistor has a voltage of 12 V across it and a current of 3 A. Find its resistance.", a:"R = V ÷ I = 12 ÷ 3 = 4 Ω."},
    {q:"Name three circuit symbols a learner should know.", a:"Cell, battery, bulb, switch, ammeter, voltmeter and resistor are common symbols."},
    {q:"Why are the bulbs in a house wired in parallel rather than in series?", a:"In parallel each bulb gets the full mains voltage and can be switched independently, and if one fails the others stay on."}
  ],
  tf:[
    {s:"Electric current is the rate of flow of charge.", a:"true", why:"That is the definition of current."},
    {s:"Direct current reverses direction regularly.", a:"false", why:"Direct current flows one way; alternating current reverses direction."},
    {s:"Ohm's law states V = IR.", a:"true", why:"Voltage equals current times resistance at constant temperature."},
    {s:"In a series circuit the voltage is the same across every component.", a:"false", why:"In a series circuit the current is the same and the voltages add; it is in a parallel circuit that the voltage is the same across every branch."},
    {s:"A good insulator allows current to flow easily.", a:"false", why:"An insulator does not allow current to flow easily; a conductor does."},
    {s:"Resistance is measured in ohms.", a:"true", why:"The ohm is the unit of resistance."}
  ],
  classify:{ title:"Sort these statements and materials", groups:[
    {name:"Conductors", items:["copper","aluminium","iron","sea water"]},
    {name:"Insulators", items:["plastic","rubber","glass","wood"]},
    {name:"Series circuit facts", items:["same current everywhere","resistances add","one path for current"]},
    {name:"Parallel circuit facts", items:["same voltage across branches","current divides","independent switching"]}
  ]},
  diagram:{ title:"A simple series circuit", caption:"State what each component does.", parts:[
    {p:"Cell / battery", f:"Provides the voltage that pushes the current"},
    {p:"Switch", f:"Opens or closes the circuit"},
    {p:"Bulb", f:"Turns electrical energy into light and heat"},
    {p:"Ammeter", f:"Measures the current in amperes"},
    {p:"Wires", f:"Carry the current around the circuit"}
  ]},
  experiment:{
    title:"Verifying Ohm's law",
    aim:"To show that the current through a resistor is proportional to the voltage across it.",
    materials:["A resistor (or bulb)","A battery of cells","An ammeter","A voltmeter","A variable resistor or rheostat","Connecting wires"],
    steps:[
      "Set up a circuit with the resistor, ammeter, battery and variable resistor in series.",
      "Connect the voltmeter across the resistor.",
      "Adjust the variable resistor to give a low voltage and record the current and voltage.",
      "Increase the voltage in steps, recording current and voltage each time.",
      "Divide voltage by current at each step and compare the values."
    ],
    expect:"The ratio of voltage to current (V/I) is the same at every step, confirming that current is proportional to voltage — Ohm's law, V = IR.",
    why:"If the resistor stays at constant temperature, the resistance is constant, so doubling the voltage doubles the current and V/I never changes. A graph of V against I is a straight line through the origin."
  },
  worked:[
    {q:"A current of 2 A flows through a 6 Ω resistor. Find the voltage across it.", steps:["V = IR","2 × 6"], a:"12 V"},
    {q:"A 9 V battery drives a current of 3 A. Find the resistance.", steps:["R = V ÷ I","9 ÷ 3"], a:"3 Ω"},
    {q:"Find the current through a 12 Ω resistor with 6 V across it.", steps:["I = V ÷ R","6 ÷ 12"], a:"0.5 A"},
    {q:"A 2 Ω and a 3 Ω resistor are connected in series. Find the total resistance.", steps:["Series: R = R₁ + R₂","2 + 3"], a:"5 Ω"}
  ],
  apply:[
    {q:"Why do long wires in a house use thick copper cables rather than thin ones?", a:"Thick copper cables have low resistance, so less energy is wasted as heat and the voltage drop along the wire is small."},
    {q:"Why is a fuse placed in series in a circuit?", a:"The same current flows through the fuse; if the current becomes too large the fuse melts and breaks the circuit, protecting the appliance."},
    {q:"Why must a switch be connected in the live wire?", a:"So that when the switch is open, no live voltage reaches the appliance, making it safe to work on."}
  ],
  activities:[
    "Set up a series circuit and measure current at different points",
    "Set up a parallel circuit and measure voltage and current",
    "Verify Ohm's law by plotting a graph of V against I",
    "Draw circuit diagrams from symbols",
    "Solve problems on current, voltage, resistance and power"
  ],
  materials:[
    "Cells, batteries, bulbs, switches and wires",
    "Ammeters, voltmeters and resistors",
    "Rheostats and multimeters",
    "Circuit boards and symbol charts"
  ],
  assessment:["Practical circuit work","Written test","Circuit drawing","Problem solving","Class quiz"]
},
{
  grade:11, period:"IV", sem:"One", icon:"🏠",
  title:"Electricity in the Home",
  subtitle:"Local methods of electricity production, ring circuits, wiring, the cost of electricity and electrical safety",
  outcomes:[
    "Explain how electricity is produced and supplied to the home",
    "Wire simple circuits correctly and calculate the cost of electrical energy",
    "Apply the rules of electrical safety"
  ],
  objectives:[
    "Describe local methods of electricity production, including hydro, solar and generators",
    "Describe the ring circuit and the wiring of a home",
    "State the functions of the fuse, earth wire and double insulation",
    "Calculate the cost of electricity from meter readings and power ratings",
    "State and apply electrical safety rules",
    "Explain how a national grid transmits electricity"
  ],
  note:"Electricity reaches the home through <b>live</b>, <b>neutral</b> and <b>earth</b> wires. A <b>fuse</b> melts to break the circuit if the current is too large. Energy is billed in <b>kilowatt-hours (kWh)</b>: energy = power × time, and cost = energy × price per unit. Home circuits are <b>ring circuits</b> for sockets and radial circuits for lights, each protected by its own fuse or breaker.",
  focus:[
    "Methods of producing electricity: hydro, diesel generators, solar",
    "The national grid and transmission",
    "Ring circuits and the layout of home wiring",
    "Live, neutral and earth wires; the fuse and double insulation",
    "Cost of electricity and reading the meter",
    "Electrical safety rules"
  ],
  terms:[
    {t:"live wire", d:"the wire that carries the alternating voltage to the appliance", x:"The live wire is brown and dangerous."},
    {t:"neutral wire", d:"the wire at approximately zero potential that completes the circuit", x:"The neutral wire is blue."},
    {t:"earth wire", d:"a safety wire connected to the ground", x:"The earth wire is green and yellow."},
    {t:"fuse", d:"a safety device that melts and breaks the circuit when the current is too large", x:"A fuse protects an appliance."},
    {t:"ring circuit", d:"a socket circuit wired as a loop from the consumer unit", x:"Socket outlets use a ring circuit."},
    {t:"kilowatt-hour", d:"the unit of electrical energy used in billing", x:"One kWh is one kilowatt used for one hour."},
    {t:"power rating", d:"the power an appliance uses, written on its label", x:"A kettle has a rating of about 2 kW."},
    {t:"double insulation", d:"safety by insulating all live parts so no earth wire is needed", x:"A hair dryer may be double insulated."},
    {t:"circuit breaker", d:"a switch that automatically opens when the current is too large", x:"A circuit breaker replaces a fuse."},
    {t:"national grid", d:"the network of cables that carries electricity across the country", x:"The grid transmits high-voltage electricity."},
    {t:"step-up transformer", d:"a transformer that raises the voltage for transmission", x:"The grid uses step-up transformers."},
    {t:"short circuit", d:"a low-resistance path that lets an enormous current flow", x:"A short circuit blows the fuse."}
  ],
  facts:[
    {q:"Name three local methods of producing electricity.", a:"Hydroelectric (water driving turbines), diesel generators (fuel), solar panels (sunlight), and small wind turbines are common methods."},
    {q:"What are the three wires in a home supply and what are their colours?", a:"Live (brown), neutral (blue) and earth (green-and-yellow)."},
    {q:"State the function of a fuse and of the earth wire.", a:"The fuse melts and breaks the circuit if the current is too large, protecting the wiring and appliance; the earth wire carries dangerous current safely to the ground and helps blow the fuse if the metal casing becomes live."},
    {q:"How is the cost of electrical energy calculated?", a:"Cost = power (kW) × time (h) × price per unit (kWh); energy in kWh = kilowatts × hours."},
    {q:"A 2 kW kettle is used for 3 hours. Find the energy used in kWh.", a:"Energy = 2 × 3 = 6 kWh."},
    {q:"Why is electricity transmitted at very high voltage through the grid?", a:"High voltage reduces the current for a given power, which greatly reduces energy wasted as heat in the transmission lines."},
    {q:"State three electrical safety rules.", a:"Never touch electrical appliances with wet hands; never overload sockets; replace damaged plugs and cables; and switch off and unplug before cleaning."}
  ],
  tf:[
    {s:"The live wire is brown in a standard plug.", a:"true", why:"In standard wiring the live wire is brown."},
    {s:"A fuse is connected in the neutral wire.", a:"false", why:"The fuse is connected in the live wire so it breaks the live supply when it blows."},
    {s:"Electrical energy is billed in kilowatt-hours.", a:"true", why:"The kWh is the unit used on electricity bills."},
    {s:"The earth wire is a safety connection to the ground.", a:"true", why:"It carries fault current safely away and helps trip the fuse."},
    {s:"It is safe to handle electrical appliances with wet hands.", a:"false", why:"Water conducts electricity and greatly increases the danger of electric shock."},
    {s:"Step-up transformers raise the voltage for long-distance transmission.", a:"true", why:"Raising the voltage reduces the current and the transmission losses."}
  ],
  classify:{ title:"Sort these statements", groups:[
    {name:"Wires in a plug", items:["live","neutral","earth"]},
    {name:"Safety devices", items:["fuse","circuit breaker","earth wire","double insulation"]},
    {name:"Energy sources", items:["hydroelectric","solar","diesel generator","wind"]},
    {name:"Billed energy units", items:["kilowatt-hour","unit (as used on a bill)"]}
  ]},
  diagram:{ title:"A correctly wired three-pin plug", caption:"State what each part does.", parts:[
    {p:"Live pin (brown)", f:"Carries the alternating voltage; fitted with the fuse"},
    {p:"Neutral pin (blue)", f:"Completes the circuit at near-zero potential"},
    {p:"Earth pin (green/yellow)", f:"Safety connection to ground"},
    {p:"Fuse", f:"Melts to break the circuit on an overload"},
    {p:"Cable grip", f:"Holds the cable so the wires cannot be pulled out"}
  ]},
  experiment:{
    title:"Measuring the energy used by a bulb",
    aim:"To measure the electrical power of a bulb and find the energy used in a known time.",
    materials:["A bulb of known power rating","An ammeter and a voltmeter","A stopwatch","A battery or power supply","Connecting wires"],
    steps:[
      "Set up the bulb with the ammeter in series and the voltmeter across it.",
      "Record the current and the voltage.",
      "Calculate the power using P = VI.",
      "Note the time the bulb is on.",
      "Calculate the energy used in joules and in watt-hours."
    ],
    expect:"The measured power (VI) should be close to the rating printed on the bulb. Energy = power × time, so a 60 W bulb left on for one hour uses 60 Wh = 0.06 kWh.",
    why:"Measuring current and voltage and applying P = VI shows how an appliance's power is found; multiplying by the time it is on gives the energy used, which is what the electricity bill charges for in kWh."
  },
  worked:[
    {q:"A 2 kW kettle is used for 2 hours. Find the energy used in kWh.", steps:["Energy = power × time","2 × 2"], a:"4 kWh"},
    {q:"At a price of L$ 40 per unit, find the cost of using 5 kWh.", steps:["Cost = units × price","5 × 40"], a:"L$ 200"},
    {q:"A 100 W bulb is on for 10 hours. Find the energy in kWh.", steps:["100 W = 0.1 kW","0.1 × 10"], a:"1 kWh"},
    {q:"A heater carries 5 A at 240 V. Find its power.", steps:["P = VI","5 × 240"], a:"1200 W"}
  ],
  apply:[
    {q:"Why are the sockets in a house wired in a ring circuit rather than many separate long cables?", a:"A ring circuit uses two paths back to the consumer unit, so thinner cables can be used and each socket still carries its share of current safely and cheaply."},
    {q:"Why should you never connect too many appliances to one socket?", a:"Overloading makes the current exceed the safe value for the cable, overheating it and risking fire or blowing the fuse."},
    {q:"A household uses less electricity after fitting solar panels. Explain why using less energy saves money.", a:"The cost is based on the energy used (kWh); solar panels supply part of the power, so less energy is drawn from the grid and the bill is lower."}
  ],
  activities:[
    "Identify the live, neutral and earth wires in a plug and state their colours",
    "Read power ratings on household appliances and compare them",
    "Calculate the monthly cost of using several appliances",
    "Discuss why the national grid uses very high voltage",
    "List the safety rules and demonstrate how to wire a plug"
  ],
  materials:[
    "Plugs, fuses and cables for practice wiring",
    "Bulbs, ammeters, voltmeters and power supplies",
    "Appliance labels and an electricity bill (or sample)",
    "Diagrams of the national grid"
  ],
  assessment:["Practical wiring exercise","Written test","Cost calculation","Safety discussion","Class quiz"]
},
{
  grade:11, period:"V", sem:"Two", icon:"🧲",
  title:"Magnetism and Electromagnetism",
  subtitle:"Magnetic theory, fields, the properties of magnets, and methods of magnetisation and demagnetisation",
  outcomes:[
    "Describe magnetic fields and the properties of magnets",
    "Explain magnetisation and demagnetisation and the earth's magnetism"
  ],
  objectives:[
    "State the properties of a bar magnet",
    "Describe magnetic field lines around a bar magnet",
    "Distinguish magnetic and non-magnetic materials",
    "Explain the methods of magnetisation and demagnetisation",
    "Describe the magnetic field of the Earth",
    "Explain how a magnet is used in the magnetic compass"
  ],
  note:"A <b>magnet</b> has two poles, <b>north (N)</b> and <b>south (S)</b>. Unlike poles attract and like poles repel. The space where a magnetic force acts is the <b>magnetic field</b>, drawn as <b>field lines</b> running from north to south. A bar magnet can be made by <b>stroking</b>, <b>electric current</b> (solenoid) or <b>hammering in a field</b>, and demagnetised by <b>heating</b>, <b>dropping</b> or <b>withdrawing it from an alternating current coil</b>.",
  focus:[
    "Properties of magnets; magnetic and non-magnetic materials",
    "Poles, attraction and repulsion",
    "Magnetic field lines",
    "Methods of magnetisation and demagnetisation",
    "The Earth's magnetic field and the compass",
    "Uses of magnets"
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
    {t:"magnetic field of the Earth", d:"the field produced by the Earth, behaving like a giant magnet", x:"The Earth's field guides the compass needle."}
  ],
  facts:[
    {q:"State three properties of a bar magnet.", a:"It has a north and a south pole; unlike poles attract and like poles repel; it freely aligns north–south when suspended; and it attracts iron and steel."},
    {q:"Distinguish magnetic from non-magnetic materials with two examples of each.", a:"Magnetic materials are strongly attracted by a magnet (iron, steel, nickel, cobalt); non-magnetic materials are not attracted (wood, plastic, copper, glass)."},
    {q:"In which direction do magnetic field lines run?", a:"Outside a magnet, field lines run from the north pole to the south pole."},
    {q:"Name three methods of magnetising a steel bar and three methods of demagnetising it.", a:"Magnetise by stroking, by a direct-current solenoid, or by hammering while it lies in a strong field. Demagnetise by heating, dropping repeatedly, or withdrawing it from an alternating-current coil."},
    {q:"How does a magnetic compass show direction?", a:"A freely suspended magnetised needle aligns itself along the Earth's magnetic field, pointing towards magnetic north."},
    {q:"Why is a magnetic field described as a field of force?", a:"Because any magnet or magnetic material placed in it experiences a force."},
    {q:"Name three everyday uses of magnets.", a:"Compasses, refrigerator door seals, electric bells and loudspeakers, and holding tools on a board."}
  ],
  tf:[
    {s:"Like poles of two magnets attract each other.", a:"false", why:"Like poles repel; unlike poles attract."},
    {s:"Magnetic field lines run from north to south outside a magnet.", a:"true", why:"That is the convention for drawing field lines."},
    {s:"Copper is a magnetic material.", a:"false", why:"Copper is non-magnetic; iron, steel, nickel and cobalt are magnetic."},
    {s:"Heating a magnet destroys its magnetism.", a:"true", why:"Heating gives the domains enough energy to be disturbed, demagnetising the material."},
    {s:"A compass needle points towards magnetic north.", a:"true", why:"The needle aligns with the Earth's magnetic field."},
    {s:"A solenoid produces a magnetic field when a current flows through it.", a:"true", why:"An electric current in a coil produces a magnetic field."}
  ],
  classify:{ title:"Sort these materials and methods", groups:[
    {name:"Magnetic materials", items:["iron","steel","nickel","cobalt"]},
    {name:"Non-magnetic materials", items:["copper","wood","plastic","glass","aluminium"]},
    {name:"Methods of magnetisation", items:["stroking","direct current solenoid","hammering in a field"]},
    {name:"Methods of demagnetisation", items:["heating","dropping","withdrawing from an a.c. coil"]}
  ]},
  diagram:{ title:"The field of a bar magnet", caption:"State what each part shows.", parts:[
    {p:"North pole", f:"Where field lines leave the magnet"},
    {p:"South pole", f:"Where field lines enter the magnet"},
    {p:"Field lines", f:"Show the direction and strength of the field"},
    {p:"Closer lines", f:"Indicate a stronger field"},
    {p:"Neutral point", f:"Where opposite fields cancel and there is no force"}
  ]},
  experiment:{
    title:"Plotting the field of a bar magnet",
    aim:"To plot the magnetic field lines around a bar magnet using a compass.",
    materials:["A bar magnet","A plotting compass","A sheet of paper","A pencil"],
    steps:[
      "Place the bar magnet in the centre of the paper and draw its outline.",
      "Put the compass near the north pole and mark the direction of the needle.",
      "Move the compass so its tail lies on the last mark and mark the new head.",
      "Join the marks with a smooth curve.",
      "Repeat from several starting points to trace many field lines."
    ],
    expect:"The plotted lines curve from the north pole to the south pole, being closest and straightest near the poles where the field is strongest.",
    why:"The compass needle always points along the field line at its position, so tracing the needle direction step by step maps the magnetic field of the magnet."
  },
  worked:[
    {q:"Two like poles are brought together. State what happens.", steps:["Like poles repel"], a:"They repel each other."},
    {q:"Two unlike poles are brought together. State what happens.", steps:["Unlike poles attract"], a:"They attract each other."},
    {q:"A steel bar is magnetised by stroking from its centre to one end repeatedly. State which end becomes which pole.", steps:["The end finished with the stroking magnet's north pole","Becomes the north pole"], a:"The last-stroked end becomes the opposite pole to the stroking pole"}
  ],
  apply:[
    {q:"Why does a magnet lose its magnetism when it is hammered or dropped?", a:"Dropping or hammering jolts the magnetic domains out of alignment, so the material becomes demagnetised."},
    {q:"Why can a ship's steel hull disturb a compass?", a:"The steel hull becomes slightly magnetised and produces its own field, which bends the compass needle away from true magnetic north."},
    {q:"Why is a steel magnet more permanent than an iron one?", a:"Steel is harder and retains its domains in alignment far better than soft iron, so it keeps its magnetism longer."}
  ],
  activities:[
    "Investigate the attraction and repulsion of bar magnets",
    "Plot the magnetic field lines around a bar magnet",
    "Magnetise a steel bar by stroking and test its poles",
    "Demagnetise a magnet by heating and test the result",
    "Use a compass to find directions around the school"
  ],
  materials:[
    "Bar magnets, plotting compasses and iron filings",
    "Steel bars, needles and hammer",
    "Bunsen burner and tongs for demagnetising",
    "Paper, pencils and cardboard"
  ],
  assessment:["Practical work","Written test","Field plotting exercise","Class quiz","Assignment"]
},
{
  grade:11, period:"VI", sem:"Two", icon:"🌀",
  title:"Current and Magnetism: Motors, Generators and Transformers",
  subtitle:"Electromagnetism, Fleming's left-hand rule, the electric motor, electromagnetic induction, generators and transformers",
  outcomes:[
    "Explain how current and magnetism produce motion and how motion produces current",
    "Describe the motor, generator and transformer and their uses"
  ],
  objectives:[
    "Describe the magnetic effect of an electric current",
    "State and apply Fleming's left-hand rule",
    "Describe the DC electric motor and the moving-coil galvanometer",
    "Explain electromagnetic induction and Fleming's right-hand rule",
    "Describe generators and how they produce an e.m.f.",
    "Describe the transformer and state how it steps voltage up or down"
  ],
  note:"An electric current produces a <b>magnetic field</b>, and a conductor in a magnetic field experiences a force — this is the basis of the <b>motor</b>. <b>Fleming's left-hand rule</b> gives the direction of the force (First finger = Field, seCond finger = Current, thuMb = Motion). <b>Electromagnetic induction</b> is the reverse: a changing magnetic field in a coil produces an <b>e.m.f.</b> — the basis of the <b>generator</b> and the <b>transformer</b>.",
  focus:[
    "The magnetic effect of a current; the solenoid",
    "Force on a conductor; Fleming's left-hand rule",
    "The DC electric motor",
    "The moving-coil galvanometer",
    "Electromagnetic induction; Fleming's right-hand rule",
    "Generators and transformers"
  ],
  terms:[
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
    {t:"secondary coil", d:"the output coil of a transformer", x:"The secondary coil delivers the induced voltage."}
  ],
  facts:[
    {q:"What is the motor effect?", a:"When a current-carrying conductor is placed in a magnetic field, it experiences a force; this is the motor effect that turns electrical energy into kinetic energy."},
    {q:"State Fleming's left-hand rule.", a:"Hold the left hand with the thumb, first finger and second finger at right angles: first finger points along the field, second finger along the current, and the thumb gives the direction of the force (motion)."},
    {q:"What is electromagnetic induction and on what does the induced e.m.f. depend?", a:"It is the production of an e.m.f. in a conductor when the magnetic field through it changes; the e.m.f. is larger with a stronger field, a faster movement and more turns on the coil."},
    {q:"How does a transformer change voltage and what is its relationship?", a:"The ratio of voltages equals the ratio of turns, Vₚ/Vₛ = Nₚ/Nₛ; a step-up transformer has more turns on the secondary, a step-down fewer."},
    {q:"Why does a transformer only work with alternating current?", a:"Only a changing (alternating) magnetic field induces an e.m.f.; direct current gives a steady field that induces nothing."},
    {q:"State the function of the commutator in a DC motor.", a:"It reverses the direction of the current in the coil every half-turn so the coil keeps rotating in the same direction."},
    {q:"Name three devices that use the motor effect and three that use electromagnetic induction.", a:"Motor effect: electric motor, loudspeaker, electric bell. Induction: generator (dynamo), transformer, microphone."}
  ],
  tf:[
    {s:"A current-carrying conductor in a magnetic field experiences a force.", a:"true", why:"That is the motor effect."},
    {s:"Fleming's left-hand rule gives the direction of the induced current.", a:"false", why:"The left-hand rule gives the force on a current in a field; the direction of the induced current uses Fleming's right-hand rule."},
    {s:"A transformer works on direct current.", a:"false", why:"A transformer needs alternating current to produce a changing magnetic field and induce an e.m.f."},
    {s:"A generator converts kinetic energy into electrical energy.", a:"true", why:"A generator uses motion to induce a current."},
    {s:"A step-up transformer increases the current.", a:"false", why:"A step-up transformer raises the voltage and lowers the current, not the other way."},
    {s:"A galvanometer detects small electric currents.", a:"true", why:"That is its purpose."}
  ],
  classify:{ title:"Sort these devices and rules", groups:[
    {name:"Use the motor effect", items:["electric motor","loudspeaker","electric bell"]},
    {name:"Use electromagnetic induction", items:["generator","transformer","microphone"]},
    {name:"Fleming's left-hand rule", items:["first finger = field","second finger = current","thumb = motion"]},
    {name:"Transformer types", items:["step-up","step-down"]}
  ]},
  diagram:{ title:"A simple DC electric motor", caption:"State what each part does.", parts:[
    {p:"Coil", f:"Carries the current and experiences the turning force"},
    {p:"Magnet poles", f:"Provide the magnetic field"},
    {p:"Commutator", f:"Reverses the current every half-turn"},
    {p:"Brushes", f:"Carry the current onto the rotating commutator"},
    {p:"Axle", f:"Transmits the turning motion to the load"}
  ]},
  experiment:{
    title:"Building a simple electric motor",
    aim:"To show how a coil in a magnetic field turns when a current flows.",
    materials:["Insulated copper wire","A strong magnet","A cell or battery","Two paper clips as brushes","Connecting wires"],
    steps:[
      "Wind several turns of wire into a small coil, leaving two straight ends.",
      "Strip the ends and balance the coil between the two paper-clip supports.",
      "Place the strong magnet under the coil.",
      "Connect the paper clips to the battery.",
      "Give the coil a small push and observe what happens."
    ],
    expect:"When current flows, the coil feels a force from the magnetic field and begins to rotate. This is the motor effect turning electrical energy into motion.",
    why:"The current in the coil creates its own magnetic field which interacts with the magnet's field; the resulting force on the two sides of the coil makes it turn, exactly the principle used in real DC motors."
  },
  worked:[
    {q:"A transformer has 200 turns on the primary and 600 on the secondary. If the input voltage is 240 V, find the output voltage.", steps:["Vₚ/Vₛ = Nₚ/Nₛ","240/Vₛ = 200/600","Vₛ = 240 × 600 ÷ 200"], a:"720 V (step-up)"},
    {q:"A step-down transformer changes 240 V to 12 V. If the primary has 1000 turns, how many turns has the secondary?", steps:["240/12 = 1000/Nₛ","Nₛ = 1000 × 12 ÷ 240"], a:"50 turns"},
    {q:"State the effect of doubling the speed of the magnet in induction.", steps:["e.m.f. is proportional to rate of change","Faster movement doubles the e.m.f."], a:"The induced e.m.f. doubles"}
  ],
  apply:[
    {q:"Why is a loudspeaker described as a motor?", a:"It uses the motor effect: the varying current in its coil interacts with a magnet to move the cone, producing sound."},
    {q:"Why does a bicycle dynamo produce light only when the wheel is turning?", a:"The dynamo is a generator that needs motion to change the magnetic field; when the wheel stops, no e.m.f. is induced and the lamp goes out."},
    {q:"Why are transformers placed throughout the power grid?", a:"Step-up transformers raise the voltage for efficient long-distance transmission, and step-down transformers lower it to a safe usable voltage for homes."}
  ],
  activities:[
    "Build and test a simple electric motor",
    "Demonstrate electromagnetic induction with a magnet and a coil",
    "Demonstrate Faraday's law by moving a magnet at different speeds",
    "Set up a transformer and measure its input and output voltages",
    "Solve transformer problems in groups"
  ],
  materials:[
    "Copper wire, magnets, cells and paper clips",
    "Coils, galvanometers and meters",
    "Small transformers and power supplies",
    "Connecting wires and simple motor kits"
  ],
  assessment:["Practical work","Written test","Problem solving","Demonstration","Class quiz"]
},

/* ================================ GRADE 12 ================================ */
{
  grade:12, period:"I", sem:"One", icon:"🚀",
  title:"Motion and Newton's Laws",
  subtitle:"Speed, velocity, acceleration, equations of motion, circular motion, Newton's laws, momentum and collisions",
  outcomes:[
    "Solve problems using the equations of motion",
    "Apply Newton's laws of motion and the principle of conservation of momentum"
  ],
  objectives:[
    "Distinguish scalar and vector quantities such as speed and velocity",
    "Define acceleration and use the equations of motion",
    "Describe circular motion and centripetal force",
    "State and apply Newton's three laws of motion",
    "Define momentum and impulse",
    "State and apply the law of conservation of momentum to collisions"
  ],
  note:"<b>Speed</b> is scalar; <b>velocity</b> is speed with direction and is a vector. <b>Acceleration</b> is the rate of change of velocity. The <b>equations of motion</b> for constant acceleration are <b>v = u + at</b>, <b>s = ut + ½at²</b> and <b>v² = u² + 2as</b>. <b>Newton's laws</b> describe inertia, F = ma, and action and reaction. <b>Momentum</b> p = mv, and in a collision total momentum is conserved.",
  focus:[
    "Speed, velocity and acceleration",
    "Graphs of motion",
    "The equations of motion",
    "Circular motion and centripetal force",
    "Newton's three laws of motion",
    "Momentum, impulse and conservation of momentum",
    "Elastic and inelastic collisions"
  ],
  terms:[
    {t:"speed", d:"the rate of change of distance, a scalar", x:"Speed = distance ÷ time."},
    {t:"velocity", d:"speed in a stated direction, a vector", x:"Velocity is displacement ÷ time."},
    {t:"acceleration", d:"the rate of change of velocity", x:"Acceleration is measured in m/s²."},
    {t:"displacement", d:"distance in a stated direction", x:"Displacement is a vector."},
    {t:"inertia", d:"the tendency of a body to resist a change in its motion", x:"Inertia keeps a bus passenger moving forward."},
    {t:"mass", d:"the amount of matter in a body", x:"Mass is a scalar measured in kilograms."},
    {t:"weight", d:"the gravitational force on a body, W = mg", x:"Weight is a force measured in newtons."},
    {t:"momentum", d:"the product of mass and velocity, p = mv", x:"Momentum is conserved in a collision."},
    {t:"impulse", d:"force multiplied by time, equal to the change in momentum", x:"Impulse = F × t = change in momentum."},
    {t:"centripetal force", d:"the force that keeps a body moving in a circle, directed to the centre", x:"Centripetal force makes a ball whirl on a string."},
    {t:"elastic collision", d:"a collision in which kinetic energy is conserved", x:"Two billiard balls collide almost elastically."},
    {t:"inelastic collision", d:"a collision in which kinetic energy is not conserved", x:"A mud ball that sticks is inelastic."}
  ],
  facts:[
    {q:"Distinguish speed from velocity.", a:"Speed is the rate of change of distance and has magnitude only; velocity is the rate of change of displacement and includes direction, making it a vector."},
    {q:"Write the three equations of motion for constant acceleration.", a:"v = u + at; s = ut + ½at²; v² = u² + 2as, where u is initial velocity, v final velocity, a acceleration, t time and s displacement."},
    {q:"State Newton's three laws of motion.", a:"(1) A body remains at rest or in uniform motion unless acted on by a resultant force; (2) F = ma, the acceleration is proportional to the force and inversely proportional to the mass; (3) to every action there is an equal and opposite reaction."},
    {q:"Define momentum and state its unit.", a:"Momentum is the product of mass and velocity, p = mv, measured in kg m/s."},
    {q:"State the law of conservation of momentum.", a:"In a closed system the total momentum before a collision equals the total momentum after it, provided no external force acts."},
    {q:"A car accelerates from rest at 2 m/s² for 5 s. Find its final velocity.", a:"v = u + at = 0 + 2 × 5 = 10 m/s."},
    {q:"What force keeps a body moving in a circle and what is its direction?", a:"The centripetal force, directed towards the centre of the circle."}
  ],
  tf:[
    {s:"Velocity is a scalar quantity.", a:"false", why:"Velocity includes direction, so it is a vector; speed is the scalar."},
    {s:"Newton's first law concerns inertia.", a:"true", why:"A body at rest or in uniform motion stays that way unless a resultant force acts — the law of inertia."},
    {s:"Momentum equals mass divided by velocity.", a:"false", why:"Momentum is the product of mass and velocity, p = mv."},
    {s:"In an elastic collision kinetic energy is conserved.", a:"true", why:"That is the definition of an elastic collision."},
    {s:"Weight and mass are the same thing.", a:"false", why:"Mass is the amount of matter; weight is the gravitational force W = mg."},
    {s:"The acceleration of a body is proportional to the resultant force on it.", a:"true", why:"That is Newton's second law, a ∝ F."}
  ],
  classify:{ title:"Sort these quantities and statements", groups:[
    {name:"Scalar quantities", items:["speed","distance","mass","time"]},
    {name:"Vector quantities", items:["velocity","displacement","acceleration","momentum","force"]},
    {name:"Newton's laws", items:["law of inertia","F = ma","action and reaction"]},
    {name:"Collision types", items:["elastic (kinetic energy conserved)","inelastic (kinetic energy lost)"]}
  ]},
  diagram:{ title:"Velocity–time graph for acceleration", caption:"State what each part shows.", parts:[
    {p:"Gradient (slope)", f:"Gives the acceleration"},
    {p:"Area under the graph", f:"Gives the distance travelled"},
    {p:"Initial velocity u", f:"Velocity at time zero"},
    {p:"Final velocity v", f:"Velocity at the end of the time"},
    {p:"Horizontal section", f:"Constant velocity (zero acceleration)"}
  ]},
  experiment:{
    title:"Measuring acceleration on an inclined plane",
    aim:"To measure the acceleration of a trolley rolling down a slope.",
    materials:["A trolley","A ramp or plank","A stopwatch","A metre rule","Markers"],
    steps:[
      "Set the ramp at a steady slope and mark the starting point.",
      "Release the trolley from rest and time how long it takes to reach a fixed distance down the ramp.",
      "Repeat three times and average the time.",
      "Use s = ½at² to calculate the acceleration from the distance and the average time.",
      "Change the slope and repeat to compare accelerations."
    ],
    expect:"The steeper the slope, the greater the acceleration. Using s = ½at², the acceleration is found from a = 2s ÷ t² for a trolley starting from rest.",
    why:"Starting from rest (u = 0), the equation s = ut + ½at² simplifies to s = ½at². Measuring the distance and time lets the acceleration be found, applying the equations of motion directly."
  },
  worked:[
    {q:"A car accelerates from 5 m/s to 15 m/s in 4 s. Find its acceleration.", steps:["a = (v − u) ÷ t","(15 − 5) ÷ 4"], a:"2.5 m/s²"},
    {q:"A ball is dropped from rest and falls for 3 s. Find its velocity (g = 10 m/s²).", steps:["v = u + at","0 + 10 × 3"], a:"30 m/s"},
    {q:"Find the distance travelled by a car accelerating from rest at 2 m/s² for 5 s.", steps:["s = ut + ½at²","0 + ½ × 2 × 25"], a:"25 m"},
    {q:"A body of mass 2 kg moves at 5 m/s. Find its momentum.", steps:["p = mv","2 × 5"], a:"10 kg m/s"},
    {q:"What force gives a 2 kg mass an acceleration of 4 m/s²?", steps:["F = ma","2 × 4"], a:"8 N"}
  ],
  apply:[
    {q:"Why do seat belts and airbags save lives in a crash?", a:"They increase the time over which the momentum of the passenger is brought to zero, so the force (impulse ÷ time) is much smaller and injury is reduced."},
    {q:"Why does a bus passenger lurch forward when the bus stops suddenly?", a:"The passenger's body continues forward by inertia (Newton's first law) because it keeps its motion unless a force acts."},
    {q:"Why does a rocket move forward in empty space where there is nothing to push against?", a:"By the law of conservation of momentum, the exhaust gases are pushed backwards and the rocket moves forward equally, so the total momentum stays zero."}
  ],
  activities:[
    "Measure acceleration down a ramp with a trolley",
    "Plot and interpret velocity–time graphs",
    "Demonstrate Newton's third law with two trolleys",
    "Investigate momentum conservation in collisions",
    "Solve problems on the equations of motion"
  ],
  materials:[
    "Trolleys, ramps, stopwatches and metre rules",
    "Ticker timers or motion sensors if available",
    "Springs, balls and small carts for collisions",
    "Graph paper and calculators"
  ],
  assessment:["Practical work","Written test","Problem solving","Graph work","Class quiz"]
},
{
  grade:12, period:"II", sem:"One", icon:"🌊",
  title:"Hydrostatics and Fluid Pressure",
  subtitle:"Pressure, fluid pressure, Archimedes' principle, Pascal's principle, the barometer and manometer and Bernoulli's principle",
  outcomes:[
    "Define pressure and solve problems on fluid pressure",
    "Apply Archimedes' and Pascal's principles and describe fluid instruments"
  ],
  objectives:[
    "Define pressure and state its unit",
    "State that pressure in a fluid increases with depth",
    "State and apply Archimedes' principle to floating and sinking",
    "State Pascal's principle and its uses",
    "Describe the barometer and the manometer",
    "Describe Bernoulli's principle and its applications"
  ],
  note:"<b>Pressure</b> is the force acting normally per unit area, P = F/A, measured in <b>pascals (Pa)</b> or N/m². In a liquid, <b>pressure = density × g × depth</b>, so it increases with depth. <b>Archimedes' principle</b> states that an object in a fluid experiences an upthrust equal to the weight of fluid it displaces. <b>Pascal's principle</b> says pressure applied to an enclosed fluid is transmitted equally in all directions — the basis of the hydraulic press.",
  focus:[
    "Definition of pressure and its unit",
    "Pressure in a liquid: P = ρgh",
    "Archimedes' principle and flotation",
    "Pascal's principle and the hydraulic press",
    "The barometer and the manometer",
    "Bernoulli's principle and its applications"
  ],
  terms:[
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
    {t:"density", d:"mass per unit volume", x:"Density is used in the liquid pressure formula."}
  ],
  facts:[
    {q:"Define pressure and state its unit.", a:"Pressure is the force acting normally per unit area; P = F/A, measured in pascals (Pa), where 1 Pa = 1 N/m²."},
    {q:"Write the formula for pressure in a liquid and explain its terms.", a:"P = ρgh, where ρ is the density of the liquid, g the gravitational field strength and h the depth below the surface."},
    {q:"State Archimedes' principle.", a:"When a body is immersed in a fluid, it experiences an upthrust equal to the weight of the fluid it displaces."},
    {q:"State Pascal's principle and name one device that uses it.", a:"Pressure applied to an enclosed fluid is transmitted equally in all directions; it is used in the hydraulic press and hydraulic brakes."},
    {q:"Distinguish a barometer from a manometer.", a:"A barometer measures atmospheric pressure; a manometer is a U-tube used to measure the pressure of a gas."},
    {q:"State Bernoulli's principle and one application.", a:"In a moving fluid the pressure is lower where the speed is higher; it is applied in aeroplane wings, in the flight of a ball and in the flow of blood."},
    {q:"Why does pressure in a liquid increase with depth?", a:"Because the weight of the liquid above the point increases with depth, adding more downward force per unit area."}
  ],
  tf:[
    {s:"Pressure is force multiplied by area.", a:"false", why:"Pressure is force divided by area, P = F/A."},
    {s:"Pressure in a liquid increases with depth.", a:"true", why:"The weight of liquid above adds force as depth increases."},
    {s:"Archimedes' principle explains why a ship floats.", a:"true", why:"The upthrust equals the weight of water displaced, balancing the ship's weight."},
    {s:"Pascal's principle is the basis of the hydraulic press.", a:"true", why:"Equal transmission of pressure lets a small force lift a heavy load."},
    {s:"A barometer measures gas pressure in a pipe.", a:"false", why:"A barometer measures atmospheric pressure; a manometer measures gas pressure."},
    {s:"Atmospheric pressure at sea level is about 101 kPa.", a:"true", why:"Standard atmospheric pressure is roughly 101 kPa or 760 mmHg."}
  ],
  classify:{ title:"Sort these instruments and statements", groups:[
    {name:"Measure pressure", items:["barometer","manometer"]},
    {name:"Use Pascal's principle", items:["hydraulic press","hydraulic brakes","car jack"]},
    {name:"Explain flotation", items:["upthrust","Archimedes' principle","weight of displaced water"]},
    {name:"Apply Bernoulli's principle", items:["aeroplane wing","spinning ball","fast-flowing narrow pipe"]}
  ]},
  diagram:{ title:"Pressure at different depths", caption:"State what each part shows.", parts:[
    {p:"Surface", f:"Pressure equals atmospheric pressure at the top"},
    {p:"Depth h₁", f:"Pressure increases with the weight of liquid above"},
    {p:"Depth h₂", f:"Greater depth gives greater pressure"},
    {p:"Container wall", f:"Feels pressure from the liquid in all directions"},
    {p:"Liquid", f:"Its density and depth determine the pressure"}
  ]},
  experiment:{
    title:"Archimedes' principle with a displacement can",
    aim:"To show that the upthrust on a submerged object equals the weight of water it displaces.",
    materials:["An overflow (displacement) can","A measuring cylinder","A solid object on a string","A spring balance","Water"],
    steps:[
      "Fill the overflow can with water until it just overflows.",
      "Weigh the object in air with the spring balance.",
      "Lower the object fully into the water, collecting the displaced water in the measuring cylinder.",
      "Weigh the displaced water.",
      "Compare the upthrust (loss of weight in water) with the weight of the displaced water."
    ],
    expect:"The loss of weight of the object when immersed (the upthrust) is equal to the weight of the water displaced, verifying Archimedes' principle.",
    why:"Lowering the object pushes out a volume of water equal to the object's volume. The upthrust equals this weight of displaced water, so the apparent loss of weight in water matches the weight of the displaced liquid."
  },
  worked:[
    {q:"A force of 100 N acts on an area of 2 m². Find the pressure.", steps:["P = F ÷ A","100 ÷ 2"], a:"50 Pa"},
    {q:"Find the pressure at a depth of 2 m in water (ρ = 1000 kg/m³, g = 10 m/s²).", steps:["P = ρgh","1000 × 10 × 2"], a:"20 000 Pa"},
    {q:"A hydraulic press has a small piston of area 0.02 m² and a large piston of area 0.2 m². A force of 50 N is applied to the small piston. Find the force on the large piston.", steps:["Pressure transmitted equally: F₁/A₁ = F₂/A₂","50/0.02 = F₂/0.2","F₂ = 50 × 0.2 ÷ 0.02"], a:"500 N"},
    {q:"Find the pressure exerted by a 500 N force on a 0.5 m² surface.", steps:["P = F ÷ A","500 ÷ 0.5"], a:"1000 Pa"}
  ],
  apply:[
    {q:"Why are dams built much thicker at the bottom than at the top?", a:"Pressure in the water increases with depth, so the lower walls must be stronger to withstand the greater pressure."},
    {q:"Why does a ship made of steel float while a steel nail sinks?", a:"The ship's hollow shape displaces a large volume of water whose weight equals the ship's weight (Archimedes' principle); the nail displaces too little water to balance its weight."},
    {q:"Why is a hydraulic lift used to raise a car instead of using human strength directly?", a:"Pascal's principle multiplies the applied force by the ratio of the piston areas, so a small effort lifts a much heavier load."}
  ],
  activities:[
    "Verify Archimedes' principle using an overflow can",
    "Measure atmospheric pressure with a simple barometer",
    "Demonstrate Pascal's principle with a hydraulic model",
    "Show that pressure increases with depth using a can with holes",
    "Solve problems on pressure and hydraulics"
  ],
  materials:[
    "Overflow can, measuring cylinder and spring balance",
    "Objects of different volumes on strings",
    "Barometers, manometers and water",
    "Syringes and tubing to model a hydraulic press"
  ],
  assessment:["Practical work","Written test","Problem solving","Demonstration","Class quiz"]
},
{
  grade:12, period:"III", sem:"One", icon:"🌈",
  title:"The Electromagnetic Spectrum",
  subtitle:"Properties of the component waves, the universal wave equation and the applications of each band",
  outcomes:[
    "Describe the electromagnetic spectrum and the properties of its waves",
    "Apply the universal wave equation and identify uses of each band"
  ],
  objectives:[
    "State what electromagnetic waves are and how they are produced",
    "List the bands of the electromagnetic spectrum in order",
    "State the properties common to all electromagnetic waves",
    "Use the universal wave equation c = fλ",
    "Give applications of each band of the spectrum"
  ],
  note:"<b>Electromagnetic waves</b> are transverse waves of electric and magnetic fields that travel through empty space at the speed of light, <b>c ≈ 3 × 10⁸ m/s</b>. In order of increasing frequency (and decreasing wavelength) the spectrum runs: <b>radio, microwave, infrared, visible, ultraviolet, X-ray, gamma</b>. All obey the <b>universal wave equation</b> <b>c = fλ</b>.",
  focus:[
    "Nature and production of electromagnetic waves",
    "The speed of light in vacuum",
    "The bands of the spectrum in order",
    "The universal wave equation c = fλ",
    "Applications of each band: communication, cooking, vision, medicine",
    "Dangers of ultraviolet and X-rays"
  ],
  terms:[
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
    {t:"universal wave equation", d:"c = fλ, relating speed, frequency and wavelength", x:"The universal wave equation is c = fλ."}
  ],
  facts:[
    {q:"What are electromagnetic waves and how fast do they travel in vacuum?", a:"They are transverse waves of electric and magnetic fields that need no medium and travel through empty space at about 3 × 10⁸ m/s."},
    {q:"List the bands of the electromagnetic spectrum in order of increasing frequency.", a:"Radio, microwave, infrared, visible, ultraviolet, X-ray, gamma (increasing frequency, decreasing wavelength)."},
    {q:"State three properties common to all electromagnetic waves.", a:"They are transverse; they travel at the speed of light in vacuum; they transfer energy without needing a medium; and they can be reflected and refracted."},
    {q:"Write the universal wave equation and define each term.", a:"c = fλ, where c is the speed of the wave (m/s), f the frequency (Hz) and λ the wavelength (m)."},
    {q:"State one use of radio, microwave, infrared, visible, ultraviolet, X-ray and gamma rays.", a:"Radio — broadcasting; microwave — cooking and radar; infrared — remote controls; visible — sight; ultraviolet — sterilising and detecting forged notes; X-ray — medical imaging; gamma — cancer radiotherapy and sterilising equipment."},
    {q:"A radio wave has a frequency of 100 MHz (1 × 10⁸ Hz). Find its wavelength.", a:"λ = c ÷ f = 3 × 10⁸ ÷ 1 × 10⁸ = 3 m."},
    {q:"Why must over-exposure to ultraviolet and X-rays be avoided?", a:"They carry high energy that can damage living cells and increase the risk of cancer and burns."}
  ],
  tf:[
    {s:"Electromagnetic waves need a medium to travel through.", a:"false", why:"They can travel through empty space (a vacuum)."},
    {s:"All electromagnetic waves travel at the speed of light in vacuum.", a:"true", why:"That is a fundamental property of the spectrum."},
    {s:"Radio waves have a higher frequency than gamma rays.", a:"false", why:"Gamma rays have the highest frequency; radio waves the lowest."},
    {s:"X-rays are used to form images of bones.", a:"true", why:"X-rays pass through flesh but are absorbed by bone."},
    {s:"The universal wave equation is c = fλ.", a:"true", why:"Speed = frequency × wavelength."},
    {s:"Visible light is the whole of the electromagnetic spectrum.", a:"false", why:"Visible light is only a small band of a much wider spectrum."}
  ],
  classify:{ title:"Sort these waves and uses", groups:[
    {name:"Low frequency", items:["radio waves","microwaves","infrared"]},
    {name:"High frequency", items:["ultraviolet","X-rays","gamma rays"]},
    {name:"Communication uses", items:["radio broadcasting","mobile phones","satellite signals"]},
    {name:"Medical uses", items:["X-ray imaging","gamma radiotherapy","sterilising equipment"]}
  ]},
  diagram:{ title:"The electromagnetic spectrum", caption:"State what each band is.", parts:[
    {p:"Radio", f:"Longest wavelength, lowest frequency; used for broadcasting"},
    {p:"Microwave", f:"Used in cooking and radar"},
    {p:"Infrared", f:"Heat radiation and remote controls"},
    {p:"Visible light", f:"The band the human eye can see"},
    {p:"Ultraviolet", f:"Sterilising and detecting counterfeit notes"},
    {p:"X-ray", f:"Medical imaging of bones"},
    {p:"Gamma", f:"Shortest wavelength, highest energy; radiotherapy"}
  ]},
  experiment:{
    title:"The inverse square law of light",
    aim:"To show that the intensity of light from a point source decreases with the square of the distance.",
    materials:["A small lamp or torch","A metre rule","A piece of white card","A dark room"],
    steps:[
      "Place the lamp at one end and the card a measured distance d away in a dark room.",
      "Note how bright the light on the card appears.",
      "Move the card to distance 2d and observe the brightness.",
      "Move it to distance 3d and observe again.",
      "Compare how the apparent brightness changes with distance."
    ],
    expect:"The card appears dimmer as it is moved away; at twice the distance the light spreads over four times the area, so the brightness falls to one quarter. This is the inverse square law.",
    why:"The same total energy spreads over a sphere whose area grows with the square of the distance, so intensity is inversely proportional to the square of the distance — a property shared by electromagnetic and other radiation."
  },
  worked:[
    {q:"A radio wave has a frequency of 1 × 10⁸ Hz. Find its wavelength.", steps:["λ = c ÷ f","3 × 10⁸ ÷ 1 × 10⁸"], a:"3 m"},
    {q:"A light wave has a wavelength of 5 × 10⁻⁷ m. Find its frequency.", steps:["f = c ÷ λ","3 × 10⁸ ÷ 5 × 10⁻⁷"], a:"6 × 10¹⁴ Hz"},
    {q:"A microwave has a frequency of 1 × 10¹⁰ Hz. Find its wavelength.", steps:["λ = c ÷ f","3 × 10⁸ ÷ 1 × 10¹⁰"], a:"0.03 m"},
    {q:"State the speed of light in vacuum to one significant figure.", steps:["c = 3 × 10⁸ m/s"], a:"3 × 10⁸ m/s"}
  ],
  apply:[
    {q:"Why is the Earth not fried by the Sun's rays during the day but a person can get sunburn?", a:"The atmosphere blocks much ultraviolet, but enough ultraviolet still reaches the skin to cause sunburn; overexposure must be avoided."},
    {q:"Why can radio signals travel around the world while visible light cannot?", a:"Radio waves are reflected by the ionosphere, bending around the curvature of the Earth, whereas visible light passes straight through and is blocked by the horizon."},
    {q:"Why are gamma rays used to treat cancer rather than visible light?", a:"Gamma rays have very high energy that can destroy cancer cells, while visible light carries too little energy to penetrate and damage them."}
  ],
  activities:[
    "Draw the electromagnetic spectrum and label the bands in order",
    "Demonstrate the inverse square law with a lamp and a card",
    "Investigate how a microwave oven heats food",
    "Research one use of each band of the spectrum",
    "Solve problems using the universal wave equation"
  ],
  materials:[
    "Lamps, torches, cards and metre rules",
    "Charts of the electromagnetic spectrum",
    "Remote controls, microwave oven and X-ray pictures (samples)",
    "Graph paper and calculators"
  ],
  assessment:["Written test","Poster making","Problem solving","Research presentation","Class quiz"]
},
{
  grade:12, period:"IV", sem:"Two", icon:"🔭",
  title:"Optics",
  subtitle:"The pinhole camera, reflection and mirrors, refraction, lenses, dispersion, the eye and the telescope",
  outcomes:[
    "Explain the reflection and refraction of light and solve related problems",
    "Describe how lenses, the eye and optical instruments form images"
  ],
  objectives:[
    "Describe the pinhole camera and how it forms an image",
    "State the laws of reflection and draw ray diagrams for plane mirrors",
    "Describe reflection by spherical mirrors",
    "Explain refraction, refractive index and critical angle",
    "Describe dispersion of light through a prism",
    "Describe the convex lens, the camera, the eye and the telescope",
    "Solve problems on lenses and refractive index"
  ],
  note:"<b>Light</b> travels in straight lines. The <b>laws of reflection</b> state that the angle of incidence equals the angle of reflection and that the incident ray, normal and reflected ray lie in the same plane. <b>Refraction</b> is the bending of light when it passes from one medium to another; the <b>refractive index</b> n = sin i ÷ sin r (Snell's law). <b>Dispersion</b> splits white light into its colours through a prism. A <b>convex lens</b> converges light and forms images; it is the principle of the camera, the eye and the telescope.",
  focus:[
    "The pinhole camera and the rectilinear propagation of light",
    "The laws of reflection; the plane mirror",
    "Spherical mirrors and ray diagrams",
    "Refraction, Snell's law and refractive index",
    "Critical angle and total internal reflection",
    "Dispersion of white light through a prism",
    "Convex lenses, the eye, the camera and the telescope"
  ],
  terms:[
    {t:"rectilinear propagation", d:"light travels in straight lines", x:"The pinhole camera uses rectilinear propagation."},
    {t:"reflection", d:"the bouncing of light off a surface", x:"Reflection lets a mirror show your image."},
    {t:"incident ray", d:"the ray of light that strikes a surface", x:"The incident ray meets the mirror."},
    {t:"reflected ray", d:"the ray that bounces off a surface", x:"The reflected ray leaves the mirror."},
    {t:"normal", d:"the line at right angles to the surface at the point of incidence", x:"Angles are measured to the normal."},
    {t:"angle of incidence", d:"the angle between the incident ray and the normal", x:"The angle of incidence equals the angle of reflection."},
    {t:"refraction", d:"the bending of light when it changes medium", x:"A spoon in water looks bent due to refraction."},
    {t:"refractive index", d:"the ratio sin i ÷ sin r (Snell's law)", x:"Glass has a refractive index of about 1.5."},
    {t:"critical angle", d:"the angle of incidence above which total internal reflection occurs", x:"Beyond the critical angle light reflects internally."},
    {t:"dispersion", d:"the splitting of white light into its colours", x:"A prism causes dispersion."},
    {t:"convex lens", d:"a lens that is thicker at the centre and converges light", x:"A magnifying glass is a convex lens."},
    {t:"concave lens", d:"a lens that is thinner at the centre and diverges light", x:"A concave lens spreads light out."},
    {t:"principal focus", d:"the point where parallel rays meet after a convex lens", x:"Parallel rays focus at the principal focus."},
    {t:"focal length", d:"the distance from the lens to its principal focus", x:"Focal length is measured in metres."}
  ],
  facts:[
    {q:"State the two laws of reflection.", a:"(1) The angle of incidence equals the angle of reflection; (2) the incident ray, the normal and the reflected ray all lie in the same plane."},
    {q:"Define refractive index and write Snell's law.", a:"The refractive index of a medium is n = sin i ÷ sin r, where i is the angle of incidence and r the angle of refraction, when light enters from air."},
    {q:"What is the critical angle and what happens beyond it?", a:"It is the angle of incidence at which the refracted ray just grazes the surface; for angles greater than the critical angle, total internal reflection occurs."},
    {q:"What is dispersion and what does a prism produce?", a:"Dispersion is the splitting of white light into its constituent colours by a prism, producing the visible spectrum."},
    {q:"How does a convex lens form an image of a distant object?", a:"Parallel rays from the distant object are converged to the principal focus, forming a real, inverted and diminished image."},
    {q:"A ray enters glass with i = 30° and refracts at r = 20°. Find the refractive index.", a:"n = sin30° ÷ sin20° = 0.5 ÷ 0.342 = 1.46."},
    {q:"Why is a pinhole camera image inverted?", a:"Light travels in straight lines, so the ray from the top of the object passes through the pinhole and reaches the bottom of the screen, inverting the image."}
  ],
  tf:[
    {s:"The angle of incidence equals the angle of reflection.", a:"true", why:"That is the first law of reflection."},
    {s:"Light travels in straight lines.", a:"true", why:"This is the principle of rectilinear propagation."},
    {s:"A concave lens converges parallel light to a focus.", a:"false", why:"A concave lens diverges light; it is the convex lens that converges it."},
    {s:"Refraction is the bending of light when it changes medium.", a:"true", why:"That is the definition of refraction."},
    {s:"Dispersion splits white light into its colours.", a:"true", why:"A prism disperses white light into the spectrum."},
    {s:"The refractive index of a medium is always less than 1.", a:"false", why:"For a medium denser than air the refractive index is greater than 1."}
  ],
  classify:{ title:"Sort these statements and devices", groups:[
    {name:"Reflection", items:["plane mirror","spherical mirror","angle of incidence equals angle of reflection"]},
    {name:"Refraction", items:["Snell's law","refractive index","bending in water","critical angle"]},
    {name:"Converging light", items:["convex lens","concave mirror","magnifying glass"]},
    {name:"Diverging light", items:["concave lens","convex mirror"]}
  ]},
  diagram:{ title:"Refraction of light into a prism", caption:"State what each part shows.", parts:[
    {p:"Incident ray", f:"Light entering the glass from air"},
    {p:"Normal", f:"Line at right angles to the surface"},
    {p:"Bent ray in glass", f:"Light bending towards the normal on entering"},
    {p:"Refracted ray out", f:"Light bending away from the normal on leaving"},
    {p:"Dispersion", f:"White light splitting into colours inside the prism"}
  ]},
  experiment:{
    title:"Refraction through a rectangular block",
    aim:"To verify that light bends on entering and leaving a glass block and to measure the refractive index.",
    materials:["A rectangular glass block","A ray box or torch with a slit","A sheet of white paper","A pencil and protractor"],
    steps:[
      "Place the block on the paper and draw its outline.",
      "Direct a narrow ray of light into one face at a known angle of incidence.",
      "Mark the path of the ray entering and leaving the block.",
      "Draw the ray paths, the normal and measure the angle of refraction.",
      "Calculate n = sin i ÷ sin r and repeat for other angles."
    ],
    expect:"The light bends towards the normal on entering the block and away from it on leaving; the ratio sin i ÷ sin r is constant and close to the refractive index of glass (about 1.5).",
    why:"The block has a different optical density from air, so the speed of light changes and the ray bends according to Snell's law. Measuring the angles lets the refractive index be calculated directly."
  },
  worked:[
    {q:"A ray of light has an angle of incidence of 45° and an angle of refraction of 28°. Find the refractive index.", steps:["n = sin i ÷ sin r","sin45° ÷ sin28°","0.707 ÷ 0.469"], a:"1.51"},
    {q:"A convex lens has a focal length of 20 cm. Express it in metres.", steps:["1 m = 100 cm","20 ÷ 100"], a:"0.2 m"},
    {q:"Light travels at 3 × 10⁸ m/s in air and 2 × 10⁸ m/s in a medium. Find the refractive index of the medium.", steps:["n = speed in air ÷ speed in medium","3 × 10⁸ ÷ 2 × 10⁸"], a:"1.5"},
    {q:"Given n = 1.5 and an angle of refraction of 30°, find sin i (and hence i).", steps:["sin i = n × sin r","1.5 × sin30° = 1.5 × 0.5"], a:"sin i = 0.75, so i ≈ 49°"}
  ],
  apply:[
    {q:"Why does a swimming pool appear shallower than it really is?", a:"Light from the bottom of the pool bends away from the normal as it leaves the water, so the eye traces it back to a higher apparent position, making the pool look shallower."},
    {q:"Why are fibre-optic cables able to carry light without it escaping?", a:"Light is kept inside the fibre by total internal reflection, bouncing off the walls whenever it reaches an angle greater than the critical angle."},
    {q:"Why does a person with short sight need a concave lens?", a:"A concave lens diverges the light so the image is focused on the retina instead of in front of it, correcting the short-sighted eye."}
  ],
  activities:[
    "Make a pinhole camera and observe its inverted image",
    "Verify the laws of reflection with a plane mirror",
    "Trace refraction through a glass block and find the refractive index",
    "Use a convex lens to form images and measure the focal length",
    "Demonstrate dispersion of white light through a prism"
  ],
  materials:[
    "Plane and spherical mirrors, glass blocks and prisms",
    "Ray boxes, slits and protractors",
    "Convex and concave lenses, screens and metre rules",
    "Pinhole cameras and sample optical instruments"
  ],
  assessment:["Practical work","Written test","Ray diagram drawing","Problem solving","Class quiz"]
},
{
  grade:12, period:"V", sem:"Two", icon:"⚡",
  title:"Static Electricity (Electrostatics)",
  subtitle:"Charging by friction, the electroscope, the Van de Graaff generator, capacitors and applications of electrostatics",
  outcomes:[
    "Explain how objects become charged and how charges behave",
    "Describe electrostatic instruments and their applications"
  ],
  objectives:[
    "Describe the atomic model of charge",
    "Explain charging by friction, contact and induction",
    "Describe the force between charges and the electric field",
    "Use the electroscope to detect charge",
    "Describe the Van de Graaff generator",
    "Describe the capacitor and its uses",
    "State applications of electrostatics"
  ],
  note:"Matter is made of atoms with <b>protons</b> (positive), <b>electrons</b> (negative) and <b>neutrons</b> (neutral). Charging by <b>friction</b> transfers electrons between materials, so one gains a negative charge and the other a positive charge. <b>Like charges repel and unlike charges attract</b>. The <b>electroscope</b> detects charge, the <b>Van de Graaff generator</b> builds up a high voltage, and a <b>capacitor</b> stores charge.",
  focus:[
    "The atomic model: protons, electrons and neutrons",
    "Charging by friction, contact and induction",
    "Attraction and repulsion of charges",
    "The electric field",
    "The electroscope",
    "The Van de Graaff generator",
    "Capacitors and applications of electrostatics"
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
    {t:"lightning conductor", d:"a metal rod that conducts lightning safely to the ground", x:"A lightning conductor protects a building."}
  ],
  facts:[
    {q:"Describe the atomic model of electric charge.", a:"Atoms consist of a nucleus of positively charged protons and neutral neutrons, surrounded by negatively charged electrons; normally the numbers of protons and electrons are equal, so the atom is neutral."},
    {q:"Explain how charging by friction works.", a:"Rubbing transfers electrons from one material to the other: the material that loses electrons becomes positively charged and the one that gains them becomes negatively charged."},
    {q:"State the rule for the force between charges.", a:"Like charges repel each other and unlike charges attract each other."},
    {q:"What is the electric field around a charge?", a:"The region around a charge in which another charge experiences a force; it is drawn with field lines from positive to negative."},
    {q:"How is an electroscope used to detect charge?", a:"When a charged object touches or is brought near the cap, charge moves to the leaves, which diverge because like charges repel, showing that charge is present."},
    {q:"What is a capacitor and what does its capacitance measure?", a:"A capacitor stores electric charge; its capacitance is the charge stored per unit voltage, measured in farads."},
    {q:"State two applications of electrostatics.", a:"Photocopiers and laser printers, electrostatic painting, the lightning conductor, and air purification are examples."}
  ],
  tf:[
    {s:"Like charges repel each other.", a:"true", why:"Like charges repel and unlike charges attract."},
    {s:"An electron is positively charged.", a:"false", why:"An electron carries a negative charge; a proton is positive."},
    {s:"Rubbing a balloon on hair charges it by friction.", a:"true", why:"Electrons transfer during rubbing, giving the balloon a net charge."},
    {s:"A capacitor stores electric charge.", a:"true", why:"That is the purpose of a capacitor."},
    {s:"The leaves of a charged electroscope repel because they gain like charges.", a:"true", why:"Both leaves gain the same charge and repel."},
    {s:"A neutral atom has more electrons than protons.", a:"false", why:"A neutral atom has equal numbers of protons and electrons."}
  ],
  classify:{ title:"Sort these statements and devices", groups:[
    {name:"Positive charge carriers", items:["proton"]},
    {name:"Negative charge carriers", items:["electron"]},
    {name:"Neutral particles", items:["neutron","uncharged atom"]},
    {name:"Electrostatic devices", items:["electroscope","Van de Graaff generator","capacitor","lightning conductor"]}
  ]},
  diagram:{ title:"Charging an electroscope by induction", caption:"State what each part does.", parts:[
    {p:"Metal cap", f:"Receives the charge from the charged rod"},
    {p:"Metal rod", f:"Conducts the charge to the leaves"},
    {p:"Gold leaves", f:"Diverge because they gain like charges"},
    {p:"Charged rod", f:"Brings charge near (or touches) the cap"},
    {p:"Earth connection", f:"Allows induced charge to escape during induction"}
  ]},
  experiment:{
    title:"Charging by friction with a balloon",
    aim:"To show how rubbing transfers charge and how the charged object attracts and repels.",
    materials:["A balloon","A piece of wool or a jumper","Small pieces of paper","A wall or running tap"],
    steps:[
      "Rub the balloon against the wool or jumper for a minute.",
      "Bring the balloon near small pieces of paper and observe.",
      "Bring it near a thin stream of running water and observe.",
      "Hold the charged balloon against a wall and release it.",
      "Test the balloon with two rubbed together and describe what happens."
    ],
    expect:"The rubbed balloon attracts small pieces of paper and bends a stream of water because it is charged and induces opposite charge. It may cling to a wall for the same reason.",
    why:"Rubbing transfers electrons from the wool to the balloon, giving it a net negative charge. The charged balloon attracts neutral objects by inducing an opposite charge on them, demonstrating the force between unlike charges."
  },
  worked:[
    {q:"A balloon is rubbed and gains 3 × 10⁶ electrons. State the sign of its charge.", steps:["Gaining electrons adds negative charge"], a:"Negative"},
    {q:"A rod loses electrons when rubbed. State the sign of its charge.", steps:["Losing electrons leaves more protons"], a:"Positive"},
    {q:"Two identical charges repel with force F. If the charge is doubled, what happens to the force?", steps:["Force is proportional to the product of the charges","Doubling one charge doubles the force"], a:"The force doubles"},
    {q:"A capacitor stores 2 C of charge at a voltage of 4 V. Find its capacitance.", steps:["C = Q ÷ V","2 ÷ 4"], a:"0.5 F"}
  ],
  apply:[
    {q:"Why does your hair stand up when you touch a Van de Graaff generator?", a:"Your body gains like charges that spread to the strands of hair, which then repel one another and stand up."},
    {q:"Why does a photocopier attract toner powder to the charged drum?", a:"The drum carries a pattern of static charge; the oppositely charged toner is attracted to the charged areas and sticks to form the image."},
    {q:"Why are the metal cases of sensitive electronic equipment earthed?", a:"Earthing lets any built-up static charge flow safely away, preventing sparks and protecting the delicate components."}
  ],
  activities:[
    "Charge a balloon by friction and observe its effects",
    "Demonstrate attraction and repulsion with charged rods",
    "Use an electroscope to detect different charges",
    "Visit or describe the working of a Van de Graaff generator",
    "Discuss applications of electrostatics in the home and industry"
  ],
  materials:[
    "Balloons, rods of glass and ebonite, and wool",
    "An electroscope",
    "Small pieces of paper and running water",
    "Charts and diagrams of capacitors and generators"
  ],
  assessment:["Practical work","Written test","Demonstration","Class quiz","Assignment"]
},
{
  grade:12, period:"VI", sem:"Two", icon:"☢️",
  title:"Atomic and Nuclear Physics; Electronics",
  subtitle:"Atomic structure, isotopes, radioactivity, half-life, nuclear reactions and basic electronic devices",
  outcomes:[
    "Describe the atom, radioactivity and the uses of nuclear energy",
    "Explain the basic semiconductor devices used in electronics"
  ],
  objectives:[
    "Describe the structure of the atom and the values of A and Z",
    "Define isotopes and give examples",
    "Compare alpha, beta and gamma radiation",
    "Define half-life and solve related problems",
    "Describe nuclear fission and fusion and the uses of radioactive isotopes",
    "Describe thermionic emission, the diode and simple electronic circuits"
  ],
  note:"The nucleus contains <b>protons (Z)</b> and <b>neutrons</b>; the <b>mass number A</b> is the total. <b>Isotopes</b> are atoms of the same element with different numbers of neutrons. Unstable nuclei emit <b>alpha (α)</b>, <b>beta (β)</b> or <b>gamma (γ)</b> radiation. <b>Half-life</b> is the time for half the nuclei in a sample to decay. <b>Fission</b> splits a heavy nucleus and <b>fusion</b> joins light nuclei, both releasing huge energy. A <b>diode</b> lets current flow one way and is used for rectification.",
  focus:[
    "The atom: protons, neutrons, electrons; A and Z",
    "Isotopes and their uses",
    "Alpha, beta and gamma radiation compared",
    "Half-life and decay",
    "Nuclear fission and fusion; chain reactions",
    "Uses and dangers of radioactive isotopes",
    "Thermionic emission, the diode and simple electronic circuits"
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
    {t:"diode", d:"a device that allows current to flow in one direction only", x:"A diode rectifies alternating current."},
    {t:"rectification", d:"converting alternating current to direct current", x:"Half-wave rectification uses one diode."}
  ],
  facts:[
    {q:"Describe the structure of the atom and define A and Z.", a:"An atom has a nucleus of protons and neutrons surrounded by electrons; Z is the proton number and A is the mass number (protons + neutrons)."},
    {q:"What are isotopes? Give an example.", a:"Isotopes are atoms of the same element with the same number of protons but different numbers of neutrons, such as carbon-12 and carbon-14."},
    {q:"Compare alpha, beta and gamma radiation.", a:"Alpha particles are helium nuclei (2p + 2n), positively charged, stopped by paper; beta particles are fast electrons, negatively charged, stopped by a few millimetres of metal; gamma rays are electromagnetic waves, stopped only by thick lead or concrete."},
    {q:"Define half-life.", a:"Half-life is the time taken for half the nuclei in a radioactive sample to decay, so the activity falls to half."},
    {q:"Distinguish nuclear fission from nuclear fusion.", a:"Fission splits a heavy nucleus (such as uranium) into lighter nuclei releasing energy and is used in reactors; fusion joins light nuclei (such as hydrogen) to form a heavier one, releasing far more energy and powering the Sun."},
    {q:"State two uses and two dangers of radioactive isotopes.", a:"Uses: medical imaging and cancer radiotherapy, dating ancient materials, sterilising equipment. Dangers: damage to living cells, cancer and radiation sickness if exposure is excessive."},
    {q:"A sample has a half-life of 10 days. What fraction remains after 20 days?", a:"After one half-life ½ remains; after two, ¼ remains."}
  ],
  tf:[
    {s:"The mass number A is the number of protons in a nucleus.", a:"false", why:"A is the total of protons and neutrons; the number of protons is Z."},
    {s:"Alpha particles are stopped by a sheet of paper.", a:"true", why:"Alpha particles are weakly penetrating."},
    {s:"Gamma rays are the most penetrating form of nuclear radiation.", a:"true", why:"Gamma rays need thick lead or concrete to be stopped."},
    {s:"Half-life is the time for the whole sample to decay.", a:"false", why:"It is the time for half of the sample to decay, not all of it."},
    {s:"Nuclear fusion powers the Sun.", a:"true", why:"The Sun releases energy by fusing hydrogen into helium."},
    {s:"A diode allows current to flow in both directions.", a:"false", why:"A diode allows current to flow in one direction only."}
  ],
  classify:{ title:"Sort these particles and statements", groups:[
    {name:"Alpha properties", items:["helium nucleus","positive","stopped by paper"]},
    {name:"Beta properties", items:["fast electron","negative","stopped by thin metal"]},
    {name:"Gamma properties", items:["electromagnetic wave","no charge","stopped by thick lead"]},
    {name:"Nuclear processes", items:["fission","fusion","chain reaction"]}
  ]},
  diagram:{ title:"The structure of the atom", caption:"State what each part is.", parts:[
    {p:"Proton", f:"Positively charged particle; Z counts them"},
    {p:"Neutron", f:"Neutral particle; together with protons gives A"},
    {p:"Electron", f:"Negatively charged particle in the shells"},
    {p:"Nucleus", f:"Dense centre containing protons and neutrons"},
    {p:"Electron shell", f:"The orbit where electrons are found"}
  ]},
  experiment:{
    title:"Modelling half-life with a dice",
    aim:"To model the random decay of a radioactive sample and understand half-life.",
    materials:["A set of dice (or coins)","Paper and pencil for recording","A container"],
    steps:[
      "Start with all the dice showing an 'active' state and count them.",
      "Throw all the dice and remove (count as 'decayed') any showing a chosen number, such as 6.",
      "Count how many active dice remain and record the number.",
      "Repeat, throwing only the remaining active dice, until very few are left.",
      "Plot the number of active dice against the number of throws."
    ],
    expect:"The number of active dice falls roughly by half after every few throws, producing an exponential decay curve very like the decay of a real radioactive sample.",
    why:"Each throw is a random trial in which about one in six of the remaining dice 'decays', so the fraction removed is constant. This constant-fraction removal is exactly how radioactivity decays, and it explains the meaning of half-life."
  },
  worked:[
    {q:"A nucleus has Z = 92 and A = 238. Find the number of neutrons.", steps:["Neutrons = A − Z","238 − 92"], a:"146 neutrons"},
    {q:"A sample has a half-life of 4 days. What fraction remains after 12 days?", steps:["12 days = 3 half-lives","(1/2)³"], a:"1/8 remains"},
    {q:"A radioactive sample has an activity of 800 counts/min and a half-life of 5 years. Find its activity after 10 years.", steps:["10 years = 2 half-lives","800 ÷ 2 = 400, ÷ 2 = 200"], a:"200 counts/min"},
    {q:"How many protons and neutrons are in carbon-14 (Z = 6)?", steps:["Protons = Z = 6","Neutrons = A − Z = 14 − 6"], a:"6 protons, 8 neutrons"}
  ],
  apply:[
    {q:"Why are carbon-14 and potassium-40 used to date ancient objects?", a:"They decay at a known constant rate (fixed half-life), so measuring the remaining proportion gives the age of the object since it formed."},
    {q:"Why does a nuclear reactor use control rods?", a:"Control rods absorb neutrons to keep the chain reaction going steadily at a safe rate instead of running away."},
    {q:"Why is a semiconductor diode used in a power supply?", a:"It allows current to flow in only one direction, so it rectifies the alternating mains supply into direct current for electronic devices."}
  ],
  activities:[
    "Model half-life with dice and plot the decay curve",
    "Compare the penetrating power of the radiations using sources and barriers (teacher-supervised)",
    "Research the uses of radioactive isotopes in medicine and industry",
    "Explain the difference between fission and fusion with diagrams",
    "Build a simple half-wave rectifier circuit with a diode"
  ],
  materials:[
    "Dice or coins for the half-life model",
    "Graph paper for decay curves",
    "Charts of atomic structure and the electromagnetic spectrum",
    "A diode, a small bulb, a power supply and wires for the rectifier circuit"
  ],
  assessment:["Practical model","Written test","Problem solving","Research presentation","Class quiz"]
}
];
