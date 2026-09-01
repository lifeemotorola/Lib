/* WASSCE (WAEC) — CHEMISTRY course data: 12 units covering the Section A
   (common) syllabus, the LIBERIA-specific Section C (non-metals, metals),
   and the practical skills of Paper 3. */
window.WA_ch = {
  id: "ch",
  name: "Chemistry",
  preamble: "This syllabus is drawn purposely for examination, hence the topics are not necessarily arranged in the order in which they should be taught. The following assumptions were made in drawing of the syllabus: that candidates must have covered the Integrated Science/Basic Science or General Science and Mathematics syllabuses at the Junior Secondary School (JSS)/Junior High School (J.H.S) level; that candidates would carry out as many of the suggested activities and project work as possible, and consequently develop the intended competencies and skills as spelt out in the relevant Chemistry teaching syllabuses; that schools which offer the subject have well-equipped laboratories. Note: Candidates are required to have the knowledge of the significant figures, S.I. units and the conventional/IUPAC system of nomenclature.",
  aims: [
    "understanding of basic chemistry concepts;",
    "level of acquisition of laboratory skills including awareness of hazards and safety measures;",
    "level of awareness of the inter-relationship between chemistry and other disciplines;",
    "level of awareness of the linkage between chemistry and industry/environment/everyday life in terms of benefits and hazards;",
    "skills of critical and logical thinking."
  ],
  papers: [
    { n: "Paper 1", d: "Fifty multiple-choice objective questions drawn from Section A of the syllabus (the portion common to all candidates). Candidates answer ALL the questions within 1 hour for 50 marks." },
    { n: "Paper 2", d: "A 2-hour essay paper covering the entire syllabus, 100 marks, in two sections. Section A: ten short structured questions from the common portion (Section A of the syllabus) — answer ALL for 25 marks. Section B: two questions from the common portion and two from the section peculiar to the candidate's country (Section B or C) — answer ANY THREE; each carries 25 marks. Paper 1 and Paper 2 are a composite paper taken at one sitting." },
    { n: "Paper 3", d: "A 2-hour practical test for school candidates (1 hour 30 minutes alternative-to-practical for private candidates): three COMPULSORY questions for 50 marks — one on quantitative analysis, one on qualitative analysis, and a third testing familiarity with the practical activities in the teaching syllabuses." }
  ],
  units: [
  /* =============== C1 · INTRODUCTION TO CHEMISTRY =============== */
  {
    grade: 12, sem: "One", icon: "⚖️", period: "C1",
    title: "Introduction to Chemistry",
    subtitle: "Measurement of physical quantities · S.I. units · significant figures · precision and accuracy · the scientific method",
    note: "Section A, Topics 1–2: measurement of physical quantities and their importance in chemistry, and an outline of the scientific method.",
    objectives: [
      "Measure mass, length, time, temperature and volume using appropriate instruments",
      "State the appropriate S.I. units and apply the rules of significant figures",
      "Distinguish precision from accuracy in measurement",
      "Outline the scientific method: observation, hypothesis, experimentation, formulation of laws and theories"
    ],
    terms: [
      { t: "S.I. unit", d: "The Systeme International unit — the standard unit of measurement in science (metre, kilogram, second, kelvin, mole, ampere, candela).", x: "Volume in m³ (or dm³/cm³); temperature in K" },
      { t: "Significant figures", d: "The meaningful digits in a measured or calculated quantity, including zeros that are known.", x: "0.00450 g has three significant figures" },
      { t: "Precision", d: "The closeness of repeated measurements to one another (reproducibility).", x: "Four readings 10.1, 10.2, 10.1, 10.2 cm — precise" },
      { t: "Accuracy", d: "The closeness of a measurement to the true value.", x: "A reading of 10.0 cm when the true length is 10.0 cm — accurate" },
      { t: "Hypothesis", d: "A temporary explanation of an observation, tested by experimentation.", x: "\"Iron rusts because of water and air\"" },
      { t: "Law / Theory", d: "A law summarizes observed regularities; a theory explains the law and links related observations.", x: "The law of conservation of mass" }
    ],
    tf: [
      { s: "Candidates are required to have the knowledge of significant figures, S.I. units and the IUPAC system of nomenclature.", a: "True", why: "This is a stated note of the syllabus." },
      { s: "Precision means closeness of a reading to the true value.", a: "False", why: "Precision = closeness of repeated readings to each other; accuracy = closeness to the true value." },
      { s: "The scientific method includes observation, hypothesis, experimentation, and formulation of laws and theories.", a: "True", why: "Outline the scientific method to include: observation, hypothesis, experimentation, formulation of laws and theories." }
    ],
    mcq: [
      { q: "The S.I. unit of temperature is the:", o: ["degree Celsius", "kelvin", "fahrenheit", "joule"], a: 1, why: "The S.I. unit of temperature is the kelvin (K)." },
      { q: "Which of the following measurements has THREE significant figures?", o: ["100 g", "0.00500 g", "1.0 g", "9999 g"], a: 1, why: "Leading zeros do not count; 0.00500 has three significant figures (5, 0, 0)." },
      { q: "Four repeated measurements of a length: 12.01, 12.02, 12.01, 12.03 cm. The results are described as:", o: ["accurate only", "precise", "neither", "certain"], a: 1, why: "The readings agree closely with each other — precision." },
      { q: "The instrument used to measure a mass in the chemistry laboratory is the:", o: ["measuring cylinder", "top-pan balance", "thermometer", "pipette"], a: 1, why: "Mass is measured with a balance." },
      { q: "In the scientific method, the step that comes AFTER forming a hypothesis is:", o: ["conclusion", "experimentation", "formulating a law", "publication"], a: 1, why: "Observation → hypothesis → experimentation → laws/theories." },
      { q: "A statement that summarizes observed regularities (e.g. mass is conserved) is a:", o: ["hypothesis", "theory", "law", "postulate"], a: 2, why: "Laws summarize; theories explain." },
      { q: "The volume of a liquid in the laboratory is most accurately measured with a:", o: ["beaker", "measuring cylinder", "flask", "test tube"], a: 1, why: "A measuring cylinder gives a readable meniscus; volumetric glassware is even more precise." }
    ],
    essay: [
      { q: "Explain the terms: (a) precision, (b) accuracy, (c) significant figures, (d) hypothesis. (e) State the S.I. units of mass, length, time, temperature and volume.", marks: 10, outline: [
        "(a) Precision — closeness of repeated measurements to one another",
        "(b) Accuracy — closeness of a measurement to the true value",
        "(c) Significant figures — the meaningful digits in a quantity; rules for zeros",
        "(d) Hypothesis — a testable, temporary explanation of an observation",
        "(e) Mass — kilogram (kg); length — metre (m); time — second (s); temperature — kelvin (K); volume — cubic metre (m³), or dm³ (litre) in the laboratory"
      ] },
      { q: "Outline the steps of the scientific method and illustrate each step with a simple example from everyday experience or the chemistry laboratory.", marks: 10, outline: [
        "Observation — noticing a fact (e.g. iron left in air develops a reddish-brown layer)",
        "Hypothesis — a proposed explanation (rusting needs water and air)",
        "Experimentation — controlled tests (dry iron, iron in boiled water, iron in air + water)",
        "Formulation of laws — statements of regularities (e.g. rusting requires both water and oxygen)",
        "Theories — explanations linking observations (rusting is an oxidation reaction)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Topic 1 (Introduction to Chemistry):" },
      { k: "bul", items: [
        "(i) Measurement of physical quantities",
        "(ii) Scientific measurements and their importance in chemistry"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "Measurement of mass, length, time, temperature and volume.",
        "Appropriate S.I. units and significant figures.",
        "Precision and accuracy in measurement.",
        "Outline the scientific method to include: observation, hypothesis, experimentation, formulation of laws and theories."
      ] }
    ]
  },
  /* =============== C2 · STRUCTURE OF THE ATOM =============== */
  {
    grade: 12, sem: "One", icon: "⚛️", period: "C2",
    title: "Structure of the Atom",
    subtitle: "Atomic number · isotopes · Rutherford, Thomson and Bohr · electron configuration (s, p, d) · relative atomic/molecular mass",
    note: "Section A, Topic 3: gross features of the atom, the experimental discoveries, electron configurations of the first thirty elements, and relative masses on the carbon-12 scale.",
    objectives: [
      "Define atomic number, mass number, neutron and isotope, and use symbols to represent atoms and sub-atomic particles",
      "Give a short account of Dalton's atomic theory (with limitations), J.J. Thomson's experiment and Bohr's model, and outline Rutherford's alpha-scattering experiment",
      "Write detailed (s, p, d) electron configurations for the first thirty elements, applying the Aufbau principle, Hund's rule and the Pauli exclusion principle",
      "Define atomic mass unit, relative atomic mass (Ar) and relative molecular mass (Mr) on the carbon-12 scale, and compute the relative mass of chlorine from its isotopes"
    ],
    terms: [
      { t: "Atomic (proton) number", d: "The number of protons in the nucleus — it defines the element.", x: "Sodium: Z = 11" },
      { t: "Mass number", d: "Protons + neutrons (nucleons) in the nucleus.", x: "⁷⁹Br: A = 79" },
      { t: "Isotope", d: "Atoms of the same element with the same proton number but different neutron numbers (different mass numbers).", x: "¹H, ²H (deuterium), ³H (tritium)" },
      { t: "Rutherford's experiment", d: "Alpha particles fired at gold foil: most passed through, a few were deflected, a very few bounced back — showing a small, dense, positive nucleus.", x: "The nucleus is about 10⁻¹⁴ m vs atom 10⁻¹⁰ m" },
      { t: "Aufbau principle", d: "Electrons fill orbitals in order of increasing energy (1s, 2s, 2p, 3s, 3p, 4s, 3d…).", x: "K: 1s²2s²2p⁶3s¹" },
      { t: "Hund's rule", d: "Maximum multiplicity — electrons occupy degenerate orbitals singly with parallel spins before pairing.", x: "Carbon: 2p³ with three unpaired electrons" },
      { t: "Pauli exclusion principle", d: "No two electrons in an atom can have the same set of four quantum numbers; an orbital holds at most two electrons of opposite spin.", x: "The s orbital holds 2, the p set 6, the d set 10" },
      { t: "Atomic mass unit (amu)", d: "One twelve-th of the mass of a carbon-12 atom; the basis of the relative mass scale.", x: "¹²C = exactly 12 amu" },
      { t: "Relative atomic mass (Ar)", d: "The weighted average mass of the isotopes of an element, relative to ¹/₁₂ of ¹²C.", x: "Cl: 35 (75%) and 37 (25%) → Ar = 35.5" },
      { t: "Relative molecular mass (Mr)", d: "The weighted average mass of a molecule relative to ¹/₁₂ of ¹²C; the sum of the Ar of the atoms.", x: "H₂O: Mr = 18" }
    ],
    tf: [
      { s: "In Rutherford's experiment, MOST alpha particles were deflected through large angles.", a: "False", why: "MOST passed straight through (atom is mostly empty space); a few were deflected; a very few rebounded." },
      { s: "The relative atomic mass of an element is the weighted average mass of its isotopes.", a: "True", why: "Calculation of relative mass of chlorine should be used as an example." },
      { s: "The shapes of d orbitals are required in the WASSCE syllabus.", a: "False", why: "Shapes of s and p orbitals only." }
    ],
    mcq: [
      { q: "The isotope ³¹P (mass number 31, proton number 15) contains:", o: ["15 neutrons", "16 neutrons", "31 neutrons", "46 neutrons"], a: 1, why: "Neutrons = A − Z = 31 − 15 = 16." },
      { q: "The electron configuration of sodium (Z = 11) is:", o: ["1s²2s²2p⁶", "1s²2s²2p⁶3s¹", "1s²2s²2p⁵3s²", "1s²2s²2p⁶3s²"], a: 1, why: "Eleven electrons: 2 + 8 + 1." },
      { q: "The rule that electrons fill degenerate orbitals singly before pairing is:", o: ["the Aufbau principle", "Hund's rule of maximum multiplicity", "the Pauli exclusion principle", "the octet rule"], a: 1, why: "Hund's rule — maximum multiplicity." },
      { q: "Chlorine has two isotopes, ³⁵Cl (75%) and ³⁷Cl (25%). Its relative atomic mass is:", o: ["35", "35.5", "36", "37"], a: 1, why: "(75 × 35 + 25 × 37)/100 = 35.5." },
      { q: "Which discovery led Rutherford to propose the nuclear model of the atom?", o: ["cathode rays", "alpha-particle scattering on gold foil", "the photoelectric effect", "X-ray diffraction"], a: 1, why: "The alpha-scattering experiment established the small, dense, positive nucleus." },
      { q: "The maximum number of electrons in the d sub-shell is:", o: ["2", "6", "10", "14"], a: 2, why: "The five d orbitals hold 2 each → 10." },
      { q: "The relative molecular mass of carbon dioxide (C = 12, O = 16) is:", o: ["28", "44", "32", "16"], a: 1, why: "12 + 2(16) = 44." }
    ],
    essay: [
      { q: "Describe Rutherford's alpha-scattering experiment and deduce the conclusions that led to the nuclear model of the atom.", marks: 10, outline: [
        "A thin gold foil was bombarded with alpha particles from a radioactive source; a zinc-sulphide screen showed scintillations",
        "Observations: most alpha particles passed straight through; a small fraction were deflected through various angles; a very few (about 1 in 20,000) rebounded",
        "Conclusions: the atom is mostly empty space; the positive charge and nearly all the mass are concentrated in a tiny central nucleus; electrons surround it",
        "Limitations: it could not account for atomic spectra — Bohr's quantized orbits followed"
      ] },
      { q: "(a) State the Aufbau principle, Hund's rule of maximum multiplicity and the Pauli exclusion principle. (b) Write the detailed electron configurations of magnesium (12) and phosphorus (15). (c) Define atomic mass unit and calculate the relative atomic mass of chlorine (³⁵Cl 75%, ³⁷Cl 25%).", marks: 12, outline: [
        "(a) Aufbau — electrons occupy the lowest energy orbital available; Hund — degenerate orbitals are singly occupied with parallel spins before pairing; Pauli — no two electrons in an atom share all four quantum numbers (an orbital holds at most 2, opposite spin)",
        "(b) Mg: 1s² 2s² 2p⁶ 3s²; P: 1s² 2s² 2p⁶ 3s² 3p³",
        "(c) amu = 1/12 the mass of a carbon-12 atom; Ar(Cl) = (75×35 + 25×37)/100 = 35.5"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Topic 3 (Structure of the Atom):" },
      { k: "bul", items: [
        "Gross features of the atom: (i) atomic number/proton number, number of neutrons, isotopes, atomic mass, mass number; (ii) relative atomic mass (Ar) and relative molecular mass (Mr) based on the carbon-12 scale; (iii) characteristics and nature of matter",
        "Electron configuration: (i) electron configuration; (ii) orbitals; (iii) rules and principles for filling in electrons"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "Short account of Dalton's atomic theory and limitations, J.J. Thomson's experiment and Bohr's model of the atom.",
        "Outline description of Rutherford's alpha-scattering experiment to establish the structure of the atom.",
        "Meaning and representation in symbols of atoms and sub-atomic particles.",
        "Atomic mass as the weighted average mass of isotopes; calculation of the relative mass of chlorine should be used as an example; carbon-12 scale as a unit of measurement; definition of atomic mass unit.",
        "Atoms, molecules and ions; definition of particles and treatment of particles as building blocks of matter; explain physical and chemical changes with examples (physical: melting of solids, magnetization of iron, dissolution of salt; chemical: burning of wood, rusting of iron, decay of leaves).",
        "Detailed electron configurations (s, p, d) for atoms of the first thirty elements.",
        "Origin of s, p and d orbitals as sub-energy levels; shapes of s and p orbitals only.",
        "Aufbau Principle, Hund's Rule of Maximum Multiplicity and Pauli Exclusion Principle; abbreviated and detailed electron configuration in terms of s, p, and d."
      ] }
    ]
  },
  /* =============== C3 · SEPARATION TECHNIQUES FOR MIXTURES =============== */
  {
    grade: 12, sem: "One", icon: "🧪", period: "C3",
    title: "Standard Separation Techniques for Mixtures",
    subtitle: "Classification of mixtures · crystallization · distillation · precipitation · magnetization · chromatography · sublimation · criteria for purity",
    note: "Section A, Topic 4: mixtures, the standard laboratory separation techniques, and how purity is judged (boiling point, melting point).",
    objectives: [
      "Classify mixtures (homogeneous and heterogeneous; solutions, suspensions, colloids)",
      "Choose and describe the appropriate separation technique for solid-solid, solid-liquid, liquid-liquid and gas-gas mixtures",
      "Explain crystallization, distillation (simple and fractional), precipitation, magnetization, chromatography and sublimation with examples",
      "State the criteria for purity: boiling point for liquids and melting point for solids"
    ],
    terms: [
      { t: "Mixture", d: "Two or more substances physically combined; a homogeneous mixture has uniform composition (solution), a heterogeneous mixture does not.", x: "Salt in water (homogeneous); sand and iron (heterogeneous)" },
      { t: "Crystallization", d: "Obtaining pure solid from a saturated solution by evaporation and cooling.", x: "Copper(II) sulphate crystals" },
      { t: "Distillation", d: "Separating a liquid from a dissolved solid (simple) or two miscible liquids with different boiling points (fractional) by evaporation and condensation.", x: "Distillation of water; separation of ethanol and water" },
      { t: "Sublimation", d: "A solid passing directly to vapour on heating and re-depositing; used to separate a sublimate from a non-sublimate.", x: "Ammonium chloride; iodine; camphor" },
      { t: "Chromatography", d: "Separation of components by differential movement through a stationary phase under a moving (mobile) phase.", x: "Ink, dyes, plant pigments on paper" },
      { t: "Precipitation", d: "Removing an insoluble solid (precipitate) from a solution by filtration.", x: "Copper(II) hydroxide from copper(II) salt + NaOH" },
      { t: "Purity criteria", d: "A pure liquid boils at a fixed temperature; a pure solid melts at a fixed temperature.", x: "Pure water boils at 100°C at 1 atm; a mixture of liquids gives a range" },
      { t: "Magnetization", d: "Separation using a magnet to attract magnetic components.", x: "Iron filings from sand" }
    ],
    tf: [
      { s: "Boiling point for liquids and melting point for solids are the criteria for purity.", a: "True", why: "Criteria for purity: boiling point for liquids and melting point for solids." },
      { s: "Chromatography separates components of a mixture on a stationary phase with a moving solvent.", a: "True", why: "Techniques include crystallization, distillation, precipitation, magnetization, chromatography, sublimation etc." },
      { s: "A solution is a heterogeneous mixture.", a: "False", why: "A solution is a homogeneous mixture." }
    ],
    mcq: [
      { q: "Iron filings mixed with sand are best separated by:", o: ["distillation", "filtration", "using a magnet", "chromatography"], a: 2, why: "Iron is magnetic; sand is not." },
      { q: "A solid that turns directly into vapour on heating (e.g. ammonium chloride) undergoes:", o: ["evaporation", "sublimation", "melting", "condensation"], a: 1, why: "Solid → gas without a liquid stage: sublimation." },
      { q: "The technique that separates the coloured components of ink is:", o: ["filtration", "chromatography", "distillation", "crystallization"], a: 1, why: "Differential movement of dyes on paper chromatography." },
      { q: "Pure water, when heated, boils at:", o: ["a range of temperatures", "100°C at 1 atm", "80°C at 1 atm", "120°C"], a: 1, why: "A pure liquid has a fixed boiling point — a criterion of purity." },
      { q: "Separating ethanol from water (two miscible liquids, different boiling points) uses:", o: ["simple distillation", "fractional distillation", "filtration", "crystallization"], a: 1, why: "Fractional distillation for miscible liquids with different boiling points." },
      { q: "An insoluble solid is removed from a liquid by:", o: ["distillation", "filtration (precipitation)", "chromatography", "sublimation"], a: 1, why: "Precipitate + liquid → filtration." },
      { q: "Pure copper(II) sulphate is obtained from its solution by:", o: ["evaporating to dryness", "crystallization (evaporate, cool, filter)", "boiling", "freezing"], a: 1, why: "Crystallization avoids decomposition by overheating." }
    ],
    essay: [
      { q: "Describe, with a labelled diagram, how you would obtain pure, dry salt crystals from sea water, naming each separation technique used.", marks: 10, outline: [
        "Filter the sea water to remove suspended sand/sediment (precipitation/filtration)",
        "Evaporate the filtrate to a saturated solution in an evaporating basin",
        "Cool — crystals of sodium chloride form (crystallization)",
        "Filter and wash the crystals; dry between filter papers (or in a desiccator)",
        "Purity check: a pure solid has a fixed melting point; NaCl melts sharply at 801°C"
      ] },
      { q: "Define: (a) homogeneous mixture, (b) sublimation, (c) chromatography. (b) Choose the appropriate separation technique for each: (i) salt from water, (ii) iron filings from sulphur powder, (iii) the dyes in green ink, (iv) ammonium chloride from sodium chloride, (v) two miscible organic liquids with close boiling points.", marks: 10, outline: [
        "(a) Homogeneous mixture — uniform composition throughout, e.g. salt solution",
        "(b) Sublimation — solid → vapour directly on heating, e.g. NH₄Cl, iodine",
        "(c) Chromatography — separation on a stationary phase by a mobile phase",
        "(i) Crystallization (or evaporation); (ii) magnet (iron is magnetic); (iii) paper chromatography; (iv) sublimation (NH₄Cl sublimes, NaCl does not); (v) fractional distillation"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Topic 4 (Standard Separation Techniques for Mixtures):" },
      { k: "bul", items: [
        "Classification of mixtures",
        "Separation techniques",
        "Criteria for purity"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "Solid-solid, solid-liquid, liquid-liquid, gas-gas with examples.",
        "Crystallization, distillation, precipitation, magnetization, chromatography, sublimation etc.",
        "Boiling point for liquids and melting point for solids (criteria for purity)."
      ] }
    ]
  },
  /* =============== C4 · PERIODIC CHEMISTRY =============== */
  {
    grade: 12, sem: "One", icon: "🧾", period: "C4",
    title: "Periodic Chemistry",
    subtitle: "The periodic law · trends across a period and down a group · Na–Ar (period 3) · the halogens · first transition series (Sc–Zn)",
    note: "Section A, Topic 5: periodicity of the elements, the periodic law and trends, the periodic gradation of the third period, the group-seven halogens, and the first transition series 21Sc–30Zn.",
    objectives: [
      "State the periodic law and explain the periodic classification of elements",
      "Identify the categories of elements: metals, semi-metals, non-metals and halogens; alkali metals, alkaline earth metals and transition metals",
      "Describe the periodic gradation of the elements in the third period (Na–Ar): electronic configuration, physical properties and chemical reactivity, metallic → non-metallic character, ionic → covalent bonding",
      "Explain the trends in atomic size, ionic size, ionization energy, electron affinity and electronegativity, accounting for the anomalies of Be, B, O and N",
      "Describe the gradation of the halogens F, Cl, Br, I: physical states, melting/boiling points, variable oxidation states, redox properties, displacement reactions, and reactions with water and alkali",
      "Describe the first transition series 21Sc–30Zn: metallic and magnetic properties, variable oxidation states, coloured compounds, complex formation, catalytic abilities, paramagnetism and hardness; reactivity with air, water and acids compared with the s-block metals"
    ],
    terms: [
      { t: "Periodic law", d: "The properties of the elements are periodic functions of their atomic numbers.", x: "Alkali metals recur at 3, 11, 19, 37…" },
      { t: "Alkali metal", d: "Group 1 metals (Li, Na, K…) — soft, reactive, form +1 ions.", x: "Sodium + water → NaOH + H₂" },
      { t: "Alkaline earth metal", d: "Group 2 metals (Be, Mg, Ca…) — harder than group 1, form +2 ions.", x: "Magnesium" },
      { t: "Ionization energy", d: "The energy needed to remove the outermost electron from a gaseous atom; increases across a period, decreases down a group.", x: "Na → Na⁺ + e⁻" },
      { t: "Electron affinity", d: "The energy change when an electron is added to a gaseous atom; generally becomes more negative across a period.", x: "Cl + e⁻ → Cl⁻ (exothermic)" },
      { t: "Electronegativity", d: "The power of an atom in a bond to attract the shared pair of electrons.", x: "F is the most electronegative" },
      { t: "Halogens", d: "Group 7 elements F, Cl, Br, I — diatomic non-metals, −1 oxidation state, displaced by the more reactive member.", x: "Cl₂ + 2NaBr → 2NaCl + Br₂" },
      { t: "Transition metal", d: "An element with a partially filled d sub-shell — variable oxidation states, coloured compounds, complex ions, catalytic, often paramagnetic.", x: "Fe²⁺/Fe³⁺; Cu²⁺ (blue)" }
    ],
    tf: [
      { s: "The periodic gradation of the elements in the third period runs from sodium (Na) to argon (Ar).", a: "True", why: "Periodic gradation of the elements in the third period (Na – Ar)." },
      { s: "Simple discrepancies in periodic trends should be accounted for with respect to beryllium, boron, oxygen and nitrogen.", a: "True", why: "Simple discrepancies should be accounted for in respect to beryllium, boron, oxygen and nitrogen." },
      { s: "Iodine is a gas at room temperature.", a: "False", why: "The halogens: F and Cl are gases, Br is a liquid, I is a solid at room temperature — a periodic gradation." },
      { s: "The differences and similarities in properties between second- and third-period elements should be stated.", a: "True", why: "Differences and similarities in the properties between the second and the third period elements should be stated." }
    ],
    mcq: [
      { q: "Across period 3 from Na to Ar, the atomic radius:", o: ["increases", "decreases", "stays the same", "first increases then decreases"], a: 1, why: "Nuclear charge increases while the shell stays the same — the radius shrinks." },
      { q: "The first ionization energy generally INCREASES across a period because:", o: ["atomic radius increases", "nuclear charge increases with the same shielding", "shielding increases", "the atom gets larger"], a: 1, why: "More protons, same shell → stronger pull on the valence electron." },
      { q: "Which of the halogens is a liquid at room temperature?", o: ["fluorine", "chlorine", "bromine", "iodine"], a: 2, why: "Br is the only liquid halogen at room temperature." },
      { q: "Chlorine added to a potassium bromide solution produces:", o: ["no reaction", "bromine (KCl + Br₂)", "fluorine", "potassium only"], a: 1, why: "The more reactive halogen displaces the less reactive one: Cl₂ + 2KBr → 2KCl + Br₂." },
      { q: "The oxidation states commonly shown by a transition metal such as iron are:", o: ["fixed at +2 only", "variable (e.g. +2 and +3)", "fixed at +3 only", "zero only"], a: 1, why: "Variable oxidation states are characteristic of transition metals." },
      { q: "Sodium, magnesium and aluminium (period-3 metals) react with dilute acid to give:", o: ["the metal oxide and hydrogen", "the metal salt and hydrogen", "the metal hydroxide only", "no reaction"], a: 1, why: "Metal + acid → salt + hydrogen; reactivity Na > Mg > Al." },
      { q: "The property that explains why CuSO₄ solutions are blue is:", o: ["variable oxidation states of the transition metal (d–d transitions)", "paramagnetism", "catalytic ability", "hardness"], a: 0, why: "Formation of coloured compounds — a feature of transition-metal ions." }
    ],
    essay: [
      { q: "Describe the periodic gradation of the elements in the third period (Na to Ar), with reference to electronic configuration, physical properties, chemical reactivity, and the change from metallic to non-metallic character and from ionic to covalent bonding.", marks: 12, outline: [
        "Configurations: Na 3s¹ → Cl 3s²3p⁵; argon is the noble gas 3s²3p⁶",
        "Physical: melting/boiling points peak at aluminium/silicon then fall (Na low, Si highest, Ar lowest); density rises",
        "Reactivity: metals Na, Mg, Al displace H from water/acid; Si is a metalloid (semi-conductor); P, S, Cl are non-metals, gaining electrons",
        "Metallic → non-metallic character across the period",
        "Compounds: Na₂O, MgO, Al₂O₃ are ionic (electropositive); SiCl₄, PCl₅, SCl₂, Cl₂ are covalent (electronegative) — the gradation ionic → covalent",
        "Acid–base character of oxides: basic (Na₂O, MgO) → amphoteric (Al₂O₃) → acidic (SiO₂, P₂O₅, SO₂, Cl₂O₇)"
      ] },
      { q: "(a) State the periodic law. (b) Explain the trend in atomic size, ionization energy and electronegativity across a period. (c) Describe the gradation of the halogens F, Cl, Br and I in terms of physical state, reactivity and displacement.", marks: 10, outline: [
        "(a) The properties of elements are periodic functions of their atomic numbers",
        "(b) Atomic size decreases (increasing nuclear charge); ionization energy increases; electronegativity increases; account for the Be/B and O/N anomalies briefly",
        "(c) F₂, Cl₂ gases; Br₂ liquid; I₂ solid; reactivity decreases down the group (F most reactive); each displaces the one below: Cl₂ + 2NaBr → 2NaCl + Br₂; F does not displace Cl from solution directly (it reacts with water); reactions with water and alkali give balanced equations (Cl₂ + 2NaOH → NaCl + NaClO + H₂O)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Topic 5 (Periodic Chemistry):" },
      { k: "bul", items: [
        "Periodicity of the elements",
        "Different categories of elements in the periodic table",
        "Periodic law",
        "Trends on periodic table",
        "Periodic gradation of the elements in the third period (Na – Ar)",
        "Period three metals (Na, Mg, Al); Period four metals (K, Ca); Elements of the first transition series 21Sc – 30Zn"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "Explanation of the periodic law; classifications: metals, semi-metals, non-metals in the periodic table and halogens; alkali metals, alkaline earth metals and transition metals as metals.",
        "Periodic properties: atomic size, ionic size, ionization energy, electron affinity and electronegativity; simple discrepancies should be accounted for in respect to beryllium, boron, oxygen and nitrogen.",
        "Progression from metallic to non-metallic character of elements; ionic to covalent bonding in compounds.",
        "Periodic gradation of elements in group seven, the halogens: F, Cl, Br and I; differences and similarities between the second and third period elements stated.",
        "Period three metals (Na, Mg, Al); period four metals (K, Ca); reactions between acids and metals, their oxides and trioxocarbonates (IV); chemical equations; pH of solutions of the metallic oxides and trioxocarbonates; recognition of group variations noting any anomalies.",
        "Treatment of the halogens: physical states, melting and boiling points; variable oxidation states; redox properties; displacement of one halogen by another; reaction of the elements with water and alkali (balanced equations required).",
        "First transition series 21Sc–30Zn: electron configurations, physical properties (physical states, metallic properties, magnetic properties) and chemical reactivity of the elements and their compounds; reactivity with air, water, acids and comparison with s-block elements (Li, Na, Be, Mg).",
        "Other properties of transition metals: variable oxidation states; formation of coloured compounds; complex formation; catalytic abilities; paramagnetism; hardness."
      ] }
    ]
  },
  /* =============== C5 · CHEMICAL BONDS =============== */
  {
    grade: 12, sem: "One", icon: "🔗", period: "C5",
    title: "Chemical Bonds",
    subtitle: "Ionic · covalent · coordinate · metallic · intermolecular and hydrogen bonding · shapes of molecules · comparison of bond types",
    note: "Section A, Topic 6: all the interatomic and intermolecular bonding, the factors influencing each, the properties that follow, and the shapes of simple molecules.",
    objectives: [
      "Explain the meaning of chemical bonding and draw Lewis dot structures for simple ionic and covalent compounds",
      "Explain the formation of ionic bonds and name ionic compounds by the IUPAC system",
      "Explain the formation of covalent bonds, including the formation and difference between pure covalent and coordinate (dative) bonds",
      "Explain metallic bonding and the properties of metals",
      "Describe intermolecular forces: van der Waals forces (dipole–dipole, induced dipole) and hydrogen bonding",
      "Give the shapes of simple molecular compounds (linear, planar, tetrahedral) and compare all bond types"
    ],
    terms: [
      { t: "Chemical bond", d: "The force holding atoms together in a compound — ionic, covalent, coordinate or metallic.", x: "NaCl (ionic); HCl (covalent)" },
      { t: "Ionic bond", d: "The electrostatic attraction between oppositely charged ions formed by electron transfer.", x: "Na⁺[Cl⁻] from Na + Cl" },
      { t: "Covalent bond", d: "The shared pair of electrons between two atoms; pure covalent (equal sharing, e.g. H₂, Cl₂) vs polar covalent (unequal, e.g. HCl).", x: "H:Cl" },
      { t: "Coordinate (dative) bond", d: "A covalent bond in which both electrons of the shared pair come from ONE atom.", x: "NH₃ + H⁺ → NH₄⁺; Cu²⁺ + 4NH₃ → [Cu(NH₃)₄]²⁺" },
      { t: "Metallic bond", d: "The attraction between a lattice of positive metal ions and a sea of delocalized valence electrons.", x: "Copper conducts electricity" },
      { t: "Van der Waals forces", d: "Weak intermolecular forces between molecules: dipole–dipole, induced dipole–dipole, induced dipole–induced dipole.", x: "Boiling points of the halogens rise down the group" },
      { t: "Hydrogen bond", d: "A strong dipole interaction between an H attached to N/O/F and a lone pair on another N/O/F.", x: "H₂O, NH₃, HF; ice; boiling point of water" },
      { t: "Lewis dot structure", d: "A diagram showing valence electrons as dots/crosses around atoms.", x: "The structure of CH₄, NH₃, H₂O" },
      { t: "Molecular shape", d: "The three-dimensional arrangement of atoms — linear (BeCl₂, CO₂), planar (BF₃), tetrahedral (CH₄), trigonal pyramidal (NH₃).", x: "CH₄ is tetrahedral" }
    ],
    tf: [
      { s: "Factors influencing ionic bond formation include ionization energy, electron affinity and electronegativity difference.", a: "True", why: "Formation of stable compounds from ions; factors influencing formation: ionization energy, electron affinity and electronegativity difference." },
      { s: "The boiling point of water is higher than that of H₂S because of hydrogen bonding.", a: "True", why: "Variation in the boiling points of H₂O and H₂S explained using hydrogen bonding." },
      { s: "Ionic compounds are soft and have low melting points.", a: "False", why: "Ionic compounds are hard, brittle and have high melting points; they conduct electricity only when molten/aqueous." }
    ],
    mcq: [
      { q: "The bond in sodium chloride is:", o: ["pure covalent", "ionic", "coordinate", "metallic"], a: 1, why: "Na transfers an electron to Cl → Na⁺Cl⁻, electrostatic attraction." },
      { q: "The H–N bond formed in NH₄⁺ when NH₃ accepts H⁺ is a:", o: ["pure covalent bond", "ionic bond", "coordinate (dative) bond", "metallic bond"], a: 2, why: "Both electrons of the new bond come from nitrogen." },
      { q: "Which property is explained by the delocalized electrons of metallic bonding?", o: ["insolubility in water", "electrical conductivity", "low melting point", "brittleness"], a: 1, why: "Free (delocalized) electrons carry the current; metals are also malleable, ductile, lustrous, sonorous and hard." },
      { q: "CH₄ has a tetrahedral shape because the carbon atom has:", o: ["two bond pairs", "four bond pairs around it", "one lone pair", "metallic bonds"], a: 1, why: "Four bond pairs repel to a tetrahedral arrangement (109.5°)." },
      { q: "The intermolecular force that holds the molecules of iodine (I₂) together is:", o: ["hydrogen bonding", "van der Waals (induced dipole) forces", "ionic bonding", "covalent bonding between molecules"], a: 1, why: "Non-polar molecules interact by induced dipole (London) forces." },
      { q: "The bond that is formed when BF₃ accepts a lone pair from NH₃ is:", o: ["a dative bond from B to N", "a dative bond from N to B", "an ionic bond", "a metallic bond"], a: 1, why: "Nitrogen (with the lone pair) donates the pair to boron." },
      { q: "Diamond and graphite differ in physical properties because:", o: ["they have different atoms", "diamond has a covalent network structure while graphite has layers held by van der Waals forces", "graphite is ionic", "diamond is metallic"], a: 1, why: "Structure determines properties — a classic structural comparison." }
    ],
    essay: [
      { q: "(a) Define chemical bonding. (b) Using Lewis dot structures, show the formation of (i) sodium chloride and (ii) methane. (c) State four properties of ionic compounds and four of covalent compounds.", marks: 12, outline: [
        "(a) Chemical bond — the force that holds atoms together in a compound",
        "(b)(i) Na · + ·Cl → Na⁺[:Cl:]⁻ (transfer of one electron); (ii) H×C×H with four shared pairs (C shares one electron with each H)",
        "(c) Ionic: high melting/boiling points, hard and brittle, soluble in polar solvents, conduct electricity when molten/aqueous; Covalent: low melting/boiling points, soluble in non-polar solvents, do not conduct electricity, exist as molecules (simple)"
      ] },
      { q: "Explain metallic bonding and account for the properties of metals: electrical conductivity, malleability, lustre, ductility and sonority. State the factors that influence its formation.", marks: 10, outline: [
        "Metallic bonding: positive metal ions in a lattice, held by a sea of delocalized valence electrons",
        "Conductivity — free electrons move through the lattice (heat and electric current)",
        "Malleability/ductility — layers of ions slide over one another without breaking the bonding",
        "Lustre — free electrons absorb and re-emit light; sonority — the lattice rings when struck",
        "Hardness — strong metallic bond (e.g. transition metals)",
        "Factors: atomic radius, ionization energy and number of valence electrons; types of specific packing not required"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Topic 6 (Chemical Bonds):" },
      { k: "bul", items: [
        "Interatomic bonding: (i) formation of ionic bonds and compounds; properties of ionic compounds; naming of ionic compounds; (ii) formation of covalent bonds and compounds; properties of covalent compounds; (iii) coordinate (dative) covalent bonding; (iv) metallic bonding; factors influencing its formation; properties of metals; (v) intermolecular bonding; intermolecular forces in covalent compounds; hydrogen bonding; van der Waals forces",
        "Shapes of molecular compounds: linear, planar, tetrahedral — e.g. BeCl₂, BF₃, CH₄, NH₃, CO₂",
        "Comparison of all bond types"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "Meaning of chemical bonding; Lewis dot structure for simple ionic and covalent compounds.",
        "Formation of stable compounds from ions; factors: ionization energy, electron affinity and electronegativity difference.",
        "Ionic: solubility in polar and non-polar solvents, electrical conductivity, hardness and melting point; IUPAC system for simple ionic compounds.",
        "Covalent: factors (electron affinity, ionization energy, atomic size, electronegativity); solubility in polar/non-polar solvents, melting point, boiling point, electrical conductivity.",
        "Formation and difference between pure covalent and coordinate (dative) covalent bonds.",
        "Metallic bonding factors: atomic radius, ionization energy and number of valence electrons; typical properties: heat and electrical conductivity, malleability, lustre, ductility, sonority and hardness; types of specific packing not required.",
        "Intermolecular forces: relative physical properties of polar and non-polar compounds; description of formation and nature of hydrogen bonding; dipole–dipole, induced dipole–dipole and induced dipole–induced dipole under van der Waals forces; variation of melting/boiling points of noble gases, halogens and alkanes in homologous series (van der Waals); variation in boiling points of H₂O and H₂S (hydrogen bonding).",
        "Shapes: linear, planar, tetrahedral — BeCl₂, BF₃, CH₄, NH₃, CO₂."
      ] }
    ]
  },
  /* =============== C6 · STOICHIOMETRY & CHEMICAL REACTIONS =============== */
  {
    grade: 12, sem: "One", icon: "🧮", period: "C6",
    title: "Stoichiometry & Chemical Reactions",
    subtitle: "Symbols, formulae and equations · the mole · Avogadro's constant · laws of chemical combination · solutions and concentration",
    note: "Section A, Topic 7: formulae and equations, the laws of chemical combination, the mole concept and its calculations, and the language of solutions (concentration, standard solutions, dilution).",
    objectives: [
      "Write the symbols of the first thirty elements and other common elements, and give IUPAC names of compounds",
      "Derive empirical and molecular formulae and balance chemical equations",
      "State and explain the laws of conservation of mass, constant composition and multiple proportions, with experimental illustration of conservation of mass",
      "Use the mole and Avogadro's constant (L = 6.02 × 10²³ mol⁻¹) in mole-ratio calculations of number of entities, amount of substance, mass, concentration, volume and percentage yield",
      "Classify solutions (solvent/solute; dilute/concentrated; acidic/basic/neutral) and express concentration as mass concentration (g dm⁻³) and molar concentration (mol dm⁻³)",
      "Prepare standard solutions from primary standards (anhydrous Na₂CO₃, (COOH)₂·2H₂O) and use the dilution factor"
    ],
    terms: [
      { t: "Empirical formula", d: "The simplest whole-number ratio of the atoms of the elements in a compound.", x: "CH₂O for glucose C₆H₁₂O₆" },
      { t: "Molecular formula", d: "The actual number of atoms of each element in a molecule.", x: "C₆H₁₂O₆ for glucose" },
      { t: "The mole", d: "The amount of substance containing 6.02 × 10²³ (Avogadro's constant) entities — atoms, molecules, ions or formula units.", x: "1 mol H₂O = 6.02 × 10²³ molecules = 18 g" },
      { t: "Molar mass", d: "The mass of one mole of a substance in grams; numerically equal to Mr.", x: "H₂O: 18 g mol⁻¹" },
      { t: "Molar concentration (molarity)", d: "Moles of solute per cubic decimetre of solution (mol dm⁻³).", x: "1.0 mol dm⁻³ HCl" },
      { t: "Mass concentration", d: "Grams of solute per cubic decimetre of solution (g dm⁻³).", x: "58.5 g dm⁻³ NaCl" },
      { t: "Standard solution", d: "A solution of accurately known concentration, prepared from a primary standard.", x: "0.1 mol dm⁻³ anhydrous Na₂CO₃" },
      { t: "Primary standard", d: "A pure, stable compound of known formula and high molar mass used to prepare a standard solution.", x: "Anhydrous Na₂CO₃; ethanedioic acid (COOH)₂·2H₂O" },
      { t: "Law of conservation of mass", d: "In a chemical reaction, mass is neither created nor destroyed.", x: "The mass of reactants equals the mass of products" },
      { t: "Percentage yield", d: "The actual yield as a percentage of the theoretical (stoichiometric) yield.", x: "(actual/theoretical) × 100" }
    ],
    tf: [
      { s: "Avogadro's constant is 6.02 × 10²³ entities mol⁻¹.", a: "True", why: "L = 6.02 × 10²³ entities mol⁻¹." },
      { s: "A concentrated solution is one that has a high mass or molar concentration.", a: "True", why: "Distinguishing between dilute solution and concentrated solution." },
      { s: "The law of multiple proportions applies to a single compound.", a: "False", why: "It compares two compounds formed by the same two elements: fixed masses of one combine with variable masses of the other in simple ratios." }
    ],
    mcq: [
      { q: "How many molecules are in 0.5 mole of carbon dioxide?", o: ["6.02 × 10²³", "3.01 × 10²³", "1.204 × 10²⁴", "6.02 × 10²²"], a: 1, why: "0.5 × 6.02 × 10²³ = 3.01 × 10²³." },
      { q: "The molar mass of water (H = 1, O = 16) is:", o: ["16 g mol⁻¹", "18 g mol⁻¹", "17 g mol⁻¹", "34 g mol⁻¹"], a: 1, why: "2(1) + 16 = 18." },
      { q: "The mass of 2 moles of carbon atoms (C = 12) is:", o: ["12 g", "24 g", "6 g", "36 g"], a: 1, why: "2 × 12 = 24 g." },
      { q: "A solution contains 4.0 g dm⁻³ of NaOH (Mr = 40). Its molar concentration is:", o: ["0.1 mol dm⁻³", "0.4 mol dm⁻¹", "1.0 mol dm⁻³", "4.0 mol dm⁻³"], a: 0, why: "4.0/40 = 0.1 mol dm⁻³." },
      { q: "For the reaction 2Mg + O₂ → 2MgO, the mole ratio of Mg to O₂ is:", o: ["1:1", "2:1", "1:2", "4:1"], a: 1, why: "Coefficients give the mole ratio: 2:1." },
      { q: "The empirical formula of a compound with molecular formula C₆H₁₂O₆ is:", o: ["C₆H₁₂O₆", "CH₂O", "C₃H₆O₃", "C₂H₄O₂"], a: 1, why: "Divide all subscripts by 6." },
      { q: "Which law is illustrated by equal masses of reactants giving equal masses of products in a closed system?", o: ["constant composition", "multiple proportions", "conservation of mass", "definite proportions"], a: 2, why: "Experimental illustration of the law of conservation of mass." }
    ],
    essay: [
      { q: "Define the mole and Avogadro's constant. Calculate: (a) the number of molecules in 8 g of methane, CH₄ (C = 12, H = 1); (b) the mass of 3 moles of sulphur dioxide, SO₂ (S = 32, O = 16).", marks: 10, outline: [
        "Mole — the amount of substance containing Avogadro's constant, 6.02 × 10²³, entities",
        "(a) Mr(CH₄) = 16; moles in 8 g = 8/16 = 0.5; molecules = 0.5 × 6.02 × 10²³ = 3.01 × 10²³",
        "(b) Mr(SO₂) = 64; mass of 3 mol = 3 × 64 = 192 g"
      ] },
      { q: "(a) State the law of conservation of mass and describe a simple experiment to illustrate it. (b) Explain the law of multiple proportions with carbon monoxide and carbon dioxide. (c) A solution of 0.1 mol dm⁻³ HCl is diluted so its volume doubles. What is the new concentration?", marks: 10, outline: [
        "(a) Mass is neither created nor destroyed in a chemical change; e.g. weigh a flask of HCl + NaOH before and after neutralization — the total mass is unchanged (closed system)",
        "(b) With a fixed mass of carbon (12 g): CO contains 16 g of O; CO₂ contains 32 g of O; the ratio 16:32 = 1:2 — a simple whole-number ratio",
        "(c) Dilution: C₁V₁ = C₂V₂ → 0.1 × V = C₂ × 2V → C₂ = 0.05 mol dm⁻³"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Topic 7 (Stoichiometry and Chemical Reactions):" },
      { k: "bul", items: [
        "(i) Symbols, formulae and equations; (ii) chemical symbols; (iii) empirical and molecular formulae; (iv) chemical equations and IUPAC names of chemical compounds; (v) laws of chemical combination",
        "Amount of substance: the mole as a unit of measurement; Avogadro's constant L = 6.02 × 10²³ entities mol⁻¹; molar quantities and their uses; moles of electrons, atoms, molecules, formula units etc.; mole ratios",
        "Solutions: concept of a solution (solvent and solute); dilute vs concentrated; basic, acidic and neutral; concentration terms (mass concentration g dm⁻³, molar concentration mol dm⁻³); standard solutions (preparation of primary standards — anhydrous Na₂CO₃, (COOH)₂·2H₂O/H₂C₂O₄·2H₂O); dilution factor; preparation from liquid solutes by dilution"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "Symbols of the first thirty elements and other common elements that are not among the first thirty.",
        "Calculations involving formulae and equations; mass and volume relationships and stoichiometry; calculation of percentage composition of elements.",
        "Types of reactions: combustion (including combustion of simple hydrocarbons), synthesis, displacement or replacement, decomposition, ionic.",
        "Laws of conservation of mass; law of constant composition; law of multiple proportions; explanation of the laws to balance given equations; experimental illustration of the law of conservation of mass.",
        "Mass and volume measurements; molar quantities and their uses; moles of electrons, atoms, molecules, formula units.",
        "Use of mole ratios in determining stoichiometry; simple calculations to determine the number of entities, amount of substance, mass, concentration, volume and percentage yield of product.",
        "Concentration: emphasis on current IUPAC chemical terminology, symbols and conventions; concentration expressed as mass concentration g dm⁻³ and molar concentration mol dm⁻³; meaning of primary standard, secondary standard and standard solution; dilution factor."
      ] }
    ]
  },
  /* =============== C7 · STATES OF MATTER & ENERGY CHANGES =============== */
  {
    grade: 12, sem: "One", icon: "🌡️", period: "C7",
    title: "States of Matter & Energy Changes",
    subtitle: "Kinetic theory of matter · solids, liquids, vapours and gases · diamond and graphite · energy and enthalpy · exothermic and endothermic processes",
    note: "Section A, Topics 8–9: the kinetic theory of matter and the three states (with vapour pressure and the diamond–graphite contrast), and energy changes in chemical processes.",
    objectives: [
      "State the postulates of the kinetic theory of matter and use it to explain compressibility, density and viscosity",
      "Distinguish the solid, liquid and gaseous states; explain vapour, vapour pressure, saturated vapour pressure, evaporation and boiling, including boiling at reduced pressure",
      "Describe the types and structures of solids (ionic, metallic, covalent network and molecular) and the properties/uses of diamond and graphite",
      "Explain energy and enthalpy, and classify processes as exothermic or endothermic",
      "Explain the enthalpy changes of combustion, dissolution and neutralization"
    ],
    terms: [
      { t: "Kinetic theory of matter", d: "Matter is made of particles in constant, random motion; the energy of motion explains the states of matter and their properties.", x: "Gases are compressible because the particles are far apart" },
      { t: "Vapour", d: "The gaseous form of a substance below its critical temperature; it can be liquefied by pressure.", x: "Water vapour vs a permanent gas" },
      { t: "Vapour pressure", d: "The pressure exerted by a vapour in equilibrium with its liquid; SATURATED vapour pressure is the maximum at a given temperature.", x: "Boiling occurs when vapour pressure = external pressure" },
      { t: "Boiling", d: "Vaporization throughout a liquid at a fixed temperature when its vapour pressure equals the external pressure.", x: "Water boils at 100°C at 1 atm; lower at reduced pressure" },
      { t: "Evaporation", d: "Vaporization from the surface of a liquid at any temperature; a cooling process.", x: "Sweat evaporates and cools the skin" },
      { t: "Covalent network solid", d: "A solid of atoms bonded in a continuous 3-D network — very hard, very high melting point.", x: "Diamond; silicon dioxide (sand)" },
      { t: "Molecular solid", d: "A solid of discrete molecules held by weak intermolecular forces — soft, low melting point.", x: "Ice; iodine; naphthalene" },
      { t: "Enthalpy (H)", d: "The heat content of a system at constant pressure; the change ΔH is negative for exothermic, positive for endothermic processes.", x: "Combustion: ΔH < 0" },
      { t: "Exothermic", d: "Releases heat to the surroundings (ΔH negative).", x: "Neutralization; respiration" },
      { t: "Endothermic", d: "Absorbs heat from the surroundings (ΔH positive).", x: "Decomposition of limestone; photosynthesis" }
    ],
    tf: [
      { s: "Gases are more compressible than liquids because their particles are far apart with large empty space.", a: "True", why: "Use of the kinetic theory to explain compressibility, density and viscosity." },
      { s: "Boiling occurs at a fixed temperature for a pure liquid at a given pressure.", a: "True", why: "Boiling point — effect of vapour pressure on boiling points; boiling at reduced pressure." },
      { s: "Diamond conducts electricity because it has delocalized electrons.", a: "False", why: "Diamond's electrons are all tied up in covalent bonds — it does not conduct; graphite does (delocalized electrons between layers)." }
    ],
    mcq: [
      { q: "Which of the following best describes the particles in a gas?", o: ["closely packed, fixed positions", "closely packed, sliding", "far apart, fast random motion", "regular rows of ions"], a: 2, why: "Gas particles are far apart and move rapidly at random — kinetic theory." },
      { q: "A liquid boils when its saturated vapour pressure:", o: ["is zero", "equals the external pressure", "is less than the external pressure", "exceeds atmospheric pressure by 101 kPa only"], a: 1, why: "Boiling point — the temperature at which vapour pressure equals the external pressure." },
      { q: "At reduced pressure, water boils:", o: ["at 100°C", "at a temperature below 100°C", "at a higher temperature", "never"], a: 1, why: "Boiling at reduced pressure — lower external pressure → lower boiling point." },
      { q: "Diamond is used in cutting tools because it is:", o: ["soft", "extremely hard (covalent network)", "malleable", "a good conductor"], a: 1, why: "Uses of diamond related to its structure — each C is tetrahedrally bonded to four others." },
      { q: "Graphite is used as a lubricant because its layers:", o: ["are strongly ionic", "are held by weak van der Waals forces and slide easily", "are covalently fused", "contain free protons"], a: 1, why: "The carbon layers in graphite slip over one another (weak forces between layers)." },
      { q: "The neutralization of an acid by an alkali is:", o: ["endothermic", "exothermic", "isothermal", "catalytic"], a: 1, why: "Enthalpy changes of neutralization — heat is released." },
      { q: "The process in which a solid turns to liquid with a rise in temperature is called:", o: ["condensation", "melting", "sublimation", "evaporation"], a: 1, why: "Changes of state: solid → liquid = melting." }
    ],
    essay: [
      { q: "State the main postulates of the kinetic theory of matter and use the theory to explain: (a) why gases are compressible but liquids are not, (b) why evaporation causes cooling, (c) the difference between a vapour and a gas.", marks: 10, outline: [
        "Postulates: matter consists of particles; the particles are in constant random motion; the motion increases with temperature; there are intermolecular forces; the volume of the particles is negligible for gases",
        "(a) Gas particles are far apart (mostly empty space) → compressible; liquid particles are close → incompressible",
        "(b) The faster (more energetic) surface molecules escape; the average kinetic energy (temperature) of what remains falls → cooling",
        "(c) A vapour is the gaseous form of a substance below its critical temperature and can be liquefied by pressure; a gas is above the critical temperature and cannot be liquefied by pressure alone"
      ] },
      { q: "Describe the structures of diamond and graphite, and relate their structures to their physical properties and uses.", marks: 10, outline: [
        "Diamond: each carbon is covalently bonded to four others in a tetrahedral 3-D network → extremely hard, high melting point, no free electrons (insulator); uses: cutting tools, drill bits, jewellery",
        "Graphite: each carbon bonded to three others in hexagonal layers; one electron per carbon is delocalized; layers held by weak van der Waals forces → soft/sliding (lubricant, pencil), conducts electricity, high melting point",
        "Contrast: same element, different structures (allotropes) → different properties and uses"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Topics 8 (States of Matter) and 9 (Energy and Energy Changes):" },
      { k: "bul", items: [
        "States of matter: (i) kinetic theory of matter; (ii) changes of state of matter; solids — characteristics and nature, types and structures, properties; liquids; vapour and gases",
        "Energy and energy changes: energy and enthalpy; enthalpy changes of combustion, dissolution and neutralization"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "Postulates of the kinetic theory of matter; use of the kinetic theory to explain compressibility, density and viscosity.",
        "Solids: structures, properties and uses of diamond and graphite; determination of melting points of covalent solids (melting points as indicators of purity, e.g. benzoic acid, oxalic acid, ethanamide); arrangements of particles in the solid state; ionic, metallic, covalent network and molecular solids.",
        "Liquids/vapours/gases: concept of vapour, vapour pressure, saturated vapour pressure, boiling and evaporation; distinction between vapour and gas; effect of vapour pressure on boiling points; boiling at reduced pressure.",
        "Energy: explanation of the terms energy and enthalpy; energy changes associated with chemical processes; exothermic and endothermic processes; total energy as the sum of various forms (kinetic, potential, electrical, heat, sound etc.).",
        "Enthalpy changes involved in: combustion, dissolution and neutralization."
      ] }
    ]
  },
  /* =============== C8 · ACIDS, BASES, SALTS & SOLUBILITY =============== */
  {
    grade: 12, sem: "One", icon: "🧫", period: "C8",
    title: "Acids, Bases, Salts & Solubility",
    subtitle: "Arrhenius concept · pH · strong and weak electrolytes · types of salts · hydrolysis · deliquescent/efflorescent/hygroscopic · indicators · titration · solubility curves",
    note: "Section A, Topics 9–10: the Arrhenius concept of acids and bases, pH, electrolytes, the chemistry of salts, and the principles and applications of solubility.",
    objectives: [
      "Define acids and bases (Arrhenius) in terms of H₃O⁺ and OH⁻ ions in water, and state their characteristic physical and chemical properties",
      "Distinguish strong and weak electrolytes (extent of dissociation, conductivity, enthalpy of neutralization)",
      "Define pH and measure the pH of solutions (pH meter, colorimetric methods, universal indicator); explain the significance of pH in everyday life (acid rain, soil, blood, urine)",
      "Classify salts (normal, acidic, basic, double, complex) and describe laboratory and industrial preparation, uses, and hydrolysis of salts",
      "Distinguish deliquescent, efflorescent and hygroscopic compounds",
      "Explain how acid–base indicators work and carry out acid–base titrations (methyl orange, phenolphthalein)",
      "Define solubility, saturated/unsaturated solutions, express solubility in mol dm⁻³ and g dm⁻³, and use solubility curves; explain the effect of temperature and the link with crystallization"
    ],
    terms: [
      { t: "Acid (Arrhenius)", d: "A substance that produces H₃O⁺ (H⁺) ions in water.", x: "HCl + H₂O → H₃O⁺ + Cl" },
      { t: "Base (Arrhenius)", d: "A substance that produces OH⁻ ions in water; an alkali is a soluble base.", x: "NaOH → Na⁺ + OH⁻" },
      { t: "pH", d: "A measure of the hydrogen-ion concentration of a solution: pH = −log₁₀[H₃O⁺]; 0–7 acidic, 7 neutral, 7–14 alkaline.", x: "Stomach acid ≈ pH 1–3; blood ≈ 7.4" },
      { t: "Strong electrolyte", d: "Dissociates completely in water — high conductivity, large enthalpy of neutralization.", x: "HCl, NaOH" },
      { t: "Weak electrolyte", d: "Dissociates partially in water (equilibrium) — lower conductivity.", x: "CH₃COOH; NH₄OH" },
      { t: "Salt", d: "The product of neutralization of an acid and a base — normal, acidic, basic, double or complex.", x: "NaCl; NaHCO₃ (acidic salt)" },
      { t: "Hydrolysis of salts", d: "The reaction of an ion of a salt with water, giving an acidic, alkaline or neutral solution.", x: "AlCl₃ → acidic; CH₃COONa → alkaline; NaCl → neutral" },
      { t: "Deliquescent", d: "A solid that absorbs moisture from the air and dissolves in it.", x: "CaCl₂; conc. H₂SO₄ (liquid)" },
      { t: "Efflorescent", d: "A hydrated solid that loses water of crystallization to the air.", x: "Na₂CO₃·10H₂O → Na₂CO₃·H₂O" },
      { t: "Hygroscopic", d: "A substance that absorbs moisture from the air without dissolving — used as a drying agent.", x: "Conc. H₂SO₄; anhydrous CaCl₂" },
      { t: "Saturated solution", d: "A solution holding the maximum amount of solute at a given temperature — an equilibrium system.", x: "Saturated NaCl at 25°C" },
      { t: "Solubility curve", d: "A graph of solubility against temperature, used to predict crystallization and purity.", x: "KNO₃ solubility rises steeply with temperature" }
    ],
    tf: [
      { s: "pH 7 is neutral; pH below 7 is acidic and above 7 is alkaline.", a: "True", why: "Definition of pH and knowledge of the pH scale." },
      { s: "Acid rain, pH of soil, blood and urine are examples of the significance of pH in everyday life.", a: "True", why: "Significance of pH values in everyday life e.g. acid rain, pH of soil, blood, urine." },
      { s: "An acidic salt is one that reacts with acid to release HCl.", a: "False", why: "An acidic salt is a salt formed by partial neutralization — it still contains a replaceable hydrogen (e.g. NaHCO₃)." },
      { s: "Hygroscopic compounds are used as drying agents.", a: "True", why: "Use of hygroscopic compounds as drying agent should be emphasized." }
    ],
    mcq: [
      { q: "According to Arrhenius, an acid produces in water:", o: ["OH⁻ ions", "H₃O⁺ ions", "Cl⁻ ions", "Na⁺ ions"], a: 1, why: "Arrhenius acids give H₃O⁺ (H⁺) in water." },
      { q: "A solution of pH 3 has a hydrogen-ion concentration of:", o: ["3 mol dm⁻³", "10⁻³ mol dm⁻³", "10³ mol dm⁻³", "0.3 mol dm⁻³"], a: 1, why: "pH = −log[H₃O⁺] → [H₃O⁺] = 10⁻³." },
      { q: "Which indicator is suitable for a strong-acid/strong-base titration?", o: ["universal indicator only", "phenolphthalein (or methyl orange)", "litmus", "starch"], a: 1, why: "Titrations involving HCl, HNO₃, H₂SO₄ and NaOH, KOH, Ca(OH)₂, CO₃²⁻, HCO₃⁻ — methyl orange and phenolphthalein." },
      { q: "A solution of aluminium chloride, AlCl₃, is acidic because:", o: ["aluminium is a strong metal", "the Al³⁺ ion hydrolyzes water to give H₃O⁺", "chlorine is a halogen", "it is a strong electrolyte"], a: 1, why: "Hydrolysis of the Al³⁺ cation (high charge density) makes the solution acidic." },
      { q: "A substance that absorbs moisture from air and dissolves in it is:", o: ["efflorescent", "deliquescent", "volatile", "immiscible"], a: 1, why: "Deliquescent — e.g. CaCl₂." },
      { q: "The salt that gives an alkaline solution is:", o: ["NaCl", "NH₄Cl", "CH₃COONa", "AlCl₃"], a: 2, why: "The CH₃COO⁻ ion (from a weak acid) hydrolyzes to give OH⁻ — alkaline." },
      { q: "A saturated solution at a fixed temperature is an example of:", o: ["a dynamic equilibrium", "a chemical reaction only", "a mixture of solids", "an exothermic process"], a: 0, why: "Saturated solution as an equilibrium system (dissolution = recrystallization)." }
    ],
    essay: [
      { q: "(a) Define acid and base according to Arrhenius. (b) State four characteristic properties of acids and four of bases. (c) Define pH and explain how it is measured. (d) Give three examples of the significance of pH in everyday life.", marks: 12, outline: [
        "(a) Acid — produces H₃O⁺ in water; base — produces OH⁻ in water",
        "(b) Acids: sour taste, turn blue litmus red, react with metals (Zn, Fe) to give H₂, react with trioxocarbonate(IV)/hydrogen trioxocarbonate(IV) salts to give CO₂, conduct electricity; Bases: bitter, soapy feel, turn red litmus blue, react with acids to give salt + water (neutralization), conduct electricity when dissolved",
        "(c) pH = −log₁₀[H₃O⁺]; measured with a pH meter, colorimetric methods or universal indicator",
        "(d) Acid rain (damages buildings, soils, aquatic life); pH of soil (affects crop growth — liming); pH of blood (≈7.4; buffers); pH of urine (diagnosis)"
      ] },
      { q: "(a) Distinguish between deliquescent, efflorescent and hygroscopic compounds with an example of each. (b) Explain, with examples, how the salts AlCl₃, CH₃COONa and NaCl give acidic, alkaline and neutral solutions respectively. (c) State two laboratory methods of preparing salts and give an industrial example.", marks: 10, outline: [
        "(a) Deliquescent — absorbs moisture and dissolves (CaCl₂); efflorescent — loses water of crystallization to air (Na₂CO₃·10H₂O); hygroscopic — absorbs moisture without dissolving, used as drying agent (conc. H₂SO₄, anhydrous CaCl₂)",
        "(b) Al³⁺ hydrolyzes: Al³⁺ + 3H₂O ⇌ Al(OH)₃ + 3H⁺ (acidic); CH₃COO⁻ hydrolyzes: CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻ (alkaline); Na⁺ and Cl (strong acid + strong base) do not hydrolyze (neutral); effects of charge density of cations/anions from groups 1, 2, 3 and the d-block",
        "(c) Laboratory: acid + metal; acid + base (neutralization, titrated); acid + carbonate; indirect methods (precipitation). Industrial: e.g. production of NaOH, Cl₂ and H₂ from brine (chlor-alkali); mining of impure NaCl and conversion into granulated salt"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Topics 9 (Acids, Bases and Salts) and 10 (Solubility of Substances):" },
      { k: "bul", items: [
        "9.0 Acids, bases and salts: (a) definitions of acids and bases; (b) physical and chemical properties; acids, bases and salts as electrolytes; classification; concept of pH; salts — laboratory and industrial preparation, uses, hydrolysis; deliquescent, efflorescent and hygroscopic compounds; acid–base indicators; acid–base titration",
        "10.0 Solubility of substances: (a) general principles; (b) practical application of solubility; (c) calculations on solubility"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "Arrhenius concepts of acids and bases in terms of H₃O⁺ and OH⁻ ions in water; effects of acids and bases on indicators, metal Zn, Fe and trioxocarbonate(IV) salts and hydrogen trioxocarbonate(IV) salts; characteristic properties in aqueous solution — conductivities, taste, litmus/indicators, feel — with balanced chemical equations.",
        "Electrolytes and non-electrolytes; strong and weak electrolytes; evidence from conductivity and enthalpy of neutralization; strength of acids and bases; extent of dissociation and conductivity; behaviour of weak acids and weak bases in water as examples of equilibrium systems.",
        "Definition of pH and knowledge of the pH scale; measurement using pH meter, colorimetric methods or universal indicator; significance in everyday life — acid rain, pH of soil, blood, urine.",
        "Salts: meaning; types — normal, acidic, basic, double and complex; laboratory and industrial production (mining of impure sodium chloride and conversion into granulated salt; preparation of NaOH, Cl₂ and H₂); hydrolysis — how salts form acidic, alkaline and neutral aqueous solutions; behaviour of NH₄Cl, AlCl₃, Na₂CO₃, CH₃COONa in water as equilibrium systems; effects of charge density of some cations and anions (group 1, group 2, group 3, d-block); hygroscopic compounds as drying agents emphasized.",
        "Indicators: qualitative description of how acid–base indicators work (weak organic acids or bases — organic dyes; colour dependent on relative amounts of acid and base forms; working pH ranges of methyl orange and phenolphthalein); correct use of relevant apparatus; how indicators work in titrations.",
        "Titration experiments involving HCl, HNO₃, H₂SO₄ and NaOH, KOH, Ca(OH)₂, CO₃²⁻, HCO₃⁻; weak acids vs strong bases, strong acids vs weak bases, strong acids vs strong bases using appropriate indicators; applications in quantitative determination — concentrations, mole ratio, purity, water of crystallization and composition.",
        "Solubility: meaning; saturated and unsaturated solutions; saturated solution as an equilibrium system; expressed in mol dm⁻³ and g dm⁻³ of solution/solvent; solubility curves and their uses; effect of temperature; relationship between solubility and crystallization; crystallization/recrystallization as a purification method; knowledge of soluble and insoluble salts of stated cations and anions.",
        "Generalization about solubility of salts and their applications to qualitative analysis, e.g. Pb²⁺, Ca²⁺, Al³⁺, Cu²⁺, Fe²⁺, Fe³⁺, Cl⁻, Br⁻, I⁻, SO₄²⁻, S²⁻, CO₃²⁻, Zn²⁺, NH₄⁺, SO₃²⁻; explanation of solubility rules; calculations on solubility."
      ] }
    ]
  },
  /* =============== C9 · KINETICS, EQUILIBRIUM & REDOX =============== */
  {
    grade: 12, sem: "Two", icon: "⏱️", period: "C9",
    title: "Chemical Kinetics, Equilibrium & Redox",
    subtitle: "Rate of reactions and factors affecting rates · collision theory · Le Chatelier's principle · oxidation states · balancing redox equations",
    note: "Section A, Topics 11–12: the rate of reactions (factors and theories), reversible reactions and chemical equilibrium, and the redox reaction and its balancing.",
    objectives: [
      "Define reaction rate and describe the factors affecting rates: physical states, concentration/pressure, temperature, catalysts, light, particle size and nature of reactants, with an experimental demonstration for each",
      "Explain (qualitatively) the collision and transition-state theories: effective collision, activation energy, and energy profiles",
      "Explain reversible and irreversible reactions and the concept of dynamic equilibrium; state that the equilibrium constant K is constant at constant temperature",
      "Apply Le Chatelier's principle to predict the effects of changes in concentration, temperature, pressure and volume on equilibrium systems",
      "Define oxidation and reduction in terms of (a) addition/removal of oxygen and hydrogen, (b) loss/gain of electrons, (c) change in oxidation number; determine oxidation states",
      "Describe oxidizing and reducing agents and balance redox equations by the ion-electron and oxidation-number methods"
    ],
    terms: [
      { t: "Rate of reaction", d: "The change in concentration of a reactant or product per unit time; observed by colour, mass, temperature, pH or precipitate change.", x: "cm³ of gas per minute" },
      { t: "Catalyst", d: "A substance that increases the rate of a reaction without being consumed; it lowers the activation energy.", x: "MnO₂ in the decomposition of H₂O₂" },
      { t: "Activation energy (Eₐ)", d: "The minimum energy colliding particles must have for a reaction to occur.", x: "Shown on the energy profile" },
      { t: "Effective collision", d: "A collision with energy ≥ Eₐ and the correct orientation — it leads to reaction.", x: "More effective collisions → faster rate" },
      { t: "Reversible reaction", d: "A reaction that can proceed in both directions, reaching dynamic equilibrium.", x: "N₂ + 3H₂ ⇌ 2NH₃" },
      { t: "Dynamic equilibrium", d: "The state in which the forward and reverse reactions occur at equal rates; concentrations are constant but not necessarily equal.", x: "A closed flask of N₂O₄ ⇌ 2NO₂" },
      { t: "Le Chatelier's principle", d: "If a system at equilibrium is disturbed, it shifts to oppose the change.", x: "Raising pressure favours the side with fewer gas moles" },
      { t: "Oxidation", d: "Loss of electrons; gain of oxygen (or loss of hydrogen); increase in oxidation number.", x: "Fe²⁺ → Fe³⁺ + e⁻" },
      { t: "Reduction", d: "Gain of electrons; loss of oxygen (or gain of hydrogen); decrease in oxidation number.", x: "Cu²⁺ + 2e⁻ → Cu" },
      { t: "Oxidizing agent", d: "The substance reduced (gains electrons), oxidizing another.", x: "KMnO₄; H₂O₂ (acidic); Cl₂" },
      { t: "Reducing agent", d: "The substance oxidized (loses electrons), reducing another.", x: "Fe²⁺; C₂O₄²⁻; SO₂" }
    ],
    tf: [
      { s: "The equilibrium constant K for a system is constant at constant temperature.", a: "True", why: "It must be stressed that K for a system is constant at constant temperature." },
      { s: "Collision and transition state theories are to be treated qualitatively only.", a: "True", why: "Collision and transition state theories to be treated qualitatively only." },
      { s: "In the reaction 2Fe³⁺ + Cu → 2Fe²⁺ + Cu²⁺, copper is the oxidizing agent.", a: "False", why: "Copper is oxidized (Cu → Cu²⁺ + 2e⁻) — it is the reducing agent; Fe³⁺ is reduced, so Fe³⁺ is the oxidizing agent." }
    ],
    mcq: [
      { q: "Which factor does NOT increase the rate of a reaction?", o: ["raising the temperature", "adding a catalyst", "increasing particle size (lumps)", "raising the concentration"], a: 2, why: "Larger particles have less surface area — the rate falls; powder (smaller size) speeds it up." },
      { q: "A catalyst increases the rate of a reaction by:", o: ["raising the temperature", "lowering the activation energy", "being consumed", "increasing the yield of the product"], a: 1, why: "It provides an alternative pathway with lower Eₐ (qualitative treatment)." },
      { q: "At dynamic equilibrium, the rates of the forward and reverse reactions are:", o: ["zero", "equal", "increasing", "the forward is faster"], a: 1, why: "Dynamic equilibrium — forward rate = reverse rate; concentrations constant." },
      { q: "For N₂ + 3H₂ ⇌ 2NH₃ (ΔH < 0), an INCREASE in pressure will shift the equilibrium:", o: ["to the left", "to the right (fewer gas moles)", "no shift", "to the top"], a: 1, why: "4 moles of gas → 2 moles; higher pressure favours the side with fewer gas molecules (Le Chatelier)." },
      { q: "In Fe²⁺ → Fe³⁺ + e⁻, iron is undergoing:", o: ["reduction", "oxidation", "neutralization", "hydrolysis"], a: 1, why: "Loss of an electron = oxidation." },
      { q: "The oxidizing agent in a redox reaction is the species that:", o: ["is oxidized", "is reduced", "changes colour only", "gains mass"], a: 1, why: "It gains electrons (is reduced) while oxidizing another species." },
      { q: "The oxidation number of S in SO₄²⁻ (O = −2) is:", o: ["+2", "+4", "+6", "−2"], a: 2, why: "x + 4(−2) = −2 → x = +6." }
    ],
    essay: [
      { q: "(a) Define reaction rate. (b) State four factors that affect the rate of a chemical reaction, and for each give an appropriate experimental demonstration. (c) Using the collision theory, explain the effect of temperature on the rate of a reaction.", marks: 12, outline: [
        "(a) Rate — change in concentration of a reactant/product per unit time (observed by colour, mass loss, gas volume, temperature, pH, precipitate)",
        "(b) Concentration — H₂O₂ + MnO₂ with varying dilutions (rate ∝ [H₂O₂]); surface area — marble lumps vs powder with HCl (CO₂ volume); temperature — thiosulphate + acid at different temperatures (disappearance of cross); catalyst — MnO₂ with H₂O₂ (O₂ volume); pressure (gases) — Mg + acid at different HCl concentrations; nature of reactants — Mg vs Cu with the same acid",
        "(c) Higher temperature → greater average kinetic energy → more particles with energy ≥ Eₐ → more effective collisions per second → faster rate (qualitative collision theory)"
      ] },
      { q: "(a) Explain the terms: reversible reaction, dynamic equilibrium, equilibrium constant. (b) State Le Chatelier's principle and use it to predict the effect on the equilibrium N₂ + 3H₂ ⇌ 2NH₃, ΔH = −92 kJ mol⁻¹ of: (i) adding nitrogen, (ii) raising the temperature, (iii) compressing the mixture.", marks: 10, outline: [
        "(a) Reversible — proceeds in both directions; dynamic equilibrium — forward and reverse rates equal, concentrations constant; K — the ratio of product to reactant concentrations at equilibrium, constant at a given temperature (qualitative)",
        "(b) Le Chatelier — a system at equilibrium adjusts to oppose any change applied to it",
        "(i) Adding N₂: shifts right (more NH₃) to consume the added nitrogen",
        "(ii) Raising temperature: shifts left (endothermic direction) since the forward is exothermic — less NH₃",
        "(iii) Compressing (higher pressure): shifts right, where there are fewer gas moles (4 → 2)"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Topics 11 (Chemical Kinetics and Equilibrium System) and 12 (Redox Reactions):" },
      { k: "bul", items: [
        "11.0 (a) Rate of reactions: (i) factors affecting rates; (ii) theories of reaction rates; (iii) analysis and interpretation of graphs; (b) Equilibrium: (i) general principle; (ii) Le Chatelier's principle",
        "12.0 (a) oxidation and reduction process; (b) oxidizing and reducing agents; (c) redox equations; (d) electrochemical cells; (e) electrolysis; (vi) corrosion of metals"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "Definition of reaction rate; observable physical changes: colour, mass, temperature, pH, formation of precipitate etc.",
        "Factors: physical states, concentration/pressure of reactants, temperature, catalysts, light, particle size and nature of reactants; appropriate experimental demonstration for each factor required.",
        "Collision and transition state theories qualitatively only; factors influencing collisions: temperature and concentration; effective collision; activation energy; energy profile showing activation energy and enthalpy change; drawing of graphs and charts.",
        "Explanation of reversible and irreversible reactions; reversible reaction = dynamic equilibrium; K treated qualitatively; constant at constant temperature; simple experiment to demonstrate reversible reactions.",
        "Le Chatelier: prediction of the effects of external influence of concentration, temperature, pressure and volume changes on equilibrium systems.",
        "Oxidation and reduction in terms of: (a) addition and removal of oxygen and hydrogen; (b) loss and gain of electrons; (c) change in oxidation numbers/states; determination of oxidation numbers/states.",
        "Oxidizing and reducing agents described in terms of (a) oxygen/hydrogen, (b) electrons, (c) oxidation numbers.",
        "Balancing redox equations by ion–electron or change in oxidation number/states; half reactions and overall reaction."
      ] }
    ]
  },
  /* =============== C10 · ELECTROCHEMISTRY =============== */
  {
    grade: 12, sem: "Two", icon: "🔋", period: "C10",
    title: "Electrochemistry: Cells & Electrolysis",
    subtitle: "Standard electrode potential · e.m.f · Daniell, lead-acid, dry and fuel cells · Faraday's laws · electrolytic cells · corrosion",
    note: "Section A, Topic 12(d)–(vi): electrochemical (galvanic) cells, their e.m.f and applications; electrolysis and Faraday's laws; and the corrosion of metals as a redox process.",
    objectives: [
      "Define standard electrode potential (E°) and describe the standard hydrogen electrode",
      "Draw cell diagrams and write cell notation for electrochemical cells (metal/metal-ion systems)",
      "Explain the meaning of the magnitude and sign of the e.m.f of a cell",
      "Distinguish primary and secondary cells and describe the Daniell cell, lead-acid battery cell, dry cells and fuel cells as generators of electrical energy",
      "State Faraday's laws of electrolysis and use 1F = 96,500 C in simple calculations of mass, volume of gas, number of entities and charge",
      "Describe the mechanism of electrolysis and the factors influencing the discharge of species, for the limited electrolytes (molten PbBr₂, molten/dilute/concentrated NaCl, CuSO₄(aq), dilute H₂SO₄, NaOH(aq), CaCl₂(aq))",
      "Explain the practical applications of electrolysis (electroplating, extraction and purification of metals)"
    ],
    terms: [
      { t: "Half-cell", d: "One electrode plus its ion solution; an electrochemical cell combines two half-cells.", x: "Zn/Zn²⁺ and Cu/Cu²⁺" },
      { t: "Standard hydrogen electrode (SHE)", d: "The reference electrode assigned E° = 0.00 V (platinum in H⁺ at 1 mol dm⁻³ with H₂ at 1 atm).", x: "The basis of the E° scale" },
      { t: "Standard electrode potential (E°)", d: "The potential of a half-cell under standard conditions, measured against the SHE.", x: "Cu²⁺/Cu: +0.34 V; Zn²⁺/Zn: −0.76 V" },
      { t: "e.m.f of a cell", d: "E°cell = E°(right/cathode) − E°(left/anode); the sign shows the direction of spontaneous reaction.", x: "Daniell: +0.34 − (−0.76) = +1.10 V" },
      { t: "Primary cell", d: "A non-rechargeable cell (dry cell).", x: "Leclanché dry cell" },
      { t: "Secondary cell", d: "A rechargeable cell.", x: "Lead-acid storage battery" },
      { t: "Faraday's first law", d: "The mass of a substance discharged is proportional to the charge passed (m = ZIt).", x: "Double the charge → double the mass" },
      { t: "Faraday's second law", d: "The masses discharged by the same charge are proportional to the chemical equivalent masses (molar masses / charges).", x: "1 F = 96,500 C = 1 mole of electrons" },
      { t: "Electrolysis", d: "The decomposition of an electrolyte by a direct electric current at the anode (oxidation) and cathode (reduction).", x: "Molten PbBr₂ → Pb + Br₂" },
      { t: "Corrosion", d: "The electrochemical (redox) deterioration of a metal; rusting of iron is the key example.", x: "Galvanizing; sacrificial (cathodic) protection" }
    ],
    tf: [
      { s: "Only metal/metal ion systems are used for standard electrode potential in the WASSCE syllabus.", a: "True", why: "Only metal/metal ion systems should be used." },
      { s: "The lead-acid battery is a primary (non-rechargeable) cell.", a: "False", why: "It is a secondary (rechargeable) cell; the dry cell is primary." },
      { s: "One faraday is 96,500 coulombs.", a: "True", why: "Simple calculations based on the relation 1F = 96,500 C and mole ratios." }
    ],
    mcq: [
      { q: "The standard hydrogen electrode is assigned a potential of:", o: ["+1.00 V", "0.00 V", "−1.00 V", "+0.76 V"], a: 1, why: "E° = 0.00 V by convention." },
      { q: "The e.m.f of the Daniell cell (Zn|Zn²⁺ || Cu²⁺|Cu) is:", o: ["+1.10 V", "+0.34 V", "−1.10 V", "+0.76 V"], a: 0, why: "+0.34 − (−0.76) = +1.10 V; the positive sign means the cell is spontaneous as written." },
      { q: "In the Daniell cell, oxidation occurs at the:", o: ["cathode (copper)", "anode (zinc)", "salt bridge", "voltmeter"], a: 1, why: "Zinc dissolves: Zn → Zn²⁺ + 2e⁻ (anode)." },
      { q: "A rechargeable battery such as the lead-acid cell is called a:", o: ["primary cell", "secondary cell", "fuel cell", "dry cell"], a: 1, why: "Secondary cells can be recharged." },
      { q: "If 193,000 C of charge is passed, the number of moles of electrons is (1F = 96,500 C):", o: ["1", "2", "3", "0.5"], a: 1, why: "193,000 / 96,500 = 2 mol e⁻." },
      { q: "In the electrolysis of molten PbBr₂, the cathode product is:", o: ["bromine", "lead", "lead(II) bromide", "hydrogen"], a: 1, why: "Pb²⁺ + 2e⁻ → Pb at the cathode; Br⁻ is discharged at the anode to Br₂." },
      { q: "Rusting of iron is best described as:", o: ["a physical change", "a redox (electrochemical) process", "a nuclear change", "an endothermic displacement"], a: 1, why: "Corrosion treated as a redox process; rusting of iron and its economic costs." }
    ],
    essay: [
      { q: "(a) Define standard electrode potential and describe the standard hydrogen electrode. (b) Draw the Daniell cell, label the electrodes, and write the half-equations and overall equation. (c) Calculate its e.m.f using E°(Cu²⁺/Cu) = +0.34 V and E°(Zn²⁺/Zn) = −0.76 V.", marks: 12, outline: [
        "(a) E° — the potential of a half-cell under standard conditions (1 mol dm⁻³, 1 atm, 298 K) measured against the SHE; SHE: Pt electrode in 1 mol dm⁻³ H⁺ with H₂ at 1 atm, E° = 0.00 V",
        "(b) Zn rod in ZnSO₄ | salt bridge | Cu rod in CuSO₄; anode (Zn): Zn → Zn²⁺ + 2e⁻; cathode (Cu): Cu²⁺ + 2e⁻ → Cu; overall: Zn + Cu²⁺ → Zn²⁺ + Cu",
        "(c) E°cell = E°cathode − E°anode = +0.34 − (−0.76) = +1.10 V; positive e.m.f → spontaneous"
      ] },
      { q: "(a) State Faraday's two laws of electrolysis. (b) A current of 2.0 A is passed through molten PbBr₂ for 1 hour. Calculate the mass of lead deposited (Pb = 207; 1F = 96,500 C). (c) State two practical applications of electrolysis.", marks: 10, outline: [
        "(a) 1st law: mass discharged ∝ charge (m = ZIt); 2nd law: for the same charge, masses ∝ chemical equivalent masses",
        "(b) Q = It = 2.0 × 3600 = 7200 C; moles of e⁻ = 7200/96,500 = 0.0746 mol; Pb²⁺ + 2e⁻ → Pb → moles Pb = 0.0373; mass = 0.0373 × 207 ≈ 7.7 g",
        "(c) Electroplating (e.g. chromium plating); extraction and purification of metals (electro-refining of copper); also: anodizing, electro-winning of aluminium"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Topic 12 (Redox Reactions), items (d)–(vi):" },
      { k: "bul", items: [
        "(d) Electrochemical cells: (i) standard electrode potential; (ii) drawing of cell diagram and writing cell notation; (iii) e.m.f of cells; (iv) application of electrochemical cells",
        "(e) Electrolysis: (i) electrolytic cells; (ii) principles of electrolysis; (iii) factors influencing discharge of species; (iv) Faraday's laws; (v) practical application",
        "(vi) Corrosion of metals"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "Standard hydrogen electrode: meaning of standard electrode potential (E°) and its measurement; only metal/metal ion systems should be used.",
        "Electrochemical cells as a combination of two half-cells; meaning of magnitude and sign of the e.m.f.",
        "Distinction between primary and secondary cells; Daniell cell, lead-acid battery cell, dry cells, fuel cells and their use as generators of electrical energy from chemical reactions.",
        "Electrolysis: definition; comparison of electrolytic and electrochemical cells; weak and strong electrolyte; mechanism of electrolysis.",
        "Electrolytes limited to molten PbBr₂ and NaCl, dilute NaCl solution, concentrated NaCl solution, CuSO₄(aq), dilute H₂SO₄, NaOH(aq) and CaCl₂(aq) (using platinum or graphite and copper electrodes).",
        "Simple calculations based on 1F = 96,500 C and mole ratios to determine mass, volume of gases, number of entities, charges etc. using half and overall reactions.",
        "Practical applications: electroplating, extraction and purification of metals.",
        "Corrosion treated as a redox process; rusting of iron and its economic costs; prevention based on relative magnitude of electrode potentials and preventive methods like galvanizing, sacrificial/cathodic protection and non-redox methods (painting, greasing/oiling etc.)."
      ] }
    ]
  },
  /* =============== C11 · CARBON COMPOUNDS & BIOCHEMISTRY =============== */
  {
    grade: 12, sem: "Two", icon: "🛢️", period: "C11",
    title: "Carbon Compounds & Basic Biochemistry",
    subtitle: "Classification and functional groups · nomenclature · petroleum · benzene · proteins, amino acids, fats/oils, carbohydrates · soaps and detergents",
    note: "Section A, Topics 13 and 15: the chemistry of carbon compounds (functional groups, petroleum, benzene) and basic biochemistry — proteins, amino acids, fats/oils and carbohydrates — with the polymer link.",
    objectives: [
      "Classify organic compounds into straight-chain, branched-chain, aromatic and alicyclic compounds",
      "Name compounds (IUPAC) with the functional groups: alkanes, alkenes, alkynes, hydroxyl compounds (aliphatic and aromatic), alkanoic acids, alkyl alkanoates (esters and salts) and amines",
      "Describe the sources, characteristic properties, uses and chemical reactions of the above compounds, including the tests for alkenes (Br₂/water, Br₂/CCl₄, KMnO₄(aq))",
      "Describe the separation and purification of organic compounds (distillation, crystallization, drying, chromatography) and the composition, classification and uses of petroleum/crude oil",
      "Describe benzene: structure and physical properties, chemical properties and uses",
      "Describe proteins (sources, properties, uses; peptide linkage; tests — Ninhydrin, Biuret, Millon), amino acids (nomenclature, general structure, difunctional nature), fats/oils (structure as esters of glycerol, saponification, soaps vs detergents, hard and soft water) and carbohydrates (mono-/di-/polysaccharides, hydrolysis, tests for reducing sugars)"
    ],
    terms: [
      { t: "Functional group", d: "The atom or group of atoms responsible for the characteristic reactions of a compound.", x: "—OH (alcohol); —COOH (carboxylic acid); C=C (alkene); —COO— (ester)" },
      { t: "Alkane", d: "Saturated hydrocarbon, CₙH₂ₙ₊₂ — substitution reactions only (e.g. halogenation).", x: "Methane CH₄; ethane C₂H₆" },
      { t: "Alkene", d: "Unsaturated hydrocarbon with a C=C bond, CₙH₂ₙ — addition reactions (H₂, Br₂, HBr); decolorizes Br₂ and acidified KMnO₄.", x: "Ethene C₂H₄" },
      { t: "Alkyne", d: "Unsaturated hydrocarbon with a C≡C bond.", x: "Ethyne (acetylene) C₂H₂" },
      { t: "Alkanol", d: "A hydroxy compound (alcohol), R—OH, from alkanes; aliphatic (ethanol) or aromatic (phenol).", x: "Ethanol C₂H₅OH; phenol C₆H₅OH" },
      { t: "Alkanoic acid", d: "A carboxylic acid, R—COOH; weak acid; esterifies with alcohols.", x: "Ethanoic acid CH₃COOH" },
      { t: "Alkyl alkanoate (ester)", d: "The product of esterification, R—COO—R′; pleasant-smelling, used as flavouring agents, plasticizers, solvents and in perfumes.", x: "Ethyl ethanoate" },
      { t: "Amine", d: "A derivative of ammonia, R—NH₂ (primary), R₂NH (secondary), R₃N (tertiary).", x: "Methylamine CH₃NH₂" },
      { t: "Peptide linkage", d: "The amide bond —CO—NH— linking amino acids in proteins.", x: "Proteins are polymers of amino acids" },
      { t: "Saponification", d: "The alkaline hydrolysis of a fat/oil to give glycerol + the salt of a fatty acid (soap).", x: "Oil + NaOH → soap + glycerol" },
      { t: "Monosaccharide", d: "A simple sugar that does not hydrolyze (glucose, fructose); disaccharides (sucrose, maltose) and polysaccharides (starch, cellulose) hydrolyze to monosaccharides.", x: "Glucose C₆H₁₂O₆" }
    ],
    tf: [
      { s: "Broad classification of organic compounds includes straight chain, branched chain, aromatic and alicyclic compounds.", a: "True", why: "Broad classification into straight chain, branched chain, aromatic and alicyclic compounds." },
      { s: "Alkenes are characterized by reaction with Br₂/water, Br₂/CCl₄ and KMnO₄(aq).", a: "True", why: "Use of reaction with Br₂/water, Br₂/CCl₄ and KMnO₄(aq) as means of characterizing alkenes." },
      { s: "Amino acids are monofunctional compounds.", a: "False", why: "Difunctional nature of amino acids (—NH₂ and —COOH)." },
      { s: "Proteins are polymers of amino acids linked by peptide (amide) linkage.", a: "True", why: "Proteins as polymers of amino acid molecules linked by peptide or amide linkage." }
    ],
    mcq: [
      { q: "The functional group in ethanol, C₂H₅OH, is the:", o: ["—COOH", "—OH (hydroxyl)", "—CHO", "—COO—"], a: 1, why: "Alcohols carry the —OH group." },
      { q: "Which reagent decolorizes when added to an alkene (e.g. ethene)?", o: ["dilute HCl", "bromine water / Br₂ in CCl₄", "aqueous NaCl", "sodium metal only"], a: 1, why: "The C=C adds bromine (and is oxidized by KMnO₄) — the alkene test." },
      { q: "The compound CH₃COOC₂H₅ is an:", o: ["ester", "amide", "aldehyde", "ketone"], a: 0, why: "Alkyl alkanoate — ethyl ethanoate, an ester." },
      { q: "Esterification is the reaction between an alkanoic acid and a:", o: ["alkane", "alkanol (alcohol)", "haloalkane", "amine only"], a: 1, why: "Acid + alcohol → ester + water (e.g. ethanoic acid + ethanol → ethyl ethanoate)." },
      { q: "Benzene, C₆H₆, is an example of a:", o: ["straight-chain compound", "cyclic (aromatic) compound", "branched alkane", "polymer"], a: 1, why: "Benzene is the parent aromatic (cyclic) compound." },
      { q: "The test for a protein using an alkaline copper(II) solution gives a violet/purple colour. This test uses:", o: ["Fehling's solution", "Biuret reagent", "bromine water", "iodine solution"], a: 1, why: "Biuret test for the peptide linkage (also Ninhydrin and Millon's tests)." },
      { q: "Soap is prepared by the alkaline hydrolysis (saponification) of a fat or oil with:", o: ["NaCl", "NaOH (or KOH)", "H₂SO₄", "H₂O only"], a: 1, why: "Saponification: fat + NaOH → soap (sodium salt of fatty acid) + glycerol." },
      { q: "Sucrose is a:", o: ["monosaccharide", "disaccharide", "polysaccharide", "lipid"], a: 1, why: "Sucrose hydrolyzes to glucose + fructose." }
    ],
    essay: [
      { q: "(a) Define functional group. (b) Name (IUPAC) and give the general formula for: alkanes, alkenes, alkanols, alkanoic acids and alkyl alkanoates. (c) State, with equations, two chemical properties of alkanols (ethanol) and two of alkanoic acids (ethanoic acid).", marks: 12, outline: [
        "(a) Functional group — the part of a molecule responsible for its characteristic reactions",
        "(b) Alkanes CₙH₂ₙ₊₂; alkenes CₙH₂ₙ; alkanols CₙH₂₊₁OH; alkanoic acids CₙH₂ₙ₊₁COOH; esters RCOOR′",
        "(c) Alkanols: combustion (C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O); oxidation to ethanoic acid (by KMnO₄ or acidified dichromate); esterification with ethanoic acid (→ ethyl ethanoate + water); reaction with sodium (→ C₂H₅ONa + H₂)",
        "Alkanoic acids: neutralization (2CH₃COOH + 2Na → 2CH₃COONa + H₂; or with NaOH → CH₃COONa + H₂O); esterification with ethanol (→ ethyl ethanoate + water); weak-acid behaviour (with carbonates → CO₂)"
      ] },
      { q: "Describe the structure and chemistry of fats and oils, and explain how soap is made. Compare soaps and synthetic detergents in their action on soft and hard water.", marks: 10, outline: [
        "Fats/oils: mono-, di- and tri-esters of propane-1,2,3-triol (glycerol) with fatty acids; from animals (fats, solid) and plants (oils, liquid)",
        "Physical: insoluble in water, soluble in organic solvents; chemical: acidic and alkaline hydrolysis, hydrogenation (oils → solid fats, e.g. margarine), test for fats (grease spot)",
        "Saponification: oil + NaOH (KOH) → glycerol + sodium (potassium) salts of fatty acids = soap (hard, with NaOH; soft, with KOH)",
        "Soap in soft water: a good lather; in hard water: the Ca²⁺/Mg²⁺ form insoluble scum, wasting soap",
        "Detergents (e.g. sodium lauryl sulphate): lather well in hard water (no scum), biodegradable vs non-biodegradable concerns"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Topics 13 (Chemistry of Carbon Compounds) and 15 (Basic Biochemistry and Synthetic Polymers):" },
      { k: "bul", items: [
        "13.0 (a) classification; (b) functional groups; (c) separation and purification of organic compounds; (d) petroleum/crude oil; (e) benzene; (f)–(k) alkanes, alkenes, alkynes, hydroxyl compounds, alkanoic acids, alkyl alkanoates, amines (sources, nomenclature/structure, physical properties, chemical reactions, uses)",
        "15.0 (a) proteins; (b) amino acids; (c) fats/oils; (d) carbohydrates; (e) synthetic polymers"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined" },
      { k: "bul", items: [
        "Broad classification into straight chain, branched chain, aromatic and alicyclic compounds.",
        "Systematic nomenclature for: alkanes, alkenes, alkynes, hydroxyl compounds (aliphatic and aromatic), alkanoic acids, alkyl alkanoates (esters and salts) and amines.",
        "Separation/purification: distillation; crystallization; drying and chromatography.",
        "Petroleum/crude oil: composition and classification; fractionation; uses of the fractions.",
        "Benzene: structure (Kekulé/cyclic) and physical properties; chemical properties (substitution — halogenation, nitration, sulphonation); uses.",
        "Alkenes: use of reaction with Br₂/water, Br₂/CCl₄ and KMnO₄(aq) as means of characterizing alkenes.",
        "Alkanoic acids: reactions with Na, alkanols (esterification); uses. Esters: as flavouring agents, plasticizers, solvents and in perfumes.",
        "Proteins: as polymers of amino acids linked by peptide or amide linkage; physical (solubility) and chemical properties (hydrolysis; tests — Ninhydrin, Biuret, Millon); sources and uses.",
        "Amino acids: nomenclature and general structure; difunctional nature.",
        "Fats/oils: as mono-, di- and tri-esters of glycerol; from animals and plants; physical (solubility) and chemical properties (acidic and alkaline hydrolysis; hydrogenation; test for fats and oil); preparation of soap (saponification); comparison of soaps and detergents and their action on soft and hard water; uses.",
        "Carbohydrates: as monosaccharides, disaccharides, polysaccharides; names and components of each class; physical (solubility) and chemical properties (hydrolysis of disaccharides into monosaccharides); tests for reducing sugars using sugar strips, Fehling's or Benedict's solution or Tollens' reagent; carbohydrates as examples of polymers; uses."
      ] }
    ]
  },
  /* =============== C12 · INDUSTRY, ENVIRONMENT & THE NATIONAL SECTION =============== */
  {
    grade: 12, sem: "Two", icon: "🏭", period: "C12",
    title: "Chemistry, Industry & the Environment (incl. National Section C)",
    subtitle: "The chemical industry · pollution and biotechnology · non-metals: C, O, H, water, halogens, N, S · metals: extraction, alloys, Na, Ca, Fe, Cu · the Paper 3 practicals",
    note: "Section A, Topics 14 and 16 plus SECTION C (for candidates in Nigeria, Sierra Leone, LIBERIA and The Gambia): non-metals and their compounds, and metals and their compounds; Paper 3 practical skills (quantitative, qualitative and general).",
    objectives: [
      "Explain the distinction between fine and heavy chemicals, the location of industries, and the effect of industries on the community",
      "Describe air, water and soil pollution — sources, effects, control — the greenhouse effect, ozone depletion, and biodegradable vs non-biodegradable pollutants",
      "Describe biotechnology: food processing and fermentation (gari, bread, alcoholic beverages including local gin)",
      "Describe the non-metals: carbon (allotropes, coal, coke, oxides of carbon, trioxocarbonate(IV) salts), oxygen, hydrogen, water and solution (hardness), the halogens (chlorine, HCl gas), nitrogen (ammonia, trioxonitrate(V) acid and salts) and sulphur (allotropes, trioxosulphate(IV) and tetraoxosulphate(VI) acids, contact process), and the noble gases",
      "Describe the extraction of aluminium, iron and tin; common alloys of Cu, Al, Pb, Fe, Sn; sodium and calcium compounds (limited sets); reactivity of iron and aluminium with air, water and acids; copper and its compounds (CuSO₄, CuO, CuCl₂)",
      "Carry out the Paper 3 practicals: general skills, quantitative analysis (acid–base and redox titrations) and qualitative analysis (cations, anions, gases, organic functional-group tests)"
    ],
    terms: [
      { t: "Fine chemicals", d: "High-purity chemicals produced in small quantities (e.g. pharmaceuticals, dyes); heavy chemicals are bulk chemicals (e.g. acids, alkalis, fertilizers).", x: "Sulphuric acid (heavy); a drug (fine)" },
      { t: "Greenhouse effect", d: "Warming of the earth's surface by greenhouse gases (CO₂, CH₄, CFCs) trapping infrared radiation.", x: "CO₂ from combustion" },
      { t: "Ozone depletion", d: "Destruction of the stratospheric ozone layer by CFCs, increasing harmful UV radiation.", x: "The 'ozone hole'" },
      { t: "Biotechnology", d: "The use of living organisms in industry — food processing and fermentation (gari, bread, alcoholic beverages, e.g. local gin).", x: "Yeast in brewing" },
      { t: "Allotrope", d: "Different structural forms of an element in the same state — e.g. graphite, diamond and amorphous carbon.", x: "Graphite (layers); diamond (tetrahedral network)" },
      { t: "Destructive distillation of coal", d: "Heating coal without air to give coke, coal tar (chemicals) and coal gas.", x: "Products: coke, ammonia, benzene, coal-tar products" },
      { t: "Producer gas / water gas", d: "Synthetic fuels: producer gas (C + air → CO + N₂); water gas (C + steam → CO + H₂).", x: "Syngas components for methanol, hydrogenation" },
      { t: "Hard water", d: "Water containing Ca²⁺/Mg²⁺ ions — it forms scum with soap; softened by boiling (temporary) or ion exchange/Na₂CO₃ (permanent).", x: "Temporary hardness: Ca(HCO₃)₂" },
      { t: "Contact process", d: "The industrial manufacture of tetraoxosulphate(VI) acid: S → SO₂ → SO₃ (V₂O₅ catalyst) → H₂SO₄ (in oleum).", x: "The largest-volume industrial chemical" },
      { t: "Blast furnace", d: "The industrial furnace in which iron ore (Fe₂O₃) is reduced by CO to molten iron (pig iron) with limestone as flux.", x: "Fe₂O₃ + 3CO → 2Fe + 3CO₂" },
      { t: "Alloy", d: "A mixture of a metal with other metals/non-metals having metallic properties — often harder and more corrosion-resistant.", x: "Brass (Cu + Zn); duralumin (Al + Cu); bronze (Cu + Sn); solder (Pb + Sn); steel (Fe + C)" },
      { t: "Standard solution / titration", d: "Quantitative analysis by acid–base titration (concentration, molar mass, water of crystallization, solubility, purity) and redox titrations (MnO₄⁻/Fe²⁺, MnO₄⁻/C₂O₄²⁻, I₂/S₂O₃²⁻).", x: "0.1 mol dm⁻³ HCl vs Na₂CO₃" },
      { t: "Qualitative analysis", d: "Characteristic tests: cations (NH₄⁺, Ca²⁺, Pb²⁺, Cu²⁺, Fe²⁺, Fe³⁺, Al³⁺, Zn²⁺ with NaOH/NH₃ + confirmatory), anions (Cl⁻, SO₃²⁻, CO²⁻, NO₃⁻, SO₄²⁻ with HCl/H₂SO₄ + confirmatory), gases (H₂, NH₃, CO₂, HCl, SO₂), organic groups (alkenes, alkanols, alkanoic acids, sugars, starch, proteins).", x: "Cu²⁺: blue solution → blue precipitate with NaOH, dissolves in excess (complex)" }
    ],
    tf: [
      { s: "The distinction between fine and heavy chemicals is required in the syllabus.", a: "True", why: "Distinction between fine and heavy chemicals." },
      { s: "Biodegradable pollutants break down naturally; non-biodegradable ones persist in the environment.", a: "True", why: "Biodegradable and non-biodegradable pollutants." },
      { s: "The compounds of sodium studied in Section C include all sodium salts.", a: "False", why: "Compounds must be limited to NaCl, NaOH, Na₂CO₃, NaNO₃, Na₂SO₄ and NaClO." },
      { s: "The contact process is the industrial method for tetraoxosulphate(VI) acid.", a: "True", why: "Contact process should be discussed — raw materials, processing, main products and by-products." }
    ],
    mcq: [
      { q: "Diamond, graphite and fullerenes are different forms of:", o: ["silicon", "carbon (allotropes)", "oxygen", "sulphur"], a: 1, why: "Allotropes of carbon — structures, properties and uses correlated with structure." },
      { q: "Coal heated in the ABSENCE of air gives coke, coal tar and coal gas. This process is:", o: ["calcination", "destructive distillation", "distillation", "sublimation"], a: 1, why: "Destructive distillation of coal." },
      { q: "The gas that turns lime water milky is:", o: ["H₂", "O₂", "CO₂", "HCl"], a: 2, why: "CO₂ + Ca(OH)₂ → CaCO₃ (white precipitate) + H₂O — the test for carbon(IV) oxide." },
      { q: "Temporary hardness of water is removed by:", o: ["adding soap", "boiling", "filtering only", "freezing"], a: 1, why: "Boiling decomposes Ca(HCO₃)₂ to CaCO₃ (scale); permanent hardness needs Na₂CO₃ or ion exchange." },
      { q: "The catalyst in the contact process (sulphuric acid industry) is:", o: ["MnO₂", "V₂O₅ (vanadium(V) oxide)", "Ni", "Fe"], a: 1, why: "2SO₂ + O₂ ⇌ 2SO₃ over V₂O₅ at ~450°C." },
      { q: "Iron is extracted from its oxide in the blast furnace by reduction with:", o: ["oxygen", "carbon monoxide", "chlorine", "water"], a: 1, why: "Fe₂O₃ + 3CO → 2Fe + 3CO₂." },
      { q: "An alloy of copper and zinc is:", o: ["bronze", "brass", "solder", "duralumin"], a: 1, why: "Brass = Cu + Zn; bronze = Cu + Sn; solder = Pb + Sn; duralumin = Al + Cu." },
      { q: "A blue precipitate with dilute NaOH that dissolves in excess to give a deep-blue solution identifies the ion:", o: ["Fe³⁺", "Cu²⁺", "Al³⁺", "Pb²⁺"], a: 1, why: "Cu(OH)₂ (blue) dissolves in excess NaOH/NH₃ to the deep-blue [Cu(NH₃)₄]²⁺/complex." }
    ],
    essay: [
      { q: "(a) Distinguish between fine and heavy chemicals. (b) Describe the sources, effects and control of air pollution, and explain the greenhouse effect and ozone depletion. (c) Give two examples of biotechnology in food processing.", marks: 10, outline: [
        "(a) Fine chemicals — high purity, small quantities (drugs, dyes, flavours); heavy chemicals — bulk (acids, alkalis, polymers, fertilizers); factors determining location of industries; effect of industries on the community",
        "(b) Air pollution: sources — combustion of fuels, factories, vehicle exhaust, volcanic; pollutants — SO₂, CO, NOₓ, smoke, dust, particulates; effects — respiratory disease, acid rain, damage to vegetation, corrosion; control — scrubbers, catalytic converters, cleaner fuels, regulations; greenhouse effect — CO₂/CH₄/CFCs trap IR → global warming; ozone depletion — CFCs destroy O₃ → UV hazard; biodegradable vs non-biodegradable pollutants",
        "(c) Fermentation: gari (cassava), bread (yeast), alcoholic beverages including local gin; also: dairy (yoghurt), vinegar"
      ] },
      { q: "Describe, with equations, the laboratory preparation of chlorine, its physical properties, and its reactions with (a) water, (b) cold dilute alkali, (c) an iron(II) salt. Explain the fountain experiment for hydrogen chloride.", marks: 10, outline: [
        "Preparation: MnO₂ + 4HCl (conc.) → MnCl₂ + Cl₂↑ + 2H₂O (or KMnO₄ + HCl); collected over concentrated HCl (slightly soluble); greenish-yellow, pungent, heavier than air",
        "Properties: bleaches (moist) by oxidation; oxidizing agent; variable oxidation states",
        "(a) Cl₂ + H₂O ⇌ HCl + HOCl (hypochlorous acid — bleaching/germ-killing)",
        "(b) Cl₂ + 2NaOH (cold, dilute) → NaCl + NaClO + H₂O (sodium oxochlorate(I) — bleaching agent)",
        "(c) Cl₂ + 2FeCl₂ → 2FeCl₃ (redox; Fe²⁺ oxidized to Fe³⁺)",
        "Fountain experiment for HCl: HCl is very soluble in water — inversion of a flask of HCl over water with a drop of indicator gives a fountain (blue with litmus — the solution is acidic); test for HCl gas: white fumes of NH₄Cl with ammonia"
      ] },
      { q: "(a) Describe the qualitative tests for the following cations: Cu²⁺, Fe³⁺, Al³⁺, Zn²⁺ (with dilute NaOH and dilute NH₃, and confirmatory tests). (b) Describe the tests for the gases CO₂ and NH₃.", marks: 10, outline: [
        "Cu²⁺: blue solution; NaOH → pale-blue Cu(OH)₂ precipitate (insoluble in excess); NH₃ → pale-blue precipitate dissolves in excess to deep-blue [Cu(NH₃)₄]²⁺; confirmatory: heating gives black CuO",
        "Fe³⁺: yellow-brown solution; NaOH → reddish-brown Fe(OH)₃ (insoluble in excess); NH₃ → reddish-brown (insoluble); confirmatory: K₄[Fe(CN)₆] → Prussian blue; or SCN⁻ → blood red",
        "Al³⁺: colourless solution; NaOH → white gelatinous Al(OH)₃ dissolves in excess NaOH (aluminate); NH₃ → white precipitate, insoluble in excess; confirmatory: flame test (none) / sodium zincate",
        "Zn²⁺: colourless; NaOH → white Zn(OH)₂ dissolves in excess (zincate); NH₃ → white precipitate dissolves in excess; confirmatory: H₂S → white ZnS in acidified solution",
        "CO₂: turns limewater milky (CaCO₃); relights a glowing splint? no — O₂ does; CO₂ extinguishes a lighted splint",
        "NH₃: pungent alkaline gas; turns red litmus blue; white NH₄Cl fumes with a rod dipped in conc. HCl"
      ] }
    ],
    study: [
      { k: "p", t: "WAEC syllabus scope — Section A, Topics 14 (Chemistry, Industry and the Environment) and 16 (Practicals), and SECTION C (Nigeria, Sierra Leone, LIBERIA, The Gambia):" },
      { k: "bul", items: [
        "14.0 (a) chemical industry: factors determining location, effect on the community, fine vs heavy chemicals, natural resources and industries in the candidate's own country and raw materials; (b) pollution: air, water and soil — sources, effects and control, greenhouse effect, ozone depletion, biodegradable/non-biodegradable; (c) biotechnology: food processing, fermentation (gari, bread, alcoholic beverages e.g. local gin)",
        "16.0 Practicals: (a) general skills — measurement of mass/volume, preparation and dilution of standard solutions, filtration, recrystallization, melting point, heats of neutralization and solution, pH by colorimetry, rates from concentration-time curves, equilibrium constants; (b) quantitative analysis — acid–base titrations (concentrations, molar masses and water of crystallization, solubility, percentage purity, Na₂CO₃/NaHCO₃ double indicator (Ghana only), stoichiometry) and redox titrations (acidic MnO₄⁻ with Fe²⁺; acidic MnO₄⁻ with C₂O₄²⁻; I₂ in KI vs S₂O₃²⁻); (c) qualitative analysis — cations (NH₄⁺, Ca²⁺, Pb²⁺, Cu²⁺, Fe²⁺, Fe³⁺, Al³⁺, Zn²⁺ with dilute NaOH and NH₃ + confirmatory), anions (Cl⁻, SO²⁻, CO₃²⁻, NO₃⁻, SO²⁻ with dilute HCl and conc. H₂SO₄ + confirmatory), comparative halogen displacement, gases (H₂, NH₃, CO₂, HCl, SO₂), organic functional groups (alkenes, alkanols, alkanoic acids, sugars (Fehling's/Benedict's), starch (iodine), proteins (Ninhydrin, Xanthoproteic, Biuret, Millon))",
        "SECTION C — 1.0 Non-metals and their compounds: (a) carbon (allotropes — graphite, diamond, amorphous: structures, properties, uses correlated with structure; combustion of allotropes; coal — anthracite, peat, lignite, destructive distillation and uses of products; coke — classification, uses, water gas and producer gas; oxides of carbon — CO₂ lab preparation, properties, uses, test; CO properties and uses only; trioxocarbonate(IV) salts — solubility, action of heat, dilute acid, uses); (b) oxygen (lab and industrial preparation, properties, uses, test; binary oxides — acidic, basic, amphoteric, neutral); (c) hydrogen (lab preparation, properties, uses, test); (d) water and solution (composition, test; water as solvent; hardness — causes, removal, town supply; advantages/disadvantages of hard and soft water; experiments comparing hardness; electrolysis of acidified water); (e) halogens (chlorine — lab preparation, properties and reactions, variable oxidation states, reactions with water and alkali (balanced equations), test; HCl gas — lab preparation, properties, uses, test, fountain experiment; uses of halogen compounds — silver halide in photography, sodium oxochlorate(I) as bleaching agent); (f) nitrogen (lab and industrial preparation from liquefied air, properties, uses; ammonia — lab and industrial preparation, properties, uses, test, fountain experiment; trioxonitrate(V) acid — lab preparation, properties, uses, action of heat, test for ions; trioxonitrate(V) salts); (g) sulphur (allotropes, uses; compounds — trioxosulphate(IV) acid and salts; tetraoxosulphate(VI) acid — industrial preparation (contact process: raw materials, processing, main products and by-products), reactions, uses); (h) the noble gases (properties, uses)",
        "SECTION C — 2.0 Metals and their compounds: (a) extraction of metals — aluminium, iron, tin; (b) alloys (common alloys of Cu, Al, Pb, Fe, Sn and uses); (c) sodium and its compounds (limited to NaCl, NaOH, Na₂CO₃, NaNO₃, Na₂SO₄, NaClO); (d) calcium and its compounds (limited to CaCO₃, CaO, CaSO₄, CaCl₂, Ca(OH)₂); (e) reactivity of iron and aluminium with air, water and acids; (f) copper and its compounds (limited to CuSO₄, CuO, CuCl₂); uses of metals"
      ] },
      { k: "h3", t: "Syllabus notes — what is examined (Section C detail)" },
      { k: "bul", items: [
        "Carbon allotropes: the uses should be correlated with their properties and structures; combustion of allotropes.",
        "Coal types: anthracite, peat, lignite; destructive distillation — water gas and producer gas.",
        "Carbon(IV) oxide: laboratory preparation, properties, uses, test; carbon(II) oxide: properties and uses only.",
        "Oxygen: test will be required; hydrogen: test will be required; water: test will be required — reference to the electrolysis of acidified water.",
        "Hardness: advantages and disadvantages of hard and soft water; experiments to compare the degrees of hardness in different water samples.",
        "Halogens: redox properties of the elements; displacement of one halogen by another; variable oxidation states; reaction with water and alkali (balanced equations); test for HCl gas; fountain experiment.",
        "Nitrogen: both laboratory and industrial preparations from liquefied air; test for ammonia; fountain experiment; action of heat on trioxonitrate(V) acid; test for trioxonitrate(V) ions; contact process discussed in full (raw materials, processing, main products and by-products).",
        "Metals: uses of metals; common alloys of Cu, Al, Pb, Fe, Sn and their uses."
      ] }
    ]
  }
  ]
};
window.WA_SUBJECTS.ch = window.WA_ch;
