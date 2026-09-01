/* WASSCE (WAEC) — HISTORY course data: Paper 1 (West Africa and the wider
   world, for all candidates) + Paper 2 national history, the LIBERIA
   sections (candidates in Liberia). */
window.WA_his = {
  id: "his",
  name: "History",
  preamble: "The WASSCE History syllabus has two papers. PAPER 1 (for all candidates) covers West Africa and the wider world from earliest times to 2000 — historiography, the trans-Saharan and trans-Atlantic trades, Islam, European contact, the missionary movement, the scramble for and partition of Africa, colonial rule, the problems of independent states, and West Africa in international organizations. PAPER 2 covers the NATIONAL HISTORIES of The Gambia, Ghana, LIBERIA, Nigeria and Sierra Leone up to 2000; candidates sit the section for their own country (for Liberian candidates, the three sections: Liberia from earliest times to 1800; Liberia in the 19th century; and Liberia from 1900 to 2000).",
  aims: [
    "understand what history is, why it is studied, and how it is researched (historiography and historical skills);",
    "appreciate the history of West Africa and the wider world from earliest times to 2000;",
    "study the national history of Liberia — its land, people, the founding of the Commonwealth, independence, and development to 2000;",
    "develop the ability to analyze historical sources, events and their effects critically."
  ],
  papers: [
    { n: "Paper 1", d: "For all candidates — West Africa and the wider world from earliest times to 2000. Fifty multiple-choice objective questions; candidates answer ALL within 1 hour for 50 marks." },
    { n: "Paper 2", d: "National histories (the section for the candidate's own country — for Liberian candidates, the three sections of LIBERIA). A 2-hour structured essay paper of 100 marks: Section A — ten short structured questions, answer ALL for 25 marks; Section B — four structured questions, answer THREE, each carrying 25 marks." }
  ],
  units: [
  /* =============== H1 · HISTORIOGRAPHY & HISTORICAL SKILLS =============== */
  {
    grade: 12, sem: "One", icon: "📜", period: "H1",
    title: "Historiography & Historical Skills",
    subtitle: "What is history and why study it · sources of history · ancient and modern approaches · the prospect of ICT",
    note: "Paper 1, Topic 1 (also in the Liberia sections): what history is and why we study it, the sources of history, historical skills (ancient and modern approaches), and the prospect of ICT in historical studies.",
    objectives: [
      "Define history and explain why it is studied",
      "Identify the sources of history (written, oral, material, pictorial, electronic) and their strengths and weaknesses",
      "Describe historical skills, distinguishing ancient from modern approaches",
      "Explain the prospect of Information and Communication Technology (ICT) in historical studies"
    ],
    terms: [
      { t: "Historiography", d: "The study of how history is written and researched — the methods, sources and approaches of historians.", x: "How different historians interpret the same event" },
      { t: "History", d: "The study of past human activities, experiences and events, and their causes and effects.", x: "The history of Liberia" },
      { t: "Why study history", d: "To learn from the past, understand the present, preserve heritage, develop critical thinking, and inspire patriotism and good citizenship.", x: "Avoiding past mistakes" },
      { t: "Written sources", d: "Documents, books, newspapers, letters, official records, diaries — precise but may be biased or incomplete.", x: "The Constitution of 1847" },
      { t: "Oral sources", d: "Information passed by word of mouth — oral traditions, interviews, folk tales, proverbs; valuable for pre-literate societies but can be distorted over time.", x: "An elder's account of a migration" },
      { t: "Material sources", d: "Physical remains — tools, buildings, coins, pottery, monuments; give direct evidence of the past.", x: "Ancient iron tools" },
      { t: "Pictorial sources", d: "Pictures, photographs, maps, films, paintings — visual evidence of the past.", x: "A photograph of a 19th-century settlement" },
      { t: "Historical skills", d: "The techniques of research and writing history — collecting, verifying, interpreting and presenting evidence.", x: "Checking a source for reliability" },
      { t: "Ancient approach", d: "Early historical writing — often narrative, heroic, and based on oral tradition and chronicles.", x: "Traditional storytelling" },
      { t: "Modern approach", d: "Scientific history — using documentary and material evidence, critical analysis, and methodology.", x: "Archival research" },
      { t: "ICT in history", d: "The use of Information and Communication Technology (computers, internet, digital archives) to store, retrieve and share historical data.", x: "Digitized manuscripts, online databases" }
    ],
    tf: [
      { s: "Oral traditions are a source of history, especially for pre-literate societies.", a: "True", why: "Sources of history — oral traditions, interviews, folk tales." },
      { s: "History is only the study of dates and battles.", a: "False", why: "History is the study of past human activities, experiences and events — economic, social, political and cultural." },
      { s: "ICT (computers and the internet) can be used to store and retrieve historical data.", a: "True", why: "Prospect of ICT in historical studies." },
      { s: "Written sources are always free from bias.", a: "False", why: "Written sources may be biased or incomplete — they must be critically assessed." }
    ],
    mcq: [
      { q: "Historiography is the study of:", o: ["ancient battles only", "how history is written and researched", "only written documents", "maps and charts"], a: 1, why: "Historiography — the methods, sources and approaches of historians." },
      { q: "One main reason for studying history is to:", o: ["learn from the past", "predict the future exactly", "memorize dates only", "avoid all change"], a: 0, why: "Why study history — to learn from the past and understand the present." },
      { q: "Information passed by word of mouth (oral traditions, interviews) is a:", o: ["written source", "oral source", "material source", "pictorial source"], a: 1, why: "Oral sources — valuable for pre-literate societies." },
      { q: "An ancient iron tool discovered on a farm is an example of a:", o: ["written source", "material source", "oral source", "pictorial source"], a: 1, why: "Material sources — physical remains." },
      { q: "A photograph of a 19th-century settlement is a:", o: ["written source", "pictorial source", "material source", "oral source"], a: 1, why: "Pictorial sources — visual evidence." },
      { q: "The use of computers and the internet to store and share historical data is the use of:", o: ["ICT", "oral tradition", "archaeology only", "cartography only"], a: 0, why: "Prospect of ICT in historical studies." },
      { q: "The modern approach to history emphasizes:", o: ["heroic narratives only", "critical analysis of documentary and material evidence", "oral tradition only", "mythology only"], a: 1, why: "Modern approach — scientific, using evidence and methodology." }
    ],
    essay: [
      { q: "Define history and explain why it is studied, giving four reasons. Identify the main sources of history, distinguishing written, oral, material and pictorial sources with one example of each.", marks: 12, outline: [
        "History — the study of past human activities, experiences and events, and their causes and effects",
        "Why study history: (1) to learn from the past (avoid past mistakes); (2) to understand the present and its origins; (3) to preserve heritage and national identity/patriotism; (4) to develop critical thinking and good citizenship; also (5) to inspire and motivate, and (6) to satisfy curiosity",
        "Written sources — documents, books, newspapers, official records, diaries (e.g. the Constitution of 1847); Oral sources — oral traditions, interviews, folk tales, proverbs (e.g. an elder's account of a migration); Material sources — tools, buildings, coins, pottery, monuments (e.g. an ancient iron tool); Pictorial sources — photographs, maps, films, paintings (e.g. a photograph of a 19th-century settlement)",
        "Each source has strengths and weaknesses — written may be biased; oral can be distorted; material is direct but fragmentary; pictorial is visual but may be staged — so sources are cross-checked (corroboration)"
      ] },
      { q: "Distinguish the ancient from the modern approach to history. Explain what is meant by historical skills and the prospect of ICT (Information and Communication Technology) in historical studies.", marks: 10, outline: [
        "Ancient approach — early historical writing, often narrative and heroic, based on oral tradition and chronicles (e.g. traditional storytelling, early chronicles); Modern approach — scientific history, using documentary and material evidence, critical analysis and established methodology",
        "Historical skills — the techniques of researching and writing history: identifying and collecting sources, verifying their reliability (corroboration), interpreting evidence, and presenting findings; includes both the ancient (oral, narrative) and modern (documentary, scientific) approaches",
        "ICT in historical studies — the use of computers, the internet and digital technology to store, retrieve, analyze and share historical data: digitized manuscripts and archives, online databases and libraries, GIS mapping of historical sites, and multimedia presentation; it makes sources more accessible and preserves them",
        "Benefits: faster research, wider access, better preservation; Challenges: digital literacy, access to technology, and the need to verify online sources"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Paper 1, Topic 1 (also in the Liberia sections):" },
      { k: "bul", items: [
        "Historiography and Historical Skills: what is history and why do we study history; sources of history; historical skills (ancient and modern approaches); prospect of ICT in historical studies"
      ] }
    ]
  },
  /* =============== H2 · TRANS-SAHARAN TRADE =============== */
  {
    grade: 12, sem: "One", icon: "🐪", period: "H2",
    title: "Trans-Saharan Trade",
    subtitle: "Origin · organization · effects on the development of West African states",
    note: "Paper 1, Topic 2: the trans-Saharan trade — its origin, organization, and the effects it had on the development of the West African states.",
    objectives: [
      "Explain the origin of the trans-Saharan trade and the commodities exchanged",
      "Describe the organization of the trade — routes, caravans, middlemen, and the role of the Berbers and the camel",
      "Explain the effects of the trade on the development of the West African states (Ghana, Mali, Songhai)"
    ],
    terms: [
      { t: "Trans-Saharan trade", d: "The long-distance trade across the Sahara Desert between West Africa and the Mediterranean/North Africa and the Middle East.", x: "Gold and salt routes" },
      { t: "Gold", d: "The main West African export — from the goldfields of Ghana, Mali and the Bure (later).", x: "Gold dust and nuggets" },
      { t: "Salt", d: "The main North African export — essential for food preservation and diet, carried south in slabs.", x: "Salt from the Sahara" },
      { t: "Other commodities", d: "Also traded: slaves, ivory, kola nuts, textiles, leather, copper, horses, and manufactured goods.", x: "Ivory and kola nuts" },
      { t: "Caravan", d: "A large, organized group of traders and their camels travelling together for safety across the desert.", x: "A caravan of several hundred camels" },
      { t: "The camel", d: "The 'ship of the desert' — its introduction made large-scale trans-Saharan trade possible.", x: "Camel caravans across the Sahara" },
      { t: "Middlemen", d: "The Berbers and Arab traders who controlled the desert routes and the exchange at the oasis towns.", x: "The Berber guides" },
      { t: "Oasis towns", d: "Settlements in the desert that provided water and rest — key points along the trade routes (e.g. Sijilmasa, Timbuktu, Gao).", x: "Timbuktu as a trading and learning centre" }
    ],
    tf: [
      { s: "Gold was the main West African export in the trans-Saharan trade.", a: "True", why: "Origin, organization and the effects on the development of West African states — gold for salt and other goods." },
      { s: "The introduction of the camel made large-scale trans-Saharan trade possible.", a: "True", why: "The camel — the 'ship of the desert' — carried caravans across the Sahara." },
      { s: "The trans-Saharan trade had no effect on the growth of the West African states.", a: "False", why: "The trade enriched and expanded states such as Ghana, Mali and Songhai." }
    ],
    mcq: [
      { q: "The main West African export in the trans-Saharan trade was:", o: ["salt", "gold", "iron", "glass"], a: 1, why: "Gold — from the West African goldfields." },
      { q: "The main North African export to West Africa was:", o: ["gold", "salt", "ivory", "rubber"], a: 1, why: "Salt — carried south in slabs." },
      { q: "The animal that made large-scale trans-Saharan trade possible was the:", o: ["horse", "donkey", "camel", "ox"], a: 2, why: "The camel — the 'ship of the desert'." },
      { q: "A large organized group of traders travelling across the desert is a:", o: ["market", "caravan", "confederacy", "dynasty"], a: 1, why: "Caravan — for safety in the desert." },
      { q: "Which of the following is a West African state that grew rich from the trans-Saharan trade?", o: ["Rome", "Mali", "Egypt", "China"], a: 1, why: "Ghana, Mali and Songhai grew rich from the trade." },
      { q: "Timbuktu and Gao were important because they were:", o: ["port cities on the Atlantic", "oasis/trading towns on the trade routes", "mountain passes", "coastal harbours"], a: 1, why: "Oasis towns — key points along the routes, centres of trade and learning." },
      { q: "One effect of the trans-Saharan trade on the West African states was:", o: ["poverty and decline", "wealth, growth and the rise of powerful states", "the end of all trade", "the loss of all gold"], a: 1, why: "The trade enriched and expanded the states (Ghana, Mali, Songhai)." }
    ],
    essay: [
      { q: "Explain the origin and organization of the trans-Saharan trade, and state four effects it had on the development of the West African states.", marks: 12, outline: [
        "Origin: the desire of North Africa/Mediterranean for gold (and slaves, ivory) and of West Africa for salt and manufactured goods; the Sahara was the barrier, and the introduction of the camel opened the routes (from around the 5th–8th centuries AD)",
        "Organization: long desert routes linking the goldfields of the south (Ghana, Mali) with the Mediterranean ports; caravans of hundreds of camels for safety; the Berbers and Arab middlemen controlled the routes; oasis towns (Sijilmasa, Timbuktu, Gao, Djenné) as resting and trading points; goods exchanged at middle points (the parties often did not meet directly)",
        "Commodities: south — gold, slaves, ivory, kola nuts; north — salt, textiles, leather, copper, horses, manufactured goods",
        "Effects: (1) great wealth for the states (taxes on the trade) — e.g. the gold of Ghana and Mali; (2) the growth and expansion of powerful states and empires; (3) the rise of great trading and learning cities (Timbuktu, Gao, Djenné); (4) cultural contact and the spread of Islam and literacy; (5) the development of a currency/standard of value (gold weights)"
      ] },
      { q: "Identify the main sources of trade in the trans-Saharan trade (commodities exchanged north and south). Describe the role of the camel and the caravan, and explain how the Berbers benefited from the trade.", marks: 10, outline: [
        "Commodities south (West Africa → north): gold (the main one), slaves, ivory, kola nuts, leather, copper",
        "Commodities north (North Africa → West Africa): salt (the main one), textiles/cloth, leather goods, copper, horses, beads, manufactured goods",
        "The camel — the 'ship of the desert': it could carry heavy loads, go long without water, and cross the Sahara, making large-scale, regular trade possible",
        "The caravan — a large organized group of camels and traders travelling together for protection against bandits and the desert; led by experienced guides",
        "The Berbers — the desert people who controlled the routes: they provided guides, protection, and the camels, and acted as middlemen collecting taxes and profits at the oasis towns; their knowledge of the desert gave them a monopoly and great wealth"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Paper 1, Topic 2:" },
      { k: "bul", items: [
        "Trans-Saharan Trade: origin, organization and the effects on the development of West African states"
      ] }
    ]
  },
  /* =============== H3 · ISLAM IN WEST AFRICA =============== */
  {
    grade: 12, sem: "One", icon: "🕌", period: "H3",
    title: "Islam in West Africa",
    subtitle: "Introduction · spread · effects",
    note: "Paper 1, Topic 3: the introduction, spread and effects of Islam in West Africa.",
    objectives: [
      "Explain how and when Islam was introduced to West Africa",
      "Describe the ways in which Islam spread (trade, migration, scholarship, rulers)",
      "State the effects of Islam on West African society (religion, education, culture, politics, architecture)"
    ],
    terms: [
      { t: "Islam", d: "The religion founded by the Prophet Muhammad in the 7th century AD, based on the Quran; one of the world's great religions.", x: "The faith of millions in West Africa" },
      { t: "Introduction of Islam", d: "Islam reached West Africa mainly through the trans-Saharan trade (Arab and Berber traders) from around the 8th–11th centuries AD.", x: "Traders bringing the faith south" },
      { t: "Spread of Islam", d: "The faith spread through trade, migration of scholars, the conversion of rulers, and the establishment of mosques and schools (madrasas).", x: "The scholars of Timbuktu" },
      { t: "Mosque", d: "The Muslim place of worship; its establishment marked the spread of the faith in a town.", x: "The Great Mosque of Djenné" },
      { t: "Madrasa", d: "A Muslim school where the Quran and Islamic learning (and later sciences) were taught.", x: "The learning centres of Timbuktu" },
      { t: "Maliki school of law", d: "The predominant school of Islamic law in West Africa.", x: "Guiding legal practice" },
      { t: "Effects of Islam", d: "The influences on society: education/literacy (Arabic), law, architecture, art, administration, and the unification of peoples under a common faith.", x: "Arabic script, Islamic law" }
    ],
    tf: [
      { s: "Islam reached West Africa mainly through the trans-Saharan trade.", a: "True", why: "Introduction, spread and effects — Arab and Berber traders brought Islam." },
      { s: "The establishment of mosques and schools (madrasas) helped spread Islam.", a: "True", why: "Spread through trade, migration, scholarship, rulers, and mosques/madrasas." },
      { s: "Islam had no effect on West African education or culture.", a: "False", why: "Islam introduced Arabic literacy, learning, law, architecture and administration." }
    ],
    mcq: [
      { q: "Islam was introduced to West Africa mainly through:", o: ["European missionaries", "the trans-Saharan trade", "the slave trade only", "air travel"], a: 1, why: "Arab and Berber traders brought Islam with the trade." },
      { q: "The Muslim place of worship is the:", o: ["church", "mosque", "temple", "shrine"], a: 1, why: "Mosque — its establishment marked the spread of Islam." },
      { q: "A Muslim school for religious and secular learning is a:", o: ["madrasa", "college", "university only", "seminary only"], a: 0, why: "Madrasa — where the Quran and Islamic learning were taught." },
      { q: "One effect of Islam on West African society was:", o: ["the introduction of Arabic literacy and learning", "the end of all trade", "the loss of all culture", "the ban on education"], a: 0, why: "Effects — education/literacy, law, architecture, administration." },
      { q: "Timbuktu became famous as a:", o: ["mining town only", "centre of Islamic learning and trade", "fishing port", "manufacturing city"], a: 1, why: "A great trading and learning centre." },
      { q: "The predominant school of Islamic law in West Africa is the:", o: ["Hanafi", "Maliki", "Shafi'i", "Hanbali"], a: 1, why: "The Maliki school of law." },
      { q: "The conversion of a ruler to Islam usually:", o: ["spread the faith to his people", "ended the faith", "had no effect", "caused the state to collapse"], a: 0, why: "Rulers' conversion helped the spread of Islam." }
    ],
    essay: [
      { q: "Explain how Islam was introduced to West Africa and describe the ways in which it spread. State four effects of Islam on West African society.", marks: 12, outline: [
        "Introduction: Islam reached West Africa from the north (Arabia/North Africa) mainly through the trans-Saharan trade, from around the 8th–11th centuries AD; Arab and Berber traders, travellers and scholars brought the faith",
        "Spread: (1) through trade — Muslim traders settled in the trading towns; (2) migration of Muslim scholars and refugees; (3) the conversion of rulers and chiefs, who encouraged their subjects to convert; (4) the establishment of mosques and madrasas (schools); (5) the appeal of the faith (monotheism, literacy, a sense of equality and community); (6) missionary activities",
        "Effects: (1) religion — a new faith and a sense of unity among diverse peoples; (2) education — the introduction of Arabic literacy and learning (Timbuktu, Djenné); (3) law and administration — Islamic law (the Maliki school) influenced governance and justice; (4) culture — architecture (mosques), art, music and literature in the Arabic tradition; (5) trade and diplomacy — links with the wider Muslim world",
        "Islam became a major force in the empires of Ghana, Mali and Songhai, and in the later jihads (e.g. the Sokoto Caliphate)"
      ] },
      { q: "Distinguish the ancient from the modern approach to the study of the spread of Islam in West Africa. Explain the role of the mosque and the madrasa in the spread of Islam, and give two examples of West African centres of Islamic learning.", marks: 10, outline: [
        "Ancient approach — the study based on oral traditions, chronicles and religious narratives of the spread of Islam; Modern approach — the scientific study using documentary evidence (Arabic chronicles, records), material remains (mosques), and critical analysis of sources",
        "The mosque — the place of worship; it marked the presence of Islam in a town, gathered the community, and was a centre from which the faith spread; rulers built great mosques to show their piety and power",
        "The madrasa — the Muslim school where the Quran, Arabic, and Islamic sciences (law, theology, and later mathematics and astronomy) were taught; it produced scholars who carried the faith further and recorded history",
        "Centres of Islamic learning: Timbuktu (Mali) — famous for its scholars and manuscripts; Djenné (Mali) — the Great Mosque and its learning; also Gao (Songhai) and later the Sokoto Caliphate (Nigeria)",
        "These centres made West Africa a respected part of the Islamic world and preserved a rich scholarly heritage"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Paper 1, Topic 3:" },
      { k: "bul", items: [
        "Islam in West Africa: introduction, spread and effects"
      ] }
    ]
  },
  /* =============== H4 · EUROPEAN CONTACT =============== */
  {
    grade: 12, sem: "One", icon: "⛵", period: "H4",
    title: "European Contact with West Africa",
    subtitle: "Reasons for their coming · immediate effects · West African reaction",
    note: "Paper 1, Topic 4: European contact with West Africa — the reasons for the Europeans' coming, the immediate effects, and the West African reaction.",
    objectives: [
      "Explain the reasons for European contact with West Africa (the search for trade, gold, a route to Asia, the spice trade, and the spread of Christianity)",
      "Describe the early European contacts (the Portuguese, then the Dutch, French, British, Danes)",
      "State the immediate effects of European contact (the trade in gold and other goods, the introduction of new goods and ideas, the beginning of the slave trade)",
      "Describe the West African reaction to the Europeans (initial curiosity and trade, then resistance as the trade turned to the slave trade and colonization)"
    ],
    terms: [
      { t: "European contact", d: "The first meeting and dealings between Europeans (especially the Portuguese from the 15th century) and West Africans.", x: "The Portuguese at the Gold Coast" },
      { t: "Reasons for coming", d: "To find a sea route to Asia (and its spices), to trade for gold and other goods, to spread Christianity, and (later) to acquire territories.", x: "The search for gold and a route to the East" },
      { t: "The Portuguese", d: "The first Europeans to reach West Africa by sea (15th century), who explored the coast and began the gold (and later slave) trade.", x: "Elmina (a Portuguese fort)" },
      { t: "The forts", d: "Coastal forts and trading posts built by the Europeans (e.g. Elmina, Cape Coast) to secure the trade.", x: "Cape Coast Castle" },
      { t: "Immediate effects", d: "The trade in gold, ivory and later slaves; the introduction of new goods (metal, cloth, guns) and ideas; the beginning of coastal European presence.", x: "New goods and the start of the slave trade" },
      { t: "West African reaction", d: "Initially curiosity and trade; then, as the slave trade and later colonization grew, resistance and conflict from the West African states.", x: "Wars against the slave traders and colonizers" }
    ],
    tf: [
      { s: "The Portuguese were the first Europeans to reach West Africa by sea.", a: "True", why: "European contact — the Portuguese, from the 15th century." },
      { s: "One reason for European contact was the search for a sea route to Asia.", a: "True", why: "Reasons for their coming — a route to Asia, gold, the spice trade, and the spread of Christianity." },
      { s: "West Africans welcomed European colonization from the first contact without any resistance.", a: "False", why: "West African reaction — initial curiosity and trade, then resistance as the slave trade and colonization grew." }
    ],
    mcq: [
      { q: "The first Europeans to reach West Africa by sea were the:", o: ["British", "Portuguese", "French", "Dutch"], a: 1, why: "The Portuguese, from the 15th century." },
      { q: "One main reason for European contact with West Africa was the search for:", o: ["a sea route to Asia", "penguins", "icebergs", "volcanoes"], a: 0, why: "Reasons — a route to Asia (spices), gold, and the spread of Christianity." },
      { q: "Coastal forts such as Elmina and Cape Coast were built by the Europeans to:", o: ["build schools", "secure the trade", "grow rice", "hunt game"], a: 1, why: "The forts secured the (gold and slave) trade." },
      { q: "An immediate effect of European contact was the trade in:", o: ["gold and later slaves", "computers", "aircraft", "telephones"], a: 0, why: "Immediate effects — the trade in gold, ivory and later slaves." },
      { q: "The initial West African reaction to the Europeans was mainly:", o: ["war only", "curiosity and trade", "immediate surrender", "no contact at all"], a: 1, why: "West African reaction — initially curiosity and trade." },
      { q: "As the slave trade and colonization grew, the West African reaction became:", o: ["more friendly", "resistance and conflict", "indifference", "adoption of European customs only"], a: 1, why: "Then resistance and conflict as the trade turned to the slave trade and colonization." },
      { q: "Elmina was built by which European power?", o: ["the British", "the Portuguese", "the French", "the Germans"], a: 1, why: "Elmina — a Portuguese fort (later taken by the Dutch and British)." }
    ],
    essay: [
      { q: "Explain the reasons for European contact with West Africa and describe the immediate effects of the contact. State how the West Africans reacted to the Europeans.", marks: 12, outline: [
        "Reasons: (1) the search for a sea route to Asia and its spices (bypassing the overland routes); (2) the desire for gold and other goods (West Africa's gold was famous); (3) the spread of Christianity (missionary zeal); (4) rivalry among European powers and the quest for territories and trade monopolies; (5) the desire for new markets",
        "Immediate effects: (1) the establishment of the coastal trade — gold, ivory and (from the 16th century) slaves; (2) the building of forts and trading posts (Elmina, Cape Coast); (3) the introduction of new goods (metal goods, cloth, guns, alcohol) and new ideas; (4) the beginning of a lasting European coastal presence; (5) the disruption of some local economies and the start of the slave trade",
        "West African reaction: initially curiosity and willing trade (the Europeans were seen as traders); but as the slave trade expanded and the Europeans began to encroach and later to colonize, the reaction turned to resistance — wars against the slave traders and the colonizers, and the formation of alliances to defend the territory",
        "The contact marked the beginning of the long European involvement in West Africa that led to the slave trade, the 'scramble for Africa,' and colonial rule"
      ] },
      { q: "Identify the main European powers that were involved in early contact with West Africa. Describe the role of the coastal forts in the trade, and explain why the West African reaction changed from trade to resistance.", marks: 10, outline: [
        "European powers: the Portuguese (first, 15th c.), then the Dutch, the French, the British, and the Danes (and later the Spanish and the Germans) — each competing for the trade and the coast",
        "The coastal forts: built to secure and protect the trade (gold, and later slaves) — they stored the goods, gave the Europeans a military base, and controlled the exchange at the coast (e.g. Elmina by the Portuguese, later Dutch and British; Cape Coast by the British); they were the hub of the trade and of the later colonial administration",
        "Why the reaction changed: at first the Europeans were only traders and the West Africans traded willingly; but the trade turned to the slave trade (which caused depopulation, war and social breakdown), and the Europeans began to build forts, impose their will, and later to claim the territory (the 'scramble'); the West Africans resisted to protect their people, their sovereignty and their way of life — hence wars and alliances against the slave traders and the colonizers",
        "The forts themselves became symbols of European power and a focus of resistance"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Paper 1, Topic 4:" },
      { k: "bul", items: [
        "European Contact with West Africa: reasons for their coming, immediate effects and West African reaction"
      ] }
    ]
  },
  /* =============== H5 · TRANS-ATLANTIC SLAVE TRADE =============== */
  {
    grade: 12, sem: "One", icon: "⚓", period: "H5",
    title: "The Trans-Atlantic Slave Trade",
    subtitle: "Origin · organization · effects · suppression",
    note: "Paper 1, Topic 5: the trans-Atlantic slave trade — its origin, organization, effects, and its suppression.",
    objectives: [
      "Explain the origin of the trans-Atlantic slave trade (the European demand for labour, the Americas, and the role of the Europeans and West Africans)",
      "Describe the organization of the trade — the 'triangular trade,' the capture and transport of slaves, the 'middle passage,' and the destinations",
      "State the effects of the slave trade on Africa (depopulation, war, underdevelopment, loss of skills) and on the Americas",
      "Explain the suppression of the slave trade (abolition, the British naval blockade, and the reasons for the suppression)"
    ],
    terms: [
      { t: "Trans-Atlantic slave trade", d: "The trade in which enslaved Africans were carried across the Atlantic to the Americas (mainly from the 16th to the 19th century).", x: "The forced voyage to the Americas" },
      { t: "Origin", d: "The European demand for labour in the Americas (the plantations of the Caribbean and America) and the supply of captives from West Africa; it began with the Portuguese and was expanded by the other powers.", x: "The plantations' need for labour" },
      { t: "Triangular trade", d: "The trade route: Europe → West Africa (goods for slaves); West Africa → the Americas (slaves); the Americas → Europe (raw materials such as sugar, cotton, tobacco).", x: "The three-point trade route" },
      { t: "The capture", d: "Slaves were captured in wars, raids and punishments, and often sold by West African kings and middlemen to the Europeans at the coast.", x: "Wars and raids for captives" },
      { t: "The middle passage", d: "The horrific sea voyage across the Atlantic, in which enslaved people were packed into the holds of ships; many died en route.", x: "The crossing to the Americas" },
      { t: "The destinations", d: "The Americas — the Caribbean, Brazil, and the American colonies/USA — where the enslaved people were sold to work on the plantations.", x: "The plantations of the Caribbean" },
      { t: "Effects on Africa", d: "Massive loss of population (especially young, able-bodied people), constant war, the weakening of states, underdevelopment, and the loss of skills and the dignity of the people.", x: "The depopulation of the coast" },
      { t: "Suppression", d: "The ending of the trade — the abolition of slavery (Britain, 1807; the USA, 1808, etc.), the British Royal Navy's West Africa Squadron to intercept slave ships, and the moral and economic arguments against the trade.", x: "The abolition of 1807" }
    ],
    tf: [
      { s: "The trans-Atlantic slave trade carried enslaved Africans to the Americas.", a: "True", why: "Origin, organization, effects and suppression — the trade to the Americas." },
      { s: "The 'middle passage' was the sea voyage across the Atlantic.", a: "True", why: "The middle passage — the horrific crossing in which many died." },
      { s: "The slave trade had no effect on the development of Africa.", a: "False", why: "The slave trade caused massive depopulation, war and underdevelopment in Africa." },
      { s: "Britain abolished the slave trade in 1807.", a: "True", why: "Suppression — abolition (Britain, 1807) and the naval blockade." }
    ],
    mcq: [
      { q: "The main destination of enslaved Africans in the trans-Atlantic trade was:", o: ["Europe", "the Americas", "Asia", "Australia"], a: 1, why: "The Americas — the Caribbean, Brazil, the American colonies/USA." },
      { q: "The trade route Europe → West Africa → the Americas → Europe is called the:", o: ["triangular trade", "circular trade", "linear trade", "spherical trade"], a: 0, why: "The triangular trade." },
      { q: "The 'middle passage' refers to:", o: ["the journey within Europe", "the sea voyage across the Atlantic", "the road across the Sahara", "the trip to the goldfields"], a: 1, why: "The middle passage — the crossing in which many died." },
      { q: "One major effect of the slave trade on Africa was:", o: ["rapid industrialization", "massive loss of population and constant war", "the spread of modern education", "the growth of democracy"], a: 1, why: "Effects — depopulation, war, underdevelopment." },
      { q: "Britain abolished the slave trade in:", o: ["1776", "1807", "1865", "1900"], a: 1, why: "Abolition — Britain, 1807." },
      { q: "The 'triangular trade' carried from the Americas to Europe:", o: ["slaves", "raw materials such as sugar and cotton", "gold only", "nothing"], a: 1, why: "The Americas → Europe: raw materials (sugar, cotton, tobacco)." },
      { q: "One reason for the suppression of the slave trade was:", o: ["moral/religious opposition", "the desire for more slaves", "the growth of the plantation economy", "the wish to keep Africa poor"], a: 0, why: "Suppression — moral and religious arguments, and economic changes (the industrial revolution, the rise of free labour)." }
    ],
    essay: [
      { q: "Explain the origin and organization of the trans-Atlantic slave trade, describing the 'triangular trade' and the 'middle passage.' State four effects of the slave trade on Africa.", marks: 12, outline: [
        "Origin: the European demand for labour in the Americas (the sugar, cotton and tobacco plantations of the Caribbean and America); the supply of captives from West Africa; it began with the Portuguese (15th–16th c.) and was expanded by the other European powers",
        "Organization: the 'triangular trade' — Europe sent manufactured goods (cloth, guns, alcohol, metal) to West Africa; enslaved Africans were carried to the Americas (the 'middle passage'); the Americas sent raw materials (sugar, cotton, tobacco) to Europe",
        "The capture: slaves were captured in wars, raids and as punishment, and sold by West African kings and middlemen to the Europeans at the coastal forts; The 'middle passage': the horrific sea voyage, in which the captives were packed into the holds, and many died from disease, starvation and cruelty; The destinations: the Caribbean, Brazil and the American colonies/USA, where they were sold to work on the plantations",
        "Effects on Africa: (1) massive loss of population, especially young and able-bodied people; (2) constant war and the weakening/overthrow of states; (3) underdevelopment — the loss of labour and skills, the disruption of local economies; (4) the loss of dignity and the social breakdown of families and communities"
      ] },
      { q: "Describe the organization of the trans-Atlantic slave trade with reference to the triangular trade. Explain the reasons for the suppression of the slave trade and the means by which it was suppressed.", marks: 10, outline: [
        "Organization: the triangular trade — Europe → West Africa (manufactured goods exchanged for slaves); West Africa → the Americas (the 'middle passage,' the sea voyage in which the captives were packed into the holds); the Americas → Europe (raw materials — sugar, cotton, tobacco); the Europeans captured/bought the slaves at the coastal forts, transported them, and sold them in the Americas to work on the plantations",
        "Reasons for suppression: (1) moral and religious opposition (the abolitionist movement — the slave was a human being); (2) economic changes — the Industrial Revolution made free (wage) labour more efficient, and new sources of raw material reduced the need for slave labour; (3) the resistance and revolts of the enslaved people; (4) the development of other trades (legitimate trade) that were more profitable",
        "Means of suppression: (1) the abolition of the slave trade by the European nations (Britain, 1807; the USA, 1808; and others); (2) the British Royal Navy's West Africa Squadron, which intercepted and seized slave ships off the African coast; (3) the establishment of treaties with African rulers banning the trade; (4) the promotion of 'legitimate' (non-slave) trade as a replacement",
        "The suppression ended the trade (though slavery itself continued in some places until later), and it marked a turning point in the history of West Africa"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Paper 1, Topic 5:" },
      { k: "bul", items: [
        "Trans-Atlantic slave trade: origin, organization, effects and suppression"
      ] }
    ]
  },
  /* =============== H6 · CHRISTIAN MISSIONARY ACTIVITIES =============== */
  {
    grade: 12, sem: "One", icon: "✝️", period: "H6",
    title: "Christian Missionary Activities in West Africa",
    subtitle: "The suppression of the slave trade · missionary activities and their impact",
    note: "Paper 1, Topic 6: the suppression of the slave trade and the Christian missionary activities in West Africa and their impact.",
    objectives: [
      "Explain how the suppression of the slave trade opened the way for Christian missionary activities",
      "Describe the arrival, work and organizations of the Christian missionaries in West Africa",
      "State the impact of the missionary activities (religion, education, medicine, the English language, and social change)"
    ],
    terms: [
      { t: "Christian missionary activities", d: "The work of Christian missionaries to spread the Christian faith and to provide education, medicine and social services in West Africa (from the early 19th century).", x: "The missionaries' schools and churches" },
      { t: "The missionaries", d: "The Christian workers (society missionaries and priests) sent by the missionary societies (e.g. the Church Missionary Society, the Baptist Missionary Society) to West Africa.", x: "The CMS missionaries" },
      { t: "The impact on religion", d: "The spread of Christianity and the establishment of churches; the conversion of many West Africans; and the later rise of African (independent) churches.", x: "The growth of the churches" },
      { t: "The impact on education", d: "The establishment of schools, which introduced Western (literacy in English) education — the main impact of the missionaries.", x: "The missionary schools" },
      { t: "The impact on medicine", d: "The establishment of hospitals and the introduction of Western medicine and public health.", x: "The mission hospitals" },
      { t: "Social change", d: "The missionaries' influence on social customs (e.g. opposing some traditional practices), the promotion of the English language, and the creation of a new educated class.", x: "The new educated elite" },
      { t: "African (independent) churches", d: "Churches established and led by Africans, breaking away from the foreign missions — a later development showing African ownership of the faith.", x: "The Aladura and other independent churches" }
    ],
    tf: [
      { s: "The suppression of the slave trade opened the way for Christian missionary activities.", a: "True", why: "The suppression of the slave trade; Christian missionary activities and their impact." },
      { s: "The missionaries introduced Western (English) education in West Africa.", a: "True", why: "Impact — the establishment of schools and Western education." },
      { s: "The missionaries had no effect on medicine or public health in West Africa.", a: "False", why: "Impact — the establishment of hospitals and the introduction of Western medicine." }
    ],
    mcq: [
      { q: "Christian missionary activities in West Africa began in large numbers after:", o: ["the start of the slave trade", "the suppression of the slave trade", "the World War", "independence"], a: 1, why: "The suppression of the slave trade opened the way for the missionaries." },
      { q: "One main impact of the Christian missionaries was the introduction of:", o: ["Western (English) education", "the slave trade", "the camel", "the trans-Saharan trade"], a: 0, why: "Impact — the establishment of schools and Western education." },
      { q: "The Christian missionaries also introduced:", o: ["Western medicine and hospitals", "the Sahara", "the gold trade", "the iron age"], a: 0, why: "Impact — the establishment of hospitals and Western medicine." },
      { q: "Churches established and led by Africans, breaking away from the foreign missions, are called:", o: ["foreign missions", "African (independent) churches", "cathedrals only", "synagogues"], a: 1, why: "African (independent) churches — African ownership of the faith." },
      { q: "The missionary societies (e.g. the Church Missionary Society) sent:", o: ["soldiers", "missionaries", "merchants only", "explorers only"], a: 1, why: "The missionaries — the work of the missionary societies." },
      { q: "One social effect of the missionaries was the promotion of:", o: ["the English language", "the slave trade", "the trans-Saharan trade", "isolation"], a: 0, why: "Social change — the promotion of the English language and a new educated class." },
      { q: "The missionaries' work contributed to the creation of:", o: ["a new educated class", "more slaves", "the Sahara", "a desert"], a: 0, why: "Social change — the new educated elite." }
    ],
    essay: [
      { q: "Explain how the suppression of the slave trade opened the way for Christian missionary activities in West Africa. Describe the work of the missionaries and state four impacts of their activities.", marks: 12, outline: [
        "The connection: the suppression of the slave trade (from 1807) removed the main European activity on the coast; the European powers and the missionary societies then turned to 'legitimate' trade and to the moral work of spreading Christianity and civilization; the missionaries came to replace the slave traders, bringing the gospel, education and medicine",
        "The work of the missionaries: (1) spreading the Christian faith (preaching, establishing churches, converting the people); (2) establishing schools (introducing Western/English education); (3) establishing hospitals and introducing Western medicine and public health; (4) translating the Bible and introducing the written (English) language; (5) opposing some traditional social practices and promoting new social values",
        "Impacts: (1) religion — the spread of Christianity and the later rise of African (independent) churches; (2) education — the introduction of Western literacy and the creation of a new educated class; (3) medicine — hospitals and public health; (4) culture/language — the spread of the English language and new social customs; (5) administration — the educated class later took part in the politics of the independence movement",
        "The missionaries were thus a major force in the transformation of West African society in the 19th and early 20th centuries"
      ] },
      { q: "Distinguish the Christian missionaries from the earlier European traders. Describe the role of the missionary schools and hospitals, and explain the rise of the African (independent) churches.", marks: 10, outline: [
        "The earlier European traders — they came for trade (gold, and later slaves), built forts, and sought profit; The Christian missionaries — they came to spread the faith and to provide social services (education, medicine), motivated by religious and moral (and sometimes political) aims; they established churches, schools and hospitals rather than forts",
        "The missionary schools: introduced Western (English) education — literacy, arithmetic and the Christian religion; they produced a new educated class of Africans (teachers, clerks, professionals) who became the leaders of the independence movement; the schools also spread the English language",
        "The missionary hospitals: introduced Western medicine, surgery and public health (vaccination, sanitation); they trained local nursing and medical staff; they provided care where there was no other medical service",
        "The rise of the African (independent) churches: as the African converts grew in number and confidence, some felt that the foreign missions were slow to advance them to leadership and that the missions were associated with the colonizers; Africans therefore established and led their own churches (the independent/African churches), asserting African ownership of the faith and of the church's leadership",
        "This reflected the wider rise of African self-confidence and nationalism"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Paper 1, Topic 6:" },
      { k: "bul", items: [
        "Christian Missionary Activities in West Africa: the suppression of the slave trade; Christian missionary activities and their impact on West Africa"
      ] }
    ]
  },
  /* =============== H7 · THE SCRAMBLE & PARTITION =============== */
  {
    grade: 12, sem: "Two", icon: "🗺️", period: "H7",
    title: "The Scramble for & Partition of West Africa",
    subtitle: "The Industrial Revolution · the scramble for colonies · colonial subjugation, occupation and West African reaction",
    note: "Paper 1, Topic 7: the Industrial Revolution, the scramble for and partition of West Africa, colonial subjugation and occupation, and the West African reaction.",
    objectives: [
      "Explain the Industrial Revolution and how it created the conditions for the scramble for colonies",
      "Describe the reasons for the scramble for Africa (economic, strategic, political and 'civilizing' motives) and the Berlin Conference of 1884–85",
      "Explain the partition of West Africa among the European powers (Britain, France, Germany, Portugal)",
      "Describe colonial subjugation and occupation, and the West African reaction (resistance and the wars of resistance)"
    ],
    terms: [
      { t: "Industrial Revolution", d: "The transformation of the economy from hand production to machine production (from the late 18th century), which created the demand for raw materials and markets that drove the scramble for colonies.", x: "The factories of Britain" },
      { t: "The scramble for Africa", d: "The rapid colonization and division of Africa among the European powers in the late 19th century (the 'New Imperialism').", x: "The division of the continent" },
      { t: "Reasons for the scramble", d: "Economic (raw materials, markets, investment), strategic (naval bases, rivalry), political (national prestige), and 'civilizing' (the 'white man's burden') motives.", x: "The need for rubber and palm oil" },
      { t: "The Berlin Conference (1884–85)", d: "The conference at which the European powers agreed the rules for the colonization of Africa and divided the continent among themselves without African participation.", x: "The partition of Africa" },
      { t: "Partition of West Africa", d: "The division of West Africa among Britain (Gold Coast, Nigeria, Sierra Leone), France (French West Africa — Senegal, Ivory Coast, etc.), Germany (Togoland, Cameroon) and Portugal (Guinea).", x: "The colonial boundaries" },
      { t: "Colonial subjugation/occupation", d: "The military conquest and takeover of the West African states by the Europeans, ending their independence.", x: "The defeat of the resisting states" },
      { t: "West African reaction", d: "The resistance to the colonization — the wars of resistance fought by the West African states and leaders against the invaders.", x: "The wars against the British and the French" }
    ],
    tf: [
      { s: "The Industrial Revolution created the demand for raw materials and markets that helped drive the scramble for colonies.", a: "True", why: "The Industrial Revolution, the scramble for colonies." },
      { s: "The Berlin Conference of 1884–85 divided Africa among the European powers.", a: "True", why: "The Berlin Conference — the partition of Africa." },
      { s: "The West Africans participated in the Berlin Conference and agreed to the division of their continent.", a: "False", why: "The partition was done WITHOUT African participation; the West Africans resisted." },
      { s: "The West African reaction to the colonization included the wars of resistance.", a: "True", why: "Colonial subjugation, occupation and West African reaction." }
    ],
    mcq: [
      { q: "The transformation of the economy from hand to machine production is the:", o: ["Agricultural Revolution", "Industrial Revolution", "Neolithic Revolution", "Scientific Revolution"], a: 1, why: "The Industrial Revolution." },
      { q: "The conference at which the European powers divided Africa was the:", o: ["Versailles Conference", "Berlin Conference (1884–85)", "Geneva Conference", "London Conference"], a: 1, why: "The Berlin Conference of 1884–85." },
      { q: "One main reason for the scramble for Africa was the search for:", o: ["raw materials and markets", "penguins", "icebergs", "volcanoes"], a: 0, why: "Economic reasons — raw materials and markets." },
      { q: "The partition of West Africa was mainly among:", o: ["Britain, France, Germany and Portugal", "Rome, Greece and Egypt", "Japan, China and Korea", "Spain, Italy and Austria"], a: 0, why: "Britain, France, Germany and Portugal divided West Africa." },
      { q: "The West African reaction to the colonization included:", o: ["the wars of resistance", "immediate acceptance", "no reaction", "the invitation of more colonizers"], a: 0, why: "West African reaction — the wars of resistance." },
      { q: "The 'white man's burden' was a:", o: ["civilizing/ideological motive for the scramble", "military weapon", "trade agreement", "religious festival"], a: 0, why: "The 'civilizing' motive — the idea of bringing civilization to Africa." },
      { q: "Colonial subjugation meant:", o: ["the independence of Africa", "the military conquest and takeover of the West African states", "the end of all European involvement", "the growth of African democracy"], a: 1, why: "Colonial subjugation/occupation — the end of the states' independence." }
    ],
    essay: [
      { q: "Explain the Industrial Revolution and how it created the conditions for the scramble for colonies. Describe the reasons for the scramble for Africa and the outcome of the Berlin Conference of 1884–85.", marks: 12, outline: [
        "The Industrial Revolution: the transformation of the economy (from the late 18th century) from hand production to machine production (the factory system); it greatly increased production and created a need for (1) raw materials (rubber, palm oil, cotton, minerals) to feed the factories, and (2) new markets to sell the manufactured goods — and colonies provided both",
        "It also gave the European powers the technology (steamships, railways, the machine gun, quinine) to conquer and control distant territories, and it intensified rivalry among the European powers",
        "Reasons for the scramble: (1) economic — the search for raw materials, markets and places to invest surplus capital; (2) strategic — naval bases and control of trade routes, and rivalry among the powers; (3) political — national prestige and the desire not to be left out; (4) 'civilizing' — the ideology of the 'white man's burden' (bringing Christianity and civilization)",
        "The Berlin Conference of 1884–85: the European powers met (without African representatives) to agree the rules for the colonization — the 'effective occupation' of a territory was required to claim it, and the great rivers were to be open to trade; it legitimized and organized the partition of Africa among the powers, dividing the continent (and West Africa) into colonies without the consent of the Africans"
      ] },
      { q: "Describe the partition of West Africa among the European powers. Explain what is meant by colonial subjugation and occupation, and describe the West African reaction to the colonization.", marks: 10, outline: [
        "Partition of West Africa: the division among the European powers — Britain (the Gold Coast, Nigeria, Sierra Leone, and Gambia), France (French West Africa — Senegal, Ivory Coast, Upper Volta, etc.), Germany (Togoland and Cameroon), and Portugal (Guinea); the boundaries were drawn by the Europeans, often cutting across ethnic and political units, at the Berlin Conference and in the treaties that followed",
        "Colonial subjugation/occupation: the military conquest and takeover of the West African states by the Europeans — the defeat of the states' armies, the imposition of European rule, and the end of the states' independence and sovereignty",
        "The West African reaction: (1) the wars of resistance — the states and leaders fought the invaders (e.g. the Ashanti wars against the British, the Samori Ture resistance against the French, the wars in Nigeria and elsewhere); (2) some leaders sought to negotiate or to ally with one power against another; (3) the resistance was ultimately defeated because of the superior European weapons (the machine gun, steamships) and the division of the African states",
        "The subjugation and occupation brought the period of colonial rule, with its exploitation of Africa's people and resources"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Paper 1, Topic 7:" },
      { k: "bul", items: [
        "The Scramble for and Partition of West Africa: the Industrial Revolution, the scramble for colonies, colonial subjugation, occupation and West African reaction"
      ] }
    ]
  },
  /* =============== H8 · COLONIAL RULE =============== */
  {
    grade: 12, sem: "Two", icon: "👑", period: "H8",
    title: "Colonial Rule in West Africa",
    subtitle: "Patterns of colonial rule · the consolidation of European culture · the colonial economy and underdevelopment · colonial Africa and the two World Wars",
    note: "Paper 1, Topic 8: the patterns of colonial rule, the consolidation of European culture in Africa, the colonial economy and the underdevelopment of Africa, and colonial Africa and the two World Wars.",
    objectives: [
      "Describe the patterns of colonial rule (direct rule, indirect rule, and the different colonial administrations)",
      "Explain the consolidation of European culture in Africa (education, language, religion, administration)",
      "Explain the colonial economy and how it led to the underdevelopment of Africa (the export of raw materials, the import of manufactured goods, the exploitation of labour)",
      "Describe the role and effects of colonial Africa in the two World Wars"
    ],
    terms: [
      { t: "Colonial rule", d: "The rule of West Africa by the European powers (Britain, France, Germany, Portugal) from the late 19th century to independence.", x: "The British and French colonies" },
      { t: "Direct rule", d: "The pattern (used mainly by the French) in which the colonizer ruled directly, replacing the local institutions and administering through European officials.", x: "The French system" },
      { t: "Indirect rule", d: "The pattern (used mainly by the British, e.g. Lord Lugard in Nigeria) in which the colonizer ruled through the existing local rulers and institutions.", x: "Rule through the chiefs" },
      { t: "Consolidation of European culture", d: "The spreading of European culture through the schools (English/French education and language), the churches, the courts, and the administration — reshaping African society.", x: "The English language in the schools" },
      { t: "The colonial economy", d: "An economy organized to serve the colonizer — the export of raw materials (cash crops, minerals) and the import of manufactured goods, with the African labour exploited and local industry suppressed.", x: "The cash-crop economy" },
      { t: "Underdevelopment", d: "The economic backwardness resulting from the colonial exploitation — the lack of industry, infrastructure for the local benefit, and the dependence on the exports of raw materials.", x: "The one-crop economies" },
      { t: "Colonial Africa and the World Wars", d: "The role of the colonies in the two World Wars — the provision of soldiers, labour, and raw materials, and the effects (the war experience, the rise of African consciousness, the push towards independence).", x: "The African soldiers in the wars" }
    ],
    tf: [
      { s: "Indirect rule was the pattern in which the colonizer ruled through the existing local rulers.", a: "True", why: "Patterns of colonial rule — indirect rule (the British, e.g. Lord Lugard)." },
      { s: "The colonial economy was organized to benefit the African people first.", a: "False", why: "The colonial economy served the colonizer — the export of raw materials and the import of manufactured goods." },
      { s: "The colonial period contributed to the underdevelopment of Africa.", a: "True", why: "The colonial economy and the underdevelopment of Africa." },
      { s: "The two World Wars had no effect on the rise of African consciousness.", a: "False", why: "Colonial Africa and the two World Wars — the war experience helped raise African consciousness and the push for independence." }
    ],
    mcq: [
      { q: "The pattern of colonial rule in which the colonizer ruled through the existing local rulers is:", o: ["direct rule", "indirect rule", "military rule", "constitutional rule"], a: 1, why: "Indirect rule — e.g. Lord Lugard in Nigeria." },
      { q: "The pattern of colonial rule used mainly by the French, in which the colonizer ruled directly, is:", o: ["indirect rule", "direct rule", "democratic rule", "tribal rule"], a: 1, why: "Direct rule — the French system." },
      { q: "The colonial economy was organized mainly to:", o: ["develop the local industry", "serve the colonizer (export raw materials, import manufactured goods)", "benefit the African farmers", "create local wealth"], a: 1, why: "The colonial economy served the colonizer." },
      { q: "One result of the colonial economy was the:", o: ["industrialization of Africa", "underdevelopment of Africa", "creation of local factories", "growth of local wealth"], a: 1, why: "The colonial economy and the underdevelopment of Africa." },
      { q: "The consolidation of European culture in Africa was spread mainly through:", o: ["the schools, churches and administration", "the slave trade", "the trans-Saharan trade", "the Sahara"], a: 0, why: "Consolidation — education (English/French), religion, administration." },
      { q: "The two World Wars helped to:", o: ["delay African independence", "raise African consciousness and the push for independence", "end all colonial rule immediately", "strengthen the slave trade"], a: 1, why: "Colonial Africa and the two World Wars — the war experience raised African consciousness." },
      { q: "Lord Lugard is associated with which pattern of colonial rule?", o: ["direct rule", "indirect rule", "military rule", "no rule"], a: 1, why: "Lord Lugard — indirect rule in Nigeria." }
    ],
    essay: [
      { q: "Distinguish direct rule from indirect rule, giving the main feature of each. Explain how the colonial economy led to the underdevelopment of Africa, and state the effects of the two World Wars on colonial Africa.", marks: 12, outline: [
        "Direct rule: the pattern (mainly the French) in which the colonizer ruled directly, replacing or overriding the local institutions and administering through European officials; Indirect rule: the pattern (mainly the British, e.g. Lord Lugard in Nigeria) in which the colonizer ruled through the existing local rulers and institutions (the chiefs), using them as agents of the colonial administration",
        "The colonial economy and underdevelopment: the economy was organized to serve the colonizer — (1) the export of raw materials (cash crops such as palm oil, rubber, groundnut, and minerals) to the mother country; (2) the import of manufactured goods (so that local industry was not developed); (3) the exploitation of African labour (low wages, forced labour); (4) the infrastructure (railways, roads) was built to move the raw materials to the ports, not to develop the local economy; the result was underdevelopment — the one-crop economies, the lack of industry, and the dependence on the exports of raw materials",
        "The effects of the two World Wars on colonial Africa: (1) the colonies provided soldiers, labour and raw materials for the war effort; (2) the African soldiers' experience in the wars (contact with the wider world, the ideals of freedom and equality) raised African consciousness and self-confidence; (3) the war weakened the European powers and made it harder for them to hold their colonies; (4) the war created a demand for greater African participation in government — all of which pushed towards the independence movement"
      ] },
      { q: "Describe the consolidation of European culture in Africa, with reference to education, language, religion and administration. Explain why the colonial period is said to have underdeveloped Africa.", marks: 10, outline: [
        "Consolidation of European culture: (1) education — the establishment of Western schools teaching the European curriculum; (2) language — the imposition of the European languages (English, French) as the languages of administration, education and the courts; (3) religion — the spread of Christianity through the missions; (4) administration — the introduction of the European legal and administrative systems; together these reshaped African society and created a Western-educated elite",
        "Why the colonial period underdeveloped Africa: (1) the economy was organized to serve the colonizer — the export of raw materials and the import of manufactured goods, so that local industry was not developed; (2) the exploitation of African labour (low wages, and in some places forced labour); (3) the infrastructure was built to exploit the resources (to move the raw materials to the ports), not to develop the local economy; (4) the one-crop economies made the colonies dependent on a single export; (5) the education was mainly to create clerks for the colonial administration, not to develop the local economy; the result was economic backwardness (underdevelopment) that the independent states inherited",
        "The underdevelopment was the economic legacy of colonialism that the independent states had to overcome"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Paper 1, Topic 8:" },
      { k: "bul", items: [
        "Colonial Rule in West Africa: patterns of colonial rule, consolidation of European culture in Africa, colonial economy and the underdevelopment of Africa; colonial Africa and the two World Wars"
      ] }
    ]
  },
  /* =============== H9 · PROBLEMS OF INDEPENDENT STATES =============== */
  {
    grade: 12, sem: "Two", icon: "🏛️", period: "H9",
    title: "Problems of Independent West African States",
    subtitle: "Neo-colonialism · economic underdevelopment · unequal development · instability · the military in politics · boundary disputes · the threat to West African unity",
    note: "Paper 1, Topic 9: the nature of politics and the problems of the independent West African states — neo-colonialism, economic underdevelopment, unequal development and instability, the military in West African politics, boundary disputes and the threat to West African unity.",
    objectives: [
      "Explain the nature of politics in the independent West African states and the problem of neo-colonialism",
      "Describe the problems of economic underdevelopment and of unequal development within the states",
      "Explain the problem of political instability and the role of the military in West African politics",
      "Describe the boundary disputes and the threat to West African unity"
    ],
    terms: [
      { t: "Independence", d: "The achievement of political self-government by the West African states (from the late 1950s, e.g. Ghana in 1957, Nigeria and Sierra Leone in 1960).", x: "Ghana, 1957" },
      { t: "Neo-colonialism", d: "The continuation of the economic (and sometimes political) control of the former colonial powers over the independent states — the new form of domination after independence.", x: "The continued economic dominance of the former colonizers" },
      { t: "Economic underdevelopment", d: "The inherited economic backwardness — the one-crop economies, the lack of industry, and the dependence on the exports of raw materials.", x: "The dependence on a single cash crop" },
      { t: "Unequal development", d: "The uneven development within the states — some regions are more developed than others (the concentration of wealth and infrastructure in a few areas).", x: "The gap between the rich and poor regions" },
      { t: "Political instability", d: "The frequent changes of government, coups, and the lack of a stable democratic system in some of the states.", x: "The coups in some West African states" },
      { t: "The military in politics", d: "The involvement of the army in the government — the coups d'état and the military rule that interrupted the civilian (democratic) governments.", x: "The military takeovers" },
      { t: "Boundary disputes", d: "The conflicts over the colonial boundaries (drawn by the Europeans) between the independent states and within them.", x: "The disputes over the colonial borders" },
      { t: "Threat to West African unity", d: "The factors that threaten the unity and cooperation of the West African states — the boundary disputes, the military interventions, and the differences among the states.", x: "The challenge to ECOWAS unity" }
    ],
    tf: [
      { s: "Neo-colonialism is the continuation of the economic control of the former colonial powers over the independent states.", a: "True", why: "Nature of politics: neo-colonialism and economic underdevelopment." },
      { s: "The colonial boundaries, drawn by the Europeans, have led to some boundary disputes.", a: "True", why: "Boundary disputes and the threat to West African unity." },
      { s: "The military has had no role in the politics of the independent West African states.", a: "False", why: "The military in West African politics — the coups and the military rule." },
      { s: "Economic underdevelopment was inherited from the colonial period.", a: "True", why: "Economic underdevelopment — the one-crop economies, the lack of industry." }
    ],
    mcq: [
      { q: "Neo-colonialism is best described as:", o: ["the return of the colonial armies", "the continued economic control of the former colonial powers over the independent states", "the end of all foreign influence", "a form of direct rule"], a: 1, why: "Neo-colonialism — the new form of domination after independence." },
      { q: "One problem of the independent West African states is:", o: ["economic underdevelopment", "excessive industrialization", "too much wealth", "no problems at all"], a: 0, why: "Economic underdevelopment — the one-crop economies, the lack of industry." },
      { q: "The involvement of the army in the government (coups, military rule) is:", o: ["the military in West African politics", "democratic rule", "civilian rule", "constitutional government"], a: 0, why: "The military in West African politics." },
      { q: "The conflicts over the colonial boundaries between the independent states are:", o: ["boundary disputes", "trade disputes", "religious disputes", "sports disputes"], a: 0, why: "Boundary disputes — the colonial borders drawn by the Europeans." },
      { q: "Unequal development within the states means:", o: ["all regions are equally developed", "some regions are more developed than others", "no development at all", "equal wealth for all"], a: 1, why: "Unequal development within states." },
      { q: "Ghana became independent in:", o: ["1947", "1957", "1965", "1970"], a: 1, why: "Ghana — 1957, the first sub-Saharan colony to gain independence." },
      { q: "A factor that threatens West African unity is:", o: ["the boundary disputes and the military interventions", "the common culture", "the shared language", "the cooperative spirit"], a: 0, why: "The threat to West African unity." }
    ],
    essay: [
      { q: "Explain the meaning of neo-colonialism and how it affected the independent West African states. Describe the problems of economic underdevelopment and of unequal development within the states.", marks: 12, outline: [
        "Neo-colonialism: the continuation, after independence, of the economic (and sometimes political) control of the former colonial powers over the independent states — the former colonizers retained the control of the economy (through the trade, the investment, the loans and the management of the industries), so that the states were politically independent but economically dependent; it limited the true freedom and development of the states",
        "Economic underdevelopment: the inherited economic backwardness from the colonial period — (1) the one-crop economies (dependence on a single cash crop or mineral for the exports); (2) the lack of local industry (the import of manufactured goods); (3) the dependence on the exports of raw materials and the imports of finished goods; (4) the inadequate infrastructure; the result was the low standard of living and the need for foreign aid",
        "Unequal development within the states: the uneven development — some regions (usually the areas with the resources or the capital) were more developed (with the roads, the schools, the hospitals) than the others (the rural and the resource-poor areas); this created regional imbalances, the migration from the poor to the rich areas, and the tension between the regions",
        "These problems — neo-colonialism, underdevelopment and unequal development — are the economic challenges that the independent states have had to overcome"
      ] },
      { q: "Explain the problem of political instability in the independent West African states and the role of the military in West African politics. Describe the boundary disputes and explain how they, and the other factors, threaten West African unity.", marks: 10, outline: [
        "Political instability: the frequent changes of government, the coups, and the lack of a stable democratic system in some of the states — caused by the weak institutions inherited from the colonial period, the ethnic and regional tensions, the competition for power, and the economic difficulties",
        "The role of the military: the army intervened in the politics — the coups d'état (the seizure of power by the military) and the military rule, which interrupted the civilian (democratic) governments; the military took power on the grounds of saving the state from the corruption and the instability of the civilian rulers, but the military rule often brought its own problems (the human rights abuses, the lack of democratic accountability)",
        "Boundary disputes: the conflicts over the colonial boundaries (drawn by the Europeans at the Berlin Conference, cutting across the ethnic and political units) — between the independent states (e.g. the disputes over the borders) and within the states (the secessionist movements); the disputes threatened the peace and the cooperation of the states",
        "The threat to West African unity: the boundary disputes, the military interventions (the coups and the wars), the ethnic and regional tensions, and the economic differences among the states all threatened the unity and the cooperation of the West African states (the work of ECOWAS and the OAU/AU); the solution was the diplomacy, the cooperation and the integration (e.g. ECOWAS, the OAU/AU) to resolve the disputes and to promote the unity"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Paper 1, Topic 9:" },
      { k: "bul", items: [
        "Problems of independent West African States: nature of politics — neo-colonialism and economic underdevelopment, unequal development within states and instability; the military in West African politics; boundary disputes and the threat to West African unity"
      ] }
    ]
  },
  /* =============== H10 · WEST AFRICA & INTERNATIONAL ORGANIZATIONS =============== */
  {
    grade: 12, sem: "Two", icon: "🌐", period: "H10",
    title: "West Africa & International Organizations",
    subtitle: "U.N. · O.A.U./African Union · E.C.O.W.A.S. · membership, aims and objectives, achievements and failures",
    note: "Paper 1, Topic 10: West Africa and the international organizations — the United Nations (U.N.), the Organization of African Unity (O.A.U.) / African Union (A.U.), and the Economic Community of West African States (ECOWAS) — their membership, aims and objectives, achievements and failures.",
    objectives: [
      "Describe the United Nations (U.N.) — its membership, aims and objectives, and its role in West Africa",
      "Describe the Organization of African Unity (O.A.U.) and the African Union (A.U.) — their membership, aims and objectives, achievements and failures",
      "Describe ECOWAS — its membership, aims and objectives, achievements and failures",
      "Evaluate the achievements and the failures of these organizations"
    ],
    terms: [
      { t: "United Nations (U.N.)", d: "The global international organization (founded in 1945) for the maintenance of peace and the cooperation of the nations; West African states are members.", x: "The U.N. and West Africa" },
      { t: "U.N. aims", d: "To maintain international peace and security, to develop friendly relations among the nations, and to promote cooperation in solving international problems (economic, social, cultural, humanitarian).", x: "Peacekeeping, development" },
      { t: "O.A.U. (OAU)", d: "The Organization of African Unity (founded in 1963) — the regional organization of the African states for the promotion of unity and cooperation; it was later replaced by the African Union.", x: "The OAU, Addis Ababa" },
      { t: "African Union (AU)", d: "The African Union (founded in 2001/02, replacing the OAU) — the deeper integration of the African states (the 'African Union' with a wider mandate, including the protection of human rights and the intervention in crises).", x: "The AU, the successor of the OAU" },
      { t: "OAU/AU aims", d: "To promote the unity and solidarity of the African states, to defend their sovereignty and territorial integrity, and to promote economic and social cooperation; the AU added the protection of human rights and the intervention in the crises.", x: "The unity of Africa" },
      { t: "ECOWAS", d: "The Economic Community of West African States (founded in 1975) — the regional economic integration body of the West African states.", x: "ECOWAS, the West African integration" },
      { t: "ECOWAS aims", d: "To promote the trade, the free movement of persons and capital, the coordinated economic policies, and the joint development among the West African member states.", x: "The common market of West Africa" },
      { t: "Achievements", d: "The successes of the organizations — the U.N. (the peacekeeping, the development aid), the OAU/AU (the unity of Africa, the settlement of some disputes), ECOWAS (the trade, the free movement, the intervention in the crises — e.g. ECOMOG in Liberia).", x: "The ECOMOG intervention" },
      { t: "Failures", d: "The shortcomings of the organizations — the U.N. (the inability to prevent some conflicts, the veto), the OAU/AU (the non-interference principle, the slow response), ECOWAS (the non-tariff barriers, the differences among the members).", x: "The challenges of the organizations" }
    ],
    tf: [
      { s: "The United Nations was founded in 1945.", a: "True", why: "U.N. — the global organization founded in 1945." },
      { s: "The O.A.U. was founded in 1963 and was later replaced by the African Union.", a: "True", why: "O.A.U. (1963) — replaced by the African Union (2001/02)." },
      { s: "ECOWAS is a global international organization.", a: "False", why: "ECOWAS is a REGIONAL economic integration body of the West African states (founded in 1975)." },
      { s: "One aim of ECOWAS is the free movement of persons and capital among the member states.", a: "True", why: "ECOWAS aims — the trade, the free movement, the coordinated policies." }
    ],
    mcq: [
      { q: "The United Nations (U.N.) was founded in:", o: ["1919", "1945", "1963", "1975"], a: 1, why: "The U.N. — founded in 1945." },
      { q: "The Organization of African Unity (O.A.U.) was founded in:", o: ["1945", "1963", "1975", "2001"], a: 1, why: "The OAU — founded in 1963." },
      { q: "The organization that replaced the O.A.U. is the:", o: ["the United Nations", "the African Union (A.U.)", "ECOWAS", "the EEC"], a: 1, why: "The African Union — the successor of the OAU." },
      { q: "ECOWAS is the:", o: ["Economic Community of West African States", "European Community of West African States", "East Coast Organization of West Africa", "Economic Council of West Africa"], a: 0, why: "ECOWAS — the Economic Community of West African States." },
      { q: "One main aim of ECOWAS is:", o: ["the free movement of persons and capital", "the division of the continent", "the end of all trade", "the isolation of the member states"], a: 0, why: "ECOWAS aims — the trade, the free movement." },
      { q: "The West African states are members of:", o: ["the United Nations only", "the U.N., the OAU/AU and ECOWAS", "no international organization", "only ECOWAS"], a: 1, why: "West Africa and the international organizations." },
      { q: "One achievement of ECOWAS in the 1990s was:", o: ["the ECOMOG intervention to restore peace in Liberia", "the division of Liberia", "the end of all trade", "the isolation of the member states"], a: 0, why: "Achievements — the ECOMOG intervention in the crises (e.g. Liberia)." }
    ],
    essay: [
      { q: "Describe the United Nations (U.N.) and the Organization of African Unity (O.A.U.) / African Union (A.U.), stating for each its membership, aims and objectives, and one achievement and one failure.", marks: 12, outline: [
        "The United Nations (U.N.): membership — the sovereign states of the world (the West African states are members); Aims/objectives — to maintain international peace and security, to develop friendly relations among the nations, and to promote cooperation in solving the international problems (economic, social, cultural, humanitarian); Achievement — the peacekeeping operations and the development aid to the developing countries (including West Africa); Failure — the inability to prevent some conflicts (because of the veto of the permanent members of the Security Council) and the slow response to some crises",
        "The O.A.U. / African Union (A.U.): membership — the sovereign states of Africa (the OAU, founded in 1963, was replaced by the AU in 2001/02); Aims/objectives — to promote the unity and solidarity of the African states, to defend their sovereignty and territorial integrity, and to promote the economic and social cooperation; the AU added the protection of the human rights and the intervention in the crises; Achievement — the promotion of the unity of Africa and the settlement of some of the disputes among the states; Failure — the OAU's principle of non-interference (which limited its ability to deal with the crises and the human rights abuses) and the slow response",
        "Both organizations have played a role in the affairs of West Africa — the U.N. at the global level (the peace, the development), and the OAU/AU at the continental level (the unity, the cooperation) — but they have also had the failures (the inability to prevent some of the conflicts, the slow response)"
      ] },
      { q: "Describe ECOWAS, stating its membership, aims and objectives. Explain two achievements and two failures of ECOWAS.", marks: 10, outline: [
        "ECOWAS: the Economic Community of West African States, founded in 1975; Membership — the West African states (Nigeria, Ghana, Liberia, Sierra Leone, Côte d'Ivoire, Senegal, The Gambia, Guinea, Mali, Burkina Faso, Togo, Benin); Aims/objectives — to promote and expand the trade among the member states, to facilitate the free movement of persons, services and capital, to coordinate the monetary and financial policies, to promote the joint projects and the economic development, and to strengthen the cooperation in the politics, the security and the culture",
        "Achievements: (1) the promotion of the trade and the free movement of the persons and the goods among the member states (the reduction of the tariffs); (2) the intervention in the crises — e.g. the ECOMOG (the ECOWAS Cease Monitoring Group) that intervened to restore the peace in Liberia (and elsewhere) in the 1990s; (3) the promotion of the joint projects and the development",
        "Failures: (1) the non-tariff barriers (the quotas, the licenses) that still restrict the trade among the member states; (2) the differences among the member states (the differences in the level of development, the currencies, the languages) that have slowed the integration; (3) the political crises and the military interventions that have threatened the unity",
        "ECOWAS has been a major force in the integration of West Africa, but it has also had the challenges (the non-tariff barriers, the differences among the members) that it has had to overcome"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Paper 1, Topic 10:" },
      { k: "bul", items: [
        "West Africa and international organizations: United Nations Organization (U.N.O.)/United Nations (U.N.); Organization of African Unity (O.A.U.)/African Union (A.U.); Economic Community of West African States (ECOWAS); etc. — membership, aims and objectives, achievements and failures"
      ] }
    ]
  },
  /* =============== H11 · LIBERIA EARLIEST TIMES TO 1800 =============== */
  {
    grade: 12, sem: "One", icon: "🏞️", period: "H11",
    title: "Liberia: Earliest Times to 1800 (Section A)",
    subtitle: "Land and people · ethnic and linguistic groups · migration · Islam · kingdoms, chiefdoms and confederacies · European contact · the trans-Atlantic slave trade",
    note: "PAPER 2, LIBERIA (for candidates in Liberia only), SECTION A: Liberia from earliest times to 1800 — the land and the people, the ethnic and linguistic groups, the migration, the introduction of Islam, the political institutions, the social and cultural activities, the European contact, and the trans-Atlantic slave trade.",
    objectives: [
      "Describe the land and people of Liberia: the main geographical zones, and the demographic, ethnic and linguistic distribution (Kru, Bassa, Krahn, Gio, Mano, Grebo, Lorma, Kpelle, Belle, Mandingo, Vai, Kissi, Gbandi, Gola, De'Yamnoh, Mende)",
      "Explain the migration of the peoples (due to war, pestilence, drought, overpopulation)",
      "Describe the introduction, spread and effects of Islam in pre-colonial Liberia",
      "Describe the kingdoms, chiefdoms and confederacies, the political institutions, and the social, religious and cultural activities (weaving, blacksmithing)",
      "Explain the European contact with Liberia (economic and social effects) and the trans-Atlantic slave trade (origin, organization, effects, suppression)"
    ],
    terms: [
      { t: "Liberia on broad outline", d: "A country on the west coast of Africa, with three main geographical zones: the coastal plain (south), the central plateau, and the mountainous north (e.g. the Nimba Range).", x: "The coast, the plateau, the mountains" },
      { t: "The ethnic groups", d: "The peoples of Liberia, grouped linguistically — the Kru, the Bassa, the Krahn, the Gio (Mende), the Mano, the Grebo, the Lorma, the Kpelle, the Belle, the Mandingo (Mande), the Vai, the Kissi, the Gbandi, the Gola, the De'Yamnoh (Dei), and the Mende.", x: "The diverse peoples of Liberia" },
      { t: "Migration", d: "The movement of the peoples into and within Liberia, due to war, pestilence (disease), drought, and overpopulation — shaping the ethnic distribution.", x: "The migration of the peoples" },
      { t: "Islam in pre-colonial Liberia", d: "The introduction, spread and effects of Islam among the peoples of Liberia (mainly among the Mandingo/Mande and the traders), bringing the faith, literacy (Arabic) and trade links.", x: "The Muslim traders" },
      { t: "Kingdoms, chiefdoms and confederacies", d: "The forms of political organization in pre-colonial Liberia — the kingdoms (larger, centralized states), the chiefdoms (the smaller units under a chief), and the confederacies (the alliances of the chiefdoms).", x: "The chiefdoms of the various peoples" },
      { t: "Political institutions", d: "The institutions of governance in the chiefdoms/kingdoms — the chief (the ruler), the council of elders, the kings, and the institutions of justice and decision-making.", x: "The chief and the council of elders" },
      { t: "Social, religious and cultural activities", d: "The daily life and culture of the peoples — the social organizations, the religions (the traditional religions), and the cultural activities such as weaving and blacksmithing (and other indigenous crafts).", x: "The weaving, the blacksmithing" },
      { t: "European contact with Liberia", d: "The first contact between the Europeans (the Portuguese, and later the others) and the peoples of the Liberian coast — and its economic and social effects (the trade, and the beginning of the slave trade).", x: "The European traders at the coast" },
      { t: "Trans-Atlantic slave trade in Liberia", d: "The involvement of the Liberian coast in the trans-Atlantic slave trade — its origin, organization, effects (the depopulation, the war), and its suppression.", x: "The slave trade at the Liberian coast" }
    ],
    tf: [
      { s: "The peoples of Liberia include the Kru, the Bassa, the Vai, the Mende and others.", a: "True", why: "Land and people — demographic, ethnic, linguistic distribution." },
      { s: "The migration of the peoples into Liberia was due to war, pestilence, drought and overpopulation.", a: "True", why: "Migration — due to war, pestilence, drought, overpopulation." },
      { s: "Pre-colonial Liberia had no form of political organization.", a: "False", why: "There were kingdoms, chiefdoms and confederacies, with political institutions." },
      { s: "Weaving and blacksmithing were among the cultural activities of pre-colonial Liberia.", a: "True", why: "Social, religious and cultural activities (weaving, blacksmithing)." }
    ],
    mcq: [
      { q: "Which of the following is one of the main geographical zones of Liberia?", o: ["the Sahara Desert", "the coastal plain (south)", "the Andes Mountains", "the Amazon Basin"], a: 1, why: "Liberia — the coastal plain, the central plateau, the mountainous north." },
      { q: "Which of the following is an ethnic group of Liberia?", o: ["the Kru", "the Inuit", "the Maasai", "the Aborigines"], a: 0, why: "The peoples of Liberia — the Kru, the Bassa, the Vai, the Mende, etc." },
      { q: "The migration of the peoples into Liberia was due to:", o: ["war, pestilence, drought, overpopulation", "the desire to visit Europe", "the invention of the airplane", "no reason"], a: 0, why: "Migration — due to war, pestilence, drought, overpopulation." },
      { q: "The forms of political organization in pre-colonial Liberia included:", o: ["kingdoms, chiefdoms and confederacies", "only the democracies", "only the monarchies of Europe", "no organization"], a: 0, why: "Kingdoms, chiefdoms and confederacies — political institutions." },
      { q: "One of the cultural activities of pre-colonial Liberia was:", o: ["weaving and blacksmithing", "computer programming", "automobile manufacturing", "television broadcasting"], a: 0, why: "Social, religious and cultural activities (weaving, blacksmithing)." },
      { q: "Islam was introduced to pre-colonial Liberia mainly through:", o: ["the trade (the Muslim traders)", "the European missionaries", "the airplane", "the internet"], a: 0, why: "The introduction, spread and effects of Islam — the Muslim traders." },
      { q: "The European contact with the Liberian coast led to:", o: ["the trade and the beginning of the slave trade", "the immediate independence", "the end of all contact", "the invention of the radio"], a: 0, why: "European contacts — Liberia (economic and social effects)." }
    ],
    essay: [
      { q: "Describe the land and people of pre-colonial Liberia, with reference to the main geographical zones and the ethnic and linguistic groups. Explain the causes of the migration of the peoples into and within Liberia.", marks: 12, outline: [
        "Land: Liberia is on the west coast of Africa, with three main geographical zones — the coastal plain in the south, the central plateau, and the mountainous north (e.g. the Nimba Range, the highest point); the country has the rivers (the Lofa, the Cestos, the St. Paul, the Mesurado, the Cavally), the forests, and the fertile soil",
        "People: the diverse ethnic and linguistic groups — the Kru, the Bassa, the Krahn, the Gio (Mende), the Mano, the Grebo, the Lorma, the Kpelle, the Belle, the Mandingo (Mande), the Vai, the Kissi, the Gbandi, the Gola, the De'Yamnoh (Dei), and the Mende; each group had its own language, its own territory, and its own culture",
        "Migration: the movement of the peoples into and within Liberia, due to (1) war (the peoples fleeing the wars and the conflicts); (2) pestilence (the diseases and the epidemics); (3) drought (the failure of the rains and the food shortage); (4) overpopulation (the pressure on the land and the resources); the migration shaped the ethnic distribution of the country",
        "The interaction of the peoples (through the trade, the inter-marriage, the migration) created the diverse and rich culture of pre-colonial Liberia"
      ] },
      { q: "Describe the political institutions of pre-colonial Liberia (the kingdoms, the chiefdoms and the confederacies) and the social, religious and cultural activities of the peoples. Explain the economic and social effects of the European contact and of the trans-Atlantic slave trade on the Liberian coast.", marks: 12, outline: [
        "Political institutions: the forms of organization — the kingdoms (the larger, more centralized states), the chiefdoms (the smaller units under a chief), and the confederacies (the alliances of the chiefdoms); the institutions — the chief (the ruler, who was the head of the community), the council of elders (the advisers, who helped the chief in the decisions), the kings (in the kingdoms), and the institutions of justice and decision-making (the courts, the assemblies)",
        "Social, religious and cultural activities: the social organizations (the age-grades, the secret societies, the family); the religions (the traditional religions — the belief in the Supreme Being, the spirits, and the ancestors); the cultural activities — the weaving, the blacksmithing (the making of the iron tools and the weapons), and the other indigenous crafts (the pottery, the carving, the music, the dance)",
        "European contact (economic and social effects): the first contact with the Europeans (the Portuguese, and later the others) at the coast — the trade (the exchange of the goods), the introduction of the new goods (the metal, the cloth, the guns), and the social effects (the change in the economy, the beginning of the dependency); the contact also opened the door to the slave trade",
        "The trans-Atlantic slave trade (origin, organization, effects, suppression): the origin (the European demand for the labour in the Americas); the organization (the capture of the peoples in the wars and the raids, the sale to the Europeans at the coast, the 'middle passage' to the Americas); the effects on the Liberian coast (the massive loss of the population, especially the young and the able-bodied; the constant wars; the weakening of the chiefdoms; the underdevelopment); the suppression (the abolition of the trade, the British naval blockade, the moral and the economic arguments)",
        "The slave trade was a major catastrophe for the peoples of the Liberian coast, and its suppression opened the way for the later developments (the coming of the settlers)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — PAPER 2, LIBERIA, SECTION A (Liberia from earliest times to 1800):" },
      { k: "bul", items: [
        "Historiography and Historical skills: what is history and why we learn history; sources of history; historical skills (ancient and modern approaches); prospect of ICT in historical studies",
        "Land and people: main geographical zones of Liberia; demographic, ethnic, linguistic distribution (Kru, Bassa, Krahn, Gio, Mano, Grebo, Lorma, Kpelle, Belle, Mandingo, Vai, Kissi, Gbandi, Gola, De'Yamnoh, Mende)",
        "Migration: migration due to war, pestilence, drought, overpopulation",
        "Introduction, spread and effects of Islam",
        "Kingdoms, chiefdoms and confederacies: political institutions",
        "Social, religious and cultural activities (weaving, blacksmithing)",
        "European contacts — Liberia (economic and social effects)",
        "Trans-Atlantic slave trade (origin, organization, effects, suppression)"
      ] }
    ]
  },
  /* =============== H12 · LIBERIA IN THE 19TH CENTURY =============== */
  {
    grade: 12, sem: "Two", icon: "🇺🇸", period: "H12",
    title: "Liberia in the 19th Century (Section B)",
    subtitle: "The coming of the settlers · the American Colonization Society · the Commonwealth of Liberia · independence in 1847 · the Constitution · Roberts and Roye · relations with the outside world",
    note: "PAPER 2, LIBERIA (for candidates in Liberia only), SECTION B: Liberia in the 19th century — the effects of the colonization movements, the coming of the migrants (from the USA, the Caribbean and the 'Recaptives'), the settlements of the American Colonization Society, the missionary activities, the formation of the Commonwealth of Liberia, the Declaration of Independence, the Constitution of 1847, and the early political and diplomatic history.",
    objectives: [
      "Explain the effects of the colonization movements on Liberia and the coming of the migrants (from the USA, the Caribbean and the 'Recaptives')",
      "Describe the establishment and administration of the settlements by the American Colonization Society and other organizations",
      "Describe the Christian missionary activities and their impact, and the problems, conflicts and cooperation between the settlers and the indigenous people",
      "Explain the formation and significance of the Commonwealth of Liberia, and territorial expansion and its effects",
      "Explain the reasons for and the significance of the Declaration of Independence (1847) and the importance of the Constitution of 1847",
      "Describe the origin and development of the political parties, the administrations of Joseph J. Roberts and Edward J. Roye, and Liberia's relationship with the outside world (diplomatic recognition, land acquisition, the encroachment by the British and the French, the expansion into the interior)"
    ],
    terms: [
      { t: "The colonization movements", d: "The movements (in the USA and elsewhere) that promoted the settlement of the free Blacks (and others) in Africa — the background to the coming of the settlers to Liberia.", x: "The American Colonization Society" },
      { t: "The migrants", d: "The people who came to Liberia — the freed slaves (the 'Americo-Liberians') from the USA, the people from the Caribbean, and the 'Recaptives' (the Africans recaptured from the slave ships by the British Navy and settled in Sierra Leone and Liberia).", x: "The settlers from the USA and the Caribbean" },
      { t: "The American Colonization Society (ACS)", d: "The American organization (founded in 1816) that organized and funded the settlement of the free Blacks in Africa (Liberia) — it established and administered the early settlements.", x: "The ACS and the first settlers" },
      { t: "The settlements", d: "The early colonies established by the ACS and the other organizations on the Liberian coast (e.g. Cape Mesurado/Monrovia) — the beginning of the Commonwealth.", x: "Cape Mesurado" },
      { t: "The Commonwealth of Liberia", d: "The political entity formed by the settlers — the 'Commonwealth of Liberia' — which declared its independence in 1847 and became the Republic of Liberia.", x: "The founding of the Commonwealth" },
      { t: "The Declaration of Independence", d: "The declaration (in 1847) by which Liberia became an independent republic — the first Black republic in Africa; its reasons and its significance.", x: "Independence, 1847" },
      { t: "The Constitution of 1847", d: "The constitution adopted at independence, modelled on the United States Constitution — it established the structure of the government (the executive, the legislature, the judiciary) and the rights of the citizens.", x: "The 1847 Constitution" },
      { t: "The indigenous people", d: "The native peoples of Liberia (the Kru, the Vai, the Bassa, etc.) — the problems, the conflicts and the cooperation between them and the settlers.", x: "The relations with the natives" },
      { t: "Joseph J. Roberts", d: "The first President of Liberia (elected in 1848) — his administration and his role in the early republic.", x: "The first President" },
      { t: "Edward J. Roye", d: "A President of Liberia (elected in 1870) — his administration, the 'ruling class' (the Americo-Liberians), and the problems of the period.", x: "The Roye administration" },
      { t: "Territorial expansion", d: "The expansion of Liberia's territory into the interior (the treaties with the native chiefs) and its effects (the claims, the disputes).", x: "The expansion into the interior" },
      { t: "Diplomatic recognition", d: "The recognition of Liberia's independence by the outside powers (Britain, France, etc.) — the international standing of the republic.", x: "The recognition by Britain, France" },
      { t: "The encroachment", d: "The encroachment by the British and the French beyond the agreed colonial boundaries (the pressure on Liberia's territory) and the problems of land acquisition.", x: "The British and the French encroachment" }
    ],
    tf: [
      { s: "The American Colonization Society (ACS) organized and funded the settlement of the free Blacks in Liberia.", a: "True", why: "The establishment and administration of the settlements by the ACS." },
      { s: "Liberia declared its independence in 1847.", a: "True", why: "The Declaration of Independence — 1847." },
      { s: "The Constitution of 1847 was modelled on the constitution of Liberia's neighbours.", a: "False", why: "The Constitution of 1847 was modelled on the United States Constitution." },
      { s: "There were problems and conflicts between the settlers and the indigenous people.", a: "True", why: "Problems, conflicts and cooperation between the settlers and indigenous people." }
    ],
    mcq: [
      { q: "The organization that organized and funded the settlement of the free Blacks in Liberia was the:", o: ["the United Nations", "the American Colonization Society (ACS)", "the British Royal Navy", "the OAU"], a: 1, why: "The ACS — the settlement of the free Blacks." },
      { q: "Liberia declared its independence in:", o: ["1776", "1847", "1860", "1900"], a: 1, why: "The Declaration of Independence — 1847." },
      { q: "The Constitution of Liberia (1847) was modelled on the constitution of the:", o: ["United Kingdom", "United States of America", "France", "Ghana"], a: 1, why: "The Constitution of 1847 — modelled on the U.S. Constitution." },
      { q: "The first President of Liberia was:", o: ["Joseph J. Roberts", "Edward J. Roye", "J.S. Duke", "W.V.S. Tubman"], a: 0, why: "Joseph J. Roberts — the first President (elected in 1848)." },
      { q: "The 'Recaptives' were:", o: ["the Europeans who came to Liberia", "the Africans recaptured from the slave ships", "the settlers from the USA only", "the British soldiers"], a: 1, why: "The Recaptives — the Africans recaptured from the slave ships." },
      { q: "Liberia's independence was recognized by:", o: ["Britain, France, etc.", "no country", "only the USA", "only Ghana"], a: 0, why: "Diplomatic recognition by Britain, France, etc." },
      { q: "One problem of the 19th-century Liberia was:", o: ["the encroachment by the British and the French beyond the agreed boundaries", "the excess of territory", "the lack of settlers", "no problems at all"], a: 0, why: "The encroachment by the British and the French; the problems of land acquisition." }
    ],
    essay: [
      { q: "Explain the coming of the migrants to Liberia (from the USA, the Caribbean and the 'Recaptives') and the establishment and administration of the settlements by the American Colonization Society. Describe the problems, the conflicts and the cooperation between the settlers and the indigenous people.", marks: 12, outline: [
        "The coming of the migrants: the effects of the colonization movements (in the USA and elsewhere) that promoted the settlement of the free Blacks (and others) in Africa; the migrants — (1) the freed slaves (the 'Americo-Liberians') from the USA (who were offered the land in Africa); (2) the people from the Caribbean (the free Blacks of the Caribbean); (3) the 'Recaptives' (the Africans who had been recaptured from the slave ships by the British Navy, and who were settled in Sierra Leone and Liberia)",
        "The American Colonization Society (ACS): the American organization (founded in 1816) that organized and funded the settlement of the free Blacks in Africa — it established the settlements on the Liberian coast (e.g. Cape Mesurado/Monrovia), and it administered them (the provision of the land, the supplies, the governance); the other organizations also participated in the settlement",
        "The problems, the conflicts and the cooperation between the settlers and the indigenous people: the problems — the land (the settlers' claims on the land of the native peoples), the cultural differences, the political tension (the settlers' desire for control); the conflicts — the disputes and the wars over the land and the power (e.g. the conflicts with the Grebo and the other peoples); the cooperation — the trade, the inter-marriage, the inter-marriage, and the cooperation in some areas (the settlers and the natives trading, and in some cases cooperating)",
        "The tensions between the settlers and the indigenous people were a major problem of the 19th-century Liberia, and they continued into the 20th century"
      ] },
      { q: "Explain the reasons for and the significance of the Declaration of Independence of Liberia (1847) and the importance of the Constitution of 1847. Describe the origin and development of the political parties, and the administrations of Joseph J. Roberts and Edward J. Roye.", marks: 12, outline: [
        "The reasons for the Declaration of Independence: the settlers' desire for self-government (freedom from the control of the ACS and the USA); the growth of the population and the development of the settlements; the influence of the American ideals (the liberty, the self-government); the readiness of the settlers to govern themselves",
        "The significance: Liberia became the first Black republic in Africa (and the first independent republic in West Africa) — a symbol of the freedom and the self-determination of the Black people; it marked the beginning of the independent state of Liberia",
        "The Constitution of 1847: modelled on the United States Constitution — it established the structure of the government (the executive — the President; the legislature — the Senate and the House of Representatives; the judiciary — the courts) and the rights of the citizens (the bill of rights); it provided the framework for the governance of the republic",
        "The origin and development of the political parties: the two main parties — the True Whig Party and the Liberty Party (the forerunners of the later parties); the parties developed as the republic grew, and they became the vehicles of the politics of the Americo-Liberian 'ruling class'",
        "The administrations: Joseph J. Roberts — the first President (elected in 1848), who consolidated the early republic, expanded the territory (the treaties with the native chiefs), and established the institutions of the state; Edward J. Roye — a President (elected in 1870), whose administration was marked by the rule of the 'ruling class' (the Americo-Liberians), the tension with the indigenous people, and the problems of the finances and the diplomacy (the encroachment by the British and the French)",
        "These early administrations laid the foundations of the Liberian state, but they also created the problems (the dominance of the ruling class, the tension with the natives) that would affect the country for a long time"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — PAPER 2, LIBERIA, SECTION B (Liberia in the 19th century):" },
      { k: "bul", items: [
        "The effects of the colonization movements on Liberia",
        "The coming of the migrants from the USA, the Caribbean and the Recaptives to Liberia",
        "The establishment and administration of the settlements by the American Colonization Society and other organizations",
        "Christian missionary activities and impact",
        "The formation and significance of the Commonwealth of Liberia; problems, conflicts and cooperation between the settlers and indigenous people; territorial expansion and its effects",
        "Declaration of Independence: the reasons for and the significance of the Declaration of Independence; the Constitution of 1847 and its importance",
        "The origin and development of political parties",
        "The administration of Joseph J. Roberts; Edward J. Roye and the ruling class",
        "Liberia's relationship with the outside world: diplomatic recognition by Britain, France, etc.; problems of land acquisition; encroachment by the British and French beyond the agreed colonial boundaries; expansion into the interior"
      ] }
    ]
  },
  /* =============== H13 · LIBERIA 1900 TO 2000 =============== */
  {
    grade: 12, sem: "Two", icon: "🏛️", period: "H13",
    title: "Liberia 1900 to 2000 (Section C)",
    subtitle: "Coleman and Barclay · the Fernando Po crisis · Tubman and Tolbert · the 1980 coup and Doe · the civil war and ECOMOG · the Taylor administration · economic development and education · the international organizations",
    note: "PAPER 2, LIBERIA (for candidates in Liberia only), SECTION C: Liberia from 1900 to 2000 — the political development (the roles of the Presidents, the parties, the Fernando Po crisis, the administrations of Barclay, Tubman and Tolbert, the 1980 coup and Doe, the civil war and ECOMOG, the interim governments, the Taylor administration), the economic development and the spread of education, and Liberia in the international organizations (the U.N., the OAU/AU, ECOWAS, the Mano River Union).",
    objectives: [
      "Explain the roles of the Presidents David E. D. Coleman and Arthur (Allen) Barclay, and the origin and development of the political parties up to 2000",
      "Describe the exportation of labour and the Fernando Po crisis, and the intervention of the League of Nations",
      "Describe the administrations of Edwin Barclay, William V.S. Tubman, and William R. Tolbert Jr.",
      "Explain the 1980 coup d'état and the rule of Samuel K. Doe, the beginning of the civil war (the ECOWAS intervention/ECOMOG activities), the interim governments (1990–1994, 1994–1997), and the administration of Charles Taylor (1997–2000)",
      "Describe the economic development and the spread of education in Liberia",
      "Describe Liberia and the international organizations (the U.N., the OAU/AU, ECOWAS, the Mano River Union)"
    ],
    terms: [
      { t: "David E. D. Coleman", d: "The President of Liberia (1912–1921) — his role in the early 20th century (the fire sales, the diplomacy, the development of the country).", x: "The Coleman administration" },
      { t: "Arthur (Allen) Barclay", d: "The President of Liberia (1912–1930, after Coleman) — his role (the stabilization, the diplomacy, the economic development).", x: "The Barclay administration" },
      { t: "The political parties", d: "The origin and development of the political parties in Liberia up to 2000 — the True Whig Party (which dominated for a long time), the Liberty Party, and the later parties.", x: "The True Whig Party" },
      { t: "The exportation of labour", d: "The scheme (in the early 20th century) to export the Liberian labour to work abroad (e.g. on the plantations in Fernando Po/São Tomé) — and the protests against it.", x: "The labour exportation" },
      { t: "The Fernando Po crisis", d: "The crisis (in the 1920s–30s) over the exportation of the Liberian labour to Fernando Po (São Tomé), the abuses, and the intervention of the League of Nations (which investigated and condemned the practice).", x: "The League of Nations intervention" },
      { t: "Edwin W. Barclay", d: "The President of Liberia (1944–1950) — his administration (the development, the diplomacy, the relations with the USA during the Second World War).", x: "The E. Barclay administration" },
      { t: "William V.S. Tubman", d: "The President of Liberia (1944–1971, a long rule) — his administration (the stability, the economic development, the diplomacy, the relations with the indigenous people).", x: "The Tubman era" },
      { t: "William R. Tolbert Jr.", d: "The President of Liberia (1971–1980) — his administration (the development, the reforms, and the coup that ended his rule).", x: "The Tolbert administration" },
      { t: "The 1980 coup d'état", d: "The coup (in 1980) in which Samuel K. Doe and the military overthrew the Tolbert government — the beginning of the military rule.", x: "The 1980 coup" },
      { t: "Samuel K. Doe", d: "The military leader who took power in the 1980 coup and ruled Liberia (1980–1990) — his rule and the beginning of the civil war.", x: "The Doe regime" },
      { t: "The civil war", d: "The Liberian civil war (beginning in 1989/90) — the conflict between the Doe government and the rebels (Charles Taylor and others), and the ECOWAS intervention (the ECOMOG activities) to restore the peace.", x: "The civil war, ECOMOG" },
      { t: "ECOMOG", d: "The ECOWAS Cease Monitoring Group — the peacekeeping force sent by ECOWAS (led by Nigeria) to intervene in the Liberian civil war and to restore the peace.", x: "The ECOMOG peacekeepers" },
      { t: "The interim governments", d: "The interim governments (1990–1994, and 1994–1997) that governed Liberia during the civil war (the National Provisional Government, and the subsequent governments).", x: "The interim governments" },
      { t: "Charles Taylor", d: "The leader of the rebels who became the President of Liberia (1997–2003) — his administration (1997–2000 in the syllabus), the continuation of the conflict, and the regional crisis.", x: "The Taylor administration" },
      { t: "Economic development and education", d: "The economic development of Liberia (the mining, the agriculture, the development of the infrastructure) and the spread of education (the schools, the universities) from 1900 to 2000.", x: "The development, the education" },
      { t: "Liberia and the international organizations", d: "Liberia's membership and participation in the international organizations — the United Nations (U.N.), the Organization of African Unity (OAU)/African Union (AU), ECOWAS, and the Mano River Union (MRU).", x: "Liberia in the U.N., ECOWAS, the MRU" }
    ],
    tf: [
      { s: "The League of Nations intervened in the Fernando Po crisis over the exportation of Liberian labour.", a: "True", why: "Exportation of labour; the Fernando Po crisis, intervention of the League of Nations." },
      { s: "William V.S. Tubman ruled Liberia for a long period (1944–1971).", a: "True", why: "The administration of William V.S. Tubman — a long rule." },
      { s: "The 1980 coup d'état brought Samuel K. Doe to power in Liberia.", a: "True", why: "1980 coup d'état and Samuel K. Doe." },
      { s: "ECOMOG was a force sent by ECOWAS to intervene in the Liberian civil war.", a: "True", why: "The beginning of the civil war (ECOWAS intervention/ECOMOG activities)." },
      { s: "The Mano River Union (MRU) is an international organization that Liberia belongs to.", a: "True", why: "Liberia and the international organizations — the Mano River Union (MRU)." }
    ],
    mcq: [
      { q: "The President of Liberia who was overthrown in the 1980 coup d'état was:", o: ["William V.S. Tubman", "William R. Tolbert Jr.", "Samuel K. Doe", "Charles Taylor"], a: 1, why: "The 1980 coup — the overthrow of the Tolbert government." },
      { q: "The military leader who took power in the 1980 coup was:", o: ["Samuel K. Doe", "William R. Tolbert Jr.", "Joseph J. Roberts", "Edwin Barclay"], a: 0, why: "1980 coup d'état and Samuel K. Doe." },
      { q: "The peacekeeping force sent by ECOWAS to intervene in the Liberian civil war was:", o: ["the U.N. Peacekeepers", "ECOMOG", "the OAU Army", "the NATO force"], a: 1, why: "ECOWAS intervention — the ECOMOG activities." },
      { q: "The leader of the rebels who became the President of Liberia (1997) was:", o: ["Samuel K. Doe", "Charles Taylor", "William R. Tolbert Jr.", "David Coleman"], a: 1, why: "The administration of Charles Taylor (1997–2000)." },
      { q: "The crisis over the exportation of Liberian labour to Fernando Po (São Tomé) led to the intervention of:", o: ["the League of Nations", "the United Nations", "ECOWAS", "the Mano River Union"], a: 0, why: "The Fernando Po crisis — the intervention of the League of Nations." },
      { q: "The Mano River Union (MRU) is a regional organization of:", o: ["the Mano River countries (Liberia, Sierra Leone, Guinea)", "the European countries", "the American countries", "the Asian countries"], a: 0, why: "Liberia and the international organizations — the Mano River Union (MRU)." },
      { q: "The long-serving President of Liberia (1944–1971) was:", o: ["William V.S. Tubman", "William R. Tolbert Jr.", "Samuel K. Doe", "Edward J. Roye"], a: 0, why: "The administration of William V.S. Tubman." }
    ],
    essay: [
      { q: "Describe the political development of Liberia from 1900 to 1980, with reference to the roles of the Presidents (Coleman, Barclay, Tubman, Tolbert) and the origin and development of the political parties. Explain the Fernando Po crisis and the intervention of the League of Nations.", marks: 12, outline: [
        "The political development (1900–1980): the role of the Presidents — (1) David E. D. Coleman (the diplomacy, the development, the fire sales — the sale of the timber concessions); (2) Arthur (Allen) Barclay (the stabilization, the diplomacy, the economic development); (3) Edwin W. Barclay (the development, the diplomacy, the relations with the USA during the Second World War); (4) William V.S. Tubman (a long rule, 1944–1971 — the stability, the economic development, the diplomacy, the relations with the indigenous people); (5) William R. Tolbert Jr. (1971–1980 — the development, the reforms)",
        "The origin and development of the political parties: the True Whig Party (which dominated the politics of Liberia for a long time, from the 19th century) and the Liberty Party; the parties developed as the republic grew, and the True Whig Party became the dominant party of the 'ruling class' (the Americo-Liberians); the later parties (up to 2000) — the development of the multiparty system",
        "The exportation of labour: the scheme (in the early 20th century) to export the Liberian labour to work abroad (on the plantations in Fernando Po/São Tomé) — the promises of the high wages, but the reality of the abuses (the harsh conditions, the low pay)",
        "The Fernando Po crisis: the crisis (in the 1920s–30s) over the exportation of the Liberian labour to Fernando Po — the protests of the Liberians (the opposition to the scheme), the investigation, and the intervention of the League of Nations (which investigated the abuses and condemned the practice, and which led to the end of the exportation of the labour)",
        "The political development of this period laid the foundations of the modern Liberian state, but it also created the problems (the dominance of the ruling class, the tension with the indigenous people, the economic dependency) that would affect the country"
      ] },
      { q: "Explain the 1980 coup d'état and the rule of Samuel K. Doe. Describe the beginning of the civil war, the ECOWAS intervention (the ECOMOG activities), the interim governments (1990–1994, 1994–1997), and the administration of Charles Taylor (1997–2000).", marks: 12, outline: [
        "The 1980 coup d'état: the coup (in April 1980) in which Samuel K. Doe and a group of the military officers overthrew the government of William R. Tolbert Jr. (who was killed in the coup) — the beginning of the military rule in Liberia",
        "The rule of Samuel K. Doe: Doe became the head of state (and later the President) — his rule was marked by the military government, the attempts at the reforms, the tension with the indigenous people and the opposition, and the growing instability; the dissatisfaction with his rule (the corruption, the favouritism, the human rights abuses) led to the opposition and the rebellion",
        "The beginning of the civil war: the civil war began in 1989/90 — the rebellion (led by Charles Taylor and others) against the Doe government; the conflict between the government and the rebels (and later between the rival rebel groups) — the violence, the displacement of the people, the destruction",
        "The ECOWAS intervention (the ECOMOG activities): ECOWAS (the Economic Community of West African States) intervened to restore the peace — it sent the ECOMOG (the ECOWAS Cease Monitoring Group), a peacekeeping force (led by Nigeria, and the other member states) to Liberia, to stop the fighting, to protect the civilians, and to restore the order; the ECOMOG activities were a major international intervention in the civil war",
        "The interim governments: (1) 1990–1994 — the National Provisional Government (the interim government that tried to govern the country during the war); (2) 1994–1997 — the subsequent government (the continuation of the transition, the peace talks, the elections)",
        "The administration of Charles Taylor (1997–2000): Charles Taylor (the leader of the rebels) won the elections and became the President (in 1997) — his administration (1997–2000 in the syllabus) was marked by the continuation of the conflict (the war with the neighbouring Sierra Leone, the regional crisis), the attempts at the reconstruction, and the problems of the governance; the crisis continued beyond 2000",
        "This period (1980–2000) was the most turbulent in the history of Liberia — the coup, the military rule, the civil war, the intervention, and the transition — and it shaped the modern Liberia"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — PAPER 2, LIBERIA, SECTION C (Liberia from 1900 to 2000):" },
      { k: "bul", items: [
        "Political Development: (a) the roles of Presidents David Coleman and Arthur Barclay; (b) the origin and development of political parties up to 2000; (c) exportation of labour — the Fernando Po crisis, intervention of the League of Nations; the administration of Edwin Barclay, William V.S. Tubman, William R. Tolbert Jr.; 1980 coup d'état and Samuel K. Doe",
        "The beginning of the civil war (ECOWAS intervention/ECOMOG activities); interim government — 1990–1994; 1994–1997; administration of Charles Taylor (1997–2000)",
        "Economic development and the spread of education",
        "Liberia and the: United Nations Organization (UNO); Organization of African Unity (OAU)/African Union (AU); Economic Community of West African States (ECOWAS); Mano River Union (MRU)"
      ] }
    ]
  }
  ]
};
window.WA_SUBJECTS.his = window.WA_his;
