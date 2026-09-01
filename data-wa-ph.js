/* WASSCE (WAEC) — PHYSICS course data: units across the five Parts of the
   harmonised syllabus plus the harmonised topics set for short-structured
   questions. */
window.WA_ph = {
  id: "ph",
  name: "Physics",
  preamble: "It is important that candidates are involved in practical activities in covering this syllabus. Candidates will be expected to answer questions on the topics set in the column headed 'TOPIC'. The 'NOTES' are intended to indicate the scope of the questions which will be set but they are not to be considered as an exhaustive list of limitations and illustrations. NOTE: Questions will be set in S.I. units. However, multiples or sub-multiples of the units may be used.",
  aims: [
    "develop an understanding of the concepts and principles of physics across matter, space, time, energy, waves and fields;",
    "carry out practical activities and acquire laboratory and experimental skills;",
    "apply physics to everyday problems and to industry;",
    "develop critical, logical and quantitative (S.I.-unit) reasoning."
  ],
  papers: [
    { n: "Paper 1", d: "Fifty multiple-choice objective questions drawn from the syllabus. Candidates answer ALL within 1 hour for 50 marks." },
    { n: "Paper 2", d: "A 2-hour essay paper, 100 marks, in two sections. Section A: ten short structured questions — answer ALL for 25 marks. Section B: structured questions on the set topics — answer THREE, each carrying 25 marks." },
    { n: "Paper 3", d: "A practical (school candidates) or alternative-to-practical (private candidates) test, 2 hours, with compulsory questions for 50 marks: quantitative measurements, qualitative observations and the practical activities of the syllabus." }
  ],
  units: [
  /* =============== P1 · CONCEPTS OF MATTER =============== */
  {
    grade: 12, sem: "One", icon: "🧊", period: "P1",
    title: "Concepts of Matter (Part I, Topic 1)",
    subtitle: "Simple structure of matter · states of matter · particle nature · kinetic theory · crystalline vs amorphous",
    note: "Part I, Topic 1: the simple structure of matter, the three states, evidence for the particle nature of matter, and the kinetic theory of matter.",
    objectives: [
      "Describe the simple structure of matter and the three physical states (solid, liquid, gas)",
      "Cite evidence of the particle nature of matter (Brownian motion) and state the kinetic theory of matter",
      "Use the kinetic theory to explain states of matter, pressure in a gas, evaporation and boiling, cohesion, adhesion and capillarity",
      "Compare crystalline and amorphous substances and describe the arrangement of atoms in crystalline structures (face-centred, body-centred)"
    ],
    terms: [
      { t: "State of matter", d: "Solid (fixed shape and volume), liquid (fixed volume, no fixed shape), gas (no fixed shape or volume).", x: "Ice, water, steam" },
      { t: "Particle nature", d: "Matter is made of tiny particles (atoms/molecules); evidence includes Brownian motion.", x: "Pollened particles jiggling in water under a microscope" },
      { t: "Kinetic theory of matter", d: "Matter is made of particles in constant random motion; their energy and spacing explain the states and their properties.", x: "Gas pressure = particle impacts on the container walls" },
      { t: "Brownian motion", d: "The random, zig-zag motion of small particles in a fluid due to collisions with moving molecules.", x: "Smoke particles in air" },
      { t: "Cohesion", d: "The attraction between similar molecules.", x: "Water droplets beading on a surface" },
      { t: "Adhesion", d: "The attraction between dissimilar molecules.", x: "Water sticking to glass" },
      { t: "Capillarity", d: "The rise or fall of a liquid in a fine tube due to surface tension, adhesion and cohesion.", x: "Water rising in a glass tube; mercury falling" },
      { t: "Crystalline substance", d: "A solid with an ordered, repeating atomic arrangement — definite melting point.", x: "Face-centred, body-centred lattices" },
      { t: "Amorphous substance", d: "A solid with no long-range order — softens over a temperature range.", x: "Glass, rubber, pitch" }
    ],
    tf: [
      { s: "A gas has both a fixed shape and a fixed volume.", a: "False", why: "A gas has neither a fixed shape nor a fixed volume — it fills its container." },
      { s: "Brownian motion is evidence of the particle nature of matter.", a: "True", why: "Evidence of the particle nature of matter e.g. Brownian motion experiment." },
      { s: "Crystalline substances melt over a wide range of temperatures.", a: "False", why: "Crystalline substances have a definite melting point; amorphous substances soften over a range." }
    ],
    mcq: [
      { q: "The three physical states of matter are:", o: ["solid, liquid, gas", "metal, liquid, gas", "solid, plasma, gas", "crystal, liquid, vapour"], a: 0, why: "Solid, liquid and gas." },
      { q: "The random, zig-zag motion of smoke particles in air is called:", o: ["diffusion", "Brownian motion", "convection", "osmosis"], a: 1, why: "Brownian motion — evidence of the particle nature of matter." },
      { q: "Gas pressure is explained by the kinetic theory as:", o: ["the weight of the gas", "the impacts of moving particles on the walls", "cohesion of the gas", "the volume of the gas"], a: 1, why: "Pressure in a gas = particle impacts on the container walls." },
      { q: "The attraction between similar molecules is called:", o: ["adhesion", "cohesion", "capillarity", "viscosity"], a: 1, why: "Cohesion — like molecules; adhesion — unlike molecules." },
      { q: "Water rises in a fine glass tube due to:", o: ["gravity", "capillarity (surface tension + adhesion)", "evaporation", "diffusion only"], a: 1, why: "Capillarity — adhesion to the glass exceeds cohesion + surface tension." },
      { q: "A crystalline solid such as ice is characterized by:", o: ["no melting point", "a definite melting point", "amorphous structure", "no atomic order"], a: 1, why: "Crystalline substances have a definite melting point and ordered structure." },
      { q: "The kinetic theory explains evaporation as molecules:", o: ["all leaving at once", "escaping from the surface with enough energy", "condensing", "freezing"], a: 1, why: "Evaporation — surface molecules with sufficient kinetic energy escape." }
    ],
    essay: [
      { q: "State the kinetic theory of matter and use it to explain: (a) the difference between a solid and a gas, (b) gas pressure, (c) evaporation.", marks: 10, outline: [
        "Kinetic theory: matter is made of particles in constant random motion; the particles' kinetic energy increases with temperature; intermolecular forces and spacing differ by state",
        "(a) Solid — particles closely packed, strong forces, vibrate about fixed positions (fixed shape and volume); Gas — particles far apart, negligible forces, move freely at high speed (no fixed shape/volume)",
        "(b) Gas pressure — particles collide elastically with the container walls; the rate and force of these impacts per unit area give the pressure",
        "(c) Evaporation — surface molecules with kinetic energy above the binding energy escape into the air at any temperature; the more energetic molecules leave, so the temperature of the liquid falls (cooling)"
      ] },
      { q: "Distinguish between crystalline and amorphous substances, and describe the arrangement of atoms in a crystalline structure (face-centred and body-centred). Give two examples of each.", marks: 10, outline: [
        "Crystalline — ordered, repeating atomic lattice; definite melting point; examples: ice, sodium chloride, copper, diamond",
        "Amorphous — no long-range order (like a frozen liquid); softens over a temperature range; examples: glass, rubber, pitch, tar",
        "Face-centred cubic: atoms at the eight corners and at the centre of each of the six faces of a cube",
        "Body-centred cubic: atoms at the eight corners and one at the centre of the cube",
        "The ordered lattice accounts for the sharp melting point and the cleavage of crystals"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Part I, Topic 1 (Concepts of matter):" },
      { k: "bul", items: [
        "Simple structure of matter",
        "Three physical states of matter: solid, liquid, gas",
        "Evidence of the particle nature of matter (e.g. Brownian motion experiment); kinetic theory of matter",
        "Use of the theory to explain: states of matter, pressure in a gas, evaporation and boiling; cohesion, adhesion, capillarity",
        "Comparison of crystalline and amorphous substances (arrangement of atoms in crystalline structure — face centred, body centred)"
      ] }
    ]
  },
  /* =============== P2 · FUNDAMENTAL & DERIVED QUANTITIES, DIMENSIONAL ANALYSIS =============== */
  {
    grade: 12, sem: "One", icon: "📏", period: "P2",
    title: "Fundamental & Derived Quantities; Dimensional Analysis",
    subtitle: "S.I. fundamental units · derived units · dimensions · uses of dimensions",
    note: "Part I, Topic 2 plus the harmonised Topic 1 (Derived quantities and dimensional analysis). Questions are set in S.I. units.",
    objectives: [
      "List the S.I. fundamental quantities and their units (m, kg, s, A, cd, K, mol)",
      "Identify derived quantities and their units (volume m³, density kg m⁻³, speed m s⁻¹, etc.)",
      "Explain dimensions in terms of fundamental and derived quantities",
      "Use dimensions to verify equations, derive relationships between quantities, and obtain derived units"
    ],
    terms: [
      { t: "Fundamental quantity", d: "A base quantity taken as the standard from which others are derived — length, mass, time, electric current, luminous intensity, thermodynamic temperature, amount of substance.", x: "metre (m), kilogram (kg), second (s), ampere (A), candela (cd), kelvin (K), mole (mol)" },
      { t: "Derived quantity", d: "A quantity defined from fundamental ones — volume (m³), density (kg m⁻³), speed (m s⁻¹), acceleration (m s⁻²), force (kg m s⁻²), energy (kg m² s⁻²).", x: "1 N = 1 kg m s⁻²" },
      { t: "Dimension", d: "The expression of a quantity as a product of powers of the fundamental dimensions [M], [L], [T], [I], etc.", x: "[velocity] = [L T⁻¹]" },
      { t: "Dimensional homogeneity", d: "Every term in a valid physical equation has the same dimensions.", x: "Checking s = ut + ½at²: [L] = [L] throughout" },
      { t: "Dimensional analysis", d: "Using dimensions to verify equations, derive relationships, and obtain derived units.", x: "Deriving [force] = [M L T⁻²] from F = ma" }
    ],
    tf: [
      { s: "Questions in the WASSCE physics paper are set in S.I. units.", a: "True", why: "NOTE: Questions will be set in S.I. units. However, multiples or sub-multiples of the units may be used." },
      { s: "The dimension of velocity is [L T⁻¹].", a: "True", why: "velocity = distance/time → [L]/[T]." },
      { s: "Luminous intensity has the S.I. unit kelvin.", a: "False", why: "Luminous intensity is the candela (cd); kelvin (K) is thermodynamic temperature." }
    ],
    mcq: [
      { q: "The S.I. unit of electric current is the:", o: ["volt", "ampere", "ohm", "coulomb"], a: 1, why: "Current is measured in amperes (A)." },
      { q: "The dimension of force is:", o: ["[M L T⁻²]", "[M L² T⁻²]", "[M T⁻¹]", "[L T⁻¹]"], a: 0, why: "F = ma → [M][L T⁻²] = [M L T⁻²]." },
      { q: "The S.I. unit of density is:", o: ["kg m⁻¹", "kg m⁻³", "g cm⁻³", "kg s⁻¹"], a: 1, why: "Density = mass/volume → kg m⁻³." },
      { q: "Which of the following is a fundamental quantity?", o: ["volume", "speed", "length", "force"], a: 2, why: "Length is fundamental; the others are derived." },
      { q: "Dimensional analysis can be used to:", o: ["verify dimensional correctness of an equation", "derive relationships between quantities", "obtain derived units", "all of these"], a: 3, why: "Uses of dimensions: to verify correctness, derive relationships, obtain derived units." },
      { q: "The dimension of energy (or work) is:", o: ["[M L T⁻²]", "[M L² T⁻²]", "[M L² T⁻¹]", "[L² T⁻²]"], a: 1, why: "Work = force × distance → [M L T⁻²][L] = [M L² T⁻²]." },
      { q: "The S.I. unit of thermodynamic temperature is the:", o: ["degree Celsius", "kelvin", "fahrenheit", "joule"], a: 1, why: "Temperature is measured in kelvin (K)." }
    ],
    essay: [
      { q: "(a) List the seven S.I. fundamental quantities with their units. (b) Derive the dimensions and S.I. unit of (i) force, (ii) work, (iii) pressure. (c) State two uses of dimensions.", marks: 12, outline: [
        "(a) Length (m), mass (kg), time (s), electric current (A), luminous intensity (cd), thermodynamic temperature (K), amount of substance (mol)",
        "(b)(i) Force = mass × acceleration → [M][L T⁻²] = [M L T⁻²]; unit newton (N) = kg m s⁻²",
        "(ii) Work = force × distance → [M L T⁻²][L] = [M L² T⁻²]; unit joule (J) = kg m² s⁻²",
        "(iii) Pressure = force/area → [M L T⁻²]/[L²] = [M L⁻¹ T⁻²]; unit pascal (Pa) = N m⁻² = kg m⁻¹ s²",
        "(c) Verify dimensional correctness of equations; derive relationships; obtain derived units"
      ] },
      { q: "(a) State the principle of dimensional homogeneity and use it to check the equation s = ut + ½at². (b) Given [force] = [M L T⁻²] and [area] = [L²], find the dimensions of pressure.", marks: 10, outline: [
        "(a) Homogeneity — every term in a physically valid equation has the same dimensions",
        "s: [L]; ut: [L T⁻¹][T] = [L]; ½at²: [L T⁻²][T²] = [L] — all terms [L], so the equation is dimensionally correct",
        "Note: ½ is a dimensionless constant",
        "(b) Pressure = force/area → [M L T⁻²]/[L²] = [M L⁻¹ T²]; unit N m⁻² (pascal)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Part I, Topic 2 (Fundamental and derived quantities and units) + Harmonised Topic 1 (Derived quantities and dimensional analysis):" },
      { k: "bul", items: [
        "(a) Fundamental quantities and units; (b) Derived quantities and units",
        "Fundamental quantities: length, mass, time, electric current, luminous intensity, thermodynamic temperature, amount of substance; units m, kg, s, A, cd, K, mol",
        "Derived quantities: volume, density and speed as examples; m³, kg m⁻³, m s⁻¹ as their units",
        "Dimensions in terms of fundamental and derived quantities; uses of dimensions — verify dimensional correctness of a given equation, derive the relationship between quantities, obtain derived units"
      ] }
    ]
  },
  /* =============== P3 · POSITION, MASS, WEIGHT, TIME =============== */
  {
    grade: 12, sem: "One", icon: "📍", period: "P3",
    title: "Position, Distance, Displacement, Mass, Weight, Time",
    subtitle: "Coordinates and bearing · distance vs displacement · mass vs weight · measurement of time · density",
    note: "Part I, Topics 3–5: position and the distinction between distance and displacement; mass and weight; time; and volume, density and relative density.",
    objectives: [
      "Locate a point using rectangular (x, y, z) coordinates and give directions by bearing and protractor",
      "Distinguish distance (scalar) from displacement (vector) and measure distance with string, metre rule, vernier calipers and micrometer screw gauge",
      "Distinguish mass (kg) from weight (N) and measure them with a beam/lever balance and a spring balance",
      "Explain time as the interval between events and measure it (stopwatch, ticker-timer, pendulum)",
      "Determine density and relative density of solids and liquids experimentally"
    ],
    terms: [
      { t: "Position", d: "The location of a point, given by rectangular coordinates (x, y, z).", x: "A point at (2, 3, 0) m" },
      { t: "Distance", d: "The total length of the path actually travelled — a scalar, in metres.", x: "A 10 km road trip" },
      { t: "Displacement", d: "The straight-line change in position with direction — a vector.", x: "5 m at 30° east of north" },
      { t: "Bearing", d: "A direction measured clockwise from north, used to locate a point.", x: "A bearing of 045° (north-east)" },
      { t: "Mass", d: "The quantity of matter in a body — measured in kilograms; constant everywhere.", x: "5 kg on the Moon and on Earth" },
      { t: "Weight", d: "The gravitational force on a body, W = mg — measured in newtons; varies with g.", x: "≈ 49 N for 5 kg at g = 9.8 m s⁻²" },
      { t: "Density", d: "Mass per unit volume, ρ = m/V, in kg m⁻³.", x: "Water ≈ 1000 kg m⁻³" },
      { t: "Relative density", d: "The ratio of the density of a substance to that of water (dimensionless); = mass of a given volume / mass of equal volume of water.", x: "Iron ≈ 7.9" },
      { t: "Time", d: "The interval between two physical events; measured in seconds.", x: "Stopwatch, ticker-timer, pendulum" }
    ],
    tf: [
      { s: "Mass is a force measured in newtons.", a: "False", why: "Mass is the quantity of matter (kg); weight is the force (N) W = mg." },
      { s: "Distance is a scalar and displacement is a vector.", a: "True", why: "Distance — total path (scalar); displacement — straight-line change with direction (vector)." },
      { s: "The kilogram is the S.I. unit of weight.", a: "False", why: "The kilogram is the unit of mass; the newton is the unit of weight." },
      { s: "Relative density is the ratio of the density of a substance to that of water.", a: "True", why: "Experimental determination for solids and liquids." }
    ],
    mcq: [
      { q: "A car travels 6 m east and then 8 m north. Its displacement from the start is:", o: ["14 m", "10 m", "2 m", "48 m"], a: 1, why: "Displacement = √(6² + 8²) = √100 = 10 m (straight-line)." },
      { q: "The quantity that is the same for a body on the Earth and on the Moon is its:", o: ["weight", "mass", "both", "neither"], a: 1, why: "Mass (kg) is constant; weight = mg changes with g." },
      { q: "The S.I. unit of weight is the:", o: ["kilogram", "gram", "newton", "pound"], a: 2, why: "Weight is a force — the newton (N)." },
      { q: "The instrument used to measure a small length to 0.01 mm is the:", o: ["metre rule", "vernier caliper", "micrometer screw gauge", "tape rule"], a: 2, why: "The micrometer screw gauge reads to 0.01 mm; vernier to 0.02/0.1 mm." },
      { q: "A body of mass 2 kg has a weight (g = 10 m s⁻²) of:", o: ["0.2 N", "2 N", "10 N", "20 N"], a: 3, why: "W = mg = 2 × 10 = 20 N." },
      { q: "Density is defined as:", o: ["mass × volume", "mass ÷ volume", "volume ÷ mass", "weight ÷ volume"], a: 1, why: "ρ = m/V." },
      { q: "The relative density of a liquid is found using a U-tube or:", o: ["Hare's apparatus", "a barometer", "a manometer only", "a siphon"], a: 0, why: "Determination of relative density of liquids with U-tube and Hare's apparatus." }
    ],
    essay: [
      { q: "(a) Distinguish between distance and displacement with an example. (b) A boy walks 3 m north and then 4 m east. Find his resultant displacement (magnitude and direction).", marks: 10, outline: [
        "(a) Distance — total path length, scalar, always positive; Displacement — straight-line change in position with direction, vector",
        "Example: walking around a block (distance = perimeter; displacement may be zero if you return to start)",
        "(b) Displacement = √(3² + 4²) = 5 m",
        "Direction: θ = tan⁻¹(4/3) = 53.1° east of north (i.e. bearing 053°)"
      ] },
      { q: "(a) Distinguish mass from weight and state their S.I. units. (b) Describe how you would determine the relative density of a solid (denser than water) using water displacement.", marks: 10, outline: [
        "(a) Mass — quantity of matter, in kg, measured with a beam/lever balance; Weight — gravitational force W = mg, in N, measured with a spring balance; mass is constant, weight varies with g",
        "(b) Weigh the solid in air (mass m) with a balance; measure its volume by water displacement (V = V₂ − V₁ in a measuring cylinder); relative density = mass of solid / mass of equal volume of water = m / (V × 1 g cm⁻³)",
        "Or: R.D. = weight in air / (weight in air − weight in water)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Part I, Topics 3–5 (Position, distance and displacement; Mass and weight; Time) and 6 (Volume, density and relative density):" },
      { k: "bul", items: [
        "Position as a location of a point — rectangular coordinates (x, y, z axes); measurement of distance — string, metre rule, vernier calipers and micrometer screw gauge (degree of accuracy noted); metre as unit of distance; use of compass and protractor; graphical location and directions by axes stressed",
        "Concept of direction as a way of locating a point — bearing; distinction between distance and displacement",
        "Mass and weight: distinction; use of lever balance and chemical/beam balance for mass, spring balance for weight; mention of electronic/digital balance; kg unit of mass, N unit of weight",
        "Time: concept as interval between physical events; use of heart-beat, sand-clock, ticker-timer, pendulum and stopwatch/clock; second as unit of time",
        "Volume, density and relative density: experimental determination for solids and liquids"
      ] }
    ]
  },
  /* =============== P4 · FLUID AT REST =============== */
  {
    grade: 12, sem: "One", icon: "🌊", period: "P4",
    title: "Fluid at Rest (Pressure & Flotation)",
    subtitle: "Pressure in fluids · Pascal's principle · atmospheric pressure · Archimedes' principle · law of flotation",
    note: "Part I, Topic 6: pressure in fluids, Pascal's principle, atmospheric pressure, and the equilibrium of immersed/floating bodies.",
    objectives: [
      "Define pressure and show its dependence on depth below a liquid surface",
      "State Pascal's principle and apply it to the hydraulic press and car brakes",
      "Explain atmospheric pressure and the working of the barometer, manometer, siphon, syringe and pump",
      "State Archimedes' principle and use it to find the relative densities of solids and liquids",
      "State the law of flotation and its conditions, and give applications (hydrometer, balloons, boats, submarines)"
    ],
    terms: [
      { t: "Pressure", d: "Force per unit area, P = F/A, measured in pascals (Pa = N m⁻²).", x: "A nail exerts high pressure (small area)" },
      { t: "Hydrostatic pressure", d: "Pressure in a fluid at rest, P = ρgh — it increases with depth and density.", x: "Deeper water → greater pressure" },
      { t: "Pascal's principle", d: "Pressure applied to an enclosed fluid is transmitted undiminished to every part and to the walls of the container.", x: "Hydraulic press; car brakes" },
      { t: "Atmospheric pressure", d: "The pressure exerted by the weight of the air ≈ 1.01 × 10⁵ Pa (760 mm Hg).", x: "Supports a column of mercury 760 mm high" },
      { t: "Barometer", d: "An instrument that measures atmospheric pressure (mercury column).", x: "760 mm Hg at sea level" },
      { t: "Archimedes' principle", d: "A body immersed in a fluid is buoyed up by a force equal to the weight of the fluid displaced.", x: "Why a ship floats: it displaces its weight of water" },
      { t: "Upthrust", d: "The upward buoyant force on an immersed body = weight of fluid displaced.", x: "Reduces the apparent weight" },
      { t: "Law of flotation", d: "A floating body displaces its own weight of fluid; it floats when its weight equals the weight of the fluid it displaces.", x: "A hydrometer sinks more in a less dense liquid" }
    ],
    tf: [
      { s: "Pressure in a liquid at rest increases with depth.", a: "True", why: "Dependence of pressure on the depth of a point below a liquid surface: P = ρgh." },
      { s: "Pascal's principle is applied in the hydraulic press and car brakes.", a: "True", why: "Pascal's principle, application to hydraulic press and car brakes." },
      { s: "A floating body displaces a volume of fluid equal to its own volume.", a: "False", why: "It displaces its own WEIGHT of fluid — the law of flotation." }
    ],
    mcq: [
      { q: "Pressure is defined as:", o: ["force × area", "force ÷ area", "area ÷ force", "mass ÷ area"], a: 1, why: "P = F/A." },
      { q: "The pressure at a depth h in a liquid of density ρ is:", o: ["ρgh", "h/ρg", "ρgh²", "g/ρh"], a: 0, why: "Hydrostatic pressure P = ρgh — depends on depth." },
      { q: "Pascal's principle states that pressure applied to an enclosed fluid is:", o: ["lost as heat", "transmitted undiminished in all directions", "doubled", "absorbed by the walls"], a: 1, why: "Transmitted undiminished to every part and to the walls." },
      { q: "A hydraulic press works on the principle of:", o: ["Archimedes' principle", "Pascal's principle", "the law of flotation", "conservation of mass"], a: 1, why: "A small force on a small piston is transmitted to a large piston — force multiplication." },
      { q: "At sea level, atmospheric pressure supports a mercury column of about:", o: ["380 mm", "760 mm", "1030 mm", "76 mm"], a: 1, why: "≈ 760 mm Hg = 1.01 × 10⁵ Pa." },
      { q: "Archimedes' principle states that a body in a fluid experiences an upthrust equal to:", o: ["its own weight", "the weight of the fluid displaced", "its volume", "the density of the fluid"], a: 1, why: "Upthrust = weight of fluid displaced." },
      { q: "A floating body is in equilibrium when its weight equals:", o: ["the upthrust on its full volume", "the weight of the fluid it displaces", "the atmospheric pressure", "its mass"], a: 1, why: "Law of flotation — weight = weight of fluid displaced." }
    ],
    essay: [
      { q: "State Pascal's principle and describe, with a labelled diagram, how it is used in a hydraulic press to multiply a force.", marks: 10, outline: [
        "Pascal's principle: pressure applied to an enclosed fluid is transmitted undiminished to every part of the fluid and to the container walls",
        "Hydraulic press: two pistons of areas A₁ (effort) and A₂ (load) connected by a fluid; same pressure P = F₁/A₁ = F₂/A₂",
        "Force multiplication: F₂ = F₁(A₂/A₁) — a small effort on the small piston raises a large load on the large piston",
        "Trade-off: the load moves a smaller distance than the effort (work input ≈ work output); example: car brake system"
      ] },
      { q: "(a) State Archimedes' principle. (b) A body weighs 50 N in air and 30 N in water. Find the upthrust and the relative density of the body. (c) State the law of flotation and give two applications.", marks: 10, outline: [
        "(a) A body immersed in a fluid is buoyed up by a force equal to the weight of the fluid displaced",
        "(b) Upthrust = weight in air − weight in water = 50 − 30 = 20 N",
        "R.D. = weight in air / upthrust = 50/20 = 2.5",
        "(c) Law of flotation: a floating body displaces its own weight of fluid (weight = weight of fluid displaced)",
        "Applications: hydrometer (sinks deeper in less dense liquid), ships (hollow hulls displace their weight of water), balloons (displace their weight of air), submarines (ballast tanks) — conditions for a body to float"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Part I, Topic 6 (Fluid at rest):" },
      { k: "bul", items: [
        "Pressure in fluids: concept and definition of pressure; Pascal's principle and application to hydraulic press and car brakes; dependence of pressure on depth below a liquid surface; atmospheric pressure; simple barometer, manometer, siphon, syringe and pump; relative density of liquids with U-tube and Hare's apparatus",
        "Equilibrium of bodies: (i) Archimedes' principle; (ii) law of flotation",
        "Identification of the forces acting on a body partially or completely immersed in a fluid; use of the principle to determine relative densities of solids and liquids; conditions for a body to float; applications in hydrometer, balloons, boats, ships, submarines"
      ] }
    ]
  },
  /* =============== P5 · MOTION & FORCE =============== */
  {
    grade: 12, sem: "One", icon: "🎢", period: "P5",
    title: "Motion & Force",
    subtitle: "Types of motion · relative motion · contact and field forces · friction · viscosity · circular motion",
    note: "Part I, Topic 7: the types of motion, the cause of motion (force), friction and viscosity, and simple circular motion.",
    objectives: [
      "Identify the types of motion: random, rectilinear, translational, rotational, circular, orbital, spin, oscillatory, and relative motion",
      "Explain force as the cause of motion and distinguish contact forces from non-contact (field) forces",
      "Describe solid friction (static and dynamic), the coefficient of limiting friction, and the advantages/disadvantages and control of friction",
      "Explain viscosity and terminal velocity qualitatively",
      "Give a simple treatment of circular motion: angular speed/velocity, centripetal force, banking of roads"
    ],
    terms: [
      { t: "Rectilinear motion", d: "Motion in a straight line.", x: "A car on a straight road" },
      { t: "Rotational motion", d: "Motion about an axis; circular motion is rotation in a plane; orbital — around a body; spin — about its own axis.", x: "A spinning top; Earth on its axis (spin) and about the Sun (orbital)" },
      { t: "Oscillatory motion", d: "Repeated to-and-fro motion about a mean position.", x: "A pendulum" },
      { t: "Relative motion", d: "Motion measured with respect to a chosen frame of reference.", x: "A passenger is at rest relative to the train, moving relative to the ground" },
      { t: "Contact force", d: "A force exerted only when bodies touch — push and pull.", x: "Friction; tension; a hand pushing a wall" },
      { t: "Field force (non-contact)", d: "A force acting at a distance — gravitational, electric and magnetic.", x: "The Earth pulls the Moon gravitationally" },
      { t: "Friction", d: "The force opposing relative motion between surfaces — static (rest) and dynamic (sliding).", x: "Locomotion; belt drive" },
      { t: "Coefficient of limiting friction", d: "The ratio of the maximum (limiting) friction to the normal reaction, μ = F/N.", x: "Determinations on inclined planes" },
      { t: "Viscosity", d: "Friction within a fluid — the internal resistance to flow.", x: "Honey is more viscous than water" },
      { t: "Terminal velocity", d: "The constant speed when the driving force balances the resistive (viscous) force.", x: "A falling drop through air" },
      { t: "Centripetal force", d: "The inward force needed to keep a body moving in a circle, F = mv²/r.", x: "A stone whirled on a string" }
    ],
    tf: [
      { s: "Gravitational pull is a contact force.", a: "False", why: "Gravity is a non-contact (field) force, like electric and magnetic forces." },
      { s: "Static friction acts between two stationary bodies; dynamic friction between bodies in relative motion.", a: "True", why: "Frictional force between two stationary bodies (static) and between two bodies in relative motion (dynamic)." },
      { s: "A body falling through a fluid eventually reaches a constant terminal velocity.", a: "True", why: "Terminal velocity and its determination." }
    ],
    mcq: [
      { q: "The motion of the Earth about the Sun is:", o: ["rectilinear", "orbital", "spin only", "oscillatory"], a: 1, why: "Orbital motion — around another body." },
      { q: "A force that acts only when bodies are in contact (e.g. a push or pull) is a:", o: ["field force", "contact force", "friction only", "magnetic force"], a: 1, why: "Contact force — push and pull." },
      { q: "The ratio of limiting friction to the normal reaction is the:", o: ["coefficient of restitution", "coefficient of limiting friction", "viscosity", "moment of inertia"], a: 1, why: "μ = F/N — coefficients of limiting friction and their determinations." },
      { q: "One disadvantage of friction is:", o: ["it enables walking", "it causes wear and tear and reduces efficiency", "it provides grip", "it generates heat for engines only"], a: 1, why: "Disadvantages: reduction of efficiency, wear and tear of machines." },
      { q: "A method of reducing friction is:", o: ["roughening surfaces", "using ball bearings, rollers, streamlining and lubrication", "increasing the normal force", "using a larger surface"], a: 1, why: "Methods of reducing friction: ball bearings, rollers, streamlining, lubrication." },
      { q: "The speed at which a falling body through air stops accelerating is its:", o: ["escape velocity", "terminal velocity", "orbital velocity", "critical speed"], a: 1, why: "Terminal velocity — resistive force balances weight." },
      { q: "The force keeping a stone moving in a horizontal circle (whirled on a string) is:", o: ["centrifugal force", "centripetal force", "the weight", "friction only"], a: 1, why: "Centripetal force — directed to the centre, F = mv²/r." }
    ],
    essay: [
      { q: "Distinguish contact forces from field (non-contact) forces, giving two examples of each. Explain the difference between static and dynamic friction, and state two advantages and two disadvantages of friction with a method of reducing it.", marks: 10, outline: [
        "Contact force — requires physical contact: push/pull, friction, tension, normal reaction; Field force — acts at a distance: gravitational, electric, magnetic",
        "Static friction — opposes the start of motion between stationary surfaces (self-adjusting, up to limiting friction); Dynamic friction — opposes motion between surfaces already sliding (usually less than limiting)",
        "Advantages: walking/locomotion, belt drives, brakes, writing, grinding (grindstone); Disadvantages: wear and tear of machines, loss of energy as heat (reduced efficiency)",
        "Reducing friction: ball bearings (rolling instead of sliding), rollers, lubrication (oil/grease forming a film), streamlining (for fluids)"
      ] },
      { q: "Describe an experiment with a string tied to a stone whirled in a circle to demonstrate motion in a circle. Draw a diagram showing the centripetal force, and explain qualitatively the banking of roads in reducing sideways friction.", marks: 10, outline: [
        "Experiment: tie a stone to a string and whirl it in a horizontal (or vertical) circle; the tension in the string provides the centripetal force",
        "The stone moves in a circle of radius r at speed v; the required centripetal force is F = mv²/r, directed to the centre",
        "If the string is cut, the stone flies off tangentially (inertia) — showing the force was keeping it in the circle",
        "Angular speed ω = 2π/T; velocity v = ωr; distinction between angular speed (rad s⁻¹) and linear speed (m s⁻¹)",
        "Banking of roads: the road is banked so a component of the normal reaction provides part of the centripetal force, reducing the need for sideways friction — qualitatively discussed"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Part I, Topic 7 (Motion):" },
      { k: "bul", items: [
        "Types of motion: random, rectilinear, translational, rotational, circular, orbital, spin, oscillatory; relative motion (only qualitative treatment; illustrations for each type; numerical problems on co-linear motion)",
        "Cause of motion: force as cause of motion; push and pull; types of force — (i) contact force, (ii) non-contact (field) force: electric and magnetic attractions and repulsions, gravitational pull",
        "Solid friction: static and dynamic; coefficients of limiting friction and their determinations; advantages (locomotion, friction belt, grindstone); disadvantages (reduction of efficiency, wear and tear); methods of reducing friction (ball bearings, rollers, streamlining, lubrication)",
        "Viscosity (friction in fluids): definition and effects; simple explanation as extension of friction in fluids; fluid friction and its application in lubrication (qualitative); terminal velocity and its determination",
        "Simple ideas of circular motion: experiments with a string tied to a stone whirled around — motion in a vertical/horizontal circle; angular speed and velocity; centripetal force (diagram); banking of roads in reducing sideways friction (qualitative)"
      ] }
    ]
  },
  /* =============== P6 · SPEED, VELOCITY, ACCELERATION =============== */
  {
    grade: 12, sem: "One", icon: "🚗", period: "P6",
    title: "Speed, Velocity & Acceleration",
    subtitle: "Uniform and non-uniform motion · distance–time and velocity–time graphs · equations of motion · motion under gravity · projectiles",
    note: "Part I, Topics 8–9 plus the harmonised Topic 2 (projectile motion): speed/velocity, acceleration, the equations of motion, and motion under gravity.",
    objectives: [
      "Define speed (rate of change of distance) and velocity (rate of change of displacement) and distinguish uniform from non-uniform motion",
      "Determine instantaneous speed/velocity from a distance/displacement–time graph and by calculation",
      "Define acceleration and determine it from a velocity–time graph",
      "Use the equations of motion with constant acceleration, including motion under gravity",
      "Treat projectile motion: range, maximum height and time of flight"
    ],
    terms: [
      { t: "Speed", d: "Rate of change of distance with time, s = d/t, in m s⁻¹ (scalar).", x: "A car at 20 m s⁻¹" },
      { t: "Velocity", d: "Rate of change of displacement with time, v = s/t, in m s⁻¹ (vector).", x: "20 m s⁻¹ to the east" },
      { t: "Acceleration", d: "Rate of change of velocity with time, a = (v − u)/t, in m s⁻²; deceleration is negative acceleration.", x: "g ≈ 9.8 m s⁻² downward" },
      { t: "Uniform motion", d: "Motion with constant speed/velocity (straight line on a d–t graph).", x: "A car at constant 30 m s⁻¹" },
      { t: "Non-uniform motion", d: "Motion with changing speed/velocity (curved d–t graph).", x: "A car speeding up" },
      { t: "Instantaneous velocity", d: "The velocity at a particular instant — the gradient of the distance–time graph at that point.", x: "Slope of the curve" },
      { t: "Equations of motion", d: "For constant acceleration: v = u + at; s = ut + ½at²; v² = u² + 2as.", x: "Used to solve numerical problems" },
      { t: "Projectile", d: "An object thrown/released into space moving under gravity alone.", x: "A shot put; a thrown ball" },
      { t: "Range", d: "The horizontal distance a projectile travels before landing.", x: "Maximum at 45° (neglecting air resistance)" },
      { t: "Time of flight", d: "The total time a projectile is in the air, T = 2u sinθ / g.", x: "Depends on the vertical component of the initial velocity" }
    ],
    tf: [
      { s: "Speed is a vector and velocity is a scalar.", a: "False", why: "Speed is a scalar (distance/time); velocity is a vector (displacement/time)." },
      { s: "The gradient of a distance–time graph gives the speed.", a: "True", why: "Determination of instantaneous speed/velocity from distance/displacement–time graph." },
      { s: "The acceleration due to gravity is about 9.8 m s⁻².", a: "True", why: "Motion under gravity as a special case; g ≈ 9.8 m s⁻²." }
    ],
    mcq: [
      { q: "A bus covers 120 km in 2 hours. Its average speed is:", o: ["60 km h⁻¹", "120 km h⁻¹", "240 km h⁻¹", "40 km h⁻¹"], a: 0, why: "Speed = distance/time = 120/2 = 60 km h⁻¹." },
      { q: "The S.I. unit of velocity is:", o: ["m s⁻¹", "km h⁻¹", "m s⁻²", "m"], a: 0, why: "Velocity — metre per second (m s⁻¹)." },
      { q: "A body's velocity increases from 10 m s⁻¹ to 30 m s⁻¹ in 5 s. Its acceleration is:", o: ["2 m s⁻²", "4 m s⁻²", "10 m s⁻²", "20 m s⁻²"], a: 1, why: "a = (v − u)/t = (30 − 10)/5 = 4 m s⁻²." },
      { q: "The area under a velocity–time graph gives the:", o: ["acceleration", "displacement (distance)", "speed", "force"], a: 1, why: "Determination of displacement from the velocity–time graph (area = ∫v dt)." },
      { q: "The equation relating final velocity, initial velocity and displacement for constant acceleration is:", o: ["v = u + at", "v² = u² + 2as", "s = ½(u + v)t", "F = ma"], a: 1, why: "v² = u² + 2as — one of the equations of motion." },
      { q: "A stone thrown vertically upward with speed u returns to the ground after a time of:", o: ["u/g", "2u/g", "u/2g", "2g/u"], a: 1, why: "Time of flight = 2u/g (up and down); at the top v = 0." },
      { q: "Neglecting air resistance, the horizontal range of a projectile is greatest at a launch angle of:", o: ["0°", "30°", "45°", "90°"], a: 2, why: "Range = u²sin2θ/g — maximum when sin2θ = 1, i.e. θ = 45°." }
    ],
    essay: [
      { q: "(a) Define speed, velocity and acceleration, stating their S.I. units. (b) A car accelerates uniformly from rest to 20 m s⁻¹ in 5 s. Find its acceleration and the distance it covers. (c) Explain how you would determine the acceleration of a falling body using a ticker-timer.", marks: 12, outline: [
        "(a) Speed — rate of change of distance (m s⁻¹, scalar); Velocity — rate of change of displacement (m s⁻¹, vector); Acceleration — rate of change of velocity (m s⁻²)",
        "(b) a = (v − u)/t = (20 − 0)/5 = 4 m s⁻²; s = ut + ½at² = 0 + ½(4)(5²) = 50 m",
        "(c) Ticker-timer: tape attached to a falling mass; the timer makes dots at a fixed frequency (e.g. 50 Hz, 0.02 s apart); divide the tape into equal time intervals (e.g. 5 dots = 0.1 s); the increasing spacing shows acceleration; v = distance between intervals / time per interval; plot v against time — gradient = g (≈ 9.8 m s⁻²)"
      ] },
      { q: "A ball is thrown horizontally from the top of a 20 m tower with a speed of 10 m s⁻¹. Find: (a) the time of flight, (b) the horizontal range, (c) the velocity (magnitude) on hitting the ground. (g = 10 m s⁻²)", marks: 10, outline: [
        "Vertical: initial vertical velocity = 0; h = ½gt² → 20 = ½(10)t² → t² = 4 → t = 2 s",
        "(a) Time of flight = 2 s",
        "(b) Range = horizontal speed × time = 10 × 2 = 20 m",
        "(c) On impact: horizontal velocity = 10 m s⁻¹; vertical velocity = gt = 10 × 2 = 20 m s⁻¹; resultant = √(10² + 20²) = √500 ≈ 22.4 m s⁻¹"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Part I, Topics 8–9 (Speed and velocity; Rectilinear acceleration) + Harmonised Topic 2 (Projectile motion):" },
      { k: "bul", items: [
        "Concept of speed as change of distance with time; concept of velocity as change of displacement with time; uniform/non-uniform speed/velocity; distance/displacement–time graph",
        "Metre per second (m s⁻¹) as unit; ticker-timer or similar devices to determine speed/velocity; definition of velocity as s/t; instantaneous speed/velocity from graph and by calculation",
        "Concept of acceleration/deceleration as increase/decrease in velocity with time; uniform/non-uniform acceleration; velocity–time graph; unit m s⁻²; ticker timer to determine acceleration; definition of acceleration as v/t",
        "Determination of acceleration and displacement from velocity–time graph; equations of motion with constant acceleration; motion under gravity as a special case; use of equations to solve numerical problems",
        "Projectile motion: concept of projectiles as an object thrown/released into space; applications in warfare, sports; simple problems involving range, maximum height and time of flight"
      ] }
    ]
  },
  /* =============== P7 · SCALARS, VECTORS, EQUILIBRIUM, SHM =============== */
  {
    grade: 12, sem: "One", icon: "🧭", period: "P7",
    title: "Scalars, Vectors, Equilibrium & S.H.M.",
    subtitle: "Scalars vs vectors · vector addition · equilibrium of forces · simple harmonic motion",
    note: "Part I, Topics 10–12: scalar and vector quantities, the equilibrium of forces, and simple harmonic motion.",
    objectives: [
      "Distinguish scalars (magnitude only) from vectors (magnitude and direction)",
      "Add vectors graphically and find the resultant of coplanar forces",
      "State the conditions for the equilibrium of a body under the action of forces",
      "Define simple harmonic motion, its period and frequency, and solve simple problems on S.H.M."
    ],
    terms: [
      { t: "Scalar", d: "A physical quantity with magnitude only, no direction.", x: "Mass, time, distance, speed, energy" },
      { t: "Vector", d: "A physical quantity with both magnitude and direction.", x: "Displacement, velocity, force, acceleration" },
      { t: "Resultant", d: "The single vector equivalent of two or more vectors.", x: "Diagonal of the parallelogram" },
      { t: "Parallelogram law", d: "The resultant of two forces is the diagonal of the parallelogram drawn on the two vectors.", x: "Resolving forces into components" },
      { t: "Equilibrium", d: "The state in which the net force and net moment on a body are zero — the body is at rest or in uniform motion.", x: "A book resting on a table" },
      { t: "Principle of moments", d: "For a body in equilibrium, the sum of clockwise moments about any point equals the sum of anticlockwise moments.", x: "A balanced see-saw" },
      { t: "Simple harmonic motion (S.H.M.)", d: "Oscillatory motion in which the acceleration is proportional to the displacement from a fixed point and directed toward it, a = −ω²x.", x: "A mass on a spring; a simple pendulum (small angles)" },
      { t: "Period (T)", d: "The time for one complete oscillation; frequency f = 1/T, in hertz.", x: "T of a pendulum" }
    ],
    tf: [
      { s: "Velocity is a scalar quantity.", a: "False", why: "Velocity has both magnitude and direction — a vector." },
      { s: "For a body in equilibrium, the vector sum of all forces is zero.", a: "True", why: "Equilibrium of forces — net force (and net moment) zero." },
      { s: "In simple harmonic motion, the acceleration is proportional to the displacement and directed toward the mean position.", a: "True", why: "Definition of S.H.M.: a = −ω²x; simple problems may be set." }
    ],
    mcq: [
      { q: "Which of the following is a scalar?", o: ["velocity", "force", "distance", "displacement"], a: 2, why: "Distance has magnitude only — a scalar." },
      { q: "Two forces of 3 N and 4 N act at right angles. Their resultant is:", o: ["1 N", "7 N", "5 N", "12 N"], a: 2, why: "Resultant = √(3² + 4²) = 5 N (parallelogram)." },
      { q: "A body is in equilibrium when the resultant of all forces acting on it is:", o: ["maximum", "zero", "equal to its weight", "constant but non-zero"], a: 1, why: "Equilibrium — net force (and net moment) zero." },
      { q: "The principle of moments states that for equilibrium, the sum of clockwise moments equals the sum of:", o: ["forces", "anticlockwise moments", "weights", "inertias"], a: 1, why: "Σ(clockwise moments) = Σ(anticlockwise moments) about any point." },
      { q: "Simple harmonic motion is characterized by an acceleration that is:", o: ["constant", "proportional to the square of displacement", "proportional to the displacement and directed toward the mean position", "zero"], a: 2, why: "a = −ω²x — proportional to displacement, toward the centre." },
      { q: "The frequency of an oscillation of period 0.2 s is:", o: ["0.2 Hz", "2 Hz", "5 Hz", "20 Hz"], a: 2, why: "f = 1/T = 1/0.2 = 5 Hz." },
      { q: "The acceleration of a body in S.H.M. is maximum at:", o: ["the mean position", "the extreme positions", "everywhere equally", "when it is at rest only"], a: 1, why: "a = −ω²x — maximum displacement → maximum acceleration (at the extremes)." }
    ],
    essay: [
      { q: "(a) Distinguish a scalar from a vector quantity with two examples of each. (b) Two forces of 6 N and 8 N act at right angles at a point. Find the magnitude and direction of their resultant.", marks: 10, outline: [
        "(a) Scalar — magnitude only (mass, time, distance, speed, energy, temperature); Vector — magnitude and direction (displacement, velocity, acceleration, force, momentum)",
        "(b) Resultant R = √(6² + 8²) = √100 = 10 N",
        "Direction: θ = tan⁻¹(8/6) = tan⁻¹(1.333) ≈ 53.1° from the 6 N force"
      ] },
      { q: "Define simple harmonic motion and state its defining condition. Show that a simple pendulum (small angles) executes S.H.M., and state the relationship between its period and length.", marks: 10, outline: [
        "S.H.M. — oscillatory motion with acceleration proportional to displacement from a fixed point and directed toward it: a = −ω²x",
        "Pendulum: for small angles, the restoring force ≈ (mg/l)x, so a = −(g/l)x — proportional to displacement x, toward the mean position → S.H.M.",
        "ω² = g/l → period T = 2π√(l/g)",
        "T² is proportional to l; frequency f = 1/T; simple problems may be set (e.g. finding g from T and l)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Part I, Topics 10–12 (Scalars and vectors; Equilibrium of forces; Simple harmonic motion):" },
      { k: "bul", items: [
        "Scalars: concept as physical quantities with magnitude and no direction",
        "Vectors: concept as physical quantities with both magnitude and direction; addition and resultant",
        "Equilibrium of forces: conditions for equilibrium; principle of moments",
        "Simple harmonic motion: definition; period and frequency; simple problems may be set; mathematical proof of S.H.M. for spiral spring, bifilar suspension and loaded test-tube NOT required"
      ] }
    ]
  },
  /* =============== P8 · NEWTON'S LAWS =============== */
  {
    grade: 12, sem: "One", icon: "⚙️", period: "P8",
    title: "Newton's Laws of Motion",
    subtitle: "First law (inertia) · second law (force, momentum, impulse) · third law (action–reaction) · conservation of momentum · collisions",
    note: "Part I, Topic 13: Newton's three laws of motion, inertia mass, momentum and impulse, and collisions.",
    objectives: [
      "State Newton's first law and explain inertia of rest and inertia of motion",
      "Distinguish inertia mass from weight and use timing devices (ticker-timer) to determine the acceleration of a falling body and the relation when the force is constant",
      "State Newton's second law and define force, acceleration, momentum and impulse",
      "State Newton's third law (action and reaction)",
      "Apply the conservation of linear momentum to straight-line elastic collisions, recoil, and jet/rocket propulsion"
    ],
    terms: [
      { t: "Newton's first law", d: "A body remains at rest or in uniform straight-line motion unless acted on by a net external force — the law of inertia.", x: "A passenger lurches when a bus brakes" },
      { t: "Inertia", d: "The tendency of a body to resist a change in its state of motion — inertia of rest and inertia of motion.", x: "Greater mass → greater inertia" },
      { t: "Newton's second law", d: "The rate of change of momentum of a body is proportional to the applied force and in its direction; F = ma (for constant mass).", x: "F = ma; F = Δp/Δt" },
      { t: "Momentum", d: "The product of mass and velocity, p = mv — a vector.", x: "100 kg × 2 m s⁻¹ = 200 kg m s⁻¹" },
      { t: "Impulse", d: "Force × time, Ft = change in momentum.", x: "A cushioned landing reduces the force (longer time)" },
      { t: "Newton's third law", d: "To every action there is an equal and opposite reaction.", x: "A gun recoils when it fires" },
      { t: "Conservation of momentum", d: "In an isolated system, total momentum before collision equals total momentum after.", x: "Two trolleys colliding" }
    ],
    tf: [
      { s: "Inertia is the same as weight.", a: "False", why: "Distinction between inertia mass and weight — inertia is the resistance to change of motion; weight is the gravitational force." },
      { s: "Newton's second law is F = ma for a constant mass.", a: "True", why: "Force, acceleration, momentum and impulse — F = ma." },
      { s: "In a collision between two bodies, total momentum is conserved.", a: "True", why: "Linear momentum and its conservation; collision of elastic bodies in a straight line." }
    ],
    mcq: [
      { q: "Newton's first law is also called the law of:", o: ["action and reaction", "inertia", "universal gravitation", "momentum"], a: 1, why: "First law — inertia of rest and inertia of motion." },
      { q: "A body of mass 2 kg has a momentum of 20 kg m s⁻¹. Its velocity is:", o: ["2 m s⁻¹", "5 m s⁻¹", "10 m s⁻¹", "40 m s⁻¹"], a: 2, why: "v = p/m = 20/2 = 10 m s⁻¹." },
      { q: "The unit of impulse is the:", o: ["newton", "newton-second", "joule", "watt"], a: 1, why: "Impulse = force × time → N s." },
      { q: "According to Newton's third law, action and reaction forces:", o: ["act on the same body", "act on different bodies", "are unequal", "act in the same direction"], a: 1, why: "Equal and opposite, acting on different bodies." },
      { q: "A gun of mass 10 kg fires a bullet of mass 0.01 kg at 300 m s⁻¹. The recoil speed of the gun is:", o: ["0.3 m s⁻¹", "3 m s⁻¹", "30 m s⁻¹", "0.03 m s⁻¹"], a: 0, why: "Momentum conserved: 10 × v = 0.01 × 300 → v = 3/10 = 0.3 m s⁻¹." },
      { q: "In an elastic collision, which quantities are conserved?", o: ["momentum only", "kinetic energy only", "both momentum and kinetic energy", "neither"], a: 2, why: "Collision of elastic bodies — both momentum and kinetic energy conserved." }
    ],
    essay: [
      { q: "State Newton's three laws of motion. Explain the terms inertia of rest and inertia of motion with two examples, and distinguish inertia mass from weight.", marks: 10, outline: [
        "First law: a body remains at rest or in uniform straight-line motion unless acted on by a net external force (law of inertia)",
        "Second law: the rate of change of momentum is proportional to the force and in its direction; F = ma",
        "Third law: to every action there is an equal and opposite reaction",
        "Inertia of rest: a body at rest resists starting (a heavy box is hard to push; a passenger is thrown backward when a bus starts)",
        "Inertia of motion: a body in motion resists stopping (a passenger lurches forward when a bus brakes; a spinning top keeps spinning)",
        "Inertia mass — measure of resistance to acceleration (kg, measured in a balance); Weight — gravitational force W = mg (N, varies with g)"
      ] },
      { q: "Two trolleys of masses 2 kg and 3 kg move along a smooth track. The 2 kg trolley moves at 6 m s⁻¹ and catches up with the 3 kg trolley moving at 2 m s⁻¹ in the same direction. If they stick together, find their common velocity.", marks: 10, outline: [
        "Conservation of momentum (isolated system, no external horizontal force)",
        "Before: p = (2 × 6) + (3 × 2) = 12 + 6 = 18 kg m s⁻¹",
        "After (stuck together, mass 5 kg): 5 × v = 18",
        "v = 18/5 = 3.6 m s⁻¹ in the direction of motion",
        "Note: this is a perfectly inelastic collision — momentum conserved but kinetic energy is not"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Part I, Topic 13 (Newton's laws of motion):" },
      { k: "bul", items: [
        "First Law: inertia of rest and inertia of motion",
        "Second Law: force, acceleration, momentum and impulse",
        "Third Law: action and reaction",
        "Distinction between inertia mass and weight",
        "Use of timing devices e.g. ticker-timer to determine the acceleration of a falling body and the relationship when the accelerating force is constant",
        "Linear momentum and its conservation; collision of elastic bodies in a straight line; applications: recoil of a gun, jet and rocket propulsions; simple problems may be set"
      ] }
    ]
  },
  /* =============== P9 · WORK, ENERGY, POWER, MACHINES =============== */
  {
    grade: 12, sem: "Two", icon: "🏗️", period: "P9",
    title: "Work, Energy, Power & Simple Machines",
    subtitle: "Forms of energy · conservation of energy · potential and kinetic energy · power · levers, pulleys, inclined plane",
    note: "Part II, Topics 14–15: forms of energy, world energy resources, conservation of energy, and the mechanical energy of machines (work, energy, power).",
    objectives: [
      "State the forms of energy (mechanical — potential and kinetic, heat, chemical, electrical, light, sound, nuclear) and discuss renewable vs non-renewable sources",
      "State the principle of conservation of energy and use it to explain energy transformations",
      "Derive and use the expressions for potential energy (mgh) and kinetic energy (½mv²) and the conservation of mechanical energy",
      "Define power (time rate of doing work) and use the watt (W); distinguish the joule (energy) from the kWh (electrical consumption)",
      "Treat the force ratio, mechanical advantage, velocity ratio and efficiency of simple machines (levers, pulleys, inclined plane, wedge, screw, wheel and axle, gears)"
    ],
    terms: [
      { t: "Work", d: "Energy transfer by a force acting through a distance in its direction, W = Fd, in joules.", x: "Lifting a 10 N load 2 m: W = 20 J" },
      { t: "Energy", d: "The capability to do work, in joules; forms: mechanical (P.E. + K.E.), heat, chemical, electrical, light, sound, nuclear.", x: "A moving lorry has kinetic energy" },
      { t: "Potential energy", d: "Energy due to position/configuration, P.E. = mgh (gravitational).", x: "A raised hammer" },
      { t: "Kinetic energy", d: "Energy due to motion, K.E. = ½mv².", x: "A falling object" },
      { t: "Conservation of energy", d: "Energy can neither be created nor destroyed, only transformed from one form to another.", x: "Swinging pendulum: P.E. ⇄ K.E." },
      { t: "Renewable energy", d: "Sources that are replenished naturally — solar, wind, tides, hydro, ocean waves.", x: "Solar panels" },
      { t: "Non-renewable energy", d: "Sources that are finite and not quickly replenished — petroleum, coal, nuclear, (biomass as used).", x: "Petroleum, coal" },
      { t: "Power", d: "The time rate of doing work, P = W/t, in watts (W = J s⁻¹).", x: "A 100 W lamp" },
      { t: "Mechanical advantage (M.A.)", d: "Load ÷ effort — how many times a machine multiplies force.", x: "A lever with M.A. = 4" },
      { t: "Velocity ratio (V.R.)", d: "Distance moved by effort ÷ distance moved by load — ideal, frictionless ratio.", x: "V.R. of a pulley system = number of rope strands" },
      { t: "Efficiency", d: "Useful work out ÷ work in × 100% = (M.A./V.R.) × 100%; always < 100% because of friction.", x: "A 75% efficient machine" }
    ],
    tf: [
      { s: "The principle of conservation of energy states that energy can be created or destroyed.", a: "False", why: "Energy can neither be created nor destroyed, only transformed." },
      { s: "Solar, wind, tides, hydro and ocean waves are renewable energy sources.", a: "True", why: "Renewable (e.g. solar, wind, tides, hydro, ocean waves) and non-renewable (e.g. petroleum, coal, nuclear, biomass)." },
      { s: "The joule is the unit of energy and the kWh is the unit of electrical energy consumption.", a: "True", why: "Unit of energy as the joule (J) while unit of electrical consumption is KWh." }
    ],
    mcq: [
      { q: "A force of 20 N moves a body 5 m in its direction. The work done is:", o: ["4 J", "10 J", "100 J", "400 J"], a: 2, why: "W = Fd = 20 × 5 = 100 J." },
      { q: "The kinetic energy of a 2 kg body moving at 3 m s⁻¹ is:", o: ["6 J", "9 J", "18 J", "36 J"], a: 1, why: "K.E. = ½mv² = ½ × 2 × 9 = 9 J." },
      { q: "The gravitational potential energy of a 1 kg mass raised 10 m (g = 10) is:", o: ["10 J", "100 J", "20 J", "1 J"], a: 1, why: "P.E. = mgh = 1 × 10 × 10 = 100 J." },
      { q: "Power is defined as:", o: ["force × distance", "work ÷ time", "energy × time", "mass × velocity"], a: 1, why: "Power = work/time (rate of doing work), unit watt." },
      { q: "A machine does 200 J of useful work from 400 J of energy input. Its efficiency is:", o: ["25%", "50%", "75%", "100%"], a: 1, why: "Efficiency = 200/400 × 100 = 50%." },
      { q: "The mechanical advantage of a machine is:", o: ["load ÷ effort", "effort ÷ load", "distance of effort ÷ distance of load", "work in ÷ work out"], a: 0, why: "M.A. = load/effort." },
      { q: "Which of the following is a non-renewable energy source?", o: ["solar", "wind", "petroleum", "hydro"], a: 2, why: "Non-renewable: petroleum, coal, nuclear, biomass." }
    ],
    essay: [
      { q: "(a) State the principle of conservation of energy. (b) A 0.5 kg ball is dropped from a height of 20 m. Find its potential energy at the top, its kinetic energy just before it hits the ground, and its speed then. (g = 10 m s⁻²; neglect air resistance)", marks: 10, outline: [
        "(a) Energy can neither be created nor destroyed, only transformed from one form to another",
        "(b) At the top: P.E. = mgh = 0.5 × 10 × 20 = 100 J",
        "Just before impact: all P.E. → K.E. (conservation of mechanical energy), so K.E. = 100 J",
        "K.E. = ½mv² → 100 = ½ × 0.5 × v² → v² = 400 → v = 20 m s⁻¹",
        "(Check: v = √(2gh) = √(2 × 10 × 20) = √400 = 20 m s⁻¹)"
      ] },
      { q: "Define force ratio, mechanical advantage, velocity ratio and efficiency of a machine. A pulley system has a velocity ratio of 5 and lifts a 100 N load with a 30 N effort. Find its mechanical advantage and efficiency, and explain why the efficiency is less than 100%.", marks: 10, outline: [
        "Mechanical advantage (M.A.) = load/effort = 100/30 ≈ 3.33",
        "Velocity ratio (V.R.) = distance of effort/distance of load = 5 (given)",
        "Efficiency = (M.A./V.R.) × 100 = (3.33/5) × 100 ≈ 66.7%",
        "Force ratio here is the M.A. (load:effort)",
        "Efficiency < 100% because some energy is lost to friction at the pulleys and in lifting the movable pulleys — the effect of friction on machines and its reduction"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Part II, Topics 14 (Energy) and 15 (Work, Energy and Power):" },
      { k: "bul", items: [
        "14. Energy: (a) forms of energy — mechanical (potential and kinetic), heat, chemical, electrical, light, sound, nuclear; (b) world energy resources — renewable (solar, wind, tides, hydro, ocean waves) and non-renewable (petroleum, coal, nuclear, biomass); (c) conservation of energy — statement of the principle and its use in explaining energy transformations",
        "15. Work, Energy and Power: concept of work as a measure of energy transfer; concept of energy as capability to do work; work done in a gravitational field (lifting a body and by falling bodies); types of mechanical energy — (i) potential energy, (ii) kinetic energy; conservation of mechanical energy; verification of the principle; derivation of P.E. and K.E. expected to be known; identification of types of energy possessed by a body under given conditions",
        "Power: concept as time rate of doing work; unit watt (W); unit of energy as joule (J) while unit of electrical consumption is kWh",
        "Application of mechanical energy — machines: levers, pulleys, inclined plane, wedge, screw, wheel and axle, gears; force ratio (F.R), mechanical advantage (M.A), velocity ratio (V.R) and efficiency of each machine; identification of simple machines that make up a complicated machine e.g. bicycle; effects of friction on machines; reduction of friction in machines"
      ] }
    ]
  },
  /* =============== P10 · HEAT ENERGY =============== */
  {
    grade: 12, sem: "Two", icon: "🔥", period: "P10",
    title: "Heat Energy",
    subtitle: "Temperature and thermometers · effects of heat · expansion · gas laws · heat transfer · measurement of heat · latent heat",
    note: "Part II, Topic 16: temperature and its measurement, the effects of heat on matter, thermal expansion, the gas laws, heat transfer, and the measurement of heat energy.",
    objectives: [
      "Define temperature and describe the construction/graduation of a simple thermometer and the properties of thermometric liquids; treat the various thermometers",
      "Use the kinetic theory to explain the effects of heat: rise in temperature, change of phase state, expansion, change of resistance",
      "Describe linear, area and volume expansivities, the consequences of expansion, and the anomalous expansion of water",
      "Explain heat transfer by conduction, convection and radiation",
      "State Boyle's law, Charles' law, the pressure law and the general gas law",
      "Measure heat energy: specific heat capacity, latent heat, and the methods of mixtures; the joule as the unit of heat"
    ],
    terms: [
      { t: "Temperature", d: "The degree of hotness or coldness of a body; measured in kelvin (K) or degree Celsius (°C).", x: "Celsius and absolute (Kelvin) scales" },
      { t: "Thermometer", d: "An instrument for measuring temperature — liquid-in-glass, constant-volume gas, resistance, thermocouple, pyrometer; clinical and maximum–minimum types.", x: "Mercury-in-glass thermometer" },
      { t: "Thermal expansion", d: "The increase in dimensions of a body on heating; linear (α), area (2α) and volume (γ ≈ 3α) expansivities.", x: "A metal rod lengthens when heated" },
      { t: "Anomalous expansion of water", d: "Water contracts on heating from 0°C to 4°C, then expands — maximum density at 4°C.", x: "Why lakes freeze from the top down" },
      { t: "Boyle's law", d: "At constant temperature, the volume of a fixed mass of gas is inversely proportional to its pressure, P ∝ 1/V (PV = constant).", x: "Syringe: push harder → smaller volume" },
      { t: "Charles' law", d: "At constant pressure, the volume of a fixed mass of gas is directly proportional to its absolute temperature, V ∝ T.", x: "A balloon expands when heated" },
      { t: "General gas law", d: "PV/T = constant for a fixed mass of gas (combining Boyle, Charles and the pressure law).", x: "PV₁/T₁ = PV₂/T₂" },
      { t: "Conduction", d: "Heat transfer through a material by particle vibrations/collisions, from hot to cold, without bulk motion.", x: "A metal spoon in hot tea" },
      { t: "Convection", d: "Heat transfer by the bulk movement of a fluid (liquid or gas), hot rising, cold sinking.", x: "Sea breeze; a boiling pan of water" },
      { t: "Radiation", d: "Heat transfer by electromagnetic (infrared) waves, needing no medium.", x: "Heat from the Sun through space" },
      { t: "Specific heat capacity", d: "The heat needed to raise 1 kg of a substance by 1 K, c = Q/(mΔθ), in J kg⁻¹ K¹.", x: "Water ≈ 4200 J kg⁻¹ K⁻¹" },
      { t: "Latent heat", d: "The heat absorbed/released in a change of state at constant temperature; specific latent heat per kilogram — of fusion (solid↔liquid) and of vaporization (liquid↔gas).", x: "Ice melting at 0°C" }
    ],
    tf: [
      { s: "Water has its maximum density at 4°C.", a: "True", why: "Anomalous expansion of water — contracts from 0°C to 4°C, maximum density at 4°C." },
      { s: "Heat can be transferred by radiation through a vacuum.", a: "True", why: "Radiation needs no medium — e.g. heat from the Sun through space." },
      { s: "Boyle's law holds at constant temperature.", a: "True", why: "Boyle's law — volume inversely proportional to pressure at constant temperature." },
      { s: "The unit of heat energy is the calorie only.", a: "False", why: "The S.I. unit of heat energy is the joule (J) (the calorie is also used but S.I. is the joule)." }
    ],
    mcq: [
      { q: "The S.I. unit of temperature is the:", o: ["degree Celsius", "kelvin", "fahrenheit", "joule"], a: 1, why: "Kelvin (K) is the S.I. unit of thermodynamic temperature." },
      { q: "According to Boyle's law, at constant temperature, volume is:", o: ["directly proportional to pressure", "inversely proportional to pressure", "independent of pressure", "proportional to the square of pressure"], a: 1, why: "P ∝ 1/V (PV = constant)." },
      { q: "Charles' law is valid at constant:", o: ["temperature", "pressure", "volume", "density"], a: 1, why: "V ∝ T at constant pressure." },
      { q: "Heat from the Sun reaches the Earth mainly by:", o: ["conduction", "convection", "radiation", "diffusion"], a: 2, why: "Radiation — no medium needed through the vacuum of space." },
      { q: "The specific heat capacity of water is about:", o: ["420 J kg⁻¹ K⁻¹", "4200 J kg⁻¹ K⁻¹", "42 J kg⁻¹ K⁻¹", "42000 J kg⁻¹ K⁻¹"], a: 1, why: "Water ≈ 4200 J kg⁻¹ K⁻¹." },
      { q: "The heat absorbed when ice melts at 0°C is its:", o: ["specific heat capacity", "latent heat of fusion", "latent heat of vaporization", "sensible heat"], a: 1, why: "Change of state at constant temperature — latent heat of fusion." },
      { q: "The coefficient of volume expansion of a solid is approximately:", o: ["equal to its linear expansivity", "half its linear expansivity", "three times its linear expansivity", "its linear expansivity squared"], a: 2, why: "γ ≈ 3α for solids." }
    ],
    essay: [
      { q: "(a) State Boyle's law and describe an experiment to verify it. (b) A fixed mass of gas occupies 200 cm³ at 1 atm. Find its volume at 2 atm (temperature constant).", marks: 10, outline: [
        "(a) Boyle's law: at constant temperature, the volume of a fixed mass of gas is inversely proportional to its pressure (PV = constant)",
        "Experiment: a graduated syringe or Bourdon tube with a known mass of air; add known weights (or pressures) and read the volume; show P × V is constant (plot V against 1/P gives a straight line through the origin); temperature kept constant (water bath)",
        "(b) P₁V₁ = P₂V₂ → (1)(200) = (2)V₂ → V₂ = 100 cm³"
      ] },
      { q: "Define specific heat capacity and specific latent heat of fusion. Explain, with reference to the anomalous expansion of water, why lakes freeze from the top down rather than from the bottom.", marks: 10, outline: [
        "Specific heat capacity — heat to raise 1 kg by 1 K (J kg⁻¹ K⁻¹); Specific latent heat of fusion — heat to melt 1 kg of solid at its melting point (J kg⁻¹)",
        "Water contracts on cooling from 4°C to 0°C (anomalous expansion) — it is least dense near 0°C",
        "In a lake, cold surface water becomes less dense and stays at the top; the 4°C water (densest) sinks to the bottom",
        "So as the surface reaches 0°C and freezes, the ice (less dense) floats on top while the water below stays at about 4°C — freezing proceeds from the top down, insulating the water below and allowing life to survive"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Part II, Topic 16 (Heat Energy):" },
      { k: "bul", items: [
        "Temperature and its measurement: concept as degree of hotness/coldness; construction and graduation of a simple thermometer; properties of thermometric liquids; constant-volume gas, resistance, thermocouple, liquid-in-glass (including maximum/minimum and clinical), pyrometer; Celsius and Absolute scales; kelvin and degree Celsius as units",
        "Effects of heat on matter: rise in temperature, change of phase state, expansion, change of resistance; use of the kinetic theory to explain; other effects — change of colour, thermionic emission, change in chemical properties",
        "Thermal expansion: linear, area and volume expansivities (qualitative and quantitative); consequences and applications — expansion in buildings/bridges, bimetallic strips, thermostat, overhead cables sagging, railway lines buckling; real and apparent expansion of liquids; anomalous expansion of water",
        "Heat transfer: conduction, convection and radiation (conditions for each)",
        "The gas laws: Boyle's law, Charles' law, pressure law and general gas law",
        "Measurement of heat energy: specific heat capacity, latent heat, methods of mixtures; joule as unit of heat energy"
      ] }
    ]
  },
  /* =============== P11 · WAVES: PRODUCTION, PROPERTIES & LIGHT =============== */
  {
    grade: 12, sem: "Two", icon: "🌈", period: "P11",
    title: "Waves: Production, Properties & Light",
    subtitle: "Production and propagation · transverse and longitudinal · reflection, refraction, diffraction, interference, stationary waves · light: rectilinear propagation, mirrors, refraction, lenses, dispersion",
    note: "Part III, Topics 17–20: production and propagation of waves, their types and properties, and light waves (rectilinear propagation, reflection, refraction, lenses, optical instruments, dispersion).",
    objectives: [
      "Describe the production and propagation of mechanical waves and the mathematical relationship v = fλ and T = 1/f",
      "Distinguish transverse from longitudinal waves and use the equation y = A sin(ωt)",
      "Demonstrate and explain reflection, refraction, diffraction, interference and superposition (standing/stationary waves) using a ripple tank",
      "Explain rectilinear propagation of light, formation of shadows and eclipses, and the pinhole camera",
      "Apply the laws of reflection to plane and curved (concave/convex) mirrors, and solve problems using the mirror formulae",
      "Explain refraction at plane and curved surfaces, critical angle and total internal reflection, and solve problems using the lens formulae; the power of a lens in dioptres"
    ],
    terms: [
      { t: "Wave", d: "A disturbance that transfers energy from one place to another without transferring matter; characterized by speed, frequency and wavelength.", x: "A ripple on water" },
      { t: "Wavelength (λ)", d: "The distance between two successive similar points (crest to crest).", x: "Measured in metres" },
      { t: "Frequency (f)", d: "The number of complete waves per second, in hertz (Hz); period T = 1/f.", x: "A 50 Hz alternating current" },
      { t: "Wave speed", d: "v = fλ — the speed at which the wave travels; v = λ/T.", x: "Light in air ≈ 3 × 10⁸ m s⁻¹" },
      { t: "Transverse wave", d: "A wave in which the vibrations are at right angles to the direction of travel.", x: "Light waves; ripples on water" },
      { t: "Longitudinal wave", d: "A wave in which the vibrations are parallel to the direction of travel — compressions and rarefactions.", x: "Sound in air" },
      { t: "Reflection", d: "The bouncing back of a wave at a boundary; angle of incidence = angle of reflection.", x: "A mirror image" },
      { t: "Refraction", d: "The bending of a wave when it passes from one medium to another (change of speed).", x: "A straw looking bent in water" },
      { t: "Diffraction", d: "The spreading of waves around obstacles or through apertures (most marked when aperture ≈ wavelength).", x: "Sound bending around a door" },
      { t: "Interference / stationary waves", d: "Superposition of two progressive waves; when they travel in opposite directions, standing (stationary) waves form with nodes and antinodes.", x: "A plucked string" },
      { t: "Focal length (f)", d: "The distance from the centre of a lens/mirror to its focus; power of a lens P = 1/f (in dioptres).", x: "A converging lens f = 10 cm → P = +10 D" },
      { t: "Critical angle", d: "The angle of incidence in the denser medium for which the refracted ray is along the surface; above it, total internal reflection occurs.", x: "Optical fibres" }
    ],
    tf: [
      { s: "Sound waves in air are transverse.", a: "False", why: "Sound in air is longitudinal (compressions and rarefactions); light is transverse." },
      { s: "The relationship connecting wave speed, frequency and wavelength is v = fλ.", a: "True", why: "Mathematical relationship connecting frequency (f), wavelength (λ), period (T) and velocity (v): v = fλ." },
      { s: "Total internal reflection occurs when light passes from a less dense to a more dense medium.", a: "False", why: "It occurs when light travels from a denser to a less dense medium at an angle greater than the critical angle." },
      { s: "Questions on phase difference will not be set in the WASSCE paper.", a: "True", why: "Questions on phase difference will not be set." }
    ],
    mcq: [
      { q: "A wave of frequency 5 Hz and wavelength 2 m has a speed of:", o: ["2.5 m s⁻¹", "7 m s⁻¹", "10 m s⁻¹", "25 m s⁻¹"], a: 2, why: "v = fλ = 5 × 2 = 10 m s⁻¹." },
      { q: "In a longitudinal wave, the vibrations are:", o: ["perpendicular to the direction of travel", "parallel to the direction of travel", "at 45°", "random"], a: 1, why: "Longitudinal — parallel (sound); transverse — perpendicular (light)." },
      { q: "The bending of a wave when it passes from one medium into another is called:", o: ["reflection", "refraction", "diffraction", "interference"], a: 1, why: "Refraction — change of direction due to change of speed." },
      { q: "The spreading of waves around an obstacle is:", o: ["diffraction", "reflection", "dispersion", "polarization"], a: 0, why: "Diffraction — most marked when aperture ≈ wavelength." },
      { q: "In a plane mirror, the angle of incidence equals the angle of:", o: ["refraction", "reflection", "deviation", "dispersion"], a: 1, why: "First law of reflection — angle of incidence = angle of reflection." },
      { q: "Total internal reflection occurs when light passes:", o: ["from air into water", "from water into air at an angle greater than the critical angle", "from glass into air at any angle", "from vacuum into glass"], a: 1, why: "Denser to less dense medium, beyond the critical angle." },
      { q: "The power of a converging lens of focal length 0.2 m is:", o: ["+0.2 D", "+2 D", "+5 D", "+20 D"], a: 2, why: "P = 1/f = 1/0.2 = +5 dioptres." }
    ],
    essay: [
      { q: "(a) Define wavelength, frequency and period, and state the equations connecting wave speed, frequency and wavelength. (b) A radio wave has a frequency of 1.5 × 10⁸ Hz. Find its wavelength in free space (speed of light = 3 × 10⁸ m s⁻¹).", marks: 10, outline: [
        "(a) Wavelength λ — distance between successive crests; Frequency f — number of waves per second (Hz); Period T — time for one wave, T = 1/f; Speed v = fλ = λ/T",
        "(b) λ = v/f = (3 × 10⁸)/(1.5 × 10⁸) = 2 m"
      ] },
      { q: "Explain, with a labelled ray diagram, how an image is formed by a converging lens when the object is placed beyond twice the focal length. State the characteristics of the image and give one application of this arrangement.", marks: 10, outline: [
        "Converging lens, object beyond 2F: ray through the centre goes straight; ray parallel to the axis refracts through the focus",
        "The rays meet between F and 2F on the far side → a real, inverted, diminished image",
        "Image is real (can be projected on a screen), inverted, smaller than the object, between F and 2F",
        "Application: the camera (image formed on the film/sensor); also the human eye (retina)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Part III, Topics 17–20 (Production and propagation of waves; Types of waves; Properties of waves; Light waves):" },
      { k: "bul", items: [
        "17. Production and propagation of waves: production and propagation of mechanical waves; pulsating system; energy transmitted with definite speed, frequency and wavelength; waveform; mathematical relationship connecting f, λ, T and v; use of ropes and springs (slinky) and ripple tank; Hertz (Hz) as unit of frequency; description and graphical representation; amplitude, wavelength, frequency, period; sound and light as wave phenomena; v = fλ and T = 1/f (simple problems); equation y = A sin(ωt) explained; questions on phase difference NOT set",
        "18. Types of waves: transverse and longitudinal; mathematical representation of wave motion; examples",
        "19. Properties of waves: reflection, refraction, diffraction, interference, superposition of progressive waves producing standing/stationary waves; ripple tank extensively used with plane and circular waves; explanation of the properties",
        "20. Light waves: sources (natural/artificial, luminous/non-luminous); rectilinear propagation (shadows, eclipse, pinhole camera); reflection at plane surfaces (laws, image formation, inclined plane mirrors, rotation of mirrors; periscope, sextant, kaleidoscope); reflection at curved surfaces (concave/convex mirrors, laws, image characteristics, mirror formulae 1/f = 1/u + 1/v and m, focal length experiment, applications — searchlight, parabolic/driving mirrors, car headlamps); refraction at plane surfaces (laws, real/apparent depths, critical angle, total internal reflection, lateral displacement, angle of deviation, minimum deviation equation, applications — periscope, prism binoculars, optical fibres, mirage); refraction at curved surfaces (converging/diverging lenses, lens formulae, focal length experiment, power in dioptres, simple camera, human eye, projectors, microscopes, telescopes, angular magnification, prism binoculars, eye defects and corrections); dispersion of white light by a triangular prism (pure spectrum)"
      ] }
    ]
  },
  /* =============== P12 · ELECTROMAGNETIC WAVES & SOUND =============== */
  {
    grade: 12, sem: "Two", icon: "📻", period: "P12",
    title: "Electromagnetic Waves & Sound",
    subtitle: "The electromagnetic spectrum · types of radiation · sound: production, propagation, characteristics, applications",
    note: "Part III, Topics 21–22: the electromagnetic spectrum (types of radiation) and sound waves.",
    objectives: [
      "List the types of radiation in the electromagnetic spectrum (radio, microwave, infrared, visible, ultraviolet, X-rays, gamma rays) and their order",
      "Explain the properties, sources and uses of the radiations of the electromagnetic spectrum",
      "Describe the production and propagation of sound waves and their characteristics (loudness, pitch, quality)",
      "Explain the reflection, refraction and resonance of sound, and the musical instruments that use them"
    ],
    terms: [
      { t: "Electromagnetic spectrum", d: "The range of electromagnetic waves ordered by wavelength/frequency: radio, microwave, infrared, visible, ultraviolet, X-ray, gamma ray.", x: "All travel at c = 3 × 10⁸ m s¹ in vacuum" },
      { t: "Radio waves", d: "Longest-wavelength EM waves; used for broadcasting and communication.", x: "AM/FM radio; TV" },
      { t: "Infrared", d: "EM waves of wavelength longer than visible red; felt as heat.", x: "Thermal imaging; remote controls" },
      { t: "Visible light", d: "The small band of EM waves the eye detects (red → violet).", x: "The colour spectrum" },
      { t: "Ultraviolet", d: "EM waves of wavelength shorter than visible violet; from the Sun.", x: "Sterilization; sunburn" },
      { t: "X-rays", d: "Short-wavelength, penetrating EM waves produced by fast electrons hitting a target.", x: "Medical imaging" },
      { t: "Gamma rays", d: "The shortest-wavelength, most penetrating EM waves, from nuclear reactions.", x: "Cancer treatment; sterilization" },
      { t: "Sound", d: "A longitudinal mechanical wave produced by vibrating bodies, requiring a medium to travel.", x: "A plucked guitar string" },
      { t: "Pitch", d: "The highness/lowness of a sound, determined by frequency.", x: "A high-pitched whistle" },
      { t: "Loudness", d: "The intensity/volume of a sound, determined by amplitude.", x: "A loud drum" },
      { t: "Resonance", d: "The large amplitude of vibration when a system is driven at its natural frequency.", x: "A tuning fork matching a note" }
    ],
    tf: [
      { s: "All electromagnetic waves travel at the same speed in a vacuum.", a: "True", why: "All EM waves travel at c = 3 × 10⁸ m s⁻¹ in vacuum." },
      { s: "Gamma rays have the longest wavelength in the electromagnetic spectrum.", a: "False", why: "Gamma rays have the SHORTEST wavelength (highest frequency); radio waves have the longest." },
      { s: "Sound can travel through a vacuum.", a: "False", why: "Sound is a mechanical wave and requires a material medium — it cannot travel through a vacuum." }
    ],
    mcq: [
      { q: "The correct order of the electromagnetic spectrum from longest to shortest wavelength is:", o: ["radio, infrared, visible, ultraviolet, X-ray, gamma", "gamma, X-ray, ultraviolet, visible, infrared, radio", "visible, radio, infrared, gamma, X-ray, ultraviolet", "infrared, radio, gamma, visible, ultraviolet, X-ray"], a: 0, why: "Longest (radio) → shortest (gamma)." },
      { q: "Which EM radiation is used for TV broadcasting?", o: ["gamma rays", "X-rays", "radio/microwaves", "ultraviolet"], a: 2, why: "Radio waves (and microwaves) carry TV signals." },
      { q: "Sound waves are:", o: ["transverse and need no medium", "longitudinal and need a medium", "longitudinal and need no medium", "transverse and need a medium"], a: 1, why: "Sound is a longitudinal mechanical wave requiring a medium." },
      { q: "The pitch of a sound is determined by its:", o: ["amplitude", "frequency", "speed", "wavelength only"], a: 1, why: "Pitch ∝ frequency; loudness ∝ amplitude." },
      { q: "Infrared radiation is most associated with:", o: ["medical imaging", "heat/thermal radiation", "broadcasting", "sterilization of food by ionizing it"], a: 1, why: "Infrared is felt as heat (thermal radiation)." },
      { q: "A sound wave cannot travel through:", o: ["air", "water", "steel", "a vacuum"], a: 3, why: "Sound needs a medium — it cannot travel through a vacuum." }
    ],
    essay: [
      { q: "(a) List the seven regions of the electromagnetic spectrum in order of increasing frequency. (b) Give two uses of each of: radio waves, infrared, ultraviolet and X-rays. (c) State the speed at which all electromagnetic waves travel in a vacuum.", marks: 10, outline: [
        "(a) Radio, microwave, infrared, visible, ultraviolet, X-ray, gamma ray (increasing frequency, decreasing wavelength)",
        "(b) Radio waves — broadcasting, communication; Infrared — thermal imaging, remote controls, heating; Ultraviolet — sterilization, security (fluorescence), tanning; X-rays — medical imaging, security scanning",
        "(c) c = 3 × 10⁸ m s¹ in a vacuum"
      ] },
      { q: "Explain how sound is produced and propagated. Distinguish pitch from loudness, and give an example of each. Describe resonance with one example of a musical instrument that uses it.", marks: 10, outline: [
        "Production: a vibrating body (string, column of air, membrane) sets the surrounding air into vibration — a longitudinal wave of compressions and rarefactions",
        "Propagation: the wave travels through the medium (air, water, solids — fastest in solids); it needs a medium",
        "Pitch — determined by frequency (high f → high pitch, e.g. a piccolo); Loudness — determined by amplitude (larger amplitude → louder, e.g. a struck drum)",
        "Resonance: a body vibrates with large amplitude when driven at its natural frequency; example: the sound box of a guitar/violin (or a tuning fork on a resonance tube) amplifies the note"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Part III, Topics 21–22 (Electromagnetic waves; Sound Waves):" },
      { k: "bul", items: [
        "21. Electromagnetic waves: types of radiation in the electromagnetic spectrum (radio, microwave, infrared, visible, ultraviolet, X-ray, gamma); properties, sources and uses of each; all travel at c in vacuum",
        "22. Sound waves: production (vibrating bodies) and propagation (longitudinal, needs a medium); characteristics — loudness (amplitude), pitch (frequency), quality; reflection, refraction and resonance of sound; musical instruments using resonance; the speed of sound in air, water and solids"
      ] }
    ]
  },
  /* =============== P13 · FIELDS: GRAVITATIONAL, ELECTROSTATIC & CURRENT =============== */
  {
    grade: 12, sem: "Two", icon: "🧲", period: "P13",
    title: "Fields: Gravitational, Electrostatic & Current Electricity",
    subtitle: "Field concept · Newton's law of gravitation · escape velocity · electrostatics, Coulomb's law, capacitance · cells, Ohm's law, circuits, energy and power",
    note: "Part IV, Topics 23–25: the concept of fields, the gravitational field, electrostatics and capacitance, and current electricity (cells, Ohm's law, circuits, measurement, energy and power).",
    objectives: [
      "Explain the concept of a field (gravitational, electric, magnetic) and the properties of a force field",
      "Define gravitational field intensity (G = g = F/m), Newton's law of gravitation, and the relationship between G and g; calculate escape velocity",
      "Describe the production of charges (friction, induction, contact) and the use of the electroscope",
      "State Coulomb's law and define electric field intensity and electric potential",
      "Explain capacitance, the factors affecting a parallel-plate capacitor, capacitors in series/parallel, and energy stored",
      "Treat current electricity: cells (primary/secondary), e.m.f., Ohm's law, series/parallel cells and resistors, internal resistance, measurement, electrical energy and power, resistivity and conductivity"
    ],
    terms: [
      { t: "Field", d: "A region in which a force acts on a body; gravitational, electric and magnetic fields are force fields.", x: "The Earth's gravitational field" },
      { t: "Gravitational field intensity", d: "The force per unit mass at a point, G = F/m = g (≈ 9.8 N kg⁻¹ on Earth).", x: "Masses include protons, electrons and planets" },
      { t: "Newton's law of gravitation", d: "Every mass attracts every other mass with a force F = G m₁m₂/r², where G is the universal gravitational constant.", x: "The Earth pulls the Moon" },
      { t: "Escape velocity", d: "The minimum speed needed for a body to escape a gravitational field, v = √(2gR).", x: "≈ 11.2 km s⁻¹ from Earth" },
      { t: "Electric charge", d: "A property of matter that experiences electric forces; produced by friction, induction and contact.", x: "Positive and negative charges" },
      { t: "Electroscope", d: "An instrument that detects and compares electric charges.", x: "A gold-leaf electroscope" },
      { t: "Coulomb's law", d: "The force between two point charges is F = k q₁q₂/r², acting along the line joining them.", x: "Like charges repel; unlike attract" },
      { t: "Electric field intensity", d: "The force per unit positive charge at a point, E = F/q = potential gradient (V m⁻¹).", x: "E = kq/r² for a point charge" },
      { t: "Capacitance", d: "The charge per unit potential, C = Q/V, in farads (F); a parallel-plate capacitor's C depends on area, separation and permittivity.", x: "Capacitors store energy" },
      { t: "Cell / e.m.f.", d: "A device that converts chemical to electrical energy; e.m.f. is the p.d. across its terminals on open circuit, in volts.", x: "Daniell, Leclanché, lead-acid cells" },
      { t: "Ohm's law", d: "At constant temperature, the current through a conductor is proportional to the p.d. across it, V = IR.", x: "Ohmic conductors — metals" },
      { t: "Internal resistance", d: "The resistance within a cell; it causes the 'lost volt' — V = E − Ir.", x: "Why terminal p.d. drops under load" },
      { t: "Resistivity", d: "The resistance of a unit length and unit cross-section of a material, ρ = RA/l (Ω m); conductivity is its reciprocal.", x: "Copper is a good conductor (low ρ)" },
      { t: "Electrical energy and power", d: "Energy = VIt (joules); power = VI (watts); heating effect of current and its applications.", x: "An electric heater; kWh billing" }
    ],
    tf: [
      { s: "The gravitational field intensity at a point is the force per unit mass there.", a: "True", why: "G as gravitational field intensity, g = F/m." },
      { s: "Like charges attract and unlike charges repel.", a: "False", why: "Like charges repel; unlike charges attract." },
      { s: "According to Ohm's law, at constant temperature, current is proportional to p.d.", a: "True", why: "Ohm's law and resistance — V = IR; verification required." },
      { s: "The farad is the S.I. unit of capacitance.", a: "True", why: "The farad (F) as unit of capacitance." }
    ],
    mcq: [
      { q: "Newton's law of gravitation states that the force between two masses is:", o: ["proportional to the product of the masses and inversely proportional to the square of the distance", "proportional to the distance", "independent of the masses", "inversely proportional to the distance"], a: 0, why: "F = G m₁m₂/r²." },
      { q: "The gravitational field intensity g equals:", o: ["Fm", "F/m", "m/F", "F × m"], a: 1, why: "g = F/m — force per unit mass." },
      { q: "An electroscope is used to:", o: ["measure current", "detect and compare electric charges", "measure voltage", "store charge"], a: 1, why: "A simple electroscope detects and compares charges on differently-shaped bodies." },
      { q: "According to Coulomb's law, doubling the distance between two point charges makes the force:", o: ["twice as large", "four times larger", "half as large", "a quarter as large"], a: 3, why: "F ∝ 1/r² — doubling r gives F/4." },
      { q: "The S.I. unit of capacitance is the:", o: ["coulomb", "volt", "farad", "ohm"], a: 2, why: "C = Q/V → farad (F)." },
      { q: "The 'lost volt' in a cell is due to its:", o: ["e.m.f.", "internal resistance", "capacitance", "external circuit"], a: 1, why: "Lost volt and internal resistance of batteries — V = E − Ir." },
      { q: "Electrical power is given by:", o: ["VI", "V/I", "VI²", "V²I"], a: 0, why: "P = VI (watts)." }
    ],
    essay: [
      { q: "(a) Define gravitational field intensity and state Newton's law of gravitation. (b) Derive (or state) the relationship between the universal gravitational constant G and g at the Earth's surface, and explain the meaning of escape velocity.", marks: 10, outline: [
        "(a) Gravitational field intensity — force per unit mass at a point, G = F/m = g; Newton's law: the force between two masses is F = G m₁m₂/r², attractive, along the line joining them",
        "(b) At the surface, the weight of a mass m is mg = G Mm/R² → g = GM/R² (M, R = mass and radius of the Earth)",
        "Escape velocity — the minimum speed for a body to just escape the field: ½mv² = GMm/R → v = √(2GM/R) = √(2gR) ≈ 11.2 km s⁻¹",
        "Calculation of the escape velocity of a rocket from the Earth's field"
      ] },
      { q: "(a) State Ohm's law and describe how you would verify it. (b) A cell of e.m.f. 6 V and internal resistance 0.5 Ω supplies a current to an 11.5 Ω resistor. Find the terminal p.d. and the current. (c) Define resistivity.", marks: 10, outline: [
        "(a) Ohm's law: at constant temperature, the current through a conductor is proportional to the p.d. across it (V = IR); verification: vary V with a rheostat, measure I with an ammeter, plot V against I — a straight line through the origin (gradient = R)",
        "(b) Total resistance = R + r = 11.5 + 0.5 = 12 Ω; I = E/(R + r) = 6/12 = 0.5 A; terminal p.d. V = E − Ir = 6 − (0.5 × 0.5) = 5.75 V (or V = IR = 0.5 × 11.5 = 5.75 V)",
        "(c) Resistivity — the resistance of a conductor of unit length and unit cross-sectional area, ρ = RA/l (Ω m); conductivity is its reciprocal; factors affecting the resistance of a material"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Part IV, Topics 23–25 (Description/property of fields; Gravitational field; Electric Field):" },
      { k: "bul", items: [
        "23. Concept of fields: gravitational, electric and magnetic; properties of a force field; use of compass needle and iron filings to show magnetic field lines",
        "24. Gravitational field: acceleration due to gravity (g); G as gravitational field intensity, g = F/m; masses include protons, electrons and planets; universal gravitational constant (G); relationship between 'G' and 'g'; calculation of the escape velocity of a rocket from the Earth's gravitational field; gravitational force between two masses (Newton's law of gravitation); gravitational potential",
        "25. Electric field — Electrostatics: production of electric charges (friction, induction, contact); a simple electroscope to detect and compare charges on differently-shaped bodies; application in light conductors; determination, properties and field patterns of charges; storage of charges; electric lines of force; electric force between point charges — Coulomb's law; concepts of electric field, electric field intensity (potential gradient) and electric potential; permittivity of a medium; calculation of electric field intensity and electric potential of simple systems",
        "Capacitance: definition, arrangement and application; factors affecting the capacitance of a parallel-plate capacitor; the farad (F); capacitors in series and in parallel; energy stored in a charged capacitor; uses (radio and television); derivation of formulae for capacitance NOT required",
        "Current electricity: production of electric current from primary and secondary cells (simple cell and its defects, Daniell, Leclanché wet/dry, lead-acid accumulator, alkaline-cadmium cell); e.m.f. of a cell, the volt (V); potential difference and electric current; Ohm's law and resistance (verification); the volt, ampere and ohm as units of p.d., current and resistance; series and parallel arrangement of cells and resistors; lost volt and internal resistance; electric circuit; ohmic and non-ohmic conductors (metals; semiconductors); quantitative definition of electrical energy and power; heating effect of an electric current and its application; conversion of electrical energy to mechanical energy (electric motors); conversion of solar energy (solar cells, solar heaters)",
        "Measurement: shunt and multiplier (galvanometer to ammeter/voltmeter); resistivity and conductivity; measurement of current, p.d., resistance, e.m.f. and internal resistance; principle of operation and use of ammeter, voltmeter, potentiometer; the Wheatstone bridge and metre bridge; simple problems on resistance"
      ] }
    ]
  },
  /* =============== P14 · MAGNETIC & ELECTROMAGNETIC FIELDS =============== */
  {
    grade: 12, sem: "Two", icon: "⚡", period: "P14",
    title: "Magnetic & Electromagnetic Fields",
    subtitle: "Magnets, magnetization · magnetic force on conductors and particles · electromagnetic induction, generators, transformers · power transmission · simple a.c. circuits",
    note: "Part IV, Topics 26–28: the magnetic field, the electromagnetic field (induction, generators, transformers, power transmission) and simple a.c. circuits.",
    objectives: [
      "Describe the properties of magnets and magnetic materials, and magnetization and demagnetization",
      "Explain the concept of magnetic field and field lines, and the magnetic force on a current-carrying conductor and on parallel conductors (Fleming's left-hand rule)",
      "Solve simple problems on a charged particle in a magnetic field, F = qvB sinθ",
      "Explain electromagnetic induction (Faraday's law, Lenz's law), inductance, eddy currents, generators (d.c. and a.c.), the transformer, and power transmission",
      "Describe simple a.c. circuits: peak and r.m.s. values, phase relationships, reactance and impedance, resonance and power in a.c. circuits"
    ],
    terms: [
      { t: "Magnetic field", d: "The region around a magnet or current-carrying conductor in which a magnetic force acts; represented by field lines.", x: "Lines from N to S pole" },
      { t: "Magnetic flux (Φ)", d: "The total number of field lines through an area, in webers (Wb); magnetic flux density B = Φ/A, in tesla (T).", x: "Units: Wb and T" },
      { t: "Magnetization", d: "Making a material magnetic (by stroking, induction, or a field); demagnetization — removing magnetism (hammering, heating, alternating field).", x: "Soft iron (temporary) vs steel (permanent)" },
      { t: "Motor effect", d: "A current-carrying conductor in a magnetic field experiences a force, F = BIl sinθ (Fleming's left-hand rule).", x: "The electric motor" },
      { t: "Electromagnetic induction", d: "The production of an e.m.f. when a conductor cuts magnetic field lines (or the flux linking a coil changes) — Faraday's law; the direction is given by Lenz's law.", x: "A generator" },
      { t: "Faraday's law", d: "The induced e.m.f. is proportional to the rate of change of magnetic flux linkage.", x: "E = −dΦ/dt (magnitude)" },
      { t: "Lenz's law", d: "The induced current flows in a direction that opposes the change producing it.", x: "Conserves energy" },
      { t: "Inductance", d: "The property of a coil to oppose a change in current; self- and mutual inductance; unit the henry (H); energy stored E = ½LI².", x: "A relay coil" },
      { t: "Eddy currents", d: "Circulating currents induced in a conductor by a changing flux; reduced by laminating the core; used in induction furnaces and speedometers.", x: "A laminated transformer core" },
      { t: "Transformer", d: "A device that changes a.c. voltage by induction, V₂/V₁ = N₂/N₁ (ideal); step-up/step-down.", x: "Power distribution" },
      { t: "Peak value", d: "The maximum instantaneous value of an a.c.; the r.m.s. value = peak/√2 (for a sine wave).", x: "240 V mains ≈ 340 V peak" },
      { t: "Reactance", d: "The opposition to a.c. by an inductor (X_L = ωL) or capacitor (X_C = 1/ωC); impedance is the total opposition in an L-R-C circuit.", x: "Resonance when X_L = X_C" }
    ],
    tf: [
      { s: "Faraday's law states that the induced e.m.f. is proportional to the rate of change of magnetic flux linkage.", a: "True", why: "Electromagnetic induction — Faraday's law, Lenz's law and motor-generator effect." },
      { s: "The r.m.s. value of a sine-wave a.c. is the peak value multiplied by √2.", a: "False", why: "r.m.s. = peak/√2 (≈ 0.707 × peak)." },
      { s: "A transformer works with direct current (d.c.).", a: "False", why: "A transformer requires a changing (alternating) flux — it works on a.c., not steady d.c." },
      { s: "Eddy current losses can be reduced by laminating the core.", a: "True", why: "A method of reducing eddy current losses should be treated (laminated core)." }
    ],
    mcq: [
      { q: "The unit of magnetic flux density is the:", o: ["weber", "tesla", "henry", "farad"], a: 1, why: "Flux density B — tesla (T); flux Φ — weber (Wb)." },
      { q: "The direction of the force on a current-carrying conductor in a magnetic field is given by:", o: ["Fleming's left-hand rule", "Fleming's right-hand rule", "Lenz's law", "Ohm's law"], a: 0, why: "Fleming's left-hand rule — force (motor effect)." },
      { q: "The law that the induced current opposes its cause is:", o: ["Faraday's law", "Lenz's law", "Ampere's law", "Coulomb's law"], a: 1, why: "Lenz's law — direction of the induced current." },
      { q: "For an ideal transformer, the ratio of secondary to primary voltage equals:", o: ["the ratio of turns N₂/N₁", "the ratio N₁/N₂", "the square of the turns ratio", "the current ratio squared"], a: 0, why: "V₂/V₁ = N₂/N₁ (ideal transformer)." },
      { q: "The r.m.s. value of a sine wave whose peak is 340 V is about:", o: ["240 V", "480 V", "170 V", "340 V"], a: 0, why: "r.m.s. = 340/√2 ≈ 240 V." },
      { q: "A transformer is used to change:", o: ["direct current voltages", "alternating current voltages", "frequency of d.c.", "the mass of a conductor"], a: 1, why: "Transformers work on a.c. (changing flux) — step up/step down voltage." }
    ],
    essay: [
      { q: "(a) State Faraday's law of electromagnetic induction and Lenz's law. (b) Describe the principle of a simple a.c. generator and explain the difference between the production of d.c. and a.c.", marks: 10, outline: [
        "(a) Faraday's law: the induced e.m.f. in a circuit is proportional to the rate of change of magnetic flux linkage; Lenz's law: the induced current is in a direction that opposes the change producing it",
        "(b) Generator: a coil rotates in a magnetic field, cutting field lines → induced e.m.f. (by induction); the e.m.f. reverses direction every half-turn",
        "A.C.: a slip-ring (two rings) connection gives an alternating output (E = E₀ sin ωt); D.C.: a split-ring commutator reverses the connection each half-turn, giving a pulsating (unidirectional) d.c.",
        "The motor-generator effect — the same coil can act as motor (input electrical, output mechanical) or generator (input mechanical, output electrical)"
      ] },
      { q: "Explain the principle of a transformer and state the ideal transformer equations. A step-up transformer has 100 primary turns and 2000 secondary turns and is connected to a 240 V a.c. supply. Find the secondary voltage. State one way power losses in transmission are reduced.", marks: 10, outline: [
        "Principle: an alternating current in the primary creates a changing flux in the core, which induces an e.m.f. in the secondary (electromagnetic induction)",
        "Ideal transformer: V₂/V₁ = N₂/N₁ and I₁/I₂ = N₂/N₁ (power in ≈ power out); core laminated to reduce eddy currents",
        "V₂ = V₁(N₂/N₁) = 240 × (2000/100) = 4800 V",
        "Power loss in transmission = I²R; stepping up the voltage reduces the current (for the same power), greatly reducing I²R losses in the high-tension lines; stepped down for use; household wiring system discussed"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Part IV, Topics 26–28 (Magnetic field; Electromagnetic field; Simple a.c. circuits):" },
      { k: "bul", items: [
        "26. Magnetic field: properties of magnets and magnetic materials (practical examples — soft iron, steel, alloys; temporary and permanent magnets; comparison of iron and steel); magnetization and demagnetization; concept of magnetic field; magnetic flux and magnetic flux density (weber Wb, tesla T); magnetic field around a permanent magnet, a current-carrying conductor and a solenoid; plotting of lines of force to locate neutral points",
        "Magnetic force on: (i) a current-carrying conductor in a magnetic field (qualitative; applications — electric motor and moving-coil galvanometer); (ii) between two parallel current-carrying conductors (examples — electric bell, telephone earpiece); use of electromagnets; the Earth's magnetic field (mariner's compass, angles of dip and declination); magnetic force on a moving charged particle — simple problems using F = qvB sinθ; Fleming's left-hand rule to identify directions of current, field and force",
        "27. Electromagnetic field: concept of electromagnetic field; electromagnetic induction — Faraday's law, Lenz's law and motor-generator effect; inductance (self and mutual, qualitative; unit henry H; E = ½LI²); eddy currents (a method of reducing eddy current losses; applications — induction furnace, speedometer); applications: generator (d.c. and a.c.), induction coil and transformer; principles of d.c. and a.c. production; E = E₀ sin ωt explained; power transmission and distribution (reduction of power losses in high-tension lines; household wiring system); applications in radio, T.V., transformer",
        "28. Simple a.c. circuits: graphical representation of e.m.f. and current (I = I₀ sin ωt, E = E₀ sin ωt); peak and r.m.s. values; phase relationship between voltage and current in resistor, inductor and capacitor; series circuit containing resistor, inductor and capacitor; reactance (X_L and X_C) and impedance; vector diagrams; resonance in an a.c. circuit; power in an a.c. circuit; simple calculations (derivation of formulae NOT required); applications in tuning of radio and T.V."
      ] }
    ]
  },
  /* =============== P15 · ATOMIC & NUCLEAR PHYSICS =============== */
  {
    grade: 12, sem: "Two", icon: "☢️", period: "P15",
    title: "Atomic & Nuclear Physics",
    subtitle: "Models of the atom · energy quantization · photoelectric effect · X-rays · the nucleus, radioactivity · fission and fusion · wave-particle duality",
    note: "Part V, Topics 29–31: the structure of the atom and energy quantization, the structure of the nucleus and radioactivity, and the wave-particle paradox (duality).",
    objectives: [
      "Discuss the Thomson, Rutherford, Bohr and electron-cloud (wave-mechanical) models of the atom qualitatively, with the limitations of each and Bohr's quantization of angular momentum",
      "Explain energy levels in the atom, line and absorption spectra, and the Frank-Hertz experiment",
      "Explain the photoelectric effect, the dual nature of light, work function and threshold frequency, and Einstein's photoelectric equation; thermionic emission and X-rays (production, properties, uses, hazards, safety)",
      "Use the notation for nuclides (A = Z + N), isotopes, radioactive emissions (α, β, γ) and their properties, detection, decay, half-life and decay constant",
      "Distinguish fusion from fission; explain binding energy, mass defect and E = mc²; nuclear reactors, the atomic bomb, radiation hazards and safety, and peaceful uses",
      "Give a simple illustration of the dual nature of light and the duality of matter (electron diffraction)"
    ],
    terms: [
      { t: "Atomic models", d: "Thomson (plum pudding), Rutherford (nucleus), Bohr (quantized orbits), electron-cloud/wave-mechanical — each with its limitations.", x: "Bohr: quantization of angular momentum" },
      { t: "Energy quantization", d: "Electrons in an atom occupy discrete energy levels; transitions emit/absorb photons of energy hν.", x: "Line spectra from hot bodies; discharge lamps" },
      { t: "Line spectrum", d: "The set of discrete bright lines (emission) or dark lines (absorption) from quantized atomic transitions.", x: "Sodium's yellow doublet" },
      { t: "Photoelectric effect", d: "The emission of electrons from a surface when light of sufficiently high frequency shines on it; Einstein: hf = φ + ½mv².", x: "Threshold frequency; work function φ" },
      { t: "Work function", d: "The minimum energy needed to free an electron from a metal surface, φ = hν₀.", x: "ν₀ = the threshold frequency" },
      { t: "Thermionic emission", d: "The emission of electrons from a heated metal surface.", x: "A cathode-ray tube" },
      { t: "X-ray", d: "High-energy electromagnetic waves produced when fast electrons strike a target; penetrating, used in imaging; hazards and safety precautions.", x: "The X-ray tube" },
      { t: "Nuclide", d: "A species of nucleus defined by its proton number Z and nucleon number A; N = A − Z; isotopes have the same Z, different A.", x: "²³⁸U: Z = 92, A = 238, N = 146" },
      { t: "Radioactive decay", d: "The spontaneous emission of α, β or γ radiation from an unstable nucleus; described by the half-life and decay constant.", x: "²²⁶Ra → ²²²Rn + α" },
      { t: "Half-life", d: "The time for half the nuclei in a sample to decay (or the activity to halve).", x: "A 4-day half-life" },
      { t: "Fission", d: "The splitting of a heavy nucleus (e.g. U-235) into lighter fragments, releasing energy and neutrons (chain reaction).", x: "The nuclear reactor" },
      { t: "Fusion", d: "The joining of light nuclei (e.g. hydrogen → helium) to form a heavier nucleus, releasing energy.", x: "The Sun" },
      { t: "Mass defect / binding energy", d: "The mass 'lost' when a nucleus forms, converted to binding energy by E = mc².", x: "Why the nucleus is stable" },
      { t: "Wave-particle duality", d: "Light and matter show both wave and particle behaviour; electron diffraction demonstrates the duality of matter.", x: "Photoelectric effect (particle); diffraction (wave)" }
    ],
    tf: [
      { s: "The photoelectric effect shows the particle (photon) nature of light.", a: "True", why: "Explanation of the photoelectric effect; dual nature of light; work function and threshold frequency; Einstein's photoelectric equation." },
      { s: "Fission is the joining of light nuclei; fusion is the splitting of heavy nuclei.", a: "False", why: "Fission — splitting of heavy nuclei; Fusion — joining of light nuclei (distinction required)." },
      { s: "The binding energy of a nucleus is given by E = mc² (from the mass defect).", a: "True", why: "Binding energy, mass defect and the energy equation E = mc²." },
      { s: "Isotopes of an element have the same proton number but different neutron numbers.", a: "True", why: "Nuclides and their notation; isotopes (A = Z + N)." }
    ],
    mcq: [
      { q: "The model of the atom with electrons in quantized (fixed) orbits is due to:", o: ["Thomson", "Rutherford", "Bohr", "Dalton"], a: 2, why: "Bohr's model — quantization of angular momentum/orbits." },
      { q: "In the photoelectric effect, the work function is:", o: ["the maximum kinetic energy of the electrons", "the minimum energy to free an electron from the surface", "the frequency of the light", "the charge of the electron"], a: 1, why: "Work function φ = hν₀ — the minimum energy to emit an electron." },
      { q: "Einstein's photoelectric equation is:", o: ["hf = φ + ½mv²", "E = mc²", "F = ma", "V = IR"], a: 0, why: "The photon energy hf = work function + maximum kinetic energy." },
      { q: "The mass number A of a nuclide equals:", o: ["the number of protons", "the number of neutrons", "protons + neutrons", "electrons + neutrons"], a: 2, why: "A = Z + N — proton number + neutron number." },
      { q: "The half-life of a radioactive substance is the time for:", o: ["all nuclei to decay", "half the nuclei to decay", "the mass to double", "the activity to double"], a: 1, why: "Radioactive decay, half-life and decay constant." },
      { q: "The process that powers the Sun is:", o: ["fission", "fusion", "radioactive decay only", "chemical combustion"], a: 1, why: "Fusion — light nuclei (hydrogen) join to form helium, releasing energy." },
      { q: "The binding energy of a nucleus comes from the:", o: ["kinetic energy of the electrons", "mass defect (E = mc²)", "heat of the nucleus", "magnetic field"], a: 1, why: "Binding energy, mass defect and E = mc²." }
    ],
    essay: [
      { q: "(a) Discuss the Thomson, Rutherford and Bohr models of the atom, stating one limitation of each. (b) Explain the terms energy quantization and line spectrum.", marks: 10, outline: [
        "(a) Thomson — the atom is a positive sphere with electrons embedded (plum pudding); limitation: could not explain the scattering of alpha particles / the nucleus",
        "Rutherford — a small, dense, positive nucleus with electrons around it; limitation: could not explain why orbiting electrons (accelerating charges) do not spiral into the nucleus / stable atoms and spectra",
        "Bohr — electrons occupy fixed (quantized) orbits/shells without radiating; they jump between levels emitting/absorbing photons; limitation: works well only for hydrogen-like atoms; it is a semi-classical model (replaced by the wave-mechanical model)",
        "(b) Energy quantization — electrons have discrete allowed energy levels; Line spectrum — the discrete bright (emission) or dark (absorption) lines produced when electrons move between levels (e.g. discharge lamps, hot bodies); the Frank-Hertz experiment demonstrates quantization"
      ] },
      { q: "(a) Explain the terms half-life and decay constant. (b) A radioactive sample has an initial activity of 800 counts per minute. If its half-life is 2 days, find its activity after 6 days. (c) State one peaceful use and one hazard of radioactivity.", marks: 10, outline: [
        "(a) Half-life — the time for half the nuclei (or the activity) to decay; Decay constant λ — the probability per unit time that a nucleus decays; related by t₁/₂ = ln2/λ",
        "(b) After 6 days = 3 half-lives; activity = 800 × (½)³ = 800/8 = 100 counts per minute",
        "(c) Peaceful use: medicine (tracers, cancer treatment), agriculture (breeding, sterilization), archaeology (carbon dating), industry (gauging, sterilization); Hazard: ionizing radiation damages living tissue (burns, cancer) — safety precautions (shielding, distance, time, detectors)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Part V, Topics 29–31 (Structure of the atom; Structure of the nucleus; Wave-particle paradox):" },
      { k: "bul", items: [
        "29. Structure of the atom: models — Thomson, Rutherford, Bohr and electron-cloud (wave-mechanical), discussed qualitatively with the limitations of each; quantization of angular momentum (Bohr); energy quantization — energy levels, colour and light frequency; Frank-Hertz experiment, line spectra from hot bodies, absorption spectra, spectra of discharge lamps; photoelectric effect — explanation, dual nature of light, work function and threshold frequency, Einstein's photoelectric equation and its explanation, applications (T.V., camera) (simple problems may be set); thermionic emission — explanation and applications; X-rays — production, structure of the X-ray tube, types, characteristics, properties, uses and hazards, safety precautions",
        "30. Structure of the nucleus: protons and neutrons; nucleon number (A), proton number (Z), neutron number (N) and A = Z + N; nuclides and their notation; isotopes; radioactive elements and radioactive emissions (α, β, γ) and their properties and uses; detection of radiations by G-M counter, photographic plates, etc.; radioactive decay, half-life and decay constant; transformation of elements; applications of radioactivity in agriculture, medicine, industry, archaeology, etc.",
        "31. Wave-particle paradox: simple illustration of the dual nature of light; electron diffraction; duality of matter; distinction between fusion and fission; binding energy, mass defect and E = mc²; nuclear reactors; atomic bomb; radiation hazards and safety precautions; peaceful uses of nuclear reactions"
      ] }
    ]
  },
  /* =============== P16 · HARMONISED TOPICS =============== */
  {
    grade: 12, sem: "Two", icon: "🛰️", period: "P16",
    title: "Harmonised Topics (Short-Structured Questions)",
    subtitle: "Satellites and rockets · elastic properties (Hooke's law, Young's modulus) · thermal conductivity (solar collector, black-body) · fibre optics",
    note: "The harmonised topics set for short-structured questions for all member countries, in addition to Part I–V (dimensional analysis and projectile motion are covered in P2 and P6).",
    objectives: [
      "Explain the concept of a satellite, compare natural and artificial satellites, and describe parking orbits, geostationary satellites, and the period of revolution and speed of a satellite",
      "State the uses of satellites and rockets",
      "Explain the behaviour of elastic materials under stress and the features of a load–extension graph",
      "Apply Hooke's law and Young's modulus in simple calculations; the work done in springs and string",
      "Explain thermal conductivity, the solar-energy collector (solar panel), and black-body radiation (a black body; variation of intensity with wavelength at different temperatures)",
      "Explain the concept of fibre optics"
    ],
    terms: [
      { t: "Satellite", d: "A body orbiting the Earth (or another body) under gravity; natural (the Moon) and artificial (humans).", x: "A communication satellite" },
      { t: "Geostationary satellite", d: "A satellite in a circular orbit above the equator with a period of 24 hours, so it appears fixed over one point.", x: "Broadcasting satellites" },
      { t: "Orbital speed", d: "The speed for a circular orbit, v = √(GM/r) — for a low orbit, ≈ √(gR).", x: "≈ 7.9 km s⁻¹ low Earth orbit" },
      { t: "Elasticity", d: "The property of a material to return to its original shape/size when the deforming force is removed (up to the elastic limit).", x: "A rubber band" },
      { t: "Hooke's law", d: "Within the elastic limit, the extension of a material is directly proportional to the load (force).", x: "A stretched spring" },
      { t: "Young's modulus", d: "The ratio of stress to strain in the elastic region, E = stress/strain = (F/A)/(ΔL/L) — a measure of stiffness.", x: "Steel has a high Young's modulus" },
      { t: "Load–extension graph", d: "A graph of load against extension; the initial straight-line region is Hooke's law, the gradient relates to stiffness; the elastic limit and breaking point are marked.", x: "A spring obeying Hooke's law" },
      { t: "Thermal conductivity", d: "The ability of a material to conduct heat; metals are good conductors, air and wood are poor (insulators).", x: "A copper pan bottom" },
      { t: "Solar collector / panel", d: "A device that absorbs solar radiation (a black surface) and converts it to heat or electricity (solar cells).", x: "A solar water heater; a solar panel for heat supply" },
      { t: "Black body", d: "An ideal body that absorbs all incident radiation (a perfect absorber, and the best emitter); its radiation depends on temperature.", x: "A cavity with a small hole" },
      { t: "Fibre optics", d: "The transmission of light (information) through thin glass/plastic fibres by total internal reflection.", x: "Optical communications; endoscopes" }
    ],
    tf: [
      { s: "A geostationary satellite appears fixed over one point of the Earth.", a: "True", why: "Geostationary satellites — 24-hour period above the equator, appearing stationary." },
      { s: "Hooke's law holds beyond the elastic limit.", a: "False", why: "Hooke's law holds only within the elastic limit — extension ∝ load." },
      { s: "A black body is a perfect absorber of radiation.", a: "True", why: "Explanation of a black body; variation of intensity of black-body radiation with wavelength at different temperatures." },
      { s: "Fibre optics transmits light by total internal reflection.", a: "True", why: "Explanation of the concept of fibre optics." }
    ],
    mcq: [
      { q: "A geostationary satellite has an orbital period of about:", o: ["1 hour", "12 hours", "24 hours", "365 days"], a: 2, why: "Geostationary — 24-hour period, fixed over one point." },
      { q: "Within the elastic limit, Hooke's law states that extension is:", o: ["inversely proportional to the load", "directly proportional to the load", "independent of the load", "proportional to the load squared"], a: 1, why: "Hooke's law — extension ∝ load (force)." },
      { q: "Young's modulus is the ratio of:", o: ["stress to strain", "strain to stress", "load to area", "force to velocity"], a: 0, why: "E = stress/strain (within the elastic region)." },
      { q: "A material that returns to its original shape after the deforming force is removed is described as:", o: ["plastic", "elastic", "brittle", "amorphous"], a: 1, why: "Elasticity — return to original shape within the elastic limit." },
      { q: "A solar panel for heat supply works by converting:", o: ["solar energy to electrical energy only", "solar energy to heat energy", "heat to light", "kinetic energy to sound"], a: 1, why: "Solar energy; solar panel for heat energy supply (and solar cells for electricity)." },
      { q: "The principle used in fibre optics is:", o: ["refraction at a plane surface", "total internal reflection", "dispersion", "diffraction"], a: 1, why: "Light is guided through the fibre by total internal reflection." },
      { q: "A black body is:", o: ["a body that is black in colour only", "an ideal perfect absorber (and emitter) of radiation", "a body that reflects all light", "a body that emits no radiation"], a: 1, why: "A black body — perfect absorber and best emitter." }
    ],
    essay: [
      { q: "(a) Distinguish between a natural and an artificial satellite. (b) Explain what a geostationary satellite is and state two uses of satellites. (c) Define orbital speed and give its approximate value for a low Earth orbit.", marks: 10, outline: [
        "(a) Natural — a body that orbits the Earth by nature (the Moon); Artificial — made and launched by humans (communication, weather, navigation satellites)",
        "(b) Geostationary satellite — orbits above the equator with a 24-hour period in the same direction as the Earth's rotation, so it stays over one point (used for broadcasting and communication); parking orbits — temporary holding orbits before final placement",
        "Uses: communication/broadcasting, weather forecasting, navigation (GPS), remote sensing, scientific research, military surveillance",
        "(c) Orbital speed — the speed for a circular orbit, v = √(GM/r) ≈ √(gR); for a low Earth orbit v ≈ 7.9 km s⁻¹; period of revolution T = 2πr/v"
      ] },
      { q: "(a) State Hooke's law and describe the features of a load–extension graph for a metal wire. (b) A wire of length 2 m and cross-section 1 × 10⁻⁶ m² stretches by 2 mm under a load of 200 N. Find Young's modulus of the material.", marks: 10, outline: [
        "(a) Hooke's law: within the elastic limit, extension is directly proportional to the load (F = kx); Load–extension graph: an initial straight-line region (Hooke's law, gradient = stiffness), then the elastic limit, the yield point, plastic deformation, and the breaking point; work done = area under the graph (for a spring, ½Fx)",
        "(b) Stress = F/A = 200/(1 × 10⁻⁶) = 2 × 10⁸ N m⁻²; Strain = ΔL/L = 2 × 10⁻³/2 = 1 × 10⁻³; Young's modulus E = stress/strain = (2 × 10⁸)/(1 × 10⁻³) = 2 × 10¹¹ N m⁻² (2 × 10¹¹ Pa)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Harmonised topics for short-structured questions for all member countries (those not covered in P2/P6):" },
      { k: "bul", items: [
        "3. Satellites and rockets: meaning of a satellite; comparison of natural and artificial satellites; parking orbits; geostationary satellites; period of revolution and speed of a satellite; uses of satellites and rockets",
        "4. Elastic properties of solids: behaviour of elastic materials under stress — features of the load–extension graph; Hooke's law; Young's modulus; work done in springs and string; simple calculations on Hooke's law and Young's modulus",
        "5. Thermal conductivity: solar energy collector and black-body radiation; solar energy and solar panel for heat energy supply; explanation of a black body; variation of intensity of black-body radiation with wavelength at different temperatures",
        "6. Fibre optics: explanation of the concept of fibre optics"
      ] }
    ]
  }
  ]
};
window.WA_SUBJECTS.ph = window.WA_ph;
