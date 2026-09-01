/* WASSCE (WAEC) — BIOLOGY (part 2): the remainder of Section A and the
   LIBERIA-specific Section C (for candidates in Nigeria, Sierra Leone,
   The Gambia and Liberia). Appends its units to window.WA_bio.units. */
(function () {
  "use strict";
  var U = window.WA_bio.units;
  U.push(
  /* =============== A10 · BASIC ECOLOGICAL CONCEPTS =============== */
  {
    grade: 12, sem: "Two", icon: "🌍", period: "A10",
    title: "Basic Ecological Concepts",
    subtitle: "The ecosystem · ecological factors · measurement · food webs and trophic levels · energy flow · decomposition · associations · adaptation · pollution",
    note: "Topic C of Section A: the components of ecosystems, the factors that shape them, food relationships, energy flow and the human impact — pollution and ecological management.",
    objectives: [
      "Define the ecological components: environment, biosphere, habitat, population, biotic community and ecosystem; biotic and abiotic components",
      "Describe ecological factors in aquatic and terrestrial ecosystems (climatic, topographic, gaseous, edaphic)",
      "Measure ecological factors: humidity, temperature, wind speed, rainfall, light intensity",
      "Classify organisms as producers, consumers and decomposers; illustrate food chains and food webs",
      "Construct and explain pyramids of energy and numbers",
      "Describe decomposition, biological associations (parasitism, symbiosis, commensalism, saprophytism), adaptation to habitats, and the nature and effects of air, water and soil pollution"
    ],
    terms: [
      { t: "Ecosystem", d: "A community of living organisms together with its physical environment, functioning as a unit.", x: "A pond ecosystem" },
      { t: "Habitat", d: "The natural home or environment of an organism; population — all individuals of a species in an area; community — all populations in an area.", x: "The mangrove swamp is the habitat of the mudskipper" },
      { t: "Producer", d: "An autotroph (green plant/algae) that fixes energy at the base of the food chain.", x: "Grass; phytoplankton" },
      { t: "Consumer", d: "A heterotroph that feeds on other organisms — primary (herbivore), secondary (carnivore), tertiary.", x: "Grasshopper (primary consumer)" },
      { t: "Decomposer", d: "An organism (bacteria, fungi, detritivores) that breaks down dead organic matter, releasing CO₂, heat and inorganic salts.", x: "Rhizopus on decaying food" },
      { t: "Trophic level", d: "A position in the food chain — producer level, primary consumer level, etc.; energy decreases at each level.", x: "Energy transfer is about 10% between levels" },
      { t: "Pyramid of numbers/energy", d: "Graphic representation of the number of organisms (or energy) at each trophic level; the energy pyramid is always upright.", x: "One tree supports thousands of insects — an inverted number pyramid" },
      { t: "Symbiosis", d: "A close association between two different organisms in which both benefit; parasitism — one benefits, the host is harmed; commensalism — one benefits, the other is unaffected.", x: "Lichen (algae + fungus) — mutualism; tapeworm in man — parasitism" },
      { t: "Pollution", d: "The introduction of harmful substances (air, water, soil) or noise into the environment.", x: "SO₂, CO, NOₓ, smoke, smog, oil spillage" }
    ],
    tf: [
      { s: "Energy transfer in a food chain is cyclic.", a: "False", why: "The non-cyclic nature of energy transfer should be mentioned — energy flows one way and is lost as heat at each level." },
      { s: "Carbon dioxide, hydrogen sulphide and heat energy are released during decomposition.", a: "True", why: "Demonstrations show that CO₂, H₂S and heat are released during decomposition." },
      { s: "Noise from generators, aeroplanes and electronic gadgets is mentioned as an environmental pollutant.", a: "True", why: "The harmful effect of noise from generators, aeroplanes and electronic sound gadgets should be mentioned." },
      { s: "Oil spillage and its effects should be mentioned under water and soil pollution.", a: "True", why: "Mention should be made of oil spillage and its effects." }
    ],
    mcq: [
      { q: "The base of every food chain is occupied by:", o: ["decomposers", "producers", "secondary consumers", "scavengers"], a: 1, why: "Producers (autotrophs) fix the energy that flows through the chain." },
      { q: "In the food chain grass → grasshopper → lizard → hawk, the lizard is a:", o: ["producer", "primary consumer", "secondary consumer", "tertiary consumer"], a: 2, why: "Grasshopper = primary; lizard = secondary consumer." },
      { q: "Which pyramid of energy is ALWAYS upright?", o: ["the pyramid of numbers", "the pyramid of biomass", "the pyramid of energy", "none of them"], a: 2, why: "Energy always decreases up the chain, so the energy pyramid is always upright." },
      { q: "A lichen (an alga living with a fungus) is an example of:", o: ["parasitism", "commensalism", "mutualism (symbiosis)", "predation"], a: 2, why: "Both partners benefit — the alga gets protection and minerals; the fungus gets food." },
      { q: "Which of the following is an air pollutant named in the syllabus?", o: ["ozone only", "carbon monoxide, sulphur dioxide, oxides of nitrogen, smoke and smog", "oxygen", "nitrogen"], a: 1, why: "Air pollutants include CO, SO₂, NOₓ, smoke, smog, dust and factory particles." },
      { q: "The main effect of deforestation on the environment includes all of the following EXCEPT:", o: ["soil erosion", "loss of habitat", "increased rainfall reliability", "disruption of the water cycle"], a: 2, why: "Deforestation disrupts the water cycle and reduces rainfall reliability — it does not increase it." },
      { q: "A population in which births equal deaths and immigration equals emigration is:", o: ["growing", "declining", "stable (dynamic equilibrium)", "extinct"], a: 2, why: "No net change — a stable population." },
      { q: "Which factor affects population size?", o: ["natality", "mortality", "predation", "all of them"], a: 3, why: "Factors: natality, mortality, emigration, immigration, food shortage, predation, competition, diseases." }
    ],
    essay: [
      { q: "Define an ecosystem and describe its components. Draw and label a food web from a local habitat (at least five organisms) and explain the flow of energy through it.", marks: 12, outline: [
        "Ecosystem = biotic community + abiotic environment, interacting as a unit",
        "Components: producers, consumers (primary, secondary, tertiary), decomposers; abiotic — light, temperature, water, soil, gases",
        "Food web: e.g. grass → grasshopper → lizard → hawk; grass → rat → snake → hawk; plus decomposers on all dead matter",
        "Energy flow: from the sun → producers (photosynthesis) → consumers; about 90% lost as heat at each transfer; the flow is non-cyclic"
      ] },
      { q: "Explain the terms: (a) parasitism, (b) symbiosis (mutualism), (c) commensalism, giving a named example of each. (d) State four effects of air pollution on health and the environment.", marks: 10, outline: [
        "(a) Parasitism — one organism benefits at the expense of the host: tapeworm in the human intestine; malaria parasite in man",
        "(b) Symbiosis/mutualism — both benefit: lichen; legume root-nodules and bacteria; coral and algae",
        "(c) Commensalism — one benefits, the other unaffected: cattle egret on grazing cattle; remora on shark",
        "(d) Health hazards: respiratory diseases, damage to crops and vegetation, acid rain, harm to aquatic life; plus noise effects"
      ] },
      { q: "Describe the factors that affect population size and explain how the balance of nature is maintained in a stable ecosystem.", marks: 10, outline: [
        "Factors: natality, mortality, immigration, emigration, food shortage, predation, competition, disease",
        "Balance of nature: dynamic equilibrium — predator–prey cycles, competition for limited resources, density-dependent regulation",
        "Example: an increase in rabbits → increase in foxes → decrease in rabbits → decrease in foxes",
        "Human activities disturb the balance (deforestation, pollution, overgrazing)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Topic C (Basic Ecological Concepts), items 1–5:" },
      { k: "bul", items: [
        "1. Ecosystem — ecological components: environment, biosphere, habitat, population, biotic community and ecosystem; biotic and abiotic components",
        "2. Ecological factors — in aquatic and terrestrial ecosystems; physical factors: climatic, topographic and gaseous; edaphic factors: chemical and physical composition, moisture content, soil texture",
        "3. Simple measurement of ecological factors — humidity, temperature, wind speed, rainfall, light intensity",
        "4. Food webs and trophic levels — autotrophs/heterotrophs; producers, consumers, decomposers; trophic levels and energy relationships; food chain and food web; energy flow (food/energy relationships in aquatic and terrestrial environments); pyramids of energy and numbers; decomposition in nature (micro- and macro-decomposers; gaseous products; role of decomposers)",
        "5. Ecological management — biological associations (parasitism, symbiosis, commensalism, saprophytism); adaptation of organisms to habitats; pollution of the atmosphere (nature, names, sources, effects of air pollutants; effect of noise); water and soil pollution (types and effects)"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "Importance of ecological factors common to all habitats; importance to populations of animals and plants; measure humidity, temperature, wind speed, rainfall and light intensity.",
        "Classify organisms as producers, consumers, decomposers (aquatic and terrestrial); illustrate food relationships in food chains and webs with specific examples; the non-cyclic nature of energy transfer.",
        "Construct and explain the pyramid of energy and the pyramid of numbers, and point out the major differences.",
        "Demonstrations: CO₂, H₂S and heat released during decomposition; features of biological importance for each association type, with named examples.",
        "Adaptations of plants and animals to environmental conditions, with reference to differences in habitats.",
        "Air pollutants: carbon monoxide, sulphur dioxide, oxides of nitrogen, smoke, smog, dust and factory particles; health hazards and environmental damage; noise from generators, aeroplanes and electronic gadgets.",
        "Water and soil pollutants: detergents, insecticides, artificial fertilizers, herbicides, sewage, domestic and industrial wastes, crude oil and decaying organic matter; health hazards; oil spillage and its effects."
      ] }
    ]
  },
  /* =============== A11 · POPULATION ECOLOGY, CONSERVATION & MICROORGANISMS =============== */
  {
    grade: 12, sem: "Two", icon: "🦟", period: "A11",
    title: "Population Ecology, Conservation & Microorganisms",
    subtitle: "Ecological succession · population preservation and food storage · pests · microorganisms and man's health · conservation of natural resources · variation in populations",
    note: "The remaining items of Topics C, D and E of Section A: succession and population dynamics, food preservation, pest control, microorganisms (beneficial and harmful), conservation of resources, and variation.",
    objectives: [
      "Describe ecological succession (primary and secondary), its structural changes and the climax community",
      "State the factors affecting population size and explain the preservation and storage of food, including ionizing radiations and local methods",
      "Describe the life of selected pests (weevils, cotton stainers) and methods of pest control",
      "Identify carriers of microorganisms and their beneficial and harmful effects, including the diseases cholera, measles, malaria and ringworm",
      "Explain methods of controlling harmful microorganisms and their vectors, and public health practices (refuse and sewage disposal, immunization, vaccination, inoculation)",
      "State the resources to be conserved and the ways of ensuring conservation",
      "Distinguish morphological and physiological (continuous and discontinuous) variation"
    ],
    terms: [
      { t: "Ecological succession", d: "The gradual, predictable change in the species composition of a community over time, towards a stable climax.", x: "Bare rock → lichens → mosses → grasses → forest" },
      { t: "Primary succession", d: "Succession beginning on a newly exposed, lifeless substrate (bare rock, sand dune).", x: "On lava flows" },
      { t: "Secondary succession", d: "Succession after a disturbance destroys a community but leaves the soil intact (abandoned farmland, burnt forest).", x: "An abandoned farmland returning to woodland" },
      { t: "Climax community", d: "The stable, self-perpetuating community at the end of succession, in equilibrium with the environment.", x: "The mature tropical rain forest" },
      { t: "Vector", d: "An organism that transmits a disease-causing microorganism from one host to another.", x: "The Anopheles mosquito (malaria); the housefly (typhoid, cholera)" },
      { t: "Immunization", d: "The process of making an organism resistant to a disease, usually by vaccination (introducing weakened/killed pathogens or toxoids) or inoculation.", x: "BCG vaccination against tuberculosis" },
      { t: "Conservation", d: "The careful management and protection of natural resources (soil, water, wildlife, forest, minerals) for present and future use.", x: "Gaming reserves; tree planting" },
      { t: "Variation", d: "Differences among individuals of a species — morphological (size, colour, fingerprints) and physiological (tongue rolling, PTC tasting, blood groups).", x: "Continuous: height; discontinuous: blood group" }
    ],
    tf: [
      { s: "The use of ionizing radiations (e.g. X-rays) in food preservation should be mentioned.", a: "True", why: "The use of ionizing radiations (X-ray, etc.) should be mentioned; local methods such as drying, salting and smoking should be mentioned." },
      { s: "Cholera, measles, malaria and ringworm are studied with respect to causative organisms, mode of transmission and symptoms.", a: "True", why: "The diseases should be studied with respect to the causative organisms, mode of transmission and symptoms." },
      { s: "Morphological variation includes the ability to taste PTC.", a: "False", why: "PTC tasting is a physiological variation; morphological variation includes size, height, weight, colour and fingerprints." }
    ],
    mcq: [
      { q: "Succession that begins on bare rock is called:", o: ["secondary succession", "primary succession", "climax", "regeneration"], a: 1, why: "Lifeless substrate with no soil — primary succession." },
      { q: "The stable community at the end of succession is the:", o: ["pioneer community", "climax community", "transitional community", "invading community"], a: 1, why: "The climax community is characteristic of a stable ecosystem." },
      { q: "The Anopheles mosquito transmits the organism that causes:", o: ["cholera", "malaria", "measles", "ringworm"], a: 1, why: "Anopheles → Plasmodium (malaria)." },
      { q: "Which of the following is a method of controlling harmful microorganisms in food?", o: ["keeping it in the dark", "high temperature (boiling/canning)", "adding more sugar only", "leaving it uncovered"], a: 1, why: "High temperature, antibiotics, antiseptics, high salinity and dehydration control microorganisms." },
      { q: "A vaccine is used to:", o: ["cure an existing infection", "stimulate the body to produce immunity", "kill all bacteria in the body", "replace lost blood"], a: 1, why: "Vaccination induces immunity before exposure." },
      { q: "Which of the following is a renewable natural resource that must be conserved in the syllabus?", o: ["minerals", "petroleum", "soil, water, wildlife, forest", "coal"], a: 2, why: "Resources to be conserved: soil, water, wildlife, forest and minerals." },
      { q: "Human blood groups (ABO) are an example of:", o: ["continuous variation", "discontinuous variation", "adaptive colouration", "sexual variation"], a: 1, why: "Blood groups fall into distinct classes — discontinuous (physiological) variation." },
      { q: "Fingerprints are studied in the syllabus in relation to:", o: ["blood transfusion", "crime detection", "paternity only", "skin diseases"], a: 1, why: "The uniqueness of each individual's fingerprint is mentioned in relation to crime detection." }
    ],
    essay: [
      { q: "Explain the terms primary and secondary succession with a named example of each, and describe the changes that occur from the pioneer community to the climax community.", marks: 10, outline: [
        "Primary succession: starts on lifeless substrate (bare rock, sand) — pioneer lichens/mosses build soil → grasses → shrubs → trees → climax forest",
        "Secondary succession: after disturbance (fire, abandoned farmland) — soil already present, so succession is faster: weeds → grasses → shrubs → forest",
        "Structural changes: increase in species diversity, in numbers, in biomass; the climax is stable and self-perpetuating",
        "Outcomes: a balanced ecosystem in equilibrium with the climate"
      ] },
      { q: "Describe four methods of preserving and storing food and explain the biological principle behind each. State two methods of controlling the housefly and the mosquito.", marks: 10, outline: [
        "Drying — removes water, inhibiting microbial growth (local: dried fish, groundnuts)",
        "Salting/sugaring — high salinity/sugar creates a hypertonic environment; microbes lose water by osmosis (salt fish, honey)",
        "Smoking — phenols and heat from wood smoke are antimicrobial (smoked fish)",
        "Cooking/canning — high temperature kills microorganisms and denatures enzymes; ionizing radiations (X-rays) also kill microbes",
        "Housefly: screen doors/windows, refuse disposal, insecticides; mosquito: drainage of stagnant water, insect fogging, bed nets"
      ] },
      { q: "Malaria is a major public health problem in West Africa. (a) Name its causative organism and its vector. (b) Describe the mode of transmission. (c) State four measures for its control.", marks: 10, outline: [
        "(a) Plasmodium (e.g. P. falciparum); vector — the female Anopheles mosquito",
        "(b) A mosquito bites an infected person, takes up the parasite, and transmits it to a healthy person through its saliva at a later bite",
        "(c) Drain stagnant water; use insecticide-treated bed nets; indoor residual spraying; clear vegetation around houses; take prophylactic drugs; wear protective clothing at dusk",
        "Plus: immunization/vaccination concepts and the roles of health organizations"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Topics C items 6–8, D and E:" },
      { k: "bul", items: [
        "C.6 Ecological management — biological associations (parasitism, symbiosis, commensalism, saprophytism); adaptation to habitats; air, water and soil pollution (see A10)",
        "C.7 Ecology of population — (a) ecological succession: structural changes in species composition, variety/diversity and numbers; general characteristics and outcomes; primary succession (terrestrial and aquatic); secondary succession; climax of the succession; (factors affecting population size: natality, mortality, emigration, immigration, food shortage, predation, competition, diseases); (e) preservation and storage of foods; (f) the life of selected insects — weevils and cotton stainers; control of pests",
        "C.8 Microorganisms: man and health — (a) carriers of microorganisms (housefly, mosquitoes, tsetse fly); (b) microorganisms in action: beneficial effects in nature, medicine and industries; harmful effects — cholera, measles, malaria, ring worm; (c) towards better health: controlling harmful microorganisms (high temperature, antibiotics, antiseptics, high salinity, dehydration); controlling vectors; (d) public health: refuse and sewage disposal; immunization, vaccination and inoculation",
        "D. Conservation of natural resources — resources to be conserved: soil, water, wildlife, forest and minerals; ways of ensuring conservation",
        "E. Variation in population — (1) morphological variations: size, height and weight; colour (skin, eye, hair, coat of animals); fingerprints; (2) physiological variations: ability to roll the tongue, ability to taste PTC, blood groups (ABO)"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "Succession: study in an abandoned farmland, lawn and a pond over time to discover a definite sequence of colonization by plants.",
        "Preservation: various methods, the use of ionizing radiations (X-rays), the biological basis, and local methods (drying, salting, smoking).",
        "Pests: external features of weevils and cotton stainers, mode of life, adaptation, economic importance; physical, chemical and biological methods of pest control with advantages and disadvantages.",
        "Carriers: housefly, mosquitoes, tsetse fly; experiments on fermentation and curdling of milk for beneficial uses; diseases studied by causative organism, mode of transmission and symptoms.",
        "Public health: proper methods in the community; various forms of immunization; explanation of immunization, vaccination and inoculation and how the terms are related; methods of controlling housefly and mosquito.",
        "Conservation: meaning and need; problems in relation to economic and social development, overgrazing and poaching; agencies responsible; conservation education; conservation laws; benefits.",
        "Variation: classified into morphological/physiological and continuous/discontinuous; measure heights and weights of pupils and plot frequency-distribution graphs; observe skin and colour patterns (cow, goat, rabbit; maize cob and leaves); make fingerprints and classify into arches, loops, whorls and compounds."
      ] }
    ]
  },
  /* =============== A12 · BIOLOGY OF HEREDITY =============== */
  {
    grade: 12, sem: "Two", icon: "🧬", period: "A12",
    title: "Biology of Heredity (Genetics)",
    subtitle: "Genetic terminology · Mendel's work · chromosomes · probability · linkage and sex determination · applications in agriculture and medicine",
    note: "Topic F of Section A: the vocabulary of genetics, Mendel's laws, chromosomes as the basis of heredity, and the application of heredity in agriculture and medicine. A favourite Paper 2 topic.",
    objectives: [
      "Define the basic genetic terms: gene, genotype, phenotype, dominant, recessive, allele, locus, test cross, back cross",
      "Describe Mendel's experiments (monohybrid and dihybrid) and state his laws",
      "Explain the structure of the chromosome, DNA and gene replication, and the transmission of hereditary characters at meiosis and fertilization",
      "Use probability in hybrid formation",
      "Explain linkage, sex determination and sex-linked characters (haemophilia, colour blindness, baldness, hairy ear lobes)",
      "Apply the principles of heredity in agriculture (cross-breeding, new varieties) and medicine (marriage counseling, sickle cell anaemia, rhesus factor)"
    ],
    terms: [
      { t: "Gene", d: "The unit of heredity — a segment of DNA that controls a particular characteristic.", x: "The gene for seed shape in pea" },
      { t: "Genotype", d: "The genetic constitution of an organism (the alleles it carries).", x: "Tt — heterozygous" },
      { t: "Phenotype", d: "The observable appearance or characteristic, resulting from genotype plus environment.", x: "Tall (from TT or Tt)" },
      { t: "Allele", d: "One of two or alternative forms of a gene occupying the same locus on homologous chromosomes.", x: "T (tall) and t (dwarf)" },
      { t: "Dominant/recessive", d: "The dominant allele masks the recessive in a heterozygote; the recessive is expressed only in the homozygous state.", x: "T is dominant to t" },
      { t: "Monohybrid cross", d: "A cross between individuals differing in one pair of characters; the F₂ ratio is 3:1.", x: "Tall × dwarf → all tall F₁; 3 tall : 1 dwarf F₂" },
      { t: "Dihybrid cross", d: "A cross involving two pairs of characters; the F₂ ratio is 9:3:3:1 (independent assortment).", x: "Round-yellow × wrinkled-green" },
      { t: "Test cross", d: "Crossing an individual with a homozygous recessive to reveal its genotype.", x: "Tall × dwarf → all tall means the tall parent is TT" },
      { t: "Sex-linked character", d: "A character whose gene lies on a sex chromosome (X), e.g. haemophilia, colour blindness.", x: "More common in males than females" },
      { t: "Sickle cell anaemia", d: "A hereditary blood disorder (HbS) caused by a recessive gene; the heterozygote (HbA HbS) has resistance to malaria.", x: "Marriage counseling prevents HbS × HbS unions" }
    ],
    tf: [
      { s: "Computation of probability is required in the WASSCE genetics syllabus.", a: "False", why: "Computation of probability is not required — only probability in hybrid formation (hybrid formation) is set." },
      { s: "Mendel's experiments with red and white flowered peas should be mentioned.", a: "True", why: "Mendel's experiment with red and white flowered peas; monohybrid and dihybrid inheritance." },
      { s: "Segregation of genes at meiosis and recombination at fertilization explain the transmission of hereditary characters.", a: "True", why: "Segregation at meiosis and recombination at fertilization explain the process of transmission." }
    ],
    mcq: [
      { q: "In a monohybrid cross between two heterozygotes (Tt × Tt), the F₂ phenotypic ratio is:", o: ["1:1", "3:1", "9:3:3:1", "1:2:1"], a: 1, why: "TT, Tt, Tt, tt → 3 tall : 1 dwarf." },
      { q: "The genotypic ratio of the F₂ generation of a monohybrid cross (Tt × Tt) is:", o: ["3:1", "1:2:1", "9:3:3:1", "1:1"], a: 1, why: "TT : Tt : tt = 1 : 2 : 1." },
      { q: "A dihybrid cross (independent assortment) gives the F₂ ratio:", o: ["3:1", "1:1", "9:3:3:1", "1:2:1"], a: 2, why: "Nine dominant-dominant, three dominant-recessive, three recessive-dominant, one recessive-recessive." },
      { q: "A tall plant (T_) when test-crossed produces all tall offspring. Its genotype is most likely:", o: ["Tt", "TT", "tt", "TT or Tt"], a: 1, why: "If it were Tt, half the offspring would be dwarf; all tall means TT." },
      { q: "Haemophilia is a sex-linked character carried on the:", o: ["autosome", "X chromosome", "Y chromosome", "mitochondrion"], a: 1, why: "X-linked recessive — more common in males (XY)." },
      { q: "The sex of a human child is determined by:", o: ["the mother's egg", "the father's sperm (X or Y)", "the environment", "nutrition"], a: 1, why: "The sperm carries either X (→ female) or Y (→ male)." },
      { q: "A couple, both carriers of the sickle cell gene (HbA HbS), have a child. The chance of the child being affected (HbS HbS) is:", o: ["0", "1/4", "1/2", "1"], a: 1, why: "HbA HbS × HbA HbS → 1/4 HbS HbS (affected)." },
      { q: "The process by which chromosomes halve the chromosome number is:", o: ["mitosis", "meiosis", "binary fission", "budding"], a: 1, why: "Meiosis produces haploid gametes; segregation of genes occurs at meiosis." }
    ],
    essay: [
      { q: "Mendel crossed a pure-breeding tall pea plant with a pure-breeding dwarf pea plant. (a) Show, with a worked genetic diagram, the results of the F₁ and F₂ generations. (b) State Mendel's law illustrated. (c) Define: genotype, phenotype, allele, test cross.", marks: 12, outline: [
        "P: TT (tall) × tt (dwarf) → F₁: all Tt (tall)",
        "F₁ × F₁: Tt × Tt → F₂ genotypes TT, Tt, Tt, tt; phenotypes 3 tall : 1 dwarf",
        "Law of segregation: the two alleles of a gene separate at meiosis so that each gamete carries only one",
        "Genotype — genetic constitution; phenotype — observable character; allele — alternative form of a gene; test cross — cross with a homozygous recessive to determine genotype"
      ] },
      { q: "Explain the structure of the chromosome and how hereditary characters are transmitted from parents to offspring, referring to meiosis and fertilization.", marks: 10, outline: [
        "Chromosome: a thread of DNA + protein; carries genes at loci; homologous pairs; observed in onion/lily root-tip slides",
        "DNA: double helix (Watson and Crick); gene replication; RNA transcription",
        "Meiosis: homologous chromosomes separate (segregation of genes) → haploid gametes with one allele of each gene",
        "Fertilization: the union of the two gametes restores the diploid number and recombines the alleles (recombination at fertilization)"
      ] },
      { q: "(a) Explain the terms: linkage, sex determination and sex-linked character, giving an example. (b) State two applications of the principles of heredity in agriculture and two in medicine.", marks: 10, outline: [
        "(a) Linkage — genes on the same chromosome tend to be inherited together; sex determination — XX (female) / XY (male); sex-linked characters — haemophilia, colour blindness, baldness, hairy ear lobes (X-linked)",
        "(b) Agriculture: cross-breeding for new varieties of crops and livestock; hybrid vigor; selection of desirable traits",
        "Medicine: marriage counseling (sickle cell anaemia, rhesus factor); predicting inherited diseases; family studies",
        "Advantages/disadvantages of cross-fertilization, out- and in-breeding should be explained"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Topic F (Biology of Heredity):" },
      { k: "bul", items: [
        "1. Genetic terminologies",
        "2. Transmission and expression of characteristics — hereditary variation; Mendel's work (experiments, Mendelian traits, Mendelian laws)",
        "3. Chromosomes: the basis of heredity — (a) structure; (b) process of transmission of hereditary characters from parents to offspring",
        "4. Probability in genetics (hybrid formation)",
        "5. Linkage, sex determination and sex-linked characters",
        "6. Application of the principles of heredity in (a) agriculture, (b) medicine"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "Define: gene, genotype, phenotype, dominant, recessive, allele, locus, test cross, back cross.",
        "Characters transmissible from generation to generation: colour of skin, eye, hair, blood group, sickle cell, shape of face and nose.",
        "Mendel's experiment with red and white flowered peas; monohybrid and dihybrid inheritance; dominant and recessive characters in plants and animals.",
        "Observe chromosomes in permanently prepared slides of cells and root tips of onion or lily; study the structure of DNA and gene replication using models and charts; segregation of genes at meiosis and recombination at fertilization.",
        "Computation of probability is NOT required. Explanation of linkage, sex determination and sex-linked characters such as haemophilia, colour blindness, baldness and hairy ear lobes.",
        "Agriculture: data on cross-breeding experiments; new varieties of crops and livestock; advantages and disadvantages of cross-fertilization, out- and in-breeding.",
        "Medicine: marriage counseling with particular reference to sickle cell anaemia and the rhesus factor."
      ] }
    ]
  },
  /* =============== A13 · ADAPTATION & EVOLUTION =============== */
  {
    grade: 12, sem: "Two", icon: "🦎", period: "A13",
    title: "Adaptation for Survival & Evolution",
    subtitle: "Behavioural adaptations in social animals · evidence of evolution · theories of evolution",
    note: "Topic G of Section A: behavioural adaptations (social insects, communication, hibernation, aestivation) and evolution — its evidence and the theories of Lamarck and Darwin.",
    objectives: [
      "Identify the castes of social insects (termites, bees) and explain the division of labour and roles of the castes",
      "Give examples of communication among animals (contact notes, warning cries), basking, territorial behaviour, hibernation and aestivation",
      "State the evolutionary trends in plants and animals (simple to complex; aquatic to terrestrial) and the role of mutation",
      "Give the evidence of evolution: paleontology, comparative biochemistry, geographical distribution, comparative anatomy and physiology, adaptive radiation, comparative embryology, systematics",
      "Outline the contributions of Lamarck and Darwin to the theory of evolution"
    ],
    terms: [
      { t: "Behavioural adaptation", d: "A behaviour that increases an organism's chances of survival and reproduction.", x: "Hibernation in cold climates; aestivation in hot, dry seasons" },
      { t: "Social insect castes", d: "The division of labour among workers, soldiers and reproductives (queens/kings) in termites and bees.", x: "The queen bee lays eggs; workers forage and build" },
      { t: "Hibernation", d: "A state of reduced activity and metabolism during the cold season.", x: "Snakes and some mammals" },
      { t: "Aestivation", d: "A state of reduced activity during the hot, dry season.", x: "Some snails and lungfish" },
      { t: "Fossil", d: "The preserved remains or traces of ancient organisms — the basis of paleontology.", x: "The fossil record shows gradual change" },
      { t: "Adaptive radiation", d: "The diversification of a single ancestor into many forms adapted to different niches.", x: "The Galapagos finches" },
      { t: "Natural selection (Darwin)", d: "The survival and reproduction of the individuals best suited to the environment; the basis of Darwin's theory.", x: "Peppered moth industrial melanism" },
      { t: "Mutation", d: "A sudden, heritable change in a gene or chromosome; a source of new variation on which selection acts.", x: "A new allele for a trait" }
    ],
    tf: [
      { s: "The contributions of Lamarck and Darwin to the theory of evolution should be mentioned.", a: "True", why: "The contributions of Lamarck and Darwin to the development of the theory of evolution should be mentioned." },
      { s: "Aestivation is a response to the cold season.", a: "False", why: "Aestivation is the summer (hot, dry season) equivalent of hibernation." },
      { s: "The role of mutation in evolution should be mentioned.", a: "True", why: "The role of mutation in evolution should be mentioned." }
    ],
    mcq: [
      { q: "Hibernation is an adaptation to:", o: ["the hot, dry season", "the cold season", "the rainy season", "daylight"], a: 1, why: "Hibernation — reduced activity through winter; aestivation is the dry-season equivalent." },
      { q: "The study of fossils is called:", o: ["paleontology", "systematics", "embryology", "biochemistry"], a: 0, why: "Paleontology — fossil records — is one of the evidence of evolution." },
      { q: "Which scientist proposed that evolution occurs by the inheritance of acquired characters?", o: ["Darwin", "Lamarck", "Mendel", "Watson"], a: 1, why: "Lamarck — use and disuse and inheritance of acquired characters." },
      { q: "Darwin's theory of evolution is based mainly on:", o: ["inheritance of acquired characters", "natural selection", "spontaneous generation", "mutation alone"], a: 1, why: "Survival of the fittest — natural selection." },
      { q: "The diversification of the Galapagos finches into different beak forms is an example of:", o: ["adaptive radiation", "hibernation", "parthenogenesis", "convergent evolution of one species"], a: 0, why: "One ancestor radiating into niche-adapted forms — adaptive radiation." },
      { q: "Which of the following is evidence for evolution?", o: ["fossil records", "comparative embryology", "geographical distribution", "all of them"], a: 3, why: "Paleontology, comparative biochemistry, geographical distribution, comparative anatomy and physiology, adaptive radiation, comparative embryology and systematics are all cited." },
      { q: "In a colony of bees, the individual that lays the eggs is the:", o: ["worker", "drone", "queen", "soldier"], a: 2, why: "The queen is the reproductive caste; workers are sterile females." },
      { q: "The evolutionary trend from simple to complex structures is an example of:", o: ["an evolutionary trend in plants and animals", "a behaviour pattern", "a mutation only", "a fossil record"], a: 0, why: "Evolutionary trends include simple to complex structural adaptations and aquatic to terrestrial organisms." }
    ],
    essay: [
      { q: "Describe the social organization of a colony of bees (or termites), identifying the castes and their roles, and explain how division of labour benefits the colony.", marks: 10, outline: [
        "Castes: queen (reproduction), drones (male reproductives), workers (food gathering, nest building, brood care, defence)",
        "Division of labour: each caste performs specific tasks — efficiency of the colony",
        "Communication: contact notes, warning cries (also basking by lizard, territorial behaviour in birds and lizards)",
        "Group behaviour: the effect of grouping on the behaviour of an organism; behaviour under unfavourable conditions — hibernation and aestivation"
      ] },
      { q: "State five pieces of evidence for evolution and outline the main differences between the theories of Lamarck and Darwin.", marks: 12, outline: [
        "Evidence: (1) paleontology/fossil records; (2) comparative biochemistry; (3) geographical distribution; (4) comparative anatomy and physiology; (5) adaptive radiation; (6) comparative embryology; (7) systematics",
        "Lamarck: evolution by inheritance of acquired characters (use and disuse); e.g. the giraffe's neck stretched and passed on",
        "Darwin: natural selection — variation exists, more offspring are produced than can survive, the fittest survive and reproduce (survival of the fittest); gradual change over long periods",
        "Both agree that species change over time from common ancestors; Darwin's mechanism (selection acting on variation) is supported by the evidence; mutation provides the variation"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Topic G (Adaptation for survival and Evolution):" },
      { k: "bul", items: [
        "1. Behavioural adaptations in social animals — termites; bees",
        "2. Evolution — (a) evidence of evolution; (b) theories of evolution"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "Identify the various castes of social insects; division of labour and the roles of the different castes stressed. Examples of communication: contact notes and warning cries; basking by lizard; territorial behaviour in birds and lizards; behaviour under unfavourable conditions — hibernation and aestivation; the behaviour of an organism as a member of a group and the effect of grouping.",
        "Evolutionary trends in plants and animals: simple to complex structural adaptations and aquatic to terrestrial organisms; the role of mutation.",
        "Evidence: paleontology (fossil records), comparative biochemistry, geographical distribution, comparative anatomy and physiology, adaptive radiation, comparative embryology and systematics.",
        "The contributions of Lamarck and Darwin to the development of the theory of evolution should be mentioned."
      ] }
    ]
  },
  /* =============== C1 · SECTION C (LIBERIA) — CELL BIOLOGY & LIFE PROCESSES =============== */
  {
    grade: 12, sem: "Two", icon: "🧫", period: "C1",
    title: "National Section (C) — Cell Biology & Life Processes",
    subtitle: "Cell theory · movement of substances · DNA, RNA and protein synthesis · the cell cycle · Amoeba, Paramecium, Euglena · Spirogyra and Rhizopus · mosses and ferns · insect orders",
    note: "SECTION C is for candidates in Nigeria, Sierra Leone, The Gambia and LIBERIA — the national section Paper 2 (short-structured) and Paper 3 are drawn from. This unit covers its topics A and B.",
    objectives: [
      "Outline the cell theory and the work of Hooke, Dujardin, Schleiden and Schwann",
      "Explain irritability as a basic characteristic of protoplasm, taxis and nastism, and the environmental factors that evoke responses",
      "Explain endocytosis (phagocytosis and pinocytosis) and exocytosis",
      "Describe the structure of DNA and gene replication, RNA transcription, and protein synthesis (roles of m-RNA, t-RNA, r-RNA and ribosomes)",
      "Describe the cell cycle: interphase (G₁, S, G₂) and mitosis (M phase: karyokinesis and cytokinesis); observe meiosis in root-tip squashes",
      "Describe the external structure and life processes of Amoeba, Paramecium and Euglena, and the structure, nutrition and reproduction of Spirogyra and Rhizopus, including conjugation",
      "Describe the structure, external features, nutrition and reproduction of mosses (Brachymenium, Funaria) and ferns (Nephrolepis, Platycerium, Phymatodes)",
      "State the characteristics of the orders of Class Insecta (Odonata, Orthoptera, Coleoptera, Hymenoptera, Hemiptera, Diptera, Isoptera, Lepidoptera, Dictyoptera, Neuroptera)"
    ],
    terms: [
      { t: "Cell theory", d: "All living things are made of cells; the cell is the basic unit of life; cells arise from pre-existing cells — the work of Hooke, Dujardin, Schleiden and Schwann.", x: "Hooke observed 'cells' in cork" },
      { t: "Irritability", d: "The ability of protoplasm to respond to stimuli; taxis (movement of a whole organism) and nastism (growth response of a plant part).", x: "Phototaxis in Euglena; phototropism in a shoot" },
      { t: "Endocytosis", d: "Cellular uptake of material by invagination of the membrane — phagocytosis (solids) and pinocytosis (liquids).", x: "Amoeba feeding" },
      { t: "DNA", d: "Deoxyribonucleic acid — the double-helical genetic material (Watson and Crick model); replicates semiconservatively.", x: "DNA differs from RNA in deoxyribose sugar and thymine" },
      { t: "Protein synthesis", d: "Transcription of DNA to m-RNA, translation at ribosomes with t-RNA carrying amino acids; r-RNA forms the ribosome.", x: "Insulin synthesized in human pancreatic cells" },
      { t: "Interphase", d: "The long stage of the cell cycle between divisions: G₁ (growth), S (DNA replication), G₂ (preparation).", x: "Most of the cell cycle is interphase" },
      { t: "Karyokinesis", d: "Division of the nucleus in mitosis/meiosis; cytokinesis is the division of the cytoplasm.", x: "The M phase of the cell cycle" },
      { t: "Conjugation", d: "A temporary union of two organisms for exchange of genetic material, e.g. Spirogyra and Paramecium.", x: "Stages of conjugation in Spirogyra" }
    ],
    tf: [
      { s: "The work of Hooke, Dujardin, Schleiden and Schwann should be outlined in the cell theory.", a: "True", why: "The cell theory including the work of Hooke, Dujardin, Schleiden and Schwann should be outlined." },
      { s: "t-RNA carries amino acids to the ribosome during protein synthesis.", a: "True", why: "The roles of m-RNA, t-RNA and r-RNA and ribosomes in protein synthesis must be emphasized." },
      { s: "Meiosis is observed by preparing a squash of an onion root tip.", a: "False", why: "The onion root-tip squash shows MITOSIS; meiosis is observed in permanent slides of plant and animal cells." }
    ],
    mcq: [
      { q: "The cell theory states that:", o: ["all cells contain a nucleus", "cells are the basic units of life and arise from pre-existing cells", "only animals are made of cells", "cells can arise spontaneously"], a: 1, why: "The three classical tenets of the cell theory (Hooke, Dujardin, Schleiden, Schwann)." },
      { q: "The uptake of solid particles by an Amoeba is called:", o: ["pinocytosis", "phagocytosis", "exocytosis", "osmosis"], a: 1, why: "Phagocytosis — 'cell eating' — takes in solids; pinocytosis takes in liquids." },
      { q: "The sugar found in DNA is:", o: ["ribose", "deoxyribose", "glucose", "fructose"], a: 1, why: "Deoxyribonucleic acid contains deoxyribose; RNA contains ribose." },
      { q: "DNA replication occurs during which phase of the cell cycle?", o: ["G₁", "S phase", "G₂", "M phase"], a: 1, why: "The S (synthesis) phase is when DNA is replicated." },
      { q: "The molecule that carries amino acids to the ribosome is:", o: ["m-RNA", "t-RNA", "r-RNA", "DNA"], a: 1, why: "t-RNA transfers amino acids; m-RNA carries the code; r-RNA builds the ribosome." },
      { q: "Conjugation as a form of reproduction is studied in:", o: ["Spirogyra and Paramecium", "yeast and Hydra", "mosses and ferns", "bacteria only"], a: 0, why: "Prepared slides of conjugation in Paramecium and Spirogyra should be studied." },
      { q: "A fern differs from a moss in that a fern:", o: ["has no vascular tissue", "has true vascular tissue (xylem and phloem)", "reproduces only by spores on the same plant", "lacks a protonema stage entirely"], a: 1, why: "Ferns (Filicinophyta) are vascular; mosses (Bryophyta) are non-vascular." },
      { q: "The order to which butterflies and moths belong is:", o: ["Diptera", "Lepidoptera", "Coleoptera", "Odonata"], a: 1, why: "Lepidoptera — butterflies and moths (scaly wings)." }
    ],
    essay: [
      { q: "Describe the structure of DNA and explain the processes of DNA replication and RNA transcription.", marks: 10, outline: [
        "DNA: double helix (Watson and Crick); two antiparallel strands of nucleotides (sugar-deoxyribose, phosphate, base); bases paired A–T, G–C by hydrogen bonds",
        "Replication: the strands separate; each serves as a template for a complementary strand (semi-conservative); enzymes unwind and join",
        "Transcription: a gene region is copied into m-RNA (A pairs with U); the m-RNA leaves the nucleus to the ribosome",
        "Gene = a segment of DNA controlling a characteristic"
      ] },
      { q: "Outline the phases of the cell cycle and describe the stages of mitosis. Explain how mitosis and meiosis differ.", marks: 12, outline: [
        "Cell cycle: interphase (G₁ growth → S DNA synthesis → G₂ preparation) then the M phase (mitosis + cytokinesis)",
        "Mitosis stages: prophase (chromosomes condense, spindle forms) → metaphase (chromosomes line up at the equator) → anaphase (centromeres split, chromatids separate) → telophase (nuclei reform, cytokinesis)",
        "Mitosis: one division, diploid → two identical diploid cells (growth, repair)",
        "Meiosis: two divisions, one diploid → four haploid gametes with recombination (reduction division)",
        "Observed in onion root-tip squashes (mitosis) and permanent slides (meiosis)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — SECTION C (Nigeria, Sierra Leone, The Gambia, LIBERIA), Topics A–B:" },
      { k: "bul", items: [
        "A. Concept of Living — cell theory (Hooke, Dujardin, Schleiden, Schwann); irritability as a basic characteristic of protoplasm; types of responses (taxis and nastism); environmental factors (temperature, pH, etc.)",
        "B. Cell Biology — movement of substances into and out of cells: endocytosis (phagocytosis and pinocytosis) and exocytosis; nucleic acids (DNA and RNA, basic chemical differences); DNA structure and replication, RNA transcription; protein synthesis; cell cycle (interphase G₁ + S + G₂; mitosis M phase — karyokinesis and cytokinesis)",
        "C. Life Processes in Living Things — Amoeba, Paramecium and Euglena; Spirogyra and Rhizopus; mosses and ferns",
        "D. Diversity of Living Things — characteristics of orders of Class Insecta (Odonata, Orthoptera, Coleoptera, Hymenoptera, Hemiptera, Diptera, Isoptera, Lepidoptera, Dictyoptera, Neuroptera); identification of organisms using biological keys"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "Explain the processes of endocytosis and exocytosis; explanation of the term nucleic acid and the basic chemical differences between DNA and RNA.",
        "The double helix model of DNA by Watson and Crick; DNA replication and RNA transcription.",
        "Protein synthesis: the roles of m-RNA, t-RNA and r-RNA and ribosomes emphasized; importance; examples of proteins synthesized by humans.",
        "Cell cycle: phases [interphase: G₁ + S + G₂; mitosis: M phase (karyokinesis and cytokinesis)]; mitosis and meiosis and their importance; preparation of a squash of onion root tip and observing stages of meiosis under the microscope (permanent slides may be used).",
        "External structure and life processes of Amoeba, Paramecium and Euglena; mounting of Paramecium and Euglena under the compound light microscope.",
        "Structure of Spirogyra and Rhizopus; nutrition and reproduction; identification of the stages of conjugation of Spirogyra.",
        "Mosses (Brachymenium and Funaria) and ferns (Nephrolepis, Platycerium, Phymatodes): external features; nutrition and reproduction in mosses; reproduction in ferns.",
        "Orders of Class Insecta as listed; identification using numbered and dichotomous keys; construction of identification keys."
      ] }
    ]
  },
  /* =============== C2 · SECTION C — MAMMALIAN ANATOMY & PHYSIOLOGY =============== */
  {
    grade: 12, sem: "Two", icon: "🐀", period: "C2",
    title: "National Section (C) — Mammalian Anatomy & Physiology",
    subtitle: "Dissection of a small mammal · the heart · cellular respiration and RQ · muscles and skeletal tissues · reproduction and antenatal care",
    note: "Section C, Topic F: the practical anatomy and physiology of mammals — internal organs, the heartbeat, respiratory quotient, muscle contraction, and human reproduction with antenatal care.",
    objectives: [
      "Describe the arrangement and functions of the internal organs of mammals; cut open a chloroformed mammal (guinea pig, rat, mouse, rabbit) and draw the internal organs",
      "Explain the mechanism of the heartbeat: excitation and contractions (SAN, AVN, Purkinje tissue)",
      "Determine the respiratory quotient (RQ) of different substrates and explain its significance",
      "Describe the types of muscle (smooth, striated, cardiac) and the sliding filament model of contraction",
      "Describe the structure of skeletal tissues (bones and cartilage)",
      "Describe the physical changes of puberty, the role of hormones in secondary sexual characteristics, and the meaning and requirements of antenatal care"
    ],
    terms: [
      { t: "SAN (sino-atrial node)", d: "The natural pacemaker of the heart — it initiates each heartbeat.", x: "Located in the right auricle" },
      { t: "AVN (atrio-ventricular node)", d: "The relay that delays the impulse before it passes to the ventricles, via the bundle of His and Purkinje tissue.", x: "Ensures atrial contraction precedes ventricular contraction" },
      { t: "Respiratory quotient (RQ)", d: "The ratio of CO₂ produced to O₂ consumed during respiration; varies with the substrate (carbohydrate ≈ 1, fat < 1).", x: "RQ = volume of CO₂ given out ÷ volume of O₂ used" },
      { t: "Sliding filament model", d: "Muscle contraction: actin (thin) filaments slide over myosin (thick) filaments, shortening the sarcomere.", x: "Explains shortening without filament shortening" },
      { t: "Striated muscle", d: "Voluntary, banded muscle attached to bones; cardiac muscle is striated but involuntary.", x: "Biceps; the heart wall" },
      { t: "Puberty", d: "The period of sexual maturation, marked by physical changes in males and females under hormonal control.", x: "Growth spurt; development of secondary sexual characteristics" },
      { t: "Antenatal care", d: "Medical care of a mother during pregnancy — antenatal visits, nutrition, exercise, and the use of natural products for mother and child.", x: "Regular clinic visits in each trimester" }
    ],
    tf: [
      { s: "The mechanism of the heartbeat involves the SAN, AVN and Purkinje tissue.", a: "True", why: "Mechanism of the heartbeat: excitation and contractions (SAN, AVN, Purkinje tissue)." },
      { s: "Cardiac muscle is voluntary.", a: "False", why: "Cardiac muscle is striated but involuntary; smooth and cardiac muscles act without conscious control." },
      { s: "The physical changes of puberty and the role of hormones in secondary sexual characteristics should be described.", a: "True", why: "Physical changes that occur in males and females during puberty; the role of hormones in the development of secondary sexual characteristics." }
    ],
    mcq: [
      { q: "The natural pacemaker of the heart is the:", o: ["AV node", "sino-atrial node (SAN)", "Purkinje tissue", "aortic valve"], a: 1, why: "The SAN initiates the heartbeat." },
      { q: "The respiratory quotient for the complete oxidation of a carbohydrate is about:", o: ["0.7", "1.0", "1.3", "0.5"], a: 1, why: "Carbohydrate: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O → RQ = 6/6 = 1." },
      { q: "The model that explains muscle contraction is the:", o: ["fluid mosaic model", "sliding filament model", "cohesion-tension model", "pressure-flow model"], a: 1, why: "Actin filaments slide over myosin filaments." },
      { q: "Which muscle is involuntary and striated?", o: ["skeletal muscle", "smooth muscle", "cardiac muscle", "muscle of the eyelid"], a: 2, why: "Cardiac muscle — striated, involuntary, found only in the heart." },
      { q: "A chloroformed rat is used in the syllabus to study:", o: ["the heart only", "the arrangement and functions of the internal organs", "the brain only", "blood groups"], a: 1, why: "Candidates cut open a chloroformed mammal and draw the internal organs." },
      { q: "Antenatal care includes all of the following EXCEPT:", o: ["regular antenatal visits", "proper nutrition and diet", "strenuous heavy lifting", "moderate exercise during pregnancy"], a: 2, why: "Antenatal care: visits, nutrition, moderate exercise, use of natural products — not heavy lifting." }
    ],
    essay: [
      { q: "Describe the mechanism of the mammalian heartbeat, naming the nodes and tissues that conduct the impulse, and explain why the atria contract before the ventricles.", marks: 10, outline: [
        "The SAN generates the impulse; it spreads over the atrial walls → atrial systole",
        "The impulse reaches the AVN, which delays it slightly, then passes down the bundle of His and the Purkinje fibres to the ventricles → ventricular systole",
        "The delay allows the atria to finish emptying into the ventricles before they contract; the valves (tricuspid/bicuspid and semilunar) prevent backflow",
        "The cycle: systole (contraction) and diastole (relaxation); the heartbeat is myogenic (self-excited)"
      ] },
      { q: "Explain the sliding filament model of muscle contraction and distinguish between smooth, striated and cardiac muscle.", marks: 10, outline: [
        "Sarcomere: thick myosin filaments flanked by thin actin filaments, with Z-lines; the A-band (myosin) and I-band (actin)",
        "Contraction: myosin heads bind actin and pull (power stroke); the actin filaments slide inward, shortening the sarcomere (I-band narrows, H-zone disappears); ATP supplies the energy",
        "Smooth — involuntary, non-striated, in walls of organs (intestine, blood vessels); striated — voluntary, banded, attached to bones; cardiac — striated, involuntary, in the heart wall, rhythmic and fatigue-resistant"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — SECTION C, Topic F (Mammalian Anatomy and Physiology):" },
      { k: "bul", items: [
        "1. Dissection of a small mammal — the arrangement of the internal organs; functions of the internal organs; cut open a chloroformed mammal (guinea pig, rat, mouse, rabbit) and draw the internal organs",
        "2. Transport: structure of the mammalian heart — mechanism of the heartbeat: excitation and contractions (SAN, AVN, Purkinje tissue)",
        "3. Cellular respiration — determination of the respiratory quotient (RQ) of different substrates; significance of RQ",
        "4. Movement — (a) muscles: types (smooth, striated, cardiac); how muscles bring about movement; the sliding filament model of muscle contraction; (b) skeletal tissues: structure of bones and cartilage",
        "5. Reproduction — (a) secondary sexual characteristics: physical changes in puberty; the role of hormones; (b) prenatal/antenatal care: meaning, antenatal visit requirements, nutrition and diet, exercise during pregnancy, benefits of natural products for mother and child"
      ] }
    ]
  },
  /* =============== C3 · SECTION C — PLANT STRUCTURE & HUMAN ENVIRONMENT =============== */
  {
    grade: 12, sem: "Two", icon: "🌱", period: "C3",
    title: "National Section (C) — Plant Physiology & Human Environment",
    subtitle: "Monocots and dicots · guttation · floral formulae · integrated water resources management · health, hygiene and drug abuse · first aid",
    note: "Section C, Topics G and H: plant structure and physiology (monocot/dicot morphology, guttation, floral formulae) and the human environment — water, health, drugs and first aid.",
    objectives: [
      "Describe the morphology of monocotyledonous and dicotyledonous plants: external features, functions of roots, stems and leaves, differences, and modifications",
      "Explain the biological principles underlying guttation",
      "Determine and write the floral formulae of Flamboyant (Delonix), Pride of Barbados (Caesalpinia) and Rattle box (Crotalaria); floral diagrams are NOT required",
      "Describe integrated water resources management (IWRM) and how it reduces undesirable environmental change",
      "Define health, hygiene and sanitation, and explain the means of achieving personal cleanliness",
      "Explain the term drug abuse and its consequences, the importance of town planning to community health, and the methods of administering first aid"
    ],
    terms: [
      { t: "Monocotyledon", d: "A flowering plant with one seed leaf; parallel-veined leaves, scattered vascular bundles, fibrous roots.", x: "Maize, grasses, oil palm" },
      { t: "Dicotyledon", d: "A flowering plant with two seed leaves; net-veined leaves, ring of vascular bundles, tap root.", x: "Maize is NOT — use bean, cotton, mango" },
      { t: "Guttation", d: "The loss of liquid water from the tips/edges of leaves through hydathodes, usually at night when root pressure is high and transpiration is low.", x: "Water droplets on grass at dawn" },
      { t: "Floral formula", d: "A symbolic representation of the floral parts using letters (K calyx, C corolla, A androecium, G gynoecium), numbers and symbols for fusion.", x: "The floral formula of Caesalpinia" },
      { t: "IWRM", d: "Integrated Water Resources Management — the coordinated development and management of water, land and related resources.", x: "Reduces flooding and water scarcity" },
      { t: "Sanitation", d: "The conditions that protect public health — safe water, refuse and sewage disposal, clean environment.", x: "Covered water tanks; refuse pits" },
      { t: "Drug abuse", d: "The use of drugs in a manner not intended, to the harm of the user and society.", x: "Alcohol, cannabis, cocaine, inhalants" },
      { t: "First aid", d: "The immediate, temporary care given to an injured or suddenly ill person until professional help arrives.", x: "Controlling bleeding; treating burns" }
    ],
    tf: [
      { s: "Floral diagrams are required in the WASSCE syllabus.", a: "False", why: "Determination and writing of the floral formulae... floral diagrams are NOT required." },
      { s: "Guttation is the loss of liquid water from leaf margins, mainly at night.", a: "True", why: "Biological principles underlying guttation — root pressure drives liquid out through hydathodes when transpiration is low." },
      { s: "The use of Biological Oxygen Demand (BOD) in measuring organic pollution in water is examined.", a: "True", why: "The use of BOD in the measurement of the level of organic pollution in water." }
    ],
    mcq: [
      { q: "A leaf with parallel venation and a plant with a fibrous root system is most likely a:", o: ["dicotyledon", "monocotyledon", "gymnosperm", "fern"], a: 1, why: "Parallel veins + fibrous roots = monocot." },
      { q: "Guttation occurs mainly:", o: ["in bright daylight", "at night or in the early morning", "only in deserts", "during drought"], a: 1, why: "When transpiration is low and root pressure is high — typically overnight." },
      { q: "In a floral formula, the letter 'K' stands for:", o: ["corolla", "calyx (sepals)", "androecium", "gynoecium"], a: 1, why: "K (from German Kelch) = calyx; C = corolla; A = androecium; G = gynoecium." },
      { q: "Which of the following is a dicotyledonous plant?", o: ["maize", "grass", "bean", "oil palm"], a: 2, why: "Bean — two seed leaves, net-veined leaves, tap root." },
      { q: "Integrated Water Resources Management (IWRM) aims to:", o: ["pump all water into the ocean", "coordinate the development and management of water, land and related resources", "ban all farming", "build more dams only"], a: 1, why: "IWRM reduces undesirable change in the environment by managing water as an integrated system." },
      { q: "The first step in giving first aid to a person with a severe external bleed is to:", o: ["give water to drink", "apply direct pressure to the wound", "move the person to the hospital at once", "pour alcohol on the wound"], a: 1, why: "Direct pressure controls bleeding; keep the person still and seek help." },
      { q: "Drug abuse in the community leads to all of the following EXCEPT:", o: ["deteriorating health", "crime and social problems", "improved productivity", "family breakdown"], a: 2, why: "Drug abuse degrades health, social order and productivity — it does not improve it." }
    ],
    essay: [
      { q: "Compare a monocotyledonous and a dicotyledonous plant, stating five points of difference, and explain the biological principle underlying guttation.", marks: 10, outline: [
        "Differences: (1) number of cotyledons — 1 vs 2; (2) leaf venation — parallel vs netted; (3) roots — fibrous vs tap; (4) vascular bundles — scattered vs in a ring; (5) flowers — parts in 3s vs parts in 4s or 5s",
        "Guttation: at night, root pressure builds up in the xylem; with stomata closed (low transpiration), water is forced out through the hydathodes at leaf margins as droplets",
        "It shows the water column is under pressure; common in humid nights and potted plants"
      ] },
      { q: "Define health, hygiene and sanitation. Explain the meaning of drug abuse, its consequences, and describe the importance of town planning to community health.", marks: 10, outline: [
        "Health — a state of complete physical, mental and social well-being; hygiene — personal and environmental practices that prevent disease; sanitation — safe water, refuse and sewage disposal, clean surroundings",
        "Personal cleanliness: bathing, clean clothes, nail care, safe food handling",
        "Drug abuse: use of drugs (alcohol, cannabis, cocaine, inhalants) beyond intended use; consequences — physical and mental deterioration, crime, family breakdown, loss of productivity, spread of diseases",
        "Town planning: proper zoning (residential vs industrial), drainage, water supply, sanitation facilities, green spaces — reduces disease and pollution, protects community health"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — SECTION C, Topics G–H:" },
      { k: "bul", items: [
        "G. Plant Structure and Physiology — (1) morphology of monocotyledonous and dicotyledonous plants: external features; functions of roots, stems and leaves; differences; modifications of roots, stems and leaves; (2) transport: guttation; (3) reproduction: floral formula",
        "H. Humans and their Environment — (1) integrated water resources management; (2) health and hygiene: (a) drug abuse; (b) community health; (c) first aid; (3) evolution: recombinant DNA technology"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "Functions of roots, stems and leaves of monocots and dicots; modifications of roots, stems and leaves.",
        "Biological principles underlying guttation.",
        "Floral formulae of Flamboyant (Delonix), Pride of Barbados (Caesalpinia) and Rattle box (Crotalaria); floral diagrams are not required.",
        "IWRM: description and how it reduces undesirable change in the environment; experiments to test water samples for bacterial contamination; BOD in measuring organic pollution; biological processes of purifying sewage; cesspit and activated sludge process.",
        "Health/hygiene/sanitation defined; means of achieving personal cleanliness; drug abuse defined with consequences; importance of town planning and its effects on community health; first aid defined with the different methods of administering it.",
        "Recombinant DNA technology explained with its applications."
      ] }
    ]
  },
  /* =============== C4 · SECTION C — EVOLUTION, INDUSTRY & NATION TOPICS =============== */
  {
    grade: 12, sem: "Two", icon: "🏭", period: "C4",
    title: "National Section (C) — Evolution, Industry & Applications",
    subtitle: "Recombinant DNA technology · biology and the water, fishing, food and agriculture industries · biotechnology · biological fuel · kidney/liver diseases · sense organs (nose, tongue, skin) · courtship and germination",
    note: "Section C, Topics I–J and the remaining items A.3–A.5: biotechnology and the industries, biological fuel generation, and the applied topics (diseases of excretory organs, the other sense organs, courtship behaviour, germination, the nitrogen cycle, alimentary systems and feeding habits, ecological components and nutrient cycling, habitats, variation applications, competition and adaptive colouration).",
    objectives: [
      "Explain recombinant DNA technology and its applications",
      "Describe the contamination of water, identification of polluted water, and waste-water treatment (BOD, cesspit, activated sludge)",
      "Explain fish stock management, fish farming, food additives, and the biological principles behind successful agriculture",
      "Explain the concept of biotechnology and the use of microorganisms in food, pharmaceutical, tanning and mining industries, and biological fuel generation (biogas, ethanol, hydrogen)",
      "Describe the diseases of the kidney (nephritis, kidney stone, diuresis) and liver (infective hepatitis, cancer, gall stones) with effects and remedies",
      "Explain the perception of smell, taste (tongue areas, taste buds) and the function of the skin as a sensory organ",
      "Describe courtship behaviour in animals, metamorphosis and the life history of the housefly, and the adaptive features of the developing animal (yolk, placenta) and germination of seeds (hypogeal and epigeal)",
      "Explain the nitrogen cycle, the alimentary systems of different animals, feeding habits and modifications, ecological components (lithosphere, hydrosphere, atmosphere, niche), population studies by sampling, energy transformation, nutrient cycling (carbon and water), tolerance and habitats, and the relevance of biology to agriculture"
    ],
    terms: [
      { t: "Recombinant DNA technology", d: "The joining of DNA from different sources to make new combinations of genes, used in medicine (insulin, vaccines) and agriculture (GM crops).", x: "Human insulin produced by engineered bacteria" },
      { t: "Biological Oxygen Demand (BOD)", d: "The amount of oxygen required by microorganisms to decompose organic matter in water — a measure of organic pollution.", x: "High BOD → polluted water" },
      { t: "Activated sludge process", d: "A biological sewage-treatment method in which microorganisms break down organic matter in aerated tanks.", x: "Used in modern waste-water treatment" },
      { t: "Biotechnology", d: "The use of living organisms (especially microorganisms) to make products — cheese, yoghurt, kenkey, bread, butter, alcoholic drinks, organic acids, pharmaceuticals, tanning, mining.", x: "Yeast in brewing and baking" },
      { t: "Biogas", d: "Methane produced by anaerobic decomposition of organic matter (e.g. cow-dung digester).", x: "A renewable fuel in rural areas" },
      { t: "Nephritis", d: "Inflammation of the kidney; kidney stones are solid deposits in the kidney/urinary tract; diuresis is the increased production of urine.", x: "Remedies include treatment of the cause, diet and, for stones, medical removal" },
      { t: "Courtship behaviour", d: "The pre-mating behaviours — pairing, display (peacocks), territoriality, seasonal migration associated with breeding.", x: "The peacock's display" },
      { t: "Hypogeal germination", d: "Germination in which the cotyledons remain below the soil (e.g. bean, groundnut).", x: "Epigeal: maize, cotton (cotyledons raised above soil)" },
      { t: "Niche", d: "The functional position of a species in its ecosystem — its role and way of life.", x: "The niche of a decomposer in a woodland" },
      { t: "Tolerance", d: "The range of an environmental factor (e.g. temperature, salinity) within which an organism can survive — minimum and maximum limits.", x: "Tilapia's tolerance of salt concentrations" }
    ],
    tf: [
      { s: "Explanation of why fish is an efficient converter of plankton into flesh is required.", a: "True", why: "Explanation of why fish is an efficient converter of plankton into flesh." },
      { s: "The cesspit and activated sludge process of purifying sewage should be mentioned.", a: "True", why: "Description of biological processes of purifying sewage — cesspit, activated sludge process." },
      { s: "The stages in hypogeal and epigeal germination should be observed and drawn.", a: "True", why: "The stages in hypogeal and epigeal germination should be observed and drawn." }
    ],
    mcq: [
      { q: "Which of the following is a product of biotechnology using microorganisms?", o: ["cheese, yoghurt and kenkey", "steel", "plastic", "glass"], a: 0, why: "Microorganisms manufacture cheese, yoghurt, kenkey, bread, butter, alcoholic drinks and organic acids." },
      { q: "Biogas is produced by:", o: ["burning wood", "anaerobic decomposition of organic matter", "distillation of petroleum", "electrolysis of water"], a: 1, why: "Methane from anaerobic digestion (e.g. cow-dung digesters)." },
      { q: "A high BOD in a water sample indicates:", o: ["very clean water", "a high level of organic pollution", "high oxygen content", "low temperature"], a: 1, why: "BOD measures the oxygen needed to decompose organic pollution — high BOD = polluted." },
      { q: "Infection of the liver with fever and jaundice is most likely:", o: ["nephritis", "infective hepatitis", "gall stone", "diuresis"], a: 1, why: "Infective hepatitis — a liver disease with effects and remedies studied in the syllabus." },
      { q: "The part of the tongue most sensitive to salty taste is the:", o: ["tip", "sides", "rear", "tip and sides"], a: 0, why: "Experiments determine the areas of the tongue for sweet (tip), salty (sides/tip), sour (sides), bitter (rear); taste buds involved." },
      { q: "Germination in which the cotyledons remain below the soil is:", o: ["epigeal", "hypogeal", "viviparous", "asexual"], a: 1, why: "Hypogeal (bean, groundnut); epigeal raises the cotyledons (maize, cotton)." },
      { q: "The yolk in the egg of a fish, toad or bird provides:", o: ["protection from predators", "nourishment for the developing embryo", "oxygen only", "insulation"], a: 1, why: "Adaptive feature: yolk for nourishment; the placenta in animals serves the same role." },
      { q: "Which cycle involves bacteria converting nitrates back to atmospheric nitrogen?", o: ["carbon cycle", "water cycle", "nitrogen cycle", "oxygen cycle"], a: 2, why: "Denitrifying bacteria in the nitrogen cycle; root nodules in legumes fix nitrogen." }
    ],
    essay: [
      { q: "Explain the concept of biotechnology and describe the use of microorganisms in (a) food manufacture, (b) the production of alcoholic drinks and organic acids, and (c) the pharmaceutical, tanning and mining industries.", marks: 10, outline: [
        "Biotechnology: the use of living organisms (mainly microorganisms) in industrial and scientific processes",
        "(a) Food: cheese, yoghurt, kenkey, bread (yeast), butter, vinegar",
        "(b) Alcoholic drinks (fermentation by yeast) and organic acids (e.g. lactic, citric)",
        "(c) Pharmaceutical (antibiotics such as penicillin), tanning (enzymes), mining (bioleaching of metals by bacteria)"
      ] },
      { q: "(a) Describe the nitrogen cycle, naming the bacteria involved at each stage. (b) State how the carbon cycle maintains the carbon dioxide–oxygen balance in nature.", marks: 12, outline: [
        "(a) Nitrogen cycle: nitrogen fixation (free-living and root-nodule bacteria, e.g. Rhizobium in legumes) → nitrification (ammonia → nitrites → nitrates) → assimilation by plants → consumption by animals → ammonification (decomposers return ammonia) → denitrification (denitrifying bacteria return N₂ to the air); observe root nodules in legumes",
        "(b) Carbon cycle: photosynthesis fixes CO₂ into organic matter; respiration and decay (and burning of fuels) release CO₂; the cycle maintains the CO₂–O₂ balance; experiments show absorption of CO₂ and release of O₂ during photosynthesis, and water in expired air from respiration"
      ] },
      { q: "Describe the adaptive features of a developing animal, using the yolk of the bird's egg and the placenta of the mammal, and explain the difference between oviparity and viviparity.", marks: 10, outline: [
        "Yolk: the food reserve in the eggs of fish, toad and bird nourishes the developing embryo until hatching; the albumen protects and supplies water",
        "Placenta: in mammals, the foetus is nourished through the placenta (with the umbilical cord and amnion) — observe in a dissected pregnant rat",
        "Oviparity — eggs laid outside the body (fish, birds, most amphibians); viviparity — live birth, with internal development (mammals)",
        "Germination: experiments showing the importance of oxygen, adequate moisture and suitable temperature; stages of hypogeal and epigeal germination observed and drawn"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — SECTION C, Topics A (items 3–5), B (items 1–4), C (items 1–8), D, E, I and J:" },
      { k: "bul", items: [
        "A.3 Excretory systems — diseases of the kidney (nephritis, kidney stone, diuresis) and liver (infective hepatitis, cancer of the liver, gall stones): effects and remedies; excretory organs of earthworm and insects; A.4 Sense organs — nose (perception of smell, sensory cells, olfactory lobes), tongue (areas of taste, taste buds, association with smell), skin (function as a sensory organ); A.5 Reproduction — courtship behaviour (pairing, display, territoriality, seasonal migration in herrings, eels, birds); metamorphosis and life history of the housefly; adaptive features (yolk, placenta, umbilical cord, amnion); oviparity and viviparity; germination of seeds (essential factors; hypogeal and epigeal stages)",
        "B.1 Nitrogen cycle — names and roles of the bacteria; observe root nodules in legumes; B.2 Modes of nutrition — autotrophic, chemosynthetic, carnivorous plants (examples studied); B.3 Alimentary system — tracts of different animals (earthworm, grasshopper/cockroach dissected; bird and cockroach/grasshopper for modifications); B.4 Feeding habits — carnivorous, herbivorous, omnivorous; modifications (filter feeding, fluid feeding, insect adaptations, saprophytic, parasitic; mosquito larva, housefly, butterfly, cockroach, adult mosquito, maize weevil, rhizopods, tapeworm)",
        "C.1 Ecological components — lithosphere, hydrosphere, atmosphere, niche; C.2 Population studies by sampling — size, dominance, density (count individuals in a plot); C.3 Energy transformation — energy loss, solar radiation, laws of thermodynamics, energy as a limiting factor in primary production, harvest; C.4 Nutrient cycling — carbon cycle (draw, sources, CO₂–O₂ balance; experiments) and water cycle; C.5 Ecological management — tolerance, minimum and maximum range; C.6 Habitats — aquatic (marine, estuarine, fresh water) and terrestrial (marsh, forest, grassland, arid land): characteristics, distribution, adaptive features; balance in nature (dynamic equilibrium, population and density); C.7 Relevance of biology to agriculture — classification of plants by life cycle; effects of agricultural practices (bush burning, tillage, fertilizer, herbicide/pesticide, farming methods); C.8 Microorganisms around us — in air and water, under fingernails, mouth cavity, expired air, decomposing food; groups (bacteria, viruses, some algae, protozoa, fungi); in bodies and food; public health (food hygiene; national and international health organizations)",
        "D. Application of variations — crime detection (fingerprints), blood transfusion, determination of paternity",
        "E. Evolution — adaptation for survival: factors that bring about competition (food, space, water, light, mates); intra- and inter-species competition (maize seedlings experiments; competition and succession on a moistened bread slice); relationship between competition and succession; structural adaptation (obtaining food, protection and defense, securing mates, regulating body temperature, conserving water); adaptive colouration in plants and animals",
        "I. Evolution — recombinant DNA technology: explanation and applications",
        "J. Biology and Industry — (1) water industry: contamination, identification of polluted water, waste-water treatment; (2) fishing industry: fish stock management, fish farming; (3) food industry: food additives (natural and artificial; health implications); (4) agriculture: fertilizer, pesticides, selective breeding, resistance to disease, irrigation; (5) biotechnology: microorganisms in food, alcoholic drinks, organic acids, pharmaceutical, tanning and mining; (6) biological fuel generation: biogas, ethanol from green crops, hydrogen from chloroplasts"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "Diseases studied with effects and remedies; excretory organs of earthworm and insects mentioned.",
        "Perception of smell (sensory cells in the nose, olfactory lobes); experiments on the areas of the tongue for different tastes; association of taste and smell; taste buds; the skin as a sensory organ emphasized.",
        "Courtship: pairing, display (peacocks), territoriality (territorialism in lizards observed), seasonal migration associated with breeding; the content (yolk and albumen) of the bird's egg examined; the foetus's connection to the mother and the adaptive features of the placenta, umbilical cord and amnion in a dissected pregnant rat.",
        "Experiments: importance of oxygen, adequate moisture and suitable temperature in germination; stages of hypogeal and epigeal germination observed and drawn.",
        "Nitrogen cycle: names and roles of the bacteria; observe root nodules; examples of carnivorous plants; comparison of alimentary canals (earthworm, grasshopper/cockroach) and modifications (bird, cockroach/grasshopper); feeding mechanisms illustrated with the named organisms.",
        "Population by sampling: a project counting plant and animal types in a given plot; energy: laws of thermodynamics applied to ecological phenomena; energy as a limiting factor in primary production; harvest as a measure.",
        "Nutrient cycling: draw the carbon cycle and list the sources of carbon; CO₂–O₂ balance; experiments on photosynthesis (absorption of CO₂, release of O₂) and respiration (water in expired air); tolerance experiments — Tilapia in salt solutions, wood lice and temperature; physical factors (temperature, salinity, light, turbidity, current, pH) measured.",
        "Habitats: pattern of distribution including dominant types and seasonal changes, population size; measurement of temperature, relative humidity, light, wind, pH; edaphic factors; the process by which carnivores maintain a constant population; effects of human activities; observe microorganisms by colour, pattern of growth and colony appearance.",
        "Agriculture: classification of plants by life cycle; effects of bush burning, tillage, fertilizer, herbicide/pesticide and different farming methods on ecology.",
        "Variation applications: uniqueness of fingerprints (crime detection); blood groups (transfusion, paternity).",
        "Competition: factors shared (food, space, water, light, mates); intra-species (many maize seedlings in a small area) and inter-species (maize and pepper) observed; competition and succession on a moistened exposed slice of bread.",
        "Structural adaptation: obtaining food, escaping enemies, securing mates, regulating body temperature, conserving water; adaptive colouration in plants and animals.",
        "Recombinant DNA technology explained with applications; water industry: test water samples for bacterial contamination; BOD; cesspit and activated sludge process.",
        "Fishing: why fish is an efficient converter of plankton into flesh; conserving fish stocks; importance, advantages and disadvantages of fish farming.",
        "Food additives: natural and artificial; health implications. Agriculture: biological principles behind fertilizer, pesticides, selective breeding, disease resistance and irrigation.",
        "Biotechnology: cheese, yoghurt, kenkey, bread, butter; alcoholic drinks and organic acids; pharmaceutical, tanning and mining industries.",
        "Biological fuel: the need for new sources of energy; biogas; ethanol from green crops; hydrogen gas from chloroplasts."
      ] }
    ]
  }
  );
  window.WA_bio.units = U;
})();
