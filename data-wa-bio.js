/* WASSCE (WAEC) — BIOLOGY.
   Transcribed from the official WAEC WASSCE syllabus PDF "BIOLOGY.pdf".
   Section A (for all candidates) is transcribed in full. Section C is for
   candidates in Nigeria, Sierra Leone, The Gambia and LIBERIA — it is the
   national section Liberia candidates must cover, so it is included here.
   (Section B is for Ghana-only candidates and is not included.) */
window.WA_bio = {
  id: "wbio",
  name: "BIOLOGY",
  preamble: "An examination syllabus drawn up from the curricula of the member countries of the West African Examinations Council, to be used alongside the appropriate teaching syllabus of the country where the candidates are domiciled. The syllabus is divided into three sections: Section A is for all candidates, Section B for candidates in Ghana only, and Section C for candidates in Nigeria, Sierra Leone, The Gambia and Liberia.",
  aims: [
    "Understanding of the structure and functions of living organisms as well as appreciation of nature",
    "Acquisition of adequate laboratory and field skills to carry out and evaluate experiments and projects in Biology",
    "Acquisition of necessary scientific skills: observing, classifying and interpreting biological data",
    "Acquisition of the basic relevant knowledge in Biology needed for future advanced studies in biological sciences",
    "Acquisition of scientific attitudes for problem solving",
    "Ability to apply biological principles in everyday life in matters that affect personal, social, environmental, community health and economic problems",
    "Awareness of the existence of interrelationships between biology and other scientific disciplines"
  ],
  papers: [
    { n: "Paper 1", d: "Fifty multiple-choice objective questions drawn from Section A of the syllabus (the section common to all countries) — 50 marks, 50 minutes." },
    { n: "Paper 2", d: "Six essay questions, put into three sections: Section A — four questions from the common section (answer two, 20 marks each); Section C — short-structured questions for Nigeria, Sierra Leone, The Gambia and Liberia (compulsory, 30 marks). Total 70 marks, 1 hour 40 minutes." },
    { n: "Paper 3", d: "A practical test (school candidates) or test of practical work (private candidates), 2 hours: Section A — two compulsory questions from the common section (25 marks each); Section C — one short-structured question (30 marks) for Nigeria, Sierra Leone, The Gambia and Liberia. Total 80 marks." }
  ],
  units: [
  /* =============== A1 · INTRODUCING BIOLOGY =============== */
  {
    grade: 12, sem: "One", icon: "🔬", period: "A1",
    title: "Introducing Biology",
    subtitle: "Biology as a science of life · the scientific method · body symmetry, sectioning and orientation · the microscope · biological drawings",
    note: "The opening topic: what biology is, the skills of biological work, and the practical foundations — the light microscope, biological drawing, and the language of symmetry and sectioning.",
    objectives: [
      "Define biology and differentiate between a living thing and an organism",
      "Apply the scientific method: identifying and defining a problem, hypothesizing, experimenting, recording, analyzing and concluding",
      "Write a biological report: aim, hypothesis, materials/set-up, method, results, discussion and conclusion",
      "Use the simple light, compound light and stereoscopic microscopes; prepare temporary slides; draw and magnify specimens",
      "Apply the terms of body symmetry (bilateral and radial), sectioning (longitudinal, transverse, vertical) and orientation (anterior, posterior, lateral, dorsal, ventral)"
    ],
    terms: [
      { t: "Biology", d: "The science of life; its two major branches are botany and zoology, with specialized areas such as bacteriology, molecular biology, histology, cell biology and ecology.", x: "Botany — the study of plants" },
      { t: "Scientific method", d: "Identifying the problem, defining the problem, hypothesizing, experimenting, recording, analyzing and concluding.", x: "A fair test changes only one variable" },
      { t: "Body symmetry", d: "Bilateral symmetry (one plane of symmetry, e.g. man) and radial symmetry (several planes, e.g. jellyfish).", x: "A human body is bilaterally symmetrical" },
      { t: "Sectioning", d: "Longitudinal (lengthwise) and transverse/vertical (cross) sections of an organism.", x: "T.S. of a stem; L.S. of a leaf" },
      { t: "Magnification", d: "How many times larger an image is than the object; magnification = image size ÷ object size.", x: "40 × 10 = 400×" },
      { t: "Resolution", d: "The ability of a microscope to separate two close points into distinct images.", x: "A compound light microscope resolves to about 0.2 µm" }
    ],
    tf: [
      { s: "The two major branches of biology are botany and zoology.", a: "True", why: "The two major branches of biology are botany and zoology; specialized areas include bacteriology, molecular biology, histology, cell biology and ecology." },
      { s: "An electron microscope must be used to observe the stages of meiosis in root-tip cells.", a: "False", why: "Stages of meiosis and mitosis are observed under the compound light microscope (permanent slides may be used)." }
    ],
    mcq: [
      { q: "The two major branches of biology are:", o: ["anatomy and physiology", "botany and zoology", "genetics and ecology", "pathology and bacteriology"], a: 1, why: "Botany (plants) and zoology (animals) are the two major branches." },
      { q: "An organism that can be divided into two mirror-image halves along one plane only shows:", o: ["radial symmetry", "bilateral symmetry", "asymmetry", "spherical symmetry"], a: 1, why: "One plane of symmetry = bilateral symmetry." },
      { q: "The objective lens is 40× and the eyepiece 10×. The magnification is:", o: ["50×", "400×", "4,000×", "40×"], a: 1, why: "40 × 10 = 400×." },
      { q: "Which step of the scientific method comes immediately after stating a hypothesis?", o: ["concluding", "experimenting", "recording", "analyzing"], a: 1, why: "The sequence: identify → define → hypothesize → experiment → record → analyze → conclude." },
      { q: "A transverse section of a stem is cut:", o: ["lengthwise", "across the stem", "vertically through the length", "at a 45° angle"], a: 1, why: "Transverse = cross-cut across the organ." },
      { q: "Which part of the microscope is adjusted to obtain a clear, sharp image?", o: ["the stage", "the coarse and fine adjustment", "the mirror", "the arm"], a: 1, why: "Coarse adjustment locates the image; fine adjustment sharpens it." }
    ],
    essay: [
      { q: "Describe, with a labelled diagram of the set-up, an experiment to show that green leaves produce starch in the presence of sunlight.", marks: 12, outline: [
        "Destarch a potted plant in darkness for 48 hours",
        "Block part of a leaf with black paper (control); expose the plant to sunlight for several hours",
        "Pluck the leaf, kill it in boiling water, dissolve the chlorophyll in boiling ethanol (water-bath), wash in water",
        "Add iodine solution: the exposed part turns blue-black (starch present), the covered part stays brown (no starch)",
        "Conclusion: starch is produced in the part that received light — photosynthesis requires sunlight"
      ] },
      { q: "Distinguish between a living thing and an organism, and list the two major branches of biology with three specialized areas.", marks: 10, outline: [
        "A living thing displays the characteristics of life (growth, reproduction, respiration, sensitivity, excretion, movement); an organism is a single individual living thing",
        "Branches: botany (plants) and zoology (animals)",
        "Specialized areas: bacteriology, molecular biology, histology, cell biology, ecology (any three)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Introducing Biology (Section A):" },
      { k: "bul", items: [
        "1. Biology as a science of life — meaning of biology; differentiation between a living thing and an organism; the two major branches (botany and zoology); specialized areas (bacteriology, molecular biology, histology, cell biology, ecology, etc.)",
        "2. Procedure for biological work — skills required by biologists; the scientific method (identifying the problem, defining the problem, hypothesizing, experimenting, recording, analyzing and concluding); steps for writing a report: aim, hypothesis/scientific framework, materials/drawing of set-up, method, results/observation, discussion and conclusion",
        "3. Importance of biology — application of biology to everyday life; careers associated with the study of biology",
        "4. Body symmetry, sectioning and orientation — bilateral and radial symmetry; longitudinal and transverse/vertical sectioning; anterior, posterior, lateral, dorsal and ventral views",
        "5. The microscope — simple light, compound light and stereoscopic light microscopes; parts; handling and care; use to observe prepared slides; temporary slides of animal and plant cells; resolution and magnification; measuring lengths; the electron microscope mentioned",
        "6. Biological drawings — appropriate headings; magnification/size; quality: clarity of lines, neatness of labels"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "Distinction between (i) posterior and anterior views, (ii) dorsal and ventral views, (iii) transverse and longitudinal sections.",
        "Mounting varieties of specialized eukaryotic cells; drawing of cells as seen under the microscope.",
        "Determination of magnification of drawings; measuring lengths using the compound light microscope; the electron microscope should be mentioned."
      ] }
    ]
  },
  /* =============== A2 · CONCEPT OF LIVING THINGS =============== */
  {
    grade: 12, sem: "One", icon: "", period: "A2",
    title: "Concept of Living Things — Classification & Organization",
    subtitle: "Living and non-living · the five kingdoms · levels of organization · forms in which living cells exist",
    note: "The classification topic: the five kingdoms with their major phyla/divisions, the levels from cell to organ system, and the forms in which living cells exist (single, colony, filament, part of an organism).",
    objectives: [
      "Classify objects into living and non-living, with viruses mentioned as the link between the two",
      "Describe the kingdoms Monera, Protoctista, Fungi, Plantae and Animalia and their major phyla/divisions",
      "Explain the levels of organization: cell, tissue, organ, system, with named examples",
      "State the advantages and disadvantages of complexity of organization, including the volume/surface area ratio",
      "Describe the forms in which living cells exist: single and free-living, colony, filament, part of a living organism"
    ],
    terms: [
      { t: "Kingdom Monera", d: "Prokaryotes — single-celled, motile or non-motile organisms without a definite nucleus; e.g. bacteria and blue-green algae.", x: "Bacteria; blue-green algae" },
      { t: "Kingdom Protoctista (Protista)", d: "Eukaryotes — single-celled, motile or non-motile organisms with a definite nucleus; phyla include Rhizopoda, Zoomastigina, Apicomplexa, Ciliophora, Euglenophyta, Oomycota, Chlorophyta, Rhodophyta, Phaeophyta.", x: "Chlamydomonas, Amoeba" },
      { t: "Kingdom Fungi", d: "Eukaryotes — mainly non-motile organisms composed of hyphae containing nuclei; phyla Zygomycota, Ascomycota, Basidiomycota.", x: "Moulds, mushrooms, Rhizopus" },
      { t: "Kingdom Plantae", d: "Eukaryotes — mainly multicellular, non-motile, chlorophyll-bearing organisms that photosynthesize; divisions include Bryophyta, Lycopodophyta, Filicinophyta, Coniferophyta, Cycadophyta, Angiospermophyta.", x: "Mosses, ferns, pines, oil palms, yam" },
      { t: "Kingdom Animalia", d: "Eukaryotes — multicellular, motile organisms that feed on other organisms.", x: "Corals, worms, insects, fishes, frogs, monkeys" },
      { t: "Levels of organization", d: "Cell (Amoeba) → tissue (Hydra) → organ (bulb, rhizome, heart) → organ system (reproductive, excretory).", x: "A heart is an organ; the circulatory system is an organ system" },
      { t: "Volume/surface area ratio", d: "As an organism grows, volume increases faster than surface area, limiting exchange across the surface — a driver of complex organization.", x: "Large organisms need transport systems" }
    ],
    tf: [
      { s: "Viruses are regarded as the link between living and non-living things.", a: "True", why: "Viruses should be mentioned as a link between living and non-living things." },
      { s: "Kingdom Monera is made up of eukaryotic cells.", a: "False", why: "Monera are prokaryotes — without a definite nucleus." },
      { s: "Kingdom Plantae organisms contain chlorophyll and photosynthesize.", a: "True", why: "Mainly multicellular, non-motile organisms containing chlorophyll that enables them to photosynthesize." }
    ],
    mcq: [
      { q: "Which kingdom contains organisms without a definite nucleus?", o: ["Plantae", "Animalia", "Monera", "Fungi"], a: 2, why: "Monera are prokaryotes (no definite nucleus)." },
      { q: "Chlamydomonas and Amoeba belong to which kingdom?", o: ["Monera", "Protoctista", "Fungi", "Plantae"], a: 1, why: "Both are single-celled eukaryotes — Kingdom Protoctista." },
      { q: "Rhizopus and mushrooms belong to the kingdom:", o: ["Plantae", "Fungi", "Protoctista", "Monera"], a: 1, why: "Fungi are composed of hyphae — e.g. moulds, mushrooms, Rhizopus." },
      { q: "The correct sequence of the levels of organization is:", o: ["organ → tissue → cell → system", "cell → tissue → organ → system", "tissue → cell → system → organ", "cell → organ → tissue → system"], a: 1, why: "Cell → tissue → organ → organ system." },
      { q: "Volvox is an example of cells existing as a:", o: ["filament", "colony", "single free-living cell", "tissue"], a: 1, why: "Volvox is the standard example of a colonial form of existence." },
      { q: "Spirogyra shows cells arranged in a:", o: ["colony", "filament", "mass", "chain of organs"], a: 1, why: "Spirogyra is the standard filament example." },
      { q: "Which statement about viruses is correct?", o: ["They are prokaryotes", "They are the link between living and non-living things", "They have a definite nucleus", "They photosynthesize"], a: 1, why: "Viruses are mentioned as a link between living and non-living things." },
      { q: "The major phyla of Kingdom Fungi include:", o: ["Zygomycota, Ascomycota, Basidiomycota", "Rhizopoda, Ciliophora", "Bryophyta, Filicinophyta", "Mollusca, Annelida"], a: 0, why: "These are the fungal phyla; the others belong to Protoctista/Plantae/Animalia." }
    ],
    essay: [
      { q: "State the five kingdoms of living things and, for each, give one major characteristic and two examples.", marks: 10, outline: [
        "Monera — prokaryotes (no definite nucleus): bacteria, blue-green algae",
        "Protoctista — single-celled eukaryotes: Amoeba, Chlamydomonas",
        "Fungi — hyphae containing nuclei: Rhizopus, mushrooms",
        "Plantae — multicellular, chlorophyll-bearing, photosynthetic: mosses, ferns, oil palm",
        "Animalia — multicellular, motile, feed on other organisms: insects, fishes"
      ] },
      { q: "Explain the levels of organization in living things, giving one named example at each level, and state why larger organisms need complex organization.", marks: 12, outline: [
        "Cell — Amoeba (a complete organism in one cell)",
        "Tissue — Hydra (groups of similar cells)",
        "Organ — heart / storage organ bulb or rhizome",
        "Organ system — reproductive or excretory system in mammals",
        "Complexity: as size increases, the volume/surface area ratio makes surface exchange insufficient, so tissues, organs and transport systems evolve; advantages (division of labour, specialization) and disadvantages (interdependence of parts) should be mentioned"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Topic A (Concept of Living Things), items 1–3:" },
      { k: "bul", items: [
        "1. Classification — living and non-living things; classification of living things into Kingdoms: Monera, Protoctista (Protista), Fungi, Plantae, Animalia",
        "2. Organization of life — levels: cell (Amoeba, Euglena, Paramecium); tissue (Hydra); organ (storage organ — bulb, rhizome and heart); system/organ system (in mammals and flowering plants — reproductive, excretory, etc.); complexity of organization in higher organisms: advantages and disadvantages",
        "3. Forms in which living cells exist — single and free-living (Amoeba, Paramecium, Euglena, Chlamydomonas); colony (Volvox); filament (Spirogyra); part of a living organism (cheek cells, onion root tip cells, epidermis of fleshy leaves)"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "Classification of objects into living and non-living, with examples; viruses mentioned as a link between living and non-living things.",
        "Monera (prokaryotes), single-celled, motile or non-motile without definite nucleus — bacteria and blue-green algae.",
        "Protoctista (eukaryotes), single-celled with definite nucleus — Chlamydomonas, Amoeba; phyla: Rhizopoda, Zoomastigina, Apicomplexa, Ciliophora, Euglenophyta, Oomycota, Chlorophyta, Rhodophyta, Phaeophyta.",
        "Fungi (eukaryotes), mainly non-motile, composed of hyphae containing nuclei — moulds, mushrooms, Rhizopus; phyla: Zygomycota, Ascomycota, Basidiomycota.",
        "Plantae (eukaryotes), mainly multicellular, non-motile, chlorophyll-bearing — mosses, ferns, pines, oil palms, yam plants; divisions: Bryophyta (Hepaticae, Musci), Lycopodophyta, Filicinophyta, Coniferophyta, Cycadophyta, Angiospermophyta (Monocotyledoneae, Dicotyledoneae).",
        "Animalia (eukaryotes), multicellular, motile, feed on other organisms — corals, worms, insects, snails, fishes, frogs, snakes, monkeys, cows; external features of the cockroach, butterfly, Tilapia, toad/frog, lizard and domestic fowl/pigeon.",
        "The examples should illustrate differentiation and specialization; the significance of the levels of organization, including volume/surface area ratio, should be mentioned.",
        "The structure of the organisms in item 3 is studied in relation to the forms of existence, to illustrate dependence and interdependence; distinguish groups of cells that form tissues from those that form colonies or filaments."
      ] }
    ]
  },
  /* =============== A3 · THE CELL =============== */
  {
    grade: 12, sem: "One", icon: "🧫", period: "A3",
    title: "The Cell — Structure, Environment & Properties",
    subtitle: "Cell structure and organelles · plant and animal cells · diffusion, osmosis, active transport · nutrition, respiration, excretion, growth, movement, reproduction",
    note: "The heart of the 'Concept of Living Things': cell structure and the function of every organelle, the physical processes at the cell surface, and the properties/functions of the living cell. Paper 1 draws heavily here.",
    objectives: [
      "State the structure of the cell (wall, membrane, nucleus, cytoplasm and organelles) and the function of each organelle",
      "Compare and contrast plant and animal cells",
      "Explain diffusion, osmosis and active transport, with haemolysis, plasmolysis, turgidity and crenation",
      "Explain nutrition (autotrophic and holozoic), aerobic and anaerobic respiration with energy release, and excretion in single-celled organisms",
      "Explain growth (mitosis, enlargement, differentiation), movement (cilia, flagella, cyclosis) and reproduction (asexual and sexual)"
    ],
    terms: [
      { t: "Cell organelles", d: "Mitochondria, lysosomes, chloroplasts, endoplasmic reticulum, ribosomes, centrosomes, Golgi bodies and chromosomes — each with a function.", x: "Mitochondria — site of aerobic respiration" },
      { t: "Osmosis", d: "The movement of water molecules from a region of higher water concentration to lower through a semipermeable membrane.", x: "Plasmolysis of an onion epidermis in strong salt solution" },
      { t: "Active transport", d: "Movement of substances against a concentration gradient, using energy (ATP).", x: "Uptake of mineral salts by root hairs" },
      { t: "Plasmolysis", d: "Shrinking of the protoplast away from the cell wall in a hypertonic solution.", x: "A plant cell in strong salt solution" },
      { t: "Turgidity", d: "The swollen, firm state of a plant cell in a hypotonic (dilute) solution.", x: "A plant cell in pure water" },
      { t: "Aerobic respiration", d: "Oxidation of glucose in the presence of oxygen to carbon dioxide, water and energy (ATP); involves glycolysis and the Krebs cycle.", x: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy" },
      { t: "Anaerobic respiration", d: "Incomplete oxidation of glucose without oxygen; in yeast produces alcohol and CO₂ (fermentation); in muscles produces lactic acid.", x: "Kenkey and bread making use anaerobic respiration" },
      { t: "Mitosis", d: "Cell division producing two genetically identical daughter cells; the basis of growth.", x: "Onion root tip squashes show the stages" },
      { t: "Tropism", d: "Growth curvature in response to an environmental stimulus — phototropism, geotropism, hydrotropism.", x: "Shoots growing towards light (positive phototropism)" }
    ],
    tf: [
      { s: "Haemolysis, plasmolysis, turgidity and crenation are mentioned in the syllabus as outcomes of osmotic processes.", a: "True", why: "The significance of diffusion, osmosis and active transport is mentioned, with haemolysis, plasmolysis, turgidity and crenation." },
      { s: "Anaerobic respiration is important in food processing.", a: "True", why: "The importance of anaerobic respiration in food processing should be mentioned." },
      { s: "Cyclosis is a type of cell movement caused by cilia.", a: "False", why: "Cyclosis (cycloplasm) is the streaming of the cytoplasm; cilia and flagella are the organelles for movement." },
      { s: "Fission, budding and vegetative propagation are types of asexual reproduction in cells.", a: "True", why: "Asexual reproduction: fission, budding and vegetative propagation." }
    ],
    mcq: [
      { q: "The site of aerobic respiration in the cell is the:", o: ["nucleus", "mitochondrion", "ribosome", "Golgi body"], a: 1, why: "Mitochondria are the powerhouses of the cell." },
      { q: "Osmosis is the diffusion of water through a:", o: ["permeable wall", "semipermeable membrane", "cell wall only", "plasma membrane only, without water potential gradient"], a: 1, why: "Osmosis is diffusion of water through a semipermeable membrane." },
      { q: "A plant cell placed in a strong salt solution will show:", o: ["turgidity", "plasmolysis", "haemolysis", "crenation"], a: 1, why: "Water leaves the cell by osmosis — plasmolysis." },
      { q: "Which of the following is NOT found in an animal cell?", o: ["mitochondria", "cell wall", "nucleus", "Golgi body"], a: 1, why: "Animal cells lack a cellulose cell wall (and chloroplasts)." },
      { q: "The organelle that is the site of protein synthesis is the:", o: ["lysosome", "centrosome", "ribosome", "chloroplast"], a: 2, why: "Ribosomes are the protein-synthesizing organelles." },
      { q: "The products of anaerobic respiration in yeast are:", o: ["carbon dioxide and water", "lactic acid and energy", "ethanol and carbon dioxide", "oxygen and glucose"], a: 2, why: "Yeast fermentation: glucose → ethanol + CO₂ + energy." },
      { q: "Movement of mineral salts from soil (dilute) into root hairs (concentrated) is by:", o: ["diffusion", "osmosis", "active transport", "mass flow"], a: 2, why: "Against the concentration gradient — active transport, using ATP." },
      { q: "Mitosis results in:", o: ["four haploid cells", "two identical diploid daughter cells", "gametes", "gene recombination"], a: 1, why: "Mitosis produces two genetically identical cells — the basis of growth." },
      { q: "The growth of a shoot towards a light source is called:", o: ["geotropism", "phototropism", "hydrotropism", "thigmotropism"], a: 1, why: "Growth response to light — (positive) phototropism." },
      { q: "Budding as a mode of asexual reproduction is observed in:", o: ["yeast and Chlamydomonas", "bacteria only", "mammals", "ferns"], a: 0, why: "Prepared slides of budding in yeast and Chlamydomonas should be observed and drawn." }
    ],
    essay: [
      { q: "Draw and label a typical plant cell and a typical animal cell. State four points of difference between them and the function of each labelled part.", marks: 12, outline: [
        "Plant cell: cell wall, cell membrane, nucleus, cytoplasm, large central vacuole, chloroplasts, mitochondria, ER, ribosomes",
        "Animal cell: cell membrane, nucleus, cytoplasm, mitochondria, ER, ribosomes, centrosomes, Golgi bodies, small vacuoles",
        "Differences: plant has cell wall + chloroplasts + large vacuole; animal has centrosome and no cell wall/chloroplasts",
        "Functions: wall — support and protection; membrane — controls entry/exit; nucleus — control; mitochondria — respiration; chloroplasts — photosynthesis; ribosomes — protein synthesis; Golgi — packaging/secretion"
      ] },
      { q: "Define osmosis and describe an experiment to demonstrate plasmolysis and de-plasmolysis using an onion epidermis.", marks: 10, outline: [
        "Osmosis: movement of water from a region of higher to lower water concentration through a semipermeable membrane",
        "Peel a purple onion epidermis onto a slide with water; observe the turgid cells",
        "Add strong salt solution at one edge (draw with filter paper): water leaves the cells — the protoplast shrinks away from the wall (plasmolysis)",
        "Add pure water: water re-enters — the cells become turgid again (de-plasmolysis)",
        "Conclusion: cells gain or lose water by osmosis depending on the surrounding solution"
      ] },
      { q: "Distinguish between aerobic and anaerobic respiration and explain the importance of anaerobic respiration in food processing.", marks: 10, outline: [
        "Aerobic: in the presence of O₂, complete oxidation to CO₂ + H₂O + large energy yield",
        "Anaerobic: without O₂, incomplete oxidation — ethanol + CO₂ (yeast) or lactic acid (muscle)",
        "Importance: fermentation in brewing (beer, gin, kenkey), bread making (CO₂ leavens the dough), vinegar and other organic acid production"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Topic A, items 4–6:" },
      { k: "bul", items: [
        "4. Cell structure and functions of cell components; similarities and differences between plant and animal cells",
        "5. The cell and its environment: physical and biophysical processes — diffusion, osmosis, active transport",
        "6. Properties and functions of the living cell — (a) Nutrition: autotrophic (photosynthesis), heterotrophic (holozoic); (b) Cellular respiration: aerobic, anaerobic, energy release; (c) Excretion: in single-celled aquatic organisms (diffusion by body surface and contractile vacuole), waste products of metabolism; (d) Growth: basis — cell division (mitosis), enlargement and differentiation; aspects of growth; regions of fastest growth in plants; growth hormones and auxins; growth curvatures (tropisms); development; Movement: cilia and flagella, cyclosis; (g) Reproduction: asexual (fission, budding, vegetative propagation) and sexual (conjugation, gametogenesis, fertilization)"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "Cell structure: cell wall, cell membrane, nucleus, cytoplasm, cytoplasmic organelles — mitochondria, lysosomes, chloroplasts, endoplasmic reticulum, ribosomes, centrosomes, Golgi bodies, chromosomes. The function performed by each organelle should be known.",
        "The significance of diffusion, osmosis and active transport as factors affecting cell activities; haemolysis, plasmolysis, turgidity and crenation should be mentioned.",
        "Nutrition in Euglena, Chlamydomonas and Spirogyra; nutrition in Amoeba and Paramecium.",
        "A simplified outline of glycolysis and the Krebs cycle; the role of ATP. The importance of anaerobic respiration in food processing.",
        "Waste products: carbon dioxide, water and ammonia as examples.",
        "Growth: observation of root tip and shoot tip is required; regulation by hormones; types of tropisms should be demonstrated; microscopic examination of the regions of growth (cell division, elongation, differentiation, maturation); processes of primary and secondary growth.",
        "Reproduction: prepared slides of fission in Paramecium and budding in yeast and Chlamydomonas; prepared slides of conjugation in Paramecium and Spirogyra; meiosis should be mentioned."
      ] }
    ]
  },
  /* =============== A4 · TISSUES & SUPPORT =============== */
  {
    grade: 12, sem: "One", icon: "🦴", period: "A4",
    title: "Tissues and Supporting Systems",
    subtitle: "Animal skeletons — materials, types, bones, functions · plant supporting tissues",
    note: "How animals and plants support themselves: the skeleton (materials, types, vertebral column, joints, functions) and the plant supporting tissues.",
    objectives: [
      "State the biological significance of the skeleton and the skeletal materials (bone, cartilage, chitin)",
      "Identify the types of skeleton: exoskeleton, endoskeleton, hydrostatic skeleton",
      "Name the bones of the vertebral column, girdles and long bones, and state the functions of the skeleton",
      "Describe the supporting tissues of plants and their functions: strength, rigidity, flexibility, resilience"
    ],
    terms: [
      { t: "Exoskeleton", d: "A hard external skeleton, e.g. the chitin shell of arthropods.", x: "Cockroach" },
      { t: "Endoskeleton", d: "An internal skeleton of bone or cartilage.", x: "The mammalian skeleton" },
      { t: "Hydrostatic skeleton", d: "Support by fluid pressure in a body cavity, without hard parts.", x: "Earthworm, Hydra" },
      { t: "Vertebral column", d: "The spine — cervical, thoracic, lumbar, sacral and caudal vertebrae.", x: "7 cervical vertebrae in most mammals" },
      { t: "Girdles", d: "Pectoral (shoulder) and pelvic (hip) girdles, which attach the limbs to the axial skeleton.", x: "The scapula forms part of the pectoral girdle" },
      { t: "Collenchyma", d: "A plant supporting tissue of living cells with thickened corners, giving flexibility to growing stems.", x: "The pith of a young stem" },
      { t: "Sclerenchyma", d: "Dead, lignified supporting cells giving rigidity — fibres and sclereids.", x: "Coco-fibre" }
    ],
    tf: [
      { s: "The detailed structure of the skull is required in the WASSCE Biology syllabus.", a: "False", why: "Detailed structure of the skull will not be required; histological structure of bones and cartilages is also not required." },
      { s: "Functions of the skeleton include protection, support, locomotion and respiratory movement.", a: "True", why: "Functions of skeleton in animals: protection, support, locomotion and respiratory movement." }
    ],
    mcq: [
      { q: "The skeleton of an earthworm is a:", o: ["exoskeleton", "endoskeleton", "hydrostatic skeleton", "chitinous shell"], a: 2, why: "Fluid pressure in the body cavity supports the earthworm." },
      { q: "Chitin is the skeletal material of:", o: ["mammals", "arthropods", "cartilaginous fishes", "turtles"], a: 1, why: "Arthropods have a chitinous exoskeleton." },
      { q: "Which of the following is NOT a function of the skeleton?", o: ["protection", "support", "digestion of food", "locomotion"], a: 2, why: "Functions: protection, support, locomotion and respiratory movement." },
      { q: "The shoulder blades (scapulae) form part of the:", o: ["pelvic girdle", "pectoral girdle", "vertebral column", "ribs"], a: 1, why: "The scapulae are part of the pectoral (shoulder) girdle." },
      { q: "The plant tissue that gives growing stems flexibility is:", o: ["sclerenchyma", "collenchyma", "xylem", "phloem"], a: 1, why: "Collenchyma — living cells with thickened corners — supports young growing parts." }
    ],
    essay: [
      { q: "State four functions of the mammalian skeleton and explain how the skeleton works with muscles to produce locomotion.", marks: 10, outline: [
        "Functions: protection (skull protects the brain), support (bears the body), locomotion (levers for muscles), respiratory movement (ribs)",
        "Plus: blood cell formation (bone marrow) and storage of minerals (calcium, phosphorus)",
        "Locomotion: muscles contract in antagonistic pairs (e.g. biceps/triceps) and pull on bones which act as levers about the joints"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Topic A, item 7:" },
      { k: "bul", items: [
        "7(a) Tissues and supporting systems — skeleton and supporting systems in animals: biological significance; skeletal materials (bone, cartilage, chitin); types of skeleton (exoskeleton, endoskeleton, hydrostatic skeleton); bones of the vertebral column, girdles and long bones of the appendicular skeleton; mechanism of support; functions (protection, support, locomotion, respiratory movement)",
        "7(b) Different types of supporting tissues in plants — main features; functions: strength, rigidity (resistance against the forces of wind and water), flexibility and resilience"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "Location and arrangement of skeletal and supporting tissues; the general plan of the mammalian skeleton and the different types of joints; identify, draw, label and state the functions of the individual bones listed in the content column.",
        "Detailed structure of the skull will not be required; histological structure of bones and cartilages is also not required.",
        "Explain how the functions are performed; the relationship of skeleton and muscles during movement should be used to illustrate the different functions of the skeleton.",
        "Plants: turgid parenchyma, collenchyma, xylem (wood), sclerenchyma. Candidates should cut and draw the low power T.S. of the stem and root of a herbaceous plant and label epidermis, cortex and stele."
      ] }
    ]
  },
  /* =============== A5 · TRANSPORT =============== */
  {
    grade: 12, sem: "One", icon: "🩸", period: "A5",
    title: "Transport Systems",
    subtitle: "The need for transport · blood, lymph, heart and vessels · water uptake, translocation, transpiration",
    note: "How materials are carried in animals (blood and lymph; heart, arteries, veins, capillaries) and in plants (xylem water flow, translocation in phloem, transpiration).",
    objectives: [
      "Explain why transport is needed: surface area/volume ratio and greater distances",
      "Describe the structure of the heart, arteries, veins and capillaries",
      "State the composition and functions of blood and lymph",
      "Explain uptake and movement of water and mineral salts in plants, translocation (pressure-flow hypothesis and cytoplasmic streaming), and transpiration",
      "Describe the factors behind the rise of water in xylem: root pressure, transpiration, cohesion-tension, adhesion, water potential gradient"
    ],
    terms: [
      { t: "Blood", d: "Plasma (water, proteins, dissolved substances) plus formed elements: red cells (haemoglobin, transport of O₂), white cells (defence) and platelets (clotting).", x: "Red cells carry oxygen from the lungs" },
      { t: "Lymph", d: "Clear tissue fluid returned to the blood via the lymphatic system.", x: "Collected from the tissues by lymph vessels" },
      { t: "Artery", d: "A thick-walled, elastic vessel carrying blood away from the heart under high pressure.", x: "The aorta" },
      { t: "Vein", d: "A thin-walled, low-pressure vessel with valves, carrying blood to the heart.", x: "The vena cava" },
      { t: "Capillary", d: "A one-cell-thick vessel where exchange of gases, food and wastes takes place.", x: "Exchange in the body tissues" },
      { t: "Transpiration", d: "Loss of water vapour from the plant, mainly through the stomata of leaves.", x: "Measured with a potometer" },
      { t: "Translocation", d: "The transport of manufactured food (mainly sucrose) in the phloem from leaves to all parts of the plant.", x: "Ringing experiment shows phloem transports food" },
      { t: "Cohesion-tension mechanism", d: "Water rises in xylem because transpiration pulls a continuous column of cohesive water molecules from leaf to root.", x: "Adhesion to the xylem walls assists" }
    ],
    tf: [
      { s: "The ringing experiment demonstrates that transport of synthesized organic nutrients occurs through the phloem.", a: "True", why: "Ringing experiment to demonstrate that transport of synthesized organic nutrients occurs through the phloem." },
      { s: "Arteries have thinner walls than veins.", a: "False", why: "Arteries have thick, elastic walls to withstand high pressure; veins have thinner walls and valves." },
      { s: "Experiments using eosin solution show water and mineral salts uptake in plants.", a: "True", why: "Experiments using eosin solution to show water and mineral salts uptake." }
    ],
    mcq: [
      { q: "The blood vessel that carries blood away from the heart under high pressure is the:", o: ["vein", "artery", "capillary", "lymph vessel"], a: 1, why: "Arteries carry blood away from the heart; thick elastic walls, high pressure." },
      { q: "Which blood cell contains haemoglobin?", o: ["white cell", "platelet", "red cell", "plasma cell"], a: 2, why: "Red cells carry haemoglobin, which transports oxygen." },
      { q: "The main site of exchange of materials between blood and tissue cells is the:", o: ["artery", "vein", "capillary", "vena cava"], a: 2, why: "Capillaries are one cell thick — the exchange surfaces." },
      { q: "Transpiration is mainly through the:", o: ["lenticels", "stomata", "roots", "cuticle only"], a: 1, why: "Most water vapour leaves the leaf through the stomata." },
      { q: "The upward movement of water in the xylem is mainly caused by:", o: ["root pressure alone", "the cohesion-tension mechanism driven by transpiration", "active transport in the xylem", "gravity"], a: 1, why: "Transpiration pulls a cohesive column of water; adhesion assists." },
      { q: "Translocation (movement of food) in plants occurs in the:", o: ["xylem", "phloem", "cambium", "epidermis"], a: 1, why: "The phloem transports manufactured food from leaves to the roots and other parts." },
      { q: "Which factor does NOT affect the rate of transpiration?", o: ["humidity", "wind speed", "light intensity", "the colour of the flower"], a: 3, why: "Humidity, wind, light, temperature and CO₂ affect transpiration; flower colour does not." }
    ],
    essay: [
      { q: "Describe the structure of the mammalian heart and explain the mechanism of a heartbeat, naming the tissues involved in the excitation and conduction of the impulse.", marks: 12, outline: [
        "Four chambers: two auricles (atria) and two ventricles; septa; valves (tricuspid, bicuspid/mitral, semilunar); thicker left ventricle wall",
        "Double circulation: pulmonary (right heart → lungs → left heart) and systemic (left heart → body → right heart)",
        "Heartbeat: the SAN initiates the impulse; it spreads over the auricles, passes through the AV node and down the bundle of His/Purkinje tissue, causing ventricular contraction; the valves prevent backflow",
        "Atrial systole → ventricular systole → diastole; the heartbeat is self-maintained"
      ] },
      { q: "Describe an experiment to demonstrate transpiration in a potted plant, and state four factors that affect the rate of transpiration.", marks: 10, outline: [
        "Set up: a well-watered potted plant with leaves; enclose the leaves in a clear polythene bag and tie at the stem (control: an uncovered pot of soil)",
        "After some hours, water droplets condense on the inside of the bag — water vapour from the leaves",
        "Factors: light intensity, temperature, humidity, wind speed (state the effect of each)",
        "Conclusion: transpiration is the loss of water vapour from the leaf surfaces, mainly through the stomata"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Topic A, item 8 (Transport System):" },
      { k: "bul", items: [
        "(a) Need for transport — surface area/volume ratio; substances have to move greater distances",
        "Transport in animals — media of transport (body fluid); structure of the heart, arteries, veins and capillaries; composition and function of blood and lymph; materials for transport (excretory products, gases, digested food, other nutrients); the general circulatory system; open circulatory systems in invertebrates; names of the blood vessels carrying excretory products, gases, digested food and nutrients",
        "Transport in plants — (i) uptake and movement of water and mineral salts; (ii) translocation; (iii) transpiration; (iv) movement of water to the apex of trees and herbs"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "Source of materials and forms in which they are transported, and where they are transported to.",
        "Media: cytoplasm in cells, cell sap or latex in most plants, body fluid in invertebrates.",
        "Description of uptake of water and mineral salts from the soil into a plant; movement through the plant; experiments using eosin solution.",
        "Translocation: movement of organic materials from leaves to roots; pressure-flow hypothesis and cytoplasmic streaming; the ringing experiment.",
        "Transpiration: advantages and disadvantages; types; environmental factors; determination of the rate.",
        "Rise of water in the xylem: root pressure, transpiration, cohesion-tension mechanism, adhesion, water potential gradient; experiments to measure the rate of transpiration."
      ] }
    ]
  },
  /* =============== A6 · RESPIRATION, EXCRETION, HOMEOSTASIS =============== */
  {
    grade: 12, sem: "One", icon: "🫁", period: "A6",
    title: "Respiration, Excretion & Homeostasis",
    subtitle: "Respiratory surfaces (skin, gills, lungs) · excretory systems · kidney, liver and skin in the regulation of the internal environment",
    note: "Gaseous exchange in fish, toads, mammals and plants; excretory organs and the maintenance of a stable internal environment by kidney, liver and skin.",
    objectives: [
      "State the characteristics of respiratory surfaces and the mechanisms of gaseous exchange in fish, toads, mammals and plants",
      "Observe, draw and label the respiratory organs of a bony fish (Tilapia) and a small mammal (rat)",
      "Study the characteristics of excretory organs and observe, draw and label the excretory organs of a small mammal",
      "Explain excretion in plants and the excretory products of plants",
      "Explain the structure and functions of the kidney, liver and skin in homeostasis, including osmoregulation and acid-base balance"
    ],
    terms: [
      { t: "Respiratory surface", d: "A surface for gaseous exchange — thin, moist, richly supplied with blood vessels, and with a large area.", x: "Alveoli of the lung; gill filaments" },
      { t: "Gills", d: "Respiratory organs of fish, with filaments and lamellae for countercurrent exchange of gases with water.", x: "Tilapia" },
      { t: "Lungs", d: "Internal, air-filled respiratory organs of terrestrial vertebrates, ending in alveoli.", x: "The mammalian lung" },
      { t: "Excretion", d: "The removal of metabolic waste products (urea, CO₂, water, excess salts).", x: "Urea is made in the liver from ammonia" },
      { t: "Kidney", d: "The main excretory organ of mammals; filters the blood to form urine; also osmoregulates.", x: "Nephron — the functional unit" },
      { t: "Homeostasis", d: "The maintenance of a stable internal environment (water, salt, temperature, acid-base balance).", x: "The kidney maintains water and salt balance" },
      { t: "Stomata", d: "Pores in the leaf epidermis, opened and closed by guard cells; sites of gas exchange and transpiration.", x: "Open in light, close in darkness" }
    ],
    tf: [
      { s: "The respiratory organs of insects should be mentioned in the syllabus.", a: "True", why: "Respiratory organs of insects should be mentioned (the tracheal system)." },
      { s: "Oxygen is listed as an excretory product of plants.", a: "True", why: "Excretory products of plants: water, carbon dioxide, oxygen, alkaloids, tannins, gums, resins and acids." },
      { s: "The conditions affecting kidney function include the water and salt content of the blood and environmental temperature.", a: "True", why: "The conditions that affect the functions of the kidney — water and salt content of the blood, environmental temperature — should be mentioned." }
    ],
    mcq: [
      { q: "Which of the following is a characteristic of a good respiratory surface?", o: ["thick and dry", "thin and moist, with a rich blood supply", "covered with a waxy cuticle", "no blood vessels"], a: 1, why: "Respiratory surfaces are thin, moist, permeable and richly vascularized." },
      { q: "The respiratory organ of a bony fish is the:", o: ["lung", "trachea", "gill", "skin only"], a: 2, why: "Fishes breathe by gills." },
      { q: "The main excretory organ of a mammal is the:", o: ["liver", "kidney", "skin", "lung"], a: 1, why: "The kidney filters the blood and forms urine (the lungs excrete CO₂ and water; the skin, some water and salts)." },
      { q: "The functional unit of the kidney is the:", o: ["nephron", "alveolus", "neuron", "segment"], a: 0, why: "Each nephron filters plasma and forms urine." },
      { q: "Which of the following is an excretory product of plants?", o: ["urea", "oxygen", "glucose", "starch"], a: 1, why: "Plants excrete water, CO₂, oxygen, alkaloids, tannins, gums, resins and acids." },
      { q: "The mechanism by which guard cells open and close the stomata involves:", o: ["only light", "changes in water potential (turgor) of the guard cells", "contraction of muscles", "active secretion of air"], a: 1, why: "Guard cells become turgid (open) or flaccid (close) as water potential changes." }
    ],
    essay: [
      { q: "Compare the respiratory systems of a bony fish and a mammal, and state the characteristics that make each an efficient respiratory surface.", marks: 12, outline: [
        "Fish: gills — filaments and lamellae, countercurrent flow of water and blood, kept moist by water; rich blood supply",
        "Mammal: lungs — bronchioles ending in alveoli, large thin-walled moist surface, rich capillary network; diaphragm and ribs drive ventilation",
        "Common characteristics: thin membrane, moist surface, large area, rich blood supply, ventilation mechanism",
        "Candidates should be able to observe, draw and label the gills of Tilapia and the lungs of a rat, and mention the respiratory movements"
      ] },
      { q: "Explain how the kidney, liver and skin each contribute to the maintenance of homeostasis in mammals.", marks: 10, outline: [
        "Kidney: filters the blood; reabsorbs water, glucose and salts; excretes urea, excess water and salts — osmoregulation and acid-base balance; affected by blood water/salt content and temperature",
        "Liver: converts poisonous ammonia to urea; stores glucose as glycogen; synthesizes plasma proteins; identifies and stores its position relative to gall bladder, bile duct, pancreas, duodenum and stomach",
        "Skin: excretion of water, salts and urea (sweat); temperature regulation by sweating and vasodilation/vasoconstriction; the regulation of the internal environment by the skin should be emphasized"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Topic A, items 9–11:" },
      { k: "bul", items: [
        "9. Respiratory System — (a) body surface: cutaneous, gills and lungs; (b) mechanisms of gaseous exchange in fish, toad, mammals and plants",
        "10. Excretory Systems and Mechanisms — types of excretory systems: kidney, stomata and lenticels",
        "11. Regulation of Internal Environment (Homeostasis) — (a) kidney: structure and functions; (b) liver: functions; (c) the skin: structure and function"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "Characteristics of respiratory surfaces; respiratory organs of insects should be mentioned; observe, draw and label the respiratory organs of a bony fish (Tilapia) and a small mammal (rat); respiratory movements mentioned; mechanisms of opening and closing of stomata.",
        "Excretion: characteristics of excretory organs; observe, draw and label the excretory organs of a small mammal (rat); excretion in plants; products (water, CO₂, oxygen, alkaloids, tannins, gums, resins, acids); osmoregulation and acid-base balance; conditions affecting kidney function; products such as urea, water, salts, uric acid.",
        "Homeostasis: identify the liver and its position relative to the gall bladder, bile duct, pancreas, duodenum and stomach; observe, draw and label the mammalian skin; regulation of the internal environment by the skin emphasized."
      ] }
    ]
  },
  /* =============== A7 · COORDINATION =============== */
  {
    grade: 12, sem: "One", icon: "🧠", period: "A7",
    title: "Coordination — Hormones, Nervous System & Sense Organs",
    subtitle: "Endocrine glands · the CNS and PNS · the reflex arc · the eye and ear",
    note: "How the body is coordinated: chemical control by hormones (animal and plant) and electrical control by the nervous system, ending with the sense organs of the eye and ear.",
    objectives: [
      "State the site of secretion, functions, and the effects of over- and under-secretion of the main animal hormones",
      "State the effects of plant hormones (auxins) on lateral bud development, leaf fall and adventitious roots, with reference to crop harvesting, growth and weed control",
      "Describe the components and parts of the brain (cerebrum, cerebellum, medulla oblongata, hypothalamus) and the spinal cord",
      "Distinguish the somatic and autonomic (sympathetic/parasympathetic) systems, and describe the neurone and its classification",
      "Explain the reflex arc, reflex and voluntary actions, and conditioned reflexes",
      "Describe the structure and function of the eye and ear, and correct eye defects"
    ],
    terms: [
      { t: "Endocrine gland", d: "A ductless gland that secretes hormones directly into the blood — pituitary, thyroid, adrenal, pancreas, gonads.", x: "The pituitary is the master gland" },
      { t: "Thyroxine", d: "The hormone of the thyroid gland; regulates the basal metabolic rate; essential for the metamorphosis of the toad.", x: "Over-secretion — goitre/hyperthyroidism; under — cretinism" },
      { t: "Insulin", d: "The hormone of the pancreas that lowers blood glucose; deficiency causes diabetes mellitus.", x: "Administered by injection to diabetic patients" },
      { t: "Auxin", d: "A plant hormone that promotes cell elongation; affects lateral bud development, leaf fall and adventitious roots.", x: "Synthetic auxins for weed control and fruit setting" },
      { t: "Neurone (neuron)", d: "The functional unit of the nervous system — dendrites, cell body, axon, myelin sheath, synapse.", x: "Afferent (sensory), efferent (motor) and intermediate neurones" },
      { t: "Reflex arc", d: "The pathway of a reflex: receptor → sensory neurone → (intermediate neurone) → motor neurone → effector.", x: "The knee-jerk reflex" },
      { t: "Cerebrum", d: "The largest part of the brain — higher functions: thought, memory, voluntary movement, sensation.", x: "Cerebral hemispheres" },
      { t: "Cerebellum", d: "Coordinates balance and muscle coordination; damage causes unsteady movement.", x: "'The little brain'" }
    ],
    tf: [
      { s: "The functions of the sympathetic and parasympathetic systems are the only autonomic features required.", a: "True", why: "Functions of the sympathetic and parasympathetic systems only (of the autonomic system)." },
      { s: "The stages in the metamorphosis of the toad and the role of thyroxine should be mentioned.", a: "True", why: "The stages in the metamorphosis of the toad and the role of thyroxine should be mentioned." },
      { s: "Reflex actions are voluntary actions.", a: "False", why: "Reflex actions are involuntary; the differences between reflex and voluntary actions are examined." }
    ],
    mcq: [
      { q: "The 'master' gland of the endocrine system is the:", o: ["thyroid", "pituitary", "adrenal", "pancreas"], a: 1, why: "The pituitary controls many other endocrine glands." },
      { q: "Deficiency of insulin in humans leads to:", o: ["goitre", "cretinism", "diabetes mellitus", "gigantism"], a: 2, why: "Insulin deficiency → uncontrolled blood glucose → diabetes mellitus." },
      { q: "The hormone that drives the metamorphosis of the toad is:", o: ["insulin", "thyroxine", "adrenaline", "auxin"], a: 1, why: "Thyroxine drives toad metamorphosis." },
      { q: "The part of the brain that coordinates balance and muscle movement is the:", o: ["cerebrum", "cerebellum", "medulla oblongata", "hypothalamus"], a: 1, why: "The cerebellum coordinates balance and precise movement." },
      { q: "The correct order in a reflex arc is:", o: ["effector → motor neurone → receptor", "receptor → sensory neurone → motor neurone → effector", "motor neurone → receptor → effector", "sensory neurone → effector → receptor"], a: 1, why: "Stimulus: receptor → sensory (afferent) neurone → [intermediate] → motor (efferent) neurone → effector." },
      { q: "A conditioned reflex is one that is:", o: ["inborn", "acquired by experience or training", "only found in insects", "unrelated to the brain"], a: 1, why: "Conditioned reflexes (e.g. salivation, driving a car) are learned." },
      { q: "The part of the eye that controls the amount of light entering is the:", o: ["cornea", "iris (pupil)", "lens", "retina"], a: 1, why: "The iris dilates and constricts the pupil." },
      { q: "Which structure is found in the mammalian ear and converts vibrations into nerve impulses?", o: ["the auricle", "the auditory ossicles", "the hair cells of the cochlea", "the Eustachian tube"], a: 2, why: "The hair cells of the cochlea transduce sound vibrations into impulses." }
    ],
    essay: [
      { q: "Draw and label a diagram of a mammalian eye. Explain the formation of an image on the retina and describe the correction of myopia and hypermetropia.", marks: 12, outline: [
        "Label: cornea, aqueous humour, iris, pupil, lens, vitreous humour, retina (rods and cones), optic nerve, choroid",
        "Image formation: light → cornea (main refraction) → lens (fine focus by ciliary muscles) → inverted, real image on the retina; impulses along the optic nerve to the brain",
        "Accommodation: ciliary muscles contract/relax to change lens curvature for near/far objects",
        "Defects: myopia (short-sighted) — corrected with a concave lens; hypermetropia (long-sighted) — corrected with a convex lens"
      ] },
      { q: "Explain the difference between the sympathetic and parasympathetic systems, and describe how a reflex action is brought about, using the knee-jerk as an example.", marks: 10, outline: [
        "Both are autonomic (involuntary); sympathetic — 'fight or flight' (raises heart rate, dilates pupils, mobilizes energy); parasympathetic — 'rest and digest' (slows the heart, aids digestion); they act antagonistically",
        "Knee-jerk: tapping the patellar tendon stretches the quadriceps → muscle spindle (receptor) → sensory neurone to the spinal cord → motor neurone directly back → quadriceps contracts (effector); the knee extends",
        "Reflexes are involuntary, rapid and do not involve the brain (spinal cord only)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Topic A, items 12–14:" },
      { k: "bul", items: [
        "12. Hormonal Coordination — (a) animal hormones: site of secretion, functions and effects of over- and under-secretion; (b) plant hormones",
        "13. Nervous Coordination — (a) central nervous system: components; parts of the brain and their functions (cerebrum, cerebellum, medulla oblongata, hypothalamus); structure and function of the spinal cord; (b) peripheral nervous system: somatic; autonomic; structure and functions of the neurone; classification of neurones; (c) types of nervous actions: the reflex arc; reflex and voluntary actions; differences between them; conditioned reflex and its role in behaviour",
        "14. Sense Organs — structure and function of the eye and the ear"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "Endocrine glands: pituitary, thyroid, adrenal, pancreas, gonads and their secretions; the stages in the metamorphosis of the toad and the role of thyroxine.",
        "Plant hormones: effects of auxins on lateral bud development, leaf fall and initiation of adventitious roots; reference to crop harvesting, growth and weed control.",
        "Locate the brain and spinal cord in a dissected vertebrate and identify the various regions of the brain; functions of the sympathetic and parasympathetic systems only.",
        "Observe, draw and label a neurone from a slide; afferent (sensory), efferent (motor) and intermediate neurones.",
        "Experiments illustrating reflex actions: blinking of the eyes, knee jerk, withdrawal of hand from hot objects; enumerate conditioned reflexes: salivation, driving a car, walking and swimming.",
        "Examine the mammalian eye, noting the shape, colour and positions of the optic muscle and optic nerve; eye defects and their corrections.",
        "The ear: structure and function (the syllabus lists eye and ear as the sense organs for this topic)."
      ] }
    ]
  },
  /* =============== A8 · REPRODUCTION =============== */
  {
    grade: 12, sem: "One", icon: "🌸", period: "A8",
    title: "Reproduction in Animals and Plants",
    subtitle: "Mammalian reproduction · metamorphosis · reproduction in fish, amphibians, reptiles, birds · flowering plants · pollination · fruits and seeds · dispersal",
    note: "Sexual reproduction across the animal groups and in flowering plants: the reproductive systems, metamorphosis, pollination (types, agents, features), the development of the zygote, fruit classification, and seed dispersal.",
    objectives: [
      "Describe the structure and function of the male and female mammalian reproductive systems and the structure of the sperm and ovum",
      "Explain fertilization, development of the embryo and birth, and the methods of birth control",
      "Describe metamorphosis in insects using the life histories of the butterfly and cockroach",
      "Compare reproduction in fish, amphibian, reptile, bird and mammal",
      "Describe the floral parts of insect- and wind-pollinated flowers, types of pollination, agents, and placentation",
      "Classify fruits (dry and fleshy), describe their structure, and explain the agents of dispersal"
    ],
    terms: [
      { t: "Gametes", d: "The reproductive cells — sperm (male) and ovum (female) — formed by meiosis (gametogenesis).", x: "Human sperm is motile; the ovum is non-motile" },
      { t: "Fertilization", d: "The fusion of male and female gametes to form a zygote.", x: "In mammals: in the fallopian tube (oviduct)" },
      { t: "Metamorphosis", d: "A change in form from larva to adult; complete (egg → larva → pupa → adult, e.g. butterfly) or incomplete (egg → nymph → adult, e.g. cockroach).", x: "The butterfly has complete metamorphosis" },
      { t: "Pollination", d: "The transfer of pollen grains from the anther to the stigma; self (within the same flower/plant) or cross (between flowers).", x: "Insect-pollinated flowers are coloured, fragrant, with nectar" },
      { t: "Placentation", d: "The arrangement of ovules on the placenta of the ovary — axile, marginal, parietal, etc.", x: "Axile placentation in okra" },
      { t: "Dry fruit", d: "A fruit with a dry pericarp at maturity, e.g. the achene (sunflower), the legume/pod (bean).", x: "Sunflower seed (achene)" },
      { t: "Fleshy fruit", d: "A fruit with a soft, fleshy pericarp, e.g. orange, tomato, mango.", x: "The orange — a hesperidium" },
      { t: "Seed dispersal", d: "The scattering of seeds away from the parent plant — by wind, water, animals and explosion.", x: "Coconut disperses by water; Bidens by animals" }
    ],
    tf: [
      { s: "The period it takes an organism to develop from egg to adult should be studied in the life history of insects.", a: "True", why: "The period it takes to develop from egg to adult should be studied; the different stages in the life history of butterfly and cockroach should be drawn and labelled." },
      { s: "A seed is the same thing as a fruit.", a: "False", why: "Distinguishing differences between a fruit and a seed should be mentioned." },
      { s: "The features of the flower should be related to the agents of pollination.", a: "True", why: "The features of the flower should be related to the agents of pollination." }
    ],
    mcq: [
      { q: "Fertilization in mammals normally takes place in the:", o: ["uterus", "fallopian tube (oviduct)", "vagina", "ovary"], a: 1, why: "The sperm meets the ovum in the fallopian tube." },
      { q: "Which insect shows complete metamorphosis?", o: ["cockroach", "butterfly", "grasshopper", "termite"], a: 1, why: "Butterfly: egg → larva (caterpillar) → pupa → adult." },
      { q: "A flower with bright colours, a sweet scent and nectar is most likely pollinated by:", o: ["wind", "insects", "water", "explosion"], a: 1, why: "Bright colour, scent and nectar attract insect pollinators." },
      { q: "Wind-pollinated flowers typically have:", o: ["large showy petals", "small, dull flowers with large, light pollen grains", "strong scent", "much nectar"], a: 1, why: "Wind pollination needs light, dry pollen released in quantity; no need to attract animals." },
      { q: "The coconut is dispersed by:", o: ["wind", "water", "animals", "explosion"], a: 1, why: "The fibrous husk floats — water dispersal." },
      { q: "The bilobed structure that receives the pollen grain on the carpel is the:", o: ["anther", "stigma", "style", "ovule"], a: 1, why: "Pollen lands on the sticky stigma, germinates down the style." },
      { q: "An achene (e.g. sunflower 'seed') is a type of:", o: ["fleshy fruit", "dry fruit", "berry", "drupe"], a: 1, why: "The achene is a dry, one-seeded fruit." },
      { q: "Which of the following is a method of birth control?", o: ["ovulation", "fertilization", "the use of contraceptives", "implantation only"], a: 2, why: "Explanation of the different methods of birth control is required." }
    ],
    essay: [
      { q: "Describe the structure and function of the male and female mammalian reproductive systems, and explain the stages of development from fertilization to birth.", marks: 12, outline: [
        "Male: testes (sperm production and testosterone), epididymis, vas deferens, accessory glands, urethra, penis",
        "Female: ovaries (ovum + hormones), oviducts/fallopian tubes (fertilization), uterus (implantation and foetal development), vagina",
        "Sperm: head (nucleus), mid-piece (mitochondria), tail; ovum: large food reserve (yolk) with a protective membrane",
        "Development: fertilization in the oviduct → zygote divides (mitosis) → morula → blastula → implantation in the uterine wall → embryo (placenta, umbilical cord, amnion) → foetus → birth (parturition)"
      ] },
      { q: "Compare insect-pollinated and wind-pollinated flowers, giving two features of each and a named example of each.", marks: 10, outline: [
        "Insect-pollinated: large, brightly coloured petals; sweet scent; nectar; pollen sticky and spiny; e.g. Hibiscus/maize is NOT — use e.g. the poinciana or okra flower",
        "Wind-pollinated: small, dull, no nectar or scent; exposed anthers producing large quantities of light, smooth pollen; feathery stigmas; e.g. grasses, maize (tassels)",
        "Self vs cross pollination; features that favour each (hermaphrodite flowers, dichogamy, etc.)"
      ] },
      { q: "Distinguish between a dry fruit and a fleshy fruit, and explain how the following are dispersed: sunflower (achene), cotton, coconut and Bidens.", marks: 10, outline: [
        "Dry fruit: pericarp hardens/dries at maturity (achene, legume, capsule); fleshy fruit: pericarp soft and juicy (berry, drupe, hesperidium)",
        "Sunflower achene — wind or animals (attached to feathers/hair)",
        "Cotton — the fluffy fibres catch the wind (and are harvested)",
        "Coconut — water (the fibrous husc is buoyant)",
        "Bidens — hooks on the burrs cling to animal fur or human clothes (zoochory)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Topic A, item 15 (Reproductive System):" },
      { k: "bul", items: [
        "(a) Reproductive system of mammals — structure and function of male and female systems; differences between male and female organs; structure of the gametes (sperm and ovum); fertilization, development of the embryo and birth; birth control",
        "(b) Metamorphosis in insects — life histories of butterfly and cockroach",
        "(c) Comparison of reproduction in fish, amphibian, reptile, bird and mammal",
        "(d) Reproduction in flowering plants — arrangements of floral parts of a named insect-pollinated and a named wind-pollinated flower; structure and function of the male and female parts",
        "(e) Pollination in plants — types; features of cross- and self-pollinated flowers; agents; kinds of placentation (axile, marginal, parietal); development of the zygote: fertilization; types of fruits (classification); structure of fruits",
        "(h) Dispersal of fruits and seeds — agents of dispersal"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "Examine dissected male and female small mammals showing the reproductive organs; draw sperm and ovum from prepared slides; explanation of the different methods of birth control.",
        "Metamorphosis: complete and incomplete; period from egg to adult; stages in the life history of butterfly and cockroach drawn and labelled; method of fertilization, number of eggs and parental care.",
        "Flowers: named examples for the types of pollination; features related to the agents; pollen grains germinated in sucrose solution observed; slides/charts of embryo development observed and drawn.",
        "Fruits: dry and fleshy; internal structure of a leguminous fruit, orange, maize and tomato examined and drawn; dispersal examples — sunflower (achene), Combretum, cotton, Crotalaria/bean, Desmodium, Bidens, Tridax and coconut.",
        "Distinguishing differences between a fruit and a seed should be mentioned."
      ] }
    ]
  },
  /* =============== A9 · PLANT & ANIMAL NUTRITION =============== */
  {
    grade: 12, sem: "One", icon: "🥗", period: "A9",
    title: "Plant and Animal Nutrition",
    subtitle: "Photosynthesis · mineral nutrition · food substances and balanced diet · food tests · enzymes · alimentary system · dental formula",
    note: "Topic B of Section A: how plants make and obtain their food (photosynthesis, mineral nutrition) and how animals obtain and digest food (balanced diet, food tests, enzymes, the alimentary tract, dentition).",
    objectives: [
      "Explain the process of photosynthesis with its chemical equation, the light and dark reactions, and the materials and conditions required",
      "List the macro- and micro-nutrients of plants and their sources (soil and atmosphere)",
      "Classify food substances with local sources, and explain the importance of a balanced diet and the effects of malnutrition",
      "Carry out tests for starch, reducing sugar, protein, fat and oil, and the action of ptyalin on starch",
      "State the source, site of action, substrate and effect of each digestive enzyme, and demonstrate the characteristics of enzymes (pH, temperature, concentration)",
      "Describe the alimentary tract and dental formulae of herbivores, carnivores and humans"
    ],
    terms: [
      { t: "Photosynthesis", d: "The process by which green plants make food (glucose) from carbon dioxide and water using light energy and chlorophyll: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.", x: "The test for starch in a leaf" },
      { t: "Light reaction", d: "The photochemical stage: photoactivation of chlorophyll converts light energy to ATP and reduces NADP.", x: "Occurs in the grana of the chloroplast" },
      { t: "Dark reaction (Krebs-type fixation)", d: "The enzyme-driven fixation of CO₂ into sugars using ATP and reduced NADP; does not need light directly.", x: "Occurs in the stroma" },
      { t: "Macro-nutrients", d: "Mineral elements needed in large quantities: carbon, hydrogen, oxygen, nitrogen, potassium, phosphorus, magnesium, sulphur, calcium, iron.", x: "Nitrogen for protein synthesis" },
      { t: "Micro-nutrients", d: "Mineral elements needed in trace quantities: copper, manganese, zinc, boron.", x: "Zinc in carbonic anhydrase" },
      { t: "Balanced diet", d: "A diet containing all classes of food (carbohydrates, proteins, fats, vitamins, minerals, water, roughage) in the right proportions.", x: "Rice + beans + vegetables + fruit" },
      { t: "Enzyme", d: "A biological catalyst (protein) that speeds up digestion; affected by pH, temperature and concentration.", x: "Ptyalin (saliva) acts on cooked starch" },
      { t: "Dental formula", d: "The notation of the number and types of teeth in one half of the jaws: incisors, canine, premolars, molars.", x: "Human adult: 2.1.2.3 / 2.1.2.3" }
    ],
    tf: [
      { s: "Biochemical detail of photosynthesis is required in the WASSCE syllabus.", a: "False", why: "Biochemical detail is not required — only the photoactivation of chlorophyll converting light energy to ATP and the reduction of NADP are mentioned." },
      { s: "Candidates should distinguish between food produced and mineral elements.", a: "True", why: "Candidates should distinguish between food produced and mineral elements." },
      { s: "The test for starch in green leaves should be carried out by candidates.", a: "True", why: "Test for starch in green leaves should be carried out." }
    ],
    mcq: [
      { q: "The products of photosynthesis are:", o: ["carbon dioxide and water", "glucose and oxygen", "oxygen and carbon", "starch and carbon dioxide"], a: 1, why: "6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂." },
      { q: "Which of the following is a micro-nutrient for plants?", o: ["nitrogen", "phosphorus", "zinc", "potassium"], a: 2, why: "Micro-elements: copper, manganese, zinc, boron." },
      { q: "The food test for starch uses:", o: ["Benedict's solution", "iodine solution", "sodium hydroxide", "litmus"], a: 1, why: "Iodine turns blue-black in the presence of starch." },
      { q: "Ptyalin in saliva changes cooked starch to:", o: ["glucose (reducing sugar)", "fat", "protein", "cellulose"], a: 0, why: "Experiments show ptyalin changes cooked starch to reducing sugar (maltose)." },
      { q: "The enzyme pepsin digests:", o: ["starch", "fat", "protein", "cellulose"], a: 2, why: "Pepsin (stomach) digests proteins; trypsin continues in the ileum." },
      { q: "A balanced diet must include all of the following EXCEPT:", o: ["carbohydrates", "proteins", "vitamins", "chlorophyll"], a: 3, why: "Humans do not need chlorophyll — the food classes are carbs, proteins, fats, vitamins, minerals, water, fibre." },
      { q: "The adult human dental formula is:", o: ["2.1.2.3 / 2.1.2.3", "3.1.4.2 / 3.1.4.2", "2.0.3.3 / 2.0.3.3", "1.1.2.3 / 1.1.2.3"], a: 0, why: "Incisors 2, canine 1, premolars 2, molars 3 in each half of each jaw." },
      { q: "Rice and beans together provide a complete protein because they:", o: ["contain more calories", "supply the amino acids each lacks in the other", "are both vegetables", "digest faster"], a: 1, why: "Cereals are low in lysine; beans are rich in lysine — complementary proteins." }
    ],
    essay: [
      { q: "State the chemical equation for photosynthesis and list the materials and conditions necessary for it. Describe an experiment to show that light is necessary for photosynthesis.", marks: 12, outline: [
        "Equation: 6CO₂ + 6H₂O --light, chlorophyll--> C₆H₁₂O₆ + 6O₂",
        "Materials: carbon dioxide, water; conditions: light, chlorophyll (and suitable temperature)",
        "Experiment: destarch a leaf in darkness; cover part with black paper; expose to sunlight; test with iodine — exposed part blue-black (starch), covered part brown (no starch)",
        "Conclusion: starch is formed only where light reached the leaf"
      ] },
      { q: "Explain what is meant by a balanced diet, state the importance of each class of food, and describe the tests for starch, reducing sugar, protein and fat.", marks: 10, outline: [
        "Balanced diet: all food classes in the right proportions for the body's needs; relate to the candidate's own diet; malnutrition (kwashiorkor, marasmus, goitre, beriberi, scurvy, rickets) and its effects",
        "Carbohydrates — energy; proteins — growth and repair; fats — energy, insulation; vitamins — co-enzymes/prevention of deficiency; minerals — bones, blood (haemoglobin); water — solvent/transport; roughage — peristalsis",
        "Tests: starch — iodine (blue-black); reducing sugar — Benedict's solution, warm (brick-red precipitate); protein — Biuret (purple); fat — emulsion test (permanent milky emulsion) or paper-stain test"
      ] },
      { q: "Compare the alimentary tracts of a herbivore (e.g. goat/cow) and a carnivore (e.g. cat), and explain how the modifications suit their feeding habits.", marks: 10, outline: [
        "Herbivore: long alimentary canal; large cecum for cellulose digestion (symbiotic bacteria); flat, molar-like teeth for grinding; no canines (diastema)",
        "Carnivore: shorter canal; well-developed cecum reduced; sharp carnassial teeth and canines for tearing; strong jaws",
        "Human: omnivorous dentition (incisors for cutting, canines for tearing, premolars/molars for grinding); dental care",
        "Modification of parts of the alimentary canal reflects digestive function (e.g. villi in the ileum for absorption)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Topic B (Plant and Animal Nutrition):" },
      { k: "bul", items: [
        "1. Plant Nutrition — (a) photosynthesis: process and chemical equation; light and dark reactions; materials and conditions; evidence; (b) mineral requirement: macro- and micro-nutrients; soil and atmosphere as sources",
        "2. Animal Nutrition — food substances: classes and sources; balanced diet and its importance; food tests; digestive enzymes: classes, characteristics and functions; modes of nutrition (autotrophic, heterotrophic: holozoic, parasitic, symbiotic, saprophytic); alimentary system of different animals; dental formula; feeding in protozoa and mammals"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "Photosynthesis: biochemical nature — photoactivation of chlorophyll converting light energy to ATP and reduction of NADP (biochemical detail NOT required); translocation and storage of excess food; test for starch in green leaves; fate of the products.",
        "Macro-elements: carbon, hydrogen, oxygen, nitrogen, potassium, phosphorus, magnesium, sulphur, calcium, iron; micro-elements: copper, manganese, zinc, boron. Distinguish food produced from mineral elements.",
        "Local examples as food sources; food relationships between plants and animals; importance of each class in a balanced diet; relate to the candidate's own diet; malnutrition and its effects.",
        "Tests for starch, reducing sugar, protein, fat and oil; ptyalin on cooked starch; source, site, substrate and effect of each digestive enzyme; experiments on enzyme characteristics (pH, temperature, concentration).",
        "Named examples for the modes of nutrition; comparison using a dissected bird and mammal; description and functions of parts of the alimentary canal and their modifications; meaning of dental formula; determination for mammals; arrangements in herbivores, carnivores and humans; dental care.",
        "Feeding habits in protozoa and mammals."
      ] }
    ]
  }
  ]
};
window.WA_SUBJECTS.bio = window.WA_bio;
