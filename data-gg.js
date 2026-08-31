/* Curriculum data — Republic of Liberia, SENIOR HIGH GEOGRAPHY, Grades 10–12.
   Derived from the "Geography 10-12" senior high curriculum guide (61 pp.),
   6 periods per grade, 18 units. Where the guide sets several topics inside one
   period they are merged into that period's unit, as the guide teaches them
   together.

   Every unit carries a `study[]` block list — the course text of the guide,
   rendered verbatim on the Study Notes page, with a comment noting the guide
   pages covered. `**bold**` marks the key terms; table cells take no markup
   because the renderer escapes them.

   Uses the SS_CURRICULUM unit shape so GEN_SS renders it unchanged, plus the
   optional `worked` field (calculations with steps):
     grade · period · sem · icon · title · subtitle · outcomes[] · objectives[]
     · note · focus[] · terms[]{t,d,x} · facts[]{q,a} · tf[]{s,a,why}
     · sort{title,groups[]{name,items}}
     · mapwork{title,caption,items[]{p,f}}
     · casestudy{title,text,questions[]{q,a}}
     · project{title,brief,steps[],criteria[]}
     · worked[]{q,steps[],a} · apply[]{q,a}
     · activities[] · materials[] · assessment[]

   Per the project rule the digital research link listed in the source guide
   (apsstudent.collegeboard.org) is omitted: the pack must stay fully offline.
   Textbooks named in the guide are retained as text references.
*/

var GG_CURRICULUM = [

/* ================================ GRADE 10 ================================ */
{
  grade:10, period:"I", sem:"One", icon:"🌍",
  title:"The Earth as a Planet; Latitude, Longitude and Time",
  subtitle:"The solar system, the shape and size of the earth, the graticule, and the earth's movements",
  outcomes:[
    "Learners are able to relate life on the earth to its planetary position in space and determine time difference in relation to the earth's rotation",
    "Learners are able to elaborate the concepts of diameters and circumferences and prove the shape of the earth",
    "Learners are able to demonstrate understanding of latitudes and longitudes"
  ],
  objectives:[
    "Describe the formation of the universe and of the solar system",
    "Draw a diagram of the solar system showing the planets in orbit around the sun",
    "Explain equatorial and polar circumference and diameter, and prove the earth's shape",
    "Relate the terms latitude and longitude and discuss the major lines of each",
    "Calculate linear distance and local time from longitude",
    "Explain the earth's rotation and revolution and their effects"
  ],
  note:"<b>Latitude</b> measures distance north or south of the Equator (0°); <b>longitude</b> measures distance east or west of the Prime Meridian (0°). Together they form the <b>graticule</b>. The earth turns 360° in 24 hours, so <b>15° of longitude = 1 hour</b> and <b>1° = 4 minutes</b>. Places east of the Greenwich Meridian are <b>ahead</b> in time; places west are <b>behind</b>.",
  study:[
    /* ---- course text: Semester One, Period I — The Earth as a Planet; Latitude, Longitude and Time (guide pp. 2-7) ---- */
    {k:"h3", t:"The Formation and Composition of the Universe"},
    {k:"p", t:"The **universe** is all matter and energy everywhere — galaxies, stars, planets, dust and the space between. It formed some 14 billion years ago in the **Big Bang** and has been expanding since; its composition is chiefly the light gases hydrogen and helium, gathered into **galaxies** of billions of stars. Our own star, the **sun**, with its family of planets, lies in the Milky Way galaxy. Life on earth is possible because of the earth's planetary position in space — near enough to the sun for warmth, far enough to keep its water and its atmosphere."},
    {k:"rule"},
    {k:"h3", t:"The Solar System: Formation, Structure and the Planets"},
    {k:"p", t:"The **solar system** formed about 4.6 billion years ago from a great spinning cloud of gas and dust that flattened into a disc; the sun gathered most of the mass at the centre and the planets formed from what circled it. Its **structure**: the sun at the centre, then the planets in orbit around it — **Mercury, Venus, Earth, Mars** (the inner, rocky planets), then **Jupiter, Saturn, Uranus and Neptune** (the giant outer planets) — with moons, asteroids, comets and dust between. Draw a diagram of the solar system showing the planets in orbit around the sun."},
    {k:"rule"},
    {k:"h3", t:"The Moon and its Impact"},
    {k:"p", t:"The **moon** is the earth's only natural satellite, turning on its axis in the same time it takes to circle the earth, so the same face always looks at us. Its **phases** — new moon, crescent, first quarter, gibbous, full moon and back — follow its revolution about the earth in about 29½ days, as we see differing amounts of its sunlit side. Its **impact**: it raises the ocean **tides**, steadies the tilt of the earth's axis, and lightens the night sky. Demonstrate the moon's rotation and revolution by walking around a chair with one side of the body always facing it, and draw the phases of the moon."},
    {k:"rule"},
    {k:"h3", t:"The Shape and Size of the Earth"},
    {k:"p", t:"The earth's shape is a slightly flattened sphere — an **oblate spheroid**, flattened at the poles and bulging at the equator. Its dimensions: the **equatorial circumference** about 40 075 km; the **polar circumference** about 40 008 km; the **equatorial diameter** about 12 756 km; the **polar diameter** about 12 714 km — a difference of about 42 km, small but real proof of the flattening. Measure the two circumferences and diameters of an orange or an egg with string and ruler as a model."},
    {k:"p", t:"The **proof of the earth's spherical shape**: **circumnavigation of the earth** — sail or fly ever in one direction and you return to your starting point; the **lunar eclipse**, when the earth's shadow cast on the moon is always round; the **earth's curved horizon**, with distant ships appearing mast first; the **apparent sunrise and sunset**, the sun appearing and vanishing at different times in different places; **aerial photographs** from aircraft and spacecraft; and the **Bedford canal experiment**, in which a boat's hull vanished before its mast down a straight stretch of water. Plant three poles of equal height on level ground and observe the curved shadow line as further inferential proof."},
    {k:"rule"},
    {k:"h3", t:"Lines of Latitude"},
    {k:"p", t:"**Latitude** is the angular distance of a place north or south of the **Equator**, the great circle at 0°. The **major lines of latitude**: the Equator (0°); the Tropic of Cancer (23½° N) and the Tropic of Capricorn (23½° S); the Arctic Circle (66½° N) and the Antarctic Circle (66½° S); and the North and South Poles (90°). **Characteristics**: latitudes run east to west, are parallel, never meet, and grow shorter toward the poles; all except the Equator are **small circles**. **Uses** of latitude: locating places, describing climate zones and calculating distance — one degree of latitude is about 111 km. **Linear distance calculation**: distance = difference in latitude × 111 km."},
    {k:"rule"},
    {k:"h3", t:"Lines of Longitude"},
    {k:"p", t:"**Longitude** is the angular distance of a place east or west of the **Prime (Greenwich) Meridian** at 0°, measured to 180° E and 180° W. **Characteristics**: meridians run from pole to pole, are of equal length, and converge at the poles; they cross the Equator at right angles. **Great and small circles**: a great circle divides the earth into two equal halves — the Equator and every meridian circle with its partner on the far side; all other circles are small. **Uses** of longitude: locating places and calculating **local time**, for the earth turns 360° in 24 hours — **15° of longitude = 1 hour, and 1° = 4 minutes**; places east of Greenwich are ahead in time, places west behind. **Local time calculation**: multiply the difference in longitude by 4 minutes per degree and add or subtract as the direction requires."},
    {k:"rule"},
    {k:"h3", t:"The Graticule and the Kinds of North"},
    {k:"p", t:"The **graticule** is the network of intersecting lines of latitude and longitude drawn over the globe — the grid by which every place on earth is fixed. Set within it are the different **norths**: the **North and South Poles** at the ends of the axis; **true north** toward the geographic pole along a meridian; **magnetic north**, to which the compass needle points; **grid north**, the direction of the northings on a map sheet; and the **magnetic declination**, the angle between true north and magnetic north at a place, which the navigator must correct."},
    {k:"rule"},
    {k:"h3", t:"The Earth's Movements"},
    {k:"p", t:"The earth's **rotation** is its turning on its axis from west to east once in 24 hours. Its **effects**: the alternation of **day and night**; the apparent movement of the sun across the sky; the difference of local time from place to place; and, with the Ferrel deflection, the bending of winds and currents. The earth's **revolution** is its journey around the sun in its **orbit**, once in 365¼ days, at a tilt of 23½° from the plane of the orbit. The terms associated with revolution: the **orbit, axis, inclination (axial tilt), the solstices** of 21 June and 22 December, when the sun is overhead at a tropic, and the **equinoxes** of 21 March and 23 September, when day and night are equal everywhere. The **effects of revolution**: the **seasons** and the varying length of day and night through the year."},
    {k:"p", t:"**Ferrel's law of deflection**: moving air and water are deflected to the right in the northern hemisphere and to the left in the southern, because of the earth's rotation — the trade winds and the great ocean currents all bend to this law. An **eclipse** is the hiding of one heavenly body by another or by the earth's shadow. A **solar (sun) eclipse** forms when the moon passes between the sun and the earth, casting its shadow on the earth; a **lunar (moon) eclipse** forms when the earth passes between the sun and the moon, so the earth's shadow falls on the moon. Illustrate both by diagrams, and distinguish carefully between them."},
  ],

  focus:[
    "Formation and composition of the universe and the solar system",
    "The planets; the moon, its phases and its impact",
    "Shape and size of the earth: equatorial and polar diameter and circumference",
    "Proofs of the earth's shape: curved horizon, apparent sunrise, circumnavigation",
    "Lines of latitude: the Equator, Tropics and Polar Circles",
    "Lines of longitude: the Prime Meridian, Great and Small Circles",
    "Local time calculation and the International Date Line",
    "True north, magnetic north, grid north and magnetic declination",
    "Rotation and revolution and their effects"
  ],
  terms:[
    {t:"solar system", d:"the sun with the planets and bodies that orbit it", x:"The earth is the third planet of the solar system."},
    {t:"planet", d:"a large body orbiting a star and shining by reflected light", x:"Mars is the fourth planet from the sun."},
    {t:"orbit", d:"the path one body follows around another", x:"The earth's orbit takes one year."},
    {t:"rotation", d:"the spinning of the earth on its own axis", x:"Rotation causes day and night."},
    {t:"revolution", d:"the movement of the earth around the sun", x:"Revolution takes 365 and a quarter days."},
    {t:"axis", d:"the imaginary line through the poles about which the earth spins", x:"The axis is tilted at 23.5 degrees."},
    {t:"latitude", d:"angular distance north or south of the Equator", x:"Monrovia lies at about 6 degrees north latitude."},
    {t:"longitude", d:"angular distance east or west of the Prime Meridian", x:"Longitude determines local time."},
    {t:"Equator", d:"the line of 0 degrees latitude circling the earth's middle", x:"The Equator divides the earth into two hemispheres."},
    {t:"Prime Meridian", d:"the line of 0 degrees longitude passing through Greenwich", x:"Time is reckoned from the Prime Meridian."},
    {t:"graticule", d:"the network of latitude and longitude lines on a map", x:"The graticule fixes any position on earth."},
    {t:"Great Circle", d:"any circle dividing the earth into two equal halves", x:"The Equator is a Great Circle."},
    {t:"Small Circle", d:"a circle that does not divide the earth equally", x:"Every parallel except the Equator is a Small Circle."},
    {t:"Tropic of Cancer", d:"the parallel at 23.5 degrees north", x:"The overhead sun reaches the Tropic of Cancer in June."},
    {t:"Tropic of Capricorn", d:"the parallel at 23.5 degrees south", x:"The overhead sun reaches Capricorn in December."},
    {t:"International Date Line", d:"the line near 180 degrees where the date changes", x:"Crossing the Date Line alters the calendar day."},
    {t:"local time", d:"time reckoned from the sun's position at a place", x:"Local time changes with longitude."},
    {t:"equinox", d:"the day when day and night are of equal length", x:"An equinox occurs in March and September."},
    {t:"solstice", d:"the day of longest or shortest daylight", x:"The June solstice is the longest day in the north."},
    {t:"magnetic declination", d:"the angle between true north and magnetic north", x:"Correct the compass for magnetic declination."},
    {t:"circumference", d:"the distance round a circle or sphere", x:"The equatorial circumference is about 40 075 km."},
    {t:"hemisphere", d:"half of the earth's sphere", x:"Liberia lies in the northern hemisphere."}
  ],
  facts:[
    {q:"Name the planets of the solar system in order from the sun.", a:"Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune."},
    {q:"State three proofs that the earth is spherical.", a:"A ship's hull disappears before its mast over the curved horizon; the sun rises earlier in the east than the west; circumnavigation returns a traveller to the starting point; and the earth casts a circular shadow on the moon."},
    {q:"Give the equatorial and polar diameters of the earth and explain the difference.", a:"The equatorial diameter is about 12 756 km and the polar diameter about 12 714 km. The earth bulges at the Equator and is slightly flattened at the poles, making it an oblate spheroid."},
    {q:"State three characteristics of lines of latitude.", a:"They run east to west and are parallel to one another; they never meet; they decrease in length away from the Equator; and they are numbered 0 to 90 degrees north and south."},
    {q:"State three characteristics of lines of longitude.", a:"They run north to south from pole to pole; they are all of equal length and all are Great Circles; they meet at the poles; and they are numbered 0 to 180 degrees east and west."},
    {q:"How many degrees of longitude correspond to one hour of time, and why?", a:"Fifteen degrees. The earth rotates 360 degrees in 24 hours, so 360 divided by 24 gives 15 degrees per hour, or 1 degree every 4 minutes."},
    {q:"Distinguish rotation from revolution and give one effect of each.", a:"Rotation is the spin on its axis taking 24 hours and causing day and night; revolution is the orbit round the sun taking a year and, with the tilted axis, causing the seasons."},
    {q:"Why does the earth experience seasons?", a:"Because the axis is tilted at 23.5 degrees to the plane of the orbit, so as the earth revolves, each hemisphere is alternately inclined toward and away from the sun."},
    {q:"Distinguish a Great Circle from a Small Circle.", a:"A Great Circle divides the earth into two equal halves — all meridians and the Equator. A Small Circle does not — every parallel except the Equator."},
    {q:"Distinguish true north, magnetic north and grid north.", a:"True north is the direction of the geographic North Pole; magnetic north is the direction the compass needle points; grid north is the direction of the northward grid lines on a map."},
    {q:"State two uses of lines of latitude and two of longitude.", a:"Latitude fixes position north or south and determines climatic zones. Longitude fixes position east or west and determines local time."}
  ],
  tf:[
    {s:"All lines of longitude are Great Circles.", a:"true", why:"Each meridian and its opposite together divide the earth into two equal halves."},
    {s:"The Equator is a line of longitude.", a:"false", why:"It is the line of 0 degrees latitude, running east to west."},
    {s:"Fifteen degrees of longitude equal one hour of time.", a:"true", why:"The earth turns 360 degrees in 24 hours, giving 15 degrees per hour."},
    {s:"Rotation of the earth causes the seasons.", a:"false", why:"Rotation causes day and night; the seasons result from revolution combined with the tilted axis."},
    {s:"Places east of Greenwich are ahead of Greenwich in time.", a:"true", why:"The sun rises there first, so their local time is later."},
    {s:"The earth is a perfect sphere.", a:"false", why:"It is an oblate spheroid, bulging at the Equator and flattened at the poles."},
    {s:"Lines of latitude are all of the same length.", a:"false", why:"They shorten toward the poles; only the Equator is a full Great Circle."}
  ],
  sort:{ title:"Sort these terms", groups:[
    {name:"Lines of latitude", items:["Equator","Tropic of Cancer","Tropic of Capricorn","Arctic Circle"]},
    {name:"Lines of longitude", items:["Prime Meridian","International Date Line","meridians"]},
    {name:"Effects of rotation", items:["day and night","apparent movement of the sun","deflection of winds","daily tides"]},
    {name:"Effects of revolution", items:["the seasons","varying day length","equinoxes","solstices"]},
    {name:"Inner planets", items:["Mercury","Venus","Earth","Mars"]}
  ]},
  mapwork:{ title:"The graticule and the earth's key lines", caption:"Complete the table by stating the position and importance of each line.", items:[
    {p:"Equator", f:"0 degrees latitude; divides the earth into northern and southern hemispheres"},
    {p:"Tropic of Cancer", f:"23.5 degrees north; the northern limit of the overhead sun, reached in June"},
    {p:"Tropic of Capricorn", f:"23.5 degrees south; the southern limit of the overhead sun, reached in December"},
    {p:"Arctic and Antarctic Circles", f:"66.5 degrees north and south; the limits of the midnight sun and polar night"},
    {p:"Prime Meridian", f:"0 degrees longitude through Greenwich; the reference for all longitude and world time"},
    {p:"International Date Line", f:"About 180 degrees; the calendar day changes on crossing it"},
    {p:"Liberia's position", f:"About 4 to 8 degrees north and 7 to 11 degrees west — tropical, and behind Greenwich in time"}
  ]},
  casestudy:{ title:"The trader who missed the call",
    text:"A rubber exporter in Monrovia arranged a telephone conference with a buyer in Singapore. The buyer proposed ten o'clock in the morning, Singapore time, on a Tuesday. The Liberian trader, thinking only of his own clock, wrote down ten o'clock and set his alarm. Singapore lies at about 104 degrees east; Liberia keeps Greenwich Mean Time at 0 degrees. When the trader dialled at ten in the morning Monrovia time, it was already six in the evening in Singapore and the buyer's office had closed. The contract went to a competitor in Abidjan who had made the same calculation correctly.\n\nThe trader now keeps a small card taped to his desk. It reads: 15 degrees equals one hour; east is ahead, west is behind. Beneath it he has written the four cities he deals with most, each with its difference from Monrovia already worked out.",
    questions:[
      {q:"Why was Singapore eight hours ahead of Monrovia?", a:"Singapore is about 104 degrees east while Liberia is at 0 degrees GMT. 104 divided by 15 is roughly 7 hours, and Singapore's official zone is set at 8 hours ahead."},
      {q:"What time in Monrovia should the trader have dialled to reach ten o'clock in Singapore?", a:"Two o'clock in the morning Monrovia time, since Singapore is eight hours ahead."},
      {q:"State the rule the trader wrote on his card and explain each part.", a:"15 degrees equals one hour, because the earth turns 360 degrees in 24 hours; east is ahead because the sun rises there first, and west is behind."},
      {q:"Why does the trader list the differences already worked out rather than the longitudes?", a:"Because the calculation must be right under pressure; a pre-computed difference removes the chance of error at the moment of use."},
      {q:"A place lies at 30 degrees west. Is its local time ahead of or behind Monrovia, and by how much?", a:"Behind, by 2 hours — 30 divided by 15 equals 2, and west is behind."}
    ]},
  project:{ title:"Locating your community on the graticule",
    brief:"Fix the position of your own town and work out its relationship to world time.",
    steps:[
      "Using an atlas, find the latitude and longitude of your town to the nearest degree.",
      "State which hemisphere it lies in and which climatic zone.",
      "Calculate the local sun time difference between your town and Greenwich.",
      "Choose three world cities and calculate the time in each when it is noon in your town.",
      "Present the findings on a sketch map showing your town, the Equator and the Prime Meridian."
    ],
    criteria:["Latitude and longitude correctly found","Hemisphere and zone correctly stated","Time difference from Greenwich correctly calculated","Three cities correctly worked","A clear labelled sketch map"]},
  worked:[
    {q:"How many hours' difference is there between 0 degrees and 45 degrees east?", steps:["1 hour = 15 degrees","45 \u00f7 15"], a:"3 hours ahead"},
    {q:"It is 12:00 noon at Greenwich. What is the local time at 60 degrees west?", steps:["60 \u00f7 15 = 4 hours","West is behind: 12:00 \u2212 4:00"], a:"08:00"},
    {q:"It is 09:00 at Greenwich. What is the local time at 30 degrees east?", steps:["30 \u00f7 15 = 2 hours","East is ahead: 09:00 + 2:00"], a:"11:00"},
    {q:"Town A is at 20 degrees west and Town B at 25 degrees east. Find the time difference.", steps:["Total separation = 20 + 25 = 45 degrees","45 \u00f7 15"], a:"3 hours"},
    {q:"How many minutes of time correspond to 1 degree of longitude?", steps:["60 minutes \u00f7 15 degrees"], a:"4 minutes"},
    {q:"The local time at X is 14:00 and at Greenwich 12:00. Find the longitude of X.", steps:["Difference = 2 hours, ahead so east","2 \u00d7 15"], a:"30 degrees east"},
    {q:"One degree of latitude is about 111 km. Find the distance between 5\u00b0N and 12\u00b0N.", steps:["Difference = 7 degrees","7 \u00d7 111"], a:"About 777 km"},
    {q:"The earth rotates 360 degrees in 24 hours. How many degrees per minute?", steps:["360 \u00f7 24 = 15 per hour","15 \u00f7 60"], a:"0.25 degrees per minute"}
  ],
  apply:[
    {q:"Why does Liberia have roughly twelve hours of daylight throughout the year?", a:"It lies close to the Equator, where the tilt of the axis has least effect, so day and night remain nearly equal in every season."},
    {q:"A pilot flying west across the International Date Line gains a day. Explain.", a:"The Date Line marks where the calendar day changes. Crossing it westward the traveller moves into the next day; crossing eastward he repeats a day."},
    {q:"Why must a surveyor correct a compass bearing before plotting it on a map?", a:"The compass points to magnetic north, but the map is drawn to grid or true north. The magnetic declination must be applied or the plotted line will be wrong."},
    {q:"Explain why the sun appears overhead at the Tropic of Cancer only once a year.", a:"The overhead sun migrates between the two Tropics as the earth revolves. At 23.5 degrees north it reaches its northern limit and turns back, so it is overhead there only at the June solstice."},
    {q:"How would life on earth differ if the axis were not tilted?", a:"There would be no seasons. Every place would have constant day length and a steady temperature regime determined only by latitude."}
  ],
  activities:[
    "Draw the solar system and explain its structure and formation",
    "Demonstrate the moon's rotation and revolution by walking around a chair with one side always facing it",
    "Draw the phases of the moon as it revolves around the earth",
    "Use a flashlight and a football to demonstrate the causes of day and night",
    "Outline the major lines of latitude and longitude on the globe",
    "Use Venn diagrams to identify similarities and differences between lines of latitude and longitude",
    "Practise local time calculations from longitude"
  ],
  materials:[
    "Primary text: General Geography in Diagrams for West Africa (Physical Geography)",
    "Discover A–Z of Geography; WASSCE Q & A Papers 1 and 2",
    "Globe, atlas, flashlight, football, tennis ball",
    "Pictures of the solar system and the moon phases",
    "Chart paper and geometry set"
  ],
  assessment:["Oral questions","Assignments","Quiz","Group presentation","Written test"]
},
{
  grade:10, period:"II", sem:"One", icon:"🪨",
  title:"Structure of the Earth and its Rocks",
  subtitle:"The external spheres, the internal layers, and the three great rock groups",
  outcomes:[
    "Learners are able to discuss the features of the earth's surface",
    "Learners are able to classify rocks and describe how each type is formed"
  ],
  objectives:[
    "Distinguish between the external and internal layers of the earth",
    "Discuss the features of the geologic layers of the earth's surface",
    "Describe the characteristics of the external and internal layers",
    "Classify rocks as igneous, sedimentary and metamorphic",
    "Describe the mode of formation of each rock type and state its economic importance"
  ],
  note:"The earth's <b>external structure</b> comprises four spheres: the <b>atmosphere</b> (air), the <b>hydrosphere</b> (water), the <b>lithosphere</b> (rock) and the <b>biosphere</b> (life). Its <b>internal structure</b> has three layers: the thin <b>crust</b>, the <b>mantle</b>, and the dense <b>core</b>. Rocks fall into three groups: <b>igneous</b> from cooled magma, <b>sedimentary</b> from deposited material, and <b>metamorphic</b> from rock altered by heat and pressure.",
  study:[
    /* ---- course text: Semester One, Period II — The Structure of the Earth and its Rocks (guide pp. 8-9) ---- */
    {k:"h3", t:"The External Structure of the Earth"},
    {k:"p", t:"Externally the earth is a set of spheres. The **atmosphere** is the envelope of gases — chiefly nitrogen and oxygen — that gives the air, the weather and protection from the sun's radiation. The **hydrosphere** is all the water: oceans, seas, rivers, lakes and groundwater. The **biosphere** is the thin layer of life where air, water and land meet. The **lithosphere** is the solid rocky outer layer of the earth. Study the characteristics of each sphere, their importance to living organisms, and the relationship within and among the spheres — the water cycle linking hydrosphere and atmosphere, plants binding lithosphere and biosphere, weathering wearing rock into soil."},
    {k:"rule"},
    {k:"h3", t:"The Internal Structure of the Earth"},
    {k:"p", t:"Internally the earth is divided into layers. The **crust** is the thin outer skin of rock — 5 to 70 km thick — on which we live. The **mantle** beneath it, some 2 900 km thick, is hot, semi-plastic rock whose slow movement drives the drifting continents. The **core**, at the centre, has a liquid outer part and a solid inner part of iron and nickel, and it gives the earth its magnetism. Draw a simplified diagram of the earth's internal and external structure to show the layers, and model the internal structure in clay."},
    {k:"rule"},
    {k:"h3", t:"Rocks and Minerals"},
    {k:"p", t:"A **mineral** is a natural, pure substance with a composition of its own — quartz, feldspar, mica; a **rock** is any natural mass of mineral matter, of one mineral or many. Distinguish the two, then classify rocks by their **mode of formation** into the three great families."},
    {k:"rule"},
    {k:"h3", t:"The Three Types of Rocks"},
    {k:"table", head:["Rock family","Mode of formation","Examples","Chief uses"], rows:[
     ["Igneous","Cooled and hardened from molten magma — plutonic (granite) below, volcanic (basalt, pumice) at the surface","granite, basalt, obsidian, pumice","Building stone, road metal, monuments"],
     ["Sedimentary","Laid down as sediments in water or air, then compressed and cemented — stratified, often fossil-bearing","sandstone, limestone, shale, conglomerate","Building, cement from limestone, fuel from coal"],
     ["Metamorphic","Existing rock changed by heat and pressure into a new form","marble, slate, gneiss, quartzite","Marble for building, slate for roofing"]]},
    {k:"p", t:"The characteristics of a rock are judged by its **texture, structure, colour and permeability** — coarse or fine grains, layered or massive, light or dark, passing water or holding it. Collect different rock samples from the community, classify them by type, and discuss their hardness, colour, mode of formation and uses."},
    {k:"rule"},
    {k:"h3", t:"The Importance of Rocks to Man"},
    {k:"p", t:"Rocks matter to man: they are the parent material of all **soils**; a source of **building stone, road metal and cement**; the store of **mineral wealth** — iron, gold, diamonds and the fuels coal and petroleum, all won from rock; the aquifer that holds underground water; and the scenery and soils on which farming and settlement depend."},
  ],

  focus:[
    "External structure: atmosphere, hydrosphere, biosphere, lithosphere",
    "Characteristics and importance of each sphere",
    "Relationships within and among the spheres",
    "Internal structure: crust, mantle and core",
    "Characteristics of the internal layers",
    "Igneous, sedimentary and metamorphic rocks",
    "Formation, characteristics and economic importance of each rock type",
    "The rock cycle"
  ],
  terms:[
    {t:"atmosphere", d:"the envelope of gases surrounding the earth", x:"The atmosphere makes life possible."},
    {t:"hydrosphere", d:"all the water on and beneath the earth's surface", x:"Oceans form most of the hydrosphere."},
    {t:"lithosphere", d:"the solid rocky outer shell of the earth", x:"The lithosphere includes the crust."},
    {t:"biosphere", d:"the zone of the earth occupied by living things", x:"The biosphere spans land, water and air."},
    {t:"crust", d:"the thin outermost solid layer of the earth", x:"The continental crust is thicker than the oceanic."},
    {t:"mantle", d:"the thick layer of hot rock beneath the crust", x:"Convection in the mantle moves the plates."},
    {t:"core", d:"the dense innermost part of the earth", x:"The core is largely iron and nickel."},
    {t:"sial", d:"the lighter continental crust rich in silica and aluminium", x:"Sial forms the continents."},
    {t:"sima", d:"the denser oceanic crust rich in silica and magnesium", x:"Sima underlies the ocean floors."},
    {t:"igneous rock", d:"rock formed from cooled and solidified magma", x:"Granite is an igneous rock."},
    {t:"sedimentary rock", d:"rock formed from deposited and compacted sediment", x:"Limestone is a sedimentary rock."},
    {t:"metamorphic rock", d:"rock changed by heat and pressure", x:"Marble is metamorphosed limestone."},
    {t:"magma", d:"molten rock beneath the earth's surface", x:"Magma cools slowly to form granite."},
    {t:"lava", d:"molten rock that reaches the surface", x:"Lava cools quickly to form basalt."},
    {t:"stratum", d:"a layer of sedimentary rock", x:"Each stratum records a period of deposition."},
    {t:"fossil", d:"the preserved remains of past life in rock", x:"Fossils occur in sedimentary rock."},
    {t:"mineral", d:"a naturally occurring inorganic substance of fixed composition", x:"Rocks are made of minerals."},
    {t:"rock cycle", d:"the continuous change of rock from one type to another", x:"The rock cycle links all three groups."},
    {t:"intrusive", d:"formed from magma cooling below the surface", x:"Intrusive rock has large crystals."},
    {t:"extrusive", d:"formed from lava cooling at the surface", x:"Extrusive rock has fine crystals."}
  ],
  facts:[
    {q:"Name the four external spheres and state what each consists of.", a:"The atmosphere of gases, the hydrosphere of water, the lithosphere of solid rock, and the biosphere of living organisms."},
    {q:"Name the three internal layers of the earth in order from the surface.", a:"The crust, the mantle and the core."},
    {q:"State two characteristics of the crust.", a:"It is the thinnest layer, from about 5 km beneath the oceans to 70 km beneath mountains; it is solid and consists of lighter sial over denser sima."},
    {q:"State two characteristics of the core.", a:"It is the densest layer, composed mainly of iron and nickel; the outer core is liquid while the inner core is solid, and it generates the earth's magnetic field."},
    {q:"How are igneous rocks formed and what are their characteristics?", a:"By the cooling and solidification of magma or lava. They are crystalline, contain no fossils and occur in no layers. Slow cooling underground gives large crystals as in granite; rapid cooling at the surface gives fine crystals as in basalt."},
    {q:"How are sedimentary rocks formed and how are they recognised?", a:"By the deposition, compaction and cementing of sediments. They occur in layers or strata, are often soft, and may contain fossils — for example limestone, sandstone and shale."},
    {q:"How are metamorphic rocks formed? Give three examples with their parent rocks.", a:"By the alteration of existing rock through great heat and pressure. Limestone becomes marble, clay becomes slate, sandstone becomes quartzite, and granite becomes gneiss."},
    {q:"State the economic importance of rocks with three examples.", a:"Granite is used for building and road stone; limestone for cement and for treating acid soil; and rocks host valuable minerals such as the iron ore, gold and diamonds mined in Liberia."},
    {q:"Explain the rock cycle briefly.", a:"Igneous rock is weathered and eroded into sediment that forms sedimentary rock; heat and pressure change either into metamorphic rock; and deep melting returns rock to magma, which cools again as igneous rock."},
    {q:"State one way in which each sphere depends on another.", a:"Plants of the biosphere need water from the hydrosphere, gases from the atmosphere and soil from the lithosphere; rainfall links atmosphere to hydrosphere; and weathering links atmosphere to lithosphere."}
  ],
  tf:[
    {s:"The crust is the thinnest of the earth's internal layers.", a:"true", why:"It ranges from about 5 km under oceans to 70 km under mountains, far thinner than the mantle or core."},
    {s:"Sedimentary rocks commonly contain fossils.", a:"true", why:"Remains are buried and preserved as the sediments are laid down in layers."},
    {s:"Granite is a sedimentary rock.", a:"false", why:"Granite is igneous, formed from magma cooling slowly beneath the surface."},
    {s:"Marble is formed from limestone by heat and pressure.", a:"true", why:"It is the metamorphic equivalent of limestone."},
    {s:"The core is composed mainly of silica.", a:"false", why:"The core is composed mainly of iron and nickel."},
    {s:"Lava cools more quickly than magma and forms smaller crystals.", a:"true", why:"Cooling at the surface is rapid, giving fine-grained rock such as basalt."},
    {s:"The biosphere exists only on the land surface.", a:"false", why:"It extends through the land, the water and the lower atmosphere."}
  ],
  sort:{ title:"Sort these correctly", groups:[
    {name:"Igneous rocks", items:["granite","basalt","gabbro","pumice"]},
    {name:"Sedimentary rocks", items:["limestone","sandstone","shale","coal"]},
    {name:"Metamorphic rocks", items:["marble","slate","quartzite","gneiss"]},
    {name:"External spheres", items:["atmosphere","hydrosphere","lithosphere","biosphere"]},
    {name:"Internal layers", items:["crust","mantle","core"]}
  ]},
  mapwork:{ title:"A section through the earth", caption:"Complete the table by describing each labelled layer or sphere.", items:[
    {p:"Atmosphere", f:"Envelope of gases; supplies oxygen and carbon dioxide and drives weather"},
    {p:"Hydrosphere", f:"All water — oceans, rivers, lakes and groundwater; about 71 per cent of the surface"},
    {p:"Biosphere", f:"The zone occupied by living things, overlapping the other three spheres"},
    {p:"Crust", f:"Thin solid outer shell, 5\u201370 km thick; light sial above denser sima"},
    {p:"Mantle", f:"Thick layer of hot dense rock about 2 900 km deep; convection here moves the plates"},
    {p:"Outer core", f:"Liquid iron and nickel; its movement generates the magnetic field"},
    {p:"Inner core", f:"Solid iron and nickel under enormous pressure; the hottest and densest part"}
  ]},
  casestudy:{ title:"The quarry at Kakata",
    text:"A quarry outside Kakata supplies crushed stone for road building. The rock is granite: hard, crystalline and without layers. The quarry manager explains that its usefulness comes directly from how it was formed. Magma cooled slowly, deep underground, over a very long period, which allowed large interlocking crystals to grow. Those interlocking crystals are why the stone resists crushing under a loaded truck.\n\nHalf a kilometre away, a second working extracts a soft, pale rock that breaks easily along flat surfaces and contains the shells of small sea creatures. This is limestone, laid down as sediment on an ancient sea floor. It is useless as road stone, but it is burned to make lime for the cement plant and spread on acid farmland to sweeten the soil. The manager tells visiting students that the two rocks lie within sight of each other yet were made in entirely different ways, and that each is valuable for exactly the property the other lacks.",
    questions:[
      {q:"Identify the two rocks and the group each belongs to.", a:"Granite, an igneous rock; and limestone, a sedimentary rock."},
      {q:"Why is granite suitable for road building?", a:"It cooled slowly underground, growing large interlocking crystals that make it hard and resistant to crushing."},
      {q:"What two pieces of evidence show the second rock is sedimentary?", a:"It breaks along flat layers or bedding planes, and it contains fossil shells of sea creatures."},
      {q:"State two uses of limestone mentioned in the passage.", a:"It is burned to make lime for cement, and it is spread on acid farmland to raise the soil pH."},
      {q:"Explain the manager's closing remark in your own words.", a:"Each rock is useful precisely for the property the other lacks — granite for its hardness, limestone for the softness and chemistry that let it be burned and spread."}
    ]},
  project:{ title:"Local rock collection",
    brief:"Collect and classify the rocks of your own locality.",
    steps:[
      "Collect six different rock samples from your area, noting where each was found.",
      "For each, record its colour, hardness, texture and whether it shows layers or crystals.",
      "Classify each as igneous, sedimentary or metamorphic and give your reason.",
      "Note any use to which the rock is put locally.",
      "Display the collection with a written label for each sample."
    ],
    criteria:["Six genuine samples with locations recorded","Physical properties accurately described","Classification given with a stated reason","Local uses identified","Clear, well-labelled display"]},
  worked:[
    {q:"The crust is about 35 km thick and the earth's radius about 6 370 km. What percentage is the crust?", steps:["(35 \u00f7 6 370) \u00d7 100"], a:"About 0.55%"},
    {q:"A rock sample of 250 g displaces 100 cm3 of water. Find its density.", steps:["Density = mass \u00f7 volume","250 \u00f7 100"], a:"2.5 g/cm\u00b3"},
    {q:"Sediment accumulates at 2 mm a year. How deep a layer forms in 5 000 years?", steps:["2 \u00d7 5 000 = 10 000 mm","\u00f7 1 000"], a:"10 metres"},
    {q:"A quarry produces 480 tonnes of stone in 6 days. Find the daily output.", steps:["480 \u00f7 6"], a:"80 tonnes per day"},
    {q:"Water covers about 71% of the earth's surface of 510 million km2. Find the land area.", steps:["Land = 29% of 510m","0.29 \u00d7 510"], a:"About 148 million km\u00b2"},
    {q:"The mantle is about 2 900 km deep and the radius 6 370 km. What fraction of the radius is the mantle?", steps:["2 900 \u00f7 6 370"], a:"About 0.46, or 46%"}
  ],
  apply:[
    {q:"Why are fossils never found in igneous rock?", a:"Igneous rock forms from molten magma at temperatures that would destroy any organic remains, and it is not laid down in layers that could bury them."},
    {q:"A builder needs stone for a foundation and chooses shale. Advise him.", a:"Shale is a soft sedimentary rock that splits easily along its layers and weakens when wet. A hard igneous rock such as granite would bear the load far better."},
    {q:"Explain why Liberia's iron ore deposits are related to its rock structure.", a:"The iron ore occurs in ancient metamorphosed rocks of the crust, where original iron-rich sediments were altered and concentrated by heat and pressure over geological time."},
    {q:"How does the atmosphere help create sedimentary rock?", a:"Rain, wind and temperature change weather and erode existing rock into fragments, which are then transported and deposited as the sediment from which such rock forms."},
    {q:"A farmer's land is acidic. Which rock would help and why?", a:"Limestone. It is calcium carbonate, which is basic and neutralises the excess acid in the soil, and it also supplies calcium as a nutrient."}
  ],
  activities:[
    "Draw a simplified diagram of the earth's internal and external structure showing the layers",
    "Use clay to mould the internal structure of the earth",
    "Field trip to identify rock exposures and layers",
    "Collect and classify rock samples as igneous, sedimentary or metamorphic",
    "Draw and explain the rock cycle"
  ],
  materials:[
    "Primary text: General Geography in Diagrams (Pearson)",
    "Abegunde et al., Senior Secondary Geography Book 1",
    "Rock samples, clay, hand lenses",
    "Charts of the earth's structure and the rock cycle",
    "WASSCE Q & A Papers 1 and 2"
  ],
  assessment:["Oral questions","Assignments","Quiz","Rock collection project","Written test"]
},
{
  grade:10, period:"III", sem:"One", icon:"👥",
  title:"World Population, Settlement and Migration",
  subtitle:"Population distribution and density, census, settlement patterns and the causes of migration",
  outcomes:[
    "Learners are able to explain world population and its distribution patterns",
    "Learners are able to recognise the factors that influence population movements and the importance of family planning and census"
  ],
  objectives:[
    "Discuss the term world population and explain distribution patterns",
    "Distinguish between overpopulation and underpopulation",
    "Explain the factors that influence population movements",
    "Demonstrate the conduct of a population census",
    "Classify settlements by pattern and function",
    "Explain the consequences of migration in source and receiving regions"
  ],
  note:"<b>Population density</b> = total population ÷ land area. <b>Overpopulation</b> means numbers exceed the resources available; <b>underpopulation</b> means too few people to develop the resources; <b>optimum population</b> gives the highest output per head. Settlements are <b>nucleated</b> (clustered), <b>dispersed</b> (scattered) or <b>linear</b> (strung along a route). Migration has <b>push</b> factors driving people out and <b>pull</b> factors drawing them in.",
  study:[
    /* ---- course text: Semester One, Period III — World Population, Settlement and Migration (guide pp. 10-13) ---- */
    {k:"h3", t:"World Population"},
    {k:"p", t:"**World population** is the total number of people living on the earth — now past eight billion and still growing. Its **characteristics**: uneven spread over the globe, rapid growth in the poorer countries, and ageing in the richer ones. The **terms associated with population growth**: birth rate, death rate, fertility rate, natural increase, growth rate, population density, census. The **factors affecting population growth**: the birth rate, the death rate, migration, early marriage, the status of women, health care and education. The **reasons for the rapid growth** of world population: falling death rates through modern medicine, better food and safer water — while birth rates stay high."},
    {k:"rule"},
    {k:"h3", t:"The Pattern of World Population Distribution"},
    {k:"p", t:"The **pattern of world population distribution** divides into the **densely populated areas** — East and South Asia, Western Europe, the Nile valley, the coast of West Africa — where soil, water, climate and jobs favour settlement; the **moderately populated areas**; and the **sparsely populated areas** — the hot deserts, the cold polar lands, the high mountains and the dense equatorial forests — where one or more of those favours is missing. Draw population maps indicating densely and sparsely populated regions."},
    {k:"p", t:"Distinguish **overpopulation**, where the people outnumber the resources to support them well, from **under-population**, where resources wait for want of people. The **advantages of high density**: a large labour force, a wide market, cheaper services; its **disadvantages**: pressure on land, housing, schools and jobs. The **advantages of low density**: room and resources; the **disadvantages**: thin labour, costly services, small markets. List some overpopulated and underpopulated counties and countries."},
    {k:"rule"},
    {k:"h3", t:"Population Control and Family Planning"},
    {k:"p", t:"**Population control** means keeping population growth in step with resources. **Family planning** — spacing and limiting births by choice — and the **empowerment of women**, through education, work and a voice in decisions, are its chief means: where girls stay in school and women can decide, birth rates fall and families prosper. Debate population control in relation to family planning and women's empowerment."},
    {k:"rule"},
    {k:"h3", t:"Settlement: Site, Situation and Classification"},
    {k:"p", t:"A **settlement** is any place where people live. Its **site** is the actual ground it occupies — dry land near water, a river crossing, a hill for defence; its **situation** is its position relative to other places. The factors affecting the **sitting and growth** of settlement: water supply, fertile soil, relief and drainage, transport routes, safety, and resources and trade. Settlements are classified by **type** — **urban** (towns and cities) and **rural** (villages and farm lands); by **pattern** — **nucleated** (clustered), **linear** (strung along a road, river or coast), **dispersed** (scattered) and **isolated**; by **function** — commercial, religious, administrative, industrial, educational, residential; and by **size** — the **city, town, metropolis** and **satellite town**, and at the rural end the **homestead, hamlet and farmstead**. State the reasons for each pattern, and identify the functions of rural and urban settlements and their contributions to mankind."},
    {k:"rule"},
    {k:"h3", t:"Urbanization"},
    {k:"p", t:"**Urbanization** is the growing share of people living in towns. Its **causes**: natural increase in the towns and the influx of migrants seeking jobs, schools and services. Its **problems**: overcrowded housing and slums, unemployment, congestion, crime, pressure on water, power and sanitation, and pollution. Its **solutions**: planning, housing schemes, rural development to slow migration, and decentralisation of jobs and services."},
    {k:"rule"},
    {k:"h3", t:"Migration"},
    {k:"p", t:"**Migration** is the movement of people from one place to settle in another. Its **forms and types**: internal (within a country) — rural to urban; and external (international); permanent or seasonal; voluntary or forced. Its **causes** are the **push factors** — lack of jobs, land and services, insecurity, poor harvests — and the **pull factors** — jobs, education, health care, higher wages, family ties. Its **effects** fall on both ends: at the **source**, lost labour and broken families but remittances sent home; at the **receiving region**, growth of labour and market but pressure on housing and services. Its **controls**: balanced regional development, rural employment and services, and town planning. Outline the consequences of migration for source and receiving regions, and suggest solutions."},
  ],

  focus:[
    "World population: definition, characteristics and size",
    "Factors affecting population growth",
    "Patterns of world distribution: densely, moderately and sparsely populated areas",
    "Advantages and disadvantages of high and low densities",
    "Population census and its importance",
    "Family planning and women's empowerment",
    "Settlement: rural and urban, patterns and functions",
    "Migration: types, causes and consequences at source and destination"
  ],
  terms:[
    {t:"population density", d:"the average number of people per unit area", x:"Density is found by dividing population by area."},
    {t:"population distribution", d:"the way people are spread over an area", x:"Distribution in Liberia is uneven."},
    {t:"overpopulation", d:"population greater than the resources can support", x:"Overpopulation lowers living standards."},
    {t:"underpopulation", d:"population too small to use the resources fully", x:"Underpopulation wastes potential."},
    {t:"optimum population", d:"the number giving the highest output per head", x:"At optimum population resources are best used."},
    {t:"census", d:"the official counting of a country's people", x:"A census guides national planning."},
    {t:"birth rate", d:"live births per thousand people per year", x:"A high birth rate speeds growth."},
    {t:"death rate", d:"deaths per thousand people per year", x:"Better health care lowers the death rate."},
    {t:"natural increase", d:"the excess of births over deaths", x:"Natural increase drives most growth."},
    {t:"migration", d:"the movement of people from one place to another to settle", x:"Migration changes both regions."},
    {t:"emigration", d:"movement out of a country or region", x:"Emigration reduces the labour force."},
    {t:"immigration", d:"movement into a country or region", x:"Immigration adds to the population."},
    {t:"push factor", d:"a condition driving people away from a place", x:"Unemployment is a push factor."},
    {t:"pull factor", d:"a condition attracting people to a place", x:"Jobs are a pull factor."},
    {t:"rural-urban migration", d:"movement from the countryside to towns", x:"Rural-urban migration swells cities."},
    {t:"settlement", d:"a place where people live", x:"A settlement may be rural or urban."},
    {t:"nucleated settlement", d:"a settlement clustered around a central point", x:"A nucleated settlement grows round a market."},
    {t:"dispersed settlement", d:"a settlement of scattered houses", x:"Dispersed settlement suits farming land."},
    {t:"linear settlement", d:"a settlement strung along a road or river", x:"Linear settlement follows the highway."},
    {t:"urbanisation", d:"the growth in the proportion living in towns", x:"Urbanisation is rapid in West Africa."},
    {t:"conurbation", d:"a continuous built-up area formed by merging towns", x:"Greater Monrovia approaches a conurbation."}
  ],
  facts:[
    {q:"How is population density calculated and in what unit is it expressed?", a:"Total population divided by land area, expressed as persons per square kilometre."},
    {q:"State four factors that produce densely populated areas.", a:"Fertile soil and reliable rainfall; level land suitable for building and farming; mineral resources and industry providing employment; and good transport, ports and social services."},
    {q:"State four factors that produce sparsely populated areas.", a:"Very dry desert or very cold climate; rugged mountainous relief; dense forest or swamp with disease; and poor soils or absence of transport and employment."},
    {q:"Distinguish overpopulation, underpopulation and optimum population.", a:"Overpopulation means people exceed what the resources can support, lowering output per head; underpopulation means too few to exploit resources fully; optimum population gives the highest output per head."},
    {q:"State four uses of census data.", a:"Planning schools, clinics and housing; allocating revenue between counties; delimiting electoral constituencies; and providing a basis for economic planning and business decisions."},
    {q:"Name the three types of settlement pattern and one condition favouring each.", a:"Nucleated, clustering round a market, well or crossroads; dispersed, where farmland is spread out; and linear, following a road, river or coastline."},
    {q:"Distinguish push from pull factors and give two examples of each.", a:"Push factors drive people away — unemployment, poor services, war or land shortage. Pull factors attract them — jobs, schools, health care and higher wages."},
    {q:"State three consequences of migration in the receiving region.", a:"A larger labour force and market; pressure on housing, water and services producing slums; and rising unemployment and social tension if jobs are insufficient."},
    {q:"State three consequences of migration in the source region.", a:"Loss of young and able workers reducing farm output; an ageing population left behind; but also remittances sent home and reduced pressure on land."},
    {q:"How do family planning and women's empowerment affect population growth?", a:"They allow families to choose the number and spacing of children. Education and employment for women raise the age of marriage and lower the birth rate, slowing growth."},
    {q:"State three functions a settlement may perform.", a:"Administrative as a county capital; commercial as a market or port; industrial, educational, religious or defensive."}
  ],
  tf:[
    {s:"Population density is found by dividing population by area.", a:"true", why:"It gives the average number of persons per square kilometre."},
    {s:"A large population always means overpopulation.", a:"false", why:"Overpopulation depends on the relation between numbers and resources, not on size alone."},
    {s:"Unemployment in a village is a push factor.", a:"true", why:"It drives people to leave in search of work elsewhere."},
    {s:"Rural-urban migration reduces pressure on urban housing.", a:"false", why:"It increases urban pressure, often producing overcrowding and slums."},
    {s:"A dispersed settlement has houses scattered over a wide area.", a:"true", why:"It contrasts with a nucleated settlement clustered round a central point."},
    {s:"Census data is used to allocate government services.", a:"true", why:"Schools, clinics and revenue are distributed on the basis of population figures."},
    {s:"Emigration increases the labour force of the source region.", a:"false", why:"It removes workers, reducing the labour force there."}
  ],
  sort:{ title:"Sort these population factors", groups:[
    {name:"Encourage dense population", items:["fertile soil","reliable rainfall","mineral wealth","good transport"]},
    {name:"Discourage settlement", items:["desert climate","rugged mountains","dense swamp","poor soils"]},
    {name:"Push factors", items:["unemployment","war","land shortage","poor services"]},
    {name:"Pull factors", items:["jobs","schools","health care","higher wages"]},
    {name:"Settlement patterns", items:["nucleated","dispersed","linear"]}
  ]},
  mapwork:{ title:"Population and settlement in Liberia", caption:"Complete the table by explaining each feature.", items:[
    {p:"Montserrado County", f:"Highest density; Monrovia's employment, port and services attract migrants from all counties"},
    {p:"Coastal belt", f:"Moderately to densely settled; ports, roads, fishing and trade support population"},
    {p:"Interior forest counties", f:"Sparsely settled; dense forest, poor roads and limited services"},
    {p:"Nucleated settlement", f:"Houses clustered around a market, well or crossroads for security and services"},
    {p:"Linear settlement", f:"Houses strung along a highway or river, giving access to transport or water"},
    {p:"Dispersed settlement", f:"Scattered farmsteads where each family lives on its own land"},
    {p:"Rural-urban migration", f:"Young people move to Monrovia for work and schooling, draining rural labour"}
  ]},
  casestudy:{ title:"Two counties, one road",
    text:"When the paved road reached a rural district in 2014, the change was measured within five years. Before the road, the district's main town held about 4 000 people and produce rotted before it could reach a buyer. Journeys to Monrovia took two days in the rains.\n\nAfter the road, three things happened at once. Traders arrived and the weekly market grew to serve eleven villages. A cold store and two guest houses were built, and the town's population rose to about 11 000 by 2019 as families moved in from surrounding hamlets — a shift from dispersed to nucleated settlement. But the same road carried young people the other way. School leavers who once had no means of travelling now reached Monrovia in five hours, and the district's secondary school lost a third of its graduating class to the capital each year.\n\nThe district superintendent describes the road as the best and the worst thing to happen in his lifetime. It doubled the value of the district's produce, and it accelerated the loss of exactly the people needed to build on that value.",
    questions:[
      {q:"State two problems the district faced before the road was built.", a:"Produce rotted before reaching a buyer, and journeys to Monrovia took two days in the rainy season."},
      {q:"Calculate the percentage increase in the town's population between 2014 and 2019.", a:"From 4 000 to 11 000 is an increase of 7 000. (7 000 \u00f7 4 000) \u00d7 100 = 175 per cent."},
      {q:"What change in settlement pattern occurred, and why?", a:"A shift from dispersed to nucleated settlement, as families moved from scattered hamlets into the town to be near the market and services."},
      {q:"Identify the pull factors drawing school leavers to Monrovia.", a:"Employment, further education and the services of the capital — now reachable in five hours rather than two days."},
      {q:"Explain the superintendent's judgement that the road was both the best and worst thing.", a:"It doubled the value of produce and grew the town, but the same improved access accelerated the emigration of educated young people needed to develop the district."}
    ]},
  project:{ title:"Settlement survey of your community",
    brief:"Map and classify the settlement pattern where you live.",
    steps:[
      "Draw a sketch map of your community showing houses, roads and the market or well.",
      "Classify the pattern as nucleated, dispersed or linear and justify your choice.",
      "Identify the functions the settlement performs.",
      "Interview five households about where they came from and why they settled there.",
      "Present the map with your findings and state whether the settlement is growing or declining."
    ],
    criteria:["Accurate sketch map","Pattern correctly classified and justified","Functions identified","Five households genuinely interviewed","A reasoned conclusion about growth"]},
  worked:[
    {q:"A county has 720 000 people in 18 000 km2. Find the population density.", steps:["Density = population \u00f7 area","720 000 \u00f7 18 000"], a:"40 persons per km\u00b2"},
    {q:"There are 90 000 births in a population of 3 000 000. Find the birth rate per thousand.", steps:["(90 000 \u00f7 3 000 000) \u00d7 1 000"], a:"30 per 1 000"},
    {q:"Deaths are 27 000 in the same population. Find the death rate and the natural increase.", steps:["(27 000 \u00f7 3 000 000) \u00d7 1 000 = 9","30 \u2212 9"], a:"Death rate 9; natural increase 21 per 1 000"},
    {q:"A town grows from 4 000 to 11 000. Calculate the percentage increase.", steps:["Increase = 7 000","(7 000 \u00f7 4 000) \u00d7 100"], a:"175%"},
    {q:"5 000 people leave and 1 200 arrive. Find the net migration.", steps:["Net = arrivals \u2212 departures","1 200 \u2212 5 000"], a:"\u22123 800 (a net loss)"},
    {q:"Of 480 000 people, 216 000 are under 15 and 24 000 over 64. Find the dependency ratio.", steps:["Working age = 480 000 \u2212 240 000 = 240 000","Dependants = 240 000","240 000 \u00f7 240 000"], a:"1.0, or 100 dependants per 100 workers"},
    {q:"A population of 2 million grows at 3% a year. How many are added in one year?", steps:["0.03 \u00d7 2 000 000"], a:"60 000 people"}
  ],
  apply:[
    {q:"Why is the population of Liberia concentrated along the coast?", a:"The coast has the ports, roads, industries and services, together with fishing and trade, that provide employment — while the interior has dense forest, poor roads and few services."},
    {q:"A town's density is high but its people are prosperous. Is it overpopulated? Explain.", a:"No. Overpopulation is judged against resources, not density. A dense population with adequate employment, food and services is not overpopulated."},
    {q:"Suggest three measures to slow rural-urban migration.", a:"Improve rural schools and clinics; provide rural employment through agro-processing and feeder roads; and extend electricity and water so village life offers comparable services."},
    {q:"Why might a government be reluctant to publish census results?", a:"Because population figures determine constituencies and the allocation of revenue between counties, so the results carry political consequences that some groups may dispute."},
    {q:"Explain how women's education affects population growth.", a:"Educated women tend to marry later, have fewer and better-spaced children, and take paid employment — all of which lower the birth rate and slow population growth."}
  ],
  activities:[
    "Draw population maps indicating densely and sparsely populated regions",
    "List some overpopulated and underpopulated counties and countries",
    "Hold debates on population control in relation to family planning and women's empowerment",
    "Demonstrate the conduct of a population census in class",
    "Sketch and classify the settlement patterns of the local area",
    "Discuss the consequences of migration at the source and the receiving region"
  ],
  materials:[
    "Primary text: General Geography in Diagrams (Pearson)",
    "Abegunde et al., Senior Secondary Geography Book 1",
    "Atlas, population maps and Liberian census data",
    "Graph paper and calculators",
    "WASSCE Q & A Papers 1 and 2"
  ],
  assessment:["Oral questions","Assignments","Quiz","Settlement survey project","Written test"]
},
{
  grade:10, period:"IV", sem:"Two", icon:"🗺️",
  title:"Map Reading and Map Scales",
  subtitle:"Kinds of maps, the three types of scale, conversion, distance, area and gradient",
  outcomes:[
    "Learners are able to interpret map information and convert scales",
    "Learners are able to design diagrams and determine the positions of places"
  ],
  objectives:[
    "Interpret map information and distinguish kinds of maps",
    "Convert from one scale to another",
    "Reduce, enlarge and calculate areas and ground distances using map scales",
    "Calculate the gradient of slopes",
    "Discover the position of places using the grid system, or latitude and longitude",
    "Determine direction using the compass and bearing"
  ],
  note:"A <b>scale</b> states the relation between map distance and ground distance. It is given three ways: as a <b>representative fraction</b> (1:50 000), as a <b>statement</b> (1 cm to 500 m), or as a <b>linear scale</b> drawn as a bar. <b>Ground distance = map distance × scale denominator</b>. <b>Gradient = vertical rise ÷ horizontal distance</b>, expressed as 1 in n.",
  study:[
    /* ---- course text: Semester Two, Period IV — Map Reading and Map Scales (guide pp. 14-15) ---- */
    {k:"h3", t:"The Map: Definition, Characteristics, Types and Uses"},
    {k:"p", t:"A **map** is a drawing of the whole earth, or a part of it, on a flat surface, drawn to scale from above. Its **characteristics**: it is reduced, it is to scale, it uses conventional signs, and it looks down from above. Its **types** by purpose: **topographical maps** of the physical and human features of an area; **physical or relief maps**; **political maps** of boundaries; **road maps**; **weather maps**; **geological, demographic (population) and land-use maps**; and the **atlas**, a bound collection. Its **importance and uses**: to give information, to locate places and find positions and directions, to identify and interpret landscape, and to find distances and areas. Its **limitations**: it flattens a curved earth, it omits what is too small, it shows one moment in time, and its signs must be learned."},
    {k:"rule"},
    {k:"h3", t:"The Map Scale"},
    {k:"p", t:"The **map scale** is the relationship between a distance on the map and the distance it stands for on the ground. Its three types: the **statement scale** in words — 'one centimetre to one kilometre' — simple to read but useless when the map is enlarged; the **representative fraction (RF)** — 1:50 000 — a ratio that survives enlargement, but demands working; and the **linear (graph) scale**, a printed line divided into kilometres, usable directly on any map but only at its own size. State the advantages and disadvantages of each."},
    {k:"p", t:"The **conversion of map scales** carries one form into another: 1:50 000 means 1 cm = 50 000 cm = 500 m = 0.5 km. Apply the skills to **reduce and enlarge** maps, and to **calculate ground distances** — map distance × ground value of one centimetre — and **areas** by the grid square, remembering that area scales by the square of the linear scale."},
    {k:"rule"},
    {k:"h3", t:"Positions and Directions"},
    {k:"p", t:"Discover the positions of places using the **grid system** of eastings and northings — or by **longitude and latitude** on the globe. Determine directions using the **compass** — the cardinal points and their sixteen intermediate points — and the **bearing**, the angle of a line measured clockwise from north. Draw the prismatic compass and illustrate its direction and bearing."},
    {k:"rule"},
    {k:"h3", t:"Gradient, Diagrams, Profiles and Sketches"},
    {k:"p", t:"The **gradient of a slope** is its steepness, expressed as a ratio of vertical rise to horizontal distance — 1 in 20, say — or as a percentage or an angle. Calculate it from the heights and distances of a map. Design **diagrams, profiles and sketches** resulting from survey exercises: the field sketch drawn from one viewpoint, the annotated map, and the cross-section. Prepare an annotated map using the three types of map scale."},
  ],

  focus:[
    "Definition, characteristics and types of maps",
    "Importance, uses and limitations of maps",
    "Map scale: representative fraction, statement and linear",
    "Advantages and disadvantages of each type of scale",
    "Conversion of map scales",
    "Measuring distance and calculating area",
    "Reduction and enlargement of maps",
    "Gradient of slopes",
    "The grid system, bearings and the prismatic compass"
  ],
  terms:[
    {t:"map", d:"a scaled representation of the earth's surface on a flat sheet", x:"A map shows position, distance and direction."},
    {t:"scale", d:"the ratio of map distance to ground distance", x:"The scale governs how much detail a map can show."},
    {t:"representative fraction", d:"a scale expressed as a ratio such as 1:50 000", x:"The representative fraction has no units."},
    {t:"linear scale", d:"a scale drawn as a divided bar on the map", x:"A linear scale stays correct if the map is enlarged."},
    {t:"statement scale", d:"a scale written in words, such as 1 cm to 1 km", x:"A statement scale is easy to read."},
    {t:"topographical map", d:"a detailed map showing relief and surface features", x:"Topographical maps carry contours."},
    {t:"cadastral map", d:"a large-scale map showing property boundaries", x:"A cadastral map records land ownership."},
    {t:"atlas", d:"a bound collection of maps", x:"An atlas shows countries and continents."},
    {t:"grid reference", d:"a number locating a point on a map grid", x:"A six-figure grid reference fixes a position to 100 m."},
    {t:"easting", d:"a grid line numbered from west to east", x:"Read the easting before the northing."},
    {t:"northing", d:"a grid line numbered from south to north", x:"The northing is the second part of the reference."},
    {t:"bearing", d:"a direction measured in degrees clockwise from north", x:"A bearing of 090 degrees is due east."},
    {t:"gradient", d:"the steepness of a slope as a ratio of rise to distance", x:"A gradient of 1 in 20 is gentle."},
    {t:"contour", d:"a line joining points of equal height", x:"Close contours indicate a steep slope."},
    {t:"conventional sign", d:"an agreed symbol used on maps", x:"A conventional sign marks a church or bridge."},
    {t:"key", d:"the panel explaining a map's symbols", x:"Always read the key first."},
    {t:"enlargement", d:"redrawing a map to a larger scale", x:"Enlargement uses a square grid."},
    {t:"reduction", d:"redrawing a map to a smaller scale", x:"Reduction loses fine detail."},
    {t:"prismatic compass", d:"an instrument for measuring bearings accurately", x:"Sight the object through the prismatic compass."}
  ],
  facts:[
    {q:"State the three ways of expressing a map scale.", a:"As a representative fraction such as 1:50 000; as a statement such as 1 cm to 500 m; and as a linear or bar scale drawn on the map."},
    {q:"Give one advantage and one disadvantage of the linear scale.", a:"Advantage: it enlarges or reduces with the map, so it remains correct after photocopying. Disadvantage: it takes up space and is read less precisely than a fraction."},
    {q:"Convert the representative fraction 1:50 000 to a statement scale in centimetres and kilometres.", a:"1 cm represents 50 000 cm, which is 500 m, or 0.5 km. So 1 cm to 0.5 km, or 2 cm to 1 km."},
    {q:"How is ground distance found from a map?", a:"Measure the distance on the map in centimetres and multiply by the scale denominator, then convert to metres or kilometres."},
    {q:"State four uses of maps.", a:"To give information about an area; to identify and interpret landscape; to find direction and position; and to measure distance and area for planning."},
    {q:"State three limitations of maps.", a:"A flat sheet cannot represent a curved surface without distortion; small scales omit much detail; and a map becomes out of date as the landscape changes."},
    {q:"How is a six-figure grid reference read?", a:"Read the easting first — the vertical grid line to the left of the point, plus tenths across — then the northing, the horizontal line below the point plus tenths up. Eastings before northings."},
    {q:"Define gradient and state how it is calculated.", a:"The steepness of a slope. Gradient equals the vertical rise divided by the horizontal distance, both in the same unit, and is expressed as 1 in n."},
    {q:"Name four types of map and one use of each.", a:"Topographical maps for relief and detail; road maps for travel; cadastral maps for land ownership; atlas and political maps for countries; weather maps for forecasting; geological maps for rock types."},
    {q:"Distinguish a bearing from a compass direction.", a:"A compass direction names a point such as north-east; a bearing gives the angle in degrees clockwise from north, such as 045 degrees, and is far more precise."}
  ],
  tf:[
    {s:"A scale of 1:25 000 is larger than a scale of 1:100 000.", a:"true", why:"The smaller the denominator, the larger the scale and the more detail shown."},
    {s:"A linear scale remains correct when a map is photocopied larger.", a:"true", why:"The bar enlarges with the map, unlike a printed fraction."},
    {s:"Eastings are read after northings in a grid reference.", a:"false", why:"Eastings are always read first."},
    {s:"Contour lines close together indicate a gentle slope.", a:"false", why:"Closely spaced contours indicate a steep slope."},
    {s:"A bearing of 180 degrees is due south.", a:"true", why:"Bearings are measured clockwise from north, so 180 degrees is opposite north."},
    {s:"Maps can show a curved surface without any distortion.", a:"false", why:"Representing a sphere on a flat sheet always introduces some distortion."},
    {s:"On a 1:50 000 map, 2 cm represents 1 km on the ground.", a:"true", why:"1 cm represents 50 000 cm or 0.5 km, so 2 cm represents 1 km."}
  ],
  sort:{ title:"Sort these map items", groups:[
    {name:"Types of scale", items:["representative fraction","statement","linear"]},
    {name:"Kinds of map", items:["topographical","cadastral","road map","weather map"]},
    {name:"Large-scale maps", items:["1:10 000","1:25 000","cadastral plan"]},
    {name:"Small-scale maps", items:["1:1 000 000","atlas map","world map"]},
    {name:"Direction instruments", items:["prismatic compass","protractor","bearing"]}
  ]},
  mapwork:{ title:"Reading a topographical map", caption:"Complete the table by explaining what each element tells you.", items:[
    {p:"Title", f:"Names the area covered and often the sheet number"},
    {p:"Scale", f:"Gives the relation between map and ground distance, so distances can be measured"},
    {p:"Key or legend", f:"Explains the conventional signs used for roads, rivers, buildings and vegetation"},
    {p:"Grid lines", f:"Numbered eastings and northings allowing any point to be given a grid reference"},
    {p:"North arrow", f:"Shows the orientation, distinguishing true, magnetic and grid north"},
    {p:"Contours", f:"Join points of equal height; their spacing shows the steepness of slopes"},
    {p:"Spot height", f:"A dot with a figure giving the exact altitude at that point"},
    {p:"Date of survey", f:"Warns how far the map may now be out of date"}
  ]},
  casestudy:{ title:"The clinic that was built twice",
    text:"A county health team planned a clinic to serve four villages. Using a 1:50 000 map, a planner measured the distance from the proposed site to the furthest village as 9 cm and reported it as 9 kilometres — a comfortable walk of about two hours. The site was approved and the foundation laid.\n\nThe error was found by a student on attachment. On a 1:50 000 map, 1 cm represents 0.5 km, so 9 cm is 4.5 km, not 9. That part was in the clinic's favour. But the same planner had ignored the contours. The map showed nine brown lines between the village and the site, at a 20-metre interval — a climb of 180 metres over the 4.5 km, and the last kilometre crossed contours so close together they almost touched. Women in labour were being asked to cross a ridge.\n\nThe team re-surveyed and moved the site 3 km along the valley, where the route followed the 100-metre contour almost level the whole way. The distance is greater but the journey is shorter in time and possible by motorcycle. The half-built foundation is still there.",
    questions:[
      {q:"What was the planner's first error, and what is the correct distance?", a:"He read 9 cm as 9 km. On a 1:50 000 map 1 cm is 0.5 km, so 9 cm is 4.5 km."},
      {q:"Calculate the total height climbed and explain how it was found.", a:"Nine contour lines at a 20-metre interval gives 9 \u00d7 20 = 180 metres of ascent."},
      {q:"What did closely spaced contours on the last kilometre indicate?", a:"A very steep slope — a ridge that had to be crossed."},
      {q:"Calculate the average gradient over the 4.5 km.", a:"180 m rise over 4 500 m gives 180/4 500 = 1 in 25."},
      {q:"Why is the new site better although it is further away?", a:"The route follows the 100-metre contour almost level, so the journey is quicker, less exhausting and passable by motorcycle."},
      {q:"State the general lesson about reading maps.", a:"Distance alone is not enough: scale must be applied correctly and relief must be read from the contours, since a shorter route may be far harder to travel."}
    ]},
  worked:[
    {q:"On a 1:50 000 map two towns are 8 cm apart. Find the ground distance in km.", steps:["8 \u00d7 50 000 = 400 000 cm","\u00f7 100 000"], a:"4 km"},
    {q:"Convert the scale 1:25 000 to a statement scale.", steps:["1 cm = 25 000 cm","25 000 \u00f7 100 000 km"], a:"1 cm to 0.25 km (4 cm to 1 km)"},
    {q:"A road is 12.5 cm long on a 1:100 000 map. Find its true length.", steps:["12.5 \u00d7 100 000 = 1 250 000 cm","\u00f7 100 000"], a:"12.5 km"},
    {q:"A slope rises 150 m over a horizontal distance of 3 000 m. Find the gradient.", steps:["Gradient = rise \u00f7 distance","150 \u00f7 3 000 = 1/20"], a:"1 in 20"},
    {q:"An area measures 6 cm by 4 cm on a 1:50 000 map. Find the ground area in km2.", steps:["6 cm = 3 km, 4 cm = 2 km","3 \u00d7 2"], a:"6 km\u00b2"},
    {q:"A map at 1:50 000 is enlarged twice. What is the new scale?", steps:["Denominator halves when doubled in size","50 000 \u00f7 2"], a:"1:25 000"},
    {q:"Contours are at 20 m intervals. Seven lines are crossed. Find the height climbed.", steps:["7 \u00d7 20"], a:"140 metres"},
    {q:"A ground distance of 7.5 km is drawn on a 1:25 000 map. How long is the line?", steps:["7.5 km = 750 000 cm","750 000 \u00f7 25 000"], a:"30 cm"}
  ],
  apply:[
    {q:"Why would a 1:1 000 000 map be useless for planning a school playing field?", a:"At that scale 1 cm represents 10 km, so the whole field would be a fraction of a millimetre. A large-scale map such as 1:1 000 is needed for such detail."},
    {q:"A traveller reads a bearing of 045 degrees from the map but walks 045 on his compass and drifts off course. Explain.", a:"The map bearing is to grid or true north but the compass reads magnetic north. The magnetic declination must be applied to convert between them."},
    {q:"Why do engineers prefer a route that follows a contour rather than crossing several?", a:"Following a contour keeps the route level, so it is cheaper to build, easier to travel and needs no heavy earthworks."},
    {q:"A map is dated 1978. State two ways it may now mislead a user.", a:"Roads, bridges and settlements built since then will be missing, and features such as forest cover, river courses or buildings shown may no longer exist."},
    {q:"How could a farmer use a map scale to estimate the area of his land?", a:"Measure the plot's dimensions on the map, convert each to ground distance using the scale, then multiply to obtain the area — or count grid squares and convert."}
  ],
  activities:[
    "Outline and discuss the kinds of map and indicate their features",
    "Draw maps to scale, reduce and enlarge maps, and state the limitations of maps",
    "Draw the prismatic compass and illustrate direction and bearing",
    "Prepare an annotated map using the three types of map scale",
    "Practise scale conversion, distance, area and gradient calculations",
    "Locate positions using the grid system and by latitude and longitude"
  ],
  materials:[
    "Primary text: General Geography in Diagrams (Pearson)",
    "Abegunde et al., Senior Secondary Geography Book 1; Map Reading for West Africa",
    "Atlas, topographical maps, road maps, cadastral maps and geological maps",
    "Ruler, protractor, string, calculator and geometry set",
    "WASSCE Q & A Papers 1 and 2"
  ],
  assessment:["Oral questions","Map exercises","Quiz","Scale calculation exercise","Written test"]
},
{
  grade:10, period:"V", sem:"Two", icon:"♻️",
  title:"Environmental Science: Land, Water, Soils and Hazards",
  subtitle:"Land and water distribution, pollution, the land ecosystem, soils and environmental hazards",
  outcomes:[
    "Learners are able to elaborate on the various forms of land and water masses and their importance to mankind",
    "Learners are able to explain the major environmental hazards resulting from natural and human activities"
  ],
  objectives:[
    "Determine the ratio of land to water and how much land is suitable for agriculture",
    "Identify the various forms of water masses and discuss their importance",
    "Identify sources of land and water pollution and ways of controlling them",
    "Define the land ecosystem and name its components, including the food chain and nitrogen cycle",
    "Classify soils and outline the causes and control of soil erosion",
    "Describe the major environmental hazards, their effects, prevention and control"
  ],
  note:"Water covers about <b>71%</b> of the earth's surface and land about <b>29%</b>. An <b>ecosystem</b> is a community of organisms together with their non-living environment, linked by the <b>food chain</b> and the recycling of nutrients. <b>Soil erosion</b> is the removal of topsoil by water or wind; it is controlled by <b>contour ploughing, terracing, cover cropping</b> and <b>afforestation</b>.",
  study:[
    /* ---- course text: Semester Two, Period V — Environmental Science: Land, Water, Soils and Hazards (guide pp. 16-20) ---- */
    {k:"h3", t:"Land and Water Distribution"},
    {k:"p", t:"Diagram the earth's surface and you find the ratio of **land to water is about 1 : 3** — some 29 % of the globe is land, and 71 % water. The land is gathered into seven **continents** — Africa, Asia, Europe, North America, South America, Australia (Oceania) and Antarctica — with smaller land masses as **islands**. Only a small part of the land is **suitable for agriculture**: much is desert, tundra, mountain or forest. The water forms the **oceans** — Pacific, Atlantic, Indian, Arctic and Southern — the **seas**, the great **rivers** and **lakes**, and drowned river mouths such as **rias**. Name the continents and oceans on the world physical map."},
    {k:"rule"},
    {k:"h3", t:"Vegetation and Mineral Resources"},
    {k:"p", t:"The **vegetation resources** of the land run from the equatorial rainforest through the savannas to the desert and the temperate forests; Liberia's share is rainforest, savanna and mangrove. The **mineral resources** include iron ore, gold, diamonds, bauxite, manganese, copper, coal, petroleum and uranium. **Case study — the mineral resources of Liberia, West Africa and other parts of Africa**: Liberia — iron ore at Nimba and Bong, gold and diamonds; Guinea — bauxite and iron; Sierra Leone — diamonds and rutile; Ghana — gold; Nigeria — petroleum; South Africa — gold, diamonds and coal."},
    {k:"rule"},
    {k:"h3", t:"The Environment"},
    {k:"p", t:"The **environment** is everything around us — living and non-living. Its **types**: the natural environment and the built (human) environment; its **components** are the physical — air, water, land — the biological — plants and animals — and the social — people and their works. Its **domains** are the lithosphere, hydrosphere, atmosphere and biosphere. Its **importance**: it supplies every resource and every service life depends on. Its **problems**: pollution, erosion, deforestation, waste and the destruction of habitat. Discuss each, and the relevance of the atmosphere to living organisms and the challenges it poses."},
    {k:"rule"},
    {k:"h3", t:"Pollution of Land and Water"},
    {k:"p", t:"**Land pollution** — its **sources**: household and market refuse, plastic waste, mining spoils, bush burning, the over-use of agricultural chemicals; its **effects**: spoiled soil, sick animals and people, choked drains; its **prevention and control**: proper refuse collection and burial, recycling, controlled burning, and care with chemicals. **Water pollution** — its **sources**: river contamination by chemicals such as **D.D.T.**, **industrial waste**, sewage, oil spillage and sand winning; its **effects**: disease, dying fish, unsafe drinking water. Its control: treatment of waste before discharge, laws enforced, and safe waste disposal. Identify the sources in your environment and outline the chemicals responsible for the contamination of water and land."},
    {k:"rule"},
    {k:"h3", t:"The Land Ecosystem"},
    {k:"p", t:"The **land ecosystem** is the community of living things together with its soil, water and air. Its **components**: the producers (green plants), the consumers (animals) and the decomposers (bacteria and fungi), with the sun's energy flowing through the **food chain** — grass → grasshopper → frog → snake → hawk — and back into the soil. The **nitrogen cycle** circles that element from the air through the soil, plants and animals and back. **Land reclamation** wins back wasted land — drained swamps, reforested slopes. Name the elements that make up the ecosystem and identify its problems and their solutions."},
    {k:"rule"},
    {k:"h3", t:"Environmental Balance: Soils"},
    {k:"p", t:"**Soil** is the loose upper layer of the land in which plants grow, formed from weathered rock, dead matter, water and air. The **types of soil** by texture — sand, clay, loam and their mixtures — are classified by their characteristics: feel, drainage, water-holding and fertility. The **factors involved in soil formation**: the parent rock, climate, relief, vegetation and living things, and time; its **processes** include **humification**, the turning of dead matter into humus, and **mineralization**, the release of minerals from it. **Soil fertility** is the soil's power to feed plants, kept by humus and the cycling of nutrients and lost by erosion and exhaustive cropping. The **importance of soil**: plant life, the provision of minerals, a source of raw materials, a base for construction, and a habitat for fauna and flora. Draw the soil profile and label its layers, and outline the different soil types in Liberia."},
    {k:"rule"},
    {k:"h3", t:"Environmental Hazards"},
    {k:"p", t:"**Environmental hazards** are events, natural or human, that threaten life and property. Their **types, causes, effects and control**: **soil erosion and depletion**, as water and wind strip the topsoil — controlled by cover, contour banks and trees; **drought**, the failure of rain; **deforestation**, the loss of forest to the axe and the fire; **global warming**, the heating of the atmosphere by greenhouse gases; **desertification**, the spread of desert-like conditions as land degrades — causing loss of farmlands, aridity and change in the pattern of agriculture; and **flooding**, whose causes include heavy **precipitation** and the **melting of ice**, and whose effects are the **displacement of population, loss of life and property** — prevented by drainage, protection of wetlands and careful building. Identify incidents of environmental hazards locally and elsewhere, and propose the ways to avoid or manage them."},
  ],

  focus:[
    "The continents and islands; the ratio of land to water",
    "Water resources: oceans, seas, rivers, lakes and rias",
    "Vegetation and mineral resources; case study of Liberia and West Africa",
    "The environment: definition, types and components",
    "Land and water pollution: sources, effects and control",
    "The land ecosystem: components, food chain, nitrogen cycle and land reclamation",
    "Soils: formation, types, profile and fertility",
    "Soil erosion: causes, effects and control",
    "Environmental hazards: types, effects, prevention and control"
  ],
  terms:[
    {t:"environment", d:"the surroundings in which organisms live", x:"The environment includes air, water, soil and life."},
    {t:"ecosystem", d:"a community of organisms with its physical environment", x:"A forest is an ecosystem."},
    {t:"food chain", d:"the sequence in which energy passes from one organism to another", x:"Grass to goat to leopard is a food chain."},
    {t:"producer", d:"an organism that makes its own food", x:"Green plants are producers."},
    {t:"consumer", d:"an organism feeding on other organisms", x:"A goat is a primary consumer."},
    {t:"decomposer", d:"an organism breaking down dead matter", x:"Bacteria and fungi are decomposers."},
    {t:"nitrogen cycle", d:"the circulation of nitrogen through air, soil and living things", x:"Legumes fix nitrogen in the nitrogen cycle."},
    {t:"pollution", d:"the release of harmful substances into the environment", x:"Mining waste causes water pollution."},
    {t:"pollutant", d:"the harmful substance released", x:"Sewage is a common pollutant."},
    {t:"effluent", d:"liquid waste discharged into water", x:"Untreated effluent poisons rivers."},
    {t:"soil", d:"the loose upper layer of the earth in which plants grow", x:"Soil forms by weathering and decay."},
    {t:"humus", d:"decayed organic matter in soil", x:"Humus improves fertility and water retention."},
    {t:"soil profile", d:"the sequence of soil layers from surface to bedrock", x:"A soil profile shows distinct horizons."},
    {t:"laterite", d:"a red tropical soil rich in iron and aluminium", x:"Laterite hardens when exposed."},
    {t:"soil erosion", d:"the removal of topsoil by water or wind", x:"Erosion strips the most fertile layer."},
    {t:"leaching", d:"the washing of soluble nutrients down through the soil", x:"Heavy rain causes leaching."},
    {t:"deforestation", d:"the clearing of forest cover", x:"Deforestation accelerates erosion."},
    {t:"afforestation", d:"the planting of trees where none grew", x:"Afforestation stabilises slopes."},
    {t:"terracing", d:"cutting level steps across a slope for farming", x:"Terracing slows runoff on hillsides."},
    {t:"contour ploughing", d:"ploughing along the contour rather than up and down", x:"Contour ploughing reduces soil loss."},
    {t:"land reclamation", d:"restoring damaged or flooded land to use", x:"Land reclamation recovers mined areas."},
    {t:"environmental hazard", d:"a natural or human event threatening life and property", x:"Flooding is a common hazard in Monrovia."}
  ],
  facts:[
    {q:"State the approximate ratio of water to land on the earth's surface.", a:"About 71 per cent water to 29 per cent land, roughly a ratio of 7 to 3."},
    {q:"Name four forms of water mass.", a:"Oceans, seas, rivers and lakes; also gulfs, bays, lagoons and rias."},
    {q:"Name four mineral resources of Liberia.", a:"Iron ore, gold, diamonds and bauxite; petroleum has also been explored offshore."},
    {q:"State four sources of water pollution.", a:"Untreated sewage; industrial effluent; mining silt and chemicals; agricultural fertiliser and pesticide runoff; and refuse dumped in waterways."},
    {q:"State four effects of water pollution.", a:"Waterborne disease such as cholera; death of fish and aquatic life; unfit drinking water; and loss of income from fishing and tourism."},
    {q:"Name the four components of a land ecosystem.", a:"Producers such as green plants; consumers, both herbivores and carnivores; decomposers such as bacteria and fungi; and the non-living environment of soil, water, air and sunlight."},
    {q:"Outline the nitrogen cycle briefly.", a:"Atmospheric nitrogen is fixed into the soil by bacteria and lightning; plants absorb nitrates to build protein; animals eat plants; decomposers return nitrogen to the soil from waste and dead matter; and denitrifying bacteria release it back to the air."},
    {q:"State four causes of soil erosion.", a:"Deforestation and removal of vegetation cover; overgrazing; cultivation up and down slopes; heavy rainfall on bare ground; and shifting cultivation with shortened fallow periods."},
    {q:"State four methods of controlling soil erosion.", a:"Contour ploughing and terracing; planting cover crops and windbreaks; afforestation and reforestation; crop rotation; and avoiding cultivation on very steep slopes."},
    {q:"Name four environmental hazards affecting Liberia and one control for each.", a:"Flooding — improve drainage and avoid building on floodplains; coastal erosion — plant mangroves and build sea defences; deforestation — enforce logging rules and replant; and pollution — treat effluent and manage waste."},
    {q:"Distinguish a natural hazard from a human-induced hazard.", a:"A natural hazard arises from physical processes such as flooding, storm or earthquake; a human-induced hazard results from human activity such as pollution, deforestation or badly sited building — though many are a combination of both."}
  ],
  tf:[
    {s:"Water covers about 71 per cent of the earth's surface.", a:"true", why:"Land accounts for the remaining 29 per cent."},
    {s:"Decomposers return nutrients to the soil.", a:"true", why:"They break down dead matter, releasing minerals for plants to reuse."},
    {s:"Contour ploughing increases soil erosion.", a:"false", why:"Ploughing along the contour slows runoff and reduces erosion; ploughing up and down the slope increases it."},
    {s:"Laterite soils are common in tropical Liberia.", a:"true", why:"Heavy rainfall leaches the soil, leaving iron and aluminium oxides that give the red colour."},
    {s:"All environmental hazards are entirely natural.", a:"false", why:"Many are caused or worsened by human activity such as deforestation, pollution or building on floodplains."},
    {s:"Leaching removes soluble nutrients from the topsoil.", a:"true", why:"Heavy rain washes them down beyond the reach of roots."},
    {s:"Mangroves protect the coast from erosion.", a:"true", why:"Their roots bind the sediment and absorb wave energy."}
  ],
  sort:{ title:"Sort these environmental terms", groups:[
    {name:"Water masses", items:["ocean","sea","river","lake"]},
    {name:"Sources of water pollution", items:["sewage","industrial effluent","mining silt","fertiliser runoff"]},
    {name:"Causes of soil erosion", items:["deforestation","overgrazing","ploughing up slopes","heavy rain on bare soil"]},
    {name:"Erosion control", items:["terracing","contour ploughing","cover cropping","afforestation"]},
    {name:"Components of an ecosystem", items:["producers","consumers","decomposers","non-living environment"]}
  ]},
  mapwork:{ title:"A soil profile", caption:"Complete the table by describing each horizon and its importance.", items:[
    {p:"Litter layer", f:"Undecomposed leaves and plant remains lying on the surface"},
    {p:"Topsoil (A horizon)", f:"Dark, rich in humus and organisms; where most roots grow and fertility lies"},
    {p:"Subsoil (B horizon)", f:"Lighter, less humus; receives minerals leached from above"},
    {p:"Weathered rock (C horizon)", f:"Partly broken parent rock fragments"},
    {p:"Bedrock", f:"Solid unweathered parent rock from which the soil was formed"},
    {p:"Effect of erosion", f:"Removes the A horizon first, destroying the most fertile layer"},
    {p:"Effect of leaching", f:"Washes nutrients from the A horizon down into the B horizon, beyond root reach"}
  ]},
  casestudy:{ title:"The gully at Duport Road",
    text:"In 2011 a footpath ran down a gentle slope behind a school at Duport Road. Ten years later a gully four metres deep cuts the same line, and two houses have been abandoned at its head.\n\nThe sequence is well documented because a geography teacher photographed it each year. First, the trees on the upper slope were cut for charcoal and the ground left bare. Rain that had formerly been intercepted by leaves and held by roots now struck the soil directly and ran off. The footpath, being compacted and slightly lower than the ground beside it, channelled that runoff. Each rainy season the channel deepened; the deeper it became, the faster the water ran within it, and the faster it ran the more it cut. By 2016 a small car could have been hidden in it.\n\nThe school has now planted elephant grass along both lips of the gully and built three check dams of sandbags across its floor. Sediment is collecting behind the dams and grass has taken hold on the lower slopes. The teacher tells his classes the gully cost nothing to make and will cost a great deal to heal, and that the same is true of most environmental damage.",
    questions:[
      {q:"What was the first human action that began the process?", a:"The trees on the upper slope were cut for charcoal, leaving the ground bare."},
      {q:"Explain how removing the trees increased runoff.", a:"Leaves no longer intercepted the rain and roots no longer held the soil or absorbed water, so rain struck the bare ground directly and flowed off the surface."},
      {q:"Why did the erosion accelerate once a channel had formed?", a:"A deeper channel concentrates the water and increases its speed, and faster water cuts more soil — so the process feeds itself."},
      {q:"Name the two control measures used and explain how each works.", a:"Elephant grass along the lips binds the soil with its roots and slows water entering the gully; check dams of sandbags across the floor slow the flow and trap sediment, allowing the bed to build up."},
      {q:"Explain the teacher's closing remark.", a:"Destroying vegetation is quick and costs nothing, but repairing the resulting erosion requires years of work and expense — prevention is far cheaper than cure."}
    ]},
  project:{ title:"Environmental survey of your area",
    brief:"Identify and assess one environmental problem in your community.",
    steps:[
      "Walk your community and identify one clear environmental problem: erosion, waste, flooding or pollution.",
      "Record its extent with measurements, sketches or a count.",
      "Interview three residents about when it began and what caused it.",
      "Identify the human activities contributing to it.",
      "Propose two practical, affordable control measures and present your findings."
    ],
    criteria:["A real problem genuinely surveyed","Extent recorded with evidence","Three residents interviewed","Human causes correctly identified","Two affordable and practical remedies"]},
  worked:[
    {q:"The earth's surface is 510 million km2 and 71% is water. Find the land area.", steps:["Land = 29% of 510m","0.29 \u00d7 510"], a:"About 148 million km\u00b2"},
    {q:"A gully is 60 m long, 4 m deep and averages 3 m wide. Find the volume of soil lost.", steps:["V = l \u00d7 w \u00d7 d","60 \u00d7 3 \u00d7 4"], a:"720 m\u00b3"},
    {q:"If that soil was lost over 10 years, find the average annual loss.", steps:["720 \u00f7 10"], a:"72 m\u00b3 per year"},
    {q:"A river carries 0.8 kg of silt per m3 and flows at 500 m3 per hour. Find the silt load per hour.", steps:["0.8 \u00d7 500"], a:"400 kg per hour"},
    {q:"A farm of 12 hectares loses 15 tonnes of soil a year. Find the loss per hectare.", steps:["15 \u00f7 12"], a:"1.25 tonnes per hectare"},
    {q:"Forest cover falls from 45% to 36% of a county. Find the percentage point loss and the relative loss.", steps:["Points: 45 \u2212 36 = 9","(9 \u00f7 45) \u00d7 100"], a:"9 percentage points; a 20% relative loss"},
    {q:"A town of 60 000 produces 0.4 kg of refuse per person daily. Find the daily total in tonnes.", steps:["60 000 \u00d7 0.4 = 24 000 kg","\u00f7 1 000"], a:"24 tonnes per day"}
  ],
  apply:[
    {q:"Why does building on a floodplain increase flood damage?", a:"The floodplain is the river's natural overflow area. Building there places property in the path of floodwater and the hard surfaces reduce infiltration, increasing runoff elsewhere."},
    {q:"Explain why removing mangroves worsens coastal erosion.", a:"Mangrove roots bind the sediment and absorb wave energy. Without them the waves reach the shore at full force and carry the loose material away."},
    {q:"A farmer clears and burns a slope every year. Predict the outcome over ten years.", a:"Repeated burning destroys humus and leaves the soil bare in the rains, so the topsoil is progressively eroded. Yields fall, gullies form and eventually the land becomes unproductive."},
    {q:"How does planting legumes improve soil fertility?", a:"Legumes carry nitrogen-fixing bacteria in their root nodules, which convert atmospheric nitrogen into nitrates that enrich the soil for later crops."},
    {q:"Suggest three cheap measures a school could take to reduce erosion on its compound.", a:"Plant grass or elephant grass on bare slopes; dig contour drains to lead water away safely; and place stones or sandbags as check dams in any channel that has begun to form."}
  ],
  activities:[
    "Group work identifying sources of land and water pollution in the environment",
    "Group discussion and presentation on ways of controlling land and water pollution",
    "Outline the chemicals responsible for the contamination of water and land",
    "Define the land ecosystem and name its components and elements",
    "Draw the nitrogen cycle and the food chain",
    "Field trip to identify areas affected by environmental hazards",
    "Examine and describe a local soil profile"
  ],
  materials:[
    "Primary text: General Geography in Diagrams (Pearson)",
    "Abegunde et al., Senior Secondary Geography Book 1",
    "Soil samples, spade, hand lens and measuring tape",
    "Charts of the nitrogen cycle, food chains and soil profiles",
    "WASSCE Q & A Papers 1 and 2"
  ],
  assessment:["Oral questions","Assignments","Quiz","Field trip report","Written test"]
},
{
  grade:10, period:"VI", sem:"Two", icon:"⛰️",
  title:"Landforms and the Earth's Spheres",
  subtitle:"Mountains, plateaus and plains; the hydrosphere, lithosphere and biosphere in detail",
  outcomes:[
    "Learners are able to classify landforms and relate the formation of mountains, plateaus and plains",
    "Learners are able to describe the hydrosphere, lithosphere and biosphere and their importance"
  ],
  objectives:[
    "Describe landforms and classify them in relation to structure",
    "State the importance of landforms",
    "Summarise the formation of mountains, plateaus and plains",
    "Describe the four types of mountain and their economic importance",
    "Explain the hydrosphere and the water cycle",
    "Describe the lithosphere and the biosphere and their importance to life"
  ],
  note:"Four types of <b>mountain</b> are recognised: <b>fold</b> mountains formed by compression of sediments; <b>block</b> mountains formed between faults; <b>volcanic</b> mountains built from erupted material; and <b>residual</b> mountains left by erosion of surrounding land. A <b>plateau</b> is an extensive elevated area of relatively level land; a <b>plain</b> is a large area of low, level land.",
  study:[
    /* ---- course text: Semester Two, Period VI — Landforms and the Earth's Spheres (guide pp. 21-26) ---- */
    {k:"h3", t:"Introduction to Landforms"},
    {k:"p", t:"A **landform** is any natural feature of the earth's surface. The great families are the **mountains**, the **plateaus** and the **plains**. Classify landforms in relation to structure, and state their importance: plains for farming and settlement, plateaus for minerals and pasture, mountains for water, timber and tourism."},
    {k:"rule"},
    {k:"h3", t:"Mountains: the Four Types"},
    {k:"table", head:["Type of mountain","Mode of formation","Examples"], rows:[
     ["Fold mountains","Formed where the earth's crust is compressed and the strata folded upward along geosynclines","The Himalayas, the Alps, the Atlas, the ridge and valley of Bong"],
     ["Volcanic mountains","Built from lava, ash and cinder poured out at a vent","Mount Cameroon, Kilimanjaro, Vesuvius"],
     ["Block mountains (horsts)","Formed when the crust is faulted and blocks pushed up between down-faulted troughs","The Ruwenzori, the Vosges, the Black Forest"],
     ["Residual mountains","The worn stumps of old mountains, left standing after long erosion by water, wind and ice","The Scottish Highlands, the Sierras of Liberia's interior"]]},
    {k:"p", t:"State the characteristics and formation of each of the four types, diagram them, and weigh their **economic importance**: forests, water for hydro-power, minerals, grazing on the high slopes, and tourism — against the disadvantages: isolation, difficult transport, thin soils and cold. Summarise the formation of mountains, plateaus and plains, and note that a **plateau** is a raised tableland (dissected, intermontane or volcanic) and a **plain** a broad lowland, built by deposition or worn down by erosion, each with its own advantages and disadvantages."},
    {k:"rule"},
    {k:"h3", t:"The Hydrosphere and the Water Cycle"},
    {k:"p", t:"The **hydrosphere** is all the water of the earth — **oceans, seas, rivers and lakes**, with swamps and underground water. Its importance to life: drinking water, food, transport, power, irrigation and industry. The **water cycle** is the endless circulation of that water: the sun evaporates it from sea and land, **condensation** forms cloud, **precipitation** returns it as rain, and the run-off — overland flow and through streams — carries it back to the sea. Analyse and diagram the cycle; let an ice block in a beaker and a heated iron with a wet towel demonstrate evaporation and condensation."},
    {k:"rule"},
    {k:"h3", t:"The Lithosphere (Crust)"},
    {k:"p", t:"The **lithosphere** is the land block of the earth — the crust and the rigid upper mantle. Its **composition**: the land blocks, that is the **continents**, and internally the **sial**, the lighter silica-alumina rock of the continents above, and the **sima**, the denser silica-magnesia rock beneath. Draw the map of the continents and a diagram of the internal and external composition of the lithosphere, compare it with the other natural features of the earth, and state its importance to life — the soil, the minerals, the platform of all settlement."},
    {k:"rule"},
    {k:"h3", t:"The Biosphere"},
    {k:"p", t:"The **biosphere** is the life layer of the earth — the narrow zone where air, water and land support life. Its **composition** runs from the **forests**, **swamps** and **deserts** to grassland, rivers and sea. The **biochores** are the great life regions — forest, savanna, desert, tundra — each with its plant and animal communities. Its importance: food, medicine, timber, fuel, the regulation of climate and the protection of soil. Distinguish the **aquatic bio cycle** (life in water) from the **terrestrial bio cycle** (life on land), draw both with the other layers of the earth, and draw the Venn diagram that shows the biosphere as the meeting of atmosphere, hydrosphere and lithosphere."},
  ],

  focus:[
    "Landforms: definition and classification",
    "Mountains: fold, block, volcanic and residual",
    "Characteristics, formation and economic importance of each",
    "Advantages and disadvantages of mountains",
    "Plateaus: types, formation and importance",
    "Plains: types, formation and importance",
    "The hydrosphere and the water cycle",
    "The lithosphere (crust) and its features",
    "The biosphere and its importance"
  ],
  terms:[
    {t:"landform", d:"a natural feature of the earth's surface", x:"Mountains and plains are landforms."},
    {t:"fold mountain", d:"a mountain formed by the compression and folding of sediments", x:"The Atlas Mountains are fold mountains."},
    {t:"block mountain", d:"an upstanding block bounded by faults", x:"A block mountain has steep straight sides."},
    {t:"volcanic mountain", d:"a mountain built from erupted lava and ash", x:"Mount Cameroon is a volcanic mountain."},
    {t:"residual mountain", d:"a mountain left standing after surrounding land is eroded", x:"Mount Nimba is largely residual."},
    {t:"plateau", d:"an extensive elevated area of fairly level land", x:"A plateau often ends in a steep scarp."},
    {t:"plain", d:"a large area of low, level or gently rolling land", x:"Coastal plains suit farming and settlement."},
    {t:"escarpment", d:"a steep slope at the edge of a plateau", x:"The escarpment marks the plateau's edge."},
    {t:"relief", d:"the shape and height of the land surface", x:"Contours show relief on a map."},
    {t:"altitude", d:"the height of a place above sea level", x:"Altitude lowers temperature."},
    {t:"hydrosphere", d:"all the water of the earth", x:"The hydrosphere includes oceans and groundwater."},
    {t:"water cycle", d:"the continuous circulation of water between earth and atmosphere", x:"Evaporation begins the water cycle."},
    {t:"evaporation", d:"the change of water into vapour", x:"Evaporation is greatest over warm oceans."},
    {t:"condensation", d:"the change of vapour into liquid water", x:"Condensation forms clouds."},
    {t:"precipitation", d:"water falling from the atmosphere as rain, hail or snow", x:"Precipitation returns water to the surface."},
    {t:"infiltration", d:"the movement of water into the soil", x:"Infiltration recharges groundwater."},
    {t:"run-off", d:"water flowing over the surface to rivers", x:"Bare ground increases run-off."},
    {t:"biosphere", d:"the zone of the earth where life exists", x:"The biosphere spans land, sea and air."},
    {t:"habitat", d:"the natural home of an organism", x:"The forest is a habitat for many species."},
    {t:"biodiversity", d:"the variety of living things in an area", x:"Rainforests have high biodiversity."}
  ],
  facts:[
    {q:"Name the four types of mountain and state how each is formed.", a:"Fold mountains by the compression and buckling of sedimentary layers; block mountains by uplift between two faults or subsidence on either side; volcanic mountains by the accumulation of lava and ash; and residual mountains by the erosion of surrounding softer land."},
    {q:"State four economic uses of mountains.", a:"They attract rainfall and are the source of rivers; they provide hydroelectric power sites; they hold minerals, forests and grazing; they attract tourism; and they can serve as natural boundaries and defence."},
    {q:"State three disadvantages of mountainous country.", a:"Steep slopes hinder farming and building; roads and railways are costly and difficult; and settlements are isolated with poor access to services."},
    {q:"Define a plateau and state two ways one may be formed.", a:"An extensive elevated area of fairly level land. It may be formed by the uplift of a block of the crust, by successive lava flows building a level surface, or by long erosion of an upland."},
    {q:"State three economic uses of plains.", a:"They provide the best farmland; they are easiest for building settlements, roads and railways; and they support dense population and industry."},
    {q:"Name the processes of the water cycle in order.", a:"Evaporation and transpiration, condensation, precipitation, then run-off and infiltration returning water to rivers, groundwater and the sea."},
    {q:"State three ways the hydrosphere is important to man.", a:"It provides drinking water and water for agriculture and industry; it supports fisheries and transport; and it moderates climate and drives the water cycle."},
    {q:"What is the lithosphere and what does it provide?", a:"The solid rocky outer shell including the crust. It provides the soil in which crops grow, the minerals mined for industry, and the foundation on which all settlement rests."},
    {q:"Why is the biosphere important, and what threatens it?", a:"It contains all living things and supplies food, timber, medicine and oxygen. It is threatened by deforestation, pollution, over-hunting and the destruction of habitats."},
    {q:"Explain how altitude affects temperature and settlement.", a:"Temperature falls about 6.5 degrees Celsius per 1 000 metres of ascent, so highlands are cooler. This can be an advantage in the tropics, but very high land is too cold and steep for dense settlement."}
  ],
  tf:[
    {s:"Fold mountains are formed by the compression of sedimentary layers.", a:"true", why:"Lateral pressure buckles the strata into folds."},
    {s:"A plateau is an area of low, level land.", a:"false", why:"A plateau is elevated; a plain is low and level."},
    {s:"Mountains are often the source of rivers.", a:"true", why:"They force air to rise, causing rainfall, which feeds streams flowing down the slopes."},
    {s:"Evaporation returns water from the atmosphere to the ground.", a:"false", why:"Evaporation lifts water into the atmosphere; precipitation returns it."},
    {s:"Residual mountains are formed by volcanic eruption.", a:"false", why:"They are what remains after the surrounding softer land has been eroded away."},
    {s:"Plains generally support denser populations than mountains.", a:"true", why:"Level land is easier to farm, build on and travel across."},
    {s:"The biosphere overlaps the other three spheres.", a:"true", why:"Life exists in the soil and rock, in the water and in the lower atmosphere."}
  ],
  sort:{ title:"Sort these landform features", groups:[
    {name:"Types of mountain", items:["fold","block","volcanic","residual"]},
    {name:"Processes of the water cycle", items:["evaporation","condensation","precipitation","infiltration"]},
    {name:"Advantages of mountains", items:["source of rivers","hydroelectric sites","minerals","tourism"]},
    {name:"Advantages of plains", items:["good farmland","easy transport","easy building","dense settlement"]},
    {name:"The four spheres", items:["atmosphere","hydrosphere","lithosphere","biosphere"]}
  ]},
  mapwork:{ title:"Landforms and their formation", caption:"Complete the table by describing the formation and an example of each.", items:[
    {p:"Fold mountain", f:"Sedimentary layers compressed and buckled by plate collision; the Atlas Mountains"},
    {p:"Block mountain", f:"A block uplifted between faults, or land subsiding on either side; steep straight sides"},
    {p:"Volcanic mountain", f:"Built by successive eruptions of lava and ash around a vent; Mount Cameroon"},
    {p:"Residual mountain", f:"Resistant rock left standing as softer surrounding land is eroded; Mount Nimba"},
    {p:"Plateau", f:"Extensive elevated level land formed by uplift, lava flows or long erosion"},
    {p:"Coastal plain", f:"Low level land along the sea, built of deposited sediment; supports dense settlement"},
    {p:"Escarpment", f:"The steep slope forming the edge of a plateau"}
  ]},
  casestudy:{ title:"Why the town is where it is",
    text:"Ganta stands where it does for reasons written in the landscape. To the north the ground rises steadily toward the Nimba range, a line of resistant residual mountains that has survived while the softer rock around it was worn away over immense periods. Those mountains hold the iron ore that built the railway, and they force the moist south-westerly air to rise, cool and shed its rain — which is why the streams flowing down to the town run all year.\n\nSouth of the town the land flattens into a gently rolling plain. It is on this plain that the farms lie, because ploughing a slope in a region of two-metre annual rainfall invites the topsoil to leave. The town itself sits at the junction: close enough to the hills for reliable water, and on level enough ground to build and to farm.\n\nEvery long-established settlement can be read in this way. Ask why a town is where it is, and the answer is usually written in the relief, the drainage and the soil, long before anybody drew a map.",
    questions:[
      {q:"What type of mountains are the Nimba range, and how were they formed?", a:"Residual mountains — resistant rock left standing after the softer surrounding land was eroded away."},
      {q:"Explain how the mountains cause rainfall.", a:"They force the moist south-westerly air to rise; as it rises it cools, the vapour condenses and rain falls — relief rainfall."},
      {q:"Why do the streams run all year?", a:"Because the mountains attract reliable rainfall throughout the year, keeping the streams supplied."},
      {q:"Why are the farms on the plain rather than on the slopes?", a:"With two metres of annual rainfall, cultivating a slope would cause the topsoil to be washed away; the level plain holds its soil."},
      {q:"Summarise the three geographical advantages of Ganta's site.", a:"Reliable water from the hill streams; level ground for building and farming; and nearby mineral wealth that brought the railway and trade."},
      {q:"Explain the writer's general point in the last paragraph.", a:"The location of old settlements is determined by physical geography — relief, water and soil — which explains the site long before any planning or map-making."}
    ]},
  project:{ title:"Landform map of your district",
    brief:"Identify and describe the landforms around your community.",
    steps:[
      "Sketch the skyline and general relief of your district from a high point.",
      "Identify any hills, plateaus, valleys or plains and mark them on a sketch map.",
      "For each landform, suggest how it may have been formed.",
      "Record how each is used: farming, quarrying, settlement or forest.",
      "Present the map and explain how relief has influenced where people live."
    ],
    criteria:["Sketch drawn from genuine observation","Landforms correctly identified","A reasonable account of formation","Land use recorded","A clear link drawn between relief and settlement"]},
  worked:[
    {q:"Temperature falls 6.5\u00b0C per 1 000 m. If sea level is 27\u00b0C, find the temperature at 1 400 m.", steps:["Fall = (1 400 \u00f7 1 000) \u00d7 6.5 = 9.1","27 \u2212 9.1"], a:"About 17.9\u00b0C"},
    {q:"A mountain rises from 200 m to 1 750 m. Find its relative height.", steps:["1 750 \u2212 200"], a:"1 550 metres"},
    {q:"A plateau covers 45 km by 32 km. Find its area.", steps:["45 \u00d7 32"], a:"1 440 km\u00b2"},
    {q:"A slope rises 400 m over 8 km. Express the gradient.", steps:["8 km = 8 000 m","400 \u00f7 8 000 = 1/20"], a:"1 in 20"},
    {q:"A river basin of 250 km2 receives 1 800 mm of rain a year. Find the total volume in m3.", steps:["250 km\u00b2 = 250 000 000 m\u00b2","1 800 mm = 1.8 m","250 000 000 \u00d7 1.8"], a:"450 million m\u00b3"},
    {q:"If 30% of that rainfall becomes run-off, find the run-off volume.", steps:["0.30 \u00d7 450 million"], a:"135 million m\u00b3"}
  ],
  apply:[
    {q:"Why are highland areas in the tropics often more densely settled than the lowlands?", a:"Altitude lowers the temperature, giving a cooler and healthier climate with fewer mosquitoes, and highland soils formed on volcanic rock are often fertile."},
    {q:"Explain why hydroelectric stations are sited in mountainous areas.", a:"Mountains provide both the reliable rainfall to feed rivers and the steep gradient needed to give falling water the energy to drive turbines."},
    {q:"A road must cross a plateau edge. What difficulty does the escarpment present?", a:"The escarpment is a steep slope, so the road must climb sharply or zigzag, requiring costly cutting, embankment and maintenance against landslides."},
    {q:"How would large-scale deforestation of a mountain affect the town below?", a:"Rain would no longer be intercepted, so run-off and erosion would increase, causing flash floods and silting of rivers, while dry-season stream flow would fall."},
    {q:"Why do most of Liberia's large settlements lie on the coastal plain?", a:"The plain offers level land for building and farming, access to ports and fishing, and easier road construction than the forested interior uplands."}
  ],
  activities:[
    "Diagram the four types of mountain",
    "Group discussion on the importance of the four types of mountain",
    "Field trip to a hill or mountain to show base and peak and compare mountain, plateau and plain",
    "Illustrate fold mountain formation by compressing the two sides of a sheet of paper",
    "Illustrate the water cycle through drawing",
    "Discuss the biosphere and list the habitats found locally"
  ],
  materials:[
    "Primary text: General Geography in Diagrams (Pearson)",
    "Abegunde et al., Senior Secondary Geography Book 1",
    "Charts of landforms and the water cycle",
    "Atlas and relief maps of Liberia and Africa",
    "WASSCE Q & A Papers 1 and 2"
  ],
  assessment:["Oral questions","Assignments","Quiz","Field trip report","Written test"]
},

/* ================================ GRADE 11 ================================ */
{
  grade:11, period:"I", sem:"One", icon:"🌋",
  title:"Internal and External Forces Shaping Landforms",
  subtitle:"Plate tectonics, folding and faulting, vulcanicity, weathering, mass wasting and the work of rivers, wind and waves",
  outcomes:[
    "Learners are able to describe faulting and folding and demonstrate knowledge of the internal geomorphic forces moulding landforms",
    "Learners are able to explain the external processes that modify landforms"
  ],
  objectives:[
    "Discuss faulting and folding as forces that produce landforms",
    "Explain plate tectonics and the theory of continental drift and analyse its proofs",
    "Describe vulcanicity and the landforms it produces",
    "Distinguish weathering from erosion and describe the types of each",
    "Explain mass wasting and the factors affecting it",
    "Describe the landforms produced by running water, wind and waves"
  ],
  note:"<b>Internal (endogenic)</b> forces build up the land — folding, faulting and vulcanicity. <b>External (exogenic)</b> forces wear it down — weathering, erosion, transport and deposition, together called <b>denudation</b>. <b>Weathering</b> is the breakdown of rock in place; <b>erosion</b> also removes the material. The evidence for <b>continental drift</b> includes the jigsaw fit of coastlines and matching rocks and fossils across oceans.",
  study:[
    /* ---- course text: Semester One, Period I — Internal and External Forces Shaping Landforms (guide pp. 27-32) ---- */
    {k:"h3", t:"Plate Tectonics"},
    {k:"p", t:"**Plate tectonics** is the theory that the earth's lithosphere is broken into great **plates** that ride slowly on the mantle. The plates are of two kinds: the **oceanic plates**, thinner and denser, and the **continental plates**, thicker and lighter. The **plate boundaries**: **constructive** boundaries where plates pull apart and new crust is made; **destructive** boundaries where an oceanic plate dives beneath another and is consumed; and **conservative** boundaries where plates grind past one another. The **effects of plate tectonics**: earthquakes, volcanic eruptions, fold mountains, ocean trenches and island arcs — and the slow drift of the continents themselves."},
    {k:"rule"},
    {k:"h3", t:"The Theory of Continental Drift"},
    {k:"p", t:"The **theory of continental drift** states that the continents were once joined in one great landmass — **Pangaea** — which broke apart and the pieces drifted to their present positions. Its **evidence or proofs**: the **fit of the coastlines** of South America and Africa across the Atlantic; matching **rock** types and mountain chains on opposite shores; matching **mineral** deposits and fossils of the same plants and animals; and the traces of ancient glaciation found on continents now in the tropics. Trace the continents, cut them out, and join them together to prove the theory."},
    {k:"rule"},
    {k:"h3", t:"Faulting and Folding (Diastrophism)"},
    {k:"p", t:"**Diastrophism** is the movement of the crust that moulds landforms. **Folding** bends the strata by lateral compression: the **simple (symmetrical) fold**, the **asymmetrical fold** with one limb steeper, the **overturned and recumbent folds** pushed flat, and the overfold, with anticlines up and synclines down. **Faulting** fractures the strata and moves the blocks: the **normal fault**, where the hanging wall slips down under tension; the **reverse (thrust) fault**, where it is pushed up under compression; and the **tear (wrench) fault**, where the blocks slide past each other sideways. Differentiate faulting from folding in relation to land formation — folding bends, faulting breaks — and identify the landforms each produces: fold mountains, the rift valleys and block mountains of faulting, with the tilted horsts and grabens between. Compress a face towel to illustrate folding and stretch a rubber band to demonstrate faulting."},
    {k:"rule"},
    {k:"h3", t:"Vulcanicity"},
    {k:"p", t:"**Vulcanicity** is all the movement of magma and gas from within the earth to or near the surface. Its **terms**: magma, lava, vent, crater, caldera, fissure. Its **causes**: the pressure and heat of the interior, the release of pressure at weak zones and plate boundaries, and the gases that drive the magma up."},
    {k:"p", t:"Its **intrusive features**, formed where magma cools below ground — **batholiths**, the great granite masses; **dykes**, walls of rock cutting across the strata; **sills**, sheets forced between the strata; **laccoliths**, mushroom-shaped masses that dome the rock above; and **geysers**, fountains of boiling water and steam from the ground. Its **extrusive features**, formed where matter reaches the surface — the **composite cone** of alternate lava and ash, the **ash and cinder cone** of loose fragments, the **lava plateau** and **lava plain** spread from fissures, and the **crater** and enlarged **caldera** at the vent. Draw diagrams indicating the formation of these volcanic features; a shaken bottle of coke opened in class demonstrates the eruption."},
    {k:"rule"},
    {k:"h3", t:"The Effects of Vulcanicity and Earthquakes"},
    {k:"p", t:"The **effects of vulcanicity** cut both ways: destruction by eruption, ash, lava flow and mud — and benefit as **tourist attractions**, **mineral deposits**, **fertile soils** on weathered ash and lava, and **geothermal power**. An **earthquake** is the shaking of the ground when the crust suddenly moves; its effects are **loss of life, displacement of people and destruction of property**, with fire, landslides and sea waves following. Identify the regions affected by volcanic eruption and earthquake, and weigh the economic importance of earthquake and volcanic landforms."},
    {k:"rule"},
    {k:"h3", t:"Weathering and Mass Wasting"},
    {k:"p", t:"**Denudation** is the general wearing away of the land — weathering, erosion, transport and deposition are its sequence. **Weathering** is the breakdown of rock where it lies; the factors affecting it are climate, rock type, vegetation and time. Its types: **physical weathering** — by temperature change, frost, salt and wetting-and-drying; **biological weathering** — by roots, burrowing animals and human works; and **chemical weathering** — by solution, carbonation, oxidation and hydration. Its effects: the rotting of rock into soil, the shaping of cliffs and tors."},
    {k:"p", t:"**Mass wasting (mass movement)** is the downward movement of rock and soil under gravity alone. The factors affecting it: slope, water, the nature of the material, vegetation and shock. Its types range from the slow **soil creep** and **solifluction** to the rapid **landslide, rockfall, mudflow** and **avalanche**; its effects: buried farms and roads, silted rivers, loss of life. Observe soil creep, landslide and rockfall on a field trip, and consider how vegetation and drainage hold the slope."},
    {k:"rule"},
    {k:"h3", t:"The Action of Running Water, Winds and Waves"},
    {k:"p", t:"**Rivers** — the factors affecting the velocity of a river: gradient, volume, shape and roughness of the channel. The development of the **river valley** and its long profile through the upper, middle and lower course; the **processes of river erosion** — hydraulic action, abrasion (corrasion), attrition and solution; the **processes of river transportation** — traction, saltation, suspension and solution. The **landforms produced by river erosion** — the V-shaped valley, gorge, waterfall, potholes and meander cliffs; **by river deposition** — flood plain, levees, meanders and ox-bow lakes, deltas. The **importance of rivers**: water supply, transport, power, irrigation, fishing and fertile alluvial soils. Illustrate the river profile by diagrams."},
    {k:"p", t:"**Winds** — the characteristics of the desert: aridity, great temperature range, sparse vegetation and sandy or rocky ground; the types of desert landscape — the rocky (hamada), stony (reg) and sandy (erg) deserts. The **processes of wind erosion** — deflation, abrasion and attrition; of **wind transportation** — saltation, suspension and creep, as wind is the agent where water is absent. The **landforms of wind erosion** — mushroom (rock) pedestals, zeugen, yardangs, rock basins and deflation hollows; **of wind deposition** — sand dunes, barchans, seif dunes and loess. Identify the different types of desert landscape and the features the wind carves from them."},
    {k:"p", t:"**Waves** — the development of waves from wind over the sea; the **processes of wave erosion** — hydraulic action, corrasion, attrition and solution; of **wave transportation** — the longshore drift that carries material along the coast. The **landforms of wave erosion** — cliffs, wave-cut platforms, caves, arches, stacks and stumps; **of wave deposition** — beaches, spits, bars and mud flats. The **types of coast**: the **submergence coastline**, drowned by rising sea level, with rias and fjords; and the **emergence coastline**, lifted from the sea, with raised beaches and cliffs. Identify the different types of coastline in Africa, and adopt means of minimising river, wind and wave erosion."},
  ],

  focus:[
    "Plate tectonics: oceanic and continental plates, plate boundaries and effects",
    "Continental drift: the theory and its proofs",
    "Types of folding and faulting and the landforms produced",
    "Vulcanicity: volcanoes, their types and features; intrusive and extrusive forms",
    "Weathering: physical, chemical and biological",
    "Mass wasting: types and the factors affecting it",
    "Action of running water: river erosion, transport and deposition landforms",
    "Action of wind: erosion and deposition landforms",
    "Action of waves: coastal erosion and deposition landforms"
  ],
  terms:[
    {t:"plate tectonics", d:"the theory that the crust consists of moving plates", x:"Plate tectonics explains earthquakes and volcanoes."},
    {t:"continental drift", d:"the theory that continents have moved over geological time", x:"Wegener proposed continental drift."},
    {t:"Pangaea", d:"the single supercontinent that later split apart", x:"Pangaea broke up about 200 million years ago."},
    {t:"folding", d:"the bending of rock layers under lateral compression", x:"Folding produces fold mountains."},
    {t:"anticline", d:"an upfold or arch in folded rock", x:"An anticline arches upward."},
    {t:"syncline", d:"a downfold or trough in folded rock", x:"A syncline dips downward."},
    {t:"faulting", d:"the fracture and displacement of rock", x:"Faulting produces block mountains and rift valleys."},
    {t:"rift valley", d:"a long trough formed by land sinking between two faults", x:"The East African Rift Valley is the largest."},
    {t:"horst", d:"a block uplifted between two faults", x:"A horst stands above the surrounding land."},
    {t:"vulcanicity", d:"all processes by which magma moves into or onto the crust", x:"Vulcanicity builds volcanoes."},
    {t:"volcano", d:"an opening through which lava and gases erupt", x:"An active volcano may erupt at any time."},
    {t:"crater", d:"the bowl-shaped hollow at a volcano's summit", x:"A crater lake may fill the hollow."},
    {t:"caldera", d:"a very large crater formed by collapse", x:"A caldera may be several kilometres wide."},
    {t:"weathering", d:"the breakdown of rock in place without removal", x:"Weathering prepares rock for erosion."},
    {t:"erosion", d:"the wearing away and removal of rock material", x:"Rivers, wind and waves cause erosion."},
    {t:"denudation", d:"the wearing down of the land by weathering and erosion", x:"Denudation lowers the landscape."},
    {t:"mass wasting", d:"the downslope movement of rock and soil under gravity", x:"Landslides are rapid mass wasting."},
    {t:"meander", d:"a bend in the course of a river", x:"Meanders develop on flat land."},
    {t:"oxbow lake", d:"a curved lake left when a meander is cut off", x:"An oxbow lake marks a former channel."},
    {t:"delta", d:"a fan of deposited sediment at a river mouth", x:"A delta forms where a river meets still water."},
    {t:"barchan", d:"a crescent-shaped sand dune", x:"A barchan moves slowly downwind."},
    {t:"longshore drift", d:"the movement of material along a coast by waves", x:"Longshore drift builds spits."},
    {t:"spit", d:"a ridge of sand projecting into the sea", x:"A spit grows in the direction of drift."}
  ],
  facts:[
    {q:"State four proofs of the theory of continental drift.", a:"The jigsaw fit of the coastlines of South America and Africa; matching rock types and mountain chains across the Atlantic; identical fossils of land species on separated continents; and matching glacial deposits in now-tropical regions."},
    {q:"Name the three types of plate boundary and the features each produces.", a:"Divergent boundaries where plates move apart, producing mid-ocean ridges and rift valleys; convergent boundaries where they collide, producing fold mountains, trenches and volcanoes; and transform boundaries where they slide past, producing earthquakes."},
    {q:"Distinguish folding from faulting.", a:"Folding is the bending of rock layers under lateral compression, producing anticlines and synclines. Faulting is the fracture of rock with displacement along the break, producing block mountains and rift valleys."},
    {q:"Name three landforms produced by faulting.", a:"Block mountains or horsts, rift valleys or graben, and fault scarps."},
    {q:"Name three extrusive and two intrusive volcanic features.", a:"Extrusive: volcanic cones, lava plateaus and crater lakes. Intrusive: batholiths, dykes, sills and laccoliths."},
    {q:"Distinguish physical from chemical weathering, with an example of each.", a:"Physical weathering breaks rock into fragments without altering its composition, as by temperature change causing exfoliation. Chemical weathering alters the rock's composition, as when rainwater dissolves limestone."},
    {q:"Name four types of mass wasting.", a:"Soil creep, which is very slow; earthflow and mudflow; landslide and rockfall, which are rapid; and slumping."},
    {q:"State four factors affecting mass wasting.", a:"The steepness of the slope; the amount of water in the soil; the nature and structure of the rock; the presence or absence of vegetation; and human activity such as road cutting."},
    {q:"Name three landforms of river erosion and three of river deposition.", a:"Erosion: V-shaped valleys, waterfalls, gorges and potholes. Deposition: flood plains, levees, deltas and alluvial fans."},
    {q:"Name two landforms of wind erosion and two of wind deposition.", a:"Erosion: deflation hollows and mushroom rocks or zeugen. Deposition: barchan and seif dunes, and loess deposits."},
    {q:"Name three landforms of wave erosion and two of wave deposition.", a:"Erosion: cliffs, wave-cut platforms, caves, arches and stacks. Deposition: beaches, spits and bars."},
    {q:"Explain how a waterfall retreats upstream over time.", a:"Water plunging over the fall erodes a plunge pool and undercuts the soft rock beneath the hard cap. The overhang eventually collapses, and the fall retreats upstream leaving a gorge."}
  ],
  tf:[
    {s:"Folding is caused by lateral compression of rock layers.", a:"true", why:"Compression buckles the strata into anticlines and synclines."},
    {s:"Weathering involves the removal of rock material.", a:"false", why:"Weathering breaks rock down in place; erosion removes it."},
    {s:"A rift valley forms where land sinks between two faults.", a:"true", why:"The central block subsides while the sides remain, forming a trough."},
    {s:"Deltas are landforms of river erosion.", a:"false", why:"Deltas are formed by deposition where a river meets still water."},
    {s:"Longshore drift moves material along the coast.", a:"true", why:"Waves striking the shore at an angle carry sediment sideways along the beach."},
    {s:"Vegetation increases the rate of mass wasting.", a:"false", why:"Roots bind the soil and reduce water saturation, so vegetation slows mass wasting."},
    {s:"Matching fossils on separated continents support continental drift.", a:"true", why:"Identical land species could not have crossed an ocean, so the continents must once have been joined."}
  ],
  sort:{ title:"Sort these processes and landforms", groups:[
    {name:"Internal forces", items:["folding","faulting","vulcanicity","earthquakes"]},
    {name:"External forces", items:["weathering","erosion","transport","deposition"]},
    {name:"River erosion landforms", items:["V-shaped valley","waterfall","gorge","pothole"]},
    {name:"River deposition landforms", items:["flood plain","levee","delta","alluvial fan"]},
    {name:"Coastal erosion landforms", items:["cliff","cave","arch","stack"]},
    {name:"Wind deposition landforms", items:["barchan dune","seif dune","loess"]}
  ]},
  mapwork:{ title:"Stages of a river and their landforms", caption:"Complete the table by describing the channel and typical landforms at each stage.", items:[
    {p:"Youthful (upper) stage", f:"Steep gradient, fast flow, vertical erosion; V-shaped valleys, waterfalls, rapids and gorges"},
    {p:"Mature (middle) stage", f:"Gentler gradient, lateral erosion begins; wider valley, meanders start to develop"},
    {p:"Old (lower) stage", f:"Very gentle gradient, deposition dominates; flood plains, levees, oxbow lakes and deltas"},
    {p:"Waterfall", f:"Hard rock over soft; undercutting causes collapse and upstream retreat, leaving a gorge"},
    {p:"Meander", f:"Erosion on the outer bank, deposition on the inner, so the bend migrates sideways"},
    {p:"Oxbow lake", f:"A meander neck is cut through in flood, leaving the loop isolated as a curved lake"},
    {p:"Delta", f:"Sediment deposited where the river meets still water and loses its speed"}
  ]},
  casestudy:{ title:"The road that kept sliding",
    text:"A section of highway cut into a hillside in a high-rainfall district failed three times in six years. Each failure came in August, at the height of the rains, and each time the same forty-metre stretch slid onto the carriageway.\n\nAn engineer's report identified four causes acting together. The cut had been made almost vertical to save money on excavation, leaving a slope far steeper than the material could hold. The rock was deeply weathered — chemical weathering in the hot, wet climate had rotted the granite to a soft clay-rich material for several metres down. The bush above the cut had been cleared, removing the roots that bound the soil. And no drain had been dug along the top of the cut, so rainwater soaked directly into the loosened material, adding weight and acting as a lubricant.\n\nThe repair addressed all four. The slope was cut back to a gentler angle and stepped in benches; a concrete drain was built along the crest to divert water; the benches were planted with vetiver grass; and weep holes were driven into the face to release water pressure. The stretch has now stood through five rainy seasons.",
    questions:[
      {q:"Which process had rotted the granite, and why was the climate significant?", a:"Chemical weathering. The hot, wet tropical climate greatly accelerates chemical reactions, rotting the rock to a clay-rich material several metres deep."},
      {q:"List the four causes of the failure identified by the engineer.", a:"An over-steep cut; deeply weathered rock; removal of vegetation above the cut; and no drainage, so water soaked into the slope."},
      {q:"Explain how water contributed to the movement.", a:"It added weight to the material and acted as a lubricant between particles, reducing friction so the mass could slide."},
      {q:"Why does the failure occur in August rather than in the dry season?", a:"August is the height of the rains, when the slope is most saturated and the water's weight and lubricating effect are greatest."},
      {q:"Match each of the four repairs to the cause it addresses.", a:"Cutting back and benching reduces the over-steep angle; the crest drain removes the water; vetiver grass replaces the binding roots; and weep holes relieve the water pressure within the weathered material."},
      {q:"What type of mass wasting is described?", a:"A landslide or slump — a relatively rapid downslope movement of rock and soil under gravity, triggered by saturation."}
    ]},
  project:{ title:"Weathering and erosion survey",
    brief:"Find and record evidence of weathering and erosion in your locality.",
    steps:[
      "Locate three sites showing weathering or erosion: a rock outcrop, a river bank, a road cut or a gully.",
      "At each, sketch what you see and measure what you can.",
      "Identify the process at work and classify it as physical or chemical weathering, or as erosion.",
      "Note any human activity that has speeded the process.",
      "Recommend one control measure for the worst site and present your findings."
    ],
    criteria:["Three genuine sites recorded","Accurate sketches with measurements","Processes correctly identified and classified","Human influence noted","A practical control measure proposed"]},
  worked:[
    {q:"Two plates move apart at 3 cm a year. How far do they separate in 5 million years?", steps:["3 \u00d7 5 000 000 = 15 000 000 cm","\u00f7 100 000"], a:"150 km"},
    {q:"A waterfall retreats 0.4 m a year. How long to cut a gorge 800 m long?", steps:["800 \u00f7 0.4"], a:"2 000 years"},
    {q:"A river erodes 12 000 tonnes of sediment yearly from a 400 km2 basin. Find the loss per km2.", steps:["12 000 \u00f7 400"], a:"30 tonnes per km\u00b2"},
    {q:"A cliff retreats 0.6 m a year. How much land is lost from a 500 m frontage in 20 years?", steps:["Retreat = 0.6 \u00d7 20 = 12 m","Area = 500 \u00d7 12"], a:"6 000 m\u00b2"},
    {q:"A slope of 40 m height fails over a 60 m length and 5 m depth. Find the volume moved.", steps:["V = 40 \u00d7 60 \u00d7 5"], a:"12 000 m\u00b3"},
    {q:"A dune advances 8 m a year. How long before it reaches a village 1.2 km away?", steps:["1 200 \u00f7 8"], a:"150 years"},
    {q:"A river's gradient falls 240 m over 30 km. Express the average gradient.", steps:["30 km = 30 000 m","240 \u00f7 30 000 = 1/125"], a:"1 in 125"}
  ],
  apply:[
    {q:"Why is chemical weathering more rapid in Liberia than in a desert?", a:"Chemical reactions require water and are accelerated by heat. Liberia's high rainfall and constant high temperatures provide both; a desert lacks the moisture."},
    {q:"Explain why a village built on the outside bank of a meander is at risk.", a:"The current is fastest on the outer bank, where it erodes the channel sideways. The bend migrates toward the village and will undercut it."},
    {q:"How does building a dam affect a delta downstream?", a:"The dam traps sediment in its reservoir, so less reaches the mouth. Deposition slows while wave erosion continues, and the delta begins to retreat."},
    {q:"Why are volcanic soils often very fertile?", a:"Weathered volcanic ash and lava release abundant mineral nutrients such as potassium and phosphorus, producing deep, rich soils."},
    {q:"A contractor plans a vertical cut through weathered rock in a wet district. Advise him.", a:"Cut the slope back to a gentler angle with benches, install drainage at the crest and weep holes in the face, and plant the benches — otherwise saturation will cause failure in the rains."}
  ],
  activities:[
    "Field trips to observe various landforms in Liberia and sketch what is seen",
    "Mould clay to illustrate vertical and lateral earth movements",
    "Stretch rubber bands to demonstrate faulting and compress a face towel to illustrate folding",
    "Trace continents, cut them out and fit them together to test the theory of continental drift",
    "Shake and open a bottle of carbonated drink to illustrate volcanic eruption",
    "Draw the landforms produced by rivers, wind and waves"
  ],
  materials:[
    "Primary text: General Geography in Diagrams (Pearson)",
    "Abegunde et al., Senior Secondary Geography Book 1",
    "Clay, rubber bands, towels, tracing paper and scissors",
    "Charts of plate boundaries, volcanoes and river landforms",
    "WASSCE Q & A Papers 1 and 2"
  ],
  assessment:["Oral questions","Assignments","Quiz","Field trip report","Written test"]
},
{
  grade:11, period:"II", sem:"One", icon:"💧",
  title:"The Hydrological Cycle, Groundwater and the Atmosphere",
  subtitle:"Underground water and limestone features, the structure of the atmosphere, and atmospheric pressure",
  outcomes:[
    "Learners appreciate the importance of underground water to man",
    "Learners are able to describe the atmosphere and explain atmospheric pressure and its effects"
  ],
  objectives:[
    "Describe the processes of the hydrological cycle and explain its importance",
    "Define underground water and explain the terms associated with it",
    "Discuss the mode of formation of surface and underground limestone features",
    "Describe the structure and composition of the atmosphere",
    "Explain atmospheric pressure, its measurement and its distribution",
    "Discuss air pollution in Liberia and its control"
  ],
  note:"Rain reaching the ground either runs off, evaporates, or <b>infiltrates</b> to become <b>groundwater</b>. It descends until it meets impermeable rock, filling the pores of the rock above in the <b>zone of saturation</b>, whose upper surface is the <b>water table</b>. Where the water table meets the surface a <b>spring</b> emerges. <b>Atmospheric pressure</b> is measured by a <b>barometer</b> and falls with altitude.",
  study:[
    /* ---- course text: Semester One, Period II — The Hydrological Cycle, Groundwater and the Atmosphere (guide pp. 33-35) ---- */
    {k:"h3", t:"The Hydrological Cycle"},
    {k:"p", t:"The **hydrological cycle** is the continuous movement of water between sea, air and land: **evaporation** lifts water into the air as vapour, **condensation** turns it to cloud, **precipitation** returns it as rain, and the **terms associated with the cycle** describe its paths over the land — **overland flow** across the surface, **infiltration** into the soil, **throughflow** through it, **percolation** down to the rocks, and the run-off of streams back to the sea. Its **importance**: it renews every source of fresh water, drives the weather, and links the spheres. Illustrate the hydrological cycle through drawing."},
    {k:"rule"},
    {k:"h3", t:"Underground Water"},
    {k:"p", t:"**Groundwater (underground water)** is the water held in the pores and joints of rock beneath the surface. Its terms: the **zone of permanent saturation** (the phreatic zone), below the **water table** — the level above which the rock is unsaturated; **aquifers**, the permeable rocks that hold the water; **springs**, where the water table meets the ground; **wells and boreholes** sunk to reach it; and the **artesian basin**, a synclinal aquifer whose water rises under its own pressure. Conduct an experiment to practicalise the water table, and collect samples to distinguish permeable from impermeable rocks."},
    {k:"p", t:"Where groundwater works on limestone it dissolves the rock and forms the **karst** features — dry valleys, sink holes and caverns — with the **stalactites** hanging from the roof, the **stalagmites** rising from the floor, and the **pillars** where the two meet. Discuss the mode of formation of these surface and underground limestone features, and state the importance of underground water: wells and boreholes for towns and farms, dry-season river flow, and mineral springs."},
    {k:"rule"},
    {k:"h3", t:"The Atmosphere"},
    {k:"p", t:"The **atmosphere** is the blanket of gases surrounding the earth. Its **composition**: chiefly **nitrogen** (about 78 %) and **oxygen** (about 21 %), with argon, carbon dioxide, water vapour and dust. Its **layers**, upward from the ground: the **troposphere**, where our weather happens; the **stratosphere**, holding the ozone that shields us; the **mesosphere**; the **thermosphere**; and the thin **exosphere** beyond. Its importance: the air we breathe, the shield against radiation and meteors, the water it carries, the gases plants use, and the blanket that keeps the earth's temperature even. Draw the atmosphere showing the different layers, list its composition and layers on poster sheets, and note the problems it faces — above all atmospheric pollution — with their solutions."},
    {k:"rule"},
    {k:"h3", t:"Atmospheric Pressure and Winds"},
    {k:"p", t:"**Atmospheric pressure** is the weight of the air pressing on the earth, measured by the **barometer** — draw one and explain its usage. Unequal heating sets the air moving: the great **pressure belts** — the equatorial low (doldrums), the sub-tropical highs, the temperate lows and the polar highs — with **zones of convergence** where air rises and **divergence** where it sinks. The **planetary wind system** follows: the trade winds, the westerlies and the polar easterlies. **Deflection of winds**: by Ferrel's law the winds bend right in the northern hemisphere and left in the southern. Nearer the ground come the **land and sea breezes** — the sea breeze by day, the land breeze by night — and the **warm and cold air** and **currents** with the **shape of the coastline** guide the winds ashore. Outline the types of wind on the basis of temperature variation."},
    {k:"rule"},
    {k:"h3", t:"Air Pollution"},
    {k:"p", t:"**Air pollution** is the fouling of the air by harmful substances. Its **causes**: exhaust and generator fumes, bush and waste burning, dust from unpaved roads, smoke from industry and charcoal fires, and chemicals sprayed in farms. Its **effects**: breathing diseases, acid rain, damaged crops and the warming of the climate. Its **control**: cleaner fuels, enforced emission laws, waste collection, paved roads, and tree planting. **Case study — air pollution in Liberia**: the dust and fumes of Monrovia's traffic, charcoal burning, waste burning at dump sites and flare gases; research its causes and impacts and report."},
  ],

  focus:[
    "The hydrological cycle: overland flow, infiltration, throughflow, evaporation and condensation",
    "Importance of the hydrological cycle",
    "Groundwater: the zone of saturation, water table, springs, wells and artesian basins",
    "Importance of underground water",
    "Limestone features: stalactites, stalagmites, pillars, caves and swallow holes",
    "The atmosphere: composition and layers",
    "Importance of the atmosphere",
    "Atmospheric pressure: measurement, distribution and effect on winds",
    "Air pollution in Liberia: sources, effects and control"
  ],
  terms:[
    {t:"hydrological cycle", d:"the continuous circulation of water between earth, air and sea", x:"The hydrological cycle has no beginning or end."},
    {t:"evaporation", d:"the change of liquid water to vapour", x:"Evaporation is greatest over warm oceans."},
    {t:"transpiration", d:"the loss of water vapour from plant leaves", x:"Forests return much water by transpiration."},
    {t:"condensation", d:"the change of vapour into liquid droplets", x:"Condensation forms cloud and dew."},
    {t:"infiltration", d:"the entry of water into the soil", x:"Infiltration recharges groundwater."},
    {t:"throughflow", d:"the lateral movement of water through the soil", x:"Throughflow feeds streams slowly."},
    {t:"overland flow", d:"water running across the surface to a channel", x:"Overland flow increases on bare ground."},
    {t:"groundwater", d:"water held in the pores and cracks of rock underground", x:"Wells tap the groundwater."},
    {t:"water table", d:"the upper surface of the zone of saturation", x:"The water table rises in the rainy season."},
    {t:"zone of saturation", d:"the region where all rock pores are filled with water", x:"A well must reach the zone of saturation."},
    {t:"aquifer", d:"a rock layer that holds and transmits water", x:"Sandstone makes a good aquifer."},
    {t:"permeable", d:"allowing water to pass through", x:"Sandstone is permeable."},
    {t:"impermeable", d:"not allowing water to pass through", x:"Clay is impermeable."},
    {t:"spring", d:"a natural flow of groundwater at the surface", x:"A spring emerges where the water table meets the slope."},
    {t:"artesian basin", d:"a structure where water rises under its own pressure", x:"An artesian well needs no pump."},
    {t:"stalactite", d:"a calcite column growing down from a cave roof", x:"A stalactite forms drop by drop."},
    {t:"stalagmite", d:"a calcite column growing up from a cave floor", x:"A stalagmite may meet a stalactite to form a pillar."},
    {t:"atmosphere", d:"the layer of gases surrounding the earth", x:"The atmosphere protects and warms the earth."},
    {t:"troposphere", d:"the lowest layer of the atmosphere, where weather occurs", x:"All weather happens in the troposphere."},
    {t:"stratosphere", d:"the layer above the troposphere containing the ozone layer", x:"The stratosphere absorbs ultraviolet radiation."},
    {t:"atmospheric pressure", d:"the weight of the air pressing on a unit area", x:"Atmospheric pressure falls with altitude."},
    {t:"barometer", d:"an instrument measuring atmospheric pressure", x:"A falling barometer warns of a storm."},
    {t:"isobar", d:"a line joining places of equal pressure", x:"Close isobars indicate strong winds."}
  ],
  facts:[
    {q:"Name the main processes of the hydrological cycle.", a:"Evaporation and transpiration; condensation; precipitation; and the return by overland flow, throughflow, infiltration and groundwater movement to rivers and the sea."},
    {q:"State three reasons the hydrological cycle is important.", a:"It renews the fresh water supply for drinking, farming and industry; it distributes heat around the globe; and it sustains rivers, soils and all terrestrial life."},
    {q:"Define the water table and state how it varies.", a:"The upper surface of the zone of saturation. It rises during the rains as water infiltrates and falls in the dry season as water drains away and is drawn off."},
    {q:"Distinguish permeable from impermeable rock and give an example of each.", a:"Permeable rock allows water to pass through it, as sandstone and limestone do; impermeable rock does not, as clay and granite do not."},
    {q:"Explain how a spring is formed.", a:"Where a permeable layer overlies an impermeable one, water moving down through the permeable rock is halted and flows sideways, emerging at the surface where the junction outcrops on a hillside."},
    {q:"Explain how an artesian basin works.", a:"A permeable layer lies between two impermeable layers in a basin shape. Water enters at the raised rim and is held under pressure, so a well sunk into the middle allows it to rise without pumping."},
    {q:"How are stalactites and stalagmites formed?", a:"Rainwater containing carbon dioxide dissolves limestone. In a cave the water drips from the roof, loses carbon dioxide and deposits calcite — building a stalactite downward from the roof and a stalagmite upward from the floor where the drops land."},
    {q:"State four uses of underground water.", a:"Drinking water from wells and boreholes; irrigation for farming; industrial supply; and the maintenance of river flow in the dry season."},
    {q:"Name the four gases of the atmosphere with their approximate proportions.", a:"Nitrogen about 78 per cent, oxygen about 21 per cent, argon about 0.9 per cent, and carbon dioxide about 0.04 per cent, plus water vapour and dust."},
    {q:"Name the layers of the atmosphere in order from the surface.", a:"Troposphere, stratosphere, mesosphere, thermosphere and exosphere."},
    {q:"Why does atmospheric pressure fall with altitude?", a:"Pressure is the weight of the air above. The higher one goes, the less air remains above, and the air is also less dense, so the pressure is lower."},
    {q:"State three sources of air pollution in Liberia and one control for each.", a:"Vehicle exhaust — enforce emission standards and maintain vehicles; open burning of refuse — provide collection and landfill; and generator and industrial smoke — require filters and cleaner fuel; dust from unpaved roads can be reduced by surfacing."}
  ],
  tf:[
    {s:"Clay is a permeable rock.", a:"false", why:"Clay is impermeable; it does not allow water to pass through."},
    {s:"The water table rises during the rainy season.", a:"true", why:"Infiltration adds water faster than it drains away."},
    {s:"All weather occurs in the troposphere.", a:"true", why:"It contains almost all the water vapour and is where clouds and storms form."},
    {s:"Atmospheric pressure increases with altitude.", a:"false", why:"It falls, because less air lies above and the air is less dense."},
    {s:"A stalagmite grows downward from a cave roof.", a:"false", why:"A stalagmite grows upward from the floor; a stalactite grows down from the roof."},
    {s:"An artesian well requires no pump.", a:"true", why:"The water is confined under pressure and rises of its own accord."},
    {s:"Nitrogen is the most abundant gas in the atmosphere.", a:"true", why:"It makes up about 78 per cent of the air."}
  ],
  sort:{ title:"Sort these correctly", groups:[
    {name:"Processes of the water cycle", items:["evaporation","transpiration","condensation","precipitation"]},
    {name:"Permeable rocks", items:["sandstone","limestone","gravel"]},
    {name:"Impermeable rocks", items:["clay","granite","shale"]},
    {name:"Limestone features", items:["stalactite","stalagmite","pillar","swallow hole"]},
    {name:"Layers of the atmosphere", items:["troposphere","stratosphere","mesosphere","thermosphere"]}
  ]},
  mapwork:{ title:"Groundwater and the water table", caption:"Complete the table by explaining each feature.", items:[
    {p:"Zone of aeration", f:"The upper zone where pores hold both air and water, above the water table"},
    {p:"Water table", f:"The upper surface of the zone of saturation; rises in the rains and falls in the dry season"},
    {p:"Zone of saturation", f:"The region where every pore is filled with water; wells must reach it"},
    {p:"Aquifer", f:"A permeable layer that stores and transmits groundwater"},
    {p:"Impermeable layer", f:"Halts the downward movement of water and forces it to move sideways"},
    {p:"Spring", f:"Where the water table intersects the surface, groundwater emerges naturally"},
    {p:"Artesian basin", f:"Permeable rock confined between impermeable layers in a basin; water rises under pressure"},
    {p:"Well", f:"A shaft sunk below the water table to draw groundwater"}
  ]},
  casestudy:{ title:"Why the wells failed in March",
    text:"A village of six hundred people relied on four hand-dug wells. Every year in late March, three of the four went dry, and the women walked to a stream two kilometres away until the rains returned in May.\n\nA hydrogeologist explained the pattern. The wells had been dug in the wet season to a depth of about seven metres, which reached the water table comfortably at that time of year. But the water table is not fixed. Through the long dry season, with no infiltration to recharge the aquifer and continuous withdrawal by the village, it falls — in that district by three to four metres. The three shallow wells simply ended above the dry-season water table.\n\nThe fourth well, dug by a different family, went down eleven metres because they had struck a hard layer and kept going in frustration. It never failed. The solution adopted was to deepen the three wells to twelve metres and line them, and to protect the small catchment upslope from clearing so that infiltration was maintained. All four now yield throughout the year.",
    questions:[
      {q:"Why did three wells fail every March?", a:"They were only seven metres deep. In the dry season the water table falls three to four metres, dropping below the base of those wells."},
      {q:"Why is the water table lower in the dry season?", a:"There is no rainfall to infiltrate and recharge the aquifer, while water continues to drain away naturally and to be drawn off by the village."},
      {q:"Why did the fourth well never fail?", a:"It had been dug to eleven metres, so its base remained below the water table even at its lowest."},
      {q:"What error was made when the three wells were dug?", a:"They were dug in the wet season and their depth was judged against the wet-season water table, without allowing for the seasonal fall."},
      {q:"Explain why protecting the upslope catchment helps.", a:"Vegetation there promotes infiltration rather than run-off, so more rain enters the aquifer and the water table is better recharged."},
      {q:"State the general lesson for anyone siting a well.", a:"A well must be dug deep enough to remain below the water table at its lowest seasonal level, not merely below it when the well is dug."}
    ]},
  project:{ title:"Water supply survey",
    brief:"Investigate how your community obtains its water through the year.",
    steps:[
      "List every water source your community uses: wells, boreholes, streams, rainwater.",
      "For each, record whether it is available all year or seasonal.",
      "Ask three households how far they travel for water in the dry season and in the rains.",
      "Identify any source that has failed or become polluted and find out why.",
      "Present your findings on a sketch map and suggest one improvement."
    ],
    criteria:["All sources identified","Seasonal availability recorded","Three households interviewed","A failure or pollution case investigated","A practical improvement proposed"]},
  worked:[
    {q:"The water table is 6 m deep in the rains and falls 3.5 m by March. How deep must a well be to stay wet?", steps:["6 + 3.5 = 9.5 m to reach it","Add a margin of 2 m"], a:"At least 11.5 m, so 12 m"},
    {q:"A village of 600 uses 20 litres per person daily. Find the daily demand in m3.", steps:["600 \u00d7 20 = 12 000 litres","\u00f7 1 000"], a:"12 m\u00b3 per day"},
    {q:"A well yields 0.5 m3 per hour. How many hours to supply that demand?", steps:["12 \u00f7 0.5"], a:"24 hours"},
    {q:"Pressure falls about 1 millibar per 10 m of ascent. Find the fall over 850 m.", steps:["850 \u00f7 10"], a:"About 85 millibars"},
    {q:"A roof of 60 m2 collects rain of 1 500 mm a year. Find the volume harvested in m3.", steps:["1 500 mm = 1.5 m","60 \u00d7 1.5"], a:"90 m\u00b3 per year"},
    {q:"A stalactite grows 0.2 mm a year. How long to reach 40 cm?", steps:["40 cm = 400 mm","400 \u00f7 0.2"], a:"2 000 years"},
    {q:"Of 1 800 mm of rain, 25% infiltrates. Find the depth infiltrating.", steps:["0.25 \u00d7 1 800"], a:"450 mm"}
  ],
  apply:[
    {q:"Why does a borehole often give safer water than a shallow hand-dug well?", a:"A borehole draws from a deeper aquifer protected by overlying rock, whereas a shallow well is easily contaminated by surface run-off, latrines and animals."},
    {q:"Explain why paving a whole town centre can lower the water table.", a:"Impermeable paving prevents infiltration, so rain runs off into drains instead of recharging the aquifer beneath."},
    {q:"How does deforestation of a catchment affect dry-season stream flow?", a:"Without trees, more rain runs off immediately and less infiltrates. Groundwater is poorly recharged, so the springs that sustain streams in the dry season weaken or fail."},
    {q:"Why do mountaineers experience breathing difficulty at high altitude?", a:"Atmospheric pressure falls with height, so the air is thinner and each breath contains less oxygen."},
    {q:"A limestone district has few surface streams. Explain.", a:"Limestone is permeable and soluble. Rain sinks through joints and swallow holes to flow underground rather than across the surface."}
  ],
  activities:[
    "Illustrate the hydrological cycle through drawing",
    "Collect samples and identify permeable and impermeable rocks",
    "Conduct an experiment to demonstrate the water table using a jar of sand and water",
    "Draw a section showing an aquifer, water table, spring and artesian basin",
    "Draw and label the layers of the atmosphere",
    "Record atmospheric pressure daily and relate changes to the weather observed"
  ],
  materials:[
    "Primary text: General Geography in Diagrams (Pearson)",
    "Abegunde et al., Senior Secondary Geography Book 1",
    "Rock samples, glass jars, sand, gravel and clay",
    "Barometer and weather charts",
    "WASSCE Q & A Papers 1 and 2"
  ],
  assessment:["Oral questions","Assignments","Quiz","Practical demonstration","Written test"]
},
{
  grade:11, period:"III", sem:"One", icon:"🌦️",
  title:"Weather, Climate and Climatic Regions",
  subtitle:"Elements of weather, the weather station, climatic data, and the classification of climates",
  outcomes:[
    "Learners are able to differentiate between weather and climate and analyse climatic data"
  ],
  objectives:[
    "Differentiate between weather and climate",
    "List the elements of weather and climate and the instruments that measure them",
    "Calculate and analyse climatic data using charts",
    "Explain the factors affecting climate",
    "Discuss the Greek and Koppen classifications and their advantages and disadvantages",
    "Describe the major climatic regions and their natural vegetation"
  ],
  note:"<b>Weather</b> is the condition of the atmosphere at a place at a given moment; <b>climate</b> is the average weather of a place over about 35 years. The <b>elements</b> are temperature, rainfall, humidity, pressure, wind and sunshine. <b>Mean monthly temperature</b> = sum of daily means ÷ number of days. <b>Temperature range</b> = highest mean minus lowest mean.",
  study:[
    /* ---- course text: Semester One, Period III — Weather, Climate and Climatic Regions (guide pp. 36-38) ---- */
    {k:"h3", t:"Weather and its Elements"},
    {k:"p", t:"**Weather** is the condition of the atmosphere at a place at a given moment. Its **elements**: temperature, rainfall, humidity, atmospheric pressure, wind, cloud and sunshine — each read with its instrument at the **weather station**: the thermometer (maximum and minimum) for temperature, the rain gauge for rainfall, the hygrometer for humidity, the barometer for pressure, the anemometer and wind vane for wind, and the sunshine recorder. The **weather record** kept at fixed hours feeds the climate averages; the **attributes of weather** are its changeability from hour to hour and place to place; its **importance**: farming, fishing, aviation, health and daily life."},
    {k:"rule"},
    {k:"h3", t:"Climate"},
    {k:"p", t:"**Climate** is the average weather of a place over a long period — about 35 years. The differences between weather and climate: weather is momentary and changes hourly; climate is the long average and changes slowly. The **factors affecting climate**: latitude, altitude, distance from the sea, ocean currents, prevailing winds, relief and cloud cover. The **elements of climate** are the same elements taken as averages; the **climatograph** (climatic graph) plots monthly rainfall as bars against monthly temperature as a line; and the **importance of climate**: it sets the vegetation, the crops, the water supply, the house types and the whole way of life. Differentiate weather from climate in a Venn diagram, and discuss the causes of weather and climatic change."},
    {k:"p", t:"**Prepare a climatic chart** from data: calculate the **mean monthly temperature** (sum of daily means ÷ days), the **mean annual temperature** (mean of the twelve monthly means), and the **range of temperature** and **range of rainfall** (highest monthly value minus lowest)."},
    {k:"rule"},
    {k:"h3", t:"The Classification of Climate"},
    {k:"p", t:"Two classifications matter. The **Greek classification**, the oldest, divides each hemisphere by latitude into the torrid, temperate and frigid zones — simple, but blind to rainfall and altitude. **Köppen's classification** divides climate by temperature and rainfall into the tropical rain (A), dry (B), warm temperate (C), cold snow-forest (D) and polar (E) types, with highland (H) apart. The **basis** of each: the Greeks on the sun's angle alone; Köppen on the vegetation each rainfall-and-temperature regime sustains. Weigh the advantages and disadvantages of both: Greek — simple but crude; Köppen — close to vegetation but its lettering must be learned and its boundaries approximate."},
    {k:"rule"},
    {k:"h3", t:"The Climatic Regions"},
    {k:"bul", items:[
      "**Equatorial** — hot and wet all year, convection rain, dense rainforest; the Congo and Amazon basins, coastal West Africa",
      "**Tropical** — hot with a wet and a dry season, savanna grassland; much of Liberia's interior and West Africa",
      "**Mediterranean** — hot dry summers, mild wet winters; the Cape and the North African coast",
      "**Hot and cold deserts** — arid, great daily temperature range; the Sahara and the Gobi/Kalahari",
      "**Warm temperate** — mild and moist all year",
      "**Cool temperate** — cool with a clear winter; western Europe",
      "**Cold temperate** — long hard winters, coniferous forest; Canada and Siberia",
      "**Polar** — frozen all year; the tundra and ice caps"]},
  ],

  focus:[
    "Weather: definition, elements and importance",
    "The weather station and its instruments",
    "Weather records: temperature, humidity, rainfall, pressure",
    "Climate: definition and differences from weather",
    "Factors affecting climate: latitude, altitude, distance from sea, winds, ocean currents, relief",
    "Elements of climate and the climatograph",
    "Classification of climate: Greek and Koppen systems",
    "Advantages and disadvantages of each classification",
    "Climatic regions and natural vegetation"
  ],
  terms:[
    {t:"weather", d:"the state of the atmosphere at a place at a given time", x:"Today's weather is hot and humid."},
    {t:"climate", d:"the average weather of a place over a long period", x:"Liberia has an equatorial climate."},
    {t:"temperature", d:"the degree of hotness or coldness of the air", x:"Temperature is measured with a thermometer."},
    {t:"humidity", d:"the amount of water vapour in the air", x:"Humidity is high near the coast."},
    {t:"relative humidity", d:"the vapour present as a percentage of the maximum possible", x:"Relative humidity is measured with a hygrometer."},
    {t:"precipitation", d:"all forms of water falling from the atmosphere", x:"Rain is the commonest precipitation in Liberia."},
    {t:"rain gauge", d:"an instrument measuring rainfall", x:"The rain gauge is read daily."},
    {t:"thermometer", d:"an instrument measuring temperature", x:"A maximum-minimum thermometer records extremes."},
    {t:"barometer", d:"an instrument measuring atmospheric pressure", x:"A falling barometer suggests rain."},
    {t:"anemometer", d:"an instrument measuring wind speed", x:"The anemometer spins in the wind."},
    {t:"wind vane", d:"an instrument showing wind direction", x:"The wind vane points into the wind."},
    {t:"hygrometer", d:"an instrument measuring humidity", x:"A wet and dry bulb hygrometer is common."},
    {t:"Stevenson screen", d:"a louvred white box housing weather instruments", x:"The Stevenson screen shades the thermometers."},
    {t:"climatograph", d:"a graph showing monthly temperature and rainfall together", x:"A climatograph summarises a station's climate."},
    {t:"mean temperature", d:"the average of temperature readings over a period", x:"Add the readings and divide by their number."},
    {t:"temperature range", d:"the difference between the highest and lowest means", x:"Coastal stations have a small range."},
    {t:"isotherm", d:"a line joining places of equal temperature", x:"Isotherms run roughly parallel to latitude."},
    {t:"isohyet", d:"a line joining places of equal rainfall", x:"Isohyets show the rainfall pattern."},
    {t:"equatorial climate", d:"a hot wet climate near the Equator with rain all year", x:"Liberia has an equatorial climate."},
    {t:"tropical continental", d:"a climate with distinct wet and dry seasons, also called Sudan type", x:"Northern Nigeria has a tropical continental climate."},
    {t:"harmattan", d:"a dry dusty wind blowing from the Sahara in December to February", x:"The harmattan lowers humidity sharply."},
    {t:"ocean current", d:"a large movement of water that affects coastal climate", x:"A cold current makes a coast drier."}
  ],
  facts:[
    {q:"State three differences between weather and climate.", a:"Weather refers to a moment or a day while climate refers to about 35 years; weather changes rapidly while climate is stable; weather is measured directly while climate is calculated as an average."},
    {q:"Name six elements of weather and the instrument used for each.", a:"Temperature — thermometer; rainfall — rain gauge; pressure — barometer; wind speed — anemometer; wind direction — wind vane; humidity — hygrometer; sunshine — sunshine recorder."},
    {q:"Why is a Stevenson screen painted white and louvred?", a:"White reflects sunlight so the instruments are not heated directly, and louvres allow free air circulation while shading the thermometers — giving a true reading of the air temperature in the shade."},
    {q:"State six factors affecting the climate of a place.", a:"Latitude, altitude, distance from the sea, prevailing winds, ocean currents, relief and the nature of the surface such as forest or bare ground."},
    {q:"How is mean monthly temperature calculated?", a:"Add the mean daily temperatures for the month and divide by the number of days; the mean daily temperature is itself the average of the maximum and minimum for that day."},
    {q:"How is the annual temperature range found?", a:"Subtract the mean temperature of the coldest month from that of the hottest month."},
    {q:"State three characteristics of the equatorial climate.", a:"High temperature all year of about 26 to 28 degrees with a very small annual range; heavy rainfall over 1 500 mm distributed through the year; and consistently high humidity with dense rainforest vegetation."},
    {q:"Give the basis of the Greek classification of climate and one disadvantage.", a:"It divides the world by temperature into torrid, temperate and frigid zones based on latitude. Its disadvantage is that it is too simple: it ignores rainfall, altitude and distance from the sea, so very different climates fall in one zone."},
    {q:"Give the basis of Koppen's classification and one advantage.", a:"It uses measured temperature and rainfall figures, linked to natural vegetation, and gives each type a letter code. Its advantage is precision — it is quantitative and can be applied consistently anywhere."},
    {q:"Why does the coast have a smaller temperature range than the interior?", a:"The sea heats and cools more slowly than the land, so it moderates coastal temperature, keeping it cooler in the hot season and warmer in the cool season."},
    {q:"Describe the effect of the harmattan on Liberia.", a:"From December to February this dry dusty wind from the Sahara lowers humidity sharply, brings hazy skies with reduced visibility, causes cracked lips and coughing, dries out vegetation and raises the risk of bush fire."}
  ],
  tf:[
    {s:"Climate is the average weather over a long period.", a:"true", why:"Conventionally about 35 years of records are averaged."},
    {s:"A hygrometer measures rainfall.", a:"false", why:"A hygrometer measures humidity; rainfall is measured with a rain gauge."},
    {s:"Temperature falls with increasing altitude.", a:"true", why:"It falls about 6.5 degrees Celsius per 1 000 metres of ascent."},
    {s:"Coastal areas have a greater annual temperature range than inland areas.", a:"false", why:"The sea moderates coastal temperature, giving a smaller range."},
    {s:"Koppen's classification uses measured temperature and rainfall data.", a:"true", why:"That quantitative basis is its main advantage over the Greek system."},
    {s:"The harmattan increases humidity in Liberia.", a:"false", why:"It is a dry desert wind that lowers humidity sharply."},
    {s:"A Stevenson screen is placed in direct sunlight for accuracy.", a:"false", why:"It shades the instruments; direct sun would give a falsely high reading."}
  ],
  sort:{ title:"Sort these weather items", groups:[
    {name:"Elements of weather", items:["temperature","rainfall","humidity","wind","pressure"]},
    {name:"Weather instruments", items:["thermometer","rain gauge","barometer","anemometer","hygrometer"]},
    {name:"Factors affecting climate", items:["latitude","altitude","distance from sea","ocean currents","relief"]},
    {name:"Equatorial climate features", items:["rain all year","small temperature range","high humidity","rainforest"]},
    {name:"Tropical continental features", items:["distinct dry season","larger temperature range","savanna grassland"]}
  ]},
  mapwork:{ title:"Reading a climatograph", caption:"Complete the table by stating what each feature of the graph tells you.", items:[
    {p:"Bars", f:"Monthly rainfall in millimetres, read against the right-hand axis"},
    {p:"Line", f:"Mean monthly temperature in degrees Celsius, read against the left-hand axis"},
    {p:"Highest bar", f:"The wettest month; its position shows when the rainy season peaks"},
    {p:"Months with no bars", f:"The dry season and its length"},
    {p:"Highest and lowest points on the line", f:"The hottest and coolest months; their difference is the annual range"},
    {p:"Small temperature range", f:"Suggests a location near the Equator or near the sea"},
    {p:"Total of all bars", f:"The mean annual rainfall, which with the temperature identifies the climate type"}
  ]},
  casestudy:{ title:"Two stations, one country",
    text:"Two weather stations in Liberia recorded the following for one year. Station A, on the coast near Monrovia, recorded a mean annual temperature of 26 degrees, a hottest month of 28 and a coolest of 25, with 4 600 mm of rain falling in every month of the year, though heavily concentrated between May and October. Station B, inland on higher ground in the north, recorded a mean of 25 degrees, a hottest month of 30 and a coolest of 21, with 1 900 mm of rain and three months from December to February in which almost none fell.\n\nA student asked why two stations in one small country should differ so much. The answer lies in three factors. Station A is at sea level and beside the ocean, which moderates its temperature and supplies abundant moisture to the south-west monsoon. Station B is 400 metres higher, which lowers its temperature, and it is far enough inland for the harmattan to reach it strongly in the dry months, when the moist south-westerly winds have retreated south.",
    questions:[
      {q:"Calculate the annual temperature range at each station.", a:"Station A: 28 \u2212 25 = 3 degrees. Station B: 30 \u2212 21 = 9 degrees."},
      {q:"Which station is more strongly influenced by the sea? Give two pieces of evidence.", a:"Station A. It has a very small temperature range of 3 degrees and far higher rainfall of 4 600 mm spread through every month."},
      {q:"Why is Station B cooler on average despite its higher maximum?", a:"It lies 400 metres higher, and temperature falls about 6.5 degrees per 1 000 metres, which lowers its mean despite hot days in the dry season."},
      {q:"Explain the three dry months at Station B.", a:"In December to February the moist south-westerly winds retreat south and the dry harmattan from the Sahara reaches inland areas, bringing almost no rain."},
      {q:"Which station would you expect to carry rainforest and which savanna woodland? Explain.", a:"Station A, with 4 600 mm and no dry season, supports rainforest. Station B, with 1 900 mm and a three-month dry season, supports savanna woodland or a forest-savanna mosaic."}
    ]},
  project:{ title:"Class weather station",
    brief:"Record and analyse the weather at your school for one month.",
    steps:[
      "Set up simple instruments: a rain gauge from a bottle and funnel, and a thermometer in a shaded box.",
      "Record maximum and minimum temperature and rainfall each day at the same time.",
      "Note wind direction and cloud cover daily.",
      "At the end of the month calculate the mean temperature, the range and the total rainfall.",
      "Draw a climatograph of your results and describe the month's weather."
    ],
    criteria:["Instruments correctly sited and shaded","Readings taken daily at a consistent time","Mean and range correctly calculated","An accurate climatograph drawn","A sound description of the month"]},
  worked:[
    {q:"Daily maximum is 31\u00b0C and minimum 23\u00b0C. Find the mean daily temperature.", steps:["(31 + 23) \u00f7 2"], a:"27\u00b0C"},
    {q:"Monthly means are 26, 27, 28, 27, 26, 25\u00b0C. Find the mean for the six months.", steps:["Sum = 159","159 \u00f7 6"], a:"26.5\u00b0C"},
    {q:"The hottest month averages 30\u00b0C and the coolest 21\u00b0C. Find the annual range.", steps:["30 \u2212 21"], a:"9\u00b0C"},
    {q:"Monthly rainfall is 180, 420, 640, 900, 730 and 310 mm. Find the total.", steps:["180+420+640+900+730+310"], a:"3 180 mm"},
    {q:"Using those figures, find the mean monthly rainfall.", steps:["3 180 \u00f7 6"], a:"530 mm"},
    {q:"Temperature at sea level is 27\u00b0C. Find it at 1 200 m, falling 6.5\u00b0C per 1 000 m.", steps:["(1 200 \u00f7 1 000) \u00d7 6.5 = 7.8","27 \u2212 7.8"], a:"19.2\u00b0C"},
    {q:"A rain gauge of 12 cm diameter collects 340 ml. Find the rainfall in mm. (area = \u03c0r\u00b2)", steps:["r = 6 cm, area = 3.14 \u00d7 36 = 113 cm\u00b2","340 cm\u00b3 \u00f7 113 = 3.0 cm"], a:"About 30 mm"},
    {q:"Rainfall falls from 2 400 mm to 1 800 mm. Find the percentage decrease.", steps:["Decrease = 600","(600 \u00f7 2 400) \u00d7 100"], a:"25%"}
  ],
  apply:[
    {q:"Why does Liberia have no cold season despite the sun moving north and south?", a:"It lies close to the Equator, so the sun is always high at noon and the amount of insolation varies little through the year, keeping temperatures uniformly high."},
    {q:"A farmer wants to know when to plant. Which is more useful — a weather forecast or climate data?", a:"Climate data, because it shows the reliable long-term pattern of the rainy season. The forecast helps only with the timing of the final decision within a few days."},
    {q:"Explain why the coast is more humid than the interior.", a:"It is next to the ocean, from which evaporation constantly supplies water vapour to the onshore winds."},
    {q:"How would extensive deforestation affect local rainfall?", a:"Forests return large amounts of water to the air by transpiration. Removing them reduces that moisture supply and increases run-off, so local rainfall tends to decrease and become less reliable."},
    {q:"Why must weather readings always be taken at the same time each day?", a:"Temperature, humidity and pressure vary through the day. Only readings taken at a fixed time can be fairly compared from day to day or between stations."}
  ],
  activities:[
    "Group discussion on the causes of weather and climatic changes and the importance of climate",
    "Group presentation on weather instruments and their uses",
    "Prepare a climatic chart and calculate mean annual temperature, mean monthly temperature and the range of rainfall and temperature",
    "Outdoor observation to feel changes in weather conditions",
    "Draw and interpret climatographs for different climatic regions",
    "Compare the Greek and Koppen classifications"
  ],
  materials:[
    "Primary text: General Geography in Diagrams (Pearson)",
    "Abegunde et al., Senior Secondary Geography Book 1",
    "Thermometer, rain gauge, barometer, wind vane and Stevenson screen if available",
    "Graph paper, climatic data tables and atlas",
    "WASSCE Q & A Papers 1 and 2"
  ],
  assessment:["Oral questions","Assignments","Quiz","Weather recording project","Written test"]
},
{
  grade:11, period:"IV", sem:"Two", icon:"🌾",
  title:"Natural Vegetation and the Primary Industries",
  subtitle:"Vegetation types and their controls; agriculture, fishing, mining and lumbering",
  outcomes:[
    "Learners are able to discuss vegetation and the related economic activities in Liberia",
    "Learners are able to analyse the primary industries and their importance to the economy"
  ],
  objectives:[
    "Discuss natural vegetation and list its different types",
    "Summarise the factors that affect vegetation",
    "Outline the economic activities in Liberia related to natural vegetation",
    "Describe the systems of agriculture and the major crops",
    "Discuss fishing, mining and lumbering: methods, importance and problems",
    "Recommend solutions to the problems facing the primary industries"
  ],
  note:"<b>Natural vegetation</b> is the plant cover that grows without human interference, controlled chiefly by <b>climate</b>, then by <b>soil, relief</b> and <b>biotic factors</b>. Liberia's vegetation belts run roughly parallel to the coast: <b>mangrove swamp</b>, <b>coastal savanna</b>, <b>rainforest</b> and <b>montane vegetation</b>. The <b>primary industries</b> extract raw materials directly from nature.",
  study:[
    /* ---- course text: Semester Two, Period IV — Natural Vegetation and the Primary Industries (guide pp. 39-44) ---- */
    {k:"h3", t:"Natural Vegetation and its Development"},
    {k:"p", t:"**Natural vegetation** is the plant cover that grows of itself, untouched by man. Its types run from the equatorial rainforest, the tropical savanna, the Mediterranean scrub and the desert, to the temperate forests, the coniferous forests and the tundra. The factors in its **development**: **climatic** — rainfall and temperature chiefly; **biotic** — the animals and people, their grazing, burning and clearing; and **soil** — its depth, drainage and fertility. Define vegetation, relate it to climate, and research the methods used in **deforestation, afforestation and reforestation**."},
    {k:"rule"},
    {k:"h3", t:"Vegetation and Human Economic Activity"},
    {k:"p", t:"Human economic activity works on the vegetation in the **primary** industries — farming, fishing, mining, lumbering — which take from nature, and in the **secondary** industries which process what the primary take. Their problems and solutions: the exhaustion of the resource against conservation, replanting and regulation. **Case study — Liberia**: the **forest**, the **mountain**, the **savanna**, the **mangrove swamps** and **marshlands**, and the activities each carries — timber and hunting in the forest, mining in the mountains, grazing and firewood in the savanna, fishing and rice in the mangrove and marsh."},
    {k:"rule"},
    {k:"h3", t:"Agriculture"},
    {k:"p", t:"The **primary industries** are those that extract the raw materials of nature; the **major primary industries** are agriculture, fishing, mining and lumbering; the factors affecting their development include the resource itself, labour, capital, transport and market. **Agriculture** is the chief of them, and its **classification**: by purpose — **subsistence** farming to feed the family, and **commercial** farming for the market; and by product — **crop farming** and **animal farming**. The **systems of farming**: **shifting cultivation**, clearing new land as the old tires; **bush fallowing**, letting land rest some years; **mechanized farming** with machines and large fields; **crop rotation** by planned succession; **truck farming** in vegetables for the town market; and the animal systems — **pastoralism, nomadism** and **dairy farming**. Distinguish intensive from extensive farming, debate mechanized and subsistence farming in Liberia, and outline the problems affecting agriculture and their importance."},
    {k:"rule"},
    {k:"h3", t:"Fishing"},
    {k:"p", t:"The **major fishing grounds** of the world: **the Grand Banks** off Newfoundland, **the coast of Peru**, and **the Sea of Japan** — each where warm and cool waters meet and plankton swarms. The **methods of fishing**, local and international: **hook and line**, **the use of nets** — cast net, drag net, trawl — and **the use of wicker baskets** and traps. The **conditions that favour fishing**: the meeting of warm and cool **ocean currents**, the **abundance of plankton**, a deeply indented coast with sheltered harbours, and the market and the fleet. Its **importance**: protein food, employment, export trade; its **problems and solutions** — over-fishing against regulation and closed seasons, poor storage against cold chains. **Fishing in West Africa**: the coastal waters of Liberia, Ghana and Senegal, lagoon and inland fishing."},
    {k:"rule"},
    {k:"h3", t:"Mining"},
    {k:"p", t:"**Mining** is the extraction of minerals from the earth. The **types of minerals**: **metallic** — **ferrous** (iron, manganese) and **non-ferrous** (gold, copper, bauxite, tin); **non-metallic** — diamond, limestone, phosphate, salt; and **mineral fuels** — coal, petroleum, uranium. The **uses of selected minerals** and the **methods of mining**: the **open pit (open cast)** mine for near-surface deposits; the **adit**, a horizontal tunnel into a hillside; the **shaft or underground** mine for deep deposits; **dredging** from water; and **drilling** for oil and gas. The **importance of the mining industry**: export earnings, employment, **infrastructural development**, the fuel of industry. Its problems and solutions: environmental damage against reclamation, and the quick exhaustion of a wasting asset against diversification. The **case studies**: **iron ore mining in Liberia** — Nimba and Bong, railed to Buchanan; **gold in Ghana and South Africa**; **oil in the Delta Region of Nigeria**; **copper in the Katanga Region of DR Congo**."},
    {k:"rule"},
    {k:"h3", t:"Lumbering"},
    {k:"p", t:"**Lumbering** is the felling and extraction of timber. Its **methods of exploitation** differ with the type of forest — the selective cutting of the mixed rainforest against the clear felling of the planted forest. The **choice trees** in lumbering: mahogany, abura, iroko, obeche, and in Liberia the red ironwood and the scented gum. The **factors affecting lumbering**: the density of valuable trees, terrain and drainage, transport — roads, rails and rivers — machinery, capital and skill, and the market and the mill. Its **importance**: the **provision of jobs**, **construction** timber, and a **foreign exchange earner**. Its problems — deforestation, lost species, silted rivers — and the solutions: selective logging, replanting, reserves. **Case studies**: **lumbering in Liberia**; **in the Congo Basin of Central Africa**; and **in West Africa** generally — visit a saw mill and report."},
  ],

  focus:[
    "Natural vegetation: definition and types",
    "Development of vegetation: climatic, biotic and soil factors",
    "Case study of Liberia: forest, mountain, savanna, mangrove swamp and marshland",
    "Human economic activities and their effect on vegetation",
    "Agriculture: systems, crops and problems",
    "Fishing: types, methods, importance and problems",
    "Mining: minerals of Liberia, methods and problems",
    "Lumbering: methods, importance and the case for reforestation"
  ],
  terms:[
    {t:"natural vegetation", d:"the plant cover growing without human interference", x:"Rainforest is the natural vegetation of much of Liberia."},
    {t:"rainforest", d:"dense evergreen forest of hot wet regions", x:"The rainforest has several layers of trees."},
    {t:"savanna", d:"tropical grassland with scattered trees", x:"Savanna occurs where there is a marked dry season."},
    {t:"mangrove", d:"salt-tolerant trees growing in coastal swamp", x:"Mangroves protect the shoreline."},
    {t:"deciduous", d:"shedding leaves in a particular season", x:"Deciduous trees lose leaves in the dry season."},
    {t:"evergreen", d:"keeping leaves throughout the year", x:"Rainforest trees are evergreen."},
    {t:"biotic factor", d:"the influence of living things on vegetation", x:"Grazing is a biotic factor."},
    {t:"primary industry", d:"an industry extracting raw materials from nature", x:"Mining is a primary industry."},
    {t:"subsistence farming", d:"farming to feed the farmer's own household", x:"Subsistence farming leaves little surplus."},
    {t:"commercial farming", d:"farming for sale in the market", x:"Rubber is grown commercially in Liberia."},
    {t:"plantation", d:"a large estate growing one cash crop", x:"Firestone operates a rubber plantation."},
    {t:"shifting cultivation", d:"clearing land, farming it, then moving on", x:"Shifting cultivation needs a long fallow."},
    {t:"fallow", d:"land left uncultivated to recover fertility", x:"A shorter fallow exhausts the soil."},
    {t:"artisanal fishing", d:"small-scale fishing using traditional methods", x:"Artisanal fishing uses canoes and nets."},
    {t:"trawling", d:"fishing by dragging a large net behind a vessel", x:"Trawling catches large quantities."},
    {t:"open-cast mining", d:"mining by removing surface material", x:"Iron ore is won by open-cast mining."},
    {t:"alluvial mining", d:"recovering minerals from river gravels", x:"Alluvial mining recovers diamonds and gold."},
    {t:"lumbering", d:"the felling and processing of timber", x:"Lumbering is important in the forest counties."},
    {t:"selective felling", d:"cutting only mature trees of chosen species", x:"Selective felling conserves the forest."},
    {t:"reforestation", d:"replanting trees where forest has been cut", x:"Reforestation restores the timber supply."},
    {t:"overfishing", d:"catching fish faster than stocks can replace themselves", x:"Overfishing collapses a fishery."}
  ],
  facts:[
    {q:"State four factors that determine natural vegetation.", a:"Climate — chiefly rainfall and temperature; soil type and depth; relief and altitude; drainage; and biotic factors such as grazing, fire and human clearance."},
    {q:"Name the vegetation belts of Liberia from the coast inland.", a:"Mangrove swamp and coastal marshland; coastal savanna and grassland; the evergreen and semi-deciduous rainforest belt; and montane vegetation on the higher ground of Nimba and Wologizi."},
    {q:"State three characteristics of tropical rainforest.", a:"Trees are evergreen and grow in three or more layers with a closed canopy; there is very great species variety; buttress roots and lianas are common; and undergrowth is sparse because little light reaches the floor."},
    {q:"State three economic uses of the rainforest.", a:"Timber for lumbering and export; land for rubber, cocoa and oil palm; and forest products such as rattan, medicine and bush meat, as well as the protection of soil and water."},
    {q:"Name the systems of agriculture practised in Liberia.", a:"Shifting cultivation and bush fallow at subsistence level; mixed and permanent smallholder farming; and commercial plantation agriculture for rubber, oil palm and sugar."},
    {q:"State four problems facing agriculture in Liberia.", a:"Poor feeder roads and high transport costs; lack of credit, improved seed and fertiliser; inadequate storage causing heavy post-harvest loss; insecure land tenure; and reliance on hand tools with little mechanisation."},
    {q:"Distinguish artisanal from industrial fishing.", a:"Artisanal fishing uses canoes, hooks and simple nets in coastal waters for local sale. Industrial fishing uses powered trawlers with large nets and refrigeration, working further offshore for export markets."},
    {q:"State three problems facing the fishing industry in Liberia.", a:"Lack of cold storage causing spoilage; illegal and unregulated foreign trawling depleting stocks; poor landing sites and transport; and shortage of capital for better boats and gear."},
    {q:"Name four minerals mined in Liberia and the method used.", a:"Iron ore by open-cast mining; gold and diamonds by alluvial and small-scale mining; bauxite; and sand and stone quarried for construction."},
    {q:"State three problems associated with mining in Liberia.", a:"Environmental damage from pits, tailings and river silting; export of raw ore with little value added locally; fluctuating world prices; and disputes over land and community compensation."},
    {q:"Why is selective felling preferable to clear felling?", a:"It removes only mature trees of chosen species, leaving the canopy and young trees so the forest regenerates, the soil is protected and wildlife habitat survives."},
    {q:"State three ways of conserving Liberia's forest.", a:"Practise selective felling with replanting; enforce concession rules and prohibit felling in reserves; promote agro-forestry and alternative fuels to reduce charcoal demand; and educate communities on the value of the forest."}
  ],
  tf:[
    {s:"Climate is the chief factor determining natural vegetation.", a:"true", why:"Rainfall and temperature set the limits within which soil and relief operate."},
    {s:"Rainforest trees are mainly deciduous.", a:"false", why:"They are chiefly evergreen, since there is no marked dry season to force leaf fall."},
    {s:"Mangroves grow in salt water along the coast.", a:"true", why:"They are salt-tolerant trees of tidal swamps and estuaries."},
    {s:"Shifting cultivation is sustainable when the fallow period is shortened.", a:"false", why:"A short fallow does not allow fertility to recover, so the soil is progressively exhausted."},
    {s:"Iron ore in Liberia is mined chiefly by open-cast methods.", a:"true", why:"The ore lies near the surface, so overburden is stripped and the ore removed from open pits."},
    {s:"Overfishing means catching fish faster than stocks can reproduce.", a:"true", why:"It leads to declining catches and eventual collapse of the fishery."},
    {s:"Lumbering has no effect on soil erosion.", a:"false", why:"Removing tree cover exposes the soil to rain, greatly increasing erosion."}
  ],
  sort:{ title:"Sort these correctly", groups:[
    {name:"Vegetation belts of Liberia", items:["mangrove swamp","coastal savanna","rainforest","montane vegetation"]},
    {name:"Primary industries", items:["agriculture","fishing","mining","lumbering"]},
    {name:"Liberia's cash crops", items:["rubber","cocoa","coffee","oil palm"]},
    {name:"Minerals of Liberia", items:["iron ore","gold","diamonds","bauxite"]},
    {name:"Problems of the primary sector", items:["poor roads","lack of storage","limited credit","price fluctuation"]}
  ]},
  mapwork:{ title:"Vegetation and economic activity in Liberia", caption:"Complete the table by naming the vegetation and the activity associated with each zone.", items:[
    {p:"Coastal lagoons and estuaries", f:"Mangrove swamp; fishing, salt making and coastal protection"},
    {p:"Coastal belt", f:"Coastal savanna and grassland; settlement, mixed farming and fishing"},
    {p:"Central forest belt", f:"Evergreen and semi-deciduous rainforest; lumbering, rubber and cocoa"},
    {p:"Nimba and Wologizi highlands", f:"Montane vegetation; iron ore mining and conservation reserves"},
    {p:"Northern districts", f:"Forest-savanna mosaic with a longer dry season; food crops and livestock"},
    {p:"Major rivers", f:"Gallery forest along the banks; alluvial mining, fishing and transport"},
    {p:"Cleared farmland", f:"Bush fallow regrowth; shifting cultivation of rice and cassava"}
  ]},
  casestudy:{ title:"The fish that stopped coming",
    text:"A fishing community west of Buchanan landed, by its own reckoning, about forty crates of fish a day in 2005. By 2018 the figure was nine. The fishermen blamed foreign trawlers, and they were partly right; but a marine survey found three causes acting together.\n\nThe first was indeed trawling. Vessels working close inshore, inside the zone reserved for artisanal boats, took large quantities of juvenile fish that would otherwise have grown and bred. The second was the destruction of two kilometres of mangrove, cut for firewood and building poles. Mangrove roots are the nursery in which many coastal species spend their first months; without that shelter the young fish did not survive. The third was the community's own gear. As catches fell, the fishermen bought nets of ever smaller mesh, which caught the small fish that remained — and so removed the next generation.\n\nThe response has been slow but real. A community by-law now prohibits mesh below a set size, a mangrove replanting scheme has restored about six hundred metres of nursery, and the fishermen keep a log of trawler sightings which the county authority has begun to act upon. Landings in 2023 were about seventeen crates a day.",
    questions:[
      {q:"Calculate the percentage fall in landings between 2005 and 2018.", a:"From 40 to 9 crates is a fall of 31. (31 \u00f7 40) \u00d7 100 = 77.5 per cent."},
      {q:"State the three causes identified by the survey.", a:"Inshore trawling taking juvenile fish; destruction of mangrove nursery habitat; and the community's own use of small-mesh nets."},
      {q:"Why is the loss of mangrove so damaging to a fishery?", a:"Mangrove roots are the nursery where many coastal species spend their first months; without that shelter the young fish do not survive to breeding age."},
      {q:"Explain how the fishermen's response to falling catches made the problem worse.", a:"They used smaller mesh to catch the smaller fish remaining, which removed juveniles before they could breed — accelerating the decline."},
      {q:"Describe the three remedies adopted and what each addresses.", a:"A minimum mesh by-law protects juveniles; mangrove replanting restores the nursery; and a trawler sighting log enables enforcement against illegal inshore fishing."},
      {q:"Calculate the recovery in landings from 2018 to 2023 as a percentage.", a:"From 9 to 17 crates is an increase of 8. (8 \u00f7 9) \u00d7 100 = about 89 per cent."}
    ]},
  project:{ title:"Primary industry enquiry",
    brief:"Investigate one primary industry operating in your area.",
    steps:[
      "Choose farming, fishing, mining or lumbering as practised locally.",
      "Interview three people working in it about their methods and output.",
      "Record the tools and techniques used and where the product is sold.",
      "Identify the three greatest problems they report.",
      "Propose two realistic improvements and present your findings."
    ],
    criteria:["A real local industry studied","Three workers genuinely interviewed","Methods and market accurately recorded","Problems correctly ranked","Two practical improvements proposed"]},
  worked:[
    {q:"Landings fall from 40 crates to 9. Find the percentage decrease.", steps:["Decrease = 31","(31 \u00f7 40) \u00d7 100"], a:"77.5%"},
    {q:"A farm of 4 hectares yields 1.8 tonnes of rice per hectare. Find the total yield.", steps:["4 \u00d7 1.8"], a:"7.2 tonnes"},
    {q:"A rubber estate taps 320 trees yielding 55 g of latex each daily. Find the daily yield in kg.", steps:["320 \u00d7 55 = 17 600 g","\u00f7 1 000"], a:"17.6 kg"},
    {q:"Iron ore exports are 4.5 million tonnes at US$85 a tonne. Find the export value.", steps:["4 500 000 \u00d7 85"], a:"US$382.5 million"},
    {q:"A forest of 25 000 ha loses 900 ha a year. How long until it is cleared?", steps:["25 000 \u00f7 900"], a:"About 28 years"},
    {q:"A canoe catches 60 kg a day for 22 days. Find the monthly catch.", steps:["60 \u00d7 22"], a:"1 320 kg"},
    {q:"Of a 7.2 tonne harvest, 22% is lost to poor storage. Find the loss and the amount sold.", steps:["Loss = 0.22 \u00d7 7.2 = 1.58 t","7.2 \u2212 1.58"], a:"1.58 t lost; 5.62 t sold"}
  ],
  apply:[
    {q:"Why does rubber grow well in Liberia but not in northern Nigeria?", a:"Rubber requires high temperatures with heavy, evenly distributed rainfall and no long dry season — conditions found in Liberia's equatorial climate but not in the tropical continental climate of northern Nigeria."},
    {q:"Explain why shifting cultivation becomes destructive as population rises.", a:"More people need more land, so the fallow period is shortened. The soil no longer has time to recover its fertility, yields fall, and farmers clear yet more forest."},
    {q:"A company wants to clear-fell a forest concession. State two arguments against and one condition you would impose.", a:"Against: it causes severe erosion and loss of the water catchment, and it destroys habitat and future timber supply. Condition: require selective felling with mandatory replanting and a bond held against compliance."},
    {q:"Why does Liberia earn less from iron ore than a country that makes steel?", a:"Exporting raw ore captures only the value of extraction. Smelting and alloying add several times that value and create far more skilled employment, all of which occurs abroad."},
    {q:"How would a cold store change the position of an artisanal fishing community?", a:"It would prevent spoilage, allowing the catch to be held until prices are good rather than sold cheaply at once, and it would open more distant markets — raising income substantially."}
  ],
  activities:[
    "Class discussion: define vegetation and relate it to climate; name human activities affecting natural vegetation",
    "Field trip to show the various species of plants in the locality",
    "Outline the various types of natural and cultivated vegetation",
    "Research and report on deforestation, afforestation and reforestation methods",
    "Study the primary industries of Liberia and their problems",
    "Field visit to a farm, fishing landing site, mine or sawmill"
  ],
  materials:[
    "Primary text: General Geography in Diagrams (Pearson)",
    "Abegunde et al., Senior Secondary Geography Book 1",
    "Vegetation and resource maps of Liberia",
    "Specimens of local plants and crops",
    "WASSCE Q & A Papers 1 and 2"
  ],
  assessment:["Oral questions","Assignments","Quiz","Field trip report","Written test"]
},
{
  grade:11, period:"V", sem:"Two", icon:"🏭",
  title:"Manufacturing, Energy, Trade and Transport",
  subtitle:"Secondary and tertiary industries, industrial location, sources of energy and their distribution",
  outcomes:[
    "Learners are able to categorise industries and elaborate on the economic importance of industries in Liberia",
    "Learners are able to discuss the sources of energy and their location and distribution"
  ],
  objectives:[
    "Categorise secondary industries and classify manufacturing industries",
    "List the factors affecting the location of manufacturing industries",
    "Examine the impact of manufacturing on the health of communities",
    "Emphasise the role of secondary industries in industrial development",
    "Discuss the categories of tertiary industries, trade, commerce and transport",
    "Describe the sources of energy, their location, distribution and importance"
  ],
  note:"<b>Secondary industry</b> processes raw materials into finished goods; <b>tertiary industry</b> provides services such as trade, transport, banking and tourism. Factors affecting <b>industrial location</b> include raw materials, power, labour, market, transport, water, capital and government policy. Energy sources are <b>renewable</b> (hydro, solar, wind, biomass) or <b>non-renewable</b> (coal, oil, gas).",
  study:[
    /* ---- course text: Semester Two, Period V — Manufacturing, Energy, Trade and Transport (guide pp. 44-45) ---- */
    {k:"h3", t:"Manufacturing"},
    {k:"p", t:"**Manufacturing** is the secondary industry that turns raw materials into finished goods. Its **classification** may be by product — food processing, textiles, building materials, chemicals, metal works — or by size and input — heavy or light, capital or labour intensive. The **major industrial regions** of the world: Western Europe, North America, East Asia, and the new centres of India and Brazil. The **factors affecting the location of manufacturing industries**: raw materials, power, labour, market, transport, capital, water, land and government policy — each weighted by the industry. The **importance of manufacturing**: employment, value added to raw materials, exports, skills and the growth of towns; examine too the impact of industry on the **health of communities** — pollution, waste and congestion — and the **problems facing manufacturing industries** in Liberia: power, capital, skills, transport and the small market."},
    {k:"rule"},
    {k:"h3", t:"Trade and Commerce"},
    {k:"p", t:"**Trade and commerce** is the exchange of goods and services. Its **types**: **internal (domestic) trade** within the country, and **external (international) trade** with the rest of the world — the exports and imports recorded at the ports. Trade moves the goods that transport carries; each feeds the other."},
    {k:"rule"},
    {k:"h3", t:"Transport and Development"},
    {k:"p", t:"**Transport** is the movement of people and goods from place to place; its **means**: road, rail, water — sea and river — pipeline, and air, with their advantages and limits. Transport and development move together: no road, no market; no market, no farm; no farm, no town. Examine the means of transport of Liberia and their state."},
    {k:"rule"},
    {k:"h3", t:"Sources of Energy"},
    {k:"p", t:"The **sources of energy** are classified as **renewable** — hydro-electric power, solar, wind, tidal, geothermal and biomass — and **non-renewable** — the **mineral (fossil) fuels: coal, natural gas, petroleum** and the nuclear fuel **uranium**. The **location and distribution of power sources**: **hydro-electric power** on the great **rivers, waterfalls and dams** — the Mount Coffee plant on the St Paul; **solar** from the **sunlight** of the tropics; **wind** on the open plains and coast; **tidal** power at the narrow straits; **geothermal** in the volcanic lands; **underground** heat and gas; and **biomass** from **organic organisms** — wood, charcoal, crop waste, biogas. The **factors affecting the sources of energy**: **capital, technology, climate** and the resource itself. The **importance of energy**: it drives industry, transport, homes and services — the engine of development. The **problems of energy harnessing** — cost, distance, technology — and their solutions."},
  ],

  focus:[
    "Manufacturing: definition and classification",
    "Major industrial regions of the world",
    "Factors affecting the location of manufacturing industries",
    "Importance and problems of manufacturing industries",
    "Impact of industry on community health and environment",
    "Trade and commerce: internal and external",
    "Transport and development: means of transport and their merits",
    "Sources of energy: renewable and non-renewable",
    "Location, distribution and importance of energy sources"
  ],
  terms:[
    {t:"manufacturing", d:"the processing of raw materials into finished goods", x:"Manufacturing adds value to raw materials."},
    {t:"secondary industry", d:"industry that processes or assembles materials", x:"A soap factory is secondary industry."},
    {t:"tertiary industry", d:"industry that provides services", x:"Banking is a tertiary industry."},
    {t:"light industry", d:"manufacture of small consumer goods", x:"Soap and textiles are light industry."},
    {t:"heavy industry", d:"manufacture using bulky materials and large plant", x:"Steel making is heavy industry."},
    {t:"agro-processing", d:"turning agricultural produce into processed goods", x:"Palm oil milling is agro-processing."},
    {t:"industrial location", d:"the choice of where to site a factory", x:"Location depends on cost and access."},
    {t:"raw material", d:"the unprocessed input of an industry", x:"Latex is the raw material for rubber goods."},
    {t:"market", d:"the place or people to whom goods are sold", x:"Nearness to market lowers distribution cost."},
    {t:"infrastructure", d:"basic facilities such as roads, power and water", x:"Poor infrastructure deters investment."},
    {t:"trade", d:"the buying and selling of goods and services", x:"Trade may be internal or external."},
    {t:"internal trade", d:"trade taking place within a country", x:"Internal trade uses one currency."},
    {t:"external trade", d:"trade between countries", x:"External trade earns foreign exchange."},
    {t:"transport", d:"the movement of people and goods", x:"Transport links producer to market."},
    {t:"renewable energy", d:"energy from a source that replenishes itself", x:"Hydroelectricity is renewable."},
    {t:"non-renewable energy", d:"energy from a finite source", x:"Petroleum is non-renewable."},
    {t:"hydroelectric power", d:"electricity generated from falling water", x:"Mount Coffee is a hydroelectric station."},
    {t:"biomass", d:"fuel from plant or animal material", x:"Firewood and charcoal are biomass."},
    {t:"solar energy", d:"energy obtained from sunlight", x:"Solar energy suits rural clinics."},
    {t:"grid", d:"the network distributing electricity", x:"The national grid links generation to users."},
    {t:"value addition", d:"increasing worth by processing before sale", x:"Value addition raises export earnings."}
  ],
  facts:[
    {q:"Distinguish primary, secondary and tertiary industry with an example of each.", a:"Primary extracts raw materials — mining, farming, fishing. Secondary processes them — soap making, cement, food processing. Tertiary provides services — trade, transport, banking, education."},
    {q:"State six factors affecting the location of a manufacturing industry.", a:"Nearness to raw materials, especially if bulky or perishable; nearness to market; availability of power and water; supply and cost of labour; transport links; capital; and government policy or incentives."},
    {q:"Why are agro-processing industries usually sited near the farms?", a:"Because the raw material is bulky and perishable. Processing near the source reduces transport cost and spoilage, and the processed product is lighter and keeps longer."},
    {q:"State four benefits of manufacturing industry to Liberia.", a:"It adds value to raw materials that would otherwise be exported unprocessed; it creates employment and skills; it saves foreign exchange through import substitution; and it widens the tax base and stimulates other sectors."},
    {q:"State four problems facing manufacturing in Liberia.", a:"Unreliable and costly electricity; poor roads and port delays; shortage of skilled labour and capital; a small domestic market; and competition from cheap imports."},
    {q:"State three effects of manufacturing on community health and environment.", a:"Air pollution from smoke and dust causing respiratory disease; water pollution from effluent discharged into rivers; and noise, waste and traffic hazards — though industry also raises incomes and funds services."},
    {q:"Distinguish internal from external trade.", a:"Internal trade takes place within a country, using one currency and no customs barriers. External trade crosses national boundaries, involving different currencies, tariffs and documentation."},
    {q:"Name four means of transport and give one advantage of each.", a:"Road transport is flexible and reaches the door; rail carries heavy bulk cheaply over distance; water transport is cheapest for very heavy goods; air transport is fastest for urgent or valuable cargo."},
    {q:"Name four renewable and three non-renewable sources of energy.", a:"Renewable: hydroelectric power, solar, wind, biomass and tidal. Non-renewable: coal, petroleum and natural gas."},
    {q:"State three advantages of hydroelectric power for Liberia.", a:"The rainfall and rivers are abundant so the resource exists; once built it produces no fuel cost and no air pollution; and it is renewable and can serve industry and homes for decades."},
    {q:"Why does Liberia rely heavily on charcoal and firewood?", a:"Grid electricity reaches only part of the population and is costly, while wood is locally available and needs no equipment — but the reliance drives deforestation and causes indoor air pollution."}
  ],
  tf:[
    {s:"Manufacturing is a secondary industry.", a:"true", why:"It processes raw materials into finished goods."},
    {s:"Agro-processing plants are best sited far from the farms.", a:"false", why:"Bulky, perishable produce should be processed near the source to cut transport cost and spoilage."},
    {s:"Hydroelectric power is a renewable source of energy.", a:"true", why:"The water cycle continually replenishes the river flow that drives it."},
    {s:"Banking is a primary industry.", a:"false", why:"Banking is a tertiary industry, providing a service."},
    {s:"Reliable electricity is essential to industrial development.", a:"true", why:"Machinery, refrigeration and processing all depend on a steady power supply."},
    {s:"Air transport is the cheapest way to move heavy bulk goods.", a:"false", why:"Air freight is the most expensive; water transport is cheapest for heavy bulk."},
    {s:"Value addition means exporting raw materials unprocessed.", a:"false", why:"Value addition means processing before sale, so more of the value is captured locally."}
  ],
  sort:{ title:"Sort these industries and energy sources", groups:[
    {name:"Primary industry", items:["mining","farming","fishing","lumbering"]},
    {name:"Secondary industry", items:["cement making","soap manufacture","food processing","furniture making"]},
    {name:"Tertiary industry", items:["banking","transport","tourism","education"]},
    {name:"Renewable energy", items:["hydroelectric","solar","wind","biomass"]},
    {name:"Non-renewable energy", items:["coal","petroleum","natural gas"]},
    {name:"Factors of industrial location", items:["raw materials","power","labour","market","transport"]}
  ]},
  mapwork:{ title:"Siting an industry", caption:"Complete the table by explaining why each factor matters.", items:[
    {p:"Nearness to raw materials", f:"Essential where materials are bulky or perishable, as with sawmilling or fruit canning"},
    {p:"Nearness to market", f:"Reduces distribution cost, important where the product is fragile, bulky or perishable"},
    {p:"Power supply", f:"Reliable electricity is essential for machinery, refrigeration and processing"},
    {p:"Labour", f:"Both the number available and the skills required affect cost and feasibility"},
    {p:"Transport", f:"Roads, rail or port access determine whether inputs arrive and products reach buyers"},
    {p:"Water supply", f:"Many processes need large volumes for cooling, washing or as an ingredient"},
    {p:"Government policy", f:"Tax incentives, industrial zones and regulations can attract or deter investment"},
    {p:"Capital", f:"Determines the scale of plant that can be built and the technology used"}
  ]},
  casestudy:{ title:"Two palm oil mills",
    text:"Two small mills were established in the same year to process palm fruit from the same district. The first was built in the district itself, ten kilometres from the largest plantations. The second was built at the edge of Monrovia, where its owner lived and where electricity was available.\n\nThe district mill paid more for fruit because farmers could deliver it within hours, and it processed fruit that was fresh, giving oil of higher quality and a better price. Its difficulty was power: it ran on a diesel generator at four times the grid tariff. The Monrovia mill had cheap grid power, but its fruit arrived after a day on poor roads. Some had begun to ferment, which raises the free fatty acid content and lowers the grade, and about one load in eight was rejected outright. Transport of the raw fruit — heavy, bulky and largely water — cost more than transporting the finished oil would have done.\n\nAfter four years the Monrovia mill closed and its equipment was bought by the district mill, which has since added a small hydro turbine on a nearby stream. The lesson taught in the county's business classes is that an industry processing a bulky perishable material belongs beside that material, and that cheap power is not worth a long haul of wet fruit.",
    questions:[
      {q:"State two advantages the district mill had.", a:"Farmers could deliver fruit within hours, so it was fresh and gave higher-quality oil; and it could pay more for fruit because transport was short."},
      {q:"What was the district mill's main disadvantage?", a:"No grid power, so it ran a diesel generator at four times the grid tariff."},
      {q:"Explain why the Monrovia mill's fruit lost value.", a:"After a day on poor roads some fruit began to ferment, raising free fatty acid content and lowering the oil grade; about one load in eight was rejected."},
      {q:"Why is transporting raw palm fruit more costly than transporting the oil?", a:"The fruit is heavy and bulky and is largely water, so a lorry carries mostly waste; the extracted oil is far more compact per unit of value."},
      {q:"Which factor of industrial location proved decisive, and why?", a:"Nearness to raw materials — because the material is both bulky and perishable, which outweighed the advantage of cheaper power."},
      {q:"How did the surviving mill solve its power problem?", a:"By adding a small hydro turbine on a nearby stream, using a local renewable resource instead of costly diesel."}
    ]},
  project:{ title:"Industry and energy survey",
    brief:"Investigate one industry and the energy it uses.",
    steps:[
      "Identify a manufacturing or processing business in your area.",
      "Find out what raw materials it uses and where they come from.",
      "Record its source of power and the cost or reliability problems it faces.",
      "Ask the owner which factor most influenced the choice of site.",
      "Present a report stating whether you consider the location well chosen, with reasons."
    ],
    criteria:["A real business studied","Raw materials and their source recorded","Energy source and its problems documented","The owner's location reasoning obtained","A reasoned judgement on the siting"]},
  worked:[
    {q:"A mill processes 8 tonnes of fruit yielding 18% oil. Find the oil produced.", steps:["0.18 \u00d7 8"], a:"1.44 tonnes"},
    {q:"Grid power costs US$0.22 per kWh and diesel US$0.88. Find the ratio.", steps:["0.88 \u00f7 0.22"], a:"4 times as expensive"},
    {q:"A factory uses 900 kWh daily at US$0.22. Find the monthly bill for 30 days.", steps:["900 \u00d7 0.22 = 198 per day","198 \u00d7 30"], a:"US$5 940"},
    {q:"One load in eight is rejected. What percentage is that?", steps:["1 \u00f7 8 = 0.125","\u00d7 100"], a:"12.5%"},
    {q:"A turbine of 45 kW runs 20 hours a day. Find the daily output in kWh.", steps:["45 \u00d7 20"], a:"900 kWh"},
    {q:"Raw ore sells at US$85 a tonne, processed metal at US$430. Find the value added.", steps:["430 \u2212 85"], a:"US$345 per tonne"},
    {q:"A factory employs 46 workers at US$180 a month. Find the annual wage bill.", steps:["46 \u00d7 180 = 8 280 per month","\u00d7 12"], a:"US$99 360"}
  ],
  apply:[
    {q:"Why are cement works always sited near limestone quarries?", a:"Limestone is extremely bulky and cheap per tonne, so transporting it far would cost more than the material is worth. The finished cement is more valuable per tonne and cheaper to move."},
    {q:"Explain why unreliable electricity is such a serious obstacle to Liberian industry.", a:"Interruptions halt production and damage machinery, and refrigerated stock is lost. Firms must buy generators and fuel, which raises costs far above competitors abroad."},
    {q:"How would improved roads affect both farmers and manufacturers?", a:"Farmers would receive higher farm-gate prices as transport costs and spoilage fell; manufacturers would obtain fresher, cheaper raw materials and reach wider markets."},
    {q:"Argue for or against building a large hydroelectric dam in Liberia.", a:"For: abundant rivers, no fuel cost, no air pollution, and enough power to support industry for decades. Against: high capital cost, displacement of communities, flooding of forest and farmland, and disruption of fisheries and sediment downstream."},
    {q:"Why does the growth of tertiary industry usually follow that of secondary industry?", a:"Manufacturing creates incomes and generates demand for banking, transport, insurance, retailing and education, so the service sector expands to serve both the industry and its workers."}
  ],
  activities:[
    "Field trips and excursions to selected factories or plants in Liberia to observe manufacturing processes and write a report",
    "Group discussion on the negative and positive impacts of manufacturing industries",
    "List factors that influence the location and development of manufacturing industries",
    "Discuss the categories of tertiary industry and the means of transport",
    "Map the sources of energy in Liberia and their distribution",
    "Debate the merits of hydroelectric power against other energy sources"
  ],
  materials:[
    "Primary text: General Geography in Diagrams (Pearson)",
    "Abegunde et al., Senior Secondary Geography Book 1",
    "Maps of industry, transport and energy in Liberia",
    "Charts of industrial classification",
    "WASSCE Q & A Papers 1 and 2"
  ],
  assessment:["Oral questions","Assignments","Quiz","Field trip report","Written test"]
},
{
  grade:11, period:"VI", sem:"Two", icon:"📐",
  title:"Geographic Investigation and Statistical Maps",
  subtitle:"Principles of geographic enquiry, and representing data on maps and diagrams",
  outcomes:[
    "Learners are able to analyse map information, reshape distances on maps, locate positions using the grid system and calculate the gradient of slopes",
    "Learners are able to represent statistical data on maps and diagrams"
  ],
  objectives:[
    "Analyse map information and distinguish the various kinds of map",
    "Apply map scales to reduce, enlarge and calculate areas and ground distances",
    "Calculate the gradient of slopes and convert between scales",
    "Locate positions using the grid system and by latitude and longitude",
    "Detect direction using compass and bearing",
    "Design diagrams, profiles and sketches resulting from survey exercises",
    "Construct and interpret statistical maps and diagrams"
  ],
  note:"<b>Geographic investigation</b> follows a sequence: state a question, collect data, present it, analyse it and draw a conclusion. Data is shown on <b>statistical maps</b> — the <b>dot map</b> for distribution, the <b>choropleth</b> shaded by density, the <b>isopleth</b> using lines of equal value, the <b>flow map</b> for movement, and <b>proportional symbols</b> sized by quantity.",
  study:[
    /* ---- course text: Semester Two, Period VI — Geographic Investigation and Statistical Maps (guide pp. 46-47) ---- */
    {k:"h3", t:"Principles of Geographic Investigation"},
    {k:"p", t:"Geographic investigation follows the **enquiry sequence**: ask a geographic **question**; collect the **data** — by field observation, measurement, interview, questionnaire and from records; **present** it in tables, maps and diagrams; **analyse** and interpret it; and **draw a conclusion** that answers the question. Its tools are the map and the survey. Outline the kinds of map and their characteristics — topographical, physical, political, road, weather, geological, demographic — with their importance and uses, and their limitations."},
    {k:"rule"},
    {k:"h3", t:"The Map Scale in Investigation"},
    {k:"p", t:"Recall the definition of the **map scale** and its types — the **representative fraction**, the **statement** and the **linear** scale — with the characteristics of each, and practise the **conversion of map scales** from one form to another. Apply map scales to **reduce and enlarge** maps, and to **calculate areas and ground distances**; calculate the **gradient of slopes**; discover the **positions of places** using the **grid system**, or longitude and latitude; and **detect directions** using the compass and bearing. Use rulers, protractors and strings; draw the prismatic compass and illustrate its direction and bearing. Survey the school compound or playground as a group and prepare a sketch draft of the survey — then **design the diagrams, profiles and sketches** that result from survey exercises."},
    {k:"rule"},
    {k:"h3", t:"Statistical Maps and Diagrams"},
    {k:"p", t:"The **sources of statistical data**: censuses and surveys, official yearbooks and records, ministries and agencies, atlases and gazetteers, and your own field counts. The **use of statistics and diagrams**: they condense figures into shapes the eye compares at a glance, and they map data by place — the dot map, the choropleth, the flow map and proportional symbols. Their **limitations**: figures may be old, incomplete or wrongly gathered; the diagram can mislead by its scale; and the map drops the detail between its lines. **Tabulation** of statistics comes first — arrange the data in rows and columns, total and check — before it is drawn."},
    {k:"rule"},
    {k:"h3", t:"The Graphical Representation of Statistics"},
    {k:"p", t:"**Line graphs** — the simple line graph for one series over time; the **combined** line graph to set two series on one frame; and the **compound** line graph to stack the parts of a whole. **Bar graphs** — the **histogram** of continuous classes; the **simple bar graph** of compared totals; the **divergent bar graph** above and below a base; and the **percentage bar graph** scaled to one hundred. **Circle graphs** — the **pie chart** cut by shares of 360°; the **proportional pie chart**; and the **proportional circle** sized by total. For each, state the advantages and disadvantages, choose the scale with care, and use squared paper to represent statistical data accurately."},
  ],

  focus:[
    "Principles of geographic investigation and the enquiry sequence",
    "Analysing map information and kinds of maps",
    "Map scales: reduction, enlargement, area and distance",
    "Gradient of slopes and scale conversion",
    "The grid system, bearings and compass direction",
    "Survey diagrams, profiles and sketches",
    "Statistical maps: dot, choropleth, isopleth, flow and proportional symbol",
    "Statistical diagrams: bar graph, line graph, pie chart, histogram and divided bar"
  ],
  terms:[
    {t:"geographic investigation", d:"a systematic enquiry into a geographical question", x:"A geographic investigation begins with a question."},
    {t:"hypothesis", d:"a proposed answer to be tested by evidence", x:"State a hypothesis before collecting data."},
    {t:"primary data", d:"information collected first hand by the investigator", x:"A field survey yields primary data."},
    {t:"secondary data", d:"information gathered by others and published", x:"Census figures are secondary data."},
    {t:"sample", d:"a small part chosen to represent the whole", x:"Survey a sample when the whole is too large."},
    {t:"dot map", d:"a map on which each dot represents a fixed quantity", x:"A dot map shows population distribution."},
    {t:"choropleth map", d:"a map with areas shaded by value or density", x:"Darker shading means higher density."},
    {t:"isopleth", d:"a line joining points of equal value", x:"Contours and isobars are isopleths."},
    {t:"flow map", d:"a map with arrows showing movement and volume", x:"A flow map shows trade or migration."},
    {t:"proportional symbol", d:"a symbol sized in proportion to the quantity", x:"Circles of different size show town populations."},
    {t:"bar graph", d:"a chart comparing quantities with bars", x:"A bar graph compares county populations."},
    {t:"divided bar", d:"a bar split to show the parts of a total", x:"A divided bar shows the make-up of exports."},
    {t:"line graph", d:"a graph showing change over time", x:"A line graph traces rainfall by month."},
    {t:"pie chart", d:"a circle divided into sectors showing proportions", x:"A pie chart shows shares of land use."},
    {t:"histogram", d:"a chart of continuous grouped data with touching bars", x:"A histogram shows a frequency distribution."},
    {t:"cross-section", d:"a side view showing relief along a line", x:"Draw a cross-section from the contours."},
    {t:"vertical exaggeration", d:"the factor by which the vertical scale exceeds the horizontal", x:"Vertical exaggeration makes relief visible."},
    {t:"traverse", d:"a survey line of measured legs and bearings", x:"A closed traverse returns to its start."},
    {t:"profile", d:"the outline of the ground surface along a line", x:"A profile shows the relief between two points."}
  ],
  facts:[
    {q:"List the five steps of a geographic investigation.", a:"State the question or hypothesis; collect data (primary or secondary); present the data; analyse it; and draw a conclusion."},
    {q:"Distinguish primary data from secondary data, with an example of each.", a:"Primary data is collected first hand by the investigator, e.g. a questionnaire or field count. Secondary data is gathered by others and published, e.g. census figures or a government report."},
    {q:"State the purpose of each of the dot map and the choropleth map.", a:"A dot map shows the distribution of a feature, each dot standing for a fixed quantity. A choropleth map shades areas by value or density, darker shading meaning a higher figure."},
    {q:"What is an isopleth? Give two examples.", a:"A line joining points of equal value. Contours (equal height) and isobars (equal pressure) are isopleths."},
    {q:"Which statistical diagram is best for showing proportions of a total, and which for change over time?", a:"A pie chart (or divided bar) shows proportions of a total; a line graph shows change over time."},
    {q:"How is the scale of a map converted when a map is enlarged or reduced?", a:"Multiply or divide distances by the linear factor. If a map is enlarged twice, distances double and the scale denominator halves; area changes by the square of the linear factor."},
    {q:"State the information a statistical map must always carry.", a:"A title, a key or legend, the scale, the north arrow, and the source and date of the data."},
    {q:"Why must a sample be representative of the whole population studied?", a:"So that the findings from the small group can safely be applied to the larger group; a biased sample gives a false conclusion."},
    {q:"State three methods of collecting primary data in the field.", a:"Direct observation and counting, the questionnaire or interview, and measurement with instruments such as a tape, compass or rain gauge."}
  ],
  tf:[
    {s:"A choropleth map shades areas according to density or value.", a:"true", why:"Deeper shading represents a higher figure, such as population density."},
    {s:"Each dot on a dot map represents one person only.", a:"false", why:"Each dot represents a fixed chosen quantity, such as 1 000 people, which is stated in the key."},
    {s:"Secondary data is collected first hand by the investigator.", a:"false", why:"Secondary data is gathered by others and published; first-hand data is primary."},
    {s:"Contours are isopleths.", a:"true", why:"A contour joins all points of equal height above sea level."},
    {s:"When a map is enlarged to twice its length, its area doubles.", a:"false", why:"Area changes by the square of the linear factor, so doubling length makes area four times."},
    {s:"A histogram has bars that touch one another.", a:"true", why:"It shows continuous grouped data, so the bars meet across the class boundaries."},
    {s:"A flow map uses arrows to show movement and its volume.", a:"true", why:"The width or number of arrows shows the volume of trade, traffic or migration."}
  ],
  sort:{ title:"Sort these maps, diagrams and data types", groups:[
    {name:"Statistical maps", items:["dot map","choropleth","isopleth map","flow map"]},
    {name:"Statistical diagrams", items:["bar graph","line graph","pie chart","histogram","divided bar"]},
    {name:"Primary data", items:["questionnaire","field count","compass bearing","rain gauge reading"]},
    {name:"Secondary data", items:["census figures","government report","published atlas","textbook table"]}
  ]},
  mapwork:{ title:"Statistical map of Liberia", caption:"Complete the table by stating how each map or diagram shows its data, and when each is used.", items:[
    {p:"Dot map", f:"Each dot equals a fixed quantity; best for showing distribution, such as population or farms"},
    {p:"Choropleth map", f:"Counties shaded by density; darker means higher, such as people per square kilometre"},
    {p:"Isopleth map", f:"Lines of equal value; used for rainfall, pressure or height"},
    {p:"Flow map", f:"Arrows show movement and width shows volume, such as trade or migration routes"},
    {p:"Proportional symbols", f:"Circles or squares sized by quantity, such as town populations"},
    {p:"Pie chart", f:"A circle split into sectors showing the shares of a total, such as land use"},
    {p:"Bar graph", f:"Bars compare separate quantities, such as production by county"},
    {p:"Line graph", f:"A line traces change through time, such as monthly rainfall"}
  ]},
  casestudy:{ title:"The market survey that was believed",
    text:"Two class groups set out to advise a women's gardening co-operative on which vegetable to grow more of for the Monrovia market. The first group asked twenty shoppers, all of them at one supermarket entrance on a single Saturday morning. They reported that lettuce was far the most wanted vegetable and the co-operative planted a large plot.\n\nThe second group drew a map of the city and divided it into six areas. Over two weeks they interviewed a fixed number of shoppers in each area, at markets, street stalls and supermarkets, on both weekdays and Saturdays. They also recorded the prices and the amounts sold by three stallholders for a month. Their figures showed that peppers and bitter balls sold steadily every day, while lettuce sold mainly at weekends and spoiled quickly when unsold.\n\nThe co-operative followed the second report. It planted a steady area of peppers and bitter balls and a small weekend plot of lettuce, and its waste fell sharply. The first group's twenty shoppers had all been weekend supermarket customers, so their answers described only one kind of buyer. The lesson the geography teacher drew was that a sample must represent the whole market, and that a conclusion rests on the way the data was collected.",
    questions:[
      {q:"Why did the first group's survey give a misleading answer?", a:"It sampled only twenty shoppers at one supermarket on a Saturday, so it represented only weekend supermarket buyers, not the whole market."},
      {q:"Give two ways the second group made its sample representative.", a:"It divided the city into six areas and interviewed a fixed number in each; and it worked across markets, stalls and supermarkets on both weekdays and Saturdays over two weeks."},
      {q:"Was the stallholders' sales record primary or secondary data? Explain.", a:"Primary data, because the group recorded the prices and amounts sold itself, first hand, over the month."},
      {q:"Which step of the enquiry sequence did the first group carry out poorly?", a:"Data collection — its sampling method was biased, so the later analysis and conclusion were unsound."},
      {q:"Why was the second group's recommendation safer for the co-operative?", a:"It matched crops to steady daily demand (peppers, bitter balls) and kept only a small plot of the perishable weekend crop, lowering waste and risk."},
      {q:"State one way each group could have presented its findings clearly.", a:"With bar graphs or pie charts of quantities sold, and a choropleth or dot map showing demand across the six city areas."}
    ]},
  project:{ title:"A small geographic investigation",
    brief:"Carry out a simple enquiry of your own from question to conclusion.",
    steps:[
      "Choose a question with a geographical answer, such as where most water sellers stand, or which road is busiest at noon.",
      "State the answer you expect (your hypothesis) before collecting data.",
      "Decide your sample so that it fairly represents the whole, then collect primary data by count, measurement or questionnaire.",
      "Present the findings on a map and a suitable diagram, each with a title, key, scale and north arrow.",
      "Analyse the figures, state whether your hypothesis was supported, and write your conclusion."
    ],
    criteria:["A clear question and hypothesis","A representative sample","Primary data accurately collected","A map and a diagram correctly presented","A conclusion based on the evidence"]},
  worked:[
    {q:"A map at 1:50 000 is reduced so that distances become half. What is the new scale?", steps:["Linear factor = 1/2","Scale denominator doubles: 50 000 \\u00d7 2"], a:"1:100 000"},
    {q:"On a 1:50 000 map two villages are 8 cm apart. Find the ground distance.", steps:["8 \\u00d7 50 000 = 400 000 cm","\\u00f7 100 000 to km"], a:"4 km"},
    {q:"A farm measures 4 cm by 3 cm on a 1:50 000 map. Find its ground area in km^2.", steps:["Ground: 4\\u00d750 000 = 2 km; 3\\u00d750 000 = 1.5 km","Area = 2 \\u00d7 1.5"], a:"3 km^2"},
    {q:"A map is enlarged to twice its length. By what factor does its area increase?", steps:["Area factor = linear factor squared","2 \\u00d7 2"], a:"4 times"},
    {q:"A line 6.4 cm on a 1:25 000 map represents what ground distance in metres?", steps:["6.4 \\u00d7 25 000 = 160 000 cm","\\u00f7 100 to metres"], a:"1 600 m (1.6 km)"},
    {q:"Contours of 200 m and 350 m lie 1 000 m apart on the ground. Find the gradient as a ratio.", steps:["Rise = 350 \\u2212 200 = 150 m","150 : 1 000 simplifies to 1 : 6.67"], a:"About 1 in 6.7"},
    {q:"A bearing is read as 045 degrees true. What compass direction is this?", steps:["0 degrees = north, 90 degrees = east","045 lies halfway"], a:"North-east"},
    {q:"A pie chart represents 360 students. A sector of 60 degrees stands for how many students?", steps:["60/360 of the total","(60 \\u00f7 360) \\u00d7 360"], a:"60 students"}
  ],
  apply:[
    {q:"Why is a dot map unsuitable for showing population density per county?", a:"A dot map shows distribution, not density per area. Counties of different size could hold the same number of dots yet have very different densities; a choropleth map, shaded by people per square kilometre, shows density directly."},
    {q:"Explain why every statistical map needs a key, a scale and a north arrow.", a:"The key tells the reader what each symbol, dot or shade means; the scale allows real distances and areas to be measured; the north arrow fixes orientation. Without them the map cannot be read or compared."},
    {q:"A student concludes that a road is dangerous after watching it for ten minutes at lunchtime. Why is this conclusion weak?", a:"The sample is too short and covers only one time of day. Traffic and risk vary by hour and day, so a fair study needs counts at several times and on several days."},
    {q:"When choosing between a bar graph and a pie chart to compare the exports of five counties, which would you use and why?", a:"A bar graph, because the five counties are separate categories and bars compare their quantities directly. A pie chart is reserved for the parts of a single whole, such as one county's exports by type."},
    {q:"Why do geographers state the source and date on every statistical map?", a:"Data changes over time and may be gathered by different methods. The source and date let the reader judge reliability and tell whether the map is current enough for the decision being made."}
  ],
  activities:[
    "Design and carry out a small group enquiry using a questionnaire, and present the results",
    "Construct dot, choropleth and flow maps from Liberian data supplied by the teacher",
    "Draw bar graphs, line graphs, pie charts and divided bars from the same data set and compare them",
    "Practise enlarging and reducing a map and converting its scale",
    "Draw a cross-section from a contoured map and calculate vertical exaggeration",
    "Measure gradient and convert bearings to compass directions on an Ordnance-type map"
  ],
  materials:[
    "Primary text: General Geography in Diagrams (Pearson)",
    "Abegunde et al., Senior Secondary Geography Books 1 and 2",
    "Topographic maps at 1:50 000 and 1:25 000",
    "Plain paper, graph paper, ruler, protractor and compass",
    "Liberian census and county statistics; WASSCE Q & A Papers 1 and 2"
  ],
  assessment:["Oral questions","Enquiry report","Map and diagram exercises","Quiz","Written test"]
},

/* ================================ GRADE 12 ================================ */
{
  grade:12, period:"I", sem:"One", icon:"\uD83D\uDCD0",
  title:"Map Work, Surveying and Practical Geography",
  subtitle:"Map interpretation, scale and distance, bearings, relief and cross-sections, and field survey methods",
  outcomes:[
    "Learners are able to interpret topographical maps and read features from contours and conventional signs",
    "Learners are able to carry out simple chain and prismatic-compass surveys and plot the results to scale"
  ],
  objectives:[
    "Convert scale from one form to another and calculate ground distance and area",
    "Measure and express gradient, vertical exaggeration and intervisibility",
    "Convert between whole-circle bearings, quadrant bearings and compass directions",
    "Identify relief features from contours and draw accurate cross-sections",
    "Carry out chain survey and compass traversing, recording bearings and distances",
    "Use conventional signs and symbols and draw a labelled field sketch"
  ],
  note:"A <b>map scale</b> may be given as a statement, a ratio or a line scale; on a 1:50&nbsp;000 map one centimetre represents 500 metres on the ground. A <b>bearing</b> is the angle measured clockwise from north: a <b>whole-circle bearing</b> runs 0&ndash;360&deg;, while a <b>quadrant bearing</b> is measured from north or south toward east or west. Contours show <b>relief</b>: close contours mean a steep slope, spaced contours a gentle one; a cross-section gives the side view along a chosen line.",
  study:[
    /* ---- course text: Semester One, Period I — Map Work, Surveying and Practical Geography (guide pp. 48-55) ---- */
    {k:"h3", t:"Kinds of Maps and their Uses"},
    {k:"p", t:"Recall what a **map** is and its characteristics. The kinds you must command: **topographical maps**, showing relief and settlement in detail; **road maps**; **weather maps**; the **atlas**; **geological, demographic and land-use maps**. The importance and uses of maps: to **give information**, to **identify** and **interpret the landscape**, to **find directions and positions**, and to **find distances** — with the limitations of maps always remembered: they flatten the curved earth, omit the too-small, and freeze one moment of time."},
    {k:"rule"},
    {k:"h3", t:"Map Scales: Types and Conversion"},
    {k:"p", t:"The **map scale** relates distance on the map to distance on the ground. Its types: the **representative fraction** (1:50 000), the **statement** ('one centimetre to half a kilometre') and the **linear scale**. Practise the **conversion of map scales** from one to another — 1:50 000 → 1 cm to 0.5 km — then apply the scales to **reduce and enlarge** maps, and to **calculate areas and ground distances**: a 1:50 000 grid square is 1 km on a side and 1 km² in area. Draw maps to scale and draw a linear scale with the ruler."},
    {k:"rule"},
    {k:"h3", t:"Finding Positions and Directions"},
    {k:"p", t:"**Locate positions** on maps using **latitude and longitude**, and with the **grid reference** — the easting then the northing, read from the southwest corner of the square. Draw a grid map to show eastings and northings. **Direction** is given by the **compass points** — the cardinal four, the eight, and the full **sixteen intermediate points of the compass** — and by the **angular bearing**, the angle clockwise from north; use both together to find the direction of a structure from a given point. Distinguish the **types of north**: **magnetic, true** and **grid north**, and correct from one to the other."},
    {k:"rule"},
    {k:"h3", t:"Conventional Signs and Symbols"},
    {k:"p", t:"**Conventional signs and symbols** are the standard marks by which maps carry their information. Their types: **point symbols** (a spot height, a building), **line symbols** (roads, rivers, boundaries), **literal symbols** (letters and figures — 'PS' for police station), **pictorial symbols** (a tiny picture — a tree for forest) and **colour symbols** (blue for water, green for forest, brown for relief). Their importance and uses: they load the map with detail in little space, and one learned key opens every map. Their limitation: a symbol shows the kind of feature, not its exact look or size. Draw the common signs and symbols."},
    {k:"rule"},
    {k:"h3", t:"Methods of Representing Relief"},
    {k:"p", t:"**Relief** is the shape and height of the land, and maps show it seven ways: **contours** — lines joining points of equal height, the chief method; the **spot height**, a figure at a point; the **trigonometrical station (trig. point)**, a fixed survey mark with its height; the **bench mark**, the surveyor's level mark; **hill shading**, light and shade on the slopes; **form lines**, approximate contours sketchily drawn; and **hatchures**, short brush-strokes down the slope. State the characteristic features, and the advantages and disadvantages, of each method."},
    {k:"rule"},
    {k:"h3", t:"Slopes, Contour Landforms, Gradient and Cross-Sections"},
    {k:"p", t:"The **types of slope** read from the contour spacing: **concave** (contours far apart above, close below), **convex** (close above, apart below), **steep**, **gentle**, **even** and **uneven**. The **contour landforms** to identify: the **plateau** with close contours rimming a high plain; the **ridge**, a long high back; the **valley**, its contours pointing upstream in a V; the **spur**, its contours pointing down-slope; the **col** and **saddle**, the low pass between two heights; the **pass** and **gap**; the **knoll**, a small isolated hill; and the **cuesta**, a ridge of steep dip slope and gentle back. The **gradient** is the ratio of vertical rise to horizontal distance — a rise of 50 m in 2 000 m is 1 in 40 — and the **cross-section** drawn along a chosen line shows the profile of the land; when its vertical scale is enlarged, calculate and state the **vertical exaggeration**."},
    {k:"rule"},
    {k:"h3", t:"Elementary Surveying"},
    {k:"p", t:"**Survey** is the measurement of land to fix its positions and areas. The **chain survey equipment** and its uses: the **chain or tape** to measure distance; the **ranging poles** to keep the line; the **arrows (pins)** to count the chain lengths; the **optical square and cross-staff** to turn right angles; the **offset staff** for side measures; the **clinometer** for slope; the **prismatic compass** for bearings; and the **field book** for the sketch notes. The **traverse** — a chain of lines run from station to station — is **closed** when it returns to its start and **open** when it does not; run it by **chain surveying** with baseline, offsets and tie lines, or by **prismatic-compass traversing**, recording the fore-bearing of each leg and checking with the back-bearing, which should differ by 180°. State the advantages and disadvantages of the survey methods, survey the school compound, and design the diagrams, profiles and sketches resulting from the survey. The modern extension is the **Geographic Information System (GIS)** — the computer handling of mapped data, fed by satellite **remote sensing** and the GPS."},
  ],

  focus:[
    "Scale conversion: statement, ratio and linear scale; distance and area",
    "Direction: true, magnetic and grid north; whole-circle and quadrant bearings",
    "Relief and contour interpretation: ridges, valleys, spurs, saddles and cliffs",
    "Cross-sections, vertical exaggeration and intervisibility",
    "Gradient: rise over run, expressed as a ratio or angle",
    "Chain survey: baseline, offsets, tie lines and the surveyor's field book",
    "Prismatic-compass traversing: fore- and back-bearings, closing a traverse",
    "Conventional signs, symbols and field sketches"
  ],
  terms:[
    {t:"scale", d:"the relationship between distance on a map and distance on the ground", x:"A scale of 1:50 000 means 1 cm represents 500 m."},
    {t:"linear scale", d:"a printed line divided into ground-distance units", x:"Use the linear scale to read distance directly."},
    {t:"bearing", d:"an angle measured clockwise from north to a line", x:"A bearing of 090 degrees points due east."},
    {t:"whole-circle bearing", d:"a bearing measured from 0 to 360 degrees clockwise", x:"South has a whole-circle bearing of 180 degrees."},
    {t:"quadrant bearing", d:"a bearing measured from north or south toward east or west", x:"N45 degrees E is a quadrant bearing."},
    {t:"fore-bearing", d:"the bearing taken in the direction of survey", x:"Record the fore-bearing from A to B."},
    {t:"back-bearing", d:"the bearing from the far point back to the start", x:"A back-bearing differs from the fore-bearing by 180 degrees."},
    {t:"contour", d:"a line joining points of equal height above sea level", x:"Contours show the shape of the land."},
    {t:"relief", d:"the differences in height and shape of the land surface", x:"Hills and valleys make up the relief."},
    {t:"gradient", d:"the steepness of a slope, rise compared with horizontal distance", x:"The road climbs with a gradient of 1 in 10."},
    {t:"vertical exaggeration", d:"the amount by which a cross-section's vertical scale exceeds its horizontal scale", x:"A vertical exaggeration of 2 makes slopes look twice as steep."},
    {t:"cross-section", d:"a drawing showing the relief along a chosen line", x:"Draw a cross-section between the two hilltops."},
    {t:"intervisibility", d:"whether two points can see each other over intervening ground", x:"A ridge between two points blocks intervisibility."},
    {t:"chain survey", d:"a survey using a measured baseline and perpendicular offsets", x:"Chain survey suits a small level plot."},
    {t:"offset", d:"a short measured distance at right angles from the baseline to a feature", x:"Record each offset with its chainage."},
    {t:"traverse", d:"a series of connected survey lines with measured lengths and bearings", x:"A closed traverse returns to its starting point."},
    {t:"field book", d:"the surveyor's record of measurements, sketches and notes", x:"Enter every reading in the field book at once."},
    {t:"conventional sign", d:"an agreed symbol used on maps to stand for a feature", x:"A blue line is the conventional sign for a river."},
    {t:"field sketch", d:"a labelled drawing of the landscape made in the field", x:"Annotate the field sketch with landforms and land use."},
    {t:"bench mark", d:"a fixed point whose height above sea level is known", x:"Heights are levelled from a bench mark."}
  ],
  facts:[
    {q:"On a map of 1:25 000, what ground distance does 1 cm represent?", a:"25 000 cm = 250 metres."},
    {q:"State the three ways a map scale may be expressed.", a:"As a statement (one centimetre to the kilometre), as a ratio or representative fraction (such as 1:50 000), and as a printed linear scale line."},
    {q:"Give the whole-circle bearings for north, east, south and west.", a:"North 000 degrees, east 090 degrees, south 180 degrees, west 270 degrees."},
    {q:"How do you convert a fore-bearing to a back-bearing?", a:"Add 180 degrees if the fore-bearing is less than 180, or subtract 180 if it is greater."},
    {q:"What do closely spaced contours indicate, and what do widely spaced contours indicate?", a:"Closely spaced contours indicate a steep slope; widely spaced contours indicate a gentle slope."},
    {q:"Name four relief features identifiable from contours.", a:"A hill or peak, a ridge, a valley (V-shape pointing upstream), a spur, a saddle or col, and a cliff or escarpment."},
    {q:"How is gradient calculated?", a:"Gradient equals vertical rise divided by horizontal distance, expressed as 1 in so many, e.g. a rise of 50 m over 500 m is 1 in 10."},
    {q:"List the main instruments used in a simple chain survey.", a:"A measuring tape or chain, ranging poles, arrows or pegs, and a field book and pencil; a prismatic compass is added for a compass traverse."},
    {q:"Why is a closed traverse checked for closing error?", a:"Because errors in bearings or distances make the final leg fail to return to the starting point; the gap (closing error) shows the size of the mistake before adjustment."}
  ],
  tf:[
    {s:"On a 1:50 000 map, 4 cm represents 2 km on the ground.", a:"true", why:"4 \\u00d7 50 000 cm = 200 000 cm = 2 km."},
    {s:"A bearing of 180 degrees points due east.", a:"false", why:"180 degrees points due south; east is 090 degrees."},
    {s:"A back-bearing is found by adding or subtracting 180 degrees.", a:"true", why:"The reverse direction differs by exactly half a turn."},
    {s:"Contours that are close together show a gentle slope.", a:"false", why:"Close contours show a steep slope; spaced contours show a gentle one."},
    {s:"A cross-section shows the relief as seen from directly above.", a:"false", why:"It shows a side view along a line; the view from above is the plan or map."},
    {s:"An offset is measured at right angles from the baseline.", a:"true", why:"Offsets locate features perpendicular to the chain line."},
    {s:"A closed traverse should end at its starting point.", a:"true", why:"Any gap is closing error from measurement mistakes."}
  ],
  sort:{ title:"Sort these survey and map elements", groups:[
    {name:"Scales and measurement", items:["linear scale","representative fraction","gradient","vertical exaggeration"]},
    {name:"Direction", items:["fore-bearing","back-bearing","whole-circle bearing","quadrant bearing","true north"]},
    {name:"Relief features", items:["ridge","valley","spur","saddle","escarpment"]},
    {name:"Survey records", items:["field book","offset","chainage","field sketch","bench mark"]}
  ]},
  mapwork:{ title:"Interpreting a topographical map", caption:"Complete the table by stating how each feature is recognised on the map.", items:[
    {p:"Steep slope", f:"Contours drawn close together"},
    {p:"Gentle slope", f:"Contours widely and evenly spaced"},
    {p:"River valley", f:"Contours form a V whose point faces upstream, with the river along the valley floor"},
    {p:"Hilltop or peak", f:"Closed contours rising inward, often with a spot height or trig point"},
    {p:"Saddle or col", f:"A low gap between two higher areas, with contours rising on two sides and falling on the other two"},
    {p:"Cliff or escarpment", f:"Contours merge or run very close together along a line"},
    {p:"Settlement", f:"Clustered buildings along a road or river, shown by the conventional signs"},
    {p:"North point", f:"The arrow showing true north from which bearings are measured"}
  ]},
  casestudy:{ title:"The survey of the school farm",
    text:"A geography class was asked to map the school farm, a level rectangle of about two hectares holding a poultry shed, a well, a stand of banana trees and the boundary with a neighbouring plot. The class split into two teams.\n\nThe first team measured a single long side with a tape and paced the rest of the distances, sketching the features where they guessed them to be. When they plotted their map, the well fell outside the boundary and the poultry shed overlapped the bananas; the angles were wrong because no one had taken a bearing.\n\nThe second team set out a straight baseline between two ranging poles along the firmest edge, and measured it twice with the tape. From points recorded by chainage along this line they dropped perpendicular offsets to the well, the shed corners and the banana clump, measuring each offset and noting it in a field book. They checked each corner with a prismatic compass, recording fore- and back-bearings, and closed the traverse back on the start. Their plot, drawn to scale that evening, placed every feature inside the boundary with a small closing error of well under a metre, which they adjusted. The school used their map to plan a new fence.\n\nThe teacher's conclusion was that pacing and guessing may show what a place looks like, but a measured baseline, perpendicular offsets and checked bearings are what turn a sketch into a map.",
    questions:[
      {q:"State two mistakes made by the first team.", a:"They paced distances instead of measuring them, and they took no bearings, so distances and angles were both wrong."},
      {q:"Why did the second team measure the baseline twice?", a:"To check the tape reading and remove gross error before offsets were taken from it, since every other measurement depends on the baseline."},
      {q:"What is an offset, and how was it used here?", a:"A short measured distance at right angles from the baseline to a feature. Offsets from recorded chainages fixed the position of the well, shed corners and banana clump."},
      {q:"Explain the purpose of the back-bearings.", a:"Back-bearings check the fore-bearings; each should differ by 180 degrees, revealing compass or reading errors before plotting."},
      {q:"What was the closing error, and why was it acceptable?", a:"The small gap by which the traverse failed to return exactly to the start. It was under a metre on a two-hectare survey, small enough to adjust."},
      {q:"Why is a field book preferable to notes written later from memory?", a:"Readings are recorded on the spot before they are forgotten or confused, and the sketch keeps their relationships clear."}
    ]},
  project:{ title:"Chain and compass survey of a small plot",
    brief:"Survey and plot a real piece of ground near the school to a stated scale.",
    steps:[
      "Choose a level plot with clear boundaries and lay out a straight baseline between two ranging poles.",
      "Measure the baseline twice with a tape and record the length as a check.",
      "At measured chainages, take perpendicular offsets to each boundary and feature, entering them in a field book.",
      "Take fore- and back-bearings along the boundary lines with a prismatic compass.",
      "Plot the survey to scale, add a title, scale, north arrow and key, and state the closing error."
    ],
    criteria:["Baseline measured and checked","Offsets recorded with chainages","Bearings taken and checked","Map drawn correctly to scale","Title, scale, north arrow and key present"]},
  worked:[
    {q:"On a 1:25 000 map a road is 12 cm long. Find its ground length in km.", steps:["12 \\u00d7 25 000 = 300 000 cm","\\u00f7 100 000"], a:"3 km"},
    {q:"Convert a fore-bearing of 065 degrees to its back-bearing.", steps:["065 is below 180, so add 180","065 + 180"], a:"245 degrees"},
    {q:"Two points differ in height by 120 m and are 600 m apart horizontally. Find the gradient.", steps:["Rise : run = 120 : 600","Divide both by 120"], a:"1 in 5"},
    {q:"A vertical scale of 1 cm to 50 m is used against a horizontal scale of 1 cm to 250 m. Find the vertical exaggeration.", steps:["VE = vertical scale \\u00f7 horizontal scale","250 \\u00f7 50"], a:"5 times"},
    {q:"A lake is 5 cm by 4 cm on a 1:50 000 map. Find its approximate ground area.", steps:["5 cm = 2.5 km; 4 cm = 2 km","2.5 \\u00d7 2"], a:"5 km^2"},
    {q:"Express the quadrant bearing S30 degrees W as a whole-circle bearing.", steps:["South = 180; 30 toward west adds 30","180 + 30"], a:"210 degrees"},
    {q:"A bearing is 315 degrees. Give its eight-point compass direction.", steps:["270 = west, 360/000 = north","315 lies halfway"], a:"North-west"},
    {q:"From a 1:10 000 plan, 1 cm equals how many metres on the ground?", steps:["10 000 cm","\\u00f7 100"], a:"100 m"}
  ],
  apply:[
    {q:"Why is a large-scale map (such as 1:10 000) better than a small-scale map (such as 1:1 000 000) for planning a farm fence?", a:"A large-scale map shows a small area in detail, so individual buildings, trees and boundaries are visible and distances are precise. A small-scale map shows a wide area but cannot show the detail a fence line needs."},
    {q:"Explain how a cross-section helps decide whether two villages can see each other for a radio mast.", a:"The section shows the ground profile along the line between them. If a hill or ridge rises above the sight line, the points are not intervisible and a taller mast or a relay is needed."},
    {q:"Why must offsets be perpendicular to the baseline?", a:"The plot positions each feature by its chainage along the line and its perpendicular distance from it. A sloping offset gives a wrong distance and therefore a wrong position on the map."},
    {q:"A surveyor finds a closing error of 20 metres on a 200-metre traverse. Should the map be accepted? Explain.", a:"No. An error of one-tenth of the traverse length is far too large; it signals a serious mistake in a bearing or tape reading. The work should be re-checked, not merely adjusted."},
    {q:"Why do maps use conventional signs rather than pictures of each feature?", a:"Pictures vary with the artist and clutter the map. Agreed conventional signs are compact, standard and instantly read by anyone, leaving the map clear at any scale."}
  ],
  activities:[
    "Measure the school compound by chain survey and plot it to scale",
    "Practise taking fore- and back-bearings with a prismatic compass around a closed traverse",
    "Convert scale from ratio to statement and linear scale, and calculate distance and area",
    "Draw cross-sections from contoured maps and compute vertical exaggeration",
    "Identify relief features and judge intervisibility on topographical sheets",
    "Draw and annotate field sketches of the local landscape"
  ],
  materials:[
    "Primary text: Practical Geography for Senior Secondary Schools",
    "Topographical maps at 1:50 000 and 1:25 000",
    "Measuring tapes, ranging poles, pegs and arrows",
    "Prismatic compasses, clinometers and protractors",
    "Graph paper, drawing sets and field notebooks; WASSCE Q & A Paper 1"
  ],
  assessment:["Field survey exercise","Map interpretation test","Scale and bearing drills","Cross-section drawing","Written examination"]
},

{
  grade:12, period:"II", sem:"One", icon:"\uD83D\uDC65",
  title:"Population Geography",
  subtitle:"World and Liberian population, distribution and density, migration, population structure and census",
  outcomes:[
    "Learners are able to account for the distribution, density and movement of population and interpret population data",
    "Learners are able to explain the causes and consequences of population change in Liberia and the world"
  ],
  objectives:[
    "Describe the size, distribution and density of the world's and Liberia's population",
    "Explain the factors that influence population distribution",
    "Distinguish birth rate, death rate, natural increase and growth rate",
    "Interpret population pyramids and the stages of the demographic transition",
    "Explain the causes, types and effects of migration, including rural-urban migration",
    "Describe the importance and conduct of a population census"
  ],
  note:"<b>Population distribution</b> is how people are spread across an area; <b>population density</b> is the average number of people per square kilometre. Population grows by <b>natural increase</b> (births minus deaths) and by <b>net migration</b> (immigrants minus emigrants). A <b>population pyramid</b> shows the numbers by age and sex: a broad-based pyramid signals high birth and death rates and rapid growth. <b>Monrovia</b> holds a large share of Liberia's population because of its port, jobs and services, drawing young migrants from the counties.",
  study:[
    /* ---- course text: Semester One, Period II — Population Geography (guide pp. 10-11, 59) ---- */
    {k:"h3", t:"World Population and its Distribution"},
    {k:"p", t:"The concept of **world population** — its definition, size, characteristics and growth — carries the terms of population study: birth rate, death rate, fertility, natural increase, growth rate, density, census. The factors affecting its growth run from health and food to the status of women; the reasons for its rapid growth lie in death rates that have fallen while birth rates have not. The **distribution pattern** divides the world into the **densely populated** regions — fed by fertile soil, water, mild climate and jobs — the **moderately populated**, and the **sparsely populated** deserts, forests and cold lands. Draw population maps indicating the dense and the sparse regions, and explain the factors — relief, climate, water, soil, resources and history — behind each."},
    {k:"rule"},
    {k:"h3", t:"The Population of Liberia"},
    {k:"p", t:"Describe the size, distribution and density of Liberia's population by county: the heavy share that lives in **Monrovia** and Montserrado, drawn by the port, the jobs and the services; the thicker settlement of the coastal and border counties; the thinner interior. Account for the pattern with the factors above, and name the over- and under-populated regions of Liberia."},
    {k:"rule"},
    {k:"h3", t:"Population Change and its Measures"},
    {k:"p", t:"Population changes by **natural increase** — the birth rate over the death rate — and by **net migration**. Distinguish the birth rate, the death rate, the rate of natural increase and the growth rate. Read the **population pyramid**, with its bars of age and sex: the broad-based pyramid of rapid growth, the narrow-based of slow growth, and the columns of the aged societies. Trace the **stages of the demographic transition** — from high birth and death rates, through falling death rates and expanding numbers, to low rates and stable numbers. Compute the measures from data: density, birth rate per thousand, growth rate."},
    {k:"rule"},
    {k:"h3", t:"Migration"},
    {k:"p", t:"Explain the factors that influence **population movements**: the **push** of poor land, no jobs, no services and insecurity; the **pull** of work, schools, hospitals and family. Treat the **consequences of migration** at the **source** — lost young labour, remittances home — and at the **receiving region** — labour and market, but crowded housing and strained services; Liberia's rural-urban migration and its war-time displacements are the near examples. Suggest the solutions that balance development between county and capital."},
    {k:"rule"},
    {k:"h3", t:"The Population Census"},
    {k:"p", t:"Discuss **why and how a population census is conducted**: the count of every person, by age, sex, household and work, taken on a census night by trained enumerators, processed and published — the **de facto** count where people are, the **de jure** count where they usually live. Its importance: planning the schools, clinics and roads, dividing representation and revenue, and measuring every other population rate. Its difficulties in Liberia — remote roadless places, a mobile people, cost and trained staff — and how they are met."},
  ],

  focus:[
    "World population: size, growth over time and the major concentrations",
    "Population of Liberia: size, distribution and density by county",
    "Factors affecting distribution: relief, climate, water, soil, resources and history",
    "Birth rate, death rate, natural increase and growth rate",
    "Population pyramids and the demographic transition model",
    "Migration: types, causes (push and pull) and effects on origin and destination",
    "Urbanisation and rural-urban migration in Liberia",
    "The census: purpose, methods, problems and uses"
  ],
  terms:[
    {t:"population", d:"the total number of people living in an area", x:"Liberia's population is counted in a census."},
    {t:"population distribution", d:"the way people are spread across an area", x:"Population distribution in Liberia favours the coast."},
    {t:"population density", d:"the average number of people per unit area", x:"Density is found by dividing people by square kilometres."},
    {t:"birth rate", d:"live births per 1 000 people in a year", x:"A high birth rate broadens the base of the pyramid."},
    {t:"death rate", d:"deaths per 1 000 people in a year", x:"Better health care lowers the death rate."},
    {t:"natural increase", d:"birth rate minus death rate", x:"Natural increase is the main source of population growth."},
    {t:"growth rate", d:"the annual percentage change in population", x:"The growth rate includes migration as well as natural increase."},
    {t:"life expectancy", d:"the average number of years a person can expect to live", x:"Life expectancy rises as health improves."},
    {t:"dependency ratio", d:"the ratio of dependants (young and old) to working-age people", x:"Many children raise the dependency ratio."},
    {t:"population pyramid", d:"a bar chart of population by age group and sex", x:"A wide base means many young people."},
    {t:"demographic transition", d:"the shift from high birth and death rates to low ones as a country develops", x:"Development moves a country through the demographic transition."},
    {t:"migration", d:"the movement of people to settle, permanently or for a period", x:"Migration changes the population of both areas."},
    {t:"emigrant", d:"a person who leaves a country to settle elsewhere", x:"Emigrants leave their home county for the city."},
    {t:"immigrant", d:"a person who arrives to settle in a country or area", x:"Monrovia receives many immigrants from the counties."},
    {t:"rural-urban migration", d:"the movement of people from countryside to towns", x:"Rural-urban migration swells Monrovia's population."},
    {t:"push factor", d:"a condition that drives people away from an area", x:"Lack of jobs is a push factor."},
    {t:"pull factor", d:"an attraction that draws people to an area", x:"Schols and hospitals are pull factors of cities."},
    {t:"urbanisation", d:"the rising share of a population living in towns", x:"Urbanisation follows the growth of industry."},
    {t:"census", d:"the official counting of a population and its characteristics", x:"A census is usually held every ten years."},
    {t:"overpopulation", d:"when an area's people exceed the resources that can support them well", x:"Overpopulation strains schools and farmland."}
  ],
  facts:[
    {q:"Define population density and state how it is calculated.", a:"The average number of people per unit area. It is calculated by dividing total population by total area, usually people per square kilometre."},
    {q:"State four factors that encourage a high population density.", a:"Fertile soil and reliable water; a favourable climate; flat or gently rolling relief; and jobs from industry, mining, trade or administration in towns."},
    {q:"Distinguish natural increase from overall population growth.", a:"Natural increase is births minus deaths. Overall growth is natural increase plus net migration (immigrants minus emigrants)."},
    {q:"Give three push factors and three pull factors in rural-urban migration.", a:"Push: lack of jobs and schools, poor services and limited farmland. Pull: employment, better schools and hospitals, and the excitement and opportunities of city life."},
    {q:"Describe the shape of a population pyramid for a country with rapid growth.", a:"It has a very broad base (many children) and narrows quickly upward, showing high birth rates, high death rates and few old people."},
    {q:"Name the four main stages of the demographic transition.", a:"High stationary (high birth and death rates); early expanding (death rate falls); late expanding (birth rate falls); and low stationary (both low and stable)."},
    {q:"State three effects of rural-urban migration on the countryside.", a:"It leaves fewer young workers, so farms lose labour and the elderly and children remain; remittances sent home can raise incomes; and services may decline as population falls."},
    {q:"State three effects of rapid urban growth on a city like Monrovia.", a:"Pressure on housing leading to slums, strain on water and electricity, traffic congestion, unemployment and informal trading, alongside a larger labour force and market."},
    {q:"Why is a population census important to government?", a:"It provides the figures for planning schools, clinics and roads, for dividing revenue and representation, and for measuring birth rates, death rates and migration."},
    {q:"Give three problems that make a census difficult in Liberia.", a:"Remote and roadless areas, a mobile or displaced population, shortage of trained enumerators and funds, and the need to reach people in the rainy season."}
  ],
  tf:[
    {s:"Population density measures how people are spread over an area.", a:"false", why:"Distribution describes the spread; density is the average number per unit area."},
    {s:"Natural increase equals birth rate minus death rate.", a:"true", why:"Excess of births over deaths is natural increase."},
    {s:"A broad-based population pyramid indicates rapid population growth.", a:"true", why:"A wide base means many children being born each year."},
    {s:"Better medical care mainly causes the birth rate to fall first.", a:"false", why:"It causes the death rate (especially infant deaths) to fall first; the birth rate falls later."},
    {s:"Lack of jobs in the countryside is a pull factor.", a:"false", why:"It drives people away, so it is a push factor; city jobs are the pull."},
    {s:"A census counts people and records their age, sex and occupation.", a:"true", why:"These characteristics are needed for planning."},
    {s:"Emigrants leave a country while immigrants arrive.", a:"true", why:"Emigration is departure; immigration is arrival."}
  ],
  sort:{ title:"Sort these population terms and factors", groups:[
    {name:"Measures of population", items:["birth rate","death rate","growth rate","life expectancy","dependency ratio"]},
    {name:"Push factors", items:["unemployment","poor schools","land shortage","conflict"]},
    {name:"Pull factors", items:["jobs","universities","hospitals","entertainment"]},
    {name:"Effects on a growing city", items:["slum housing","traffic congestion","informal trade","larger labour force"]}
  ]},
  mapwork:{ title:"Mapping Liberia's population", caption:"Complete the table by stating the distribution pattern and one reason for it.", items:[
    {p:"Greater Monrovia (Montserrado)", f:"By far the densest concentration; the capital, port and main industries attract migrants"},
    {p:"Coastal counties", f:"Moderate density; fishing, trade, ports and roads support larger towns"},
    {p:"Inland counties (Lofa, Nimba)", f:"Denser in fertile farming and mining areas such as Lofa's agriculture and Nimba's iron ore"},
    {p:"Forest interior (Sinoe, River Cess, Gbarpolu)", f:"Sparse; dense forest, poor roads and few towns limit settlement"},
    {p:"Mining belts", f:"Localised clusters around iron ore and gold workings"},
    {p:"Border trading towns", f:"Smaller concentrations where cross-border trade gathers people"}
  ]},
  casestudy:{ title:"Two brothers, two paths",
    text:"Two brothers grew up in a farming town in Lofa County. The older brother stayed. He inherited his father's upland rice and cassava fields, married, and raised his children in the town. In good years the harvest fed the family and a surplus was sold; in bad years, when rains were late, money was short and the nearest clinic was a long walk. The younger brother left for Monrovia at nineteen. He first sold cold water and phone credit on the street, then found work loading lorries at a warehouse, and after some years rented a room in a crowded yard and learned to repair generators.\n\nEach month the younger brother sent money home. It paid his nieces' school fees and, one year, bought the older brother a small milling machine so rice could be hulled locally and sold at a better price. Yet when the younger brother visited, he spoke of the city's cost: high rent, the risk of illness without steady work, and traffic that swallowed hours. The older brother's town, meanwhile, had fewer and fewer young men left to clear and work the farms, and some houses stood empty.\n\nThe family's story is the county's in miniature: the young and ambitious move to the city for jobs and services and send remittances home, while the countryside loses labour and the city gains people faster than it can house and employ them.",
    questions:[
      {q:"Identify one push factor and one pull factor in the younger brother's move.", a:"Push: limited jobs and the distant clinic in the farming town. Pull: the jobs, income and opportunities available in Monrovia."},
      {q:"What were the remittances, and how did they help the home town?", a:"Money sent back each month. It paid school fees and bought a milling machine that let rice be hulled locally and sold for a better price."},
      {q:"State one effect of migration on the countryside shown in the story.", a:"The loss of young men, leaving fewer people to clear and work the farms and some houses empty."},
      {q:"State two difficulties the younger brother faced in Monrovia.", a:"High rent and the risk of illness without steady work, and long hours lost to traffic congestion."},
      {q:"How did the milling machine change the local economy?", a:"It added value locally — rice could be hulled in the town instead of being sold raw — raising the price farmers received."},
      {q:"Explain whether migration benefited the family overall.", a:"It gave the family city income and remittances that funded education and equipment, but it also divided the family and depleted farm labour; the benefits came with real costs."}
    ]},
  project:{ title:"A migration and population enquiry",
    brief:"Investigate migration in your own community and present the findings.",
    steps:[
      "Survey households to find how many adults were born elsewhere and where they came from.",
      "Ask the reasons for moving and record them as push or pull factors.",
      "Estimate which age groups move most and where the young people go.",
      "Find out whether money is sent home and what it is spent on.",
      "Present the results with a bar graph of reasons and a flow map of movements, and write a conclusion."
    ],
    criteria:["Households surveyed and recorded","Reasons classified as push or pull","Age and destination patterns identified","Remittances and their use documented","Graph and flow map correctly presented"]},
  worked:[
    {q:"A county has 400 000 people and 8 000 km^2. Find its population density.", steps:["400 000 \\u00f7 8 000"], a:"50 people per km^2"},
    {q:"A population of 1 000 000 has 35 000 births in a year. Find the birth rate per 1 000.", steps:["35 000 \\u00f7 1 000 000 \\u00d7 1 000"], a:"35 per 1 000"},
    {q:"Birth rate is 40 per 1 000 and death rate 12 per 1 000. Find the rate of natural increase.", steps:["40 \\u2212 12"], a:"28 per 1 000 (2.8%)"},
    {q:"A town of 200 000 grows at 3% a year. How many people are added in the first year?", steps:["3% of 200 000 = 0.03 \\u00d7 200 000"], a:"6 000 people"},
    {q:"50 000 people leave a district while 20 000 arrive. Find the net migration.", steps:["20 000 \\u2212 50 000"], a:"\\u221230 000 (a net loss)"},
    {q:"Of 600 000 people, 360 000 are aged 15-64 and the rest are dependants. Find the dependency ratio.", steps:["Dependants = 240 000","240 000 : 360 000 simplifies to 2:3"], a:"2 dependants per 3 workers (about 67 per 100)"},
    {q:"A pyramid shows 45% of people under 15. In a population of 2 000 000, how many is that?", steps:["0.45 \\u00d7 2 000 000"], a:"900 000"},
    {q:"A city grows from 500 000 to 800 000 in 10 years. Find the total percentage increase.", steps:["Increase = 300 000","(300 000 \\u00f7 500 000) \\u00d7 100"], a:"60% over 10 years"}
  ],
  apply:[
    {q:"Why do governments want to know the population of every county rather than only the national total?", a:"National totals hide where people live. Schools, clinics, roads and revenue must be allocated to places according to their actual numbers and age structure, which only area-level census data reveals."},
    {q:"Explain why a country with very high birth rates faces a heavy burden even though its population is young.", a:"Many children mean high spending on schools, clinics and food for people who are not yet working. The dependency ratio is high, so each working adult supports many dependants, slowing saving and development."},
    {q:"How could a county reduce the loss of its young people to Monrovia?", a:"By creating local jobs through processing farm produce and small industries, improving roads and electricity, and providing good secondary schools and clinics, so the pull of the city is matched by opportunities at home."},
    {q:"Why is the death rate the first to fall as a country develops?", a:"Development brings clean water, vaccines, basic medicine and better food, which quickly reduce deaths — especially among infants — while family size and birth rates take a generation to adjust."},
    {q:"Suggest one advantage and one danger of rapid urbanisation for Liberia.", a:"Advantage: cities concentrate workers, markets and services, supporting industry and trade. Danger: if growth outruns housing, water and jobs, slums, congestion, unemployment and poor sanitation spread."}
  ],
  activities:[
    "Draw and compare population pyramids for Liberia and a developed country",
    "Map the distribution and density of Liberia's population by county",
    "Graph birth and death rates through the demographic transition",
    "Interview families about migration and chart the reasons as push and pull factors",
    "Calculate density, birth rate, death rate and natural increase from given data",
    "Debate the benefits and problems of rural-urban migration"
  ],
  materials:[
    "Primary text: Human and Regional Geography for Senior Secondary Schools",
    "Abegunde et al., Senior Secondary Geography Book 2",
    "Liberia census reports and county population tables",
    "Population pyramids and world population charts",
    "Graph paper and calculators; WASSCE Q & A Papers 1 and 2"
  ],
  assessment:["Data-response exercises","Map and pyramid work","Enquiry report","Quiz","Written test"]
},

{
  grade:12, period:"III", sem:"One", icon:"\uD83C\uDFD8\uFE0F",
  title:"Settlement Geography",
  subtitle:"Rural and urban settlements, site and situation, urban land use, urbanisation and central place functions",
  outcomes:[
    "Learners are able to explain the location, growth and internal structure of settlements",
    "Learners are able to compare rural and urban settlements and account for urban problems and planning"
  ],
  objectives:[
    "Distinguish rural from urban settlements and classify settlements by size and function",
    "Explain site and situation and the factors that lead a settlement to grow",
    "Describe the pattern of urban land use and the functions of town zones",
    "Outline the functions of settlements: market, administrative, port, mining, educational",
    "Explain the causes and problems of rapid urban growth and the need for planning",
    "Describe rural settlement patterns: dispersed, nucleated and linear"
  ],
  note:"A <b>settlement</b> is a place where people live. Its <b>site</b> is the actual ground it stands on — flat land, water supply, dry ground, a river crossing — while its <b>situation</b> is its position relative to other places: routes, a harbour, farmland or trade. Towns grow where routes meet or goods are trans-shipped. Within a town, land is arranged in zones: the <b>central business district</b> at the core where shops and offices compete for central land, industry near transport, and housing spreading outward. Rural settlements are <b>nucleated</b> (clustered), <b>dispersed</b> (scattered farms) or <b>linear</b> (strung along a road or river).",
  study:[
    /* ---- course text: Semester One, Period III — Settlement Geography (guide pp. 12-13, 59) ---- */
    {k:"h3", t:"Settlement: Definition, Site and Situation"},
    {k:"p", t:"A **settlement** is any place where people live and build. Its **site** is the actual ground — a dry point above flood, a wet point beside water, a bridging point at a river crossing, a defence hill, or a route centre; its **situation** is its setting among other places — on the road, at the harbour, amid farmland. The factors affecting the **sitting and growth** of settlement: water, land, relief, transport, defence, trade and administration. Analyse the factors at work in your own town."},
    {k:"rule"},
    {k:"h3", t:"Classification of Settlements"},
    {k:"p", t:"Classify settlements **by type** — **urban** against **rural**; **by pattern** — **nucleated** (clustered about a crossroads, well or market), **linear** (along a road, river or coast), **dispersed** (scattered farms) and **isolated**; **by size** — the hamlet and village, the town, the city, the **metropolis** and its **satellite towns**; and **by function** — **commercial, religious, administrative, industrial**, educational, port, mining and resort. The village family runs from the single **homestead** and **farmstead** to the **hamlet**. Explain the reasons for each pattern — water and safety nucleate, enclosure and soil scatter, the road strings out its linear line."},
    {k:"rule"},
    {k:"h3", t:"Functions and the Growth of Towns"},
    {k:"p", t:"State the **functions of settlements** and how they change with growth: the market town, the administrative capital, the port, the mining camp, the university town — most great towns wear several functions at once. Towns grow where routes meet, where goods are trans-shipped, where government and industry settle; chart the growth of Monrovia, Gbarnga or Harper against these causes. Compare the contributions of rural and urban settlements to mankind — food and labour from the one, trade, services and industry from the other."},
    {k:"rule"},
    {k:"h3", t:"Urbanization: Causes, Problems and Planning"},
    {k:"p", t:"**Urbanization** is the rising share of people in towns. Its **causes**: migrants pulled by jobs and services, and the natural increase of the towns themselves. Its **problems**: housing shortage and slums, unemployment and the informal sector, congestion, water and power shortage, sanitation and pollution. Its **solutions** — and the need for planning: planned housing estates, roads and drains, decentralised services and jobs, and development of the rural areas to slow the drift. Undertake a settlement study of your local town."},
  ],

  focus:[
    "Rural and urban settlements; classification by size and function",
    "Site and situation: wet-point, dry-point, defence, bridging and route centres",
    "Rural settlement patterns: nucleated, dispersed and linear",
    "Urban land use: central business district, industrial, residential and open zones",
    "Functions of settlements: port, market, administrative, mining, educational, religious",
    "The rank-size and central-place ideas; goods and threshold populations",
    "Urbanisation, urban problems and their causes",
    "Town planning and the provision of services"
  ],
  terms:[
    {t:"settlement", d:"a place where people establish homes and live", x:"Monrovia is Liberia's largest settlement."},
    {t:"rural settlement", d:"a settlement in the countryside, mainly farming", x:"A village is a rural settlement."},
    {t:"urban settlement", d:"a town or city where most people work outside farming", x:"Urban settlements provide many services."},
    {t:"site", d:"the physical characteristics of the ground a settlement stands on", x:"A reliable water supply is a good site factor."},
    {t:"situation", d:"a settlement's position relative to other places and routes", x:"A situation at a river crossing encouraged trade."},
    {t:"nucleated settlement", d:"a settlement with buildings clustered together", x:"Villages around a market are nucleated."},
    {t:"dispersed settlement", d:"scattered isolated farms and homesteads", x:"Dispersed farms are common on rich upland soils."},
    {t:"linear settlement", d:"a settlement strung in a line along a road or river", x:"Houses along a single road form a linear settlement."},
    {t:"function", d:"the main activity or purpose of a settlement", x:"Buchanan's function includes its port."},
    {t:"central business district", d:"the central zone of a town where shops and offices concentrate", x:"Land values are highest in the central business district."},
    {t:"land use", d:"the way land is occupied, e.g. housing, industry or farming", x:"A land-use map colours each zone differently."},
    {t:"urbanisation", d:"the growth of towns and the share of people living in them", x:"Urbanisation rises as industry grows."},
    {t:"slum", d:"a crowded area of poor housing lacking basic services", x:"Slums often grow on unplanned city edges."},
    {t:"urban sprawl", d:"the uncontrolled outward spread of a town", x:"Sprawl swallows farmland around the city."},
    {t:"infrastructure", d:"the basic services such as roads, water and electricity", x:"Industry needs sound infrastructure."},
    {t:"central place", d:"a settlement that provides goods and services to the area around it", x:"A county town is a central place."},
    {t:"threshold population", d:"the minimum number of people needed to support a service", x:"A hospital needs a larger threshold than a kiosk."},
    {t:"range of a good", d:"the distance people will travel to obtain a good or service", x:"The range of a market is greater than that of a shop."},
    {t:"town planning", d:"the deliberate arrangement of land use, roads and services", x:"Planning separates homes from polluting industry."},
    {t:"green belt", d:"protected open land around a town to limit sprawl", x:"A green belt keeps farmland beside the city."}
  ],
  facts:[
    {q:"Distinguish site from situation.", a:"Site is the physical character of the actual ground (water, relief, soil, defence); situation is the position relative to surrounding places, routes and resources."},
    {q:"Name the three main rural settlement patterns.", a:"Nucleated (clustered), dispersed (scattered isolated farms) and linear (along a road, river or coast)."},
    {q:"State four factors of a good settlement site.", a:"Reliable water supply; flat or gently sloping well-drained land; fertile surrounding soil; and a defensible position or a crossing, bridge or route focus."},
    {q:"List five functions a settlement may have.", a:"Market and trade, administration, port or transport, mining or industry, education, religion or defence — many towns combine several."},
    {q:"Describe the typical land-use zones of a town from centre outward.", a:"The central business district at the core; then older industry and warehouses near routes; then residential areas of varying density, with open land and newer suburbs on the edge."},
    {q:"Why is land most expensive in the central business district?", a:"Because accessibility is greatest there, so shops and offices that profit from centrality compete and bid the highest for the limited land."},
    {q:"Explain the idea of a threshold population.", a:"Every service needs a minimum number of customers to be viable. A kiosk needs a small threshold, while a hospital or department store needs a large one and is found only in bigger centres."},
    {q:"Give four problems of rapid urban growth.", a:"Shortage of housing and growth of slums; inadequate water, electricity and sanitation; traffic congestion and unemployment; and pollution and loss of surrounding farmland."},
    {q:"State four aims of town planning.", a:"To zone industry away from homes; lay out roads and drainage; reserve land for water, markets, schools and clinics; and limit sprawl onto farmland."},
    {q:"Why do linear settlements develop along roads and rivers?", a:"Because the road or river gives transport, water and trade at every point along it, so houses and farms extend in a line rather than clustering."}
  ],
  tf:[
    {s:"Site refers to a settlement's position relative to other towns.", a:"false", why:"That is situation; site is the physical ground the settlement stands on."},
    {s:"A nucleated settlement has its buildings clustered together.", a:"true", why:"Houses group around a centre such as a market, well or church."},
    {s:"Land values are usually highest at the edge of a town.", a:"false", why:"They are highest in the central business district, where access is greatest."},
    {s:"A hospital needs a larger threshold population than a small shop.", a:"true", why:"A hospital serves far more people and needs many customers to be viable."},
    {s:"Linear settlements commonly grow along roads and rivers.", a:"true", why:"Transport and water encourage building in a line."},
    {s:"Town planning aims to mix heavy industry closely with housing.", a:"false", why:"Planning zones industry away from homes to reduce noise, smoke and danger."},
    {s:"Urban sprawl can take over good farmland around a city.", a:"true", why:"Uncontrolled outward building covers surrounding agricultural land."}
  ],
  sort:{ title:"Sort these settlement features", groups:[
    {name:"Site factors", items:["water supply","flat dry land","fertile soil","defence"]},
    {name:"Situation factors", items:["route centre","river crossing","near a harbour","trade crossroads"]},
    {name:"Rural patterns", items:["nucleated village","dispersed farms","linear roadside houses"]},
    {name:"Urban zones", items:["central business district","industrial zone","residential suburbs","open land"]}
  ]},
  mapwork:{ title:"Zones and growth of a town", caption:"Complete the table by stating where each zone lies and why.", items:[
    {p:"Central business district", f:"At the centre where main roads meet; maximum access, so shops and offices bid highest for land"},
    {p:"Older industrial zone", f:"Beside railways, the port or main roads, for moving raw materials and goods"},
    {p:"High-density housing", f:"Near the centre and places of work, where land is costly and plots are small"},
    {p:"Low-density suburbs", f:"On the edge where land is cheaper, with larger plots and open space"},
    {p:"Markets and lorry parks", f:"At accessible nodes, often near the central business district and terminals"},
    {p:"Water and waste land", f:"Low-lying or riverside ground often left to informal settlement and industry"},
    {p:"Direction of growth", f:"Along the main roads outward, where transport and land are available"}
  ]},
  casestudy:{ title:"Why Bopolu grew where it did",
    text:"Bopolu, the county seat of Gbarpolu, sits on raised ground in the inland west of Liberia. Long before it was an administrative town it was a meeting point: paths from the farming country around converged on a high, well-drained place that held a reliable spring and could be defended. Its situation, more than its site, made it — it stood at the junction of trade routes linking the interior to the coastal towns, where kola, rubber and farm produce changed hands.\n\nWhen county administration was established, the town gained a court, a district office and later schools and a clinic. These functions drew people from the surrounding villages: farmers came on market days, traders settled to serve them, and young people came for schooling and government work. The threshold population of each new service was reached in turn, so a kiosk grew to a shop, a weekly market to a daily one, and a dispensary to a hospital referral point.\n\nYet the town's growth has been held back by its roads. In the rainy season the road to the coast is slow and sometimes cut, so goods and people move with difficulty and outside investment hesitates. The lesson is that a strong site and a central situation can found a town, but its continued growth depends on the routes and services that bind it to the wider economy.",
    questions:[
      {q:"Identify two site factors that favoured Bopolu.", a:"Raised, well-drained ground and a reliable spring, together with a defensible position."},
      {q:"Identify the situation factor that most encouraged its growth.", a:"Its position at the junction of trade routes linking the interior with the coastal towns."},
      {q:"Which functions were added when it became a county seat?", a:"Administration — a court and district office — followed by schools and a clinic."},
      {q:"Explain the threshold idea using the kiosk-to-shop example.", a:"As the town's population grew, enough customers existed for larger services, so a kiosk became a shop and the market grew from weekly to daily."},
      {q:"What factor has held the town back, and why?", a:"Poor roads, especially in the rainy season, which slow the movement of goods and people and discourage outside investment."},
      {q:"Suggest one measure that would most help the town to grow.", a:"Improving the all-season road to the coast, which would speed trade, lower costs and connect the town more firmly to markets."}
    ]},
  project:{ title:"A settlement study of your local town",
    brief:"Survey and explain the site, situation and land use of a nearby settlement.",
    steps:[
      "Identify the settlement and describe its site: relief, drainage and water supply.",
      "Describe its situation relative to roads, rivers, farms and other towns.",
      "Classify its pattern (nucleated, dispersed or linear) and its main functions.",
      "Map the land-use zones: shops, industry, housing, markets and open space.",
      "Interview residents about the town's growth and problems, then write up findings with a sketch map."
    ],
    criteria:["Site clearly described","Situation related to routes and places","Pattern and functions identified","Land-use zones mapped","Growth and problems reported with evidence"]},
  worked:[
    {q:"A town covers 6 km by 4 km. Find its approximate area.", steps:["6 \\u00d7 4"], a:"24 km^2"},
    {q:"A service needs 5 000 customers and the area has 200 people per km^2. What area (in km^2) supports it?", steps:["5 000 \\u00f7 200"], a:"25 km^2"},
    {q:"A city grows from 300 000 to 450 000. Find the percentage increase.", steps:["Increase = 150 000","(150 000 \\u00f7 300 000) \\u00d7 100"], a:"50%"},
    {q:"If the central business district occupies 8% of a 50 km^2 city, find its area.", steps:["0.08 \\u00d7 50"], a:"4 km^2"},
    {q:"A market draws customers from 12 villages averaging 800 people each. Estimate its population base.", steps:["12 \\u00d7 800"], a:"9 600 people"},
    {q:"A town adds 2 km^2 of housing each year. How much land is built on in 15 years?", steps:["2 \\u00d7 15"], a:"30 km^2"},
    {q:"Residential land is 60% of a 40 km^2 town. Find the residential area.", steps:["0.60 \\u00d7 40"], a:"24 km^2"},
    {q:"A shop serves people within 5 km. Using an area of pi r^2, estimate the served area.", steps:["3.14 \\u00d7 5^2 = 3.14 \\u00d7 25"], a:"About 78.5 km^2"}
  ],
  apply:[
    {q:"Why did many of Liberia's largest towns grow on the coast?", a:"The coast offered harbours and landing points for trade with the outside world, and situation on the sea routes linked them to world markets. Ports such as Monrovia and Buchanan became gateways for exports and imports, attracting administration, industry and people."},
    {q:"Explain why a village market and a city department store need different threshold populations.", a:"The market sells everyday goods that people travel a short distance for, so a small surrounding population supports it. The department store offers expensive, rarely bought goods and needs a large catchment, so it locates only where many people can reach it."},
    {q:"How can town planning reduce the problems caused by rapid urban growth?", a:"By laying out planned plots and roads before slums form, zoning industry away from homes, reserving land for water, drainage, markets, schools and clinics, and protecting a green belt so the city does not swallow farmland."},
    {q:"Why do shops and offices outbid housing for central land?", a:"Central land gives the greatest access to customers and workers, and commerce gains more profit from that access than housing does, so businesses can pay higher rents and occupy the core while housing spreads outward."},
    {q:"A mining town grows fast while the mine is open but suffers when the ore runs out. Explain this risk.", a:"The town depends on a single function. When mining ends, jobs vanish and people leave, shrinking the population and the services that relied on it. Diversifying into farming, trade or processing would make it more resilient."}
  ],
  activities:[
    "Map the land-use zones of the nearest town on a base sketch",
    "Survey a village and classify its site, situation and settlement pattern",
    "Compare the functions of Monrovia, a county town and a village",
    "Plot a town's growth over time from maps or interviews",
    "Debate the best ways to manage urban growth in Liberia",
    "Rank local services by the threshold population each needs"
  ],
  materials:[
    "Primary text: Human and Regional Geography for Senior Secondary Schools",
    "Town plans and maps of Monrovia and county towns",
    "Land-use survey sheets and sketch maps",
    "Pictures of rural and urban settlements",
    "Graph paper; WASSCE Q & A Papers 1 and 2"
  ],
  assessment:["Field settlement study","Land-use map","Data-response questions","Debate","Written test"]
},

{
  grade:12, period:"IV", sem:"Two", icon:"\uD83C\uDF31",
  title:"Economic Geography: Agriculture",
  subtitle:"Types of farming, factors affecting agriculture, crops and livestock, and agricultural problems and improvement",
  outcomes:[
    "Learners are able to classify agricultural systems and account for the distribution of crops and livestock",
    "Learners are able to evaluate the problems of Liberian agriculture and propose improvements"
  ],
  objectives:[
    "Distinguish subsistence from commercial and arable, pastoral and mixed farming",
    "Describe the physical and economic factors that influence agriculture",
    "Account for the distribution of major food and cash crops in Liberia and the world",
    "Explain plantation agriculture and the role of cooperatives and processing",
    "Outline the problems of farming in Liberia and ways to raise production",
    "Interpret agricultural statistics and land-use data"
  ],
  note:"<b>Agriculture</b> is the cultivation of crops and rearing of animals. <b>Subsistence farming</b> produces mainly for the family, using simple tools and family labour; <b>commercial farming</b> produces for sale, with larger inputs and often a single crop. Liberia's main cash crops are <b>rubber, oil palm, cocoa and coffee</b>, grown partly on plantations, while <b>rice and cassava</b> are the leading food crops. Output is limited by the use of hand tools, limited fertilisers and improved seed, poor rural roads, post-harvest loss and reliance on rainfall. Raising production depends on improved varieties, processing to add value, organised marketing and better roads and credit.",
  study:[
    /* ---- course text: Semester Two, Period IV — Economic Geography: Agriculture (guide pp. 40, 58) ---- */
    {k:"h3", t:"Agriculture as the Chief Primary Industry"},
    {k:"p", t:"The **primary industries** take their products straight from nature, and agriculture is their chief. Its **classification**: by purpose — **subsistence** and **commercial**; by product — **crop** and **animal** farming. Differentiate the **primary, secondary and tertiary sectors** of the Liberian economy, and discuss the importance of each to its economic and infrastructural development."},
    {k:"rule"},
    {k:"h3", t:"Systems of Farming"},
    {k:"p", t:"The **systems of farming**: **shifting cultivation** — clear, burn, crop, move on; **bush fallowing** — the land rested some seasons under regrowth; **mechanized farming** — tractors and large fields; **crop rotation** — the planned succession of crops that keeps the soil fed; **truck farming** — vegetables and perishables for the near town market; and among animal systems, **pastoralism**, **nomadism** and **dairy farming**. Distinguish **intensive** from **extensive** farming, and debate mechanized against subsistence farming in Liberia."},
    {k:"rule"},
    {k:"h3", t:"The Factors that Affect Agriculture"},
    {k:"p", t:"The **physical factors**: climate — rainfall and temperature; soil; relief; and water supply. The **economic factors**: capital, labour, transport, the market, land tenure and technology. Weigh each for the Liberian farm, and account for the distribution of the major crops: the rice and cassava of the food farms, the rubber, oil palm, cocoa and coffee of the estates."},
    {k:"rule"},
    {k:"h3", t:"Crops and Livestock of Liberia"},
    {k:"p", t:"The food crops — **rice, cassava, yams, plantain and vegetables**; the cash and export crops — **rubber, oil palm, cocoa, coffee and sugar cane**; the livestock — goats, sheep, poultry and pigs, few cattle; and the fisheries that complete the farm economy. Describe where each crop is grown and the conditions it needs, and outline **plantation agriculture** — the large estate, one crop, wage labour and processing — beside the smallholder farms."},
    {k:"rule"},
    {k:"h3", t:"Case Study: the Rubber Plantation"},
    {k:"p", t:"**Case study — rubber plantation in Liberia (Firestone operations)**: the concession of 1926 at Harbel, the tapped trees and the processed latex, the housing, schools and hospital of the estate, the employment and export earnings — and the current trend and prospects: ageing trees, world prices, and the processing that adds value at home. Trace the path of the latex from tree to export."},
    {k:"rule"},
    {k:"h3", t:"Problems of Agriculture and their Improvement"},
    {k:"p", t:"The problems: hand tools and little machinery, scarce fertiliser and improved seed, poor feeder roads, absent storage and processing, little credit, and land tenure that will not let farms grow; to these add pests, post-harvest loss and reliance on the rains. The improvement: better varieties and inputs, mechanisation fitted to the farm, cooperative marketing and processing to add value, rural credit, feeder roads and storage, irrigation where water allows, and secure tenure. Interpret agricultural statistics and land-use data in judging each reform, and debate the problems hampering Liberia's economy with recommendations for the primary industries."},
  ],

  focus:[
    "Types of agriculture: subsistence, commercial, plantation, mixed, pastoral",
    "Physical factors: climate, soil, relief and water",
    "Economic factors: capital, labour, transport, market and land tenure",
    "Food crops of Liberia: rice, cassava, yams, vegetables",
    "Cash and export crops: rubber, oil palm, cocoa, coffee, sugarcane",
    "Plantation agriculture: organisation, labour and processing",
    "Livestock and fishing; the role of cooperatives",
    "Agricultural problems and improvement: tools, seeds, credit, roads, storage"
  ],
  terms:[
    {t:"agriculture", d:"the cultivation of crops and rearing of animals", x:"Agriculture feeds the nation and earns exports."},
    {t:"subsistence farming", d:"farming mainly to feed the farmer's family", x:"Most upland rice is grown by subsistence farmers."},
    {t:"commercial farming", d:"farming mainly to produce for sale", x:"Rubber estates are commercial farms."},
    {t:"plantation", d:"a large estate growing one cash crop with paid labour", x:"A rubber plantation covers thousands of hectares."},
    {t:"arable farming", d:"the growing of crops on ploughed or cultivated land", x:"Rice and cassava are arable products."},
    {t:"pastoral farming", d:"the rearing of grazing animals", x:"Pastoral herds are common in drier regions."},
    {t:"mixed farming", d:"growing crops and rearing animals on the same farm", x:"Mixed farming spreads the farmer's risk."},
    {t:"cash crop", d:"a crop grown mainly for sale, often for export", x:"Rubber is Liberia's leading cash crop."},
    {t:"food crop", d:"a crop grown mainly to feed people", x:"Cassava is an important food crop."},
    {t:"livestock", d:"animals kept on a farm, such as cattle, goats and poultry", x:"Livestock supplies meat, milk and eggs."},
    {t:"shifting cultivation", d:"clearing a plot, farming it briefly and moving on as fertility falls", x:"Bush fallowing is a form of shifting cultivation."},
    {t:"bush fallow", d:"leaving cleared land to regenerate under bush for some years", x:"Bush fallow restores soil fertility."},
    {t:"irrigation", d:"supplying water to crops by artificial means", x:"Irrigation allows farming in the dry season."},
    {t:"fertility", d:"the ability of soil to support crop growth", x:"Manure and fallow maintain soil fertility."},
    {t:"cooperative", d:"an association of farmers who work and market together", x:"A cooperative can buy a shared mill."},
    {t:"value addition", d:"processing produce before sale to increase its worth", x:"Milling rice or pressing palm oil adds value."},
    {t:"post-harvest loss", d:"produce spoiled or lost after harvesting", x:"Drying and storage cut post-harvest loss."},
    {t:"extension worker", d:"an officer who teaches farmers improved methods", x:"Extension workers demonstrate new varieties."},
    {t:"land tenure", d:"the system by which land is owned and held", x:"Customary tenure governs most rural land."},
    {t:"growing season", d:"the period when temperature and rainfall allow crops to grow", x:"The rainy season is Liberia's main growing season."}
  ],
  facts:[
    {q:"State the main difference between subsistence and commercial farming.", a:"Subsistence farming produces mainly for the farmer's family with simple tools and small holdings; commercial farming produces mainly for the market, often on a large scale with paid labour and modern inputs."},
    {q:"List four physical factors that influence agriculture.", a:"Climate (rainfall and temperature), soil type and fertility, relief or slope, and the availability of water."},
    {q:"List four economic factors that influence agriculture.", a:"Capital or credit, the supply and cost of labour, transport to market, the size and price of the market, and the system of land tenure."},
    {q:"Name Liberia's four principal export cash crops.", a:"Rubber, oil palm, cocoa and coffee (with sugarcane also grown commercially)."},
    {q:"Name Liberia's leading staple food crops.", a:"Rice (upland and lowland) and cassava, together with yams, eddoes, plantains and vegetables."},
    {q:"Give three features of plantation agriculture.", a:"A single crop grown over a large area; heavy capital investment and paid, often organised labour; and on-site processing such as a rubber-processing factory or palm-oil mill."},
    {q:"State four problems facing Liberian smallholder farmers.", a:"Reliance on hand tools and limited machinery; lack of improved seeds, fertiliser and credit; poor rural roads and distance to market; and heavy post-harvest loss through poor storage and processing."},
    {q:"How does shifting cultivation (bush fallow) maintain fertility, and when does it fail?", a:"The fallow years under bush restore fertility naturally. It fails when population pressure shortens the fallow, so the soil does not recover and yields fall."},
    {q:"Give four ways to increase agricultural production in Liberia.", a:"Supply improved seeds and fertiliser on credit; provide irrigation and small machinery; build all-season roads and storage; add value by local processing; and strengthen cooperatives and extension services."},
    {q:"Why is adding value to crops important to farmers?", a:"Processing raw produce into oil, milled rice or dried cocoa raises its price, creates local jobs and reduces the cost and loss of transporting bulky or perishable raw produce."}
  ],
  tf:[
    {s:"Subsistence farming produces mainly for the market.", a:"false", why:"It produces mainly for the family; commercial farming produces for sale."},
    {s:"Rubber is Liberia's leading export cash crop.", a:"true", why:"Rubber plantations have long dominated agricultural exports."},
    {s:"Bush fallow restores soil fertility naturally.", a:"true", why:"Years under regenerating bush rebuild nutrients before the plot is farmed again."},
    {s:"Poor rural roads have little effect on farming.", a:"false", why:"Bad roads delay and raise the cost of moving produce, causing spoilage and lower farm-gate prices."},
    {s:"Processing crops before sale is a form of value addition.", a:"true", why:"Milled rice or pressed oil sells for more than the raw produce."},
    {s:"Plantation farms usually grow many different crops together.", a:"false", why:"A plantation specialises in a single crop over a large area."},
    {s:"Cooperatives help small farmers market their produce.", a:"true", why:"By acting together farmers can buy, process and sell at better prices."}
  ],
  sort:{ title:"Sort these crops, systems and problems", groups:[
    {name:"Food crops", items:["rice","cassava","yams","plantains","vegetables"]},
    {name:"Cash crops", items:["rubber","oil palm","cocoa","coffee","sugarcane"]},
    {name:"Farming systems", items:["subsistence","commercial","plantation","mixed","pastoral"]},
    {name:"Improvements", items:["improved seed","fertiliser","irrigation","storage","cooperatives","all-season roads"]}
  ]},
  mapwork:{ title:"Crops and farming regions of Liberia", caption:"Complete the table by stating where each crop is grown and one condition it needs.", items:[
    {p:"Rubber", f:"Widely grown, especially Margibi and central counties; needs well-drained lateritic soils and steady rainfall"},
    {p:"Oil palm", f:"Coastal and south-eastern counties; needs high rainfall, warmth and humid lowlands"},
    {p:"Cocoa", f:"Inland, especially Lofa and Nimba; needs shade, reliable rain and well-drained upland soil"},
    {p:"Coffee", f:"Upland counties such as Lofa; tolerates slightly cooler, higher ground"},
    {p:"Upland rice", f:"Grown countrywide on cleared upland soils; the national staple"},
    {p:"Cassava", f:"Grown on most soils nationwide; drought-tolerant and grown through much of the year"},
    {p:"Lowland / swamp rice", f:"Valley bottoms and inland swamps; uses retained moisture for higher yields"}
  ]},
  casestudy:{ title:"The cocoa farmers of Lofa who joined together",
    text:"Cocoa grows well in the inland climate of Lofa, where the shade, rainfall and well-drained upland soils suit the tree. For years, however, farmers there sold wet, poorly fermented beans to travelling buyers who set the price. Because the beans were not properly dried and fermented, they fetched a low grade; because each farmer sold alone, he had no power to refuse a low offer, and much of the crop spoiled in the rains before it reached a buyer.\n\nA group of villages formed a cooperative. They built a shared fermentary and drying floor, so beans could be processed to the grade exporters wanted. The cooperative bought sealed sacks and arranged one lorry to carry the combined crop to market, cutting transport cost per bag. Selling together, they negotiated with two exporters instead of taking the first offer, and the better grade earned a premium price. Part of the shared profit paid for improved seedlings and an extension officer's visits, and part was set aside as credit against the next season.\n\nWithin a few years members' incomes rose and young men who had planned to leave for Monrovia stayed to tend new farms. The farmers had changed little about the trees or the climate; what they changed was the processing, the transport and the marketing — the parts of farming that come after the harvest.",
    questions:[
      {q:"What physical conditions make Lofa suitable for cocoa?", a:"Shade, reliable rainfall and well-drained upland soils in the inland climate."},
      {q:"Why did the farmers' beans fetch a low price at first?", a:"They were wet and poorly fermented, so they graded low, and farmers sold individually with no bargaining power."},
      {q:"List three things the cooperative did.", a:"Built a shared fermentary and drying floor; bought sacks and arranged one lorry for the combined crop; and sold together to negotiate with exporters."},
      {q:"How did proper processing raise the price?", a:"Well-fermented, dried beans reached the grade exporters wanted, earning a premium rather than the low grade for wet beans."},
      {q:"What did the cooperative spend its shared profit on?", a:"Improved seedlings, extension visits and a credit fund for the next season."},
      {q:"Explain why the story shows that marketing matters as much as growing.", a:"The trees and climate were unchanged; better processing, transport and joint selling cut loss and cost, raised the grade and price, and kept young people in farming."}
    ]},
  project:{ title:"A farming system survey",
    brief:"Investigate the crops, methods and problems of farmers in your area.",
    steps:[
      "Identify the main food and cash crops grown and where they are sold.",
      "Record the tools, labour and sources of water the farmers use.",
      "Ask about fertilisers, seeds, credit and extension advice.",
      "Find out how produce is transported and stored, and what losses occur.",
      "Present findings with a crop map, a bar chart of yields or prices, and recommendations."
    ],
    criteria:["Crops and markets identified","Inputs and labour recorded","Credit and extension use documented","Transport, storage and loss assessed","Crop map and recommendations presented"]},
  worked:[
    {q:"A farm yields 2 tonnes of rice per hectare over 15 hectares. Find total production.", steps:["2 \\u00d7 15"], a:"30 tonnes"},
    {q:"Improved seed raises yield from 2 to 3.2 tonnes per hectare. Find the percentage increase.", steps:["Increase = 1.2","(1.2 \\u00f7 2) \\u00d7 100"], a:"60%"},
    {q:"A farmer sells 80 bags at US$25 each. Find the total income.", steps:["80 \\u00d7 25"], a:"US$2 000"},
    {q:"Raw cocoa sells at US$1.20 per kg; dried graded cocoa at US$2.10. Find the extra per kg.", steps:["2.10 \\u2212 1.20"], a:"US$0.90 per kg"},
    {q:"25% of a 4-tonne harvest is lost to poor storage. How much is lost?", steps:["0.25 \\u00d7 4 tonnes"], a:"1 tonne"},
    {q:"A cooperative ships 300 bags in one lorry at US$3 per bag instead of US$5. Find the saving.", steps:["Saving = (5 \\u2212 3) \\u00d7 300"], a:"US$600"},
    {q:"A 20-hectare plantation employs 1 worker per 4 hectares. How many workers?", steps:["20 \\u00f7 4"], a:"5 workers"},
    {q:"Cassava bought at US$0.30 per kg is processed into gari worth US$0.90. Find the value added.", steps:["0.90 \\u2212 0.30"], a:"US$0.60 per kg"}
  ],
  apply:[
    {q:"Why does rubber suit plantation agriculture more than cassava does?", a:"Rubber is a tree crop needing a large area, heavy capital, organised labour and a processing factory before the latex can be sold, so it favours estates. Cassava is a short-season food staple easily grown by smallholders for home use and local sale."},
    {q:"Explain how all-season roads could change farming in a remote county.", a:"They let produce reach market quickly without rain spoiling it, lowering transport cost and post-harvest loss. Farmers gain higher and steadier prices, can grow more for sale, and inputs such as fertiliser and seed become cheaper to bring in."},
    {q:"Why is it risky for a country to depend on a single export crop such as rubber?", a:"World prices swing with demand, and disease or bad weather can hit one crop hard. A fall in price or a failed harvest then damages the whole national income; diversifying crops spreads the risk."},
    {q:"How can irrigation raise food security in Liberia?", a:"Reliance on rainfall limits farming mainly to the wet season. Irrigation allows a dry-season crop, smoothing supply through the year, raising total output and reducing the risk of hunger before the harvest."},
    {q:"Why might a young farmer stay in the countryside rather than migrate, if processing is introduced locally?", a:"Local processing creates paying jobs — milling, pressing, drying and trading — and raises farm incomes, so the countryside offers the cash income that previously could only be sought in the city."}
  ],
  activities:[
    "Map the distribution of food and cash crops across Liberia's counties",
    "Survey local farms and record crops, tools, inputs and problems",
    "Compare subsistence and plantation farming using photographs or visits",
    "Calculate yields, incomes and losses from supplied farm data",
    "Debate the value of large plantations against smallholder cooperatives",
    "Draw a flow chart of a crop from farm through processing to export"
  ],
  materials:[
    "Primary text: Economic and Human Geography for West Africa",
    "Maps of Liberian agriculture and crop distribution",
    "Farm data sets and price tables",
    "Pictures of plantations, cooperatives and processing mills",
    "Graph paper and calculators; WASSCE Q & A Papers 1 and 2"
  ],
  assessment:["Farm survey report","Crop map","Data-response calculations","Debate","Written test"]
},

{
  grade:12, period:"V", sem:"Two", icon:"\uD83C\uDFED\uFE0F",
  title:"Industry, Transport, Trade and Development",
  subtitle:"Manufacturing and energy, transport networks, national and international trade, and regional economic integration",
  outcomes:[
    "Learners are able to account for the location of industry and the pattern of trade and transport",
    "Learners are able to assess Liberia's resources, trade and development prospects"
  ],
  objectives:[
    "Classify industries and explain the factors of industrial location",
    "Describe sources of energy and their importance to development",
    "Compare the means of transport and their suitability for different goods",
    "Explain imports, exports, balance of trade and the role of ports",
    "Describe regional economic groupings such as ECOWAS and their benefits",
    "Assess Liberia's resources, trade partners and development challenges"
  ],
  note:"<b>Industry</b> is classified as primary (extracting), secondary (manufacturing) and tertiary (services). Factories locate where raw materials, power, labour, market and transport favour them: heavy, bulky or perishable materials are processed near their source. <b>Transport</b> moves people and goods — water is cheapest for heavy bulk cargo, road is most flexible door to door, rail suits steady heavy loads over land, and air is fastest and costliest. <b>Trade</b> is exports sold abroad against imports bought in; the <b>balance of trade</b> is the value of exports minus imports. Liberia exports iron ore, rubber and other primary products and imports manufactured goods, fuel and rice. <b>ECOWAS</b> promotes free movement and trade among West African states.",
  study:[
    /* ---- course text: Semester Two, Period V — Industry, Transport, Trade and Development (guide pp. 44-45, 58) ---- */
    {k:"h3", t:"Industry and its Classification"},
    {k:"p", t:"Industry is classified as **primary** — extracting from nature: farming, fishing, mining, lumbering; **secondary** — manufacturing and processing; and **tertiary** — the services: trade, transport, banking, education, tourism. Differentiate the three sectors of the Liberian economy and outline the secondary industries — food processing, beverages, building materials, match and soap works, and the lumber mills."},
    {k:"rule"},
    {k:"h3", t:"The Location of Manufacturing Industries"},
    {k:"p", t:"The **factors affecting the location of manufacturing industries**: raw materials — heavy, bulky or perishable materials pull the factory to their source; power; labour; the market; transport; water; capital; land; and government policy with its zones and tax relief. Weight the factors for a Liberian industry — where should a palm-oil mill stand, an iron-ore smelter, a fish cannery? — and discuss the role of secondary industries in industrial development."},
    {k:"rule"},
    {k:"h3", t:"Energy and its Sources"},
    {k:"p", t:"Classify the **sources of energy** as **renewable** — hydro-electric power from rivers, waterfalls and dams; solar; wind; tidal; geothermal; biomass — and **non-renewable** — the fossil fuels coal, natural gas and petroleum, and uranium. Locate Liberia's power sources: the **Mount Coffee** hydro plant on the St Paul, the diesel and heavy fuel plants, the growing solar schemes. State the importance of energy to economic development, the factors — capital, technology, climate — affecting its sources, and the problems and solutions of energy harnessing."},
    {k:"rule"},
    {k:"h3", t:"Transport and Development"},
    {k:"p", t:"**Transport** moves people and goods, and development follows the road. The means: **road** — flexible door to door; **rail** — steady heavy loads, as the iron-ore railway to Buchanan; **water** — cheapest for heavy bulk, as the port of Monrovia; **pipeline**; and **air** — fastest and dearest. Compare their advantages and limits for Liberia's goods, and read the transport network from the map."},
    {k:"rule"},
    {k:"h3", t:"Trade: Internal, External and Regional"},
    {k:"p", t:"**Trade and commerce** — internal and external. Liberia's **exports**: iron ore, rubber, timber, cocoa, palm products and gold; its **imports**: rice, fuel, machinery and manufactured goods. Define the **balance of trade** — exports against imports — and read the ports through which each flows. **ECOWAS** and the **Mano River Union** open the regional market: free movement of goods and people, a wider market, joint projects. Assess Liberia's trade partners, the composition of its trade, and the development challenges it faces; outline the **tertiary industries** — trade, transport, banking and **tourism** on the beaches and reserves — with their problems and prospects."},
  ],

  focus:[
    "Industrial classification: primary, secondary and tertiary",
    "Factors of industrial location and their weighting",
    "Energy sources: hydroelectric, thermal, solar and biomass; importance of power",
    "Transport: road, rail, water and air — advantages and limits",
    "Ports and their role in import and export trade",
    "Trade: exports, imports, balance of trade and terms of trade",
    "Liberia's trading partners and the composition of its trade",
    "ECOWAS and regional integration; development and its indicators"
  ],
  terms:[
    {t:"primary industry", d:"industry that extracts or harvests natural products", x:"Mining and logging are primary industries."},
    {t:"secondary industry", d:"industry that processes or manufactures goods", x:"A soap factory is secondary industry."},
    {t:"tertiary industry", d:"industry that provides a service", x:"Banking and transport are tertiary."},
    {t:"manufacturing", d:"making goods from raw materials by hand or machine", x:"Manufacturing adds value to raw materials."},
    {t:"industrial location", d:"the siting of a factory according to chosen factors", x:"Raw materials guide industrial location."},
    {t:"energy", d:"the power needed to work machines and provide services", x:"Reliable energy drives industry."},
    {t:"hydroelectric power", d:"electricity generated from falling water", x:"Dams provide hydroelectric power."},
    {t:"thermal power", d:"electricity generated by burning fuel such as oil or gas", x:"Generators provide thermal power."},
    {t:"transport", d:"the movement of people and goods from place to place", x:"Transport links producers to markets."},
    {t:"bulk cargo", d:"heavy, unpacked goods carried in large quantity", x:"Iron ore and fuel are bulk cargo."},
    {t:"port", d:"a harbour where ships load and unload goods", x:"The Freeport of Monrovia is Liberia's main port."},
    {t:"export", d:"a good or service sold to another country", x:"Rubber is a major export."},
    {t:"import", d:"a good or service bought from another country", x:"Liberia imports much of its fuel."},
    {t:"balance of trade", d:"the value of exports minus the value of imports", x:"More imports than exports gives a trade deficit."},
    {t:"trade deficit", d:"when imports are worth more than exports", x:"A trade deficit sends money abroad."},
    {t:"terms of trade", d:"the ratio of export prices to import prices", x:"Favourable terms of trade mean exports buy more imports."},
    {t:"free trade", d:"trade between countries without tariffs or quotas", x:"ECOWAS encourages free trade in the region."},
    {t:"tariff", d:"a tax placed on imported or exported goods", x:"A tariff raises the price of imports."},
    {t:"ECOWAS", d:"the Economic Community of West African States, a regional grouping", x:"ECOWAS permits free movement of people and goods."},
    {t:"development", d:"the improvement of living standards and the economy", x:"Development is measured by income, health and education."}
  ],
  facts:[
    {q:"Give one example each of primary, secondary and tertiary industry.", a:"Primary: mining iron ore or farming; secondary: manufacturing cement or soap; tertiary: banking, transport or teaching."},
    {q:"List five factors that influence the location of industry.", a:"Nearness to raw materials; power supply; labour; the market; and transport — with water, capital and government policy also important."},
    {q:"State the main advantage and disadvantage of water transport.", a:"Advantage: it is the cheapest means for heavy, bulky cargo in large quantity. Disadvantage: it is slow and limited to navigable waterways and ports."},
    {q:"State the main advantage and disadvantage of air transport.", a:"Advantage: it is the fastest and best for perishable or urgent, high-value goods. Disadvantage: it is the most expensive and unsuitable for heavy bulk cargo."},
    {q:"Distinguish a balance of trade surplus from a deficit.", a:"A surplus occurs when exports earn more than imports cost; a deficit occurs when imports cost more than exports earn."},
    {q:"Name Liberia's major exports.", a:"Iron ore, rubber, gold, diamonds, timber and palm oil, with other primary products."},
    {q:"Name Liberia's major imports.", a:"Machinery and transport equipment, fuels and lubricants, rice and other foodstuffs, and manufactured consumer goods."},
    {q:"Give three benefits of ECOWAS to member states.", a:"Free movement of people and goods across borders; a larger common market of many millions of people; and regional cooperation on roads, energy, security and trade."},
    {q:"Why is reliable electricity important to industrial development?", a:"Machinery, refrigeration and processing depend on steady power; without it firms must buy costly generators, raising their expenses and discouraging investment."},
    {q:"Give three indicators used to measure development.", a:"Income per person (such as GDP per capita), life expectancy and health, and levels of education and literacy."}
  ],
  tf:[
    {s:"Mining is a secondary industry.", a:"false", why:"Mining extracts natural products, so it is primary; manufacturing is secondary."},
    {s:"Water transport is the cheapest for heavy bulk cargo.", a:"true", why:"Ships carry very large loads at low cost per tonne."},
    {s:"Air transport is the cheapest way to move goods.", a:"false", why:"It is the fastest but the most expensive, and suits light, urgent cargo."},
    {s:"When imports exceed exports in value, there is a trade deficit.", a:"true", why:"A deficit means more money goes out for imports than comes in from exports."},
    {s:"Hydroelectric power is generated by burning oil.", a:"false", why:"It is generated from the force of falling water; burning fuel gives thermal power."},
    {s:"ECOWAS promotes free movement of people and goods in West Africa.", a:"true", why:"It is a regional community working toward integration and common trade."},
    {s:"Bulky perishable raw materials should be processed near their source.", a:"true", why:"This cuts transport cost and spoilage, as in sawmilling or fruit canning."}
  ],
  sort:{ title:"Sort these industries, goods and transport", groups:[
    {name:"Primary industry", items:["iron mining","rubber tapping","fishing","logging"]},
    {name:"Secondary industry", items:["cement making","soap manufacture","oil milling","furniture making"]},
    {name:"Tertiary industry", items:["banking","teaching","transport","tourism"]},
    {name:"Best by water transport", items:["iron ore","fuel","cement","timber"]}
  ]},
  mapwork:{ title:"Liberia's trade and transport network", caption:"Complete the table by stating the role or importance of each.", items:[
    {p:"Freeport of Monrovia", f:"The main gateway for imports and exports, handling ships, fuel and container cargo"},
    {p:"Port of Buchanan", f:"Serves the iron-ore and freight trade and the central coast"},
    {p:"Iron-ore railway (Yekepa–Buchanan)", f:"Carries heavy ore from the Nimba mines to the port for export"},
    {p:"Monrovia–Ganta highway", f:"A key road spine linking the capital to the interior and cross-border trade"},
    {p:"Robertsport and coastal landing sites", f:"Support fishing and small coastal trade"},
    {p:"Cross-border routes to Guinea, Sierra Leone and Cote d'Ivoire", f:"Carry regional trade under ECOWAS movement rules"},
    {p:"Hydroelectric sites (Mt. Coffee, St. Paul)", f:"Provide grid electricity from river dams to industry and towns"}
  ]},
  casestudy:{ title:"Why the iron ore goes by rail to Buchanan",
    text:"Liberia's iron ore is mined in the Nimba range in the north-east, far from the sea. The ore is heavy and low in value per tonne compared with its weight, so transport is the deciding cost. When the mines were developed, the company did not send the ore by road. A lorry carries a small load at high cost per tonne and tears up roads under constant heavy use; over hundreds of kilometres the freight would consume the profit.\n\nInstead, a railway was built straight from the mines at Yekepa to the port of Buchanan. A train carries thousands of tonnes in one journey at a small cost per tonne, moving steadily regardless of rain, and delivers the ore directly to a purpose-built port where it is stockpiled and loaded onto bulk carriers for export. The same corridor later served inward freight for the mines — fuel, machinery and cement.\n\nThe arrangement follows a clear geographic rule: a heavy, bulky, low-value material moves by the cheapest bulk transport over a fixed route, which means rail on land and a dedicated port at the coast. The railway and the port exist because of the mine, and the mine is viable because of them. By contrast, light, high-value goods such as medicine and electronics move by road or air, where speed and flexibility matter more than the lowest cost per tonne.",
    questions:[
      {q:"Why is transport the deciding cost for iron ore?", a:"The ore is heavy and of low value per tonne, so freight over a long distance can take most of the profit if it is not cheap."},
      {q:"Give two reasons ore is not sent by road lorry.", a:"Lorries carry small loads at high cost per tonne, and constant heavy use damages the roads, especially in the rains."},
      {q:"State two advantages the railway offers.", a:"It moves thousands of tonnes at low cost per tonne and runs steadily regardless of rain, directly to the port."},
      {q:"Why was a dedicated port needed at Buchanan?", a:"To stockpile and load bulk carriers for export and to handle inward fuel, machinery and cement for the mines."},
      {q:"Which rule of transport choice does the case illustrate?", a:"Heavy, bulky, low-value goods use the cheapest bulk means — rail on land, ship by water — while light urgent goods favour road or air."},
      {q:"Explain how the railway and port depend on each other.", a:"The mine needs the rail and port to export cheaply, while the rail and port exist to serve the mine's freight."}
    ]},
  project:{ title:"Industry, trade and transport enquiry",
    brief:"Investigate a local industry, the goods it moves and the routes it uses.",
    steps:[
      "Identify a manufacturing, mining or processing business and classify its industry.",
      "Record its raw materials, energy source and main markets.",
      "Trace how its product reaches buyers and which means of transport is used.",
      "List the imported and locally made inputs it relies on.",
      "Present findings with a flow-line map from source to market and a short report on location factors."
    ],
    criteria:["Industry classified correctly","Inputs and energy recorded","Transport route traced","Imports and local inputs identified","Flow-line map and report completed"]},
  worked:[
    {q:"Exports earn US$240 million and imports cost US$360 million. Find the balance of trade.", steps:["240 \\u2212 360"], a:"\\u2212US$120 million (a deficit)"},
    {q:"A train carries 6 000 tonnes at US$4 per tonne. Find the freight cost.", steps:["6 000 \\u00d7 4"], a:"US$24 000"},
    {q:"Road haulage costs US$12 per tonne for the same ore. Find the extra cost over rail.", steps:["12 \\u2212 4 = 8 per tonne","8 \\u00d7 6 000"], a:"US$48 000 more"},
    {q:"Liberia imports 300 000 tonnes of rice at US$400 per tonne. Find the total cost.", steps:["300 000 \\u00d7 400"], a:"US$120 million"},
    {q:"A factory adds US$150 of value per tonne over 8 000 tonnes. Find value added.", steps:["150 \\u00d7 8 000"], a:"US$1.2 million"},
    {q:"Exports rise from US$200 m to US$260 m. Find the percentage increase.", steps:["Increase = 60","(60 \\u00f7 200) \\u00d7 100"], a:"30%"},
    {q:"A port handles 45 ships a month. How many ships in a year?", steps:["45 \\u00d7 12"], a:"540 ships"},
    {q:"If 12% of a country's US$500 m export earnings come from gold, find that amount.", steps:["0.12 \\u00d7 500"], a:"US$60 million"}
  ],
  apply:[
    {q:"Why does Liberia import large quantities of rice despite being an agricultural country?", a:"Urban demand and population growth exceed what smallholder, rain-fed farming produces, and post-harvest loss and limited irrigation keep domestic supply short, so the gap is filled by imported rice."},
    {q:"Explain why a trade deficit in primary products can persist for a developing country.", a:"Primary products such as ore and rubber earn low and fluctuating prices, while imported manufactured goods, fuel and food are costly and essential. Export earnings often fail to cover import bills, leaving a deficit until local industry and processing expand."},
    {q:"How could membership of ECOWAS help Liberian farmers and traders?", a:"It opens a large neighbouring market with reduced tariffs and freer movement, allowing crops and goods to be sold across borders more easily, and it supports shared roads and energy links that lower trade costs."},
    {q:"Why is adding manufacturing capacity seen as a step toward development?", a:"Manufacturing creates skilled jobs and steady incomes, adds value to exports instead of selling cheap raw materials, and reduces dependence on costly imports — raising living standards and retaining wealth in the country."},
    {q:"Argue whether Liberia should develop hydroelectric or thermal power first.", a:"Hydro suits Liberia's abundant rivers: it has no fuel cost, no air pollution and long-term low running cost, though it needs high capital and may flood land. Thermal power can be installed quickly but depends on costly imported fuel; a staged mix — quick thermal now, hydro for the long term — is often favoured."}
  ],
  activities:[
    "Map Liberia's ports, railways and major roads and describe their roles",
    "Construct a pie chart of Liberia's exports and imports from supplied data",
    "Calculate balance of trade, freight costs and value added from data sets",
    "Classify local businesses into primary, secondary and tertiary industry",
    "Debate the benefits of ECOWAS free trade for Liberia",
    "Trace the journey of an export from its source through the port abroad"
  ],
  materials:[
    "Primary text: Economic Geography of West Africa",
    "Maps of Liberian transport, industry and trade routes",
    "Trade statistics and export-import tables",
    "Pictures of ports, mines, factories and power stations",
    "Calculators and graph paper; WASSCE Q & A Papers 1 and 2"
  ],
  assessment:["Data-response test","Trade and transport map","Enquiry report","Debate","Written examination"]
},

{
  grade:12, period:"VI", sem:"Two", icon:"\u267B\uFE0F",
  title:"Environmental Management and Regional Geography",
  subtitle:"Ecosystems and resources, environmental hazards, conservation, and the geography of Liberia, West Africa and Africa",
  outcomes:[
    "Learners are able to explain environmental problems and the principles of sustainable management",
    "Learners are able to describe and compare the regions of Liberia, West Africa and Africa"
  ],
  objectives:[
    "Describe ecosystems, especially the tropical rainforest, and their value",
    "Explain environmental problems: deforestation, soil erosion, pollution and climate change",
    "Describe natural hazards and human responses to them",
    "Explain conservation and the sustainable use of resources",
    "Describe the physical and human regions of Liberia and their characteristics",
    "Locate and compare the major countries, features and resources of West Africa and Africa"
  ],
  note:"The natural <b>environment</b> provides resources — forests, soils, water, minerals and a stable climate — but these can be damaged. <b>Deforestation</b> for farming, logging and fuelwood removes the forest cover that holds soil and rainfall, leading to <b>soil erosion</b>, loss of species and changed runoff. <b>Sustainable development</b> uses resources to meet present needs without destroying them for the future, through conservation, replanting, pollution control and protected areas. Liberia lies in the <b>tropical rainforest and coastal belt</b>, with inland hills and plateaus; it shares the Mano River Union region with Guinea and Sierra Leone and belongs to West Africa and the wider African continent.",
  study:[
    /* ---- course text: Semester Two, Period VI — Environmental Management and Regional Geography (guide pp. 16-20, 56-57, 61) ---- */
    {k:"h3", t:"The Environment and its Resources"},
    {k:"p", t:"The **environment** — natural and built — supplies every resource: the forests, soils, water, minerals, and the stable climate. Its domains are the lithosphere, hydrosphere, atmosphere and biosphere, its components physical, biological and social. Its problems are pollution, erosion, deforestation and waste — and the balance of the environment, from the land ecosystem and the nitrogen cycle to the soils on which all farming rests, is easily upset."},
    {k:"rule"},
    {k:"h3", t:"Environmental Problems and Hazards"},
    {k:"p", t:"**Deforestation** for farming, logging and fuelwood strips the cover that holds soil and water; **soil erosion** and **desertification** follow on the exposed land; **pollution** of land, water and air — waste, chemicals, fumes — spreads with the towns; **climate change** and **global warming** ride on the greenhouse gases; and the natural hazards — **flooding, drought, storms and coastal erosion** — strike the coast and the interior alike. For each state the meaning, the causes, the effects on human activity, and the prevention and control: conservation, replanting, protection of wetlands and coasts, waste management and enforced law."},
    {k:"rule"},
    {k:"h3", t:"Conservation and Sustainable Development"},
    {k:"p", t:"**Conservation** is the careful use and protection of resources; **sustainable development** meets present needs without destroying the resource for the future. Its practice: **reforestation and afforestation**, **protected areas** and national parks such as Sapo, the management of the **watershed**, the control of harvesting and hunting, and the education of the people. Distinguish the **renewable** resources — water, timber, soil, fisheries — from the **non-renewable** — iron ore, gold, diamonds, oil — and manage each according to its kind. Undertake an environmental study of your local area."},
    {k:"rule"},
    {k:"h3", t:"Regional Geography: Liberia"},
    {k:"p", t:"Locate and size Liberia — its **location, position and size**, bounded by Sierra Leone, Guinea, Côte d'Ivoire and the Atlantic. Describe its **relief** — the coastal plains, the rolling interior hills and plateaus rising to the northern highlands; its **drainage and lakes** — the Mano, St Paul, St John, Cestos, Cavally and Lofa; its **climate** — the tropical monsoon with the wet and dry seasons; its **natural vegetation** — rainforest, savanna, mangrove swamp and marshland; its **soils** — the latosols of the forest and the hydromorphic soils of the swamps, with the erosion that threatens them; and its **population and settlement**. Outline the five geographical regions of the country."},
    {k:"rule"},
    {k:"h3", t:"Regional Geography: the Regions of Africa"},
    {k:"p", t:"Outline the geo-political regions of Africa with their countries, size and political boundaries: **West Africa** — the ECOWAS states from Senegal to Nigeria; **East Africa** — Ethiopia, Kenya, Uganda, Tanzania; **Equatorial and Central Africa** — Cameroon, Gabon, the two Congos; **North Africa** — the Maghreb and the Nile states; and **Southern Africa** — Angola, Zambia, Zimbabwe, Botswana, Namibia, South Africa. For each region examine the physical features and natural resources, the trade and communications relative to the population, and the factors influencing climate and agricultural activities. Map the countries, features and resources of the continent."},
    {k:"rule"},
    {k:"h3", t:"General Revision"},
    {k:"p", t:"The course closes with general revision over five fronts: **map reading** — scales, positions, directions, relief and cross-sections; the **primary, secondary and tertiary industries of Liberia**; **climate and natural vegetation**; the **regional geography of Africa**; and **population and settlement**. Recap and remember the definitions, elements, description and activities of these geographic topics — through class discussion, group presentation and individual project — and prepare for the school and WASSCE examinations."},
  ],

  focus:[
    "Ecosystems and the tropical rainforest: structure and value",
    "Deforestation: causes and consequences",
    "Soil erosion, desertification and land degradation",
    "Pollution of water, air and land; waste in growing towns",
    "Climate change and natural hazards: floods, storms and coastal erosion",
    "Conservation and sustainable resource management; protected areas",
    "The regions and resources of Liberia: coast, interior hills, plateaus",
    "West Africa and Africa: countries, features, climates and resources"
  ],
  terms:[
    {t:"environment", d:"the natural surroundings in which people live", x:"We depend on the environment for resources."},
    {t:"ecosystem", d:"a community of living things and their physical surroundings", x:"A forest is a complex ecosystem."},
    {t:"tropical rainforest", d:"dense evergreen forest where rainfall is high and year-round", x:"Liberia holds much of West Africa's remaining rainforest."},
    {t:"biodiversity", d:"the variety of living species in an area", x:"Rainforests have high biodiversity."},
    {t:"deforestation", d:"the clearing or destruction of forest", x:"Logging and farming cause deforestation."},
    {t:"soil erosion", d:"the removal of topsoil by water or wind", x:"Removing trees speeds up soil erosion."},
    {t:"desertification", d:"the spread of desert-like conditions as land degrades", x:"Overgrazing can lead to desertification."},
    {t:"pollution", d:"harmful substances released into air, water or land", x:"Waste and fuels cause pollution."},
    {t:"climate change", d:"long-term shift in global weather and temperatures", x:"Climate change is linked to greenhouse gases."},
    {t:"natural hazard", d:"a natural event that threatens people and property", x:"Floods and storms are natural hazards."},
    {t:"coastal erosion", d:"the wearing away of the coastline by the sea", x:"Coastal erosion threatens seaside towns."},
    {t:"conservation", d:"protecting and carefully managing natural resources", x:"Conservation protects the forest for the future."},
    {t:"sustainable development", d:"meeting present needs without harming future generations", x:"Sustainable development keeps resources renewable."},
    {t:"renewable resource", d:"a resource that can be replaced as it is used", x:"Water and timber are renewable resources."},
    {t:"non-renewable resource", d:"a finite resource that cannot be replaced once used", x:"Iron ore is a non-renewable resource."},
    {t:"protected area", d:"land set aside for wildlife and forest conservation", x:"National parks are protected areas."},
    {t:"reforestation", d:"replanting trees where forest was cleared", x:"Reforestation restores cover on bare hills."},
    {t:"watershed", d:"the area drained by a river and its tributaries", x:"Protecting a watershed safeguards water supply."},
    {t:"Mano River Union", d:"the regional union of Liberia, Sierra Leone and Guinea (with Cote d'Ivoire)", x:"The Mano River Union promotes regional cooperation."},
    {t:"plateau", d:"an area of fairly level high ground", x:"Inland Liberia rises to rolling plateaus."}
  ],
  facts:[
    {q:"State three values of the tropical rainforest.", a:"It supplies timber and forest products, holds soil and regulates runoff and rainfall, stores carbon, and is home to a great diversity of plants and animals."},
    {q:"Give four causes of deforestation in Liberia.", a:"Logging for timber, clearing for agriculture and shifting cultivation, collection of fuelwood and charcoal, and expansion of settlements and mining."},
    {q:"State three consequences of deforestation.", a:"Soil erosion and loss of fertility, reduced and more erratic rainfall and runoff, destruction of wildlife habitat, and greater flooding and siltation of rivers."},
    {q:"Distinguish renewable from non-renewable resources, with examples.", a:"Renewable resources can be replenished as used, such as water, forests and solar energy; non-renewable resources are finite once used, such as iron ore, gold and petroleum."},
    {q:"List three forms of pollution affecting growing Liberian towns.", a:"Water pollution from waste and poor sanitation, land pollution from uncollected refuse, and air pollution from generators, vehicle exhausts and burning."},
    {q:"Give three examples of natural hazards in Liberia.", a:"Seasonal flooding in the rains, coastal erosion along the shoreline, wind storms, and occasional river and urban flood damage."},
    {q:"State four principles of sustainable resource management.", a:"Use renewable resources no faster than they recover; replant forests (reforestation); control pollution and waste; and set aside protected areas while involving local communities."},
    {q:"Describe the main physical regions of Liberia.", a:"A low coastal belt of plains and mangroves; inland rolling hills and ridges; and higher plateaus and the Guinea-highland fringe in the north, with major rivers flowing south-west to the sea."},
    {q:"Name the countries that share a border with Liberia.", a:"Sierra Leone to the west, Guinea to the north and north-east, and Cote d'Ivoire to the east; the Atlantic Ocean lies to the south."},
    {q:"State two aims of the Mano River Union and ECOWAS.", a:"To promote regional trade and free movement, and to cooperate on shared resources, roads, energy and security among neighbouring West African states."}
  ],
  tf:[
    {s:"The tropical rainforest has low biodiversity.", a:"false", why:"It is among the richest ecosystems on earth in variety of species."},
    {s:"Removing trees increases the risk of soil erosion.", a:"true", why:"Roots and leaf cover no longer bind and shield the soil, so rain washes it away."},
    {s:"Iron ore is a renewable resource.", a:"false", why:"Minerals are finite and cannot be replaced once mined, so they are non-renewable."},
    {s:"Sustainable development meets present needs without harming the future.", a:"true", why:"It keeps resources and the environment usable for coming generations."},
    {s:"Coastal erosion can threaten seaside settlements.", a:"true", why:"The sea wears back the shore, endangering buildings and roads."},
    {s:"Reforestation means clearing more forest for farms.", a:"false", why:"It means replanting trees to restore forest that was cleared."},
    {s:"Liberia is bordered by Sierra Leone, Guinea and Cote d'Ivoire.", a:"true", why:"These three states surround Liberia on land, with the Atlantic to the south."}
  ],
  sort:{ title:"Sort these resources, problems and solutions", groups:[
    {name:"Renewable resources", items:["water","timber","solar energy","fish"]},
    {name:"Non-renewable resources", items:["iron ore","gold","diamonds","petroleum"]},
    {name:"Environmental problems", items:["deforestation","soil erosion","pollution","coastal erosion","flooding"]},
    {name:"Conservation measures", items:["reforestation","protected areas","pollution control","controlled logging"]}
  ]},
  mapwork:{ title:"The regions and neighbours of Liberia", caption:"Complete the table by locating each feature and stating its importance.", items:[
    {p:"Atlantic coast", f:"The southern boundary; holds the ports, fishing grounds and the coastal plain"},
    {p:"Sierra Leone", f:"Border to the west; a Mano River Union partner and trade neighbour"},
    {p:"Guinea", f:"Border to the north and north-east; source region of several rivers and a trade partner"},
    {p:"Cote d'Ivoire", f:"Border to the east; shares the forest belt and cross-border trade"},
    {p:"Inland hills and plateaus", f:"The interior; mining, upland farming and the sources of major rivers"},
    {p:"Mano, Lofa, St. Paul, St. John and Cestos rivers", f:"Drain south-west to the sea; provide water, fish, transport routes and hydroelectric potential"},
    {p:"Remaining rainforest belt", f:"South-east and interior; high biodiversity and timber, needing conservation"}
  ]},
  casestudy:{ title:"The hillside that lost its trees",
    text:"A farming community on an inland slope grew upland rice and cassava. Above the village a forested ridge held the springs that fed the stream supplying water, and the roots of the trees bound the soil. Over a number of years, as the village grew and a logging road opened, the ridge was progressively cleared: loggers took the largest trees, farmers extended their fields up the slope, and women cut the remaining growth for fuelwood and charcoal for the market town.\n\nAt first the change seemed profitable. Timber brought cash, new fields gave larger harvests and charcoal sold well. But the next heavy rains behaved differently. With no roots to hold it and no leaf cover to soften the fall, the topsoil washed down the slope into the stream. The springs shrank in the dry season, and after a severe storm the swollen river carried silt and debris, flooded the lower farms and left sand over the rice fields. Fish catches fell as the river clouded, and the village water supply became unreliable.\n\nThe community, advised by an agriculture officer, then acted. They set the steepest ridge as a protected woodlot where no felling was allowed, planted fast-growing trees on the bare upper slope, and kept contour lines of grass across their fields to check runoff. Within several years the springs steadied, the stream cleared and the flooding lessened. The village had learned that the trees were not idle timber: they were the working cover that held the soil and stored the water.",
    questions:[
      {q:"Give three activities that cleared the ridge.", a:"Commercial logging, the extension of farms up the slope, and cutting growth for fuelwood and charcoal."},
      {q:"What were the immediate benefits of clearing the forest?", a:"Cash from timber, larger harvests from new fields and income from selling charcoal."},
      {q:"Explain how clearing led to soil erosion.", a:"Without roots to bind the soil or leaf cover to soften the rain, the topsoil washed down the slope into the stream."},
      {q:"State three consequences suffered by the village.", a:"Shrinking dry-season springs, a flooded river that silted up farms, and falling fish catches and unreliable water supply."},
      {q:"What conservation measures did the community take?", a:"They set the steep ridge as a protected woodlot, replanted trees on the bare slope, and laid grass contour lines across the fields to check runoff."},
      {q:"What does the story teach about the value of trees?", a:"Trees actively hold the soil, regulate springs and streams and reduce flooding, so their removal has costs that appear later, after the short-term gains."}
    ]},
  project:{ title:"An environmental study of the local area",
    brief:"Investigate an environmental problem near you and propose a sustainable solution.",
    steps:[
      "Identify a local issue such as erosion, deforestation, flooding, waste or polluted water.",
      "Observe and record its extent, causes and effects on people and farming.",
      "Interview residents about how it has changed over time.",
      "Identify which resources are renewable or non-renewable in the area.",
      "Propose a practical conservation measure and present it with a map, photographs or sketches."
    ],
    criteria:["Problem clearly identified","Causes and effects recorded","Change over time documented","Resources classified","A practical, sustainable proposal presented"]},
  worked:[
    {q:"A forest of 5 000 hectares loses 8% a year. How much is lost in year one?", steps:["0.08 \\u00d7 5 000"], a:"400 hectares"},
    {q:"If erosion removes 2 cm of topsoil from 30 hectares, how much soil area is affected?", steps:["Given area affected"], a:"30 hectares (2 cm depth lost)"},
    {q:"A reforestation scheme plants 1 200 trees per hectare over 25 hectares. Find the total.", steps:["1 200 \\u00d7 25"], a:"30 000 trees"},
    {q:"A flood destroys 15% of a 600-tonne harvest. How much is lost?", steps:["0.15 \\u00d7 600"], a:"90 tonnes"},
    {q:"A mine extracts 2 million tonnes of ore a year for 30 years. Find total extraction.", steps:["2 \\u00d7 30"], a:"60 million tonnes (non-renewable)"},
    {q:"Protected areas cover 12% of a country of 96 000 km^2. Find the protected area.", steps:["0.12 \\u00d7 96 000"], a:"11 520 km^2"},
    {q:"A town produces 40 tonnes of waste a day. How much in a 30-day month?", steps:["40 \\u00d7 30"], a:"1 200 tonnes"},
    {q:"Reforestation reduces dry-season river loss by 35% of a 200-litre shortfall. How much is recovered?", steps:["0.35 \\u00d7 200"], a:"70 litres per unit"}
  ],
  apply:[
    {q:"Why is it short-sighted to sell all a country's timber without replanting?", a:"Timber is renewable only if the forest is given time and replanting to recover. Clearing it outright gives a one-time profit but causes erosion, lost springs, reduced rainfall and extinct species, and destroys the chance of future harvests."},
    {q:"Explain how protecting the forest on a watershed safeguards a town's water.", a:"Forest soil and roots act like a sponge: they absorb rain, release it steadily into springs and rivers and filter sediment. Intact forest gives a reliable, clean, year-round supply; clearing brings floods, silt and dry-season shortage."},
    {q:"Why must non-renewable minerals be used with planning rather than mined as fast as possible?", a:"Once extracted they are gone forever, so rapid mining exhausts the national endowment quickly. Planned extraction spreads the benefit over time, earns steady revenue, and allows income to be invested in renewable assets and development before the ore ends."},
    {q:"How can rural communities reduce the damage from fuelwood gathering?", a:"By planting fast-growing woodlots for fuel, using efficient stoves that burn less wood, making charcoal from managed regrowth and protecting the steepest watersheds, so daily fuel needs do not strip the protective forest."},
    {q:"Why is regional cooperation important for managing Liberia's rivers and forests?", a:"Rivers and forests cross borders: the health of shared watersheds and the movement of wildlife and trade do not stop at a boundary. Agreements with Guinea, Sierra Leone and Cote d'Ivoire allow joint management of water, transport, energy and conservation."}
  ],
  activities:[
    "Map the physical regions, rivers and neighbours of Liberia",
    "Survey a local environmental problem and propose a conservation plan",
    "Map the countries and major features of West Africa and Africa",
    "Classify local resources as renewable or non-renewable",
    "Calculate rates of deforestation, reforestation and protected area from data",
    "Debate the balance between logging for income and forest conservation"
  ],
  materials:[
    "Primary text: Regional Geography of West Africa and Africa",
    "Maps of Liberia, West Africa and Africa: physical, political and resources",
    "Environmental photographs and case-study material",
    "Conservation and resource data sets",
    "Graph paper and calculators; WASSCE Q & A Papers 1 and 2"
  ],
  assessment:["Environmental field study","Regional map work","Data-response questions","Debate","Final written examination"]
}

];
