/* WASSCE (WAEC) — GENERAL AGRICULTURE course data: units across the six
   sections of the detailed syllabus — A. Introduction to Agriculture,
   B. Soil Uses and Management, C. Farm Mechanization, D. Crop Production,
   E. Animal Production (incl. fisheries), F. Agricultural Economics,
   Agribusiness and Extension (incl. marketing). */
window.WA_ag = {
  id: "ag",
  name: "General Agriculture",
  preamble: "The WASSCE General Agriculture syllabus (detailed syllabus) is organized into six sections: A. Introduction to Agriculture (importance of agriculture, agricultural education, occupations, measurements, land and its uses, forestry, forest products, sustainable agriculture and good agricultural practices); B. Soil Uses and Management (rocks, soil profile, physical and chemical properties of soil, fertilizers, compost and manure); C. Farm Mechanization (tools, implements, tractors, machines, harvesting machinery, irrigation and drainage, surveying); D. Crop Production (classification, seeds and storage organs, diseases and pests, propagation, cultural practices, ornamental plants, weeds, crop yields); E. Animal Production (breeds, internal organs, products, feeds, pests and parasites, disease control, management, slaughtering, fish farming and fish preservation); and F. Agricultural Economics, Agribusiness and Extension (agricultural economics, factors of production, the production function, agribusiness management, establishment and management of agribusiness, agricultural financing, farm records and accounts, and marketing of agricultural produce).",
  aims: [
    "understand the importance of agriculture to the national economy and the branches of agriculture;",
    "develop practical skills in crop production, animal production, soil management, farm mechanization and fisheries;",
    "understand the principles of agricultural economics, agribusiness and the marketing of agricultural produce;",
    "appreciate sustainable agriculture, good agricultural practices and food safety in national development."
  ],
  papers: [
    { n: "Paper 1", d: "Fifty multiple-choice objective questions drawn from the syllabus. Candidates answer ALL within 1½ hours for 50 marks." },
    { n: "Paper 2", d: "A 2-hour structured essay paper of 100 marks. Section A: ten short structured questions — answer ALL for 25 marks. Section B: four structured questions — answer THREE, each carrying 25 marks." }
  ],
  units: [
  /* =============== AG1 · INTRODUCTION TO AGRICULTURE =============== */
  {
    grade: 12, sem: "One", icon: "🌱", period: "AG1",
    title: "Introduction to Agriculture",
    subtitle: "Importance and branches · agricultural education · occupations and entry requirements · measurements · land and its uses, land tenure",
    note: "Section A, Topics 1–4: the importance of agriculture to the national economy and its branches, agricultural education, agricultural occupations, measurements in agriculture, and land and its uses (land tenure systems in West Africa).",
    objectives: [
      "Define agriculture and its branches (crop production, animal production, horticulture, farm mechanization, soil management, fisheries, forestry, agricultural economics and extension), and explain the role of agriculture in the national economy",
      "Explain the meaning and types of agricultural education (formal, non-formal, informal) and its importance, and describe agricultural occupations, job descriptions and entry requirements",
      "Perform calculations in agriculture (area, volume, percentage, plant density, yield per unit area, rate of application of fertilizers and pesticides, seed rate, dressing percentage of carcasses) and compare indigenous and standardized units of measurement",
      "Describe the uses of land (agricultural and non-agricultural) and the land tenure systems in West Africa (communal, free-hold, lease-hold, tenancy) and their effects on agricultural production"
    ],
    terms: [
      { t: "Agriculture", d: "The science and practice of cultivating crops and rearing animals for food, fibre and other products — including crop production, animal production, horticulture, farm mechanization, soil management, fisheries, forestry, agricultural economics and extension.", x: "Farming crops and livestock" },
      { t: "Role of agriculture in the economy", d: "Agriculture provides food, shelter and raw materials, employs the majority of the population, earns foreign exchange (exports), and is inter-dependent with industry.", x: "Food, fibre, export crops" },
      { t: "Agricultural education", d: "Education in agriculture — formal (general, pre-vocational, vocational), non-formal (agricultural extension, agricultural youth clubs) and informal (apprenticeship).", x: "A vocational agriculture course" },
      { t: "Agricultural occupations", d: "The jobs in agriculture — production of crops and animals, agricultural mechanization, processing of agricultural produce, landscaping, agricultural resource management, forestry, teaching and research, and provision of services.", x: "A crop farmer, an agribusiness manager" },
      { t: "Plant density (population)", d: "The number of plants per unit area — used to plan spacing and calculate seed rate.", x: "Plants per hectare" },
      { t: "Yield per unit area", d: "The amount of crop produced per unit area (e.g. tonnes per hectare).", x: "5 tonnes/ha of rice" },
      { t: "Indigenous measurement", d: "Traditional/local units of measurement (e.g. the bundle, the basket, the local rod) — compared with the standardized (metric) units.", x: "A local basket of groundnut" },
      { t: "Land tenure", d: "The system of land ownership and use — in West Africa: communal land ownership, free-hold title, lease-hold title, and tenancy.", x: "Village land held communally" },
      { t: "Free-hold title", d: "Ownership of land with full rights (indefinite), held by an individual or family.", x: "A deed of ownership" },
      { t: "Lease-hold title", d: "The right to use land for a fixed period under an agreement (lease) with the owner.", x: "A farm lease of 20 years" },
      { t: "Tenancy", d: "The use of another person's land in return for rent or a share of the produce.", x: "A tenant farmer" }
    ],
    tf: [
      { s: "The branches of agriculture include crop production, animal production, horticulture, farm mechanization, soil management, fisheries, forestry, agricultural economics and extension.", a: "True", why: "Definition and branches of agriculture." },
      { s: "Non-formal agricultural education includes agricultural extension and agricultural youth clubs.", a: "True", why: "Types of agricultural education — non-formal e.g. agricultural extension and agricultural youth clubs." },
      { s: "Land tenure systems in West Africa include communal land ownership, free-hold title, lease-hold title and tenancy.", a: "True", why: "Land tenure systems in West Africa." },
      { s: "Indigenous units of measurement are more precise than standardized (metric) units.", a: "False", why: "Advantages and disadvantages of using indigenous and standardized units — the metric system is standardized and precise." }
    ],
    mcq: [
      { q: "Which of the following is a branch of agriculture?", o: ["horticulture", "astrophysics", "architecture", "pharmacy"], a: 0, why: "The branches include horticulture." },
      { q: "An important role of agriculture in the national economy is the provision of:", o: ["food and raw materials", "only clothing", "only entertainment", "no role"], a: 0, why: "Food, shelter, raw material, and the inter-dependence of agriculture and industry." },
      { q: "Agricultural extension work is an example of:", o: ["formal education", "non-formal agricultural education", "informal education only", "no education"], a: 1, why: "Non-formal e.g. agricultural extension and agricultural youth clubs." },
      { q: "Learning a trade by working under an experienced farmer (apprenticeship) is:", o: ["formal education", "informal education", "non-formal education", "vocational education"], a: 1, why: "Informal e.g. apprenticeship." },
      { q: "Land owned with full, indefinite rights by an individual or family is held under:", o: ["communal ownership", "free-hold title", "lease-hold title", "tenancy"], a: 1, why: "Free-hold title — full ownership." },
      { q: "The number of plants per unit area is called the:", o: ["yield", "plant density (population)", "seed rate", "coverage"], a: 1, why: "Plant density/population." },
      { q: "One advantage of standardized (metric) units over indigenous units is that they are:", o: ["vary from place to place", "uniform and precise", "harder to use", "more expensive"], a: 1, why: "Standardized units are uniform and precise." }
    ],
    essay: [
      { q: "Define agriculture and state five branches. Explain the role of agriculture in the national economy, with reference to food, shelter, raw materials and the inter-dependence of agriculture and industry.", marks: 12, outline: [
        "Agriculture — the science and practice of cultivating crops and rearing animals for food, fibre and other products",
        "Branches: crop production, animal production, horticulture, farm mechanization, soil management, fisheries, forestry, agricultural economics and extension",
        "Role in the national economy: (1) food — feeds the population (staples and food crops); (2) shelter — provides building materials (timber, thatch); (3) raw materials — for industry (cotton for textiles, oil palms for oil, rubber, cashews); (4) employment — employs the majority of the labour force; (5) foreign exchange — export crops earn the foreign exchange; (6) inter-dependence with industry — industry processes the agricultural produce (agro-processing) and supplies inputs (fertilizers, machinery) to agriculture; agriculture provides the market for industry",
        "Agriculture is thus the backbone of the economy of most West African countries"
      ] },
      { q: "Describe the uses of land (agricultural and non-agricultural) and the land tenure systems in West Africa (communal ownership, free-hold title, lease-hold title, tenancy), stating one merit and one demerit of each system.", marks: 10, outline: [
        "Uses of land: agricultural — crop farming, livestock, fisheries; non-agricultural — forestry, game and wildlife, building/housing, industry, roads, recreation",
        "Land tenure systems in West Africa: (1) Communal land ownership — the land is owned by the community/village (the traditional system); Merit: security and shared responsibility, prevents alienation to strangers; Demerit: lack of individual incentive, disputes over boundaries and use, difficulty of using the land as collateral",
        "(2) Free-hold title — individual/family ownership with full, indefinite rights; Merit: security of tenure and incentive to invest, can be used as collateral; Demerit: concentration of land in few hands, possible neglect and speculation",
        "(3) Lease-hold title — the right to use the land for a fixed period under a lease; Merit: access to land for those without ownership, the landlord benefits from the rent; Demerit: insecurity (the tenant may not invest long-term), disputes at the end of the lease",
        "(4) Tenancy — use of another's land for rent or a share of the produce; Merit: easy access to land for the landless; Demerit: the tenant has little incentive to improve the land, disputes over the share of the produce"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Topics 1–4:" },
      { k: "bul", items: [
        "1. Importance of agriculture to the national economy: definition and branches of agriculture (crop production, animal production, horticulture, farm mechanization, soil management, fisheries, forestry, agricultural economics and extension); role of agriculture in the national economy (food, shelter, raw material, the inter-dependence of agriculture and industry); agricultural education (meaning and types — formal e.g. general, pre-vocational and vocational; non-formal e.g. agricultural extension and agricultural youth clubs; informal e.g. apprenticeship; merits and demerits of the formal type; importance — manpower development, acquisition of leadership skills, inculcating the spirit of voluntarism in the youth, strengthening democracy and enhancing rural development); agricultural occupations and job description and entry requirements (production of crops and animals, agricultural mechanization, processing of agricultural produce, landscaping, agricultural resource management, forestry, teaching and research, provision of services)",
        "3. Measurements in agriculture: calculations in agriculture (area, volume, percentage, plant density, yield per unit area, rate of application of fertilizers and pesticides, seed rate, dressing percentage of carcasses); comparison between indigenous measurement and standardized units of measurement (advantages and disadvantages)",
        "4. Land and its uses: uses of land — agricultural and non-agricultural (agriculture, forestry, game and wildlife, fisheries); land tenure systems in West Africa (communal land ownership, free-hold title, lease-hold title, tenancy); effects of land tenure systems on agricultural production (merits and demerits of each system)"
      ] }
    ]
  },
  /* =============== AG2 · FORESTRY & FOREST PRODUCTS =============== */
  {
    grade: 12, sem: "One", icon: "🌲", period: "AG2",
    title: "Forestry & Forest Products",
    subtitle: "Definition of forest/forestry · salient features · forest products and by-products · deforestation · forest management · game and wildlife",
    note: "Section A, Topics 5–6: the introduction to forestry, the forest products and their contribution to national development, the meaning/causes/effects of deforestation, forest management practices, and game and wildlife conservation.",
    objectives: [
      "Define a forest and forestry, and distinguish between the two; state the salient features of forestry",
      "Identify the types of plants and animals in the forest and the uses of forest products and by-products (timber and non-timber)",
      "Explain the contribution of the forest to national development (climate, water, soil, species conservation; wood for industry, construction and fuel; employment and income)",
      "Explain the meaning, causes and effects of deforestation",
      "Describe forest management practices and game and wildlife conservation"
    ],
    terms: [
      { t: "Forest", d: "A large area of land covered with trees and associated plant and animal life.", x: "The tropical rainforest" },
      { t: "Forestry", d: "The science and practice of establishing, managing and harvesting forests — the management of the forest as a resource.", x: "Planting and managing timber trees" },
      { t: "Salient features of forestry", d: "A long-term activity; occupies a large area for a long period; the trees develop over several years; poses lots of risks (fire, pests, storms); provides business opportunities.", x: "A 20-year timber crop" },
      { t: "Timber products", d: "The wood products — sawn timber, plywood — for buildings, furniture, railway sleepers, paper, boats and canoes, carving, utensils, toys, educational equipment.", x: "Sawn timber for building" },
      { t: "Non-timber forest products", d: "The products from the forest other than wood — game and wildlife, skins and hides, medicinal plants, foods and spices, ropes, roofing materials, sponge, snails, ivory.", x: "Medicinal plants, shea nuts" },
      { t: "Contribution of forests", d: "The forest conserves the climate, water, soil, and plant and animal species; it sustains agricultural production and provides wood for industry, construction and fuel; it provides employment and income (local and foreign) and supports social, educational and health activities.", x: "The forest and the water table" },
      { t: "Deforestation", d: "The clearing/removal of the forest (cutting down the trees) — its meaning, causes and effects on the environment and the national economy.", x: "The cleared forest for farmland" },
      { t: "Causes of deforestation", d: "The clearing of the forest for farmland and grazing, logging (legal and illegal), fuelwood/charcoal making, mining, settlement, and fire.", x: "Slash-and-burn farming" },
      { t: "Effects of deforestation", d: "Soil erosion, loss of biodiversity, disruption of the water cycle (flooding, drought), loss of the forest products and income, and contribution to climate change.", x: "The gullies after the trees are gone" },
      { t: "Forest management", d: "The practices of conserving and sustainably using the forest — replanting (afforestation, reforestation), controlled logging, fire prevention, and the enforcement of forest laws.", x: "Reforestation programmes" },
      { t: "Game and wildlife", d: "The wild animals of the forest (and the parks) — conserved for food, income (tourism), and the balance of nature.", x: "The wildlife in the national parks" }
    ],
    tf: [
      { s: "Forestry is the science and practice of establishing, managing and harvesting forests.", a: "True", why: "Definition of forest and forestry — the differences between forestry and forests are required." },
      { s: "Forestry is a short-term activity that provides no business opportunities.", a: "False", why: "Salient features — long-term activity, occupies large area, develops over several years, poses risks, provides business opportunities." },
      { s: "Deforestation contributes to soil erosion and the loss of biodiversity.", a: "True", why: "Meaning, causes and effects of deforestation." },
      { s: "Non-timber forest products include medicinal plants, foods and spices, and game.", a: "True", why: "Identification and uses of forest products and by-products." }
    ],
    mcq: [
      { q: "The science and practice of establishing, managing and harvesting forests is:", o: ["a forest", "forestry", "deforestation", "afforestation only"], a: 1, why: "Forestry — the management of the forest." },
      { q: "Which of the following is a salient feature of forestry?", o: ["it is a short-term activity", "it is a long-term activity that develops over several years", "it poses no risks", "it provides no business opportunities"], a: 1, why: "Salient features — long-term, large area, several years, risks, business opportunities." },
      { q: "Which of the following is a non-timber forest product?", o: ["sawn timber", "plywood", "medicinal plants", "railway sleepers"], a: 2, why: "Non-timber forest products — medicinal plants, foods, spices, game, etc." },
      { q: "One major cause of deforestation is:", o: ["the planting of more trees", "the clearing of the forest for farmland and grazing", "the enforcement of forest laws", "the conservation of wildlife"], a: 1, why: "Causes — clearing for farmland/grazing, logging, fuelwood, mining, settlement, fire." },
      { q: "One effect of deforestation is:", o: ["soil erosion and the loss of biodiversity", "the increase in rainfall", "the growth of more trees", "the improvement of the soil"], a: 0, why: "Effects — soil erosion, loss of biodiversity, water-cycle disruption." },
      { q: "The practice of planting trees to restore a cleared forest is:", o: ["deforestation", "reforestation (afforestation)", "logging", "charcoal making"], a: 1, why: "Forest management — replanting (afforestation/reforestation)." },
      { q: "A contribution of the forest to national development is the:", o: ["conservation of the climate, water and soil", "increase in soil erosion", "loss of employment", "reduction of water"], a: 0, why: "The forest conserves the climate, water, soil and species." }
    ],
    essay: [
      { q: "Distinguish between a forest and forestry. State four salient features of forestry. Identify the types of plants and animals in the forest, and give four uses each of the timber and the non-timber forest products.", marks: 12, outline: [
        "A forest — a large area of land covered with trees and the associated plant and animal life; Forestry — the science and practice of establishing, managing and harvesting the forest (the management of the forest as a resource)",
        "Salient features of forestry: (1) a long-term activity; (2) occupies a large area for a long period; (3) the trees develop over several years; (4) poses lots of risks (fire, pests, storms); (5) provides business opportunities",
        "Types of plants in the forest: trees, shrubs, herbs, climbers, fungi; Types of animals: birds, insects, mammals, reptiles, amphibians, snails",
        "Uses of timber products: for buildings, furniture, railway sleepers, paper, boats and canoes, carving, utensils, toys, educational equipment",
        "Uses of non-timber forest products: game and wildlife (food, tourism/income), skins and hides (leather), medicinal plants (medicine), foods and spices (food), ropes and roofing materials (building), sponge (cleaning)"
      ] },
      { q: "Explain the meaning, causes and effects of deforestation. Describe the forest management practices and game and wildlife conservation that can check deforestation and conserve the forest.", marks: 10, outline: [
        "Meaning — the clearing/removal of the forest (the cutting down of the trees)",
        "Causes: (1) the clearing of the forest for farmland and grazing (slash-and-burn farming); (2) logging (legal and illegal); (3) fuelwood and charcoal making; (4) mining; (5) settlement and road building; (6) forest fire",
        "Effects on the environment and the national economy: (1) soil erosion and land degradation (gullies); (2) the loss of biodiversity (the plants and animals); (3) the disruption of the water cycle — flooding and drought; (4) the loss of the forest products and the income/employment; (5) the contribution to climate change (the loss of the carbon sink)",
        "Forest management practices: (1) afforestation and reforestation (the planting of the trees to replace the cleared forest); (2) controlled/regulated logging (the harvesting of only the mature trees, and the replanting); (3) fire prevention and control; (4) the enforcement of the forest laws (the banning of the illegal logging); (5) the promotion of the alternative sources of fuel (the biogas, the improved stoves); (6) agroforestry (the growing of the trees with the crops)",
        "Game and wildlife conservation: the establishment of the national parks and the wildlife reserves; the banning of the poaching; the protection of the habitat; the regulation of the hunting (the game) — these conserve the wildlife and the forest, and provide the income (the tourism)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Topics 5–6:" },
      { k: "bul", items: [
        "5. Introduction to forestry: definition of forest and forestry (differences between forestry and forests); salient features of forestry (long-term activity; occupies large area for a long period; develop over several years; poses lots of risks; provides business opportunities)",
        "6. Forest products and their contribution to national development: types of plants (trees, shrubs, herbs, climbers, fungi) and animals (birds, insects, mammals, reptiles, amphibians, snails) in the forest; contributions of the forest to national development (conservation of climate, water, soil, plant and animal species; sustenance of agricultural production; provision of wood for industry, construction and fuel); uses of timber products (buildings, furniture, railway, paper, boats and canoes, carving, utensils, toys, educational equipment) and non-timber forest products (game and wildlife, skins and hides, plant medicine, foods and spices, ropes, roofing materials, sponge); contribution of forest and forest products to employment, income generation (local and foreign), social and educational activities and health; identification and uses of forest products and by-products such as sawn timber, plywood, medicinal plants, snails, animal skins and ivory",
        "Meaning, causes and effects of deforestation (on the environment and the national economy); forest management practices; game and wildlife conservation"
      ] }
    ]
  },
  /* =============== AG3 · SUSTAINABLE AGRICULTURE & FOOD SAFETY =============== */
  {
    grade: 12, sem: "One", icon: "🍚", period: "AG3",
    title: "Sustainable Agriculture, Good Agricultural Practices & Food Safety",
    subtitle: "The concepts of sustainable agriculture and GAP · food quality and safety standards · key players (EPA, FDA, GSA, ISO)",
    note: "Section A, Topic 7: the concepts of sustainable agriculture and good agricultural practices (GAP), and the standards in food quality and safety assurance (the key players and the local and international bodies).",
    objectives: [
      "Explain the concepts of sustainable agriculture and good agricultural practices (GAP)",
      "Explain the importance of standards in food quality and safety assurance in domestic, regional and international markets",
      "Identify the key players in food quality and safety assurance (the private and public sectors — e.g. EPA, the Food and Drugs Authority and GSA)",
      "Describe the food safety practices by the private, national and international or global standards along the value chain, and the local and international bodies responsible (e.g. GSA, EPA, ISO)"
    ],
    terms: [
      { t: "Sustainable agriculture", d: "Agriculture that meets the present needs without compromising the ability of future generations to meet their own needs — it conserves the soil, water and the environment while producing the food.", x: "Farming that does not degrade the land" },
      { t: "Good Agricultural Practices (GAP)", d: "The set of practices (the safe use of the inputs, the proper handling, the hygiene) that ensure the safe, quality production of the food from the farm to the consumer.", x: "The safe use of the pesticides" },
      { t: "Food quality", d: "The characteristics of the food (the safety, the nutrition, the taste, the appearance) that make it acceptable and fit for consumption.", x: "The clean, safe food" },
      { t: "Food safety", d: "The assurance that the food is free from the hazards (the biological, the chemical, the physical) that can cause harm to the consumer.", x: "The food free from the contamination" },
      { t: "The value chain", d: "The sequence of the processes (the production, the processing, the packaging, the storage, the transport, the marketing) along which the food moves from the farm to the consumer.", x: "The rice from the farm to the market" },
      { t: "EPA", d: "The Environmental Protection Agency — the public body responsible for the environment (and the food safety related to the environment, e.g. the pesticides).", x: "The regulation of the pesticides" },
      { t: "Food and Drugs Authority (FDA)", d: "The public body responsible for the regulation and the safety of the food and the drugs.", x: "The approval of the food products" },
      { t: "GSA", d: "The (standards) body responsible for the standards (e.g. the Ghana Standards Authority — the national standards body).", x: "The national food standards" },
      { t: "ISO", d: "The International Organization for Standardization — the global body that sets the international standards (e.g. the ISO 22000 for the food safety).", x: "The international food-safety standard" }
    ],
    tf: [
      { s: "Sustainable agriculture conserves the soil, water and the environment while producing the food.", a: "True", why: "The concept of sustainable agriculture." },
      { s: "Good Agricultural Practices (GAP) ensure the safe, quality production of the food from the farm to the consumer.", a: "True", why: "The concept of good agricultural practices (GAP)." },
      { s: "Food safety is concerned with the assurance that the food is free from the hazards that can cause harm.", a: "True", why: "Food safety — free from the biological, chemical and physical hazards." },
      { s: "The ISO is a local (national) standards body.", a: "False", why: "The ISO is the INTERNATIONAL (global) standards body; the GSA is the local/national body." }
    ],
    mcq: [
      { q: "Agriculture that meets the present needs without compromising the ability of future generations to meet their own needs is:", o: ["intensive farming only", "sustainable agriculture", "monoculture", "slash-and-burn farming"], a: 1, why: "The concept of sustainable agriculture." },
      { q: "Good Agricultural Practices (GAP) are concerned with:", o: ["the safe, quality production of the food", "the increase of the contamination", "the use of the banned pesticides", "the reduction of the yield"], a: 0, why: "The concept of GAP — the safe, quality production." },
      { q: "The sequence of processes along which the food moves from the farm to the consumer is the:", o: ["food chain only", "value chain", "supply chain of the factory", "marketing board"], a: 1, why: "Food safety practices along the value chain." },
      { q: "The International Organization for Standardization (ISO) is:", o: ["a local standards body", "a global (international) standards body", "a farming co-operative", "a bank"], a: 1, why: "ISO — the international standards body." },
      { q: "One of the key players in food quality and safety assurance (public sector) is the:", o: ["the Food and Drugs Authority (FDA)", "the farm cooperative", "the supermarket", "the trader"], a: 0, why: "Key players — EPA, the Food and Drugs Authority, GSA (public); the private sector also." },
      { q: "Food safety is concerned with ensuring that the food is free from:", o: ["the hazards (biological, chemical, physical)", "the vitamins", "the colour", "the taste"], a: 0, why: "Food safety — free from the hazards that can cause harm." },
      { q: "A food-safety standard along the value chain should cover:", o: ["only the farm", "the production, processing, packaging, storage, transport and marketing", "only the market", "only the factory"], a: 1, why: "Food safety practices along the value chain." }
    ],
    essay: [
      { q: "Explain the concepts of sustainable agriculture and good agricultural practices (GAP). Describe the importance of standards in food quality and safety assurance in the domestic, regional and international markets.", marks: 12, outline: [
        "Sustainable agriculture — agriculture that meets the present needs (the production of the food) without compromising the ability of the future generations to meet their own needs; it conserves the soil, the water and the environment (the biodiversity), while maintaining the productivity (e.g. the crop rotation, the organic farming, the conservation tillage, the integrated pest management)",
        "Good Agricultural Practices (GAP) — the set of practices that ensure the safe, quality production of the food from the farm to the consumer; they include the safe use of the inputs (the fertilizers, the pesticides — the proper storage, the application, the respect of the waiting period), the hygiene (the clean water, the proper handling), the proper storage and the transport, and the record-keeping",
        "Importance of the standards in food quality and safety assurance: (1) in the domestic market — the protection of the health of the consumers, the assurance of the quality of the local food, and the confidence in the local products; (2) in the regional market (e.g. the ECOWAS, the EAC) — the facilitation of the trade (the common standards), the protection of the consumers, and the competitiveness of the regional products; (3) in the international market — the compliance with the international standards (the export of the food to the other countries), the access to the global markets, and the protection of the reputation of the country",
        "The standards ensure that the food is safe and of good quality, and they protect the consumers, the producers and the trade"
      ] },
      { q: "Identify the key players in food quality and safety assurance (the private and the public sectors), and the local and the international bodies responsible. Describe the food safety practices along the value chain.", marks: 10, outline: [
        "Key players: (1) the public sector — the EPA (the Environmental Protection Agency — the environment and the pesticides), the Food and Drugs Authority (FDA — the food and the drugs), the GSA (the national standards body), and the other government agencies (the agriculture ministry, the health ministry); (2) the private sector — the food producers, the processors, the marketers (the supermarkets), the traders, and the certification bodies",
        "Local (national) bodies: the GSA (the standards), the FDA (the food and the drugs), the EPA (the environment); International (global) bodies: the ISO (the International Organization for Standardization — e.g. the ISO 22000 for the food safety), the Codex Alimentarius (the international food standards), the WHO (the health), and the FAO (the agriculture)",
        "Food safety practices along the value chain: (1) the production (the farm) — the safe use of the inputs, the hygiene, the GAP; (2) the processing — the clean processing, the proper temperature, the packaging; (3) the storage — the proper conditions (the temperature, the humidity), the prevention of the contamination; (4) the transport — the clean vehicles, the proper handling; (5) the marketing (the sale) — the hygiene of the sellers, the display, the information to the consumer (the labelling, the date of the expiry)",
        "The standards (the local and the international) guide these practices, and the bodies (the GSA, the EPA, the FDA, the ISO) enforce and monitor them"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Topic 7:" },
      { k: "bul", items: [
        "7. Sustainable agriculture and good agricultural practices (GAP): the concepts of sustainable agriculture and good agricultural practices",
        "Knowledge and understanding of the importance of standards in food quality and safety assurance in domestic, regional and international markets are required",
        "Key players in food quality and safety assurance (private and public sectors) should be covered — e.g. EPA, Food and Drugs Authority and GSA",
        "Food safety practices by private, national and international or global standards along the value chain are required",
        "Local and international bodies responsible for food quality and safety assurance — e.g. GSA, EPA, ISO — should be covered"
      ] }
    ]
  },
  /* =============== AG4 · SOIL USES & MANAGEMENT =============== */
  {
    grade: 12, sem: "One", icon: "🪱", period: "AG4",
    title: "Soil Uses & Management",
    subtitle: "Rocks · soil profile · physical and chemical properties · living organisms · fertilizers · compost and farm yard manure",
    note: "Section B: rocks, the soil profile, the laboratory work on the physical and chemical properties of the soil, the living organisms in the soil, the fertilizers (organic and inorganic), and the preparation of compost and farm yard manure.",
    objectives: [
      "Identify the common rock types (igneous, sedimentary, metamorphic) and give a simple description of the soil profile",
      "Perform experiments to determine the physical properties of the soil (texture by manual feel and sedimentation, mechanical analysis by sieves, moisture content by weight, porosity and water holding capacity, capillary action)",
      "Demonstrate the chemical properties of the soil (soil acidity using litmus paper and colour chart) and the presence of living organisms in the soil",
      "Identify the fertilizers (organic and inorganic), their methods of application, and calculate the rates of application (heap and pit methods)",
      "Demonstrate the preparation of compost and farm yard manure"
    ],
    terms: [
      { t: "Igneous rock", d: "Rock formed from the cooling of the magma/lava (e.g. granite, basalt).", x: "Granite" },
      { t: "Sedimentary rock", d: "Rock formed from the accumulation of the sediments (e.g. sandstone, limestone, shale).", x: "Limestone" },
      { t: "Metamorphic rock", d: "Rock changed from an existing rock by the heat and the pressure (e.g. marble, slate, gneiss).", x: "Marble (from the limestone)" },
      { t: "Soil profile", d: "The vertical section of the soil showing its layers (the horizons) — the topsoil (A), the subsoil (B), the parent material (C) and the bedrock.", x: "The layers of the soil" },
      { t: "Soil texture", d: "The relative proportions of the sand, the silt and the clay in the soil — determined by the manual feel (wet or dry) and the sedimentation.", x: "Sandy, loamy, clayey" },
      { t: "Mechanical analysis", d: "The determination of the soil texture by the use of the sieves (the separation of the particles by size).", x: "The sieve analysis" },
      { t: "Moisture content", d: "The amount of water in the soil — determined by the weight (the drying of the moist soil sample).", x: "The 20% moisture" },
      { t: "Porosity", d: "The proportion of the pore spaces (the air and the water) in the soil — and the water holding capacity (the amount of water the soil can hold).", x: "The clay has a high porosity" },
      { t: "Capillary action", d: "The movement of the water in the soil through the small pores (against gravity) — demonstrated by the capillary experiment.", x: "The water rising in the soil" },
      { t: "Soil acidity (pH)", d: "The degree of the acidity/alkalinity of the soil — demonstrated using the simple tests (the litmus paper, the colour chart).", x: "The acidic soil (the red soil)" },
      { t: "Organic fertilizer", d: "The fertilizer from the organic matter (the manure, the compost) — e.g. the farm yard manure, the compost.", x: "The manure" },
      { t: "Inorganic (chemical) fertilizer", d: "The fertilizer from the chemicals (the minerals) — e.g. the NPK, the urea.", x: "The compound fertilizer (the NPK)" },
      { t: "Heap method", d: "The method of application of the fertilizer by spreading it in a heap (on the soil surface).", x: "The heap of the manure" },
      { t: "Pit method", d: "The method of application of the fertilizer by placing it in a pit (in the soil, at the planting).", x: "The fertilizer in the planting pit" },
      { t: "Compost", d: "The decomposed organic matter (the plant and animal wastes) — prepared in the compost heap/pit.", x: "The compost from the farm wastes" },
      { t: "Farm yard manure (FYM)", d: "The manure from the farm animals (the dung and the urine mixed with the litter) — a common organic fertilizer.", x: "The cow dung manure" }
    ],
    tf: [
      { s: "The common rock types are igneous, sedimentary and metamorphic.", a: "True", why: "Identification of the common rock types." },
      { s: "Soil texture can be determined by the manual feel (wet or dry) and by the sedimentation.", a: "True", why: "Examination of the texture by the manual feel and by the sedimentation." },
      { s: "The porosity of the soil is the amount of the water in the soil.", a: "False", why: "The porosity is the proportion of the pore spaces; the moisture content is the amount of the water." },
      { s: "The farm yard manure is an organic fertilizer.", a: "True", why: "Fertilizers — organic (the manure, the compost) and inorganic (the chemicals)." }
    ],
    mcq: [
      { q: "Granite is an example of a:", o: ["sedimentary rock", "igneous rock", "metamorphic rock", "soil"], a: 1, why: "Igneous rock — from the cooling of the magma." },
      { q: "Marble is formed from limestone by:", o: ["weathering", "metamorphism (the heat and the pressure)", "sedimentation", "volcanic eruption only"], a: 1, why: "Metamorphic rock — the limestone → the marble." },
      { q: "The vertical section of the soil showing its layers is the:", o: ["soil texture", "soil profile", "soil pH", "soil colour"], a: 1, why: "The soil profile — the horizons (A, B, C)." },
      { q: "The relative proportions of the sand, the silt and the clay in the soil determine its:", o: ["colour", "texture", "pH", "fertility only"], a: 1, why: "The soil texture." },
      { q: "The test that uses the litmus paper and the colour chart determines the:", o: ["soil texture", "soil acidity (pH)", "soil moisture", "soil porosity"], a: 1, why: "The demonstration of the soil acidity." },
      { q: "The urea (an N fertilizer) is an example of a:", o: ["organic fertilizer", "inorganic (chemical) fertilizer", "pesticide", "herbicide"], a: 1, why: "The inorganic (chemical) fertilizer." },
      { q: "The method of placing the fertilizer in a pit (at the planting) is the:", o: ["heap method", "pit method", "broadcasting", "spraying"], a: 1, why: "Both the heap and the pit methods are required." }
    ],
    essay: [
      { q: "Identify the three common rock types, giving one example of each. Describe the soil profile (the horizons). Explain how you would determine the texture and the moisture content of a soil sample.", marks: 12, outline: [
        "Rock types: (1) Igneous — from the cooling of the magma/lava (e.g. granite, basalt); (2) Sedimentary — from the accumulation of the sediments (e.g. sandstone, limestone, shale); (3) Metamorphic — changed from an existing rock by the heat and the pressure (e.g. marble from the limestone, slate from the shale)",
        "Soil profile: the vertical section of the soil showing the layers (the horizons) — the A horizon (the topsoil — the dark, fertile layer, rich in the organic matter), the B horizon (the subsoil — the leached layer, less organic matter), the C horizon (the parent material — the weathered rock), and the bedrock (the solid rock below)",
        "Determination of the texture: (1) by the manual feel — the wetting of the soil and the rubbing between the fingers (the sandy feels gritty, the loamy feels smooth and mouldable, the clayey feels sticky); (2) by the sedimentation — the shaking of the soil in the water and the letting it settle (the sand settles first, then the silt, then the clay — the proportions give the texture); (3) by the mechanical analysis — the use of the sieves (the separation of the particles by size)",
        "Determination of the moisture content: (1) the weighing of the moist soil sample (the initial weight, W₁); (2) the drying of the sample (in the oven/at the sun) to the constant weight; (3) the weighing of the dry sample (the final weight, W₂); (4) the calculation: the moisture content = (W₁ − W₂)/W₁ × 100%",
        "Other lab work: the porosity and the water holding capacity (the amount of water the soil holds after the drainage); the capillary action (the rising of the water in the soil); the soil acidity (the litmus paper, the colour chart); the living organisms in the soil (the demonstration of the worms, the microbes)"
      ] },
      { q: "Distinguish between the organic and the inorganic fertilizers, giving two examples of each. Describe the heap and the pit methods of application of the fertilizers, and explain how you would prepare the compost and the farm yard manure.", marks: 10, outline: [
        "Organic fertilizer — from the organic matter (the decomposed plant and animal materials); examples: the farm yard manure (the FYM), the compost, the green manure; it improves the soil structure and the organic matter, but has a low nutrient concentration",
        "Inorganic (chemical) fertilizer — from the chemicals (the minerals); examples: the NPK (the compound), the urea (the nitrogen), the superphosphate (the phosphorus); it has a high nutrient concentration, but does not improve the soil structure",
        "Methods of application: (1) the heap method — the spreading of the fertilizer in a heap (on the soil surface, near the plant); (2) the pit method — the placing of the fertilizer in a pit (in the soil, at the planting — the fertilizer is covered with the soil); the choice depends on the type of the fertilizer and the crop",
        "Calculation of the rate of application: the amount of the fertilizer per unit area (e.g. the kg per hectare) — based on the recommendation",
        "Preparation of the compost: (1) the collection of the organic wastes (the plant residues, the animal dung, the kitchen waste); (2) the layering (the green (the nitrogen-rich) and the brown (the carbon-rich) materials); (3) the wetting and the turning (the aeration); (4) the decomposition (over weeks) to the dark, crumbly compost",
        "Preparation of the farm yard manure: (1) the collection of the dung and the urine of the farm animals (with the litter/straw); (2) the piling in the farm yard (the heap); (3) the decomposition (the rotting, over weeks/months) to the dark manure; (4) the application (the heap or the pit method)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section B (Soil Uses and Management):" },
      { k: "bul", items: [
        "1. Rocks: identification of the common rock types — igneous, sedimentary and metamorphic",
        "2. Soil profile: identification and simple description of the soil profile",
        "3. Laboratory work on the physical properties of the soil: (a) examination of the texture by the manual feel (wet or dry) and by the sedimentation, porosity and capillary experiments; (b) mechanical analysis by the use of the sieves; (c) determination of the moisture content of a moist soil sample by weight; (d) determination of the porosity and the water holding capacity; (e) demonstration of the capillary action",
        "4. Laboratory work on the chemical properties of the soil: demonstration of the soil acidity using the simple tests — e.g. the litmus paper and the colour chart",
        "5. Laboratory work to demonstrate the presence of the living organisms in the soil",
        "6. Fertilizers (organic and inorganic): identification, methods of application (both the heap and the pit methods) and calculations of the rates of application",
        "7. Simple demonstration of the compost and the farm yard manure preparation"
      ] }
    ]
  },
  /* =============== AG5 · FARM MECHANIZATION =============== */
  {
    grade: 12, sem: "One", icon: "🚜", period: "AG5",
    title: "Farm Mechanization",
    subtitle: "Farm tools and equipment · tractor/animal-drawn implements · the farm tractor · simple farm machines · harvesting machinery · irrigation and drainage · surveying",
    note: "Section C: farm tools and equipment, the tractor-drawn and animal-drawn implements, the farm tractor, the simple farm machines, the harvesting and post-harvest tools/machinery, the irrigation and drainage, and the elementary surveying instruments.",
    objectives: [
      "Identify, describe and use the farm tools and equipment (hoe, cutlass, garden trowel, hand fork, shovel, spade, rake, sickle, secateurs, shears, long-handled hoe, pruning knife, budding knife), and state their care and maintenance",
      "Identify the tractor-drawn and animal-drawn implements (ploughs, harrows, ridgers, planters, cultivators), the major parts and their functions, and their care and maintenance",
      "Identify the major components of the farm tractor, and describe its operation, servicing and maintenance",
      "Identify, operate, and maintain the simple farm machines (mistblower, knapsack sprayer, mower, power tiller), and calibrate the knapsack sprayer",
      "Identify and use the harvesting and post-harvest tools, equipment and machinery (sickle, cutlass, groundnut lifter, mattock; combine harvester, cassava grater, corn miller, corn sheller, groundnut decorticator)",
      "Identify and operate the simple irrigation and drainage equipment (watering can, sprinkler head, tiles), and identify the elementary surveying instruments (measuring tape, ranging poles, compass, Gunter's chain, pegs, theodolite, dumpy level, Abney level) and their uses and care"
    ],
    terms: [
      { t: "Farm tools", d: "The hand tools of the farm — the hoe, the cutlass, the garden trowel, the hand fork, the shovel, the spade, the rake, the sickle, the secateurs, the shears, the long-handled hoe, the pruning knife and the budding knife.", x: "The hoe, the cutlass" },
      { t: "Plough", d: "The implement that turns the soil (the primary tillage) — tractor-drawn or animal-drawn.", x: "The mouldboard plough" },
      { t: "Harrow", d: "The implement that breaks the clods and levels the soil (the secondary tillage), after the ploughing.", x: "The disc harrow" },
      { t: "Ridger", d: "The implement that forms the ridges (the beds) for the planting.", x: "The ridge-forming implement" },
      { t: "Planter/cultivator", d: "The planter — the implement that makes the holes and places the seeds; the cultivator — the implement that weeds the crops (the inter-tillage).", x: "The seed planter" },
      { t: "Farm tractor", d: "The prime mover of the farm — the major components (the engine, the transmission, the wheels, the hydraulics), and its operation, servicing and maintenance.", x: "The 40-hp tractor" },
      { t: "Mistblower", d: "The machine that sprays the fine mist (the pesticides) on the crops.", x: "The mistblower for the spraying" },
      { t: "Knapsack sprayer", d: "The hand-held sprayer (the tank on the back) that sprays the pesticides/herbicides — calibrated for the proper rate.", x: "The 16-litre knapsack sprayer" },
      { t: "Mower/power tiller", d: "The mower — the machine that cuts the grass/forage; the power tiller — the small machine that tills the soil.", x: "The walk-behind power tiller" },
      { t: "Combine harvester", d: "The machine that combines the harvesting (the cutting, the threshing, the cleaning) of the grain crops.", x: "The rice combine" },
      { t: "Post-harvest machinery", d: "The machines for the processing after the harvest — the cassava grater, the corn miller, the corn sheller, the groundnut decorticator.", x: "The corn sheller" },
      { t: "Irrigation", d: "The artificial supply of water to the crops — the simple equipment: the watering can, the sprinkler head, the tiles (the drainage).", x: "The sprinkler irrigation" },
      { t: "Drainage", d: "The removal of the excess water from the soil — e.g. the tiles (the underground drainage).", x: "The tile drainage" },
      { t: "Elementary surveying instruments", d: "The instruments for the simple surveying — the measuring tape, the ranging poles, the compass, the Gunter's chain, the pegs, the theodolite, the dumpy level and the Abney level.", x: "The Gunter's chain" }
    ],
    tf: [
      { s: "The plough is used for the primary tillage (the turning of the soil).", a: "True", why: "Tractor-drawn and animal-drawn implements — the ploughs." },
      { s: "The harrow is used to break the clods after the ploughing.", a: "True", why: "The harrows — the secondary tillage." },
      { s: "The knapsack sprayer does not need to be calibrated.", a: "False", why: "The skill to calibrate the knapsack sprayer is also assessed." },
      { s: "The combine harvester combines the cutting, the threshing and the cleaning of the grain crops.", a: "True", why: "Harvesting and processing machinery — the combine harvester." }
    ],
    mcq: [
      { q: "The implement used to turn the soil (the primary tillage) is the:", o: ["harrow", "plough", "ridger", "sickle"], a: 1, why: "The plough — the primary tillage." },
      { q: "The implement used to break the clods after the ploughing is the:", o: ["plough", "harrow", "planter", "mower"], a: 1, why: "The harrow — the secondary tillage." },
      { q: "The prime mover of the farm (the machine that pulls the implements) is the:", o: ["the harrow", "the farm tractor", "the sickle", "the rake"], a: 1, why: "The farm tractor — the prime mover." },
      { q: "The machine that sprays the pesticides in a fine mist is the:", o: ["the mistblower", "the plough", "the corn miller", "the theodolite"], a: 0, why: "The mistblower — the fine mist." },
      { q: "The machine that combines the cutting, the threshing and the cleaning of the grain crops is the:", o: ["the power tiller", "the combine harvester", "the cassava grater", "the sprinkler"], a: 1, why: "The combine harvester." },
      { q: "The instrument used to measure the angles (the surveying) is the:", o: ["the compass only", "the theodolite", "the sickle", "the watering can"], a: 1, why: "The elementary surveying instruments — the theodolite (and the Abney level for the angles of the slope)." },
      { q: "The equipment used for the irrigation (the sprinkling of the water) is the:", o: ["the sprinkler head", "the plough", "the decorticator", "the ranging pole"], a: 0, why: "The simple irrigation equipment — the sprinkler head." }
    ],
    essay: [
      { q: "Identify and describe the farm tools and equipment (the hoe, the cutlass, the garden trowel, the hand fork, the shovel, the spade, the rake, the sickle, the secateurs, the pruning knife), stating the use of each and two methods of their care and maintenance.", marks: 12, outline: [
        "Farm tools and their uses: (1) the hoe — the weeding and the digging (the cultivation); (2) the cutlass — the clearing of the weeds and the grass; (3) the garden trowel — the transplanting and the small digging (the seedbed); (4) the hand fork — the loosening of the soil and the weeding; (5) the shovel — the moving of the loose materials (the soil, the manure); (6) the spade — the digging (the heavy soil); (7) the rake — the levelling of the soil and the gathering of the debris; (8) the sickle — the cutting of the grass and the harvesting; (9) the secateurs — the pruning of the branches (the clean cut); (10) the pruning knife — the pruning and the budding (the sharp cut)",
        "Care and maintenance: (1) the cleaning after the use (the removal of the soil and the sap — the prevention of the rust and the disease); (2) the sharpening of the blades (the regular honing); (3) the oiling/greasing of the moving parts (the prevention of the rust); (4) the proper storage (the dry place, away from the children); (5) the repair of the handles (the replacement of the broken handles)",
        "The proper care of the tools ensures their longevity, the efficiency of the work, and the safety of the operator"
      ] },
      { q: "Describe the tractor-drawn and the animal-drawn implements (the ploughs, the harrows, the ridgers, the planters and the cultivators), identifying the major parts and their functions. Explain the major components of the farm tractor, and describe its operation, servicing and maintenance.", marks: 10, outline: [
        "Tractor-drawn and animal-drawn implements: (1) the plough (the mouldboard plough — the mouldboard, the share, the landside — the turning of the soil); (2) the harrow (the disc/tine harrow — the discs/tines — the breaking of the clods); (3) the ridger (the ridging shares — the forming of the ridges); (4) the planter (the seed box, the furrow opener, the seed delivery — the making of the holes and the placing of the seeds); (5) the cultivator (the tines/hares — the weeding of the crops); the functions — the primary tillage (the plough), the secondary tillage (the harrow), the bed-making (the ridger), the sowing (the planter), and the inter-tillage (the cultivator)",
        "Major components of the farm tractor: (1) the engine (the power — the diesel engine); (2) the transmission (the gears, the clutch — the transfer of the power); (3) the wheels (the drive and the steering); (4) the hydraulics (the lifting of the implements); (5) the PTO (the power take-off — the driving of the implements)",
        "Operation: the starting (the checking of the oil, the fuel, the water), the driving (the gears, the steering), and the hitching of the implements (the three-point linkage)",
        "Servicing and maintenance: (1) the daily checks (the oil, the coolant, the fuel, the tyres); (2) the regular servicing (the oil and the filter changes, at the intervals); (3) the greasing of the bearings; (4) the cleaning of the air filter; (5) the adjustment of the valves and the belts; (6) the winterization/summerization; (7) the storage (the clean, dry place)",
        "The proper servicing and maintenance ensure the reliability, the fuel efficiency, and the safety of the tractor"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section C (Farm Mechanization):" },
      { k: "bul", items: [
        "1. Farm tools and equipment: identification, description, uses and maintenance of the hoe, cutlass, garden trowel, hand fork, shovel, spade, rake, sickle, secateurs, shears, long-handled hoe, pruning knife and budding knife",
        "2. Tractor-drawn and animal-drawn implements: identification, description and uses of the ploughs, harrows, ridgers, planters and cultivators; identification of the major parts of the implements and their functions, care and maintenance",
        "3. Farm tractor: identification and functions of the major components; its operation, servicing and maintenance",
        "4. Simple farm machines: identification, operation, care and maintenance of the mistblower, knapsack sprayer, mower and power tiller; the skill to calibrate the knapsack sprayer",
        "5. Harvesting and post-harvest tools, equipment and machinery: identification and use of the sickle, cutlass, groundnut lifter, hoe and mattock; identification, operation, care and maintenance of the combine harvester, cassava grater, corn miller, corn sheller and groundnut decorticator",
        "6. Irrigation and drainage: identification, operation, care and maintenance of the watering can, sprinkler head and tiles",
        "7. Elementary surveying instruments: identification, uses and care of the measuring tape, ranging poles, compass, Gunter's chain, pegs, theodolite, dumpy level and Abney level"
      ] }
    ]
  },
  /* =============== AG6 · CROP PRODUCTION I =============== */
  {
    grade: 12, sem: "Two", icon: "🌾", period: "AG6",
    title: "Crop Production I",
    subtitle: "Classification of crop plants · seeds, seedlings, fruits and storage organs · main diseases and pests (field and storage)",
    note: "Section D, Topics 1–3: the classification of the crop plants, the seeds/seedlings/fruits and the storage organs of the crops, and the main diseases and pests of the crops in the field and in storage.",
    objectives: [
      "Classify the crop plants based on the growth cycle/life span, the botany and the uses",
      "Identify the seeds, the seedlings, the fruits and the storage organs of the common crop plants",
      "Identify the main diseases and pests of the crops in the field and in storage, and describe their symptoms and control"
    ],
    terms: [
      { t: "Growth cycle/life span", d: "The classification of the crops by their life span — the annuals (one season: rice, maize), the biennials (two seasons: carrot) and the perennials (several seasons: cassava, banana).", x: "The annual crops" },
      { t: "Botanical classification", d: "The classification by the plant part — the monocots (one seed leaf: rice, maize, banana) and the dicots (two seed leaves: groundnut, cassava, bean).", x: "The monocot and the dicot crops" },
      { t: "Uses classification", d: "The classification by the use — the food crops (rice, maize), the cash/export crops (cocoa, rubber), the forage crops (the fodder), the cover crops.", x: "The food and the cash crops" },
      { t: "Seed", d: "The unit of the plant propagation (by the seed) — containing the embryo, the food reserve and the seed coat.", x: "The maize grain (a fruit/seed)" },
      { t: "Seedling", d: "The young plant, from the germination to the establishment.", x: "The rice seedling" },
      { t: "Fruit", d: "The mature ovary of the flowering plant (containing the seeds) — e.g. the pod, the grain.", x: "The groundnut pod" },
      { t: "Storage organ", d: "The plant part that stores the food reserve — the tuber (cassava, yam), the corm (ginger), the bulb (onion), the rhizome.", x: "The cassava tuber" },
      { t: "Crop disease", d: "The disorder of the crop plant, caused by the pathogens (the fungi, the bacteria, the viruses) or the abiotic factors (the deficiency, the excess).", x: "The blast of the rice" },
      { t: "Fungal disease", d: "The disease caused by the fungi — e.g. the blast (the rice), the rust, the powdery mildew.", x: "The leaf blast" },
      { t: "Crop pest", d: "The organism that damages the crop — the insects (the weevil, the stem borer), the rodents (the rat), the birds, the weeds (the competitor).", x: "The stem borer of the maize" },
      { t: "Storage pest", d: "The pest that damages the crops in storage — the weevils (the grain weevil), the moths, the rats.", x: "The grain weevil in the stored maize" },
      { t: "IPM (integrated pest management)", d: "The combination of the methods (the cultural, the biological, the chemical) for the control of the pests and the diseases.", x: "The IPM of the crops" }
    ],
    tf: [
      { s: "The crops can be classified by their growth cycle (the annuals, the biennials, the perennials).", a: "True", why: "Classification based on the growth cycle/life span." },
      { s: "Rice and maize are monocots (one seed leaf).", a: "True", why: "Botanical classification — the monocots." },
      { s: "The cassava stores its food reserve in the stem only.", a: "False", why: "The cassava stores its food reserve in the tuber (the storage organ)." },
      { s: "The grain weevil is a pest that damages the crops in storage.", a: "True", why: "The main diseases and pests of the crops in the field and in storage." }
    ],
    mcq: [
      { q: "A crop that completes its life cycle in one season (e.g. rice) is an:", o: ["annual", "biennial", "perennial", "evergreen"], a: 0, why: "The growth cycle — the annuals." },
      { q: "Rice and maize are examples of:", o: ["monocots", "dicots", "gymnosperms", "ferns"], a: 0, why: "The botanical classification — the monocots (one seed leaf)." },
      { q: "The cassava stores its food reserve in the:", o: ["the tuber", "the seed", "the flower", "the leaf"], a: 0, why: "The storage organ — the tuber." },
      { q: "The ginger is stored in the:", o: ["the bulb", "the corm/rhizome", "the tuber", "the seed"], a: 1, why: "The storage organ — the corm/rhizome." },
      { q: "The blast of the rice is caused by a:", o: ["fungus", "a bacterium only", "a virus only", "a nutrient deficiency only"], a: 0, why: "The fungal disease — the blast." },
      { q: "The stem borer of the maize is a:", o: ["disease", "pest (an insect)", "weed", "nutrient"], a: 1, why: "The crop pest — the insect." },
      { q: "The grain weevil that damages the stored maize is a:", o: ["field pest only", "storage pest", "weed", "fungal disease"], a: 1, why: "The pests in storage — the weevils." }
    ],
    essay: [
      { q: "Classify the crop plants based on (a) the growth cycle/life span, (b) the botany and (c) the uses, giving two examples of each category. Identify the storage organs of the cassava, the yam, the ginger and the onion.", marks: 12, outline: [
        "(a) Growth cycle/life span: (1) the annuals — complete the life cycle in one season (e.g. rice, maize, groundnut); (2) the biennials — complete the life cycle in two seasons (e.g. carrot, onion); (3) the perennials — live for several seasons (e.g. cassava, banana, cocoa)",
        "(b) Botany: (1) the monocots — one seed leaf, the parallel veins (e.g. rice, maize, banana); (2) the dicots — two seed leaves, the netted veins (e.g. groundnut, cassava, bean, cotton)",
        "(c) Uses: (1) the food crops — for the food (e.g. rice, maize, cassava); (2) the cash/export crops — for the sale/export (e.g. cocoa, coffee, rubber, palm); (3) the forage crops — the fodder for the animals (e.g. the napier grass, the cowpea); (4) the cover crops — for the cover of the soil (e.g. the legumes)",
        "Storage organs: the cassava — the tuber; the yam — the tuber; the ginger — the corm/rhizome; the onion — the bulb",
        "The identification of the seeds (the grain, the pod), the seedlings (the young plant) and the fruits (the pod, the grain) of the common local crops"
      ] },
      { q: "Describe the main diseases and pests of the crops in the field and in storage, with reference to the rice and the maize. Explain the integrated pest management (IPM) and four methods of the control of the storage pests.", marks: 10, outline: [
        "Diseases of the crops in the field: (1) the rice — the blast (the fungus, the lesions on the leaves), the bacterial leaf blight; (2) the maize — the blight (the fungus, the rot of the leaves), the rust; the symptoms — the lesions, the spotting, the wilting, the death of the plant",
        "Pests of the crops in the field: (1) the rice — the stem borer (the insect, the drilling of the stem), the leaf folder; (2) the maize — the stem borer (the fall armyworm, the weevil), the aphids, the rats, the birds; the symptoms — the boring of the stem, the eating of the leaves, the lodging",
        "Pests in storage: the grain weevil (the maize, the rice), the moths (the groundnut), the rats, the mites; the damage — the eating of the grain, the contamination, the heating and the moulding of the store",
        "Integrated Pest Management (IPM): the combination of the methods — (1) the cultural (the resistant varieties, the proper spacing, the sanitation, the crop rotation); (2) the biological (the natural enemies, the beneficial insects); (3) the chemical (the pesticides — the proper use, the waiting period); (4) the mechanical/physical (the trapping, the hand-picking); the aim — the control of the pests at the economic threshold, with the minimum use of the chemicals",
        "Control of the storage pests: (1) the cleaning (the thorough cleaning of the store and the equipment, before the storage); (2) the drying (the proper drying of the grain, to the safe moisture content); (3) the hermetic storage (the airtight containers — the PICS bags, the silos); (4) the fumigation (the proper use of the fumigants); (5) the rodent control (the traps, the baits); (6) the regular inspection (the monitoring of the store)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section D, Topics 1–3 (Crop Production):" },
      { k: "bul", items: [
        "1. Classification of crop plants: based on the growth cycle/life span, the botany and the uses",
        "2. Seeds, seedlings, fruits and storage organs of the crops: identification of the common local crop plants",
        "3. Main diseases and pests of crops in the field and in storage: identification, the symptoms and the control"
      ] }
    ]
  },
  /* =============== AG7 · CROP PRODUCTION II =============== */
  {
    grade: 12, sem: "Two", icon: "🌿", period: "AG7",
    title: "Crop Production II",
    subtitle: "Plant propagation (seed and vegetative) · seedbed preparation and cultural practices · ornamental plants · weeds · crop yields",
    note: "Section D, Topics 4–8: plant propagation (by seed and by vegetative means), the seedbed preparation and the cultural practices, the ornamental plant production, the common weeds, and the measurement of the crop yields.",
    objectives: [
      "Explain propagation by seed (the time of planting, the seed rates, the plant population and the seed viability tests of the common local crop plants)",
      "Explain the vegetative propagation (the cuttings, the grafting, the budding, the layering, the suckers, the slips and the runners), and demonstrate the skills",
      "Prepare the seedbeds and perform the cultural practices (the fertilizer application, the mulching, the pesticide application, the watering, the pruning, the staking and the thinning), and calculate the plant density/population",
      "Identify and classify the ornamental plants",
      "Identify the common weeds, prepare a weed album, and describe their external features, the mode of dispersal and the methods of weed control on the farm",
      "Measure the crop yield (the skill to measure the yield)"
    ],
    terms: [
      { t: "Propagation by seed", d: "The propagation of the crops by the seed — the time of planting, the seed rate (the amount per unit area), the plant population and the seed viability test.", x: "The sowing of the maize seed" },
      { t: "Seed viability test", d: "The test to determine the percentage of the viable (the germinable) seeds — e.g. the germination test (the paper towel, the counting).", x: "The 80% germination" },
      { t: "Vegetative propagation", d: "The propagation of the plants by the vegetative parts (without the seed) — the cuttings, the grafting, the budding, the layering, the suckers, the slips and the runners.", x: "The cutting of the cassava" },
      { t: "Cutting", d: "The propagation by the piece of the stem/leaf/root, planted to root and grow (e.g. the cassava, the sweet potato).", x: "The cassava stem cutting" },
      { t: "Grafting", d: "The joining of the scion (the cutting) to the rootstock (the stock) to grow as one plant (e.g. the fruit trees).", x: "The grafting of the mango" },
      { t: "Budding", d: "The insertion of a bud (the eye) into the stock, to grow as a new plant (e.g. the citrus, the mango).", x: "The T-budding" },
      { t: "Layering", d: "The bending of the branch to the soil, to root while still attached to the parent (e.g. the guava).", x: "The simple layering" },
      { t: "Sucker/slips/runners", d: "The natural vegetative propagules — the suckers (the shoots from the base: the banana, the sugarcane), the slips (the sugarcane pieces), the runners (the horizontal stems: the strawberry).", x: "The banana sucker" },
      { t: "Seedbed preparation", d: "The preparation of the seedbed — the clearing, the ploughing, the harrowing, the levelling and the ridging, for the sowing/transplanting.", x: "The raised bed for the transplanting" },
      { t: "Cultural practices", d: "The practices after the planting — the fertilizer application, the mulching, the pesticide application, the watering, the pruning, the staking and the thinning.", x: "The thinning of the maize" },
      { t: "Mulching", d: "The covering of the soil surface (with the straw, the leaves) to conserve the moisture and suppress the weeds.", x: "The straw mulch" },
      { t: "Thinning", d: "The removal of the excess plants (the weak ones) to give the proper spacing (the plant population).", x: "The thinning of the groundnut" },
      { t: "Plant density/population", d: "The number of plants per unit area — calculated from the spacing (the rows and the plants in the row).", x: "The 25,000 plants/ha" },
      { t: "Ornamental plants", d: "The plants grown for the beauty (the flowers, the foliage) — identified and classified (the annuals, the perennials, the shrubs, the trees).", x: "The roses, the lilies" },
      { t: "Weed", d: "The plant that grows where it is not wanted (the competitor of the crop) — identified, with the external features, the mode of dispersal and the control.", x: "The striga (the witchweed)" },
      { t: "Weed album", d: "The collection of the pressed (the dried) weed specimens, for the identification.", x: "The album of the local weeds" },
      { t: "Crop yield", d: "The amount of the crop produced per unit area (e.g. the tonnes per hectare) — measured by the harvesting of the sample area and the extrapolation.", x: "The 4 tonnes/ha of the rice" }
    ],
    tf: [
      { s: "Vegetative propagation includes the cuttings, the grafting, the budding and the layering.", a: "True", why: "Plant propagation — vegetative propagation." },
      { s: "The seed viability test determines the percentage of the viable (germinable) seeds.", a: "True", why: "Propagation by seed — the seed viability tests." },
      { s: "Mulching increases the evaporation of the soil moisture.", a: "False", why: "Mulching conserves the soil moisture (reduces the evaporation) and suppresses the weeds." },
      { s: "Thinning is the removal of the excess plants to give the proper spacing.", a: "True", why: "The cultural practices — the thinning." }
    ],
    mcq: [
      { q: "The propagation of the cassava by the stem piece is an example of:", o: ["propagation by seed", "vegetative propagation (the cutting)", "grafting", "layering"], a: 1, why: "The vegetative propagation — the cutting." },
      { q: "The joining of the scion to the rootstock is called:", o: ["cutting", "grafting", "budding only", "layering"], a: 1, why: "The grafting." },
      { q: "The insertion of a bud into the stock is called:", o: ["grafting", "budding", "cutting", "runners"], a: 1, why: "The budding." },
      { q: "The bending of a branch to the soil to root (while still attached) is:", o: ["layering", "cutting", "grafting", "sowing"], a: 0, why: "The layering." },
      { q: "The natural vegetative propagule of the banana is the:", o: ["runner", "sucker", "slip only", "seed"], a: 1, why: "The suckers (the shoots from the base)." },
      { q: "The covering of the soil surface with the straw to conserve the moisture is:", o: ["thinning", "mulching", "staking", "pruning"], a: 1, why: "The mulching." },
      { q: "The number of plants per unit area is the:", o: ["seed rate", "plant density/population", "yield", "germination rate"], a: 1, why: "The plant density/population — calculated from the spacing." }
    ],
    essay: [
      { q: "Explain the propagation of the crops by seed (the time of planting, the seed rate, the plant population and the seed viability test). Describe the vegetative propagation (the cuttings, the grafting, the budding, the layering, the suckers, the slips and the runners), giving an example of each.", marks: 12, outline: [
        "Propagation by seed: (1) the time of planting — the proper season (the onset of the rains, for the rainfed crops); (2) the seed rate — the amount of the seed per unit area (e.g. the 20 kg/ha of the maize), based on the seed size and the spacing; (3) the plant population — the number of the plants per unit area (from the spacing — the rows and the plants in the row); (4) the seed viability test — the germination test (the placement of the seeds on the damp paper towel, the counting of the germinated seeds after a few days, the calculation of the germination percentage = the germinated/the total × 100%)",
        "Vegetative propagation: (1) the cuttings — the piece of the stem/leaf/root, planted to root (e.g. the cassava stem, the sweet potato); (2) the grafting — the joining of the scion to the rootstock (e.g. the mango, the citrus); (3) the budding — the insertion of a bud into the stock (e.g. the T-budding of the mango); (4) the layering — the bending of the branch to the soil to root (e.g. the guava); (5) the suckers — the shoots from the base (e.g. the banana, the sugarcane); (6) the slips — the pieces of the stem with the buds (e.g. the sugarcane slip); (7) the runners — the horizontal stems (e.g. the strawberry, the spider plant)",
        "The advantages of the vegetative propagation: the true-to-type (the genetic identity of the parent), the faster establishment, and the propagation of the non-seed crops"
      ] },
      { q: "Describe the seedbed preparation and the cultural practices (the fertilizer application, the mulching, the pesticide application, the watering, the pruning, the staking and the thinning). Show how you would calculate the plant density of a crop planted at 75 cm between the rows and 25 cm in the row.", marks: 10, outline: [
        "Seedbed preparation: (1) the clearing (the removal of the debris); (2) the ploughing (the turning of the soil); (3) the harrowing (the breaking of the clods); (4) the levelling (the uniform surface); (5) the ridging/bed-making (the raised beds, for the drainage and the planting)",
        "Cultural practices: (1) the fertilizer application — the proper rate, the method (the pit, the band, the broadcast), and the timing (the basal, the top-dressing); (2) the mulching — the covering of the soil (the straw, the leaves) to conserve the moisture and suppress the weeds; (3) the pesticide application — the proper chemical, the rate, the timing, and the safety (the PPE, the waiting period); (4) the watering/irrigation — the proper amount, the method (the furrow, the sprinkler), and the timing; (5) the pruning — the removal of the unwanted branches (the shaping, the health); (6) the staking — the supporting of the tall crops (the tomato, the pepper); (7) the thinning — the removal of the excess plants (the weak ones) to give the proper spacing",
        "Calculation of the plant density: the number of plants per square metre = 1/(the row spacing × the in-row spacing) = 1/(0.75 m × 0.25 m) = 1/0.1875 = 5.33 plants/m²; per hectare (10,000 m²) = 5.33 × 10,000 = 53,333 plants/ha",
        "The plant density ensures the proper spacing (the light, the air, the nutrients) and the maximum yield"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section D, Topics 4–8 (Crop Production):" },
      { k: "bul", items: [
        "4. Plant propagation: (a) propagation by seed — the time of planting, the seed rates, the plant population and the seed viability tests of the common local crop plants; (b) vegetative propagation — knowledge and skills in the cutting, the grafting, the budding and the layering; the suckers, the slips and the runners",
        "5. Seedbed preparation and cultural practices: knowledge and skills in the preparation of the seedbeds, the fertilizer application, the mulching, the pesticides application, the watering, the pruning, the staking and the thinning; calculations involving the plant density/population",
        "6. Ornamental plant production: identification and classification of the ornamental plants",
        "7. Common weeds: identification, the preparation of the weed album; the knowledge of the external features; the mode of dispersal; the various methods of the weed control on the farm",
        "8. Measurement of crop yields: the skill to measure the crop yield"
      ] }
    ]
  },
  /* =============== AG8 · ANIMAL PRODUCTION I =============== */
  {
    grade: 12, sem: "Two", icon: "🐄", period: "AG8",
    title: "Animal Production I",
    subtitle: "Breeds and types of animals · major internal organs · products and by-products · feeds and feedstuffs · pests and parasites",
    note: "Section E, Topics 1–5: the common breeds of animals and the types of animals in West Africa, the major internal organs, the animal products and by-products, the animal feeds and their sources, and the main pests and parasites of the farm animals.",
    objectives: [
      "Identify the common breeds of the farm animals and the types of animals in West Africa",
      "Identify the major parts of the digestive and the reproductive systems of the farm animals and their functions",
      "Identify the animal products and by-products (the hides, the skins, the furs, the feathers and the horns) and their uses",
      "Identify the animal feeds and feedstuffs (the types and the ingredients — the fish meal, the cakes, the rice bran, the blood meal, the bone meal, the wheat bran, the oyster shell and the salt) and their sources",
      "Identify the main ectoparasites (the ticks, the lice) and the endoparasites (the tapeworms and the roundworms), the damages they cause to the hosts, and their control"
    ],
    terms: [
      { t: "Breeds", d: "The varieties of the farm animals (the cattle, the goats, the sheep, the pigs, the poultry) — the local (the indigenous) and the exotic (the improved) breeds.", x: "The local and the improved breeds of the cattle" },
      { t: "Types of animals", d: "The classes of the farm animals in West Africa — the ruminants (the cattle, the goats, the sheep), the monogastrics (the pigs), the poultry (the chickens, the ducks), the rabbits.", x: "The ruminants and the poultry" },
      { t: "Digestive system", d: "The organs of the digestion — the mouth, the oesophagus, the stomach (the rumen, the reticulum, the omasum and the abomasum of the ruminants), the intestines (the small and the large), and the rectum.", x: "The four compartments of the ruminant stomach" },
      { t: "Reproductive system", d: "The organs of the reproduction — the male (the testes, the accessory glands, the penis) and the female (the ovaries, the oviducts, the uterus, the vagina).", x: "The reproductive tract of the cow" },
      { t: "Animal products", d: "The products from the animals — the meat, the milk, the eggs, the wool, the leather.", x: "The milk, the eggs" },
      { t: "Animal by-products", d: "The products from the parts of the animal other than the meat — the hides, the skins, the furs, the feathers and the horns.", x: "The hides (the leather)" },
      { t: "Animal feeds", d: "The foods for the animals — the roughages (the forage, the hay) and the concentrates (the grains, the meals).", x: "The forage and the grain" },
      { t: "Feed ingredients", d: "The components of the feeds — the fish meal, the cakes (the oilseed cakes), the rice bran, the blood meal, the bone meal, the wheat bran, the oyster shell and the salt.", x: "The fish meal (the protein)" },
      { t: "Ectoparasites", d: "The parasites on the external body of the animal — the ticks, the lice, the mites, the flies.", x: "The cattle tick" },
      { t: "Endoparasites", d: "The parasites in the internal body (the gut) of the animal — the tapeworms and the roundworms (the worms).", x: "The roundworm of the goat" },
      { t: "Parasite control", d: "The measures against the parasites — the dipping, the spraying, the drenching (the deworming), and the sanitation.", x: "The dipping of the sheep" }
    ],
    tf: [
      { s: "The ruminants have a four-compartment stomach (the rumen, the reticulum, the omasum and the abomasum).", a: "True", why: "The major internal organs — the digestive system of the ruminants." },
      { s: "The hides and the skins are animal by-products.", a: "True", why: "The animal products and by-products — the hides, the skins, the furs, the feathers and the horns." },
      { s: "The ticks are endoparasites (they live inside the gut of the animal).", a: "False", why: "The ticks are ECTOParasites (they live on the external body of the animal)." },
      { s: "The fish meal is a source of the protein in the animal feeds.", a: "True", why: "The feed ingredients — the fish meal (the protein)." }
    ],
    mcq: [
      { q: "The cattle, the goats and the sheep are examples of:", o: ["the monogastrics", "the ruminants", "the poultry", "the rabbits"], a: 1, why: "The types of animals — the ruminants." },
      { q: "The four compartments of the ruminant stomach are:", o: ["the rumen, the reticulum, the omasum and the abomasum", "the rumen, the stomach, the gut and the rectum", "the liver, the rumen, the gut and the kidney", "the crop, the gizzard, the gut and the rectum"], a: 0, why: "The digestive system of the ruminants." },
      { q: "The crop and the gizzard are the digestive organs of the:", o: ["the cattle", "the poultry", "the pig", "the goat"], a: 1, why: "The digestive system of the poultry (the crop, the gizzard)." },
      { q: "The hides and the skins are examples of:", o: ["the animal products only", "the animal by-products", "the animal feeds", "the animal parasites"], a: 1, why: "The animal products and by-products." },
      { q: "The fish meal is used in the animal feeds as a source of:", o: ["the carbohydrate", "the protein", "the vitamin C only", "the fat only"], a: 1, why: "The feed ingredients — the fish meal (the protein)." },
      { q: "The ticks and the lice are:", o: ["the endoparasites", "the ectoparasites", "the viruses", "the bacteria"], a: 1, why: "The main ectoparasites — the ticks, the lice." },
      { q: "The tapeworms and the roundworms are:", o: ["the ectoparasites", "the endoparasites", "the fungi", "the plants"], a: 1, why: "The endoparasites — the tapeworms and the roundworms." }
    ],
    essay: [
      { q: "Identify the common breeds of the farm animals in West Africa (the local and the exotic). Describe the major parts of the digestive system of the ruminants and their functions, and compare it with that of the poultry.", marks: 12, outline: [
        "Common breeds in West Africa: (1) the cattle — the local (the West African Shorthorn, the Zebu) and the exotic (the Friesian, the Brown Swiss); (2) the goats — the local (the West African Dwarf) and the exotic (the Anglo-Nubian, the Boer); (3) the sheep — the local (the West African) and the exotic (the Dorper); (4) the pigs — the local and the exotic (the Large White, the Landrace); (5) the poultry — the local (the native chicken) and the exotic (the broiler, the layer)",
        "Digestive system of the ruminants: (1) the mouth — the chewing (the grinding of the forage); (2) the oesophagus — the passage to the stomach; (3) the rumen (the paunch) — the fermentation (the microbes digest the cellulose); (4) the reticulum (the honeycomb) — the trapping of the foreign bodies, the regurgitation (the cud); (5) the omasum (the many plies) — the absorption of the water and the minerals; (6) the abomasum (the true stomach) — the secretion of the acid and the enzymes (the digestion); (7) the small intestine — the digestion and the absorption of the nutrients; (8) the large intestine (the caecum, the colon) — the fermentation and the absorption of the water; (9) the rectum — the formation and the passage of the faeces; the rumination (the re-chewing of the cud)",
        "Comparison with the poultry: the poultry has a simple stomach (the proventriculus — the glandular, and the gizzard — the muscular, the grinding) and a crop (the storage); it has no rumen (it cannot digest the cellulose as well as the ruminant); the ruminant is a herbivore (the forage), while the poultry is an omnivore (the grain, the insects)"
      ] },
      { q: "Identify the animal products and by-products (the hides, the skins, the furs, the feathers and the horns) and their uses. Describe the animal feeds and feedstuffs (the types and the ingredients — the fish meal, the cakes, the rice bran, the blood meal, the bone meal, the wheat bran, the oyster shell and the salt), and identify the sources.", marks: 10, outline: [
        "Animal products: the meat (the food), the milk (the food, the dairy), the eggs (the food), the wool (the fibre), the manure (the fertilizer)",
        "Animal by-products and their uses: (1) the hides and the skins — the leather (the shoes, the bags, the jackets); (2) the furs — the clothing (the coats); (3) the feathers — the bedding, the pillows, the decorations; (4) the horns — the tools, the ornaments, the musical instruments",
        "Animal feeds: (1) the roughages — the forage (the grass), the hay (the dried forage), the silage (the fermented forage); (2) the concentrates — the grains (the maize, the wheat), the meals (the bran, the cakes)",
        "Feed ingredients and their sources: (1) the fish meal — from the fish (the by-catch) — the protein; (2) the cakes (the oilseed cakes — the cottonseed, the groundnut, the palm kernel) — from the oil extraction — the protein and the energy; (3) the rice bran — from the rice milling — the energy and the fibre; (4) the blood meal — from the dried blood — the protein; (5) the bone meal — from the ground bones — the calcium and the phosphorus; (6) the wheat bran — from the wheat milling — the fibre and the energy; (7) the oyster shell — from the ground shells — the calcium; (8) the salt — from the mineral — the electrolyte (the sodium, the chloride)",
        "The proper combination of the feeds (the ration) ensures the balanced nutrition of the animals (the energy, the protein, the minerals, the vitamins)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section E, Topics 1–5 (Animal Production):" },
      { k: "bul", items: [
        "1. Common breeds of animals and the types of animals in West Africa: identification of the breeds and the types",
        "2. Major internal organs of farm animals: identification and function of the major parts of the digestive and the reproductive systems",
        "3. Animal products and by-products: identification and uses — the hides, the skins, the furs, the feathers and the horns",
        "4. Animal feeds and their sources: identification and uses of the animal feed and the animal feedstuffs, the types of feedstuffs and the feed ingredients — the fish meal, the cakes, the rice bran, the blood meal, the bone meal, the wheat bran, the oyster shell and the salt",
        "5. Main pests and parasites of farm animals: identification of the main ectoparasites — the ticks, the lice — and the endoparasites — the tapeworms and the roundworms; the damages caused to the hosts and their control"
      ] }
    ]
  },
  /* =============== AG9 · ANIMAL PRODUCTION II =============== */
  {
    grade: 12, sem: "Two", icon: "💉", period: "AG9",
    title: "Animal Production II",
    subtitle: "Disease prevention and control · management practices (breeding, milking, branding, debeaking, dehorning, castration) · slaughtering and dressing",
    note: "Section E, Topics 6–8: the prevention and control of the diseases of the farm animals, the general management practices in the farm animal production (the selection of the breeding stock, the management systems, the care of the animals, the egg selection/collection/grading, the milking, the skin branding, the debeaking, the dehorning and the castration), and the slaughtering of the animals and the dressing of the carcasses.",
    objectives: [
      "Describe the methods of the prevention and the control of the diseases of the farm animals (the use of the drugs, the drenching, the dipping, the spraying, and the simple methods of the farm sanitation)",
      "Describe the general management practices — the selection of the breeding stock, the management systems, the care of the animals, the selection of the eggs for hatching, the egg collection and grading, the milking of the animals, the skin branding, the debeaking, the dehorning and the castration",
      "Identify the equipment used in the common management practices (the Burdizzo, the elastrator, the drenching gun, the dehorner and the debeaker)",
      "Describe the processes involved in the slaughtering of the animals and the dressing of the carcasses"
    ],
    terms: [
      { t: "Disease prevention", d: "The measures to prevent the diseases — the vaccination (the immunization), the quarantine (the isolation of the new animals), the sanitation, and the proper nutrition.", x: "The vaccination against the Newcastle disease" },
      { t: "Disease control", d: "The measures to control the diseases — the use of the drugs (the antibiotics, the antiparasitics), the drenching (the oral administration), the dipping (the bath), the spraying, and the farm sanitation.", x: "The drenching of the goats" },
      { t: "Drenching", d: "The administration of the oral drugs (the dewormers) to the animals — with the drenching gun.", x: "The drenching gun" },
      { t: "Dipping", d: "The immersion of the animals in the bath (the solution) to control the ectoparasites (the ticks, the lice).", x: "The dipping of the sheep" },
      { t: "Breeding stock", d: "The selected animals (the sires, the dams) for the breeding — chosen for the desirable traits (the yield, the conformation, the health).", x: "The selection of the breeding cows" },
      { t: "Management systems", d: "The systems of the rearing of the animals — the extensive (the grazing), the intensive (the housing, the feeding), and the semi-intensive.", x: "The intensive rearing of the poultry" },
      { t: "Egg selection for hatching", d: "The choice of the eggs (the size, the shape, the cleanliness) for the incubation (the hatching).", x: "The selection of the hatching eggs" },
      { t: "Egg grading", d: "The sorting of the eggs (the size, the quality) for the sale — the grading (the extra-large, the large, the medium, the small).", x: "The grading of the table eggs" },
      { t: "Milking", d: "The extraction of the milk from the udder of the cow/goat — the proper hygiene, the technique, and the frequency.", x: "The hand-milking of the cow" },
      { t: "Skin branding", d: "The marking of the animals (the identification) by the brand (the hot iron, the freeze) on the skin.", x: "The branding of the cattle" },
      { t: "Debeaking", d: "The trimming of the beak of the poultry (the prevention of the pecking and the cannibalism).", x: "The debeaking of the chicks" },
      { t: "Dehorning", d: "The removal of the horns of the animals (the safety, the handling) — with the dehorner.", x: "The dehorning of the calves" },
      { t: "Castration", d: "The removal of the testes of the male animal (the control of the breeding, the improvement of the meat) — with the Burdizzo, the elastrator.", x: "The castration of the bull calf" },
      { t: "Slaughtering", d: "The killing of the animals for the meat — the proper (the humane) method (the stunning, the bleeding).", x: "The slaughtering of the cow" },
      { t: "Dressing", d: "The preparation of the carcass after the slaughter — the skinning, the evisceration (the removal of the organs), the trimming and the chilling.", x: "The dressing of the beef carcass" }
    ],
    tf: [
      { s: "The vaccination (the immunization) is a method of the prevention of the animal diseases.", a: "True", why: "The prevention and the control of the diseases." },
      { s: "The drenching is the immersion of the animals in the bath.", a: "False", why: "The drenching is the oral administration of the drugs; the DIPPING is the immersion in the bath." },
      { s: "The debeaking is the trimming of the beak of the poultry.", a: "True", why: "The general management practices — the debeaking." },
      { s: "The castration is the removal of the testes of the male animal.", a: "True", why: "The general management practices — the castration." }
    ],
    mcq: [
      { q: "The administration of the oral drugs (the dewormers) to the animals is called:", o: ["the dipping", "the drenching", "the spraying", "the branding"], a: 1, why: "The drenching — the oral administration." },
      { q: "The immersion of the animals in the bath to control the ectoparasites is the:", o: ["the drenching", "the dipping", "the debeaking", "the dehorning"], a: 1, why: "The dipping." },
      { q: "The trimming of the beak of the poultry (the prevention of the pecking) is the:", o: ["the dehorning", "the debeaking", "the castration", "the branding"], a: 1, why: "The debeaking." },
      { q: "The removal of the testes of the male animal is the:", o: ["the dehorning", "the debeaking", "the castration", "the slaughtering"], a: 2, why: "The castration." },
      { q: "The Burdizzo and the elastrator are the equipment used for the:", o: ["the milking", "the castration", "the branding", "the dehorning"], a: 1, why: "The equipment for the castration." },
      { q: "The sorting of the eggs by the size and the quality for the sale is the:", o: ["the egg selection for hatching", "the egg grading", "the milking", "the drenching"], a: 1, why: "The egg grading." },
      { q: "The marking of the animals by the brand on the skin is the:", o: ["the dehorning", "the skin branding", "the debeaking", "the castration"], a: 1, why: "The skin branding (the identification)." }
    ],
    essay: [
      { q: "Describe the methods of the prevention and the control of the diseases of the farm animals (the use of the drugs, the drenching, the dipping, the spraying, and the simple methods of the farm sanitation). Identify the equipment used in the common management practices (the Burdizzo, the elastrator, the drenching gun, the dehorner and the debeaker).", marks: 12, outline: [
        "Prevention: (1) the vaccination (the immunization — the administration of the vaccines, against the Newcastle disease, the rinderpest, the foot-and-mouth disease); (2) the quarantine (the isolation of the new/sick animals, the observation); (3) the sanitation (the cleaning of the housing, the removal of the wastes); (4) the proper nutrition (the balanced ration, the clean water); (5) the control of the wild animals (the predators, the vectors)",
        "Control: (1) the use of the drugs — the antibiotics (the bacterial diseases), the antiparasitics (the worms, the ectoparasites), the antifungals; (2) the drenching — the oral administration of the drugs (the dewormers), with the drenching gun; (3) the dipping — the immersion of the animals in the bath (the solution), to control the ticks and the lice (the sheep, the cattle); (4) the spraying — the application of the insecticide on the animals/housing, to control the flies and the lice; (5) the simple methods of the farm sanitation — the cleaning, the disinfection, the removal of the dead animals (the proper disposal)",
        "Equipment for the management practices: (1) the Burdizzo — the castrator (the crushing of the blood vessels of the cord); (2) the elastrator — the castrator (the rubber band, the strangulation of the cord); (3) the drenching gun — the administration of the oral drugs; (4) the dehorner — the removal of the horns (the hot iron, the chemical); (5) the debeaker — the trimming of the beak (the hot iron, the clipper)",
        "The proper use of the equipment and the drugs ensures the health, the welfare and the productivity of the animals, and the safety of the operator"
      ] },
      { q: "Describe the general management practices in the farm animal production (the selection of the breeding stock, the management systems, the care of the animals, the selection of the eggs for hatching, the egg collection and grading, the milking, the skin branding, the debeaking, the dehorning and the castration). Explain the processes involved in the slaughtering of the animals and the dressing of the carcasses.", marks: 10, outline: [
        "General management practices: (1) the selection of the breeding stock — the choice of the animals with the desirable traits (the yield, the conformation, the health, the fertility); (2) the management systems — the extensive (the grazing, the low input), the intensive (the housing, the high input, the high output), and the semi-intensive; (3) the care of the animals — the feeding, the watering, the housing, the health (the vaccination, the deworming), and the record-keeping; (4) the selection of the eggs for hatching — the choice of the eggs (the size, the shape, the cleanliness, the source); (5) the egg collection and the grading — the regular collection, and the sorting by the size/quality (the extra-large, the large, the medium, the small); (6) the milking — the proper hygiene (the clean udder, the clean hands), the technique (the hand-milking, the machine), and the frequency (the twice-daily); (7) the skin branding — the identification (the hot iron, the freeze); (8) the debeaking — the trimming of the beak (the prevention of the pecking); (9) the dehorning — the removal of the horns (the safety); (10) the castration — the removal of the testes (the control of the breeding, the improvement of the meat)",
        "Slaughtering: (1) the fasting (the withholding of the feed, before the slaughter); (2) the stunning (the rendering of the animal unconscious — the electric, the captive bolt); (3) the bleeding (the cutting of the blood vessels, the draining of the blood — the hanging of the carcass); (4) the scalding and the skinning (the poultry — the scalding, the plucking)",
        "Dressing of the carcass: (1) the evisceration (the removal of the internal organs — the heart, the lungs, the liver, the kidneys, the gut — the clean removal); (2) the trimming (the removal of the unwanted parts — the fat, the damage); (3) the inspection (the veterinary inspection, the safety of the meat); (4) the chilling (the cooling of the carcass, the preservation); (5) the cutting and the portioning (the retail cuts)",
        "The proper slaughtering and the dressing ensure the safety and the quality of the meat, and the welfare of the animal (the humane slaughter)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section E, Topics 6–8 (Animal Production):" },
      { k: "bul", items: [
        "6. Prevention and control of diseases of farm animals: methods — the use of the drugs, the drenching, the dipping, the spraying, and the simple methods of the farm sanitation",
        "7. General management practices in farm animals production: the selection of the breeding stock, the management systems, the care of the animals, the selection of the eggs for hatching, the egg collection and the grading, the milking of the animals, the skin branding, the debeaking, the dehorning and the castration; the equipment used — the Burdizzo, the elastrator, the drenching gun, the dehorner and the debeaker",
        "8. Slaughtering of animals and dressing of the carcasses: the processes involved"
      ] }
    ]
  },
  /* =============== AG10 · FISHERIES =============== */
  {
    grade: 12, sem: "Two", icon: "🐟", period: "AG10",
    title: "Fisheries: Fish Farming, Harvesting & Preservation",
    subtitle: "Types of fisheries (culture/capture) · ponds, cages, tanks · stocking and management · harvesting · processing and preservation",
    note: "Section E, Topics 9–10: the stocking and the management practices in the fish farming (the common species, the ponds), and the fish harvesting and the preservation (the processing, the methods, the equipment).",
    objectives: [
      "Describe the types of fisheries — the culture fisheries (the aquaculture/fish farming) and the capture fisheries (the subsistence, the commercial, the artisanal and the industrial)",
      "Compare the subsistence and the commercial fisheries, and the artisanal and the industrial fisheries; explain the difference between the aquaculture and the fish farming, and the benefits and problems of the fish farming",
      "Describe the uses of the earthen ponds, the cages, the concrete tanks, the raceways and the fish pens in the growing of the fish",
      "Describe the factors to consider (the soil type, the slope of the land, the availability of the water) and the management practices (the pond stocking, the feeding of the fish, the water quality maintenance, the pond maintenance, the production control)",
      "Describe the signs of the maturity and the methods used in the harvesting of the fish",
      "Describe the methods of the processing of the fish (the washing, the scaling, the gutting, the filleting) and the preservation (the smoking, the cooking, the salting, the drying, the frying, the freezing and the canning), and identify the equipment for the harvesting and the preservation"
    ],
    terms: [
      { t: "Culture fisheries (aquaculture/fish farming)", d: "The rearing of the fish in the artificial environment (the ponds, the cages, the tanks) — the fish farming.", x: "The tilapia in the pond" },
      { t: "Capture fisheries", d: "The catching of the fish from the natural waters (the rivers, the lakes, the sea) — the subsistence, the commercial, the artisanal and the industrial.", x: "The fishing in the river" },
      { t: "Subsistence fisheries", d: "The fishing for the own consumption (the family) — the small-scale.", x: "The fish for the household" },
      { t: "Commercial fisheries", d: "The fishing for the sale (the profit) — the larger-scale.", x: "The fish for the market" },
      { t: "Artisanal fisheries", d: "The small-scale, the traditional fishing (the hand tools, the small boats) — the local.", x: "The local fisher with the net" },
      { t: "Industrial fisheries", d: "The large-scale, the mechanized fishing (the big vessels, the trawls) — the offshore.", x: "The trawler in the sea" },
      { t: "Earthen pond", d: "The pond dug in the soil (the lined, the natural) — the common unit of the fish farming.", x: "The earthen tilapia pond" },
      { t: "Cage/tank/raceway/pen", d: "The other units of the fish farming — the cage (the net in the water), the concrete tank, the raceway (the flow of the water), the fish pen (the enclosure).", x: "The fish cage in the lake" },
      { t: "Pond stocking", d: "The placing of the fingerlings (the young fish) in the pond — the stocking rate (the number per unit area).", x: "The stocking of the tilapia fingerlings" },
      { t: "Feeding of the fish", d: "The feeding of the fish (the commercial feed, the natural feed) — the rate, the frequency, and the quality.", x: "The daily feeding of the tilapia" },
      { t: "Water quality", d: "The parameters of the water (the oxygen, the pH, the temperature, the ammonia) — the maintenance for the health of the fish.", x: "The dissolved oxygen in the pond" },
      { t: "Signs of maturity", d: "The indicators of the readiness of the fish for the harvest — the size, the weight, and the age.", x: "The tilapia at the 500 g" },
      { t: "Fish processing", d: "The preparation of the fish after the harvest — the washing, the scaling, the gutting, the filleting.", x: "The filleting of the tilapia" },
      { t: "Fish preservation", d: "The methods of the preservation of the fish — the smoking, the cooking, the salting, the drying, the frying, the freezing and the canning.", x: "The smoking of the fish" },
      { t: "Harvesting equipment", d: "The equipment for the harvesting of the fish — the nets (the cast net, the gill net), the traps, the baskets, and the seining.", x: "The cast net" }
    ],
    tf: [
      { s: "The culture fisheries (the aquaculture) is the rearing of the fish in the artificial environment.", a: "True", why: "The types of fisheries — the culture fisheries (the aquaculture/fish farming)." },
      { s: "The subsistence fisheries is the fishing for the sale (the profit).", a: "False", why: "The subsistence fisheries is for the own consumption; the COMMERCIAL fisheries is for the sale." },
      { s: "The earthen pond, the cage, the concrete tank, the raceway and the fish pen are used in the growing of the fish.", a: "True", why: "The uses of the earthen ponds, the cages, the concrete tanks, the raceways and the fish pens." },
      { s: "The smoking, the salting, the drying and the freezing are the methods of the preservation of the fish.", a: "True", why: "The methods of the preservation of the fish." }
    ],
    mcq: [
      { q: "The rearing of the fish in the artificial environment (the ponds, the cages) is the:", o: ["the capture fisheries", "the culture fisheries (the aquaculture)", "the industrial fisheries", "the subsistence fisheries"], a: 1, why: "The culture fisheries — the fish farming." },
      { q: "The catching of the fish from the natural waters (the rivers, the sea) is the:", o: ["the culture fisheries", "the capture fisheries", "the aquaculture", "the pond farming"], a: 1, why: "The capture fisheries." },
      { q: "The small-scale, the traditional fishing (the hand tools, the small boats) is the:", o: ["the industrial fisheries", "the artisanal fisheries", "the culture fisheries", "the commercial fisheries"], a: 1, why: "The artisanal fisheries." },
      { q: "The common unit of the fish farming (the pond dug in the soil) is the:", o: ["the cage", "the earthen pond", "the trawler", "the net"], a: 1, why: "The earthen pond." },
      { q: "The placing of the fingerlings in the pond is the:", o: ["the feeding", "the pond stocking", "the harvesting", "the preservation"], a: 1, why: "The pond stocking." },
      { q: "One method of the preservation of the fish is the:", o: ["the smoking", "the ploughing", "the grafting", "the pruning"], a: 0, why: "The methods of the preservation — the smoking, the salting, the drying, the freezing, the canning." },
      { q: "The washing, the scaling, the gutting and the filleting are the steps in the:", o: ["the fish processing", "the fish farming", "the capture fisheries", "the pond stocking"], a: 0, why: "The methods of the processing of the fish." }
    ],
    essay: [
      { q: "Describe the types of fisheries (the culture and the capture), comparing the subsistence and the commercial fisheries, and the artisanal and the industrial fisheries. Explain the benefits and the problems of the fish farming, and the possible solutions to the problems.", marks: 12, outline: [
        "Types of fisheries: (1) the culture fisheries (the aquaculture/fish farming) — the rearing of the fish in the artificial environment (the ponds, the cages, the tanks); (2) the capture fisheries — the catching of the fish from the natural waters (the rivers, the lakes, the sea) — the subsistence (the own consumption), the commercial (the sale), the artisanal (the small-scale, the traditional) and the industrial (the large-scale, the mechanized)",
        "Comparison: the subsistence vs. the commercial — the scale (the small vs. the large), the purpose (the own consumption vs. the sale/profit), and the input (the low vs. the high); the artisanal vs. the industrial — the scale (the small vs. the large), the technology (the hand tools, the small boats vs. the big vessels, the trawls), and the area (the inshore vs. the offshore)",
        "Aquaculture vs. fish farming — the aquaculture is the broader term (the rearing of the aquatic organisms — the fish, the crustaceans, the molluscs); the fish farming is the rearing of the fish specifically",
        "Benefits of the fish farming: (1) the food (the protein); (2) the income and the employment; (3) the food security; (4) the control of the production (the independent of the natural stock); (5) the conservation of the wild stock (the reduction of the pressure)",
        "Problems: (1) the disease (the outbreak in the pond); (2) the predation (the birds, the mammals); (3) the water quality (the pollution, the low oxygen); (4) the feed (the cost, the availability); (5) the market (the price, the competition); (6) the capital (the cost of the establishment)",
        "Solutions: (1) the disease — the proper stocking (the low density), the water quality, and the vaccination/treatment; (2) the predation — the netting, the guarding; (3) the water quality — the aeration, the exchange, the monitoring; (4) the feed — the local feed, the balanced ration; (5) the market — the processing (the value addition), the contract farming; (6) the capital — the credit, the cooperative"
      ] },
      { q: "Describe the factors to consider in the establishment of the fish farm (the soil type, the slope of the land, the availability of the water) and the management practices (the pond stocking, the feeding of the fish, the water quality maintenance, the pond maintenance, the production control). Describe the methods of the processing and the preservation of the fish, and identify the equipment for the harvesting and the preservation.", marks: 10, outline: [
        "Factors to consider: (1) the soil type — the clay (the impervious, the holding of the water) for the earthen pond; (2) the slope of the land — the gentle slope (the easy construction, the drainage); (3) the availability of the water — the reliable source (the stream, the well, the rainwater), the quality (the clean, the oxygenated)",
        "Management practices: (1) the pond stocking — the selection of the fingerlings (the healthy, the uniform), the stocking rate (the number per unit area — the not overstocking); (2) the feeding of the fish — the proper feed (the commercial, the natural), the rate (the percentage of the body weight), the frequency (the daily), and the observation (the consumption); (3) the water quality maintenance — the monitoring (the oxygen, the pH, the temperature, the ammonia), the aeration, the exchange, and the treatment; (4) the pond maintenance — the cleaning (the removal of the silt, the weeds), the repairing of the banks, and the control of the predators; (5) the production control — the record-keeping (the stocking, the feeding, the mortality, the harvest), the grading, and the harvest",
        "Signs of the maturity and the harvesting: the indicators (the size, the weight, the age); the methods (the draining of the pond, the seining, the netting, the trapping)",
        "Processing of the fish: (1) the washing (the cleaning); (2) the scaling (the removal of the scales); (3) the gutting (the removal of the organs); (4) the filleting (the cutting of the fillets)",
        "Preservation of the fish: (1) the smoking (the wood smoke, the drying); (2) the cooking (the boiling, the grilling); (3) the salting (the salt, the drawing of the water); (4) the drying (the sun-drying, the air-drying); (5) the frying (the oil); (6) the freezing (the cold, the preservation); (7) the canning (the sealing, the sterilization)",
        "Equipment: the harvesting (the nets — the cast net, the gill net; the traps, the baskets, the seining); the preservation (the smokehouse, the salting tray, the drying rack, the freezer, the canning equipment)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section E, Topics 9–10 (Fisheries):" },
      { k: "bul", items: [
        "9. Stocking and management practices in fish farming: identification of the common species of fish; the skills in the stocking and the managing of the fish ponds; the types of fisheries — the culture fisheries (the aquaculture/fish farming) and the capture fisheries (the subsistence, the commercial, the artisanal, the industrial); the comparison of the subsistence and the commercial fisheries, and the artisanal and the industrial fisheries; the differences between the aquaculture and the fish farming; the benefits and the problems of the fish farming, and the possible solutions; the uses of the earthen ponds, the cages, the concrete tanks, the raceways and the fish pens; the factors to consider (the soil type, the slope of the land, the availability of the water) and the management practices (the pond stocking, the feeding of the fish, the water quality maintenance, the pond maintenance, the production control)",
        "10. Fish harvesting and preservation: the signs of the maturity and the methods used in the harvesting of the fish; the methods of the processing of the fish (the washing, the scaling, the gutting, the filleting) and the methods of the preservation of the fish (the smoking, the cooking, the salting, the drying, the frying, the freezing and the canning); the knowledge of the equipment for the harvesting and the preservation of the fish"
      ] }
    ]
  },
  /* =============== AG11 · AGRICULTURAL ECONOMICS & AGRIBUSINESS =============== */
  {
    grade: 12, sem: "Two", icon: "📊", period: "AG11",
    title: "Agricultural Economics & Agribusiness",
    subtitle: "Agricultural economics and the farm as an economic unit · demand and supply, equilibrium price · factors of production, the production function · agribusiness management and establishment · financing · records and accounts",
    note: "Section F, Topics 1–6: agricultural economics (the scope, the farm as an economic unit, the demand and the supply, the determination of the price), the factors of production (the land, the labour, the capital, the management; the production function and the law of diminishing returns), the introduction to the agribusiness management (the meaning, the examples, the occupations, the skills), the establishment and the management of the agribusiness (the factors, the steps), the agricultural financing (the sources of the farm credit, the conditions), and the farm records and the accounts (the types, the importance, the financial statements).",
    objectives: [
      "Explain the meaning and the scope of agricultural economics (the basic economic principles, the factors of production, the keeping of the records and the accounts, the agricultural financing and the marketing), the farm as an economic unit, and agricultural economics and farm management in the agribusiness",
      "Explain the principles of the demand and the supply, and the determination of the price of a commodity (simple calculations)",
      "Describe the factors of production (the land, the labour, the capital, the management), the functions of the farm manager, and the production function (the law of diminishing returns); draw and interpret the production function curve, the total product, the average product and the marginal product curves",
      "Explain the meaning and the examples of the agribusiness (the on-farm and the off-farm), the agribusiness occupations, and the skills/tasks/activities in the agribusiness management",
      "Describe the factors to consider in the setting up of an agribusiness (the availability of the capital, the tools/equipment, the material/input and the market) and the steps in the establishment (the planning, the organizing, the budgeting, the record keeping, the supervising, the coordinating)",
      "Describe the sources of the farm credit (the banks, the cooperative societies, the money lenders, the governmental agencies, the marketing boards, the thrift and loan societies), the types of the credit, the conditions for obtaining the credit, and the merits and demerits of the sources",
      "Distinguish the farm records from the accounts, identify the types, and prepare the income and expenditure account, the profit and loss account and the balance sheet"
    ],
    terms: [
      { t: "Agricultural economics", d: "The application of the economic principles to the agriculture — the scope: the basic economic principles, the factors of production, the keeping of the records and the accounts, the agricultural financing and the marketing of the agricultural produce.", x: "The analysis of the farm decision" },
      { t: "The farm as an economic unit", d: "The farm as a business (the enterprise) — the input (the capital, the labour) and the output (the produce), and the goal (the profit).", x: "The farm as a business" },
      { t: "Demand", d: "The quantity of the commodity that the buyers are willing and able to buy, at the various prices, in a given time.", x: "The demand for the rice" },
      { t: "Supply", d: "The quantity of the commodity that the sellers are willing and able to sell, at the various prices, in a given time.", x: "The supply of the rice" },
      { t: "Equilibrium price", d: "The price at which the quantity demanded equals the quantity supplied (the intersection of the demand and the supply curves).", x: "The market price of the rice" },
      { t: "Factors of production", d: "The inputs of the production — the land, the labour, the capital and the management.", x: "The four factors" },
      { t: "The farm manager", d: "The person who manages the farm — the functions: the planning, the organizing, the directing and the controlling.", x: "The manager of the farm" },
      { t: "The production function", d: "The relationship between the input (e.g. the labour) and the output (the product) — the total product (TP), the average product (AP) and the marginal product (MP).", x: "The TP, the AP, the MP curves" },
      { t: "The law of diminishing returns", d: "The principle that, as more of a variable input is added to the fixed input, the marginal product eventually diminishes (falls).", x: "The MP falls after a point" },
      { t: "Agribusiness", d: "The business of the agriculture — the on-farm (the crop and the animal production, the fisheries, the agroforestry, the tractor operation, the cattle range management, the bee-keeping) and the off-farm (the agroprocessing, the agricultural extension, the quarantine, the pineapple export) enterprises.", x: "The agroprocessing plant" },
      { t: "Agribusiness management", d: "The management of the agribusiness — the skills/tasks/activities: the planning, the organizing, the budgeting, the record keeping, the supervising, the coordinating.", x: "The manager of the agribusiness" },
      { t: "Establishment of agribusiness", d: "The setting up of the agribusiness — the factors (the availability of the capital, the tools/equipment, the material/input and the market) and the steps (the planning, the organizing, the budgeting, the record keeping, the supervising, the coordinating; the business plan).", x: "The startup of the poultry farm" },
      { t: "Farm credit", d: "The loan for the farm — the sources: the banks, the cooperative societies, the money lenders, the governmental agencies, the marketing boards, the thrift and loan societies; the types: the short, the medium and the long-term; the subsidies.", x: "The bank loan for the farm" },
      { t: "Conditions for credit", d: "The requirements for the obtaining of the credit — the collateral security, the surety, the personal reputation and the personal investment.", x: "The collateral for the loan" },
      { t: "Farm records", d: "The documents of the farm (the day-to-day) — the physical records (the maps, the weather chart), the inventory records, the financial records, the production and the labour records.", x: "The farm ledger" },
      { t: "Farm accounts", d: "The financial statements of the farm — the asset and the liability accounts, the receipts and the expenditure accounts, the capital and the credit accounts; the income and expenditure account, the profit and loss account and the balance sheet.", x: "The profit and loss account" },
      { t: "Business plan", d: "The document that outlines the agribusiness (the objectives, the market, the finance, the operations) — the skill to prepare it.", x: "The plan for the poultry farm" }
    ],
    tf: [
      { s: "The scope of agricultural economics includes the basic economic principles, the factors of production, the keeping of the records and the accounts, the agricultural financing and the marketing.", a: "True", why: "The meaning and scope of agricultural economics." },
      { s: "The equilibrium price is the price at which the quantity demanded equals the quantity supplied.", a: "True", why: "The determination of the price — the equilibrium." },
      { s: "The law of diminishing returns states that the marginal product eventually diminishes as more of the variable input is added.", a: "True", why: "The production function — the law of diminishing returns." },
      { s: "The farm records and the farm accounts are the same thing.", a: "False", why: "The difference between the farm records (the documents) and the accounts (the financial statements) is assessed." },
      { s: "The collateral security is one of the conditions for obtaining the farm credit.", a: "True", why: "The conditions for obtaining the credit — the collateral security, the surety, the personal reputation, the personal investment." }
    ],
    mcq: [
      { q: "The application of the economic principles to the agriculture is:", o: ["the agricultural economics", "the agribusiness only", "the extension", "the marketing"], a: 0, why: "The meaning of agricultural economics." },
      { q: "The price at which the quantity demanded equals the quantity supplied is the:", o: ["the floor price", "the equilibrium price", "the ceiling price", "the cost price"], a: 1, why: "The determination of the price — the equilibrium." },
      { q: "The four factors of production are:", o: ["the land, the labour, the capital and the management", "the soil, the water, the sun and the air", "the seed, the fertilizer, the pesticide and the tool", "the farm, the market, the bank and the government"], a: 0, why: "The factors of production." },
      { q: "The principle that the marginal product eventually diminishes is the:", o: ["the law of demand", "the law of diminishing returns", "the law of supply", "the law of gravity"], a: 1, why: "The production function — the law of diminishing returns." },
      { q: "The on-farm agribusiness includes:", o: ["the tractor operation and the bee-keeping", "the pineapple export only", "the agricultural extension only", "the quarantine only"], a: 0, why: "The on-farm businesses — the tractor operation, the cattle range management, the bee-keeping." },
      { q: "One of the sources of the farm credit is the:", o: ["the bank", "the weather", "the soil", "the seed"], a: 0, why: "The sources of the farm credit — the banks, the cooperatives, the money lenders, etc." },
      { q: "The profit and loss account and the balance sheet are examples of:", o: ["the farm records only", "the farm accounts (the financial statements)", "the farm tools", "the farm inputs"], a: 1, why: "The farm accounts — the preparation of the financial statements." }
    ],
    essay: [
      { q: "Explain the meaning and the scope of agricultural economics, and the farm as an economic unit. Describe the principles of the demand and the supply, and the determination of the price of a commodity (with a simple diagram).", marks: 12, outline: [
        "Meaning and scope of agricultural economics: the application of the economic principles (the scarcity, the choice, the opportunity cost) to the agriculture; the scope — the basic economic principles, the factors of production (the analysis of the inputs), the keeping of the records and the accounts (the cost and the revenue), the agricultural financing (the credit), and the marketing of the agricultural produce (the price, the channel)",
        "The farm as an economic unit: the farm as a business (the enterprise) — the input (the land, the labour, the capital, the management) and the output (the produce); the goal — the maximization of the profit (the revenue minus the cost); the decision (what, how and how much to produce)",
        "The principles of the demand and the supply: (1) the demand — the quantity that the buyers are willing and able to buy, at the various prices (the law of demand — the inverse relationship between the price and the quantity demanded); the factors (the income, the price of the substitutes, the taste); (2) the supply — the quantity that the sellers are willing and able to sell, at the various prices (the law of supply — the direct relationship between the price and the quantity supplied); the factors (the cost of the input, the technology, the weather)",
        "The determination of the price: the intersection of the demand and the supply curves — the equilibrium price (P₀) and the equilibrium quantity (Q₀); if the price is above the P₀, the surplus (the fall of the price); if the price is below the P₀, the shortage (the rise of the price); the movement to the equilibrium",
        "Simple calculations: the equilibrium (the solving of the demand and the supply equations, e.g. the Qd = 100 − P, the Qs = P − 20 → the 100 − P = P − 20 → the P = 60, the Q = 40)"
      ] },
      { q: "Describe the factors of production (the land, the labour, the capital, the management) and the functions of the farm manager. Explain the production function (the law of diminishing returns), and draw and interpret the total product, the average product and the marginal product curves.", marks: 10, outline: [
        "Factors of production: (1) the land — the natural resource (the soil, the water, the climate); the factors that determine the supply of the land (the fixed in the short run, the fertility, the location); (2) the labour — the human effort (the physical and the mental); the sources (the family, the hired), and the factors that determine the supply and the efficiency (the skill, the health, the incentive); (3) the capital — the man-made input (the tools, the machinery, the building, the money); the types (the fixed, the current), and the role (the increase of the productivity); (4) the management — the organizing of the other factors (the decision, the planning, the coordination)",
        "The functions of the farm manager: the planning (the setting of the objectives, the plan), the organizing (the arrangement of the resources), the directing (the supervision, the motivation), and the controlling (the monitoring, the correction)",
        "The production function: the relationship between the variable input (e.g. the labour) and the output (the product) — the total product (TP — the total output), the average product (AP — the TP divided by the input), and the marginal product (MP — the additional output from the additional unit of the input)",
        "The law of diminishing returns: as more of the variable input is added to the fixed input, the marginal product eventually diminishes (the stage I — the increase of the MP; the stage II — the fall of the MP, but the positive; the stage III — the negative MP, the over-input)",
        "The curves: the TP (the rise, then the fall), the AP (the rise to the maximum, then the fall — cut by the MP at the maximum of the AP), and the MP (the rise, then the fall, crossing the zero at the maximum of the TP); the rational production (the stage II, between the zero of the MP and the maximum of the AP); the maximization of the profit (the MR = the MC)",
        "The drawing and the interpretation: the graph (the input on the X-axis, the product on the Y-axis), the curves (the TP, the AP, the MP), and the analysis (the stages, the rational point)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section F, Topics 1–6 (Agricultural Economics, Agribusiness and Extension):" },
      { k: "bul", items: [
        "1. Agricultural economics: importance and basic principles — (a) meaning and scope (basic economic principles, factors of production, keeping records and accounts, agricultural financing and marketing of agricultural produce); (b) the farm as an economic unit; (c) agricultural economics and farm management in agribusiness; (d) principles of demand and supply; (e) determination of price for a commodity (simple calculations on demand and supply, equilibrium price determination)",
        "2. Factors of production: (a) land, labour, capital, management — the factors that determine the supply of land; the sources of agricultural labour and the factors that determine the supply and efficiency of labour; the types of agricultural capital and the role of capital; (b) functions of the farm manager; (c) the production function — the law of diminishing returns; the determination of how the various factors could be combined for the maximization of profits and the law of diminishing marginal returns; the drawing and the interpretation of the production function curve, the total product curve, the average product curve and the marginal product curve",
        "3. Introduction to agribusiness management: (a) meaning and examples — the crop and animal production, the fisheries, the agroforestry, the agroprocessing and the specialized services; the on-farm businesses (the tractor operation, the cattle range management, the bee-keeping) and the off-farm businesses (the agricultural extension, the quarantine, the pineapple export); (b) agribusiness professions; (c) skills/tasks/activities performed in agribusiness management — the planning, the organizing, the budgeting, the record keeping, the supervising, the coordinating",
        "4. Establishment and management of agribusiness: (a) factors to consider in setting up an agribusiness — the availability of the capital, the tools/equipment, the material/input and the market; (b) steps in establishing agribusiness — the knowledge and skill of preparing a business plan",
        "5. Agricultural financing: (a) sources of farm credit — the banks, the cooperative societies, the money lenders, the governmental agencies, the marketing boards, the thrift and loan societies; the types of credit (the short, the medium and the long-term); the knowledge of the subsidies as a form of agricultural financing; the merits and demerits of the credit sources; (b) conditions for obtaining credit — the collateral security, the surety, the personal reputation and the personal investment",
        "6. Farm records and accounts: (a) types and importance — the difference between the farm records and the accounts; the types of the farm records (the physical records — the maps, the weather chart; the inventory records, the financial records, the production and the labour records); the types of the farm accounts (the asset and the liability accounts, the receipts and the expenditure accounts, the capital and the credit accounts); the skills in preparing the income and expenditure account, the profit and loss account and the balance sheet; (b) preparation of financial statements"
      ] }
    ]
  },
  /* =============== AG12 · MARKETING OF AGRICULTURAL PRODUCE =============== */
  {
    grade: 12, sem: "Two", icon: "🛒", period: "AG12",
    title: "Marketing of Agricultural Produce",
    subtitle: "Meaning and importance · marketing functions · channels, agents and agencies · problems of marketing",
    note: "Section F, Topic 7: the marketing of the agricultural produce — the meaning and the importance, the marketing functions, the marketing channels/agents/agencies, and the problems associated with the marketing.",
    objectives: [
      "Explain the meaning of marketing (distinguishing it from the market) and its importance",
      "Describe the marketing functions (the assembling, the processing, the grading, the sorting, the storage, the transportation, the advertising and the distribution)",
      "Describe the marketing channels, the agents and the agencies (the producers, the middlemen, the consumers, the country buyers, the wholesalers, the retailers and the brokers)",
      "Explain the problems associated with the marketing of the agricultural produce"
    ],
    terms: [
      { t: "Marketing", d: "The process of moving the produce from the producer to the consumer (the set of activities — the buying, the selling, the transporting, the storing) — distinct from the market (the place of the exchange).", x: "The marketing of the rice" },
      { t: "Market", d: "The place (the physical or the virtual) where the buyers and the sellers meet to exchange the goods.", x: "The market day in the town" },
      { t: "Importance of marketing", d: "The role of the marketing — the linking of the producer and the consumer, the realization of the value of the produce, the income of the farmer, and the welfare of the consumer.", x: "The farmer getting the price for the crop" },
      { t: "Assembling", d: "The gathering of the produce from the scattered producers (the collection at the collection centre).", x: "The gathering of the cocoa at the station" },
      { t: "Processing", d: "The conversion of the raw produce to the marketable form (the milling, the grinding, the packing).", x: "The milling of the rice" },
      { t: "Grading and sorting", d: "The classification of the produce by the quality/size (the grade A, the grade B) and the sorting (the separation of the good from the bad).", x: "The grading of the cocoa beans" },
      { t: "Storage", d: "The keeping of the produce (the warehouse, the silo) until the sale.", x: "The storage of the groundnut" },
      { t: "Transportation", d: "The movement of the produce (the truck, the boat, the rail) from the farm to the market.", x: "The trucking of the rice" },
      { t: "Advertising", d: "The promotion of the produce (the information to the buyer) — the sign, the radio, the poster.", x: "The advertising of the brand" },
      { t: "Distribution", d: "The delivery of the produce to the final point of the sale (the retail).", x: "The delivery to the shop" },
      { t: "Marketing channel", d: "The path of the produce from the producer to the consumer (the direct — the producer to the consumer; the indirect — through the middlemen).", x: "The producer → the wholesaler → the retailer → the consumer" },
      { t: "Marketing agents/agencies", d: "The players in the marketing — the producers (the farmers), the middlemen (the country buyers, the wholesalers, the brokers), the retailers, and the consumers.", x: "The country buyer, the wholesaler" },
      { t: "Country buyer", d: "The middleman who buys the produce directly from the farmer (at the farm, the village).", x: "The buyer at the farm gate" },
      { t: "Wholesaler", d: "The middleman who buys in the bulk and sells in the lots (to the retailer).", x: "The wholesaler of the rice" },
      { t: "Retailer", d: "The seller to the final consumer (the shopkeeper).", x: "The shopkeeper" },
      { t: "Broker", d: "The middleman who acts as the agent (the link) between the buyer and the seller (for the commission).", x: "The broker of the cocoa" },
      { t: "Marketing problems", d: "The challenges of the marketing — the middlemen (the margin), the storage (the loss), the transportation (the cost), the information (the price), and the standard (the grade).", x: "The loss in the storage" }
    ],
    tf: [
      { s: "Marketing is the same thing as the market.", a: "False", why: "The difference between the marketing (the process) and the market (the place) is assessed." },
      { s: "The marketing functions include the assembling, the processing, the grading, the storage, the transportation and the distribution.", a: "True", why: "The marketing functions." },
      { s: "The country buyer is the middleman who buys the produce directly from the farmer.", a: "True", why: "The marketing agents — the country buyer." },
      { s: "One of the problems of the marketing is the loss of the produce in the storage.", a: "True", why: "The problems associated with the marketing — the storage (the loss)." }
    ],
    mcq: [
      { q: "The process of moving the produce from the producer to the consumer is:", o: ["the market", "the marketing", "the production", "the farming"], a: 1, why: "The meaning of the marketing (distinct from the market)." },
      { q: "The gathering of the produce from the scattered producers is the:", o: ["the processing", "the assembling", "the advertising", "the distribution"], a: 1, why: "The marketing functions — the assembling." },
      { q: "The classification of the produce by the quality/size is the:", o: ["the grading", "the assembling", "the transportation", "the storage"], a: 0, why: "The marketing functions — the grading (and the sorting)." },
      { q: "The middleman who buys the produce directly from the farmer is the:", o: ["the retailer", "the country buyer", "the broker only", "the consumer"], a: 1, why: "The marketing agents — the country buyer." },
      { q: "The middleman who buys in the bulk and sells in the lots (to the retailer) is the:", o: ["the wholesaler", "the country buyer", "the producer", "the consumer"], a: 0, why: "The marketing agents — the wholesaler." },
      { q: "The seller to the final consumer (the shopkeeper) is the:", o: ["the wholesaler", "the retailer", "the broker", "the country buyer"], a: 1, why: "The marketing agents — the retailer." },
      { q: "One of the problems of the marketing of the agricultural produce is the:", o: ["the loss of the produce in the storage", "the increase of the yield", "the improvement of the soil", "the planting of the crop"], a: 0, why: "The problems — the storage (the loss), the middlemen (the margin), the transportation (the cost)." }
    ],
    essay: [
      { q: "Explain the meaning of marketing (distinguishing it from the market) and its importance. Describe the marketing functions (the assembling, the processing, the grading, the sorting, the storage, the transportation, the advertising and the distribution).", marks: 12, outline: [
        "Meaning of marketing: the process of moving the produce from the producer to the consumer — the set of activities (the buying, the selling, the transporting, the storing, the promoting); the distinction from the market — the marketing is the process (the function), while the market is the place (the physical or the virtual) where the exchange takes place",
        "Importance of marketing: (1) the linking of the producer and the consumer (the bridge); (2) the realization of the value of the produce (the price); (3) the income of the farmer (the revenue); (4) the welfare of the consumer (the availability, the quality); (5) the development of the economy (the trade, the employment)",
        "The marketing functions: (1) the assembling — the gathering of the produce from the scattered producers (the collection centre, the station); (2) the processing — the conversion of the raw produce to the marketable form (the milling, the grinding, the packing, the cleaning); (3) the grading — the classification of the produce by the quality (the grade A, the grade B); (4) the sorting — the separation of the good from the bad (the removal of the dirt, the damaged); (5) the storage — the keeping of the produce (the warehouse, the silo) until the sale (the regulation of the supply); (6) the transportation — the movement of the produce (the truck, the boat, the rail) from the farm to the market; (7) the advertising — the promotion of the produce (the information to the buyer, the sign, the radio); (8) the distribution — the delivery of the produce to the final point of the sale (the retail, the shop)",
        "The performance of these functions adds the value to the produce, and ensures its availability to the consumer, at the right place, at the right time"
      ] },
      { q: "Describe the marketing channels, the agents and the agencies (the producers, the middlemen, the consumers, the country buyers, the wholesalers, the retailers and the brokers). Explain four problems associated with the marketing of the agricultural produce, and suggest a solution for each.", marks: 10, outline: [
        "The marketing channels: (1) the direct channel — the producer to the consumer (the farm gate, the market day); (2) the indirect channel — the producer → the middlemen (the country buyer, the wholesaler, the retailer) → the consumer; the length of the channel (the number of the middlemen)",
        "The marketing agents/agencies: (1) the producers (the farmers) — the sellers; (2) the middlemen — the country buyers (the buyers at the farm), the wholesalers (the bulk buyers, the sellers to the retailers), the brokers (the agents, the links, for the commission); (3) the retailers (the shopkeepers) — the sellers to the consumers; (4) the consumers — the buyers (the final users)",
        "The problems and the solutions: (1) the problem of the middlemen (the margin, the low price to the farmer) → the solution: the direct marketing (the farm gate, the cooperative, the contract farming); (2) the problem of the storage (the loss, the spoilage) → the solution: the improved storage (the hermetic, the silo, the warehouse); (3) the problem of the transportation (the cost, the poor road) → the solution: the improvement of the road, the collective transport; (4) the problem of the information (the price, the market) → the solution: the market information (the radio, the mobile, the extension); (5) the problem of the standard (the grade, the quality) → the solution: the grading, the standard (the GSA, the certification)",
        "The solution of these problems ensures the fair price to the farmer, the availability to the consumer, and the development of the agricultural economy"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section F, Topic 7 (Marketing of Agricultural Produce):" },
      { k: "bul", items: [
        "7. Marketing of Agricultural produce: (a) meaning and importance — the difference between the marketing and the market; the importance of the marketing; (b) marketing functions — the assembling, the processing, the grading, the sorting, the storage, the transportation, the advertising and the distribution; (c) marketing channels, agents and agencies — the producers, the middlemen, the consumers, the country buyers, the wholesalers, the retailers and the brokers; (d) problems associated with the marketing of the agricultural produce"
      ] }
    ]
  }
  ]
};
window.WA_SUBJECTS.ag = window.WA_ag;
