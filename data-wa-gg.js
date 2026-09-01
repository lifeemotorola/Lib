/* WASSCE (WAEC) — GEOGRAPHY course data: units across practical/physical
   geography, economic/human geography, the REGIONAL GEOGRAPHY OF LIBERIA,
   Africa, and field work. Asterisked topics (*) apply to Ghana, Sierra
   Leone, LIBERIA and The Gambia; (**) topics apply to Nigeria only. */
window.WA_gg = {
  id: "gg",
  name: "Geography",
  preamble: "Any topic in the syllabus that is marked with one asterisk (*) will be for candidates in Ghana, Sierra Leone, Liberia and The Gambia. Topics that are marked with two asterisks (**) will be for candidates in Nigeria only. The topics without an asterisk are for all member countries. Field work (25% of the continuous assessment) is based on the local geography of the candidate's home country.",
  aims: [
    "develop the ability to read, interpret and use maps, diagrams and statistical representations;",
    "understand the physical environment — the Earth, its structure, landforms, climate, vegetation, soils and the environment;",
    "understand human and economic geography — population, settlement, transport, industry, trade and tourism;",
    "apply geographical knowledge to the regional geography of Liberia and Africa, and carry out simple field work."
  ],
  papers: [
    { n: "Paper 1", d: "Fifty multiple-choice objective questions drawn from the syllabus. Candidates answer ALL within 1 hour for 50 marks." },
    { n: "Paper 2", d: "A 2-hour structured essay paper of 100 marks. Section A: ten short structured questions — answer ALL for 25 marks. Section B: four structured questions — answer THREE, each carrying 25 marks." }
  ],
  units: [
  /* =============== G1 · MAP WORK & SURVEYING =============== */
  {
    grade: 12, sem: "One", icon: "🗺️", period: "G1",
    title: "Map Work, Surveying & Statistical Diagrams",
    subtitle: "Maps: meaning, types, uses · map reading from contoured survey maps · elementary surveying (*) · bar, line, dot, proportional-circle, density and isopleth maps",
    note: "Elements of Practical Geography: map work (reading and interpretation), the principles of elementary surveying (*) for Liberia candidates, and statistical maps and diagrams.",
    objectives: [
      "Define a map, state its types and uses, and read and interpret contoured survey maps of parts of West Africa",
      "Use scale, measure distances, determine direction and bearing, and reduce/enlarge maps",
      "Identify physical features (spurs, valleys, ridges) and cultural features (settlements, communication routes) on a map; measure gradients and draw cross-profiles",
      "Determine inter-visibility and describe drainage characteristics, patterns of communication, settlement and land use",
      "Explain the principles of elementary surveying: the chain and prismatic compass, plotting a traverse, and avoiding obstacles",
      "Represent statistical data graphically: bar graphs, line graphs, flow charts, dot maps, proportional circles, density maps and isopleth maps"
    ],
    terms: [
      { t: "Map", d: "A reduced, scaled drawing of the Earth's surface (or part of it) on a flat plane.", x: "A survey map of Liberia" },
      { t: "Scale", d: "The ratio of a distance on the map to the corresponding distance on the ground — representative fraction (R.F.), scale bar, or statement scale.", x: "1:50,000 — 1 cm on the map = 500 m on the ground" },
      { t: "Contour", d: "A line joining points of equal height above sea level; the spacing shows the steepness of the slope.", x: "Closely spaced contours = steep slope" },
      { t: "Bearing", d: "The direction of one point from another, measured in degrees clockwise from north (grid or true north).", x: "The bearing of B from A = 045°" },
      { t: "Gradient", d: "The steepness of a slope = vertical rise ÷ horizontal distance (e.g. 1 in 200).", x: "A 1 in 100 gradient is steep" },
      { t: "Cross-profile", d: "A side view (section) of the ground along a line on the map, showing relief between two points.", x: "A profile from a town to a hill" },
      { t: "Inter-visibility", d: "Whether two points on a map can see each other, judged from the contours between them.", x: "A summit and a valley may not inter-see over a ridge" },
      { t: "Drainage pattern", d: "The arrangement of rivers and streams in an area — dendritic, trellis, radial, parallel, etc.", x: "A dendritic (tree-like) pattern" },
      { t: "Chain surveying", d: "A simple surveying method using a chain/tape to measure distances on the ground.", x: "Measuring a farm boundary" },
      { t: "Prismatic compass", d: "An instrument for measuring bearings (directions) in the field.", x: "Setting out a traverse" },
      { t: "Traverse", d: "A series of connected survey lines measured by distance and bearing, used to plot a map.", x: "Plotting a village's layout" },
      { t: "Dot map", d: "A statistical map where each dot represents a fixed number of the phenomenon (e.g. one dot = 10,000 people).", x: "Population density of West Africa" },
      { t: "Proportional circles", d: "A map with circles sized in proportion to the value at each point.", x: "Oil output by country" },
      { t: "Density map", d: "A map using shading or colour to show the intensity of a phenomenon per unit area.", x: "Rainfall intensity" },
      { t: "Isopleth map", d: "A map with lines (isopleths) joining points of equal value (e.g. isohyets of rainfall).", x: "Lines of equal rainfall" }
    ],
    tf: [
      { s: "Closely spaced contours on a map indicate a steep slope.", a: "True", why: "Map reading and interpretation based on contoured survey maps." },
      { s: "A gradient of 1 in 100 is steeper than a gradient of 1 in 500.", a: "True", why: "Measurement of gradients — a smaller denominator means a steeper slope." },
      { s: "In a dot map, each dot represents a fixed amount of the phenomenon being represented.", a: "True", why: "Graphical representation of statistical data — dot maps." },
      { s: "A prismatic compass is used to measure distances on the ground.", a: "False", why: "The prismatic compass measures bearings (directions); the chain measures distances." }
    ],
    mcq: [
      { q: "A map scale of 1:50,000 means that 1 cm on the map represents:", o: ["50,000 cm (500 m) on the ground", "50,000 m on the ground", "50 cm on the ground", "5 km on the ground"], a: 0, why: "1:50,000 — 1 cm on the map = 50,000 cm = 500 m on the ground." },
      { q: "Lines joining points of equal height on a map are called:", o: ["graticules", "contours", "isobars", "meridians"], a: 1, why: "Contours — equal height above sea level." },
      { q: "The direction of a point measured in degrees clockwise from north is its:", o: ["gradient", "bearing", "profile", "latitude"], a: 1, why: "Direction and bearing." },
      { q: "An instrument used to measure bearings in the field is the:", o: ["chain", "prismatic compass", "barometer", "rain gauge"], a: 1, why: "Principles of elementary surveying — chain and prismatic compass." },
      { q: "A statistical map that uses lines to join points of equal rainfall is an:", o: ["isopleth (isohyet) map", "isometric map", "isoline of temperature only", "isotherm map only"], a: 0, why: "Isopleth maps — lines of equal value." },
      { q: "A map on which the size of a circle is proportional to the value at a point is a:", o: ["dot map", "proportional circle map", "density map", "flow map"], a: 1, why: "Proportional circles." },
      { q: "A reduced drawing of the Earth's surface is a:", o: ["globe only", "map", "profile", "cross-section only"], a: 1, why: "Maps — meaning, types and uses." }
    ],
    essay: [
      { q: "Explain the meaning of scale. Given a map scale of 1:25,000, find the ground distance represented by 6 cm on the map. Explain how you would measure the gradient of a slope and draw a cross-profile between two points on a contoured map.", marks: 12, outline: [
        "Scale — the ratio of a distance on the map to the corresponding distance on the ground (R.F., scale bar, statement scale)",
        "Ground distance = 6 cm × 25,000 = 150,000 cm = 1,500 m = 1.5 km",
        "Gradient = vertical rise ÷ horizontal distance: measure the height difference from the contours (rise) and the map distance (× scale for ground distance), e.g. 20 m rise over 2,000 m = 1 in 100",
        "Cross-profile: choose a line AB on the map; set a divider to a suitable interval (e.g. where contours cross AB); transfer the heights to graph paper with a vertical exaggeration; join the points to show the relief (ridge, valley, spur) between A and B",
        "Inter-visibility: if the profile between two points dips below the line joining them, they cannot see each other (e.g. over a spur/ridge)"
      ] },
      { q: "Distinguish between a dot map and a proportional-circle map, giving an example of the data each is best suited to. Explain two advantages of using statistical maps in geography.", marks: 10, outline: [
        "Dot map — each dot represents a fixed number of the phenomenon (e.g. one dot = 5,000 people); best for showing the DISTRIBUTION of a phenomenon (population, farms)",
        "Proportional circles — circles sized in proportion to the value at each point; best for showing the RELATIVE SIZE/MAGNITUDE at locations (oil output, port throughput)",
        "Advantages: they show the spatial distribution of data at a glance; they allow comparison between areas; they are clear and compact; they highlight concentrations and gaps (e.g. population density, resource location)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Elements of Practical and Physical Geography (map work):" },
      { k: "bul", items: [
        "Maps: meaning, types and uses",
        "Map reading and interpretation based on contoured survey maps of parts of West Africa: scale, measurement of distances, direction and bearing, map reduction and enlargement, identification of physical features such as spurs, valleys, etc. and cultural features such as city walls, settlements, communication routes, etc.; measurement of gradients, drawing of cross-profiles, inter-visibility, description and explanation of drainage characteristics and pattern; patterns of communication, settlement and land use",
        "*Principles of elementary surveying: definitions of terms, instruments, chain and prismatic compass, plotting of traverse, avoiding obstacles in the field",
        "Statistical maps and diagrams: graphical representation of statistical data — bar graphs, line graphs, flow charts, dot maps, proportional circles, density maps, isopleth maps"
      ] }
    ]
  },
  /* =============== G2 · THE EARTH & HYDROSPHERE =============== */
  {
    grade: 12, sem: "One", icon: "🌎", period: "G2",
    title: "The Earth & the Hydrosphere",
    subtitle: "Earth as a planet · latitude/longitude, rotation and revolution · Earth's structure · ocean basins, salinity, currents · lakes, rivers, lagoons · water as a resource",
    note: "*Hydrosphere: the Earth in relation to the Sun, latitude and distance, longitude and time, rotation and revolution and their effects, the structure of the Earth, and the water of the Earth — oceans, lakes, rivers and lagoons.",
    objectives: [
      "Explain the Earth as a planet in relation to the Sun, and the effects of its rotation and revolution",
      "Relate latitude to distance from the equator and longitude to time; explain time zones",
      "Describe the structure of the Earth (internal: crust, mantle, core; external: lithosphere, atmosphere, hydrosphere)",
      "Describe ocean basins, ocean salinity, and ocean currents (causes, types and their effects on the temperature of adjacent coastlands)",
      "Describe lakes, rivers and lagoons, and the importance of water as an environmental resource"
    ],
    terms: [
      { t: "Rotation", d: "The Earth's spin on its axis (24 hours), causing day and night.", x: "One rotation = one day" },
      { t: "Revolution", d: "The Earth's movement around the Sun (365¼ days), causing the seasons and the changing length of day.", x: "One revolution = one year" },
      { t: "Latitude", d: "The angular distance of a place north or south of the equator (0°–90°); parallels of latitude.", x: "Liberia ≈ 6°N to 9°N" },
      { t: "Longitude", d: "The angular distance of a place east or west of the Greenwich meridian (0°–180°); each 15° = 1 hour of time.", x: "Meridians of longitude" },
      { t: "Crust", d: "The thin outer solid layer of the Earth (continental and oceanic crust).", x: "The ground we walk on" },
      { t: "Mantle", d: "The thick layer beneath the crust, of hot semi-molten rock; source of magma.", x: "Convection in the mantle" },
      { t: "Core", d: "The innermost part of the Earth — the outer core (liquid iron-nickel) and the inner core (solid).", x: "The source of Earth's magnetic field" },
      { t: "Salinity", d: "The amount of dissolved salts in water, measured in parts per thousand (‰); ocean water ≈ 35‰.", x: "Sea water is saltier than river water" },
      { t: "Ocean current", d: "A steady, directional movement of ocean water — surface (wind-driven, e.g. the Gulf Stream) or deep (density-driven); warm and cold currents.", x: "The North Equatorial Current" },
      { t: "Lake", d: "A large body of fresh or salt water surrounded by land, formed by various processes.", x: "A volcanic (crater) lake" },
      { t: "River", d: "A natural flow of water in a channel leading to the sea, a lake or an inland depression.", x: "The Lofa River" },
      { t: "Lagoon", d: "A shallow body of water separated from the sea by a barrier (sand bar, reef or spit).", x: "A coastal lagoon in Liberia" }
    ],
    tf: [
      { s: "The Earth's rotation causes day and night.", a: "True", why: "Earth's rotation and revolution and their effects." },
      { s: "Each 15 degrees of longitude corresponds to a difference of one hour in time.", a: "True", why: "Longitude and time — 360°/24 h = 15° per hour." },
      { s: "Warm ocean currents lower the temperature of adjacent coastlands.", a: "False", why: "Warm currents raise the temperature of adjacent coastlands; cold currents lower it." },
      { s: "A lagoon is a shallow body of water separated from the sea by a barrier.", a: "True", why: "Ocean basins, salinity, ocean currents, lakes, rivers, lagoons." }
    ],
    mcq: [
      { q: "The Earth's revolution around the Sun takes about:", o: ["24 hours", "30 days", "365¼ days", "7 days"], a: 2, why: "Revolution — one year (365¼ days)." },
      { q: "The imaginary line at 0° latitude is the:", o: ["Prime Meridian", "Equator", "Tropic of Cancer", "Arctic Circle"], a: 1, why: "Latitude — the equator is 0° latitude." },
      { q: "The hottest part of the Earth's interior is the:", o: ["crust", "mantle", "core", "lithosphere"], a: 2, why: "Structure of the Earth (internal) — the core is hottest." },
      { q: "The average salinity of ocean water is about:", o: ["3.5‰", "35‰", "350‰", "3500‰"], a: 1, why: "Ocean salinity ≈ 35 parts per thousand." },
      { q: "A COLD ocean current passing a coast tends to:", o: ["raise the temperature of the land", "lower the temperature of the adjacent coastland", "have no effect", "increase salinity of the land"], a: 1, why: "Effects of ocean currents on the temperature of adjacent coastlands." },
      { q: "A body of water separated from the sea by a sand bar or spit is a:", o: ["fjord", "lagoon", "bay", "delta"], a: 1, why: "Lagoon — separated by a barrier." },
      { q: "The effect of the Earth's axial tilt combined with its revolution includes:", o: ["day and night only", "the seasons and the changing length of day", "tides only", "earthquakes"], a: 1, why: "Revolution (with axial tilt) causes the seasons." }
    ],
    essay: [
      { q: "(a) Explain the effects of the Earth's rotation and its revolution. (b) A ship at 30°W longitude has a local time of 12:00 noon. What is the local time at 0° (Greenwich)? Show your working.", marks: 12, outline: [
        "(a) Rotation (24 h, on its axis): causes day and night; the deflection of winds and ocean currents (Coriolis); the apparent daily motion of the Sun; Revolution (365¼ days, around the Sun): causes the seasons (due to axial tilt of 23½°), the changing length of day and night, and the changing position of the Sun at noon",
        "(b) Each 15° of longitude = 1 hour (360°/24 h); each 1° = 4 minutes",
        "30°W is 30° west of Greenwich → 30/15 = 2 hours BEHIND Greenwich",
        "If it is 12:00 noon at 30°W, then at 0° (Greenwich) it is 12:00 + 2:00 = 14:00 (2:00 p.m.)"
      ] },
      { q: "Describe the structure of the Earth, distinguishing the internal structure (crust, mantle, core) from the external structure (lithosphere, atmosphere, hydrosphere). Explain the importance of water as an environmental resource.", marks: 10, outline: [
        "Internal structure: Crust — thin outer solid layer (continental ~35 km, oceanic ~7 km); Mantle — thick layer of hot semi-molten rock, source of magma, seat of convection; Core — outer core (liquid iron-nickel) and inner core (solid), the hottest part, source of the magnetic field",
        "External structure: Lithosphere — the rigid outer shell (crust + upper mantle); Atmosphere — the envelope of air; Hydrosphere — all the water (oceans, rivers, lakes, ice, ground water)",
        "Water as a resource: for drinking, domestic and industrial use; agriculture (irrigation); transport (shipping, navigation); hydro-electric power; fisheries; recreation/tourism; it regulates climate and supports life — hence its importance to man and the environment"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — *Hydrosphere:" },
      { k: "bul", items: [
        "The Earth as a planet in relation to the Sun; latitude and distance; longitude and time; Earth's rotation and revolution and their effects; structure of the Earth (internal and external)",
        "Ocean basins, salinity, ocean currents (causes, types and their effects on the temperature of adjacent coastlands); lakes, rivers, lagoons; water as an environmental resource"
      ] }
    ]
  },
  /* =============== G3 · ROCKS & TECTONIC PROCESSES =============== */
  {
    grade: 12, sem: "One", icon: "🪨", period: "G3",
    title: "Rocks & Tectonic Processes",
    subtitle: "Igneous, sedimentary, metamorphic rocks · vulcanicity · earthquakes · landforms: mountains, plains, karst, coastal landforms",
    note: "Rocks (types, characteristics, formation, uses) and tectonic processes: vulcanicity, earthquakes, and the landforms they produce — mountains, plains, karst and coastal landforms.",
    objectives: [
      "Identify the three main rock types (igneous, sedimentary, metamorphic), and state their characteristics, formation and uses",
      "Explain vulcanicity (volcanic activity) and the landforms it produces",
      "Explain earthquakes, their causes (focus, epicentre, waves) and measurement (Richter, Mercalli)",
      "Describe tectonic landforms: mountains (fold, block, volcanic), plains, karst landforms and coastal landforms — their formation, characteristics and importance"
    ],
    terms: [
      { t: "Igneous rock", d: "Rock formed from the cooling and solidification of magma/lava — intrusive (granite) and extrusive (basalt).", x: "Granite, basalt, obsidian" },
      { t: "Sedimentary rock", d: "Rock formed from the accumulation and compaction of sediments (weathered material, remains) — e.g. sandstone, limestone.", x: "Limestone, sandstone" },
      { t: "Metamorphic rock", d: "Rock changed from an existing rock by heat and pressure — e.g. marble (from limestone), slate (from shale).", x: "Marble, slate, gneiss" },
      { t: "Vulcanicity", d: "The eruption of magma, lava, ash and gases from the Earth's interior through volcanoes.", x: "A volcanic eruption" },
      { t: "Focus", d: "The point within the Earth where an earthquake originates.", x: "The earthquake's origin" },
      { t: "Epicentre", d: "The point on the surface directly above the focus.", x: "Where the shaking is often most felt" },
      { t: "Fold mountain", d: "A mountain formed by the compression and folding of rock layers (e.g. the Alps).", x: "The Atlas Mountains" },
      { t: "Block mountain", d: "A mountain formed by the uplift of a block of crust between faults (horst).", x: "The Rift Valley walls" },
      { t: "Karst", d: "Landscapes formed by the dissolution of soluble rock (limestone) — caves, sinkholes, underground rivers, limestones.", x: "Caves and sinkholes" },
      { t: "Coastal landform", d: "Landforms shaped by waves and currents — cliffs, beaches, bays, headlands, stacks, arches, spits.", x: "Wave-cut platforms, sea stacks" }
    ],
    tf: [
      { s: "Granite is an extrusive igneous rock.", a: "False", why: "Granite is an INTRUSIVE igneous rock (cooled slowly underground); basalt is extrusive." },
      { s: "Marble is a metamorphic rock formed from limestone.", a: "True", why: "Metamorphic rock — changed from an existing rock by heat and pressure." },
      { s: "The epicentre is the point on the surface directly above the focus.", a: "True", why: "Earthquake — focus (origin) and epicentre (surface point above)." },
      { s: "Karst landforms are formed by the dissolution of limestone by water.", a: "True", why: "Karst — caves, sinkholes formed by dissolution of soluble rock." }
    ],
    mcq: [
      { q: "A rock formed from the cooling of lava at the Earth's surface is:", o: ["granite", "basalt (extrusive igneous)", "sandstone", "marble"], a: 1, why: "Extrusive igneous rock — basalt." },
      { q: "Limestone is transformed into marble by:", o: ["weathering", "metamorphism (heat and pressure)", "sedimentation", "volcanic eruption"], a: 1, why: "Metamorphic rock — limestone → marble." },
      { q: "The point on the surface directly above where an earthquake starts is the:", o: ["focus", "epicentre", "fault", "ridge"], a: 1, why: "Epicentre — surface point above the focus." },
      { q: "A mountain formed by the compression and folding of rock layers is a:", o: ["block mountain", "fold mountain", "volcanic mountain only", "residual mountain"], a: 1, why: "Fold mountain — e.g. the Alps." },
      { q: "Caves and sinkholes formed by the dissolution of limestone are examples of:", o: ["glacial landforms", "karst landforms", "coastal landforms", "aeolian landforms"], a: 1, why: "Karst landforms." },
      { q: "A sea stack is a coastal landform formed by:", o: ["volcanic eruption", "wave erosion of a headland", "river deposition", "faulting"], a: 1, why: "Coastal landforms — wave erosion isolates a stack from a headland." },
      { q: "Which of the following is a sedimentary rock?", o: ["granite", "basalt", "sandstone", "slate"], a: 2, why: "Sandstone — formed from compacted sand (sediment)." }
    ],
    essay: [
      { q: "(a) Describe the three main rock types — igneous, sedimentary and metamorphic — stating for each how it is formed and giving two examples. (b) State two uses of each rock type.", marks: 12, outline: [
        "(a) Igneous — from the cooling and solidification of magma/lava: intrusive (granite, cooled slowly underground) and extrusive (basalt, obsidian, cooled at the surface)",
        "Sedimentary — from the accumulation, compaction and cementation of sediments: sandstone (from sand), limestone (from marine remains/calcium carbonate), shale (from clay)",
        "Metamorphic — existing rocks changed by heat and pressure without melting: marble (from limestone), slate (from shale), gneiss (from granite)",
        "(b) Uses: Igneous — building and road construction (granite, basalt), ornamental stone; Sedimentary — building stone (sandstone, limestone), cement/lime production (limestone), source of fossils and minerals; Metamorphic — roofing (slate), building and ornamental (marble), construction (gneiss)"
      ] },
      { q: "Explain the terms focus and epicentre. Describe the formation and characteristics of (a) a fold mountain and (b) a coastal landform such as a sea stack, and state the importance of mountains to man.", marks: 10, outline: [
        "Focus — the point within the Earth where the earthquake originates; Epicentre — the point on the surface directly above the focus (usually where the effects are most severe)",
        "(a) Fold mountain: formed when horizontal rock layers are compressed by tectonic forces (converging plates) and bend into folds (anticlines and synclines); characteristics — long, continuous ranges with steep slopes and high peaks; e.g. the Alps, the Atlas",
        "(b) Sea stack: wave erosion attacks a headland, forming a cave, then an arch (when the cave breaks through), and finally a detached stack when the arch collapses; characteristic — a pillar of rock standing offshore",
        "Importance of mountains: sources of rivers (water supply); minerals and building stone; scenery for tourism; rainfall (orographic); forests and wildlife; hydro-electric power potential; strategic defence positions"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Rocks; Tectonic processes:" },
      { k: "bul", items: [
        "Rocks: types, characteristics, formation and uses",
        "Tectonic processes: vulcanicity, earthquake; landforms — mountains, plains, karsts and coastal landforms (formation, characteristics and importance)"
      ] }
    ]
  },
  /* =============== G4 · DENUATION (DENUATIONAL) PROCESSES =============== */
  {
    grade: 12, sem: "One", icon: "🏞️", period: "G4",
    title: "Denudational Processes & Landform Modification",
    subtitle: "Weathering · mass movement · running water · underground water · wind · waves — the agencies that modify landforms",
    note: "Denudational processes: the agencies that modify landforms — weathering, mass movement, running water, underground water, wind and waves.",
    objectives: [
      "Explain weathering (mechanical/physical and chemical) and the landforms it produces",
      "Describe mass movements (landslides, soil creep) and their causes",
      "Explain the work of running water (erosion, transport, deposition) and the landforms it forms (V-profile valleys, meanders, deltas)",
      "Explain the work of underground water (karst formation)",
      "Explain the work of wind (aeolian landforms) and of waves (coastal erosion and deposition)"
    ],
    terms: [
      { t: "Weathering", d: "The in-situ breaking down and chemical decomposition of rocks at or near the surface.", x: "Rocks crumbling in the heat" },
      { t: "Mechanical (physical) weathering", d: "The breaking of rock into smaller pieces without chemical change — thermal expansion, frost action, unloading.", x: "Rock split by heat/cold" },
      { t: "Chemical weathering", d: "The decomposition of rock by chemical reaction — hydration, oxidation, carbonation, solution.", x: "Limestone dissolved by carbonated rainwater" },
      { t: "Mass movement", d: "The downslope movement of rock/soil under gravity — landslides, rockfalls, soil creep, slumping.", x: "A landslide after heavy rain" },
      { t: "Running water", d: "River/overland flow that erodes, transports and deposits — forming valleys, meanders, ox-bow lakes, waterfalls, deltas.", x: "A meandering river" },
      { t: "Underground water", d: "Water in the ground that dissolves soluble rock (limestone), forming karst features (caves, sinkholes, underground rivers).", x: "A karst cave" },
      { t: "Wind (aeolian) processes", d: "Erosion and deposition by wind in dry areas — deflation, abrasion, dunes, yardangs.", x: "Sand dunes in a desert" },
      { t: "Wave action", d: "The work of waves on coasts — hydraulic action, abrasion, attrition, solution (erosion); deposition of beaches, spits, bars.", x: "A wave-cut platform" }
    ],
    tf: [
      { s: "Chemical weathering breaks rock into smaller pieces without changing its chemical composition.", a: "False", why: "Chemical weathering changes the composition (decomposition); MECHANICAL weathering breaks rock without chemical change." },
      { s: "A meander is a curved bend in a river.", a: "True", why: "Running water — meanders, ox-bow lakes." },
      { s: "Karst landforms are formed by the work of wind.", a: "False", why: "Karst is formed by the work of UNDERGROUND water (dissolution of limestone)." },
      { s: "Sand dunes are landforms formed by the deposition of wind-blown sand.", a: "True", why: "Wind (aeolian) processes — deposition forms dunes." }
    ],
    mcq: [
      { q: "The in-situ breaking of rock into smaller pieces without chemical change is:", o: ["chemical weathering", "mechanical weathering", "mass movement", "erosion by wind"], a: 1, why: "Mechanical (physical) weathering." },
      { q: "The dissolution of limestone by carbonated rainwater is an example of:", o: ["frost action", "chemical weathering (solution)", "thermal expansion", "mass movement"], a: 1, why: "Chemical weathering — solution." },
      { q: "A downslope movement of soil and rock under gravity, such as a landslide, is a:", o: ["mass movement", "river process", "wind process", "wave process"], a: 0, why: "Mass movement — under gravity." },
      { q: "A curved bend in a river that becomes more pronounced over time is a:", o: ["delta", "meander", "waterfall", "ox-bow lake"], a: 1, why: "Meander — a river bend." },
      { q: "A fan-shaped deposit of sediment where a river meets a standing body of water is a:", o: ["meander", "delta", "bar", "dune"], a: 1, why: "Delta — deposition at the river mouth." },
      { q: "Caves, sinkholes and underground rivers formed in limestone are the work of:", o: ["running water only", "underground water (karst)", "wind", "waves"], a: 1, why: "Underground water — karst formation." },
      { q: "Sand dunes are formed by the deposition of:", o: ["river sediment", "wind-blown sand", "meltwater", "volcanic ash"], a: 1, why: "Wind (aeolian) deposition — dunes." }
    ],
    essay: [
      { q: "(a) Distinguish between mechanical and chemical weathering, giving two examples of each. (b) Explain how running water produces (i) a V-shaped valley, (ii) a meander, and (iii) a delta.", marks: 12, outline: [
        "(a) Mechanical weathering — breaking rock into smaller pieces without chemical change: thermal expansion/contraction (daily heating/cooling), frost action (water freezing in cracks), unloading (pressure release); Chemical weathering — decomposition by chemical action: solution (limestone dissolved by carbonated water), oxidation (iron in rock rusts), hydration (minerals take in water), carbonation",
        "(b)(i) V-shaped valley: in its youth, a river erodes vertically (downward) by hydraulic action and abrasion, cutting a steep-sided, V-shaped valley",
        "(ii) Meander: as a river matures, lateral (sideways) erosion on the outside of bends and deposition on the inside form and exaggerate curved bends (meanders); an exaggerated meander may be cut off to form an ox-bow lake",
        "(iii) Delta: at the mouth, the river slows, loses its load, and deposits sediment (silt, sand) in a fan-shaped delta (e.g. where the river meets the sea)"
      ] },
      { q: "Describe the work of (a) underground water in a limestone area, and (b) wind in a dry area, naming two landforms formed by each. State one problem caused by mass movement in a locality and a method of control.", marks: 10, outline: [
        "(a) Underground water in limestone (karst): carbonated water dissolves limestone along joints, forming — solution hollows, caves (enlarged by dissolution and by underground rivers), sinkholes (when cave roofs collapse), underground rivers, and limestones; the landscape is porous and may have karst springs",
        "(b) Wind in a dry area: erosion by deflation (removal of fine particles) and abrasion (sand-blasting of rocks), forming ventifacts, yardangs, and blow-outs; deposition forms dunes (barchane, transverse) and loess plains",
        "Problem from mass movement: a landslide buries farmland/roads and destroys property after heavy rain or on steep slopes; Control: afforestation/vegetation cover to bind the soil, cutting terraces, avoiding building on steep unstable slopes, and good drainage"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Denudational processes:" },
      { k: "bul", items: [
        "Agencies modifying landforms such as weathering, mass movement, running water, underground water, wind and waves"
      ] }
    ]
  },
  /* =============== G5 · WEATHER & CLIMATE =============== */
  {
    grade: 12, sem: "One", icon: "🌦️", period: "G5",
    title: "Weather & Climate",
    subtitle: "Weather instruments (Stevenson screen, rain gauge, thermometer, barometer, wind vane) · climatic elements and factors · climatic charts · classification of climate",
    note: "Weather and climate: simple weather study from local observation, the elements of climate and the factors affecting them, interpretation of climatic charts, and the classification of climate.",
    objectives: [
      "Describe the Stevenson screen and the uses of basic weather instruments (rain gauge, thermometer, barometer, wind vane)",
      "Identify the climatic elements (rainfall, sunshine, air pressure, wind, humidity, temperature, cloud) and the factors affecting them (altitude, latitude, ocean currents, land/sea breezes, continentality, aspect)",
      "Interpret climatic charts and data",
      "Classify the major types of climate (hot: equatorial, tropical continental, desert; temperate: warm and cool) and explain the Greek and Köppen classifications"
    ],
    terms: [
      { t: "Weather", d: "The state of the atmosphere at a place and time (temperature, rainfall, wind, etc.) — short-term and variable.", x: "Today's weather in Monrovia" },
      { t: "Climate", d: "The average weather condition of a place over a long period (30+ years).", x: "Liberia's equatorial/tropical climate" },
      { t: "Stevenson screen", d: "A louvered, white-painted box that shelters weather instruments from direct sun and rain while allowing air to flow.", x: "Where the thermometer and hygrometer are kept" },
      { t: "Rain gauge", d: "An instrument for measuring the amount of rainfall (in mm).", x: "A daily rainfall reading" },
      { t: "Thermometer", d: "An instrument for measuring temperature (maximum and minimum).", x: "The daily maximum temperature" },
      { t: "Barometer", d: "An instrument for measuring atmospheric (air) pressure.", x: "A falling barometer may signal rain" },
      { t: "Wind vane", d: "An instrument that shows the direction of the wind.", x: "The wind blowing from the sea" },
      { t: "Climatic element", d: "A measurable component of climate — rainfall, sunshine, air pressure, wind, humidity, temperature, cloud.", x: "Monthly rainfall" },
      { t: "Altitude", d: "Height above sea level; temperature falls with altitude (≈ 0.65°C per 100 m).", x: "Cooler at the top of a hill" },
      { t: "Latitude", d: "Distance from the equator; temperature generally falls as latitude increases.", x: "Hotter near the equator" },
      { t: "Continentality", d: "The moderating influence of the sea; inland areas have greater temperature range (hotter days/summer, colder nights/winter) than coastal areas.", x: "Inland towns hotter than the coast" },
      { t: "Aspect", d: "The direction a slope faces, affecting the amount of sun it receives (e.g. a south-facing slope is warmer in the Northern Hemisphere).", x: "Sun-exposed slopes" },
      { t: "Köppen classification", d: "A climate classification based on temperature and precipitation (using letters A–E for major groups).", x: "A = tropical, B = dry, C = temperate" },
      { t: "Equatorial climate", d: "Hot and wet all year, with high temperature and heavy, evenly distributed rainfall (two maxima as the ITCZ passes).", x: "The climate of the forest zone" }
    ],
    tf: [
      { s: "Climate is the average weather of a place over a long period.", a: "True", why: "Weather and climate — weather is short-term, climate is long-term." },
      { s: "Temperature generally increases with altitude.", a: "False", why: "Temperature DECREASES with altitude (about 0.65°C per 100 m)." },
      { s: "Coastal areas have a smaller temperature range than inland areas because of the sea's moderating influence.", a: "True", why: "Continentality — the sea moderates coastal temperatures." },
      { s: "The Stevenson screen shelters instruments from direct sun and rain.", a: "True", why: "Description of the Stevenson's screen and uses of basic weather instruments." }
    ],
    mcq: [
      { q: "The instrument used to measure rainfall is the:", o: ["barometer", "rain gauge", "thermometer", "wind vane"], a: 1, why: "Rain gauge — measures rainfall in mm." },
      { q: "The instrument that shows the direction of the wind is the:", o: ["rain gauge", "wind vane", "barometer", "hygrometer"], a: 1, why: "Wind vane — direction of the wind." },
      { q: "Temperature generally falls with increasing altitude at about:", o: ["0.65°C per 100 m", "1.3°C per 10 m", "0.01°C per 1000 m", "2°C per 10 m"], a: 0, why: "Altitude — the lapse rate ≈ 0.65°C per 100 m." },
      { q: "A place far from the sea, with a wide temperature range between day and night, shows the effect of:", o: ["maritime influence", "continentality", "ocean currents", "aspect"], a: 1, why: "Continentality — inland areas have greater temperature range." },
      { q: "A climate that is hot and wet all the year with heavy, evenly spread rainfall is the:", o: ["desert climate", "equatorial climate", "temperate climate", "polar climate"], a: 1, why: "Equatorial climate — hot and wet all year." },
      { q: "In the Köppen classification, the letter 'B' denotes:", o: ["tropical climates", "dry (arid/semi-arid) climates", "temperate climates", "polar climates"], a: 1, why: "Köppen — A tropical, B dry, C temperate, D continental, E polar." },
      { q: "Interpreting a climatic chart involves reading:", o: ["only the temperature", "the temperature and rainfall (and other elements) for each month", "only the wind direction", "the map scale"], a: 1, why: "Interpretation of climatic charts and data." }
    ],
    essay: [
      { q: "Describe the Stevenson screen and the uses of the rain gauge, thermometer, barometer and wind vane. Identify the climatic elements of a place and state four factors that affect them, explaining how each acts.", marks: 12, outline: [
        "Stevenson screen — a white-painted, louvered (slatted) box raised above the ground; the louvers let air in but block direct sun and rain, giving accurate readings; it holds the thermometer and hygrometer",
        "Rain gauge — measures the amount of rainfall (mm); Thermometer — measures temperature (maximum and minimum); Barometer — measures air pressure; Wind vane — shows the direction of the wind",
        "Climatic elements: rainfall, sunshine, air pressure, wind, humidity, temperature, cloud",
        "Factors: (1) Altitude — temperature falls with height (≈ 0.65°C/100 m); (2) Latitude — closer to the equator = hotter (more direct sun); (3) Ocean currents — warm currents warm adjacent coasts, cold currents cool them; (4) Land/sea breezes and continentality — the sea moderates coastal temperatures (smaller range) while inland areas have a wider range; (5) Aspect — the direction a slope faces affects sun exposure",
        "Other: proximity to the sea (maritime vs continental), elevation, and the position of pressure belts"
      ] },
      { q: "Describe the major types of climate — equatorial, tropical continental and desert — with reference to temperature and rainfall. Explain how climate is classified using the Greek and Köppen systems.", marks: 10, outline: [
        "Equatorial climate: hot all year (high temperature, little seasonal variation) and heavy, evenly distributed rainfall (two maxima as the ITCZ passes) — e.g. the tropical forest zone",
        "Tropical continental climate: hot, with a distinct wet and dry season (rainfall concentrated in the summer) — the savanna/grassland zone",
        "Desert climate: very hot by day, cool by night, and very low, unreliable rainfall (arid) — e.g. the Sahara",
        "Temperate climates (warm and cool): moderate temperatures with distinct seasons and moderate rainfall",
        "Classification: Greek — based on the four temperate seasons (spring, summer, autumn, winter); Köppen — a worldwide system based on temperature and precipitation, using letters (A tropical, B dry, C temperate, D continental, E polar) with sub-types; it links climate to natural vegetation"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Weather and climate:" },
      { k: "bul", items: [
        "Simple weather study based on local observation; description of the Stevenson's screen and uses of basic weather instruments — rain gauge, thermometer, barometer, wind vane, etc.",
        "Climate elements: rainfall, sunshine, air pressure, wind, humidity, temperature and cloud; factors affecting climatic elements — altitude, latitude, ocean currents, land and sea breezes, continentality, aspect; interpretation of climatic charts and data",
        "Classification: major types of climate (hot climate — equatorial, tropical continental, desert; temperate climate — warm and cool); classification of climate based on Greek and Köppen"
      ] }
    ]
  },
  /* =============== G6 · VEGETATION & SOIL =============== */
  {
    grade: 12, sem: "One", icon: "🌿", period: "G6",
    title: "Vegetation & Soil (*)",
    subtitle: "Tropical rainforest, temperate woodland, tropical grassland · plant communities · soil formation, profile, types · soil erosion and conservation",
    note: "*Vegetation and *Soil (for Ghana, Sierra Leone, Liberia and The Gambia): the major vegetation types and their distribution, and the nature, formation and conservation of soils.",
    objectives: [
      "Describe the major vegetation types (tropical rainforest, cool/warm temperate woodland, tropical grassland), their characteristics, distribution, the factors affecting distribution, and plant communities",
      "Explain vegetation as an environmental resource and the conservation of vegetation resources",
      "Define soil and describe its local types and characteristics",
      "Explain the factors and processes of soil formation, the soil profile, the importance of soil to man, and the effects of human activities on soil",
      "Describe soil erosion and the methods of soil conservation"
    ],
    terms: [
      { t: "Tropical rainforest", d: "Dense, evergreen, multi-layered vegetation of the wet equatorial zone — tall trees, lianas, epiphytes; high biodiversity.", x: "The forests of Liberia" },
      { t: "Temperate woodland", d: "Mixed deciduous/evergreen forests of the temperate zones — oaks, beeches; seasons with leaf-fall (cool) or evergreen (warm).", x: "The forests of Europe" },
      { t: "Tropical grassland (savanna)", d: "Grassland with scattered trees of the tropical dry/wet zone — e.g. the savanna of West Africa.", x: "The Sudan/Sahel savanna" },
      { t: "Plant community", d: "The assemblage of plant species living together in an area, adapted to the same climate and soil.", x: "A forest community" },
      { t: "Soil", d: "The thin layer of weathered material (mineral particles, organic matter, water, air) at the Earth's surface, supporting plant life.", x: "The topsoil of a farm" },
      { t: "Soil profile", d: "A vertical section of the soil showing its layers (horizons) — topsoil (A), subsoil (B), parent material (C).", x: "The layers of a soil pit" },
      { t: "Soil formation", d: "The development of soil from parent rock under the influence of climate, organisms, relief and time.", x: "Weathering of rock into soil" },
      { t: "Soil erosion", d: "The wearing away and removal of the topsoil by water (sheet, rill, gully), wind or human action.", x: "Gullies in a denuded hillside" },
      { t: "Soil conservation", d: "The prevention and control of soil erosion and the maintenance/improvement of soil fertility.", x: "Contour ploughing, terracing, afforestation" }
    ],
    tf: [
      { s: "Tropical rainforest is evergreen and multi-layered with high biodiversity.", a: "True", why: "Major types of vegetation — tropical rainforest." },
      { s: "The tropical grassland (savanna) has a distinct wet and dry season.", a: "True", why: "Tropical grassland — of the tropical dry/wet zone." },
      { s: "Soil erosion is the building up of new soil layers.", a: "False", why: "Soil erosion is the WEARING AWAY and removal of topsoil; conservation prevents it." },
      { s: "Afforestation (planting trees) is a method of soil conservation.", a: "True", why: "Soil conservation — afforestation binds the soil and reduces erosion." }
    ],
    mcq: [
      { q: "Dense, evergreen, multi-layered vegetation of the wet equatorial zone is the:", o: ["tropical grassland", "tropical rainforest", "temperate woodland", "desert scrub"], a: 1, why: "Tropical rainforest." },
      { q: "Grassland with scattered trees in the tropical dry/wet zone is the:", o: ["rainforest", "savanna (tropical grassland)", "taiga", "tundra"], a: 1, why: "Tropical grassland (savanna)." },
      { q: "The uppermost, dark, fertile layer of the soil is the:", o: ["parent material", "topsoil (A horizon)", "bedrock", "subsoil only"], a: 1, why: "Soil profile — topsoil is the fertile surface layer." },
      { q: "Which of the following is a factor in soil formation?", o: ["climate", "the colour of the sky", "the number of stars", "the phase of the moon"], a: 0, why: "Factors of soil formation — climate, organisms, relief, time (and parent material)." },
      { q: "The wearing away of topsoil by water, forming gullies, is:", o: ["soil conservation", "soil erosion (gully erosion)", "soil formation", "leaching only"], a: 1, why: "Soil erosion — gully erosion by water." },
      { q: "Which of the following is a method of soil conservation?", o: ["clearing all vegetation", "contour ploughing and terracing", "overgrazing", "burning the forest"], a: 1, why: "Soil conservation — contour ploughing, terracing, afforestation." },
      { q: "Vegetation is an environmental resource because it:", o: ["has no use", "provides timber, food, fuel, and protects the soil and climate", "only provides shade", "causes erosion"], a: 1, why: "Vegetation as an environmental resource." }
    ],
    essay: [
      { q: "Describe the tropical rainforest and the tropical grassland (savanna), stating the characteristics, distribution and plant communities of each. Explain two factors that affect their distribution.", marks: 12, outline: [
        "Tropical rainforest: characteristics — dense, evergreen, multi-layered (emergent, canopy, undergrowth), tall hardwood trees, lianas, epiphytes, high biodiversity, little seasonal change; Distribution — the wet equatorial zone (tropical forest belt of West/Central/East Africa, e.g. Liberia); Plant communities — a complex mix of many tree species, palms, bamboo, and associated fauna",
        "Tropical grassland (savanna): characteristics — tall grasses with scattered drought-resistant trees and shrubs, distinct wet and dry seasons, fires common; Distribution — the tropical dry/wet zone (Sudan and Sahel savannas of West Africa, flanking the forest); Plant communities — grasses (elephant grass) with scattered acacia and other hardwoods",
        "Factors affecting distribution: (1) Climate — temperature and, especially, rainfall (amount and seasonality) determine the type; (2) Soil — the nature and fertility of the soil; also (3) Relief/altitude and (4) Human activity (clearing, grazing)"
      ] },
      { q: "Define soil. Explain the factors and processes of soil formation and describe the soil profile. State the importance of soil to man and describe three methods of soil conservation.", marks: 10, outline: [
        "Soil — the thin layer of weathered material (mineral particles, organic matter, water, air) at the Earth's surface that supports plant life",
        "Factors/processes of formation: parent material (the rock), climate (weathering, leaching), organisms (plants, animals, microbes adding humus), relief (slope affecting erosion), and time (soil develops slowly)",
        "Soil profile: A horizon — topsoil (dark, fertile, rich in humus); B horizon — subsoil (leached, less organic matter); C horizon — parent material (weathered rock); below — bedrock",
        "Importance: supports agriculture (food production); provides building material (bricks, clay); supports forests/timber; hosts organisms; part of the water cycle",
        "Soil conservation: (1) Contour ploughing and terracing (plough along the contour, build terraces on slopes); (2) Afforestation/tree planting and agroforestry (roots bind the soil); (3) Crop rotation and cover crops; (4) Mulching and reducing overgrazing; (5) Building check-dams to control gullies"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — *Vegetation; *Soil (for Ghana, Sierra Leone, Liberia, The Gambia):" },
      { k: "bul", items: [
        "*Vegetation: major types (tropical rainforest, cool/warm temperate woodland, tropical grassland); characteristics, distribution, factors affecting their distribution, plant communities; vegetation as an environmental resource; conservation of vegetation resources",
        "*Soil: definition, local types and characteristics; factors and processes of soil formation, soil profile, importance to man and the effects of human activities on soil; soil erosion and conservation"
      ] }
    ]
  },
  /* =============== G7 · THE ENVIRONMENT =============== */
  {
    grade: 12, sem: "One", icon: "♻️", period: "G7",
    title: "The Environment: Resources, Problems & Conservation",
    subtitle: "Environmental resources (renewable/non-renewable) · problems and hazards (erosion, drought, desert encroachment, flooding, pollution) · conservation",
    note: "The environment: environmental resources (meaning, classification, types, importance), environmental problems/hazards (types, causes, effects, prevention) and environmental conservation.",
    objectives: [
      "Define environmental resources and classify them as renewable and non-renewable, with types (vegetation, water, mineral, atmospheric) and the importance of each",
      "Describe the types of environmental problems/hazards — soil erosion, drought, desert encroachment, flooding and pollution — and their causes, effects and prevention",
      "Explain environmental conservation: meaning, importance, methods, problems and solutions"
    ],
    terms: [
      { t: "Environmental resource", d: "Anything in the environment that is useful to man — vegetation, water, minerals, atmospheric (air, sunlight).", x: "Fresh water, forests, minerals" },
      { t: "Renewable resource", d: "A resource that is naturally replenished (sustainable if used wisely) — water, vegetation, solar energy.", x: "Rainwater, forest (if replanted)" },
      { t: "Non-renewable resource", d: "A resource that is finite and not replaced on a human timescale — minerals, fossil fuels.", x: "Petroleum, iron ore" },
      { t: "Soil erosion", d: "The removal of topsoil by water, wind or human action — a major environmental hazard.", x: "Gullies in a deforested area" },
      { t: "Drought", d: "A prolonged period of below-normal rainfall, causing water shortage and crop failure.", x: "A dry spell in the Sahel" },
      { t: "Desert encroachment", d: "The advance of desert/dry conditions into previously vegetated land (desertification).", x: "The Sahara creeping south" },
      { t: "Flooding", d: "The overflowing of rivers or heavy rainfall submerging land, caused by heavy rain, deforestation, poor drainage.", x: "River flooding in a town" },
      { t: "Pollution", d: "The introduction of harmful substances into the environment — air, water, soil and noise pollution.", x: "Factory smoke, oil spillage" },
      { t: "Environmental conservation", d: "The protection and sustainable management of the environment and its resources for present and future use.", x: "Protecting forests and water" }
    ],
    tf: [
      { s: "Petroleum is a renewable resource.", a: "False", why: "Petroleum is a NON-renewable resource (finite, not replaced on a human timescale)." },
      { s: "Desert encroachment is the advance of desert conditions into vegetated land.", a: "True", why: "Environmental problems — desert encroachment (desertification)." },
      { s: "Deforestation can increase the risk of flooding.", a: "True", why: "Flooding — causes include heavy rain, deforestation (less interception), poor drainage." },
      { s: "Environmental conservation means the sustainable management of the environment.", a: "True", why: "Environmental conservation — meaning, importance, methods." }
    ],
    mcq: [
      { q: "Which of the following is a renewable environmental resource?", o: ["petroleum", "iron ore", "fresh water (if managed)", "diamond"], a: 2, why: "Renewable — replenished naturally (water, vegetation, solar)." },
      { q: "The advance of desert/dry conditions into vegetated land is:", o: ["flooding", "desert encroachment", "soil formation", "afforestation"], a: 1, why: "Desert encroachment (desertification)." },
      { q: "A prolonged period of below-normal rainfall causing water shortage is a:", o: ["flood", "drought", "typhoon", "earthquake"], a: 1, why: "Drought." },
      { q: "Which of the following contributes to flooding?", o: ["afforestation", "deforestation and poor drainage", "planting cover crops", "building dams"], a: 1, why: "Flooding — causes include heavy rain, deforestation, poor drainage." },
      { q: "The introduction of oil into a water body is an example of:", o: ["air pollution", "water pollution", "soil erosion", "desertification"], a: 1, why: "Pollution — water pollution (oil spillage)." },
      { q: "The protection and sustainable management of the environment is:", o: ["environmental degradation", "environmental conservation", "soil erosion", "mining"], a: 1, why: "Environmental conservation." },
      { q: "Which of the following is a method of preventing soil erosion?", o: ["clearing all vegetation", "afforestation and contour ploughing", "overgrazing", "burning grassland"], a: 1, why: "Prevention of soil erosion — afforestation, contour ploughing." }
    ],
    essay: [
      { q: "(a) Define environmental resources and classify them as renewable and non-renewable, giving two examples of each. (b) Explain the meaning, causes and effects of desert encroachment, and state two methods of preventing it. (c) State the importance of environmental conservation.", marks: 12, outline: [
        "(a) Environmental resources — anything in the environment useful to man (vegetation, water, mineral, atmospheric); Renewable — replenished naturally: water, vegetation, solar energy; Non-renewable — finite: petroleum, minerals (iron ore, gold), fossil fuels",
        "(b) Desert encroachment — the advance of desert/dry conditions into vegetated land (desertification); Causes — deforestation, overgrazing, over-cultivation, over-exploitation of water, drought, climate change; Effects — loss of arable land, crop failure, water shortage, migration, loss of biodiversity, food insecurity",
        "Prevention: afforestation/tree planting, sustainable grazing (rotation, limiting stock), efficient water use, agroforestry, controlling over-cultivation",
        "(c) Importance: sustains life and livelihoods; protects against hazards (erosion, flooding); preserves biodiversity; ensures resources for future generations; maintains the balance of nature and the climate"
      ] },
      { q: "Describe the types of environmental pollution (air, water, soil, noise), stating the causes and effects of each. Explain two methods of environmental conservation and one problem of conservation.", marks: 10, outline: [
        "Air pollution — causes: vehicle exhaust, factory emissions, burning of fossil fuels, dust; Effects: respiratory disease, acid rain, global warming, harm to vegetation",
        "Water pollution — causes: industrial/domestic waste, oil spillage, sewage, agricultural run-off; Effects: death of aquatic life, water-borne diseases, loss of drinking water",
        "Soil pollution — causes: chemical fertilizers, pesticides, industrial waste, mining; Effects: loss of fertility, contamination of food, health hazards",
        "Noise pollution — causes: traffic, machinery, generators, loudspeakers; Effects: hearing damage, stress, sleep disturbance",
        "Methods of conservation: (1) Afforestation and reforestation (protecting forests, replanting trees); (2) Proper waste disposal and recycling; (3) Laws/regulations and conservation education",
        "Problems of conservation: balancing development and conservation; lack of funds and awareness; population pressure; enforcement difficulties — solutions include education, legislation, community participation"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — The environment:" },
      { k: "bul", items: [
        "Environmental resources: meaning, classification (renewable and non-renewable), types (vegetation, water, mineral, atmospheric, etc.) and the importance of each",
        "Environmental problems/hazards: types (soil erosion, drought, desert encroachment, flooding and pollution), causes, effects and prevention of each",
        "Environmental conservation: meaning, importance, methods, problems and solutions"
      ] }
    ]
  },
  /* =============== G8 · POPULATION & SETTLEMENT =============== */
  {
    grade: 12, sem: "Two", icon: "🏘️", period: "G8",
    title: "World Population & Settlement",
    subtitle: "Growth, distribution, movement of population · rural and urban settlements · location, functions, interaction, migration",
    note: "Economic and Human Geography: world population (growth, distribution, movement) and settlement (types, location, growth, functions, interaction, migration).",
    objectives: [
      "Explain the factors and patterns of population growth, distribution and movement, and the problems of population growth rate",
      "Describe the types of settlement (rural and urban), their patterns and the factors affecting location",
      "Explain the growth and size of settlements, the functions of rural and urban settlements, and the interaction patterns (urban-rural, rural-urban, urban-urban, rural-rural)",
      "Explain migration (rural-urban and international) and its causes and effects"
    ],
    terms: [
      { t: "Population growth", d: "The increase in the number of people, driven by births, deaths and migration; growth rate = (births − deaths + net migration) / population × 100.", x: "West Africa's high growth rate" },
      { t: "Population distribution", d: "The way people are spread over an area — dense, sparse or uniform; shown by density (people per km²).", x: "Dense in the river valleys, sparse in deserts" },
      { t: "Rural settlement", d: "Settlement in the countryside, based on primary activities (farming, fishing, mining).", x: "A village, a farmstead" },
      { t: "Urban settlement", d: "Settlement in towns and cities, based on secondary/tertiary activities (industry, trade, services).", x: "Monrovia, a city" },
      { t: "Settlement pattern", d: "The arrangement of settlements — nucleated (clustered), dispersed (scattered), or linear (along a road/coast).", x: "A linear village along a road" },
      { t: "Functions of settlement", d: "The economic activities a settlement performs — administrative, commercial, industrial, residential, religious, educational.", x: "A market town's commercial function" },
      { t: "Hierarchy of settlement", d: "The ranking of settlements by size and the range of services — from hamlet to village to town to city to metropolis.", x: "A metropolis serves the widest area" },
      { t: "Urbanization", d: "The growth of cities and the shift of population from rural to urban areas.", x: "Rapid urban growth in West Africa" },
      { t: "Migration", d: "The movement of people from one place to another to live — rural-urban, urban-rural, international; push and pull factors.", x: "Farm workers moving to the city" },
      { t: "Push factor", d: "A condition that drives people away from a place (unemployment, poverty, overcrowding).", x: "Lack of jobs in the village" },
      { t: "Pull factor", d: "A condition that attracts people to a place (jobs, services, education).", x: "Better schools and hospitals in the city" }
    ],
    tf: [
      { s: "Population density is the number of people per unit area (e.g. per km²).", a: "True", why: "Factors and patterns of growth, distribution and movement." },
      { s: "Rural settlements are based mainly on secondary and tertiary activities.", a: "False", why: "Rural settlements are based on PRIMARY activities (farming, fishing, mining); urban settlements on secondary/tertiary." },
      { s: "A push factor drives people away from a place.", a: "True", why: "Migration — push and pull factors." },
      { s: "Urbanization is the growth of cities and the shift of population to urban areas.", a: "True", why: "Growth and size of settlements; interaction patterns; migration." }
    ],
    mcq: [
      { q: "The number of people living per square kilometre of an area is its:", o: ["population growth", "population density", "population size", "population structure"], a: 1, why: "Population distribution — density (people per km²)." },
      { q: "A settlement based mainly on farming and fishing is a:", o: ["urban settlement", "rural settlement", "metropolis", "city"], a: 1, why: "Rural settlement — primary activities." },
      { q: "Settlements arranged along a road or river form a:", o: ["nucleated pattern", "dispersed pattern", "linear pattern", "random pattern"], a: 2, why: "Linear pattern — along a line (road, coast, river)." },
      { q: "The ranking of settlements from hamlet to village to town to city is the:", o: ["settlement pattern", "settlement hierarchy", "urbanization rate", "migration stream"], a: 1, why: "Hierarchy of settlement — by size and range of services." },
      { q: "A factor that attracts people to a city (e.g. jobs) is a:", o: ["push factor", "pull factor", "density factor", "climate factor"], a: 1, why: "Pull factor — attracts people to a place." },
      { q: "The movement of people from villages to cities is:", o: ["urban-rural migration", "rural-urban migration", "international migration", "nomadism"], a: 1, why: "Rural-urban migration (a key driver of urbanization)." },
      { q: "Which of the following is a function of an urban settlement?", o: ["subsistence farming", "commercial and administrative services", "only residential use", "only religious use"], a: 1, why: "Functions of urban settlements — commercial, administrative, industrial, etc." }
    ],
    essay: [
      { q: "(a) Explain the factors affecting population growth and distribution. (b) Describe the differences between rural and urban settlements, and state four factors that affect the location of a settlement.", marks: 12, outline: [
        "(a) Population growth: determined by birth rate, death rate and migration; high growth in developing countries (high birth rate, falling death rate); Distribution: influenced by climate (relief), water supply, soil fertility, minerals/resources, transport, political/economic factors — people cluster where conditions are favourable (river valleys, coasts, resource areas) and are sparse in deserts, dense forests, mountains",
        "(b) Rural settlement: in the countryside, based on primary activities (farming, fishing, mining), smaller population, closer to nature, simple services; Urban settlement: in towns/cities, based on secondary/tertiary activities (industry, trade, services), larger and denser population, more services and infrastructure",
        "Four factors affecting location of settlement: (1) Water supply (a reliable source); (2) Climate/relief (pleasant, well-drained); (3) Soil/fertility (for agriculture); (4) Transport/access (roads, rivers, ports); also (5) defence/safety, (6) minerals/resources, (7) political/administrative decisions"
      ] },
      { q: "Explain the terms push and pull factors of migration. Describe the effects of rural-urban migration on (a) the rural areas and (b) the urban areas, and state two measures to reduce the problems it causes.", marks: 10, outline: [
        "Push factors — conditions driving people away (unemployment, poverty, lack of services, overcrowding, poor soil); Pull factors — conditions attracting people (employment, better education/health, amenities, opportunity)",
        "(a) Effects on rural areas: loss of young/able-bodied labour (brain drain); ageing population; reduced agricultural output; but also remittances sent home, reduced pressure on land",
        "(b) Effects on urban areas: rapid/over-urbanization; overcrowding; pressure on housing, water, health, education; unemployment and underemployment; slums/shanty towns; congestion and pollution; but also a larger labour force and market",
        "Measures: (1) Rural development — improve rural services, infrastructure and agriculture to make the countryside attractive; (2) Decentralization — spread industries and services to smaller towns; (3) Urban planning — better housing and infrastructure to absorb growth; (4) Population/education programmes"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — World Population; Settlement:" },
      { k: "bul", items: [
        "World population: factors and patterns of growth, distribution and movement; growth rate problems",
        "Settlement: types (rural and urban); patterns and factors affecting location; growth and size; functions of rural and urban settlements; interaction patterns (urban-rural, rural-urban, urban-urban, rural-rural); migration"
      ] }
    ]
  },
  /* =============== G9 · TRANSPORT, INDUSTRY, TRADE & TOURISM =============== */
  {
    grade: 12, sem: "Two", icon: "🚆", period: "G9",
    title: "Transport, Industry, Trade & Tourism",
    subtitle: "Modes of transport · transport and development · industry: classification, location, contribution · trade · tourism",
    note: "Economic and Human Geography: transportation (modes, development, problems), industry (classification, location, contribution), trade, and tourism.",
    objectives: [
      "Describe the modes of transport (roads, railways, water, air, pipeline, cables, ropeways) and their advantages and disadvantages",
      "Explain the relationship between transportation and economic development, and the problems of transportation and their solutions",
      "Classify industry (primary, secondary, tertiary; heavy and light), and explain the factors of industrial location, contributions to development, and problems/solutions",
      "Explain the meaning, types (national and international), reasons and importance of trade",
      "Describe the meaning, centres and reasons for tourism, its importance, and its problems and solutions"
    ],
    terms: [
      { t: "Transport", d: "The movement of people and goods from one place to another.", x: "A truck carrying rice" },
      { t: "Road transport", d: "Movement by road (cars, trucks, buses) — flexible, door-to-door; costly to maintain, causes congestion.", x: "The Monrovia–Gbarnga road" },
      { t: "Rail transport", d: "Movement by rail — cheap for bulk over long distances, fast; expensive to lay, inflexible routing.", x: "A freight line" },
      { t: "Water transport", d: "Movement by sea, river or canal — cheapest for bulk; slow, limited to waterways.", x: "Shipping through the port" },
      { t: "Air transport", d: "Movement by air — fastest, for long distances and perishables; very expensive, capacity-limited.", x: "An international flight" },
      { t: "Pipeline", d: "Transport of liquids/gases (oil, gas) through pipes — continuous, safe; high initial cost, fixed route.", x: "An oil pipeline" },
      { t: "Primary industry", d: "Extracting raw materials from nature — agriculture, mining, fishing, forestry.", x: "Mining iron ore" },
      { t: "Secondary industry", d: "Processing/manufacturing raw materials into finished goods — factories.", x: "A cement plant" },
      { t: "Tertiary industry", d: "Providing services — trade, transport, banking, tourism, education.", x: "A bank, a market" },
      { t: "Heavy industry", d: "Industry using heavy/bulk materials and large-scale production — steel, cement, machinery.", x: "A steel mill" },
      { t: "Light industry", d: "Industry using light materials, often household/consumer goods — food processing, textiles, electronics.", x: "A shoe factory" },
      { t: "Industrial location", d: "The choice of where to set up industry, influenced by raw materials, power, labour, transport, market, capital, policy.", x: "A factory near a port" },
      { t: "Trade", d: "The buying and selling of goods and services — internal (domestic) and international (external).", x: "Exporting cocoa" },
      { t: "Tourism", d: "Travel for leisure, recreation, education or business, involving hotels, transport, attractions.", x: "Visitors to a national park" }
    ],
    tf: [
      { s: "Water transport is the cheapest mode for moving bulk goods over long distances.", a: "True", why: "Modes of transport — water is cheapest for bulk." },
      { s: "The cement plant is an example of a light industry.", a: "False", why: "Cement is a HEAVY industry (bulk materials, large-scale)." },
      { s: "Banking and tourism are examples of tertiary (service) industries.", a: "True", why: "Tertiary industry — services." },
      { s: "Trade between two countries is international (external) trade.", a: "True", why: "Trade — national and international." }
    ],
    mcq: [
      { q: "The fastest mode of transport for long distances is:", o: ["road", "rail", "air", "pipeline"], a: 2, why: "Air transport — fastest." },
      { q: "The cheapest mode of transport for bulk goods is generally:", o: ["air", "water (sea)", "road", "cable"], a: 1, why: "Water transport — cheapest for bulk." },
      { q: "Extracting raw materials from nature (mining, fishing) is a:", o: ["primary industry", "secondary industry", "tertiary industry", "quaternary activity"], a: 0, why: "Primary industry." },
      { q: "A factory that turns raw materials into finished goods is a:", o: ["primary industry", "secondary (manufacturing) industry", "tertiary industry", "quaternary activity"], a: 1, why: "Secondary industry — manufacturing." },
      { q: "Which of the following is a factor in the location of industry?", o: ["availability of power/energy", "the colour of the sky", "the phase of the moon", "the number of birds"], a: 0, why: "Factors of industrial location — raw materials, power, labour, transport, market, capital." },
      { q: "The buying and selling of goods within a country is:", o: ["international trade", "internal (domestic) trade", "foreign trade", "barter only"], a: 1, why: "Trade — national (internal) and international." },
      { q: "Travel for leisure, recreation and education is:", o: ["trade", "tourism", "industry", "mining"], a: 1, why: "Tourism — meaning, centres, reasons." }
    ],
    essay: [
      { q: "(a) Describe four modes of transport, stating one advantage and one disadvantage of each. (b) Explain how transportation contributes to economic development, and state two problems of transportation with a solution for each.", marks: 12, outline: [
        "(a) Road — advantage: flexible, door-to-door, reaches remote areas; disadvantage: congestion, high maintenance, pollution; Rail — advantage: cheap for bulk over long distances, fast; disadvantage: expensive to lay, inflexible route; Water — advantage: cheapest for bulk; disadvantage: slow, limited to waterways; Air — advantage: fastest; disadvantage: very expensive, limited capacity",
        "(b) Transportation and development: movement of people and commodities (labour mobility, trade); facilitates national and international trade; diffusion of ideas and technology; national integration (linking regions); opens up remote areas for development; creates employment",
        "Problems and solutions: (1) Poor/insufficient road network (bad roads, few roads) → build and maintain good roads, diversify modes; (2) Congestion in cities → urban planning, public transport, traffic management; (3) High cost of fuel → fuel efficiency, alternatives; (4) Lack of ports → develop port facilities"
      ] },
      { q: "(a) Classify industries into primary, secondary and tertiary, and into heavy and light, giving an example of each. (b) State four factors that influence the location of industry. (c) Explain the importance of tourism and one problem of tourism with a solution.", marks: 10, outline: [
        "(a) Primary — extracting raw materials (agriculture, mining, fishing); Secondary — manufacturing/processing (a cement plant, a shoe factory); Tertiary — services (banking, tourism, transport); Heavy — steel, cement, machinery (bulk materials); Light — food processing, textiles, electronics (light materials)",
        "(b) Factors of industrial location: (1) Raw materials (near the source); (2) Power/energy (reliable supply); (3) Labour (skilled, available); (4) Transport/market (near consumers, ports); also (5) Capital, (6) Government policy/incentives",
        "(c) Importance of tourism: earns foreign exchange; creates employment; develops infrastructure and services; promotes cultural exchange; Problem: environmental degradation and over-dependence on a single industry; Solution: sustainable tourism planning, conservation of attractions, diversification"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Transportation; Industry; Trade; Tourism:" },
      { k: "bul", items: [
        "Transportation: modes (roads, railways, water, air, pipeline, cables, ropeways, etc.); transportation and economic development (movement of people and commodities, national and international trade, diffusion of ideas and technology, national integration); problems of transportation and their solutions",
        "Industry: classification (primary, secondary and tertiary); types (heavy and light industry); factors of industrial location; contributions to development; problems/solutions",
        "Trade: meaning, types (national and international), reasons for trade, importance",
        "Tourism: meaning, centres, reasons (leisure, recreation, education, etc.); importance, problems and solutions"
      ] }
    ]
  },
  /* =============== G10 · REGIONAL GEOGRAPHY OF LIBERIA =============== */
  {
    grade: 12, sem: "Two", icon: "🇱🇷", period: "G10",
    title: "Regional Geography of Liberia",
    subtitle: "Liberia on broad outline · physical setting · population · resources · agriculture, fishing, mining · transport, communication, industry, trade, tourism",
    note: "Aspects of Regional Geography Peculiar to Member Countries — REGIONAL GEOGRAPHY OF LIBERIA (for candidates in Liberia): the country's broad outline, physical setting, population, resources, and its economic activities.",
    objectives: [
      "Describe Liberia on a broad outline: location, position, size, distance and political divisions",
      "Describe the physical setting: relief, drainage, climate, vegetation and soil",
      "Describe the population: size, distribution, structure, population quality, population movement, and population data (sources, problems and solutions)",
      "Describe the resources: mineral, power, water and vegetation resources, and their importance to development",
      "Describe the economic activities: agriculture (types of practices, food and cash crops), fishing, mining, transportation, communication, industry, trade and tourism — their importance, problems and solutions"
    ],
    terms: [
      { t: "Liberia on broad outline", d: "Location (on the west coast of Africa), position (latitude/longitude), size (area ≈ 111,369 km²), distances, and political divisions (15 counties, with Montserrado/Monrovia as the capital).", x: "Bordered by Guinea, Sierra Leone and Côte d'Ivoire" },
      { t: "Relief", d: "The physical features of the land — coastal plains, the central plateau and the mountainous north (e.g. the Nimba Range).", x: "Mount Nimba, the highest point" },
      { t: "Drainage", d: "The rivers and waterways — the Lofa, Cestos, St. Paul, Mesurado, and Cavally rivers, plus lakes and lagoons.", x: "The Mesurado at Monrovia" },
      { t: "Climate of Liberia", d: "Equatorial/tropical — hot with two wet seasons (a long and a short rainy season) and two dry seasons; high rainfall.", x: "Two rainy seasons a year" },
      { t: "Vegetation and soil", d: "Tropical rainforest (the south) grading to savanna (the north); fertile alluvial soils along the rivers.", x: "The forest belt" },
      { t: "Mineral resources", d: "Iron ore, rubber, gold, diamonds, gold, and other minerals; their distribution, extraction and importance.", x: "Iron ore from the north" },
      { t: "Power resources", d: "Hydro-electric projects (e.g. Dodo, Guma, Bumbuna), water, fuelwood and charcoal, biogas (e.g. cow-dung).", x: "The Dodo hydro-electric project" },
      { t: "Agriculture in Liberia", d: "Food crops (rice, cassava, maize) and cash/export crops (rubber, palm produce, coffee); subsistence and commercial practices.", x: "Rice as the staple" },
      { t: "Fishing", d: "Inland (rivers, lakes) and ocean (in-shore/off-shore) fishing — methods, types of fish, storage and marketing.", x: "Coastal fishing communities" },
      { t: "Transportation in Liberia", d: "Road, rail, water and air; the role of transport in economic development (internal and external trade, diffusion of ideas), and its problems.", x: "The road network, the port at Monrovia" },
      { t: "Trade", d: "Internal and external trade — major commodities (agricultural, manufactured goods, minerals), patterns and problems.", x: "Exporting rubber and iron ore" },
      { t: "Tourism in Liberia", d: "Development of tourism, main areas (forests, waterfalls, coastal sites), factors, economic importance, problems and solutions.", x: "The national parks and waterfalls" }
    ],
    tf: [
      { s: "Liberia is located on the west coast of Africa.", a: "True", why: "Liberia on broad outline — location, position." },
      { s: "The climate of Liberia has two wet and two dry seasons.", a: "True", why: "Physical setting — climate (equatorial/tropical with two rainy seasons)." },
      { s: "Rubber is a cash/export crop in Liberia.", a: "True", why: "Agriculture — food and cash crops (rubber, palm produce, coffee)." },
      { s: "The Dodo, Guma and Bumbuna are hydro-electric power projects in Liberia.", a: "True", why: "Energy and power — hydro-electric power projects e.g. Dodo, Guma, Bumbuna." }
    ],
    mcq: [
      { q: "Liberia is located on which coast of Africa?", o: ["East", "West", "South", "North"], a: 1, why: "Liberia — west coast of Africa." },
      { q: "The highest physical feature in the north of Liberia is the:", o: ["Mesurado", "Nimba Range", "Cavally", "Lofa"], a: 1, why: "Relief — the mountainous north (the Nimba Range)." },
      { q: "Which of the following is a major river in Liberia?", o: ["the Nile", "the Lofa", "the Niger", "the Zambezi"], a: 1, why: "Drainage — the Lofa, Cestos, St. Paul, Mesurado, Cavally." },
      { q: "The staple food crop in Liberia is:", o: ["wheat", "rice", "maize only", "sorghum only"], a: 1, why: "Agriculture — food crops (rice, cassava, maize); rice is the staple." },
      { q: "Which of the following is a cash/export crop in Liberia?", o: ["rubber", "potato", "sugar cane only", "barley"], a: 0, why: "Cash crops — rubber, palm produce, coffee." },
      { q: "A hydro-electric power project in Liberia is:", o: ["Dodo", "Aswan", "Akosombo", "Cabora Bassa"], a: 0, why: "Energy and power — e.g. Dodo, Guma, Bumbuna." },
      { q: "The capital and largest city of Liberia is:", o: ["Gbarnga", "Monrovia", "Buchanan", "Sanniquellie"], a: 1, why: "Political divisions — Montserrado/Monrovia, the capital." }
    ],
    essay: [
      { q: "Describe the physical setting of Liberia, with reference to relief, drainage, climate, vegetation and soil. Explain the importance of the country's mineral and power resources to development.", marks: 12, outline: [
        "Relief: three main regions — a narrow coastal plain in the south, a central plateau, and a mountainous north (the Nimba Range, the highest point); Drainage: a dense network of rivers (Lofa, Cestos, St. Paul, Mesurado, Cavally) flowing to the Atlantic, with lakes and lagoons; Climate: equatorial/tropical — hot, with two wet seasons (long and short rainy) and two dry seasons, high rainfall",
        "Vegetation: tropical rainforest in the south, grading to savanna/grassland in the north; Soil: fertile alluvial soils in the river valleys, laterite in other areas — suitable for agriculture",
        "Mineral resources: iron ore (the north), rubber, gold, diamonds and others — importance: export earnings (foreign exchange), employment, raw materials for industry, government revenue",
        "Power resources: hydro-electric projects (Dodo, Guma, Bumbuna) providing electricity for homes and industry; water resources for domestic, agricultural and industrial use; fuelwood and charcoal and biogas for energy — importance: powering development, improving living standards, supporting industry"
      ] },
      { q: "(a) Describe the agriculture of Liberia — the types of practices and the food and cash crops — stating its importance and two problems with solutions. (b) Explain the role of transportation in the economic development of Liberia, and state two problems of transport with a solution for each.", marks: 12, outline: [
        "(a) Agriculture: types of practices — subsistence (small-scale family farming) and commercial (plantations, e.g. rubber); Food crops — rice, cassava, maize (rice the staple); Cash/export crops — rubber, palm produce, coffee; Importance: the backbone of the economy — provides food, employment (the majority of the population), export earnings, and raw materials",
        "Problems and solutions: (1) Low productivity (poor tools, lack of fertilizer, poor storage) → introduce improved seeds, fertilizer, mechanization, and better storage/marketing; (2) Poor infrastructure/marketing (bad roads, middlemen) → improve rural roads, support farmers' co-operatives, develop local processing",
        "(b) Role of transport: movement of people and goods (labour mobility, getting produce to market); internal and external trade (exporting rubber/iron ore, importing goods); diffusion of ideas and technology; national integration (linking the counties); economic development (opening up remote areas)",
        "Problems and solutions: (1) Poor/insufficient road network (bad, few roads — hinders movement of goods) → build and maintain all-weather roads, diversify transport modes; (2) Lack of maintenance and congestion → regular maintenance, traffic management, public transport"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Regional Geography of LIBERIA:" },
      { k: "bul", items: [
        "Liberia on broad outline: location, position, size, distance and political divisions",
        "Physical setting: relief, drainage, climate, vegetation and soil",
        "Population: size, distribution, structure, population quality, population movement, population data (sources, problems & solutions)",
        "Resources: mineral, power, water and vegetation resources, importance of resources to development",
        "Agriculture: types of agricultural practices, food and cash crops, importance, problems and solutions",
        "Transportation: mode, advantages and disadvantages, problems and solutions, influence of transportation on human activities",
        "Communication: communication networks, advantages and disadvantages, importance, problems & solutions",
        "Industry: definition, types, major industrial zones, factors of location, importance, problems and solutions",
        "Trade: meaning, types (national and international), forex, major commercial areas, importance of commercial activities",
        "Tourism: meaning, centres, reasons for tourism, importance, problems and solutions",
        "Fishing: meaning, inland and ocean (in-shore/off shore), methods, types of fish, storage and marketing, importance, problems and solutions",
        "Mining: types, distribution of minerals, methods of extraction, problems and solutions; Energy and power: water, fuelwood and charcoal, biogas (e.g. cow-dung), hydro-electric power projects e.g. Dodo, Guma, Bumbuna"
      ] }
    ]
  },
  /* =============== G11 · REGIONAL GEOGRAPHY OF AFRICA & ECOWAS =============== */
  {
    grade: 12, sem: "Two", icon: "🌍", period: "G11",
    title: "Regional Geography of Africa & ECOWAS",
    subtitle: "Africa on broad outline · irrigation and plantation agriculture · oil, lumbering, gold and copper mining · population of West Africa · ECOWAS",
    note: "Aspects of Regional Geography Peculiar to Member Countries — REGIONAL GEOGRAPHY OF AFRICA: the continent on a broad outline, selected regional topics, and ECOWAS.",
    objectives: [
      "Describe Africa on a broad outline: location, size, position, political divisions, physical features and their economic importance, and the distribution of minerals",
      "Explain the selected topics: irrigation agriculture (Nile and Niger Basins), plantation agriculture (West and East Africa), oil production (Nigeria, Ghana, Libya), lumbering (Equatorial Africa — Côte d'Ivoire, Zaire), gold mining (South Africa), copper mining (Zambia, Zaire), and population distribution in West Africa",
      "Describe ECOWAS: meaning, member countries, purposes/mandate, advantages/benefits, disadvantages, and problems and solutions"
    ],
    terms: [
      { t: "Africa on broad outline", d: "Location (the 'dark continent' in the tropics, crossed by the equator), size, position, political divisions (54 countries), physical features (Sahara, Congo Basin, Great Rift Valley, Drakensberg) and their economic importance, mineral distribution.", x: "The Sahara, the Congo, the Rift Valley" },
      { t: "Irrigation agriculture", d: "Farming that uses artificially supplied water, essential in dry areas — e.g. the Nile Basin and the Niger Basin.", x: "Irrigated farms along the Nile" },
      { t: "Plantation agriculture", d: "Large-scale commercial farming of a single cash crop (rubber, cocoa, tea) — in West and East Africa.", x: "Rubber and cocoa plantations" },
      { t: "Oil production", d: "The extraction of petroleum — in Nigeria, Ghana and Libya (and others), a major source of foreign exchange.", x: "The Niger Delta, the Libyan desert" },
      { t: "Lumbering", d: "The harvesting of timber — in Equatorial Africa (Côte d'Ivoire, Zaire/DRC), a source of timber for internal use and export.", x: "The forests of the Congo" },
      { t: "Gold mining", d: "The extraction of gold — notably in South Africa (the Witwatersrand), a major industry.", x: "The gold fields of South Africa" },
      { t: "Copper mining", d: "The extraction of copper — notably in Zambia and Zaire (the Copperbelt).", x: "The Copperbelt of Zambia" },
      { t: "Population distribution in West Africa", d: "The pattern of people — dense in the river valleys, coast and forest margins; sparse in the Sahara/desert; influenced by climate, water, soil and economic activity.", x: "Dense in the Niger Delta and coast" },
      { t: "ECOWAS", d: "The Economic Community of West African States — a regional integration body of West African countries promoting trade, movement and development.", x: "Liberia is a member" },
      { t: "Mandate of ECOWAS", d: "The purposes: to promote trade, free movement of persons and capital, coordinated economic policies, and joint development among member states.", x: "The common market" }
    ],
    tf: [
      { s: "Irrigation agriculture is important in dry areas such as the Nile and Niger Basins.", a: "True", why: "Irrigation agriculture in the Nile Basin and the Niger Basin." },
      { s: "Gold mining is a major industry in South Africa.", a: "True", why: "Gold mining in South Africa (the Witwatersrand)." },
      { s: "The Copperbelt is located in Ghana.", a: "False", why: "Copper mining in Zambia and Zaire (the Copperbelt)." },
      { s: "ECOWAS is a regional economic integration body of West African countries.", a: "True", why: "ECOWAS — meaning, member countries, purposes/mandate." }
    ],
    mcq: [
      { q: "Irrigation agriculture is especially important in:", o: ["the Nile and Niger Basins", "the Sahara only", "the Drakensberg only", "the Congo Basin only"], a: 0, why: "Irrigation agriculture in the Nile Basin and the Niger Basin." },
      { q: "Large-scale commercial farming of a single cash crop (rubber, cocoa) is:", o: ["subsistence farming", "plantation agriculture", "nomadic herding", "shifting cultivation"], a: 1, why: "Plantation agriculture in West and East Africa." },
      { q: "Oil production is significant in all of the following EXCEPT:", o: ["Nigeria", "Ghana", "Libya", "the Sahara of Chad"], a: 3, why: "Oil production in Nigeria, Ghana and Libya (the named countries)." },
      { q: "Gold mining is a major industry in:", o: ["Zambia", "South Africa", "Ghana only", "Senegal only"], a: 1, why: "Gold mining in South Africa." },
      { q: "Copper mining is associated with the Copperbelt in:", o: ["Zambia and Zaire", "South Africa", "Nigeria", "Morocco"], a: 0, why: "Copper mining in Zambia and Zaire." },
      { q: "In West Africa, population is generally densest in:", o: ["the Sahara desert", "the river valleys and coast", "the high desert", "the dense interior forest only"], a: 1, why: "Population distribution in West Africa — dense in river valleys, coast and forest margins." },
      { q: "ECOWAS stands for:", o: ["Economic Community of West African States", "East Coast West African Society", "European Council of West African States", "Economic Commission for West Africa"], a: 0, why: "ECOWAS — Economic Community of West African States." }
    ],
    essay: [
      { q: "Describe Africa on a broad outline, with reference to location, size, physical features and their economic importance, and the distribution of minerals. Explain the importance of irrigation agriculture in the Nile and Niger Basins.", marks: 12, outline: [
        "Location — the 'dark continent' in the tropics, crossed by the equator, bordered by the Mediterranean, Atlantic and Indian Oceans; Size — the second-largest continent; Political divisions — 54 countries",
        "Physical features and economic importance: the Sahara (minerals, pastoralism), the Congo Basin (forests, water, hydro-power), the Great Rift Valley (lakes, hydro-power, tourism), the Drakensberg and Ethiopian Highlands (rainfall, hydro-power), the coastal plains (trade, ports) — each supports resources, transport and settlement",
        "Distribution of minerals: gold (South Africa, Ghana), copper (Zambia, Zaire), oil (Nigeria, Libya, Ghana), diamonds (South Africa, Côte d'Ivoire), iron ore (Liberia, South Africa), tin (Ghana)",
        "Irrigation agriculture in the Nile and Niger Basins: essential in the dry/semi-arid areas where rainfall is unreliable; it provides a reliable water supply for crops, enabling year-round farming, increasing food production and supporting the dense populations along the rivers; it is the basis of the fertile Nile Valley and the Niger Delta/inner delta"
      ] },
      { q: "(a) Explain the meaning and member countries of ECOWAS. (b) State the purposes/mandate of ECOWAS. (c) State two advantages and two problems of ECOWAS, with a solution for one of the problems.", marks: 10, outline: [
        "(a) Meaning — the Economic Community of West African States, a regional integration body; Member countries — the West African states (Nigeria, Ghana, Liberia, Sierra Leone, Côte d'Ivoire, Senegal, The Gambia, Guinea, Mali, Burkina Faso, Togo, Benin)",
        "(b) Purposes/mandate: to promote and expand trade among member states; to facilitate the free movement of persons, services and capital; to coordinate monetary and financial policies; to promote joint projects and economic development; to strengthen cooperation in politics, security and culture",
        "(c) Advantages: larger market (more trade), free movement of people and goods, economies of scale, joint projects and development, stronger bargaining power; Problems: non-tariff barriers persist, differences in development levels and currencies, transport/infrastructure gaps, political tensions",
        "Solution (for one problem): improve transport and infrastructure (roads, ports, cross-border links) and harmonize policies/currencies to facilitate trade and movement"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Regional Geography of AFRICA + ECOWAS:" },
      { k: "bul", items: [
        "Africa on broad outline: location, size, position, political divisions and associated islands, physical features and their economic importance (relief, drainage, climate and vegetation), distribution of minerals",
        "Selected topics: irrigation agriculture in the Nile Basin and the Niger Basin; plantation agriculture in West and East Africa; oil production in Nigeria, Ghana and Libya; lumbering in Equatorial Africa (with particular reference to Côte d'Ivoire and Zaire); gold mining in South Africa; copper mining in Zambia and Zaire; population distribution in West Africa",
        "ECOWAS: meaning, member countries, purposes/mandate, advantages/benefits, disadvantages, problems and solutions"
      ] }
    ]
  },
  /* =============== G12 · FIELD WORK =============== */
  {
    grade: 12, sem: "Two", icon: "🥾", period: "G12",
    title: "Field Work (25% of Continuous Assessment)",
    subtitle: "Based on the local geography of the candidate's home country: land use, market survey, traffic flow, journey-to-work, rate of erosion",
    note: "Field work on any one of the set topics, based on the local geography of the candidate's home country. This aspect of the syllabus is examined by schools as part of the continuous assessment and accounts for 25% of the total mark allotted to continuous assessment.",
    objectives: [
      "Carry out a field study of land use (rural — crop farming such as rice or cocoa, mining, fishing; urban — commercial activities, ports, factories, recreation)",
      "Conduct a market survey (rural or urban), recording the types of goods, prices, and the traders",
      "Measure traffic flow (rural or urban) at a junction/road at different times of day",
      "Study the patterns of journey to work (rural or urban), using questionnaires",
      "Investigate the rate of erosion in the locality and suggest controls"
    ],
    terms: [
      { t: "Field work", d: "Collecting geographical data firsthand in the field (observation, measurement, questionnaires, sketches) — 25% of the continuous assessment.", x: "A survey of the local market" },
      { t: "Land use (rural)", d: "How the land is used in the countryside — crop farming (rice, cocoa), mining (coal, tin, petroleum), fishing.", x: "A rice farm" },
      { t: "Land use (urban)", d: "How the land is used in the town — commercial activities, ports, factories, recreational areas, residential.", x: "The central business district" },
      { t: "Market survey", d: "A systematic study of a market — the goods sold, prices, number of traders, types of customers.", x: "Surveying the Monrovia market" },
      { t: "Traffic flow", d: "The count of vehicles/pedestrians passing a point in a given time, at different times of day.", x: "Counting cars at a junction" },
      { t: "Journey to work", d: "The study of how and where people travel from home to work (origin, destination, mode, time).", x: "A questionnaire on commuter routes" },
      { t: "Rate of erosion", d: "The measurement of how quickly soil/land is being worn away in a locality (e.g. the growth of a gully over time).", x: "Marking a gully's head and measuring its advance" }
    ],
    tf: [
      { s: "Field work accounts for 25% of the total mark allotted to continuous assessment.", a: "True", why: "This aspect of the syllabus should be examined by schools as part of the continuous assessment and should account for 25% of the total mark allotted to continuous assessment." },
      { s: "Field work should be based on the local geography of the candidate's home country.", a: "True", why: "Field work on any one of the following topics should be based on local geography of candidate's home country." },
      { s: "A market survey records only the types of goods sold.", a: "False", why: "A market survey records the types of goods, prices, number of traders and types of customers." },
      { s: "A traffic flow study counts vehicles/pedestrians passing a point at different times.", a: "True", why: "Traffic flow — rural or urban." }
    ],
    mcq: [
      { q: "Field work in the WASSCE geography syllabus accounts for what percentage of the continuous assessment mark?", o: ["10%", "25%", "50%", "5%"], a: 1, why: "Field work — 25% of the continuous assessment." },
      { q: "Field work should be based on the local geography of:", o: ["any country in the world", "the candidate's home country", "Nigeria only", "Ghana only"], a: 1, why: "Based on local geography of candidate's home country." },
      { q: "Counting the number of vehicles passing a road junction at different times of day is a study of:", o: ["land use", "traffic flow", "soil erosion", "population density"], a: 1, why: "Traffic flow — rural or urban." },
      { q: "Studying how and where people travel from home to work is a study of:", o: ["journey to work", "market survey", "traffic flow", "climate"], a: 0, why: "Patterns of journey to work — rural or urban." },
      { q: "Which of the following is a rural land-use activity for field work?", o: ["a port", "crop farming (e.g. rice, cocoa)", "a factory", "a shopping complex"], a: 1, why: "Rural land use — crop farming, mining, fishing." },
      { q: "Measuring the advance of a gully over time in a locality is a study of:", o: ["traffic flow", "the rate of erosion", "land use", "market prices"], a: 1, why: "Rate of erosion in the locality." }
    ],
    essay: [
      { q: "You are asked to carry out a field study of traffic flow at a junction in your locality. Describe the procedure you would follow, the data you would collect, and two ways you would present the results.", marks: 10, outline: [
        "Procedure: choose the junction and a fixed counting point; select the times (e.g. 7–9 a.m., 12–2 p.m., 5–7 p.m.) and days (a weekday and a Saturday); count the number of vehicles (by type: cars, buses, trucks, motorcycles) and pedestrians in fixed intervals (e.g. 15 minutes); record the data on a tally sheet",
        "Data to collect: type and number of vehicles, direction of flow, time intervals, day of the week, weather (if relevant)",
        "Presentation: (1) A table of the counts by time period; (2) A bar chart (or line graph) showing the number of vehicles at each time of day, showing the peaks (rush hour) and the quieter periods",
        "Analysis: identify the peak times and causes (work/school hours), and suggest improvements (traffic lights, widening the road, public transport)"
      ] },
      { q: "Describe how you would investigate the rate of erosion in a locality, and suggest three methods of controlling soil erosion there.", marks: 10, outline: [
        "Investigation: select an eroding area (a gully or bare slope); mark the head of the gully and fixed points with a stake/string; measure the length, width and depth of the gully with a tape and ranging rod; photograph it; repeat the measurements after a rainy season to calculate the rate of advance (e.g. metres per season); record the slope, vegetation cover, and soil type",
        "Factors to note: slope steepness, lack of vegetation, heavy rain, overgrazing, and the soil type",
        "Control methods: (1) Afforestation/tree planting and maintaining vegetation cover (roots bind the soil); (2) Building check-dams and terraces to slow the runoff; (3) Contour ploughing and agroforestry; (4) Reducing overgrazing and controlling construction on the slope; (5) Proper drainage to divert water away from the eroding area"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Field Work (25% of continuous assessment):" },
      { k: "bul", items: [
        "Field work on any one of the following topics should be based on local geography of candidate's home country (examined by schools as part of the continuous assessment, accounting for 25% of the total mark allotted to continuous assessment)",
        "Land use (rural or urban): rural — crop farming (e.g. rice, cocoa, etc.), mining (e.g. coal, tin, petroleum, etc.), fishing; urban — commercial activities, ports, factories, recreational, etc.",
        "Market survey — rural or urban",
        "Traffic flow — rural or urban",
        "Patterns of journey to work — rural or urban",
        "Rate of erosion in the locality, etc."
      ] }
    ]
  }
  ]
};
window.WA_SUBJECTS.gg = window.WA_gg;
