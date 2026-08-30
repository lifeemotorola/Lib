/* Curriculum data — Republic of Liberia, SENIOR HIGH BIOLOGY, Grades 10–12.
   Derived from the "Biology 10-12" senior high curriculum guide (47 pp.),
   6 periods per grade, 18 units.

   Uses the same unit shape as SC_CURRICULUM so GEN_SC renders it unchanged:
     grade · period · sem · icon · title · subtitle · outcomes[] · objectives[]
     · note · focus[] · terms[]{t,d,x} · facts[]{q,a} · tf[]{s,a,why}
     · classify{title,groups} · diagram{title,caption,parts}
     · experiment{title,aim,materials,steps,expected}
     · apply[]{q,a} · activities[] · materials[] · assessment[]

   Per the project rule the digital research links listed in the source guide
   (dictionary.com, khanacademy.com, biomanbio.com, biologyjunction.com,
   planeta42.com, rankred.com, saps.org, thoughtco.com) are omitted: the pack
   must stay fully offline. Textbooks named in the guide are kept as text.
*/

var BI_CURRICULUM = [

/* ================================ GRADE 10 ================================ */
{
  grade:10, period:"I", sem:"One", icon:"🔬",
  title:"Introduction to Biology; The Cell",
  subtitle:"Branches of biology, characteristics of life, cell structure and transport across the membrane",
  outcomes:[
    "Acquire the fundamentals of laboratory skills in biology",
    "Attain the concept that living things have specific characteristics that distinguish them from non-living things",
    "Agree that all living things are made of cells"
  ],
  objectives:[
    "Define biology and discuss some of its branches",
    "Discover major contributors to the development of biology",
    "Compare the characteristics of living things and non-living things",
    "Relate the structures and composition of the cell to their functions",
    "Compare the basic functions of tissues, organs and systems",
    "Demonstrate the use of the microscope in studying biology",
    "Determine the difference among prokaryotic, eukaryotic and akaryotic cells",
    "Discover the difference between plant and animal cells",
    "Explain the movement of substances across the cell membrane"
  ],
  note:"<b>Biology</b> is the study of living things. Its two major branches are <b>zoology</b> (animals) and <b>botany</b> (plants). All living things share seven characteristics — <b>nutrition, respiration, excretion, irritability, movement, growth and reproduction</b>. The <b>cell</b> is the basic unit of life; substances cross its membrane by <b>diffusion, osmosis and active transport</b>.",
  focus:[
    "Definition of biology and its major branches",
    "Contributors: Aristotle, Linnaeus, Pasteur, Koch, Mendel",
    "Characteristics distinguishing living from non-living things",
    "Cell structure and organelles; plant versus animal cells",
    "Prokaryotic, eukaryotic and akaryotic cells",
    "Tissues, organs and systems",
    "The microscope and its use",
    "Diffusion, osmosis and active transport"
  ],
  terms:[
    {t:"biology", d:"the scientific study of living organisms", x:"Biology covers everything from bacteria to whales."},
    {t:"zoology", d:"the branch of biology dealing with animals", x:"Zoology studies animal structure and behaviour."},
    {t:"botany", d:"the branch of biology dealing with plants", x:"Botany includes the study of photosynthesis."},
    {t:"microbiology", d:"the study of microscopic organisms", x:"Microbiology examines bacteria and viruses."},
    {t:"cell", d:"the basic structural and functional unit of life", x:"All living things are made of cells."},
    {t:"organelle", d:"a specialised structure inside a cell", x:"The mitochondrion is an organelle."},
    {t:"prokaryotic cell", d:"a cell with no true nucleus bounded by a membrane", x:"Bacteria have prokaryotic cells."},
    {t:"eukaryotic cell", d:"a cell with a true membrane-bound nucleus", x:"Plant and animal cells are eukaryotic."},
    {t:"akaryotic", d:"having no nucleus or cellular structure at all", x:"Viruses are described as akaryotic."},
    {t:"nucleus", d:"the organelle containing the cell's genetic material", x:"The nucleus controls the cell's activities."},
    {t:"mitochondrion", d:"the organelle where respiration releases energy", x:"The mitochondrion is the powerhouse of the cell."},
    {t:"chloroplast", d:"the plant organelle containing chlorophyll for photosynthesis", x:"Chloroplasts make plant cells green."},
    {t:"cell wall", d:"the rigid outer layer of a plant cell made of cellulose", x:"The cell wall gives the plant cell its shape."},
    {t:"cell membrane", d:"the selectively permeable boundary of the cell", x:"The cell membrane controls what enters and leaves."},
    {t:"vacuole", d:"a fluid-filled sac in the cytoplasm", x:"Plant cells have one large central vacuole."},
    {t:"diffusion", d:"movement of particles from high to low concentration", x:"Oxygen enters cells by diffusion."},
    {t:"osmosis", d:"diffusion of water across a selectively permeable membrane", x:"Root hairs absorb water by osmosis."},
    {t:"active transport", d:"movement of substances against the concentration gradient using energy", x:"Active transport needs ATP."},
    {t:"tissue", d:"a group of similar cells performing the same function", x:"Muscle is a tissue."},
    {t:"organ", d:"a structure made of several tissues working together", x:"The heart is an organ."},
    {t:"irritability", d:"the ability to respond to a stimulus", x:"Irritability lets a plant bend toward light."}
  ],
  facts:[
    {q:"Define biology and name its two major branches.", a:"Biology is the scientific study of living organisms; its two major branches are zoology (animals) and botany (plants)."},
    {q:"Name the seven characteristics of living things.", a:"Nutrition, respiration, excretion, irritability, movement, growth and reproduction."},
    {q:"State one major contribution of each: Linnaeus, Pasteur, Koch, Mendel.", a:"Linnaeus devised the binomial system of classification; Pasteur disproved spontaneous generation and developed pasteurisation; Koch linked specific germs to specific diseases; Mendel established the laws of inheritance."},
    {q:"State three differences between a plant cell and an animal cell.", a:"A plant cell has a cellulose cell wall, chloroplasts and one large central vacuole; an animal cell has none of these and possesses centrioles."},
    {q:"Distinguish prokaryotic from eukaryotic cells.", a:"A prokaryotic cell has no true membrane-bound nucleus and few organelles, as in bacteria; a eukaryotic cell has a true nucleus and many membrane-bound organelles, as in plants and animals."},
    {q:"Why is Euglena said to border between plant and animal?", a:"It has chloroplasts and makes food by photosynthesis like a plant, but it moves with a flagellum and can feed heterotrophically like an animal."},
    {q:"Define diffusion, osmosis and active transport.", a:"Diffusion is movement of particles from high to low concentration; osmosis is diffusion of water across a selectively permeable membrane; active transport moves substances against the gradient using energy."},
    {q:"State the levels of organisation from cell to organism.", a:"Cells form tissues, tissues form organs, organs form systems, and systems form the organism."},
    {q:"Name the functions of the nucleus, mitochondrion and chloroplast.", a:"The nucleus controls cell activities and stores genetic material; the mitochondrion releases energy in respiration; the chloroplast carries out photosynthesis."}
  ],
  tf:[
    {s:"All living things are made of cells.", a:"true", why:"This is a central principle of the cell theory."},
    {s:"Bacteria have a true membrane-bound nucleus.", a:"false", why:"Bacteria are prokaryotic; their genetic material is not enclosed in a nuclear membrane."},
    {s:"Osmosis is the diffusion of water across a selectively permeable membrane.", a:"true", why:"That is precisely its definition."},
    {s:"Active transport takes place without any energy.", a:"false", why:"It moves substances against the concentration gradient and therefore requires energy."},
    {s:"Animal cells contain chloroplasts.", a:"false", why:"Chloroplasts occur only in plant cells and some protists."},
    {s:"Irritability means the ability to respond to a stimulus.", a:"true", why:"It is one of the seven characteristics of living things."},
    {s:"A tissue is made of organs.", a:"false", why:"It is the reverse: tissues are made of cells, and organs are made of tissues."}
  ],
  classify:{ title:"Sort these features", groups:[
    {name:"Plant cell only", items:["cell wall","chloroplast","large central vacuole"]},
    {name:"Animal cell only", items:["centriole","many small vacuoles","flexible outer shape"]},
    {name:"Both plant and animal cells", items:["nucleus","cell membrane","mitochondrion","cytoplasm"]},
    {name:"Characteristics of living things", items:["nutrition","respiration","excretion","reproduction"]}
  ]},
  diagram:{ title:"A typical plant cell", caption:"State the function of each labelled structure.", parts:[
    {p:"Cell wall", f:"Rigid cellulose layer giving shape and support"},
    {p:"Cell membrane", f:"Selectively permeable boundary controlling entry and exit of substances"},
    {p:"Nucleus", f:"Controls cell activities and contains the genetic material"},
    {p:"Chloroplast", f:"Contains chlorophyll and carries out photosynthesis"},
    {p:"Mitochondrion", f:"Site of respiration, releasing energy for the cell"},
    {p:"Vacuole", f:"Large sap-filled sac maintaining turgidity"},
    {p:"Cytoplasm", f:"Jelly-like medium in which the organelles are suspended"}
  ]},
  experiment:{
    title:"Demonstrating osmosis with a potato",
    aim:"To show that water moves across a selectively permeable membrane by osmosis.",
    materials:["Two large potatoes","Salt or concentrated sugar solution","Distilled water","Knife","Two dishes","Ruler"],
    steps:[
      "Peel both potatoes and cut a deep cavity in each.",
      "Boil one potato for ten minutes to kill its cells; leave the other raw.",
      "Stand each potato in a dish containing distilled water.",
      "Half-fill the cavity of each with concentrated salt solution and mark the level.",
      "Leave both for two hours, then observe and measure the level in each cavity."
    ],
    expect:"In the raw potato the liquid level in the cavity rises, because water passes from the dish through the living selectively permeable cell membranes into the concentrated salt solution. In the boiled potato the level does not change, because boiling has killed the cells and destroyed the selective permeability of the membranes.",
    why:"Osmosis is the movement of water across a selectively permeable membrane from a dilute to a more concentrated solution. Only living membranes are selectively permeable; boiling denatures the membrane proteins and destroys that selectivity, which is why the control shows no change."
  },
  apply:[
    {q:"A learner places wilted lettuce in cold water and it becomes crisp again. Explain using osmosis.", a:"Water moves by osmosis from the dilute surroundings into the more concentrated cell sap, making the cells turgid and the leaves firm again."},
    {q:"Why does adding salt to fresh fish preserve it?", a:"Salt makes the surroundings highly concentrated, so water leaves the bacterial cells by osmosis and they become dehydrated and cannot multiply."},
    {q:"Why must a specimen for the light microscope be very thin?", a:"Light must pass through the specimen to form the image; a thick specimen blocks the light and gives no clear detail."},
    {q:"A cell needs to take in a mineral already more concentrated inside than outside. Which process is required and why?", a:"Active transport, because the mineral must move against the concentration gradient, which diffusion cannot do; this requires energy from respiration."},
    {q:"Why do root cells of a plant have many mitochondria?", a:"Root cells absorb mineral salts by active transport, which demands a great deal of energy, and mitochondria release that energy in respiration."}
  ],
  activities:[
    "Using a concept map, illustrate the branches of biology and their sub-branches",
    "State the contributions of Aristotle, Linnaeus, Pasteur, Koch and Mendel",
    "Distinguish the basic characteristics of living things",
    "LAB: demonstrate the correct use of the microscope",
    "LAB: prepare a wet mount of onion epidermis and observe the cells",
    "Draw and label plant and animal cells and compare them"
  ],
  materials:[
    "Primary text: Baffour Asante-Owusu et al., Senior High Biology (Longman, 2009)",
    "Secondary text: Sue Hocking et al., OCR Biology (OCR/Heinemann, 2008)",
    "Light microscope, slides and cover slips",
    "Onion, potato, salt, iodine solution",
    "Charts of plant and animal cells"
  ],
  assessment:["Class discussion","Laboratory drawing and report","Oral presentation","Written test","Group presentation"]
},
{
  grade:10, period:"II", sem:"One", icon:"🦠",
  title:"Hierarchy and Diversity of Living Things; Unicellular Organisms",
  subtitle:"Classification into five kingdoms, taxonomy, and the structure of single-celled organisms",
  outcomes:[
    "Appreciate the systematic classification of organisms based on their characteristics",
    "Explain the similarities and differences among the five major kingdoms of living things",
    "Develop the concept that life evolved from the simplest to the complex forms"
  ],
  objectives:[
    "Outline the diversity of living things",
    "Discuss the basis of taxonomy (classification)",
    "Discuss the relationship of viruses bordering between living and non-living things",
    "List the major characteristics of the kingdoms Monera, Protista, Fungi, Plantae and Animalia",
    "Classify organisms into kingdom, phylum, class, order, family, genus and species",
    "Explain the basic characteristics of unicellular organisms",
    "Name unicellular organisms that cause disease and the diseases they cause"
  ],
  note:"<b>Taxonomy</b> is the science of classifying organisms. The hierarchy runs <b>Kingdom → Phylum → Class → Order → Family → Genus → Species</b>. The five kingdoms are <b>Monera</b> (bacteria), <b>Protista</b>, <b>Fungi</b>, <b>Plantae</b> and <b>Animalia</b>. Each organism receives a two-word Latin name — the <b>binomial system</b> of Linnaeus, as in <i>Homo sapiens</i>.",
  focus:[
    "Classification and its importance",
    "The taxonomic hierarchy and the binomial system",
    "The five kingdoms and their characteristics",
    "Viruses as bordering living and non-living",
    "Unicellular organisms: Amoeba, Paramecium, Euglena",
    "Disease-causing unicellular organisms and the diseases they cause",
    "The life cycle of Plasmodium"
  ],
  terms:[
    {t:"taxonomy", d:"the science of classifying living organisms", x:"Taxonomy groups organisms by shared features."},
    {t:"classification", d:"the arrangement of organisms into groups by similarity", x:"Classification makes the diversity of life manageable."},
    {t:"species", d:"a group of organisms that can interbreed and produce fertile offspring", x:"The species is the basic unit of classification."},
    {t:"genus", d:"a group of closely related species", x:"Panthera is the genus of lions and tigers."},
    {t:"binomial system", d:"naming an organism by its genus and species", x:"The binomial system gives Homo sapiens."},
    {t:"Monera", d:"the kingdom of prokaryotic organisms such as bacteria", x:"Monera have no true nucleus."},
    {t:"Protista", d:"the kingdom of mostly unicellular eukaryotes", x:"Amoeba belongs to Protista."},
    {t:"Fungi", d:"the kingdom of non-photosynthetic organisms that absorb food", x:"Mushrooms and moulds are Fungi."},
    {t:"Plantae", d:"the kingdom of multicellular photosynthetic organisms", x:"Plantae make their own food."},
    {t:"Animalia", d:"the kingdom of multicellular organisms that feed on others", x:"Animalia cannot make their own food."},
    {t:"unicellular", d:"consisting of a single cell", x:"Amoeba is unicellular."},
    {t:"Amoeba", d:"a shapeless single-celled protist moving by pseudopodia", x:"Amoeba engulfs food by phagocytosis."},
    {t:"Paramecium", d:"a slipper-shaped protist moving by cilia", x:"Paramecium has two nuclei."},
    {t:"Euglena", d:"a protist with both plant and animal features", x:"Euglena has chloroplasts and a flagellum."},
    {t:"pseudopodium", d:"a temporary projection of cytoplasm used to move and feed", x:"Amoeba extends a pseudopodium."},
    {t:"cilia", d:"short hair-like structures used in movement", x:"Cilia beat to move Paramecium."},
    {t:"flagellum", d:"a long whip-like structure used for movement", x:"Euglena swims using a flagellum."},
    {t:"Plasmodium", d:"the sporozoan parasite that causes malaria", x:"Plasmodium is carried by the Anopheles mosquito."},
    {t:"protozoa", d:"single-celled animal-like protists", x:"Some protozoa are parasites."},
    {t:"vector", d:"an organism that carries a pathogen from host to host", x:"The mosquito is the vector of malaria."}
  ],
  facts:[
    {q:"State the taxonomic hierarchy from largest to smallest group.", a:"Kingdom, Phylum, Class, Order, Family, Genus, Species."},
    {q:"Name the five kingdoms and give one example of each.", a:"Monera — bacteria; Protista — Amoeba; Fungi — mushroom; Plantae — maize; Animalia — man."},
    {q:"What is the binomial system and who devised it?", a:"Naming each organism by genus and species in Latin, devised by Carl Linnaeus, as in Homo sapiens."},
    {q:"Why are viruses said to border between living and non-living things?", a:"Outside a host they are inert crystals with no respiration, nutrition or growth; inside a living cell they reproduce and pass on genetic material like living things."},
    {q:"Name three unicellular organisms and their means of movement.", a:"Amoeba moves by pseudopodia, Paramecium by cilia, and Euglena by a flagellum."},
    {q:"Name three sexually transmitted infections and the type of organism that causes each.", a:"Gonorrhoea and syphilis are caused by bacteria; HIV/AIDS is caused by a virus; trichomoniasis is caused by the protozoan Trichomonas vaginalis."},
    {q:"Which organism causes malaria and which vector transmits it?", a:"The sporozoan Plasmodium, transmitted by the female Anopheles mosquito."},
    {q:"Name two diseases caused by parasitic protozoa other than malaria.", a:"Amoebic dysentery caused by Entamoeba histolytica, and sleeping sickness caused by Trypanosoma."},
    {q:"State three benefits of classifying organisms.", a:"It allows organisms to be identified and named unambiguously, shows evolutionary relationships, and makes information about the diversity of life easier to organise and retrieve."}
  ],
  tf:[
    {s:"The species is the basic unit of classification.", a:"true", why:"Members of one species can interbreed and produce fertile offspring."},
    {s:"Bacteria belong to the kingdom Protista.", a:"false", why:"Bacteria belong to the kingdom Monera because they are prokaryotic."},
    {s:"Viruses reproduce only inside a living host cell.", a:"true", why:"They lack the machinery to reproduce independently."},
    {s:"Euglena has both chloroplasts and a flagellum.", a:"true", why:"That is why it borders between plant and animal characteristics."},
    {s:"Amoeba moves by means of cilia.", a:"false", why:"Amoeba moves by pseudopodia; Paramecium uses cilia."},
    {s:"Malaria is caused by a bacterium.", a:"false", why:"It is caused by the protozoan Plasmodium, transmitted by the Anopheles mosquito."}
  ],
  classify:{ title:"Place each organism in its kingdom", groups:[
    {name:"Monera", items:["Escherichia coli","blue-green algae","Vibrio cholerae"]},
    {name:"Protista", items:["Amoeba","Paramecium","Euglena","Plasmodium"]},
    {name:"Fungi", items:["mushroom","Rhizopus","yeast"]},
    {name:"Plantae", items:["maize","fern","moss"]},
    {name:"Animalia", items:["earthworm","frog","man"]}
  ]},
  diagram:{ title:"Amoeba and Paramecium", caption:"State the function of each labelled structure.", parts:[
    {p:"Pseudopodium (Amoeba)", f:"Temporary cytoplasmic projection for movement and engulfing food"},
    {p:"Contractile vacuole", f:"Expels excess water, controlling osmoregulation"},
    {p:"Food vacuole", f:"Contains and digests engulfed food particles"},
    {p:"Nucleus", f:"Controls the activities of the cell"},
    {p:"Cilia (Paramecium)", f:"Short hairs that beat to drive the organism through water"},
    {p:"Oral groove (Paramecium)", f:"Channel through which food is swept into the cell"},
    {p:"Cell membrane / pellicle", f:"Boundary of the cell; the pellicle also gives Paramecium its fixed shape"}
  ]},
  experiment:{
    title:"Observing protozoa in pond water",
    aim:"To observe and identify unicellular organisms in a sample of pond or brackish water.",
    materials:["Pond or brackish water sample","Microscope","Slides and cover slips","Dropper","Cotton wool strands","Methylene blue stain"],
    steps:[
      "Leave the pond water sample to stand for a day so the organisms concentrate near the surface.",
      "Place one drop of the water on a clean slide with a dropper.",
      "Add a few strands of cotton wool to slow fast-moving organisms.",
      "Lower a cover slip gently at an angle to avoid air bubbles.",
      "Examine first under low power, then under high power, and make labelled drawings.",
      "Add a drop of methylene blue at the edge of the cover slip to show the nuclei."
    ],
    expect:"Several kinds of unicellular organism should be visible. Amoeba appears as a shapeless creeping cell extending pseudopodia; Paramecium is slipper-shaped and swims rapidly using cilia; Euglena is spindle-shaped, green from its chloroplasts, and swims with a flagellum.",
    why:"Pond water contains a community of unicellular protists. Each is adapted to move in a different way — pseudopodia, cilia or a flagellum — which is the basis on which the protozoa are classified."
  },
  apply:[
    {q:"Why does draining stagnant water reduce malaria in a community?", a:"Anopheles mosquitoes lay eggs in stagnant water; removing the breeding sites reduces the vector population and so reduces transmission of Plasmodium."},
    {q:"Two organisms share the same genus name. What does this tell you?", a:"They are very closely related, belonging to the same genus but different species, and share many structural features though they cannot normally interbreed successfully."},
    {q:"A learner argues that viruses should be classified in a kingdom of their own. Give one argument for and one against.", a:"For: they possess genetic material and evolve. Against: outside a host they show no characteristic of life at all — no nutrition, respiration, growth or independent reproduction."},
    {q:"Why is boiling drinking water an effective control for amoebic dysentery?", a:"Boiling kills the cysts of Entamoeba histolytica in the water, breaking the route by which the parasite reaches the human gut."},
    {q:"Explain why Euglena is difficult to place in a single kingdom.", a:"It photosynthesises with chloroplasts like a plant, yet moves actively by a flagellum and can feed heterotrophically in darkness like an animal, so it fits neither group cleanly."}
  ],
  activities:[
    "List the general characteristics of each of the five kingdoms",
    "LAB: draw and label one organism from each kingdom",
    "Draw and label Amoeba, Paramecium and Euglena",
    "LAB: observe protozoa in a drop of pond water under the microscope",
    "Draw the life cycle of Plasmodium",
    "Discuss the STI-causing agents and methods of prevention"
  ],
  materials:[
    "Primary text: Baffour Asante-Owusu et al., Senior High Biology (Longman, 2009)",
    "Secondary text: Sue Hocking et al., OCR Biology (OCR/Heinemann, 2008)",
    "Microscopes, slides, cover slips",
    "Pond or brackish water samples",
    "Charts of the five kingdoms and of the Plasmodium life cycle"
  ],
  assessment:["Laboratory drawings","Group presentation","Class discussion","Written test","Assignment"]
},
{
  grade:10, period:"III", sem:"One", icon:"🪱",
  title:"Multicellular Organisms and Reproductive Structures",
  subtitle:"Tissues to systems, sponges and hydra, the worms, and human reproductive health",
  outcomes:[
    "Develop the concept that tissues are formed from cells, organs from tissues, and systems from organs",
    "Choose appropriate methods of preventing parasitic worm infections, pregnancy, STIs and substance abuse"
  ],
  objectives:[
    "Discuss the functions of the four types of tissues",
    "Explain the concept of an organ as a combination of tissues and a system as a combination of organs",
    "Describe the general characteristics of multicellular organisms",
    "Describe the general characteristics and morphological features of sponges and hydra",
    "Classify and structurally differentiate worms",
    "Explain parasitism among worms and the alternative hosts",
    "Describe the structure and function of the male and female reproductive organs",
    "Outline the effects, symptoms and methods of preventing STIs and substance abuse"
  ],
  note:"Multicellular bodies are organised in levels: <b>cells → tissues → organs → systems → organism</b>. The four basic animal tissues are <b>epithelial, connective, muscular and nervous</b>. The worms fall into three groups — <b>flatworms</b> (Platyhelminthes), <b>roundworms</b> (Nematoda) and <b>segmented worms</b> (Annelida). Many are parasites transmitted through contaminated food, water or soil.",
  focus:[
    "Tissues, organs and systems",
    "General characteristics of sponges and hydra",
    "Flatworms: planarian, blood and liver flukes, tapeworms",
    "Roundworms: Ascaris, hookworm, filarial worm, trichina worm",
    "Segmented worms: earthworm and leech",
    "Conditions for oral transmission of intestinal parasites",
    "Human reproductive organs and their functions",
    "Prevention of STIs, unplanned pregnancy and substance abuse"
  ],
  terms:[
    {t:"multicellular", d:"made up of many cells", x:"A hydra is multicellular."},
    {t:"epithelial tissue", d:"tissue that covers surfaces and lines cavities", x:"Epithelial tissue lines the gut."},
    {t:"connective tissue", d:"tissue that binds and supports other tissues", x:"Bone and blood are connective tissues."},
    {t:"muscular tissue", d:"tissue that contracts to produce movement", x:"Muscular tissue moves the limbs."},
    {t:"nervous tissue", d:"tissue that conducts impulses", x:"Nervous tissue carries messages to the brain."},
    {t:"sponge", d:"a simple aquatic animal with a porous body", x:"A sponge filters food from water."},
    {t:"hydra", d:"a small freshwater animal with tentacles and stinging cells", x:"Hydra reproduces by budding."},
    {t:"tentacle", d:"a flexible arm-like structure used to capture prey", x:"Hydra paralyses prey with its tentacles."},
    {t:"parasite", d:"an organism living in or on another and harming it", x:"A tapeworm is a parasite."},
    {t:"host", d:"an organism on which a parasite lives", x:"Man is the host of the tapeworm."},
    {t:"intermediate host", d:"a host in which a parasite passes a larval stage", x:"The pig is the intermediate host of the pork tapeworm."},
    {t:"tapeworm", d:"a flat segmented parasitic worm of the intestine", x:"The tapeworm absorbs digested food from the gut."},
    {t:"fluke", d:"a flat, leaf-shaped parasitic worm", x:"The liver fluke attacks the bile ducts."},
    {t:"Ascaris", d:"a large parasitic roundworm of the human intestine", x:"Ascaris eggs are swallowed in contaminated food."},
    {t:"hookworm", d:"a roundworm that enters through the skin of the feet", x:"Hookworm causes anaemia."},
    {t:"filarial worm", d:"a roundworm causing elephantiasis, spread by mosquitoes", x:"Filarial worms block lymph vessels."},
    {t:"segmented worm", d:"a worm whose body is divided into rings, such as the earthworm", x:"Segmented worms have a true body cavity."},
    {t:"scolex", d:"the head of a tapeworm bearing hooks and suckers", x:"The scolex anchors the worm to the gut wall."},
    {t:"gamete", d:"a sex cell — sperm or ovum", x:"Fertilisation is the fusion of gametes."},
    {t:"abstinence", d:"refraining from sexual activity", x:"Abstinence prevents STIs and pregnancy."}
  ],
  facts:[
    {q:"Name the four types of animal tissue and one function of each.", a:"Epithelial covers and lines surfaces; connective binds and supports; muscular contracts for movement; nervous conducts impulses."},
    {q:"State the levels of organisation in a multicellular organism.", a:"Cells form tissues, tissues form organs, organs form systems, and systems make up the organism."},
    {q:"Name the three cell types of a sponge and their functions.", a:"Collar (flagellated) cells drive the water current and trap food; pore cells form openings for water entry; amoeboid cells in the middle layer distribute food and form gametes."},
    {q:"How does hydra capture its prey?", a:"It paralyses small animals with stinging cells (nematocysts) on its tentacles and draws them into the mouth."},
    {q:"Name the three groups of worms and one example of each.", a:"Flatworms — tapeworm; roundworms — Ascaris; segmented worms — earthworm."},
    {q:"State the conditions for oral transmission of intestinal parasites.", a:"Eggs or cysts passed in faeces must contaminate food, water or hands, and be swallowed by a new host, usually where sanitation is poor and hands are not washed."},
    {q:"How does hookworm enter the human body and what does it cause?", a:"Larvae in the soil penetrate the skin of bare feet, travel in the blood to the lungs and are swallowed; in the gut they suck blood and cause anaemia."},
    {q:"State three methods of preventing parasitic worm infection.", a:"Use latrines and dispose of faeces safely, wash hands and vegetables and boil drinking water, and wear shoes to prevent hookworm entering through the feet."},
    {q:"Name the main male and female reproductive organs and one function of each.", a:"Male: testes produce sperm and testosterone; the penis delivers sperm. Female: ovaries produce ova and oestrogen; the oviduct is the site of fertilisation; the uterus holds the developing foetus."}
  ],
  tf:[
    {s:"An organ is made of several tissues working together.", a:"true", why:"For example the stomach contains epithelial, muscular, connective and nervous tissue."},
    {s:"Sponges have true tissues and organs.", a:"false", why:"Sponges are the simplest multicellular animals and lack true tissues and organs."},
    {s:"The tapeworm has a well-developed digestive system.", a:"false", why:"It has none; it absorbs already-digested food directly through its body surface."},
    {s:"Hookworm larvae can enter the body through the skin of the feet.", a:"true", why:"This is why wearing shoes is an effective preventive measure."},
    {s:"Washing hands before eating helps prevent Ascaris infection.", a:"true", why:"Ascaris is transmitted when eggs from contaminated hands or food are swallowed."},
    {s:"Fertilisation in humans normally occurs in the uterus.", a:"false", why:"It normally occurs in the oviduct (fallopian tube); the embryo then implants in the uterus."}
  ],
  classify:{ title:"Group these worms", groups:[
    {name:"Flatworms (Platyhelminthes)", items:["planarian","liver fluke","blood fluke","tapeworm"]},
    {name:"Roundworms (Nematoda)", items:["Ascaris","hookworm","filarial worm","trichina worm"]},
    {name:"Segmented worms (Annelida)", items:["earthworm","leech"]},
    {name:"Prevention of worm infection", items:["use latrines","wash hands","wear shoes","boil drinking water"]}
  ]},
  diagram:{ title:"Hydra and the tapeworm", caption:"State the function of each labelled structure.", parts:[
    {p:"Tentacles (hydra)", f:"Bear stinging cells to paralyse and capture prey"},
    {p:"Mouth (hydra)", f:"Single opening for taking in food and expelling waste"},
    {p:"Body stalk (hydra)", f:"Hollow column enclosing the digestive cavity"},
    {p:"Basal disc (hydra)", f:"Attaches the animal to a surface"},
    {p:"Scolex (tapeworm)", f:"Head with hooks and suckers anchoring the worm to the gut wall"},
    {p:"Neck (tapeworm)", f:"Region of growth where new segments are produced"},
    {p:"Proglottid (tapeworm)", f:"Body segment containing male and female reproductive organs"}
  ]},
  experiment:{
    title:"External features of the earthworm",
    aim:"To examine and record the external structures of a segmented worm.",
    materials:["Live earthworm","Hand lens","Petri dish","Moist paper towel","Ruler","Drawing paper"],
    steps:[
      "Place the earthworm in a Petri dish lined with moist paper and allow it to settle.",
      "Observe the direction of movement to establish the anterior (front) end.",
      "Count the segments and locate the swollen clitellum.",
      "Run a finger gently along the underside from back to front to feel the chaetae.",
      "Record the length and make a labelled drawing showing mouth, clitellum, segments and anus.",
      "Return the worm to damp soil after the observation."
    ],
    expect:"The body is cylindrical and divided into many ring-like segments. The anterior end is more pointed and carries the mouth. The clitellum is a smooth swollen band about one third along the body, which secretes the cocoon in reproduction. Small bristles called chaetae can be felt on the underside and grip the soil during movement.",
    why:"The earthworm shows the annelid body plan: a segmented cylindrical body with chaetae for grip, a clitellum for reproduction, and a distinct anterior end — the level of organisation is far higher than in hydra, with true organs and a complete gut."
  },
  apply:[
    {q:"A village has a high rate of Ascaris infection. Suggest three practical control measures.", a:"Build and use latrines so faeces do not contaminate soil and water, provide safe drinking water and hand-washing points, and treat those infected while teaching washing of vegetables before eating."},
    {q:"Why is the tapeworm's lack of a gut not a disadvantage to it?", a:"It lives immersed in the host's already-digested food in the intestine and absorbs nutrients directly through its body surface, so a gut would be redundant."},
    {q:"Explain why eating undercooked pork can cause tapeworm infection.", a:"The pig is the intermediate host and its muscle may contain the larval cysts; if not killed by thorough cooking, the larvae develop into adult worms in the human intestine."},
    {q:"A learner says worm infection is only a matter of dirtiness. Give a fuller explanation.", a:"It is chiefly a matter of sanitation and infrastructure — the absence of latrines, safe water and footwear — which are community and economic problems, not merely personal habits."},
    {q:"How does the level of organisation of hydra differ from that of an earthworm?", a:"Hydra has only two cell layers and a single body cavity with one opening, and lacks true organs; the earthworm has true tissues, organs and organ systems with a complete gut having mouth and anus."}
  ],
  activities:[
    "Explain tissues in relation to organs and systems",
    "Draw and label the body structure of a sponge and state the function of each part",
    "Draw the three different cells of a sponge and state the function of each",
    "Draw and label the parts of a hydra and state their functions",
    "Explain the conditions for oral transmission of intestinal parasites",
    "Outline effects, symptoms and prevention of STIs and substance abuse"
  ],
  materials:[
    "Primary text: Baffour Asante-Owusu et al., Senior High Biology (Longman, 2009)",
    "Preserved or live specimens: earthworm, hydra, sponge",
    "Hand lenses and microscopes",
    "Charts of the reproductive systems and of parasitic worms",
    "Health literature on STIs and substance abuse"
  ],
  assessment:["Laboratory drawings and report","Assignment","Class discussion","Oral presentation","Written test"]
},
{
  grade:10, period:"IV", sem:"Two", icon:"🦗",
  title:"Arthropods and Biological Control of Pests",
  subtitle:"Classification, metamorphosis, moulting, vectors and the economic importance of arthropods",
  outcomes:[
    "Classify arthropods, outline the various ways to control pests, and explain the economic importance of some arthropods"
  ],
  objectives:[
    "Describe and classify arthropods according to their morphology",
    "Explain the process of metamorphosis, complete and incomplete",
    "Explain ecdysis (moulting) in arthropods",
    "Discuss the role of vectors — cockroach, mosquito, housefly and tsetse fly",
    "Explain the general characteristics of the butterfly",
    "Discuss the economic importance of arthropods and methods of biological control"
  ],
  note:"<b>Arthropods</b> have a segmented body, a hard <b>exoskeleton</b> of chitin and <b>jointed appendages</b>. Because the exoskeleton cannot stretch, they grow by <b>ecdysis</b> — moulting. <b>Complete metamorphosis</b> passes through egg → larva → pupa → adult; <b>incomplete metamorphosis</b> passes through egg → nymph → adult with no pupal stage.",
  focus:[
    "General characteristics and classification of arthropods",
    "Morphology and life processes: respiration, feeding, mouthparts, body segments",
    "Complete and incomplete metamorphosis",
    "Ecdysis (moulting)",
    "Vectors: mosquito, tsetse fly, housefly and cockroach",
    "The life cycle of the Anopheles mosquito and malaria",
    "Economic importance of arthropods and biological control of pests"
  ],
  terms:[
    {t:"arthropod", d:"an invertebrate with jointed limbs and an exoskeleton", x:"Insects and crabs are arthropods."},
    {t:"exoskeleton", d:"a hard external skeleton of chitin", x:"The exoskeleton protects and prevents water loss."},
    {t:"chitin", d:"the tough substance forming the arthropod exoskeleton", x:"Chitin is light but strong."},
    {t:"ecdysis", d:"the shedding of the exoskeleton to allow growth", x:"A locust grows by ecdysis."},
    {t:"metamorphosis", d:"a change of body form during development", x:"The butterfly undergoes metamorphosis."},
    {t:"larva", d:"the immature feeding stage that differs from the adult", x:"The caterpillar is the larva of a butterfly."},
    {t:"pupa", d:"the resting stage in which the larva changes into the adult", x:"Inside the pupa the tissues are reorganised."},
    {t:"nymph", d:"a young stage resembling the adult but sexually immature", x:"A grasshopper nymph has no wings."},
    {t:"insect", d:"an arthropod with three body parts, six legs and usually wings", x:"A housefly is an insect."},
    {t:"arachnid", d:"an arthropod with two body parts and eight legs", x:"Spiders and scorpions are arachnids."},
    {t:"crustacean", d:"a mainly aquatic arthropod with two pairs of antennae", x:"Crabs and shrimps are crustaceans."},
    {t:"myriapod", d:"an arthropod with many body segments each bearing legs", x:"Millipedes are myriapods."},
    {t:"thorax", d:"the middle body region bearing legs and wings", x:"An insect's legs attach to the thorax."},
    {t:"abdomen", d:"the hind body region containing digestive and reproductive organs", x:"The abdomen has spiracles for breathing."},
    {t:"spiracle", d:"a small opening through which air enters the tracheal system", x:"Insects breathe through spiracles."},
    {t:"trachea", d:"an air tube carrying oxygen directly to the tissues in insects", x:"Tracheae branch throughout the insect body."},
    {t:"vector", d:"an organism that carries a pathogen from one host to another", x:"The tsetse fly is the vector of sleeping sickness."},
    {t:"biological control", d:"controlling a pest using its natural enemy", x:"Biological control avoids chemical pesticides."},
    {t:"pollination", d:"the transfer of pollen from anther to stigma", x:"Bees carry out pollination."},
    {t:"pest", d:"an organism that damages crops, animals or property", x:"Weevils are a storage pest."}
  ],
  facts:[
    {q:"State four general characteristics of arthropods.", a:"A segmented body, a hard chitinous exoskeleton, jointed appendages, and bilateral symmetry with a ventral nerve cord."},
    {q:"Name the four main classes of arthropods with an example of each.", a:"Insecta — housefly; Arachnida — spider; Crustacea — crab; Myriapoda — millipede."},
    {q:"Why must arthropods moult in order to grow?", a:"The exoskeleton is rigid and cannot stretch, so it must be shed periodically and a new larger one formed beneath it."},
    {q:"Distinguish complete from incomplete metamorphosis, with an example of each.", a:"Complete metamorphosis has four stages — egg, larva, pupa, adult — as in the butterfly and mosquito; incomplete metamorphosis has three — egg, nymph, adult — as in the grasshopper and cockroach."},
    {q:"Describe the life cycle of the Anopheles mosquito.", a:"Eggs are laid singly on still water; they hatch into larvae (wigglers) that lie parallel to the surface and breathe through spiracles; the larvae become comma-shaped pupae; and the adults emerge from the pupal case."},
    {q:"Name four insect vectors and the disease each transmits.", a:"Anopheles mosquito — malaria; tsetse fly — sleeping sickness; housefly — typhoid and dysentery; cockroach — food contamination and dysentery."},
    {q:"State three ways in which arthropods are economically useful.", a:"Bees pollinate crops and give honey; silkworms produce silk; crabs, shrimps and lobsters are important food; and predatory insects control pests."},
    {q:"What is biological control and give one example?", a:"Controlling pests with their natural enemies rather than chemicals — for example introducing ladybirds to eat aphids, or fish into ponds to eat mosquito larvae."},
    {q:"State three ways insects are adapted to life on land.", a:"A waterproof chitinous exoskeleton limits water loss, tracheae carry air directly to the tissues, and wings allow rapid dispersal to new habitats."}
  ],
  tf:[
    {s:"Insects have three pairs of legs attached to the thorax.", a:"true", why:"Six legs on the thorax is a defining feature of the class Insecta."},
    {s:"Spiders are insects.", a:"false", why:"Spiders are arachnids: two body regions and eight legs, not three and six."},
    {s:"The grasshopper undergoes complete metamorphosis.", a:"false", why:"It undergoes incomplete metamorphosis — egg, nymph, adult, with no pupal stage."},
    {s:"Ecdysis is the shedding of the exoskeleton.", a:"true", why:"It is necessary because the exoskeleton cannot stretch as the animal grows."},
    {s:"Insects breathe through spiracles into a system of tracheae.", a:"true", why:"Air is delivered directly to the tissues rather than by blood."},
    {s:"All arthropods are harmful to man.", a:"false", why:"Many are beneficial — bees pollinate crops, silkworms give silk and crustaceans are food."}
  ],
  classify:{ title:"Classify these arthropods and stages", groups:[
    {name:"Insecta", items:["housefly","butterfly","grasshopper","cockroach"]},
    {name:"Arachnida", items:["spider","scorpion","tick"]},
    {name:"Crustacea", items:["crab","shrimp","lobster"]},
    {name:"Complete metamorphosis", items:["egg","larva","pupa","adult"]},
    {name:"Incomplete metamorphosis", items:["egg","nymph","adult"]}
  ]},
  diagram:{ title:"External features of a grasshopper", caption:"State the function of each labelled part.", parts:[
    {p:"Head", f:"Bears the eyes, antennae and mouthparts"},
    {p:"Antennae", f:"Sense organs for touch and smell"},
    {p:"Compound eye", f:"Detects movement and forms an image from many units"},
    {p:"Mandibles", f:"Biting and chewing mouthparts for cutting vegetation"},
    {p:"Thorax", f:"Bears the three pairs of legs and two pairs of wings"},
    {p:"Hind leg", f:"Enlarged and muscular for jumping"},
    {p:"Spiracles", f:"Openings on the abdomen through which air enters the tracheae"},
    {p:"Abdomen", f:"Contains the digestive and reproductive organs"}
  ]},
  experiment:{
    title:"Rearing mosquito larvae to observe metamorphosis",
    aim:"To observe the stages of complete metamorphosis in the mosquito.",
    materials:["Mosquito larvae (wigglers) from stagnant water","Wide glass jar with gauze cover","Pond water","Hand lens","Pieces of dry yeast or ground biscuit"],
    steps:[
      "Collect larvae from a container of stagnant water and transfer them with some of the same water to the jar.",
      "Cover the jar with gauze so that emerging adults cannot escape.",
      "Add a very small quantity of yeast or ground biscuit as food.",
      "Examine the larvae daily with a hand lens and record their position at the surface and their movement.",
      "Note the day on which comma-shaped pupae appear and record their behaviour.",
      "Record the emergence of adults, then kill them by immersion before disposal."
    ],
    expect:"The larvae feed and grow for several days, moulting as they enlarge, and hang at the water surface to breathe. They then change into comma-shaped pupae, which do not feed but move when disturbed. After about two days the adult mosquito emerges from the pupal case at the surface. This demonstrates complete metamorphosis: egg, larva, pupa, adult.",
    why:"The mosquito passes through egg, larva, pupa and adult — complete metamorphosis. Larva and adult live in different places and eat different food, so they do not compete with each other; understanding the aquatic stages is the basis of malaria control by removing standing water."
  },
  apply:[
    {q:"A community wants to reduce malaria without using chemical sprays. Suggest two biological methods.", a:"Introduce larvivorous fish such as Tilapia or Gambusia into ponds and wells to eat the larvae, and clear or drain stagnant water to remove breeding sites."},
    {q:"Explain why a housefly is a more dangerous vector than a mosquito in a market.", a:"The housefly settles alternately on faeces and on exposed food, carrying pathogens mechanically on its feet and mouthparts and vomiting saliva onto food, so it contaminates many items rapidly."},
    {q:"Why is an insect vulnerable immediately after moulting?", a:"The new exoskeleton is still soft and pale, giving little protection or support until it hardens, so the animal hides and cannot escape predators easily."},
    {q:"A farmer sprays a broad pesticide and the pest returns worse than before. Explain.", a:"The pesticide killed the pest's natural predators as well as the pest, and resistant individuals survived to breed, so the pest population rebounded with no biological control remaining."},
    {q:"Explain the advantage of complete metamorphosis over incomplete metamorphosis.", a:"The larva and adult occupy different habitats and eat different foods, so they do not compete with one another, and the pupal stage allows survival through unfavourable conditions."}
  ],
  activities:[
    "Field trip: collect different insect species and observe their external body structures",
    "Study specimens: grasshopper or locust, cockroach, weevils and cotton stainers",
    "Discuss the economic importance of arthropods",
    "Diagram the life cycle of the Anopheles mosquito in relation to Plasmodium",
    "Assignment: collect mosquito larvae and bring to the laboratory for observation",
    "Discuss biological methods of pest control"
  ],
  materials:[
    "Primary text: Baffour Asante-Owusu et al., Senior High Biology (Longman, 2009)",
    "Insect specimens and collecting nets",
    "Hand lenses and microscopes",
    "Specimen jars and gauze",
    "Charts of insect life cycles"
  ],
  assessment:["Field trip report","Laboratory drawings","Assignment","Class discussion","Written test"]
},
{
  grade:10, period:"V", sem:"Two", icon:"🌿",
  title:"Plant-like Organisms and Photosynthesis; Fungi",
  subtitle:"Algae, mosses and ferns, the process of photosynthesis, and the fungi",
  outcomes:[
    "Understand that algae are producers of atmospheric oxygen and serve as food for organisms",
    "Appreciate that mosses and ferns are non-vascular and vascular spore-bearing plants",
    "Understand that some fungi cause disease while others are used as food"
  ],
  objectives:[
    "Describe the general characteristics, structures and life cycles of algae, mosses, ferns and fungi",
    "Explain the economic importance of algae and fungi",
    "Explain the process of photosynthesis in relation to how autotrophs make food",
    "Describe reproduction in Spirogyra, both sexual and asexual",
    "Explain alternation of generations in mosses and ferns",
    "Illustrate the life cycle of Rhizopus"
  ],
  note:"<b>Photosynthesis</b> is the process by which green plants make food using light energy: <b>6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂</b> in the presence of chlorophyll and sunlight. It occurs in two stages — the <b>light-dependent</b> stage in the grana and the <b>light-independent</b> stage in the stroma. <b>Alternation of generations</b> means the life cycle alternates between a gamete-producing <b>gametophyte</b> and a spore-producing <b>sporophyte</b>.",
  focus:[
    "Algae: general characteristics, classification, phytoplankton, green algae",
    "Spirogyra: structure and reproduction",
    "Economic importance of algae in food, medicine and industry",
    "Mosses and ferns: characteristics and alternation of generations",
    "Photosynthesis: the equation, conditions, stages and importance",
    "Fungi: characteristics, Rhizopus, and economic importance"
  ],
  terms:[
    {t:"photosynthesis", d:"the making of food from carbon dioxide and water using light energy", x:"Photosynthesis releases oxygen."},
    {t:"chlorophyll", d:"the green pigment that absorbs light energy", x:"Chlorophyll is found in chloroplasts."},
    {t:"autotroph", d:"an organism that makes its own food", x:"Green plants are autotrophs."},
    {t:"heterotroph", d:"an organism that feeds on others", x:"Fungi are heterotrophs."},
    {t:"algae", d:"simple plant-like organisms, mostly aquatic, that photosynthesise", x:"Algae produce much of the world's oxygen."},
    {t:"phytoplankton", d:"microscopic floating algae in water", x:"Phytoplankton form the base of aquatic food chains."},
    {t:"Spirogyra", d:"a filamentous green alga with spiral chloroplasts", x:"Spirogyra reproduces by conjugation."},
    {t:"conjugation", d:"sexual reproduction by fusion of contents of two cells", x:"Spirogyra filaments join in conjugation."},
    {t:"moss", d:"a small non-vascular plant reproducing by spores", x:"Moss grows in damp shaded places."},
    {t:"fern", d:"a vascular spore-bearing plant with fronds", x:"Ferns bear sori under the fronds."},
    {t:"alternation of generations", d:"a life cycle alternating between gametophyte and sporophyte", x:"Mosses show alternation of generations."},
    {t:"gametophyte", d:"the haploid generation producing gametes", x:"The leafy moss plant is the gametophyte."},
    {t:"sporophyte", d:"the diploid generation producing spores", x:"The moss capsule is the sporophyte."},
    {t:"spore", d:"a single reproductive cell that grows without fusion", x:"Ferns disperse by spores."},
    {t:"fungus", d:"a heterotrophic organism absorbing food through hyphae", x:"A mushroom is a fungus."},
    {t:"hypha", d:"a thread-like filament forming the body of a fungus", x:"Hyphae penetrate the bread."},
    {t:"mycelium", d:"a mass of hyphae forming the fungal body", x:"The mycelium spreads through the substrate."},
    {t:"Rhizopus", d:"the common bread mould", x:"Rhizopus forms black sporangia."},
    {t:"sporangium", d:"a structure in which spores are produced", x:"The sporangium bursts to release spores."},
    {t:"saprophyte", d:"an organism feeding on dead organic matter", x:"Rhizopus is a saprophyte."}
  ],
  facts:[
    {q:"Write the balanced equation for photosynthesis.", a:"6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂, in the presence of light energy and chlorophyll."},
    {q:"State the four conditions necessary for photosynthesis.", a:"Carbon dioxide, water, light energy and chlorophyll."},
    {q:"Name the two stages of photosynthesis and where each occurs.", a:"The light-dependent stage in the grana of the chloroplast, and the light-independent (dark) stage in the stroma."},
    {q:"State three ways algae are economically important.", a:"They are eaten as food and used in food products such as agar; they yield substances used in medicine and industry; and they release a large part of the world's atmospheric oxygen."},
    {q:"Describe conjugation in Spirogyra.", a:"Two filaments lie side by side, conjugation tubes form between opposite cells, the contents of one cell pass through and fuse with the contents of the other, forming a zygospore that resists drought and later germinates."},
    {q:"Explain alternation of generations in a moss.", a:"The leafy green moss plant is the haploid gametophyte producing gametes; after fertilisation it bears a diploid sporophyte capsule on a stalk, which produces spores that grow into new gametophytes."},
    {q:"State three differences between mosses and ferns.", a:"Mosses are non-vascular, small and lack true roots, stems and leaves; ferns are vascular with true roots, stems and leaves, and grow much larger; in mosses the gametophyte dominates, while in ferns the sporophyte dominates."},
    {q:"How does Rhizopus obtain its food?", a:"It is a saprophyte: its hyphae secrete enzymes onto the bread which digest the food externally, and the soluble products are then absorbed."},
    {q:"State two useful and two harmful fungi.", a:"Useful: yeast in baking and brewing, and Penicillium yielding the antibiotic penicillin; also mushrooms as food. Harmful: Rhizopus spoiling bread, and fungi causing ringworm and athlete's foot."}
  ],
  tf:[
    {s:"Photosynthesis releases oxygen as a by-product.", a:"true", why:"Oxygen comes from the splitting of water in the light-dependent stage."},
    {s:"Fungi make their own food by photosynthesis.", a:"false", why:"Fungi have no chlorophyll; they are heterotrophic, absorbing food from their surroundings."},
    {s:"Mosses have true vascular tissue.", a:"false", why:"Mosses are non-vascular; ferns are the vascular spore-bearing plants."},
    {s:"Spirogyra has spiral chloroplasts.", a:"true", why:"The spiral ribbon of chloroplast gives the alga its name."},
    {s:"Algae contribute a large part of the world's atmospheric oxygen.", a:"true", why:"Aquatic algae and phytoplankton photosynthesise on an enormous scale."},
    {s:"The light-independent stage of photosynthesis occurs in the grana.", a:"false", why:"It occurs in the stroma; the light-dependent stage occurs in the grana."}
  ],
  classify:{ title:"Sort these organisms and structures", groups:[
    {name:"Algae", items:["Spirogyra","phytoplankton","seaweed"]},
    {name:"Non-vascular plants", items:["Funaria","Brachymenium","liverwort"]},
    {name:"Vascular spore plants", items:["fern","horsetail"]},
    {name:"Fungi", items:["Rhizopus","yeast","mushroom","Penicillium"]},
    {name:"Needed for photosynthesis", items:["carbon dioxide","water","light","chlorophyll"]}
  ]},
  diagram:{ title:"Rhizopus (bread mould)", caption:"State the function of each labelled structure.", parts:[
    {p:"Sporangium", f:"Rounded case in which spores are produced"},
    {p:"Sporangiophore", f:"Upright hypha bearing the sporangium above the substrate"},
    {p:"Stolon", f:"Horizontal hypha spreading across the surface of the bread"},
    {p:"Rhizoid", f:"Root-like hypha anchoring the mould and absorbing digested food"},
    {p:"Mycelium", f:"The whole mass of hyphae forming the body of the fungus"},
    {p:"Spore", f:"Single reproductive cell dispersed by wind to start a new mycelium"}
  ]},
  experiment:{
    title:"Testing a leaf for starch after photosynthesis",
    aim:"To show that a green leaf makes starch only in the presence of light and chlorophyll.",
    materials:["Potted plant kept in darkness for 48 hours","Black paper and clips","Variegated leaf","Beaker of boiling water","Ethanol in a test tube","Iodine solution","White tile","Forceps"],
    steps:[
      "De-starch the plant by keeping it in darkness for 48 hours.",
      "Cover part of one leaf with black paper and leave the plant in sunlight for six hours.",
      "Remove the leaf and boil it in water for one minute to kill the cells.",
      "Place the leaf in ethanol in a test tube standing in hot water until the chlorophyll is removed. Do not heat ethanol directly — it is highly flammable.",
      "Wash the brittle leaf in warm water to soften it and spread it on a white tile.",
      "Add iodine solution and record which regions turn blue-black. Repeat with the variegated leaf."
    ],
    expect:"The part of the leaf exposed to light turns blue-black, showing starch has been made; the covered part remains brown, showing no photosynthesis occurred without light. In the variegated leaf only the parts that were green turn blue-black, showing that chlorophyll is also necessary.",
    why:"Starch is the stored product of photosynthesis. Its presence only where both light and chlorophyll were available proves that both are necessary conditions for the process."
  },
  apply:[
    {q:"Why does bread go mouldy faster in a warm damp kitchen than in a refrigerator?", a:"Warmth and moisture favour the germination of Rhizopus spores and rapid enzyme action and hyphal growth; cold slows these processes greatly."},
    {q:"Explain why cutting down a forest reduces atmospheric oxygen and raises carbon dioxide.", a:"Fewer plants photosynthesise, so less carbon dioxide is absorbed and less oxygen released; burning or decay of the felled timber releases yet more carbon dioxide."},
    {q:"Why do mosses grow only in damp, shaded places?", a:"They lack vascular tissue to transport water and have no waterproof covering, and their sperm must swim in a film of water to reach the egg."},
    {q:"A pond turns bright green and then the fish die. Explain the biology.", a:"Nutrients caused an algal bloom; when the algae die, decomposing bacteria multiply and consume the dissolved oxygen, so the fish suffocate."},
    {q:"How can a farmer use the knowledge that fungi are saprophytes to improve soil?", a:"By composting crop residues, so that fungi and bacteria decompose the dead matter and release mineral nutrients back into the soil as humus."}
  ],
  activities:[
    "Draw and label the parts of a Spirogyra filament",
    "Draw and label the stages of sexual reproduction in Spirogyra",
    "LAB: observe a piece of moulded bread under the microscope and draw the hyphae of Rhizopus",
    "Illustrate the life cycle of Rhizopus",
    "LAB: test a leaf for starch to demonstrate photosynthesis",
    "Discuss the economic importance of algae and fungi"
  ],
  materials:[
    "Primary text: Baffour Asante-Owusu et al., Senior High Biology (Longman, 2009)",
    "Microscopes, slides and cover slips",
    "Pond water containing Spirogyra; moulded bread",
    "Ethanol, iodine solution, beakers and water bath",
    "Potted plants and variegated leaves"
  ],
  assessment:["Laboratory report","Drawings","Class discussion","Oral presentation","Written test"]
},
{
  grade:10, period:"VI", sem:"Two", icon:"🌸",
  title:"Flowering Plants",
  subtitle:"Monocots and dicots, roots, stems, leaves and flowers, reproduction, transport and germination",
  outcomes:[
    "Accept that flowering plants are major food producers in the biosphere and very important in the food chain",
    "Appreciate how water, food and minerals are transported in vascular plants"
  ],
  objectives:[
    "Identify the characteristics of flowering plants",
    "Classify flowering plants into monocotyledons and dicotyledons",
    "Describe the structures and functions of roots, stems, leaves and flowers",
    "Explain sexual and asexual reproduction in flowering plants",
    "Determine the floral formulae of flowers such as Delonix, Caesalpinia and Crotalaria",
    "Discuss types of pollination and list agents of pollination",
    "Describe the kinds of fruits and the dispersal of fruits and seeds",
    "Describe the conditions necessary for seed germination",
    "Explain transpiration and the factors affecting the rise of water in the xylem"
  ],
  note:"Flowering plants (angiosperms) divide into <b>monocotyledons</b> — one seed leaf, parallel veins, fibrous roots, floral parts in threes — and <b>dicotyledons</b> — two seed leaves, net veins, tap root, floral parts in fours or fives. Water rises in the <b>xylem</b> by <b>root pressure, capillarity and transpiration pull</b>; food travels in the <b>phloem</b> by translocation.",
  focus:[
    "Classification: monocots and dicots",
    "Functions of roots, stems, leaves and flowers",
    "Floral formulae of Delonix, Caesalpinia and Crotalaria",
    "Plant tissues; root systems and root hairs; modified roots, stems and leaves",
    "Sexual and asexual reproduction; vegetative propagation",
    "Pollination: types and agents; fertilisation and seed formation",
    "Kinds of fruits and agents of dispersal",
    "Conditions for germination; types of germination",
    "Transpiration and the rise of water in the xylem"
  ],
  terms:[
    {t:"angiosperm", d:"a flowering plant whose seeds are enclosed in a fruit", x:"Maize and mango are angiosperms."},
    {t:"monocotyledon", d:"a flowering plant with one seed leaf", x:"Maize is a monocotyledon."},
    {t:"dicotyledon", d:"a flowering plant with two seed leaves", x:"Beans are dicotyledons."},
    {t:"xylem", d:"tissue that carries water and mineral salts upward", x:"Xylem vessels are dead and hollow."},
    {t:"phloem", d:"tissue that carries manufactured food through the plant", x:"Phloem transports sugars from the leaves."},
    {t:"transpiration", d:"the loss of water vapour from the leaves", x:"Transpiration creates the pull that lifts water."},
    {t:"root pressure", d:"pressure from the roots pushing water up the stem", x:"Root pressure contributes to water rise."},
    {t:"capillarity", d:"the rise of water in narrow tubes", x:"Capillarity helps water rise in the xylem."},
    {t:"stoma", d:"a pore in the leaf surface for gas exchange", x:"Stomata open in the light."},
    {t:"guard cell", d:"one of a pair of cells controlling a stoma", x:"Guard cells become turgid to open the stoma."},
    {t:"pollination", d:"the transfer of pollen from anther to stigma", x:"Insects carry out pollination."},
    {t:"self-pollination", d:"transfer of pollen within the same flower or plant", x:"Self-pollination gives less variation."},
    {t:"cross-pollination", d:"transfer of pollen to a different plant of the same species", x:"Cross-pollination increases variation."},
    {t:"fertilisation", d:"the fusion of male and female gametes", x:"Fertilisation forms the zygote."},
    {t:"zygote", d:"the cell formed when gametes fuse", x:"The zygote grows into the embryo."},
    {t:"germination", d:"the growth of a seed into a seedling", x:"Germination needs water, air and warmth."},
    {t:"epigeal germination", d:"germination in which the cotyledons rise above the soil", x:"Beans show epigeal germination."},
    {t:"hypogeal germination", d:"germination in which the cotyledons remain below the soil", x:"Maize shows hypogeal germination."},
    {t:"vegetative propagation", d:"asexual reproduction from a vegetative part of the plant", x:"Cassava is grown by vegetative propagation."},
    {t:"dispersal", d:"the scattering of fruits and seeds away from the parent", x:"Wind dispersal carries light seeds far."},
    {t:"floral formula", d:"a shorthand notation of the parts of a flower", x:"The floral formula records sepals, petals, stamens and carpels."}
  ],
  facts:[
    {q:"State four differences between monocotyledons and dicotyledons.", a:"Monocots have one cotyledon, parallel leaf veins, fibrous roots and floral parts in threes; dicots have two cotyledons, net-like veins, a tap root and floral parts in fours or fives."},
    {q:"State the functions of the root, stem, leaf and flower.", a:"The root anchors the plant and absorbs water and minerals; the stem supports the plant and transports substances; the leaf makes food by photosynthesis and loses water by transpiration; the flower is the reproductive organ."},
    {q:"Name the four whorls of a complete flower.", a:"Calyx (sepals), corolla (petals), androecium (stamens) and gynoecium (carpels or pistil)."},
    {q:"State three differences between wind-pollinated and insect-pollinated flowers.", a:"Wind-pollinated flowers are small, dull and scentless with exposed feathery stigmas and abundant light pollen; insect-pollinated flowers are large, brightly coloured and scented with nectar and sticky heavy pollen."},
    {q:"State the three conditions necessary for germination.", a:"Water, oxygen and a suitable warm temperature (with viable seed)."},
    {q:"Distinguish epigeal from hypogeal germination with an example of each.", a:"In epigeal germination the hypocotyl elongates and carries the cotyledons above the soil, as in the bean; in hypogeal germination the epicotyl elongates and the cotyledons remain below the soil, as in maize."},
    {q:"Name four agents of seed dispersal with an example of each.", a:"Wind — cotton; water — coconut; animals — burrs and fleshy fruits; explosive mechanism — the pods of Crotalaria and other legumes."},
    {q:"State three factors that increase the rate of transpiration.", a:"High temperature, low humidity, and moving air (wind); bright light also opens the stomata and increases transpiration."},
    {q:"Name the three forces responsible for the rise of water in the xylem.", a:"Root pressure pushing from below, capillarity in the narrow vessels, and transpiration pull created by evaporation from the leaves."},
    {q:"Name four methods of vegetative propagation.", a:"Cuttings, grafting, layering and budding; natural methods include tubers, suckers, runners and bulbs."}
  ],
  tf:[
    {s:"Maize is a monocotyledon.", a:"true", why:"It has one seed leaf, parallel veins and a fibrous root system."},
    {s:"The xylem carries manufactured food from the leaves.", a:"false", why:"The xylem carries water and minerals upward; the phloem carries food."},
    {s:"Transpiration pull is the main force lifting water in a tall tree.", a:"true", why:"Evaporation from the leaves creates the tension that draws the water column upward."},
    {s:"Self-pollination produces greater variation than cross-pollination.", a:"false", why:"Cross-pollination mixes genetic material from two plants and gives greater variation."},
    {s:"Light is essential for the germination of most seeds.", a:"false", why:"Most seeds germinate without light; water, oxygen and warmth are the essential conditions."},
    {s:"Cassava can be propagated from stem cuttings.", a:"true", why:"It is a standard example of vegetative propagation used by Liberian farmers."}
  ],
  classify:{ title:"Sort these plant features", groups:[
    {name:"Monocotyledon features", items:["one cotyledon","parallel veins","fibrous roots","floral parts in threes"]},
    {name:"Dicotyledon features", items:["two cotyledons","net veins","tap root","floral parts in fives"]},
    {name:"Agents of dispersal", items:["wind","water","animals","explosive mechanism"]},
    {name:"Vegetative propagation", items:["cutting","grafting","layering","budding"]}
  ]},
  diagram:{ title:"A complete flower in longitudinal section", caption:"State the function of each labelled part.", parts:[
    {p:"Sepal", f:"Protects the flower bud before it opens"},
    {p:"Petal", f:"Often coloured and scented to attract pollinating insects"},
    {p:"Anther", f:"Produces and holds the pollen grains"},
    {p:"Filament", f:"Stalk supporting the anther"},
    {p:"Stigma", f:"Receives the pollen grains at pollination"},
    {p:"Style", f:"Connects the stigma to the ovary and supports pollen tube growth"},
    {p:"Ovary", f:"Contains the ovules and develops into the fruit"},
    {p:"Ovule", f:"Contains the female gamete and becomes the seed after fertilisation"},
    {p:"Receptacle", f:"Swollen end of the stalk to which the floral parts are attached"}
  ]},
  experiment:{
    title:"Demonstrating the two types of germination",
    aim:"To compare epigeal germination in the bean with hypogeal germination in maize.",
    materials:["Bean seeds","Maize grains","Two boxes of moist sawdust or soil","Water","Ruler","Hand lens"],
    steps:[
      "Soak both bean seeds and maize grains in water overnight to soften the seed coats.",
      "Plant several beans in one box and several maize grains in the other, at equal depth.",
      "Keep both boxes moist, warm and in the same conditions of light.",
      "Examine one seedling from each box daily for a week.",
      "Record whether the cotyledons are carried above or remain below the soil.",
      "Make labelled drawings of the seedlings at day three and day seven."
    ],
    expect:"In the bean the hypocotyl elongates and arches upward, pulling the cotyledons above the soil surface where they become green — epigeal germination. In maize the epicotyl elongates and the single cotyledon remains beneath the soil while the plumule is pushed up through a protective coleoptile — hypogeal germination.",
    why:"The difference lies in which part of the seedling elongates: the hypocotyl in epigeal germination lifts the cotyledons above the soil, while the epicotyl in hypogeal germination leaves them below. Both patterns supply the seedling from its own food store until the leaves can photosynthesise."
  },
  apply:[
    {q:"A farmer wants every tree in an orchard to bear identical fruit. Should he use seeds or cuttings, and why?", a:"Cuttings or grafting, because vegetative propagation is asexual and produces plants genetically identical to the parent, while seeds from cross-pollination would vary."},
    {q:"Why do plants wilt on a hot windy afternoon even when the soil is moist?", a:"Transpiration exceeds the rate at which the roots can absorb and the xylem can deliver water, so the cells lose turgor faster than they can be replenished."},
    {q:"Explain why removing a complete ring of bark from a tree eventually kills it.", a:"Ringing removes the phloem, so manufactured food cannot travel down to the roots; the roots starve and die, and the whole tree follows."},
    {q:"Why are coconut fruits well suited to dispersal by water?", a:"The fibrous husk traps air, making the fruit buoyant, and the waterproof shell protects the seed from salt water during a long journey."},
    {q:"A seed fails to germinate although it is warm and moist. Suggest two possible reasons.", a:"The seed may not be viable — dead or too old — or it may be dormant; alternatively the soil may be waterlogged so that oxygen cannot reach the seed for respiration."}
  ],
  activities:[
    "Draw and label the parts of a complete flower and state their functions",
    "Determine the floral formulae of Delonix, Caesalpinia and Crotalaria",
    "Illustrate the types of vegetative propagation: cutting, grafting, layering",
    "LAB: set up an experiment to demonstrate the two types of germination",
    "LAB: demonstrate transpiration using a potometer or a polythene bag",
    "Collect and classify local fruits by their method of dispersal"
  ],
  materials:[
    "Primary text: Baffour Asante-Owusu et al., Senior High Biology (Longman, 2009)",
    "Fresh flowers: Delonix, Caesalpinia, Crotalaria, hibiscus",
    "Bean and maize seeds; boxes and sawdust",
    "Hand lenses, scalpels and mounted needles",
    "Charts of plant tissues and of the flower"
  ],
  assessment:["Laboratory report","Floral drawings and formulae","Germination investigation","Class discussion","Written test"]
},

/* ================================ GRADE 11 ================================ */
{
  grade:11, period:"I", sem:"One", icon:"🧫",
  title:"Viruses and Bacteria",
  subtitle:"Structure, classification, life cycles, the diseases they cause and their prevention",
  outcomes:[
    "Recognise that viruses and bacteria cause diseases such as polio, mumps, measles, Ebola, tuberculosis, the common cold and sexually transmitted infections, while some bacteria are useful to humans",
    "Appreciate preventive measures to avoid risky sexual behaviour"
  ],
  objectives:[
    "List the characteristics of viruses",
    "Classify viruses based on nucleic acid, DNA and RNA",
    "Explain the life cycle of a virus, lytic and lysogenic",
    "List some viral diseases, their modes of transmission and methods of prevention",
    "Describe bacteria of various kinds and classify them",
    "Describe the structure of a bacterial cell as observed under the microscope",
    "List and describe common bacterial diseases and their symptoms",
    "Outline preventive measures for bacterial diseases and state the usefulness of bacteria"
  ],
  note:"A <b>virus</b> is an obligate parasite consisting of nucleic acid — DNA or RNA — inside a protein <b>capsid</b>. It has no cytoplasm or organelles and can reproduce only inside a host cell. In the <b>lytic cycle</b> the virus multiplies and bursts the host cell; in the <b>lysogenic cycle</b> its genetic material is incorporated into the host DNA and remains latent. <b>Bacteria</b> are prokaryotes classified by shape as <b>cocci, bacilli, spirilla</b> and <b>vibrio</b>.",
  focus:[
    "Viruses: definition, general characteristics and structure",
    "Classification: DNA and RNA viruses",
    "Common viral diseases: cold, flu, mumps, chicken pox, rabies, polio, HIV/AIDS, Ebola",
    "The lytic and lysogenic cycles; structure of a bacteriophage",
    "Sexually transmitted infections: transmission and prevention",
    "Bacteria: structure, shapes and classification",
    "Bacterial diseases, symptoms and prevention",
    "Useful bacteria and their applications"
  ],
  terms:[
    {t:"virus", d:"a non-cellular infectious particle of nucleic acid in a protein coat", x:"A virus can reproduce only inside a host cell."},
    {t:"capsid", d:"the protein coat surrounding the viral nucleic acid", x:"The capsid protects the viral genome."},
    {t:"bacteriophage", d:"a virus that infects bacteria", x:"A bacteriophage injects its DNA into the bacterium."},
    {t:"lytic cycle", d:"a viral cycle ending in the bursting of the host cell", x:"In the lytic cycle new viruses are released at once."},
    {t:"lysogenic cycle", d:"a viral cycle in which the genome integrates into host DNA and lies dormant", x:"HIV can remain latent in a lysogenic state."},
    {t:"pathogen", d:"an organism that causes disease", x:"Vibrio cholerae is a pathogen."},
    {t:"bacterium", d:"a single-celled prokaryotic organism", x:"A bacterium has no true nucleus."},
    {t:"coccus", d:"a spherical bacterium", x:"Streptococcus is a coccus."},
    {t:"bacillus", d:"a rod-shaped bacterium", x:"The tuberculosis bacillus is rod-shaped."},
    {t:"spirillum", d:"a spiral-shaped bacterium", x:"Spirilla move with flagella."},
    {t:"vibrio", d:"a comma-shaped bacterium", x:"Vibrio cholerae causes cholera."},
    {t:"capsule", d:"a slime layer outside the bacterial cell wall", x:"The capsule protects against the host's defences."},
    {t:"endospore", d:"a resistant dormant body formed by some bacteria", x:"Endospores survive boiling."},
    {t:"antibiotic", d:"a substance that kills or inhibits bacteria", x:"Penicillin is an antibiotic."},
    {t:"antibiotic resistance", d:"the ability of bacteria to survive a drug that once killed them", x:"Misuse of drugs breeds antibiotic resistance."},
    {t:"vaccine", d:"a preparation giving immunity against a disease", x:"The polio vaccine has almost eradicated the disease."},
    {t:"immunity", d:"the body's ability to resist a particular infection", x:"Vaccination confers immunity."},
    {t:"sterilisation", d:"the killing of all micro-organisms on an object", x:"Sterilisation of instruments prevents infection."},
    {t:"binary fission", d:"asexual division of a cell into two", x:"Bacteria multiply by binary fission."},
    {t:"antiretroviral", d:"a drug that suppresses the multiplication of HIV", x:"Antiretroviral therapy prolongs life."}
  ],
  facts:[
    {q:"State four characteristics of viruses.", a:"They are acellular, consist of nucleic acid in a protein capsid, are obligate parasites reproducing only in a host cell, and can be crystallised outside the host."},
    {q:"How are viruses classified on the basis of nucleic acid?", a:"Into DNA viruses such as the chicken pox and herpes viruses, and RNA viruses such as HIV, influenza, polio and Ebola."},
    {q:"Describe the lytic cycle of a bacteriophage.", a:"The phage attaches to the bacterial wall and injects its DNA; the host machinery makes new viral parts; these assemble into new phages; and the cell lyses, releasing them to infect other cells."},
    {q:"How does the lysogenic cycle differ from the lytic cycle?", a:"In the lysogenic cycle the viral DNA integrates into the host chromosome and is copied with it for many generations without destroying the cell, until some stimulus triggers the lytic phase."},
    {q:"Name four viral diseases and their modes of transmission.", a:"Influenza and the common cold by droplets; polio by contaminated food and water; rabies by the bite of an infected animal; HIV/AIDS by unprotected sex, infected blood and mother to child."},
    {q:"Name the four shapes of bacteria with an example of each.", a:"Cocci (spherical) — Streptococcus; bacilli (rod) — Mycobacterium tuberculosis; spirilla (spiral) — Spirillum; vibrio (comma) — Vibrio cholerae."},
    {q:"Name four bacterial diseases and one symptom of each.", a:"Tuberculosis — persistent cough; cholera — severe watery diarrhoea; typhoid — prolonged fever; gonorrhoea — painful discharge."},
    {q:"State four ways bacteria are useful to man.", a:"They decay dead matter and recycle nutrients; they fix nitrogen in legume root nodules; they are used to make yoghurt, cheese and vinegar; and they are used in producing antibiotics and in sewage treatment."},
    {q:"State four methods of preventing bacterial disease.", a:"Boiling or treating drinking water and proper sanitation, personal and food hygiene, immunisation where a vaccine exists, and prompt treatment with the full course of prescribed antibiotics."},
    {q:"Why can antibiotics not cure viral diseases?", a:"Antibiotics act on bacterial structures and metabolic pathways such as the cell wall; viruses have none of these and replicate inside host cells using the host's own machinery."}
  ],
  tf:[
    {s:"Viruses can reproduce outside a living cell.", a:"false", why:"They are obligate parasites and require the host's machinery to replicate."},
    {s:"HIV is an RNA virus.", a:"true", why:"It is a retrovirus, converting its RNA to DNA by reverse transcriptase."},
    {s:"All bacteria are harmful to man.", a:"false", why:"Many are essential — decomposers, nitrogen fixers, and bacteria used in food and antibiotic production."},
    {s:"Antibiotics are effective against the common cold.", a:"false", why:"The common cold is viral, and antibiotics act only on bacteria."},
    {s:"Bacteria reproduce by binary fission.", a:"true", why:"One cell divides into two identical daughter cells."},
    {s:"In the lysogenic cycle the host cell bursts immediately.", a:"false", why:"The viral DNA integrates and remains latent; bursting occurs in the lytic cycle."},
    {s:"Endospores allow some bacteria to survive very harsh conditions.", a:"true", why:"They resist heat, drying and many chemicals until conditions improve."}
  ],
  classify:{ title:"Sort these agents and measures", groups:[
    {name:"Viral diseases", items:["measles","polio","HIV/AIDS","Ebola","rabies"]},
    {name:"Bacterial diseases", items:["tuberculosis","cholera","typhoid","gonorrhoea","syphilis"]},
    {name:"Useful bacteria", items:["nitrogen fixation","yoghurt making","sewage treatment","decay of dead matter"]},
    {name:"Prevention", items:["immunisation","boiling water","personal hygiene","abstinence and faithfulness"]}
  ]},
  diagram:{ title:"A bacteriophage and a bacterial cell", caption:"State the function of each labelled structure.", parts:[
    {p:"Head (phage)", f:"Protein capsid enclosing the viral nucleic acid"},
    {p:"Tail sheath (phage)", f:"Contracts to drive the tail core through the bacterial wall"},
    {p:"Tail fibres (phage)", f:"Attach the phage to specific receptors on the host cell"},
    {p:"Cell wall (bacterium)", f:"Rigid layer giving shape and protection"},
    {p:"Capsule (bacterium)", f:"Slime layer resisting the host's defences and drying"},
    {p:"Nucleoid (bacterium)", f:"Region containing the circular DNA, with no nuclear membrane"},
    {p:"Flagellum (bacterium)", f:"Whip-like structure for movement"},
    {p:"Plasmid", f:"Small ring of DNA often carrying resistance genes"}
  ]},
  experiment:{
    title:"Culturing bacteria from everyday surfaces",
    aim:"To show that bacteria are present on surfaces and that washing reduces their numbers.",
    materials:["Three sterile nutrient agar plates","Sterile swabs","Adhesive tape","Marker pen","Soap and water","Incubator or warm cupboard"],
    steps:[
      "Label the three plates: unwashed hand, washed hand, and control (unopened).",
      "Swab an unwashed hand and streak the swab gently over the first plate.",
      "Wash the same hand thoroughly with soap, dry it, swab again and streak the second plate.",
      "Leave the control plate unopened.",
      "Tape all plates closed — do not reopen them — and incubate at about 30 °C for two days.",
      "Count and compare the colonies through the closed lid, then dispose of the plates by autoclaving or burning without opening."
    ],
    expect:"The unwashed-hand plate shows many colonies of different shapes and colours; the washed-hand plate shows far fewer; the control shows none, confirming the medium was sterile at the start. This demonstrates that bacteria are present on the skin and that washing with soap greatly reduces their number.",
    why:"Bacteria are present on all everyday surfaces including clean-looking skin. Soap emulsifies the oils that hold micro-organisms to the skin so they are rinsed away — which is why hand washing is the single most effective way to prevent the spread of infection."
  },
  apply:[
    {q:"A patient stops taking antibiotics as soon as he feels better. Explain the danger.", a:"The most resistant bacteria survive and multiply, so the infection can return in a form the drug no longer controls, and resistant strains spread to other people."},
    {q:"Explain why HIV is difficult to eliminate from the body.", a:"It integrates its genetic material into the host's own DNA in a lysogenic state where drugs and the immune system cannot reach it, and it attacks the very helper T cells that coordinate immune defence."},
    {q:"Why is a vaccine available for polio but not easily for the common cold?", a:"Polio is caused by a small number of stable virus types, so one vaccine protects; the common cold is caused by very many rapidly changing virus strains, so no single vaccine can cover them."},
    {q:"How does boiling water prevent cholera?", a:"Boiling kills Vibrio cholerae in the water, interrupting the faecal-oral route by which the disease spreads."},
    {q:"A farmer plants beans between his maize crops and finds the maize grows better. Explain.", a:"Beans are legumes with nitrogen-fixing bacteria in their root nodules, which convert atmospheric nitrogen to nitrates and enrich the soil for the maize."}
  ],
  activities:[
    "List and discuss viruses and bacteria that cause diseases",
    "Identify and list common viral and bacterial diseases",
    "Discuss STIs caused by viruses and bacteria, their transmission and prevention",
    "LAB: examine prepared slides of bacteria and draw a typical bacterial cell",
    "Draw and label the structure of a bacteriophage",
    "Discuss the importance of useful bacteria"
  ],
  materials:[
    "Primary text: Baffour Asante-Owusu et al., Senior High Biology (Longman, 2009)",
    "Microscopes and prepared bacterial slides",
    "Nutrient agar plates and sterile swabs",
    "Charts of viral structure and the lytic and lysogenic cycles",
    "Health literature on STIs and immunisation"
  ],
  assessment:["Laboratory report","Drawings","Class discussion","Group presentation","Written test"]
},
{
  grade:11, period:"II", sem:"One", icon:"🍚",
  title:"Nutrition and Food Preservation",
  subtitle:"Types of nutrition, food nutrients and tests, balanced diet, dentition, and preserving food",
  outcomes:[
    "Realise that different types of food contain nutrients required for the production of energy to support life processes",
    "Apply the proper methods of preserving food to prevent spoilage and ensure food security"
  ],
  objectives:[
    "Explain the process of nutrition and state why living things need nutrients",
    "Outline and classify the types of nutrients found in food",
    "Demonstrate the presence of various nutrients found in food",
    "Explain the concept of a balanced diet and of malnutrition",
    "Determine the dental formula of a mammal",
    "Explain the importance of dental care in humans",
    "Name and discuss various methods of preserving and storing food, including local methods used in West Africa"
  ],
  note:"<b>Nutrition</b> is the taking in and use of food. <b>Autotrophic</b> organisms make their own food; <b>heterotrophic</b> organisms obtain it from others; <b>holozoic</b> nutrition involves ingestion, digestion, absorption, assimilation and egestion. The food tests are: <b>Benedict's</b> for reducing sugar, <b>iodine</b> for starch, the <b>emulsion test</b> for lipids and the <b>Biuret test</b> for protein.",
  focus:[
    "Nutrition: autotrophic, heterotrophic and holozoic",
    "Food nutrients: carbohydrates, lipids, proteins, vitamins, mineral salts and water",
    "Food tests for sugar, starch, lipid and protein",
    "Balanced diet and malnutrition",
    "Teeth, dentition and dental formulae; dental care",
    "Food poisoning and its prevention",
    "Methods of food preservation: drying, salting, smoking, parboiling and modern methods"
  ],
  terms:[
    {t:"nutrition", d:"the taking in and use of food for energy, growth and repair", x:"Nutrition sustains all life processes."},
    {t:"autotrophic nutrition", d:"making one's own food from simple substances", x:"Green plants show autotrophic nutrition."},
    {t:"heterotrophic nutrition", d:"obtaining food from other organisms", x:"Animals show heterotrophic nutrition."},
    {t:"holozoic nutrition", d:"taking in solid food and digesting it internally", x:"Man shows holozoic nutrition."},
    {t:"carbohydrate", d:"a nutrient supplying energy, made of carbon, hydrogen and oxygen", x:"Rice is rich in carbohydrate."},
    {t:"lipid", d:"a fat or oil, storing energy and insulating the body", x:"Palm oil is a lipid."},
    {t:"protein", d:"a nutrient of amino acids used for growth and repair", x:"Fish is rich in protein."},
    {t:"vitamin", d:"an organic substance needed in small amounts for health", x:"Vitamin C prevents scurvy."},
    {t:"mineral salt", d:"an inorganic nutrient needed in small quantities", x:"Iron is needed to make haemoglobin."},
    {t:"balanced diet", d:"a diet containing all nutrients in the right proportions", x:"A balanced diet supports normal growth."},
    {t:"malnutrition", d:"ill health from a diet lacking or unbalanced in nutrients", x:"Kwashiorkor is a form of malnutrition."},
    {t:"kwashiorkor", d:"protein deficiency disease of young children", x:"Kwashiorkor causes a swollen belly."},
    {t:"marasmus", d:"severe wasting from lack of both energy and protein", x:"Marasmus leaves a child very thin."},
    {t:"Benedict's test", d:"a test for reducing sugar giving a brick-red precipitate", x:"Benedict's test turns orange-red when heated with glucose."},
    {t:"Biuret test", d:"a test for protein giving a violet colour", x:"The Biuret test turns purple with egg white."},
    {t:"emulsion test", d:"a test for lipids giving a milky white emulsion", x:"The emulsion test detects oil."},
    {t:"dentition", d:"the number, type and arrangement of teeth", x:"Man has a heterodont dentition."},
    {t:"dental formula", d:"a notation of the numbers of each type of tooth in half a jaw", x:"The adult human dental formula is 2123/2123."},
    {t:"incisor", d:"a chisel-shaped tooth for cutting", x:"Incisors bite into fruit."},
    {t:"canine", d:"a pointed tooth for tearing", x:"Carnivores have large canines."},
    {t:"molar", d:"a broad tooth for grinding", x:"Molars crush and grind food."},
    {t:"food preservation", d:"treating food to prevent spoilage", x:"Smoking is a common preservation method."}
  ],
  facts:[
    {q:"Distinguish autotrophic, heterotrophic and holozoic nutrition.", a:"Autotrophic organisms make their own food from simple inorganic substances; heterotrophic organisms obtain ready-made food from others; holozoic nutrition is a form of heterotrophic feeding involving ingestion, digestion, absorption, assimilation and egestion of solid food."},
    {q:"Name the six classes of food nutrients and one function of each.", a:"Carbohydrates give energy; lipids store energy and insulate; proteins build and repair tissue; vitamins regulate body processes; mineral salts build bone and blood; water is the medium for all reactions."},
    {q:"State the test, reagent and positive result for starch.", a:"Add iodine solution to the food; a blue-black colour indicates starch."},
    {q:"State the test and positive result for reducing sugar.", a:"Add Benedict's solution and heat in a water bath; a brick-red or orange precipitate indicates reducing sugar."},
    {q:"State the test and positive result for protein.", a:"Add sodium hydroxide then a few drops of copper sulphate — the Biuret test; a violet or purple colour indicates protein."},
    {q:"State the test and positive result for lipids.", a:"Shake the food with ethanol and pour into water — the emulsion test; a milky white emulsion indicates lipid."},
    {q:"What is a balanced diet and why is it needed?", a:"A diet containing all nutrient classes in the correct proportions for the person's age, sex and activity; it supplies energy, materials for growth and repair, and substances that regulate body processes."},
    {q:"Name two deficiency diseases and the nutrient lacking in each.", a:"Kwashiorkor from lack of protein; scurvy from lack of vitamin C; also anaemia from lack of iron and rickets from lack of vitamin D."},
    {q:"Give the dental formula of an adult human and explain what it means.", a:"2123/2123 — in each half jaw there are 2 incisors, 1 canine, 2 premolars and 3 molars, giving 32 teeth in total."},
    {q:"Name four traditional and two modern methods of food preservation.", a:"Traditional: drying, salting, smoking and parboiling. Modern: refrigeration and freezing, canning, and the use of chemical preservatives."},
    {q:"Explain how drying preserves food.", a:"It removes the water that micro-organisms need to grow and that enzymes need to act, so decay is greatly slowed."}
  ],
  tf:[
    {s:"Iodine solution turns blue-black in the presence of starch.", a:"true", why:"This is the standard test for starch."},
    {s:"Benedict's solution gives a violet colour with protein.", a:"false", why:"Benedict's tests for reducing sugar and gives a brick-red precipitate; the violet colour is the Biuret test for protein."},
    {s:"Kwashiorkor is caused by lack of protein.", a:"true", why:"It occurs in children whose diet has enough energy but too little protein."},
    {s:"Water is not classed as a nutrient.", a:"false", why:"Water is an essential nutrient; it is the medium in which all reactions take place."},
    {s:"Salting preserves food by drawing water out of micro-organisms.", a:"true", why:"Osmosis dehydrates the microbial cells so they cannot multiply."},
    {s:"Man has a homodont dentition.", a:"false", why:"Man is heterodont, having four different kinds of teeth for different functions."}
  ],
  classify:{ title:"Sort these foods and methods", groups:[
    {name:"Carbohydrate-rich foods", items:["rice","cassava","plantain","yam"]},
    {name:"Protein-rich foods", items:["fish","beans","eggs","groundnut"]},
    {name:"Food tests", items:["iodine — starch","Benedict's — sugar","Biuret — protein","emulsion — lipid"]},
    {name:"Traditional preservation", items:["drying","salting","smoking","parboiling"]}
  ]},
  diagram:{ title:"Vertical section of a human molar tooth", caption:"State the function of each labelled part.", parts:[
    {p:"Enamel", f:"Hard non-living outer covering resisting wear and acid"},
    {p:"Dentine", f:"Bone-like layer forming the bulk of the tooth"},
    {p:"Pulp cavity", f:"Contains blood vessels and nerves supplying the tooth"},
    {p:"Cement", f:"Fixes the root of the tooth in the jaw socket"},
    {p:"Root", f:"Anchors the tooth in the jaw bone"},
    {p:"Crown", f:"The part of the tooth above the gum used in chewing"},
    {p:"Gum", f:"Soft tissue protecting the neck of the tooth"}
  ]},
  experiment:{
    title:"Testing foods for nutrients",
    aim:"To identify starch, reducing sugar, protein and lipid in samples of local foods.",
    materials:["Food samples: rice, cassava, groundnut, egg white, fresh fruit","Iodine solution","Benedict's solution","Sodium hydroxide and copper sulphate solutions","Ethanol","Test tubes, water bath, droppers, mortar and pestle"],
    steps:[
      "Grind each solid food with a little distilled water to make a suspension.",
      "Starch test: place 2 cm³ of each sample on a tile and add two drops of iodine solution.",
      "Sugar test: to 2 cm³ of sample add an equal volume of Benedict's solution and heat in a boiling water bath for five minutes.",
      "Protein test: to 2 cm³ of sample add 1 cm³ of sodium hydroxide, then add copper sulphate drop by drop.",
      "Lipid test: shake a little of the sample with 2 cm³ of ethanol, allow to settle, then pour the clear liquid into water.",
      "Record all colour changes in a table and state which nutrient each food contains."
    ],
    expect:"Rice and cassava give a blue-black colour with iodine, showing starch. Ripe fruit gives a brick-red precipitate with Benedict's solution, showing reducing sugar. Egg white gives a violet colour in the Biuret test, showing protein. Groundnut gives a milky white emulsion, showing lipid.",
    why:"Each test detects a specific class of nutrient by a characteristic colour change. No single food supplies every nutrient, which is exactly why a balanced diet drawn from several food groups is required."
  },
  apply:[
    {q:"A child eats plenty of cassava and rice but has a swollen belly and thin limbs. Diagnose and advise.", a:"This suggests kwashiorkor from protein deficiency; the diet supplies energy but not protein. Add fish, beans, groundnuts or eggs to the meals."},
    {q:"Explain why smoked fish keeps for weeks in a Liberian market while fresh fish spoils in a day.", a:"Smoking dries the flesh and deposits antimicrobial chemicals from the smoke, so bacteria and fungi cannot grow; fresh fish retains water and is quickly decomposed by micro-organisms and its own enzymes."},
    {q:"Why should sugary foods be limited and teeth brushed after meals?", a:"Bacteria in the mouth ferment sugars to acid, which dissolves the enamel and causes dental caries; brushing removes the plaque and food residues before the acid can act."},
    {q:"A herbivore's dental formula shows no canines and large ridged molars. Explain the adaptation.", a:"Canines for tearing flesh are unnecessary; broad ridged molars with a side-to-side jaw action grind tough cellulose-rich plant material efficiently."},
    {q:"Why is a solar drier a useful appliance for a farming community with no electricity?", a:"It preserves surplus crops and fish by removing water without any fuel cost, reducing post-harvest loss and improving food security through the year."}
  ],
  activities:[
    "Classify the nutrients found in different types of food",
    "LAB: test for reducing and non-reducing sugar, starch, lipid and protein",
    "Discuss the concept of a balanced diet and plan one from local foods",
    "Determine the dental formulae of man, dog and rabbit",
    "Discuss methods of preserving food using local resources",
    "Discuss food poisoning and its prevention"
  ],
  materials:[
    "Primary text: Baffour Asante-Owusu et al., Senior High Biology (Longman, 2009)",
    "Benedict's solution, iodine, sodium hydroxide, copper sulphate, ethanol",
    "Test tubes, water bath, droppers, mortar and pestle",
    "Samples of local foods",
    "Charts of teeth and of the food groups"
  ],
  assessment:["Laboratory report","Food test table","Class discussion","Assignment","Written test"]
},
{
  grade:11, period:"III", sem:"One", icon:"🌍",
  title:"Soil, Energy and Ecology — Patterns in Nature",
  subtitle:"Soil formation and conservation, ecosystems, trophic levels, biological associations and populations",
  outcomes:[
    "Campaign for the proper disposal of non-biodegradable substances and the maintenance of soil fertility",
    "Appreciate the ecosystem and the interdependence of organisms within ecosystems"
  ],
  objectives:[
    "Define soil and state its composition",
    "Distinguish the different types of soil — loamy, sandy and clay",
    "State the effects of erosion and the overuse of soil on soil fertility",
    "Explain soil conservation, maintenance and renewal of fertility",
    "Explain the advantages and disadvantages of slash and burn farming",
    "Distinguish between habitat and niche",
    "Describe ecological succession and the inter-specific interactions",
    "Explain trophic levels, food chains and food webs",
    "Define and calculate population density, and distinguish immigration from emigration"
  ],
  note:"<b>Soil</b> is the loose upper layer of the earth formed by weathering of rock plus humus; it contains mineral particles, humus, water, air and living organisms. An <b>ecosystem</b> is a community of organisms interacting with their non-living environment. Energy flows from <b>producers → primary consumers → secondary consumers → decomposers</b>, losing roughly 90% at each <b>trophic level</b>.",
  focus:[
    "Soil: formation, composition, types and profile",
    "Physical and chemical weathering",
    "Soil fertility, erosion, conservation and renewal",
    "Slash and burn farming; Liberian food and cash crops",
    "Effects of non-biodegradable substances on the soil",
    "Habitat and niche; ecological succession",
    "Biological associations: mutualism, commensalism, predation, parasitism, competition",
    "Trophic levels, food chains, food webs and energy flow",
    "Population density, immigration and emigration"
  ],
  terms:[
    {t:"soil", d:"the loose surface layer of the earth in which plants grow", x:"Soil is formed by weathering and decay."},
    {t:"weathering", d:"the breaking down of rock into smaller particles", x:"Weathering may be physical or chemical."},
    {t:"humus", d:"decayed organic matter in the soil", x:"Humus improves soil fertility and water retention."},
    {t:"loam", d:"soil with a balanced mixture of sand, silt and clay", x:"Loam is the best soil for most crops."},
    {t:"soil fertility", d:"the capacity of soil to supply nutrients for plant growth", x:"Manure restores soil fertility."},
    {t:"erosion", d:"the removal of topsoil by water or wind", x:"Erosion strips away the most fertile layer."},
    {t:"leaching", d:"the washing of soluble nutrients down through the soil", x:"Heavy rain causes leaching."},
    {t:"ecosystem", d:"a community of organisms together with their physical environment", x:"A pond is an ecosystem."},
    {t:"habitat", d:"the place where an organism lives", x:"The habitat of a frog is the pond edge."},
    {t:"niche", d:"the role an organism plays in its habitat", x:"Two species rarely share the same niche."},
    {t:"succession", d:"the gradual change of a community over time", x:"Bare rock is colonised by succession."},
    {t:"producer", d:"an organism that makes its own food", x:"Green plants are producers."},
    {t:"consumer", d:"an organism feeding on other organisms", x:"A goat is a primary consumer."},
    {t:"decomposer", d:"an organism that breaks down dead matter", x:"Bacteria and fungi are decomposers."},
    {t:"trophic level", d:"a feeding level in a food chain", x:"Energy is lost at each trophic level."},
    {t:"food web", d:"interconnected food chains in a community", x:"A food web shows many feeding routes."},
    {t:"mutualism", d:"an association in which both partners benefit", x:"Legumes and nitrogen-fixing bacteria show mutualism."},
    {t:"commensalism", d:"an association where one benefits and the other is unaffected", x:"Epiphytes on trees show commensalism."},
    {t:"predation", d:"one organism killing and eating another", x:"Predation controls prey numbers."},
    {t:"parasitism", d:"one organism living on another and harming it", x:"Tapeworms show parasitism."},
    {t:"competition", d:"the struggle between organisms for limited resources", x:"Weeds compete with crops for light."},
    {t:"population density", d:"the number of individuals per unit area", x:"Population density is found by dividing number by area."},
    {t:"biodegradable", d:"able to be broken down by living organisms", x:"Paper is biodegradable; plastic is not."}
  ],
  facts:[
    {q:"Define soil and name its five components.", a:"Soil is the loose upper layer of the earth in which plants grow; it consists of mineral particles, humus, soil water, soil air and living organisms."},
    {q:"State three differences between sandy, clay and loamy soils.", a:"Sandy soil has large particles, drains fast and holds few nutrients; clay has very fine particles, drains poorly and becomes waterlogged; loam is a balanced mixture holding both water and nutrients well and is best for crops."},
    {q:"Distinguish physical from chemical weathering.", a:"Physical weathering breaks rock into fragments without changing its composition, as by temperature change; chemical weathering alters the composition of the rock, as by the action of acids and water."},
    {q:"State four ways of conserving soil and maintaining fertility.", a:"Contour ploughing and terracing to reduce runoff, planting cover crops and windbreaks, crop rotation with legumes, and adding manure or compost."},
    {q:"State one advantage and two disadvantages of slash and burn farming.", a:"Advantage: the ash releases minerals and gives a quick, cheap fertility boost. Disadvantages: it destroys soil organisms and humus, exposes soil to erosion, and pollutes the air while destroying habitat."},
    {q:"Distinguish habitat from niche.", a:"A habitat is the physical place where an organism lives; a niche is the functional role it plays there — what it eats, when it is active and how it interacts with others."},
    {q:"Define the five inter-specific interactions with an example of each.", a:"Mutualism, both benefit — legume and Rhizobium; commensalism, one benefits, one unaffected — epiphyte on a tree; predation, one kills and eats the other — hawk and mouse; parasitism, one benefits and harms — tapeworm in man; competition, both are harmed by contesting a resource — weeds and crops."},
    {q:"Why does a food chain rarely have more than four or five links?", a:"About ninety per cent of the energy at each trophic level is lost as heat, in respiration and in undigested matter, so too little remains to support further levels."},
    {q:"How is population density calculated?", a:"Population density equals the number of individuals divided by the area occupied — for example 600 plants in 20 m² gives 30 plants per m²."},
    {q:"Distinguish immigration from emigration.", a:"Immigration is the movement of individuals into a population, increasing its size; emigration is movement out of it, decreasing its size."},
    {q:"State two effects of non-biodegradable plastic on soil.", a:"It does not decay, so it accumulates and blocks the movement of water and air through the soil, and it obstructs root growth and harms soil organisms."}
  ],
  tf:[
    {s:"Loamy soil is generally the best for crop growth.", a:"true", why:"It balances drainage, aeration and the retention of water and nutrients."},
    {s:"Humus is the mineral portion of the soil.", a:"false", why:"Humus is decayed organic matter, not mineral particles."},
    {s:"Energy is lost as heat at every trophic level.", a:"true", why:"Roughly ninety per cent is lost, which limits the length of food chains."},
    {s:"In commensalism both organisms benefit.", a:"false", why:"That is mutualism; in commensalism one benefits and the other is unaffected."},
    {s:"Plastic is a biodegradable substance.", a:"false", why:"Plastic resists decomposition by living organisms and persists for a very long time."},
    {s:"Decomposers return mineral nutrients to the soil.", a:"true", why:"They break down dead matter, releasing nutrients for plants to reuse."},
    {s:"Two species can occupy exactly the same niche indefinitely.", a:"false", why:"Competition would eventually exclude one of them, or they would diverge."}
  ],
  classify:{ title:"Sort these ecological terms", groups:[
    {name:"Producers", items:["maize","grass","phytoplankton","cassava"]},
    {name:"Primary consumers", items:["goat","grasshopper","cow"]},
    {name:"Secondary consumers", items:["frog","snake","hawk"]},
    {name:"Decomposers", items:["bacteria","fungi","earthworm"]},
    {name:"Soil conservation practices", items:["terracing","crop rotation","cover cropping","adding manure"]}
  ]},
  diagram:{ title:"A soil profile", caption:"State what each horizon contains.", parts:[
    {p:"Litter layer", f:"Undecomposed leaves and plant remains on the surface"},
    {p:"Topsoil (A horizon)", f:"Dark layer rich in humus and soil organisms, where most roots grow"},
    {p:"Subsoil (B horizon)", f:"Lighter layer with less humus, receiving minerals leached from above"},
    {p:"Weathered rock (C horizon)", f:"Partly broken parent rock fragments"},
    {p:"Bedrock (D horizon)", f:"Solid unweathered parent rock beneath the soil"}
  ]},
  experiment:{
    title:"Comparing the water retention of three soil types",
    aim:"To find which soil type retains the most water.",
    materials:["Equal masses of dry sandy, clay and loamy soil","Three funnels and filter papers","Three measuring cylinders","Water","Stop clock","Retort stands"],
    steps:[
      "Line each funnel with filter paper and place it in a measuring cylinder on a stand.",
      "Put an equal mass of each dry soil in its own funnel, packed to the same depth.",
      "Pour 100 cm³ of water slowly onto each soil at the same moment and start the clock.",
      "Allow the water to drain for fifteen minutes.",
      "Measure the volume of water collected in each cylinder.",
      "Calculate the water retained as 100 cm³ minus the volume collected, and tabulate the results."
    ],
    expect:"Sandy soil drains fastest and collects the largest volume, so it retains the least water. Clay drains slowest and collects the smallest volume, retaining the most but becoming waterlogged. Loam is intermediate, retaining enough water for plants while still draining freely — which is why it is the best agricultural soil.",
    why:"Particle size determines drainage and retention. Large sandy particles leave wide air spaces so water drains straight through; fine clay particles hold water tightly and exclude air. Loam combines both, retaining water and nutrients while still allowing air to reach the roots."
  },
  apply:[
    {q:"A hillside farm loses topsoil every rainy season. Recommend three measures.", a:"Plough along the contour rather than up and down the slope, build terraces or bunds to slow runoff, and plant cover crops or grass strips to bind the soil with roots."},
    {q:"Explain why a farmer should rotate maize with beans rather than plant maize continuously.", a:"Maize depletes soil nitrogen; beans are legumes whose root nodules fix atmospheric nitrogen, restoring fertility and reducing the need for fertiliser, while rotation also breaks pest and disease cycles."},
    {q:"A food chain reads grass → grasshopper → frog → snake → hawk. What happens to the hawk if the grass is destroyed?", a:"The hawk's population falls; with no producers the grasshoppers die, then the frogs and snakes, so the energy supply to the top consumer disappears."},
    {q:"Why does burning plastic waste create a different problem from burying it?", a:"Burning releases toxic gases and particles that pollute the air and harm health; burying leaves it intact in the soil for generations, blocking drainage and root growth."},
    {q:"A pond has 250 tilapia in an area of 500 m². Calculate the population density and state one factor that could reduce it.", a:"Density = 250 ÷ 500 = 0.5 fish per m². It could be reduced by emigration, predation, disease, over-fishing or a fall in dissolved oxygen."}
  ],
  activities:[
    "Explain the process of soil formation",
    "LAB: collect, observe and classify soil types",
    "LAB: demonstrate the presence of air and water in soil",
    "LAB: compare drainage and water retention in sandy, clay and loamy soils",
    "Construct food chains and a food web from local organisms",
    "Calculate population density from field quadrat data",
    "Campaign on the proper disposal of non-biodegradable waste"
  ],
  materials:[
    "Primary text: Baffour Asante-Owusu et al., Senior High Biology (Longman, 2009)",
    "Soil samples, funnels, filter paper, measuring cylinders",
    "Quadrats, tape measures and hand lenses",
    "Charts of soil profiles and food webs",
    "Beakers, tripod, and heating apparatus"
  ],
  assessment:["Laboratory report","Field investigation","Class discussion","Group project","Written test"]
},
{
  grade:11, period:"IV", sem:"Two", icon:"🧬",
  title:"Cell Growth and Division; Reproduction",
  subtitle:"The cell cycle, mitosis and meiosis, asexual and sexual reproduction, and responsible parenting",
  outcomes:[
    "Accept that reproduction is a characteristic of living things and begins with cell division",
    "Understand the roles and responsibilities in parenting and reproductive health, and how to avoid unplanned pregnancies",
    "Work together with peers to establish an environment free of substance abuse"
  ],
  objectives:[
    "Describe the stages of the cell cycle",
    "List and diagram the phases of mitosis and meiosis",
    "Distinguish mitosis from meiosis and explain the importance of meiosis in sexual reproduction",
    "Distinguish between asexual and sexual reproduction",
    "List and explain some forms of asexual reproduction in plants and animals",
    "Discuss reproduction and parenting in humans",
    "Recognise sexual decisions that have an impact on the family"
  ],
  note:"<b>Mitosis</b> produces two genetically identical diploid daughter cells for growth and repair. <b>Meiosis</b> produces four genetically different haploid gametes and halves the chromosome number, so that fertilisation restores the diploid number. Both proceed through <b>prophase, metaphase, anaphase and telophase</b> — meiosis twice over.",
  focus:[
    "The cell cycle: interphase and division",
    "Phases of mitosis and their significance",
    "Phases of meiosis I and II; crossing over",
    "Comparison of mitosis and meiosis",
    "Asexual reproduction: fission, budding, vegetative propagation, cloning",
    "Sexual reproduction: gamete formation and fertilisation",
    "Responsibilities of parenting and the risks of teenage parenting"
  ],
  terms:[
    {t:"cell cycle", d:"the sequence of growth and division in a cell's life", x:"Interphase occupies most of the cell cycle."},
    {t:"interphase", d:"the stage of growth and DNA replication before division", x:"DNA is copied during interphase."},
    {t:"mitosis", d:"division producing two identical diploid cells", x:"Mitosis allows growth and repair."},
    {t:"meiosis", d:"division producing four different haploid cells", x:"Meiosis forms gametes."},
    {t:"chromosome", d:"a thread of DNA carrying genes", x:"Man has 46 chromosomes."},
    {t:"chromatid", d:"one of two identical strands of a duplicated chromosome", x:"Chromatids separate at anaphase."},
    {t:"centromere", d:"the point at which chromatids are joined", x:"Spindle fibres attach at the centromere."},
    {t:"spindle", d:"the fibres that move chromosomes during division", x:"The spindle forms at prophase."},
    {t:"diploid", d:"having two sets of chromosomes", x:"Body cells are diploid."},
    {t:"haploid", d:"having one set of chromosomes", x:"Gametes are haploid."},
    {t:"prophase", d:"the phase in which chromosomes condense and the spindle forms", x:"The nuclear membrane breaks down at prophase."},
    {t:"metaphase", d:"the phase in which chromosomes line up at the equator", x:"Chromosomes align at metaphase."},
    {t:"anaphase", d:"the phase in which chromatids move to opposite poles", x:"Anaphase separates the chromatids."},
    {t:"telophase", d:"the phase in which nuclei re-form at the poles", x:"Two nuclei appear at telophase."},
    {t:"crossing over", d:"exchange of segments between homologous chromosomes", x:"Crossing over creates new gene combinations."},
    {t:"fission", d:"asexual division of one organism into two", x:"Amoeba reproduces by binary fission."},
    {t:"budding", d:"asexual reproduction by an outgrowth that detaches", x:"Yeast and hydra reproduce by budding."},
    {t:"cloning", d:"producing genetically identical organisms artificially", x:"Cloning gives identical offspring."},
    {t:"fertilisation", d:"the fusion of male and female gametes", x:"Fertilisation restores the diploid number."},
    {t:"zygote", d:"the diploid cell formed at fertilisation", x:"The zygote divides by mitosis."},
    {t:"spermatogenesis", d:"the formation of sperm by meiosis", x:"Spermatogenesis occurs in the testes."},
    {t:"oogenesis", d:"the formation of ova by meiosis", x:"Oogenesis occurs in the ovaries."}
  ],
  facts:[
    {q:"Name the stages of the cell cycle.", a:"Interphase — comprising G1 growth, S phase DNA replication and G2 growth — followed by mitosis and cytokinesis."},
    {q:"Name the four phases of mitosis in order.", a:"Prophase, metaphase, anaphase and telophase."},
    {q:"State four differences between mitosis and meiosis.", a:"Mitosis has one division, meiosis two; mitosis gives two daughter cells, meiosis four; mitosis keeps the diploid number, meiosis halves it to haploid; mitosis gives identical cells, meiosis gives genetically varied ones."},
    {q:"Why is meiosis essential for sexual reproduction?", a:"It halves the chromosome number so that fertilisation restores the normal diploid number rather than doubling it each generation, and it creates genetic variation through crossing over and independent assortment."},
    {q:"What is crossing over and when does it occur?", a:"The exchange of corresponding segments between homologous chromosomes at prophase I of meiosis, producing new combinations of genes."},
    {q:"State three differences between asexual and sexual reproduction.", a:"Asexual involves one parent, no gametes and gives identical offspring; sexual involves two parents, gamete fusion and gives varied offspring; asexual is faster while sexual produces variation for adaptation."},
    {q:"Name four forms of asexual reproduction with an example of each.", a:"Binary fission — Amoeba; budding — yeast and hydra; vegetative propagation — cassava stem cuttings; spore formation — Rhizopus."},
    {q:"Distinguish spermatogenesis from oogenesis.", a:"Spermatogenesis in the testes produces four functional sperm from each parent cell continuously from puberty; oogenesis in the ovaries produces one functional ovum and polar bodies, usually releasing one per cycle."},
    {q:"State four responsibilities of parenting.", a:"Providing food, shelter and health care; providing education; giving emotional care and moral guidance; and protecting the child from harm."},
    {q:"State three risks of teenage parenting.", a:"Greater medical risk in pregnancy and childbirth for a young mother, interruption or end of schooling with reduced earning capacity, and economic and emotional strain on the young parents and their families."}
  ],
  tf:[
    {s:"Mitosis produces two genetically identical daughter cells.", a:"true", why:"The chromatids separate so each cell receives an identical set of chromosomes."},
    {s:"Meiosis produces diploid cells.", a:"false", why:"Meiosis halves the chromosome number and produces haploid gametes."},
    {s:"DNA is replicated during interphase.", a:"true", why:"Replication occurs in the S phase of interphase, before division begins."},
    {s:"Crossing over occurs during mitosis.", a:"false", why:"Crossing over occurs at prophase I of meiosis and is a source of genetic variation."},
    {s:"Cassava grown from stem cuttings is genetically identical to the parent.", a:"true", why:"Vegetative propagation is asexual, involving only mitosis."},
    {s:"Fertilisation restores the diploid chromosome number.", a:"true", why:"Two haploid gametes fuse to give a diploid zygote."}
  ],
  classify:{ title:"Sort these processes and features", groups:[
    {name:"Mitosis", items:["one division","two daughter cells","identical cells","growth and repair"]},
    {name:"Meiosis", items:["two divisions","four daughter cells","genetically varied cells","gamete formation"]},
    {name:"Asexual reproduction", items:["binary fission","budding","vegetative propagation","cloning"]},
    {name:"Sexual reproduction", items:["gamete formation","fertilisation","zygote","genetic variation"]}
  ]},
  diagram:{ title:"The phases of mitosis", caption:"State what happens at each phase.", parts:[
    {p:"Interphase", f:"Cell grows and the DNA replicates, forming two chromatids per chromosome"},
    {p:"Prophase", f:"Chromosomes condense and become visible; nuclear membrane disappears and the spindle forms"},
    {p:"Metaphase", f:"Chromosomes line up along the equator, attached to spindle fibres at the centromere"},
    {p:"Anaphase", f:"Centromeres divide and the chromatids are pulled to opposite poles"},
    {p:"Telophase", f:"Chromosomes reach the poles, uncoil, and two new nuclear membranes form"},
    {p:"Cytokinesis", f:"The cytoplasm divides, giving two complete daughter cells"}
  ]},
  experiment:{
    title:"Observing mitosis in an onion root tip",
    aim:"To observe the stages of mitosis in a growing root tip.",
    materials:["Onion bulb grown in water until roots appear","Dilute hydrochloric acid","Acetic orcein or methylene blue stain","Microscope slides and cover slips","Watch glass","Scalpel, forceps, mounted needle","Bunsen burner or hot water bath"],
    steps:[
      "Cut the terminal 5 mm from a growing root — this contains the dividing meristem.",
      "Warm the tip in dilute hydrochloric acid for about five minutes to separate the cells.",
      "Rinse in water, transfer to a slide and add two drops of acetic orcein stain.",
      "Break up the tissue with a mounted needle and leave the stain to act for ten minutes.",
      "Add a cover slip and press down firmly through filter paper to squash the tissue into one cell layer.",
      "Examine under high power and find cells in each phase of mitosis; draw and label them."
    ],
    expect:"Most cells are in interphase with a distinct nucleus. Among them are cells showing condensed chromosomes at prophase, chromosomes aligned at the equator at metaphase, chromatids separating toward the poles at anaphase, and two re-forming nuclei at telophase. This confirms that growth in the root tip occurs by mitosis.",
    why:"Growth in a plant occurs by mitosis in the meristem at the root tip. Because the cells divide continuously and out of step with one another, a single squash preparation captures cells frozen at every phase of the cycle."
  },
  apply:[
    {q:"Why does a cut on the skin heal but a lost limb does not regrow in humans?", a:"Mitosis replaces damaged skin cells from the surviving layer, but humans lack the regenerative capacity and organising tissues needed to rebuild a whole limb."},
    {q:"Explain why offspring of sexual reproduction survive environmental change better than clones.", a:"Sexual reproduction produces genetic variation, so some individuals are likely to possess features suited to the new conditions; clones are identical and may all be equally vulnerable."},
    {q:"Cancer is described as uncontrolled mitosis. Explain what this means.", a:"The normal controls on the cell cycle fail, so cells divide repeatedly without regard to the body's needs, forming a tumour that invades and disrupts healthy tissue."},
    {q:"A crop of identical cloned bananas is destroyed by one disease. Explain the biological reason.", a:"Every plant has the same genotype and therefore the same susceptibility, so a pathogen able to infect one can infect all of them, with no resistant individuals to survive."},
    {q:"Why do teenage pregnancies carry higher medical risk than pregnancies in the mid-twenties?", a:"The teenage pelvis and reproductive system may not be fully mature, raising the risk of obstructed labour, high blood pressure, anaemia and low birth weight."}
  ],
  activities:[
    "Draw and label the stages of mitosis and meiosis",
    "Distinguish mitosis from meiosis in a comparison table",
    "Explain gamete formation and the terms gamete, diploid and haploid",
    "LAB: examine thin slices of onion root tip to study mitosis",
    "Discuss the responsibilities of parenting and the risks of teenage parenting",
    "Group work on establishing a peer environment free of substance abuse"
  ],
  materials:[
    "Primary text: Baffour Asante-Owusu et al., Senior High Biology (Longman, 2009)",
    "Onion bulbs, hydrochloric acid, acetic orcein stain",
    "Microscopes, slides, cover slips, mounted needles",
    "Charts and models of mitosis and meiosis",
    "Health and life-skills literature"
  ],
  assessment:["Laboratory report and drawings","Comparison table","Class discussion","Group presentation","Written test"]
},
{
  grade:11, period:"V", sem:"Two", icon:"🧬",
  title:"Genetics, Sexuality and Evolution",
  subtitle:"Nucleic acids, protein synthesis, Mendelian inheritance, blood groups and the evidence for evolution",
  outcomes:[
    "Acquire the concept that DNA and RNA are the principal transmitters of genetic characteristics, gene interaction and genetic variation",
    "Accept that traits are inherited from parents through DNA and that genetic disorders are inherited, so medical examination when selecting a partner is important"
  ],
  objectives:[
    "Explain the term nucleic acids and name the types",
    "Describe the double helix model of DNA structure",
    "Outline the process of DNA replication and RNA transcription",
    "Explain the process of protein synthesis and its importance",
    "Explain the meaning of genetics and heredity and describe Mendel's experiments",
    "Define the genetic terms phenotype, genotype, alleles, homozygous, heterozygous, monohybrid and dihybrid",
    "Describe how traits are passed from parents to offspring, including blood groups",
    "State the evidence for evolution and outline the theories of evolution"
  ],
  note:"<b>DNA</b> is a double helix of two strands held by complementary base pairs — <b>A pairs with T, C pairs with G</b>. In <b>transcription</b> DNA is copied to mRNA (with U replacing T); in <b>translation</b> ribosomes read each three-base <b>codon</b> and assemble the corresponding amino acid chain. Mendel's <b>Law of Segregation</b> states that the two alleles of a gene separate during gamete formation.",
  focus:[
    "Nucleic acids: DNA and RNA, and the types of RNA",
    "Nucleotide structure and complementary base pairing",
    "DNA replication and RNA transcription",
    "Stages and importance of protein synthesis",
    "Mendel's experiments with garden peas; principles of genetics",
    "Genetic terms and monohybrid and dihybrid crosses",
    "Hereditary traits, blood groups and sex determination",
    "Evidence for evolution: fossil records; theories of evolution"
  ],
  terms:[
    {t:"nucleic acid", d:"a large molecule carrying genetic information", x:"DNA and RNA are nucleic acids."},
    {t:"DNA", d:"deoxyribonucleic acid, the molecule of inheritance", x:"DNA is a double helix."},
    {t:"RNA", d:"ribonucleic acid, involved in protein synthesis", x:"mRNA carries the code to the ribosome."},
    {t:"nucleotide", d:"the unit of nucleic acid: sugar, phosphate and base", x:"DNA is a chain of nucleotides."},
    {t:"double helix", d:"the twisted-ladder structure of DNA", x:"Watson and Crick described the double helix."},
    {t:"base pairing", d:"the rule that A pairs with T and C with G", x:"Base pairing allows accurate replication."},
    {t:"replication", d:"the copying of DNA before cell division", x:"Replication is semi-conservative."},
    {t:"transcription", d:"the copying of a DNA sequence into mRNA", x:"Transcription occurs in the nucleus."},
    {t:"translation", d:"the assembly of a protein from the mRNA code", x:"Translation occurs at the ribosome."},
    {t:"codon", d:"a sequence of three bases coding for one amino acid", x:"Each codon specifies an amino acid."},
    {t:"gene", d:"a length of DNA coding for a characteristic", x:"A gene may exist in several allele forms."},
    {t:"allele", d:"an alternative form of a gene", x:"The gene for height has tall and short alleles."},
    {t:"genotype", d:"the genetic make-up of an organism", x:"The genotype Tt is heterozygous."},
    {t:"phenotype", d:"the observable characteristics of an organism", x:"The phenotype may be tall or short."},
    {t:"dominant", d:"an allele expressed even when only one copy is present", x:"Tall is dominant to short in peas."},
    {t:"recessive", d:"an allele expressed only when two copies are present", x:"Short is recessive."},
    {t:"homozygous", d:"having two identical alleles of a gene", x:"TT and tt are homozygous."},
    {t:"heterozygous", d:"having two different alleles of a gene", x:"Tt is heterozygous."},
    {t:"monohybrid cross", d:"a cross involving one pair of contrasting characters", x:"A monohybrid cross gives a 3:1 ratio."},
    {t:"dihybrid cross", d:"a cross involving two pairs of characters", x:"A dihybrid cross gives a 9:3:3:1 ratio."},
    {t:"mutation", d:"a change in the genetic material", x:"Mutation is a source of variation."},
    {t:"evolution", d:"change in the inherited characteristics of populations over time", x:"Evolution explains the diversity of life."},
    {t:"natural selection", d:"the survival and reproduction of the better-adapted", x:"Natural selection was proposed by Darwin."},
    {t:"fossil", d:"the preserved remains or traces of a past organism", x:"Fossils provide evidence of evolution."}
  ],
  facts:[
    {q:"Name the two types of nucleic acid and state one difference between them.", a:"DNA and RNA; DNA is double-stranded with deoxyribose and the base thymine, while RNA is single-stranded with ribose and the base uracil."},
    {q:"Describe the double helix model of DNA.", a:"Two polynucleotide strands wind round each other in a spiral; the sugar-phosphate backbones lie outside and the bases project inward, held together in complementary pairs by hydrogen bonds."},
    {q:"State the rule of complementary base pairing.", a:"Adenine pairs with thymine (with uracil in RNA) by two hydrogen bonds, and cytosine pairs with guanine by three."},
    {q:"Outline the process of DNA replication.", a:"The double helix unwinds and the strands separate; each acts as a template; free nucleotides pair with the exposed bases; and DNA polymerase joins them, giving two identical molecules each with one old and one new strand."},
    {q:"Name the three types of RNA and their functions.", a:"Messenger RNA carries the code from the nucleus; transfer RNA brings the correct amino acid to the ribosome; ribosomal RNA forms part of the ribosome where assembly occurs."},
    {q:"Outline the stages of protein synthesis.", a:"Transcription — mRNA is copied from the DNA template in the nucleus; the mRNA travels to a ribosome; translation — tRNA molecules bring amino acids matching each codon, and peptide bonds join them into a polypeptide chain that folds into the protein."},
    {q:"State Mendel's Law of Segregation.", a:"The two alleles of a gene separate during the formation of gametes, so each gamete carries only one allele of each pair."},
    {q:"In a cross between two heterozygous tall pea plants (Tt × Tt), give the genotypic and phenotypic ratios.", a:"Genotypic ratio 1 TT : 2 Tt : 1 tt; phenotypic ratio 3 tall : 1 short."},
    {q:"How is sex determined in humans?", a:"Females are XX and produce ova all carrying X; males are XY and produce sperm carrying either X or Y; a Y-bearing sperm gives a boy and an X-bearing sperm a girl, so sex is determined by the father."},
    {q:"Name the four ABO blood groups and state which is the universal donor.", a:"A, B, AB and O; group O is the universal donor and group AB the universal recipient."},
    {q:"State four kinds of evidence for evolution.", a:"The fossil record showing change over time; comparative anatomy with homologous structures; embryology showing similar early development; and molecular evidence from DNA and protein similarity."},
    {q:"State the main difference between Lamarck's and Darwin's theories.", a:"Lamarck held that characteristics acquired during life are inherited; Darwin held that inherited variation already exists and natural selection favours those individuals best adapted to survive and reproduce."}
  ],
  tf:[
    {s:"In DNA, adenine pairs with guanine.", a:"false", why:"Adenine pairs with thymine; cytosine pairs with guanine."},
    {s:"Transcription takes place in the nucleus.", a:"true", why:"mRNA is copied from DNA in the nucleus and then travels to the ribosome."},
    {s:"A codon consists of three bases.", a:"true", why:"Each triplet codes for one amino acid."},
    {s:"An organism with genotype Tt is homozygous.", a:"false", why:"Tt has two different alleles and is therefore heterozygous."},
    {s:"A monohybrid cross between two heterozygotes gives a 3:1 phenotypic ratio.", a:"true", why:"Three offspring show the dominant phenotype for every one showing the recessive."},
    {s:"The sex of a human child is determined by the mother.", a:"false", why:"The mother always contributes X; the father contributes either X or Y, so he determines the sex."},
    {s:"Fossils provide evidence for evolution.", a:"true", why:"They show a sequence of changing forms of life through geological time."}
  ],
  classify:{ title:"Sort these genetic terms", groups:[
    {name:"Found in DNA only", items:["thymine","deoxyribose","double-stranded"]},
    {name:"Found in RNA only", items:["uracil","ribose","single-stranded"]},
    {name:"Genotypes", items:["TT","Tt","tt"]},
    {name:"Evidence for evolution", items:["fossil record","comparative anatomy","embryology","DNA similarity"]}
  ]},
  diagram:{ title:"Structure of DNA", caption:"State the role of each labelled component.", parts:[
    {p:"Phosphate group", f:"Links the sugars to form the backbone of each strand"},
    {p:"Deoxyribose sugar", f:"Five-carbon sugar to which base and phosphate attach"},
    {p:"Nitrogenous base", f:"A, T, C or G — the sequence carries the genetic code"},
    {p:"Hydrogen bond", f:"Weak bond holding complementary base pairs together"},
    {p:"Complementary strand", f:"Runs in the opposite direction and acts as a template in replication"},
    {p:"Double helix", f:"The overall twisted-ladder shape of the molecule"}
  ]},
  experiment:{
    title:"Extracting DNA from plant tissue",
    aim:"To extract and observe DNA from a plant such as banana or onion.",
    materials:["Ripe banana or onion","Table salt","Washing-up liquid","Ice-cold ethanol","Distilled water","Mortar and pestle","Beaker, filter paper, funnel, glass rod","Test tube"],
    steps:[
      "Mash a small piece of banana in a mortar with 100 cm³ of distilled water.",
      "Add one teaspoon of salt and two teaspoons of washing-up liquid and stir gently for five minutes without frothing.",
      "Filter the mixture into a clean beaker to remove solid debris.",
      "Pour about 5 cm³ of the filtrate into a test tube.",
      "Tilt the tube and pour ice-cold ethanol slowly down the side to form a layer on top.",
      "Leave undisturbed for a few minutes and observe at the boundary between the two layers; lift out any material with a glass rod."
    ],
    expect:"White thread-like strands appear at the boundary between the filtrate and the ethanol and can be spooled onto the rod. The detergent dissolves the cell and nuclear membranes, releasing the DNA; the salt makes the DNA molecules clump together; and because DNA is insoluble in cold ethanol it precipitates out as visible fibres.",
    why:"DNA is present in every living cell. Detergent breaks the lipid membranes to release it, salt neutralises the charge on the phosphate backbone so the molecules aggregate, and DNA is insoluble in cold ethanol so it precipitates as visible fibres."
  },
  apply:[
    {q:"Two parents with normal vision have a colour-blind son. Explain using sex linkage.", a:"Colour blindness is a recessive allele on the X chromosome. The mother is a carrier (X^N X^n); her son inherited X^n from her and Y from his father, and with no second X to mask it the condition is expressed."},
    {q:"A man of blood group O and a woman of group AB have children. State the possible blood groups.", a:"The father is OO and the mother AB, so children receive O from the father and A or B from the mother: the children can be group A or group B, but never O or AB."},
    {q:"Why does the syllabus recommend medical examination before selecting a partner?", a:"Some serious disorders such as sickle-cell anaemia are recessive; two carriers can produce affected children. Testing lets a couple know the risk and plan accordingly."},
    {q:"Explain the survival of the sickle-cell allele in malarial regions using natural selection.", a:"Heterozygous carriers have partial resistance to malaria, so they survive and reproduce better than either homozygote in malarial areas, keeping the allele in the population despite the disease it causes when homozygous."},
    {q:"A single base is changed in a gene and the protein no longer works. Explain.", a:"The altered codon may specify a different amino acid, changing the sequence and therefore the folded shape of the protein; if this alters the active site the protein cannot perform its function."}
  ],
  activities:[
    "Use a DNA model to demonstrate the process of replication",
    "Use charts to explain transcription and protein synthesis",
    "Describe Mendel's contributions to genetics and work monohybrid crosses",
    "Solve genetic problems using Punnett squares, including blood groups",
    "LAB: extract DNA from banana or onion",
    "Discuss the evidence and theories of evolution"
  ],
  materials:[
    "Primary text: Baffour Asante-Owusu et al., Senior High Biology (Longman, 2009)",
    "DNA model kit and charts of protein synthesis",
    "Banana or onion, salt, detergent, ethanol",
    "Beakers, filter paper, test tubes",
    "Charts of fossil records and Punnett squares"
  ],
  assessment:["Laboratory report","Genetics problem set","Class discussion","Group presentation","Written test"]
},
{
  grade:11, period:"VI", sem:"Two", icon:"🐟",
  title:"Vertebrates: Fishes, Amphibians and Reptiles",
  subtitle:"Characteristics, adaptations, internal and external features, and economic importance",
  outcomes:[
    "Realise the economic importance of fishes, amphibians and reptiles",
    "Appreciate their nutritional values and differentiate between vertebrates and invertebrates"
  ],
  objectives:[
    "Explain the general characteristics of the phylum Chordata",
    "Describe the differences between vertebrates and invertebrates",
    "List the general characteristics of fish and explain the differences among the three groups",
    "Discuss the economic importance of fishes",
    "List the general characteristics of amphibians and describe the external and internal features of a frog",
    "Differentiate structurally between a frog and a toad",
    "List the general characteristics of reptiles and describe the amniote egg"
  ],
  note:"<b>Chordates</b> possess, at some stage, a notochord, a dorsal hollow nerve cord, pharyngeal gill slits and a post-anal tail. Vertebrates have a backbone of vertebrae; invertebrates do not. Fishes fall into three groups: <b>jawless</b> (lamprey), <b>cartilaginous</b> (shark) and <b>bony</b> (tilapia). The <b>amniote egg</b> of reptiles freed vertebrates from dependence on water for reproduction.",
  focus:[
    "General characteristics of chordates and vertebrates",
    "Vertebrates versus invertebrates",
    "Fishes: jawless, cartilaginous and bony; adaptation, locomotion and respiration",
    "Economic importance of fishes",
    "Amphibians: characteristics, external and internal features of the frog, life cycle",
    "Structural differences between frog and toad",
    "Reptiles: general characteristics and the amniote egg"
  ],
  terms:[
    {t:"chordate", d:"an animal possessing a notochord at some stage of life", x:"All vertebrates are chordates."},
    {t:"notochord", d:"a flexible rod of support along the back", x:"The notochord is replaced by the backbone."},
    {t:"vertebrate", d:"an animal with a backbone of vertebrae", x:"Fish, frogs and birds are vertebrates."},
    {t:"invertebrate", d:"an animal without a backbone", x:"Insects and worms are invertebrates."},
    {t:"cartilaginous fish", d:"a fish whose skeleton is made of cartilage", x:"The shark is a cartilaginous fish."},
    {t:"bony fish", d:"a fish with a skeleton of bone and a swim bladder", x:"Tilapia is a bony fish."},
    {t:"jawless fish", d:"a primitive fish with a sucking mouth and no jaws", x:"The lamprey is a jawless fish."},
    {t:"operculum", d:"the bony flap covering the gills of a bony fish", x:"The operculum protects the gills."},
    {t:"gill", d:"the respiratory organ of aquatic animals", x:"Gills extract oxygen from water."},
    {t:"swim bladder", d:"a gas-filled sac giving buoyancy to bony fish", x:"The swim bladder keeps the fish at depth."},
    {t:"lateral line", d:"a sense organ detecting vibration in water", x:"The lateral line senses movement nearby."},
    {t:"amphibian", d:"a vertebrate living both in water and on land", x:"The frog is an amphibian."},
    {t:"metamorphosis", d:"the change from larva to adult form", x:"The tadpole undergoes metamorphosis."},
    {t:"tadpole", d:"the aquatic larva of a frog", x:"The tadpole breathes with gills."},
    {t:"cutaneous respiration", d:"gas exchange through the moist skin", x:"Frogs use cutaneous respiration under water."},
    {t:"reptile", d:"a scaly vertebrate laying shelled eggs on land", x:"Lizards and snakes are reptiles."},
    {t:"amniote egg", d:"a shelled egg with membranes protecting the embryo on land", x:"The amniote egg freed reptiles from water."},
    {t:"ectothermic", d:"having a body temperature dependent on the surroundings", x:"Reptiles are ectothermic."},
    {t:"scale", d:"a thin plate covering the skin of fish and reptiles", x:"Reptile scales prevent water loss."},
    {t:"cloaca", d:"a common chamber for the discharge of waste and gametes", x:"The frog has a cloaca."}
  ],
  facts:[
    {q:"State the four characteristics of chordates.", a:"A notochord, a dorsal hollow nerve cord, pharyngeal gill slits and a post-anal tail — present at some stage in the life cycle."},
    {q:"State three differences between vertebrates and invertebrates.", a:"Vertebrates have an internal backbone and endoskeleton, a dorsal nerve cord and usually a closed circulation; invertebrates have no backbone, often an exoskeleton or none, and a ventral nerve cord."},
    {q:"Name the three groups of fishes with an example of each.", a:"Jawless — lamprey; cartilaginous — shark and ray; bony — tilapia and herring."},
    {q:"State three differences between cartilaginous and bony fish.", a:"Cartilaginous fish have a cartilage skeleton, five to seven exposed gill slits and no swim bladder; bony fish have a bony skeleton, gills covered by an operculum, and a swim bladder for buoyancy."},
    {q:"State four adaptations of a fish to aquatic life.", a:"A streamlined body reducing resistance; fins for steering and propulsion; gills for extracting dissolved oxygen; scales and mucus reducing friction; and a lateral line for detecting vibrations."},
    {q:"State four ways fishes are economically important.", a:"They are a major source of cheap protein; fishing provides employment and income; fish yield oil rich in vitamins A and D; and fish waste is used as fertiliser and animal feed."},
    {q:"State four general characteristics of amphibians.", a:"Moist glandular skin without scales; two pairs of limbs; external fertilisation with eggs laid in water; a larval stage with gills undergoing metamorphosis; and a three-chambered heart."},
    {q:"Describe the life cycle of a frog.", a:"Eggs are laid in water in jelly and fertilised externally; they hatch into tadpoles that breathe by gills and feed on algae; limbs develop and the tail is absorbed at metamorphosis; and the adult frog breathes with lungs and skin on land."},
    {q:"State three structural differences between a frog and a toad.", a:"The frog has smooth moist skin, long powerful hind legs for leaping and lives near water; the toad has dry warty skin, shorter legs and walks or makes short hops, and can live further from water."},
    {q:"State four general characteristics of reptiles.", a:"Dry scaly skin preventing water loss; internal fertilisation; shelled amniote eggs laid on land; ectothermic with a three-chambered heart (four in crocodiles); and lungs for breathing throughout life."},
    {q:"Name the membranes of the amniote egg and their functions.", a:"The amnion encloses fluid cushioning the embryo; the chorion allows gas exchange; the allantois stores waste and assists respiration; the yolk sac supplies food."}
  ],
  tf:[
    {s:"All chordates are vertebrates.", a:"false", why:"Some chordates such as sea squirts and Amphioxus have a notochord but no backbone."},
    {s:"The shark has a skeleton of cartilage.", a:"true", why:"It is a cartilaginous fish, unlike bony fish such as tilapia."},
    {s:"Tadpoles breathe by means of lungs.", a:"false", why:"Tadpoles breathe with gills; lungs develop at metamorphosis."},
    {s:"Reptiles lay eggs with a protective shell on land.", a:"true", why:"The amniote egg allowed reptiles to reproduce away from water."},
    {s:"Amphibians can exchange gases through their skin.", a:"true", why:"Cutaneous respiration through moist skin supplements the lungs."},
    {s:"Bony fish have gills covered by an operculum.", a:"true", why:"The operculum protects the gills and helps pump water over them."},
    {s:"Reptiles maintain a constant body temperature independent of surroundings.", a:"false", why:"They are ectothermic, relying on the environment to regulate body temperature."}
  ],
  classify:{ title:"Sort these vertebrates and features", groups:[
    {name:"Jawless fish", items:["lamprey","hagfish"]},
    {name:"Cartilaginous fish", items:["shark","ray","skate"]},
    {name:"Bony fish", items:["tilapia","herring","catfish"]},
    {name:"Amphibians", items:["frog","toad","salamander"]},
    {name:"Reptiles", items:["lizard","snake","crocodile","tortoise"]}
  ]},
  diagram:{ title:"External features of a bony fish", caption:"State the function of each labelled structure.", parts:[
    {p:"Operculum", f:"Bony flap protecting the gills and aiding water flow over them"},
    {p:"Dorsal fin", f:"Keeps the fish upright and prevents rolling"},
    {p:"Caudal (tail) fin", f:"Provides forward thrust in swimming"},
    {p:"Pectoral fins", f:"Used for steering, braking and balance"},
    {p:"Pelvic fins", f:"Assist in balance and in changing depth"},
    {p:"Lateral line", f:"Detects vibrations and pressure changes in the water"},
    {p:"Scales", f:"Overlapping plates protecting the body and reducing friction"},
    {p:"Nostril", f:"Opening for the sense of smell, not used for breathing"}
  ]},
  experiment:{
    title:"External and internal features of a bony fish",
    aim:"To examine the external and internal structures of a fish and relate them to function.",
    materials:["Fresh tilapia or other bony fish","Dissecting board and pins","Scalpel, scissors and forceps","Hand lens","Gloves","Drawing paper"],
    steps:[
      "Wearing gloves, place the fish on the board and examine the external features; note the body shape, fins, scales, lateral line, eyes, nostrils and operculum.",
      "Make a labelled drawing of the external view.",
      "Lift the operculum and examine the gills with a hand lens; note the gill filaments and their red colour.",
      "Cut carefully along the ventral surface from the vent forward, and open the body wall.",
      "Identify the gut, liver, swim bladder, heart and kidney in position before removing anything.",
      "Make a second labelled drawing of the internal organs, then wash and dispose of the material safely."
    ],
    expect:"Externally the body is streamlined and covered with overlapping scales and mucus, with fins for steering and thrust and a visible lateral line. The gills are red with many fine filaments giving a very large surface area for absorbing dissolved oxygen. Internally the silvery swim bladder lies below the backbone and gives buoyancy, with the gut, liver, heart and kidney in the body cavity.",
    why:"Every external and internal feature is an adaptation to aquatic life: streamlining and fins for movement, gills with an enormous surface area for extracting dissolved oxygen, and a swim bladder for buoyancy without effort."
  },
  apply:[
    {q:"Explain why a fish dies quickly when taken out of water even though air contains more oxygen.", a:"Out of water the gill filaments stick together and collapse under their own weight, so the surface area for gas exchange falls drastically and the gills dry out and cannot function."},
    {q:"Why must amphibians return to water to breed while reptiles need not?", a:"Amphibian eggs have no shell and would dry out, and fertilisation is external requiring water for the sperm to swim; reptiles have internal fertilisation and a shelled amniote egg that retains its own water."},
    {q:"A pond is polluted with warm water from a factory. Explain the effect on the fish.", a:"Warm water holds less dissolved oxygen while raising the fish's metabolic rate and oxygen demand, so the fish suffocate or must leave the area."},
    {q:"Why are Liberia's coastal fisheries important to national nutrition and economy?", a:"Fish supplies affordable high-quality protein to a large population, supports employment in catching, smoking and trading, and earns income and foreign exchange for the country."},
    {q:"Explain the advantage of the swim bladder to a bony fish.", a:"By adjusting the gas in the bladder the fish can remain at any depth without swimming, saving considerable energy compared with a shark, which must keep moving not to sink."}
  ],
  activities:[
    "LAB: identify and describe the internal and external structures of a fish",
    "LAB: dissect a fish and a frog to study their structures",
    "LAB: examine a lizard and study its external features",
    "Draw and label the amniote egg",
    "Compare frog and toad and record the differences",
    "Discuss the economic importance of fishes, amphibians and reptiles"
  ],
  materials:[
    "Primary text: Baffour Asante-Owusu et al., Senior High Biology (Longman, 2009)",
    "Fresh fish and preserved specimens",
    "Dissecting kits, boards and pins",
    "Hand lenses and gloves",
    "Charts of vertebrate classes and the amniote egg"
  ],
  assessment:["Laboratory dissection report","Labelled drawings","Class discussion","Group presentation","Written test"]
},

/* ================================ GRADE 12 ================================ */
{
  grade:12, period:"I", sem:"One", icon:"🦅",
  title:"Chordata: Aves and Mammals",
  subtitle:"Birds and their adaptation to flight; mammals, dentition and temperature control",
  outcomes:[
    "Distinguish between mammals and birds",
    "Describe the control mechanisms of body temperature in the mammalian body"
  ],
  objectives:[
    "Discuss the general characteristics of birds and mammals",
    "Relate the adaptations of birds to flight",
    "Describe the external and internal features of birds and the types of feathers",
    "Classify mammals on the basis of class, structure and types of reproduction",
    "Explain the control mechanisms of body temperature in mammals",
    "Describe the structure of a typical mammalian molar tooth and write dental formulae"
  ],
  note:"Birds and mammals are <b>endothermic</b> — they generate and regulate their own body heat. Birds are adapted to flight by <b>hollow pneumatic bones, feathers, powerful flight muscles on a keeled sternum, air sacs</b> and the loss of teeth and one ovary to save weight. Mammals have <b>hair, mammary glands</b> and <b>heterodont dentition</b>, and are grouped as <b>monotremes, marsupials</b> and <b>placentals</b>.",
  focus:[
    "Birds: general characteristics and external and internal features",
    "Adaptations to flight; flight and flightless birds",
    "Types of feathers and their functions",
    "Mammals: general characteristics and classification",
    "Monotremes, marsupials and placentals",
    "Structure of a mammalian molar; dentition and dental formulae",
    "Control of body temperature in mammals"
  ],
  terms:[
    {t:"Aves", d:"the class of vertebrates comprising the birds", x:"Aves are feathered, egg-laying vertebrates."},
    {t:"endothermic", d:"generating and regulating body heat internally", x:"Birds and mammals are endothermic."},
    {t:"feather", d:"a light keratin structure covering a bird's body", x:"Feathers insulate and provide lift."},
    {t:"contour feather", d:"a feather giving the body its shape and streamlining", x:"Contour feathers cover the body."},
    {t:"flight feather", d:"a long stiff wing or tail feather used in flying", x:"Flight feathers form the wing surface."},
    {t:"down feather", d:"a soft fluffy feather providing insulation", x:"Down feathers keep the bird warm."},
    {t:"keel", d:"the ridge on the sternum to which flight muscles attach", x:"The keel anchors the powerful flight muscles."},
    {t:"pneumatic bone", d:"a hollow air-filled bone reducing weight", x:"Pneumatic bones make the skeleton light."},
    {t:"air sac", d:"an extension of the lungs improving ventilation in birds", x:"Air sacs allow one-way flow of air."},
    {t:"preen gland", d:"a gland producing oil to waterproof the feathers", x:"The bird uses the preen gland when grooming."},
    {t:"mammal", d:"a vertebrate with hair and mammary glands", x:"Mammals suckle their young."},
    {t:"mammary gland", d:"the gland producing milk for the young", x:"Mammary glands define the mammals."},
    {t:"monotreme", d:"an egg-laying mammal", x:"The duck-billed platypus is a monotreme."},
    {t:"marsupial", d:"a mammal whose young complete development in a pouch", x:"The kangaroo is a marsupial."},
    {t:"placental", d:"a mammal whose young develop fully in the uterus", x:"Man is a placental mammal."},
    {t:"heterodont", d:"having teeth of different kinds", x:"Mammals have heterodont dentition."},
    {t:"diastema", d:"a gap between the teeth in herbivores", x:"The diastema lets the tongue move food."},
    {t:"thermoregulation", d:"the control of body temperature", x:"Sweating is part of thermoregulation."},
    {t:"vasodilation", d:"the widening of skin blood vessels to lose heat", x:"Vasodilation makes the skin flushed."},
    {t:"vasoconstriction", d:"the narrowing of skin blood vessels to conserve heat", x:"Vasoconstriction reduces heat loss."},
    {t:"hypothalamus", d:"the brain region that monitors and controls body temperature", x:"The hypothalamus acts as the body's thermostat."}
  ],
  facts:[
    {q:"State five general characteristics of birds.", a:"Body covered with feathers; forelimbs modified into wings; a horny beak with no teeth; hard-shelled eggs; endothermic with a four-chambered heart; and hollow pneumatic bones."},
    {q:"State five adaptations of birds to flight.", a:"Hollow lightweight bones; feathers giving a large light aerofoil surface; powerful flight muscles on a keeled sternum; air sacs providing efficient one-way ventilation; a streamlined body; and reduction of weight by the loss of teeth, bladder and one ovary."},
    {q:"Name three types of feather and the function of each.", a:"Contour feathers streamline the body; flight feathers on wings and tail provide the surface for lift and steering; down feathers trap air next to the skin for insulation."},
    {q:"State five general characteristics of mammals.", a:"Body covered with hair; mammary glands producing milk; external ears (pinnae); a muscular diaphragm; heterodont dentition; endothermic with a four-chambered heart; and most bear live young."},
    {q:"Name the three groups of mammals with an example and mode of reproduction for each.", a:"Monotremes lay eggs — duck-billed platypus; marsupials give birth to immature young completing development in a pouch — kangaroo; placentals nourish the young in the uterus through a placenta — man and the dog."},
    {q:"Describe the structure of a mammalian molar tooth.", a:"A broad ridged crown of hard enamel over dentine, with a pulp cavity of nerves and blood vessels, fixed in the jaw by two or three roots covered with cement."},
    {q:"Write the dental formula of man and of a rabbit.", a:"Man: 2123/2123, giving 32 teeth. Rabbit: 2033/1023, a herbivore with no canines and a diastema."},
    {q:"How does a mammal lose heat when its body temperature rises?", a:"The hypothalamus triggers vasodilation of skin arterioles bringing blood to the surface, increased sweating whose evaporation cools the skin, lowering of the hair, and reduced metabolic rate and activity."},
    {q:"How does a mammal conserve or generate heat when cold?", a:"Vasoconstriction reduces blood flow to the skin, hair is raised to trap an insulating layer of air, shivering generates heat by muscle contraction, and the metabolic rate is raised."},
    {q:"State three differences between birds and mammals.", a:"Birds have feathers, mammals have hair; birds lay hard-shelled eggs while most mammals bear live young; birds have a toothless beak while mammals have heterodont teeth; and only mammals suckle their young."}
  ],
  tf:[
    {s:"Birds and mammals are both endothermic.", a:"true", why:"Both generate and regulate their own body heat internally."},
    {s:"All birds can fly.", a:"false", why:"Ostriches, penguins and kiwis are flightless, though they retain feathers and other bird features."},
    {s:"The keel of the sternum anchors the flight muscles.", a:"true", why:"Its large surface allows the attachment of the powerful muscles that beat the wings."},
    {s:"The kangaroo is a placental mammal.", a:"false", why:"It is a marsupial; its young complete development in a pouch."},
    {s:"Shivering generates heat by muscle contraction.", a:"true", why:"Rapid involuntary contractions release heat as a by-product of respiration in the muscles."},
    {s:"Vasodilation of skin vessels helps conserve body heat.", a:"false", why:"Vasodilation increases heat loss; vasoconstriction conserves heat."},
    {s:"Herbivores such as the rabbit have a diastema.", a:"true", why:"The gap where canines are absent allows the tongue to manipulate plant material."}
  ],
  classify:{ title:"Sort these animals and features", groups:[
    {name:"Adaptations to flight", items:["hollow bones","keeled sternum","air sacs","flight feathers"]},
    {name:"Monotremes", items:["duck-billed platypus","spiny anteater"]},
    {name:"Marsupials", items:["kangaroo","opossum"]},
    {name:"Placentals", items:["man","dog","bat","whale"]},
    {name:"Heat loss mechanisms", items:["sweating","vasodilation","lowering hair","panting"]}
  ]},
  diagram:{ title:"A typical mammalian molar tooth", caption:"State the function of each labelled part.", parts:[
    {p:"Enamel", f:"Hardest tissue in the body, forming the grinding surface and resisting wear"},
    {p:"Dentine", f:"Bone-like layer beneath the enamel forming the bulk of the tooth"},
    {p:"Pulp cavity", f:"Contains nerves and blood vessels nourishing the tooth"},
    {p:"Cement", f:"Fixes the roots firmly into the jaw socket"},
    {p:"Root", f:"Two or three projections anchoring the molar in the jaw"},
    {p:"Cusps", f:"Ridges on the crown that grind and crush food"},
    {p:"Gum", f:"Soft tissue sealing and protecting the tooth at the neck"}
  ]},
  experiment:{
    title:"Examining the structure of feathers",
    aim:"To compare the structure of contour, flight and down feathers and relate them to function.",
    materials:["A flight feather, a contour feather and a down feather","Hand lens or microscope","Slides","Scissors","Water in a dish","Drawing paper"],
    steps:[
      "Examine each feather with the naked eye and record its size, shape and stiffness.",
      "Use a hand lens to examine the shaft, vane and barbs of the flight feather.",
      "Separate two barbs gently and then stroke them back together; observe how they re-join.",
      "Examine a barb under the microscope and find the barbules and their hooks.",
      "Place a drop of water on each feather and record whether it runs off or soaks in.",
      "Make labelled drawings of all three feathers and tabulate their differences."
    ],
    expect:"The flight feather is large and stiff with an asymmetrical vane; its barbs bear barbules with tiny hooks that zip together to form a continuous windproof surface which can be re-joined after separation. The contour feather is smaller and symmetrical for streamlining. The down feather has no hooks, so the barbs stay loose and fluffy, trapping air for insulation. Water runs off the flight and contour feathers because of preen oil, but soaks into the down.",
    why:"Feather structure follows function. The hooked barbules of flight and contour feathers zip the vane into a continuous windproof surface needed for lift, while down feathers lack hooks so they stay fluffy and trap air for insulation."
  },
  apply:[
    {q:"Explain why birds have no urinary bladder and only one functional ovary.", a:"Both are weight-saving adaptations for flight: urine is excreted as a semi-solid paste rather than stored, and carrying a single ovary avoids the mass of a second reproductive organ."},
    {q:"Why do desert mammals such as the camel sweat less than humans?", a:"Water is scarce, so they conserve it by tolerating a wider fluctuation in body temperature during the day and losing heat by other means, releasing it at night rather than by evaporation."},
    {q:"A dog pants rapidly after running. Explain the physiology.", a:"Dogs have few sweat glands, so they lose heat by evaporating water from the moist surfaces of the tongue and respiratory tract; rapid shallow panting increases airflow over these surfaces."},
    {q:"Predict the diet of a mammal with a dental formula showing large canines and sharp cheek teeth.", a:"It is a carnivore: the long canines stab and hold prey, and the blade-like carnassial cheek teeth shear flesh and crack bone."},
    {q:"Why is a newborn baby more vulnerable to cold than an adult?", a:"It has a large surface area relative to its volume, little insulating fat or hair, and an immature hypothalamic control system, so it loses heat rapidly and regulates it poorly."}
  ],
  activities:[
    "Describe the control mechanisms of body temperature in mammals",
    "Assignment: describe the features of each class of mammals",
    "Draw and label a typical mammalian molar tooth",
    "Write the dental formulae of rabbit, dog and man",
    "LAB: dissect a bird to observe the internal and external features",
    "LAB: examine and compare types of feathers"
  ],
  materials:[
    "Primary text: Baffour Asante-Owusu et al., Senior High Biology (Longman, 2009)",
    "Bird specimen and assorted feathers",
    "Dissecting kits and hand lenses",
    "Models and charts of teeth and skeletons",
    "Charts of mammalian classification"
  ],
  assessment:["Laboratory report","Labelled drawings","Assignment","Class discussion","Written test"]
},
{
  grade:12, period:"II", sem:"One", icon:"🦴",
  title:"Skeletal, Muscular and Reproductive Systems",
  subtitle:"Bones, joints and muscles; adolescence, gametogenesis and reproductive health",
  outcomes:[
    "Summarise the importance of bones and muscles in the body for movement and coordination",
    "Consider appropriate preventive measures against STIs affecting the reproductive system",
    "Discuss the emotions accompanying adolescent sexual development, facilitating abstinence and the prevention of STIs"
  ],
  objectives:[
    "State the functions of the human skeletal system and list its regions",
    "Name and describe the locations of the various types of joints",
    "List and describe the functions of the three types of muscle tissue",
    "Describe the effects of STIs and substance abuse on the muscular system",
    "Describe the body changes during adolescent development",
    "Explain the functions of the male and female reproductive organs",
    "Describe gametogenesis — oogenesis and spermatogenesis"
  ],
  note:"The human skeleton has about <b>206 bones</b> in two regions: the <b>axial skeleton</b> (skull, vertebral column, ribs and sternum) and the <b>appendicular skeleton</b> (limbs and girdles). Muscle occurs in three types — <b>skeletal (voluntary, striated), smooth (involuntary)</b> and <b>cardiac</b>. Skeletal muscles work in <b>antagonistic pairs</b>.",
  focus:[
    "Divisions of the human body and the body cavities",
    "Skeletal system: composition, axial and appendicular regions, functions",
    "Types of joints, their functions and locations",
    "Muscular system: three types of muscle and their functions",
    "Adolescent development and its emotional aspects",
    "Male and female reproductive organs and their functions",
    "Gametogenesis: oogenesis and spermatogenesis",
    "Effects of STIs and substance abuse on the systems"
  ],
  terms:[
    {t:"axial skeleton", d:"the skull, vertebral column, ribs and sternum", x:"The axial skeleton protects the vital organs."},
    {t:"appendicular skeleton", d:"the limbs and their girdles", x:"The appendicular skeleton allows locomotion."},
    {t:"vertebral column", d:"the chain of vertebrae forming the backbone", x:"The vertebral column protects the spinal cord."},
    {t:"cartilage", d:"tough flexible tissue cushioning joints", x:"Cartilage covers the ends of bones."},
    {t:"ligament", d:"tissue joining bone to bone at a joint", x:"Ligaments stabilise the knee."},
    {t:"tendon", d:"tissue joining muscle to bone", x:"The Achilles tendon joins calf to heel."},
    {t:"ball and socket joint", d:"a joint allowing movement in all directions", x:"The hip is a ball and socket joint."},
    {t:"hinge joint", d:"a joint allowing movement in one plane", x:"The elbow is a hinge joint."},
    {t:"pivot joint", d:"a joint allowing rotation", x:"The atlas and axis form a pivot joint."},
    {t:"synovial fluid", d:"lubricating fluid within a movable joint", x:"Synovial fluid reduces friction."},
    {t:"skeletal muscle", d:"voluntary striated muscle attached to bone", x:"Skeletal muscle moves the limbs."},
    {t:"smooth muscle", d:"involuntary muscle in the walls of organs", x:"Smooth muscle moves food along the gut."},
    {t:"cardiac muscle", d:"the involuntary muscle of the heart", x:"Cardiac muscle contracts rhythmically without tiring."},
    {t:"antagonistic pair", d:"two muscles producing opposite movements at a joint", x:"Biceps and triceps are an antagonistic pair."},
    {t:"adolescence", d:"the period of change from child to adult", x:"Adolescence brings physical and emotional change."},
    {t:"puberty", d:"the stage at which the reproductive organs mature", x:"Puberty is triggered by hormones."},
    {t:"testis", d:"the male organ producing sperm and testosterone", x:"The testes lie in the scrotum."},
    {t:"ovary", d:"the female organ producing ova and oestrogen", x:"The ovary releases one ovum each cycle."},
    {t:"oviduct", d:"the tube carrying the ovum to the uterus", x:"Fertilisation occurs in the oviduct."},
    {t:"uterus", d:"the organ in which the embryo develops", x:"The uterus has a thick muscular wall."},
    {t:"spermatogenesis", d:"the formation of sperm by meiosis in the testes", x:"Spermatogenesis begins at puberty."},
    {t:"oogenesis", d:"the formation of ova by meiosis in the ovaries", x:"Oogenesis produces one functional ovum."},
    {t:"menstrual cycle", d:"the monthly cycle preparing the uterus for pregnancy", x:"The menstrual cycle averages 28 days."}
  ],
  facts:[
    {q:"State five functions of the human skeleton.", a:"Support and shape; protection of organs such as the brain, heart and lungs; movement through attachment of muscles; production of blood cells in the marrow; and storage of minerals such as calcium and phosphorus."},
    {q:"Name the bones of the axial and appendicular skeleton.", a:"Axial: skull, vertebral column, ribs and sternum. Appendicular: bones of the arms and legs together with the pectoral and pelvic girdles."},
    {q:"Name four types of joint with a location and the movement each allows.", a:"Ball and socket at the hip and shoulder allowing movement in all directions; hinge at the elbow and knee allowing movement in one plane; pivot between atlas and axis allowing rotation; and immovable (fixed) joints in the skull allowing no movement."},
    {q:"State three differences between skeletal, smooth and cardiac muscle.", a:"Skeletal muscle is striated, voluntary and attached to bone; smooth muscle is unstriated, involuntary and found in organ walls; cardiac muscle is striated, involuntary and found only in the heart, contracting rhythmically without fatigue."},
    {q:"Explain how an antagonistic pair produces movement at the elbow.", a:"To bend the elbow the biceps contracts while the triceps relaxes; to straighten it the triceps contracts while the biceps relaxes, since muscles can only pull, not push."},
    {q:"Name four physical changes at puberty in boys and in girls.", a:"Boys: voice deepens, facial and body hair grows, shoulders broaden and sperm production begins. Girls: breasts develop, hips widen, body hair grows and menstruation begins."},
    {q:"Name the main male reproductive organs and one function of each.", a:"Testes produce sperm and testosterone; epididymis stores maturing sperm; sperm duct conveys sperm; seminal vesicle and prostate add nourishing fluid; the penis delivers semen."},
    {q:"Name the main female reproductive organs and one function of each.", a:"Ovaries produce ova and oestrogen; oviducts convey the ovum and are the site of fertilisation; the uterus houses the developing foetus; the cervix is the neck of the uterus; the vagina receives the penis and is the birth canal."},
    {q:"State three differences between spermatogenesis and oogenesis.", a:"Spermatogenesis produces four functional sperm per parent cell, is continuous from puberty and produces small motile gametes; oogenesis produces one functional ovum plus polar bodies, is cyclical and produces a large non-motile gamete."},
    {q:"State four effects of substance abuse on the muscular and skeletal systems.", a:"Alcohol and drugs weaken muscle tissue and cause wasting; they impair coordination and increase accidents and fractures; they reduce calcium absorption weakening bones; and they slow healing of injury."}
  ],
  tf:[
    {s:"The skull belongs to the axial skeleton.", a:"true", why:"The axial skeleton comprises the skull, vertebral column, ribs and sternum."},
    {s:"Ligaments join muscle to bone.", a:"false", why:"Ligaments join bone to bone; tendons join muscle to bone."},
    {s:"Cardiac muscle is found only in the heart.", a:"true", why:"It is specialised to contract rhythmically and continuously without tiring."},
    {s:"Muscles can both push and pull bones.", a:"false", why:"Muscles can only pull by contracting, which is why they work in antagonistic pairs."},
    {s:"Fertilisation normally occurs in the oviduct.", a:"true", why:"The sperm meets the ovum in the fallopian tube; the embryo then implants in the uterus."},
    {s:"Oogenesis produces four functional ova from each parent cell.", a:"false", why:"It produces one functional ovum and polar bodies that degenerate."},
    {s:"Synovial fluid reduces friction in a movable joint.", a:"true", why:"It lubricates the joint and nourishes the cartilage."}
  ],
  classify:{ title:"Sort these structures", groups:[
    {name:"Axial skeleton", items:["skull","vertebral column","ribs","sternum"]},
    {name:"Appendicular skeleton", items:["humerus","femur","pelvic girdle","scapula"]},
    {name:"Types of joint", items:["ball and socket","hinge","pivot","immovable"]},
    {name:"Male reproductive organs", items:["testis","epididymis","sperm duct","prostate"]},
    {name:"Female reproductive organs", items:["ovary","oviduct","uterus","cervix"]}
  ]},
  diagram:{ title:"The female reproductive system", caption:"State the function of each labelled organ.", parts:[
    {p:"Ovary", f:"Produces ova and the hormones oestrogen and progesterone"},
    {p:"Oviduct (fallopian tube)", f:"Carries the ovum toward the uterus and is the site of fertilisation"},
    {p:"Uterus", f:"Muscular organ in which the embryo implants and develops"},
    {p:"Endometrium", f:"Lining of the uterus that thickens to receive the embryo and is shed at menstruation"},
    {p:"Cervix", f:"Narrow neck of the uterus opening into the vagina"},
    {p:"Vagina", f:"Receives the penis during intercourse and forms the birth canal"}
  ]},
  experiment:{
    title:"Investigating the effect of exercise on muscle fatigue",
    aim:"To measure how quickly a muscle fatigues with repeated contraction.",
    materials:["Spring clothes peg or hand grip","Stop clock","Recording table","Chair and desk"],
    steps:[
      "Rest the forearm on the desk and hold the peg between thumb and forefinger.",
      "On the signal, squeeze the peg fully open and closed as many times as possible in 30 seconds while a partner counts.",
      "Record the number of squeezes for the first 30-second interval.",
      "Rest for exactly 15 seconds, then repeat for a second, third and fourth interval.",
      "Tabulate the counts and plot a graph of squeezes against interval number.",
      "Repeat with the other hand and compare, then repeat after a full two-minute rest."
    ],
    expect:"The number of squeezes falls with each successive interval as the muscle fatigues. This occurs because the muscle uses oxygen faster than the blood can supply it, so anaerobic respiration produces lactic acid which accumulates and reduces the ability of the fibres to contract. After a full rest period the count recovers as the oxygen debt is repaid and the lactic acid is removed.",
    why:"Repeated contraction uses oxygen faster than the blood can deliver it, so the muscle respires anaerobically and lactic acid accumulates, reducing the force of contraction. Rest allows the oxygen debt to be repaid and performance to recover."
  },
  apply:[
    {q:"A footballer tears the ligament of his knee. Explain why the joint becomes unstable.", a:"Ligaments join bone to bone and hold the joint in correct alignment; when torn they no longer restrain the bones, so the joint moves abnormally and gives way under load."},
    {q:"Why does a person feel stiff and sore the day after unaccustomed heavy work?", a:"Unfamiliar exertion causes microscopic damage to muscle fibres and inflammation during repair, which produces the delayed soreness and stiffness."},
    {q:"Explain why untreated gonorrhoea can cause infertility in women.", a:"The infection ascends to the oviducts causing inflammation and scarring, which blocks the tubes so the ovum and sperm cannot meet."},
    {q:"An adolescent feels confused by rapid physical and emotional change. What biological explanation would you give?", a:"Hormones released at puberty drive rapid growth and the development of secondary sexual characteristics, and also affect mood and emotion; the changes are normal and settle as development completes."},
    {q:"Why is calcium in the diet especially important during adolescence?", a:"Bone is growing and mineralising rapidly at this stage, and the peak bone mass built now determines skeletal strength and the risk of fracture in later life."}
  ],
  activities:[
    "Discuss the cells, tissues and organs of the skeletal and muscular systems",
    "Draw and label the skeletal and muscular systems",
    "LAB: examine a long bone in section and identify its parts",
    "Draw the male and female reproductive organs and label them",
    "Discuss the body changes during adolescence and the emotions accompanying them",
    "Discuss the prevention of STIs and teenage pregnancy"
  ],
  materials:[
    "Primary text: Baffour Asante-Owusu et al., Senior High Biology (Longman, 2009)",
    "Model skeleton and charts of the muscular system",
    "Long bones for sectioning",
    "Charts of the reproductive systems",
    "Health and life-skills literature"
  ],
  assessment:["Laboratory report","Labelled drawings","Class discussion","Group presentation","Written test"]
},
{
  grade:12, period:"III", sem:"One", icon:"🫀",
  title:"Digestive, Circulatory and Lymphatic Systems",
  subtitle:"Digestion and enzymes, the heart and blood, blood groups and the lymphatic defence system",
  outcomes:[
    "Discuss the role of the digestive system and outline the nutritional benefits of a balanced diet of locally available food",
    "Appreciate the roles of the circulatory and lymphatic systems in transporting nutrients and defending the body"
  ],
  objectives:[
    "Define digestion, state the processes and list the organs involved",
    "State the functions of enzymes in the process of digestion",
    "Explain nutrition, the classes of food and their specific importance",
    "List the components of blood, describe their functions and the process of clotting",
    "Discuss the heart, the blood and the blood vessels",
    "Discuss the lymphatic system and its functions",
    "Explain blood groups and the Rh factor"
  ],
  note:"<b>Digestion</b> breaks large insoluble food molecules into small soluble ones for absorption. <b>Enzymes</b> are biological catalysts, each specific to a substrate: <b>amylase</b> acts on starch, <b>protease</b> on protein and <b>lipase</b> on fats. Blood circulates in a <b>double circulation</b> — <b>pulmonary</b> to the lungs and <b>systemic</b> to the body — driven by the four-chambered heart.",
  focus:[
    "Digestion: definition, processes and the alimentary canal",
    "Accessory organs: salivary glands, pancreas, liver, teeth and tongue",
    "Digestive enzymes and their action; absorption through the villi",
    "Classes of food and their uses; effects of malnutrition",
    "Circulatory system: heart, blood vessels, blood cells and plasma",
    "Pulmonary and systemic circulation; blood clotting",
    "Blood groups and the Rh factor",
    "The lymphatic system and its functions"
  ],
  terms:[
    {t:"digestion", d:"the breakdown of food into soluble absorbable molecules", x:"Digestion begins in the mouth."},
    {t:"enzyme", d:"a protein catalyst speeding up a biological reaction", x:"Each enzyme is specific to its substrate."},
    {t:"amylase", d:"the enzyme that digests starch to maltose", x:"Salivary amylase acts in the mouth."},
    {t:"protease", d:"an enzyme that digests protein to amino acids", x:"Pepsin is a protease."},
    {t:"lipase", d:"the enzyme that digests fats to fatty acids and glycerol", x:"Pancreatic lipase acts in the duodenum."},
    {t:"bile", d:"a liver secretion that emulsifies fats", x:"Bile is stored in the gall bladder."},
    {t:"peristalsis", d:"waves of muscular contraction moving food along the gut", x:"Peristalsis pushes food down the oesophagus."},
    {t:"villus", d:"a finger-like projection of the small intestine wall", x:"Villi greatly increase the absorbing surface."},
    {t:"absorption", d:"the passage of digested food into the blood", x:"Absorption occurs mainly in the ileum."},
    {t:"assimilation", d:"the use of absorbed food by the body cells", x:"Assimilation builds new tissue."},
    {t:"egestion", d:"the removal of undigested waste", x:"Egestion passes faeces from the rectum."},
    {t:"plasma", d:"the liquid part of the blood", x:"Plasma transports dissolved substances."},
    {t:"erythrocyte", d:"a red blood cell carrying oxygen", x:"Erythrocytes contain haemoglobin."},
    {t:"leucocyte", d:"a white blood cell defending against infection", x:"Leucocytes engulf bacteria."},
    {t:"platelet", d:"a cell fragment involved in blood clotting", x:"Platelets seal a wound."},
    {t:"haemoglobin", d:"the red pigment that carries oxygen", x:"Haemoglobin binds oxygen in the lungs."},
    {t:"artery", d:"a vessel carrying blood away from the heart", x:"Arteries have thick elastic walls."},
    {t:"vein", d:"a vessel carrying blood to the heart", x:"Veins contain valves."},
    {t:"capillary", d:"the smallest vessel where exchange occurs", x:"Capillary walls are one cell thick."},
    {t:"pulmonary circulation", d:"circulation between heart and lungs", x:"Pulmonary circulation oxygenates blood."},
    {t:"systemic circulation", d:"circulation between heart and the rest of the body", x:"Systemic circulation supplies the tissues."},
    {t:"lymph", d:"tissue fluid that has drained into lymph vessels", x:"Lymph returns fluid to the blood."},
    {t:"lymph node", d:"a swelling that filters lymph and makes lymphocytes", x:"Lymph nodes trap bacteria."},
    {t:"Rh factor", d:"an antigen on red cells making blood positive or negative", x:"The Rh factor matters in transfusion and pregnancy."}
  ],
  facts:[
    {q:"Define digestion and name its five processes.", a:"Digestion is the breakdown of large insoluble food molecules into small soluble ones; the processes of holozoic nutrition are ingestion, digestion, absorption, assimilation and egestion."},
    {q:"Name the parts of the alimentary canal in order.", a:"Mouth, oesophagus, stomach, duodenum, ileum, colon, rectum and anus."},
    {q:"Name three digestive enzymes, where each acts and what it produces.", a:"Salivary amylase in the mouth converts starch to maltose; pepsin in the stomach converts protein to peptides; pancreatic lipase in the duodenum converts fats to fatty acids and glycerol."},
    {q:"What is the function of bile and where is it made and stored?", a:"Bile is made in the liver and stored in the gall bladder; it emulsifies fats into small droplets, increasing the surface area for lipase, and neutralises the acid from the stomach."},
    {q:"State three adaptations of the ileum for absorption.", a:"It is very long; its lining is folded into millions of villi and microvilli giving an enormous surface area; the villi have thin walls one cell thick and a rich blood supply and lacteal to carry absorbed food away."},
    {q:"Name the four components of blood and one function of each.", a:"Plasma transports dissolved substances and heat; red cells carry oxygen using haemoglobin; white cells defend against infection; platelets bring about clotting."},
    {q:"Outline the process of blood clotting.", a:"Damaged tissue and platelets release thromboplastin, which with calcium converts prothrombin to thrombin; thrombin converts soluble fibrinogen into insoluble fibrin threads that mesh with cells to form a clot."},
    {q:"Name the four chambers of the heart and the vessel leaving each ventricle.", a:"Right atrium and right ventricle, from which the pulmonary artery leaves to the lungs; left atrium and left ventricle, from which the aorta leaves to the body."},
    {q:"Distinguish pulmonary from systemic circulation.", a:"Pulmonary circulation carries deoxygenated blood from the right ventricle to the lungs and returns oxygenated blood to the left atrium; systemic circulation carries oxygenated blood from the left ventricle to the whole body and returns deoxygenated blood to the right atrium."},
    {q:"State three differences between arteries and veins.", a:"Arteries carry blood away from the heart, have thick muscular elastic walls, carry blood at high pressure and have no valves; veins carry blood to the heart, have thin walls, low pressure and valves preventing backflow."},
    {q:"Name three functions of the lymphatic system.", a:"It returns excess tissue fluid to the bloodstream; it absorbs digested fats from the lacteals of the villi; and it produces lymphocytes and filters bacteria at the lymph nodes as part of the body's defence."},
    {q:"Why must blood be matched for group and Rh factor before transfusion?", a:"Incompatible antigens and antibodies cause the red cells to clump (agglutinate) and block vessels, which can be fatal."}
  ],
  tf:[
    {s:"Digestion of starch begins in the mouth.", a:"true", why:"Salivary amylase converts starch to maltose as food is chewed."},
    {s:"Bile is an enzyme that digests fats.", a:"false", why:"Bile is not an enzyme; it emulsifies fats so that lipase can act on them more effectively."},
    {s:"Red blood cells contain a nucleus in adult humans.", a:"false", why:"Mature mammalian red cells lose the nucleus, making more room for haemoglobin."},
    {s:"Veins contain valves to prevent backflow.", a:"true", why:"Blood in veins is at low pressure and valves keep it moving toward the heart."},
    {s:"The left ventricle has a thicker wall than the right.", a:"true", why:"It pumps blood at high pressure round the whole body, while the right pumps only to the lungs."},
    {s:"Lymph nodes produce lymphocytes and filter bacteria.", a:"true", why:"This is a key part of the body's defence against infection."},
    {s:"Group AB is the universal donor.", a:"false", why:"Group O is the universal donor; AB is the universal recipient."}
  ],
  classify:{ title:"Sort these structures and substances", groups:[
    {name:"Alimentary canal", items:["mouth","oesophagus","stomach","ileum","colon"]},
    {name:"Accessory organs", items:["liver","pancreas","salivary glands","gall bladder"]},
    {name:"Blood components", items:["plasma","red cells","white cells","platelets"]},
    {name:"Blood vessels", items:["artery","vein","capillary"]},
    {name:"Enzymes", items:["amylase","pepsin","lipase","trypsin"]}
  ]},
  diagram:{ title:"Vertical section of the human heart", caption:"State the function of each labelled structure.", parts:[
    {p:"Right atrium", f:"Receives deoxygenated blood from the body via the venae cavae"},
    {p:"Right ventricle", f:"Pumps deoxygenated blood to the lungs through the pulmonary artery"},
    {p:"Left atrium", f:"Receives oxygenated blood from the lungs via the pulmonary veins"},
    {p:"Left ventricle", f:"Pumps oxygenated blood to the whole body through the aorta; has the thickest wall"},
    {p:"Bicuspid and tricuspid valves", f:"Prevent backflow of blood from the ventricles into the atria"},
    {p:"Semilunar valves", f:"Prevent backflow from the arteries into the ventricles"},
    {p:"Septum", f:"Muscular wall separating oxygenated from deoxygenated blood"},
    {p:"Coronary artery", f:"Supplies the heart muscle itself with oxygenated blood"}
  ]},
  experiment:{
    title:"The action of salivary amylase on starch",
    aim:"To show that salivary amylase digests starch, and that boiling destroys the enzyme.",
    materials:["Fresh saliva diluted with distilled water","1% starch solution","Iodine solution","Benedict's solution","Test tubes and rack","Water bath at 37 °C","Boiling water bath","Spotting tile","Droppers"],
    steps:[
      "Label three tubes: A starch + saliva, B starch + boiled saliva, C starch + water.",
      "Boil a portion of the saliva for two minutes and allow it to cool for tube B.",
      "Place 5 cm³ of starch solution in each tube and add 1 cm³ of the appropriate liquid.",
      "Stand all three tubes in the water bath at 37 °C.",
      "Every two minutes remove a drop from each tube onto a spotting tile and test with iodine solution.",
      "After twenty minutes test the contents of each tube with Benedict's solution and heat."
    ],
    expect:"In tube A the iodine test gradually stops giving blue-black, showing the starch has been digested, and Benedict's test then gives a brick-red precipitate, showing sugar has been produced. Tubes B and C remain blue-black with iodine and negative with Benedict's, because boiling denatured the enzyme in B and no enzyme was present in C. This shows amylase digests starch to sugar and that it is a protein destroyed by heat.",
    why:"Amylase is a biological catalyst that digests starch to maltose. Because enzymes are proteins, boiling denatures the active site permanently, which is why the boiled sample shows no digestion — this confirms the reaction is enzyme-driven and not merely chemical."
  },
  apply:[
    {q:"Explain why a person whose gall bladder has been removed is advised to avoid fatty meals.", a:"Bile is no longer stored and released in quantity when fat arrives, so emulsification is poor, lipase works slowly, and fat is incompletely digested causing discomfort."},
    {q:"Why does a person with severe anaemia feel breathless on mild exertion?", a:"Too little haemoglobin means the blood carries insufficient oxygen to the muscles, so breathing rate rises in an attempt to compensate."},
    {q:"A woman who is Rh negative carries an Rh positive baby. Explain the possible danger.", a:"If fetal blood enters her circulation she may form anti-Rh antibodies; in a later Rh positive pregnancy these can cross the placenta and destroy the baby's red cells."},
    {q:"Explain why a blocked coronary artery damages the heart.", a:"The coronary arteries supply the heart muscle itself; a blockage starves that region of oxygen so the muscle dies, causing a heart attack."},
    {q:"Why do the legs swell when lymph vessels are blocked by filarial worms?", a:"Tissue fluid can no longer drain back into the circulation through the lymphatics, so it accumulates in the tissues causing the gross swelling of elephantiasis."}
  ],
  activities:[
    "State the functions of digestive enzymes and tabulate them",
    "Describe absorption through the villi and the hepatic portal vein",
    "List and describe the classes of food and their importance",
    "Discuss the effects of malnutrition on growth and the immune system",
    "LAB: investigate the action of salivary amylase on starch",
    "LAB: examine prepared blood slides and draw the blood cells",
    "Draw and label the heart and trace the double circulation"
  ],
  materials:[
    "Primary text: Baffour Asante-Owusu et al., Senior High Biology (Longman, 2009)",
    "Starch solution, iodine, Benedict's solution",
    "Test tubes, water baths, spotting tiles",
    "Microscopes and prepared blood slides",
    "Charts and models of the heart and digestive system"
  ],
  assessment:["Laboratory report","Labelled drawings","Class discussion","Assignment","Written test"]
},
{
  grade:12, period:"IV", sem:"Two", icon:"🫁",
  title:"Excretory and Respiratory Systems; Cellular Respiration",
  subtitle:"Kidneys and homeostasis, breathing, and the release of energy in glycolysis and the Krebs cycle",
  outcomes:[
    "Take appropriate steps to prevent damage to the excretory and respiratory organs",
    "Demonstrate understanding of the excretory and respiratory systems in relation to substance abuse",
    "Realise that the energy released during respiration is key to the survival of all living organisms"
  ],
  objectives:[
    "Describe the excretory system and state the functions of the associated organs",
    "List the tissues and organs involved in the mechanism of breathing",
    "Explain homeostasis in relation to the excretory system",
    "Explain the effects of substance abuse and STIs on the excretory and respiratory systems",
    "State the characteristics of the types of respiration",
    "Distinguish between aerobic and anaerobic respiration",
    "Discuss cellular respiration citing glycolysis and the Krebs cycle",
    "Interpret the balanced chemical equation for respiration"
  ],
  note:"<b>Excretion</b> removes the waste products of metabolism. The kidney's functional unit is the <b>nephron</b>, which works by <b>ultrafiltration</b> at the glomerulus and <b>selective reabsorption</b> in the tubule. <b>Aerobic respiration</b>: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy (about 38 ATP). <b>Glycolysis</b> occurs in the cytoplasm; the <b>Krebs cycle</b> in the mitochondrion.",
  focus:[
    "Excretory organs: kidneys, ureter, bladder, urethra, skin, liver and lungs",
    "Structure of the nephron; ultrafiltration and selective reabsorption",
    "Homeostasis and osmoregulation",
    "Respiratory organs and the mechanism of breathing",
    "External and internal respiration; inspiration and expiration",
    "Aerobic and anaerobic respiration compared",
    "Cellular respiration: glycolysis and the Krebs cycle",
    "Effects of substance abuse on both systems"
  ],
  terms:[
    {t:"excretion", d:"the removal of metabolic waste from the body", x:"Excretion removes urea and carbon dioxide."},
    {t:"kidney", d:"the organ that filters blood and forms urine", x:"The kidney regulates water and salt balance."},
    {t:"nephron", d:"the functional filtering unit of the kidney", x:"Each kidney has about a million nephrons."},
    {t:"glomerulus", d:"a knot of capillaries where filtration occurs", x:"Blood is filtered at the glomerulus."},
    {t:"Bowman's capsule", d:"the cup that collects the filtrate from the glomerulus", x:"Bowman's capsule surrounds the glomerulus."},
    {t:"ultrafiltration", d:"filtration under pressure separating small molecules from blood", x:"Ultrafiltration forms the glomerular filtrate."},
    {t:"selective reabsorption", d:"the taking back of useful substances from the filtrate", x:"Glucose is returned by selective reabsorption."},
    {t:"urea", d:"the nitrogenous waste formed in the liver from excess amino acids", x:"Urea is excreted in urine."},
    {t:"homeostasis", d:"maintenance of a constant internal environment", x:"Homeostasis keeps blood glucose steady."},
    {t:"osmoregulation", d:"control of the water and salt balance of the body", x:"The kidney carries out osmoregulation."},
    {t:"alveolus", d:"a tiny air sac in the lung where gas exchange occurs", x:"Alveoli give a huge surface area."},
    {t:"bronchus", d:"one of the two main air tubes entering the lungs", x:"The bronchus branches into bronchioles."},
    {t:"diaphragm", d:"the sheet of muscle below the lungs used in breathing", x:"The diaphragm flattens during inspiration."},
    {t:"inspiration", d:"breathing in", x:"During inspiration the rib cage rises."},
    {t:"expiration", d:"breathing out", x:"During expiration the diaphragm domes upward."},
    {t:"external respiration", d:"gas exchange between the lungs and the blood", x:"External respiration loads oxygen into blood."},
    {t:"internal respiration", d:"the release of energy from food inside cells", x:"Internal respiration occurs in mitochondria."},
    {t:"aerobic respiration", d:"the release of energy using oxygen", x:"Aerobic respiration yields much ATP."},
    {t:"anaerobic respiration", d:"the release of energy without oxygen", x:"Anaerobic respiration produces lactic acid in muscle."},
    {t:"glycolysis", d:"the splitting of glucose to pyruvate in the cytoplasm", x:"Glycolysis needs no oxygen."},
    {t:"Krebs cycle", d:"the cycle of reactions in the mitochondrion releasing carbon dioxide and hydrogen", x:"The Krebs cycle follows glycolysis."},
    {t:"ATP", d:"adenosine triphosphate, the energy currency of the cell", x:"ATP powers cellular work."},
    {t:"oxygen debt", d:"the extra oxygen needed after exercise to remove lactic acid", x:"Panting repays the oxygen debt."}
  ],
  facts:[
    {q:"Name five excretory organs and the waste each removes.", a:"Kidneys remove urea, excess water and salts; lungs remove carbon dioxide and water vapour; skin removes water, salts and a little urea in sweat; the liver removes bile pigments; the large intestine removes bile pigments and some salts."},
    {q:"Describe ultrafiltration in the nephron.", a:"Blood enters the glomerulus under high pressure from the narrower efferent vessel; water, glucose, salts and urea are forced through into Bowman's capsule, while blood cells and large plasma proteins are retained."},
    {q:"What is selectively reabsorbed in the kidney tubule?", a:"All the glucose, most of the water, and the amounts of mineral salts and amino acids the body needs are reabsorbed into the blood; urea and excess water and salts remain as urine."},
    {q:"Define homeostasis and give two examples in the human body.", a:"The maintenance of a constant internal environment; examples include regulation of blood glucose by insulin and glucagon, control of body temperature, and osmoregulation of water and salt by the kidney."},
    {q:"Name the parts of the respiratory tract in order.", a:"Nose, pharynx, larynx, trachea, bronchi, bronchioles and alveoli."},
    {q:"Describe the mechanism of inspiration.", a:"The external intercostal muscles contract raising the ribs upward and outward, and the diaphragm contracts and flattens; the volume of the thorax increases, pressure inside falls below atmospheric, and air rushes in."},
    {q:"State four adaptations of the alveolus for gas exchange.", a:"A very large total surface area; walls only one cell thick giving a short diffusion path; a rich capillary network maintaining the concentration gradient; and a moist lining so gases dissolve."},
    {q:"Write the balanced equation for aerobic respiration.", a:"C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy (about 38 molecules of ATP)."},
    {q:"State four differences between aerobic and anaerobic respiration.", a:"Aerobic uses oxygen, anaerobic does not; aerobic completely oxidises glucose to carbon dioxide and water, anaerobic gives lactic acid in muscle or ethanol and carbon dioxide in yeast; aerobic yields about 38 ATP, anaerobic only 2; aerobic occurs in the mitochondria, anaerobic in the cytoplasm."},
    {q:"Where do glycolysis and the Krebs cycle occur, and what does each produce?", a:"Glycolysis occurs in the cytoplasm, splitting glucose into two pyruvate molecules with a net gain of 2 ATP; the Krebs cycle occurs in the matrix of the mitochondrion, releasing carbon dioxide and hydrogen atoms that pass to the electron transport chain where most ATP is made."},
    {q:"What is an oxygen debt and how is it repaid?", a:"The extra oxygen required after strenuous exercise to oxidise the lactic acid built up during anaerobic respiration; it is repaid by continued deep, rapid breathing after the effort stops."},
    {q:"State two effects of substance abuse on the excretory and respiratory systems.", a:"Alcohol damages the liver causing cirrhosis and overworks the kidneys; smoking destroys the cilia and alveolar walls causing bronchitis, emphysema and lung cancer."}
  ],
  tf:[
    {s:"Glucose is normally present in the urine of a healthy person.", a:"false", why:"All the glucose is selectively reabsorbed in the tubule; its presence indicates diabetes."},
    {s:"The diaphragm flattens during inspiration.", a:"true", why:"Its contraction increases thoracic volume so air enters the lungs."},
    {s:"Anaerobic respiration in muscle produces lactic acid.", a:"true", why:"Glucose is incompletely broken down without oxygen, giving lactic acid and a little ATP."},
    {s:"The Krebs cycle occurs in the cytoplasm.", a:"false", why:"It occurs in the matrix of the mitochondrion; glycolysis occurs in the cytoplasm."},
    {s:"Aerobic respiration releases more energy per glucose molecule than anaerobic.", a:"true", why:"About 38 ATP compared with only 2 from anaerobic respiration."},
    {s:"Urea is formed in the kidney.", a:"false", why:"Urea is formed in the liver from excess amino acids; the kidney excretes it."},
    {s:"Alveoli have walls one cell thick.", a:"true", why:"This gives a very short diffusion path for gas exchange."}
  ],
  classify:{ title:"Sort these structures and processes", groups:[
    {name:"Excretory organs", items:["kidney","skin","lungs","liver"]},
    {name:"Respiratory tract", items:["trachea","bronchus","bronchiole","alveolus"]},
    {name:"Aerobic respiration", items:["uses oxygen","38 ATP","carbon dioxide and water","mitochondrion"]},
    {name:"Anaerobic respiration", items:["no oxygen","2 ATP","lactic acid or ethanol","cytoplasm"]}
  ]},
  diagram:{ title:"Longitudinal section of the kidney and a nephron", caption:"State the function of each labelled part.", parts:[
    {p:"Cortex", f:"Outer region containing the glomeruli and Bowman's capsules"},
    {p:"Medulla", f:"Inner region containing the loops of Henle and collecting ducts"},
    {p:"Pelvis", f:"Cavity collecting urine before it passes to the ureter"},
    {p:"Glomerulus", f:"Capillary knot where ultrafiltration of the blood occurs"},
    {p:"Bowman's capsule", f:"Cup that collects the glomerular filtrate"},
    {p:"Proximal tubule", f:"Site of selective reabsorption of glucose, salts and water"},
    {p:"Loop of Henle", f:"Concentrates the urine by reabsorbing water and salts"},
    {p:"Collecting duct", f:"Carries urine to the pelvis; final water reabsorption under ADH"},
    {p:"Ureter", f:"Conveys urine from the kidney to the bladder"}
  ]},
  experiment:{
    title:"Demonstrating that exhaled air contains more carbon dioxide",
    aim:"To compare the carbon dioxide content of inhaled and exhaled air, and the effect of exercise.",
    materials:["Two boiling tubes","Limewater","Delivery tubes and a two-hole stopper assembly","Mouthpiece","Stop clock"],
    steps:[
      "Set up two tubes each containing equal volumes of limewater, connected so that breathing in draws air through tube A and breathing out passes air through tube B.",
      "Breathe gently in and out through the mouthpiece for two minutes.",
      "Record the time taken for the limewater in each tube to turn milky.",
      "Repeat the experiment with a fresh set-up after running on the spot for two minutes.",
      "Compare the times taken in all cases and tabulate the results.",
      "Do not suck limewater into the mouth — take care with the direction of the tubes."
    ],
    expect:"The limewater through which exhaled air passes turns milky within a short time, while that through which inhaled air is drawn stays clear far longer. This shows exhaled air contains much more carbon dioxide, produced by respiration in the tissues. After exercise the limewater turns milky faster still, because the higher rate of respiration in the muscles produces carbon dioxide more rapidly.",
    why:"Respiration in the tissues produces carbon dioxide, which is carried in the blood to the lungs and breathed out. Limewater turns milky because carbon dioxide forms insoluble calcium carbonate. Exercise raises the respiration rate, so carbon dioxide is produced faster."
  },
  apply:[
    {q:"A patient's urine contains protein. What does this suggest about the kidney?", a:"The glomerular membrane is damaged and is allowing large plasma proteins through, which normally cannot pass during ultrafiltration."},
    {q:"Explain why a sprinter continues to breathe deeply for minutes after a 100 m race.", a:"Anaerobic respiration during the sprint built up lactic acid; the extra oxygen taken in afterwards oxidises it, repaying the oxygen debt."},
    {q:"Why does a smoker develop a persistent cough and frequent chest infections?", a:"Smoke paralyses and destroys the cilia lining the airways, so mucus and trapped particles are not swept out; they accumulate, provoking coughing and providing a site for bacteria to multiply."},
    {q:"On a hot day a person produces little, dark urine. Explain in terms of homeostasis.", a:"Water is lost in sweat, so the blood becomes more concentrated; ADH is released and the collecting ducts reabsorb more water, producing a small volume of concentrated urine to conserve water."},
    {q:"Why can yeast be used to make both bread and alcohol?", a:"In anaerobic respiration yeast converts sugar to ethanol and carbon dioxide; the carbon dioxide raises the dough in baking, while the ethanol is the product wanted in brewing."}
  ],
  activities:[
    "Explain the process of excretion and of urination",
    "Describe the functions of tissues and organs in external and internal respiration",
    "LAB: draw and label the longitudinal section of the kidney",
    "Class discussion on the role of the diaphragm and intercostal muscles",
    "LAB: demonstrate that exhaled air contains more carbon dioxide",
    "Interpret the balanced equation for respiration and compare aerobic with anaerobic"
  ],
  materials:[
    "Primary text: Baffour Asante-Owusu et al., Senior High Biology (Longman, 2009)",
    "Kidney specimen for dissection",
    "Limewater, boiling tubes and delivery tubes",
    "Bell-jar model of the thorax",
    "Charts of the nephron and the respiratory system"
  ],
  assessment:["Laboratory report","Labelled drawings","Class discussion","Assignment","Written test"]
},
{
  grade:12, period:"V", sem:"Two", icon:"🧠",
  title:"Nervous and Endocrine Systems",
  subtitle:"Neurons, brain and spinal cord, reflex action, sense organs and hormonal control",
  outcomes:[
    "Outline the features of the coordination and control of body activities by both the nervous and endocrine systems",
    "Work together to prevent gender-based violence, rape, sexual abuse, STIs and intergenerational sex"
  ],
  objectives:[
    "Distinguish the functions of the nervous and endocrine systems",
    "Describe the structure and functions of a neuron and the brain",
    "Classify the neurons of the nervous system",
    "Draw the nervous system and list the major parts",
    "Describe the structure and functions of the spinal cord",
    "Compare the central and peripheral nervous systems",
    "Describe the structures and functions of the eye and ear",
    "Explain hormone secretion and control by negative feedback"
  ],
  note:"The <b>nervous system</b> gives rapid, short-lived, precisely targeted responses by electrical impulses; the <b>endocrine system</b> gives slower, longer-lasting, widespread responses by hormones in the blood. A <b>reflex arc</b> — receptor → sensory neuron → relay neuron → motor neuron → effector — produces a rapid automatic protective response. Hormones are regulated by <b>negative feedback</b>.",
  focus:[
    "Nervous system: central and peripheral divisions",
    "Structure and types of neurons: sensory, motor and relay",
    "The brain: cerebrum, cerebellum, medulla and hypothalamus",
    "The spinal cord and the reflex arc",
    "Generation and transmission of nerve impulses",
    "Sense organs: structure and function of the eye and ear",
    "Endocrine glands and their hormones",
    "Negative feedback control"
  ],
  terms:[
    {t:"neuron", d:"a nerve cell that transmits impulses", x:"A neuron has dendrites, a cell body and an axon."},
    {t:"axon", d:"the long fibre carrying impulses away from the cell body", x:"The axon may be a metre long."},
    {t:"dendrite", d:"a short branch receiving impulses", x:"Dendrites collect signals from other neurons."},
    {t:"myelin sheath", d:"the fatty insulating layer around an axon", x:"Myelin speeds up impulse conduction."},
    {t:"synapse", d:"the junction between two neurons", x:"Impulses cross a synapse by chemical transmitter."},
    {t:"sensory neuron", d:"a neuron carrying impulses from receptors to the CNS", x:"Sensory neurons carry pain signals."},
    {t:"motor neuron", d:"a neuron carrying impulses from the CNS to effectors", x:"Motor neurons stimulate muscles."},
    {t:"relay neuron", d:"a neuron connecting sensory and motor neurons in the CNS", x:"Relay neurons lie in the spinal cord."},
    {t:"central nervous system", d:"the brain and spinal cord", x:"The CNS processes information."},
    {t:"peripheral nervous system", d:"the nerves outside the brain and spinal cord", x:"The PNS links the CNS to the body."},
    {t:"reflex action", d:"an automatic rapid response to a stimulus", x:"Withdrawing the hand from heat is a reflex action."},
    {t:"reflex arc", d:"the nerve pathway of a reflex", x:"The reflex arc bypasses conscious thought."},
    {t:"cerebrum", d:"the largest part of the brain, controlling thought and voluntary action", x:"The cerebrum handles memory and reasoning."},
    {t:"cerebellum", d:"the brain region coordinating balance and muscular movement", x:"The cerebellum keeps us steady."},
    {t:"medulla oblongata", d:"the brain region controlling heartbeat and breathing", x:"The medulla controls involuntary vital actions."},
    {t:"hormone", d:"a chemical messenger secreted into the blood by a gland", x:"Insulin is a hormone."},
    {t:"endocrine gland", d:"a ductless gland secreting hormones into the blood", x:"The thyroid is an endocrine gland."},
    {t:"insulin", d:"the hormone lowering blood glucose", x:"Insulin is secreted by the pancreas."},
    {t:"glucagon", d:"the hormone raising blood glucose", x:"Glucagon converts glycogen to glucose."},
    {t:"adrenaline", d:"the hormone preparing the body for emergency", x:"Adrenaline raises heart rate."},
    {t:"negative feedback", d:"a control in which a change triggers a response reversing it", x:"Negative feedback stabilises blood glucose."},
    {t:"retina", d:"the light-sensitive layer at the back of the eye", x:"The retina contains rods and cones."},
    {t:"cochlea", d:"the coiled part of the inner ear that detects sound", x:"The cochlea converts vibration to impulses."},
    {t:"accommodation", d:"the adjustment of the lens to focus at different distances", x:"Accommodation lets us read close up."}
  ],
  facts:[
    {q:"State four differences between nervous and hormonal coordination.", a:"Nervous transmission is electrical and hormonal is chemical; nervous is very rapid and hormonal slower; nervous effects are short-lived and localised while hormonal effects are longer-lasting and widespread; nervous messages travel along neurons and hormones travel in the blood."},
    {q:"Name the three types of neuron and the direction each conducts.", a:"Sensory neurons carry impulses from receptors to the central nervous system; relay neurons connect within the CNS; motor neurons carry impulses from the CNS to muscles and glands."},
    {q:"Describe the pathway of a reflex arc.", a:"Receptor detects the stimulus → sensory neuron → relay neuron in the spinal cord → motor neuron → effector muscle or gland produces the response, without waiting for the brain."},
    {q:"Why is reflex action important?", a:"It is rapid and automatic, protecting the body from injury before the brain has time to process the stimulus consciously."},
    {q:"Name four parts of the brain and the function of each.", a:"The cerebrum controls thought, memory, reasoning and voluntary action; the cerebellum coordinates balance and fine muscular movement; the medulla oblongata controls heartbeat, breathing and blood pressure; the hypothalamus regulates temperature, thirst, hunger and links to the pituitary."},
    {q:"State three functions of the spinal cord.", a:"It conducts impulses between the brain and the body, it coordinates spinal reflexes, and it protects the nerve pathways within the vertebral column."},
    {q:"Name four endocrine glands, a hormone from each, and its effect.", a:"Pancreas — insulin lowers blood glucose; thyroid — thyroxine controls metabolic rate; adrenal — adrenaline prepares the body for emergency; pituitary — growth hormone controls growth; ovary or testis — oestrogen or testosterone control secondary sexual characteristics."},
    {q:"Explain negative feedback using blood glucose.", a:"When glucose rises, the pancreas releases insulin, which makes cells take up glucose and the liver store it as glycogen, so the level falls; when glucose falls, glucagon is released, glycogen is converted back to glucose, and the level rises — each change triggers the response that reverses it."},
    {q:"Name four parts of the eye and their functions.", a:"The cornea refracts entering light; the iris controls the size of the pupil and hence light entering; the lens focuses light by accommodation; the retina contains rods and cones that convert light to nerve impulses; the optic nerve carries impulses to the brain."},
    {q:"Name four parts of the ear and their functions.", a:"The pinna collects sound; the eardrum vibrates; the ossicles amplify and transmit the vibrations; the cochlea converts vibrations to nerve impulses; the semicircular canals detect balance and position."},
    {q:"How is a nerve impulse transmitted across a synapse?", a:"The arriving impulse causes vesicles to release a chemical transmitter into the gap; it diffuses across and binds to receptors on the next neuron, generating a new impulse there."}
  ],
  tf:[
    {s:"Reflex actions are under conscious control.", a:"false", why:"They are automatic and occur before the brain processes the stimulus consciously."},
    {s:"The cerebellum coordinates balance and muscular movement.", a:"true", why:"Damage to it causes unsteady, poorly coordinated movement."},
    {s:"Hormones travel to their targets along nerves.", a:"false", why:"Hormones are carried in the bloodstream, not along neurons."},
    {s:"Insulin lowers blood glucose concentration.", a:"true", why:"It promotes uptake of glucose by cells and its storage as glycogen."},
    {s:"The myelin sheath slows the transmission of impulses.", a:"false", why:"Myelin insulates the axon and greatly speeds up conduction."},
    {s:"The retina converts light into nerve impulses.", a:"true", why:"Its rods and cones are the photoreceptors of the eye."},
    {s:"Negative feedback amplifies a change in the internal environment.", a:"false", why:"It reverses the change, restoring the normal level."}
  ],
  classify:{ title:"Sort these structures and hormones", groups:[
    {name:"Central nervous system", items:["brain","spinal cord"]},
    {name:"Types of neuron", items:["sensory","motor","relay"]},
    {name:"Parts of the brain", items:["cerebrum","cerebellum","medulla oblongata","hypothalamus"]},
    {name:"Endocrine glands", items:["pancreas","thyroid","adrenal","pituitary"]},
    {name:"Hormones", items:["insulin","thyroxine","adrenaline","oestrogen"]}
  ]},
  diagram:{ title:"Horizontal section of the human eye", caption:"State the function of each labelled part.", parts:[
    {p:"Cornea", f:"Transparent front layer that refracts entering light"},
    {p:"Iris", f:"Coloured muscular ring controlling the size of the pupil"},
    {p:"Pupil", f:"Opening through which light enters the eye"},
    {p:"Lens", f:"Focuses light onto the retina by changing shape in accommodation"},
    {p:"Ciliary muscle", f:"Alters the thickness of the lens for focusing"},
    {p:"Retina", f:"Light-sensitive layer of rods and cones forming the image"},
    {p:"Optic nerve", f:"Carries impulses from the retina to the brain"},
    {p:"Sclera", f:"Tough white outer coat protecting and shaping the eyeball"},
    {p:"Choroid", f:"Pigmented layer supplying blood and preventing internal reflection"}
  ]},
  experiment:{
    title:"Measuring reaction time with the ruler drop test",
    aim:"To measure human reaction time and investigate whether practice improves it.",
    materials:["A 30 cm ruler","Chair and table","Recording table","Calculator"],
    steps:[
      "The subject sits with the forearm resting on the table and the hand over the edge, thumb and finger open about 2 cm.",
      "A partner holds the ruler vertically with the zero mark level with the top of the subject's thumb.",
      "Without warning the partner releases the ruler and the subject catches it as quickly as possible.",
      "Record the distance in centimetres at the point where the thumb grips.",
      "Repeat ten times and calculate the mean distance.",
      "Convert distance to reaction time using t = √(2d/g), and repeat the whole test after ten practice attempts."
    ],
    expect:"The ruler falls a measurable distance before it is caught, typically 15–20 cm, corresponding to a reaction time of roughly 0.15–0.20 seconds. The time taken represents the passage of the impulse from the eye along sensory neurons to the brain, processing there, and transmission along motor neurons to the hand muscles. With practice the mean distance usually decreases, showing that reaction time improves as the pathway becomes more familiar.",
    why:"The measured time covers the whole reflex pathway: light detected by the retina, impulses to the brain along sensory neurons, processing, then impulses along motor neurons to the hand muscles. Practice shortens it because the pathway becomes more efficient with repetition."
  },
  apply:[
    {q:"Why is the reflex that withdraws the hand from a hot object faster than a deliberate movement?", a:"The impulse passes through a short reflex arc in the spinal cord directly to the motor neuron, bypassing the brain's slower conscious processing."},
    {q:"A person with damage to the cerebellum walks unsteadily. Explain.", a:"The cerebellum coordinates balance and the fine timing of muscular contraction; without it movements are jerky and poorly balanced even though the muscles themselves are healthy."},
    {q:"Explain why a diabetic may need insulin injections rather than tablets of insulin.", a:"Insulin is a protein and would be digested by proteases in the gut if swallowed, so it must be injected to reach the bloodstream intact."},
    {q:"Describe the body's response when a person is suddenly frightened.", a:"Adrenaline is released, raising heart and breathing rate, dilating the pupils, diverting blood to the muscles and releasing glucose — preparing the body for fight or flight."},
    {q:"An elderly person cannot focus on small print. Explain in terms of accommodation.", a:"The lens becomes less elastic with age and the ciliary muscles weaken, so the lens cannot thicken enough to focus light from close objects onto the retina."}
  ],
  activities:[
    "List and describe the parts of the nervous system",
    "Examine and explain models of the brain and spinal cord",
    "Draw and label the parts of the brain and spinal cord",
    "Describe the structures and functions of the eye and ear",
    "Explain nervous actions and trace a reflex arc",
    "LAB: measure reaction time using the ruler drop test",
    "Discuss hormone secretion and negative feedback"
  ],
  materials:[
    "Primary text: Baffour Asante-Owusu et al., Senior High Biology (Longman, 2009)",
    "Models of the brain, eye and ear",
    "Charts of the nervous and endocrine systems",
    "Rulers and stop clocks",
    "Microscopes and prepared nerve slides"
  ],
  assessment:["Laboratory report","Labelled drawings","Class discussion","Group presentation","Written test"]
},
{
  grade:12, period:"VI", sem:"Two", icon:"♻️",
  title:"Ecology: Natural Resources, Pollution and Health",
  subtitle:"Renewable and non-renewable resources, conservation, pollution control and public health",
  outcomes:[
    "Appreciate the importance of conserving natural resources and that they contribute to the wealth of a nation",
    "Realise that renewable resources are regenerated while non-renewable resources can be exhausted if not used wisely",
    "Accept that pollution is harmful to the environment and organisms, and that immunisation prevents disease"
  ],
  objectives:[
    "Explain the concept and importance of natural resources",
    "Distinguish between renewable and non-renewable natural resources",
    "Explain methods of conserving natural resources",
    "Explain preserving the ecosystem as an approach to natural resource management",
    "Explain pollution and discuss the causes, effects and control of each type",
    "Explain the importance of vaccination, immunisation and personal hygiene"
  ],
  note:"<b>Natural resources</b> are materials from nature useful to man. <b>Renewable</b> resources — forests, fisheries, water, solar energy — regenerate if harvested no faster than they are replaced; <b>non-renewable</b> resources — iron ore, gold, diamonds, petroleum — are finite. <b>Pollution</b> is the release of harmful substances into the environment, and may be of the <b>air, water, land</b>, or take the form of <b>thermal</b> and <b>noise</b> pollution.",
  focus:[
    "Natural resources: definition and importance",
    "Renewable and non-renewable resources; Liberia's resources",
    "Conservation of natural resources",
    "Preserving the ecosystem as resource management",
    "Pollution: air, water, land, thermal and noise",
    "Causes, effects and control of pollution",
    "Vaccination, immunisation and personal hygiene"
  ],
  terms:[
    {t:"natural resource", d:"a material from nature that is useful to man", x:"Timber is a natural resource."},
    {t:"renewable resource", d:"a resource that regenerates naturally within a useful time", x:"Forests are renewable if replanted."},
    {t:"non-renewable resource", d:"a resource that cannot be replaced once used", x:"Petroleum is non-renewable."},
    {t:"conservation", d:"the wise use and protection of resources", x:"Conservation preserves resources for the future."},
    {t:"sustainable use", d:"using a resource no faster than it is replaced", x:"Sustainable use protects fisheries."},
    {t:"deforestation", d:"the clearing of forest cover", x:"Deforestation causes erosion and loss of habitat."},
    {t:"afforestation", d:"planting trees where there were none", x:"Afforestation restores degraded land."},
    {t:"pollution", d:"the release of harmful substances into the environment", x:"Pollution harms organisms and habitats."},
    {t:"pollutant", d:"the harmful substance released", x:"Carbon monoxide is a pollutant."},
    {t:"air pollution", d:"contamination of the atmosphere", x:"Vehicle exhaust causes air pollution."},
    {t:"water pollution", d:"contamination of rivers, lakes and the sea", x:"Mining waste causes water pollution."},
    {t:"thermal pollution", d:"harmful discharge of heat into water", x:"Thermal pollution lowers dissolved oxygen."},
    {t:"noise pollution", d:"unwanted sound harming health and behaviour", x:"Noise pollution causes stress and deafness."},
    {t:"eutrophication", d:"nutrient enrichment of water causing algal bloom and oxygen loss", x:"Fertiliser runoff causes eutrophication."},
    {t:"biodegradable", d:"able to be broken down by living organisms", x:"Food waste is biodegradable."},
    {t:"greenhouse effect", d:"the trapping of heat by atmospheric gases", x:"The greenhouse effect warms the planet."},
    {t:"recycling", d:"processing used materials into new products", x:"Recycling reduces waste and saves resources."},
    {t:"vaccination", d:"giving a vaccine to produce immunity", x:"Vaccination protects against measles."},
    {t:"immunisation", d:"the process of making a person immune to disease", x:"Immunisation has eradicated smallpox."},
    {t:"herd immunity", d:"protection of a population when most members are immune", x:"Herd immunity protects those who cannot be vaccinated."},
    {t:"biodiversity", d:"the variety of living organisms in an area", x:"Rainforests have high biodiversity."}
  ],
  facts:[
    {q:"Define natural resources and state three ways they contribute to a nation's wealth.", a:"Materials occurring in nature that are useful to man; they provide raw materials for industry, food and employment for the population, and export earnings and revenue for the state."},
    {q:"Distinguish renewable from non-renewable resources with two examples of each.", a:"Renewable resources regenerate naturally within a useful time — forests, fisheries, water and solar energy; non-renewable resources are finite and cannot be replaced once used — iron ore, gold, diamonds and petroleum."},
    {q:"Name four of Liberia's important natural resources.", a:"Iron ore, gold and diamonds; rubber and timber; fisheries and abundant fresh water; and fertile land for rice, cassava and cash crops."},
    {q:"State four methods of conserving natural resources.", a:"Sustainable harvesting and quotas; replanting and afforestation; recycling and reuse of materials; legal protection of parks and reserves; and public education."},
    {q:"Name the five types of pollution with one cause of each.", a:"Air pollution from vehicle exhaust and burning; water pollution from sewage and mining waste; land pollution from plastic and refuse dumping; thermal pollution from warm industrial discharge; and noise pollution from traffic and machinery."},
    {q:"State three effects of air pollution on health and the environment.", a:"It causes respiratory disease such as bronchitis and asthma; it produces acid rain that damages crops, soils and buildings; and greenhouse gases contribute to global warming."},
    {q:"Explain how eutrophication kills fish.", a:"Nutrients from fertiliser or sewage cause a rapid algal bloom; when the algae die, decomposing bacteria multiply and consume the dissolved oxygen, so the fish suffocate."},
    {q:"State four methods of controlling pollution.", a:"Treat sewage and industrial effluent before discharge; fit filters and catalytic converters to reduce emissions; recycle waste and dispose of refuse properly in sanitary landfill; and enforce environmental laws with public education."},
    {q:"Explain the difference between vaccination and immunisation.", a:"Vaccination is the act of administering a vaccine; immunisation is the resulting process by which the person becomes immune, the body producing antibodies and memory cells against that pathogen."},
    {q:"State four examples of good personal hygiene that prevent disease.", a:"Washing hands with soap before eating and after using the latrine; bathing regularly and wearing clean clothes; brushing the teeth; and keeping food covered and drinking safe water."},
    {q:"What is herd immunity and why does it matter?", a:"When a large majority of a population is immune, the pathogen cannot spread easily, which protects the few who cannot be vaccinated such as infants and the seriously ill."}
  ],
  tf:[
    {s:"Petroleum is a renewable natural resource.", a:"false", why:"It takes millions of years to form and is therefore non-renewable in human terms."},
    {s:"Forests are renewable if harvested sustainably and replanted.", a:"true", why:"They regenerate within a useful time provided they are not cut faster than they regrow."},
    {s:"Thermal pollution reduces the oxygen dissolved in water.", a:"true", why:"Warm water holds less dissolved oxygen while raising the oxygen demand of aquatic life."},
    {s:"Plastic waste decomposes quickly in the soil.", a:"false", why:"Plastic is non-biodegradable and persists for a very long time."},
    {s:"Immunisation protects only the individual vaccinated.", a:"false", why:"Widespread immunisation also creates herd immunity, protecting those who cannot be vaccinated."},
    {s:"Recycling helps conserve non-renewable resources.", a:"true", why:"Reprocessing used material reduces the quantity of new raw material that must be extracted."},
    {s:"Noise is not regarded as a form of pollution.", a:"false", why:"Noise pollution harms hearing, causes stress and disturbs sleep and wildlife."}
  ],
  classify:{ title:"Sort these resources and pollutants", groups:[
    {name:"Renewable resources", items:["forests","fisheries","fresh water","solar energy"]},
    {name:"Non-renewable resources", items:["iron ore","gold","diamonds","petroleum"]},
    {name:"Air pollutants", items:["carbon monoxide","sulphur dioxide","smoke","lead"]},
    {name:"Water pollutants", items:["sewage","mining waste","fertiliser runoff","oil spill"]},
    {name:"Conservation methods", items:["afforestation","recycling","protected reserves","fishing quotas"]}
  ]},
  diagram:{ title:"Sources and effects of pollution", caption:"State the main effect of each pollution source.", parts:[
    {p:"Vehicle exhaust", f:"Releases carbon monoxide and lead, causing respiratory disease and smog"},
    {p:"Factory chimney", f:"Emits sulphur dioxide producing acid rain that damages crops and buildings"},
    {p:"Untreated sewage", f:"Introduces pathogens and nutrients causing disease and eutrophication"},
    {p:"Mining waste", f:"Adds silt and toxic metals to rivers, killing aquatic life"},
    {p:"Refuse dump", f:"Non-biodegradable plastic accumulates, blocks drainage and breeds vectors"},
    {p:"Warm water discharge", f:"Thermal pollution lowers dissolved oxygen so fish suffocate"},
    {p:"Deforestation", f:"Causes erosion, loss of habitat and biodiversity, and increased carbon dioxide"}
  ]},
  experiment:{
    title:"Investigating the effect of detergent pollution on plant growth",
    aim:"To find whether detergent in water affects the germination and growth of seedlings.",
    materials:["Bean or maize seeds","Four labelled pots of the same soil","Detergent solution at three concentrations plus plain water","Measuring cylinder","Ruler","Recording table"],
    steps:[
      "Plant five seeds at equal depth in each of four pots and label them: water only, 1% detergent, 5% detergent, 10% detergent.",
      "Water each pot daily with 50 cm³ of its assigned solution, keeping all other conditions identical.",
      "Record the number of seeds that germinate in each pot each day for two weeks.",
      "Measure and record the height of each seedling every three days.",
      "Note the colour and condition of the leaves in each pot.",
      "Plot mean height against time for the four treatments and compare."
    ],
    expect:"The pot watered with plain water shows the highest germination rate and the tallest, healthiest seedlings. As detergent concentration rises, germination is delayed and reduced, growth is stunted and leaves become yellow and may die. This shows that detergent is a pollutant which damages plants, and that the harm increases with concentration — which is why household and industrial effluent should be treated before release.",
    why:"Detergent is a pollutant that damages cell membranes and disrupts water uptake by the roots. The harm increases with concentration, which is the reason household and industrial effluent must be treated before it is released into soil or waterways."
  },
  apply:[
    {q:"A mining company discharges silt into a river used by a village. State three consequences.", a:"The silt blocks fish gills and kills aquatic life; it makes the water unsafe and unpleasant for drinking and washing; and it settles on the bed destroying breeding grounds and reducing the village's fish catch."},
    {q:"Suggest three ways a Liberian community with no waste collection can manage its refuse.", a:"Separate and compost biodegradable food and plant waste for use on farms; collect and reuse or recycle plastics, metal and glass; and dispose of the remainder in a properly sited covered pit away from water sources rather than burning it in the open."},
    {q:"Why is protecting a rainforest more valuable than the timber it contains?", a:"The living forest holds soil against erosion, regulates rainfall and rivers, absorbs carbon dioxide, and shelters biodiversity and medicinal species — services that continue indefinitely, while the timber can be sold only once."},
    {q:"A parent refuses to have her child immunised, saying the disease is rare now. Explain the flaw.", a:"The disease is rare precisely because most children are immunised; if enough parents refuse, herd immunity collapses and the disease returns, striking the unvaccinated first."},
    {q:"Explain how planting trees along a river bank benefits both the water and the soil.", a:"The roots bind the soil and prevent erosion, so less silt enters the river; the trees also filter runoff, provide shade that keeps the water cool and oxygenated, and create habitat for wildlife."}
  ],
  activities:[
    "Group work on the importance of conserving natural resources",
    "Field trip to view sites of natural resources such as forests, mines and rivers",
    "Survey and classify the resources of your own county as renewable or non-renewable",
    "Investigate a local source of pollution and propose control measures",
    "LAB: investigate the effect of a pollutant on seedling growth",
    "Discuss vaccination, immunisation and personal hygiene"
  ],
  materials:[
    "Primary text: Baffour Asante-Owusu et al., Senior High Biology (Longman, 2009)",
    "Seeds, pots, soil and detergent",
    "Charts of pollution and of Liberia's natural resources",
    "Measuring cylinders and rulers",
    "Health literature on immunisation"
  ],
  assessment:["Field trip report","Laboratory investigation","Group project","Class discussion","Written test"]
}

];
