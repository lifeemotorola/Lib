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
    {k:"rule"},
    {k:"h3", t:"The Instruments and the Readings They Give"},
    {k:"table", head:["Instrument","Quantity measured","Reads to","The precaution that saves the mark"], rows:[
      ["Metre rule","Length","1 mm","Keep the eye square to the mark; check the worn zero end and start from the 10 cm mark instead"],
      ["Vernier caliper","Length, small diameters and depths","0.1 mm","Close the jaws on nothing first and note the zero error, then subtract it"],
      ["Micrometer screw gauge","Small lengths, wire diameter","0.01 mm","Turn the ratchet until it clicks; never force the spindle"],
      ["Measuring cylinder","Volume of a liquid","1 cm³","Read the bottom of the meniscus with the eye level with the liquid"],
      ["Triple-beam or electronic balance","Mass","0.1 g or 0.01 g","Zero the balance, and never weigh a hot or wet sample directly"],
      ["Stopwatch","Time","0.01 s","Start and stop on the same reference event; repeat and average to beat reaction time"],
      ["Thermometer","Temperature","1 °C or 0.1 °C","Immerse the bulb fully and leave it until the reading steadies"],
      ["Spring balance","Force (weight)","0.1 N","Hang it vertically, check the zero, and read at eye level"],
      ["Tape measure","Long distances and circumferences","1 mm","Keep the tape taut and in line with what is measured"]
    ]},
    {k:"p", t:"**Reading the vernier and the micrometer.** On a vernier caliper read the **main scale** just before the vernier zero (say 2.3 cm), then find the one vernier division that lines up exactly with a main-scale line — the 6th gives 0.06 cm, so the reading is **2.36 cm**. On a micrometer read the **sleeve** (say 5.5 mm) and add the **thimble** division that lines up with the datum line (21 × 0.01 = 0.21 mm) for **5.71 mm**. Both instruments carry a **zero error** when they do not read zero on nothing: a rule reads +0.03 mm closed means every reading must have 0.03 mm subtracted. Say the error and the correction in the answer — examiners award the mark for the correction, not for the number alone."},
    {k:"h3", t:"Significant Figures, Standard Form and Conversion"},
    {k:"num", items:[
      "**Every non-zero digit is significant:** 4.57 has three significant figures",
      "**Zeros between digits are significant:** 4007 has four; **leading zeros are not:** 0.0042 has two — they only place the point",
      "**Trailing zeros after a decimal point are significant:** 2.50 has three, because the writer measured to the hundredth; 2.5 has two",
      "**Write big and small numbers in standard form,** one digit before the point times a power of ten: 150 000 000 m/s becomes 1.5 × 10⁸ m/s; 0.000 000 001 6 C becomes 1.6 × 10⁻¹⁹ C",
      "**Give the answer to the least number of significant figures used in the data:** a length of 2.4 m (two figures) times a width of 1.35 m (three) is 3.2 m², not 3.24 m²",
      "**Always carry the unit.** A number with no unit is not a physical quantity and usually loses the mark"
    ]},
    {k:"p", t:"**Conversions that recur in every paper:** 1 km = 1000 m, 1 m = 100 cm = 1000 mm, 1 cm = 10 mm, 1 mm = 1000 µm; 1 kg = 1000 g; 1 h = 60 min = 3600 s; 1 litre = 1000 cm³ = 10⁻³ m³; and because area and volume square and cube the factor, 1 m² = 10⁴ cm² while 1 m³ = 10⁶ cm³ — which is why 1 g/cm³ is exactly 1000 kg/m³. Speed converts by dividing by 3.6: 72 km/h ÷ 3.6 = **20 m/s**, and a taxi at 36 km/h is doing 10 m/s, covering 10 m every second — the figure that decides whether it stops in time for the child in the road."},
    {k:"h3", t:"Errors — and What to Do About Them"},
    {k:"table", head:["Error","How it arises","The remedy"], rows:[
      ["Zero error","The instrument does not read zero when it should","Note the error and subtract it from every reading"],
      ["Parallax error","The eye is off to one side of the scale","Bring the eye directly in line with the mark or the meniscus"],
      ["Reaction time","The stopwatch starts or stops late, about 0.2 s either way","Time many events, or many repetitions, and divide"],
      ["Random error","Readings scatter either side of the true value from small unknown causes","Repeat the measurement and take the average"],
      ["Systematic error","Every reading is wrong in the same direction (a stretched tape, an uncalibrated balance)","Calibrate against a known standard, or use another instrument"],
      ["End error","The zero end of a rule is worn away","Start measuring from the 10 cm mark and subtract"]
    ]},
    {k:"p", t:"**Accuracy against precision.** A balance that reads 24.31 g, 24.30 g and 24.32 g is **precise** — the readings agree — and if the true mass is 24.31 g it is **accurate** too. A balance that reads 24.6 g, 24.6 g and 24.6 g when the true mass is 24.3 g is precise but not accurate: it carries a systematic zero error. Averaging cures random scatter; only calibration cures a systematic error. **Percentage error** says how bad a reading is: an error of 0.5 cm on a 20 cm length is (0.5 ÷ 20) × 100 = 2.5 %, but the same 0.5 cm on a 2 cm length is 25 % — which is why short lengths are measured with a vernier rather than a rule."},
    {k:"h3", t:"The Dimensions of the Derived Quantities"},
    {k:"table", head:["Quantity","Formula","SI unit","Dimension"], rows:[
      ["Area","length × length","m²","L²"],
      ["Volume","length × breadth × height","m³","L³"],
      ["Density","mass ÷ volume","kg/m³","ML⁻³"],
      ["Speed / velocity","distance ÷ time","m/s","LT⁻¹"],
      ["Acceleration","change of velocity ÷ time","m/s²","LT⁻²"],
      ["Force","mass × acceleration","N (kg m/s²)","MLT⁻²"],
      ["Work and energy","force × distance","J (N m)","ML²T⁻²"],
      ["Power","work ÷ time","W (J/s)","ML²T⁻³"],
      ["Pressure","force ÷ area","Pa (N/m²)","ML⁻¹T⁻²"],
      ["Momentum","mass × velocity","kg m/s","MLT⁻¹"]
    ]},
    {k:"p", t:"**Using dimensions as a check.** Take the formula v² = u² + 2as. The left side carries (LT⁻¹)² = L²T⁻²; the right side carries 2 × LT⁻² × L = L²T⁻². The dimensions agree, so the equation may be right. Try s = ut + ½at³: LT⁻² × T³ = L²T⁻¹, which is not a length, so the equation must be wrong however neatly it was remembered. Dimensional analysis cannot prove an equation correct — a constant of ½ or 2 escapes it — but it catches almost every misremembered formula, and it converts units for you: the newton is a kilogram metre per second squared, so pressure, force ÷ area, must be kg m⁻¹ s⁻², the pascal."},
    {k:"h3", t:"Pressure in Numbers"},
    {k:"p", t:"**P = F/A** turns every everyday effect into arithmetic. A woman of weight 600 N balancing on two heels, each of area 1 cm², presses on 2 × 10⁻⁴ m² of floor: P = 600 ÷ (2 × 10⁻⁴) = **3 × 10⁶ Pa**, thirty times the pressure of the atmosphere — enough to dent a wooden floor and to sink into soft ground, which is why she wears flat shoes on the beach. The same 600 N spread over two soles of 150 cm² each gives 600 ÷ (3 × 10⁻²) = **2 × 10⁴ Pa**, one hundred and fifty times less. This is the whole physics of the sharp cutlass (a small area, a great pressure), the broad tractor track and the elephant's padded feet (a great area, a small pressure), the wide strap of the school bag, the needle and the nail point, and the railway sleeper carrying the rail's load into the ballast."},
    {k:"h3", t:"Liquids Under Pressure — P = ρgh Worked"},
    {k:"p", t:"In a liquid the pressure at a depth h is **P = ρgh**, and it does not depend on the shape or the width of the vessel — only on depth, density and g. Five metres down in a lake: P = 1000 × 10 × 5 = **5 × 10⁴ Pa**, half an atmosphere; add the atmosphere above it and a diver's eardrum feels **1.5 × 10⁵ Pa**. Ten metres down the water alone gives 10⁵ Pa, so the total is about **two atmospheres** — and every ten metres adds another. That is why a dam is built thick at the bottom and thin at the top, why the holes in a water tank jet furthest from the lowest one, why a submarine has a limit to its depth, and why the town's **water tower stands high**: the height of the water above the tap is what pushes it out, and a tower 20 m above the tap delivers 1000 × 10 × 20 = 2 × 10⁵ Pa, enough for two atmospheres at the standpipe. Pressure is transmitted equally in all directions at the same depth, and liquids are almost incompressible — the two facts behind Pascal's principle."},
    {k:"h3", t:"Pascal's Principle and the Hydraulic Press"},
    {k:"p", t:"**Pascal's principle:** pressure applied to an enclosed fluid is transmitted undiminished to every part of the fluid and to the walls of the container. In the **hydraulic press** a small effort on a small piston makes the same pressure in the oil as a large load on a large piston, so **F₁/A₁ = F₂/A₂**. Push 20 N down on a piston of area 0.01 m² and the oil carries 2000 Pa; that pressure on a piston of area 1 m² lifts F₂ = 2000 × 1 = **2000 N**. The machine multiplies force tenfold, and its **velocity ratio is A₂/A₁**, the same ten — the small piston moves ten times as far as the large one, so no energy is created: work in equals work out, less the friction. The same principle runs the car **jack**, the **hydraulic brake** (the master cylinder pressing on four wheel cylinders), the power steering, the dentist's chair and the press that bales scrap metal."},
    {k:"h3", t:"Archimedes' Principle, Flotation and Relative Density"},
    {k:"p", t:"**Archimedes' principle:** when a body is wholly or partly immersed in a fluid it experiences an **upthrust** equal to the weight of the fluid it displaces. The **law of flotation** follows: a floating body displaces its own weight. A boat of weight 5000 N floating at rest displaces 5000 N of water, that is 500 kg of it, which is 0.5 m³ — the volume of the hull below the waterline, and the reason the **Plimsoll line** is marked on the ship's side for fresh water and for salt water of different densities. Weigh a stone in air (12 N) and again under water (8 N): the upthrust is 4 N, so the **relative density** of the stone is weight in air ÷ loss of weight in water = 12 ÷ 4 = **3**, and its density is 3 × 1000 = **3000 kg/m³**. An object sinks when its density exceeds the liquid's, floats when it is less, and stays where it is put when the two are equal. The **density bottle** finds the relative density of a liquid by weighing equal volumes of it and of water; the **hydrometer** floats upright, weighted at the base, with a narrow stem so that a small change of density shows as a large change of depth — it sinks lower in kerosene than in water, which is why it is used to test a car battery's acid and the freshness of milk."},
    {k:"h3", t:"Atmospheric Pressure, Barometers and Manometers"},
    {k:"p", t:"The air above us weighs on everything: at sea level it supports **760 mm (76 cm) of mercury** in a barometer. Check it with P = ρgh: 13 600 × 10 × 0.76 ≈ **1.03 × 10⁵ Pa**, called one atmosphere. Mercury is used because it is dense (a water barometer would need 10.3 m of tube), does not wet the glass and has a low vapour pressure; the space above the column is a **Torricellian vacuum**. The **aneroid barometer** uses a sealed, springy metal box whose lid moves with the pressure — the dial of the weather station and of the aircraft altimeter, which reads height because pressure falls about 1 mm of mercury for every 11 m of climb. A **manometer** is a U-tube that measures a gas pressure against the atmosphere: the difference in the two levels gives the excess pressure. The **suction** of a drinking straw, a syringe and a rubber sucker is not suction at all — the mouth or the hand removes the air inside, and the atmosphere outside pushes the liquid or the cup in. At high altitude the pressure falls, so water boils below 100 °C and food takes longer to cook, which is why the pressure cooker, raising the pressure inside, cooks faster."},
    {k:"h3", t:"Bernoulli's Principle in Numbers"},
    {k:"p", t:"Where a fluid speeds up, its pressure falls. Air flowing over the curved top of a **wing** travels faster than the air beneath, so the pressure above is lower and the difference lifts the aircraft; the same difference sucks two lorries together as they pass at speed, pulls a roof off in a storm (fast air above, still air below), curves a spinning football through the air, and draws the petrol into the airstream in a carburettor and the scent up an atomizer. In the **Bunsen burner** the jet of gas drags air in through the open hole; close the hole and the flame goes yellow and sooty because the air no longer mixes. The rule for every one of these: name the fast-moving fluid, state that its pressure is lower, and say which way the greater pressure on the other side pushes."},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Definitions with units** — define density, pressure, relative density and state the SI unit of each; a definition without its unit is half an answer",
      "**One substitution calculation** — usually P = F/A, P = ρgh, ρ = m/V or F₁/A₁ = F₂/A₂; the marks go to the formula, the substitution with units, and the answer with units",
      "**An instrument reading** — a vernier or micrometer scale drawn to be read, with the zero error stated",
      "**An explanation of an everyday effect** — why the heel sinks, why the dam is thick at the bottom, why the ship floats; the mark is for naming the principle and applying it, not for the story alone",
      "**A graph or a table of readings** — plot the points, draw the best straight line or smooth curve, and state the relationship the graph shows"
    ]}
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
    {q:"A woman of weight 600 N stands on two heels, each of area 1 cm². Find the pressure she exerts on the floor.", steps:[
      "Total area A = 2 cm² = 2 × 10⁻⁴ m²",
      "P = F ÷ A = 600 ÷ (2 × 10⁻⁴)"
    ], a:"3 × 10⁶ Pa (about 30 times atmospheric pressure)"},
    {q:"Convert 72 km/h into m/s.", steps:[
      "72 km/h = 72 000 m ÷ 3600 s",
      "Divide by 3.6"
    ], a:"20 m/s"},
    {q:"A solid weighs 12 N in air and 8 N when fully immersed in water. Find the upthrust and the relative density of the solid.", steps:[
      "Upthrust = weight in air − weight in water = 12 − 8",
      "Relative density = weight in air ÷ upthrust = 12 ÷ 4",
      "Density = relative density × 1000 kg/m³"
    ], a:"Upthrust 4 N; relative density 3, so density 3000 kg/m³"},
    {q:"Find the total pressure 5 m below the surface of a lake, taking atmospheric pressure as 1.0 × 10⁵ Pa (ρ = 1000 kg/m³, g = 10 m/s²).", steps:[
      "Pressure of the water P = ρgh = 1000 × 10 × 5",
      "Total pressure = water pressure + atmospheric pressure"
    ], a:"1.5 × 10⁵ Pa"},
    {q:"The density of iron is 7800 kg/m³. Find the mass and the weight of a casting of volume 0.02 m³ (g = 10 m/s²).", steps:[
      "m = ρV = 7800 × 0.02",
      "W = mg = 156 × 10"
    ], a:"156 kg; weight 1560 N"}
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
    {k:"h3", t:"Distance, Displacement, Speed and Velocity in Detail"},
    {k:"table", head:["Quantity","What it measures","Scalar or vector","Unit","Formula"], rows:[
      ["Distance","The total length of the path travelled","Scalar","metre (m)","measured along the path"],
      ["Displacement","The shortest distance from start to finish, with its direction","Vector","metre (m)","straight line, start to end"],
      ["Speed","The rate of change of distance","Scalar","m/s","speed = distance ÷ time"],
      ["Velocity","The rate of change of displacement","Vector","m/s","velocity = displacement ÷ time"],
      ["Acceleration","The rate of change of velocity","Vector","m/s²","a = (v − u) ÷ t"]
    ]},
    {k:"p", t:"**Why the distinction is worth marks.** A runner completes one lap of a 400 m track in 80 s. Her **speed** is 400 ÷ 80 = **5 m/s**, but her **displacement** is zero — she stands where she started — so her **velocity** is **0 m/s**. A body moving in a circle at steady speed has a changing velocity, because the direction changes every instant, and a changing velocity means it is accelerating. **Average speed** is always total distance ÷ total time, never the average of the speeds: a taxi covers 60 km in the first hour and 90 km in the next two, so its average speed is 150 km ÷ 3 h = **50 km/h**, not the (60 + 45) ÷ 2 = 52.5 km/h that averaging the two speeds would give. **Instantaneous speed** is the reading of the speedometer at one moment; the **uniform** motion of the equations is motion at a steady velocity in a straight line."},
    {k:"h3", t:"Acceleration and Deceleration"},
    {k:"p", t:"**Acceleration** is the rate of change of velocity: a = (v − u) ÷ t, in **m/s²** — how many metres per second the velocity gains every second. A car going from 10 m/s to 30 m/s in 5 s accelerates at (30 − 10) ÷ 5 = **4 m/s²**; the same car braking from 20 m/s to rest in 4 s has a = (0 − 20) ÷ 4 = **−5 m/s²**, the negative sign marking **deceleration** (retardation). Acceleration happens whenever velocity changes — in size, in direction, or in both — so a car rounding a bend at a steady 15 m/s is accelerating even though the speedometer never moves. Take care with the sign: choose one direction as positive at the start and keep it for u, v, a and s all through the question."},
    {k:"h3", t:"The Equations of Motion and When to Use Each"},
    {k:"table", head:["Equation","Use it when this quantity is not involved","Useful rearrangements"], rows:[
      ["v = u + at","displacement s","u = v − at; t = (v − u) ÷ a; a = (v − u) ÷ t"],
      ["s = ut + ½at²","final velocity v","t from a quadratic; a = 2(s − ut) ÷ t²"],
      ["v² = u² + 2as","time t","s = (v² − u²) ÷ 2a; a = (v² − u²) ÷ 2s"],
      ["s = ½(u + v)t","acceleration a","the average velocity times the time"]
    ]},
    {k:"p", t:"These four hold only for **uniform (constant) acceleration in a straight line**. Choose by what the question gives and what it asks: no time mentioned → v² = u² + 2as; no final velocity → s = ut + ½at²; no distance → v = u + at; no acceleration → s = ½(u + v)t. For a body starting from rest u = 0 and they shrink to v = at, s = ½at² and v² = 2as; for a body brought to rest v = 0 and s = u² ÷ 2a is the **braking distance**, which grows as the square of the speed — double the speed, four times the distance to stop."},
    {k:"h3", t:"Reading and Drawing Motion Graphs"},
    {k:"table", head:["Graph","The gradient (slope) gives","The area under it gives","A horizontal line means"], rows:[
      ["Displacement–time","velocity","—","the body is at rest"],
      ["Velocity–time","acceleration","displacement travelled","constant velocity (zero acceleration)"],
      ["Acceleration–time","rate of change of acceleration","change of velocity","constant acceleration"]
    ]},
    {k:"p", t:"**Reading a velocity–time graph.** A car starts from rest, its velocity rising steadily to 20 m/s in 5 s, holds 20 m/s for 10 s, then brakes to rest in 4 s. The gradient of the first part is 20 ÷ 5 = **4 m/s²**; of the last part, −20 ÷ 4 = **−5 m/s²**; of the flat middle, zero. The distance travelled is the area: a triangle ½ × 5 × 20 = 50 m, a rectangle 20 × 10 = 200 m, and a triangle ½ × 4 × 20 = 40 m — **290 m** in 19 s, an average speed of 290 ÷ 19 ≈ **15.3 m/s**. On a displacement–time graph a straight line means constant velocity and its slope is that velocity; a curve bending upward means the body is speeding up; a line sloping back down means it is returning toward the start. When you draw one: use more than half the paper, label both axes with quantity and unit, plot the points small and neat, and draw the best straight line or smooth curve — never join dot to dot unless the reading demands it."},
    {k:"h3", t:"Free Fall and Vertical Projection"},
    {k:"p", t:"Near the Earth every body falls with **a = g ≈ 9.8 m/s², taken as 10 m/s²**, downward, whatever its mass — air resistance neglected. A stone dropped from 45 m: s = ½gt² gives t² = 90 ÷ 10 = 9, so it lands after **3 s** with v = gt = **30 m/s**. Thrown straight up at 20 m/s, it slows at 10 m/s², so it takes **2 s** to reach the top where v = 0, rises h = u² ÷ 2g = 400 ÷ 20 = **20 m**, and comes back symmetrically: **4 s** in all, striking the thrower's hand at 20 m/s. The whole flight uses a = −g on the way up and a = +g on the way down if upward is taken as positive — one sign convention, used consistently, is all that is needed. In real air a falling body accelerates only until the **air resistance** equals its weight; after that it falls at a constant **terminal velocity** — the parachutist's steady 50 m/s before the chute opens, the raindrop's gentle 8 m/s, the reason a cat and a person do not fall alike. Measure g in the laboratory by timing a falling steel ball released by an electromagnet onto a trapdoor, or with the simple pendulum (Grade 11)."},
    {k:"h3", t:"Newton's Laws in Detail"},
    {k:"num", items:[
      "**First law — the law of inertia.** A body remains at rest, or continues to move with uniform velocity in a straight line, unless acted on by a resultant external force. Inertia is the resistance to any change of motion and it grows with mass, which is why the loaded truck is harder to start and harder to stop than the taxi, why the passenger lurches forward when the bus brakes, why a coin drops into a glass when the card under it is flicked away, and why the headrest saves the neck in a rear-end collision",
      "**Second law.** The rate of change of momentum of a body is directly proportional to the resultant force and takes place in the direction of that force; with mass constant this is **F = ma**. One **newton** is the force that gives a mass of 1 kg an acceleration of 1 m/s². A 1200 kg car accelerating at 1.5 m/s² has a resultant force of 1800 N; if friction and air resistance total 400 N, the engine must supply **2200 N**. The law also reads F = (mv − mu) ÷ t, the form used for collisions and jets (Grade 11)",
      "**Third law.** To every action there is an equal and opposite reaction. The two forces are equal in size, opposite in direction, of the same kind, act at the same instant, and — the point that wins the mark — act on **different bodies**, which is why they never cancel each other"
    ]},
    {k:"table", head:["Action force","Reaction force","Where you see it"], rows:[
      ["Foot pushes backward on the ground","Ground pushes the foot forward","Walking and running"],
      ["Gun pushes the bullet forward","Bullet pushes the gun backward","Recoil of a gun"],
      ["Rocket pushes exhaust gas downward","Gas pushes the rocket upward","A rocket moving in empty space"],
      ["Book pushes down on the table","Table pushes up on the book","The normal reaction supporting a load"],
      ["Earth pulls the falling mango","Mango pulls the Earth upward","Universal gravitation — the Earth's huge mass makes its acceleration invisible"]
    ]},
    {k:"h3", t:"Mass and Weight"},
    {k:"table", head:["Mass","Weight"], rows:[
      ["The quantity of matter in a body","The gravitational force pulling on that matter"],
      ["A scalar — magnitude only","A vector — always toward the centre of the Earth"],
      ["Measured in kilograms (kg) with a beam balance","Measured in newtons (N) with a spring balance"],
      ["The same everywhere in the universe","W = mg, so it changes with g — less on a hill, less on the Moon"],
      ["A measure of inertia","A force, so it can be resolved into components on a slope"]
    ]},
    {k:"p", t:"A man of mass 60 kg weighs W = mg = 60 × 10 = **600 N** on Earth, but only 60 × 1.6 = **96 N** on the Moon where g = 1.6 m/s², while his mass stays 60 kg in both places — he is just as hard to shove sideways on the Moon as on Earth. Astronauts float not because gravity has stopped (at the space station's height it is still about 90 % of its surface value) but because the station and everything in it are falling together."},
    {k:"h3", t:"Universal Gravitation in Detail"},
    {k:"p", t:"**Newton's law of universal gravitation:** every particle of matter attracts every other particle with a force directly proportional to the product of their masses and inversely proportional to the square of the distance between their centres, **F = Gm₁m₂/r²**, where G = 6.67 × 10⁻¹¹ N m²/kg² is the universal gravitational constant. Two 1 kg masses 1 m apart attract with 6.67 × 10⁻¹¹ N — far too small to feel, which is why only a planet-sized mass produces a noticeable pull. Double the distance and the force falls to a quarter; triple it, to a ninth. Setting F = mg for a body at the Earth's surface gives **g = GM/r²** ≈ 9.8 m/s², so g falls with height, is slightly greater at the poles than at the equator (the Earth bulges and spins), and varies a little with the rocks below — the geologist's gravimeter reads the same variation to find ore. Gravitation supplies the **centripetal force** that holds the Moon in its orbit and the satellite over one spot of the Earth, gives the tides their pull, and makes the planets keep their paths; it is the weakest of the four fundamental forces and yet rules the universe at large because it always attracts and never cancels."},
    {k:"h3", t:"A Method for Every Motion Problem"},
    {k:"num", items:[
      "**Write down the five letters** s, u, v, a, t and fill in every value the question gives, with its unit and its sign",
      "**Convert first** — km/h to m/s, minutes to seconds, centimetres to metres — before substituting",
      "**Choose the equation that omits the one quantity you neither know nor want**",
      "**Substitute and solve**, keeping the units with the numbers all the way through",
      "**Check the answer against common sense**: a walking speed near 1.5 m/s, a car in town near 15 m/s, a fall of 3 s from about 45 m",
      "**State the unit and the direction** where the quantity is a vector"
    ]},
    {k:"h3", t:"Stopping Distance — the Arithmetic That Saves Lives"},
    {k:"p", t:"A car's **stopping distance** is its **thinking distance** plus its **braking distance**. At 20 m/s (72 km/h) with a driver's reaction time of 0.7 s the car travels 20 × 0.7 = **14 m** before the brakes even touch; braking with a deceleration of 5 m/s², v² = u² + 2as gives s = (0 − 400) ÷ (2 × −5) = **40 m**, so the car stops only after **54 m**. Alcohol, tiredness, a phone call and a crowded roadside market all lengthen the thinking distance; worn tyres, wet tarmac and an overloaded vehicle lengthen the braking distance — and because the braking distance grows as the square of the speed, doubling the speed from 20 to 40 m/s makes it 160 m, four times as far. This is the physics behind the speed limit past a school gate."}
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
    {q:"A car travelling at 20 m/s brakes to rest with a deceleration of 5 m/s². Find the braking distance.", steps:[
      "v² = u² + 2as, with v = 0 and a = −5 m/s²",
      "0 = 400 + 2(−5)s, so 10s = 400"
    ], a:"40 m"},
    {q:"A taxi covers 60 km in the first hour and 90 km in the next two hours. Find its average speed for the whole journey in km/h and in m/s.", steps:[
      "Average speed = total distance ÷ total time = 150 km ÷ 3 h",
      "Convert: 50 ÷ 3.6"
    ], a:"50 km/h, which is about 13.9 m/s"},
    {q:"A stone is thrown vertically upward at 20 m/s. Find the time to the highest point and the height reached (g = 10 m/s²).", steps:[
      "At the top v = 0, so t = u ÷ g",
      "h = u² ÷ 2g = 400 ÷ 20"
    ], a:"2 s to the top; greatest height 20 m (4 s for the whole flight)"},
    {q:"A 1200 kg car accelerates at 1.5 m/s² against friction and air resistance totalling 400 N. Find the force the engine must supply.", steps:[
      "Resultant force F = ma = 1200 × 1.5 = 1800 N",
      "Driving force = resultant + resistance = 1800 + 400"
    ], a:"2200 N"},
    {q:"Two bodies attract each other with a force F. The distance between them is doubled. What is the new force?", steps:[
      "F = Gm₁m₂/r², so F is inversely proportional to r²",
      "Doubling r multiplies the force by 1/4"
    ], a:"F ÷ 4"}
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
    {k:"rule"},
    {k:"h3", t:"Work in Detail — and When No Work Is Done"},
    {k:"p", t:"**W = F × s** counts only the force that acts **along** the displacement. No work is done in three common cases: the body does not move (pushing a wall, holding a bucket still — the muscles tire but W = 0 because s = 0); the motion is at right angles to the force (a waiter carrying a tray horizontally does no work against gravity, because the weight is vertical and the motion horizontal); and there is no force (a body gliding in space at constant velocity needs no work to keep moving). Lifting a 20 kg bucket of water through 2 m does W = F × s = mg × s = 200 × 2 = **400 J**; carrying the same bucket 100 m along the level road does **no work against gravity**, though the legs certainly work against friction inside the body. The **joule** is a newton-metre; the same joule measures work, energy and heat, which is the point of the conservation law."},
    {k:"h3", t:"The Forms of Energy and How They Change"},
    {k:"table", head:["Device or event","Energy supplied","Energy delivered","Energy wasted"], rows:[
      ["Mount Coffee hydroelectric plant","Potential energy of the reservoir water","Electrical energy","Heat in the turbine and generator, sound, friction"],
      ["Electric motor (fan, blender)","Electrical energy","Kinetic energy of the blades","Heat in the coil, sound"],
      ["Generator or dynamo","Kinetic energy of the turning shaft","Electrical energy","Heat and friction"],
      ["Lamp (filament)","Electrical energy","Light","Most of it as heat — a fluorescent or LED lamp wastes less"],
      ["Solar panel","Light (radiant) energy","Electrical energy","Heat"],
      ["Battery or cell","Chemical energy","Electrical energy","Heat from internal resistance"],
      ["Firewood and charcoal stove","Chemical energy","Heat and light","Smoke, heat lost up the chimney and to the air"],
      ["Photosynthesis in the leaf","Light energy","Chemical energy in glucose","Heat, reflected and transmitted light"],
      ["Microphone and loudspeaker","Sound → electrical → sound","The signal","Heat and distortion"],
      ["A falling mango","Potential energy","Kinetic energy","Air resistance as heat and sound on impact"]
    ]},
    {k:"h3", t:"Conservation of Energy in Numbers"},
    {k:"p", t:"**The law of conservation of energy:** energy can be transformed from one form to another but can neither be created nor destroyed, so the total energy of an isolated system stays constant. A 2 kg body held 5 m above the ground has PE = mgh = 2 × 10 × 5 = **100 J** and no kinetic energy. Released, it loses height and gains speed; halfway down, at 2.5 m, it holds 50 J of PE and 50 J of KE; just before it strikes, all 100 J is kinetic, so ½mv² = 100 gives v = √(2 × 100 ÷ 2) = **10 m/s** — the same answer the equations of motion give from v² = 2gh. On impact the 100 J becomes heat, sound and the deformation of the ground; nothing disappears. The **pendulum** shows the same exchange between its extremes (all PE) and its lowest point (all KE), losing a little to air resistance each swing, which is why it eventually stops — the energy has gone to the air as heat, not out of the universe. The hydroelectric station is the same calculation on a national scale: water's PE becomes the turbine's KE, then electrical energy, then light and heat in the house, with every step taxed by friction."},
    {k:"h3", t:"Power in Detail"},
    {k:"p", t:"**Power** is the rate of doing work: **P = W ÷ t**, in **watts** (one joule per second); the kilowatt is 1000 W. Since W = F × s, power can also be written **P = F × v** for a body moving at steady speed — the form that decides whether a car can hold its speed up a hill. A pump lifts 500 kg of water through 10 m in 20 s: W = mgh = 50 000 J and P = 50 000 ÷ 20 = **2500 W**, or 2.5 kW. A car cruising at 20 m/s against a total resistance of 500 N needs P = 500 × 20 = **10 000 W**, 10 kW, just to hold that speed. Two boys shift the same load of bricks up the same stairs: both do the same work, but the one who finishes in half the time develops twice the power. The **kilowatt-hour** is energy, not power — a 1 kW appliance running for 1 h uses 1 kWh, the unit LEC sells (see Grade 12)."},
    {k:"h3", t:"The Principle of Moments in Practice"},
    {k:"p", t:"For a body in equilibrium **the sum of the clockwise moments about any point equals the sum of the anticlockwise moments about that same point**, and the resultant force is zero. Choose the pivot at the point where an unknown force acts and that force drops out of the moment equation — the trick that makes beam problems short. A uniform beam 4 m long and of weight 200 N rests on supports at its two ends; a 300 N load sits 1 m from the left support. Taking moments about the left support (so its reaction R₁ does not appear): clockwise moments are the beam's weight at the centre, 200 × 2 = 400 N m, and the load, 300 × 1 = 300 N m; anticlockwise is R₂ × 4. So 4R₂ = 700 and **R₂ = 175 N**; then R₁ + R₂ = 500 gives **R₁ = 325 N**. The same method finds the position of a child on a see-saw, the tension in a crane's cable, the force in a forearm lifting a load, and the reading on each of two balances carrying a plank."},
    {k:"h3", t:"Levers — the Three Classes"},
    {k:"table", head:["Class","Arrangement","Everyday example","Mechanical advantage"], rows:[
      ["First","Fulcrum between load and effort","See-saw, scissors, pliers, claw hammer, crowbar, the balance","Greater than, equal to or less than 1, depending on the arms"],
      ["Second","Load between fulcrum and effort","Wheelbarrow, nutcracker, bottle opener, the door pushed near the handle","Always greater than 1 — a force multiplier"],
      ["Third","Effort between fulcrum and load","Tweezers, sugar tongs, the forearm lifting a load in the hand, a spade used to toss soil","Always less than 1 — it trades force for speed and range of movement"]
    ]},
    {k:"p", t:"Read the class from the middle: whichever of fulcrum, load and effort sits in the middle names the class. The **lever law** is the principle of moments applied to it: effort × effort arm = load × load arm, so **MA = effort arm ÷ load arm**."},
    {k:"h3", t:"Machines and their Velocity Ratios"},
    {k:"table", head:["Machine","Velocity ratio","How the VR is found","A Liberian use"], rows:[
      ["Lever","Effort arm ÷ load arm","Measure the two distances from the fulcrum","Crowbar prising a stump; wheelbarrow"],
      ["Single fixed pulley","1","It only changes the direction of the effort","Hoisting a flag"],
      ["Block and tackle","Number of rope segments supporting the load","Count the ropes leaving the moving block","Lifting engine parts, raising water from a deep well"],
      ["Inclined plane","Length of the slope ÷ height risen","VR = l ÷ h = 1 ÷ sin θ","Ramp loading a truck; a staircase; the road winding up a hill"],
      ["Wheel and axle","Radius of the wheel ÷ radius of the axle","VR = R ÷ r","The well windlass, the steering wheel, a screwdriver turned by hand"],
      ["Screw jack","2πR ÷ pitch of the screw","The effort travels a circle while the load rises one pitch","Lifting a car to change a tyre"],
      ["Wedge","Length ÷ thickness","A moving inclined plane","The cutlass splitting wood; an axe"],
      ["Hydraulic press","Area of the large piston ÷ area of the small piston","VR = A₂ ÷ A₁","Baling scrap, pressing palm oil"]
    ]},
    {k:"p", t:"**Efficiency** ties the three numbers together: efficiency = (MA ÷ VR) × 100 % = (work output ÷ work input) × 100 %, and it is always **below 100 %** because friction between the moving parts and the weight of those parts themselves waste part of the input as heat. A pulley system with VR 6 and efficiency 75 % has MA = 0.75 × 6 = 4.5, so it lifts 900 N with an effort of 900 ÷ 4.5 = **200 N**; the missing 0.5 of the VR is friction. Efficiency is improved by lubricating, by ball bearings, by making the moving parts lighter and stiffer, and by tightening what should not slip. The inclined plane loses efficiency to the friction of the load on the ramp — which is also what stops the load sliding back."},
    {k:"h3", t:"Energy in Liberia — the Chain from River to Lamp"},
    {k:"p", t:"Follow one joule from the St. Paul River to a classroom lamp. Water held in the reservoir at Mount Coffee has **potential energy**; released down the penstock it converts to **kinetic energy**; the moving water turns the **turbine**, so the energy becomes rotational kinetic energy; the turbine spins the **generator**, where the rotating coil in a magnetic field converts it to **electrical energy** (electromagnetic induction, Grade 12); the transformer steps the voltage up for transmission to cut the current and the I²R loss in the wires; at the town another transformer steps it down; in the lamp the electrical energy becomes light and heat. At every arrow some energy escapes as heat, sound and friction, so the overall efficiency is well under half — the reason a modern **LED lamp** (which converts more of its electrical energy into light than a filament bulb) matters as much to the national budget as a new turbine. Firewood and charcoal deliver the chemical energy of sunlight stored by photosynthesis, and a **solar panel** converts radiant energy directly to electricity in a single step; both remind the learner that every form of energy on Earth, except the nuclear and the tidal, began as sunlight."},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Define work, energy and power** with their SI units, and state the principle of conservation of energy",
      "**Substitute into W = F × s, KE = ½mv², PE = mgh, P = W ÷ t** and give the unit with the answer",
      "**Apply the principle of moments**, stating clearly which point the moments were taken about",
      "**Compute MA, VR and efficiency**, and explain why efficiency is never 100 %",
      "**Name the energy transformations** in a device — the marks are for the chain, in order, not for the device's use"
    ]}
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
    {q:"A pump lifts 500 kg of water through 10 m in 20 s. Find the work done and the power developed (g = 10 m/s²).", steps:[
      "W = mgh = 500 × 10 × 10",
      "P = W ÷ t = 50 000 ÷ 20"
    ], a:"50 000 J (50 kJ); 2500 W, i.e. 2.5 kW"},
    {q:"A 2 kg body falls from a height of 5 m. Find its kinetic energy and its speed just before it strikes the ground (g = 10 m/s²).", steps:[
      "PE lost = mgh = 2 × 10 × 5 = 100 J, all of it becoming KE",
      "½mv² = 100, so v² = 2 × 100 ÷ 2"
    ], a:"KE = 100 J; speed 10 m/s"},
    {q:"An inclined plane 5 m long raises a load through 1 m. A load of 600 N is pushed up it with an effort of 150 N. Find the VR, the MA and the efficiency.", steps:[
      "VR = length ÷ height = 5 ÷ 1",
      "MA = load ÷ effort = 600 ÷ 150",
      "Efficiency = (MA ÷ VR) × 100 %"
    ], a:"VR 5, MA 4, efficiency 80 %"},
    {q:"A car of mass 1000 kg moving at 20 m/s is brought to rest in 50 m. Find the average braking force.", steps:[
      "KE = ½mv² = ½ × 1000 × 400 = 200 000 J",
      "Work done by the brakes = F × s, so F = 200 000 ÷ 50"
    ], a:"4000 N"},
    {q:"A machine of velocity ratio 6 and efficiency 75 % lifts a load of 900 N. Find the effort needed.", steps:[
      "MA = (efficiency ÷ 100) × VR = 0.75 × 6 = 4.5",
      "Effort = load ÷ MA = 900 ÷ 4.5"
    ], a:"200 N"}
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
    {k:"rule"},
    {k:"h3", t:"Heat, Temperature and Internal Energy"},
    {k:"p", t:"**Temperature** is the degree of hotness of a body — the level of the average kinetic energy of its molecules — and it decides which way heat flows. **Heat** is energy in transit: it flows of its own accord only from a hotter body to a colder one, and it is measured in **joules** (the old calorie survives in the relation 1 cal = 4.2 J). **Internal energy** is the total kinetic and potential energy of all the molecules of a body, so a bucket of warm water holds more internal energy than a cup of boiling water even though the cup is hotter. Two bodies in **thermal equilibrium** are at the same temperature and exchange no net heat — the principle behind every thermometer reading, and the zeroth law of thermodynamics. Temperature is a scalar; heat and internal energy are forms of energy; none of the three is a substance, which is why the old word **caloric** was abandoned."},
    {k:"h3", t:"The Three Temperature Scales"},
    {k:"table", head:["Scale","Ice point","Steam point","Absolute zero","Conversion"], rows:[
      ["Celsius (°C)","0 °C","100 °C","−273 °C","K = °C + 273"],
      ["Kelvin (K)","273 K","373 K","0 K","°C = K − 273"],
      ["Fahrenheit (°F)","32 °F","212 °F","−460 °F","°F = (9/5)°C + 32; °C = (5/9)(°F − 32)"]
    ]},
    {k:"p", t:"**Conversions worth drilling:** normal body temperature 37 °C = **310 K** = 98.6 °F; a hot day in Monrovia at 32 °C = 305 K = 89.6 °F; 68 °F = (68 − 32) × 5 ÷ 9 = **20 °C**; and −40 is the one reading that is the same on both scales, since (−40 × 9/5) + 32 = −40. The **kelvin** is the SI unit and the scale the gas laws demand: a temperature interval of 1 K equals an interval of 1 °C, but 0 K, **absolute zero**, is the temperature at which the molecules of an ideal gas would have no kinetic energy left and the volume they occupy would extrapolate to zero. Never put a Celsius figure into P₁V₁/T₁ = P₂V₂/T₂ — the commonest single error in the thermal physics paper."},
    {k:"h3", t:"Thermometers — the Property Each One Uses"},
    {k:"table", head:["Thermometer","Thermometric property","Typical range","Where it is used"], rows:[
      ["Mercury-in-glass","Expansion of a liquid","−39 °C to 357 °C","Laboratory work; the standard school thermometer"],
      ["Alcohol-in-glass","Expansion of a liquid","−115 °C to 78 °C","Cold climates; the alcohol is dyed red to be seen"],
      ["Clinical (mercury)","Expansion of a liquid","35 °C to 43 °C","Body temperature; the constriction holds the reading"],
      ["Constant-volume gas","Pressure of a gas at fixed volume","Very wide; the most accurate","Standardising other thermometers"],
      ["Resistance (platinum)","Electrical resistance of a metal","−200 °C to 1200 °C","Industry and precision work"],
      ["Thermocouple","E.m.f. between two joined dissimilar metals","Up to 1600 °C; responds very fast","Furnaces, engines, small points"],
      ["Thermistor","Resistance of a semiconductor (falls as it warms)","−50 °C to 150 °C","Electronic thermometers, cars, fridges"],
      ["Total-radiation pyrometer","Radiation from a hot body","Above 800 °C","Molten metal, no contact needed"],
      ["Bimetallic strip","Different expansions of two bonded metals","Ordinary ranges","Thermostats, fire alarms, dials"]
    ]},
    {k:"p", t:"**Calibrating a liquid-in-glass thermometer** uses the two **fixed points**: the bulb is packed in pure melting ice at normal atmospheric pressure and the level marked **0 °C** (the lower fixed point), then held in the steam above boiling pure water at normal atmospheric pressure and marked **100 °C** (the upper fixed point). The distance between them is the **fundamental interval**, divided into 100 equal parts. An uncalibrated thermometer with lower and upper fixed points at 20 mm and 170 mm reads a temperature of ((level − 20) ÷ 150) × 100 °C — so a level at 95 mm is (75 ÷ 150) × 100 = **50 °C**. A good thermometric substance expands uniformly, is visible, does not wet the glass, conducts heat well, has a low heat capacity so it does not cool what it measures, and stays liquid over the range wanted: mercury satisfies all of these, water none — water expands unevenly, is colourless, wets glass and freezes at 0 °C. The **clinical thermometer's constriction** just above the bulb lets the mercury rise but breaks the thread when it cools, so the reading can be carried to the light; it must be shaken down before use and never sterilised in boiling water, which would burst it."},
    {k:"h3", t:"Thermal Expansion in Detail"},
    {k:"table", head:["Substance","Linear expansivity α per K","What its expansion means in practice"], rows:[
      ["Aluminium","2.4 × 10⁻⁵","Expands most of the common metals; roofing sheets need room to move"],
      ["Brass","1.9 × 10⁻⁵","Bonds with iron in the bimetallic strip, bending as it warms"],
      ["Copper","1.7 × 10⁻⁵","Overhead cables sag more in the hot season"],
      ["Steel and iron","1.1 to 1.2 × 10⁻⁵","Nearly the same as concrete, which is why the two can be used together"],
      ["Concrete","1.2 × 10⁻⁵","Slabs are cast in sections with gaps between them"],
      ["Ordinary glass","9 × 10⁻⁶","Thick glass cracks when heated unevenly; thin Pyrex (3 × 10⁻⁶) does not"]
    ]},
    {k:"p", t:"The expansions follow one another: **linear** Δl = αlΔθ, **area** ΔA = 2αAΔθ (superficial expansivity β = 2α), and **volume** ΔV = 3αVΔθ (cubic expansivity γ = 3α), where Δθ is the temperature change in kelvin or in degrees Celsius — an interval, so either scale works. A 20 m steel rail at 25 °C heated to 55 °C lengthens by 1.2 × 10⁻⁵ × 20 × 30 = **7.2 mm**, and the gap between rails is cut for exactly that. **Applications and their consequences:** expansion gaps in rails, bridges on rollers and in concrete slabs; the **bimetallic strip** of brass and iron that bends toward the iron as it warms and makes or breaks a contact in the thermostat, the fire alarm and the flasher unit; hot rivets and heated iron tyres shrunk onto wheels as they cool; the metal lid loosened under hot water because the metal expands more than the glass; the pendulum of a clock lengthening in the heat and losing time; telephone wires hung slack so the cold season cannot snap them; and the **expansion of a liquid** used in the thermometer itself, the level of petrol in a tank rising on a hot day, and the overflow pipe on a car's cooling system."},
    {k:"h3", t:"The Anomalous Expansion of Water"},
    {k:"p", t:"Water behaves like other liquids from about 4 °C upward, but between **0 °C and 4 °C it contracts as it warms**: its density is greatest at **4 °C**. This **anomalous expansion** is why a lake freezes from the surface down — the coldest water, being less dense, floats on the 4 °C water below, ice forms on top and, since ice and water are poor conductors, the layer insulates what is underneath, so fish and plants survive the cold season instead of being frozen solid. It is also why ice floats, why a bottle of water left in a freezer bursts, why pipes crack in a frost, and why the density of a liquid is always quoted with its temperature. Note too that **impurities and pressure** shift the fixed points: dissolved salt lowers the melting point of ice (which is why salt melts ice on a road) and raises the boiling point of water (which is the principle of the pressure cooker)."},
    {k:"h3", t:"The Gas Laws in Detail"},
    {k:"table", head:["Law","Quantity held constant","Equation","The graph"], rows:[
      ["Boyle's law","Temperature (and mass)","P₁V₁ = P₂V₂; PV = constant","P against V is a curve; P against 1/V is a straight line through the origin"],
      ["Charles' law","Pressure (and mass)","V₁/T₁ = V₂/T₂; V ∝ T","V against T in kelvin is a straight line through the origin; against °C it meets the axis at −273 °C"],
      ["Pressure law (Gay-Lussac)","Volume (and mass)","P₁/T₁ = P₂/T₂; P ∝ T","P against T in kelvin is a straight line through the origin"],
      ["Combined gas equation","Mass only","P₁V₁/T₁ = P₂V₂/T₂","—"],
      ["General gas law","—","PV = nRT, with R = 8.31 J mol⁻¹ K⁻¹","—"]
    ]},
    {k:"p", t:"**Worked through.** A fixed mass of gas occupies 300 cm³ at 2 × 10⁵ Pa and 27 °C. Find its volume at 1 × 10⁵ Pa and 127 °C. Convert first: T₁ = 27 + 273 = 300 K and T₂ = 127 + 273 = 400 K. Then V₂ = P₁V₁T₂ ÷ (P₂T₁) = (2 × 10⁵ × 300 × 400) ÷ (1 × 10⁵ × 300) = **800 cm³** — the halved pressure doubles the volume and the higher temperature enlarges it further. A gas at 90 kPa and 27 °C warmed to 87 °C at constant volume reaches P₂ = 90 × 360 ÷ 300 = **108 kPa**. Compressing 400 cm³ of gas at 100 kPa to 250 cm³ at constant temperature raises the pressure to 100 × 400 ÷ 250 = **160 kPa**. In every case check the direction of the answer against the law before writing it down: squeeze a gas and its pressure must rise; warm a gas in a closed flask and its pressure must rise; warm a gas free to expand and its volume must rise."},
    {k:"h3", t:"Why the Gases Obey — the Kinetic Explanation"},
    {k:"p", t:"The **kinetic theory** says a gas is a swarm of tiny molecules moving at random and colliding elastically with each other and with the walls; the **pressure** is the average force of those collisions per unit area. Halve the volume at constant temperature and the same number of molecules strike each square metre of wall twice as often, so the pressure doubles — **Boyle's law**. Raise the temperature at constant volume and the molecules move faster: they strike harder and more often, so the pressure rises in proportion to the kelvin temperature — the **pressure law**. Raise the temperature at constant pressure and the only way to keep the collision rate per unit area the same is to give the molecules more room, so the volume grows with the kelvin temperature — **Charles' law**. Extrapolate the V–T line back and it meets the temperature axis at **−273 °C**, where the volume would be zero: the physical meaning of absolute zero and the reason the kelvin scale starts there. Real gases liquefy before they get that far, so the laws are exact only for an **ideal gas** — a good approximation at low pressure and high temperature."},
    {k:"h3", t:"Heating and Cooling Curves"},
    {k:"p", t:"Heat a block of ice steadily and plot temperature against time. The curve climbs to **0 °C**, goes **flat** while the ice melts (the heat goes into breaking the bonds rather than raising the temperature — the **specific latent heat of fusion**), climbs again through the liquid, flattens once more at **100 °C** while the water boils (the **specific latent heat of vaporisation**), and rises again as steam. The flat sections are the fingerprints of a pure substance: a pure solid melts at a sharp, constant temperature, while an impure one melts over a range and at a lower temperature, which is how the laboratory tests purity. The cooling curve of molten naphthalene, plotted every minute as it solidifies, shows the same flat section at its freezing point — the standard school experiment, in which the tube is stirred gently and read at eye level, and the flat part is the mark that the substance is pure."},
    {k:"h3", t:"A Method for Every Gas-Law Problem"},
    {k:"num", items:[
      "**List P₁, V₁, T₁ and P₂, V₂, T₂**, putting a dash for what is not given",
      "**Convert every temperature to kelvin** — add 273 to the Celsius figure",
      "**Cancel what stays constant**: constant temperature leaves P₁V₁ = P₂V₂; constant pressure leaves V₁/T₁ = V₂/T₂; constant volume leaves P₁/T₁ = P₂/T₂; otherwise use P₁V₁/T₁ = P₂V₂/T₂",
      "**Make the unknown the subject before substituting**, and keep the units of volume and pressure the same on both sides (cm³ with cm³, kPa with kPa — they cancel)",
      "**Sanity-check the direction**: more pressure, less volume; more heat, more volume or more pressure"
    ]}
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
    {q:"A fixed mass of gas occupies 300 cm³ at 2 × 10⁵ Pa and 27 °C. Find its volume at 1 × 10⁵ Pa and 127 °C.", steps:[
      "Convert to kelvin: T₁ = 300 K, T₂ = 400 K",
      "P₁V₁/T₁ = P₂V₂/T₂, so V₂ = P₁V₁T₂ ÷ (P₂T₁)",
      "V₂ = (2 × 10⁵ × 300 × 400) ÷ (1 × 10⁵ × 300)"
    ], a:"800 cm³"},
    {q:"A gas at 90 kPa and 27 °C is heated to 87 °C at constant volume. Find its new pressure.", steps:[
      "T₁ = 300 K, T₂ = 360 K",
      "P₁/T₁ = P₂/T₂, so P₂ = 90 × 360 ÷ 300"
    ], a:"108 kPa"},
    {q:"A steel rail is 20 m long at 25 °C. Find its increase in length when heated to 55 °C (α = 1.2 × 10⁻⁵ K⁻¹).", steps:[
      "Δθ = 55 − 25 = 30 K",
      "Δl = αlΔθ = 1.2 × 10⁻⁵ × 20 × 30"
    ], a:"7.2 × 10⁻³ m, i.e. 7.2 mm"},
    {q:"Convert 68 °F to degrees Celsius and to kelvin.", steps:[
      "°C = (5/9)(°F − 32) = (5/9)(68 − 32)",
      "K = °C + 273"
    ], a:"20 °C, i.e. 293 K"},
    {q:"An uncalibrated thermometer marks its lower fixed point at 20 mm and its upper fixed point at 170 mm. Find the temperature when the mercury stands at 95 mm.", steps:[
      "Fundamental interval = 170 − 20 = 150 mm",
      "θ = ((95 − 20) ÷ 150) × 100"
    ], a:"50 °C"},
    {q:"A gas occupies 400 cm³ at 100 kPa. Find its pressure when it is compressed to 250 cm³ at constant temperature.", steps:[
      "P₁V₁ = P₂V₂",
      "P₂ = 100 × 400 ÷ 250"
    ], a:"160 kPa"}
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
    {k:"rule"},
    {k:"h3", t:"Charge in Detail — Quantisation and Conservation"},
    {k:"p", t:"Charge comes in packets. The **electron** carries the smallest free charge, e = **1.6 × 10⁻¹⁹ C**, and the proton carries exactly the same quantity positive, so any charge is a whole number of these: **Q = ne**, the principle of **quantisation of charge**. A balloon that gains 3 × 10⁶ electrons carries Q = 3 × 10⁶ × 1.6 × 10⁻¹⁹ = **4.8 × 10⁻¹³ C**, negative; conversely 3.2 × 10⁻⁶ C is 3.2 × 10⁻⁶ ÷ 1.6 × 10⁻¹⁹ = **2 × 10¹³ electrons**. Only the **electrons move** when a body is charged — the protons stay locked in the nuclei — so a positive body is one that has **lost** electrons and a negative body one that has **gained** them. The **law of conservation of charge** says charge is never created or destroyed: rubbing two bodies apart leaves the total unchanged, one gaining exactly what the other loses. Charge is measured with a **coulomb**, and the coulomb is defined through the current: one coulomb is the charge carried past a point by one ampere in one second (Grade 12)."},
    {k:"h3", t:"Materials and their Charges"},
    {k:"table", head:["Class","Examples","What happens to charge","A use"], rows:[
      ["Conductor","Copper, aluminium, iron, carbon (graphite), the human body, damp earth, salt solution","Charge spreads at once; free electrons carry it","Wiring, earthing straps, the lightning conductor"],
      ["Insulator (dielectric)","Glass, polythene, rubber, dry wood, dry air, mica, plastic, ebonite","Charge stays where it is put","Cable sheathing, the handle of a screwdriver, capacitor dielectrics"],
      ["Semiconductor","Silicon, germanium","Conducts between the two, and better when warm or doped","Diodes, transistors, solar cells (Grade 12)"]
    ]},
    {k:"p", t:"Note the practical points: a conductor held in the bare hand cannot be charged by rubbing, because the charge runs through the body to earth — it must be held by an insulating handle. A damp day ruins electrostatic experiments because a film of moisture makes every surface slightly conducting. And an insulator charged at one point stays charged there, which is what makes static cling and the photocopier possible."},
    {k:"h3", t:"The Three Methods of Charging"},
    {k:"num", items:[
      "**Friction (rubbing).** Electrons are scraped from one material to the other by contact. Rubbing **glass with silk** leaves the glass positive (it loses electrons) and the silk negative; rubbing **polythene or ebonite with fur or wool** leaves the rod negative and the fur positive. Both bodies carry equal and opposite charges",
      "**Contact (conduction).** A charged body touches a neutral one and shares its electrons; the neutral body takes the **same sign** of charge as the one that touched it",
      "**Induction.** A charged body is brought **near** but never touches: its presence drives electrons through the conductor, so the near end takes the opposite sign and the far end the same. Earth the far end (or touch it with a finger), remove the earth, then remove the inducing charge, and the conductor is left with the **opposite** sign to the inducer — no charge has been used up from the inducer at all"
    ]},
    {k:"h3", t:"The Gold-Leaf Electroscope"},
    {k:"p", t:"The **electroscope** is the detector: a metal cap and rod inside a glass case, with a thin gold leaf hanging from the lower end. Charge reaching the cap spreads over the rod and leaf, and since both carry the **same** sign they repel, so the leaf diverges. It detects charge (the leaf rises), compares the amount of charge (the greater the divergence, the more charge), and — once charged with a known sign — identifies the sign of an unknown charge (a body of the same sign increases the divergence; the opposite sign reduces it and may collapse the leaf). To charge it by **induction**: bring a negatively charged rod near the cap, so electrons are pushed down into the leaf and the cap becomes positive; earth the cap with a finger, letting those electrons escape; remove the finger, then the rod; the electroscope is left **positively** charged, and the leaf stays up. The same instrument shows **point discharge**: a sharp needle held near a charged cap bleeds the charge away silently, because the field at a point is strong enough to ionise the air — the principle of the lightning conductor."},
    {k:"h3", t:"Coulomb's Law and the Electric Field — the Calculations"},
    {k:"p", t:"**Coulomb's law:** the force between two point charges is directly proportional to the product of the charges and inversely proportional to the square of the distance between them, **F = kq₁q₂/r²**, with k = 9 × 10⁹ N m²/C² (k = 1/4πε₀, where ε₀ = 8.85 × 10⁻¹² C²/N m² is the permittivity of free space). Two charges of 2 µC and 3 µC 0.1 m apart repel or attract with F = 9 × 10⁹ × (2 × 10⁻⁶ × 3 × 10⁻⁶) ÷ 0.1² = 9 × 10⁹ × 6 × 10⁻¹² ÷ 10⁻² = **5.4 N** — a force big enough to feel, from charges far smaller than any that accumulate on a comb. Halve the distance and the force becomes four times; double one charge and the force doubles. An **electric field** is a region in which a charge experiences a force, and its **intensity** is the force per unit positive charge: **E = F/q = kq/r²**, in N/C, which is the same as V/m. At 0.2 m from a 4 µC point charge, E = 9 × 10⁹ × 4 × 10⁻⁶ ÷ 0.04 = **9 × 10⁵ N/C**. Between large parallel plates the field is **uniform**, E = V/d, so 12 V across plates 4 mm apart gives 12 ÷ 0.004 = **3000 V/m**. The **electric potential** at a point is the work done bringing unit positive charge from infinity to it, and the **potential difference** between two points is the work done per coulomb: **V = W/Q**, so moving 5 C through 12 V does W = QV = **60 J**."},
    {k:"h3", t:"Patterns of the Electric Field"},
    {k:"table", head:["Arrangement","The pattern of the lines of force"], rows:[
      ["Single positive charge","Straight lines radiating outward in all directions"],
      ["Single negative charge","Straight lines converging inward from all directions"],
      ["Two unlike charges near each other","Lines leave the positive and curve into the negative; the field is strongest in the gap"],
      ["Two like charges near each other","Lines leave both and push apart, leaving a neutral point between them where the field is zero"],
      ["Two large parallel plates of opposite sign","Evenly spaced parallel lines from one plate to the other — a uniform field, except at the edges where they fringe"],
      ["A charged sphere","The same pattern as a point charge at its centre, with no field inside the metal"],
      ["A sharp point on a charged body","Lines crowd together at the point, so the field there is strongest — point discharge"]
    ]},
    {k:"p", t:"Rules for drawing them: lines start on positive charge and end on negative, they never cross (a crossing would give two directions of force at one point), their closeness shows the strength of the field, and the direction of the line at any point is the direction of the force on a **positive** test charge placed there."},
    {k:"h3", t:"Lightning, Thunder and Safety"},
    {k:"p", t:"Inside a thundercloud the updraughts rub ice crystals and droplets apart, leaving the base of the cloud strongly negative and the top positive. The negative base **induces** a positive charge on the ground below — on trees, roofs, people and palm tops — and when the field exceeds about 3 × 10⁶ V/m the air ionises and a **leader** steps down to meet a streamer from the ground: the flash. A stroke may carry 20 000 A at hundreds of millions of volts for a few millionths of a second, heating the channel to about 30 000 °C; the sudden expansion of that superheated air is the **thunder**. Because light travels at 3 × 10⁸ m/s and sound at about 340 m/s, the seconds between flash and bang divided by three give the distance in kilometres — a gap of 6 s means the stroke was about **2 km** away. The **lightning conductor** is a pointed copper rod at the highest point of the building, bonded by a thick copper tape to a plate buried in damp earth: the point bleeds charge quietly into the air and, if a stroke comes, the thick conductor carries it harmlessly to ground instead of through the roof timbers. In a storm keep away from tall isolated trees, metal fences, water and open ground; do not carry a long metal object; and indoors unplug sensitive equipment, because the surge arrives down the wires."},
    {k:"h3", t:"Capacitors in Detail"},
    {k:"table", head:["Connection","Combined capacitance","Charge and voltage"], rows:[
      ["Parallel","C = C₁ + C₂ + C₃ (they simply add)","The same voltage across each; the charge divides in proportion to the capacitances"],
      ["Series","1/C = 1/C₁ + 1/C₂ + 1/C₃, i.e. C = C₁C₂ ÷ (C₁ + C₂) for two","The same charge on each; the voltage divides, the larger capacitance taking the smaller share"]
    ]},
    {k:"p", t:"A **capacitor** is two conductors separated by an insulator: the **parallel-plate** capacitor (plates of area A, separation d, dielectric between), the **electrolytic** (large capacitance, must be connected the right way round), the **variable** (meshing vanes, the tuning capacitor of a radio), the **paper, mica and ceramic** types. Its **capacitance C = Q/V**, in **farads** (one coulomb per volt); practical capacitors are in microfarads (µF = 10⁻⁶ F), nanofarads and picofarads. Capacitance rises with **larger plate area**, **smaller separation** and a **dielectric of higher permittivity** — which is why inserting glass or polythene between the plates increases C, and why the plates of a variable capacitor are meshed to change the effective area. Two capacitors of 2 µF and 3 µF give **5 µF in parallel** and 6 ÷ 5 = **1.2 µF in series**. A 2 µF capacitor charged to 100 V holds Q = CV = 2 × 10⁻⁴ C and energy **E = ½CV² = ½QV = Q²/2C** = ½ × 2 × 10⁻⁶ × 100² = **0.01 J** — the small but sudden energy that fires a camera flash, smooths the ripple in a phone charger, blocks direct current while passing alternating (Grade 12), stores the charge in a defibrillator, and sets the timing in every electronic circuit. Always discharge a large capacitor through a resistor before touching it: it keeps its charge long after the supply is switched off."},
    {k:"h3", t:"Uses and Dangers of Static Electricity"},
    {k:"table", head:["Application or hazard","How electrostatics is used, or avoided"], rows:[
      ["Photocopier and laser printer","A charged drum holds the image; oppositely charged toner sticks only to the image and is fused to the paper"],
      ["Electrostatic spray painting","The paint droplets are given one charge and the car body the other, so the spray wraps round into the corners and less paint is wasted"],
      ["Chimney precipitators and air cleaners","Smoke particles are charged and pulled onto collecting plates instead of leaving the chimney"],
      ["Separating ores and seeds","Charged particles of different materials are deflected differently by an electric field"],
      ["Fuel tanker and aircraft refuelling","A conducting chain or bonding wire carries the charge from the moving fuel to earth; a spark in the vapour would ignite it"],
      ["Flour mills, cotton mills, sugar silos","Fine dust charged by friction can explode; the plant is earthed, humidified and kept free of dust"],
      ["Electronic components","A charged finger can destroy a transistor, so components are handled by their edges and stored in conducting bags"],
      ["Anaesthetic theatres and hospital oxygen","Sparks ignite gases, so conducting floors and antistatic materials are used"]
    ]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**State the basic law of electrostatics** (like charges repel, unlike attract) and **Coulomb's law** in words before writing F = kq₁q₂/r²",
      "**Explain induction**, usually with a diagram of the electroscope; the marks are for the sequence — bring near, earth, remove earth, remove rod",
      "**Substitute into F = kq₁q₂/r², E = F/q, C = Q/V and W = QV**, converting microcoulombs to coulombs first",
      "**Describe the lightning conductor** and why it is pointed, thick and well earthed",
      "**Give one use and one danger** of static electricity, each with the reason"
    ]}
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
    {q:"How many electrons make up a charge of 3.2 × 10⁻⁶ C? (e = 1.6 × 10⁻¹⁹ C)", steps:[
      "Q = ne, so n = Q ÷ e",
      "n = 3.2 × 10⁻⁶ ÷ 1.6 × 10⁻¹⁹"
    ], a:"2 × 10¹³ electrons"},
    {q:"Two point charges of 2 µC and 3 µC are 0.1 m apart. Find the force between them (k = 9 × 10⁹ N m²/C²).", steps:[
      "F = kq₁q₂/r²",
      "F = 9 × 10⁹ × (2 × 10⁻⁶ × 3 × 10⁻⁶) ÷ 0.01"
    ], a:"5.4 N (attractive if the signs differ, repulsive if they are alike)"},
    {q:"Find the electric field intensity 0.2 m from a point charge of 4 µC.", steps:[
      "E = kq/r²",
      "E = 9 × 10⁹ × 4 × 10⁻⁶ ÷ (0.2)²"
    ], a:"9 × 10⁵ N/C, directed away from the charge"},
    {q:"A 2 µF capacitor is charged to a potential difference of 100 V. Find the charge stored and the energy stored.", steps:[
      "Q = CV = 2 × 10⁻⁶ × 100",
      "E = ½CV² = ½ × 2 × 10⁻⁶ × 10 000"
    ], a:"Q = 2 × 10⁻⁴ C; energy 0.01 J"},
    {q:"Two capacitors of 2 µF and 3 µF are connected (a) in parallel and (b) in series. Find the combined capacitance in each case.", steps:[
      "Parallel: C = C₁ + C₂",
      "Series: C = C₁C₂ ÷ (C₁ + C₂) = 6 ÷ 5"
    ], a:"5 µF in parallel; 1.2 µF in series"},
    {q:"Find the work done in moving 5 C of charge through a potential difference of 12 V.", steps:[
      "W = QV"
    ], a:"60 J"},
    {q:"Parallel plates 4 mm apart have a potential difference of 12 V between them. Find the electric field intensity between them.", steps:[
      "E = V ÷ d",
      "E = 12 ÷ 0.004"
    ], a:"3000 V/m (the same as 3000 N/C)"}
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
    {k:"h3", t:"The Three States Compared"},
    {k:"table", head:["Property","Solid","Liquid","Gas"], rows:[
      ["Arrangement of particles","Packed close in a fixed, regular pattern","Close but irregular, able to slide past one another","Far apart, random, no pattern"],
      ["Motion of particles","Vibrate about fixed positions","Vibrate and move about freely","Move rapidly in straight lines until they collide"],
      ["Forces between particles","Very strong","Strong enough to hold the volume, not the shape","Negligible except during collisions"],
      ["Shape and volume","Fixed shape and fixed volume","Fixed volume, takes the shape of the container","Neither fixed; fills the container"],
      ["Compressibility","Almost incompressible","Almost incompressible","Highly compressible"],
      ["Density","Highest (water and ice are the famous exception)","High","Very low"],
      ["Diffusion","Extremely slow (years for two metals in contact)","Slow (minutes in a beaker of water)","Fast (seconds across a room)"]
    ]},
    {k:"p", t:"A fourth state, **plasma**, appears when a gas is heated or strongly energised until electrons are stripped from the atoms — the ionised gas of a fluorescent tube, a lightning stroke, the sun and every other star. **Atoms** are the smallest particles of an element that can take part in a chemical change; **molecules** are groups of atoms bonded together, of one element (O₂, S₈) or of several (H₂O, C₆H₁₂O₆); **ions** are atoms or groups that have gained or lost electrons and so carry charge. A typical atom is about 10⁻¹⁰ m across and its nucleus about 10⁻¹⁵ m — if the atom were the size of the national stadium, the nucleus would be a grain of sand on the centre spot."},
    {k:"h3", t:"The Kinetic Theory — Assumptions and Evidence"},
    {k:"num", items:[
      "Matter is made of a very large number of **tiny particles** — atoms, molecules or ions",
      "The particles are in **constant random motion**, and their average kinetic energy rises with the temperature",
      "There are **forces of attraction** between the particles, strongest in solids and negligible in gases",
      "In a gas the collisions between particles, and with the walls, are **perfectly elastic** — no kinetic energy is lost overall",
      "The volume of the particles themselves is negligible compared with the volume of the gas"
    ]},
    {k:"table", head:["Evidence","What it proves"], rows:[
      ["Brownian motion — smoke cells or pollen grains jiggling under the microscope","Invisible air or water molecules are in constant motion and bombard the visible particle unevenly"],
      ["Diffusion — the smell of cooking reaching the back of the house, dye spreading in still water","Particles move of their own accord and mix"],
      ["Gas pressure on the walls of a container, rising when heated or squeezed","Particles bombard the walls; more particles, faster particles or a smaller space means more collisions per second"],
      ["Evaporation cooling the surface","The fastest particles escape, leaving the slower ones behind, so the average kinetic energy — the temperature — falls"],
      ["Expansion on heating and the fixed shape of a solid","Particles vibrate with larger amplitude as they gain energy; in a solid the forces hold them in place"]
    ]},
    {k:"h3", t:"Changes of State and their Energy"},
    {k:"table", head:["Change","From and to","Energy"], rows:[
      ["Melting (fusion)","Solid to liquid","Absorbs heat — the specific latent heat of fusion — at constant temperature"],
      ["Freezing (solidification)","Liquid to solid","Releases the same quantity of heat"],
      ["Vaporisation (boiling)","Liquid to gas throughout the bulk, at a fixed boiling point","Absorbs a large quantity — the specific latent heat of vaporisation"],
      ["Evaporation","Liquid to gas at the surface, at any temperature","Absorbs heat from the surroundings, so it cools them"],
      ["Condensation","Gas to liquid","Releases heat — the reason a steam burn is worse than a boiling-water burn"],
      ["Sublimation","Solid straight to gas","Absorbs heat — camphor, naphthalene, iodine, dry ice"],
      ["Deposition","Gas straight to solid","Releases heat — frost forming on a cold night"]
    ]},
    {k:"p", t:"**Evaporation and boiling are not the same process.** Boiling happens throughout the liquid at one fixed temperature (100 °C for pure water at standard pressure), with bubbles of vapour forming in the bulk, and it needs a continuous supply of heat; evaporation happens only at the surface, at **every** temperature, quietly and without bubbles, and it is faster when the liquid is warmer, when the surface is larger, when air moves across it and when the air is dry. Evaporation is what cools the body when it sweats, cools water in a porous clay pot on a hot verandah, dries clothes on the line, makes the wet-bulb thermometer read below the dry-bulb, and carries heat out of the evaporator of a refrigerator and a split-unit air conditioner. The **latent heat** is the energy needed to overcome the forces between particles without raising the temperature — which is why the flat sections of a heating curve are flat, why ice at 0 °C cools a drink better than water at 0 °C (it takes 336 000 J/kg more to melt it), and why steam at 100 °C scalds more severely than water at 100 °C (it gives up 2 260 000 J/kg as it condenses)."},
    {k:"h3", t:"Cohesion, Adhesion, Surface Tension and Capillarity"},
    {k:"p", t:"**Cohesion** is the attraction between molecules of the **same** substance; **adhesion** the attraction between molecules of **different** substances. Water wets glass because its adhesion to glass exceeds its cohesion to itself, so it climbs the wall of a tube and shows a **concave meniscus**; mercury does not wet glass because its cohesion is greater, so it curves **convex** and is depressed in a tube. **Surface tension** is the effect of that cohesion at a free surface: molecules inside the liquid are pulled equally on all sides, but molecules at the surface are pulled only inward and sideways, so the surface behaves like a stretched elastic skin trying to contract to the smallest possible area. It is why a needle or a paper clip laid gently on water floats although steel is denser than water, why pond skaters and mosquitoes' larvae work the surface film, why drops and bubbles are **spherical** (the smallest area for a given volume), why water beads on a waxed car, and why a shaving brush leaves a pointed tip when it is lifted from the water. Surface tension **falls when the temperature rises** and when **soap or detergent** is added — detergents are built to do exactly that, letting water spread into the weave of the cloth and lift the grease; a hot wash therefore cleans better than a cold one. **Capillarity** is the rise or fall of a liquid in a narrow tube or a porous solid, caused by adhesion and surface tension together: the narrower the tube, the higher the rise. It draws water up from the soil into the plant's fine vessels and up the wick of a kerosene lamp, carries ink along blotting paper and up a towel, brings damp up the walls of a house (which is why a **damp-proof course** of slate or plastic is laid in the mortar), and lets a lump of sugar wet through from one corner."},
    {k:"h3", t:"Viscosity and Diffusion"},
    {k:"table", head:["Fluid","Relative viscosity","Effect of heating it"], rows:[
      ["Air and other gases","Very low","Viscosity rises slightly"],
      ["Water","Low","Viscosity falls"],
      ["Kerosene","Low","Viscosity falls"],
      ["Palm oil","High","Viscosity falls sharply — hot palm oil pours, cold palm oil barely moves"],
      ["Engine oil (SAE 40)","Very high","Viscosity falls, which is why a cold engine is harder to turn over"],
      ["Honey and syrup","Very high","Viscosity falls"],
      ["Bitumen and tar","Extremely high","Flows only when hot — which is how a road is laid"]
    ]},
    {k:"p", t:"**Viscosity** is the internal friction of a fluid: the resistance its layers offer to sliding past one another, and so the drag on anything moving through it. Its SI unit is the pascal-second (Pa s) or N s m⁻². It explains why a stone dropped in water speeds up only until the **drag equals its weight** and then falls at a constant **terminal velocity** (the same reasoning as a parachutist in air), why a ball-bearing falls slowly through glycerine, why the engine needs oil of the right grade for the season, and why the blood's viscosity matters to the heart's workload. **Stokes' law** gives the drag on a small sphere moving slowly through a viscous fluid as F = 6πrvη, from which the viscosity of a liquid can be measured by timing a ball-bearing down a tall measuring cylinder. **Diffusion** is the movement of particles from a region of higher concentration to one of lower, until the concentration is even: fast in gases (a scent crossing a room in seconds), slow in liquids (a crystal of potassium manganate(VII) colouring a beaker of still water over minutes), and extremely slow in solids (a plate of lead and a plate of gold pressed together interdiffuse over years). Diffusion is faster at **higher temperature** (the particles move faster), for **lighter particles**, and in a **less dense medium**; it never happens in a vacuum, since there is nothing to diffuse. **Osmosis** is the special case of the diffusion of water through a selectively permeable membrane — the same kinetic theory at work in a living cell."},
    {k:"h3", t:"Elasticity, Hooke's Law and the Load–Extension Graph"},
    {k:"p", t:"**Elasticity** is the property by which a body regains its original shape and size when the deforming force is removed; **plasticity** is the opposite — the body keeps its new shape. **Hooke's law:** within the **elastic limit**, the extension produced is directly proportional to the force producing it, **F = ke**, where k is the **force constant (spring constant)** in N/m — how stiff the spring is. A spring that stretches 2 cm under 4 N has k = 4 ÷ 0.02 = **200 N/m**, and 6 N stretches it 6 ÷ 200 = 0.03 m, so a spring 20 cm long under no load becomes 23 cm. The **energy stored** in a stretched spring is the work done stretching it, the area under the load–extension graph: **E = ½Fe = ½ke² = F²/2k** — 200 N/m stretched 0.05 m stores ½ × 200 × 0.05² = **0.25 J**, released all at once when the catapult fires. Two identical springs side by side (**in parallel**) share the load, so the combination is twice as stiff, k = k₁ + k₂; end to end (**in series**) they share the extension, so the combination is half as stiff, 1/k = 1/k₁ + 1/k₂."},
    {k:"table", head:["Point on the load–extension graph","What is happening"], rows:[
      ["Straight line from the origin","Hooke's law holds; the extension is proportional to the load; the gradient is the force constant k"],
      ["The limit of proportionality","The point where the straight line ends"],
      ["The elastic limit","Beyond it the material will not return to its original length when unloaded"],
      ["The yield point","Extension suddenly increases with little or no increase in load"],
      ["Plastic (permanent) deformation","The material stretches and stays stretched — the wire has been ruined"],
      ["The breaking point","The material snaps"]
    ]},
    {k:"h3", t:"Stress, Strain and Young's Modulus"},
    {k:"p", t:"For a wire or a rod the same law is written in terms that do not depend on the specimen's size. **Stress = force ÷ cross-sectional area = F/A**, in pascals — the internal resisting force per unit area. **Strain = extension ÷ original length = e/l**, a pure number with no unit. **Young's modulus E = stress ÷ strain = (F/A) ÷ (e/l) = Fl/Ae**, also in pascals, and it is a property of the **material**, not of the wire: steel is about 2 × 10¹¹ Pa, copper about 1.2 × 10¹¹ Pa, aluminium about 7 × 10¹⁰ Pa, and rubber far smaller. A wire 2 m long of cross-section 1 × 10⁻⁶ m² carrying 10 N and stretching 1 mm has stress 10 ÷ 10⁻⁶ = **1 × 10⁷ Pa**, strain 0.001 ÷ 2 = **5 × 10⁻⁴**, and E = 1 × 10⁷ ÷ 5 × 10⁻⁴ = **2 × 10¹⁰ Pa**. The laboratory measures E with **Searle's apparatus**: two identical wires hung side by side from the same support, one the test wire with a vernier scale, the other a reference carrying a fixed load to cancel the effects of temperature and of the support yielding; loads are added in equal steps, the extension recorded each time, the loads then removed to prove the wire returned, and the readings plotted so that E = (Fl)/(A × gradient). Precautions that earn marks: measure the diameter with a micrometer at several places and average it, since A depends on the square of the diameter; measure the original length from the fixed end to the vernier; add the load gently and wait for the wire to settle; keep the loads within the elastic limit."},
    {k:"h3", t:"Properties of Matter in Everyday Liberia"},
    {k:"bul", items:[
      "**Springs** — in the mattress, the vehicle suspension, the clutch, the safety valve and the spring balance, all working within their elastic limits",
      "**Elastic bands and the football's bladder** — store energy when stretched and give it back, which is why the ball bounces",
      "**Expansion joints** — in concrete slabs, long roofs and bridges, cut for the thermal expansion of Grade 10 Period IV",
      "**Surface tension** — the water strider on the pond behind the school, the drop of water hanging from the tap, soap making washing easier",
      "**Capillarity** — the kerosene climbing the lamp wick, water rising from the soil into the roots, damp creeping up an unplastered wall",
      "**Viscosity** — palm oil poured warm, engine oil chosen for the season, the ball-bearing falling slowly through glycerine in the laboratory",
      "**Diffusion** — the smell of pepper soup reaching the classroom, the salt dissolving in the pot without stirring, the fumes from a generator spreading through the yard, which is why the generator stays outside",
      "**Density and flotation** — the loaded canoe sitting lower in the water, the timber raft floating down the river, the hydrometer testing a car battery"
    ]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**State the kinetic theory** and use it to explain one phenomenon — usually Brownian motion, evaporation or gas pressure",
      "**Distinguish cohesion from adhesion**, and use them to explain the meniscus and capillarity",
      "**Plot and interpret the load–extension graph**, identifying the elastic limit and reading the force constant from the gradient",
      "**Substitute into F = ke, stress = F/A, strain = e/l and E = stress ÷ strain**, converting millimetres to metres and square millimetres to square metres first",
      "**Compare evaporation with boiling** in a table — the marks are for four differences, not for a paragraph"
    ]}
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
    {q:"A spring is 20 cm long with no load and 25 cm long under a load of 4 N. Find its force constant and its length under 6 N.", steps:[
      "Extension e = 25 − 20 = 5 cm = 0.05 m",
      "k = F ÷ e = 4 ÷ 0.05 = 80 N/m",
      "Extension under 6 N = 6 ÷ 80 = 0.075 m"
    ], a:"k = 80 N/m; length 20 + 7.5 = 27.5 cm"},
    {q:"A spring of force constant 200 N/m is stretched by 5 cm. Find the force needed and the energy stored.", steps:[
      "F = ke = 200 × 0.05",
      "E = ½ke² = ½ × 200 × 0.0025"
    ], a:"10 N; 0.25 J"},
    {q:"Two identical springs, each of force constant 100 N/m, support a load of 20 N (a) side by side in parallel and (b) end to end in series. Find the extension in each case.", steps:[
      "Parallel: k = 100 + 100 = 200 N/m, so e = 20 ÷ 200",
      "Series: 1/k = 1/100 + 1/100, so k = 50 N/m and e = 20 ÷ 50"
    ], a:"0.1 m in parallel; 0.4 m in series"},
    {q:"A wire 4 m long of cross-sectional area 2 × 10⁻⁶ m² carries a load of 20 N and stretches by 0.5 mm. Find the stress, the strain and Young's modulus.", steps:[
      "Stress = F ÷ A = 20 ÷ (2 × 10⁻⁶)",
      "Strain = e ÷ l = 0.0005 ÷ 4",
      "E = stress ÷ strain"
    ], a:"Stress 1 × 10⁷ Pa; strain 1.25 × 10⁻⁴; E = 8 × 10¹⁰ Pa"},
    {q:"A body of mass 5 g falls through a liquid and reaches a terminal velocity of 0.2 m/s. State the resultant force on it at that speed and explain why.", steps:[
      "At terminal velocity the acceleration is zero",
      "So the resultant force is zero: weight = upthrust + viscous drag"
    ], a:"Zero newtons — the forces are balanced, so the body moves on at a steady 0.2 m/s"}
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
    {k:"rule"},
    {k:"h3", t:"Vectors in Two Dimensions — Adding and Resolving"},
    {k:"p", t:"Two displacements at right angles add by Pythagoras: walking 3 km east and then 4 km north puts the walker **5 km** from the start, in a direction tan⁻¹(4/3) = **53° north of east**, even though 7 km of ground was covered. For any angle use the **cosine law**, R = √(F₁² + F₂² + 2F₁F₂ cos θ), or draw the vectors **head-to-tail** to a stated scale and measure the closing side. **Resolving** works the other way: a vector of size F at an angle θ to a chosen direction is replaced by **F cos θ along that direction** and **F sin θ across it**, and the two components act independently — the reason the river problem below splits into two simple pieces. A boat heads straight across a 60 m river at 3 m/s while the current runs at 4 m/s: it still takes 60 ÷ 3 = **20 s** to cross (the current cannot help or hinder a motion at right angles to it), it drifts 4 × 20 = **80 m** downstream, and its resultant velocity over the ground is √(3² + 4²) = **5 m/s** at 53° downstream of the line it is pointing. To land opposite the starting point the boat must aim upstream at an angle whose sine is 4/5."},
    {k:"h3", t:"Projectile Motion in Detail"},
    {k:"table", head:["Quantity","Body thrown horizontally from a height h","Body projected at an angle θ to the horizontal"], rows:[
      ["Horizontal motion","Constant velocity u; distance = ut","Constant velocity u cos θ"],
      ["Vertical motion","Free fall from rest; s = ½gt²","Thrown upward at u sin θ, decelerating at g"],
      ["Time of flight","t = √(2h ÷ g)","T = 2u sin θ ÷ g"],
      ["Greatest height","h (it starts at the top)","H = u² sin²θ ÷ 2g"],
      ["Range","R = u√(2h ÷ g)","R = u² sin 2θ ÷ g"],
      ["Path","Half a parabola","A full parabola, symmetric about the highest point"]
    ]},
    {k:"p", t:"The whole of projectile motion rests on one idea: **the horizontal and vertical motions are independent**. Gravity acts only vertically, so the horizontal velocity never changes (air resistance neglected) while the vertical velocity changes at g. A ball rolling off a 1.25 m table at 4 m/s takes t = √(2 × 1.25 ÷ 10) = **0.5 s** to fall, lands **2 m** from the table's foot, and strikes with a vertical velocity of gt = 5 m/s combined with its 4 m/s horizontal, giving a resultant of √(16 + 25) = **6.4 m/s** at 51° below the horizontal. Kicked at 20 m/s and 30° to the horizontal, a football is in the air T = 2 × 20 × 0.5 ÷ 10 = **2 s**, rises H = (20 × 0.5)² ÷ 20 = **5 m**, and lands R = 400 × sin 60° ÷ 10 = **34.6 m** away. The range is greatest at **45°**, and two angles that add to 90° (30° and 60°) give the **same range** — the high, hanging kick and the low, fast one travel as far. The same mathematics serves the long jumper, the shot putter, the footballer's lofted pass, the water from a hose, the arrow, the mortar bomb and the satellite's first stage."},
    {k:"h3", t:"Circular Motion in Detail"},
    {k:"table", head:["Quantity","Formula","Unit"], rows:[
      ["Angular displacement θ","arc ÷ radius","radian (2π rad = 360°)"],
      ["Angular velocity ω","θ ÷ t = 2π ÷ T = 2πf","rad/s"],
      ["Period T","time for one complete revolution","s"],
      ["Frequency f","revolutions per second = 1 ÷ T","hertz (Hz)"],
      ["Linear velocity v","rω = 2πr ÷ T","m/s"],
      ["Centripetal acceleration","v² ÷ r = ω²r","m/s²"],
      ["Centripetal force","mv² ÷ r = mω²r","N"]
    ]},
    {k:"p", t:"A body moving in a circle at constant **speed** is nevertheless **accelerating**, because its direction changes at every instant and velocity is a vector. The acceleration points to the centre, so the force that causes it must point to the centre too: the **centripetal force** F = mv²/r. It is not a new kind of force — it is whatever force happens to be available, and naming it is the answer to half the questions: **tension** in the string whirling a stone, **friction** between tyre and road for a car on a level bend, **gravitational attraction** holding the Moon and the satellite, the **normal reaction** of the wall on the clothes spinning in a washing drum (the water, feeling no such force, escapes through the holes), the **horizontal component of the reaction** on a banked track, and the **electrostatic force** on an electron round a nucleus. A 1000 kg car taking a 50 m bend at 15 m/s needs F = 1000 × 225 ÷ 50 = **4500 N** of friction; with a weight of 10 000 N that demands a coefficient of friction of at least 4500 ÷ 10 000 = **0.45**, which is why the same bend in the rain — where μ falls to about 0.3 — throws the car off. If the centripetal force suddenly fails, the body does not fly outward: it leaves along the **tangent**, at the point where the force stopped, which is where the stone goes when the string breaks and where the mud leaves the tyre. The so-called **centrifugal force** is not a force acting on the body but the reaction the body exerts, or the inertia that makes the passenger feel pressed against the door. **Banking** a bend tilts the reaction so that part of it points to the centre, allowing higher speeds without relying on friction."},
    {k:"h3", t:"Rotational Motion"},
    {k:"p", t:"In **rotational (rotary) motion** every point of a rigid body moves in a circle about the same fixed **axis**: the ceiling fan, the wheel of the taxi, the grinding stone, the turbine at Mount Coffee, the spinning Earth. All points share the same **angular velocity ω** and the same period, but their **linear** speeds differ, since v = rω — the rim of the wheel moves faster than the hub, which is why the outer edge of a grinding stone throws sparks further and why a long-handled spanner's end travels further than its head. Rotation about an axis through the body (the spinning top) is distinguished from **revolution** along a path outside it (the Earth round the sun, which is also nearly circular motion with gravity as the centripetal force). A body's resistance to a change in its rotation is its **moment of inertia**, which grows when the mass is spread further from the axis — the reason the diver tucks to spin faster and opens to slow down (Grade 11 Period III, angular momentum)."},
    {k:"h3", t:"Simple Harmonic Motion in Detail"},
    {k:"p", t:"**Simple harmonic motion (SHM)** is oscillatory motion in which the acceleration is directly proportional to the displacement from a fixed point and is always directed toward that point, a ∝ −x. The examples are the **simple pendulum** swinging through small angles, the **mass on a spring**, the balance wheel of a watch, a tuning fork's prong, a log bobbing on the water and the piston of an engine approximately. The **amplitude** is the greatest displacement, the **period T** the time for one complete to-and-fro, the **frequency f = 1/T**, and the **equilibrium position** the point of zero displacement. Energy swaps between the two extremes and the centre: at the extremes the body is momentarily at rest and all the energy is potential, at the centre it moves fastest and all the energy is kinetic, and the total stays constant while friction is neglected. For a pendulum **T = 2π√(l/g)** — independent of the mass of the bob and, for small swings, of the amplitude; a 1 m pendulum takes T = 2π√(1/10) ≈ **2.0 s**, and a 0.25 m one about **1.0 s**. For a mass-spring system **T = 2π√(m/k)**, so 0.2 kg on a 50 N/m spring oscillates with T = 2π√(0.004) ≈ **0.4 s**. **Measuring g with the pendulum:** swing it through a small angle (less than about 10°, or the formula fails), time 20 oscillations and divide by 20 to beat reaction time, repeat for five different lengths, and plot **T² against l** — the graph is a straight line through the origin with gradient 4π²/g, so g = 4π² ÷ gradient. Precautions that earn marks: a small dense bob, a light inextensible thread, a rigid support, no draughts, counting from the extreme (where the bob is momentarily still and easiest to see), and measuring the length from the point of suspension to the centre of the bob."},
    {k:"h3", t:"Forced Vibration, Resonance and Damping"},
    {k:"p", t:"Every body has a **natural frequency** at which it vibrates freely. Drive it at that frequency and the amplitude grows large — **resonance**. A swing pushed once per swing climbs higher with the smallest effort; a tuning fork makes its neighbour of the same frequency sound; a wine glass can be shattered by a singer holding exactly its note; a bridge can be set swaying dangerously by soldiers marching in step, which is why troops **break step** on a bridge, and by the wind, which is one reason a suspension bridge is stiffened and damped. The radio's tuning circuit is resonance in electricity: it responds strongly to one station's frequency and weakly to the rest (Grade 12). **Damping** is the deliberate removal of energy — the shock absorber of the car, the door closer, the pendulum clock's escapement — and a damped oscillator's amplitude dies away gradually unless energy is fed in to replace it, which is exactly what a forced vibration does."},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Distinguish scalars from vectors** and add two vectors by scale drawing, stating the scale used",
      "**Solve projectile problems** by treating the horizontal and vertical motions separately and saying so",
      "**State that the centripetal force is not a new force** and name the force that supplies it in the situation given",
      "**Define SHM**, give two examples, and use T = 2π√(l/g) or T = 2π√(m/k)",
      "**Plot T² against l** and obtain g from the gradient — the marks are for the axes labelled with units, the points, the best line and the working"
    ]}
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
    {q:"A simple pendulum 0.25 m long swings through a small angle. Find its period and its frequency (g = 10 m/s², π² ≈ 10).", steps:[
      "T = 2π√(l ÷ g) = 2π√(0.25 ÷ 10) = 2π × 0.158"
    ], a:"T ≈ 1.0 s, so f = 1 ÷ T ≈ 1 Hz"},
    {q:"A 0.2 kg mass hangs from a spring of force constant 50 N/m. Find the period of oscillation.", steps:[
      "T = 2π√(m ÷ k) = 2π√(0.2 ÷ 50) = 2π√0.004"
    ], a:"About 0.4 s"},
    {q:"A 1000 kg car rounds a bend of radius 50 m at 15 m/s. Find the centripetal force and the least coefficient of friction that will hold it on the road (g = 10 m/s²).", steps:[
      "F = mv² ÷ r = 1000 × 225 ÷ 50",
      "Friction supplies it, so μ = F ÷ mg = 4500 ÷ 10 000"
    ], a:"4500 N; μ = 0.45"},
    {q:"A stone of mass 0.2 kg tied to a 0.5 m string makes 4 revolutions each second. Find its angular velocity, linear speed, centripetal acceleration and the tension in the string.", steps:[
      "ω = 2πf = 2π × 4",
      "v = rω = 0.5 × 25.1",
      "a = v² ÷ r = 12.6² ÷ 0.5",
      "T = ma = 0.2 × 316"
    ], a:"ω ≈ 25.1 rad/s; v ≈ 12.6 m/s; a ≈ 316 m/s²; T ≈ 63 N"},
    {q:"A football is kicked at 20 m/s at 30° to the horizontal. Find the time of flight, the greatest height and the range (g = 10 m/s²).", steps:[
      "T = 2u sin θ ÷ g = 2 × 20 × 0.5 ÷ 10",
      "H = u² sin²θ ÷ 2g = 400 × 0.25 ÷ 20",
      "R = u² sin 2θ ÷ g = 400 × sin 60° ÷ 10"
    ], a:"2 s; 5 m; 34.6 m"},
    {q:"A boat heads straight across a 60 m wide river at 3 m/s while the current flows at 4 m/s. Find the resultant velocity, the time to cross and the drift downstream.", steps:[
      "Resultant = √(3² + 4²), at tan⁻¹(4 ÷ 3) to the line across",
      "Crossing time = width ÷ speed across = 60 ÷ 3",
      "Drift = current × crossing time = 4 × 20"
    ], a:"5 m/s at 53° downstream; 20 s; 80 m"}
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
    {k:"rule"},
    {k:"h3", t:"Adding Forces — Graphically and Analytically"},
    {k:"table", head:["Angle θ between the two forces","Resultant R","Note"], rows:[
      ["0° (same direction)","F₁ + F₂","The greatest possible resultant"],
      ["90°","√(F₁² + F₂²)","Pythagoras; the direction is tan⁻¹(F₂ ÷ F₁) from F₁"],
      ["120° with F₁ = F₂","equal to each force","A useful special case"],
      ["180° (opposite)","F₁ − F₂","The least possible resultant, along the larger force"],
      ["Any other angle","√(F₁² + F₂² + 2F₁F₂ cos θ)","The cosine law"]
    ]},
    {k:"p", t:"**Two ways to add.** Graphically, draw the two vectors **head-to-tail** to a stated scale (say 1 cm to 2 N) with a protractor for the angle, then join the start to the end and measure that closing side — its length gives the size and its angle the direction. Analytically, use the **cosine law** R = √(F₁² + F₂² + 2F₁F₂ cos θ) and the **sine law** to fix the direction. Three forces of 6 N and 8 N at 90° give √(36 + 64) = **10 N** at 53° to the 6 N force; at 60° the same two give √(36 + 64 + 2 × 48 × 0.5) = √148 = **12.2 N**; two equal forces of 10 N at 120° give **10 N**, since 2 × 100 × cos 120° = −100 cancels one of the squares. The **resultant** is the single force that has the same effect as all the forces together; the **equilibrant** is the single force that balances them — equal in size to the resultant, opposite in direction. Say which one the question wants: many marks are lost by giving the resultant when the equilibrant was asked for."},
    {k:"h3", t:"Resolution of Forces in Detail"},
    {k:"p", t:"Any force F at an angle θ to a chosen direction is replaced by two perpendicular components, **F cos θ along** the direction and **F sin θ across** it, and the components act independently — they can be handled by ordinary arithmetic and recombined at the end. A pull of 10 N at 60° above the horizontal has components 10 cos 60° = **5 N** horizontally and 10 sin 60° = **8.66 N** vertically. Pulling a 30 kg crate along the floor with 100 N at 30° above the horizontal does two things at once: 100 cos 30° = **86.6 N** moves it forward, while 100 sin 30° = **50 N** lifts it, reducing the normal reaction from 300 N to **250 N** and so reducing the friction — which is why it is easier to pull a load than to push it at the same angle."},
    {k:"table", head:["On a slope inclined at θ","Expression","Direction"], rows:[
      ["Component of the weight down the slope","mg sin θ","Along the slope, downhill"],
      ["Component of the weight into the slope","mg cos θ","Perpendicular to the slope"],
      ["Normal reaction (smooth slope, no other force)","R = mg cos θ","Perpendicular, out of the slope"],
      ["Friction (rough slope)","F = μR = μmg cos θ","Along the slope, uphill"],
      ["Resultant force down a rough slope","mg sin θ − μmg cos θ","Along the slope"],
      ["Acceleration down a rough slope","a = g(sin θ − μ cos θ)","Along the slope"]
    ]},
    {k:"p", t:"On a **smooth** (frictionless) slope a body slides down with a = g sin θ, so a 10 kg body on a 30° slope accelerates at 10 × 0.5 = **5 m/s²** whatever the mass — the mass cancels, as it does in free fall. As θ grows, sin θ grows and the slope gets steeper and faster; at θ = 90° the body is simply falling with a = g. On a **rough** slope friction opposes the motion, and the body stays put as long as mg sin θ ≤ μ mg cos θ, that is as long as tan θ ≤ μ — the angle at which it just begins to slide is the **angle of friction**, and measuring it is the simplest way to find μ."},
    {k:"h3", t:"Equilibrium — Two Conditions and the Triangle of Forces"},
    {k:"p", t:"A body is in **equilibrium** when (1) the vector sum of all the forces on it is zero — no resultant force, so no acceleration — and (2) the sum of the clockwise moments about any point equals the sum of the anticlockwise moments about that point — no resultant turning effect. The first condition alone leaves a couple free to spin the body; both together give complete equilibrium, which may be **static** (at rest) or **dynamic** (moving with constant velocity). For **three coplanar forces in equilibrium** acting through one point, the vectors drawn head-to-tail form a **closed triangle** — the triangle of forces; if the triangle fails to close, the gap is the resultant. **Lami's theorem** puts it in arithmetic: each force is proportional to the sine of the angle between the other two, F₁/sin α = F₂/sin β = F₃/sin γ. A picture frame of weight 20 N hung from two strings each making 30° with the horizontal has a tension T in each string given by the vertical balance 2T sin 30° = 20, so **T = 20 N** — each string carries the whole weight, which is why a picture cord strained too flat snaps."},
    {k:"h3", t:"Parallel Forces and Beam Problems"},
    {k:"p", t:"**Like parallel forces** act the same way (two men carrying a plank); **unlike parallel forces** act opposite ways and, if equal, form a **couple** whose moment is one force times the distance between them. The method for every beam question is the same: take moments about the point where an **unknown** force acts, so that unknown drops out of the equation; solve for the second unknown; then resolve forces vertically to check. A uniform plank 5 m long weighing 100 N rests on supports at its ends and carries a 400 N load 2 m from the left support. Moments about the left support: clockwise, the plank's own weight at its centre 100 × 2.5 = 250 N m plus the load 400 × 2 = 800 N m; anticlockwise, R₂ × 5. So 5R₂ = 1050 and **R₂ = 210 N**; resolving vertically, R₁ + R₂ = 500 gives **R₁ = 290 N**. The same four lines solve the see-saw, the crane's jib, the ladder against a wall, the forearm lifting a load (the biceps taking the moment about the elbow) and the two spring balances carrying a loaded metre rule — the standard laboratory check on the principle of moments. Remember that a **uniform** body's own weight acts at its centre, halfway along."},
    {k:"h3", t:"Centre of Gravity, Centre of Mass and Stability"},
    {k:"p", t:"The **centre of gravity** is the point through which the whole weight of a body appears to act, wherever the body is turned; the **centre of mass** is the point at which the whole mass may be taken to be concentrated. In a uniform gravitational field the two coincide. For a regular uniform body the centre is its geometric centre — the middle of the metre rule, the centre of the disc, the crossing of the diagonals; for an irregular lamina, suspend it in turn from two or three points, hang a plumb line from the same pin each time, and the lines cross at the centre of gravity. A body is in **stable equilibrium** when a small tilt raises its centre of gravity, so the weight turns it back (a cone on its base, a chair on four legs, a ship with a low load); **unstable** when a small tilt lowers the centre of gravity, so the weight turns it further (a cone on its apex, a pencil on its point, a bus leaning past its wheels); **neutral** when a tilt neither raises nor lowers it (a ball, a wheel on its axle, a roller). A body **topples** when the vertical line through its centre of gravity falls outside its base. Stability therefore increases by **lowering the centre of gravity** and **widening the base** — the racing car sits low with wide tyres, the crane carries a heavy counterweight, the bus is not loaded on its roof, the canoe keeps its load low, the tripod spreads its legs, the wrestler crouches with his feet apart, the yacht carries a lead keel, and the tumbler toy always rights itself because its weight sits below its rounded base."},
    {k:"h3", t:"Friction in Detail"},
    {k:"table", head:["Type of friction","When it acts","Size"], rows:[
      ["Static friction","Between surfaces at rest relative to each other","Self-adjusting: it matches the applied force up to a maximum"],
      ["Limiting friction","At the instant motion is about to start","The maximum static friction, F = μₛR"],
      ["Kinetic (dynamic or sliding) friction","Between surfaces sliding over each other","Slightly less than the limiting value, F = μₖR, and roughly independent of speed"],
      ["Rolling friction","When a body rolls on a surface","Much less than sliding friction — which is why wheels and ball bearings exist"],
      ["Fluid friction (drag or viscosity)","When a body moves through a liquid or gas","Rises sharply with speed"]
    ]},
    {k:"p", t:"**Friction** is the force that opposes the relative motion of two surfaces in contact. Its **laws**: it acts along the surfaces, opposite to the motion or intended motion; it depends on the **nature of the two surfaces** (rough or smooth, dry or wet); it is **directly proportional to the normal reaction**, F = μR, where **μ** is the coefficient of friction and has no unit; it is **independent of the apparent area of contact**; and the limiting value exceeds the kinetic value. A block of weight 20 N that needs 6 N to start it moving has μₛ = 6 ÷ 20 = **0.3**, and if 4 N then keeps it sliding, μₖ = 4 ÷ 20 = **0.2**. Friction does not depend on the area, so a brick lying flat and the same brick on its end need the same force to start — a result worth demonstrating, because it surprises every class."},
    {k:"table", head:["Friction is useful for","Friction is a nuisance because","Reduce it by","Increase it by"], rows:[
      ["Walking, running and gripping (without it the foot slips back)","It wastes energy as heat, so no machine is 100 % efficient","Lubricating with oil or grease","Treads on tyres and shoes"],
      ["Braking a bicycle, taxi or lift","It wears surfaces away — bearings, brake pads, engine cylinders, the soles of shoes","Ball and roller bearings","Chains on wheels in mud or on a slippery slope"],
      ["Holding a nail in wood, a knot tied, a bolt tightened","It makes moving heavy loads hard work","Polishing and smoothing the surfaces","Spikes on football boots"],
      ["The belt driving a machine, the clutch plate, the brake drum","It limits the speed and the range of a vehicle","Streamlining to cut air drag","Sand or grit spread on a slippery road"],
      ["Writing with a pencil, striking a match, lighting with flint and steel","It heats and can seize a machine","An air cushion or a magnetic levitation","Rosin on a bow, rubber on a palm-oil press plate"]
    ]},
    {k:"h3", t:"Friction in Machines and in the Body"},
    {k:"p", t:"In every machine friction is the tax on efficiency: the input work must pay for the useful output **and** for the heat the friction generates, which is why efficiency = MA ÷ VR is always below 100 % and why the inclined plane, the pulley and the screw jack all lose more than the lever. The remedies are the lubricant film that keeps surfaces apart, the ball bearing that turns sliding into rolling, the streamlined shape that cuts fluid friction, and the choice of materials — steel on bronze, nylon on steel, PTFE on anything. Inside the body the same principle applies: the ends of bones in a joint are coated with smooth **cartilage** and bathed in **synovial fluid**, the natural lubricant, so the hip and knee work with very low friction for a lifetime; when the cartilage wears, arthritis raises the friction and the pain. A bowler polishes the ball, a sprinter uses blocks to raise the friction at the start, and the goalkeeper's gloves are stippled rubber for the same reason the tyre has a tread."},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Distinguish the resultant from the equilibrant** and say which the question wants",
      "**Draw a scale diagram**, stating the scale, or use the cosine law — and give the direction as well as the size",
      "**Resolve a weight on a slope** into mg sin θ and mg cos θ before writing any equation",
      "**State the two conditions for equilibrium**, then take moments about a point where an unknown force acts",
      "**Define the coefficient of friction** and use μ = F ÷ R, remembering that R is the normal reaction, not always the weight",
      "**Give two advantages and two disadvantages of friction**, each with the reason, and two ways of reducing it"
    ]}
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
    {q:"Two forces of 6 N and 8 N act at a point at 60° to each other. Find the magnitude of the resultant.", steps:[
      "R² = F₁² + F₂² + 2F₁F₂ cos θ",
      "R² = 36 + 64 + 2 × 48 × 0.5 = 148"
    ], a:"About 12.2 N"},
    {q:"A crate of mass 30 kg is pulled with a force of 100 N at 30° above the horizontal. Find the horizontal component of the pull and the normal reaction of the floor (g = 10 m/s²).", steps:[
      "Horizontal = 100 cos 30°",
      "Vertical lift = 100 sin 30°",
      "R = mg − vertical lift = 300 − 50"
    ], a:"86.6 N horizontally; R = 250 N"},
    {q:"A block of weight 20 N needs a horizontal force of 6 N to start it moving and 4 N to keep it sliding. Find the coefficients of static and kinetic friction.", steps:[
      "μ = F ÷ R, with R = 20 N",
      "Static: 6 ÷ 20; kinetic: 4 ÷ 20"
    ], a:"μₛ = 0.3; μₖ = 0.2"},
    {q:"A uniform plank 5 m long weighing 100 N rests on supports at its two ends. A load of 400 N is placed 2 m from the left end. Find the reaction at each support.", steps:[
      "Moments about the left support: R₂ × 5 = 100 × 2.5 + 400 × 2 = 1050",
      "R₂ = 210 N; then R₁ = (100 + 400) − R₂"
    ], a:"R₁ = 290 N at the left, R₂ = 210 N at the right"},
    {q:"A body of mass 10 kg slides down a smooth slope inclined at 30° to the horizontal. Find its acceleration (g = 10 m/s²).", steps:[
      "Downslope force = mg sin 30° = 100 × 0.5 = 50 N",
      "a = F ÷ m = 50 ÷ 10"
    ], a:"5 m/s² down the slope"},
    {q:"A picture frame of weight 20 N hangs from two strings, each making 30° with the horizontal. Find the tension in each string.", steps:[
      "The vertical components support the weight: 2T sin 30° = 20",
      "T = 20 ÷ (2 × 0.5)"
    ], a:"20 N in each string"},
    {q:"Three coplanar forces of 5 N, 12 N and 13 N act at a point and balance. What can be concluded about the angle between the 5 N and 12 N forces?", steps:[
      "For equilibrium the three forces form a closed triangle",
      "5² + 12² = 25 + 144 = 169 = 13², so the triangle is right-angled"
    ], a:"The 5 N and 12 N forces are at 90° to each other, and the 13 N force is their equilibrant"}
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
    {k:"rule"},
    {k:"h3", t:"Momentum in Detail"},
    {k:"p", t:"**Linear momentum** is the quantity of motion a body carries: **p = mv**, a vector pointing along the velocity, measured in **kg m/s**, which is identical with the newton-second. An 800 kg taxi at 15 m/s carries 12 000 kg m/s; a 20 g bullet at 400 m/s carries only 8 kg m/s — which is why the taxi takes a long distance to stop and the bullet does not push you over, however dangerous it is. Momentum matters because it is **conserved**: in the absence of an external force the total momentum of a system stays the same, however the bodies inside it collide, explode or separate. Newton's second law is really a statement about momentum: the resultant force equals the **rate of change of momentum**, F = (mv − mu) ÷ t, which reduces to F = ma when the mass is constant and remains true when it is not — the rocket losing mass as it burns fuel, the conveyor belt picking up gravel. Two consequences: a large momentum takes a large force or a long time to remove (the truck's brakes), and a body with no resultant force on it keeps its momentum, which is the first law again."},
    {k:"h3", t:"Impulse and Impulsive Forces"},
    {k:"p", t:"**Impulse = force × time = change of momentum**, Ft = mv − mu, measured in newton-seconds (the same unit as momentum). On a force–time graph the **area under the curve is the impulse**. A force acting for a very short time but producing a large change of momentum is an **impulsive force**: the bat on the ball, the hammer on the nail, the floor on the falling glass, the ground on the landing athlete. A 0.5 kg football kicked from rest to 20 m/s in 0.05 s receives an impulse of 0.5 × 20 = **10 N s**, so the average force was 10 ÷ 0.05 = **200 N**. A 0.45 kg ball striking a wall at 10 m/s and rebounding at 8 m/s changes its momentum by 0.45 × (8 − (−10)) = **8.1 kg m/s** — the signs matter, and forgetting the rebound direction is the classic error — and if the contact lasts 0.02 s the average force on it is **405 N**. From Ft = Δp follows the safety principle of a lifetime: for a given change of momentum, **lengthening the time reduces the force**. The seat belt stretches, the airbag unfolds, the car's front crumples, the athlete lands on a mat, the cricketer draws his hands back, the parachutist bends his knees, the boxer's glove is padded, the egg carton is moulded, the long gun barrel accelerates the shot gently — each buys time and so buys a smaller force. The opposite is used deliberately when a large force is wanted in a short time: the karate chop, the hammer blow, the pile driver."},
    {k:"table", head:["Situation","What is done to the time of contact","The effect on the force"], rows:[
      ["Catching a cricket ball with the hands drawing back","Lengthened","The force on the hands is reduced"],
      ["Landing with bent knees, or on a sand pit or mat","Lengthened","The force on the legs and spine is reduced"],
      ["A car's crumple zone, seat belt and airbag","Lengthened","The force on the passengers is reduced — the reason they survive"],
      ["An egg dropped on concrete","Very short","A very large force breaks it; on a cushion the same fall is survived"],
      ["A hammer striking a nail","Very short","A very large force drives the nail in"],
      ["A golfer following through","Lengthened while the club is in contact","The impulse, and so the ball's final momentum, is increased"],
      ["A long-barrelled gun","Lengthened while the gas pushes","The bullet leaves with a greater velocity"]
    ]},
    {k:"h3", t:"Collisions Compared"},
    {k:"table", head:["Type of collision","Momentum","Kinetic energy","What the bodies do","Example"], rows:[
      ["Elastic","Conserved","Conserved","Separate again with the same relative speed","Molecules of a gas, billiard balls, hardened steel spheres, a superball approximately"],
      ["Inelastic","Conserved","Partly lost as heat, sound and deformation","Separate, but more slowly than they met","Most road collisions, a ball dropped on sand"],
      ["Perfectly inelastic","Conserved","The greatest loss of kinetic energy","Stick together and move on as one body","A bullet embedded in a block, two trucks coupling, a goalkeeper catching the ball"],
      ["Explosion (or recoil)","Conserved — total zero before","Kinetic energy appears, from chemical or elastic energy","Fly apart in opposite directions","A gun firing, a rocket separating its stages, a firework bursting, two skaters pushing apart"]
    ]},
    {k:"p", t:"Note what never changes and what does: **momentum is conserved in every collision** because the forces the bodies exert on each other are an action-reaction pair acting for the same time, so the impulses are equal and opposite; **kinetic energy is conserved only in an elastic collision**. In an inelastic collision the missing kinetic energy has become heat, sound and the work of permanent deformation — the crumpled bonnet is energy spent. That is precisely why the crumple exists: the car absorbs the energy instead of the passenger."},
    {k:"h3", t:"A Method for Every Collision Problem"},
    {k:"num", items:[
      "**Choose one direction as positive** and write every velocity with its sign — a body moving the other way carries a negative velocity",
      "**Write the total momentum before** = m₁u₁ + m₂u₂, with signs",
      "**Write the total momentum after**: (m₁ + m₂)v if they stick, or m₁v₁ + m₂v₂ if they separate",
      "**Equate and solve** for the unknown velocity",
      "**If kinetic energy is asked for**, compute ½mv² for each body before and after and subtract to find the loss",
      "**State the direction** in the answer — momentum is a vector, and a bare number loses the mark"
    ]},
    {k:"p", t:"**Worked through.** A 2 kg trolley at 3 m/s collides with a 1 kg trolley at rest and they stick: momentum before 2 × 3 = 6 kg m/s, after (2 + 1)v, so v = **2 m/s**. Kinetic energy before is ½ × 2 × 9 = 9 J; after, ½ × 3 × 4 = 6 J; **3 J lost** to heat and sound. A 1500 kg car at 20 m/s rear-ends a 1000 kg car moving the same way at 5 m/s and the two lock: momentum before 30 000 + 5 000 = 35 000 kg m/s, after 2500v, so v = **14 m/s**; kinetic energy falls from 312 500 J to 245 000 J, **67 500 J** going into the crumpled metal. When the masses are equal and the collision is elastic, the moving body stops dead and the other moves off with its velocity — the behaviour of the first and last balls of a Newton's cradle."},
    {k:"h3", t:"Explosions, Recoil and Rocket Propulsion"},
    {k:"p", t:"Before an explosion the total momentum is zero, so after it the momenta must still add to zero: the pieces fly apart with equal and opposite momenta. A 5 kg gun firing a 20 g bullet at 500 m/s recoils at v = (0.02 × 500) ÷ 5 = **2 m/s** backward — the bullet's small mass at high speed balanced by the gun's large mass at low speed, which is why the shooter feels a shove and not a blow. The same law drives the **rocket**: hot gas is expelled backward at high speed, so the rocket moves forward, and it does so in **empty space** where there is nothing to push against — the momentum of the gas and the momentum of the rocket balance each other, and no air is needed (a misconception worth stating in an answer). The **jet engine** differs in taking its oxygen from the air instead of carrying an oxidiser, so it cannot work outside the atmosphere. The hose pipe kicks back as the water jets forward; a man stepping off a stationary canoe pushes it the other way; a squid and a jellyfish jet water behind them; and the sprinkler spins because the water leaves the bent arms sideways."},
    {k:"h3", t:"Angular Momentum"},
    {k:"p", t:"A rotating body carries **angular momentum**, the product of its moment of inertia and its angular velocity, L = Iω. It is conserved when no external **torque** (turning effect) acts — torque being force times the perpendicular distance from the axis. Since I grows when the mass is spread further from the axis, a body that pulls its mass inward must spin faster to keep L constant: the ice skater crossing her arms shoots into a fast spin and opens them to slow down, the diver tucks into a tight ball to somersault and opens to enter the water straight, the gymnast tucks on the bar, the ballet dancer does the same. The spinning bicycle wheel resists being tilted — **gyroscopic stability** — which is why a moving bicycle stands up and a stationary one falls, and why the gyroscope guides ships and aircraft. A helicopter's main rotor would spin the body the other way, so a small **tail rotor** provides the torque that cancels it. The Earth's own angular momentum keeps the seasons pointing the same way through the year and gives the compass its pole."},
    {k:"h3", t:"Momentum in Everyday Liberia"},
    {k:"bul", items:[
      "**The loaded truck** takes far longer to stop than the empty one: same brakes, greater momentum",
      "**The seat belt and the headrest** are momentum devices; the helmet lengthens the time of a head impact",
      "**Speed humps by the school gate** cut the velocity, and therefore the momentum, before the crossing",
      "**The canoe pushed off from the bank** moves the other way — conservation of momentum on the water",
      "**The pile driver and the pestle** deliver a large change of momentum in a short time, so a large force",
      "**The footballer cushioning the ball** with the chest or thigh lengthens the time and brings it to rest at his feet",
      "**The crash barrier and the sand-filled drums** on a bend lengthen the stopping time of an errant vehicle"
    ]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**State the law of conservation of linear momentum** in full, including the condition that no external force acts",
      "**Distinguish impulse from momentum** and show that impulse equals the change of momentum",
      "**Compare elastic with inelastic collisions** — momentum conserved in both, kinetic energy only in the first",
      "**Substitute into p = mv and Ft = mv − mu**, keeping the signs of the velocities",
      "**Explain recoil and rocket propulsion** from conservation of momentum, and say that the rocket needs no air to push against",
      "**Explain one safety device** in terms of increasing the time and so reducing the force"
    ]}
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
    {q:"A 0.5 kg football at rest is kicked to 20 m/s, the foot being in contact for 0.05 s. Find the impulse and the average force on the ball.", steps:[
      "Impulse = change of momentum = mv − mu = 0.5 × 20 − 0",
      "F = impulse ÷ t = 10 ÷ 0.05"
    ], a:"10 N s; 200 N"},
    {q:"A 0.45 kg ball strikes a wall at 10 m/s and rebounds at 8 m/s. Find the change of momentum, and the average force if the contact lasts 0.02 s.", steps:[
      "Take the rebound direction as positive: Δp = m(v − u) = 0.45 × (8 − (−10))",
      "F = Δp ÷ t = 8.1 ÷ 0.02"
    ], a:"8.1 kg m/s; 405 N on the ball"},
    {q:"A 1500 kg car at 20 m/s collides with a 1000 kg car moving in the same direction at 5 m/s, and the two lock together. Find their common speed and the kinetic energy lost.", steps:[
      "Momentum before = 1500 × 20 + 1000 × 5 = 35 000 kg m/s",
      "After: 2500v = 35 000, so v = 14 m/s",
      "KE before = 300 000 + 12 500; KE after = ½ × 2500 × 196 = 245 000 J"
    ], a:"14 m/s; 67 500 J lost as heat, sound and deformation"},
    {q:"A gun of mass 5 kg fires a bullet of mass 20 g at 500 m/s. Find the recoil velocity of the gun.", steps:[
      "Momentum before = 0, so momentum after = 0",
      "5v + 0.02 × 500 = 0, so v = −10 ÷ 5"
    ], a:"2 m/s backward"},
    {q:"A 4000 kg truck moving at 3 m/s collides with a 2000 kg truck moving at 2 m/s in the opposite direction, and they couple. Find their common velocity.", steps:[
      "Take the first truck's direction as positive",
      "Momentum before = 4000 × 3 − 2000 × 2 = 8000 kg m/s",
      "After: 6000v = 8000"
    ], a:"About 1.33 m/s in the direction the first truck was moving"},
    {q:"A 2 kg trolley moving at 4 m/s makes an elastic collision with a stationary trolley of the same mass. State what happens to each.", steps:[
      "Equal masses in an elastic collision exchange velocities",
      "Momentum and kinetic energy are both conserved by that exchange"
    ], a:"The first trolley stops and the second moves off at 4 m/s"},
    {q:"A cricketer catches a 0.16 kg ball travelling at 25 m/s, drawing his hands back 0.5 m so that the ball stops in 0.04 s instead of 0.004 s. Find the average force in each case.", steps:[
      "Δp = 0.16 × 25 = 4 kg m/s",
      "F = Δp ÷ t: 4 ÷ 0.04 and 4 ÷ 0.004"
    ], a:"100 N with the hands drawing back; 1000 N with stiff hands — ten times the force"}
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
    {k:"rule"},
    {k:"h3", t:"Heat Capacity and Specific Heat Capacity"},
    {k:"p", t:"The **heat capacity C** of a body is the heat needed to raise the whole body through one degree, in J/K, and **C = mc**. The **specific heat capacity c** is the heat needed to raise **1 kg** of a substance through **1 K (or 1 °C)**, in J kg⁻¹ K⁻¹, and it is a property of the material: **Q = mcΔθ**. Warming 2 kg of water through 10 °C takes Q = 2 × 4200 × 10 = **84 000 J**; the same 2 kg of copper through the same 10 °C takes only 2 × 390 × 10 = **7 800 J**, because copper's specific heat capacity is about a tenth of water's. Water's very high value is the reason it is the world's coolant and the reason Liberia's coast is gentler than the interior: the sea warms and cools slowly, so Monrovia stays near 25 °C while Ganta swings far more; a hot-water bottle holds its heat for hours; the human body, mostly water, resists changes of temperature; and the same pot of soup scalds worse than the same mass of hot metal."},
    {k:"table", head:["Substance","Specific heat capacity c (J kg⁻¹ K⁻¹)","What it means in practice"], rows:[
      ["Water (liquid)","4200","The highest of the common substances; the coolant of engines, the store of heat in a hot-water system"],
      ["Ethanol","2400","Warms and cools quickly; used where a fast response is wanted"],
      ["Ice","2100","Half that of water, which is why the first part of a heating curve is steeper than the rest"],
      ["Steam","2000","Less than liquid water"],
      ["Wood","1700","Feels warm because it takes a lot of heat to warm it and conducts badly"],
      ["Air","about 1000","Light per unit volume, so a room is warmed quickly"],
      ["Concrete and stone","about 880","Stores the day's heat and gives it out at night"],
      ["Aluminium","900","Cooking pots — light and quick to respond"],
      ["Glass","840","—"],
      ["Iron and steel","460","The engine block, the roofing sheet that burns the hand"],
      ["Copper","390","The base of a good pot: it takes little heat to warm and conducts fast"],
      ["Mercury","140","Small heat capacity, so the thermometer responds quickly"],
      ["Lead","130","The lowest of the common metals"]
    ]},
    {k:"h3", t:"Latent Heat in Detail"},
    {k:"p", t:"The **specific latent heat** of a substance is the heat needed to change the state of **1 kg** of it **without a change of temperature**: of **fusion** for solid to liquid, and of **vaporisation** for liquid to gas. For ice L_fusion = **3.36 × 10⁵ J/kg** (336 kJ/kg) and for water L_vaporisation = **2.26 × 10⁶ J/kg** (2260 kJ/kg), so Q = mL. Vaporisation needs about seven times as much as fusion because boiling tears the molecules right apart against their attraction, while melting only loosens them. The consequences are everyday facts: **steam at 100 °C scalds far worse than water at 100 °C** because condensing steam gives up 2 260 000 J/kg on top of its cooling; **ice cools a drink better than cold water** because melting takes 336 000 J/kg from the drink; **sweating cools the body** because the fastest molecules escape and take their energy with them; the **refrigerator** pumps a fluid that evaporates inside (absorbing heat) and condenses outside (releasing it); and cooking in a **pressure cooker** is faster because the higher pressure raises the boiling point above 100 °C. A worked chain of three steps: 0.5 kg of ice at −10 °C to water at 20 °C needs 0.5 × 2100 × 10 = **10 500 J** to warm the ice, 0.5 × 336 000 = **168 000 J** to melt it, and 0.5 × 4200 × 20 = **42 000 J** to warm the water — **220 500 J** in all, of which three quarters went into the melting at a constant 0 °C."},
    {k:"h3", t:"Measuring c and L in the Laboratory"},
    {k:"num", items:[
      "**Specific heat capacity of a metal by the method of mixtures:** weigh the metal, heat it in boiling water until it reaches 100 °C, weigh the lagged calorimeter with a known mass of cool water and its temperature, transfer the metal quickly, stir, and record the highest temperature. Then heat lost by the metal = heat gained by the water + heat gained by the calorimeter: m₁c(100 − θ) = m₂ × 4200 × (θ − θ₁) + C_cal(θ − θ₁)",
      "**Specific heat capacity of a liquid electrically:** a heater of known power P (or a joulemeter reading VIt) warms a measured mass for a measured time, with stirring and lagging; c = VIt ÷ (mΔθ). Precautions: lag the vessel, stir continuously, wait for the temperature to steady before reading, and allow for the heat the vessel takes",
      "**Specific latent heat of fusion of ice:** add dry ice at 0 °C to warm water in a lagged calorimeter, stir until it melts, and use heat lost by the water and calorimeter = mL + (heat to warm the melted ice to the final temperature). Precautions: dry the ice first, add it slowly so the temperature does not fall too far, and make sure it is at 0 °C and not colder",
      "**Specific latent heat of vaporisation of water:** pass steam from a boiler through a lagged calorimeter of cool water, catch the condensed water in a trap so only steam enters, weigh the condensate, and use the heat it gave up = mL + mcΔθ"
    ]},
    {k:"p", t:"In every one of these the **loss to the surroundings** is the enemy: lagging, a lid, quick transfer and a small temperature range above the room all reduce it, and the examiner expects the candidate to name at least two of them. A 50 W immersion heater left in 0.5 kg of water for 200 s supplies 10 000 J, raising the temperature by 10 000 ÷ (0.5 × 4200) ≈ **4.8 °C** if nothing is lost — the calculation that turns a laboratory reading into a value of c."},
    {k:"h3", t:"The Laws of Heat Exchange"},
    {k:"p", t:"When two bodies at different temperatures are mixed in an insulated vessel, **heat lost by the hot body = heat gained by the cold body** — the principle of the method of mixtures, and a direct consequence of conservation of energy. Mixing 0.4 kg of water at 80 °C with 0.6 kg at 20 °C: both are water, so the masses alone decide, and the final temperature is (0.4 × 80 + 0.6 × 20) ÷ 1.0 = **44 °C** — nearer the cooler reading because there is more of it. With different substances the specific heat capacities enter: a 0.5 kg block of metal at 100 °C dropped into 0.4 kg of water at 20 °C, settling at 30 °C, gives 0.5 × c × 70 = 0.4 × 4200 × 10, so c = 16 800 ÷ 35 = **480 J kg⁻¹ K⁻¹**, a value typical of steel. Always ask which bodies gain and which lose, include the calorimeter among the gainers when it is given a heat capacity, and never mix Celsius differences with kelvin values in the same equation — though a difference of 1 °C equals a difference of 1 K, so Δθ may be used in either."},
    {k:"h3", t:"The Three Methods of Heat Transfer"},
    {k:"table", head:["Method","Medium needed","How the energy travels","What the rate depends on","Everyday example"], rows:[
      ["Conduction","Yes — best in solids","Molecules vibrate and pass the energy to their neighbours; in metals the free electrons carry it far faster","The temperature difference, the cross-sectional area, the length, and the material (its thermal conductivity)","The handle of a metal spoon warming in the pot; the tile floor feeling colder than the mat at the same temperature"],
      ["Convection","Yes — liquids and gases only","The warmed fluid expands, becomes less dense and rises, and cooler fluid flows in to take its place — a convection current","The temperature difference, the freedom of the fluid to move, and the shape of the container","The sea breeze by day and the land breeze at night; smoke rising; the freezer compartment at the top of a refrigerator"],
      ["Radiation","No — it crosses a vacuum","Infrared electromagnetic waves travelling at the speed of light, needing no particles at all","The temperature of the surface, its area, and above all its colour and texture — dull black absorbs and emits best, shiny white worst","The sun warming the Earth; a solar water heater; the reflector behind an electric fire; heat felt from a charcoal stove"]
    ]},
    {k:"table", head:["Good conductors of heat","Poor conductors (insulators)","Why they are chosen"], rows:[
      ["Silver, copper, aluminium, iron","Trapped air, wool, cotton, feathers, thatch, cork, wood, plastics, glass fibre, vacuum","A conductor is wanted where heat must move fast — the base of a pot, the fins of an engine, the element of an iron"],
      ["Water (compared with air)","Water is a poor conductor, which is why a bath holds its heat","An insulator is wanted where heat must be kept back — the pot handle, the thatch roof, the woollen blanket, the double-glazed window, the lagging on a pipe"]
    ]},
    {k:"h3", t:"The Vacuum Flask in Detail"},
    {k:"table", head:["Part of the flask","What it defeats","How"], rows:[
      ["The vacuum between the double walls","Conduction and convection","There are no particles to carry the energy across"],
      ["The silvered inner surfaces facing the vacuum","Radiation","The shiny surfaces reflect infrared back into the flask, and radiate very little themselves"],
      ["The cork or plastic stopper","Conduction, convection and evaporation","A poor conductor that seals the opening"],
      ["The thin glass walls","Conduction","Glass conducts badly, and thin walls shorten the path"],
      ["The outer case and the felt or foam packing","Conduction and mechanical shock","Protects the fragile inner vessel"]
    ]},
    {k:"p", t:"The flask works both ways, which is the point often missed: it keeps soup hot **and** ice unmelted, because it slows the transfer of heat in whichever direction the temperature difference points. The same reasoning makes the **cooler box** of foam and ice, the **clay water pot** (which also loses heat by evaporation through its porous walls), the **thermos of a hospital**, and the **lagging on a hot-water pipe**. A **woollen blanket** does not warm the body — it traps the air the body has warmed and stops convection carrying it away, which is why several thin layers are warmer than one thick one."},
    {k:"h3", t:"Evaporation and Boiling Compared"},
    {k:"table", head:["Evaporation","Boiling"], rows:[
      ["Occurs at the surface only","Occurs throughout the liquid, with bubbles of vapour forming in the bulk"],
      ["Happens at every temperature","Happens at one fixed temperature, the boiling point"],
      ["Quiet and invisible","Noisy and visible"],
      ["Produces cooling of the remaining liquid","Needs a continuous supply of heat from outside"],
      ["Rate rises with temperature, surface area, dryness and air movement","Boiling point rises with pressure and falls at altitude; dissolved substances raise it"],
      ["The vapour leaves at the temperature of the liquid","The vapour leaves at the boiling point"]
    ]},
    {k:"h3", t:"Heat in Everyday Liberia"},
    {k:"bul", items:[
      "**The sea breeze:** by day the land heats faster than the sea, the air over the land rises, and cooler air flows in from the water; at night the order reverses and the land breeze blows out",
      "**The charcoal stove:** radiation from the coals, convection of the hot gases, and conduction into the pot — the blackened, rough pot bottom absorbs radiation better than a shiny one",
      "**The white-painted roof** reflects radiation and keeps the room cooler than a black roof, which absorbs it",
      "**The fan** does not cool the air; it moves air across the skin so that sweat evaporates faster and carries heat away",
      "**The thatch roof** traps air and insulates, which is why a thatched house stays cooler by day and warmer by night than an iron-roofed one",
      "**The generator** wastes most of its fuel as heat; the fins on its engine increase the area for conduction and convection",
      "**The solar water heater** on a hotel roof absorbs radiation in a blackened pipe behind glass — the glass traps the re-radiated heat, the greenhouse effect in a box"
    ]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Define specific heat capacity and specific latent heat** with their units, and distinguish heat capacity from specific heat capacity",
      "**Substitute into Q = mcΔθ and Q = mL**, in the right order when a change of state is involved",
      "**Apply heat lost = heat gained**, naming the bodies on each side and including the calorimeter when its heat capacity is given",
      "**Describe one method of measuring c or L**, with at least two precautions and the reason for each",
      "**Compare conduction, convection and radiation** in a table, and explain one everyday example of each",
      "**Explain the vacuum flask** part by part, saying which mode of transfer each part defeats"
    ]}
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
    {q:"0.4 kg of water at 80 °C is mixed with 0.6 kg of water at 20 °C. Find the final temperature, neglecting heat losses (c = 4200 J/kg°C).", steps:[
      "Heat lost = heat gained; both are water, so m₁(80 − θ) = m₂(θ − 20)",
      "0.4 × 80 + 0.6 × 20 = 1.0 × θ"
    ], a:"44 °C"},
    {q:"A 50 W immersion heater warms 0.5 kg of water for 200 s. Find the energy supplied and the rise in temperature (c = 4200 J/kg°C, no losses).", steps:[
      "Energy = P × t = 50 × 200",
      "Δθ = Q ÷ (mc) = 10 000 ÷ (0.5 × 4200)"
    ], a:"10 000 J; a rise of about 4.8 °C"},
    {q:"Find the heat needed to change 0.5 kg of ice at −10 °C into water at 20 °C (c_ice = 2100, c_water = 4200 J/kg°C, L_fusion = 3.36 × 10⁵ J/kg).", steps:[
      "Warm the ice: 0.5 × 2100 × 10",
      "Melt it at 0 °C: 0.5 × 336 000",
      "Warm the water: 0.5 × 4200 × 20",
      "Add the three"
    ], a:"10 500 + 168 000 + 42 000 = 220 500 J"},
    {q:"A 0.5 kg block of metal at 100 °C is dropped into 0.4 kg of water at 20 °C and the mixture settles at 30 °C. Find the specific heat capacity of the metal (c_water = 4200 J/kg°C).", steps:[
      "Heat lost by the metal = 0.5 × c × (100 − 30) = 35c",
      "Heat gained by the water = 0.4 × 4200 × (30 − 20) = 16 800 J",
      "35c = 16 800"
    ], a:"480 J/kg°C"},
    {q:"Find the heat needed to boil away 0.2 kg of water already at 100 °C (L_vaporisation = 2.26 × 10⁶ J/kg).", steps:[
      "Q = mL = 0.2 × 2.26 × 10⁶"
    ], a:"4.52 × 10⁵ J (452 kJ)"},
    {q:"A 2 kW kettle takes 4 minutes to raise 1 kg of water from 25 °C to 100 °C. Find the heat gained by the water and the efficiency of the kettle (c = 4200 J/kg°C).", steps:[
      "Heat to the water = 1 × 4200 × 75",
      "Energy supplied = 2000 × 240",
      "Efficiency = (315 000 ÷ 480 000) × 100 %"
    ], a:"315 kJ to the water; about 66 % efficient"}
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
    {k:"rule"},
    {k:"h3", t:"Wave Terms and the Wave Equation in Detail"},
    {k:"table", head:["Term","What it means","Symbol","Unit"], rows:[
      ["Amplitude","The greatest displacement of a particle from its rest position; it fixes the energy and, for sound, the loudness","A","metre"],
      ["Wavelength","The distance between two successive points in the same phase — crest to crest, or compression to compression","λ (lambda)","metre"],
      ["Frequency","The number of complete waves passing a point each second; fixed by the source","f","hertz (Hz)"],
      ["Period","The time for one complete wave","T","second; T = 1 ÷ f"],
      ["Wave speed","The distance the wave travels each second","v","m/s"],
      ["Phase","The stage a particle has reached in its vibration","—","degrees or radians"],
      ["Crest and trough","The highest and lowest points of a transverse wave","—","—"],
      ["Compression and rarefaction","The crowded and spread-out regions of a longitudinal wave","—","—"]
    ]},
    {k:"p", t:"The three are tied by the **universal wave equation v = fλ**, which also reads v = λ ÷ T. A wave of frequency 50 Hz and wavelength 4 m travels at 50 × 4 = **200 m/s**; a water ripple with a period of 0.25 s and a wavelength of 2 m travels at 2 ÷ 0.25 = **8 m/s**. The point that catches candidates out: when a wave passes from one medium into another, its **frequency never changes** — the source is still vibrating at the same rate — while its **speed and wavelength both change together**. That is why light bends entering glass and why sound changes wavelength entering warm air. The speed depends on the **medium**, not on the loudness or the brightness: in the same air, a whisper and a shout travel at the same 340 m/s, which is why an echo returns the same words, only fainter."},
    {k:"h3", t:"Transverse and Longitudinal Waves"},
    {k:"table", head:["Feature","Transverse wave","Longitudinal wave"], rows:[
      ["Direction of vibration of the particles","At right angles to the direction the wave travels","Along the direction the wave travels"],
      ["The parts of the wave","Crests and troughs","Compressions and rarefactions"],
      ["Can it be polarised?","Yes — only transverse waves can","No"],
      ["Examples","Light and all electromagnetic waves; ripples on water; a wave sent along a string; the S-waves of an earthquake","Sound in air; a pulse sent along a spring; the P-waves of an earthquake"],
      ["Medium needed?","Electromagnetic waves need none; water and string waves do","Always needs a material medium"],
      ["How it is produced in the laboratory","A ripple tank, or a rope flicked sideways","A slinky spring pushed and pulled along its length, or a tuning fork"]
    ]},
    {k:"p", t:"Both kinds transfer **energy without transferring matter**: the cork on the pond bobs up and down while the ripple passes on, and the air molecule at the back of the classroom vibrates to and fro while the teacher's voice travels to it. **Polarisation** is the test that settles the question for light: passing light through a Polaroid and turning a second Polaroid in front of it makes the light vanish at one angle, which only a transverse wave can do — one of the classical proofs that light is transverse."},
    {k:"h3", t:"The Properties of Waves"},
    {k:"num", items:[
      "**Reflection** — a wave bounces off a surface. For light the angle of incidence equals the angle of reflection (Grade 11 Period VI); for sound it gives the **echo**; in the ripple tank straight waves reflect straight and circular waves reflect circular, the centre of curvature on the other side of the barrier",
      "**Refraction** — a wave changes direction as it changes speed crossing a boundary. Water waves slow and shorten in shallow water, bending toward the normal; light bends entering glass (Grade 12); sound bends toward the cool air near the ground at night, which is why voices carry further after dark",
      "**Diffraction** — a wave spreads after passing a gap or round an obstacle. It is most marked when the gap is about the same size as the wavelength, which is why sound (wavelength about a metre) bends readily round a doorway while light (wavelength 5 × 10⁻⁷ m) makes a sharp shadow",
      "**Interference and superposition** — two waves meeting add their displacements. In step they reinforce (**constructive**, a larger amplitude); exactly out of step they cancel (**destructive**, a calm patch). The ripple tank with two dippers shows the alternating pattern; noise-cancelling headphones use the same cancellation deliberately",
      "**Polarisation** — the vibration is confined to one plane. Only transverse waves polarise; Polaroid sunglasses cut the glare reflected from water and road surfaces",
      "**Dispersion** — a wave splits into its component frequencies because the speed depends slightly on frequency; for light this gives the spectrum from a prism (Grade 12)"
    ]},
    {k:"h3", t:"Stationary (Standing) Waves"},
    {k:"p", t:"When two identical waves travel in opposite directions along the same line they superpose and produce a **stationary wave**: a pattern that appears not to travel. The points of zero displacement are **nodes** (the ends of a guitar string, the closed end of a pipe) and the points of greatest displacement are **antinodes** (the middle of the string, the open end of the pipe). Energy is not carried along a stationary wave — it is trapped between the nodes, which is exactly what a musical instrument wants. A string fixed at both ends carries a fundamental whose wavelength is twice the string length, L = λ/2, with harmonics at λ = L, 2L/3 and so on; a pipe closed at one end has a node at the closed end and an antinode at the open, so its fundamental has λ = 4L and only **odd** harmonics appear."},
    {k:"h3", t:"Sound — Production, Transmission and Speed"},
    {k:"p", t:"**Sound** is a longitudinal wave produced by a **vibrating body** — a string, a skin, a reed, a column of air, the vocal cords — and it needs a material medium to travel. Ring an electric bell in a jar and pump the air out, and the sound fades although the hammer can still be seen striking: **sound cannot cross a vacuum**, while light can, which is why the sun is seen but never heard. Sound travels fastest in **solids** (about 5000 m/s in steel), slower in **liquids** (about 1500 m/s in water) and slowest in **gases** (about **340 m/s** in air at room temperature), because the particles are closer and the forces between them stronger. Its speed in air rises with temperature, v = 331 + 0.6T m/s, so at 30 °C it is 331 + 18 = **349 m/s**; it is very slightly greater in humid air and is unaffected by the pressure. The distance of a storm is the seconds between the flash and the bang divided by three, in kilometres. An **echo** is sound reflected from a hard, distant surface; for the ear to separate it from the original sound the reflection must arrive at least 0.1 s later, so the surface must be at least (340 × 0.1) ÷ 2 = **17 m** away. Echoes are used to measure the depth of water (**sonar**), to find flaws in metal and scan the unborn baby (**ultrasound**), and by bats and dolphins to hunt; unwanted echoes make a hall muddy, which is why a good hall is lined with soft absorbent material and a bathroom sings."},
    {k:"h3", t:"The Qualities of Sound"},
    {k:"table", head:["Quality","Determined by","Measured in","Everyday test"], rows:[
      ["Pitch","The frequency of the vibration","hertz (Hz)","A whistle is high-pitched, a drum low-pitched; tightening a string raises its pitch"],
      ["Loudness","The amplitude, and so the intensity — the energy crossing unit area each second","decibels (dB) on a logarithmic intensity scale","Striking a drum harder raises the amplitude and the loudness, not the pitch"],
      ["Quality (timbre)","The waveform — which overtones are present and how strong they are","—","The same note on a guitar, a flute and a piano is recognised at once"]
    ]},
    {k:"table", head:["Sound","Approximate intensity level (dB)","Effect"], rows:[
      ["Threshold of hearing","0","The faintest sound a young ear detects"],
      ["Rustling leaves, a quiet library","10 to 30","Restful"],
      ["Normal conversation","60","Comfortable for hours"],
      ["A busy street, a loud radio","80 to 85","Above this, prolonged exposure begins to damage hearing"],
      ["A disco, a chainsaw","100 to 110","Damage in minutes to hours; ear protection needed"],
      ["A jet engine a few metres away","120","Painful; immediate risk"],
      ["Threshold of pain","140","Injury in seconds"]
    ]},
    {k:"p", t:"The human ear hears from about **20 Hz to 20 000 Hz** when young, and the upper limit falls with age and with noise exposure — which is why the oldest person in the room often misses the highest notes. **Infrasound** below 20 Hz comes from earthquakes, thunder and large machinery and is felt rather than heard; elephants use it to communicate over kilometres. **Ultrasound** above 20 kHz is used by bats and dolphins, by the medical scanner (a safe picture of the unborn baby, the liver and the heart), by the sonar, by the cleaner that shakes the dirt off jewellery and by the machine that finds cracks in a weld. **Noise** is an irregular, unwanted sound with a jumbled waveform; **music** is a regular, ordered vibration. Noise pollution raises blood pressure, disturbs sleep and damages hearing, and is controlled by silencers, absorbent linings, double glazing, barriers beside the highway, planning that keeps the school away from the airport, and ear protection at the workplace."},
    {k:"h3", t:"The Doppler Effect in Detail"},
    {k:"p", t:"When a source of waves moves relative to an observer, the frequency heard differs from the frequency emitted. **Approaching**, the source runs after its own waves, crowding them together: the wavelength shortens and the frequency — the pitch — **rises**. **Receding**, it runs away from them, stretching them out: the pitch **falls**. The taxi horn drops as it passes the listener; the racing car's note falls away down the straight; the train whistle does the same at the crossing. The effect belongs to every wave, not only to sound, and its applications are among the most useful in physics: **radar and the police speed gun** measure the shift of a reflected radio wave to find a car's speed; **medical ultrasound** measures the shift of sound reflected from moving blood to check the heart and the circulation; **astronomy** measures the shift of light from the galaxies — the **red shift**, showing them receding, which is the evidence that the universe is expanding; and weather radar tracks the motion of a storm. A moving **observer** also hears a shift, because he meets the waves more often when moving toward the source."},
    {k:"h3", t:"Vibrating Strings and Pipes"},
    {k:"p", t:"Every stringed instrument is a stretched string fixed at both ends, vibrating in a stationary wave. Its fundamental frequency is **f = v ÷ 2L**, where v is the speed of the wave along the string, so a 0.5 m string carrying waves at 200 m/s sounds f = 200 ÷ 1 = **200 Hz**, and pressing it at the middle fret, halving L, doubles the pitch to 400 Hz. The speed along the string is v = √(T ÷ μ), where T is the tension and μ the mass per unit length, so the pitch is raised by **shortening** the string (the fret, the finger on the kora), by **tightening** it (the tuning peg) and by using a **thinner, lighter** string (the high strings of the guitar are the thin ones, and the low strings are wound with wire to raise μ). Air columns work the same way: a pipe **open at both ends** has f = v ÷ 2L, a pipe **closed at one end** f = v ÷ 4L, so a 0.25 m closed pipe sounds 340 ÷ 1 = **340 Hz** in air at 340 m/s. Blowing harder produces the overtones — the harmonics at 2f, 3f and so on, or only the odd multiples in a closed pipe — and the mixture of them gives the instrument its quality. The flute, the whistle, the horn, the organ pipe and the bottle blown across its mouth are all air columns; the drum is a vibrating **membrane**, whose pitch rises as the skin is tightened and whose note is not a clean harmonic series, which is why drums are not tuned to a scale."},
    {k:"h3", t:"Beats and Resonance"},
    {k:"p", t:"Two notes of slightly different frequency sound together produce a throbbing rise and fall of loudness called **beats**, at a **beat frequency equal to the difference of the two frequencies**: forks of 256 Hz and 260 Hz give **4 beats per second**. Piano tuners use the effect — they adjust the string until the beats disappear, when the two are exactly in tune; so do the players of two flutes, and so does anyone tightening the strings of a kora against a known note. **Resonance** is the large response of a body when it is driven at its natural frequency: one tuning fork makes another of the same frequency sound across the room, a singer can break a glass, a bridge must be designed so that neither the wind nor marching feet match its natural frequency, and the tuning circuit of a radio responds strongly to one station while rejecting the rest. Both beats and resonance are interference and superposition seen in time rather than in space."},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Define amplitude, wavelength, frequency and period**, and use v = fλ with the units stated",
      "**Distinguish transverse from longitudinal waves**, giving two examples of each and naming the test (polarisation)",
      "**Describe the echo experiment** to find the speed of sound, with the distance, the timing of many claps and the calculation",
      "**Explain the Doppler effect** and give one application beyond the passing car",
      "**Compare pitch, loudness and quality**, saying which physical quantity each depends on",
      "**Use f = v ÷ 2L for a string and an open pipe, and f = v ÷ 4L for a closed pipe**",
      "**State the audible range** and give one use of ultrasound"
    ]}
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
    {q:"A sound wave of frequency 170 Hz has a wavelength of 2 m. Find its speed and its period.", steps:[
      "v = fλ = 170 × 2",
      "T = 1 ÷ f"
    ], a:"340 m/s; T ≈ 0.0059 s"},
    {q:"The speed of sound in air is 331 m/s at 0 °C and increases by 0.6 m/s for each degree Celsius. Find its speed at 30 °C.", steps:[
      "v = 331 + 0.6 × 30"
    ], a:"349 m/s"},
    {q:"A ship sends a sonar pulse downward and receives the echo after 0.4 s. Find the depth of the water (speed of sound in water 1500 m/s).", steps:[
      "The pulse travels down and back, so the depth is half the distance",
      "Depth = (1500 × 0.4) ÷ 2"
    ], a:"300 m"},
    {q:"A guitar string 0.5 m long carries waves at 200 m/s. Find the frequency of its fundamental note, and the frequency when a fret halves the vibrating length.", steps:[
      "f = v ÷ 2L = 200 ÷ (2 × 0.5)",
      "Halving L doubles f"
    ], a:"200 Hz; 400 Hz"},
    {q:"A pipe closed at one end is 0.25 m long. Find the frequency of its fundamental note (speed of sound 340 m/s).", steps:[
      "For a closed pipe f = v ÷ 4L",
      "f = 340 ÷ (4 × 0.25)"
    ], a:"340 Hz"},
    {q:"Two tuning forks of 256 Hz and 260 Hz sound together. Find the beat frequency and say how a tuner uses it.", steps:[
      "Beat frequency = |f₁ − f₂|",
      "The beats grow slower as the two approach and vanish when they agree"
    ], a:"4 beats per second; the tuner adjusts until the beats disappear, meaning the two are in tune"},
    {q:"A cliff stands 85 m from a learner who claps once. Find the time before he hears the echo (speed of sound 340 m/s).", steps:[
      "The sound travels to the cliff and back: 2 × 85 = 170 m",
      "t = distance ÷ speed = 170 ÷ 340"
    ], a:"0.5 s"}
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
    {k:"rule"},
    {k:"h3", t:"Sources of Light and Rectilinear Propagation in Detail"},
    {k:"p", t:"**Luminous** bodies make their own light — the sun and the stars by nuclear fusion, a flame by the heat of burning, a fluorescent tube by an electric discharge, an LED by electrons crossing a junction, the firefly by a chemical reaction. **Non-luminous** bodies are seen only by the light they reflect — the moon, the planets, this page, a friend's face; that is why the moon has phases and why a room is dark when the lamp is off. A **ray** is a line showing the direction of travel; a **beam** is a bundle of rays, and beams are **parallel** (a distant searchlight), **convergent** (toward a point) or **divergent** (from a point). Light travels in **straight lines** — **rectilinear propagation** — proved by the sharp edge of a shadow, by the beam of a torch seen in dusty air, by the pinhole camera and by the fact that a candle cannot be seen through three cards unless their holes are in line. The straight-line rule has one limit: when a gap is about as small as the wavelength the light spreads — diffraction — which is why shadows are not perfectly sharp under a microscope."},
    {k:"h3", t:"Shadows, Eclipses and the Pinhole Camera"},
    {k:"p", t:"A **point source** (a tiny lamp, a distant star) casts a shadow that is all **umbra** — total darkness with a sharp edge. An **extended source** (a fluorescent tube, the sun) casts an umbra surrounded by a **penumbra**, the partial shadow where some of the source is visible; the wider the source or the closer the object, the wider the penumbra. A **solar eclipse** occurs when the new moon comes between the sun and the Earth: an observer in the moon's umbra sees the sun covered completely (total eclipse), one in the penumbra sees part of it covered (partial), and when the moon is near its farthest from the Earth a ring of the sun survives — the **annular** eclipse. A **lunar eclipse** occurs when the full moon passes into the Earth's shadow, and the moon turns coppery red rather than vanishing, because the Earth's atmosphere refracts the red end of the spectrum into the shadow. Neither happens every month, because the moon's orbit is tilted about 5° to the Earth's. **Never look directly at the sun**, eclipsed or not: the eye's lens concentrates it onto the retina and burns it without pain. The **pinhole camera** is a light-tight box with a tiny hole and a screen at the back: the image is **real, inverted** and can be any size, and the magnification is image distance ÷ object distance. A camera 0.2 m long forming a 5 cm image of a tree 10 m away records a tree of 5 × (10 ÷ 0.2) = 250 cm = **2.5 m**. Making the hole smaller gives a sharper but dimmer image, and making it too small blurs it again by diffraction; two holes give two overlapping images."},
    {k:"h3", t:"Reflection in Detail"},
    {k:"p", t:"The **laws of reflection:** the incident ray, the reflected ray and the normal to the surface at the point of incidence all lie in one plane, and the **angle of incidence equals the angle of reflection** — both measured from the **normal**, never from the surface. **Regular (specular) reflection** from a polished surface sends a parallel beam away as a parallel beam, so a mirror forms an image; **diffuse reflection** from a rough surface scatters the rays in every direction, so a page of paper or a wall is visible from any angle but shows no image — the same law obeyed by every tiny facet, only the facets face different ways. The image in a **plane mirror** is **virtual** (it cannot be caught on a screen, and the rays only appear to come from it), **upright**, the **same size** as the object, **laterally inverted** (the left hand appears as the right, which is why AMBULANCE is written reversed on the bonnet), and as **far behind the mirror** as the object is in front. Two mirrors inclined at an angle θ produce n = (360 ÷ θ) − 1 images, so at 60° there are **five** — the principle of the **kaleidoscope**. A **periscope** uses two plane mirrors at 45°, or two prisms by total internal reflection, to see over a wall or from a submarine."},
    {k:"h3", t:"Spherical Mirrors in Detail"},
    {k:"table", head:["Position of the object (concave mirror)","Position of the image","Nature","Size","A use"], rows:[
      ["Beyond the centre of curvature C","Between C and F","Real and inverted","Diminished","Astronomical telescopes observing distant objects"],
      ["At C","At C","Real and inverted","Same size","Copying an object at the same size"],
      ["Between C and F","Beyond C","Real and inverted","Magnified","The projector, the cinema"],
      ["At F","At infinity","Real (parallel rays)","—","The torch, the headlamp and the searchlight reflector"],
      ["Between F and the pole P","Behind the mirror","Virtual and upright","Magnified","The shaving and make-up mirror, the dentist's mirror"],
      ["Anywhere (convex mirror)","Behind the mirror","Virtual and upright","Diminished","The driving mirror and the shop security mirror — a wide field of view"]
    ]},
    {k:"p", t:"The vocabulary: the **pole P** is the centre of the mirror's surface; the **centre of curvature C** the centre of the sphere of which it is part; the **radius of curvature r** the distance PC; the **principal axis** the line through P and C; the **principal focus F** the point where rays parallel to the axis meet after reflection (or appear to come from, in a convex mirror); and the **focal length f = r ÷ 2**. Construct an image with two of the four standard rays: a ray parallel to the axis reflects through F; a ray through F reflects parallel to the axis; a ray through C returns along itself; a ray striking the pole reflects symmetrically about the axis. The **mirror equation** ties the numbers together, **1/f = 1/u + 1/v**, and the **magnification m = v ÷ u = image height ÷ object height**, with the real-is-positive sign convention (distances measured from the pole, real images positive, virtual images negative). An object 30 cm from a concave mirror of f = 10 cm: 1/v = 1/10 − 1/30 = 2/30, so v = **15 cm**, real, inverted, and m = 15 ÷ 30 = **0.5**, half the size. The same object at 5 cm, inside the focus: 1/v = 1/10 − 1/5 = −1/10, so v = **−10 cm** — negative, therefore **virtual**, behind the mirror, upright and **magnified twice**, which is exactly what the shaving mirror does."},
    {k:"h3", t:"Mirrors at Work"},
    {k:"table", head:["Device","The optics used","Why it is chosen"], rows:[
      ["Torch, headlamp, car headlight and searchlight","A concave reflector with the bulb at the focus","Rays from the focus leave parallel, giving a long beam"],
      ["Solar cooker and solar furnace","A large concave reflector","Parallel rays from the sun are concentrated at the focus, where the temperature climbs enough to cook or to melt"],
      ["Shaving, make-up and dentist's mirror","A concave mirror with the face inside the focus","A virtual, upright, magnified image"],
      ["Driving mirror and shop security mirror","A convex mirror","A diminished image, therefore a wide field of view; the warning that objects are nearer than they appear"],
      ["Reflecting telescope","A large concave mirror with a small plane or convex secondary","A mirror can be made far larger than a lens and suffers no colour fringe"],
      ["Periscope and binoculars","Two plane mirrors at 45°, or two prisms using total internal reflection","Turns the line of sight through 90° twice without loss of brightness"],
      ["Kaleidoscope","Three plane mirrors at 60°","Repeated images of coloured glass form symmetrical patterns"],
      ["The satellite dish and the radio telescope","A concave metal reflector","Collects weak radio waves onto the receiver at the focus — the same geometry as the optical mirror"]
    ]},
    {k:"h3", t:"The Electromagnetic Spectrum in Numbers"},
    {k:"table", head:["Band","Approximate wavelength","Frequency","A Liberian application"], rows:[
      ["Radio waves","above 0.1 m","below 3 × 10⁹ Hz","LBC and other broadcasts, the mobile phone network"],
      ["Microwaves","1 mm to 0.1 m","3 × 10⁹ to 3 × 10¹¹ Hz","Satellite television, radar, the microwave oven, mobile-phone links"],
      ["Infrared","7 × 10⁻⁷ m to 1 mm","3 × 10¹¹ to 4 × 10¹⁴ Hz","Heat from a fire or the sun, the remote control, night-vision equipment, drying crops"],
      ["Visible light","4 × 10⁻⁷ m (violet) to 7 × 10⁻⁷ m (red)","4 × 10¹⁴ to 7.5 × 10¹⁴ Hz","Sight, photography, the traffic light, the solar panel"],
      ["Ultraviolet","1 × 10⁻⁸ m to 4 × 10⁻⁷ m","7.5 × 10¹⁴ to 3 × 10¹⁶ Hz","Making vitamin D in the skin, sterilising water and hospital equipment, detecting forged notes"],
      ["X-rays","1 × 10⁻¹¹ m to 1 × 10⁻⁸ m","3 × 10¹⁶ to 3 × 10¹⁹ Hz","The hospital X-ray of a broken bone, the airport baggage scanner"],
      ["Gamma rays","below 1 × 10⁻¹¹ m","above 3 × 10¹⁹ Hz","Radiotherapy for cancer, sterilising sealed medical supplies, industrial flaw detection"]
    ]},
    {k:"p", t:"All of them are the same thing — oscillating electric and magnetic fields at right angles to each other and to the direction of travel — differing only in frequency. Every one travels at **c = 3 × 10⁸ m/s** in a vacuum, is **transverse**, needs **no medium**, carries **energy and momentum**, can be **reflected, refracted, diffracted and polarised**, and obeys **c = fλ**. The order to memorise is rising frequency and falling wavelength: radio, microwave, infrared, visible (red to violet), ultraviolet, X-rays, gamma. Energy rises with frequency, so the short-wave end is **ionising**: ultraviolet causes sunburn and, in excess, skin cancer (the ozone layer screens most of it, and the welder's mask screens the arc); X-rays and gamma rays pass through tissue and can destroy cells, which is why the radiographer stands behind a lead screen, wears a film-badge dosimeter and limits every patient's dose, and why the same radiation that damages cells is used deliberately to kill a tumour."},
    {k:"h3", t:"The Photoelectric Effect and the Laser"},
    {k:"p", t:"In the **photoelectric effect** light falling on a metal surface ejects electrons, but only if its **frequency exceeds a threshold** peculiar to the metal; below that frequency nothing is emitted however bright the light or however long it shines, and above it electrons come out **instantly**. Brightness affects only the **number** of electrons, never their maximum energy, which rises with the frequency. Einstein explained it in 1905 by supposing light arrives in packets — **photons** — each of energy **E = hf**, with h = 6.63 × 10⁻³⁴ J s: one photon gives all its energy to one electron, part of it (the **work function W₀ = hf₀**) paying to escape the metal and the rest appearing as kinetic energy, **hf = W₀ + ½mv²**. The effect is the working principle of the **solar cell** — the panels now lighting clinics and charging phones across Liberia — of the light meter of a camera, the automatic door, the burglar alarm and the television camera tube. A **laser** produces light by **stimulated emission**: one photon triggers an excited atom to emit a second photon identical in frequency, phase and direction, and the pair trigger four, and so on, between two mirrors, until a beam emerges. Laser light is **monochromatic** (one wavelength), **coherent** (all the waves in step), **nearly parallel** (it spreads very little) and therefore **intense**. It reads the bar code at the supermarket till and the disc in the player, carries telephone calls along an optical fibre, cuts and welds steel, removes a tattoo, reshapes the cornea in eye surgery, levels a building site, measures the distance to the moon and points at the stars in a planetarium."},
    {k:"h3", t:"Light, Burning and the Environment"},
    {k:"p", t:"Burning gives both light and heat, and the examination asks the candidate to weigh the two. A charcoal stove lights a room and cooks a meal, but the smoke carries **soot** that blackens the walls and the lungs, and **carbon monoxide** that kills in a closed room; a kerosene lamp gives a bright, clean flame when the wick is trimmed, and a smoky one when it is not; diesel generators supply the light of many a street and add particulate matter to the air of the neighbourhood. Fire clears a field quickly and destroys the humus, the soil organisms and the seedlings with it, and the smoke of a bush fire reduces visibility on the highway and irritates every chest downwind. **Light pollution** — the glare of unshielded lamps — wastes energy, disturbs sleep and hides the stars from a town child. The answer that earns the marks names the effect, the substance responsible, and a remedy: burn cleanly with enough air, ventilate the room, use a chimney or a lamp shade, shield the lamp downward, and prefer the LED panel and the solar lantern to the flame wherever they can be afforded."},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**State the laws of reflection** and distinguish regular from diffuse reflection",
      "**Give the properties of the image in a plane mirror** — five of them, including lateral inversion",
      "**Draw a ray diagram** for a concave or convex mirror, using two standard rays, and describe the image",
      "**Use 1/f = 1/u + 1/v and m = v ÷ u** with the sign convention stated",
      "**List the regions of the electromagnetic spectrum in order**, with one use and one danger of a named region",
      "**Explain the photoelectric effect** — threshold frequency, photon, work function — and name one application",
      "**State three properties of the laser beam** and give two uses"
    ]}
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
    {q:"An object is placed 30 cm from a concave mirror of focal length 10 cm. Find the image position, its nature and the magnification.", steps:[
      "1/v = 1/f − 1/u = 1/10 − 1/30",
      "1/v = 2/30, so v = 15 cm",
      "m = v ÷ u = 15 ÷ 30"
    ], a:"15 cm from the mirror; real, inverted and diminished; magnification 0.5"},
    {q:"An object is placed 5 cm from a concave mirror of focal length 10 cm. Find the image position and magnification.", steps:[
      "1/v = 1/10 − 1/5 = −1/10",
      "v = −10 cm, the negative sign meaning the image is virtual",
      "m = v ÷ u = 10 ÷ 5"
    ], a:"10 cm behind the mirror; virtual, upright and magnified twice"},
    {q:"Two plane mirrors are inclined at 60° with an object between them. Find the number of images formed.", steps:[
      "n = (360 ÷ θ) − 1",
      "n = (360 ÷ 60) − 1"
    ], a:"5 images"},
    {q:"A pinhole camera 0.2 m long forms an image 5 cm high of a tree standing 10 m away. Find the height of the tree.", steps:[
      "Magnification = image distance ÷ object distance = 0.2 ÷ 10 = 0.02",
      "Object height = image height ÷ magnification = 5 ÷ 0.02"
    ], a:"250 cm, i.e. 2.5 m"},
    {q:"A radio station broadcasts at 100 MHz. Find the wavelength of its waves (c = 3 × 10⁸ m/s).", steps:[
      "λ = c ÷ f",
      "λ = 3 × 10⁸ ÷ 1 × 10⁸"
    ], a:"3 m"},
    {q:"A spherical mirror has a radius of curvature of 30 cm. Find its focal length, and state where the bulb of a torch must be placed in front of it.", steps:[
      "f = r ÷ 2",
      "Rays from the focus leave the mirror parallel"
    ], a:"15 cm; the bulb sits at the focus, 15 cm from the pole"}
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
    {k:"rule"},
    {k:"h3", t:"Refraction in Detail — Why Light Bends"},
    {k:"p", t:"Light travels fastest in a vacuum, slower in air, slower still in water and slowest in glass. When a ray crosses a boundary at an angle, one side of the wavefront reaches the new medium first and changes speed first, so the whole front turns: that turning is **refraction**. The **frequency never changes** — the source still vibrates at the same rate — but the **speed and the wavelength both change** in the same proportion. The **laws of refraction:** the incident ray, the refracted ray and the normal at the point of incidence lie in one plane; and the ratio sin i ÷ sin r is a constant for the two media, **Snell's law**, that constant being the **refractive index**. Entering a **more dense** optical medium the ray bends **toward** the normal and slows; entering a less dense medium it bends **away** and speeds up; along the normal it does not bend at all, although it still slows. The effects are everywhere: the stick looks bent in the bucket, the pool looks shallower than it is, a coin in an empty bowl appears when water is poured in, the glass block displaces a ray sideways (the **lateral displacement**, which grows with the thickness of the block, the angle of incidence and the refractive index), the star appears slightly higher than it is and twinkles as the air moves, the sun is still seen after it has geometrically set, and the hot road shimmers with a **mirage** — layers of air of different density refracting, and finally totally internally reflecting, the light from the sky so that it looks like a pool of water."},
    {k:"h3", t:"Refractive Index and Snell's Law"},
    {k:"table", head:["Medium","Refractive index n","Speed of light in it (m/s)","The critical angle to air"], rows:[
      ["Vacuum","1.000 (exactly)","3.00 × 10⁸","—"],
      ["Air","1.0003","about 3.00 × 10⁸","—"],
      ["Ice","1.31","2.29 × 10⁸","about 50°"],
      ["Water","1.33","2.26 × 10⁸","about 49°"],
      ["Perspex","1.49","2.01 × 10⁸","about 42°"],
      ["Crown glass","1.52","1.97 × 10⁸","about 41°"],
      ["Ruby","1.76","1.70 × 10⁸","about 35°"],
      ["Diamond","2.42","1.24 × 10⁸","about 24°"]
    ]},
    {k:"p", t:"The refractive index can be written four equivalent ways, and the question decides which to use: **n = sin i ÷ sin r** (from the angles), **n = c ÷ v** (from the speeds), **n = real depth ÷ apparent depth** (from the shift of an object seen through the medium), and for the critical angle **sin C = 1 ÷ n**. Light slowed to 2 × 10⁸ m/s in a liquid gives n = 3 × 10⁸ ÷ 2 × 10⁸ = **1.5**; a ray entering glass at 45° and refracted through 28° gives n = 0.707 ÷ 0.469 = **1.51**. A swimming pool that **appears** 1.5 m deep is really 1.5 × 1.33 = **2.0 m** deep — the reason a non-swimmer must never judge a river by eye, and the reason the spear-fisher aims **below** the fish he sees. The relative refractive index between two media is the ratio of their indices, n₂₁ = n₂ ÷ n₁, and light crossing from water into glass bends toward the normal because glass is the denser of the two."},
    {k:"h3", t:"Total Internal Reflection in Detail"},
    {k:"p", t:"As a ray passes from glass toward air the refracted ray bends further and further from the normal; at one particular angle of incidence, the **critical angle C**, the refracted ray just grazes the surface at 90°; beyond it no ray escapes and **all** the light is reflected back inside — **total internal reflection**, with no loss of brightness at all, unlike a mirror. Two conditions must hold: the light must travel from the **optically denser** to the **less dense** medium, and the angle of incidence must be **greater than the critical angle**. Since sin C = 1/n, crown glass gives C = sin⁻¹(0.658) = **41.8°**, water **48.8°**, and diamond only **24.4°** — the diamond's small critical angle means light entering it is reflected many times inside before leaving, which with dispersion is the whole of its sparkle, and the reason a cut diamond has so many facets. The applications are among the most valuable in modern physics: the **optical fibre** — a core of very pure glass of higher index surrounded by cladding of lower index, so light is trapped by repeated total internal reflection and carried round bends — used for **telecommunications** (thousands of telephone calls and television channels in one hair-thin fibre, immune to electrical interference, light, secure and low-loss) and for **medicine** (the endoscope and the laparoscope, which look inside the stomach and the abdomen through a bundle of fibres, with a second bundle carrying light in); **prisms** in binoculars, periscopes and single-lens reflex cameras, where a 45°–90°–45° prism turns the light through 90° or 180° with no tarnishing and total reflection; the **mirage**; the brightness of a cut **diamond**; and the empty-looking test tube in water, which shines because a layer of air around it reflects the light back."},
    {k:"h3", t:"Lenses in Detail"},
    {k:"table", head:["Position of the object (convex lens)","Position of the image","Nature","Size","A use"], rows:[
      ["Beyond 2F","Between F and 2F on the far side","Real and inverted","Diminished","The camera"],
      ["At 2F","At 2F on the far side","Real and inverted","Same size","Photocopying at the same size"],
      ["Between F and 2F","Beyond 2F","Real and inverted","Magnified","The projector, the slide projector, the compound microscope's objective"],
      ["At F","At infinity","Parallel rays (no image)","—","The spotlight and the collimator"],
      ["Inside F","On the same side as the object","Virtual and upright","Magnified","The magnifying glass, the reading lens"],
      ["Anywhere (concave lens)","On the same side as the object","Virtual and upright","Diminished","Correcting short sight; the peephole in a door"]
    ]},
    {k:"p", t:"The three construction rays for a **convex (converging) lens**: a ray parallel to the axis passes through the principal focus on the far side; a ray through the focus emerges parallel to the axis; a ray through the **optical centre** goes straight on undeviated. The **lens equation** is **1/f = 1/u + 1/v** and the **magnification m = v ÷ u = image height ÷ object height**, with real-is-positive. The **power** of a lens is **P = 1/f** with f in **metres**, measured in **dioptres (D)**: a lens of f = 25 cm has P = 1 ÷ 0.25 = **+4 D**, and a diverging lens of f = −50 cm has P = **−2 D**, the negative sign marking the concave lens. Thin lenses in contact add their powers, P = P₁ + P₂, which is how an optician builds a prescription. An object 30 cm from a convex lens of f = 20 cm: 1/v = 1/20 − 1/30 = 1/60, so v = **60 cm**, real, inverted and magnified twice — the projector. The same object at 10 cm, inside the focus: 1/v = 1/20 − 1/10 = −1/20, so v = **−20 cm**, virtual, upright and magnified twice — the magnifying glass."},
    {k:"h3", t:"The Eye, Accommodation and its Defects"},
    {k:"table", head:["Part of the eye","Its function"], rows:[
      ["Cornea","The transparent front surface; it does most of the refraction"],
      ["Aqueous humour","The clear fluid behind the cornea; keeps the eyeball firm"],
      ["Iris","The coloured curtain that opens and closes the pupil, controlling the amount of light"],
      ["Pupil","The hole through which light enters"],
      ["Eye lens","A flexible convex lens providing the fine adjustment of focus"],
      ["Ciliary muscles and suspensory ligaments","Change the shape of the lens — accommodation"],
      ["Retina","The light-sensitive screen, with rods for dim light and cones for colour; the image formed here is real, inverted and diminished"],
      ["Fovea (yellow spot)","The small region of sharpest vision, cones only"],
      ["Optic nerve","Carries the signals to the brain, which turns the inverted image the right way up"],
      ["Blind spot","Where the optic nerve leaves; there are no receptors there"],
      ["Choroid","The black lining that absorbs stray light, as the blackened inside of a camera does"],
      ["Sclera","The tough white outer coat that protects and holds the shape"]
    ]},
    {k:"p", t:"**Accommodation** is the eye's focusing: to see a **near** object the ciliary muscles **contract**, the suspensory ligaments slacken, the lens becomes **thicker and more convex**, and its focal length shortens; to see a **distant** object the muscles relax, the ligaments pull taut, the lens flattens and the focal length lengthens. The **near point** of a normal young eye is about **25 cm** and the far point is infinity. The eye and the camera agree closely — the lens and the eye lens, the film or sensor and the retina, the aperture and the iris with its pupil, the shutter and the eyelid — and differ in one respect that matters: the camera's lens has a fixed focal length and is moved to focus, while the eye's lens stays put and changes shape. **Defects and their correction:** **short sight (myopia)** — the eyeball is too long or the lens too powerful, so the image of a distant object forms in front of the retina and distant objects blur; corrected by a **concave (diverging) lens** of negative power. **Long sight (hypermetropia)** — the eyeball is too short or the lens too weak, so the near image would form behind the retina; corrected by a **convex (converging) lens**. **Presbyopia** — the lens stiffens with age and accommodation is lost, so the near point recedes; reading glasses, often convex. **Astigmatism** — the cornea is not evenly curved, so lines in one direction focus and those at right angles do not; corrected by a **cylindrical lens**. **Cataract** — the lens clouds; treated by surgery and an artificial lens. **Colour blindness** — inherited, usually a missing type of cone. **Glaucoma** — raised pressure inside the eye damaging the optic nerve."},
    {k:"h3", t:"Optical Instruments Compared"},
    {k:"table", head:["Instrument","The optics","What it gives"], rows:[
      ["Camera","One convex lens, an adjustable aperture and shutter, film or sensor","A real, inverted, diminished image; the shutter time controls the exposure"],
      ["Simple microscope (magnifying glass)","One convex lens with the object inside F","A virtual, upright, magnified image"],
      ["Compound microscope","Two convex lenses — an objective of very short focal length and an eyepiece","A greatly magnified virtual image, inverted relative to the object"],
      ["Astronomical telescope (refracting)","An objective of long focal length and an eyepiece of short focal length","A magnified image of a distant object, inverted; magnification = f_o ÷ f_e"],
      ["Reflecting telescope","A large concave mirror with a secondary mirror or prism","The same, but the mirror can be made much larger and gives no colour fringe"],
      ["Binoculars and the terrestrial telescope","Two lenses with erecting prisms","A magnified, upright image for use on land"],
      ["Projector","A convex lens with the slide between F and 2F","A real, inverted (so the slide is loaded upside down), magnified image on a screen"],
      ["Periscope","Two plane mirrors or prisms at 45°","A view over an obstacle"],
      ["Endoscope","Two bundles of optical fibres","A picture from inside the body, one bundle carrying light in and the other the image out"],
      ["Spectrometer and the prism","A glass prism","Dispersion of light for analysis"]
    ]},
    {k:"p", t:"The telescope's **magnification is f_o ÷ f_e**, so an objective of 100 cm with an eyepiece of 5 cm gives a magnification of **20**, and the instrument in normal adjustment is f_o + f_e = **105 cm** long. The compound microscope magnifies in two stages — the objective forms a real magnified image, and the eyepiece magnifies that again — so the total is the product of the two. In every instrument the rule is the same: identify the lens or mirror, say where the object sits relative to its focus, and read the image from the table."},
    {k:"h3", t:"Dispersion, Colours and Pigments"},
    {k:"p", t:"White light is a mixture. A **prism** refracts each colour by a different amount because the refractive index depends slightly on the wavelength — **violet most, red least** — so the beam spreads into the **spectrum**: red, orange, yellow, green, blue, indigo, violet. Newton showed it with two prisms: the first split the beam and the second, inverted, recombined the colours back to white. The **rainbow** is the same work done by a million droplets: light refracts on entering a drop, disperses, is **totally internally reflected** at the back of the drop, and refracts out again — the observer sees red on the outside of the primary bow and violet inside, with the sun behind him; a fainter secondary bow above has the colours reversed after two internal reflections. **Pigment** colours work the other way: a red cloth reflects red and **absorbs** the rest, so under green light it looks black because there is no red left to reflect; black absorbs all colours and white reflects all. Additive mixing of the **primary colours of light** and subtractive mixing of the **primary pigments** are set out below; the printer uses the pigments, the television screen the lights."},
    {k:"table", head:["Mixing lights (additive)","Result","Mixing pigments (subtractive)","Result"], rows:[
      ["Red + green","Yellow","Yellow + cyan","Green"],
      ["Red + blue","Magenta","Magenta + yellow","Red"],
      ["Green + blue","Cyan","Cyan + magenta","Blue"],
      ["Red + green + blue","White","Cyan + magenta + yellow","Black (all light absorbed)"],
      ["Red, green and blue are the primary colours of light","—","Cyan, magenta and yellow are the primary pigments — often taught as blue, red and yellow","—"]
    ]},
    {k:"p", t:"A **filter** subtracts: a red filter transmits red and absorbs the rest, so a red filter over a green object shows black. The photographer's polarising filter cuts glare; the welder's dark glass cuts ultraviolet and infrared; the sunglasses cut the intensity; and the blue glass of a clinic's lamp cuts the yellow. The candidate who can say which colours are **transmitted**, which **absorbed** and which **reflected** answers every colour question in the paper."},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**State the laws of refraction** and define the refractive index in two ways — sin i ÷ sin r and c ÷ v",
      "**Explain total internal reflection**, give its two conditions, and use sin C = 1 ÷ n",
      "**Name two applications of total internal reflection**, usually the optical fibre and the prism",
      "**Draw a ray diagram** for a convex lens and describe the image, or use 1/f = 1/u + 1/v with m = v ÷ u",
      "**Express the power of a lens in dioptres**, remembering that f must be in metres and a concave lens is negative",
      "**Distinguish myopia from hypermetropia** and name the correcting lens for each",
      "**Explain dispersion and the rainbow**, and give the primary colours of light and of pigments"
    ]}
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
    {q:"Light travels at 3 × 10⁸ m/s in air and 2 × 10⁸ m/s in a liquid. Find the refractive index of the liquid and its critical angle.", steps:[
      "n = c ÷ v = 3 × 10⁸ ÷ 2 × 10⁸",
      "sin C = 1 ÷ n = 1 ÷ 1.5"
    ], a:"n = 1.5; C ≈ 41.8°, i.e. about 42°"},
    {q:"A swimming pool appears to be 1.5 m deep when viewed from directly above. Find its real depth (n = 1.33).", steps:[
      "n = real depth ÷ apparent depth",
      "Real depth = 1.33 × 1.5"
    ], a:"About 2.0 m — the pool is deeper than it looks"},
    {q:"An object is placed 30 cm from a convex lens of focal length 20 cm. Find the image position, its nature and the magnification.", steps:[
      "1/v = 1/f − 1/u = 1/20 − 1/30 = 1/60",
      "v = 60 cm, positive, so the image is real",
      "m = v ÷ u = 60 ÷ 30"
    ], a:"60 cm on the far side; real, inverted and magnified twice — the projector arrangement"},
    {q:"Find the power of a lens of focal length (a) 25 cm and (b) −50 cm.", steps:[
      "P = 1 ÷ f with f in metres",
      "(a) 1 ÷ 0.25; (b) 1 ÷ (−0.5)"
    ], a:"(a) +4 D, a convex lens; (b) −2 D, a concave lens"},
    {q:"An astronomical telescope has an objective of focal length 100 cm and an eyepiece of focal length 5 cm. Find its magnification and its length in normal adjustment.", steps:[
      "Magnification = f_o ÷ f_e",
      "Length = f_o + f_e"
    ], a:"Magnification 20; length 105 cm"},
    {q:"Find the critical angle for water (n = 1.33) and for diamond (n = 2.42), and say which sparkles more and why.", steps:[
      "sin C = 1 ÷ n for each",
      "Water: sin C = 0.752; diamond: sin C = 0.413"
    ], a:"Water about 48.8°, diamond about 24.4°; the diamond's small critical angle traps light inside it by repeated total internal reflection, so it sparkles"},
    {q:"A ray enters a glass block of refractive index 1.5 at an angle of incidence of 30°. Find the angle of refraction.", steps:[
      "n = sin i ÷ sin r, so sin r = sin i ÷ n",
      "sin r = 0.5 ÷ 1.5 = 0.333"
    ], a:"r ≈ 19.5° — the ray bends toward the normal"}
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
    {k:"rule"},
    {k:"h3", t:"The Sources of Direct Current in Detail"},
    {k:"table", head:["Source","Energy converted","Rechargeable?","Where it is used"], rows:[
      ["Leclanché dry cell (1.5 V)","Chemical to electrical","No — a primary cell","Torches, radios, wall clocks, the school bell"],
      ["Alkaline cell (1.5 V)","Chemical to electrical","No","Where a longer life is needed — the digital meter, the camera"],
      ["Lead-acid accumulator (2 V per cell)","Chemical to electrical, and back again","Yes — a secondary cell","The vehicle battery, the solar home system, the clinic's back-up supply"],
      ["Lithium-ion and nickel-cadmium cells","Chemical to electrical","Yes","Mobile phones, laptops, solar lanterns, the power tool"],
      ["Fuel cell","Chemical energy of hydrogen (or methanol) and oxygen, continuously supplied","Not rechargeable — it is refuelled","Buses, remote stations, spacecraft; it makes electricity and water"],
      ["Solar (photovoltaic) cell","Light to electrical","—","The panels on clinics and schools, the solar lantern, the phone-charging station"],
      ["Dynamo or DC generator with a commutator","Mechanical to electrical","—","The bicycle lamp dynamo, the vehicle alternator with its rectifier, the power station"],
      ["Thermocouple","Heat to electrical","—","Measuring a high temperature, the flame-failure device on a gas heater"]
    ]},
    {k:"p", t:"Cells joined in **series** add their e.m.f. — three 1.5 V cells give 4.5 V — and carry the **same current** through each, which is what a torch needs; joined in **parallel** the e.m.f. stays 1.5 V but the **capacity and the life** increase, since each cell supplies part of the current, which is what a bank of batteries for a solar system wants. Never join unequal cells in parallel: the stronger drives current backward through the weaker and wastes it as heat. A cell is **polarised** when bubbles of hydrogen collect on its electrode and raise its internal resistance; the dry cell avoids this with a **depolariser** (manganese dioxide), and the accumulator is designed to be charged again by passing a current through it in the reverse direction. Every real cell has an **internal resistance**, which is why its terminal voltage falls as the current drawn rises."},
    {k:"h3", t:"Current, Charge and the Instruments"},
    {k:"p", t:"**Current is the rate of flow of charge: I = Q/t**, so **Q = It**; one **ampere** is one coulomb per second. A current of 2 A flowing for 3 minutes carries Q = 2 × 180 = **360 C**, and a phone charger delivering 1 A for 2 h carries 7200 C. **Conventional current** is taken to flow from the positive terminal to the negative outside the source, while the **electrons** actually flow the other way; state which convention the diagram uses and be consistent. An **ammeter** is connected **in series** and has a very **low** resistance so that it does not change the current it is measuring; a **voltmeter** is connected **in parallel** across the component and has a very **high** resistance so that it draws almost no current; the **galvanometer** detects a tiny current and is the movement inside both, converted to an ammeter by a low-resistance **shunt** in parallel and to a voltmeter by a high-resistance **multiplier** in series; the **multimeter** combines them with an ohmmeter. The **effects of a current** are the ways it is detected and used: **heating** (the kettle, the iron, the fuse, the filament lamp), **magnetic** (the bell, the motor, the electromagnet, the relay), **chemical** (electroplating, electrolysing water, charging a battery), **lighting** (the LED, the fluorescent tube) and **physiological** (the shock, the defibrillator, the nerve impulse)."},
    {k:"h3", t:"Resistance, Resistivity and Ohm's Law in Detail"},
    {k:"table", head:["Material","Resistivity ρ (Ω m)","Why it is chosen"], rows:[
      ["Silver","1.6 × 10⁻⁸","The best conductor, but too costly for wiring"],
      ["Copper","1.7 × 10⁻⁸","Almost as good as silver, ductile and affordable — house wiring and cables"],
      ["Aluminium","2.8 × 10⁻⁸","Light, so it is used for the long overhead lines"],
      ["Iron and steel","1.0 × 10⁻⁷","Strong; used where strength matters more than loss"],
      ["Carbon (graphite)","about 3.5 × 10⁻⁵","The electrode of a cell and the brush of a motor"],
      ["Nichrome","1.1 × 10⁻⁶","High resistivity and a high melting point without oxidising — the heating element"],
      ["Glass","10¹⁰ to 10¹⁴","An insulator — the supports of the overhead line"],
      ["Rubber and plastics","about 10¹³","The sheath of a cable and the handle of a tool"]
    ]},
    {k:"p", t:"**Ohm's law:** at a constant temperature, the current through a metallic conductor is directly proportional to the potential difference across it, **V = IR**, so **R = V/I** in **ohms (Ω)**. Resistance depends on four things: it is **proportional to the length** (twice the wire, twice the resistance), **inversely proportional to the cross-sectional area** (twice the diameter, a quarter of the resistance, since A = πd²/4), it depends on the **material** through the **resistivity ρ**, and it depends on the **temperature** — rising for metals, falling for carbon, semiconductors and the thermistor. All four are combined in **R = ρL/A**, with ρ in Ω m: a copper wire 10 m long of cross-section 1 × 10⁻⁶ m² has R = (1.7 × 10⁻⁸ × 10) ÷ 10⁻⁶ = **0.17 Ω**. An **ohmic** conductor gives a straight line through the origin on an I–V graph; a **non-ohmic** one does not — the **filament lamp** curves over because the heating filament's resistance rises, the **semiconductor diode** conducts in one direction only and shows almost no current until about 0.6 V, and the **thermistor** passes more current as it warms. State the condition 'at constant temperature' whenever the law is quoted: it is a mark, and it is the reason the filament lamp's resistance measured cold differs from its resistance measured hot."},
    {k:"h3", t:"Series and Parallel Circuits Worked"},
    {k:"table", head:["Property","Series","Parallel"], rows:[
      ["Current","The same everywhere","Divides between the branches; the sum of the branch currents equals the main current"],
      ["Potential difference","Divided across the components in proportion to their resistances","The same across every branch"],
      ["Total resistance","R = R₁ + R₂ + R₃ — always greater than the largest","1/R = 1/R₁ + 1/R₂ + 1/R₃ — always less than the smallest"],
      ["Two equal resistors R","Give 2R","Give R ÷ 2"],
      ["If one component fails","The whole circuit breaks","The other branches keep working"],
      ["Adding more resistors","Increases the total resistance and reduces the current","Decreases the total resistance and increases the current from the source"],
      ["Everyday use","A fuse, a switch and a lamp in one line; decorative lighting strings","House wiring, so every socket and lamp takes the full mains voltage"]
    ]},
    {k:"p", t:"**Worked through.** A 4 Ω and a 6 Ω resistor in parallel: R = (4 × 6) ÷ (4 + 6) = 24 ÷ 10 = **2.4 Ω**; across a 12 V battery the total current is 12 ÷ 2.4 = **5 A**, split as 12 ÷ 4 = **3 A** and 12 ÷ 6 = **2 A** — the smaller resistance taking the larger share. Add a 4 Ω resistor in series with that pair and the total becomes 2.4 + 4 = **6.4 Ω**, so 12 V drives 1.875 A, of which the parallel pair sees 12 − (1.875 × 4) = 4.5 V. The **potential divider** is the same idea used deliberately: two resistors in series share the supply voltage in proportion to their resistances, so 8 V across a 2 Ω and a 6 Ω pair gives 2 V and 6 V at their junction — the circuit behind the volume control, the sensor and the dimmer. A **rheostat** used as a variable resistor limits the current; used as a potential divider it supplies any voltage from zero to the full supply."},
    {k:"h3", t:"EMF, Internal Resistance and Lost Volts"},
    {k:"p", t:"The **electromotive force (e.m.f., E)** of a cell is the total energy it gives to each coulomb that passes through it; the **terminal potential difference (V)** is the energy each coulomb delivers to the external circuit; the difference is the **lost volts**, spent driving the current through the cell's own **internal resistance r**: **E = V + Ir**, so **V = E − Ir** and **E = I(R + r)**. A cell of e.m.f. 6 V and internal resistance 0.5 Ω driving a 2.5 Ω resistor gives I = 6 ÷ (2.5 + 0.5) = **2 A**, a terminal voltage of 6 − (2 × 0.5) = **5 V**, and **1 V** lost inside the cell. Measure r in the laboratory by varying R, reading V and I each time, and plotting **V against I**: the graph is a straight line whose **intercept on the V axis is E** and whose **gradient is −r**. This is why a car's headlights **dim** for a moment when the starter motor is switched on — the huge current it draws makes Ir large, so the terminal voltage collapses — and why a battery feels warm in use, and why the accumulator must be kept charged and its terminals clean. The maximum power a cell can deliver to an external resistor occurs when R = r, but the cell then wastes half its energy inside itself."},
    {k:"h3", t:"Kirchhoff's Laws and How to Use Them"},
    {k:"p", t:"**Kirchhoff's first (junction) law:** the total current flowing into a junction equals the total current flowing out of it — a statement of the **conservation of charge**, since charge cannot pile up at a point. If 2 A and 3 A enter a junction, 5 A must leave; if 5 A enters and 2 A leaves by one branch, 3 A leaves by the other. **Kirchhoff's second (loop) law:** around any closed loop of a circuit, the sum of the e.m.f.s equals the sum of the products of current and resistance — a statement of the **conservation of energy**, since each coulomb gains as much from the cells as it spends in the resistors. The method for a network: label a current in each branch with an assumed direction (a wrong guess simply returns a negative answer); apply the junction law at one point fewer than there are unknown currents; apply the loop law to as many independent loops as needed; solve the simultaneous equations. For a single loop, the two laws collapse into I = E ÷ (R + r) and Ohm's law is enough — which is most of the examination questions."},
    {k:"h3", t:"Electrical Energy, Power and the Cost"},
    {k:"p", t:"**Power** is the rate at which electrical energy is converted: **P = VI = I²R = V²/R**, in **watts**. **Energy** is E = Pt = VIt, in joules; but the supply company sells the **kilowatt-hour**, 1 kWh = 1000 W × 3600 s = **3.6 × 10⁶ J**, called one **unit**. Units used = power in kW × time in hours, and the cost = units × the tariff on the bill. An iron rated 1000 W at 240 V draws I = P ÷ V = **4.2 A** and its element has R = V² ÷ P = 57 600 ÷ 1000 = **57.6 Ω**; used 2 h a day for 30 days it consumes 1 × 60 = **60 units**, which at L$ 40 per unit costs **L$ 2 400** — more than most households spend on lighting in the same month, and the reason the iron and the kettle are the appliances worth switching off. Note that the same appliance on Liberia's 120 V circuits takes **twice the current** for the same power, so the wires and the fuse must be rated accordingly."},
    {k:"table", head:["Appliance","Power","Current at 240 V","Current at 120 V","Fuse to fit"], rows:[
      ["LED lamp","10 W","0.04 A","0.08 A","The smallest available — 3 A"],
      ["Television","120 W","0.5 A","1.0 A","3 A"],
      ["Fan","60 W","0.25 A","0.5 A","3 A"],
      ["Refrigerator","200 W","0.8 A","1.7 A","3 A, allowing for the starting surge"],
      ["Electric iron","1000 W","4.2 A","8.3 A","5 A"],
      ["Kettle","2000 W","8.3 A","16.7 A","10 A"],
      ["Water pump","3000 W","12.5 A","25 A","15 A, on its own circuit"],
      ["Air conditioner","1500 W","6.3 A","12.5 A","10 A"]
    ]},
    {k:"p", t:"Choose the fuse just **above** the normal current of the appliance: too high and it will not melt before the cable does, too low and it blows in use. The fuse is a short length of thin wire of low melting point placed **in the live wire**, so that when it melts the appliance is disconnected from the high potential; it is a deliberate weak point, the cheapest part in the circuit and the one that saves the rest."},
    {k:"h3", t:"Domestic Wiring and Electrical Safety"},
    {k:"p", t:"The house receives three wires: the **live** (brown, at high potential, the dangerous one), the **neutral** (blue, at about earth potential, the return path) and the **earth** (green and yellow, the safety wire bonding every metal case to a rod in the ground). Every switch and every fuse goes in the **live** wire, so that switching off really does make the appliance safe; a switch in the neutral leaves the appliance live and waiting. The **three-pin plug** has the **earth pin longer**, so it opens the shutters of the socket and makes the earth connection first and breaks it last; the cable grip clamps the outer sheath, not the conductors; and the fuse sits in the live pin. Metal-cased appliances are **earthed** so that if a live wire touches the case a large current flows, the fuse blows and the case is never left live to the touch; plastic-cased appliances are **double insulated**, marked with the square-inside-square symbol, and need no earth. The **consumer unit** carries a fuse or a **miniature circuit breaker (MCB)** for each circuit — lighting, sockets, cooker, pump — so a fault in one does not darken the house, and a **residual-current device (RCD)** that trips on a leakage as small as 30 mA, fast enough to save a life. The **ring circuit** of the sockets uses thicker cable because it carries more current. Never overload one socket with adapters, never join a flex with tape, never touch a switch with wet hands (water lowers the body's resistance from about 100 000 Ω dry to a few thousand Ω wet, and the same 240 V then drives a hundred times the current through the chest), never leave a charging phone on a bed, and keep the generator outside and earthed. **If someone is being shocked:** switch off at the mains first; do not touch the victim while the current flows; if the supply cannot be cut, push the wire away with a dry wooden pole or a plastic chair; call for help; and begin resuscitation if the heart has stopped, since the current that caused the injury has already gone."},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**State Ohm's law with its condition** and define the ohm",
      "**Combine resistors** in series and in parallel, and reduce a series–parallel network step by step",
      "**Use E = I(R + r)** and explain the lost volts, or find E and r from a V–I graph",
      "**State Kirchhoff's two laws** and say which conservation principle each expresses",
      "**Calculate the cost of electricity** — convert watts to kilowatts and minutes to hours before multiplying",
      "**Choose a fuse rating** from the appliance's power and voltage, and explain why the fuse is in the live wire",
      "**Give safety rules** with the reason for each — the reason is where the marks are"
    ]}
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
    {q:"A copper wire is 10 m long and has a cross-sectional area of 1 × 10⁻⁶ m². Find its resistance (ρ = 1.7 × 10⁻⁸ Ω m).", steps:[
      "R = ρL ÷ A",
      "R = (1.7 × 10⁻⁸ × 10) ÷ 10⁻⁶"
    ], a:"0.17 Ω"},
    {q:"A 4 Ω and a 6 Ω resistor are connected in parallel across a 12 V battery. Find the combined resistance, the total current and the current in each resistor.", steps:[
      "R = (4 × 6) ÷ (4 + 6)",
      "I = V ÷ R = 12 ÷ 2.4",
      "Branch currents: 12 ÷ 4 and 12 ÷ 6"
    ], a:"2.4 Ω; 5 A in all; 3 A through the 4 Ω and 2 A through the 6 Ω"},
    {q:"A cell of e.m.f. 6 V and internal resistance 0.5 Ω is connected to a 2.5 Ω resistor. Find the current, the terminal voltage and the lost volts.", steps:[
      "I = E ÷ (R + r) = 6 ÷ 3.0",
      "V = E − Ir = 6 − (2 × 0.5)",
      "Lost volts = Ir"
    ], a:"2 A; terminal voltage 5 V; lost volts 1 V"},
    {q:"An electric iron is rated 1000 W, 240 V. Find the current it draws, the resistance of its element, and the cost of using it 2 h each day for 30 days at L$ 40 per unit.", steps:[
      "I = P ÷ V = 1000 ÷ 240",
      "R = V² ÷ P = 57 600 ÷ 1000",
      "Units = 1 kW × 2 h × 30 days; cost = units × L$ 40"
    ], a:"4.2 A; 57.6 Ω; 60 units, costing L$ 2 400"},
    {q:"A 2 Ω and a 3 Ω resistor in parallel are joined in series with a 4 Ω resistor across a 26 V supply. Find the total resistance and the current.", steps:[
      "Parallel pair: (2 × 3) ÷ (2 + 3) = 1.2 Ω",
      "Total R = 1.2 + 4 = 5.2 Ω",
      "I = 26 ÷ 5.2"
    ], a:"5.2 Ω; 5 A"},
    {q:"A current of 2 A flows for 3 minutes. Find the charge that passes a point in the circuit.", steps:[
      "Q = It = 2 × 180"
    ], a:"360 C"},
    {q:"A kettle is rated 2000 W, 240 V. Find its current and choose the correct fuse from 3 A, 5 A, 10 A and 13 A.", steps:[
      "I = P ÷ V = 2000 ÷ 240",
      "Choose the smallest rating above the working current"
    ], a:"8.3 A; the 10 A fuse"},
    {q:"Two cells, each of e.m.f. 1.5 V and internal resistance 0.2 Ω, are joined in series and connected to a 6.6 Ω resistor. Find the current.", steps:[
      "Total e.m.f. = 1.5 + 1.5 = 3.0 V; total internal resistance = 0.2 + 0.2 = 0.4 Ω",
      "I = E ÷ (R + r) = 3.0 ÷ 7.0"
    ], a:"About 0.43 A"}
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
    {k:"rule"},
    {k:"h3", t:"Magnetic Materials and the Domain Theory"},
    {k:"table", head:["Class of material","Behaviour in a field","Examples","Use"], rows:[
      ["Ferromagnetic","Strongly attracted; can be made into permanent magnets","Iron, steel, nickel, cobalt and their alloys","Magnets, transformer cores, the recording medium, the crane's lifting face"],
      ["Paramagnetic","Very weakly attracted","Aluminium, platinum, manganese, oxygen","Where magnetism must be negligible but the metal still needed"],
      ["Diamagnetic","Very weakly repelled","Copper, zinc, bismuth, water, wood, most plastics","Wiring and cases that must not disturb a field"],
      ["Non-magnetic (in ordinary use)","Shows no attraction","Brass, glass, paper, air","The frame of a compass, the case of a watch"]
    ]},
    {k:"p", t:"The **domain theory** explains what magnetising really does. Inside a ferromagnetic material are countless tiny regions, the **domains**, each already fully magnetised by the alignment of its atoms. In an unmagnetised bar the domains point in every direction and cancel; bringing a magnet near, or passing a current through a coil round the bar, makes the domains that already point the right way grow and the others turn, until at **saturation** they all point one way and the bar is a magnet. **Soft iron** lets its domains turn easily and slip back easily, so it magnetises strongly but loses its magnetism when the field is removed — the material of a **temporary magnet**, an electromagnet and a transformer core. **Steel**, an alloy of iron with carbon, holds its domains in place, so it is harder to magnetise and harder to demagnetise — the material of a **permanent magnet**. Heating a magnet above its **Curie temperature** (about 770 °C for iron), hammering it, or dropping it, scrambles the domains again and destroys the magnetism."},
    {k:"h3", t:"Fields, Flux and Flux Density"},
    {k:"p", t:"**Magnetic flux Φ** is the total field passing through an area, measured in **webers (Wb)**, and the **flux density B = Φ/A** is the flux per unit area at right angles to the field, measured in **teslas (T)**, one tesla being one weber per square metre. B is the strength used in F = BIL and in the definition of the motor effect. Field lines have four properties worth stating: they run from the **north pole to the south pole** outside the magnet (and continue inside it, so they are closed loops), they **never cross**, they are **closer together where the field is stronger**, and they behave as though under tension, pulling the magnet into line. Map them with **iron filings** on a card (tapped gently so the filings become tiny compasses) or by **plotting** with a small compass, marking the needle's position step by step. Two like poles side by side produce a **neutral point** between them, where the two fields cancel and a compass points nowhere in particular; a bar magnet with its north pointing geographic north produces neutral points on either side where its field cancels the Earth's. The **Earth's own field** is that of a giant magnet whose poles do not coincide with the geographic poles: the **angle of declination (variation)** is the angle between true north and magnetic north, and it must be read from the chart of the region before a compass bearing is used on a map; the **angle of dip (inclination)** is the angle the field makes with the horizontal, zero at the magnetic equator and 90° at the magnetic poles. The field extends into space as the **magnetosphere**, which deflects the charged particles of the solar wind and channels the few that enter to the poles, where they make the **aurora**."},
    {k:"h3", t:"Magnetising and Demagnetising in Detail"},
    {k:"num", items:[
      "**Single-touch stroking:** lay the bar on the table, draw one pole of a strong magnet along it from one end to the other, **lift the magnet clear** and return to the start, and repeat twenty times in the same direction. The end where the stroking pole finishes becomes the **opposite** pole",
      "**Divided touch:** stroke outward from the centre of the bar with two magnets at once, opposite poles trailing, and the two ends become opposite poles",
      "**The electrical method:** place the bar inside a solenoid and pass a **strong direct current** for a few seconds. The pole at each end is found from the current's direction by the right-hand grip rule; this is the method used in industry, and it is how an electromagnet is made permanent in a loudspeaker",
      "**Hammering** a steel bar held pointing north-south magnetises it weakly, because the Earth's field aligns the domains while the shock lets them move",
      "**Demagnetising:** heat it red-hot and let it cool out of the field, hammer it while it lies east-west, or — the standard laboratory method — place it in a solenoid carrying **alternating current** and withdraw it slowly, so the domains are left pointing at random",
      "**Care and storage:** store bar magnets in pairs north to south with **keepers** of soft iron across the ends, keep them away from heat and from other fields, and never drop them"
    ]},
    {k:"h3", t:"The Magnetic Effect of a Current — the Electromagnet"},
    {k:"p", t:"Oersted found in 1820 that a compass needle swings when a current is switched on nearby: **every current produces a magnetic field**. Round a straight wire the field is a set of **concentric circles**, its direction given by the **right-hand grip rule** — grip the wire in the right hand with the thumb pointing along the current, and the fingers curl in the direction of the field. A circular coil concentrates the field through its centre; a **solenoid** — a long coil — produces a field exactly like a bar magnet's, with poles at its ends, named by the same rule (looking at one end, if the current appears to flow **anticlockwise** that end is a **north** pole). Winding the coil on a **soft iron core** multiplies the field many times: this is the **electromagnet**, whose strength grows with the **current**, the **number of turns** and the **quality of the core**, and which can be switched off — the one thing a permanent magnet cannot do."},
    {k:"table", head:["Device","How the electromagnet is used"], rows:[
      ["The electric bell","The current magnetises the coil, the armature is pulled and the hammer strikes; the movement breaks the contact, the magnetism dies, the spring returns the armature and the contact closes again — so the bell buzzes"],
      ["The relay","A small current in the coil switches a much larger current in another circuit — the starter relay of a car, the street-light controller, the protection relay of a substation"],
      ["The scrapyard crane","Lifts a tonne of iron with the current on and releases it by switching off, with no chains or hooks"],
      ["The magnetic separator","Lifts iron out of crushed ore, grain or waste"],
      ["The loudspeaker and the telephone receiver","A varying current in the voice coil moves it in a permanent field, and the cone makes the air vibrate"],
      ["The magnetic recorder","A signal current magnetises a moving tape or disc in a pattern that can be read back"],
      ["The circuit breaker and the trip coil","A current above the rating magnetises the coil strongly enough to release the catch"],
      ["The hospital MRI scanner","A very strong field aligns the nuclei of the body's water so that a picture of the soft tissue can be made"]
    ]},
    {k:"h3", t:"The Motor Effect in Detail"},
    {k:"p", t:"A conductor carrying a current and lying **across** a magnetic field experiences a **force**, because the field of the current and the field of the magnet add on one side and cancel on the other, pushing the conductor toward the weak side. Its size is **F = BIL** when the conductor is at right angles to the field (and F = BIL sin θ in general), and its direction is given by **Fleming's left-hand rule** — the First finger points along the Field (north to south), the seCond finger along the Current, and the thuMb gives the Motion. A wire 0.2 m long carrying 4 A in a field of 0.5 T feels F = 0.5 × 4 × 0.2 = **0.4 N**. The force grows with the field, the current and the length of wire in the field, and vanishes when the wire lies **along** the field. The **DC motor** turns this into rotation: a rectangular coil lies between curved pole pieces that make the field **radial**, so the turning effect stays at its greatest throughout the turn; a **split-ring commutator** reverses the current in the coil every half turn, which keeps the two sides being pushed in the same rotational sense; **carbon brushes** carry the current to the spinning rings; and a soft iron core inside the coil strengthens the field. Make it turn faster or harder by increasing the current, adding turns, using a stronger magnet or a better core. The **AC (induction) motor** has no commutator or brushes at all: a rotating magnetic field in the stator induces currents in the rotor, and those currents are dragged round — simple, rugged and cheap, which is why it drives the fan, the pump, the blender, the lift and the electric vehicle. Note the pair: the **motor** converts electrical energy to mechanical; the **generator** does the reverse and is built almost identically, differing only in what is supplied and what is taken."},
    {k:"h3", t:"The Moving-Coil Galvanometer"},
    {k:"p", t:"A coil of fine wire is suspended in a **radial** magnetic field between the poles of a permanent magnet, held by a hairspring, with a pointer over a scale. When a current passes, the motor effect turns the coil until the spring's restoring couple balances it, so the **deflection is proportional to the current** — and the radial field keeps the scale even. The galvanometer is the movement inside the ordinary meters: a **low-resistance shunt** in parallel with it converts it into an **ammeter** (most of the current bypasses the delicate coil), and a **high-resistance multiplier** in series converts it into a **voltmeter** (most of the voltage drops across the multiplier). A **moving-iron** instrument works on the magnetisation of iron rather than on a coil in a field, and so reads alternating current as well as direct. The **digital multimeter** replaces the movement with electronics and reads voltage, current and resistance with one dial."},
    {k:"h3", t:"Electromagnetic Induction in Detail"},
    {k:"p", t:"**Electromagnetic induction** is the production of an e.m.f. in a circuit when the magnetic flux linking it changes. **Faraday's law:** the magnitude of the induced e.m.f. is proportional to the rate of change of flux linkage. **Lenz's law:** the induced current flows in such a direction that its magnetic effect **opposes** the change that produced it — the law of conservation of energy in disguise, since the energy of the induced current must come from the work done against that opposition. Lenz's law is why it feels hard to push a magnet into a coil and hard to pull it out, and why a strong magnet dropped down a copper tube falls slowly, braking itself with the currents it induces. **Fleming's right-hand (dynamo) rule** gives the direction of the induced current: thuMb Motion, First finger Field, seCond finger induced Current. The induced e.m.f. is increased by a **stronger field**, **more turns**, **faster relative motion**, a **larger area** of coil and a **soft iron core**. The **AC generator (alternator)** rotates a coil in a field and takes the current out through **slip rings** and brushes, giving a sinusoidal e.m.f. that is greatest when the sides of the coil cut the field lines at right angles and zero when they move along them, with one complete cycle per revolution — spin it 60 times a second and the output is 60 Hz. The **DC generator** replaces the slip rings with a **split-ring commutator**, which reverses the connections every half turn and delivers a pulsing but one-way current; smooth it with many coils and it becomes steady. **Self-induction** is the e.m.f. induced in a coil by the change of its own current — the spark at the switch when a coil circuit is broken, and the choke that starts a fluorescent tube. **Mutual induction** is the e.m.f. induced in a second coil by the changing current in the first — the transformer and the induction coil. **Eddy currents** are loops of induced current swirling in a solid block of metal: they heat it (the induction cooker, the furnace) and brake it (the eddy-current brake of a train and a weighing balance), and they waste energy in a transformer, which is why its core is **laminated** — insulated slices across the path of the currents. Induction also drives the **metal detector**, the **card reader**, the **wireless phone charger**, the **electric guitar's pickup** and the **bicycle dynamo**."},
    {k:"h3", t:"The Transformer in Detail"},
    {k:"p", t:"A **transformer** is two coils wound on a **laminated soft-iron core**. Alternating current in the **primary** sets up a flux that changes continuously; the core carries that changing flux through the **secondary**, where it induces an alternating e.m.f. For an ideal transformer, one that loses nothing, **Eₛ ÷ Eₚ = Nₛ ÷ Nₚ = Iₚ ÷ Iₛ**. More turns on the secondary than the primary makes a **step-up** transformer; fewer makes a **step-down**. The transformer **cannot work on direct current**, because a steady current gives a steady flux and a steady flux induces nothing — which is precisely why the national grid is alternating. Real transformers lose energy four ways: **heat in the windings** (I²R, reduced with thicker copper), **eddy currents in the core** (reduced by laminating), **hysteresis** — the energy spent turning the domains over and over (reduced by using soft iron or a silicon steel), and **flux leakage** (reduced by winding the secondary over the primary on a closed core); a large power transformer still reaches 98 or 99 % efficiency. The **grid** uses all of this: the generator at Mount Coffee produces at about 11 kV; a step-up transformer raises it to 132 or 225 kV for transmission — the CLSG line that links Côte d'Ivoire, Liberia, Sierra Leone and Guinea runs at 225 kV — because for a given power P = VI, a hundred times the voltage means a hundredth of the current, and the loss in the cables is I²R, so the loss falls ten-thousandfold; substations step it down through 33 kV and 11 kV to the 120/240 V of the home, and the little transformer in a phone charger steps it down again to 5 V of direct current. A 240 V primary of 400 turns with a secondary of 40 turns gives 240 × 40 ÷ 400 = **24 V**; stepping 33 000 V down to 240 V with 160 secondary turns needs 160 × 33 000 ÷ 240 = **22 000 turns** on the primary."},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**State the law of magnetic poles**, describe how a magnet may be made and destroyed, and explain the domain theory",
      "**Sketch the field** of a bar magnet, of two poles and of a current-carrying wire, and name the rule used for the direction",
      "**Distinguish a motor from a generator**, and state Fleming's left-hand and right-hand rules with what each is for",
      "**Use F = BIL** and say when it applies",
      "**State Faraday's and Lenz's laws** and explain one demonstration of each",
      "**Use Eₛ ÷ Eₚ = Nₛ ÷ Nₚ = Iₚ ÷ Iₛ**, and explain why the grid transmits at high voltage",
      "**Give two losses in a transformer** and the remedy for each"
    ]}
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
    {q:"A transformer has 800 turns on the primary and 40 on the secondary and is connected to a 240 V supply. Find the secondary voltage and the secondary current if the primary takes 0.5 A, assuming 100 % efficiency.", steps:[
      "Eₛ = Eₚ × Nₛ ÷ Nₚ = 240 × 40 ÷ 800",
      "Iₛ = Iₚ × Nₚ ÷ Nₛ = 0.5 × 800 ÷ 40"
    ], a:"12 V; 10 A — a step-down transformer that multiplies the current"},
    {q:"A conductor 0.25 m long carrying 3 A lies at right angles to a magnetic field of flux density 0.4 T. Find the force on it.", steps:[
      "F = BIL = 0.4 × 3 × 0.25"
    ], a:"0.3 N, in the direction given by Fleming's left-hand rule"},
    {q:"A transformer steps 240 V down to 12 V. Its primary takes 0.5 A while its secondary supplies 8 A. Find its efficiency.", steps:[
      "Input power = 240 × 0.5",
      "Output power = 12 × 8",
      "Efficiency = (output ÷ input) × 100 %"
    ], a:"Input 120 W, output 96 W, so 80 % efficient"},
    {q:"A step-down transformer changes 33 000 V to 240 V. If the secondary has 160 turns, find the number of turns on the primary.", steps:[
      "Nₚ = Nₛ × Eₚ ÷ Eₛ = 160 × 33 000 ÷ 240"
    ], a:"22 000 turns"},
    {q:"A magnetic flux of 4 × 10⁻³ Wb passes at right angles through an area of 0.02 m². Find the flux density.", steps:[
      "B = Φ ÷ A = 4 × 10⁻³ ÷ 0.02"
    ], a:"0.2 T"},
    {q:"State four ways of increasing the e.m.f. induced in a coil by a moving magnet.", steps:[
      "Move the magnet faster",
      "Use a stronger magnet",
      "Increase the number of turns on the coil",
      "Insert a soft iron core into the coil"
    ], a:"Faster motion, a stronger field, more turns and a soft iron core — each raises the rate of change of flux linkage"}
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
    {k:"h3", t:"The AC Waveform in Detail"},
    {k:"p", t:"An alternating current does not merely reverse; it follows a smooth **sine wave**. Starting at zero it rises to its **peak** value V₀, falls back through zero to the peak in the opposite direction, and returns to zero — one **cycle** — and it does this fifty or sixty times a second. The **period T** is the time of one cycle and **f = 1/T**; on Liberia's LEC network the supply is 120/240 V at **60 Hz**, so T = 1/60 ≈ **0.017 s**, while most of West Africa and Europe run at 220-240 V and **50 Hz** (T = 0.02 s). The peak voltage is not what the label quotes: what is quoted is the **r.m.s. (root-mean-square) value**, the steady direct voltage that would produce the **same heating effect** in the same resistor, and for a sine wave **V_rms = V₀ ÷ √2 = 0.707 V₀**, with the same relation for the current. A 240 V supply therefore reaches 240 × 1.41 ≈ **340 V** twice in every cycle, which is why insulation and switches are rated for the peak and not for the label, and why a shock from the mains is worse than its quoted voltage suggests. The r.m.s. value is what an AC meter reads and what is used in P = VI. Mains frequency also keeps time: an electric clock counts the cycles, so a 60 Hz clock run on a 50 Hz supply loses a sixth of an hour every hour — a detail that matters to anyone importing an appliance."},
    {k:"h3", t:"Alternating Current against Direct Current"},
    {k:"table", head:["Feature","Direct current (DC)","Alternating current (AC)"], rows:[
      ["Direction of flow","One way only","Reverses many times a second"],
      ["Source","Cell, battery, solar panel, a dynamo with a commutator","An alternator, the mains supply"],
      ["Graph against time","A straight line","A sine wave about zero"],
      ["Can its voltage be changed easily?","No — not without electronics","Yes — with a transformer, which is the decisive advantage"],
      ["Long-distance transmission","Poor at low voltage","Excellent: stepped up to cut the current and the I²R loss"],
      ["Chemical effects","Electroplating, electrolysing, charging a battery — DC is essential","No net chemical effect"],
      ["Motors","The DC motor, with a commutator and brushes","The induction motor, with no brushes — simpler and tougher"],
      ["Electronics","Every circuit inside needs DC","Rectified to DC at the charger or the power supply"],
      ["Danger","Both are lethal; AC of the same r.m.s. voltage is more likely to make the muscles clasp and to disturb the heart"]
    ]},
    {k:"h3", t:"Electrical Measuring Instruments"},
    {k:"table", head:["Instrument","What it measures","How it is connected","Its resistance"], rows:[
      ["Ammeter","Current, in amperes","In series with the component","Very low, so it does not reduce the current"],
      ["Voltmeter","Potential difference, in volts","In parallel across the component","Very high, so it draws almost no current"],
      ["Galvanometer","A very small current, and its direction","In series, often as the null detector in a bridge","Low to moderate"],
      ["Ohmmeter and multimeter","Resistance; and voltage, current and resistance in one","Across the component, with the supply switched off","Internal battery supplies a small current"],
      ["Wattmeter","Power","Current coil in series, voltage coil in parallel","—"],
      ["Energy meter","Energy in kilowatt-hours — the LEC meter on the wall","In the supply line","Very low"],
      ["Cathode-ray oscilloscope","A waveform: its peak voltage, its period and its shape","The signal to the Y input","Very high at the input"],
      ["Clamp meter","Current without breaking the circuit","Round the conductor","—"]
    ]},
    {k:"h3", t:"The Cathode-Ray Oscilloscope"},
    {k:"p", t:"Inside the evacuated glass tube an **electron gun** — a heater, a cathode, a control grid and accelerating anodes — fires a narrow beam of electrons at a **fluorescent screen**. Two pairs of plates steer it: the **Y plates** carry the signal to be examined, and the **X plates** carry a **time base** voltage that sweeps the beam steadily from left to right, so the picture unfolds in time. Read the trace from the two controls: with the **Y-gain** at 2 V/div, a wave reaching 3 divisions above the centre line has a **peak voltage of 6 V** (12 V peak to peak); with the **time base** at 5 ms/div, one complete cycle spanning 4 divisions has a **period of 20 ms** and a **frequency of 50 Hz**. A DC supply gives a flat line displaced from the centre; an AC supply gives a sine wave; the output of a rectifier gives a series of humps; a microphone gives an irregular trace. Because it draws almost no current and responds in microseconds, the oscilloscope is the physicist's window into a circuit — the modern digital version stores the trace, measures it and prints it."},
    {k:"h3", t:"Resistance, Reactance, Impedance and Resonance"},
    {k:"p", t:"In an AC circuit a **resistor** behaves as in DC, with the voltage and the current **in phase**. A **capacitor** charges and discharges every half cycle, so an alternating current appears to pass while a steady one cannot: the current **leads** the voltage by 90°, and the opposition it offers is the **capacitive reactance X_C = 1 ÷ (2πfC)**, which is large at low frequency and falls as the frequency rises — a capacitor passes the high notes and blocks the low, which is how it couples one amplifier stage to the next and smooths a rectified supply. An **inductor (coil)** opposes any change of current, so the current **lags** the voltage by 90°, and its **inductive reactance X_L = 2πfL** rises with frequency — the coil passes DC and chokes the high frequencies, which is how the choke smooths a supply and protects against surges. Together with the resistance they give the **impedance** of the circuit, **Z = √(R² + (X_L − X_C)²)**, and Ohm's law for AC becomes **V = IZ**, with the real power **P = V_rms I_rms cos φ**, where cos φ is the **power factor**. When X_L equals X_C the two cancel, Z falls to its smallest value R, the current reaches its greatest, and the circuit is in **resonance** at **f₀ = 1 ÷ (2π√(LC))**. A 0.5 H coil at 50 Hz has X_L = 2π × 50 × 0.5 = **157 Ω**; a 10 µF capacitor at the same frequency has X_C = 1 ÷ (2π × 50 × 10⁻⁵) = **318 Ω**; and a circuit with L = 0.1 H and C = 10 µF resonates at 1 ÷ (2π × 10⁻³) = **159 Hz**. Resonance is exactly how the radio selects one station: turning the tuning knob changes C until f₀ equals the frequency of the wanted transmitter, and that station's tiny signal produces a large response while all the others are rejected."},
    {k:"h3", t:"Producing Electricity for Liberia in Detail"},
    {k:"p", t:"Follow the chain from the river to the socket. At the **Mount Coffee hydroelectric plant** on the St. Paul River the reservoir holds water high; released down the **penstock**, its potential energy becomes kinetic energy; the water turns the **turbine**; the turbine turns the **alternator**, where a rotating magnetic field induces an alternating e.m.f. in the stator windings (electromagnetic induction); a **step-up transformer** raises the voltage for transmission; the lines carry it to the **substation**, where it is stepped down again; the **distribution** network takes it through the town; the **meter** on the wall counts the kilowatt-hours; and the house's consumer unit divides it between the lighting circuit and the socket circuits. Liberia's supply also comes from **heavy fuel oil and diesel plants**, from **solar mini-grids and home systems** in the counties, from small **hydro** schemes, and from the **CLSG interconnection** — the 225 kV line linking Côte d'Ivoire, Liberia, Sierra Leone and Guinea, which imports power when the river is low and exports it when the rains fill the reservoir. The reasons a lamp goes out are worth knowing: generation short of demand, a fault on a line, an overloaded transformer, an unpaid bill, or a fault inside the house. What the learner can control is the demand side: **LED lamps** instead of filament (a tenth of the power for the same light), switching off what is not in use, ironing and pumping in one session rather than ten, a **solar water heater** instead of an electric one, and appliances bought for the right voltage and frequency."},
    {k:"h3", t:"Semiconductors, Doping and Band Theory"},
    {k:"p", t:"Materials are classified by their **energy bands**: in a **conductor** the valence band and the conduction band overlap, so electrons move freely; in an **insulator** the gap between them is very large, so almost no electron can cross; in a **semiconductor** the gap is small enough that heat or light lifts a few electrons across, leaving behind a positively charged vacancy called a **hole**. Pure — **intrinsic** — silicon has four valence electrons bonded to four neighbours; at room temperature a few bonds break, giving equal numbers of free electrons and holes, and its conductivity **rises with temperature** and with light, which is the opposite of a metal. **Doping** deliberately adds about one impurity atom in a million: a **pentavalent** atom such as arsenic, phosphorus or antimony brings a fifth electron that is easily freed, giving **n-type** material whose majority carriers are electrons; a **trivalent** atom such as boron, gallium or indium leaves a vacancy, giving **p-type** material whose majority carriers are holes. Both still carry the other kind of carrier as a minority, and both remain electrically neutral as a whole."},
    {k:"h3", t:"The p–n Junction Diode and Rectification"},
    {k:"p", t:"Where p-type and n-type meet, electrons cross into the p-side and fill holes, leaving a thin **depletion layer** of fixed ions that acts as a barrier. Connect the p-side to the **positive** of a supply and the n-side to the negative — **forward bias** — and the barrier narrows: once the applied voltage exceeds about **0.6 V for silicon** (0.3 V for germanium) current flows freely. Reverse the connections — **reverse bias** — and the layer widens, so almost no current flows until the breakdown voltage is reached. The **diode** is therefore a one-way valve, and it is the basis of **rectification**: converting alternating current to direct. **Half-wave rectification** uses a single diode and passes only one half of each cycle, giving a pulsing output; **full-wave rectification** uses four diodes in a **bridge** (or two with a centre-tapped transformer) and passes both halves, each redirected the same way. A **smoothing capacitor** across the output charges to the peak and discharges slowly between the pulses, filling the gaps, and a **regulator** holds the result steady — that little chain is the whole of the charger that fills a phone from a Monrovia socket. The **light-emitting diode (LED)** emits light when electrons recombine with holes, and does it so efficiently that it has replaced the filament lamp across the country; the **Zener diode** works in reverse breakdown to hold a fixed voltage; the **photodiode** and the **solar cell** run the junction the other way, letting light create the carriers that drive a current."},
    {k:"h3", t:"The Transistor, the Integrated Circuit and the Sensors"},
    {k:"table", head:["Device","What it does","Where it is used"], rows:[
      ["Diode","Passes current one way only","Rectifiers, protection against reversed polarity, indicator lamps"],
      ["LED","Emits light when forward biased","Lamps, torches, indicator lights, the television screen"],
      ["Zener diode","Holds a steady voltage in reverse breakdown","Voltage references, the regulator of a power supply"],
      ["Bipolar transistor (NPN or PNP)","A small base current controls a much larger collector current","Amplifiers in the radio and the hearing aid, switches driving a relay or an LED"],
      ["Field-effect transistor (FET)","A voltage on the gate controls the current, drawing almost no input current","The input stage of instruments, the memory cell, power switching"],
      ["Thermistor (NTC)","Its resistance falls as the temperature rises","Thermostats, fire alarms, the temperature probe of a vaccine refrigerator"],
      ["LDR","Its resistance falls in bright light","The automatic street lamp, the camera's light meter, the burglar alarm"],
      ["Solar cell","A large-area photodiode that converts light to electricity","The panels on clinics and schools, the solar lantern, the phone-charging kiosk"],
      ["Integrated circuit","Millions of transistors on one chip","The phone's processor, the memory, the solar charge controller, the inverter's control"]
    ]},
    {k:"p", t:"The **bipolar transistor** has three terminals — the **emitter**, the **base** and the **collector**. A small current into the base controls a far larger current from collector to emitter, so the device **amplifies** (the weak signal from a radio aerial becomes sound) and **switches** (a few milliamps from a sensor turn on a relay that starts a pump). Switched on and off millions of times a second in patterns, transistors store and process information — the **integrated circuit** — which is what makes the mobile phone, the solar charge controller, the digital multimeter and the hospital monitor possible in a country with no component factory. Around them sit the passive parts: **resistors** to set currents and divide voltages, **capacitors** to smooth and time, **inductors** to choke and to tune. The **inverter** of a solar home system is the clearest example of the whole subject working together: the panel gives DC, the controller regulates it with transistors, the battery stores it, and the inverter switches it on and off sixty times a second through a transformer to make the 120 V AC that runs the fan."},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Distinguish peak from r.m.s. values** and use V_rms = V₀ ÷ √2",
      "**Compare AC with DC** in a table, giving the transformer as the decisive advantage of AC",
      "**Name an instrument** for each quantity and say how it is connected and what resistance it should have",
      "**Distinguish resistance from reactance and impedance**, and use Z = √(R² + (X_L − X_C)²)",
      "**Explain resonance** and its use in tuning a radio",
      "**Read a CRO trace** — peak voltage from the Y-gain and divisions, period from the time base, frequency from the period",
      "**Explain doping**, n-type and p-type, the p–n junction and forward and reverse bias",
      "**Describe half-wave and full-wave rectification** with smoothing, and state two uses of the transistor"
    ]}
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
    {q:"An AC supply has a peak voltage of 340 V. Find its r.m.s. value, and the peak current if the r.m.s. current is 5 A.", steps:[
      "V_rms = V₀ ÷ √2 = 340 ÷ 1.414",
      "I₀ = I_rms × √2 = 5 × 1.414"
    ], a:"About 240 V r.m.s.; about 7.1 A peak"},
    {q:"Find the reactance of (a) a 0.5 H inductor and (b) a 10 µF capacitor at 50 Hz.", steps:[
      "X_L = 2πfL = 2 × 3.14 × 50 × 0.5",
      "X_C = 1 ÷ (2πfC) = 1 ÷ (2 × 3.14 × 50 × 10⁻⁵)"
    ], a:"About 157 Ω inductive; about 318 Ω capacitive"},
    {q:"Find the resonant frequency of a circuit containing a 0.1 H inductor and a 10 µF capacitor.", steps:[
      "f₀ = 1 ÷ (2π√(LC))",
      "LC = 0.1 × 10⁻⁵ = 10⁻⁶, so √(LC) = 10⁻³",
      "f₀ = 1 ÷ (2π × 10⁻³)"
    ], a:"About 159 Hz"},
    {q:"A CRO trace reaches 3 divisions above the centre line with the Y-gain at 2 V/div, and one complete cycle spans 4 divisions with the time base at 5 ms/div. Find the peak voltage, the period and the frequency.", steps:[
      "Peak voltage = 3 × 2",
      "Period T = 4 × 5 ms",
      "f = 1 ÷ T"
    ], a:"6 V peak (12 V peak to peak); T = 20 ms; f = 50 Hz"},
    {q:"An AC circuit takes 2 A r.m.s. at 240 V with a power factor of 0.8. Find the real power consumed.", steps:[
      "P = V_rms × I_rms × cos φ",
      "P = 240 × 2 × 0.8"
    ], a:"384 W"},
    {q:"A coil has a resistance of 30 Ω and an inductive reactance of 40 Ω. Find its impedance and the current it takes from a 240 V supply.", steps:[
      "Z = √(R² + X_L²) = √(900 + 1600)",
      "I = V ÷ Z = 240 ÷ 50"
    ], a:"50 Ω; 4.8 A"},
    {q:"The LEC supply is 60 Hz. Find the period of one cycle, and state what would happen to a 50 Hz electric clock run from it.", steps:[
      "T = 1 ÷ f = 1 ÷ 60",
      "A cycle-counting clock runs fast when the frequency is higher than it was built for"
    ], a:"T ≈ 0.017 s; the clock gains one second in every five, running a fifth fast"}
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
    {k:"h3", t:"The Atom in Detail — the Models and the Evidence for Them"},
    {k:"table", head:["Scientist and year","The model","What it explained","Where it failed"], rows:[
      ["Dalton, 1803","The atom is a tiny indivisible sphere; atoms of one element are identical","The laws of chemical combination and the conservation of mass","The discovery of the electron, the proton and isotopes"],
      ["J. J. Thomson, 1897","The plum-pudding atom: electrons embedded in a sphere of positive charge","The neutrality of matter and the existence of the electron, which he found in cathode rays","Rutherford's scattering experiment showed the positive charge is concentrated, not spread"],
      ["Rutherford, 1911","A tiny dense positively charged nucleus with electrons moving round it, mostly empty space","Why most alpha particles passed straight through gold foil, why a few were deflected and why about one in twenty thousand bounced back","A circling electron should radiate energy and spiral into the nucleus, and the spectrum should be continuous — it is not"],
      ["Bohr, 1913","Electrons occupy fixed energy levels (shells) and jump between them, absorbing or emitting a photon of energy hf = E₂ − E₁","The line spectrum of hydrogen and the stability of the atom","The spectra of atoms with more than one electron"],
      ["Quantum mechanics, 1926 onward","Electrons are described by wave functions; an orbital is a region of probability, not a path","The whole of chemistry, the periodic table and the behaviour of solids","It gives probabilities, not certainties — which is what the uncertainty principle says nature is"]
    ]},
    {k:"table", head:["Particle","Relative mass","Mass in kilograms","Charge","Where it is"], rows:[
      ["Proton","1","1.67 × 10⁻²⁷ kg","+1 (1.6 × 10⁻¹⁹ C)","In the nucleus"],
      ["Neutron","1","1.67 × 10⁻²⁷ kg","0","In the nucleus"],
      ["Electron","1/1836","9.11 × 10⁻³¹ kg","−1 (1.6 × 10⁻¹⁹ C)","In the shells around the nucleus"]
    ]},
    {k:"p", t:"Almost all the mass of an atom is in its nucleus, which is about 10⁻¹⁵ m across while the atom itself is about 10⁻¹⁰ m — a ratio of a hundred thousand. The **atomic number Z** counts the protons and therefore defines the element; the **mass number A** counts protons and neutrons together; and a neutral atom carries Z electrons. In nuclide notation the mass number is written above the atomic number, both to the left of the element symbol, so uranium-238 is ²³⁸₉₂U, with **92 protons, 92 electrons and 146 neutrons**; sodium-23 is ²³₁₁Na with 11 protons, 12 neutrons and 11 electrons, and the sodium ion Na⁺ has lost one electron and so has 10. The number of neutrons is always **A − Z** — the first thing to write in any nuclear question."},
    {k:"h3", t:"Isotopes and Relative Atomic Mass"},
    {k:"p", t:"**Isotopes** are atoms of the same element with the same number of protons but different numbers of neutrons — the same Z, a different A. They behave identically in chemistry (the electrons are the same) but differ in mass and, sometimes, in stability: hydrogen has **protium** ¹H, **deuterium** ²H and the radioactive **tritium** ³H; carbon has ¹²C, ¹³C and the radioactive ¹⁴C used in dating; chlorine has ³⁵Cl (75 %) and ³⁷Cl (25 %); uranium has the fissile ²³⁵U (0.7 % of natural uranium) and ²³⁸U. The **relative atomic mass** is the weighted average of the isotopes, which is why chlorine's is (35 × 0.75) + (37 × 0.25) = **35.5** and not a whole number — and why the mass spectrometer, which separates ions by their mass-to-charge ratio, is the instrument that measures it. Isotopes of the same element are chemically alike, so a radioactive isotope can be used as a **tracer** to follow an element through a plant, a body or a pipe without changing its behaviour."},
    {k:"h3", t:"The Electron and its Properties"},
    {k:"p", t:"The electron carries a charge of **−1.6 × 10⁻¹⁹ C** — the smallest free charge in nature, measured by Millikan's oil-drop experiment — and a mass of **9.11 × 10⁻³¹ kg**, about 1/1836 of the proton's, so its motion is easily changed by a field. Thomson identified it in 1897 as the particle of the **cathode rays**, and the properties of those rays are the properties of a stream of fast electrons: they travel in **straight lines** (casting a sharp shadow of a cross placed in their path), they carry **energy and momentum** (a small paddle wheel is turned along the tube), they are deflected by **electric and magnetic fields** in the direction that proves a **negative** charge, they produce **fluorescence** on a zinc sulfide screen, they **ionise** the gas they pass through, they travel in a **vacuum**, and when they are stopped suddenly by a heavy metal they produce **X-rays**. **Thermionic emission** is the boiling off of electrons from a heated cathode — the source of the beam in the cathode-ray oscilloscope, in the old radio valve and in the X-ray tube, where the electrons are accelerated by tens of thousands of volts onto a tungsten target. The same emission, controlled by a grid, is what made amplification possible and so made broadcasting possible."},
    {k:"h3", t:"Radioactivity in Detail — the Three Radiations Compared"},
    {k:"table", head:["Property","Alpha particle α","Beta particle β","Gamma ray γ"], rows:[
      ["What it is","A helium nucleus, ⁴₂He","A fast electron emitted from the nucleus, ⁰₋₁e","An electromagnetic wave of very short wavelength, a photon"],
      ["Charge","+2","−1","0"],
      ["Mass (relative)","4","1/1836","None"],
      ["Typical speed","About one tenth of the speed of light","Up to 0.99 of the speed of light","The speed of light"],
      ["Ionising power","Very high","Moderate","Low"],
      ["Penetrating power","A few centimetres of air; stopped by paper or the outer skin","A few metres of air; stopped by a few millimetres of aluminium","Hundreds of metres of air; greatly reduced only by thick lead or concrete"],
      ["Deflected by an electric or magnetic field","Slightly, toward the negative side (it is heavy)","Strongly, toward the positive side","Not at all"],
      ["Greatest danger","Inside the body — if swallowed or inhaled, it damages the tissue around it","Both inside and outside","Outside the body — it penetrates to the organs"]
    ]},
    {k:"p", t:"Radioactivity is the **spontaneous** disintegration of an unstable nucleus, and it is unaffected by temperature, pressure or chemical combination — nothing you can do in the laboratory speeds it up or slows it down. In every nuclear equation the **mass numbers** and the **atomic numbers** balance separately, which is the check to make: ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He (238 = 234 + 4, 92 = 90 + 2); ¹⁴₆C → ¹⁴₇N + ⁰₋₁e (14 = 14 + 0, 6 = 7 − 1); and a gamma ray often follows, because the daughter nucleus is left excited and sheds the surplus energy without changing its identity. **Natural radioactivity** comes from uranium, radium, thorium, radon and potassium-40 in rocks and in our own bodies; **artificial radioactivity** is made by bombarding a nucleus with neutrons or alpha particles — Rutherford's ¹⁴₇N + ⁴₂He → ¹⁷₈O + ¹₁H was the first deliberate transmutation, turning nitrogen into oxygen."},
    {k:"h3", t:"Half-life, Decay and Dating"},
    {k:"p", t:"The **half-life** is the time taken for half the nuclei in a sample to decay, or for its **activity** (the count rate, in becquerels, one disintegration per second) to fall to half. Decay is **random**: no one can say which nucleus will go next, but with a great number of them the average is exact, and the count falls by the same fraction in each equal interval — an **exponential** curve that never quite reaches zero. A source of 640 counts/s with a half-life of 3 hours reads 320 after 3 hours, 160 after 6, 80 after 9 and **40 after 12 hours**; to reach 20 counts/s it takes five half-lives, **15 hours**. In general the fraction remaining after time t is (½)^(t/T). **Carbon-14 dating** uses the fact that living matter exchanges carbon with the air and so holds a fixed proportion of the radioactive ¹⁴C (half-life 5730 years); when the organism dies the exchange stops and the ¹⁴C decays, so charcoal from a campfire with a quarter of the activity of living wood is two half-lives old — about **11 500 years**. Rocks are dated with uranium-238 (4.5 billion years) or potassium-40. Every measurement must have the **background count** subtracted: the radon from the ground, cosmic rays, the rocks of the building, the potassium in food and the medical X-rays are always present, typically giving a few tens of counts a minute on a bare Geiger counter. Detection is by the **Geiger-Müller tube and counter**, the **cloud chamber** (alpha tracks are short and thick, beta tracks thin and wandering, gamma rays show only the electrons they knock out), the **photographic film badge** worn by radiographers, the **scintillation counter** and the **spark chamber**."},
    {k:"h3", t:"Radiation and the Human Body; the Rules of Safety"},
    {k:"p", t:"Ionising radiation knocks electrons out of the molecules it passes through, breaking the bonds of DNA and of the proteins around it. A small dose is repaired; a large one kills cells outright, giving **radiation burns** and **acute radiation sickness** — nausea, hair loss, a collapse of the blood counts and infection; a moderate dose delivered over years raises the risk of **cancer** later in life, of **cataracts** and of **genetic damage** to a person's children. The embryo is the most sensitive tissue of all, which is why an X-ray in pregnancy is avoided unless it is essential. The three rules of protection are **time, distance and shielding**: keep the exposure short, keep as far away as the work allows (the intensity falls with the square of the distance), and put the right material between — a sheet of paper or a few centimetres of air stops alpha particles, a few millimetres of aluminium stops beta, and thick lead or concrete is needed for gamma. In practice: handle sources with tongs or forceps, never with the fingers; store them in a lead container marked with the **trefoil** symbol; work behind a screen; never eat, drink or pipette by mouth in the laboratory; monitor the dose with a film badge; wash the hands afterwards; and obey the controlled-area signs. The medical use is always a balance — the information a scan gives against the dose it costs — and the same isotope that causes cancer in one arrangement treats it in another."},
    {k:"h3", t:"Fission and Fusion Compared"},
    {k:"table", head:["Feature","Fission","Fusion"], rows:[
      ["What happens","A heavy nucleus splits into two lighter nuclei of roughly equal mass, with two or three neutrons and a great deal of energy","Two light nuclei join to make a heavier one, with a neutron and even more energy per kilogram"],
      ["Typical fuel","Uranium-235, plutonium-239","Deuterium and tritium — the isotopes of hydrogen"],
      ["Conditions needed","A slow (thermal) neutron and a critical mass","Temperatures of tens of millions of degrees and enormous pressure, to overcome the repulsion of the nuclei"],
      ["Typical equation","²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3 ¹₀n + energy","²₁H + ³₁H → ⁴₂He + ¹₀n + energy"],
      ["Products","Two radioactive fragments and long-lived waste","Helium and a neutron; little long-lived waste"],
      ["Where it is controlled","In the nuclear reactor","In the sun and the stars; on Earth it is not yet controlled for power"],
      ["Where it is uncontrolled","The atomic bomb","The hydrogen bomb, which is started by a fission bomb"],
      ["Energy released per kilogram of fuel","About a million times that of coal","Several times that of fission"]
    ]},
    {k:"p", t:"The **chain reaction** is what makes fission useful: each split releases two or three neutrons, each of which can split another nucleus, so the reaction sustains itself if at least one neutron per fission goes on to cause another. Below the **critical mass** too many neutrons escape and the reaction dies; above it, it runs away. A reactor controls it with a **moderator** (graphite or heavy water) that slows the neutrons to the speed at which uranium-235 captures them best, **control rods** of boron or cadmium that absorb neutrons and are withdrawn or inserted to set the power, a **coolant** (water, gas or liquid sodium) that carries the heat to the steam turbines, and metres of **concrete shielding**. The **fusion** that powers the sun converts about 600 million tonnes of hydrogen every second at 15 million K; on Earth the difficulty is holding a gas that hot, which no container can do, so the attempts use magnetic bottles (the tokamak) or lasers squeezing a pellet. Its attractions are great — the fuel is in sea water, the waste is short-lived and there is no chain reaction to run away — which is why the research continues. Liberia has no nuclear plant; its resources are the rivers, the sun, the biomass and imported fuel, but the argument for and against nuclear power is a standard examination question and needs both sides."},
    {k:"h3", t:"Mass and Energy: E = mc²"},
    {k:"p", t:"Einstein's relation says mass is energy: **E = mc²**, with c = 3 × 10⁸ m/s. Converting just **2 g** of matter completely would release E = 0.002 × 9 × 10¹⁶ = **1.8 × 10¹⁴ J**, about fifty million kilowatt-hours — which is why a kilogram of nuclear fuel out-produces a mountain of coal. In a nucleus the effect is measurable: the mass of a nucleus is always **less** than the sum of the masses of its separate protons and neutrons, and the missing mass, the **mass defect**, is the **binding energy** that holds it together. The binding energy per nucleon is small for the very light elements, rises to a maximum near **iron (A = 56)** and falls slowly for the heavy ones — which is the whole explanation of nuclear energy: **fusing** light nuclei moves them up the curve toward iron, and **splitting** heavy nuclei also moves the fragments toward iron, and both release the difference. One atomic mass unit corresponds to 931 MeV, and nuclear energies are usually quoted in **electronvolts**, one eV being the energy an electron gains falling through 1 V, equal to 1.6 × 10⁻¹⁹ J."},
    {k:"h3", t:"The Uses of Radioisotopes"},
    {k:"table", head:["Field","Isotope","The use"], rows:[
      ["Medicine","Cobalt-60","Radiotherapy — the gamma rays destroy a tumour; also sterilising equipment"],
      ["Medicine","Iodine-131","Diagnosing and treating disease of the thyroid, which concentrates iodine"],
      ["Medicine","Technetium-99m","A short-lived tracer for imaging the heart, bones and kidneys"],
      ["Industry","Iridium-192","Gamma radiography to find flaws in a weld or a casting"],
      ["Industry","Americium-241","The ionising source in the household smoke detector"],
      ["Industry","Beta sources","Gauges controlling the thickness of paper, plastic sheet and metal foil as it is made"],
      ["Agriculture","Cobalt-60","Irradiating grain and fruit to kill pests and delay spoilage"],
      ["Agriculture","Phosphorus-32","Tracing how a fertiliser is taken up by the roots"],
      ["Agriculture","Sterile males","Releasing sterilised insects to collapse a pest population without pesticide"],
      ["Archaeology","Carbon-14","Dating charcoal, bone, wood and cloth up to about 50 000 years old"],
      ["Geology","Uranium-238, potassium-40","Dating rocks and the age of the Earth"],
      ["Research","Tracers generally","Following a reaction step by step in chemistry and in the living body"]
    ]},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**Describe Rutherford's experiment** and what each observation proved",
      "**State the properties of the electron** and of the cathode rays",
      "**Complete a nuclear equation**, balancing the mass numbers and the atomic numbers separately",
      "**Compare alpha, beta and gamma** in a table — nature, charge, penetration, ionising power and deflection",
      "**Define half-life** and use (½)^(t/T), remembering to subtract the background count",
      "**Distinguish fission from fusion** and describe the chain reaction with the moderator and the control rods",
      "**Give uses of radioisotopes** in medicine, industry and agriculture, and the safety precautions with a reason for each"
    ]}
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
    {q:"Write the number of protons, neutrons and electrons in ²³⁸₉₂U and in the ion ²³₁₁Na⁺.", steps:[
      "Protons = Z; neutrons = A − Z; electrons = Z for a neutral atom, Z − 1 for a singly positive ion",
      "Uranium-238: Z = 92, A − Z = 146",
      "Sodium-23 ion: Z = 11, A − Z = 12, electrons = 11 − 1"
    ], a:"²³⁸U: 92 protons, 146 neutrons, 92 electrons. ²³Na⁺: 11 protons, 12 neutrons, 10 electrons"},
    {q:"A radioactive source has an activity of 640 counts per second and a half-life of 3 hours. Find its activity after 12 hours, and the time taken to fall to 20 counts per second.", steps:[
      "12 hours is 4 half-lives: 640 → 320 → 160 → 80 → 40",
      "20 counts/s is 5 half-lives: 5 × 3 hours"
    ], a:"40 counts/s after 12 hours; 15 hours to reach 20 counts/s"},
    {q:"Find the energy released if 2 g of matter is completely converted into energy (c = 3 × 10⁸ m/s).", steps:[
      "E = mc²",
      "E = 0.002 × (3 × 10⁸)² = 0.002 × 9 × 10¹⁶"
    ], a:"1.8 × 10¹⁴ J"},
    {q:"Chlorine consists of 75 % ³⁵Cl and 25 % ³⁷Cl. Find its relative atomic mass.", steps:[
      "Weighted average = (35 × 0.75) + (37 × 0.25)",
      "26.25 + 9.25"
    ], a:"35.5"},
    {q:"Complete the equations: (a) ²²⁶₈₈Ra → ? + ⁴₂He; (b) ¹⁴₆C → ¹⁴₇N + ?", steps:[
      "(a) Balance A: 226 − 4 = 222; balance Z: 88 − 2 = 86, which is radon",
      "(b) A is unchanged and Z rises by 1, so a beta particle is emitted"
    ], a:"(a) ²²²₈₆Rn; (b) ⁰₋₁e, a beta particle"},
    {q:"A piece of ancient charcoal has one quarter of the carbon-14 activity of living wood. Estimate its age (half-life of carbon-14 = 5730 years).", steps:[
      "One quarter remaining means two half-lives",
      "Age = 2 × 5730"
    ], a:"About 11 460 years"},
    {q:"Show that the beta decay of a neutron, n → p + e⁻ + ν-bar, obeys the conservation of charge and of baryon number.", steps:[
      "Charge: 0 on the left; +1 − 1 + 0 = 0 on the right",
      "Baryon number: 1 on the left; 1 + 0 + 0 = 1 on the right"
    ], a:"Both are conserved, so the decay can occur — and it does, inside every nucleus that emits beta radiation"}
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
    {k:"rule"},
    {k:"h3", t:"Quantum Mechanics and the Uncertainty Principle in Detail"},
    {k:"p", t:"The small world refuses to be described by the rules of the large one. **Wave-particle duality** is the first shock: light behaves as a wave in interference, diffraction and polarisation, and as a stream of particles in the photoelectric effect; and matter does the same — de Broglie proposed that a particle of momentum p has a wavelength **λ = h ÷ p**, and electrons fired at a crystal diffract exactly as X-rays do, with a wavelength for an electron at 10⁶ m/s of 6.6 × 10⁻³⁴ ÷ (9.1 × 10⁻³¹ × 10⁶) = **7.3 × 10⁻¹⁰ m**, comparable with the spacing of atoms, which is why the **electron microscope** resolves details a light microscope never can. The second shock is **Heisenberg's uncertainty principle**: it is impossible to measure the position and the momentum of a particle simultaneously with unlimited precision, **Δx · Δp ≥ h ÷ 4π**. This is not a fault of the instruments but a property of nature — to locate an electron precisely you must use short-wavelength, high-energy radiation, and that radiation changes the electron's momentum. The consequence is that the electron cannot be pictured as a planet on an orbit: it is described by a **wave function**, whose square gives the **probability** of finding it in a region, and the region is called an **orbital**. **Schrödinger's equation** gives those wave functions, and the allowed states are labelled by four **quantum numbers**: the **principal quantum number n** (the shell and the main energy, n = 1, 2, 3…), the **orbital (azimuthal) quantum number l** (the shape of the orbital, from 0 to n − 1, called s, p, d, f), the **magnetic quantum number m_l** (which orbital of that shape, from −l to +l) and the **spin quantum number m_s** (+½ or −½). The **Pauli exclusion principle** — no two electrons in an atom may share all four quantum numbers — is what forces electrons into successive shells and subshells, and therefore what makes the periodic table, chemistry, and every solid thing possible."},
    {k:"h3", t:"Shells, Subshells and the Electron Configuration of the Light Elements"},
    {k:"table", head:["Shell","Name","Subshells it contains","Maximum electrons (2n²)"], rows:[
      ["n = 1","K","1s","2"],
      ["n = 2","L","2s, 2p","8"],
      ["n = 3","M","3s, 3p, 3d","18 (but only 8 are used before the 4s fills)"],
      ["n = 4","N","4s, 4p, 4d, 4f","32"]
    ]},
    {k:"table", head:["Element","Z","Configuration by shells","s, p notation","Group and valency"], rows:[
      ["Hydrogen","1","1","1s¹","1 electron to lose or share"],
      ["Helium","2","2","1s²","Group 0 — inert, a full first shell"],
      ["Lithium","3","2, 1","1s² 2s¹","Group I — valency 1"],
      ["Beryllium","4","2, 2","1s² 2s²","Group II — valency 2"],
      ["Boron","5","2, 3","1s² 2s² 2p¹","Group III — valency 3"],
      ["Carbon","6","2, 4","1s² 2s² 2p²","Group IV — valency 4, the element of life"],
      ["Nitrogen","7","2, 5","1s² 2s² 2p³","Group V — valency 3"],
      ["Oxygen","8","2, 6","1s² 2s² 2p⁴","Group VI — valency 2"],
      ["Fluorine","9","2, 7","1s² 2s² 2p⁵","Group VII — valency 1, the most reactive non-metal"],
      ["Neon","10","2, 8","1s² 2s² 2p⁶","Group 0 — inert"],
      ["Sodium","11","2, 8, 1","1s² 2s² 2p⁶ 3s¹","Group I — valency 1; the one outer electron is easily lost"],
      ["Magnesium","12","2, 8, 2","…3s²","Group II — valency 2"],
      ["Aluminium","13","2, 8, 3","…3s² 3p¹","Group III — valency 3"],
      ["Chlorine","17","2, 8, 7","…3s² 3p⁵","Group VII — valency 1; it wants one electron"],
      ["Argon","18","2, 8, 8","…3s² 3p⁶","Group 0 — inert"],
      ["Potassium","19","2, 8, 8, 1","…4s¹","Group I — the 4s fills before the 3d"],
      ["Calcium","20","2, 8, 8, 2","…4s²","Group II — valency 2"]
    ]},
    {k:"p", t:"The configuration **is** the periodic table: the number of occupied shells is the period, the number of outer electrons is the group (for the main groups), and the drive to a full outer shell — eight electrons, or two for the first shell — is what makes atoms bond, gives each element its valency, and explains why sodium and chlorine combine one to one while magnesium and chlorine combine one to two. Metals have one, two or three outer electrons and lose them; non-metals have five, six or seven and gain or share; the noble gases have full shells and do neither, which is why they are unreactive and why the transition metals fill the inner 3d subshell while the outer 4s stays much the same — the reason they have several valencies and make coloured compounds."},
    {k:"h3", t:"Particle Accelerators in Detail"},
    {k:"table", head:["Accelerator","Shape","How the particle gains energy","A feature"], rows:[
      ["Linear accelerator (linac)","A straight evacuated tube","A series of drift tubes connected to an alternating supply; the particle is accelerated across each gap, and the tubes grow longer as it speeds up so that it always arrives in step","Used to produce X-rays for radiotherapy and as the first stage of a larger machine"],
      ["Cyclotron","Two D-shaped electrodes (dees) between the poles of a large magnet","A constant magnetic field bends the particle into a circle while an alternating voltage between the dees accelerates it at each crossing, so the path spirals outward until the particle emerges","Compact and cheap; limited because a very fast particle gains mass and falls out of step"],
      ["Synchrotron","A ring of fixed radius","Magnets and radio-frequency cavities are stepped up in time with the particle's energy, keeping it on the same circle","The largest machines — the 27 km Large Hadron Collider at CERN — are synchrotrons"],
      ["Collider","A synchrotron with two beams meeting head on","Two beams are accelerated in opposite directions and made to collide","Nearly all the energy goes into the collision, so new particles are created efficiently"],
      ["Betatron","A ring","A changing magnetic field induces an electric field that accelerates the electrons","Used for high-energy electrons in therapy and radiography"]
    ]},
    {k:"p", t:"Why accelerate at all? Two reasons: to give a charged particle enough kinetic energy to overcome the repulsion of a nucleus and reach it, and — through E = mc² — to turn energy into **mass**, creating particles that do not exist in ordinary matter. The higher the energy, the smaller the distance that can be probed, so an accelerator is a microscope whose resolution grows with its energy. The **detectors** record what comes out: the **cloud chamber** and the **bubble chamber** show tracks of droplets or bubbles along the path of a charged particle, the **spark chamber** and the **wire chamber** give electronic coordinates, the **scintillation counter** times the particle and measures its energy, the **calorimeter** absorbs it and totals the energy, and the **semiconductor tracker** follows it through a magnetic field so that the curvature of the path gives its momentum and the direction of the curve its charge. A thick short track is a heavy slow particle; a thin long one a light fast one; a fork in the tracks is a decay or a collision. In 2012 the Large Hadron Collider found the **Higgs boson**, the particle of the field that gives matter its mass — the last piece missing from the standard model."},
    {k:"h3", t:"The Chart of Subatomic Particles"},
    {k:"p", t:"Particles divide first by whether they feel the **strong** interaction. **Hadrons** do, and are built of quarks: **baryons** are three quarks — the **proton** (uud) and the **neutron** (udd), from which every nucleus is made, together with the heavier lambda and sigma particles produced in collisions — while **mesons** are a quark and an antiquark, the **pions** and **kaons** that carry the strong force between the nucleons and hold the nucleus together. **Leptons** do not feel the strong force: the **electron**, its heavier brothers the **muon** and the **tau**, and the three almost massless **neutrinos**, one for each. Every particle has an **antiparticle** of the same mass and opposite charge — the **positron** (e⁺), discovered by Anderson in the cosmic rays in 1932, the antiproton, the antineutron; when a particle meets its antiparticle they **annihilate** into gamma photons, and a gamma photon of sufficient energy can create a **pair**. Antimatter is made routinely in the accelerator and used in the hospital's **PET scanner**, where the positrons from an injected isotope annihilate and give two gamma rays in opposite directions that locate the source."},
    {k:"table", head:["Quark","Charge","Where it is found"], rows:[
      ["Up (u)","+2/3","Two in the proton, one in the neutron"],
      ["Down (d)","−1/3","One in the proton, two in the neutron"],
      ["Charm (c)","+2/3","Heavier particles made in accelerators"],
      ["Strange (s)","−1/3","The kaon and the lambda particle"],
      ["Top (t)","+2/3","The heaviest quark, found at Fermilab in 1995"],
      ["Bottom (b)","−1/3","The B mesons used to study matter-antimatter asymmetry"]
    ]},
    {k:"p", t:"The proton's charge is 2/3 + 2/3 − 1/3 = **+1** and the neutron's is 2/3 − 1/3 − 1/3 = **0**, exactly as observed. Quarks are never found alone — **confinement** — because the strong force between them does not fall off with distance, so pulling them apart costs enough energy to create new quark pairs instead. The weak interaction changes one quark into another, and that is what beta decay really is: a **down quark turns into an up quark**, emitting an electron and an antineutrino, so the neutron becomes a proton."},
    {k:"h3", t:"The Four Basic Interactions"},
    {k:"table", head:["Interaction","What it acts on","Relative strength","Range","Exchange particle","What it does"], rows:[
      ["Strong nuclear","Quarks and the hadrons built from them","1 (the strongest)","About 10⁻¹⁵ m","Gluon","Holds the quarks in a proton and the nucleons in a nucleus, against the repulsion of the protons"],
      ["Electromagnetic","All charged particles","About 1/137","Infinite","Photon","Holds the electrons in the atom, makes chemistry, carries light, drives every electric circuit"],
      ["Weak nuclear","Quarks and leptons","About 10⁻⁶","Below 10⁻¹⁸ m","W and Z bosons","Changes one kind of quark or lepton into another — beta decay, and the first step of the sun's fusion"],
      ["Gravitational","All mass and energy","About 10⁻³⁹ (by far the weakest)","Infinite","The graviton — not yet detected","Holds the planets, the stars and the galaxies; dominates at large scale because it only attracts"]
    ]},
    {k:"p", t:"Unification is the programme of modern physics. Maxwell showed that electricity and magnetism are one **electromagnetic** interaction; in the 1960s Glashow, Salam and Weinberg showed that the electromagnetic and the weak are two faces of a single **electroweak** interaction, confirmed when the W and Z bosons were found at CERN in 1983; a **grand unified theory** would add the strong force, and a theory of **quantum gravity** would add the fourth — the two pillars of physics, quantum mechanics and general relativity, still do not fit together. The **Higgs field**, whose boson was found in 2012, explains why the particles have mass at all. The standard model works superbly and yet is incomplete: it says nothing of gravity, of the **dark matter** that holds the galaxies together, of the **dark energy** that is accelerating the expansion of the universe, of why the neutrinos have mass, or of why the universe is made of matter rather than of equal parts matter and antimatter. Those are the open questions the accelerators are built to answer."},
    {k:"h3", t:"The Conservation Laws of Particle Physics"},
    {k:"num", items:[
      "**Mass-energy** — the total of mass and energy together is conserved, since one converts into the other by E = mc²",
      "**Linear momentum** — the tracks in a collision photograph always balance when measured",
      "**Angular momentum, including spin** — the intrinsic spin of the particles balances too",
      "**Electric charge** — the total charge before an interaction equals the total after; no reaction has ever been seen to violate it",
      "**Baryon number** — protons and neutrons count +1, their antiparticles −1, and everything else 0; the total is conserved, which is why the proton appears to be stable",
      "**Lepton number** — counted separately for the electron, muon and tau families, with the antiparticles negative",
      "**Strangeness** — conserved in strong and electromagnetic interactions but **not** in weak ones, which is why a strange particle is produced quickly and decays slowly"
    ]},
    {k:"p", t:"These laws are the working tool of the subject: given a proposed reaction, check the totals on both sides, and if any one fails the reaction cannot happen. In the beta decay of the neutron, n → p + e⁻ + ν-bar, the charge is 0 = +1 − 1 + 0, the baryon number is 1 = 1 + 0 + 0, and the lepton number is 0 = 0 + 1 − 1 (the antineutrino carrying −1) — all conserved, so the decay occurs. It was the failure of energy and momentum to balance in that same decay that led Pauli in 1930 to propose an invisible particle, the neutrino, rather than abandon conservation — a proposal vindicated experimentally twenty-six years later, and a good example of how a conservation law guides discovery."},
    {k:"h3", t:"Einstein's Photoelectric Equation in Detail"},
    {k:"p", t:"Four experimental facts could not be explained by a wave theory of light. First, there is a **threshold frequency** below which no electron is emitted, however intense the light or however long it shines. Second, emission is **instantaneous** — within 10⁻⁹ s. Third, the **maximum kinetic energy** of the emitted electrons rises linearly with the frequency and does not depend on the intensity at all. Fourth, the **number** of electrons rises with the intensity. Einstein's explanation: light of frequency f arrives in packets, **photons**, each of energy **E = hf**; one photon gives all of its energy to one electron; part of that energy, the **work function W₀ = hf₀**, is spent in escaping the metal surface, and the remainder appears as kinetic energy — **hf = W₀ + KE_max**, Einstein's photoelectric equation. Plotting KE_max against f gives a **straight line whose gradient is Planck's constant h**, whose intercept on the KE axis is −W₀ and whose intercept on the f axis is the threshold frequency f₀ — the standard way of measuring h in the laboratory. Worked through: light of frequency 1.0 × 10¹⁵ Hz on a metal of work function 4.0 × 10⁻¹⁹ J gives a photon energy of 6.63 × 10⁻³⁴ × 1.0 × 10¹⁵ = **6.63 × 10⁻¹⁹ J**, so the fastest electron leaves with 6.63 − 4.0 = **2.63 × 10⁻¹⁹ J**. In **electronvolts** (1 eV = 1.6 × 10⁻¹⁹ J) those figures are 4.1 eV, 2.5 eV and 1.6 eV, and the threshold frequency is 4.0 × 10⁻¹⁹ ÷ 6.63 × 10⁻³⁴ = **6.0 × 10¹⁴ Hz**, which is red light. The applications follow directly: the **solar cell** that lights a clinic, the **photomultiplier** that counts single photons, the camera's light meter, the automatic door, the burglar alarm and the sensor that counts vehicles on the highway."},
    {k:"h3", t:"Applications of Modern Physics"},
    {k:"table", head:["Field","What modern physics provides"], rows:[
      ["Medicine","X-ray imaging, the CT scanner, MRI, the PET scan, ultrasound, radiotherapy with cobalt-60 or a medical linac, the laser in eye surgery, the semiconductor detector in every instrument"],
      ["Industry","Semiconductor chips, the laser for cutting and welding, non-destructive testing of welds, the electron microscope, thickness gauges, automation and robotics"],
      ["Communications","The optical fibre and the laser that drives it, the satellite transponder, the mobile network, GPS — whose clocks must be corrected for both special and general relativity to give a position within metres"],
      ["Energy","The solar cell, nuclear power, superconducting magnets, more efficient lighting and power electronics"],
      ["Research and cosmology","The accelerator and its detectors, the telescope at every wavelength, the evidence for the Big Bang, the expansion of the universe and the age of the Earth"],
      ["Everyday life in Liberia","The LED lamp and lantern, the mobile phone and its charger, the solar home system and its controller, the barcode scanner at the supermarket, the smoke detector, the digital multimeter in the technician's bag"]
    ]},
    {k:"h3", t:"Careers at the Frontier"},
    {k:"p", t:"A physicist measures carefully, models what was measured in mathematics, tests the model against a new measurement and says plainly where it fails. The career paths from a WASSCE physics and mathematics pass run through the science and engineering programmes of the University of Liberia and beyond: into the **Liberia Electricity Corporation** and the power sector, into **telecommunications** and the mobile networks, into **medical physics** in the hospitals, into **environmental monitoring and meteorology**, into **construction and materials testing**, into **education**, into **solar engineering** — one of the fastest-growing trades in the country — and, for those who continue, into research anywhere in the world. The subject asks for patience with instruments, confidence with numbers and the habit of asking why. Every technology in this classroom — the lamp, the phone, the scanner in the clinic — began as somebody's question about how nature behaves."},
    {k:"h3", t:"What the WASSCE Asks in This Unit"},
    {k:"bul", items:[
      "**State the uncertainty principle** and explain why the electron cannot be pictured as a planet in orbit",
      "**Write the electron configuration** of a light element and relate it to its group and valency",
      "**Describe the linear accelerator and the cyclotron**, saying how the particle gains energy in each",
      "**Name the four fundamental interactions** with what each acts on and one effect of each",
      "**Check a reaction against the conservation laws** of charge, baryon number and lepton number",
      "**Use hf = W₀ + KE**, converting between joules and electronvolts, and explain the shape of the KE against f graph",
      "**Give two applications** of modern physics in medicine or in communications"
    ]}
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
    {q:"Light of frequency 1.0 × 10¹⁵ Hz falls on a metal of work function 4.0 × 10⁻¹⁹ J. Find the photon energy and the maximum kinetic energy of the emitted electrons (h = 6.63 × 10⁻³⁴ J s).", steps:[
      "E = hf = 6.63 × 10⁻³⁴ × 1.0 × 10¹⁵",
      "KE_max = hf − W₀ = 6.63 × 10⁻¹⁹ − 4.0 × 10⁻¹⁹"
    ], a:"6.63 × 10⁻¹⁹ J per photon; 2.63 × 10⁻¹⁹ J of kinetic energy"},
    {q:"A metal has a work function of 3.3 × 10⁻¹⁹ J. Find its threshold frequency (h = 6.6 × 10⁻³⁴ J s).", steps:[
      "W₀ = hf₀, so f₀ = W₀ ÷ h",
      "f₀ = 3.3 × 10⁻¹⁹ ÷ 6.6 × 10⁻³⁴"
    ], a:"5 × 10¹⁴ Hz — light of a lower frequency emits no electrons however bright it is"},
    {q:"Convert a photon energy of 3.2 × 10⁻¹⁹ J into electronvolts (1 eV = 1.6 × 10⁻¹⁹ J).", steps:[
      "E in eV = E in joules ÷ 1.6 × 10⁻¹⁹"
    ], a:"2.0 eV"},
    {q:"Find the de Broglie wavelength of an electron of mass 9.1 × 10⁻³¹ kg moving at 10⁶ m/s (h = 6.6 × 10⁻³⁴ J s).", steps:[
      "λ = h ÷ mv",
      "λ = 6.6 × 10⁻³⁴ ÷ (9.1 × 10⁻³¹ × 10⁶)"
    ], a:"About 7.3 × 10⁻¹⁰ m — the size of an atomic spacing, which is why electrons diffract through a crystal"},
    {q:"Write the electron configuration of sodium (Z = 11) and of chlorine (Z = 17), and state the valency of each.", steps:[
      "Fill the shells in order: 2, then 8, then the remainder",
      "Sodium: 2, 8, 1 — one electron to lose. Chlorine: 2, 8, 7 — one electron to gain"
    ], a:"Na 2,8,1 and Cl 2,8,7; valency 1 for each, so they combine as NaCl"},
    {q:"The proton is made of two up quarks of charge +2/3 and one down quark of charge −1/3. Verify the proton's charge, and find the charge of the neutron (udd).", steps:[
      "Proton: 2/3 + 2/3 − 1/3",
      "Neutron: 2/3 − 1/3 − 1/3"
    ], a:"Proton +1; neutron 0"},
    {q:"In a photoelectric experiment the maximum kinetic energy of the emitted electrons is plotted against the frequency of the light. State what the gradient and the two intercepts represent.", steps:[
      "From KE = hf − W₀ the graph is a straight line",
      "Gradient = h; intercept on the KE axis = −W₀; intercept on the frequency axis = f₀"
    ], a:"The gradient is Planck's constant, the KE intercept is the negative of the work function, and the frequency intercept is the threshold frequency"}
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
