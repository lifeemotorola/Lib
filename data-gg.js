/* Curriculum data — Republic of Liberia, SENIOR HIGH GEOGRAPHY, Grades 10–12.
   Derived from the "Geography 10-12" senior high curriculum guide (61 pp.),
   6 periods per grade, 18 units. Where the guide sets several topics inside one
   period they are merged into that period's unit, as the guide teaches them
   together.

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
    {t:"profile", d:"the outline of the ground surface along a line", x:"A profile